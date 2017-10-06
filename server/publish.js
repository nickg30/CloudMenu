Meteor.publish('recipes', function(){
	return Recipes.find({});
});

Meteor.publish('SingleRecipe', function(id){
	check(id, String);
	return Recipes.find({_id: id});
});

Meteor.publish('cat1col1', function(){
	return Recipes.find({"column":1});
});
Meteor.publish('cat1col2', function(){
	return Recipes.find({"column":2});
});
Meteor.publish('cat1col3', function(){
	return Recipes.find({"column":3});
});