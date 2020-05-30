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
a[c]=function(){a[c]=function(){H.oV(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kN"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kN"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kN(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kt:function kt(){},
jY:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
mY:function(a,b,c,d){if(!!J.S(a).$iq)return new H.fh(a,b,[c,d])
return new H.c4(a,b,[c,d])},
fD:function(){return new P.cg("No element")},
mN:function(){return new P.cg("Too many elements")},
nl:function(a,b){var u=J.af(a)
if(typeof u!=="number")return u.L()
H.dq(a,0,u-1,b)},
dq:function(a,b,c,d){if(c-b<=32)H.nk(a,b,c,d)
else H.nj(a,b,c,d)},
nk:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.bi(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a0()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.h(a,p))
r=p}t.m(a,r,s)}},
nj:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a3(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a3(a4+a5,2),f=g-j,e=g+j,d=J.bi(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a1
a1=a0
a0=u}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.D(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.R()
if(p<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a0()
if(p>0){--s
continue}else{o=s-1
if(p<0){d.m(a3,r,d.h(a3,t))
n=t+1
d.m(a3,t,d.h(a3,s))
d.m(a3,s,q)
s=o
t=n
break}else{d.m(a3,r,d.h(a3,s))
d.m(a3,s,q)
s=o
break}}}}m=!0}else{for(r=t;r<=s;++r){q=d.h(a3,r)
l=a6.$2(q,b)
if(typeof l!=="number")return l.R()
if(l<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.a0()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a0()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.R()
o=s-1
if(p<0){d.m(a3,r,d.h(a3,t))
n=t+1
d.m(a3,t,d.h(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.h(a3,s))
d.m(a3,s,q)}s=o
break}}}}m=!1}a2=t-1
d.m(a3,a4,d.h(a3,a2))
d.m(a3,a2,b)
a2=s+1
d.m(a3,a5,d.h(a3,a2))
d.m(a3,a2,a0)
H.dq(a3,a4,t-2,a6)
H.dq(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.D(a6.$2(d.h(a3,t),b),0);)++t
for(;J.D(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.R()
o=s-1
if(p<0){d.m(a3,r,d.h(a3,t))
n=t+1
d.m(a3,t,d.h(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.h(a3,s))
d.m(a3,s,q)}s=o
break}}H.dq(a3,t,s,a6)}else H.dq(a3,t,s,a6)},
m:function m(a){this.a=a},
q:function q(){},
d9:function d9(){},
b5:function b5(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c4:function c4(a,b,c){this.a=a
this.b=b
this.$ti=c},
fh:function fh(a,b,c){this.a=a
this.b=b
this.$ti=c},
fX:function fX(a,b){this.a=null
this.b=a
this.c=b},
fY:function fY(a,b,c){this.a=a
this.b=b
this.$ti=c},
cr:function cr(a,b,c){this.a=a
this.b=b
this.$ti=c},
iX:function iX(a,b){this.a=a
this.b=b},
d0:function d0(){},
iz:function iz(){},
dE:function dE(){},
mF:function(){throw H.c(P.y("Cannot modify unmodifiable Map"))},
cJ:function(a){var u,t=H.oW(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oE:function(a){return v.types[a]},
m_:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.S(a).$iA},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a3(a)
if(typeof u!=="string")throw H.c(H.ad(a))
return u},
cd:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nb:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.d(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.Y(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.E(s,q)|32)>t)return}return parseInt(a,b)},
ce:function(a){return H.n2(a)+H.lO(H.cI(a),0,null)},
n2:function(a){var u,t,s,r,q,p,o,n=J.S(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.Q||!!n.$ibE){r=C.t(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cJ(t.length>1&&C.a.E(t,0)===36?C.a.a5(t,1):t)},
n3:function(){if(!!self.location)return self.location.href
return},
li:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
nc:function(a){var u,t,s,r=H.b([],[P.v])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ad(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aN(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.ad(s))}return H.li(r)},
lj:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ad(s))
if(s<0)throw H.c(H.ad(s))
if(s>65535)return H.nc(a)}return H.li(a)},
nd:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.ib()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
by:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aN(u,10))>>>0,56320|u&1023)}}throw H.c(P.Y(a,0,1114111,null,null))},
bx:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
na:function(a){var u=H.bx(a).getFullYear()+0
return u},
n8:function(a){var u=H.bx(a).getMonth()+1
return u},
n4:function(a){var u=H.bx(a).getDate()+0
return u},
n5:function(a){var u=H.bx(a).getHours()+0
return u},
n7:function(a){var u=H.bx(a).getMinutes()+0
return u},
n9:function(a){var u=H.bx(a).getSeconds()+0
return u},
n6:function(a){var u=H.bx(a).getMilliseconds()+0
return u},
w:function(a){throw H.c(H.ad(a))},
d:function(a,b){if(a==null)J.af(a)
throw H.c(H.bN(a,b))},
bN:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aj(!0,b,s,null)
u=J.af(a)
if(!(b<0)){if(typeof u!=="number")return H.w(u)
t=b>=u}else t=!0
if(t)return P.L(b,a,s,null,u)
return P.dm(b,s)},
oy:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bz(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bz(a,c,!0,b,"end",u)
return new P.aj(!0,b,"end",null)},
ad:function(a){return new P.aj(!0,a,null,null)},
c:function(a){var u
if(a==null)a=new P.dj()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.m4})
u.name=""}else u.toString=H.m4
return u},
m4:function(){return J.a3(this.dartException)},
p:function(a){throw H.c(a)},
l:function(a){throw H.c(P.aL(a))},
aF:function(a){var u,t,s,r,q,p
a=H.m3(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.il(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
im:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ls:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lf:function(a,b){return new H.hs(a,b==null?null:b.method)},
ku:function(a,b){var u=b==null,t=u?null:b.method
return new H.fJ(a,t,u?null:b.receiver)},
ae:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kg(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aN(t,16)&8191)===10)switch(s){case 438:return f.$1(H.ku(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lf(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.m8()
q=$.m9()
p=$.ma()
o=$.mb()
n=$.me()
m=$.mf()
l=$.md()
$.mc()
k=$.mh()
j=$.mg()
i=r.ad(u)
if(i!=null)return f.$1(H.ku(u,i))
else{i=q.ad(u)
if(i!=null){i.method="call"
return f.$1(H.ku(u,i))}else{i=p.ad(u)
if(i==null){i=o.ad(u)
if(i==null){i=n.ad(u)
if(i==null){i=m.ad(u)
if(i==null){i=l.ad(u)
if(i==null){i=o.ad(u)
if(i==null){i=k.ad(u)
if(i==null){i=j.ad(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lf(u,i))}}return f.$1(new H.iy(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.ds()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aj(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.ds()
return a},
kR:function(a){var u
if(a==null)return new H.ei(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ei(a)},
oC:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
oK:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.u("Unsupported number of arguments for wrapped closure"))},
bM:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oK)
a.$identity=u
return u},
mE:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.i0().constructor.prototype):Object.create(new H.bS(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ar
if(typeof t!=="number")return t.B()
$.ar=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.l7(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mA(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.l7(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mA:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oE,a)
if(typeof a=="function")if(b)return a
else{u=c?H.l5:H.kj
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
mB:function(a,b,c,d){var u=H.kj
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
l7:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mD(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mB(t,!r,u,b)
if(t===0){r=$.ar
if(typeof r!=="number")return r.B()
$.ar=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bT
return new Function(r+H.e(q==null?$.bT=H.eW("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ar
if(typeof r!=="number")return r.B()
$.ar=r+1
o+=r
r="return function("+o+"){return this."
q=$.bT
return new Function(r+H.e(q==null?$.bT=H.eW("self"):q)+"."+H.e(u)+"("+o+");}")()},
mC:function(a,b,c,d){var u=H.kj,t=H.l5
switch(b?-1:a){case 0:throw H.c(H.nh("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mD:function(a,b){var u,t,s,r,q,p,o,n=$.bT
if(n==null)n=$.bT=H.eW("self")
u=$.l4
if(u==null)u=$.l4=H.eW("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mC(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ar
if(typeof u!=="number")return u.B()
$.ar=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ar
if(typeof u!=="number")return u.B()
$.ar=u+1
return new Function(n+u+"}")()},
kN:function(a,b,c,d,e,f,g){return H.mE(a,b,c,d,!!e,!!f,g)},
kj:function(a){return a.a},
l5:function(a){return a.c},
eW:function(a){var u,t,s,r=new H.bS("self","target","receiver","name"),q=J.kr(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
oP:function(a,b){throw H.c(H.mz(a,H.cJ(b.substring(2))))},
r:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.S(a)[b]
else u=!0
if(u)return a
H.oP(a,b)},
oA:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mz:function(a,b){return new H.eX("CastError: "+P.kp(a)+": type '"+H.e(H.os(a))+"' is not a subtype of type '"+b+"'")},
os:function(a){var u,t=J.S(a)
if(!!t.$ibU){u=H.oA(t)
if(u!=null)return H.oQ(u)
return"Closure"}return H.ce(a)},
oV:function(a){throw H.c(new P.f8(a))},
nh:function(a){return new H.hL(a)},
lY:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cI:function(a){if(a==null)return
return a.$ti},
pw:function(a,b,c){return H.ke(a["$a"+H.e(c)],H.cI(b))},
oD:function(a,b,c,d){var u=H.ke(a["$a"+H.e(c)],H.cI(b))
return u==null?null:u[d]},
kQ:function(a,b,c){var u=H.ke(a["$a"+H.e(b)],H.cI(a))
return u==null?null:u[c]},
aI:function(a,b){var u=H.cI(a)
return u==null?null:u[b]},
oQ:function(a){return H.bh(a,null)},
bh:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cJ(a[0].name)+H.lO(a,1,b)
if(typeof a=="function")return H.cJ(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.e(b[t])}if('func' in a)return H.nY(a,b)
if('futureOr' in a)return"FutureOr<"+H.bh("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nY:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.h])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.a.B(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a1)p+=" extends "+H.bh(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bh(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bh(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bh(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oB(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bh(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lO:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.R("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bh(p,c)}return"<"+u.i(0)+">"},
ke:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pu:function(a,b,c){return a.apply(b,H.ke(J.S(b)["$a"+H.e(c)],H.cI(b)))},
pv:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oM:function(a){var u,t,s,r,q=$.lZ.$1(a),p=$.jW[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k1[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.lT.$2(a,q)
if(q!=null){p=$.jW[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k1[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.ka(u)
$.jW[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.k1[q]=u
return u}if(s==="-"){r=H.ka(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.m1(a,u)
if(s==="*")throw H.c(P.ix(q))
if(v.leafTags[q]===true){r=H.ka(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.m1(a,u)},
m1:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kT(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ka:function(a){return J.kT(a,!1,null,!!a.$iA)},
oN:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ka(u)
else return J.kT(u,c,null,null)},
oI:function(){if(!0===$.kS)return
$.kS=!0
H.oJ()},
oJ:function(){var u,t,s,r,q,p,o,n
$.jW=Object.create(null)
$.k1=Object.create(null)
H.oH()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.m2.$1(q)
if(p!=null){o=H.oN(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oH:function(){var u,t,s,r,q,p,o=C.F()
o=H.bL(C.G,H.bL(C.H,H.bL(C.u,H.bL(C.u,H.bL(C.I,H.bL(C.J,H.bL(C.K(C.t),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lZ=new H.jZ(r)
$.lT=new H.k_(q)
$.m2=new H.k0(p)},
bL:function(a,b){return a(b)||b},
mR:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.T("Illegal RegExp pattern ("+String(p)+")",a,null))},
oT:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oz:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
m3:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kV:function(a,b,c){var u=H.oU(a,b,c)
return u},
oU:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.m3(b),'g'),H.oz(c))},
f1:function f1(){},
f2:function f2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
il:function il(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hs:function hs(a,b){this.a=a
this.b=b},
fJ:function fJ(a,b,c){this.a=a
this.b=b
this.c=c},
iy:function iy(a){this.a=a},
kg:function kg(a){this.a=a},
ei:function ei(a){this.a=a
this.b=null},
bU:function bU(){},
i8:function i8(){},
i0:function i0(){},
bS:function bS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eX:function eX(a){this.a=a},
hL:function hL(a){this.a=a},
I:function I(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fI:function fI(a){this.a=a},
fN:function fN(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fO:function fO(a,b){this.a=a
this.$ti=b},
fP:function fP(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jZ:function jZ(a){this.a=a},
k_:function k_(a){this.a=a},
k0:function k0(a){this.a=a},
fH:function fH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bJ:function(a){return a},
n0:function(a){return new Int8Array(a)},
aG:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bN(b,a))},
nW:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oy(a,b,c))
return b},
c9:function c9(){},
b8:function b8(){},
de:function de(){},
ca:function ca(){},
df:function df(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(){},
dg:function dg(){},
cb:function cb(){},
cv:function cv(){},
cw:function cw(){},
cx:function cx(){},
cy:function cy(){},
oB:function(a){return J.lc(a?Object.keys(a):[],null)},
oW:function(a){return v.mangledGlobalNames[a]},
oO:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kT:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jX:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kS==null){H.oI()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.ix("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kX()]
if(r!=null)return r
r=H.oM(a)
if(r!=null)return r
if(typeof a=="function")return C.R
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.kX(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
mO:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.ki(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.Y(a,0,4294967295,"length",null))
return J.lc(new Array(a),b)},
lc:function(a,b){return J.kr(H.b(a,[b]))},
kr:function(a){a.fixed$length=Array
return a},
mP:function(a,b){return J.cM(a,b)},
S:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d4.prototype
return J.fG.prototype}if(typeof a=="string")return J.b3.prototype
if(a==null)return J.d5.prototype
if(typeof a=="boolean")return J.fF.prototype
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.a1)return a
return J.jX(a)},
bi:function(a){if(typeof a=="string")return J.b3.prototype
if(a==null)return a
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.a1)return a
return J.jX(a)},
eG:function(a){if(a==null)return a
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.a1)return a
return J.jX(a)},
lX:function(a){if(typeof a=="number")return J.c1.prototype
if(typeof a=="string")return J.b3.prototype
if(a==null)return a
if(!(a instanceof P.a1))return J.bE.prototype
return a},
cH:function(a){if(typeof a=="string")return J.b3.prototype
if(a==null)return a
if(!(a instanceof P.a1))return J.bE.prototype
return a},
bP:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.a1)return a
return J.jX(a)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.S(a).q(a,b)},
kZ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lX(a).p(a,b)},
bR:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.m_(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bi(a).h(a,b)},
kh:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.m_(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eG(a).m(a,b,c)},
mq:function(a,b){return J.cH(a).E(a,b)},
mr:function(a,b,c){return J.bP(a).fH(a,b,c)},
ms:function(a,b,c,d){return J.bP(a).h_(a,b,c,d)},
mt:function(a,b){return J.cH(a).V(a,b)},
cM:function(a,b){return J.lX(a).aQ(a,b)},
eJ:function(a,b){return J.eG(a).I(a,b)},
mu:function(a,b,c,d){return J.bP(a).hp(a,b,c,d)},
l_:function(a,b){return J.eG(a).F(a,b)},
mv:function(a){return J.bP(a).gh8(a)},
l0:function(a){return J.bP(a).gbW(a)},
cN:function(a){return J.S(a).gH(a)},
aJ:function(a){return J.eG(a).gS(a)},
af:function(a){return J.bi(a).gl(a)},
l1:function(a){return J.eG(a).hV(a)},
mw:function(a,b){return J.bP(a).hZ(a,b)},
mx:function(a,b,c){return J.cH(a).t(a,b,c)},
my:function(a){return J.cH(a).i5(a)},
a3:function(a){return J.S(a).i(a)},
a:function a(){},
fF:function fF(){},
d5:function d5(){},
d6:function d6(){},
hw:function hw(){},
bE:function bE(){},
b4:function b4(){},
b2:function b2(a){this.$ti=a},
ks:function ks(a){this.$ti=a},
a4:function a4(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c1:function c1(){},
d4:function d4(){},
fG:function fG(){},
b3:function b3(){}},P={
nw:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.ot()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bM(new P.iZ(s),1)).observe(u,{childList:true})
return new P.iY(s,u,t)}else if(self.setImmediate!=null)return P.ou()
return P.ov()},
nx:function(a){self.scheduleImmediate(H.bM(new P.j_(a),0))},
ny:function(a){self.setImmediate(H.bM(new P.j0(a),0))},
nz:function(a){P.kB(C.n,a)},
kB:function(a,b){var u=C.c.a3(a.a,1000)
return P.nG(u<0?0:u,b)},
lr:function(a,b){var u=C.c.a3(a.a,1000)
return P.nH(u<0?0:u,b)},
nG:function(a,b){var u=new P.eo()
u.ei(a,b)
return u},
nH:function(a,b){var u=new P.eo()
u.ej(a,b)
return u},
pr:function(a){return new P.bF(a,1)},
nC:function(){return C.X},
nD:function(a){return new P.bF(a,3)},
o0:function(a,b){return new P.jt(a,[b])},
om:function(){var u,t
for(;u=$.bK,u!=null;){$.cG=null
t=u.b
$.bK=t
if(t==null)$.cF=null
u.a.$0()}},
or:function(){$.kL=!0
try{P.om()}finally{$.cG=null
$.kL=!1
if($.bK!=null)$.kY().$1(P.lU())}},
op:function(a){var u=new P.dL(a)
if($.bK==null){$.bK=$.cF=u
if(!$.kL)$.kY().$1(P.lU())}else $.cF=$.cF.b=u},
oq:function(a){var u,t,s=$.bK
if(s==null){P.op(a)
$.cG=$.cF
return}u=new P.dL(a)
t=$.cG
if(t==null){u.b=s
$.bK=$.cG=u}else{u.b=t.b
$.cG=t.b=u
if(u.b==null)$.cF=u}},
lq:function(a,b){var u=$.aq
if(u===C.f)return P.kB(a,b)
return P.kB(a,u.h9(b))},
no:function(a,b){var u=$.aq
if(u===C.f)return P.lr(a,b)
return P.lr(a,u.d0(b,P.dy))},
lP:function(a,b,c,d,e){var u={}
u.a=d
P.oq(new P.jP(u,e))},
on:function(a,b,c,d){var u,t=$.aq
if(t===c)return d.$0()
$.aq=c
u=t
try{t=d.$0()
return t}finally{$.aq=u}},
oo:function(a,b,c,d,e){var u,t=$.aq
if(t===c)return d.$1(e)
$.aq=c
u=t
try{t=d.$1(e)
return t}finally{$.aq=u}},
iZ:function iZ(a){this.a=a},
iY:function iY(a,b,c){this.a=a
this.b=b
this.c=c},
j_:function j_(a){this.a=a},
j0:function j0(a){this.a=a},
eo:function eo(){this.c=0},
jx:function jx(a,b){this.a=a
this.b=b},
jw:function jw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bF:function bF(a,b){this.a=a
this.b=b},
bG:function bG(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jt:function jt(a,b){this.a=a
this.$ti=b},
dL:function dL(a){this.a=a
this.b=null},
du:function du(){},
i3:function i3(){},
dy:function dy(){},
jG:function jG(){},
jP:function jP(a,b){this.a=a
this.b=b},
je:function je(){},
jf:function jf(a,b){this.a=a
this.b=b},
jg:function jg(a,b,c){this.a=a
this.b=b
this.c=c},
mT:function(a,b){return new H.I([a,b])},
kv:function(a,b){return new H.I([a,b])},
mV:function(a){return H.oC(a,new H.I([null,null]))},
c3:function(a){return new P.jb([a])},
kG:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nF:function(a,b){var u=new P.e_(a,b)
u.c=a.e
return u},
mM:function(a,b,c){var u,t
if(P.kM(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.h])
$.a9.push(a)
try{P.o_(a,u)}finally{if(0>=$.a9.length)return H.d($.a9,-1)
$.a9.pop()}t=P.lo(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kq:function(a,b,c){var u,t
if(P.kM(a))return b+"..."+c
u=new P.R(b)
$.a9.push(a)
try{t=u
t.a=P.lo(t.a,a,", ")}finally{if(0>=$.a9.length)return H.d($.a9,-1)
$.a9.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kM:function(a){var u,t
for(u=$.a9.length,t=0;t<u;++t)if(a===$.a9[t])return!0
return!1},
o_:function(a,b){var u,t,s,r,q,p,o,n=a.gS(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.u())return
u=H.e(n.gC(n))
b.push(u)
m+=u.length+2;++l}if(!n.u()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gC(n);++l
if(!n.u()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gC(n);++l
for(;n.u();r=q,q=p){p=n.gC(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.e(r)
t=H.e(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
mU:function(a,b,c){var u=P.mT(b,c)
a.F(0,new P.fQ(u))
return u},
ld:function(a,b){var u,t,s=P.c3(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t)s.n(0,a[t])
return s},
kx:function(a){var u,t={}
if(P.kM(a))return"{...}"
u=new P.R("")
try{$.a9.push(a)
u.a+="{"
t.a=!0
J.l_(a,new P.fV(t,u))
u.a+="}"}finally{if(0>=$.a9.length)return H.d($.a9,-1)
$.a9.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jb:function jb(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jc:function jc(a){this.a=a
this.c=this.b=null},
e_:function e_(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fC:function fC(){},
fQ:function fQ(a){this.a=a},
fR:function fR(){},
x:function x(){},
fU:function fU(){},
fV:function fV(a,b){this.a=a
this.b=b},
a0:function a0(){},
jy:function jy(){},
fW:function fW(){},
dF:function dF(a,b){this.a=a
this.$ti=b},
ji:function ji(){},
e0:function e0(){},
et:function et(){},
nr:function(a,b,c,d){if(b instanceof Uint8Array)return P.ns(!1,b,c,d)
return},
ns:function(a,b,c,d){var u,t,s=$.mi()
if(s==null)return
u=0===c
if(u&&!0)return P.kE(s,b)
t=b.length
d=P.aS(c,d,t)
if(u&&d===t)return P.kE(s,b)
return P.kE(s,b.subarray(c,d))},
kE:function(a,b){if(P.nu(b))return
return P.nv(a,b)},
nv:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ae(t)}return},
nu:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nt:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ae(t)}return},
lR:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.w(c)
u=J.bi(a)
t=b
for(;t<c;++t){s=u.h(a,t)
if(typeof s!=="number")return s.a7()
if((s&127)!==s)return t-b}return c-b},
l3:function(a,b,c,d,e,f){if(C.c.ba(f,4)!==0)throw H.c(P.T("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.T("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.T("Invalid base64 padding, more than two '=' characters",a,b))},
eT:function eT(){},
eU:function eU(){},
eZ:function eZ(){},
f3:function f3(){},
fj:function fj(){},
fA:function fA(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fz:function fz(a){this.a=a},
iH:function iH(){},
iJ:function iJ(){},
jE:function jE(a){this.b=0
this.c=a},
iI:function iI(a){this.a=a},
jD:function jD(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eH:function(a,b,c){var u=H.nb(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.T(a,null,null))},
mJ:function(a){if(a instanceof H.bU)return a.i(0)
return"Instance of '"+H.e(H.ce(a))+"'"},
mW:function(a,b,c){var u,t,s=J.mO(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
kw:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aJ(a);u.u();)t.push(u.gC(u))
if(b)return t
return J.kr(t)},
ch:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.aS(b,c,u)
if(b<=0){if(typeof c!=="number")return c.R()
t=c<u}else t=!0
return H.lj(t?C.b.dY(a,b,c):a)}if(!!J.S(a).$icb)return H.nd(a,b,P.aS(b,c,a.length))
return P.nm(a,b,c)},
nm:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.Y(b,0,J.af(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.Y(c,b,J.af(a),q,q))
t=J.aJ(a)
for(s=0;s<b;++s)if(!t.u())throw H.c(P.Y(b,0,s,q,q))
r=[]
if(u)for(;t.u();)r.push(t.gC(t))
else for(s=b;s<c;++s){if(!t.u())throw H.c(P.Y(c,b,s,q,q))
r.push(t.gC(t))}return H.lj(r)},
nf:function(a){return new H.fH(a,H.mR(a,!1,!0,!1,!1,!1))},
lo:function(a,b,c){var u=J.aJ(b)
if(!u.u())return a
if(c.length===0){do a+=H.e(u.gC(u))
while(u.u())}else{a+=H.e(u.gC(u))
for(;u.u();)a=a+c+H.e(u.gC(u))}return a},
lu:function(){var u=H.n3()
if(u!=null)return P.nq(u)
throw H.c(P.y("'Uri.base' is not supported"))},
eu:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mo().b
if(typeof b!=="string")H.p(H.ad(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.gho().bY(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.by(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mG:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mH:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cW:function(a){if(a>=10)return""+a
return"0"+a},
l9:function(a){return new P.b0(1000*a)},
kp:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a3(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mJ(a)},
eN:function(a){return new P.aj(!1,null,null,a)},
ki:function(a,b,c){return new P.aj(!0,a,b,c)},
dm:function(a,b){return new P.bz(null,null,!0,a,b,"Value not in range")},
Y:function(a,b,c,d,e){return new P.bz(b,c,!0,a,d,"Invalid value")},
aS:function(a,b,c){var u
if(typeof a!=="number")return H.w(a)
if(0<=a){if(typeof c!=="number")return H.w(c)
u=a>c}else u=!0
if(u)throw H.c(P.Y(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.w(c)
u=b>c}else u=!0
if(u)throw H.c(P.Y(b,a,c,"end",null))
return b}return c},
lk:function(a,b){if(typeof a!=="number")return a.R()
if(a<0)throw H.c(P.Y(a,0,null,b,null))},
L:function(a,b,c,d,e){var u=e==null?J.af(b):e
return new P.fB(u,!0,a,c,"Index out of range")},
y:function(a){return new P.iA(a)},
ix:function(a){return new P.iw(a)},
ln:function(a){return new P.cg(a)},
aL:function(a){return new P.f0(a)},
u:function(a){return new P.dT(a)},
T:function(a,b,c){return new P.ft(a,b,c)},
mX:function(a,b,c){var u,t,s=H.b([],[c])
C.b.sl(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.d(s,u)
s[u]=t}return s},
kU:function(a){H.oO(a)},
nq:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.E(a,4)^58)*3|C.a.E(a,0)^100|C.a.E(a,1)^97|C.a.E(a,2)^116|C.a.E(a,3)^97)>>>0
if(u===0)return P.lt(e<e?C.a.t(a,0,e):a,5,f).gdP()
else if(u===32)return P.lt(C.a.t(a,5,e),0,f).gdP()}t=new Array(8)
t.fixed$length=Array
s=H.b(t,[P.v])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.lQ(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.ia()
if(r>=0)if(P.lQ(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.B()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.R()
if(typeof n!=="number")return H.w(n)
if(m<n)n=m
if(typeof o!=="number")return o.R()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.R()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.R()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.a4(a,"..",o)))j=n>o+2&&C.a.a4(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.a4(a,"file",0)){if(q<=0){if(!C.a.a4(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.a.t(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.a.aT(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a4(a,"http",0)){if(t&&p+3===o&&C.a.a4(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aT(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a4(a,"https",0)){if(t&&p+4===o&&C.a.a4(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aT(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.t(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jl(a,r,q,p,o,n,m,k)}return P.nI(a,0,e,r,q,p,o,n,m,k)},
lw:function(a){var u=P.h
return C.b.hu(H.b(a.split("&"),[u]),P.kv(u,u),new P.iF(C.e))},
np:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iC(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.V(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eH(C.a.t(a,s,t),n,n)
if(typeof p!=="number")return p.a0()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eH(C.a.t(a,s,c),n,n)
if(typeof p!=="number")return p.a0()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
lv:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iD(a),d=new P.iE(e,a)
if(a.length<2)e.$1("address is too short")
u=H.b([],[P.v])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.V(a,t)
if(p===58){if(t===b){++t
if(C.a.V(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gat(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.np(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.d(l,i)
l[i]=0
f=i+1
if(f>=k)return H.d(l,f)
l[f]=0
i+=2}else{f=C.c.aN(h,8)
if(i<0||i>=k)return H.d(l,i)
l[i]=f
f=i+1
if(f>=k)return H.d(l,f)
l[f]=h&255
i+=2}}return l},
nI:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nQ(a,b,d)
else{if(d===b)P.bI(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nR(a,u,e-1):""
s=P.nN(a,e,f,!1)
if(typeof f!=="number")return f.B()
r=f+1
if(typeof g!=="number")return H.w(g)
q=r<g?P.nP(P.eH(C.a.t(a,r,g),new P.jz(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nO(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.R()
o=h<i?P.kI(a,h+1,i,n):n
return new P.bH(j,t,s,q,p,o,i<c?P.nM(a,i+1,c):n)},
lI:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bI:function(a,b,c){throw H.c(P.T(c,a,b))},
nP:function(a,b){if(a!=null&&a===P.lI(b))return
return a},
nN:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.V(a,b)===91){if(typeof c!=="number")return c.L()
u=c-1
if(C.a.V(a,u)!==93)P.bI(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nK(a,t,u)
if(typeof s!=="number")return s.R()
if(s<u){r=s+1
q=P.lN(a,C.a.a4(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lv(a,t,s)
return C.a.t(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.w(c)
p=b
for(;p<c;++p)if(C.a.V(a,p)===58){s=C.a.bo(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lN(a,C.a.a4(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lv(a,b,s)
return"["+C.a.t(a,b,s)+q+"]"}return P.nT(a,b,c)},
nK:function(a,b,c){var u,t=C.a.bo(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.w(c)
u=t<c}else u=!1
return u?t:c},
lN:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.R(d):null
if(typeof c!=="number")return H.w(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.V(a,u)
if(r===37){q=P.kJ(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.R("")
o=l.a+=C.a.t(a,t,u)
if(p)q=C.a.t(a,u,u+3)
else if(q==="%")P.bI(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.R("")
if(t<u){l.a+=C.a.t(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.V(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.R("")
l.a+=C.a.t(a,t,u)
l.a+=P.kH(r)
u+=m
t=u}}}if(l==null)return C.a.t(a,b,c)
if(t<c)l.a+=C.a.t(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
nT:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.w(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.V(a,u)
if(q===37){p=P.kJ(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.R("")
n=C.a.t(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.t(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.d(C.y,o)
o=(C.y[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.R("")
if(t<u){s.a+=C.a.t(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.j,o)
o=(C.j[o]&1<<(q&15))!==0}else o=!1
if(o)P.bI(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.V(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.R("")
n=C.a.t(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kH(q)
u+=l
t=u}}}}if(s==null)return C.a.t(a,b,c)
if(t<c){n=C.a.t(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nQ:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lK(C.a.E(a,b)))P.bI(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.E(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.l,r)
r=(C.l[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bI(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.t(a,b,c)
return P.nJ(t?a.toLowerCase():a)},
nJ:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nR:function(a,b,c){return P.cD(a,b,c,C.U,!1)},
nO:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cD(a,b,c,C.z,!0):C.i.ix(d,new P.jA(),P.h).j(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a2(u,"/"))u="/"+u
return P.nS(u,e,f)},
nS:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a2(a,"/"))return P.nU(a,!u||c)
return P.nV(a)},
kI:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.eN("Both query and queryParameters specified"))
return P.cD(a,b,c,C.k,!0)}if(d==null)return
u=new P.R("")
t.a=""
d.F(0,new P.jB(new P.jC(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nM:function(a,b,c){return P.cD(a,b,c,C.k,!0)},
kJ:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.V(a,b+1)
t=C.a.V(a,p)
s=H.jY(u)
r=H.jY(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aN(q,4)
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.by(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.t(a,b,b+3).toUpperCase()
return},
kH:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.v])
t[0]=37
t[1]=C.a.E(m,a>>>4)
t[2]=C.a.E(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.v])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.fS(a,6*r)&63|s
if(q>=u)return H.d(t,q)
t[q]=37
o=q+1
n=C.a.E(m,p>>>4)
if(o>=u)return H.d(t,o)
t[o]=n
n=q+2
o=C.a.E(m,p&15)
if(n>=u)return H.d(t,n)
t[n]=o
q+=3}}return P.ch(t,0,null)},
cD:function(a,b,c,d,e){var u=P.lM(a,b,c,d,e)
return u==null?C.a.t(a,b,c):u},
lM:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.R()
if(typeof c!=="number")return H.w(c)
if(!(o<c))break
c$0:{u=C.a.V(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.d(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kJ(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.d(C.j,t)
t=(C.j[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bI(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.V(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kH(u)}}if(m==null)m=new P.R("")
m.a+=C.a.t(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.w(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.R()
if(n<c)m.a+=C.a.t(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lL:function(a){if(C.a.a2(a,"."))return!0
return C.a.dj(a,"/.")!==-1},
nV:function(a){var u,t,s,r,q,p,o
if(!P.lL(a))return a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.D(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.j(u,"/")},
nU:function(a,b){var u,t,s,r,q,p
if(!P.lL(a))return!b?P.lJ(a):a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gat(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gat(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.d(u,0)
t=P.lJ(u[0])
if(0>=u.length)return H.d(u,0)
u[0]=t}return C.b.j(u,"/")},
lJ:function(a){var u,t,s,r=a.length
if(r>=2&&P.lK(J.mq(a,0)))for(u=1;u<r;++u){t=C.a.E(a,u)
if(t===58)return C.a.t(a,0,u)+"%3A"+C.a.a5(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.l,s)
s=(C.l[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nL:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.E(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.eN("Invalid URL encoding"))}}return u},
kK:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.E(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.t(a,b,c)
else r=new H.m(C.a.t(a,b,c))}else{r=H.b([],[P.v])
for(s=a.length,q=b;q<c;++q){t=C.a.E(a,q)
if(t>127)throw H.c(P.eN("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.eN("Truncated URI"))
r.push(P.nL(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iI(!1).bY(r)},
lK:function(a){var u=a|32
return 97<=u&&u<=122},
lt:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.b([b-1],[P.v])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.E(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.T(m,a,t))}}if(s<0&&t>b)throw H.c(P.T(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.E(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gat(l)
if(r!==44||t!==p+7||!C.a.a4(a,"base64",p+1))throw H.c(P.T("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.E.hD(0,a,o,u)
else{n=P.lM(a,o,u,C.k,!0)
if(n!=null)a=C.a.aT(a,o,u,n)}return new P.iB(a,l,c)},
nX:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.mX(22,new P.jK(),P.bB),n=new P.jJ(o),m=new P.jL(),l=new P.jM(),k=n.$2(0,225)
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(14,225)
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(15,225)
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(1,225)
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(2,235)
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(3,235)
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(4,229)
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(5,229)
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(6,231)
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(7,231)
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(n.$2(8,8),"]",5)
k=n.$2(9,235)
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(16,235)
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(17,235)
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(10,235)
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(18,235)
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(19,235)
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(11,235)
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(12,236)
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=n.$2(13,237)
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(n.$2(20,245),"az",21)
k=n.$2(21,245)
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
lQ:function(a,b,c,d,e){var u,t,s,r,q,p=$.mp()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.d(p,d)
t=p[d]
s=C.a.E(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.d(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.d(e,q)
e[q]=u}return d},
aH:function aH(){},
ab:function ab(a,b){this.a=a
this.b=b},
J:function J(){},
b0:function b0(a){this.a=a},
ff:function ff(){},
fg:function fg(){},
bq:function bq(){},
dj:function dj(){},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bz:function bz(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fB:function fB(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iA:function iA(a){this.a=a},
iw:function iw(a){this.a=a},
cg:function cg(a){this.a=a},
f0:function f0(a){this.a=a},
hv:function hv(){},
ds:function ds(){},
f8:function f8(a){this.a=a},
dT:function dT(a){this.a=a},
ft:function ft(a,b,c){this.a=a
this.b=b
this.c=c},
fv:function fv(){},
v:function v(){},
j:function j(){},
fE:function fE(){},
o:function o(){},
Q:function Q(){},
b9:function b9(){},
aa:function aa(){},
a1:function a1(){},
h:function h(){},
R:function R(a){this.a=a},
iF:function iF(a){this.a=a},
iC:function iC(a){this.a=a},
iD:function iD(a){this.a=a},
iE:function iE(a,b){this.a=a
this.b=b},
bH:function bH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jz:function jz(a,b){this.a=a
this.b=b},
jA:function jA(){},
jC:function jC(a,b){this.a=a
this.b=b},
jB:function jB(a){this.a=a},
iB:function iB(a,b,c){this.a=a
this.b=b
this.c=c},
jK:function jK(){},
jJ:function jJ(a){this.a=a},
jL:function jL(){},
jM:function jM(){},
jl:function jl(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
j4:function j4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
aU:function(a){var u,t,s,r,q
if(a==null)return
u=P.kv(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
ow:function(a){var u={}
a.F(0,new P.jQ(u))
return u},
jn:function jn(){},
jp:function jp(a,b){this.a=a
this.b=b},
jq:function jq(a,b){this.a=a
this.b=b},
jQ:function jQ(a){this.a=a},
jo:function jo(a,b){this.a=a
this.b=b},
fp:function fp(a,b){this.a=a
this.b=b},
fq:function fq(){},
fr:function fr(){},
ja:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nE:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jd:function jd(){},
a8:function a8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aO:function aO(){},
fL:function fL(){},
aR:function aR(){},
ht:function ht(){},
hB:function hB(){},
cf:function cf(){},
i4:function i4(){},
k:function k(){},
aT:function aT(){},
ik:function ik(){},
dY:function dY(){},
dZ:function dZ(){},
e8:function e8(){},
e9:function e9(){},
ek:function ek(){},
el:function el(){},
er:function er(){},
es:function es(){},
bB:function bB(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(a){this.a=a},
eS:function eS(){},
bm:function bm(){},
hu:function hu(){},
dM:function dM(){},
i_:function i_(){},
eg:function eg(){},
eh:function eh(){}},W={
l2:function(){var u=document.createElement("a")
return u},
l6:function(){var u=document.createElement("canvas")
return u},
mI:function(a,b,c){var u=document.body,t=(u&&C.r).ac(u,a,b,c)
t.toString
u=new H.cr(new W.a2(t),new W.fi(),[W.E])
return u.gaI(u)},
km:function(a){return"wheel"},
bW:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bP(a)
t=u.gdL(a)
if(typeof t==="string")r=u.gdL(a)}catch(s){H.ae(s)}return r},
mL:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.ae(u)}return s},
j9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lG:function(a,b,c,d){var u=W.j9(W.j9(W.j9(W.j9(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Z:function(a,b,c,d){var u=W.lS(new W.j7(c),W.i)
if(u!=null&&!0)J.ms(a,b,u,!1)
return new W.j6(a,b,u,!1)},
lF:function(a){var u=W.l2(),t=window.location
u=new W.ct(new W.jh(u,t))
u.e9(a)
return u},
nA:function(a,b,c,d){return!0},
nB:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
lH:function(){var u=P.h,t=P.ld(C.o,u),s=H.b(["TEMPLATE"],[u])
t=new W.ju(t,P.c3(u),P.c3(u),P.c3(u),null)
t.ef(null,new H.fY(C.o,new W.jv(),[H.aI(C.o,0),u]),s,null)
return t},
lS:function(a,b){var u=$.aq
if(u===C.f)return a
return u.d0(a,b)},
n:function n(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
bn:function bn(){},
bo:function bo(){},
bp:function bp(){},
aZ:function aZ(){},
f4:function f4(){},
H:function H(){},
bV:function bV(){},
f5:function f5(){},
ag:function ag(){},
at:function at(){},
f6:function f6(){},
f7:function f7(){},
fa:function fa(){},
ak:function ak(){},
fc:function fc(){},
cY:function cY(){},
cZ:function cZ(){},
fd:function fd(){},
fe:function fe(){},
j2:function j2(a,b){this.a=a
this.b=b},
P:function P(){},
fi:function fi(){},
i:function i(){},
f:function f(){},
al:function al(){},
bY:function bY(){},
fo:function fo(){},
fs:function fs(){},
au:function au(){},
fy:function fy(){},
c_:function c_(){},
c0:function c0(){},
bv:function bv(){},
fS:function fS(){},
hd:function hd(){},
c7:function c7(){},
he:function he(){},
hf:function hf(a){this.a=a},
hg:function hg(){},
hh:function hh(a){this.a=a},
aw:function aw(){},
hi:function hi(){},
ax:function ax(){},
a2:function a2(a){this.a=a},
E:function E(){},
dh:function dh(){},
ay:function ay(){},
hy:function hy(){},
hJ:function hJ(){},
hK:function hK(a){this.a=a},
hM:function hM(){},
aA:function aA(){},
hX:function hX(){},
aB:function aB(){},
hY:function hY(){},
aC:function aC(){},
i1:function i1(){},
i2:function i2(a){this.a=a},
ao:function ao(){},
dv:function dv(){},
i5:function i5(){},
i6:function i6(){},
ci:function ci(){},
aD:function aD(){},
ap:function ap(){},
i9:function i9(){},
ia:function ia(){},
id:function id(){},
aE:function aE(){},
bA:function bA(){},
ii:function ii(){},
ij:function ij(){},
bc:function bc(){},
iG:function iG(){},
iV:function iV(){},
bg:function bg(){},
cs:function cs(){},
j3:function j3(){},
dO:function dO(){},
j8:function j8(){},
e5:function e5(){},
jm:function jm(){},
jr:function jr(){},
j1:function j1(){},
j5:function j5(a){this.a=a},
j6:function j6(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
j7:function j7(a){this.a=a},
ct:function ct(a){this.a=a},
K:function K(){},
di:function di(a){this.a=a},
hq:function hq(a){this.a=a},
hp:function hp(a,b,c){this.a=a
this.b=b
this.c=c},
ed:function ed(){},
jj:function jj(){},
jk:function jk(){},
ju:function ju(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jv:function jv(){},
js:function js(){},
d1:function d1(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aQ:function aQ(){},
jh:function jh(a,b){this.a=a
this.b=b},
ev:function ev(a){this.a=a},
jF:function jF(a){this.a=a},
dN:function dN(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
e6:function e6(){},
e7:function e7(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
cz:function cz(){},
cA:function cA(){},
ee:function ee(){},
ef:function ef(){},
ej:function ej(){},
em:function em(){},
en:function en(){},
cB:function cB(){},
cC:function cC(){},
ep:function ep(){},
eq:function eq(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){}},K={
M:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.u("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.E(a,0)
t=C.a.E(b,0)
if(u>t){s=t
t=u
u=s}return new K.hE(u,t)},
t:function(a){var u=new K.hN()
u.e6(a)
return u},
aK:function aK(){},
d3:function d3(){},
b6:function b6(){},
a6:function a6(){this.a=null},
hE:function hE(a,b){this.a=a
this.b=b},
hN:function hN(){this.a=null}},L={
ig:function(){var u=new L.ie(),t=P.h
u.a=new H.I([t,L.dt])
u.b=new H.I([t,L.dA])
u.c=P.c3(t)
return u},
dt:function dt(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dz:function dz(a,b,c){this.a=a
this.b=b
this.c=c},
dA:function dA(a){this.b=a
this.c=null},
ie:function ie(){var _=this
_.d=_.c=_.b=_.a=null},
dC:function dC(a){this.b=a
this.a=this.c=null}},O={
kl:function(a){var u=new O.b_([a])
u.bz(a)
return u},
b_:function b_(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
c5:function c5(){this.b=this.a=null},
le:function(){var u,t=new O.db(),s=O.kl(V.am)
t.e=s
s.bb(t.geR(),t.geT())
s=new O.av(t,"emission")
s.c=new A.a_(!1,!1,!1)
s.f=new V.W(0,0,0)
t.f=s
s=new O.av(t,"ambient")
s.c=new A.a_(!1,!1,!1)
s.f=new V.W(0,0,0)
t.r=s
s=new O.av(t,"diffuse")
s.c=new A.a_(!1,!1,!1)
s.f=new V.W(0,0,0)
t.x=s
s=new O.av(t,"invDiffuse")
s.c=new A.a_(!1,!1,!1)
s.f=new V.W(0,0,0)
t.y=s
s=new O.h4(t,"specular")
s.c=new A.a_(!1,!1,!1)
s.f=new V.W(0,0,0)
s.ch=100
t.z=s
s=new O.h0(t,"bump")
s.c=new A.a_(!1,!1,!1)
t.Q=s
t.ch=null
s=new O.av(t,"reflect")
s.c=new A.a_(!1,!1,!1)
s.f=new V.W(0,0,0)
t.cx=s
s=new O.h3(t,"refract")
s.c=new A.a_(!1,!1,!1)
s.f=new V.W(0,0,0)
s.ch=1
t.cy=s
s=new O.h_(t,"alpha")
s.c=new A.a_(!1,!1,!1)
s.f=1
t.db=s
s=new D.d8()
s.bz(D.a5)
s.e=H.b([],[D.bl])
s.f=H.b([],[D.fb])
s.r=H.b([],[D.hz])
s.x=H.b([],[D.hZ])
s.z=s.y=null
s.cl(s.geP(),s.gfp(),s.gfu())
t.dx=s
u=new O.h2()
u.b=new V.as(0,0,0,0)
u.c=1
u.d=10
u.e=!1
t.dy=u
u=s.y
s=u==null?s.y=D.N():u
s.n(0,t.gfJ())
s=t.dx
u=s.z
s=u==null?s.z=D.N():u
s.n(0,t.geg())
t.fr=null
return t},
db:function db(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h5:function h5(a,b){this.a=a
this.b=b},
h6:function h6(){},
h7:function h7(a,b){this.a=a
this.b=b},
h8:function h8(){},
h9:function h9(a,b){this.a=a
this.b=b},
ha:function ha(){},
hb:function hb(a,b){this.a=a
this.b=b},
hc:function hc(){},
h_:function h_(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dc:function dc(){},
h0:function h0(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
av:function av(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h2:function h2(){var _=this
_.e=_.d=_.c=_.b=null},
h3:function h3(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h4:function h4(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dw:function dw(){}},E={
ko:function(){var u,t=new E.aN()
t.a=""
t.b=!0
u=O.kl(E.aN)
t.y=u
u.bb(t.ghE(),t.ghH())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sa9(0,null)
t.sb7(null)
t.saF(null)
return t},
ng:function(a,b){var u=new E.hF(a)
u.e5(a,b)
return u},
nn:function(a,b,c,d,e){var u,t,s=J.S(a)
if(!!s.$ibp)return E.lp(a,!0,!0,!0,!1)
u=W.l6()
t=u.style
t.width="100%"
t.height="100%"
s.gbW(a).n(0,u)
return E.lp(u,!0,!0,!0,!1)},
lp:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dx(),p=C.m.dT(a,"webgl2",P.mV(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.p(P.u("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.ng(p,a)
p.getParameter(3379)
p.getParameter(34076)
u=new X.dG(a)
t=new X.fK()
t.c=new X.an(!1,!1,!1)
t.d=P.c3(P.v)
u.b=t
t=new X.hj(u)
t.f=0
t.r=V.ba()
t.x=V.ba()
t.ch=t.Q=1
u.c=t
t=new X.fT(u)
t.r=0
t.x=V.ba()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ih(u)
t.f=V.ba()
t.r=V.ba()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.du,P.a1]])
u.z=t
s=document
t.push(W.Z(s,"contextmenu",u.gf0(),!1))
u.z.push(W.Z(a,"focus",u.gf6(),!1))
u.z.push(W.Z(a,"blur",u.geV(),!1))
u.z.push(W.Z(s,"keyup",u.gfa(),!1))
u.z.push(W.Z(s,"keydown",u.gf8(),!1))
u.z.push(W.Z(a,"mousedown",u.gfe(),!1))
u.z.push(W.Z(a,"mouseup",u.gfi(),!1))
u.z.push(W.Z(a,r,u.gfg(),!1))
t=u.z
W.km(a)
W.km(a)
t.push(W.Z(a,W.km(a),u.gfk(),!1))
u.z.push(W.Z(s,r,u.gf2(),!1))
u.z.push(W.Z(s,"mouseup",u.gf4(),!1))
u.z.push(W.Z(s,"pointerlockchange",u.gfm(),!1))
u.z.push(W.Z(a,"touchstart",u.gfC(),!1))
u.z.push(W.Z(a,"touchend",u.gfw(),!1))
u.z.push(W.Z(a,"touchmove",u.gfA(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.ab(Date.now(),!1)
q.db=0
q.cM()
return q},
eV:function eV(){},
aN:function aN(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hF:function hF(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hG:function hG(a){this.a=a},
hH:function hH(a){this.a=a},
hI:function hI(a){this.a=a},
dx:function dx(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
ic:function ic(a){this.a=a}},Z={
kF:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bJ(c)),35044)
a.bindBuffer(b,null)
return new Z.dK(b,u)},
ai:function(a){return new Z.bf(a)},
dK:function dK(a,b){this.a=a
this.b=b},
cQ:function cQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iW:function iW(a){this.a=a},
cR:function cR(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bs:function bs(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a){this.a=a}},D={
N:function(){var u=new D.br()
u.d=0
return u},
eY:function eY(){},
br:function br(){var _=this
_.d=_.c=_.b=_.a=null},
fl:function fl(a){this.a=a},
fm:function fm(a){this.a=a},
X:function X(){this.b=null},
bt:function bt(){this.b=null},
bu:function bu(){this.b=null},
B:function B(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
bl:function bl(){var _=this
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fb:function fb(){},
a5:function a5(){},
d8:function d8(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
hz:function hz(){},
hZ:function hZ(){}},X={cS:function cS(a,b){this.a=a
this.b=b},d7:function d7(a,b){this.a=a
this.b=b},fK:function fK(){var _=this
_.d=_.c=_.b=_.a=null},da:function da(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fT:function fT(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},an:function an(a,b,c){this.a=a
this.b=b
this.c=c},b7:function b7(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hj:function hj(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c8:function c8(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hA:function hA(){},dB:function dB(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ih:function ih(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dG:function dG(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mK:function(a){var u=new X.fu(),t=new V.as(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lm
if(t==null){t=V.ll(0,0,1,1)
$.lm=t}u.r=t
return u},
kk:function kk(){},
fu:function fu(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dk:function dk(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
i7:function i7(){}},V={
oX:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.ba(a-b,u)
return(a<0?a+u:a)+b},
F:function(a,b,c){if(a==null)return C.a.ae("null",c)
return C.a.ae(C.d.dN(Math.abs(a-0)<$.C().a?0:a,b),c+b+1)},
bO:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.l)(a),++s){r=V.F(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.d(o,q)
u=C.a.ae(o[q],t)
p=o.length
if(q>=p)return H.d(o,q)
o[q]=u}return o},
bw:function(){var u=$.c6
return u==null?$.c6=V.aP(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aP:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.am(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kz:function(a,b,c){return V.aP(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
ky:function(a,b,c,d){return V.aP(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
ba:function(){var u=$.lh
return u==null?$.lh=new V.a7(0,0):u},
n1:function(){var u=$.az
return u==null?$.az=new V.U(0,0,0):u},
ll:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dn(a,b,c,d)},
cp:function(){var u=$.lD
return u==null?$.lD=new V.z(0,0,0):u},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fk:function fk(a){this.a=a},
dd:function dd(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
am:function am(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a7:function a7(a,b){this.a=a
this.b=b},
U:function U(a,b,c){this.a=a
this.b=b
this.c=c},
bb:function bb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dn:function dn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
O:function O(a,b){this.a=a
this.b=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
cq:function cq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oR:function(a){P.no(C.O,new V.kb(a))},
ni:function(a){var u=new V.hS()
u.e8(a,!0)
return u},
cT:function cT(){},
kb:function kb(a){this.a=a},
f9:function f9(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fw:function fw(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fx:function fx(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hx:function hx(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hC:function hC(a){this.a=a
this.c=null},
hD:function hD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hS:function hS(){this.b=this.a=null},
hU:function hU(a){this.a=a},
hT:function hT(a){this.a=a},
hV:function hV(a){this.a=a}},U={
l8:function(){var u=new U.f_()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
cV:function(a){var u=new U.cU()
u.a=a
return u},
d2:function(){var u=new U.bZ()
u.bz(U.ah)
u.bb(u.gec(),u.gfs())
u.e=null
u.f=V.bw()
u.r=0
return u},
lx:function(a,b){var u,t,s,r=new U.dH(),q=U.l8()
q.sdR(0,!0)
q.sdq(6.283185307179586)
q.sds(0)
q.sa1(0,0)
q.sdr(100)
q.sX(0)
q.sd3(0.5)
r.b=q
u=r.gbf()
q.gA().n(0,u)
q=U.l8()
q.sdR(0,!0)
q.sdq(6.283185307179586)
q.sds(0)
q.sa1(0,0)
q.sdr(100)
q.sX(0)
q.sd3(0.5)
r.c=q
q.gA().n(0,u)
r.d=null
r.r=r.f=r.e=!1
r.y=r.x=2.5
r.Q=4
r.ch=r.cx=!1
r.db=r.cy=0
r.dx=null
r.dy=0
r.fx=r.fr=null
t=new X.an(a,!1,!1)
s=r.d
r.d=t
q=new D.B("modifiers",s,t)
q.b=!0
r.U(q)
q=r.f
if(q!==!1){r.f=!1
q=new D.B("invertX",q,!1)
q.b=!0
r.U(q)}q=r.r
if(q!==!1){r.r=!1
q=new D.B("invertY",q,!1)
q.b=!0
r.U(q)}r.bS(b)
return r},
f_:function f_(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cU:function cU(){this.b=this.a=null},
bZ:function bZ(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ah:function ah(){},
dH:function dH(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dI:function dI(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
m0:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="testCanvas",a1=null,a2=V.ni("Test 048"),a3=W.l6()
a3.className="pageLargeCanvas"
a3.id=a0
a2.a.appendChild(a3)
u=[P.h]
a2.cY(H.b(["Test of the Material Lighting shader with multiple moving point lights. ","Emissive spheres are added at the lights sources."],u))
a2.fZ(H.b(["shapes"],u))
a2.cY(H.b(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a0)
if(t==null)H.p(P.u("Failed to find an element with the identifier, testCanvas."))
s=E.nn(t,!0,!0,!0,!1)
r=E.ko()
q=U.d2()
q.n(0,U.lx(!0,s.x))
r.saF(q)
r.sa9(0,F.m5())
p=E.ko()
p.saF(U.cV(V.ky(3,3,3,1)))
q=F.kO(1,a1,a1,1)
q.c8()
p.sa9(0,q)
o=U.d2()
o.n(0,U.lx(!1,s.x))
q=s.x
n=new U.dI()
n.c=0.01
n.e=n.d=0
m=new X.an(!1,!1,!1)
n.b=m
l=new D.B("modifiers",a1,m)
l.b=!0
n.U(l)
n.bS(q)
o.n(0,n)
o.n(0,U.cV(V.kz(0,0,5)))
k=O.le()
q=k.r
q.saB(0,new V.W(0.15,0.15,0.15))
q=k.x
q.saB(0,new V.W(0.4,0.4,0.4))
q=k.z
q.saB(0,new V.W(0.3,0.3,0.3))
q=k.z
q.cO(new A.a_(!0,!1,!1))
q.cP(100)
j=new M.d_()
j.a=!0
q=O.kl(E.aN)
j.e=q
q.bb(j.geX(),j.geZ())
j.y=j.x=j.r=j.f=null
i=X.mK(a1)
h=new X.dk()
h.c=1.0471975511965976
h.d=0.1
h.e=2000
h.saF(a1)
q=h.c
if(!(Math.abs(q-1.0471975511965976)<$.C().a)){h.c=1.0471975511965976
q=new D.B("fov",q,1.0471975511965976)
q.b=!0
h.aK(q)}q=h.d
if(!(Math.abs(q-0.1)<$.C().a)){h.d=0.1
q=new D.B("near",q,0.1)
q.b=!0
h.aK(q)}q=h.e
if(!(Math.abs(q-2000)<$.C().a)){h.e=2000
q=new D.B("far",q,2000)
q.b=!0
h.aK(q)}q=j.b
if(q!==h){if(q!=null)q.gA().K(0,j.gan())
g=j.b
j.b=h
h.gA().n(0,j.gan())
q=new D.B("camera",g,j.b)
q.b=!0
j.ax(q)}q=j.c
if(q!==i){if(q!=null)q.gA().K(0,j.gan())
g=j.c
j.c=i
i.gA().n(0,j.gan())
q=new D.B("target",g,j.c)
q.b=!0
j.ax(q)}j.sb7(a1)
j.sb7(k)
j.e.n(0,p)
j.e.n(0,r)
j.b.saF(o)
q=s.d
if(q!==j){if(q!=null)q.gA().K(0,s.gcq())
s.d=j
j.gA().n(0,s.gcq())
s.cr()}f=new V.W(1,0,0)
e=E.ko()
q=U.d2()
q.n(0,U.cV(V.ky(0.01,0.01,3,1)))
e.saF(q)
e.sa9(0,F.kP(!0,8,1))
q=O.le()
q.f.saB(0,f)
e.sb7(q)
d=U.d2()
d.n(0,U.cV(V.kz(0,0,2.5)))
c=U.d2()
c.n(0,U.cV(V.kz(0,0,-2.5)))
b=new D.bl()
b.e=new V.W(1,1,1)
b.r=1
b.y=b.x=0
b.z=!0
b.a=V.bw()
b.b=V.bw()
g=b.c
b.c=d
d.gA().n(0,b.gbA())
q=new D.B("startMover",g,b.c)
q.b=!0
b.a6(q)
if(!J.D(b.d,c)){q=b.d
if(q!=null)q.gA().K(0,b.gbA())
g=b.d
b.d=c
c.gA().n(0,b.gbA())
q=new D.B("endMover",g,b.d)
q.b=!0
b.a6(q)}if(!b.e.q(0,f)){g=b.e
b.e=f
q=new D.B("color",g,f)
q.b=!0
b.a6(q)}q=$.lE
if(q==null){q=new V.cq(1,0.00390625,0.0000152587890625,0)
$.lE=q
a=q}else a=q
if(!J.D(b.f,a)){g=b.f
b.f=a
q=new D.B("shadowAdjust",g,a)
q.b=!0
b.a6(q)}q=b.r
if(!(Math.abs(q-1)<$.C().a)){b.r=1
q=new D.B("attenuation0",q,1)
q.b=!0
b.a6(q)}q=b.x
if(!(Math.abs(q-0.5)<$.C().a)){b.x=0.5
q=new D.B("attenuation1",q,0.5)
q.b=!0
b.a6(q)}q=b.y
if(!(Math.abs(q-0.15)<$.C().a)){b.y=0.15
q=new D.B("attenuation2",q,0.15)
q.b=!0
b.a6(q)}k.dx.n(0,b)
j.e.n(0,e)
q=new V.hC("shapes")
u=u.getElementById("shapes")
q.c=u
if(u==null)H.p("Failed to find shapes for RadioGroup")
q.aZ(0,"Cube",new U.k3(r))
q.aZ(0,"Cylinder",new U.k4(r))
q.aZ(0,"Cone",new U.k5(r))
q.aZ(0,"Sphere",new U.k6(r))
q.cW(0,"Toroid",new U.k7(r),!0)
q.aZ(0,"Knot",new U.k8(r))
u=s.Q
if(u==null)u=s.Q=D.N()
q=u.b
u=q==null?u.b=H.b([],[{func:1,ret:-1,args:[D.X]}]):q
u.push(new U.k9(a2,k))
V.oR(s)},
k3:function k3(a){this.a=a},
k4:function k4(a){this.a=a},
k5:function k5(a){this.a=a},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
k8:function k8(a){this.a=a},
k9:function k9(a,b){this.a=a
this.b=b}},M={d_:function d_(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
mZ:function(a,b){var u=a.b1,t=new A.fZ(b,u)
t.e7(b,u)
t.e4(a,b)
return t},
n_:function(a,b,c,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="MaterialLight_"+a2.gam(a2)+a3.gam(a3)+a4.gam(a4)+a5.gam(a5)+a6.gam(a6)+a7.gam(a7)+a8.gam(a8)+a9.gam(a9)+b0.gam(b0)+"_"
d+=a?"1":"0"
d+=b?"1":"0"
d+=c?"1":"0"
d=d+"0_"+a1
u=b1.length
if(u>0){d+="_Bar"
for(t=0;t<b1.length;b1.length===u||(0,H.l)(b1),++t)d+="_"+H.e(b1[t].a)}u=b2.length
if(u>0){d+="_Dir"
for(t=0;t<b2.length;b2.length===u||(0,H.l)(b2),++t)d+="_"+H.e(b2[t].a)}u=b3.length
if(u>0){d+="_Point"
for(t=0;t<b3.length;b3.length===u||(0,H.l)(b3),++t)d+="_"+H.e(b3[t].a)}u=b4.length
if(u>0){d+="_Spot"
for(t=0;t<b4.length;b4.length===u||(0,H.l)(b4),++t)d+="_"+H.e(b4[t].a)}for(u=b1.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b1[t].b
for(q=b2.length,t=0;t<q;++t,r=!0)s+=b2[t].b
for(q=b3.length,t=0;t<q;++t,r=!0)s+=b3[t].b
for(p=b4.length,t=0;t<p;++t,r=!0)s+=b4[t].b
if(!a8.a)p=!1
else p=!0
if(!p)if(!a9.a)o=!1
else o=!0
else o=!0
n=u>0
if(!a3.a)u=!1
else u=!0
if(!u){if(!a4.a)u=!1
else u=!0
if(!u){if(!a5.a)u=!1
else u=!0
if(!u)if(!a6.a)u=!1
else u=!0
else u=!0
m=u}else m=!0}else m=!0
u=!a6.a
if(u)p=!1
else p=!0
l=p||n||q>0||o
if(!a4.a)q=!1
else q=!0
if(!q){if(!a5.a)q=!1
else q=!0
if(!q){if(u)u=!1
else u=!0
k=u}else k=!0}else k=!0
if(!k){if(!a7.a)u=!1
else u=!0
j=u||o}else j=!0
if(!a7.a)i=!1
else i=!0
h=a1>0
g=j||i||l||!1
f=n&&k
e=$.aY()
if(j){u=$.aX()
e=new Z.bf(e.a|u.a)}if(i){u=$.aW()
e=new Z.bf(e.a|u.a)}if(h){u=$.aV()
e=new Z.bf(e.a|u.a)}return new A.h1(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,s,o,k,o,r,g,!0,f,!1,m,r,l,j,i,!1,!1,h,!1,!1,c,!1,a1,d.charCodeAt(0)==0?d:d,e)},
jN:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jO:function(a,b,c){var u
A.jN(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.eI(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
o5:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jN(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
o1:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jO(b,t,"ambient")
b.a+="\n"},
o3:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jO(b,t,"diffuse")
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
o6:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jO(b,t,"invDiffuse")
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
oc:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jO(b,t,"specular")
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
o8:function(a,b){var u,t,s
if(!a.k4)return
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
oa:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jN(b,t,"reflect")
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
ob:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jN(b,t,"refract")
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
o2:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
s=A.eI(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r+="{\n"
c.a=r
r+="   vec3 startPnt;\n"
c.a=r
r+="   vec3 endPnt;\n"
c.a=r
r=c.a=r+"   vec3 color;\n"
if(typeof u!=="number")return u.a7()
u=(u&4)!==0
if(u){r+="   float att0;\n"
c.a=r
r+="   float att1;\n"
c.a=r
r=c.a=r+"   float att2;\n"}r+="};\n"
c.a=r
r+="\n"
c.a=r
c.a=r+("uniform int "+t+"Count;\n")
r=c.a+="uniform "+s+" "+t+"s["+o+"];\n"
r+="\n"
c.a=r
r+="vec3 "+t+"ClosestPoint("+s+" lit)\n"
c.a=r
r+="{\n"
c.a=r
r+="   vec3 lineVec = lit.endPnt - lit.startPnt;\n"
c.a=r
r+="   float lineLen2 = dot(lineVec, lineVec);\n"
c.a=r
r+="   if(lineLen2 <= 0.0001) return lit.startPnt;\n"
c.a=r
r+="   float t = dot(objPos - lit.startPnt, lineVec)/lineLen2;\n"
c.a=r
r+="   if(t <= 0.0) return lit.startPnt;\n"
c.a=r
r+="   if(t >= 1.0) return lit.endPnt;\n"
c.a=r
r+="   return lit.startPnt + t*lineVec;\n"
c.a=r
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Intensity(vec3 normDir, vec3 litPnt, "+s+" lit)\n"
c.a=r
r+="{\n"
c.a=r
if(u){r+="   float dist = length(objPos - litPnt);\n"
c.a=r
r+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
c.a=r
r+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
c.a=r
c.a=r+"\n"}r=[P.h]
q=H.b([],r)
q.push("lit.color")
if(u)q.push("attenuation")
u=c.a+="   return "+C.b.j(q," * ")+";\n"
u+="}\n"
c.a=u
u+="\n"
c.a=u
u+="vec3 "+t+"Value(vec3 norm, "+s+" lit)\n"
c.a=u
c.a=u+"{\n"
q=H.b([],r)
if(!a.b.a)u=!1
else u=!0
if(u)q.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
q.push("highLight")
u=c.a+="   vec3 litPnt  = "+t+"ClosestPoint(lit);\n"
u+="   vec3 litView = (viewMat*vec4(litPnt, 1.0)).xyz;\n"
c.a=u
u+="   vec3 normDir = normalize(viewPos - litView);\n"
c.a=u
u+="   vec3 intensity = "+t+"Intensity(normDir, litPnt, lit);\n"
c.a=u
c.a=u+"   if(length(intensity) > 0.0001) {\n"
p=H.b([],r)
if(!a.c.a)u=!1
else u=!0
if(u)p.push("diffuse(norm, normDir)")
if(!a.d.a)u=!1
else u=!0
if(u)p.push("invDiffuse(norm, normDir)")
if(!a.e.a)u=!1
else u=!0
if(u)p.push("specular(norm, normDir)")
u=c.a+="      highLight = intensity*("+C.b.j(p," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.j(q," + ")+");\n"
u+="}\n"
c.a=u
u+="\n"
c.a=u
u+="vec3 all"+s+"Values(vec3 norm)\n"
c.a=u
u+="{\n"
c.a=u
c.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
o=c.a+="   for(int i = 0; i < "+o+"; ++i)\n"
o+="   {\n"
c.a=o
o+="      if(i >= "+t+"Count) break;\n"
c.a=o
o+="      lightAccum += "+t+"Value(norm, "+t+"s[i]);\n"
c.a=o
o+="   }\n"
c.a=o
o+="   return lightAccum;\n"
c.a=o
o+="}\n"
c.a=o
c.a=o+"\n"},
o4:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.eI(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.a7()
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
o=H.b([],r)
if(!a.b.a)n=!1
else n=!0
if(n)o.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.b([],r)
if(!a.c.a)r=!1
else r=!0
if(r)m.push("diffuse(norm, lit.viewDir)")
if(!a.d.a)r=!1
else r=!0
if(r)m.push("invDiffuse(norm, lit.viewDir)")
if(!a.e.a)r=!1
else r=!0
if(r)m.push("specular(norm, lit.viewDir)")
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
c.a+="      highLight = intensity*("+C.b.j(m," + ")+");\n"}else c.a+="   highLight = "+C.b.j(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.b.j(o," + ")+");\n"
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
o9:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.eI(t)
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
if(typeof u!=="number")return u.a7()
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
l=H.b([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.b.j(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.b([],r)
if(!a.b.a)o=!1
else o=!0
if(o)l.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
l.push("highLight")
m=u?", txtCube":""
if(p)m+=", shadowCube"
o=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
o+="   vec3 intensity = "+t+"Intensity(normDir, lit"+m+");\n"
c.a=o
c.a=o+"   if(length(intensity) > 0.0001) {\n"
k=H.b([],r)
if(!a.c.a)r=!1
else r=!0
if(r)k.push("diffuse(norm, normDir)")
if(!a.d.a)r=!1
else r=!0
if(r)k.push("invDiffuse(norm, normDir)")
if(!a.e.a)r=!1
else r=!0
if(r)k.push("specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.b.j(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.b.j(l," + ")+");\n"
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
od:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.eI(t)
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
if(typeof u!=="number")return u.a7()
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
j=H.b([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.b.j(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.b([],u)
if(!a.b.a)r=!1
else r=!0
if(r)j.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
j.push("highLight")
k=m?", txt2D":""
if(p)k+=", shadow2D"
r=c.a+="   vec3 intensity = "+t+"Intensity(lit"+k+");\n"
r+="   if(length(intensity) > 0.0001) {\n"
c.a=r
c.a=r+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
i=H.b([],u)
if(!a.c.a)u=!1
else u=!0
if(u)i.push("diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)i.push("invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)i.push("specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.b.j(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.j(j," + ")+");\n"
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
o7:function(a,b){var u,t
if(a.cy>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.dx)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.b([],[P.h])
if(!a.b.a)u=!1
else u=!0
if(u)t.push("ambientColor")
if(!a.c.a)u=!1
else u=!0
if(u)t.push("diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)t.push("invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.b.j(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
oe:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.R("")
j.a="precision mediump float;\n"
j.a=l
u=a.k4
if(u){j.a=k
t=k}else t=l
if(a.r1){t+="varying vec3 binormalVec;\n"
j.a=t}if(a.r2){t+="varying vec2 txt2D;\n"
j.a=t}if(a.rx){t+="varying vec3 txtCube;\n"
j.a=t}if(a.k2){t+="varying vec3 objPos;\n"
j.a=t}t=j.a=(a.k3?j.a=t+"varying vec3 viewPos;\n":t)+"\n"
s=a.y1
if(s){t+="uniform mat4 colorMat;\n"
j.a=t}if(a.go){t+="uniform mat4 viewMat;\n"
j.a=t}if(a.dy)t=j.a=t+"uniform mat4 invViewMat;\n"
j.a=t+"\n"
A.o5(a,j)
A.o1(a,j)
A.o3(a,j)
A.o6(a,j)
A.oc(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.oa(a,j)
A.ob(a,j)}A.o8(a,j)
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
r=a.k1
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.o2(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.o4(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.o9(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.od(a,q[o],j)
A.o7(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.b([],[P.h])
if(r){j.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
n.push("lightAccum")
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a5(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a5(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a5(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a5(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)n.push("emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)n.push("reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.b.j(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
of:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.bm+"];\n"
u+="attribute vec4 bendAttr;\n"
b.a=u
u+="\n"
b.a=u
u+="float weightSum;\n"
b.a=u
u=b.a=u+"vec3 bendPos;\n"
t=a.k4
if(t){u+="vec3 bendNorm;\n"
b.a=u}s=a.r1
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
oh:function(a,b){var u
if(!a.k4)return
u=b.a+="varying vec3 normalVec;\n"
u+="\n"
b.a=u
u+="vec3 getNorm()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return normalize((viewObjMat*vec4("+(a.ry?"bendNorm":"normAttr")+", 0.0)).xyz);\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
og:function(a,b){var u
if(!a.r1)return
u=b.a+="varying vec3 binormalVec;\n"
u+="\n"
b.a=u
u+="vec3 getBinm()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return normalize((viewObjMat*vec4("+(a.ry?"bendBinm":"binmAttr")+", 0.0)).xyz);\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
oj:function(a,b){var u,t
if(!a.r2)return
u=a.x1
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
ok:function(a,b){var u,t
if(!a.rx)return
u=a.x2
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
oi:function(a,b){var u
if(!a.k2)return
u=b.a+="varying vec3 objPos;\n"
u+="\n"
b.a=u
u+="vec3 getObjPos()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return (objMat*vec4("+(a.ry?"bendPos":"posAttr")+", 1.0)).xyz;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
ol:function(a,b){var u
if(!a.k3)return
u=b.a+="varying vec3 viewPos;\n"
u+="\n"
b.a=u
u+="vec3 getViewPos()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return (viewObjMat*vec4("+(a.ry?"bendPos":"posAttr")+", 1.0)).xyz;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
eI:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.a5(a,1)},
kC:function(a,b,c,d,e){var u=new A.ip(a,c,e)
u.f=d
P.mW(d,0,P.v)
return u},
cO:function cO(a,b,c){this.a=a
this.b=b
this.c=c},
eO:function eO(a){this.a=a},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
fZ:function fZ(a,b){var _=this
_.ii=_.ih=_.bn=_.b1=_.bm=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iw=_.iv=_.iu=_.c6=_.c5=_.c4=_.c3=_.c2=_.c1=_.c0=_.c_=_.it=_.is=_.dc=_.ir=_.iq=_.da=_.d9=_.ip=_.io=_.d8=_.d7=_.im=_.il=_.d6=_.ik=_.ij=_.d5=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cP:function cP(a,b){this.a=a
this.b=b},
cX:function cX(a,b){this.a=a
this.b=b},
dl:function dl(a,b){this.a=a
this.b=b},
dr:function dr(a,b){this.a=a
this.b=b},
h1:function h1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.bm=b3
_.b1=b4
_.bn=b5},
ck:function ck(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cl:function cl(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cn:function cn(a,b,c,d,e,f,g,h,i,j){var _=this
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
co:function co(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dp:function dp(){},
dD:function dD(){},
iu:function iu(a){this.a=a},
bd:function bd(a,b,c){this.a=a
this.c=b
this.d=c},
ir:function ir(a,b,c){this.a=a
this.c=b
this.d=c},
is:function is(a,b,c){this.a=a
this.c=b
this.d=c},
it:function it(a,b,c){this.a=a
this.c=b
this.d=c},
ip:function ip(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c},
iq:function iq(a,b,c){this.a=a
this.c=b
this.d=c},
G:function G(a,b,c){this.a=a
this.c=b
this.d=c},
cj:function cj(a,b,c){this.a=a
this.c=b
this.d=c},
iv:function iv(a,b,c){this.a=a
this.c=b
this.d=c},
cm:function cm(a,b,c){this.a=a
this.c=b
this.d=c},
ac:function ac(a,b,c){this.a=a
this.c=b
this.d=c},
bC:function bC(a,b,c){this.a=a
this.c=b
this.d=c},
bD:function bD(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kO:function(a,b,c,d){var u=F.kA()
F.cE(u,b,c,d,a,1,0,0,1)
F.cE(u,b,c,d,a,0,1,0,3)
F.cE(u,b,c,d,a,0,0,1,2)
F.cE(u,b,c,d,a,-1,0,0,0)
F.cE(u,b,c,d,a,0,-1,0,0)
F.cE(u,b,c,d,a,0,0,-1,3)
u.ar()
return u},
jI:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cE:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.z(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.z(u+a3,t+a1,s+a2)
q=new V.z(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.z(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jI(i)
l=F.jI(h)
k=F.kW(d,a0,new F.jH(j,F.jI(g),F.jI(f),l,m,c),b)
if(k!=null)a.b4(k)},
lW:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.kA()
t=b?-1:1
s=-6.283185307179586/e
r=H.b([],[F.be])
q=u.a
p=new V.z(0,0,t)
p=p.w(0,Math.sqrt(p.D(p)))
r.push(q.h2(new V.bb(a,-1,-1,-1),new V.as(1,1,1,1),new V.U(0,0,c),new V.z(0,0,t),new V.a7(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.w(k)
j=new V.z(m,l,t).w(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.dJ(new V.bb(a,-1,-1,-1),null,new V.as(i,g,h,1),new V.U(m*k,l*k,c),new V.z(0,0,t),new V.a7(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.n(0,f)
r.push(f)}u.d.h0(r)
return u},
kP:function(a,b,c){return F.ox(!0,a,1,new F.jR(1,c),b)},
ox:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.kW(c,e,new F.jT(d),null)
if(u==null)return
u.ar()
u.bR()
if(b)u.b4(F.lW(3,!1,1,new F.jU(d),e))
u.b4(F.lW(1,!0,-1,new F.jV(d),e))
return u},
oS:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kc()
t=F.kO(a,null,new F.kd(s,1),b)
t.bR()
return t},
m5:function(){return F.lV(15,30,0.5,1,new F.kf())},
oL:function(){return F.lV(12,120,0.3,1,new F.k2(3,2))},
lV:function(a,b,c,d,e){var u=F.kW(a,b,new F.jS(e,d,b,c),null)
if(u==null)return
u.ar()
u.bR()
return u},
kW:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.kA()
t=H.b([],[F.be])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dJ(g,g,new V.as(p,0,0,1),g,g,new V.a7(r,1),g,g,0)
q.n(0,o)
c.$3(o,r,0)
t.push(o.bZ(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.dJ(g,g,new V.as(j,i,h,1),g,g,new V.a7(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.bZ(d))}}u.d.h1(a+1,b+1,t)
return u},
bX:function(a,b,c){var u=new F.b1(),t=a.a
if(t==null)H.p(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.u("May not create a face with vertices attached to different shapes."))
u.bP(a)
u.bQ(b)
u.fO(c)
u.a.a.d.b.push(u)
u.a.a.Y()
return u},
mS:function(a,b){var u=new F.c2(),t=a.a
if(t==null)H.p(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.p(P.u("May not create a line with vertices attached to different shapes."))
u.bP(a)
u.bQ(b)
u.a.a.c.b.push(u)
u.a.a.Y()
return u},
kA:function(){var u=new F.hO(),t=new F.iK(u)
t.b=!1
t.c=H.b([],[F.be])
u.a=t
t=new F.hR(u)
t.b=H.b([],[F.cc])
u.b=t
t=new F.hQ(u)
t.b=H.b([],[F.c2])
u.c=t
t=new F.hP(u)
t.b=H.b([],[F.b1])
u.d=t
u.e=null
return u},
dJ:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.be(),r=new F.iS()
r.b=H.b([],[F.cc])
s.b=r
r=new F.iO()
u=[F.c2]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.iL()
u=[F.b1]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.mj()
s.e=0
r=$.aY()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aX().a)!==0?e:t
s.x=(u&$.aW().a)!==0?b:t
s.y=(u&$.bj().a)!==0?f:t
s.z=(u&$.bk().a)!==0?g:t
s.Q=(u&$.mk().a)!==0?c:t
s.ch=(u&$.bQ().a)!==0?i:0
s.cx=(u&$.aV().a)!==0?a:t
return s},
jH:function jH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jR:function jR(a,b){this.a=a
this.b=b},
jT:function jT(a){this.a=a},
jU:function jU(a){this.a=a},
jV:function jV(a){this.a=a},
kc:function kc(){},
kd:function kd(a,b){this.a=a
this.b=b},
kf:function kf(){},
k2:function k2(a,b){this.a=a
this.b=b},
jS:function jS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b1:function b1(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fn:function fn(){},
hW:function hW(){},
c2:function c2(){this.b=this.a=null},
fM:function fM(){},
io:function io(){},
cc:function cc(){this.a=null},
hO:function hO(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hP:function hP(a){this.a=a
this.b=null},
hQ:function hQ(a){this.a=a
this.b=null},
hR:function hR(a){this.a=a
this.b=null},
be:function be(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iU:function iU(a){this.a=a},
iT:function iT(a){this.a=a},
iK:function iK(a){this.a=a
this.c=this.b=null},
iL:function iL(){this.d=this.c=this.b=null},
iM:function iM(a,b){this.a=a
this.b=b},
iN:function iN(a,b){this.a=a
this.b=b},
iO:function iO(){this.c=this.b=null},
iQ:function iQ(){},
iP:function iP(){},
iR:function iR(){},
hr:function hr(){},
iS:function iS(){this.b=null}},T={ib:function ib(){}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kt.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gH:function(a){return H.cd(a)},
i:function(a){return"Instance of '"+H.e(H.ce(a))+"'"}}
J.fF.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iaH:1}
J.d5.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0}}
J.d6.prototype={
gH:function(a){return 0},
i:function(a){return String(a)},
$imQ:1}
J.hw.prototype={}
J.bE.prototype={}
J.b4.prototype={
i:function(a){var u=a[$.m7()]
if(u==null)return this.e1(a)
return"JavaScript function for "+H.e(J.a3(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b2.prototype={
cf:function(a,b){if(!!a.fixed$length)H.p(P.y("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dm(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var u
if(!!a.fixed$length)H.p(P.y("remove"))
for(u=0;u<a.length;++u)if(J.D(a[u],b)){a.splice(u,1)
return!0}return!1},
ab:function(a,b){var u,t
if(!!a.fixed$length)H.p(P.y("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.l)(b),++t)a.push(b[t])},
F:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.aL(a))}},
j:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.d(r,u)
r[u]=t}return r.join(b)},
hA:function(a){return this.j(a,"")},
ht:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.aL(a))}return u},
hu:function(a,b,c){return this.ht(a,b,c,null)},
hs:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.aL(a))}throw H.c(H.fD())},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
dY:function(a,b,c){if(b<0||b>a.length)throw H.c(P.Y(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.Y(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.aI(a,0)])
return H.b(a.slice(b,c),[H.aI(a,0)])},
ghr:function(a){if(a.length>0)return a[0]
throw H.c(H.fD())},
gat:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.fD())},
cZ:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.aL(a))}return!1},
aV:function(a,b){if(!!a.immutable$list)H.p(P.y("sort"))
H.nl(a,b==null?J.nZ():b)},
dX:function(a){return this.aV(a,null)},
N:function(a,b){var u
for(u=0;u<a.length;++u)if(J.D(a[u],b))return!0
return!1},
i:function(a){return P.kq(a,"[","]")},
gS:function(a){return new J.a4(a,a.length)},
gH:function(a){return H.cd(a)},
gl:function(a){return a.length},
sl:function(a,b){var u="newLength"
if(!!a.fixed$length)H.p(P.y("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.ki(b,u,null))
if(b<0)throw H.c(P.Y(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bN(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.p(P.y("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bN(a,b))
a[b]=c},
$iq:1,
$ij:1,
$io:1}
J.ks.prototype={}
J.a4.prototype={
gC:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.l(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.c1.prototype={
aQ:function(a,b){var u
if(typeof b!=="number")throw H.c(H.ad(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbp(b)
if(this.gbp(a)===u)return 0
if(this.gbp(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbp:function(a){return a===0?1/a<0:a<0},
dd:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.y(""+a+".floor()"))},
al:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.y(""+a+".round()"))},
dN:function(a,b){var u
if(b>20)throw H.c(P.Y(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbp(a))return"-"+u
return u},
b8:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.Y(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.V(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.p(P.y("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.p("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
p:function(a,b){if(typeof b!=="number")throw H.c(H.ad(b))
return a*b},
ba:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
e3:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cR(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.cR(a,b)},
cR:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.y("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aN:function(a,b){var u
if(a>0)u=this.cQ(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fS:function(a,b){if(b<0)throw H.c(H.ad(b))
return this.cQ(a,b)},
cQ:function(a,b){return b>31?0:a>>>b},
$iJ:1,
$iaa:1}
J.d4.prototype={$iv:1}
J.fG.prototype={}
J.b3.prototype={
V:function(a,b){if(b<0)throw H.c(H.bN(a,b))
if(b>=a.length)H.p(H.bN(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(b>=a.length)throw H.c(H.bN(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.c(P.ki(b,null,null))
return a+b},
aT:function(a,b,c,d){var u,t
c=P.aS(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.ad(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a4:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.Y(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a2:function(a,b){return this.a4(a,b,0)},
t:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.ad(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.R()
if(b<0)throw H.c(P.dm(b,null))
if(b>c)throw H.c(P.dm(b,null))
if(c>a.length)throw H.c(P.dm(c,null))
return a.substring(b,c)},
a5:function(a,b){return this.t(a,b,null)},
i5:function(a){return a.toLowerCase()},
p:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.L)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ae:function(a,b){var u=b-a.length
if(u<=0)return a
return this.p(" ",u)+a},
bo:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.Y(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dj:function(a,b){return this.bo(a,b,0)},
aQ:function(a,b){var u
if(typeof b!=="string")throw H.c(H.ad(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
i:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ih:1}
H.m.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.a.V(this.a,b)},
$aq:function(){return[P.v]},
$ax:function(){return[P.v]},
$aj:function(){return[P.v]},
$ao:function(){return[P.v]}}
H.q.prototype={}
H.d9.prototype={
gS:function(a){return new H.b5(this,this.gl(this))},
bw:function(a,b){return this.e0(0,b)}}
H.b5.prototype={
gC:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=J.bi(s),q=r.gl(s)
if(t.b!=q)throw H.c(P.aL(s))
u=t.c
if(typeof q!=="number")return H.w(q)
if(u>=q){t.d=null
return!1}t.d=r.I(s,u);++t.c
return!0}}
H.c4.prototype={
gS:function(a){return new H.fX(J.aJ(this.a),this.b)},
gl:function(a){return J.af(this.a)},
I:function(a,b){return this.b.$1(J.eJ(this.a,b))},
$aj:function(a,b){return[b]}}
H.fh.prototype={$iq:1,
$aq:function(a,b){return[b]}}
H.fX.prototype={
u:function(){var u=this,t=u.b
if(t.u()){u.a=u.c.$1(t.gC(t))
return!0}u.a=null
return!1},
gC:function(a){return this.a}}
H.fY.prototype={
gl:function(a){return J.af(this.a)},
I:function(a,b){return this.b.$1(J.eJ(this.a,b))},
$aq:function(a,b){return[b]},
$ad9:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.cr.prototype={
gS:function(a){return new H.iX(J.aJ(this.a),this.b)}}
H.iX.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(t.$1(u.gC(u)))return!0
return!1},
gC:function(a){var u=this.a
return u.gC(u)}}
H.d0.prototype={}
H.iz.prototype={
m:function(a,b,c){throw H.c(P.y("Cannot modify an unmodifiable list"))}}
H.dE.prototype={}
H.f1.prototype={
i:function(a){return P.kx(this)},
m:function(a,b,c){return H.mF()},
$iQ:1}
H.f2.prototype={
gl:function(a){return this.a},
bX:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.bX(0,b))return
return this.cE(b)},
cE:function(a){return this.b[a]},
F:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cE(s))}}}
H.il.prototype={
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
H.hs.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fJ.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.iy.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kg.prototype={
$1:function(a){if(!!J.S(a).$ibq)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:9}
H.ei.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bU.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cJ(t==null?"unknown":t)+"'"},
gi9:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i8.prototype={}
H.i0.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cJ(u)+"'"}}
H.bS.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bS))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.cd(this.a)
else u=typeof t!=="object"?J.cN(t):H.cd(t)
return(u^H.cd(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.ce(u))+"'")}}
H.eX.prototype={
i:function(a){return this.a}}
H.hL.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.I.prototype={
gl:function(a){return this.a},
ghz:function(a){return this.a===0},
gZ:function(a){return new H.fO(this,[H.aI(this,0)])},
gi8:function(a){var u=this
return H.mY(u.gZ(u),new H.fI(u),H.aI(u,0),H.aI(u,1))},
bX:function(a,b){var u=this.b
if(u==null)return!1
return this.eu(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bd(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bd(r,b)
s=t==null?null:t.b
return s}else return q.hx(b)},
hx:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.cG(r,s.dk(a))
t=s.dl(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cu(u==null?s.b=s.bI():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cu(t==null?s.c=s.bI():t,b,c)}else s.hy(b,c)},
hy:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bI()
u=r.dk(a)
t=r.cG(q,u)
if(t==null)r.bN(q,u,[r.bJ(a,b)])
else{s=r.dl(t,a)
if(s>=0)t[s].b=b
else t.push(r.bJ(a,b))}},
F:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.aL(u))
t=t.c}},
cu:function(a,b,c){var u=this.bd(a,b)
if(u==null)this.bN(a,b,this.bJ(b,c))
else u.b=c},
eF:function(){this.r=this.r+1&67108863},
bJ:function(a,b){var u,t=this,s=new H.fN(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eF()
return s},
dk:function(a){return J.cN(a)&0x3ffffff},
dl:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1},
i:function(a){return P.kx(this)},
bd:function(a,b){return a[b]},
cG:function(a,b){return a[b]},
bN:function(a,b,c){a[b]=c},
ey:function(a,b){delete a[b]},
eu:function(a,b){return this.bd(a,b)!=null},
bI:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bN(t,u,t)
this.ey(t,u)
return t}}
H.fI.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.aI(u,1),args:[H.aI(u,0)]}}}
H.fN.prototype={}
H.fO.prototype={
gl:function(a){return this.a.a},
gS:function(a){var u=this.a,t=new H.fP(u,u.r)
t.c=u.e
return t}}
H.fP.prototype={
gC:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aL(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.jZ.prototype={
$1:function(a){return this.a(a)},
$S:9}
H.k_.prototype={
$2:function(a,b){return this.a(a,b)}}
H.k0.prototype={
$1:function(a){return this.a(a)}}
H.fH.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ine:1}
H.c9.prototype={$ic9:1}
H.b8.prototype={$ib8:1}
H.de.prototype={
gl:function(a){return a.length},
$iA:1,
$aA:function(){}}
H.ca.prototype={
h:function(a,b){H.aG(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aG(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.J]},
$ax:function(){return[P.J]},
$ij:1,
$aj:function(){return[P.J]},
$io:1,
$ao:function(){return[P.J]}}
H.df.prototype={
m:function(a,b,c){H.aG(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.v]},
$ax:function(){return[P.v]},
$ij:1,
$aj:function(){return[P.v]},
$io:1,
$ao:function(){return[P.v]}}
H.hk.prototype={
h:function(a,b){H.aG(b,a,a.length)
return a[b]}}
H.hl.prototype={
h:function(a,b){H.aG(b,a,a.length)
return a[b]}}
H.hm.prototype={
h:function(a,b){H.aG(b,a,a.length)
return a[b]}}
H.hn.prototype={
h:function(a,b){H.aG(b,a,a.length)
return a[b]}}
H.ho.prototype={
h:function(a,b){H.aG(b,a,a.length)
return a[b]}}
H.dg.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aG(b,a,a.length)
return a[b]}}
H.cb.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aG(b,a,a.length)
return a[b]},
$icb:1,
$ibB:1}
H.cv.prototype={}
H.cw.prototype={}
H.cx.prototype={}
H.cy.prototype={}
P.iZ.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.iY.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.j_.prototype={
$0:function(){this.a.$0()}}
P.j0.prototype={
$0:function(){this.a.$0()}}
P.eo.prototype={
ei:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bM(new P.jx(this,b),0),a)
else throw H.c(P.y("`setTimeout()` not found."))},
ej:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bM(new P.jw(this,a,Date.now(),b),0),a)
else throw H.c(P.y("Periodic timer."))},
$idy:1}
P.jx.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jw.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.e3(u,q)}s.c=r
t.d.$1(s)}}
P.bF.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.bG.prototype={
gC:function(a){var u=this.c
if(u==null)return this.b
return u.gC(u)},
u:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.u())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bF){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.d(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aJ(u)
if(!!r.$ibG){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.jt.prototype={
gS:function(a){return new P.bG(this.a())}}
P.dL.prototype={}
P.du.prototype={}
P.i3.prototype={}
P.dy.prototype={}
P.jG.prototype={}
P.jP.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dj():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.je.prototype={
i0:function(a){var u,t,s,r=null
try{if(C.f===$.aq){a.$0()
return}P.on(r,r,this,a)}catch(s){u=H.ae(s)
t=H.kR(s)
P.lP(r,r,this,u,t)}},
i1:function(a,b){var u,t,s,r=null
try{if(C.f===$.aq){a.$1(b)
return}P.oo(r,r,this,a,b)}catch(s){u=H.ae(s)
t=H.kR(s)
P.lP(r,r,this,u,t)}},
i2:function(a,b){return this.i1(a,b,null)},
h9:function(a){return new P.jf(this,a)},
d0:function(a,b){return new P.jg(this,a,b)}}
P.jf.prototype={
$0:function(){return this.a.i0(this.b)}}
P.jg.prototype={
$1:function(a){return this.a.i2(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jb.prototype={
gS:function(a){var u=new P.e_(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
N:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.es(b)
return t}},
es:function(a){var u=this.d
if(u==null)return!1
return this.bF(this.cF(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cw(u==null?s.b=P.kG():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cw(t==null?s.c=P.kG():t,b)}else return s.el(0,b)},
el:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kG()
u=s.cA(b)
t=r[u]
if(t==null)r[u]=[s.bC(b)]
else{if(s.bF(t,b)>=0)return!1
t.push(s.bC(b))}return!0},
K:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fF(this.c,b)
else return this.fE(0,b)},
fE:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cF(r,b)
t=s.bF(u,b)
if(t<0)return!1
s.cT(u.splice(t,1)[0])
return!0},
cw:function(a,b){if(a[b]!=null)return!1
a[b]=this.bC(b)
return!0},
fF:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cT(u)
delete a[b]
return!0},
cz:function(){this.r=1073741823&this.r+1},
bC:function(a){var u,t=this,s=new P.jc(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cz()
return s},
cT:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cz()},
cA:function(a){return J.cN(a)&1073741823},
cF:function(a,b){return a[this.cA(b)]},
bF:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1}}
P.jc.prototype={}
P.e_.prototype={
gC:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aL(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fC.prototype={}
P.fQ.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:3}
P.fR.prototype={$iq:1,$ij:1,$io:1}
P.x.prototype={
gS:function(a){return new H.b5(a,this.gl(a))},
I:function(a,b){return this.h(a,b)},
i4:function(a,b){var u,t,s=this,r=H.b([],[H.oD(s,a,"x",0)])
C.b.sl(r,s.gl(a))
u=0
while(!0){t=s.gl(a)
if(typeof t!=="number")return H.w(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.d(r,u)
r[u]=t;++u}return r},
i3:function(a){return this.i4(a,!0)},
hp:function(a,b,c,d){var u
P.aS(b,c,this.gl(a))
for(u=b;u<c;++u)this.m(a,u,d)},
i:function(a){return P.kq(a,"[","]")}}
P.fU.prototype={}
P.fV.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.a0.prototype={
F:function(a,b){var u,t
for(u=J.aJ(this.gZ(a));u.u();){t=u.gC(u)
b.$2(t,this.h(a,t))}},
gl:function(a){return J.af(this.gZ(a))},
i:function(a){return P.kx(a)},
$iQ:1}
P.jy.prototype={
m:function(a,b,c){throw H.c(P.y("Cannot modify unmodifiable map"))}}
P.fW.prototype={
h:function(a,b){return J.bR(this.a,b)},
m:function(a,b,c){J.kh(this.a,b,c)},
F:function(a,b){J.l_(this.a,b)},
gl:function(a){return J.af(this.a)},
i:function(a){return J.a3(this.a)},
$iQ:1}
P.dF.prototype={}
P.ji.prototype={
ab:function(a,b){var u
for(u=J.aJ(b);u.u();)this.n(0,u.gC(u))},
i:function(a){return P.kq(this,"{","}")},
I:function(a,b){var u,t,s
P.lk(b,"index")
for(u=P.nF(this,this.r),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.c(P.L(b,this,"index",null,t))},
$iq:1,
$ij:1}
P.e0.prototype={}
P.et.prototype={}
P.eT.prototype={
hD:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.aS(a0,a1,b.length)
u=$.mm()
if(typeof a1!=="number")return H.w(a1)
t=a0
s=t
r=null
q=-1
p=-1
o=0
for(;t<a1;t=n){n=t+1
m=C.a.E(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jY(C.a.E(b,n))
j=H.jY(C.a.E(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.d(u,i)
h=u[i]
if(h>=0){i=C.a.V("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.R("")
g=r.a+=C.a.t(b,s,t)
r.a=g+H.by(m)
s=n
continue}}throw H.c(P.T("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.t(b,s,a1)
f=g.length
if(q>=0)P.l3(b,p,a1,q,o,f)
else{e=C.c.ba(f-1,4)+1
if(e===1)throw H.c(P.T(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aT(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.l3(b,p,a1,q,o,d)
else{e=C.c.ba(d,4)
if(e===1)throw H.c(P.T(c,b,a1))
if(e>1)b=C.a.aT(b,a1,a1,e===2?"==":"=")}return b}}
P.eU.prototype={}
P.eZ.prototype={}
P.f3.prototype={}
P.fj.prototype={}
P.fA.prototype={
i:function(a){return this.a}}
P.fz.prototype={
ev:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.R("")
if(r>b)q.a+=C.a.t(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.mx(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iH.prototype={
gho:function(){return C.M}}
P.iJ.prototype={
bY:function(a){var u,t,s,r=P.aS(0,null,a.length)
if(typeof r!=="number")return r.L()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jE(t)
if(s.eA(a,0,r)!==r)s.cV(J.mt(a,r-1),0)
return new Uint8Array(t.subarray(0,H.nW(0,s.b,t.length)))}}
P.jE.prototype={
cV:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eA:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.V(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.E(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cV(r,C.a.E(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iI.prototype={
bY:function(a){var u,t,s,r,q,p,o,n,m=P.nr(!1,a,0,null)
if(m!=null)return m
u=P.aS(0,null,J.af(a))
t=P.lR(a,0,u)
if(t>0){s=P.ch(a,0,t)
if(t===u)return s
r=new P.R(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.R("")
o=new P.jD(!1,r)
o.c=p
o.hd(a,q,u)
if(o.e>0){H.p(P.T("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.by(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jD.prototype={
hd:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.bi(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.h(a,s)
if(typeof r!=="number")return r.a7()
if((r&192)!==128){q=P.T(k+C.c.b8(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.d(C.v,q)
if(j<=C.v[q]){q=P.T("Overlong encoding of 0x"+C.c.b8(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.T("Character outside valid Unicode range: 0x"+C.c.b8(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.by(j)
l.c=!1}if(typeof c!=="number")return H.w(c)
q=s<c
for(;q;){p=P.lR(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.ch(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.h(a,o)
if(typeof r!=="number")return r.R()
if(r<0){m=P.T("Negative UTF-8 code unit: -0x"+C.c.b8(-r,16),a,n-1)
throw H.c(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.T(k+C.c.b8(r,16),a,n-1)
throw H.c(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.aH.prototype={}
P.ab.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.ab&&this.a===b.a&&!0},
aQ:function(a,b){return C.c.aQ(this.a,b.a)},
gH:function(a){var u=this.a
return(u^C.c.aN(u,30))&1073741823},
i:function(a){var u=this,t=P.mG(H.na(u)),s=P.cW(H.n8(u)),r=P.cW(H.n4(u)),q=P.cW(H.n5(u)),p=P.cW(H.n7(u)),o=P.cW(H.n9(u)),n=P.mH(H.n6(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.J.prototype={}
P.b0.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.b0&&this.a===b.a},
gH:function(a){return C.c.gH(this.a)},
aQ:function(a,b){return C.c.aQ(this.a,b.a)},
i:function(a){var u,t,s,r=new P.fg(),q=this.a
if(q<0)return"-"+new P.b0(0-q).i(0)
u=r.$1(C.c.a3(q,6e7)%60)
t=r.$1(C.c.a3(q,1e6)%60)
s=new P.ff().$1(q%1e6)
return""+C.c.a3(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.ff.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fg.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bq.prototype={}
P.dj.prototype={
i:function(a){return"Throw of null."}}
P.aj.prototype={
gbE:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbD:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbE()+o+u
if(!q.a)return t
s=q.gbD()
r=P.kp(q.b)
return t+s+": "+r}}
P.bz.prototype={
gbE:function(){return"RangeError"},
gbD:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fB.prototype={
gbE:function(){return"RangeError"},
gbD:function(){var u,t=this.b
if(typeof t!=="number")return t.R()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.iA.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iw.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cg.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f0.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kp(u)+"."}}
P.hv.prototype={
i:function(a){return"Out of Memory"},
$ibq:1}
P.ds.prototype={
i:function(a){return"Stack Overflow"},
$ibq:1}
P.f8.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dT.prototype={
i:function(a){return"Exception: "+this.a}}
P.ft.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.t(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.E(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.V(f,q)
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
k=""}j=C.a.t(f,m,n)
return h+l+j+k+"\n"+C.a.p(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.fv.prototype={}
P.v.prototype={}
P.j.prototype={
bw:function(a,b){return new H.cr(this,b,[H.kQ(this,"j",0)])},
gl:function(a){var u,t=this.gS(this)
for(u=0;t.u();)++u
return u},
gaI:function(a){var u,t=this.gS(this)
if(!t.u())throw H.c(H.fD())
u=t.gC(t)
if(t.u())throw H.c(H.mN())
return u},
I:function(a,b){var u,t,s
P.lk(b,"index")
for(u=this.gS(this),t=0;u.u();){s=u.gC(u)
if(b===t)return s;++t}throw H.c(P.L(b,this,"index",null,t))},
i:function(a){return P.mM(this,"(",")")}}
P.fE.prototype={}
P.o.prototype={$iq:1,$ij:1}
P.Q.prototype={}
P.b9.prototype={
gH:function(a){return P.a1.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.a1.prototype={constructor:P.a1,$ia1:1,
q:function(a,b){return this===b},
gH:function(a){return H.cd(this)},
i:function(a){return"Instance of '"+H.e(H.ce(this))+"'"},
toString:function(){return this.i(this)}}
P.h.prototype={}
P.R.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iF.prototype={
$2:function(a,b){var u,t,s,r=J.cH(b).dj(b,"=")
if(r===-1){if(b!=="")J.kh(a,P.kK(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.t(b,0,r)
t=C.a.a5(b,r+1)
s=this.a
J.kh(a,P.kK(u,0,u.length,s,!0),P.kK(t,0,t.length,s,!0))}return a}}
P.iC.prototype={
$2:function(a,b){throw H.c(P.T("Illegal IPv4 address, "+a,this.a,b))}}
P.iD.prototype={
$2:function(a,b){throw H.c(P.T("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iE.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eH(C.a.t(this.b,a,b),null,16)
if(typeof u!=="number")return u.R()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bH.prototype={
gdQ:function(){return this.b},
gc9:function(a){var u=this.c
if(u==null)return""
if(C.a.a2(u,"["))return C.a.t(u,1,u.length-1)
return u},
gbr:function(a){var u=this.d
if(u==null)return P.lI(this.a)
return u},
gcd:function(a){var u=this.f
return u==null?"":u},
gde:function(){var u=this.r
return u==null?"":u},
dJ:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a2(u,"/"))u="/"+u
s=P.kI(null,0,0,b)
return new P.bH(q,o,m,n,u,s,r.r)},
gce:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.h
u=this.Q=new P.dF(P.lw(t==null?"":t),[u,u])
t=u}return t},
gdf:function(){return this.c!=null},
gdi:function(){return this.f!=null},
gdg:function(){return this.r!=null},
i:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.e(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.e(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.e(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.S(b).$ikD)if(s.a==b.gbx())if(s.c!=null===b.gdf())if(s.b==b.gdQ())if(s.gc9(s)==b.gc9(b))if(s.gbr(s)==b.gbr(b))if(s.e===b.gdF(b)){u=s.f
t=u==null
if(!t===b.gdi()){if(t)u=""
if(u===b.gcd(b)){u=s.r
t=u==null
if(!t===b.gdg()){if(t)u=""
u=u===b.gde()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gH:function(a){var u=this.z
return u==null?this.z=C.a.gH(this.i(0)):u},
$ikD:1,
gbx:function(){return this.a},
gdF:function(a){return this.e}}
P.jz.prototype={
$1:function(a){throw H.c(P.T("Invalid port",this.a,this.b+1))}}
P.jA.prototype={
$1:function(a){return P.eu(C.V,a,C.e,!1)}}
P.jC.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.eu(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.eu(C.h,b,C.e,!0))}}}
P.jB.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aJ(b),t=this.a;u.u();)t.$2(a,u.gC(u))}}
P.iB.prototype={
gdP:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.a.bo(u,"?",o)
s=u.length
if(t>=0){r=P.cD(u,t+1,s,C.k,!1)
s=t}else r=p
return q.c=new P.j4("data",p,p,p,P.cD(u,o,s,C.z,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jK.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jJ.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.mu(u,0,96,b)
return u},
$S:17}
P.jL.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.E(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.jM.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.E(b,0),t=C.a.E(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.jl.prototype={
gdf:function(){return this.c>0},
gdh:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.B()
t=this.e
if(typeof t!=="number")return H.w(t)
t=u+1<t
u=t}else u=!1
return u},
gdi:function(){var u=this.f
if(typeof u!=="number")return u.R()
return u<this.r},
gdg:function(){return this.r<this.a.length},
gcH:function(){return this.b===4&&C.a.a2(this.a,"http")},
gcI:function(){return this.b===5&&C.a.a2(this.a,"https")},
gbx:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcH())q=t.x="http"
else if(t.gcI()){t.x="https"
q="https"}else if(q===4&&C.a.a2(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a2(t.a,r)){t.x=r
q=r}else{q=C.a.t(t.a,0,q)
t.x=q}return q},
gdQ:function(){var u=this.c,t=this.b+3
return u>t?C.a.t(this.a,t,u-1):""},
gc9:function(a){var u=this.c
return u>0?C.a.t(this.a,u,this.d):""},
gbr:function(a){var u,t=this
if(t.gdh()){u=t.d
if(typeof u!=="number")return u.B()
return P.eH(C.a.t(t.a,u+1,t.e),null,null)}if(t.gcH())return 80
if(t.gcI())return 443
return 0},
gdF:function(a){return C.a.t(this.a,this.e,this.f)},
gcd:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.R()
return u<t?C.a.t(this.a,u+1,t):""},
gde:function(){var u=this.r,t=this.a
return u<t.length?C.a.a5(t,u+1):""},
gce:function(){var u=this,t=u.f
if(typeof t!=="number")return t.R()
if(t>=u.r)return C.W
t=P.h
return new P.dF(P.lw(u.gcd(u)),[t,t])},
dJ:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbx(),m=n==="file",l=p.c,k=l>0?C.a.t(p.a,p.b+3,l):"",j=p.gdh()?p.gbr(p):o
l=p.c
if(l>0)u=C.a.t(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.t(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a2(t,"/"))t="/"+t
r=P.kI(o,0,0,b)
s=p.r
q=s<l.length?C.a.a5(l,s+1):o
return new P.bH(n,k,u,j,t,r,q)},
gH:function(a){var u=this.y
return u==null?this.y=C.a.gH(this.a):u},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.S(b).$ikD&&this.a===b.i(0)},
i:function(a){return this.a},
$ikD:1}
P.j4.prototype={}
W.n.prototype={}
W.eK.prototype={
gl:function(a){return a.length}}
W.eL.prototype={
i:function(a){return String(a)}}
W.eM.prototype={
i:function(a){return String(a)}}
W.bn.prototype={$ibn:1}
W.bo.prototype={$ibo:1}
W.bp.prototype={
dT:function(a,b,c){var u=a.getContext(b,P.ow(c))
return u},
$ibp:1}
W.aZ.prototype={
gl:function(a){return a.length}}
W.f4.prototype={
gl:function(a){return a.length}}
W.H.prototype={$iH:1}
W.bV.prototype={
gl:function(a){return a.length}}
W.f5.prototype={}
W.ag.prototype={}
W.at.prototype={}
W.f6.prototype={
gl:function(a){return a.length}}
W.f7.prototype={
gl:function(a){return a.length}}
W.fa.prototype={
gl:function(a){return a.length}}
W.ak.prototype={$iak:1}
W.fc.prototype={
i:function(a){return String(a)}}
W.cY.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[[P.a8,P.aa]]},
$iA:1,
$aA:function(){return[[P.a8,P.aa]]},
$ax:function(){return[[P.a8,P.aa]]},
$ij:1,
$aj:function(){return[[P.a8,P.aa]]},
$io:1,
$ao:function(){return[[P.a8,P.aa]]}}
W.cZ.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaH(a))+" x "+H.e(this.gaD(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.S(b)
return!!u.$ia8&&a.left===u.gbq(b)&&a.top===u.gbu(b)&&this.gaH(a)===u.gaH(b)&&this.gaD(a)===u.gaD(b)},
gH:function(a){return W.lG(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(this.gaH(a)),C.d.gH(this.gaD(a)))},
gd1:function(a){return a.bottom},
gaD:function(a){return a.height},
gbq:function(a){return a.left},
gbt:function(a){return a.right},
gbu:function(a){return a.top},
gaH:function(a){return a.width},
$ia8:1,
$aa8:function(){return[P.aa]}}
W.fd.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[P.h]},
$iA:1,
$aA:function(){return[P.h]},
$ax:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$io:1,
$ao:function(){return[P.h]}}
W.fe.prototype={
gl:function(a){return a.length}}
W.j2.prototype={
gl:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gS:function(a){var u=this.i3(this)
return new J.a4(u,u.length)},
$aq:function(){return[W.P]},
$ax:function(){return[W.P]},
$aj:function(){return[W.P]},
$ao:function(){return[W.P]}}
W.P.prototype={
gh8:function(a){return new W.j5(a)},
gbW:function(a){return new W.j2(a,a.children)},
gd2:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.R()
if(s<0)s=-s*0
if(typeof r!=="number")return r.R()
if(r<0)r=-r*0
return new P.a8(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
ac:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.lb
if(u==null){u=H.b([],[W.aQ])
t=new W.di(u)
u.push(W.lF(null))
u.push(W.lH())
$.lb=t
d=t}else d=u
u=$.la
if(u==null){u=new W.ev(d)
$.la=u
c=u}else{u.a=d
c=u}}if($.aM==null){u=document
t=u.implementation.createHTMLDocument("")
$.aM=t
$.kn=t.createRange()
s=$.aM.createElement("base")
s.href=u.baseURI
$.aM.head.appendChild(s)}u=$.aM
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aM
if(!!this.$ibo)r=u.body
else{r=u.createElement(a.tagName)
$.aM.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.N(C.T,a.tagName)){$.kn.selectNodeContents(r)
q=$.kn.createContextualFragment(b)}else{r.innerHTML=b
q=$.aM.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aM.body
if(r==null?u!=null:r!==u)J.l1(r)
c.ck(q)
document.adoptNode(q)
return q},
hg:function(a,b,c){return this.ac(a,b,c,null)},
dV:function(a,b){a.textContent=null
a.appendChild(this.ac(a,b,null,null))},
$iP:1,
gdL:function(a){return a.tagName}}
W.fi.prototype={
$1:function(a){return!!J.S(a).$iP}}
W.i.prototype={$ii:1}
W.f.prototype={
h_:function(a,b,c,d){if(c!=null)this.em(a,b,c,!1)},
em:function(a,b,c,d){return a.addEventListener(b,H.bM(c,1),!1)}}
W.al.prototype={$ial:1}
W.bY.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.al]},
$iA:1,
$aA:function(){return[W.al]},
$ax:function(){return[W.al]},
$ij:1,
$aj:function(){return[W.al]},
$io:1,
$ao:function(){return[W.al]},
$ibY:1}
W.fo.prototype={
gl:function(a){return a.length}}
W.fs.prototype={
gl:function(a){return a.length}}
W.au.prototype={$iau:1}
W.fy.prototype={
gl:function(a){return a.length}}
W.c_.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.E]},
$iA:1,
$aA:function(){return[W.E]},
$ax:function(){return[W.E]},
$ij:1,
$aj:function(){return[W.E]},
$io:1,
$ao:function(){return[W.E]}}
W.c0.prototype={$ic0:1}
W.bv.prototype={$ibv:1}
W.fS.prototype={
i:function(a){return String(a)}}
W.hd.prototype={
gl:function(a){return a.length}}
W.c7.prototype={$ic7:1}
W.he.prototype={
h:function(a,b){return P.aU(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aU(u.value[1]))}},
gZ:function(a){var u=H.b([],[P.h])
this.F(a,new W.hf(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa0:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
W.hf.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hg.prototype={
h:function(a,b){return P.aU(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aU(u.value[1]))}},
gZ:function(a){var u=H.b([],[P.h])
this.F(a,new W.hh(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa0:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
W.hh.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aw.prototype={$iaw:1}
W.hi.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aw]},
$iA:1,
$aA:function(){return[W.aw]},
$ax:function(){return[W.aw]},
$ij:1,
$aj:function(){return[W.aw]},
$io:1,
$ao:function(){return[W.aw]}}
W.ax.prototype={$iax:1}
W.a2.prototype={
gaI:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.ln("No elements"))
if(t>1)throw H.c(P.ln("More than one element"))
return u.firstChild},
ab:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gS:function(a){var u=this.a.childNodes
return new W.d1(u,u.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$aq:function(){return[W.E]},
$ax:function(){return[W.E]},
$aj:function(){return[W.E]},
$ao:function(){return[W.E]}}
W.E.prototype={
hV:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
hZ:function(a,b){var u,t
try{u=a.parentNode
J.mr(u,b,a)}catch(t){H.ae(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.e_(a):u},
fH:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.dh.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.E]},
$iA:1,
$aA:function(){return[W.E]},
$ax:function(){return[W.E]},
$ij:1,
$aj:function(){return[W.E]},
$io:1,
$ao:function(){return[W.E]}}
W.ay.prototype={$iay:1,
gl:function(a){return a.length}}
W.hy.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ay]},
$iA:1,
$aA:function(){return[W.ay]},
$ax:function(){return[W.ay]},
$ij:1,
$aj:function(){return[W.ay]},
$io:1,
$ao:function(){return[W.ay]}}
W.hJ.prototype={
h:function(a,b){return P.aU(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aU(u.value[1]))}},
gZ:function(a){var u=H.b([],[P.h])
this.F(a,new W.hK(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa0:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
W.hK.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hM.prototype={
gl:function(a){return a.length}}
W.aA.prototype={$iaA:1}
W.hX.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aA]},
$iA:1,
$aA:function(){return[W.aA]},
$ax:function(){return[W.aA]},
$ij:1,
$aj:function(){return[W.aA]},
$io:1,
$ao:function(){return[W.aA]}}
W.aB.prototype={$iaB:1}
W.hY.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aB]},
$iA:1,
$aA:function(){return[W.aB]},
$ax:function(){return[W.aB]},
$ij:1,
$aj:function(){return[W.aB]},
$io:1,
$ao:function(){return[W.aB]}}
W.aC.prototype={$iaC:1,
gl:function(a){return a.length}}
W.i1.prototype={
h:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
F:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gZ:function(a){var u=H.b([],[P.h])
this.F(a,new W.i2(u))
return u},
gl:function(a){return a.length},
$aa0:function(){return[P.h,P.h]},
$iQ:1,
$aQ:function(){return[P.h,P.h]}}
W.i2.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ao.prototype={$iao:1}
W.dv.prototype={
ac:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.by(a,b,c,d)
u=W.mI("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a2(t).ab(0,new W.a2(u))
return t}}
W.i5.prototype={
ac:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.by(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.ac(u.createElement("table"),b,c,d)
u.toString
u=new W.a2(u)
s=u.gaI(u)
s.toString
u=new W.a2(s)
r=u.gaI(u)
t.toString
r.toString
new W.a2(t).ab(0,new W.a2(r))
return t}}
W.i6.prototype={
ac:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.by(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.ac(u.createElement("table"),b,c,d)
u.toString
u=new W.a2(u)
s=u.gaI(u)
t.toString
s.toString
new W.a2(t).ab(0,new W.a2(s))
return t}}
W.ci.prototype={$ici:1}
W.aD.prototype={$iaD:1}
W.ap.prototype={$iap:1}
W.i9.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ap]},
$iA:1,
$aA:function(){return[W.ap]},
$ax:function(){return[W.ap]},
$ij:1,
$aj:function(){return[W.ap]},
$io:1,
$ao:function(){return[W.ap]}}
W.ia.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aD]},
$iA:1,
$aA:function(){return[W.aD]},
$ax:function(){return[W.aD]},
$ij:1,
$aj:function(){return[W.aD]},
$io:1,
$ao:function(){return[W.aD]}}
W.id.prototype={
gl:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.bA.prototype={$ibA:1}
W.ii.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aE]},
$iA:1,
$aA:function(){return[W.aE]},
$ax:function(){return[W.aE]},
$ij:1,
$aj:function(){return[W.aE]},
$io:1,
$ao:function(){return[W.aE]}}
W.ij.prototype={
gl:function(a){return a.length}}
W.bc.prototype={}
W.iG.prototype={
i:function(a){return String(a)}}
W.iV.prototype={
gl:function(a){return a.length}}
W.bg.prototype={
ghj:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.y("deltaY is not supported"))},
ghi:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.y("deltaX is not supported"))},
$ibg:1}
W.cs.prototype={
fI:function(a,b){return a.requestAnimationFrame(H.bM(b,1))},
ez:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.j3.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.H]},
$iA:1,
$aA:function(){return[W.H]},
$ax:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]},
$io:1,
$ao:function(){return[W.H]}}
W.dO.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.S(b)
return!!u.$ia8&&a.left===u.gbq(b)&&a.top===u.gbu(b)&&a.width===u.gaH(b)&&a.height===u.gaD(b)},
gH:function(a){return W.lG(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(a.width),C.d.gH(a.height))},
gaD:function(a){return a.height},
gaH:function(a){return a.width}}
W.j8.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.au]},
$iA:1,
$aA:function(){return[W.au]},
$ax:function(){return[W.au]},
$ij:1,
$aj:function(){return[W.au]},
$io:1,
$ao:function(){return[W.au]}}
W.e5.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.E]},
$iA:1,
$aA:function(){return[W.E]},
$ax:function(){return[W.E]},
$ij:1,
$aj:function(){return[W.E]},
$io:1,
$ao:function(){return[W.E]}}
W.jm.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aC]},
$iA:1,
$aA:function(){return[W.aC]},
$ax:function(){return[W.aC]},
$ij:1,
$aj:function(){return[W.aC]},
$io:1,
$ao:function(){return[W.aC]}}
W.jr.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ao]},
$iA:1,
$aA:function(){return[W.ao]},
$ax:function(){return[W.ao]},
$ij:1,
$aj:function(){return[W.ao]},
$io:1,
$ao:function(){return[W.ao]}}
W.j1.prototype={
F:function(a,b){var u,t,s,r,q
for(u=this.gZ(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.l)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gZ:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aa0:function(){return[P.h,P.h]},
$aQ:function(){return[P.h,P.h]}}
W.j5.prototype={
h:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.gZ(this).length}}
W.j6.prototype={}
W.j7.prototype={
$1:function(a){return this.a.$1(a)}}
W.ct.prototype={
e9:function(a){var u
if($.cu.ghz($.cu)){for(u=0;u<262;++u)$.cu.m(0,C.S[u],W.oF())
for(u=0;u<12;++u)$.cu.m(0,C.p[u],W.oG())}},
aO:function(a){return $.mn().N(0,W.bW(a))},
aq:function(a,b,c){var u=$.cu.h(0,H.e(W.bW(a))+"::"+b)
if(u==null)u=$.cu.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaQ:1}
W.K.prototype={
gS:function(a){return new W.d1(a,this.gl(a))}}
W.di.prototype={
aO:function(a){return C.b.cZ(this.a,new W.hq(a))},
aq:function(a,b,c){return C.b.cZ(this.a,new W.hp(a,b,c))},
$iaQ:1}
W.hq.prototype={
$1:function(a){return a.aO(this.a)}}
W.hp.prototype={
$1:function(a){return a.aq(this.a,this.b,this.c)}}
W.ed.prototype={
ef:function(a,b,c,d){var u,t,s
this.a.ab(0,c)
u=b.bw(0,new W.jj())
t=b.bw(0,new W.jk())
this.b.ab(0,u)
s=this.c
s.ab(0,C.w)
s.ab(0,t)},
aO:function(a){return this.a.N(0,W.bW(a))},
aq:function(a,b,c){var u=this,t=W.bW(a),s=u.c
if(s.N(0,H.e(t)+"::"+b))return u.d.h3(c)
else if(s.N(0,"*::"+b))return u.d.h3(c)
else{s=u.b
if(s.N(0,H.e(t)+"::"+b))return!0
else if(s.N(0,"*::"+b))return!0
else if(s.N(0,H.e(t)+"::*"))return!0
else if(s.N(0,"*::*"))return!0}return!1},
$iaQ:1}
W.jj.prototype={
$1:function(a){return!C.b.N(C.p,a)}}
W.jk.prototype={
$1:function(a){return C.b.N(C.p,a)}}
W.ju.prototype={
aq:function(a,b,c){if(this.e2(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.N(0,b)
return!1}}
W.jv.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.js.prototype={
aO:function(a){var u=J.S(a)
if(!!u.$icf)return!1
u=!!u.$ik
if(u&&W.bW(a)==="foreignObject")return!1
if(u)return!0
return!1},
aq:function(a,b,c){if(b==="is"||C.a.a2(b,"on"))return!1
return this.aO(a)},
$iaQ:1}
W.d1.prototype={
u:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.bR(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gC:function(a){return this.d}}
W.aQ.prototype={}
W.jh.prototype={}
W.ev.prototype={
ck:function(a){new W.jF(this).$2(a,null)},
aY:function(a,b){if(b==null)J.l1(a)
else b.removeChild(a)},
fM:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mv(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ae(r)}t="element unprintable"
try{t=J.a3(a)}catch(r){H.ae(r)}try{s=W.bW(a)
this.fL(a,b,p,t,s,o,n)}catch(r){if(H.ae(r) instanceof P.aj)throw r
else{this.aY(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fL:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aY(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aO(a)){p.aY(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.aq(a,"is",g)){p.aY(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gZ(f)
t=H.b(u.slice(0),[H.aI(u,0)])
for(s=f.gZ(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
if(!p.a.aq(a,J.my(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.S(a).$ici)p.ck(a.content)}}
W.jF.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fM(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aY(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ae(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dN.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.cz.prototype={}
W.cA.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.ej.prototype={}
W.em.prototype={}
W.en.prototype={}
W.cB.prototype={}
W.cC.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
P.jn.prototype={
c7:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
bv:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.S(a)
if(!!u.$iab)return new Date(a.a)
if(!!u.$ine)throw H.c(P.ix("structured clone of RegExp"))
if(!!u.$ial)return a
if(!!u.$ibn)return a
if(!!u.$ibY)return a
if(!!u.$ic0)return a
if(!!u.$ic9||!!u.$ib8||!!u.$ic7)return a
if(!!u.$iQ){t=p.c7(a)
s=p.b
r=s.length
if(t>=r)return H.d(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.d(s,t)
s[t]=q
u.F(a,new P.jp(o,p))
return o.a}if(!!u.$io){t=p.c7(a)
o=p.b
if(t>=o.length)return H.d(o,t)
q=o[t]
if(q!=null)return q
return p.hf(a,t)}if(!!u.$imQ){t=p.c7(a)
u=p.b
s=u.length
if(t>=s)return H.d(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.d(u,t)
u[t]=q
p.hv(a,new P.jq(o,p))
return o.b}throw H.c(P.ix("structured clone of other type"))},
hf:function(a,b){var u,t=J.bi(a),s=t.gl(a),r=new Array(s),q=this.b
if(b>=q.length)return H.d(q,b)
q[b]=r
if(typeof s!=="number")return H.w(s)
u=0
for(;u<s;++u){q=this.bv(t.h(a,u))
if(u>=r.length)return H.d(r,u)
r[u]=q}return r}}
P.jp.prototype={
$2:function(a,b){this.a.a[a]=this.b.bv(b)},
$S:3}
P.jq.prototype={
$2:function(a,b){this.a.b[a]=this.b.bv(b)},
$S:3}
P.jQ.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jo.prototype={
hv:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.fp.prototype={
gbe:function(){var u=this.b,t=H.kQ(u,"x",0)
return new H.c4(new H.cr(u,new P.fq(),[t]),new P.fr(),[t,W.P])},
m:function(a,b,c){var u=this.gbe()
J.mw(u.b.$1(J.eJ(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.af(this.gbe().a)},
h:function(a,b){var u=this.gbe()
return u.b.$1(J.eJ(u.a,b))},
gS:function(a){var u=P.kw(this.gbe(),!1,W.P)
return new J.a4(u,u.length)},
$aq:function(){return[W.P]},
$ax:function(){return[W.P]},
$aj:function(){return[W.P]},
$ao:function(){return[W.P]}}
P.fq.prototype={
$1:function(a){return!!J.S(a).$iP}}
P.fr.prototype={
$1:function(a){return H.r(a,"$iP")}}
P.jd.prototype={
gbt:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.w(t)
return u+t},
gd1:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.w(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.S(b)
if(!!u.$ia8){t=q.a
if(t==u.gbq(b)){s=q.b
if(s==u.gbu(b)){r=q.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.w(r)
if(t+r===u.gbt(b)){t=q.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.w(t)
u=s+t===u.gd1(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u=this,t=u.a,s=J.cN(t),r=u.b,q=J.cN(r),p=u.c
if(typeof t!=="number")return t.B()
if(typeof p!=="number")return H.w(p)
p=C.c.gH(t+p)
t=u.d
if(typeof r!=="number")return r.B()
if(typeof t!=="number")return H.w(t)
t=C.c.gH(r+t)
return P.nE(P.ja(P.ja(P.ja(P.ja(0,s),q),p),t))}}
P.a8.prototype={
gbq:function(a){return this.a},
gbu:function(a){return this.b},
gaH:function(a){return this.c},
gaD:function(a){return this.d}}
P.aO.prototype={$iaO:1}
P.fL.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aO]},
$ax:function(){return[P.aO]},
$ij:1,
$aj:function(){return[P.aO]},
$io:1,
$ao:function(){return[P.aO]}}
P.aR.prototype={$iaR:1}
P.ht.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aR]},
$ax:function(){return[P.aR]},
$ij:1,
$aj:function(){return[P.aR]},
$io:1,
$ao:function(){return[P.aR]}}
P.hB.prototype={
gl:function(a){return a.length}}
P.cf.prototype={$icf:1}
P.i4.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.h]},
$ax:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$io:1,
$ao:function(){return[P.h]}}
P.k.prototype={
gbW:function(a){return new P.fp(a,new W.a2(a))},
ac:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aQ])
p.push(W.lF(null))
p.push(W.lH())
p.push(new W.js())
c=new W.ev(new W.di(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).hg(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a2(s)
q=p.gaI(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ik:1}
P.aT.prototype={$iaT:1}
P.ik.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aT]},
$ax:function(){return[P.aT]},
$ij:1,
$aj:function(){return[P.aT]},
$io:1,
$ao:function(){return[P.aT]}}
P.dY.prototype={}
P.dZ.prototype={}
P.e8.prototype={}
P.e9.prototype={}
P.ek.prototype={}
P.el.prototype={}
P.er.prototype={}
P.es.prototype={}
P.bB.prototype={$iq:1,
$aq:function(){return[P.v]},
$ij:1,
$aj:function(){return[P.v]},
$io:1,
$ao:function(){return[P.v]}}
P.eP.prototype={
gl:function(a){return a.length}}
P.eQ.prototype={
h:function(a,b){return P.aU(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aU(u.value[1]))}},
gZ:function(a){var u=H.b([],[P.h])
this.F(a,new P.eR(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa0:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
P.eR.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eS.prototype={
gl:function(a){return a.length}}
P.bm.prototype={}
P.hu.prototype={
gl:function(a){return a.length}}
P.dM.prototype={}
P.i_.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return P.aU(a.item(b))},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[[P.Q,,,]]},
$ax:function(){return[[P.Q,,,]]},
$ij:1,
$aj:function(){return[[P.Q,,,]]},
$io:1,
$ao:function(){return[[P.Q,,,]]}}
P.eg.prototype={}
P.eh.prototype={}
K.aK.prototype={
aE:function(a,b){return!0},
i:function(a){return"all"}}
K.d3.prototype={
aE:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)if(u[s].aE(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.l)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.b6.prototype={}
K.a6.prototype={
aE:function(a,b){return!this.dZ(0,b)},
i:function(a){return"!["+this.cn(0)+"]"}}
K.hE.prototype={
aE:function(a,b){if(typeof b!=="number")return H.w(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.by(this.a),t=H.by(this.b)
return u+".."+t}}
K.hN.prototype={
e6:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.u("May not create a Set with zero characters."))
u=P.v
t=new H.I([u,P.aH])
for(s=new H.b5(a,a.gl(a));s.u();)t.m(0,s.d,!0)
r=P.kw(t.gZ(t),!0,u)
C.b.dX(r)
this.a=r},
aE:function(a,b){return C.b.N(this.a,b)},
i:function(a){return P.ch(this.a,0,null)}}
L.dt.prototype={
j:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dC(this.a.k(0,b))
r.a=H.b([],[K.b6])
r.c=!1
this.c.push(r)
return r},
hq:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
if(r.aE(0,a))return r}return},
i:function(a){return this.b},
cS:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.N(0,n))o+=" (consume)"
for(n=p.d.c,n=n.gZ(n),n=n.gS(n);n.u();){t=n.gC(n)
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.N(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.l)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dz.prototype={
i:function(a){var u=H.kV(this.b,"\n","\\n"),t=H.kV(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dA.prototype={
aG:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.l)(c),++t){s=c[t]
this.c.m(0,s,b)}},
i:function(a){return this.b}}
L.ie.prototype={
k:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.dt(this,b)
u.c=H.b([],[L.dC])
this.a.m(0,b,u)}return u},
P:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dA(a)
u=P.h
t.c=new H.I([u,u])
this.b.m(0,a,t)}return t},
cj:function(a){return this.i6(a)},
i6:function(a){var u=this
return P.o0(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$cj(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.v]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.cf(c,0)
else{if(!t.u()){s=3
break}l=t.d}d.push(l);++o
k=g.hq(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.ch(d,0,null)
throw H.c(P.u("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.p(P.y("removeRange"))
P.aS(0,m,d.length)
d.splice(0,m-0)
C.b.ab(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.N(0,p.a)?7:8
break
case 7:s=9
return p
case 9:case 8:o=n
p=null
m=0
s=5
break
case 6:if(!k.c)e.push(l)
g=k.b
if(g.d!=null){j=P.ch(e,0,null)
i=g.d
h=i.c.h(0,j)
p=new L.dz(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.N(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.nC()
case 1:return P.nD(q)}}},L.dz)},
i:function(a){var u,t=new P.R(""),s=this.d
if(s!=null)t.a=s.cS()+"\n"
for(s=this.a,s=s.gi8(s),s=s.gS(s);s.u();){u=s.gC(s)
if(u!=this.d)t.a+=u.cS()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dC.prototype={
i:function(a){return this.b.b+": "+this.cn(0)}}
O.b_.prototype={
bz:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cl:function(a,b,c){this.b=b
this.c=a},
bb:function(a,b){return this.cl(a,null,b)},
fo:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
eO:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.a4(u,u.length)},
I:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.kQ(s,"b_",0)]
if(s.fo(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.eO(t,H.b([b],r))}},
$ij:1}
O.c5.prototype={
gl:function(a){return this.a.length},
gA:function(){var u=this.b
return u==null?this.b=D.N():u},
aJ:function(){var u=this.b
if(u!=null)u.J(null)},
ga_:function(a){var u=this.a
if(u.length>0)return C.b.gat(u)
else return V.bw()},
dH:function(a){var u=this.a
if(a==null)u.push(V.bw())
else u.push(a)
this.aJ()},
cc:function(){var u=this.a
if(u.length>0){u.pop()
this.aJ()}}}
E.eV.prototype={}
E.aN.prototype={
cv:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.a4(u,u.length);u.u();){t=u.d
if(t.f==null)t.cv()}},
sa9:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gA().K(0,s.gdA())
u=s.c
if(u!=null)u.gA().n(0,s.gdA())
t=new D.B("shape",r,s.c)
t.b=!0
s.aj(t)}},
sb7:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gA().K(0,s.gdC())
u=s.f
s.f=a
if(a!=null)a.gA().n(0,s.gdC())
s.cv()
t=new D.B("technique",u,s.f)
t.b=!0
s.aj(t)}},
saF:function(a){var u,t,s=this
if(!J.D(s.r,a)){u=s.r
if(u!=null)u.gA().K(0,s.gdw())
if(a!=null)a.gA().n(0,s.gdw())
s.r=a
t=new D.B("mover",u,a)
t.b=!0
s.aj(t)}},
av:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aw(0,b,s):null
if(!J.D(q,s.x)){u=s.x
s.x=q
t=new D.B("matrix",u,q)
t.b=!0
s.aj(t)}r=s.f
if(r!=null)r.av(0,b)
for(r=s.y.a,r=new J.a4(r,r.length);r.u();)r.d.av(0,b)},
aS:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.ga_(s))
else s.a.push(r.p(0,s.ga_(s)))
s.aJ()
a.dI(t.f)
s=a.dy
u=(s&&C.b).gat(s)
if(u!=null&&t.d!=null)u.hY(a,t)
for(s=t.y.a,s=new J.a4(s,s.length);s.u();)s.d.aS(a)
a.dG()
a.dx.cc()},
aj:function(a){var u=this.z
if(u!=null)u.J(a)},
Y:function(){return this.aj(null)},
dB:function(a){this.e=null
this.aj(a)},
hK:function(){return this.dB(null)},
dD:function(a){this.aj(a)},
hL:function(){return this.dD(null)},
dz:function(a){this.aj(a)},
hJ:function(){return this.dz(null)},
dv:function(a){this.aj(a)},
hG:function(){return this.dv(null)},
hF:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdu(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.br()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.Y()},
hI:function(a,b){var u,t
for(u=b.gS(b),t=this.gdu();u.u();)u.gC(u).gA().K(0,t)
this.Y()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hF.prototype={
e5:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ab(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.c5()
t=[V.am]
u.a=H.b([],t)
u.gA().n(0,new E.hG(s))
s.cy=u
u=new O.c5()
u.a=H.b([],t)
u.gA().n(0,new E.hH(s))
s.db=u
u=new O.c5()
u.a=H.b([],t)
u.gA().n(0,new E.hI(s))
s.dx=u
u=H.b([],[O.dw])
s.dy=u
u.push(null)
s.fr=new H.I([P.h,A.dp])},
ghU:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga_(s)
u=t.db
u=t.z=s.p(0,u.ga_(u))
s=u}return s},
dI:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gat(u):a)},
dG:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.hG.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hH.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hI.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dx.prototype={
cs:function(a){this.dK()},
cr:function(){return this.cs(null)},
ghw:function(){var u,t=this,s=Date.now(),r=C.c.a3(P.l9(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.ab(s,!1)
return u/r},
cM:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.p()
if(typeof r!=="number")return H.w(r)
u=C.d.dd(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.p()
t=C.d.dd(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lq(C.n,s.gi_())}},
dK:function(){if(!this.cx){this.cx=!0
var u=window
C.D.ez(u)
C.D.fI(u,W.lS(new E.ic(this),P.aa))}},
hX:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cM()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ab(r,!1)
s.y=P.l9(r-s.r.a).a*0.000001
r=s.cy
C.b.sl(r.a,0)
r.aJ()
r=s.db
C.b.sl(r.a,0)
r.aJ()
r=s.dx
C.b.sl(r.a,0)
r.aJ()
r=s.dy;(r&&C.b).sl(r,0)
s.dy.push(null)
o.aS(p.e)}s=p.Q
if(s!=null)s.J(null)}catch(q){u=H.ae(q)
t=H.kR(q)
P.kU("Error: "+H.e(u))
P.kU("Stack: "+H.e(t))
throw H.c(u)}}}
E.ic.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.hX()}}}
Z.dK.prototype={}
Z.cQ.prototype={
bh:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ae(s)
t=P.u('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.iW.prototype={}
Z.cR.prototype={
aR:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bh:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bh(a)},
dO:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aS:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a3(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(p,", ")+"\nAttrs:   "+C.b.j(r,", ")}}
Z.bs.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.ce(this.c))+"'")+"]"}}
Z.bf.prototype={
gcm:function(a){var u=this.a,t=(u&$.aY().a)!==0?3:0
if((u&$.aX().a)!==0)t+=3
if((u&$.aW().a)!==0)t+=3
if((u&$.bj().a)!==0)t+=2
if((u&$.bk().a)!==0)t+=3
if((u&$.cK().a)!==0)t+=3
if((u&$.cL().a)!==0)t+=4
if((u&$.bQ().a)!==0)++t
return(u&$.aV().a)!==0?t+4:t},
h4:function(a){var u,t=$.aY(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aX()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aW()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cK()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cL()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bQ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aV()
if((s&t.a)!==0)if(u===a)return t
return $.ml()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bf))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.h]),t=this.a
if((t&$.aY().a)!==0)u.push("Pos")
if((t&$.aX().a)!==0)u.push("Norm")
if((t&$.aW().a)!==0)u.push("Binm")
if((t&$.bj().a)!==0)u.push("Txt2D")
if((t&$.bk().a)!==0)u.push("TxtCube")
if((t&$.cK().a)!==0)u.push("Clr3")
if((t&$.cL().a)!==0)u.push("Clr4")
if((t&$.bQ().a)!==0)u.push("Weight")
if((t&$.aV().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.j(u,"|")}}
D.eY.prototype={}
D.br.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.X]}]):u).push(b)},
K:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.N(s,b)
if(s===!0){s=t.a
u=(s&&C.b).K(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.N(s,b)
if(s===!0){s=t.b
u=(s&&C.b).K(s,b)||u}return u},
J:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.X()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.b.F(P.kw(u,!0,{func:1,ret:-1,args:[D.X]}),new D.fl(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.X]}])
C.b.F(u,new D.fm(q))}return!0},
ak:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.J(u)}}}}
D.fl.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fm.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.X.prototype={}
D.bt.prototype={}
D.bu.prototype={}
D.B.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cS.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cS))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.d7.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d7))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.fK.prototype={
hQ:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
hM:function(a){this.c=a.b
this.d.K(0,a.a)
return!1}}
X.da.prototype={}
X.fT.prototype={
aW:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.p()
u=b.b
t=q.ch
if(typeof u!=="number")return u.p()
s=new V.a7(o.a+n*m,o.b+u*t)
t=q.a.gaP()
r=new X.b7(a,V.ba(),q.x,t,s)
r.b=!0
q.z=new P.ab(p,!1)
q.x=s
return r},
cb:function(a,b){this.r=a.a
return!1},
b6:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dU()
if(typeof u!=="number")return u.a7()
this.r=(u&~t)>>>0
return!1},
b5:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.aW(a,b))
return!0},
hR:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaP()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.p()
q=a.b
p=o.cy
if(typeof q!=="number")return q.p()
t=new X.c8(new V.O(s*r,q*p),u,t)
t.b=!0
n.J(t)
return!0},
fd:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.da(c,r.a.gaP(),b)
s.b=!0
t.J(s)
r.y=new P.ab(u,!1)
r.x=V.ba()}}
X.an.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.an))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b7.prototype={}
X.hj.prototype={
bG:function(a,b,c){var u=this,t=new P.ab(Date.now(),!1),s=u.a.gaP(),r=new X.b7(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cb:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.J(this.bG(a,b,!0))
return!0},
b6:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dU()
if(typeof t!=="number")return t.a7()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.J(u.bG(a,b,!0))
return!0},
b5:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.bG(a,b,!1))
return!0},
hS:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaP()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.p()
r=a.b
q=p.ch
if(typeof r!=="number")return r.p()
u=new X.c8(new V.O(t*s,r*q),u,b)
u.b=!0
o.J(u)
return!0}}
X.c8.prototype={}
X.hA.prototype={}
X.dB.prototype={}
X.ih.prototype={
aW:function(a,b){var u=this,t=new P.ab(Date.now(),!1),s=a.length>0?a[0]:V.ba(),r=u.a.gaP(),q=new X.dB(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hP:function(a){var u=this.b
if(u==null)return!1
u.J(this.aW(a,!0))
return!0},
hN:function(a){var u=this.c
if(u==null)return!1
u.J(this.aW(a,!0))
return!0},
hO:function(a){var u=this.d
if(u==null)return!1
u.J(this.aW(a,!1))
return!0}}
X.dG.prototype={
gaP:function(){var u=this.a,t=C.m.gd2(u).c
t.toString
u=C.m.gd2(u).d
u.toString
return V.ll(0,0,t,u)},
cC:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.d7(u,new X.an(t,a.altKey,a.shiftKey))},
aM:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.an(t,a.altKey,a.shiftKey)},
bO:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.an(t,a.altKey,a.shiftKey)},
aA:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.L()
u=t.top
if(typeof r!=="number")return r.L()
return new V.a7(s-q,r-u)},
aX:function(a){return new V.O(a.movementX,a.movementY)},
bK:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a7])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
q=C.d.al(r.pageX)
C.d.al(r.pageY)
p=o.left
C.d.al(r.pageX)
n.push(new V.a7(q-p,C.d.al(r.pageY)-o.top))}return n},
ay:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cS(u,new X.an(t,a.altKey,a.shiftKey))},
bH:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.L()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.L()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
f7:function(a){this.f=!0},
eW:function(a){this.f=!1},
f1:function(a){if(this.f&&this.bH(a))a.preventDefault()},
fb:function(a){var u
if(!this.f)return
u=this.cC(a)
this.b.hQ(u)},
f9:function(a){var u
if(!this.f)return
u=this.cC(a)
this.b.hM(u)},
ff:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aM(a)
if(r.x){u=r.ay(a)
t=r.aX(a)
if(r.d.cb(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ay(a)
s=r.aA(a)
if(r.c.cb(u,s))a.preventDefault()},
fj:function(a){var u,t,s,r=this
r.aM(a)
u=r.ay(a)
if(r.x){t=r.aX(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(r.r)return
s=r.aA(a)
if(r.c.b6(u,s))a.preventDefault()},
f5:function(a){var u,t,s,r=this
if(!r.bH(a)){r.aM(a)
u=r.ay(a)
if(r.x){t=r.aX(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(r.r)return
s=r.aA(a)
if(r.c.b6(u,s))a.preventDefault()}},
fh:function(a){var u,t,s,r=this
r.aM(a)
u=r.ay(a)
if(r.x){t=r.aX(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(r.r)return
s=r.aA(a)
if(r.c.b5(u,s))a.preventDefault()},
f3:function(a){var u,t,s,r=this
if(!r.bH(a)){r.aM(a)
u=r.ay(a)
if(r.x){t=r.aX(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(r.r)return
s=r.aA(a)
if(r.c.b5(u,s))a.preventDefault()}},
fl:function(a){var u,t,s=this
s.aM(a)
u=new V.O((a&&C.C).ghi(a),C.C.ghj(a)).w(0,180)
if(s.x){if(s.d.hR(u))a.preventDefault()
return}if(s.r)return
t=s.aA(a)
if(s.c.hS(u,t))a.preventDefault()},
fn:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ay(s.y)
t=s.aA(s.y)
s.d.fd(u,t,r)}},
fD:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bO(a)
u=t.bK(a)
if(t.e.hP(u))a.preventDefault()},
fz:function(a){var u
this.bO(a)
u=this.bK(a)
if(this.e.hN(u))a.preventDefault()},
fB:function(a){var u
this.bO(a)
u=this.bK(a)
if(this.e.hO(u))a.preventDefault()}}
D.bl.prototype={
a6:function(a){var u=this.Q
if(u!=null)u.J(a)},
eb:function(){return this.a6(null)},
$ia5:1}
D.fb.prototype={$ia5:1}
D.a5.prototype={}
D.d8.prototype={
a6:function(a){var u=this.y
if(u!=null)u.J(a)},
cK:function(a){var u=this.z
if(u!=null)u.J(a)},
fc:function(){return this.cK(null)},
fq:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t){s=a[t]
if(s==null||this.ea(s))return!1}return!0},
eQ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcJ(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q instanceof D.bl)this.e.push(q)
p=q.Q
if(p==null){p=new D.br()
p.d=0
q.Q=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bt()
u.b=!0
this.a6(u)},
fv:function(a,b){var u,t,s
for(u=b.gS(b),t=this.gcJ();u.u();){s=u.gC(u)
C.b.K(this.e,s)
s.gA().K(0,t)}u=new D.bu()
u.b=!0
this.a6(u)},
ea:function(a){var u=C.b.N(this.e,a)
return u},
$aj:function(){return[D.a5]},
$ab_:function(){return[D.a5]}}
D.hz.prototype={$ia5:1}
D.hZ.prototype={$ia5:1}
V.W.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.as.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.as))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.fk.prototype={}
V.dd.prototype={
a8:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.J])
return t},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dd))return!1
u=b.a
t=$.C().a
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
i:function(a){var u,t,s,r,q=this,p=[P.J],o=V.bO(H.b([q.a,q.d,q.r],p),3,0),n=V.bO(H.b([q.b,q.e,q.x],p),3,0),m=V.bO(H.b([q.c,q.f,q.y],p),3,0)
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
V.am.prototype={
a8:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.J])
return t},
dm:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.C().a)return V.bw()
u=1/b1
t=-n
s=-a0
return V.aP((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
p:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aP(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
b9:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.U(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.am))return!1
u=b.a
t=$.C().a
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
i:function(a){return this.O()},
G:function(a){var u,t,s,r,q,p=this,o=[P.J],n=V.bO(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bO(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bO(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bO(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
O:function(){return this.G("")}}
V.a7.prototype={
L:function(a,b){return new V.a7(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.U.prototype={
B:function(a,b){return new V.U(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a,b){return new V.U(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){return new V.U(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.bb.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bb))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.dn.prototype={
gau:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dn))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.O.prototype={
b2:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.w(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.w(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.p()
u=this.b
if(typeof u!=="number")return u.p()
return new V.O(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.C().a){u=$.ly
return u==null?$.ly=new V.O(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.O(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=this.a
s=$.C()
s.toString
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.w(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.w(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.z.prototype={
b2:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ca:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.z(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aC:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.z(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.z(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.z(-this.a,-this.b,-this.c)},
p:function(a,b){return new V.z(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if(Math.abs(b-0)<$.C().a)return V.cp()
return new V.z(this.a/b,this.b/b,this.c/b)},
dn:function(){var u=$.C().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.z))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.cq.prototype={
b2:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cq))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
U.f_.prototype={
bB:function(a){var u=V.oX(a,this.c,this.b)
return u},
gA:function(){var u=this.y
return u==null?this.y=D.N():u},
U:function(a){var u=this.y
if(u!=null)u.J(a)},
sdR:function(a,b){},
sdq:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.C().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bB(u)}s=new D.B("maximumLocation",s,t.b)
s.b=!0
t.U(s)}},
sds:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.C().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bB(u)}s=new D.B("minimumLocation",s,t.c)
s.b=!0
t.U(s)}},
sa1:function(a,b){var u,t=this
b=t.bB(b)
u=t.d
if(!(Math.abs(u-b)<$.C().a)){t.d=b
u=new D.B("location",u,b)
u.b=!0
t.U(u)}},
sdr:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.C().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.B("maximumVelocity",r,a)
r.b=!0
s.U(r)}},
sX:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.C().a)){u.f=a
t=new D.B("velocity",t,a)
t.b=!0
u.U(t)}},
sd3:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.C().a)){this.x=a
u=new D.B("dampening",u,a)
u.b=!0
this.U(u)}},
av:function(a,b){var u,t,s,r=this,q=r.f,p=$.C().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa1(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.C().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sX(u)}}}
U.cU.prototype={
gA:function(){var u=this.b
return u==null?this.b=D.N():u},
aw:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cU))return!1
return J.D(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.bZ.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.N():u},
U:function(a){var u=this.e
if(u!=null)u.J(a)},
ap:function(){return this.U(null)},
ed:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gbf(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.gA()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bt()
u.b=!0
this.U(u)},
ft:function(a,b){var u,t
for(u=b.gS(b),t=this.gbf();u.u();)u.gC(u).gA().K(0,t)
u=new D.bu()
u.b=!0
this.U(u)},
aw:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.R()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a4(r,r.length),u=null;r.u();){q=r.d
if(q!=null){t=q.aw(0,b,c)
if(t!=null)u=u==null?t:t.p(0,u)}}s.f=u==null?V.bw():u
r=s.e
if(r!=null)r.ak(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bZ))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.D(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.ah]},
$ab_:function(){return[U.ah]},
$iah:1}
U.ah.prototype={}
U.dH.prototype={
gA:function(){var u=this.fx
return u==null?this.fx=D.N():u},
U:function(a){var u=this.fx
if(u!=null)u.J(a)},
ap:function(){return this.U(null)},
bS:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.N():t
u.n(0,s.geG())
u=s.a.c
t=u.d
u=t==null?u.d=D.N():t
u.n(0,s.geI())
u=s.a.c
t=u.c
u=t==null?u.c=D.N():t
u.n(0,s.geK())
u=s.a.d
t=u.f
u=t==null?u.f=D.N():t
u.n(0,s.geB())
u=s.a.d
t=u.d
u=t==null?u.d=D.N():t
u.n(0,s.geD())
u=s.a.e
t=u.b
u=t==null?u.b=D.N():t
u.n(0,s.gfX())
u=s.a.e
t=u.d
u=t==null?u.d=D.N():t
u.n(0,s.gfV())
u=s.a.e
t=u.c
u=t==null?u.c=D.N():t
u.n(0,s.gfT())
return!0},
ao:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.T()
u=-u}if(this.r){if(typeof t!=="number")return t.T()
t=-t}return new V.O(u,t)},
eH:function(a){var u=this
H.r(a,"$ib7")
if(!J.D(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
eJ:function(a){var u,t,s,r,q,p,o,n=this
H.r(a,"$ib7")
if(!n.cx)return
if(n.ch){u=a.d.L(0,a.y)
u=new V.O(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.w(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.L(0,a.y)
u=n.ao(new V.O(t.a,t.b).p(0,2).w(0,u.gau()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.w(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.w(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.ao(new V.O(s.a,s.b).p(0,2).w(0,u.gau()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.sa1(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.L(0,a.z)
n.dx=n.ao(new V.O(t.a,t.b).p(0,2).w(0,u.gau()))}n.ap()},
eL:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.w(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.w(u)
s.sX(-t*10*u)
r.ap()}},
eC:function(a){var u=this
if(H.r(a,"$ida").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eE:function(a){var u,t,s,r,q,p,o,n=this
H.r(a,"$ib7")
if(!J.D(n.d,a.x.b))return
u=a.c
t=a.d
s=t.L(0,a.y)
r=n.ao(new V.O(s.a,s.b).p(0,2).w(0,u.gau()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.sa1(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.L(0,a.z)
n.dx=n.ao(new V.O(t.a,t.b).p(0,2).w(0,u.gau()))
n.ap()},
fY:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fW:function(a){var u,t,s,r,q,p,o,n=this
H.r(a,"$idB")
if(!n.cx)return
if(n.ch){u=a.d.L(0,a.y)
u=new V.O(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.w(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.L(0,a.y)
u=n.ao(new V.O(t.a,t.b).p(0,2).w(0,u.gau()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.w(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.w(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.ao(new V.O(s.a,s.b).p(0,2).w(0,u.gau()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.sa1(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.L(0,a.z)
n.dx=n.ao(new V.O(t.a,t.b).p(0,2).w(0,u.gau()))}n.ap()},
fU:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.w(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.w(u)
s.sX(-t*10*u)
r.ap()}},
aw:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.R()
if(q<p){r.dy=p
u=b.y
r.c.av(0,u)
r.b.av(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aP(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.p(0,V.aP(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iah:1}
U.dI.prototype={
gA:function(){var u=this.r
return u==null?this.r=D.N():u},
U:function(a){var u=this.r
if(u!=null)u.J(a)},
bS:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.N():t
t=r.geM()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.N():s).n(0,t)
return!0},
eN:function(a){var u,t,s,r,q=this
if(!J.D(q.b,q.a.b.c))return
H.r(a,"$ic8")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.p()
r=u+t*s
if(u!==r){q.d=r
u=new D.B("zoom",u,r)
u.b=!0
q.U(u)}},
aw:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ky(u,u,u,1)}return t.f},
$iah:1}
M.d_.prototype={
ax:function(a){var u=this.y
if(u!=null)u.J(a)},
ee:function(){return this.ax(null)},
eY:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gan(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.br()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bt()
u.b=!0
this.ax(u)},
f_:function(a,b){var u,t
for(u=b.gS(b),t=this.gan();u.u();)u.gC(u).gA().K(0,t)
u=new D.bu()
u.b=!0
this.ax(u)},
sb7:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gA().K(0,t.gan())
u=t.d
t.d=a
if(a!=null)a.gA().n(0,t.gan())
s=new D.B("technique",u,t.d)
s.b=!0
t.ax(s)}},
gA:function(){var u=this.y
return u==null?this.y=D.N():u},
aS:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.dI(a1.d)
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
if(typeof s!=="number")return H.w(s)
o=C.d.al(p*s)
p=q.b
if(typeof r!=="number")return H.w(r)
n=C.d.al(p*r)
p=C.d.al(q.c*s)
a2.c=p
q=C.d.al(q.d*r)
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
i=V.aP(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.dH(i)
t=$.lg
if(t==null){t=V.n1()
q=$.lB
if(q==null)q=$.lB=new V.z(0,1,0)
p=$.lz
if(p==null)p=$.lz=new V.z(0,0,-1)
h=p.w(0,Math.sqrt(p.D(p)))
q=q.aC(h)
g=q.w(0,Math.sqrt(q.D(q)))
f=h.aC(g)
e=new V.z(t.a,t.b,t.c)
d=g.T(0).D(e)
c=f.T(0).D(e)
b=h.T(0).D(e)
t=V.aP(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.lg=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.aw(0,a2,u)
if(a0!=null)a=a0.p(0,a)}a2.db.dH(a)
u=a1.d
if(u!=null)u.av(0,a2)
for(u=a1.e.a,u=new J.a4(u,u.length);u.u();)u.d.av(0,a2)
for(u=a1.e.a,u=new J.a4(u,u.length);u.u();)u.d.aS(a2)
a1.b.toString
a2.cy.cc()
a2.db.cc()
a1.c.toString
a2.dG()}}
A.cO.prototype={}
A.eO.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hm:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
hk:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.a_.prototype={
gam:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
q:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.a_))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.fZ.prototype={
e4:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.R("")
t=c3.fr
if(t){u.a=c2
s=c2}else s=""
r=c3.fx
s=(r?u.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s=u.a=s+"attribute vec3 posAttr;\n"
q=c3.k4
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=c3.r1
u.a=(p?u.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
A.of(c3,u)
A.oh(c3,u)
A.og(c3,u)
A.oj(c3,u)
A.ok(c3,u)
A.oi(c3,u)
A.ol(c3,u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=c3.ry
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
u.a=s}if(c3.r2){s+="   txt2D = getTxt2D();\n"
u.a=s}if(c3.rx){s+="   txtCube = getTxtCube();\n"
u.a=s}if(c3.k2){s+="   objPos = getObjPos();\n"
u.a=s}s=(c3.k3?u.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s=u.a=s+"\n"
n=s.charCodeAt(0)==0?s:s
m=A.oe(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cD(n,35633)
b8.f=b8.cD(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.p(P.u("Failed to link shader: "+H.e(l)))}b8.fP()
b8.fR()
b8.Q=b8.x.h(0,"posAttr")
b8.cx=b8.x.h(0,"normAttr")
b8.ch=b8.x.h(0,"binmAttr")
b8.cy=b8.x.h(0,"txt2DAttr")
b8.db=b8.x.h(0,"txtCubeAttr")
b8.dx=b8.x.h(0,"bendAttr")
if(c3.dy)b8.id=H.r(b8.y.W(0,"invViewMat"),"$iac")
if(t)b8.dy=H.r(b8.y.W(0,"objMat"),"$iac")
if(r)b8.fr=H.r(b8.y.W(0,"viewObjMat"),"$iac")
b8.fy=H.r(b8.y.W(0,"projViewObjMat"),"$iac")
if(c3.go)b8.fx=H.r(b8.y.W(0,"viewMat"),"$iac")
if(c3.x1)b8.k1=H.r(b8.y.W(0,"txt2DMat"),"$icm")
if(c3.x2)b8.k2=H.r(b8.y.W(0,"txtCubeMat"),"$iac")
if(c3.y1)b8.k3=H.r(b8.y.W(0,"colorMat"),"$iac")
b8.r1=H.b([],[A.ac])
t=c3.bm
if(t>0){b8.k4=b8.y.W(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.h(0,q)
if(j==null)H.p(P.u(c0+q+c1))
s.push(H.r(j,"$iac"))}}if(c3.a.a)b8.r2=H.r(b8.y.W(0,"emissionClr"),"$iG")
if(c3.b.a)b8.x1=H.r(b8.y.W(0,"ambientClr"),"$iG")
if(c3.c.a)b8.y2=H.r(b8.y.W(0,"diffuseClr"),"$iG")
if(c3.d.a)b8.bn=H.r(b8.y.W(0,"invDiffuseClr"),"$iG")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.d6=H.r(b8.y.W(0,"shininess"),"$iV")
if(t)b8.d5=H.r(b8.y.W(0,"specularClr"),"$iG")}if(c3.db){b8.d7=H.r(b8.y.W(0,"envSampler"),"$ibD")
if(c3.r.a)b8.d8=H.r(b8.y.W(0,"reflectClr"),"$iG")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.d9=H.r(b8.y.W(0,"refraction"),"$iV")
if(t)b8.da=H.r(b8.y.W(0,"refractClr"),"$iG")}}if(c3.y.a)b8.dc=H.r(b8.y.W(0,"alpha"),"$iV")
if(c3.k1){t=c3.z
s=t.length
if(s!==0){r=P.v
b8.c_=new H.I([r,A.bd])
b8.c0=new H.I([r,[P.o,A.ck]])
for(r=[A.ck],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
g=h.a
f="barLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].startPnt"
j=p.h(0,o)
if(j==null)H.p(P.u(c0+o+c1))
H.r(j,"$iG")
p=b8.y
o=f+"s["+k+"].endPnt"
d=p.h(0,o)
if(d==null)H.p(P.u(c0+o+c1))
H.r(d,"$iG")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.p(P.u(c0+o+c1))
H.r(c,"$iG")
if(typeof g!=="number")return g.a7()
if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.p(P.u(c0+o+c1))
H.r(b,"$iV")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.p(P.u(c0+o+c1))
H.r(a,"$iV")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.p(P.u(c0+o+c1))
H.r(a0,"$iV")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.ck(j,d,c,a3,a2,a1))}b8.c0.m(0,g,e)
q=b8.c_
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.u(c0+o+c1))
q.m(0,g,j)}}t=c3.Q
s=t.length
if(s!==0){r=P.v
b8.c1=new H.I([r,A.bd])
b8.c2=new H.I([r,[P.o,A.cl]])
for(r=[A.cl],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.a7()
p=(g&1)!==0
if(p){o=b8.y
a4=f+"s["+k+"].objUp"
j=o.h(0,a4)
if(j==null)H.p(P.u(c0+a4+c1))
H.r(j,"$iG")
o=b8.y
a4=f+"s["+k+"].objRight"
d=o.h(0,a4)
if(d==null)H.p(P.u(c0+a4+c1))
H.r(d,"$iG")
o=b8.y
a4=f+"s["+k+"].objDir"
c=o.h(0,a4)
if(c==null)H.p(P.u(c0+a4+c1))
H.r(c,"$iG")
a5=c
a6=d
a7=j}else{a5=b9
a6=a5
a7=a6}o=b8.y
a4=f+"s["+k+"].viewDir"
j=o.h(0,a4)
if(j==null)H.p(P.u(c0+a4+c1))
H.r(j,"$iG")
o=b8.y
a4=f+"s["+k+"].color"
d=o.h(0,a4)
if(d==null)H.p(P.u(c0+a4+c1))
H.r(d,"$iG")
if(p){p=b8.y
o=f+"sTexture2D"+k
c=p.h(0,o)
if(c==null)H.p(P.u(c0+o+c1))
H.r(c,"$ibC")
a8=c}else a8=b9
e.push(new A.cl(a7,a6,a5,j,d,a8))}b8.c2.m(0,g,e)
q=b8.c1
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.u(c0+o+c1))
q.m(0,g,j)}}t=c3.ch
s=t.length
if(s!==0){r=P.v
b8.c3=new H.I([r,A.bd])
b8.c4=new H.I([r,[P.o,A.cn]])
for(r=[A.cn],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.h(0,o)
if(j==null)H.p(P.u(c0+o+c1))
H.r(j,"$iG")
p=b8.y
o=f+"s["+k+"].viewPnt"
d=p.h(0,o)
if(d==null)H.p(P.u(c0+o+c1))
H.r(d,"$iG")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.p(P.u(c0+o+c1))
H.r(c,"$iG")
if(typeof g!=="number")return g.a7()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
b=p.h(0,o)
if(b==null)H.p(P.u(c0+o+c1))
H.r(b,"$icm")
a9=b}else a9=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
b=p.h(0,o)
if(b==null)H.p(P.u(c0+o+c1))
H.r(b,"$ibD")
a8=b}else a8=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
b=p.h(0,o)
if(b==null)H.p(P.u(c0+o+c1))
H.r(b,"$ibD")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a=p.h(0,o)
if(a==null)H.p(P.u(c0+o+c1))
H.r(a,"$icj")
b0=b
b1=a}else{b0=b9
b1=b0}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.p(P.u(c0+o+c1))
H.r(b,"$iV")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.p(P.u(c0+o+c1))
H.r(a,"$iV")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.p(P.u(c0+o+c1))
H.r(a0,"$iV")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.cn(j,d,a9,c,a8,b0,b1,a3,a2,a1))}b8.c4.m(0,g,e)
q=b8.c3
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.u(c0+o+c1))
q.m(0,g,j)}}t=c3.cx
s=t.length
if(s!==0){r=P.v
b8.c5=new H.I([r,A.bd])
b8.c6=new H.I([r,[P.o,A.co]])
for(r=[A.co],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.h(0,o)
if(j==null)H.p(P.u(c0+o+c1))
H.r(j,"$iG")
p=b8.y
o=f+"s["+k+"].objDir"
d=p.h(0,o)
if(d==null)H.p(P.u(c0+o+c1))
H.r(d,"$iG")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.h(0,o)
if(c==null)H.p(P.u(c0+o+c1))
H.r(c,"$iG")
p=b8.y
o=f+"s["+k+"].color"
b=p.h(0,o)
if(b==null)H.p(P.u(c0+o+c1))
H.r(b,"$iG")
if(typeof g!=="number")return g.a7()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a=p.h(0,o)
if(a==null)H.p(P.u(c0+o+c1))
H.r(a,"$iG")
p=b8.y
o=f+"s["+k+"].objRight"
a0=p.h(0,o)
if(a0==null)H.p(P.u(c0+o+c1))
H.r(a0,"$iG")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.h(0,o)
if(b2==null)H.p(P.u(c0+o+c1))
H.r(b2,"$iV")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.h(0,o)
if(b3==null)H.p(P.u(c0+o+c1))
H.r(b3,"$iV")
b4=b3
b5=b2
a6=a0
a7=a}else{b4=b9
b5=b4
a6=b5
a7=a6}p=(g&2)!==0
if(p){o=b8.y
a4=f+"s["+k+"].shadowAdj"
a=o.h(0,a4)
if(a==null)H.p(P.u(c0+a4+c1))
H.r(a,"$icj")
b1=a}else b1=b9
if((g&8)!==0){o=b8.y
a4=f+"s["+k+"].cutoff"
a=o.h(0,a4)
if(a==null)H.p(P.u(c0+a4+c1))
H.r(a,"$iV")
o=b8.y
a4=f+"s["+k+"].coneAngle"
a0=o.h(0,a4)
if(a0==null)H.p(P.u(c0+a4+c1))
H.r(a0,"$iV")
b6=a0
b7=a}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
a4=f+"s["+k+"].att0"
a=o.h(0,a4)
if(a==null)H.p(P.u(c0+a4+c1))
H.r(a,"$iV")
o=b8.y
a4=f+"s["+k+"].att1"
a0=o.h(0,a4)
if(a0==null)H.p(P.u(c0+a4+c1))
H.r(a0,"$iV")
o=b8.y
a4=f+"s["+k+"].att2"
b2=o.h(0,a4)
if(b2==null)H.p(P.u(c0+a4+c1))
H.r(b2,"$iV")
a1=b2
a2=a0
a3=a}else{a1=b9
a2=a1
a3=a2}if((g&1)!==0){o=b8.y
a4=f+"sTexture2D"+k
a=o.h(0,a4)
if(a==null)H.p(P.u(c0+a4+c1))
H.r(a,"$ibC")
a8=a}else a8=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a=p.h(0,o)
if(a==null)H.p(P.u(c0+o+c1))
H.r(a,"$ibC")
b0=a}else b0=b9
e.push(new A.co(j,d,c,b,a7,a6,b5,b4,b1,b7,b6,a3,a2,a1,a8,b0))}b8.c6.m(0,g,e)
q=b8.c5
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.u(c0+o+c1))
q.m(0,g,j)}}}},
fN:function(a,b){}}
A.cP.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.cX.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.dl.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.dr.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.h1.prototype={
i:function(a){return this.b1}}
A.ck.prototype={}
A.cl.prototype={}
A.cn.prototype={}
A.co.prototype={}
A.dp.prototype={
e7:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cD:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.u("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fP:function(){var u,t,s,r=this,q=H.b([],[A.cO]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.w(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cO(p,t.name,s))}r.x=new A.eO(q)},
fR:function(){var u,t,s,r=this,q=H.b([],[A.dD]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.w(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hh(t.type,t.size,t.name,s))}r.y=new A.iu(q)},
aL:function(a,b,c){var u=this.a
if(a===1)return new A.bd(u,b,c)
else return A.kC(u,this.r,b,a,c)},
ew:function(a,b,c){var u=this.a
if(a===1)return new A.bC(u,b,c)
else return A.kC(u,this.r,b,a,c)},
ex:function(a,b,c){var u=this.a
if(a===1)return new A.bD(u,b,c)
else return A.kC(u,this.r,b,a,c)},
bg:function(a,b){return new P.dT(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hh:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aL(b,c,d)
case 5121:return u.aL(b,c,d)
case 5122:return u.aL(b,c,d)
case 5123:return u.aL(b,c,d)
case 5124:return u.aL(b,c,d)
case 5125:return u.aL(b,c,d)
case 5126:return new A.V(u.a,c,d)
case 35664:return new A.iq(u.a,c,d)
case 35665:return new A.G(u.a,c,d)
case 35666:return new A.cj(u.a,c,d)
case 35667:return new A.ir(u.a,c,d)
case 35668:return new A.is(u.a,c,d)
case 35669:return new A.it(u.a,c,d)
case 35674:return new A.iv(u.a,c,d)
case 35675:return new A.cm(u.a,c,d)
case 35676:return new A.ac(u.a,c,d)
case 35678:return u.ew(b,c,d)
case 35680:return u.ex(b,c,d)
case 35670:throw H.c(u.bg("BOOL",c))
case 35671:throw H.c(u.bg("BOOL_VEC2",c))
case 35672:throw H.c(u.bg("BOOL_VEC3",c))
case 35673:throw H.c(u.bg("BOOL_VEC4",c))
default:throw H.c(P.u("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.dD.prototype={}
A.iu.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
W:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.O()},
O:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.l)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.bd.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.ir.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.is.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.it.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.ip.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.V.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.iq.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.G.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.cj.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iv.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.cm.prototype={
ag:function(a){var u=new Float32Array(H.bJ(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.ac.prototype={
ag:function(a){var u=new Float32Array(H.bJ(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bC.prototype={
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bD.prototype={
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jH.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.ca(s.b,b).ca(s.d.ca(s.c,b),c)
a.sa1(0,new V.U(r.a,r.b,r.c))
a.sdM(r.w(0,Math.sqrt(r.D(r))))
s=1-b
u=1-c
a.sd_(new V.bb(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.jR.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.jT.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.w(p)
s=-s*p
u=r*p
a.sa1(0,new V.U(s,u,q))
u=new V.z(s,u,q)
a.sdM(u.w(0,Math.sqrt(u.D(u))))
a.sd_(new V.bb(1-c,2+c,-1,-1))}}
F.jU.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.jV.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.kc.prototype={
$2:function(a,b){return 0}}
F.kd.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.w(s)
u=a.f
t=new V.z(u.a,u.b,u.c)
s=t.w(0,Math.sqrt(t.D(t))).p(0,this.b+s)
a.sa1(0,new V.U(s.a,s.b,s.c))}}
F.kf.prototype={
$1:function(a){return new V.U(Math.cos(a),Math.sin(a),0)}}
F.k2.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.U(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.jS.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.kZ(n.$1(o),m)
m=J.kZ(n.$1(o+3.141592653589793/p.c),m).L(0,l)
m=new V.z(m.a,m.b,m.c)
u=m.w(0,Math.sqrt(m.D(m)))
n=$.lA
if(n==null){n=new V.z(1,0,0)
$.lA=n
t=n}else t=n
if(!J.D(u,t)){n=$.lC
if(n==null){n=new V.z(0,0,1)
$.lC=n
t=n}else t=n}n=u.aC(t)
s=n.w(0,Math.sqrt(n.D(n)))
n=s.aC(u)
t=n.w(0,Math.sqrt(n.D(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.p(0,n*m)
m=s.p(0,q*m)
a.sa1(0,l.B(0,new V.U(n.a-m.a,n.b-m.b,n.c-m.c)))}}
F.b1.prototype={
b_:function(){var u=this
if(!u.gb0()){C.b.K(u.a.a.d.b,u)
u.a.a.Y()}u.bL()
u.bM()
u.fG()},
bP:function(a){this.a=a
a.d.b.push(this)},
bQ:function(a){this.b=a
a.d.c.push(this)},
fO:function(a){this.c=a
a.d.d.push(this)},
bL:function(){var u=this.a
if(u!=null){C.b.K(u.d.b,this)
this.a=null}},
bM:function(){var u=this.b
if(u!=null){C.b.K(u.d.c,this)
this.b=null}},
fG:function(){var u=this.c
if(u!=null){C.b.K(u.d.d,this)
this.c=null}},
gb0:function(){return this.a==null||this.b==null||this.c==null},
ep:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cp()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dn())return
return s.w(0,Math.sqrt(s.D(s)))},
er:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.L(0,q)
r=new V.z(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.D(r)))
r=t.L(0,q)
r=new V.z(r.a,r.b,r.c)
r=s.aC(r.w(0,Math.sqrt(r.D(r))))
return r.w(0,Math.sqrt(r.D(r)))},
bV:function(){var u,t=this
if(t.d!=null)return!0
u=t.ep()
if(u==null){u=t.er()
if(u==null)return!1}t.d=u
t.a.a.Y()
return!0},
eo:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cp()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dn())return
return s.w(0,Math.sqrt(s.D(s)))},
eq:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.C().a){l=d.L(0,g)
l=new V.z(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.D(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.L(0,g).p(0,p).B(0,g).L(0,j)
l=new V.z(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.D(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.D(l)))
l=o.aC(q)
l=l.w(0,Math.sqrt(l.D(l))).aC(o)
q=l.w(0,Math.sqrt(l.D(l)))}return q},
bT:function(){var u,t=this
if(t.e!=null)return!0
u=t.eo()
if(u==null){u=t.eq()
if(u==null)return!1}t.e=u
t.a.a.Y()
return!0},
ghc:function(a){var u=this
if(J.D(u.a,u.b))return!0
if(J.D(u.b,u.c))return!0
if(J.D(u.c,u.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u,t,s=this
if(s.gb0())return a+"disposed"
u=a+C.a.ae(J.a3(s.a.e),0)+", "+C.a.ae(J.a3(s.b.e),0)+", "+C.a.ae(J.a3(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
O:function(){return this.G("")}}
F.fn.prototype={}
F.hW.prototype={
b3:function(a,b,c){var u,t=b.a
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
if(t==u.e){t=b.c
t.a.a.v()
t=t.e
u=c.c
u.a.a.v()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.c
u.a.a.v()
if(t==u.e){t=b.c
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.v()
t=t.e
u=c.c
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
if(t==u.e){t=b.c
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.c2.prototype={
b_:function(){var u=this
if(!u.gb0()){C.b.K(u.a.a.c.b,u)
u.a.a.Y()}u.bL()
u.bM()},
bP:function(a){this.a=a
a.c.b.push(this)},
bQ:function(a){this.b=a
a.c.c.push(this)},
bL:function(){var u=this.a
if(u!=null){C.b.K(u.c.b,this)
this.a=null}},
bM:function(){var u=this.b
if(u!=null){C.b.K(u.c.c,this)
this.b=null}},
gb0:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){if(this.gb0())return a+"disposed"
return a+C.a.ae(J.a3(this.a.e),0)+", "+C.a.ae(J.a3(this.b.e),0)},
O:function(){return this.G("")}}
F.fM.prototype={}
F.io.prototype={
b3:function(a,b,c){var u,t=b.a
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
return t==u.e}else{t=b.a
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
return t==u.e}else return!1}}}
F.cc.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.ae(J.a3(u.e),0)},
O:function(){return this.G("")}}
F.hO.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.N():u},
b4:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.v()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){r=g[s]
h.a.n(0,r.he())}h.a.v()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.cc()
if(n.a==null)H.p(P.u("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.J(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.v()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.mS(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.v()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
i=p[o]
o=h.d.a
o.a.n(0,l)
o.a.n(0,k)
o.a.n(0,i)
F.bX(l,k,i)}g=h.e
if(g!=null)g.ak(0)},
ar:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ar()||!1
if(!t.a.ar())u=!1
s=t.e
if(s!=null)s.ak(0)
return u},
hC:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.aI(o,0)])
for(o=[F.be];u.length!==0;){t=C.b.ghr(u)
C.b.cf(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.b3(0,t,q)){s.push(q)
C.b.cf(u,r)}}if(s.length>1)b.b4(s)}}p.a.v()
p.c.cg()
p.d.cg()
p.b.hW()
p.c.ci(new F.io())
p.d.ci(new F.hW())
o=p.e
if(o!=null)o.ak(0)},
bR:function(){this.hC(new F.iP(),new F.hr())},
c8:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.c8()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.d(o,u)
t=o[u]
o=t.r
if(o!=null)t.sdt(new V.z(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.z(s,r,o).w(0,Math.sqrt(s*s+r*r+o*o))
if(!J.D(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.J(null)}}}}o=p.e
if(o!=null)o.ak(0)},
ha:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aY()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aX().a)!==0)++s
if((t&$.aW().a)!==0)++s
if((t&$.bj().a)!==0)++s
if((t&$.bk().a)!==0)++s
if((t&$.cK().a)!==0)++s
if((t&$.cL().a)!==0)++s
if((t&$.bQ().a)!==0)++s
if((t&$.aV().a)!==0)++s
r=a4.gcm(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.J])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cQ])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.h4(m)
k=l.gcm(l)
if(m>=t)return H.d(o,m)
o[m]=new Z.cQ(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.d(i,j)
h=i[j].hB(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.d(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bJ(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cR(new Z.dK(a1,d),o,a4)
c.b=H.b([],[Z.bs])
if(a0.b.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.v()
b.push(t.e)}a=Z.kF(u,34963,b)
c.b.push(new Z.bs(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.v()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.v()
b.push(t.e)}a=Z.kF(u,34963,b)
c.b.push(new Z.bs(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.v()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.v()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].c
t.a.a.v()
b.push(t.e)}a=Z.kF(u,34963,b)
c.b.push(new Z.bs(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.h])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.G(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.G(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.G(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.G(t))}return C.b.j(s,"\n")},
Y:function(){var u=this.e
if(u!=null)u.J(null)}}
F.hP.prototype={
h0:function(a){var u,t,s,r,q,p=H.b([],[F.b1]),o=a.length
if(o>0){u=a[0]
for(t=this.a,s=2;s<o;++s){r=s-1
q=a.length
if(r>=q)return H.d(a,r)
r=a[r]
if(s>=q)return H.d(a,s)
q=a[s]
t.a.n(0,u)
t.a.n(0,r)
t.a.n(0,q)
p.push(F.bX(u,r,q))}}return p},
h1:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.b1])
for(u=this.a,t=b,s=0,r=!1,q=1;q<a;++q,++s,++t){for(p=r,o=1;o<b;++o,t=k){n=c.length
if(s<0||s>=n)return H.d(c,s)
m=c[s];++s
if(s>=n)return H.d(c,s)
l=c[s]
k=t+1
if(k<0||k>=n)return H.d(c,k)
j=c[k]
if(t<0||t>=n)return H.d(c,t)
i=c[t]
n=u.a
if(p){n.n(0,m)
u.a.n(0,l)
u.a.n(0,j)
h.push(F.bX(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bX(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bX(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.bX(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
ci:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.b3(0,p,n)){p.b_()
break}}}}},
cg:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.ghc(s)
if(t)s.b_()}},
ar:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.l)(u),++r)if(!u[r].bV())s=!1
return s},
bU:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.l)(u),++r)if(!u[r].bT())s=!1
return s},
c8:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.z(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.z(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.J(null)}},
i:function(a){return this.O()},
G:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].G(a))
return C.b.j(r,"\n")},
O:function(){return this.G("")}}
F.hQ.prototype={
gl:function(a){return this.b.length},
ci:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.b3(0,p,n)){p.b_()
break}}}}},
cg:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.D(s.a,s.b)
if(t)s.b_()}},
i:function(a){return this.O()},
G:function(a){var u,t,s=H.b([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
s.push(t[u].G(a+(""+u+". ")))}return C.b.j(s,"\n")},
O:function(){return this.G("")}}
F.hR.prototype={
gl:function(a){return this.b.length},
hW:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.K(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.J(null)}s=t.a
if(s!=null){C.b.K(s.b.b,t)
t.a=null}}}},
i:function(a){return this.O()},
G:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].G(a))
return C.b.j(r,"\n")},
O:function(){return this.G("")}}
F.be.prototype={
bZ:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.dJ(u.cx,r,o,t,s,q,p,a,n)},
he:function(){return this.bZ(null)},
sa1:function(a,b){var u
if(!J.D(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Y()}},
sdt:function(a){var u
a=a==null?null:a.w(0,Math.sqrt(a.D(a)))
if(!J.D(this.r,a)){this.r=a
u=this.a
if(u!=null)u.Y()}},
sdM:function(a){var u
if(!J.D(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Y()}},
sd_:function(a){var u
if(!J.D(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.Y()}},
hB:function(a){var u,t,s=this
if(a.q(0,$.aY())){u=s.f
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.aX())){u=s.r
t=[P.J]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.aW())){u=s.x
t=[P.J]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.bj())){u=s.y
t=[P.J]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.q(0,$.bk())){u=s.z
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.cK())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.cL())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.bQ()))return H.b([s.ch],[P.J])
else if(a.q(0,$.aV())){u=s.cx
t=[P.J]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.J])},
bV:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cp()
t.d.F(0,new F.iU(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.ak(0)}return!0},
bT:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cp()
t.d.F(0,new F.iT(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.ak(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u,t,s=this,r="-",q=H.b([],[P.h])
q.push(C.a.ae(J.a3(s.e),0))
u=s.f
if(u!=null)q.push(u.i(0))
else q.push(r)
u=s.r
if(u!=null)q.push(u.i(0))
else q.push(r)
u=s.x
if(u!=null)q.push(u.i(0))
else q.push(r)
u=s.y
if(u!=null)q.push(u.i(0))
else q.push(r)
u=s.z
if(u!=null)q.push(u.i(0))
else q.push(r)
u=s.Q
if(u!=null)q.push(u.i(0))
else q.push(r)
q.push(V.F(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.i(0))
else q.push(r)
t=C.b.j(q,", ")
return a+"{"+t+"}"},
O:function(){return this.G("")}}
F.iU.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.iT.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.iK.prototype={
v:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.u("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.Y()
return!0},
h2:function(a,b,c,d,e,f){var u=F.dJ(a,null,b,c,d,e,f,null,0)
this.n(0,u)
return u},
gl:function(a){return this.c.length},
ar:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)u[s].bV()
return!0},
bU:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)u[s].bT()
return!0},
hb:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.D(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.J(null)}}}}return!0},
i:function(a){return this.O()},
G:function(a){var u,t,s,r
this.v()
u=H.b([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r)u.push(t[r].G(a))
return C.b.j(u,"\n")},
O:function(){return this.G("")}}
F.iL.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.d(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.d(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.d(t,b)
return t[b]},
F:function(a,b){var u=this
C.b.F(u.b,b)
C.b.F(u.c,new F.iM(u,b))
C.b.F(u.d,new F.iN(u,b))},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].G(""))
return C.b.j(r,"\n")}}
F.iM.prototype={
$1:function(a){if(!J.D(a.a,this.a))this.b.$1(a)}}
F.iN.prototype={
$1:function(a){var u=this.a
if(!J.D(a.a,u)&&!J.D(a.b,u))this.b.$1(a)}}
F.iO.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.d(t,u)
return t[u]}else{if(b<0)return H.d(t,b)
return t[b]}},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].G(""))
return C.b.j(r,"\n")}}
F.iQ.prototype={}
F.iP.prototype={
b3:function(a,b,c){return J.D(b.f,c.f)}}
F.iR.prototype={}
F.hr.prototype={
b4:function(a){var u,t,s,r=V.cp()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)r=new V.z(r.a+s.a,r.b+s.b,r.c+s.c)}r=r.w(0,Math.sqrt(r.D(r)))
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t)a[t].sdt(r)
return}}
F.iS.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].G(""))
return C.b.j(r,"\n")}}
O.db.prototype={
gA:function(){var u=this.fr
return u==null?this.fr=D.N():u},
aa:function(a){var u=this.fr
if(u!=null)u.J(a)},
eh:function(){return this.aa(null)},
cL:function(a){this.a=null
this.aa(a)},
fK:function(){return this.cL(null)},
eS:function(a,b){var u=new D.bt()
u.b=!0
this.aa(u)},
eU:function(a,b){var u=new D.bu()
u.b=!0
this.aa(u)},
cB:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.v
f=[f,f]
u=new H.I(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=u.h(0,4)
u.m(0,4,q==null?1:q)}p=H.b([],[A.cP])
u.F(0,new O.h5(g,p))
C.b.aV(p,new O.h6())
o=new H.I(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){n=t[r]
q=n.gas()
m=o.h(0,n.gas())
o.m(0,q,m==null?1:m)}l=H.b([],[A.cX])
o.F(0,new O.h7(g,l))
C.b.aV(l,new O.h8())
k=new H.I(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){n=t[r]
q=n.gas()
m=k.h(0,n.gas())
k.m(0,q,m==null?1:m)}j=H.b([],[A.dl])
k.F(0,new O.h9(g,j))
C.b.aV(j,new O.ha())
i=new H.I(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.l)(f),++r){n=f[r]
s=n.gas()
q=i.h(0,n.gas())
i.m(0,s,q==null?1:q)}h=H.b([],[A.dr])
i.F(0,new O.hb(g,h))
C.b.aV(h,new O.hc())
f=C.c.a3(g.e.a.length+3,4)
g.dy.e
return A.n_(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,p,l,j,h)},
en:function(a,b){},
av:function(a,b){var u,t,s
for(u=this.dx.a,u=new J.a4(u,u.length);u.u();){t=u.d
t.toString
s=$.c6
t.a=s==null?$.c6=new V.am(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s
s=t.c
if(s!=null)t.a=s.aw(0,b,t)
s=$.c6
t.b=s==null?$.c6=new V.am(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s
s=t.d
if(s!=null)t.b=s.aw(0,b,t)}},
hY:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cB()
u=b4.fr.h(0,b3.b1)
if(u==null){u=A.mZ(b3,b4.a)
t=u.b
if(t.length===0)H.p(P.u("May not cache a shader with no name."))
if(b4.fr.bX(0,t))H.p(P.u('Shader cache already contains a shader by the name "'+t+'".'))
b4.fr.m(0,t,u)}b3=b2.a=u
b5.e=null}s=b3.z
r=s.bn
b3=b5.e
if(!(b3 instanceof Z.cR))b3=b5.e=null
if(b3==null||!b3.d.q(0,r)){b3=s.k4
if(b3)b5.d.ar()
q=s.r1
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.d.bU()
p.a.bU()
p=p.e
if(p!=null)p.ak(0)}p=s.rx
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.a.hb()
o=o.e
if(o!=null)o.ak(0)}m=b5.d.ha(new Z.iW(b4.a),r)
m.aR($.aY()).e=b2.a.Q.c
if(b3)m.aR($.aX()).e=b2.a.cx.c
if(q)m.aR($.aW()).e=b2.a.ch.c
if(s.r2)m.aR($.bj()).e=b2.a.cy.c
if(p)m.aR($.bk()).e=b2.a.db.c
if(s.ry)m.aR($.aV()).e=b2.a.dx.c
b5.e=m}l=H.b([],[T.ib])
b3=b2.a
q=b4.a
q.useProgram(b3.r)
b3.x.hm()
if(s.fr){b3=b2.a
p=b4.dx
p=p.ga_(p)
b3=b3.dy
b3.toString
b3.ag(p.a8(0,!0))}if(s.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.ga_(p)
o=b4.dx
o=b4.cx=p.p(0,o.ga_(o))
p=o}b3=b3.fr
b3.toString
b3.ag(p.a8(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.ghU()
o=b4.dx
o=b4.ch=p.p(0,o.ga_(o))
p=o}b3=b3.fy
b3.toString
b3.ag(p.a8(0,!0))
if(s.go){b3=b2.a
p=b4.db
p=p.ga_(p)
b3=b3.fx
b3.toString
b3.ag(p.a8(0,!0))}if(s.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.ag(C.i.a8(p,!0))}if(s.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.ag(C.i.a8(p,!0))}if(s.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.ag(C.i.a8(p,!0))}if(s.bm>0){k=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,k)
for(j=0;j<k;++j){b3=b2.a
p=b2.e.a
if(j>=p.length)return H.d(p,j)
p=p[j]
b3=b3.r1
if(j>=b3.length)return H.d(b3,j)
b3=b3[j]
i=new Float32Array(H.bJ(p.a8(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,i)}}if(s.a.a){b3=b2.a
p=b2.f.f
b3=b3.r2
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}if(s.k1){if(s.b.a){b3=b2.a
p=b2.r.f
b3=b3.x1
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}if(s.c.a){b3=b2.a
p=b2.x.f
b3=b3.y2
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}if(s.d.a){b3=b2.a
p=b2.y.f
b3=b3.bn
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.e.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.z.ch
p=p.d6
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.z.f
b3=b3.d5
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.z
if(b3.length>0){p=P.v
h=new H.I([p,p])
for(p=b2.dx.e,o=p.length,g=0;g<p.length;p.length===o||(0,H.l)(p),++g){f=p[g]
e=h.h(0,4)
if(e==null)e=0
h.m(0,4,e+1)
d=J.bR(b2.a.c0.h(0,4),e)
n=f.a
c=$.az
n=n.b9(c==null?$.az=new V.U(0,0,0):c)
c=d.b
c.a.uniform3f(c.d,n.a,n.b,n.c)
n=f.b
c=$.az
n=n.b9(c==null?$.az=new V.U(0,0,0):c)
c=d.c
c.a.uniform3f(c.d,n.a,n.b,n.c)
n=f.e
c=d.d
c.a.uniform3f(c.d,n.a,n.b,n.c)
n=f.r
c=d.e
c.a.uniform1f(c.d,n)
n=f.x
c=d.f
c.a.uniform1f(c.d,n)
n=f.y
c=d.r
c.a.uniform1f(c.d,n)}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.l)(b3),++g){o=b3[g].a
k=h.h(0,o)
if(k==null)k=0
o=b2.a.c_.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.Q
if(b3.length>0){p=b4.db
b=p.ga_(p)
p=P.v
a=new H.I([p,p])
for(p=b2.dx.f,o=p.length,g=0;g<p.length;p.length===o||(0,H.l)(p),++g){f=p[g]
a0=f.gas()
e=a.h(0,a0)
if(e==null)e=0
a.m(0,a0,e+1)
d=J.bR(b2.a.c2.h(0,a0),e)
n=f.gd4(f)
c=C.d.p(b.a,n.gbj(n))+C.d.p(b.b,n.gbk(n))+C.d.p(b.c,n.gbl())
a1=C.d.p(b.e,n.gbj(n))+C.d.p(b.f,n.gbk(n))+C.d.p(b.r,n.gbl())
n=C.d.p(b.y,n.gbj(n))+C.d.p(b.z,n.gbk(n))+C.d.p(b.Q,n.gbl())
n=new V.z(c,a1,n).w(0,Math.sqrt(c*c+a1*a1+n*n))
a1=d.e
c=n.a
a2=n.b
n=n.c
a1.a.uniform3f(a1.d,c,a2,n)
n=f.gaB(f)
a2=d.f
a2.a.uniform3f(a2.d,n.a,n.b,n.c)
f.gaf()
n=f.gd4(f)
c=d.d
c.a.uniform3f(c.d,n.a,n.b,n.c)
n=f.gi7()
c=d.b
c.a.uniform3f(c.d,n.a,n.b,n.c)
n=f.gbt(f)
c=d.c
c.a.uniform3f(c.d,n.a,n.b,n.c)
n=f.gaf()
if(!C.b.N(l,n)){n.sah(0,l.length)
l.push(n)}n=f.gaf()
c=n.gai(n)
if(c){c=d.r
c.toString
a1=n.gai(n)
if(!a1)c.a.uniform1i(c.d,0)
else{n=n.gah(n)
c.a.uniform1i(c.d,n)}}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.l)(b3),++g){o=b3[g].a
k=a.h(0,o)
if(k==null)k=0
o=b2.a.c1.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.ch
if(b3.length>0){p=b4.db
b=p.ga_(p)
p=P.v
a3=new H.I([p,p])
for(p=b2.dx.r,o=p.length,g=0;g<p.length;p.length===o||(0,H.l)(p),++g){f=p[g]
a0=f.gas()
e=a3.h(0,a0)
if(e==null)e=0
a3.m(0,a0,e+1)
d=J.bR(b2.a.c4.h(0,a0),e)
a4=b.p(0,f.ga_(f))
n=f.ga_(f)
c=$.az
n=n.b9(c==null?$.az=new V.U(0,0,0):c)
c=d.b
c.a.uniform3f(c.d,n.a,n.b,n.c)
n=$.az
n=a4.b9(n==null?$.az=new V.U(0,0,0):n)
c=d.c
c.a.uniform3f(c.d,n.a,n.b,n.c)
n=f.gaB(f)
c=d.e
c.a.uniform3f(c.d,n.a,n.b,n.c)
f.gaf()
n=a4.dm(0)
c=n.a
a1=n.b
a2=n.c
a5=n.e
a6=n.f
a7=n.r
a8=n.y
a9=n.z
n=n.Q
b0=d.d
b0.toString
i=new Float32Array(H.bJ(new V.dd(c,a1,a2,a5,a6,a7,a8,a9,n).a8(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,i)
f.gaf()
n=f.gaf()
if(!C.b.N(l,n)){n.sah(0,l.length)
l.push(n)}n=f.gaf()
c=n.gai(n)
if(c){c=d.f
c.toString
a1=n.gai(n)
if(!a1)c.a.uniform1i(c.d,0)
else{n=n.gah(n)
c.a.uniform1i(c.d,n)}}f.gaU()
n=f.gdW()
c=d.x
c.toString
a1=n.gbj(n)
a2=n.gbk(n)
a5=n.gbl()
n=n.ghl()
c.a.uniform4f(c.d,a1,a2,a5,n)
n=f.gaU()
if(!C.b.N(l,n)){n.sah(0,l.length)
l.push(n)}n=f.gaU()
c=n.gai(n)
if(c){c=d.r
c.toString
a1=n.gai(n)
if(!a1)c.a.uniform1i(c.d,0)
else{n=n.gah(n)
c.a.uniform1i(c.d,n)}}if(f.ghn()){n=f.gh5()
c=d.y
c.a.uniform1f(c.d,n)
n=f.gh6()
c=d.z
c.a.uniform1f(c.d,n)
n=f.gh7()
c=d.Q
c.a.uniform1f(c.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.l)(b3),++g){o=b3[g].a
k=a3.h(0,o)
if(k==null)k=0
o=b2.a.c3.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.cx
if(b3.length>0){p=b4.db
b=p.ga_(p)
p=P.v
b1=new H.I([p,p])
for(p=b2.dx.x,o=p.length,g=0;g<p.length;p.length===o||(0,H.l)(p),++g){f=p[g]
a0=f.gas()
e=b1.h(0,a0)
if(e==null)e=0
b1.m(0,a0,e+1)
d=J.bR(b2.a.c6.h(0,a0),e)
n=f.ghT(f)
c=d.b
c.a.uniform3f(c.d,n.a,n.b,n.c)
n=f.gd4(f).iy()
c=d.c
c.a.uniform3f(c.d,n.a,n.b,n.c)
n=b.b9(f.ghT(f))
c=d.d
c.a.uniform3f(c.d,n.a,n.b,n.c)
n=f.gaB(f)
c=d.e
c.a.uniform3f(c.d,n.a,n.b,n.c)
f.gaf()
n=f.gi7()
c=d.f
c.a.uniform3f(c.d,n.a,n.b,n.c)
n=f.gbt(f)
c=d.r
c.a.uniform3f(c.d,n.a,n.b,n.c)
n=f.giz()
c=d.x
c.a.uniform1f(c.d,n)
n=f.giA()
c=d.y
c.a.uniform1f(c.d,n)
f.gaf()
n=f.gaf()
if(!C.b.N(l,n)){n.sah(0,l.length)
l.push(n)}n=f.gaf()
c=n.gai(n)
if(c){c=d.dx
c.toString
a1=n.gai(n)
if(!a1)c.a.uniform1i(c.d,0)
else{n=n.gah(n)
c.a.uniform1i(c.d,n)}}f.gaU()
n=f.gdW()
c=d.z
c.toString
a1=n.gbj(n)
a2=n.gbk(n)
a5=n.gbl()
n=n.ghl()
c.a.uniform4f(c.d,a1,a2,a5,n)
n=f.gaU()
if(!C.b.N(l,n)){n.sah(0,l.length)
l.push(n)}n=f.gaU()
c=n.gai(n)
if(c){c=d.dy
c.toString
a1=n.gai(n)
if(!a1)c.a.uniform1i(c.d,0)
else{n=n.gah(n)
c.a.uniform1i(c.d,n)}}if(f.gig()){n=f.gie()
c=d.Q
c.a.uniform1f(c.d,n)
n=f.gic()
c=d.ch
c.a.uniform1f(c.d,n)}if(f.ghn()){n=f.gh5()
c=d.cx
c.a.uniform1f(c.d,n)
n=f.gh6()
c=d.cy
c.a.uniform1f(c.d,n)
n=f.gh7()
c=d.db
c.a.uniform1f(c.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.l)(b3),++g){o=b3[g].a
k=b1.h(0,o)
if(k==null)k=0
o=b2.a.c5.h(0,o)
o.a.uniform1i(o.d,k)}}}if(s.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.ga_(p).dm(0)}b3=b3.id
b3.toString
b3.ag(p.a8(0,!0))}if(s.db){b2.en(l,b2.ch)
b3=b2.a
p=b2.ch
b3.fN(b3.d7,p)
if(s.r.a){b3=b2.a
p=b2.cx.f
b3=b3.d8
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.x.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.cy.ch
p=p.d9
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.cy.f
b3=b3.da
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}}b3=s.y.a
p=!b3
if(p)o=!1
else o=!0
if(o){if(b3){b3=b2.a
o=b2.db.f
b3=b3.dc
b3.a.uniform1f(b3.d,o)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].bh(b4)
b3=b5.e
b3.bh(b4)
b3.aS(b4)
b3.dO(b4)
if(p)b3=!1
else b3=!0
if(b3)q.disable(3042)
for(j=0;j<l.length;++j)l[j].dO(b4)
b3=b2.a
b3.toString
q.useProgram(null)
b3.x.hk()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cB().b1}}
O.h5.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cP(a,C.c.a3(b+3,4)*4))}}
O.h6.prototype={
$2:function(a,b){return J.cM(a.a,b.a)}}
O.h7.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cX(a,C.c.a3(b+3,4)*4))}}
O.h8.prototype={
$2:function(a,b){return J.cM(a.a,b.a)}}
O.h9.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.dl(a,C.c.a3(b+3,4)*4))}}
O.ha.prototype={
$2:function(a,b){return J.cM(a.a,b.a)}}
O.hb.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.dr(a,C.c.a3(b+3,4)*4))}}
O.hc.prototype={
$2:function(a,b){return J.cM(a.a,b.a)}}
O.h_.prototype={
az:function(){var u,t=this
t.co()
u=t.f
if(!(Math.abs(u-1)<$.C().a)){t.f=1
u=new D.B(t.b,u,1)
u.b=!0
t.a.aa(u)}}}
O.dc.prototype={
az:function(){},
cO:function(a){var u,t,s=this
if(!s.c.q(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.az()
u=s.a
u.a=null
u.aa(null)}}}
O.h0.prototype={}
O.av.prototype={
cN:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.B(s.b+".color",u,a)
t.b=!0
s.a.aa(t)}},
az:function(){this.co()
this.cN(new V.W(1,1,1))},
saB:function(a,b){this.cO(new A.a_(!0,!1,!1))
this.cN(b)}}
O.h2.prototype={}
O.h3.prototype={
az:function(){var u,t=this
t.cp()
u=t.ch
if(!(Math.abs(u-1)<$.C().a)){t.ch=1
u=new D.B(t.b+".refraction",u,1)
u.b=!0
t.a.aa(u)}}}
O.h4.prototype={
cP:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.C().a)){u.ch=a
t=new D.B(u.b+".shininess",t,a)
t.b=!0
u.a.aa(t)}},
az:function(){this.cp()
this.cP(100)}}
O.dw.prototype={}
T.ib.prototype={}
X.kk.prototype={}
X.fu.prototype={
gA:function(){var u=this.x
return u==null?this.x=D.N():u}}
X.dk.prototype={
gA:function(){var u=this.f
return u==null?this.f=D.N():u},
aK:function(a){var u=this.f
if(u!=null)u.J(a)},
ek:function(){return this.aK(null)},
saF:function(a){var u,t,s=this
if(!J.D(s.b,a)){u=s.b
if(u!=null)u.gA().K(0,s.gct())
t=s.b
s.b=a
if(a!=null)a.gA().n(0,s.gct())
u=new D.B("mover",t,s.b)
u.b=!0
s.aK(u)}}}
X.i7.prototype={}
V.cT.prototype={
bc:function(a){this.b=new P.fz(C.P)
this.c=null
this.d=H.b([],[[P.o,W.ak]])},
M:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.ak]))
u=a.split("\n")
for(l=u.length,t=[W.ak],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.ev(q,0,q.length)
n=o==null?q:o
C.N.dV(p,H.kV(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gat(m.d).push(p)}},
dE:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.o,W.ak]])
u=C.b.j(b,"\n")
t=r.c
if(t==null)t=r.c=r.bi()
for(t.toString,s=new H.m(u),s=new P.bG(t.cj(new H.b5(s,s.gl(s))).a());s.u();)r.bs(s.gC(s))}}
V.kb.prototype={
$1:function(a){var u=C.d.dN(this.a.ghw(),2)
if(u!=="0.00")P.kU(u+" fps")}}
V.f9.prototype={
bs:function(a){var u=this
switch(a.a){case"Class":u.M(a.b,"#551")
break
case"Comment":u.M(a.b,"#777")
break
case"Id":u.M(a.b,"#111")
break
case"Num":u.M(a.b,"#191")
break
case"Reserved":u.M(a.b,"#119")
break
case"String":u.M(a.b,"#171")
break
case"Symbol":u.M(a.b,"#616")
break
case"Type":u.M(a.b,"#B11")
break
case"Whitespace":u.M(a.b,"#111")
break}},
bi:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.ig()
a1.d=a1.k(0,r)
u=a1.k(0,r).j(0,q)
t=K.t(new H.m("_"))
u.a.push(t)
t=K.M("a","z")
u.a.push(t)
t=K.M("A","Z")
u.a.push(t)
t=a1.k(0,q).j(0,q)
u=K.t(new H.m("_"))
t.a.push(u)
u=K.M("0","9")
t.a.push(u)
u=K.M("a","z")
t.a.push(u)
u=K.M("A","Z")
t.a.push(u)
u=a1.k(0,r).j(0,p)
t=K.M("0","9")
u.a.push(t)
t=a1.k(0,p).j(0,p)
u=K.M("0","9")
t.a.push(u)
u=a1.k(0,p).j(0,o)
t=K.t(new H.m("."))
u.a.push(t)
t=a1.k(0,o).j(0,n)
u=K.M("0","9")
t.a.push(u)
u=a1.k(0,n).j(0,n)
t=K.M("0","9")
u.a.push(t)
t=a1.k(0,r).j(0,m)
u=K.t(new H.m(l))
t.a.push(u)
u=a1.k(0,m).j(0,m)
t=K.t(new H.m(l))
u.a.push(t)
t=a1.k(0,r).j(0,k)
u=K.t(new H.m('"'))
t.a.push(u)
u=a1.k(0,k).j(0,j)
t=K.t(new H.m('"'))
u.a.push(t)
t=a1.k(0,k).j(0,i)
u=K.t(new H.m("\\"))
t.a.push(u)
u=a1.k(0,i).j(0,k)
t=K.t(new H.m('"'))
u.a.push(t)
a1.k(0,k).j(0,k).a.push(new K.aK())
t=a1.k(0,r).j(0,h)
u=K.t(new H.m("'"))
t.a.push(u)
u=a1.k(0,h).j(0,g)
t=K.t(new H.m("'"))
u.a.push(t)
t=a1.k(0,h).j(0,f)
u=K.t(new H.m("\\"))
t.a.push(u)
u=a1.k(0,f).j(0,h)
t=K.t(new H.m("'"))
u.a.push(t)
a1.k(0,h).j(0,h).a.push(new K.aK())
t=a1.k(0,r).j(0,e)
u=K.t(new H.m("/"))
t.a.push(u)
u=a1.k(0,e).j(0,d)
t=K.t(new H.m("/"))
u.a.push(t)
t=a1.k(0,d).j(0,c)
u=K.t(new H.m("\n"))
t.a.push(u)
u=a1.k(0,d).j(0,d)
t=new K.a6()
s=[K.b6]
t.a=H.b([],s)
u.a.push(t)
u=K.t(new H.m("\n"))
t.a.push(u)
u=a1.k(0,e).j(0,b)
t=K.t(new H.m("*"))
u.a.push(t)
t=a1.k(0,b).j(0,a)
u=K.t(new H.m("*"))
t.a.push(u)
u=a1.k(0,a).j(0,b)
t=new K.a6()
t.a=H.b([],s)
u.a.push(t)
u=K.t(new H.m("*"))
t.a.push(u)
u=a1.k(0,a).j(0,c)
t=K.t(new H.m("/"))
u.a.push(t)
t=a1.k(0,r).j(0,a0)
u=K.t(new H.m(" \n\t"))
t.a.push(u)
u=a1.k(0,a0).j(0,a0)
t=K.t(new H.m(" \n\t"))
u.a.push(t)
t=a1.k(0,p)
t.d=t.a.P("Num")
t=a1.k(0,n)
t.d=t.a.P("Num")
t=a1.k(0,m)
t.d=t.a.P("Symbol")
t=a1.k(0,j)
t.d=t.a.P("String")
t=a1.k(0,g)
t.d=t.a.P("String")
t=a1.k(0,c)
t.d=t.a.P(d)
t=a1.k(0,a0)
t.d=t.a.P(a0)
t=a1.k(0,q)
t=t.d=t.a.P(q)
u=[P.h]
t.aG(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aG(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aG(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fw.prototype={
bs:function(a){var u=this
switch(a.a){case"Builtin":u.M(a.b,"#411")
break
case"Comment":u.M(a.b,"#777")
break
case"Id":u.M(a.b,"#111")
break
case"Num":u.M(a.b,"#191")
break
case"Preprocess":u.M(a.b,"#737")
break
case"Reserved":u.M(a.b,"#119")
break
case"Symbol":u.M(a.b,"#611")
break
case"Type":u.M(a.b,"#171")
break
case"Whitespace":u.M(a.b,"#111")
break}},
bi:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.ig()
e.d=e.k(0,r)
u=e.k(0,r).j(0,q)
t=K.t(new H.m("_"))
u.a.push(t)
t=K.M("a","z")
u.a.push(t)
t=K.M("A","Z")
u.a.push(t)
t=e.k(0,q).j(0,q)
u=K.t(new H.m("_"))
t.a.push(u)
u=K.M("0","9")
t.a.push(u)
u=K.M("a","z")
t.a.push(u)
u=K.M("A","Z")
t.a.push(u)
u=e.k(0,r).j(0,p)
t=K.M("0","9")
u.a.push(t)
t=e.k(0,p).j(0,p)
u=K.M("0","9")
t.a.push(u)
u=e.k(0,p).j(0,o)
t=K.t(new H.m("."))
u.a.push(t)
t=e.k(0,o).j(0,n)
u=K.M("0","9")
t.a.push(u)
u=e.k(0,n).j(0,n)
t=K.M("0","9")
u.a.push(t)
t=e.k(0,r).j(0,m)
u=K.t(new H.m(l))
t.a.push(u)
u=e.k(0,m).j(0,m)
t=K.t(new H.m(l))
u.a.push(t)
t=e.k(0,r).j(0,k)
u=K.t(new H.m("/"))
t.a.push(u)
u=e.k(0,k).j(0,j)
t=K.t(new H.m("/"))
u.a.push(t)
e.k(0,k).j(0,m).a.push(new K.aK())
t=e.k(0,j).j(0,i)
u=K.t(new H.m("\n"))
t.a.push(u)
u=e.k(0,j).j(0,j)
t=new K.a6()
s=[K.b6]
t.a=H.b([],s)
u.a.push(t)
u=K.t(new H.m("\n"))
t.a.push(u)
u=e.k(0,r).j(0,h)
t=K.t(new H.m("#"))
u.a.push(t)
t=e.k(0,h).j(0,h)
u=new K.a6()
u.a=H.b([],s)
t.a.push(u)
t=K.t(new H.m("\n"))
u.a.push(t)
t=e.k(0,h).j(0,g)
u=K.t(new H.m("\n"))
t.a.push(u)
u=e.k(0,r).j(0,f)
t=K.t(new H.m(" \n\t"))
u.a.push(t)
t=e.k(0,f).j(0,f)
u=K.t(new H.m(" \n\t"))
t.a.push(u)
u=e.k(0,p)
u.d=u.a.P("Num")
u=e.k(0,n)
u.d=u.a.P("Num")
u=e.k(0,m)
u.d=u.a.P("Symbol")
u=e.k(0,i)
u.d=u.a.P(j)
u=e.k(0,g)
u.d=u.a.P(h)
u=e.k(0,f)
u.d=u.a.P(f)
u=e.k(0,q)
u=u.d=u.a.P(q)
t=[P.h]
u.aG(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aG(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aG(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.fx.prototype={
bs:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.M(a.b,"#911")
u.M("=",t)
break
case"Id":u.M(a.b,t)
break
case"Other":u.M(a.b,t)
break
case"Reserved":u.M(a.b,"#119")
break
case"String":u.M(a.b,"#171")
break
case"Symbol":u.M(a.b,"#616")
break}},
bi:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.ig()
l.d=l.k(0,s)
u=l.k(0,s).j(0,r)
t=K.t(new H.m("_"))
u.a.push(t)
t=K.M("a","z")
u.a.push(t)
t=K.M("A","Z")
u.a.push(t)
t=l.k(0,r).j(0,r)
u=K.t(new H.m("_"))
t.a.push(u)
u=K.M("0","9")
t.a.push(u)
u=K.M("a","z")
t.a.push(u)
u=K.M("A","Z")
t.a.push(u)
u=l.k(0,r).j(0,q)
t=K.t(new H.m("="))
u.a.push(t)
u.c=!0
u=l.k(0,s).j(0,p)
t=K.t(new H.m("</\\-!>="))
u.a.push(t)
t=l.k(0,p).j(0,p)
u=K.t(new H.m("</\\-!>="))
t.a.push(u)
u=l.k(0,s).j(0,o)
t=K.t(new H.m('"'))
u.a.push(t)
t=l.k(0,o).j(0,n)
u=K.t(new H.m('"'))
t.a.push(u)
u=l.k(0,o).j(0,"EscStr")
t=K.t(new H.m("\\"))
u.a.push(t)
t=l.k(0,"EscStr").j(0,o)
u=K.t(new H.m('"'))
t.a.push(u)
l.k(0,o).j(0,o).a.push(new K.aK())
l.k(0,s).j(0,m).a.push(new K.aK())
u=l.k(0,m).j(0,m)
t=new K.a6()
t.a=H.b([],[K.b6])
u.a.push(t)
u=K.t(new H.m('</\\-!>=_"'))
t.a.push(u)
u=K.M("a","z")
t.a.push(u)
u=K.M("A","Z")
t.a.push(u)
u=l.k(0,p)
u.d=u.a.P("Symbol")
u=l.k(0,n)
u.d=u.a.P("String")
u=l.k(0,r)
t=u.a.P(r)
u.d=t
t.aG(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.k(0,q)
t.d=t.a.P(q)
t=l.k(0,m)
t.d=t.a.P(m)
return l}}
V.hx.prototype={
dE:function(a,b){this.d=H.b([],[[P.o,W.ak]])
this.M(C.b.j(b,"\n"),"#111")},
bs:function(a){},
bi:function(){return}}
V.hC.prototype={
cW:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.lu().gce().h(0,H.e(u))
if(t==null)if(d){c.$0()
m.cU(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.l0(m.c).n(0,q)
o=W.mL("radio")
o.checked=s
o.name=u
W.Z(o,"change",new V.hD(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.l0(m.c).n(0,r.createElement("br"))},
aZ:function(a,b,c){return this.cW(a,b,c,!1)},
cU:function(a){var u,t,s=P.lu(),r=P.h,q=P.mU(s.gce(),r,r)
q.m(0,this.a,a)
u=s.dJ(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.jo([],[]).bv(""),"",t)}}
V.hD.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.cU(u.d)}}}
V.hS.prototype={
e8:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.Z(q,"scroll",new V.hU(o),!1)},
cY:function(a){var u,t,s,r,q,p,o,n
this.fQ()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.hA(a),s.toString,r=new H.m(r),r=new P.bG(s.cj(new H.b5(r,r.gl(r))).a());r.u();){s=r.gC(r)
switch(s.a){case"Bold":q=u.createElement("div")
q.className="boldPar"
q.textContent=s.b
t.appendChild(q)
break
case"Italic":q=u.createElement("div")
q.className="italicPar"
q.textContent=s.b
t.appendChild(q)
break
case"Code":q=u.createElement("div")
q.className="codePar"
q.textContent=s.b
t.appendChild(q)
break
case"Link":s=s.b
if(H.oT(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.eu(C.x,s,C.e,!1)
o=u.createElement("a")
o.className="linkPar"
o.href="#"+H.e(n)
o.textContent=s
t.appendChild(o)}break
case"Other":q=u.createElement("div")
q.className="normalPar"
q.textContent=s.b
t.appendChild(q)
break}}this.a.appendChild(t)},
dS:function(a){var u,t,s,r=new V.f9("dart")
r.bc("dart")
u=new V.fw("glsl")
u.bc("glsl")
t=new V.fx("html")
t.bc("html")
s=C.b.hs(H.b([r,u,t],[V.cT]),new V.hV(a))
if(s!=null)return s
r=new V.hx("plain")
r.bc("plain")
return r},
cX:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.v])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cH(s).a2(s,"+")){b0[t]=C.a.a5(s,1)
a6.push(1)
u=!0}else if(C.a.a2(s,"-")){b0[t]=C.a.a5(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.dS(a8)
r.dE(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.eu(C.x,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.l2()
j.href="#"+H.e(n)
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
if(t>=a6.length)return H.d(a6,t)
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
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.l)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.l)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.b.gS(s);a2.u();)d.appendChild(a2.gC(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
fZ:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
n.id="shellTable"
u=n.style
u.width="100%"
u.padding="0px"
u.marginLeft=p
u.marginRight=p
this.a.appendChild(n)
t=n.insertRow(-1)
u=t.insertCell(-1).style
u.textAlign="center"
u.verticalAlign="top"
u.marginLeft=p
u.marginRight=p
for(s=0;s<1;++s){r=o.createElement("div")
r.id=a[s]
u=r.style
u.textAlign="left"
u=r.style
u.verticalAlign="top"
u=t.insertCell(-1)
q=u.style
q.textAlign="center"
q.verticalAlign="top"
q.marginLeft=p
q.marginRight=p
u.appendChild(r)}},
fQ:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.ig()
u.d=u.k(0,q)
t=u.k(0,q).j(0,p)
s=K.t(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.k(0,p).j(0,p)
s=new K.a6()
r=[K.b6]
s.a=H.b([],r)
t.a.push(s)
t=K.t(new H.m("*"))
s.a.push(t)
t=u.k(0,p).j(0,"BoldEnd")
s=K.t(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,o)
s=K.t(new H.m("_"))
t.a.push(s)
t.c=!0
t=u.k(0,o).j(0,o)
s=new K.a6()
s.a=H.b([],r)
t.a.push(s)
t=K.t(new H.m("_"))
s.a.push(t)
t=u.k(0,o).j(0,n)
s=K.t(new H.m("_"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,m)
s=K.t(new H.m("`"))
t.a.push(s)
t.c=!0
t=u.k(0,m).j(0,m)
s=new K.a6()
s.a=H.b([],r)
t.a.push(s)
t=K.t(new H.m("`"))
s.a.push(t)
t=u.k(0,m).j(0,"CodeEnd")
s=K.t(new H.m("`"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,l)
s=K.t(new H.m("["))
t.a.push(s)
t.c=!0
t=u.k(0,l).j(0,k)
s=K.t(new H.m("|"))
t.a.push(s)
s=u.k(0,l).j(0,j)
t=K.t(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.k(0,l).j(0,l)
t=new K.a6()
t.a=H.b([],r)
s.a.push(t)
s=K.t(new H.m("|]"))
t.a.push(s)
s=u.k(0,k).j(0,j)
t=K.t(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.k(0,k).j(0,k)
t=new K.a6()
t.a=H.b([],r)
s.a.push(t)
s=K.t(new H.m("|]"))
t.a.push(s)
u.k(0,q).j(0,i).a.push(new K.aK())
s=u.k(0,i).j(0,i)
t=new K.a6()
t.a=H.b([],r)
s.a.push(t)
s=K.t(new H.m("*_`["))
t.a.push(s)
s=u.k(0,"BoldEnd")
s.d=s.a.P(p)
s=u.k(0,n)
s.d=s.a.P(o)
s=u.k(0,"CodeEnd")
s.d=s.a.P(m)
s=u.k(0,j)
s.d=s.a.P("Link")
s=u.k(0,i)
s.d=s.a.P(i)
this.b=u}}
V.hU.prototype={
$1:function(a){P.lq(C.n,new V.hT(this.a))}}
V.hT.prototype={
$0:function(){var u=C.d.al(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.hV.prototype={
$1:function(a){return a.a===this.a}}
U.k3.prototype={
$0:function(){this.a.sa9(0,F.kO(1,null,null,1))}}
U.k4.prototype={
$0:function(){this.a.sa9(0,F.kP(!0,40,1))}}
U.k5.prototype={
$0:function(){this.a.sa9(0,F.kP(!1,40,0))}}
U.k6.prototype={
$0:function(){this.a.sa9(0,F.oS(6,6))}}
U.k7.prototype={
$0:function(){this.a.sa9(0,F.m5())}}
U.k8.prototype={
$0:function(){this.a.sa9(0,F.oL())}}
U.k9.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.h]
u.cX("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.cX("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.e_=u.i
u=J.d6.prototype
u.e1=u.i
u=P.j.prototype
u.e0=u.bw
u=W.P.prototype
u.by=u.ac
u=W.ed.prototype
u.e2=u.aq
u=K.d3.prototype
u.dZ=u.aE
u.cn=u.i
u=O.dc.prototype
u.co=u.az
u=O.av.prototype
u.cp=u.az})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"nZ","mP",20)
t(P,"ot","nx",8)
t(P,"ou","ny",8)
t(P,"ov","nz",8)
s(P,"lU","or",10)
r(W,"oF",4,null,["$4"],["nA"],15,0)
r(W,"oG",4,null,["$4"],["nB"],15,0)
var l
q(l=E.aN.prototype,"gdA",0,0,null,["$1","$0"],["dB","hK"],0,0)
q(l,"gdC",0,0,null,["$1","$0"],["dD","hL"],0,0)
q(l,"gdw",0,0,null,["$1","$0"],["dz","hJ"],0,0)
q(l,"gdu",0,0,null,["$1","$0"],["dv","hG"],0,0)
p(l,"ghE","hF",4)
p(l,"ghH","hI",4)
q(l=E.dx.prototype,"gcq",0,0,null,["$1","$0"],["cs","cr"],0,0)
o(l,"gi_","dK",10)
n(l=X.dG.prototype,"gf6","f7",5)
n(l,"geV","eW",5)
n(l,"gf0","f1",2)
n(l,"gfa","fb",11)
n(l,"gf8","f9",11)
n(l,"gfe","ff",2)
n(l,"gfi","fj",2)
n(l,"gf4","f5",2)
n(l,"gfg","fh",2)
n(l,"gf2","f3",2)
n(l,"gfk","fl",18)
n(l,"gfm","fn",5)
n(l,"gfC","fD",6)
n(l,"gfw","fz",6)
n(l,"gfA","fB",6)
q(D.bl.prototype,"gbA",0,0,null,["$1","$0"],["a6","eb"],0,0)
q(l=D.d8.prototype,"gcJ",0,0,null,["$1","$0"],["cK","fc"],0,0)
n(l,"gfp","fq",19)
p(l,"geP","eQ",12)
p(l,"gfu","fv",12)
m(V.O.prototype,"gl","b2",7)
m(V.z.prototype,"gl","b2",7)
m(V.cq.prototype,"gl","b2",7)
q(l=U.bZ.prototype,"gbf",0,0,null,["$1","$0"],["U","ap"],0,0)
p(l,"gec","ed",13)
p(l,"gfs","ft",13)
q(l=U.dH.prototype,"gbf",0,0,null,["$1","$0"],["U","ap"],0,0)
n(l,"geG","eH",1)
n(l,"geI","eJ",1)
n(l,"geK","eL",1)
n(l,"geB","eC",1)
n(l,"geD","eE",1)
n(l,"gfX","fY",1)
n(l,"gfV","fW",1)
n(l,"gfT","fU",1)
n(U.dI.prototype,"geM","eN",1)
q(l=M.d_.prototype,"gan",0,0,null,["$1","$0"],["ax","ee"],0,0)
p(l,"geX","eY",4)
p(l,"geZ","f_",4)
q(l=O.db.prototype,"geg",0,0,null,["$1","$0"],["aa","eh"],0,0)
q(l,"gfJ",0,0,null,["$1","$0"],["cL","fK"],0,0)
p(l,"geR","eS",14)
p(l,"geT","eU",14)
q(X.dk.prototype,"gct",0,0,null,["$1","$0"],["aK","ek"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a1,null)
s(P.a1,[H.kt,J.a,J.a4,P.e0,P.j,H.b5,P.fE,H.d0,H.iz,H.f1,H.il,P.bq,H.bU,H.ei,P.a0,H.fN,H.fP,H.fH,P.eo,P.bF,P.bG,P.dL,P.du,P.i3,P.dy,P.jG,P.ji,P.jc,P.e_,P.x,P.jy,P.fW,P.eZ,P.fA,P.jE,P.jD,P.aH,P.ab,P.aa,P.b0,P.hv,P.ds,P.dT,P.ft,P.fv,P.o,P.Q,P.b9,P.h,P.R,P.bH,P.iB,P.jl,W.f5,W.ct,W.K,W.di,W.ed,W.js,W.d1,W.aQ,W.jh,W.ev,P.jn,P.jd,P.bB,K.aK,K.d3,K.b6,K.hE,K.hN,L.dt,L.dz,L.dA,L.ie,O.b_,O.c5,E.eV,E.aN,E.hF,E.dx,Z.dK,Z.iW,Z.cR,Z.bs,Z.bf,D.eY,D.br,D.X,X.cS,X.d7,X.fK,X.fT,X.an,X.hj,X.ih,X.dG,D.bl,D.fb,D.a5,D.hz,D.hZ,V.W,V.as,V.fk,V.dd,V.am,V.a7,V.U,V.bb,V.dn,V.O,V.z,V.cq,U.dH,U.dI,M.d_,A.cO,A.eO,A.a_,A.cP,A.cX,A.dl,A.dr,A.h1,A.ck,A.cl,A.cn,A.co,A.dD,A.iu,F.b1,F.fn,F.c2,F.fM,F.cc,F.hO,F.hP,F.hQ,F.hR,F.be,F.iK,F.iL,F.iO,F.iQ,F.iR,F.iS,O.dw,O.dc,O.h2,X.kk,X.i7,X.dk,V.cT,V.hC,V.hS])
s(J.a,[J.fF,J.d5,J.d6,J.b2,J.c1,J.b3,H.c9,H.b8,W.f,W.eK,W.bn,W.at,W.H,W.dN,W.ag,W.fa,W.fc,W.dP,W.cZ,W.dR,W.fe,W.i,W.dU,W.au,W.fy,W.dW,W.c0,W.fS,W.hd,W.e1,W.e2,W.aw,W.e3,W.e6,W.ay,W.ea,W.ec,W.aB,W.ee,W.aC,W.ej,W.ao,W.em,W.id,W.aE,W.ep,W.ij,W.iG,W.ew,W.ey,W.eA,W.eC,W.eE,P.aO,P.dY,P.aR,P.e8,P.hB,P.ek,P.aT,P.er,P.eP,P.dM,P.eg])
s(J.d6,[J.hw,J.bE,J.b4])
t(J.ks,J.b2)
s(J.c1,[J.d4,J.fG])
t(P.fR,P.e0)
s(P.fR,[H.dE,W.j2,W.a2,P.fp])
t(H.m,H.dE)
s(P.j,[H.q,H.c4,H.cr,P.fC])
s(H.q,[H.d9,H.fO])
t(H.fh,H.c4)
s(P.fE,[H.fX,H.iX])
t(H.fY,H.d9)
t(H.f2,H.f1)
s(P.bq,[H.hs,H.fJ,H.iy,H.eX,H.hL,P.dj,P.aj,P.iA,P.iw,P.cg,P.f0,P.f8])
s(H.bU,[H.kg,H.i8,H.fI,H.jZ,H.k_,H.k0,P.iZ,P.iY,P.j_,P.j0,P.jx,P.jw,P.jP,P.jf,P.jg,P.fQ,P.fV,P.ff,P.fg,P.iF,P.iC,P.iD,P.iE,P.jz,P.jA,P.jC,P.jB,P.jK,P.jJ,P.jL,P.jM,W.fi,W.hf,W.hh,W.hK,W.i2,W.j7,W.hq,W.hp,W.jj,W.jk,W.jv,W.jF,P.jp,P.jq,P.jQ,P.fq,P.fr,P.eR,E.hG,E.hH,E.hI,E.ic,D.fl,D.fm,F.jH,F.jR,F.jT,F.jU,F.jV,F.kc,F.kd,F.kf,F.k2,F.jS,F.iU,F.iT,F.iM,F.iN,O.h5,O.h6,O.h7,O.h8,O.h9,O.ha,O.hb,O.hc,V.kb,V.hD,V.hU,V.hT,V.hV,U.k3,U.k4,U.k5,U.k6,U.k7,U.k8,U.k9])
s(H.i8,[H.i0,H.bS])
t(P.fU,P.a0)
s(P.fU,[H.I,W.j1])
t(H.de,H.b8)
s(H.de,[H.cv,H.cx])
t(H.cw,H.cv)
t(H.ca,H.cw)
t(H.cy,H.cx)
t(H.df,H.cy)
s(H.df,[H.hk,H.hl,H.hm,H.hn,H.ho,H.dg,H.cb])
t(P.jt,P.fC)
t(P.je,P.jG)
t(P.jb,P.ji)
t(P.et,P.fW)
t(P.dF,P.et)
s(P.eZ,[P.eT,P.fj])
t(P.f3,P.i3)
s(P.f3,[P.eU,P.fz,P.iJ,P.iI])
t(P.iH,P.fj)
s(P.aa,[P.J,P.v])
s(P.aj,[P.bz,P.fB])
t(P.j4,P.bH)
s(W.f,[W.E,W.fo,W.c7,W.aA,W.cz,W.aD,W.ap,W.cB,W.iV,W.cs,P.eS,P.bm])
s(W.E,[W.P,W.aZ])
s(W.P,[W.n,P.k])
s(W.n,[W.eL,W.eM,W.bo,W.bp,W.ak,W.fs,W.hM,W.dv,W.i5,W.i6,W.ci])
t(W.f4,W.at)
t(W.bV,W.dN)
s(W.ag,[W.f6,W.f7])
t(W.dQ,W.dP)
t(W.cY,W.dQ)
t(W.dS,W.dR)
t(W.fd,W.dS)
t(W.al,W.bn)
t(W.dV,W.dU)
t(W.bY,W.dV)
t(W.dX,W.dW)
t(W.c_,W.dX)
t(W.bc,W.i)
s(W.bc,[W.bv,W.ax,W.bA])
t(W.he,W.e1)
t(W.hg,W.e2)
t(W.e4,W.e3)
t(W.hi,W.e4)
t(W.e7,W.e6)
t(W.dh,W.e7)
t(W.eb,W.ea)
t(W.hy,W.eb)
t(W.hJ,W.ec)
t(W.cA,W.cz)
t(W.hX,W.cA)
t(W.ef,W.ee)
t(W.hY,W.ef)
t(W.i1,W.ej)
t(W.en,W.em)
t(W.i9,W.en)
t(W.cC,W.cB)
t(W.ia,W.cC)
t(W.eq,W.ep)
t(W.ii,W.eq)
t(W.bg,W.ax)
t(W.ex,W.ew)
t(W.j3,W.ex)
t(W.dO,W.cZ)
t(W.ez,W.ey)
t(W.j8,W.ez)
t(W.eB,W.eA)
t(W.e5,W.eB)
t(W.eD,W.eC)
t(W.jm,W.eD)
t(W.eF,W.eE)
t(W.jr,W.eF)
t(W.j5,W.j1)
t(W.j6,P.du)
t(W.ju,W.ed)
t(P.jo,P.jn)
t(P.a8,P.jd)
t(P.dZ,P.dY)
t(P.fL,P.dZ)
t(P.e9,P.e8)
t(P.ht,P.e9)
t(P.cf,P.k)
t(P.el,P.ek)
t(P.i4,P.el)
t(P.es,P.er)
t(P.ik,P.es)
t(P.eQ,P.dM)
t(P.hu,P.bm)
t(P.eh,P.eg)
t(P.i_,P.eh)
s(K.d3,[K.a6,L.dC])
s(E.eV,[Z.cQ,A.dp,T.ib])
s(D.X,[D.bt,D.bu,D.B,X.hA])
s(X.hA,[X.da,X.b7,X.c8,X.dB])
s(O.b_,[D.d8,U.bZ])
s(D.eY,[U.f_,U.ah])
t(U.cU,U.ah)
t(A.fZ,A.dp)
s(A.dD,[A.bd,A.ir,A.is,A.it,A.ip,A.V,A.iq,A.G,A.cj,A.iv,A.cm,A.ac,A.bC,A.bD])
t(F.hW,F.fn)
t(F.io,F.fM)
t(F.iP,F.iQ)
t(F.hr,F.iR)
t(O.db,O.dw)
s(O.dc,[O.h_,O.h0,O.av])
s(O.av,[O.h3,O.h4])
t(X.fu,X.i7)
s(V.cT,[V.f9,V.fw,V.fx,V.hx])
u(H.dE,H.iz)
u(H.cv,P.x)
u(H.cw,H.d0)
u(H.cx,P.x)
u(H.cy,H.d0)
u(P.e0,P.x)
u(P.et,P.jy)
u(W.dN,W.f5)
u(W.dP,P.x)
u(W.dQ,W.K)
u(W.dR,P.x)
u(W.dS,W.K)
u(W.dU,P.x)
u(W.dV,W.K)
u(W.dW,P.x)
u(W.dX,W.K)
u(W.e1,P.a0)
u(W.e2,P.a0)
u(W.e3,P.x)
u(W.e4,W.K)
u(W.e6,P.x)
u(W.e7,W.K)
u(W.ea,P.x)
u(W.eb,W.K)
u(W.ec,P.a0)
u(W.cz,P.x)
u(W.cA,W.K)
u(W.ee,P.x)
u(W.ef,W.K)
u(W.ej,P.a0)
u(W.em,P.x)
u(W.en,W.K)
u(W.cB,P.x)
u(W.cC,W.K)
u(W.ep,P.x)
u(W.eq,W.K)
u(W.ew,P.x)
u(W.ex,W.K)
u(W.ey,P.x)
u(W.ez,W.K)
u(W.eA,P.x)
u(W.eB,W.K)
u(W.eC,P.x)
u(W.eD,W.K)
u(W.eE,P.x)
u(W.eF,W.K)
u(P.dY,P.x)
u(P.dZ,W.K)
u(P.e8,P.x)
u(P.e9,W.K)
u(P.ek,P.x)
u(P.el,W.K)
u(P.er,P.x)
u(P.es,W.K)
u(P.dM,P.a0)
u(P.eg,P.x)
u(P.eh,W.K)})()
var v={mangledGlobalNames:{v:"int",J:"double",aa:"num",h:"String",aH:"bool",b9:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.X]},{func:1,ret:-1,args:[D.X]},{func:1,ret:-1,args:[W.ax]},{func:1,ret:P.b9,args:[,,]},{func:1,ret:-1,args:[P.v,[P.j,E.aN]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bA]},{func:1,ret:P.J},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bv]},{func:1,ret:-1,args:[P.v,[P.j,D.a5]]},{func:1,ret:-1,args:[P.v,[P.j,U.ah]]},{func:1,ret:-1,args:[P.v,[P.j,V.am]]},{func:1,ret:P.aH,args:[W.P,P.h,P.h,W.ct]},{func:1,ret:P.b9,args:[,]},{func:1,ret:P.bB,args:[,,]},{func:1,ret:-1,args:[W.bg]},{func:1,ret:P.aH,args:[[P.j,D.a5]]},{func:1,ret:P.v,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bo.prototype
C.m=W.bp.prototype
C.N=W.ak.prototype
C.Q=J.a.prototype
C.b=J.b2.prototype
C.c=J.d4.prototype
C.i=J.d5.prototype
C.d=J.c1.prototype
C.a=J.b3.prototype
C.R=J.b4.prototype
C.A=J.hw.prototype
C.B=W.dv.prototype
C.q=J.bE.prototype
C.C=W.bg.prototype
C.D=W.cs.prototype
C.Y=new P.eU()
C.E=new P.eT()
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.F=function() {
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
C.K=function(getTagFallback) {
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
C.G=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.H=function(hooks) {
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
C.J=function(hooks) {
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
C.I=function(hooks) {
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
C.u=function(hooks) { return hooks; }

C.L=new P.hv()
C.e=new P.iH()
C.M=new P.iJ()
C.f=new P.je()
C.n=new P.b0(0)
C.O=new P.b0(5e6)
C.P=new P.fA("element",!1,!1,!1)
C.v=H.b(u([127,2047,65535,1114111]),[P.v])
C.j=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.v])
C.S=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.k=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.v])
C.l=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.v])
C.T=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.w=H.b(u([]),[P.h])
C.U=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.v])
C.x=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.v])
C.h=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.v])
C.y=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.v])
C.V=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.v])
C.z=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.v])
C.o=H.b(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.p=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.W=new H.f2(0,{},C.w,[P.h,P.h])
C.X=new P.bF(null,2)})();(function staticFields(){$.ar=0
$.bT=null
$.l4=null
$.lZ=null
$.lT=null
$.m2=null
$.jW=null
$.k1=null
$.kS=null
$.bK=null
$.cF=null
$.cG=null
$.kL=!1
$.aq=C.f
$.a9=[]
$.aM=null
$.kn=null
$.lb=null
$.la=null
$.cu=P.kv(P.h,P.fv)
$.c6=null
$.lh=null
$.az=null
$.lm=null
$.ly=null
$.lD=null
$.lA=null
$.lB=null
$.lC=null
$.lz=null
$.lE=null
$.lg=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"p_","m7",function(){return H.lY("_$dart_dartClosure")})
u($,"p0","kX",function(){return H.lY("_$dart_js")})
u($,"p1","m8",function(){return H.aF(H.im({
toString:function(){return"$receiver$"}}))})
u($,"p2","m9",function(){return H.aF(H.im({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"p3","ma",function(){return H.aF(H.im(null))})
u($,"p4","mb",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"p7","me",function(){return H.aF(H.im(void 0))})
u($,"p8","mf",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"p6","md",function(){return H.aF(H.ls(null))})
u($,"p5","mc",function(){return H.aF(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pa","mh",function(){return H.aF(H.ls(void 0))})
u($,"p9","mg",function(){return H.aF(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"po","kY",function(){return P.nw()})
u($,"pb","mi",function(){return P.nt()})
u($,"pp","mm",function(){return H.n0(H.bJ(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.v])))})
u($,"ps","mo",function(){return P.nf("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pt","mp",function(){return P.nX()})
u($,"pq","mn",function(){return P.ld(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"pi","ml",function(){return Z.ai(0)})
u($,"pc","mj",function(){return Z.ai(511)})
u($,"pk","aY",function(){return Z.ai(1)})
u($,"pj","aX",function(){return Z.ai(2)})
u($,"pe","aW",function(){return Z.ai(4)})
u($,"pl","bj",function(){return Z.ai(8)})
u($,"pm","bk",function(){return Z.ai(16)})
u($,"pf","cK",function(){return Z.ai(32)})
u($,"pg","cL",function(){return Z.ai(64)})
u($,"ph","mk",function(){return Z.ai(96)})
u($,"pn","bQ",function(){return Z.ai(128)})
u($,"pd","aV",function(){return Z.ai(256)})
u($,"oZ","m6",function(){return new V.fk(1e-9)})
u($,"oY","C",function(){return $.m6()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.c9,DataView:H.b8,ArrayBufferView:H.b8,Float32Array:H.ca,Float64Array:H.ca,Int16Array:H.hk,Int32Array:H.hl,Int8Array:H.hm,Uint16Array:H.hn,Uint32Array:H.ho,Uint8ClampedArray:H.dg,CanvasPixelArray:H.dg,Uint8Array:H.cb,HTMLAudioElement:W.n,HTMLBRElement:W.n,HTMLBaseElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLImageElement:W.n,HTMLInputElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMediaElement:W.n,HTMLMenuElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableCellElement:W.n,HTMLTableDataCellElement:W.n,HTMLTableHeaderCellElement:W.n,HTMLTableColElement:W.n,HTMLTextAreaElement:W.n,HTMLTimeElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLVideoElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLFrameSetElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,AccessibleNodeList:W.eK,HTMLAnchorElement:W.eL,HTMLAreaElement:W.eM,Blob:W.bn,HTMLBodyElement:W.bo,HTMLCanvasElement:W.bp,CDATASection:W.aZ,CharacterData:W.aZ,Comment:W.aZ,ProcessingInstruction:W.aZ,Text:W.aZ,CSSPerspective:W.f4,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.bV,MSStyleCSSProperties:W.bV,CSS2Properties:W.bV,CSSImageValue:W.ag,CSSKeywordValue:W.ag,CSSNumericValue:W.ag,CSSPositionValue:W.ag,CSSResourceValue:W.ag,CSSUnitValue:W.ag,CSSURLImageValue:W.ag,CSSStyleValue:W.ag,CSSMatrixComponent:W.at,CSSRotation:W.at,CSSScale:W.at,CSSSkew:W.at,CSSTranslation:W.at,CSSTransformComponent:W.at,CSSTransformValue:W.f6,CSSUnparsedValue:W.f7,DataTransferItemList:W.fa,HTMLDivElement:W.ak,DOMException:W.fc,ClientRectList:W.cY,DOMRectList:W.cY,DOMRectReadOnly:W.cZ,DOMStringList:W.fd,DOMTokenList:W.fe,Element:W.P,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.al,FileList:W.bY,FileWriter:W.fo,HTMLFormElement:W.fs,Gamepad:W.au,History:W.fy,HTMLCollection:W.c_,HTMLFormControlsCollection:W.c_,HTMLOptionsCollection:W.c_,ImageData:W.c0,KeyboardEvent:W.bv,Location:W.fS,MediaList:W.hd,MessagePort:W.c7,MIDIInputMap:W.he,MIDIOutputMap:W.hg,MimeType:W.aw,MimeTypeArray:W.hi,PointerEvent:W.ax,MouseEvent:W.ax,DragEvent:W.ax,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,Attr:W.E,DocumentType:W.E,Node:W.E,NodeList:W.dh,RadioNodeList:W.dh,Plugin:W.ay,PluginArray:W.hy,RTCStatsReport:W.hJ,HTMLSelectElement:W.hM,SourceBuffer:W.aA,SourceBufferList:W.hX,SpeechGrammar:W.aB,SpeechGrammarList:W.hY,SpeechRecognitionResult:W.aC,Storage:W.i1,CSSStyleSheet:W.ao,StyleSheet:W.ao,HTMLTableElement:W.dv,HTMLTableRowElement:W.i5,HTMLTableSectionElement:W.i6,HTMLTemplateElement:W.ci,TextTrack:W.aD,TextTrackCue:W.ap,VTTCue:W.ap,TextTrackCueList:W.i9,TextTrackList:W.ia,TimeRanges:W.id,Touch:W.aE,TouchEvent:W.bA,TouchList:W.ii,TrackDefaultList:W.ij,CompositionEvent:W.bc,FocusEvent:W.bc,TextEvent:W.bc,UIEvent:W.bc,URL:W.iG,VideoTrackList:W.iV,WheelEvent:W.bg,Window:W.cs,DOMWindow:W.cs,CSSRuleList:W.j3,ClientRect:W.dO,DOMRect:W.dO,GamepadList:W.j8,NamedNodeMap:W.e5,MozNamedAttrMap:W.e5,SpeechRecognitionResultList:W.jm,StyleSheetList:W.jr,SVGLength:P.aO,SVGLengthList:P.fL,SVGNumber:P.aR,SVGNumberList:P.ht,SVGPointList:P.hB,SVGScriptElement:P.cf,SVGStringList:P.i4,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGElement:P.k,SVGTransform:P.aT,SVGTransformList:P.ik,AudioBuffer:P.eP,AudioParamMap:P.eQ,AudioTrackList:P.eS,AudioContext:P.bm,webkitAudioContext:P.bm,BaseAudioContext:P.bm,OfflineAudioContext:P.hu,SQLResultSetRowList:P.i_})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.de.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.cw.$nativeSuperclassTag="ArrayBufferView"
H.ca.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"
H.cy.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
W.cz.$nativeSuperclassTag="EventTarget"
W.cA.$nativeSuperclassTag="EventTarget"
W.cB.$nativeSuperclassTag="EventTarget"
W.cC.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.m0,[])
else U.m0([])})})()
//# sourceMappingURL=test.dart.js.map