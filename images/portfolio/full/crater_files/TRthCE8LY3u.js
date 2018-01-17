if (self.CavalryLogger) { CavalryLogger.start_js(["6ozwS"]); }

__d("XUIAmbientNUXBody.react",["cx","React","XUICloseButton.react","joinClasses"],(function a(b,c,d,e,f,g,h){__p&&__p();var i,j,k=c("React").PropTypes;i=babelHelpers.inherits(l,c("React").Component);j=i&&i.prototype;l.prototype.render=function(){"use strict";var m=c("joinClasses")("_21es",this.props.className,this.props.noCloseButton?"_izg":null),n=this.props.noCloseButton?null:c("React").createElement(c("XUICloseButton.react"),{shade:"light",className:"_36gl",onClick:this.props.onCloseButtonClick,onFocus:this.props.onFocus});return c("React").createElement("div",{className:m},n,c("React").createElement("div",{className:"__xn"},this.props.children))};function l(){"use strict";i.apply(this,arguments)}l.propTypes={noCloseButton:k.bool,onCloseButtonClick:k.func,onFocus:k.func};f.exports=l}),null);
__d("XUIAmbientNUXTheme",["cx"],(function a(b,c,d,e,f,g,h){var i={wrapperClassName:"_2x6q",arrowDimensions:{offset:14,length:18}};f.exports=i}),null);
__d("XUIAmbientNUX.react",["fbt","React","ReactLayer","ReactAbstractContextualDialog","XUIAmbientNUXTheme","XUIAmbientNUXBody.react","uniqueID"],(function a(b,c,d,e,f,g,h){__p&&__p();var i,j,k=c("React").PropTypes,l=300,m=380,n=c("ReactLayer").createClass(c("ReactAbstractContextualDialog").createSpec({displayName:"XUIAmbientNUX",theme:c("XUIAmbientNUXTheme")}));i=babelHelpers.inherits(o,c("React").Component);j=i&&i.prototype;function o(){"use strict";j.constructor.call(this);this.$XUIAmbientNUX2=c("uniqueID")();this.$XUIAmbientNUX1=c("uniqueID")()}o.prototype.$XUIAmbientNUX3=function(){"use strict";switch(this.props.width){case"wide":return m;case"custom":return this.props.customwidth;case"auto":return null;default:return l}};o.prototype.$XUIAmbientNUX4=function(){"use strict";return h._("Learn about this new feature")};o.prototype.render=function(){"use strict";var p=this.props.labelledBy,q=null,r=null;if(!p){q=c("React").createElement("div",{"aria-label":this.props.label||this.$XUIAmbientNUX4(),id:this.$XUIAmbientNUX2,key:this.$XUIAmbientNUX2});p=this.$XUIAmbientNUX2}var s=h._("Close");r=c("React").createElement("a",{className:"layer_close_elem accessible_elem",href:"#",id:this.$XUIAmbientNUX1,key:this.$XUIAmbientNUX1,"aria-label":s,"aria-labelledby":this.$XUIAmbientNUX1+" "+p,role:"button"});return c("React").createElement(n,{alignment:this.props.alignment,autoFocus:false,behaviors:this.props.behaviors,context:this.props.context,contextRef:this.props.contextRef,dialogRole:"region",focusContextOnHide:false,hasActionableContext:this.props.hasActionableContext,hideOnBlur:this.props.hideOnBlur,insertParent:this.props.insertParent,labelledBy:p,offsetX:this.props.offsetX,offsetY:this.props.offsetY,onBeforeHide:this.props.onBeforeHide,position:this.props.position,shown:this.props.shown,width:this.$XUIAmbientNUX3(this.props)},c("React").createElement(c("XUIAmbientNUXBody.react"),{className:this.props.className,noCloseButton:this.props.noCloseButton,onCloseButtonClick:this.props.onCloseButtonClick,onFocus:this.props.onFocus},this.props.children,q,r))};o.propTypes={alignment:k.oneOf(["left","center","right"]),behaviors:k.object,className:k.string,context:k.object,contextRef:k.func,customwidth:k.number,hasActionableContext:k.bool,hideOnBlur:k.bool,insertParent:k.object,label:k.object,labelledBy:k.string,noCloseButton:k.bool,offsetX:k.number,offsetY:k.number,onBeforeHide:k.func,onCloseButtonClick:k.func,onFocus:k.func,position:k.oneOf(["above","below","left","right"]),shown:k.bool,width:k.oneOf(["wide","normal","auto","custom"])};f.exports=o}),null);
__d("PrivacyLiteFlyoutBootloader",["regeneratorRuntime","Promise","Deferred","JSResource"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=false,i=null,j=null,k={loadFlyout:function l(){return c("regeneratorRuntime").async(function m(n){while(1)switch(n.prev=n.next){case 0:n.next=2;return c("regeneratorRuntime").awrap(k._loadFlyout(false));case 2:case"end":return n.stop()}},null,this)},loadFlyoutAsChild:function l(){return c("regeneratorRuntime").async(function m(n){while(1)switch(n.prev=n.next){case 0:n.next=2;return c("regeneratorRuntime").awrap(k._loadFlyout(true));case 2:case"end":return n.stop()}},null,this)},_loadFlyout:function l(m){__p&&__p();var n,o,p,q,r,s,t,event,u,v;return c("regeneratorRuntime").async(function w(x){__p&&__p();while(1)switch(x.prev=x.next){case 0:if(!h){x.next=2;break}return x.abrupt("return");case 2:h=true;x.next=5;return c("regeneratorRuntime").awrap(c("Promise").all([c("JSResource")("PrivacyLiteFlyout").__setRef("PrivacyLiteFlyoutBootloader").load(),this._getDeferredFlyoutElements().getPromise(),this._getDeferredFooterElements().getPromise()]));case 5:n=x.sent;o=n[0];p=n[1];q=p.flyout;r=p.flyoutRoot;s=n[2];t=s.footer;event=s.event;u=s.settingsExitPoint;v=s.basicsExitPoint;o.setIsChild(!!m);o.registerFlyoutToggler(q,r);o.registerSettingsAndBasicsLinkLogging(t,event,u,v);o.loadBody();case 19:case"end":return x.stop()}},null,this)},setChildFlyoutVisible:function l(m){__p&&__p();var n,o,p,q,r;return c("regeneratorRuntime").async(function s(t){__p&&__p();while(1)switch(t.prev=t.next){case 0:if(!(!h&&!m)){t.next=2;break}return t.abrupt("return");case 2:t.next=4;return c("regeneratorRuntime").awrap(c("Promise").all([c("JSResource")("PrivacyLiteFlyout").__setRef("PrivacyLiteFlyoutBootloader").load(),this._getDeferredFlyoutElements().getPromise()]));case 4:n=t.sent;o=n[0];p=n[1];q=p.flyout;r=p._flyoutRoot;if(!(m===o.isFlyoutVisible())){t.next=11;break}return t.abrupt("return");case 11:o.setChildFlyoutVisible(m);o.onToggle(q,m?"show":"hide");case 13:case"end":return t.stop()}},null,this)},_getDeferredFlyoutElements:function l(){if(i==null)i=new(c("Deferred"))();return i},registerFlyoutElements:function l(m,n){this._getDeferredFlyoutElements().resolve({flyout:m,flyoutRoot:n})},_getDeferredFooterElements:function l(){if(j==null)j=new(c("Deferred"))();return j},registerFooterElements:function l(m,event,n,o){this._getDeferredFooterElements().resolve({footer:m,event:event,settingsExitPoint:n,basicsExitPoint:o})}};f.exports=k}),null);
__d("HelpLiteFlyout",["AsyncRequest","CSS","DOM","Event","HelpLiteFlyoutBootloader","PrivacyLiteFlyoutBootloader","Toggler","ge","ifRequired"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=null,i={loadBody:function j(){if(c("ge")("fbHelpLiteFlyoutLoading"))new(c("AsyncRequest"))("/help/ajax/contextual/").setData({page_type:c("HelpLiteFlyoutBootloader").getHelpType()}).send()},refreshHelp:function j(){if(c("ge")("fbHelpLiteFlyoutLoading"))new(c("AsyncRequest"))("/help/ajax/contextual/").setData({page_type:c("HelpLiteFlyoutBootloader").getHelpType(),is_refresh:true}).send()},resetHelp:function j(k){var l=c("ge")("fbContextualHelpContent");if(l)c("DOM").replace(l,k)},showHelp:function j(){c("PrivacyLiteFlyoutBootloader").setChildFlyoutVisible(false);c("CSS").show(c("ge")("fbHelpLiteFlyout"))},openPrivacy:function j(){c("CSS").hide(c("ge")("fbHelpLiteFlyout"));c("PrivacyLiteFlyoutBootloader").loadFlyoutAsChild();c("PrivacyLiteFlyoutBootloader").setChildFlyoutVisible(true)},registerPrivacyBackLink:function j(k){c("Event").listen(k,"click",i.showHelp)},registerFlyoutToggler:function j(k,l){h=l;var m=c("Toggler").createInstance(k);m.setSticky(false);c("Toggler").listen("hide",l,function(n){c("PrivacyLiteFlyoutBootloader").setChildFlyoutVisible(false)});c("Toggler").listen("show",l,function(n){i.showHelp()})},isFlyoutVisible:function j(){return h&&c("Toggler").getActive()===h},setFlyoutVisible:function j(k){if(k)c("HelpLiteFlyoutBootloader").loadFlyout();k?c("Toggler").show(h):c("Toggler").hide(h)}};f.exports=i}),null);
__d("FantaHider",["ifRequired"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();f.exports={hide:function h(){c("ifRequired")("FantaTabsSlimApp",function(i){i.hide()},function(){c("ifRequired")("FantaTabsReactApp",function(i){i.hide()})})},unhide:function h(){c("ifRequired")("FantaTabsSlimApp",function(i){i.unhide()},function(){c("ifRequired")("FantaTabsReactApp",function(i){i.unhide()})})}}}),null);
__d("DocumentTitle",["Arbiter"],(function a(b,c,d,e,f,g){__p&&__p();var h=document.title,i=null,j=1500,k=[],l=0,m=null,n=false;function o(){__p&&__p();if(k.length>0)if(!n){p(k[l].title);l=++l%k.length}else q();else{clearInterval(m);m=null;q()}}function p(s){document.title=s;n=true}function q(){r.set(i||h,true);n=false}var r={get:function s(){return h},set:function s(t,u){document.title=t;if(!u){h=t;i=null;c("Arbiter").inform("update_title",t)}else i=t},blink:function s(t){__p&&__p();var u={title:t};k.push(u);if(m===null)m=setInterval(o,j);return{stop:function v(){var w=k.indexOf(u);if(w>=0){k.splice(w,1);if(l>w)l--;else if(l==w&&l==k.length)l=0}}}}};f.exports=r}),null);
__d("FullScreen",["Event","Arbiter","CSS","UserAgent","UserAgent_DEPRECATED","throttle","Keys"],(function a(b,c,d,e,f,g){__p&&__p();var h={},i=false,j=function j(o){if(c("Event").getKeyCode(o)===c("Keys").ESC)o.stopPropagation()},k=function k(){if(!i){document.addEventListener("keydown",j,true);i=true}},l=function l(){if(i){document.removeEventListener("keydown",j,true);i=false}},m=Object.assign(new(c("Arbiter"))(),{listenForEvent:function o(p){var n=c("throttle")(this.onChange,0,this);if(!h[p.id]){h[p.id]=true;c("Event").listen(p,{webkitfullscreenchange:n,mozfullscreenchange:n,MSFullscreenChange:n,fullscreenchange:n})}},enableFullScreen:function o(p){__p&&__p();this.listenForEvent(p);if(p.webkitRequestFullScreen)if(c("UserAgent_DEPRECATED").chrome())p.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);else p.webkitRequestFullScreen();else if(p.mozRequestFullScreen)p.mozRequestFullScreen();else if(p.msRequestFullscreen){k();p.msRequestFullscreen()}else if(p.requestFullScreen)p.requestFullScreen();else return false;return true},disableFullScreen:function o(){__p&&__p();if(document.webkitCancelFullScreen)document.webkitCancelFullScreen();else if(document.mozCancelFullScreen)document.mozCancelFullScreen();else if(document.msExitFullscreen)document.msExitFullscreen();else if(document.cancelFullScreen)document.cancelFullScreen();else if(document.exitFullScreen)document.exitFullScreen();else return false;return true},isFullScreen:function o(){return document.webkitIsFullScreen||document.fullScreen||document.mozFullScreen||document.msFullscreenElement},toggleFullScreen:function o(p){if(this.isFullScreen()){this.disableFullScreen();return false}else return this.enableFullScreen(p)},onChange:function o(){var p=this.isFullScreen();c("CSS").conditionClass(document.body,"fullScreen",p);this.inform("changed");if(!p)l()},isSupportedWithKeyboardInput:function o(){return this.isSupported()&&!c("UserAgent").isBrowser("Safari")},isSupported:function o(){var p=document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled||document.fullscreenEnabled;return p||document.webkitCancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.cancelFullScreen||document.exitFullScreen}}),n=c("throttle")(m.onChange,0,m);c("Event").listen(document,{webkitfullscreenchange:n,mozfullscreenchange:n,MSFullscreenChange:n,fullscreenchange:n});f.exports=m}),null);
__d("XReferer",["Base64","Cookie","FBJSON","URI","setTimeoutAcrossTransitions"],(function a(b,c,d,e,f,g){__p&&__p();var h={update:function i(j,k,l){__p&&__p();if(!l){c("Cookie").set("x-referer","");return}if(j!=null)j=h.truncatePath(j);if(k!=null)k=h.truncatePath(k);var m=window.location.pathname+window.location.search,n=c("URI").getRequestURI(),o=n.getSubdomain();if(k!=null)h._setCookie(k,m,o);if(j!=null)c("setTimeoutAcrossTransitions")(function(){if(j!=null)h._setCookie(j,m,o)},0)},_setCookie:function i(j,k,l){var m={r:j,h:k,s:l},n=c("Base64").encode(c("FBJSON").stringify(m));c("Cookie").set("x-referer",n)},truncatePath:function i(j){var k=1024;if(j&&j.length>k)j=j.substring(0,k)+"...";return j}};f.exports=h}),null);
__d("HistoryManager",["SessionName","Env","Event","URI","UserAgent_DEPRECATED","emptyFunction","goOrReplace","isInIframe","setIntervalAcrossTransitions","XReferer"],(function a(b,c,d,e,f,g){__p&&__p();c("SessionName").getName();var h={history:null,current:0,fragment:null,isInitialized:function i(){return!!h._initialized},init:function i(){__p&&__p();if(!c("Env").ALLOW_TRANSITION_IN_IFRAME&&c("isInIframe")())return;if(h._initialized)return h;var j=new(c("URI"))(window.location.href),k=j.getFragment()||"";if(k.charAt(0)==="!"){k=k.substr(1);j.setFragment(k)}Object.assign(h,{_initialized:true,fragment:k,orig_fragment:k,history:[j],callbacks:[],lastChanged:Date.now(),canonical:new(c("URI"))("#"),user:0,enabled:true,debug:c("emptyFunction")});if(window.history&&history.pushState){this.lastURI=document.URL;try{window.history.replaceState(this.lastURI,null)}catch(l){if(!(l.number===-2147467259))throw l}c("Event").listen(window,"popstate",function(l){var m=l&&l.state&&typeof l.state==="string";if(m&&h.lastURI!=l.state){h.lastURI=l.state;h.lastChanged=Date.now();h.notify(new(c("URI"))(l.state).getUnqualifiedURI().toString())}}.bind(h));if(c("UserAgent_DEPRECATED").webkit()<534||c("UserAgent_DEPRECATED").chrome()<=13){c("setIntervalAcrossTransitions")(h.checkURI,42);h._updateRefererURI(this.lastURI)}return h}h._updateRefererURI(c("URI").getRequestURI(false));if(c("UserAgent_DEPRECATED").webkit()<500||c("UserAgent_DEPRECATED").firefox()<2){h.enabled=false;return h}if("onhashchange"in window)c("Event").listen(window,"hashchange",function(){setTimeout(h.checkURI.bind(h),0)});else c("setIntervalAcrossTransitions")(h.checkURI,42);return h},registerURIHandler:function i(j){h.callbacks.push(j);return h},setCanonicalLocation:function i(j){h.canonical=new(c("URI"))(j);return h},notify:function i(j){if(j==h.orig_fragment)j=h.canonical.getFragment();for(var k=0;k<h.callbacks.length;k++)try{if(h.callbacks[k](j))return true}catch(l){}return false},checkURI:function i(){__p&&__p();if(Date.now()-h.lastChanged<400)return;if(window.history&&history.pushState){var j=new(c("URI"))(document.URL).removeQueryData("ref").toString(),k=new(c("URI"))(h.lastURI).removeQueryData("ref").toString();if(j!=k){h.lastChanged=Date.now();h.lastURI=j;if(c("UserAgent_DEPRECATED").webkit()<534)h._updateRefererURI(j);h.notify(new(c("URI"))(j).getUnqualifiedURI().toString())}return}if(c("UserAgent_DEPRECATED").webkit()&&window.history.length==200){if(!h.warned)h.warned=true;return}var l=new(c("URI"))(window.location.href).getFragment();if(l.charAt(0)=="!")l=l.substr(1);l=l.replace(/%23/g,"#");if(l!=h.fragment.replace(/%23/g,"#")){h.debug([l," vs ",h.fragment,"whl: ",window.history.length,"QHL: ",h.history.length].join(" "));for(var m=h.history.length-1;m>=0;--m)if(h.history[m].getFragment().replace(/%23/g,"#")==l)break;++h.user;if(m>=0)h.go(m-h.current);else h.go("#"+l);--h.user}},_updateRefererURI:function i(j){if(j instanceof c("URI"))j=j.toString();c("XReferer").update(j,null,true)},go:function i(j,k,l){__p&&__p();if(window.history&&history.pushState){k||typeof j=="number";var m=new(c("URI"))(j).removeQueryData(["ref","messaging_source","ajaxpipe_fetch_stream"]).toString();h.lastChanged=Date.now();this.lastURI=m;if(l)window.history.replaceState(j,null,m);else window.history.pushState(j,null,m);if(c("UserAgent_DEPRECATED").webkit()<534)h._updateRefererURI(j);return false}h.debug("go: "+j);if(k===undefined)k=true;if(!h.enabled)if(!k)return false;if(typeof j=="number"){if(!j)return false;var n=j+h.current,o=Math.max(0,Math.min(h.history.length-1,n));h.current=o;n=h.history[o].getFragment()||h.orig_fragment;n=new(c("URI"))(n).removeQueryData("ref").getUnqualifiedURI().toString();h.fragment=n;h.lastChanged=Date.now();if(!h.user)c("goOrReplace")(window.location,window.location.href.split("#")[0]+"#!"+n,l);if(k)h.notify(n);h._updateRefererURI(n);return false}j=new(c("URI"))(j);if(j.getDomain()==new(c("URI"))(window.location.href).getDomain())j=new(c("URI"))("#"+j.getUnqualifiedURI());var p=h.history[h.current].getFragment(),q=j.getFragment();if(q==p||p==h.orig_fragment&&q==h.canonical.getFragment()){if(k)h.notify(q);h._updateRefererURI(q);return false}if(l)h.current--;var r=h.history.length-h.current-1;h.history.splice(h.current+1,r);h.history.push(new(c("URI"))(j));return h.go(1,k,l)},getCurrentFragment:function i(){var j=c("URI").getRequestURI(false).getFragment();return j==h.orig_fragment?h.canonical.getFragment():j}};f.exports=h}),null);
__d("UITinyViewportAction",["Arbiter","ArbiterMixin","BanzaiScuba","CSS","Event","getDocumentScrollElement","queryThenMutateDOM"],(function a(b,c,d,e,f,g){__p&&__p();var h=document.documentElement,i,j,k,l,m=false,n=false,o=false,p=false,q={init:function r(s){__p&&__p();var t=c("queryThenMutateDOM").bind(null,function(){l=l||c("getDocumentScrollElement")();j=h.clientWidth<l.scrollWidth-1;k=h.clientHeight<400;i=k||j},function(){__p&&__p();if(i!==m||j!==n||k!==o){c("CSS").conditionClass(h,"tinyViewport",i);c("CSS").conditionClass(h,"tinyWidth",j);c("CSS").conditionClass(h,"tinyHeight",k);c("CSS").conditionClass(h,"canHaveFixedElements",!i);q.inform("change",i);c("Arbiter").inform("tinyViewport/change",{tiny:i,tinyWidth:j,tinyHeight:k},c("Arbiter").BEHAVIOR_STATE);m=i;n=j;o=k}if(!p){var u=new(c("BanzaiScuba"))("www_tinyview_port",null,{addBrowserFields:true});u.addInteger("clientWidth",h.clientWidth);u.addInteger("clientHeight",h.clientHeight);u.addNormal("view",i?"tiny":"normal");u.post();p=true}},"TinyViewport");t();c("Arbiter").subscribe("quickling/response",t);c("Event").listen(window,"resize",t)},isTiny:function r(){return i},isTinyWidth:function r(){return j},isTinyHeight:function r(){return k}};Object.assign(q,c("ArbiterMixin"));f.exports=q}),null);
__d("LoadingDialogDimensions",[],(function a(b,c,d,e,f,g){var h=Object.freeze({HEIGHT:96,WIDTH:300});f.exports=h}),null);
__d("AsyncDialog",["cx","AsyncRequest","CSS","DialogX","DOM","Keys","LayerFadeOnShow","LoadingDialogDimensions","Parent","React","ReactDOM","URI","XUISpinner.react","XUIDialogTitle.react","emptyFunction","forEachObject"],(function a(b,c,d,e,f,g,h){__p&&__p();var i,j;function k(s){__p&&__p();var t=c("LoadingDialogDimensions").WIDTH,u;if(s){t=parseInt(s.getAttribute("data-dialog-width"),10)||t;u=s.getAttribute("data-dialog-title")||u}if(!i){var v=c("DOM").create("div",{className:"_57-x"});i=new(c("DialogX"))({width:t,addedBehaviors:[c("LayerFadeOnShow")],xui:true},c("DOM").create("div",null,v));j=c("DOM").create("div");c("DOM").insertBefore(v,j);c("ReactDOM").render(c("React").createElement(c("XUISpinner.react"),{size:"large"}),v);i.subscribe(["key","blur"],function(w,x){if(w=="blur"||w=="key"&&x.keyCode==c("Keys").ESC){o();return false}})}if(u)c("ReactDOM").render(c("React").createElement(c("XUIDialogTitle.react"),{showCloseButton:false},u),j);else c("DOM").empty(j);i.setWidth(t);return i}var l={},m=1,n=[];function o(){c("forEachObject")(l,function(s,t){s.abandon();p(t)})}function p(s){delete l[s];if(!Object.keys(l).length)k().hide()}function q(s,t){__p&&__p();var u=m++;n[u]=t;l[u]=s;var v=p.bind(null,""+u);Object.assign(s.getData(),{__asyncDialog:u});var w=s.getRelativeTo();k(w).setCausalElement(w).show();var x=s.finallyHandler;s.setFinallyHandler(function(A){var B=A.getPayload();if(B&&B.asyncURL)r.send(new(c("AsyncRequest"))(B.asyncURL));v();x&&x(A)});var y=s.abortHandler||c("emptyFunction"),z=s.interceptHandler||c("emptyFunction");s.setInterceptHandler(function(){try{z()}finally{v()}}).setAbortHandler(function(){try{y()}finally{v()}});s.send()}var r={send:function s(t,u){q(t,u||c("emptyFunction"))},bootstrap:function s(t,u,v){__p&&__p();if(!t)return;var w=c("Parent").byClass(u,"stat_elem")||u;if(w&&c("CSS").hasClass(w,"async_saving"))return false;var x=new(c("URI"))(t).getQueryData(),y=v==="dialog",z=new(c("AsyncRequest"))().setURI(t).setData(x).setMethod(y?"GET":"POST").setReadOnly(y).setStatusElement(w);if(u){z.setRelativeTo(u);z.setNectarModuleDataSafe(u)}r.send(z)},respond:function s(t,u){var v=n[t];if(v){v(u);delete n[t]}},getLoadingDialog:function s(){return k()}};f.exports=r}),null);
__d("VideoFrameBuffer",[],(function a(b,c,d,e,f,g){__p&&__p();function h(i,j,k){"use strict";this.$VideoFrameBuffer2=j;this.$VideoFrameBuffer1=i;this.$VideoFrameBuffer3=k||"contain"}h.prototype.updateFrameBuffer=function(){"use strict";__p&&__p();if(this.$VideoFrameBuffer4){this.$VideoFrameBuffer1.width=this.$VideoFrameBuffer4;this.$VideoFrameBuffer4=null}if(this.$VideoFrameBuffer5){this.$VideoFrameBuffer1.height=this.$VideoFrameBuffer5;this.$VideoFrameBuffer5=null}var i=this.$VideoFrameBuffer1.clientWidth||this.$VideoFrameBuffer1.width,j=this.$VideoFrameBuffer1.clientHeight||this.$VideoFrameBuffer1.height,k=i,l=j,m=this.$VideoFrameBuffer2.videoWidth/this.$VideoFrameBuffer2.videoHeight,n=k/l;if(this.$VideoFrameBuffer3==="cover"){n*=-1;m*=-1}if(n>m)k=l*m;else if(n<m)l=k/m;var o=this.$VideoFrameBuffer1.getContext("2d");if(!(o instanceof window.CanvasRenderingContext2D))return;o.drawImage(this.$VideoFrameBuffer2,(i-k)/2,(j-l)/2,k,l)};h.prototype.getDOMNode=function(){"use strict";return this.$VideoFrameBuffer1};h.prototype.updateDimensions=function(i,j){"use strict";this.$VideoFrameBuffer4=i;this.$VideoFrameBuffer5=j};f.exports=h}),null);
__d("enumerate",[],(function a(b,c,d,e,f,g){"use strict";f.exports=function(b){return b.FB_enumerate}(b)}),null);
__d("Log",["sprintf"],(function a(b,c,d,e,f,g){var h={DEBUG:3,INFO:2,WARNING:1,ERROR:0};function i(k,l){var m=Array.prototype.slice.call(arguments,2),n=c("sprintf").apply(null,m),o=window.console;if(o&&j.level>=l)o[k in o?k:"log"](n)}var j={level:-1,Level:h,debug:i.bind(null,"debug",h.DEBUG),info:i.bind(null,"info",h.INFO),warn:i.bind(null,"warn",h.WARNING),error:i.bind(null,"error",h.ERROR)};f.exports=j}),null);
__d("getVendorPrefixedEventName",["fbjs/lib/ExecutionEnvironment"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(m,n){var o={};o[m.toLowerCase()]=n.toLowerCase();o["Webkit"+m]="webkit"+n;o["Moz"+m]="moz"+n;o["ms"+m]="MS"+n;o["O"+m]="o"+n.toLowerCase();return o}var i={animationend:h("Animation","AnimationEnd"),animationiteration:h("Animation","AnimationIteration"),animationstart:h("Animation","AnimationStart"),transitionend:h("Transition","TransitionEnd")},j={},k={};if(c("fbjs/lib/ExecutionEnvironment").canUseDOM){k=document.createElement("div").style;if(!("AnimationEvent"in window)){delete i.animationend.animation;delete i.animationiteration.animation;delete i.animationstart.animation}if(!("TransitionEvent"in window))delete i.transitionend.transition}function l(m){if(j[m])return j[m];else if(!i[m])return m;var n=i[m];for(var o in n)if(Object.prototype.hasOwnProperty.call(n,o)&&o in k)return j[m]=n[o];return""}f.exports=l}),null);
__d("WebGraphQLLegacyHelper",["invariant"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();f.exports={getURI:function i(j){var k=j.controller,l=j.docID,m=j.queryID,n=j.variables;l!=m&&(l||m)!=null||h(0);var o=k.getURIBuilder();if(m)o.setFBID("query_id",m);else o.setFBID("doc_id",l);if(n)o.setString("variables",JSON.stringify(n));return o.getURI()}}}),null);
__d("XWebGraphQLMutationController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/webgraphql/mutation/",{query_id:{type:"FBID"},variables:{type:"String"},doc_id:{type:"FBID"}})}),null);
__d("base62",[],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function i(j){if(!j)return"0";var k="";while(j>0){k=h[j%62]+k;j=Math.floor(j/62)}return k}f.exports=i}),null);
__d("WebGraphQLMutationBase",["invariant","CurrentUser","WebGraphQLLegacyHelper","XWebGraphQLMutationController","base62"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=0;function j(k){this.$WebGraphQLMutationBase1=k}j.prototype.__getVariables=function(){return this.$WebGraphQLMutationBase1};j.prototype.__getDocID=function(){return this.constructor.__getDocID()};j.__getController=function(){return c("XWebGraphQLMutationController")};j.__getDocID=function(){h(0)};j.getURI=function(k){return c("WebGraphQLLegacyHelper").getURI({controller:this.__getController(),docID:this.__getDocID(),variables:{data:babelHelpers["extends"]({client_mutation_id:c("base62")(i++),actor_id:c("CurrentUser").getID()},k)}})};f.exports=j}),null);