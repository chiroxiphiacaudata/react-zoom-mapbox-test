(this["webpackJsonpreact-zoom-mapbox-test"]=this["webpackJsonpreact-zoom-mapbox-test"]||[]).push([[0],{24:function(t,e,n){},42:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),o=n(17),r=n.n(o),s=(n(23),n(24),n(18)),j=n(5),d=n(4),a=n.n(d),u=(n(42),n(0));a.a.accessToken="pk.eyJ1IjoiY29tdW5pLWRhZG9zIiwiYSI6ImNqdWxlaHRqbjIycjE0M3BpamY3a3c4aWUifQ.HGizp_QckKQVjAZnnw8qAg";var b=function(){var t=Object(c.useRef)(null),e=Object(c.useState)(16.585021731986483),n=Object(j.a)(e,2),i=n[0],o=n[1],r=Object(c.useState)(40.66277652934977),s=Object(j.a)(r,2),d=s[0],b=s[1],l=Object(c.useState)(7),O=Object(j.a)(l,2),x=O[0],m=O[1];return Object(c.useEffect)((function(){var e=new a.a.Map({container:t.current,style:"mapbox://styles/comuni-dados/ck87kqz1v0hlt1iptdomrfl1y",center:[i,d],zoom:x});return e.addControl(new a.a.NavigationControl,"top-right"),e.on("move",(function(){o(e.getCenter().lng.toFixed(4)),b(e.getCenter().lat.toFixed(4)),m(e.getZoom().toFixed(2))})),function(){return e.remove()}}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"sidebarStyle",children:Object(u.jsxs)("div",{children:["Longitude: ",i," | Latitude: ",d," | Zoom: ",x]})}),Object(u.jsx)("div",{className:"map-container",ref:t})]})},l=(n(44),n(8)),O=["zoomIn","zoomOut","resetTransform","zoomToElement"];var x=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(l.b,{initialScale:1,initialPositionX:200,initialPositionY:100,children:function(t){var e=t.zoomIn,n=t.zoomOut,c=t.resetTransform,o=t.zoomToElement;Object(s.a)(t,O);return Object(u.jsxs)(i.a.Fragment,{children:[Object(u.jsxs)("div",{className:"tools",children:[Object(u.jsx)("button",{onClick:function(){return e()},children:"+"}),Object(u.jsx)("button",{onClick:function(){return n()},children:"-"}),Object(u.jsx)("button",{onClick:function(){return c()},children:"x"})]}),Object(u.jsxs)(l.a,{children:[Object(u.jsx)("div",{id:"img"}),Object(u.jsxs)("div",{id:"first",children:[Object(u.jsx)("div",{children:"section 1"}),Object(u.jsx)("button",{onClick:function(){return o("second")},children:"FLY to SECTION 2 button"})]}),Object(u.jsxs)("div",{id:"second",children:[Object(u.jsx)("div",{children:"section 2"}),Object(u.jsx)("button",{onClick:function(){return o("third")},children:"FLY to SECTION 3 button"}),Object(u.jsx)(b,{})]}),Object(u.jsxs)("div",{id:"third",children:[Object(u.jsx)("div",{children:"section 3"}),Object(u.jsx)("button",{onClick:function(){return o("first")},children:"FLY to SECTION 1 button"})]})]})]})}})})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),o(t),r(t)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),m()}},[[45,1,2]]]);
//# sourceMappingURL=main.08e90956.chunk.js.map