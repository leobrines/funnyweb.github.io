(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{177:function(t,e,n){"use strict";n.r(e);n(34);var o=n(5),r={name:"HomePage",data:function(){return{players:[],columns:[{field:"name",label:"Nombre"},{field:"kills",label:"Frags"},{field:"deaths",label:"Muertes"}]}},created:function(){this.getTop()},methods:{getTop:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("http://localhost:8080/top");case 2:void 0!==(data=e.sent)&&(t.players=data.players);case 4:case"end":return e.stop()}}),e)})))()},goToSteamProfile:function(t){window.open(t.steam_profile,"_blank")}}},l=n(30),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section"},[e("section",{staticClass:"hero"},[e("div",{staticClass:"hero-body"},[this._m(0),this._v(" "),e("br"),this._v(" "),e("div",{staticClass:"columns is-mobile"},[e("b-table",{attrs:{data:this.players,columns:this.columns,selectable:"",hoverable:""},on:{select:this.goToSteamProfile}})],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[this._v("\n          Top Funny Pug/competitivo\n        ")]),this._v(" "),e("h2",{staticClass:"subtitle"},[this._v("\n          Premio a los mejores 3 jugadores\n        ")])])}],!1,null,null,null);e.default=component.exports}}]);