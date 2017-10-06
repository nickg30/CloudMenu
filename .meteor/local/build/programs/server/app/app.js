var require = meteorInstall({"lib":{"routes.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// lib/routes.js                                                     //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
if (Meteor.isClient) {                                               // 1
	Accounts.onLogin(function () {                                      // 2
		FlowRouter.go('recipe-book');                                      // 3
	});                                                                 // 4
	Accounts.onLogout(function () {                                     // 6
		FlowRouter.go('home');                                             // 7
	});                                                                 // 8
}                                                                    // 9
                                                                     //
FlowRouter.triggers.enter([function (context, redirect) {            // 10
	if (!Meteor.userId()) {                                             // 11
		FlowRouter.go('home');                                             // 12
	}                                                                   // 13
}]);                                                                 // 14
FlowRouter.route('/', {                                              // 16
	name: 'home',                                                       // 17
	action: function () {                                               // 18
		if (Meteor.userId()) {                                             // 19
			FlowRouter.go('/');                                               // 20
		}                                                                  // 21
                                                                     //
		GAnalytics.pageview();                                             // 22
		BlazeLayout.render('HomeLayout', {                                 // 23
			main: 'WebMenu'                                                   // 23
		});                                                                // 23
	}                                                                   // 24
});                                                                  // 16
FlowRouter.route('/profile', {                                       // 27
	name: 'profile',                                                    // 28
	action: function () {                                               // 29
		if (Meteor.userId()) {                                             // 30
			FlowRouter.go('profile');                                         // 31
		}                                                                  // 32
                                                                     //
		GAnalytics.pageview();                                             // 33
		BlazeLayout.render('MainLayout');                                  // 34
	}                                                                   // 35
});                                                                  // 27
FlowRouter.route('/recipe-book', {                                   // 38
	name: 'recipe-book',                                                // 39
	action: function () {                                               // 40
		if (Meteor.userId()) {                                             // 41
			FlowRouter.go('recipe-book');                                     // 42
		}                                                                  // 43
                                                                     //
		GAnalytics.pageview();                                             // 44
		BlazeLayout.render('MainLayout', {                                 // 45
			main: 'Recipes'                                                   // 45
		});                                                                // 45
	}                                                                   // 46
});                                                                  // 38
FlowRouter.route('/recipe/:id', {                                    // 49
	name: 'recipe',                                                     // 50
	action: function () {                                               // 51
		GAnalytics.pageview();                                             // 52
		BlazeLayout.render('MainLayout', {                                 // 53
			main: 'RecipeSingle'                                              // 53
		});                                                                // 53
	}                                                                   // 54
});                                                                  // 49
FlowRouter.route('/menu', {                                          // 57
	name: 'menu',                                                       // 58
	action: function () {                                               // 59
		BlazeLayout.render('MainLayout', {                                 // 60
			main: 'Menu'                                                      // 60
		});                                                                // 60
	}                                                                   // 61
});                                                                  // 57
FlowRouter.route('/shopping-list', {                                 // 64
	name: 'shopping-list',                                              // 65
	action: function () {                                               // 66
		BlazeLayout.render('MainLayout', {                                 // 67
			main: 'ShoppingList'                                              // 67
		});                                                                // 67
	}                                                                   // 68
});                                                                  // 64
///////////////////////////////////////////////////////////////////////

}},"collections":{"recipes.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// collections/recipes.js                                            //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Recipes = new Mongo.Collection('recipes');                           // 1
Recipes.allow({                                                      // 3
    insert: function (userId, doc) {                                 // 4
        return !!userId;                                             // 5
    },                                                               // 6
    update: function (userId, doc) {                                 // 7
        return !!userId;                                             // 8
    }                                                                // 9
});                                                                  // 3
Price = new SimpleSchema({                                           // 12
    desc: {                                                          // 13
        type: String,                                                // 14
        label: "Option",                                             // 15
        optional: true                                               // 16
    },                                                               // 13
    amount: {                                                        // 18
        label: "Amount",                                             // 19
        type: String                                                 // 20
    }                                                                // 18
});                                                                  // 12
RecipeSchema = new SimpleSchema({                                    // 24
    name: {                                                          // 25
        type: String,                                                // 26
        label: "Name"                                                // 27
    },                                                               // 25
    desc: {                                                          // 29
        type: String,                                                // 30
        label: "Description"                                         // 31
    },                                                               // 29
    price: {                                                         // 33
        type: String,                                                // 34
        label: "Price"                                               // 35
    },                                                               // 33
    // Price: {                                                      // 38
    //     type: [Price]                                             // 39
    // },                                                            // 40
    category: {                                                      // 41
        type: String,                                                // 42
        label: "Category",                                           // 43
        allowedValues: ["Island Cuisine", "Caribbean Specialties", "Special Burritos", "Seafood Specialties", "Specialties Salads & Side Orders", "Beverages"]
    },                                                               // 41
    column: {                                                        // 53
        type: Number,                                                // 54
        label: "Column",                                             // 55
        allowedValues: [1, 2, 3]                                     // 56
    },                                                               // 53
    special: {                                                       // 62
        type: Boolean,                                               // 63
        label: "Special",                                            // 64
        defaultValue: false,                                         // 65
        label: "Special Item"                                        // 66
    },                                                               // 62
    inMenu: {                                                        // 68
        type: Boolean,                                               // 69
        defaultValue: false,                                         // 70
        optional: true,                                              // 71
        autoform: {                                                  // 72
            type: "hidden"                                           // 73
        }                                                            // 72
    },                                                               // 68
    author: {                                                        // 76
        type: String,                                                // 77
        label: "Author",                                             // 78
        autoValue: function () {                                     // 79
            return this.userId;                                      // 80
        },                                                           // 81
        autoform: {                                                  // 82
            type: "hidden"                                           // 83
        }                                                            // 82
    },                                                               // 76
    createdAt: {                                                     // 86
        type: Date,                                                  // 87
        label: "Created At",                                         // 88
        autoValue: function () {                                     // 89
            return new Date();                                       // 90
        },                                                           // 91
        autoform: {                                                  // 92
            type: "hidden"                                           // 93
        }                                                            // 92
    }                                                                // 86
});                                                                  // 24
Meteor.methods({                                                     // 100
    toggleMenuItem: function (id, currentState) {                    // 101
        Recipes.update(id, {                                         // 102
            $set: {                                                  // 103
                inMenu: !currentState                                // 104
            }                                                        // 103
        });                                                          // 102
    },                                                               // 107
    deleteRecipe: function (id) {                                    // 108
        Recipes.remove(id);                                          // 109
    }                                                                // 110
});                                                                  // 100
Recipes.attachSchema(RecipeSchema);                                  // 113
///////////////////////////////////////////////////////////////////////

}},"server":{"init.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/init.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Meteor.startup(function () {});                                      // 1
///////////////////////////////////////////////////////////////////////

},"publish.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/publish.js                                                 //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Meteor.publish('recipes', function () {                              // 1
	return Recipes.find({});                                            // 2
});                                                                  // 3
Meteor.publish('SingleRecipe', function (id) {                       // 5
	check(id, String);                                                  // 6
	return Recipes.find({                                               // 7
		_id: id                                                            // 7
	});                                                                 // 7
});                                                                  // 8
Meteor.publish('cat1col1', function () {                             // 10
	return Recipes.find({                                               // 11
		"column": 1                                                        // 11
	});                                                                 // 11
});                                                                  // 12
Meteor.publish('cat1col2', function () {                             // 13
	return Recipes.find({                                               // 14
		"column": 2                                                        // 14
	});                                                                 // 14
});                                                                  // 15
Meteor.publish('cat1col3', function () {                             // 16
	return Recipes.find({                                               // 17
		"column": 3                                                        // 17
	});                                                                 // 17
});                                                                  // 18
///////////////////////////////////////////////////////////////////////

}},"intermediate.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// intermediate.js                                                   //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
if (Meteor.isServer) {                                               // 1
  Meteor.startup(function () {// code to run on server at startup    // 2
  });                                                                // 4
}                                                                    // 5
///////////////////////////////////////////////////////////////////////

}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./lib/routes.js");
require("./collections/recipes.js");
require("./server/init.js");
require("./server/publish.js");
require("./intermediate.js");
//# sourceMappingURL=app.js.map
