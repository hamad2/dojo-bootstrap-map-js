//>>built
define("dojox/form/YearTextBox","dojo/_base/kernel dojo/_base/lang dojox/widget/YearlyCalendar dijit/form/TextBox ./DateTextBox dojo/_base/declare".split(" "),function(c,b,e,d,f,g){c.experimental("dojox/form/DateTextBox");return g("dojox.form.YearTextBox",f,{popupClass:e,format:function(a){return"string"!=typeof a&&a.getFullYear?a.getFullYear():a},validator:function(a){return""==a||null==a||/(^-?\d\d*$)/.test(String(a))},_setValueAttr:function(a,b,c){a&&a.getFullYear&&(a=a.getFullYear());d.prototype._setValueAttr.call(this,
a,b,c)},openDropDown:function(){this.inherited(arguments);this.dropDown.onValueSelected=b.hitch(this,function(a){this.focus();setTimeout(b.hitch(this,"closeDropDown"),1);d.prototype._setValueAttr.call(this,a,!0,a)})},parse:function(a,b){return a||(this._isEmpty(a)?null:void 0)},filter:function(a){return a&&a.getFullYear?a.getFullYear().toString():this.inherited(arguments)}})});
//@ sourceMappingURL=YearTextBox.js.map