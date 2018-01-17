if (self.CavalryLogger) { CavalryLogger.start_js(["fCvR9"]); }

__d("UFIAddCommentController",["CommunityConversationsUfiTreatment","Parent","React","ReactDOM","UFIAddComment.react","UFIAddCommentActionType","UFIAsyncWrapper","UFICallbackStore","UFICommentEditIDStore","UFIDispatcher","UFIDispatcherContext.react","UFIFeedbackContext.react","UFINewCommentNotifier"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();h.factory=function(j,k){k.rootid=j.id;return new h(j,Object.freeze(k))};function h(j,k){__p&&__p();i.call(this);this.$UFIAddCommentController1=j;this.$UFIAddCommentController2=k;this.$UFIAddCommentController3=new(c("UFIDispatcher"))();this.$UFIAddCommentController4={UFICallbackStore:new(c("UFICallbackStore"))(this.$UFIAddCommentController3)};this.$UFIAddCommentController4.UFICallbackStore.on(c("UFIAddCommentActionType").SUBMIT_NEW,function(l){return c("UFINewCommentNotifier").onNewComment(c("Parent").byTag(j,"form"),this.$UFIAddCommentController2,l.comment,l.target,l.replyCommentID,l.timestamp)}.bind(this));this.$UFIAddCommentController5=c("UFICommentEditIDStore").getForInstance(this.$UFIAddCommentController2.instanceid);c("UFICommentEditIDStore").addListener(function(){var l=c("UFICommentEditIDStore").getForInstance(this.$UFIAddCommentController2.instanceid);if(l!=this.$UFIAddCommentController5){this.$UFIAddCommentController5=l;this.render()}}.bind(this));this.render()}h.prototype.render=function(){var j=c("React").createElement(c("UFIDispatcherContext.react"),{dispatcher:this.$UFIAddCommentController3,stores:this.$UFIAddCommentController4},c("React").createElement(c("UFIFeedbackContext.react"),{contextArgs:this.$UFIAddCommentController2,render:this.renderAddComment}));c("ReactDOM").render(c("React").createElement(c("UFIAsyncWrapper"),null,j),this.$UFIAddCommentController1)};h.prototype.disable=function(){this.$UFIAddCommentController4.UFICallbackStore.remove()};var i=function i(){this.renderAddComment=function(j,k){if(this.$UFIAddCommentController5!==null||!k||!k.cancomment||!k.actorforpost)return null;return c("React").createElement(c("UFIAddComment.react"),{viewerActorID:k.actorforpost,targetID:k.ownerid,targetName:k.actorname,groupID:k.grouporeventid,initialData:null,ref:null,withoutSeparator:false,editingComment:{},isEditing:false,mentionsDataSource:k.mentionsdatasource,showSendOnEnterTip:k.showsendonentertip,multiCompanyGroupsCount:k.multicompanygroupscount,allowPhotoAttachments:k.allowphotoattachments&&!j.islivestreaming,allowVideoAttachments:k.allowvideoattachments&&!j.islivestreaming,allowFileAttachments:k.allowfileattachments&&!j.islivestreaming,allowStickerAttachments:k.allowstickerattachments&&!j.islivestreaming,allowGifAttachments:k.allowgifattachments&&!j.islivestreaming,allowTipJar:Boolean(k.istipjarenabled),showMentionsButton:Boolean(j.communityConversationsParams&&j.communityConversationsParams.treatment===c("CommunityConversationsUfiTreatment").MENTION_IN_COMPOSER),contextArgs:j,feedback:k,subtitle:k.subtitle,isQAndA:k.isqanda,keepFocus:j.islivestreaming})}.bind(this)};f.exports=h}),null);
__d("PhotoAlbumPlacesTypeahead",["Arbiter"],(function a(b,c,d,e,f,g){__p&&__p();function h(i){"use strict";__p&&__p();if(!i)return;if(i.getCore().getHiddenValue()){var j={uid:i.getCore().getHiddenValue(),text:i.getCore().getValue()};c("Arbiter").inform("PhotoAlbumPlacesTypeahead.EXIST_PLACE",j)}i.subscribe("select",function(k,j){c("Arbiter").inform("PhotoAlbumPlacesTypeahead.SELECTED_PLACE",j.selected)}.bind(this));i.subscribe("reset",function(){if(!i.getCore().getHiddenValue())c("Arbiter").inform("PhotoAlbumPlacesTypeahead.RESET_PLACE")}.bind(this));i.subscribe("focus",function(){c("Arbiter").inform("PhotoAlbumPlacesTypeahead.FOCUSED")}.bind(this));this._initialized=true}h.prototype.init=function(i){"use strict";if(this._initialized)return;h.call(this,i)};f.exports=h}),null);
__d("TagTypeaheadView",["AsyncRequest","ContextualTypeaheadView","CSS","DOM","FamilyTaggingConfig","Parent"],(function a(b,c,d,e,f,g){__p&&__p();var h,i;h=babelHelpers.inherits(j,c("ContextualTypeaheadView"));i=h&&h.prototype;function j(k,l){"use strict";i.constructor.call(this,k,l);this.hintText=l.hintText;this.userEd=l.userEd;this.origAutoSelect=l.autoSelect;this.setSuggestions(l.suggestions)}j.prototype.init=function(){"use strict";c("CSS").addClass(this.element,"uiTagTypeaheadView");i.init.call(this)};j.prototype.buildResults=function(k){"use strict";__p&&__p();if(!this.value&&this.hintText)k.unshift({subtext:this.hintText,type:"hintText"});if(this.userEd){new(c("AsyncRequest"))().setURI("/ajax/fof/user_education.php").setData({increment:1}).send();k.unshift({subtext:this.userEd,type:"userEdText"})}if(c("FamilyTaggingConfig").gk){var l=[],m=[];for(var n=0;n<k.length;n++)if(k[n].type!=="family_tags"&&k[n].index!=-1e3&&k[n].type!=="hintText")l.push(k[n]);else m.push(k[n]);k=m.concat(l);i.updateResults.call(this,k)}var o=i.buildResults.call(this,k);if(this.userEd)k.shift();if(!this.value)k.shift();return o};j.prototype.show=function(){"use strict";var k=c("DOM").scry(this.context,".typeaheadBackdrop");if(k.length>0)c("CSS").addClass(k[0],"resultsPresent");return i.show.call(this)};j.prototype.hide=function(){"use strict";var k=c("DOM").scry(this.context,".typeaheadBackdrop");if(k.length>0)c("CSS").removeClass(k[0],"resultsPresent");return i.hide.call(this)};j.prototype.render=function(k,l,m){"use strict";this.autoSelect=this.origAutoSelect&&k.length;this.disableAutoSelect=k.length===0;l=l.concat(this.getAdditionalResults());i.render.call(this,k,l,m)};j.prototype.getItems=function(){"use strict";var k=i.getItems.call(this);if(!this.value)k.shift();if(this.userEd)k.shift();return k};j.prototype.getSuggestions=function(){"use strict";return this.suggestions};j.prototype.setSuggestions=function(k){"use strict";this.suggestions=k?k.map(String):[];this.visible=!!this.suggestions.length};j.prototype.addSuggestion=function(k){"use strict";this.suggestions.unshift(k)};j.prototype.addTypeaheadFlip=function(k){"use strict";c("CSS").addClass(this.element,k)};j.prototype.removeTypeaheadFlip=function(k){"use strict";c("CSS").removeClass(this.element,k)};j.prototype.getContext=function(){"use strict";var k=c("Parent").byClass(this.element,"typeaheadContainer");if(k)return k;else return i.getContext.call(this)};j.prototype.getAdditionalResults=function(){"use strict";return[]};f.exports=j}),null);
__d("PlacesTypeaheadBehavior",["CSS","DOM"],(function a(b,c,d,e,f,g){var h={init:function i(j,k){j.subscribe(["reset","select","highlight"],function(l,m){if(l==="highlight"&&m.index!==-1&&m.selected.type!="freeform"&&m.selected.map&&!m.selected.changeCity){c("DOM").setContent(k,m.selected.map);c("CSS").show(k)}else c("CSS").hide(k)})}};f.exports=h}),null);
__d("NoTrucatingCompactTypeaheadRenderer",["CompactTypeaheadRenderer"],(function a(b,c,d,e,f,g){function h(i,j){return c("CompactTypeaheadRenderer")(i,j)}h.className="noTrucating compact";f.exports=h}),null);
__d("TypeaheadHintText",["emptyFunction"],(function a(b,c,d,e,f,g){function h(i){"use strict";this._typeahead=i}h.prototype.enable=function(){"use strict";this._typeahead.getCore().resetOnKeyup=false};Object.assign(h.prototype,{disable:c("emptyFunction")});f.exports=h}),null);
__d("legacy:HintTextTypeaheadBehavior",["TypeaheadHintText"],(function a(b,c,d,e,f,g){if(!b.TypeaheadBehaviors)b.TypeaheadBehaviors={};b.TypeaheadBehaviors.hintText=function(h){h.enableBehavior(c("TypeaheadHintText"))}}),3);
__d("legacy:ShowResultsOnFocusTypeaheadBehavior",["TypeaheadShowResultsOnFocus"],(function a(b,c,d,e,f,g){if(!b.TypeaheadBehaviors)b.TypeaheadBehaviors={};b.TypeaheadBehaviors.showResultsOnFocus=function(h){h.enableBehavior(c("TypeaheadShowResultsOnFocus"))}}),3);
__d("VideoChainingToken",["Base64"],(function a(b,c,d,e,f,g){__p&&__p();function h(i){"use strict";this.$VideoChainingToken1=i}h.encode=function(i){"use strict";return new h(c("Base64").encode(JSON.stringify(i)))};h.prototype.decode=function(){"use strict";return JSON.parse(c("Base64").decode(this.$VideoChainingToken1))};f.exports=h}),null);