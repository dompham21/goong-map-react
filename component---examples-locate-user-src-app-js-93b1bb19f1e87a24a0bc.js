(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{NqXV:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s})),n.d(t,"renderToDom",(function(){return u}));var o=n("q1tI"),i=n("i8i4"),a=n("oXiK"),r={top:0,left:0,margin:10},c={enableHighAccuracy:!0};function s(){var e=Object(o.useState)({latitude:37.8,longitude:96,zoom:3,bearing:0,pitch:0}),t=e[0],n=e[1];return o.createElement(a.default,Object.assign({},t,{width:"100%",height:"100%",mapStyle:"https://tiles.goong.io/assets/goong_map_dark.json",onViewportChange:n,goongApiAccessToken:""}),o.createElement(a.GeolocateControl,{style:r,positionOptions:c,trackUserLocation:!0,auto:!0}))}function u(e){Object(i.render)(o.createElement(s,null),e)}}}]);