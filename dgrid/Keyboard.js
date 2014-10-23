//>>built
define("dgrid/Keyboard","dojo/_base/declare dojo/aspect dojo/on dojo/_base/lang dojo/has put-selector/put dojo/_base/Deferred dojo/_base/sniff".split(" "),function(t,p,n,q,m,u,v){function w(a){a.preventDefault()}var C={checkbox:1,radio:1,button:1},D=/\bdgrid-cell\b/,E=/\bdgrid-row\b/;m.add("dom-contains",function(a,c,b){return!!b.contains});var e=t(null,{pageSkip:10,tabIndex:0,keyMap:null,headerKeyMap:null,postMixInProperties:function(){this.inherited(arguments);this.keyMap||(this.keyMap=q.mixin({},
e.defaultKeyMap));this.headerKeyMap||(this.headerKeyMap=q.mixin({},e.defaultHeaderKeyMap))},postCreate:function(){function a(a){var b=a.target;return b.type&&(!C[b.type]||32==a.keyCode)}function c(c){function d(){b._focusedHeaderNode&&(b._focusedHeaderNode.tabIndex=-1);if(b.showHeader&&(b._focusedHeaderNode=l=e?b.headerNode.getElementsByTagName("th")[0]:b.headerNode))l.tabIndex=b.tabIndex}var e=b.cellNavigation,h=e?D:E,f=c===b.headerNode,l=c;f?(d(),p.after(b,"renderHeader",d,!0)):p.after(b,"renderArray",
function(a){return v.when(a,function(a){var d=b._focusedNode||l,f;if(f=h.test(d.className))f=d,f=m("dom-contains")?c.contains(f):c.compareDocumentPosition(f)&8;if(f)return a;f=0;for(var e=c.getElementsByTagName("*"),k;k=e[f];++f)if(h.test(k.className)){d=b._focusedNode=k;break}d.tabIndex=b.tabIndex;return a})});b._listeners.push(n(c,"mousedown",function(c){a(c)||b._focusOnNode(c.target,f,c)}));b._listeners.push(n(c,"keydown",function(c){if(!c.metaKey&&!c.altKey){var d=b[f?"headerKeyMap":"keyMap"][c.keyCode];
d&&!a(c)&&d.call(b,c)}}))}this.inherited(arguments);var b=this;this.tabableHeader&&(c(this.headerNode),n(this.headerNode,"dgrid-cellfocusin",function(){b.scrollTo({x:this.scrollLeft})}));c(this.contentNode)},removeRow:function(a){if(!this._focusedNode)return this.inherited(arguments);var c=this,b=document.activeElement===this._focusedNode,e=this[this.cellNavigation?"cell":"row"](this._focusedNode),d=e.row||e,g;a=a.element||a;if(a===d.element){g=this.down(d,!0);if(!g||g.element===a)g=this.up(d,!0);
this._removedFocus={active:b,rowId:d.id,columnId:e.column&&e.column.id,siblingId:!g||g.element===a?void 0:g.id};setTimeout(function(){c._removedFocus&&c._restoreFocus(d.id)},0);this._focusedNode=null}this.inherited(arguments)},insertRow:function(a){var c=this.inherited(arguments);this._removedFocus&&!this._removedFocus.wait&&this._restoreFocus(c);return c},_restoreFocus:function(a){var c=this._removedFocus,b;if((a=(a=a&&this.row(a))&&a.element&&a.id===c.rowId?a:"undefined"!==typeof c.siblingId&&this.row(c.siblingId))&&
a.element){if(!a.element.parentNode.parentNode){c.wait=!0;return}"undefined"!==typeof c.columnId&&(b=this.cell(a,c.columnId))&&b.element&&(a=b);c.active&&0!==a.element.offsetHeight?this.focus(a):(u(a.element,".dgrid-focus"),a.element.tabIndex=this.tabIndex)}delete this._removedFocus},addKeyHandler:function(a,c,b){return p.after(this[b?"headerKeyMap":"keyMap"],a,c,!0)},_focusOnNode:function(a,c,b){c="_focused"+(c?"Header":"")+"Node";var e=this[c],d=this.cellNavigation?"cell":"row",g=this[d](a),h,f,
l,k,r;if(a=g&&g.element){if(this.cellNavigation){h=a.getElementsByTagName("input");r=0;for(l=h.length;r<l;r++)if(f=h[r],(-1!=f.tabIndex||"lastValue"in f)&&!f.disabled){8>m("ie")&&(f.style.position="relative");f.focus();8>m("ie")&&(f.style.position="");k=!0;break}}b=q.mixin({grid:this},b);b.type&&(b.parentType=b.type);b.bubbles||(b.bubbles=!0);e&&(u(e,"!dgrid-focus[!tabIndex]"),8>m("ie")&&(e.style.position=""),b[d]=this[d](e),n.emit(a,"dgrid-cellfocusout",b));e=this[c]=a;b[d]=g;k||(8>m("ie")&&(a.style.position=
"relative"),a.tabIndex=this.tabIndex,a.focus());u(a,".dgrid-focus");n.emit(e,"dgrid-cellfocusin",b)}},focusHeader:function(a){this._focusOnNode(a||this._focusedHeaderNode,!0)},focus:function(a){this._focusOnNode(a||this._focusedNode,!1)}}),s=e.moveFocusVertical=function(a,c){var b=this.cellNavigation,e=this[b?"cell":"row"](a),e=b&&e.column.id,d=this.down(this._focusedNode,c,!0);b&&(d=this.cell(d,e));this._focusOnNode(d,!1,a);a.preventDefault()};t=e.moveFocusUp=function(a){s.call(this,a,-1)};var F=
e.moveFocusDown=function(a){s.call(this,a,1)},G=e.moveFocusPageUp=function(a){s.call(this,a,-this.pageSkip)},H=e.moveFocusPageDown=function(a){s.call(this,a,this.pageSkip)},x=e.moveFocusHorizontal=function(a,c){if(this.cellNavigation){var b=!this.row(a);this._focusOnNode(this.right(this["_focused"+(b?"Header":"")+"Node"],c),b,a);a.preventDefault()}},y=e.moveFocusLeft=function(a){x.call(this,a,-1)},z=e.moveFocusRight=function(a){x.call(this,a,1)},A=e.moveHeaderFocusEnd=function(a,c){var b;this.cellNavigation&&
(b=this.headerNode.getElementsByTagName("th"),this._focusOnNode(b[c?0:b.length-1],!0,a));a.preventDefault()},I=e.moveHeaderFocusHome=function(a){A.call(this,a,!0)},B=e.moveFocusEnd=function(a,c){var b=this,e=this.cellNavigation,d=this.contentNode,g=d.scrollTop+(c?0:d.scrollHeight),d=d[c?"firstChild":"lastChild"],h=-1<d.className.indexOf("dgrid-preload"),f=h?d[(c?"next":"previous")+"Sibling"]:d,l=f.offsetTop+(c?0:f.offsetHeight),k;if(h){for(;f&&0>f.className.indexOf("dgrid-row");)f=f[(c?"next":"previous")+
"Sibling"];if(!f)return}!h||1>d.offsetHeight?(e&&(f=this.cell(f,this.cell(a).column.id)),this._focusOnNode(f,!1,a)):(m("dom-addeventlistener")||(a=q.mixin({},a)),k=p.after(this,"renderArray",function(d){k.remove();return v.when(d,function(d){d=d[c?0:d.length-1];e&&(d=b.cell(d,b.cell(a).column.id));b._focusOnNode(d,!1,a)})}));g===l&&a.preventDefault()},J=e.moveFocusHome=function(a){B.call(this,a,!0)};e.defaultKeyMap={32:w,33:G,34:H,35:B,36:J,37:y,38:t,39:z,40:F};e.defaultHeaderKeyMap={32:w,35:A,36:I,
37:y,39:z};return e});
//@ sourceMappingURL=Keyboard.js.map