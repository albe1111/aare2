(function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],x=0,u=[];x<o.length;x++)s=o[x],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&u.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);y&&y(e);while(u.length)u.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},i=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var y=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("h1",[t._v("Aare App")]),r("HelloWorld",{attrs:{datum:t.datum}}),r("div",{staticClass:"termocontainer"},[r("figure",{staticClass:"image",attrs:{id:"containertermo"}},[r("svg",{attrs:{id:"term",viewBox:"0 0 75 250"}},[r("rect",{style:t.colorterm,attrs:{x:"18.7",y:155-4.5*t.temp,rx:"5",ry:"5",width:"13",height:220-(155-4.5*t.temp)}}),r("circle",{style:t.colorterm,attrs:{cx:"25.2",cy:"227.5",r:"16"}}),r("path",{attrs:{d:"M 15 210\n            A 20 20 0 1 0  35 210\n            L 35 20\n            A 5 5 0 1 0  15 20\n            L 15 210\n            "}}),r("path",{attrs:{d:"M14 226 A 8 8 0 0 1 20 218"}}),r("line",{attrs:{x1:"40",y1:"20",x2:"47",y2:"20"}}),r("text",{staticClass:"small",attrs:{x:"55",y:"25"}},[t._v("30")]),r("line",{attrs:{x1:"40",y1:"24.5",x2:"40",y2:"24.5"}}),r("line",{attrs:{x1:"40",y1:"29",x2:"40",y2:"29"}}),r("line",{attrs:{x1:"40",y1:"33.5",x2:"40",y2:"33.5"}}),r("line",{attrs:{x1:"40",y1:"38",x2:"40",y2:"38"}}),r("line",{attrs:{x1:"40",y1:"42.5",x2:"43",y2:"42.5"}}),r("line",{attrs:{x1:"40",y1:"47",x2:"40",y2:"47"}}),r("line",{attrs:{x1:"40",y1:"51.5",x2:"40",y2:"51.5"}}),r("line",{attrs:{x1:"40",y1:"56",x2:"40",y2:"56"}}),r("line",{attrs:{x1:"40",y1:"60.5",x2:"40",y2:"60.5"}}),r("line",{attrs:{x1:"40",y1:"65",x2:"47",y2:"65"}}),r("text",{staticClass:"small",attrs:{x:"55",y:"70"}},[t._v("20")]),r("line",{attrs:{x1:"40",y1:"69.5",x2:"40",y2:"69.5"}}),r("line",{attrs:{x1:"40",y1:"74",x2:"40",y2:"74"}}),r("line",{attrs:{x1:"40",y1:"78.5",x2:"40",y2:"78.5"}}),r("line",{attrs:{x1:"40",y1:"83",x2:"40",y2:"83"}}),r("line",{attrs:{x1:"40",y1:"87.5",x2:"43",y2:"87.5"}}),r("line",{attrs:{x1:"40",y1:"92",x2:"40",y2:"92"}}),r("line",{attrs:{x1:"40",y1:"96.5",x2:"40",y2:"96.5"}}),r("line",{attrs:{x1:"40",y1:"101",x2:"40",y2:"101"}}),r("line",{attrs:{x1:"40",y1:"105.5",x2:"40",y2:"105.5"}}),r("line",{attrs:{x1:"40",y1:"110",x2:"47",y2:"110"}}),r("text",{staticClass:"small",attrs:{x:"55",y:"115"}},[t._v("10")]),r("line",{attrs:{x1:"40",y1:"114.5",x2:"40",y2:"114.5"}}),r("line",{attrs:{x1:"40",y1:"119",x2:"40",y2:"119"}}),r("line",{attrs:{x1:"40",y1:"123.5",x2:"40",y2:"123.5"}}),r("line",{attrs:{x1:"40",y1:"128",x2:"40",y2:"128"}}),r("line",{attrs:{x1:"40",y1:"132.5",x2:"43",y2:"132.5"}}),r("line",{attrs:{x1:"40",y1:"137",x2:"40",y2:"137"}}),r("line",{attrs:{x1:"40",y1:"141.5",x2:"40",y2:"141.5"}}),r("line",{attrs:{x1:"40",y1:"146",x2:"40",y2:"146"}}),r("line",{attrs:{x1:"40",y1:"150.5",x2:"40",y2:"150.5"}}),r("line",{attrs:{x1:"40",y1:"155",x2:"47",y2:"155"}}),r("text",{staticClass:"small",attrs:{x:"62.3",y:"160"}},[t._v("0")]),r("line",{attrs:{x1:"40",y1:"159.5",x2:"40",y2:"159.5"}}),r("line",{attrs:{x1:"40",y1:"164",x2:"40",y2:"164"}}),r("line",{attrs:{x1:"40",y1:"168.5",x2:"40",y2:"168.5"}}),r("line",{attrs:{x1:"40",y1:"173",x2:"40",y2:"173"}}),r("line",{attrs:{x1:"40",y1:"177.5",x2:"43",y2:"177.5"}}),r("line",{attrs:{x1:"40",y1:"182",x2:"40",y2:"182"}}),r("line",{attrs:{x1:"40",y1:"186.5",x2:"40",y2:"186.5"}}),r("line",{attrs:{x1:"40",y1:"191",x2:"40",y2:"191"}}),r("line",{attrs:{x1:"40",y1:"195.5",x2:"40",y2:"195.5"}}),r("line",{attrs:{x1:"40",y1:"200",x2:"47",y2:"200"}}),r("text",{staticClass:"small",attrs:{x:"50.9",y:"205"}},[t._v("-10")])])]),r("HelloWorld",{staticClass:"temp",attrs:{temp:t.temp}})],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),r("p",[t._v(" "+t._s(t.temp)+" "),r("br"),t._v(" "+t._s(t.datum)+" ")])])},o=[],l=(r("a9e3"),{name:"HelloWorld",props:{msg:String,temp:Number,datum:String}}),c=l,y=(r("b045"),r("2877")),x=Object(y["a"])(c,s,o,!1,null,"2c52fe76",null),u=x.exports,p=r("bc3a"),d=r.n(p),f={name:"App",components:{HelloWorld:u},data:function(){return{test:16,temp:10,colorterm:"",datum:""}},mounted:function(){var t=this;d.a.get("https://www.wiewarm.ch:443/api/v1/temperature.json/17").then((function(e){t.temp=parseFloat(e.data["52"]["temp"]),t.datum=new Date(Date.parse(e.data["52"]["date"])).toLocaleDateString("de-CH",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}),t.temp<=14?t.colorterm="fill:#00FFF7;stroke:none;":t.colorterm="fill:#FFB600;stroke:none;"}))}},m=f,v=(r("034f"),Object(y["a"])(m,a,i,!1,null,null,null)),g=v.exports,h=r("9483");Object(h["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(g)}}).$mount("#app")},"84de":function(t,e,r){},"85ec":function(t,e,r){},b045:function(t,e,r){"use strict";var n=r("84de"),a=r.n(n);a.a}});
//# sourceMappingURL=app.9c0cf347.js.map