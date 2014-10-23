//>>built
define("esri/layers/JoinDataSource","dojo/_base/declare dojo/_base/lang dojo/has ../kernel ../lang ./DataSource ./LayerMapSource ./TableDataSource ./QueryDataSource ./RasterDataSource".split(" "),function(f,n,p,q,d,g,h,k,l,m){var e=f(g,{declaredClass:"esri.layers.JoinDataSource",constructor:function(a){a&&(a.leftTableSource&&(this.leftTableSource=this._createLayerSource(a.leftTableSource)),a.rightTableSource&&(this.rightTableSource=this._createLayerSource(a.rightTableSource)))},_createLayerSource:function(a){var b;
if("mapLayer"===a.type)b=new h(a);else{b={type:"dataLayer"};var c;switch(a.dataSource.type){case "table":c=new k(a.dataSource);break;case "queryTable":c=new l(a.dataSource);break;case "joinTable":c=new e(a.dataSource);break;case "raster":c=new m(a.dataSource);break;default:c=a.dataSource}b.dataSource=c;b.toJson=function(){var a={type:"dataLayer",dataSource:c.toJson()};return d.fixJson(a)}}return b},toJson:function(){var a={type:"joinTable",leftTableSource:this.leftTableSource&&this.leftTableSource.toJson(),
rightTableSource:this.rightTableSource&&this.rightTableSource.toJson(),leftTableKey:this.leftTableKey,rightTableKey:this.rightTableKey},b;b="left-outer-join"===this.joinType.toLowerCase()?"esriLeftOuterJoin":"left-inner-join"===this.joinType.toLowerCase()?"esriLeftInnerJoin":this.joinType;a.joinType=b;return d.fixJson(a)}});return e});
//@ sourceMappingURL=JoinDataSource.js.map