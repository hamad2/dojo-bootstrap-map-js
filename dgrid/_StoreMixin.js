//>>built
define("dgrid/_StoreMixin","dojo/_base/kernel dojo/_base/declare dojo/_base/lang dojo/_base/Deferred dojo/on dojo/aspect put-selector/put".split(" "),function(h,r,e,m,s,n,p){function t(a){return a}function q(a){if("object"!==typeof a)a=Error(a);else if("cancel"===a.dojoType)return;a.grid=this;s.emit(this.domNode,"dgrid-error",{grid:this,error:a,cancelable:!0,bubbles:!0})}return r(null,{store:null,query:null,queryOptions:null,getBeforePut:!0,noDataMessage:"",loadingMessage:"",constructor:function(){this.query=
{};this.queryOptions={};this.dirty={};this._updating={};this._columnsWithSet={};n.before(this,"configStructure",e.hitch(this,function(){this._columnsWithSet={}}))},postCreate:function(){this.inherited(arguments);this.store&&this._updateNotifyHandle(this.store)},destroy:function(){this.inherited(arguments);this._notifyHandle&&this._notifyHandle.remove()},_configColumn:function(a){a.set&&(this._columnsWithSet[a.field]=a);this.inherited(arguments)},_updateNotifyHandle:function(a){this._notifyHandle&&
(this._notifyHandle.remove(),delete this._notifyHandle);a&&"function"===typeof a.notify&&(this._notifyHandle=n.after(a,"notify",e.hitch(this,"_onNotify"),!0),this.get("sort"))},_setStore:function(a,b,c){this._updateNotifyHandle(a);this.store=a;this.dirty={};this.set("query",b,c)},_setQuery:function(a,b){var c=b&&b.sort;this.query=void 0!==a?a:this.query;this.queryOptions=b||this.queryOptions;c?this.set("sort",c):this.refresh()},setStore:function(a,b,c){h.deprecated("setStore(...)",'use set("store", ...) instead',
"dgrid 0.4");this.set("store",a,b,c)},setQuery:function(a,b){h.deprecated("setQuery(...)",'use set("query", ...) instead',"dgrid 0.4");this.set("query",a,b)},_getQueryOptions:function(){var a=e.delegate(this.queryOptions,{});if("function"===typeof this._sort||this._sort.length)a.sort=this._sort;return a},_getQuery:function(){var a=this.query;return"object"==typeof a&&null!=a?e.delegate(a,{}):a},_setSort:function(a,b){this.store&&(this._lastCollection=null);this.inherited(arguments)},_onNotify:function(a,
b){this.inherited(arguments);a&&1>this._numObservers&&this.refresh({keepScrollPosition:!0})},insertRow:function(a,b,c,u,g){var f=this.store,k=this.dirty,f=f&&f.getIdentity(a),d;f in k&&!(f in this._updating)&&(d=k[f]);d&&(a=e.delegate(a,d));return this.inherited(arguments)},updateDirty:function(a,b,c){var e=this.dirty,g=e[a];g||(g=e[a]={});g[b]=c},setDirty:function(a,b,c){h.deprecated("setDirty(...)","use updateDirty() instead","dgrid 0.4");this.updateDirty(a,b,c)},save:function(){function a(a,f){return function(d){var g=
b._columnsWithSet,h=b._updating,l,k;if("function"===typeof d.set)d.set(f);else for(l in f)d[l]=f[l];for(l in g)k=g[l].set(d),void 0!==k&&(d[l]=k);h[a]=!0;return m.when(c.put(d),function(){delete e[a];delete h[a]})}}var b=this,c=this.store,e=this.dirty,g=new m,f=g.promise,k=function(a){var d;return b.getBeforePut||!(d=b.row(a).data)?function(){return c.get(a)}:function(){return d}},d;for(d in e)var h=a(d,e[d]),f=f.then(k(d)).then(h);g.resolve();return f},revert:function(){this.dirty={};this.refresh()},
_trackError:function(a){var b;"string"==typeof a&&(a=e.hitch(this,a));try{b=a()}catch(c){q.call(this,c)}return m.when(b,t,e.hitch(this,q))},newRow:function(){var a=this.inherited(arguments);this.noDataNode&&(p(this.noDataNode,"!"),delete this.noDataNode);return a},removeRow:function(a,b){var c={element:a};!b&&(this.noDataMessage&&this.up(c).element===a&&this.down(c).element===a)&&(this.noDataNode=p(this.contentNode,"div.dgrid-no-data"),this.noDataNode.innerHTML=this.noDataMessage);return this.inherited(arguments)}})});
//@ sourceMappingURL=_StoreMixin.js.map