(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(43)},29:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(17),l=n.n(i),c=n(8),o=n(6),s=n(1),u=n(2),d=new(function(){function e(t){var n=this;Object(s.a)(this,e),this.init=function(e){n.storage=e},this.createBoard=function(e,t){var n=t.title,a=t.text,r=t.phone,i=t.city;return![n,a,r,i].some(function(e){return void 0===e})&&{id:e,title:n,text:a,phone:r,city:i}},this.addBoard=function(e,t){var a=n.storage,r=n.createBoard(t,e);return!1!==r&&(a.push(r),n.storage=a),r},this.changeBoard=function(e,t){var a=n.storage,r=n.createBoard(t,e),i=a.findIndex(function(e){return e.id===t});return!1!==r&&(a.splice(i,1,r),n.storage=a),r},this.deleteBoard=function(e){var t=n.storage,a=t.findIndex(function(t){return t.id===e}),r=t.splice(a,1);return n.storage=t,!!r.length},this.dbName="boardList",null===this.storage&&this.init(t)}return Object(u.a)(e,[{key:"storage",get:function(){var e=this.dbName;return void 0!==localStorage[e]?JSON.parse(localStorage[e]):null},set:function(e){var t=this.dbName;return localStorage[t]=JSON.stringify(e)}}]),e}())([{id:"12345",title:"\u041f\u0440\u043e\u0434\u0430\u043c \u0441\u043b\u043e\u043d\u0430",text:" \u041a\u0443\u043f\u0438 \u0441\u043b\u043e\u043d\u0430, \u043d\u0443 \u043a\u0443\u043f\u0438!",phone:"+7 (123) 345-45-56",city:"\u041c\u043e\u0441\u043a\u0432\u0430"},{id:"67890",title:"\u041a\u0443\u043f\u043b\u044e \u0441\u043b\u043e\u043d\u0430",text:" \u0425\u043e\u0447\u0443 \u0441\u043b\u043e\u043d\u0430, \u043e\u0447\u0435\u043d\u044c \u0445\u043e\u0447\u0443!",phone:"+7 (111) 222-33-44",city:"\u041c\u043e\u0441\u043a\u0432\u0430"}]),h="DELETE",p="SAVE",m="CHANGE",f="CHOOSE_ID";function b(e){return{type:h,payload:e}}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return{type:p,payload:t,generateId:e}}function y(e,t){return{type:m,payload:t,id:e}}function g(e){return{type:f,payload:e}}var _=Object(o.c)({boardList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.storage,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload,r=t.generateId,i=t.id;switch(n){case p:return d.addBoard(a,r),d.storage;case m:return d.changeBoard(a,i),d.storage;case h:return d.deleteBoard(a),d.storage;default:return e}},id:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case f:return a;case m:return null;default:return e}}}),E=n(10),O=n(19),N=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):o.d)(Object(o.a)(function(e){return function(e){return function(t){return t.hasOwnProperty("generateId")?e(Object(E.a)({},t,{generateId:Date.now().toString()})):e(t)}}},O.a)),j=Object(o.e)(_,N);window.store=j;var C=j,x=n(4),w=n(3),S=n(5),I=n(11),k=(n(29),function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(n=Object(x.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(i)))).switchType=function(e){switch(e){case"error":return"helper helper--error";case"valid":return"helper helper--valid ";default:return"helper helper--info"}},n.switchContent=function(e,t){switch(e){case"error":return a.createElement("p",null,"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435");case"valid":return a.createElement("p",null,"\u0417\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e");default:return t.map(function(e,t){return a.createElement("p",{key:t},e)})}},n}return Object(S.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.textArray,n=e.type;return a.createElement("div",{className:this.switchType(n)},this.switchContent(n,t))}}]),t}(a.Component)),L=(n(31),["\u041c\u043e\u0441\u043a\u0432\u0430","\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a","\u0427\u0435\u0431\u043e\u043a\u0441\u0430\u0440\u044b"]),T=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(n=Object(x.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(i)))).fieldStyle=function(e,t){var n=[];return"input"===e?n.push("field__input"):"textarea"===e&&n.push("field__textarea"),"error"===t&&n.push("field--error"),n.join(" ")},n.handlerChange=function(e,t){var a=n.props.handler,r=e.target.value;if("phone"===t){var i=e.target.value.replace(/\D/g,""),l=/^([^\s]{1})([^\s]{3})([^\s]{3})([^\s]{2})([^\s]{2})$/g.exec(i);return l&&(l.shift(),r="+7 ("+l[1]+") "+l[2]+"-"+l[3]+"-"+l[4]),void a(t,l?r:i)}a(t,r)},n.handlerChangeForCity=function(e,t){var a=n.props.handler;document.querySelector(".select__option").classList.remove("select__option--open"),a(t,e)},n.openList=function(){document.querySelector(".select__option").classList.add("select__option--open")},n.chooseContent=function(e,t,r){switch(e){case"input":return a.createElement("input",{value:t,onChange:function(e){return n.handlerChange(e,"title")},className:n.fieldStyle("input",r),maxLength:140});case"textarea":return a.createElement("textarea",{value:t,onChange:function(e){return n.handlerChange(e,"text")},className:n.fieldStyle("textarea"),maxLength:300,style:{resize:"none"}});case"phone":return a.createElement("input",{value:t,maxLength:18,placeholder:"+7 (___) ___ - __ - __",onChange:function(e){return n.handlerChange(e,"phone")},className:n.fieldStyle("input",r)});case"city":return a.createElement("div",{className:"select"},a.createElement("div",{className:"select__field"},t),t&&a.createElement("button",{className:"select__remove",onClick:function(){return n.handlerChangeForCity("","city")}}),a.createElement("button",{className:"select__open",onClick:n.openList}),a.createElement("ul",{className:"select__option"},L.map(function(e){return a.createElement("li",{className:"select__item",key:e,onClick:function(){return n.handlerChangeForCity(e,"city")}},e)})))}},n}return Object(S.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.text,r=e.type,i=e.textHelper,l=e.validStatus,c=!1===l?"error":!0===l?"valid":"info";return a.createElement("div",{className:"field"},a.createElement("span",{className:"field__title"},t),a.createElement("div",{className:"field__content"},this.chooseContent(r,n,c),i&&a.createElement(k,{textArray:i,type:c})))}}]),t}(a.Component),D=(n(33),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(x.a)(this,Object(w.a)(t).call(this,e))).handlerChange=function(e,t){n.setState({data:Object(E.a)({},n.state.data,Object(I.a)({},e,t))})},n.validField=function(){var e=n.state.data.title.length>0,t=11===n.state.data.phone.replace(/\D/g,"").length;return n.setState({isValid:{validTitle:e,validNumber:t}}),{validTitle:e,validNumber:t}},n.handlerSubmit=function(){var e=n.validField();if(!e.validNumber||!e.validTitle)return null;n.state.data.id?n.props.changeItem(n.state.data.id,n.state.data):n.props.saveItem(n.state.data.id,n.state.data),n.setState({data:{id:null,title:"",text:"",phone:"",city:""},isValid:{validTitle:null,validNumber:null}})},n.state={data:{id:null,title:"",text:"",phone:"",city:""},isValid:{validTitle:null,validNumber:null}},n}return Object(S.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.createElement("div",{className:"board-main"},a.createElement("h1",{className:"board-main__title"},"\u041f\u043e\u0434\u0430\u0442\u044c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435"),a.createElement(T,{title:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",text:this.state.data.title,handler:this.handlerChange,validStatus:this.state.isValid.validTitle,type:"input",textHelper:["\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435","\u041d\u0435 \u0431\u043e\u043b\u0435\u0435 140 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"]}),a.createElement(T,{title:"\u0422\u0435\u043a\u0441\u0442 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f",text:this.state.data.text,handler:this.handlerChange,type:"textarea",textHelper:["\u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435","\u041d\u0435 \u0431\u043e\u043b\u0435\u0435 300 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"]}),a.createElement(T,{title:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",text:this.state.data.phone,handler:this.handlerChange,validStatus:this.state.isValid.validNumber,type:"phone",textHelper:["\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"]}),a.createElement(T,{title:"\u0413\u043e\u0440\u043e\u0434",text:this.state.data.city,handler:this.handlerChange,type:"city",textHelper:["\u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"]}),a.createElement("button",{className:"submit-button",onClick:this.handlerSubmit},"\u041f\u043e\u0434\u0430\u0442\u044c"))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.id&&t.data.id!==e.id){var n=e.id&&e.board.find(function(t){return t.id===e.id});return{data:{id:n?n.id:null,title:n?n.title:"",text:n?n.text:"",phone:n?n.phone:"",city:n?n.city:""}}}return null}}]),t}(a.Component)),B=Object(c.b)(function(e){return{board:e.boardList,id:e.id}},function(e){return Object(o.b)({saveItem:v,changeItem:y},e)})(D),V=(n(35),n(37),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(x.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){n.props.chooseItem(e)},n.handleDelete=function(e){n.props.deleteItem(e)},n}return Object(S.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.board,n=t.title,r=t.text,i=t.phone,l=t.city,c=t.id;return a.createElement("li",{className:"board-item"},a.createElement("div",{className:"board boar--left"},a.createElement("div",{className:"board__title"},n),r&&a.createElement("div",{className:"board__text"},r),a.createElement("div",{className:"board__photo"})),a.createElement("div",{className:"board board--right"},a.createElement("div",{className:"board board--vertical"},a.createElement("div",{className:"board__phone"},i),l&&a.createElement("div",{className:"board__city"},l)),a.createElement("div",{className:"board board--vertical"},a.createElement("button",{onClick:function(){return e.handleChange(c)},className:"button button--blue"},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),a.createElement("button",{onClick:function(){return e.handleDelete(c)},className:"button button--red"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))))}}]),t}(a.Component)),A=function(e){function t(){return Object(s.a)(this,t),Object(x.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return a.createElement("div",{className:"board-list"},a.createElement("h2",{className:"board-list__title"},"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435"),a.createElement("ul",null,this.props.boardList.sort(function(e,t){return t.id-e.id}).map(function(t){return a.createElement(V,{key:t.id,board:t,chooseItem:e.props.chooseItem,deleteItem:e.props.deleteItem})})))}}]),t}(a.Component),H=Object(c.b)(function(e){return{boardList:e.boardList}},function(e){return Object(o.b)({deleteItem:b,chooseItem:g},e)})(A),F=(n(39),function(e){function t(){return Object(s.a)(this,t),Object(x.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.createElement("div",{className:"app"},a.createElement("div",{className:"container"},a.createElement(B,null),a.createElement(H,null)))}}]),t}(a.Component));n(41);l.a.render(r.a.createElement(c.a,{store:C},r.a.createElement(F,null)),document.getElementById("root"))}},[[20,2,1]]]);
//# sourceMappingURL=main.c1198065.chunk.js.map