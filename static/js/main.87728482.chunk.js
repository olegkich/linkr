(this.webpackJsonplinkr=this.webpackJsonplinkr||[]).push([[0],{16:function(t,e,n){t.exports=n(37)},29:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),s=n(14),l=n.n(s),r=n(9),c=n(1),o=n(2),u=n(4),d=n(3),m=n(8),p=n.n(m),k=(n(29),n(6)),h=n.n(k),f=n(11),v=n.n(f),S=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).handleInput=function(t){a.setState({listInput:t.target.value})},a.handleSubmit=function(t){t.preventDefault(),a.setState({lists:[].concat(Object(r.a)(a.state.lists),[{name:a.state.listInput,id:p.a.generate()}]),listInput:""})},a.deleteList=function(t){a.setState({lists:a.state.lists.filter((function(e){return e.id!==t}))}),a.props.setList({name:"none",id:"home"})},a.setList=function(t){a.props.setList(t)},a.state={lists:[],listInput:""},null===a.state.lists&&localStorage.setItem("lists",JSON.stringify(a.state.lists)),a}return Object(o.a)(n,[{key:"componentDidUpdate",value:function(){localStorage.setItem("lists",JSON.stringify(this.state.lists))}},{key:"componentDidMount",value:function(){null!=localStorage.getItem("lists")&&this.setState({lists:JSON.parse(localStorage.getItem("lists"))})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"sidebar"},i.a.createElement("h1",null,"Linkr"),i.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-add-list"},i.a.createElement("input",{value:this.state.listInput,onChange:this.handleInput,className:"input-list",placeholder:"add link-list"}),i.a.createElement("span",{onClick:this.handleSubmit,type:"submit",className:"btn-add-list"},"+")),i.a.createElement("div",{className:"lists"},this.state.lists.map((function(e){return i.a.createElement("div",{className:"list-container"},i.a.createElement("p",{onClick:function(){return t.setList(e)},key:e.id},e.name),i.a.createElement("p",{className:"delete-list",onClick:function(){return t.deleteList(e.id)}},"x"))}))))}}]),n}(i.a.Component),b=(n(35),n(36),function(t){return i.a.createElement("div",{className:"link"},i.a.createElement("a",{href:t.link},t.link),i.a.createElement(h.a,{className:"btn-delete",size:"small",variant:"raised",color:"danger",onClick:t.onDelete},"Delete"))}),E=n(15),I=n.n(E),L=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).handleInput=function(t){t.preventDefault(),a.setState({linkInput:t.target.value})},a.handleSubmit=function(t){t.preventDefault(),a.props.addLink({link:a.state.linkInput,id:p.a.generate(),listId:a.props.listId}),a.setState({linkInput:""})},a.state={linkInput:""},a}return Object(o.a)(n,[{key:"render",value:function(){return"home"===this.props.listId?i.a.createElement("h2",null,"Welcome! add a list or choose an existing one to start using Linkr."):i.a.createElement("div",null,i.a.createElement(I.a,null,i.a.createElement("legend",null,i.a.createElement("h2",null,this.props.listName)),i.a.createElement(v.a,{placeholder:"enter your link",onChange:this.handleInput,value:this.state.linkInput}),i.a.createElement(h.a,{variant:"raised",color:"primary",onClick:this.handleSubmit},"Add Link")))}}]),n}(i.a.Component),g=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).addLink=function(t){a.props.addLink(t)},a.deleteLink=function(t){a.props.deleteLink(t)},a.state={links:a.props.links,currentList:a.props.list},a}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"container"},i.a.createElement(L,{listName:this.props.list.name,listId:this.props.list.id,addLink:this.addLink}),i.a.createElement("div",{className:"links"},this.props.links.map((function(e){return i.a.createElement(b,{link:e.link,key:e.id,listId:t.state.currentList.id,onDelete:function(){return t.deleteLink(e.id)}})})))))}}]),n}(i.a.Component),O=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).addLink=function(t){a.setState({links:[].concat(Object(r.a)(a.state.links),[t])})},a.deleteLink=function(t){a.setState({links:a.state.links.filter((function(e){return e.id!==t}))})},a.setList=function(t){a.setState({list:t})},a.state={list:{name:"none",id:"home"},links:[]},null===a.state.links&&localStorage.setItem("links",JSON.stringify(a.state.links)),a}return Object(o.a)(n,[{key:"componentDidUpdate",value:function(){localStorage.setItem("links",JSON.stringify(this.state.links))}},{key:"componentDidMount",value:function(){null!=localStorage.getItem("links")&&this.setState({links:JSON.parse(localStorage.getItem("links"))})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"App"},i.a.createElement(S,{setList:this.setList}),i.a.createElement(g,{deleteLink:this.deleteLink,addLink:this.addLink,links:this.state.links.filter((function(e){return e.listId===t.state.list.id})),list:this.state.list}))}}]),n}(i.a.Component);l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(O,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.87728482.chunk.js.map