(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[3],{140:function(e,a,t){"use strict";var s=t(9),n=t.n(s),o=t(20),i=t.n(o),r=t(0),l=t.n(r),m=t(55),c=t(2),d=t.n(c),u=t(49),g=function(e){function a(a){var t;if(t=e.call(this,a)||this,!a._reduxForm)throw new Error("Form must be inside a component decorated with reduxForm()");return t}i()(a,e);var t=a.prototype;return t.UNSAFE_componentWillMount=function(){this.props._reduxForm.registerInnerOnSubmit(this.props.onSubmit)},t.render=function(){var e=this.props,a=(e._reduxForm,n()(e,["_reduxForm"]));return l.a.createElement("form",a)},a}(r.Component);g.propTypes={onSubmit:d.a.func.isRequired,_reduxForm:d.a.object},Object(m.a)(g),a.a=Object(u.b)(g)},293:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialog:"Dialogs_dialog__lk_cw",dialogsItems:"Dialogs_dialogsItems__2sNe2",active:"Dialogs_active__2sQhs",messages:"Dialogs_messages__1w_Up"}},294:function(e,a,t){e.exports={dialog:"DialogItem_dialog__3tDA2",dialogsItems:"DialogItem_dialogsItems__3a0eN",active:"DialogItem_active__2qnc5",dialogsItem:"DialogItem_dialogsItem__1sKk7"}},295:function(e,a,t){e.exports={dialog:"Message_dialog__2b2b-",dialogsItems:"Message_dialogsItems__3BxQb",active:"Message_active__3KMb1",messages:"Message_messages__11r0A"}},300:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),o=t(127),i=t(293),r=t.n(i),l=t(294),m=t.n(l),c=t(11),d=function(e){var a="/dialogs/"+e.id;return n.a.createElement("div",{className:m.a.dialogsItem},n.a.createElement("img",{src:e.userPhoto,alt:"userPhoto"}),n.a.createElement("div",{className:m.a.dialog},n.a.createElement(c.b,{to:a},e.name)))},u=t(295),g=t.n(u),_=function(e){return n.a.createElement("div",{className:g.a.dialog},e.text)},p=t(24),b=t(54),f=t(140),v=t(88),E=t(128),h=t(37),I=Object(b.a)(10),w=Object(E.a)({form:"dialogAddMessageForm"})(function(e){return n.a.createElement(f.a,{onSubmit:e.handleSubmit},n.a.createElement("div",null,n.a.createElement(v.a,{component:h.b,validate:[b.c,I],name:"newMessageBody",placeholder:"Enter your message"})),n.a.createElement("div",null,n.a.createElement("button",null,"Send")))}),x=function(e){var a=e.dialogsPage,t=a.dialogs.map(function(e){return n.a.createElement(d,{name:e.name,userPhoto:e.userPhoto,id:e.id,key:e.id})}),s=a.messages.map(function(e){return n.a.createElement(_,{text:e.message,id:e.id,key:e.id})});a.newMessageText;if(!e.isAuth)return n.a.createElement(p.a,{to:"/login"});return n.a.createElement("div",{className:r.a.dialogs},n.a.createElement("div",{className:r.a.dialogsItems},t),n.a.createElement("div",{className:r.a.messages},s),n.a.createElement(w,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}}))},M=t(10),j=t(94),D=t(6),O=function(e){return{dialogsPage:e.dialogsPage}},y=function(e){return{sendMessage:function(a){e(Object(o.b)(a))}}};Object(D.d)(Object(M.b)(O,y),j.a)(x);a.default=Object(D.d)(Object(M.b)(O,y),j.a)(x)}}]);
//# sourceMappingURL=3.f34f2be7.chunk.js.map