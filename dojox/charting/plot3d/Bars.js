//>>built
define("dojox/charting/plot3d/Bars",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/Color","dojo/has","./Base"],function(n,f,g,p,q){return f("dojox.charting.plot3d.Bars",q,{constructor:function(a,d,b){this.depth="auto";this.gap=0;this.data=[];this.material={type:"plastic",finish:"dull",color:"lime"};b&&("depth"in b&&(this.depth=b.depth),"gap"in b&&(this.gap=b.gap),"material"in b&&(a=b.material,"string"==typeof a||a instanceof g?this.material.color=a:this.material=a))},getDepth:function(){if("auto"==
this.depth){var a=this.width;this.data&&this.data.length&&(a/=this.data.length);return a-2*this.gap}return this.depth},generate:function(a,d){if(!this.data)return this;for(var b=this.width/this.data.length,e=0,f="auto"==this.depth?b-2*this.gap:this.depth,h=this.height,c=this.data,g=Math.max,k=void 0,c="string"==typeof c?c.split(""):c,k=k||n.global,l=c[0],m=1;m<c.length;l=g.call(k,l,c[m++]));h/=l;d||(d=a.view);for(c=0;c<this.data.length;++c,e+=b)d.createCube({bottom:{x:e+this.gap,y:0,z:0},top:{x:e+
b-this.gap,y:this.data[c]*h,z:f}}).setFill(this.material);p("dojo-bidi")&&this._checkOrientation(a)}})});
//@ sourceMappingURL=Bars.js.map