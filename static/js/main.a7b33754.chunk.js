(this["webpackJsonpspotify-u"]=this["webpackJsonpspotify-u"]||[]).push([[0],{12:function(e,n,t){},16:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},20:function(e,n,t){e.exports=t(32)},25:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(14),c=t.n(r),s=(t(25),t(6)),i=t(15),l=t.n(i),u=t(19),f=new u.a,h=function(){p()},p=function(){var e=f.get("access_token");if(!m(e))return e;var n=function(){var e=l.a.parse(window.location.search);return{access_token:e.access_token,expires_in:e.expires_in,refresh_token:e.refresh_token}}();if(e=n.access_token,!m(e))return f.set("access_token",e,{path:"/",maxAge:n.expires_in}),f.set("refresh_token",n.refresh_token,{path:"/"}),e;window.location.replace("https://spotify-u-backend.herokuapp.com/login")};function m(e){return void 0===e||null===e||""===e}function k(e){var n=e.status,t=e.json();return Promise.all([n,t]).then((function(e){var n=Object(s.a)(e,2),t=n[0],o=n[1];return 401===t&&(f.remove("access_token"),h()),200===t?o:null})).catch((function(e){}))}var v=t(16),d=t.n(v);t(12);var g=function(){var e=Object(o.useState)(1),n=Object(s.a)(e,2),t=n[0],r=n[1],c=Object(o.useState)(null),i=Object(s.a)(c,2),l=i[0],u=i[1];return Object(o.useEffect)((function(){h()}),[]),a.a.createElement("div",{className:"App"},a.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),a.a.createElement("p",null),a.a.createElement("button",{onClick:function(){(function(){var e=p();return void 0===e?null:fetch("https://api.spotify.com/v1/me/player/currently-playing",{headers:{Authorization:"Bearer "+e}}).then(k).then((function(e){return e?e.item.name:null}))})().then((function(e){u(e)}))}},"Show Current Song"),a.a.createElement("h1",null,l||"-No song is currently playing-"),a.a.createElement("button",{onClick:function(){r(t+1),function(){console.log("refreshTokenToGetAccessToken...");var e=f.get("refresh_token");void 0===e||fetch("http://localhost:8888/refresh_token",{headers:{refresh_token:e}}).then((function(e){console.log("refresh_token response",e)}))}()}},"Increment"),a.a.createElement("h1",null,t))},_=t(18),E=t(1);var w=function(){return a.a.createElement(_.a,{basename:"/SpotifyU"},a.a.createElement("div",{className:"App"},a.a.createElement(E.c,null,a.a.createElement(E.a,{path:"/",exact:!0,component:g}),a.a.createElement(E.a,{path:"/auth",exact:!0,component:function(){return h(),null}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.a7b33754.chunk.js.map