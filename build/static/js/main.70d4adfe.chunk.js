(this["webpackJsonp11-wiki-review"]=this["webpackJsonp11-wiki-review"]||[]).push([[0],{14:function(e,t,n){e.exports={detail:"Detail_detail__5N8HS",content:"Detail_content__bai-8",author:"Detail_author__33Wpd",tagList:"Detail_tagList__1MU2d",buttons:"Detail_buttons__1xtN2",delete:"Detail_delete__OKirK",edit:"Detail_edit__3xZKd"}},15:function(e,t,n){e.exports={container:"Form_container__1Pwyk",header:"Form_header__1XDMy",error:"Form_error__EOKjd"}},22:function(e,t,n){e.exports={add:"Header_add__3Z0xW",search:"Header_search__1MV_B"}},25:function(e,t,n){e.exports={item:"Feed_item__3J5Wd",arrow:"Feed_arrow__1zN26",tags:"Feed_tags__2g-6e"}},28:function(e,t,n){e.exports={app:"App_app__2RmiD",content:"App_content__3g2hE"}},39:function(e,t,n){e.exports={list:"List_list__2wJfH"}},40:function(e,t,n){e.exports={loading:"Loading_loading__2yynj"}},42:function(e,t,n){e.exports={item:"Users_item__2iDYw",tags:"Users_tags__1XBUV"}},48:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(38),s=n.n(r),i=n(5),l=n(2),j=(n(48),n(6)),o=n.n(j),u=n(12),d=n(13),b=n.n(d),h=function(e){return b.a.get("/api/pages/search/".concat(e)).then((function(e){return e.data}))},O=function(){return b.a.get("/api/pages").then((function(e){return e.data}))},p=function(){return b.a.get("/api/users").then((function(e){return e.data}))},x=function(e){return b.a.get("/api/users/".concat(e)).then((function(e){return e.data}))},m=function(e){return b.a.get("/api/pages/".concat(e)).then((function(e){return e.data}))},f=function(e,t){return b.a.put("/api/pages/".concat(e),t).then((function(e){return e.data}))},g=function(e){return b.a.get("/api/pages/".concat(e,"/similar")).then((function(e){return e.data}))},v=n(10),_=n(43),y={fetch:"FETCH",set:"SET",err:"ERROR"};function w(e,t){switch(t.type){case y.fetch:return{state:"loading",values:e.values};case y.set:return{state:"success",values:t.payload};case y.add:return{state:"success",values:[].concat(Object(_.a)(e.values),[t.payload])};case y.err:return{state:"error",values:e.values,msg:t.err};default:throw new Error("Unhandled type: ".concat(t.type))}}var N=function(){var e=Object(a.useReducer)(w,{state:"loading",values:[]}),t=Object(v.a)(e,2),n=t[0],c=t[1];return{list:n,onFetch:function(){return c({type:y.fetch})},onError:function(e){return c({type:y.err,err:e})},success:function(e){Array.isArray(e)?c({type:y.set,payload:e}):c({type:y.add,payload:e})}}},k=n(3),T=n(39),E=n.n(T),C=n.p+"static/media/loading.706124a2.gif",S=n(40),D=n.n(S),F=n(0),A=function(){return Object(F.jsx)("div",{className:D.a.loading,children:Object(F.jsx)("img",{src:C,alt:"loading",width:"200"})})},P=function(e){var t=e.items,n=e.children;if("loading"===t.state)return Object(F.jsx)(A,{});if("error"===t.state){var a=t.msg.response,c=a.statusText,r=a.status;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)("h3",{children:["Error: ",r," ",c]}),Object(F.jsx)("p",{children:"Check network dev tools"})]})}return 0===t.values.length?Object(F.jsx)("p",{children:"Looks empty..."}):Object(F.jsx)("div",{className:E.a.list,children:t.values.map((function(e){return n(e)}))})},U=n(25),L=n.n(U),H=function(e){var t=e.title,n=e.list,c=e.getFeed,r=Object(l.h)();return Object(a.useEffect)((function(){c(r.params.arg)}),[r.params.arg]),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("h2",{children:t}),Object(F.jsx)(P,{items:n,children:function(e){return Object(F.jsx)(i.b,{to:e.route,children:Object(F.jsxs)("div",{className:L.a.item,children:[Object(F.jsxs)("p",{children:[Object(F.jsx)(k.f,{})," ",Object(F.jsx)("strong",{children:e.title})," ",Object(F.jsx)("em",{children:e.tags?e.tags.join(" - "):""})]}),Object(F.jsxs)("p",{className:L.a.arrow,children:[Object(F.jsx)("small",{children:e.status?"status: ".concat(e.status):""})," ",Object(F.jsx)(k.a,{})]})]})},e.id)}})]})},M=n(42),B=n.n(M),R=function(e){var t=e.title,n=e.list,c=e.getUsers;return Object(a.useEffect)((function(){c()}),[]),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("h2",{children:t}),Object(F.jsx)(P,{items:n,children:function(e){return Object(F.jsx)(i.b,{to:"/users/".concat(e.id),children:Object(F.jsxs)("div",{className:B.a.item,children:[Object(F.jsxs)("p",{children:[Object(F.jsx)(k.h,{})," ",Object(F.jsx)("strong",{children:e.name})," ",Object(F.jsx)("small",{children:e.email})]}),Object(F.jsx)(k.a,{})]})},e.id)}})]})},W=n(14),I=n.n(W),J=function(){var e=Object(l.g)().push,t=Object(l.h)().params,n=Object(a.useState)({}),c=Object(v.a)(n,2),r=c[0],s=c[1];Object(a.useEffect)((function(){m(t.urlTitle).then((function(e){s(e)})).catch(s)}),[t.urlTitle]);var j=function(){var t=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n=r.id,b.a.delete("/api/pages/".concat(n)).then((function(e){return e.data}));case 2:e("/wiki");case 3:case"end":return t.stop()}var n}),t)})));return function(){return t.apply(this,arguments)}}();return r instanceof Error?Object(F.jsx)("h3",{children:"Error: Post not found"}):r.id?Object(F.jsxs)("div",{className:I.a.detail,children:[Object(F.jsx)("h2",{children:r.title}),Object(F.jsxs)("p",{className:I.a.author,children:[Object(F.jsxs)("span",{children:[Object(F.jsx)(k.i,{})," ",r.author.name]}),Object(F.jsx)("small",{children:r.author.email})]}),r.renderedContent?Object(F.jsx)("div",{className:I.a.content,dangerouslySetInnerHTML:{__html:r.renderedContent}}):Object(F.jsx)("div",{className:I.a.content,children:Object(F.jsx)("p",{children:r.content})}),Object(F.jsx)("div",{className:I.a.tagList,children:r.tags?r.tags.map((function(e){return Object(F.jsx)(i.b,{to:"/search/".concat(e),children:Object(F.jsxs)("p",{className:I.a.tag,children:["#",e]})},e)})):null}),Object(F.jsxs)("div",{className:I.a.buttons,children:[Object(F.jsxs)("button",{className:I.a.delete,onClick:j,children:[Object(F.jsx)(k.g,{}),"delete post"]}),Object(F.jsx)(i.b,{to:"/edit/".concat(r.urlTitle),children:Object(F.jsxs)("button",{className:I.a.edit,children:[Object(F.jsx)(k.d,{}),"edit post"]})}),Object(F.jsx)(i.b,{to:"/similar/".concat(r.urlTitle),children:Object(F.jsxs)("button",{children:[Object(F.jsx)(k.b,{}),"find similar"]})})]})]}):Object(F.jsx)(A,{})},K=n(22),G=n.n(K),V=function(){var e=Object(l.g)().push,t=Object(a.useState)(""),n=Object(v.a)(t,2),c=n[0],r=n[1],s=function(){var t=Object(u.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),e("/search/".concat(c));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(F.jsxs)("div",{className:G.a.search,children:[Object(F.jsx)("form",{onSubmit:s,children:Object(F.jsx)("input",{placeholder:"Search by tag",onChange:function(e){var t=e.target;r(t.value)},value:c})}),Object(F.jsx)(k.e,{onClick:s})]})},X=function(){return Object(F.jsxs)("header",{children:[Object(F.jsxs)("div",{children:[Object(F.jsx)(i.b,{to:"/",children:Object(F.jsx)("h3",{children:"DBMS"})}),Object(F.jsx)(V,{})]}),Object(F.jsx)("nav",{children:Object(F.jsxs)("ul",{children:[Object(F.jsx)(i.b,{to:"/users",children:Object(F.jsx)("li",{children:"users"})}),Object(F.jsx)("li",{children:Object(F.jsx)(i.b,{to:"/add",children:Object(F.jsx)("button",{className:G.a.add,children:"add post"})})})]})})]})},Z=n(17),z=n(18),Y=n.p+"static/media/plus.2ff3b293.svg",q=n(15),Q=n.n(q),$={name:"",email:"",title:"",content:"",tags:""},ee=function(){var e=Object(l.g)().push,t=Object(a.useState)($),n=Object(v.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),i=Object(v.a)(s,2),j=i[0],d=i[1],h=function(){var t=Object(u.a)(o.a.mark((function t(n){var a,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,s=c,b.a.post("/api/pages",s).then((function(e){return e.data}));case 4:a=t.sent,e("/wiki/".concat(a.urlTitle)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),r=t.t0.response,d(r.data);case 12:case"end":return t.stop()}var s}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),O=function(e){var t=e.target,n=t.value,a=t.name;r(Object(z.a)(Object(z.a)({},c),{},Object(Z.a)({},a,n)))};return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("div",{className:Q.a.container,children:Object(F.jsxs)("form",{onSubmit:h,children:[Object(F.jsxs)("div",{className:Q.a.header,children:[Object(F.jsx)("h2",{children:"ADD A NEW PAGE"}),Object(F.jsx)("img",{src:Y,onClick:h,alt:"add icon",width:"25"})]}),Object(F.jsxs)("label",{children:["Author Name",Object(F.jsx)("input",{onChange:O,name:"name",type:"text",value:c.name,placeholder:"Nombre completo del autor"})]}),Object(F.jsxs)("label",{children:["Author Email",Object(F.jsx)("input",{onChange:O,name:"email",type:"email",value:c.email,placeholder:"Email del autor"})]}),Object(F.jsxs)("label",{children:["Page Title",Object(F.jsx)("input",{onChange:O,name:"title",type:"text",value:c.title,placeholder:"Titulo del posteo"})]}),Object(F.jsxs)("label",{children:["Page Content",Object(F.jsx)("textarea",{onChange:O,name:"content",type:"text",value:c.content,placeholder:"Contenido del post, incluye markdown"})]}),Object(F.jsxs)("label",{children:["Tags",Object(F.jsx)("input",{onChange:O,name:"tags",type:"text",value:c.tags,placeholder:"Separar con comas (,)"})]})]})}),j&&Object(F.jsx)("p",{className:Q.a.error,children:j})]})},te={title:"",content:"",tags:""},ne=function(){var e=Object(l.g)().push,t=Object(l.h)().params,n=Object(a.useState)(te),c=Object(v.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(""),j=Object(v.a)(i,2),d=j[0],b=j[1];Object(a.useEffect)((function(){m(t.urlTitle).then((function(e){s(e)})).catch((function(e){var t=e.response;b(t.data)}))}),[t.urlTitle]);var h=function(){var n=Object(u.a)(o.a.mark((function n(a){var c,s;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),n.prev=1,n.next=4,f(t.urlTitle,r);case 4:c=n.sent,e("/wiki/".concat(c.urlTitle)),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),s=n.t0.response,b(s.data);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),O=function(e){var t=e.target,n=t.value,a=t.name;s(Object(z.a)(Object(z.a)({},r),{},Object(Z.a)({},a,n)))};return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("div",{className:Q.a.container,children:Object(F.jsxs)("form",{onSubmit:h,children:[Object(F.jsxs)("div",{className:Q.a.header,children:[Object(F.jsx)("h2",{children:"EDIT PAGE"}),Object(F.jsx)(k.c,{onClick:h})]}),Object(F.jsxs)("label",{children:["Page Title",Object(F.jsx)("input",{onChange:O,name:"title",type:"text",value:r.title,placeholder:"Titulo del posteo"})]}),Object(F.jsxs)("label",{children:["Page Content",Object(F.jsx)("textarea",{onChange:O,name:"content",type:"text",value:r.content,placeholder:"Contenido del post, incluye markdown"})]}),Object(F.jsxs)("label",{children:["Tags",Object(F.jsx)("input",{onChange:O,name:"tags",type:"text",value:r.tags,placeholder:"Separar con comas (,)"})]})]})}),d&&Object(F.jsx)("p",{className:Q.a.error,children:d})]})},ae=n(28),ce=n.n(ae);var re=function(){var e=N(),t=e.list,n=e.onFetch,a=e.onError,c=e.success,r=function(e){return Object(u.a)(o.a.mark((function t(){var r,s=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(),t.prev=1,t.next=4,e.apply(void 0,s);case 4:r=t.sent,c(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))};return Object(F.jsxs)("div",{className:ce.a.app,children:[Object(F.jsx)(X,{}),Object(F.jsx)("section",{className:ce.a.content,children:Object(F.jsxs)(l.d,{children:[Object(F.jsx)(l.b,{path:"/wiki/:urlTitle",children:Object(F.jsx)(J,{})}),Object(F.jsx)(l.b,{path:"/wiki",children:Object(F.jsx)(H,{title:"All Posts",list:t,getFeed:r(O)})}),Object(F.jsx)(l.b,{path:"/users/:arg",children:Object(F.jsx)(H,{title:"User Posts",list:t,getFeed:r(x)})}),Object(F.jsx)(l.b,{path:"/users",children:Object(F.jsx)(R,{title:"All Users",list:t,getUsers:r(p)})}),Object(F.jsx)(l.b,{path:"/add",children:Object(F.jsx)(ee,{title:"ADD A NEW POST",mode:"add"})}),Object(F.jsx)(l.b,{path:"/edit/:urlTitle",children:Object(F.jsx)(ne,{title:"EDIT POST",mode:"edit"})}),Object(F.jsx)(l.b,{path:"/search/:arg",children:Object(F.jsx)(H,{title:"Search By tag",list:t,getFeed:r(h)})}),Object(F.jsx)(l.b,{path:"/similar/:arg",children:Object(F.jsx)(H,{title:"Similar Pages",list:t,getFeed:r(g)})}),Object(F.jsx)(l.a,{to:"/wiki"})]})})]})};s.a.render(Object(F.jsx)(c.a.StrictMode,{children:Object(F.jsx)(i.a,{children:Object(F.jsx)(l.b,{children:Object(F.jsx)(re,{})})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.70d4adfe.chunk.js.map