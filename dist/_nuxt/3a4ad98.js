(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{336:function(t,e,r){var content=r(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("2582e36b",content,!0,{sourceMap:!1})},343:function(t,e,r){"use strict";r(336)},344:function(t,e,r){var l=r(41)(!1);l.push([t.i,".el-page-header__left{margin:0}.result_threed .el-page-header{padding:10px;line-height:43px;color:#fff}.result_threed .el-page-header__content{color:#fff}.result_item{padding:20px}.result_item h4{font-size:15px}.result_threed .el-card{color:#fff;margin:95px 20px 20px;border-radius:10px;text-align:center}.result_item .el-col .result_number{width:52px;background:#222c36;float:right;font-weight:700;color:#fff;font-size:32px;padding:5px 10px;border-radius:13px;margin-right:3px}.result_date,.result_time{margin:17px 10px;padding-left:12px;font-size:11px}.result_item span{font-size:13px}.result .table th{border:0}.threed_result_item{padding-top:10px}.threed_result h4{font-size:15px;color:#000;text-align:left}.threed_result span{font-size:17px;color:#b8b8b8}",""]),t.exports=l},359:function(t,e,r){"use strict";r.r(e);r(57);var l={mounted:function(){var t=this;this.$nextTick((function(){t.$nuxt.$loading.start()}))},data:function(){return{threed_result:""}},methods:{goBack:function(){this.$router.push("/")}},created:function(){var t=this;this.$axios.get("https://api.2dboss.com/api/v2/v1/2dstock/threed-result").then((function(e){t.threed_result=e.data.data,t.$nuxt.$loading.finish()}))}},n=(r(343),r(43)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main_container result_threed"},[r("el-header",{staticClass:"header",staticStyle:{padding:"0 10px"}},[r("el-page-header",{attrs:{title:"",content:"3D results"},on:{back:t.goBack}})],1),t._v(" "),r("el-card",{staticClass:"threed_result_card",attrs:{"data-aos":"fade-up","data-aos-easing":"linear"}},[r("div",{staticClass:"threed_result"},[r("el-row",{staticStyle:{"padding-bottom":"10px"}},[r("el-col",{staticStyle:{"text-align":"left"},attrs:{span:16}},[r("span",[t._v("Date")])]),t._v(" "),r("el-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[r("span",[t._v("3D")])])],1),t._v(" "),t._l(t.threed_result,(function(e,l){return r("el-row",{key:l,staticClass:"threed_result_item"},[r("el-col",{attrs:{span:16}},[r("h4",[t._v(t._s(e.datetime))])]),t._v(" "),r("el-col",{staticStyle:{"text-align":"right !important"},attrs:{span:8}},[r("h4",{staticStyle:{"text-align":"right",color:"#FFA00D","font-weight":"bold"}},[t._v(t._s(e.result))])])],1)}))],2)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);