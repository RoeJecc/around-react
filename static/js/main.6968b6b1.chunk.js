(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(6),o=n.n(r),s=(n(14),n(9)),i=n(2),l=n.p+"static/media/Vector.c7581985.svg",u=n(0);var d=function(){return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("img",{className:"header__vector",alt:"Around The U.S.",id:"vector-image",src:l})})},m=Object(a.createContext)();var b=function(e){var t=e.card,n=e.onCardDelete,c=e.onCardClick,r=e.onCardLike,o=Object(a.useContext)(m),s=t.owner._id===o._id,i="element__delete-button ".concat(s?"element__delete-button_active":"element__delete-button"),l=t.likes.some((function(e){return e._id===o._id})),d="element__button ".concat(l?"element__button_active":"element__button");return Object(u.jsxs)("div",{className:"element",children:[Object(u.jsx)("button",{className:i,type:"button",onClick:function(){return n(t)}}),Object(u.jsx)("img",{className:"element__image",src:t.link,alt:t.name,onClick:function(){c(t)}}),Object(u.jsxs)("div",{className:"element__info",children:[Object(u.jsx)("h2",{className:"element__text",children:t.name}),Object(u.jsxs)("div",{className:"element__like-container",children:[Object(u.jsx)("button",{className:d,type:"button",onClick:function(){return r(t)}}),Object(u.jsx)("p",{className:"element__likes",children:t.likes.length})]})]})]})};var _=function(e){var t=e.onEditAvatarClick,n=e.onEditProfileClick,c=e.onAddPlaceClick,r=e.cards,o=e.onCardClick,s=e.onCardLike,i=e.onCardDelete,l=Object(a.useContext)(m);return Object(u.jsxs)("main",{className:"content",children:[Object(u.jsxs)("section",{className:"profile",children:[Object(u.jsxs)("div",{className:"profile__avatar-container",children:[Object(u.jsx)("img",{className:"profile__avatar",src:l?l.avatar:"",alt:"Cousteau Image",id:"cousteau-image"}),Object(u.jsx)("div",{className:"profile__overlay",children:Object(u.jsx)("button",{onClick:t,className:"profile__avatar-button",type:"button",name:"avatar"})})]}),Object(u.jsxs)("div",{className:"profile__info",children:[Object(u.jsx)("h1",{className:"profile__name",children:l?l.name:""}),Object(u.jsx)("button",{onClick:n,className:"profile__edit-button",type:"button",name:"edit"}),Object(u.jsx)("p",{className:"profile__occupation",children:l?l.about:""})]}),Object(u.jsx)("button",{onClick:c,className:"profile__add-button",type:"button",name:"add"})]}),Object(u.jsx)("section",{className:"elements",children:Object(u.jsx)(u.Fragment,{children:r.map((function(e){return Object(u.jsx)(b,{card:e,onCardClick:o,onCardLike:s,onCardDelete:i},e._id)}))})})]})};var j=function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("p",{className:"footer__text",children:"\xa9 2020 Around The U.S."})})};var h=function(e){var t=e.name,n=e.isOpen,a=e.title,c=e.onClose,r=e.buttonText,o=e.children,s=e.onSubmit;return Object(u.jsx)("div",{className:"modal modal_type_".concat(t," ").concat(n?"modal_open":""),onClick:c,children:Object(u.jsx)("div",{className:"modal__container",children:Object(u.jsxs)("form",{name:"profile",onSubmit:s,className:"modal__profile modal__".concat(t),children:[Object(u.jsx)("h3",{className:"modal__title",children:a}),o,Object(u.jsx)("button",{className:"modal__form-submit",type:"submit",children:r}),Object(u.jsx)("button",{className:"modal__close-button modal__close-button_profile",type:"reset",name:"close",onClick:c})]})})})};var f=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateAvatar,r=Object(a.useRef)();return Object(u.jsxs)(h,{name:"avatar",title:"Change Profile Picture",buttonText:"Save",isOpen:t,onClose:n,onUpdateAvatar:c,onSubmit:function(e){e.preventDefault(),c(r.current.value)},children:[Object(u.jsx)("input",{ref:r,id:"newAvatarURL",name:"newAvatarURL",type:"url",required:!0,placeholder:"Image link",className:"modal__text-input modal__text-input_type_url"}),Object(u.jsx)("span",{id:"newAvatarURL-error",className:"modal__error"})]})};var p=function(e){var t=e.isOpen,n=e.onClose,r=e.onUpdateUser,o=c.a.useContext(m),s=Object(a.useState)(""),l=Object(i.a)(s,2),d=l[0],b=l[1],_=Object(a.useState)(""),j=Object(i.a)(_,2),f=j[0],p=j[1];return Object(a.useEffect)((function(){b(null===o||void 0===o?void 0:o.name),p(null===o||void 0===o?void 0:o.about)}),[o,t]),Object(u.jsxs)(h,{name:"profile",title:"Edit Profile",buttonText:"Save",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),r({name:d,about:f})},children:[Object(u.jsx)("input",{value:d||"",id:"name",name:"name",type:"text",className:"modal__text-input modal__text-input_type_name",required:!0,placeholder:"Name",minLength:2,maxLength:40,onChange:function(e){b(e.target.value)}}),Object(u.jsx)("span",{id:"name-error",className:"modal__error"}),Object(u.jsx)("input",{value:f||"",id:"occupation",name:"occupation",type:"text",placeholder:"About Me",required:!0,className:"modal__text-input modal__text-input_type_occupation",minLength:2,maxLength:200,onChange:function(e){p(e.target.value)}}),Object(u.jsx)("span",{id:"occupation-error",className:"modal__error"})]})};var v=function(e){var t=e.isOpen,n=e.onClose,c=e.onAddPlace,r=Object(a.useState)(""),o=Object(i.a)(r,2),s=o[0],l=o[1],d=Object(a.useState)(""),m=Object(i.a)(d,2),b=m[0],_=m[1];return Object(u.jsxs)(h,{name:"add-card",title:"New Place",buttonText:"Create",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:s,link:b}),l(""),_("")},children:[Object(u.jsx)("input",{value:s,onChange:function(e){l(e.target.value)},id:"newCardTitle",name:"newCardTitle",type:"text",className:"modal__text-input modal__text-input_type_name",required:!0,placeholder:"Title",minLength:1,maxLength:30}),Object(u.jsx)("span",{id:"newCardTitle-error",className:"modal__error"}),Object(u.jsx)("input",{value:b,onChange:function(e){_(e.target.value)},id:"newCardURL",name:"newCardURL",type:"url",placeholder:"Image link",required:!0,className:"modal__text-input modal__text-input_type_url"}),Object(u.jsx)("span",{id:"newCardURL-error",className:"modal__error"})]})};var O=function(e){return Object(u.jsx)("div",{className:"modal modal_type_preview ".concat(e.isOpen?"modal_open":""),children:Object(u.jsxs)("div",{className:"modal__container modal__container_preview",children:[Object(u.jsx)("button",{className:"modal__close-button modal__close-button_preview",type:"reset",name:"close",onClick:e.onClose}),Object(u.jsxs)("figure",{className:"modal__image-container",children:[Object(u.jsx)("img",{className:"modal__image",alt:"Picture",src:e.card?e.card.link:"#"}),Object(u.jsx)("figcaption",{className:"modal__image-caption",children:e.card?e.card.name:""})]})]})})},x=n(7),C=n(8),k=new(function(){function e(t){var n=t.baseURL,a=t.headers;Object(x.a)(this,e),this._baseURL=n,this._headers=a}return Object(C.a)(e,[{key:"_checkServerResponse",value:function(e){return e.ok?e.json():Promise.reject("Error"+e.statusText)}},{key:"getInitialCards",value:function(){var e=this;return fetch(this._baseURL+"/cards",{headers:this._headers}).then((function(t){return e._checkServerResponse(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch(this._baseURL+"/users/me",{headers:this._headers}).then((function(t){return e._checkServerResponse(t)}))}},{key:"getAppInfo",value:function(){return Promise.all([this.getUserInfo(),this.getInitialCards()])}},{key:"addCard",value:function(e){var t=this,n=e.name,a=e.link;return fetch(this._baseURL+"/cards",{headers:this._headers,method:"POST",body:JSON.stringify({name:n,link:a})}).then((function(e){return t._checkServerResponse(e)}))}},{key:"removeCard",value:function(e){var t=this;return fetch(this._baseURL+"/cards/"+e,{headers:this._headers,method:"DELETE"}).then((function(e){return t._checkServerResponse(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch(this._baseURL+"/cards/likes/"+e,{headers:this._headers,method:"PUT"}).then((function(e){return t._checkServerResponse(e)}))}},{key:"removeLike",value:function(e){var t=this;return fetch(this._baseURL+"/cards/likes/"+e,{headers:this._headers,method:"DELETE"}).then((function(e){return t._checkServerResponse(e)}))}},{key:"setUserInfo",value:function(e){var t=this,n=e.name,a=e.about;return fetch(this._baseURL+"/users/me/",{method:"PATCH",headers:{authorization:"f3cf689f-e903-4b5b-9d77-2b0b4048d455","Content-Type":"application/json"},body:JSON.stringify({name:n,about:a})}).then((function(e){return t._checkServerResponse(e)}))}},{key:"setUserAvatar",value:function(e){var t=this;return fetch(this._baseURL+"/users/me/avatar/",{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e})}).then((function(e){return t._checkServerResponse(e)}))}}]),e}())({baseURL:"https://around.nomoreparties.co/v1/group-12",headers:{authorization:"f3cf689f-e903-4b5b-9d77-2b0b4048d455","Content-Type":"application/json"}});var g=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(!1),l=Object(i.a)(o,2),b=l[0],x=l[1],C=Object(a.useState)(!1),g=Object(i.a)(C,2),N=g[0],y=g[1],L=Object(a.useState)(!1),S=Object(i.a)(L,2),U=S[0],R=S[1],T=Object(a.useState)([]),A=Object(i.a)(T,2),P=A[0],w=A[1],E=Object(a.useState)(null),I=Object(i.a)(E,2),D=I[0],q=I[1],F=Object(a.useState)(null),J=Object(i.a)(F,2),z=J[0],B=J[1];function H(){r(!1),x(!1),y(!1),R(!1)}function M(e){e.target===e.currentTarget&&H()}return c.a.useEffect((function(){k.getInitialCards().then((function(e){w(e)})).catch((function(e){return console.log(e)}))}),[]),c.a.useEffect((function(){k.getUserInfo().then((function(e){B(e)})).catch((function(e){return console.log(e)}))}),[]),Object(u.jsx)("div",{className:"page",children:Object(u.jsxs)(m.Provider,{value:z,children:[Object(u.jsx)(d,{}),Object(u.jsx)(_,{onEditAvatarClick:function(){r(!0)},onEditProfileClick:function(){x(!0)},onAddPlaceClick:function(){y(!0)},cards:P,onCardClick:function(e){q(e),R(!0)},onCardLike:function(e){(!1===e.likes.some((function(e){return e._id===z._id}))?k.addLike(e._id):k.removeLike(e._id)).then((function(t){var n=P.map((function(n){return n._id===e._id?t:n}));w(n)})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){k.removeCard(e._id).then((function(){var t=P.filter((function(t){return t._id!==e._id}));w(t)})).catch((function(e){return console.log(e)}))}}),Object(u.jsx)(j,{}),Object(u.jsx)(f,{isOpen:n,onClose:M,onUpdateAvatar:function(e){k.setUserAvatar(e).then((function(e){B(e)})).catch((function(e){return console.log(e)})).finally((function(){return H()}))}}),Object(u.jsx)(p,{isOpen:b,onClose:M,onUpdateUser:function(e){var t=e.name,n=e.about;k.setUserInfo({name:t,about:n}).then((function(e){B(e)})).catch((function(e){return console.log(e)})).finally((function(){return H()}))}}),Object(u.jsx)(v,{isOpen:N,onClose:M,onAddPlace:function(e){var t=e.name,n=e.link;k.addCard({name:t,link:n}).then((function(e){w([e].concat(Object(s.a)(P)))})).catch((function(e){return console.log(e)})).finally((function(){return H()}))}}),Object(u.jsx)(O,{card:D,isOpen:U,onClose:H}),Object(u.jsx)(h,{name:"delete-card",title:"Are you sure?",buttonText:"Yes"})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),N()}},[[16,1,2]]]);
//# sourceMappingURL=main.6968b6b1.chunk.js.map