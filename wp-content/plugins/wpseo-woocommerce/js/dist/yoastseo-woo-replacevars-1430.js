!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}({3:function(e,t){var n="replaceWooVariablePlugin",r=window.YoastReplaceVarPlugin&&window.YoastReplaceVarPlugin.ReplaceVar,i={},a=["content","title","snippet_title","snippet_meta","primary_category","data_page_title","data_meta_desc"];function c(e){var t=e.find("li.wpseo-primary-term input:checked");if(t.length>0)return t.first();var n=e.find("li input:checked");return n.length>0?n.first():null}var o=function(){this._app=YoastSEO.app,this._app.registerPlugin(n,{status:"ready"}),this._store=YoastSEO.store,this.registerReplacements(),this.registerModifications(this._app),this.registerEvents()};o.prototype.registerEvents=function(){jQuery(document).on("input","#_sku",this.declareReloaded.bind(this));["#taxonomy-product_brand","#pwb-branddiv"].forEach(this.registerBrandEvents.bind(this))},o.prototype.registerBrandEvents=function(e){(e=jQuery(e)).on("wpListAddEnd",".categorychecklist",this.declareReloaded.bind(this)),e.on("change","input[type=checkbox]",this.declareReloaded.bind(this)),e.on("click active",".wpseo-make-primary-term",this.declareReloaded.bind(this))},o.prototype.registerReplacements=function(){this.addReplacement(new r("%%wc_price%%","wc_price")),this.addReplacement(new r("%%wc_sku%%","wc_sku")),this.addReplacement(new r("%%wc_shortdesc%%","wc_shortdesc")),this.addReplacement(new r("%%wc_brand%%","wc_brand")),this.addReplacement(new r("%%wc_gtin8%%","wc_gtin8")),this.addReplacement(new r("%%wc_gtin12%%","wc_gtin12")),this.addReplacement(new r("%%wc_gtin13%%","wc_gtin13")),this.addReplacement(new r("%%wc_gtin14%%","wc_gtin14")),this.addReplacement(new r("%%wc_isbn%%","wc_isbn")),this.addReplacement(new r("%%wc_mpn%%","wc_mpn"))},o.prototype.registerModifications=function(e){for(var t=this.replaceVariables.bind(this),r=0;r<a.length;r++)e.registerModification(a[r],t,n,10)},o.prototype.replaceVariables=function(e){var t;return void 0!==e&&(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/%%wc_price%%/g,wpseoWooReplaceVarsL10n.price||"")).replace(/%%wc_sku%%/g,jQuery("#_sku").val())).replace(/%%wc_shortdesc%%/g,(t=document.getElementById("excerpt").value,"undefined"!=typeof tinyMCE&&null!==tinyMCE.get("excerpt")&&(t=tinyMCE.get("excerpt").getContent()),t))).replace(/%%wc_brand%%/g,function(){for(var e,t,n=["#product_brand-all","#pwb-brand-all"],r=n.length,i=0;i<r;i++){var a=jQuery(n[i]);if(0!==a.length){var o=c(a);if(null!==o&&o.length>0)return e=jQuery(o),t=void 0,(t=e.parent("label").clone()).children().remove(),t.text().trim()}}return""}())).replace(/%%wc_gtin8%%/g,jQuery("#yoast_identfier_gtin8").val())).replace(/%%wc_gtin12%%/g,jQuery("#yoast_identfier_gtin12").val())).replace(/%%wc_gtin13%%/g,jQuery("#yoast_identfier_gtin13").val())).replace(/%%wc_gtin14%%/g,jQuery("#yoast_identfier_gtin14").val())).replace(/%%wc_isbn%%/g,jQuery("#yoast_identfier_isbn").val())).replace(/%%wc_mpn%%/g,jQuery("#yoast_identfier_mpn").val()),e=this.replacePlaceholders(e)),e},o.prototype.addReplacement=function(e){i[e.placeholder]=e,this._store.dispatch({type:"SNIPPET_EDITOR_UPDATE_REPLACEMENT_VARIABLE",name:e.placeholder.replace(/^%%|%%$/g,""),value:e.placeholder})},o.prototype.declareReloaded=function(){this._app.pluginReloaded(n),this._store.dispatch({type:"SNIPPET_EDITOR_REFRESH"})},o.prototype.replacePlaceholders=function(e){for(var t=0;t<i.length;t++){var n=i[t];e=e.replace(new RegExp(n.getPlaceholder(!0),"g"),n.replacement)}return e},"undefined"==typeof YoastSEO||void 0===YoastSEO.app?jQuery(window).on("YoastSEO:ready",(function(){new o})):new o}});