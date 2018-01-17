if (self.CavalryLogger) { CavalryLogger.start_js(["caByk"]); }

__d("AYMTClientSideChannelNames",[],(function a(b,c,d,e,f,g){f.exports={AYMT_ADS_CAMPAIGN_EDIT_FLOW_MEGAPHONE_CHANNEL:"AYMTAdsCampaignEditFlowMegaphoneChannel",AYMT_BOOSTED_COMPONENT_PROMOTIONS_CHANNEL:"AYMTBoostedComponentPromotionsChannel",AYMT_FLASH_INSIGHTS_CHANNEL:"AYMTFlashInsightsChannel",AYMT_ADS_INSIGHTS_EXPORT_CHANNEL:"AYMTAdsInsightsExportChannel",AYMT_CAMPAIGN_MANAGER_HOME_CHANNEL:"AYMTCampaignManagerHomeChannel",AYMT_CAMPAIGN_MANAGER_MEGAPHONE_CHANNEL:"AYMTCampaignManagerMegaphoneChannel",AYMT_POWER_EDITOR_CREATION_MEGAPHONE_CHANNEL:"AYMTPowerEditorCreationMegaphoneChannel",AYMT_PROMOTIONS_MANAGER_BENCHMARK_CHANNEL:"AYMTPromotionsManagerBenchmarkChannel",AYMT_WWW_ADS_DELIVERY_CHANNEL:"AYMTWWWAdsDeliveryChannel",AYMT_WWW_GROUPS_INSIGHTS_CHANNEL:"AYMTWWWGroupsInsightsChannel",AYMT_WWW_GROUPS_MALL_CARD_CHANNEL:"AYMTWWWGroupsMallCardChannel",AYMT_WWW_GROUPS_MALL_MODAL_CHANNEL:"AYMTWWWGroupsMallModalChannel",AYMT_WWW_GROUPS_MALL_RHC_CHANNEL:"AYMTWWWGroupsRHCChannel",AYMT_WWW_GROUPS_MALL_PEEKBAR_CHANNEL:"AYMTWWWGroupsMallPeekBarChannel"}}),null);
__d("AYMTClientSideParam",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({ACTOR_ID:"actor_id",AD_ACCOUNT_ID:"ad_account_id",ADGROUP_ID:"adgroup_id",APP_ID:"app_id",BUSINESS_ID:"business_id",CACHE:"cache",CAMPAIGN_GROUP_ID:"campaign_group_id",CAMPAIGN_ID:"campaign_id",CAMPAIGN_IDS:"campaign_ids",CHANNEL:"channel",ESTIMATED_AUDIENCE_SIZE:"estimated_audience_size",GROUP_ID:"group_id",INSIGHTS_METRIC:"insights_metric",INSTAGRAM_USER_ID:"instagram_user_id",INVALIDATE:"invalidate",PAGE_ID:"page_id",POST_ID:"post_id",TARGETING_GENDER:"targeting_gender",TIP:"tip",USER_ID:"user_id",VALIDATE:"validate"})}),null);
__d("AYMTTipActions",["AYMTClientSideChannelNames","AYMTTipActionTypes"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h={dispatchTips:function i(j,k,l,m){__p&&__p();switch(k){case c("AYMTClientSideChannelNames").AYMT_ADS_CAMPAIGN_EDIT_FLOW_MEGAPHONE_CHANNEL:l.handleUpdateFromServerResponse({data:{channelName:k,tips:j},type:c("AYMTTipActionTypes").TIPS_LOADED});break;case c("AYMTClientSideChannelNames").AYMT_BOOSTED_COMPONENT_TARGETING_CHANNEL:case c("AYMTClientSideChannelNames").AYMT_BOOSTED_COMPONENT_BUDGET_AND_DURATION_CHANNEL:case c("AYMTClientSideChannelNames").AYMT_BOOSTED_COMPONENT_PAYMENTS_SECTION_CHANNEL:l.handleUpdateFromServerResponse({data:{channelName:k,tips:j},actionType:c("AYMTTipActionTypes").TIPS_LOADED});break;case c("AYMTClientSideChannelNames").AYMT_FLASH_INSIGHTS_CHANNEL:case c("AYMTClientSideChannelNames").AYMT_BOOSTED_COMPONENT_PROMOTIONS_CHANNEL:case c("AYMTClientSideChannelNames").AYMT_PROMOTIONS_MANAGER_BENCHMARK_CHANNEL:l.dispatch({data:{channelName:k,tips:j,params:m},type:c("AYMTTipActionTypes").TIPS_LOADED});break;case c("AYMTClientSideChannelNames").AYMT_ADS_INSIGHTS_NAM_PERFORMANCE_CHANNEL:case c("AYMTClientSideChannelNames").AYMT_POWER_EDITOR_CREATION_MEGAPHONE_CHANNEL:l.dispatch({data:{channelName:k,tips:j,params:m},action:{actionType:c("AYMTTipActionTypes").TIPS_LOADED,data:{channelName:k,tips:j,params:m,type:c("AYMTTipActionTypes").TIPS_LOADED},type:c("AYMTTipActionTypes").TIPS_LOADED}});break;case c("AYMTClientSideChannelNames").AYMT_CAMPAIGN_MANAGER_HOME_CHANNEL:l.handleUpdateFromServerResponse({data:{channelName:k,tips:j},type:c("AYMTTipActionTypes").TIPS_LOADED});break;case c("AYMTClientSideChannelNames").AYMT_CAMPAIGN_MANAGER_MEGAPHONE_CHANNEL:l.handleUpdateFromServerResponse({data:{channelName:k,tips:j},type:c("AYMTTipActionTypes").TIPS_LOADED});break;case c("AYMTClientSideChannelNames").AYMT_WWW_ADS_DELIVERY_CHANNEL:l.handleUpdateFromServerResponse({data:{channelName:k,tips:j},type:c("AYMTTipActionTypes").TIPS_LOADED});break;case c("AYMTClientSideChannelNames").AYMT_WWW_GROUPS_INSIGHTS_CHANNEL:case c("AYMTClientSideChannelNames").AYMT_WWW_GROUPS_MALL_CARD_CHANNEL:case c("AYMTClientSideChannelNames").AYMT_WWW_GROUPS_MALL_MODAL_CHANNEL:case c("AYMTClientSideChannelNames").AYMT_WWW_GROUPS_MALL_PEEKBAR_CHANNEL:l.handleUpdateFromServerResponse({data:{channelName:k,tips:j},type:c("AYMTTipActionTypes").TIPS_LOADED});break;case c("AYMTClientSideChannelNames").AYMT_WWW_GROUPS_MALL_RHC_CHANNEL:l.handleUpdateFromServerResponse({data:{channelName:k,tips:j},type:c("AYMTTipActionTypes").TIPS_LOADED});break;default:throw new Error("Unregistered %s channel for AYMTTipActions.dispatchTips",k)}},dispatchTipsLoadingError:function i(j,k,l){l.handleUpdateFromServerResponse({data:{channelName:k,error:j},actionType:c("AYMTTipActionTypes").TIPS_LOADED_ERROR})},dismissTips:function i(j,k,l){switch(j){case c("AYMTClientSideChannelNames").AYMT_ADS_CAMPAIGN_EDIT_FLOW_MEGAPHONE_CHANNEL:case c("AYMTClientSideChannelNames").AYMT_POWER_EDITOR_CREATION_MEGAPHONE_CHANNEL:k.handleUpdateFromServerResponse({channelName:j,type:c("AYMTTipActionTypes").TIPS_DISMISSED});break;case c("AYMTClientSideChannelNames").AYMT_WWW_ADS_DELIVERY_CHANNEL:k.handleUpdateFromServerResponse({data:{channelName:j,tipData:l},type:c("AYMTTipActionTypes").TIPS_DISMISSED});break}}};f.exports=h}),null);
__d("XAYMTClientSideTipsAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/ads/growth/aymt/load_client_side_tips/",{cache:{type:"Int"},channel:{type:"String"},channel_name:{type:"String",required:true},invalidate:{type:"Int"},params:{type:"StringToStringMap"},previous_params:{type:"StringToStringMap"},previous_tips_aymt_data:{type:"StringVector"},request_id:{type:"String",required:true},tip:{type:"String"},validate:{type:"Int"}})}),null);
__d("AYMTTipsLoader",["invariant","Promise","AsyncRequest","AYMTClientSideParam","AYMTTipActions","AYMTTipSettings","XAYMTClientSideTipsAsyncController","ex","mergeDeepInto"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();function i(){this.$AYMTTipsLoaderClass1={};this.$AYMTTipsLoaderClass2={};this.$AYMTTipsLoaderClass3={};this.$AYMTTipsLoaderClass4={};this.$AYMTTipsLoaderClass5={}}i.prototype.$AYMTTipsLoaderClass6=function(k,l){__p&&__p();return new(c("Promise"))(function(m,n){var o=new Date(),p="id_"+Math.random()+"_"+o.getTime();this.$AYMTTipsLoaderClass1[p]={resolve:m};this.$AYMTTipsLoaderClass2[l]=p;this.$AYMTTipsLoaderClass3[l]=k;var q=c("XAYMTClientSideTipsAsyncController").getURIBuilder().setString("channel_name",l).setString("request_id",p).setStringVector("previous_tips_aymt_data",this.$AYMTTipsLoaderClass5[l]).setStringToStringMap("params",k).setStringToStringMap("previous_params",this.$AYMTTipsLoaderClass4[l]),r=k[c("AYMTClientSideParam").CHANNEL];if(!(this.$AYMTTipsLoaderClass1[l]||r&&r!==l))q.setString("channel",r).setInt("cache",k[c("AYMTClientSideParam").CACHE]).setInt("validate",k[c("AYMTClientSideParam").VALIDATE]).setString("tip",k[c("AYMTClientSideParam").TIP]).setInt("invalidate",k[c("AYMTClientSideParam").INVALIDATE]);new(c("AsyncRequest"))().setURI(q.getURI()).setErrorHandler(function(s){n(s.errorDescription)}).setAllowCrossPageTransition(true).send()}.bind(this))};i.prototype.loadTips=function(k,l,m){__p&&__p();this.$AYMTTipsLoaderClass6(k,l).done(function(n){if(n&&n.tips&&Array.isArray(n.tips)){c("AYMTTipActions").dispatchTips(n.tips,l,m,this.$AYMTTipsLoaderClass3[l]);this.$AYMTTipsLoaderClass4[l]={};c("mergeDeepInto")(this.$AYMTTipsLoaderClass4[l],k);this.$AYMTTipsLoaderClass5[l]=n.tips.map(function(o){return JSON.stringify(o[c("AYMTTipSettings").AYMT_DATA])})}}.bind(this),function(n){var o=new Error(c("ex")("Tip loading request failed for %s channel %s",l,n.__html));c("AYMTTipActions").dispatchTipsLoadingError(o,l,m)})};i.prototype.setTips=function(k,l,m){k&&k.tips||h(0);this.$AYMTTipsLoaderClass1[m]&&this.$AYMTTipsLoaderClass1[m].resolve||h(0);if(this.$AYMTTipsLoaderClass2[l]!==m)this.$AYMTTipsLoaderClass1[m].resolve(null);else this.$AYMTTipsLoaderClass1[m].resolve(k);delete this.$AYMTTipsLoaderClass1[m]};var j=new i();f.exports=j}),null);
__d("MuteMemberHelper",["Arbiter","PopoverAsyncMenu"],(function a(b,c,d,e,f,g){var h="group_member_muted";"use strict";var i={emitMemberMuted:function j(k){c("Arbiter").inform(h,{groupID:k})},refetchOnGroupMemberMuted:function j(k,l){c("Arbiter").subscribe(h,function(m,n){if(n.groupID===l)k._refetchMenu()})}};f.exports=i}),null);
__d("AYMTActionKey",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({AUXILIARY:"auxiliary",PRIMARY:"primary",SECONDARY:"secondary"})}),null);
__d("AYMTClientCreativeSpecField",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({RENDERING_CLASS:"client_side_rendering_class",RENDERING_PARAMS:"client_side_rendering_params",TIP_CLASS:"tip_class",ADS_DELIVERY_TIP_PARAMS:"ads_delivery_tip_params"})}),null);
__d("AYMTClientCreativeSpecParamField",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({ACTIONS:"actions",MULTI_SPECS:"multi_specs",BUTTON_ACTION_STATUS:"tip_action_status",BODY:"tip_body",BUTTON_ACTION_LINK:"tip_link",BUTTON_ACTION_LINK_REL:"tip_link_rel",BUTTON_ACTION_TEXT:"tip_action_label",BUTTON_JS_ACTION:"tip_js_action",BUTTON_JS_PARAMS:"tip_js_params",FINAL_XHP:"cms-tip",IMAGE:"tip_image",IMAGE_URI:"tip_image_uri",IS_ASYNC_BUTTON_LINK:"tip_is_async",NATIVE_ACTION_NAME:"tip_native_action_name",TIP_MESSAGE_SEVERITY:"tip_message_severity",TITLE:"tip_title",IS_INLINE:"tip_is_inline",IS_STANDALONE:"tip_is_standalone"})}),null);
__d("AYMTGroupsDispatcher",["ExplicitRegistrationDispatcher"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i;h=babelHelpers.inherits(j,c("ExplicitRegistrationDispatcher"));i=h&&h.prototype;function j(){i.constructor.call(this,{strict:false})}j.prototype.handleUpdate=function(k){this.dispatch(k)};j.prototype.handleUpdateFromServerResponse=function(k){this.handleUpdate(k)};j.prototype.handleUpdateFromViewAction=function(k){this.handleUpdate(k)};j.prototype.handleUpdateFromInitialServer=function(k){this.handleUpdate(k)};f.exports=new j()}),null);
__d("AYMTGroupsMallModalFluxStore",["AYMTClientCreativeSpecField","AYMTClientCreativeSpecParamField","AYMTClientSideChannelNames","AYMTClientSpecField","AYMTGroupsDispatcher","AYMTTipActionTypes","AYMTTipsLoader","FluxReduceStore","immutable"],(function a(b,c,d,e,f,g){__p&&__p();var h,i,j,k,l=c("immutable").List,m=c("immutable").Map,n={tips:l([]),tipsFetchState:"no_fetch"};h=babelHelpers.inherits(o,c("immutable").Record(n));i=h&&h.prototype;function o(){"use strict";h.apply(this,arguments)}j=babelHelpers.inherits(p,c("FluxReduceStore"));k=j&&j.prototype;p.prototype.getInitialState=function(){"use strict";return new o()};p.prototype.$AYMTGroupsMallModalFluxStore1=function(){"use strict";return c("AYMTClientSideChannelNames").AYMT_WWW_GROUPS_MALL_MODAL_CHANNEL};p.prototype.reduce=function(q,r){"use strict";__p&&__p();switch(r.type){case c("AYMTTipActionTypes").TIPS_REQUESTED:if(r.channelName===this.$AYMTGroupsMallModalFluxStore1()){c("AYMTTipsLoader").loadTips(r.data,r.channelName,c("AYMTGroupsDispatcher"));q=q.merge({tipsFetchState:"fetch_in_progress"})}return q;case c("AYMTTipActionTypes").TIPS_LOADED:if(r.data.channelName===this.$AYMTGroupsMallModalFluxStore1()&&r.data.tips.length>0){var s=r.data.tips;return q.merge({tips:l(s.map(function(t){var u=t.client_side_rendering_spec.client_side_rendering_params,v={};v[c("AYMTClientCreativeSpecField").RENDERING_CLASS]=t.client_side_rendering_spec.client_side_rendering_class;v[c("AYMTClientSpecField").AYMT_DATA]=t.aymt_data;v[c("AYMTClientCreativeSpecParamField").ACTIONS]=u.actions;v[c("AYMTClientCreativeSpecParamField").BODY]=u.tip_body;v[c("AYMTClientCreativeSpecParamField").BUTTON_ACTION_TEXT]=u.tip_action_label;v[c("AYMTClientCreativeSpecParamField").TITLE]=u.tip_title;v[c("AYMTClientCreativeSpecParamField").IMAGE_URI]=u.tip_image_uri;return m(v)}))})}else if(this.$AYMTGroupsMallModalFluxStore1()===r.data.channelName)q=q.merge({tipsFetchState:"fetch_completed"});return q;default:return q}};function p(){"use strict";j.apply(this,arguments)}f.exports=new p(c("AYMTGroupsDispatcher"))}),null);
__d("XGroupMallNuxRenderController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/groups/mall_nux_render/",{group_id:{type:"FBID",required:true},hoist_nux_type:{type:"Enum",enumType:1}})}),null);
__d("GroupsMallModalAYMTContainer.react",["AYMTClientCreativeSpecField","AYMTClientCreativeSpecParamField","AYMTActionKey","AYMTClientSpecField","AYMTClientSideChannelNames","AYMTClientSideParam","AYMTGroupsDispatcher","AYMTGroupsMallModalFluxStore","AYMTTipActionTypes","AsyncRequest","FluxContainer","immutable","React","XGroupMallNuxRenderController"],(function a(b,c,d,e,f,g){__p&&__p();var h,i,j=c("immutable").List,k=c("immutable").Map;h=babelHelpers.inherits(l,c("React").Component);i=h&&h.prototype;function l(){var m,n;"use strict";for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=i.constructor).call.apply(m,[this].concat(p)),this.$GroupsMallModalAYMTContainer1=false,n}l.getStores=function(){"use strict";return[c("AYMTGroupsMallModalFluxStore")]};l.calculateState=function(){"use strict";var m=c("AYMTGroupsMallModalFluxStore").getState(),n=m.tips,o=m.tipsFetchState;return{tips:n,tipsFetchState:o}};l.prototype.componentDidMount=function(){"use strict";var m={};m[c("AYMTClientSideParam").GROUP_ID]=this.props.groupID;c("AYMTGroupsDispatcher").dispatch({data:m,type:c("AYMTTipActionTypes").TIPS_REQUESTED,channelName:this.$GroupsMallModalAYMTContainer2()});this.$GroupsMallModalAYMTContainer3()};l.prototype.componentDidUpdate=function(){"use strict";this.$GroupsMallModalAYMTContainer3()};l.prototype.render=function(){"use strict";var m=this.state.tips;if(!m||m.count()==0)return null;var n=m.get(0),o=n.get(c("AYMTClientCreativeSpecField").RENDERING_CLASS);if(!o)return null;var p=n.get(c("AYMTClientCreativeSpecParamField").ACTIONS)[c("AYMTActionKey").PRIMARY],q=n.get(c("AYMTClientCreativeSpecParamField").ACTIONS)[c("AYMTActionKey").SECONDARY];return c("React").createElement(o,{aymtData:n.get(c("AYMTClientSpecField").AYMT_DATA),title:n.get(c("AYMTClientCreativeSpecParamField").TITLE),body:n.get(c("AYMTClientCreativeSpecParamField").BODY),image:n.get(c("AYMTClientCreativeSpecParamField").IMAGE_URI),primaryActionLink:p[c("AYMTClientCreativeSpecParamField").BUTTON_ACTION_LINK],primaryActionLabel:p[c("AYMTClientCreativeSpecParamField").BUTTON_ACTION_TEXT],isPrimaryActionAsync:p[c("AYMTClientCreativeSpecParamField").IS_ASYNC_BUTTON_LINK],secondaryActionLink:q[c("AYMTClientCreativeSpecParamField").BUTTON_ACTION_LINK],secondaryActionLabel:q[c("AYMTClientCreativeSpecParamField").BUTTON_ACTION_TEXT],isSecondaryActionAsync:q[c("AYMTClientCreativeSpecParamField").IS_ASYNC_BUTTON_LINK]})};l.prototype.$GroupsMallModalAYMTContainer2=function(){"use strict";return c("AYMTClientSideChannelNames").AYMT_WWW_GROUPS_MALL_MODAL_CHANNEL};l.prototype.$GroupsMallModalAYMTContainer3=function(){"use strict";__p&&__p();var m=this.state,n=m.tipsFetchState,o=m.tips,p=this.props,q=p.canFallBackToInlineNux,r=p.hoistNuxType;if(n!=="fetch_completed"||this.$GroupsMallModalAYMTContainer1||o&&o.count()>0)return;if(!q&&!r)return;var s=this.props.groupID,t=c("XGroupMallNuxRenderController").getURIBuilder().setFBID("group_id",s);if(r)t.setEnum("hoist_nux_type",r);new(c("AsyncRequest"))().setURI(t.getURI()).send();this.$GroupsMallModalAYMTContainer1=true};f.exports=c("FluxContainer").create(l)}),null);
__d("GroupsMallModalAYMTTopLevelContainer.react",["GroupsMallModalAYMTContainer.react","React"],(function a(b,c,d,e,f,g){__p&&__p();var h,i;h=babelHelpers.inherits(j,c("React").PureComponent);i=h&&h.prototype;j.prototype.render=function(){"use strict";return c("React").createElement(c("GroupsMallModalAYMTContainer.react"),this.props)};function j(){"use strict";h.apply(this,arguments)}f.exports=j}),null);
__d("AYMTGroupsMallPeekBarFluxStore",["AYMTClientCreativeSpecField","AYMTClientCreativeSpecParamField","AYMTClientSideChannelNames","AYMTClientSideParam","AYMTClientSpecField","AYMTGroupsDispatcher","AYMTTipActionTypes","AYMTTipsLoader","FluxReduceStore","immutable"],(function a(b,c,d,e,f,g){__p&&__p();var h,i,j,k,l=c("immutable").List,m=c("immutable").Map,n={tips:l([])};h=babelHelpers.inherits(o,c("immutable").Record(n));i=h&&h.prototype;function o(){"use strict";h.apply(this,arguments)}j=babelHelpers.inherits(p,c("FluxReduceStore"));k=j&&j.prototype;p.prototype.getInitialState=function(){"use strict";return new o()};p.prototype.$AYMTGroupsMallPeekBarFluxStore1=function(){"use strict";return c("AYMTClientSideChannelNames").AYMT_WWW_GROUPS_MALL_PEEKBAR_CHANNEL};p.prototype.reduce=function(q,r){"use strict";__p&&__p();switch(r.type){case c("AYMTTipActionTypes").TIPS_REQUESTED:if(r.data[c("AYMTClientSideParam").CHANNEL]===this.$AYMTGroupsMallPeekBarFluxStore1())c("AYMTTipsLoader").loadTips(r.data,r.data[c("AYMTClientSideParam").CHANNEL],c("AYMTGroupsDispatcher"));return q;case c("AYMTTipActionTypes").TIPS_LOADED:if(r.data.channelName===this.$AYMTGroupsMallPeekBarFluxStore1()&&r.data.tips.length>0){var s=r.data.tips;return q.merge({tips:l(s.map(function(t){var u,v=t.client_side_rendering_spec.client_side_rendering_params,w=(u={},u[c("AYMTClientCreativeSpecField").RENDERING_CLASS]=t.client_side_rendering_spec.client_side_rendering_class,u[c("AYMTClientSpecField").AYMT_DATA]=t.aymt_data,u[c("AYMTClientCreativeSpecParamField").TITLE]=v.tip_title,u[c("AYMTClientCreativeSpecParamField").BODY]=v.tip_body,u[c("AYMTClientCreativeSpecParamField").IMAGE_URI]=v.tip_image_uri,u[c("AYMTClientCreativeSpecParamField").ACTIONS]=v.actions,u);return m(w)}))})}return q;default:return q}};function p(){"use strict";j.apply(this,arguments)}f.exports=new p(c("AYMTGroupsDispatcher"))}),null);
__d("GroupsMallPeekBarAYMTContainer.react",["AYMTClientCreativeSpecField","AYMTClientCreativeSpecParamField","AYMTActionKey","AYMTClientSpecField","AYMTClientSideChannelNames","AYMTClientSideParam","AYMTGroupsDispatcher","AYMTGroupsMallPeekBarFluxStore","FluxContainer","XUICard.react","immutable","React","AYMTTipActionTypes"],(function a(b,c,d,e,f,g){__p&&__p();var h,i,j=c("immutable").List,k=c("immutable").Map;h=babelHelpers.inherits(l,c("React").Component);i=h&&h.prototype;l.getStores=function(){"use strict";return[c("AYMTGroupsMallPeekBarFluxStore")]};l.calculateState=function(){"use strict";var m=c("AYMTGroupsMallPeekBarFluxStore").getState(),n=m.tips;return{tips:n}};l.prototype.componentDidMount=function(){var m;"use strict";var n=(m={},m[c("AYMTClientSideParam").GROUP_ID]=this.props.groupID,m[c("AYMTClientSideParam").CHANNEL]=this.$GroupsMallPeekBarAYMTContainer1(),m);c("AYMTGroupsDispatcher").dispatch({data:n,type:c("AYMTTipActionTypes").TIPS_REQUESTED})};l.prototype.$GroupsMallPeekBarAYMTContainer1=function(){"use strict";return c("AYMTClientSideChannelNames").AYMT_WWW_GROUPS_MALL_PEEKBAR_CHANNEL};l.prototype.render=function(){"use strict";__p&&__p();var m=this.state.tips;if(!m||m.count()==0)return null;var n=m.slice(0,4);return c("React").createElement(c("XUICard.react"),null,n.map(function(o,p){var q=o.get(c("AYMTClientCreativeSpecField").RENDERING_CLASS);if(!q)return null;var r=o.get(c("AYMTClientCreativeSpecParamField").ACTIONS)[c("AYMTActionKey").PRIMARY];return c("React").createElement(q,{key:p,aymtData:o.get(c("AYMTClientSpecField").AYMT_DATA),image:o.get(c("AYMTClientCreativeSpecParamField").IMAGE_URI),title:o.get(c("AYMTClientCreativeSpecParamField").TITLE),body:o.get(c("AYMTClientCreativeSpecParamField").BODY),primaryActionLink:r[c("AYMTClientCreativeSpecParamField").BUTTON_ACTION_LINK],primaryActionLabel:r[c("AYMTClientCreativeSpecParamField").BUTTON_ACTION_TEXT],isPrimaryActionAsync:r[c("AYMTClientCreativeSpecParamField").IS_ASYNC_BUTTON_LINK]})}))};function l(){"use strict";h.apply(this,arguments)}f.exports=c("FluxContainer").create(l)}),null);
__d("GroupsMallPeekBarAYMTTopLevelContainer.react",["GroupsMallPeekBarAYMTContainer.react","React"],(function a(b,c,d,e,f,g){__p&&__p();var h,i;h=babelHelpers.inherits(j,c("React").PureComponent);i=h&&h.prototype;j.prototype.render=function(){"use strict";return c("React").createElement(c("GroupsMallPeekBarAYMTContainer.react"),this.props)};function j(){"use strict";h.apply(this,arguments)}f.exports=j}),null);
__d("GroupViewportDurationTracking",["csx","Arbiter","StreamViewportTracking","Banzai","ge","viewportTrackingBuilder"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j;function k(n,o){var p=c("ge")("pagelet_group_mall");return c("StreamViewportTracking").getBehavior(n,p,o)}i=babelHelpers.inherits(l,c("StreamViewportTracking"));j=i&&i.prototype;l.prototype.init=function(n){j.init.call(this,n)};l.prototype.getAllStoriesFromCache=function(){return this.behavior.getAllStories()};l.prototype.getSessionID=function(){return null};l.prototype.cleanup=function(){m.clearSingleton();j.cleanup.call(this)};l.prototype.sendDataToLog=function(n,o){if(this.useBanzai)c("Banzai").post("group_feed_tracking",o)};function l(){i.apply(this,arguments)}var m=c("viewportTrackingBuilder")(function(n){var o=new l(k(n,"._5pat"));o.init(n);return o});m.init=m.factory.bind(m);f.exports=m}),null);
__d("NotificationsSelector",["Parent","submitForm","AsyncRequest","Event"],(function a(b,c,d,e,f,g){__p&&__p();function h(j,k,l){k.subscribe("change",function(m,n){l.value=n.value;var o=c("Parent").byTag(j,"form");o&&c("submitForm")(o)})}function i(j,k,l,m,n,o){k.subscribe("change",function(p,q){new(c("AsyncRequest"))().setURI("/ajax/groups/notifications/update.php").setData({setting:q.value,group_id:m}).setMethod("POST").send()});if(n)n.subscribe("hide",function(){if(o)new(c("AsyncRequest"))().setURI(o).setData({group_id:m}).setMethod("POST").send()});c("Event").listen(j,"click",function(){if(n&&n.isShown())n.hide()})}f.exports.bindForm=h;f.exports.updateNotif=i}),null);
__d("PopoverMenuDynamicIcon",["csx","Button","CSS","DOM","DOMQuery"],(function a(b,c,d,e,f,g,h){__p&&__p();function i(j){"use strict";this._popoverMenu=j}i.prototype.enable=function(){"use strict";this._setMenuSubscription=this._popoverMenu.subscribe("setMenu",this._onSetMenu.bind(this))};i.prototype.disable=function(){"use strict";this._popoverMenu.unsubscribe(this._setMenuSubscription);this._setMenuSubscription=null;this._removeChangeSubscription()};i.prototype._onSetMenu=function(){"use strict";__p&&__p();this._removeChangeSubscription();this._menu=this._popoverMenu.getMenu();this._changeSubscription=this._menu.subscribe("change",function(j,k){__p&&__p();var l=k.item;if(k[0])l=k[0].item;if(!l)return;var m=l.getIcon();m=m?m.cloneNode(true):null;var n=this._popoverMenu.getTriggerElem(),o=c("DOMQuery").scry(n,"._-xe")[0];if(o&&o.firstChild){c("DOM").replace(o.firstChild,m);c("CSS").conditionClass(o,"hidden_elem",m==null);return}var p=c("DOMQuery").scry(n,"span._55pe")[0];if(p){var q=p.firstChild;if(!q||!c("CSS").hasClass(q,"img"))c("DOM").prependContent(p,m)}else c("Button").setIcon(n,m)}.bind(this))};i.prototype._removeChangeSubscription=function(){"use strict";if(this._changeSubscription){this._menu.unsubscribe(this._changeSubscription);this._changeSubscription=null}};Object.assign(i.prototype,{_setMenuSubscription:null,_changeSubscription:null});f.exports=i}),null);
__d("StickyPermalink",["Arbiter","FIGEntityPageLayout","Run","SubscriptionsHandler","UFIUIEvents"],(function a(b,c,d,e,f,g){var h={init:function i(j){c("FIGEntityPageLayout").register(j);var k=new(c("SubscriptionsHandler"))();k.addSubscriptions(c("Arbiter").subscribe(c("UFIUIEvents").InputHeightChanged,c("FIGEntityPageLayout").update),c("Arbiter").subscribe(c("UFIUIEvents").Changed,c("FIGEntityPageLayout").update),c("Run").onLeave(function(){k&&k.release();k=null}))}};f.exports=h}),null);
__d("XUISubNavigationDynamicShortcuts",["cx","CSS","Event","Run","SubscriptionsHandler","ViewportBounds","clamp","getViewportDimensions","throttle"],(function a(b,c,d,e,f,g,h){__p&&__p();var i="_2u38",j=32,k=20;l.init=function(m,n,o){"use strict";var p=new l(m,n,o);return p};function l(m,n,o){"use strict";__p&&__p();this.$XUISubNavigationDynamicShortcuts6=function(){__p&&__p();var p=c("getViewportDimensions")().height-c("ViewportBounds").getTop()-c("ViewportBounds").getBottom(),q=this.$XUISubNavigationDynamicShortcuts3.offsetHeight-this.$XUISubNavigationDynamicShortcuts5*j,r=c("clamp")(Math.floor((p-q)/j),0,this.$XUISubNavigationDynamicShortcuts1);if(r===this.$XUISubNavigationDynamicShortcuts5)return;var s=this.$XUISubNavigationDynamicShortcuts7(this.$XUISubNavigationDynamicShortcuts5);if(s){c("CSS").removeClass(this.$XUISubNavigationDynamicShortcuts2,s);c("CSS").removeClass(this.$XUISubNavigationDynamicShortcuts2,i)}var t=this.$XUISubNavigationDynamicShortcuts7(r);if(t){c("CSS").addClass(this.$XUISubNavigationDynamicShortcuts2,t);c("CSS").addClass(this.$XUISubNavigationDynamicShortcuts2,i)}this.$XUISubNavigationDynamicShortcuts5=r}.bind(this);this.$XUISubNavigationDynamicShortcuts1=Math.min(o||k,k);this.$XUISubNavigationDynamicShortcuts2=m;this.$XUISubNavigationDynamicShortcuts3=n;this.$XUISubNavigationDynamicShortcuts5=0;this.$XUISubNavigationDynamicShortcuts4=new(c("SubscriptionsHandler"))();this.$XUISubNavigationDynamicShortcuts4&&this.$XUISubNavigationDynamicShortcuts4.addSubscriptions(c("ViewportBounds").subscribe("change",this.$XUISubNavigationDynamicShortcuts6),c("Event").listen(window,"resize",c("throttle")(this.$XUISubNavigationDynamicShortcuts6)),c("Run").onLeave(this.destroy.bind(this)));this.$XUISubNavigationDynamicShortcuts6()}l.prototype.destroy=function(){"use strict";this.$XUISubNavigationDynamicShortcuts4&&this.$XUISubNavigationDynamicShortcuts4.release();this.$XUISubNavigationDynamicShortcuts4=null};l.prototype.$XUISubNavigationDynamicShortcuts7=function(m){"use strict";__p&&__p();switch(m){case 1:return"_1twe";case 2:return"_1twf";case 3:return"_1twg";case 4:return"_1tw-";case 5:return"_1tw_";case 6:return"_2u39";case 7:return"_2u3a";case 8:return"_2u3b";case 9:return"_2u3c";case 10:return"_2u3d";case 11:return"_5k9l";case 12:return"_5k9m";case 13:return"_5k9n";case 14:return"_5k9o";case 15:return"_5k9p";case 16:return"_5k9q";case 17:return"_5k9r";case 18:return"_5k9u";case 19:return"_5k9v";case 20:return"_5k9w";default:return null}};f.exports=l}),null);