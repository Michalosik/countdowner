(function(e){function t(t){for(var c,a,s=t[0],i=t[1],u=t[2],l=0,b=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&b.push(o[a][0]),o[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);d&&d(t);while(b.length)b.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(c=!1)}c&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},o={app:0},r=[];function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1cfb":function(e,t,n){"use strict";n("43f1")},"43f1":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o=n("6c02"),r=n("ecee"),a=n("c074"),s=n("ad3d");function i(e,t,n,o,r,a){var s=Object(c["A"])("the-header"),i=Object(c["A"])("router-view");return Object(c["s"])(),Object(c["f"])(c["a"],null,[Object(c["i"])(s),Object(c["g"])("main",null,[Object(c["i"])(i)])],64)}var u=function(e){return Object(c["v"])("data-v-1939120a"),e=e(),Object(c["t"])(),e},d=u((function(){return Object(c["g"])("h1",null,"CountItDown!",-1)})),l=[d];function b(e,t){return Object(c["s"])(),Object(c["f"])("header",null,l)}n("7e05");var f=n("6b0d"),O=n.n(f);const j={},m=O()(j,[["render",b],["__scopeId","data-v-1939120a"]]);var p=m,v={components:{TheHeader:p}};n("8d41");const h=O()(v,[["render",i]]);var _=h,g=function(e){return Object(c["v"])("data-v-40761ba8"),e=e(),Object(c["t"])(),e},y={class:"counter__card"},w=g((function(){return Object(c["g"])("div",{class:"counter__card-shadow"},null,-1)})),C={class:"counter__card-counter"},k={class:"counter__card-controls"};function I(e,t){return Object(c["s"])(),Object(c["f"])("div",y,[w,Object(c["g"])("div",C,[Object(c["z"])(e.$slots,"counter",{},void 0,!0)]),Object(c["g"])("div",k,[Object(c["z"])(e.$slots,"controls",{},void 0,!0)])])}n("f8e4");const T={},A=O()(T,[["render",I],["__scopeId","data-v-40761ba8"]]);var V=A;function S(e,t){return Object(c["s"])(),Object(c["f"])("button",null,[Object(c["z"])(e.$slots,"default",{},void 0,!0)])}n("1cfb");const D={},F=O()(D,[["render",S],["__scopeId","data-v-53546334"]]);var L=F,M=function(e){return Object(c["v"])("data-v-27df39e6"),e=e(),Object(c["t"])(),e},x=M((function(){return Object(c["g"])("span",{class:"sr-only","aria-hidden":"false"},"Add new counter",-1)}));function U(e,t,n,o,r,a){var s=Object(c["A"])("font-awesome-icon"),i=Object(c["A"])("add-countdowner"),u=Object(c["A"])("counters-list");return Object(c["s"])(),Object(c["f"])(c["a"],null,[Object(c["g"])("button",{class:"add-btn",onClick:t[0]||(t[0]=function(){return a.toggleAddCounterForm&&a.toggleAddCounterForm.apply(a,arguments)})},[x,Object(c["i"])(s,{icon:"plus-circle","aria-hidden":"true",class:"trash-alt"})]),r.addCounterFormIsVisibile?(Object(c["s"])(),Object(c["d"])(i,{key:0})):Object(c["e"])("",!0),Object(c["i"])(u)],64)}n("c740"),n("a434"),n("e9c4");var P=function(e){return Object(c["v"])("data-v-5f556722"),e=e(),Object(c["t"])(),e},R={class:"form__wrapper"},E={key:0,class:"alert"},H=P((function(){return Object(c["g"])("p",null,"Please fill all fields to see how long you have to wait!",-1)})),J=[H],z=P((function(){return Object(c["g"])("label",{for:"date"},"Date to:",-1)})),G=P((function(){return Object(c["g"])("label",{for:"title"},"Title:",-1)})),N=P((function(){return Object(c["g"])("label",{for:"url"},"Background img URL:",-1)})),$=Object(c["h"])("Add This!"),B=P((function(){return Object(c["g"])("span",{"aria-hidden":"false",class:"sr-only"},"Close",-1)})),X=P((function(){return Object(c["g"])("span",{"aria-hidden":"true"},"X",-1)})),q=[B,X];function K(e,t,n,o,r,a){var s=Object(c["A"])("base-button");return Object(c["s"])(),Object(c["f"])("div",R,[Object(c["g"])("form",null,[r.formIsValid?(Object(c["s"])(),Object(c["f"])("div",E,J)):Object(c["e"])("",!0),Object(c["g"])("div",null,[z,Object(c["H"])(Object(c["g"])("input",{id:"date",type:"datetime-local","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.enteredDate=e})},null,512),[[c["E"],r.enteredDate]])]),Object(c["g"])("div",null,[G,Object(c["H"])(Object(c["g"])("input",{id:"title",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.enteredTitle=e})},null,512),[[c["E"],r.enteredTitle]])]),Object(c["g"])("div",null,[N,Object(c["H"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.enteredURL=e})},null,512),[[c["E"],r.enteredURL]])]),Object(c["i"])(s,{type:"button",onClick:a.saveCountdowner},{default:Object(c["G"])((function(){return[$]})),_:1},8,["onClick"]),Object(c["g"])("button",{onClick:t[3]||(t[3]=function(){return a.toggleFormVisibility&&a.toggleFormVisibility.apply(a,arguments)}),class:"close-btn",type:"button"},q)])])}n("498a");var Q={data:function(){return{enteredDate:null,enteredTitle:"",enteredURL:"",formIsValid:!1}},inject:["addCountdowner","toggleFormVisibility"],methods:{saveCountdowner:function(){var e=this.enteredDate,t=this.enteredTitle,n=this.enteredURL;if(null==e||""===t.trim()||""===n.trim())this.formIsValid=!0;else{var c=new Date(this.enteredDate).getTime();this.addCountdowner(c,this.enteredTitle,this.enteredURL),this.toggleFormVisibility()}}}};n("e1b0");const W=O()(Q,[["render",K],["__scopeId","data-v-5f556722"]]);var Y=W,Z=function(e){return Object(c["v"])("data-v-be4d818e"),e=e(),Object(c["t"])(),e},ee={key:0,class:"countdowners__wrapper"},te={key:1,class:"countdowners__wrapper"},ne=Z((function(){return Object(c["g"])("p",null,"There are no timers set, use this button with white cross to add one!",-1)})),ce=[ne];function oe(e,t,n,o,r,a){var s=Object(c["A"])("counter-clock");return a.countdowners.length>0?(Object(c["s"])(),Object(c["f"])("div",ee,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(a.countdowners,(function(e){return Object(c["s"])(),Object(c["d"])(s,{key:e.id,title:e.title,endTime:e.endTime,style:Object(c["o"])({backgroundImage:"url("+e.url+")"})},null,8,["title","endTime","style"])})),128))])):(Object(c["s"])(),Object(c["f"])("div",te,ce))}var re=function(e){return Object(c["v"])("data-v-39a1aee9"),e=e(),Object(c["t"])(),e},ae={class:"time__container"},se={class:"time__column"},ie={class:"time__value"},ue={key:0,class:"time__name"},de={key:1,class:"time__name"},le={class:"time__column"},be={class:"time__value"},fe={key:0,class:"time__name"},Oe={key:1,class:"time__name"},je={class:"time__column"},me={class:"time__value"},pe={key:0,class:"time__name"},ve={key:1,class:"time__name"},he={class:"time__column"},_e={class:"time__value"},ge={key:0,class:"time__name"},ye={key:1,class:"time__name"},we={class:"time__column"},Ce={class:"time__value"},ke={key:0,class:"time__name"},Ie={key:1,class:"time__name"},Te={class:"time__column"},Ae={class:"time__value"},Ve={key:0,class:"time__name"},Se={key:1,class:"time__name"},De=re((function(){return Object(c["g"])("span",{class:"sr-only"},"Remove",-1)}));function Fe(e,t,n,o,r,a){var s=Object(c["A"])("font-awesome-icon"),i=Object(c["A"])("base-counter");return Object(c["s"])(),Object(c["d"])(i,null,{counter:Object(c["G"])((function(){return[Object(c["g"])("h3",null,Object(c["C"])(n.title),1),Object(c["g"])("div",ae,[Object(c["g"])("div",se,[Object(c["g"])("span",ie,Object(c["C"])(r.year),1),r.year>1?(Object(c["s"])(),Object(c["f"])("span",ue,"years")):(Object(c["s"])(),Object(c["f"])("span",de,"year"))]),Object(c["g"])("div",le,[Object(c["g"])("span",be,Object(c["C"])(r.month),1),r.month>1?(Object(c["s"])(),Object(c["f"])("span",fe,"months")):(Object(c["s"])(),Object(c["f"])("span",Oe,"month"))]),Object(c["g"])("div",je,[Object(c["g"])("span",me,Object(c["C"])(r.day),1),r.day>1?(Object(c["s"])(),Object(c["f"])("span",pe,"days")):(Object(c["s"])(),Object(c["f"])("span",ve,"day"))]),Object(c["g"])("div",he,[Object(c["g"])("span",_e,Object(c["C"])(r.hour),1),r.hour>1?(Object(c["s"])(),Object(c["f"])("span",ge,"hours")):(Object(c["s"])(),Object(c["f"])("span",ye,"hour"))]),Object(c["g"])("div",we,[Object(c["g"])("span",Ce,Object(c["C"])(r.minute),1),r.minute>1?(Object(c["s"])(),Object(c["f"])("span",ke,"minutes")):(Object(c["s"])(),Object(c["f"])("span",Ie,"minute"))]),Object(c["g"])("div",Te,[Object(c["g"])("span",Ae,Object(c["C"])(r.second),1),r.second>1?(Object(c["s"])(),Object(c["f"])("span",Ve,"seconds")):(Object(c["s"])(),Object(c["f"])("span",Se,"second"))])])]})),controls:Object(c["G"])((function(){return[Object(c["g"])("button",{onClick:t[0]||(t[0]=function(t){return a.removeCountdowner(e.id)}),class:"counter__remove-btn"},[De,Object(c["i"])(s,{icon:"trash-alt","aria-hidden":"true",class:"trash-alt"})])]})),_:1})}var Le={props:["title","endTime"],data:function(){return{year:0,month:0,day:0,hour:0,minute:0,second:0}},inject:["removeCountdowner"],methods:{startCountDown:function(){var e=this,t=setInterval((function(){var n=(new Date).getTime(),c=e.endTime-n;e.year=Math.floor(c/31536e6),e.month=Math.floor(c%31536e6/2592e6),e.day=Math.floor(c%2592e6/864e5),e.hour=Math.floor(c%864e5/36e5),e.minute=Math.floor(c%36e5/6e4),e.second=Math.floor(c%6e4/1e3),c<0&&(e.year="D",e.month="O",e.day="N",e.hour="E",e.minute=":",e.second=")",clearInterval(t))}),1e3)}},created:function(){this.startCountDown()}};n("db43");const Me=O()(Le,[["render",Fe],["__scopeId","data-v-39a1aee9"]]);var xe=Me,Ue={components:{CounterClock:xe},inject:["countdowners"]};n("de2d");const Pe=O()(Ue,[["render",oe],["__scopeId","data-v-be4d818e"]]);var Re=Pe,Ee={components:{CountersList:Re,AddCountdowner:Y},provide:function(){return{countdowners:this.countdowners,removeCountdowner:this.removeCountdowner,addCountdowner:this.addCountdowner,toggleFormVisibility:this.toggleAddCounterForm}},data:function(){return{countdowners:JSON.parse(localStorage.getItem("my_countdowners"))||[],addCounterFormIsVisibile:!1}},methods:{addCountdowner:function(e,t,n){var c={id:(new Date).toISOString(),title:t,endTime:e,url:n};this.countdowners.unshift(c),this.updateLocalStorage()},removeCountdowner:function(e){var t=this.countdowners.findIndex((function(t){return t.id===e}));this.countdowners.splice(t,1),this.updateLocalStorage()},updateLocalStorage:function(){localStorage.setItem("my_countdowners",JSON.stringify(this.countdowners))},toggleAddCounterForm:function(){this.addCounterFormIsVisibile=!this.addCounterFormIsVisibile}}};n("d73f");const He=O()(Ee,[["render",U],["__scopeId","data-v-27df39e6"]]);var Je=He,ze=Object(o["a"])({history:Object(o["b"])(),routes:[{path:"*/countdowners/",component:Je},{path:"*/add",component:Y},{path:"*/countdowners/",component:Je}]});r["c"].add(a["b"],a["a"]);var Ge=Object(c["c"])(_);Ge.component("base-counter",V),Ge.component("base-button",L),Ge.component("font-awesome-icon",s["a"]),Ge.use(ze),Ge.mount("#app")},"633b":function(e,t,n){},"63b6":function(e,t,n){},"7e05":function(e,t,n){"use strict";n("a817")},"8d41":function(e,t,n){"use strict";n("ddac")},"97cf":function(e,t,n){},a817:function(e,t,n){},c33b:function(e,t,n){},d73f:function(e,t,n){"use strict";n("633b")},d8ea:function(e,t,n){},db43:function(e,t,n){"use strict";n("c33b")},ddac:function(e,t,n){},de2d:function(e,t,n){"use strict";n("97cf")},e1b0:function(e,t,n){"use strict";n("63b6")},f8e4:function(e,t,n){"use strict";n("d8ea")}});
//# sourceMappingURL=app.3719cfeb.js.map