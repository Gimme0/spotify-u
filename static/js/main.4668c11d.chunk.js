(this["webpackJsonpspotify-u"]=this["webpackJsonpspotify-u"]||[]).push([[0],{12:function(e,t,n){},16:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},20:function(e,t,n){e.exports=n(32)},25:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(14),r=n.n(c),i=(n(25),n(6)),l=n(15),u=n.n(l),s=n(19),m=new s.a,p=function(){f()},f=function(){var e=m.get("access_token");return h(e)?(e=u.a.parse(window.location.search).access_token,h(e)?void window.location.replace("https://spotify-u-backend.herokuapp.com/login"):(m.set("access_token",e,{path:"/"}),e)):e};function h(e){return void 0===e||null===e||""===e}function v(e){var t=e.status,n=e.json();return Promise.all([t,n]).then((function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];return 401===n&&(m.remove("access_token"),p()),200===n?a:null})).catch((function(e){}))}var d=n(16),g=n.n(d);n(12);var E=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),l=Object(i.a)(r,2),u=l[0],s=l[1];return Object(a.useEffect)((function(){p()}),[]),o.a.createElement("div",{className:"App"},o.a.createElement("img",{src:g.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null),o.a.createElement("button",{onClick:function(){(function(){var e=f();return void 0===e?null:fetch("https://api.spotify.com/v1/me/player/currently-playing",{headers:{Authorization:"Bearer "+e}}).then(v).then((function(e){return e?e.item.name:null}))})().then((function(e){s(e)}))}},"Show Current Song"),o.a.createElement("h1",null,u||"-No song is currently playing-"),o.a.createElement("button",{onClick:function(){c(n+1)}},"Increment"),o.a.createElement("h1",null,n))},w=n(18),b=n(1);var k=function(){return o.a.createElement(w.a,{basename:"/SpotifyU"},o.a.createElement("div",{className:"App"},o.a.createElement(b.c,null,o.a.createElement(b.a,{path:"/",exact:!0,component:E}),o.a.createElement(b.a,{path:"/auth",exact:!0,component:function(){return p(),null}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.4668c11d.chunk.js.map