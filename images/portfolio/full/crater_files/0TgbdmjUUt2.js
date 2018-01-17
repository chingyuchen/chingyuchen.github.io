if (self.CavalryLogger) { CavalryLogger.start_js(["ctgah"]); }

__d("AYMTTipJSActions",["AYMTClientSideLogging"],(function a(b,c,d,e,f,g){"use strict";var h={callJSAction:function i(j,k,l){var m=arguments.length<=3||arguments[3]===undefined?[]:arguments[3];Event.listen(j,"click",function(event){event.preventDefault();c("AYMTClientSideLogging").logClickNew(l);k(m)})}};f.exports=h}),null);
__d("AYMTMultiTipLogger",["cx","AsyncRequest","Event","React","ReactDOM","XAYMTMultiTipAsyncClickController","XUISpinner.react","$"],(function a(b,c,d,e,f,g,h){var i={init:function j(k,l,m,n,o){c("Event").listen(k,"click",this.simplyHideAndLog.bind(this,l,m,n,o))},simplyHideAndLog:function j(k,l,m,n){if(m!==null)c("ReactDOM").render(c("React").createElement(c("XUISpinner.react"),{className:"_5kvq",size:"large"}),c("$")(m));var o=c("XAYMTMultiTipAsyncClickController").getURIBuilder().setString("aymt_data",JSON.stringify(k)).setString("target",l);if(n!==null)o.setString("extra_data",n);new(c("AsyncRequest"))(o.getURI()).send()}};f.exports=i}),null);
__d("BoostedPagelikeConstants",[],(function a(b,c,d,e,f,g){var h={APPLICATION_ID:"317954918290638",ADMINPANEL:"admin_panel",CONTEXTUALDIALOG:"contextual_dialog",PAGESMANAGER:"pages_manager",SPRINGBOARDFLYOUT:"springboard_flyout",PAGETABLHS:"page_tab_lhs",DELETE:"inactive",PAUSE:"paused",ACTIVE:"active",EXPAND:"boosted_pagelike/expand",MUTATE:"boosted_pagelike/mutate",ACCOUNT_CHANGE:"boosted_pagelike/account_change",BUDGET_CHANGE:"boosted_pagelike/budget_change",STATUS_CHANGE:"boosted_pagelike/status_change",DURATION_CHANGE:"boosted_pagelike/duration_change",DATE_PICKER_VISIBILITY:"boosted_pagelike/date_picker_visibility",CURRENCY_CHANGE:"boosted_pagelike/currency_change",TARGETING_INIT:"boosted_pagelike/targeting_init",TARGETING_CHANGE:"boosted_pagelike/targeting_change",PANEL_STATUS_CHANGE:"boosted_pagelike/panel_status_change",PANEL_STATUS_CHANGE_FINISH:"boosted_pagelike/panel_status_change_finish",MENU_CF_REDIRECT:"boosted_pagelike/menu_cf_redirect",SHOW_TEXT_POLICY_WARNING:"boosted_pagelike/show_text_policy_warning",HIDE_TEXT_POLICY_WARNING:"boosted_pagelike/hide_text_policy_warning",GEO_TARGET_LEVELS:{CITY:"city",REGION:"region",COUNTRY:"country"},MAX_COUNTRY_COUNT:25,COUNTRY_COUNT_WARNING:10,KEYWORD_SUGGESTIONS_DISPLAY_LIMIT:5,KEYWORD_CATEGORY_RAW:0,KEYWORD_CATEGORY_WIKI:1,DIALOG_PADDING_TO_BOTTOM:180,BW_DIALOG_MAX_HEIGHT:531,DIALOG_MAX_HEIGHT:519,PAYLOAD_SOURCE_CLIENT:"client",PAYLOAD_SOURCE_SERVER:"server"};f.exports=h}),null);
__d("BoostedWebsiteAboutSectionPromoteButton",["Arbiter","ArbiterMixin","BoostedActionType","BoostedPagelikeConstants","UIPagelet","mixin"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=null;h=babelHelpers.inherits(k,c("mixin")(c("ArbiterMixin")));i=h&&h.prototype;function k(l){i.constructor.call(this);this.$BoostedWebsiteAboutSectionPromoteButton1=l;this.$BoostedWebsiteAboutSectionPromoteButton2()}k.prototype.$BoostedWebsiteAboutSectionPromoteButton2=function(){if(j)c("Arbiter").unsubscribe(j);j=c("Arbiter").subscribe(c("BoostedPagelikeConstants").PANEL_STATUS_CHANGE_FINISH,function(l,m){if(m.action_type===c("BoostedActionType").WEBSITE){var n="PageStructuredContentPagelet_"+this.$BoostedWebsiteAboutSectionPromoteButton1;c("UIPagelet").loadFromEndpoint("PageStructuredContentPagelet",n,{page:this.$BoostedWebsiteAboutSectionPromoteButton1,column:"side"})}}.bind(this))};f.exports=k}),null);
__d("PageWebsiteLogger",["Banzai","Event"],(function a(b,c,d,e,f,g){var h={init:function i(j,k,l,m){c("Event").listen(j,"click",function(n){this.log({user_id:k,page_id:l,website_url:m})}.bind(this))},log:function i(j){c("Banzai").post("page_website_logger",j)}};f.exports=h}),null);
__d("MegaphoneHelper",["Animation","Arbiter","AsyncRequest","DOM","Dialog","Event","CSS","ge"],(function a(b,c,d,e,f,g){__p&&__p();var h={hideStory:function i(j,k,l,m,n){var o={mp_id:j,location:k,context:m,event:n?"action":"dismissal"};new(c("AsyncRequest"))().setURI("/ajax/megaphone/megaphone_hide.php").setMethod("POST").setData(o).setHandler(function(q){n&&n(q)}).send();var p=c("ge")(l);if(p)new(c("Animation"))(p).to("height",0).duration(500).hide().go()},createModalStory:function i(j,k,l,m){var n;if(!j.buttons||!j.buttons.length){j.buttons=c("Dialog").CLOSE;n=h.hideStory(k,l,m,null)}var o=new(c("Dialog"))(j);if(n)o.setHandler(n);o.show()},buttonOnClick:function i(j,k,l,m,n,o,p,q){__p&&__p();var r=function r(){if(n)new(c("AsyncRequest"))().setURI(m).send();else if(!p)document.location.href=m};if(o){h.hideStory(j,k,q||"",l,r);if(p&&m)window.open(m)}else r()},renderFullWidth:function i(j,k,l){var m=c("ge")(j);c("DOM").prependContent(m,k);c("Arbiter").inform("Megaphone/show",j,c("Arbiter").BEHAVIOR_PERSISTENT)},hideMegaphoneWithoutRequest:function i(j,k){c("Event").listen(j,"click",function(){c("CSS").hide(k)})}};f.exports=h}),null);
__d("legacy:megaphone",["MegaphoneHelper"],(function a(b,c,d,e,f,g){b.MegaphoneHelper=c("MegaphoneHelper")}),3);
__d("XPageLHSUnitsReorderingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/pages/lhs/reorder/",{page_id:{type:"Int",required:true},visible_units:{type:"IntVector",required:true},__asyncDialog:{type:"Int"}})}),null);
__d("PagesSideUnitsOrderCreator",["csx","AsyncRequest","DOM","XPageLHSUnitsReorderingController"],(function a(b,c,d,e,f,g,h){__p&&__p();var i={registerMenuItem:function j(k,l,m){__p&&__p();k.subscribe("itemclick",function(n,o){if(o&&o.item&&o.item.getValue()===l){var p="._57dz div[data-id]",q=c("DOM").scry(document.body,p),r=[];for(var s=0,t=q.length;s<t;s++)r.push(q[s].getAttribute("data-id"));if(q){var u=c("XPageLHSUnitsReorderingController").getURIBuilder().setInt("page_id",m).setIntVector("visible_units",r).getURI();new(c("AsyncRequest"))(u).send()}}})}};f.exports=i}),null);
__d("PageGoalConstants",["fbt","keyMirror"],(function a(b,c,d,e,f,g,h){var i={goalName:c("keyMirror")({awareness:null,engagement:null,sales:null}),channelName:c("keyMirror")({card:null,dialog:null})};f.exports=i}),null);
__d("XPageGoalsDialogChannelController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/pages/page_goals_dialog/",{pageid:{type:"Int",required:true},force_nullstate:{type:"Bool",defaultValue:false},sessionid:{type:"String"},referrer:{type:"String"},__asyncDialog:{type:"Int"}})}),null);
__d("PageGoalChannel",["csx","cx","AsyncDialog","AsyncRequest","CSS","Event","PageGoalConstants","XPageGoalsDialogChannelController","tidyEvent"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j={xoutAllTipsShowNullState:function k(l,m,n){__p&&__p();if(l==c("PageGoalConstants").channelName.card){var o=document.getElementById(m);if(o.children.length===1)c("CSS").show(o.children[0])}else if(l==c("PageGoalConstants").channelName.dialog){var p=document.getElementsByClassName("_gvo"),q=document.getElementsByClassName("_2a2p");if(p.length===0&&q.length===0){var r=document.getElementsByClassName("_33gf")[0];r.remove();var s=c("XPageGoalsDialogChannelController").getURIBuilder().setInt("pageid",n).setBool("force_nullstate",true).setString("referrer","tips_dialog_channel").getURI();c("AsyncDialog").send(new(c("AsyncRequest"))(s))}}},onClickTipMarkTipRead:function k(l,m){var n=c("Event").listen(l,"click",function(event){if(c("CSS").matchesSelector(m,"._1h50")){c("CSS").addClass(m,"_1h5g");c("CSS").removeClass(m,"_1h50")}else n.remove()})},markTipRead:function k(l){var m=document.getElementById(l);if(m&&m.children.length===1){var n=m.children[0];if(c("CSS").matchesSelector(n,"._1h50")){c("CSS").addClass(n,"_1h5g");c("CSS").removeClass(n,"_1h50")}}},hideDialogOnClick:function k(l){c("tidyEvent")(c("Event").listen(l,"click",function(){var m=document.getElementsByClassName("_33gf")[0];m&&m.remove()}))}};f.exports=j}),null);
__d("AYMTCreatePageCustomCTATipOpenDialogAction",["CustomCTAUtils"],(function a(b,c,d,e,f,g){"use strict";function h(){c("CustomCTAUtils").openCreateDialogFromCallout()}f.exports=h}),null);
__d("TimelineSecondaryColumnUnitList",["csx","cx","CSS","DOM","Event","Run","mixInEventEmitter"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j=30;function k(l,m){"use strict";var n=c("Event").listen(m,"click",function(){this.$TimelineSecondaryColumnUnitList1=c("DOM").scry(l,"._16f_");this.$TimelineSecondaryColumnUnitList2();c("DOM").remove(m);this.emit("expanded")}.bind(this));c("Run").onLeave(n.remove.bind(n))}k.prototype.$TimelineSecondaryColumnUnitList2=function(){"use strict";if(!this.$TimelineSecondaryColumnUnitList1.length)return;c("CSS").removeClass(this.$TimelineSecondaryColumnUnitList1.shift(),"_16f_");setTimeout(this.$TimelineSecondaryColumnUnitList2.bind(this),j)};c("mixInEventEmitter")(k,{expanded:true});f.exports=k}),null);