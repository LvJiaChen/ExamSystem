webpackJsonp([13],{209:function(t,e,n){n(531);var s=n(89)(n(407),n(558),null,null);t.exports=s.exports},211:function(t,e,n){"use strict";function s(t){return"[object Array]"===A.call(t)}function r(t){return"[object ArrayBuffer]"===A.call(t)}function i(t){return"undefined"!=typeof FormData&&t instanceof FormData}function o(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function a(t){return"string"==typeof t}function l(t){return"number"==typeof t}function u(t){return void 0===t}function c(t){return null!==t&&"object"==typeof t}function p(t){return"[object Date]"===A.call(t)}function f(t){return"[object File]"===A.call(t)}function d(t){return"[object Blob]"===A.call(t)}function h(t){return"[object Function]"===A.call(t)}function v(t){return c(t)&&h(t.pipe)}function _(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function g(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function m(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function w(t,e){if(null!==t&&void 0!==t)if("object"!=typeof t&&(t=[t]),s(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function x(){function t(t,n){"object"==typeof e[n]&&"object"==typeof t?e[n]=x(e[n],t):e[n]=t}for(var e={},n=0,s=arguments.length;n<s;n++)w(arguments[n],t);return e}function C(t,e,n){return w(e,function(e,s){t[s]=n&&"function"==typeof e?y(e,n):e}),t}var y=n(218),b=n(241),A=Object.prototype.toString;t.exports={isArray:s,isArrayBuffer:r,isBuffer:b,isFormData:i,isArrayBufferView:o,isString:a,isNumber:l,isObject:c,isUndefined:u,isDate:p,isFile:f,isBlob:d,isFunction:h,isStream:v,isURLSearchParams:_,isStandardBrowserEnv:m,forEach:w,merge:x,extend:C,trim:g}},213:function(t,e,n){"use strict";(function(e){function s(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var r=n(211),i=n(238),o={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=n(214):void 0!==e&&(t=n(214)),t}(),transformRequest:[function(t,e){return i(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(s(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(s(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(t){a.headers[t]={}}),r.forEach(["post","put","patch"],function(t){a.headers[t]=r.merge(o)}),t.exports=a}).call(e,n(90))},214:function(t,e,n){"use strict";var s=n(211),r=n(230),i=n(233),o=n(239),a=n(237),l=n(217),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(232);t.exports=function(t){return new Promise(function(e,c){var p=t.data,f=t.headers;s.isFormData(p)&&delete f["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",v=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||a(t.url)||(d=new window.XDomainRequest,h="onload",v=!0,d.onprogress=function(){},d.ontimeout=function(){}),t.auth){var _=t.auth.username||"",g=t.auth.password||"";f.Authorization="Basic "+u(_+":"+g)}if(d.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d[h]=function(){if(d&&(4===d.readyState||v)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?o(d.getAllResponseHeaders()):null,s=t.responseType&&"text"!==t.responseType?d.response:d.responseText,i={data:s,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:t,request:d};r(e,c,i),d=null}},d.onerror=function(){c(l("Network Error",t,null,d)),d=null},d.ontimeout=function(){c(l("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",d)),d=null},s.isStandardBrowserEnv()){var m=n(235),w=(t.withCredentials||a(t.url))&&t.xsrfCookieName?m.read(t.xsrfCookieName):void 0;w&&(f[t.xsrfHeaderName]=w)}if("setRequestHeader"in d&&s.forEach(f,function(t,e){void 0===p&&"content-type"===e.toLowerCase()?delete f[e]:d.setRequestHeader(e,t)}),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),c(t),d=null)}),void 0===p&&(p=null),d.send(p)})}},215:function(t,e,n){"use strict";function s(t){this.message=t}s.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},s.prototype.__CANCEL__=!0,t.exports=s},216:function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},217:function(t,e,n){"use strict";var s=n(229);t.exports=function(t,e,n,r,i){var o=new Error(t);return s(o,e,n,r,i)}},218:function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];return t.apply(e,n)}}},219:function(t,e,n){t.exports=n(224)},224:function(t,e,n){"use strict";function s(t){var e=new o(t),n=i(o.prototype.request,e);return r.extend(n,o.prototype,e),r.extend(n,e),n}var r=n(211),i=n(218),o=n(226),a=n(213),l=s(a);l.Axios=o,l.create=function(t){return s(r.merge(a,t))},l.Cancel=n(215),l.CancelToken=n(225),l.isCancel=n(216),l.all=function(t){return Promise.all(t)},l.spread=n(240),t.exports=l,t.exports.default=l},225:function(t,e,n){"use strict";function s(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new r(t),e(n.reason))})}var r=n(215);s.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},s.source=function(){var t;return{token:new s(function(e){t=e}),cancel:t}},t.exports=s},226:function(t,e,n){"use strict";function s(t){this.defaults=t,this.interceptors={request:new o,response:new o}}var r=n(213),i=n(211),o=n(227),a=n(228);s.prototype.request=function(t){"string"==typeof t&&(t=i.merge({url:arguments[0]},arguments[1])),t=i.merge(r,{method:"get"},this.defaults,t),t.method=t.method.toLowerCase();var e=[a,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},i.forEach(["delete","get","head","options"],function(t){s.prototype[t]=function(e,n){return this.request(i.merge(n||{},{method:t,url:e}))}}),i.forEach(["post","put","patch"],function(t){s.prototype[t]=function(e,n,s){return this.request(i.merge(s||{},{method:t,url:e,data:n}))}}),t.exports=s},227:function(t,e,n){"use strict";function s(){this.handlers=[]}var r=n(211);s.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},s.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},s.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=s},228:function(t,e,n){"use strict";function s(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var r=n(211),i=n(231),o=n(216),a=n(213),l=n(236),u=n(234);t.exports=function(t){return s(t),t.baseURL&&!l(t.url)&&(t.url=u(t.baseURL,t.url)),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||a.adapter)(t).then(function(e){return s(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return o(e)||(s(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},229:function(t,e,n){"use strict";t.exports=function(t,e,n,s,r){return t.config=e,n&&(t.code=n),t.request=s,t.response=r,t}},230:function(t,e,n){"use strict";var s=n(217);t.exports=function(t,e,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?e(s("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},231:function(t,e,n){"use strict";var s=n(211);t.exports=function(t,e,n){return s.forEach(n,function(n){t=n(t,e)}),t}},232:function(t,e,n){"use strict";function s(){this.message="String contains an invalid character"}function r(t){for(var e,n,r=String(t),o="",a=0,l=i;r.charAt(0|a)||(l="=",a%1);o+=l.charAt(63&e>>8-a%1*8)){if((n=r.charCodeAt(a+=.75))>255)throw new s;e=e<<8|n}return o}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";s.prototype=new Error,s.prototype.code=5,s.prototype.name="InvalidCharacterError",t.exports=r},233:function(t,e,n){"use strict";function s(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var r=n(211);t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(r.isURLSearchParams(e))i=e.toString();else{var o=[];r.forEach(e,function(t,e){null!==t&&void 0!==t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),o.push(s(e)+"="+s(t))}))}),i=o.join("&")}return i&&(t+=(-1===t.indexOf("?")?"?":"&")+i),t}},234:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},235:function(t,e,n){"use strict";var s=n(211);t.exports=s.isStandardBrowserEnv()?function(){return{write:function(t,e,n,r,i,o){var a=[];a.push(t+"="+encodeURIComponent(e)),s.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),s.isString(r)&&a.push("path="+r),s.isString(i)&&a.push("domain="+i),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},236:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},237:function(t,e,n){"use strict";var s=n(211);t.exports=s.isStandardBrowserEnv()?function(){function t(t){var e=t;return n&&(r.setAttribute("href",e),e=r.href),r.setAttribute("href",e),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}var e,n=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");return e=t(window.location.href),function(n){var r=s.isString(n)?t(n):n;return r.protocol===e.protocol&&r.host===e.host}}():function(){return function(){return!0}}()},238:function(t,e,n){"use strict";var s=n(211);t.exports=function(t,e){s.forEach(t,function(n,s){s!==e&&s.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[s])})}},239:function(t,e,n){"use strict";var s=n(211),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,i,o={};return t?(s.forEach(t.split("\n"),function(t){if(i=t.indexOf(":"),e=s.trim(t.substr(0,i)).toLowerCase(),n=s.trim(t.substr(i+1)),e){if(o[e]&&r.indexOf(e)>=0)return;o[e]="set-cookie"===e?(o[e]?o[e]:[]).concat([n]):o[e]?o[e]+", "+n:n}}),o):o}},240:function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},241:function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function s(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||s(t)||!!t._isBuffer)}},407:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(94),r=n.n(s),i=n(409),o=n.n(i),a=n(88),l=n(219),u=n.n(l);u.a.defaults.withCredentials=!0,e.default={data:function(){return{login:"",paperId:0,message:"",res:"",time:61,str:"",singleChoiceList:[],singleChoice:[],multipleChoiceList:[],multipleChoice:[],trueOrFalseList:[],trueOrFalse:[],blankQuestionList:[],blankQuestion:[],questionsAndAnswerList:[],questionsAndAnswer:[],questLabelList:["A","B","C","D","E","F","G","H","I","J","K","L","M","N"],questLabelListToCase:["a","b","c","d","e","f","g","h","i","j","k","l","m","n"]}},methods:{logOut:function(){var t=this,e=a.b+"/AdminController/logOut",n=new URLSearchParams;u.a.post(e,n).then(function(e){t.message=e.data.message,t.res=e.data.result}).then(function(e){t.res&&t.$message({type:"success",message:t.message})})},initData:function(){var t=this;console.log("**********");var e=a.b+"/PaperController/generatePapers",n=new URLSearchParams;n.append("paperId",this.login.paperId),u.a.post(e,n).then(function(e){console.log(e.data);var n=e.data;if(null!=n.model.singleChoice){t.singleChoiceList=n.model.singleChoice;var s=!0,r=!1,i=void 0;try{for(var l,u=o()(t.singleChoiceList);!(s=(l=u.next()).done);s=!0){var c=l.value;if(null!=c.pic){var p=c.pic.split("/");p=p[p.length-1],c.pic=a.b+"/images/"+p}t.singleChoice.push({answer:"",questionId:c.id,questionScort:c.scort,studentId:t.login.studentId,paperId:t.login.paperId})}}catch(t){r=!0,i=t}finally{try{!s&&u.return&&u.return()}finally{if(r)throw i}}}if(null!=n.model.multipleChoice){t.multipleChoiceList=n.model.multipleChoice;var f=!0,d=!1,h=void 0;try{for(var v,_=o()(t.multipleChoiceList);!(f=(v=_.next()).done);f=!0){var g=v.value;if(null!=g.pic){var p=g.pic.split("/");p=p[p.length-1],g.pic=a.b+"/images/"+p}t.multipleChoice.push({answer:[],questionId:g.id,questionScort:g.scort,studentId:t.login.studentId,paperId:t.login.paperId})}}catch(t){d=!0,h=t}finally{try{!f&&_.return&&_.return()}finally{if(d)throw h}}}if(null!=n.model.trueOrFalse){t.trueOrFalseList=n.model.trueOrFalse;var m=!0,w=!1,x=void 0;try{for(var C,y=o()(t.trueOrFalseList);!(m=(C=y.next()).done);m=!0){var b=C.value;if(null!=b.pic){var p=b.pic.split("/");p=p[p.length-1],b.pic=a.b+"/images/"+p}t.trueOrFalse.push({answer:null,questionId:b.id,questionScort:b.scort,studentId:t.login.studentId,paperId:t.login.paperId})}}catch(t){w=!0,x=t}finally{try{!m&&y.return&&y.return()}finally{if(w)throw x}}}if(null!=n.model.blankQuestion){t.blankQuestionList=n.model.blankQuestion;var A=!0,k=!1,L=void 0;try{for(var q,S=o()(t.blankQuestionList);!(A=(q=S.next()).done);A=!0){var O=q.value;if(null!=O.pic){var p=O.pic.split("/");p=p[p.length-1],O.pic=a.b+"/images/"+p}t.blankQuestion.push({answer:"",questionId:O.id,questionScort:O.scort,studentId:t.login.studentId,paperId:t.login.paperId})}}catch(t){k=!0,L=t}finally{try{!A&&S.return&&S.return()}finally{if(k)throw L}}}if(null!=n.model.blankQuestion){t.questionsAndAnswerList=n.model.questionsAndAnswer;var E=!0,I=!1,R=void 0;try{for(var F,j=o()(t.questionsAndAnswerList);!(E=(F=j.next()).done);E=!0){var T=F.value;if(null!=T.pic){var p=T.pic.split("/");p=p[p.length-1],T.pic=a.b+"/images/"+p}t.questionsAndAnswer.push({answer:"",questionId:T.id,questionScort:T.scort,studentId:t.login.studentId,paperId:t.login.paperId})}}catch(t){I=!0,R=t}finally{try{!E&&j.return&&j.return()}finally{if(I)throw R}}}})},handlerClick:function(){var t=this,e=JSON.parse(r()(this.multipleChoice));e.forEach(function(t,e,n){t.answer=t.answer.join(",")});var n=this.singleChoice.concat(e,this.trueOrFalse,this.questionsAndAnswer,this.blankQuestion),s={studentPaper:n};console.log(s);var i=a.b+"/PaperController/submitPapers";u.a.defaults.withCredentials=!1,u.a.post(i,s).then(function(e){t.message=e.data.message,console.log(t.message),t.res=e.data.result}).then(function(e){if(!t.res)throw t.$message({type:"error",message:"提交失败"}),new Error("获取数据失败");t.$message({type:"success",message:t.message}),u.a.defaults.withCredentials=!0,t.logOut(),t.$router.push("/")})}},created:function(){var t=this,e=a.b+"/AdminController/getLoginInfo",n=new URLSearchParams;u.a.post(e,n).then(function(e){t.login=e.data.model,t.time=t.login.paperTime,console.log(t.login),t.res=e.data.result}).then(function(e){t.initData()})},mounted:function(){var t=this,e=0,n=setInterval(function(){if(e++,60==e&&(t.time--,e=0),t.str="",t.time>60){var s=Math.floor(t.time/60),i=t.time%60-1,o=(60-e)%60;t.str=s>0&&s<10?i<10?t.str+"0"+s+":0"+i+":"+o:t.str+"0"+s+":"+i+":"+o:i<10?t.str+s+":0"+i+":"+o:t.str+s+":"+i+":"+o}else if(t.time<60&&t.time>0){var i=t.time%60-1,o=(60-e)%60;t.str=i<10?t.str+"00:0"+i+":"+o:t.str+"00:"+i+":"+o}else if(60==t.time){var i=59,o=(60-e)%60;t.str=t.str+"00:"+i+":"+o}else{t.str="00:00:00",clearInterval(n);var l=JSON.parse(r()(t.multipleChoice));l.forEach(function(t,e,n){t.answer=t.answer.join(",")});var c=t.singleChoice.concat(l,t.trueOrFalse,t.questionsAndAnswer,t.blankQuestion),p={studentPaper:c};console.log(p);var f=a.b+"/PaperController/submitPapers";u.a.post(f,p).then(function(e){t.message=e.data.message,console.log(t.message),t.res=e.data.result}).then(function(e){if(!t.res)throw t.$message({type:"error",message:"提交失败"}),new Error("获取数据失败");t.$message({type:"success",message:t.message}),t.$router.push("/")})}},1e3)}}},409:function(t,e,n){t.exports={default:n(414),__esModule:!0}},414:function(t,e,n){n(55),n(52),t.exports=n(416)},416:function(t,e,n){var s=n(6),r=n(92);t.exports=n(4).getIterator=function(t){var e=r(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return s(e.call(t))}},438:function(t,e,n){e=t.exports=n(191)(!1),e.push([t.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.w_1200{width:1200px;margin:15px auto 0}*{margin:0;padding:0}.avatar{margin:0 auto;width:150px;height:150px;display:block}.main_left{float:left;width:900px;border:1px solid #e1d9d9}.rt_nr1{width:280px;position:fixed;top:15px;z-index:1000}.singleChoice .title{height:50px;line-height:50px;padding-left:30px;background:#f7f7f7}.singleChoice ul li{list-style:none}.rt_content_nr .hasDo a{background:#13a1ef;color:#fff}.multipleChoice .title{height:50px;line-height:50px;padding-left:30px;background:#f7f7f7}.multipleChoice ul li{list-style:none}.trueOrFalse .title{height:50px;line-height:50px;padding-left:30px;background:#f7f7f7}.trueOrFalse ul li{list-style:none}.blankQuestion .title{height:50px;line-height:50px;padding-left:30px;background:#f7f7f7}.blankQuestion ul li,.questionsAndAnswer ul li{list-style:none}.questionsAndAnswer .title{height:50px;line-height:50px;padding-left:30px;background:#f7f7f7}.test_content_nr_tt{width:85%;height:auto;line-height:32px;margin:0 auto;border-bottom:1px solid #e4e4e4}.test_content_nr_tt i{width:25px;height:25px;line-height:25px;text-align:center;display:block;float:left;background:#5d9cec;border-radius:50%;margin-left:-50px;color:#fff;margin-top:8px;font-size:16px}.test_content_nr_tt font{font-size:14px}.test_content_nr_main{width:85%;margin:0 auto;padding:10px 0;height:auto}.rt_nr1_title h1{width:130px;height:45px;background:#389fc3;text-align:center;font-size:14px;display:block;line-height:45px;float:left;color:#fff}.rt_nr1_title p{width:141px;height:43px;padding-right:8px;border:1px solid #e4e4e4;border-left:0;display:block;float:right}.test_time{color:red;line-height:45px}.test_time b{font-size:16px;height:45px;display:block;float:left;margin-left:10px}.nr_right{width:280px;height:100%;float:right}.rt_nr1_title{height:40px}.rt_content{width:278px;height:100%;border:1px solid #e4e4e4;border-top:0}.rt_content_tt{width:95%;height:40px;line-height:40px;margin:0 auto;border-bottom:1px solid #e4e4e4}.rt_content_tt h2{width:150px;font-size:14px;display:inline-block}.rt_content_tt p{width:100px;display:inline-block}.rt_content_tt i{display:inline-block;padding:0 5px;font-family:normal}.answerSheet ul{padding:10px;text-align:left}.answerSheet li{display:inline-block;margin-bottom:5px;height:30px;width:30px;line-height:30px;text-align:center;border:1px solid #e4e4e4}ul li{list-style:none}.answerSheet li a{display:block;text-decoration:none;color:#666}",""])},531:function(t,e,n){var s=n(438);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(192)("59414549",s,!0)},558:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fillcontain"},[n("div",{staticClass:"w_1200",attrs:{id:"test"}},[n("div",{staticClass:"main_left"},[n("div",{staticClass:"singleChoice"},[n("h4",{staticClass:"title"},[t._v("单选题")]),t._v(" "),n("ul",t._l(t.singleChoiceList,function(e,s){return t.singleChoiceList!=[]?n("li",{attrs:{id:"singleChoice_"+s}},[n("div",{staticClass:"test_content_nr_tt"},[n("i",[t._v(t._s(s+1))]),t._v(" "),n("span",[t._v(t._s("("+e.scort+"分)"))]),t._v(" "),n("font",[t._v(t._s(e.questionContent))])],1),t._v(" "),n("div",{staticClass:"test_content_nr_main"},[n("ul",[null!=e.pic?n("img",{staticClass:"avatar",attrs:{src:e.pic}}):t._e(),t._v(" "),n("el-radio-group",{model:{value:t.singleChoice[s].answer,callback:function(e){t.$set(t.singleChoice[s],"answer",e)},expression:"singleChoice[index].answer"}},t._l(e.options,function(e,s){return n("li",{staticClass:"option"},[n("el-radio",{attrs:{label:t.questLabelListToCase[s]}},[t._v(t._s(t.questLabelList[s])+"."+t._s(e))])],1)}))],1)])]):t._e()}))]),t._v(" "),n("div",{staticClass:"multipleChoice"},[n("h4",{staticClass:"title"},[t._v("多选题")]),t._v(" "),n("ul",t._l(t.multipleChoiceList,function(e,s){return t.multipleChoiceList!=[]?n("li",{attrs:{id:"multipleChoice_"+s}},[n("div",{staticClass:"test_content_nr_tt"},[n("i",[t._v(t._s(s+1))]),t._v(" "),n("span",[t._v(t._s("("+e.scort+"分)"))]),t._v(" "),n("font",[t._v(t._s(e.questionContent))])],1),t._v(" "),n("div",{staticClass:"test_content_nr_main"},[n("ul",[null!=e.pic?n("img",{staticClass:"avatar",attrs:{src:e.pic}}):t._e(),t._v(" "),n("el-checkbox-group",{model:{value:t.multipleChoice[s].answer,callback:function(e){t.$set(t.multipleChoice[s],"answer",e)},expression:"multipleChoice[index].answer"}},t._l(e.options,function(e,s){return n("li",{staticClass:"option"},[n("el-checkbox",{attrs:{label:t.questLabelListToCase[s]}},[t._v(t._s(t.questLabelList[s])+"."+t._s(e))])],1)}))],1)])]):t._e()}))]),t._v(" "),n("div",{staticClass:"trueOrFalse"},[n("h4",{staticClass:"title"},[t._v("判断题")]),t._v(" "),n("ul",{staticStyle:{padding:"20px 0px"}},t._l(t.trueOrFalseList,function(e,s){return t.trueOrFalseList!=[]?n("li",{attrs:{id:"trueOrFalse_"+s}},[n("div",{staticClass:"test_content_nr_tt"},[n("i",[t._v(t._s(s+1))]),t._v(" "),n("span",[t._v(t._s("("+e.scort+"分)"))]),t._v(" "),n("font",[t._v(t._s(e.questionContent))]),t._v(" "),n("el-radio-group",{model:{value:t.trueOrFalse[s].answer,callback:function(e){t.$set(t.trueOrFalse[s],"answer",e)},expression:"trueOrFalse[index].answer"}},[n("el-radio",{attrs:{label:!1}},[t._v("对")]),t._v(" "),n("el-radio",{attrs:{label:!0}},[t._v("错")])],1),t._v(" "),null!=e.pic?n("img",{staticClass:"avatar",attrs:{src:e.pic}}):t._e()],1)]):t._e()}))]),t._v(" "),n("div",{staticClass:"blankQuestion"},[n("h4",{staticClass:"title"},[t._v("填空题")]),t._v(" "),n("ul",t._l(t.blankQuestionList,function(e,s){return t.blankQuestionList!=[]?n("li",{attrs:{id:"blankQuestion_"+s}},[n("div",{staticClass:"test_content_nr_tt"},[n("i",[t._v(t._s(s+1))]),t._v(" "),n("span",[t._v(t._s("("+e.scort+"分)"))]),t._v(" "),n("font",[t._v(t._s(e.questionContent))])],1),t._v(" "),n("div",{staticClass:"clear",staticStyle:{padding:"20px","text-align":"right","padding-right":"40px"}},[null!=e.pic?n("img",{staticClass:"avatar",attrs:{src:e.pic}}):t._e(),t._v(" "),n("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:"请输入内容"},model:{value:t.blankQuestion[s].answer,callback:function(e){t.$set(t.blankQuestion[s],"answer",e)},expression:"blankQuestion[index].answer"}})],1)]):t._e()}))]),t._v(" "),n("div",{staticClass:"questionsAndAnswer"},[n("h4",{staticClass:"title"},[t._v("问答题")]),t._v(" "),n("ul",t._l(t.questionsAndAnswerList,function(e,s){return t.questionsAndAnswerList!=[]?n("li",{attrs:{id:"questionsAndAnswer_"+s}},[n("div",{staticClass:"test_content_nr_tt"},[n("i",[t._v(t._s(s+1))]),t._v(" "),n("span",[t._v(t._s("("+e.scort+"分)"))]),t._v(" "),n("font",[t._v(t._s(e.questionContent))])],1),t._v(" "),null!=e.pic?n("img",{staticClass:"avatar",attrs:{src:e.pic}}):t._e(),t._v(" "),n("div",{staticStyle:{padding:"20px"}},[n("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入内容"},model:{value:t.questionsAndAnswer[s].answer,callback:function(e){t.$set(t.questionsAndAnswer[s],"answer",e)},expression:"questionsAndAnswer[index].answer"}})],1)]):t._e()}))]),t._v(" "),n("div",{staticStyle:{height:"70px","line-height":"70px","text-align":"center"}},[n("el-button",{attrs:{type:"primary"},on:{click:t.handlerClick}},[t._v("提交试卷")])],1)]),t._v(" "),n("div",{staticClass:"nr_right"},[n("div",{staticClass:"nr_rt_main"},[n("div",{staticClass:"rt_nr1"},[n("div",{staticClass:"rt_nr1_title"},[n("h1",[t._v("\n\t\t\t\t\t\t\t答题卡\n\t\t\t\t\t\t")]),t._v(" "),n("p",{staticClass:"test_time"},[n("b",{staticClass:"alt-1"},[t._v(t._s(t.str))])])]),t._v(" "),n("div",{staticClass:"rt_content"},[n("div",{staticClass:"rt_content_tt"},[n("h2",[t._v("单选题")]),t._v(" "),n("p",[n("span",[t._v("共")]),n("i",{staticClass:"content_lit"},[t._v(t._s(t.singleChoiceList.length))]),n("span",[t._v("题")])])]),t._v(" "),n("div",{staticClass:"rt_content_nr answerSheet"},[n("ul",t._l(t.singleChoice,function(e,s){return n("li",{class:{hasDo:""!=e.answer&&e.answer!=[]}},[n("a",{attrs:{href:"#singleChoice_"+s}},[t._v(t._s(s+1))])])}))])]),t._v(" "),n("div",{staticClass:"rt_content"},[n("div",{staticClass:"rt_content_tt"},[n("h2",[t._v("多选题")]),t._v(" "),n("p",[n("span",[t._v("共")]),n("i",{staticClass:"content_lit"},[t._v(t._s(t.multipleChoice.length))]),n("span",[t._v("题")])])]),t._v(" "),n("div",{staticClass:"rt_content_nr answerSheet"},[n("ul",t._l(t.multipleChoice,function(e,s){return n("li",{class:{hasDo:""!=e.answer&&e.answer!=[]}},[n("a",{attrs:{href:"#multipleChoice_"+s}},[t._v(t._s(s+1))])])}))])]),t._v(" "),n("div",{staticClass:"rt_content"},[n("div",{staticClass:"rt_content_tt"},[n("h2",[t._v("判断题")]),t._v(" "),n("p",[n("span",[t._v("共")]),n("i",{staticClass:"content_lit"},[t._v(t._s(t.trueOrFalse.length))]),n("span",[t._v("题")])])]),t._v(" "),n("div",{staticClass:"rt_content_nr answerSheet"},[n("ul",t._l(t.trueOrFalse,function(e,s){return n("li",{class:{hasDo:null!=e.answer}},[n("a",{attrs:{href:"#trueOrFalse_"+s}},[t._v(t._s(s+1))])])}))])]),t._v(" "),n("div",{staticClass:"rt_content"},[n("div",{staticClass:"rt_content_tt"},[n("h2",[t._v("填空题")]),t._v(" "),n("p",[n("span",[t._v("共")]),n("i",{staticClass:"content_lit"},[t._v(t._s(t.blankQuestion.length))]),n("span",[t._v("题")])])]),t._v(" "),n("div",{staticClass:"rt_content_nr answerSheet"},[n("ul",t._l(t.blankQuestion,function(e,s){return n("li",{class:{hasDo:""!=e.answer}},[n("a",{attrs:{href:"#blankQuestion_"+s}},[t._v(t._s(s+1))])])}))])]),t._v(" "),n("div",{staticClass:"rt_content"},[n("div",{staticClass:"rt_content_tt"},[n("h2",[t._v("问答题")]),t._v(" "),n("p",[n("span",[t._v("共")]),n("i",{staticClass:"content_lit"},[t._v(t._s(t.questionsAndAnswer.length))]),n("span",[t._v("题")])])]),t._v(" "),n("div",{staticClass:"rt_content_nr answerSheet"},[n("ul",t._l(t.questionsAndAnswer,function(e,s){return n("li",{class:{hasDo:""!=e.answer}},[n("a",{attrs:{href:"#questionsAndAnswer_"+s}},[t._v(t._s(s+1))])])}))])])])])])])])},staticRenderFns:[]}}});