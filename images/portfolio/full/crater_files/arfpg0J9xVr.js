if (self.CavalryLogger) { CavalryLogger.start_js(["np5Vl"]); }

__d("ScriptPathState",["Arbiter"],(function a(b,c,d,e,f,g){__p&&__p();var h,i,j,k,l=100,m={setIsUIPageletRequest:function n(o){j=o},setUserURISampleRate:function n(o){k=o},reset:function n(){h=null;i=false;j=false},_shouldUpdateScriptPath:function n(){return i&&!j},_shouldSendURI:function n(){return Math.random()<k},getParams:function n(){var o={};if(m._shouldUpdateScriptPath()){if(m._shouldSendURI()&&h!==null)o.user_uri=h.substring(0,l)}else o.no_script_path=1;return o}};c("Arbiter").subscribe("pre_page_transition",function(n,o){i=true;h=o.to.getUnqualifiedURI().toString()});f.exports=b.ScriptPathState=m}),null);
__d("goOrReplace",[],(function a(b,c,d,e,f,g){function h(i,j,k){if(k)i.replace(j);else if(i.href==j)i.reload();else i.href=j}f.exports=h}),null);
__d("AjaxPipeRequest",["invariant","Arbiter","AsyncRequest","AsyncRequestConfig","BigPipe","ContextualComponent","CSS","DOM","Env","PageEvents","PageletSet","PageNavigationStageLogger","ScriptPathState","URI","containsNode","ge","goOrReplace","PageletGK","performanceAbsoluteNow","performance"],(function a(b,c,d,e,f,g,h){__p&&__p();var i=c("PageletGK").destroyDomAfterEventHandler,j=void 0,k=0;function l(o,p){__p&&__p();var q=c("ge")(o);if(!q)return;if(!p)q.style.minHeight="100px";var r=c("PageletSet").getPageletIDs();for(var s=0;s<r.length;s++){var t=r[s];if(c("containsNode")(q,c("ge")(t))&&c("PageletSet").hasPagelet(t))c("PageletSet").removePagelet(t)}c("Arbiter").inform(c("PageEvents").AJAXPIPE_ONBEFORECLEARCANVAS,{canvasID:o});function u(v){var w=c("ContextualComponent").forNode(v);if(w)w.unmount();c("DOM").empty(v)}if(i){c("Arbiter").inform("pagelet/destroy",{id:null,root:q});u(q)}else{u(q);c("Arbiter").inform("pagelet/destroy",{id:null,root:q})}}function m(o,p){var q=c("ge")(o);if(q&&!p)q.style.minHeight="100px"}function n(o,p){"use strict";__p&&__p();this._allowIrrelevantRequests=false;this._uri=o;this._query_data=p;this._request=new(c("AsyncRequest"))();this._request.disableInteractionServerTracing();this._canvas_id=null;this._allow_cross_page_transition=true;this._arbiter=new(c("Arbiter"))();this._requestID=k++}n.prototype.getArbiter=function(){"use strict";return this._arbiter};n.prototype.setCanvasId=function(o){"use strict";this._canvas_id=o;return this};n.prototype.setURI=function(o){"use strict";this._uri=o;return this};n.prototype.setData=function(o){"use strict";this._query_data=o;return this};n.prototype.getData=function(){"use strict";return this._query_data};n.prototype.setAllowCrossPageTransition=function(o){"use strict";this._allow_cross_page_transition=o;return this};n.prototype.setAppend=function(o){"use strict";this._append=o;return this};n.prototype._getAsyncRequestType=function(){"use strict";if(c("AsyncRequestConfig").useFetchStreamAjaxPipeTransport)return"useFetchWithIframeFallback";return"useIframeTransport"};n.prototype.send=function(){"use strict";__p&&__p();this._arbiter.inform(c("PageEvents").AJAXPIPE_SEND,{rid:this._requestID,quickling:!!this._isQuickling,ts:c("performanceAbsoluteNow")()},c("Arbiter").BEHAVIOR_PERSISTENT);var o={ajaxpipe:1,ajaxpipe_token:c("Env").ajaxpipe_token};Object.assign(o,c("ScriptPathState").getParams());c("ScriptPathState").reset();var p=this._request;if(p==null)return this;var q=this._uri;if(q==null)return this;p.setOption(this._getAsyncRequestType(),true).setURI(q).setData(Object.assign(o,this._query_data)).setPreBootloadHandler(this._preBootloadHandler.bind(this)).setInitialHandler(this._onInitialResponse.bind(this)).setHandler(this._onResponse.bind(this)).setMethod("GET").setReadOnly(true).setAllowCrossPageTransition(this._allow_cross_page_transition).setAllowIrrelevantRequests(this._allowIrrelevantRequests);if(this._automatic)this._relevantRequest=j;else j=this._request;if(this._isQuickling){var r=c("performance").clearResourceTimings||c("performance").webkitClearResourceTimings;if(r)r.call(c("performance"))}p.send();return this};n.prototype._preBootloadFirstResponse=function(o){"use strict";return false};n.prototype._fireDomContentCallback=function(){"use strict";this._arbiter.inform(c("PageEvents").AJAXPIPE_DOMREADY,true,c("Arbiter").BEHAVIOR_STATE)};n.prototype._fireOnloadCallback=function(){"use strict";if(window.console&&console.timeStamp)console.timeStamp('perf_trace {"name": "e2e", "parent": "PageEvents.AJAXPIPE_ONLOAD"}');this._arbiter.inform(c("PageEvents").AJAXPIPE_ONLOAD,{lid:this.pipe.lid,rid:this._requestID,ts:c("performanceAbsoluteNow")()},c("Arbiter").BEHAVIOR_STATE)};n.prototype._isRelevant=function(o){"use strict";return this._request===j||this._automatic&&this._relevantRequest===j||this._jsNonBlock||j!=null&&j.getAllowIrrelevantRequests()};n.prototype._preBootloadHandler=function(o){"use strict";__p&&__p();var p=this._request,q=o.getPayload();if(!q||q.redirect||!this._isRelevant(o))return false;var r=false;if(o.is_first){if(!this._append&&!this._displayCallback&&this._canvas_id!=null)l(this._canvas_id,this._constHeight);r=this._preBootloadFirstResponse(o);p!=null||h(0);this.pipe=new(c("BigPipe"))({config:q.bigPipeConfig,arbiter:this._arbiter,rootNodeID:this._canvas_id,lid:p.lid,rid:this._requestID,isAjax:true,domContentCallback:this._fireDomContentCallback.bind(this),onloadCallback:this._fireOnloadCallback.bind(this),domContentEvt:c("PageEvents").AJAXPIPE_DOMREADY,onloadEvt:c("PageEvents").AJAXPIPE_ONLOAD,jsNonBlock:this._jsNonBlock,automatic:this._automatic,displayCallback:this._displayCallback,allowIrrelevantRequests:this._allowIrrelevantRequests})}return r};n.prototype._redirect=function(o){"use strict";__p&&__p();if(o.redirect){if(o.force||!this.isPageActive(o.redirect)){var p=["ajaxpipe","ajaxpipe_token"].concat(this.getSanitizedParameters());c("PageNavigationStageLogger").setCookieForNavigation(o.redirect);c("PageNavigationStageLogger").setNote("ajaxpipe_redirect");c("PageNavigationStageLogger").updateCookie();c("goOrReplace")(window.location,new(c("URI"))(o.redirect).removeQueryData(p),true)}else{var q=b.PageTransitions;q.go(o.redirect,true)}return true}else return false};n.prototype.isPageActive=function(o){"use strict";return true};n.prototype.getSanitizedParameters=function(){"use strict";return[]};n.prototype._versionCheck=function(o){"use strict";return true};n.prototype._onInitialResponse=function(o){"use strict";var p=o.getPayload();if(!this._isRelevant(o))return false;if(!p)return true;if(this._redirect(p)||!this._versionCheck(p))return false;return true};n.prototype._processFirstResponse=function(o){"use strict";var p=o.getPayload(),q=c("ge")(this._canvas_id),r=p.canvas_class;if(q!=null&&r!=null)c("CSS").setClass(q,r)};n.prototype.setFirstResponseCallback=function(o){"use strict";this._firstResponseCallback=o;return this};n.prototype.setFirstResponseHandler=function(o){"use strict";this._processFirstResponse=o;return this};n.prototype._onResponse=function(o){"use strict";__p&&__p();var p=o.payload;if(!this._isRelevant(o))return c("AsyncRequest").suppressOnloadToken;if(o.is_first){this._processFirstResponse(o);this._firstResponseCallback&&this._firstResponseCallback();p.provides=p.provides||[];p.provides.push("uipage_onload")}if(p){if("content"in p.content&&this._canvas_id!==null){if(this._append)p.append=this._canvas_id;var q=p.content.content;delete p.content.content;p.content[this._canvas_id]=q}this.pipe.onPageletArrive(p)}if(o.is_last&&this._canvas_id!=null)m(this._canvas_id,this._constHeight);return c("AsyncRequest").suppressOnloadToken};n.prototype.setNectarModuleDataSafe=function(o){"use strict";if(this._request!=null)this._request.setNectarModuleDataSafe(o);return this};n.prototype.setFinallyHandler=function(o){"use strict";if(this._request!=null)this._request.setFinallyHandler(o);return this};n.prototype.setErrorHandler=function(o){"use strict";if(this._request!=null)this._request.setErrorHandler(o);return this};n.prototype.setTransportErrorHandler=function(o){"use strict";if(this._request!=null)this._request.setTransportErrorHandler(o);return this};n.prototype.setResetHandler=function(o){"use strict";this._resetHandler=o;return this};n.prototype.abort=function(){"use strict";if(this._request!=null)this._request.abort();this._reset();return this};n.prototype.abandon=function(){"use strict";if(this._request!=null)this._request.abandon();this._reset();return this};n.prototype._reset=function(){"use strict";if(j==this._request)j=null;this._request=null;this._resetHandler&&this._resetHandler()};n.prototype.setJSNonBlock=function(o){"use strict";this._jsNonBlock=o;return this};n.prototype.setAutomatic=function(o){"use strict";this._automatic=o;return this};n.prototype.setDisplayCallback=function(o){"use strict";this._displayCallback=o;return this};n.prototype.setConstHeight=function(o){"use strict";this._constHeight=o;return this};n.prototype.setAllowIrrelevantRequests=function(o){"use strict";this._allowIrrelevantRequests=o;return this};n.prototype.getAsyncRequest=function(){"use strict";return this._request};n.getCurrentRequest=function(){"use strict";return j};n.setCurrentRequest=function(o){"use strict";j=o};f.exports=n}),null);
__d("UIPageletContentCache",[],(function a(b,c,d,e,f,g){var h={cache:{},getContent:function i(j){if(j in this.cache)return this.cache[j];return null},setContent:function i(j,k){this.cache[j]=k}};f.exports=h}),null);
__d("UIPagelet",["ActorURI","AjaxPipeRequest","AsyncRequest","DOM","HTML","ScriptPathState","UIPageletContentCache","URI","emptyFunction","ge","isElementNode"],(function a(b,c,d,e,f,g){__p&&__p();function h(i,j,k){"use strict";__p&&__p();var l=i&&c("isElementNode")(i)?i.id:i;this._id=l||null;this._element=c("ge")(i||c("DOM").create("div"));this._src=j||null;this._context_data=k||{};this._data={};this._handler=c("emptyFunction");this._request=null;this._use_ajaxpipe=false;this._use_post_request=false;this._is_bundle=true;this._allow_cross_page_transition=false;this._append=false;this._cache_content=false;this._content_cache_key=""}h.prototype.getElement=function(){"use strict";return this._element};h.prototype.setHandler=function(i){"use strict";this._handler=i;return this};h.prototype.go=function(i,j){"use strict";if(arguments.length>=2||typeof i=="string"){this._src=i;this._data=j||{}}else if(arguments.length==1)this._data=i;this.refresh();return this};h.prototype.setAllowCrossPageTransition=function(i){"use strict";this._allow_cross_page_transition=i;return this};h.prototype.setBundleOption=function(i){"use strict";this._is_bundle=i;return this};h.prototype.setErrorHandler=function(i){"use strict";this._errorHandler=i;return this};h.prototype.setTransportErrorHandler=function(i){"use strict";this.transportErrorHandler=i;return this};h.prototype.refresh=function(){"use strict";__p&&__p();if(this._use_ajaxpipe){c("ScriptPathState").setIsUIPageletRequest(true);this._request=new(c("AjaxPipeRequest"))();this._request.setCanvasId(this._id).setAppend(this._append).setConstHeight(this._constHeight).setJSNonBlock(this._jsNonblock).setAutomatic(this._automatic).setDisplayCallback(this._displayCallback).setFinallyHandler(this._finallyHandler);if(this._errorHandler)this._request.setErrorHandler(this._errorHandler);if(this.transportErrorHandler)this._request.setTransportErrorHandler(this.transportErrorHandler);if(this._allowIrrelevantRequests!=null)this._request.setAllowIrrelevantRequests(this._allowIrrelevantRequests)}else{if(this._cache_content){var i=c("UIPageletContentCache").getContent(this._content_cache_key);if(i!==null){this.handleContent(i);return this}}var j=function(n){this._request=null;var o=c("HTML")(n.getPayload());this.handleContent(o);if(this._cache_content)c("UIPageletContentCache").setContent(this._content_cache_key,o)}.bind(this),k=this._displayCallback,l=this._finallyHandler;this._request=new(c("AsyncRequest"))().setMethod("GET").setReadOnly(true).setOption("bundle",this._is_bundle).setHandler(function(n){if(k)k(j.bind(null,n));else j(n);l&&l(n)});if(this._errorHandler)this._request.setErrorHandler(this._errorHandler);if(this.transportErrorHandler)this._request.setTransportErrorHandler(this.transportErrorHandler);if(this._use_post_request)this._request.setMethod("POST")}var m=babelHelpers["extends"]({},this._context_data,this._data);if(this._actorID)m[c("ActorURI").PARAMETER_ACTOR]=this._actorID;this._request.setURI(this._src).setAllowCrossPageTransition(this._allow_cross_page_transition).setData({data:JSON.stringify(m)}).send();return this};h.prototype.handleContent=function(i){"use strict";if(this._append)c("DOM").appendContent(this._element,i);else c("DOM").setContent(this._element,i);this._handler()};h.prototype.cancel=function(){"use strict";if(this._request)this._request.abort()};h.prototype.abandon=function(){"use strict";if(this._request)this._request.abandon()};h.prototype.setUseAjaxPipe=function(i){"use strict";this._use_ajaxpipe=!!i;return this};h.prototype.setUsePostRequest=function(i){"use strict";this._use_post_request=!!i;return this};h.prototype.setAppend=function(i){"use strict";this._append=!!i;return this};h.prototype.setJSNonBlock=function(i){"use strict";this._jsNonblock=!!i;return this};h.prototype.setAutomatic=function(i){"use strict";this._automatic=!!i;return this};h.prototype.setDisplayCallback=function(i){"use strict";this._displayCallback=i;return this};h.prototype.setConstHeight=function(i){"use strict";this._constHeight=!!i;return this};h.prototype.setFinallyHandler=function(i){"use strict";this._finallyHandler=i;return this};h.prototype.setAllowIrrelevantRequests=function(i){"use strict";this._allowIrrelevantRequests=i;return this};h.prototype.setActorID=function(i){"use strict";this._actorID=i;return this};h.prototype.setCacheContent=function(i){"use strict";this._cache_content=i;return this};h.prototype.setContentCacheKey=function(i){"use strict";this._content_cache_key=i;return this};h.appendToInline=function(i,j){"use strict";var k=c("ge")(i),l=c("ge")(j);if(k&&l){while(l.firstChild)c("DOM").appendContent(k,l.firstChild);c("DOM").remove(l)}};h.loadFromEndpoint=function(i,j,k,l){"use strict";__p&&__p();l=l||{};var m="/ajax/pagelet/generic.php/"+i;if(l.intern)m="/intern"+m;var n=new(c("URI"))(m.replace(/\/+/g,"/"));if(l.subdomain)n.setSubdomain(l.subdomain);var o=false,p="";if(l.contentCacheKey){o=true;p=i+","+String(l.contentCacheKey)}var q=new h(j,n,k).setUseAjaxPipe(l.usePipe).setBundleOption(l.bundle!==false).setAppend(l.append).setJSNonBlock(l.jsNonblock).setAutomatic(l.automatic).setDisplayCallback(l.displayCallback).setConstHeight(l.constHeight).setAllowCrossPageTransition(l.crossPage).setFinallyHandler(l.finallyHandler||c("emptyFunction")).setErrorHandler(l.errorHandler).setTransportErrorHandler(l.transportErrorHandler).setAllowIrrelevantRequests(l.allowIrrelevantRequests).setActorID(l.actorID).setCacheContent(o).setContentCacheKey(p).setUsePostRequest(l.usePostRequest);l.handler&&q.setHandler(l.handler);q.go();return q};h.loadFromEndpointBatched=function(i,j,k){"use strict";__p&&__p();var l=i.slice(0,k),m=i.slice(k);if(m.length>0){var n=l[l.length-1],o=c("emptyFunction");if(n.options&&n.options.finallyHandler)o=n.options.finallyHandler;n.options=babelHelpers["extends"]({},n.options,{finallyHandler:function p(){o();window.setTimeout(function(){h.loadFromEndpointBatched(m,j,k)},1)}})}l.forEach(function(p){h.loadFromEndpoint(p.controller,p.target_element,p.data,babelHelpers["extends"]({},p.options,j,{bundle:true}))})};f.exports=h}),null);
__d("XPageAdminHomePagePanelSaveSettingsController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/pages/homepage_panel/save_settings/",{selected_id:{type:"FBID"},collapse_state:{type:"Int"},refresh_panel:{type:"Bool",defaultValue:false},click_target:{type:"String"}})}),null);
__d("PageHomepagePanelPagelet",["AsyncRequest","DOM","UIPagelet","URI","XPageAdminHomePagePanelSaveSettingsController","$"],(function a(b,c,d,e,f,g){"use strict";var h="homepage_panel_pagelet_content",i={init:function j(k){var l=c("XPageAdminHomePagePanelSaveSettingsController").getURIBuilder().setBool("refresh_panel",true).getURI();l.addQueryData(c("URI").getRequestURI().getQueryData());new(c("AsyncRequest"))().setURI(l).setStatusElement(k).setErrorHandler(function(m){c("DOM").setContent(c("$")(h),"")}).send()},initWithAjax:function j(){c("UIPagelet").loadFromEndpoint("PageHomepagePanelPagelet",h,{content_only:true},{usePipe:true,allowIrrelevantRequests:true,displayCallback:function k(l){return l()}})}};f.exports=i}),null);