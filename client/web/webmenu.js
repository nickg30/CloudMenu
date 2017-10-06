Template.WebMenu.onCreated(function(){
	var self = this;
	self.autorun(function (){
		self.subscribe('recipes');
	});
});

Template.WebMenu.helpers({
	col1: ()=> {
		return Recipes.find({"column":1});
	}
});
Template.WebMenu.helpers({
	col2: ()=> {
		return Recipes.find({"column":2});
	}
});
Template.WebMenu.helpers({
	col3: ()=> {
		return Recipes.find({"column":3});
	}
});

