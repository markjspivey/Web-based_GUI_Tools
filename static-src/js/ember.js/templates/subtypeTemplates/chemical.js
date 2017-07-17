Ember.TEMPLATES["chemical"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<div class=\"row\">\r\n	<div class=\"btn-group\">\r\n		<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n			");
  stack1 = helpers._triageMustache.call(depth0, "typeName", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("<span class=\"caret\"></span>\r\n		</button>\r\n		<ul class=\"dropdown-menu\" role=\"menu\">\r\n			<li id=\"chemicalNone\" class=\"btn chemicalNone\">None</li>\r\n			<li id=\"chemicalBiotin\" class=\"btn chemicalBiotin\">Biotin</li>\r\n			<li id=\"chemicalNaCl\" class=\"btn chemicalNaCl\">NaCl</li>\r\n			<li id=\"chemicalEthanol\" class=\"btn chemicalEthanol\">Ethanol</li>\r\n			<li id=\"chemicalButanone\" class=\"btn chemicalButanone\">Butanone</li>\r\n			<li id=\"chemicalBenzaldehyde\" class=\"btn chemicalBenzaldehyde\">Benzaldehyde</li>\r\n			<li id=\"chemicalCuSO4\" class=\"btn chemicalCuSO4\">CuSO4</li>\r\n			<li id=\"chemicalDiacetyl\" class=\"btn chemicalDiacetyl\">Diacetyl</li>\r\n			<li id=\"chemicalDodecyl\" class=\"btn chemicalDodecyl\">Sodium dodecyl sulfate</li>\r\n			<li id=\"chemicalQuinine\" class=\"btn chemicalQuinine\">Quinine</li>\r\n			<li id=\"chemicalNaN3\" class=\"btn chemicalNaN3\">NaN3</li>\r\n		</ul>\r\n	</div>\r\n</div>\r\n");
  return buffer;
},"useData":true});