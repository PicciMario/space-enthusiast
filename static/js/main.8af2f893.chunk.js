(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,n){e.exports=n(55)},41:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(30),c=n.n(i),o=n(4),l=n(5),s=n(8),u=n(7),m=n(9),d=n(57);n(41);function f(e){var t=e.launch;return t?r.a.createElement("div",{style:{padding:5,border:"1px solid black",borderRadius:5,marginBottom:2,cursor:"pointer"}},r.a.createElement("div",{style:{fontSize:"1em"}},t.name),r.a.createElement("div",{style:{fontSize:"0.8em"}},t.net)):null}var p=n(31),h=n.n(p)()({basename:"/space-enthusiast"}),v=n(6);function g(e){return r.a.createElement("div",{className:"header-bar"},r.a.createElement("div",{className:"header-bar-left",onClick:function(){return h.goBack()}},r.a.createElement(v.a,{icon:"chevron-left"})),r.a.createElement("div",{className:"header-bar-content"},e.title),r.a.createElement("div",{className:"header-bar-right",onClick:function(){return h.push("/about")}},r.a.createElement(v.a,{icon:"info"})))}var y=n(56);function E(e){return r.a.createElement(y.a,{to:e.to,className:"tab-bar-button"},r.a.createElement("div",null,r.a.createElement("span",{className:"tab-bar-button-icon"},r.a.createElement(v.a,{icon:e.icon})),r.a.createElement("span",{className:"tab-bar-button-title"},e.title)))}function b(e){return r.a.createElement("div",{className:"tab-bar"},r.a.createElement(E,{to:"/",title:"Home",icon:"rocket"}),r.a.createElement(E,{to:"/agencies",title:"Agencies",icon:"building"}),r.a.createElement(E,{to:"/rocketfamilies",title:"Rocket families",icon:"space-shuttle"}),r.a.createElement(E,{to:"/about",title:"About",icon:"info"}))}function k(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{title:e.title}),e.fixedHeader&&r.a.createElement("div",{style:{marginLeft:5,marginRight:5,marginBottom:5}},e.fixedHeader),r.a.createElement("div",{className:"page-container"},e.children),e.fixedFooter&&r.a.createElement("div",{style:{marginLeft:5,marginRight:5,marginTop:5}},e.fixedFooter),r.a.createElement(b,null))}var O=n(10),j=n(26),R=n.n(j),w=n(33),C=new(function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"retrieveUrl",value:function(){var e=Object(w.a)(R.a.mark(function e(t){var n;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Retrieve url: "+t),e.next=3,fetch(t).then(function(e){return e.json()}).then(function(e){return console.log("Terminata fetch di "+t,e),e});case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),e}()),A="https://launchlibrary.net/1.4";var S=function(e,t,n){return{type:"ADD_AGENCIES",payload:{agencies:e,lastRecordReceived:t,totalRecords:n}}},D=function(e){return{type:"ADD_AGENCY",payload:{agency:e}}},x=function(e){return{type:"ADD_AGENCY_TYPES",payload:{types:e}}};function N(e){return function(t,n){null==e&&0!==n().agencies.list.length||function(e){var t=new URL(A+"/agency");return t.searchParams.append("mode","list"),null!=e&&t.searchParams.append("offset",e),C.retrieveUrl(t)}(e).then(function(e){if(e&&e.agencies){var n=Number(e.offset)+Number(e.count),a=Number(e.total);t(S(e.agencies,n,a)),n<a&&t(N(n))}else console.error("No data.agencies in received payload",e)}).catch(function(e){console.error("Error while retrieving agencies",e)})}}var L=function(e){return{type:"ADD_UPCOMING_LAUNCHES",payload:{launches:e}}},U=function(e){return{type:"ADD_LAUNCH",payload:{launch:e}}},F=function(e){return{type:"ADD_LAUNCH_STATUSES",payload:{statuses:e}}};function _(e){return function(t,n){null==n().launches.details[e]&&function(e){var t=new URL(A+"/launch/"+e);return t.searchParams.append("mode","verbose"),C.retrieveUrl(t)}(e).then(function(e){e&&e.launches&&e.launches.length>0?t(U(e.launches[0])):console.error("No data.launches in received payload",e)}).catch(function(e){console.error("Error while retrieving launch",e)})}}var I=function(e,t,n){return{type:"ADD_ROCKET_FAMILIES",payload:{families:e,lastRecordReceived:t,totalRecords:n}}};function T(e){return function(t,n){0!==n().rockets.families.length&&null==e||function(e){var t=new URL(A+"/rocketfamily");return t.searchParams.append("mode","verbose"),null!=e&&t.searchParams.append("offset",e),C.retrieveUrl(t)}(e).then(function(e){if(e&&e.RocketFamilies){var n=Number(e.offset)+Number(e.count),a=Number(e.total);t(I(e.RocketFamilies,n,a)),n<a&&t(T(n))}else console.error("No data.RocketFamilies in received payload",e)}).catch(function(e){console.error("Error while retrieving upcoming launches",e)})}}var H=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.retrieveUpcomingLaunches()}},{key:"render",value:function(){var e=this,t=this.props.launches.upcoming;return r.a.createElement(k,{title:"Space Enthusiast"},r.a.createElement("h1",null,"Space Enthusiast"),r.a.createElement("h3",null,"Upcoming launches:"),t.map(function(t){return r.a.createElement("div",{onClick:function(){return e.props.history.push("/launch/"+t.id)},key:t.id},r.a.createElement(f,{launch:t}))}))}}]),t}(a.Component),P=Object(O.b)(function(e){return{launches:e.launches}},{retrieveUpcomingLaunches:function(){return function(e,t){0===t().launches.upcoming.length&&function(e){var t=new URL(A+"/launch");return t.searchParams.append("next",e),t.searchParams.append("mode","list"),C.retrieveUrl(t)}(10).then(function(t){t&&t.launches?e(L(t.launches)):console.error("No data.launches in received payload",t)}).catch(function(e){console.error("Error while retrieving upcoming launches",e)})}},retrieveLaunch:_})(H),z=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={launches:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(k,{title:"About"},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"Space Enthusiast"),r.a.createElement("h2",null,"A minimalist interface to the Launch Library"),r.a.createElement("h3",null,"Proudly built by me")))}}]),t}(a.Component),G=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.launchID;this.props.retrieveLaunch(e),this.props.retrieveLaunchStatuses()}},{key:"render",value:function(){var e=this.props.match.params.launchID,t=this.props.launches.details[e],n=null;if(t){var a=this.props.launches.statuses,i=t.name,c=t.lsp,o=t.net,l=t.status,s=t.rocket,u=t.location,m=t.missions;n=r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,i),r.a.createElement("div",null,"Provider: ",c.name),r.a.createElement("div",null,"NET: ",o),r.a.createElement("div",null,"Status: ",a[l]),r.a.createElement("div",null,"Rocket: ",s.name),r.a.createElement("div",null,"Location: ",u.name),r.a.createElement("div",null,"Pad: ",u.pads.map(function(e){return e.name})),m&&m.map(function(e,t){return r.a.createElement("div",{key:"mission"+t},r.a.createElement("span",{style:{fontWeight:"bold"}},e.name)," ",e.description)}),r.a.createElement("img",{src:s.imageURL,style:{width:"100%"},alt:i}))}else n=r.a.createElement("div",null,"Loading...");return r.a.createElement(k,{title:"Launch"},n)}}]),t}(r.a.Component),M=Object(O.b)(function(e){return{launches:e.launches}},{retrieveLaunch:_,retrieveLaunchStatuses:function(){return function(e,t){Object.keys(t().launches.statuses).length>0||function(){var e=new URL(A+"/launchstatus");return C.retrieveUrl(e)}().then(function(t){if(t&&t.types){var n={};t.types.forEach(function(e){return n[e.id]=e.name}),e(F(n))}else console.error("No data.types in received payload",t)}).catch(function(e){console.error("Error while retrieving agency types",e)})}}})(G);function B(e){var t=e.agency;return t?r.a.createElement("div",{style:{padding:5,border:"1px solid black",borderRadius:5,marginBottom:2,cursor:"pointer"},onClick:function(){return h.push("/agency/"+t.id)}},r.a.createElement("div",{style:{fontSize:"1em"}},t.name,1===t.islsp&&r.a.createElement(v.a,{icon:"rocket",style:{fontSize:"0.7em",marginLeft:5}})),r.a.createElement("div",{style:{fontSize:"0.7em",wordBreak:"break-word"}},t.countryCode)):null}function Y(e){return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%"}},r.a.createElement("span",{style:{fontSize:"2em",marginBottom:20}},"Loading..."),r.a.createElement(v.a,{icon:"rocket",size:"4x",spin:!0}))}var W=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).manageFilterChange=function(e){n.setState({filterString:e.target.value})},n.filterHeader=function(){return r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},"Filter:",r.a.createElement("input",{type:"text",value:n.state.filterString,onChange:n.manageFilterChange,style:{flexGrow:1,marginLeft:5}}),r.a.createElement("button",{onClick:function(){return n.setState({filterString:""})}},"\xd7"))},n.fixedFooter=function(){var e=n.props.agencies,t=e.totalRecords,a=e.lastRecordReceived;return r.a.createElement("div",{style:{display:"flex",flexDirection:"row",fontSize:"0.7em",color:"gray"}},"Total count: ",t," (loaded: ",a,")")},n.state={filterString:""},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.retrieveAgencies(),this.props.retrieveRocketFamilies()}},{key:"render",value:function(){var e=this.props.agencies.list,t=this.state.filterString,n=null;return n=0===e.length?r.a.createElement(Y,null):e.filter(function(e){return 0===t.length||e.name.toUpperCase().includes(t.toUpperCase())||e.countryCode.toUpperCase().includes(t.toUpperCase())}).sort(function(e,t){return e.name.localeCompare(t.name)}).map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(B,{agency:e}))}),r.a.createElement(k,{title:"Agencies",fixedHeader:this.filterHeader(),fixedFooter:this.fixedFooter()},n)}}]),t}(a.Component),J=Object(O.b)(function(e){return{agencies:e.agencies}},{addAgencies:S,retrieveAgencies:N,retrieveRocketFamilies:T})(W),K=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.agencyID;this.props.retrieveAgency(e),this.props.retrieveAgencyTypes(),this.props.retrieveRocketFamilies()}},{key:"urlComponent",value:function(e){if(null==e||""===e)return null;var t=e,n=r.a.createElement(v.a,{icon:"link"});try{var a=new URL(e);/\.youtube\./.test(a.hostname)&&(n=r.a.createElement(v.a,{icon:["fab","youtube"]})),/\.wikipedia\./.test(a.hostname)&&(n=r.a.createElement(v.a,{icon:["fab","wikipedia-w"]})),/twitter\./.test(a.hostname)&&(n=r.a.createElement(v.a,{icon:["fab","twitter"]})),/\.facebook\./.test(a.hostname)&&(n=r.a.createElement(v.a,{icon:["fab","facebook"]})),/\.linkedin\./.test(a.hostname)&&(n=r.a.createElement(v.a,{icon:["fab","linkedin"]})),t=a.href}catch(i){console.warn("Invalid url: "+e)}return r.a.createElement("div",{key:e},r.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{style:{whiteSpace:"nowrap",display:"block",textOverflow:"ellipsis",overflow:"hidden",verticalAlign:"middle",lineHeight:"1.5em"}},r.a.createElement("span",{style:{float:"left",minWidth:25}},n),t)))}},{key:"render",value:function(){var e=this,t=this.props.match.params.agencyID,n=this.props.agencies.details[t],a=null,i=null;if(n){var c=n.name,o=n.abbrev,l=n.countryCode,s=n.islsp,u=n.type,m=n.wikiURL,d=n.changed,f=n.infoURLs,p=this.props.rockets.families.filter(function(e){return e.agencies&&e.agencies.find(function(e){return e.id===Number(t)})});a=r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,c),r.a.createElement("div",null,"Abbreviation: ",o),r.a.createElement("div",null,"Country: ",l),r.a.createElement("div",null,"Is launch provider: ",s),r.a.createElement("div",null,"Type: ",this.props.agencies.types[u]),this.urlComponent(m),f.map(function(t){return e.urlComponent(t)}),p.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Rockets:"),r.a.createElement("ul",null,p.map(function(e){return r.a.createElement("li",{key:e.id},e.name)})))),i=r.a.createElement("div",null,"Last updated: ",d)}else a=r.a.createElement("div",null,"Loading...");return r.a.createElement(k,{title:"Agency",fixedFooter:i},a)}}]),t}(r.a.Component),X=Object(O.b)(function(e){return{agencies:e.agencies,rockets:e.rockets}},{retrieveAgency:function(e){return function(t,n){null==n().agencies.details[e]&&function(e){var t=new URL(A+"/agency/"+e);return t.searchParams.append("mode","verbose"),C.retrieveUrl(t)}(e).then(function(e){e&&e.agencies&&e.agencies.length>0?t(D(e.agencies[0])):console.error("No data.agencies in received payload",e)}).catch(function(e){console.error("Error while retrieving agencies",e)})}},retrieveAgencyTypes:function(){return function(e,t){Object.keys(t().agencies.types).length>0||function(){var e=new URL(A+"/agencytype");return C.retrieveUrl(e)}().then(function(t){if(t&&t.types){var n={};t.types.forEach(function(e){return n[e.id]=e.name}),e(x(n))}else console.error("No data.types in received payload",t)}).catch(function(e){console.error("Error while retrieving agency types",e)})}},retrieveRocketFamilies:T})(K);function V(e){var t=e.family;return t?r.a.createElement("div",{style:{padding:5,border:"1px solid black",borderRadius:5,marginBottom:2,cursor:"pointer"},onClick:function(){return h.push("/rocketfamily/"+t.id)}},r.a.createElement("div",{style:{fontSize:"1em"}},t.name),r.a.createElement("div",{style:{fontSize:"0.8em"}},t.agencies&&t.agencies.map(function(e){return e.name}).join(", "))):null}var $=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).manageFilterChange=function(e){n.setState({filterString:e.target.value})},n.filterHeader=function(){return r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},"Filter:",r.a.createElement("input",{type:"text",value:n.state.filterString,onChange:n.manageFilterChange,style:{flexGrow:1,marginLeft:5}}),r.a.createElement("button",{onClick:function(){return n.setState({filterString:""})}},"\xd7"))},n.fixedFooter=function(){var e=n.props.rockets,t=e.totalRecords,a=e.lastRecordReceived;return r.a.createElement("div",{style:{display:"flex",flexDirection:"row",fontSize:"0.7em",color:"gray"}},"Total count: ",t," (loaded: ",a,")")},n.state={filterString:""},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.retrieveRocketFamilies()}},{key:"render",value:function(){var e=this.props.rockets.families,t=this.state.filterString,n=null;return n=0===e.length?r.a.createElement(Y,null):e.filter(function(e){return 0===t.length||e.name.toUpperCase().includes(t.toUpperCase())}).sort(function(e,t){return e.name.localeCompare(t.name)}).map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(V,{family:e}))}),r.a.createElement(k,{title:"Rocket families",fixedHeader:this.filterHeader(),fixedFooter:this.fixedFooter()},n)}}]),t}(a.Component),q=Object(O.b)(function(e){return{rockets:e.rockets}},{addAgencies:S,retrieveAgencies:N,retrieveRocketFamilies:T})($),Q=n(17),Z=n(14),ee=n(19);Q.b.add(Z.c,Z.f,Z.b,Z.d,Z.a,Z.e,Z.g,ee.e,ee.d,ee.c,ee.a,ee.b),console.log(Q.b);var te=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(d.a,{exact:!0,path:"/",component:P}),r.a.createElement(d.a,{exact:!0,path:"/about",component:z}),r.a.createElement(d.a,{exact:!0,path:"/agencies",component:J}),r.a.createElement(d.a,{exact:!0,path:"/rocketfamilies",component:q}),r.a.createElement(d.a,{path:"/agency/:agencyID",component:X}),r.a.createElement(d.a,{path:"/launch/:launchID",component:M}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne=n(12),ae=n(16),re=n(18),ie=n(11),ce={list:[],details:{},types:{},totalRecords:0,lastRecordReceived:0},oe={upcoming:[],details:{},statuses:{}},le={families:[],totalRecords:0,lastRecordReceived:0},se=Object(ne.c)({agencies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_AGENCIES":var n=t.payload,a=n.agencies,r=n.lastRecordReceived,i=n.totalRecords;return Object(ie.a)({},e,{lastRecordReceived:r,totalRecords:i,list:[].concat(Object(re.a)(e.list),Object(re.a)(a))});case"ADD_AGENCY":var c=t.payload.agency;return Object(ie.a)({},e,{details:Object(ie.a)({},e.details,Object(ae.a)({},c.id,c))});case"ADD_AGENCY_TYPES":var o=t.payload.types;return Object(ie.a)({},e,{types:o});default:return e}},launches:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_UPCOMING_LAUNCHES":var n=t.payload.launches;return Object(ie.a)({},e,{upcoming:n});case"ADD_LAUNCH":var a=t.payload.launch;return Object(ie.a)({},e,{details:Object(ie.a)({},e.details,Object(ae.a)({},a.id,a))});case"ADD_LAUNCH_STATUSES":var r=t.payload.statuses;return Object(ie.a)({},e,{statuses:r});default:return e}},rockets:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ROCKET_FAMILIES":var n=t.payload,a=n.families,r=n.lastRecordReceived,i=n.totalRecords;return Object(ie.a)({},e,{families:[].concat(Object(re.a)(e.families),Object(re.a)(a)),totalRecords:i,lastRecordReceived:r});default:return e}}}),ue=n(35),me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ne.d,de=Object(ne.e)(se,me(Object(ne.a)(ue.a))),fe=n(58);c.a.render(r.a.createElement(O.a,{store:de},r.a.createElement(fe.a,{history:h},r.a.createElement(te,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.8af2f893.chunk.js.map