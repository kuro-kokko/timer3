(function(t){function e(e){for(var i,r,o=e[0],a=e[1],l=e[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&p.push(c[r][0]),c[r]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,o=1;o<n.length;o++){var a=n[o];0!==c[a]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},c={app:0},s=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=a;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1f97":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),c={lang:"ja"},s=Object(i["d"])("head",null,[Object(i["d"])("meta",{charset:"utf-8"}),Object(i["d"])("title",null,"timer")],-1),r={id:"timer"},o=Object(i["d"])("header",{class:"hero is-success is-bold"},[Object(i["d"])("div",{class:"hero-body"},[Object(i["d"])("div",{class:"container"},[Object(i["d"])("h1",{class:"title",id:"title"})])])],-1),a={class:"timer"},l={class:"container"},u={class:"time d-flex justify-content-center"},d={class:"table box content mx-auto d-flex justify-content-center"},p={class:"col-xs-2 m-1"},f=["disabled"],b=Object(i["d"])("span",{class:"m-1 pt-1"},"分",-1),h={class:"col-xs-2 m-1"},m=["disabled"],O=Object(i["d"])("span",{class:"m-1 pt-1"},"秒",-1),j={class:"button d-flex justify-content-center"};function v(t,e){return Object(i["e"])(),Object(i["c"])("html",c,[s,Object(i["d"])("body",null,[Object(i["d"])("div",r,[o,Object(i["d"])("div",a,[Object(i["d"])("div",l,[Object(i["d"])("div",u,Object(i["f"])(t.formatTime),1),Object(i["d"])("div",d,[Object(i["d"])("span",p,[Object(i["h"])(Object(i["d"])("input",{type:"text",class:"text rounded has-text-centered",disabled:t.isProcessing(),"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.min=e}),onInput:e[1]||(e[1]=function(){return t.validateMin&&t.validateMin.apply(t,arguments)})},null,40,f),[[i["g"],t.min]])]),b,Object(i["d"])("span",h,[Object(i["h"])(Object(i["d"])("input",{type:"text",class:"text rounded has-text-centered",disabled:t.isProcessing(),"onUpdate:modelValue":e[2]||(e[2]=function(e){return t.sec=e}),onInput:e[3]||(e[3]=function(){return t.validateSec&&t.validateSec.apply(t,arguments)})},null,40,m),[[i["g"],t.sec]])]),O]),Object(i["d"])("div",j,[t.timerOn?Object(i["b"])("",!0):(Object(i["e"])(),Object(i["c"])("button",{key:0,class:"m-1 p-1",onClick:e[4]||(e[4]=function(){return t.start&&t.start.apply(t,arguments)})},"Start")),t.timerOn?(Object(i["e"])(),Object(i["c"])("button",{key:1,class:"m-1 p-1",onClick:e[5]||(e[5]=function(){return t.stop&&t.stop.apply(t,arguments)})},"Stop")):Object(i["b"])("",!0),Object(i["d"])("button",{class:"m-1 p-1",onClick:e[6]||(e[6]=function(){return t.reset&&t.reset.apply(t,arguments)})},"Reset")])])])])])])}n("ac1f"),n("5319"),n("d81d"),n("d3b7"),n("25f0");var y=n("b730"),g=n.n(y),x={name:"timer",data:function(){return{min:3,sec:0,timerOn:!1,timerObj:null,processing:!1}},methods:{count:function(){this.sec<=0&&this.min>=1?(this.min--,this.sec=59):this.sec<=0&&this.min<=0?this.complete():this.sec--},start:function(){if(this.sec>0||this.min>0){this.processing=!0;var t=this;this.timerObj=setInterval((function(){t.count()}),1e3),this.timerOn=!0}},stop:function(){this.processing=!1,clearInterval(this.timerObj),this.timerOn=!1},reset:function(){this.stop(),this.min=0,this.sec=0},validateMin:function(){this.min=this.min.replace(/\D/g,"")},validateSec:function(){this.sec=this.sec.replace(/\D/g,"")},isProcessing:function(){return this.processing},complete:function(){g.a.create("タイマー終了",{body:"時間が経過しました",timeout:4e3,onClick:function(){window.focus(),this.close()}}),this.stop(),clearInterval(this.timerObj)}},computed:{formatTime:function(){var t=[this.min.toString(),this.sec.toString()].map((function(t){return t.length<2?"0"+t:t}));return t[0]+":"+t[1]}}};n("7053");x.render=v;var w=x;n("f9e3"),n("2dd8");Object(i["a"])(w).mount("#app")},7053:function(t,e,n){"use strict";n("1f97")}});
//# sourceMappingURL=app.929867bf.js.map