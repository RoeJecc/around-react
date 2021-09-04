(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(4),c=a.n(r),o=(a(11),a(2)),i=a.p+"static/media/Vector.c7581985.svg",l=a(0);var d=function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("img",{className:"header__vector",alt:"Around The U.S.",id:"vector-image",src:i})})},u=a(5),m=a(6),_=new(function(){function e(t){var a=t.baseURL,n=t.headers;Object(u.a)(this,e),this._baseURL=a,this._headers=n}return Object(m.a)(e,[{key:"_checkServerResponse",value:function(e){return e.ok?e.json():Promise.reject("Error"+e.statusText)}},{key:"getInitialCards",value:function(){var e=this;return fetch(this._baseURL+"/cards",{headers:this._headers}).then((function(t){return e._checkServerResponse(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch(this._baseURL+"/users/me",{headers:this._headers}).then((function(t){return e._checkServerResponse(t)}))}},{key:"getAppInfo",value:function(){return Promise.all([this.getUserInfo(),this.getInitialCards()])}},{key:"addCard",value:function(e){var t=this,a=e.name,n=e.link;return fetch(this._baseURL+"/cards",{headers:this._headers,method:"POST",body:JSON.stringify({name:a,link:n})}).then((function(e){return t._checkServerResponse(e)}))}},{key:"removeCard",value:function(e){var t=this;return fetch(this._baseURL+"/cards/"+e,{headers:this._headers,method:"DELETE"}).then((function(e){return t._checkServerResponse(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch(this._baseURL+"/cards/likes/"+e,{headers:this._headers,method:"PUT"}).then((function(e){return t._checkServerResponse(e)}))}},{key:"removeLike",value:function(e){var t=this;return fetch(this._baseURL+"/cards/likes/"+e,{headers:this._headers,method:"DELETE"}).then((function(e){return t._checkServerResponse(e)}))}},{key:"setUserInfo",value:function(e){var t=this,a=e.name,n=e.about;return fetch(this._baseURL+"/users/me/",{method:"PATCH",headers:{authorization:"f3cf689f-e903-4b5b-9d77-2b0b4048d455","Content-Type":"application/json"},body:JSON.stringify({name:a,about:n})}).then((function(e){return t._checkServerResponse(e)}))}},{key:"setUserAvatar",value:function(e){var t=this;return fetch(this._baseURL+"/users/me/avatar/",{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e})}).then((function(e){return t._checkServerResponse(e)}))}}]),e}())({baseURL:"https://around.nomoreparties.co/v1/group-12",headers:{authorization:"f3cf689f-e903-4b5b-9d77-2b0b4048d455","Content-Type":"application/json"}});var j=function(e){var t=e.card,a=e.onCardClick;return Object(l.jsxs)("div",{className:"element",children:[Object(l.jsx)("button",{className:"element__delete-button",type:"button"}),Object(l.jsx)("img",{className:"element__image",alt:"place image",onClick:function(){return a(t)},src:t&&t.link}),Object(l.jsxs)("div",{className:"element__info",children:[Object(l.jsx)("h2",{className:"element__text",children:t.name}),Object(l.jsxs)("div",{className:"element__like-container",children:[Object(l.jsx)("button",{className:"element__button",type:"button"}),Object(l.jsx)("p",{className:"element__likes",children:t.likes.length})]})]})]})};var b=function(e){var t=e.onEditAvatarClick,a=e.onEditProfileClick,r=e.onAddPlaceClick,c=e.onCardClick,i=e.cards,d=Object(n.useState)(""),u=Object(o.a)(d,2),m=u[0],b=u[1];return s.a.useEffect((function(){_.getUserInfo().then((function(e){b(e)}))})),Object(l.jsxs)("main",{className:"content",children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsxs)("div",{className:"profile__avatar-container",children:[Object(l.jsx)("img",{className:"profile__avatar",src:m.avatar,alt:"Cousteau Image",id:"cousteau-image"}),Object(l.jsx)("div",{className:"profile__overlay",children:Object(l.jsx)("button",{onClick:t,className:"profile__avatar-button",type:"button",name:"avatar"})})]}),Object(l.jsxs)("div",{className:"profile__info",children:[Object(l.jsx)("h1",{className:"profile__name",children:m.name}),Object(l.jsx)("button",{onClick:a,className:"profile__edit-button",type:"button",name:"edit"}),Object(l.jsx)("p",{className:"profile__occupation",children:m.about})]}),Object(l.jsx)("button",{onClick:r,className:"profile__add-button",type:"button",name:"add"})]}),Object(l.jsx)("section",{className:"elements",children:Object(l.jsx)(l.Fragment,{children:i.map((function(e){return Object(l.jsx)(j,{card:e,onCardClick:c},e._id)}))})})]})};var h=function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{className:"footer__text",children:"\xa9 2020 Around The U.S."})})};var p=function(e){e.name;var t=e.isOpen,a=e.title,n=e.onClose,s=e.buttonText,r=e.children;return Object(l.jsx)("div",{className:"modal modal_type_".concat(e.name," ").concat(t?"modal_open":""),onClick:n,children:Object(l.jsx)("div",{className:"modal__container",children:Object(l.jsxs)("form",{name:"profile",className:"modal__profile modal__".concat(e.name),children:[Object(l.jsx)("h3",{className:"modal__title",children:a}),r,Object(l.jsx)("button",{className:"modal__form-submit",type:"submit",children:s}),Object(l.jsx)("button",{className:"modal__close-button modal__close-button_profile",type:"reset",name:"close",onClick:n})]})})})};var f=function(e){var t=e.isOpen,a=e.onClose;return Object(l.jsxs)(p,{name:"avatar",title:"Change Profile Picture",buttonText:"Save",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault()},children:[Object(l.jsx)("input",{id:"newAvatarURL",name:"newAvatarURL",type:"url",required:!0,placeholder:"Image link",className:"modal__text-input modal__text-input_type_url"}),Object(l.jsx)("span",{id:"newAvatarURL-error",className:"modal__error"})]})};var O=function(e){e.name;var t=e.isOpen,a=e.onClose;return Object(l.jsxs)(p,{name:"profile",title:"Edit Profile",buttonText:"Save",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault()},children:[Object(l.jsx)("input",{id:"name",name:"name",type:"text",className:"modal__text-input modal__text-input_type_name",required:!0,placeholder:"Name",minLength:2,maxLength:40}),Object(l.jsx)("span",{id:"name-error",className:"modal__error"}),Object(l.jsx)("input",{id:"occupation",name:"occupation",type:"text",placeholder:"About Me",required:!0,className:"modal__text-input modal__text-input_type_occupation",minLength:2,maxLength:200}),Object(l.jsx)("span",{id:"occupation-error",className:"modal__error"})]})};var v=function(e){e.name;var t=e.isOpen,a=e.onClose;return Object(l.jsxs)(p,{name:"add-card",title:"New Place",buttonText:"Create",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault()},children:[Object(l.jsx)("input",{id:"newCardTitle",name:"newCardTitle",type:"text",className:"modal__text-input modal__text-input_type_name",required:!0,placeholder:"Title",minLength:1,maxLength:30}),Object(l.jsx)("span",{id:"newCardTitle-error",className:"modal__error"}),Object(l.jsx)("input",{id:"newCardURL",name:"newCardURL",type:"url",placeholder:"Image link",required:!0,className:"modal__text-input modal__text-input_type_url"}),Object(l.jsx)("span",{id:"newCardURL-error",className:"modal__error"})]})};var x=function(e){var t=e.card,a=e.isOpen,n=e.onClose;return Object(l.jsx)("div",{className:"modal modal_type_preview ".concat(a?"modal_open":""),children:Object(l.jsxs)("div",{className:"modal__container modal__container_preview",children:[Object(l.jsx)("button",{className:"modal__close-button modal__close-button_preview",type:"reset",name:"close",onClick:n}),Object(l.jsxs)("figure",{className:"modal__image-container",children:[Object(l.jsx)("img",{className:"modal__image",alt:"Card Image",src:t&&t.link}),Object(l.jsx)("figcaption",{className:"modal__image-caption",children:t.name})]})]})})};var N=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),i=Object(o.a)(c,2),u=i[0],m=i[1],j=Object(n.useState)(!1),p=Object(o.a)(j,2),N=p[0],C=p[1],k=Object(n.useState)(!1),g=Object(o.a)(k,2),y=g[0],L=g[1],S=Object(n.useState)([]),R=Object(o.a)(S,2),U=R[0],T=R[1],w=Object(n.useState)(""),P=Object(o.a)(w,2),A=P[0],E=P[1];function I(e){e.target===e.currentTarget&&(r(!1),m(!1),C(!1),L(!1))}return s.a.useEffect((function(){_.getInitialCards().then((function(e){T(e)})).catch((function(e){return console.log(e)}))})),Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)(d,{}),Object(l.jsx)(b,{onEditAvatarClick:function(){r(!0)},onEditProfileClick:function(){m(!0)},onAddPlaceClick:function(){C(!0)},cards:U,onCardClick:function(e){E(e),L(!0)}}),Object(l.jsx)(h,{}),Object(l.jsx)(f,{isOpen:a,onClose:I}),Object(l.jsx)(O,{isOpen:u,onClose:I}),Object(l.jsx)(v,{isOpen:N,onClose:I}),Object(l.jsx)(x,{card:A,isOpen:y,onClose:I}),Object(l.jsx)("div",{className:"modal modal_type_delete-card",children:Object(l.jsxs)("div",{className:"modal__container",children:[Object(l.jsx)("button",{className:"modal__close-button modal__close-button_delete-card",type:"reset"}),Object(l.jsxs)("form",{className:"modal__profile modal__profile_delete-card",noValidate:!0,children:[Object(l.jsx)("h3",{className:"modal__title modal__title_delete-card",children:"Are you sure?"}),Object(l.jsx)("button",{className:"modal__form-submit",type:"submit",children:"Yes"})]})]})})]})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};c.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),C()}},[[13,1,2]]]);
//# sourceMappingURL=main.efcddd9c.chunk.js.map