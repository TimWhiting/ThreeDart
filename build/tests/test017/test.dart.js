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
a[c]=function(){a[c]=function(){H.pL(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lM"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lM"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lM(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={ls:function ls(a){this.a=a},
kR:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
hy:function(){return new P.cg("No element")},
o0:function(){return new P.cg("Too many elements")},
o_:function(){return new P.cg("Too few elements")},
w:function w(a){this.a=a},
hd:function hd(){},
c9:function c9(){},
cK:function cK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hP:function hP(a,b,c){this.a=a
this.b=b
this.$ti=c},
hQ:function hQ(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hR:function hR(a,b,c){this.a=a
this.b=b
this.$ti=c},
dd:function dd(a,b,c){this.a=a
this.b=b
this.$ti=c},
jI:function jI(a,b,c){this.a=a
this.b=b
this.$ti=c},
c7:function c7(){},
da:function da(){},
eB:function eB(){},
nS:function(){throw H.c(P.I("Cannot modify unmodifiable Map"))},
cu:function(a){var u,t
u=H.J(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
ps:function(a){return v.types[H.ag(a)]},
pz:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Z(a).$iK},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ax(a)
if(typeof u!=="string")throw H.c(H.aw(a))
return u},
on:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.hz(u)
t=u[0]
s=u[1]
return new H.ip(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cU:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
ok:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.h(u,3)
t=H.J(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ah(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.K(r,p)|32)>s)return}return parseInt(a,b)},
cc:function(a){return H.ob(a)+H.lJ(H.bY(a),0,null)},
ob:function(a){var u,t,s,r,q,p,o,n,m
u=J.Z(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.Z||!!u.$ibU){p=C.F(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.cu(r.length>1&&C.c.K(r,0)===36?C.c.ax(r,1):r)},
oc:function(){if(!!self.location)return self.location.href
return},
mm:function(a){var u,t,s,r,q
H.kY(a)
u=J.aJ(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
ol:function(a){var u,t,s,r
u=H.d([],[P.o])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.D)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.aw(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.b3(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.aw(r))}return H.mm(u)},
mn:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aw(s))
if(s<0)throw H.c(H.aw(s))
if(s>65535)return H.ol(a)}return H.mm(a)},
om:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
cd:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.b3(u,10))>>>0,56320|u&1023)}}throw H.c(P.ah(a,0,1114111,null,null))},
cb:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oj:function(a){var u=H.cb(a).getFullYear()+0
return u},
oh:function(a){var u=H.cb(a).getMonth()+1
return u},
od:function(a){var u=H.cb(a).getDate()+0
return u},
oe:function(a){var u=H.cb(a).getHours()+0
return u},
og:function(a){var u=H.cb(a).getMinutes()+0
return u},
oi:function(a){var u=H.cb(a).getSeconds()+0
return u},
of:function(a){var u=H.cb(a).getMilliseconds()+0
return u},
G:function(a){throw H.c(H.aw(a))},
h:function(a,b){if(a==null)J.aJ(a)
throw H.c(H.cp(a,b))},
cp:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aR(!0,b,"index",null)
u=H.ag(J.aJ(a))
if(!(b<0)){if(typeof u!=="number")return H.G(u)
t=b>=u}else t=!0
if(t)return P.a0(b,a,"index",null,u)
return P.eg(b,"index",null)},
pl:function(a,b,c){if(a>c)return new P.ce(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.ce(a,c,!0,b,"end","Invalid value")
return new P.aR(!0,b,"end",null)},
aw:function(a){return new P.aR(!0,a,null,null)},
pg:function(a){if(typeof a!=="number")throw H.c(H.aw(a))
return a},
c:function(a){var u
if(a==null)a=new P.eb()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.ng})
u.name=""}else u.toString=H.ng
return u},
ng:function(){return J.ax(this.dartException)},
r:function(a){throw H.c(a)},
D:function(a){throw H.c(P.bq(a))},
bk:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.j5(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
j6:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mw:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
mh:function(a,b){return new H.ib(a,b==null?null:b.method)},
lt:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.hC(a,t,u?null:b.receiver)},
am:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.lf(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.b3(s,16)&8191)===10)switch(r){case 438:return u.$1(H.lt(H.m(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.mh(H.m(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.nj()
p=$.nk()
o=$.nl()
n=$.nm()
m=$.np()
l=$.nq()
k=$.no()
$.nn()
j=$.ns()
i=$.nr()
h=q.ap(t)
if(h!=null)return u.$1(H.lt(H.J(t),h))
else{h=p.ap(t)
if(h!=null){h.method="call"
return u.$1(H.lt(H.J(t),h))}else{h=o.ap(t)
if(h==null){h=n.ap(t)
if(h==null){h=m.ap(t)
if(h==null){h=l.ap(t)
if(h==null){h=k.ap(t)
if(h==null){h=n.ap(t)
if(h==null){h=j.ap(t)
if(h==null){h=i.ap(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.mh(H.J(t),h))}}return u.$1(new H.jj(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.eo()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aR(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.eo()
return a},
cs:function(a){var u
if(a==null)return new H.fg(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.fg(a)},
po:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.n(0,a[t],a[s])}return b},
py:function(a,b,c,d,e,f){H.e(a,"$ibL")
switch(H.ag(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.t("Unsupported number of arguments for wrapped closure"))},
co:function(a,b){var u
H.ag(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.py)
a.$identity=u
return u},
nR:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.Z(d).$ib){u.$reflectionInfo=d
s=H.on(u).r}else s=d
r=e?Object.create(new H.iK().constructor.prototype):Object.create(new H.cx(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.b5
if(typeof p!=="number")return p.p()
$.b5=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.m6(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.ps,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.m4:H.lk
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.m6(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
nO:function(a,b,c,d){var u=H.lk
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
m6:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nQ(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nO(t,!r,u,b)
if(t===0){r=$.b5
if(typeof r!=="number")return r.p()
$.b5=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cy
if(q==null){q=H.fV("self")
$.cy=q}return new Function(r+H.m(q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b5
if(typeof r!=="number")return r.p()
$.b5=r+1
o+=r
r="return function("+o+"){return this."
q=$.cy
if(q==null){q=H.fV("self")
$.cy=q}return new Function(r+H.m(q)+"."+H.m(u)+"("+o+");}")()},
nP:function(a,b,c,d){var u,t
u=H.lk
t=H.m4
switch(b?-1:a){case 0:throw H.c(H.or("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nQ:function(a,b){var u,t,s,r,q,p,o,n
u=$.cy
if(u==null){u=H.fV("self")
$.cy=u}t=$.m3
if(t==null){t=H.fV("receiver")
$.m3=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nP(r,!p,s,b)
if(r===1){u="return function(){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+");"
t=$.b5
if(typeof t!=="number")return t.p()
$.b5=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+", "+n+");"
t=$.b5
if(typeof t!=="number")return t.p()
$.b5=t+1
return new Function(u+t+"}")()},
lM:function(a,b,c,d,e,f,g){return H.nR(a,b,H.ag(c),d,!!e,!!f,g)},
lk:function(a){return a.a},
m4:function(a){return a.c},
fV:function(a){var u,t,s,r,q
u=new H.cx("self","target","receiver","name")
t=J.hz(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
J:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.b2(a,"String"))},
pm:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b2(a,"double"))},
pF:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b2(a,"num"))},
lK:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.b2(a,"bool"))},
ag:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.b2(a,"int"))},
nd:function(a,b){throw H.c(H.b2(a,H.cu(H.J(b).substring(2))))},
pH:function(a,b){throw H.c(H.nN(a,H.cu(H.J(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Z(a)[b])return a
H.nd(a,b)},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Z(a)[b]
else u=!0
if(u)return a
H.pH(a,b)},
kY:function(a){if(a==null)return a
if(!!J.Z(a).$ib)return a
throw H.c(H.b2(a,"List<dynamic>"))},
na:function(a,b){var u
if(a==null)return a
u=J.Z(a)
if(!!u.$ib)return a
if(u[b])return a
H.nd(a,b)},
n6:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ag(u)]
else return a.$S()}return},
fF:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.n6(J.Z(a))
if(u==null)return!1
return H.mU(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lG)return a
$.lG=!0
try{if(H.fF(a,b))return a
u=H.l9(b)
t=H.b2(a,u)
throw H.c(t)}finally{$.lG=!1}},
lO:function(a,b){if(a!=null&&!H.lL(a,b))H.r(H.b2(a,H.l9(b)))
return a},
b2:function(a,b){return new H.j7("TypeError: "+P.hh(a)+": type '"+H.mZ(a)+"' is not a subtype of type '"+b+"'")},
nN:function(a,b){return new H.fW("CastError: "+P.hh(a)+": type '"+H.mZ(a)+"' is not a subtype of type '"+b+"'")},
mZ:function(a){var u,t
u=J.Z(a)
if(!!u.$icA){t=H.n6(u)
if(t!=null)return H.l9(t)
return"Closure"}return H.cc(a)},
pL:function(a){throw H.c(new P.h5(H.J(a)))},
or:function(a){return new H.iw(a)},
n7:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bY:function(a){if(a==null)return
return a.$ti},
qw:function(a,b,c){return H.ct(a["$a"+H.m(c)],H.bY(b))},
bX:function(a,b,c,d){var u
H.J(c)
H.ag(d)
u=H.ct(a["$a"+H.m(c)],H.bY(b))
return u==null?null:u[d]},
ap:function(a,b,c){var u
H.J(b)
H.ag(c)
u=H.ct(a["$a"+H.m(b)],H.bY(a))
return u==null?null:u[c]},
v:function(a,b){var u
H.ag(b)
u=H.bY(a)
return u==null?null:u[b]},
l9:function(a){return H.bW(a,null)},
bW:function(a,b){var u,t
H.k(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cu(a[0].name)+H.lJ(a,1,b)
if(typeof a=="function")return H.cu(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ag(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.m(b[t])}if('func' in a)return H.p5(a,b)
if('futureOr' in a)return"FutureOr<"+H.bW("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
p5:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.f]
H.k(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.d([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.h(b,m)
o=C.c.p(o,b[m])
l=t[p]
if(l!=null&&l!==P.S)o+=" extends "+H.bW(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bW(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bW(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bW(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.pn(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.J(u[g])
i=i+h+H.bW(d[c],b)+(" "+H.m(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
lJ:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.an("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bW(p,c)}return"<"+u.i(0)+">"},
ct:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dv:function(a,b,c,d){var u,t
H.J(b)
H.kY(c)
H.J(d)
if(a==null)return!1
u=H.bY(a)
t=J.Z(a)
if(t[b]==null)return!1
return H.n1(H.ct(t[d],u),null,c,null)},
k:function(a,b,c,d){H.J(b)
H.kY(c)
H.J(d)
if(a==null)return a
if(H.dv(a,b,c,d))return a
throw H.c(H.b2(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cu(b.substring(2))+H.lJ(c,0,null),v.mangledGlobalNames)))},
n1:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aQ(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aQ(a[t],b,c[t],d))return!1
return!0},
qu:function(a,b,c){return a.apply(b,H.ct(J.Z(b)["$a"+H.m(c)],H.bY(b)))},
n9:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="S"||a.name==="L"||a===-1||a===-2||H.n9(u)}return!1},
lL:function(a,b){var u,t
if(a==null)return b==null||b.name==="S"||b.name==="L"||b===-1||b===-2||H.n9(b)
if(b==null||b===-1||b.name==="S"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lL(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fF(a,b)}u=J.Z(a).constructor
t=H.bY(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aQ(u,null,b,null)},
C:function(a,b){if(a!=null&&!H.lL(a,b))throw H.c(H.b2(a,H.l9(b)))
return a},
aQ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="S"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="S"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aQ(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="L")return!0
if('func' in c)return H.mU(a,b,c,d)
if('func' in a)return c.name==="bL"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aQ("type" in a?a.type:null,b,s,d)
else if(H.aQ(a,b,s,d))return!0
else{if(!('$i'+"cG" in t.prototype))return!1
r=t.prototype["$a"+"cG"]
q=H.ct(r,u?a.slice(1):null)
return H.aQ(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.n1(H.ct(m,u),b,p,d)},
mU:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aQ(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aQ(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aQ(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aQ(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pE(h,b,g,d)},
pE:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aQ(c[r],d,a[r],b))return!1}return!0},
qv:function(a,b,c){Object.defineProperty(a,H.J(b),{value:c,enumerable:false,writable:true,configurable:true})},
pC:function(a){var u,t,s,r,q,p
u=H.J($.n8.$1(a))
t=$.kQ[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kV[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.J($.n0.$2(a,u))
if(u!=null){t=$.kQ[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kV[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.l8(s)
$.kQ[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.kV[u]=s
return s}if(q==="-"){p=H.l8(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.nc(a,s)
if(q==="*")throw H.c(P.ji(u))
if(v.leafTags[u]===true){p=H.l8(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.nc(a,s)},
nc:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lQ(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
l8:function(a){return J.lQ(a,!1,null,!!a.$iK)},
pD:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.l8(u)
else return J.lQ(u,c,null,null)},
pw:function(){if(!0===$.lP)return
$.lP=!0
H.px()},
px:function(){var u,t,s,r,q,p,o,n
$.kQ=Object.create(null)
$.kV=Object.create(null)
H.pv()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.ne.$1(q)
if(p!=null){o=H.pD(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pv:function(){var u,t,s,r,q,p,o
u=C.a3()
u=H.cn(C.a0,H.cn(C.a5,H.cn(C.E,H.cn(C.E,H.cn(C.a4,H.cn(C.a1,H.cn(C.a2(C.F),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.n8=new H.kS(q)
$.n0=new H.kT(p)
$.ne=new H.kU(o)},
cn:function(a,b){return a(b)||b},
o2:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a9("Illegal RegExp pattern ("+String(r)+")",a,null))},
pK:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lS:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
h_:function h_(){},
h0:function h0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ip:function ip(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
j5:function j5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ib:function ib(a,b){this.a=a
this.b=b},
hC:function hC(a,b,c){this.a=a
this.b=b
this.c=c},
jj:function jj(a){this.a=a},
lf:function lf(a){this.a=a},
fg:function fg(a){this.a=a
this.b=null},
cA:function cA(){},
iT:function iT(){},
iK:function iK(){},
cx:function cx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j7:function j7(a){this.a=a},
fW:function fW(a){this.a=a},
iw:function iw(a){this.a=a},
aU:function aU(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hG:function hG(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hH:function hH(a,b){this.a=a
this.$ti=b},
hI:function hI(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kS:function kS(a){this.a=a},
kT:function kT(a){this.a=a},
kU:function kU(a){this.a=a},
hB:function hB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cl:function(a){return a},
oa:function(a){return new Int8Array(a)},
bo:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cp(b,a))},
p3:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.pl(a,b,c))
return b},
cP:function cP(){},
bQ:function bQ(){},
e7:function e7(){},
cQ:function cQ(){},
e8:function e8(){},
i3:function i3(){},
i4:function i4(){},
i5:function i5(){},
i6:function i6(){},
i7:function i7(){},
e9:function e9(){},
cR:function cR(){},
dh:function dh(){},
di:function di(){},
dj:function dj(){},
dk:function dk(){},
pn:function(a){return J.mc(a?Object.keys(a):[],null)},
pG:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lQ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fH:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.lP==null){H.pw()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.ji("Return interceptor for "+H.m(t(a,u))))}r=a.constructor
q=r==null?null:r[$.lT()]
if(q!=null)return q
q=H.pC(a)
if(q!=null)return q
if(typeof a=="function")return C.a6
t=Object.getPrototypeOf(a)
if(t==null)return C.M
if(t===Object.prototype)return C.M
if(typeof r=="function"){Object.defineProperty(r,$.lT(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
o1:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.lj(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ah(a,0,4294967295,"length",null))
return J.mc(new Array(a),b)},
mc:function(a,b){return J.hz(H.d(a,[b]))},
hz:function(a){H.kY(a)
a.fixed$length=Array
return a},
Z:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dV.prototype
return J.dU.prototype}if(typeof a=="string")return J.bt.prototype
if(a==null)return J.dW.prototype
if(typeof a=="boolean")return J.hA.prototype
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.S)return a
return J.fH(a)},
pp:function(a){if(typeof a=="number")return J.bP.prototype
if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.S)return a
return J.fH(a)},
cr:function(a){if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.S)return a
return J.fH(a)},
fG:function(a){if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.S)return a
return J.fH(a)},
pq:function(a){if(typeof a=="number")return J.bP.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.bU.prototype
return a},
pr:function(a){if(typeof a=="number")return J.bP.prototype
if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.bU.prototype
return a},
dw:function(a){if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.bU.prototype
return a},
af:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.S)return a
return J.fH(a)},
nB:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pp(a).p(a,b)},
N:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Z(a).B(a,b)},
lW:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.pr(a).w(a,b)},
nC:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.pq(a).u(a,b)},
lX:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pz(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cr(a).j(a,b)},
lg:function(a,b,c){return J.fG(a).n(a,b,c)},
nD:function(a,b){return J.dw(a).K(a,b)},
fJ:function(a,b){return J.af(a).iX(a,b)},
lh:function(a,b,c){return J.af(a).j0(a,b,c)},
nE:function(a,b,c,d){return J.af(a).k_(a,b,c,d)},
lY:function(a,b){return J.af(a).H(a,b)},
nF:function(a,b){return J.dw(a).a6(a,b)},
fK:function(a,b){return J.fG(a).N(a,b)},
nG:function(a,b,c,d){return J.af(a).kD(a,b,c,d)},
lZ:function(a,b){return J.fG(a).O(a,b)},
nH:function(a){return J.af(a).gkb(a)},
m_:function(a){return J.af(a).gcT(a)},
dA:function(a){return J.Z(a).gL(a)},
bE:function(a){return J.fG(a).gY(a)},
aJ:function(a){return J.cr(a).gl(a)},
nI:function(a){return J.af(a).glo(a)},
li:function(a,b){return J.af(a).bb(a,b)},
m0:function(a){return J.fG(a).le(a)},
nJ:function(a,b){return J.af(a).li(a,b)},
nK:function(a,b,c){return J.af(a).fN(a,b,c)},
nL:function(a,b,c){return J.dw(a).A(a,b,c)},
nM:function(a){return J.dw(a).lu(a)},
ax:function(a){return J.Z(a).i(a)},
a:function a(){},
hA:function hA(){},
dW:function dW(){},
dX:function dX(){},
ig:function ig(){},
bU:function bU(){},
bu:function bu(){},
aT:function aT(a){this.$ti=a},
lr:function lr(a){this.$ti=a},
ay:function ay(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bP:function bP(){},
dV:function dV(){},
dU:function dU(){},
bt:function bt(){}},P={
oG:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.pd()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.co(new P.jK(u),1)).observe(t,{childList:true})
return new P.jJ(u,t,s)}else if(self.setImmediate!=null)return P.pe()
return P.pf()},
oH:function(a){self.scheduleImmediate(H.co(new P.jL(H.n(a,{func:1,ret:-1})),0))},
oI:function(a){self.setImmediate(H.co(new P.jM(H.n(a,{func:1,ret:-1})),0))},
oJ:function(a){P.lx(C.y,H.n(a,{func:1,ret:-1}))},
lx:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.aa(a.a,1000)
return P.oP(u<0?0:u,b)},
mv:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.bi]})
u=C.f.aa(a.a,1000)
return P.oQ(u<0?0:u,b)},
oP:function(a,b){var u=new P.fm(!0)
u.hf(a,b)
return u},
oQ:function(a,b){var u=new P.fm(!1)
u.hg(a,b)
return u},
oK:function(a,b){var u,t,s
b.a=1
try{a.fq(new P.jW(b),new P.jX(b),null)}catch(s){u=H.am(s)
t=H.cs(s)
P.pI(new P.jY(b,u,t))}},
mJ:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$iaP")
if(u>=4){t=b.cC()
b.a=a.a
b.c=a.c
P.dg(b,t)}else{t=H.e(b.c,"$ibn")
b.a=2
b.c=a
a.ec(t)}},
dg:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.e(t.c,"$iaq")
t=t.b
p=q.a
o=q.b
t.toString
P.kH(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.dg(u.a,b)}t=u.a
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
if(k){H.e(m,"$iaq")
t=t.b
p=m.a
o=m.b
t.toString
P.kH(null,null,t,p,o)
return}j=$.a4
if(j!=l)$.a4=l
else j=null
t=b.c
if(t===8)new P.k1(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.k0(s,b,m).$0()}else if((t&2)!==0)new P.k_(u,s,b).$0()
if(j!=null)$.a4=j
t=s.b
if(!!J.Z(t).$icG){if(t.a>=4){i=H.e(o.c,"$ibn")
o.c=null
b=o.bD(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.mJ(t,o)
return}}h=b.b
i=H.e(h.c,"$ibn")
h.c=null
b=h.bD(i)
t=s.a
p=s.b
if(!t){H.C(p,H.v(h,0))
h.a=4
h.c=p}else{H.e(p,"$iaq")
h.a=8
h.c=p}u.a=h
t=h}},
p8:function(a,b){if(H.fF(a,{func:1,args:[P.S,P.aC]}))return H.n(a,{func:1,ret:null,args:[P.S,P.aC]})
if(H.fF(a,{func:1,args:[P.S]}))return H.n(a,{func:1,ret:null,args:[P.S]})
throw H.c(P.lj(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
p7:function(){var u,t
for(;u=$.cm,u!=null;){$.du=null
t=u.b
$.cm=t
if(t==null)$.dt=null
u.a.$0()}},
pc:function(){$.lH=!0
try{P.p7()}finally{$.du=null
$.lH=!1
if($.cm!=null)$.lU().$1(P.n2())}},
mY:function(a){var u=new P.eJ(H.n(a,{func:1,ret:-1}))
if($.cm==null){$.dt=u
$.cm=u
if(!$.lH)$.lU().$1(P.n2())}else{$.dt.b=u
$.dt=u}},
pb:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cm
if(u==null){P.mY(a)
$.du=$.dt
return}t=new P.eJ(a)
s=$.du
if(s==null){t.b=u
$.du=t
$.cm=t}else{t.b=s.b
s.b=t
$.du=t
if(t.b==null)$.dt=t}},
pI:function(a){var u,t
u={func:1,ret:-1}
H.n(a,u)
t=$.a4
if(C.l===t){P.kJ(null,null,C.l,a)
return}t.toString
P.kJ(null,null,t,H.n(t.cO(a),u))},
mu:function(a,b){var u,t
u={func:1,ret:-1}
H.n(b,u)
t=$.a4
if(t===C.l){t.toString
return P.lx(a,b)}return P.lx(a,H.n(t.cO(b),u))},
ox:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.bi]}
H.n(b,u)
t=$.a4
if(t===C.l){t.toString
return P.mv(a,b)}s=t.eu(b,P.bi)
$.a4.toString
return P.mv(a,H.n(s,u))},
kH:function(a,b,c,d,e){var u={}
u.a=d
P.pb(new P.kI(u,e))},
mV:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a4
if(t===c)return d.$0()
$.a4=c
u=t
try{t=d.$0()
return t}finally{$.a4=u}},
mW:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.C(e,g)
t=$.a4
if(t===c)return d.$1(e)
$.a4=c
u=t
try{t=d.$1(e)
return t}finally{$.a4=u}},
p9:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
t=$.a4
if(t===c)return d.$2(e,f)
$.a4=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a4=u}},
kJ:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cO(d):c.kc(d,-1)
P.mY(d)},
jK:function jK(a){this.a=a},
jJ:function jJ(a,b,c){this.a=a
this.b=b
this.c=c},
jL:function jL(a){this.a=a},
jM:function jM(a){this.a=a},
fm:function fm(a){this.a=a
this.b=null
this.c=0},
kq:function kq(a,b){this.a=a
this.b=b},
kp:function kp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bn:function bn(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aP:function aP(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
jV:function jV(a,b){this.a=a
this.b=b},
jZ:function jZ(a,b){this.a=a
this.b=b},
jW:function jW(a){this.a=a},
jX:function jX(a){this.a=a},
jY:function jY(a,b,c){this.a=a
this.b=b
this.c=c},
k1:function k1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k2:function k2(a){this.a=a},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c},
k_:function k_(a,b,c){this.a=a
this.b=b
this.c=c},
eJ:function eJ(a){this.a=a
this.b=null},
iN:function iN(){},
iP:function iP(a,b){this.a=a
this.b=b},
iQ:function iQ(a,b){this.a=a
this.b=b},
cY:function cY(){},
iO:function iO(){},
bi:function bi(){},
aq:function aq(a,b){this.a=a
this.b=b},
kA:function kA(){},
kI:function kI(a,b){this.a=a
this.b=b},
k8:function k8(){},
ka:function ka(a,b,c){this.a=a
this.b=b
this.c=c},
k9:function k9(a,b){this.a=a
this.b=b},
kb:function kb(a,b,c){this.a=a
this.b=b
this.c=c},
o4:function(a,b,c,d,e){return new H.aU([d,e])},
lu:function(a,b){return new H.aU([a,b])},
o6:function(a){return H.po(a,new H.aU([null,null]))},
e0:function(a,b,c,d){return new P.k6([d])},
lD:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oO:function(a,b,c){var u=new P.eY(a,b,[c])
u.c=a.e
return u},
nZ:function(a,b,c){var u,t
if(P.lI(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.f])
t=$.dz()
C.a.h(t,a)
try{P.p6(a,u)}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}t=P.ms(b,H.na(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
lq:function(a,b,c){var u,t,s
if(P.lI(a))return b+"..."+c
u=new P.an(b)
t=$.dz()
C.a.h(t,a)
try{s=u
s.a=P.ms(s.a,a,", ")}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lI:function(a){var u,t
for(u=0;t=$.dz(),u<t.length;++u)if(a===t[u])return!0
return!1},
p6:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.k(b,"$ib",[P.f],"$ab")
u=a.gY(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.F())return
r=H.m(u.gM(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.F()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gM(u);++s
if(!u.F()){if(s<=4){C.a.h(b,H.m(o))
return}q=H.m(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gM(u);++s
for(;u.F();o=n,n=m){m=u.gM(u);++s
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
o5:function(a,b,c){var u=P.o4(null,null,null,b,c)
a.O(0,new P.hJ(u,b,c))
return u},
md:function(a,b){var u,t,s
u=P.e0(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.D)(a),++s)u.h(0,H.C(a[s],b))
return u},
lv:function(a){var u,t
u={}
if(P.lI(a))return"{...}"
t=new P.an("")
try{C.a.h($.dz(),a)
t.a+="{"
u.a=!0
J.lZ(a,new P.hN(u,t))
t.a+="}"}finally{u=$.dz()
if(0>=u.length)return H.h(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
k6:function k6(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cj:function cj(a){this.a=a
this.c=this.b=null},
eY:function eY(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hJ:function hJ(a,b,c){this.a=a
this.b=b
this.c=c},
hK:function hK(){},
y:function y(){},
hM:function hM(){},
hN:function hN(a,b){this.a=a
this.b=b},
aj:function aj(){},
kr:function kr(){},
hO:function hO(){},
eC:function eC(a,b){this.a=a
this.$ti=b},
kd:function kd(){},
eZ:function eZ(){},
fs:function fs(){},
oB:function(a,b,c,d){H.k(b,"$ib",[P.o],"$ab")
if(b instanceof Uint8Array)return P.oC(!1,b,c,d)
return},
oC:function(a,b,c,d){var u,t,s
u=$.nt()
if(u==null)return
t=0===c
if(t&&!0)return P.lA(u,b)
s=b.length
d=P.bx(c,d,s,null,null,null)
if(t&&d===s)return P.lA(u,b)
return P.lA(u,b.subarray(c,d))},
lA:function(a,b){if(P.oE(b))return
return P.oF(a,b)},
oF:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.am(t)}return},
oE:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
oD:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.am(t)}return},
pa:function(a,b,c){var u,t,s
H.k(a,"$ib",[P.o],"$ab")
for(u=J.cr(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.c9()
if((s&127)!==s)return t-b}return c-b},
m2:function(a,b,c,d,e,f){if(C.f.bx(f,4)!==0)throw H.c(P.a9("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a9("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a9("Invalid base64 padding, more than two '=' characters",a,b))},
fS:function fS(a){this.a=a},
fT:function fT(a){this.a=a},
c3:function c3(){},
bI:function bI(){},
hf:function hf(){},
hv:function hv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hu:function hu(a){this.a=a},
jr:function jr(a){this.a=a},
jt:function jt(){},
ky:function ky(a){this.b=this.a=0
this.c=a},
js:function js(a){this.a=a},
kw:function kw(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
kx:function kx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fI:function(a,b,c){var u
H.n(b,{func:1,ret:P.o,args:[P.f]})
u=H.ok(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a9(a,null,null))},
nX:function(a){if(a instanceof H.cA)return a.i(0)
return"Instance of '"+H.cc(a)+"'"},
o7:function(a,b,c,d){var u,t
H.C(b,d)
u=J.o1(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.k(u,"$ib",[d],"$ab")},
me:function(a,b,c){var u,t,s
u=[c]
t=H.d([],u)
for(s=J.bE(a);s.F();)C.a.h(t,H.C(s.gM(s),c))
if(b)return t
return H.k(J.hz(t),"$ib",u,"$ab")},
ep:function(a,b,c){var u,t
u=P.o
H.k(a,"$ii",[u],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$iaT",[u],"$aaT")
t=a.length
c=P.bx(b,c,t,null,null,null)
return H.mn(b>0||c<t?C.a.fS(a,b,c):a)}if(!!J.Z(a).$icR)return H.om(a,b,P.bx(b,c,a.length,null,null,null))
return P.ov(a,b,c)},
ov:function(a,b,c){var u,t,s,r
H.k(a,"$ii",[P.o],"$ai")
if(b<0)throw H.c(P.ah(b,0,J.aJ(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.ah(c,b,J.aJ(a),null,null))
t=J.bE(a)
for(s=0;s<b;++s)if(!t.F())throw H.c(P.ah(b,0,s,null,null))
r=[]
if(u)for(;t.F();)r.push(t.gM(t))
else for(s=b;s<c;++s){if(!t.F())throw H.c(P.ah(c,b,s,null,null))
r.push(t.gM(t))}return H.mn(r)},
op:function(a,b,c){return new H.hB(a,H.o2(a,!1,!0,!1))},
ms:function(a,b,c){var u=J.bE(b)
if(!u.F())return a
if(c.length===0){do a+=H.m(u.gM(u))
while(u.F())}else{a+=H.m(u.gM(u))
for(;u.F();)a=a+c+H.m(u.gM(u))}return a},
my:function(){var u=H.oc()
if(u!=null)return P.oA(u,0,null)
throw H.c(P.I("'Uri.base' is not supported"))},
ft:function(a,b,c,d){var u,t,s,r,q,p
H.k(a,"$ib",[P.o],"$ab")
if(c===C.m){u=$.nz().b
if(typeof b!=="string")H.r(H.aw(b))
u=u.test(b)}else u=!1
if(u)return b
H.C(b,H.ap(c,"c3",0))
t=c.gkC().cU(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.cd(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
nT:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nU:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dK:function(a){if(a>=10)return""+a
return"0"+a},
m8:function(a,b,c,d,e,f){return new P.b8(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
hh:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ax(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nX(a)},
dC:function(a){return new P.aR(!1,null,null,a)},
lj:function(a,b,c){return new P.aR(!0,a,b,c)},
eg:function(a,b,c){return new P.ce(null,null,!0,a,b,"Value not in range")},
ah:function(a,b,c,d,e){return new P.ce(b,c,!0,a,d,"Invalid value")},
bx:function(a,b,c,d,e,f){if(typeof a!=="number")return H.G(a)
if(0>a||a>c)throw H.c(P.ah(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.ah(b,a,c,"end",f))
return b}return c},
a0:function(a,b,c,d,e){var u=H.ag(e==null?J.aJ(b):e)
return new P.hx(b,u,!0,a,c,"Index out of range")},
I:function(a){return new P.jk(a)},
ji:function(a){return new P.jh(a)},
mr:function(a){return new P.cg(a)},
bq:function(a){return new P.fZ(a)},
t:function(a){return new P.eR(a)},
a9:function(a,b,c){return new P.hq(a,b,c)},
o8:function(a,b,c,d){var u,t
H.n(b,{func:1,ret:d,args:[P.o]})
u=H.d([],[d])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
aE:function(a){H.pG(a)},
oA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.K(a,b+4)^58)*3|C.c.K(a,b)^100|C.c.K(a,b+1)^97|C.c.K(a,b+2)^116|C.c.K(a,b+3)^97)>>>0
if(t===0)return P.mx(b>0||c<c?C.c.A(a,b,c):a,5,null).gfw()
else if(t===32)return P.mx(C.c.A(a,u,c),0,null).gfw()}s=new Array(8)
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
if(P.mX(a,b,c,0,r)>=14)C.a.n(r,7,c)
q=r[1]
if(typeof q!=="number")return q.lC()
if(q>=b)if(P.mX(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.p()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.a1()
if(typeof m!=="number")return H.G(m)
if(l<m)m=l
if(typeof n!=="number")return n.a1()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.a1()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.a1()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.c.ak(a,"..",n)))i=m>n+2&&C.c.ak(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.ak(a,"file",b)){if(p<=b){if(!C.c.ak(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.c.A(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.c.b9(a,n,m,"/");++m;++l;++c}else{a=C.c.A(a,b,n)+"/"+C.c.A(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.ak(a,"http",b)){if(s&&o+3===n&&C.c.ak(a,"80",o+1))if(b===0&&!0){a=C.c.b9(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.c.A(a,b,o)+C.c.A(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.c.ak(a,"https",b)){if(s&&o+4===n&&C.c.ak(a,"443",o+1))if(b===0&&!0){a=C.c.b9(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.c.A(a,b,o)+C.c.A(a,n,c)
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
if(k){if(b>0||c<a.length){a=C.c.A(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.kg(a,q,p,o,n,m,l,j)}return P.oR(a,b,c,q,p,o,n,m,l,j)},
mA:function(a,b){var u=P.f
return C.a.kK(H.d(a.split("&"),[u]),P.lu(u,u),new P.jp(b),[P.F,P.f,P.f])},
oz:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.jm(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.a6(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.fI(C.c.A(a,q,r),null,null)
if(typeof n!=="number")return n.fK()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.h(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.fI(C.c.A(a,q,c),null,null)
if(typeof n!=="number")return n.fK()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.h(t,p)
t[p]=n
return t},
mz:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.jn(a)
t=new P.jo(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.o])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.a6(a,r)
if(n===58){if(r===b){++r
if(C.c.a6(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaF(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.oz(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.h(j,g)
j[g]=0
d=g+1
if(d>=i)return H.h(j,d)
j[d]=0
g+=2}else{d=C.f.b3(f,8)
if(g<0||g>=i)return H.h(j,g)
j[g]=d
d=g+1
if(d>=i)return H.h(j,d)
j[d]=f&255
g+=2}}return j},
oR:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.oY(a,b,d)
else{if(d===b)P.dq(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oZ(a,u,e-1):""
s=P.oV(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.G(g)
q=r<g?P.oX(P.fI(C.c.A(a,r,g),new P.ks(a,f),null),j):null}else{t=""
s=null
q=null}p=P.oW(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.a1()
o=h<i?P.lE(a,h+1,i,null):null
return new P.ck(j,t,s,q,p,o,i<c?P.oU(a,i+1,c):null)},
mN:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dq:function(a,b,c){throw H.c(P.a9(c,a,b))},
oX:function(a,b){if(a!=null&&a===P.mN(b))return
return a},
oV:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.a6(a,b)===91){if(typeof c!=="number")return c.u()
u=c-1
if(C.c.a6(a,u)!==93)P.dq(a,b,"Missing end `]` to match `[` in host")
P.mz(a,b+1,u)
return C.c.A(a,b,c).toLowerCase()}if(typeof c!=="number")return H.G(c)
t=b
for(;t<c;++t)if(C.c.a6(a,t)===58){P.mz(a,b,c)
return"["+a+"]"}return P.p0(a,b,c)},
p0:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.G(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.a6(a,u)
if(q===37){p=P.mT(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.an("")
n=C.c.A(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.A(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.h(C.K,o)
o=(C.K[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.an("")
if(t<u){s.a+=C.c.A(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.h(C.t,o)
o=(C.t[o]&1<<(q&15))!==0}else o=!1
if(o)P.dq(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.a6(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.an("")
n=C.c.A(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mO(q)
u+=l
t=u}}}}if(s==null)return C.c.A(a,b,c)
if(t<c){n=C.c.A(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oY:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mQ(C.c.K(a,b)))P.dq(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.K(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.h(C.v,r)
r=(C.v[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dq(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.A(a,b,c)
return P.oS(t?a.toLowerCase():a)},
oS:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oZ:function(a,b,c){return P.dr(a,b,c,C.a9,!1)},
oW:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.dr(a,b,c,C.L,!0):C.r.lH(d,new P.kt(),P.f).m(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.a9(r,"/"))r="/"+r
return P.p_(r,e,f)},
p_:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.a9(a,"/"))return P.p1(a,!u||c)
return P.p2(a)},
lE:function(a,b,c,d){var u,t
u={}
H.k(d,"$iF",[P.f,null],"$aF")
if(a!=null){if(d!=null)throw H.c(P.dC("Both query and queryParameters specified"))
return P.dr(a,b,c,C.u,!0)}if(d==null)return
t=new P.an("")
u.a=""
d.O(0,new P.ku(new P.kv(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
oU:function(a,b,c){return P.dr(a,b,c,C.u,!0)},
mT:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.a6(a,b+1)
s=C.c.a6(a,u)
r=H.kR(t)
q=H.kR(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.b3(p,4)
if(u>=8)return H.h(C.w,u)
u=(C.w[u]&1<<(p&15))!==0}else u=!1
if(u)return H.cd(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.A(a,b,b+3).toUpperCase()
return},
mO:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.o])
C.a.n(t,0,37)
C.a.n(t,1,C.c.K("0123456789ABCDEF",a>>>4))
C.a.n(t,2,C.c.K("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.o])
for(q=0;--r,r>=0;s=128){p=C.f.jk(a,6*r)&63|s
C.a.n(t,q,37)
C.a.n(t,q+1,C.c.K("0123456789ABCDEF",p>>>4))
C.a.n(t,q+2,C.c.K("0123456789ABCDEF",p&15))
q+=3}}return P.ep(t,0,null)},
dr:function(a,b,c,d,e){var u=P.mS(a,b,c,H.k(d,"$ib",[P.o],"$ab"),e)
return u==null?C.c.A(a,b,c):u},
mS:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.k(d,"$ib",[P.o],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.a1()
if(typeof c!=="number")return H.G(c)
if(!(t<c))break
c$0:{q=C.c.a6(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.h(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mT(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.h(C.t,p)
p=(C.t[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.dq(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.a6(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mO(q)}}if(r==null)r=new P.an("")
r.a+=C.c.A(a,s,t)
r.a+=H.m(o)
if(typeof n!=="number")return H.G(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.a1()
if(s<c)r.a+=C.c.A(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mR:function(a){if(C.c.a9(a,"."))return!0
return C.c.f8(a,"/.")!==-1},
p2:function(a){var u,t,s,r,q,p,o
if(!P.mR(a))return a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.N(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.h(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
p1:function(a,b){var u,t,s,r,q,p
if(!P.mR(a))return!b?P.mP(a):a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaF(u)!==".."){if(0>=u.length)return H.h(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.h(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaF(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.h(u,0)
C.a.n(u,0,P.mP(u[0]))}return C.a.m(u,"/")},
mP:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.mQ(J.nD(a,0)))for(t=1;t<u;++t){s=C.c.K(a,t)
if(s===58)return C.c.A(a,0,t)+"%3A"+C.c.ax(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.h(C.v,r)
r=(C.v[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
oT:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.K(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dC("Invalid URL encoding"))}}return u},
lF:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.K(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.A(a,b,c)
else q=new H.w(C.c.A(a,b,c))}else{q=H.d([],[P.o])
for(r=a.length,t=b;t<c;++t){s=C.c.K(a,t)
if(s>127)throw H.c(P.dC("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.dC("Truncated URI"))
C.a.h(q,P.oT(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.k(q,"$ib",[P.o],"$ab")
return new P.js(!1).cU(q)},
mQ:function(a){var u=a|32
return 97<=u&&u<=122},
mx:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.d([b-1],[P.o])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.K(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a9("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a9("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.K(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaF(u)
if(q!==44||s!==o+7||!C.c.ak(a,"base64",o+1))throw H.c(P.a9("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.Q.kY(0,a,n,t)
else{m=P.mS(a,n,t,C.u,!0)
if(m!=null)a=C.c.b9(a,n,t,m)}return new P.jl(a,u,c)},
p4:function(){var u,t,s,r,q
u=P.o8(22,new P.kE(),!0,P.U)
t=new P.kD(u)
s=new P.kF()
r=new P.kG()
q=H.e(t.$2(0,225),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(14,225),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(15,225),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(1,225),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(2,235),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(3,235),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(4,229),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(5,229),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(6,231),"$iU")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(7,231),"$iU")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.e(t.$2(8,8),"$iU"),"]",5)
q=H.e(t.$2(9,235),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(16,235),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(17,235),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(10,235),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(18,235),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(19,235),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(11,235),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(12,236),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.e(t.$2(13,237),"$iU")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.e(t.$2(20,245),"$iU"),"az",21)
q=H.e(t.$2(21,245),"$iU")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
mX:function(a,b,c,d,e){var u,t,s,r,q
H.k(e,"$ib",[P.o],"$ab")
u=$.nA()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.h(u,d)
s=u[d]
r=C.c.K(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.h(s,r)
q=s[r]
d=q&31
C.a.n(e,q>>>5,t)}return d},
T:function T(){},
ar:function ar(a,b){this.a=a
this.b=b},
u:function u(){},
b8:function b8(a){this.a=a},
hb:function hb(){},
hc:function hc(){},
bK:function bK(){},
eb:function eb(){},
aR:function aR(a,b,c,d){var _=this
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
hx:function hx(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
jk:function jk(a){this.a=a},
jh:function jh(a){this.a=a},
cg:function cg(a){this.a=a},
fZ:function fZ(a){this.a=a},
ie:function ie(){},
eo:function eo(){},
h5:function h5(a){this.a=a},
eR:function eR(a){this.a=a},
hq:function hq(a,b,c){this.a=a
this.b=b
this.c=c},
bL:function bL(){},
o:function o(){},
i:function i(){},
b9:function b9(){},
b:function b(){},
F:function F(){},
L:function L(){},
a8:function a8(){},
S:function S(){},
aC:function aC(){},
f:function f(){},
an:function an(a){this.a=a},
jp:function jp(a){this.a=a},
jm:function jm(a){this.a=a},
jn:function jn(a){this.a=a},
jo:function jo(a,b){this.a=a
this.b=b},
ck:function ck(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
ks:function ks(a,b){this.a=a
this.b=b},
kt:function kt(){},
kv:function kv(a,b){this.a=a
this.b=b},
ku:function ku(a){this.a=a},
jl:function jl(a,b,c){this.a=a
this.b=b
this.c=c},
kE:function kE(){},
kD:function kD(a){this.a=a},
kF:function kF(){},
kG:function kG(){},
kg:function kg(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jQ:function jQ(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
pj:function(a){var u,t
u=J.Z(a)
if(!!u.$ibs){t=u.geA(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.fr(a.data,a.height,a.width)},
pi:function(a){if(a instanceof P.fr)return{data:a.a,height:a.b,width:a.c}
return a},
by:function(a){var u,t,s,r,q
if(a==null)return
u=P.lu(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r){q=H.J(t[r])
u.n(0,q,a[q])}return u},
ph:function(a,b){var u={}
a.O(0,new P.kK(u))
return u},
ki:function ki(){},
kk:function kk(a,b){this.a=a
this.b=b},
fr:function fr(a,b,c){this.a=a
this.b=b
this.c=c},
kK:function kK(a){this.a=a},
kj:function kj(a,b){this.a=a
this.b=b},
hm:function hm(a,b){this.a=a
this.b=b},
hn:function hn(){},
ho:function ho(){},
k5:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oN:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k7:function k7(){},
ad:function ad(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bb:function bb(){},
hE:function hE(){},
bf:function bf(){},
ic:function ic(){},
ik:function ik(){},
cV:function cV(){},
iR:function iR(){},
q:function q(){},
bj:function bj(){},
j4:function j4(){},
eW:function eW(){},
eX:function eX(){},
f6:function f6(){},
f7:function f7(){},
fi:function fi(){},
fj:function fj(){},
fp:function fp(){},
fq:function fq(){},
U:function U(){},
fO:function fO(){},
fP:function fP(){},
fQ:function fQ(a){this.a=a},
fR:function fR(){},
bZ:function bZ(){},
id:function id(){},
eK:function eK(){},
dE:function dE(){},
dQ:function dQ(){},
ee:function ee(){},
cf:function cf(){},
ei:function ei(){},
es:function es(){},
eA:function eA(){},
iJ:function iJ(){},
fe:function fe(){},
ff:function ff(){}},W={
m1:function(a){var u=document.createElement("a")
return u},
ll:function(a,b){var u=document.createElement("canvas")
return u},
nV:function(a,b,c){var u,t
u=document.body
t=(u&&C.p).ao(u,a,b,c)
t.toString
u=W.H
u=new H.dd(new W.au(t),H.n(new W.he(),{func:1,ret:P.T,args:[u]}),[u])
return H.e(u.gaV(u),"$iX")},
nW:function(a){H.e(a,"$ij")
return"wheel"},
cE:function(a){var u,t,s
u="element tag unavailable"
try{t=J.nI(a)
if(typeof t==="string")u=a.tagName}catch(s){H.am(s)}return u},
nY:function(a){var u,t,s
t=document.createElement("input")
u=H.e(t,"$icJ")
try{u.type=a}catch(s){H.am(s)}return u},
k4:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mL:function(a,b,c,d){var u,t
u=W.k4(W.k4(W.k4(W.k4(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ae:function(a,b,c,d,e){var u=W.n_(new W.jU(c),W.p)
if(u!=null&&!0)J.nE(a,b,u,!1)
return new W.jT(a,b,u,!1,[e])},
mK:function(a){var u,t
u=W.m1(null)
t=window.location
u=new W.bV(new W.kc(u,t))
u.h4(a)
return u},
oL:function(a,b,c,d){H.e(a,"$iX")
H.J(b)
H.J(c)
H.e(d,"$ibV")
return!0},
oM:function(a,b,c,d){var u,t,s
H.e(a,"$iX")
H.J(b)
H.J(c)
u=H.e(d,"$ibV").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mM:function(){var u,t,s,r,q
u=P.f
t=P.md(C.A,u)
s=H.v(C.A,0)
r=H.n(new W.ko(),{func:1,ret:u,args:[s]})
q=H.d(["TEMPLATE"],[u])
t=new W.kn(t,P.e0(null,null,null,u),P.e0(null,null,null,u),P.e0(null,null,null,u),null)
t.he(null,new H.hR(C.A,r,[s,u]),q,null)
return t},
n_:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a4
if(u===C.l)return a
return u.eu(a,b)},
A:function A(){},
fL:function fL(){},
dB:function dB(){},
fM:function fM(){},
cw:function cw(){},
c_:function c_(){},
bF:function bF(){},
c1:function c1(){},
c2:function c2(){},
bG:function bG(){},
cB:function cB(){},
h1:function h1(){},
a_:function a_(){},
cC:function cC(){},
h2:function h2(){},
b6:function b6(){},
b7:function b7(){},
h3:function h3(){},
h4:function h4(){},
h7:function h7(){},
aK:function aK(){},
cD:function cD(){},
h8:function h8(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
h9:function h9(){},
ha:function ha(){},
jO:function jO(a,b){this.a=a
this.b=b},
X:function X(){},
he:function he(){},
p:function p(){},
j:function j(){},
aL:function aL(){},
cF:function cF(){},
hl:function hl(){},
hp:function hp(){},
aS:function aS(){},
dR:function dR(){},
dS:function dS(){},
c8:function c8(){},
dT:function dT(){},
bs:function bs(){},
cI:function cI(){},
cJ:function cJ(){},
ba:function ba(){},
dZ:function dZ(){},
e1:function e1(){},
cN:function cN(){},
hX:function hX(){},
hY:function hY(){},
hZ:function hZ(a){this.a=a},
i_:function i_(){},
i0:function i0(a){this.a=a},
aV:function aV(){},
i1:function i1(){},
ak:function ak(){},
au:function au(a){this.a=a},
H:function H(){},
cS:function cS(){},
aW:function aW(){},
ii:function ii(){},
ef:function ef(){},
iu:function iu(){},
iv:function iv(a){this.a=a},
ix:function ix(){},
aX:function aX(){},
iH:function iH(){},
aY:function aY(){},
iI:function iI(){},
aZ:function aZ(){},
iL:function iL(){},
iM:function iM(a){this.a=a},
aM:function aM(){},
bh:function bh(){},
eq:function eq(){},
er:function er(){},
iS:function iS(){},
d_:function d_(){},
b_:function b_(){},
aN:function aN(){},
iU:function iU(){},
iV:function iV(){},
iZ:function iZ(){},
b0:function b0(){},
b1:function b1(){},
j2:function j2(){},
j3:function j3(){},
bT:function bT(){},
jq:function jq(){},
jG:function jG(){},
jH:function jH(){},
bm:function bm(){},
de:function de(){},
df:function df(){},
jP:function jP(){},
eM:function eM(){},
k3:function k3(){},
f3:function f3(){},
kh:function kh(){},
kl:function kl(){},
jN:function jN(){},
jR:function jR(a){this.a=a},
jS:function jS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lC:function lC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jT:function jT(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jU:function jU(a){this.a=a},
bV:function bV(a){this.a=a},
E:function E(){},
ea:function ea(a){this.a=a},
i9:function i9(a){this.a=a},
i8:function i8(a,b,c){this.a=a
this.b=b
this.c=c},
fb:function fb(){},
ke:function ke(){},
kf:function kf(){},
kn:function kn(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ko:function ko(){},
km:function km(){},
dP:function dP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aH:function aH(){},
kc:function kc(a,b){this.a=a
this.b=b},
fu:function fu(a){this.a=a},
kz:function kz(a){this.a=a},
eL:function eL(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
f4:function f4(){},
f5:function f5(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
dl:function dl(){},
dm:function dm(){},
fc:function fc(){},
fd:function fd(){},
fh:function fh(){},
fk:function fk(){},
fl:function fl(){},
dn:function dn(){},
dp:function dp(){},
fn:function fn(){},
fo:function fo(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(){},
fA:function fA(){},
fB:function fB(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(){}},O={
lm:function(a){var u=new O.a6([a])
u.bA(a)
return u},
a6:function a6(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cM:function cM(){this.b=this.a=null},
e4:function e4(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hS:function hS(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cL:function cL(){},
hT:function hT(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
bc:function bc(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hV:function hV(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hW:function hW(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
el:function el(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bS:function bS(){}},E={
mb:function(a,b,c,d,e,f){var u=new E.as()
u.a=d
u.b=!0
u.sh3(0,O.lm(E.as))
u.y.bc(u.gkZ(),u.gl1())
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
u.sac(0,e)
return u},
oq:function(a,b){var u=new E.iq(a,b)
u.h_(a,b)
return u},
ow:function(a,b,c,d,e){var u,t,s,r
u=J.Z(a)
if(!!u.$ic1)return E.mt(a,!0,!0,!0,!1)
t=W.ll(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcT(a).h(0,t)
r=E.mt(t,!0,!0,!0,!1)
r.a=a
return r},
mt:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.ew()
t=H.e(C.q.dw(a,"webgl2",P.o6(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$icf")
if(t==null)H.r(P.t("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.oq(t,a)
s=new T.iW(t)
s.b=H.ag((t&&C.b).dA(t,3379))
s.c=H.ag(C.b.dA(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.eD(a)
r=new X.hD()
r.c=new X.aG(!1,!1,!1)
r.siT(P.e0(null,null,null,P.o))
s.b=r
r=new X.i2(s)
r.f=0
r.r=V.bg()
r.x=V.bg()
r.Q=1
r.ch=1
s.c=r
r=new X.hL(s)
r.r=0
r.x=V.bg()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.j1(s)
r.e=0
r.f=V.bg()
r.r=V.bg()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.shy(H.d([],[[P.cY,P.S]]))
r=s.z
q=document
p=W.ak
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.ae(q,"contextmenu",H.n(s.gib(),o),!1,p))
r=s.z
n=W.p
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.ae(a,"focus",H.n(s.gij(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.ae(a,"blur",H.n(s.gi3(),m),!1,n))
r=s.z
l=W.ba
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.ae(q,"keyup",H.n(s.gio(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.ae(q,"keydown",H.n(s.gil(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.ae(a,"mousedown",H.n(s.gis(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ae(a,"mouseup",H.n(s.giw(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ae(a,"mousemove",H.n(s.giu(),o),!1,p))
l=s.z
k=W.bm;(l&&C.a).h(l,W.ae(a,H.J(W.nW(a)),H.n(s.giy(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.ae(q,"mousemove",H.n(s.gie(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.ae(q,"mouseup",H.n(s.gih(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.ae(q,"pointerlockchange",H.n(s.giA(),m),!1,n))
n=s.z
m=W.b1
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.ae(a,"touchstart",H.n(s.giQ(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ae(a,"touchend",H.n(s.giM(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ae(a,"touchmove",H.n(s.giO(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.ar(Date.now(),!1)
u.cy=0
u.ee()
return u},
fU:function fU(){},
as:function as(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iq:function iq(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ir:function ir(a){this.a=a},
is:function is(a){this.a=a},
it:function it(a){this.a=a},
ew:function ew(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iY:function iY(a){this.a=a}},Z={
lB:function(a,b,c){var u
H.k(c,"$ib",[P.o],"$ab")
u=a.createBuffer()
C.b.aD(a,b,u)
C.b.ex(a,b,new Int16Array(H.cl(c)),35044)
C.b.aD(a,b,null)
return new Z.eH(b,u)},
aO:function(a){return new Z.bl(a)},
eH:function eH(a,b){this.a=a
this.b=b},
dF:function dF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eI:function eI(a){this.a=a},
cz:function cz(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bM:function bM(a,b,c){this.a=a
this.b=b
this.c=c},
bl:function bl(a){this.a=a}},D={
Q:function(){var u=new D.c5()
u.sal(null)
u.sb1(null)
u.c=null
u.d=0
return u},
fX:function fX(){},
c5:function c5(){var _=this
_.d=_.c=_.b=_.a=null},
hi:function hi(a){this.a=a},
hj:function hj(a){this.a=a},
z:function z(a){this.a=a
this.b=null},
bN:function bN(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bO:function bO(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
M:function M(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
bJ:function bJ(){var _=this
_.d=_.c=_.b=_.a=null},
aa:function aa(){},
e_:function e_(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
ed:function ed(){},
en:function en(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){}},X={dG:function dG(a,b){this.a=a
this.b=b},dY:function dY(a,b){this.a=a
this.b=b},hD:function hD(){var _=this
_.d=_.c=_.b=_.a=null},e2:function e2(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},hL:function hL(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aG:function aG(a,b,c){this.a=a
this.b=b
this.c=c},bw:function bw(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},i2:function i2(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cO:function cO(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},ij:function ij(){},ey:function ey(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},j1:function j1(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},eD:function eD(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lp:function(a,b,c,d,e,f,g){var u,t
u=new X.hr()
t=new V.ai(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.mp
if(t==null){t=V.mo(0,0,1,1)
$.mp=t}u.r=t
return u},
mj:function(a,b,c,d,e){var u,t,s
u=new X.ec()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
if(null!=c){t=u.b
u.b=c
if(c!=null)c.gv().h(0,u.gi5())
s=new D.M("mover",t,u.b,u,[U.al])
s.b=!0
u.az(s)}s=u.c
if(!(Math.abs(s-b)<$.P().a)){u.c=b
s=new D.M("fov",s,b,u,[P.u])
s.b=!0
u.az(s)}s=u.d
if(!(Math.abs(s-d)<$.P().a)){u.d=d
s=new D.M("near",s,d,u,[P.u])
s.b=!0
u.az(s)}s=u.e
if(!(Math.abs(s-a)<$.P().a)){u.e=a
s=new D.M("far",s,a,u,[P.u])
s.b=!0
u.az(s)}return u},
c0:function c0(){},
hr:function hr(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hw:function hw(){this.b=this.a=null},
ec:function ec(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cZ:function cZ(){}},V={
pN:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bx(a-b,u)
return(a<0?a+u:a)+b},
V:function(a,b,c){if(a==null)return C.c.aq("null",c)
return C.c.aq(C.e.fs(Math.abs(a-0)<$.P().a?0:a,b),c+b+1)},
cq:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.u],"$ab")
u=H.d([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.D)(a),++r){q=V.V(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.n(u,p,C.c.aq(u[p],s))}return u},
lR:function(a,b){return C.e.ls(Math.pow(b,C.a_.d4(Math.log(H.pg(a))/Math.log(b))))},
ca:function(){var u=$.mg
if(u==null){u=V.bd(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.mg=u}return u},
bd:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.az(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mf:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.t(0,Math.sqrt(c.D(c)))
t=b.aN(u)
s=t.t(0,Math.sqrt(t.D(t)))
r=u.aN(s)
q=new V.B(a.a,a.b,a.c)
p=s.W(0).D(q)
o=r.W(0).D(q)
n=u.W(0).D(q)
return V.bd(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bg:function(){var u=$.ml
if(u==null){u=new V.a1(0,0)
$.ml=u}return u},
lw:function(){var u=$.cT
if(u==null){u=new V.W(0,0,0)
$.cT=u}return u},
mo:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eh(a,b,c,d)},
db:function(){var u=$.mF
if(u==null){u=new V.B(0,0,0)
$.mF=u}return u},
mG:function(){var u=$.mE
if(u==null){u=new V.B(0,1,0)
$.mE=u}return u},
mH:function(){var u=$.ju
if(u==null){u=new V.B(0,0,1)
$.ju=u}return u},
a7:function a7(a,b,c){this.a=a
this.b=b
this.c=c},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hg:function hg(a){this.a=a},
e6:function e6(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
az:function az(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a1:function a1(a,b){this.a=a
this.b=b},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eh:function eh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Y:function Y(a,b){this.a=a
this.b=b},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
b3:function b3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a2:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.t("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.K(a,0)
t=C.c.K(b,0)
s=new V.io()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
x:function(a){var u=new V.iy()
u.h0(a)
return u},
j0:function(){var u,t
u=new V.j_()
t=P.f
u.sjm(new H.aU([t,V.cX]))
u.sjq(new H.aU([t,V.d1]))
u.c=null
return u},
bp:function bp(){},
aF:function aF(){},
e3:function e3(){},
aA:function aA(){this.a=null},
io:function io(){this.b=this.a=null},
iy:function iy(){this.a=null},
cX:function cX(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ex:function ex(a,b,c){this.a=a
this.b=b
this.c=c},
d1:function d1(a,b){this.a=a
this.b=b
this.c=null},
j_:function j_(){this.c=this.b=this.a=null},
d2:function d2(a){this.b=a
this.a=this.c=null},
pJ:function(a){P.ox(C.V,new V.la(a))},
os:function(a,b){var u=new V.iC()
u.h1(a,!0)
return u},
bH:function bH(){},
la:function la(a){this.a=a},
h6:function h6(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hs:function hs(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ht:function ht(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ih:function ih(a){var _=this
_.a=a
_.d=_.c=_.b=null},
il:function il(a,b){this.a=a
this.b=b
this.c=null},
im:function im(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iC:function iC(){this.b=this.a=null},
iE:function iE(a){this.a=a},
iD:function iD(a){this.a=a},
iF:function iF(a){this.a=a}},U={
ln:function(){var u=new U.fY()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
m7:function(a){var u=new U.dI()
u.a=a
return u},
fY:function fY(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dI:function dI(){this.b=this.a=null},
cH:function cH(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
al:function al(){},
eE:function eE(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eF:function eF(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eG:function eG(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dH:function dH(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},dJ:function dJ(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},dO:function dO(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},aI:function aI(){}},A={
o9:function(a,b){var u,t
u=a.at
t=new A.e5(b,u)
t.dH(b,u)
t.fZ(a,b)
return t},
ly:function(a,b,c,d,e){var u=new A.j9(a,b,c,e)
u.f=d
u.sjB(P.o7(d,0,!1,P.o))
return u},
dD:function dD(a,b,c){this.a=a
this.b=b
this.c=c},
fN:function fN(a){this.a=a},
e5:function e5(a,b){var _=this
_.bL=_.eH=_.bK=_.at=_.aE=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.eX=_.cZ=_.eW=_.bY=_.eV=_.eU=_.bX=_.bW=_.eT=_.eS=_.bV=_.bU=_.bT=_.eR=_.eQ=_.bS=_.eP=_.eO=_.bR=_.eN=_.eM=_.bQ=_.bP=_.eL=_.eK=_.bO=_.bN=_.eJ=_.eI=_.bM=null
_.d3=_.f0=_.d2=_.f_=_.d1=_.eZ=_.d0=_.eY=_.d_=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hU:function hU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aE=b3
_.at=b4
_.bK=b5},
d3:function d3(a,b,c){this.a=a
this.b=b
this.c=c},
d7:function d7(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
d5:function d5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
d8:function d8(a,b,c,d,e,f,g,h,i,j){var _=this
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
d6:function d6(a,b,c,d,e,f,g,h,i,j){var _=this
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
d9:function d9(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cW:function cW(){},
c4:function c4(a,b){this.a=a
this.b=b},
em:function em(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ez:function ez(){},
jf:function jf(a){this.a=a},
R:function R(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jb:function jb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jc:function jc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
je:function je(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j9:function j9(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ja:function ja(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
O:function O(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jd:function jd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jg:function jg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aD:function aD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
at:function at(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
lN:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.ab,P.u,P.u]})
u=F.ek()
F.ds(u,b,c,d,a,1,0,0,1)
F.ds(u,b,c,d,a,0,1,0,3)
F.ds(u,b,c,d,a,0,0,1,2)
F.ds(u,b,c,d,a,-1,0,0,0)
F.ds(u,b,c,d,a,0,-1,0,0)
F.ds(u,b,c,d,a,0,0,-1,3)
u.an()
return u},
kC:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
ds:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
H.n(c,{func:1,ret:-1,args:[F.ab,P.u,P.u]})
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.B(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.B(o+a3,n+a1,m+a2)
u.b=l
k=new V.B(o-a3,n-a1,m-a2)
u.c=k
j=new V.B(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.kC(t)
f=F.kC(u.b)
e=F.ld(d,a0,new F.kB(u,F.kC(u.c),F.kC(u.d),f,g,c),b)
if(e!=null)a.b7(e)},
n5:function(a,b,c,d,e,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(e,{func:1,ret:P.u,args:[P.u]})
if(a0<3)return
u=F.ek()
t=b?-1:1
s=-6.283185307179586/a0
r=H.d([],[F.ab])
q=u.a
p=new V.B(0,0,t)
p=p.t(0,Math.sqrt(p.D(p)))
C.a.h(r,q.k5(new V.aB(a,-1,-1,-1),new V.ai(1,1,1,1),new V.W(0,0,d),new V.B(0,0,t),new V.a1(0.5,0.5),p))
for(q=t*t,o=0;o<=a0;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=e.$1(o/a0)
p=u.a
if(typeof k!=="number")return H.G(k)
j=new V.B(m,l,t).t(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.ci(new V.aB(a,-1,-1,-1),null,new V.ai(i,g,h,1),new V.W(m*k,l*k,d),new V.B(0,0,t),new V.a1(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.em(r)
return u},
n3:function(a,b,c,d,e,f){return F.pk(!0,c,d,new F.kL(a,f),e)},
pk:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.u,args:[P.u,P.u]})
if(e<3)return
if(c<1)return
u=F.ld(c,e,new F.kN(d),null)
if(u==null)return
u.an()
u.bH()
if(b)u.b7(F.n5(3,!1,!1,1,new F.kO(d),e))
u.b7(F.n5(1,!0,!1,-1,new F.kP(d),e))
return u},
pB:function(a,b){var u=F.ld(a,b,new F.kX(),null)
u.d.c3()
u.an()
u.bH()
return u},
av:function(a,b){var u,t,s,r,q,p,o,n,m,l,k
b=b.t(0,Math.sqrt(b.D(b)))
u=b.a
t=b.b
s=b.c
r=F.ci(null,null,null,new V.W(u,t,s),b,null,null,null,0)
q=a.kE(r,new F.dc())
if(q!=null)return q
p=u*0.5+0.5
o=t*0.5+0.5
n=s*0.5+0.5
if(p<0)p=0
else if(p>1)p=1
if(o<0)o=0
else if(o>1)o=1
if(n<0)n=0
else if(n>1)n=1
r.sag(0,new V.ai(p,o,n,1))
m=Math.sqrt(u*u+t*t)
l=Math.atan2(t,u)/1.5707963267948966
if(l<0)l=-l
k=Math.atan2(m,s)/3.141592653589793
r.sdq(new V.a1(l,k<0?-k:k))
a.a.h(0,r)
return r},
a5:function(a,b,c,d,e){var u,t,s,r
if(e<=0)a.d.bF(0,b,d,c)
else{u=F.av(a,b.r.p(0,c.r).w(0,0.5))
t=F.av(a,c.r.p(0,d.r).w(0,0.5))
s=F.av(a,d.r.p(0,b.r).w(0,0.5))
r=e-1
F.a5(a,b,u,s,r)
F.a5(a,u,c,t,r)
F.a5(a,t,s,u,r)
F.a5(a,s,t,d,r)}},
nf:function(a,b,c,d){var u,t
u={}
u.a=b
u.a=new F.lb()
t=F.lN(a,null,new F.lc(u,c),d)
t.bH()
return t},
pM:function(a,b,c,d){return F.n4(c,a,d,b,new F.le())},
pA:function(a,b,c,d,e,f){return F.n4(d,a,e,b,new F.kW(f,c))},
n4:function(a,b,c,d,e){var u=F.ld(a,b,new F.kM(H.n(e,{func:1,ret:V.W,args:[P.u]}),d,b,c),null)
if(u==null)return
u.an()
u.bH()
return u},
ld:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,{func:1,ret:-1,args:[F.ab,P.u,P.u]})
if(a<1)return
if(b<1)return
u=F.ek()
t=H.d([],[F.ab])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.ci(null,null,new V.ai(p,0,0,1),null,null,new V.a1(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cV(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.ci(null,null,new V.ai(j,i,h,1),null,null,new V.a1(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cV(d))}}u.d.k0(a+1,b+1,t)
return u},
c6:function(a,b,c){var u,t
u=new F.ac()
t=a.a
if(t==null)H.r(P.t("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.r(P.t("May not create a face with vertices attached to different shapes."))
u.cI(a)
u.cJ(b)
u.jf(c)
C.a.h(u.a.a.d.b,u)
u.a.a.Z()
return u},
o3:function(a,b){var u,t
u=new F.bv()
t=a.a
if(t==null)H.r(P.t("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.r(P.t("May not create a line with vertices attached to different shapes."))
u.cI(a)
u.cJ(b)
C.a.h(u.a.a.c.b,u)
u.a.a.Z()
return u},
ek:function(){var u,t
u=new F.ej()
t=new F.jv(u)
t.b=!1
t.sjC(H.d([],[F.ab]))
u.a=t
t=new F.iB(u)
t.scA(H.d([],[F.bR]))
u.b=t
t=new F.iA(u)
t.shL(H.d([],[F.bv]))
u.c=t
t=new F.iz(u)
t.shz(H.d([],[F.ac]))
u.d=t
u.e=null
return u},
ci:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ab()
t=new F.jD(u)
t.scA(H.d([],[F.bR]))
u.b=t
t=new F.jA(u)
s=[F.bv]
t.shM(H.d([],s))
t.shN(H.d([],s))
u.c=t
t=new F.jw(u)
s=[F.ac]
t.shA(H.d([],s))
t.shB(H.d([],s))
t.shC(H.d([],s))
u.d=t
h=$.nu()
u.e=0
t=$.b4()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bB().a)!==0?e:null
u.x=(s&$.bA().a)!==0?b:null
u.y=(s&$.bC().a)!==0?f:null
u.z=(s&$.bD().a)!==0?g:null
u.Q=(s&$.nv().a)!==0?c:null
u.ch=(s&$.cv().a)!==0?i:0
u.cx=(s&$.bz().a)!==0?a:null
return u},
kB:function kB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kL:function kL(a,b){this.a=a
this.b=b},
kN:function kN(a){this.a=a},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kX:function kX(){},
lb:function lb(){},
lc:function lc(a,b){this.a=a
this.b=b},
le:function le(){},
kW:function kW(a,b){this.a=a
this.b=b},
kM:function kM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ac:function ac(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hk:function hk(){},
iG:function iG(){},
bv:function bv(){this.b=this.a=null},
hF:function hF(){},
j8:function j8(){},
bR:function bR(){this.a=null},
ej:function ej(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iz:function iz(a){this.a=a
this.b=null},
iA:function iA(a){this.a=a
this.b=null},
iB:function iB(a){this.a=a
this.b=null},
ab:function ab(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jF:function jF(a){this.a=a},
jE:function jE(a){this.a=a},
jv:function jv(a){this.a=a
this.c=this.b=null},
jw:function jw(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jx:function jx(a,b){this.a=a
this.b=b},
jy:function jy(a,b){this.a=a
this.b=b},
jA:function jA(a){this.a=a
this.c=this.b=null},
jB:function jB(){},
dc:function dc(){},
jC:function jC(){},
jz:function jz(){},
ia:function ia(){},
jD:function jD(a){this.a=a
this.b=null}},T={d0:function d0(){},ch:function ch(){var _=this
_.e=_.d=_.c=_.b=_.a=null},iW:function iW(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},iX:function iX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nb:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=V.os("Test 017",!0)
t=W.ll(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.H(u.a,t)
s=[P.f]
u.eo(H.d(["A test of the Material Lighting shader with solid color directional light, cube mapped textures, and a reflection map. The specular map is also used to define where reflections are painted."],s))
u.jZ(H.d(["shapes"],s))
u.eo(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=C.z.dz(s,"testCanvas")
if(r==null)H.r(P.t("Failed to find an element with the identifier, testCanvas."))
q=E.ow(r,!0,!0,!0,!1)
p=E.mb(null,!0,null,"",null,null)
p.sac(0,F.nf(8,null,1,8))
o=X.lp(!0,!0,!1,null,2000,null,0)
if(o.b){o.b=!1
n=new D.M("clearColor",!0,!1,o,[P.T])
n.b=!0
o.az(n)}m=q.f.kW("../resources/maskonaive",".jpg")
l=q.f.fc("../resources/earthSpecular")
k=q.f.fc("../resources/earthColor")
j=new O.e4()
j.shm(O.lm(V.az))
j.e.bc(j.gi_(),j.gi1())
n=new O.bc(j,"emission")
n.c=C.d
n.f=new V.a7(0,0,0)
j.f=n
n=new O.bc(j,"ambient")
n.c=C.d
n.f=new V.a7(0,0,0)
j.r=n
n=new O.bc(j,"diffuse")
n.c=C.d
n.f=new V.a7(0,0,0)
j.x=n
n=new O.bc(j,"invDiffuse")
n.c=C.d
n.f=new V.a7(0,0,0)
j.y=n
n=new O.hW(j,"specular")
n.c=C.d
n.f=new V.a7(0,0,0)
n.ch=100
j.z=n
n=new O.hT(j,"bump")
n.c=C.d
j.Q=n
j.ch=null
n=new O.bc(j,"reflect")
n.c=C.d
n.f=new V.a7(0,0,0)
j.cx=n
n=new O.hV(j,"refract")
n.c=C.d
n.f=new V.a7(0,0,0)
n.ch=1
j.cy=n
n=new O.hS(j,"alpha")
n.c=C.d
n.f=1
j.db=n
n=new D.e_()
n.bA(D.aa)
n.shv(H.d([],[D.bJ]))
n.siS(H.d([],[D.ed]))
n.sjl(H.d([],[D.en]))
n.sjy(H.d([],[D.et]))
n.sjz(H.d([],[D.eu]))
n.sjA(H.d([],[D.ev]))
n.Q=null
n.ch=null
n.dC(n.ghY(),n.giC(),n.giG())
j.dx=n
i=n.Q
if(i==null){i=D.Q()
n.Q=i
n=i}else n=i
n.h(0,j.gj4())
n=j.dx
i=n.ch
if(i==null){i=D.Q()
n.ch=i
n=i}else n=i
i=j.gaY()
n.h(0,i)
j.dy=null
n=j.dx
h=V.mG()
g=U.m7(V.mf(V.lw(),h,new V.B(-1,-1,-1)))
f=new V.a7(1,1,1)
e=new D.bJ()
e.c=new V.a7(1,1,1)
e.a=V.mH()
d=e.b
e.b=g
g.gv().h(0,e.gh6())
g=new D.M("mover",d,e.b,e,[U.al])
g.b=!0
e.aI(g)
if(!e.c.B(0,f)){d=e.c
e.c=f
g=new D.M("color",d,f,e,[V.a7])
g.b=!0
e.aI(g)}n.h(0,e)
n=j.r
n.sag(0,new V.a7(0.5,0.5,0.5))
n=j.x
n.sag(0,new V.a7(0.5,0.5,0.5))
j.r.sav(k)
j.x.sav(k)
j.z.sav(l)
n=j.ch
if(n!==m){if(n!=null)n.gv().G(0,i)
d=j.ch
j.ch=m
m.gv().h(0,i)
n=new D.M("environment",d,j.ch,j,[T.ch])
n.b=!0
j.X(n)}j.cx.sav(l)
n=j.cx
n.sag(0,new V.a7(0.5,0.5,0.5))
n=j.z
if(n.c===C.d){n.c=C.j
n.ce()
n.cF(100)
i=n.a
i.a=null
i.X(null)}n.cF(10)
c=new U.cH()
c.bA(U.al)
c.bc(c.ghW(),c.giE())
c.e=null
c.f=V.ca()
c.r=0
n=q.r
i=new U.eF()
g=U.ln()
g.sdv(0,!0)
g.sda(6.283185307179586)
g.sdd(0)
g.sa3(0,0)
g.sdc(100)
g.sa_(0)
g.scW(0.5)
i.b=g
e=i.gaX()
g.gv().h(0,e)
g=U.ln()
g.sdv(0,!0)
g.sda(6.283185307179586)
g.sdd(0)
g.sa3(0,0)
g.sdc(100)
g.sa_(0)
g.scW(0.5)
i.c=g
g.gv().h(0,e)
i.d=null
i.e=!1
i.f=!1
i.r=!1
i.x=2.5
i.y=2.5
i.z=2
i.Q=4
i.cx=!1
i.ch=!1
i.cy=0
i.db=0
i.dx=null
i.dy=0
i.fr=null
i.fx=null
b=new X.aG(!1,!1,!1)
d=i.d
i.d=b
g=[X.aG]
e=new D.M("modifiers",d,b,i,g)
e.b=!0
i.U(e)
e=i.f
if(e!==!1){i.f=!1
e=new D.M("invertX",e,!1,i,[P.T])
e.b=!0
i.U(e)}e=i.r
if(e!==!1){i.r=!1
e=new D.M("invertY",e,!1,i,[P.T])
e.b=!0
i.U(e)}i.bj(n)
c.h(0,i)
n=q.r
i=new U.eE()
e=U.ln()
e.sdv(0,!0)
e.sda(6.283185307179586)
e.sdd(0)
e.sa3(0,0)
e.sdc(100)
e.sa_(0)
e.scW(0.2)
i.b=e
e.gv().h(0,i.gaX())
i.c=null
i.d=!1
i.e=2.5
i.f=2
i.r=4
i.y=!1
i.x=!1
i.z=0
i.Q=null
i.ch=0
i.cx=null
i.cy=null
b=new X.aG(!0,!1,!1)
d=i.c
i.c=b
e=new D.M("modifiers",d,b,i,g)
e.b=!0
i.U(e)
i.bj(n)
c.h(0,i)
n=q.r
i=new U.eG()
i.c=0.01
i.d=0
i.e=0
b=new X.aG(!1,!1,!1)
i.b=b
g=new D.M("modifiers",null,b,i,g)
g.b=!0
i.U(g)
i.bj(n)
c.h(0,i)
c.h(0,U.m7(V.bd(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
a=X.mj(2000,1.0471975511965976,c,0.1,null)
a0=new M.dJ()
a0.sbk(null)
a0.sbs(0,null)
a0.sbt(null)
n=E.mb(null,!0,null,"",null,null)
a1=F.ek()
i=a1.a
g=new V.B(-1,-1,1)
g=g.t(0,Math.sqrt(g.D(g)))
a2=i.bG(new V.aB(1,2,4,6),new V.ai(1,0,0,1),new V.W(-1,-1,0),new V.a1(0,1),g,null)
i=a1.a
g=new V.B(1,-1,1)
g=g.t(0,Math.sqrt(g.D(g)))
a3=i.bG(new V.aB(0,3,4,6),new V.ai(0,0,1,1),new V.W(1,-1,0),new V.a1(1,1),g,null)
i=a1.a
g=new V.B(1,1,1)
g=g.t(0,Math.sqrt(g.D(g)))
a4=i.bG(new V.aB(0,2,5,6),new V.ai(0,1,0,1),new V.W(1,1,0),new V.a1(1,0),g,null)
i=a1.a
g=V.bg()
e=new V.B(-1,1,1)
e=e.t(0,Math.sqrt(e.D(e)))
a5=i.bG(new V.aB(0,2,4,7),new V.ai(1,1,0,1),new V.W(-1,1,0),g,e,null)
a1.d.em(H.d([a2,a3,a4,a5],[F.ab]))
a1.an()
n.sac(0,a1)
a0.d=n
a0.e=null
n=new O.el()
n.b=1.0471975511965976
n.d=new V.a7(1,1,1)
d=n.c
n.c=m
m.gv().h(0,n.gaY())
i=new D.M("boxTexture",d,n.c,n,[T.ch])
i.b=!0
n.X(i)
a0.sbt(n)
a0.sbs(0,o)
a0.sbk(a)
a6=new M.dO()
a6.shp(0,O.lm(E.as))
a6.d.bc(a6.gi7(),a6.gi9())
a6.e=null
a6.f=null
a6.r=null
a6.x=null
a7=X.lp(!0,!0,!1,null,2000,null,0)
a6.sbk(null)
a6.sbs(0,a7)
a6.sbt(null)
a6.sbk(a)
a6.sbt(j)
a6.sbs(0,o)
a6.d.h(0,p)
n=M.aI
i=H.d([a0,a6],[n])
g=new M.dH()
g.bA(n)
g.e=!1
g.f=null
g.bc(g.giI(),g.giK())
g.af(0,i)
n=q.d
if(n!==g){if(n!=null)n.gv().G(0,q.gdJ())
q.d=g
g.gv().h(0,q.gdJ())
q.dK()}n=new V.il("shapes",!0)
s=C.z.dz(s,"shapes")
n.c=s
if(s==null)H.r("Failed to find shapes for RadioGroup")
n.aB(0,"Cube",new T.kZ(p))
n.aB(0,"Cuboid",new T.l_(p))
n.aB(0,"Cylinder",new T.l0(p))
n.aB(0,"Cone",new T.l1(p))
n.aB(0,"LatLonSphere",new T.l2(p))
n.aB(0,"IsoSphere",new T.l3(p))
n.bF(0,"Sphere",new T.l4(p),!0)
n.aB(0,"Toroid",new T.l5(p))
n.aB(0,"Knot",new T.l6(p))
s=q.z
if(s==null){s=D.Q()
q.z=s}n={func:1,ret:-1,args:[D.z]}
i=H.n(new T.l7(u,j),n)
if(s.b==null)s.sb1(H.d([],[n]))
s=s.b;(s&&C.a).h(s,i)
V.pJ(q)},
kZ:function kZ(a){this.a=a},
l_:function l_(a){this.a=a},
l0:function l0(a){this.a=a},
l1:function l1(a){this.a=a},
l2:function l2(a){this.a=a},
l3:function l3(a){this.a=a},
l4:function l4(a){this.a=a},
l5:function l5(a){this.a=a},
l6:function l6(a){this.a=a},
l7:function l7(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ls.prototype={}
J.a.prototype={
B:function(a,b){return a===b},
gL:function(a){return H.cU(a)},
i:function(a){return"Instance of '"+H.cc(a)+"'"}}
J.hA.prototype={
i:function(a){return String(a)},
gL:function(a){return a?519018:218159},
$iT:1}
J.dW.prototype={
B:function(a,b){return null==b},
i:function(a){return"null"},
gL:function(a){return 0},
$iL:1}
J.dX.prototype={
gL:function(a){return 0},
i:function(a){return String(a)}}
J.ig.prototype={}
J.bU.prototype={}
J.bu.prototype={
i:function(a){var u=a[$.ni()]
if(u==null)return this.fV(a)
return"JavaScript function for "+H.m(J.ax(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibL:1}
J.aT.prototype={
h:function(a,b){H.C(b,H.v(a,0))
if(!!a.fixed$length)H.r(P.I("add"))
a.push(b)},
lf:function(a,b){var u
if(!!a.fixed$length)H.r(P.I("removeAt"))
u=a.length
if(b>=u)throw H.c(P.eg(b,null,null))
return a.splice(b,1)[0]},
G:function(a,b){var u
if(!!a.fixed$length)H.r(P.I("remove"))
for(u=0;u<a.length;++u)if(J.N(a[u],b)){a.splice(u,1)
return!0}return!1},
af:function(a,b){var u,t
H.k(b,"$ii",[H.v(a,0)],"$ai")
if(!!a.fixed$length)H.r(P.I("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.D)(b),++t)a.push(b[t])},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bq(a))}},
m:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.n(u,t,H.m(a[t]))
return u.join(b)},
kT:function(a){return this.m(a,"")},
kK:function(a,b,c,d){var u,t,s
H.C(b,d)
H.n(c,{func:1,ret:d,args:[d,H.v(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bq(a))}return t},
kJ:function(a,b,c){var u,t,s
H.n(b,{func:1,ret:P.T,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.c(P.bq(a))}throw H.c(H.hy())},
kI:function(a,b){return this.kJ(a,b,null)},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
fS:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ah(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ah(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.v(a,0)])
return H.d(a.slice(b,c),[H.v(a,0)])},
gkH:function(a){if(a.length>0)return a[0]
throw H.c(H.hy())},
gaF:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hy())},
fQ:function(a,b,c,d,e){var u,t,s
u=H.v(a,0)
H.k(d,"$ii",[u],"$ai")
if(!!a.immutable$list)H.r(P.I("setRange"))
P.bx(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.k(d,"$ib",[u],"$ab")
u=J.cr(d)
if(e+t>u.gl(d))throw H.c(H.o_())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
by:function(a,b,c,d){return this.fQ(a,b,c,d,0)},
eq:function(a,b){var u,t
H.n(b,{func:1,ret:P.T,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.c(P.bq(a))}return!1},
a0:function(a,b){var u
for(u=0;u<a.length;++u)if(J.N(a[u],b))return!0
return!1},
i:function(a){return P.lq(a,"[","]")},
gY:function(a){return new J.ay(a,a.length,0,[H.v(a,0)])},
gL:function(a){return H.cU(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.r(P.I("set length"))
if(b<0)throw H.c(P.ah(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cp(a,b))
return a[b]},
n:function(a,b,c){H.C(c,H.v(a,0))
if(!!a.immutable$list)H.r(P.I("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cp(a,b))
a[b]=c},
p:function(a,b){var u,t
u=[H.v(a,0)]
H.k(b,"$ib",u,"$ab")
t=C.f.p(a.length,b.gl(b))
u=H.d([],u)
this.sl(u,t)
this.by(u,0,a.length,a)
this.by(u,a.length,t,b)
return u},
$ii:1,
$ib:1}
J.lr.prototype={}
J.ay.prototype={
gM:function(a){return this.d},
F:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.D(u))
s=this.c
if(s>=t){this.sdZ(null)
return!1}this.sdZ(u[s]);++this.c
return!0},
sdZ:function(a){this.d=H.C(a,H.v(this,0))},
$ib9:1}
J.bP.prototype={
ls:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.I(""+a+".toInt()"))},
d4:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.I(""+a+".floor()"))},
au:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.I(""+a+".round()"))},
fs:function(a,b){var u,t
if(b>20)throw H.c(P.ah(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bv:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ah(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.a6(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.r(P.I("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.h(t,1)
u=t[1]
if(3>=s)return H.h(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.w("0",r)},
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
p:function(a,b){if(typeof b!=="number")throw H.c(H.aw(b))
return a+b},
u:function(a,b){if(typeof b!=="number")throw H.c(H.aw(b))
return a-b},
w:function(a,b){if(typeof b!=="number")throw H.c(H.aw(b))
return a*b},
bx:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fY:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.eh(a,b)},
aa:function(a,b){return(a|0)===a?a/b|0:this.eh(a,b)},
eh:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.I("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
b3:function(a,b){var u
if(a>0)u=this.eg(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
jk:function(a,b){if(b<0)throw H.c(H.aw(b))
return this.eg(a,b)},
eg:function(a,b){return b>31?0:a>>>b},
$iu:1,
$ia8:1}
J.dV.prototype={$io:1}
J.dU.prototype={}
J.bt.prototype={
a6:function(a,b){if(b<0)throw H.c(H.cp(a,b))
if(b>=a.length)H.r(H.cp(a,b))
return a.charCodeAt(b)},
K:function(a,b){if(b>=a.length)throw H.c(H.cp(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.c(P.lj(b,null,null))
return a+b},
b9:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.aw(b))
c=P.bx(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ak:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.aw(c))
if(typeof c!=="number")return c.a1()
if(c<0||c>a.length)throw H.c(P.ah(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a9:function(a,b){return this.ak(a,b,0)},
A:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.aw(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.a1()
if(b<0)throw H.c(P.eg(b,null,null))
if(b>c)throw H.c(P.eg(b,null,null))
if(c>a.length)throw H.c(P.eg(c,null,null))
return a.substring(b,c)},
ax:function(a,b){return this.A(a,b,null)},
lu:function(a){return a.toLowerCase()},
w:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.S)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
l4:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.w(c,u)+a},
aq:function(a,b){return this.l4(a,b," ")},
f9:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ah(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
f8:function(a,b){return this.f9(a,b,0)},
i:function(a){return a},
gL:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$imi:1,
$if:1}
H.w.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.c.a6(this.a,b)},
$ada:function(){return[P.o]},
$ay:function(){return[P.o]},
$ai:function(){return[P.o]},
$ab:function(){return[P.o]}}
H.hd.prototype={}
H.c9.prototype={
gY:function(a){return new H.cK(this,this.gl(this),0,[H.ap(this,"c9",0)])},
c8:function(a,b){return this.fU(0,H.n(b,{func:1,ret:P.T,args:[H.ap(this,"c9",0)]}))}}
H.cK.prototype={
gM:function(a){return this.d},
F:function(){var u,t,s,r
u=this.a
t=J.cr(u)
s=t.gl(u)
if(this.b!==s)throw H.c(P.bq(u))
r=this.c
if(r>=s){this.sbf(null)
return!1}this.sbf(t.N(u,r));++this.c
return!0},
sbf:function(a){this.d=H.C(a,H.v(this,0))},
$ib9:1}
H.hP.prototype={
gY:function(a){return new H.hQ(J.bE(this.a),this.b,this.$ti)},
gl:function(a){return J.aJ(this.a)},
N:function(a,b){return this.b.$1(J.fK(this.a,b))},
$ai:function(a,b){return[b]}}
H.hQ.prototype={
F:function(){var u=this.b
if(u.F()){this.sbf(this.c.$1(u.gM(u)))
return!0}this.sbf(null)
return!1},
gM:function(a){return this.a},
sbf:function(a){this.a=H.C(a,H.v(this,1))},
$ab9:function(a,b){return[b]}}
H.hR.prototype={
gl:function(a){return J.aJ(this.a)},
N:function(a,b){return this.b.$1(J.fK(this.a,b))},
$ac9:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.dd.prototype={
gY:function(a){return new H.jI(J.bE(this.a),this.b,this.$ti)}}
H.jI.prototype={
F:function(){var u,t
for(u=this.a,t=this.b;u.F();)if(t.$1(u.gM(u)))return!0
return!1},
gM:function(a){var u=this.a
return u.gM(u)}}
H.c7.prototype={}
H.da.prototype={
n:function(a,b,c){H.C(c,H.ap(this,"da",0))
throw H.c(P.I("Cannot modify an unmodifiable list"))}}
H.eB.prototype={}
H.h_.prototype={
i:function(a){return P.lv(this)},
n:function(a,b,c){H.C(b,H.v(this,0))
H.C(c,H.v(this,1))
return H.nS()},
$iF:1}
H.h0.prototype={
gl:function(a){return this.a},
bI:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bI(0,b))return
return this.e_(b)},
e_:function(a){return this.b[H.J(a)]},
O:function(a,b){var u,t,s,r,q
u=H.v(this,1)
H.n(b,{func:1,ret:-1,args:[H.v(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.C(this.e_(q),u))}}}
H.ip.prototype={}
H.j5.prototype={
ap:function(a){var u,t,s
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
H.ib.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hC.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.m(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.m(this.a)+")"}}
H.jj.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.lf.prototype={
$1:function(a){if(!!J.Z(a).$ibK)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:18}
H.fg.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iaC:1}
H.cA.prototype={
i:function(a){return"Closure '"+H.cc(this).trim()+"'"},
$ibL:1,
glB:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iT.prototype={}
H.iK.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cu(u)+"'"}}
H.cx.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cx))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gL:function(a){var u,t
u=this.c
if(u==null)t=H.cU(this.a)
else t=typeof u!=="object"?J.dA(u):H.cU(u)
return(t^H.cU(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.cc(u)+"'")}}
H.j7.prototype={
i:function(a){return this.a}}
H.fW.prototype={
i:function(a){return this.a}}
H.iw.prototype={
i:function(a){return"RuntimeError: "+H.m(this.a)}}
H.aU.prototype={
gl:function(a){return this.a},
gkS:function(a){return this.a===0},
gab:function(a){return new H.hH(this,[H.v(this,0)])},
bI:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.dW(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.dW(t,b)}else return this.kP(b)},
kP:function(a){var u=this.d
if(u==null)return!1
return this.d7(this.cm(u,this.d6(a)),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bB(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bB(r,b)
s=t==null?null:t.b
return s}else return this.kQ(b)},
kQ:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.cm(u,this.d6(a))
s=this.d7(t,a)
if(s<0)return
return t[s].b},
n:function(a,b,c){var u,t
H.C(b,H.v(this,0))
H.C(c,H.v(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.cw()
this.b=u}this.dN(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.cw()
this.c=t}this.dN(t,b,c)}else this.kR(b,c)},
kR:function(a,b){var u,t,s,r
H.C(a,H.v(this,0))
H.C(b,H.v(this,1))
u=this.d
if(u==null){u=this.cw()
this.d=u}t=this.d6(a)
s=this.cm(u,t)
if(s==null)this.cG(u,t,[this.cz(a,b)])
else{r=this.d7(s,a)
if(r>=0)s[r].b=b
else s.push(this.cz(a,b))}},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.bq(this))
u=u.c}},
dN:function(a,b,c){var u
H.C(b,H.v(this,0))
H.C(c,H.v(this,1))
u=this.bB(a,b)
if(u==null)this.cG(a,b,this.cz(b,c))
else u.b=c},
hT:function(){this.r=this.r+1&67108863},
cz:function(a,b){var u,t
u=new H.hG(H.C(a,H.v(this,0)),H.C(b,H.v(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.hT()
return u},
d6:function(a){return J.dA(a)&0x3ffffff},
d7:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.N(a[t].a,b))return t
return-1},
i:function(a){return P.lv(this)},
bB:function(a,b){return a[b]},
cm:function(a,b){return a[b]},
cG:function(a,b,c){a[b]=c},
hu:function(a,b){delete a[b]},
dW:function(a,b){return this.bB(a,b)!=null},
cw:function(){var u=Object.create(null)
this.cG(u,"<non-identifier-key>",u)
this.hu(u,"<non-identifier-key>")
return u}}
H.hG.prototype={}
H.hH.prototype={
gl:function(a){return this.a.a},
gY:function(a){var u,t
u=this.a
t=new H.hI(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hI.prototype={
gM:function(a){return this.d},
F:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bq(u))
else{u=this.c
if(u==null){this.sdM(null)
return!1}else{this.sdM(u.a)
this.c=this.c.c
return!0}}},
sdM:function(a){this.d=H.C(a,H.v(this,0))},
$ib9:1}
H.kS.prototype={
$1:function(a){return this.a(a)},
$S:18}
H.kT.prototype={
$2:function(a,b){return this.a(a,b)},
$S:54}
H.kU.prototype={
$1:function(a){return this.a(H.J(a))},
$S:51}
H.hB.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$imi:1,
$ioo:1}
H.cP.prototype={$icP:1}
H.bQ.prototype={$ibQ:1,$ioy:1}
H.e7.prototype={
gl:function(a){return a.length},
$iK:1,
$aK:function(){}}
H.cQ.prototype={
j:function(a,b){H.bo(b,a,a.length)
return a[b]},
n:function(a,b,c){H.pm(c)
H.bo(b,a,a.length)
a[b]=c},
$ac7:function(){return[P.u]},
$ay:function(){return[P.u]},
$ii:1,
$ai:function(){return[P.u]},
$ib:1,
$ab:function(){return[P.u]}}
H.e8.prototype={
n:function(a,b,c){H.ag(c)
H.bo(b,a,a.length)
a[b]=c},
$ac7:function(){return[P.o]},
$ay:function(){return[P.o]},
$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]}}
H.i3.prototype={
j:function(a,b){H.bo(b,a,a.length)
return a[b]}}
H.i4.prototype={
j:function(a,b){H.bo(b,a,a.length)
return a[b]}}
H.i5.prototype={
j:function(a,b){H.bo(b,a,a.length)
return a[b]}}
H.i6.prototype={
j:function(a,b){H.bo(b,a,a.length)
return a[b]}}
H.i7.prototype={
j:function(a,b){H.bo(b,a,a.length)
return a[b]}}
H.e9.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bo(b,a,a.length)
return a[b]},
$iq7:1}
H.cR.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bo(b,a,a.length)
return a[b]},
$icR:1,
$iU:1}
H.dh.prototype={}
H.di.prototype={}
H.dj.prototype={}
H.dk.prototype={}
P.jK.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:24}
P.jJ.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:50}
P.jL.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jM.prototype={
$0:function(){this.a.$0()},
$S:0}
P.fm.prototype={
hf:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.co(new P.kq(this,b),0),a)
else throw H.c(P.I("`setTimeout()` not found."))},
hg:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.co(new P.kp(this,a,Date.now(),b),0),a)
else throw H.c(P.I("Periodic timer."))},
$ibi:1}
P.kq.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.kp.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.fY(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.bn.prototype={
kX:function(a){if(this.c!==6)return!0
return this.b.b.dn(H.n(this.d,{func:1,ret:P.T,args:[P.S]}),a.a,P.T,P.S)},
kN:function(a){var u,t,s,r
u=this.e
t=P.S
s={futureOr:1,type:H.v(this,1)}
r=this.b.b
if(H.fF(u,{func:1,args:[P.S,P.aC]}))return H.lO(r.ll(u,a.a,a.b,null,t,P.aC),s)
else return H.lO(r.dn(H.n(u,{func:1,args:[P.S]}),a.a,null,t),s)}}
P.aP.prototype={
fq:function(a,b,c){var u,t,s,r
u=H.v(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.a4
if(t!==C.l){t.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.p8(b,t)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aP(0,$.a4,[c])
r=b==null?1:3
this.dO(new P.bn(s,r,a,b,[u,c]))
return s},
lr:function(a,b){return this.fq(a,null,b)},
dO:function(a){var u,t
u=this.a
if(u<=1){a.a=H.e(this.c,"$ibn")
this.c=a}else{if(u===2){t=H.e(this.c,"$iaP")
u=t.a
if(u<4){t.dO(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.kJ(null,null,u,H.n(new P.jV(this,a),{func:1,ret:-1}))}},
ec:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.e(this.c,"$ibn")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.e(this.c,"$iaP")
t=p.a
if(t<4){p.ec(a)
return}this.a=t
this.c=p.c}u.a=this.bD(a)
t=this.b
t.toString
P.kJ(null,null,t,H.n(new P.jZ(u,this),{func:1,ret:-1}))}},
cC:function(){var u=H.e(this.c,"$ibn")
this.c=null
return this.bD(u)},
bD:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dS:function(a){var u,t,s
u=H.v(this,0)
H.lO(a,{futureOr:1,type:u})
t=this.$ti
if(H.dv(a,"$icG",t,"$acG"))if(H.dv(a,"$iaP",t,null))P.mJ(a,this)
else P.oK(a,this)
else{s=this.cC()
H.C(a,u)
this.a=4
this.c=a
P.dg(this,s)}},
dT:function(a,b){var u
H.e(b,"$iaC")
u=this.cC()
this.a=8
this.c=new P.aq(a,b)
P.dg(this,u)},
$icG:1}
P.jV.prototype={
$0:function(){P.dg(this.a,this.b)},
$S:0}
P.jZ.prototype={
$0:function(){P.dg(this.b,this.a.a)},
$S:0}
P.jW.prototype={
$1:function(a){var u=this.a
u.a=0
u.dS(a)},
$S:24}
P.jX.prototype={
$2:function(a,b){H.e(b,"$iaC")
this.a.dT(a,b)},
$1:function(a){return this.$2(a,null)},
$S:49}
P.jY.prototype={
$0:function(){this.a.dT(this.b,this.c)},
$S:0}
P.k1.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.fp(H.n(r.d,{func:1}),null)}catch(q){t=H.am(q)
s=H.cs(q)
if(this.d){r=H.e(this.a.a.c,"$iaq").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.e(this.a.a.c,"$iaq")
else p.b=new P.aq(t,s)
p.a=!0
return}if(!!J.Z(u).$icG){if(u instanceof P.aP&&u.a>=4){if(u.a===8){r=this.b
r.b=H.e(u.c,"$iaq")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.lr(new P.k2(o),null)
r.a=!1}},
$S:3}
P.k2.prototype={
$1:function(a){return this.a},
$S:48}
P.k0.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.v(s,0)
q=H.C(this.c,r)
p=H.v(s,1)
this.a.b=s.b.b.dn(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.am(o)
t=H.cs(o)
s=this.a
s.b=new P.aq(u,t)
s.a=!0}},
$S:3}
P.k_.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.e(this.a.a.c,"$iaq")
r=this.c
if(r.kX(u)&&r.e!=null){q=this.b
q.b=r.kN(u)
q.a=!1}}catch(p){t=H.am(p)
s=H.cs(p)
r=H.e(this.a.a.c,"$iaq")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.aq(t,s)
n.a=!0}},
$S:3}
P.eJ.prototype={}
P.iN.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.aP(0,$.a4,[P.o])
u.a=0
s=H.v(this,0)
r=H.n(new P.iP(u,this),{func:1,ret:-1,args:[s]})
H.n(new P.iQ(u,t),{func:1,ret:-1})
W.ae(this.a,this.b,r,!1,s)
return t}}
P.iP.prototype={
$1:function(a){H.C(a,H.v(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.L,args:[H.v(this.b,0)]}}}
P.iQ.prototype={
$0:function(){this.b.dS(this.a.a)},
$S:0}
P.cY.prototype={}
P.iO.prototype={}
P.bi.prototype={}
P.aq.prototype={
i:function(a){return H.m(this.a)},
$ibK:1}
P.kA.prototype={$iqm:1}
P.kI.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.eb()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:0}
P.k8.prototype={
lm:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
try{if(C.l===$.a4){a.$0()
return}P.mV(null,null,this,a,-1)}catch(s){u=H.am(s)
t=H.cs(s)
P.kH(null,null,this,u,H.e(t,"$iaC"))}},
ln:function(a,b,c){var u,t,s
H.n(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.l===$.a4){a.$1(b)
return}P.mW(null,null,this,a,b,-1,c)}catch(s){u=H.am(s)
t=H.cs(s)
P.kH(null,null,this,u,H.e(t,"$iaC"))}},
kc:function(a,b){return new P.ka(this,H.n(a,{func:1,ret:b}),b)},
cO:function(a){return new P.k9(this,H.n(a,{func:1,ret:-1}))},
eu:function(a,b){return new P.kb(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
fp:function(a,b){H.n(a,{func:1,ret:b})
if($.a4===C.l)return a.$0()
return P.mV(null,null,this,a,b)},
dn:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.a4===C.l)return a.$1(b)
return P.mW(null,null,this,a,b,c,d)},
ll:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.a4===C.l)return a.$2(b,c)
return P.p9(null,null,this,a,b,c,d,e,f)}}
P.ka.prototype={
$0:function(){return this.a.fp(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.k9.prototype={
$0:function(){return this.a.lm(this.b)},
$S:3}
P.kb.prototype={
$1:function(a){var u=this.c
return this.a.ln(this.b,H.C(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.k6.prototype={
gY:function(a){var u=new P.eY(this,this.r,this.$ti)
u.c=this.e
return u},
gl:function(a){return this.a},
a0:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.e(u[b],"$icj")!=null}else{t=this.hq(b)
return t}},
hq:function(a){var u=this.d
if(u==null)return!1
return this.ck(this.e0(u,a),a)>=0},
h:function(a,b){var u,t
H.C(b,H.v(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.lD()
this.b=u}return this.dP(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.lD()
this.c=t}return this.dP(t,b)}else return this.hh(0,b)},
hh:function(a,b){var u,t,s
H.C(b,H.v(this,0))
u=this.d
if(u==null){u=P.lD()
this.d=u}t=this.dU(b)
s=u[t]
if(s==null)u[t]=[this.cg(b)]
else{if(this.ck(s,b)>=0)return!1
s.push(this.cg(b))}return!0},
G:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iY(this.c,b)
else return this.iV(0,b)},
iV:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.e0(u,b)
s=this.ck(t,b)
if(s<0)return!1
this.ei(t.splice(s,1)[0])
return!0},
dP:function(a,b){H.C(b,H.v(this,0))
if(H.e(a[b],"$icj")!=null)return!1
a[b]=this.cg(b)
return!0},
iY:function(a,b){var u
if(a==null)return!1
u=H.e(a[b],"$icj")
if(u==null)return!1
this.ei(u)
delete a[b]
return!0},
dR:function(){this.r=1073741823&this.r+1},
cg:function(a){var u,t
u=new P.cj(H.C(a,H.v(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dR()
return u},
ei:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dR()},
dU:function(a){return J.dA(a)&1073741823},
e0:function(a,b){return a[this.dU(b)]},
ck:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.N(a[t].a,b))return t
return-1}}
P.cj.prototype={}
P.eY.prototype={
gM:function(a){return this.d},
F:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bq(u))
else{u=this.c
if(u==null){this.sdQ(null)
return!1}else{this.sdQ(H.C(u.a,H.v(this,0)))
this.c=this.c.b
return!0}}},
sdQ:function(a){this.d=H.C(a,H.v(this,0))},
$ib9:1}
P.hJ.prototype={
$2:function(a,b){this.a.n(0,H.C(a,this.b),H.C(b,this.c))},
$S:8}
P.hK.prototype={$ii:1,$ib:1}
P.y.prototype={
gY:function(a){return new H.cK(a,this.gl(a),0,[H.bX(this,a,"y",0)])},
N:function(a,b){return this.j(a,b)},
lt:function(a,b){var u,t
u=H.d([],[H.bX(this,a,"y",0)])
C.a.sl(u,this.gl(a))
for(t=0;t<this.gl(a);++t)C.a.n(u,t,this.j(a,t))
return u},
dr:function(a){return this.lt(a,!0)},
p:function(a,b){var u,t
u=[H.bX(this,a,"y",0)]
H.k(b,"$ib",u,"$ab")
t=H.d([],u)
C.a.sl(t,C.f.p(this.gl(a),b.gl(b)))
C.a.by(t,0,this.gl(a),a)
C.a.by(t,this.gl(a),t.length,b)
return t},
kD:function(a,b,c,d){var u
H.C(d,H.bX(this,a,"y",0))
P.bx(b,c,this.gl(a),null,null,null)
for(u=b;u<c;++u)this.n(a,u,d)},
i:function(a){return P.lq(a,"[","]")}}
P.hM.prototype={}
P.hN.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.m(a)
u.a=t+": "
u.a+=H.m(b)},
$S:8}
P.aj.prototype={
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.bX(this,a,"aj",0),H.bX(this,a,"aj",1)]})
for(u=J.bE(this.gab(a));u.F();){t=u.gM(u)
b.$2(t,this.j(a,t))}},
gl:function(a){return J.aJ(this.gab(a))},
i:function(a){return P.lv(a)},
$iF:1}
P.kr.prototype={
n:function(a,b,c){H.C(b,H.v(this,0))
H.C(c,H.v(this,1))
throw H.c(P.I("Cannot modify unmodifiable map"))}}
P.hO.prototype={
j:function(a,b){return J.lX(this.a,b)},
n:function(a,b,c){J.lg(this.a,H.C(b,H.v(this,0)),H.C(c,H.v(this,1)))},
O:function(a,b){J.lZ(this.a,H.n(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]}))},
gl:function(a){return J.aJ(this.a)},
i:function(a){return J.ax(this.a)},
$iF:1}
P.eC.prototype={}
P.kd.prototype={
af:function(a,b){var u
for(u=J.bE(H.k(b,"$ii",this.$ti,"$ai"));u.F();)this.h(0,u.gM(u))},
i:function(a){return P.lq(this,"{","}")},
N:function(a,b){var u,t,s
if(b<0)H.r(P.ah(b,0,null,"index",null))
for(u=P.oO(this,this.r,H.v(this,0)),t=0;u.F();){s=u.d
if(b===t)return s;++t}throw H.c(P.a0(b,this,"index",null,t))},
$ii:1,
$imq:1}
P.eZ.prototype={}
P.fs.prototype={}
P.fS.prototype={
kY:function(a,b,c,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a0=P.bx(c,a0,b.length,null,null,null)
u=$.nx()
for(t=c,s=t,r=null,q=-1,p=-1,o=0;t<a0;t=n){n=t+1
m=C.c.K(b,t)
if(m===37){l=n+2
if(l<=a0){k=H.kR(C.c.K(b,n))
j=H.kR(C.c.K(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.h(u,i)
h=u[i]
if(h>=0){i=C.c.a6("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.an("")
g=r.a+=C.c.A(b,s,t)
r.a=g+H.cd(m)
s=n
continue}}throw H.c(P.a9("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.c.A(b,s,a0)
f=g.length
if(q>=0)P.m2(b,p,a0,q,o,f)
else{e=C.f.bx(f-1,4)+1
if(e===1)throw H.c(P.a9("Invalid base64 encoding length ",b,a0))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.b9(b,c,a0,g.charCodeAt(0)==0?g:g)}d=a0-c
if(q>=0)P.m2(b,p,a0,q,o,d)
else{e=C.f.bx(d,4)
if(e===1)throw H.c(P.a9("Invalid base64 encoding length ",b,a0))
if(e>1)b=C.c.b9(b,a0,a0,e===2?"==":"=")}return b},
$ac3:function(){return[[P.b,P.o],P.f]}}
P.fT.prototype={
$abI:function(){return[[P.b,P.o],P.f]}}
P.c3.prototype={}
P.bI.prototype={}
P.hf.prototype={
$ac3:function(){return[P.f,[P.b,P.o]]}}
P.hv.prototype={
i:function(a){return this.a}}
P.hu.prototype={
hr:function(a,b,c){var u,t,s,r,q,p
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
default:p=null}if(p!=null){if(q==null)q=new P.an("")
if(r>b)q.a+=C.c.A(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nL(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abI:function(){return[P.f,P.f]}}
P.jr.prototype={
gkC:function(){return C.T}}
P.jt.prototype={
bl:function(a,b,c){var u,t,s
c=P.bx(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.ky(t)
if(s.hD(a,b,c)!==c)s.ek(J.nF(a,c-1),0)
return new Uint8Array(t.subarray(0,H.p3(0,s.b,t.length)))},
cU:function(a){return this.bl(a,0,null)},
$abI:function(){return[P.f,[P.b,P.o]]}}
P.ky.prototype={
ek:function(a,b){var u,t,s,r,q
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
hD:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.a6(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.K(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.ek(r,C.c.K(a,p)))s=p}else if(r<=2047){q=this.b
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
P.js.prototype={
bl:function(a,b,c){var u,t,s,r
H.k(a,"$ib",[P.o],"$ab")
u=P.oB(!1,a,b,c)
if(u!=null)return u
c=P.bx(b,c,J.aJ(a),null,null,null)
t=new P.an("")
s=new P.kw(!1,t)
s.bl(a,b,c)
if(s.e>0){H.r(P.a9("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.cd(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cU:function(a){return this.bl(a,0,null)},
$abI:function(){return[[P.b,P.o],P.f]}}
P.kw.prototype={
bl:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.k(a,"$ib",[P.o],"$ab")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.kx(this,b,c,a)
$label0$0:for(q=J.cr(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.j(a,o)
if(typeof n!=="number")return n.c9()
if((n&192)!==128){m=P.a9("Bad UTF-8 encoding 0x"+C.f.bv(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.h(C.H,m)
if(u<=C.H[m]){m=P.a9("Overlong encoding of 0x"+C.f.bv(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a9("Character outside valid Unicode range: 0x"+C.f.bv(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.cd(u)
this.c=!1}for(m=o<c;m;){l=P.pa(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.j(a,k)
if(typeof n!=="number")return n.a1()
if(n<0){i=P.a9("Negative UTF-8 code unit: -0x"+C.f.bv(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a9("Bad UTF-8 encoding 0x"+C.f.bv(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.kx.prototype={
$2:function(a,b){this.a.b.a+=P.ep(this.d,a,b)},
$S:47}
P.T.prototype={}
P.ar.prototype={
B:function(a,b){if(b==null)return!1
return b instanceof P.ar&&this.a===b.a&&!0},
gL:function(a){var u=this.a
return(u^C.f.b3(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.nT(H.oj(this))
t=P.dK(H.oh(this))
s=P.dK(H.od(this))
r=P.dK(H.oe(this))
q=P.dK(H.og(this))
p=P.dK(H.oi(this))
o=P.nU(H.of(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.u.prototype={}
P.b8.prototype={
p:function(a,b){return new P.b8(C.f.p(this.a,b.ghw()))},
u:function(a,b){return new P.b8(C.f.u(this.a,b.ghw()))},
B:function(a,b){if(b==null)return!1
return b instanceof P.b8&&this.a===b.a},
gL:function(a){return C.f.gL(this.a)},
i:function(a){var u,t,s,r,q
u=new P.hc()
t=this.a
if(t<0)return"-"+new P.b8(0-t).i(0)
s=u.$1(C.f.aa(t,6e7)%60)
r=u.$1(C.f.aa(t,1e6)%60)
q=new P.hb().$1(t%1e6)
return""+C.f.aa(t,36e8)+":"+H.m(s)+":"+H.m(r)+"."+H.m(q)}}
P.hb.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:23}
P.hc.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:23}
P.bK.prototype={}
P.eb.prototype={
i:function(a){return"Throw of null."}}
P.aR.prototype={
gcj:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gci:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gcj()+t+s
if(!this.a)return r
q=this.gci()
p=P.hh(this.b)
return r+q+": "+p}}
P.ce.prototype={
gcj:function(){return"RangeError"},
gci:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.m(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.m(u)
else if(s>u)t=": Not in range "+H.m(u)+".."+H.m(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.m(u)}return t}}
P.hx.prototype={
gcj:function(){return"RangeError"},
gci:function(){var u,t
u=H.ag(this.b)
if(typeof u!=="number")return u.a1()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.m(t)},
gl:function(a){return this.f}}
P.jk.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.jh.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cg.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fZ.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hh(u)+"."}}
P.ie.prototype={
i:function(a){return"Out of Memory"},
$ibK:1}
P.eo.prototype={
i:function(a){return"Stack Overflow"},
$ibK:1}
P.h5.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eR.prototype={
i:function(a){return"Exception: "+this.a}}
P.hq.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.A(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.K(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.c.a6(r,m)
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
g=""}f=C.c.A(r,i,j)
return t+h+f+g+"\n"+C.c.w(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.m(s)+")"):t}}
P.bL.prototype={}
P.o.prototype={}
P.i.prototype={
c8:function(a,b){var u=H.ap(this,"i",0)
return new H.dd(this,H.n(b,{func:1,ret:P.T,args:[u]}),[u])},
gl:function(a){var u,t
u=this.gY(this)
for(t=0;u.F();)++t
return t},
gaV:function(a){var u,t
u=this.gY(this)
if(!u.F())throw H.c(H.hy())
t=u.gM(u)
if(u.F())throw H.c(H.o0())
return t},
N:function(a,b){var u,t,s
if(b<0)H.r(P.ah(b,0,null,"index",null))
for(u=this.gY(this),t=0;u.F();){s=u.gM(u)
if(b===t)return s;++t}throw H.c(P.a0(b,this,"index",null,t))},
i:function(a){return P.nZ(this,"(",")")}}
P.b9.prototype={}
P.b.prototype={$ii:1}
P.F.prototype={}
P.L.prototype={
gL:function(a){return P.S.prototype.gL.call(this,this)},
i:function(a){return"null"}}
P.a8.prototype={}
P.S.prototype={constructor:P.S,$iS:1,
B:function(a,b){return this===b},
gL:function(a){return H.cU(this)},
i:function(a){return"Instance of '"+H.cc(this)+"'"},
toString:function(){return this.i(this)}}
P.aC.prototype={}
P.f.prototype={$imi:1}
P.an.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipW:1}
P.jp.prototype={
$2:function(a,b){var u,t,s,r
u=P.f
H.k(a,"$iF",[u,u],"$aF")
H.J(b)
t=J.dw(b).f8(b,"=")
if(t===-1){if(b!=="")J.lg(a,P.lF(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.A(b,0,t)
r=C.c.ax(b,t+1)
u=this.a
J.lg(a,P.lF(s,0,s.length,u,!0),P.lF(r,0,r.length,u,!0))}return a},
$S:45}
P.jm.prototype={
$2:function(a,b){throw H.c(P.a9("Illegal IPv4 address, "+a,this.a,b))},
$S:44}
P.jn.prototype={
$2:function(a,b){throw H.c(P.a9("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:43}
P.jo.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fI(C.c.A(this.b,a,b),null,16)
if(typeof u!=="number")return u.a1()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:42}
P.ck.prototype={
gfz:function(){return this.b},
gd5:function(a){var u=this.c
if(u==null)return""
if(C.c.a9(u,"["))return C.c.A(u,1,u.length-1)
return u},
gc0:function(a){var u=this.d
if(u==null)return P.mN(this.a)
return u},
gdi:function(a){var u=this.f
return u==null?"":u},
gf3:function(){var u=this.r
return u==null?"":u},
dm:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.k(h,"$iF",[P.f,null],"$aF")
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
if(s&&!C.c.a9(d,"/"))d="/"+d
g=P.lE(g,0,0,h)
return new P.ck(i,j,c,f,d,g,this.r)},
fn:function(a,b){return this.dm(a,null,null,null,null,null,null,b,null,null)},
gdj:function(){var u,t
if(this.Q==null){u=this.f
t=P.f
this.siU(new P.eC(P.mA(u==null?"":u,C.m),[t,t]))}return this.Q},
gf4:function(){return this.c!=null},
gf7:function(){return this.f!=null},
gf5:function(){return this.r!=null},
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
if(!!J.Z(b).$ilz)if(this.a==b.gcc())if(this.c!=null===b.gf4())if(this.b==b.gfz())if(this.gd5(this)==b.gd5(b))if(this.gc0(this)==b.gc0(b))if(this.e===b.gfl(b)){u=this.f
t=u==null
if(!t===b.gf7()){if(t)u=""
if(u===b.gdi(b)){u=this.r
t=u==null
if(!t===b.gf5()){if(t)u=""
u=u===b.gf3()}else u=!1}else u=!1}else u=!1}else u=!1
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
siU:function(a){var u=P.f
this.Q=H.k(a,"$iF",[u,u],"$aF")},
$ilz:1,
gcc:function(){return this.a},
gfl:function(a){return this.e}}
P.ks.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.p()
throw H.c(P.a9("Invalid port",this.a,u+1))},
$S:41}
P.kt.prototype={
$1:function(a){return P.ft(C.aa,a,C.m,!1)},
$S:17}
P.kv.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.m(P.ft(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.m(P.ft(C.w,b,C.m,!0))}},
$S:16}
P.ku.prototype={
$2:function(a,b){var u,t
H.J(a)
if(b==null||typeof b==="string")this.a.$2(a,H.J(b))
else for(u=J.bE(H.na(b,"$ii")),t=this.a;u.F();)t.$2(a,H.J(u.gM(u)))},
$S:40}
P.jl.prototype={
gfw:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.h(u,0)
t=this.a
u=u[0]+1
s=C.c.f9(t,"?",u)
r=t.length
if(s>=0){q=P.dr(t,s+1,r,C.u,!1)
r=s}else q=null
u=new P.jQ(this,"data",null,null,null,P.dr(t,u,r,C.L,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.h(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.kE.prototype={
$1:function(a){return new Uint8Array(96)},
$S:38}
P.kD.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.h(u,a)
u=u[a]
J.nG(u,0,96,b)
return u},
$S:36}
P.kF.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.K(b,t)^96
if(s>=a.length)return H.h(a,s)
a[s]=c}}}
P.kG.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.K(b,0),t=C.c.K(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.h(a,s)
a[s]=c}}}
P.kg.prototype={
gf4:function(){return this.c>0},
gf6:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.G(t)
t=u+1<t
u=t}else u=!1
return u},
gf7:function(){var u=this.f
if(typeof u!=="number")return u.a1()
return u<this.r},
gf5:function(){return this.r<this.a.length},
ge4:function(){return this.b===4&&C.c.a9(this.a,"http")},
ge5:function(){return this.b===5&&C.c.a9(this.a,"https")},
gcc:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.ge4()){this.x="http"
u="http"}else if(this.ge5()){this.x="https"
u="https"}else if(u===4&&C.c.a9(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.a9(this.a,"package")){this.x="package"
u="package"}else{u=C.c.A(this.a,0,u)
this.x=u}return u},
gfz:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.A(this.a,t,u-1):""},
gd5:function(a){var u=this.c
return u>0?C.c.A(this.a,u,this.d):""},
gc0:function(a){var u
if(this.gf6()){u=this.d
if(typeof u!=="number")return u.p()
return P.fI(C.c.A(this.a,u+1,this.e),null,null)}if(this.ge4())return 80
if(this.ge5())return 443
return 0},
gfl:function(a){return C.c.A(this.a,this.e,this.f)},
gdi:function(a){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.a1()
return u<t?C.c.A(this.a,u+1,t):""},
gf3:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.ax(t,u+1):""},
gdj:function(){var u=this.f
if(typeof u!=="number")return u.a1()
if(u>=this.r)return C.ab
u=P.f
return new P.eC(P.mA(this.gdi(this),C.m),[u,u])},
dm:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.k(h,"$iF",[P.f,null],"$aF")
i=this.gcc()
u=i==="file"
t=this.c
j=t>0?C.c.A(this.a,this.b+3,t):""
f=this.gf6()?this.gc0(this):null
t=this.c
if(t>0)c=C.c.A(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.c.A(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.a9(d,"/"))d="/"+d
g=P.lE(g,0,0,h)
s=this.r
if(s<t.length)b=C.c.ax(t,s+1)
return new P.ck(i,j,c,f,d,g,b)},
fn:function(a,b){return this.dm(a,null,null,null,null,null,null,b,null,null)},
gL:function(a){var u=this.y
if(u==null){u=C.c.gL(this.a)
this.y=u}return u},
B:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.Z(b).$ilz&&this.a===b.i(0)},
i:function(a){return this.a},
$ilz:1}
P.jQ.prototype={}
W.A.prototype={}
W.fL.prototype={
gl:function(a){return a.length}}
W.dB.prototype={
i:function(a){return String(a)},
$idB:1}
W.fM.prototype={
i:function(a){return String(a)}}
W.cw.prototype={$icw:1}
W.c_.prototype={$ic_:1}
W.bF.prototype={$ibF:1}
W.c1.prototype={
dw:function(a,b,c){if(c!=null)return this.hE(a,b,P.ph(c,null))
return this.hF(a,b)},
fF:function(a,b){return this.dw(a,b,null)},
hE:function(a,b,c){return a.getContext(b,c)},
hF:function(a,b){return a.getContext(b)},
$ic1:1,
$im5:1}
W.c2.prototype={
hG:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
kz:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ic2:1}
W.bG.prototype={
gl:function(a){return a.length}}
W.cB.prototype={$icB:1}
W.h1.prototype={
gl:function(a){return a.length}}
W.a_.prototype={$ia_:1}
W.cC.prototype={
gl:function(a){return a.length}}
W.h2.prototype={}
W.b6.prototype={}
W.b7.prototype={}
W.h3.prototype={
gl:function(a){return a.length}}
W.h4.prototype={
gl:function(a){return a.length}}
W.h7.prototype={
gl:function(a){return a.length}}
W.aK.prototype={$iaK:1}
W.cD.prototype={
k7:function(a,b){return a.adoptNode(b)},
dz:function(a,b){return a.getElementById(b)}}
W.h8.prototype={
i:function(a){return String(a)}}
W.dL.prototype={
kp:function(a,b){return a.createHTMLDocument(b)}}
W.dM.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.k(c,"$iad",[P.a8],"$aad")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[[P.ad,P.a8]]},
$ay:function(){return[[P.ad,P.a8]]},
$ii:1,
$ai:function(){return[[P.ad,P.a8]]},
$ib:1,
$ab:function(){return[[P.ad,P.a8]]},
$aE:function(){return[[P.ad,P.a8]]}}
W.dN.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gaU(a))+" x "+H.m(this.gaP(a))},
B:function(a,b){var u
if(b==null)return!1
if(!H.dv(b,"$iad",[P.a8],"$aad"))return!1
u=J.af(b)
return a.left===u.gbZ(b)&&a.top===u.gc6(b)&&this.gaU(a)===u.gaU(b)&&this.gaP(a)===u.gaP(b)},
gL:function(a){return W.mL(C.e.gL(a.left),C.e.gL(a.top),C.e.gL(this.gaU(a)),C.e.gL(this.gaP(a)))},
gew:function(a){return a.bottom},
gaP:function(a){return a.height},
gbZ:function(a){return a.left},
gc4:function(a){return a.right},
gc6:function(a){return a.top},
gaU:function(a){return a.width},
$iad:1,
$aad:function(){return[P.a8]}}
W.h9.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.J(c)
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[P.f]},
$ay:function(){return[P.f]},
$ii:1,
$ai:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aE:function(){return[P.f]}}
W.ha.prototype={
gl:function(a){return a.length}}
W.jO.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.e(u[b],"$iX")},
n:function(a,b,c){var u
H.e(c,"$iX")
u=this.b
if(b<0||b>=u.length)return H.h(u,b)
J.lh(this.a,c,u[b])},
h:function(a,b){J.lY(this.a,b)
return b},
gY:function(a){var u=this.dr(this)
return new J.ay(u,u.length,0,[H.v(u,0)])},
$ay:function(){return[W.X]},
$ai:function(){return[W.X]},
$ab:function(){return[W.X]}}
W.X.prototype={
gkb:function(a){return new W.jR(a)},
gcT:function(a){return new W.jO(a,a.children)},
gez:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.a1()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a1()
if(r<0)r=-r*0
return new P.ad(u,t,s,r,[P.a8])},
i:function(a){return a.localName},
ao:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.ma
if(u==null){u=H.d([],[W.aH])
t=new W.ea(u)
C.a.h(u,W.mK(null))
C.a.h(u,W.mM())
$.ma=t
d=t}else d=u
u=$.m9
if(u==null){u=new W.fu(d)
$.m9=u
c=u}else{u.a=d
c=u}}if($.br==null){u=document
t=u.implementation
t=(t&&C.U).kp(t,"")
$.br=t
$.lo=t.createRange()
t=$.br
t.toString
t=t.createElement("base")
H.e(t,"$icw")
t.href=u.baseURI
u=$.br.head;(u&&C.W).H(u,t)}u=$.br
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.e(t,"$ibF")}u=$.br
if(!!this.$ibF)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.br.body;(u&&C.p).H(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.a0(C.a8,a.tagName)){u=$.lo;(u&&C.N).fM(u,s)
u=$.lo
r=(u&&C.N).kn(u,b)}else{s.innerHTML=b
r=$.br.createDocumentFragment()
for(u=J.af(r);t=s.firstChild,t!=null;)u.H(r,t)}u=$.br.body
if(s==null?u!=null:s!==u)J.m0(s)
c.dB(r)
C.z.k7(document,r)
return r},
ko:function(a,b,c){return this.ao(a,b,c,null)},
fP:function(a,b,c,d){a.textContent=null
this.H(a,this.ao(a,b,c,d))},
fO:function(a,b){return this.fP(a,b,null,null)},
bb:function(a,b){return a.getAttribute(b)},
iW:function(a,b){return a.removeAttribute(b)},
fN:function(a,b,c){return a.setAttribute(b,c)},
$iX:1,
glo:function(a){return a.tagName}}
W.he.prototype={
$1:function(a){return!!J.Z(H.e(a,"$iH")).$iX},
$S:22}
W.p.prototype={$ip:1}
W.j.prototype={
k_:function(a,b,c,d){H.n(c,{func:1,args:[W.p]})
if(c!=null)this.hi(a,b,c,!1)},
hi:function(a,b,c,d){return a.addEventListener(b,H.co(H.n(c,{func:1,args:[W.p]}),1),!1)},
$ij:1}
W.aL.prototype={$iaL:1}
W.cF.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaL")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aL]},
$ay:function(){return[W.aL]},
$ii:1,
$ai:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$icF:1,
$aE:function(){return[W.aL]}}
W.hl.prototype={
gl:function(a){return a.length}}
W.hp.prototype={
gl:function(a){return a.length}}
W.aS.prototype={$iaS:1}
W.dR.prototype={}
W.dS.prototype={
j1:function(a,b,c,d){return a.replaceState(b,c,d)},
gl:function(a){return a.length}}
W.c8.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iH")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.H]},
$ay:function(){return[W.H]},
$ii:1,
$ai:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$ic8:1,
$aE:function(){return[W.H]}}
W.dT.prototype={}
W.bs.prototype={$ibs:1,
geA:function(a){return a.data}}
W.cI.prototype={$icI:1,$im5:1}
W.cJ.prototype={$icJ:1}
W.ba.prototype={$iba:1}
W.dZ.prototype={}
W.e1.prototype={
i:function(a){return String(a)},
$ie1:1}
W.cN.prototype={}
W.hX.prototype={
gl:function(a){return a.length}}
W.hY.prototype={
j:function(a,b){return P.by(a.get(H.J(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.by(t.value[1]))}},
gab:function(a){var u=H.d([],[P.f])
this.O(a,new W.hZ(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.I("Not supported"))},
$aaj:function(){return[P.f,null]},
$iF:1,
$aF:function(){return[P.f,null]}}
W.hZ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.i_.prototype={
j:function(a,b){return P.by(a.get(H.J(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.by(t.value[1]))}},
gab:function(a){var u=H.d([],[P.f])
this.O(a,new W.i0(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.I("Not supported"))},
$aaj:function(){return[P.f,null]},
$iF:1,
$aF:function(){return[P.f,null]}}
W.i0.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.aV.prototype={$iaV:1}
W.i1.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaV")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aV]},
$ay:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aE:function(){return[W.aV]}}
W.ak.prototype={$iak:1}
W.au.prototype={
gaV:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.c(P.mr("No elements"))
if(t>1)throw H.c(P.mr("More than one element"))
return u.firstChild},
af:function(a,b){var u,t,s,r,q
H.k(b,"$ii",[W.H],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.af(t),q=0;q<s;++q)r.H(t,u.firstChild)
return},
n:function(a,b,c){var u,t
H.e(c,"$iH")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.h(t,b)
J.lh(u,c,t[b])},
gY:function(a){var u=this.a.childNodes
return new W.dP(u,u.length,-1,[H.bX(C.ac,u,"E",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$ay:function(){return[W.H]},
$ai:function(){return[W.H]},
$ab:function(){return[W.H]}}
W.H.prototype={
le:function(a){var u=a.parentNode
if(u!=null)J.fJ(u,a)},
li:function(a,b){var u,t
try{u=a.parentNode
J.lh(u,b,a)}catch(t){H.am(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fT(a):u},
H:function(a,b){return a.appendChild(H.e(b,"$iH"))},
iX:function(a,b){return a.removeChild(b)},
j0:function(a,b,c){return a.replaceChild(b,c)},
$iH:1}
W.cS.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iH")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.H]},
$ay:function(){return[W.H]},
$ii:1,
$ai:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aE:function(){return[W.H]}}
W.aW.prototype={$iaW:1,
gl:function(a){return a.length}}
W.ii.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaW")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aW]},
$ay:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aE:function(){return[W.aW]}}
W.ef.prototype={
kn:function(a,b){return a.createContextualFragment(b)},
fM:function(a,b){return a.selectNodeContents(b)}}
W.iu.prototype={
j:function(a,b){return P.by(a.get(H.J(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.by(t.value[1]))}},
gab:function(a){var u=H.d([],[P.f])
this.O(a,new W.iv(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.I("Not supported"))},
$aaj:function(){return[P.f,null]},
$iF:1,
$aF:function(){return[P.f,null]}}
W.iv.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.ix.prototype={
gl:function(a){return a.length}}
W.aX.prototype={$iaX:1}
W.iH.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaX")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aX]},
$ay:function(){return[W.aX]},
$ii:1,
$ai:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aE:function(){return[W.aX]}}
W.aY.prototype={$iaY:1}
W.iI.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaY")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aY]},
$ay:function(){return[W.aY]},
$ii:1,
$ai:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aE:function(){return[W.aY]}}
W.aZ.prototype={$iaZ:1,
gl:function(a){return a.length}}
W.iL.prototype={
j:function(a,b){return this.e1(a,H.J(b))},
n:function(a,b,c){this.jb(a,b,c)},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=this.hK(a,u)
if(t==null)return
b.$2(t,this.e1(a,t))}},
gab:function(a){var u=H.d([],[P.f])
this.O(a,new W.iM(u))
return u},
gl:function(a){return a.length},
e1:function(a,b){return a.getItem(b)},
hK:function(a,b){return a.key(b)},
jb:function(a,b,c){return a.setItem(b,c)},
$aaj:function(){return[P.f,P.f]},
$iF:1,
$aF:function(){return[P.f,P.f]}}
W.iM.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:16}
W.aM.prototype={$iaM:1}
W.bh.prototype={$ibh:1}
W.eq.prototype={
ao:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.cd(a,b,c,d)
u=W.nV("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.au(t).af(0,new W.au(u))
return t},
hI:function(a,b){return a.insertRow(b)}}
W.er.prototype={
ao:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.cd(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ao(u.createElement("table"),b,c,d)
u.toString
u=new W.au(u)
s=u.gaV(u)
s.toString
u=new W.au(s)
r=u.gaV(u)
t.toString
r.toString
new W.au(t).af(0,new W.au(r))
return t},
e3:function(a,b){return a.insertCell(b)}}
W.iS.prototype={
ao:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.cd(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ao(u.createElement("table"),b,c,d)
u.toString
u=new W.au(u)
s=u.gaV(u)
t.toString
s.toString
new W.au(t).af(0,new W.au(s))
return t}}
W.d_.prototype={$id_:1}
W.b_.prototype={$ib_:1}
W.aN.prototype={$iaN:1}
W.iU.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaN")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aN]},
$ay:function(){return[W.aN]},
$ii:1,
$ai:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aE:function(){return[W.aN]}}
W.iV.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$ib_")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.b_]},
$ay:function(){return[W.b_]},
$ii:1,
$ai:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aE:function(){return[W.b_]}}
W.iZ.prototype={
gl:function(a){return a.length}}
W.b0.prototype={$ib0:1}
W.b1.prototype={$ib1:1}
W.j2.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$ib0")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.b0]},
$ay:function(){return[W.b0]},
$ii:1,
$ai:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aE:function(){return[W.b0]}}
W.j3.prototype={
gl:function(a){return a.length}}
W.bT.prototype={}
W.jq.prototype={
i:function(a){return String(a)}}
W.jG.prototype={$im5:1}
W.jH.prototype={
gl:function(a){return a.length}}
W.bm.prototype={
gkv:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.I("deltaY is not supported"))},
gku:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.I("deltaX is not supported"))},
$ibm:1}
W.de.prototype={
j3:function(a,b){return a.requestAnimationFrame(H.co(H.n(b,{func:1,ret:-1,args:[P.a8]}),1))},
hx:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.df.prototype={$idf:1}
W.jP.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$ia_")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.a_]},
$ay:function(){return[W.a_]},
$ii:1,
$ai:function(){return[W.a_]},
$ib:1,
$ab:function(){return[W.a_]},
$aE:function(){return[W.a_]}}
W.eM.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
B:function(a,b){var u
if(b==null)return!1
if(!H.dv(b,"$iad",[P.a8],"$aad"))return!1
u=J.af(b)
return a.left===u.gbZ(b)&&a.top===u.gc6(b)&&a.width===u.gaU(b)&&a.height===u.gaP(b)},
gL:function(a){return W.mL(C.e.gL(a.left),C.e.gL(a.top),C.e.gL(a.width),C.e.gL(a.height))},
gaP:function(a){return a.height},
gaU:function(a){return a.width}}
W.k3.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaS")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aS]},
$ay:function(){return[W.aS]},
$ii:1,
$ai:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aE:function(){return[W.aS]}}
W.f3.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iH")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.H]},
$ay:function(){return[W.H]},
$ii:1,
$ai:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aE:function(){return[W.H]}}
W.kh.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaZ")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aZ]},
$ay:function(){return[W.aZ]},
$ii:1,
$ai:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aE:function(){return[W.aZ]}}
W.kl.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaM")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aM]},
$ay:function(){return[W.aM]},
$ii:1,
$ai:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aE:function(){return[W.aM]}}
W.jN.prototype={
O:function(a,b){var u,t,s,r,q,p
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.gab(this),t=u.length,s=this.a,r=J.af(s),q=0;q<u.length;u.length===t||(0,H.D)(u),++q){p=u[q]
b.$2(p,r.bb(s,p))}},
gab:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.d([],[P.f])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.h(u,r)
q=H.e(u[r],"$idf")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aaj:function(){return[P.f,P.f]},
$aF:function(){return[P.f,P.f]}}
W.jR.prototype={
j:function(a,b){return J.li(this.a,H.J(b))},
n:function(a,b,c){J.nK(this.a,b,c)},
gl:function(a){return this.gab(this).length}}
W.jS.prototype={}
W.lC.prototype={}
W.jT.prototype={}
W.jU.prototype={
$1:function(a){return this.a.$1(H.e(a,"$ip"))},
$S:35}
W.bV.prototype={
h4:function(a){var u,t
u=$.lV()
if(u.gkS(u)){for(t=0;t<262;++t)u.n(0,C.a7[t],W.pt())
for(t=0;t<12;++t)u.n(0,C.B[t],W.pu())}},
b4:function(a){return $.ny().a0(0,W.cE(a))},
aC:function(a,b,c){var u,t,s
u=W.cE(a)
t=$.lV()
s=t.j(0,H.m(u)+"::"+b)
if(s==null)s=t.j(0,"*::"+b)
if(s==null)return!1
return H.lK(s.$4(a,b,c,this))},
$iaH:1}
W.E.prototype={
gY:function(a){return new W.dP(a,this.gl(a),-1,[H.bX(this,a,"E",0)])}}
W.ea.prototype={
b4:function(a){return C.a.eq(this.a,new W.i9(a))},
aC:function(a,b,c){return C.a.eq(this.a,new W.i8(a,b,c))},
$iaH:1}
W.i9.prototype={
$1:function(a){return H.e(a,"$iaH").b4(this.a)},
$S:25}
W.i8.prototype={
$1:function(a){return H.e(a,"$iaH").aC(this.a,this.b,this.c)},
$S:25}
W.fb.prototype={
he:function(a,b,c,d){var u,t,s
this.a.af(0,c)
u=b.c8(0,new W.ke())
t=b.c8(0,new W.kf())
this.b.af(0,u)
s=this.c
s.af(0,C.I)
s.af(0,t)},
b4:function(a){return this.a.a0(0,W.cE(a))},
aC:function(a,b,c){var u,t
u=W.cE(a)
t=this.c
if(t.a0(0,H.m(u)+"::"+b))return this.d.k8(c)
else if(t.a0(0,"*::"+b))return this.d.k8(c)
else{t=this.b
if(t.a0(0,H.m(u)+"::"+b))return!0
else if(t.a0(0,"*::"+b))return!0
else if(t.a0(0,H.m(u)+"::*"))return!0
else if(t.a0(0,"*::*"))return!0}return!1},
$iaH:1}
W.ke.prototype={
$1:function(a){return!C.a.a0(C.B,H.J(a))},
$S:26}
W.kf.prototype={
$1:function(a){return C.a.a0(C.B,H.J(a))},
$S:26}
W.kn.prototype={
aC:function(a,b,c){if(this.fX(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.li(a,"template")==="")return this.e.a0(0,b)
return!1}}
W.ko.prototype={
$1:function(a){return"TEMPLATE::"+H.m(H.J(a))},
$S:17}
W.km.prototype={
b4:function(a){var u=J.Z(a)
if(!!u.$icV)return!1
u=!!u.$iq
if(u&&W.cE(a)==="foreignObject")return!1
if(u)return!0
return!1},
aC:function(a,b,c){if(b==="is"||C.c.a9(b,"on"))return!1
return this.b4(a)},
$iaH:1}
W.dP.prototype={
F:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.se2(J.lX(this.a,u))
this.c=u
return!0}this.se2(null)
this.c=t
return!1},
gM:function(a){return this.d},
se2:function(a){this.d=H.C(a,H.v(this,0))},
$ib9:1}
W.aH.prototype={}
W.kc.prototype={$iq8:1}
W.fu.prototype={
dB:function(a){new W.kz(this).$2(a,null)},
bi:function(a,b){if(b==null)J.m0(a)
else J.fJ(b,a)},
j8:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.nH(a)
s=J.li(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.am(o)}q="element unprintable"
try{q=J.ax(a)}catch(o){H.am(o)}try{p=W.cE(a)
this.j7(H.e(a,"$iX"),b,u,q,p,H.e(t,"$iF"),H.J(s))}catch(o){if(H.am(o) instanceof P.aR)throw o
else{this.bi(a,b)
window
n="Removing corrupted element "+H.m(q)
if(typeof console!="undefined")window.console.warn(n)}}},
j7:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.bi(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.b4(a)){this.bi(a,b)
window
u="Removing disallowed element <"+H.m(e)+"> from "+H.m(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.aC(a,"is",g)){this.bi(a,b)
window
u="Removing disallowed type extension <"+H.m(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gab(f)
t=H.d(u.slice(0),[H.v(u,0)])
for(s=f.gab(f).length-1,u=f.a,r=J.af(u);s>=0;--s){if(s>=t.length)return H.h(t,s)
q=t[s]
if(!this.a.aC(a,J.nM(q),r.bb(u,q))){window
p="Removing disallowed attribute <"+H.m(e)+" "+q+'="'+H.m(r.bb(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.bb(u,q)
r.iW(u,q)}}if(!!J.Z(a).$id_)this.dB(a.content)},
$ipU:1}
W.kz.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.j8(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.bi(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.am(r)
q=H.e(u,"$iH")
if(s){p=q.parentNode
if(p!=null)J.fJ(p,q)}else J.fJ(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.e(t,"$iH")}},
$S:46}
W.eL.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fh.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fv.prototype={}
W.fw.prototype={}
W.fx.prototype={}
W.fy.prototype={}
W.fz.prototype={}
W.fA.prototype={}
W.fB.prototype={}
W.fC.prototype={}
W.fD.prototype={}
W.fE.prototype={}
P.ki.prototype={
f1:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
du:function(a){var u,t,s,r,q
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.Z(a)
if(!!t.$iar)return new Date(a.a)
if(!!t.$ioo)throw H.c(P.ji("structured clone of RegExp"))
if(!!t.$iaL)return a
if(!!t.$ic_)return a
if(!!t.$icF)return a
if(!!t.$ibs)return a
if(!!t.$icP||!!t.$ibQ)return a
if(!!t.$iF){s=this.f1(a)
r=this.b
if(s>=r.length)return H.h(r,s)
q=r[s]
u.a=q
if(q!=null)return q
q={}
u.a=q
C.a.n(r,s,q)
t.O(a,new P.kk(u,this))
return u.a}if(!!t.$ib){s=this.f1(a)
u=this.b
if(s>=u.length)return H.h(u,s)
q=u[s]
if(q!=null)return q
return this.km(a,s)}throw H.c(P.ji("structured clone of other type"))},
km:function(a,b){var u,t,s,r
u=J.cr(a)
t=u.gl(a)
s=new Array(t)
C.a.n(this.b,b,s)
for(r=0;r<t;++r)C.a.n(s,r,this.du(u.j(a,r)))
return s}}
P.kk.prototype={
$2:function(a,b){this.a.a[a]=this.b.du(b)},
$S:8}
P.fr.prototype={$ibs:1,
geA:function(a){return this.a}}
P.kK.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.kj.prototype={}
P.hm.prototype={
gbC:function(){var u,t,s
u=this.b
t=H.ap(u,"y",0)
s=W.X
return new H.hP(new H.dd(u,H.n(new P.hn(),{func:1,ret:P.T,args:[t]}),[t]),H.n(new P.ho(),{func:1,ret:s,args:[t]}),[t,s])},
n:function(a,b,c){var u
H.e(c,"$iX")
u=this.gbC()
J.nJ(u.b.$1(J.fK(u.a,b)),c)},
h:function(a,b){J.lY(this.b.a,b)},
gl:function(a){return J.aJ(this.gbC().a)},
j:function(a,b){var u=this.gbC()
return u.b.$1(J.fK(u.a,b))},
gY:function(a){var u=P.me(this.gbC(),!1,W.X)
return new J.ay(u,u.length,0,[H.v(u,0)])},
$ay:function(){return[W.X]},
$ai:function(){return[W.X]},
$ab:function(){return[W.X]}}
P.hn.prototype={
$1:function(a){return!!J.Z(H.e(a,"$iH")).$iX},
$S:22}
P.ho.prototype={
$1:function(a){return H.l(H.e(a,"$iH"),"$iX")},
$S:34}
P.k7.prototype={
gc4:function(a){var u=this.a
if(typeof u!=="number")return u.p()
return H.C(u+this.c,H.v(this,0))},
gew:function(a){var u=this.b
if(typeof u!=="number")return u.p()
return H.C(u+this.d,H.v(this,0))},
i:function(a){return"Rectangle ("+H.m(this.a)+", "+H.m(this.b)+") "+this.c+" x "+this.d},
B:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.dv(b,"$iad",[P.a8],"$aad")){u=this.a
t=J.af(b)
if(u==t.gbZ(b)){s=this.b
if(s==t.gc6(b)){if(typeof u!=="number")return u.p()
r=H.v(this,0)
if(H.C(u+this.c,r)===t.gc4(b)){if(typeof s!=="number")return s.p()
u=H.C(s+this.d,r)===t.gew(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gL:function(a){var u,t,s,r,q
u=this.a
t=J.dA(u)
s=this.b
r=J.dA(s)
if(typeof u!=="number")return u.p()
q=H.v(this,0)
u=C.f.gL(H.C(u+this.c,q))
if(typeof s!=="number")return s.p()
q=C.f.gL(H.C(s+this.d,q))
return P.oN(P.k5(P.k5(P.k5(P.k5(0,t),r),u),q))}}
P.ad.prototype={
gbZ:function(a){return this.a},
gc6:function(a){return this.b},
gaU:function(a){return this.c},
gaP:function(a){return this.d}}
P.bb.prototype={$ibb:1}
P.hE.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return this.aH(a,b)},
n:function(a,b,c){H.e(c,"$ibb")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){return this.j(a,b)},
aH:function(a,b){return a.getItem(b)},
$ay:function(){return[P.bb]},
$ii:1,
$ai:function(){return[P.bb]},
$ib:1,
$ab:function(){return[P.bb]},
$aE:function(){return[P.bb]}}
P.bf.prototype={$ibf:1}
P.ic.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return this.aH(a,b)},
n:function(a,b,c){H.e(c,"$ibf")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){return this.j(a,b)},
aH:function(a,b){return a.getItem(b)},
$ay:function(){return[P.bf]},
$ii:1,
$ai:function(){return[P.bf]},
$ib:1,
$ab:function(){return[P.bf]},
$aE:function(){return[P.bf]}}
P.ik.prototype={
gl:function(a){return a.length}}
P.cV.prototype={$icV:1}
P.iR.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return this.aH(a,b)},
n:function(a,b,c){H.J(c)
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){return this.j(a,b)},
aH:function(a,b){return a.getItem(b)},
$ay:function(){return[P.f]},
$ii:1,
$ai:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aE:function(){return[P.f]}}
P.q.prototype={
gcT:function(a){return new P.hm(a,new W.au(a))},
ao:function(a,b,c,d){var u,t,s,r,q,p
u=H.d([],[W.aH])
C.a.h(u,W.mK(null))
C.a.h(u,W.mM())
C.a.h(u,new W.km())
c=new W.fu(new W.ea(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.p).ko(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.au(r)
p=u.gaV(u)
for(u=J.af(q);s=p.firstChild,s!=null;)u.H(q,s)
return q},
$iq:1}
P.bj.prototype={$ibj:1}
P.j4.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return this.aH(a,b)},
n:function(a,b,c){H.e(c,"$ibj")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){return this.j(a,b)},
aH:function(a,b){return a.getItem(b)},
$ay:function(){return[P.bj]},
$ii:1,
$ai:function(){return[P.bj]},
$ib:1,
$ab:function(){return[P.bj]},
$aE:function(){return[P.bj]}}
P.eW.prototype={}
P.eX.prototype={}
P.f6.prototype={}
P.f7.prototype={}
P.fi.prototype={}
P.fj.prototype={}
P.fp.prototype={}
P.fq.prototype={}
P.U.prototype={$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$ioy:1}
P.fO.prototype={
gl:function(a){return a.length}}
P.fP.prototype={
j:function(a,b){return P.by(a.get(H.J(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.by(t.value[1]))}},
gab:function(a){var u=H.d([],[P.f])
this.O(a,new P.fQ(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.I("Not supported"))},
$aaj:function(){return[P.f,null]},
$iF:1,
$aF:function(){return[P.f,null]}}
P.fQ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
P.fR.prototype={
gl:function(a){return a.length}}
P.bZ.prototype={}
P.id.prototype={
gl:function(a){return a.length}}
P.eK.prototype={}
P.dE.prototype={$idE:1}
P.dQ.prototype={$idQ:1}
P.ee.prototype={$iee:1}
P.cf.prototype={
cK:function(a,b){return a.activeTexture(b)},
er:function(a,b,c){return a.attachShader(b,c)},
aD:function(a,b,c){return a.bindBuffer(b,c)},
kd:function(a,b,c){return a.bindFramebuffer(b,c)},
aM:function(a,b,c){return a.bindTexture(b,c)},
ke:function(a,b,c){return a.blendFunc(b,c)},
ex:function(a,b,c,d){return a.bufferData(b,c,d)},
kg:function(a,b){return a.clear(b)},
kh:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
ki:function(a,b){return a.clearDepth(b)},
kk:function(a,b){return a.compileShader(b)},
kq:function(a,b){return a.createShader(b)},
ks:function(a,b){return a.deleteProgram(b)},
kt:function(a,b){return a.deleteShader(b)},
kw:function(a,b){return a.depthFunc(b)},
kx:function(a,b){return a.disable(b)},
eC:function(a,b){return a.disableVertexAttribArray(b)},
ky:function(a,b,c,d,e){return a.drawElements(b,c,H.ag(d),H.ag(e))},
cY:function(a,b){return a.enable(b)},
eG:function(a,b){return a.enableVertexAttribArray(b)},
fB:function(a,b,c){return a.getActiveAttrib(b,c)},
fC:function(a,b,c){return a.getActiveUniform(b,c)},
fD:function(a,b,c){return a.getAttribLocation(b,c)},
dA:function(a,b){return a.getParameter(b)},
fG:function(a,b){return a.getProgramInfoLog(b)},
ca:function(a,b,c){return a.getProgramParameter(b,c)},
fH:function(a,b){return a.getShaderInfoLog(b)},
fI:function(a,b,c){return a.getShaderParameter(b,c)},
fJ:function(a,b,c){return a.getUniformLocation(b,c)},
kU:function(a,b){return a.linkProgram(b)},
lc:function(a,b,c){return a.pixelStorei(b,c)},
fR:function(a,b,c){return a.shaderSource(b,c)},
lq:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.Z(g)
if(!!u.$ibs)t=!0
else t=!1
if(t){this.jo(a,b,c,d,e,f,P.pi(g))
return}if(!!u.$icI)u=!0
else u=!1
if(u){this.jp(a,b,c,d,e,f,g)
return}throw H.c(P.dC("Incorrect number or type of arguments"))},
lp:function(a,b,c,d,e,f,g){return this.lq(a,b,c,d,e,f,g,null,null,null)},
jo:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
jp:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c5:function(a,b,c,d){return a.texParameteri(b,c,d)},
P:function(a,b,c){return a.uniform1f(b,c)},
V:function(a,b,c){return a.uniform1i(b,c)},
C:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fu:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
fv:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
dt:function(a,b){return a.useProgram(b)},
lv:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
lw:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$icf:1}
P.ei.prototype={$iei:1}
P.es.prototype={$ies:1}
P.eA.prototype={$ieA:1}
P.iJ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return P.by(this.hJ(a,b))},
n:function(a,b,c){H.e(c,"$iF")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){return this.j(a,b)},
hJ:function(a,b){return a.item(b)},
$ay:function(){return[[P.F,,,]]},
$ii:1,
$ai:function(){return[[P.F,,,]]},
$ib:1,
$ab:function(){return[[P.F,,,]]},
$aE:function(){return[[P.F,,,]]}}
P.fe.prototype={}
P.ff.prototype={}
O.a6.prototype={
bA:function(a){this.shO(H.d([],[a]))
this.sea(null)
this.se6(null)
this.seb(null)},
dC:function(a,b,c){var u=H.ap(this,"a6",0)
H.n(b,{func:1,ret:P.T,args:[[P.i,u]]})
u={func:1,ret:-1,args:[P.o,[P.i,u]]}
H.n(a,u)
H.n(c,u)
this.sea(b)
this.se6(a)
this.seb(c)},
bc:function(a,b){return this.dC(a,null,b)},
e9:function(a){var u
H.k(a,"$ii",[H.ap(this,"a6",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dI:function(a,b){var u
H.k(b,"$ii",[H.ap(this,"a6",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gY:function(a){var u=this.a
return new J.ay(u,u.length,0,[H.v(u,0)])},
N:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.ap(this,"a6",0)
H.C(b,u)
u=[u]
if(this.e9(H.d([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.dI(s,H.d([b],u))}},
af:function(a,b){var u,t
H.k(b,"$ii",[H.ap(this,"a6",0)],"$ai")
if(this.e9(b)){u=this.a
t=u.length
C.a.af(u,b)
this.dI(t,b)}},
shO:function(a){this.a=H.k(a,"$ib",[H.ap(this,"a6",0)],"$ab")},
sea:function(a){this.b=H.n(a,{func:1,ret:P.T,args:[[P.i,H.ap(this,"a6",0)]]})},
se6:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.ap(this,"a6",0)]]})},
seb:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.ap(this,"a6",0)]]})},
$ii:1}
O.cM.prototype={
gl:function(a){return this.a.length},
gv:function(){var u=this.b
if(u==null){u=D.Q()
this.b=u}return u},
h2:function(a){var u=this.b
if(u!=null)u.I(a)},
aW:function(){return this.h2(null)},
ga8:function(a){var u=this.a
if(u.length>0)return C.a.gaF(u)
else return V.ca()},
c2:function(a){var u=this.a
if(a==null)C.a.h(u,V.ca())
else C.a.h(u,a)
this.aW()},
aR:function(){var u=this.a
if(u.length>0){u.pop()
this.aW()}},
sco:function(a){this.a=H.k(a,"$ib",[V.az],"$ab")}}
E.fU.prototype={}
E.as.prototype={
sac:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gv().G(0,this.gfi())
t=this.c
if(t!=null)t.gv().h(0,this.gfi())
s=new D.M("shape",u,this.c,this,[F.ej])
s.b=!0
this.b8(s)}},
aw:function(a,b){var u
for(u=this.y.a,u=new J.ay(u,u.length,0,[H.v(u,0)]);u.F();)u.d.aw(0,b)},
ai:function(a){var u,t
u=a.dx
C.a.h(u.a,u.ga8(u))
u.aW()
a.dh(this.f)
u=a.dy
t=(u&&C.a).gaF(u)
if(t!=null&&this.d!=null)t.fm(a,this)
for(u=this.y.a,u=new J.ay(u,u.length,0,[H.v(u,0)]);u.F();)u.d.ai(a)
a.dg()
a.dx.aR()},
gv:function(){var u=this.z
if(u==null){u=D.Q()
this.z=u}return u},
b8:function(a){var u=this.z
if(u!=null)u.I(a)},
Z:function(){return this.b8(null)},
fj:function(a){H.e(a,"$iz")
this.e=null
this.b8(a)},
l3:function(){return this.fj(null)},
fh:function(a){this.b8(H.e(a,"$iz"))},
l0:function(){return this.fh(null)},
l_:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ii",[E.as],"$ai")
for(u=b.length,t=this.gfg(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c5()
o.sal(null)
o.sb1(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sal(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.Z()},
l2:function(a,b){var u,t
H.k(b,"$ii",[E.as],"$ai")
for(u=b.gY(b),t=this.gfg();u.F();)u.gM(u).gv().G(0,t)
this.Z()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sh3:function(a,b){this.y=H.k(b,"$ia6",[E.as],"$aa6")},
$ibe:1}
E.iq.prototype={
h_:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.ar(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cM()
t=[V.az]
u.sco(H.d([],t))
u.b=null
u.gv().h(0,new E.ir(this))
this.cy=u
u=new O.cM()
u.sco(H.d([],t))
u.b=null
u.gv().h(0,new E.is(this))
this.db=u
u=new O.cM()
u.sco(H.d([],t))
u.b=null
u.gv().h(0,new E.it(this))
this.dx=u
this.sjn(H.d([],[O.bS]))
u=this.dy;(u&&C.a).h(u,null)
this.sjj(new H.aU([P.f,A.cW]))},
gld:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.ga8(u)
t=this.db
t=u.w(0,t.ga8(t))
this.z=t
u=t}return u},
dh:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaF(u):a;(u&&C.a).h(u,t)},
dg:function(){var u=this.dy
if(u.length>1)u.pop()},
ep:function(a){var u=a.b
if(u.length===0)throw H.c(P.t("May not cache a shader with no name."))
if(this.fr.bI(0,u))throw H.c(P.t('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.n(0,u,a)},
sjn:function(a){this.dy=H.k(a,"$ib",[O.bS],"$ab")},
sjj:function(a){this.fr=H.k(a,"$iF",[P.f,A.cW],"$aF")}}
E.ir.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.z=null
u.ch=null},
$S:6}
E.is.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:6}
E.it.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.ch=null
u.cx=null},
$S:6}
E.ew.prototype={
dL:function(a){H.e(a,"$iz")
this.fo()},
dK:function(){return this.dL(null)},
gkM:function(){var u,t,s
u=Date.now()
t=C.f.aa(P.m8(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ar(u,!1)
return s/t},
ee:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.w()
if(typeof u!=="number")return H.G(u)
s=C.e.d4(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.w()
r=C.e.d4(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.mu(C.y,this.glj())}},
fo:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iY(this),{func:1,ret:-1,args:[P.a8]})
C.P.hx(u)
C.P.j3(u,W.n_(t,P.a8))}},
lh:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.ee()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ar(r,!1)
s.y=P.m8(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aW()
r=s.db
C.a.sl(r.a,0)
r.aW()
r=s.dx
C.a.sl(r.a,0)
r.aW()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.ai(this.e)}s=this.z
if(s!=null)s.I(null)}catch(q){u=H.am(q)
t=H.cs(q)
P.aE("Error: "+H.m(u))
P.aE("Stack: "+H.m(t))
throw H.c(u)}}}
E.iY.prototype={
$1:function(a){var u
H.pF(a)
u=this.a
if(u.ch){u.ch=!1
u.lh()}},
$S:55}
Z.eH.prototype={$ipO:1}
Z.dF.prototype={
a7:function(a){var u,t,s
try{t=a.a
C.b.eG(t,this.e)
C.b.lv(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.am(s)
t=P.t('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.m(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.m(this.e)+"]"}}
Z.eI.prototype={$ipP:1}
Z.cz.prototype={
aO:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a7:function(a){var u,t
u=this.a
C.b.aD(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].a7(a)},
aT:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.eC(s,u[t].e)
C.b.aD(s,this.a.a,null)},
ai:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.h(r,s)
q=r[s]
r=q.c
p=r.a
C.b.aD(t,p,r.b)
C.b.ky(t,q.a,q.b,5123,0)
C.b.aD(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.f]
t=H.d([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q)C.a.h(t,s[q].i(0))
p=H.d([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.ax(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(t,", ")+"\nAttrs:   "+C.a.m(p,", ")},
shH:function(a){this.b=H.k(a,"$ib",[Z.bM],"$ab")},
$ipX:1}
Z.bM.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cc(this.c)+"'")+"]"}}
Z.bl.prototype={
gdE:function(a){var u,t
u=this.a
t=(u&$.b4().a)!==0?3:0
if((u&$.bB().a)!==0)t+=3
if((u&$.bA().a)!==0)t+=3
if((u&$.bC().a)!==0)t+=2
if((u&$.bD().a)!==0)t+=3
if((u&$.dx().a)!==0)t+=3
if((u&$.dy().a)!==0)t+=4
if((u&$.cv().a)!==0)++t
return(u&$.bz().a)!==0?t+4:t},
ka:function(a){var u,t,s
u=$.b4()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bB()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bA()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bC()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bD()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.dx()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.dy()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cv()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bz()
if((t&u.a)!==0)if(s===a)return u
return $.nw()},
B:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bl))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.d([],[P.f])
t=this.a
if((t&$.b4().a)!==0)C.a.h(u,"Pos")
if((t&$.bB().a)!==0)C.a.h(u,"Norm")
if((t&$.bA().a)!==0)C.a.h(u,"Binm")
if((t&$.bC().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bD().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dx().a)!==0)C.a.h(u,"Clr3")
if((t&$.dy().a)!==0)C.a.h(u,"Clr4")
if((t&$.cv().a)!==0)C.a.h(u,"Weight")
if((t&$.bz().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fX.prototype={}
D.c5.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.z]}
H.n(b,u)
if(this.a==null)this.sal(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[D.z]})
u=this.a
u=u==null?null:C.a.a0(u,b)
if(u===!0){u=this.a
t=(u&&C.a).G(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.a0(u,b)
if(u===!0){u=this.b
t=(u&&C.a).G(u,b)||t}return t},
I:function(a){var u,t,s,r
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
return!0}if(!s)C.a.O(P.me(t,!0,{func:1,ret:-1,args:[D.z]}),new D.hi(u))
t=this.b
if(t!=null){this.sb1(H.d([],[{func:1,ret:-1,args:[D.z]}]))
C.a.O(t,new D.hj(u))}return!0},
kA:function(){return this.I(null)},
lk:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.I(t)}}},
aG:function(a){return this.lk(a,!0,!1)},
sal:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")},
sb1:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")}}
D.hi.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.hj.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.z.prototype={}
D.bN.prototype={}
D.bO.prototype={}
D.M.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.dG.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dG))return!1
if(this.a!=b.a)return!1
if(!this.b.B(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.dY.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dY))return!1
if(this.a!=b.a)return!1
if(!this.b.B(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.hD.prototype={
l9:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
l5:function(a){this.c=a.b
this.d.G(0,a.a)
return!1},
siT:function(a){this.d=H.k(a,"$imq",[P.o],"$amq")}}
X.e2.prototype={}
X.hL.prototype={
bg:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ar(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.w()
q=b.b
p=this.ch
if(typeof q!=="number")return q.w()
o=t.p(0,new V.a1(s*r,q*p))
p=this.a.gb5()
n=new X.bw(a,V.bg(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
df:function(a,b){this.r=a.a
return!1},
bq:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fL()
if(typeof u!=="number")return u.c9()
this.r=(u&~t)>>>0
return!1},
bp:function(a,b){var u=this.d
if(u==null)return!1
u.I(this.bg(a,b))
return!0},
la:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gb5()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.w()
o=a.b
n=this.cy
if(typeof o!=="number")return o.w()
r=new X.cO(new V.Y(q*p,o*n),t,s,new P.ar(r,!1),this)
r.b=!0
u.I(r)
return!0},
ir:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ar(Date.now(),!1)
t=this.f
s=new X.e2(c,a,this.a.gb5(),b,u,this)
s.b=!0
t.I(s)
this.y=u
this.x=V.bg()}}
X.aG.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aG))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bw.prototype={}
X.i2.prototype={
cl:function(a,b,c){var u,t,s
u=new P.ar(Date.now(),!1)
t=this.a.gb5()
s=new X.bw(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
df:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.I(this.cl(a,b,!0))
return!0},
bq:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fL()
if(typeof u!=="number")return u.c9()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.I(this.cl(a,b,!0))
return!0},
bp:function(a,b){var u=this.d
if(u==null)return!1
u.I(this.cl(a,b,!1))
return!0},
lb:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gb5()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.w()
p=a.b
o=this.ch
if(typeof p!=="number")return p.w()
s=new X.cO(new V.Y(r*q,p*o),t,b,new P.ar(s,!1),this)
s.b=!0
u.I(s)
return!0},
geD:function(){var u=this.b
if(u==null){u=D.Q()
this.b=u}return u},
gc7:function(){var u=this.c
if(u==null){u=D.Q()
this.c=u}return u},
gff:function(){var u=this.d
if(u==null){u=D.Q()
this.d=u}return u}}
X.cO.prototype={}
X.ij.prototype={}
X.ey.prototype={}
X.j1.prototype={
bg:function(a,b){var u,t,s,r
H.k(a,"$ib",[V.a1],"$ab")
u=new P.ar(Date.now(),!1)
t=a.length>0?a[0]:V.bg()
s=this.a.gb5()
r=new X.ey(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
l8:function(a){var u
H.k(a,"$ib",[V.a1],"$ab")
u=this.b
if(u==null)return!1
u.I(this.bg(a,!0))
return!0},
l6:function(a){var u
H.k(a,"$ib",[V.a1],"$ab")
u=this.c
if(u==null)return!1
u.I(this.bg(a,!0))
return!0},
l7:function(a){var u
H.k(a,"$ib",[V.a1],"$ab")
u=this.d
if(u==null)return!1
u.I(this.bg(a,!1))
return!0}}
X.eD.prototype={
gb5:function(){var u=this.a
return V.mo(0,0,C.q.gez(u).c,C.q.gez(u).d)},
dX:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dY(u,new X.aG(t,a.altKey,a.shiftKey))},
b2:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aG(t,a.altKey,a.shiftKey)},
cH:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aG(t,a.altKey,a.shiftKey)},
aL:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.u()
q=u.top
if(typeof s!=="number")return s.u()
return new V.a1(t-r,s-q)},
bh:function(a){return new V.Y(a.movementX,a.movementY)},
cB:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.d([],[V.a1])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q){p=s[q]
o=C.e.au(p.pageX)
C.e.au(p.pageY)
n=u.left
C.e.au(p.pageX)
C.a.h(t,new V.a1(o-n,C.e.au(p.pageY)-u.top))}return t},
aJ:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.dG(u,new X.aG(t,a.altKey,a.shiftKey))},
cp:function(a){var u,t,s,r,q,p
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
ik:function(a){this.f=!0},
i4:function(a){this.f=!1},
ic:function(a){H.e(a,"$iak")
if(this.f&&this.cp(a))a.preventDefault()},
ip:function(a){var u
H.e(a,"$iba")
if(!this.f)return
u=this.dX(a)
this.b.l9(u)},
im:function(a){var u
H.e(a,"$iba")
if(!this.f)return
u=this.dX(a)
this.b.l5(u)},
it:function(a){var u,t,s,r
H.e(a,"$iak")
u=this.a
u.focus()
this.f=!0
this.b2(a)
if(this.x){t=this.aJ(a)
s=this.bh(a)
if(this.d.df(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aJ(a)
r=this.aL(a)
if(this.c.df(t,r))a.preventDefault()},
ix:function(a){var u,t,s
H.e(a,"$iak")
this.b2(a)
u=this.aJ(a)
if(this.x){t=this.bh(a)
if(this.d.bq(u,t))a.preventDefault()
return}if(this.r)return
s=this.aL(a)
if(this.c.bq(u,s))a.preventDefault()},
ii:function(a){var u,t,s
H.e(a,"$iak")
if(!this.cp(a)){this.b2(a)
u=this.aJ(a)
if(this.x){t=this.bh(a)
if(this.d.bq(u,t))a.preventDefault()
return}if(this.r)return
s=this.aL(a)
if(this.c.bq(u,s))a.preventDefault()}},
iv:function(a){var u,t,s
H.e(a,"$iak")
this.b2(a)
u=this.aJ(a)
if(this.x){t=this.bh(a)
if(this.d.bp(u,t))a.preventDefault()
return}if(this.r)return
s=this.aL(a)
if(this.c.bp(u,s))a.preventDefault()},
ig:function(a){var u,t,s
H.e(a,"$iak")
if(!this.cp(a)){this.b2(a)
u=this.aJ(a)
if(this.x){t=this.bh(a)
if(this.d.bp(u,t))a.preventDefault()
return}if(this.r)return
s=this.aL(a)
if(this.c.bp(u,s))a.preventDefault()}},
iz:function(a){var u,t
H.e(a,"$ibm")
this.b2(a)
u=new V.Y((a&&C.O).gku(a),C.O.gkv(a)).t(0,180)
if(this.x){if(this.d.la(u))a.preventDefault()
return}if(this.r)return
t=this.aL(a)
if(this.c.lb(u,t))a.preventDefault()},
iB:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aJ(this.y)
s=this.aL(this.y)
this.d.ir(t,s,u)}},
iR:function(a){var u
H.e(a,"$ib1")
this.a.focus()
this.f=!0
this.cH(a)
u=this.cB(a)
if(this.e.l8(u))a.preventDefault()},
iN:function(a){var u
H.e(a,"$ib1")
this.cH(a)
u=this.cB(a)
if(this.e.l6(u))a.preventDefault()},
iP:function(a){var u
H.e(a,"$ib1")
this.cH(a)
u=this.cB(a)
if(this.e.l7(u))a.preventDefault()},
shy:function(a){this.z=H.k(a,"$ib",[[P.cY,P.S]],"$ab")}}
D.bJ.prototype={
gv:function(){var u=this.d
if(u==null){u=D.Q()
this.d=u}return u},
aI:function(a){var u
H.e(a,"$iz")
u=this.d
if(u!=null)u.I(a)},
h7:function(){return this.aI(null)},
$iaa:1,
$ibe:1}
D.aa.prototype={$ibe:1}
D.e_.prototype={
gv:function(){var u=this.Q
if(u==null){u=D.Q()
this.Q=u}return u},
aI:function(a){var u=this.Q
if(u!=null)u.I(a)},
e8:function(a){var u
H.e(a,"$iz")
u=this.ch
if(u!=null)u.I(a)},
iq:function(){return this.e8(null)},
iD:function(a){var u,t,s
H.k(a,"$ii",[D.aa],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.D)(a),++t){s=a[t]
if(s==null||this.h5(s))return!1}return!0},
hZ:function(a,b){var u,t,s,r,q,p,o,n
u=D.aa
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.ge7(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.D)(b),++p){o=H.e(b[p],"$iaa")
if(o instanceof D.bJ)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.c5()
n.sal(null)
n.sb1(null)
n.c=null
n.d=0
o.d=n}H.n(s,r)
if(n.a==null)n.sal(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bN(a,b,this,[u])
u.b=!0
this.aI(u)},
iH:function(a,b){var u,t,s,r
u=D.aa
H.k(b,"$ii",[u],"$ai")
for(t=b.gY(b),s=this.ge7();t.F();){r=t.gM(t)
C.a.G(this.e,r)
r.gv().G(0,s)}u=new D.bO(a,b,this,[u])
u.b=!0
this.aI(u)},
h5:function(a){var u=C.a.a0(this.e,a)
return u},
shv:function(a){this.e=H.k(a,"$ib",[D.bJ],"$ab")},
siS:function(a){this.f=H.k(a,"$ib",[D.ed],"$ab")},
sjl:function(a){this.r=H.k(a,"$ib",[D.en],"$ab")},
sjy:function(a){this.x=H.k(a,"$ib",[D.et],"$ab")},
sjz:function(a){this.y=H.k(a,"$ib",[D.eu],"$ab")},
sjA:function(a){this.z=H.k(a,"$ib",[D.ev],"$ab")},
$ai:function(){return[D.aa]},
$aa6:function(){return[D.aa]}}
D.ed.prototype={$iaa:1,$ibe:1}
D.en.prototype={$iaa:1,$ibe:1}
D.et.prototype={$iaa:1,$ibe:1}
D.eu.prototype={$iaa:1,$ibe:1}
D.ev.prototype={$iaa:1,$ibe:1}
V.a7.prototype={
p:function(a,b){var u,t,s
u=C.e.p(this.a,b.gdk())
t=C.e.p(this.b,b.gcb())
s=C.e.p(this.c,b.gcP())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a7(u,t,s)},
u:function(a,b){var u,t,s
u=C.e.u(this.a,b.gdk())
t=C.e.u(this.b,b.gcb())
s=C.e.u(this.c,b.gcP())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a7(u,t,s)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
V.ai.prototype={
dr:function(a){return H.d([this.a,this.b,this.c,this.d],[P.u])},
p:function(a,b){var u,t,s,r
u=C.e.p(this.a,b.gdk())
t=C.e.p(this.b,b.gcb())
s=C.e.p(this.c,b.gcP())
r=C.e.p(this.d,b.gk9(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.ai(u,t,s,r)},
u:function(a,b){var u,t,s,r
u=C.e.u(this.a,b.gdk())
t=C.e.u(this.b,b.gcb())
s=C.e.u(this.c,b.gcP())
r=C.e.u(this.d,b.gk9(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.ai(u,t,s,r)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ai))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"}}
V.hg.prototype={}
V.e6.prototype={
aj:function(a,b){var u=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.u])
return u},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e6))return!1
u=b.a
t=$.P().a
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
u=[P.u]
t=V.cq(H.d([this.a,this.d,this.r],u),3,0)
s=V.cq(H.d([this.b,this.e,this.x],u),3,0)
r=V.cq(H.d([this.c,this.f,this.y],u),3,0)
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
V.az.prototype={
aj:function(a,b){var u=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.u])
return u},
d8:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.P().a)return V.ca()
a8=1/a7
a9=-r
b0=-d
return V.bd((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
w:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.bd(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
ds:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.B(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
bw:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.W(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.az))return!1
u=b.a
t=$.P().a
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
i:function(a){return this.S()},
f2:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.u]
t=V.cq(H.d([this.a,this.e,this.y,this.cx],u),b,c)
s=V.cq(H.d([this.b,this.f,this.z,this.cy],u),b,c)
r=V.cq(H.d([this.c,this.r,this.Q,this.db],u),b,c)
q=V.cq(H.d([this.d,this.x,this.ch,this.dx],u),b,c)
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
S:function(){return this.f2("",3,0)},
J:function(a){return this.f2(a,3,0)}}
V.a1.prototype={
p:function(a,b){return new V.a1(this.a+b.a,this.b+b.b)},
u:function(a,b){return new V.a1(this.a-b.a,this.b-b.b)},
t:function(a,b){if(Math.abs(b-0)<$.P().a)return V.bg()
return new V.a1(this.a/b,this.b/b)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}}
V.W.prototype={
p:function(a,b){return new V.W(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.W(this.a-b.a,this.b-b.b,this.c-b.c)},
w:function(a,b){return new V.W(this.a*b,this.b*b,this.c*b)},
t:function(a,b){if(Math.abs(b-0)<$.P().a)return V.lw()
return new V.W(this.a/b,this.b/b,this.c/b)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
V.aB.prototype={
p:function(a,b){return new V.aB(C.e.p(this.a,b.gly(b)),C.e.p(this.b,b.glz(b)),C.e.p(this.c,b.glA(b)),C.e.p(this.d,b.glx(b)))},
u:function(a,b){return new V.aB(C.e.u(this.a,b.gly(b)),C.e.u(this.b,b.glz(b)),C.e.u(this.c,b.glA(b)),C.e.u(this.d,b.glx(b)))},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aB))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"}}
V.eh.prototype={
gah:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eh))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"}}
V.Y.prototype={
bo:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.G(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.G(r)
return u*t+s*r},
p:function(a,b){var u,t,s
u=this.a
t=b.geE(b)
if(typeof u!=="number")return u.p()
t=C.e.p(u,t)
u=this.b
s=b.geF(b)
if(typeof u!=="number")return u.p()
return new V.Y(t,C.e.p(u,s))},
u:function(a,b){var u,t,s
u=this.a
t=b.geE(b)
if(typeof u!=="number")return u.u()
t=C.e.u(u,t)
u=this.b
s=b.geF(b)
if(typeof u!=="number")return u.u()
return new V.Y(t,C.e.u(u,s))},
w:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.Y(u*b,t*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.P().a){u=$.mB
if(u==null){u=new V.Y(0,0)
$.mB=u}return u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.Y(u/b,t/b)},
B:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=this.a
s=$.P()
s.toString
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.G(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.G(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}}
V.B.prototype={
bo:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
d9:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.B(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aN:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.B(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.B(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.B(this.a-b.a,this.b-b.b,this.c-b.c)},
W:function(a){return new V.B(-this.a,-this.b,-this.c)},
w:function(a,b){return new V.B(this.a*b,this.b*b,this.c*b)},
t:function(a,b){if(Math.abs(b-0)<$.P().a)return V.db()
return new V.B(this.a/b,this.b/b,this.c/b)},
fb:function(){var u=$.P().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.B))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
V.b3.prototype={
bo:function(a){var u,t,s,r
u=this.a
t=this.b
s=this.c
r=this.d
return Math.sqrt(u*u+t*t+s*s+r*r)},
p:function(a,b){return new V.b3(this.a+b.a,this.b+b.b,this.c+b.c,this.d+b.d)},
u:function(a,b){return new V.b3(C.e.u(this.a,b.geE(b)),C.e.u(this.b,b.geF(b)),C.e.u(this.c,b.glG()),C.e.u(this.d,b.glF()))},
t:function(a,b){var u
if(Math.abs(b-0)<$.P().a){u=$.mI
if(u==null){u=new V.b3(0,0,0,0)
$.mI=u}return u}return new V.b3(this.a/b,this.b/b,this.c/b,this.d/b)},
B:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b3))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"}}
U.fY.prototype={
cf:function(a){var u=V.pN(a,this.c,this.b)
return u},
gv:function(){var u=this.y
if(u==null){u=D.Q()
this.y=u}return u},
U:function(a){var u=this.y
if(u!=null)u.I(a)},
sdv:function(a,b){},
sda:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.P().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.cf(t)}u=new D.M("maximumLocation",u,this.b,this,[P.u])
u.b=!0
this.U(u)}},
sdd:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.P().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.cf(t)}u=new D.M("minimumLocation",u,this.c,this,[P.u])
u.b=!0
this.U(u)}},
sa3:function(a,b){var u
b=this.cf(b)
u=this.d
if(!(Math.abs(u-b)<$.P().a)){this.d=b
u=new D.M("location",u,b,this,[P.u])
u.b=!0
this.U(u)}},
sdc:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.P().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.M("maximumVelocity",u,a,this,[P.u])
u.b=!0
this.U(u)}},
sa_:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.P().a)){this.f=a
u=new D.M("velocity",u,a,this,[P.u])
u.b=!0
this.U(u)}},
scW:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.P().a)){this.x=a
u=new D.M("dampening",u,a,this,[P.u])
u.b=!0
this.U(u)}},
aw:function(a,b){var u,t,s,r,q
u=this.f
t=$.P().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa3(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.P().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sa_(s)}}}
U.dI.prototype={
gv:function(){var u=this.b
if(u==null){u=D.Q()
this.b=u}return u},
ba:function(a,b,c){return this.a},
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dI))return!1
return J.N(this.a,b.a)},
i:function(a){return"Constant: "+this.a.J("          ")}}
U.cH.prototype={
gv:function(){var u=this.e
if(u==null){u=D.Q()
this.e=u}return u},
U:function(a){var u
H.e(a,"$iz")
u=this.e
if(u!=null)u.I(a)},
ad:function(){return this.U(null)},
hX:function(a,b){var u,t,s,r,q,p,o,n
u=U.al
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gaX(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.D)(b),++p){o=b[p]
if(o!=null){n=o.gv()
n.toString
H.n(s,r)
if(n.a==null)n.sal(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bN(a,b,this,[u])
u.b=!0
this.U(u)},
iF:function(a,b){var u,t,s
u=U.al
H.k(b,"$ii",[u],"$ai")
for(t=b.gY(b),s=this.gaX();t.F();)t.gM(t).gv().G(0,s)
u=new D.bO(a,b,this,[u])
u.b=!0
this.U(u)},
ba:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.a1()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ay(u,u.length,0,[H.v(u,0)]),s=null;u.F();){t=u.d
if(t!=null){r=t.ba(0,b,c)
if(r!=null)s=s==null?r:r.w(0,s)}}this.f=s==null?V.ca():s
u=this.e
if(u!=null)u.aG(0)}return this.f},
B:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cH))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.N(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.al]},
$aa6:function(){return[U.al]},
$ial:1}
U.al.prototype={}
U.eE.prototype={
gv:function(){var u=this.cy
if(u==null){u=D.Q()
this.cy=u}return u},
U:function(a){var u
H.e(a,"$iz")
u=this.cy
if(u!=null)u.I(a)},
ad:function(){return this.U(null)},
bj:function(a){if(this.a!=null)return!1
this.a=a
a.c.geD().h(0,this.gcq())
this.a.c.gff().h(0,this.gcs())
this.a.c.gc7().h(0,this.gcu())
return!0},
cr:function(a){H.e(a,"$iz")
if(!J.N(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
ct:function(a){var u,t,s,r,q,p,o
a=H.l(H.e(a,"$iz"),"$ibw")
if(!this.y)return
if(this.x){u=a.d.u(0,a.y)
u=new V.Y(u.a,u.b)
u=u.D(u)
t=this.r
if(typeof t!=="number")return H.G(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.u(0,a.y)
u=new V.Y(t.a,t.b).w(0,2).t(0,u.gah())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.w()
s=this.e
if(typeof s!=="number")return H.G(s)
t.sa_(u*10*s)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=new V.Y(s.a,s.b).w(0,2).t(0,u.gah())
s=this.b
q=r.a
if(typeof q!=="number")return q.W()
p=this.e
if(typeof p!=="number")return H.G(p)
o=this.z
if(typeof o!=="number")return H.G(o)
s.sa3(0,-q*p+o)
this.b.sa_(0)
t=t.u(0,a.z)
this.Q=new V.Y(t.a,t.b).w(0,2).t(0,u.gah())}this.ad()},
cv:function(a){var u,t,s
H.e(a,"$iz")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.D(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.w()
s=this.e
if(typeof s!=="number")return H.G(s)
u.sa_(t*10*s)
this.ad()}},
ba:function(a,b,c){var u,t,s,r,q
u=this.ch
t=b.e
if(typeof u!=="number")return u.a1()
if(u<t){this.ch=t
s=b.y
this.b.aw(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.bd(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$ial:1}
U.eF.prototype={
gv:function(){var u=this.fx
if(u==null){u=D.Q()
this.fx=u}return u},
U:function(a){var u
H.e(a,"$iz")
u=this.fx
if(u!=null)u.I(a)},
ad:function(){return this.U(null)},
bj:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.geD().h(0,this.gcq())
this.a.c.gff().h(0,this.gcs())
this.a.c.gc7().h(0,this.gcu())
u=this.a.d
t=u.f
if(t==null){t=D.Q()
u.f=t
u=t}else u=t
u.h(0,this.ghP())
u=this.a.d
t=u.d
if(t==null){t=D.Q()
u.d=t
u=t}else u=t
u.h(0,this.ghR())
u=this.a.e
t=u.b
if(t==null){t=D.Q()
u.b=t
u=t}else u=t
u.h(0,this.gjv())
u=this.a.e
t=u.d
if(t==null){t=D.Q()
u.d=t
u=t}else u=t
u.h(0,this.gjt())
u=this.a.e
t=u.c
if(t==null){t=D.Q()
u.c=t
u=t}else u=t
u.h(0,this.gjr())
return!0},
ay:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.W()
u=-u}if(this.r){if(typeof t!=="number")return t.W()
t=-t}return new V.Y(u,t)},
cr:function(a){a=H.l(H.e(a,"$iz"),"$ibw")
if(!J.N(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
ct:function(a){var u,t,s,r,q,p,o
a=H.l(H.e(a,"$iz"),"$ibw")
if(!this.cx)return
if(this.ch){u=a.d.u(0,a.y)
u=new V.Y(u.a,u.b)
u=u.D(u)
t=this.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.u(0,a.y)
u=this.ay(new V.Y(t.a,t.b).w(0,2).t(0,u.gah()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.W()
s=this.y
if(typeof s!=="number")return H.G(s)
t.sa_(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.W()
t=this.x
if(typeof t!=="number")return H.G(t)
s.sa_(-u*10*t)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=this.ay(new V.Y(s.a,s.b).w(0,2).t(0,u.gah()))
s=this.c
q=r.a
if(typeof q!=="number")return q.W()
p=this.y
if(typeof p!=="number")return H.G(p)
o=this.cy
if(typeof o!=="number")return H.G(o)
s.sa3(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.W()
q=this.x
if(typeof q!=="number")return H.G(q)
s=this.db
if(typeof s!=="number")return H.G(s)
o.sa3(0,-p*q+s)
this.b.sa_(0)
this.c.sa_(0)
t=t.u(0,a.z)
this.dx=this.ay(new V.Y(t.a,t.b).w(0,2).t(0,u.gah()))}this.ad()},
cv:function(a){var u,t,s
H.e(a,"$iz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.D(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.W()
s=this.y
if(typeof s!=="number")return H.G(s)
u.sa_(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.W()
u=this.x
if(typeof u!=="number")return H.G(u)
s.sa_(-t*10*u)
this.ad()}},
hQ:function(a){if(H.l(H.e(a,"$iz"),"$ie2").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hS:function(a){var u,t,s,r,q,p,o
a=H.l(H.e(a,"$iz"),"$ibw")
if(!J.N(this.d,a.x.b))return
u=a.c
t=a.d
s=t.u(0,a.y)
r=this.ay(new V.Y(s.a,s.b).w(0,2).t(0,u.gah()))
s=this.c
q=r.a
if(typeof q!=="number")return q.W()
p=this.y
if(typeof p!=="number")return H.G(p)
o=this.cy
if(typeof o!=="number")return H.G(o)
s.sa3(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.W()
q=this.x
if(typeof q!=="number")return H.G(q)
s=this.db
if(typeof s!=="number")return H.G(s)
o.sa3(0,-p*q+s)
this.b.sa_(0)
this.c.sa_(0)
t=t.u(0,a.z)
this.dx=this.ay(new V.Y(t.a,t.b).w(0,2).t(0,u.gah()))
this.ad()},
jw:function(a){H.e(a,"$iz")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
ju:function(a){var u,t,s,r,q,p,o
a=H.l(H.e(a,"$iz"),"$iey")
if(!this.cx)return
if(this.ch){u=a.d.u(0,a.y)
u=new V.Y(u.a,u.b)
u=u.D(u)
t=this.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.u(0,a.y)
u=this.ay(new V.Y(t.a,t.b).w(0,2).t(0,u.gah()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.W()
s=this.y
if(typeof s!=="number")return H.G(s)
t.sa_(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.W()
t=this.x
if(typeof t!=="number")return H.G(t)
s.sa_(-u*10*t)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=this.ay(new V.Y(s.a,s.b).w(0,2).t(0,u.gah()))
s=this.c
q=r.a
if(typeof q!=="number")return q.W()
p=this.y
if(typeof p!=="number")return H.G(p)
o=this.cy
if(typeof o!=="number")return H.G(o)
s.sa3(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.W()
q=this.x
if(typeof q!=="number")return H.G(q)
s=this.db
if(typeof s!=="number")return H.G(s)
o.sa3(0,-p*q+s)
this.b.sa_(0)
this.c.sa_(0)
t=t.u(0,a.z)
this.dx=this.ay(new V.Y(t.a,t.b).w(0,2).t(0,u.gah()))}this.ad()},
js:function(a){var u,t,s
H.e(a,"$iz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.D(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.W()
s=this.y
if(typeof s!=="number")return H.G(s)
u.sa_(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.W()
u=this.x
if(typeof u!=="number")return H.G(u)
s.sa_(-t*10*u)
this.ad()}},
ba:function(a,b,c){var u,t,s,r,q
u=this.dy
t=b.e
if(typeof u!=="number")return u.a1()
if(u<t){this.dy=t
s=b.y
this.c.aw(0,s)
this.b.aw(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.bd(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.w(0,V.bd(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$ial:1}
U.eG.prototype={
gv:function(){var u=this.r
if(u==null){u=D.Q()
this.r=u}return u},
U:function(a){var u=this.r
if(u!=null)u.I(a)},
bj:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.Q()
u.e=t
u=t}else u=t
t=this.ghU()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.Q()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
hV:function(a){var u,t,s,r
H.e(a,"$iz")
if(!J.N(this.b,this.a.b.c))return
H.l(a,"$icO")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.w()
r=u+t*s
if(u!==r){this.d=r
u=new D.M("zoom",u,r,this,[P.u])
u.b=!0
this.U(u)}},
ba:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.bd(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$ial:1}
M.dH.prototype={
gv:function(){var u=this.f
if(u==null){u=D.Q()
this.f=u}return u},
a5:function(a){var u
H.e(a,"$iz")
u=this.f
if(u!=null)u.I(a)},
bd:function(){return this.a5(null)},
iJ:function(a,b){var u,t,s,r,q,p,o,n
u=M.aI
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.ga4(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.D)(b),++p){o=b[p]
if(o!=null){n=o.gv()
n.toString
H.n(s,r)
if(n.a==null)n.sal(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bN(a,b,this,[u])
u.b=!0
this.a5(u)},
iL:function(a,b){var u,t,s
u=M.aI
H.k(b,"$ii",[u],"$ai")
for(t=b.gY(b),s=this.ga4();t.F();)t.gM(t).gv().G(0,s)
u=new D.bO(a,b,this,[u])
u.b=!0
this.a5(u)},
ai:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.ay(u,u.length,0,[H.v(u,0)]);u.F();){t=u.d
if(t!=null)t.ai(a)}this.e=!1},
$ai:function(){return[M.aI]},
$aa6:function(){return[M.aI]},
$iaI:1}
M.dJ.prototype={
gv:function(){var u=this.f
if(u==null){u=D.Q()
this.f=u}return u},
a5:function(a){var u
H.e(a,"$iz")
u=this.f
if(u!=null)u.I(a)},
bd:function(){return this.a5(null)},
sbk:function(a){var u,t
if(a==null)a=new X.hw()
u=this.a
if(u!==a){if(u!=null)u.gv().G(0,this.ga4())
t=this.a
this.a=a
a.gv().h(0,this.ga4())
u=new D.M("camera",t,this.a,this,[X.c0])
u.b=!0
this.a5(u)}},
sbs:function(a,b){var u,t
if(b==null)b=X.lp(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gv().G(0,this.ga4())
t=this.b
this.b=b
b.gv().h(0,this.ga4())
u=new D.M("target",t,this.b,this,[X.cZ])
u.b=!0
this.a5(u)}},
sbt:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gv().G(0,this.ga4())
t=this.c
this.c=a
if(a!=null)a.gv().h(0,this.ga4())
u=new D.M("technique",t,this.c,this,[O.bS])
u.b=!0
this.a5(u)}},
ai:function(a){a.dh(this.c)
this.b.a7(a)
this.a.a7(a)
this.d.aw(0,a)
this.d.ai(a)
this.a.aT(a)
this.b.toString
a.dg()},
$iaI:1}
M.dO.prototype={
a5:function(a){var u
H.e(a,"$iz")
u=this.x
if(u!=null)u.I(a)},
bd:function(){return this.a5(null)},
i8:function(a,b){var u,t,s,r,q,p,o,n
u=E.as
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.ga4(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.D)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.c5()
n.sal(null)
n.sb1(null)
n.c=null
n.d=0
o.z=n}H.n(s,r)
if(n.a==null)n.sal(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bN(a,b,this,[u])
u.b=!0
this.a5(u)},
ia:function(a,b){var u,t,s
u=E.as
H.k(b,"$ii",[u],"$ai")
for(t=b.gY(b),s=this.ga4();t.F();)t.gM(t).gv().G(0,s)
u=new D.bO(a,b,this,[u])
u.b=!0
this.a5(u)},
sbk:function(a){var u,t
if(a==null)a=X.mj(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gv().G(0,this.ga4())
t=this.a
this.a=a
a.gv().h(0,this.ga4())
u=new D.M("camera",t,this.a,this,[X.c0])
u.b=!0
this.a5(u)}},
sbs:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gv().G(0,this.ga4())
t=this.b
this.b=b
b.gv().h(0,this.ga4())
u=new D.M("target",t,this.b,this,[X.cZ])
u.b=!0
this.a5(u)}},
sbt:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gv().G(0,this.ga4())
t=this.c
this.c=a
if(a!=null)a.gv().h(0,this.ga4())
u=new D.M("technique",t,this.c,this,[O.bS])
u.b=!0
this.a5(u)}},
gv:function(){var u=this.x
if(u==null){u=D.Q()
this.x=u}return u},
ai:function(a){var u
a.dh(this.c)
this.b.a7(a)
this.a.a7(a)
u=this.c
if(u!=null)u.aw(0,a)
for(u=this.d.a,u=new J.ay(u,u.length,0,[H.v(u,0)]);u.F();)u.d.aw(0,a)
for(u=this.d.a,u=new J.ay(u,u.length,0,[H.v(u,0)]);u.F();)u.d.ai(a)
this.a.toString
a.cy.aR()
a.db.aR()
this.b.toString
a.dg()},
shp:function(a,b){this.d=H.k(b,"$ia6",[E.as],"$aa6")},
$iaI:1}
M.aI.prototype={}
A.dD.prototype={}
A.fN.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
kB:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
C.b.eG(r.a,r.c)}},
eB:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
C.b.eC(r.a,r.c)}}}
A.e5.prototype={
fZ:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.an("")
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
a6.jE(u)
a6.jL(u)
a6.jF(u)
a6.jT(u)
a6.jU(u)
a6.jN(u)
a6.jY(u)
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
u=new P.an("")
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
q.jI(u)
q.jD(u)
q.jG(u)
q.jJ(u)
q.jR(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.jP(u)
q.jQ(u)}q.jM(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=q.y
if(l!==C.d){m+="uniform float alpha;\n"
u.a=m
if(l!==C.j){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.i){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.h){m+="uniform samplerCube alphaTxt;\n"
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
case C.i:m+="   if(nullAlphaTxt > 0) return alpha;\n"
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+="   if (a <= 0.000001) discard;\n"
u.a=m
m+="   return a;\n"
u.a=m
break
case C.h:m+="   if(nullAlphaTxt > 0) return alpha;\n"
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
q.jH(u)
q.jO(u)
q.jS(u)
q.jV(u)
q.jW(u)
q.jX(u)
q.jK(u)}m=u.a+="// === Main ===\n"
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
this.fa(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a6.fr)this.id=H.l(this.y.q(0,"invViewMat"),"$iaD")
if(t)this.dy=H.l(this.y.q(0,"objMat"),"$iaD")
if(r)this.fr=H.l(this.y.q(0,"viewObjMat"),"$iaD")
this.fy=H.l(this.y.q(0,"projViewObjMat"),"$iaD")
if(a6.x2)this.k1=H.l(this.y.q(0,"txt2DMat"),"$id4")
if(a6.y1)this.k2=H.l(this.y.q(0,"txtCubeMat"),"$iaD")
if(a6.y2)this.k3=H.l(this.y.q(0,"colorMat"),"$iaD")
this.shl(H.d([],[A.aD]))
t=a6.aE
if(t>0){this.k4=H.e(this.y.q(0,"bendMatCount"),"$iR")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.r(P.t("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.l(g,"$iaD"))}}t=a6.a
if(t!==C.d){this.r2=H.l(this.y.q(0,"emissionClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.i:this.rx=H.l(this.y.q(0,"emissionTxt"),"$iat")
this.x1=H.l(this.y.q(0,"nullEmissionTxt"),"$iR")
break
case C.h:this.ry=H.l(this.y.q(0,"emissionTxt"),"$iao")
this.x1=H.l(this.y.q(0,"nullEmissionTxt"),"$iR")
break}}t=a6.b
if(t!==C.d){this.x2=H.l(this.y.q(0,"ambientClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.i:this.y1=H.l(this.y.q(0,"ambientTxt"),"$iat")
this.aE=H.l(this.y.q(0,"nullAmbientTxt"),"$iR")
break
case C.h:this.y2=H.l(this.y.q(0,"ambientTxt"),"$iao")
this.aE=H.l(this.y.q(0,"nullAmbientTxt"),"$iR")
break}}t=a6.c
if(t!==C.d){this.at=H.l(this.y.q(0,"diffuseClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.i:this.bK=H.l(this.y.q(0,"diffuseTxt"),"$iat")
this.bL=H.l(this.y.q(0,"nullDiffuseTxt"),"$iR")
break
case C.h:this.eH=H.l(this.y.q(0,"diffuseTxt"),"$iao")
this.bL=H.l(this.y.q(0,"nullDiffuseTxt"),"$iR")
break}}t=a6.d
if(t!==C.d){this.bM=H.l(this.y.q(0,"invDiffuseClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.i:this.eI=H.l(this.y.q(0,"invDiffuseTxt"),"$iat")
this.bN=H.l(this.y.q(0,"nullInvDiffuseTxt"),"$iR")
break
case C.h:this.eJ=H.l(this.y.q(0,"invDiffuseTxt"),"$iao")
this.bN=H.l(this.y.q(0,"nullInvDiffuseTxt"),"$iR")
break}}t=a6.e
if(t!==C.d){this.bQ=H.l(this.y.q(0,"shininess"),"$ia3")
this.bO=H.l(this.y.q(0,"specularClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.i:this.eK=H.l(this.y.q(0,"specularTxt"),"$iat")
this.bP=H.l(this.y.q(0,"nullSpecularTxt"),"$iR")
break
case C.h:this.eL=H.l(this.y.q(0,"specularTxt"),"$iao")
this.bP=H.l(this.y.q(0,"nullSpecularTxt"),"$iR")
break}}switch(a6.f){case C.d:break
case C.j:break
case C.i:this.eM=H.l(this.y.q(0,"bumpTxt"),"$iat")
this.bR=H.l(this.y.q(0,"nullBumpTxt"),"$iR")
break
case C.h:this.eN=H.l(this.y.q(0,"bumpTxt"),"$iao")
this.bR=H.l(this.y.q(0,"nullBumpTxt"),"$iR")
break}if(a6.dy){this.eO=H.l(this.y.q(0,"envSampler"),"$iao")
this.eP=H.l(this.y.q(0,"nullEnvTxt"),"$iR")
t=a6.r
if(t!==C.d){this.bS=H.l(this.y.q(0,"reflectClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.i:this.eQ=H.l(this.y.q(0,"reflectTxt"),"$iat")
this.bT=H.l(this.y.q(0,"nullReflectTxt"),"$iR")
break
case C.h:this.eR=H.l(this.y.q(0,"reflectTxt"),"$iao")
this.bT=H.l(this.y.q(0,"nullReflectTxt"),"$iR")
break}}t=a6.x
if(t!==C.d){this.bU=H.l(this.y.q(0,"refraction"),"$ia3")
this.bV=H.l(this.y.q(0,"refractClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.i:this.eS=H.l(this.y.q(0,"refractTxt"),"$iat")
this.bW=H.l(this.y.q(0,"nullRefractTxt"),"$iR")
break
case C.h:this.eT=H.l(this.y.q(0,"refractTxt"),"$iao")
this.bW=H.l(this.y.q(0,"nullRefractTxt"),"$iR")
break}}}t=a6.y
if(t!==C.d){this.bX=H.l(this.y.q(0,"alpha"),"$ia3")
switch(t){case C.d:break
case C.j:break
case C.i:this.eU=H.l(this.y.q(0,"alphaTxt"),"$iat")
this.bY=H.l(this.y.q(0,"nullAlphaTxt"),"$iR")
break
case C.h:this.eV=H.l(this.y.q(0,"alphaTxt"),"$iao")
this.bY=H.l(this.y.q(0,"nullAlphaTxt"),"$iR")
break}}this.sh8(H.d([],[A.d3]))
this.sh9(H.d([],[A.d5]))
this.sha(H.d([],[A.d6]))
this.shb(H.d([],[A.d7]))
this.shc(H.d([],[A.d8]))
this.shd(H.d([],[A.d9]))
if(a6.k2){t=a6.z
if(t>0){this.eW=H.e(this.y.q(0,"dirLightCount"),"$iR")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(g,"$iO")
s=this.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iO")
s=this.cZ;(s&&C.a).h(s,new A.d3(h,g,f))}}t=a6.Q
if(t>0){this.eX=H.e(this.y.q(0,"pntLightCount"),"$iR")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(g,"$iO")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iO")
s=this.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iO")
s=this.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$ia3")
s=this.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$ia3")
s=this.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$ia3")
s=this.d_;(s&&C.a).h(s,new A.d5(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.eY=H.e(this.y.q(0,"spotLightCount"),"$iR")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(g,"$iO")
s=this.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iO")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iO")
s=this.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$iO")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$ia3")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$ia3")
s=this.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a,"$ia3")
s=this.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a0,"$ia3")
s=this.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a1,"$ia3")
s=this.d0;(s&&C.a).h(s,new A.d6(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.eZ=H.e(this.y.q(0,"txtDirLightCount"),"$iR")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(g,"$iO")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iO")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iO")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$iO")
s=this.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$iO")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$iR")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a,"$iat")
s=this.d1;(s&&C.a).h(s,new A.d7(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.f_=H.e(this.y.q(0,"txtPntLightCount"),"$iR")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(g,"$iO")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iO")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$id4")
s=this.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$iO")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$iR")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$ia3")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a,"$ia3")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a0,"$ia3")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a1,"$iao")
s=this.d2;(s&&C.a).h(s,new A.d8(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.f0=H.e(this.y.q(0,"txtSpotLightCount"),"$iR")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(g,"$iO")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iO")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iO")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$iO")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$iO")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$iR")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a,"$iO")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a0,"$ia3")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a1,"$ia3")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a2,"$ia3")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a3,"$ia3")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a4,"$ia3")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a5,"$iat")
s=this.d3;(s&&C.a).h(s,new A.d9(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
as:function(a,b,c){C.b.V(b.a,b.d,1)},
am:function(a,b,c){if(c==null||c.d<6)C.b.V(b.a,b.d,1)
else{a.dD(c)
C.b.V(b.a,b.d,0)}},
shl:function(a){this.r1=H.k(a,"$ib",[A.aD],"$ab")},
sh8:function(a){this.cZ=H.k(a,"$ib",[A.d3],"$ab")},
sh9:function(a){this.d_=H.k(a,"$ib",[A.d5],"$ab")},
sha:function(a){this.d0=H.k(a,"$ib",[A.d6],"$ab")},
shb:function(a){this.d1=H.k(a,"$ib",[A.d7],"$ab")},
shc:function(a){this.d2=H.k(a,"$ib",[A.d8],"$ab")},
shd:function(a){this.d3=H.k(a,"$ib",[A.d9],"$ab")}}
A.hU.prototype={
jE:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.aE+"];\n"
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
jL:function(a){var u
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
jF:function(a){var u
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
jT:function(a){var u,t
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
jU:function(a){var u,t
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
jN:function(a){var u
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
jY:function(a){var u
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
u+="uniform int null"+(c[0].toUpperCase()+C.c.ax(c,1))+"Txt;\n"
a.a=u
if(b===C.i)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
jI:function(a){var u,t
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
case C.i:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
jD:function(a){var u,t
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
case C.i:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
jG:function(a){var u,t
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
case C.i:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
jJ:function(a){var u,t
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
case C.i:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
jR:function(a){var u,t
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
case C.i:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
jM:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.d:break
case C.j:break
case C.i:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break
case C.h:u+="uniform samplerCube bumpTxt;\n"
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
case C.i:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
case C.h:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
jP:function(a){var u,t
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
case C.i:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
jQ:function(a){var u,t
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
case C.i:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
jH:function(a){var u,t
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
jO:function(a){var u,t
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
jS:function(a){var u,t
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
jV:function(a){var u,t,s
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
jW:function(a){var u,t,s
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
jX:function(a){var u,t,s
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
jK:function(a){var u
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
i:function(a){return this.at}}
A.d3.prototype={}
A.d7.prototype={}
A.d5.prototype={}
A.d8.prototype={}
A.d6.prototype={}
A.d9.prototype={}
A.cW.prototype={
dH:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
fa:function(a,b,c){var u,t,s
this.c=b
this.d=c
this.e=this.dY(b,35633)
this.f=this.dY(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.er(u,t,this.e)
C.b.er(u,this.r,this.f)
C.b.kU(u,this.r)
if(!H.lK(C.b.ca(u,this.r,35714))){s=C.b.fG(u,this.r)
C.b.ks(u,this.r)
H.r(P.t("Failed to link shader: "+H.m(s)))}this.jg()
this.ji()},
a7:function(a){C.b.dt(a.a,this.r)
this.x.kB()},
dY:function(a,b){var u,t,s
u=this.a
t=C.b.kq(u,b)
C.b.fR(u,t,a)
C.b.kk(u,t)
if(!H.lK(C.b.fI(u,t,35713))){s=C.b.fH(u,t)
C.b.kt(u,t)
throw H.c(P.t("Error compiling shader '"+H.m(t)+"': "+H.m(s)))}return t},
jg:function(){var u,t,s,r,q,p
u=H.d([],[A.dD])
t=this.a
s=H.ag(C.b.ca(t,this.r,35721))
if(typeof s!=="number")return H.G(s)
r=0
for(;r<s;++r){q=C.b.fB(t,this.r,r)
p=C.b.fD(t,this.r,q.name)
C.a.h(u,new A.dD(t,q.name,p))}this.x=new A.fN(u)},
ji:function(){var u,t,s,r,q,p
u=H.d([],[A.ez])
t=this.a
s=H.ag(C.b.ca(t,this.r,35718))
if(typeof s!=="number")return H.G(s)
r=0
for(;r<s;++r){q=C.b.fC(t,this.r,r)
p=C.b.fJ(t,this.r,q.name)
C.a.h(u,this.kr(q.type,q.size,q.name,p))}this.y=new A.jf(u)},
b_:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.R(u,t,b,c)
else return A.ly(u,t,b,a,c)},
hs:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.at(u,t,b,c)
else return A.ly(u,t,b,a,c)},
ht:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ao(u,t,b,c)
else return A.ly(u,t,b,a,c)},
bE:function(a,b){return new P.eR(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
kr:function(a,b,c,d){switch(a){case 5120:return this.b_(b,c,d)
case 5121:return this.b_(b,c,d)
case 5122:return this.b_(b,c,d)
case 5123:return this.b_(b,c,d)
case 5124:return this.b_(b,c,d)
case 5125:return this.b_(b,c,d)
case 5126:return new A.a3(this.a,this.r,c,d)
case 35664:return new A.ja(this.a,this.r,c,d)
case 35665:return new A.O(this.a,this.r,c,d)
case 35666:return new A.jd(this.a,this.r,c,d)
case 35667:return new A.jb(this.a,this.r,c,d)
case 35668:return new A.jc(this.a,this.r,c,d)
case 35669:return new A.je(this.a,this.r,c,d)
case 35674:return new A.jg(this.a,this.r,c,d)
case 35675:return new A.d4(this.a,this.r,c,d)
case 35676:return new A.aD(this.a,this.r,c,d)
case 35678:return this.hs(b,c,d)
case 35680:return this.ht(b,c,d)
case 35670:throw H.c(this.bE("BOOL",c))
case 35671:throw H.c(this.bE("BOOL_VEC2",c))
case 35672:throw H.c(this.bE("BOOL_VEC3",c))
case 35673:throw H.c(this.bE("BOOL_VEC4",c))
default:throw H.c(P.t("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.c4.prototype={
i:function(a){return this.b}}
A.em.prototype={}
A.ez.prototype={}
A.jf.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
q:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.S()},
kL:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.D)(u),++r)s+=u[r].i(0)+a
return s},
S:function(){return this.kL("\n")}}
A.R.prototype={
i:function(a){return"Uniform1i: "+H.m(this.c)}}
A.jb.prototype={
i:function(a){return"Uniform2i: "+H.m(this.c)}}
A.jc.prototype={
i:function(a){return"Uniform3i: "+H.m(this.c)}}
A.je.prototype={
i:function(a){return"Uniform4i: "+H.m(this.c)}}
A.j9.prototype={
i:function(a){return"Uniform1iv: "+H.m(this.c)},
sjB:function(a){this.e=H.k(a,"$ib",[P.o],"$ab")}}
A.a3.prototype={
i:function(a){return"Uniform1f: "+H.m(this.c)}}
A.ja.prototype={
i:function(a){return"Uniform2f: "+H.m(this.c)}}
A.O.prototype={
i:function(a){return"Uniform3f: "+H.m(this.c)}}
A.jd.prototype={
i:function(a){return"Uniform4f: "+H.m(this.c)}}
A.jg.prototype={
i:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.d4.prototype={
ar:function(a){var u=new Float32Array(H.cl(H.k(a,"$ib",[P.u],"$ab")))
C.b.fu(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.m(this.c)}}
A.aD.prototype={
ar:function(a){var u=new Float32Array(H.cl(H.k(a,"$ib",[P.u],"$ab")))
C.b.fv(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.m(this.c)}}
A.at.prototype={
i:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.ao.prototype={
dD:function(a){var u,t,s
u=a==null||a.d<6
t=this.a
s=this.d
if(u)C.b.V(t,s,0)
else C.b.V(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.kB.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.d9(u.b,b).d9(u.d.d9(u.c,b),c)
a.sa3(0,new V.W(t.a,t.b,t.c))
a.sav(t.t(0,Math.sqrt(t.D(t))))
u=1-b
s=1-c
a.ses(new V.aB(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
u=this.f
if(u!=null)u.$3(a,b,c)},
$S:5}
F.kL.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:33}
F.kN.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=6.283185307179586*b
t=Math.sin(u)
s=Math.cos(u)
r=-1+c*2
q=this.a.$2(b,c)
if(typeof q!=="number")return H.G(q)
t=-t*q
p=s*q
a.sa3(0,new V.W(t,p,r))
p=new V.B(t,p,r)
a.sav(p.t(0,Math.sqrt(p.D(p))))
a.ses(new V.aB(1-c,2+c,-1,-1))},
$S:5}
F.kO.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:20}
F.kP.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:20}
F.kX.prototype={
$3:function(a,b,c){var u,t,s,r
u=c*3.141592653589793
t=Math.sin(u)
s=b*6.283185307179586
r=new V.B(Math.cos(s)*t,Math.cos(u),Math.sin(s)*t)
s=r.t(0,Math.sqrt(r.D(r)))
a.sa3(0,new V.W(s.a,s.b,s.c))},
$S:5}
F.lb.prototype={
$2:function(a,b){return 0},
$S:33}
F.lc.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.G(u)
t=a.f
s=new V.B(t.a,t.b,t.c)
u=s.t(0,Math.sqrt(s.D(s))).w(0,this.b+u)
a.sa3(0,new V.W(u.a,u.b,u.c))},
$S:5}
F.le.prototype={
$1:function(a){return new V.W(Math.cos(a),Math.sin(a),0)},
$S:29}
F.kW.prototype={
$1:function(a){var u,t,s
u=this.a*a
t=2+Math.cos(u)
s=this.b*a
return new V.W(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:29}
F.kM.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.lW(t.$1(u),s)
s=J.nC(J.lW(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.B(s.a,s.b,s.c)
q=s.t(0,Math.sqrt(s.D(s)))
t=$.mD
if(t==null){t=new V.B(1,0,0)
$.mD=t
p=t}else p=t
t=q.aN(!J.N(q,p)?V.mH():p)
o=t.t(0,Math.sqrt(t.D(t)))
t=o.aN(q)
p=t.t(0,Math.sqrt(t.D(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.w(0,t*s)
s=o.w(0,m*s)
a.sa3(0,J.nB(r,new V.W(t.a-s.a,t.b-s.b,t.c-s.c)))},
$S:5}
F.ac.prototype={
bm:function(){if(!this.gbn()){C.a.G(this.a.a.d.b,this)
this.a.a.Z()}this.cD()
this.cE()
this.iZ()},
cI:function(a){this.a=a
C.a.h(a.d.b,this)},
cJ:function(a){this.b=a
C.a.h(a.d.c,this)},
jf:function(a){this.c=a
C.a.h(a.d.d,this)},
cD:function(){var u=this.a
if(u!=null){C.a.G(u.d.b,this)
this.a=null}},
cE:function(){var u=this.b
if(u!=null){C.a.G(u.d.c,this)
this.b=null}},
iZ:function(){var u=this.c
if(u!=null){C.a.G(u.d.d,this)
this.c=null}},
gbn:function(){return this.a==null||this.b==null||this.c==null},
hk:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.db()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.fb())return
return q.t(0,Math.sqrt(q.D(q)))},
ho:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.u(0,t)
u=new V.B(u.a,u.b,u.c)
q=u.t(0,Math.sqrt(u.D(u)))
u=r.u(0,t)
u=new V.B(u.a,u.b,u.c)
u=q.aN(u.t(0,Math.sqrt(u.D(u))))
return u.t(0,Math.sqrt(u.D(u)))},
cS:function(){if(this.d!=null)return!0
var u=this.hk()
if(u==null){u=this.ho()
if(u==null)return!1}this.d=u
this.a.a.Z()
return!0},
hj:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.db()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.fb())return
return q.t(0,Math.sqrt(q.D(q)))},
hn:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.P().a){u=m.u(0,p)
u=new V.B(u.a,u.b,u.c)
h=u.t(0,Math.sqrt(u.D(u)))
if(j.a-k.a<0)h=h.W(0)}else{g=(u-l.b)/i
u=m.u(0,p).w(0,g).p(0,p).u(0,s)
u=new V.B(u.a,u.b,u.c)
h=u.t(0,Math.sqrt(u.D(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.W(0)}u=this.d
if(u!=null){f=u.t(0,Math.sqrt(u.D(u)))
u=f.aN(h)
u=u.t(0,Math.sqrt(u.D(u))).aN(f)
h=u.t(0,Math.sqrt(u.D(u)))}return h},
cQ:function(){if(this.e!=null)return!0
var u=this.hj()
if(u==null){u=this.hn()
if(u==null)return!1}this.e=u
this.a.a.Z()
return!0},
aZ:function(a,b){var u=b.a
if(u==null)throw H.c(P.t("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.t("May not replace a face's vertex with a vertex attached to a different shape."))},
gkj:function(a){if(J.N(this.a,this.b))return!0
if(J.N(this.b,this.c))return!0
if(J.N(this.c,this.a))return!0
return!1},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
J:function(a){var u,t
if(this.gbn())return a+"disposed"
u=a+C.c.aq(J.ax(this.a.e),0)+", "+C.c.aq(J.ax(this.b.e),0)+", "+C.c.aq(J.ax(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
S:function(){return this.J("")}}
F.hk.prototype={}
F.iG.prototype={
b6:function(a,b,c){var u,t
u=b.a
u.a.a.E()
u=u.e
t=c.a
t.a.a.E()
if(u==t.e){u=b.b
u.a.a.E()
u=u.e
t=c.b
t.a.a.E()
if(u==t.e){u=b.c
u.a.a.E()
u=u.e
t=c.c
t.a.a.E()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.E()
u=u.e
t=c.b
t.a.a.E()
if(u==t.e){u=b.b
u.a.a.E()
u=u.e
t=c.c
t.a.a.E()
if(u==t.e){u=b.c
u.a.a.E()
u=u.e
t=c.a
t.a.a.E()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.E()
u=u.e
t=c.c
t.a.a.E()
if(u==t.e){u=b.b
u.a.a.E()
u=u.e
t=c.a
t.a.a.E()
if(u==t.e){u=b.c
u.a.a.E()
u=u.e
t=c.b
t.a.a.E()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.bv.prototype={
bm:function(){if(!this.gbn()){C.a.G(this.a.a.c.b,this)
this.a.a.Z()}this.cD()
this.cE()},
cI:function(a){this.a=a
C.a.h(a.c.b,this)},
cJ:function(a){this.b=a
C.a.h(a.c.c,this)},
cD:function(){var u=this.a
if(u!=null){C.a.G(u.c.b,this)
this.a=null}},
cE:function(){var u=this.b
if(u!=null){C.a.G(u.c.c,this)
this.b=null}},
gbn:function(){return this.a==null||this.b==null},
aZ:function(a,b){var u=b.a
if(u==null)throw H.c(P.t("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.t("May not replace a line's vertex with a vertex attached to a different shape."))},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
J:function(a){if(this.gbn())return a+"disposed"
return a+C.c.aq(J.ax(this.a.e),0)+", "+C.c.aq(J.ax(this.b.e),0)},
S:function(){return this.J("")}}
F.hF.prototype={}
F.j8.prototype={
b6:function(a,b,c){var u,t
u=b.a
u.a.a.E()
u=u.e
t=c.a
t.a.a.E()
if(u==t.e){u=b.b
u.a.a.E()
u=u.e
t=c.b
t.a.a.E()
return u==t.e}else{u=b.a
u.a.a.E()
u=u.e
t=c.b
t.a.a.E()
if(u==t.e){u=b.b
u.a.a.E()
u=u.e
t=c.a
t.a.a.E()
return u==t.e}else return!1}}}
F.bR.prototype={
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
J:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.aq(J.ax(u.e),0)},
S:function(){return this.J("")}}
F.ej.prototype={
gv:function(){var u=this.e
if(u==null){u=D.Q()
this.e=u}return u},
b7:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.E()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.D)(u),++r){q=u[r]
this.a.h(0,q.kl())}this.a.E()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.D)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.E()
n=n.e
if(typeof n!=="number")return n.p()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bR()
if(m.a==null)H.r(P.t("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.I(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.D)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.E()
n=n.e
if(typeof n!=="number")return n.p()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.E()
o=o.e
if(typeof o!=="number")return o.p()
o+=t
n=n.c
if(o>=n.length)return H.h(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.o3(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.D)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.E()
n=n.e
if(typeof n!=="number")return n.p()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.E()
o=o.e
if(typeof o!=="number")return o.p()
o+=t
n=n.c
if(o>=n.length)return H.h(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.E()
n=n.e
if(typeof n!=="number")return n.p()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.c6(k,j,h)}u=this.e
if(u!=null)u.aG(0)},
an:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.an()||!1
if(!this.a.an())t=!1
u=this.e
if(u!=null)u.aG(0)
return t},
kF:function(a,b,c){var u,t,s,r
u=this.a.c.length
for(t=c;t<u;++t){s=this.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
if(b.b6(0,a,r))return r}return},
kE:function(a,b){return this.kF(a,b,0)},
j2:function(a,b){var u,t,s,r,q,p
H.k(b,"$ib",[F.ab],"$ab")
this.a.h(0,a)
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.D)(b),++t){s=b[t]
for(;r=s.d,r.b.length+r.c.length+r.d.length>0;){r=r.j(0,0)
q=r.a
if(q==null||r.b==null||r.c==null)H.r(P.t("May not replace a face's vertex when the point has been disposed."))
if(J.N(q,s)){r.aZ(s,a)
q=r.a
if(q!=null){C.a.G(q.d.b,r)
r.a=null}r.a=a
C.a.h(a.d.b,r)
p=1}else p=0
if(J.N(r.b,s)){r.aZ(s,a)
q=r.b
if(q!=null){C.a.G(q.d.c,r)
r.b=null}r.b=a
C.a.h(a.d.c,r);++p}if(J.N(r.c,s)){r.aZ(s,a)
q=r.c
if(q!=null){C.a.G(q.d.d,r)
r.c=null}r.c=a
C.a.h(a.d.d,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.I(null)}}for(;r=s.c,r.b.length+r.c.length>0;){r=r.j(0,0)
q=r.a
if(q==null||r.b==null)H.r(P.t("May not replace a line's vertex when the point has been disposed."))
if(J.N(q,s)){r.aZ(s,a)
q=r.a
if(q!=null){C.a.G(q.c.b,r)
r.a=null}r.a=a
C.a.h(a.c.b,r)
p=1}else p=0
if(J.N(r.b,s)){r.aZ(s,a)
q=r.b
if(q!=null){C.a.G(q.c.c,r)
r.b=null}r.b=a
C.a.h(a.c.c,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.I(null)}}for(;r=s.b.b,r.length>0;){r=r[0]
q=r.a
if(q==null)H.r(P.t("May not replace a point's vertex when the point has been disposed."))
if(J.N(q,s)){if(a.a==null)H.r(P.t("May not replace a point's vertex with a vertex which is not attached to a shape."))
q=r.a
if(q!=null){C.a.G(q.b.b,r)
r.a=null}r.a=a
C.a.h(a.b.b,r)
p=1}else p=0
if(p>0){r=r.a.a.e
if(r!=null)r.I(null)}}this.a.G(0,s)}},
fe:function(a,b){var u,t,s,r,q,p,o,n
P.aE("FLAG 1\n")
u=this.e
if(u!=null)++u.d
P.aE("FLAG 2\n")
u=this.a.c
t=H.d(u.slice(0),[H.v(u,0)])
P.aE("FLAG 3\n")
for(u=[F.ab];t.length!==0;){s=C.a.gkH(t)
C.a.lf(t,0)
if(s!=null){r=H.d([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.D)(t),++p){o=t[p]
if(o!=null&&a.b6(0,s,o)){C.a.h(r,o)
C.a.G(t,o)}}if(r.length>1){n=b.b7(r)
if(n!=null){this.j2(n,r)
C.a.h(t,n)}}}}P.aE("FLAG 4\n")
this.a.E()
P.aE("FLAG 5\n")
this.c.c3()
P.aE("FLAG 6\n")
this.d.c3()
P.aE("FLAG 7\n")
this.b.lg()
P.aE("FLAG 8\n")
this.c.dl(new F.j8())
P.aE("FLAG 9\n")
this.d.dl(new F.iG())
P.aE("FLAG 10\n")
u=this.e
if(u!=null)u.aG(0)
P.aE("FLAG 11\n")},
k6:function(a){this.fe(new F.dc(),new F.ia())},
bH:function(){return this.k6(null)},
ey:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.b4()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bB().a)!==0)++r
if((s&$.bA().a)!==0)++r
if((s&$.bC().a)!==0)++r
if((s&$.bD().a)!==0)++r
if((s&$.dx().a)!==0)++r
if((s&$.dy().a)!==0)++r
if((s&$.cv().a)!==0)++r
if((s&$.bz().a)!==0)++r
q=a1.gdE(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.u
o=H.d(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.d(t,[Z.dF])
for(m=0,l=0;l<r;++l){k=a1.ka(l)
j=k.gdE(k)
C.a.n(n,l,new Z.dF(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.h(t,i)
h=t[i].kV(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.n(o,g,h[f]);++g}}m+=j}H.k(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.aD(t,34962,e)
C.b.ex(t,34962,new Float32Array(H.cl(o)),35044)
C.b.aD(t,34962,null)
d=new Z.cz(new Z.eH(34962,e),n,a1)
d.shH(H.d([],[Z.bM]))
if(this.b.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.E()
C.a.h(c,b.e)}a=Z.lB(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bM(0,c.length,a))}if(this.c.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.E()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.h(b,l)
b=b[l].b
b.a.a.E()
C.a.h(c,b.e)}a=Z.lB(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bM(1,c.length,a))}if(this.d.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.E()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.h(b,l)
b=b[l].b
b.a.a.E()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.h(b,l)
b=b[l].c
b.a.a.E()
C.a.h(c,b.e)}a=Z.lB(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bM(4,c.length,a))}return d},
i:function(a){var u=H.d([],[P.f])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.J("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.J("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.J("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.J("   "))}return C.a.m(u,"\n")},
b8:function(a){var u=this.e
if(u!=null)u.I(a)},
Z:function(){return this.b8(null)},
$ipV:1}
F.iz.prototype={
bF:function(a,b,c,d){var u=this.a
u.a.h(0,b)
u.a.h(0,c)
u.a.h(0,d)
return F.c6(b,c,d)},
em:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[F.ab],"$ab")
u=H.d([],[F.ac])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.h(a,p)
p=a[p]
if(q>=o)return H.h(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.c6(s,p,o))}}return u},
k0:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,"$ib",[F.ab],"$ab")
u=H.d([],[F.ac])
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
C.a.h(u,F.c6(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c6(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c6(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.c6(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
dl:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b6(0,p,n)){p.bm()
break}}}}},
c3:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=s.gkj(s)
if(t)s.bm()}},
an:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.D)(u),++r)if(!u[r].cS())s=!1
return s},
cR:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.D)(u),++r)if(!u[r].cQ())s=!1
return s},
i:function(a){return this.S()},
J:function(a){var u,t,s,r
u=H.d([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].J(a))
return C.a.m(u,"\n")},
S:function(){return this.J("")},
shz:function(a){this.b=H.k(a,"$ib",[F.ac],"$ab")}}
F.iA.prototype={
gl:function(a){return this.b.length},
dl:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b6(0,p,n)){p.bm()
break}}}}},
c3:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=J.N(s.a,s.b)
if(t)s.bm()}},
i:function(a){return this.S()},
J:function(a){var u,t,s,r
u=H.d([],[P.f])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.h(r,s)
C.a.h(u,r[s].J(a+(""+s+". ")))}return C.a.m(u,"\n")},
S:function(){return this.J("")},
shL:function(a){this.b=H.k(a,"$ib",[F.bv],"$ab")}}
F.iB.prototype={
gl:function(a){return this.b.length},
lg:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.G(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.I(null)}s=t.a
if(s!=null){C.a.G(s.b.b,t)
t.a=null}}}},
i:function(a){return this.S()},
J:function(a){var u,t,s,r
u=H.d([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].J(a))
return C.a.m(u,"\n")},
S:function(){return this.J("")},
scA:function(a){this.b=H.k(a,"$ib",[F.bR],"$ab")}}
F.ab.prototype={
cV:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.ci(this.cx,s,p,u,t,r,q,a,o)},
kl:function(){return this.cV(null)},
sa3:function(a,b){var u
if(!J.N(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Z()}},
sde:function(a){var u
a=a==null?null:a.t(0,Math.sqrt(a.D(a)))
if(!J.N(this.r,a)){this.r=a
u=this.a
if(u!=null)u.Z()}},
sev:function(a){var u
a=a==null?null:a.t(0,Math.sqrt(a.D(a)))
if(!J.N(this.x,a)){this.x=a
u=this.a
if(u!=null)u.Z()}},
sdq:function(a){var u
if(!J.N(this.y,a)){this.y=a
u=this.a
if(u!=null)u.Z()}},
sav:function(a){var u
if(!J.N(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Z()}},
sag:function(a,b){var u
if(!J.N(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.Z()}},
sfA:function(a,b){var u
if(this.ch!==b){this.ch=b
u=this.a
if(u!=null)u.Z()}},
ses:function(a){var u
if(!J.N(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.Z()}},
kV:function(a){var u,t
if(a.B(0,$.b4())){u=this.f
t=[P.u]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.B(0,$.bB())){u=this.r
t=[P.u]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.B(0,$.bA())){u=this.x
t=[P.u]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.B(0,$.bC())){u=this.y
t=[P.u]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.B(0,$.bD())){u=this.z
t=[P.u]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.B(0,$.dx())){u=this.Q
t=[P.u]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.B(0,$.dy())){u=this.Q
if(u==null)return H.d([1,1,1,1],[P.u])
else return u.dr(0)}else if(a.B(0,$.cv()))return H.d([this.ch],[P.u])
else if(a.B(0,$.bz())){u=this.cx
t=[P.u]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.u])},
cS:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.db()
this.d.O(0,new F.jF(u))
u=u.a
this.r=u.t(0,Math.sqrt(u.D(u)))
u=this.a
if(u!=null){u.Z()
u=this.a.e
if(u!=null)u.aG(0)}return!0},
cQ:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.db()
this.d.O(0,new F.jE(u))
u=u.a
this.x=u.t(0,Math.sqrt(u.D(u)))
u=this.a
if(u!=null){u.Z()
u=this.a.e
if(u!=null)u.aG(0)}return!0},
B:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
J:function(a){var u,t,s
u=H.d([],[P.f])
C.a.h(u,C.c.aq(J.ax(this.e),0))
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
C.a.h(u,V.V(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.m(u,", ")
return a+"{"+s+"}"},
S:function(){return this.J("")}}
F.jF.prototype={
$1:function(a){var u,t
H.e(a,"$iac")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:7}
F.jE.prototype={
$1:function(a){var u,t
H.e(a,"$iac")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:7}
F.jv.prototype={
E:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.h(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.c(P.t("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.Z()
return!0},
en:function(a,b,c,d,e,f,g,h,i){var u=F.ci(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bG:function(a,b,c,d,e,f){return this.en(a,null,b,c,null,d,e,f,0)},
k5:function(a,b,c,d,e,f){return this.en(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
G:function(a,b){var u,t
if(b==null)return!1
u=this.a
if(b.a!==u)return!1
if(b.b.b.length===0){t=b.c
if(t.b.length===0&&t.c.length===0){t=b.d
t=t.b.length===0&&t.c.length===0&&t.d.length===0}else t=!1}else t=!1
if(!t)throw H.c(P.t("May not remove a vertex without first making it empty."))
b.a=null
C.a.G(this.c,b)
u.Z()
this.b=!0
return!0},
an:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)u[s].cS()
return!0},
cR:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)u[s].cQ()
return!0},
kf:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.N(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.I(null)}}}}return!0},
i:function(a){return this.S()},
J:function(a){var u,t,s,r
this.E()
u=H.d([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].J(a))
return C.a.m(u,"\n")},
S:function(){return this.J("")},
sjC:function(a){this.c=H.k(a,"$ib",[F.ab],"$ab")}}
F.jw.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
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
O:function(a,b){H.n(b,{func:1,ret:-1,args:[F.ac]})
C.a.O(this.b,b)
C.a.O(this.c,new F.jx(this,b))
C.a.O(this.d,new F.jy(this,b))},
i:function(a){return this.S()},
J:function(a){var u,t,s,r
u=H.d([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].J(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].J(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].J(a))
return C.a.m(u,"\n")},
S:function(){return this.J("")},
shA:function(a){this.b=H.k(a,"$ib",[F.ac],"$ab")},
shB:function(a){this.c=H.k(a,"$ib",[F.ac],"$ab")},
shC:function(a){this.d=H.k(a,"$ib",[F.ac],"$ab")}}
F.jx.prototype={
$1:function(a){H.e(a,"$iac")
if(!J.N(a.a,this.a))this.b.$1(a)},
$S:7}
F.jy.prototype={
$1:function(a){var u
H.e(a,"$iac")
u=this.a
if(!J.N(a.a,u)&&!J.N(a.b,u))this.b.$1(a)},
$S:7}
F.jA.prototype={
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.h(u,s)
return u[s]}else{if(b<0)return H.h(u,b)
return u[b]}},
i:function(a){return this.S()},
J:function(a){var u,t,s,r
u=H.d([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].J(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].J(a))
return C.a.m(u,"\n")},
S:function(){return this.J("")},
shM:function(a){this.b=H.k(a,"$ib",[F.bv],"$ab")},
shN:function(a){this.c=H.k(a,"$ib",[F.bv],"$ab")}}
F.jB.prototype={}
F.dc.prototype={
b6:function(a,b,c){return J.N(b.f,c.f)}}
F.jC.prototype={}
F.jz.prototype={
b7:function(a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.k(a4,"$ib",[F.ab],"$ab")
for(u=a4.length,t=0,s=null,r=null,q=null,p=0,o=null,n=0,m=null,l=0,k=null,j=0,i=0,h=0;h<u;++h){g=a4[h]
f=g.f
if(f!=null){s=s==null?f:new V.W(s.a+f.a,s.b+f.b,s.c+f.c);++t}e=g.r
if(e!=null)r=r==null?e:new V.B(r.a+e.a,r.b+e.b,r.c+e.c)
d=g.x
if(d!=null)q=q==null?d:new V.B(q.a+d.a,q.b+d.b,q.c+d.c)
c=g.y
if(c!=null){m=m==null?c:new V.a1(m.a+c.a,m.b+c.b);++n}b=g.z
if(b!=null){k=k==null?b:new V.B(k.a+b.a,k.b+b.b,k.c+b.c);++l}a=g.Q
if(a!=null){a0=a.a
a1=a.b
a2=a.c
a=a.d
if(o==null){a=[a0,a1,a2,a]
o=new V.b3(a[0],a[1],a[2],a[3])}else{a=[a0,a1,a2,a]
a0=a[0]
a1=a[1]
a2=a[2]
a=a[3]
o=new V.b3(o.a+a0,o.b+a1,o.c+a2,o.d+a)}++p}a=g.ch
if(typeof a!=="number")return H.G(a)
i+=a;++j}a3=F.ci(null,null,null,null,null,null,null,null,0)
if(t<=0||s==null)a3.sa3(0,null)
else a3.sa3(0,s.t(0,t))
if(r==null)a3.sde(null)
else a3.sde(r.t(0,Math.sqrt(r.D(r))))
if(q==null)a3.sev(null)
else a3.sev(q.t(0,Math.sqrt(q.D(q))))
if(n<=0||m==null)a3.sdq(null)
else a3.sdq(m.t(0,n))
if(l<=0||k==null)a3.sav(null)
else a3.sav(k.t(0,l))
if(p<=0||o==null)a3.sag(0,null)
else{u=o.t(0,p)
u=[u.a,u.b,u.c,u.d]
a=u[0]
a0=u[1]
a1=u[2]
u=u[3]
if(a<0)a=0
else if(a>1)a=1
if(a0<0)a0=0
else if(a0>1)a0=1
if(a1<0)a1=0
else if(a1>1)a1=1
if(u<0)u=0
else if(u>1)u=1
a3.sag(0,new V.ai(a,a0,a1,u))}if(j<=0)a3.sfA(0,0)
else a3.sfA(0,i/j)
return a3}}
F.ia.prototype={
b7:function(a){var u,t,s,r
H.k(a,"$ib",[F.ab],"$ab")
u=V.db()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.B(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.t(0,Math.sqrt(u.D(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.D)(a),++s)a[s].sde(u)
return}}
F.jD.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.S()},
J:function(a){var u,t,s,r
u=H.d([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].J(a))
return C.a.m(u,"\n")},
S:function(){return this.J("")},
scA:function(a){this.b=H.k(a,"$ib",[F.bR],"$ab")}}
O.e4.prototype={
gv:function(){var u=this.dy
if(u==null){u=D.Q()
this.dy=u}return u},
X:function(a){var u
H.e(a,"$iz")
u=this.dy
if(u!=null)u.I(a)},
be:function(){return this.X(null)},
ed:function(a){H.e(a,"$iz")
this.a=null
this.X(a)},
j5:function(){return this.ed(null)},
i0:function(a,b){var u=V.az
u=new D.bN(a,H.k(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.X(u)},
i2:function(a,b){var u=V.az
u=new D.bO(a,H.k(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.X(u)},
dV:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.f.aa(u.e.length+3,4)*4
s=C.f.aa(u.f.length+3,4)*4
r=C.f.aa(u.r.length+3,4)*4
q=C.f.aa(u.x.length+3,4)*4
p=C.f.aa(u.y.length+3,4)*4
o=C.f.aa(u.z.length+3,4)*4
n=C.f.aa(this.e.a.length+3,4)*4
u=this.f.c
m=this.r.c
l=this.x.c
k=this.y.c
j=this.z.c
i=this.Q.c
h=this.cx.c
g=this.cy.c
f=this.db.c
e="MaterialLight_"+C.f.i(u.a)+C.f.i(m.a)+C.f.i(l.a)+C.f.i(k.a)+C.f.i(j.a)+C.f.i(i.a)+C.f.i(h.a)+C.f.i(g.a)+C.f.i(f.a)
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
a2=u===C.i||m===C.i||l===C.i||k===C.i||j===C.i||i===C.i||h===C.i||g===C.i||f===C.i
a3=u===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h||h===C.h||g===C.h||f===C.h
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.b4()
if(a0){b=$.bB()
a7=new Z.bl(a7.a|b.a)}if(a1){b=$.bA()
a7=new Z.bl(a7.a|b.a)}if(a2){b=$.bC()
a7=new Z.bl(a7.a|b.a)}if(a3){b=$.bD()
a7=new Z.bl(a7.a|b.a)}if(a5){b=$.bz()
a7=new Z.bl(a7.a|b.a)}return new A.hU(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
a2:function(a,b){H.k(a,"$ib",[T.d0],"$ab")
if(b!=null)if(!C.a.a0(a,b)){b.a=a.length
C.a.h(a,b)}},
aw:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.ay(u,u.length,0,[H.v(u,0)]);u.F();){t=u.d
t.toString
s=$.ju
if(s==null){s=new V.B(0,0,1)
$.ju=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.ds(s)}}},
fm:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.dV()
t=H.e(a2.fr.j(0,u.at),"$ie5")
if(t==null){t=A.o9(u,a2.a)
a2.ep(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bK
u=a3.e
if(!(u instanceof Z.cz)){a3.e=null
u=null}if(u==null||!u.d.B(0,r)){u=s.r1
if(u)a3.d.an()
q=s.r2
if(q){p=a3.d
o=p.e
if(o!=null)++o.d
p.d.cR()
p.a.cR()
p=p.e
if(p!=null)p.aG(0)}p=s.ry
if(p){o=a3.d
n=o.e
if(n!=null)++n.d
o.a.kf()
o=o.e
if(o!=null)o.aG(0)}m=a3.d.ey(new Z.eI(a2.a),r)
m.aO($.b4()).e=this.a.Q.c
if(u)m.aO($.bB()).e=this.a.cx.c
if(q)m.aO($.bA()).e=this.a.ch.c
if(s.rx)m.aO($.bC()).e=this.a.cy.c
if(p)m.aO($.bD()).e=this.a.db.c
if(s.x1)m.aO($.bz()).e=this.a.dx.c
a3.e=m}u=T.d0
l=H.d([],[u])
this.a.a7(a2)
if(s.fx){q=this.a
p=a2.dx
p=p.ga8(p)
q=q.dy
q.toString
q.ar(p.aj(0,!0))}if(s.fy){q=this.a
p=a2.cx
if(p==null){p=a2.db
p=p.ga8(p)
o=a2.dx
o=p.w(0,o.ga8(o))
a2.cx=o
p=o}q=q.fr
q.toString
q.ar(p.aj(0,!0))}q=this.a
p=a2.ch
if(p==null){p=a2.gld()
o=a2.dx
o=p.w(0,o.ga8(o))
a2.ch=o
p=o}q=q.fy
q.toString
q.ar(p.aj(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.ar(C.r.aj(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.ar(C.r.aj(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.ar(C.r.aj(p,!0))}if(s.aE>0){k=this.e.a.length
q=this.a.k4
C.b.V(q.a,q.d,k)
for(q=[P.u],j=0;j<k;++j){p=this.a
o=this.e.a
if(j>=o.length)return H.h(o,j)
o=o[j]
p.toString
H.e(o,"$iaz")
p=p.r1
if(j>=p.length)return H.h(p,j)
p=p[j]
i=new Float32Array(H.cl(H.k(o.aj(0,!0),"$ib",q,"$ab")))
C.b.fv(p.a,p.d,!1,i)}}switch(s.a){case C.d:break
case C.j:q=this.a
p=this.f.f
q=q.r2
q.toString
o=p.a
n=p.b
p=p.c
C.b.C(q.a,q.d,o,n,p)
break
case C.i:this.a2(l,this.f.d)
q=this.a
p=this.f.d
q.as(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break
case C.h:this.a2(l,this.f.e)
q=this.a
p=this.f.e
q.am(q.ry,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break}if(s.k2){switch(s.b){case C.d:break
case C.j:q=this.a
p=this.r.f
q=q.x2
q.toString
o=p.a
n=p.b
p=p.c
C.b.C(q.a,q.d,o,n,p)
break
case C.i:this.a2(l,this.r.d)
q=this.a
p=this.r.d
q.as(q.y1,q.aE,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break
case C.h:this.a2(l,this.r.e)
q=this.a
p=this.r.e
q.am(q.y2,q.aE,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break}switch(s.c){case C.d:break
case C.j:q=this.a
p=this.x.f
q=q.at
q.toString
o=p.a
n=p.b
p=p.c
C.b.C(q.a,q.d,o,n,p)
break
case C.i:this.a2(l,this.x.d)
q=this.a
p=this.x.d
q.as(q.bK,q.bL,p)
p=this.a
q=this.x.f
p=p.at
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break
case C.h:this.a2(l,this.x.e)
q=this.a
p=this.x.e
q.am(q.eH,q.bL,p)
p=this.a
q=this.x.f
p=p.at
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break}switch(s.d){case C.d:break
case C.j:q=this.a
p=this.y.f
q=q.bM
q.toString
o=p.a
n=p.b
p=p.c
C.b.C(q.a,q.d,o,n,p)
break
case C.i:this.a2(l,this.y.d)
q=this.a
p=this.y.d
q.as(q.eI,q.bN,p)
p=this.a
q=this.y.f
p=p.bM
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break
case C.h:this.a2(l,this.y.e)
q=this.a
p=this.y.e
q.am(q.eJ,q.bN,p)
p=this.a
q=this.y.f
p=p.bM
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break}switch(s.e){case C.d:break
case C.j:q=this.a
p=this.z.f
q=q.bO
q.toString
o=p.a
n=p.b
p=p.c
C.b.C(q.a,q.d,o,n,p)
p=this.a
n=this.z.ch
p=p.bQ
C.b.P(p.a,p.d,n)
break
case C.i:this.a2(l,this.z.d)
q=this.a
p=this.z.d
q.as(q.eK,q.bP,p)
p=this.a
q=this.z.f
p=p.bO
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bQ
C.b.P(q.a,q.d,n)
break
case C.h:this.a2(l,this.z.e)
q=this.a
p=this.z.e
q.am(q.eL,q.bP,p)
p=this.a
q=this.z.f
p=p.bO
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bQ
C.b.P(q.a,q.d,n)
break}if(s.z>0){k=this.dx.e.length
q=this.a.eW
C.b.V(q.a,q.d,k)
q=a2.db
h=q.ga8(q)
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.D)(q),++f){e=q[f]
o=this.a.cZ
if(g>=o.length)return H.h(o,g)
d=o[g]
o=h.ds(e.a)
n=o.a
c=o.b
b=o.c
b=o.t(0,Math.sqrt(n*n+c*c+b*b))
c=d.b
n=b.a
o=b.b
b=b.c
C.b.C(c.a,c.d,n,o,b)
b=e.c
o=d.c
C.b.C(o.a,o.d,b.a,b.b,b.c);++g}}if(s.Q>0){k=this.dx.f.length
q=this.a.eX
C.b.V(q.a,q.d,k)
q=a2.db
h=q.ga8(q)
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.D)(q),++f){e=q[f]
o=this.a.d_
if(g>=o.length)return H.h(o,g)
d=o[g]
o=e.gbr(e)
n=d.b
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=h.bw(e.gbr(e))
n=d.c
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gag(e)
n=d.d
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gcL()
n=d.e
C.b.P(n.a,n.d,o)
o=e.gcM()
n=d.f
C.b.P(n.a,n.d,o)
o=e.gcN()
n=d.r
C.b.P(n.a,n.d,o);++g}}if(s.ch>0){k=this.dx.r.length
q=this.a.eY
C.b.V(q.a,q.d,k)
q=a2.db
h=q.ga8(q)
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.D)(q),++f){e=q[f]
o=this.a.d0
if(g>=o.length)return H.h(o,g)
d=o[g]
o=e.gbr(e)
n=d.b
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gcX(e).lI()
n=d.c
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=h.bw(e.gbr(e))
n=d.d
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gag(e)
n=d.e
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.glE()
n=d.f
C.b.P(n.a,n.d,o)
o=e.glD()
n=d.r
C.b.P(n.a,n.d,o)
o=e.gcL()
n=d.x
C.b.P(n.a,n.d,o)
o=e.gcM()
n=d.y
C.b.P(n.a,n.d,o)
o=e.gcN()
n=d.z
C.b.P(n.a,n.d,o);++g}}if(s.cx>0){k=this.dx.x.length
q=this.a.eZ
C.b.V(q.a,q.d,k)
q=a2.db
h=q.ga8(q)
for(q=this.dx.x,p=q.length,o=[u],g=0,f=0;f<q.length;q.length===p||(0,H.D)(q),++f){e=q[f]
n=this.a.d1
if(g>=n.length)return H.h(n,g)
d=n[g]
n=e.gbu()
H.k(l,"$ib",o,"$ab")
if(!C.a.a0(l,n)){n.a=l.length
C.a.h(l,n)}n=e.gcX(e)
c=d.d
C.b.C(c.a,c.d,n.a,n.b,n.c)
n=e.gc7()
c=d.b
C.b.C(c.a,c.d,n.a,n.b,n.c)
n=e.gc4(e)
c=d.c
C.b.C(c.a,c.d,n.a,n.b,n.c)
n=h.ds(e.gcX(e))
c=n.a
b=n.b
a=n.c
a=n.t(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
n=a.b
a=a.c
C.b.C(b.a,b.d,c,n,a)
a=e.gag(e)
n=d.f
C.b.C(n.a,n.d,a.a,a.b,a.c)
a=e.gbu()
n=a.gc_(a)
if(!n){n=d.x
C.b.V(n.a,n.d,1)}else{n=d.r
c=a.gc_(a)
b=n.a
n=n.d
if(!c)C.b.V(b,n,0)
else C.b.V(b,n,a.gkO(a))
n=d.x
C.b.V(n.a,n.d,0)}++g}}if(s.cy>0){k=this.dx.y.length
q=this.a.f_
C.b.V(q.a,q.d,k)
q=a2.db
h=q.ga8(q)
for(q=this.dx.y,p=q.length,o=[P.u],n=[u],g=0,f=0;f<q.length;q.length===p||(0,H.D)(q),++f){e=q[f]
c=this.a.d2
if(g>=c.length)return H.h(c,g)
d=c[g]
c=e.gbu()
H.k(l,"$ib",n,"$ab")
if(!C.a.a0(l,c)){c.a=l.length
C.a.h(l,c)}a0=h.w(0,e.ga8(e))
c=e.ga8(e)
b=$.cT
if(b==null){b=new V.W(0,0,0)
$.cT=b}b=c.bw(b)
c=d.b
C.b.C(c.a,c.d,b.a,b.b,b.c)
c=$.cT
if(c==null){c=new V.W(0,0,0)
$.cT=c}c=a0.bw(c)
b=d.c
C.b.C(b.a,b.d,c.a,c.b,c.c)
c=a0.d8(0)
b=d.d
i=new Float32Array(H.cl(H.k(new V.e6(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).aj(0,!0),"$ib",o,"$ab")))
C.b.fu(b.a,b.d,!1,i)
b=e.gag(e)
c=d.e
C.b.C(c.a,c.d,b.a,b.b,b.c)
b=e.gbu()
c=b.gc_(b)
if(!c){c=d.r
C.b.V(c.a,c.d,1)}else{c=d.f
a=b.d
a1=c.a
c=c.d
if(a<6)C.b.V(a1,c,0)
else C.b.V(a1,c,b.a)
c=d.r
C.b.V(c.a,c.d,0)}c=e.gcL()
b=d.x
C.b.P(b.a,b.d,c)
c=e.gcM()
b=d.y
C.b.P(b.a,b.d,c)
c=e.gcN()
b=d.z
C.b.P(b.a,b.d,c);++g}}if(s.db>0){k=this.dx.z.length
q=this.a.f0
C.b.V(q.a,q.d,k)
q=a2.db
h=q.ga8(q)
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.D)(q),++f){e=q[f]
o=this.a.d3
if(g>=o.length)return H.h(o,g)
d=o[g]
o=e.gbu()
H.k(l,"$ib",u,"$ab")
if(!C.a.a0(l,o)){o.a=l.length
C.a.h(l,o)}o=e.gbr(e)
n=d.b
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gcX(e)
n=d.c
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gc7()
n=d.d
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gc4(e)
n=d.e
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=h.bw(e.gbr(e))
n=d.f
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gbu()
n=o.gc_(o)
if(!n){o=d.x
C.b.V(o.a,o.d,1)}else{n=d.r
c=o.gc_(o)
b=n.a
n=n.d
if(!c)C.b.V(b,n,0)
else C.b.V(b,n,o.gkO(o))
o=d.x
C.b.V(o.a,o.d,0)}o=e.gag(e)
n=d.y
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.glJ()
n=d.z
C.b.P(n.a,n.d,o)
o=e.glK()
n=d.Q
C.b.P(n.a,n.d,o)
o=e.gcL()
n=d.ch
C.b.P(n.a,n.d,o)
o=e.gcM()
n=d.cx
C.b.P(n.a,n.d,o)
o=e.gcN()
n=d.cy
C.b.P(n.a,n.d,o);++g}}}switch(s.f){case C.d:break
case C.j:break
case C.i:this.a2(l,this.Q.d)
u=this.a
q=this.Q.d
u.as(u.eM,u.bR,q)
break
case C.h:this.a2(l,this.Q.e)
u=this.a
q=this.Q.e
u.am(u.eN,u.bR,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db
q=q.ga8(q).d8(0)
a2.Q=q}u=u.id
u.toString
u.ar(q.aj(0,!0))}if(s.dy){this.a2(l,this.ch)
u=this.a
q=this.ch
u.am(u.eO,u.eP,q)
switch(s.r){case C.d:break
case C.j:u=this.a
q=this.cx.f
u=u.bS
u.toString
p=q.a
o=q.b
q=q.c
C.b.C(u.a,u.d,p,o,q)
break
case C.i:this.a2(l,this.cx.d)
u=this.a
q=this.cx.d
u.as(u.eQ,u.bT,q)
q=this.a
u=this.cx.f
q=q.bS
q.toString
p=u.a
o=u.b
u=u.c
C.b.C(q.a,q.d,p,o,u)
break
case C.h:this.a2(l,this.cx.e)
u=this.a
q=this.cx.e
u.am(u.eR,u.bT,q)
q=this.a
u=this.cx.f
q=q.bS
q.toString
p=u.a
o=u.b
u=u.c
C.b.C(q.a,q.d,p,o,u)
break}switch(s.x){case C.d:break
case C.j:u=this.a
q=this.cy.f
u=u.bV
u.toString
p=q.a
o=q.b
q=q.c
C.b.C(u.a,u.d,p,o,q)
q=this.a
o=this.cy.ch
q=q.bU
C.b.P(q.a,q.d,o)
break
case C.i:this.a2(l,this.cy.d)
u=this.a
q=this.cy.d
u.as(u.eS,u.bW,q)
q=this.a
u=this.cy.f
q=q.bV
q.toString
p=u.a
o=u.b
u=u.c
C.b.C(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bU
C.b.P(u.a,u.d,o)
break
case C.h:this.a2(l,this.cy.e)
u=this.a
q=this.cy.e
u.am(u.eT,u.bW,q)
q=this.a
u=this.cy.f
q=q.bV
q.toString
p=u.a
o=u.b
u=u.c
C.b.C(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bU
C.b.P(u.a,u.d,o)
break}}u=s.y
q=u!==C.d
if(q){switch(u){case C.d:break
case C.j:u=this.a
p=this.db.f
u=u.bX
C.b.P(u.a,u.d,p)
break
case C.i:this.a2(l,this.db.d)
u=this.a
p=this.db.d
u.as(u.eU,u.bY,p)
p=this.a
u=this.db.f
p=p.bX
C.b.P(p.a,p.d,u)
break
case C.h:this.a2(l,this.db.e)
u=this.a
p=this.db.e
u.am(u.eV,u.bY,p)
p=this.a
u=this.db.f
p=p.bX
C.b.P(p.a,p.d,u)
break}u=a2.a
C.b.cY(u,3042)
C.b.ke(u,770,771)}for(j=0;j<l.length;++j)l[j].a7(a2)
u=a3.e
u.a7(a2)
u.ai(a2)
u.aT(a2)
if(q)C.b.kx(a2.a,3042)
for(u=a2.a,j=0;j<l.length;++j){q=l[j]
if(q.c){q.c=!1
C.b.cK(u,33984+q.a)
C.b.aM(u,34067,null)}}q=this.a
q.toString
C.b.dt(u,null)
q.x.eB()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dV().at},
shm:function(a){this.e=H.k(a,"$ia6",[V.az],"$aa6")}}
O.hS.prototype={
ja:function(a){var u=this.f
if(!(Math.abs(u-a)<$.P().a)){this.f=a
u=new D.M(this.b,u,a,this,[P.u])
u.b=!0
this.a.X(u)}},
aA:function(){this.dG()
this.ja(1)}}
O.cL.prototype={
X:function(a){this.a.X(H.e(a,"$iz"))},
be:function(){return this.X(null)},
aA:function(){},
jd:function(a){},
je:function(a){var u,t
u=this.e
if(u!=a){if(u!=null)u.gv().G(0,this.gaY())
t=this.e
this.e=a
if(a!=null)a.gv().h(0,this.gaY())
u=new D.M(this.b+".textureCube",t,this.e,this,[T.ch])
u.b=!0
this.a.X(u)}},
sav:function(a){var u=this.c
if(u!==C.h){if(u===C.d)this.aA()
this.c=C.h
this.jd(null)
u=this.a
u.a=null
u.X(null)}this.je(a)}}
O.hT.prototype={}
O.bc.prototype={
ef:function(a){var u,t
if(!J.N(this.f,a)){u=this.f
this.f=a
t=new D.M(this.b+".color",u,a,this,[V.a7])
t.b=!0
this.a.X(t)}},
aA:function(){this.dG()
this.ef(new V.a7(1,1,1))},
sag:function(a,b){var u
if(this.c===C.d){this.c=C.j
this.aA()
u=this.a
u.a=null
u.X(null)}this.ef(b)}}
O.hV.prototype={
jc:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.P().a)){this.ch=a
u=new D.M(this.b+".refraction",u,a,this,[P.u])
u.b=!0
this.a.X(u)}},
aA:function(){this.ce()
this.jc(1)}}
O.hW.prototype={
cF:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.P().a)){this.ch=a
u=new D.M(this.b+".shininess",u,a,this,[P.u])
u.b=!0
this.a.X(u)}},
aA:function(){this.ce()
this.cF(100)}}
O.el.prototype={
gv:function(){var u=this.e
if(u==null){u=D.Q()
this.e=u}return u},
X:function(a){var u
H.e(a,"$iz")
u=this.e
if(u!=null)u.I(a)},
be:function(){return this.X(null)},
fm:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.e(a.fr.j(0,"Skybox"),"$iem")
if(u==null){t=a.a
u=new A.em(t,"Skybox")
u.dH(t,"Skybox")
u.fa(0,$.ou,$.ot)
u.z=u.x.j(0,"posAttr")
u.Q=H.l(u.y.j(0,"fov"),"$ia3")
u.ch=H.l(u.y.j(0,"ratio"),"$ia3")
u.cx=H.l(u.y.j(0,"boxClr"),"$iO")
u.cy=H.l(u.y.j(0,"boxTxt"),"$iao")
u.db=H.l(u.y.j(0,"viewMat"),"$iaD")
a.ep(u)}this.a=u}if(b.e==null){t=b.d.ey(new Z.eI(a.a),$.b4())
t.aO($.b4()).e=this.a.z.c
b.e=t}t=this.c
if(t!=null){t.a=1
t.a7(a)}t=a.d
s=a.c
r=this.a
r.a7(a)
q=this.b
p=r.Q
C.b.P(p.a,p.d,q)
q=r.ch
C.b.P(q.a,q.d,t/s)
s=this.c
r.cy.dD(s)
s=this.d
t=r.cx
C.b.C(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga8(s).d8(0)
r=r.db
r.toString
r.ar(s.aj(0,!0))
t=b.e
if(t instanceof Z.cz){t.a7(a)
t.ai(a)
t.aT(a)}else b.e=null
t=this.a
t.toString
C.b.dt(a.a,null)
t.x.eB()
t=this.c
if(t!=null)t.aT(a)}}
O.bS.prototype={}
T.d0.prototype={}
T.ch.prototype={
gv:function(){var u=this.e
if(u==null){u=D.Q()
this.e=u}return u},
a7:function(a){var u
if(!this.c&&this.d>=6){this.c=!0
u=a.a
C.b.cK(u,33984+this.a)
C.b.aM(u,34067,this.b)}},
aT:function(a){var u
if(this.c){this.c=!1
u=a.a
C.b.cK(u,33984+this.a)
C.b.aM(u,34067,null)}}}
T.iW.prototype={
fd:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
u=a+"/"+d+"posx"+b
t=a+"/"+d+"posy"+b
s=a+"/"+d+"posz"+b
r=a+"/"+d+"negx"+b
q=a+"/"+d+"negy"+b
p=a+"/"+d+"negz"+b
o=this.a
n=o.createTexture()
C.b.aM(o,34067,n)
C.b.c5(o,34067,10242,10497)
C.b.c5(o,34067,10243,10497)
C.b.c5(o,34067,10241,9729)
C.b.c5(o,34067,10240,9729)
C.b.aM(o,34067,null)
m=new T.ch()
m.a=0
m.b=n
m.c=!1
m.d=0
this.b0(m,n,u,34069,!1,!1)
this.b0(m,n,r,34070,!1,!1)
this.b0(m,n,t,34071,!1,!1)
this.b0(m,n,q,34072,!1,!1)
this.b0(m,n,s,34073,!1,!1)
this.b0(m,n,p,34074,!1,!1)
return m},
kW:function(a,b){return this.fd(a,b,!1,"")},
fc:function(a){return this.fd(a,".png",!1,"")},
b0:function(a,b,c,d,e,f){var u,t
u=document.createElement("img")
u.src=c;++this.d
t=W.p
W.ae(u,"load",H.n(new T.iX(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
j6:function(a,b,c){var u,t,s,r
b=V.lR(b,2)
u=V.lR(a.width,2)
t=V.lR(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.ll(null,null)
s.width=u
s.height=t
r=H.e(C.q.fF(s,"2d"),"$ic2")
r.imageSmoothingEnabled=!1;(r&&C.D).kz(r,a,0,0,s.width,s.height)
return P.pj(C.D.hG(r,0,0,s.width,s.height))}}}
T.iX.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.j6(this.b,u.c,this.c)
s=u.a
C.b.aM(s,34067,this.d)
C.b.lc(s,37440,this.e?1:0)
C.b.lp(s,this.f,0,6408,6408,5121,t)
C.b.aM(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.kA()}++u.e},
$S:12}
V.bp.prototype={
aQ:function(a,b){return!0},
i:function(a){return"all"},
$iaF:1}
V.aF.prototype={}
V.e3.prototype={
aQ:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)if(u[s].aQ(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.D)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sae:function(a){this.a=H.k(a,"$ib",[V.aF],"$ab")},
$iaF:1}
V.aA.prototype={
aQ:function(a,b){return!this.fW(0,b)},
i:function(a){return"!["+this.dF(0)+"]"}}
V.io.prototype={
aQ:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u,t
u=H.cd(this.a)
t=H.cd(this.b)
return u+".."+t},
$iaF:1}
V.iy.prototype={
h0:function(a){var u,t
if(a.a.length<=0)throw H.c(P.t("May not create a SetMatcher with zero characters."))
u=new H.aU([P.o,P.T])
for(t=new H.cK(a,a.gl(a),0,[H.ap(a,"y",0)]);t.F();)u.n(0,t.d,!0)
this.sj9(u)},
aQ:function(a,b){return this.a.bI(0,b)},
i:function(a){var u=this.a
return P.ep(u.gab(u),0,null)},
sj9:function(a){this.a=H.k(a,"$iF",[P.o,P.T],"$aF")},
$iaF:1}
V.cX.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d2(this.a.k(0,b))
r.sae(H.d([],[V.aF]))
r.c=!1
C.a.h(this.c,r)
return r},
kG:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(r.aQ(0,a))return r}return},
i:function(a){return this.b},
sjx:function(a){this.c=H.k(a,"$ib",[V.d2],"$ab")}}
V.ex.prototype={
i:function(a){var u,t
u=H.lS(this.b,"\n","\\n")
t=H.lS(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.d1.prototype={
aS:function(a,b,c){var u,t,s
H.k(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.D)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
sj_:function(a){var u=P.f
this.c=H.k(a,"$iF",[u,u],"$aF")}}
V.j_.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cX(this,b)
u.sjx(H.d([],[V.d2]))
u.d=null
this.a.n(0,b,u)}return u},
T:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.d1(this,a)
t=P.f
u.sj_(new H.aU([t,t]))
this.b.n(0,a,u)}return u},
ft:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.d([],[V.ex])
t=this.c
s=[P.o]
r=H.d([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.K(a,o)
m=t.kG(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.ep(r,0,null)
throw H.c(P.t("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.d([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.ep(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.ex(j==null?k.b:j,l,o)}++o}}},
sjm:function(a){this.a=H.k(a,"$iF",[P.f,V.cX],"$aF")},
sjq:function(a){this.b=H.k(a,"$iF",[P.f,V.d1],"$aF")}}
V.d2.prototype={
i:function(a){return this.b.b+": "+this.dF(0)}}
X.c0.prototype={$ibe:1}
X.hr.prototype={
gv:function(){var u=this.x
if(u==null){u=D.Q()
this.x=u}return u},
az:function(a){var u=this.x
if(u!=null)u.I(a)},
a7:function(a){var u,t,s,r,q,p,o,n
u=a.a
C.b.kd(u,36160,null)
C.b.cY(u,2884)
C.b.cY(u,2929)
C.b.kw(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.G(t)
p=C.e.au(q*t)
q=r.b
if(typeof s!=="number")return H.G(s)
o=C.e.au(q*s)
q=C.e.au(r.c*t)
a.c=q
r=C.e.au(r.d*s)
a.d=r
C.b.lw(u,p,o,q,r)
C.b.ki(u,this.c)
if(this.b){r=this.a
C.b.kh(u,r.a,r.b,r.c,r.d)
n=16640}else n=256
C.b.kg(u,n)}}
X.hw.prototype={
gv:function(){var u=this.b
if(u==null){u=D.Q()
this.b=u}return u},
a7:function(a){var u
a.cy.c2(V.ca())
u=V.ca()
a.db.c2(u)},
aT:function(a){a.cy.aR()
a.db.aR()},
$ibe:1,
$ic0:1}
X.ec.prototype={
gv:function(){var u=this.f
if(u==null){u=D.Q()
this.f=u}return u},
az:function(a){var u
H.e(a,"$iz")
u=this.f
if(u!=null)u.I(a)},
i6:function(){return this.az(null)},
a7:function(a){var u,t,s,r,q,p,o,n,m,l
u=a.c
t=a.d
s=this.c
r=this.d
q=this.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.bd(-o/(u/t),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
a.cy.c2(n)
u=$.mk
if(u==null){u=V.lw()
t=V.mG()
s=$.mC
if(s==null){s=new V.B(0,0,-1)
$.mC=s}s=V.mf(u,t,s)
$.mk=s
m=s}else m=u
u=this.b
if(u!=null){l=u.ba(0,a,this)
if(l!=null)m=l.w(0,m)}a.db.c2(m)},
aT:function(a){a.cy.aR()
a.db.aR()},
$ibe:1,
$ic0:1}
X.cZ.prototype={}
V.bH.prototype={
bz:function(a){this.b=new P.hu(C.Y)
this.c=null
this.scn(H.d([],[[P.b,W.aK]]))},
R:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.d([],[W.aK]))
t=a.split("\n")
for(u=t.length,s=[W.aK],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.d([],s))
o=document.createElement("div")
o.className="codePart"
H.J(p)
n=this.b.hr(p,0,p.length)
m=n==null?p:n
C.k.fO(o,H.lS(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaF(this.d),o)}},
fk:function(a,b){var u,t,s,r
H.k(b,"$ib",[P.f],"$ab")
this.scn(H.d([],[[P.b,W.aK]]))
u=C.a.m(b,"\n")
t=this.c
if(t==null){t=this.bJ()
this.c=t}for(t=t.ft(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)this.c1(t[r])},
scn:function(a){this.d=H.k(a,"$ib",[[P.b,W.aK]],"$ab")}}
V.la.prototype={
$1:function(a){H.e(a,"$ibi")
P.aE(C.e.fs(this.a.gkM(),2)+" fps")},
$S:52}
V.h6.prototype={
c1:function(a){switch(a.a){case"Class":this.R(a.b,"#551")
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
bJ:function(){var u,t,s,r
u=V.j0()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.x(new H.w("_"))
C.a.h(t.a,s)
s=V.a2("a","z")
C.a.h(t.a,s)
s=V.a2("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.x(new H.w("_"))
C.a.h(s.a,t)
t=V.a2("0","9")
C.a.h(s.a,t)
t=V.a2("a","z")
C.a.h(s.a,t)
t=V.a2("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Int")
s=V.a2("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").m(0,"Int")
t=V.a2("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").m(0,"FloatDot")
s=V.x(new H.w("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").m(0,"Float")
t=V.a2("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").m(0,"Float")
s=V.a2("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Sym")
t=V.x(new H.w("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").m(0,"Sym")
s=V.x(new H.w("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"OpenDoubleStr")
t=V.x(new H.w('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenDoubleStr").m(0,"CloseDoubleStr")
s=V.x(new H.w('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenDoubleStr").m(0,"EscDoubleStr")
t=V.x(new H.w("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscDoubleStr").m(0,"OpenDoubleStr")
s=V.x(new H.w('"'))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenDoubleStr").m(0,"OpenDoubleStr").a,new V.bp())
s=u.k(0,"Start").m(0,"OpenSingleStr")
t=V.x(new H.w("'"))
C.a.h(s.a,t)
t=u.k(0,"OpenSingleStr").m(0,"CloseSingleStr")
s=V.x(new H.w("'"))
C.a.h(t.a,s)
s=u.k(0,"OpenSingleStr").m(0,"EscSingleStr")
t=V.x(new H.w("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscSingleStr").m(0,"OpenSingleStr")
s=V.x(new H.w("'"))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenSingleStr").m(0,"OpenSingleStr").a,new V.bp())
s=u.k(0,"Start").m(0,"Slash")
t=V.x(new H.w("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"Comment")
s=V.x(new H.w("/"))
C.a.h(t.a,s)
s=u.k(0,"Comment").m(0,"EndComment")
t=V.x(new H.w("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").m(0,"Comment")
s=new V.aA()
r=[V.aF]
s.sae(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.w("\n"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"MLComment")
s=V.x(new H.w("*"))
C.a.h(t.a,s)
s=u.k(0,"MLComment").m(0,"MLCStar")
t=V.x(new H.w("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").m(0,"MLComment")
s=new V.aA()
s.sae(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.w("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").m(0,"EndComment")
s=V.x(new H.w("/"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Whitespace")
t=V.x(new H.w(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Whitespace").m(0,"Whitespace")
s=V.x(new H.w(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Int")
s.d=s.a.T("Num")
s=u.k(0,"Float")
s.d=s.a.T("Num")
s=u.k(0,"Sym")
s.d=s.a.T("Symbol")
s=u.k(0,"CloseDoubleStr")
s.d=s.a.T("String")
s=u.k(0,"CloseSingleStr")
s.d=s.a.T("String")
s=u.k(0,"EndComment")
s.d=s.a.T("Comment")
s=u.k(0,"Whitespace")
s.d=s.a.T("Whitespace")
s=u.k(0,"Id")
t=s.a.T("Id")
s.d=t
s=[P.f]
t.aS(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aS(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aS(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.hs.prototype={
c1:function(a){switch(a.a){case"Builtin":this.R(a.b,"#411")
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
bJ:function(){var u,t,s,r
u=V.j0()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.x(new H.w("_"))
C.a.h(t.a,s)
s=V.a2("a","z")
C.a.h(t.a,s)
s=V.a2("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.x(new H.w("_"))
C.a.h(s.a,t)
t=V.a2("0","9")
C.a.h(s.a,t)
t=V.a2("a","z")
C.a.h(s.a,t)
t=V.a2("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Int")
s=V.a2("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").m(0,"Int")
t=V.a2("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").m(0,"FloatDot")
s=V.x(new H.w("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").m(0,"Float")
t=V.a2("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").m(0,"Float")
s=V.a2("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Sym")
t=V.x(new H.w("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").m(0,"Sym")
s=V.x(new H.w("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Slash")
t=V.x(new H.w("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"Comment")
s=V.x(new H.w("/"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Slash").m(0,"Sym").a,new V.bp())
s=u.k(0,"Comment").m(0,"EndComment")
t=V.x(new H.w("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").m(0,"Comment")
s=new V.aA()
r=[V.aF]
s.sae(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.w("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Preprocess")
s=V.x(new H.w("#"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").m(0,"Preprocess")
t=new V.aA()
t.sae(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.w("\n"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").m(0,"EndPreprocess")
t=V.x(new H.w("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Whitespace")
s=V.x(new H.w(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Whitespace").m(0,"Whitespace")
t=V.x(new H.w(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Int")
t.d=t.a.T("Num")
t=u.k(0,"Float")
t.d=t.a.T("Num")
t=u.k(0,"Sym")
t.d=t.a.T("Symbol")
t=u.k(0,"EndComment")
t.d=t.a.T("Comment")
t=u.k(0,"EndPreprocess")
t.d=t.a.T("Preprocess")
t=u.k(0,"Whitespace")
t.d=t.a.T("Whitespace")
t=u.k(0,"Id")
s=t.a.T("Id")
t.d=s
t=[P.f]
s.aS(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aS(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aS(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return u}}
V.ht.prototype={
c1:function(a){switch(a.a){case"Attr":this.R(a.b,"#911")
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
bJ:function(){var u,t,s
u=V.j0()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.x(new H.w("_"))
C.a.h(t.a,s)
s=V.a2("a","z")
C.a.h(t.a,s)
s=V.a2("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.x(new H.w("_"))
C.a.h(s.a,t)
t=V.a2("0","9")
C.a.h(s.a,t)
t=V.a2("a","z")
C.a.h(s.a,t)
t=V.a2("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Id").m(0,"Attr")
s=V.x(new H.w("="))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Sym")
s=V.x(new H.w("</\\-!>="))
C.a.h(t.a,s)
s=u.k(0,"Sym").m(0,"Sym")
t=V.x(new H.w("</\\-!>="))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"OpenStr")
s=V.x(new H.w('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenStr").m(0,"CloseStr")
t=V.x(new H.w('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenStr").m(0,"EscStr")
s=V.x(new H.w("\\"))
C.a.h(t.a,s)
s=u.k(0,"EscStr").m(0,"OpenStr")
t=V.x(new H.w('"'))
C.a.h(s.a,t)
C.a.h(u.k(0,"OpenStr").m(0,"OpenStr").a,new V.bp())
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.bp())
t=u.k(0,"Other").m(0,"Other")
s=new V.aA()
s.sae(H.d([],[V.aF]))
C.a.h(t.a,s)
t=V.x(new H.w('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.a2("a","z")
C.a.h(s.a,t)
t=V.a2("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Sym")
t.d=t.a.T("Symbol")
t=u.k(0,"CloseStr")
t.d=t.a.T("String")
t=u.k(0,"Id")
s=t.a.T("Id")
t.d=s
s.aS(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
s=u.k(0,"Attr")
s.d=s.a.T("Attr")
s=u.k(0,"Other")
s.d=s.a.T("Other")
return u}}
V.ih.prototype={
fk:function(a,b){H.k(b,"$ib",[P.f],"$ab")
this.scn(H.d([],[[P.b,W.aK]]))
this.R(C.a.m(b,"\n"),"#111")},
c1:function(a){},
bJ:function(){return}}
V.il.prototype={
bF:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.n(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.my().gdj().j(0,H.m(u))
if(t==null)if(d){c.$0()
this.ej(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.m_(this.c).h(0,q)
o=W.nY("radio")
o.checked=s
o.name=u
u=W.p
W.ae(o,"change",H.n(new V.im(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.G.H(q,o)
n=r.createElement("span")
n.textContent=b
C.G.H(q,n)
J.m_(this.c).h(0,r.createElement("br"))},
aB:function(a,b,c){return this.bF(a,b,c,!1)},
ej:function(a){var u,t,s,r,q
u=P.my()
t=P.f
s=P.o5(u.gdj(),t,t)
s.n(0,this.a,a)
r=u.fn(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.X).j1(t,new P.kj([],[]).du(""),"",q)}}
V.im.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.ej(this.d)}},
$S:12}
V.iC.prototype={
h1:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.p).H(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.p.H(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.k.H(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.k.H(q,p)}o=u.createElement("div")
this.a=o
C.k.H(q,o)
this.b=null
o=W.p
W.ae(u,"scroll",H.n(new V.iE(s),{func:1,ret:-1,args:[o]}),!1,o)},
eo:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.f],"$ab")
this.jh()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.ft(C.a.kT(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.k.H(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.k.H(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.k.H(t,o)
break
case"Link":n=p.b
if(H.pK(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.J(m[1])
l.textContent=H.J(m[0])
C.k.H(t,l)}else{k=P.ft(C.J,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.m(k)
l.textContent=n
C.k.H(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.H(t,o)
break}}C.k.H(this.a,t)},
fE:function(a){var u,t,s,r
u=new V.h6("dart")
u.bz("dart")
t=new V.hs("glsl")
t.bz("glsl")
s=new V.ht("html")
s.bz("html")
r=C.a.kI(H.d([u,t,s],[V.bH]),new V.iF(a))
if(r!=null)return r
u=new V.ih("plain")
u.bz("plain")
return u},
el:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.k(a7,"$ib",[P.f],"$ab")
u=H.d([],[P.o])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.dw(r).a9(r,"+")){C.a.n(a7,s,C.c.ax(r,1))
C.a.h(u,1)
t=!0}else if(C.c.a9(r,"-")){C.a.n(a7,s,C.c.ax(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.fE(a5)
q.fk(0,a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.H(o,n)
C.k.H(this.a,o)
m=P.ft(C.J,a4,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.m1(null)
i.href="#"+H.m(m)
i.textContent=a4
C.k.H(j,i)
C.x.H(k,j)
C.n.H(l,k)
C.o.H(n,l)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.D)(r),++a0)C.x.H(a,r[a0])
C.n.H(e,d)
C.n.H(e,c)
C.n.H(e,a)
C.o.H(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.D)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gY(r);a3.F();)C.x.H(c,a3.gM(a3))
C.n.H(e,d)
C.n.H(e,c)
C.o.H(n,e)}},
jZ:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[P.f],"$ab")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.k.H(this.a,t)
r=C.o.hI(t,-1)
s=H.e((r&&C.n).e3(r,-1),"$ibh").style
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
o=H.e(C.n.e3(r,-1),"$ibh")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.x).H(o,p)}},
jh:function(){var u,t,s,r
if(this.b!=null)return
u=V.j0()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Bold")
s=V.x(new H.w("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Bold").m(0,"Bold")
s=new V.aA()
r=[V.aF]
s.sae(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.w("*"))
C.a.h(s.a,t)
t=u.k(0,"Bold").m(0,"BoldEnd")
s=V.x(new H.w("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Italic")
s=V.x(new H.w("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Italic").m(0,"Italic")
s=new V.aA()
s.sae(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.w("_"))
C.a.h(s.a,t)
t=u.k(0,"Italic").m(0,"ItalicEnd")
s=V.x(new H.w("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Code")
s=V.x(new H.w("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Code").m(0,"Code")
s=new V.aA()
s.sae(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.w("`"))
C.a.h(s.a,t)
t=u.k(0,"Code").m(0,"CodeEnd")
s=V.x(new H.w("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"LinkHead")
s=V.x(new H.w("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"LinkHead").m(0,"LinkTail")
s=V.x(new H.w("|"))
C.a.h(t.a,s)
s=u.k(0,"LinkHead").m(0,"LinkEnd")
t=V.x(new H.w("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkHead").m(0,"LinkHead")
t=new V.aA()
t.sae(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.w("|]"))
C.a.h(t.a,s)
s=u.k(0,"LinkTail").m(0,"LinkEnd")
t=V.x(new H.w("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkTail").m(0,"LinkTail")
t=new V.aA()
t.sae(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.w("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.bp())
s=u.k(0,"Other").m(0,"Other")
t=new V.aA()
t.sae(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.w("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.T("Bold")
s=u.k(0,"ItalicEnd")
s.d=s.a.T("Italic")
s=u.k(0,"CodeEnd")
s.d=s.a.T("Code")
s=u.k(0,"LinkEnd")
s.d=s.a.T("Link")
s=u.k(0,"Other")
s.d=s.a.T("Other")
this.b=u}}
V.iE.prototype={
$1:function(a){P.mu(C.y,new V.iD(this.a))},
$S:12}
V.iD.prototype={
$0:function(){var u,t,s
u=C.e.au(document.documentElement.scrollTop)
t=this.a.style
s=H.m(-0.01*u)+"px"
t.top=s},
$S:0}
V.iF.prototype={
$1:function(a){return H.e(a,"$ibH").a===this.a},
$S:53}
T.kZ.prototype={
$0:function(){this.a.sac(0,F.lN(1,null,null,1))},
$S:0}
T.l_.prototype={
$0:function(){this.a.sac(0,F.lN(8,null,null,8))},
$S:0}
T.l0.prototype={
$0:function(){this.a.sac(0,F.n3(1,!0,!0,1,40,1))},
$S:0}
T.l1.prototype={
$0:function(){this.a.sac(0,F.n3(1,!0,!1,1,40,0))},
$S:0}
T.l2.prototype={
$0:function(){this.a.sac(0,F.pB(10,20))},
$S:0}
T.l3.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=F.ek()
t=Math.sqrt(5)/2+0.5
s=F.av(u,new V.B(-1,t,0))
r=F.av(u,new V.B(1,t,0))
q=-t
p=F.av(u,new V.B(-1,q,0))
o=F.av(u,new V.B(1,q,0))
n=F.av(u,new V.B(0,-1,q))
m=F.av(u,new V.B(0,1,q))
l=F.av(u,new V.B(0,-1,t))
k=F.av(u,new V.B(0,1,t))
j=F.av(u,new V.B(t,0,1))
i=F.av(u,new V.B(t,0,-1))
h=F.av(u,new V.B(q,0,1))
g=F.av(u,new V.B(q,0,-1))
F.a5(u,s,g,m,2)
F.a5(u,s,m,r,2)
F.a5(u,s,r,k,2)
F.a5(u,s,k,h,2)
F.a5(u,s,h,g,2)
F.a5(u,r,m,i,2)
F.a5(u,m,g,n,2)
F.a5(u,g,h,p,2)
F.a5(u,h,k,l,2)
F.a5(u,k,r,j,2)
F.a5(u,o,i,n,2)
F.a5(u,o,n,p,2)
F.a5(u,o,p,l,2)
F.a5(u,o,l,j,2)
F.a5(u,o,j,i,2)
F.a5(u,n,i,m,2)
F.a5(u,p,n,g,2)
F.a5(u,l,p,h,2)
F.a5(u,j,l,k,2)
F.a5(u,i,j,r,2)
u.fe(new F.dc(),new F.jz())
this.a.sac(0,u)},
$S:0}
T.l4.prototype={
$0:function(){this.a.sac(0,F.nf(6,null,1,6))},
$S:0}
T.l5.prototype={
$0:function(){this.a.sac(0,F.pM(30,1,15,0.5))},
$S:0}
T.l6.prototype={
$0:function(){this.a.sac(0,F.pA(120,1,2,12,0.3,3))},
$S:0}
T.l7.prototype={
$1:function(a){var u,t,s,r
H.e(a,"$iz")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.el("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.el("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:6};(function aliases(){var u=J.a.prototype
u.fT=u.i
u=J.dX.prototype
u.fV=u.i
u=P.i.prototype
u.fU=u.c8
u=W.X.prototype
u.cd=u.ao
u=W.fb.prototype
u.fX=u.aC
u=O.cL.prototype
u.dG=u.aA
u=O.bc.prototype
u.ce=u.aA
u=V.e3.prototype
u.fW=u.aQ
u.dF=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"pd","oH",11)
u(P,"pe","oI",11)
u(P,"pf","oJ",11)
t(P,"n2","pc",3)
s(W,"pt",4,null,["$4"],["oL"],21,0)
s(W,"pu",4,null,["$4"],["oM"],21,0)
var m
r(m=E.as.prototype,"gfi",0,0,null,["$1","$0"],["fj","l3"],1,0)
r(m,"gfg",0,0,null,["$1","$0"],["fh","l0"],1,0)
q(m,"gkZ","l_",10)
q(m,"gl1","l2",10)
r(m=E.ew.prototype,"gdJ",0,0,null,["$1","$0"],["dL","dK"],1,0)
p(m,"glj","fo",3)
o(m=X.eD.prototype,"gij","ik",15)
o(m,"gi3","i4",15)
o(m,"gib","ic",4)
o(m,"gio","ip",27)
o(m,"gil","im",27)
o(m,"gis","it",4)
o(m,"giw","ix",4)
o(m,"gih","ii",4)
o(m,"giu","iv",4)
o(m,"gie","ig",4)
o(m,"giy","iz",37)
o(m,"giA","iB",15)
o(m,"giQ","iR",14)
o(m,"giM","iN",14)
o(m,"giO","iP",14)
r(D.bJ.prototype,"gh6",0,0,null,["$1","$0"],["aI","h7"],1,0)
r(m=D.e_.prototype,"ge7",0,0,null,["$1","$0"],["e8","iq"],1,0)
o(m,"giC","iD",39)
q(m,"ghY","hZ",19)
q(m,"giG","iH",19)
n(V.Y.prototype,"gl","bo",13)
n(V.B.prototype,"gl","bo",13)
n(V.b3.prototype,"gl","bo",13)
r(m=U.cH.prototype,"gaX",0,0,null,["$1","$0"],["U","ad"],1,0)
q(m,"ghW","hX",30)
q(m,"giE","iF",30)
r(m=U.eE.prototype,"gaX",0,0,null,["$1","$0"],["U","ad"],1,0)
o(m,"gcq","cr",2)
o(m,"gcs","ct",2)
o(m,"gcu","cv",2)
r(m=U.eF.prototype,"gaX",0,0,null,["$1","$0"],["U","ad"],1,0)
o(m,"gcq","cr",2)
o(m,"gcs","ct",2)
o(m,"gcu","cv",2)
o(m,"ghP","hQ",2)
o(m,"ghR","hS",2)
o(m,"gjv","jw",2)
o(m,"gjt","ju",2)
o(m,"gjr","js",2)
o(U.eG.prototype,"ghU","hV",2)
r(m=M.dH.prototype,"ga4",0,0,null,["$1","$0"],["a5","bd"],1,0)
q(m,"giI","iJ",28)
q(m,"giK","iL",28)
r(M.dJ.prototype,"ga4",0,0,null,["$1","$0"],["a5","bd"],1,0)
r(m=M.dO.prototype,"ga4",0,0,null,["$1","$0"],["a5","bd"],1,0)
q(m,"gi7","i8",10)
q(m,"gi9","ia",10)
r(m=O.e4.prototype,"gaY",0,0,null,["$1","$0"],["X","be"],1,0)
r(m,"gj4",0,0,null,["$1","$0"],["ed","j5"],1,0)
q(m,"gi_","i0",31)
q(m,"gi1","i2",31)
r(O.cL.prototype,"gaY",0,0,null,["$1","$0"],["X","be"],1,0)
r(O.el.prototype,"gaY",0,0,null,["$1","$0"],["X","be"],1,0)
r(X.ec.prototype,"gi5",0,0,null,["$1","$0"],["az","i6"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.S,null)
s(P.S,[H.ls,J.a,J.ay,P.eZ,P.i,H.cK,P.b9,H.c7,H.da,H.h_,H.ip,H.j5,P.bK,H.cA,H.fg,P.aj,H.hG,H.hI,H.hB,P.fm,P.bn,P.aP,P.eJ,P.iN,P.cY,P.iO,P.bi,P.aq,P.kA,P.kd,P.cj,P.eY,P.y,P.kr,P.hO,P.c3,P.hv,P.ky,P.kw,P.T,P.ar,P.a8,P.b8,P.ie,P.eo,P.eR,P.hq,P.bL,P.b,P.F,P.L,P.aC,P.f,P.an,P.ck,P.jl,P.kg,W.h2,W.bV,W.E,W.ea,W.fb,W.km,W.dP,W.aH,W.kc,W.fu,P.ki,P.fr,P.k7,P.U,O.a6,O.cM,E.fU,E.as,E.iq,E.ew,Z.eH,Z.eI,Z.cz,Z.bM,Z.bl,D.fX,D.c5,D.z,X.dG,X.dY,X.hD,X.hL,X.aG,X.i2,X.j1,X.eD,D.bJ,D.aa,D.ed,D.en,D.et,D.eu,D.ev,V.a7,V.ai,V.hg,V.e6,V.az,V.a1,V.W,V.aB,V.eh,V.Y,V.B,V.b3,U.eE,U.eF,U.eG,M.dJ,M.dO,M.aI,A.dD,A.fN,A.hU,A.d3,A.d7,A.d5,A.d8,A.d6,A.d9,A.c4,A.ez,A.jf,F.ac,F.hk,F.bv,F.hF,F.bR,F.ej,F.iz,F.iA,F.iB,F.ab,F.jv,F.jw,F.jA,F.jB,F.jC,F.jD,O.bS,O.cL,T.iW,V.bp,V.aF,V.e3,V.io,V.iy,V.cX,V.ex,V.d1,V.j_,X.c0,X.cZ,X.hw,X.ec,V.bH,V.il,V.iC])
s(J.a,[J.hA,J.dW,J.dX,J.aT,J.bP,J.bt,H.cP,H.bQ,W.j,W.fL,W.c_,W.c2,W.b6,W.b7,W.a_,W.eL,W.h7,W.h8,W.dL,W.eN,W.dN,W.eP,W.ha,W.p,W.eS,W.aS,W.dS,W.eU,W.bs,W.e1,W.hX,W.f_,W.f0,W.aV,W.f1,W.f4,W.aW,W.f8,W.ef,W.fa,W.aY,W.fc,W.aZ,W.fh,W.aM,W.fk,W.iZ,W.b0,W.fn,W.j3,W.jq,W.fv,W.fx,W.fz,W.fB,W.fD,P.bb,P.eW,P.bf,P.f6,P.ik,P.fi,P.bj,P.fp,P.fO,P.eK,P.dE,P.dQ,P.ee,P.cf,P.ei,P.es,P.eA,P.fe])
s(J.dX,[J.ig,J.bU,J.bu])
t(J.lr,J.aT)
s(J.bP,[J.dV,J.dU])
t(P.hK,P.eZ)
s(P.hK,[H.eB,W.jO,W.au,P.hm])
t(H.w,H.eB)
s(P.i,[H.hd,H.hP,H.dd])
s(H.hd,[H.c9,H.hH])
s(P.b9,[H.hQ,H.jI])
t(H.hR,H.c9)
t(H.h0,H.h_)
s(P.bK,[H.ib,H.hC,H.jj,H.j7,H.fW,H.iw,P.eb,P.aR,P.jk,P.jh,P.cg,P.fZ,P.h5])
s(H.cA,[H.lf,H.iT,H.kS,H.kT,H.kU,P.jK,P.jJ,P.jL,P.jM,P.kq,P.kp,P.jV,P.jZ,P.jW,P.jX,P.jY,P.k1,P.k2,P.k0,P.k_,P.iP,P.iQ,P.kI,P.ka,P.k9,P.kb,P.hJ,P.hN,P.kx,P.hb,P.hc,P.jp,P.jm,P.jn,P.jo,P.ks,P.kt,P.kv,P.ku,P.kE,P.kD,P.kF,P.kG,W.he,W.hZ,W.i0,W.iv,W.iM,W.jU,W.i9,W.i8,W.ke,W.kf,W.ko,W.kz,P.kk,P.kK,P.hn,P.ho,P.fQ,E.ir,E.is,E.it,E.iY,D.hi,D.hj,F.kB,F.kL,F.kN,F.kO,F.kP,F.kX,F.lb,F.lc,F.le,F.kW,F.kM,F.jF,F.jE,F.jx,F.jy,T.iX,V.la,V.im,V.iE,V.iD,V.iF,T.kZ,T.l_,T.l0,T.l1,T.l2,T.l3,T.l4,T.l5,T.l6,T.l7])
s(H.iT,[H.iK,H.cx])
t(P.hM,P.aj)
s(P.hM,[H.aU,W.jN])
t(H.e7,H.bQ)
s(H.e7,[H.dh,H.dj])
t(H.di,H.dh)
t(H.cQ,H.di)
t(H.dk,H.dj)
t(H.e8,H.dk)
s(H.e8,[H.i3,H.i4,H.i5,H.i6,H.i7,H.e9,H.cR])
t(P.k8,P.kA)
t(P.k6,P.kd)
t(P.fs,P.hO)
t(P.eC,P.fs)
s(P.c3,[P.fS,P.hf])
t(P.bI,P.iO)
s(P.bI,[P.fT,P.hu,P.jt,P.js])
t(P.jr,P.hf)
s(P.a8,[P.u,P.o])
s(P.aR,[P.ce,P.hx])
t(P.jQ,P.ck)
s(W.j,[W.H,W.hl,W.aX,W.dl,W.b_,W.aN,W.dn,W.jH,W.de,P.fR,P.bZ])
s(W.H,[W.X,W.bG,W.cD,W.df])
s(W.X,[W.A,P.q])
s(W.A,[W.dB,W.fM,W.cw,W.bF,W.c1,W.aK,W.hp,W.dR,W.cI,W.cJ,W.dZ,W.cN,W.ix,W.bh,W.eq,W.er,W.iS,W.d_])
s(W.b6,[W.cB,W.h3,W.h4])
t(W.h1,W.b7)
t(W.cC,W.eL)
t(W.eO,W.eN)
t(W.dM,W.eO)
t(W.eQ,W.eP)
t(W.h9,W.eQ)
t(W.aL,W.c_)
t(W.eT,W.eS)
t(W.cF,W.eT)
t(W.eV,W.eU)
t(W.c8,W.eV)
t(W.dT,W.cD)
t(W.bT,W.p)
s(W.bT,[W.ba,W.ak,W.b1])
t(W.hY,W.f_)
t(W.i_,W.f0)
t(W.f2,W.f1)
t(W.i1,W.f2)
t(W.f5,W.f4)
t(W.cS,W.f5)
t(W.f9,W.f8)
t(W.ii,W.f9)
t(W.iu,W.fa)
t(W.dm,W.dl)
t(W.iH,W.dm)
t(W.fd,W.fc)
t(W.iI,W.fd)
t(W.iL,W.fh)
t(W.fl,W.fk)
t(W.iU,W.fl)
t(W.dp,W.dn)
t(W.iV,W.dp)
t(W.fo,W.fn)
t(W.j2,W.fo)
t(W.jG,W.cN)
t(W.bm,W.ak)
t(W.fw,W.fv)
t(W.jP,W.fw)
t(W.eM,W.dN)
t(W.fy,W.fx)
t(W.k3,W.fy)
t(W.fA,W.fz)
t(W.f3,W.fA)
t(W.fC,W.fB)
t(W.kh,W.fC)
t(W.fE,W.fD)
t(W.kl,W.fE)
t(W.jR,W.jN)
t(W.jS,P.iN)
t(W.lC,W.jS)
t(W.jT,P.cY)
t(W.kn,W.fb)
t(P.kj,P.ki)
t(P.ad,P.k7)
t(P.eX,P.eW)
t(P.hE,P.eX)
t(P.f7,P.f6)
t(P.ic,P.f7)
t(P.cV,P.q)
t(P.fj,P.fi)
t(P.iR,P.fj)
t(P.fq,P.fp)
t(P.j4,P.fq)
t(P.fP,P.eK)
t(P.id,P.bZ)
t(P.ff,P.fe)
t(P.iJ,P.ff)
s(E.fU,[Z.dF,A.cW,T.d0])
s(D.z,[D.bN,D.bO,D.M,X.ij])
s(X.ij,[X.e2,X.bw,X.cO,X.ey])
s(O.a6,[D.e_,U.cH,M.dH])
s(D.fX,[U.fY,U.al])
t(U.dI,U.al)
s(A.cW,[A.e5,A.em])
s(A.ez,[A.R,A.jb,A.jc,A.je,A.j9,A.a3,A.ja,A.O,A.jd,A.jg,A.d4,A.aD,A.at,A.ao])
t(F.iG,F.hk)
t(F.j8,F.hF)
t(F.dc,F.jB)
s(F.jC,[F.jz,F.ia])
s(O.bS,[O.e4,O.el])
s(O.cL,[O.hS,O.hT,O.bc])
s(O.bc,[O.hV,O.hW])
t(T.ch,T.d0)
s(V.e3,[V.aA,V.d2])
t(X.hr,X.cZ)
s(V.bH,[V.h6,V.hs,V.ht,V.ih])
u(H.eB,H.da)
u(H.dh,P.y)
u(H.di,H.c7)
u(H.dj,P.y)
u(H.dk,H.c7)
u(P.eZ,P.y)
u(P.fs,P.kr)
u(W.eL,W.h2)
u(W.eN,P.y)
u(W.eO,W.E)
u(W.eP,P.y)
u(W.eQ,W.E)
u(W.eS,P.y)
u(W.eT,W.E)
u(W.eU,P.y)
u(W.eV,W.E)
u(W.f_,P.aj)
u(W.f0,P.aj)
u(W.f1,P.y)
u(W.f2,W.E)
u(W.f4,P.y)
u(W.f5,W.E)
u(W.f8,P.y)
u(W.f9,W.E)
u(W.fa,P.aj)
u(W.dl,P.y)
u(W.dm,W.E)
u(W.fc,P.y)
u(W.fd,W.E)
u(W.fh,P.aj)
u(W.fk,P.y)
u(W.fl,W.E)
u(W.dn,P.y)
u(W.dp,W.E)
u(W.fn,P.y)
u(W.fo,W.E)
u(W.fv,P.y)
u(W.fw,W.E)
u(W.fx,P.y)
u(W.fy,W.E)
u(W.fz,P.y)
u(W.fA,W.E)
u(W.fB,P.y)
u(W.fC,W.E)
u(W.fD,P.y)
u(W.fE,W.E)
u(P.eW,P.y)
u(P.eX,W.E)
u(P.f6,P.y)
u(P.f7,W.E)
u(P.fi,P.y)
u(P.fj,W.E)
u(P.fp,P.y)
u(P.fq,W.E)
u(P.eK,P.aj)
u(P.fe,P.y)
u(P.ff,W.E)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.bF.prototype
C.q=W.c1.prototype
C.D=W.c2.prototype
C.k=W.aK.prototype
C.U=W.dL.prototype
C.W=W.dR.prototype
C.X=W.dS.prototype
C.z=W.dT.prototype
C.Z=J.a.prototype
C.a=J.aT.prototype
C.a_=J.dU.prototype
C.f=J.dV.prototype
C.r=J.dW.prototype
C.e=J.bP.prototype
C.c=J.bt.prototype
C.a6=J.bu.prototype
C.G=W.dZ.prototype
C.ac=W.cS.prototype
C.M=J.ig.prototype
C.N=W.ef.prototype
C.b=P.cf.prototype
C.x=W.bh.prototype
C.o=W.eq.prototype
C.n=W.er.prototype
C.C=J.bU.prototype
C.O=W.bm.prototype
C.P=W.de.prototype
C.R=new P.fT(!1)
C.Q=new P.fS(C.R)
C.S=new P.ie()
C.T=new P.jt()
C.l=new P.k8()
C.d=new A.c4(0,"ColorSourceType.None")
C.j=new A.c4(1,"ColorSourceType.Solid")
C.i=new A.c4(2,"ColorSourceType.Texture2D")
C.h=new A.c4(3,"ColorSourceType.TextureCube")
C.y=new P.b8(0)
C.V=new P.b8(5e6)
C.Y=new P.hv("element",!0,!1,!1,!1)
C.a0=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.a1=function(hooks) {
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

C.a2=function(getTagFallback) {
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
C.a3=function() {
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
C.a4=function(hooks) {
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
C.a5=function(hooks) {
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
C.H=H.d(u([127,2047,65535,1114111]),[P.o])
C.t=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.o])
C.a7=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.u=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.o])
C.v=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.o])
C.a8=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.I=H.d(u([]),[P.f])
C.a9=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.o])
C.J=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.o])
C.w=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.o])
C.K=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.o])
C.aa=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.o])
C.L=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.o])
C.A=H.d(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.B=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.ab=new H.h0(0,{},C.I,[P.f,P.f])
C.m=new P.jr(!1)})();(function staticFields(){$.b5=0
$.cy=null
$.m3=null
$.lG=!1
$.n8=null
$.n0=null
$.ne=null
$.kQ=null
$.kV=null
$.lP=null
$.cm=null
$.dt=null
$.du=null
$.lH=!1
$.a4=C.l
$.br=null
$.lo=null
$.ma=null
$.m9=null
$.mg=null
$.ml=null
$.cT=null
$.mp=null
$.mB=null
$.mF=null
$.mD=null
$.mE=null
$.ju=null
$.mC=null
$.mI=null
$.ou="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.ot="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.mk=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pS","ni",function(){return H.n7("_$dart_dartClosure")})
u($,"pT","lT",function(){return H.n7("_$dart_js")})
u($,"pY","nj",function(){return H.bk(H.j6({
toString:function(){return"$receiver$"}}))})
u($,"pZ","nk",function(){return H.bk(H.j6({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"q_","nl",function(){return H.bk(H.j6(null))})
u($,"q0","nm",function(){return H.bk(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"q3","np",function(){return H.bk(H.j6(void 0))})
u($,"q4","nq",function(){return H.bk(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"q2","no",function(){return H.bk(H.mw(null))})
u($,"q1","nn",function(){return H.bk(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"q6","ns",function(){return H.bk(H.mw(void 0))})
u($,"q5","nr",function(){return H.bk(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qn","lU",function(){return P.oG()})
u($,"qt","dz",function(){return[]})
u($,"q9","nt",function(){return P.oD()})
u($,"qo","nx",function(){return H.oa(H.cl(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))})
u($,"qr","nz",function(){return P.op("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"qs","nA",function(){return P.p4()})
u($,"qp","ny",function(){return P.md(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"qq","lV",function(){return P.lu(P.f,P.bL)})
u($,"qg","nw",function(){return Z.aO(0)})
u($,"qa","nu",function(){return Z.aO(511)})
u($,"qi","b4",function(){return Z.aO(1)})
u($,"qh","bB",function(){return Z.aO(2)})
u($,"qc","bA",function(){return Z.aO(4)})
u($,"qj","bC",function(){return Z.aO(8)})
u($,"qk","bD",function(){return Z.aO(16)})
u($,"qd","dx",function(){return Z.aO(32)})
u($,"qe","dy",function(){return Z.aO(64)})
u($,"qf","nv",function(){return Z.aO(96)})
u($,"ql","cv",function(){return Z.aO(128)})
u($,"qb","bz",function(){return Z.aO(256)})
u($,"pR","nh",function(){return new V.hg(1e-9)})
u($,"pQ","P",function(){return $.nh()})})()
var v={mangledGlobalNames:{o:"int",u:"double",a8:"num",f:"String",T:"bool",L:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.L},{func:1,ret:-1,opt:[D.z]},{func:1,ret:-1,args:[D.z]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ak]},{func:1,ret:P.L,args:[F.ab,P.u,P.u]},{func:1,ret:P.L,args:[D.z]},{func:1,ret:P.L,args:[F.ac]},{func:1,ret:P.L,args:[,,]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[P.o,[P.i,E.as]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.L,args:[W.p]},{func:1,ret:P.u},{func:1,ret:-1,args:[W.b1]},{func:1,ret:-1,args:[W.p]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.f,args:[P.f]},{func:1,args:[,]},{func:1,ret:-1,args:[P.o,[P.i,D.aa]]},{func:1,ret:P.u,args:[P.u]},{func:1,ret:P.T,args:[W.X,P.f,P.f,W.bV]},{func:1,ret:P.T,args:[W.H]},{func:1,ret:P.f,args:[P.o]},{func:1,ret:P.L,args:[,]},{func:1,ret:P.T,args:[W.aH]},{func:1,ret:P.T,args:[P.f]},{func:1,ret:-1,args:[W.ba]},{func:1,ret:-1,args:[P.o,[P.i,M.aI]]},{func:1,ret:V.W,args:[P.u]},{func:1,ret:-1,args:[P.o,[P.i,U.al]]},{func:1,ret:-1,args:[P.o,[P.i,V.az]]},{func:1,ret:P.L,args:[{func:1,ret:-1,args:[D.z]}]},{func:1,ret:P.u,args:[P.u,P.u]},{func:1,ret:W.X,args:[W.H]},{func:1,args:[W.p]},{func:1,ret:P.U,args:[,,]},{func:1,ret:-1,args:[W.bm]},{func:1,ret:P.U,args:[P.o]},{func:1,ret:P.T,args:[[P.i,D.aa]]},{func:1,ret:P.L,args:[P.f,,]},{func:1,ret:P.L,args:[P.f]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[P.f,P.o]},{func:1,ret:[P.F,P.f,P.f],args:[[P.F,P.f,P.f],P.f]},{func:1,ret:-1,args:[W.H,W.H]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:[P.aP,,],args:[,]},{func:1,ret:P.L,args:[,],opt:[P.aC]},{func:1,ret:P.L,args:[{func:1,ret:-1}]},{func:1,args:[P.f]},{func:1,ret:P.L,args:[P.bi]},{func:1,ret:P.T,args:[V.bH]},{func:1,args:[,P.f]},{func:1,ret:P.L,args:[P.a8]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cP,DataView:H.bQ,ArrayBufferView:H.bQ,Float32Array:H.cQ,Float64Array:H.cQ,Int16Array:H.i3,Int32Array:H.i4,Int8Array:H.i5,Uint16Array:H.i6,Uint32Array:H.i7,Uint8ClampedArray:H.e9,CanvasPixelArray:H.e9,Uint8Array:H.cR,HTMLBRElement:W.A,HTMLButtonElement:W.A,HTMLContentElement:W.A,HTMLDListElement:W.A,HTMLDataElement:W.A,HTMLDataListElement:W.A,HTMLDetailsElement:W.A,HTMLDialogElement:W.A,HTMLEmbedElement:W.A,HTMLFieldSetElement:W.A,HTMLHRElement:W.A,HTMLHeadingElement:W.A,HTMLHtmlElement:W.A,HTMLIFrameElement:W.A,HTMLLIElement:W.A,HTMLLegendElement:W.A,HTMLLinkElement:W.A,HTMLMapElement:W.A,HTMLMenuElement:W.A,HTMLMetaElement:W.A,HTMLMeterElement:W.A,HTMLModElement:W.A,HTMLOListElement:W.A,HTMLObjectElement:W.A,HTMLOptGroupElement:W.A,HTMLOptionElement:W.A,HTMLOutputElement:W.A,HTMLParagraphElement:W.A,HTMLParamElement:W.A,HTMLPictureElement:W.A,HTMLPreElement:W.A,HTMLProgressElement:W.A,HTMLQuoteElement:W.A,HTMLScriptElement:W.A,HTMLShadowElement:W.A,HTMLSlotElement:W.A,HTMLSourceElement:W.A,HTMLSpanElement:W.A,HTMLStyleElement:W.A,HTMLTableCaptionElement:W.A,HTMLTableColElement:W.A,HTMLTextAreaElement:W.A,HTMLTimeElement:W.A,HTMLTitleElement:W.A,HTMLTrackElement:W.A,HTMLUListElement:W.A,HTMLUnknownElement:W.A,HTMLDirectoryElement:W.A,HTMLFontElement:W.A,HTMLFrameElement:W.A,HTMLFrameSetElement:W.A,HTMLMarqueeElement:W.A,HTMLElement:W.A,AccessibleNodeList:W.fL,HTMLAnchorElement:W.dB,HTMLAreaElement:W.fM,HTMLBaseElement:W.cw,Blob:W.c_,HTMLBodyElement:W.bF,HTMLCanvasElement:W.c1,CanvasRenderingContext2D:W.c2,CDATASection:W.bG,CharacterData:W.bG,Comment:W.bG,ProcessingInstruction:W.bG,Text:W.bG,CSSNumericValue:W.cB,CSSUnitValue:W.cB,CSSPerspective:W.h1,CSSCharsetRule:W.a_,CSSConditionRule:W.a_,CSSFontFaceRule:W.a_,CSSGroupingRule:W.a_,CSSImportRule:W.a_,CSSKeyframeRule:W.a_,MozCSSKeyframeRule:W.a_,WebKitCSSKeyframeRule:W.a_,CSSKeyframesRule:W.a_,MozCSSKeyframesRule:W.a_,WebKitCSSKeyframesRule:W.a_,CSSMediaRule:W.a_,CSSNamespaceRule:W.a_,CSSPageRule:W.a_,CSSRule:W.a_,CSSStyleRule:W.a_,CSSSupportsRule:W.a_,CSSViewportRule:W.a_,CSSStyleDeclaration:W.cC,MSStyleCSSProperties:W.cC,CSS2Properties:W.cC,CSSImageValue:W.b6,CSSKeywordValue:W.b6,CSSPositionValue:W.b6,CSSResourceValue:W.b6,CSSURLImageValue:W.b6,CSSStyleValue:W.b6,CSSMatrixComponent:W.b7,CSSRotation:W.b7,CSSScale:W.b7,CSSSkew:W.b7,CSSTranslation:W.b7,CSSTransformComponent:W.b7,CSSTransformValue:W.h3,CSSUnparsedValue:W.h4,DataTransferItemList:W.h7,HTMLDivElement:W.aK,XMLDocument:W.cD,Document:W.cD,DOMException:W.h8,DOMImplementation:W.dL,ClientRectList:W.dM,DOMRectList:W.dM,DOMRectReadOnly:W.dN,DOMStringList:W.h9,DOMTokenList:W.ha,Element:W.X,AbortPaymentEvent:W.p,AnimationEvent:W.p,AnimationPlaybackEvent:W.p,ApplicationCacheErrorEvent:W.p,BackgroundFetchClickEvent:W.p,BackgroundFetchEvent:W.p,BackgroundFetchFailEvent:W.p,BackgroundFetchedEvent:W.p,BeforeInstallPromptEvent:W.p,BeforeUnloadEvent:W.p,BlobEvent:W.p,CanMakePaymentEvent:W.p,ClipboardEvent:W.p,CloseEvent:W.p,CustomEvent:W.p,DeviceMotionEvent:W.p,DeviceOrientationEvent:W.p,ErrorEvent:W.p,ExtendableEvent:W.p,ExtendableMessageEvent:W.p,FetchEvent:W.p,FontFaceSetLoadEvent:W.p,ForeignFetchEvent:W.p,GamepadEvent:W.p,HashChangeEvent:W.p,InstallEvent:W.p,MediaEncryptedEvent:W.p,MediaKeyMessageEvent:W.p,MediaQueryListEvent:W.p,MediaStreamEvent:W.p,MediaStreamTrackEvent:W.p,MessageEvent:W.p,MIDIConnectionEvent:W.p,MIDIMessageEvent:W.p,MutationEvent:W.p,NotificationEvent:W.p,PageTransitionEvent:W.p,PaymentRequestEvent:W.p,PaymentRequestUpdateEvent:W.p,PopStateEvent:W.p,PresentationConnectionAvailableEvent:W.p,PresentationConnectionCloseEvent:W.p,ProgressEvent:W.p,PromiseRejectionEvent:W.p,PushEvent:W.p,RTCDataChannelEvent:W.p,RTCDTMFToneChangeEvent:W.p,RTCPeerConnectionIceEvent:W.p,RTCTrackEvent:W.p,SecurityPolicyViolationEvent:W.p,SensorErrorEvent:W.p,SpeechRecognitionError:W.p,SpeechRecognitionEvent:W.p,SpeechSynthesisEvent:W.p,StorageEvent:W.p,SyncEvent:W.p,TrackEvent:W.p,TransitionEvent:W.p,WebKitTransitionEvent:W.p,VRDeviceEvent:W.p,VRDisplayEvent:W.p,VRSessionEvent:W.p,MojoInterfaceRequestEvent:W.p,ResourceProgressEvent:W.p,USBConnectionEvent:W.p,IDBVersionChangeEvent:W.p,AudioProcessingEvent:W.p,OfflineAudioCompletionEvent:W.p,WebGLContextEvent:W.p,Event:W.p,InputEvent:W.p,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MessagePort:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aL,FileList:W.cF,FileWriter:W.hl,HTMLFormElement:W.hp,Gamepad:W.aS,HTMLHeadElement:W.dR,History:W.dS,HTMLCollection:W.c8,HTMLFormControlsCollection:W.c8,HTMLOptionsCollection:W.c8,HTMLDocument:W.dT,ImageData:W.bs,HTMLImageElement:W.cI,HTMLInputElement:W.cJ,KeyboardEvent:W.ba,HTMLLabelElement:W.dZ,Location:W.e1,HTMLAudioElement:W.cN,HTMLMediaElement:W.cN,MediaList:W.hX,MIDIInputMap:W.hY,MIDIOutputMap:W.i_,MimeType:W.aV,MimeTypeArray:W.i1,PointerEvent:W.ak,MouseEvent:W.ak,DragEvent:W.ak,DocumentFragment:W.H,ShadowRoot:W.H,DocumentType:W.H,Node:W.H,NodeList:W.cS,RadioNodeList:W.cS,Plugin:W.aW,PluginArray:W.ii,Range:W.ef,RTCStatsReport:W.iu,HTMLSelectElement:W.ix,SourceBuffer:W.aX,SourceBufferList:W.iH,SpeechGrammar:W.aY,SpeechGrammarList:W.iI,SpeechRecognitionResult:W.aZ,Storage:W.iL,CSSStyleSheet:W.aM,StyleSheet:W.aM,HTMLTableCellElement:W.bh,HTMLTableDataCellElement:W.bh,HTMLTableHeaderCellElement:W.bh,HTMLTableElement:W.eq,HTMLTableRowElement:W.er,HTMLTableSectionElement:W.iS,HTMLTemplateElement:W.d_,TextTrack:W.b_,TextTrackCue:W.aN,VTTCue:W.aN,TextTrackCueList:W.iU,TextTrackList:W.iV,TimeRanges:W.iZ,Touch:W.b0,TouchEvent:W.b1,TouchList:W.j2,TrackDefaultList:W.j3,CompositionEvent:W.bT,FocusEvent:W.bT,TextEvent:W.bT,UIEvent:W.bT,URL:W.jq,HTMLVideoElement:W.jG,VideoTrackList:W.jH,WheelEvent:W.bm,Window:W.de,DOMWindow:W.de,Attr:W.df,CSSRuleList:W.jP,ClientRect:W.eM,DOMRect:W.eM,GamepadList:W.k3,NamedNodeMap:W.f3,MozNamedAttrMap:W.f3,SpeechRecognitionResultList:W.kh,StyleSheetList:W.kl,SVGLength:P.bb,SVGLengthList:P.hE,SVGNumber:P.bf,SVGNumberList:P.ic,SVGPointList:P.ik,SVGScriptElement:P.cV,SVGStringList:P.iR,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.bj,SVGTransformList:P.j4,AudioBuffer:P.fO,AudioParamMap:P.fP,AudioTrackList:P.fR,AudioContext:P.bZ,webkitAudioContext:P.bZ,BaseAudioContext:P.bZ,OfflineAudioContext:P.id,WebGLBuffer:P.dE,WebGLFramebuffer:P.dQ,WebGLProgram:P.ee,WebGL2RenderingContext:P.cf,WebGLShader:P.ei,WebGLTexture:P.es,WebGLUniformLocation:P.eA,SQLResultSetRowList:P.iJ})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e7.$nativeSuperclassTag="ArrayBufferView"
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.dj.$nativeSuperclassTag="ArrayBufferView"
H.dk.$nativeSuperclassTag="ArrayBufferView"
H.e8.$nativeSuperclassTag="ArrayBufferView"
W.dl.$nativeSuperclassTag="EventTarget"
W.dm.$nativeSuperclassTag="EventTarget"
W.dn.$nativeSuperclassTag="EventTarget"
W.dp.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(T.nb,[])
else T.nb([])})})()
//# sourceMappingURL=test.dart.js.map
