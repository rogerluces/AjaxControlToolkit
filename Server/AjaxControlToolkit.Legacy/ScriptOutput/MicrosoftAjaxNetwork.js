// (c) 2010 CodePlex Foundation
(function(){var a=null;function b(){var i="completed",l="completedRequest",k="invokingRequest",o="Sys.Net.XMLHttpExecutor",h="uploadAbort",n="function",f="error",g="progress",e="load",b=true,m="SelectionLanguage",c=false;Type._registerScript("MicrosoftAjaxNetwork.js",["MicrosoftAjaxSerialization.js"]);var d,p;if(!window.XMLHttpRequest)window.XMLHttpRequest=function(){for(var e,c=["Msxml2.XMLHTTP.3.0","Msxml2.XMLHTTP"],b=0,d=c.length;b<d;b++)try{return new ActiveXObject(c[b])}catch(e){}return a};Type.registerNamespace("Sys.Net");d=Sys.Net.WebRequestExecutor=function(){this._webRequest=a;this._resultObject=a};var j=function(){};d.prototype={get_started:j,get_responseAvailable:j,get_timedOut:j,get_aborted:j,get_responseData:j,get_statusCode:j,get_statusText:j,get_xml:j,executeRequest:j,abort:j,getAllResponseHeaders:j,getResponseHeader:j,get_webRequest:function(){return this._webRequest},_set_webRequest:function(a){this._webRequest=a},get_object:function(){var a=this._resultObject;if(!a)this._resultObject=a=Sys.Serialization.JavaScriptSerializer.deserialize(this.get_responseData());return a}};d.registerClass("Sys.Net.WebRequestExecutor");Sys.Net.XMLDOM=function(f){if(!window.DOMParser)for(var i,e=["Msxml2.DOMDocument.3.0","Msxml2.DOMDocument"],d=0,h=e.length;d<h;d++)try{var b=new ActiveXObject(e[d]);b.async=c;b.loadXML(f);b.setProperty(m,"XPath");return b}catch(i){}else try{var g=new window.DOMParser;return g.parseFromString(f,"text/xml")}catch(i){}return a};d=Sys.Net.XMLHttpExecutor=function(){var d=this;Sys.Net.XMLHttpExecutor.initializeBase(d);var c=d;d._onReadyStateChange=function(){if(c._xmlHttpRequest.readyState===4){try{if(typeof c._xmlHttpRequest.status==="undefined")return}catch(d){return}c._clearTimer();c._responseAvailable=b;try{c._webRequest.completed(Sys.EventArgs.Empty)}finally{if(c._xmlHttpRequest){c._xmlHttpRequest.onreadystatechange=Function.emptyMethod;c._xmlHttpRequest=a}}}};d._clearTimer=function(){if(c._timer){window.clearTimeout(c._timer);c._timer=a}};d._onTimeout=function(){if(!c._responseAvailable){c._clearTimer();c._timedOut=b;var d=c._xmlHttpRequest;d.onreadystatechange=Function.emptyMethod;d.abort();c._webRequest.completed(Sys.EventArgs.Empty);c._xmlHttpRequest=a}}};d.prototype={get_timedOut:function(){return!!this._timedOut},get_started:function(){return!!this._started},get_responseAvailable:function(){return!!this._responseAvailable},get_aborted:function(){return!!this._aborted},executeRequest:function(){var i="Content-Type",d=this,l=c;if(arguments.length===1&&arguments[0].toString()==="[object FormData]")l=b;var j=d.get_webRequest();d._webRequest=j;var m=j.get_body(),k=j.get_headers(),h=new XMLHttpRequest;d._xmlHttpRequest=h;h.onreadystatechange=d._onReadyStateChange;if(l&&h.upload){h.upload.addEventListener(e,d.bind(d.load,d),c);h.upload.addEventListener(g,d.bind(d.progress,d),c);h.upload.addEventListener(f,d.bind(d.error,d),c);h.upload.addEventListener("abort",d.bind(d.uploadAbort,d),c)}var q=j.get_httpVerb();h.open(q,j.getResolvedUrl(),b);h.setRequestHeader("X-Requested-With","XMLHttpRequest");if(k)for(var p in k){var r=k[p];typeof r!==n&&h.setRequestHeader(p,r)}if(q.toLowerCase()==="post"){if(!l)(k===a||!k[i])&&h.setRequestHeader(i,"application/x-www-form-urlencoded; charset=utf-8");if(!m)m=""}var o=j.get_timeout();if(o>0)d._timer=window.setTimeout(Function.createDelegate(d,d._onTimeout),o);if(l)h.send(arguments[0]);else h.send(m);d._started=b},getResponseHeader:function(b){var c,a;try{a=this._xmlHttpRequest.getResponseHeader(b)}catch(c){}if(!a)a="";return a},getAllResponseHeaders:function(){return this._xmlHttpRequest.getAllResponseHeaders()},get_responseData:function(){return this._xmlHttpRequest.responseText},get_statusCode:function(){var b,a=0;try{a=this._xmlHttpRequest.status}catch(b){}return a},get_statusText:function(){return this._xmlHttpRequest.statusText},get_xml:function(){var c="parsererror",d=this._xmlHttpRequest,b=d.responseXML;if(!b||!b.documentElement){b=Sys.Net.XMLDOM(d.responseText);if(!b||!b.documentElement)return a}else navigator.userAgent.indexOf("MSIE")!==-1&&b.setProperty(m,"XPath");return b.documentElement.namespaceURI==="http://www.mozilla.org/newlayout/xml/parsererror.xml"&&b.documentElement.tagName===c?a:b.documentElement.firstChild&&b.documentElement.firstChild.tagName===c?a:b},abort:function(){var c=this;if(c._aborted||c._responseAvailable||c._timedOut)return;c._aborted=b;c._clearTimer();var d=c._xmlHttpRequest;if(d&&!c._responseAvailable){d.onreadystatechange=Function.emptyMethod;d.abort();c._xmlHttpRequest=a;c._webRequest.completed(Sys.EventArgs.Empty)}},bind:function(b,a){return function(){b.apply(a,arguments)}},add_load:function(a){Sys.Observer.addEventHandler(this,e,a)},remove_load:function(a){Sys.Observer.removeEventHandler(this,e,a)},load:function(a){function c(f,e,d){var c=Sys.Observer._getContext(f,b).events.getHandler(d);c&&c(e,a)}c(this,this,e);Sys.Observer.clearEventHandlers(this,e)},add_progress:function(a){Sys.Observer.addEventHandler(this,g,a)},remove_progress:function(a){Sys.Observer.removeEventHandler(this,g,a)},progress:function(a){function c(f,e,d){var c=Sys.Observer._getContext(f,b).events.getHandler(d);c&&c(e,a)}c(this,this,g)},add_error:function(a){Sys.Observer.addEventHandler(this,f,a)},remove_error:function(a){Sys.Observer.removeEventHandler(this,f,a)},error:function(a){function c(f,e,d){var c=Sys.Observer._getContext(f,b).events.getHandler(d);c&&c(e,a)}c(this,this,f);Sys.Observer.clearEventHandlers(this,f)},add_uploadAbort:function(a){Sys.Observer.addEventHandler(this,h,a)},remove_uploadAbort:function(a){Sys.Observer.removeEventHandler(this,h,a)},uploadAbort:function(a){function c(f,e,d){var c=Sys.Observer._getContext(f,b).events.getHandler(d);c&&c(e,a)}c(this,this,h);Sys.Observer.clearEventHandlers(this,h)}};d.registerClass(o,Sys.Net.WebRequestExecutor);d=Sys.Net._WebRequestManager=function(){this._defaultExecutorType=o};d.prototype={add_invokingRequest:function(a){Sys.Observer.addEventHandler(this,k,a)},remove_invokingRequest:function(a){Sys.Observer.removeEventHandler(this,k,a)},add_completedRequest:function(a){Sys.Observer.addEventHandler(this,l,a)},remove_completedRequest:function(a){Sys.Observer.removeEventHandler(this,l,a)},get_defaultTimeout:function(){return this._defaultTimeout||0},set_defaultTimeout:function(a){this._defaultTimeout=a},get_defaultExecutorType:function(){return this._defaultExecutorType},set_defaultExecutorType:function(a){this._defaultExecutorType=a},executeRequest:function(c){var a=c.get_executor();if(!a){var g,f;try{var e=window.eval(this._defaultExecutorType);a=new e}catch(g){f=b}c.set_executor(a)}if(!a.get_aborted()){var d=new Sys.Net.NetworkRequestEventArgs(c);Sys.Observer.raiseEvent(this,k,d);!d.get_cancel()&&a.executeRequest()}}};d.registerClass("Sys.Net._WebRequestManager");Sys.Net.WebRequestManager=new Sys.Net._WebRequestManager;d=Sys.Net.NetworkRequestEventArgs=function(a){Sys.Net.NetworkRequestEventArgs.initializeBase(this);this._webRequest=a};d.prototype={get_webRequest:function(){return this._webRequest}};d.registerClass("Sys.Net.NetworkRequestEventArgs",Sys.CancelEventArgs);d=Sys.Net.WebRequest=function(){var b=this;b._url="";b._headers={};b._body=a;b._userContext=a;b._httpVerb=a};d.prototype={add_completed:function(a){Sys.Observer.addEventHandler(this,i,a)},remove_completed:function(a){Sys.Observer.removeEventHandler(this,i,a)},completed:function(d){var a=this;function c(f,e,c){var a=Sys.Observer._getContext(f,b).events.getHandler(c);a&&a(e,d)}c(Sys.Net.WebRequestManager,a._executor,l);c(a,a._executor,i);Sys.Observer.clearEventHandlers(a,i)},get_url:function(){return this._url},set_url:function(a){this._url=a},get_headers:function(){return this._headers},get_httpVerb:function(){return this._httpVerb===a?this._body===a?"GET":"POST":this._httpVerb},set_httpVerb:function(a){this._httpVerb=a},get_body:function(){return this._body},set_body:function(a){this._body=a},get_userContext:function(){return this._userContext},set_userContext:function(a){this._userContext=a},get_executor:function(){return this._executor||a},set_executor:function(a){this._executor=a;a._set_webRequest(this)},get_timeout:function(){return this._timeout||Sys.Net.WebRequestManager.get_defaultTimeout()},set_timeout:function(a){this._timeout=a},getResolvedUrl:function(){return Sys.Net.WebRequest._resolveUrl(this._url)},invoke:function(){Sys.Net.WebRequestManager.executeRequest(this)}};d._resolveUrl=function(b,a){if(b&&b.indexOf("://")>0)return b;if(!a||!a.length){var d=Sys.get("base");if(d&&d.href&&d.href.length)a=d.href;else a=document.URL}var c=a.indexOf("?");if(c>0)a=a.substr(0,c);c=a.indexOf("#");if(c>0)a=a.substr(0,c);a=a.substr(0,a.lastIndexOf("/")+1);if(!b||!b.length)return a;if(b.charAt(0)==="/"){var e=a.indexOf("://"),g=a.indexOf("/",e+3);return a.substr(0,g)+b}else{var f=a.lastIndexOf("/");return a.substr(0,f+1)+b}};d._createQueryString=function(c,b,f){b=b||encodeURIComponent;var h=0,e,g,d,a=new Sys.StringBuilder;if(c)for(d in c){e=c[d];if(typeof e===n)continue;g=Sys.Serialization.JavaScriptSerializer.serialize(e);h++&&a.append("&");a.append(d);a.append("=");a.append(b(g))}if(f){h&&a.append("&");a.append(f)}return a.toString()};d._createUrl=function(b,c,d){if(!c&&!d)return b;var e=Sys.Net.WebRequest._createQueryString(c,a,d);return e.length?b+(b&&b.indexOf("?")>=0?"&":"?")+e:b};d.registerClass("Sys.Net.WebRequest")}if(window.Sys&&Sys.loader)Sys.loader.registerScript("Network",a,b);else b()})();