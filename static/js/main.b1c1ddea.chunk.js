(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,n){e.exports=n(55)},41:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(30),i=n.n(c),o=n(5),l=n(6),s=n(8),u=n(7),d=n(9),m=n(57);n(41);function p(e){var t=e.launch;return t?r.a.createElement("div",{style:{padding:5,border:"1px solid black",borderRadius:5,marginBottom:2,cursor:"pointer"}},r.a.createElement("div",{style:{fontSize:"1em"}},t.name),r.a.createElement("div",{style:{fontSize:"0.8em"}},t.net)):null}var h=n(31),f=n.n(h)()({basename:"/space-enthusiast"}),v=n(4);function g(e){return r.a.createElement("div",{className:"header-bar"},r.a.createElement("div",{className:"header-bar-left",onClick:function(){return f.goBack()}},r.a.createElement(v.a,{icon:"chevron-left"})),r.a.createElement("div",{className:"header-bar-content"},e.title),r.a.createElement("div",{className:"header-bar-right",onClick:function(){return f.push("/about")}},r.a.createElement(v.a,{icon:"info"})))}var y=n(56);function E(e){return r.a.createElement(y.a,{to:e.to,className:"tab-bar-button"},r.a.createElement("div",null,r.a.createElement("span",{className:"tab-bar-button-icon"},r.a.createElement(v.a,{icon:e.icon})),r.a.createElement("span",{className:"tab-bar-button-title"},e.title)))}function b(e){return r.a.createElement("div",{className:"tab-bar"},r.a.createElement(E,{to:"/",title:"Home",icon:"rocket"}),r.a.createElement(E,{to:"/agencies",title:"Agencies",icon:"building"}),r.a.createElement(E,{to:"/about",title:"About",icon:"info"}))}function O(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{title:e.title}),e.fixedHeader&&r.a.createElement("div",{style:{marginLeft:5,marginRight:5,marginBottom:5}},e.fixedHeader),r.a.createElement("div",{className:"page-container"},e.children),e.fixedFooter&&r.a.createElement("div",{style:{marginLeft:5,marginRight:5,marginTop:5}},e.fixedFooter),r.a.createElement(b,null))}var j=n(11),w=n(25),k=n.n(w),A=n(33),C=new(function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"retrieveUrl",value:function(){var e=Object(A.a)(k.a.mark(function e(t){var n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Retrieve url: "+t),e.next=3,fetch(t).then(function(e){return e.json()}).then(function(e){return console.log("Terminata fetch di "+t,e),e});case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),e}()),D="https://launchlibrary.net/1.4";var L=function(e,t,n){return{type:"ADD_AGENCIES",payload:{agencies:e,lastRecordReceived:t,totalRecords:n}}},N=function(e){return{type:"ADD_AGENCY",payload:{agency:e}}},U=function(e){return{type:"ADD_AGENCY_TYPES",payload:{types:e}}};var S=function(e){return{type:"ADD_UPCOMING_LAUNCHES",payload:{launches:e}}},R=function(e){return{type:"ADD_LAUNCH",payload:{launch:e}}},_=function(e,t){return{type:"ADD_LAUNCH_EVENTS",payload:{id:e,events:t}}},x=function(e){return{type:"ADD_LAUNCH_STATUSES",payload:{statuses:e}}};function T(e){return function(t,n){null==n().launches.details[e]&&function(e){var t=new URL(D+"/launch/"+e);return t.searchParams.append("mode","verbose"),C.retrieveUrl(t)}(e).then(function(e){e&&e.launches&&e.launches.length>0?t(R(e.launches[0])):console.error("No data.launches in received payload",e)}).catch(function(e){console.error("Error while retrieving launch",e)})}}var P=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.retrieveUpcomingLaunches()}},{key:"render",value:function(){var e=this,t=this.props.launches.upcoming;return r.a.createElement(O,{title:"Space Enthusiast"},r.a.createElement("h1",null,"Space Enthusiast"),r.a.createElement("h3",null,"Upcoming launches:"),t.map(function(t){return r.a.createElement("div",{onClick:function(){return e.props.history.push("/launch/"+t.id)},key:t.id},r.a.createElement(p,{launch:t}))}))}}]),t}(a.Component),H=Object(j.b)(function(e){return{launches:e.launches}},{retrieveUpcomingLaunches:function(){return function(e,t){0===t().launches.upcoming.length&&function(e){var t=new URL(D+"/launch");return t.searchParams.append("next",e),t.searchParams.append("mode","list"),C.retrieveUrl(t)}(10).then(function(t){t&&t.launches?e(S(t.launches)):console.error("No data.launches in received payload",t)}).catch(function(e){console.error("Error while retrieving upcoming launches",e)})}},retrieveLaunch:T})(P),I=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={launches:[]},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(O,{title:"About"},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"Space Enthusiast"),r.a.createElement("h2",null,"A minimalist interface to the Launch Library"),r.a.createElement("h3",null,"Proudly built by me")))}}]),t}(a.Component),F=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.launchID;this.props.retrieveLaunch(e),this.props.retrieveLaunchStatuses(),this.props.retrieveLaunchEvents(e)}},{key:"render",value:function(){var e=this.props.match.params.launchID,t=this.props.launches.details[e],n=null;if(t){var a=this.props.launches.statuses,c=t.name,i=t.lsp,o=t.net,l=t.status,s=t.rocket,u=t.location,d=t.missions,m=this.props.launches.events[e];n=r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,c),r.a.createElement("div",null,"Provider: ",i.name),r.a.createElement("div",null,"NET: ",o),r.a.createElement("div",null,"Status: ",a[l]),r.a.createElement("div",null,"Rocket: ",s.name),r.a.createElement("div",null,"Location: ",u.name),r.a.createElement("div",null,"Pad: ",u.pads.map(function(e){return e.name})),d&&d.map(function(e,t){return r.a.createElement("div",{key:"mission"+t},r.a.createElement("span",{style:{fontWeight:"bold"}},e.name)," ",e.description)}),m&&m.map(function(e,t){return r.a.createElement("div",{key:"event"+t},r.a.createElement("span",{style:{fontWeight:"bold"}},e.relativeTime)," ",e.description)}),r.a.createElement("img",{src:s.imageURL,style:{width:"100%"},alt:c}))}else n=r.a.createElement("div",null,"Loading...");return r.a.createElement(O,{title:"Launch"},n)}}]),t}(r.a.Component),G=Object(j.b)(function(e){return{launches:e.launches}},{retrieveLaunch:T,retrieveLaunchStatuses:function(){return function(e,t){Object.keys(t().launches.statuses).length>0||function(){var e=new URL(D+"/launchstatus");return C.retrieveUrl(e)}().then(function(t){if(t&&t.types){var n={};t.types.forEach(function(e){return n[e.id]=e.name}),e(x(n))}else console.error("No data.types in received payload",t)}).catch(function(e){console.error("Error while retrieving agency types",e)})}},retrieveLaunchEvents:function(e){return function(t,n){null==n().launches.events[e]&&function(e){var t=new URL(D+"/launchevent");return t.searchParams.append("parentid",e),t.searchParams.append("mode","verbose"),C.retrieveUrl(t)}(e).then(function(n){n&&n.events?t(_(e,n.events)):console.error("No data.events in received payload",n)}).catch(function(e){console.error("Error while retrieving launch events",e)})}}})(F);function z(e){var t=e.agency;return t?r.a.createElement("div",{style:{padding:5,border:"1px solid black",borderRadius:5,marginBottom:2,cursor:"pointer"},onClick:function(){return f.push("/agency/"+t.id)}},r.a.createElement("div",{style:{fontSize:"1em"}},t.name,1===t.islsp&&r.a.createElement(v.a,{icon:"rocket",style:{fontSize:"0.7em",marginLeft:5}})),r.a.createElement("div",{style:{fontSize:"0.7em",wordBreak:"break-word"}},t.countryCode)):null}function B(e){return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%"}},r.a.createElement("span",{style:{fontSize:"2em",marginBottom:20}},"Loading..."),r.a.createElement(v.a,{icon:"rocket",size:"4x",spin:!0}))}var M=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).manageFilterChange=function(e){n.setState({filterString:e.target.value})},n.filterHeader=function(){return r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},"Filter:",r.a.createElement("input",{type:"text",value:n.state.filterString,onChange:n.manageFilterChange,style:{flexGrow:1,marginLeft:5}}),r.a.createElement("button",{onClick:function(){return n.setState({filterString:""})}},"\xd7"))},n.fixedFooter=function(){var e=n.props.agencies,t=e.totalRecords,a=e.lastRecordReceived;return r.a.createElement("div",{style:{display:"flex",flexDirection:"row",fontSize:"0.7em",color:"gray"}},"Total count: ",t," (loaded: ",a,")")},n.state={filterString:""},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.retrieveAgencies()}},{key:"render",value:function(){var e=this.props.agencies.list,t=this.state.filterString,n=null;return n=0===e.length?r.a.createElement(B,null):e.filter(function(e){return 0===t.length||e.name.toUpperCase().includes(t.toUpperCase())||e.countryCode.toUpperCase().includes(t.toUpperCase())}).sort(function(e,t){return e.name.localeCompare(t.name)}).map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(z,{agency:e}))}),r.a.createElement(O,{title:"Agencies",fixedHeader:this.filterHeader(),fixedFooter:this.fixedFooter()},n)}}]),t}(a.Component),Y=Object(j.b)(function(e){return{agencies:e.agencies}},{addAgencies:L,retrieveAgencies:function e(t){return function(n,a){null==t&&0!==a().agencies.list.length||function(e){var t=new URL(D+"/agency");return t.searchParams.append("mode","list"),null!=e&&t.searchParams.append("offset",e),C.retrieveUrl(t)}(t).then(function(t){if(t&&t.agencies){var a=Number(t.offset)+Number(t.count),r=Number(t.total);n(L(t.agencies,a,r)),a<r&&n(e(a))}else console.error("No data.agencies in received payload",t)}).catch(function(e){console.error("Error while retrieving agencies",e)})}}})(M),W=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.agencyID;this.props.retrieveAgency(e),this.props.retrieveAgencyTypes()}},{key:"urlComponent",value:function(e){if(null==e||""===e)return null;var t=e,n=r.a.createElement(v.a,{icon:"link"});try{var a=new URL(e);/\.youtube\./.test(a.hostname)&&(n=r.a.createElement(v.a,{icon:["fab","youtube"]})),/\.wikipedia\./.test(a.hostname)&&(n=r.a.createElement(v.a,{icon:["fab","wikipedia-w"]})),/twitter\./.test(a.hostname)&&(n=r.a.createElement(v.a,{icon:["fab","twitter"]})),/\.facebook\./.test(a.hostname)&&(n=r.a.createElement(v.a,{icon:["fab","facebook"]})),/\.linkedin\./.test(a.hostname)&&(n=r.a.createElement(v.a,{icon:["fab","linkedin"]})),t=a.href}catch(c){console.warn("Invalid url: "+e)}return r.a.createElement("div",{key:e},r.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{style:{whiteSpace:"nowrap",display:"block",textOverflow:"ellipsis",overflow:"hidden",verticalAlign:"middle",lineHeight:"1.5em"}},r.a.createElement("span",{style:{float:"left",minWidth:25}},n),t)))}},{key:"render",value:function(){var e=this,t=this.props.match.params.agencyID,n=this.props.agencies.details[t],a=null,c=null;if(n){var i=n.name,o=n.abbrev,l=n.countryCode,s=n.islsp,u=n.type,d=n.wikiURL,m=n.changed,p=n.infoURLs;a=r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,i),r.a.createElement("div",null,"Abbreviation: ",o),r.a.createElement("div",null,"Country: ",l),r.a.createElement("div",null,"Is launch provider: ",s),r.a.createElement("div",null,"Type: ",this.props.agencies.types[u]),this.urlComponent(d),p.map(function(t){return e.urlComponent(t)})),c=r.a.createElement("div",null,"Last updated: ",m)}else a=r.a.createElement("div",null,"Loading...");return r.a.createElement(O,{title:"Agency",fixedFooter:c},a)}}]),t}(r.a.Component),V=Object(j.b)(function(e){return{agencies:e.agencies}},{retrieveAgency:function(e){return function(t,n){null==n().agencies.details[e]&&function(e){var t=new URL(D+"/agency/"+e);return t.searchParams.append("mode","verbose"),C.retrieveUrl(t)}(e).then(function(e){e&&e.agencies&&e.agencies.length>0?t(N(e.agencies[0])):console.error("No data.agencies in received payload",e)}).catch(function(e){console.error("Error while retrieving agencies",e)})}},retrieveAgencyTypes:function(){return function(e,t){Object.keys(t().agencies.types).length>0||function(){var e=new URL(D+"/agencytype");return C.retrieveUrl(e)}().then(function(t){if(t&&t.types){var n={};t.types.forEach(function(e){return n[e.id]=e.name}),e(U(n))}else console.error("No data.types in received payload",t)}).catch(function(e){console.error("Error while retrieving agency types",e)})}}})(W),J=n(17),X=n(15),$=n(18);J.b.add(X.c,X.f,X.b,X.d,X.a,X.e,$.e,$.d,$.c,$.a,$.b),console.log(J.b);var q=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(m.a,{exact:!0,path:"/",component:H}),r.a.createElement(m.a,{exact:!0,path:"/about",component:I}),r.a.createElement(m.a,{exact:!0,path:"/agencies",component:Y}),r.a.createElement(m.a,{path:"/agency/:agencyID",component:V}),r.a.createElement(m.a,{path:"/launch/:launchID",component:G}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=n(12),Q=n(14),Z=n(26),ee=n(10),te={list:[],details:{},types:{},totalRecords:0,lastRecordReceived:0},ne={upcoming:[],details:{},statuses:{},events:{}},ae=Object(K.c)({agencies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_AGENCIES":var n=t.payload,a=n.agencies,r=n.lastRecordReceived,c=n.totalRecords;return Object(ee.a)({},e,{lastRecordReceived:r,totalRecords:c,list:[].concat(Object(Z.a)(e.list),Object(Z.a)(a))});case"ADD_AGENCY":var i=t.payload.agency;return Object(ee.a)({},e,{details:Object(ee.a)({},e.details,Object(Q.a)({},i.id,i))});case"ADD_AGENCY_TYPES":var o=t.payload.types;return Object(ee.a)({},e,{types:o});default:return e}},launches:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_UPCOMING_LAUNCHES":var n=t.payload.launches;return Object(ee.a)({},e,{upcoming:n});case"ADD_LAUNCH":var a=t.payload.launch;return Object(ee.a)({},e,{details:Object(ee.a)({},e.details,Object(Q.a)({},a.id,a))});case"ADD_LAUNCH_EVENTS":var r=t.payload,c=r.id,i=r.events;return Object(ee.a)({},e,{events:Object(ee.a)({},e.events,Object(Q.a)({},c,i))});case"ADD_LAUNCH_STATUSES":var o=t.payload.statuses;return Object(ee.a)({},e,{statuses:o});default:return e}}}),re=n(35),ce=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||K.d,ie=Object(K.e)(ae,ce(Object(K.a)(re.a))),oe=n(58);i.a.render(r.a.createElement(j.a,{store:ie},r.a.createElement(oe.a,{history:f},r.a.createElement(q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.b1c1ddea.chunk.js.map