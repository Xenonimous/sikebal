(this.webpackJsonpinsela=this.webpackJsonpinsela||[]).push([[0],{54:function(t,e,n){},82:function(t,e,n){"use strict";n.r(e);var r=n(2),a=n(0),c=n.n(a),i=n(41),s=n.n(i),o=(n(54),n(11)),u=n(12),j=n(14),d=n(13),h=n(46),l=n(3),p=n(95),b=n(97),O=n(16),m=n.n(O),x=n(21),f=n(22),v=n.n(f),y=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={temporary:[]},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=Object(x.a)(m.a.mark((function t(){var e=this;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://www.bps.go.id/indikator/indikator/download_json/1800/api_pub/50/da_03/1").then((function(t){e.setState({temporary:t.data.data[13].penduduk_jumlah_penduduk})}));case 2:console.log(this.state.temporary);case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Jumlah Penduduk"}),Object(r.jsx)("p",{id:"demo",children:this.state.temporary})]})}}]),n}(a.Component),g=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={temporary:[]},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=Object(x.a)(m.a.mark((function t(){var e=this;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://covid19.bandarlampungkota.go.id/api/").then((function(t){e.setState({temporary:t.data.attributes[0].jml_positif})}));case 2:console.log(this.state.temporary);case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Jumlah Kasus Terkonfirmasi"}),Object(r.jsx)("p",{id:"demo",children:this.state.temporary})]})}}]),n}(a.Component),k=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Zona"}),Object(r.jsx)("p",{children:"Merah"})]})}}]),n}(a.Component),w=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)(p.a,{container:!0,spacing:0,children:[Object(r.jsx)(p.a,{item:!0,xs:4,sm:4,md:4,lg:4,xl:4,children:Object(r.jsx)(b.a,{children:Object(r.jsx)(y,{})})}),Object(r.jsx)(p.a,{item:!0,xs:4,sm:4,md:4,lg:4,xl:4,children:Object(r.jsx)(b.a,{children:Object(r.jsx)(g,{})})}),Object(r.jsx)(p.a,{item:!0,xs:4,sm:4,md:4,lg:4,xl:4,children:Object(r.jsx)(b.a,{children:Object(r.jsx)(k,{})})})]})})},C=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)(h.a,{children:Object(r.jsx)("div",{children:Object(r.jsx)(l.a,{path:"/",component:w})})})}}]),n}(a.Component),_=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,98)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),r(t),a(t),c(t),i(t)}))};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(C,{})}),document.getElementById("root")),_()}},[[82,1,2]]]);
//# sourceMappingURL=main.386c1edb.chunk.js.map