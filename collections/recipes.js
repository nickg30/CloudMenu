Recipes = new Mongo.Collection('recipes');

Recipes.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	}
});

Price = new SimpleSchema({
    desc: {
        type: String,
        label: "Option",
        optional: true,
    },
    amount: {
        label: "Amount",
        type: String
    }
});

RecipeSchema =  new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    desc: {
        type: String,
        label: "Description"
    },
    price: {
        type: String,
        label: "Price",
        
    },
    // Price: {
    //     type: [Price]
    // },
    category: {
        type: String,
        label: "Category",
        allowedValues: [
            "Island Cuisine",
            "Caribbean Specialties",
            "Special Burritos",
            "Seafood Specialties",
            "Specialties Salads & Side Orders",
            "Beverages"
        ]
    },
    column: {
        type: Number,
        label: "Column",
        allowedValues: [
            1,
            2,
            3
        ]
    },
    special: {
        type: Boolean,
        label: "Special",
        defaultValue: false,
        label: "Special Item"
    },
    inMenu: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type: "hidden"
        }
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function() {
            return this.userId;
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date();
        },
        autoform: {
            type: "hidden"
        }
        
    }
});


Meteor.methods({
	toggleMenuItem: function(id, currentState){
		Recipes.update(id, {
			$set: {
				inMenu: !currentState
			}
		});
	},
	deleteRecipe: function(id){
		Recipes.remove(id);
	}
});

Recipes.attachSchema(RecipeSchema);