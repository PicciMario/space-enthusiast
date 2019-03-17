(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(49)},30:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),l=n.n(c),i=n(3),o=n(4),u=n(7),s=n(6),m=n(8),d=n(51),h=(n(30),n(16)),f=n.n(h),g=n(22),p=new(function(){function e(){Object(i.a)(this,e)}return Object(o.a)(e,[{key:"retrieveUrl",value:function(){var e=Object(g.a)(f.a.mark(function e(t){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Retrieve url: "+t),e.next=3,fetch(t).then(function(e){return e.json()}).then(function(e){return console.log("Terminata fetch di "+t,e),e});case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),e}()),v=(n(33),"https://launchlibrary.net/1.4");function b(e){var t=e.launch;return t?r.a.createElement("div",{style:{padding:5,border:"1px solid black",borderRadius:5,marginBottom:2,cursor:"pointer"}},r.a.createElement("div",{style:{fontSize:"1em"}},t.name),r.a.createElement("div",{style:{fontSize:"0.8em"}},t.net)):null}var E=n(23),y=n.n(E)()({basename:"/space-enthusiast"}),j=n(10);function O(e){return r.a.createElement("div",{className:"header-bar"},r.a.createElement("div",{className:"header-bar-left",onClick:function(){return y.goBack()}},r.a.createElement(j.a,{icon:"chevron-left"})),r.a.createElement("div",{className:"header-bar-content"},e.title),r.a.createElement("div",{className:"header-bar-right",onClick:function(){return y.push("/about")}},r.a.createElement(j.a,{icon:"info"})))}var k=n(50);function x(e){return r.a.createElement(k.a,{to:e.to,className:"tab-bar-button"},r.a.createElement("div",null,r.a.createElement("span",{className:"tab-bar-button-icon"},r.a.createElement(j.a,{icon:e.icon})),r.a.createElement("span",{className:"tab-bar-button-title"},e.title)))}function R(e){return r.a.createElement("div",{className:"tab-bar"},r.a.createElement(x,{to:"/",title:"Home",icon:"rocket"}),r.a.createElement(x,{to:"/agencies",title:"Agencies",icon:"building"}),r.a.createElement(x,{to:"/about",title:"About",icon:"info"}))}function S(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{title:e.title}),e.fixedHeader&&r.a.createElement("div",{style:{marginLeft:5,marginRight:5,marginBottom:5}},e.fixedHeader),r.a.createElement("div",{className:"page-container"},e.children),e.fixedFooter&&r.a.createElement("div",{style:{marginLeft:5,marginRight:5,marginTop:5}},e.fixedFooter),r.a.createElement(R,null))}var w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={launches:[]},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;(e=10,p.retrieveUrl(v+"/launch?next="+e)).then(function(e){t.setState({launches:e.launches})})}},{key:"render",value:function(){var e=this;return r.a.createElement(S,{title:"Space Enthusiast"},r.a.createElement("h1",null,"Space Enthusiast"),r.a.createElement("h3",null,"Upcoming launches:"),this.state.launches.map(function(t){return r.a.createElement("div",{onClick:function(){return e.props.history.push("/launch/"+t.id)},key:t.id},r.a.createElement(b,{launch:t}))}))}}]),t}(a.Component),C=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={launches:[]},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(S,{title:"About"},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"Space Enthusiast"),r.a.createElement("h2",null,"A minimalist interface to the Launch Library"),r.a.createElement("h3",null,"Proudly built by me")))}}]),t}(a.Component),D=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={launchData:null,error:!1,loading:!0},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;(e=this.props.match.params.launchID,p.retrieveUrl(v+"/launch/"+e)).then(function(e){e&&e.launches&&e.launches.length>0?t.setState({launchData:e.launches[0],error:!1,loading:!1}):t.setState({launchData:null,error:!0,loading:!1})}).catch(function(e){console.error(e),t.setState({launchData:null,error:!0,loading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.launchData,n=e.loading,a=e.error,c=null;return c=n||!t?r.a.createElement("div",null,"Loading..."):a?r.a.createElement("div",null,"Loading error."):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"LaunchComponent ",t.launchID),r.a.createElement("h2",null,t.name),r.a.createElement("div",null,"Provider: ",t.lsp.name),r.a.createElement("div",null,"NET: ",t.net),r.a.createElement("img",{src:t.rocket.imageURL,style:{width:"100%"}})),r.a.createElement(S,{title:"Launch"},c)}}]),t}(r.a.Component),N=n(17);function L(e){var t=e.agency;return t?r.a.createElement("div",{style:{padding:5,border:"1px solid black",borderRadius:5,marginBottom:2,cursor:"pointer"}},r.a.createElement("div",{style:{fontSize:"1em"}},t.name),r.a.createElement("div",{style:{fontSize:"0.8em"}},t.net)):null}function F(e){return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%"}},r.a.createElement("span",{style:{fontSize:"2em",marginBottom:20}},"Loading..."),r.a.createElement(j.a,{icon:"rocket",size:"4x",spin:!0}))}var A=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).loadAgencies=function(e){(function(e){var t=new URL(v+"/agency");return t.searchParams.append("mode","list"),null!=e&&t.searchParams.append("offset",e),p.retrieveUrl(t)})(e).then(function(e){if(e&&e.agencies){var t={agencies:[].concat(Object(N.a)(e.agencies),Object(N.a)(n.state.agencies)),error:!1,loading:!1,lastRecordReceived:Number(e.offset)+Number(e.count),totalRecords:Number(e.total)};console.log(t),n.setState(t,function(){n.state.lastRecordReceived<n.state.totalRecords&&(console.log("last record: "+n.state.lastRecordReceived+", totalRecords: "+n.state.totalRecords),n.loadAgencies(n.state.lastRecordReceived))})}else n.setState({agencies:null,error:!0,loading:!1})}).catch(function(e){console.error(e),n.setState({agencies:null,error:!0,loading:!1})})},n.manageFilterChange=function(e){n.setState({filterString:e.target.value})},n.filterHeader=function(){return r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},"Filter:",r.a.createElement("input",{type:"text",value:n.state.filterString,onChange:n.manageFilterChange,style:{flexGrow:1,marginLeft:5}}),r.a.createElement("button",{onClick:function(){return n.setState({filterString:""})}},"\xd7"))},n.fixedFooter=function(){return r.a.createElement("div",{style:{display:"flex",flexDirection:"row",fontSize:"0.7em",color:"gray"}},"Total count: ",n.state.totalRecords," (loaded: ",n.state.lastRecordReceived,")")},n.state={agencies:[],lastRecordReceived:0,totalRecords:0,error:!1,loading:!0,filterString:""},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.loadAgencies()}},{key:"render",value:function(){var e=this,t=this.state,n=t.agencies,a=t.loading,c=t.error,l=t.filterString,i=null;return i=a||!n?r.a.createElement(F,null):c?r.a.createElement("div",null,"Loading error."):n.filter(function(e){return 0===l.length||e.name.toUpperCase().startsWith(l.toUpperCase())}).sort(function(e,t){return e.name.localeCompare(t.name)}).map(function(t){return r.a.createElement("div",{onClick:function(){return e.props.history.push("/launch/"+t.id)},key:t.id},r.a.createElement(L,{agency:t}))}),r.a.createElement(S,{title:"Agencies",fixedHeader:this.filterHeader(),fixedFooter:this.fixedFooter()},i)}}]),t}(a.Component),U=n(13),z=n(12);U.b.add(z.c,z.e,z.b,z.d,z.a);var B=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(d.a,{exact:!0,path:"/",component:w}),r.a.createElement(d.a,{exact:!0,path:"/about",component:C}),r.a.createElement(d.a,{exact:!0,path:"/agencies",component:A}),r.a.createElement(d.a,{path:"/launch/:launchID",component:D}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=n(52);l.a.render(r.a.createElement(H.a,{history:y},r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.fd850edb.chunk.js.map