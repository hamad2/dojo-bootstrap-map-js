//>>built
define("dgrid/extensions/DnD","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/Deferred dojo/aspect dojo/on dojo/topic dojo/has dojo/dnd/Source dojo/dnd/Manager dojo/_base/NodeList put-selector/put ../Selection dojo/has!touch?../util/touch dojo/has!touch?./_DnD-touch-autoscroll xstyle/css!dojo/resources/dnd.css".split(" "),function(e,m,n,l,t,y,u,p,q,r,v,w,x,s){var h=e(q,{grid:null,getObject:function(a){var b=this.grid;return b.store.get(a.id.slice(b.id.length+5))},_legalMouseDown:function(a){return this.inherited(arguments)&&
a.target!=this.grid.bodyNode},onDrop:function(a,b,d){var f=this,c=this._targetAnchor=this.targetAnchor,g=this.grid,k=g.store;!this.before&&c&&(c=c.nextSibling);c=c&&g.row(c);l.when(c&&k.get(c.id),function(c){if(f!=a)f.onDropExternal(a,b,d,c);else f.onDropInternal(b,d,c)})},onDropInternal:function(a,b,d){var f=this.grid.store,c=this,g=this.grid,k=c._targetAnchor,e;k&&(e=this.before?k.previousSibling:k.nextSibling);(b||!(e===a[0]||!d&&g.down(g.row(a[0])).element==a[0]))&&a.forEach(function(a){l.when(c.getObject(a),
function(a){f[b&&f.copy?"copy":"put"](a,{before:d})})})},onDropExternal:function(a,b,d,f){var c=this.grid.store,g=a.grid;b.forEach(function(b,e){l.when(a.getObject(b),function(h){d||(g?l.when(g.store.getIdentity(h),function(f){!e&&a.selectNone();a.delItem(b.id);g.store.remove(f)}):a.deleteSelectedNodes());c[c.copy?"copy":"put"](h,{before:f})})})},onDndStart:function(a,b,d){this.inherited(arguments);a==this&&(this.grid.cancelTouchScroll&&this.grid.cancelTouchScroll(),r.manager().avatar.node.style.width=
this.grid.domNode.offsetWidth/2+"px")},onMouseDown:function(a){p("touch")&&this.isDragging&&1<s.countCurrentTouches(a,this.grid.touchNode)?(u.publish("/dnd/cancel"),r.manager().stopDrag()):this.inherited(arguments)},onMouseMove:function(a){(!p("touch")||1>=s.countCurrentTouches(a,this.grid.touchNode))&&this.inherited(arguments)},checkAcceptance:function(a,b){return a.getObject&&q.prototype.checkAcceptance.apply(this,arguments)},getSelectedNodes:function(){if(!this.grid.selection)return this.inherited(arguments);
var a=new v,b;for(b in this.grid.selection)a.push(this._selectedNodes[b]);return a}});e=e(x,{dndSourceType:"dgrid-row",dndParams:null,dndConstructor:h,postMixInProperties:function(){this.inherited(arguments);this.dndParams=m.mixin({accept:[this.dndSourceType]},this.dndParams)},postCreate:function(){function a(a){d[a.id]=a.element}function b(a){delete d[a.id]}this.inherited(arguments);this.dndSource=new (this.dndConstructor||h)(this.bodyNode,m.mixin(this.dndParams,{grid:this,dropParent:this.contentNode}));
var d=this.dndSource._selectedNodes={};this.on("dgrid-select",function(b){n.forEach(b.rows,a)});this.on("dgrid-deselect",function(a){n.forEach(a.rows,b)});t.after(this,"destroy",function(){delete this.dndSource._selectedNodes;d=null;this.dndSource.destroy()},!0)},insertRow:function(a){var b=this.inherited(arguments),d="function"==typeof this.getObjectDndType?this.getObjectDndType(a):[this.dndSourceType];w(b,".dojoDndItem");this.dndSource.setItem(b.id,{data:a,type:d instanceof Array?d:[d]});return b},
removeRow:function(a){this.dndSource.delItem(this.row(a));this.inherited(arguments)}});e.GridSource=h;return e});
//@ sourceMappingURL=DnD.js.map