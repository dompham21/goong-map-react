(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{PHfw:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u})),n.d(t,"renderToDom",(function(){return s}));var a=n("q1tI"),r=n("i8i4"),o=n("oXiK");function c(){return a.createElement("div",{className:"control-panel"},a.createElement("h3",null,"Animated GeoJSON"),a.createElement("p",null,"Render animation by updating GeoJSON data source."),a.createElement("div",{className:"source-link"},a.createElement("a",{href:"https://github.com/goong-io/goong-map-react/tree/master/examples/geojson-animation",target:"_new"},"View Code ↗")))}var i=a.memo(c),l={type:"circle",paint:{"circle-radius":10,"circle-color":"#007cbf"}};function u(){var e=Object(a.useState)({latitude:0,longitude:-100,zoom:3,bearing:0,pitch:0}),t=e[0],n=e[1],r=Object(a.useState)(null),c=r[0],u=r[1];return Object(a.useEffect)((function(){var e=window.requestAnimationFrame((function(){return u((e={center:[-100,0],angle:Date.now()/1e3,radius:20},t=e.center,n=e.angle,a=e.radius,{type:"Point",coordinates:[t[0]+Math.cos(n)*a,t[1]+Math.sin(n)*a]}));var e,t,n,a}));return function(){return window.cancelAnimationFrame(e)}})),a.createElement(a.Fragment,null,a.createElement(o.default,Object.assign({},t,{width:"100%",height:"100%",mapStyle:"https://tiles.goong.io/assets/goong_map_web.json",onViewportChange:n,goongApiAccessToken:""}),c&&a.createElement(o.Source,{type:"geojson",data:c},a.createElement(o.Layer,l))),a.createElement(i,null))}function s(e){Object(r.render)(a.createElement(u,null),e)}}}]);