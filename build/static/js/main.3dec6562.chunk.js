(this.webpackJsonpmchacks2=this.webpackJsonpmchacks2||[]).push([[0],{133:function(t,e){},136:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),o=a(11),l=a.n(o),s=(a(89),a(90),a(91),a(13)),r=a(15),c=a(18),d=a(19),u=a(8),h=a(12),p=a(20),b=a(185),m=a(179),g=a(33),f=a(47),k=a.n(f),v=a(183),j=(a(92),a(174)),O=a(175),y=a(176),C=a(177),x=a(178),E=a(171),w=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(c.a)(this,Object(d.a)(e).call(this,t))).state=Object(s.a)({},t,{index:0}),console.log(a.state),a.getTutorial=a.getTutorial.bind(Object(u.a)(a)),a.handleClickLeft=a.handleClickLeft.bind(Object(u.a)(a)),a.handleClickRight=a.handleClickRight.bind(Object(u.a)(a)),a}return Object(p.a)(e,t),Object(h.a)(e,[{key:"getTutorial",value:function(){return this.state.tutorial[this.state.index]}},{key:"handleClickLeft",value:function(){this.setState(Object(s.a)({},this.state,{index:this.state.index+1}))}},{key:"handleClickRight",value:function(){this.setState(Object(s.a)({},this.state,{index:this.state.index-1}))}},{key:"render",value:function(){return i.a.createElement(E.a,{style:{position:"absolute",top:"50%",transform:"translate(0, -50%)"}},i.a.createElement(j.a,null,i.a.createElement(O.a,{title:this.getTutorial().title}),i.a.createElement(y.a,{style:{minHeight:"300px"}},this.getTutorial().content),i.a.createElement(C.a,null,i.a.createElement(x.a,{size:"small",color:"primary",onClick:this.handleClickLeft},"Previous"),i.a.createElement(x.a,{size:"small",color:"primary",onClick:this.handleClickRight},"Next"))))}}]),e}(i.a.Component),T=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(c.a)(this,Object(d.a)(e).call(this,t))).commands={tutorial:a.tutorial,default:a.default},a.style=function(){return{"border-radius":"16px","background-color":a.probs.bot?"#eeeeee":"#005daa",color:a.probs.bot?"black":"white","max-width":"70%",margin:"10px",padding:"10px","padding-top":"6px","padding-bottom":"6px"}},a.probs=t,a.state=Object(s.a)({},t,{open:!1}),Object.keys(a.commands).forEach((function(t){a.commands[t]=a.commands[t].bind(Object(u.a)(a))})),a.renderText=a.renderText.bind(Object(u.a)(a)),a.handleClose=a.handleClose.bind(Object(u.a)(a)),a}return Object(p.a)(e,t),Object(h.a)(e,[{key:"tutorial",value:function(t){var e=this;return console.log(t),i.a.createElement(b.a,{style:this.style(),onClick:function(){return e.setState(Object(s.a)({},e.state,{open:!0,tutorial:JSON.parse(t)}))},label:i.a.createElement(g.a,null,"Here, I found a tutorial for you."),avatar:i.a.createElement(k.a,null)})}},{key:"default",value:function(t){return i.a.createElement(g.a,{style:this.style()},t)}}]),Object(h.a)(e,[{key:"renderText",value:function(t){if(t.startsWith("$")){var e=t.indexOf(" "),a=t.substring(1,e),n=t.substring(e+1);return this.commands[a](n)}return this.default(t)}},{key:"handleClose",value:function(){this.setState(Object(s.a)({},this.state,{open:!1}))}},{key:"render",value:function(){return console.log(this.state.text),i.a.createElement("div",null,i.a.createElement(m.a,{container:!0,direction:"column",alignItems:this.probs.bot?"flex-start":"flex-end"},this.renderText(this.probs.text),i.a.createElement(v.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:this.state.open,onClose:this.handleClose},i.a.createElement(w,{tutorial:this.state.tutorial}))))}}]),e}(i.a.Component),B=a(181),S=a(184),M=a(180),L=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(c.a)(this,Object(d.a)(e).call(this,t))).state=Object(s.a)({},t),a.handleClick=a.handleClick.bind(Object(u.a)(a)),a.handleClick2=a.handleClick2.bind(Object(u.a)(a)),a.handleEnter=a.handleEnter.bind(Object(u.a)(a)),a}return Object(p.a)(e,t),Object(h.a)(e,[{key:"handleClick",value:function(){""!==this.state.value&&(this.state.onClick(this.state.value),this.state.value="")}},{key:"handleClick2",value:function(t){this.setState(Object(s.a)({},this.state,{value:t.target.value}))}},{key:"handleEnter",value:function(t){13==t.keyCode&&this.handleClick()}},{key:"render",value:function(){var t={root:{padding:"2px 4px",display:"flex",alignItems:"center",width:400},input:{},iconButton:{padding:10},divider:{height:28,margin:4}};return i.a.createElement(M.a,{style:{top:"auto",bottom:0}},i.a.createElement(B.a,null,i.a.createElement(S.a,{className:t.input,placeholder:"Ask me anything",inputProps:{"aria-label":"search google maps"},style:{width:"100%",color:"white"},value:this.state.value,onChange:this.handleClick2,onKeyDown:this.handleEnter}),i.a.createElement(x.a,{label:"send",onClick:this.handleClick,style:{"background-color":"#ffd200"}},"Send")))}}]),e}(i.a.Component),D=a(182),R=a(75),J=a(74),N=(a(109),function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(c.a)(this,Object(d.a)(e).call(this,t))).state={messages:t.messages,waiting:!1,buttons:[]},a.handleClick=a.handleClick.bind(Object(u.a)(a)),a.componentDidUpdate=a.componentDidUpdate.bind(Object(u.a)(a)),a.handleButtonClick=a.handleButtonClick.bind(Object(u.a)(a)),a.addMsg=a.addMsg.bind(Object(u.a)(a)),a.xhr=new XMLHttpRequest,a.xhr.addEventListener("load",(function(){console.log(a.xhr.responseText),JSON.parse(a.xhr.responseText).forEach((function(t){var e=t.text;console.log(e),null!=e&&"utter_default"!=e||(e='$tutorial [{"title":"step one", "content":"hi there"}, {"title":"step two", "content":"hi there"}]'),a.addMsg({text:e,bot:!0}),null==t.buttons&&void 0==t.buttons||a.setState(Object(s.a)({},a.state,{buttons:t.buttons}))}))})),a.xhr.addEventListener("error",(function(){a.addMsg({text:'$tutorial [{"title":"step one", "content":"hi there"}, {"title":"step two", "content":"hi there"}]',bot:!0})})),a}return Object(p.a)(e,t),Object(h.a)(e,[{key:"addMsg",value:function(t){var e=this.state.messages.slice();e.push(t),this.setState(Object(s.a)({},this.state,{messages:e,waiting:!1}))}},{key:"handleClick",value:function(t,e){void 0===e&&(e=t),this.addMsg({text:e,bot:!1}),this.xhr.open("POST","http://35.245.31.192/api"),this.xhr.send(JSON.stringify({sender:"sup",message:t}))}},{key:"handleButtonClick",value:function(t,e){this.handleClick(t+e,t),this.setState({buttons:[]})}},{key:"scrollToBottom",value:function(){J.animateScroll.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var t=this;console.log(this.state.messages);var e=this.state.messages.slice();return i.a.createElement("div",{id:"jsjsjsjsj",style:{"margin-bottom":"75px"}},e.map((function(t,e){return console.log(t.text),i.a.createElement(T,Object.assign({key:e},t))})),this.state.buttons.map((function(e){return i.a.createElement(b.a,{style:{margin:"10px","margin-right":"0px","background-color":"#ffd200"},label:e.title,onClick:function(){return t.handleButtonClick(e.title,e.payload)}})})),i.a.createElement(L,{onClick:this.handleClick}))}}]),e}(i.a.Component)),I=Object(R.a)((function(t){return{icon:{marginRight:t.spacing(2)},heroContent:{backgroundColor:t.palette.background.paper,padding:t.spacing(8,0,6)},heroButtons:{marginTop:t.spacing(4)},cardGrid:{paddingTop:t.spacing(8),paddingBottom:t.spacing(8)},paper:{paddingBottom:50},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:t.palette.background.paper,padding:t.spacing(6)},appBarBot:{top:"auto",bottom:0}}}));var W=function(){return I(),i.a.createElement(i.a.Fragment,null,i.a.createElement(D.a,null),i.a.createElement(M.a,{position:"sticky"},i.a.createElement(B.a,null,i.a.createElement(g.a,{variant:"h6",color:"inherit",noWrap:!0},"Conobot"))),i.a.createElement(N,{messages:[]}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},84:function(t,e,a){t.exports=a(136)},89:function(t,e,a){},90:function(t,e,a){t.exports=a.p+"static/media/logo.5d5d9eef.svg"},91:function(t,e,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.3dec6562.chunk.js.map