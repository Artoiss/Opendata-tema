(this.webpackJsonphoppu=this.webpackJsonphoppu||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/hubert_logo_color.ce674f71.svg"},38:function(e,t,a){e.exports=a(58)},43:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),i=a.n(c),l=(a(43),a(19)),o=a(20),s=a(25),u=a(21),m=a(26),h=a(77),d=function(e){return r.a.createElement(h.a,{color:e.color,variant:e.variant,onClick:e.onClick,style:{margin:"10px"}},e.children)},p=a(82),E=a(78),f=a(80),v=a(79),g=a(81),w=(a(47),function(e){return r.a.createElement(p.a,null,r.a.createElement(E.a,null,r.a.createElement(v.a,{className:"card-media",image:e.image,title:"cardImage"}),r.a.createElement(f.a,null,r.a.createElement("div",{className:"card-header"},r.a.createElement(g.a,{variant:"h5"},e.name+" ",e.size),r.a.createElement(g.a,{variant:"h5"},e.price)),r.a.createElement("div",{className:"card-content"},r.a.createElement(g.a,{variant:"body2"},e.desc)))))}),S=a(31),b=a.n(S),y=function(e){return r.a.createElement("img",{width:e.width,height:e.height,src:b.a,alt:"logo"})},k=a(24),j=(a(48),a(32)),x=a.n(j),N=function(e){var t=Object(n.useState)(void 0),a=Object(k.a)(t,2),c=a[0],i=a[1],l=e.showScanner;return r.a.createElement("div",{className:"reader-root"},l&&r.a.createElement(x.a,{delay:300,onScan:function(t){t&&(i(t),e.hideScanner())},onError:function(e){console.log(e)}}),c&&r.a.createElement("div",null,r.a.createElement(w,{image:"https://cdn.shopify.com/s/files/1/0217/3274/products/pau3053_106_h_940x.jpg?v=1543863314",name:"Leather shoes,",size:"42",price:"15\u20ac",desc:"New unused leather shoes"}),r.a.createElement(d,{variant:"contained",color:"primary"},"Sell")))},O=(a(53),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={showScanner:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.showScanner;return r.a.createElement("div",{className:"app-root"},r.a.createElement("header",{className:"header-container"},r.a.createElement(y,{width:"300px",height:"100px"}),r.a.createElement("p",null," The future of digital retail "),r.a.createElement("p",{className:"header"},"Scan QR-code from your package."),r.a.createElement(d,{color:"primary",variant:"contained",onClick:function(){return e.handleScannerClick()}},"Scan QR")),r.a.createElement("div",{className:"reader-container"},r.a.createElement(N,{showScanner:t,hideScanner:function(){return e.hideScanner()}})))}},{key:"handleScannerClick",value:function(){this.setState({showScanner:!this.state.showScanner})}},{key:"hideScanner",value:function(){this.setState({showScanner:!1})}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=a(16),C=a(14),z=(a(54),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"header-container"},r.a.createElement(y,{width:"300px",height:"100px"}),r.a.createElement("p",null," The future of digital retail ")),r.a.createElement("div",{className:"cards-container"},r.a.createElement(w,{image:"https://cdn.shopify.com/s/files/1/0108/6324/7424/products/descente-stock-ski-pant-2020-orange-1_2000x.jpg",name:"Pants",size:"XL",price:"60\u20ac",desc:"New red skiing pants, never used."}),r.a.createElement(w,{image:"https://cdn.shopify.com/s/files/1/0217/3274/products/pau3053_106_h_940x.jpg?v=1543863314",name:"Leather shoes,",size:"42",price:"15\u20ac",desc:"New unused leather shoes"}),r.a.createElement(w,{image:"https://cdn.shopify.com/s/files/1/0260/7815/0733/products/hat_360x.jpg?v=1573936316",name:"Fedora hat",size:"One size",price:"30\u20ac",desc:"Used fedora hat."})))}}]),t}(r.a.Component)),L=function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"header-container"},r.a.createElement(y,{width:"300px",height:"100px"}),r.a.createElement("p",null," The future of digital retail ")),r.a.createElement("body",{className:"body-container"},r.a.createElement("p",null," List your mispurchase in one minute. ")))},T=function(){var e=Object(n.useState)(!0),t=Object(k.a)(e,2),a=(t[0],t[1]),c=function(e){a(e)};return r.a.createElement("div",null,r.a.createElement(_.a,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(_.b,{to:"/sell"},r.a.createElement(d,{color:"primary",variant:"contained",onClick:function(){return c(!1)}},"Sell")),r.a.createElement(_.b,{to:"/store"},r.a.createElement(d,{color:"primary",variant:"contained",onClick:function(){return c(!1)}},"Store"))),r.a.createElement(C.a,{exact:!0,path:"/",render:function(){return r.a.createElement(L,null)}}),r.a.createElement(C.a,{exact:!0,path:"/sell",render:function(){return r.a.createElement(O,null)}}),r.a.createElement(C.a,{exact:!0,path:"/store",render:function(){return r.a.createElement(z,null)}}))))};i.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.3979acb2.chunk.js.map