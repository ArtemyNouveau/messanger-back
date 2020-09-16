(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{148:function(e,t,a){e.exports=a(208)},153:function(e,t,a){},205:function(e,t){},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),i=a.n(c),l=(a(153),a(13)),s=a(17),o=a(16),u=a(252),d=a(250),m=a(251),h=a(120),E=a.n(h),f=a(38),p=a(8),b=a(3),S=a(248),g=a(245),C=a(270),O=Object(g.a)((function(e){return Object(C.a)({title:{flexGrow:1},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})}})})),j=function(e){var t=e.open,a=e.children,n=O();return r.a.createElement(S.a,{position:"fixed",className:Object(b.a)(n.appBar,Object(p.a)({},n.appBarShift,t))},a)},_=Object(g.a)((function(e){return Object(C.a)({menuButton:{marginRight:e.spacing(2)}})})),A=function(){var e=Object(l.g)(),t=_();return r.a.createElement(j,null,r.a.createElement(d.a,null,r.a.createElement(m.a,{color:"inherit","aria-label":"open drawer",onClick:function(){e.push("/")},edge:"start",className:t.menuButton},r.a.createElement(E.a,null)),r.a.createElement(f.a,null)))},v=a(267),I=a(256),T=a(253),y=a(254),N=a(255),x=a(4),w=Object(g.a)((function(e){return Object(C.a)({root:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"100%"},menuButton:{marginRight:e.spacing(2)},toolbar:Object(x.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),card:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:151}})})),U=a(121),H=a.n(U).a.create({baseURL:"https://messenger-interview.herokuapp.com/"});H.interceptors.request.use((function(e){var t=localStorage.getItem("authToken");return e.headers.Authorization="Bearer "+t,e}));var R,F=H;!function(e){e.LOGIN="LOGIN",e.LOGIN_FAIL="LOGIN_FAIL",e.LOGOUT="LOGOUT",e.SET_AUTH="SET_AUTH",e.CHANGE_USER_NAME_SUCCESS="CHANGE_USER_NAME_SUCCESS",e.CHANGE_USER_NAME_FAIL="CHANGE_USER_NAME_FAIL",e.CHANGE_STATUS_SUCCESS="CHANGE_STATUS_SUCCESS",e.CHANGE_STATUS_FAIL="CHANGE_STATUS_FAIL"}(R||(R={}));var G,L,k=function(e,t){return function(a){F.post("/auth/login",{email:e,password:t}).then((function(e){var t=e.data;200===e.status?(a({type:R.LOGIN,id:t.id,chatIds:t.chatIds,status:t.status,userName:t.userName}),localStorage.setItem("authToken",t.token)):a({type:R.LOGIN_FAIL})})).catch((function(){a({type:R.LOGIN_FAIL})}))}},D=a(209),M=a(258),B=Object(s.b)((function(e){return{user:e.userState.user}}),(function(e){return{changeUserName:function(t){return e(function(e){return function(t){F.post("/auth/updateUserName",{name:e}).then((function(e){var a=e.data;200===e.status?t({type:R.CHANGE_USER_NAME_SUCCESS,name:a.name}):t({type:R.CHANGE_USER_NAME_FAIL})})).catch((function(){t({type:R.CHANGE_USER_NAME_FAIL})}))}}(t))},changeUserStatus:function(t){return e(function(e){return function(t){F.post("/auth/updateUserStatus",{status:e}).then((function(e){var a=e.data;200===e.status?t({type:R.CHANGE_STATUS_SUCCESS,status:a.status}):t({type:R.CHANGE_STATUS_FAIL})})).catch((function(){t({type:R.CHANGE_STATUS_FAIL})}))}}(t))}}}))((function(e){var t=e.user,a=e.changeUserName,c=e.changeUserStatus,i=w(),l=Object(n.useState)(t.userName),s=Object(o.a)(l,2),d=s[0],m=s[1],h=Object(n.useState)(t.status),E=Object(o.a)(h,2),p=E[0],b=E[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement(u.a,{fixed:!0},r.a.createElement("div",{className:i.toolbar}),r.a.createElement(T.a,{className:i.card},r.a.createElement("div",{className:i.details},r.a.createElement(y.a,{className:i.content},r.a.createElement(f.a,{component:"h5",variant:"h5"},t.userName),r.a.createElement(f.a,{variant:"subtitle1",color:"textSecondary"},t.status))),r.a.createElement(N.a,{className:i.cover,image:"https://img3.stockfresh.com/files/z/zdenkam/m/61/7129871_stock-photo-casual-man-on-white.jpg",title:"Live from space album cover"}),r.a.createElement(y.a,null,r.a.createElement(I.a,{container:!0,spacing:1},r.a.createElement(I.a,{item:!0,xs:12,md:6},r.a.createElement(v.a,{label:"Edit username",className:i.textField,onChange:function(e){return m(e.target.value)},value:d,fullWidth:!0,variant:"outlined"})),r.a.createElement(I.a,{item:!0,xs:12,md:6},r.a.createElement(v.a,{label:"Edit status",value:p,onChange:function(e){return b(e.target.value)},className:i.textField,fullWidth:!0,variant:"outlined"})))),r.a.createElement(M.a,null,r.a.createElement(D.a,{size:"small",color:"primary",onClick:function(){a(d),c(p)}},"save"),r.a.createElement(D.a,{size:"small",color:"primary",onClick:function(){m(t.userName),b(t.status)}},"exit")))))})),W=a(261),z=a(262),P=a(132),V=a.n(P),X=a(131),J=a.n(X),Y=a(130),q=a.n(Y),Z=a(263),$=a(257),K=a(122),Q=a.n(K),ee=function(e,t){return G=Q()(e,{transportOptions:{polling:{extraHeaders:{Authorization:"Bearer ".concat(t)}}}})},te=function(){if(!G)throw new Error("Socket.io not initialized!");return G},ae=a(123),ne=a.n(ae),re=a(124),ce=a.n(re),ie=a(259),le=a(269),se=a(25),oe=Object(g.a)((function(e){return Object(C.a)({drawer:{position:"fixed",width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:{transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},toolbar:Object(x.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),hideScrollParent:{position:"relative",overflow:"hidden",height:"100vh",padding:0},hideScrollChild:{height:"100%",position:"absolute",overflowY:"scroll",overflowX:"hidden",paddingRight:20,right:-20,left:0,"& > *":{width:"calc(100% + 20px)"}}})})),ue=function(e){var t,a,n=e.open,c=e.children,i=e.handleDrawerClose,l=oe(),s=Object(se.a)();return r.a.createElement(le.a,{variant:"permanent",className:Object(b.a)(l.drawer,(t={},Object(p.a)(t,l.drawerOpen,n),Object(p.a)(t,l.drawerClose,!n),t)),classes:{paper:Object(b.a)((a={},Object(p.a)(a,l.drawerOpen,n),Object(p.a)(a,l.drawerClose,!n),a))}},r.a.createElement("div",{className:l.toolbar},r.a.createElement(m.a,{onClick:function(){return i()}},"rtl"===s.direction?r.a.createElement(ne.a,null):r.a.createElement(ce.a,null))),r.a.createElement(ie.a,null),r.a.createElement("div",{className:l.hideScrollParent},r.a.createElement("div",{className:l.hideScrollChild},c,r.a.createElement("div",{className:l.toolbar}))))},de=a(125),me=a.n(de),he=a(66),Ee=a.n(he),fe=Object(g.a)((function(e){return Object(C.a)({title:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},toolbar:Object(x.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar)})})),pe=function(e){var t=e.open,a=e.handleDrawerOpen,n=fe(),c=Object(l.g)();return r.a.createElement(j,{open:t},r.a.createElement(d.a,null,r.a.createElement(m.a,{color:"inherit","aria-label":"open drawer",onClick:function(){return a()},edge:"start",className:Object(b.a)(n.menuButton,Object(p.a)({},n.hide,t))},r.a.createElement(me.a,null)),r.a.createElement(f.a,{className:n.title}),r.a.createElement("div",null,r.a.createElement(m.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(){c.push("/profile")},color:"inherit"},r.a.createElement(Ee.a,null)))))},be=a(126),Se=a.n(be),ge=a(127),Ce=a.n(ge),Oe=Object(g.a)((function(e){return Object(C.a)({toolBar:{width:"100%",display:"flex",flexWrap:"nowrap"},bottomBar:Object(x.a)({top:"auto",bottom:0,display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar)})})),je=function(e){var t=e.children,a=Oe();return r.a.createElement(S.a,{position:"fixed",className:a.bottomBar,component:"div"},r.a.createElement(d.a,{className:a.toolBar},t))},_e=Object(g.a)((function(e){return Object(C.a)({bottomBar:Object(x.a)({top:"auto",bottom:0,display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),input:{backgroundColor:e.palette.common.white,borderRadius:e.shape.borderRadius}})}));!function(e){e.FETCH_CHAT_START="FETCH_CHAT_START",e.FETCH_CHAT_SUCCESS="FETCH_CHAT_SUCCESS",e.FETCH_CHAT_FAIL="FETCH_CHAT_FAIL",e.ADD_CHAT_START="ADD_CHAT_START",e.ADD_CHAT_SUCCESS="ADD_CHAT_SUCCESS",e.ADD_CHAT_FAIL="ADD_CHAT_FAIL",e.FETCH_USER_CHATS_START="FETCH_USER_CHATS_START",e.FETCH_USER_CHATS_SUCCESS="FETCH_USER_CHATS_SUCCESS",e.FETCH_USER_CHATS_FAIL="FETCH_USER_CHATS_FAIL",e.FETCH_USER_MESSAGES_START="FETCH_USER_MESSAGES_START",e.FETCH_USER_MESSAGES_SUCCESS="FETCH_USER_MESSAGES_SUCCESS",e.FETCH_USER_MESSAGES_FAIL="FETCH_USER_MESSAGES_FAIL",e.SEND_USER_MESSAGES_START="SEND_USER_MESSAGES_START",e.SEND_USER_MESSAGES_SUCCESS="SEND_USER_MESSAGES_SUCCESS",e.SEND_USER_MESSAGES_FAIL="SEND_USER_MESSAGES_FAIL",e.RECEIVE_MESSAGE="RECEIVE_MESSAGE",e.SET_CONNECTED_USERS="SET_CONNECTED_USERS",e.CHANGE_CURRENT_CHAT="CHANGE_CURRENT_CHAT"}(L||(L={}));var Ae=function(e,t,a){return function(a){a({type:L.SEND_USER_MESSAGES_START}),F.put("/message/send",{chatId:e,message:t}).then((function(t){var n=t.data;201===t.status?a({type:L.SEND_USER_MESSAGES_SUCCESS,chatId:e,message:n.message}):a({type:L.SEND_USER_MESSAGES_FAIL})})).catch((function(){a({type:L.SEND_USER_MESSAGES_FAIL})}))}},ve=function(e){return function(t){t({type:L.FETCH_CHAT_START}),F.get("/chat/".concat(e)).then((function(a){var n=a.data;200===a.status?t({type:L.FETCH_CHAT_SUCCESS,chat:{chatName:n.title,messages:n.messages},chatId:e}):t({type:L.FETCH_CHAT_FAIL})})).catch((function(){t({type:L.FETCH_CHAT_FAIL})}))}},Ie=Object(s.b)((function(e){return{chatId:e.feedState.currentChat}}),(function(e){return{sendMessage:function(t,a){return e(Ae(t,a))}}}))((function(e){var t=e.chatId,a=e.sendMessage,c=_e(),i=Object(n.useState)(""),l=Object(o.a)(i,2),s=l[0],u=l[1];return r.a.createElement(je,null,r.a.createElement(m.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(){},color:"inherit",disabled:!0},r.a.createElement(Se.a,null)),r.a.createElement(v.a,{variant:"outlined",size:"small",fullWidth:!0,className:c.input,value:s,onChange:function(e){return u(e.target.value)}}),r.a.createElement(m.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(){u(""),a(t,s)},color:"inherit"},r.a.createElement(Ce.a,null)))})),Te=a(260),ye=a(271),Ne=a(67),xe=Object(g.a)((function(e){return Object(C.a)({row:{width:"100%",display:"flex",marginTop:e.spacing(1)},mine:{justifyContent:"flex-end"},notMine:{justifyContent:"flex-start"},message:{width:320,maxWidth:"80%"},header:{marginBottom:e.spacing(1),marginTop:e.spacing(1),paddingBottom:0,paddingTop:0},media:{height:0,paddingTop:"56.25%"},textContent:{paddingTop:0,paddingBottom:0,marginBottom:e.spacing(1),marginTop:e.spacing(1)},text:{wordWrap:"break-word",paddingBottom:0,paddingTop:0,margin:0},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:Ne.a[500],position:"static"}})})),we=function(e){var t,a=e.text,n=e.isMine,c=e.author,i=e.imageUrl,l=e.date,s=xe();return r.a.createElement("div",{className:Object(b.a)(s.row,(t={},Object(p.a)(t,s.mine,n),Object(p.a)(t,s.notMine,!n),t))},r.a.createElement(T.a,{className:Object(b.a)(s.message)},r.a.createElement(Te.a,{avatar:r.a.createElement(ye.a,{alt:c,className:s.avatar}),title:c,subheader:l,className:s.header}),i?r.a.createElement(N.a,{className:s.media,image:i,title:"Paella dish"}):null,r.a.createElement(y.a,{className:s.textContent},r.a.createElement(f.a,{className:s.text,paragraph:!0,color:"textSecondary",component:"p"},a)),r.a.createElement("div",null)))},Ue=Object(g.a)((function(e){return Object(C.a)({feed:{display:"flex",flexWrap:"wrap",flexDirection:"column-reverse",alignContent:"flex-end",width:"100%",marginBottom:e.spacing(1)}})})),He=Object(s.b)((function(e){return{chats:e.feedState.chats,currentChat:e.feedState.currentChat,userId:e.userState.user.id}}),(function(e){return{fetchChat:function(t){return e(ve(t))}}}))((function(e){var t=e.currentChat,a=e.chats,c=e.userId,i=e.fetchChat,l=Ue(),s=Object(n.useRef)(null);Object(n.useEffect)((function(){return s.current.scrollIntoView({behavior:"smooth"})}),[a,t]),Object(n.useEffect)((function(){0!==t&&a.allIds.every((function(e){return e!==t}))&&i(t)}),[t]);var o=a.byId[t],u=o?o.messages:null;return r.a.createElement("div",{className:l.feed},r.a.createElement("span",{ref:s}),u?u.map((function(e){return r.a.createElement(we,{author:e.creator.name,imageUrl:null,text:e.text,isMine:c===e.creator._id,key:e._id,date:e.createdAt})})).reverse():null)})),Re=a(129),Fe=a.n(Re),Ge=a(128),Le=a.n(Ge),ke=Object(g.a)((function(e){return Object(C.a)({container:{display:"flex",MaxWidth:"100%",flexWrap:"nowrap"},grow:{flexGrow:1,flexShrink:1}})})),De=function(e){var t=e.defaultValue,a=e.onSave,c=e.buttonText,i=ke(),l=Object(n.useState)(t||""),s=Object(o.a)(l,2),u=s[0],d=s[1],h=Object(n.useState)(!1),E=Object(o.a)(h,2),f=E[0],p=E[1];return r.a.createElement("div",{className:i.container},f?r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{onClick:function(){d(""),p(!1)},color:"primary",size:"small"},r.a.createElement(Le.a,null)),r.a.createElement(v.a,{onChange:function(e){return d(e.target.value)},label:"Filled",variant:"filled",value:u,className:i.grow,size:"small"}),r.a.createElement(m.a,{onClick:function(){p(!1),a(u),d("")},color:"primary",size:"small"},r.a.createElement(Fe.a,null))):r.a.createElement("div",null,r.a.createElement(D.a,{onClick:function(){p(!0)},variant:"contained",color:"primary",disableElevation:!0,className:i.grow},c)))},Me=Object(g.a)((function(e){var t;return Object(C.a)({root:{display:"flex"},title:{flexGrow:1},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},bottomBar:{top:"auto",bottom:0,paddingTop:e.spacing(1),paddingBottom:e.spacing(1),padding:0},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},toolbar:Object(x.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:(t={flexGrow:1,paddingLeft:e.spacing(2),paddingRight:e.spacing(2),marginLeft:e.spacing(7)+1},Object(p.a)(t,e.breakpoints.up("sm"),{width:e.spacing(9)+1}),Object(p.a)(t,"minHeight","100vh"),t),chat:{height:"100%",display:"flex",alignContent:"flex-end",flexWrap:"wrap"},hideScrollParent:{position:"relative",overflow:"hidden",height:"100vh",padding:0},hideScrollChild:{height:"100%",position:"absolute",overflowY:"scroll",overflowX:"hidden",paddingRight:20,right:-20,left:0,"& > *":{width:"calc(100% + 20px)"}}})})),Be=a(135),We=a(134),ze=function(e,t){var a=function e(t){if(!t||"object"!=typeof t)return t;var a=t instanceof Array?[]:{};for(var n in t)t.hasOwnProperty(n)&&(a[n]=e(t[n]));return a}(e);a[t];return Object(Be.a)(a,[t].map(We.a))};var Pe,Ve,Xe,Je=Object(s.b)((function(e){return{userChats:e.feedState.userChats,currentChat:e.feedState.currentChat,token:e.userState.token,isAuth:e.userState.isAuth}}),(function(e){return{sendMessage:function(t,a){return e(Ae(a,t))},fetchUserChats:function(){return e((function(e){e({type:L.FETCH_USER_CHATS_START}),F.get("/chat/userChats").then((function(t){var a=t.data;200===t.status?e({type:L.FETCH_USER_CHATS_SUCCESS,userChats:a.userChats,chatId:a.chatId}):e({type:L.FETCH_USER_MESSAGES_FAIL})})).catch((function(){e({type:L.FETCH_USER_CHATS_FAIL})}))}))},changeCurrentChat:function(t){return e(function(e){return{type:L.CHANGE_CURRENT_CHAT,chatId:e}}(t))},createNewChat:function(t){return e(function(e){return function(t){t({type:L.ADD_CHAT_START}),F.post("/chat/create",{title:e}).then((function(e){var a=e.data;200===e.status?t({type:L.ADD_CHAT_SUCCESS,chat:{chatName:a.title,messages:a.messages},chatId:a.chatId}):t({type:L.ADD_CHAT_FAIL})})).catch((function(){t({type:L.ADD_CHAT_FAIL})}))}}(t))},receiveMessage:function(t,a){return e(function(e,t){return{type:L.RECEIVE_MESSAGE,message:t,chatId:e}}(t,a))},setConnectedUsers:function(t,a){return e(function(e,t){return{type:L.SET_CONNECTED_USERS,chatId:e,connectedUsers:t}}(t,a))}}}))((function(e){var t=e.isAuth,a=e.userChats,c=e.currentChat,i=e.fetchUserChats,s=e.changeCurrentChat,u=e.createNewChat,d=e.receiveMessage,h=e.setConnectedUsers,E=Object(l.g)(),f=Me(),b=Object(n.useState)(!1),S=Object(o.a)(b,2),g=S[0],C=S[1];return Object(n.useEffect)((function(){setTimeout((function(){t||E.push("/login")}),1500),i();var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.replace("?","").split("&");return t.reduce((function(e,t){var a=t.split("="),n=Object(o.a)(a,2),r=n[0],c=n[1];return Object(x.a)(Object(x.a)({},e),{},Object(p.a)({},r,c))}),{})}(E.location.search);e.hasOwnProperty("chat")&&(0!==e.chat?s(e.chat):s(a[0]));var n=localStorage.getItem("authToken");if(n){var r=ee("http://localhost:8080",n);r.on("message",(function(e){d(e.chatId,e.message)})),r.on("userConnected",(function(e){h(e.chatId,e.users)})),r.on("userDisconnected",(function(e){h(e.chatId,e.users)})),window.addEventListener("beforeunload",r.disconnect)}}),[]),Object(n.useEffect)((function(){if(0!==c){try{te().emit("room",{chatId:c})}catch(e){console.error(e)}E.replace({search:"?chat=".concat(c)})}}),[c]),r.a.createElement("div",{className:f.root},r.a.createElement(pe,{open:g,handleDrawerOpen:function(){return C(!0)}}),r.a.createElement(ue,{open:g,handleDrawerClose:function(){return C(!1)}},r.a.createElement($.a,null,r.a.createElement(W.a,null,r.a.createElement(z.a,null,r.a.createElement(q.a,null)),r.a.createElement(De,{onSave:function(e){u(e)},buttonText:"Create chat"})),a.allIds.map((function(e){return r.a.createElement(W.a,{button:!0,key:e,onClick:function(){return s(e)}},r.a.createElement(z.a,null,r.a.createElement(J.a,null)),r.a.createElement(Z.a,{primary:a.byId[e].chatName}),r.a.createElement(z.a,{style:{justifyContent:"flex-end"}},r.a.createElement(m.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(){E.push("/chatSettings")},size:"small",color:"inherit"},r.a.createElement(V.a,null))))})))),r.a.createElement("main",{className:f.content},r.a.createElement("div",{className:f.chat},r.a.createElement("div",{className:f.toolbar}),r.a.createElement(He,null),r.a.createElement("div",{className:f.toolbar}))),r.a.createElement(Ie,null))})),Ye=Object(g.a)((function(e){return Object(C.a)({root:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"100%"},menuButton:{marginRight:e.spacing(2)},toolbar:Object(x.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),card:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},controllers:{width:"100%"},details:{width:"100%",display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:151}})})),qe=a(264),Ze=Object(s.b)((function(e){return{chats:e.feedState.chats,currentChat:e.feedState.currentChat}}),(function(e){return{fetchChat:function(t){return e(ve(t))}}}))((function(e){var t=e.chats,a=e.currentChat,c=e.fetchChat,i=Ye();Object(n.useEffect)((function(){0!==a&&t.allIds.every((function(e){return e!==a}))&&c(a)}),[]);var l=t.byId[a],s=l&&t.byId[a]&&t.byId[a].connectedUsers?t.byId[a].connectedUsers:[];return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement(u.a,null,r.a.createElement("div",{className:i.toolbar}),r.a.createElement(I.a,{justify:"center",container:!0,spacing:1},r.a.createElement(I.a,{item:!0,xs:12,md:6},r.a.createElement(T.a,{className:i.card},r.a.createElement("div",{className:i.details},r.a.createElement(y.a,{className:i.content},r.a.createElement(f.a,{component:"h5",variant:"h5"},l?l.chatName:null))),r.a.createElement(y.a,{className:i.controllers},r.a.createElement($.a,{subheader:r.a.createElement(qe.a,{component:"div",id:"nested-list-subheader"},"Users"),component:"ul"},s.map((function(e){return r.a.createElement(W.a,{key:e._id},r.a.createElement(z.a,null,r.a.createElement(Ee.a,null)),r.a.createElement(Z.a,{primary:e.name,secondary:e.status}))})))),r.a.createElement(M.a,null,r.a.createElement(D.a,{size:"small",color:"primary",disabled:!0},"save"),r.a.createElement(D.a,{size:"small",color:"primary",disabled:!0},"exit")))),r.a.createElement(I.a,{item:!0,xs:12}))))})),$e=a(268),Ke=a(265),Qe=Object(g.a)((function(e){return Object(C.a)({root:{minHeight:400,maxWidth:400,display:"flex",flexWrap:"wrap",alignContent:"stretch",alignItems:"flex-end",justifyContent:"center"},content:{display:"flex",flexWrap:"wrap",justifyContent:"center"},actions:{marginBottom:20,height:"100%"}})})),et=function(e){var t=e.children,a=e.signInHandler,n=e.signUpHandler,c=Qe();return r.a.createElement(T.a,{className:c.root},r.a.createElement(y.a,{className:c.content},t),r.a.createElement(M.a,{className:c.actions},r.a.createElement(Ke.a,{size:"large",variant:"text"},r.a.createElement(D.a,{color:"primary",onClick:function(){return a()}},"Sign in"),r.a.createElement(D.a,{color:"default",onClick:function(){return n()}},"Sign up"))))},tt=Object(g.a)((function(e){return Object(C.a)({root:{display:"flex",flexWrap:"wrap",justifyContent:"center"},inputField:{margin:8}})})),at=function(e){var t=e.fields,a=e.title,c=e.changeHandler,i=tt();return r.a.createElement(n.Fragment,null,r.a.createElement(f.a,{gutterBottom:!0,variant:"h5",component:"h1"},a),r.a.createElement("form",{className:i.root,noValidate:!0,autoComplete:"on"},Object.entries(t).map((function(e){var t=Object(o.a)(e,2),a=t[0],n=t[1],l=n.value,s=n.valid;return r.a.createElement(v.a,{key:a,className:i.inputField,value:l,error:!s,placeholder:a,fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",onChange:function(e){return c(a,e.target.value)}})}))))};!function(e){e.email="email",e.username="username",e.password="password"}(Pe||(Pe={})),function(e){e[e.all=0]="all",e[e.specific=1]="specific"}(Ve||(Ve={}));var nt=(Xe={},Object(p.a)(Xe,Pe.email,{value:"",valid:!1}),Object(p.a)(Xe,Pe.username,{value:"",valid:!1}),Object(p.a)(Xe,Pe.password,{value:"",valid:!1}),Xe),rt=function(e,t){switch(t.type){case Pe.password:case Pe.username:case Pe.email:return Object(x.a)(Object(x.a)({},e),{},Object(p.a)({},t.type,Object(x.a)(Object(x.a)({},e[t.type]),{},{value:t.value})));case Ve.all:var a=Object.entries(e).reduce((function(t,a){var n,r=Object(o.a)(a,2),c=r[0],i=r[1].value;return Object(x.a)(Object(x.a)({},t),{},Object(p.a)({},c,Object(x.a)(Object(x.a)({},e[c]),{},{valid:(n=i,n.length>=5)})))}),{});return Object(x.a)(Object(x.a)({},e),a);default:return e}},ct=function(){return{type:Ve.all}},it=Object(g.a)((function(e){return Object(C.a)({root:{height:"100vh",flexGrow:1,minWidth:300,transform:"translateZ(0)","@media all and (-ms-high-contrast: none)":{display:"none"}},modal:{display:"flex",padding:e.spacing(1),alignItems:"center",justifyContent:"center"},paper:{width:400,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}})})),lt=Object(s.b)((function(e){return{isAuth:e.userState.isAuth}}),(function(e){return{signIn:function(t,a){return e(k(t,a))},signUp:function(t,a,n){return e(function(e,t,a){return function(n){F.put("/auth/signup",{email:e,password:a,name:t}).then((function(){k(e,a)})).catch((function(){n({type:R.LOGIN_FAIL})}))}}(t,a,n))}}}))((function(e){var t=e.signIn,a=e.signUp,c=e.isAuth,i=Object(n.useState)(!0),s=Object(o.a)(i,2),u=s[0],d=s[1],m=Object(n.useReducer)(rt,nt),h=Object(o.a)(m,2),E=h[0],f=h[1],p=it(),b=r.a.useRef(null);return c?r.a.createElement(l.a,{to:"/chat"}):r.a.createElement("div",{className:p.root,ref:b},r.a.createElement($e.a,{disablePortal:!0,disableEnforceFocus:!0,disableAutoFocus:!0,open:!0,"aria-labelledby":"server-modal-title","aria-describedby":"server-modal-description",className:p.modal,container:function(){return b.current}},r.a.createElement("div",null,r.a.createElement(et,{signInHandler:function(){if(!u)return d(!0);f(ct());var e=ze(E,"username");Object.values(e).every((function(e){return e.valid})),t(E.email.value,E.password.value)},signUpHandler:function(){if(u)return d(!1);f(ct()),Object.values(E).every((function(e){return e.valid})),a(E.email.value,E.username.value,E.password.value),d(!0)}},r.a.createElement(at,{title:u?"Sign in":"Sign up",fields:u?ze(E,"username"):E,changeHandler:function(e,t){return f(function(e,t){return{type:e,value:t}}(e,t))}})))))}));var st=Object(l.h)(Object(s.b)((function(e){return{isAuth:e.userState.isAuth}}),(function(e){return{login:function(){return e((function(e){F.get("/auth/fetchUser").then((function(t){var a=t.data;200===t.status?(e({type:R.LOGIN,id:a.id,chatIds:a.chatIds,status:a.status,userName:a.userName}),localStorage.setItem("authToken",a.token)):e({type:R.LOGIN_FAIL})})).catch((function(){e({type:R.LOGIN_FAIL})}))}))}}}))((function(e){var t=e.login,a=e.isAuth,c=Object(l.g)();return Object(n.useEffect)((function(){var e=localStorage.getItem("authToken");Boolean(e)&&!a?t():setTimeout((function(){a||c.push("/login")}),1800)}),[]),r.a.createElement("div",null,r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/profile",exact:!0,render:function(){return a?r.a.createElement(B,null):r.a.createElement(l.a,{to:"/login"})}}),r.a.createElement(l.b,{path:"/chatSettings",exact:!0,render:function(){return a?r.a.createElement(Ze,null):r.a.createElement(l.a,{to:"/login"})}}),r.a.createElement(l.b,{path:"/login",exact:!0,render:function(){return r.a.createElement(lt,null)}}),r.a.createElement(l.b,{path:"/chat",render:function(){return r.a.createElement(Je,null)}}),r.a.createElement(l.b,{path:"/",exact:!0,render:function(){return a?r.a.createElement(l.a,{to:"/chat"}):r.a.createElement("div",null)}})))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ot=a(45),ut=a(133),dt=a(34),mt=a(266),ht={isAuth:!1,token:"",user:{id:0,chatIds:[],status:"",userName:""}},Et=a(55),ft={currentChat:0,chats:{allIds:[],byId:{}},userChats:{allIds:[],byId:{}}},pt=null,bt=Object(ot.c)({userState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.LOGIN:return Object(x.a)(Object(x.a)({},e),{},{isAuth:!0,token:t.token,user:Object(x.a)(Object(x.a)({},e.user),{},{id:t.id,chatIds:t.chatIds,status:t.status,userName:t.userName})});case R.SET_AUTH:return Object(x.a)(Object(x.a)({},e),{},{isAuth:!0});case R.LOGIN_FAIL:case R.LOGOUT:return ht;case R.CHANGE_STATUS_SUCCESS:return Object(x.a)(Object(x.a)({},e),{},{user:Object(x.a)(Object(x.a)({},e.user),{},{status:t.status})});case R.CHANGE_USER_NAME_SUCCESS:return Object(x.a)(Object(x.a)({},e),{},{user:Object(x.a)(Object(x.a)({},e.user),{},{userName:t.name})});default:return e}},feedState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L.SET_CONNECTED_USERS:return Object(x.a)(Object(x.a)({},e),{},{chats:Object(x.a)(Object(x.a)({},e.chats),{},{byId:Object(x.a)(Object(x.a)({},e.chats.byId),{},Object(p.a)({},t.chatId,Object(x.a)(Object(x.a)({},e.chats.byId[t.chatId]),{},{connectedUsers:t.connectedUsers})))})});case L.FETCH_CHAT_SUCCESS:return Object(x.a)(Object(x.a)({},e),{},{chats:Object(x.a)(Object(x.a)({},e.chats),{},{allIds:[].concat(Object(Et.a)(e.chats.allIds),[t.chatId]),byId:Object(x.a)(Object(x.a)({},e.chats.byId),{},Object(p.a)({},t.chatId,Object(x.a)(Object(x.a)({},e.chats.byId[t.chatId]),t.chat)))})});case L.ADD_CHAT_SUCCESS:return Object(x.a)(Object(x.a)({},e),{},{chats:Object(x.a)(Object(x.a)({},e.chats),{},{allIds:[].concat(Object(Et.a)(e.chats.allIds),[t.chatId]),byId:Object(x.a)(Object(x.a)({},e.chats.byId),{},Object(p.a)({},t.chatId,Object(x.a)(Object(x.a)({},e.chats.byId[t.chatId]),t.chat)))}),userChats:Object(x.a)(Object(x.a)({},e.chats),{},{allIds:[].concat(Object(Et.a)(e.userChats.allIds),[t.chatId]),byId:Object(x.a)(Object(x.a)({},e.userChats.byId),{},Object(p.a)({},t.chatId,{chatName:t.chat.chatName,icon:null}))})});case L.FETCH_USER_CHATS_SUCCESS:return Object(x.a)(Object(x.a)({},e),{},{userChats:t.userChats});case L.CHANGE_CURRENT_CHAT:return Object(x.a)(Object(x.a)({},e),{},{currentChat:t.chatId});case L.FETCH_USER_MESSAGES_SUCCESS:return console.log(e.chats),Object(x.a)(Object(x.a)({},e),{},{chats:Object(x.a)(Object(x.a)({},e.chats),{},{byId:Object(x.a)(Object(x.a)({},e.chats.byId),{},Object(p.a)({},t.chatId,Object(x.a)(Object(x.a)({},e.chats.byId[t.chatId]),{},{messages:t.messages})))})});case L.RECEIVE_MESSAGE:return Object(x.a)(Object(x.a)({},e),{},{chats:Object(x.a)(Object(x.a)({},e.chats),{},{byId:Object(x.a)(Object(x.a)({},e.chats.byId),{},Object(p.a)({},t.chatId,{messages:[].concat(Object(Et.a)(e.chats.byId[t.chatId].messages),[t.message]).filter((function(e,t,a){return t===a.findIndex((function(t){return t._id===e._id}))}))}))})});default:return e}}}),St=Object(ot.d)(bt,pt(Object(ot.a)(ut.a)));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(mt.a,null),r.a.createElement(s.a,{store:St},r.a.createElement(dt.a,null,r.a.createElement(st,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[148,1,2]]]);
//# sourceMappingURL=main.74b45d61.chunk.js.map