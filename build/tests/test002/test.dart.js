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
a[c]=function(){a[c]=function(){H.pp(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lE"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lE"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lE(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r=r+x
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
if(w[u][a])return w[u][a]}}var C={},H={lm:function lm(a){this.a=a},
k7:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
m0:function(){return new P.ds("No element")},
nS:function(){return new P.ds("Too few elements")},
a6:function a6(a){this.a=a},
ff:function ff(){},
dd:function dd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hc:function hc(a,b,c){this.a=a
this.b=b
this.$ti=c},
hd:function hd(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
iX:function iX(a,b,c){this.a=a
this.b=b
this.$ti=c},
iY:function iY(a,b,c){this.a=a
this.b=b
this.$ti=c},
bF:function bF(){},
ct:function ct(){},
dE:function dE(){},
nJ:function(){throw H.c(P.C("Cannot modify unmodifiable Map"))},
bV:function(a){var u,t
u=H.N(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
p9:function(a){return v.types[H.ae(a)]},
pe:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.a0(a).$iI},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aq(a)
if(typeof u!=="string")throw H.c(H.ap(a))
return u},
od:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fV(u)
t=u[0]
s=u[1]
return new H.hD(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cl:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
oa:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.e(u,3)
t=H.N(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ab(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.b.H(r,p)|32)>s)return}return parseInt(a,b)},
bI:function(a){return H.o1(a)+H.lC(H.bw(a),0,null)},
o1:function(a){var u,t,s,r,q,p,o,n,m
u=J.a0(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.J||!!u.$ibs){p=C.w(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bV(r.length>1&&C.b.H(r,0)===36?C.b.au(r,1):r)},
o2:function(){if(!!self.location)return self.location.href
return},
mf:function(a){var u,t,s,r,q
H.ke(a)
u=J.aF(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
ob:function(a){var u,t,s,r
u=H.h([],[P.n])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.L)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.ap(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.e.aB(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.ap(r))}return H.mf(u)},
mg:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ap(s))
if(s<0)throw H.c(H.ap(s))
if(s>65535)return H.ob(a)}return H.mf(a)},
oc:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
dl:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aB(u,10))>>>0,56320|u&1023)}}throw H.c(P.ab(a,0,1114111,null,null))},
bH:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o9:function(a){var u=H.bH(a).getFullYear()+0
return u},
o7:function(a){var u=H.bH(a).getMonth()+1
return u},
o3:function(a){var u=H.bH(a).getDate()+0
return u},
o4:function(a){var u=H.bH(a).getHours()+0
return u},
o6:function(a){var u=H.bH(a).getMinutes()+0
return u},
o8:function(a){var u=H.bH(a).getSeconds()+0
return u},
o5:function(a){var u=H.bH(a).getMilliseconds()+0
return u},
p:function(a){throw H.c(H.ap(a))},
e:function(a,b){if(a==null)J.aF(a)
throw H.c(H.bu(a,b))},
bu:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aS(!0,b,"index",null)
u=H.ae(J.aF(a))
if(!(b<0)){if(typeof u!=="number")return H.p(u)
t=b>=u}else t=!0
if(t)return P.W(b,a,"index",null,u)
return P.dn(b,"index",null)},
p2:function(a,b,c){if(a>c)return new P.bJ(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bJ(a,c,!0,b,"end","Invalid value")
return new P.aS(!0,b,"end",null)},
ap:function(a){return new P.aS(!0,a,null,null)},
c:function(a){var u
if(a==null)a=new P.dj()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.nd})
u.name=""}else u.toString=H.nd
return u},
nd:function(){return J.aq(this.dartException)},
O:function(a){throw H.c(a)},
L:function(a){throw H.c(P.bC(a))},
b4:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.h([],[P.i])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ig(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ih:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mr:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m7:function(a,b){return new H.hs(a,b==null?null:b.method)},
ln:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fZ(a,t,u?null:b.receiver)},
aE:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.lc(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.e.aB(s,16)&8191)===10)switch(r){case 438:return u.$1(H.ln(H.l(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.m7(H.l(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.ng()
p=$.nh()
o=$.ni()
n=$.nj()
m=$.nm()
l=$.nn()
k=$.nl()
$.nk()
j=$.np()
i=$.no()
h=q.a9(t)
if(h!=null)return u.$1(H.ln(H.N(t),h))
else{h=p.a9(t)
if(h!=null){h.method="call"
return u.$1(H.ln(H.N(t),h))}else{h=o.a9(t)
if(h==null){h=n.a9(t)
if(h==null){h=m.a9(t)
if(h==null){h=l.a9(t)
if(h==null){h=k.a9(t)
if(h==null){h=n.a9(t)
if(h==null){h=j.a9(t)
if(h==null){h=i.a9(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.m7(H.N(t),h))}}return u.$1(new H.iy(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dr()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aS(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dr()
return a},
bT:function(a){var u
if(a==null)return new H.eh(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eh(a)},
p5:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.m(0,a[t],a[s])}return b},
pd:function(a,b,c,d,e,f){H.d(a,"$ilj")
switch(H.ae(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.V("Unsupported number of arguments for wrapped closure"))},
bR:function(a,b){var u
H.ae(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pd)
a.$identity=u
return u},
nI:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.a0(d).$ib){u.$reflectionInfo=d
s=H.od(u).r}else s=d
r=e?Object.create(new H.hX().constructor.prototype):Object.create(new H.c0(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aT
if(typeof p!=="number")return p.l()
$.aT=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.lW(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.p9,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.lU:H.lh
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.lW(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
nF:function(a,b,c,d){var u=H.lh
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lW:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nH(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nF(t,!r,u,b)
if(t===0){r=$.aT
if(typeof r!=="number")return r.l()
$.aT=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c1
if(q==null){q=H.eW("self")
$.c1=q}return new Function(r+H.l(q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aT
if(typeof r!=="number")return r.l()
$.aT=r+1
o+=r
r="return function("+o+"){return this."
q=$.c1
if(q==null){q=H.eW("self")
$.c1=q}return new Function(r+H.l(q)+"."+H.l(u)+"("+o+");}")()},
nG:function(a,b,c,d){var u,t
u=H.lh
t=H.lU
switch(b?-1:a){case 0:throw H.c(H.oh("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nH:function(a,b){var u,t,s,r,q,p,o,n
u=$.c1
if(u==null){u=H.eW("self")
$.c1=u}t=$.lT
if(t==null){t=H.eW("receiver")
$.lT=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nG(r,!p,s,b)
if(r===1){u="return function(){return this."+H.l(u)+"."+H.l(s)+"(this."+H.l(t)+");"
t=$.aT
if(typeof t!=="number")return t.l()
$.aT=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.l(u)+"."+H.l(s)+"(this."+H.l(t)+", "+n+");"
t=$.aT
if(typeof t!=="number")return t.l()
$.aT=t+1
return new Function(u+t+"}")()},
lE:function(a,b,c,d,e,f,g){return H.nI(a,b,H.ae(c),d,!!e,!!f,g)},
lh:function(a){return a.a},
lU:function(a){return a.c},
eW:function(a){var u,t,s,r,q
u=new H.c0("self","target","receiver","name")
t=J.fV(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
N:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aQ(a,"String"))},
p3:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aQ(a,"double"))},
pj:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aQ(a,"num"))},
mY:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aQ(a,"bool"))},
ae:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aQ(a,"int"))},
na:function(a,b){throw H.c(H.aQ(a,H.bV(H.N(b).substring(2))))},
pl:function(a,b){throw H.c(H.nE(a,H.bV(H.N(b).substring(2))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.a0(a)[b])return a
H.na(a,b)},
al:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.a0(a)[b]
else u=!0
if(u)return a
H.pl(a,b)},
ke:function(a){if(a==null)return a
if(!!J.a0(a).$ib)return a
throw H.c(H.aQ(a,"List<dynamic>"))},
n7:function(a,b){var u
if(a==null)return a
u=J.a0(a)
if(!!u.$ib)return a
if(u[b])return a
H.na(a,b)},
n0:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ae(u)]
else return a.$S()}return},
eE:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.n0(J.a0(a))
if(u==null)return!1
return H.mO(u,null,b,null)},
f:function(a,b){var u,t
if(a==null)return a
if($.lz)return a
$.lz=!0
try{if(H.eE(a,b))return a
u=H.l7(b)
t=H.aQ(a,u)
throw H.c(t)}finally{$.lz=!1}},
lG:function(a,b){if(a!=null&&!H.lD(a,b))H.O(H.aQ(a,H.l7(b)))
return a},
aQ:function(a,b){return new H.ii("TypeError: "+P.fi(a)+": type '"+H.mT(a)+"' is not a subtype of type '"+b+"'")},
nE:function(a,b){return new H.eX("CastError: "+P.fi(a)+": type '"+H.mT(a)+"' is not a subtype of type '"+b+"'")},
mT:function(a){var u,t
u=J.a0(a)
if(!!u.$ic4){t=H.n0(u)
if(t!=null)return H.l7(t)
return"Closure"}return H.bI(a)},
pp:function(a){throw H.c(new P.f8(H.N(a)))},
oh:function(a){return new H.hK(a)},
n1:function(a){return v.getIsolateTag(a)},
h:function(a,b){a.$ti=b
return a},
bw:function(a){if(a==null)return
return a.$ti},
q4:function(a,b,c){return H.bU(a["$a"+H.l(c)],H.bw(b))},
bv:function(a,b,c,d){var u
H.N(c)
H.ae(d)
u=H.bU(a["$a"+H.l(c)],H.bw(b))
return u==null?null:u[d]},
aD:function(a,b,c){var u
H.N(b)
H.ae(c)
u=H.bU(a["$a"+H.l(b)],H.bw(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.ae(b)
u=H.bw(a)
return u==null?null:u[b]},
l7:function(a){return H.bt(a,null)},
bt:function(a,b){var u,t
H.o(b,"$ib",[P.i],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bV(a[0].name)+H.lC(a,1,b)
if(typeof a=="function")return H.bV(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ae(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.l(b[t])}if('func' in a)return H.oR(a,b)
if('futureOr' in a)return"FutureOr<"+H.bt("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oR:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.i]
H.o(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.h([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.e(b,m)
o=C.b.l(o,b[m])
l=t[p]
if(l!=null&&l!==P.P)o+=" extends "+H.bt(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bt(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bt(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bt(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.p4(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.N(u[g])
i=i+h+H.bt(d[c],b)+(" "+H.l(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
lC:function(a,b,c){var u,t,s,r,q,p
H.o(c,"$ib",[P.i],"$ab")
if(a==null)return""
u=new P.at("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bt(p,c)}return"<"+u.i(0)+">"},
bU:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cM:function(a,b,c,d){var u,t
H.N(b)
H.ke(c)
H.N(d)
if(a==null)return!1
u=H.bw(a)
t=J.a0(a)
if(t[b]==null)return!1
return H.mW(H.bU(t[d],u),null,c,null)},
o:function(a,b,c,d){H.N(b)
H.ke(c)
H.N(d)
if(a==null)return a
if(H.cM(a,b,c,d))return a
throw H.c(H.aQ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bV(b.substring(2))+H.lC(c,0,null),v.mangledGlobalNames)))},
mW:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aC(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aC(a[t],b,c[t],d))return!1
return!0},
q2:function(a,b,c){return a.apply(b,H.bU(J.a0(b)["$a"+H.l(c)],H.bw(b)))},
n4:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="P"||a.name==="D"||a===-1||a===-2||H.n4(u)}return!1},
lD:function(a,b){var u,t
if(a==null)return b==null||b.name==="P"||b.name==="D"||b===-1||b===-2||H.n4(b)
if(b==null||b===-1||b.name==="P"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lD(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eE(a,b)}u=J.a0(a).constructor
t=H.bw(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aC(u,null,b,null)},
x:function(a,b){if(a!=null&&!H.lD(a,b))throw H.c(H.aQ(a,H.l7(b)))
return a},
aC:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="P"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="P"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aC(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="D")return!0
if('func' in c)return H.mO(a,b,c,d)
if('func' in a)return c.name==="lj"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aC("type" in a?a.type:null,b,s,d)
else if(H.aC(a,b,s,d))return!0
else{if(!('$i'+"cb" in t.prototype))return!1
r=t.prototype["$a"+"cb"]
q=H.bU(r,u?a.slice(1):null)
return H.aC(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.mW(H.bU(m,u),b,p,d)},
mO:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aC(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aC(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aC(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aC(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pi(h,b,g,d)},
pi:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aC(c[r],d,a[r],b))return!1}return!0},
q3:function(a,b,c){Object.defineProperty(a,H.N(b),{value:c,enumerable:false,writable:true,configurable:true})},
pg:function(a){var u,t,s,r,q,p
u=H.N($.n2.$1(a))
t=$.k2[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kb[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.N($.mV.$2(a,u))
if(u!=null){t=$.k2[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kb[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.l6(s)
$.k2[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.kb[u]=s
return s}if(q==="-"){p=H.l6(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.n9(a,s)
if(q==="*")throw H.c(P.ix(u))
if(v.leafTags[u]===true){p=H.l6(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.n9(a,s)},
n9:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lJ(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
l6:function(a){return J.lJ(a,!1,null,!!a.$iI)},
ph:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.l6(u)
else return J.lJ(u,c,null,null)},
pb:function(){if(!0===$.lI)return
$.lI=!0
H.pc()},
pc:function(){var u,t,s,r,q,p,o,n
$.k2=Object.create(null)
$.kb=Object.create(null)
H.pa()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.nb.$1(q)
if(p!=null){o=H.ph(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pa:function(){var u,t,s,r,q,p,o
u=C.O()
u=H.bQ(C.L,H.bQ(C.Q,H.bQ(C.v,H.bQ(C.v,H.bQ(C.P,H.bQ(C.M,H.bQ(C.N(C.w),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.n2=new H.k8(q)
$.mV=new H.k9(p)
$.nb=new H.ka(o)},
bQ:function(a,b){return a(b)||b},
nU:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a5("Illegal RegExp pattern ("+String(r)+")",a,null))},
po:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
nc:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
f2:function f2(){},
f3:function f3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hD:function hD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
ig:function ig(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hs:function hs(a,b){this.a=a
this.b=b},
fZ:function fZ(a,b,c){this.a=a
this.b=b
this.c=c},
iy:function iy(a){this.a=a},
lc:function lc(a){this.a=a},
eh:function eh(a){this.a=a
this.b=null},
c4:function c4(){},
i4:function i4(){},
hX:function hX(){},
c0:function c0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ii:function ii(a){this.a=a},
eX:function eX(a){this.a=a},
hK:function hK(a){this.a=a},
aw:function aw(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
h2:function h2(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
h3:function h3(a,b){this.a=a
this.$ti=b},
h4:function h4(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
k8:function k8(a){this.a=a},
k9:function k9(a){this.a=a},
ka:function ka(a){this.a=a},
fY:function fY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jQ:function(a){return a},
o0:function(a){return new Int8Array(a)},
b7:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bu(b,a))},
oP:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.p2(a,b,c))
return b},
ch:function ch(){},
bp:function bp(){},
dg:function dg(){},
ci:function ci(){},
dh:function dh(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(){},
hp:function hp(){},
hq:function hq(){},
di:function di(){},
cj:function cj(){},
cz:function cz(){},
cA:function cA(){},
cB:function cB(){},
cC:function cC(){},
p4:function(a){return J.m1(a?Object.keys(a):[],null)},
pk:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lJ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eF:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.lI==null){H.pb()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.ix("Return interceptor for "+H.l(t(a,u))))}r=a.constructor
q=r==null?null:r[$.lM()]
if(q!=null)return q
q=H.pg(a)
if(q!=null)return q
if(typeof a=="function")return C.R
t=Object.getPrototypeOf(a)
if(t==null)return C.A
if(t===Object.prototype)return C.A
if(typeof r=="function"){Object.defineProperty(r,$.lM(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
nT:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.lg(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ab(a,0,4294967295,"length",null))
return J.m1(new Array(a),b)},
m1:function(a,b){return J.fV(H.h(a,[b]))},
fV:function(a){H.ke(a)
a.fixed$length=Array
return a},
a0:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d8.prototype
return J.fX.prototype}if(typeof a=="string")return J.b8.prototype
if(a==null)return J.d9.prototype
if(typeof a=="boolean")return J.fW.prototype
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.P)return a
return J.eF(a)},
p6:function(a){if(typeof a=="number")return J.bn.prototype
if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.P)return a
return J.eF(a)},
bS:function(a){if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.P)return a
return J.eF(a)},
k4:function(a){if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.P)return a
return J.eF(a)},
p7:function(a){if(typeof a=="number")return J.bn.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bs.prototype
return a},
p8:function(a){if(typeof a=="number")return J.bn.prototype
if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bs.prototype
return a},
lH:function(a){if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bs.prototype
return a},
bg:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.P)return a
return J.eF(a)},
nx:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.p6(a).l(a,b)},
K:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a0(a).B(a,b)},
lO:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.p8(a).u(a,b)},
ny:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.p7(a).n(a,b)},
lP:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pe(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bS(a).j(a,b)},
ld:function(a,b,c){return J.k4(a).m(a,b,c)},
nz:function(a,b){return J.lH(a).H(a,b)},
le:function(a,b,c){return J.bg(a).ha(a,b,c)},
nA:function(a,b,c,d){return J.bg(a).hL(a,b,c,d)},
lQ:function(a,b){return J.bg(a).W(a,b)},
nB:function(a,b){return J.lH(a).Z(a,b)},
lf:function(a,b){return J.k4(a).J(a,b)},
nC:function(a,b,c,d){return J.bg(a).ig(a,b,c,d)},
lR:function(a,b){return J.k4(a).v(a,b)},
eI:function(a){return J.bg(a).gbX(a)},
cP:function(a){return J.a0(a).gI(a)},
c_:function(a){return J.k4(a).ga_(a)},
aF:function(a){return J.bS(a).gk(a)},
nD:function(a,b){return J.bg(a).iS(a,b)},
aq:function(a){return J.a0(a).i(a)},
a:function a(){},
fW:function fW(){},
d9:function d9(){},
da:function da(){},
hw:function hw(){},
bs:function bs(){},
b9:function b9(){},
aH:function aH(a){this.$ti=a},
ll:function ll(a){this.$ti=a},
au:function au(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bn:function bn(){},
d8:function d8(){},
fX:function fX(){},
b8:function b8(){}},P={
ou:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.oZ()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bR(new P.j_(u),1)).observe(t,{childList:true})
return new P.iZ(u,t,s)}else if(self.setImmediate!=null)return P.p_()
return P.p0()},
ov:function(a){self.scheduleImmediate(H.bR(new P.j0(H.f(a,{func:1,ret:-1})),0))},
ow:function(a){self.setImmediate(H.bR(new P.j1(H.f(a,{func:1,ret:-1})),0))},
ox:function(a){P.lq(C.p,H.f(a,{func:1,ret:-1}))},
lq:function(a,b){var u
H.f(b,{func:1,ret:-1})
u=C.e.aC(a.a,1000)
return P.oA(u<0?0:u,b)},
mq:function(a,b){var u
H.f(b,{func:1,ret:-1,args:[P.b2]})
u=C.e.aC(a.a,1000)
return P.oB(u<0?0:u,b)},
oA:function(a,b){var u=new P.eo(!0)
u.ep(a,b)
return u},
oB:function(a,b){var u=new P.eo(!1)
u.eq(a,b)
return u},
oy:function(a,b){var u,t,s
b.a=1
try{a.dS(new P.ja(b),new P.jb(b),null)}catch(s){u=H.aE(s)
t=H.bT(s)
P.pm(new P.jc(b,u,t))}},
mD:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.d(a.c,"$iaB")
if(u>=4){t=b.bJ()
b.a=a.a
b.c=a.c
P.cx(b,t)}else{t=H.d(b.c,"$ib6")
b.a=2
b.c=a
a.cU(t)}},
cx:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.d(t.c,"$iai")
t=t.b
p=q.a
o=q.b
t.toString
P.jR(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cx(u.a,b)}t=u.a
m=t.c
s.a=r
s.b=m
p=!r
if(p){o=b.c
o=(o&1)!==0||o===8}else o=!0
if(o){o=b.b
l=o.b
if(r){k=t.b
k.toString
k=k==l
if(!k)l.toString
else k=!0
k=!k}else k=!1
if(k){H.d(m,"$iai")
t=t.b
p=m.a
o=m.b
t.toString
P.jR(null,null,t,p,o)
return}j=$.Y
if(j!=l)$.Y=l
else j=null
t=b.c
if(t===8)new P.jg(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.jf(s,b,m).$0()}else if((t&2)!==0)new P.je(u,s,b).$0()
if(j!=null)$.Y=j
t=s.b
if(!!J.a0(t).$icb){if(t.a>=4){i=H.d(o.c,"$ib6")
o.c=null
b=o.b7(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.mD(t,o)
return}}h=b.b
i=H.d(h.c,"$ib6")
h.c=null
b=h.b7(i)
t=s.a
p=s.b
if(!t){H.x(p,H.u(h,0))
h.a=4
h.c=p}else{H.d(p,"$iai")
h.a=8
h.c=p}u.a=h
t=h}},
oU:function(a,b){if(H.eE(a,{func:1,args:[P.P,P.ao]}))return H.f(a,{func:1,ret:null,args:[P.P,P.ao]})
if(H.eE(a,{func:1,args:[P.P]}))return H.f(a,{func:1,ret:null,args:[P.P]})
throw H.c(P.lg(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oT:function(){var u,t
for(;u=$.bP,u!=null;){$.cL=null
t=u.b
$.bP=t
if(t==null)$.cK=null
u.a.$0()}},
oY:function(){$.lA=!0
try{P.oT()}finally{$.cL=null
$.lA=!1
if($.bP!=null)$.lN().$1(P.mX())}},
mS:function(a){var u=new P.dM(H.f(a,{func:1,ret:-1}))
if($.bP==null){$.cK=u
$.bP=u
if(!$.lA)$.lN().$1(P.mX())}else{$.cK.b=u
$.cK=u}},
oX:function(a){var u,t,s
H.f(a,{func:1,ret:-1})
u=$.bP
if(u==null){P.mS(a)
$.cL=$.cK
return}t=new P.dM(a)
s=$.cL
if(s==null){t.b=u
$.cL=t
$.bP=t}else{t.b=s.b
s.b=t
$.cL=t
if(t.b==null)$.cK=t}},
pm:function(a){var u,t
u={func:1,ret:-1}
H.f(a,u)
t=$.Y
if(C.f===t){P.jT(null,null,C.f,a)
return}t.toString
P.jT(null,null,t,H.f(t.bT(a),u))},
mp:function(a,b){var u,t
u={func:1,ret:-1}
H.f(b,u)
t=$.Y
if(t===C.f){t.toString
return P.lq(a,b)}return P.lq(a,H.f(t.bT(b),u))},
om:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.b2]}
H.f(b,u)
t=$.Y
if(t===C.f){t.toString
return P.mq(a,b)}s=t.d8(b,P.b2)
$.Y.toString
return P.mq(a,H.f(s,u))},
jR:function(a,b,c,d,e){var u={}
u.a=d
P.oX(new P.jS(u,e))},
mP:function(a,b,c,d,e){var u,t
H.f(d,{func:1,ret:e})
t=$.Y
if(t===c)return d.$0()
$.Y=c
u=t
try{t=d.$0()
return t}finally{$.Y=u}},
mQ:function(a,b,c,d,e,f,g){var u,t
H.f(d,{func:1,ret:f,args:[g]})
H.x(e,g)
t=$.Y
if(t===c)return d.$1(e)
$.Y=c
u=t
try{t=d.$1(e)
return t}finally{$.Y=u}},
oV:function(a,b,c,d,e,f,g,h,i){var u,t
H.f(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
t=$.Y
if(t===c)return d.$2(e,f)
$.Y=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Y=u}},
jT:function(a,b,c,d){var u
H.f(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bT(d):c.hR(d,-1)
P.mS(d)},
j_:function j_(a){this.a=a},
iZ:function iZ(a,b,c){this.a=a
this.b=b
this.c=c},
j0:function j0(a){this.a=a},
j1:function j1(a){this.a=a},
eo:function eo(a){this.a=a
this.b=null
this.c=0},
jz:function jz(a,b){this.a=a
this.b=b},
jy:function jy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b6:function b6(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aB:function aB(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
j9:function j9(a,b){this.a=a
this.b=b},
jd:function jd(a,b){this.a=a
this.b=b},
ja:function ja(a){this.a=a},
jb:function jb(a){this.a=a},
jc:function jc(a,b,c){this.a=a
this.b=b
this.c=c},
jg:function jg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jh:function jh(a){this.a=a},
jf:function jf(a,b,c){this.a=a
this.b=b
this.c=c},
je:function je(a,b,c){this.a=a
this.b=b
this.c=c},
dM:function dM(a){this.a=a
this.b=null},
i_:function i_(){},
i1:function i1(a,b){this.a=a
this.b=b},
i2:function i2(a,b){this.a=a
this.b=b},
cp:function cp(){},
i0:function i0(){},
b2:function b2(){},
ai:function ai(a,b){this.a=a
this.b=b},
jJ:function jJ(){},
jS:function jS(a,b){this.a=a
this.b=b},
jo:function jo(){},
jq:function jq(a,b,c){this.a=a
this.b=b
this.c=c},
jp:function jp(a,b){this.a=a
this.b=b},
jr:function jr(a,b,c){this.a=a
this.b=b
this.c=c},
nV:function(a,b,c,d,e){return new H.aw([d,e])},
m3:function(a,b){return new H.aw([a,b])},
nW:function(a){return H.p5(a,new H.aw([null,null]))},
nX:function(a,b,c,d){return new P.jl([d])},
mG:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mF:function(a,b,c){var u=new P.jm(a,b,[c])
u.c=a.e
return u},
nR:function(a,b,c){var u,t
if(P.lB(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.h([],[P.i])
t=$.cO()
C.a.h(t,a)
try{P.oS(a,u)}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}t=P.mn(b,H.n7(u,"$ik"),", ")+c
return t.charCodeAt(0)==0?t:t},
lk:function(a,b,c){var u,t,s
if(P.lB(a))return b+"..."+c
u=new P.at(b)
t=$.cO()
C.a.h(t,a)
try{s=u
s.a=P.mn(s.a,a,", ")}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lB:function(a){var u,t
for(u=0;t=$.cO(),u<t.length;++u)if(a===t[u])return!0
return!1},
oS:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.o(b,"$ib",[P.i],"$ab")
u=a.ga_(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.F())return
r=H.l(u.gM(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.F()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gM(u);++s
if(!u.F()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gM(u);++s
for(;u.F();o=n,n=m){m=u.gM(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.l(o)
q=H.l(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
m4:function(a,b,c){var u=P.nV(null,null,null,b,c)
a.v(0,new P.h5(u,b,c))
return u},
lo:function(a){var u,t
u={}
if(P.lB(a))return"{...}"
t=new P.at("")
try{C.a.h($.cO(),a)
t.a+="{"
u.a=!0
J.lR(a,new P.ha(u,t))
t.a+="}"}finally{u=$.cO()
if(0>=u.length)return H.e(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
jl:function jl(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cy:function cy(a){this.a=a
this.c=this.b=null},
jm:function jm(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
h5:function h5(a,b,c){this.a=a
this.b=b
this.c=c},
h6:function h6(){},
v:function v(){},
h9:function h9(){},
ha:function ha(a,b){this.a=a
this.b=b},
af:function af(){},
jA:function jA(){},
hb:function hb(){},
dF:function dF(a,b){this.a=a
this.$ti=b},
js:function js(){},
e0:function e0(){},
et:function et(){},
op:function(a,b,c,d){H.o(b,"$ib",[P.n],"$ab")
if(b instanceof Uint8Array)return P.oq(!1,b,c,d)
return},
oq:function(a,b,c,d){var u,t,s
u=$.nq()
if(u==null)return
t=0===c
if(t&&!0)return P.lt(u,b)
s=b.length
d=P.be(c,d,s,null,null,null)
if(t&&d===s)return P.lt(u,b)
return P.lt(u,b.subarray(c,d))},
lt:function(a,b){if(P.os(b))return
return P.ot(a,b)},
ot:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aE(t)}return},
os:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
or:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aE(t)}return},
oW:function(a,b,c){var u,t,s
H.o(a,"$ib",[P.n],"$ab")
for(u=J.bS(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bj()
if((s&127)!==s)return t-b}return c-b},
lS:function(a,b,c,d,e,f){if(C.e.b1(f,4)!==0)throw H.c(P.a5("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a5("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a5("Invalid base64 padding, more than two '=' characters",a,b))},
eT:function eT(a){this.a=a},
eU:function eU(a){this.a=a},
bB:function bB(){},
bD:function bD(){},
fg:function fg(){},
iG:function iG(a){this.a=a},
iI:function iI(){},
jI:function jI(a){this.b=this.a=0
this.c=a},
iH:function iH(a){this.a=a},
jG:function jG(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
jH:function jH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eG:function(a,b,c){var u
H.f(b,{func:1,ret:P.n,args:[P.i]})
u=H.oa(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a5(a,null,null))},
nN:function(a){if(a instanceof H.c4)return a.i(0)
return"Instance of '"+H.bI(a)+"'"},
nY:function(a,b,c,d){var u,t
H.x(b,d)
u=J.nT(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.m(u,t,b)
return H.o(u,"$ib",[d],"$ab")},
nZ:function(a,b,c){var u,t,s
u=[c]
t=H.h([],u)
for(s=a.ga_(a);s.F();)C.a.h(t,H.x(s.gM(s),c))
if(b)return t
return H.o(J.fV(t),"$ib",u,"$ab")},
dt:function(a,b,c){var u,t
u=P.n
H.o(a,"$ik",[u],"$ak")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.o(a,"$iaH",[u],"$aaH")
t=a.length
c=P.be(b,c,t,null,null,null)
return H.mg(b>0||c<t?C.a.ea(a,b,c):a)}if(!!J.a0(a).$icj)return H.oc(a,b,P.be(b,c,a.length,null,null,null))
return P.oj(a,b,c)},
oj:function(a,b,c){var u,t,s,r
H.o(a,"$ik",[P.n],"$ak")
if(b<0)throw H.c(P.ab(b,0,J.aF(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.ab(c,b,J.aF(a),null,null))
t=J.c_(a)
for(s=0;s<b;++s)if(!t.F())throw H.c(P.ab(b,0,s,null,null))
r=[]
if(u)for(;t.F();)r.push(t.gM(t))
else for(s=b;s<c;++s){if(!t.F())throw H.c(P.ab(c,b,s,null,null))
r.push(t.gM(t))}return H.mg(r)},
of:function(a,b,c){return new H.fY(a,H.nU(a,!1,!0,!1))},
mn:function(a,b,c){var u=J.c_(b)
if(!u.F())return a
if(c.length===0){do a+=H.l(u.gM(u))
while(u.F())}else{a+=H.l(u.gM(u))
for(;u.F();)a=a+c+H.l(u.gM(u))}return a},
dG:function(){var u=H.o2()
if(u!=null)return P.oo(u,0,null)
throw H.c(P.C("'Uri.base' is not supported"))},
jF:function(a,b,c,d){var u,t,s,r,q,p
H.o(a,"$ib",[P.n],"$ab")
if(c===C.i){u=$.nv().b
if(typeof b!=="string")H.O(H.ap(b))
u=u.test(b)}else u=!1
if(u)return b
H.x(b,H.aD(c,"bB",0))
t=c.gie().bY(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.dl(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
nK:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nL:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cY:function(a){if(a>=10)return""+a
return"0"+a},
lZ:function(a,b,c,d,e,f){return new P.aW(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
fi:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aq(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nN(a)},
eN:function(a){return new P.aS(!1,null,null,a)},
lg:function(a,b,c){return new P.aS(!0,a,b,c)},
dn:function(a,b,c){return new P.bJ(null,null,!0,a,b,"Value not in range")},
ab:function(a,b,c,d,e){return new P.bJ(b,c,!0,a,d,"Invalid value")},
be:function(a,b,c,d,e,f){if(typeof a!=="number")return H.p(a)
if(0>a||a>c)throw H.c(P.ab(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.ab(b,a,c,"end",f))
return b}return c},
W:function(a,b,c,d,e){var u=H.ae(e==null?J.aF(b):e)
return new P.fs(b,u,!0,a,c,"Index out of range")},
C:function(a){return new P.iz(a)},
ix:function(a){return new P.iw(a)},
bC:function(a){return new P.f1(a)},
V:function(a){return new P.dU(a)},
a5:function(a,b,c){return new P.fq(a,b,c)},
o_:function(a,b,c,d){var u,t
H.f(b,{func:1,ret:d,args:[P.n]})
u=H.h([],[d])
C.a.sk(u,a)
for(t=0;t<a;++t)C.a.m(u,t,b.$1(t))
return u},
lK:function(a){H.pk(a)},
oo:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.b.H(a,b+4)^58)*3|C.b.H(a,b)^100|C.b.H(a,b+1)^97|C.b.H(a,b+2)^116|C.b.H(a,b+3)^97)>>>0
if(t===0)return P.ms(b>0||c<c?C.b.A(a,b,c):a,5,null).gdV()
else if(t===32)return P.ms(C.b.A(a,u,c),0,null).gdV()}s=new Array(8)
s.fixed$length=Array
r=H.h(s,[P.n])
C.a.m(r,0,0)
s=b-1
C.a.m(r,1,s)
C.a.m(r,2,s)
C.a.m(r,7,s)
C.a.m(r,3,b)
C.a.m(r,4,b)
C.a.m(r,5,c)
C.a.m(r,6,c)
if(P.mR(a,b,c,0,r)>=14)C.a.m(r,7,c)
q=r[1]
if(typeof q!=="number")return q.jc()
if(q>=b)if(P.mR(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.l()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.T()
if(typeof m!=="number")return H.p(m)
if(l<m)m=l
if(typeof n!=="number")return n.T()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.T()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.T()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.b.a7(a,"..",n)))i=m>n+2&&C.b.a7(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.b.a7(a,"file",b)){if(p<=b){if(!C.b.a7(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.b.A(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.b.aL(a,n,m,"/");++m;++l;++c}else{a=C.b.A(a,b,n)+"/"+C.b.A(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.b.a7(a,"http",b)){if(s&&o+3===n&&C.b.a7(a,"80",o+1))if(b===0&&!0){a=C.b.aL(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.b.A(a,b,o)+C.b.A(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.b.a7(a,"https",b)){if(s&&o+4===n&&C.b.a7(a,"443",o+1))if(b===0&&!0){a=C.b.aL(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.b.A(a,b,o)+C.b.A(a,n,c)
q-=b
p-=b
o-=b
u=4+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="https"}else j=null
k=!0}}}else j=null
if(k){if(b>0||c<a.length){a=C.b.A(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.jt(a,q,p,o,n,m,l,j)}return P.oC(a,b,c,q,p,o,n,m,l,j)},
mu:function(a,b){var u=P.i
return C.a.im(H.h(a.split("&"),[u]),P.m3(u,u),new P.iE(b),[P.A,P.i,P.i])},
on:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.iB(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.b.Z(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.eG(C.b.A(a,q,r),null,null)
if(typeof n!=="number")return n.bm()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.e(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.eG(C.b.A(a,q,c),null,null)
if(typeof n!=="number")return n.bm()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.e(t,p)
t[p]=n
return t},
mt:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.iC(a)
t=new P.iD(u,a)
if(a.length<2)u.$1("address is too short")
s=H.h([],[P.n])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.Z(a,r)
if(n===58){if(r===b){++r
if(C.b.Z(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gas(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.on(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.e.aB(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
oC:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.oJ(a,b,d)
else{if(d===b)P.cH(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oK(a,u,e-1):""
s=P.oG(a,e,f,!1)
if(typeof f!=="number")return f.l()
r=f+1
if(typeof g!=="number")return H.p(g)
q=r<g?P.oI(P.eG(C.b.A(a,r,g),new P.jB(a,f),null),j):null}else{t=""
s=null
q=null}p=P.oH(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.T()
o=h<i?P.lx(a,h+1,i,null):null
return new P.bO(j,t,s,q,p,o,i<c?P.oF(a,i+1,c):null)},
mH:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cH:function(a,b,c){throw H.c(P.a5(c,a,b))},
oI:function(a,b){if(a!=null&&a===P.mH(b))return
return a},
oG:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.Z(a,b)===91){if(typeof c!=="number")return c.n()
u=c-1
if(C.b.Z(a,u)!==93)P.cH(a,b,"Missing end `]` to match `[` in host")
P.mt(a,b+1,u)
return C.b.A(a,b,c).toLowerCase()}if(typeof c!=="number")return H.p(c)
t=b
for(;t<c;++t)if(C.b.Z(a,t)===58){P.mt(a,b,c)
return"["+a+"]"}return P.oM(a,b,c)},
oM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.p(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.Z(a,u)
if(q===37){p=P.mN(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.at("")
n=C.b.A(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.A(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.y,o)
o=(C.y[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.at("")
if(t<u){s.a+=C.b.A(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.cH(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.Z(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.at("")
n=C.b.A(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mI(q)
u+=l
t=u}}}}if(s==null)return C.b.A(a,b,c)
if(t<c){n=C.b.A(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oJ:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mK(C.b.H(a,b)))P.cH(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.H(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cH(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.A(a,b,c)
return P.oD(t?a.toLowerCase():a)},
oD:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oK:function(a,b,c){return P.cI(a,b,c,C.T,!1)},
oH:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.cI(a,b,c,C.z,!0):C.K.jf(d,new P.jC(),P.i).E(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.b.a6(r,"/"))r="/"+r
return P.oL(r,e,f)},
oL:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a6(a,"/"))return P.oN(a,!u||c)
return P.oO(a)},
lx:function(a,b,c,d){var u,t
u={}
H.o(d,"$iA",[P.i,null],"$aA")
if(a!=null){if(d!=null)throw H.c(P.eN("Both query and queryParameters specified"))
return P.cI(a,b,c,C.l,!0)}if(d==null)return
t=new P.at("")
u.a=""
d.v(0,new P.jD(new P.jE(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
oF:function(a,b,c){return P.cI(a,b,c,C.l,!0)},
mN:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.b.Z(a,b+1)
s=C.b.Z(a,u)
r=H.k7(t)
q=H.k7(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.e.aB(p,4)
if(u>=8)return H.e(C.n,u)
u=(C.n[u]&1<<(p&15))!==0}else u=!1
if(u)return H.dl(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.b.A(a,b,b+3).toUpperCase()
return},
mI:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.h(u,[P.n])
C.a.m(t,0,37)
C.a.m(t,1,C.b.H("0123456789ABCDEF",a>>>4))
C.a.m(t,2,C.b.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.h(u,[P.n])
for(q=0;--r,r>=0;s=128){p=C.e.hn(a,6*r)&63|s
C.a.m(t,q,37)
C.a.m(t,q+1,C.b.H("0123456789ABCDEF",p>>>4))
C.a.m(t,q+2,C.b.H("0123456789ABCDEF",p&15))
q+=3}}return P.dt(t,0,null)},
cI:function(a,b,c,d,e){var u=P.mM(a,b,c,H.o(d,"$ib",[P.n],"$ab"),e)
return u==null?C.b.A(a,b,c):u},
mM:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.o(d,"$ib",[P.n],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.T()
if(typeof c!=="number")return H.p(c)
if(!(t<c))break
c$0:{q=C.b.Z(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mN(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.k,p)
p=(C.k[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cH(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.Z(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mI(q)}}if(r==null)r=new P.at("")
r.a+=C.b.A(a,s,t)
r.a+=H.l(o)
if(typeof n!=="number")return H.p(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.T()
if(s<c)r.a+=C.b.A(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mL:function(a){if(C.b.a6(a,"."))return!0
return C.b.dv(a,"/.")!==-1},
oO:function(a){var u,t,s,r,q,p,o
if(!P.mL(a))return a
u=H.h([],[P.i])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.K(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.E(u,"/")},
oN:function(a,b){var u,t,s,r,q,p
if(!P.mL(a))return!b?P.mJ(a):a
u=H.h([],[P.i])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gas(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gas(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.m(u,0,P.mJ(u[0]))}return C.a.E(u,"/")},
mJ:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.mK(J.nz(a,0)))for(t=1;t<u;++t){s=C.b.H(a,t)
if(s===58)return C.b.A(a,0,t)+"%3A"+C.b.au(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.e(C.m,r)
r=(C.m[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
oE:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.H(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.eN("Invalid URL encoding"))}}return u},
ly:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.b.H(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.i!==d)r=!1
else r=!0
if(r)return C.b.A(a,b,c)
else q=new H.a6(C.b.A(a,b,c))}else{q=H.h([],[P.n])
for(r=a.length,t=b;t<c;++t){s=C.b.H(a,t)
if(s>127)throw H.c(P.eN("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.eN("Truncated URI"))
C.a.h(q,P.oE(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.o(q,"$ib",[P.n],"$ab")
return new P.iH(!1).bY(q)},
mK:function(a){var u=a|32
return 97<=u&&u<=122},
ms:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.h([b-1],[P.n])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.b.H(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a5("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a5("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.b.H(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gas(u)
if(q!==44||s!==o+7||!C.b.a7(a,"base64",o+1))throw H.c(P.a5("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.E.iy(0,a,n,t)
else{m=P.mM(a,n,t,C.l,!0)
if(m!=null)a=C.b.aL(a,n,t,m)}return new P.iA(a,u,c)},
oQ:function(){var u,t,s,r,q
u=P.o_(22,new P.jN(),!0,P.S)
t=new P.jM(u)
s=new P.jO()
r=new P.jP()
q=H.d(t.$2(0,225),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(14,225),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(15,225),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(1,225),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(2,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(3,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(4,229),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(5,229),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(6,231),"$iS")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(7,231),"$iS")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.d(t.$2(8,8),"$iS"),"]",5)
q=H.d(t.$2(9,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(16,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(17,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(10,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(18,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(19,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(11,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(12,236),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.d(t.$2(13,237),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.d(t.$2(20,245),"$iS"),"az",21)
q=H.d(t.$2(21,245),"$iS")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
mR:function(a,b,c,d,e){var u,t,s,r,q
H.o(e,"$ib",[P.n],"$ab")
u=$.nw()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.b.H(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.m(e,q>>>5,t)}return d},
M:function M(){},
aj:function aj(a,b){this.a=a
this.b=b},
r:function r(){},
aW:function aW(a){this.a=a},
fd:function fd(){},
fe:function fe(){},
bl:function bl(){},
dj:function dj(){},
aS:function aS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bJ:function bJ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fs:function fs(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
iz:function iz(a){this.a=a},
iw:function iw(a){this.a=a},
ds:function ds(a){this.a=a},
f1:function f1(a){this.a=a},
hv:function hv(){},
dr:function dr(){},
f8:function f8(a){this.a=a},
dU:function dU(a){this.a=a},
fq:function fq(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
k:function k(){},
aX:function aX(){},
b:function b(){},
A:function A(){},
D:function D(){},
a4:function a4(){},
P:function P(){},
ao:function ao(){},
i:function i(){},
at:function at(a){this.a=a},
iE:function iE(a){this.a=a},
iB:function iB(a){this.a=a},
iC:function iC(a){this.a=a},
iD:function iD(a,b){this.a=a
this.b=b},
bO:function bO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
jB:function jB(a,b){this.a=a
this.b=b},
jC:function jC(){},
jE:function jE(a,b){this.a=a
this.b=b},
jD:function jD(a){this.a=a},
iA:function iA(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function jN(){},
jM:function jM(a){this.a=a},
jO:function jO(){},
jP:function jP(){},
jt:function jt(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
j5:function j5(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
bf:function(a){var u,t,s,r,q
if(a==null)return
u=P.m3(P.i,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.L)(t),++r){q=H.N(t[r])
u.m(0,q,a[q])}return u},
p1:function(a,b){var u={}
a.v(0,new P.jU(u))
return u},
jv:function jv(){},
jw:function jw(a,b){this.a=a
this.b=b},
jU:function jU(a){this.a=a},
el:function el(a,b){this.a=a
this.b=b},
fm:function fm(a,b){this.a=a
this.b=b},
fn:function fn(){},
fo:function fo(){},
jk:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oz:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jn:function jn(){},
a8:function a8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aZ:function aZ(){},
h0:function h0(){},
b_:function b_(){},
ht:function ht(){},
hz:function hz(){},
i3:function i3(){},
q:function q(){},
b3:function b3(){},
ie:function ie(){},
dZ:function dZ(){},
e_:function e_(){},
e8:function e8(){},
e9:function e9(){},
ej:function ej(){},
ek:function ek(){},
er:function er(){},
es:function es(){},
S:function S(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(a){this.a=a},
eS:function eS(){},
by:function by(){},
hu:function hu(){},
dN:function dN(){},
cS:function cS(){},
d2:function d2(){},
dm:function dm(){},
bK:function bK(){},
dq:function dq(){},
dD:function dD(){},
hW:function hW(){},
ef:function ef(){},
eg:function eg(){}},W={
lV:function(a,b){var u=document.createElement("canvas")
return u},
nM:function(a){H.d(a,"$ij")
return"wheel"},
m_:function(a){var u,t,s
t=document.createElement("input")
u=H.d(t,"$ice")
try{u.type=a}catch(s){H.aE(s)}return u},
jj:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mE:function(a,b,c,d){var u,t
u=W.jj(W.jj(W.jj(W.jj(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a9:function(a,b,c,d,e){var u=W.mU(new W.j8(c),W.m)
if(u!=null&&!0)J.nA(a,b,u,!1)
return new W.j7(a,b,u,!1,[e])},
mU:function(a,b){var u
H.f(a,{func:1,ret:-1,args:[b]})
u=$.Y
if(u===C.f)return a
return u.d8(a,b)},
t:function t(){},
eJ:function eJ(){},
eL:function eL(){},
eM:function eM(){},
bz:function bz(){},
cR:function cR(){},
bA:function bA(){},
bk:function bk(){},
c5:function c5(){},
f4:function f4(){},
U:function U(){},
c6:function c6(){},
f5:function f5(){},
aU:function aU(){},
aV:function aV(){},
f6:function f6(){},
f7:function f7(){},
f9:function f9(){},
c7:function c7(){},
c8:function c8(){},
fa:function fa(){},
cZ:function cZ(){},
d_:function d_(){},
fb:function fb(){},
fc:function fc(){},
j3:function j3(a,b){this.a=a
this.b=b},
a2:function a2(){},
m:function m(){},
j:function j(){},
av:function av(){},
ca:function ca(){},
fl:function fl(){},
fp:function fp(){},
aG:function aG(){},
d3:function d3(){},
bG:function bG(){},
d4:function d4(){},
cd:function cd(){},
ce:function ce(){},
c3:function c3(){},
aY:function aY(){},
dc:function dc(){},
h7:function h7(){},
hf:function hf(){},
hg:function hg(){},
hh:function hh(a){this.a=a},
hi:function hi(){},
hj:function hj(a){this.a=a},
aI:function aI(){},
hk:function hk(){},
ac:function ac(){},
j2:function j2(a){this.a=a},
H:function H(){},
ck:function ck(){},
aJ:function aJ(){},
hx:function hx(){},
hI:function hI(){},
hJ:function hJ(a){this.a=a},
hL:function hL(){},
aK:function aK(){},
hU:function hU(){},
aL:function aL(){},
hV:function hV(){},
aM:function aM(){},
hY:function hY(){},
hZ:function hZ(a){this.a=a},
ax:function ax(){},
b1:function b1(){},
du:function du(){},
dv:function dv(){},
aN:function aN(){},
ay:function ay(){},
i5:function i5(){},
i6:function i6(){},
i9:function i9(){},
aO:function aO(){},
aP:function aP(){},
ic:function ic(){},
id:function id(){},
br:function br(){},
iF:function iF(){},
iV:function iV(){},
b5:function b5(){},
cw:function cw(){},
j4:function j4(){},
dP:function dP(){},
ji:function ji(){},
e5:function e5(){},
ju:function ju(){},
jx:function jx(){},
j6:function j6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lw:function lw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j7:function j7(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
j8:function j8(a){this.a=a},
z:function z(){},
d1:function d1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dO:function dO(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
e6:function e6(){},
e7:function e7(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
cD:function cD(){},
cE:function cE(){},
ed:function ed(){},
ee:function ee(){},
ei:function ei(){},
em:function em(){},
en:function en(){},
cF:function cF(){},
cG:function cG(){},
ep:function ep(){},
eq:function eq(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){}},O={
lX:function(a){var u=new O.aa([a])
u.co(a)
return u},
aa:function aa(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cf:function cf(){this.b=this.a=null},
d5:function d5(){var _=this
_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fH:function fH(a,b){this.a=a
this.b=b},
fI:function fI(a){this.a=a},
fS:function fS(a,b){this.a=a
this.b=b},
fR:function fR(a){this.a=a},
fT:function fT(a,b){this.a=a
this.b=b},
fU:function fU(a,b){this.a=a
this.b=b},
fN:function fN(a,b){this.a=a
this.b=b},
fG:function fG(a,b){this.a=a
this.b=b},
fy:function fy(a,b){this.a=a
this.b=b},
fJ:function fJ(a,b){this.a=a
this.b=b},
fM:function fM(a,b){this.a=a
this.b=b},
fC:function fC(a,b){this.a=a
this.b=b},
fD:function fD(a,b){this.a=a
this.b=b},
fB:function fB(a,b){this.a=a
this.b=b},
fE:function fE(a,b){this.a=a
this.b=b},
fz:function fz(a){this.a=a},
fA:function fA(a){this.a=a},
fK:function fK(a){this.a=a},
fL:function fL(a){this.a=a},
fO:function fO(a){this.a=a},
fP:function fP(a,b){this.a=a
this.b=b},
fQ:function fQ(a){this.a=a},
fF:function fF(a){this.a=a},
fw:function fw(a,b,c){this.a=a
this.b=b
this.c=c},
fx:function fx(a){this.a=a},
fv:function fv(a){this.a=a},
fu:function fu(a){this.a=a},
bM:function bM(){}},E={
og:function(a,b){var u=new E.hE(a,b)
u.ef(a,b)
return u},
ol:function(a,b,c,d,e){var u,t,s,r
u=J.a0(a)
if(!!u.$ibA)return E.mo(a,!0,!0,!0,!1)
t=W.lV(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gbX(a).h(0,t)
r=E.mo(t,!0,!0,!0,!1)
r.a=a
return r},
mo:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.dx()
t=H.d(C.o.e1(a,"webgl2",P.nW(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibK")
if(t==null)H.O(P.V("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.og(t,a)
s=new T.i7(t)
s.b=H.ae((t&&C.c).cj(t,3379))
s.c=H.ae(C.c.cj(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.dH(a)
r=new X.h_()
r.c=new X.as(!1,!1,!1)
r.sh4(P.nX(null,null,null,P.n))
s.b=r
r=new X.hl(s)
r.f=0
r.r=V.b0()
r.x=V.b0()
r.Q=1
r.ch=1
s.c=r
r=new X.h8(s)
r.r=0
r.x=V.b0()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.ib(s)
r.e=0
r.f=V.b0()
r.r=V.b0()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.seR(H.h([],[[P.cp,P.P]]))
r=s.z
q=document
p=W.ac
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.a9(q,"contextmenu",H.f(s.gfz(),o),!1,p))
r=s.z
n=W.m
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.a9(a,"focus",H.f(s.gfF(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.a9(a,"blur",H.f(s.gfq(),m),!1,n))
r=s.z
l=W.aY
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.a9(q,"keyup",H.f(s.gfJ(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.a9(q,"keydown",H.f(s.gfH(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.a9(a,"mousedown",H.f(s.gfM(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a9(a,"mouseup",H.f(s.gfQ(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a9(a,"mousemove",H.f(s.gfO(),o),!1,p))
l=s.z
k=W.b5;(l&&C.a).h(l,W.a9(a,H.N(W.nM(a)),H.f(s.gfS(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.a9(q,"mousemove",H.f(s.gfB(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.a9(q,"mouseup",H.f(s.gfD(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.a9(q,"pointerlockchange",H.f(s.gfU(),m),!1,n))
n=s.z
m=W.aP
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.a9(a,"touchstart",H.f(s.gh2(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a9(a,"touchend",H.f(s.gfZ(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a9(a,"touchmove",H.f(s.gh0(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.aj(Date.now(),!1)
u.cy=0
u.cX()
return u},
eV:function eV(){},
an:function an(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hE:function hE(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hF:function hF(a){this.a=a},
hG:function hG(a){this.a=a},
hH:function hH(a){this.a=a},
dx:function dx(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i8:function i8(a){this.a=a}},Z={
lv:function(a,b,c){var u
H.o(c,"$ib",[P.n],"$ab")
u=a.createBuffer()
C.c.ag(a,b,u)
C.c.dc(a,b,new Int16Array(H.jQ(c)),35044)
C.c.ag(a,b,null)
return new Z.dL(b,u)},
aA:function(a){return new Z.cv(a)},
dL:function dL(a,b){this.a=a
this.b=b},
cT:function cT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iW:function iW(a){this.a=a},
c2:function c2(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
cU:function cU(){this.a=null},
bm:function bm(a,b,c){this.a=a
this.b=b
this.c=c},
cv:function cv(a){this.a=a},
n8:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
u=V.oi("Test 002",!0)
t=W.lV(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.h.W(u.a,t)
s=[P.i]
u.d6(H.h(["The inspection test is used to check that shapes are built correctly ","and for checking the data privided by the shapes. ","Also it is useful for testing out new generated shape configurations. ","For loaded shape testing see test032."],s))
u.hK(H.h(["controls","shapes","scalars"],s))
u.d6(H.h(["\xab[Back to Tests|../]"],s))
s=document
r=C.q.bk(s,"testCanvas")
if(r==null)H.O(P.V("Failed to find an element with the identifier, testCanvas."))
q=E.ol(r,!0,!0,!0,!1)
p=new E.an()
p.a=""
p.b=!0
o=E.an
p.seI(0,O.lX(o))
p.y.bo(p.giz(),p.giC())
p.z=null
p.Q=null
p.ch=null
p.cx=null
p.cy=null
p.db=null
p.dx=null
p.dy=null
p.fr=null
p.fx=null
p.scl(0,null)
p.saW(null)
n=new U.cc()
n.co(U.ad)
n.bo(n.gfo(),n.gfX())
n.e=null
n.f=V.he()
n.r=0
m=q.r
l=new U.dJ()
k=U.li()
k.sci(0,!0)
k.sc4(6.283185307179586)
k.sc6(0)
k.sU(0,0)
k.sc5(100)
k.sV(0)
k.sc_(0.5)
l.b=k
j=l.gaz()
k.gD().h(0,j)
k=U.li()
k.sci(0,!0)
k.sc4(6.283185307179586)
k.sc6(0)
k.sU(0,0)
k.sc5(100)
k.sV(0)
k.sc_(0.5)
l.c=k
k.gD().h(0,j)
l.d=null
l.e=!1
l.f=!1
l.r=!1
l.x=2.5
l.y=2.5
l.z=2
l.Q=4
l.cx=!1
l.ch=!1
l.cy=0
l.db=0
l.dx=null
l.dy=0
l.fr=null
l.fx=null
i=new X.as(!1,!1,!1)
h=l.d
l.d=i
k=[X.as]
j=new D.E("modifiers",h,i,l,k)
j.b=!0
l.P(j)
j=l.f
if(j!==!1){l.f=!1
j=new D.E("invertX",j,!1,l,[P.M])
j.b=!0
l.P(j)}j=l.r
if(j!==!0){l.r=!0
j=new D.E("invertY",j,!0,l,[P.M])
j.b=!0
l.P(j)}l.aR(m)
n.h(0,l)
m=q.r
l=new U.dI()
j=U.li()
j.sci(0,!0)
j.sc4(6.283185307179586)
j.sc6(0)
j.sU(0,0)
j.sc5(100)
j.sV(0)
j.sc_(0.2)
l.b=j
j.gD().h(0,l.gaz())
l.c=null
l.d=!1
l.e=2.5
l.f=2
l.r=4
l.y=!1
l.x=!1
l.z=0
l.Q=null
l.ch=0
l.cx=null
l.cy=null
i=new X.as(!0,!1,!1)
h=l.c
l.c=i
j=new D.E("modifiers",h,i,l,k)
j.b=!0
l.P(j)
l.aR(m)
n.h(0,l)
m=q.r
l=new U.dK()
l.c=0.01
l.d=0
l.e=0
i=new X.as(!1,!1,!1)
l.b=i
k=new D.E("modifiers",null,i,l,k)
k.b=!0
l.P(k)
l.aR(m)
n.h(0,l)
p.saW(n)
g=new O.d5()
g.b=V.mB()
g.c=new V.F(0.2,0.3,0.4,1)
g.d=new V.F(0.1,0.2,0.3,1)
g.e=new V.F(0.7,0.7,0.7,1)
g.f=new V.F(0.3,0.3,0.3,1)
g.r=new V.F(0.5,0.5,0.5,1)
g.x=new V.F(0.5,0.5,0.5,1)
g.y=new V.F(1,1,1,1)
g.z=new V.F(0.8,0.8,0.8,1)
g.Q=!1
g.ch=!1
g.cx=!1
g.cy=!1
g.db=!1
g.dx=!1
g.dy=!1
g.fr=!1
g.fx=!1
g.fy=!1
g.go=!1
g.id=!1
g.k1=!1
g.k2=!1
g.k3=!1
g.k4=!1
g.r1=!1
g.r2=1
g.sa4(0.4)
n=new M.d0()
n.sel(0,O.lX(o))
n.d.bo(n.gft(),n.gfv())
n.e=null
n.f=null
n.r=null
n.x=null
f=X.nO(!0,!0,!1,null,2000,null,0)
e=new X.dk()
e.c=1.0471975511965976
e.d=0.1
e.e=2000
e.saW(null)
o=e.c
if(!(Math.abs(o-1.0471975511965976)<$.Q().a)){e.c=1.0471975511965976
o=new D.E("fov",o,1.0471975511965976,e,[P.r])
o.b=!0
e.aw(o)}o=e.d
if(!(Math.abs(o-0.1)<$.Q().a)){e.d=0.1
o=new D.E("near",o,0.1,e,[P.r])
o.b=!0
e.aw(o)}o=e.e
if(!(Math.abs(o-2000)<$.Q().a)){e.e=2000
o=new D.E("far",o,2000,e,[P.r])
o.b=!0
e.aw(o)}o=n.a
if(o!==e){if(o!=null)o.gD().G(0,n.gae())
h=n.a
n.a=e
e.gD().h(0,n.gae())
o=new D.E("camera",h,n.a,n,[X.cW])
o.b=!0
n.al(o)}o=n.b
if(o!==f){if(o!=null)o.gD().G(0,n.gae())
h=n.b
n.b=f
f.gD().h(0,n.gae())
o=new D.E("target",h,n.b,n,[X.dw])
o.b=!0
n.al(o)}n.sdR(null)
n.sdR(g)
n.d.h(0,p)
o=n.a
d=V.bb(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
m=new U.cX()
m.a=d
o.saW(m)
o=q.d
if(o!==n){if(o!=null)o.gD().G(0,q.gcp())
q.d=n
n.gD().h(0,q.gcp())
q.cq()}o=new V.eZ("controls",!0)
s=C.q.bk(s,"controls")
o.c=s
if(s==null)H.O("Failed to find controls for CheckGroup")
o.seH(H.h([],[W.c3]))
o.a1(0,"Filled",new Z.kj(g),!0)
o.a1(0,"Wire Frame",new Z.kk(g),!0)
o.p(0,"Vertices",new Z.kl(g))
o.p(0,"Normals",new Z.kw(g))
o.p(0,"Binormals",new Z.kH(g))
o.p(0,"Tangentals",new Z.kS(g))
o.p(0,"Face Centers",new Z.l0(g))
o.p(0,"Face Normals",new Z.l1(g))
o.p(0,"Face Binormals",new Z.l2(g))
o.p(0,"Face Tangentals",new Z.l3(g))
o.p(0,"Colors",new Z.l4(g))
o.p(0,"Textures2D",new Z.km(g))
o.p(0,"TexturesCube",new Z.kn(g))
o.p(0,"Weight",new Z.ko(g))
o.p(0,"Bend",new Z.kp(g))
o.a1(0,"Axis",new Z.kq(g),!0)
o.p(0,"AABB",new Z.kr(g))
s=new Z.l5(p)
o=V.mh("shapes",!0)
o.a1(0,"Square",new Z.ks(s),!0)
o.p(0,"Cube",new Z.kt(s))
o.p(0,"Cuboid",new Z.ku(s))
o.p(0,"Cuboid+",new Z.kv(s))
o.p(0,"Disk",new Z.kx(s))
o.p(0,"Disk+",new Z.ky(s))
o.p(0,"Cylinder",new Z.kz(s))
o.p(0,"Cylinder+",new Z.kA(s))
o.p(0,"Cone",new Z.kB(s))
o.p(0,"Cylindrical",new Z.kC(s))
o.p(0,"LatLonSphere",new Z.kD(s))
o.p(0,"LatLonSphere+",new Z.kE(s))
o.p(0,"IsoSphere",new Z.kF(s))
o.p(0,"IsoSphere+",new Z.kG(s))
o.p(0,"Sphere",new Z.kI(s))
o.p(0,"Sphere+",new Z.kJ(s))
o.p(0,"Spherical",new Z.kK(s))
o.p(0,"Toroid",new Z.kL(s))
o.p(0,"Knot",new Z.kM(s))
o.p(0,"Grid",new Z.kN(s))
o.p(0,"Grid+",new Z.kO(s))
s=V.mh("scalars",!0)
s.p(0,"0.01",new Z.kP(g))
s.p(0,"0.02",new Z.kQ(g))
s.p(0,"0.04",new Z.kR(g))
s.p(0,"0.06",new Z.kT(g))
s.p(0,"0.08",new Z.kU(g))
s.p(0,"0.1",new Z.kV(g))
s.p(0,"0.2",new Z.kW(g))
s.a1(0,"0.4",new Z.kX(g),!0)
s.p(0,"0.6",new Z.kY(g))
s.p(0,"0.8",new Z.kZ(g))
s.p(0,"1.0",new Z.l_(g))
V.pn(q)},
kj:function kj(a){this.a=a},
kk:function kk(a){this.a=a},
kl:function kl(a){this.a=a},
kw:function kw(a){this.a=a},
kH:function kH(a){this.a=a},
kS:function kS(a){this.a=a},
l0:function l0(a){this.a=a},
l1:function l1(a){this.a=a},
l2:function l2(a){this.a=a},
l3:function l3(a){this.a=a},
l4:function l4(a){this.a=a},
km:function km(a){this.a=a},
kn:function kn(a){this.a=a},
ko:function ko(a){this.a=a},
kp:function kp(a){this.a=a},
kq:function kq(a){this.a=a},
kr:function kr(a){this.a=a},
l5:function l5(a){this.a=a},
ks:function ks(a){this.a=a},
kt:function kt(a){this.a=a},
ku:function ku(a){this.a=a},
kv:function kv(a){this.a=a},
ki:function ki(){},
kx:function kx(a){this.a=a},
ky:function ky(a){this.a=a},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
kB:function kB(a){this.a=a},
kC:function kC(a){this.a=a},
kh:function kh(){},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kg:function kg(){},
kL:function kL(a){this.a=a},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
kO:function kO(a){this.a=a},
kf:function kf(){},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kT:function kT(a){this.a=a},
kU:function kU(a){this.a=a},
kV:function kV(a){this.a=a},
kW:function kW(a){this.a=a},
kX:function kX(a){this.a=a},
kY:function kY(a){this.a=a},
kZ:function kZ(a){this.a=a},
l_:function l_(a){this.a=a}},D={
a1:function(){var u=new D.c9()
u.san(null)
u.sbG(null)
u.c=null
u.d=0
return u},
eY:function eY(){},
c9:function c9(){var _=this
_.d=_.c=_.b=_.a=null},
fj:function fj(a){this.a=a},
B:function B(a){this.a=a
this.b=null},
d6:function d6(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
d7:function d7(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
E:function E(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e}},X={cV:function cV(a,b){this.a=a
this.b=b},db:function db(a,b){this.a=a
this.b=b},h_:function h_(){var _=this
_.d=_.c=_.b=_.a=null},de:function de(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},h8:function h8(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},as:function as(a,b,c){this.a=a
this.b=b
this.c=c},bc:function bc(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hl:function hl(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cg:function cg(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},hy:function hy(){},dz:function dz(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},ib:function ib(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dH:function dH(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nO:function(a,b,c,d,e,f,g){var u,t
u=new X.fr()
t=new V.F(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.mj
if(t==null){t=V.mi(0,0,1,1)
$.mj=t}u.r=t
return u},
cW:function cW(){},
fr:function fr(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dk:function dk(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dw:function dw(){}},V={
lY:function(a,b,c){var u,t,s,r,q,p,o,n
a*=6
u=C.d.bd(a)
t=a-u
s=b*(1-c)
r=b*(1-c*t)
q=b*(1-c*(1-t))
switch(u){case 0:if(b<0)p=0
else p=b>1?1:b
if(q<0)o=0
else o=q>1?1:q
if(s<0)n=0
else n=s>1?1:s
return new V.am(p,o,n)
case 1:if(r<0)p=0
else p=r>1?1:r
if(b<0)o=0
else o=b>1?1:b
if(s<0)n=0
else n=s>1?1:s
return new V.am(p,o,n)
case 2:if(s<0)p=0
else p=s>1?1:s
if(b<0)o=0
else o=b>1?1:b
if(q<0)n=0
else n=q>1?1:q
return new V.am(p,o,n)
case 3:if(s<0)p=0
else p=s>1?1:s
if(r<0)o=0
else o=r>1?1:r
if(b<0)n=0
else n=b>1?1:b
return new V.am(p,o,n)
case 4:if(q<0)p=0
else p=q>1?1:q
if(s<0)o=0
else o=s>1?1:s
if(b<0)n=0
else n=b>1?1:b
return new V.am(p,o,n)
default:if(b<0)p=0
else p=b>1?1:b
if(s<0)o=0
else o=s>1?1:s
if(r<0)n=0
else n=r>1?1:r
return new V.am(p,o,n)}},
pr:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.b1(a-b,u)
return(a<0?a+u:a)+b},
J:function(a,b,c){if(a==null)return C.b.aa("null",c)
return C.b.aa(C.d.dT(Math.abs(a-0)<$.Q().a?0:a,b),c+b+1)},
k3:function(a,b,c){var u,t,s,r,q
H.o(a,"$ib",[P.r],"$ab")
u=H.h([],[P.i])
for(t=0,s=0;s<4;++s){r=V.J(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(u,r)}for(q=u.length-1;q>=0;--q){if(q>=u.length)return H.e(u,q)
C.a.m(u,q,C.b.aa(u[q],t))}return u},
he:function(){var u=$.m5
if(u==null){u=V.bb(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.m5=u}return u},
bb:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bo(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
b0:function(){var u=$.ma
if(u==null){u=new V.X(0,0)
$.ma=u}return u},
mc:function(){var u=$.mb
if(u==null){u=new V.R(0,0,0)
$.mb=u}return u},
me:function(){var u=$.md
if(u==null){u=new V.ag(0,0,0,0)
$.md=u}return u},
mi:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dp(a,b,c,d)},
mk:function(a,b,c,d,e,f){return new V.cm(a,b,c,d,e,f)},
Z:function(){var u=$.mA
if(u==null){u=new V.w(0,0,0)
$.mA=u}return u},
lu:function(){var u=$.mx
if(u==null){u=new V.w(1,0,0)
$.mx=u}return u},
mB:function(){var u=$.mw
if(u==null){u=new V.w(0,0,-1)
$.mw=u}return u},
am:function am(a,b,c){this.a=a
this.b=b
this.c=c},
F:function F(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fh:function fh(a){this.a=a},
bo:function bo(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
X:function X(a,b){this.a=a
this.b=b},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dp:function dp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cm:function cm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
T:function T(a,b){this.a=a
this.b=b},
w:function w(a,b,c){this.a=a
this.b=b
this.c=c},
aR:function aR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ah:function(a){var u=new V.hM()
u.eg(a)
return u},
eK:function eK(){},
ba:function ba(){},
df:function df(){},
bd:function bd(){this.a=null},
hM:function hM(){this.a=null},
co:function co(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dy:function dy(a,b,c){this.a=a
this.b=b
this.c=c},
cq:function cq(a,b){this.a=a
this.b=b
this.c=null},
ia:function ia(){this.c=this.b=this.a=null},
cr:function cr(a){this.b=a
this.a=this.c=null},
pn:function(a){P.om(C.I,new V.l8(a))},
mh:function(a,b){var u,t
u=new V.hB(a,!0)
t=C.q.bk(document,a)
u.c=t
if(t==null)H.O("Failed to find "+a+" for RadioGroup")
return u},
oi:function(a,b){var u=new V.hQ()
u.ei(a,!0)
return u},
eZ:function eZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f_:function f_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l8:function l8(a){this.a=a},
hB:function hB(a,b){this.a=a
this.b=b
this.c=null},
hC:function hC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hQ:function hQ(){this.b=this.a=null},
hS:function hS(a){this.a=a},
hR:function hR(a){this.a=a}},U={
li:function(){var u=new U.f0()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
f0:function f0(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cX:function cX(){this.b=this.a=null},
cc:function cc(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ad:function ad(){},
dI:function dI(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dJ:function dJ(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dK:function dK(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={d0:function d0(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
lr:function(a,b,c,d,e){var u=new A.il(a,b,c,e)
u.f=d
u.shE(P.nY(d,0,!1,P.n))
return u},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.c=c},
eO:function eO(a){this.a=a},
ft:function ft(a,b){var _=this
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cn:function cn(){},
dA:function dA(){},
ir:function ir(a){this.a=a},
ik:function ik(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
io:function io(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ip:function ip(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iq:function iq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
il:function il(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
dB:function dB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
im:function im(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dC:function dC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cs:function cs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
is:function is(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
it:function it(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iu:function iu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iv:function iv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
jV:function(a,b,c,d){var u
H.f(c,{func:1,ret:-1,args:[F.y,P.r,P.r]})
u=F.a3()
F.cJ(u,b,c,d,a,1,0,0,1)
F.cJ(u,b,c,d,a,0,1,0,3)
F.cJ(u,b,c,d,a,0,0,1,2)
F.cJ(u,b,c,d,a,-1,0,0,0)
F.cJ(u,b,c,d,a,0,-1,0,0)
F.cJ(u,b,c,d,a,0,0,-1,3)
u.a8()
return u},
jL:function(a){var u,t
u=a.a>0?1:0
if(a.b>0)u+=2
t=a.c
if(typeof t!=="number")return t.bm()
return(t>0?u+4:u)*2},
cJ:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
H.f(c,{func:1,ret:-1,args:[F.y,P.r,P.r]})
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.w(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.w(o+a3,n+a1,m+a2)
u.b=l
k=new V.w(o-a3,n-a1,m-a2)
u.c=k
j=new V.w(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.jL(t)
f=F.jL(u.b)
e=F.eH(d,a0,new F.jK(u,F.jL(u.c),F.jL(u.d),f,g,c),b)
if(e!=null)a.aH(e)},
k0:function(a,b,c,d,e,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.f(e,{func:1,ret:P.r,args:[P.r]})
if(e==null)e=new F.k1()
if(a0<3)return
u=F.a3()
t=b?-1:1
s=-6.283185307179586/a0
r=H.h([],[F.y])
q=u.a
p=new V.w(0,0,t)
p=p.q(0,Math.sqrt(p.w(p)))
C.a.h(r,q.hN(new V.ag(a,-1,-1,-1),new V.F(1,1,1,1),new V.R(0,0,d),new V.w(0,0,t),new V.X(0.5,0.5),p))
for(q=t*t,o=0;o<=a0;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=e.$1(o/a0)
p=u.a
if(typeof k!=="number")return H.p(k)
j=new V.w(m,l,t).q(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.az(new V.ag(a,-1,-1,-1),null,new V.F(i,g,h,1),new V.R(m*k,l*k,d),new V.w(0,0,t),new V.X(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.d4(r)
return u},
lF:function(a,b,c,d,e,f){return F.mZ(!0,c,d,new F.jW(a,f),e)},
mZ:function(a,b,c,d,e){var u
H.f(d,{func:1,ret:P.r,args:[P.r,P.r]})
if(e<3)return
if(c<1)return
u=F.eH(c,e,new F.jY(d),null)
if(u==null)return
u.a8()
u.ba()
if(b)u.aH(F.k0(3,!1,!1,1,new F.jZ(d),e))
u.aH(F.k0(1,!0,!1,-1,new F.k_(d),e))
return u},
n6:function(a,b){var u=F.eH(a,b,new F.kd(),null)
u.d.bg()
u.a8()
u.ba()
return u},
n5:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=F.a3()
t=Math.sqrt(5)/2+0.5
s=F.ak(u,new V.w(-1,t,0))
r=F.ak(u,new V.w(1,t,0))
q=-t
p=F.ak(u,new V.w(-1,q,0))
o=F.ak(u,new V.w(1,q,0))
n=F.ak(u,new V.w(0,-1,q))
m=F.ak(u,new V.w(0,1,q))
l=F.ak(u,new V.w(0,-1,t))
k=F.ak(u,new V.w(0,1,t))
j=F.ak(u,new V.w(t,0,1))
i=F.ak(u,new V.w(t,0,-1))
h=F.ak(u,new V.w(q,0,1))
g=F.ak(u,new V.w(q,0,-1))
F.a_(u,s,g,m,a)
F.a_(u,s,m,r,a)
F.a_(u,s,r,k,a)
F.a_(u,s,k,h,a)
F.a_(u,s,h,g,a)
F.a_(u,r,m,i,a)
F.a_(u,m,g,n,a)
F.a_(u,g,h,p,a)
F.a_(u,h,k,l,a)
F.a_(u,k,r,j,a)
F.a_(u,o,i,n,a)
F.a_(u,o,n,p,a)
F.a_(u,o,p,l,a)
F.a_(u,o,l,j,a)
F.a_(u,o,j,i,a)
F.a_(u,n,i,m,a)
F.a_(u,p,n,g,a)
F.a_(u,l,p,h,a)
F.a_(u,j,l,k,a)
F.a_(u,i,j,r,a)
u.dA(new F.cu(),new F.iN())
return u},
ak:function(a,b){var u,t,s,r,q,p,o,n,m,l,k
b=b.q(0,Math.sqrt(b.w(b)))
u=b.a
t=b.b
s=b.c
r=F.az(null,null,null,new V.R(u,t,s),b,null,null,null,0)
q=a.ih(r,new F.cu())
if(q!=null)return q
p=u*0.5+0.5
o=t*0.5+0.5
if(typeof s!=="number")return s.u()
n=s*0.5+0.5
if(p<0)p=0
else if(p>1)p=1
if(o<0)o=0
else if(o>1)o=1
if(n<0)n=0
else if(n>1)n=1
r.sa2(0,new V.F(p,o,n,1))
m=Math.sqrt(u*u+t*t)
l=Math.atan2(t,u)/1.5707963267948966
if(l<0)l=-l
k=Math.atan2(m,s)/3.141592653589793
r.sce(new V.X(l,k<0?-k:k))
a.a.h(0,r)
return r},
a_:function(a,b,c,d,e){var u,t,s,r
if(e<=0)a.d.a1(0,b,d,c)
else{u=F.ak(a,b.r.l(0,c.r).u(0,0.5))
t=F.ak(a,c.r.l(0,d.r).u(0,0.5))
s=F.ak(a,d.r.l(0,b.r).u(0,0.5))
r=e-1
F.a_(a,b,u,s,r)
F.a_(a,u,c,t,r)
F.a_(a,t,s,u,r)
F.a_(a,s,t,d,r)}},
lL:function(a,b,c,d){var u,t
u={}
u.a=b
if(H.f(b,{func:1,ret:P.r,args:[P.r,P.r]})==null)u.a=new F.l9()
t=F.jV(a,null,new F.la(u,c),d)
t.ba()
return t},
pq:function(a,b,c,d){return F.n_(c,a,d,b,new F.lb())},
pf:function(a,b,c,d,e,f){return F.n_(d,a,e,b,new F.kc(f,c))},
n_:function(a,b,c,d,e){var u=F.eH(a,b,new F.jX(H.f(e,{func:1,ret:V.R,args:[P.r]}),d,b,c),null)
if(u==null)return
u.a8()
u.ba()
return u},
n3:function(a,b,c){var u={}
u.a=b
if(H.f(b,{func:1,ret:P.r,args:[P.r,P.r]})==null)u.a=new F.k5()
return F.eH(c,a,new F.k6(u),null)},
eH:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.f(c,{func:1,ret:-1,args:[F.y,P.r,P.r]})
if(a<1)return
if(b<1)return
u=F.a3()
t=H.h([],[F.y])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.az(null,null,new V.F(p,0,0,1),null,null,new V.X(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.bZ(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.az(null,null,new V.F(j,i,h,1),null,null,new V.X(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.bZ(d))}}u.d.hM(a+1,b+1,t)
return u},
bE:function(a,b,c){var u,t
u=new F.G()
t=a.a
if(t==null)H.O(P.V("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.O(P.V("May not create a face with vertices attached to different shapes."))
u.bO(a)
u.bP(b)
u.hg(c)
C.a.h(u.a.a.d.b,u)
u.a.a.S()
return u},
m2:function(a,b){var u,t
u=new F.ar()
if(a==null)H.O(P.V("May not create a line with a null start vertex."))
if(b==null)H.O(P.V("May not create a line with a null end vertex."))
t=a.a
if(t==null)H.O(P.V("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.O(P.V("May not create a line with vertices attached to different shapes."))
u.bO(a)
u.bP(b)
C.a.h(u.a.a.c.b,u)
u.a.a.S()
return u},
lp:function(a){var u=new F.bq()
if(a.a==null)H.O(P.V("May not create a point with a vertex which is not attached to a shape."))
u.hf(a)
C.a.h(u.a.a.b.b,u)
u.a.a.S()
return u},
a3:function(){var u,t
u=new F.a7()
t=new F.iJ(u)
t.b=!1
t.shF(H.h([],[F.y]))
u.a=t
t=new F.hP(u)
t.sbH(H.h([],[F.bq]))
u.b=t
t=new F.hO(u)
t.sfa(H.h([],[F.ar]))
u.c=t
t=new F.hN(u)
t.sf_(H.h([],[F.G]))
u.d=t
u.e=null
return u},
az:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.y()
t=new F.iS(u)
t.sbH(H.h([],[F.bq]))
u.b=t
t=new F.iO(u)
s=[F.ar]
t.sfb(H.h([],s))
t.sfc(H.h([],s))
u.c=t
t=new F.iK(u)
s=[F.G]
t.sf0(H.h([],s))
t.sf1(H.h([],s))
t.sf2(H.h([],s))
u.d=t
h=$.nr()
u.e=0
t=$.bj()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bi().a)!==0?e:null
u.x=(s&$.bh().a)!==0?b:null
u.y=(s&$.bX().a)!==0?f:null
u.z=(s&$.bY().a)!==0?g:null
u.Q=(s&$.ns().a)!==0?c:null
u.ch=(s&$.bZ().a)!==0?i:0
u.cx=(s&$.bW().a)!==0?a:null
return u},
jK:function jK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
k1:function k1(){},
jW:function jW(a,b){this.a=a
this.b=b},
jY:function jY(a){this.a=a},
jZ:function jZ(a){this.a=a},
k_:function k_(a){this.a=a},
kd:function kd(){},
l9:function l9(){},
la:function la(a,b){this.a=a
this.b=b},
lb:function lb(){},
kc:function kc(a,b){this.a=a
this.b=b},
jX:function jX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k5:function k5(){},
k6:function k6(a){this.a=a},
G:function G(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fk:function fk(){},
hT:function hT(){},
ar:function ar(){this.b=this.a=null},
h1:function h1(){},
ij:function ij(){},
bq:function bq(){this.a=null},
a7:function a7(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bL:function bL(){},
hN:function hN(a){this.a=a
this.b=null},
hO:function hO(a){this.a=a
this.b=null},
hP:function hP(a){this.a=a
this.b=null},
y:function y(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iU:function iU(a){this.a=a},
iT:function iT(a){this.a=a},
iJ:function iJ(a){this.a=a
this.c=this.b=null},
iK:function iK(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iL:function iL(a,b){this.a=a
this.b=b},
iM:function iM(a,b){this.a=a
this.b=b},
iO:function iO(a){this.a=a
this.c=this.b=null},
iP:function iP(){},
cu:function cu(){},
iQ:function iQ(){},
hA:function hA(){this.b=this.a=null},
iR:function iR(){},
iN:function iN(){},
hr:function hr(){},
iS:function iS(a){this.a=a
this.b=null}},T={i7:function i7(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.lm.prototype={}
J.a.prototype={
B:function(a,b){return a===b},
gI:function(a){return H.cl(a)},
i:function(a){return"Instance of '"+H.bI(a)+"'"}}
J.fW.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iM:1}
J.d9.prototype={
B:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0},
$iD:1}
J.da.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.hw.prototype={}
J.bs.prototype={}
J.b9.prototype={
i:function(a){var u=a[$.nf()]
if(u==null)return this.ec(a)
return"JavaScript function for "+H.l(J.aq(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ilj:1}
J.aH.prototype={
h:function(a,b){H.x(b,H.u(a,0))
if(!!a.fixed$length)H.O(P.C("add"))
a.push(b)},
iP:function(a,b){var u
if(!!a.fixed$length)H.O(P.C("removeAt"))
u=a.length
if(b>=u)throw H.c(P.dn(b,null,null))
return a.splice(b,1)[0]},
G:function(a,b){var u
if(!!a.fixed$length)H.O(P.C("remove"))
for(u=0;u<a.length;++u)if(J.K(a[u],b)){a.splice(u,1)
return!0}return!1},
v:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bC(a))}},
E:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.m(u,t,H.l(a[t]))
return u.join(b)},
iu:function(a){return this.E(a,"")},
im:function(a,b,c,d){var u,t,s
H.x(b,d)
H.f(c,{func:1,ret:d,args:[d,H.u(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bC(a))}return t},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
ea:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ab(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ab(c,b,a.length,"end",null))
if(b===c)return H.h([],[H.u(a,0)])
return H.h(a.slice(b,c),[H.u(a,0)])},
gik:function(a){if(a.length>0)return a[0]
throw H.c(H.m0())},
gas:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.m0())},
e8:function(a,b,c,d,e){var u,t,s
u=H.u(a,0)
H.o(d,"$ik",[u],"$ak")
if(!!a.immutable$list)H.O(P.C("setRange"))
P.be(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.o(d,"$ib",[u],"$ab")
u=J.bS(d)
if(e+t>u.gk(d))throw H.c(H.nS())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
b3:function(a,b,c,d){return this.e8(a,b,c,d,0)},
i1:function(a,b){var u
for(u=0;u<a.length;++u)if(J.K(a[u],b))return!0
return!1},
i:function(a){return P.lk(a,"[","]")},
ga_:function(a){return new J.au(a,a.length,0,[H.u(a,0)])},
gI:function(a){return H.cl(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.O(P.C("set length"))
if(b<0)throw H.c(P.ab(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.bu(a,b))
if(b>=a.length||b<0)throw H.c(H.bu(a,b))
return a[b]},
m:function(a,b,c){H.x(c,H.u(a,0))
if(!!a.immutable$list)H.O(P.C("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bu(a,b))
a[b]=c},
l:function(a,b){var u,t
u=[H.u(a,0)]
H.o(b,"$ib",u,"$ab")
t=C.e.l(a.length,b.gk(b))
u=H.h([],u)
this.sk(u,t)
this.b3(u,0,a.length,a)
this.b3(u,a.length,t,b)
return u},
$ik:1,
$ib:1}
J.ll.prototype={}
J.au.prototype={
gM:function(a){return this.d},
F:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.L(u))
s=this.c
if(s>=t){this.scI(null)
return!1}this.scI(u[s]);++this.c
return!0},
scI:function(a){this.d=H.x(a,H.u(this,0))},
$iaX:1}
J.bn.prototype={
bd:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.C(""+a+".floor()"))},
ad:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.C(""+a+".round()"))},
dT:function(a,b){var u,t
if(b>20)throw H.c(P.ab(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
b_:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ab(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.Z(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.O(P.C("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.u("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
l:function(a,b){if(typeof b!=="number")throw H.c(H.ap(b))
return a+b},
n:function(a,b){if(typeof b!=="number")throw H.c(H.ap(b))
return a-b},
u:function(a,b){if(typeof b!=="number")throw H.c(H.ap(b))
return a*b},
b1:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ee:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cZ(a,b)},
aC:function(a,b){return(a|0)===a?a/b|0:this.cZ(a,b)},
cZ:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.C("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
aB:function(a,b){var u
if(a>0)u=this.cY(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hn:function(a,b){if(b<0)throw H.c(H.ap(b))
return this.cY(a,b)},
cY:function(a,b){return b>31?0:a>>>b},
$ir:1,
$ia4:1}
J.d8.prototype={$in:1}
J.fX.prototype={}
J.b8.prototype={
Z:function(a,b){if(b<0)throw H.c(H.bu(a,b))
if(b>=a.length)H.O(H.bu(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.c(H.bu(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.c(P.lg(b,null,null))
return a+b},
aL:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.O(H.ap(b))
c=P.be(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a7:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.O(H.ap(c))
if(typeof c!=="number")return c.T()
if(c<0||c>a.length)throw H.c(P.ab(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a6:function(a,b){return this.a7(a,b,0)},
A:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.O(H.ap(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.T()
if(b<0)throw H.c(P.dn(b,null,null))
if(b>c)throw H.c(P.dn(b,null,null))
if(c>a.length)throw H.c(P.dn(c,null,null))
return a.substring(b,c)},
au:function(a,b){return this.A(a,b,null)},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.G)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
iG:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.u(c,u)+a},
aa:function(a,b){return this.iG(a,b," ")},
iH:function(a,b,c){var u=b-a.length
if(u<=0)return a
return a+this.u(c,u)},
dw:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ab(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dv:function(a,b){return this.dw(a,b,0)},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$im8:1,
$ii:1}
H.a6.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.b.Z(this.a,b)},
$act:function(){return[P.n]},
$av:function(){return[P.n]},
$ak:function(){return[P.n]},
$ab:function(){return[P.n]}}
H.ff.prototype={}
H.dd.prototype={
gM:function(a){return this.d},
F:function(){var u,t,s,r
u=this.a
t=J.bS(u)
s=t.gk(u)
if(this.b!==s)throw H.c(P.bC(u))
r=this.c
if(r>=s){this.saO(null)
return!1}this.saO(t.J(u,r));++this.c
return!0},
saO:function(a){this.d=H.x(a,H.u(this,0))},
$iaX:1}
H.hc.prototype={
ga_:function(a){return new H.hd(J.c_(this.a),this.b,this.$ti)},
gk:function(a){return J.aF(this.a)},
J:function(a,b){return this.b.$1(J.lf(this.a,b))},
$ak:function(a,b){return[b]}}
H.hd.prototype={
F:function(){var u=this.b
if(u.F()){this.saO(this.c.$1(u.gM(u)))
return!0}this.saO(null)
return!1},
gM:function(a){return this.a},
saO:function(a){this.a=H.x(a,H.u(this,1))},
$aaX:function(a,b){return[b]}}
H.iX.prototype={
ga_:function(a){return new H.iY(J.c_(this.a),this.b,this.$ti)}}
H.iY.prototype={
F:function(){var u,t
for(u=this.a,t=this.b;u.F();)if(t.$1(u.gM(u)))return!0
return!1},
gM:function(a){var u=this.a
return u.gM(u)}}
H.bF.prototype={}
H.ct.prototype={
m:function(a,b,c){H.x(c,H.aD(this,"ct",0))
throw H.c(P.C("Cannot modify an unmodifiable list"))}}
H.dE.prototype={}
H.f2.prototype={
i:function(a){return P.lo(this)},
m:function(a,b,c){H.x(b,H.u(this,0))
H.x(c,H.u(this,1))
return H.nJ()},
$iA:1}
H.f3.prototype={
gk:function(a){return this.a},
bb:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bb(0,b))return
return this.cJ(b)},
cJ:function(a){return this.b[H.N(a)]},
v:function(a,b){var u,t,s,r,q
u=H.u(this,1)
H.f(b,{func:1,ret:-1,args:[H.u(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.x(this.cJ(q),u))}}}
H.hD.prototype={}
H.ig.prototype={
a9:function(a){var u,t,s
u=new RegExp(this.a).exec(a)
if(u==null)return
t=Object.create(null)
s=this.b
if(s!==-1)t.arguments=u[s+1]
s=this.c
if(s!==-1)t.argumentsExpr=u[s+1]
s=this.d
if(s!==-1)t.expr=u[s+1]
s=this.e
if(s!==-1)t.method=u[s+1]
s=this.f
if(s!==-1)t.receiver=u[s+1]
return t}}
H.hs.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fZ.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.l(this.a)+")"}}
H.iy.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.lc.prototype={
$1:function(a){if(!!J.a0(a).$ibl)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:22}
H.eh.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iao:1}
H.c4.prototype={
i:function(a){return"Closure '"+H.bI(this).trim()+"'"},
$ilj:1,
gjb:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i4.prototype={}
H.hX.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bV(u)+"'"}}
H.c0.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c0))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gI:function(a){var u,t
u=this.c
if(u==null)t=H.cl(this.a)
else t=typeof u!=="object"?J.cP(u):H.cl(u)
return(t^H.cl(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bI(u)+"'")}}
H.ii.prototype={
i:function(a){return this.a}}
H.eX.prototype={
i:function(a){return this.a}}
H.hK.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.aw.prototype={
gk:function(a){return this.a},
gah:function(a){return new H.h3(this,[H.u(this,0)])},
bb:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.cF(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.cF(t,b)}else return this.ir(b)},
ir:function(a){var u=this.d
if(u==null)return!1
return this.c2(this.bv(u,this.c1(a)),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.b5(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.b5(r,b)
s=t==null?null:t.b
return s}else return this.is(b)},
is:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bv(u,this.c1(a))
s=this.c2(t,a)
if(s<0)return
return t[s].b},
m:function(a,b,c){var u,t
H.x(b,H.u(this,0))
H.x(c,H.u(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.bE()
this.b=u}this.cv(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.bE()
this.c=t}this.cv(t,b,c)}else this.it(b,c)},
it:function(a,b){var u,t,s,r
H.x(a,H.u(this,0))
H.x(b,H.u(this,1))
u=this.d
if(u==null){u=this.bE()
this.d=u}t=this.c1(a)
s=this.bv(u,t)
if(s==null)this.bM(u,t,[this.bF(a,b)])
else{r=this.c2(s,a)
if(r>=0)s[r].b=b
else s.push(this.bF(a,b))}},
v:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.bC(this))
u=u.c}},
cv:function(a,b,c){var u
H.x(b,H.u(this,0))
H.x(c,H.u(this,1))
u=this.b5(a,b)
if(u==null)this.bM(a,b,this.bF(b,c))
else u.b=c},
bF:function(a,b){var u,t
u=new H.h2(H.x(a,H.u(this,0)),H.x(b,H.u(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
c1:function(a){return J.cP(a)&0x3ffffff},
c2:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.K(a[t].a,b))return t
return-1},
i:function(a){return P.lo(this)},
b5:function(a,b){return a[b]},
bv:function(a,b){return a[b]},
bM:function(a,b,c){a[b]=c},
eO:function(a,b){delete a[b]},
cF:function(a,b){return this.b5(a,b)!=null},
bE:function(){var u=Object.create(null)
this.bM(u,"<non-identifier-key>",u)
this.eO(u,"<non-identifier-key>")
return u}}
H.h2.prototype={}
H.h3.prototype={
gk:function(a){return this.a.a},
ga_:function(a){var u,t
u=this.a
t=new H.h4(u,u.r,this.$ti)
t.c=u.e
return t}}
H.h4.prototype={
gM:function(a){return this.d},
F:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bC(u))
else{u=this.c
if(u==null){this.sct(null)
return!1}else{this.sct(u.a)
this.c=this.c.c
return!0}}},
sct:function(a){this.d=H.x(a,H.u(this,0))},
$iaX:1}
H.k8.prototype={
$1:function(a){return this.a(a)},
$S:22}
H.k9.prototype={
$2:function(a,b){return this.a(a,b)},
$S:51}
H.ka.prototype={
$1:function(a){return this.a(H.N(a))},
$S:49}
H.fY.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$im8:1,
$ioe:1}
H.ch.prototype={$ich:1}
H.bp.prototype={$ibp:1}
H.dg.prototype={
gk:function(a){return a.length},
$iI:1,
$aI:function(){}}
H.ci.prototype={
j:function(a,b){H.b7(b,a,a.length)
return a[b]},
m:function(a,b,c){H.p3(c)
H.b7(b,a,a.length)
a[b]=c},
$abF:function(){return[P.r]},
$av:function(){return[P.r]},
$ik:1,
$ak:function(){return[P.r]},
$ib:1,
$ab:function(){return[P.r]}}
H.dh.prototype={
m:function(a,b,c){H.ae(c)
H.b7(b,a,a.length)
a[b]=c},
$abF:function(){return[P.n]},
$av:function(){return[P.n]},
$ik:1,
$ak:function(){return[P.n]},
$ib:1,
$ab:function(){return[P.n]}}
H.hm.prototype={
j:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.hn.prototype={
j:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.ho.prototype={
j:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.hp.prototype={
j:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.hq.prototype={
j:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.di.prototype={
gk:function(a){return a.length},
j:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.cj.prototype={
gk:function(a){return a.length},
j:function(a,b){H.b7(b,a,a.length)
return a[b]},
$icj:1,
$iS:1}
H.cz.prototype={}
H.cA.prototype={}
H.cB.prototype={}
H.cC.prototype={}
P.j_.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:27}
P.iZ.prototype={
$1:function(a){var u,t
this.a.a=H.f(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:44}
P.j0.prototype={
$0:function(){this.a.$0()},
$S:0}
P.j1.prototype={
$0:function(){this.a.$0()},
$S:0}
P.eo.prototype={
ep:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bR(new P.jz(this,b),0),a)
else throw H.c(P.C("`setTimeout()` not found."))},
eq:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bR(new P.jy(this,a,Date.now(),b),0),a)
else throw H.c(P.C("Periodic timer."))},
$ib2:1}
P.jz.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:8}
P.jy.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.e.ee(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.b6.prototype={
ix:function(a){if(this.c!==6)return!0
return this.b.b.cd(H.f(this.d,{func:1,ret:P.M,args:[P.P]}),a.a,P.M,P.P)},
iq:function(a){var u,t,s,r
u=this.e
t=P.P
s={futureOr:1,type:H.u(this,1)}
r=this.b.b
if(H.eE(u,{func:1,args:[P.P,P.ao]}))return H.lG(r.iV(u,a.a,a.b,null,t,P.ao),s)
else return H.lG(r.cd(H.f(u,{func:1,args:[P.P]}),a.a,null,t),s)}}
P.aB.prototype={
dS:function(a,b,c){var u,t,s,r
u=H.u(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.Y
if(t!==C.f){t.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.oU(b,t)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aB(0,$.Y,[c])
r=b==null?1:3
this.cw(new P.b6(s,r,a,b,[u,c]))
return s},
iY:function(a,b){return this.dS(a,null,b)},
cw:function(a){var u,t
u=this.a
if(u<=1){a.a=H.d(this.c,"$ib6")
this.c=a}else{if(u===2){t=H.d(this.c,"$iaB")
u=t.a
if(u<4){t.cw(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.jT(null,null,u,H.f(new P.j9(this,a),{func:1,ret:-1}))}},
cU:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.d(this.c,"$ib6")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.d(this.c,"$iaB")
t=p.a
if(t<4){p.cU(a)
return}this.a=t
this.c=p.c}u.a=this.b7(a)
t=this.b
t.toString
P.jT(null,null,t,H.f(new P.jd(u,this),{func:1,ret:-1}))}},
bJ:function(){var u=H.d(this.c,"$ib6")
this.c=null
return this.b7(u)},
b7:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cC:function(a){var u,t,s
u=H.u(this,0)
H.lG(a,{futureOr:1,type:u})
t=this.$ti
if(H.cM(a,"$icb",t,"$acb"))if(H.cM(a,"$iaB",t,null))P.mD(a,this)
else P.oy(a,this)
else{s=this.bJ()
H.x(a,u)
this.a=4
this.c=a
P.cx(this,s)}},
cD:function(a,b){var u
H.d(b,"$iao")
u=this.bJ()
this.a=8
this.c=new P.ai(a,b)
P.cx(this,u)},
$icb:1}
P.j9.prototype={
$0:function(){P.cx(this.a,this.b)},
$S:0}
P.jd.prototype={
$0:function(){P.cx(this.b,this.a.a)},
$S:0}
P.ja.prototype={
$1:function(a){var u=this.a
u.a=0
u.cC(a)},
$S:27}
P.jb.prototype={
$2:function(a,b){H.d(b,"$iao")
this.a.cD(a,b)},
$1:function(a){return this.$2(a,null)},
$S:43}
P.jc.prototype={
$0:function(){this.a.cD(this.b,this.c)},
$S:0}
P.jg.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.dQ(H.f(r.d,{func:1}),null)}catch(q){t=H.aE(q)
s=H.bT(q)
if(this.d){r=H.d(this.a.a.c,"$iai").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.d(this.a.a.c,"$iai")
else p.b=new P.ai(t,s)
p.a=!0
return}if(!!J.a0(u).$icb){if(u instanceof P.aB&&u.a>=4){if(u.a===8){r=this.b
r.b=H.d(u.c,"$iai")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.iY(new P.jh(o),null)
r.a=!1}},
$S:8}
P.jh.prototype={
$1:function(a){return this.a},
$S:42}
P.jf.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.u(s,0)
q=H.x(this.c,r)
p=H.u(s,1)
this.a.b=s.b.b.cd(H.f(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aE(o)
t=H.bT(o)
s=this.a
s.b=new P.ai(u,t)
s.a=!0}},
$S:8}
P.je.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.d(this.a.a.c,"$iai")
r=this.c
if(r.ix(u)&&r.e!=null){q=this.b
q.b=r.iq(u)
q.a=!1}}catch(p){t=H.aE(p)
s=H.bT(p)
r=H.d(this.a.a.c,"$iai")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ai(t,s)
n.a=!0}},
$S:8}
P.dM.prototype={}
P.i_.prototype={
gk:function(a){var u,t,s,r
u={}
t=new P.aB(0,$.Y,[P.n])
u.a=0
s=H.u(this,0)
r=H.f(new P.i1(u,this),{func:1,ret:-1,args:[s]})
H.f(new P.i2(u,t),{func:1,ret:-1})
W.a9(this.a,this.b,r,!1,s)
return t}}
P.i1.prototype={
$1:function(a){H.x(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.D,args:[H.u(this.b,0)]}}}
P.i2.prototype={
$0:function(){this.b.cC(this.a.a)},
$S:0}
P.cp.prototype={}
P.i0.prototype={}
P.b2.prototype={}
P.ai.prototype={
i:function(a){return H.l(this.a)},
$ibl:1}
P.jJ.prototype={$ipX:1}
P.jS.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dj()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:0}
P.jo.prototype={
iW:function(a){var u,t,s
H.f(a,{func:1,ret:-1})
try{if(C.f===$.Y){a.$0()
return}P.mP(null,null,this,a,-1)}catch(s){u=H.aE(s)
t=H.bT(s)
P.jR(null,null,this,u,H.d(t,"$iao"))}},
iX:function(a,b,c){var u,t,s
H.f(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.f===$.Y){a.$1(b)
return}P.mQ(null,null,this,a,b,-1,c)}catch(s){u=H.aE(s)
t=H.bT(s)
P.jR(null,null,this,u,H.d(t,"$iao"))}},
hR:function(a,b){return new P.jq(this,H.f(a,{func:1,ret:b}),b)},
bT:function(a){return new P.jp(this,H.f(a,{func:1,ret:-1}))},
d8:function(a,b){return new P.jr(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
dQ:function(a,b){H.f(a,{func:1,ret:b})
if($.Y===C.f)return a.$0()
return P.mP(null,null,this,a,b)},
cd:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.Y===C.f)return a.$1(b)
return P.mQ(null,null,this,a,b,c,d)},
iV:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.Y===C.f)return a.$2(b,c)
return P.oV(null,null,this,a,b,c,d,e,f)}}
P.jq.prototype={
$0:function(){return this.a.dQ(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jp.prototype={
$0:function(){return this.a.iW(this.b)},
$S:8}
P.jr.prototype={
$1:function(a){var u=this.c
return this.a.iX(this.b,H.x(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jl.prototype={
ga_:function(a){return P.mF(this,this.r,H.u(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u
H.x(b,H.u(this,0))
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null){u=P.mG()
this.c=u}return this.eJ(u,b)}else return this.ev(0,b)},
ev:function(a,b){var u,t,s
H.x(b,H.u(this,0))
u=this.d
if(u==null){u=P.mG()
this.d=u}t=this.cE(b)
s=u[t]
if(s==null)u[t]=[this.br(b)]
else{if(this.cK(s,b)>=0)return!1
s.push(this.br(b))}return!0},
G:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.h7(this.c,b)
else return this.h6(0,b)},
h6:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.f4(u,b)
s=this.cK(t,b)
if(s<0)return!1
this.d_(t.splice(s,1)[0])
return!0},
eJ:function(a,b){H.x(b,H.u(this,0))
if(H.d(a[b],"$icy")!=null)return!1
a[b]=this.br(b)
return!0},
h7:function(a,b){var u
if(a==null)return!1
u=H.d(a[b],"$icy")
if(u==null)return!1
this.d_(u)
delete a[b]
return!0},
cQ:function(){this.r=1073741823&this.r+1},
br:function(a){var u,t
u=new P.cy(H.x(a,H.u(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.cQ()
return u},
d_:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.cQ()},
cE:function(a){return J.cP(a)&1073741823},
f4:function(a,b){return a[this.cE(b)]},
cK:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(a[t].a==b)return t
return-1}}
P.cy.prototype={}
P.jm.prototype={
gM:function(a){return this.d},
F:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bC(u))
else{u=this.c
if(u==null){this.scB(null)
return!1}else{this.scB(H.x(u.a,H.u(this,0)))
this.c=this.c.b
return!0}}},
scB:function(a){this.d=H.x(a,H.u(this,0))},
$iaX:1}
P.h5.prototype={
$2:function(a,b){this.a.m(0,H.x(a,this.b),H.x(b,this.c))},
$S:12}
P.h6.prototype={$ik:1,$ib:1}
P.v.prototype={
ga_:function(a){return new H.dd(a,this.gk(a),0,[H.bv(this,a,"v",0)])},
J:function(a,b){return this.j(a,b)},
iZ:function(a,b){var u,t
u=H.h([],[H.bv(this,a,"v",0)])
C.a.sk(u,this.gk(a))
for(t=0;t<this.gk(a);++t)C.a.m(u,t,this.j(a,t))
return u},
cf:function(a){return this.iZ(a,!0)},
l:function(a,b){var u,t
u=[H.bv(this,a,"v",0)]
H.o(b,"$ib",u,"$ab")
t=H.h([],u)
C.a.sk(t,C.e.l(this.gk(a),b.gk(b)))
C.a.b3(t,0,this.gk(a),a)
C.a.b3(t,this.gk(a),t.length,b)
return t},
ig:function(a,b,c,d){var u
H.x(d,H.bv(this,a,"v",0))
P.be(b,c,this.gk(a),null,null,null)
for(u=b;u<c;++u)this.m(a,u,d)},
i:function(a){return P.lk(a,"[","]")}}
P.h9.prototype={}
P.ha.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.l(a)
u.a=t+": "
u.a+=H.l(b)},
$S:12}
P.af.prototype={
v:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[H.bv(this,a,"af",0),H.bv(this,a,"af",1)]})
for(u=J.c_(this.gah(a));u.F();){t=u.gM(u)
b.$2(t,this.j(a,t))}},
gk:function(a){return J.aF(this.gah(a))},
i:function(a){return P.lo(a)},
$iA:1}
P.jA.prototype={
m:function(a,b,c){H.x(b,H.u(this,0))
H.x(c,H.u(this,1))
throw H.c(P.C("Cannot modify unmodifiable map"))}}
P.hb.prototype={
j:function(a,b){return J.lP(this.a,b)},
m:function(a,b,c){J.ld(this.a,H.x(b,H.u(this,0)),H.x(c,H.u(this,1)))},
v:function(a,b){J.lR(this.a,H.f(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]}))},
gk:function(a){return J.aF(this.a)},
i:function(a){return J.aq(this.a)},
$iA:1}
P.dF.prototype={}
P.js.prototype={
i:function(a){return P.lk(this,"{","}")},
J:function(a,b){var u,t,s
if(b<0)H.O(P.ab(b,0,null,"index",null))
for(u=P.mF(this,this.r,H.u(this,0)),t=0;u.F();){s=u.d
if(b===t)return s;++t}throw H.c(P.W(b,this,"index",null,t))},
$ik:1,
$imm:1}
P.e0.prototype={}
P.et.prototype={}
P.eT.prototype={
iy:function(a,b,c,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a0=P.be(c,a0,b.length,null,null,null)
u=$.nu()
for(t=c,s=t,r=null,q=-1,p=-1,o=0;t<a0;t=n){n=t+1
m=C.b.H(b,t)
if(m===37){l=n+2
if(l<=a0){k=H.k7(C.b.H(b,n))
j=H.k7(C.b.H(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.b.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.at("")
g=r.a+=C.b.A(b,s,t)
r.a=g+H.dl(m)
s=n
continue}}throw H.c(P.a5("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.A(b,s,a0)
f=g.length
if(q>=0)P.lS(b,p,a0,q,o,f)
else{e=C.e.b1(f-1,4)+1
if(e===1)throw H.c(P.a5("Invalid base64 encoding length ",b,a0))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aL(b,c,a0,g.charCodeAt(0)==0?g:g)}d=a0-c
if(q>=0)P.lS(b,p,a0,q,o,d)
else{e=C.e.b1(d,4)
if(e===1)throw H.c(P.a5("Invalid base64 encoding length ",b,a0))
if(e>1)b=C.b.aL(b,a0,a0,e===2?"==":"=")}return b},
$abB:function(){return[[P.b,P.n],P.i]}}
P.eU.prototype={
$abD:function(){return[[P.b,P.n],P.i]}}
P.bB.prototype={}
P.bD.prototype={}
P.fg.prototype={
$abB:function(){return[P.i,[P.b,P.n]]}}
P.iG.prototype={
gie:function(){return C.H}}
P.iI.prototype={
aS:function(a,b,c){var u,t,s
c=P.be(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jI(t)
if(s.f3(a,b,c)!==c)s.d3(J.nB(a,c-1),0)
return new Uint8Array(t.subarray(0,H.oP(0,s.b,t.length)))},
bY:function(a){return this.aS(a,0,null)},
$abD:function(){return[P.i,[P.b,P.n]]}}
P.jI.prototype={
d3:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.e(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.e(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.e(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.e(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.e(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.e(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.e(u,t)
u[t]=128|a&63
return!1}},
f3:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.b.Z(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.b.H(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.d3(r,C.b.H(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.e(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.e(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.e(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.e(u,q)
u[q]=128|r&63}}return s}}
P.iH.prototype={
aS:function(a,b,c){var u,t,s,r
H.o(a,"$ib",[P.n],"$ab")
u=P.op(!1,a,b,c)
if(u!=null)return u
c=P.be(b,c,J.aF(a),null,null,null)
t=new P.at("")
s=new P.jG(!1,t)
s.aS(a,b,c)
if(s.e>0){H.O(P.a5("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.dl(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
bY:function(a){return this.aS(a,0,null)},
$abD:function(){return[[P.b,P.n],P.i]}}
P.jG.prototype={
aS:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.o(a,"$ib",[P.n],"$ab")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.jH(this,b,c,a)
$label0$0:for(q=J.bS(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.j(a,o)
if(typeof n!=="number")return n.bj()
if((n&192)!==128){m=P.a5("Bad UTF-8 encoding 0x"+C.e.b_(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.e(C.x,m)
if(u<=C.x[m]){m=P.a5("Overlong encoding of 0x"+C.e.b_(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a5("Character outside valid Unicode range: 0x"+C.e.b_(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.dl(u)
this.c=!1}for(m=o<c;m;){l=P.oW(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.j(a,k)
if(typeof n!=="number")return n.T()
if(n<0){i=P.a5("Negative UTF-8 code unit: -0x"+C.e.b_(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a5("Bad UTF-8 encoding 0x"+C.e.b_(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.jH.prototype={
$2:function(a,b){this.a.b.a+=P.dt(this.d,a,b)},
$S:41}
P.M.prototype={}
P.aj.prototype={
B:function(a,b){if(b==null)return!1
return b instanceof P.aj&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.e.aB(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.nK(H.o9(this))
t=P.cY(H.o7(this))
s=P.cY(H.o3(this))
r=P.cY(H.o4(this))
q=P.cY(H.o6(this))
p=P.cY(H.o8(this))
o=P.nL(H.o5(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.r.prototype={}
P.aW.prototype={
l:function(a,b){return new P.aW(C.e.l(this.a,b.geP()))},
n:function(a,b){return new P.aW(C.e.n(this.a,b.geP()))},
B:function(a,b){if(b==null)return!1
return b instanceof P.aW&&this.a===b.a},
gI:function(a){return C.e.gI(this.a)},
i:function(a){var u,t,s,r,q
u=new P.fe()
t=this.a
if(t<0)return"-"+new P.aW(0-t).i(0)
s=u.$1(C.e.aC(t,6e7)%60)
r=u.$1(C.e.aC(t,1e6)%60)
q=new P.fd().$1(t%1e6)
return""+C.e.aC(t,36e8)+":"+H.l(s)+":"+H.l(r)+"."+H.l(q)}}
P.fd.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:25}
P.fe.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:25}
P.bl.prototype={}
P.dj.prototype={
i:function(a){return"Throw of null."}}
P.aS.prototype={
gbt:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbs:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbt()+t+s
if(!this.a)return r
q=this.gbs()
p=P.fi(this.b)
return r+q+": "+p}}
P.bJ.prototype={
gbt:function(){return"RangeError"},
gbs:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.l(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.l(u)
else if(s>u)t=": Not in range "+H.l(u)+".."+H.l(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.l(u)}return t}}
P.fs.prototype={
gbt:function(){return"RangeError"},
gbs:function(){var u,t
u=H.ae(this.b)
if(typeof u!=="number")return u.T()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.l(t)},
gk:function(a){return this.f}}
P.iz.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iw.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ds.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f1.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fi(u)+"."}}
P.hv.prototype={
i:function(a){return"Out of Memory"},
$ibl:1}
P.dr.prototype={
i:function(a){return"Stack Overflow"},
$ibl:1}
P.f8.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dU.prototype={
i:function(a){return"Exception: "+this.a}}
P.fq.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.b.A(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.b.H(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.b.Z(r,m)
if(l===10||l===13){k=m
break}}if(k-o>78)if(s-o<75){j=o+75
i=o
h=""
g="..."}else{if(k-s<75){i=k-75
j=k
g=""}else{i=s-36
j=s+36
g="..."}h="..."}else{j=k
i=o
h=""
g=""}f=C.b.A(r,i,j)
return t+h+f+g+"\n"+C.b.u(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.l(s)+")"):t}}
P.n.prototype={}
P.k.prototype={
gk:function(a){var u,t
u=this.ga_(this)
for(t=0;u.F();)++t
return t},
J:function(a,b){var u,t,s
if(b<0)H.O(P.ab(b,0,null,"index",null))
for(u=this.ga_(this),t=0;u.F();){s=u.gM(u)
if(b===t)return s;++t}throw H.c(P.W(b,this,"index",null,t))},
i:function(a){return P.nR(this,"(",")")}}
P.aX.prototype={}
P.b.prototype={$ik:1}
P.A.prototype={}
P.D.prototype={
gI:function(a){return P.P.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.a4.prototype={}
P.P.prototype={constructor:P.P,$iP:1,
B:function(a,b){return this===b},
gI:function(a){return H.cl(this)},
i:function(a){return"Instance of '"+H.bI(this)+"'"},
toString:function(){return this.i(this)}}
P.ao.prototype={}
P.i.prototype={$im8:1}
P.at.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipz:1}
P.iE.prototype={
$2:function(a,b){var u,t,s,r
u=P.i
H.o(a,"$iA",[u,u],"$aA")
H.N(b)
t=J.lH(b).dv(b,"=")
if(t===-1){if(b!=="")J.ld(a,P.ly(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.b.A(b,0,t)
r=C.b.au(b,t+1)
u=this.a
J.ld(a,P.ly(s,0,s.length,u,!0),P.ly(r,0,r.length,u,!0))}return a},
$S:40}
P.iB.prototype={
$2:function(a,b){throw H.c(P.a5("Illegal IPv4 address, "+a,this.a,b))},
$S:39}
P.iC.prototype={
$2:function(a,b){throw H.c(P.a5("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:37}
P.iD.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eG(C.b.A(this.b,a,b),null,16)
if(typeof u!=="number")return u.T()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:36}
P.bO.prototype={
gdX:function(){return this.b},
gc0:function(a){var u=this.c
if(u==null)return""
if(C.b.a6(u,"["))return C.b.A(u,1,u.length-1)
return u},
gbf:function(a){var u=this.d
if(u==null)return P.mH(this.a)
return u},
gc9:function(a){var u=this.f
return u==null?"":u},
gdq:function(){var u=this.r
return u==null?"":u},
cc:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.o(h,"$iA",[P.i,null],"$aA")
i=this.a
u=i==="file"
j=this.b
f=this.d
t=this.c
if(t!=null)c=t
else if(j.length!==0||f!=null||u)c=""
d=this.e
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.b.a6(d,"/"))d="/"+d
g=P.lx(g,0,0,h)
return new P.bO(i,j,c,f,d,g,this.r)},
cb:function(a,b){return this.cc(a,null,null,null,null,null,null,b,null,null)},
gaJ:function(){var u,t
if(this.Q==null){u=this.f
t=P.i
this.sh5(new P.dF(P.mu(u==null?"":u,C.i),[t,t]))}return this.Q},
gdr:function(){return this.c!=null},
gdu:function(){return this.f!=null},
gds:function(){return this.r!=null},
i:function(a){var u,t,s,r
u=this.y
if(u==null){u=this.a
t=u.length!==0?H.l(u)+":":""
s=this.c
r=s==null
if(!r||u==="file"){u=t+"//"
t=this.b
if(t.length!==0)u=u+H.l(t)+"@"
if(!r)u+=s
t=this.d
if(t!=null)u=u+":"+H.l(t)}else u=t
u+=this.e
t=this.f
if(t!=null)u=u+"?"+t
t=this.r
if(t!=null)u=u+"#"+t
u=u.charCodeAt(0)==0?u:u
this.y=u}return u},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!!J.a0(b).$ils)if(this.a==b.gbn())if(this.c!=null===b.gdr())if(this.b==b.gdX())if(this.gc0(this)==b.gc0(b))if(this.gbf(this)==b.gbf(b))if(this.e===b.gdJ(b)){u=this.f
t=u==null
if(!t===b.gdu()){if(t)u=""
if(u===b.gc9(b)){u=this.r
t=u==null
if(!t===b.gds()){if(t)u=""
u=u===b.gdq()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
if(u==null){u=C.b.gI(this.i(0))
this.z=u}return u},
sh5:function(a){var u=P.i
this.Q=H.o(a,"$iA",[u,u],"$aA")},
$ils:1,
gbn:function(){return this.a},
gdJ:function(a){return this.e}}
P.jB.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.l()
throw H.c(P.a5("Invalid port",this.a,u+1))},
$S:33}
P.jC.prototype={
$1:function(a){return P.jF(C.V,a,C.i,!1)},
$S:45}
P.jE.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.l(P.jF(C.n,a,C.i,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.l(P.jF(C.n,b,C.i,!0))}},
$S:21}
P.jD.prototype={
$2:function(a,b){var u,t
H.N(a)
if(b==null||typeof b==="string")this.a.$2(a,H.N(b))
else for(u=J.c_(H.n7(b,"$ik")),t=this.a;u.F();)t.$2(a,H.N(u.gM(u)))},
$S:29}
P.iA.prototype={
gdV:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
u=u[0]+1
s=C.b.dw(t,"?",u)
r=t.length
if(s>=0){q=P.cI(t,s+1,r,C.l,!1)
r=s}else q=null
u=new P.j5(this,"data",null,null,null,P.cI(t,u,r,C.z,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.jN.prototype={
$1:function(a){return new Uint8Array(96)},
$S:53}
P.jM.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.nC(u,0,96,b)
return u},
$S:28}
P.jO.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.b.H(b,t)^96
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.jP.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.b.H(b,0),t=C.b.H(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.jt.prototype={
gdr:function(){return this.c>0},
gdt:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.l()
t=this.e
if(typeof t!=="number")return H.p(t)
t=u+1<t
u=t}else u=!1
return u},
gdu:function(){var u=this.f
if(typeof u!=="number")return u.T()
return u<this.r},
gds:function(){return this.r<this.a.length},
gcO:function(){return this.b===4&&C.b.a6(this.a,"http")},
gcP:function(){return this.b===5&&C.b.a6(this.a,"https")},
gbn:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gcO()){this.x="http"
u="http"}else if(this.gcP()){this.x="https"
u="https"}else if(u===4&&C.b.a6(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.b.a6(this.a,"package")){this.x="package"
u="package"}else{u=C.b.A(this.a,0,u)
this.x=u}return u},
gdX:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.b.A(this.a,t,u-1):""},
gc0:function(a){var u=this.c
return u>0?C.b.A(this.a,u,this.d):""},
gbf:function(a){var u
if(this.gdt()){u=this.d
if(typeof u!=="number")return u.l()
return P.eG(C.b.A(this.a,u+1,this.e),null,null)}if(this.gcO())return 80
if(this.gcP())return 443
return 0},
gdJ:function(a){return C.b.A(this.a,this.e,this.f)},
gc9:function(a){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.T()
return u<t?C.b.A(this.a,u+1,t):""},
gdq:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.b.au(t,u+1):""},
gaJ:function(){var u=this.f
if(typeof u!=="number")return u.T()
if(u>=this.r)return C.W
u=P.i
return new P.dF(P.mu(this.gc9(this),C.i),[u,u])},
cc:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.o(h,"$iA",[P.i,null],"$aA")
i=this.gbn()
u=i==="file"
t=this.c
j=t>0?C.b.A(this.a,this.b+3,t):""
f=this.gdt()?this.gbf(this):null
t=this.c
if(t>0)c=C.b.A(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.b.A(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.b.a6(d,"/"))d="/"+d
g=P.lx(g,0,0,h)
s=this.r
if(s<t.length)b=C.b.au(t,s+1)
return new P.bO(i,j,c,f,d,g,b)},
cb:function(a,b){return this.cc(a,null,null,null,null,null,null,b,null,null)},
gI:function(a){var u=this.y
if(u==null){u=C.b.gI(this.a)
this.y=u}return u},
B:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.a0(b).$ils&&this.a===b.i(0)},
i:function(a){return this.a},
$ils:1}
P.j5.prototype={}
W.t.prototype={}
W.eJ.prototype={
gk:function(a){return a.length}}
W.eL.prototype={
i:function(a){return String(a)}}
W.eM.prototype={
i:function(a){return String(a)}}
W.bz.prototype={$ibz:1}
W.cR.prototype={}
W.bA.prototype={
e1:function(a,b,c){var u=this.f5(a,b,P.p1(c,null))
return u},
f5:function(a,b,c){return a.getContext(b,c)},
$ibA:1}
W.bk.prototype={
gk:function(a){return a.length}}
W.c5.prototype={$ic5:1}
W.f4.prototype={
gk:function(a){return a.length}}
W.U.prototype={$iU:1}
W.c6.prototype={
gk:function(a){return a.length}}
W.f5.prototype={}
W.aU.prototype={}
W.aV.prototype={}
W.f6.prototype={
gk:function(a){return a.length}}
W.f7.prototype={
gk:function(a){return a.length}}
W.f9.prototype={
gk:function(a){return a.length}}
W.c7.prototype={$ic7:1}
W.c8.prototype={
bk:function(a,b){return a.getElementById(b)}}
W.fa.prototype={
i:function(a){return String(a)}}
W.cZ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.o(c,"$ia8",[P.a4],"$aa8")
throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[[P.a8,P.a4]]},
$av:function(){return[[P.a8,P.a4]]},
$ik:1,
$ak:function(){return[[P.a8,P.a4]]},
$ib:1,
$ab:function(){return[[P.a8,P.a4]]},
$az:function(){return[[P.a8,P.a4]]}}
W.d_.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gat(a))+" x "+H.l(this.gar(a))},
B:function(a,b){var u
if(b==null)return!1
if(!H.cM(b,"$ia8",[P.a4],"$aa8"))return!1
u=J.bg(b)
return a.left===u.gbe(b)&&a.top===u.gbh(b)&&this.gat(a)===u.gat(b)&&this.gar(a)===u.gar(b)},
gI:function(a){return W.mE(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(this.gat(a)),C.d.gI(this.gar(a)))},
gda:function(a){return a.bottom},
gar:function(a){return a.height},
gbe:function(a){return a.left},
gdP:function(a){return a.right},
gbh:function(a){return a.top},
gat:function(a){return a.width},
$ia8:1,
$aa8:function(){return[P.a4]}}
W.fb.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.N(c)
throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[P.i]},
$av:function(){return[P.i]},
$ik:1,
$ak:function(){return[P.i]},
$ib:1,
$ab:function(){return[P.i]},
$az:function(){return[P.i]}}
W.fc.prototype={
gk:function(a){return a.length}}
W.j3.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.d(u[b],"$ia2")},
m:function(a,b,c){var u
H.d(c,"$ia2")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
J.le(this.a,c,u[b])},
h:function(a,b){J.lQ(this.a,b)
return b},
ga_:function(a){var u=this.cf(this)
return new J.au(u,u.length,0,[H.u(u,0)])},
$av:function(){return[W.a2]},
$ak:function(){return[W.a2]},
$ab:function(){return[W.a2]}}
W.a2.prototype={
gbX:function(a){return new W.j3(a,a.children)},
gde:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.T()
if(s<0)s=-s*0
if(typeof r!=="number")return r.T()
if(r<0)r=-r*0
return new P.a8(u,t,s,r,[P.a4])},
i:function(a){return a.localName},
$ia2:1}
W.m.prototype={$im:1}
W.j.prototype={
hL:function(a,b,c,d){H.f(c,{func:1,args:[W.m]})
if(c!=null)this.ew(a,b,c,!1)},
ew:function(a,b,c,d){return a.addEventListener(b,H.bR(H.f(c,{func:1,args:[W.m]}),1),!1)},
$ij:1}
W.av.prototype={$iav:1}
W.ca.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iav")
throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.av]},
$av:function(){return[W.av]},
$ik:1,
$ak:function(){return[W.av]},
$ib:1,
$ab:function(){return[W.av]},
$ica:1,
$az:function(){return[W.av]}}
W.fl.prototype={
gk:function(a){return a.length}}
W.fp.prototype={
gk:function(a){return a.length}}
W.aG.prototype={$iaG:1}
W.d3.prototype={
cW:function(a,b,c,d){return a.replaceState(b,c,d)},
gk:function(a){return a.length}}
W.bG.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iH")
throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.H]},
$av:function(){return[W.H]},
$ik:1,
$ak:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$ibG:1,
$az:function(){return[W.H]}}
W.d4.prototype={}
W.cd.prototype={$icd:1}
W.ce.prototype={$ice:1,$ic3:1}
W.c3.prototype={$ia2:1,$ij:1,$iH:1}
W.aY.prototype={$iaY:1}
W.dc.prototype={}
W.h7.prototype={
i:function(a){return String(a)}}
W.hf.prototype={
gk:function(a){return a.length}}
W.hg.prototype={
j:function(a,b){return P.bf(a.get(H.N(b)))},
v:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bf(t.value[1]))}},
gah:function(a){var u=H.h([],[P.i])
this.v(a,new W.hh(u))
return u},
gk:function(a){return a.size},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$aaf:function(){return[P.i,null]},
$iA:1,
$aA:function(){return[P.i,null]}}
W.hh.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:13}
W.hi.prototype={
j:function(a,b){return P.bf(a.get(H.N(b)))},
v:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bf(t.value[1]))}},
gah:function(a){var u=H.h([],[P.i])
this.v(a,new W.hj(u))
return u},
gk:function(a){return a.size},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$aaf:function(){return[P.i,null]},
$iA:1,
$aA:function(){return[P.i,null]}}
W.hj.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:13}
W.aI.prototype={$iaI:1}
W.hk.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iaI")
throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aI]},
$av:function(){return[W.aI]},
$ik:1,
$ak:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$az:function(){return[W.aI]}}
W.ac.prototype={$iac:1}
W.j2.prototype={
m:function(a,b,c){var u,t
H.d(c,"$iH")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
J.le(u,c,t[b])},
ga_:function(a){var u=this.a.childNodes
return new W.d1(u,u.length,-1,[H.bv(C.X,u,"z",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$av:function(){return[W.H]},
$ak:function(){return[W.H]},
$ab:function(){return[W.H]}}
W.H.prototype={
iS:function(a,b){var u,t
try{u=a.parentNode
J.le(u,b,a)}catch(t){H.aE(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eb(a):u},
W:function(a,b){return a.appendChild(b)},
ha:function(a,b,c){return a.replaceChild(b,c)},
$iH:1}
W.ck.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iH")
throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.H]},
$av:function(){return[W.H]},
$ik:1,
$ak:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$az:function(){return[W.H]}}
W.aJ.prototype={$iaJ:1,
gk:function(a){return a.length}}
W.hx.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iaJ")
throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aJ]},
$av:function(){return[W.aJ]},
$ik:1,
$ak:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$az:function(){return[W.aJ]}}
W.hI.prototype={
j:function(a,b){return P.bf(a.get(H.N(b)))},
v:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bf(t.value[1]))}},
gah:function(a){var u=H.h([],[P.i])
this.v(a,new W.hJ(u))
return u},
gk:function(a){return a.size},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$aaf:function(){return[P.i,null]},
$iA:1,
$aA:function(){return[P.i,null]}}
W.hJ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:13}
W.hL.prototype={
gk:function(a){return a.length}}
W.aK.prototype={$iaK:1}
W.hU.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iaK")
throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aK]},
$av:function(){return[W.aK]},
$ik:1,
$ak:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$az:function(){return[W.aK]}}
W.aL.prototype={$iaL:1}
W.hV.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iaL")
throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aL]},
$av:function(){return[W.aL]},
$ik:1,
$ak:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$az:function(){return[W.aL]}}
W.aM.prototype={$iaM:1,
gk:function(a){return a.length}}
W.hY.prototype={
j:function(a,b){return this.cL(a,H.N(b))},
m:function(a,b,c){this.he(a,b,c)},
v:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[P.i,P.i]})
for(u=0;!0;++u){t=this.f9(a,u)
if(t==null)return
b.$2(t,this.cL(a,t))}},
gah:function(a){var u=H.h([],[P.i])
this.v(a,new W.hZ(u))
return u},
gk:function(a){return a.length},
cL:function(a,b){return a.getItem(b)},
f9:function(a,b){return a.key(b)},
he:function(a,b,c){return a.setItem(b,c)},
$aaf:function(){return[P.i,P.i]},
$iA:1,
$aA:function(){return[P.i,P.i]}}
W.hZ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:21}
W.ax.prototype={$iax:1}
W.b1.prototype={$ib1:1}
W.du.prototype={
f7:function(a,b){return a.insertRow(b)}}
W.dv.prototype={
cN:function(a,b){return a.insertCell(b)}}
W.aN.prototype={$iaN:1}
W.ay.prototype={$iay:1}
W.i5.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iay")
throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.ay]},
$av:function(){return[W.ay]},
$ik:1,
$ak:function(){return[W.ay]},
$ib:1,
$ab:function(){return[W.ay]},
$az:function(){return[W.ay]}}
W.i6.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iaN")
throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aN]},
$av:function(){return[W.aN]},
$ik:1,
$ak:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$az:function(){return[W.aN]}}
W.i9.prototype={
gk:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.aP.prototype={$iaP:1}
W.ic.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iaO")
throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aO]},
$av:function(){return[W.aO]},
$ik:1,
$ak:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$az:function(){return[W.aO]}}
W.id.prototype={
gk:function(a){return a.length}}
W.br.prototype={}
W.iF.prototype={
i:function(a){return String(a)}}
W.iV.prototype={
gk:function(a){return a.length}}
W.b5.prototype={
gi8:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.C("deltaY is not supported"))},
gi7:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.C("deltaX is not supported"))},
$ib5:1}
W.cw.prototype={
hc:function(a,b){return a.requestAnimationFrame(H.bR(H.f(b,{func:1,ret:-1,args:[P.a4]}),1))},
eQ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.j4.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iU")
throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.U]},
$av:function(){return[W.U]},
$ik:1,
$ak:function(){return[W.U]},
$ib:1,
$ab:function(){return[W.U]},
$az:function(){return[W.U]}}
W.dP.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
B:function(a,b){var u
if(b==null)return!1
if(!H.cM(b,"$ia8",[P.a4],"$aa8"))return!1
u=J.bg(b)
return a.left===u.gbe(b)&&a.top===u.gbh(b)&&a.width===u.gat(b)&&a.height===u.gar(b)},
gI:function(a){return W.mE(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(a.width),C.d.gI(a.height))},
gar:function(a){return a.height},
gat:function(a){return a.width}}
W.ji.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iaG")
throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aG]},
$av:function(){return[W.aG]},
$ik:1,
$ak:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$az:function(){return[W.aG]}}
W.e5.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iH")
throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.H]},
$av:function(){return[W.H]},
$ik:1,
$ak:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$az:function(){return[W.H]}}
W.ju.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iaM")
throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aM]},
$av:function(){return[W.aM]},
$ik:1,
$ak:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$az:function(){return[W.aM]}}
W.jx.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iax")
throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.ax]},
$av:function(){return[W.ax]},
$ik:1,
$ak:function(){return[W.ax]},
$ib:1,
$ab:function(){return[W.ax]},
$az:function(){return[W.ax]}}
W.j6.prototype={}
W.lw.prototype={}
W.j7.prototype={}
W.j8.prototype={
$1:function(a){return this.a.$1(H.d(a,"$im"))},
$S:30}
W.z.prototype={
ga_:function(a){return new W.d1(a,this.gk(a),-1,[H.bv(this,a,"z",0)])}}
W.d1.prototype={
F:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.scM(J.lP(this.a,u))
this.c=u
return!0}this.scM(null)
this.c=t
return!1},
gM:function(a){return this.d},
scM:function(a){this.d=H.x(a,H.u(this,0))},
$iaX:1}
W.dO.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.cD.prototype={}
W.cE.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ei.prototype={}
W.em.prototype={}
W.en.prototype={}
W.cF.prototype={}
W.cG.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
P.jv.prototype={
dl:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
bi:function(a){var u,t,s,r,q
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.a0(a)
if(!!t.$iaj)return new Date(a.a)
if(!!t.$ioe)throw H.c(P.ix("structured clone of RegExp"))
if(!!t.$iav)return a
if(!!t.$ibz)return a
if(!!t.$ica)return a
if(!!t.$icd)return a
if(!!t.$ich||!!t.$ibp)return a
if(!!t.$iA){s=this.dl(a)
r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
u.a=q
if(q!=null)return q
q={}
u.a=q
C.a.m(r,s,q)
t.v(a,new P.jw(u,this))
return u.a}if(!!t.$ib){s=this.dl(a)
u=this.b
if(s>=u.length)return H.e(u,s)
q=u[s]
if(q!=null)return q
return this.i2(a,s)}throw H.c(P.ix("structured clone of other type"))},
i2:function(a,b){var u,t,s,r
u=J.bS(a)
t=u.gk(a)
s=new Array(t)
C.a.m(this.b,b,s)
for(r=0;r<t;++r)C.a.m(s,r,this.bi(u.j(a,r)))
return s}}
P.jw.prototype={
$2:function(a,b){this.a.a[a]=this.b.bi(b)},
$S:12}
P.jU.prototype={
$2:function(a,b){this.a[a]=b},
$S:12}
P.el.prototype={}
P.fm.prototype={
gb6:function(){var u,t,s
u=this.b
t=H.aD(u,"v",0)
s=W.a2
return new H.hc(new H.iX(u,H.f(new P.fn(),{func:1,ret:P.M,args:[t]}),[t]),H.f(new P.fo(),{func:1,ret:s,args:[t]}),[t,s])},
m:function(a,b,c){var u
H.d(c,"$ia2")
u=this.gb6()
J.nD(u.b.$1(J.lf(u.a,b)),c)},
h:function(a,b){J.lQ(this.b.a,b)},
gk:function(a){return J.aF(this.gb6().a)},
j:function(a,b){var u=this.gb6()
return u.b.$1(J.lf(u.a,b))},
ga_:function(a){var u=P.nZ(this.gb6(),!1,W.a2)
return new J.au(u,u.length,0,[H.u(u,0)])},
$av:function(){return[W.a2]},
$ak:function(){return[W.a2]},
$ab:function(){return[W.a2]}}
P.fn.prototype={
$1:function(a){return!!J.a0(H.d(a,"$iH")).$ia2},
$S:31}
P.fo.prototype={
$1:function(a){return H.al(H.d(a,"$iH"),"$ia2")},
$S:32}
P.jn.prototype={
gdP:function(a){var u=this.a
if(typeof u!=="number")return u.l()
return H.x(u+this.c,H.u(this,0))},
gda:function(a){var u=this.b
if(typeof u!=="number")return u.l()
return H.x(u+this.d,H.u(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
B:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cM(b,"$ia8",[P.a4],"$aa8")){u=this.a
t=J.bg(b)
if(u==t.gbe(b)){s=this.b
if(s==t.gbh(b)){if(typeof u!=="number")return u.l()
r=H.u(this,0)
if(H.x(u+this.c,r)===t.gdP(b)){if(typeof s!=="number")return s.l()
u=H.x(s+this.d,r)===t.gda(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t,s,r,q
u=this.a
t=J.cP(u)
s=this.b
r=J.cP(s)
if(typeof u!=="number")return u.l()
q=H.u(this,0)
u=C.e.gI(H.x(u+this.c,q))
if(typeof s!=="number")return s.l()
q=C.e.gI(H.x(s+this.d,q))
return P.oz(P.jk(P.jk(P.jk(P.jk(0,t),r),u),q))}}
P.a8.prototype={
gbe:function(a){return this.a},
gbh:function(a){return this.b},
gat:function(a){return this.c},
gar:function(a){return this.d}}
P.aZ.prototype={$iaZ:1}
P.h0.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return this.ak(a,b)},
m:function(a,b,c){H.d(c,"$iaZ")
throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
ak:function(a,b){return a.getItem(b)},
$av:function(){return[P.aZ]},
$ik:1,
$ak:function(){return[P.aZ]},
$ib:1,
$ab:function(){return[P.aZ]},
$az:function(){return[P.aZ]}}
P.b_.prototype={$ib_:1}
P.ht.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return this.ak(a,b)},
m:function(a,b,c){H.d(c,"$ib_")
throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
ak:function(a,b){return a.getItem(b)},
$av:function(){return[P.b_]},
$ik:1,
$ak:function(){return[P.b_]},
$ib:1,
$ab:function(){return[P.b_]},
$az:function(){return[P.b_]}}
P.hz.prototype={
gk:function(a){return a.length}}
P.i3.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return this.ak(a,b)},
m:function(a,b,c){H.N(c)
throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
ak:function(a,b){return a.getItem(b)},
$av:function(){return[P.i]},
$ik:1,
$ak:function(){return[P.i]},
$ib:1,
$ab:function(){return[P.i]},
$az:function(){return[P.i]}}
P.q.prototype={
gbX:function(a){return new P.fm(a,new W.j2(a))}}
P.b3.prototype={$ib3:1}
P.ie.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return this.ak(a,b)},
m:function(a,b,c){H.d(c,"$ib3")
throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
ak:function(a,b){return a.getItem(b)},
$av:function(){return[P.b3]},
$ik:1,
$ak:function(){return[P.b3]},
$ib:1,
$ab:function(){return[P.b3]},
$az:function(){return[P.b3]}}
P.dZ.prototype={}
P.e_.prototype={}
P.e8.prototype={}
P.e9.prototype={}
P.ej.prototype={}
P.ek.prototype={}
P.er.prototype={}
P.es.prototype={}
P.S.prototype={$ik:1,
$ak:function(){return[P.n]},
$ib:1,
$ab:function(){return[P.n]}}
P.eP.prototype={
gk:function(a){return a.length}}
P.eQ.prototype={
j:function(a,b){return P.bf(a.get(H.N(b)))},
v:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bf(t.value[1]))}},
gah:function(a){var u=H.h([],[P.i])
this.v(a,new P.eR(u))
return u},
gk:function(a){return a.size},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$aaf:function(){return[P.i,null]},
$iA:1,
$aA:function(){return[P.i,null]}}
P.eR.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:13}
P.eS.prototype={
gk:function(a){return a.length}}
P.by.prototype={}
P.hu.prototype={
gk:function(a){return a.length}}
P.dN.prototype={}
P.cS.prototype={$icS:1}
P.d2.prototype={$id2:1}
P.dm.prototype={$idm:1}
P.bK.prototype={
d7:function(a,b,c){return a.attachShader(b,c)},
ag:function(a,b,c){return a.bindBuffer(b,c)},
hS:function(a,b,c){return a.bindFramebuffer(b,c)},
aD:function(a,b,c){return a.blendFunc(b,c)},
dc:function(a,b,c,d){return a.bufferData(b,c,d)},
hX:function(a,b){return a.clear(b)},
hY:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
hZ:function(a,b){return a.clearDepth(b)},
i0:function(a,b){return a.compileShader(b)},
i3:function(a,b){return a.createShader(b)},
i5:function(a,b){return a.deleteProgram(b)},
i6:function(a,b){return a.deleteShader(b)},
i9:function(a,b){return a.depthFunc(b)},
df:function(a,b){return a.disable(b)},
dg:function(a,b){return a.disableVertexAttribArray(b)},
ib:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
aq:function(a,b){return a.enable(b)},
dk:function(a,b){return a.enableVertexAttribArray(b)},
dZ:function(a,b,c){return a.getActiveAttrib(b,c)},
e_:function(a,b,c){return a.getActiveUniform(b,c)},
e0:function(a,b,c){return a.getAttribLocation(b,c)},
cj:function(a,b){return a.getParameter(b)},
e2:function(a,b){return a.getProgramInfoLog(b)},
bl:function(a,b,c){return a.getProgramParameter(b,c)},
e3:function(a,b){return a.getShaderInfoLog(b)},
e4:function(a,b,c){return a.getShaderParameter(b,c)},
e5:function(a,b,c){return a.getUniformLocation(b,c)},
iv:function(a,b){return a.linkProgram(b)},
e9:function(a,b,c){return a.shaderSource(b,c)},
j1:function(a,b,c){return a.uniform1f(b,c)},
j2:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
j3:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
j4:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
dW:function(a,b){return a.useProgram(b)},
j5:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
j6:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibK:1}
P.dq.prototype={$idq:1}
P.dD.prototype={$idD:1}
P.hW.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.W(b,a,null,null,null))
return P.bf(this.f8(a,b))},
m:function(a,b,c){H.d(c,"$iA")
throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
f8:function(a,b){return a.item(b)},
$av:function(){return[[P.A,,,]]},
$ik:1,
$ak:function(){return[[P.A,,,]]},
$ib:1,
$ab:function(){return[[P.A,,,]]},
$az:function(){return[[P.A,,,]]}}
P.ef.prototype={}
P.eg.prototype={}
O.aa.prototype={
co:function(a){this.sfd(H.h([],[a]))
this.scS(null)
this.scR(null)
this.scT(null)},
e7:function(a,b,c){var u={func:1,ret:-1,args:[P.n,[P.k,H.aD(this,"aa",0)]]}
H.f(a,u)
H.f(c,u)
this.scS(b)
this.scR(a)
this.scT(c)},
bo:function(a,b){return this.e7(a,null,b)},
fW:function(a){H.o(a,"$ik",[H.aD(this,"aa",0)],"$ak")
return!0},
ej:function(a,b){var u
H.o(b,"$ik",[H.aD(this,"aa",0)],"$ak")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
ga_:function(a){var u=this.a
return new J.au(u,u.length,0,[H.u(u,0)])},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.aD(this,"aa",0)
H.x(b,u)
u=[u]
if(this.fW(H.h([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.ej(s,H.h([b],u))}},
sfd:function(a){this.a=H.o(a,"$ib",[H.aD(this,"aa",0)],"$ab")},
scS:function(a){this.b=H.f(a,{func:1,ret:P.M,args:[[P.k,H.aD(this,"aa",0)]]})},
scR:function(a){this.c=H.f(a,{func:1,ret:-1,args:[P.n,[P.k,H.aD(this,"aa",0)]]})},
scT:function(a){this.d=H.f(a,{func:1,ret:-1,args:[P.n,[P.k,H.aD(this,"aa",0)]]})},
$ik:1}
O.cf.prototype={
gk:function(a){return this.a.length},
gD:function(){var u=this.b
if(u==null){u=D.a1()
this.b=u}return u},
ek:function(a){var u=this.b
if(u!=null)u.K(a)},
av:function(){return this.ek(null)},
gai:function(a){var u=this.a
if(u.length>0)return C.a.gas(u)
else return V.he()},
dL:function(a){var u=this.a
if(a==null)C.a.h(u,V.he())
else C.a.h(u,a)
this.av()},
c8:function(){var u=this.a
if(u.length>0){u.pop()
this.av()}},
sbw:function(a){this.a=H.o(a,"$ib",[V.bo],"$ab")}}
E.eV.prototype={}
E.an.prototype={
scl:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gD().G(0,this.gdG())
t=this.c
if(t!=null)t.gD().h(0,this.gdG())
s=new D.E("shape",u,this.c,this,[F.a7])
s.b=!0
this.ac(s)}},
saW:function(a){var u,t
if(!J.K(this.r,a)){u=this.r
if(u!=null)u.gD().G(0,this.gdE())
if(a!=null)a.gD().h(0,this.gdE())
this.r=a
t=new D.E("mover",u,a,this,[U.ad])
t.b=!0
this.ac(t)}},
aM:function(a,b){var u,t,s,r
u=this.r
t=u!=null?u.aN(0,b,this):null
if(!J.K(t,this.x)){s=this.x
this.x=t
r=new D.E("matrix",s,t,this,[V.bo])
r.b=!0
this.ac(r)}for(u=this.y.a,u=new J.au(u,u.length,0,[H.u(u,0)]);u.F();)u.d.aM(0,b)},
aK:function(a){var u,t,s,r,q,p,o,n,m
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gai(u))
else C.a.h(u.a,t.u(0,u.gai(u)))
u.av()
a.dM(this.f)
u=a.dy
s=(u&&C.a).gas(u)
if(s!=null&&this.d!=null){if(s.a==null){r=a.fr.j(0,"Inspection")
if(r==null){u=a.a
r=new A.ft(u,"Inspection")
r.eh(u,"Inspection")
t=$.nQ
q=$.nP
r.c=t
r.d=q
r.e=r.cH(t,35633)
r.f=r.cH(r.d,35632)
t=u.createProgram()
r.r=t
C.c.d7(u,t,r.e)
C.c.d7(u,r.r,r.f)
C.c.iv(u,r.r)
if(!H.mY(C.c.bl(u,r.r,35714))){p=C.c.e2(u,r.r)
C.c.i5(u,r.r)
H.O(P.V("Failed to link shader: "+H.l(p)))}r.hh()
r.hj()
r.z=r.x.j(0,"posAttr")
r.Q=r.x.j(0,"normAttr")
r.ch=r.x.j(0,"clrAttr")
r.cx=r.x.j(0,"binmAttr")
r.cy=H.al(r.y.j(0,"lightVec"),"$idC")
r.db=H.al(r.y.j(0,"ambientClr"),"$ics")
r.dx=H.al(r.y.j(0,"diffuseClr"),"$ics")
r.dy=H.al(r.y.j(0,"weightScalar"),"$idB")
r.fr=H.al(r.y.j(0,"viewMat"),"$ibN")
r.fx=H.al(r.y.j(0,"viewObjMatrix"),"$ibN")
r.fy=H.al(r.y.j(0,"projViewObjMatrix"),"$ibN")
if(a.fr.bb(0,"Inspection"))H.O(P.V('Shader cache already contains a shader by the name "Inspection".'))
a.fr.m(0,"Inspection",r)}s.a=r}if(this.e==null){this.d.a8()
u=this.d
t=u.e
if(t!=null)++t.d
u.d.bV()
u.a.bV()
u=u.e
if(u!=null)u.aj(0)
u=this.d
t=u.e
if(t!=null)++t.d
u.a.hU()
u=u.e
if(u!=null)u.aj(0)
u=new Z.cU()
u.sfi(new H.aw([P.i,Z.c2]))
this.e=u}u=s.a
t=a.a
C.c.dW(t,u.r)
u.x.ic()
q=s.r2
o=u.dy
C.c.j1(o.a,o.d,q)
q=s.b
o=u.cy
o.toString
n=q.a
m=q.b
q=q.c
C.c.j2(o.a,o.d,n,m,q)
q=a.db
q=q.gai(q)
m=u.fr
m.toString
m.bp(q.cg(0,!0))
q=a.cx
if(q==null){q=a.db
q=q.gai(q)
o=a.dx
o=q.u(0,o.gai(o))
a.cx=o
q=o}o=u.fx
o.toString
o.bp(q.cg(0,!0))
q=a.ch
if(q==null){q=a.z
if(q==null){q=a.cy
q=q.gai(q)
o=a.db
o=q.u(0,o.gai(o))
a.z=o
q=o}o=a.dx
o=q.u(0,o.gai(o))
a.ch=o
q=o}u=u.fy
u.toString
u.bp(q.cg(0,!0))
u=this.e
if(u instanceof Z.cU){C.c.aD(t,1,1)
if(this.c==null){C.c.df(t,2929)
C.c.aq(t,3042)
C.c.aD(t,1,1)
if(s.k3)s.cV(a,u,this.d,"Axis",H.f(s.gcz(),{func:1,ret:F.a7,args:[F.bL]}),s.z,s.y)
if(s.k4)s.cV(a,u,this.d,"AABB",H.f(s.gcu(),{func:1,ret:F.a7,args:[F.bL]}),s.z,s.y)
C.c.aq(t,2929)
C.c.aD(t,770,771)}else{C.c.aq(t,2929)
C.c.aq(t,3042)
C.c.aD(t,770,771)
if(s.Q)s.a0(a,u,this.c,"shapeFill",s.ghl(),s.d,s.c)
if(s.id)s.a0(a,u,this.c,"colorFill",s.geK(),s.x,s.r)
if(s.k1)s.a0(a,u,this.c,"txt2DColor",s.ghA(),s.x,s.r)
if(s.k2)s.a0(a,u,this.c,"weight",s.ghG(),s.x,s.r)
if(s.r1)s.a0(a,u,this.c,"bend1",s.geB(),s.x,s.r)
C.c.df(t,2929)
C.c.aD(t,1,1)
if(s.cx)s.a0(a,u,this.c,"vertices",s.gen(),s.f,s.e)
if(s.fr)s.a0(a,u,this.c,"faceCenters",s.geU(),s.f,s.e)
if(s.ch)s.a0(a,u,this.c,"wireFrame",s.ghI(),s.f,s.e)
if(s.cy)s.a0(a,u,this.c,"normals",s.gfm(),s.f,s.e)
if(s.db)s.a0(a,u,this.c,"binormals",s.geD(),s.f,s.e)
if(s.dx)s.a0(a,u,this.c,"tangentals",s.ghp(),s.f,s.e)
if(s.dy)s.a0(a,u,this.c,"textureCube",s.ghC(),s.f,s.e)
if(s.fx)s.a0(a,u,this.c,"faceNormals",s.geW(),s.f,s.e)
if(s.fy)s.a0(a,u,this.c,"faceBinormals",s.geS(),s.x,s.r)
if(s.go)s.a0(a,u,this.c,"faceTangentals",s.geY(),s.x,s.r)
if(s.k3)s.a0(a,u,this.c,"Axis",s.gcz(),s.z,s.y)
if(s.k4)s.a0(a,u,this.c,"AABB",s.gcu(),s.z,s.y)
C.c.aq(t,2929)
C.c.aD(t,770,771)}}else this.e=null
u=s.a
u.toString
C.c.dW(t,null)
u.x.ia()}for(u=this.y.a,u=new J.au(u,u.length,0,[H.u(u,0)]);u.F();)u.d.aK(a)
a.dK()
a.dx.c8()},
gD:function(){var u=this.z
if(u==null){u=D.a1()
this.z=u}return u},
ac:function(a){var u=this.z
if(u!=null)u.K(a)},
S:function(){return this.ac(null)},
dH:function(a){H.d(a,"$iB")
this.e=null
this.ac(a)},
iF:function(){return this.dH(null)},
dF:function(a){this.ac(H.d(a,"$iB"))},
iE:function(){return this.dF(null)},
dD:function(a){this.ac(H.d(a,"$iB"))},
iB:function(){return this.dD(null)},
iA:function(a,b){var u,t,s,r,q,p,o
H.o(b,"$ik",[E.an],"$ak")
for(u=b.length,t=this.gdC(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.L)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c9()
o.san(null)
o.sbG(null)
o.c=null
o.d=0
p.z=o}H.f(t,s)
if(o.a==null)o.san(H.h([],r))
o=o.a;(o&&C.a).h(o,t)}}this.S()},
iD:function(a,b){var u,t
H.o(b,"$ik",[E.an],"$ak")
for(u=b.ga_(b),t=this.gdC();u.F();)u.gM(u).gD().G(0,t)
this.S()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
seI:function(a,b){this.y=H.o(b,"$iaa",[E.an],"$aaa")},
$im6:1}
E.hE.prototype={
ef:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.aj(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cf()
t=[V.bo]
u.sbw(H.h([],t))
u.b=null
u.gD().h(0,new E.hF(this))
this.cy=u
u=new O.cf()
u.sbw(H.h([],t))
u.b=null
u.gD().h(0,new E.hG(this))
this.db=u
u=new O.cf()
u.sbw(H.h([],t))
u.b=null
u.gD().h(0,new E.hH(this))
this.dx=u
this.shr(H.h([],[O.bM]))
u=this.dy;(u&&C.a).h(u,null)
this.shk(new H.aw([P.i,A.cn]))},
dM:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gas(u):a;(u&&C.a).h(u,t)},
dK:function(){var u=this.dy
if(u.length>1)u.pop()},
shr:function(a){this.dy=H.o(a,"$ib",[O.bM],"$ab")},
shk:function(a){this.fr=H.o(a,"$iA",[P.i,A.cn],"$aA")}}
E.hF.prototype={
$1:function(a){var u
H.d(a,"$iB")
u=this.a
u.z=null
u.ch=null},
$S:19}
E.hG.prototype={
$1:function(a){var u
H.d(a,"$iB")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:19}
E.hH.prototype={
$1:function(a){var u
H.d(a,"$iB")
u=this.a
u.ch=null
u.cx=null},
$S:19}
E.dx.prototype={
cr:function(a){H.d(a,"$iB")
this.dO()},
cq:function(){return this.cr(null)},
gip:function(){var u,t,s
u=Date.now()
t=C.e.aC(P.lZ(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.aj(u,!1)
return s/t},
cX:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.u()
if(typeof u!=="number")return H.p(u)
s=C.d.bd(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.u()
r=C.d.bd(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.mp(C.p,this.giT())}},
dO:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.f(new E.i8(this),{func:1,ret:-1,args:[P.a4]})
C.D.eQ(u)
C.D.hc(u,W.mU(t,P.a4))}},
iR:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.cX()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aj(r,!1)
s.y=P.lZ(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.av()
r=s.db
C.a.sk(r.a,0)
r.av()
r=s.dx
C.a.sk(r.a,0)
r.av()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aK(this.e)}}catch(q){u=H.aE(q)
t=H.bT(q)
P.lK("Error: "+H.l(u))
P.lK("Stack: "+H.l(t))
throw H.c(u)}}}
E.i8.prototype={
$1:function(a){var u
H.pj(a)
u=this.a
if(u.ch){u.ch=!1
u.iR()}},
$S:34}
Z.dL.prototype={$ips:1}
Z.cT.prototype={
bS:function(a){var u,t,s
try{t=a.a
C.c.dk(t,this.e)
C.c.j5(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.aE(s)
t=P.V('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.l(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}}
Z.iW.prototype={$ipt:1}
Z.c2.prototype={
bc:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bS:function(a){var u,t
u=this.a
C.c.ag(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].bS(a)},
j0:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.c.dg(s,u[t].e)
C.c.ag(s,this.a.a,null)},
aK:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
r=q.c
p=r.a
C.c.ag(t,p,r.b)
C.c.ib(t,q.a,q.b,5123,0)
C.c.ag(t,p,null)}},
dI:function(a){this.bS(a)
this.aK(a)
this.j0(a)},
i:function(a){var u,t,s,r,q,p
u=[P.i]
t=H.h([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.L)(s),++q)C.a.h(t,s[q].i(0))
p=H.h([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.aq(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.E(t,", ")+"\nAttrs:   "+C.a.E(p,", ")},
sf6:function(a){this.b=H.o(a,"$ib",[Z.bm],"$ab")},
$iok:1}
Z.cU.prototype={
sfi:function(a){this.a=H.o(a,"$iA",[P.i,Z.c2],"$aA")},
$iok:1}
Z.bm.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bI(this.c)+"'")+"]"}}
Z.cv.prototype={
gcm:function(a){var u,t
u=this.a
t=(u&$.bj().a)!==0?3:0
if((u&$.bi().a)!==0)t+=3
if((u&$.bh().a)!==0)t+=3
if((u&$.bX().a)!==0)t+=2
if((u&$.bY().a)!==0)t+=3
if((u&$.bx().a)!==0)t+=3
if((u&$.cN().a)!==0)t+=4
if((u&$.bZ().a)!==0)++t
return(u&$.bW().a)!==0?t+4:t},
hQ:function(a){var u,t,s
u=$.bj()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bi()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bh()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bX()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bY()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bx()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cN()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bZ()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bW()
if((t&u.a)!==0)if(s===a)return u
return $.nt()},
B:function(a,b){if(b==null)return!1
if(!(b instanceof Z.cv))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.h([],[P.i])
t=this.a
if((t&$.bj().a)!==0)C.a.h(u,"Pos")
if((t&$.bi().a)!==0)C.a.h(u,"Norm")
if((t&$.bh().a)!==0)C.a.h(u,"Binm")
if((t&$.bX().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bY().a)!==0)C.a.h(u,"TxtCube")
if((t&$.bx().a)!==0)C.a.h(u,"Clr3")
if((t&$.cN().a)!==0)C.a.h(u,"Clr4")
if((t&$.bZ().a)!==0)C.a.h(u,"Weight")
if((t&$.bW().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.E(u,"|")}}
D.eY.prototype={}
D.c9.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.B]}
H.f(b,u)
if(this.a==null)this.san(H.h([],[u]))
u=this.a;(u&&C.a).h(u,b)},
G:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[D.B]})
u=this.a
u=u==null?null:C.a.i1(u,b)
if(u===!0){u=this.a
t=(u&&C.a).G(u,b)||!1}else t=!1
return t},
K:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1)r=!0
else r=!1
if(r)return!1
if(a==null){a=new D.B(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.v(t,new D.fj(u))
return!0},
iU:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.K(t)}}},
aj:function(a){return this.iU(a,!0,!1)},
san:function(a){this.a=H.o(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")},
sbG:function(a){this.b=H.o(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")}}
D.fj.prototype={
$1:function(a){var u
H.f(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:35}
D.B.prototype={}
D.d6.prototype={}
D.d7.prototype={}
D.E.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
X.cV.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cV))return!1
if(this.a!=b.a)return!1
if(!this.b.B(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.db.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.db))return!1
if(this.a!=b.a)return!1
if(!this.b.B(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.h_.prototype={
iM:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
iI:function(a){this.c=a.b
this.d.G(0,a.a)
return!1},
sh4:function(a){this.d=H.o(a,"$imm",[P.n],"$amm")}}
X.de.prototype={}
X.h8.prototype={
aP:function(a,b){var u,t,s,r,q,p,o,n
u=new P.aj(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.u()
q=b.b
p=this.ch
if(typeof q!=="number")return q.u()
o=t.l(0,new V.X(s*r,q*p))
p=this.a.gaE()
n=new X.bc(a,V.b0(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
c7:function(a,b){this.r=a.a
return!1},
aY:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.e6()
if(typeof u!=="number")return u.bj()
this.r=(u&~t)>>>0
return!1},
aX:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.aP(a,b))
return!0},
iN:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaE()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.u()
o=a.b
n=this.cy
if(typeof o!=="number")return o.u()
r=new X.cg(new V.T(q*p,o*n),t,s,new P.aj(r,!1),this)
r.b=!0
u.K(r)
return!0},
fL:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.aj(Date.now(),!1)
t=this.f
s=new X.de(c,a,this.a.gaE(),b,u,this)
s.b=!0
t.K(s)
this.y=u
this.x=V.b0()}}
X.as.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.as))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bc.prototype={}
X.hl.prototype={
bu:function(a,b,c){var u,t,s
u=new P.aj(Date.now(),!1)
t=this.a.gaE()
s=new X.bc(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
c7:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.K(this.bu(a,b,!0))
return!0},
aY:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.e6()
if(typeof u!=="number")return u.bj()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.K(this.bu(a,b,!0))
return!0},
aX:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.bu(a,b,!1))
return!0},
iO:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaE()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.u()
p=a.b
o=this.ch
if(typeof p!=="number")return p.u()
s=new X.cg(new V.T(r*q,p*o),t,b,new P.aj(s,!1),this)
s.b=!0
u.K(s)
return!0},
gdh:function(){var u=this.b
if(u==null){u=D.a1()
this.b=u}return u},
gdU:function(){var u=this.c
if(u==null){u=D.a1()
this.c=u}return u},
gdB:function(){var u=this.d
if(u==null){u=D.a1()
this.d=u}return u}}
X.cg.prototype={}
X.hy.prototype={}
X.dz.prototype={}
X.ib.prototype={
aP:function(a,b){var u,t,s,r
H.o(a,"$ib",[V.X],"$ab")
u=new P.aj(Date.now(),!1)
t=a.length>0?a[0]:V.b0()
s=this.a.gaE()
r=new X.dz(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
iL:function(a){var u
H.o(a,"$ib",[V.X],"$ab")
u=this.b
if(u==null)return!1
u.K(this.aP(a,!0))
return!0},
iJ:function(a){var u
H.o(a,"$ib",[V.X],"$ab")
u=this.c
if(u==null)return!1
u.K(this.aP(a,!0))
return!0},
iK:function(a){var u
H.o(a,"$ib",[V.X],"$ab")
u=this.d
if(u==null)return!1
u.K(this.aP(a,!1))
return!0}}
X.dH.prototype={
gaE:function(){var u=this.a
return V.mi(0,0,C.o.gde(u).c,C.o.gde(u).d)},
cG:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.db(u,new X.as(t,a.altKey,a.shiftKey))},
aA:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.as(t,a.altKey,a.shiftKey)},
bN:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.as(t,a.altKey,a.shiftKey)},
ap:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.n()
q=u.top
if(typeof s!=="number")return s.n()
return new V.X(t-r,s-q)},
aQ:function(a){return new V.T(a.movementX,a.movementY)},
bI:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.h([],[V.X])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.L)(s),++q){p=s[q]
o=C.d.ad(p.pageX)
C.d.ad(p.pageY)
n=u.left
C.d.ad(p.pageX)
C.a.h(t,new V.X(o-n,C.d.ad(p.pageY)-u.top))}return t},
am:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cV(u,new X.as(t,a.altKey,a.shiftKey))},
bx:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.n()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.n()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
fG:function(a){this.f=!0},
fs:function(a){this.f=!1},
fA:function(a){H.d(a,"$iac")
if(this.f&&this.bx(a))a.preventDefault()},
fK:function(a){var u
H.d(a,"$iaY")
if(!this.f)return
u=this.cG(a)
this.b.iM(u)},
fI:function(a){var u
H.d(a,"$iaY")
if(!this.f)return
u=this.cG(a)
this.b.iI(u)},
fN:function(a){var u,t,s,r
H.d(a,"$iac")
u=this.a
u.focus()
this.f=!0
this.aA(a)
if(this.x){t=this.am(a)
s=this.aQ(a)
if(this.d.c7(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.am(a)
r=this.ap(a)
if(this.c.c7(t,r))a.preventDefault()},
fR:function(a){var u,t,s
H.d(a,"$iac")
this.aA(a)
u=this.am(a)
if(this.x){t=this.aQ(a)
if(this.d.aY(u,t))a.preventDefault()
return}if(this.r)return
s=this.ap(a)
if(this.c.aY(u,s))a.preventDefault()},
fE:function(a){var u,t,s
H.d(a,"$iac")
if(!this.bx(a)){this.aA(a)
u=this.am(a)
if(this.x){t=this.aQ(a)
if(this.d.aY(u,t))a.preventDefault()
return}if(this.r)return
s=this.ap(a)
if(this.c.aY(u,s))a.preventDefault()}},
fP:function(a){var u,t,s
H.d(a,"$iac")
this.aA(a)
u=this.am(a)
if(this.x){t=this.aQ(a)
if(this.d.aX(u,t))a.preventDefault()
return}if(this.r)return
s=this.ap(a)
if(this.c.aX(u,s))a.preventDefault()},
fC:function(a){var u,t,s
H.d(a,"$iac")
if(!this.bx(a)){this.aA(a)
u=this.am(a)
if(this.x){t=this.aQ(a)
if(this.d.aX(u,t))a.preventDefault()
return}if(this.r)return
s=this.ap(a)
if(this.c.aX(u,s))a.preventDefault()}},
fT:function(a){var u,t
H.d(a,"$ib5")
this.aA(a)
u=new V.T((a&&C.C).gi7(a),C.C.gi8(a)).q(0,180)
if(this.x){if(this.d.iN(u))a.preventDefault()
return}if(this.r)return
t=this.ap(a)
if(this.c.iO(u,t))a.preventDefault()},
fV:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.am(this.y)
s=this.ap(this.y)
this.d.fL(t,s,u)}},
h3:function(a){var u
H.d(a,"$iaP")
this.a.focus()
this.f=!0
this.bN(a)
u=this.bI(a)
if(this.e.iL(u))a.preventDefault()},
h_:function(a){var u
H.d(a,"$iaP")
this.bN(a)
u=this.bI(a)
if(this.e.iJ(u))a.preventDefault()},
h1:function(a){var u
H.d(a,"$iaP")
this.bN(a)
u=this.bI(a)
if(this.e.iK(u))a.preventDefault()},
seR:function(a){this.z=H.o(a,"$ib",[[P.cp,P.P]],"$ab")}}
V.am.prototype={
l:function(a,b){var u,t,s
u=this.a+b.a
t=this.b+b.b
s=this.c+b.c
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.am(u,t,s)},
n:function(a,b){var u,t,s
u=C.d.n(this.a,b.gdN())
t=C.d.n(this.b,b.gck())
s=C.d.n(this.c,b.gd9())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.am(u,t,s)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.am))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"}}
V.F.prototype={
cf:function(a){return H.h([this.a,this.b,this.c,this.d],[P.r])},
l:function(a,b){var u,t,s,r
u=C.d.l(this.a,b.gdN())
t=C.d.l(this.b,b.gck())
s=C.d.l(this.c,b.gd9())
r=C.d.l(this.d,b.ghP(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.F(u,t,s,r)},
n:function(a,b){var u,t,s,r
u=C.d.n(this.a,b.gdN())
t=C.d.n(this.b,b.gck())
s=C.d.n(this.c,b.gd9())
r=C.d.n(this.d,b.ghP(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.F(u,t,s,r)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.F))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+", "+V.J(this.d,3,0)+"]"}}
V.fh.prototype={}
V.bo.prototype={
cg:function(a,b){var u=H.h([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.r])
return u},
u:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=b2.a
s=this.b
r=b2.e
q=this.c
p=b2.y
if(typeof p!=="number")return H.p(p)
o=this.d
n=b2.cx
m=b2.b
l=b2.f
k=b2.z
if(typeof k!=="number")return H.p(k)
j=b2.cy
i=b2.c
h=b2.r
g=b2.Q
if(typeof g!=="number")return H.p(g)
f=b2.db
e=b2.d
d=b2.x
c=b2.ch
b=b2.dx
a=this.e
a0=this.f
a1=this.r
a2=this.x
a3=this.y
if(typeof a3!=="number")return a3.u()
a4=this.z
if(typeof a4!=="number")return a4.u()
a5=this.Q
if(typeof a5!=="number")return a5.u()
a6=this.ch
a7=this.cx
a8=this.cy
a9=this.db
b0=this.dx
return V.bb(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
B:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bo))return!1
u=b.a
t=$.Q()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
if(!(Math.abs(b.c-this.c)<s))return!1
if(!(Math.abs(b.d-this.d)<s))return!1
if(!(Math.abs(b.e-this.e)<s))return!1
if(!(Math.abs(b.f-this.f)<s))return!1
if(!(Math.abs(b.r-this.r)<s))return!1
if(!(Math.abs(b.x-this.x)<s))return!1
u=b.y
r=this.y
t.toString
if(typeof u!=="number")return u.n()
if(typeof r!=="number")return H.p(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=this.z
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.p(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=this.Q
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.p(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-this.ch)<s))return!1
if(!(Math.abs(b.cx-this.cx)<s))return!1
if(!(Math.abs(b.cy-this.cy)<s))return!1
if(!(Math.abs(b.db-this.db)<s))return!1
if(!(Math.abs(b.dx-this.dx)<s))return!1
return!0},
i:function(a){return this.N()},
dn:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.r]
t=V.k3(H.h([this.a,this.e,this.y,this.cx],u),b,c)
s=V.k3(H.h([this.b,this.f,this.z,this.cy],u),b,c)
r=V.k3(H.h([this.c,this.r,this.Q,this.db],u),b,c)
q=V.k3(H.h([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.e(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.e(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.e(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.e(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.e(t,1)
l=l+t[1]+", "
if(1>=o)return H.e(s,1)
l=l+s[1]+", "
if(1>=n)return H.e(r,1)
l=l+r[1]+", "
if(1>=m)return H.e(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.e(t,2)
p=p+t[2]+", "
if(2>=o)return H.e(s,2)
p=p+s[2]+", "
if(2>=n)return H.e(r,2)
p=p+r[2]+", "
if(2>=m)return H.e(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.e(t,3)
l=l+t[3]+", "
if(3>=o)return H.e(s,3)
l=l+s[3]+", "
if(3>=n)return H.e(r,3)
l=l+r[3]+", "
if(3>=m)return H.e(q,3)
return p+(l+q[3]+"]")},
N:function(){return this.dn("",3,0)},
C:function(a){return this.dn(a,3,0)}}
V.X.prototype={
l:function(a,b){return new V.X(this.a+b.a,this.b+b.b)},
n:function(a,b){return new V.X(this.a-b.a,this.b-b.b)},
q:function(a,b){if(Math.abs(b-0)<$.Q().a)return V.b0()
return new V.X(this.a/b,this.b/b)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+"]"}}
V.R.prototype={
l:function(a,b){var u,t,s,r
u=b.a
t=b.b
s=this.c
r=b.c
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.p(r)
return new V.R(this.a+u,this.b+t,s+r)},
n:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.p(t)
return new V.R(this.a-b.a,this.b-b.b,u-t)},
u:function(a,b){var u=this.c
if(typeof u!=="number")return u.u()
return new V.R(this.a*b,this.b*b,u*b)},
q:function(a,b){var u
if(Math.abs(b-0)<$.Q().a)return V.mc()
u=this.c
if(typeof u!=="number")return u.q()
return new V.R(this.a/b,this.b/b,u/b)},
B:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=$.Q()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
u=b.c
r=this.c
t.toString
if(typeof u!=="number")return u.n()
if(typeof r!=="number")return H.p(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"}}
V.ag.prototype={
l:function(a,b){return new V.ag(C.d.l(this.a,b.gj8(b)),C.d.l(this.b,b.gj9(b)),C.d.l(this.c,b.gja(b)),C.d.l(this.d,b.gj7(b)))},
n:function(a,b){return new V.ag(C.d.n(this.a,b.gj8(b)),C.d.n(this.b,b.gj9(b)),C.d.n(this.c,b.gja(b)),C.d.n(this.d,b.gj7(b)))},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ag))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+", "+V.J(this.d,3,0)+"]"}}
V.dp.prototype={
ga5:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dp))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+", "+V.J(this.d,3,0)+"]"}}
V.cm.prototype={
B:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cm))return!1
u=b.a
t=$.Q()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
u=b.c
r=this.c
t.toString
if(typeof u!=="number")return u.n()
if(typeof r!=="number")return H.p(r)
if(!(Math.abs(u-r)<s))return!1
if(!(Math.abs(b.d-this.d)<s))return!1
if(!(Math.abs(b.e-this.e)<s))return!1
if(!(Math.abs(b.f-this.f)<s))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+", "+V.J(this.d,3,0)+", "+V.J(this.e,3,0)+", "+V.J(this.f,3,0)+"]"}}
V.T.prototype={
aV:function(a){return Math.sqrt(this.w(this))},
w:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.p(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.p(r)
return u*t+s*r},
l:function(a,b){var u,t,s
u=this.a
t=b.gdi(b)
if(typeof u!=="number")return u.l()
t=C.d.l(u,t)
u=this.b
s=b.gdj(b)
if(typeof u!=="number")return u.l()
return new V.T(t,C.d.l(u,s))},
n:function(a,b){var u,t,s
u=this.a
t=b.gdi(b)
if(typeof u!=="number")return u.n()
t=C.d.n(u,t)
u=this.b
s=b.gdj(b)
if(typeof u!=="number")return u.n()
return new V.T(t,C.d.n(u,s))},
u:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.T(u*b,t*b)},
q:function(a,b){var u,t
if(Math.abs(b-0)<$.Q().a){u=$.mv
if(u==null){u=new V.T(0,0)
$.mv=u}return u}u=this.a
if(typeof u!=="number")return u.q()
t=this.b
if(typeof t!=="number")return t.q()
return new V.T(u/b,t/b)},
B:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
u=b.a
t=this.a
s=$.Q()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.p(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.p(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+"]"}}
V.w.prototype={
aV:function(a){return Math.sqrt(this.w(this))},
w:function(a){var u,t
u=this.c
t=a.c
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.p(t)
return this.a*a.a+this.b*a.b+u*t},
c3:function(a,b){var u,t,s,r
u=this.a
t=this.b
s=this.c
r=a.c
if(typeof r!=="number")return r.n()
if(typeof s!=="number")return H.p(s)
return new V.w(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
ab:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
if(typeof t!=="number")return H.p(t)
s=this.c
r=a.b
if(typeof s!=="number")return s.u()
q=a.a
p=this.a
return new V.w(u*t-s*r,s*q-p*t,p*r-u*q)},
l:function(a,b){var u,t,s,r
u=b.a
t=b.b
s=this.c
r=b.c
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.p(r)
return new V.w(this.a+u,this.b+t,s+r)},
n:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.p(t)
return new V.w(this.a-b.a,this.b-b.b,u-t)},
L:function(a){var u=this.c
if(typeof u!=="number")return u.L()
return new V.w(-this.a,-this.b,-u)},
u:function(a,b){var u=this.c
if(typeof u!=="number")return u.u()
return new V.w(this.a*b,this.b*b,u*b)},
q:function(a,b){var u
if(Math.abs(b-0)<$.Q().a)return V.Z()
u=this.c
if(typeof u!=="number")return u.q()
return new V.w(this.a/b,this.b/b,u/b)},
dz:function(){var u,t,s
u=$.Q()
t=u.a
if(!(Math.abs(0-this.a)<t))return!1
if(!(Math.abs(0-this.b)<t))return!1
s=this.c
u.toString
if(typeof s!=="number")return H.p(s)
if(!(Math.abs(0-s)<t))return!1
return!0},
B:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.w))return!1
u=b.a
t=$.Q()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
u=b.c
r=this.c
t.toString
if(typeof u!=="number")return u.n()
if(typeof r!=="number")return H.p(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"}}
V.aR.prototype={
aV:function(a){var u,t,s,r
u=this.a
t=this.b
s=this.c
r=this.d
return Math.sqrt(u*u+t*t+s*s+r*r)},
l:function(a,b){return new V.aR(this.a+b.a,this.b+b.b,this.c+b.c,this.d+b.d)},
n:function(a,b){return new V.aR(C.d.n(this.a,b.gdi(b)),C.d.n(this.b,b.gdj(b)),C.d.n(this.c,b.gje()),C.d.n(this.d,b.gjd()))},
q:function(a,b){var u
if(Math.abs(b-0)<$.Q().a){u=$.mC
if(u==null){u=new V.aR(0,0,0,0)
$.mC=u}return u}return new V.aR(this.a/b,this.b/b,this.c/b,this.d/b)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aR))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+", "+V.J(this.d,3,0)+"]"}}
U.f0.prototype={
bq:function(a){var u=V.pr(a,this.c,this.b)
return u},
gD:function(){var u=this.y
if(u==null){u=D.a1()
this.y=u}return u},
P:function(a){var u=this.y
if(u!=null)u.K(a)},
sci:function(a,b){},
sc4:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.Q().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bq(t)}u=new D.E("maximumLocation",u,this.b,this,[P.r])
u.b=!0
this.P(u)}},
sc6:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.Q().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bq(t)}u=new D.E("minimumLocation",u,this.c,this,[P.r])
u.b=!0
this.P(u)}},
sU:function(a,b){var u
b=this.bq(b)
u=this.d
if(!(Math.abs(u-b)<$.Q().a)){this.d=b
u=new D.E("location",u,b,this,[P.r])
u.b=!0
this.P(u)}},
sc5:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.Q().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.E("maximumVelocity",u,a,this,[P.r])
u.b=!0
this.P(u)}},
sV:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.Q().a)){this.f=a
u=new D.E("velocity",u,a,this,[P.r])
u.b=!0
this.P(u)}},
sc_:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.Q().a)){this.x=a
u=new D.E("dampening",u,a,this,[P.r])
u.b=!0
this.P(u)}},
aM:function(a,b){var u,t,s,r,q
u=this.f
t=$.Q().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sU(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.Q().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sV(s)}}}
U.cX.prototype={
gD:function(){var u=this.b
if(u==null){u=D.a1()
this.b=u}return u},
aN:function(a,b,c){return this.a},
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cX))return!1
return J.K(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")}}
U.cc.prototype={
gD:function(){var u=this.e
if(u==null){u=D.a1()
this.e=u}return u},
P:function(a){var u
H.d(a,"$iB")
u=this.e
if(u!=null)u.K(a)},
a3:function(){return this.P(null)},
fp:function(a,b){var u,t,s,r,q,p,o,n
u=U.ad
H.o(b,"$ik",[u],"$ak")
for(t=b.length,s=this.gaz(),r={func:1,ret:-1,args:[D.B]},q=[r],p=0;p<b.length;b.length===t||(0,H.L)(b),++p){o=b[p]
if(o!=null){n=o.gD()
n.toString
H.f(s,r)
if(n.a==null)n.san(H.h([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.d6(a,b,this,[u])
u.b=!0
this.P(u)},
fY:function(a,b){var u,t,s
u=U.ad
H.o(b,"$ik",[u],"$ak")
for(t=b.ga_(b),s=this.gaz();t.F();)t.gM(t).gD().G(0,s)
u=new D.d7(a,b,this,[u])
u.b=!0
this.P(u)},
aN:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.T()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.au(u,u.length,0,[H.u(u,0)]),s=null;u.F();){t=u.d
if(t!=null){r=t.aN(0,b,c)
if(r!=null)s=s==null?r:r.u(0,s)}}this.f=s==null?V.he():s
u=this.e
if(u!=null)u.aj(0)}return this.f},
B:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cc))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.K(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ak:function(){return[U.ad]},
$aaa:function(){return[U.ad]},
$iad:1}
U.ad.prototype={}
U.dI.prototype={
gD:function(){var u=this.cy
if(u==null){u=D.a1()
this.cy=u}return u},
P:function(a){var u
H.d(a,"$iB")
u=this.cy
if(u!=null)u.K(a)},
a3:function(){return this.P(null)},
aR:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdh().h(0,this.gby())
this.a.c.gdB().h(0,this.gbA())
this.a.c.gdU().h(0,this.gbC())
return!0},
bz:function(a){H.d(a,"$iB")
if(!J.K(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
bB:function(a){var u,t,s,r,q,p,o
a=H.al(H.d(a,"$iB"),"$ibc")
if(!this.y)return
if(this.x){u=a.d.n(0,a.y)
u=new V.T(u.a,u.b)
u=u.w(u)
t=this.r
if(typeof t!=="number")return H.p(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.n(0,a.y)
u=new V.T(t.a,t.b).u(0,2).q(0,u.ga5())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.u()
s=this.e
if(typeof s!=="number")return H.p(s)
t.sV(u*10*s)}else{u=a.c
t=a.d
s=t.n(0,a.y)
r=new V.T(s.a,s.b).u(0,2).q(0,u.ga5())
s=this.b
q=r.a
if(typeof q!=="number")return q.L()
p=this.e
if(typeof p!=="number")return H.p(p)
o=this.z
if(typeof o!=="number")return H.p(o)
s.sU(0,-q*p+o)
this.b.sV(0)
t=t.n(0,a.z)
this.Q=new V.T(t.a,t.b).u(0,2).q(0,u.ga5())}this.a3()},
bD:function(a){var u,t,s
H.d(a,"$iB")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.w(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.u()
s=this.e
if(typeof s!=="number")return H.p(s)
u.sV(t*10*s)
this.a3()}},
aN:function(a,b,c){var u,t,s,r,q
u=this.ch
t=b.e
if(typeof u!=="number")return u.T()
if(u<t){this.ch=t
s=b.y
this.b.aM(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.bb(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$iad:1}
U.dJ.prototype={
gD:function(){var u=this.fx
if(u==null){u=D.a1()
this.fx=u}return u},
P:function(a){var u
H.d(a,"$iB")
u=this.fx
if(u!=null)u.K(a)},
a3:function(){return this.P(null)},
aR:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gdh().h(0,this.gby())
this.a.c.gdB().h(0,this.gbA())
this.a.c.gdU().h(0,this.gbC())
u=this.a.d
t=u.f
if(t==null){t=D.a1()
u.f=t
u=t}else u=t
u.h(0,this.gfe())
u=this.a.d
t=u.d
if(t==null){t=D.a1()
u.d=t
u=t}else u=t
u.h(0,this.gfg())
u=this.a.e
t=u.b
if(t==null){t=D.a1()
u.b=t
u=t}else u=t
u.h(0,this.ghx())
u=this.a.e
t=u.d
if(t==null){t=D.a1()
u.d=t
u=t}else u=t
u.h(0,this.ghv())
u=this.a.e
t=u.c
if(t==null){t=D.a1()
u.c=t
u=t}else u=t
u.h(0,this.ght())
return!0},
af:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.L()
u=-u}if(this.r){if(typeof t!=="number")return t.L()
t=-t}return new V.T(u,t)},
bz:function(a){a=H.al(H.d(a,"$iB"),"$ibc")
if(!J.K(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
bB:function(a){var u,t,s,r,q,p,o
a=H.al(H.d(a,"$iB"),"$ibc")
if(!this.cx)return
if(this.ch){u=a.d.n(0,a.y)
u=new V.T(u.a,u.b)
u=u.w(u)
t=this.Q
if(typeof t!=="number")return H.p(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.n(0,a.y)
u=this.af(new V.T(t.a,t.b).u(0,2).q(0,u.ga5()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.L()
s=this.y
if(typeof s!=="number")return H.p(s)
t.sV(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.L()
t=this.x
if(typeof t!=="number")return H.p(t)
s.sV(-u*10*t)}else{u=a.c
t=a.d
s=t.n(0,a.y)
r=this.af(new V.T(s.a,s.b).u(0,2).q(0,u.ga5()))
s=this.c
q=r.a
if(typeof q!=="number")return q.L()
p=this.y
if(typeof p!=="number")return H.p(p)
o=this.cy
if(typeof o!=="number")return H.p(o)
s.sU(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.L()
q=this.x
if(typeof q!=="number")return H.p(q)
s=this.db
if(typeof s!=="number")return H.p(s)
o.sU(0,-p*q+s)
this.b.sV(0)
this.c.sV(0)
t=t.n(0,a.z)
this.dx=this.af(new V.T(t.a,t.b).u(0,2).q(0,u.ga5()))}this.a3()},
bD:function(a){var u,t,s
H.d(a,"$iB")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.w(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.L()
s=this.y
if(typeof s!=="number")return H.p(s)
u.sV(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.L()
u=this.x
if(typeof u!=="number")return H.p(u)
s.sV(-t*10*u)
this.a3()}},
ff:function(a){if(H.al(H.d(a,"$iB"),"$ide").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
fh:function(a){var u,t,s,r,q,p,o
a=H.al(H.d(a,"$iB"),"$ibc")
if(!J.K(this.d,a.x.b))return
u=a.c
t=a.d
s=t.n(0,a.y)
r=this.af(new V.T(s.a,s.b).u(0,2).q(0,u.ga5()))
s=this.c
q=r.a
if(typeof q!=="number")return q.L()
p=this.y
if(typeof p!=="number")return H.p(p)
o=this.cy
if(typeof o!=="number")return H.p(o)
s.sU(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.L()
q=this.x
if(typeof q!=="number")return H.p(q)
s=this.db
if(typeof s!=="number")return H.p(s)
o.sU(0,-p*q+s)
this.b.sV(0)
this.c.sV(0)
t=t.n(0,a.z)
this.dx=this.af(new V.T(t.a,t.b).u(0,2).q(0,u.ga5()))
this.a3()},
hy:function(a){H.d(a,"$iB")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
hw:function(a){var u,t,s,r,q,p,o
a=H.al(H.d(a,"$iB"),"$idz")
if(!this.cx)return
if(this.ch){u=a.d.n(0,a.y)
u=new V.T(u.a,u.b)
u=u.w(u)
t=this.Q
if(typeof t!=="number")return H.p(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.n(0,a.y)
u=this.af(new V.T(t.a,t.b).u(0,2).q(0,u.ga5()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.L()
s=this.y
if(typeof s!=="number")return H.p(s)
t.sV(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.L()
t=this.x
if(typeof t!=="number")return H.p(t)
s.sV(-u*10*t)}else{u=a.c
t=a.d
s=t.n(0,a.y)
r=this.af(new V.T(s.a,s.b).u(0,2).q(0,u.ga5()))
s=this.c
q=r.a
if(typeof q!=="number")return q.L()
p=this.y
if(typeof p!=="number")return H.p(p)
o=this.cy
if(typeof o!=="number")return H.p(o)
s.sU(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.L()
q=this.x
if(typeof q!=="number")return H.p(q)
s=this.db
if(typeof s!=="number")return H.p(s)
o.sU(0,-p*q+s)
this.b.sV(0)
this.c.sV(0)
t=t.n(0,a.z)
this.dx=this.af(new V.T(t.a,t.b).u(0,2).q(0,u.ga5()))}this.a3()},
hu:function(a){var u,t,s
H.d(a,"$iB")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.w(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.L()
s=this.y
if(typeof s!=="number")return H.p(s)
u.sV(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.L()
u=this.x
if(typeof u!=="number")return H.p(u)
s.sV(-t*10*u)
this.a3()}},
aN:function(a,b,c){var u,t,s,r,q
u=this.dy
t=b.e
if(typeof u!=="number")return u.T()
if(u<t){this.dy=t
s=b.y
this.c.aM(0,s)
this.b.aM(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.bb(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.u(0,V.bb(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$iad:1}
U.dK.prototype={
gD:function(){var u=this.r
if(u==null){u=D.a1()
this.r=u}return u},
P:function(a){var u=this.r
if(u!=null)u.K(a)},
aR:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.a1()
u.e=t
u=t}else u=t
t=this.gfk()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.a1()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
fl:function(a){var u,t,s,r
H.d(a,"$iB")
if(!J.K(this.b,this.a.b.c))return
H.al(a,"$icg")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){this.d=r
u=new D.E("zoom",u,r,this,[P.r])
u.b=!0
this.P(u)}},
aN:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.bb(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$iad:1}
M.d0.prototype={
al:function(a){var u
H.d(a,"$iB")
u=this.x
if(u!=null)u.K(a)},
em:function(){return this.al(null)},
fu:function(a,b){var u,t,s,r,q,p,o,n
u=E.an
H.o(b,"$ik",[u],"$ak")
for(t=b.length,s=this.gae(),r={func:1,ret:-1,args:[D.B]},q=[r],p=0;p<b.length;b.length===t||(0,H.L)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.c9()
n.san(null)
n.sbG(null)
n.c=null
n.d=0
o.z=n}H.f(s,r)
if(n.a==null)n.san(H.h([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.d6(a,b,this,[u])
u.b=!0
this.al(u)},
fw:function(a,b){var u,t,s
u=E.an
H.o(b,"$ik",[u],"$ak")
for(t=b.ga_(b),s=this.gae();t.F();)t.gM(t).gD().G(0,s)
u=new D.d7(a,b,this,[u])
u.b=!0
this.al(u)},
sdR:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gD().G(0,this.gae())
t=this.c
this.c=a
if(a!=null)a.gD().h(0,this.gae())
u=new D.E("technique",t,this.c,this,[O.bM])
u.b=!0
this.al(u)}},
gD:function(){var u=this.x
if(u==null){u=D.a1()
this.x=u}return u},
aK:function(a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a1.dM(this.c)
u=this.b
u.toString
t=a1.a
C.c.hS(t,36160,null)
C.c.aq(t,2884)
C.c.aq(t,2929)
C.c.i9(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.p(s)
o=C.d.ad(p*s)
p=q.b
if(typeof r!=="number")return H.p(r)
n=C.d.ad(p*r)
p=C.d.ad(q.c*s)
a1.c=p
q=C.d.ad(q.d*r)
a1.d=q
C.c.j6(t,o,n,p,q)
C.c.hZ(t,u.c)
u=u.a
C.c.hY(t,u.a,u.b,u.c,u.d)
C.c.hX(t,16640)
u=this.a
t=a1.c
q=a1.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.bb(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a1.cy.dL(i)
t=$.m9
if(t==null){t=V.mc()
q=$.my
if(q==null){q=new V.w(0,1,0)
$.my=q}p=V.mB()
h=p.q(0,Math.sqrt(p.w(p)))
q=q.ab(h)
g=q.q(0,Math.sqrt(q.w(q)))
f=h.ab(g)
e=new V.w(t.a,t.b,t.c)
d=g.L(0).w(e)
c=f.L(0).w(e)
b=h.L(0).w(e)
t=V.bb(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.m9=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.u(0,a)}a1.db.dL(a)
for(u=this.d.a,u=new J.au(u,u.length,0,[H.u(u,0)]);u.F();)u.d.aM(0,a1)
for(u=this.d.a,u=new J.au(u,u.length,0,[H.u(u,0)]);u.F();)u.d.aK(a1)
this.a.toString
a1.cy.c8()
a1.db.c8()
this.b.toString
a1.dK()},
sel:function(a,b){this.d=H.o(b,"$iaa",[E.an],"$aaa")},
$ipy:1}
A.cQ.prototype={}
A.eO.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ic:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.L)(u),++s){r=u[s]
C.c.dk(r.a,r.c)}},
ia:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.L)(u),++s){r=u[s]
C.c.dg(r.a,r.c)}}}
A.ft.prototype={}
A.cn.prototype={
eh:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
cH:function(a,b){var u,t,s
u=this.a
t=C.c.i3(u,b)
C.c.e9(u,t,a)
C.c.i0(u,t)
if(!H.mY(C.c.e4(u,t,35713))){s=C.c.e3(u,t)
C.c.i6(u,t)
throw H.c(P.V("Error compiling shader '"+H.l(t)+"': "+H.l(s)))}return t},
hh:function(){var u,t,s,r,q,p
u=H.h([],[A.cQ])
t=this.a
s=H.ae(C.c.bl(t,this.r,35721))
if(typeof s!=="number")return H.p(s)
r=0
for(;r<s;++r){q=C.c.dZ(t,this.r,r)
p=C.c.e0(t,this.r,q.name)
C.a.h(u,new A.cQ(t,q.name,p))}this.x=new A.eO(u)},
hj:function(){var u,t,s,r,q,p
u=H.h([],[A.dA])
t=this.a
s=H.ae(C.c.bl(t,this.r,35718))
if(typeof s!=="number")return H.p(s)
r=0
for(;r<s;++r){q=C.c.e_(t,this.r,r)
p=C.c.e5(t,this.r,q.name)
C.a.h(u,this.i4(q.type,q.size,q.name,p))}this.y=new A.ir(u)},
ay:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ik(u,t,b,c)
else return A.lr(u,t,b,a,c)},
eM:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.iu(u,t,b,c)
else return A.lr(u,t,b,a,c)},
eN:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.iv(u,t,b,c)
else return A.lr(u,t,b,a,c)},
b8:function(a,b){return new P.dU(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
i4:function(a,b,c,d){switch(a){case 5120:return this.ay(b,c,d)
case 5121:return this.ay(b,c,d)
case 5122:return this.ay(b,c,d)
case 5123:return this.ay(b,c,d)
case 5124:return this.ay(b,c,d)
case 5125:return this.ay(b,c,d)
case 5126:return new A.dB(this.a,this.r,c,d)
case 35664:return new A.im(this.a,this.r,c,d)
case 35665:return new A.dC(this.a,this.r,c,d)
case 35666:return new A.cs(this.a,this.r,c,d)
case 35667:return new A.io(this.a,this.r,c,d)
case 35668:return new A.ip(this.a,this.r,c,d)
case 35669:return new A.iq(this.a,this.r,c,d)
case 35674:return new A.is(this.a,this.r,c,d)
case 35675:return new A.it(this.a,this.r,c,d)
case 35676:return new A.bN(this.a,this.r,c,d)
case 35678:return this.eM(b,c,d)
case 35680:return this.eN(b,c,d)
case 35670:throw H.c(this.b8("BOOL",c))
case 35671:throw H.c(this.b8("BOOL_VEC2",c))
case 35672:throw H.c(this.b8("BOOL_VEC3",c))
case 35673:throw H.c(this.b8("BOOL_VEC4",c))
default:throw H.c(P.V("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.dA.prototype={}
A.ir.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
i:function(a){return this.N()},
io:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.L)(u),++r)s+=u[r].i(0)+a
return s},
N:function(){return this.io("\n")}}
A.ik.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.io.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.ip.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.iq.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.il.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
shE:function(a){this.e=H.o(a,"$ib",[P.n],"$ab")}}
A.dB.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.im.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.dC.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.cs.prototype={
b2:function(a){return C.c.j3(this.a,this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.is.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.it.prototype={
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.bN.prototype={
bp:function(a){var u=new Float32Array(H.jQ(H.o(a,"$ib",[P.r],"$ab")))
C.c.j4(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.iu.prototype={
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.iv.prototype={
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.jK.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.c3(u.b,b).c3(u.d.c3(u.c,b),c)
a.sU(0,new V.R(t.a,t.b,t.c))
a.saZ(t.q(0,Math.sqrt(t.w(t))))
u=1-b
s=1-c
a.sbR(new V.ag(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
u=this.f
if(u!=null)u.$3(a,b,c)},
$S:7}
F.k1.prototype={
$1:function(a){return 1},
$S:14}
F.jW.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:9}
F.jY.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=6.283185307179586*b
t=Math.sin(u)
s=Math.cos(u)
r=-1+c*2
q=this.a.$2(b,c)
if(typeof q!=="number")return H.p(q)
t=-t*q
p=s*q
a.sU(0,new V.R(t,p,r))
p=new V.w(t,p,r)
a.saZ(p.q(0,Math.sqrt(p.w(p))))
a.sbR(new V.ag(1-c,2+c,-1,-1))},
$S:7}
F.jZ.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:14}
F.k_.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:14}
F.kd.prototype={
$3:function(a,b,c){var u,t,s,r
u=c*3.141592653589793
t=Math.sin(u)
s=b*6.283185307179586
r=new V.w(Math.cos(s)*t,Math.cos(u),Math.sin(s)*t)
s=r.q(0,Math.sqrt(r.w(r)))
a.sU(0,new V.R(s.a,s.b,s.c))},
$S:7}
F.l9.prototype={
$2:function(a,b){return 0},
$S:9}
F.la.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.p(u)
t=a.f
s=new V.w(t.a,t.b,t.c)
u=s.q(0,Math.sqrt(s.w(s))).u(0,this.b+u)
a.sU(0,new V.R(u.a,u.b,u.c))},
$S:7}
F.lb.prototype={
$1:function(a){return new V.R(Math.cos(a),Math.sin(a),0)},
$S:26}
F.kc.prototype={
$1:function(a){var u,t,s
u=this.a*a
t=2+Math.cos(u)
s=this.b*a
return new V.R(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:26}
F.jX.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=b*6.283185307179586
t=this.a
s=this.b
r=J.lO(t.$1(u),s)
s=J.ny(J.lO(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.w(s.a,s.b,s.c)
q=s.q(0,Math.sqrt(s.w(s)))
p=V.lu()
if(!J.K(q,p)){t=$.mz
if(t==null){t=new V.w(0,0,1)
$.mz=t
p=t}else p=t}t=q.ab(p)
o=t.q(0,Math.sqrt(t.w(t)))
t=o.ab(q)
p=t.q(0,Math.sqrt(t.w(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.u(0,t*s)
s=o.u(0,m*s)
m=t.c
l=s.c
if(typeof m!=="number")return m.n()
if(typeof l!=="number")return H.p(l)
a.sU(0,J.nx(r,new V.R(t.a-s.a,t.b-s.b,m-l)))},
$S:7}
F.k5.prototype={
$2:function(a,b){return 0},
$S:9}
F.k6.prototype={
$3:function(a,b,c){var u,t,s,r
u=b*2-1
t=c*2-1
a.sU(0,new V.R(u,t,this.a.a.$2(b,c)))
s=new V.w(u,t,1)
a.saZ(s.q(0,Math.sqrt(s.w(s))))
s=1-b
r=1-c
a.sbR(new V.ag(b*c,2+s*c,4+b*r,6+s*r))},
$S:7}
F.G.prototype={
aT:function(){if(!this.gaU()){C.a.G(this.a.a.d.b,this)
this.a.a.S()}this.bK()
this.bL()
this.h8()},
bO:function(a){this.a=a
C.a.h(a.d.b,this)},
bP:function(a){this.b=a
C.a.h(a.d.c,this)},
hg:function(a){this.c=a
C.a.h(a.d.d,this)},
bK:function(){var u=this.a
if(u!=null){C.a.G(u.d.b,this)
this.a=null}},
bL:function(){var u=this.b
if(u!=null){C.a.G(u.d.c,this)
this.b=null}},
h8:function(){var u=this.c
if(u!=null){C.a.G(u.d.d,this)
this.c=null}},
gaU:function(){return this.a==null||this.b==null||this.c==null},
ey:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.Z()
if(t!=null)q=q.l(0,t)
if(s!=null)q=q.l(0,s)
if(r!=null)q=q.l(0,r)
if(q.dz())return
return q.q(0,Math.sqrt(q.w(q)))},
eG:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.n(0,t)
u=new V.w(u.a,u.b,u.c)
q=u.q(0,Math.sqrt(u.w(u)))
u=r.n(0,t)
u=new V.w(u.a,u.b,u.c)
u=q.ab(u.q(0,Math.sqrt(u.w(u))))
return u.q(0,Math.sqrt(u.w(u)))},
bW:function(){if(this.d!=null)return!0
var u=this.ey()
if(u==null){u=this.eG()
if(u==null)return!1}this.d=u
this.a.a.S()
return!0},
ex:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.Z()
if(t!=null)q=q.l(0,t)
if(s!=null)q=q.l(0,s)
if(r!=null)q=q.l(0,r)
if(q.dz())return
return q.q(0,Math.sqrt(q.w(q)))},
eF:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=u==null
s=t?null:u.f
r=this.b
q=r==null
p=q?null:r.f
o=this.c
n=o==null
m=n?null:o.f
if(s==null||p==null||m==null)return
l=t?null:u.y
k=q?null:r.y
j=n?null:o.y
if(l==null||k==null||j==null)return
u=k.b
i=u-j.b
if(Math.abs(i-0)<$.Q().a){u=m.n(0,p)
u=new V.w(u.a,u.b,u.c)
h=u.q(0,Math.sqrt(u.w(u)))
if(j.a-k.a<0)h=h.L(0)}else{g=(u-l.b)/i
u=m.n(0,p).u(0,g).l(0,p).n(0,s)
u=new V.w(u.a,u.b,u.c)
h=u.q(0,Math.sqrt(u.w(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.L(0)}u=this.d
if(u!=null){f=u.q(0,Math.sqrt(u.w(u)))
u=f.ab(h)
u=u.q(0,Math.sqrt(u.w(u))).ab(f)
h=u.q(0,Math.sqrt(u.w(u)))}return h},
bU:function(){if(this.e!=null)return!0
var u=this.ex()
if(u==null){u=this.eF()
if(u==null)return!1}this.e=u
this.a.a.S()
return!0},
ax:function(a,b){var u=b.a
if(u==null)throw H.c(P.V("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.V("May not replace a face's vertex with a vertex attached to a different shape."))},
gi_:function(a){if(J.K(this.a,this.b))return!0
if(J.K(this.b,this.c))return!0
if(J.K(this.c,this.a))return!0
return!1},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var u,t
if(this.gaU())return a+"disposed"
u=a+C.b.aa(J.aq(this.a.e),0)+", "+C.b.aa(J.aq(this.b.e),0)+", "+C.b.aa(J.aq(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
N:function(){return this.C("")}}
F.fk.prototype={}
F.hT.prototype={
aG:function(a,b,c){var u,t
u=b.a
u.a.a.t()
u=u.e
t=c.a
t.a.a.t()
if(u==t.e){u=b.b
u.a.a.t()
u=u.e
t=c.b
t.a.a.t()
if(u==t.e){u=b.c
u.a.a.t()
u=u.e
t=c.c
t.a.a.t()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.t()
u=u.e
t=c.b
t.a.a.t()
if(u==t.e){u=b.b
u.a.a.t()
u=u.e
t=c.c
t.a.a.t()
if(u==t.e){u=b.c
u.a.a.t()
u=u.e
t=c.a
t.a.a.t()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.t()
u=u.e
t=c.c
t.a.a.t()
if(u==t.e){u=b.b
u.a.a.t()
u=u.e
t=c.a
t.a.a.t()
if(u==t.e){u=b.c
u.a.a.t()
u=u.e
t=c.b
t.a.a.t()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.ar.prototype={
aT:function(){if(!this.gaU()){C.a.G(this.a.a.c.b,this)
this.a.a.S()}this.bK()
this.bL()},
bO:function(a){this.a=a
C.a.h(a.c.b,this)},
bP:function(a){this.b=a
C.a.h(a.c.c,this)},
bK:function(){var u=this.a
if(u!=null){C.a.G(u.c.b,this)
this.a=null}},
bL:function(){var u=this.b
if(u!=null){C.a.G(u.c.c,this)
this.b=null}},
gaU:function(){return this.a==null||this.b==null},
ax:function(a,b){var u=b.a
if(u==null)throw H.c(P.V("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.V("May not replace a line's vertex with a vertex attached to a different shape."))},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){if(this.gaU())return a+"disposed"
return a+C.b.aa(J.aq(this.a.e),0)+", "+C.b.aa(J.aq(this.b.e),0)},
N:function(){return this.C("")}}
F.h1.prototype={}
F.ij.prototype={
aG:function(a,b,c){var u,t
u=b.a
u.a.a.t()
u=u.e
t=c.a
t.a.a.t()
if(u==t.e){u=b.b
u.a.a.t()
u=u.e
t=c.b
t.a.a.t()
return u==t.e}else{u=b.a
u.a.a.t()
u=u.e
t=c.b
t.a.a.t()
if(u==t.e){u=b.b
u.a.a.t()
u=u.e
t=c.a
t.a.a.t()
return u==t.e}else return!1}}}
F.bq.prototype={
hf:function(a){this.a=a
C.a.h(a.b.b,this)},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.aa(J.aq(u.e),0)},
N:function(){return this.C("")}}
F.a7.prototype={
gD:function(){var u=this.e
if(u==null){u=D.a1()
this.e=u}return u},
aH:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.t()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.L)(u),++r){q=u[r]
this.a.h(0,q.X())}this.a.t()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.L)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.t()
n=n.e
if(typeof n!=="number")return n.l()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
m=o[n]
this.b.a.a.h(0,m)
F.lp(m)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.L)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.t()
n=n.e
if(typeof n!=="number")return n.l()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.t()
o=o.e
if(typeof o!=="number")return o.l()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.m2(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.L)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.t()
n=n.e
if(typeof n!=="number")return n.l()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.t()
o=o.e
if(typeof o!=="number")return o.l()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.t()
n=n.e
if(typeof n!=="number")return n.l()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.bE(k,j,h)}u=this.e
if(u!=null)u.aj(0)},
a8:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.a8()||!1
if(!this.a.a8())t=!1
u=this.e
if(u!=null)u.aj(0)
return t},
hW:function(a){var u,t,s,r,q,p,o,n,m,l
u=this.dd()
t=new V.w(u.d,u.e,u.f)
s=Math.sqrt(t.w(t))
if(s<=0)s=1
t=u.a
r=u.b
q=u.c
a=new F.hA()
a.a=1/s
a.b=new V.R(t,r,q)
for(p=this.a.c.length-1;p>=0;--p){t=this.a.c
if(p>=t.length)return H.e(t,p)
o=t[p]
t=a.b
r=o.f
n=t.a-r.a
m=t.b-r.b
t=t.c
r=r.c
if(typeof t!=="number")return t.n()
if(typeof r!=="number")return H.p(r)
l=t-r
r=Math.sqrt(n*n+m*m+l*l)*a.a
if(o.ch!==r){o.ch=r
t=o.a
if(t!=null){t=t.e
if(t!=null)t.K(null)}}}},
hV:function(){return this.hW(null)},
dd:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.a.c
t=u.length
if(t<=0){u=$.ml
if(u==null){u=V.mk(0,0,0,0,0,0)
$.ml=u}return u}u=u[0].f
s=V.mk(u.a,u.b,u.c,0,0,0)
for(r=t-1,u=this.a;r>=1;--r){q=u.c
if(r>=q.length)return H.e(q,r)
q=q[r].f
p=q.a
o=q.b
q=q.c
n=s.d
m=s.a
if(p<m)n+=m-p
else{if(p>m+n)n=p-m
p=m}l=s.e
k=s.b
if(o<k)l+=k-o
else{if(o>k+l)l=o-k
o=k}j=s.f
i=s.c
if(typeof q!=="number")return q.T()
if(typeof i!=="number")return H.p(i)
if(q<i){j+=i-q
h=q}else{if(q>i+j)j=q-i
h=i}s=new V.cm(p,o,h,n,l,j)}return s},
ii:function(a,b,c){var u,t,s,r
u=this.a.c.length
for(t=c;t<u;++t){s=this.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
if(b.aG(0,a,r))return r}return},
ih:function(a,b){return this.ii(a,b,0)},
hb:function(a,b){var u,t,s,r,q,p
H.o(b,"$ib",[F.y],"$ab")
this.a.h(0,a)
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.L)(b),++t){s=b[t]
for(;r=s.d,r.b.length+r.c.length+r.d.length>0;){r=r.j(0,0)
q=r.a
if(q==null||r.b==null||r.c==null)H.O(P.V("May not replace a face's vertex when the point has been disposed."))
if(J.K(q,s)){r.ax(s,a)
q=r.a
if(q!=null){C.a.G(q.d.b,r)
r.a=null}r.a=a
C.a.h(a.d.b,r)
p=1}else p=0
if(J.K(r.b,s)){r.ax(s,a)
q=r.b
if(q!=null){C.a.G(q.d.c,r)
r.b=null}r.b=a
C.a.h(a.d.c,r);++p}if(J.K(r.c,s)){r.ax(s,a)
q=r.c
if(q!=null){C.a.G(q.d.d,r)
r.c=null}r.c=a
C.a.h(a.d.d,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.K(null)}}for(;r=s.c,r.b.length+r.c.length>0;){r=r.j(0,0)
q=r.a
if(q==null||r.b==null)H.O(P.V("May not replace a line's vertex when the point has been disposed."))
if(J.K(q,s)){r.ax(s,a)
q=r.a
if(q!=null){C.a.G(q.c.b,r)
r.a=null}r.a=a
C.a.h(a.c.b,r)
p=1}else p=0
if(J.K(r.b,s)){r.ax(s,a)
q=r.b
if(q!=null){C.a.G(q.c.c,r)
r.b=null}r.b=a
C.a.h(a.c.c,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.K(null)}}for(;r=s.b.b,r.length>0;){r=r[0]
q=r.a
if(q==null)H.O(P.V("May not replace a point's vertex when the point has been disposed."))
if(J.K(q,s)){if(a.a==null)H.O(P.V("May not replace a point's vertex with a vertex which is not attached to a shape."))
q=r.a
if(q!=null){C.a.G(q.b.b,r)
r.a=null}r.a=a
C.a.h(a.b.b,r)
p=1}else p=0
if(p>0){r=r.a.a.e
if(r!=null)r.K(null)}}this.a.G(0,s)}},
dA:function(a,b){var u,t,s,r,q,p,o,n
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.h(u.slice(0),[H.u(u,0)])
for(u=[F.y];t.length!==0;){s=C.a.gik(t)
C.a.iP(t,0)
if(s!=null){r=H.h([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.L)(t),++p){o=t[p]
if(o!=null&&a.aG(0,s,o)){C.a.h(r,o)
C.a.G(t,o)}}if(r.length>1){n=b.aH(r)
if(n!=null){this.hb(n,r)
C.a.h(t,n)}}}}this.a.t()
this.c.bg()
this.d.bg()
this.b.iQ()
this.c.ca(new F.ij())
this.d.ca(new F.hT())
u=this.e
if(u!=null)u.aj(0)},
hO:function(a){this.dA(new F.cu(),new F.hr())},
ba:function(){return this.hO(null)},
hT:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
t=a1.a
s=(t&$.bj().a)!==0?1:0
if((t&$.bi().a)!==0)++s
if((t&$.bh().a)!==0)++s
if((t&$.bX().a)!==0)++s
if((t&$.bY().a)!==0)++s
if((t&$.bx().a)!==0)++s
if((t&$.cN().a)!==0)++s
if((t&$.bZ().a)!==0)++s
if((t&$.bW().a)!==0)++s
r=a1.gcm(a1)
q=r*4
t=new Array(u*r)
t.fixed$length=Array
p=P.r
o=H.h(t,[p])
t=new Array(s)
t.fixed$length=Array
n=H.h(t,[Z.cT])
for(m=0,l=0;l<s;++l){k=a1.hQ(l)
j=k.gcm(k)
C.a.m(n,l,new Z.cT(k,j,m*4,q,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.e(t,i)
h=t[i].iw(k)
g=m+i*r
for(f=0;f<h.length;++f){C.a.m(o,g,h[f]);++g}}m+=j}H.o(o,"$ib",[p],"$ab")
t=a0.a
e=t.createBuffer()
C.c.ag(t,34962,e)
C.c.dc(t,34962,new Float32Array(H.jQ(o)),35044)
C.c.ag(t,34962,null)
d=new Z.c2(new Z.dL(34962,e),n,a1)
d.sf6(H.h([],[Z.bm]))
if(this.b.b.length!==0){p=P.n
c=H.h([],[p])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.t()
C.a.h(c,b.e)}a=Z.lv(t,34963,H.o(c,"$ib",[p],"$ab"))
C.a.h(d.b,new Z.bm(0,c.length,a))}if(this.c.b.length!==0){p=P.n
c=H.h([],[p])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.t()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.t()
C.a.h(c,b.e)}a=Z.lv(t,34963,H.o(c,"$ib",[p],"$ab"))
C.a.h(d.b,new Z.bm(1,c.length,a))}if(this.d.b.length!==0){p=P.n
c=H.h([],[p])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.t()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.t()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].c
b.a.a.t()
C.a.h(c,b.e)}a=Z.lv(t,34963,H.o(c,"$ib",[p],"$ab"))
C.a.h(d.b,new Z.bm(4,c.length,a))}return d},
i:function(a){var u=H.h([],[P.i])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.C("   "))}return C.a.E(u,"\n")},
ac:function(a){var u=this.e
if(u!=null)u.K(a)},
S:function(){return this.ac(null)},
$ibL:1}
F.bL.prototype={}
F.hN.prototype={
a1:function(a,b,c,d){var u=this.a
u.a.h(0,b)
u.a.h(0,c)
u.a.h(0,d)
return F.bE(b,c,d)},
d4:function(a){var u,t,s,r,q,p,o
H.o(a,"$ib",[F.y],"$ab")
u=H.h([],[F.G])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.e(a,p)
p=a[p]
if(q>=o)return H.e(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.bE(s,p,o))}}return u},
hM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.o(c,"$ib",[F.y],"$ab")
u=H.h([],[F.G])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.e(c,r)
l=c[r];++r
if(r>=m)return H.e(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.e(c,j)
i=c[j]
if(s<0||s>=m)return H.e(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.bE(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.bE(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.bE(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.bE(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
ca:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.aG(0,p,n)){p.aT()
break}}}}},
bg:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.gi_(s)
if(t)s.aT()}},
a8:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.L)(u),++r)if(!u[r].bW())s=!1
return s},
bV:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.L)(u),++r)if(!u[r].bU())s=!1
return s},
i:function(a){return this.N()},
C:function(a){var u,t,s,r
u=H.h([],[P.i])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.L)(t),++r)C.a.h(u,t[r].C(a))
return C.a.E(u,"\n")},
N:function(){return this.C("")},
sf_:function(a){this.b=H.o(a,"$ib",[F.G],"$ab")}}
F.hO.prototype={
p:function(a,b,c){var u=this.a
u.a.h(0,b)
u.a.h(0,c)
return F.m2(b,c)},
gk:function(a){return this.b.length},
ca:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.aG(0,p,n)){p.aT()
break}}}}},
bg:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.K(s.a,s.b)
if(t)s.aT()}},
i:function(a){return this.N()},
C:function(a){var u,t,s,r
u=H.h([],[P.i])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.e(r,s)
C.a.h(u,r[s].C(a+(""+s+". ")))}return C.a.E(u,"\n")},
N:function(){return this.C("")},
sfa:function(a){this.b=H.o(a,"$ib",[F.ar],"$ab")}}
F.hP.prototype={
gk:function(a){return this.b.length},
iQ:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.G(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.K(null)}s=t.a
if(s!=null){C.a.G(s.b.b,t)
t.a=null}}}},
i:function(a){return this.N()},
C:function(a){var u,t,s,r
u=H.h([],[P.i])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.L)(t),++r)C.a.h(u,t[r].C(a))
return C.a.E(u,"\n")},
N:function(){return this.C("")},
sbH:function(a){this.b=H.o(a,"$ib",[F.bq],"$ab")}}
F.y.prototype={
bZ:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.az(this.cx,s,p,u,t,r,q,a,o)},
X:function(){return this.bZ(null)},
sU:function(a,b){var u
if(!J.K(this.f,b)){this.f=b
u=this.a
if(u!=null)u.S()}},
saI:function(a){var u
a=a==null?null:a.q(0,Math.sqrt(a.w(a)))
if(!J.K(this.r,a)){this.r=a
u=this.a
if(u!=null)u.S()}},
sR:function(a){var u
a=a==null?null:a.q(0,Math.sqrt(a.w(a)))
if(!J.K(this.x,a)){this.x=a
u=this.a
if(u!=null)u.S()}},
sce:function(a){var u
if(!J.K(this.y,a)){this.y=a
u=this.a
if(u!=null)u.S()}},
saZ:function(a){var u
if(!J.K(this.z,a)){this.z=a
u=this.a
if(u!=null)u.S()}},
sa2:function(a,b){var u
if(!J.K(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.S()}},
sdY:function(a,b){var u
if(this.ch!==b){this.ch=b
u=this.a
if(u!=null)u.S()}},
sbR:function(a){var u
if(!J.K(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.S()}},
iw:function(a){var u,t
if(a.B(0,$.bj())){u=this.f
t=[P.r]
if(u==null)return H.h([0,0,0],t)
else return H.h([u.a,u.b,u.c],t)}else if(a.B(0,$.bi())){u=this.r
t=[P.r]
if(u==null)return H.h([0,1,0],t)
else return H.h([u.a,u.b,u.c],t)}else if(a.B(0,$.bh())){u=this.x
t=[P.r]
if(u==null)return H.h([0,0,1],t)
else return H.h([u.a,u.b,u.c],t)}else if(a.B(0,$.bX())){u=this.y
t=[P.r]
if(u==null)return H.h([0,0],t)
else return H.h([u.a,u.b],t)}else if(a.B(0,$.bY())){u=this.z
t=[P.r]
if(u==null)return H.h([0,0,0],t)
else return H.h([u.a,u.b,u.c],t)}else if(a.B(0,$.bx())){u=this.Q
t=[P.r]
if(u==null)return H.h([1,1,1],t)
else return H.h([u.a,u.b,u.c],t)}else if(a.B(0,$.cN())){u=this.Q
if(u==null)return H.h([1,1,1,1],[P.r])
else return u.cf(0)}else if(a.B(0,$.bZ()))return H.h([this.ch],[P.r])
else if(a.B(0,$.bW())){u=this.cx
t=[P.r]
if(u==null)return H.h([-1,-1,-1,-1],t)
else return H.h([u.a,u.b,u.c,u.d],t)}else return H.h([],[P.r])},
bW:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.Z()
this.d.v(0,new F.iU(u))
u=u.a
this.r=u.q(0,Math.sqrt(u.w(u)))
u=this.a
if(u!=null){u.S()
u=this.a.e
if(u!=null)u.aj(0)}return!0},
bU:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.Z()
this.d.v(0,new F.iT(u))
u=u.a
this.x=u.q(0,Math.sqrt(u.w(u)))
u=this.a
if(u!=null){u.S()
u=this.a.e
if(u!=null)u.aj(0)}return!0},
dm:function(a){var u,t,s,r
u=this.c.b.length
for(t=0;t<u;++t){s=this.c.b
if(t>=s.length)return H.e(s,t)
r=s[t]
s=r.b
s.a.a.t()
s=s.e
a.a.a.t()
if(s==a.e)return r}return},
il:function(a){var u=this.dm(a)
if(u!=null)return u
return a.dm(this)},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var u,t,s
u=H.h([],[P.i])
C.a.h(u,C.b.aa(J.aq(this.e),0))
t=this.f
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.r
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.x
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.y
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.z
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.Q
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
C.a.h(u,V.J(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.E(u,", ")
return a+"{"+s+"}"},
N:function(){return this.C("")}}
F.iU.prototype={
$1:function(a){var u,t
H.d(a,"$iG")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.l(0,u)}},
$S:3}
F.iT.prototype={
$1:function(a){var u,t
H.d(a,"$iG")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.l(0,u)}},
$S:3}
F.iJ.prototype={
t:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.c(P.V("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.S()
return!0},
d5:function(a,b,c,d,e,f,g,h,i){var u=F.az(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
hN:function(a,b,c,d,e,f){return this.d5(a,null,b,c,d,e,f,null,0)},
b9:function(a,b,c,d,e,f){return this.d5(a,null,b,c,null,d,e,f,0)},
bQ:function(a,b,c){var u=F.az(null,null,null,new V.R(a,b,c),null,null,null,null,0)
this.h(0,u)
return u},
gk:function(a){return this.c.length},
G:function(a,b){var u,t
if(b==null)return!1
u=this.a
if(b.a!==u)return!1
if(b.b.b.length===0){t=b.c
if(t.b.length===0&&t.c.length===0){t=b.d
t=t.b.length===0&&t.c.length===0&&t.d.length===0}else t=!1}else t=!1
if(!t)throw H.c(P.V("May not remove a vertex without first making it empty."))
b.a=null
C.a.G(this.c,b)
u.S()
this.b=!0
return!0},
a8:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.L)(u),++s)u[s].bW()
return!0},
bV:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.L)(u),++s)u[s].bU()
return!0},
hU:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.L)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.u()
n=q.q(0,Math.sqrt(p*p+o*o+n*n))
if(!J.K(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.K(null)}}}}return!0},
i:function(a){return this.N()},
C:function(a){var u,t,s,r
this.t()
u=H.h([],[P.i])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.L)(t),++r)C.a.h(u,t[r].C(a))
return C.a.E(u,"\n")},
N:function(){return this.C("")},
shF:function(a){this.c=H.o(a,"$ib",[F.y],"$ab")}}
F.iK.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b<t){if(b<0)return H.e(u,b)
return u[b]}b-=t
u=this.c
s=u.length
if(b<s){if(b<0)return H.e(u,b)
return u[b]}b-=s
u=this.d
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
v:function(a,b){H.f(b,{func:1,ret:-1,args:[F.G]})
C.a.v(this.b,b)
C.a.v(this.c,new F.iL(this,b))
C.a.v(this.d,new F.iM(this,b))},
i:function(a){return this.N()},
C:function(a){var u,t,s,r
u=H.h([],[P.i])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.L)(t),++r)C.a.h(u,t[r].C(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.L)(t),++r)C.a.h(u,t[r].C(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.L)(t),++r)C.a.h(u,t[r].C(a))
return C.a.E(u,"\n")},
N:function(){return this.C("")},
sf0:function(a){this.b=H.o(a,"$ib",[F.G],"$ab")},
sf1:function(a){this.c=H.o(a,"$ib",[F.G],"$ab")},
sf2:function(a){this.d=H.o(a,"$ib",[F.G],"$ab")}}
F.iL.prototype={
$1:function(a){H.d(a,"$iG")
if(!J.K(a.a,this.a))this.b.$1(a)},
$S:3}
F.iM.prototype={
$1:function(a){var u
H.d(a,"$iG")
u=this.a
if(!J.K(a.a,u)&&!J.K(a.b,u))this.b.$1(a)},
$S:3}
F.iO.prototype={
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.e(u,s)
return u[s]}else{if(b<0)return H.e(u,b)
return u[b]}},
i:function(a){return this.N()},
C:function(a){var u,t,s,r
u=H.h([],[P.i])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.L)(t),++r)C.a.h(u,t[r].C(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.L)(t),++r)C.a.h(u,t[r].C(a))
return C.a.E(u,"\n")},
N:function(){return this.C("")},
sfb:function(a){this.b=H.o(a,"$ib",[F.ar],"$ab")},
sfc:function(a){this.c=H.o(a,"$ib",[F.ar],"$ab")}}
F.iP.prototype={}
F.cu.prototype={
aG:function(a,b,c){return J.K(b.f,c.f)}}
F.iQ.prototype={}
F.hA.prototype={}
F.iR.prototype={}
F.iN.prototype={
aH:function(a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.o(a6,"$ib",[F.y],"$ab")
for(u=a6.length,t=0,s=null,r=null,q=null,p=0,o=null,n=0,m=null,l=0,k=null,j=0,i=0,h=0;h<u;++h){g=a6[h]
f=g.f
if(f!=null){if(s==null)s=f
else{e=s.a
d=f.a
c=s.b
b=f.b
a=s.c
a0=f.c
if(typeof a!=="number")return a.l()
if(typeof a0!=="number")return H.p(a0)
s=new V.R(e+d,c+b,a+a0)}++t}a1=g.r
if(a1!=null)if(r==null)r=a1
else{e=r.a
d=a1.a
c=r.b
b=a1.b
a=r.c
a0=a1.c
if(typeof a!=="number")return a.l()
if(typeof a0!=="number")return H.p(a0)
r=new V.w(e+d,c+b,a+a0)}a2=g.x
if(a2!=null)if(q==null)q=a2
else{e=q.a
d=a2.a
c=q.b
b=a2.b
a=q.c
a0=a2.c
if(typeof a!=="number")return a.l()
if(typeof a0!=="number")return H.p(a0)
q=new V.w(e+d,c+b,a+a0)}a3=g.y
if(a3!=null){m=m==null?a3:new V.X(m.a+a3.a,m.b+a3.b);++n}a4=g.z
if(a4!=null){if(k==null)k=a4
else{e=k.a
d=a4.a
c=k.b
b=a4.b
a=k.c
a0=a4.c
if(typeof a!=="number")return a.l()
if(typeof a0!=="number")return H.p(a0)
k=new V.w(e+d,c+b,a+a0)}++l}e=g.Q
if(e!=null){d=e.a
c=e.b
b=e.c
e=e.d
if(o==null){e=[d,c,b,e]
o=new V.aR(e[0],e[1],e[2],e[3])}else{e=[d,c,b,e]
d=e[0]
c=e[1]
b=e[2]
e=e[3]
o=new V.aR(o.a+d,o.b+c,o.c+b,o.d+e)}++p}e=g.ch
if(typeof e!=="number")return H.p(e)
i+=e;++j}a5=F.az(null,null,null,null,null,null,null,null,0)
if(t<=0||s==null)a5.sU(0,null)
else a5.sU(0,s.q(0,t))
if(r==null)a5.saI(null)
else a5.saI(r.q(0,Math.sqrt(r.w(r))))
if(q==null)a5.sR(null)
else a5.sR(q.q(0,Math.sqrt(q.w(q))))
if(n<=0||m==null)a5.sce(null)
else a5.sce(m.q(0,n))
if(l<=0||k==null)a5.saZ(null)
else a5.saZ(k.q(0,l))
if(p<=0||o==null)a5.sa2(0,null)
else{u=o.q(0,p)
u=[u.a,u.b,u.c,u.d]
e=u[0]
d=u[1]
c=u[2]
u=u[3]
if(e<0)e=0
else if(e>1)e=1
if(d<0)d=0
else if(d>1)d=1
if(c<0)c=0
else if(c>1)c=1
if(u<0)u=0
else if(u>1)u=1
a5.sa2(0,new V.F(e,d,c,u))}if(j<=0)a5.sdY(0,0)
else a5.sdY(0,i/j)
return a5}}
F.hr.prototype={
aH:function(a){var u,t,s,r,q,p,o,n,m
H.o(a,"$ib",[F.y],"$ab")
u=V.Z()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null){q=u.a
p=r.a
o=u.b
n=r.b
m=u.c
r=r.c
if(typeof m!=="number")return m.l()
if(typeof r!=="number")return H.p(r)
u=new V.w(q+p,o+n,m+r)}}u=u.q(0,Math.sqrt(u.w(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.L)(a),++s)a[s].saI(u)
return}}
F.iS.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.N()},
C:function(a){var u,t,s,r
u=H.h([],[P.i])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.L)(t),++r)C.a.h(u,t[r].C(a))
return C.a.E(u,"\n")},
N:function(){return this.C("")},
sbH:function(a){this.b=H.o(a,"$ib",[F.bq],"$ab")}}
O.d5.prototype={
gD:function(){var u=this.rx
if(u==null){u=D.a1()
this.rx=u}return u},
Y:function(a){var u=this.rx
if(u!=null)u.K(a)},
sa4:function(a){var u=this.r2
if(!(Math.abs(u-a)<$.Q().a)){this.r2=a
u=new D.E("vectorScale",u,a,this,[P.r])
u.b=!0
this.Y(u)}},
a0:function(a,b,c,d,e,f,g){var u,t
H.f(e,{func:1,ret:F.a7,args:[F.a7]})
u=b.a.j(0,d)
if(u==null){u=this.cA(a,e.$1(c))
b.a.m(0,d,u)}t=this.a
t.db.b2(f)
t.dx.b2(g)
u.dI(a)},
cV:function(a,b,c,d,e,f,g){var u,t
H.f(e,{func:1,ret:F.a7,args:[F.bL]})
u=b.a.j(0,d)
if(u==null){u=this.cA(a,e.$1(c))
b.a.m(0,d,u)}t=this.a
t.db.b2(f)
t.dx.b2(g)
u.dI(a)},
cA:function(a,b){var u,t,s
u=$.bj()
t=$.bi()
s=b.hT(new Z.iW(a.a),new Z.cv(u.a|t.a|$.bh().a|$.bx().a))
s.bc($.bj()).e=this.a.z.c
s.bc($.bi()).e=this.a.Q.c
s.bc($.bx()).e=this.a.ch.c
s.bc($.bh()).e=this.a.cx.c
return s},
hm:function(a){var u,t,s
u=F.a3()
t=a.a
t.toString
s=H.f(new O.fH(u,new V.F(1,1,1,1)),{func:1,ret:-1,args:[F.y]})
C.a.v(t.c,s)
s=a.d
s.toString
t=H.f(new O.fI(u),{func:1,ret:-1,args:[F.G]})
C.a.v(s.b,t)
return u},
d2:function(a,b){var u,t,s,r
u={}
u.a=b
t=F.a3()
u.a=new V.F(0,0.7,1,1)
s=a.a
s.toString
u=H.f(new O.fS(u,t),{func:1,ret:-1,args:[F.y]})
C.a.v(s.c,u)
u=new O.fR(t)
s=a.c
s.toString
r=H.f(new O.fT(t,u),{func:1,ret:-1,args:[F.ar]})
C.a.v(s.b,r)
r=a.d
r.toString
u=H.f(new O.fU(t,u),{func:1,ret:-1,args:[F.G]})
C.a.v(r.b,u)
return t},
hJ:function(a){return this.d2(a,null)},
eo:function(a){var u,t,s
u=F.a3()
t=a.a
t.toString
s=H.f(new O.fN(new V.F(1,1,1,1),u),{func:1,ret:-1,args:[F.y]})
C.a.v(t.c,s)
return u},
fn:function(a){var u,t,s
u=F.a3()
t=a.a
t.toString
s=H.f(new O.fG(new V.F(1,1,0.3,1),u),{func:1,ret:-1,args:[F.y]})
C.a.v(t.c,s)
return u},
eE:function(a){var u,t,s
u=F.a3()
t=a.a
t.toString
s=H.f(new O.fy(new V.F(1,0.3,0.3,1),u),{func:1,ret:-1,args:[F.y]})
C.a.v(t.c,s)
return u},
hq:function(a){var u,t,s
u=F.a3()
t=a.a
t.toString
s=H.f(new O.fJ(new V.F(1,0.3,1,1),u),{func:1,ret:-1,args:[F.y]})
C.a.v(t.c,s)
return u},
hD:function(a){var u,t,s
u=F.a3()
t=a.a
t.toString
s=H.f(new O.fM(new V.F(1,0.3,0.3,1),u),{func:1,ret:-1,args:[F.y]})
C.a.v(t.c,s)
return u},
eV:function(a){var u,t,s
u=F.a3()
t=a.d
t.toString
s=H.f(new O.fC(new V.F(1,1,0.3,1),u),{func:1,ret:-1,args:[F.G]})
C.a.v(t.b,s)
return u},
eX:function(a){var u,t,s
u=F.a3()
t=a.d
t.toString
s=H.f(new O.fD(new V.F(1,1,0.3,1),u),{func:1,ret:-1,args:[F.G]})
C.a.v(t.b,s)
return u},
eT:function(a){var u,t,s
u=F.a3()
t=a.d
t.toString
s=H.f(new O.fB(new V.F(1,0.3,0.3,1),u),{func:1,ret:-1,args:[F.G]})
C.a.v(t.b,s)
return u},
eZ:function(a){var u,t,s
u=F.a3()
t=a.d
t.toString
s=H.f(new O.fE(new V.F(1,0.3,1,1),u),{func:1,ret:-1,args:[F.G]})
C.a.v(t.b,s)
return u},
eL:function(a){var u,t,s
u=F.a3()
t=a.a
t.toString
s=H.f(new O.fz(u),{func:1,ret:-1,args:[F.y]})
C.a.v(t.c,s)
s=a.d
s.toString
t=H.f(new O.fA(u),{func:1,ret:-1,args:[F.G]})
C.a.v(s.b,t)
return u},
hB:function(a){var u,t,s
u=F.a3()
t=a.a
t.toString
s=H.f(new O.fK(u),{func:1,ret:-1,args:[F.y]})
C.a.v(t.c,s)
s=a.d
s.toString
t=H.f(new O.fL(u),{func:1,ret:-1,args:[F.G]})
C.a.v(s.b,t)
return u},
hH:function(a){var u,t,s,r,q,p,o
u={}
t=F.a3()
s=a.a
r=s.c
if(r.length<1)return t
q=r[0].ch
u.a=q
u.b=q
s.toString
s={func:1,ret:-1,args:[F.y]}
C.a.v(r,H.f(new O.fO(u),s))
r=u.b
p=u.a
if(typeof r!=="number")return r.n()
if(typeof p!=="number")return H.p(p)
o=r-p
u.c=o
if(o<=0)u.c=1
r=a.a
r.toString
s=H.f(new O.fP(u,t),s)
C.a.v(r.c,s)
s=a.d
s.toString
r=H.f(new O.fQ(t),{func:1,ret:-1,args:[F.G]})
C.a.v(s.b,r)
return t},
fj:function(a){var u,t,s
u={}
u.a=0
t=a.a
t.toString
s=H.f(new O.fF(u),{func:1,ret:-1,args:[F.y]})
C.a.v(t.c,s)
return C.d.bd((u.a+1.5)*0.5)},
b4:function(a,b){var u
if(a<0)return new V.am(0,0,0)
else{u=Math.floor((a+0.5)*0.5)
return V.lY(u/b,a-u*2,1)}},
eC:function(a){var u,t,s,r
u=this.fj(a)
t=F.a3()
s=a.a
s.toString
r=H.f(new O.fw(this,u,t),{func:1,ret:-1,args:[F.y]})
C.a.v(s.c,r)
r=a.d
r.toString
s=H.f(new O.fx(t),{func:1,ret:-1,args:[F.G]})
C.a.v(r.b,s)
return t},
ez:function(a){return this.eA(a)},
eA:function(a){var u,t
u=F.a3()
t=new O.fv(u)
t.$3(1,0,0)
t.$3(0,1,0)
t.$3(0,0,1)
return u},
es:function(a){return this.eu(a)},
eu:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u=a.dd()
t=F.a3()
s=new O.fu(t)
r=u.a
q=u.b
p=u.c
o=s.$3(r,q,p)
n=r+u.d
m=s.$3(n,q,p)
l=q+u.e
k=s.$3(n,l,p)
j=s.$3(r,l,p)
i=u.f
if(typeof p!=="number")return p.l()
i=p+i
h=s.$3(r,q,i)
g=s.$3(n,q,i)
f=s.$3(n,l,i)
e=s.$3(r,l,i)
t.c.p(0,o,m)
t.c.p(0,m,k)
t.c.p(0,k,j)
t.c.p(0,j,o)
t.c.p(0,h,g)
t.c.p(0,g,f)
t.c.p(0,f,e)
t.c.p(0,e,h)
t.c.p(0,o,h)
t.c.p(0,m,g)
t.c.p(0,k,f)
t.c.p(0,j,e)
return t}}
O.fH.prototype={
$1:function(a){var u,t
H.d(a,"$iy")
u=this.a.a
t=a.X()
t.sa2(0,this.b)
t.sR(V.Z())
u.h(0,t)},
$S:4}
O.fI.prototype={
$1:function(a){var u,t,s,r,q,p
H.d(a,"$iG")
u=this.a
t=u.a
s=a.a
s.a.a.t()
s=s.e
r=C.a.j(t.c,s)
s=u.a
t=a.b
t.a.a.t()
t=t.e
q=C.a.j(s.c,t)
t=u.a
s=a.c
s.a.a.t()
s=s.e
p=C.a.j(t.c,s)
u.d.a1(0,r,q,p)},
$S:3}
O.fS.prototype={
$1:function(a){var u,t
H.d(a,"$iy")
u=this.b.a
t=a.X()
t.sa2(0,this.a.a)
t.sR(V.Z())
u.h(0,t)},
$S:4}
O.fR.prototype={
$2:function(a,b){if(a.il(b)==null)this.a.c.p(0,a,b)},
$S:47}
O.fT.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iar")
u=this.a
t=u.a
s=a.a
s.a.a.t()
s=s.e
r=C.a.j(t.c,s)
u=u.a
s=a.b
s.a.a.t()
s=s.e
this.b.$2(r,C.a.j(u.c,s))},
$S:48}
O.fU.prototype={
$1:function(a){var u,t,s,r,q,p
H.d(a,"$iG")
u=this.a
t=u.a
s=a.a
s.a.a.t()
s=s.e
r=C.a.j(t.c,s)
s=u.a
t=a.b
t.a.a.t()
t=t.e
q=C.a.j(s.c,t)
u=u.a
t=a.c
t.a.a.t()
t=t.e
p=C.a.j(u.c,t)
t=this.b
t.$2(r,q)
t.$2(q,p)
t.$2(p,r)},
$S:3}
O.fN.prototype={
$1:function(a){var u,t
u=H.d(a,"$iy").X()
u.sa2(0,this.a)
u.sR(V.Z())
t=this.b
t.a.h(0,u)
t.b.a.a.h(0,u)
F.lp(u)},
$S:4}
O.fG.prototype={
$1:function(a){var u,t,s
u=H.d(a,"$iy").X()
u.sa2(0,this.a)
u.sR(V.Z())
t=u.X()
t.sR(u.r)
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.p(0,u,t)},
$S:4}
O.fy.prototype={
$1:function(a){var u,t,s
H.d(a,"$iy")
u=a.X()
u.sa2(0,this.a)
u.sR(V.Z())
t=u.X()
t.sR(a.x)
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.p(0,u,t)},
$S:4}
O.fJ.prototype={
$1:function(a){var u,t,s
H.d(a,"$iy")
u=a.X()
u.sa2(0,this.a)
u.sR(V.Z())
t=u.X()
t.sR(a.x.ab(a.r).L(0))
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.p(0,u,t)},
$S:4}
O.fM.prototype={
$1:function(a){var u,t,s
H.d(a,"$iy")
u=a.X()
u.sa2(0,this.a)
u.sR(V.Z())
t=u.X()
t.sR(a.z)
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.p(0,u,t)},
$S:4}
O.fC.prototype={
$1:function(a){var u,t,s
H.d(a,"$iG")
u=a.a.f.l(0,a.b.f).l(0,a.c.f).q(0,3)
t=a.d
s=F.az(null,V.Z(),this.a,u,t,null,null,null,0)
t=this.b
t.a.h(0,s)
t.b.a.a.h(0,s)
F.lp(s)},
$S:3}
O.fD.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iG")
u=a.a.f.l(0,a.b.f).l(0,a.c.f).q(0,3)
t=a.d
s=F.az(null,V.Z(),this.a,u,t,null,null,null,0)
r=s.X()
r.sR(a.d)
t=this.b
t.a.h(0,s)
t.a.h(0,r)
t.c.p(0,s,r)},
$S:3}
O.fB.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iG")
u=a.a.f.l(0,a.b.f).l(0,a.c.f).q(0,3)
t=a.d
s=F.az(null,V.Z(),this.a,u,t,null,null,null,0)
r=s.X()
r.sR(a.e)
t=this.b
t.a.h(0,s)
t.a.h(0,r)
t.c.p(0,s,r)},
$S:3}
O.fE.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iG")
u=a.a.f.l(0,a.b.f).l(0,a.c.f).q(0,3)
t=a.d
s=F.az(null,V.Z(),this.a,u,t,null,null,null,0)
r=s.X()
r.sR(a.e.ab(a.d).L(0))
t=this.b
t.a.h(0,s)
t.a.h(0,r)
t.c.p(0,s,r)},
$S:3}
O.fz.prototype={
$1:function(a){var u,t
H.d(a,"$iy")
u=this.a.a
t=a.X()
t.sR(V.Z())
u.h(0,t)},
$S:4}
O.fA.prototype={
$1:function(a){var u,t,s,r,q,p
H.d(a,"$iG")
u=this.a
t=u.a
s=a.a
s.a.a.t()
s=s.e
r=C.a.j(t.c,s)
s=u.a
t=a.b
t.a.a.t()
t=t.e
q=C.a.j(s.c,t)
t=u.a
s=a.c
s.a.a.t()
s=s.e
p=C.a.j(t.c,s)
u.d.a1(0,r,q,p)},
$S:3}
O.fK.prototype={
$1:function(a){var u,t,s,r,q,p,o
H.d(a,"$iy")
u=a.y
t=this.a.a
s=a.X()
r=u.a
q=u.b
if(r<0)r=0
else if(r>1)r=1
p=q<0
if(p)o=0
else o=q>1?1:q
if(p)q=0
else if(q>1)q=1
s.sa2(0,new V.F(r,o,q,1))
s.sR(V.Z())
t.h(0,s)},
$S:4}
O.fL.prototype={
$1:function(a){var u,t,s,r,q,p
H.d(a,"$iG")
u=this.a
t=u.a
s=a.a
s.a.a.t()
s=s.e
r=C.a.j(t.c,s)
s=u.a
t=a.b
t.a.a.t()
t=t.e
q=C.a.j(s.c,t)
t=u.a
s=a.c
s.a.a.t()
s=s.e
p=C.a.j(t.c,s)
u.d.a1(0,r,q,p)},
$S:3}
O.fO.prototype={
$1:function(a){var u,t,s
H.d(a,"$iy")
u=this.a
t=u.a
s=a.ch
if(typeof t!=="number")return t.bm()
if(typeof s!=="number")return H.p(s)
if(t>s)u.a=s
t=u.b
if(typeof t!=="number")return t.T()
if(t<s)u.b=s},
$S:4}
O.fP.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iy")
u=a.ch
t=this.a
s=t.a
if(typeof u!=="number")return u.n()
if(typeof s!=="number")return H.p(s)
r=V.lY((u-s)/t.c*5/6,1,1)
t=this.b.a
s=a.X()
s.sR(V.Z())
s.sa2(0,new V.F(r.a,r.b,r.c,1))
t.h(0,s)},
$S:4}
O.fQ.prototype={
$1:function(a){var u,t,s,r,q,p
H.d(a,"$iG")
u=this.a
t=u.a
s=a.a
s.a.a.t()
s=s.e
r=C.a.j(t.c,s)
s=u.a
t=a.b
t.a.a.t()
t=t.e
q=C.a.j(s.c,t)
t=u.a
s=a.c
s.a.a.t()
s=s.e
p=C.a.j(t.c,s)
u.d.a1(0,r,q,p)},
$S:3}
O.fF.prototype={
$1:function(a){var u,t,s
u=H.d(a,"$iy").cx
if(u==null)u=V.me()
t=this.a
s=Math.max(t.a,u.a)
t.a=s
s=Math.max(s,u.b)
t.a=s
s=Math.max(s,u.c)
t.a=s
t.a=Math.max(s,u.d)},
$S:4}
O.fw.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iy")
u=a.cx
if(u==null)u=V.me()
t=this.a
s=this.b
r=new V.am(0,0,0).l(0,t.b4(u.a,s)).l(0,t.b4(u.b,s)).l(0,t.b4(u.c,s)).l(0,t.b4(u.d,s))
s=this.c.a
t=a.X()
t.sR(V.Z())
t.sa2(0,new V.F(r.a,r.b,r.c,1))
s.h(0,t)},
$S:4}
O.fx.prototype={
$1:function(a){var u,t,s,r,q,p
H.d(a,"$iG")
u=this.a
t=u.a
s=a.a
s.a.a.t()
s=s.e
r=C.a.j(t.c,s)
s=u.a
t=a.b
t.a.a.t()
t=t.e
q=C.a.j(s.c,t)
t=u.a
s=a.c
s.a.a.t()
s=s.e
p=C.a.j(t.c,s)
u.d.a1(0,r,q,p)},
$S:3}
O.fv.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=a>1?1:a
t=b>1?1:b
s=c>1?1:c
r=new V.F(u,t,s,1)
u=this.a
q=u.a.bQ(0,0,0)
q.sR(V.Z())
q.saI(V.lu())
q.sa2(0,r)
p=u.a.bQ(a,b,c)
p.sR(V.Z())
p.saI(V.lu())
p.sa2(0,r)
u.c.p(0,q,p)}}
O.fu.prototype={
$3:function(a,b,c){var u=this.a.a.bQ(a,b,c)
u.sR(V.Z())
u.saI(new V.w(a,b,c))
return u}}
O.bM.prototype={}
T.i7.prototype={}
V.eK.prototype={
aF:function(a,b){return!0},
i:function(a){return"all"},
$iba:1}
V.ba.prototype={}
V.df.prototype={
aF:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.L)(u),++s)if(u[s].aF(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.L)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sao:function(a){this.a=H.o(a,"$ib",[V.ba],"$ab")},
$iba:1}
V.bd.prototype={
aF:function(a,b){return!this.ed(0,b)},
i:function(a){return"!["+this.cn(0)+"]"}}
V.hM.prototype={
eg:function(a){var u,t
if(a.a.length<=0)throw H.c(P.V("May not create a SetMatcher with zero characters."))
u=new H.aw([P.n,P.M])
for(t=new H.dd(a,a.gk(a),0,[H.aD(a,"v",0)]);t.F();)u.m(0,t.d,!0)
this.shd(u)},
aF:function(a,b){return this.a.bb(0,b)},
i:function(a){var u=this.a
return P.dt(u.gah(u),0,null)},
shd:function(a){this.a=H.o(a,"$iA",[P.n,P.M],"$aA")},
$iba:1}
V.co.prototype={
E:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cr(this.a.O(0,b))
r.sao(H.h([],[V.ba]))
r.c=!1
C.a.h(this.c,r)
return r},
ij:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.L)(u),++s){r=u[s]
if(r.aF(0,a))return r}return},
i:function(a){return this.b},
shz:function(a){this.c=H.o(a,"$ib",[V.cr],"$ab")}}
V.dy.prototype={
i:function(a){var u,t
u=H.nc(this.b,"\n","\\n")
t=H.nc(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cq.prototype={
i:function(a){return this.b},
sh9:function(a){var u=P.i
this.c=H.o(a,"$iA",[u,u],"$aA")}}
V.ia.prototype={
O:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.co(this,b)
u.shz(H.h([],[V.cr]))
u.d=null
this.a.m(0,b,u)}return u},
b0:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cq(this,a)
t=P.i
u.sh9(new H.aw([t,t]))
this.b.m(0,a,u)}return u},
j_:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.h([],[V.dy])
t=this.c
s=[P.n]
r=H.h([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.b.H(a,o)
m=t.ij(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.dt(r,0,null)
throw H.c(P.V("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.h([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.dt(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.dy(j==null?k.b:j,l,o)}++o}}},
sho:function(a){this.a=H.o(a,"$iA",[P.i,V.co],"$aA")},
shs:function(a){this.b=H.o(a,"$iA",[P.i,V.cq],"$aA")}}
V.cr.prototype={
i:function(a){return this.b.b+": "+this.cn(0)}}
X.cW.prototype={$im6:1}
X.fr.prototype={
gD:function(){var u=this.x
if(u==null){u=D.a1()
this.x=u}return u}}
X.dk.prototype={
gD:function(){var u=this.f
if(u==null){u=D.a1()
this.f=u}return u},
aw:function(a){var u
H.d(a,"$iB")
u=this.f
if(u!=null)u.K(a)},
er:function(){return this.aw(null)},
saW:function(a){var u,t
if(!J.K(this.b,a)){u=this.b
if(u!=null)u.gD().G(0,this.gcs())
t=this.b
this.b=a
if(a!=null)a.gD().h(0,this.gcs())
u=new D.E("mover",t,this.b,this,[U.ad])
u.b=!0
this.aw(u)}},
$im6:1,
$icW:1}
X.dw.prototype={}
V.eZ.prototype={
a1:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
H.f(c,{func:1,ret:-1,args:[P.M]})
if(this.c==null)return
u=this.d.length
t=P.dG().gaJ().j(0,this.a)
if(t==null||t.length<=u){s=d
r=!0}else{if(u>=t.length)return H.e(t,u)
s=t[u]==="1"
r=!1}c.$1(s)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
J.eI(this.c).h(0,p)
n=W.m_("checkbox")
n.checked=s
o=W.m
W.a9(n,"change",H.f(new V.f_(this,c,n,u),{func:1,ret:-1,args:[o]}),!1,o)
C.j.W(p,n)
m=q.createElement("span")
m.textContent=b
C.j.W(p,m)
J.eI(this.c).h(0,q.createElement("br"))
C.a.h(this.d,n)
if(r)this.d1(u,s)},
p:function(a,b,c){return this.a1(a,b,c,!1)},
d1:function(a,b){var u,t,s,r,q,p,o
u=this.a
t=P.dG().gaJ().j(0,u)
if(t==null)t=""
s=t.length
if(s<a)t=C.b.iH(t,a-s+1,"0")
r=a>0?C.b.A(t,0,a):""
r+=b?"1":"0"
s=a+1
if(s<t.length)r+=C.b.au(t,s)
q=P.dG()
s=P.i
p=P.m4(q.gaJ(),s,s)
p.m(0,u,r)
o=q.cb(0,p)
u=window.history
s=o.i(0)
u.toString;(u&&C.u).cW(u,new P.el([],[]).bi(""),"",s)},
seH:function(a){this.d=H.o(a,"$ib",[W.c3],"$ab")}}
V.f_.prototype={
$1:function(a){var u=this.c
this.b.$1(u.checked)
this.a.d1(this.d,u.checked)},
$S:15}
V.l8.prototype={
$1:function(a){H.d(a,"$ib2")
P.lK(C.d.dT(this.a.gip(),2)+" fps")},
$S:50}
V.hB.prototype={
a1:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.f(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.dG().gaJ().j(0,H.l(u))
if(t==null)if(d){c.$0()
this.d0(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.eI(this.c).h(0,q)
o=W.m_("radio")
o.checked=s
o.name=u
u=W.m
W.a9(o,"change",H.f(new V.hC(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.j.W(q,o)
n=r.createElement("span")
n.textContent=b
C.j.W(q,n)
J.eI(this.c).h(0,r.createElement("br"))},
p:function(a,b,c){return this.a1(a,b,c,!1)},
d0:function(a){var u,t,s,r,q
u=P.dG()
t=P.i
s=P.m4(u.gaJ(),t,t)
s.m(0,this.a,a)
r=u.cb(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.u).cW(t,new P.el([],[]).bi(""),"",q)}}
V.hC.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.d0(this.d)}},
$S:15}
V.hQ.prototype={
ei:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.t).W(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.t.W(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.h.W(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.h.W(q,p)}o=u.createElement("div")
this.a=o
C.h.W(q,o)
this.b=null
o=W.m
W.a9(u,"scroll",H.f(new V.hS(s),{func:1,ret:-1,args:[o]}),!1,o)},
d6:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.o(a,"$ib",[P.i],"$ab")
this.hi()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.j_(C.a.iu(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.L)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.h.W(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.h.W(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.h.W(t,o)
break
case"Link":n=p.b
if(H.po(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.N(m[1])
l.textContent=H.N(m[0])
C.h.W(t,l)}else{k=P.jF(C.U,n,C.i,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.l(k)
l.textContent=n
C.h.W(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.h.W(t,o)
break}}C.h.W(this.a,t)},
hK:function(a){var u,t,s,r,q,p,o
H.o(a,"$ib",[P.i],"$ab")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.h.W(this.a,t)
r=C.Z.f7(t,-1)
s=H.d((r&&C.B).cN(r,-1),"$ib1").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto"
for(q=0;q<3;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.d(C.B.cN(r,-1),"$ib1")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.Y).W(o,p)}},
hi:function(){var u,t,s,r
if(this.b!=null)return
u=new V.ia()
t=P.i
u.sho(new H.aw([t,V.co]))
u.shs(new H.aw([t,V.cq]))
u.c=null
u.c=u.O(0,"Start")
t=u.O(0,"Start").E(0,"Bold")
s=V.ah(new H.a6("*"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,"Bold").E(0,"Bold")
s=new V.bd()
r=[V.ba]
s.sao(H.h([],r))
C.a.h(t.a,s)
t=V.ah(new H.a6("*"))
C.a.h(s.a,t)
t=u.O(0,"Bold").E(0,"BoldEnd")
s=V.ah(new H.a6("*"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,"Start").E(0,"Italic")
s=V.ah(new H.a6("_"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,"Italic").E(0,"Italic")
s=new V.bd()
s.sao(H.h([],r))
C.a.h(t.a,s)
t=V.ah(new H.a6("_"))
C.a.h(s.a,t)
t=u.O(0,"Italic").E(0,"ItalicEnd")
s=V.ah(new H.a6("_"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,"Start").E(0,"Code")
s=V.ah(new H.a6("`"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,"Code").E(0,"Code")
s=new V.bd()
s.sao(H.h([],r))
C.a.h(t.a,s)
t=V.ah(new H.a6("`"))
C.a.h(s.a,t)
t=u.O(0,"Code").E(0,"CodeEnd")
s=V.ah(new H.a6("`"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,"Start").E(0,"LinkHead")
s=V.ah(new H.a6("["))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,"LinkHead").E(0,"LinkTail")
s=V.ah(new H.a6("|"))
C.a.h(t.a,s)
s=u.O(0,"LinkHead").E(0,"LinkEnd")
t=V.ah(new H.a6("]"))
C.a.h(s.a,t)
s.c=!0
s=u.O(0,"LinkHead").E(0,"LinkHead")
t=new V.bd()
t.sao(H.h([],r))
C.a.h(s.a,t)
s=V.ah(new H.a6("|]"))
C.a.h(t.a,s)
s=u.O(0,"LinkTail").E(0,"LinkEnd")
t=V.ah(new H.a6("]"))
C.a.h(s.a,t)
s.c=!0
s=u.O(0,"LinkTail").E(0,"LinkTail")
t=new V.bd()
t.sao(H.h([],r))
C.a.h(s.a,t)
s=V.ah(new H.a6("|]"))
C.a.h(t.a,s)
C.a.h(u.O(0,"Start").E(0,"Other").a,new V.eK())
s=u.O(0,"Other").E(0,"Other")
t=new V.bd()
t.sao(H.h([],r))
C.a.h(s.a,t)
s=V.ah(new H.a6("*_`["))
C.a.h(t.a,s)
s=u.O(0,"BoldEnd")
s.d=s.a.b0("Bold")
s=u.O(0,"ItalicEnd")
s.d=s.a.b0("Italic")
s=u.O(0,"CodeEnd")
s.d=s.a.b0("Code")
s=u.O(0,"LinkEnd")
s.d=s.a.b0("Link")
s=u.O(0,"Other")
s.d=s.a.b0("Other")
this.b=u}}
V.hS.prototype={
$1:function(a){P.mp(C.p,new V.hR(this.a))},
$S:15}
V.hR.prototype={
$0:function(){var u,t,s
u=C.d.ad(document.documentElement.scrollTop)
t=this.a.style
s=H.l(-0.01*u)+"px"
t.top=s},
$S:0}
Z.kj.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.Q!==a){u.Q=a
t=new D.E("showFilled",!a,a,u,[P.M])
t.b=!0
u.Y(t)}},
$S:1}
Z.kk.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.ch!==a){u.ch=a
t=new D.E("showWireFrame",!a,a,u,[P.M])
t.b=!0
u.Y(t)}},
$S:1}
Z.kl.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.cx!==a){u.cx=a
t=new D.E("showVertices",!a,a,u,[P.M])
t.b=!0
u.Y(t)}},
$S:1}
Z.kw.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.cy!==a){u.cy=a
t=new D.E("showNormals",!a,a,u,[P.M])
t.b=!0
u.Y(t)}},
$S:1}
Z.kH.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.db!==a){u.db=a
t=new D.E("showBinormals",!a,a,u,[P.M])
t.b=!0
u.Y(t)}},
$S:1}
Z.kS.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.dx!==a){u.dx=a
t=new D.E("showTangentals",!a,a,u,[P.M])
t.b=!0
u.Y(t)}},
$S:1}
Z.l0.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.fr!==a){u.fr=a
t=new D.E("showFaceCenters",!a,a,u,[P.M])
t.b=!0
u.Y(t)}},
$S:1}
Z.l1.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.fx!==a){u.fx=a
t=new D.E("showFaceNormals",!a,a,u,[P.M])
t.b=!0
u.Y(t)}},
$S:1}
Z.l2.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.fy!==a){u.fy=a
t=new D.E("showFaceBinormals",!a,a,u,[P.M])
t.b=!0
u.Y(t)}},
$S:1}
Z.l3.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.go!==a){u.go=a
t=new D.E("showFaceTangentals",!a,a,u,[P.M])
t.b=!0
u.Y(t)}},
$S:1}
Z.l4.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.id!==a){u.id=a
t=new D.E("showColorFill",!a,a,u,[P.M])
t.b=!0
u.Y(t)}},
$S:1}
Z.km.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.k1!==a){u.k1=a
t=new D.E("showTxt2DColor",!a,a,u,[P.M])
t.b=!0
u.Y(t)}},
$S:1}
Z.kn.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.dy!==a){u.dy=a
t=new D.E("showTxtCube",!a,a,u,[P.M])
t.b=!0
u.Y(t)}},
$S:1}
Z.ko.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.k2!==a){u.k2=a
t=new D.E("showWeight",!a,a,u,[P.M])
t.b=!0
u.Y(t)}},
$S:1}
Z.kp.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.r1!==a){u.r1=a
t=new D.E("showBend",!a,a,u,[P.M])
t.b=!0
u.Y(t)}},
$S:1}
Z.kq.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.k3!==a){u.k3=a
t=new D.E("showAxis",!a,a,u,[P.M])
t.b=!0
u.Y(t)}},
$S:1}
Z.kr.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.k4!==a){u.k4=a
t=new D.E("showAABB",!a,a,u,[P.M])
t.b=!0
u.Y(t)}},
$S:1}
Z.l5.prototype={
$1:function(a){a.hV()
this.a.scl(0,a)},
$S:52}
Z.ks.prototype={
$0:function(){var u,t,s,r,q,p,o,n
u=F.a3()
t=u.a
s=new V.w(-1,-1,1)
s=s.q(0,Math.sqrt(s.w(s)))
r=t.b9(new V.ag(1,2,4,6),new V.F(1,0,0,1),new V.R(-1,-1,0),new V.X(0,1),s,null)
t=u.a
s=new V.w(1,-1,1)
s=s.q(0,Math.sqrt(s.w(s)))
q=t.b9(new V.ag(0,3,4,6),new V.F(0,0,1,1),new V.R(1,-1,0),new V.X(1,1),s,null)
t=u.a
s=new V.w(1,1,1)
s=s.q(0,Math.sqrt(s.w(s)))
p=t.b9(new V.ag(0,2,5,6),new V.F(0,1,0,1),new V.R(1,1,0),new V.X(1,0),s,null)
t=u.a
s=V.b0()
o=new V.w(-1,1,1)
o=o.q(0,Math.sqrt(o.w(o)))
n=t.b9(new V.ag(0,2,4,7),new V.F(1,1,0,1),new V.R(-1,1,0),s,o,null)
u.d.d4(H.h([r,q,p,n],[F.y]))
u.a8()
this.a.$1(u)},
$S:0}
Z.kt.prototype={
$0:function(){this.a.$1(F.jV(1,null,null,1))},
$S:0}
Z.ku.prototype={
$0:function(){this.a.$1(F.jV(8,null,null,8))},
$S:0}
Z.kv.prototype={
$0:function(){this.a.$1(F.jV(15,null,new Z.ki(),15))},
$S:0}
Z.ki.prototype={
$3:function(a,b,c){var u,t,s,r
u=Math.cos(c*4*3.141592653589793+3.141592653589793)
t=Math.cos(b*4*3.141592653589793+3.141592653589793)
s=a.f
s=new V.w(s.a,s.b,s.c)
r=s.q(0,Math.sqrt(s.w(s)))
s=a.f
t=r.u(0,u*0.1+t*0.1)
a.sU(0,s.l(0,new V.R(t.a,t.b,t.c)))},
$S:7}
Z.kx.prototype={
$0:function(){this.a.$1(F.k0(-1,!1,!1,0,null,8))},
$S:0}
Z.ky.prototype={
$0:function(){this.a.$1(F.k0(-1,!1,!1,0,null,30))},
$S:0}
Z.kz.prototype={
$0:function(){this.a.$1(F.lF(1,!0,!0,1,8,1))},
$S:0}
Z.kA.prototype={
$0:function(){this.a.$1(F.lF(1,!0,!0,8,16,1))},
$S:0}
Z.kB.prototype={
$0:function(){this.a.$1(F.lF(1,!0,!1,1,12,0))},
$S:0}
Z.kC.prototype={
$0:function(){this.a.$1(F.mZ(!0,!0,25,new Z.kh(),50))},
$S:0}
Z.kh.prototype={
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8},
$S:9}
Z.kD.prototype={
$0:function(){this.a.$1(F.n6(10,20))},
$S:0}
Z.kE.prototype={
$0:function(){this.a.$1(F.n6(20,40))},
$S:0}
Z.kF.prototype={
$0:function(){this.a.$1(F.n5(2))},
$S:0}
Z.kG.prototype={
$0:function(){this.a.$1(F.n5(3))},
$S:0}
Z.kI.prototype={
$0:function(){this.a.$1(F.lL(6,null,1,6))},
$S:0}
Z.kJ.prototype={
$0:function(){this.a.$1(F.lL(10,null,1,10))},
$S:0}
Z.kK.prototype={
$0:function(){this.a.$1(F.lL(10,new Z.kg(),1,10))},
$S:0}
Z.kg.prototype={
$2:function(a,b){var u,t
u=a-0.5
t=b-0.5
return Math.cos(Math.sqrt(u*u+t*t)*3.141592653589793)*0.3},
$S:9}
Z.kL.prototype={
$0:function(){this.a.$1(F.pq(30,1,15,0.5))},
$S:0}
Z.kM.prototype={
$0:function(){this.a.$1(F.pf(120,1,2,12,0.3,3))},
$S:0}
Z.kN.prototype={
$0:function(){this.a.$1(F.n3(4,null,4))},
$S:0}
Z.kO.prototype={
$0:function(){this.a.$1(F.n3(16,new Z.kf(),16))},
$S:0}
Z.kf.prototype={
$2:function(a,b){return Math.sin(a*8)*Math.cos(b*8)*0.3},
$S:9}
Z.kP.prototype={
$0:function(){this.a.sa4(0.01)},
$S:0}
Z.kQ.prototype={
$0:function(){this.a.sa4(0.02)},
$S:0}
Z.kR.prototype={
$0:function(){this.a.sa4(0.04)},
$S:0}
Z.kT.prototype={
$0:function(){this.a.sa4(0.06)},
$S:0}
Z.kU.prototype={
$0:function(){this.a.sa4(0.08)},
$S:0}
Z.kV.prototype={
$0:function(){this.a.sa4(0.1)},
$S:0}
Z.kW.prototype={
$0:function(){this.a.sa4(0.2)},
$S:0}
Z.kX.prototype={
$0:function(){this.a.sa4(0.4)},
$S:0}
Z.kY.prototype={
$0:function(){this.a.sa4(0.6)},
$S:0}
Z.kZ.prototype={
$0:function(){this.a.sa4(0.8)},
$S:0}
Z.l_.prototype={
$0:function(){this.a.sa4(1)},
$S:0};(function aliases(){var u=J.a.prototype
u.eb=u.i
u=J.da.prototype
u.ec=u.i
u=V.df.prototype
u.ed=u.aF
u.cn=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"oZ","ov",17)
u(P,"p_","ow",17)
u(P,"p0","ox",17)
t(P,"mX","oY",8)
var n
s(n=E.an.prototype,"gdG",0,0,null,["$1","$0"],["dH","iF"],6,0)
s(n,"gdE",0,0,null,["$1","$0"],["dF","iE"],6,0)
s(n,"gdC",0,0,null,["$1","$0"],["dD","iB"],6,0)
r(n,"giz","iA",11)
r(n,"giC","iD",11)
s(n=E.dx.prototype,"gcp",0,0,null,["$1","$0"],["cr","cq"],6,0)
q(n,"giT","dO",8)
p(n=X.dH.prototype,"gfF","fG",18)
p(n,"gfq","fs",18)
p(n,"gfz","fA",10)
p(n,"gfJ","fK",23)
p(n,"gfH","fI",23)
p(n,"gfM","fN",10)
p(n,"gfQ","fR",10)
p(n,"gfD","fE",10)
p(n,"gfO","fP",10)
p(n,"gfB","fC",10)
p(n,"gfS","fT",38)
p(n,"gfU","fV",18)
p(n,"gh2","h3",20)
p(n,"gfZ","h_",20)
p(n,"gh0","h1",20)
o(V.T.prototype,"gk","aV",16)
o(V.w.prototype,"gk","aV",16)
o(V.aR.prototype,"gk","aV",16)
s(n=U.cc.prototype,"gaz",0,0,null,["$1","$0"],["P","a3"],6,0)
r(n,"gfo","fp",24)
r(n,"gfX","fY",24)
s(n=U.dI.prototype,"gaz",0,0,null,["$1","$0"],["P","a3"],6,0)
p(n,"gby","bz",5)
p(n,"gbA","bB",5)
p(n,"gbC","bD",5)
s(n=U.dJ.prototype,"gaz",0,0,null,["$1","$0"],["P","a3"],6,0)
p(n,"gby","bz",5)
p(n,"gbA","bB",5)
p(n,"gbC","bD",5)
p(n,"gfe","ff",5)
p(n,"gfg","fh",5)
p(n,"ghx","hy",5)
p(n,"ghv","hw",5)
p(n,"ght","hu",5)
p(U.dK.prototype,"gfk","fl",5)
s(n=M.d0.prototype,"gae",0,0,null,["$1","$0"],["al","em"],6,0)
r(n,"gft","fu",11)
r(n,"gfv","fw",11)
p(n=O.d5.prototype,"ghl","hm",2)
s(n,"ghI",0,1,null,["$2$color","$1"],["d2","hJ"],46,0)
p(n,"gen","eo",2)
p(n,"gfm","fn",2)
p(n,"geD","eE",2)
p(n,"ghp","hq",2)
p(n,"ghC","hD",2)
p(n,"geU","eV",2)
p(n,"geW","eX",2)
p(n,"geS","eT",2)
p(n,"geY","eZ",2)
p(n,"geK","eL",2)
p(n,"ghA","hB",2)
p(n,"ghG","hH",2)
p(n,"geB","eC",2)
p(n,"gcz","ez",2)
p(n,"gcu","es",2)
s(X.dk.prototype,"gcs",0,0,null,["$1","$0"],["aw","er"],6,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.P,null)
s(P.P,[H.lm,J.a,J.au,P.e0,P.k,H.dd,P.aX,H.bF,H.ct,H.f2,H.hD,H.ig,P.bl,H.c4,H.eh,P.af,H.h2,H.h4,H.fY,P.eo,P.b6,P.aB,P.dM,P.i_,P.cp,P.i0,P.b2,P.ai,P.jJ,P.js,P.cy,P.jm,P.v,P.jA,P.hb,P.bB,P.jI,P.jG,P.M,P.aj,P.a4,P.aW,P.hv,P.dr,P.dU,P.fq,P.b,P.A,P.D,P.ao,P.i,P.at,P.bO,P.iA,P.jt,W.f5,W.c3,W.z,W.d1,P.jv,P.jn,P.S,O.aa,O.cf,E.eV,E.an,E.hE,E.dx,Z.dL,Z.iW,Z.c2,Z.cU,Z.bm,Z.cv,D.eY,D.c9,D.B,X.cV,X.db,X.h_,X.h8,X.as,X.hl,X.ib,X.dH,V.am,V.F,V.fh,V.bo,V.X,V.R,V.ag,V.dp,V.cm,V.T,V.w,V.aR,U.dI,U.dJ,U.dK,M.d0,A.cQ,A.eO,A.dA,A.ir,F.G,F.fk,F.ar,F.h1,F.bq,F.a7,F.hN,F.hO,F.hP,F.y,F.iJ,F.iK,F.iO,F.iP,F.iQ,F.iR,F.iS,O.bM,T.i7,V.eK,V.ba,V.df,V.hM,V.co,V.dy,V.cq,V.ia,X.cW,X.dw,X.dk,V.eZ,V.hB,V.hQ])
s(J.a,[J.fW,J.d9,J.da,J.aH,J.bn,J.b8,H.ch,H.bp,W.j,W.eJ,W.bz,W.aU,W.aV,W.U,W.dO,W.f9,W.fa,W.dQ,W.d_,W.dS,W.fc,W.m,W.dV,W.aG,W.d3,W.dX,W.cd,W.h7,W.hf,W.e1,W.e2,W.aI,W.e3,W.e6,W.aJ,W.ea,W.ec,W.aL,W.ed,W.aM,W.ei,W.ax,W.em,W.i9,W.aO,W.ep,W.id,W.iF,W.eu,W.ew,W.ey,W.eA,W.eC,P.aZ,P.dZ,P.b_,P.e8,P.hz,P.ej,P.b3,P.er,P.eP,P.dN,P.cS,P.d2,P.dm,P.bK,P.dq,P.dD,P.ef])
s(J.da,[J.hw,J.bs,J.b9])
t(J.ll,J.aH)
s(J.bn,[J.d8,J.fX])
t(P.h6,P.e0)
s(P.h6,[H.dE,W.j3,W.j2,P.fm])
t(H.a6,H.dE)
s(P.k,[H.ff,H.hc,H.iX])
s(P.aX,[H.hd,H.iY])
t(H.f3,H.f2)
s(P.bl,[H.hs,H.fZ,H.iy,H.ii,H.eX,H.hK,P.dj,P.aS,P.iz,P.iw,P.ds,P.f1,P.f8])
s(H.c4,[H.lc,H.i4,H.k8,H.k9,H.ka,P.j_,P.iZ,P.j0,P.j1,P.jz,P.jy,P.j9,P.jd,P.ja,P.jb,P.jc,P.jg,P.jh,P.jf,P.je,P.i1,P.i2,P.jS,P.jq,P.jp,P.jr,P.h5,P.ha,P.jH,P.fd,P.fe,P.iE,P.iB,P.iC,P.iD,P.jB,P.jC,P.jE,P.jD,P.jN,P.jM,P.jO,P.jP,W.hh,W.hj,W.hJ,W.hZ,W.j8,P.jw,P.jU,P.fn,P.fo,P.eR,E.hF,E.hG,E.hH,E.i8,D.fj,F.jK,F.k1,F.jW,F.jY,F.jZ,F.k_,F.kd,F.l9,F.la,F.lb,F.kc,F.jX,F.k5,F.k6,F.iU,F.iT,F.iL,F.iM,O.fH,O.fI,O.fS,O.fR,O.fT,O.fU,O.fN,O.fG,O.fy,O.fJ,O.fM,O.fC,O.fD,O.fB,O.fE,O.fz,O.fA,O.fK,O.fL,O.fO,O.fP,O.fQ,O.fF,O.fw,O.fx,O.fv,O.fu,V.f_,V.l8,V.hC,V.hS,V.hR,Z.kj,Z.kk,Z.kl,Z.kw,Z.kH,Z.kS,Z.l0,Z.l1,Z.l2,Z.l3,Z.l4,Z.km,Z.kn,Z.ko,Z.kp,Z.kq,Z.kr,Z.l5,Z.ks,Z.kt,Z.ku,Z.kv,Z.ki,Z.kx,Z.ky,Z.kz,Z.kA,Z.kB,Z.kC,Z.kh,Z.kD,Z.kE,Z.kF,Z.kG,Z.kI,Z.kJ,Z.kK,Z.kg,Z.kL,Z.kM,Z.kN,Z.kO,Z.kf,Z.kP,Z.kQ,Z.kR,Z.kT,Z.kU,Z.kV,Z.kW,Z.kX,Z.kY,Z.kZ,Z.l_])
s(H.i4,[H.hX,H.c0])
t(P.h9,P.af)
t(H.aw,P.h9)
t(H.h3,H.ff)
t(H.dg,H.bp)
s(H.dg,[H.cz,H.cB])
t(H.cA,H.cz)
t(H.ci,H.cA)
t(H.cC,H.cB)
t(H.dh,H.cC)
s(H.dh,[H.hm,H.hn,H.ho,H.hp,H.hq,H.di,H.cj])
t(P.jo,P.jJ)
t(P.jl,P.js)
t(P.et,P.hb)
t(P.dF,P.et)
s(P.bB,[P.eT,P.fg])
t(P.bD,P.i0)
s(P.bD,[P.eU,P.iI,P.iH])
t(P.iG,P.fg)
s(P.a4,[P.r,P.n])
s(P.aS,[P.bJ,P.fs])
t(P.j5,P.bO)
s(W.j,[W.H,W.fl,W.aK,W.cD,W.aN,W.ay,W.cF,W.iV,W.cw,P.eS,P.by])
s(W.H,[W.a2,W.bk,W.c8])
s(W.a2,[W.t,P.q])
s(W.t,[W.eL,W.eM,W.cR,W.bA,W.c7,W.fp,W.ce,W.dc,W.hL,W.b1,W.du,W.dv])
s(W.aU,[W.c5,W.f6,W.f7])
t(W.f4,W.aV)
t(W.c6,W.dO)
t(W.dR,W.dQ)
t(W.cZ,W.dR)
t(W.dT,W.dS)
t(W.fb,W.dT)
t(W.av,W.bz)
t(W.dW,W.dV)
t(W.ca,W.dW)
t(W.dY,W.dX)
t(W.bG,W.dY)
t(W.d4,W.c8)
t(W.br,W.m)
s(W.br,[W.aY,W.ac,W.aP])
t(W.hg,W.e1)
t(W.hi,W.e2)
t(W.e4,W.e3)
t(W.hk,W.e4)
t(W.e7,W.e6)
t(W.ck,W.e7)
t(W.eb,W.ea)
t(W.hx,W.eb)
t(W.hI,W.ec)
t(W.cE,W.cD)
t(W.hU,W.cE)
t(W.ee,W.ed)
t(W.hV,W.ee)
t(W.hY,W.ei)
t(W.en,W.em)
t(W.i5,W.en)
t(W.cG,W.cF)
t(W.i6,W.cG)
t(W.eq,W.ep)
t(W.ic,W.eq)
t(W.b5,W.ac)
t(W.ev,W.eu)
t(W.j4,W.ev)
t(W.dP,W.d_)
t(W.ex,W.ew)
t(W.ji,W.ex)
t(W.ez,W.ey)
t(W.e5,W.ez)
t(W.eB,W.eA)
t(W.ju,W.eB)
t(W.eD,W.eC)
t(W.jx,W.eD)
t(W.j6,P.i_)
t(W.lw,W.j6)
t(W.j7,P.cp)
t(P.el,P.jv)
t(P.a8,P.jn)
t(P.e_,P.dZ)
t(P.h0,P.e_)
t(P.e9,P.e8)
t(P.ht,P.e9)
t(P.ek,P.ej)
t(P.i3,P.ek)
t(P.es,P.er)
t(P.ie,P.es)
t(P.eQ,P.dN)
t(P.hu,P.by)
t(P.eg,P.ef)
t(P.hW,P.eg)
s(E.eV,[Z.cT,A.cn])
s(D.B,[D.d6,D.d7,D.E,X.hy])
s(X.hy,[X.de,X.bc,X.cg,X.dz])
s(D.eY,[U.f0,U.ad,F.bL])
t(U.cX,U.ad)
t(U.cc,O.aa)
t(A.ft,A.cn)
s(A.dA,[A.ik,A.io,A.ip,A.iq,A.il,A.dB,A.im,A.dC,A.cs,A.is,A.it,A.bN,A.iu,A.iv])
t(F.hT,F.fk)
t(F.ij,F.h1)
t(F.cu,F.iP)
t(F.hA,F.iQ)
s(F.iR,[F.iN,F.hr])
t(O.d5,O.bM)
s(V.df,[V.bd,V.cr])
t(X.fr,X.dw)
u(H.dE,H.ct)
u(H.cz,P.v)
u(H.cA,H.bF)
u(H.cB,P.v)
u(H.cC,H.bF)
u(P.e0,P.v)
u(P.et,P.jA)
u(W.dO,W.f5)
u(W.dQ,P.v)
u(W.dR,W.z)
u(W.dS,P.v)
u(W.dT,W.z)
u(W.dV,P.v)
u(W.dW,W.z)
u(W.dX,P.v)
u(W.dY,W.z)
u(W.e1,P.af)
u(W.e2,P.af)
u(W.e3,P.v)
u(W.e4,W.z)
u(W.e6,P.v)
u(W.e7,W.z)
u(W.ea,P.v)
u(W.eb,W.z)
u(W.ec,P.af)
u(W.cD,P.v)
u(W.cE,W.z)
u(W.ed,P.v)
u(W.ee,W.z)
u(W.ei,P.af)
u(W.em,P.v)
u(W.en,W.z)
u(W.cF,P.v)
u(W.cG,W.z)
u(W.ep,P.v)
u(W.eq,W.z)
u(W.eu,P.v)
u(W.ev,W.z)
u(W.ew,P.v)
u(W.ex,W.z)
u(W.ey,P.v)
u(W.ez,W.z)
u(W.eA,P.v)
u(W.eB,W.z)
u(W.eC,P.v)
u(W.eD,W.z)
u(P.dZ,P.v)
u(P.e_,W.z)
u(P.e8,P.v)
u(P.e9,W.z)
u(P.ej,P.v)
u(P.ek,W.z)
u(P.er,P.v)
u(P.es,W.z)
u(P.dN,P.af)
u(P.ef,P.v)
u(P.eg,W.z)})();(function constants(){var u=hunkHelpers.makeConstList
C.t=W.cR.prototype
C.o=W.bA.prototype
C.h=W.c7.prototype
C.u=W.d3.prototype
C.q=W.d4.prototype
C.J=J.a.prototype
C.a=J.aH.prototype
C.e=J.d8.prototype
C.K=J.d9.prototype
C.d=J.bn.prototype
C.b=J.b8.prototype
C.R=J.b9.prototype
C.j=W.dc.prototype
C.X=W.ck.prototype
C.A=J.hw.prototype
C.c=P.bK.prototype
C.Y=W.b1.prototype
C.Z=W.du.prototype
C.B=W.dv.prototype
C.r=J.bs.prototype
C.C=W.b5.prototype
C.D=W.cw.prototype
C.F=new P.eU(!1)
C.E=new P.eT(C.F)
C.G=new P.hv()
C.H=new P.iI()
C.f=new P.jo()
C.p=new P.aW(0)
C.I=new P.aW(5e6)
C.L=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.M=function(hooks) {
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
C.v=function(hooks) { return hooks; }

C.N=function(getTagFallback) {
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
C.O=function() {
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
C.P=function(hooks) {
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
C.Q=function(hooks) {
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
C.w=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.x=H.h(u([127,2047,65535,1114111]),[P.n])
C.k=H.h(u([0,0,32776,33792,1,10240,0,0]),[P.n])
C.l=H.h(u([0,0,65490,45055,65535,34815,65534,18431]),[P.n])
C.m=H.h(u([0,0,26624,1023,65534,2047,65534,2047]),[P.n])
C.T=H.h(u([0,0,32722,12287,65534,34815,65534,18431]),[P.n])
C.U=H.h(u([0,0,65498,45055,65535,34815,65534,18431]),[P.n])
C.n=H.h(u([0,0,24576,1023,65534,34815,65534,18431]),[P.n])
C.y=H.h(u([0,0,32754,11263,65534,34815,65534,18431]),[P.n])
C.V=H.h(u([0,0,32722,12287,65535,34815,65534,18431]),[P.n])
C.z=H.h(u([0,0,65490,12287,65535,34815,65534,18431]),[P.n])
C.S=H.h(u([]),[P.i])
C.W=new H.f3(0,{},C.S,[P.i,P.i])
C.i=new P.iG(!1)})();(function staticFields(){$.aT=0
$.c1=null
$.lT=null
$.lz=!1
$.n2=null
$.mV=null
$.nb=null
$.k2=null
$.kb=null
$.lI=null
$.bP=null
$.cK=null
$.cL=null
$.lA=!1
$.Y=C.f
$.m5=null
$.ma=null
$.mb=null
$.md=null
$.mj=null
$.ml=null
$.mv=null
$.mA=null
$.mx=null
$.my=null
$.mz=null
$.mw=null
$.mC=null
$.nQ="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n"
$.nP="precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n"
$.m9=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pw","nf",function(){return H.n1("_$dart_dartClosure")})
u($,"px","lM",function(){return H.n1("_$dart_js")})
u($,"pA","ng",function(){return H.b4(H.ih({
toString:function(){return"$receiver$"}}))})
u($,"pB","nh",function(){return H.b4(H.ih({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pC","ni",function(){return H.b4(H.ih(null))})
u($,"pD","nj",function(){return H.b4(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pG","nm",function(){return H.b4(H.ih(void 0))})
u($,"pH","nn",function(){return H.b4(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pF","nl",function(){return H.b4(H.mr(null))})
u($,"pE","nk",function(){return H.b4(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pJ","np",function(){return H.b4(H.mr(void 0))})
u($,"pI","no",function(){return H.b4(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pY","lN",function(){return P.ou()})
u($,"q1","cO",function(){return[]})
u($,"pK","nq",function(){return P.or()})
u($,"pZ","nu",function(){return H.o0(H.jQ(H.h([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.n])))})
u($,"q_","nv",function(){return P.of("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"q0","nw",function(){return P.oQ()})
u($,"pR","nt",function(){return Z.aA(0)})
u($,"pL","nr",function(){return Z.aA(511)})
u($,"pT","bj",function(){return Z.aA(1)})
u($,"pS","bi",function(){return Z.aA(2)})
u($,"pN","bh",function(){return Z.aA(4)})
u($,"pU","bX",function(){return Z.aA(8)})
u($,"pV","bY",function(){return Z.aA(16)})
u($,"pO","bx",function(){return Z.aA(32)})
u($,"pP","cN",function(){return Z.aA(64)})
u($,"pQ","ns",function(){return Z.aA(96)})
u($,"pW","bZ",function(){return Z.aA(128)})
u($,"pM","bW",function(){return Z.aA(256)})
u($,"pv","ne",function(){return new V.fh(1e-9)})
u($,"pu","Q",function(){return $.ne()})})()
var v={mangledGlobalNames:{n:"int",r:"double",a4:"num",i:"String",M:"bool",D:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.D},{func:1,ret:P.D,args:[P.M]},{func:1,ret:F.a7,args:[F.a7]},{func:1,ret:P.D,args:[F.G]},{func:1,ret:P.D,args:[F.y]},{func:1,ret:-1,args:[D.B]},{func:1,ret:-1,opt:[D.B]},{func:1,ret:P.D,args:[F.y,P.r,P.r]},{func:1,ret:-1},{func:1,ret:P.r,args:[P.r,P.r]},{func:1,ret:-1,args:[W.ac]},{func:1,ret:-1,args:[P.n,[P.k,E.an]]},{func:1,ret:P.D,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:P.r,args:[P.r]},{func:1,ret:P.D,args:[W.m]},{func:1,ret:P.r},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.m]},{func:1,ret:P.D,args:[D.B]},{func:1,ret:-1,args:[W.aP]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,args:[,]},{func:1,ret:-1,args:[W.aY]},{func:1,ret:-1,args:[P.n,[P.k,U.ad]]},{func:1,ret:P.i,args:[P.n]},{func:1,ret:V.R,args:[P.r]},{func:1,ret:P.D,args:[,]},{func:1,ret:P.S,args:[,,]},{func:1,ret:P.D,args:[P.i,,]},{func:1,args:[W.m]},{func:1,ret:P.M,args:[W.H]},{func:1,ret:W.a2,args:[W.H]},{func:1,ret:P.D,args:[P.i]},{func:1,ret:P.D,args:[P.a4]},{func:1,ret:P.D,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:-1,args:[W.b5]},{func:1,ret:-1,args:[P.i,P.n]},{func:1,ret:[P.A,P.i,P.i],args:[[P.A,P.i,P.i],P.i]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:[P.aB,,],args:[,]},{func:1,ret:P.D,args:[,],opt:[P.ao]},{func:1,ret:P.D,args:[{func:1,ret:-1}]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:F.a7,args:[F.a7],named:{color:V.F}},{func:1,ret:-1,args:[F.y,F.y]},{func:1,ret:P.D,args:[F.ar]},{func:1,args:[P.i]},{func:1,ret:P.D,args:[P.b2]},{func:1,args:[,P.i]},{func:1,ret:-1,args:[F.a7]},{func:1,ret:P.S,args:[P.n]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.ch,DataView:H.bp,ArrayBufferView:H.bp,Float32Array:H.ci,Float64Array:H.ci,Int16Array:H.hm,Int32Array:H.hn,Int8Array:H.ho,Uint16Array:H.hp,Uint32Array:H.hq,Uint8ClampedArray:H.di,CanvasPixelArray:H.di,Uint8Array:H.cj,HTMLAudioElement:W.t,HTMLBRElement:W.t,HTMLBaseElement:W.t,HTMLButtonElement:W.t,HTMLContentElement:W.t,HTMLDListElement:W.t,HTMLDataElement:W.t,HTMLDataListElement:W.t,HTMLDetailsElement:W.t,HTMLDialogElement:W.t,HTMLEmbedElement:W.t,HTMLFieldSetElement:W.t,HTMLHRElement:W.t,HTMLHeadElement:W.t,HTMLHeadingElement:W.t,HTMLHtmlElement:W.t,HTMLIFrameElement:W.t,HTMLImageElement:W.t,HTMLLIElement:W.t,HTMLLegendElement:W.t,HTMLLinkElement:W.t,HTMLMapElement:W.t,HTMLMediaElement:W.t,HTMLMenuElement:W.t,HTMLMetaElement:W.t,HTMLMeterElement:W.t,HTMLModElement:W.t,HTMLOListElement:W.t,HTMLObjectElement:W.t,HTMLOptGroupElement:W.t,HTMLOptionElement:W.t,HTMLOutputElement:W.t,HTMLParagraphElement:W.t,HTMLParamElement:W.t,HTMLPictureElement:W.t,HTMLPreElement:W.t,HTMLProgressElement:W.t,HTMLQuoteElement:W.t,HTMLScriptElement:W.t,HTMLShadowElement:W.t,HTMLSlotElement:W.t,HTMLSourceElement:W.t,HTMLSpanElement:W.t,HTMLStyleElement:W.t,HTMLTableCaptionElement:W.t,HTMLTableColElement:W.t,HTMLTableSectionElement:W.t,HTMLTemplateElement:W.t,HTMLTextAreaElement:W.t,HTMLTimeElement:W.t,HTMLTitleElement:W.t,HTMLTrackElement:W.t,HTMLUListElement:W.t,HTMLUnknownElement:W.t,HTMLVideoElement:W.t,HTMLDirectoryElement:W.t,HTMLFontElement:W.t,HTMLFrameElement:W.t,HTMLFrameSetElement:W.t,HTMLMarqueeElement:W.t,HTMLElement:W.t,AccessibleNodeList:W.eJ,HTMLAnchorElement:W.eL,HTMLAreaElement:W.eM,Blob:W.bz,HTMLBodyElement:W.cR,HTMLCanvasElement:W.bA,CDATASection:W.bk,CharacterData:W.bk,Comment:W.bk,ProcessingInstruction:W.bk,Text:W.bk,CSSNumericValue:W.c5,CSSUnitValue:W.c5,CSSPerspective:W.f4,CSSCharsetRule:W.U,CSSConditionRule:W.U,CSSFontFaceRule:W.U,CSSGroupingRule:W.U,CSSImportRule:W.U,CSSKeyframeRule:W.U,MozCSSKeyframeRule:W.U,WebKitCSSKeyframeRule:W.U,CSSKeyframesRule:W.U,MozCSSKeyframesRule:W.U,WebKitCSSKeyframesRule:W.U,CSSMediaRule:W.U,CSSNamespaceRule:W.U,CSSPageRule:W.U,CSSRule:W.U,CSSStyleRule:W.U,CSSSupportsRule:W.U,CSSViewportRule:W.U,CSSStyleDeclaration:W.c6,MSStyleCSSProperties:W.c6,CSS2Properties:W.c6,CSSImageValue:W.aU,CSSKeywordValue:W.aU,CSSPositionValue:W.aU,CSSResourceValue:W.aU,CSSURLImageValue:W.aU,CSSStyleValue:W.aU,CSSMatrixComponent:W.aV,CSSRotation:W.aV,CSSScale:W.aV,CSSSkew:W.aV,CSSTranslation:W.aV,CSSTransformComponent:W.aV,CSSTransformValue:W.f6,CSSUnparsedValue:W.f7,DataTransferItemList:W.f9,HTMLDivElement:W.c7,XMLDocument:W.c8,Document:W.c8,DOMException:W.fa,ClientRectList:W.cZ,DOMRectList:W.cZ,DOMRectReadOnly:W.d_,DOMStringList:W.fb,DOMTokenList:W.fc,Element:W.a2,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MessagePort:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.av,FileList:W.ca,FileWriter:W.fl,HTMLFormElement:W.fp,Gamepad:W.aG,History:W.d3,HTMLCollection:W.bG,HTMLFormControlsCollection:W.bG,HTMLOptionsCollection:W.bG,HTMLDocument:W.d4,ImageData:W.cd,HTMLInputElement:W.ce,KeyboardEvent:W.aY,HTMLLabelElement:W.dc,Location:W.h7,MediaList:W.hf,MIDIInputMap:W.hg,MIDIOutputMap:W.hi,MimeType:W.aI,MimeTypeArray:W.hk,PointerEvent:W.ac,MouseEvent:W.ac,DragEvent:W.ac,DocumentFragment:W.H,ShadowRoot:W.H,Attr:W.H,DocumentType:W.H,Node:W.H,NodeList:W.ck,RadioNodeList:W.ck,Plugin:W.aJ,PluginArray:W.hx,RTCStatsReport:W.hI,HTMLSelectElement:W.hL,SourceBuffer:W.aK,SourceBufferList:W.hU,SpeechGrammar:W.aL,SpeechGrammarList:W.hV,SpeechRecognitionResult:W.aM,Storage:W.hY,CSSStyleSheet:W.ax,StyleSheet:W.ax,HTMLTableCellElement:W.b1,HTMLTableDataCellElement:W.b1,HTMLTableHeaderCellElement:W.b1,HTMLTableElement:W.du,HTMLTableRowElement:W.dv,TextTrack:W.aN,TextTrackCue:W.ay,VTTCue:W.ay,TextTrackCueList:W.i5,TextTrackList:W.i6,TimeRanges:W.i9,Touch:W.aO,TouchEvent:W.aP,TouchList:W.ic,TrackDefaultList:W.id,CompositionEvent:W.br,FocusEvent:W.br,TextEvent:W.br,UIEvent:W.br,URL:W.iF,VideoTrackList:W.iV,WheelEvent:W.b5,Window:W.cw,DOMWindow:W.cw,CSSRuleList:W.j4,ClientRect:W.dP,DOMRect:W.dP,GamepadList:W.ji,NamedNodeMap:W.e5,MozNamedAttrMap:W.e5,SpeechRecognitionResultList:W.ju,StyleSheetList:W.jx,SVGLength:P.aZ,SVGLengthList:P.h0,SVGNumber:P.b_,SVGNumberList:P.ht,SVGPointList:P.hz,SVGStringList:P.i3,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGScriptElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGTransform:P.b3,SVGTransformList:P.ie,AudioBuffer:P.eP,AudioParamMap:P.eQ,AudioTrackList:P.eS,AudioContext:P.by,webkitAudioContext:P.by,BaseAudioContext:P.by,OfflineAudioContext:P.hu,WebGLBuffer:P.cS,WebGLFramebuffer:P.d2,WebGLProgram:P.dm,WebGL2RenderingContext:P.bK,WebGLShader:P.dq,WebGLUniformLocation:P.dD,SQLResultSetRowList:P.hW})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.cz.$nativeSuperclassTag="ArrayBufferView"
H.cA.$nativeSuperclassTag="ArrayBufferView"
H.ci.$nativeSuperclassTag="ArrayBufferView"
H.cB.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"
H.dh.$nativeSuperclassTag="ArrayBufferView"
W.cD.$nativeSuperclassTag="EventTarget"
W.cE.$nativeSuperclassTag="EventTarget"
W.cF.$nativeSuperclassTag="EventTarget"
W.cG.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(Z.n8,[])
else Z.n8([])})})()
//# sourceMappingURL=test.dart.js.map
