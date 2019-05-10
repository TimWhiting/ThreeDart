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
a[c]=function(){a[c]=function(){H.pt(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lv(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={lb:function lb(a){this.a=a},
kN:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
hv:function(){return new P.cg("No element")},
nL:function(){return new P.cg("Too many elements")},
nK:function(){return new P.cg("Too few elements")},
u:function u(a){this.a=a},
ha:function ha(){},
c9:function c9(){},
cF:function cF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hM:function hM(a,b,c){this.a=a
this.b=b
this.$ti=c},
hN:function hN(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hO:function hO(a,b,c){this.a=a
this.b=b
this.$ti=c},
d6:function d6(a,b,c){this.a=a
this.b=b
this.$ti=c},
jK:function jK(a,b,c){this.a=a
this.b=b
this.$ti=c},
c5:function c5(){},
d3:function d3(){},
ex:function ex(){},
nB:function(){throw H.c(P.G("Cannot modify unmodifiable Map"))},
cs:function(a){var u,t
u=H.H(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
pb:function(a){return v.types[H.ac(a)]},
pi:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.U(a).$iK},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aO(a)
if(typeof u!=="string")throw H.c(H.au(a))
return u},
o6:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.hw(u)
t=u[0]
s=u[1]
return new H.ij(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cP:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
o3:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.h(u,3)
t=H.H(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ag(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.H(r,p)|32)>s)return}return parseInt(a,b)},
cc:function(a){return H.nV(a)+H.ls(H.bW(a),0,null)},
nV:function(a){var u,t,s,r,q,p,o,n,m
u=J.U(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.Y||!!u.$ibT){p=C.F(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.cs(r.length>1&&C.c.H(r,0)===36?C.c.aA(r,1):r)},
nW:function(){if(!!self.location)return self.location.href
return},
m7:function(a){var u,t,s,r,q
H.kS(a)
u=J.aG(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
o4:function(a){var u,t,s,r
u=H.d([],[P.o])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.I)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.au(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.e.b0(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.au(r))}return H.m7(u)},
m8:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.au(s))
if(s<0)throw H.c(H.au(s))
if(s>65535)return H.o4(a)}return H.m7(a)},
o5:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
cd:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.b0(u,10))>>>0,56320|u&1023)}}throw H.c(P.ag(a,0,1114111,null,null))},
cb:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o2:function(a){var u=H.cb(a).getFullYear()+0
return u},
o0:function(a){var u=H.cb(a).getMonth()+1
return u},
nX:function(a){var u=H.cb(a).getDate()+0
return u},
nY:function(a){var u=H.cb(a).getHours()+0
return u},
o_:function(a){var u=H.cb(a).getMinutes()+0
return u},
o1:function(a){var u=H.cb(a).getSeconds()+0
return u},
nZ:function(a){var u=H.cb(a).getMilliseconds()+0
return u},
F:function(a){throw H.c(H.au(a))},
h:function(a,b){if(a==null)J.aG(a)
throw H.c(H.cn(a,b))},
cn:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aP(!0,b,"index",null)
u=H.ac(J.aG(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.a_(b,a,"index",null,u)
return P.eb(b,"index",null)},
p4:function(a,b,c){if(a>c)return new P.ce(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.ce(a,c,!0,b,"end","Invalid value")
return new P.aP(!0,b,"end",null)},
au:function(a){return new P.aP(!0,a,null,null)},
p_:function(a){if(typeof a!=="number")throw H.c(H.au(a))
return a},
c:function(a){var u
if(a==null)a=new P.e6()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.n_})
u.name=""}else u.toString=H.n_
return u},
n_:function(){return J.aO(this.dartException)},
t:function(a){throw H.c(a)},
I:function(a){throw H.c(P.b4(a))},
bj:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.j6(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
j7:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mj:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m1:function(a,b){return new H.i8(a,b==null?null:b.method)},
lc:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.hz(a,t,u?null:b.receiver)},
ao:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.kZ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.e.b0(s,16)&8191)===10)switch(r){case 438:return u.$1(H.lc(H.m(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.m1(H.m(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.n2()
p=$.n3()
o=$.n4()
n=$.n5()
m=$.n8()
l=$.n9()
k=$.n7()
$.n6()
j=$.nb()
i=$.na()
h=q.av(t)
if(h!=null)return u.$1(H.lc(H.H(t),h))
else{h=p.av(t)
if(h!=null){h.method="call"
return u.$1(H.lc(H.H(t),h))}else{h=o.av(t)
if(h==null){h=n.av(t)
if(h==null){h=m.av(t)
if(h==null){h=l.av(t)
if(h==null){h=k.av(t)
if(h==null){h=n.av(t)
if(h==null){h=j.av(t)
if(h==null){h=i.av(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.m1(H.H(t),h))}}return u.$1(new H.jk(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.ej()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aP(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.ej()
return a},
cq:function(a){var u
if(a==null)return new H.fb(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.fb(a)},
p7:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.n(0,a[t],a[s])}return b},
ph:function(a,b,c,d,e,f){H.e(a,"$ibI")
switch(H.ac(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.v("Unsupported number of arguments for wrapped closure"))},
cm:function(a,b){var u
H.ac(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ph)
a.$identity=u
return u},
nA:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.U(d).$ib){u.$reflectionInfo=d
s=H.o6(u).r}else s=d
r=e?Object.create(new H.iF().constructor.prototype):Object.create(new H.cv(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.b3
if(typeof p!=="number")return p.q()
$.b3=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.lN(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.pb,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.lL:H.l3
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.lN(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
nx:function(a,b,c,d){var u=H.l3
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lN:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nz(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nx(t,!r,u,b)
if(t===0){r=$.b3
if(typeof r!=="number")return r.q()
$.b3=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cw
if(q==null){q=H.fR("self")
$.cw=q}return new Function(r+H.m(q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b3
if(typeof r!=="number")return r.q()
$.b3=r+1
o+=r
r="return function("+o+"){return this."
q=$.cw
if(q==null){q=H.fR("self")
$.cw=q}return new Function(r+H.m(q)+"."+H.m(u)+"("+o+");}")()},
ny:function(a,b,c,d){var u,t
u=H.l3
t=H.lL
switch(b?-1:a){case 0:throw H.c(H.oa("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nz:function(a,b){var u,t,s,r,q,p,o,n
u=$.cw
if(u==null){u=H.fR("self")
$.cw=u}t=$.lK
if(t==null){t=H.fR("receiver")
$.lK=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.ny(r,!p,s,b)
if(r===1){u="return function(){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+");"
t=$.b3
if(typeof t!=="number")return t.q()
$.b3=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+", "+n+");"
t=$.b3
if(typeof t!=="number")return t.q()
$.b3=t+1
return new Function(u+t+"}")()},
lv:function(a,b,c,d,e,f,g){return H.nA(a,b,H.ac(c),d,!!e,!!f,g)},
l3:function(a){return a.a},
lL:function(a){return a.c},
fR:function(a){var u,t,s,r,q
u=new H.cv("self","target","receiver","name")
t=J.hw(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.b0(a,"String"))},
p5:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b0(a,"double"))},
pm:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b0(a,"num"))},
lt:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.b0(a,"bool"))},
ac:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.b0(a,"int"))},
mY:function(a,b){throw H.c(H.b0(a,H.cs(H.H(b).substring(2))))},
po:function(a,b){throw H.c(H.nw(a,H.cs(H.H(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.U(a)[b])return a
H.mY(a,b)},
j:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.U(a)[b]
else u=!0
if(u)return a
H.po(a,b)},
kS:function(a){if(a==null)return a
if(!!J.U(a).$ib)return a
throw H.c(H.b0(a,"List<dynamic>"))},
mV:function(a,b){var u
if(a==null)return a
u=J.U(a)
if(!!u.$ib)return a
if(u[b])return a
H.mY(a,b)},
mR:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ac(u)]
else return a.$S()}return},
fA:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.mR(J.U(a))
if(u==null)return!1
return H.mH(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lp)return a
$.lp=!0
try{if(H.fA(a,b))return a
u=H.kW(b)
t=H.b0(a,u)
throw H.c(t)}finally{$.lp=!1}},
lw:function(a,b){if(a!=null&&!H.lu(a,b))H.t(H.b0(a,H.kW(b)))
return a},
b0:function(a,b){return new H.j8("TypeError: "+P.he(a)+": type '"+H.mM(a)+"' is not a subtype of type '"+b+"'")},
nw:function(a,b){return new H.fS("CastError: "+P.he(a)+": type '"+H.mM(a)+"' is not a subtype of type '"+b+"'")},
mM:function(a){var u,t
u=J.U(a)
if(!!u.$icx){t=H.mR(u)
if(t!=null)return H.kW(t)
return"Closure"}return H.cc(a)},
pt:function(a){throw H.c(new P.h1(H.H(a)))},
oa:function(a){return new H.ir(a)},
mS:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bW:function(a){if(a==null)return
return a.$ti},
qe:function(a,b,c){return H.cr(a["$a"+H.m(c)],H.bW(b))},
bw:function(a,b,c,d){var u
H.H(c)
H.ac(d)
u=H.cr(a["$a"+H.m(c)],H.bW(b))
return u==null?null:u[d]},
an:function(a,b,c){var u
H.H(b)
H.ac(c)
u=H.cr(a["$a"+H.m(b)],H.bW(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.ac(b)
u=H.bW(a)
return u==null?null:u[b]},
kW:function(a){return H.bV(a,null)},
bV:function(a,b){var u,t
H.l(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cs(a[0].name)+H.ls(a,1,b)
if(typeof a=="function")return H.cs(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ac(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.m(b[t])}if('func' in a)return H.oP(a,b)
if('futureOr' in a)return"FutureOr<"+H.bV("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oP:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.f]
H.l(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.d([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.h(b,m)
o=C.c.q(o,b[m])
l=t[p]
if(l!=null&&l!==P.Q)o+=" extends "+H.bV(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bV(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bV(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bV(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.p6(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.H(u[g])
i=i+h+H.bV(d[c],b)+(" "+H.m(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
ls:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.ak("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bV(p,c)}return"<"+u.i(0)+">"},
cr:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dm:function(a,b,c,d){var u,t
H.H(b)
H.kS(c)
H.H(d)
if(a==null)return!1
u=H.bW(a)
t=J.U(a)
if(t[b]==null)return!1
return H.mP(H.cr(t[d],u),null,c,null)},
l:function(a,b,c,d){H.H(b)
H.kS(c)
H.H(d)
if(a==null)return a
if(H.dm(a,b,c,d))return a
throw H.c(H.b0(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cs(b.substring(2))+H.ls(c,0,null),v.mangledGlobalNames)))},
mP:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aN(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aN(a[t],b,c[t],d))return!1
return!0},
qc:function(a,b,c){return a.apply(b,H.cr(J.U(b)["$a"+H.m(c)],H.bW(b)))},
mU:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="Q"||a.name==="J"||a===-1||a===-2||H.mU(u)}return!1},
lu:function(a,b){var u,t
if(a==null)return b==null||b.name==="Q"||b.name==="J"||b===-1||b===-2||H.mU(b)
if(b==null||b===-1||b.name==="Q"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lu(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fA(a,b)}u=J.U(a).constructor
t=H.bW(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aN(u,null,b,null)},
A:function(a,b){if(a!=null&&!H.lu(a,b))throw H.c(H.b0(a,H.kW(b)))
return a},
aN:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="Q"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="Q"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aN(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="J")return!0
if('func' in c)return H.mH(a,b,c,d)
if('func' in a)return c.name==="bI"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aN("type" in a?a.type:null,b,s,d)
else if(H.aN(a,b,s,d))return!0
else{if(!('$i'+"cD" in t.prototype))return!1
r=t.prototype["$a"+"cD"]
q=H.cr(r,u?a.slice(1):null)
return H.aN(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.mP(H.cr(m,u),b,p,d)},
mH:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aN(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aN(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aN(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aN(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pl(h,b,g,d)},
pl:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aN(c[r],d,a[r],b))return!1}return!0},
qd:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
pj:function(a){var u,t,s,r,q,p
u=H.H($.mT.$1(a))
t=$.kM[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kR[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.H($.mO.$2(a,u))
if(u!=null){t=$.kM[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kR[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.kV(s)
$.kM[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.kR[u]=s
return s}if(q==="-"){p=H.kV(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.mX(a,s)
if(q==="*")throw H.c(P.jj(u))
if(v.leafTags[u]===true){p=H.kV(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.mX(a,s)},
mX:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.ly(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kV:function(a){return J.ly(a,!1,null,!!a.$iK)},
pk:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kV(u)
else return J.ly(u,c,null,null)},
pf:function(){if(!0===$.lx)return
$.lx=!0
H.pg()},
pg:function(){var u,t,s,r,q,p,o,n
$.kM=Object.create(null)
$.kR=Object.create(null)
H.pe()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mZ.$1(q)
if(p!=null){o=H.pk(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pe:function(){var u,t,s,r,q,p,o
u=C.a2()
u=H.cl(C.a_,H.cl(C.a4,H.cl(C.E,H.cl(C.E,H.cl(C.a3,H.cl(C.a0,H.cl(C.a1(C.F),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.mT=new H.kO(q)
$.mO=new H.kP(p)
$.mZ=new H.kQ(o)},
cl:function(a,b){return a(b)||b},
nN:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a6("Illegal RegExp pattern ("+String(r)+")",a,null))},
pr:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lz:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fW:function fW(){},
fX:function fX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ij:function ij(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
j6:function j6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i8:function i8(a,b){this.a=a
this.b=b},
hz:function hz(a,b,c){this.a=a
this.b=b
this.c=c},
jk:function jk(a){this.a=a},
kZ:function kZ(a){this.a=a},
fb:function fb(a){this.a=a
this.b=null},
cx:function cx(){},
iO:function iO(){},
iF:function iF(){},
cv:function cv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j8:function j8(a){this.a=a},
fS:function fS(a){this.a=a},
ir:function ir(a){this.a=a},
aS:function aS(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hD:function hD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hE:function hE(a,b){this.a=a
this.$ti=b},
hF:function hF(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
hy:function hy(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cj:function(a){return a},
nU:function(a){return new Int8Array(a)},
bm:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cn(b,a))},
oN:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.p4(a,b,c))
return b},
cK:function cK(){},
bO:function bO(){},
e2:function e2(){},
cL:function cL(){},
e3:function e3(){},
i0:function i0(){},
i1:function i1(){},
i2:function i2(){},
i3:function i3(){},
i4:function i4(){},
e4:function e4(){},
cM:function cM(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
dd:function dd(){},
p6:function(a){return J.lV(a?Object.keys(a):[],null)},
pn:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ly:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fC:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.lx==null){H.pf()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.jj("Return interceptor for "+H.m(t(a,u))))}r=a.constructor
q=r==null?null:r[$.lA()]
if(q!=null)return q
q=H.pj(a)
if(q!=null)return q
if(typeof a=="function")return C.a5
t=Object.getPrototypeOf(a)
if(t==null)return C.L
if(t===Object.prototype)return C.L
if(typeof r=="function"){Object.defineProperty(r,$.lA(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
nM:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.l2(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ag(a,0,4294967295,"length",null))
return J.lV(new Array(a),b)},
lV:function(a,b){return J.hw(H.d(a,[b]))},
hw:function(a){H.kS(a)
a.fixed$length=Array
return a},
U:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dR.prototype
return J.dQ.prototype}if(typeof a=="string")return J.bq.prototype
if(a==null)return J.dS.prototype
if(typeof a=="boolean")return J.hx.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.Q)return a
return J.fC(a)},
p8:function(a){if(typeof a=="number")return J.bL.prototype
if(typeof a=="string")return J.bq.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.Q)return a
return J.fC(a)},
cp:function(a){if(typeof a=="string")return J.bq.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.Q)return a
return J.fC(a)},
fB:function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.Q)return a
return J.fC(a)},
p9:function(a){if(typeof a=="number")return J.bL.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bT.prototype
return a},
pa:function(a){if(typeof a=="number")return J.bL.prototype
if(typeof a=="string")return J.bq.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bT.prototype
return a},
dn:function(a){if(typeof a=="string")return J.bq.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bT.prototype
return a},
af:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.Q)return a
return J.fC(a)},
nk:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.p8(a).q(a,b)},
Y:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).B(a,b)},
lD:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.pa(a).v(a,b)},
nl:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.p9(a).u(a,b)},
lE:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pi(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cp(a).j(a,b)},
l_:function(a,b,c){return J.fB(a).n(a,b,c)},
nm:function(a,b){return J.dn(a).H(a,b)},
fD:function(a,b){return J.af(a).iU(a,b)},
l0:function(a,b,c){return J.af(a).j_(a,b,c)},
nn:function(a,b,c,d){return J.af(a).jX(a,b,c,d)},
lF:function(a,b){return J.af(a).E(a,b)},
no:function(a,b){return J.dn(a).a4(a,b)},
fE:function(a,b){return J.fB(a).N(a,b)},
np:function(a,b,c,d){return J.af(a).kv(a,b,c,d)},
lG:function(a,b){return J.fB(a).J(a,b)},
nq:function(a){return J.af(a).gk8(a)},
fF:function(a){return J.af(a).gcM(a)},
du:function(a){return J.U(a).gL(a)},
bB:function(a){return J.fB(a).gX(a)},
aG:function(a){return J.cp(a).gk(a)},
nr:function(a){return J.af(a).gli(a)},
l1:function(a,b){return J.af(a).b7(a,b)},
lH:function(a){return J.fB(a).l7(a)},
ns:function(a,b){return J.af(a).lc(a,b)},
nt:function(a,b,c){return J.af(a).fH(a,b,c)},
nu:function(a,b,c){return J.dn(a).w(a,b,c)},
nv:function(a){return J.dn(a).ln(a)},
aO:function(a){return J.U(a).i(a)},
a:function a(){},
hx:function hx(){},
dS:function dS(){},
dT:function dT(){},
ic:function ic(){},
bT:function bT(){},
br:function br(){},
aR:function aR(a){this.$ti=a},
la:function la(a){this.$ti=a},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bL:function bL(){},
dR:function dR(){},
dQ:function dQ(){},
bq:function bq(){}},P={
op:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.oX()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.cm(new P.jM(u),1)).observe(t,{childList:true})
return new P.jL(u,t,s)}else if(self.setImmediate!=null)return P.oY()
return P.oZ()},
oq:function(a){self.scheduleImmediate(H.cm(new P.jN(H.n(a,{func:1,ret:-1})),0))},
or:function(a){self.setImmediate(H.cm(new P.jO(H.n(a,{func:1,ret:-1})),0))},
os:function(a){P.lh(C.y,H.n(a,{func:1,ret:-1}))},
lh:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.e.ac(a.a,1000)
return P.oy(u<0?0:u,b)},
mi:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.bh]})
u=C.e.ac(a.a,1000)
return P.oz(u<0?0:u,b)},
oy:function(a,b){var u=new P.fh(!0)
u.hc(a,b)
return u},
oz:function(a,b){var u=new P.fh(!1)
u.hd(a,b)
return u},
ot:function(a,b){var u,t,s
b.a=1
try{a.fk(new P.jY(b),new P.jZ(b),null)}catch(s){u=H.ao(s)
t=H.cq(s)
P.pp(new P.k_(b,u,t))}},
mw:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$iaM")
if(u>=4){t=b.cw()
b.a=a.a
b.c=a.c
P.d9(b,t)}else{t=H.e(b.c,"$ibl")
b.a=2
b.c=a
a.e1(t)}},
d9:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.e(t.c,"$iap")
t=t.b
p=q.a
o=q.b
t.toString
P.kH(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.d9(u.a,b)}t=u.a
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
if(k){H.e(m,"$iap")
t=t.b
p=m.a
o=m.b
t.toString
P.kH(null,null,t,p,o)
return}j=$.a2
if(j!=l)$.a2=l
else j=null
t=b.c
if(t===8)new P.k3(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.k2(s,b,m).$0()}else if((t&2)!==0)new P.k1(u,s,b).$0()
if(j!=null)$.a2=j
t=s.b
if(!!J.U(t).$icD){if(t.a>=4){i=H.e(o.c,"$ibl")
o.c=null
b=o.by(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.mw(t,o)
return}}h=b.b
i=H.e(h.c,"$ibl")
h.c=null
b=h.by(i)
t=s.a
p=s.b
if(!t){H.A(p,H.r(h,0))
h.a=4
h.c=p}else{H.e(p,"$iap")
h.a=8
h.c=p}u.a=h
t=h}},
oS:function(a,b){if(H.fA(a,{func:1,args:[P.Q,P.az]}))return H.n(a,{func:1,ret:null,args:[P.Q,P.az]})
if(H.fA(a,{func:1,args:[P.Q]}))return H.n(a,{func:1,ret:null,args:[P.Q]})
throw H.c(P.l2(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oR:function(){var u,t
for(;u=$.ck,u!=null;){$.dl=null
t=u.b
$.ck=t
if(t==null)$.dk=null
u.a.$0()}},
oW:function(){$.lq=!0
try{P.oR()}finally{$.dl=null
$.lq=!1
if($.ck!=null)$.lB().$1(P.mQ())}},
mL:function(a){var u=new P.eE(H.n(a,{func:1,ret:-1}))
if($.ck==null){$.dk=u
$.ck=u
if(!$.lq)$.lB().$1(P.mQ())}else{$.dk.b=u
$.dk=u}},
oV:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.ck
if(u==null){P.mL(a)
$.dl=$.dk
return}t=new P.eE(a)
s=$.dl
if(s==null){t.b=u
$.dl=t
$.ck=t}else{t.b=s.b
s.b=t
$.dl=t
if(t.b==null)$.dk=t}},
pp:function(a){var u,t
u={func:1,ret:-1}
H.n(a,u)
t=$.a2
if(C.l===t){P.kJ(null,null,C.l,a)
return}t.toString
P.kJ(null,null,t,H.n(t.cG(a),u))},
mh:function(a,b){var u,t
u={func:1,ret:-1}
H.n(b,u)
t=$.a2
if(t===C.l){t.toString
return P.lh(a,b)}return P.lh(a,H.n(t.cG(b),u))},
og:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.bh]}
H.n(b,u)
t=$.a2
if(t===C.l){t.toString
return P.mi(a,b)}s=t.ei(b,P.bh)
$.a2.toString
return P.mi(a,H.n(s,u))},
kH:function(a,b,c,d,e){var u={}
u.a=d
P.oV(new P.kI(u,e))},
mI:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a2
if(t===c)return d.$0()
$.a2=c
u=t
try{t=d.$0()
return t}finally{$.a2=u}},
mJ:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.A(e,g)
t=$.a2
if(t===c)return d.$1(e)
$.a2=c
u=t
try{t=d.$1(e)
return t}finally{$.a2=u}},
oT:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
t=$.a2
if(t===c)return d.$2(e,f)
$.a2=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a2=u}},
kJ:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cG(d):c.k9(d,-1)
P.mL(d)},
jM:function jM(a){this.a=a},
jL:function jL(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function jN(a){this.a=a},
jO:function jO(a){this.a=a},
fh:function fh(a){this.a=a
this.b=null
this.c=0},
ks:function ks(a,b){this.a=a
this.b=b},
kr:function kr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bl:function bl(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aM:function aM(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
jX:function jX(a,b){this.a=a
this.b=b},
k0:function k0(a,b){this.a=a
this.b=b},
jY:function jY(a){this.a=a},
jZ:function jZ(a){this.a=a},
k_:function k_(a,b,c){this.a=a
this.b=b
this.c=c},
k3:function k3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k4:function k4(a){this.a=a},
k2:function k2(a,b,c){this.a=a
this.b=b
this.c=c},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
eE:function eE(a){this.a=a
this.b=null},
iI:function iI(){},
iK:function iK(a,b){this.a=a
this.b=b},
iL:function iL(a,b){this.a=a
this.b=b},
cT:function cT(){},
iJ:function iJ(){},
bh:function bh(){},
ap:function ap(a,b){this.a=a
this.b=b},
kC:function kC(){},
kI:function kI(a,b){this.a=a
this.b=b},
ka:function ka(){},
kc:function kc(a,b,c){this.a=a
this.b=b
this.c=c},
kb:function kb(a,b){this.a=a
this.b=b},
kd:function kd(a,b,c){this.a=a
this.b=b
this.c=c},
nO:function(a,b,c,d,e){return new H.aS([d,e])},
ld:function(a,b){return new H.aS([a,b])},
nQ:function(a){return H.p7(a,new H.aS([null,null]))},
dW:function(a,b,c,d){return new P.k8([d])},
lm:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
ox:function(a,b,c){var u=new P.eT(a,b,[c])
u.c=a.e
return u},
nJ:function(a,b,c){var u,t
if(P.lr(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.f])
t=$.dt()
C.a.h(t,a)
try{P.oQ(a,u)}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}t=P.mf(b,H.mV(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
l9:function(a,b,c){var u,t,s
if(P.lr(a))return b+"..."+c
u=new P.ak(b)
t=$.dt()
C.a.h(t,a)
try{s=u
s.a=P.mf(s.a,a,", ")}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lr:function(a){var u,t
for(u=0;t=$.dt(),u<t.length;++u)if(a===t[u])return!0
return!1},
oQ:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ib",[P.f],"$ab")
u=a.gX(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.D())return
r=H.m(u.gM(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.D()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gM(u);++s
if(!u.D()){if(s<=4){C.a.h(b,H.m(o))
return}q=H.m(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gM(u);++s
for(;u.D();o=n,n=m){m=u.gM(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.m(o)
q=H.m(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
nP:function(a,b,c){var u=P.nO(null,null,null,b,c)
a.J(0,new P.hG(u,b,c))
return u},
lW:function(a,b){var u,t,s
u=P.dW(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.I)(a),++s)u.h(0,H.A(a[s],b))
return u},
lf:function(a){var u,t
u={}
if(P.lr(a))return"{...}"
t=new P.ak("")
try{C.a.h($.dt(),a)
t.a+="{"
u.a=!0
J.lG(a,new P.hK(u,t))
t.a+="}"}finally{u=$.dt()
if(0>=u.length)return H.h(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
k8:function k8(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ch:function ch(a){this.a=a
this.c=this.b=null},
eT:function eT(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hG:function hG(a,b,c){this.a=a
this.b=b
this.c=c},
hH:function hH(){},
w:function w(){},
hJ:function hJ(){},
hK:function hK(a,b){this.a=a
this.b=b},
ah:function ah(){},
kt:function kt(){},
hL:function hL(){},
ey:function ey(a,b){this.a=a
this.$ti=b},
kf:function kf(){},
eU:function eU(){},
fn:function fn(){},
ok:function(a,b,c,d){H.l(b,"$ib",[P.o],"$ab")
if(b instanceof Uint8Array)return P.ol(!1,b,c,d)
return},
ol:function(a,b,c,d){var u,t,s
u=$.nc()
if(u==null)return
t=0===c
if(t&&!0)return P.lk(u,b)
s=b.length
d=P.bu(c,d,s,null,null,null)
if(t&&d===s)return P.lk(u,b)
return P.lk(u,b.subarray(c,d))},
lk:function(a,b){if(P.on(b))return
return P.oo(a,b)},
oo:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ao(t)}return},
on:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
om:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ao(t)}return},
oU:function(a,b,c){var u,t,s
H.l(a,"$ib",[P.o],"$ab")
for(u=J.cp(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.c1()
if((s&127)!==s)return t-b}return c-b},
lJ:function(a,b,c,d,e,f){if(C.e.bt(f,4)!==0)throw H.c(P.a6("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a6("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a6("Invalid base64 padding, more than two '=' characters",a,b))},
fO:function fO(a){this.a=a},
fP:function fP(a){this.a=a},
c2:function c2(){},
bF:function bF(){},
hc:function hc(){},
hs:function hs(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hr:function hr(a){this.a=a},
js:function js(a){this.a=a},
ju:function ju(){},
kA:function kA(a){this.b=this.a=0
this.c=a},
jt:function jt(a){this.a=a},
ky:function ky(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
kz:function kz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dp:function(a,b,c){var u
H.n(b,{func:1,ret:P.o,args:[P.f]})
u=H.o3(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a6(a,null,null))},
nI:function(a){if(a instanceof H.cx)return a.i(0)
return"Instance of '"+H.cc(a)+"'"},
nR:function(a,b,c,d){var u,t
H.A(b,d)
u=J.nM(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.l(u,"$ib",[d],"$ab")},
le:function(a,b,c){var u,t,s
u=[c]
t=H.d([],u)
for(s=J.bB(a);s.D();)C.a.h(t,H.A(s.gM(s),c))
if(b)return t
return H.l(J.hw(t),"$ib",u,"$ab")},
ek:function(a,b,c){var u,t
u=P.o
H.l(a,"$ii",[u],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.l(a,"$iaR",[u],"$aaR")
t=a.length
c=P.bu(b,c,t,null,null,null)
return H.m8(b>0||c<t?C.a.fO(a,b,c):a)}if(!!J.U(a).$icM)return H.o5(a,b,P.bu(b,c,a.length,null,null,null))
return P.oe(a,b,c)},
oe:function(a,b,c){var u,t,s,r
H.l(a,"$ii",[P.o],"$ai")
if(b<0)throw H.c(P.ag(b,0,J.aG(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.ag(c,b,J.aG(a),null,null))
t=J.bB(a)
for(s=0;s<b;++s)if(!t.D())throw H.c(P.ag(b,0,s,null,null))
r=[]
if(u)for(;t.D();)r.push(t.gM(t))
else for(s=b;s<c;++s){if(!t.D())throw H.c(P.ag(c,b,s,null,null))
r.push(t.gM(t))}return H.m8(r)},
o8:function(a,b,c){return new H.hy(a,H.nN(a,!1,!0,!1))},
mf:function(a,b,c){var u=J.bB(b)
if(!u.D())return a
if(c.length===0){do a+=H.m(u.gM(u))
while(u.D())}else{a+=H.m(u.gM(u))
for(;u.D();)a=a+c+H.m(u.gM(u))}return a},
ml:function(){var u=H.nW()
if(u!=null)return P.oj(u,0,null)
throw H.c(P.G("'Uri.base' is not supported"))},
fo:function(a,b,c,d){var u,t,s,r,q,p
H.l(a,"$ib",[P.o],"$ab")
if(c===C.m){u=$.ni().b
if(typeof b!=="string")H.t(H.au(b))
u=u.test(b)}else u=!1
if(u)return b
H.A(b,H.an(c,"c2",0))
t=c.gku().cN(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.cd(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
nC:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nD:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dE:function(a){if(a>=10)return""+a
return"0"+a},
lQ:function(a,b,c,d,e,f){return new P.b7(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
he:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aO(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nI(a)},
dw:function(a){return new P.aP(!1,null,null,a)},
l2:function(a,b,c){return new P.aP(!0,a,b,c)},
eb:function(a,b,c){return new P.ce(null,null,!0,a,b,"Value not in range")},
ag:function(a,b,c,d,e){return new P.ce(b,c,!0,a,d,"Invalid value")},
bu:function(a,b,c,d,e,f){if(typeof a!=="number")return H.F(a)
if(0>a||a>c)throw H.c(P.ag(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.ag(b,a,c,"end",f))
return b}return c},
a_:function(a,b,c,d,e){var u=H.ac(e==null?J.aG(b):e)
return new P.hu(b,u,!0,a,c,"Index out of range")},
G:function(a){return new P.jl(a)},
jj:function(a){return new P.ji(a)},
me:function(a){return new P.cg(a)},
b4:function(a){return new P.fV(a)},
v:function(a){return new P.eM(a)},
a6:function(a,b,c){return new P.hn(a,b,c)},
nS:function(a,b,c,d){var u,t
H.n(b,{func:1,ret:d,args:[P.o]})
u=H.d([],[d])
C.a.sk(u,a)
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
aA:function(a){H.pn(a)},
oj:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.H(a,b+4)^58)*3|C.c.H(a,b)^100|C.c.H(a,b+1)^97|C.c.H(a,b+2)^116|C.c.H(a,b+3)^97)>>>0
if(t===0)return P.mk(b>0||c<c?C.c.w(a,b,c):a,5,null).gfp()
else if(t===32)return P.mk(C.c.w(a,u,c),0,null).gfp()}s=new Array(8)
s.fixed$length=Array
r=H.d(s,[P.o])
C.a.n(r,0,0)
s=b-1
C.a.n(r,1,s)
C.a.n(r,2,s)
C.a.n(r,7,s)
C.a.n(r,3,b)
C.a.n(r,4,b)
C.a.n(r,5,c)
C.a.n(r,6,c)
if(P.mK(a,b,c,0,r)>=14)C.a.n(r,7,c)
q=r[1]
if(typeof q!=="number")return q.lu()
if(q>=b)if(P.mK(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.q()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.a0()
if(typeof m!=="number")return H.F(m)
if(l<m)m=l
if(typeof n!=="number")return n.a0()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.a0()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.a0()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.c.ap(a,"..",n)))i=m>n+2&&C.c.ap(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.ap(a,"file",b)){if(p<=b){if(!C.c.ap(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.c.w(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.c.b4(a,n,m,"/");++m;++l;++c}else{a=C.c.w(a,b,n)+"/"+C.c.w(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.ap(a,"http",b)){if(s&&o+3===n&&C.c.ap(a,"80",o+1))if(b===0&&!0){a=C.c.b4(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.c.w(a,b,o)+C.c.w(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.c.ap(a,"https",b)){if(s&&o+4===n&&C.c.ap(a,"443",o+1))if(b===0&&!0){a=C.c.b4(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.c.w(a,b,o)+C.c.w(a,n,c)
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
if(k){if(b>0||c<a.length){a=C.c.w(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.ki(a,q,p,o,n,m,l,j)}return P.oA(a,b,c,q,p,o,n,m,l,j)},
mn:function(a,b){var u=P.f
return C.a.kA(H.d(a.split("&"),[u]),P.ld(u,u),new P.jq(b),[P.D,P.f,P.f])},
oi:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.jn(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.a4(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.dp(C.c.w(a,q,r),null,null)
if(typeof n!=="number")return n.dq()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.h(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.dp(C.c.w(a,q,c),null,null)
if(typeof n!=="number")return n.dq()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.h(t,p)
t[p]=n
return t},
mm:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.jo(a)
t=new P.jp(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.o])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.a4(a,r)
if(n===58){if(r===b){++r
if(C.c.a4(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaG(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.oi(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.h(j,g)
j[g]=0
d=g+1
if(d>=i)return H.h(j,d)
j[d]=0
g+=2}else{d=C.e.b0(f,8)
if(g<0||g>=i)return H.h(j,g)
j[g]=d
d=g+1
if(d>=i)return H.h(j,d)
j[d]=f&255
g+=2}}return j},
oA:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.oH(a,b,d)
else{if(d===b)P.di(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oI(a,u,e-1):""
s=P.oE(a,e,f,!1)
if(typeof f!=="number")return f.q()
r=f+1
if(typeof g!=="number")return H.F(g)
q=r<g?P.oG(P.dp(C.c.w(a,r,g),new P.ku(a,f),null),j):null}else{t=""
s=null
q=null}p=P.oF(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.a0()
o=h<i?P.ln(a,h+1,i,null):null
return new P.ci(j,t,s,q,p,o,i<c?P.oD(a,i+1,c):null)},
mA:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
di:function(a,b,c){throw H.c(P.a6(c,a,b))},
oG:function(a,b){if(a!=null&&a===P.mA(b))return
return a},
oE:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.a4(a,b)===91){if(typeof c!=="number")return c.u()
u=c-1
if(C.c.a4(a,u)!==93)P.di(a,b,"Missing end `]` to match `[` in host")
P.mm(a,b+1,u)
return C.c.w(a,b,c).toLowerCase()}if(typeof c!=="number")return H.F(c)
t=b
for(;t<c;++t)if(C.c.a4(a,t)===58){P.mm(a,b,c)
return"["+a+"]"}return P.oK(a,b,c)},
oK:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.F(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.a4(a,u)
if(q===37){p=P.mG(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ak("")
n=C.c.w(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.w(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.h(C.J,o)
o=(C.J[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ak("")
if(t<u){s.a+=C.c.w(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.h(C.t,o)
o=(C.t[o]&1<<(q&15))!==0}else o=!1
if(o)P.di(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.a4(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ak("")
n=C.c.w(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mB(q)
u+=l
t=u}}}}if(s==null)return C.c.w(a,b,c)
if(t<c){n=C.c.w(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oH:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mD(C.c.H(a,b)))P.di(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.H(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.h(C.v,r)
r=(C.v[r]&1<<(s&15))!==0}else r=!1
if(!r)P.di(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.w(a,b,c)
return P.oB(t?a.toLowerCase():a)},
oB:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oI:function(a,b,c){return P.dj(a,b,c,C.a8,!1)},
oF:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.dj(a,b,c,C.K,!0):C.r.lx(d,new P.kv(),P.f).m(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.ab(r,"/"))r="/"+r
return P.oJ(r,e,f)},
oJ:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.ab(a,"/"))return P.oL(a,!u||c)
return P.oM(a)},
ln:function(a,b,c,d){var u,t
u={}
H.l(d,"$iD",[P.f,null],"$aD")
if(a!=null){if(d!=null)throw H.c(P.dw("Both query and queryParameters specified"))
return P.dj(a,b,c,C.u,!0)}if(d==null)return
t=new P.ak("")
u.a=""
d.J(0,new P.kw(new P.kx(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
oD:function(a,b,c){return P.dj(a,b,c,C.u,!0)},
mG:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.a4(a,b+1)
s=C.c.a4(a,u)
r=H.kN(t)
q=H.kN(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.e.b0(p,4)
if(u>=8)return H.h(C.w,u)
u=(C.w[u]&1<<(p&15))!==0}else u=!1
if(u)return H.cd(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.w(a,b,b+3).toUpperCase()
return},
mB:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.o])
C.a.n(t,0,37)
C.a.n(t,1,C.c.H("0123456789ABCDEF",a>>>4))
C.a.n(t,2,C.c.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.o])
for(q=0;--r,r>=0;s=128){p=C.e.jg(a,6*r)&63|s
C.a.n(t,q,37)
C.a.n(t,q+1,C.c.H("0123456789ABCDEF",p>>>4))
C.a.n(t,q+2,C.c.H("0123456789ABCDEF",p&15))
q+=3}}return P.ek(t,0,null)},
dj:function(a,b,c,d,e){var u=P.mF(a,b,c,H.l(d,"$ib",[P.o],"$ab"),e)
return u==null?C.c.w(a,b,c):u},
mF:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.l(d,"$ib",[P.o],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.a0()
if(typeof c!=="number")return H.F(c)
if(!(t<c))break
c$0:{q=C.c.a4(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.h(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mG(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.h(C.t,p)
p=(C.t[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.di(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.a4(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mB(q)}}if(r==null)r=new P.ak("")
r.a+=C.c.w(a,s,t)
r.a+=H.m(o)
if(typeof n!=="number")return H.F(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.a0()
if(s<c)r.a+=C.c.w(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mE:function(a){if(C.c.ab(a,"."))return!0
return C.c.f2(a,"/.")!==-1},
oM:function(a){var u,t,s,r,q,p,o
if(!P.mE(a))return a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.Y(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.h(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oL:function(a,b){var u,t,s,r,q,p
if(!P.mE(a))return!b?P.mC(a):a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaG(u)!==".."){if(0>=u.length)return H.h(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.h(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaG(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.h(u,0)
C.a.n(u,0,P.mC(u[0]))}return C.a.m(u,"/")},
mC:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.mD(J.nm(a,0)))for(t=1;t<u;++t){s=C.c.H(a,t)
if(s===58)return C.c.w(a,0,t)+"%3A"+C.c.aA(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.h(C.v,r)
r=(C.v[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
oC:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.H(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dw("Invalid URL encoding"))}}return u},
lo:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.H(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.w(a,b,c)
else q=new H.u(C.c.w(a,b,c))}else{q=H.d([],[P.o])
for(r=a.length,t=b;t<c;++t){s=C.c.H(a,t)
if(s>127)throw H.c(P.dw("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.dw("Truncated URI"))
C.a.h(q,P.oC(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.l(q,"$ib",[P.o],"$ab")
return new P.jt(!1).cN(q)},
mD:function(a){var u=a|32
return 97<=u&&u<=122},
mk:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.d([b-1],[P.o])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.H(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a6("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a6("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.H(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaG(u)
if(q!==44||s!==o+7||!C.c.ap(a,"base64",o+1))throw H.c(P.a6("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.P.kS(0,a,n,t)
else{m=P.mF(a,n,t,C.u,!0)
if(m!=null)a=C.c.b4(a,n,t,m)}return new P.jm(a,u,c)},
oO:function(){var u,t,s,r,q
u=P.nS(22,new P.kE(),!0,P.S)
t=new P.kD(u)
s=new P.kF()
r=new P.kG()
q=H.e(t.$2(0,225),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(14,225),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(15,225),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(1,225),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(2,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(3,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(4,229),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(5,229),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(6,231),"$iS")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(7,231),"$iS")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.e(t.$2(8,8),"$iS"),"]",5)
q=H.e(t.$2(9,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(16,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(17,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(10,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(18,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(19,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(11,235),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(12,236),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.e(t.$2(13,237),"$iS")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.e(t.$2(20,245),"$iS"),"az",21)
q=H.e(t.$2(21,245),"$iS")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
mK:function(a,b,c,d,e){var u,t,s,r,q
H.l(e,"$ib",[P.o],"$ab")
u=$.nj()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.h(u,d)
s=u[d]
r=C.c.H(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.h(s,r)
q=s[r]
d=q&31
C.a.n(e,q>>>5,t)}return d},
R:function R(){},
aq:function aq(a,b){this.a=a
this.b=b},
B:function B(){},
b7:function b7(a){this.a=a},
h8:function h8(){},
h9:function h9(){},
bH:function bH(){},
e6:function e6(){},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ce:function ce(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hu:function hu(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
jl:function jl(a){this.a=a},
ji:function ji(a){this.a=a},
cg:function cg(a){this.a=a},
fV:function fV(a){this.a=a},
ib:function ib(){},
ej:function ej(){},
h1:function h1(a){this.a=a},
eM:function eM(a){this.a=a},
hn:function hn(a,b,c){this.a=a
this.b=b
this.c=c},
bI:function bI(){},
o:function o(){},
i:function i(){},
b8:function b8(){},
b:function b(){},
D:function D(){},
J:function J(){},
a5:function a5(){},
Q:function Q(){},
az:function az(){},
f:function f(){},
ak:function ak(a){this.a=a},
jq:function jq(a){this.a=a},
jn:function jn(a){this.a=a},
jo:function jo(a){this.a=a},
jp:function jp(a,b){this.a=a
this.b=b},
ci:function ci(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
ku:function ku(a,b){this.a=a
this.b=b},
kv:function kv(){},
kx:function kx(a,b){this.a=a
this.b=b},
kw:function kw(a){this.a=a},
jm:function jm(a,b,c){this.a=a
this.b=b
this.c=c},
kE:function kE(){},
kD:function kD(a){this.a=a},
kF:function kF(){},
kG:function kG(){},
ki:function ki(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jS:function jS(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
p2:function(a){var u,t
u=J.U(a)
if(!!u.$ibp){t=u.geu(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.fm(a.data,a.height,a.width)},
p1:function(a){if(a instanceof P.fm)return{data:a.a,height:a.b,width:a.c}
return a},
bv:function(a){var u,t,s,r,q
if(a==null)return
u=P.ld(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r){q=H.H(t[r])
u.n(0,q,a[q])}return u},
p0:function(a,b){var u={}
a.J(0,new P.kK(u))
return u},
kk:function kk(){},
km:function km(a,b){this.a=a
this.b=b},
fm:function fm(a,b,c){this.a=a
this.b=b
this.c=c},
kK:function kK(a){this.a=a},
kl:function kl(a,b){this.a=a
this.b=b},
hj:function hj(a,b){this.a=a
this.b=b},
hk:function hk(){},
hl:function hl(){},
k7:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ow:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k9:function k9(){},
ae:function ae(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ba:function ba(){},
hB:function hB(){},
be:function be(){},
i9:function i9(){},
ih:function ih(){},
cQ:function cQ(){},
iM:function iM(){},
q:function q(){},
bi:function bi(){},
j5:function j5(){},
eR:function eR(){},
eS:function eS(){},
f1:function f1(){},
f2:function f2(){},
fd:function fd(){},
fe:function fe(){},
fk:function fk(){},
fl:function fl(){},
S:function S(){},
fJ:function fJ(){},
fK:function fK(){},
fL:function fL(a){this.a=a},
fM:function fM(){},
bX:function bX(){},
ia:function ia(){},
eF:function eF(){},
dy:function dy(){},
dM:function dM(){},
e9:function e9(){},
ed:function ed(){},
cf:function cf(){},
ee:function ee(){},
en:function en(){},
ew:function ew(){},
iE:function iE(){},
f9:function f9(){},
fa:function fa(){}},W={
lI:function(a){var u=document.createElement("a")
return u},
l4:function(a,b){var u=document.createElement("canvas")
return u},
nG:function(a,b,c){var u,t
u=document.body
t=(u&&C.p).at(u,a,b,c)
t.toString
u=W.E
u=new H.d6(new W.at(t),H.n(new W.hb(),{func:1,ret:P.R,args:[u]}),[u])
return H.e(u.gaT(u),"$iP")},
nH:function(a){H.e(a,"$ik")
return"wheel"},
cB:function(a){var u,t,s
u="element tag unavailable"
try{t=J.nr(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ao(s)}return u},
l8:function(a,b,c){var u=document.createElement("img")
if(b!=null)u.src=b
return u},
k6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
my:function(a,b,c,d){var u,t
u=W.k6(W.k6(W.k6(W.k6(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ab:function(a,b,c,d,e){var u=W.mN(new W.jW(c),W.p)
if(u!=null&&!0)J.nn(a,b,u,!1)
return new W.jV(a,b,u,!1,[e])},
mx:function(a){var u,t
u=W.lI(null)
t=window.location
u=new W.bU(new W.ke(u,t))
u.h1(a)
return u},
ou:function(a,b,c,d){H.e(a,"$iP")
H.H(b)
H.H(c)
H.e(d,"$ibU")
return!0},
ov:function(a,b,c,d){var u,t,s
H.e(a,"$iP")
H.H(b)
H.H(c)
u=H.e(d,"$ibU").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mz:function(){var u,t,s,r,q
u=P.f
t=P.lW(C.A,u)
s=H.r(C.A,0)
r=H.n(new W.kq(),{func:1,ret:u,args:[s]})
q=H.d(["TEMPLATE"],[u])
t=new W.kp(t,P.dW(null,null,null,u),P.dW(null,null,null,u),P.dW(null,null,null,u),null)
t.hb(null,new H.hO(C.A,r,[s,u]),q,null)
return t},
mN:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a2
if(u===C.l)return a
return u.ei(a,b)},
y:function y(){},
fG:function fG(){},
dv:function dv(){},
fH:function fH(){},
cu:function cu(){},
bY:function bY(){},
bC:function bC(){},
c0:function c0(){},
c1:function c1(){},
bD:function bD(){},
cy:function cy(){},
fY:function fY(){},
X:function X(){},
cz:function cz(){},
fZ:function fZ(){},
b5:function b5(){},
b6:function b6(){},
h_:function h_(){},
h0:function h0(){},
h3:function h3(){},
aH:function aH(){},
cA:function cA(){},
h5:function h5(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
h6:function h6(){},
h7:function h7(){},
jQ:function jQ(a,b){this.a=a
this.b=b},
P:function P(){},
hb:function hb(){},
p:function p(){},
k:function k(){},
aI:function aI(){},
cC:function cC(){},
hi:function hi(){},
hm:function hm(){},
aQ:function aQ(){},
dN:function dN(){},
dO:function dO(){},
c6:function c6(){},
dP:function dP(){},
bp:function bp(){},
c7:function c7(){},
b9:function b9(){},
dX:function dX(){},
cI:function cI(){},
hU:function hU(){},
hV:function hV(){},
hW:function hW(a){this.a=a},
hX:function hX(){},
hY:function hY(a){this.a=a},
aT:function aT(){},
hZ:function hZ(){},
a7:function a7(){},
at:function at(a){this.a=a},
E:function E(){},
cN:function cN(){},
aU:function aU(){},
ie:function ie(){},
ea:function ea(){},
ip:function ip(){},
iq:function iq(a){this.a=a},
is:function is(){},
aV:function aV(){},
iC:function iC(){},
aW:function aW(){},
iD:function iD(){},
aX:function aX(){},
iG:function iG(){},
iH:function iH(a){this.a=a},
aJ:function aJ(){},
bg:function bg(){},
el:function el(){},
em:function em(){},
iN:function iN(){},
cV:function cV(){},
aY:function aY(){},
aK:function aK(){},
iP:function iP(){},
iQ:function iQ(){},
j_:function j_(){},
aZ:function aZ(){},
b_:function b_(){},
j3:function j3(){},
j4:function j4(){},
bR:function bR(){},
jr:function jr(){},
jI:function jI(){},
jJ:function jJ(){},
bk:function bk(){},
d7:function d7(){},
d8:function d8(){},
jR:function jR(){},
eH:function eH(){},
k5:function k5(){},
eZ:function eZ(){},
kj:function kj(){},
kn:function kn(){},
jP:function jP(){},
jT:function jT(a){this.a=a},
jU:function jU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ll:function ll(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jV:function jV(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jW:function jW(a){this.a=a},
bU:function bU(a){this.a=a},
C:function C(){},
e5:function e5(a){this.a=a},
i6:function i6(a){this.a=a},
i5:function i5(a,b,c){this.a=a
this.b=b
this.c=c},
f6:function f6(){},
kg:function kg(){},
kh:function kh(){},
kp:function kp(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kq:function kq(){},
ko:function ko(){},
dL:function dL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aD:function aD(){},
ke:function ke(a,b){this.a=a
this.b=b},
fp:function fp(a){this.a=a},
kB:function kB(a){this.a=a},
eG:function eG(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
f_:function f_(){},
f0:function f0(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
de:function de(){},
df:function df(){},
f7:function f7(){},
f8:function f8(){},
fc:function fc(){},
ff:function ff(){},
fg:function fg(){},
dg:function dg(){},
dh:function dh(){},
fi:function fi(){},
fj:function fj(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(){}},O={
l5:function(a){var u=new O.a3([a])
u.bw(a)
return u},
a3:function a3(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cH:function cH(){this.b=this.a=null},
h4:function h4(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e_:function e_(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hP:function hP(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
e1:function e1(){},
hQ:function hQ(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
bb:function bb(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hS:function hS(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hT:function hT(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eg:function eg(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bP:function bP(){}},E={
lT:function(a,b,c,d,e,f){var u=new E.ar()
u.a=d
u.b=!0
u.sh0(0,O.l5(E.ar))
u.y.b8(u.gkT(),u.gkW())
u.z=null
u.Q=null
u.ch=null
u.cx=null
u.cy=null
u.db=null
u.dx=null
u.dy=null
u.fr=null
u.fx=null
u.sc6(0,e)
return u},
o9:function(a,b){var u=new E.ik(a,b)
u.fX(a,b)
return u},
of:function(a,b,c,d,e){var u,t,s,r
u=J.U(a)
if(!!u.$ic0)return E.mg(a,!0,!0,!0,!1)
t=W.l4(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcM(a).h(0,t)
r=E.mg(t,!0,!0,!0,!1)
r.a=a
return r},
mg:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.es()
t=H.e(C.q.dm(a,"webgl2",P.nQ(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$icf")
if(t==null)H.t(P.v("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.o9(t,a)
s=new T.iW(t)
s.b=H.ac((t&&C.b).c2(t,3379))
s.c=H.ac(C.b.c2(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.ez(a)
r=new X.hA()
r.c=new X.aC(!1,!1,!1)
r.siQ(P.dW(null,null,null,P.o))
s.b=r
r=new X.i_(s)
r.f=0
r.r=V.bt()
r.x=V.bt()
r.Q=1
r.ch=1
s.c=r
r=new X.hI(s)
r.r=0
r.x=V.bt()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.j2(s)
r.e=0
r.f=V.bt()
r.r=V.bt()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.shx(H.d([],[[P.cT,P.Q]]))
r=s.z
q=document
p=W.a7
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.ab(q,"contextmenu",H.n(s.gi8(),o),!1,p))
r=s.z
n=W.p
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.ab(a,"focus",H.n(s.gig(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.ab(a,"blur",H.n(s.gi2(),m),!1,n))
r=s.z
l=W.b9
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.ab(q,"keyup",H.n(s.gik(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.ab(q,"keydown",H.n(s.gii(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.ab(a,"mousedown",H.n(s.gip(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ab(a,"mouseup",H.n(s.git(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ab(a,"mousemove",H.n(s.gir(),o),!1,p))
l=s.z
k=W.bk;(l&&C.a).h(l,W.ab(a,H.H(W.nH(a)),H.n(s.giv(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.ab(q,"mousemove",H.n(s.gia(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.ab(q,"mouseup",H.n(s.gic(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.ab(q,"pointerlockchange",H.n(s.gix(),m),!1,n))
n=s.z
m=W.b_
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.ab(a,"touchstart",H.n(s.giN(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ab(a,"touchend",H.n(s.giJ(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ab(a,"touchmove",H.n(s.giL(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.aq(Date.now(),!1)
u.cy=0
u.e3()
return u},
fQ:function fQ(){},
ar:function ar(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ik:function ik(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
il:function il(a){this.a=a},
im:function im(a){this.a=a},
io:function io(a){this.a=a},
es:function es(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iZ:function iZ(a){this.a=a}},Z={
mv:function(a,b,c){var u
H.l(c,"$ib",[P.o],"$ab")
u=a.createBuffer()
C.b.aD(a,b,u)
C.b.ek(a,b,new Int16Array(H.cj(c)),35044)
C.b.aD(a,b,null)
return new Z.eD(b,u)},
aL:function(a){return new Z.b1(a)},
eD:function eD(a,b){this.a=a
this.b=b},
dz:function dz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d5:function d5(a){this.a=a},
bZ:function bZ(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
c8:function c8(a,b,c){this.a=a
this.b=b
this.c=c},
b1:function b1(a){this.a=a}},D={
L:function(){var u=new D.c4()
u.sar(null)
u.saZ(null)
u.c=null
u.d=0
return u},
fT:function fT(){},
c4:function c4(){var _=this
_.d=_.c=_.b=_.a=null},
hf:function hf(a){this.a=a},
hg:function hg(a){this.a=a},
z:function z(a){this.a=a
this.b=null},
bJ:function bJ(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bK:function bK(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
O:function O(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
bG:function bG(){var _=this
_.d=_.c=_.b=_.a=null},
a9:function a9(){},
dV:function dV(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
e8:function e8(){},
ei:function ei(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){}},X={dA:function dA(a,b){this.a=a
this.b=b},dU:function dU(a,b){this.a=a
this.b=b},hA:function hA(){var _=this
_.d=_.c=_.b=_.a=null},dY:function dY(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},hI:function hI(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aC:function aC(a,b,c){this.a=a
this.b=b
this.c=c},bs:function bs(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},i_:function i_(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cJ:function cJ(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},ig:function ig(){},eu:function eu(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},j2:function j2(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ez:function ez(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lU:function(a,b,c,d,e,f,g){var u,t
u=new X.ho()
t=new V.aw(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=V.mb()
u.r=t
return u},
m3:function(a,b,c,d,e){var u,t,s
u=new X.e7()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
if(null!=c){t=u.b
u.b=c
if(c!=null)c.gt().h(0,u.ghe())
s=new D.O("mover",t,u.b,u,[U.aj])
s.b=!0
u.aq(s)}s=u.c
if(!(Math.abs(s-b)<$.V().a)){u.c=b
s=new D.O("fov",s,b,u,[P.B])
s.b=!0
u.aq(s)}s=u.d
if(!(Math.abs(s-d)<$.V().a)){u.d=d
s=new D.O("near",s,d,u,[P.B])
s.b=!0
u.aq(s)}s=u.e
if(!(Math.abs(s-a)<$.V().a)){u.e=a
s=new D.O("far",s,a,u,[P.B])
s.b=!0
u.aq(s)}return u},
fN:function fN(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
c_:function c_(){},
ho:function ho(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ht:function ht(){this.b=this.a=null},
e7:function e7(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cU:function cU(){},
mW:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
u=V.ob("Test 029",!0)
t=W.l4(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.E(u.a,t)
s=[P.f]
u.ee(H.d(["Test of bump distort pass. It renders the scene to a back buffer then ","paints that back buffer texture to the front buffer with a distortion."],s))
u.jW(H.d(["bumpMaps"],s))
u.ee(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=C.z.dn(s,"testCanvas")
if(r==null)H.t(P.v("Failed to find an element with the identifier, testCanvas."))
q=E.of(r,!0,!0,!0,!1)
p=new U.cE()
o=U.aj
p.bw(o)
p.b8(p.ghV(),p.giB())
p.e=null
p.f=V.bN()
p.r=0
n=q.r
m=new U.eB()
l=U.l6()
l.sdl(0,!0)
l.sd4(6.283185307179586)
l.sd6(0)
l.sal(0,0)
l.sd5(100)
l.sZ(0)
l.scO(0.5)
m.b=l
k=m.gaX()
l.gt().h(0,k)
l=U.l6()
l.sdl(0,!0)
l.sd4(6.283185307179586)
l.sd6(0)
l.sal(0,0)
l.sd5(100)
l.sZ(0)
l.scO(0.5)
m.c=l
l.gt().h(0,k)
m.d=null
m.e=!1
m.f=!1
m.r=!1
m.x=2.5
m.y=2.5
m.z=2
m.Q=4
m.cx=!1
m.ch=!1
m.cy=0
m.db=0
m.dx=null
m.dy=0
m.fr=null
m.fx=null
j=new X.aC(!1,!1,!1)
i=m.d
m.d=j
l=[X.aC]
k=new D.O("modifiers",i,j,m,l)
k.b=!0
m.T(k)
k=m.f
if(k!==!1){m.f=!1
k=new D.O("invertX",k,!1,m,[P.R])
k.b=!0
m.T(k)}k=m.r
if(k!==!1){m.r=!1
k=new D.O("invertY",k,!1,m,[P.R])
k.b=!0
m.T(k)}m.bf(n)
p.h(0,m)
n=q.r
m=new U.eA()
k=U.l6()
k.sdl(0,!0)
k.sd4(6.283185307179586)
k.sd6(0)
k.sal(0,0)
k.sd5(100)
k.sZ(0)
k.scO(0.2)
m.b=k
k.gt().h(0,m.gaX())
m.c=null
m.d=!1
m.e=2.5
m.f=2
m.r=4
m.y=!1
m.x=!1
m.z=0
m.Q=null
m.ch=0
m.cx=null
m.cy=null
j=new X.aC(!0,!1,!1)
i=m.c
m.c=j
k=new D.O("modifiers",i,j,m,l)
k.b=!0
m.T(k)
m.bf(n)
p.h(0,m)
n=q.r
m=new U.eC()
m.c=0.01
m.d=0
m.e=0
j=new X.aC(!1,!1,!1)
m.b=j
l=new D.O("modifiers",null,j,m,l)
l.b=!0
m.T(l)
m.bf(n)
p.h(0,m)
p.h(0,U.lO(V.bc(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
h=X.m3(2000,1.0471975511965976,p,0.1,null)
g=new X.fN()
g.a=512
g.b=512
g.c=512
g.d=512
g.e=!0
g.f=!0
g.r=1
g.x=1
g.ch=T.lg(0,null)
g.cx=new V.aw(0,0,0,1)
g.cy=!0
g.db=2000
g.dx=!0
g.dy=V.mb()
g.saw(0,800)
g.sau(0,600)
if(g.cy){g.cy=!1
n=new D.O("clearColor",!0,!1,g,[P.R])
n.b=!0
g.aq(n)}f=E.lT(null,!0,null,"",null,null)
f.sc6(0,F.pu(30,1,15,0.5))
e=new O.e_()
e.shl(O.l5(V.ax))
e.e.b8(e.ghZ(),e.gi0())
n=new O.bb(e,"emission")
n.c=C.d
n.f=new V.a4(0,0,0)
e.f=n
n=new O.bb(e,"ambient")
n.c=C.d
n.f=new V.a4(0,0,0)
e.r=n
n=new O.bb(e,"diffuse")
n.c=C.d
n.f=new V.a4(0,0,0)
e.x=n
n=new O.bb(e,"invDiffuse")
n.c=C.d
n.f=new V.a4(0,0,0)
e.y=n
n=new O.hT(e,"specular")
n.c=C.d
n.f=new V.a4(0,0,0)
n.ch=100
e.z=n
n=new O.hQ(e,"bump")
n.c=C.d
e.Q=n
e.ch=null
n=new O.bb(e,"reflect")
n.c=C.d
n.f=new V.a4(0,0,0)
e.cx=n
n=new O.hS(e,"refract")
n.c=C.d
n.f=new V.a4(0,0,0)
n.ch=1
e.cy=n
n=new O.hP(e,"alpha")
n.c=C.d
n.f=1
e.db=n
n=new D.dV()
n.bw(D.a9)
n.shu(H.d([],[D.bG]))
n.siP(H.d([],[D.e8]))
n.sjh(H.d([],[D.ei]))
n.sjv(H.d([],[D.ep]))
n.sjw(H.d([],[D.eq]))
n.sjx(H.d([],[D.er]))
n.Q=null
n.ch=null
n.ds(n.ghX(),n.giz(),n.giD())
e.dx=n
m=n.Q
if(m==null){m=D.L()
n.Q=m
n=m}else n=m
n.h(0,e.gj2())
n=e.dx
m=n.ch
if(m==null){m=D.L()
n.ch=m
n=m}else n=m
n.h(0,e.gca())
e.dy=null
n=e.dx
d=V.mt()
m=U.lO(V.lZ(V.m6(),d,new V.T(0,-1,-1)))
c=new V.a4(1,1,1)
l=new D.bG()
l.c=new V.a4(1,1,1)
l.a=V.mu()
i=l.b
l.b=m
m.gt().h(0,l.gh3())
o=new D.O("mover",i,l.b,l,[o])
o.b=!0
l.aI(o)
if(!l.c.B(0,c)){i=l.c
l.c=c
o=new D.O("color",i,c,l,[V.a4])
o.b=!0
l.aI(o)}n.h(0,l)
o=e.r
o.saE(0,new V.a4(0,0,1))
o=e.x
o.saE(0,new V.a4(0,1,0))
o=e.z
o.saE(0,new V.a4(1,0,0))
o=e.z
if(o.c===C.d){o.c=C.j
o.c8()
o.cz(100)
n=o.a
n.a=null
n.a7(null)}o.cz(10)
o=q.f
n=o.a
b=n.createTexture()
C.b.a8(n,34067,b)
C.b.aj(n,34067,10242,10497)
C.b.aj(n,34067,10243,10497)
C.b.aj(n,34067,10241,9729)
C.b.aj(n,34067,10240,9729)
C.b.a8(n,34067,null)
a=new T.eo()
a.a=0
a.b=b
a.c=!1
a.d=0
o.aW(a,b,"../resources/maskonaive/posx.jpg",34069,!1,!1)
o.aW(a,b,"../resources/maskonaive/negx.jpg",34070,!1,!1)
o.aW(a,b,"../resources/maskonaive/posy.jpg",34071,!1,!1)
o.aW(a,b,"../resources/maskonaive/negy.jpg",34072,!1,!1)
o.aW(a,b,"../resources/maskonaive/posz.jpg",34073,!1,!1)
o.aW(a,b,"../resources/maskonaive/negz.jpg",34074,!1,!1)
a0=M.lP(null,null,null)
o=new O.eg()
o.b=1.0471975511965976
o.d=new V.a4(1,1,1)
i=o.c
o.c=a
a.gt().h(0,o.gca())
n=new D.O("boxTexture",i,o.c,o,[T.eo])
n.b=!0
o.a7(n)
a0.sb5(o)
a0.sbp(0,g)
a0.sbh(h)
a1=new M.dJ()
a1.sho(0,O.l5(E.ar))
a1.d.b8(a1.gi4(),a1.gi6())
a1.e=null
a1.f=null
a1.r=null
a1.x=null
a2=X.lU(!0,!0,!1,null,2000,null,0)
a1.sbh(null)
a1.sbp(0,a2)
a1.sb5(null)
a1.sbh(h)
a1.sb5(e)
a1.sbp(0,g)
a1.d.h(0,f)
a3=new O.h4()
a3.ser(null)
a3.sem(null)
a4=V.lY()
if(!J.Y(a3.d,a4)){a3.d=a4
a3.ax()}a4=V.lY()
if(!J.Y(a3.e,a4)){a3.e=a4
a3.ax()}a3.sel(null)
a3.ser(g.ch)
a3.sel(V.m_(0.05,0.05,0.05,1))
a5=M.lP(null,null,null)
a5.sb5(a3)
o=M.aE
n=H.d([a0,a1,a5],[o])
m=new M.dB()
m.bw(o)
m.e=!1
m.f=null
m.b8(m.giF(),m.giH())
m.ah(0,n)
o=q.d
if(o!==m){if(o!=null)o.gt().U(0,q.gdw())
q.d=m
m.gt().h(0,q.gdw())
q.dz()}o=new V.iS("bumpMaps",!0,new X.kT(a3,q))
s=C.z.dn(s,"bumpMaps")
o.c=s
if(s==null)H.t("Failed to find bumpMaps for Texture2DGroup")
o.ec(0,"../resources/BumpMap1.png",!0)
o.h(0,"../resources/BumpMap2.png")
o.h(0,"../resources/BumpMap3.png")
o.h(0,"../resources/BumpMap4.png")
o.h(0,"../resources/BumpMap5.png")
o.h(0,"../resources/ScrewBumpMap.png")
o.h(0,"../resources/CtrlPnlBumpMap.png")
s=q.z
if(s==null){s=D.L()
q.z=s}o={func:1,ret:-1,args:[D.z]}
n=H.n(new X.kU(u,a3),o)
if(s.b==null)s.saZ(H.d([],[o]))
s=s.b;(s&&C.a).h(s,n)
V.pq(q)},
kT:function kT(a,b){this.a=a
this.b=b},
kU:function kU(a,b){this.a=a
this.b=b}},V={
pv:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.f.bt(a-b,u)
return(a<0?a+u:a)+b},
Z:function(a,b,c){if(a==null)return C.c.aP("null",c)
return C.c.aP(C.f.fl(Math.abs(a-0)<$.V().a?0:a,b),c+b+1)},
co:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.B],"$ab")
u=H.d([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.I)(a),++r){q=V.Z(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.n(u,p,C.c.aP(u[p],s))}return u},
dq:function(a,b){return C.f.lk(Math.pow(b,C.Z.cY(Math.log(H.p_(a))/Math.log(b))))},
lY:function(){var u=$.lX
if(u==null){u=new V.cG(1,0,0,0,1,0,0,0,1)
$.lX=u}return u},
bN:function(){var u=$.m0
if(u==null){u=V.bc(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.m0=u}return u},
bc:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ax(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
m_:function(a,b,c,d){return V.bc(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
lZ:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.C(0,Math.sqrt(c.F(c)))
t=b.aN(u)
s=t.C(0,Math.sqrt(t.F(t)))
r=u.aN(s)
q=new V.T(a.a,a.b,a.c)
p=s.V(0).F(q)
o=r.V(0).F(q)
n=u.V(0).F(q)
return V.bc(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bt:function(){var u=$.m5
if(u==null){u=new V.aa(0,0)
$.m5=u}return u},
m6:function(){var u=$.cO
if(u==null){u=new V.a8(0,0,0)
$.cO=u}return u},
mb:function(){var u=$.ma
if(u==null){u=V.m9(0,0,1,1)
$.ma=u}return u},
m9:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ec(a,b,c,d)},
d4:function(){var u=$.ms
if(u==null){u=new V.T(0,0,0)
$.ms=u}return u},
mt:function(){var u=$.mr
if(u==null){u=new V.T(0,1,0)
$.mr=u}return u},
mu:function(){var u=$.jv
if(u==null){u=new V.T(0,0,1)
$.jv=u}return u},
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hd:function hd(a){this.a=a},
cG:function cG(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ax:function ax(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aa:function aa(a,b){this.a=a
this.b=b},
a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ec:function ec(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
W:function W(a,b){this.a=a
this.b=b},
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
a0:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.v("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.H(a,0)
t=C.c.H(b,0)
s=new V.ii()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
x:function(a){var u=new V.it()
u.fY(a)
return u},
j1:function(){var u,t
u=new V.j0()
t=P.f
u.sji(new H.aS([t,V.cS]))
u.sjn(new H.aS([t,V.cW]))
u.c=null
return u},
bn:function bn(){},
aB:function aB(){},
dZ:function dZ(){},
ay:function ay(){this.a=null},
ii:function ii(){this.b=this.a=null},
it:function it(){this.a=null},
cS:function cS(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
et:function et(a,b,c){this.a=a
this.b=b
this.c=c},
cW:function cW(a,b){this.a=a
this.b=b
this.c=null},
j0:function j0(){this.c=this.b=this.a=null},
cX:function cX(a){this.b=a
this.a=this.c=null},
pq:function(a){P.og(C.U,new V.kX(a))},
ob:function(a,b){var u=new V.ix()
u.fZ(a,!0)
return u},
bE:function bE(){},
kX:function kX(a){this.a=a},
h2:function h2(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hp:function hp(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hq:function hq(a){var _=this
_.a=a
_.d=_.c=_.b=null},
id:function id(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ix:function ix(){this.b=this.a=null},
iz:function iz(a){this.a=a},
iy:function iy(a){this.a=a},
iA:function iA(a){this.a=a},
iS:function iS(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.d=c},
iU:function iU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iT:function iT(){}},U={
l6:function(){var u=new U.fU()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
lO:function(a){var u=new U.dC()
u.a=a
return u},
fU:function fU(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dC:function dC(){this.b=this.a=null},
cE:function cE(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
aj:function aj(){},
eA:function eA(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eB:function eB(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eC:function eC(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
lP:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=new M.dD()
u.sbh(a)
u.sbp(0,b)
u.sb5(c)
t=E.lT(null,!0,null,"",null,null)
s=F.md()
r=s.a
q=new V.T(-1,-1,1)
q=q.C(0,Math.sqrt(q.F(q)))
p=r.bB(new V.bf(1,2,4,6),new V.aw(1,0,0,1),new V.a8(-1,-1,0),new V.aa(0,1),q,null)
r=s.a
q=new V.T(1,-1,1)
q=q.C(0,Math.sqrt(q.F(q)))
o=r.bB(new V.bf(0,3,4,6),new V.aw(0,0,1,1),new V.a8(1,-1,0),new V.aa(1,1),q,null)
r=s.a
q=new V.T(1,1,1)
q=q.C(0,Math.sqrt(q.F(q)))
n=r.bB(new V.bf(0,2,5,6),new V.aw(0,1,0,1),new V.a8(1,1,0),new V.aa(1,0),q,null)
r=s.a
q=V.bt()
m=new V.T(-1,1,1)
m=m.C(0,Math.sqrt(m.F(m)))
l=r.bB(new V.bf(0,2,4,7),new V.aw(1,1,0,1),new V.a8(-1,1,0),q,m,null)
s.d.jY(H.d([p,o,n,l],[F.as]))
s.aM()
t.sc6(0,s)
u.d=t
u.e=null
return u},
dB:function dB(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},
dD:function dD(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dJ:function dJ(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aE:function aE(){}},A={
nT:function(a,b){var u,t
u=a.ay
t=new A.e0(b,u)
t.c9(b,u)
t.fW(a,b)
return t},
li:function(a,b,c,d,e){var u=new A.ja(a,b,c,e)
u.f=d
u.sjy(P.nR(d,0,!1,P.o))
return u},
dx:function dx(a,b,c){this.a=a
this.b=b
this.c=c},
fI:function fI(a){this.a=a},
dF:function dF(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
e0:function e0(a,b){var _=this
_.bF=_.eA=_.bE=_.ay=_.aF=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.eQ=_.cS=_.eP=_.bS=_.eO=_.eN=_.bR=_.bQ=_.eM=_.eL=_.bP=_.bO=_.bN=_.eK=_.eJ=_.bM=_.eI=_.eH=_.bL=_.eG=_.eF=_.bK=_.bJ=_.eE=_.eD=_.bI=_.bH=_.eC=_.eB=_.bG=null
_.cX=_.eU=_.cW=_.eT=_.cV=_.eS=_.cU=_.eR=_.cT=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hR:function hR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aF=b3
_.ay=b4
_.bE=b5},
cY:function cY(a,b,c){this.a=a
this.b=b
this.c=c},
d0:function d0(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cZ:function cZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
d1:function d1(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j},
d_:function d_(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j},
d2:function d2(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.cy=n},
cR:function cR(){},
c3:function c3(a,b){this.a=a
this.b=b},
eh:function eh(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ev:function ev(){},
jg:function jg(a){this.a=a},
M:function M(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jc:function jc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jd:function jd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jf:function jf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ja:function ja(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
a1:function a1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jb:function jb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
N:function N(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
je:function je(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jh:function jh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bS:function bS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
pu:function(a,b,c,d){return F.p3(c,a,d,b,new F.kY())},
p3:function(a,b,c,d,e){var u=F.ps(a,b,new F.kL(H.n(e,{func:1,ret:V.a8,args:[P.B]}),d,b,c),null)
if(u==null)return
u.aM()
u.kR(new F.jC(),new F.i7())
return u},
ps:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,{func:1,ret:-1,args:[F.as,P.B,P.B]})
if(a<1)return
if(b<1)return
u=F.md()
t=H.d([],[F.as])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.jw(null,null,new V.aw(p,0,0,1),null,null,new V.aa(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.es(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.jw(null,null,new V.aw(j,i,h,1),null,null,new V.aa(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.es(d))}}u.d.jZ(a+1,b+1,t)
return u},
dK:function(a,b,c){var u,t
u=new F.ad()
t=a.a
if(t==null)H.t(P.v("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.v("May not create a face with vertices attached to different shapes."))
u.j9(a)
u.ja(b)
u.jb(c)
C.a.h(u.a.a.d.b,u)
u.a.a.an()
return u},
md:function(){var u,t
u=new F.ef()
t=new F.jx(u)
t.b=!1
t.sjz(H.d([],[F.as]))
u.a=t
t=new F.iw(u)
t.scu(H.d([],[F.ca]))
u.b=t
t=new F.iv(u)
t.shK(H.d([],[F.bM]))
u.c=t
t=new F.iu(u)
t.shy(H.d([],[F.ad]))
u.d=t
u.e=null
return u},
jw:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.as()
t=new F.jF(u)
t.scu(H.d([],[F.ca]))
u.b=t
t=new F.jB(u)
s=[F.bM]
t.shL(H.d([],s))
t.shM(H.d([],s))
u.c=t
t=new F.jy(u)
s=[F.ad]
t.shz(H.d([],s))
t.shA(H.d([],s))
t.shB(H.d([],s))
u.d=t
h=$.nd()
u.e=0
t=$.aF()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bz().a)!==0?e:null
u.x=(s&$.by().a)!==0?b:null
u.y=(s&$.b2().a)!==0?f:null
u.z=(s&$.bA().a)!==0?g:null
u.Q=(s&$.ne().a)!==0?c:null
u.ch=(s&$.ct().a)!==0?i:0
u.cx=(s&$.bx().a)!==0?a:null
return u},
kY:function kY(){},
kL:function kL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ad:function ad(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hh:function hh(){},
iB:function iB(){},
bM:function bM(){},
hC:function hC(){},
j9:function j9(){},
ca:function ca(){},
ef:function ef(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iu:function iu(a){this.a=a
this.b=null},
iv:function iv(a){this.a=a
this.b=null},
iw:function iw(a){this.a=a
this.b=null},
as:function as(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jH:function jH(a){this.a=a},
jG:function jG(a){this.a=a},
jx:function jx(a){this.a=a
this.c=this.b=null},
jy:function jy(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jz:function jz(a,b){this.a=a
this.b=b},
jA:function jA(a,b){this.a=a
this.b=b},
jB:function jB(a){this.a=a
this.c=this.b=null},
jD:function jD(){},
jC:function jC(){},
jE:function jE(){},
i7:function i7(){},
jF:function jF(a){this.a=a
this.b=null}},T={
lg:function(a,b){var u=new T.iV()
u.a=a
u.b=b
u.c=!1
u.d=!1
u.e=0
u.f=0
u.r=0
u.x=0
return u},
bQ:function bQ(){},
iR:function iR(){},
iV:function iV(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eo:function eo(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iW:function iW(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
iY:function iY(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iX:function iX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.lb.prototype={}
J.a.prototype={
B:function(a,b){return a===b},
gL:function(a){return H.cP(a)},
i:function(a){return"Instance of '"+H.cc(a)+"'"}}
J.hx.prototype={
i:function(a){return String(a)},
gL:function(a){return a?519018:218159},
$iR:1}
J.dS.prototype={
B:function(a,b){return null==b},
i:function(a){return"null"},
gL:function(a){return 0},
$iJ:1}
J.dT.prototype={
gL:function(a){return 0},
i:function(a){return String(a)}}
J.ic.prototype={}
J.bT.prototype={}
J.br.prototype={
i:function(a){var u=a[$.n1()]
if(u==null)return this.fR(a)
return"JavaScript function for "+H.m(J.aO(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibI:1}
J.aR.prototype={
h:function(a,b){H.A(b,H.r(a,0))
if(!!a.fixed$length)H.t(P.G("add"))
a.push(b)},
l8:function(a,b){var u
if(!!a.fixed$length)H.t(P.G("removeAt"))
u=a.length
if(b>=u)throw H.c(P.eb(b,null,null))
return a.splice(b,1)[0]},
U:function(a,b){var u
if(!!a.fixed$length)H.t(P.G("remove"))
for(u=0;u<a.length;++u)if(J.Y(a[u],b)){a.splice(u,1)
return!0}return!1},
ah:function(a,b){var u,t
H.l(b,"$ii",[H.r(a,0)],"$ai")
if(!!a.fixed$length)H.t(P.G("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.I)(b),++t)a.push(b[t])},
J:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.b4(a))}},
m:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.n(u,t,H.m(a[t]))
return u.join(b)},
kK:function(a){return this.m(a,"")},
kA:function(a,b,c,d){var u,t,s
H.A(b,d)
H.n(c,{func:1,ret:d,args:[d,H.r(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.b4(a))}return t},
kz:function(a,b,c){var u,t,s
H.n(b,{func:1,ret:P.R,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.c(P.b4(a))}throw H.c(H.hv())},
ky:function(a,b){return this.kz(a,b,null)},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
fO:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ag(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ag(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.r(a,0)])
return H.d(a.slice(b,c),[H.r(a,0)])},
gkx:function(a){if(a.length>0)return a[0]
throw H.c(H.hv())},
gaG:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hv())},
fK:function(a,b,c,d,e){var u,t,s
u=H.r(a,0)
H.l(d,"$ii",[u],"$ai")
if(!!a.immutable$list)H.t(P.G("setRange"))
P.bu(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.l(d,"$ib",[u],"$ab")
u=J.cp(d)
if(e+t>u.gk(d))throw H.c(H.nK())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
bu:function(a,b,c,d){return this.fK(a,b,c,d,0)},
ef:function(a,b){var u,t
H.n(b,{func:1,ret:P.R,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.c(P.b4(a))}return!1},
a_:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Y(a[u],b))return!0
return!1},
i:function(a){return P.l9(a,"[","]")},
gX:function(a){return new J.av(a,a.length,0,[H.r(a,0)])},
gL:function(a){return H.cP(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.t(P.G("set length"))
if(b<0)throw H.c(P.ag(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cn(a,b))
return a[b]},
n:function(a,b,c){H.A(c,H.r(a,0))
if(!!a.immutable$list)H.t(P.G("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cn(a,b))
a[b]=c},
q:function(a,b){var u,t
u=[H.r(a,0)]
H.l(b,"$ib",u,"$ab")
t=C.e.q(a.length,b.gk(b))
u=H.d([],u)
this.sk(u,t)
this.bu(u,0,a.length,a)
this.bu(u,a.length,t,b)
return u},
$ii:1,
$ib:1}
J.la.prototype={}
J.av.prototype={
gM:function(a){return this.d},
D:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.I(u))
s=this.c
if(s>=t){this.sdO(null)
return!1}this.sdO(u[s]);++this.c
return!0},
sdO:function(a){this.d=H.A(a,H.r(this,0))},
$ib8:1}
J.bL.prototype={
lk:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.G(""+a+".toInt()"))},
cY:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.G(""+a+".floor()"))},
a6:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.G(""+a+".round()"))},
fl:function(a,b){var u,t
if(b>20)throw H.c(P.ag(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
br:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ag(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.a4(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.G("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.h(t,1)
u=t[1]
if(3>=s)return H.h(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.v("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gL:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
q:function(a,b){if(typeof b!=="number")throw H.c(H.au(b))
return a+b},
u:function(a,b){if(typeof b!=="number")throw H.c(H.au(b))
return a-b},
v:function(a,b){if(typeof b!=="number")throw H.c(H.au(b))
return a*b},
bt:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fV:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.e8(a,b)},
ac:function(a,b){return(a|0)===a?a/b|0:this.e8(a,b)},
e8:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.G("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
b0:function(a,b){var u
if(a>0)u=this.e7(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
jg:function(a,b){if(b<0)throw H.c(H.au(b))
return this.e7(a,b)},
e7:function(a,b){return b>31?0:a>>>b},
$iB:1,
$ia5:1}
J.dR.prototype={$io:1}
J.dQ.prototype={}
J.bq.prototype={
a4:function(a,b){if(b<0)throw H.c(H.cn(a,b))
if(b>=a.length)H.t(H.cn(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.c(H.cn(a,b))
return a.charCodeAt(b)},
q:function(a,b){if(typeof b!=="string")throw H.c(P.l2(b,null,null))
return a+b},
b4:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.au(b))
c=P.bu(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ap:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.au(c))
if(typeof c!=="number")return c.a0()
if(c<0||c>a.length)throw H.c(P.ag(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
ab:function(a,b){return this.ap(a,b,0)},
w:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.au(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.a0()
if(b<0)throw H.c(P.eb(b,null,null))
if(b>c)throw H.c(P.eb(b,null,null))
if(c>a.length)throw H.c(P.eb(c,null,null))
return a.substring(b,c)},
aA:function(a,b){return this.w(a,b,null)},
ln:function(a){return a.toLowerCase()},
v:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.R)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kZ:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.v(c,u)+a},
aP:function(a,b){return this.kZ(a,b," ")},
f3:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ag(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
f2:function(a,b){return this.f3(a,b,0)},
i:function(a){return a},
gL:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$im2:1,
$if:1}
H.u.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.c.a4(this.a,b)},
$ad3:function(){return[P.o]},
$aw:function(){return[P.o]},
$ai:function(){return[P.o]},
$ab:function(){return[P.o]}}
H.ha.prototype={}
H.c9.prototype={
gX:function(a){return new H.cF(this,this.gk(this),0,[H.an(this,"c9",0)])},
c0:function(a,b){return this.fQ(0,H.n(b,{func:1,ret:P.R,args:[H.an(this,"c9",0)]}))}}
H.cF.prototype={
gM:function(a){return this.d},
D:function(){var u,t,s,r
u=this.a
t=J.cp(u)
s=t.gk(u)
if(this.b!==s)throw H.c(P.b4(u))
r=this.c
if(r>=s){this.sba(null)
return!1}this.sba(t.N(u,r));++this.c
return!0},
sba:function(a){this.d=H.A(a,H.r(this,0))},
$ib8:1}
H.hM.prototype={
gX:function(a){return new H.hN(J.bB(this.a),this.b,this.$ti)},
gk:function(a){return J.aG(this.a)},
N:function(a,b){return this.b.$1(J.fE(this.a,b))},
$ai:function(a,b){return[b]}}
H.hN.prototype={
D:function(){var u=this.b
if(u.D()){this.sba(this.c.$1(u.gM(u)))
return!0}this.sba(null)
return!1},
gM:function(a){return this.a},
sba:function(a){this.a=H.A(a,H.r(this,1))},
$ab8:function(a,b){return[b]}}
H.hO.prototype={
gk:function(a){return J.aG(this.a)},
N:function(a,b){return this.b.$1(J.fE(this.a,b))},
$ac9:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.d6.prototype={
gX:function(a){return new H.jK(J.bB(this.a),this.b,this.$ti)}}
H.jK.prototype={
D:function(){var u,t
for(u=this.a,t=this.b;u.D();)if(t.$1(u.gM(u)))return!0
return!1},
gM:function(a){var u=this.a
return u.gM(u)}}
H.c5.prototype={}
H.d3.prototype={
n:function(a,b,c){H.A(c,H.an(this,"d3",0))
throw H.c(P.G("Cannot modify an unmodifiable list"))}}
H.ex.prototype={}
H.fW.prototype={
i:function(a){return P.lf(this)},
n:function(a,b,c){H.A(b,H.r(this,0))
H.A(c,H.r(this,1))
return H.nB()},
$iD:1}
H.fX.prototype={
gk:function(a){return this.a},
bC:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bC(0,b))return
return this.dP(b)},
dP:function(a){return this.b[H.H(a)]},
J:function(a,b){var u,t,s,r,q
u=H.r(this,1)
H.n(b,{func:1,ret:-1,args:[H.r(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.A(this.dP(q),u))}}}
H.ij.prototype={}
H.j6.prototype={
av:function(a){var u,t,s
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
H.i8.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hz.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.m(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.m(this.a)+")"}}
H.jk.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kZ.prototype={
$1:function(a){if(!!J.U(a).$ibH)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:18}
H.fb.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iaz:1}
H.cx.prototype={
i:function(a){return"Closure '"+H.cc(this).trim()+"'"},
$ibI:1,
glt:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iO.prototype={}
H.iF.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cs(u)+"'"}}
H.cv.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cv))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gL:function(a){var u,t
u=this.c
if(u==null)t=H.cP(this.a)
else t=typeof u!=="object"?J.du(u):H.cP(u)
return(t^H.cP(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.cc(u)+"'")}}
H.j8.prototype={
i:function(a){return this.a}}
H.fS.prototype={
i:function(a){return this.a}}
H.ir.prototype={
i:function(a){return"RuntimeError: "+H.m(this.a)}}
H.aS.prototype={
gk:function(a){return this.a},
gkJ:function(a){return this.a===0},
gad:function(a){return new H.hE(this,[H.r(this,0)])},
bC:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.dL(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.dL(t,b)}else return this.kG(b)},
kG:function(a){var u=this.d
if(u==null)return!1
return this.d1(this.ci(u,this.d0(a)),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bx(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bx(r,b)
s=t==null?null:t.b
return s}else return this.kH(b)},
kH:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.ci(u,this.d0(a))
s=this.d1(t,a)
if(s<0)return
return t[s].b},
n:function(a,b,c){var u,t
H.A(b,H.r(this,0))
H.A(c,H.r(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.cs()
this.b=u}this.dC(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.cs()
this.c=t}this.dC(t,b,c)}else this.kI(b,c)},
kI:function(a,b){var u,t,s,r
H.A(a,H.r(this,0))
H.A(b,H.r(this,1))
u=this.d
if(u==null){u=this.cs()
this.d=u}t=this.d0(a)
s=this.ci(u,t)
if(s==null)this.cA(u,t,[this.ct(a,b)])
else{r=this.d1(s,a)
if(r>=0)s[r].b=b
else s.push(this.ct(a,b))}},
J:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.b4(this))
u=u.c}},
dC:function(a,b,c){var u
H.A(b,H.r(this,0))
H.A(c,H.r(this,1))
u=this.bx(a,b)
if(u==null)this.cA(a,b,this.ct(b,c))
else u.b=c},
hS:function(){this.r=this.r+1&67108863},
ct:function(a,b){var u,t
u=new H.hD(H.A(a,H.r(this,0)),H.A(b,H.r(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.hS()
return u},
d0:function(a){return J.du(a)&0x3ffffff},
d1:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Y(a[t].a,b))return t
return-1},
i:function(a){return P.lf(this)},
bx:function(a,b){return a[b]},
ci:function(a,b){return a[b]},
cA:function(a,b,c){a[b]=c},
ht:function(a,b){delete a[b]},
dL:function(a,b){return this.bx(a,b)!=null},
cs:function(){var u=Object.create(null)
this.cA(u,"<non-identifier-key>",u)
this.ht(u,"<non-identifier-key>")
return u}}
H.hD.prototype={}
H.hE.prototype={
gk:function(a){return this.a.a},
gX:function(a){var u,t
u=this.a
t=new H.hF(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hF.prototype={
gM:function(a){return this.d},
D:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.b4(u))
else{u=this.c
if(u==null){this.sdB(null)
return!1}else{this.sdB(u.a)
this.c=this.c.c
return!0}}},
sdB:function(a){this.d=H.A(a,H.r(this,0))},
$ib8:1}
H.kO.prototype={
$1:function(a){return this.a(a)},
$S:18}
H.kP.prototype={
$2:function(a,b){return this.a(a,b)},
$S:35}
H.kQ.prototype={
$1:function(a){return this.a(H.H(a))},
$S:33}
H.hy.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$im2:1,
$io7:1}
H.cK.prototype={$icK:1}
H.bO.prototype={$ibO:1,$ioh:1}
H.e2.prototype={
gk:function(a){return a.length},
$iK:1,
$aK:function(){}}
H.cL.prototype={
j:function(a,b){H.bm(b,a,a.length)
return a[b]},
n:function(a,b,c){H.p5(c)
H.bm(b,a,a.length)
a[b]=c},
$ac5:function(){return[P.B]},
$aw:function(){return[P.B]},
$ii:1,
$ai:function(){return[P.B]},
$ib:1,
$ab:function(){return[P.B]}}
H.e3.prototype={
n:function(a,b,c){H.ac(c)
H.bm(b,a,a.length)
a[b]=c},
$ac5:function(){return[P.o]},
$aw:function(){return[P.o]},
$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]}}
H.i0.prototype={
j:function(a,b){H.bm(b,a,a.length)
return a[b]}}
H.i1.prototype={
j:function(a,b){H.bm(b,a,a.length)
return a[b]}}
H.i2.prototype={
j:function(a,b){H.bm(b,a,a.length)
return a[b]}}
H.i3.prototype={
j:function(a,b){H.bm(b,a,a.length)
return a[b]}}
H.i4.prototype={
j:function(a,b){H.bm(b,a,a.length)
return a[b]}}
H.e4.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bm(b,a,a.length)
return a[b]},
$ipQ:1}
H.cM.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bm(b,a,a.length)
return a[b]},
$icM:1,
$iS:1}
H.da.prototype={}
H.db.prototype={}
H.dc.prototype={}
H.dd.prototype={}
P.jM.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:29}
P.jL.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:42}
P.jN.prototype={
$0:function(){this.a.$0()},
$S:2}
P.jO.prototype={
$0:function(){this.a.$0()},
$S:2}
P.fh.prototype={
hc:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.cm(new P.ks(this,b),0),a)
else throw H.c(P.G("`setTimeout()` not found."))},
hd:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.cm(new P.kr(this,a,Date.now(),b),0),a)
else throw H.c(P.G("Periodic timer."))},
$ibh:1}
P.ks.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.kr.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.e.fV(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.bl.prototype={
kP:function(a){if(this.c!==6)return!0
return this.b.b.di(H.n(this.d,{func:1,ret:P.R,args:[P.Q]}),a.a,P.R,P.Q)},
kF:function(a){var u,t,s,r
u=this.e
t=P.Q
s={futureOr:1,type:H.r(this,1)}
r=this.b.b
if(H.fA(u,{func:1,args:[P.Q,P.az]}))return H.lw(r.lf(u,a.a,a.b,null,t,P.az),s)
else return H.lw(r.di(H.n(u,{func:1,args:[P.Q]}),a.a,null,t),s)}}
P.aM.prototype={
fk:function(a,b,c){var u,t,s,r
u=H.r(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.a2
if(t!==C.l){t.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.oS(b,t)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aM(0,$.a2,[c])
r=b==null?1:3
this.dD(new P.bl(s,r,a,b,[u,c]))
return s},
lj:function(a,b){return this.fk(a,null,b)},
dD:function(a){var u,t
u=this.a
if(u<=1){a.a=H.e(this.c,"$ibl")
this.c=a}else{if(u===2){t=H.e(this.c,"$iaM")
u=t.a
if(u<4){t.dD(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.kJ(null,null,u,H.n(new P.jX(this,a),{func:1,ret:-1}))}},
e1:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.e(this.c,"$ibl")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.e(this.c,"$iaM")
t=p.a
if(t<4){p.e1(a)
return}this.a=t
this.c=p.c}u.a=this.by(a)
t=this.b
t.toString
P.kJ(null,null,t,H.n(new P.k0(u,this),{func:1,ret:-1}))}},
cw:function(){var u=H.e(this.c,"$ibl")
this.c=null
return this.by(u)},
by:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dH:function(a){var u,t,s
u=H.r(this,0)
H.lw(a,{futureOr:1,type:u})
t=this.$ti
if(H.dm(a,"$icD",t,"$acD"))if(H.dm(a,"$iaM",t,null))P.mw(a,this)
else P.ot(a,this)
else{s=this.cw()
H.A(a,u)
this.a=4
this.c=a
P.d9(this,s)}},
dI:function(a,b){var u
H.e(b,"$iaz")
u=this.cw()
this.a=8
this.c=new P.ap(a,b)
P.d9(this,u)},
$icD:1}
P.jX.prototype={
$0:function(){P.d9(this.a,this.b)},
$S:2}
P.k0.prototype={
$0:function(){P.d9(this.b,this.a.a)},
$S:2}
P.jY.prototype={
$1:function(a){var u=this.a
u.a=0
u.dH(a)},
$S:29}
P.jZ.prototype={
$2:function(a,b){H.e(b,"$iaz")
this.a.dI(a,b)},
$1:function(a){return this.$2(a,null)},
$S:31}
P.k_.prototype={
$0:function(){this.a.dI(this.b,this.c)},
$S:2}
P.k3.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.fh(H.n(r.d,{func:1}),null)}catch(q){t=H.ao(q)
s=H.cq(q)
if(this.d){r=H.e(this.a.a.c,"$iap").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.e(this.a.a.c,"$iap")
else p.b=new P.ap(t,s)
p.a=!0
return}if(!!J.U(u).$icD){if(u instanceof P.aM&&u.a>=4){if(u.a===8){r=this.b
r.b=H.e(u.c,"$iap")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.lj(new P.k4(o),null)
r.a=!1}},
$S:3}
P.k4.prototype={
$1:function(a){return this.a},
$S:34}
P.k2.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.r(s,0)
q=H.A(this.c,r)
p=H.r(s,1)
this.a.b=s.b.b.di(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ao(o)
t=H.cq(o)
s=this.a
s.b=new P.ap(u,t)
s.a=!0}},
$S:3}
P.k1.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.e(this.a.a.c,"$iap")
r=this.c
if(r.kP(u)&&r.e!=null){q=this.b
q.b=r.kF(u)
q.a=!1}}catch(p){t=H.ao(p)
s=H.cq(p)
r=H.e(this.a.a.c,"$iap")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ap(t,s)
n.a=!0}},
$S:3}
P.eE.prototype={}
P.iI.prototype={
gk:function(a){var u,t,s,r
u={}
t=new P.aM(0,$.a2,[P.o])
u.a=0
s=H.r(this,0)
r=H.n(new P.iK(u,this),{func:1,ret:-1,args:[s]})
H.n(new P.iL(u,t),{func:1,ret:-1})
W.ab(this.a,this.b,r,!1,s)
return t}}
P.iK.prototype={
$1:function(a){H.A(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.r(this.b,0)]}}}
P.iL.prototype={
$0:function(){this.b.dH(this.a.a)},
$S:2}
P.cT.prototype={}
P.iJ.prototype={}
P.bh.prototype={}
P.ap.prototype={
i:function(a){return H.m(this.a)},
$ibH:1}
P.kC.prototype={$iq4:1}
P.kI.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.e6()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:2}
P.ka.prototype={
lg:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
try{if(C.l===$.a2){a.$0()
return}P.mI(null,null,this,a,-1)}catch(s){u=H.ao(s)
t=H.cq(s)
P.kH(null,null,this,u,H.e(t,"$iaz"))}},
lh:function(a,b,c){var u,t,s
H.n(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.l===$.a2){a.$1(b)
return}P.mJ(null,null,this,a,b,-1,c)}catch(s){u=H.ao(s)
t=H.cq(s)
P.kH(null,null,this,u,H.e(t,"$iaz"))}},
k9:function(a,b){return new P.kc(this,H.n(a,{func:1,ret:b}),b)},
cG:function(a){return new P.kb(this,H.n(a,{func:1,ret:-1}))},
ei:function(a,b){return new P.kd(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
fh:function(a,b){H.n(a,{func:1,ret:b})
if($.a2===C.l)return a.$0()
return P.mI(null,null,this,a,b)},
di:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.a2===C.l)return a.$1(b)
return P.mJ(null,null,this,a,b,c,d)},
lf:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.a2===C.l)return a.$2(b,c)
return P.oT(null,null,this,a,b,c,d,e,f)}}
P.kc.prototype={
$0:function(){return this.a.fh(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.kb.prototype={
$0:function(){return this.a.lg(this.b)},
$S:3}
P.kd.prototype={
$1:function(a){var u=this.c
return this.a.lh(this.b,H.A(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.k8.prototype={
gX:function(a){var u=new P.eT(this,this.r,this.$ti)
u.c=this.e
return u},
gk:function(a){return this.a},
a_:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.e(u[b],"$ich")!=null}else{t=this.hp(b)
return t}},
hp:function(a){var u=this.d
if(u==null)return!1
return this.cf(this.dQ(u,a),a)>=0},
h:function(a,b){var u,t
H.A(b,H.r(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.lm()
this.b=u}return this.dE(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.lm()
this.c=t}return this.dE(t,b)}else return this.hg(0,b)},
hg:function(a,b){var u,t,s
H.A(b,H.r(this,0))
u=this.d
if(u==null){u=P.lm()
this.d=u}t=this.dJ(b)
s=u[t]
if(s==null)u[t]=[this.cc(b)]
else{if(this.cf(s,b)>=0)return!1
s.push(this.cc(b))}return!0},
U:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iV(this.c,b)
else return this.iS(0,b)},
iS:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.dQ(u,b)
s=this.cf(t,b)
if(s<0)return!1
this.e9(t.splice(s,1)[0])
return!0},
dE:function(a,b){H.A(b,H.r(this,0))
if(H.e(a[b],"$ich")!=null)return!1
a[b]=this.cc(b)
return!0},
iV:function(a,b){var u
if(a==null)return!1
u=H.e(a[b],"$ich")
if(u==null)return!1
this.e9(u)
delete a[b]
return!0},
dG:function(){this.r=1073741823&this.r+1},
cc:function(a){var u,t
u=new P.ch(H.A(a,H.r(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dG()
return u},
e9:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dG()},
dJ:function(a){return J.du(a)&1073741823},
dQ:function(a,b){return a[this.dJ(b)]},
cf:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Y(a[t].a,b))return t
return-1}}
P.ch.prototype={}
P.eT.prototype={
gM:function(a){return this.d},
D:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.b4(u))
else{u=this.c
if(u==null){this.sdF(null)
return!1}else{this.sdF(H.A(u.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
sdF:function(a){this.d=H.A(a,H.r(this,0))},
$ib8:1}
P.hG.prototype={
$2:function(a,b){this.a.n(0,H.A(a,this.b),H.A(b,this.c))},
$S:5}
P.hH.prototype={$ii:1,$ib:1}
P.w.prototype={
gX:function(a){return new H.cF(a,this.gk(a),0,[H.bw(this,a,"w",0)])},
N:function(a,b){return this.j(a,b)},
J:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.bw(this,a,"w",0)]})
u=this.gk(a)
for(t=0;t<u;++t){b.$1(this.j(a,t))
if(u!==this.gk(a))throw H.c(P.b4(a))}},
lm:function(a,b){var u,t
u=H.d([],[H.bw(this,a,"w",0)])
C.a.sk(u,this.gk(a))
for(t=0;t<this.gk(a);++t)C.a.n(u,t,this.j(a,t))
return u},
ll:function(a){return this.lm(a,!0)},
q:function(a,b){var u,t
u=[H.bw(this,a,"w",0)]
H.l(b,"$ib",u,"$ab")
t=H.d([],u)
C.a.sk(t,C.e.q(this.gk(a),b.gk(b)))
C.a.bu(t,0,this.gk(a),a)
C.a.bu(t,this.gk(a),t.length,b)
return t},
kv:function(a,b,c,d){var u
H.A(d,H.bw(this,a,"w",0))
P.bu(b,c,this.gk(a),null,null,null)
for(u=b;u<c;++u)this.n(a,u,d)},
i:function(a){return P.l9(a,"[","]")}}
P.hJ.prototype={}
P.hK.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.m(a)
u.a=t+": "
u.a+=H.m(b)},
$S:5}
P.ah.prototype={
J:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.bw(this,a,"ah",0),H.bw(this,a,"ah",1)]})
for(u=J.bB(this.gad(a));u.D();){t=u.gM(u)
b.$2(t,this.j(a,t))}},
gk:function(a){return J.aG(this.gad(a))},
i:function(a){return P.lf(a)},
$iD:1}
P.kt.prototype={
n:function(a,b,c){H.A(b,H.r(this,0))
H.A(c,H.r(this,1))
throw H.c(P.G("Cannot modify unmodifiable map"))}}
P.hL.prototype={
j:function(a,b){return J.lE(this.a,b)},
n:function(a,b,c){J.l_(this.a,H.A(b,H.r(this,0)),H.A(c,H.r(this,1)))},
J:function(a,b){J.lG(this.a,H.n(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gk:function(a){return J.aG(this.a)},
i:function(a){return J.aO(this.a)},
$iD:1}
P.ey.prototype={}
P.kf.prototype={
ah:function(a,b){var u
for(u=J.bB(H.l(b,"$ii",this.$ti,"$ai"));u.D();)this.h(0,u.gM(u))},
i:function(a){return P.l9(this,"{","}")},
N:function(a,b){var u,t,s
if(b<0)H.t(P.ag(b,0,null,"index",null))
for(u=P.ox(this,this.r,H.r(this,0)),t=0;u.D();){s=u.d
if(b===t)return s;++t}throw H.c(P.a_(b,this,"index",null,t))},
$ii:1,
$imc:1}
P.eU.prototype={}
P.fn.prototype={}
P.fO.prototype={
kS:function(a,b,c,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a0=P.bu(c,a0,b.length,null,null,null)
u=$.ng()
for(t=c,s=t,r=null,q=-1,p=-1,o=0;t<a0;t=n){n=t+1
m=C.c.H(b,t)
if(m===37){l=n+2
if(l<=a0){k=H.kN(C.c.H(b,n))
j=H.kN(C.c.H(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.h(u,i)
h=u[i]
if(h>=0){i=C.c.a4("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ak("")
g=r.a+=C.c.w(b,s,t)
r.a=g+H.cd(m)
s=n
continue}}throw H.c(P.a6("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.c.w(b,s,a0)
f=g.length
if(q>=0)P.lJ(b,p,a0,q,o,f)
else{e=C.e.bt(f-1,4)+1
if(e===1)throw H.c(P.a6("Invalid base64 encoding length ",b,a0))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.b4(b,c,a0,g.charCodeAt(0)==0?g:g)}d=a0-c
if(q>=0)P.lJ(b,p,a0,q,o,d)
else{e=C.e.bt(d,4)
if(e===1)throw H.c(P.a6("Invalid base64 encoding length ",b,a0))
if(e>1)b=C.c.b4(b,a0,a0,e===2?"==":"=")}return b},
$ac2:function(){return[[P.b,P.o],P.f]}}
P.fP.prototype={
$abF:function(){return[[P.b,P.o],P.f]}}
P.c2.prototype={}
P.bF.prototype={}
P.hc.prototype={
$ac2:function(){return[P.f,[P.b,P.o]]}}
P.hs.prototype={
i:function(a){return this.a}}
P.hr.prototype={
hq:function(a,b,c){var u,t,s,r,q,p
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=null;r<c;++r){if(r>=a.length)return H.h(a,r)
switch(a[r]){case"&":p="&amp;"
break
case'"':p=u?"&quot;":null
break
case"'":p=s?"&#39;":null
break
case"<":p="&lt;"
break
case">":p="&gt;"
break
case"/":p=t?"&#47;":null
break
default:p=null}if(p!=null){if(q==null)q=new P.ak("")
if(r>b)q.a+=C.c.w(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nu(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abF:function(){return[P.f,P.f]}}
P.js.prototype={
gku:function(){return C.S}}
P.ju.prototype={
bi:function(a,b,c){var u,t,s
c=P.bu(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.kA(t)
if(s.hC(a,b,c)!==c)s.eb(J.no(a,c-1),0)
return new Uint8Array(t.subarray(0,H.oN(0,s.b,t.length)))},
cN:function(a){return this.bi(a,0,null)},
$abF:function(){return[P.f,[P.b,P.o]]}}
P.kA.prototype={
eb:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.h(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.h(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.h(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.h(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.h(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.h(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.h(u,t)
u[t]=128|a&63
return!1}},
hC:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.a4(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.H(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.eb(r,C.c.H(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.h(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.h(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.h(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.h(u,q)
u[q]=128|r&63}}return s}}
P.jt.prototype={
bi:function(a,b,c){var u,t,s,r
H.l(a,"$ib",[P.o],"$ab")
u=P.ok(!1,a,b,c)
if(u!=null)return u
c=P.bu(b,c,J.aG(a),null,null,null)
t=new P.ak("")
s=new P.ky(!1,t)
s.bi(a,b,c)
if(s.e>0){H.t(P.a6("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.cd(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cN:function(a){return this.bi(a,0,null)},
$abF:function(){return[[P.b,P.o],P.f]}}
P.ky.prototype={
bi:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.l(a,"$ib",[P.o],"$ab")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.kz(this,b,c,a)
$label0$0:for(q=J.cp(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.j(a,o)
if(typeof n!=="number")return n.c1()
if((n&192)!==128){m=P.a6("Bad UTF-8 encoding 0x"+C.e.br(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.h(C.G,m)
if(u<=C.G[m]){m=P.a6("Overlong encoding of 0x"+C.e.br(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a6("Character outside valid Unicode range: 0x"+C.e.br(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.cd(u)
this.c=!1}for(m=o<c;m;){l=P.oU(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.j(a,k)
if(typeof n!=="number")return n.a0()
if(n<0){i=P.a6("Negative UTF-8 code unit: -0x"+C.e.br(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a6("Bad UTF-8 encoding 0x"+C.e.br(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.kz.prototype={
$2:function(a,b){this.a.b.a+=P.ek(this.d,a,b)},
$S:38}
P.R.prototype={}
P.aq.prototype={
B:function(a,b){if(b==null)return!1
return b instanceof P.aq&&this.a===b.a&&!0},
gL:function(a){var u=this.a
return(u^C.e.b0(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.nC(H.o2(this))
t=P.dE(H.o0(this))
s=P.dE(H.nX(this))
r=P.dE(H.nY(this))
q=P.dE(H.o_(this))
p=P.dE(H.o1(this))
o=P.nD(H.nZ(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.B.prototype={}
P.b7.prototype={
q:function(a,b){return new P.b7(C.e.q(this.a,b.ghv()))},
u:function(a,b){return new P.b7(C.e.u(this.a,b.ghv()))},
B:function(a,b){if(b==null)return!1
return b instanceof P.b7&&this.a===b.a},
gL:function(a){return C.e.gL(this.a)},
i:function(a){var u,t,s,r,q
u=new P.h9()
t=this.a
if(t<0)return"-"+new P.b7(0-t).i(0)
s=u.$1(C.e.ac(t,6e7)%60)
r=u.$1(C.e.ac(t,1e6)%60)
q=new P.h8().$1(t%1e6)
return""+C.e.ac(t,36e8)+":"+H.m(s)+":"+H.m(r)+"."+H.m(q)}}
P.h8.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:26}
P.h9.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:26}
P.bH.prototype={}
P.e6.prototype={
i:function(a){return"Throw of null."}}
P.aP.prototype={
gce:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcd:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gce()+t+s
if(!this.a)return r
q=this.gcd()
p=P.he(this.b)
return r+q+": "+p}}
P.ce.prototype={
gce:function(){return"RangeError"},
gcd:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.m(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.m(u)
else if(s>u)t=": Not in range "+H.m(u)+".."+H.m(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.m(u)}return t}}
P.hu.prototype={
gce:function(){return"RangeError"},
gcd:function(){var u,t
u=H.ac(this.b)
if(typeof u!=="number")return u.a0()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.m(t)},
gk:function(a){return this.f}}
P.jl.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ji.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cg.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fV.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.he(u)+"."}}
P.ib.prototype={
i:function(a){return"Out of Memory"},
$ibH:1}
P.ej.prototype={
i:function(a){return"Stack Overflow"},
$ibH:1}
P.h1.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eM.prototype={
i:function(a){return"Exception: "+this.a}}
P.hn.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.w(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.H(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.c.a4(r,m)
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
g=""}f=C.c.w(r,i,j)
return t+h+f+g+"\n"+C.c.v(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.m(s)+")"):t}}
P.bI.prototype={}
P.o.prototype={}
P.i.prototype={
c0:function(a,b){var u=H.an(this,"i",0)
return new H.d6(this,H.n(b,{func:1,ret:P.R,args:[u]}),[u])},
gk:function(a){var u,t
u=this.gX(this)
for(t=0;u.D();)++t
return t},
gaT:function(a){var u,t
u=this.gX(this)
if(!u.D())throw H.c(H.hv())
t=u.gM(u)
if(u.D())throw H.c(H.nL())
return t},
N:function(a,b){var u,t,s
if(b<0)H.t(P.ag(b,0,null,"index",null))
for(u=this.gX(this),t=0;u.D();){s=u.gM(u)
if(b===t)return s;++t}throw H.c(P.a_(b,this,"index",null,t))},
i:function(a){return P.nJ(this,"(",")")}}
P.b8.prototype={}
P.b.prototype={$ii:1}
P.D.prototype={}
P.J.prototype={
gL:function(a){return P.Q.prototype.gL.call(this,this)},
i:function(a){return"null"}}
P.a5.prototype={}
P.Q.prototype={constructor:P.Q,$iQ:1,
B:function(a,b){return this===b},
gL:function(a){return H.cP(this)},
i:function(a){return"Instance of '"+H.cc(this)+"'"},
toString:function(){return this.i(this)}}
P.az.prototype={}
P.f.prototype={$im2:1}
P.ak.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipE:1}
P.jq.prototype={
$2:function(a,b){var u,t,s,r
u=P.f
H.l(a,"$iD",[u,u],"$aD")
H.H(b)
t=J.dn(b).f2(b,"=")
if(t===-1){if(b!=="")J.l_(a,P.lo(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.w(b,0,t)
r=C.c.aA(b,t+1)
u=this.a
J.l_(a,P.lo(s,0,s.length,u,!0),P.lo(r,0,r.length,u,!0))}return a},
$S:47}
P.jn.prototype={
$2:function(a,b){throw H.c(P.a6("Illegal IPv4 address, "+a,this.a,b))},
$S:49}
P.jo.prototype={
$2:function(a,b){throw H.c(P.a6("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:40}
P.jp.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.dp(C.c.w(this.b,a,b),null,16)
if(typeof u!=="number")return u.a0()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:36}
P.ci.prototype={
gfq:function(){return this.b},
gcZ:function(a){var u=this.c
if(u==null)return""
if(C.c.ab(u,"["))return C.c.w(u,1,u.length-1)
return u},
gbU:function(a){var u=this.d
if(u==null)return P.mA(this.a)
return u},
gda:function(a){var u=this.f
return u==null?"":u},
geX:function(){var u=this.r
return u==null?"":u},
dh:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.l(h,"$iD",[P.f,null],"$aD")
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
if(s&&!C.c.ab(d,"/"))d="/"+d
g=P.ln(g,0,0,h)
return new P.ci(i,j,c,f,d,g,this.r)},
ff:function(a,b){return this.dh(a,null,null,null,null,null,null,b,null,null)},
gdc:function(){var u,t
if(this.Q==null){u=this.f
t=P.f
this.siR(new P.ey(P.mn(u==null?"":u,C.m),[t,t]))}return this.Q},
geY:function(){return this.c!=null},
gf0:function(){return this.f!=null},
geZ:function(){return this.r!=null},
i:function(a){var u,t,s,r
u=this.y
if(u==null){u=this.a
t=u.length!==0?H.m(u)+":":""
s=this.c
r=s==null
if(!r||u==="file"){u=t+"//"
t=this.b
if(t.length!==0)u=u+H.m(t)+"@"
if(!r)u+=s
t=this.d
if(t!=null)u=u+":"+H.m(t)}else u=t
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
if(!!J.U(b).$ilj)if(this.a==b.gc5())if(this.c!=null===b.geY())if(this.b==b.gfq())if(this.gcZ(this)==b.gcZ(b))if(this.gbU(this)==b.gbU(b))if(this.e===b.gfc(b)){u=this.f
t=u==null
if(!t===b.gf0()){if(t)u=""
if(u===b.gda(b)){u=this.r
t=u==null
if(!t===b.geZ()){if(t)u=""
u=u===b.geX()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gL:function(a){var u=this.z
if(u==null){u=C.c.gL(this.i(0))
this.z=u}return u},
siR:function(a){var u=P.f
this.Q=H.l(a,"$iD",[u,u],"$aD")},
$ilj:1,
gc5:function(){return this.a},
gfc:function(a){return this.e}}
P.ku.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.q()
throw H.c(P.a6("Invalid port",this.a,u+1))},
$S:16}
P.kv.prototype={
$1:function(a){return P.fo(C.a9,a,C.m,!1)},
$S:17}
P.kx.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.m(P.fo(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.m(P.fo(C.w,b,C.m,!0))}},
$S:14}
P.kw.prototype={
$2:function(a,b){var u,t
H.H(a)
if(b==null||typeof b==="string")this.a.$2(a,H.H(b))
else for(u=J.bB(H.mV(b,"$ii")),t=this.a;u.D();)t.$2(a,H.H(u.gM(u)))},
$S:44}
P.jm.prototype={
gfp:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.h(u,0)
t=this.a
u=u[0]+1
s=C.c.f3(t,"?",u)
r=t.length
if(s>=0){q=P.dj(t,s+1,r,C.u,!1)
r=s}else q=null
u=new P.jS(this,"data",null,null,null,P.dj(t,u,r,C.K,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.h(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.kE.prototype={
$1:function(a){return new Uint8Array(96)},
$S:43}
P.kD.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.h(u,a)
u=u[a]
J.np(u,0,96,b)
return u},
$S:54}
P.kF.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.H(b,t)^96
if(s>=a.length)return H.h(a,s)
a[s]=c}}}
P.kG.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.H(b,0),t=C.c.H(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.h(a,s)
a[s]=c}}}
P.ki.prototype={
geY:function(){return this.c>0},
gf_:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.q()
t=this.e
if(typeof t!=="number")return H.F(t)
t=u+1<t
u=t}else u=!1
return u},
gf0:function(){var u=this.f
if(typeof u!=="number")return u.a0()
return u<this.r},
geZ:function(){return this.r<this.a.length},
gdU:function(){return this.b===4&&C.c.ab(this.a,"http")},
gdV:function(){return this.b===5&&C.c.ab(this.a,"https")},
gc5:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdU()){this.x="http"
u="http"}else if(this.gdV()){this.x="https"
u="https"}else if(u===4&&C.c.ab(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.ab(this.a,"package")){this.x="package"
u="package"}else{u=C.c.w(this.a,0,u)
this.x=u}return u},
gfq:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.w(this.a,t,u-1):""},
gcZ:function(a){var u=this.c
return u>0?C.c.w(this.a,u,this.d):""},
gbU:function(a){var u
if(this.gf_()){u=this.d
if(typeof u!=="number")return u.q()
return P.dp(C.c.w(this.a,u+1,this.e),null,null)}if(this.gdU())return 80
if(this.gdV())return 443
return 0},
gfc:function(a){return C.c.w(this.a,this.e,this.f)},
gda:function(a){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.a0()
return u<t?C.c.w(this.a,u+1,t):""},
geX:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.aA(t,u+1):""},
gdc:function(){var u=this.f
if(typeof u!=="number")return u.a0()
if(u>=this.r)return C.aa
u=P.f
return new P.ey(P.mn(this.gda(this),C.m),[u,u])},
dh:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.l(h,"$iD",[P.f,null],"$aD")
i=this.gc5()
u=i==="file"
t=this.c
j=t>0?C.c.w(this.a,this.b+3,t):""
f=this.gf_()?this.gbU(this):null
t=this.c
if(t>0)c=C.c.w(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.c.w(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.ab(d,"/"))d="/"+d
g=P.ln(g,0,0,h)
s=this.r
if(s<t.length)b=C.c.aA(t,s+1)
return new P.ci(i,j,c,f,d,g,b)},
ff:function(a,b){return this.dh(a,null,null,null,null,null,null,b,null,null)},
gL:function(a){var u=this.y
if(u==null){u=C.c.gL(this.a)
this.y=u}return u},
B:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.U(b).$ilj&&this.a===b.i(0)},
i:function(a){return this.a},
$ilj:1}
P.jS.prototype={}
W.y.prototype={}
W.fG.prototype={
gk:function(a){return a.length}}
W.dv.prototype={
i:function(a){return String(a)},
$idv:1}
W.fH.prototype={
i:function(a){return String(a)}}
W.cu.prototype={$icu:1}
W.bY.prototype={$ibY:1}
W.bC.prototype={$ibC:1}
W.c0.prototype={
dm:function(a,b,c){if(c!=null)return this.hD(a,b,P.p0(c,null))
return this.hE(a,b)},
fA:function(a,b){return this.dm(a,b,null)},
hD:function(a,b,c){return a.getContext(b,c)},
hE:function(a,b){return a.getContext(b)},
$ic0:1,
$ilM:1}
W.c1.prototype={
hF:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
kq:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ic1:1}
W.bD.prototype={
gk:function(a){return a.length}}
W.cy.prototype={$icy:1}
W.fY.prototype={
gk:function(a){return a.length}}
W.X.prototype={$iX:1}
W.cz.prototype={
gk:function(a){return a.length}}
W.fZ.prototype={}
W.b5.prototype={}
W.b6.prototype={}
W.h_.prototype={
gk:function(a){return a.length}}
W.h0.prototype={
gk:function(a){return a.length}}
W.h3.prototype={
gk:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.cA.prototype={
k0:function(a,b){return a.adoptNode(b)},
dn:function(a,b){return a.getElementById(b)}}
W.h5.prototype={
i:function(a){return String(a)}}
W.dG.prototype={
kh:function(a,b){return a.createHTMLDocument(b)}}
W.dH.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.l(c,"$iae",[P.a5],"$aae")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[[P.ae,P.a5]]},
$aw:function(){return[[P.ae,P.a5]]},
$ii:1,
$ai:function(){return[[P.ae,P.a5]]},
$ib:1,
$ab:function(){return[[P.ae,P.a5]]},
$aC:function(){return[[P.ae,P.a5]]}}
W.dI.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gaw(a))+" x "+H.m(this.gau(a))},
B:function(a,b){var u
if(b==null)return!1
if(!H.dm(b,"$iae",[P.a5],"$aae"))return!1
u=J.af(b)
return a.left===u.gbT(b)&&a.top===u.gbY(b)&&this.gaw(a)===u.gaw(b)&&this.gau(a)===u.gau(b)},
gL:function(a){return W.my(C.f.gL(a.left),C.f.gL(a.top),C.f.gL(this.gaw(a)),C.f.gL(this.gau(a)))},
gej:function(a){return a.bottom},
gau:function(a){return a.height},
gbT:function(a){return a.left},
gbX:function(a){return a.right},
gbY:function(a){return a.top},
gaw:function(a){return a.width},
$iae:1,
$aae:function(){return[P.a5]}}
W.h6.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.H(c)
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[P.f]},
$aw:function(){return[P.f]},
$ii:1,
$ai:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aC:function(){return[P.f]}}
W.h7.prototype={
gk:function(a){return a.length}}
W.jQ.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.e(u[b],"$iP")},
n:function(a,b,c){var u
H.e(c,"$iP")
u=this.b
if(b<0||b>=u.length)return H.h(u,b)
J.l0(this.a,c,u[b])},
h:function(a,b){J.lF(this.a,b)
return b},
gX:function(a){var u=this.ll(this)
return new J.av(u,u.length,0,[H.r(u,0)])},
$aw:function(){return[W.P]},
$ai:function(){return[W.P]},
$ab:function(){return[W.P]}}
W.P.prototype={
gk8:function(a){return new W.jT(a)},
gcM:function(a){return new W.jQ(a,a.children)},
geq:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.a0()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a0()
if(r<0)r=-r*0
return new P.ae(u,t,s,r,[P.a5])},
i:function(a){return a.localName},
at:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lS
if(u==null){u=H.d([],[W.aD])
t=new W.e5(u)
C.a.h(u,W.mx(null))
C.a.h(u,W.mz())
$.lS=t
d=t}else d=u
u=$.lR
if(u==null){u=new W.fp(d)
$.lR=u
c=u}else{u.a=d
c=u}}if($.bo==null){u=document
t=u.implementation
t=(t&&C.T).kh(t,"")
$.bo=t
$.l7=t.createRange()
t=$.bo
t.toString
t=t.createElement("base")
H.e(t,"$icu")
t.href=u.baseURI
u=$.bo.head;(u&&C.V).E(u,t)}u=$.bo
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.e(t,"$ibC")}u=$.bo
if(!!this.$ibC)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.bo.body;(u&&C.p).E(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.a_(C.a7,a.tagName)){u=$.l7;(u&&C.M).fG(u,s)
u=$.l7
r=(u&&C.M).kf(u,b)}else{s.innerHTML=b
r=$.bo.createDocumentFragment()
for(u=J.af(r);t=s.firstChild,t!=null;)u.E(r,t)}u=$.bo.body
if(s==null?u!=null:s!==u)J.lH(s)
c.dr(r)
C.z.k0(document,r)
return r},
kg:function(a,b,c){return this.at(a,b,c,null)},
fJ:function(a,b,c,d){a.textContent=null
this.E(a,this.at(a,b,c,d))},
fI:function(a,b){return this.fJ(a,b,null,null)},
b7:function(a,b){return a.getAttribute(b)},
iT:function(a,b){return a.removeAttribute(b)},
fH:function(a,b,c){return a.setAttribute(b,c)},
$iP:1,
gli:function(a){return a.tagName}}
W.hb.prototype={
$1:function(a){return!!J.U(H.e(a,"$iE")).$iP},
$S:20}
W.p.prototype={$ip:1}
W.k.prototype={
jX:function(a,b,c,d){H.n(c,{func:1,args:[W.p]})
if(c!=null)this.hh(a,b,c,!1)},
hh:function(a,b,c,d){return a.addEventListener(b,H.cm(H.n(c,{func:1,args:[W.p]}),1),!1)},
$ik:1}
W.aI.prototype={$iaI:1}
W.cC.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaI")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aI]},
$aw:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$icC:1,
$aC:function(){return[W.aI]}}
W.hi.prototype={
gk:function(a){return a.length}}
W.hm.prototype={
gk:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.dN.prototype={}
W.dO.prototype={
j0:function(a,b,c,d){return a.replaceState(b,c,d)},
gk:function(a){return a.length}}
W.c6.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iE")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.E]},
$aw:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$ic6:1,
$aC:function(){return[W.E]}}
W.dP.prototype={}
W.bp.prototype={$ibp:1,
geu:function(a){return a.data}}
W.c7.prototype={$ic7:1,$ilM:1}
W.b9.prototype={$ib9:1}
W.dX.prototype={
i:function(a){return String(a)},
$idX:1}
W.cI.prototype={}
W.hU.prototype={
gk:function(a){return a.length}}
W.hV.prototype={
j:function(a,b){return P.bv(a.get(H.H(b)))},
J:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
gad:function(a){var u=H.d([],[P.f])
this.J(a,new W.hW(u))
return u},
gk:function(a){return a.size},
n:function(a,b,c){throw H.c(P.G("Not supported"))},
$aah:function(){return[P.f,null]},
$iD:1,
$aD:function(){return[P.f,null]}}
W.hW.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hX.prototype={
j:function(a,b){return P.bv(a.get(H.H(b)))},
J:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
gad:function(a){var u=H.d([],[P.f])
this.J(a,new W.hY(u))
return u},
gk:function(a){return a.size},
n:function(a,b,c){throw H.c(P.G("Not supported"))},
$aah:function(){return[P.f,null]},
$iD:1,
$aD:function(){return[P.f,null]}}
W.hY.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aT.prototype={$iaT:1}
W.hZ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaT")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aT]},
$aw:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aC:function(){return[W.aT]}}
W.a7.prototype={$ia7:1}
W.at.prototype={
gaT:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.c(P.me("No elements"))
if(t>1)throw H.c(P.me("More than one element"))
return u.firstChild},
ah:function(a,b){var u,t,s,r,q
H.l(b,"$ii",[W.E],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.af(t),q=0;q<s;++q)r.E(t,u.firstChild)
return},
n:function(a,b,c){var u,t
H.e(c,"$iE")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.h(t,b)
J.l0(u,c,t[b])},
gX:function(a){var u=this.a.childNodes
return new W.dL(u,u.length,-1,[H.bw(C.ab,u,"C",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$aw:function(){return[W.E]},
$ai:function(){return[W.E]},
$ab:function(){return[W.E]}}
W.E.prototype={
l7:function(a){var u=a.parentNode
if(u!=null)J.fD(u,a)},
lc:function(a,b){var u,t
try{u=a.parentNode
J.l0(u,b,a)}catch(t){H.ao(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fP(a):u},
E:function(a,b){return a.appendChild(H.e(b,"$iE"))},
iU:function(a,b){return a.removeChild(b)},
j_:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.cN.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iE")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.E]},
$aw:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aC:function(){return[W.E]}}
W.aU.prototype={$iaU:1,
gk:function(a){return a.length}}
W.ie.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaU")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aU]},
$aw:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aC:function(){return[W.aU]}}
W.ea.prototype={
kf:function(a,b){return a.createContextualFragment(b)},
fG:function(a,b){return a.selectNodeContents(b)}}
W.ip.prototype={
j:function(a,b){return P.bv(a.get(H.H(b)))},
J:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
gad:function(a){var u=H.d([],[P.f])
this.J(a,new W.iq(u))
return u},
gk:function(a){return a.size},
n:function(a,b,c){throw H.c(P.G("Not supported"))},
$aah:function(){return[P.f,null]},
$iD:1,
$aD:function(){return[P.f,null]}}
W.iq.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.is.prototype={
gk:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.iC.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaV")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aV]},
$aw:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aC:function(){return[W.aV]}}
W.aW.prototype={$iaW:1}
W.iD.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaW")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aW]},
$aw:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aC:function(){return[W.aW]}}
W.aX.prototype={$iaX:1,
gk:function(a){return a.length}}
W.iG.prototype={
j:function(a,b){return this.dR(a,H.H(b))},
n:function(a,b,c){this.j7(a,b,c)},
J:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=this.hJ(a,u)
if(t==null)return
b.$2(t,this.dR(a,t))}},
gad:function(a){var u=H.d([],[P.f])
this.J(a,new W.iH(u))
return u},
gk:function(a){return a.length},
dR:function(a,b){return a.getItem(b)},
hJ:function(a,b){return a.key(b)},
j7:function(a,b,c){return a.setItem(b,c)},
$aah:function(){return[P.f,P.f]},
$iD:1,
$aD:function(){return[P.f,P.f]}}
W.iH.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:14}
W.aJ.prototype={$iaJ:1}
W.bg.prototype={$ibg:1}
W.el.prototype={
at:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.c7(a,b,c,d)
u=W.nG("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.at(t).ah(0,new W.at(u))
return t},
hH:function(a,b){return a.insertRow(b)}}
W.em.prototype={
at:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.c7(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.at(u.createElement("table"),b,c,d)
u.toString
u=new W.at(u)
s=u.gaT(u)
s.toString
u=new W.at(s)
r=u.gaT(u)
t.toString
r.toString
new W.at(t).ah(0,new W.at(r))
return t},
dT:function(a,b){return a.insertCell(b)}}
W.iN.prototype={
at:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.c7(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.at(u.createElement("table"),b,c,d)
u.toString
u=new W.at(u)
s=u.gaT(u)
t.toString
s.toString
new W.at(t).ah(0,new W.at(s))
return t}}
W.cV.prototype={$icV:1}
W.aY.prototype={$iaY:1}
W.aK.prototype={$iaK:1}
W.iP.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaK")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aK]},
$aw:function(){return[W.aK]},
$ii:1,
$ai:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aC:function(){return[W.aK]}}
W.iQ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaY")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aY]},
$aw:function(){return[W.aY]},
$ii:1,
$ai:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aC:function(){return[W.aY]}}
W.j_.prototype={
gk:function(a){return a.length}}
W.aZ.prototype={$iaZ:1}
W.b_.prototype={$ib_:1}
W.j3.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaZ")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aZ]},
$aw:function(){return[W.aZ]},
$ii:1,
$ai:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aC:function(){return[W.aZ]}}
W.j4.prototype={
gk:function(a){return a.length}}
W.bR.prototype={}
W.jr.prototype={
i:function(a){return String(a)}}
W.jI.prototype={$ilM:1}
W.jJ.prototype={
gk:function(a){return a.length}}
W.bk.prototype={
gkn:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.G("deltaY is not supported"))},
gkm:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.G("deltaX is not supported"))},
$ibk:1}
W.d7.prototype={
j1:function(a,b){return a.requestAnimationFrame(H.cm(H.n(b,{func:1,ret:-1,args:[P.a5]}),1))},
hw:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d8.prototype={$id8:1}
W.jR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iX")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.X]},
$aw:function(){return[W.X]},
$ii:1,
$ai:function(){return[W.X]},
$ib:1,
$ab:function(){return[W.X]},
$aC:function(){return[W.X]}}
W.eH.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
B:function(a,b){var u
if(b==null)return!1
if(!H.dm(b,"$iae",[P.a5],"$aae"))return!1
u=J.af(b)
return a.left===u.gbT(b)&&a.top===u.gbY(b)&&a.width===u.gaw(b)&&a.height===u.gau(b)},
gL:function(a){return W.my(C.f.gL(a.left),C.f.gL(a.top),C.f.gL(a.width),C.f.gL(a.height))},
gau:function(a){return a.height},
gaw:function(a){return a.width}}
W.k5.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaQ")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aQ]},
$aw:function(){return[W.aQ]},
$ii:1,
$ai:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aC:function(){return[W.aQ]}}
W.eZ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iE")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.E]},
$aw:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aC:function(){return[W.E]}}
W.kj.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaX")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aX]},
$aw:function(){return[W.aX]},
$ii:1,
$ai:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aC:function(){return[W.aX]}}
W.kn.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaJ")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aJ]},
$aw:function(){return[W.aJ]},
$ii:1,
$ai:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$aC:function(){return[W.aJ]}}
W.jP.prototype={
J:function(a,b){var u,t,s,r,q,p
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.gad(this),t=u.length,s=this.a,r=J.af(s),q=0;q<u.length;u.length===t||(0,H.I)(u),++q){p=u[q]
b.$2(p,r.b7(s,p))}},
gad:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.d([],[P.f])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.h(u,r)
q=H.e(u[r],"$id8")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aah:function(){return[P.f,P.f]},
$aD:function(){return[P.f,P.f]}}
W.jT.prototype={
j:function(a,b){return J.l1(this.a,H.H(b))},
n:function(a,b,c){J.nt(this.a,b,c)},
gk:function(a){return this.gad(this).length}}
W.jU.prototype={}
W.ll.prototype={}
W.jV.prototype={}
W.jW.prototype={
$1:function(a){return this.a.$1(H.e(a,"$ip"))},
$S:41}
W.bU.prototype={
h1:function(a){var u,t
u=$.lC()
if(u.gkJ(u)){for(t=0;t<262;++t)u.n(0,C.a6[t],W.pc())
for(t=0;t<12;++t)u.n(0,C.B[t],W.pd())}},
b1:function(a){return $.nh().a_(0,W.cB(a))},
aC:function(a,b,c){var u,t,s
u=W.cB(a)
t=$.lC()
s=t.j(0,H.m(u)+"::"+b)
if(s==null)s=t.j(0,"*::"+b)
if(s==null)return!1
return H.lt(s.$4(a,b,c,this))},
$iaD:1}
W.C.prototype={
gX:function(a){return new W.dL(a,this.gk(a),-1,[H.bw(this,a,"C",0)])}}
W.e5.prototype={
b1:function(a){return C.a.ef(this.a,new W.i6(a))},
aC:function(a,b,c){return C.a.ef(this.a,new W.i5(a,b,c))},
$iaD:1}
W.i6.prototype={
$1:function(a){return H.e(a,"$iaD").b1(this.a)},
$S:21}
W.i5.prototype={
$1:function(a){return H.e(a,"$iaD").aC(this.a,this.b,this.c)},
$S:21}
W.f6.prototype={
hb:function(a,b,c,d){var u,t,s
this.a.ah(0,c)
u=b.c0(0,new W.kg())
t=b.c0(0,new W.kh())
this.b.ah(0,u)
s=this.c
s.ah(0,C.H)
s.ah(0,t)},
b1:function(a){return this.a.a_(0,W.cB(a))},
aC:function(a,b,c){var u,t
u=W.cB(a)
t=this.c
if(t.a_(0,H.m(u)+"::"+b))return this.d.k5(c)
else if(t.a_(0,"*::"+b))return this.d.k5(c)
else{t=this.b
if(t.a_(0,H.m(u)+"::"+b))return!0
else if(t.a_(0,"*::"+b))return!0
else if(t.a_(0,H.m(u)+"::*"))return!0
else if(t.a_(0,"*::*"))return!0}return!1},
$iaD:1}
W.kg.prototype={
$1:function(a){return!C.a.a_(C.B,H.H(a))},
$S:22}
W.kh.prototype={
$1:function(a){return C.a.a_(C.B,H.H(a))},
$S:22}
W.kp.prototype={
aC:function(a,b,c){if(this.fU(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.l1(a,"template")==="")return this.e.a_(0,b)
return!1}}
W.kq.prototype={
$1:function(a){return"TEMPLATE::"+H.m(H.H(a))},
$S:17}
W.ko.prototype={
b1:function(a){var u=J.U(a)
if(!!u.$icQ)return!1
u=!!u.$iq
if(u&&W.cB(a)==="foreignObject")return!1
if(u)return!0
return!1},
aC:function(a,b,c){if(b==="is"||C.c.ab(b,"on"))return!1
return this.b1(a)},
$iaD:1}
W.dL.prototype={
D:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdS(J.lE(this.a,u))
this.c=u
return!0}this.sdS(null)
this.c=t
return!1},
gM:function(a){return this.d},
sdS:function(a){this.d=H.A(a,H.r(this,0))},
$ib8:1}
W.aD.prototype={}
W.ke.prototype={$ipR:1}
W.fp.prototype={
dr:function(a){new W.kB(this).$2(a,null)},
be:function(a,b){if(b==null)J.lH(a)
else J.fD(b,a)},
j5:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.nq(a)
s=J.l1(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ao(o)}q="element unprintable"
try{q=J.aO(a)}catch(o){H.ao(o)}try{p=W.cB(a)
this.j4(H.e(a,"$iP"),b,u,q,p,H.e(t,"$iD"),H.H(s))}catch(o){if(H.ao(o) instanceof P.aP)throw o
else{this.be(a,b)
window
n="Removing corrupted element "+H.m(q)
if(typeof console!="undefined")window.console.warn(n)}}},
j4:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.be(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.b1(a)){this.be(a,b)
window
u="Removing disallowed element <"+H.m(e)+"> from "+H.m(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.aC(a,"is",g)){this.be(a,b)
window
u="Removing disallowed type extension <"+H.m(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gad(f)
t=H.d(u.slice(0),[H.r(u,0)])
for(s=f.gad(f).length-1,u=f.a,r=J.af(u);s>=0;--s){if(s>=t.length)return H.h(t,s)
q=t[s]
if(!this.a.aC(a,J.nv(q),r.b7(u,q))){window
p="Removing disallowed attribute <"+H.m(e)+" "+q+'="'+H.m(r.b7(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.b7(u,q)
r.iT(u,q)}}if(!!J.U(a).$icV)this.dr(a.content)},
$ipC:1}
W.kB.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.j5(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.be(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ao(r)
q=H.e(u,"$iE")
if(s){p=q.parentNode
if(p!=null)J.fD(p,q)}else J.fD(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.e(t,"$iE")}},
$S:55}
W.eG.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.de.prototype={}
W.df.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.fc.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.dg.prototype={}
W.dh.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.fw.prototype={}
W.fx.prototype={}
W.fy.prototype={}
W.fz.prototype={}
P.kk.prototype={
eV:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
dk:function(a){var u,t,s,r,q
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.U(a)
if(!!t.$iaq)return new Date(a.a)
if(!!t.$io7)throw H.c(P.jj("structured clone of RegExp"))
if(!!t.$iaI)return a
if(!!t.$ibY)return a
if(!!t.$icC)return a
if(!!t.$ibp)return a
if(!!t.$icK||!!t.$ibO)return a
if(!!t.$iD){s=this.eV(a)
r=this.b
if(s>=r.length)return H.h(r,s)
q=r[s]
u.a=q
if(q!=null)return q
q={}
u.a=q
C.a.n(r,s,q)
t.J(a,new P.km(u,this))
return u.a}if(!!t.$ib){s=this.eV(a)
u=this.b
if(s>=u.length)return H.h(u,s)
q=u[s]
if(q!=null)return q
return this.ke(a,s)}throw H.c(P.jj("structured clone of other type"))},
ke:function(a,b){var u,t,s,r
u=J.cp(a)
t=u.gk(a)
s=new Array(t)
C.a.n(this.b,b,s)
for(r=0;r<t;++r)C.a.n(s,r,this.dk(u.j(a,r)))
return s}}
P.km.prototype={
$2:function(a,b){this.a.a[a]=this.b.dk(b)},
$S:5}
P.fm.prototype={$ibp:1,
geu:function(a){return this.a}}
P.kK.prototype={
$2:function(a,b){this.a[a]=b},
$S:5}
P.kl.prototype={}
P.hj.prototype={
gbc:function(){var u,t,s
u=this.b
t=H.an(u,"w",0)
s=W.P
return new H.hM(new H.d6(u,H.n(new P.hk(),{func:1,ret:P.R,args:[t]}),[t]),H.n(new P.hl(),{func:1,ret:s,args:[t]}),[t,s])},
J:function(a,b){H.n(b,{func:1,ret:-1,args:[W.P]})
C.a.J(P.le(this.gbc(),!1,W.P),b)},
n:function(a,b,c){var u
H.e(c,"$iP")
u=this.gbc()
J.ns(u.b.$1(J.fE(u.a,b)),c)},
h:function(a,b){J.lF(this.b.a,b)},
gk:function(a){return J.aG(this.gbc().a)},
j:function(a,b){var u=this.gbc()
return u.b.$1(J.fE(u.a,b))},
gX:function(a){var u=P.le(this.gbc(),!1,W.P)
return new J.av(u,u.length,0,[H.r(u,0)])},
$aw:function(){return[W.P]},
$ai:function(){return[W.P]},
$ab:function(){return[W.P]}}
P.hk.prototype={
$1:function(a){return!!J.U(H.e(a,"$iE")).$iP},
$S:20}
P.hl.prototype={
$1:function(a){return H.j(H.e(a,"$iE"),"$iP")},
$S:48}
P.k9.prototype={
gbX:function(a){var u=this.a
if(typeof u!=="number")return u.q()
return H.A(u+this.c,H.r(this,0))},
gej:function(a){var u=this.b
if(typeof u!=="number")return u.q()
return H.A(u+this.d,H.r(this,0))},
i:function(a){return"Rectangle ("+H.m(this.a)+", "+H.m(this.b)+") "+this.c+" x "+this.d},
B:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.dm(b,"$iae",[P.a5],"$aae")){u=this.a
t=J.af(b)
if(u==t.gbT(b)){s=this.b
if(s==t.gbY(b)){if(typeof u!=="number")return u.q()
r=H.r(this,0)
if(H.A(u+this.c,r)===t.gbX(b)){if(typeof s!=="number")return s.q()
u=H.A(s+this.d,r)===t.gej(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gL:function(a){var u,t,s,r,q
u=this.a
t=J.du(u)
s=this.b
r=J.du(s)
if(typeof u!=="number")return u.q()
q=H.r(this,0)
u=C.e.gL(H.A(u+this.c,q))
if(typeof s!=="number")return s.q()
q=C.e.gL(H.A(s+this.d,q))
return P.ow(P.k7(P.k7(P.k7(P.k7(0,t),r),u),q))}}
P.ae.prototype={
gbT:function(a){return this.a},
gbY:function(a){return this.b},
gaw:function(a){return this.c},
gau:function(a){return this.d}}
P.ba.prototype={$iba:1}
P.hB.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return this.aH(a,b)},
n:function(a,b,c){H.e(c,"$iba")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){return this.j(a,b)},
aH:function(a,b){return a.getItem(b)},
$aw:function(){return[P.ba]},
$ii:1,
$ai:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$aC:function(){return[P.ba]}}
P.be.prototype={$ibe:1}
P.i9.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return this.aH(a,b)},
n:function(a,b,c){H.e(c,"$ibe")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){return this.j(a,b)},
aH:function(a,b){return a.getItem(b)},
$aw:function(){return[P.be]},
$ii:1,
$ai:function(){return[P.be]},
$ib:1,
$ab:function(){return[P.be]},
$aC:function(){return[P.be]}}
P.ih.prototype={
gk:function(a){return a.length}}
P.cQ.prototype={$icQ:1}
P.iM.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return this.aH(a,b)},
n:function(a,b,c){H.H(c)
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){return this.j(a,b)},
aH:function(a,b){return a.getItem(b)},
$aw:function(){return[P.f]},
$ii:1,
$ai:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aC:function(){return[P.f]}}
P.q.prototype={
gcM:function(a){return new P.hj(a,new W.at(a))},
at:function(a,b,c,d){var u,t,s,r,q,p
u=H.d([],[W.aD])
C.a.h(u,W.mx(null))
C.a.h(u,W.mz())
C.a.h(u,new W.ko())
c=new W.fp(new W.e5(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.p).kg(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.at(r)
p=u.gaT(u)
for(u=J.af(q);s=p.firstChild,s!=null;)u.E(q,s)
return q},
$iq:1}
P.bi.prototype={$ibi:1}
P.j5.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return this.aH(a,b)},
n:function(a,b,c){H.e(c,"$ibi")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){return this.j(a,b)},
aH:function(a,b){return a.getItem(b)},
$aw:function(){return[P.bi]},
$ii:1,
$ai:function(){return[P.bi]},
$ib:1,
$ab:function(){return[P.bi]},
$aC:function(){return[P.bi]}}
P.eR.prototype={}
P.eS.prototype={}
P.f1.prototype={}
P.f2.prototype={}
P.fd.prototype={}
P.fe.prototype={}
P.fk.prototype={}
P.fl.prototype={}
P.S.prototype={$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$ioh:1}
P.fJ.prototype={
gk:function(a){return a.length}}
P.fK.prototype={
j:function(a,b){return P.bv(a.get(H.H(b)))},
J:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
gad:function(a){var u=H.d([],[P.f])
this.J(a,new P.fL(u))
return u},
gk:function(a){return a.size},
n:function(a,b,c){throw H.c(P.G("Not supported"))},
$aah:function(){return[P.f,null]},
$iD:1,
$aD:function(){return[P.f,null]}}
P.fL.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.fM.prototype={
gk:function(a){return a.length}}
P.bX.prototype={}
P.ia.prototype={
gk:function(a){return a.length}}
P.eF.prototype={}
P.dy.prototype={$idy:1}
P.dM.prototype={$idM:1}
P.e9.prototype={$ie9:1}
P.ed.prototype={$ied:1}
P.cf.prototype={
bA:function(a,b){return a.activeTexture(b)},
eg:function(a,b,c){return a.attachShader(b,c)},
aD:function(a,b,c){return a.bindBuffer(b,c)},
bg:function(a,b,c){return a.bindFramebuffer(b,c)},
eh:function(a,b,c){return a.bindRenderbuffer(b,c)},
a8:function(a,b,c){return a.bindTexture(b,c)},
ka:function(a,b,c){return a.blendFunc(b,c)},
ek:function(a,b,c,d){return a.bufferData(b,c,d)},
en:function(a,b){return a.clear(b)},
eo:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
ep:function(a,b){return a.clearDepth(b)},
kd:function(a,b){return a.compileShader(b)},
ki:function(a,b){return a.createShader(b)},
kk:function(a,b){return a.deleteProgram(b)},
kl:function(a,b){return a.deleteShader(b)},
ev:function(a,b){return a.depthFunc(b)},
ko:function(a,b){return a.disable(b)},
ew:function(a,b){return a.disableVertexAttribArray(b)},
kp:function(a,b,c,d,e){return a.drawElements(b,c,H.ac(d),H.ac(e))},
bk:function(a,b){return a.enable(b)},
ez:function(a,b){return a.enableVertexAttribArray(b)},
kD:function(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
kE:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
ft:function(a,b){return a.generateMipmap(b)},
fu:function(a,b,c){return a.getActiveAttrib(b,c)},
fv:function(a,b,c){return a.getActiveUniform(b,c)},
fw:function(a,b,c){return a.getAttribLocation(b,c)},
c2:function(a,b){return a.getParameter(b)},
fB:function(a,b){return a.getProgramInfoLog(b)},
c3:function(a,b,c){return a.getProgramParameter(b,c)},
fC:function(a,b){return a.getShaderInfoLog(b)},
fD:function(a,b,c){return a.getShaderParameter(b,c)},
fE:function(a,b,c){return a.getUniformLocation(b,c)},
kL:function(a,b){return a.linkProgram(b)},
fd:function(a,b,c){return a.pixelStorei(b,c)},
lb:function(a,b,c,d,e){return a.renderbufferStorage(b,c,d,e)},
fN:function(a,b,c){return a.shaderSource(b,c)},
fj:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=i==null
if(!u&&h!=null&&typeof g==="number"&&Math.floor(g)===g){this.jk(a,b,c,d,e,f,g,h,i,j)
return}t=J.U(g)
if(!!t.$ibp&&h==null&&u&&!0){this.jl(a,b,c,d,e,f,P.p1(g))
return}if(!!t.$ic7&&h==null&&u&&!0){this.jm(a,b,c,d,e,f,g)
return}throw H.c(P.dw("Incorrect number or type of arguments"))},
fi:function(a,b,c,d,e,f,g){return this.fj(a,b,c,d,e,f,g,null,null,null)},
jk:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
jl:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
jm:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aj:function(a,b,c,d){return a.texParameteri(b,c,d)},
O:function(a,b,c){return a.uniform1f(b,c)},
P:function(a,b,c){return a.uniform1i(b,c)},
A:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fn:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
fo:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c_:function(a,b){return a.useProgram(b)},
lo:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
fs:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$icf:1}
P.ee.prototype={$iee:1}
P.en.prototype={$ien:1}
P.ew.prototype={$iew:1}
P.iE.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return P.bv(this.hI(a,b))},
n:function(a,b,c){H.e(c,"$iD")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){return this.j(a,b)},
hI:function(a,b){return a.item(b)},
$aw:function(){return[[P.D,,,]]},
$ii:1,
$ai:function(){return[[P.D,,,]]},
$ib:1,
$ab:function(){return[[P.D,,,]]},
$aC:function(){return[[P.D,,,]]}}
P.f9.prototype={}
P.fa.prototype={}
O.a3.prototype={
bw:function(a){this.shN(H.d([],[a]))
this.se_(null)
this.sdW(null)
this.se0(null)},
ds:function(a,b,c){var u=H.an(this,"a3",0)
H.n(b,{func:1,ret:P.R,args:[[P.i,u]]})
u={func:1,ret:-1,args:[P.o,[P.i,u]]}
H.n(a,u)
H.n(c,u)
this.se_(b)
this.sdW(a)
this.se0(c)},
b8:function(a,b){return this.ds(a,null,b)},
dZ:function(a){var u
H.l(a,"$ii",[H.an(this,"a3",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dv:function(a,b){var u
H.l(b,"$ii",[H.an(this,"a3",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gX:function(a){var u=this.a
return new J.av(u,u.length,0,[H.r(u,0)])},
N:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.an(this,"a3",0)
H.A(b,u)
u=[u]
if(this.dZ(H.d([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.dv(s,H.d([b],u))}},
ah:function(a,b){var u,t
H.l(b,"$ii",[H.an(this,"a3",0)],"$ai")
if(this.dZ(b)){u=this.a
t=u.length
C.a.ah(u,b)
this.dv(t,b)}},
shN:function(a){this.a=H.l(a,"$ib",[H.an(this,"a3",0)],"$ab")},
se_:function(a){this.b=H.n(a,{func:1,ret:P.R,args:[[P.i,H.an(this,"a3",0)]]})},
sdW:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.an(this,"a3",0)]]})},
se0:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.an(this,"a3",0)]]})},
$ii:1}
O.cH.prototype={
gk:function(a){return this.a.length},
gt:function(){var u=this.b
if(u==null){u=D.L()
this.b=u}return u},
h_:function(a){var u=this.b
if(u!=null)u.G(a)},
aU:function(){return this.h_(null)},
ga5:function(a){var u=this.a
if(u.length>0)return C.a.gaG(u)
else return V.bN()},
bW:function(a){var u=this.a
if(a==null)C.a.h(u,V.bN())
else C.a.h(u,a)
this.aU()},
aQ:function(){var u=this.a
if(u.length>0){u.pop()
this.aU()}},
sck:function(a){this.a=H.l(a,"$ib",[V.ax],"$ab")}}
E.fQ.prototype={}
E.ar.prototype={
sc6:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gt().U(0,this.gf9())
t=this.c
if(t!=null)t.gt().h(0,this.gf9())
s=new D.O("shape",u,this.c,this,[F.ef])
s.b=!0
this.b3(s)}},
ak:function(a,b){var u
for(u=this.y.a,u=new J.av(u,u.length,0,[H.r(u,0)]);u.D();)u.d.ak(0,b)},
ai:function(a){var u,t
u=a.dx
C.a.h(u.a,u.ga5(u))
u.aU()
a.d9(this.f)
u=a.dy
t=(u&&C.a).gaG(u)
if(t!=null&&this.d!=null)t.dg(a,this)
for(u=this.y.a,u=new J.av(u,u.length,0,[H.r(u,0)]);u.D();)u.d.ai(a)
a.d8()
a.dx.aQ()},
gt:function(){var u=this.z
if(u==null){u=D.L()
this.z=u}return u},
b3:function(a){var u=this.z
if(u!=null)u.G(a)},
an:function(){return this.b3(null)},
fa:function(a){H.e(a,"$iz")
this.e=null
this.b3(a)},
kY:function(){return this.fa(null)},
f8:function(a){this.b3(H.e(a,"$iz"))},
kV:function(){return this.f8(null)},
kU:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ii",[E.ar],"$ai")
for(u=b.length,t=this.gf7(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.I)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c4()
o.sar(null)
o.saZ(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sar(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.an()},
kX:function(a,b){var u,t
H.l(b,"$ii",[E.ar],"$ai")
for(u=b.gX(b),t=this.gf7();u.D();)u.gM(u).gt().U(0,t)
this.an()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sh0:function(a,b){this.y=H.l(b,"$ia3",[E.ar],"$aa3")},
$ibd:1}
E.ik.prototype={
fX:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.aq(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cH()
t=[V.ax]
u.sck(H.d([],t))
u.b=null
u.gt().h(0,new E.il(this))
this.cy=u
u=new O.cH()
u.sck(H.d([],t))
u.b=null
u.gt().h(0,new E.im(this))
this.db=u
u=new O.cH()
u.sck(H.d([],t))
u.b=null
u.gt().h(0,new E.io(this))
this.dx=u
this.sjj(H.d([],[O.bP]))
u=this.dy;(u&&C.a).h(u,null)
this.sjf(new H.aS([P.f,A.cR]))},
gl6:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.ga5(u)
t=this.db
t=u.v(0,t.ga5(t))
this.z=t
u=t}return u},
gfe:function(){var u,t
u=this.ch
if(u==null){u=this.gl6()
t=this.dx
t=u.v(0,t.ga5(t))
this.ch=t
u=t}return u},
d9:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaG(u):a;(u&&C.a).h(u,t)},
d8:function(){var u=this.dy
if(u.length>1)u.pop()},
cC:function(a){var u=a.b
if(u.length===0)throw H.c(P.v("May not cache a shader with no name."))
if(this.fr.bC(0,u))throw H.c(P.v('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.n(0,u,a)},
sjj:function(a){this.dy=H.l(a,"$ib",[O.bP],"$ab")},
sjf:function(a){this.fr=H.l(a,"$iD",[P.f,A.cR],"$aD")}}
E.il.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.z=null
u.ch=null},
$S:8}
E.im.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:8}
E.io.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.ch=null
u.cx=null},
$S:8}
E.es.prototype={
dA:function(a){H.e(a,"$iz")
this.fg()},
dz:function(){return this.dA(null)},
gkC:function(){var u,t,s
u=Date.now()
t=C.e.ac(P.lQ(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.aq(u,!1)
return s/t},
e3:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.v()
if(typeof u!=="number")return H.F(u)
s=C.f.cY(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.v()
r=C.f.cY(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.mh(C.y,this.gld())}},
fg:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iZ(this),{func:1,ret:-1,args:[P.a5]})
C.O.hw(u)
C.O.j1(u,W.mN(t,P.a5))}},
la:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.e3()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aq(r,!1)
s.y=P.lQ(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aU()
r=s.db
C.a.sk(r.a,0)
r.aU()
r=s.dx
C.a.sk(r.a,0)
r.aU()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.ai(this.e)}s=this.z
if(s!=null)s.G(null)}catch(q){u=H.ao(q)
t=H.cq(q)
P.aA("Error: "+H.m(u))
P.aA("Stack: "+H.m(t))
throw H.c(u)}}}
E.iZ.prototype={
$1:function(a){var u
H.pm(a)
u=this.a
if(u.ch){u.ch=!1
u.la()}},
$S:32}
Z.eD.prototype={$ipw:1}
Z.dz.prototype={
a3:function(a){var u,t,s
try{t=a.a
C.b.ez(t,this.e)
C.b.lo(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ao(s)
t=P.v('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.m(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.m(this.e)+"]"}}
Z.d5.prototype={$ipx:1}
Z.bZ.prototype={
az:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a3:function(a){var u,t
u=this.a
C.b.aD(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].a3(a)},
ao:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.ew(s,u[t].e)
C.b.aD(s,this.a.a,null)},
ai:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.h(r,s)
q=r[s]
r=q.c
p=r.a
C.b.aD(t,p,r.b)
C.b.kp(t,q.a,q.b,5123,0)
C.b.aD(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.f]
t=H.d([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.I)(s),++q)C.a.h(t,s[q].i(0))
p=H.d([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.aO(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(t,", ")+"\nAttrs:   "+C.a.m(p,", ")},
shG:function(a){this.b=H.l(a,"$ib",[Z.c8],"$ab")},
$ipF:1}
Z.c8.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cc(this.c)+"'")+"]"}}
Z.b1.prototype={
gdt:function(a){var u,t
u=this.a
t=(u&$.aF().a)!==0?3:0
if((u&$.bz().a)!==0)t+=3
if((u&$.by().a)!==0)t+=3
if((u&$.b2().a)!==0)t+=2
if((u&$.bA().a)!==0)t+=3
if((u&$.dr().a)!==0)t+=3
if((u&$.ds().a)!==0)t+=4
if((u&$.ct().a)!==0)++t
return(u&$.bx().a)!==0?t+4:t},
k7:function(a){var u,t,s
u=$.aF()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bz()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.by()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b2()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bA()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.dr()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.ds()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.ct()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bx()
if((t&u.a)!==0)if(s===a)return u
return $.nf()},
B:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b1))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.d([],[P.f])
t=this.a
if((t&$.aF().a)!==0)C.a.h(u,"Pos")
if((t&$.bz().a)!==0)C.a.h(u,"Norm")
if((t&$.by().a)!==0)C.a.h(u,"Binm")
if((t&$.b2().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bA().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dr().a)!==0)C.a.h(u,"Clr3")
if((t&$.ds().a)!==0)C.a.h(u,"Clr4")
if((t&$.ct().a)!==0)C.a.h(u,"Weight")
if((t&$.bx().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fT.prototype={}
D.c4.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.z]}
H.n(b,u)
if(this.a==null)this.sar(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
U:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[D.z]})
u=this.a
u=u==null?null:C.a.a_(u,b)
if(u===!0){u=this.a
t=(u&&C.a).U(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.a_(u,b)
if(u===!0){u=this.b
t=(u&&C.a).U(u,b)||t}return t},
G:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.z(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.J(P.le(t,!0,{func:1,ret:-1,args:[D.z]}),new D.hf(u))
t=this.b
if(t!=null){this.saZ(H.d([],[{func:1,ret:-1,args:[D.z]}]))
C.a.J(t,new D.hg(u))}return!0},
cR:function(){return this.G(null)},
le:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.G(t)}}},
aS:function(a){return this.le(a,!0,!1)},
sar:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")},
saZ:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")}}
D.hf.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:30}
D.hg.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:30}
D.z.prototype={}
D.bJ.prototype={}
D.bK.prototype={}
D.O.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.dA.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dA))return!1
if(this.a!=b.a)return!1
if(!this.b.B(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.dU.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dU))return!1
if(this.a!=b.a)return!1
if(!this.b.B(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.hA.prototype={
l3:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
l_:function(a){this.c=a.b
this.d.U(0,a.a)
return!1},
siQ:function(a){this.d=H.l(a,"$imc",[P.o],"$amc")}}
X.dY.prototype={}
X.hI.prototype={
bb:function(a,b){var u,t,s,r,q,p,o,n
u=new P.aq(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.v()
q=b.b
p=this.ch
if(typeof q!=="number")return q.v()
o=new V.aa(t.a+s*r,t.b+q*p)
p=this.a.gb2()
n=new X.bs(a,V.bt(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
d7:function(a,b){this.r=a.a
return!1},
bn:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fF()
if(typeof u!=="number")return u.c1()
this.r=(u&~t)>>>0
return!1},
bm:function(a,b){var u=this.d
if(u==null)return!1
u.G(this.bb(a,b))
return!0},
l4:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gb2()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.v()
o=a.b
n=this.cy
if(typeof o!=="number")return o.v()
r=new X.cJ(new V.W(q*p,o*n),t,s,new P.aq(r,!1),this)
r.b=!0
u.G(r)
return!0},
io:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.aq(Date.now(),!1)
t=this.f
s=new X.dY(c,a,this.a.gb2(),b,u,this)
s.b=!0
t.G(s)
this.y=u
this.x=V.bt()}}
X.aC.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aC))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bs.prototype={}
X.i_.prototype={
cg:function(a,b,c){var u,t,s
u=new P.aq(Date.now(),!1)
t=this.a.gb2()
s=new X.bs(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
d7:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.G(this.cg(a,b,!0))
return!0},
bn:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fF()
if(typeof u!=="number")return u.c1()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.G(this.cg(a,b,!0))
return!0},
bm:function(a,b){var u=this.d
if(u==null)return!1
u.G(this.cg(a,b,!1))
return!0},
l5:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gb2()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.v()
p=a.b
o=this.ch
if(typeof p!=="number")return p.v()
s=new X.cJ(new V.W(r*q,p*o),t,b,new P.aq(s,!1),this)
s.b=!0
u.G(s)
return!0},
gey:function(){var u=this.b
if(u==null){u=D.L()
this.b=u}return u},
gbZ:function(){var u=this.c
if(u==null){u=D.L()
this.c=u}return u},
gf6:function(){var u=this.d
if(u==null){u=D.L()
this.d=u}return u}}
X.cJ.prototype={}
X.ig.prototype={}
X.eu.prototype={}
X.j2.prototype={
bb:function(a,b){var u,t,s,r
H.l(a,"$ib",[V.aa],"$ab")
u=new P.aq(Date.now(),!1)
t=a.length>0?a[0]:V.bt()
s=this.a.gb2()
r=new X.eu(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
l2:function(a){var u
H.l(a,"$ib",[V.aa],"$ab")
u=this.b
if(u==null)return!1
u.G(this.bb(a,!0))
return!0},
l0:function(a){var u
H.l(a,"$ib",[V.aa],"$ab")
u=this.c
if(u==null)return!1
u.G(this.bb(a,!0))
return!0},
l1:function(a){var u
H.l(a,"$ib",[V.aa],"$ab")
u=this.d
if(u==null)return!1
u.G(this.bb(a,!1))
return!0}}
X.ez.prototype={
gb2:function(){var u=this.a
return V.m9(0,0,C.q.geq(u).c,C.q.geq(u).d)},
dM:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dU(u,new X.aC(t,a.altKey,a.shiftKey))},
b_:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aC(t,a.altKey,a.shiftKey)},
cB:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aC(t,a.altKey,a.shiftKey)},
aL:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.u()
q=u.top
if(typeof s!=="number")return s.u()
return new V.aa(t-r,s-q)},
bd:function(a){return new V.W(a.movementX,a.movementY)},
cv:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.d([],[V.aa])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.I)(s),++q){p=s[q]
o=C.f.a6(p.pageX)
C.f.a6(p.pageY)
n=u.left
C.f.a6(p.pageX)
C.a.h(t,new V.aa(o-n,C.f.a6(p.pageY)-u.top))}return t},
aJ:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.dA(u,new X.aC(t,a.altKey,a.shiftKey))},
cl:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.u()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.u()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
ih:function(a){this.f=!0},
i3:function(a){this.f=!1},
i9:function(a){H.e(a,"$ia7")
if(this.f&&this.cl(a))a.preventDefault()},
il:function(a){var u
H.e(a,"$ib9")
if(!this.f)return
u=this.dM(a)
this.b.l3(u)},
ij:function(a){var u
H.e(a,"$ib9")
if(!this.f)return
u=this.dM(a)
this.b.l_(u)},
iq:function(a){var u,t,s,r
H.e(a,"$ia7")
u=this.a
u.focus()
this.f=!0
this.b_(a)
if(this.x){t=this.aJ(a)
s=this.bd(a)
if(this.d.d7(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aJ(a)
r=this.aL(a)
if(this.c.d7(t,r))a.preventDefault()},
iu:function(a){var u,t,s
H.e(a,"$ia7")
this.b_(a)
u=this.aJ(a)
if(this.x){t=this.bd(a)
if(this.d.bn(u,t))a.preventDefault()
return}if(this.r)return
s=this.aL(a)
if(this.c.bn(u,s))a.preventDefault()},
ie:function(a){var u,t,s
H.e(a,"$ia7")
if(!this.cl(a)){this.b_(a)
u=this.aJ(a)
if(this.x){t=this.bd(a)
if(this.d.bn(u,t))a.preventDefault()
return}if(this.r)return
s=this.aL(a)
if(this.c.bn(u,s))a.preventDefault()}},
is:function(a){var u,t,s
H.e(a,"$ia7")
this.b_(a)
u=this.aJ(a)
if(this.x){t=this.bd(a)
if(this.d.bm(u,t))a.preventDefault()
return}if(this.r)return
s=this.aL(a)
if(this.c.bm(u,s))a.preventDefault()},
ib:function(a){var u,t,s
H.e(a,"$ia7")
if(!this.cl(a)){this.b_(a)
u=this.aJ(a)
if(this.x){t=this.bd(a)
if(this.d.bm(u,t))a.preventDefault()
return}if(this.r)return
s=this.aL(a)
if(this.c.bm(u,s))a.preventDefault()}},
iw:function(a){var u,t
H.e(a,"$ibk")
this.b_(a)
u=new V.W((a&&C.N).gkm(a),C.N.gkn(a)).C(0,180)
if(this.x){if(this.d.l4(u))a.preventDefault()
return}if(this.r)return
t=this.aL(a)
if(this.c.l5(u,t))a.preventDefault()},
iy:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aJ(this.y)
s=this.aL(this.y)
this.d.io(t,s,u)}},
iO:function(a){var u
H.e(a,"$ib_")
this.a.focus()
this.f=!0
this.cB(a)
u=this.cv(a)
if(this.e.l2(u))a.preventDefault()},
iK:function(a){var u
H.e(a,"$ib_")
this.cB(a)
u=this.cv(a)
if(this.e.l0(u))a.preventDefault()},
iM:function(a){var u
H.e(a,"$ib_")
this.cB(a)
u=this.cv(a)
if(this.e.l1(u))a.preventDefault()},
shx:function(a){this.z=H.l(a,"$ib",[[P.cT,P.Q]],"$ab")}}
D.bG.prototype={
gt:function(){var u=this.d
if(u==null){u=D.L()
this.d=u}return u},
aI:function(a){var u
H.e(a,"$iz")
u=this.d
if(u!=null)u.G(a)},
h4:function(){return this.aI(null)},
$ia9:1,
$ibd:1}
D.a9.prototype={$ibd:1}
D.dV.prototype={
gt:function(){var u=this.Q
if(u==null){u=D.L()
this.Q=u}return u},
aI:function(a){var u=this.Q
if(u!=null)u.G(a)},
dY:function(a){var u
H.e(a,"$iz")
u=this.ch
if(u!=null)u.G(a)},
im:function(){return this.dY(null)},
iA:function(a){var u,t,s
H.l(a,"$ii",[D.a9],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.I)(a),++t){s=a[t]
if(s==null||this.h2(s))return!1}return!0},
hY:function(a,b){var u,t,s,r,q,p,o,n
u=D.a9
H.l(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gdX(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.I)(b),++p){o=H.e(b[p],"$ia9")
if(o instanceof D.bG)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.c4()
n.sar(null)
n.saZ(null)
n.c=null
n.d=0
o.d=n}H.n(s,r)
if(n.a==null)n.sar(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bJ(a,b,this,[u])
u.b=!0
this.aI(u)},
iE:function(a,b){var u,t,s,r
u=D.a9
H.l(b,"$ii",[u],"$ai")
for(t=b.gX(b),s=this.gdX();t.D();){r=t.gM(t)
C.a.U(this.e,r)
r.gt().U(0,s)}u=new D.bK(a,b,this,[u])
u.b=!0
this.aI(u)},
h2:function(a){var u=C.a.a_(this.e,a)
return u},
shu:function(a){this.e=H.l(a,"$ib",[D.bG],"$ab")},
siP:function(a){this.f=H.l(a,"$ib",[D.e8],"$ab")},
sjh:function(a){this.r=H.l(a,"$ib",[D.ei],"$ab")},
sjv:function(a){this.x=H.l(a,"$ib",[D.ep],"$ab")},
sjw:function(a){this.y=H.l(a,"$ib",[D.eq],"$ab")},
sjx:function(a){this.z=H.l(a,"$ib",[D.er],"$ab")},
$ai:function(){return[D.a9]},
$aa3:function(){return[D.a9]}}
D.e8.prototype={$ia9:1,$ibd:1}
D.ei.prototype={$ia9:1,$ibd:1}
D.ep.prototype={$ia9:1,$ibd:1}
D.eq.prototype={$ia9:1,$ibd:1}
D.er.prototype={$ia9:1,$ibd:1}
V.a4.prototype={
q:function(a,b){var u,t,s
u=C.f.q(this.a,b.gdd())
t=C.f.q(this.b,b.gc4())
s=C.f.q(this.c,b.gcH())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a4(u,t,s)},
u:function(a,b){var u,t,s
u=C.f.u(this.a,b.gdd())
t=C.f.u(this.b,b.gc4())
s=C.f.u(this.c,b.gcH())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a4(u,t,s)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.V().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Z(this.a,3,0)+", "+V.Z(this.b,3,0)+", "+V.Z(this.c,3,0)+"]"}}
V.aw.prototype={
q:function(a,b){var u,t,s,r
u=C.f.q(this.a,b.gdd())
t=C.f.q(this.b,b.gc4())
s=C.f.q(this.c,b.gcH())
r=C.f.q(this.d,b.gk6(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aw(u,t,s,r)},
u:function(a,b){var u,t,s,r
u=C.f.u(this.a,b.gdd())
t=C.f.u(this.b,b.gc4())
s=C.f.u(this.c,b.gcH())
r=C.f.u(this.d,b.gk6(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aw(u,t,s,r)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aw))return!1
u=b.a
t=$.V().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Z(this.a,3,0)+", "+V.Z(this.b,3,0)+", "+V.Z(this.c,3,0)+", "+V.Z(this.d,3,0)+"]"}}
V.hd.prototype={}
V.cG.prototype={
a9:function(a,b){var u=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.B])
return u},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cG))return!1
u=b.a
t=$.V().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
if(!(Math.abs(b.e-this.e)<t))return!1
if(!(Math.abs(b.f-this.f)<t))return!1
if(!(Math.abs(b.r-this.r)<t))return!1
if(!(Math.abs(b.x-this.x)<t))return!1
if(!(Math.abs(b.y-this.y)<t))return!1
return!0},
i:function(a){var u,t,s,r,q,p,o,n
u=[P.B]
t=V.co(H.d([this.a,this.d,this.r],u),3,0)
s=V.co(H.d([this.b,this.e,this.x],u),3,0)
r=V.co(H.d([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.h(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.h(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.h(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.h(t,1)
n=" "+t[1]+", "
if(1>=p)return H.h(s,1)
n=n+s[1]+", "
if(1>=o)return H.h(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.h(t,2)
u=" "+t[2]+", "
if(2>=p)return H.h(s,2)
u=u+s[2]+", "
if(2>=o)return H.h(r,2)
return n+(u+r[2]+"]")}}
V.ax.prototype={
a9:function(a,b){var u=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.B])
return u},
d2:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=this.f
s=this.b
r=this.e
q=u*t-s*r
p=this.r
o=this.c
n=u*p-o*r
m=this.x
l=this.d
k=u*m-l*r
j=s*p-o*t
i=s*m-l*t
h=o*m-l*p
g=this.y
f=this.cy
e=this.z
d=this.cx
c=g*f-e*d
b=this.db
a=this.Q
a0=g*b-a*d
a1=this.dx
a2=this.ch
a3=g*a1-a2*d
a4=e*b-a*f
a5=e*a1-a2*f
a6=a*a1-a2*b
a7=q*a6-n*a5+k*a4+j*a3-i*a0+h*c
if(Math.abs(a7-0)<$.V().a)return V.bN()
a8=1/a7
a9=-r
b0=-d
return V.bc((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
v:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=b2.a
s=this.b
r=b2.e
q=this.c
p=b2.y
o=this.d
n=b2.cx
m=b2.b
l=b2.f
k=b2.z
j=b2.cy
i=b2.c
h=b2.r
g=b2.Q
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
a4=this.z
a5=this.Q
a6=this.ch
a7=this.cx
a8=this.cy
a9=this.db
b0=this.dx
return V.bc(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
dj:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.T(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
bs:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.a8(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ax))return!1
u=b.a
t=$.V().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
if(!(Math.abs(b.e-this.e)<t))return!1
if(!(Math.abs(b.f-this.f)<t))return!1
if(!(Math.abs(b.r-this.r)<t))return!1
if(!(Math.abs(b.x-this.x)<t))return!1
if(!(Math.abs(b.y-this.y)<t))return!1
if(!(Math.abs(b.z-this.z)<t))return!1
if(!(Math.abs(b.Q-this.Q)<t))return!1
if(!(Math.abs(b.ch-this.ch)<t))return!1
if(!(Math.abs(b.cx-this.cx)<t))return!1
if(!(Math.abs(b.cy-this.cy)<t))return!1
if(!(Math.abs(b.db-this.db)<t))return!1
if(!(Math.abs(b.dx-this.dx)<t))return!1
return!0},
i:function(a){return this.Y()},
eW:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.B]
t=V.co(H.d([this.a,this.e,this.y,this.cx],u),b,c)
s=V.co(H.d([this.b,this.f,this.z,this.cy],u),b,c)
r=V.co(H.d([this.c,this.r,this.Q,this.db],u),b,c)
q=V.co(H.d([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.h(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.h(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.h(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.h(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.h(t,1)
l=l+t[1]+", "
if(1>=o)return H.h(s,1)
l=l+s[1]+", "
if(1>=n)return H.h(r,1)
l=l+r[1]+", "
if(1>=m)return H.h(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.h(t,2)
p=p+t[2]+", "
if(2>=o)return H.h(s,2)
p=p+s[2]+", "
if(2>=n)return H.h(r,2)
p=p+r[2]+", "
if(2>=m)return H.h(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.h(t,3)
l=l+t[3]+", "
if(3>=o)return H.h(s,3)
l=l+s[3]+", "
if(3>=n)return H.h(r,3)
l=l+r[3]+", "
if(3>=m)return H.h(q,3)
return p+(l+q[3]+"]")},
Y:function(){return this.eW("",3,0)},
K:function(a){return this.eW(a,3,0)}}
V.aa.prototype={
q:function(a,b){return new V.aa(this.a+b.a,this.b+b.b)},
u:function(a,b){return new V.aa(this.a-b.a,this.b-b.b)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.V().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.Z(this.a,3,0)+", "+V.Z(this.b,3,0)+"]"}}
V.a8.prototype={
q:function(a,b){return new V.a8(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.a8(this.a-b.a,this.b-b.b,this.c-b.c)},
v:function(a,b){return new V.a8(this.a*b,this.b*b,this.c*b)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a8))return!1
u=b.a
t=$.V().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Z(this.a,3,0)+", "+V.Z(this.b,3,0)+", "+V.Z(this.c,3,0)+"]"}}
V.bf.prototype={
q:function(a,b){return new V.bf(C.e.q(this.a,b.glq(b)),C.e.q(this.b,b.glr(b)),C.e.q(this.c,b.gls(b)),C.e.q(this.d,b.glp(b)))},
u:function(a,b){return new V.bf(C.e.u(this.a,b.glq(b)),C.e.u(this.b,b.glr(b)),C.e.u(this.c,b.gls(b)),C.e.u(this.d,b.glp(b)))},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bf))return!1
u=b.a
t=$.V().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Z(this.a,3,0)+", "+V.Z(this.b,3,0)+", "+V.Z(this.c,3,0)+", "+V.Z(this.d,3,0)+"]"}}
V.ec.prototype={
gam:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ec))return!1
u=b.a
t=$.V().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Z(this.a,3,0)+", "+V.Z(this.b,3,0)+", "+V.Z(this.c,3,0)+", "+V.Z(this.d,3,0)+"]"}}
V.W.prototype={
d3:function(a){return Math.sqrt(this.F(this))},
F:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.F(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.F(r)
return u*t+s*r},
q:function(a,b){var u,t,s
u=this.a
t=b.gkr(b)
if(typeof u!=="number")return u.q()
t=C.f.q(u,t)
u=this.b
s=b.gks(b)
if(typeof u!=="number")return u.q()
return new V.W(t,C.f.q(u,s))},
u:function(a,b){var u,t,s
u=this.a
t=b.gkr(b)
if(typeof u!=="number")return u.u()
t=C.f.u(u,t)
u=this.b
s=b.gks(b)
if(typeof u!=="number")return u.u()
return new V.W(t,C.f.u(u,s))},
v:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.W(u*b,t*b)},
C:function(a,b){var u,t
if(Math.abs(b-0)<$.V().a){u=$.mo
if(u==null){u=new V.W(0,0)
$.mo=u}return u}u=this.a
if(typeof u!=="number")return u.C()
t=this.b
if(typeof t!=="number")return t.C()
return new V.W(u/b,t/b)},
B:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=this.a
s=$.V()
s.toString
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.F(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.F(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.Z(this.a,3,0)+", "+V.Z(this.b,3,0)+"]"}}
V.T.prototype={
d3:function(a){return Math.sqrt(this.F(this))},
F:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aN:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.T(u*t-s*r,s*q-p*t,p*r-u*q)},
q:function(a,b){return new V.T(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.T(this.a-b.a,this.b-b.b,this.c-b.c)},
V:function(a){return new V.T(-this.a,-this.b,-this.c)},
v:function(a,b){return new V.T(this.a*b,this.b*b,this.c*b)},
C:function(a,b){if(Math.abs(b-0)<$.V().a)return V.d4()
return new V.T(this.a/b,this.b/b,this.c/b)},
f4:function(){var u=$.V().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
u=b.a
t=$.V().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Z(this.a,3,0)+", "+V.Z(this.b,3,0)+", "+V.Z(this.c,3,0)+"]"}}
U.fU.prototype={
cb:function(a){var u=V.pv(a,this.c,this.b)
return u},
gt:function(){var u=this.y
if(u==null){u=D.L()
this.y=u}return u},
T:function(a){var u=this.y
if(u!=null)u.G(a)},
sdl:function(a,b){},
sd4:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.V().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.cb(t)}u=new D.O("maximumLocation",u,this.b,this,[P.B])
u.b=!0
this.T(u)}},
sd6:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.V().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.cb(t)}u=new D.O("minimumLocation",u,this.c,this,[P.B])
u.b=!0
this.T(u)}},
sal:function(a,b){var u
b=this.cb(b)
u=this.d
if(!(Math.abs(u-b)<$.V().a)){this.d=b
u=new D.O("location",u,b,this,[P.B])
u.b=!0
this.T(u)}},
sd5:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.V().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.O("maximumVelocity",u,a,this,[P.B])
u.b=!0
this.T(u)}},
sZ:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.V().a)){this.f=a
u=new D.O("velocity",u,a,this,[P.B])
u.b=!0
this.T(u)}},
scO:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.V().a)){this.x=a
u=new D.O("dampening",u,a,this,[P.B])
u.b=!0
this.T(u)}},
ak:function(a,b){var u,t,s,r,q
u=this.f
t=$.V().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sal(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.V().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sZ(s)}}}
U.dC.prototype={
gt:function(){var u=this.b
if(u==null){u=D.L()
this.b=u}return u},
b6:function(a,b,c){return this.a},
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dC))return!1
return J.Y(this.a,b.a)},
i:function(a){return"Constant: "+this.a.K("          ")}}
U.cE.prototype={
gt:function(){var u=this.e
if(u==null){u=D.L()
this.e=u}return u},
T:function(a){var u
H.e(a,"$iz")
u=this.e
if(u!=null)u.G(a)},
af:function(){return this.T(null)},
hW:function(a,b){var u,t,s,r,q,p,o,n
u=U.aj
H.l(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gaX(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.I)(b),++p){o=b[p]
if(o!=null){n=o.gt()
n.toString
H.n(s,r)
if(n.a==null)n.sar(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bJ(a,b,this,[u])
u.b=!0
this.T(u)},
iC:function(a,b){var u,t,s
u=U.aj
H.l(b,"$ii",[u],"$ai")
for(t=b.gX(b),s=this.gaX();t.D();)t.gM(t).gt().U(0,s)
u=new D.bK(a,b,this,[u])
u.b=!0
this.T(u)},
b6:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.a0()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.av(u,u.length,0,[H.r(u,0)]),s=null;u.D();){t=u.d
if(t!=null){r=t.b6(0,b,c)
if(r!=null)s=s==null?r:r.v(0,s)}}this.f=s==null?V.bN():s
u=this.e
if(u!=null)u.aS(0)}return this.f},
B:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cE))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.Y(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.aj]},
$aa3:function(){return[U.aj]},
$iaj:1}
U.aj.prototype={}
U.eA.prototype={
gt:function(){var u=this.cy
if(u==null){u=D.L()
this.cy=u}return u},
T:function(a){var u
H.e(a,"$iz")
u=this.cy
if(u!=null)u.G(a)},
af:function(){return this.T(null)},
bf:function(a){if(this.a!=null)return!1
this.a=a
a.c.gey().h(0,this.gcm())
this.a.c.gf6().h(0,this.gco())
this.a.c.gbZ().h(0,this.gcq())
return!0},
cn:function(a){H.e(a,"$iz")
if(!J.Y(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
cp:function(a){var u,t,s,r,q,p,o
a=H.j(H.e(a,"$iz"),"$ibs")
if(!this.y)return
if(this.x){u=a.d.u(0,a.y)
u=new V.W(u.a,u.b)
u=u.F(u)
t=this.r
if(typeof t!=="number")return H.F(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.u(0,a.y)
u=new V.W(t.a,t.b).v(0,2).C(0,u.gam())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.v()
s=this.e
if(typeof s!=="number")return H.F(s)
t.sZ(u*10*s)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=new V.W(s.a,s.b).v(0,2).C(0,u.gam())
s=this.b
q=r.a
if(typeof q!=="number")return q.V()
p=this.e
if(typeof p!=="number")return H.F(p)
o=this.z
if(typeof o!=="number")return H.F(o)
s.sal(0,-q*p+o)
this.b.sZ(0)
t=t.u(0,a.z)
this.Q=new V.W(t.a,t.b).v(0,2).C(0,u.gam())}this.af()},
cr:function(a){var u,t,s
H.e(a,"$iz")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.F(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.v()
s=this.e
if(typeof s!=="number")return H.F(s)
u.sZ(t*10*s)
this.af()}},
b6:function(a,b,c){var u,t,s,r,q
u=this.ch
t=b.e
if(typeof u!=="number")return u.a0()
if(u<t){this.ch=t
s=b.y
this.b.ak(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.bc(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$iaj:1}
U.eB.prototype={
gt:function(){var u=this.fx
if(u==null){u=D.L()
this.fx=u}return u},
T:function(a){var u
H.e(a,"$iz")
u=this.fx
if(u!=null)u.G(a)},
af:function(){return this.T(null)},
bf:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gey().h(0,this.gcm())
this.a.c.gf6().h(0,this.gco())
this.a.c.gbZ().h(0,this.gcq())
u=this.a.d
t=u.f
if(t==null){t=D.L()
u.f=t
u=t}else u=t
u.h(0,this.ghO())
u=this.a.d
t=u.d
if(t==null){t=D.L()
u.d=t
u=t}else u=t
u.h(0,this.ghQ())
u=this.a.e
t=u.b
if(t==null){t=D.L()
u.b=t
u=t}else u=t
u.h(0,this.gjs())
u=this.a.e
t=u.d
if(t==null){t=D.L()
u.d=t
u=t}else u=t
u.h(0,this.gjq())
u=this.a.e
t=u.c
if(t==null){t=D.L()
u.c=t
u=t}else u=t
u.h(0,this.gjo())
return!0},
aB:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.V()
u=-u}if(this.r){if(typeof t!=="number")return t.V()
t=-t}return new V.W(u,t)},
cn:function(a){a=H.j(H.e(a,"$iz"),"$ibs")
if(!J.Y(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
cp:function(a){var u,t,s,r,q,p,o
a=H.j(H.e(a,"$iz"),"$ibs")
if(!this.cx)return
if(this.ch){u=a.d.u(0,a.y)
u=new V.W(u.a,u.b)
u=u.F(u)
t=this.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.u(0,a.y)
u=this.aB(new V.W(t.a,t.b).v(0,2).C(0,u.gam()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.V()
s=this.y
if(typeof s!=="number")return H.F(s)
t.sZ(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.V()
t=this.x
if(typeof t!=="number")return H.F(t)
s.sZ(-u*10*t)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=this.aB(new V.W(s.a,s.b).v(0,2).C(0,u.gam()))
s=this.c
q=r.a
if(typeof q!=="number")return q.V()
p=this.y
if(typeof p!=="number")return H.F(p)
o=this.cy
if(typeof o!=="number")return H.F(o)
s.sal(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.V()
q=this.x
if(typeof q!=="number")return H.F(q)
s=this.db
if(typeof s!=="number")return H.F(s)
o.sal(0,-p*q+s)
this.b.sZ(0)
this.c.sZ(0)
t=t.u(0,a.z)
this.dx=this.aB(new V.W(t.a,t.b).v(0,2).C(0,u.gam()))}this.af()},
cr:function(a){var u,t,s
H.e(a,"$iz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.F(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.V()
s=this.y
if(typeof s!=="number")return H.F(s)
u.sZ(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.V()
u=this.x
if(typeof u!=="number")return H.F(u)
s.sZ(-t*10*u)
this.af()}},
hP:function(a){if(H.j(H.e(a,"$iz"),"$idY").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hR:function(a){var u,t,s,r,q,p,o
a=H.j(H.e(a,"$iz"),"$ibs")
if(!J.Y(this.d,a.x.b))return
u=a.c
t=a.d
s=t.u(0,a.y)
r=this.aB(new V.W(s.a,s.b).v(0,2).C(0,u.gam()))
s=this.c
q=r.a
if(typeof q!=="number")return q.V()
p=this.y
if(typeof p!=="number")return H.F(p)
o=this.cy
if(typeof o!=="number")return H.F(o)
s.sal(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.V()
q=this.x
if(typeof q!=="number")return H.F(q)
s=this.db
if(typeof s!=="number")return H.F(s)
o.sal(0,-p*q+s)
this.b.sZ(0)
this.c.sZ(0)
t=t.u(0,a.z)
this.dx=this.aB(new V.W(t.a,t.b).v(0,2).C(0,u.gam()))
this.af()},
jt:function(a){H.e(a,"$iz")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
jr:function(a){var u,t,s,r,q,p,o
a=H.j(H.e(a,"$iz"),"$ieu")
if(!this.cx)return
if(this.ch){u=a.d.u(0,a.y)
u=new V.W(u.a,u.b)
u=u.F(u)
t=this.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.u(0,a.y)
u=this.aB(new V.W(t.a,t.b).v(0,2).C(0,u.gam()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.V()
s=this.y
if(typeof s!=="number")return H.F(s)
t.sZ(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.V()
t=this.x
if(typeof t!=="number")return H.F(t)
s.sZ(-u*10*t)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=this.aB(new V.W(s.a,s.b).v(0,2).C(0,u.gam()))
s=this.c
q=r.a
if(typeof q!=="number")return q.V()
p=this.y
if(typeof p!=="number")return H.F(p)
o=this.cy
if(typeof o!=="number")return H.F(o)
s.sal(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.V()
q=this.x
if(typeof q!=="number")return H.F(q)
s=this.db
if(typeof s!=="number")return H.F(s)
o.sal(0,-p*q+s)
this.b.sZ(0)
this.c.sZ(0)
t=t.u(0,a.z)
this.dx=this.aB(new V.W(t.a,t.b).v(0,2).C(0,u.gam()))}this.af()},
jp:function(a){var u,t,s
H.e(a,"$iz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.F(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.V()
s=this.y
if(typeof s!=="number")return H.F(s)
u.sZ(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.V()
u=this.x
if(typeof u!=="number")return H.F(u)
s.sZ(-t*10*u)
this.af()}},
b6:function(a,b,c){var u,t,s,r,q
u=this.dy
t=b.e
if(typeof u!=="number")return u.a0()
if(u<t){this.dy=t
s=b.y
this.c.ak(0,s)
this.b.ak(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.bc(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.v(0,V.bc(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$iaj:1}
U.eC.prototype={
gt:function(){var u=this.r
if(u==null){u=D.L()
this.r=u}return u},
T:function(a){var u=this.r
if(u!=null)u.G(a)},
bf:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.L()
u.e=t
u=t}else u=t
t=this.ghT()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.L()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
hU:function(a){var u,t,s,r
H.e(a,"$iz")
if(!J.Y(this.b,this.a.b.c))return
H.j(a,"$icJ")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.v()
r=u+t*s
if(u!==r){this.d=r
u=new D.O("zoom",u,r,this,[P.B])
u.b=!0
this.T(u)}},
b6:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.m_(s,s,s,1)}return this.f},
$iaj:1}
M.dB.prototype={
gt:function(){var u=this.f
if(u==null){u=D.L()
this.f=u}return u},
a2:function(a){var u
H.e(a,"$iz")
u=this.f
if(u!=null)u.G(a)},
b9:function(){return this.a2(null)},
iG:function(a,b){var u,t,s,r,q,p,o,n
u=M.aE
H.l(b,"$ii",[u],"$ai")
for(t=b.length,s=this.ga1(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.I)(b),++p){o=b[p]
if(o!=null){n=o.gt()
n.toString
H.n(s,r)
if(n.a==null)n.sar(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bJ(a,b,this,[u])
u.b=!0
this.a2(u)},
iI:function(a,b){var u,t,s
u=M.aE
H.l(b,"$ii",[u],"$ai")
for(t=b.gX(b),s=this.ga1();t.D();)t.gM(t).gt().U(0,s)
u=new D.bK(a,b,this,[u])
u.b=!0
this.a2(u)},
ai:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.av(u,u.length,0,[H.r(u,0)]);u.D();){t=u.d
if(t!=null)t.ai(a)}this.e=!1},
$ai:function(){return[M.aE]},
$aa3:function(){return[M.aE]},
$iaE:1}
M.dD.prototype={
gt:function(){var u=this.f
if(u==null){u=D.L()
this.f=u}return u},
a2:function(a){var u
H.e(a,"$iz")
u=this.f
if(u!=null)u.G(a)},
b9:function(){return this.a2(null)},
sbh:function(a){var u,t
if(a==null)a=new X.ht()
u=this.a
if(u!==a){if(u!=null)u.gt().U(0,this.ga1())
t=this.a
this.a=a
a.gt().h(0,this.ga1())
u=new D.O("camera",t,this.a,this,[X.c_])
u.b=!0
this.a2(u)}},
sbp:function(a,b){var u,t
if(b==null)b=X.lU(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gt().U(0,this.ga1())
t=this.b
this.b=b
b.gt().h(0,this.ga1())
u=new D.O("target",t,this.b,this,[X.cU])
u.b=!0
this.a2(u)}},
sb5:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gt().U(0,this.ga1())
t=this.c
this.c=a
if(a!=null)a.gt().h(0,this.ga1())
u=new D.O("technique",t,this.c,this,[O.bP])
u.b=!0
this.a2(u)}},
ai:function(a){var u
a.d9(this.c)
this.b.a3(a)
this.a.a3(a)
u=this.c
if(u!=null)u.ak(0,a)
this.d.ak(0,a)
this.d.ai(a)
this.a.ao(a)
this.b.ao(a)
a.d8()},
$iaE:1}
M.dJ.prototype={
a2:function(a){var u
H.e(a,"$iz")
u=this.x
if(u!=null)u.G(a)},
b9:function(){return this.a2(null)},
i5:function(a,b){var u,t,s,r,q,p,o,n
u=E.ar
H.l(b,"$ii",[u],"$ai")
for(t=b.length,s=this.ga1(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.I)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.c4()
n.sar(null)
n.saZ(null)
n.c=null
n.d=0
o.z=n}H.n(s,r)
if(n.a==null)n.sar(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bJ(a,b,this,[u])
u.b=!0
this.a2(u)},
i7:function(a,b){var u,t,s
u=E.ar
H.l(b,"$ii",[u],"$ai")
for(t=b.gX(b),s=this.ga1();t.D();)t.gM(t).gt().U(0,s)
u=new D.bK(a,b,this,[u])
u.b=!0
this.a2(u)},
sbh:function(a){var u,t
if(a==null)a=X.m3(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gt().U(0,this.ga1())
t=this.a
this.a=a
a.gt().h(0,this.ga1())
u=new D.O("camera",t,this.a,this,[X.c_])
u.b=!0
this.a2(u)}},
sbp:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gt().U(0,this.ga1())
t=this.b
this.b=b
b.gt().h(0,this.ga1())
u=new D.O("target",t,this.b,this,[X.cU])
u.b=!0
this.a2(u)}},
sb5:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gt().U(0,this.ga1())
t=this.c
this.c=a
if(a!=null)a.gt().h(0,this.ga1())
u=new D.O("technique",t,this.c,this,[O.bP])
u.b=!0
this.a2(u)}},
gt:function(){var u=this.x
if(u==null){u=D.L()
this.x=u}return u},
ai:function(a){var u
a.d9(this.c)
this.b.a3(a)
this.a.a3(a)
u=this.c
if(u!=null)u.ak(0,a)
for(u=this.d.a,u=new J.av(u,u.length,0,[H.r(u,0)]);u.D();)u.d.ak(0,a)
for(u=this.d.a,u=new J.av(u,u.length,0,[H.r(u,0)]);u.D();)u.d.ai(a)
this.a.toString
a.cy.aQ()
a.db.aQ()
this.b.ao(a)
a.d8()},
sho:function(a,b){this.d=H.l(b,"$ia3",[E.ar],"$aa3")},
$iaE:1}
M.aE.prototype={}
A.dx.prototype={}
A.fI.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
kt:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s){r=u[s]
C.b.ez(r.a,r.c)}},
cQ:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s){r=u[s]
C.b.ew(r.a,r.c)}}}
A.dF.prototype={
ag:function(a,b,c){if(c==null||!c.d)C.b.P(b.a,b.d,1)
else{a.fL(c)
C.b.P(b.a,b.d,0)}}}
A.e0.prototype={
fW:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.ak("")
t=a6.fx
if(t){u.a="uniform mat4 objMat;\n"
s="uniform mat4 objMat;\n"}else s=""
r=a6.fy
if(r){s+="uniform mat4 viewObjMat;\n"
u.a=s}s+="uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s+="attribute vec3 posAttr;\n"
u.a=s
q=a6.r1
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=a6.r2
if(p){s+="attribute vec3 binmAttr;\n"
u.a=s}u.a=s+"\n"
a6.jB(u)
a6.jI(u)
a6.jC(u)
a6.jQ(u)
a6.jR(u)
a6.jK(u)
a6.jV(u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=a6.x1
s+="   return projViewObjMat*vec4("+(o?"bendPos":"posAttr")+", 1.0);\n"
u.a=s
s+="}\n"
u.a=s
s+="\n"
u.a=s
s+="void main()\n"
u.a=s
s+="{\n"
u.a=s
if(o){s+="   setupBendData();\n"
u.a=s}if(q){s+="   normalVec = getNorm();\n"
u.a=s}if(p){s+="   binormalVec = getBinm();\n"
u.a=s}if(a6.rx){s+="   txt2D = getTxt2D();\n"
u.a=s}if(a6.ry){s+="   txtCube = getTxtCube();\n"
u.a=s}if(a6.k3){s+="   objPos = getObjPos();\n"
u.a=s}if(a6.k4){s+="   viewPos = getViewPos();\n"
u.a=s}s+="   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s+="\n"
u.a=s
q=this.z
u=new P.ak("")
u.a="precision mediump float;\n"
u.a="precision mediump float;\n\n"
p=q.r1
if(p){u.a="precision mediump float;\n\nvarying vec3 normalVec;\n"
o="precision mediump float;\n\nvarying vec3 normalVec;\n"}else o="precision mediump float;\n\n"
if(q.r2){o+="varying vec3 binormalVec;\n"
u.a=o}if(q.rx){o+="varying vec2 txt2D;\n"
u.a=o}if(q.ry){o+="varying vec3 txtCube;\n"
u.a=o}if(q.k3){o+="varying vec3 objPos;\n"
u.a=o}if(q.k4){o+="varying vec3 viewPos;\n"
u.a=o}o+="\n"
u.a=o
n=q.y2
if(n){o+="uniform mat4 colorMat;\n"
u.a=o}if(q.fr){o+="uniform mat4 invViewMat;\n"
u.a=o}u.a=o+"\n"
q.jF(u)
q.jA(u)
q.jD(u)
q.jG(u)
q.jO(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.jM(u)
q.jN(u)}q.jJ(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=q.y
if(l!==C.d){m+="uniform float alpha;\n"
u.a=m
if(l!==C.j){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.h){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.i){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m+="\n"
u.a=m}m+="float alphaValue()\n"
u.a=m
m+="{\n"
u.a=m
switch(l){case C.d:m+="   return 1.0;\n"
u.a=m
break
case C.j:m+="   return alpha;\n"
u.a=m
break
case C.h:m+="   if(nullAlphaTxt > 0) return alpha;\n"
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+="   if (a <= 0.000001) discard;\n"
u.a=m
m+="   return a;\n"
u.a=m
break
case C.i:m+="   if(nullAlphaTxt > 0) return alpha;\n"
u.a=m
m+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
u.a=m
m+="   if (a <= 0.000001) discard;\n"
u.a=m
m+="   return a;\n"
u.a=m
break}m+="}\n"
u.a=m
m+="\n"
u.a=m
l=q.k2
if(l){m+="// === Lighting ===\n"
u.a=m
m+="\n"
u.a=m
m+="vec3 lightValue(vec3 norm, vec3 litClr, vec3 litVec)\n"
u.a=m
m+="{\n"
u.a=m
u.a=m+"   if ((litClr.r < 0.001) && (litClr.g < 0.001) && (litClr.b < 0.001)) return litClr;\n"
k=H.d([],[P.f])
if(q.b!==C.d)C.a.h(k,"ambient()")
if(q.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.m(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.jE(u)
q.jL(u)
q.jP(u)
q.jS(u)
q.jT(u)
q.jU(u)
q.jH(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m+="   float alpha = alphaValue();\n"
u.a=m
if(p){p=m+"   vec3 norm = normal();\n"
u.a=p}else p=m
if(o)u.a=p+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.d([],[P.f])
if(l){u.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"lightAccum")
if(q.c!==C.d)u.a+="   setDiffuseColor();\n"
if(q.d!==C.d)u.a+="   setInvDiffuseColor();\n"
if(q.e!==C.d)u.a+="   setSpecularColor();\n"
if(q.z>0)u.a+="   lightAccum += allDirLightValues(norm);\n"
if(q.Q>0)u.a+="   lightAccum += allPointLightValues(norm);\n"
if(q.ch>0)u.a+="   lightAccum += allSpotLightValues(norm);\n"
if(q.cx>0)u.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(q.cy>0)u.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(q.db>0)u.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(q.dx<=0)u.a+="   lightAccum += nonLightValues(norm);\n"}if(q.a!==C.d)C.a.h(j,"emission()")
if(q.r!==C.d)C.a.h(j,"reflect(refl)")
if(q.x!==C.d)C.a.h(j,"refract(refl)")
if(j.length<=0)C.a.h(j,"vec3(0.0, 0.0, 0.0)")
i="vec4("+C.a.m(j," + ")+", alpha);"
q=u.a
if(n){q+="   gl_FragColor = colorMat*"+i+"\n"
u.a=q}else{q+="   gl_FragColor = "+i+"\n"
u.a=q}q+="}\n"
u.a=q
this.d_(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a6.fr)this.id=H.j(this.y.p(0,"invViewMat"),"$ial")
if(t)this.dy=H.j(this.y.p(0,"objMat"),"$ial")
if(r)this.fr=H.j(this.y.p(0,"viewObjMat"),"$ial")
this.fy=H.j(this.y.p(0,"projViewObjMat"),"$ial")
if(a6.x2)this.k1=H.j(this.y.p(0,"txt2DMat"),"$ibS")
if(a6.y1)this.k2=H.j(this.y.p(0,"txtCubeMat"),"$ial")
if(a6.y2)this.k3=H.j(this.y.p(0,"colorMat"),"$ial")
this.shk(H.d([],[A.al]))
t=a6.aF
if(t>0){this.k4=H.e(this.y.p(0,"bendMatCount"),"$iM")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.t(P.v("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.j(g,"$ial"))}}t=a6.a
if(t!==C.d){this.r2=H.j(this.y.p(0,"emissionClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:this.rx=H.j(this.y.p(0,"emissionTxt"),"$iai")
this.x1=H.j(this.y.p(0,"nullEmissionTxt"),"$iM")
break
case C.i:this.ry=H.j(this.y.p(0,"emissionTxt"),"$iam")
this.x1=H.j(this.y.p(0,"nullEmissionTxt"),"$iM")
break}}t=a6.b
if(t!==C.d){this.x2=H.j(this.y.p(0,"ambientClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:this.y1=H.j(this.y.p(0,"ambientTxt"),"$iai")
this.aF=H.j(this.y.p(0,"nullAmbientTxt"),"$iM")
break
case C.i:this.y2=H.j(this.y.p(0,"ambientTxt"),"$iam")
this.aF=H.j(this.y.p(0,"nullAmbientTxt"),"$iM")
break}}t=a6.c
if(t!==C.d){this.ay=H.j(this.y.p(0,"diffuseClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:this.bE=H.j(this.y.p(0,"diffuseTxt"),"$iai")
this.bF=H.j(this.y.p(0,"nullDiffuseTxt"),"$iM")
break
case C.i:this.eA=H.j(this.y.p(0,"diffuseTxt"),"$iam")
this.bF=H.j(this.y.p(0,"nullDiffuseTxt"),"$iM")
break}}t=a6.d
if(t!==C.d){this.bG=H.j(this.y.p(0,"invDiffuseClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:this.eB=H.j(this.y.p(0,"invDiffuseTxt"),"$iai")
this.bH=H.j(this.y.p(0,"nullInvDiffuseTxt"),"$iM")
break
case C.i:this.eC=H.j(this.y.p(0,"invDiffuseTxt"),"$iam")
this.bH=H.j(this.y.p(0,"nullInvDiffuseTxt"),"$iM")
break}}t=a6.e
if(t!==C.d){this.bK=H.j(this.y.p(0,"shininess"),"$ia1")
this.bI=H.j(this.y.p(0,"specularClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:this.eD=H.j(this.y.p(0,"specularTxt"),"$iai")
this.bJ=H.j(this.y.p(0,"nullSpecularTxt"),"$iM")
break
case C.i:this.eE=H.j(this.y.p(0,"specularTxt"),"$iam")
this.bJ=H.j(this.y.p(0,"nullSpecularTxt"),"$iM")
break}}switch(a6.f){case C.d:break
case C.j:break
case C.h:this.eF=H.j(this.y.p(0,"bumpTxt"),"$iai")
this.bL=H.j(this.y.p(0,"nullBumpTxt"),"$iM")
break
case C.i:this.eG=H.j(this.y.p(0,"bumpTxt"),"$iam")
this.bL=H.j(this.y.p(0,"nullBumpTxt"),"$iM")
break}if(a6.dy){this.eH=H.j(this.y.p(0,"envSampler"),"$iam")
this.eI=H.j(this.y.p(0,"nullEnvTxt"),"$iM")
t=a6.r
if(t!==C.d){this.bM=H.j(this.y.p(0,"reflectClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:this.eJ=H.j(this.y.p(0,"reflectTxt"),"$iai")
this.bN=H.j(this.y.p(0,"nullReflectTxt"),"$iM")
break
case C.i:this.eK=H.j(this.y.p(0,"reflectTxt"),"$iam")
this.bN=H.j(this.y.p(0,"nullReflectTxt"),"$iM")
break}}t=a6.x
if(t!==C.d){this.bO=H.j(this.y.p(0,"refraction"),"$ia1")
this.bP=H.j(this.y.p(0,"refractClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:this.eL=H.j(this.y.p(0,"refractTxt"),"$iai")
this.bQ=H.j(this.y.p(0,"nullRefractTxt"),"$iM")
break
case C.i:this.eM=H.j(this.y.p(0,"refractTxt"),"$iam")
this.bQ=H.j(this.y.p(0,"nullRefractTxt"),"$iM")
break}}}t=a6.y
if(t!==C.d){this.bR=H.j(this.y.p(0,"alpha"),"$ia1")
switch(t){case C.d:break
case C.j:break
case C.h:this.eN=H.j(this.y.p(0,"alphaTxt"),"$iai")
this.bS=H.j(this.y.p(0,"nullAlphaTxt"),"$iM")
break
case C.i:this.eO=H.j(this.y.p(0,"alphaTxt"),"$iam")
this.bS=H.j(this.y.p(0,"nullAlphaTxt"),"$iM")
break}}this.sh5(H.d([],[A.cY]))
this.sh6(H.d([],[A.cZ]))
this.sh7(H.d([],[A.d_]))
this.sh8(H.d([],[A.d0]))
this.sh9(H.d([],[A.d1]))
this.sha(H.d([],[A.d2]))
if(a6.k2){t=a6.z
if(t>0){this.eP=H.e(this.y.p(0,"dirLightCount"),"$iM")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(g,"$iN")
s=this.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iN")
s=this.cS;(s&&C.a).h(s,new A.cY(h,g,f))}}t=a6.Q
if(t>0){this.eQ=H.e(this.y.p(0,"pntLightCount"),"$iM")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(g,"$iN")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iN")
s=this.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iN")
s=this.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$ia1")
s=this.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$ia1")
s=this.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$ia1")
s=this.cT;(s&&C.a).h(s,new A.cZ(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.eR=H.e(this.y.p(0,"spotLightCount"),"$iM")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(g,"$iN")
s=this.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iN")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iN")
s=this.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iN")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$ia1")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$ia1")
s=this.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$ia1")
s=this.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$ia1")
s=this.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a1,"$ia1")
s=this.cU;(s&&C.a).h(s,new A.d_(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.eS=H.e(this.y.p(0,"txtDirLightCount"),"$iM")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(g,"$iN")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iN")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iN")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iN")
s=this.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iN")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iM")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iai")
s=this.cV;(s&&C.a).h(s,new A.d0(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.eT=H.e(this.y.p(0,"txtPntLightCount"),"$iM")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(g,"$iN")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iN")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$ibS")
s=this.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iN")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iM")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$ia1")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$ia1")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$ia1")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a1,"$iam")
s=this.cW;(s&&C.a).h(s,new A.d1(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.eU=H.e(this.y.p(0,"txtSpotLightCount"),"$iM")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(g,"$iN")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iN")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iN")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iN")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iN")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iM")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iN")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$ia1")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a1,"$ia1")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a2,"$ia1")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a3,"$ia1")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a4,"$ia1")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.t(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a5,"$iai")
s=this.cX;(s&&C.a).h(s,new A.d2(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ag:function(a,b,c){C.b.P(b.a,b.d,1)},
as:function(a,b,c){C.b.P(b.a,b.d,1)},
shk:function(a){this.r1=H.l(a,"$ib",[A.al],"$ab")},
sh5:function(a){this.cS=H.l(a,"$ib",[A.cY],"$ab")},
sh6:function(a){this.cT=H.l(a,"$ib",[A.cZ],"$ab")},
sh7:function(a){this.cU=H.l(a,"$ib",[A.d_],"$ab")},
sh8:function(a){this.cV=H.l(a,"$ib",[A.d0],"$ab")},
sh9:function(a){this.cW=H.l(a,"$ib",[A.d1],"$ab")},
sha:function(a){this.cX=H.l(a,"$ib",[A.d2],"$ab")}}
A.hR.prototype={
jB:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.aF+"];\n"
u+="attribute vec4 bendAttr;\n"
a.a=u
u+="\n"
a.a=u
u+="float weightSum;\n"
a.a=u
u+="vec3 bendPos;\n"
a.a=u
t=this.r1
if(t){u+="vec3 bendNorm;\n"
a.a=u}s=this.r2
if(s){u+="vec3 bendBinm;\n"
a.a=u}u+="\n"
a.a=u
u+="void adjustBend(float bendVal)\n"
a.a=u
u+="{\n"
a.a=u
u+="   if(bendVal >= 0.0)\n"
a.a=u
u+="   {\n"
a.a=u
u+="      int index = int(floor((bendVal + 0.5)*0.5));\n"
a.a=u
u+="      if(index < bendMatCount)\n"
a.a=u
u+="      {\n"
a.a=u
u+="         float weight = clamp(bendVal - float(index)*2.0, 0.0, 1.0);\n"
a.a=u
u+="         mat4 m = bendValues[index].mat;\n"
a.a=u
u+="         weightSum += weight;\n"
a.a=u
u+="         bendPos += (m*vec4(posAttr, 1.0)).xyz*weight;\n"
a.a=u
if(t){u+="         bendNorm += (m*vec4(normAttr, 0.0)).xyz*weight;\n"
a.a=u}if(s){u+="         bendBinm += (m*vec4(binmAttr, 0.0)).xyz*weight;\n"
a.a=u}u+="      }\n"
a.a=u
u+="   }\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="void setupBendData()\n"
a.a=u
u+="{\n"
a.a=u
u+="   bendPos = vec3(0.0, 0.0, 0.0);\n"
a.a=u
if(t){u+="   bendNorm = vec3(0.0, 0.0, 0.0);\n"
a.a=u}if(s){u+="   bendBinm = vec3(0.0, 0.0, 0.0);\n"
a.a=u}u+="   weightSum = 0.0;\n"
a.a=u
u+="   adjustBend(bendAttr.x);\n"
a.a=u
u+="   adjustBend(bendAttr.y);\n"
a.a=u
u+="   adjustBend(bendAttr.z);\n"
a.a=u
u+="   adjustBend(bendAttr.w);\n"
a.a=u
u+="   if(weightSum < 1.0)\n"
a.a=u
u+="   {\n"
a.a=u
u+="      float weight = 1.0 - weightSum;\n"
a.a=u
u+="      bendPos += posAttr*weight;\n"
a.a=u
if(t){u+="      bendNorm += normAttr*weight;\n"
a.a=u}if(s){u+="      bendBinm += binmAttr*weight;\n"
a.a=u}u+="   }\n"
a.a=u
u+="   else\n"
a.a=u
u+="   {\n"
a.a=u
u+="      bendPos = bendPos/weightSum;\n"
a.a=u
u+="   }\n"
a.a=u
if(t){u+="   bendNorm = normalize(bendNorm);\n"
a.a=u}if(s){u+="   bendBinm = normalize(bendBinm);\n"
a.a=u}u+="}\n"
a.a=u
a.a=u+"\n"},
jI:function(a){var u
if(!this.r1)return
u=a.a+="varying vec3 normalVec;\n"
u+="\n"
a.a=u
u+="vec3 getNorm()\n"
a.a=u
u+="{\n"
a.a=u
u+="   return normalize((viewObjMat*vec4("+(this.x1?"bendNorm":"normAttr")+", 0.0)).xyz);\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
jC:function(a){var u
if(!this.r2)return
u=a.a+="varying vec3 binormalVec;\n"
u+="\n"
a.a=u
u+="vec3 getBinm()\n"
a.a=u
u+="{\n"
a.a=u
u+="   return normalize((viewObjMat*vec4("+(this.x1?"bendBinm":"binmAttr")+", 0.0)).xyz);\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
jQ:function(a){var u,t
if(!this.rx)return
u=this.x2
if(u)a.a+="uniform mat3 txt2DMat;\n"
t=a.a+="attribute vec2 txt2DAttr;\n"
t+="varying vec2 txt2D;\n"
a.a=t
t+="\n"
a.a=t
t+="vec2 getTxt2D()\n"
a.a=t
t+="{\n"
a.a=t
if(u){u=t+"   return (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n"
a.a=u}else{u=t+"   return vec3(txt2DAttr, 1.0).xy;\n"
a.a=u}u+="}\n"
a.a=u
a.a=u+"\n"},
jR:function(a){var u,t
if(!this.ry)return
u=this.y1
if(u)a.a+="uniform mat4 txtCubeMat;\n"
t=a.a+="attribute vec3 txtCubeAttr;\n"
t+="varying vec3 txtCube;\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 getTxtCube()\n"
a.a=t
t+="{\n"
a.a=t
if(u){u=t+"   return (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n"
a.a=u}else{u=t+"   return vec4(txtCubeAttr, 1.0).xyz;\n"
a.a=u}u+="}\n"
a.a=u
a.a=u+"\n"},
jK:function(a){var u
if(!this.k3)return
u=a.a+="varying vec3 objPos;\n"
u+="\n"
a.a=u
u+="vec3 getObjPos()\n"
a.a=u
u+="{\n"
a.a=u
u+="   return (objMat*vec4("+(this.x1?"bendPos":"posAttr")+", 1.0)).xyz;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
jV:function(a){var u
if(!this.k4)return
u=a.a+="varying vec3 viewPos;\n"
u+="\n"
a.a=u
u+="vec3 getViewPos()\n"
a.a=u
u+="{\n"
a.a=u
u+="   return (viewObjMat*vec4("+(this.x1?"bendPos":"posAttr")+", 1.0)).xyz;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
aK:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.h(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.aA(c,1))+"Txt;\n"
a.a=u
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
jF:function(a){var u,t
u=this.a
if(u===C.d)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aK(a,u,"emission")
t=a.a+="\n"
t+="vec3 emission()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   return emissionClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
jA:function(a){var u,t
u=this.b
if(u===C.d)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aK(a,u,"ambient")
t=a.a+="\n"
t+="vec3 ambient()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   return ambientClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
jD:function(a){var u,t
u=this.c
if(u===C.d)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aK(a,u,"diffuse")
t=a.a+="vec3 diffuseColor;\n"
t+="\n"
a.a=t
t+="void setDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   diffuseColor = diffuseClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*textureCube(diffuseTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 diffuse(vec3 norm, vec3 litVec)\n"
a.a=u
u+="{\n"
a.a=u
u+="   float scalar = dot(norm, -litVec);\n"
a.a=u
u+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   return diffuseColor*scalar;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
jG:function(a){var u,t
u=this.d
if(u===C.d)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aK(a,u,"invDiffuse")
t=a.a+="vec3 invDiffuseColor;\n"
t+="\n"
a.a=t
t+="void setInvDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   invDiffuseColor = invDiffuseClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*textureCube(invDiffuseTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 invDiffuse(vec3 norm, vec3 litVec)\n"
a.a=u
u+="{\n"
a.a=u
u+="   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);\n"
a.a=u
u+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   return invDiffuseColor*scalar;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
jO:function(a){var u,t
u=this.e
if(u===C.d)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aK(a,u,"specular")
t=a.a+="uniform float shininess;\n"
t+="vec3 specularColor;\n"
a.a=t
t+="\n"
a.a=t
t+="void setSpecularColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   specularColor = specularClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*textureCube(specularTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 specular(vec3 norm, vec3 litVec)\n"
a.a=u
u+="{\n"
a.a=u
u+="   if(dot(norm, -litVec) < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 lightRef = normalize(reflect(litVec, norm));\n"
a.a=u
u+="   float scalar = dot(lightRef, -normalize(viewPos));\n"
a.a=u
u+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   return specularColor*pow(scalar, shininess);\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
jJ:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.d:break
case C.j:break
case C.h:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break
case C.i:u+="uniform samplerCube bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break}u+="vec3 normal()\n"
a.a=u
u+="{\n"
a.a=u
switch(t){case C.d:u+="   return normalize(normalVec);\n"
a.a=u
break
case C.j:u+="   return normalize(normalVec);\n"
a.a=u
break
case C.h:u+="   if(nullBumpTxt > 0) return normalVec;\n"
a.a=u
u+="   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n"
a.a=u
u+="   vec3 n = normalize(normalVec);\n"
a.a=u
u+="   vec3 b = normalize(binormalVec);\n"
a.a=u
u+="   vec3 c = normalize(cross(b, n));\n"
a.a=u
u+="   b = cross(n, c);\n"
a.a=u
u+="   mat3 mat = mat3( b.x,  b.y,  b.z,\n"
a.a=u
u+="                   -c.x, -c.y, -c.z,\n"
a.a=u
u+="                    n.x,  n.y,  n.z);\n"
a.a=u
u+="   return mat * normalize(2.0*color - 1.0);\n"
a.a=u
break
case C.i:u+="   if(nullBumpTxt > 0) return normalVec;\n"
a.a=u
u+="   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n"
a.a=u
u+="   vec3 n = normalize(normalVec);\n"
a.a=u
u+="   vec3 b = normalize(binormalVec);\n"
a.a=u
u+="   vec3 c = cross(b, n);\n"
a.a=u
u+="   b = cross(n, c);\n"
a.a=u
u+="   mat3 mat = mat3( b.x,  b.y,  b.z,\n"
a.a=u
u+="                   -c.x, -c.y, -c.z,\n"
a.a=u
u+="                    n.x,  n.y,  n.z);\n"
a.a=u
u+="   return mat * normalize(2.0*color - 1.0);\n"
a.a=u
break}u+="}\n"
a.a=u
a.a=u+"\n"},
jM:function(a){var u,t
u=this.r
if(u===C.d)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aK(a,u,"reflect")
t=a.a+="\n"
t+="vec3 reflect(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   vec3 scalar = reflectClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*textureCube(reflectTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
a.a=u
u+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
jN:function(a){var u,t
u=this.x
if(u===C.d)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aK(a,u,"refract")
t=a.a+="uniform float refraction;\n"
t+="\n"
a.a=t
t+="vec3 refract(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   vec3 scalar = refractClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*textureCube(refractTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
a.a=u
u+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
a.a=u
u+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
jE:function(a){var u,t
u=this.z
if(u<=0)return
t=a.a+="// === Directional Light ===\n"
t+="\n"
a.a=t
t+="struct DirLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 viewDir;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int dirLightCount;\n"
t=a.a+="uniform DirLight dirLights["+u+"];\n"
t+="\n"
a.a=t
t+="vec3 allDirLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
a.a=t+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
u=a.a+="   for(int i = 0; i < "+u+"; ++i)\n"
u+="   {\n"
a.a=u
u+="      if(i >= dirLightCount) break;\n"
a.a=u
u+="      DirLight lit = dirLights[i];\n"
a.a=u
u+="      lightAccum += lightValue(norm, lit.color, lit.viewDir);\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
jL:function(a){var u,t
u=this.Q
if(u<=0)return
t=a.a+="// === Point Light ===\n"
t+="\n"
a.a=t
t+="struct PointLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 point;\n"
a.a=t
t+="   vec3 viewPnt;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   float att0;\n"
a.a=t
t+="   float att1;\n"
a.a=t
t+="   float att2;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int pntLightCount;\n"
t=a.a+="uniform PointLight pntLights["+u+"];\n"
t+="\n"
a.a=t
t+="vec3 pointLightValue(vec3 norm, PointLight lit)\n"
a.a=t
t+="{\n"
a.a=t
t+="   float dist = length(objPos - lit.point);\n"
a.a=t
t+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=t
t+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   return lightValue(norm, lit.color*attenuation, normalize(viewPos - lit.viewPnt));\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allPointLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
a.a=t+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
u=a.a+="   for(int i = 0; i < "+u+"; ++i)\n"
u+="   {\n"
a.a=u
u+="      if(i >= pntLightCount) break;\n"
a.a=u
u+="      lightAccum += pointLightValue(norm, pntLights[i]);\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
jP:function(a){var u,t
u=this.ch
if(u<=0)return
t=a.a+="// === Spot Light ===\n"
t+="\n"
a.a=t
t+="struct SpotLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 objPnt;\n"
a.a=t
t+="   vec3 objDir;\n"
a.a=t
t+="   vec3 viewPnt;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   float cutoff;\n"
a.a=t
t+="   float coneAngle;\n"
a.a=t
t+="   float att0;\n"
a.a=t
t+="   float att1;\n"
a.a=t
t+="   float att2;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int spotLightCount;\n"
t=a.a+="uniform SpotLight spotLights["+u+"];\n"
t+="\n"
a.a=t
t+="vec3 spotLightValue(vec3 norm, SpotLight lit)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 dir = objPos - lit.objPnt;\n"
a.a=t
t+="   float dist = length(dir);\n"
a.a=t
t+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=t
t+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   float angle = acos(dot(normalize(dir), lit.objDir));\n"
a.a=t
t+="   float scale = (lit.cutoff-angle)/(lit.cutoff-lit.coneAngle);\n"
a.a=t
t+="   if(scale <= 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   if(scale > 1.0) scale = 1.0;\n"
a.a=t
t+="   return lightValue(norm, lit.color*attenuation*scale, normalize(viewPos - lit.viewPnt));\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allSpotLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
a.a=t+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
u=a.a+="   for(int i = 0; i < "+u+"; ++i)\n"
u+="   {\n"
a.a=u
u+="      if(i >= spotLightCount) break;\n"
a.a=u
u+="      lightAccum += spotLightValue(norm, spotLights[i]);\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
jS:function(a){var u,t,s
u=this.cx
if(u<=0)return
t=a.a+="// === Texture Directional Light ===\n"
t+="\n"
a.a=t
t+="struct TexturedDirLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 objUp;\n"
a.a=t
t+="   vec3 objRight;\n"
a.a=t
t+="   vec3 objDir;\n"
a.a=t
t+="   vec3 viewDir;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   int nullTxt;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int txtDirLightCount;\n"
t=a.a+="uniform TexturedDirLight txtDirLights["+u+"];\n"
for(s=0;s<u;++s)t=a.a+="uniform sampler2D txtDirLightsTxt2D"+s+";\n"
t+="\n"
a.a=t
t+="vec3 txtDirLightValue(vec3 norm, TexturedDirLight lit, sampler2D txt2D)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=t
t+="   else\n"
a.a=t
t+="   {\n"
a.a=t
t+="      vec3 offset = objPos + lit.objDir*dot(objPos, lit.objDir);\n"
a.a=t
t+="      float tu = dot(offset, lit.objUp);\n"
a.a=t
t+="      float tv = dot(offset, lit.objRight);\n"
a.a=t
t+="      color = lit.color*texture2D(txt2D, vec2(tu, tv)).xyz;\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightValue(norm, color, lit.viewDir);\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allTxtDirLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
a.a=t
for(s=0;s<u;++s){a.a+="   if(txtDirLightCount <= "+s+") return lightAccum;\n"
t=a.a+="   lightAccum += txtDirLightValue(norm, txtDirLights["+s+"], txtDirLightsTxt2D"+s+");\n"}u=t+"   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
jT:function(a){var u,t,s
u=this.cy
if(u<=0)return
t=a.a+="// === Texture Point Light ===\n"
t+="\n"
a.a=t
t+="struct TexturedPointLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 point;\n"
a.a=t
t+="   vec3 viewPnt;\n"
a.a=t
t+="   mat3 invViewRotMat;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   int nullTxt;\n"
a.a=t
t+="   float att0;\n"
a.a=t
t+="   float att1;\n"
a.a=t
t+="   float att2;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int txtPntLightCount;\n"
t=a.a+="uniform TexturedPointLight txtPntLights["+u+"];\n"
for(s=0;s<u;++s)t=a.a+="uniform samplerCube txtPntLightsTxtCube"+s+";\n"
t+="\n"
a.a=t
t+="vec3 txtPointLightValue(vec3 norm, TexturedPointLight lit, samplerCube txtCube)\n"
a.a=t
t+="{\n"
a.a=t
t+="   float dist = length(objPos - lit.point);\n"
a.a=t
t+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=t
t+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=t
t+="   else\n"
a.a=t
t+="   {\n"
a.a=t
t+="      vec3 invNormDir = lit.invViewRotMat*normDir;\n"
a.a=t
t+="      color = lit.color*textureCube(txtCube, invNormDir).xyz;\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightValue(norm, attenuation*color, normDir);\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allTxtPointLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
a.a=t
for(s=0;s<u;++s){a.a+="   if(txtPntLightCount <= "+s+") return lightAccum;\n"
t=a.a+="   lightAccum += txtPointLightValue(norm, txtPntLights["+s+"], txtPntLightsTxtCube"+s+");\n"}u=t+"   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
jU:function(a){var u,t,s
u=this.db
if(u<=0)return
t=a.a+="// === Texture Spot Light ===\n"
t+="\n"
a.a=t
t+="struct TexturedSpotLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 objPnt;\n"
a.a=t
t+="   vec3 objDir;\n"
a.a=t
t+="   vec3 objUp;\n"
a.a=t
t+="   vec3 objRight;\n"
a.a=t
t+="   vec3 viewPnt;\n"
a.a=t
t+="   int nullTxt;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   float tuScalar;\n"
a.a=t
t+="   float tvScalar;\n"
a.a=t
t+="   float att0;\n"
a.a=t
t+="   float att1;\n"
a.a=t
t+="   float att2;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int txtSpotLightCount;\n"
t=a.a+="uniform TexturedSpotLight txtSpotLights["+u+"];\n"
for(s=0;s<u;++s)t=a.a+="uniform sampler2D txtSpotLightsTxt2D"+s+";\n"
t+="\n"
a.a=t
t+="vec3 txtSpotLightValue(vec3 norm, TexturedSpotLight lit, sampler2D txt2D)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 dir = objPos - lit.objPnt;\n"
a.a=t
t+="   float dist = length(dir);\n"
a.a=t
t+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=t
t+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   vec3 normDir = normalize(dir);\n"
a.a=t
t+="   float zScale = dot(normDir, lit.objDir);\n"
a.a=t
t+="   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   normDir = normDir/zScale;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=t
t+="   else\n"
a.a=t
t+="   {\n"
a.a=t
t+="      float tu = dot(normDir, lit.objUp)*lit.tuScalar+0.5;\n"
a.a=t
t+="      if((tu > 1.0) || (tu < 0.0)) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="      float tv = dot(normDir, lit.objRight)*lit.tvScalar+0.5;\n"
a.a=t
t+="      if((tv > 1.0) || (tv < 0.0)) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="      color = lit.color*texture2D(txt2D, vec2(tu, tv)).xyz;\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightValue(norm, color*attenuation, normalize(viewPos - lit.viewPnt));\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allTxtSpotLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
a.a=t
for(s=0;s<u;++s){a.a+="   if(txtSpotLightCount <= "+s+") return lightAccum;\n"
t=a.a+="   lightAccum += txtSpotLightValue(norm, txtSpotLights["+s+"], txtSpotLightsTxt2D"+s+");\n"}u=t+"   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
jH:function(a){var u
if(this.dx>0)return
u=a.a+="// === No Lights ===\n"
u+="\n"
a.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
u+="   return lightValue(norm, vec3(1.0, 1.0, 1.0), vec3(0.0, 0.0, 1.0));\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
i:function(a){return this.ay}}
A.cY.prototype={}
A.d0.prototype={}
A.cZ.prototype={}
A.d1.prototype={}
A.d_.prototype={}
A.d2.prototype={}
A.cR.prototype={
c9:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
d_:function(a,b,c){var u,t,s
this.c=b
this.d=c
this.e=this.dN(b,35633)
this.f=this.dN(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.eg(u,t,this.e)
C.b.eg(u,this.r,this.f)
C.b.kL(u,this.r)
if(!H.lt(C.b.c3(u,this.r,35714))){s=C.b.fB(u,this.r)
C.b.kk(u,this.r)
H.t(P.v("Failed to link shader: "+H.m(s)))}this.jc()
this.je()},
a3:function(a){C.b.c_(a.a,this.r)
this.x.kt()},
dN:function(a,b){var u,t,s
u=this.a
t=C.b.ki(u,b)
C.b.fN(u,t,a)
C.b.kd(u,t)
if(!H.lt(C.b.fD(u,t,35713))){s=C.b.fC(u,t)
C.b.kl(u,t)
throw H.c(P.v("Error compiling shader '"+H.m(t)+"': "+H.m(s)))}return t},
jc:function(){var u,t,s,r,q,p
u=H.d([],[A.dx])
t=this.a
s=H.ac(C.b.c3(t,this.r,35721))
if(typeof s!=="number")return H.F(s)
r=0
for(;r<s;++r){q=C.b.fu(t,this.r,r)
p=C.b.fw(t,this.r,q.name)
C.a.h(u,new A.dx(t,q.name,p))}this.x=new A.fI(u)},
je:function(){var u,t,s,r,q,p
u=H.d([],[A.ev])
t=this.a
s=H.ac(C.b.c3(t,this.r,35718))
if(typeof s!=="number")return H.F(s)
r=0
for(;r<s;++r){q=C.b.fv(t,this.r,r)
p=C.b.fE(t,this.r,q.name)
C.a.h(u,this.kj(q.type,q.size,q.name,p))}this.y=new A.jg(u)},
aV:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.M(u,t,b,c)
else return A.li(u,t,b,a,c)},
hr:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ai(u,t,b,c)
else return A.li(u,t,b,a,c)},
hs:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.am(u,t,b,c)
else return A.li(u,t,b,a,c)},
bz:function(a,b){return new P.eM(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
kj:function(a,b,c,d){switch(a){case 5120:return this.aV(b,c,d)
case 5121:return this.aV(b,c,d)
case 5122:return this.aV(b,c,d)
case 5123:return this.aV(b,c,d)
case 5124:return this.aV(b,c,d)
case 5125:return this.aV(b,c,d)
case 5126:return new A.a1(this.a,this.r,c,d)
case 35664:return new A.jb(this.a,this.r,c,d)
case 35665:return new A.N(this.a,this.r,c,d)
case 35666:return new A.je(this.a,this.r,c,d)
case 35667:return new A.jc(this.a,this.r,c,d)
case 35668:return new A.jd(this.a,this.r,c,d)
case 35669:return new A.jf(this.a,this.r,c,d)
case 35674:return new A.jh(this.a,this.r,c,d)
case 35675:return new A.bS(this.a,this.r,c,d)
case 35676:return new A.al(this.a,this.r,c,d)
case 35678:return this.hr(b,c,d)
case 35680:return this.hs(b,c,d)
case 35670:throw H.c(this.bz("BOOL",c))
case 35671:throw H.c(this.bz("BOOL_VEC2",c))
case 35672:throw H.c(this.bz("BOOL_VEC3",c))
case 35673:throw H.c(this.bz("BOOL_VEC4",c))
default:throw H.c(P.v("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.c3.prototype={
i:function(a){return this.b}}
A.eh.prototype={}
A.ev.prototype={}
A.jg.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
p:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.Y()},
kB:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.I)(u),++r)s+=u[r].i(0)+a
return s},
Y:function(){return this.kB("\n")}}
A.M.prototype={
i:function(a){return"Uniform1i: "+H.m(this.c)}}
A.jc.prototype={
i:function(a){return"Uniform2i: "+H.m(this.c)}}
A.jd.prototype={
i:function(a){return"Uniform3i: "+H.m(this.c)}}
A.jf.prototype={
i:function(a){return"Uniform4i: "+H.m(this.c)}}
A.ja.prototype={
i:function(a){return"Uniform1iv: "+H.m(this.c)},
sjy:function(a){this.e=H.l(a,"$ib",[P.o],"$ab")}}
A.a1.prototype={
i:function(a){return"Uniform1f: "+H.m(this.c)}}
A.jb.prototype={
i:function(a){return"Uniform2f: "+H.m(this.c)}}
A.N.prototype={
i:function(a){return"Uniform3f: "+H.m(this.c)}}
A.je.prototype={
i:function(a){return"Uniform4f: "+H.m(this.c)}}
A.jh.prototype={
i:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.bS.prototype={
aa:function(a){var u=new Float32Array(H.cj(H.l(a,"$ib",[P.B],"$ab")))
C.b.fn(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.m(this.c)}}
A.al.prototype={
aa:function(a){var u=new Float32Array(H.cj(H.l(a,"$ib",[P.B],"$ab")))
C.b.fo(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.m(this.c)}}
A.ai.prototype={
fL:function(a){var u,t,s
u=a.d
t=this.a
s=this.d
if(!u)C.b.P(t,s,0)
else C.b.P(t,s,a.a)},
i:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.am.prototype={
fM:function(a){var u,t,s
u=a==null||a.d<6
t=this.a
s=this.d
if(u)C.b.P(t,s,0)
else C.b.P(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.kY.prototype={
$1:function(a){return new V.a8(Math.cos(a),Math.sin(a),0)},
$S:45}
F.kL.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.lD(t.$1(u),s)
s=J.nl(J.lD(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.T(s.a,s.b,s.c)
q=s.C(0,Math.sqrt(s.F(s)))
t=$.mq
if(t==null){t=new V.T(1,0,0)
$.mq=t
p=t}else p=t
t=q.aN(!J.Y(q,p)?V.mu():p)
o=t.C(0,Math.sqrt(t.F(t)))
t=o.aN(q)
p=t.C(0,Math.sqrt(t.F(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.v(0,t*s)
s=o.v(0,m*s)
s=J.nk(r,new V.a8(t.a-s.a,t.b-s.b,t.c-s.c))
if(!J.Y(a.f,s)){a.f=H.e(s,"$ia8")
t=a.a
if(t!=null)t.an()}},
$S:46}
F.ad.prototype={
bj:function(){if(!this.gex()){C.a.U(this.a.a.d.b,this)
this.a.a.an()}this.iW()
this.iX()
this.iY()},
j9:function(a){this.a=a
C.a.h(a.d.b,this)},
ja:function(a){this.b=a
C.a.h(a.d.c,this)},
jb:function(a){this.c=a
C.a.h(a.d.d,this)},
iW:function(){var u=this.a
if(u!=null){C.a.U(u.d.b,this)
this.a=null}},
iX:function(){var u=this.b
if(u!=null){C.a.U(u.d.c,this)
this.b=null}},
iY:function(){var u=this.c
if(u!=null){C.a.U(u.d.d,this)
this.c=null}},
gex:function(){return this.a==null||this.b==null||this.c==null},
hj:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.d4()
if(t!=null)q=q.q(0,t)
if(s!=null)q=q.q(0,s)
if(r!=null)q=q.q(0,r)
if(q.f4())return
return q.C(0,Math.sqrt(q.F(q)))},
hn:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.u(0,t)
u=new V.T(u.a,u.b,u.c)
q=u.C(0,Math.sqrt(u.F(u)))
u=r.u(0,t)
u=new V.T(u.a,u.b,u.c)
u=q.aN(u.C(0,Math.sqrt(u.F(u))))
return u.C(0,Math.sqrt(u.F(u)))},
cL:function(){if(this.d!=null)return!0
var u=this.hj()
if(u==null){u=this.hn()
if(u==null)return!1}this.d=u
this.a.a.an()
return!0},
hi:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.d4()
if(t!=null)q=q.q(0,t)
if(s!=null)q=q.q(0,s)
if(r!=null)q=q.q(0,r)
if(q.f4())return
return q.C(0,Math.sqrt(q.F(q)))},
hm:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.V().a){u=m.u(0,p)
u=new V.T(u.a,u.b,u.c)
h=u.C(0,Math.sqrt(u.F(u)))
if(j.a-k.a<0)h=h.V(0)}else{g=(u-l.b)/i
u=m.u(0,p).v(0,g).q(0,p).u(0,s)
u=new V.T(u.a,u.b,u.c)
h=u.C(0,Math.sqrt(u.F(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.V(0)}u=this.d
if(u!=null){f=u.C(0,Math.sqrt(u.F(u)))
u=f.aN(h)
u=u.C(0,Math.sqrt(u.F(u))).aN(f)
h=u.C(0,Math.sqrt(u.F(u)))}return h},
cJ:function(){if(this.e!=null)return!0
var u=this.hi()
if(u==null){u=this.hm()
if(u==null)return!1}this.e=u
this.a.a.an()
return!0},
gkc:function(a){if(J.Y(this.a,this.b))return!0
if(J.Y(this.b,this.c))return!0
if(J.Y(this.c,this.a))return!0
return!1},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.Y()},
K:function(a){var u,t
if(this.gex())return a+"disposed"
u=a+C.c.aP(J.aO(this.a.e),0)+", "+C.c.aP(J.aO(this.b.e),0)+", "+C.c.aP(J.aO(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
Y:function(){return this.K("")}}
F.hh.prototype={}
F.iB.prototype={
bl:function(a,b,c){var u,t
u=b.a
u.a.a.I()
u=u.e
t=c.a
t.a.a.I()
if(u==t.e){u=b.b
u.a.a.I()
u=u.e
t=c.b
t.a.a.I()
if(u==t.e){u=b.c
u.a.a.I()
u=u.e
t=c.c
t.a.a.I()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.I()
u=u.e
t=c.b
t.a.a.I()
if(u==t.e){u=b.b
u.a.a.I()
u=u.e
t=c.c
t.a.a.I()
if(u==t.e){u=b.c
u.a.a.I()
u=u.e
t=c.a
t.a.a.I()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.I()
u=u.e
t=c.c
t.a.a.I()
if(u==t.e){u=b.b
u.a.a.I()
u=u.e
t=c.a
t.a.a.I()
if(u==t.e){u=b.c
u.a.a.I()
u=u.e
t=c.b
t.a.a.I()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.bM.prototype={}
F.hC.prototype={}
F.j9.prototype={
bl:function(a,b,c){var u,t
u=b.a
u.a.a.I()
u=u.e
t=c.a
t.a.a.I()
if(u==t.e){u=b.b
u.a.a.I()
u=u.e
t=c.b
t.a.a.I()
return u==t.e}else{u=b.a
u.a.a.I()
u=u.e
t=c.b
t.a.a.I()
if(u==t.e){u=b.b
u.a.a.I()
u=u.e
t=c.a
t.a.a.I()
return u==t.e}else return!1}}}
F.ca.prototype={}
F.ef.prototype={
gt:function(){var u=this.e
if(u==null){u=D.L()
this.e=u}return u},
aM:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aM()||!1
if(!this.a.aM())t=!1
u=this.e
if(u!=null)u.aS(0)
return t},
kR:function(a,b){var u,t,s,r,q,p
P.aA("FLAG 1\n")
u=this.e
if(u!=null)++u.d
P.aA("FLAG 2\n")
u=this.a.c
t=H.d(u.slice(0),[H.r(u,0)])
P.aA("FLAG 3\n")
for(u=[F.as];t.length!==0;){s=C.a.gkx(t)
C.a.l8(t,0)
if(s!=null){r=H.d([],u)
C.a.h(r,s)
for(q=t.length-1;q>=0;--q){if(q>=t.length)return H.h(t,q)
p=t[q]
if(p!=null&&a.bl(0,s,p)){C.a.h(r,p)
C.a.U(t,p)}}if(r.length>1)b.kQ(r)}}P.aA("FLAG 4\n")
this.a.I()
P.aA("FLAG 5\n")
this.c.de()
P.aA("FLAG 6\n")
this.d.de()
P.aA("FLAG 7\n")
this.b.l9()
P.aA("FLAG 8\n")
this.c.df(new F.j9())
P.aA("FLAG 9\n")
this.d.df(new F.iB())
P.aA("FLAG 10\n")
u=this.e
if(u!=null)u.aS(0)
P.aA("FLAG 11\n")},
cI:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aF()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bz().a)!==0)++r
if((s&$.by().a)!==0)++r
if((s&$.b2().a)!==0)++r
if((s&$.bA().a)!==0)++r
if((s&$.dr().a)!==0)++r
if((s&$.ds().a)!==0)++r
if((s&$.ct().a)!==0)++r
if((s&$.bx().a)!==0)++r
q=a1.gdt(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.B
o=H.d(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.d(t,[Z.dz])
for(m=0,l=0;l<r;++l){k=a1.k7(l)
j=k.gdt(k)
C.a.n(n,l,new Z.dz(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.h(t,i)
h=t[i].kM(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.n(o,g,h[f]);++g}}m+=j}H.l(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.aD(t,34962,e)
C.b.ek(t,34962,new Float32Array(H.cj(o)),35044)
C.b.aD(t,34962,null)
d=new Z.bZ(new Z.eD(34962,e),n,a1)
d.shG(H.d([],[Z.c8]))
this.b.b
if(this.c.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.I()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.h(b,l)
b=b[l].b
b.a.a.I()
C.a.h(c,b.e)}a=Z.mv(t,34963,H.l(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.c8(1,c.length,a))}if(this.d.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.I()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.h(b,l)
b=b[l].b
b.a.a.I()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.h(b,l)
b=b[l].c
b.a.a.I()
C.a.h(c,b.e)}a=Z.mv(t,34963,H.l(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.c8(4,c.length,a))}return d},
i:function(a){var u=H.d([],[P.f])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.K("   "))}this.b.b
if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.K("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.K("   "))}return C.a.m(u,"\n")},
b3:function(a){var u=this.e
if(u!=null)u.G(a)},
an:function(){return this.b3(null)},
$ipD:1}
F.iu.prototype={
jY:function(a){var u,t,s,r,q,p
H.l(a,"$ib",[F.as],"$ab")
u=H.d([],[F.ad])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.dK(t,q,p))}return u},
jZ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ib",[F.as],"$ab")
u=H.d([],[F.ad])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.h(c,r)
l=c[r];++r
if(r>=m)return H.h(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.h(c,j)
i=c[j]
if(s<0||s>=m)return H.h(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.dK(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dK(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dK(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dK(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
df:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.bl(0,p,n)){p.bj()
break}}}}},
de:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=s.gkc(s)
if(t)s.bj()}},
aM:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.I)(u),++r)if(!u[r].cL())s=!1
return s},
cK:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.I)(u),++r)if(!u[r].cJ())s=!1
return s},
i:function(a){return this.Y()},
K:function(a){var u,t,s,r
u=H.d([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r)C.a.h(u,t[r].K(a))
return C.a.m(u,"\n")},
Y:function(){return this.K("")},
shy:function(a){this.b=H.l(a,"$ib",[F.ad],"$ab")}}
F.iv.prototype={
gk:function(a){return this.b.length},
df:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.bl(0,p,n)){p.bj()
break}}}}},
de:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=J.Y(s.a,s.b)
if(t)s.bj()}},
i:function(a){return this.Y()},
K:function(a){var u,t,s,r
u=H.d([],[P.f])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.h(r,s)
C.a.h(u,r[s].K(a+(""+s+". ")))}return C.a.m(u,"\n")},
Y:function(){return this.K("")},
shK:function(a){this.b=H.l(a,"$ib",[F.bM],"$ab")}}
F.iw.prototype={
gk:function(a){return 0},
l9:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.h(t,u)
t=t[u].glC()
t=t.glz(t)
if(t.gk(t).dq(0,1)){t=this.b
return H.h(t,u)
t[u].bj()}}},
i:function(a){return this.Y()},
K:function(a){var u,t,s
u=H.d([],[P.f])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.h(t,s)
C.a.h(u,t[s].K(a))}return C.a.m(u,"\n")},
Y:function(){return this.K("")},
scu:function(a){this.b=H.l(a,"$ib",[F.ca],"$ab")}}
F.as.prototype={
es:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.jw(this.cx,s,p,u,t,r,q,a,o)},
kM:function(a){var u,t
if(a.B(0,$.aF())){u=this.f
t=[P.B]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.B(0,$.bz())){u=this.r
t=[P.B]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.B(0,$.by())){u=this.x
t=[P.B]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.B(0,$.b2())){u=this.y
t=[P.B]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.B(0,$.bA())){u=this.z
t=[P.B]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.B(0,$.dr())){u=this.Q
t=[P.B]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.B(0,$.ds())){u=this.Q
t=[P.B]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.B(0,$.ct()))return H.d([this.ch],[P.B])
else if(a.B(0,$.bx())){u=this.cx
t=[P.B]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.B])},
cL:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.d4()
this.d.J(0,new F.jH(u))
u=u.a
this.r=u.C(0,Math.sqrt(u.F(u)))
u=this.a
if(u!=null){u.an()
u=this.a.e
if(u!=null)u.aS(0)}return!0},
cJ:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.d4()
this.d.J(0,new F.jG(u))
u=u.a
this.x=u.C(0,Math.sqrt(u.F(u)))
u=this.a
if(u!=null){u.an()
u=this.a.e
if(u!=null)u.aS(0)}return!0},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.Y()},
K:function(a){var u,t,s
u=H.d([],[P.f])
C.a.h(u,C.c.aP(J.aO(this.e),0))
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
C.a.h(u,V.Z(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.m(u,", ")
return a+"{"+s+"}"},
Y:function(){return this.K("")}}
F.jH.prototype={
$1:function(a){var u,t
H.e(a,"$iad")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.q(0,u)}},
$S:9}
F.jG.prototype={
$1:function(a){var u,t
H.e(a,"$iad")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.q(0,u)}},
$S:9}
F.jx.prototype={
I:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.h(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.c(P.v("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.an()
return!0},
k_:function(a,b,c,d,e,f,g,h,i){var u=F.jw(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bB:function(a,b,c,d,e,f){return this.k_(a,null,b,c,null,d,e,f,0)},
gk:function(a){return this.c.length},
aM:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s)u[s].cL()
return!0},
cK:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s)u[s].cJ()
return!0},
kb:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.C(0,Math.sqrt(p*p+o*o+n*n))
if(!J.Y(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.G(null)}}}}return!0},
i:function(a){return this.Y()},
K:function(a){var u,t,s,r
this.I()
u=H.d([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r)C.a.h(u,t[r].K(a))
return C.a.m(u,"\n")},
Y:function(){return this.K("")},
sjz:function(a){this.c=H.l(a,"$ib",[F.as],"$ab")}}
F.jy.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b<t){if(b<0)return H.h(u,b)
return u[b]}b-=t
u=this.c
s=u.length
if(b<s){if(b<0)return H.h(u,b)
return u[b]}b-=s
u=this.d
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
J:function(a,b){H.n(b,{func:1,ret:-1,args:[F.ad]})
C.a.J(this.b,b)
C.a.J(this.c,new F.jz(this,b))
C.a.J(this.d,new F.jA(this,b))},
i:function(a){return this.Y()},
K:function(a){var u,t,s,r
u=H.d([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r)C.a.h(u,t[r].K(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r)C.a.h(u,t[r].K(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r)C.a.h(u,t[r].K(a))
return C.a.m(u,"\n")},
Y:function(){return this.K("")},
shz:function(a){this.b=H.l(a,"$ib",[F.ad],"$ab")},
shA:function(a){this.c=H.l(a,"$ib",[F.ad],"$ab")},
shB:function(a){this.d=H.l(a,"$ib",[F.ad],"$ab")}}
F.jz.prototype={
$1:function(a){H.e(a,"$iad")
if(!J.Y(a.a,this.a))this.b.$1(a)},
$S:9}
F.jA.prototype={
$1:function(a){var u
H.e(a,"$iad")
u=this.a
if(!J.Y(a.a,u)&&!J.Y(a.b,u))this.b.$1(a)},
$S:9}
F.jB.prototype={
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.h(u,s)
return u[s]}else{if(b<0)return H.h(u,b)
return u[b]}},
i:function(a){return this.Y()},
K:function(a){var u,t,s,r
u=H.d([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r)C.a.h(u,t[r].K(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r)C.a.h(u,t[r].K(a))
return C.a.m(u,"\n")},
Y:function(){return this.K("")},
shL:function(a){this.b=H.l(a,"$ib",[F.bM],"$ab")},
shM:function(a){this.c=H.l(a,"$ib",[F.bM],"$ab")}}
F.jD.prototype={}
F.jC.prototype={
bl:function(a,b,c){return J.Y(b.f,c.f)}}
F.jE.prototype={}
F.i7.prototype={
kQ:function(a){var u,t,s,r,q,p,o,n,m
H.l(a,"$ib",[F.as],"$ab")
u=V.d4()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.T(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.C(0,Math.sqrt(u.F(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.I)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.C(0,Math.sqrt(o*o+n*n+m*m))}if(!J.Y(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.G(null)}}}return}}
F.jF.prototype={
gk:function(a){return 0},
i:function(a){return this.Y()},
K:function(a){var u,t,s
u=H.d([],[P.f])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.h(t,s)
C.a.h(u,t[s].K(a))}return C.a.m(u,"\n")},
Y:function(){return this.K("")},
scu:function(a){this.b=H.l(a,"$ib",[F.ca],"$ab")}}
O.h4.prototype={
gt:function(){var u=this.r
if(u==null){u=D.L()
this.r=u}return u},
a7:function(a){var u=this.r
if(u!=null)u.G(a)},
ax:function(){return this.a7(null)},
ser:function(a){if(this.b!=a){this.b=a
this.ax()}},
sem:function(a){if(this.c!=a){this.c=a
this.ax()}},
sel:function(a){var u=a==null?V.bN():a
this.f=u
if(!J.Y(u,a)){this.f=a
this.ax()}},
ak:function(a,b){},
W:function(a,b){H.l(a,"$ib",[T.bQ],"$ab")
if(b!=null)if(!C.a.a_(a,b)){b.a=a.length
C.a.h(a,b)}},
dg:function(a,b){var u,t,s,r,q,p,o
if(this.a==null){u=H.e(a.fr.j(0,"Distort"),"$idF")
if(u==null){t=a.a
u=new A.dF(t,"Distort")
u.c9(t,"Distort")
u.d_(0,$.nF,$.nE)
u.z=u.x.j(0,"posAttr")
u.Q=u.x.j(0,"txt2DAttr")
u.ch=H.j(u.y.p(0,"projViewObjMat"),"$ial")
u.cx=H.j(u.y.p(0,"colorTxt2DMat"),"$ibS")
u.cy=H.j(u.y.p(0,"bumpTxt2DMat"),"$ibS")
u.db=H.j(u.y.p(0,"colorTxt"),"$iai")
u.dx=H.j(u.y.p(0,"bumpTxt"),"$iai")
u.dy=H.j(u.y.p(0,"nullColorTxt"),"$iM")
u.fr=H.j(u.y.p(0,"nullBumpTxt"),"$iM")
u.fx=H.j(u.y.p(0,"bumpMat"),"$ial")
a.cC(u)}this.a=u}if(b.e==null){t=b.d
s=$.aF()
r=$.b2()
r=t.cI(new Z.d5(a.a),new Z.b1(s.a|r.a))
r.az($.aF()).e=this.a.z.c
r.az($.b2()).e=this.a.Q.c
b.e=r}q=H.d([],[T.bQ])
this.W(q,this.b)
this.W(q,this.c)
for(t=a.a,p=0;p<q.length;++p){s=q[p]
if(!s.c&&s.d){s.c=!0
C.b.bA(t,33984+s.a)
C.b.a8(t,3553,s.b)}}s=this.a
s.a3(a)
r=this.b
s.ag(s.db,s.dy,r)
r=this.c
s.ag(s.dx,s.fr,r)
r=a.gfe()
o=s.ch
o.toString
o.aa(r.a9(0,!0))
r=this.d
o=s.cx
o.toString
o.aa(r.a9(0,!0))
r=this.e
o=s.cy
o.toString
o.aa(r.a9(0,!0))
r=this.f
s=s.fx
s.toString
s.aa(r.a9(0,!0))
s=b.e
if(s instanceof Z.bZ){s.a3(a)
s.ai(a)
s.ao(a)}else b.e=null
s=this.a
s.toString
C.b.c_(t,null)
s.x.cQ()
for(p=0;p<q.length;++p){s=q[p]
if(s.c){s.c=!1
C.b.bA(t,33984+s.a)
C.b.a8(t,3553,null)}}}}
O.e_.prototype={
gt:function(){var u=this.dy
if(u==null){u=D.L()
this.dy=u}return u},
a7:function(a){var u
H.e(a,"$iz")
u=this.dy
if(u!=null)u.G(a)},
ax:function(){return this.a7(null)},
e2:function(a){H.e(a,"$iz")
this.a=null
this.a7(a)},
j3:function(){return this.e2(null)},
i_:function(a,b){var u=V.ax
u=new D.bJ(a,H.l(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.a7(u)},
i1:function(a,b){var u=V.ax
u=new D.bK(a,H.l(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.a7(u)},
dK:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.e.ac(u.e.length+3,4)*4
s=C.e.ac(u.f.length+3,4)*4
r=C.e.ac(u.r.length+3,4)*4
q=C.e.ac(u.x.length+3,4)*4
p=C.e.ac(u.y.length+3,4)*4
o=C.e.ac(u.z.length+3,4)*4
n=C.e.ac(this.e.a.length+3,4)*4
u=this.f.c
m=this.r.c
l=this.x.c
k=this.y.c
j=this.z.c
i=this.Q.c
h=this.cx.c
g=this.cy.c
f=this.db.c
e="MaterialLight_"+C.e.i(u.a)+C.e.i(m.a)+C.e.i(l.a)+C.e.i(k.a)+C.e.i(j.a)+C.e.i(i.a)+C.e.i(h.a)+C.e.i(g.a)+C.e.i(f.a)
e+"_"
e+"_0"
e+"_00"
e+"_000"
e=e+"_000_"+n+"_"+t+"_"+s+"_"+r+"_"+q+"_"+p+"_"+o
d=h!==C.d||g!==C.d
c=m!==C.d||l!==C.d||k!==C.d||j!==C.d
b=j===C.d
a=!b||d
a0=l!==C.d||k!==C.d||!b||i!==C.d||d
b=i===C.d
a1=!b
a2=u===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h||h===C.h||g===C.h||f===C.h
a3=u===C.i||m===C.i||l===C.i||k===C.i||j===C.i||i===C.i||h===C.i||g===C.i||f===C.i
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.aF()
if(a0){b=$.bz()
a7=new Z.b1(a7.a|b.a)}if(a1){b=$.by()
a7=new Z.b1(a7.a|b.a)}if(a2){b=$.b2()
a7=new Z.b1(a7.a|b.a)}if(a3){b=$.bA()
a7=new Z.b1(a7.a|b.a)}if(a5){b=$.bx()
a7=new Z.b1(a7.a|b.a)}return new A.hR(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
W:function(a,b){H.l(a,"$ib",[T.bQ],"$ab")},
ak:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.av(u,u.length,0,[H.r(u,0)]);u.D();){t=u.d
t.toString
s=$.jv
if(s==null){s=new V.T(0,0,1)
$.jv=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.dj(s)}}},
dg:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.dK()
t=H.e(a2.fr.j(0,u.ay),"$ie0")
if(t==null){t=A.nT(u,a2.a)
a2.cC(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bE
u=a3.e
if(!(u instanceof Z.bZ)){a3.e=null
u=null}if(u==null||!u.d.B(0,r)){u=s.r1
if(u)a3.d.aM()
q=s.r2
if(q){p=a3.d
o=p.e
if(o!=null)++o.d
p.d.cK()
p.a.cK()
p=p.e
if(p!=null)p.aS(0)}p=s.ry
if(p){o=a3.d
n=o.e
if(n!=null)++n.d
o.a.kb()
o=o.e
if(o!=null)o.aS(0)}m=a3.d.cI(new Z.d5(a2.a),r)
m.az($.aF()).e=this.a.Q.c
if(u)m.az($.bz()).e=this.a.cx.c
if(q)m.az($.by()).e=this.a.ch.c
if(s.rx)m.az($.b2()).e=this.a.cy.c
if(p)m.az($.bA()).e=this.a.db.c
if(s.x1)m.az($.bx()).e=this.a.dx.c
a3.e=m}u=T.bQ
l=H.d([],[u])
this.a.a3(a2)
if(s.fx){q=this.a
p=a2.dx
p=p.ga5(p)
q=q.dy
q.toString
q.aa(p.a9(0,!0))}if(s.fy){q=this.a
p=a2.cx
if(p==null){p=a2.db
p=p.ga5(p)
o=a2.dx
o=p.v(0,o.ga5(o))
a2.cx=o
p=o}q=q.fr
q.toString
q.aa(p.a9(0,!0))}q=this.a
p=a2.gfe()
q=q.fy
q.toString
q.aa(p.a9(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.aa(C.r.a9(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.aa(C.r.a9(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.aa(C.r.a9(p,!0))}if(s.aF>0){k=this.e.a.length
q=this.a.k4
C.b.P(q.a,q.d,k)
for(q=[P.B],j=0;j<k;++j){p=this.a
o=this.e.a
if(j>=o.length)return H.h(o,j)
o=o[j]
p.toString
H.e(o,"$iax")
p=p.r1
if(j>=p.length)return H.h(p,j)
p=p[j]
i=new Float32Array(H.cj(H.l(o.a9(0,!0),"$ib",q,"$ab")))
C.b.fo(p.a,p.d,!1,i)}}switch(s.a){case C.d:break
case C.j:q=this.a
p=this.f.f
q=q.r2
q.toString
o=p.a
n=p.b
p=p.c
C.b.A(q.a,q.d,o,n,p)
break
case C.h:this.W(l,this.f.d)
q=this.a
p=this.f.d
q.ag(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.A(p.a,p.d,o,n,q)
break
case C.i:this.W(l,this.f.e)
q=this.a
p=this.f.e
q.as(q.ry,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.A(p.a,p.d,o,n,q)
break}if(s.k2){switch(s.b){case C.d:break
case C.j:q=this.a
p=this.r.f
q=q.x2
q.toString
o=p.a
n=p.b
p=p.c
C.b.A(q.a,q.d,o,n,p)
break
case C.h:this.W(l,this.r.d)
q=this.a
p=this.r.d
q.ag(q.y1,q.aF,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.A(p.a,p.d,o,n,q)
break
case C.i:this.W(l,this.r.e)
q=this.a
p=this.r.e
q.as(q.y2,q.aF,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.A(p.a,p.d,o,n,q)
break}switch(s.c){case C.d:break
case C.j:q=this.a
p=this.x.f
q=q.ay
q.toString
o=p.a
n=p.b
p=p.c
C.b.A(q.a,q.d,o,n,p)
break
case C.h:this.W(l,this.x.d)
q=this.a
p=this.x.d
q.ag(q.bE,q.bF,p)
p=this.a
q=this.x.f
p=p.ay
p.toString
o=q.a
n=q.b
q=q.c
C.b.A(p.a,p.d,o,n,q)
break
case C.i:this.W(l,this.x.e)
q=this.a
p=this.x.e
q.as(q.eA,q.bF,p)
p=this.a
q=this.x.f
p=p.ay
p.toString
o=q.a
n=q.b
q=q.c
C.b.A(p.a,p.d,o,n,q)
break}switch(s.d){case C.d:break
case C.j:q=this.a
p=this.y.f
q=q.bG
q.toString
o=p.a
n=p.b
p=p.c
C.b.A(q.a,q.d,o,n,p)
break
case C.h:this.W(l,this.y.d)
q=this.a
p=this.y.d
q.ag(q.eB,q.bH,p)
p=this.a
q=this.y.f
p=p.bG
p.toString
o=q.a
n=q.b
q=q.c
C.b.A(p.a,p.d,o,n,q)
break
case C.i:this.W(l,this.y.e)
q=this.a
p=this.y.e
q.as(q.eC,q.bH,p)
p=this.a
q=this.y.f
p=p.bG
p.toString
o=q.a
n=q.b
q=q.c
C.b.A(p.a,p.d,o,n,q)
break}switch(s.e){case C.d:break
case C.j:q=this.a
p=this.z.f
q=q.bI
q.toString
o=p.a
n=p.b
p=p.c
C.b.A(q.a,q.d,o,n,p)
p=this.a
n=this.z.ch
p=p.bK
C.b.O(p.a,p.d,n)
break
case C.h:this.W(l,this.z.d)
q=this.a
p=this.z.d
q.ag(q.eD,q.bJ,p)
p=this.a
q=this.z.f
p=p.bI
p.toString
o=q.a
n=q.b
q=q.c
C.b.A(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bK
C.b.O(q.a,q.d,n)
break
case C.i:this.W(l,this.z.e)
q=this.a
p=this.z.e
q.as(q.eE,q.bJ,p)
p=this.a
q=this.z.f
p=p.bI
p.toString
o=q.a
n=q.b
q=q.c
C.b.A(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bK
C.b.O(q.a,q.d,n)
break}if(s.z>0){k=this.dx.e.length
q=this.a.eP
C.b.P(q.a,q.d,k)
q=a2.db
h=q.ga5(q)
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.I)(q),++f){e=q[f]
o=this.a.cS
if(g>=o.length)return H.h(o,g)
d=o[g]
o=h.dj(e.a)
n=o.a
c=o.b
b=o.c
b=o.C(0,Math.sqrt(n*n+c*c+b*b))
c=d.b
n=b.a
o=b.b
b=b.c
C.b.A(c.a,c.d,n,o,b)
b=e.c
o=d.c
C.b.A(o.a,o.d,b.a,b.b,b.c);++g}}if(s.Q>0){k=this.dx.f.length
q=this.a.eQ
C.b.P(q.a,q.d,k)
q=a2.db
h=q.ga5(q)
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.I)(q),++f){e=q[f]
o=this.a.cT
if(g>=o.length)return H.h(o,g)
d=o[g]
o=e.gbo(e)
n=d.b
C.b.A(n.a,n.d,o.a,o.b,o.c)
o=h.bs(e.gbo(e))
n=d.c
C.b.A(n.a,n.d,o.a,o.b,o.c)
o=e.gaE(e)
n=d.d
C.b.A(n.a,n.d,o.a,o.b,o.c)
o=e.gcD()
n=d.e
C.b.O(n.a,n.d,o)
o=e.gcE()
n=d.f
C.b.O(n.a,n.d,o)
o=e.gcF()
n=d.r
C.b.O(n.a,n.d,o);++g}}if(s.ch>0){k=this.dx.r.length
q=this.a.eR
C.b.P(q.a,q.d,k)
q=a2.db
h=q.ga5(q)
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.I)(q),++f){e=q[f]
o=this.a.cU
if(g>=o.length)return H.h(o,g)
d=o[g]
o=e.gbo(e)
n=d.b
C.b.A(n.a,n.d,o.a,o.b,o.c)
o=e.gcP(e).ly()
n=d.c
C.b.A(n.a,n.d,o.a,o.b,o.c)
o=h.bs(e.gbo(e))
n=d.d
C.b.A(n.a,n.d,o.a,o.b,o.c)
o=e.gaE(e)
n=d.e
C.b.A(n.a,n.d,o.a,o.b,o.c)
o=e.glw()
n=d.f
C.b.O(n.a,n.d,o)
o=e.glv()
n=d.r
C.b.O(n.a,n.d,o)
o=e.gcD()
n=d.x
C.b.O(n.a,n.d,o)
o=e.gcE()
n=d.y
C.b.O(n.a,n.d,o)
o=e.gcF()
n=d.z
C.b.O(n.a,n.d,o);++g}}if(s.cx>0){k=this.dx.x.length
q=this.a.eS
C.b.P(q.a,q.d,k)
q=a2.db
h=q.ga5(q)
for(q=this.dx.x,p=q.length,o=[u],g=0,f=0;f<q.length;q.length===p||(0,H.I)(q),++f){e=q[f]
n=this.a.cV
if(g>=n.length)return H.h(n,g)
d=n[g]
n=e.gbq()
H.l(l,"$ib",o,"$ab")
if(!C.a.a_(l,n)){n.sf1(0,l.length)
C.a.h(l,n)}n=e.gcP(e)
c=d.d
C.b.A(c.a,c.d,n.a,n.b,n.c)
n=e.gbZ()
c=d.b
C.b.A(c.a,c.d,n.a,n.b,n.c)
n=e.gbX(e)
c=d.c
C.b.A(c.a,c.d,n.a,n.b,n.c)
n=h.dj(e.gcP(e))
c=n.a
b=n.b
a=n.c
a=n.C(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
n=a.b
a=a.c
C.b.A(b.a,b.d,c,n,a)
a=e.gaE(e)
n=d.f
C.b.A(n.a,n.d,a.a,a.b,a.c)
a=e.gbq()
n=a.gf5(a)
if(!n){n=d.x
C.b.P(n.a,n.d,1)}else{n=d.r
c=a.d
b=n.a
n=n.d
if(!c)C.b.P(b,n,0)
else C.b.P(b,n,a.a)
n=d.x
C.b.P(n.a,n.d,0)}++g}}if(s.cy>0){k=this.dx.y.length
q=this.a.eT
C.b.P(q.a,q.d,k)
q=a2.db
h=q.ga5(q)
for(q=this.dx.y,p=q.length,o=[P.B],n=[u],g=0,f=0;f<q.length;q.length===p||(0,H.I)(q),++f){e=q[f]
c=this.a.cW
if(g>=c.length)return H.h(c,g)
d=c[g]
c=e.gbq()
H.l(l,"$ib",n,"$ab")
if(!C.a.a_(l,c)){c.sf1(0,l.length)
C.a.h(l,c)}a0=h.v(0,e.ga5(e))
c=e.ga5(e)
b=$.cO
if(b==null){b=new V.a8(0,0,0)
$.cO=b}b=c.bs(b)
c=d.b
C.b.A(c.a,c.d,b.a,b.b,b.c)
c=$.cO
if(c==null){c=new V.a8(0,0,0)
$.cO=c}c=a0.bs(c)
b=d.c
C.b.A(b.a,b.d,c.a,c.b,c.c)
c=a0.d2(0)
b=d.d
i=new Float32Array(H.cj(H.l(new V.cG(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).a9(0,!0),"$ib",o,"$ab")))
C.b.fn(b.a,b.d,!1,i)
b=e.gaE(e)
c=d.e
C.b.A(c.a,c.d,b.a,b.b,b.c)
b=e.gbq()
c=b.gf5(b)
if(!c){c=d.r
C.b.P(c.a,c.d,1)}else{c=d.f
a=b.d
a1=c.a
c=c.d
if(a<6)C.b.P(a1,c,0)
else C.b.P(a1,c,b.a)
c=d.r
C.b.P(c.a,c.d,0)}c=e.gcD()
b=d.x
C.b.O(b.a,b.d,c)
c=e.gcE()
b=d.y
C.b.O(b.a,b.d,c)
c=e.gcF()
b=d.z
C.b.O(b.a,b.d,c);++g}}if(s.db>0){k=this.dx.z.length
q=this.a.eU
C.b.P(q.a,q.d,k)
q=a2.db
h=q.ga5(q)
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.I)(q),++f){e=q[f]
o=this.a.cX
if(g>=o.length)return H.h(o,g)
d=o[g]
o=e.gbq()
H.l(l,"$ib",u,"$ab")
if(!C.a.a_(l,o)){o.sf1(0,l.length)
C.a.h(l,o)}o=e.gbo(e)
n=d.b
C.b.A(n.a,n.d,o.a,o.b,o.c)
o=e.gcP(e)
n=d.c
C.b.A(n.a,n.d,o.a,o.b,o.c)
o=e.gbZ()
n=d.d
C.b.A(n.a,n.d,o.a,o.b,o.c)
o=e.gbX(e)
n=d.e
C.b.A(n.a,n.d,o.a,o.b,o.c)
o=h.bs(e.gbo(e))
n=d.f
C.b.A(n.a,n.d,o.a,o.b,o.c)
o=e.gbq()
n=o.gf5(o)
if(!n){o=d.x
C.b.P(o.a,o.d,1)}else{n=d.r
c=o.d
b=n.a
n=n.d
if(!c)C.b.P(b,n,0)
else C.b.P(b,n,o.a)
o=d.x
C.b.P(o.a,o.d,0)}o=e.gaE(e)
n=d.y
C.b.A(n.a,n.d,o.a,o.b,o.c)
o=e.glA()
n=d.z
C.b.O(n.a,n.d,o)
o=e.glB()
n=d.Q
C.b.O(n.a,n.d,o)
o=e.gcD()
n=d.ch
C.b.O(n.a,n.d,o)
o=e.gcE()
n=d.cx
C.b.O(n.a,n.d,o)
o=e.gcF()
n=d.cy
C.b.O(n.a,n.d,o);++g}}}switch(s.f){case C.d:break
case C.j:break
case C.h:this.W(l,this.Q.d)
u=this.a
q=this.Q.d
u.ag(u.eF,u.bL,q)
break
case C.i:this.W(l,this.Q.e)
u=this.a
q=this.Q.e
u.as(u.eG,u.bL,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db
q=q.ga5(q).d2(0)
a2.Q=q}u=u.id
u.toString
u.aa(q.a9(0,!0))}if(s.dy){this.W(l,this.ch)
u=this.a
q=this.ch
u.as(u.eH,u.eI,q)
switch(s.r){case C.d:break
case C.j:u=this.a
q=this.cx.f
u=u.bM
u.toString
p=q.a
o=q.b
q=q.c
C.b.A(u.a,u.d,p,o,q)
break
case C.h:this.W(l,this.cx.d)
u=this.a
q=this.cx.d
u.ag(u.eJ,u.bN,q)
q=this.a
u=this.cx.f
q=q.bM
q.toString
p=u.a
o=u.b
u=u.c
C.b.A(q.a,q.d,p,o,u)
break
case C.i:this.W(l,this.cx.e)
u=this.a
q=this.cx.e
u.as(u.eK,u.bN,q)
q=this.a
u=this.cx.f
q=q.bM
q.toString
p=u.a
o=u.b
u=u.c
C.b.A(q.a,q.d,p,o,u)
break}switch(s.x){case C.d:break
case C.j:u=this.a
q=this.cy.f
u=u.bP
u.toString
p=q.a
o=q.b
q=q.c
C.b.A(u.a,u.d,p,o,q)
q=this.a
o=this.cy.ch
q=q.bO
C.b.O(q.a,q.d,o)
break
case C.h:this.W(l,this.cy.d)
u=this.a
q=this.cy.d
u.ag(u.eL,u.bQ,q)
q=this.a
u=this.cy.f
q=q.bP
q.toString
p=u.a
o=u.b
u=u.c
C.b.A(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bO
C.b.O(u.a,u.d,o)
break
case C.i:this.W(l,this.cy.e)
u=this.a
q=this.cy.e
u.as(u.eM,u.bQ,q)
q=this.a
u=this.cy.f
q=q.bP
q.toString
p=u.a
o=u.b
u=u.c
C.b.A(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bO
C.b.O(u.a,u.d,o)
break}}u=s.y
q=u!==C.d
if(q){switch(u){case C.d:break
case C.j:u=this.a
p=this.db.f
u=u.bR
C.b.O(u.a,u.d,p)
break
case C.h:this.W(l,this.db.d)
u=this.a
p=this.db.d
u.ag(u.eN,u.bS,p)
p=this.a
u=this.db.f
p=p.bR
C.b.O(p.a,p.d,u)
break
case C.i:this.W(l,this.db.e)
u=this.a
p=this.db.e
u.as(u.eO,u.bS,p)
p=this.a
u=this.db.f
p=p.bR
C.b.O(p.a,p.d,u)
break}u=a2.a
C.b.bk(u,3042)
C.b.ka(u,770,771)}for(j=0;j<l.length;++j)l[j].a3(a2)
u=a3.e
u.a3(a2)
u.ai(a2)
u.ao(a2)
if(q)C.b.ko(a2.a,3042)
for(j=0;j<l.length;++j)l[j].ao(a2)
u=this.a
u.toString
C.b.c_(a2.a,null)
u.x.cQ()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dK().ay},
shl:function(a){this.e=H.l(a,"$ia3",[V.ax],"$aa3")}}
O.hP.prototype={}
O.e1.prototype={
aY:function(){}}
O.hQ.prototype={}
O.bb.prototype={
e5:function(a){var u,t
if(!J.Y(this.f,a)){u=this.f
this.f=a
t=new D.O(this.b+".color",u,a,this,[V.a4])
t.b=!0
this.a.a7(t)}},
aY:function(){this.fT()
this.e5(new V.a4(1,1,1))},
saE:function(a,b){var u
if(this.c===C.d){this.c=C.j
this.aY()
u=this.a
u.a=null
u.a7(null)}this.e5(b)}}
O.hS.prototype={
j8:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.V().a)){this.ch=a
u=new D.O(this.b+".refraction",u,a,this,[P.B])
u.b=!0
this.a.a7(u)}},
aY:function(){this.c8()
this.j8(1)}}
O.hT.prototype={
cz:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.V().a)){this.ch=a
u=new D.O(this.b+".shininess",u,a,this,[P.B])
u.b=!0
this.a.a7(u)}},
aY:function(){this.c8()
this.cz(100)}}
O.eg.prototype={
gt:function(){var u=this.e
if(u==null){u=D.L()
this.e=u}return u},
a7:function(a){var u
H.e(a,"$iz")
u=this.e
if(u!=null)u.G(a)},
ax:function(){return this.a7(null)},
ak:function(a,b){},
dg:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.e(a.fr.j(0,"Skybox"),"$ieh")
if(u==null){t=a.a
u=new A.eh(t,"Skybox")
u.c9(t,"Skybox")
u.d_(0,$.od,$.oc)
u.z=u.x.j(0,"posAttr")
u.Q=H.j(u.y.j(0,"fov"),"$ia1")
u.ch=H.j(u.y.j(0,"ratio"),"$ia1")
u.cx=H.j(u.y.j(0,"boxClr"),"$iN")
u.cy=H.j(u.y.j(0,"boxTxt"),"$iam")
u.db=H.j(u.y.j(0,"viewMat"),"$ial")
a.cC(u)}this.a=u}if(b.e==null){t=b.d.cI(new Z.d5(a.a),$.aF())
t.az($.aF()).e=this.a.z.c
b.e=t}t=this.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
C.b.bA(s,33985)
C.b.a8(s,34067,t.b)}}t=a.d
s=a.c
r=this.a
r.a3(a)
q=this.b
p=r.Q
C.b.O(p.a,p.d,q)
q=r.ch
C.b.O(q.a,q.d,t/s)
s=this.c
r.cy.fM(s)
s=this.d
t=r.cx
C.b.A(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga5(s).d2(0)
r=r.db
r.toString
r.aa(s.a9(0,!0))
t=b.e
if(t instanceof Z.bZ){t.a3(a)
t.ai(a)
t.ao(a)}else b.e=null
t=this.a
t.toString
s=a.a
C.b.c_(s,null)
t.x.cQ()
t=this.c
if(t!=null)if(t.c){t.c=!1
C.b.bA(s,33984+t.a)
C.b.a8(s,34067,null)}}}
O.bP.prototype={}
T.bQ.prototype={}
T.iR.prototype={}
T.iV.prototype={
e6:function(){if(!this.d){this.d=!0
var u=this.y
if(u!=null)u.cR()}},
gt:function(){var u=this.y
if(u==null){u=D.L()
this.y=u}return u}}
T.eo.prototype={
gt:function(){var u=this.e
if(u==null){u=D.L()
this.e=u}return u}}
T.iW.prototype={
kO:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.a8(u,3553,t)
C.b.aj(u,3553,10242,33071)
C.b.aj(u,3553,10243,33071)
C.b.aj(u,3553,10241,9729)
C.b.aj(u,3553,10240,9729)
C.b.a8(u,3553,null);++this.d
s=W.l8(null,a,null)
r=T.lg(0,t)
u=W.p
W.ab(s,"load",H.n(new T.iY(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
kN:function(a){return this.kO(a,!1,!1,!1,!1)},
aW:function(a,b,c,d,e,f){var u,t
u=W.l8(null,c,null);++this.d
t=W.p
W.ab(u,"load",H.n(new T.iX(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
e4:function(a,b,c){var u,t,s,r
b=V.dq(b,2)
u=V.dq(a.width,2)
t=V.dq(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.l4(null,null)
s.width=u
s.height=t
r=H.e(C.q.fA(s,"2d"),"$ic1")
r.imageSmoothingEnabled=!1;(r&&C.D).kq(r,a,0,0,s.width,s.height)
return P.p2(C.D.hF(r,0,0,s.width,s.height))}}}
T.iY.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.e4(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.a8(t,3553,this.e)
C.b.fd(t,37440,this.f?1:0)
C.b.fi(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.ft(t,3553)
C.b.a8(t,3553,null)
u.e6();++s.e},
$S:13}
T.iX.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.e4(this.b,u.c,this.c)
s=u.a
C.b.a8(s,34067,this.d)
C.b.fd(s,37440,this.e?1:0)
C.b.fi(s,this.f,0,6408,6408,5121,t)
C.b.a8(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.cR()}++u.e},
$S:13}
V.bn.prototype={
aO:function(a,b){return!0},
i:function(a){return"all"},
$iaB:1}
V.aB.prototype={}
V.dZ.prototype={
aO:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s)if(u[s].aO(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.I)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sae:function(a){this.a=H.l(a,"$ib",[V.aB],"$ab")},
$iaB:1}
V.ay.prototype={
aO:function(a,b){return!this.fS(0,b)},
i:function(a){return"!["+this.du(0)+"]"}}
V.ii.prototype={
aO:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u,t
u=H.cd(this.a)
t=H.cd(this.b)
return u+".."+t},
$iaB:1}
V.it.prototype={
fY:function(a){var u,t
if(a.a.length<=0)throw H.c(P.v("May not create a SetMatcher with zero characters."))
u=new H.aS([P.o,P.R])
for(t=new H.cF(a,a.gk(a),0,[H.an(a,"w",0)]);t.D();)u.n(0,t.d,!0)
this.sj6(u)},
aO:function(a,b){return this.a.bC(0,b)},
i:function(a){var u=this.a
return P.ek(u.gad(u),0,null)},
sj6:function(a){this.a=H.l(a,"$iD",[P.o,P.R],"$aD")},
$iaB:1}
V.cS.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cX(this.a.l(0,b))
r.sae(H.d([],[V.aB]))
r.c=!1
C.a.h(this.c,r)
return r},
kw:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s){r=u[s]
if(r.aO(0,a))return r}return},
i:function(a){return this.b},
sju:function(a){this.c=H.l(a,"$ib",[V.cX],"$ab")}}
V.et.prototype={
i:function(a){var u,t
u=H.lz(this.b,"\n","\\n")
t=H.lz(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cW.prototype={
aR:function(a,b,c){var u,t,s
H.l(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.I)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
siZ:function(a){var u=P.f
this.c=H.l(a,"$iD",[u,u],"$aD")}}
V.j0.prototype={
l:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cS(this,b)
u.sju(H.d([],[V.cX]))
u.d=null
this.a.n(0,b,u)}return u},
S:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cW(this,a)
t=P.f
u.siZ(new H.aS([t,t]))
this.b.n(0,a,u)}return u},
fm:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.d([],[V.et])
t=this.c
s=[P.o]
r=H.d([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.H(a,o)
m=t.kw(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.ek(r,0,null)
throw H.c(P.v("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.d([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.ek(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.et(j==null?k.b:j,l,o)}++o}}},
sji:function(a){this.a=H.l(a,"$iD",[P.f,V.cS],"$aD")},
sjn:function(a){this.b=H.l(a,"$iD",[P.f,V.cW],"$aD")}}
V.cX.prototype={
i:function(a){return this.b.b+": "+this.du(0)}}
X.fN.prototype={
gt:function(){var u=this.fr
if(u==null){u=D.L()
this.fr=u}return u},
aq:function(a){var u=this.fr
if(u!=null)u.G(a)},
saw:function(a,b){var u
if(b<1)b=1
u=this.a
if(u!==b){this.y=null
this.a=b
this.c=b
u=new D.O("width",u,b,this,[P.o])
u.b=!0
this.aq(u)}},
sau:function(a,b){var u
if(b<1)b=1
u=this.b
if(u!==b){this.y=null
this.b=b
this.d=b
u=new D.O("height",u,b,this,[P.o])
u.b=!0
this.aq(u)}},
a3:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i
if(this.f){u=a.a
t=u.drawingBufferWidth
s=this.r
if(typeof t!=="number")return t.v()
this.saw(0,C.e.a6(t*s))
u=u.drawingBufferHeight
s=this.x
if(typeof u!=="number")return u.v()
this.sau(0,C.e.a6(u*s))}if(this.y==null){u=a.a
t=this.ch
s=this.a
r=this.b
q=H.ac(C.b.c2(u,3379))
p=V.dq(s,2)
o=V.dq(r,2)
q=V.dq(q,2)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
C.b.a8(u,3553,n)
C.b.aj(u,3553,10242,33071)
C.b.aj(u,3553,10243,33071)
C.b.aj(u,3553,10241,9729)
C.b.aj(u,3553,10240,9729)
C.b.fj(u,3553,0,6408,p,o,0,6408,5121,null)
C.b.a8(u,3553,null)
m=T.lg(0,n)
m.e=s
m.f=r
m.r=p
m.x=o
m.e6()
t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.cR()
t=this.ch
s=t.b
this.z=s
this.c=t.r
this.d=t.x
C.b.a8(u,3553,s)
t=u.createRenderbuffer()
this.Q=t
C.b.eh(u,36161,t)
C.b.lb(u,36161,33189,this.c,this.d)
t=u.createFramebuffer()
this.y=t
C.b.bg(u,36160,t)
C.b.kE(u,36160,36064,3553,this.z,0)
C.b.kD(u,36160,36096,36161,this.Q)
C.b.a8(u,3553,null)
C.b.eh(u,36161,null)
C.b.bg(u,36160,null)}u=a.a
C.b.bg(u,36160,this.y)
C.b.bk(u,2884)
C.b.bk(u,2929)
C.b.ev(u,513)
t=this.dy
s=t.c
a.c=C.f.a6(s*this.a)
r=t.d
a.d=C.f.a6(r*this.b)
l=t.a
k=this.c
if(typeof k!=="number")return H.F(k)
j=C.f.a6(l*k)
t=t.b
l=this.d
if(typeof l!=="number")return H.F(l)
C.b.fs(u,j,C.f.a6(t*l),C.f.a6(s*k),C.f.a6(r*l))
C.b.ep(u,this.db)
if(this.cy){t=this.cx
C.b.eo(u,t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)C.b.en(u,i)},
ao:function(a){C.b.bg(a.a,36160,null)}}
X.c_.prototype={$ibd:1}
X.ho.prototype={
gt:function(){var u=this.x
if(u==null){u=D.L()
this.x=u}return u},
a3:function(a){var u,t,s,r,q,p,o
u=a.a
C.b.bg(u,36160,null)
C.b.bk(u,2884)
C.b.bk(u,2929)
C.b.ev(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.F(t)
p=C.f.a6(q*t)
q=r.b
if(typeof s!=="number")return H.F(s)
o=C.f.a6(q*s)
q=C.f.a6(r.c*t)
a.c=q
r=C.f.a6(r.d*s)
a.d=r
C.b.fs(u,p,o,q,r)
C.b.ep(u,this.c)
r=this.a
C.b.eo(u,r.a,r.b,r.c,r.d)
C.b.en(u,16640)},
ao:function(a){}}
X.ht.prototype={
gt:function(){var u=this.b
if(u==null){u=D.L()
this.b=u}return u},
a3:function(a){var u
a.cy.bW(V.bN())
u=V.bN()
a.db.bW(u)},
ao:function(a){a.cy.aQ()
a.db.aQ()},
$ibd:1,
$ic_:1}
X.e7.prototype={
gt:function(){var u=this.f
if(u==null){u=D.L()
this.f=u}return u},
aq:function(a){var u
H.e(a,"$iz")
u=this.f
if(u!=null)u.G(a)},
hf:function(){return this.aq(null)},
a3:function(a){var u,t,s,r,q,p,o,n,m,l
u=a.c
t=a.d
s=this.c
r=this.d
q=this.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.bc(-o/(u/t),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
a.cy.bW(n)
u=$.m4
if(u==null){u=V.m6()
t=V.mt()
s=$.mp
if(s==null){s=new V.T(0,0,-1)
$.mp=s}s=V.lZ(u,t,s)
$.m4=s
m=s}else m=u
u=this.b
if(u!=null){l=u.b6(0,a,this)
if(l!=null)m=l.v(0,m)}a.db.bW(m)},
ao:function(a){a.cy.aQ()
a.db.aQ()},
$ibd:1,
$ic_:1}
X.cU.prototype={}
V.bE.prototype={
bv:function(a){this.b=new P.hr(C.X)
this.c=null
this.scj(H.d([],[[P.b,W.aH]]))},
R:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.d([],[W.aH]))
t=a.split("\n")
for(u=t.length,s=[W.aH],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.d([],s))
o=document.createElement("div")
o.className="codePart"
H.H(p)
n=this.b.hq(p,0,p.length)
m=n==null?p:n
C.k.fI(o,H.lz(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaG(this.d),o)}},
fb:function(a,b){var u,t,s,r
H.l(b,"$ib",[P.f],"$ab")
this.scj(H.d([],[[P.b,W.aH]]))
u=C.a.m(b,"\n")
t=this.c
if(t==null){t=this.bD()
this.c=t}for(t=t.fm(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r)this.bV(t[r])},
scj:function(a){this.d=H.l(a,"$ib",[[P.b,W.aH]],"$ab")}}
V.kX.prototype={
$1:function(a){H.e(a,"$ibh")
P.aA(C.f.fl(this.a.gkC(),2)+" fps")},
$S:50}
V.h2.prototype={
bV:function(a){switch(a.a){case"Class":this.R(a.b,"#551")
break
case"Comment":this.R(a.b,"#777")
break
case"Id":this.R(a.b,"#111")
break
case"Num":this.R(a.b,"#191")
break
case"Reserved":this.R(a.b,"#119")
break
case"String":this.R(a.b,"#171")
break
case"Symbol":this.R(a.b,"#616")
break
case"Type":this.R(a.b,"#B11")
break
case"Whitespace":this.R(a.b,"#111")
break}},
bD:function(){var u,t,s,r
u=V.j1()
u.c=u.l(0,"Start")
t=u.l(0,"Start").m(0,"Id")
s=V.x(new H.u("_"))
C.a.h(t.a,s)
s=V.a0("a","z")
C.a.h(t.a,s)
s=V.a0("A","Z")
C.a.h(t.a,s)
s=u.l(0,"Id").m(0,"Id")
t=V.x(new H.u("_"))
C.a.h(s.a,t)
t=V.a0("0","9")
C.a.h(s.a,t)
t=V.a0("a","z")
C.a.h(s.a,t)
t=V.a0("A","Z")
C.a.h(s.a,t)
t=u.l(0,"Start").m(0,"Int")
s=V.a0("0","9")
C.a.h(t.a,s)
s=u.l(0,"Int").m(0,"Int")
t=V.a0("0","9")
C.a.h(s.a,t)
t=u.l(0,"Int").m(0,"FloatDot")
s=V.x(new H.u("."))
C.a.h(t.a,s)
s=u.l(0,"FloatDot").m(0,"Float")
t=V.a0("0","9")
C.a.h(s.a,t)
t=u.l(0,"Float").m(0,"Float")
s=V.a0("0","9")
C.a.h(t.a,s)
s=u.l(0,"Start").m(0,"Sym")
t=V.x(new H.u("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.l(0,"Sym").m(0,"Sym")
s=V.x(new H.u("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.l(0,"Start").m(0,"OpenDoubleStr")
t=V.x(new H.u('"'))
C.a.h(s.a,t)
t=u.l(0,"OpenDoubleStr").m(0,"CloseDoubleStr")
s=V.x(new H.u('"'))
C.a.h(t.a,s)
s=u.l(0,"OpenDoubleStr").m(0,"EscDoubleStr")
t=V.x(new H.u("\\"))
C.a.h(s.a,t)
t=u.l(0,"EscDoubleStr").m(0,"OpenDoubleStr")
s=V.x(new H.u('"'))
C.a.h(t.a,s)
C.a.h(u.l(0,"OpenDoubleStr").m(0,"OpenDoubleStr").a,new V.bn())
s=u.l(0,"Start").m(0,"OpenSingleStr")
t=V.x(new H.u("'"))
C.a.h(s.a,t)
t=u.l(0,"OpenSingleStr").m(0,"CloseSingleStr")
s=V.x(new H.u("'"))
C.a.h(t.a,s)
s=u.l(0,"OpenSingleStr").m(0,"EscSingleStr")
t=V.x(new H.u("\\"))
C.a.h(s.a,t)
t=u.l(0,"EscSingleStr").m(0,"OpenSingleStr")
s=V.x(new H.u("'"))
C.a.h(t.a,s)
C.a.h(u.l(0,"OpenSingleStr").m(0,"OpenSingleStr").a,new V.bn())
s=u.l(0,"Start").m(0,"Slash")
t=V.x(new H.u("/"))
C.a.h(s.a,t)
t=u.l(0,"Slash").m(0,"Comment")
s=V.x(new H.u("/"))
C.a.h(t.a,s)
s=u.l(0,"Comment").m(0,"EndComment")
t=V.x(new H.u("\n"))
C.a.h(s.a,t)
t=u.l(0,"Comment").m(0,"Comment")
s=new V.ay()
r=[V.aB]
s.sae(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.u("\n"))
C.a.h(s.a,t)
t=u.l(0,"Slash").m(0,"MLComment")
s=V.x(new H.u("*"))
C.a.h(t.a,s)
s=u.l(0,"MLComment").m(0,"MLCStar")
t=V.x(new H.u("*"))
C.a.h(s.a,t)
t=u.l(0,"MLCStar").m(0,"MLComment")
s=new V.ay()
s.sae(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.u("*"))
C.a.h(s.a,t)
t=u.l(0,"MLCStar").m(0,"EndComment")
s=V.x(new H.u("/"))
C.a.h(t.a,s)
s=u.l(0,"Start").m(0,"Whitespace")
t=V.x(new H.u(" \n\t"))
C.a.h(s.a,t)
t=u.l(0,"Whitespace").m(0,"Whitespace")
s=V.x(new H.u(" \n\t"))
C.a.h(t.a,s)
s=u.l(0,"Int")
s.d=s.a.S("Num")
s=u.l(0,"Float")
s.d=s.a.S("Num")
s=u.l(0,"Sym")
s.d=s.a.S("Symbol")
s=u.l(0,"CloseDoubleStr")
s.d=s.a.S("String")
s=u.l(0,"CloseSingleStr")
s.d=s.a.S("String")
s=u.l(0,"EndComment")
s.d=s.a.S("Comment")
s=u.l(0,"Whitespace")
s.d=s.a.S("Whitespace")
s=u.l(0,"Id")
t=s.a.S("Id")
s.d=t
s=[P.f]
t.aR(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aR(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aR(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.hp.prototype={
bV:function(a){switch(a.a){case"Builtin":this.R(a.b,"#411")
break
case"Comment":this.R(a.b,"#777")
break
case"Id":this.R(a.b,"#111")
break
case"Num":this.R(a.b,"#191")
break
case"Preprocess":this.R(a.b,"#737")
break
case"Reserved":this.R(a.b,"#119")
break
case"Symbol":this.R(a.b,"#611")
break
case"Type":this.R(a.b,"#171")
break
case"Whitespace":this.R(a.b,"#111")
break}},
bD:function(){var u,t,s,r
u=V.j1()
u.c=u.l(0,"Start")
t=u.l(0,"Start").m(0,"Id")
s=V.x(new H.u("_"))
C.a.h(t.a,s)
s=V.a0("a","z")
C.a.h(t.a,s)
s=V.a0("A","Z")
C.a.h(t.a,s)
s=u.l(0,"Id").m(0,"Id")
t=V.x(new H.u("_"))
C.a.h(s.a,t)
t=V.a0("0","9")
C.a.h(s.a,t)
t=V.a0("a","z")
C.a.h(s.a,t)
t=V.a0("A","Z")
C.a.h(s.a,t)
t=u.l(0,"Start").m(0,"Int")
s=V.a0("0","9")
C.a.h(t.a,s)
s=u.l(0,"Int").m(0,"Int")
t=V.a0("0","9")
C.a.h(s.a,t)
t=u.l(0,"Int").m(0,"FloatDot")
s=V.x(new H.u("."))
C.a.h(t.a,s)
s=u.l(0,"FloatDot").m(0,"Float")
t=V.a0("0","9")
C.a.h(s.a,t)
t=u.l(0,"Float").m(0,"Float")
s=V.a0("0","9")
C.a.h(t.a,s)
s=u.l(0,"Start").m(0,"Sym")
t=V.x(new H.u("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.l(0,"Sym").m(0,"Sym")
s=V.x(new H.u("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.l(0,"Start").m(0,"Slash")
t=V.x(new H.u("/"))
C.a.h(s.a,t)
t=u.l(0,"Slash").m(0,"Comment")
s=V.x(new H.u("/"))
C.a.h(t.a,s)
C.a.h(u.l(0,"Slash").m(0,"Sym").a,new V.bn())
s=u.l(0,"Comment").m(0,"EndComment")
t=V.x(new H.u("\n"))
C.a.h(s.a,t)
t=u.l(0,"Comment").m(0,"Comment")
s=new V.ay()
r=[V.aB]
s.sae(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.u("\n"))
C.a.h(s.a,t)
t=u.l(0,"Start").m(0,"Preprocess")
s=V.x(new H.u("#"))
C.a.h(t.a,s)
s=u.l(0,"Preprocess").m(0,"Preprocess")
t=new V.ay()
t.sae(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.u("\n"))
C.a.h(t.a,s)
s=u.l(0,"Preprocess").m(0,"EndPreprocess")
t=V.x(new H.u("\n"))
C.a.h(s.a,t)
t=u.l(0,"Start").m(0,"Whitespace")
s=V.x(new H.u(" \n\t"))
C.a.h(t.a,s)
s=u.l(0,"Whitespace").m(0,"Whitespace")
t=V.x(new H.u(" \n\t"))
C.a.h(s.a,t)
t=u.l(0,"Int")
t.d=t.a.S("Num")
t=u.l(0,"Float")
t.d=t.a.S("Num")
t=u.l(0,"Sym")
t.d=t.a.S("Symbol")
t=u.l(0,"EndComment")
t.d=t.a.S("Comment")
t=u.l(0,"EndPreprocess")
t.d=t.a.S("Preprocess")
t=u.l(0,"Whitespace")
t.d=t.a.S("Whitespace")
t=u.l(0,"Id")
s=t.a.S("Id")
t.d=s
t=[P.f]
s.aR(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aR(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aR(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return u}}
V.hq.prototype={
bV:function(a){switch(a.a){case"Attr":this.R(a.b,"#911")
this.R("=","#111")
break
case"Id":this.R(a.b,"#111")
break
case"Other":this.R(a.b,"#111")
break
case"Reserved":this.R(a.b,"#119")
break
case"String":this.R(a.b,"#171")
break
case"Symbol":this.R(a.b,"#616")
break}},
bD:function(){var u,t,s
u=V.j1()
u.c=u.l(0,"Start")
t=u.l(0,"Start").m(0,"Id")
s=V.x(new H.u("_"))
C.a.h(t.a,s)
s=V.a0("a","z")
C.a.h(t.a,s)
s=V.a0("A","Z")
C.a.h(t.a,s)
s=u.l(0,"Id").m(0,"Id")
t=V.x(new H.u("_"))
C.a.h(s.a,t)
t=V.a0("0","9")
C.a.h(s.a,t)
t=V.a0("a","z")
C.a.h(s.a,t)
t=V.a0("A","Z")
C.a.h(s.a,t)
t=u.l(0,"Id").m(0,"Attr")
s=V.x(new H.u("="))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,"Start").m(0,"Sym")
s=V.x(new H.u("</\\-!>="))
C.a.h(t.a,s)
s=u.l(0,"Sym").m(0,"Sym")
t=V.x(new H.u("</\\-!>="))
C.a.h(s.a,t)
t=u.l(0,"Start").m(0,"OpenStr")
s=V.x(new H.u('"'))
C.a.h(t.a,s)
s=u.l(0,"OpenStr").m(0,"CloseStr")
t=V.x(new H.u('"'))
C.a.h(s.a,t)
t=u.l(0,"OpenStr").m(0,"EscStr")
s=V.x(new H.u("\\"))
C.a.h(t.a,s)
s=u.l(0,"EscStr").m(0,"OpenStr")
t=V.x(new H.u('"'))
C.a.h(s.a,t)
C.a.h(u.l(0,"OpenStr").m(0,"OpenStr").a,new V.bn())
C.a.h(u.l(0,"Start").m(0,"Other").a,new V.bn())
t=u.l(0,"Other").m(0,"Other")
s=new V.ay()
s.sae(H.d([],[V.aB]))
C.a.h(t.a,s)
t=V.x(new H.u('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.a0("a","z")
C.a.h(s.a,t)
t=V.a0("A","Z")
C.a.h(s.a,t)
t=u.l(0,"Sym")
t.d=t.a.S("Symbol")
t=u.l(0,"CloseStr")
t.d=t.a.S("String")
t=u.l(0,"Id")
s=t.a.S("Id")
t.d=s
s.aR(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
s=u.l(0,"Attr")
s.d=s.a.S("Attr")
s=u.l(0,"Other")
s.d=s.a.S("Other")
return u}}
V.id.prototype={
fb:function(a,b){H.l(b,"$ib",[P.f],"$ab")
this.scj(H.d([],[[P.b,W.aH]]))
this.R(C.a.m(b,"\n"),"#111")},
bV:function(a){},
bD:function(){return}}
V.ix.prototype={
fZ:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.p).E(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.p.E(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.k.E(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.k.E(q,p)}o=u.createElement("div")
this.a=o
C.k.E(q,o)
this.b=null
o=W.p
W.ab(u,"scroll",H.n(new V.iz(s),{func:1,ret:-1,args:[o]}),!1,o)},
ee:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.f],"$ab")
this.jd()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.fm(C.a.kK(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.I)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.k.E(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.k.E(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.k.E(t,o)
break
case"Link":n=p.b
if(H.pr(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.H(m[1])
l.textContent=H.H(m[0])
C.k.E(t,l)}else{k=P.fo(C.I,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.m(k)
l.textContent=n
C.k.E(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.E(t,o)
break}}C.k.E(this.a,t)},
fz:function(a){var u,t,s,r
u=new V.h2("dart")
u.bv("dart")
t=new V.hp("glsl")
t.bv("glsl")
s=new V.hq("html")
s.bv("html")
r=C.a.ky(H.d([u,t,s],[V.bE]),new V.iA(a))
if(r!=null)return r
u=new V.id("plain")
u.bv("plain")
return u},
ed:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.l(a7,"$ib",[P.f],"$ab")
u=H.d([],[P.o])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.dn(r).ab(r,"+")){C.a.n(a7,s,C.c.aA(r,1))
C.a.h(u,1)
t=!0}else if(C.c.ab(r,"-")){C.a.n(a7,s,C.c.aA(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.fz(a5)
q.fb(0,a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.E(o,n)
C.k.E(this.a,o)
m=P.fo(C.I,a4,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lI(null)
i.href="#"+H.m(m)
i.textContent=a4
C.k.E(j,i)
C.x.E(k,j)
C.n.E(l,k)
C.o.E(n,l)
if(t)for(h=a6,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className="codeLineNums"
if(s>=u.length)return H.h(u,s)
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
a.className="codeLineText"
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.I)(r),++a0)C.x.E(a,r[a0])
C.n.E(e,d)
C.n.E(e,c)
C.n.E(e,a)
C.o.E(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.I)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gX(r);a3.D();)C.x.E(c,a3.gM(a3))
C.n.E(e,d)
C.n.E(e,c)
C.o.E(n,e)}},
jW:function(a){var u,t,s,r,q,p,o
H.l(a,"$ib",[P.f],"$ab")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.k.E(this.a,t)
r=C.o.hH(t,-1)
s=H.e((r&&C.n).dT(r,-1),"$ibg").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto"
for(q=0;q<1;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.e(C.n.dT(r,-1),"$ibg")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.x).E(o,p)}},
jd:function(){var u,t,s,r
if(this.b!=null)return
u=V.j1()
u.c=u.l(0,"Start")
t=u.l(0,"Start").m(0,"Bold")
s=V.x(new H.u("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,"Bold").m(0,"Bold")
s=new V.ay()
r=[V.aB]
s.sae(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.u("*"))
C.a.h(s.a,t)
t=u.l(0,"Bold").m(0,"BoldEnd")
s=V.x(new H.u("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,"Start").m(0,"Italic")
s=V.x(new H.u("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,"Italic").m(0,"Italic")
s=new V.ay()
s.sae(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.u("_"))
C.a.h(s.a,t)
t=u.l(0,"Italic").m(0,"ItalicEnd")
s=V.x(new H.u("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,"Start").m(0,"Code")
s=V.x(new H.u("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,"Code").m(0,"Code")
s=new V.ay()
s.sae(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.u("`"))
C.a.h(s.a,t)
t=u.l(0,"Code").m(0,"CodeEnd")
s=V.x(new H.u("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,"Start").m(0,"LinkHead")
s=V.x(new H.u("["))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,"LinkHead").m(0,"LinkTail")
s=V.x(new H.u("|"))
C.a.h(t.a,s)
s=u.l(0,"LinkHead").m(0,"LinkEnd")
t=V.x(new H.u("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,"LinkHead").m(0,"LinkHead")
t=new V.ay()
t.sae(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.u("|]"))
C.a.h(t.a,s)
s=u.l(0,"LinkTail").m(0,"LinkEnd")
t=V.x(new H.u("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,"LinkTail").m(0,"LinkTail")
t=new V.ay()
t.sae(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.u("|]"))
C.a.h(t.a,s)
C.a.h(u.l(0,"Start").m(0,"Other").a,new V.bn())
s=u.l(0,"Other").m(0,"Other")
t=new V.ay()
t.sae(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.u("*_`["))
C.a.h(t.a,s)
s=u.l(0,"BoldEnd")
s.d=s.a.S("Bold")
s=u.l(0,"ItalicEnd")
s.d=s.a.S("Italic")
s=u.l(0,"CodeEnd")
s.d=s.a.S("Code")
s=u.l(0,"LinkEnd")
s.d=s.a.S("Link")
s=u.l(0,"Other")
s.d=s.a.S("Other")
this.b=u}}
V.iz.prototype={
$1:function(a){P.mh(C.y,new V.iy(this.a))},
$S:13}
V.iy.prototype={
$0:function(){var u,t,s
u=C.f.a6(document.documentElement.scrollTop)
t=this.a.style
s=H.m(-0.01*u)+"px"
t.top=s},
$S:2}
V.iA.prototype={
$1:function(a){return H.e(a,"$ibE").a===this.a},
$S:51}
V.iS.prototype={
ec:function(a,b,c){var u,t,s,r,q
u=W.l8(null,null,null)
u.src=b
u.width=64
u.height=64
t=u.style
t.border="solid 2px white"
t=J.fF(this.c)
s=t.gk(t)
t=W.a7
W.ab(u,"click",H.n(new V.iU(this,u,b,s),{func:1,ret:-1,args:[t]}),!1,t)
J.fF(this.c).h(0,u)
J.fF(this.c).h(0,document.createElement("br"))
r=P.ml().gdc().j(0,H.m(this.a))
if(r==null){this.ea(s)
q=c}else q=P.dp(r,null,null)===s
if(q)u.click()},
h:function(a,b){return this.ec(a,b,!1)},
ea:function(a){var u,t,s,r,q
u=P.ml()
t=P.f
s=P.nP(u.gdc(),t,t)
s.n(0,this.a,""+a)
r=u.ff(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.W).j0(t,new P.kl([],[]).dk(""),"",q)}}
V.iU.prototype={
$1:function(a){var u,t
H.e(a,"$ia7")
u=this.a
t=J.fF(u.c)
t.J(t,new V.iT())
t=this.b.style
t.border="solid 2px black"
u.d.$1(this.c)
u.ea(this.d)},
$S:52}
V.iT.prototype={
$1:function(a){var u
H.e(a,"$iP")
if(!!J.U(a).$ic7){u=a.style
u.border="solid 2px white"}},
$S:53}
X.kT.prototype={
$1:function(a){this.a.sem(this.b.f.kN(a))},
$S:16}
X.kU.prototype={
$1:function(a){var u,t,s,r
H.e(a,"$iz")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.ed("Vertex Shader for distort","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.ed("Fragment Shader for distort","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:8};(function aliases(){var u=J.a.prototype
u.fP=u.i
u=J.dT.prototype
u.fR=u.i
u=P.i.prototype
u.fQ=u.c0
u=W.P.prototype
u.c7=u.at
u=W.f6.prototype
u.fU=u.aC
u=O.e1.prototype
u.fT=u.aY
u=O.bb.prototype
u.c8=u.aY
u=V.dZ.prototype
u.fS=u.aO
u.du=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"oX","oq",10)
u(P,"oY","or",10)
u(P,"oZ","os",10)
t(P,"mQ","oW",3)
s(W,"pc",4,null,["$4"],["ou"],28,0)
s(W,"pd",4,null,["$4"],["ov"],28,0)
var m
r(m=E.ar.prototype,"gf9",0,0,null,["$1","$0"],["fa","kY"],0,0)
r(m,"gf7",0,0,null,["$1","$0"],["f8","kV"],0,0)
q(m,"gkT","kU",7)
q(m,"gkW","kX",7)
r(m=E.es.prototype,"gdw",0,0,null,["$1","$0"],["dA","dz"],0,0)
p(m,"gld","fg",3)
o(m=X.ez.prototype,"gig","ih",11)
o(m,"gi2","i3",11)
o(m,"gi8","i9",4)
o(m,"gik","il",23)
o(m,"gii","ij",23)
o(m,"gip","iq",4)
o(m,"git","iu",4)
o(m,"gic","ie",4)
o(m,"gir","is",4)
o(m,"gia","ib",4)
o(m,"giv","iw",37)
o(m,"gix","iy",11)
o(m,"giN","iO",12)
o(m,"giJ","iK",12)
o(m,"giL","iM",12)
r(D.bG.prototype,"gh3",0,0,null,["$1","$0"],["aI","h4"],0,0)
r(m=D.dV.prototype,"gdX",0,0,null,["$1","$0"],["dY","im"],0,0)
o(m,"giz","iA",39)
q(m,"ghX","hY",19)
q(m,"giD","iE",19)
n(V.W.prototype,"gk","d3",24)
n(V.T.prototype,"gk","d3",24)
r(m=U.cE.prototype,"gaX",0,0,null,["$1","$0"],["T","af"],0,0)
q(m,"ghV","hW",27)
q(m,"giB","iC",27)
r(m=U.eA.prototype,"gaX",0,0,null,["$1","$0"],["T","af"],0,0)
o(m,"gcm","cn",1)
o(m,"gco","cp",1)
o(m,"gcq","cr",1)
r(m=U.eB.prototype,"gaX",0,0,null,["$1","$0"],["T","af"],0,0)
o(m,"gcm","cn",1)
o(m,"gco","cp",1)
o(m,"gcq","cr",1)
o(m,"ghO","hP",1)
o(m,"ghQ","hR",1)
o(m,"gjs","jt",1)
o(m,"gjq","jr",1)
o(m,"gjo","jp",1)
o(U.eC.prototype,"ghT","hU",1)
r(m=M.dB.prototype,"ga1",0,0,null,["$1","$0"],["a2","b9"],0,0)
q(m,"giF","iG",25)
q(m,"giH","iI",25)
r(M.dD.prototype,"ga1",0,0,null,["$1","$0"],["a2","b9"],0,0)
r(m=M.dJ.prototype,"ga1",0,0,null,["$1","$0"],["a2","b9"],0,0)
q(m,"gi4","i5",7)
q(m,"gi6","i7",7)
r(m=O.e_.prototype,"gca",0,0,null,["$1","$0"],["a7","ax"],0,0)
r(m,"gj2",0,0,null,["$1","$0"],["e2","j3"],0,0)
q(m,"ghZ","i_",15)
q(m,"gi0","i1",15)
r(O.eg.prototype,"gca",0,0,null,["$1","$0"],["a7","ax"],0,0)
r(X.e7.prototype,"ghe",0,0,null,["$1","$0"],["aq","hf"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.Q,null)
s(P.Q,[H.lb,J.a,J.av,P.eU,P.i,H.cF,P.b8,H.c5,H.d3,H.fW,H.ij,H.j6,P.bH,H.cx,H.fb,P.ah,H.hD,H.hF,H.hy,P.fh,P.bl,P.aM,P.eE,P.iI,P.cT,P.iJ,P.bh,P.ap,P.kC,P.kf,P.ch,P.eT,P.w,P.kt,P.hL,P.c2,P.hs,P.kA,P.ky,P.R,P.aq,P.a5,P.b7,P.ib,P.ej,P.eM,P.hn,P.bI,P.b,P.D,P.J,P.az,P.f,P.ak,P.ci,P.jm,P.ki,W.fZ,W.bU,W.C,W.e5,W.f6,W.ko,W.dL,W.aD,W.ke,W.fp,P.kk,P.fm,P.k9,P.S,O.a3,O.cH,E.fQ,E.ar,E.ik,E.es,Z.eD,Z.d5,Z.bZ,Z.c8,Z.b1,D.fT,D.c4,D.z,X.dA,X.dU,X.hA,X.hI,X.aC,X.i_,X.j2,X.ez,D.bG,D.a9,D.e8,D.ei,D.ep,D.eq,D.er,V.a4,V.aw,V.hd,V.cG,V.ax,V.aa,V.a8,V.bf,V.ec,V.W,V.T,U.eA,U.eB,U.eC,M.dD,M.dJ,M.aE,A.dx,A.fI,A.hR,A.cY,A.d0,A.cZ,A.d1,A.d_,A.d2,A.c3,A.ev,A.jg,F.ad,F.hh,F.bM,F.hC,F.ca,F.ef,F.iu,F.iv,F.iw,F.as,F.jx,F.jy,F.jB,F.jD,F.jE,F.jF,O.bP,O.e1,T.iW,V.bn,V.aB,V.dZ,V.ii,V.it,V.cS,V.et,V.cW,V.j0,X.cU,X.c_,X.ht,X.e7,V.bE,V.ix,V.iS])
s(J.a,[J.hx,J.dS,J.dT,J.aR,J.bL,J.bq,H.cK,H.bO,W.k,W.fG,W.bY,W.c1,W.b5,W.b6,W.X,W.eG,W.h3,W.h5,W.dG,W.eI,W.dI,W.eK,W.h7,W.p,W.eN,W.aQ,W.dO,W.eP,W.bp,W.dX,W.hU,W.eV,W.eW,W.aT,W.eX,W.f_,W.aU,W.f3,W.ea,W.f5,W.aW,W.f7,W.aX,W.fc,W.aJ,W.ff,W.j_,W.aZ,W.fi,W.j4,W.jr,W.fq,W.fs,W.fu,W.fw,W.fy,P.ba,P.eR,P.be,P.f1,P.ih,P.fd,P.bi,P.fk,P.fJ,P.eF,P.dy,P.dM,P.e9,P.ed,P.cf,P.ee,P.en,P.ew,P.f9])
s(J.dT,[J.ic,J.bT,J.br])
t(J.la,J.aR)
s(J.bL,[J.dR,J.dQ])
t(P.hH,P.eU)
s(P.hH,[H.ex,W.jQ,W.at,P.hj])
t(H.u,H.ex)
s(P.i,[H.ha,H.hM,H.d6])
s(H.ha,[H.c9,H.hE])
s(P.b8,[H.hN,H.jK])
t(H.hO,H.c9)
t(H.fX,H.fW)
s(P.bH,[H.i8,H.hz,H.jk,H.j8,H.fS,H.ir,P.e6,P.aP,P.jl,P.ji,P.cg,P.fV,P.h1])
s(H.cx,[H.kZ,H.iO,H.kO,H.kP,H.kQ,P.jM,P.jL,P.jN,P.jO,P.ks,P.kr,P.jX,P.k0,P.jY,P.jZ,P.k_,P.k3,P.k4,P.k2,P.k1,P.iK,P.iL,P.kI,P.kc,P.kb,P.kd,P.hG,P.hK,P.kz,P.h8,P.h9,P.jq,P.jn,P.jo,P.jp,P.ku,P.kv,P.kx,P.kw,P.kE,P.kD,P.kF,P.kG,W.hb,W.hW,W.hY,W.iq,W.iH,W.jW,W.i6,W.i5,W.kg,W.kh,W.kq,W.kB,P.km,P.kK,P.hk,P.hl,P.fL,E.il,E.im,E.io,E.iZ,D.hf,D.hg,F.kY,F.kL,F.jH,F.jG,F.jz,F.jA,T.iY,T.iX,V.kX,V.iz,V.iy,V.iA,V.iU,V.iT,X.kT,X.kU])
s(H.iO,[H.iF,H.cv])
t(P.hJ,P.ah)
s(P.hJ,[H.aS,W.jP])
t(H.e2,H.bO)
s(H.e2,[H.da,H.dc])
t(H.db,H.da)
t(H.cL,H.db)
t(H.dd,H.dc)
t(H.e3,H.dd)
s(H.e3,[H.i0,H.i1,H.i2,H.i3,H.i4,H.e4,H.cM])
t(P.ka,P.kC)
t(P.k8,P.kf)
t(P.fn,P.hL)
t(P.ey,P.fn)
s(P.c2,[P.fO,P.hc])
t(P.bF,P.iJ)
s(P.bF,[P.fP,P.hr,P.ju,P.jt])
t(P.js,P.hc)
s(P.a5,[P.B,P.o])
s(P.aP,[P.ce,P.hu])
t(P.jS,P.ci)
s(W.k,[W.E,W.hi,W.aV,W.de,W.aY,W.aK,W.dg,W.jJ,W.d7,P.fM,P.bX])
s(W.E,[W.P,W.bD,W.cA,W.d8])
s(W.P,[W.y,P.q])
s(W.y,[W.dv,W.fH,W.cu,W.bC,W.c0,W.aH,W.hm,W.dN,W.c7,W.cI,W.is,W.bg,W.el,W.em,W.iN,W.cV])
s(W.b5,[W.cy,W.h_,W.h0])
t(W.fY,W.b6)
t(W.cz,W.eG)
t(W.eJ,W.eI)
t(W.dH,W.eJ)
t(W.eL,W.eK)
t(W.h6,W.eL)
t(W.aI,W.bY)
t(W.eO,W.eN)
t(W.cC,W.eO)
t(W.eQ,W.eP)
t(W.c6,W.eQ)
t(W.dP,W.cA)
t(W.bR,W.p)
s(W.bR,[W.b9,W.a7,W.b_])
t(W.hV,W.eV)
t(W.hX,W.eW)
t(W.eY,W.eX)
t(W.hZ,W.eY)
t(W.f0,W.f_)
t(W.cN,W.f0)
t(W.f4,W.f3)
t(W.ie,W.f4)
t(W.ip,W.f5)
t(W.df,W.de)
t(W.iC,W.df)
t(W.f8,W.f7)
t(W.iD,W.f8)
t(W.iG,W.fc)
t(W.fg,W.ff)
t(W.iP,W.fg)
t(W.dh,W.dg)
t(W.iQ,W.dh)
t(W.fj,W.fi)
t(W.j3,W.fj)
t(W.jI,W.cI)
t(W.bk,W.a7)
t(W.fr,W.fq)
t(W.jR,W.fr)
t(W.eH,W.dI)
t(W.ft,W.fs)
t(W.k5,W.ft)
t(W.fv,W.fu)
t(W.eZ,W.fv)
t(W.fx,W.fw)
t(W.kj,W.fx)
t(W.fz,W.fy)
t(W.kn,W.fz)
t(W.jT,W.jP)
t(W.jU,P.iI)
t(W.ll,W.jU)
t(W.jV,P.cT)
t(W.kp,W.f6)
t(P.kl,P.kk)
t(P.ae,P.k9)
t(P.eS,P.eR)
t(P.hB,P.eS)
t(P.f2,P.f1)
t(P.i9,P.f2)
t(P.cQ,P.q)
t(P.fe,P.fd)
t(P.iM,P.fe)
t(P.fl,P.fk)
t(P.j5,P.fl)
t(P.fK,P.eF)
t(P.ia,P.bX)
t(P.fa,P.f9)
t(P.iE,P.fa)
s(E.fQ,[Z.dz,A.cR,T.bQ])
s(D.z,[D.bJ,D.bK,D.O,X.ig])
s(X.ig,[X.dY,X.bs,X.cJ,X.eu])
s(O.a3,[D.dV,U.cE,M.dB])
s(D.fT,[U.fU,U.aj])
t(U.dC,U.aj)
s(A.cR,[A.dF,A.e0,A.eh])
s(A.ev,[A.M,A.jc,A.jd,A.jf,A.ja,A.a1,A.jb,A.N,A.je,A.jh,A.bS,A.al,A.ai,A.am])
t(F.iB,F.hh)
t(F.j9,F.hC)
t(F.jC,F.jD)
t(F.i7,F.jE)
s(O.bP,[O.h4,O.e_,O.eg])
s(O.e1,[O.hP,O.hQ,O.bb])
s(O.bb,[O.hS,O.hT])
s(T.bQ,[T.iR,T.eo])
t(T.iV,T.iR)
s(V.dZ,[V.ay,V.cX])
s(X.cU,[X.fN,X.ho])
s(V.bE,[V.h2,V.hp,V.hq,V.id])
u(H.ex,H.d3)
u(H.da,P.w)
u(H.db,H.c5)
u(H.dc,P.w)
u(H.dd,H.c5)
u(P.eU,P.w)
u(P.fn,P.kt)
u(W.eG,W.fZ)
u(W.eI,P.w)
u(W.eJ,W.C)
u(W.eK,P.w)
u(W.eL,W.C)
u(W.eN,P.w)
u(W.eO,W.C)
u(W.eP,P.w)
u(W.eQ,W.C)
u(W.eV,P.ah)
u(W.eW,P.ah)
u(W.eX,P.w)
u(W.eY,W.C)
u(W.f_,P.w)
u(W.f0,W.C)
u(W.f3,P.w)
u(W.f4,W.C)
u(W.f5,P.ah)
u(W.de,P.w)
u(W.df,W.C)
u(W.f7,P.w)
u(W.f8,W.C)
u(W.fc,P.ah)
u(W.ff,P.w)
u(W.fg,W.C)
u(W.dg,P.w)
u(W.dh,W.C)
u(W.fi,P.w)
u(W.fj,W.C)
u(W.fq,P.w)
u(W.fr,W.C)
u(W.fs,P.w)
u(W.ft,W.C)
u(W.fu,P.w)
u(W.fv,W.C)
u(W.fw,P.w)
u(W.fx,W.C)
u(W.fy,P.w)
u(W.fz,W.C)
u(P.eR,P.w)
u(P.eS,W.C)
u(P.f1,P.w)
u(P.f2,W.C)
u(P.fd,P.w)
u(P.fe,W.C)
u(P.fk,P.w)
u(P.fl,W.C)
u(P.eF,P.ah)
u(P.f9,P.w)
u(P.fa,W.C)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.bC.prototype
C.q=W.c0.prototype
C.D=W.c1.prototype
C.k=W.aH.prototype
C.T=W.dG.prototype
C.V=W.dN.prototype
C.W=W.dO.prototype
C.z=W.dP.prototype
C.Y=J.a.prototype
C.a=J.aR.prototype
C.Z=J.dQ.prototype
C.e=J.dR.prototype
C.r=J.dS.prototype
C.f=J.bL.prototype
C.c=J.bq.prototype
C.a5=J.br.prototype
C.ab=W.cN.prototype
C.L=J.ic.prototype
C.M=W.ea.prototype
C.b=P.cf.prototype
C.x=W.bg.prototype
C.o=W.el.prototype
C.n=W.em.prototype
C.C=J.bT.prototype
C.N=W.bk.prototype
C.O=W.d7.prototype
C.Q=new P.fP(!1)
C.P=new P.fO(C.Q)
C.R=new P.ib()
C.S=new P.ju()
C.l=new P.ka()
C.d=new A.c3(0,"ColorSourceType.None")
C.j=new A.c3(1,"ColorSourceType.Solid")
C.h=new A.c3(2,"ColorSourceType.Texture2D")
C.i=new A.c3(3,"ColorSourceType.TextureCube")
C.y=new P.b7(0)
C.U=new P.b7(5e6)
C.X=new P.hs("element",!0,!1,!1,!1)
C.a_=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.a0=function(hooks) {
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
C.E=function(hooks) { return hooks; }

C.a1=function(getTagFallback) {
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
C.a2=function() {
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
C.a3=function(hooks) {
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
C.a4=function(hooks) {
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
C.F=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.G=H.d(u([127,2047,65535,1114111]),[P.o])
C.t=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.o])
C.a6=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.u=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.o])
C.v=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.o])
C.a7=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.H=H.d(u([]),[P.f])
C.a8=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.o])
C.I=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.o])
C.w=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.o])
C.J=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.o])
C.a9=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.o])
C.K=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.o])
C.A=H.d(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.B=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.aa=new H.fX(0,{},C.H,[P.f,P.f])
C.m=new P.js(!1)})();(function staticFields(){$.b3=0
$.cw=null
$.lK=null
$.lp=!1
$.mT=null
$.mO=null
$.mZ=null
$.kM=null
$.kR=null
$.lx=null
$.ck=null
$.dk=null
$.dl=null
$.lq=!1
$.a2=C.l
$.bo=null
$.l7=null
$.lS=null
$.lR=null
$.lX=null
$.m0=null
$.m5=null
$.cO=null
$.ma=null
$.mo=null
$.ms=null
$.mq=null
$.mr=null
$.jv=null
$.mp=null
$.nF="uniform mat4 projViewObjMat;                             \nuniform mat3 colorTxt2DMat;                              \nuniform mat3 bumpTxt2DMat;                               \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec2 txt2DAttr;                                \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvoid main()                                              \n{                                                        \n   vec3 txt2D = vec3(txt2DAttr.x, 1.0-txt2DAttr.y, 1.0); \n   colorTxt2D = (colorTxt2DMat * txt2D).xy;              \n   bumpTxt2D = (bumpTxt2DMat * vec3(txt2DAttr, 1.0)).xy; \n   gl_Position = projViewObjMat * vec4(posAttr, 1.0);    \n}                                                        \n"
$.nE="precision mediump float;                                 \n                                                         \nuniform sampler2D colorTxt;                              \nuniform sampler2D bumpTxt;                               \nuniform int nullColorTxt;                                \nuniform int nullBumpTxt;                                 \nuniform mat4 bumpMat;                                    \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvec2 offset()                                            \n{                                                        \n   if(nullBumpTxt > 0) return vec2(0.0, 0.0);            \n   vec3 txt2D = texture2D(bumpTxt, bumpTxt2D).rgb;       \n   txt2D = normalize(txt2D*2.0 - 1.0);                   \n   return (bumpMat * vec4(txt2D, 1.0)).xy;               \n}                                                        \n                                                         \nvoid main()                                              \n{                                                        \n   if(nullColorTxt > 0) gl_FragColor = vec4(1.0);        \n   else                                                  \n   {                                                     \n      vec2 txt2D = colorTxt2D + offset();                \n      gl_FragColor = texture2D(colorTxt, txt2D);         \n   }                                                     \n}                                                        \n"
$.od="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.oc="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.m4=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pA","n1",function(){return H.mS("_$dart_dartClosure")})
u($,"pB","lA",function(){return H.mS("_$dart_js")})
u($,"pG","n2",function(){return H.bj(H.j7({
toString:function(){return"$receiver$"}}))})
u($,"pH","n3",function(){return H.bj(H.j7({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pI","n4",function(){return H.bj(H.j7(null))})
u($,"pJ","n5",function(){return H.bj(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pM","n8",function(){return H.bj(H.j7(void 0))})
u($,"pN","n9",function(){return H.bj(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pL","n7",function(){return H.bj(H.mj(null))})
u($,"pK","n6",function(){return H.bj(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pP","nb",function(){return H.bj(H.mj(void 0))})
u($,"pO","na",function(){return H.bj(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"q5","lB",function(){return P.op()})
u($,"qb","dt",function(){return[]})
u($,"pS","nc",function(){return P.om()})
u($,"q6","ng",function(){return H.nU(H.cj(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))})
u($,"q9","ni",function(){return P.o8("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"qa","nj",function(){return P.oO()})
u($,"q7","nh",function(){return P.lW(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"q8","lC",function(){return P.ld(P.f,P.bI)})
u($,"pZ","nf",function(){return Z.aL(0)})
u($,"pT","nd",function(){return Z.aL(511)})
u($,"q0","aF",function(){return Z.aL(1)})
u($,"q_","bz",function(){return Z.aL(2)})
u($,"pV","by",function(){return Z.aL(4)})
u($,"q1","b2",function(){return Z.aL(8)})
u($,"q2","bA",function(){return Z.aL(16)})
u($,"pW","dr",function(){return Z.aL(32)})
u($,"pX","ds",function(){return Z.aL(64)})
u($,"pY","ne",function(){return Z.aL(96)})
u($,"q3","ct",function(){return Z.aL(128)})
u($,"pU","bx",function(){return Z.aL(256)})
u($,"pz","n0",function(){return new V.hd(1e-9)})
u($,"py","V",function(){return $.n0()})})()
var v={mangledGlobalNames:{o:"int",B:"double",a5:"num",f:"String",R:"bool",J:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.z]},{func:1,ret:-1,args:[D.z]},{func:1,ret:P.J},{func:1,ret:-1},{func:1,ret:-1,args:[W.a7]},{func:1,ret:P.J,args:[,,]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[P.o,[P.i,E.ar]]},{func:1,ret:P.J,args:[D.z]},{func:1,ret:P.J,args:[F.ad]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.p]},{func:1,ret:-1,args:[W.b_]},{func:1,ret:P.J,args:[W.p]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:-1,args:[P.o,[P.i,V.ax]]},{func:1,ret:P.J,args:[P.f]},{func:1,ret:P.f,args:[P.f]},{func:1,args:[,]},{func:1,ret:-1,args:[P.o,[P.i,D.a9]]},{func:1,ret:P.R,args:[W.E]},{func:1,ret:P.R,args:[W.aD]},{func:1,ret:P.R,args:[P.f]},{func:1,ret:-1,args:[W.b9]},{func:1,ret:P.B},{func:1,ret:-1,args:[P.o,[P.i,M.aE]]},{func:1,ret:P.f,args:[P.o]},{func:1,ret:-1,args:[P.o,[P.i,U.aj]]},{func:1,ret:P.R,args:[W.P,P.f,P.f,W.bU]},{func:1,ret:P.J,args:[,]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.z]}]},{func:1,ret:P.J,args:[,],opt:[P.az]},{func:1,ret:P.J,args:[P.a5]},{func:1,args:[P.f]},{func:1,ret:[P.aM,,],args:[,]},{func:1,args:[,P.f]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:-1,args:[W.bk]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:P.R,args:[[P.i,D.a9]]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,args:[W.p]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,ret:P.S,args:[P.o]},{func:1,ret:P.J,args:[P.f,,]},{func:1,ret:V.a8,args:[P.B]},{func:1,ret:P.J,args:[F.as,P.B,P.B]},{func:1,ret:[P.D,P.f,P.f],args:[[P.D,P.f,P.f],P.f]},{func:1,ret:W.P,args:[W.E]},{func:1,ret:-1,args:[P.f,P.o]},{func:1,ret:P.J,args:[P.bh]},{func:1,ret:P.R,args:[V.bE]},{func:1,ret:P.J,args:[W.a7]},{func:1,ret:P.J,args:[W.P]},{func:1,ret:P.S,args:[,,]},{func:1,ret:-1,args:[W.E,W.E]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cK,DataView:H.bO,ArrayBufferView:H.bO,Float32Array:H.cL,Float64Array:H.cL,Int16Array:H.i0,Int32Array:H.i1,Int8Array:H.i2,Uint16Array:H.i3,Uint32Array:H.i4,Uint8ClampedArray:H.e4,CanvasPixelArray:H.e4,Uint8Array:H.cM,HTMLBRElement:W.y,HTMLButtonElement:W.y,HTMLContentElement:W.y,HTMLDListElement:W.y,HTMLDataElement:W.y,HTMLDataListElement:W.y,HTMLDetailsElement:W.y,HTMLDialogElement:W.y,HTMLEmbedElement:W.y,HTMLFieldSetElement:W.y,HTMLHRElement:W.y,HTMLHeadingElement:W.y,HTMLHtmlElement:W.y,HTMLIFrameElement:W.y,HTMLInputElement:W.y,HTMLLIElement:W.y,HTMLLabelElement:W.y,HTMLLegendElement:W.y,HTMLLinkElement:W.y,HTMLMapElement:W.y,HTMLMenuElement:W.y,HTMLMetaElement:W.y,HTMLMeterElement:W.y,HTMLModElement:W.y,HTMLOListElement:W.y,HTMLObjectElement:W.y,HTMLOptGroupElement:W.y,HTMLOptionElement:W.y,HTMLOutputElement:W.y,HTMLParagraphElement:W.y,HTMLParamElement:W.y,HTMLPictureElement:W.y,HTMLPreElement:W.y,HTMLProgressElement:W.y,HTMLQuoteElement:W.y,HTMLScriptElement:W.y,HTMLShadowElement:W.y,HTMLSlotElement:W.y,HTMLSourceElement:W.y,HTMLSpanElement:W.y,HTMLStyleElement:W.y,HTMLTableCaptionElement:W.y,HTMLTableColElement:W.y,HTMLTextAreaElement:W.y,HTMLTimeElement:W.y,HTMLTitleElement:W.y,HTMLTrackElement:W.y,HTMLUListElement:W.y,HTMLUnknownElement:W.y,HTMLDirectoryElement:W.y,HTMLFontElement:W.y,HTMLFrameElement:W.y,HTMLFrameSetElement:W.y,HTMLMarqueeElement:W.y,HTMLElement:W.y,AccessibleNodeList:W.fG,HTMLAnchorElement:W.dv,HTMLAreaElement:W.fH,HTMLBaseElement:W.cu,Blob:W.bY,HTMLBodyElement:W.bC,HTMLCanvasElement:W.c0,CanvasRenderingContext2D:W.c1,CDATASection:W.bD,CharacterData:W.bD,Comment:W.bD,ProcessingInstruction:W.bD,Text:W.bD,CSSNumericValue:W.cy,CSSUnitValue:W.cy,CSSPerspective:W.fY,CSSCharsetRule:W.X,CSSConditionRule:W.X,CSSFontFaceRule:W.X,CSSGroupingRule:W.X,CSSImportRule:W.X,CSSKeyframeRule:W.X,MozCSSKeyframeRule:W.X,WebKitCSSKeyframeRule:W.X,CSSKeyframesRule:W.X,MozCSSKeyframesRule:W.X,WebKitCSSKeyframesRule:W.X,CSSMediaRule:W.X,CSSNamespaceRule:W.X,CSSPageRule:W.X,CSSRule:W.X,CSSStyleRule:W.X,CSSSupportsRule:W.X,CSSViewportRule:W.X,CSSStyleDeclaration:W.cz,MSStyleCSSProperties:W.cz,CSS2Properties:W.cz,CSSImageValue:W.b5,CSSKeywordValue:W.b5,CSSPositionValue:W.b5,CSSResourceValue:W.b5,CSSURLImageValue:W.b5,CSSStyleValue:W.b5,CSSMatrixComponent:W.b6,CSSRotation:W.b6,CSSScale:W.b6,CSSSkew:W.b6,CSSTranslation:W.b6,CSSTransformComponent:W.b6,CSSTransformValue:W.h_,CSSUnparsedValue:W.h0,DataTransferItemList:W.h3,HTMLDivElement:W.aH,XMLDocument:W.cA,Document:W.cA,DOMException:W.h5,DOMImplementation:W.dG,ClientRectList:W.dH,DOMRectList:W.dH,DOMRectReadOnly:W.dI,DOMStringList:W.h6,DOMTokenList:W.h7,Element:W.P,AbortPaymentEvent:W.p,AnimationEvent:W.p,AnimationPlaybackEvent:W.p,ApplicationCacheErrorEvent:W.p,BackgroundFetchClickEvent:W.p,BackgroundFetchEvent:W.p,BackgroundFetchFailEvent:W.p,BackgroundFetchedEvent:W.p,BeforeInstallPromptEvent:W.p,BeforeUnloadEvent:W.p,BlobEvent:W.p,CanMakePaymentEvent:W.p,ClipboardEvent:W.p,CloseEvent:W.p,CustomEvent:W.p,DeviceMotionEvent:W.p,DeviceOrientationEvent:W.p,ErrorEvent:W.p,ExtendableEvent:W.p,ExtendableMessageEvent:W.p,FetchEvent:W.p,FontFaceSetLoadEvent:W.p,ForeignFetchEvent:W.p,GamepadEvent:W.p,HashChangeEvent:W.p,InstallEvent:W.p,MediaEncryptedEvent:W.p,MediaKeyMessageEvent:W.p,MediaQueryListEvent:W.p,MediaStreamEvent:W.p,MediaStreamTrackEvent:W.p,MessageEvent:W.p,MIDIConnectionEvent:W.p,MIDIMessageEvent:W.p,MutationEvent:W.p,NotificationEvent:W.p,PageTransitionEvent:W.p,PaymentRequestEvent:W.p,PaymentRequestUpdateEvent:W.p,PopStateEvent:W.p,PresentationConnectionAvailableEvent:W.p,PresentationConnectionCloseEvent:W.p,ProgressEvent:W.p,PromiseRejectionEvent:W.p,PushEvent:W.p,RTCDataChannelEvent:W.p,RTCDTMFToneChangeEvent:W.p,RTCPeerConnectionIceEvent:W.p,RTCTrackEvent:W.p,SecurityPolicyViolationEvent:W.p,SensorErrorEvent:W.p,SpeechRecognitionError:W.p,SpeechRecognitionEvent:W.p,SpeechSynthesisEvent:W.p,StorageEvent:W.p,SyncEvent:W.p,TrackEvent:W.p,TransitionEvent:W.p,WebKitTransitionEvent:W.p,VRDeviceEvent:W.p,VRDisplayEvent:W.p,VRSessionEvent:W.p,MojoInterfaceRequestEvent:W.p,ResourceProgressEvent:W.p,USBConnectionEvent:W.p,IDBVersionChangeEvent:W.p,AudioProcessingEvent:W.p,OfflineAudioCompletionEvent:W.p,WebGLContextEvent:W.p,Event:W.p,InputEvent:W.p,AbsoluteOrientationSensor:W.k,Accelerometer:W.k,AccessibleNode:W.k,AmbientLightSensor:W.k,Animation:W.k,ApplicationCache:W.k,DOMApplicationCache:W.k,OfflineResourceList:W.k,BackgroundFetchRegistration:W.k,BatteryManager:W.k,BroadcastChannel:W.k,CanvasCaptureMediaStreamTrack:W.k,DedicatedWorkerGlobalScope:W.k,EventSource:W.k,FileReader:W.k,FontFaceSet:W.k,Gyroscope:W.k,XMLHttpRequest:W.k,XMLHttpRequestEventTarget:W.k,XMLHttpRequestUpload:W.k,LinearAccelerationSensor:W.k,Magnetometer:W.k,MediaDevices:W.k,MediaKeySession:W.k,MediaQueryList:W.k,MediaRecorder:W.k,MediaSource:W.k,MediaStream:W.k,MediaStreamTrack:W.k,MessagePort:W.k,MIDIAccess:W.k,MIDIInput:W.k,MIDIOutput:W.k,MIDIPort:W.k,NetworkInformation:W.k,Notification:W.k,OffscreenCanvas:W.k,OrientationSensor:W.k,PaymentRequest:W.k,Performance:W.k,PermissionStatus:W.k,PresentationAvailability:W.k,PresentationConnection:W.k,PresentationConnectionList:W.k,PresentationRequest:W.k,RelativeOrientationSensor:W.k,RemotePlayback:W.k,RTCDataChannel:W.k,DataChannel:W.k,RTCDTMFSender:W.k,RTCPeerConnection:W.k,webkitRTCPeerConnection:W.k,mozRTCPeerConnection:W.k,ScreenOrientation:W.k,Sensor:W.k,ServiceWorker:W.k,ServiceWorkerContainer:W.k,ServiceWorkerGlobalScope:W.k,ServiceWorkerRegistration:W.k,SharedWorker:W.k,SharedWorkerGlobalScope:W.k,SpeechRecognition:W.k,SpeechSynthesis:W.k,SpeechSynthesisUtterance:W.k,VR:W.k,VRDevice:W.k,VRDisplay:W.k,VRSession:W.k,VisualViewport:W.k,WebSocket:W.k,Worker:W.k,WorkerGlobalScope:W.k,WorkerPerformance:W.k,BluetoothDevice:W.k,BluetoothRemoteGATTCharacteristic:W.k,Clipboard:W.k,MojoInterfaceInterceptor:W.k,USB:W.k,IDBDatabase:W.k,IDBOpenDBRequest:W.k,IDBVersionChangeRequest:W.k,IDBRequest:W.k,IDBTransaction:W.k,AnalyserNode:W.k,RealtimeAnalyserNode:W.k,AudioBufferSourceNode:W.k,AudioDestinationNode:W.k,AudioNode:W.k,AudioScheduledSourceNode:W.k,AudioWorkletNode:W.k,BiquadFilterNode:W.k,ChannelMergerNode:W.k,AudioChannelMerger:W.k,ChannelSplitterNode:W.k,AudioChannelSplitter:W.k,ConstantSourceNode:W.k,ConvolverNode:W.k,DelayNode:W.k,DynamicsCompressorNode:W.k,GainNode:W.k,AudioGainNode:W.k,IIRFilterNode:W.k,MediaElementAudioSourceNode:W.k,MediaStreamAudioDestinationNode:W.k,MediaStreamAudioSourceNode:W.k,OscillatorNode:W.k,Oscillator:W.k,PannerNode:W.k,AudioPannerNode:W.k,webkitAudioPannerNode:W.k,ScriptProcessorNode:W.k,JavaScriptAudioNode:W.k,StereoPannerNode:W.k,WaveShaperNode:W.k,EventTarget:W.k,File:W.aI,FileList:W.cC,FileWriter:W.hi,HTMLFormElement:W.hm,Gamepad:W.aQ,HTMLHeadElement:W.dN,History:W.dO,HTMLCollection:W.c6,HTMLFormControlsCollection:W.c6,HTMLOptionsCollection:W.c6,HTMLDocument:W.dP,ImageData:W.bp,HTMLImageElement:W.c7,KeyboardEvent:W.b9,Location:W.dX,HTMLAudioElement:W.cI,HTMLMediaElement:W.cI,MediaList:W.hU,MIDIInputMap:W.hV,MIDIOutputMap:W.hX,MimeType:W.aT,MimeTypeArray:W.hZ,PointerEvent:W.a7,MouseEvent:W.a7,DragEvent:W.a7,DocumentFragment:W.E,ShadowRoot:W.E,DocumentType:W.E,Node:W.E,NodeList:W.cN,RadioNodeList:W.cN,Plugin:W.aU,PluginArray:W.ie,Range:W.ea,RTCStatsReport:W.ip,HTMLSelectElement:W.is,SourceBuffer:W.aV,SourceBufferList:W.iC,SpeechGrammar:W.aW,SpeechGrammarList:W.iD,SpeechRecognitionResult:W.aX,Storage:W.iG,CSSStyleSheet:W.aJ,StyleSheet:W.aJ,HTMLTableCellElement:W.bg,HTMLTableDataCellElement:W.bg,HTMLTableHeaderCellElement:W.bg,HTMLTableElement:W.el,HTMLTableRowElement:W.em,HTMLTableSectionElement:W.iN,HTMLTemplateElement:W.cV,TextTrack:W.aY,TextTrackCue:W.aK,VTTCue:W.aK,TextTrackCueList:W.iP,TextTrackList:W.iQ,TimeRanges:W.j_,Touch:W.aZ,TouchEvent:W.b_,TouchList:W.j3,TrackDefaultList:W.j4,CompositionEvent:W.bR,FocusEvent:W.bR,TextEvent:W.bR,UIEvent:W.bR,URL:W.jr,HTMLVideoElement:W.jI,VideoTrackList:W.jJ,WheelEvent:W.bk,Window:W.d7,DOMWindow:W.d7,Attr:W.d8,CSSRuleList:W.jR,ClientRect:W.eH,DOMRect:W.eH,GamepadList:W.k5,NamedNodeMap:W.eZ,MozNamedAttrMap:W.eZ,SpeechRecognitionResultList:W.kj,StyleSheetList:W.kn,SVGLength:P.ba,SVGLengthList:P.hB,SVGNumber:P.be,SVGNumberList:P.i9,SVGPointList:P.ih,SVGScriptElement:P.cQ,SVGStringList:P.iM,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.bi,SVGTransformList:P.j5,AudioBuffer:P.fJ,AudioParamMap:P.fK,AudioTrackList:P.fM,AudioContext:P.bX,webkitAudioContext:P.bX,BaseAudioContext:P.bX,OfflineAudioContext:P.ia,WebGLBuffer:P.dy,WebGLFramebuffer:P.dM,WebGLProgram:P.e9,WebGLRenderbuffer:P.ed,WebGL2RenderingContext:P.cf,WebGLShader:P.ee,WebGLTexture:P.en,WebGLUniformLocation:P.ew,SQLResultSetRowList:P.iE})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e2.$nativeSuperclassTag="ArrayBufferView"
H.da.$nativeSuperclassTag="ArrayBufferView"
H.db.$nativeSuperclassTag="ArrayBufferView"
H.cL.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
H.dd.$nativeSuperclassTag="ArrayBufferView"
H.e3.$nativeSuperclassTag="ArrayBufferView"
W.de.$nativeSuperclassTag="EventTarget"
W.df.$nativeSuperclassTag="EventTarget"
W.dg.$nativeSuperclassTag="EventTarget"
W.dh.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(X.mW,[])
else X.mW([])})})()
//# sourceMappingURL=test.dart.js.map
