webpackJsonp([1],{"5x+Y":function(t,n){},"6O3j":function(t,n){},"6laJ":function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("xd7I"),o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var c=e("C7Lr")({name:"App"},o,!1,function(t){e("6laJ")},null,null).exports,s=e("pZCi"),l=e("4YfN"),i=e.n(l),r=e("2bvH"),u={computed:i()({},r.a.mapState({checkAll:function(t){return t.goods.checkAll}})),methods:i()({},r.a.mapMutations({handelcheckAll:"goods/handelAll"}))},d={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"top"},[e("ul",[e("li",[e("input",{attrs:{type:"checkbox"},domProps:{checked:t.checkAll},on:{click:function(n){return t.handelcheckAll()}}}),t._v("\n\t\t\n\t\t全选"+t._s(t.checkAll))]),t._v(" "),e("li",[t._v("信息")]),t._v(" "),e("li",[t._v("单价")]),t._v(" "),e("li",[t._v("数量")]),t._v(" "),e("li",[t._v("小计")]),t._v(" "),e("li",[t._v("删除")])])])},staticRenderFns:[]};var h=e("C7Lr")(u,d,!1,function(t){e("mwQo")},"data-v-0d7485f8",null).exports,p={filters:{cont:function(t,n){return n*(100*t)/100},price:function(t){return/\./g.test(t)?t+"0":t+".00"}},computed:i()({},r.a.mapState({list:function(t){return t.goods.list}})),methods:i()({},r.a.mapMutations({handelDle:"goods/handeljian",handelAdd:"goods/handelAdd",handelCheck:"goods/handelCheck"}),r.a.mapActions({han:"goods/handeldel"}))},v={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wap"},t._l(t.list,function(n,a){return e("div",{staticClass:"main"},[e("label",[e("input",{attrs:{type:"checkbox"},domProps:{checked:n.flag},on:{click:function(n){return t.handelCheck(a)}}})]),t._v(" "),e("div",{staticClass:"goodsImg"},[e("img",{attrs:{src:n.img}})]),t._v(" "),e("p",{staticClass:"goodsName"},[t._v(t._s(n.goodsName))]),t._v(" "),e("p",{staticClass:"goodsPrc"},[t._v(t._s(t._f("price")(n.price))+" ")]),t._v(" "),e("div",{staticClass:"goodsHe"},[e("button",{staticClass:"heDel",on:{click:function(n){return t.handelDle(a)}}},[t._v("-")]),t._v(" "),e("input",{attrs:{type:"text"},domProps:{value:n.num}}),t._v(" "),e("button",{staticClass:"heAdd",on:{click:function(n){return t.handelAdd(a)}}},[t._v("+")])]),t._v(" "),e("p",{staticClass:"goodsDan"},[t._v("￥"),e("span",[t._v(t._s(t._f("price")(t._f("cont")(n.num,n.price))))])]),t._v(" "),e("p",{staticClass:"goodsDel",on:{click:function(e){return t.han(n.id)}}},[t._v("删除")])])}),0)},staticRenderFns:[]};var m=e("C7Lr")(p,v,!1,function(t){e("p+rj")},"data-v-4433f564",null).exports,f={computed:i()({},r.a.mapGetters({result:"goods/result"})),methods:i()({},r.a.mapMutations({checkAll:"goods/handelAll"}))},_={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"bottom"},[e("ul",[e("li",[e("input",{attrs:{type:"checkbox"},on:{click:function(n){return t.checkAll()}}}),t._v("\n\t\t\t全选\n\t\t")]),t._v(" "),e("li",[t._v("已选择"),e("span",[t._v(t._s(t.result.num))]),t._v("件商品")]),t._v(" "),e("li",[t._v("总价:￥"),e("span",[t._v(t._s(t.result.Price))])]),t._v(" "),e("li",{staticClass:"count"},[t._v("去结算")])])])},staticRenderFns:[]};var g={created:function(){this.$store.dispatch("goods/hh")},components:{"Top-com":h,"Main-com":m,"Bottom-com":e("C7Lr")(f,_,!1,function(t){e("5x+Y")},"data-v-01e7e9ce",null).exports}},k={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"home"},[n("Top-com"),this._v(" "),n("Main-com"),this._v(" "),n("Bottom-com")],1)},staticRenderFns:[]};var A=e("C7Lr")(g,k,!1,function(t){e("6O3j")},"data-v-1c7698a2",null).exports;a.a.use(s.a);var C=new s.a({routes:[{path:"/",name:"Home",component:A}]}),x={list:[],checkAll:!1},b=e("Muz9"),w=e.n(b),j={namespaced:!0,state:x,actions:{hh:function(t){var n=t.commit;w()({method:"get",url:"http://localhost:3000/goods"}).then(function(t){t.data.map(function(t){t.flag=!1}),n("handelxiu",t.data)})},handeldel:function(t,n){t.commit;var e=t.dispatch;w()({method:"delete",url:"http://localhost:3000/goods/"+n}).then(function(){e("hh")})}},mutations:{handelxiu:function(t,n){t.list=n},handeljian:function(t,n){t.list[n].num<=1?t.list[n].num=1:t.list[n].num--},handelAdd:function(t,n){t.list[n].num++},handelCheck:function(t,n){t.list[n].flag=!t.list[n].flag;var e=!0;t.list.map(function(t){t.flag||(e=!1)}),t.checkAll=e},handelAll:function(t){t.checkAll=!t.checkAll,t.list.map(function(n){n.flag=t.checkAll})}},getters:{result:function(){console.log(x);var t=0,n=0;return x.list.map(function(e){e.flag&&(t+=e.num,n+=e.num*(100*e.price)/100)}),{num:t,Price:n}}}};a.a.use(r.a);var M=new r.a.Store({state:{},mutations:{},getters:{},actions:{},modules:{goods:j}});a.a.prototype.$http=w.a,a.a.config.productionTip=!1,new a.a({el:"#app",router:C,store:M,components:{App:c},template:"<App/>"})},mwQo:function(t,n){},"p+rj":function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.81233504faa554bfe845.js.map