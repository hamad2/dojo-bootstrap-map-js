//>>built
define("esri/renderers/SymbolAger",["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel"],function(c,d,e,f){return c(null,{declaredClass:"esri.renderer.SymbolAger",getAgedSymbol:function(a,b){},_setSymbolSize:function(a,b){switch(a.type){case "simplemarkersymbol":a.setSize(b);break;case "picturemarkersymbol":a.setWidth(b);a.setHeight(b);break;case "simplelinesymbol":case "cartographiclinesymbol":a.setWidth(b);break;case "simplefillsymbol":case "picturefillsymbol":a.outline&&a.outline.setWidth(b)}}})});
//@ sourceMappingURL=SymbolAger.js.map