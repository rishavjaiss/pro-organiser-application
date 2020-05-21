(this["webpackJsonppro-organiser-application"]=this["webpackJsonppro-organiser-application"]||[]).push([[0],{16:function(e,a,t){e.exports={Navbar:"Navbar_Navbar__CJBdt",Title:"Navbar_Title__18ncl",NavItemContainer:"Navbar_NavItemContainer__3q6EQ",NavItem:"Navbar_NavItem__1e0cQ",Active:"Navbar_Active__3PMV0"}},17:function(e,a,t){e.exports={Container:"Home_Container__2zzhb",Heading:"Home_Heading__2kWWd",Board:"Home_Board__3BMbW",BoardContainer:"Home_BoardContainer__2-W1b"}},19:function(e,a,t){e.exports={SubHeading:"CardDetailsModal_SubHeading__3XZAl",Members:"CardDetailsModal_Members__3ucCI"}},23:function(e,a,t){e.exports={Container:"CreateBoard_Container__N1JGG",Heading:"CreateBoard_Heading__33M-X"}},36:function(e,a,t){e.exports={Heading:"AddColumnModal_Heading__3_OTR"}},38:function(e,a,t){e.exports={Heading:"AddCardModal_Heading__1rsEu"}},39:function(e,a,t){e.exports={Warning:"NotFound_Warning__OgSI3"}},40:function(e,a,t){e.exports=t(87)},45:function(e,a,t){},6:function(e,a,t){e.exports={Container:"BoardDetails_Container__3LNwC",Head:"BoardDetails_Head__2pJqU",Heading:"BoardDetails_Heading__17BzK",AddColumn:"BoardDetails_AddColumn__3wRT6",ColumnContainer:"BoardDetails_ColumnContainer__3rS06",Column:"BoardDetails_Column__3Eez7",ColumnHead:"BoardDetails_ColumnHead__3aJ5v",DeleteBin:"BoardDetails_DeleteBin__2LYWU",CardContainer:"BoardDetails_CardContainer__2A-IX",Card:"BoardDetails_Card__1nag-",Title:"BoardDetails_Title__10Ko-",MemberContainer:"BoardDetails_MemberContainer__1A40U",ViewButton:"BoardDetails_ViewButton__2Y0sW",MemberIcon:"BoardDetails_MemberIcon__2IM7-",AddCard:"BoardDetails_AddCard__XKtA8"}},87:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(15),l=t.n(o);t(45),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=t(14),i=t(4),m=t(16),d=t.n(m);function s(){return Object(n.useEffect)((function(){document.title="Project Organizer"}),[]),r.a.createElement("div",{className:d.a.Navbar},r.a.createElement("p",{className:d.a.Title},"Pro-Organiser"),r.a.createElement("div",{className:d.a.NavItemContainer},r.a.createElement(c.c,{exact:!0,to:"/",activeClassName:d.a.Active},r.a.createElement("div",{className:d.a.NavItem},"Home")),r.a.createElement(c.c,{to:"/createboard",activeClassName:d.a.Active},r.a.createElement("div",{className:d.a.NavItem},"Create Board"))))}var u=t(8),p=t.n(u),E=t(23),f=t.n(E);t(18);function v(){return r.a.createElement("div",{className:f.a.Container},r.a.createElement("p",{className:f.a.Heading},"Create a Board"),r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault();var a=document.getElementById("name").value,t=document.getElementById("team").value.split(","),n=document.getElementById("type").value;""!==a&&""!==t&&""!==n&&p.a.post("https://pro-organizer-app-7871e.firebaseio.com/.json",{Name:a,Team:t,Type:n}).then(document.getElementById("name").value="",document.getElementById("team").value="",document.getElementById("type").value="")}(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"formGroupExampleInput"},"Enter a name for your board"),r.a.createElement("input",{type:"text",className:"form-control",id:"name",placeholder:"e.g. Agile Sprint Board",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"formGroupExampleInput2"},"Add your team members"),r.a.createElement("input",{type:"text",className:"form-control",id:"team",placeholder:"Add your team (seperated by commas)",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"formGroupExampleInput3"},"Enter type of your board"),r.a.createElement("input",{type:"text",className:"form-control",id:"type",placeholder:"e.g. Design UI/UX",required:!0})),r.a.createElement("button",{type:"submit",id:"CreateBoard",className:"btn btn-primary"},"Create")))}var b=t(12),g=t(17),C=t.n(g),_=t(35),h=t.n(_);function N(){var e=Object(n.useState)({}),a=Object(b.a)(e,2),t=a[0],o=a[1],l=Object(n.useState)(!0),i=Object(b.a)(l,2),m=i[0],d=i[1];return Object(n.useEffect)((function(){return p.a.get("https://pro-organizer-app-7871e.firebaseio.com/.json").then((function(e){return null!=e.data?o(e.data):o("null")})).then(d(!1)),function(){o({})}}),[]),m?r.a.createElement("div",{style:{width:"100%",height:"100",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(h.a,{type:"ThreeDots",color:"blue",height:"100",width:"100"})):"null"===t?r.a.createElement("div",{className:C.a.Container},r.a.createElement("p",{className:C.a.Heading},"Boards"),r.a.createElement("h5",null,"You haven't created any boards. Kindly click on the 'Create Board' button in the navigation bar to create a board.")):r.a.createElement("div",{className:C.a.Container},r.a.createElement("p",{className:C.a.Heading},"Boards"),r.a.createElement("div",{className:C.a.BoardContainer},function(){var e=[],a=[];for(var n in t){var o=t[n].Name,l=n;e.push(o),a.push(l)}return e.map((function(e,t){return r.a.createElement(c.b,{to:"/home/".concat(a[t]),key:a[t]},r.a.createElement("div",{className:C.a.Board,id:a[t]},e))}))}()))}var y=t(6),B=t.n(y),D=t(9),j=t(36),I=t.n(j);var H=Object(i.f)((function(e){return r.a.createElement(D.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter"}),r.a.createElement(D.a.Header,{closeButton:!0},r.a.createElement(D.a.Title,{id:"contained-modal-title-vcenter",className:I.a.Heading},"Add Column")),r.a.createElement(D.a.Body,null,r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"formGroupExampleInput"},"Enter a column name"),r.a.createElement("input",{type:"text",className:"form-control",id:"column_name",required:!0})),r.a.createElement("button",{type:"button",id:"CreateColumn",className:"btn btn-primary",style:{float:"right"},onClick:function(){return function(){var a=e.match.params.id,t=document.getElementById("column_name").value;p.a.post("https://pro-organizer-app-7871e.firebaseio.com/".concat(a,"/ColumnList/.json"),{Column:t}).then(e.updateboard).then(e.onHide())}()}},"Add Column"))))})),O=t(38),T=t.n(O);var k=function(e){return r.a.createElement(D.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter"}),r.a.createElement(D.a.Header,{closeButton:!0},r.a.createElement(D.a.Title,{id:"contained-modal-title-vcenter",className:T.a.Heading},"Add Card")),r.a.createElement(D.a.Body,null,r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleFormControlInput1"},"Enter a title for your task"),r.a.createElement("input",{type:"text",id:"title",className:"form-control",placeholder:"e.g. Add a new icon",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleFormControlSelect1"},"Choose members for this task (select multiple,if needed)"),r.a.createElement("select",{className:"form-control",id:"team",multiple:!0},r.a.createElement("option",null,"RJ-Rishav Jaiswal"),r.a.createElement("option",null,"CS-Caroll Shelby"),r.a.createElement("option",null,"PP-Peter Parker"),r.a.createElement("option",null,"BW-Bruce Wayne"),r.a.createElement("option",null,"TS-Tony Stark"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleFormControlInput1"},"Add the description for your task"),r.a.createElement("input",{type:"text",className:"form-control",id:"description",placeholder:"Add your description here",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleFormControlInput1"},"Select due-date for this task"),r.a.createElement("input",{type:"date",className:"form-control",id:"due_date",required:!0})),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return function(){var a=e.columnid,t=e.boardid,n=document.getElementById("title").value,r=document.getElementById("team").value,o=document.getElementById("description").value,l=document.getElementById("due_date").value;""===n||""===r||""===o||""===l?alert("Please fill all fields!"):p.a.post("https://pro-organizer-app-7871e.firebaseio.com/".concat(t,"/ColumnList/").concat(a,"/Cards.json"),{Title:n,Members:r,Description:o,Due_Date:l}).then(e.updateboard).then(e.onHide())}()}},"Add Card"))))},A=t(19),x=t.n(A);function S(e){var a=Object(n.useState)(),t=Object(b.a)(a,2),o=t[0],l=t[1],c=e.boardid,i=e.columnid,m=e.cardid;return Object(n.useEffect)((function(){p.a.get("https://pro-organizer-app-7871e.firebaseio.com/".concat(c,"/ColumnList/").concat(i,".json")).then((function(e){return l(e.data)}))}),[c,i]),r.a.createElement(D.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter"}),r.a.createElement(D.a.Header,{closeButton:!0},r.a.createElement(D.a.Title,{id:"contained-modal-title-vcenter",className:x.a.Heading},null===o||void 0===o?void 0:o.Cards[m].Title,r.a.createElement("p",{className:x.a.SubHeading},"in ",null===o||void 0===o?void 0:o.Column))),r.a.createElement(D.a.Body,null,r.a.createElement("h5",null,"Description"),r.a.createElement("div",null,null===o||void 0===o?void 0:o.Cards[m].Description),r.a.createElement("hr",null),r.a.createElement("h5",null,"Members"),r.a.createElement("p",null,r.a.createElement("span",{className:x.a.Members},null===o||void 0===o?void 0:o.Cards[m].Members.split("-")[0])),r.a.createElement("hr",null),r.a.createElement("h5",null,"Due Date"),r.a.createElement("div",null,null===o||void 0===o?void 0:o.Cards[m].Due_Date)))}function w(e){var a=Object(n.useState)({}),t=Object(b.a)(a,2),o=t[0],l=t[1],c=Object(n.useState)(!1),i=Object(b.a)(c,2),m=i[0],d=i[1],s=Object(n.useState)(!1),u=Object(b.a)(s,2),E=u[0],f=u[1],v=Object(n.useState)(""),g=Object(b.a)(v,2),C=g[0],_=g[1],h=Object(n.useState)(!1),N=Object(b.a)(h,2),y=N[0],D=N[1],j=Object(n.useState)(""),I=Object(b.a)(j,2),O=I[0],T=I[1],A=Object(n.useState)(0),x=Object(b.a)(A,2),w=x[0],M=x[1],z=e.match.params.id;function F(e){var a=[],t=[],n=[];for(var l in null===(c=o.ColumnList[e])||void 0===c?void 0:c.Cards){var c,i,m,d=null===(i=o.ColumnList[e])||void 0===i?void 0:i.Cards[l].Title,s=null===(m=o.ColumnList[e])||void 0===m?void 0:m.Cards[l].Members,u=l;a.push(d),t.push(s.split("-")[0]),n.push(u)}var p=a.map((function(e,a){return r.a.createElement("div",{className:B.a.Card,id:n[a],key:a,draggable:!0,onDragStart:function(e){return function(e){e.dataTransfer.setData("cardID",e.currentTarget.id),e.dataTransfer.setData("columnID",e.currentTarget.parentNode.parentNode.id),e.dataTransfer.setData("cardData",document.getElementById(e.currentTarget.id).querySelectorAll("*")),console.log(document.getElementById(e.currentTarget.id).querySelectorAll("*"))}(e)},onClick:function(){return function(e){T(e),_(document.getElementById(e).parentNode.parentNode.id),D(!0)}(n[a])}},r.a.createElement("div",{className:B.a.Title},r.a.createElement("p",null,e)),r.a.createElement("div",{className:B.a.MemberContainer},r.a.createElement("img",{src:"https://static.thenounproject.com/png/1107449-200.png",alt:"ViewButton",className:B.a.ViewButton}),r.a.createElement("span",{className:B.a.MemberIcon},t[a])))}));return a.length>0?p:r.a.createElement("span",null,"No tasks added")}return Object(n.useEffect)((function(){p.a.get("https://pro-organizer-app-7871e.firebaseio.com/".concat(z,".json")).then((function(e){return l(e.data)}))}),[w]),Object(n.useEffect)((function(){p.a.get("https://pro-organizer-app-7871e.firebaseio.com/".concat(z,".json")).then((function(e){return l(e.data)}))}),[z]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:B.a.Container},r.a.createElement("div",{className:B.a.Head},r.a.createElement("div",{className:B.a.Heading},o.Name),r.a.createElement("button",{id:"DeleteBoard",className:"btn btn-danger",onClick:function(){p.a.delete("https://pro-organizer-app-7871e.firebaseio.com/".concat(z,".json")).then(alert("Board is deleted! kindly go back to Home"))}},"Delete Board")),r.a.createElement("div",{className:B.a.ColumnContainer},function(){var e=[],a=[];for(var t in o.ColumnList){var n=o.ColumnList[t].Column,l=t;e.push(n),a.push(l)}return e.map((function(e,t){return r.a.createElement("div",{className:B.a.Column,id:a[t],key:t,onDragOver:function(e){return function(e){e.preventDefault()}(e)},onDrop:function(e){return function(e){e.preventDefault();var a=e.dataTransfer.getData("cardID"),t=e.dataTransfer.getData("columnID"),n=e.dataTransfer.getData("cardData");console.log(a),console.log(t),console.log(n)}(e)}},r.a.createElement("div",{className:B.a.ColumnHead},r.a.createElement("span",null,e),r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/60/60761.svg",alt:"delete",className:B.a.DeleteBin,onClick:function(e){return function(e){var a=e.currentTarget.parentNode.parentNode.id;p.a.delete("https://pro-organizer-app-7871e.firebaseio.com/".concat(z,"/ColumnList/").concat(a,".json")).then(e.currentTarget.parentNode.parentNode.remove())}(e)}})),r.a.createElement("div",{className:B.a.CardContainer},F(a[t])),r.a.createElement("div",{className:B.a.AddCard,onClick:function(){!function(e){_(e),f(!0)}(a[t])}},"Add a card"))}))}(),r.a.createElement("div",{className:B.a.AddColumn,onClick:function(){return d(!0)}},"Add a column"))),m?r.a.createElement(H,{show:m,onHide:function(){return d(!1)},updateboard:function(){return M((function(e){return e+1}))}}):null,E?r.a.createElement(k,{show:E,onHide:function(){return f(!1)},columnid:C,boardid:z,updateboard:function(){return M((function(e){return e+1}))}}):null,y?r.a.createElement(S,{show:y,onHide:function(){return D(!1)},columnid:C,cardid:O,boardid:z}):null)}var M=t(39),z=t.n(M);function F(){return r.a.createElement("h2",{className:z.a.Warning},r.a.createElement("img",{src:"https://dv-website.s3.amazonaws.com/uploads/2012/12/Looking-Glass.jpg",alt:"looking glass",style:{width:"300px",height:"300px"}}),"Oops! Looks like you are stranded, kindly go to Homepage :)")}var L=function(){return r.a.createElement(c.a,null,r.a.createElement(s,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:N}),r.a.createElement(i.a,{path:"/createboard",component:v}),r.a.createElement(i.a,{path:"/home/:id",component:w}),r.a.createElement(i.a,{path:"*",component:F})))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.abb6b7b5.chunk.js.map