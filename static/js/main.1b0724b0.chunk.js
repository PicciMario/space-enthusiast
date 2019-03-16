(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(41)},29:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),o=a(4),i=a(5),u=a(7),s=a(6),m=a(8),h=a(43),b=(a(29),a(16)),d=a.n(b),E=a(21),p=new(function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,[{key:"retrieveUrl",value:function(){var e=Object(E.a)(d.a.mark(function e(t){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Retrieve url: "+t),e.next=3,fetch(t).then(function(e){return e.json()}).then(function(e){return console.log("Terminata fetch di "+t,e),e});case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),e}()),v="https://launchlibrary.net/1.4";function f(e){var t=e.launch;return t?r.a.createElement("div",{style:{padding:5,border:"1px solid black",borderRadius:5,marginBottom:2,cursor:"pointer"}},r.a.createElement("div",{style:{fontSize:"1em"}},t.name),r.a.createElement("div",{style:{fontSize:"0.8em"}},t.net)):null}var g=a(22),j=a.n(g)()({basename:"/space-enthusiast"}),y=a(10);function O(e){return r.a.createElement("div",{className:"header-bar"},r.a.createElement("div",{className:"header-bar-left",onClick:function(){return j.goBack()}},r.a.createElement(y.a,{icon:"chevron-left"})),r.a.createElement("div",{className:"header-bar-content"},e.title),r.a.createElement("div",{className:"header-bar-right",onClick:function(){return j.push("/about")}},r.a.createElement(y.a,{icon:"info"})))}var k=a(42);function N(e){return r.a.createElement("div",{className:"tab-bar"},r.a.createElement(k.a,{to:"/",className:"tab-bar-button"},r.a.createElement("div",null,r.a.createElement("span",{className:"tab-bar-button-icon"},r.a.createElement(y.a,{icon:"rocket"})),r.a.createElement("span",{className:"tab-bar-button-title"},"Home"))),r.a.createElement(k.a,{to:"/about",className:"tab-bar-button"},r.a.createElement("div",null,r.a.createElement("span",{className:"tab-bar-button-icon"},r.a.createElement(y.a,{icon:"rocket"})),r.a.createElement("span",{className:"tab-bar-button-title"},"Home"))),r.a.createElement(k.a,{to:"/team",className:"tab-bar-button"},r.a.createElement("div",null,r.a.createElement("span",{className:"tab-bar-button-icon"},r.a.createElement(y.a,{icon:"rocket"})),r.a.createElement("span",{className:"tab-bar-button-title"},"Home"))))}function w(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{title:e.title}),r.a.createElement("div",{className:"page-container"},e.children),r.a.createElement(N,null))}var D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={launches:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;(e=10,p.retrieveUrl(v+"/launch?next="+e)).then(function(e){t.setState({launches:e.launches})})}},{key:"render",value:function(){var e=this;return r.a.createElement(w,{title:"Space Enthusiast"},r.a.createElement("h1",null,"Space Enthusiast"),r.a.createElement("h3",null,"Upcoming launches:"),this.state.launches.map(function(t){return r.a.createElement("div",{onClick:function(){return e.props.history.push("/launch/"+t.id)},key:t.id},r.a.createElement(f,{launch:t}))}))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={launches:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(w,{title:"About"},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"Space Enthusiast"),r.a.createElement("h2",null,"A minimalist interface to the Launch Library"),r.a.createElement("h3",null,"Proudly built by me")))}}]),t}(n.Component);var C=function(){return r.a.createElement("h1",null,"TeamComponent")},S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={launchData:null,error:!1,loading:!0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;(e=this.props.match.params.launchID,p.retrieveUrl(v+"/launch/"+e)).then(function(e){e&&e.launches&&e.launches.length>0?t.setState({launchData:e.launches[0],error:!1,loading:!1}):t.setState({launchData:null,error:!0,loading:!1})}).catch(function(e){console.error(e),t.setState({launchData:null,error:!0,loading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.launchData,a=e.loading,n=e.error,c=null;return c=a||!t?r.a.createElement("div",null,"Loading..."):n?r.a.createElement("div",null,"Loading error."):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"LaunchComponent ",t.launchID),r.a.createElement("h2",null,t.name),r.a.createElement("div",null,"Provider: ",t.lsp.name),r.a.createElement("div",null,"NET: ",t.net),r.a.createElement("img",{src:t.rocket.imageURL,style:{width:"100%"}})),r.a.createElement(w,{title:"Launch"},c)}}]),t}(r.a.Component),L=a(12),U=a(13);L.b.add(U.b,U.d,U.a,U.c);var B=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(h.a,{exact:!0,path:"/",component:D}),r.a.createElement(h.a,{exact:!0,path:"/about",component:x}),r.a.createElement(h.a,{exact:!0,path:"/team",component:C}),r.a.createElement(h.a,{path:"/launch/:launchID",component:S}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=a(44);l.a.render(r.a.createElement(I.a,{history:j},r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.1b0724b0.chunk.js.map