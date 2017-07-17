Ember.TEMPLATES["definition2"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("				<button  class=\"btn btn-turquesa\" style=\"margin: 5px\" data-toggle=\"modal\" data-target=\"#newModal\">New  Event</button>\r\n				<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveExperiment", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(" class=\"btn btn-turquesa\" style=\"margin: 5px\">Save Experiment</button>\r\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<div class=\"col-sm-12\">\r\n<div class=\"row\">\r\n	<div class=\"col-sm-12\">\r\n		<div class=\"whitefont\">Duration</div>\r\n	</div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12 block\">\r\n        <div>\r\n            <input id=\"experimentDurationSlider\" class='simpleSlider' data-slider-id='experimentDurationSlider' type=\"text\" data-slider-min=\"0\" data-slider-max=\"100\" data-slider-step=\"0.1\" data-slider-value=\"14\"/>     \r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n	<div class=\"col-sm-12\">\r\n		<div class=\"hcontrols row\">\r\n			<div class=\"col-sm-8\">\r\n");
  stack1 = helpers['if'].call(depth0, "isModifiable", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("			</div>\r\n			<div class=\"col-sm-4\">\r\n				<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "gotoEnvironment", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(" class=\"btn btn-turquesa\" style=\"margin: 5px\">Go to Environment</button>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<div class=\"row\">\r\n");
  data.buffer.push(escapeExpression(((helpers.outlet || (depth0 && depth0.outlet) || helperMissing).call(depth0, "properties2", {"name":"outlet","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\r\n</div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"newModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n	<div class=\"modal-dialog\" role=\"document\">\r\n		<div class=\"modal-content color\">\r\n			<div class=\"modal-header\">\r\n				<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n				<h4 class=\"modal-title\" id=\"myModalLabel\">New Stimulus</h4>\r\n			</div>\r\n			<div class=\"row\">\r\n				<div class=\"col-sm-12\">\r\n					<div class=\"title centered\">Event Description</div>\r\n				</div>\r\n			</div>\r\n			<div class=\"row\">\r\n				<div class=\"col-sm-12 block\">\r\n					<input id=\"createName\" class=\"\"></input>\r\n				</div>\r\n			</div>\r\n			<div class=\"row\">\r\n				<div class=\"col-sm-12\">\r\n					<div class=\"title centered\">Event Duration</div>\r\n				</div>\r\n			</div>\r\n			<div class=\"row\">\r\n				<div class=\"col-sm-12 block\">\r\n					<select class=\"btn\" id=\"createDuration\" onchange=\"if (this.selectedIndex > -1) newEventTypeSelected(this.selectedIndex);\">\r\n						<option>Exact</option>\r\n						<option>Interval</option>\r\n						<option>Permanent</option>\r\n					</select>\r\n				</div>\r\n			</div>\r\n			<div class=\"row\">\r\n				<div class=\"col-sm-12\">\r\n					<div class=\"title centered\">Event Type</div>\r\n				</div>\r\n			</div>\r\n			<div class=\"row\">\r\n				<div class=\"col-sm-12 block\">\r\n					<select class=\"btn\" id=\"createType\">\r\n						<option id=\"mechanoOption\">Mechanosensation</option>\r\n						<option id=\"termoOption\" disabled>Termotaxis</option>\r\n						<option id=\"galvanoOption\" disabled>Galvanotaxis</option>\r\n						<option id=\"chemoOption\">Chemotaxis</option>\r\n						<option id=\"photoOption\" disabled>Phototaxis</option>\r\n					</select>\r\n				</div>\r\n			</div>\r\n			<div class=\"modal-footer\">\r\n				<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createEvent", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-turquesa\" data-dismiss=\"modal\">Create</button>\r\n				<button type=\"button\" class=\"btn btn-turquesa\" data-dismiss=\"modal\">Cancel</button>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>");
  return buffer;
},"useData":true});