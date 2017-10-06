var require = meteorInstall({"client":{"layouts":{"template.HomeLayout.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/layouts/template.HomeLayout.js                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("HomeLayout");                                                                                   // 2
Template["HomeLayout"] = new Template("Template.HomeLayout", (function() {                                            // 3
  var view = this;                                                                                                    // 4
  return [ Spacebars.include(view.lookupTemplate("Header")), HTML.Raw('\n\t\t\t<div class="billboard">\n\t\t\t\t<h1>Meteor Box</h1>\n\t\t\t\t<h4>Quick, fresh, chef curated meals from around the world delivered to your door...</h4>\n\t\t\t</div>\n\t\t\t'), HTML.MAIN({
    class: "web-main-layout"                                                                                          // 6
  }, "\n\t\t\t\t", Blaze._TemplateWith(function() {                                                                   // 7
    return {                                                                                                          // 8
      template: Spacebars.call(view.lookup("main"))                                                                   // 9
    };                                                                                                                // 10
  }, function() {                                                                                                     // 11
    return Spacebars.include(function() {                                                                             // 12
      return Spacebars.call(Template.__dynamic);                                                                      // 13
    });                                                                                                               // 14
  }), "\n\t\t\t"), HTML.Raw("\n\t\t\t<footer>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>About Us</li>\n\t\t\t\t\t<li>Contact</li>\n\t\t\t\t\t<li>Legal</li>\n\t\t\t\t</ul>\n\t\t\t\t<p>Meteor Box 2017</p>\n\t\t\t</footer>") ];
}));                                                                                                                  // 16
                                                                                                                      // 17
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.MainLayout.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/layouts/template.MainLayout.js                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("MainLayout");                                                                                   // 2
Template["MainLayout"] = new Template("Template.MainLayout", (function() {                                            // 3
  var view = this;                                                                                                    // 4
  return [ Spacebars.include(view.lookupTemplate("Header")), "\n \t", Spacebars.include(view.lookupTemplate("SideNav")), "\n \t", HTML.MAIN({
    class: "main-layout"                                                                                              // 6
  }, "\n\t\t", Blaze._TemplateWith(function() {                                                                       // 7
    return {                                                                                                          // 8
      template: Spacebars.call(view.lookup("main"))                                                                   // 9
    };                                                                                                                // 10
  }, function() {                                                                                                     // 11
    return Spacebars.include(function() {                                                                             // 12
      return Spacebars.call(Template.__dynamic);                                                                      // 13
    });                                                                                                               // 14
  }), "\n \t") ];                                                                                                     // 15
}));                                                                                                                  // 16
                                                                                                                      // 17
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"partials":{"template.Header.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/partials/template.Header.js                                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("Header");                                                                                       // 2
Template["Header"] = new Template("Template.Header", (function() {                                                    // 3
  var view = this;                                                                                                    // 4
  return HTML.HEADER(HTML.Raw('\n\t\t<img class="logo" src="../img/logo-small.png">\n\t\t'), Blaze._TemplateWith(function() {
    return {                                                                                                          // 6
      align: Spacebars.call("right")                                                                                  // 7
    };                                                                                                                // 8
  }, function() {                                                                                                     // 9
    return Spacebars.include(view.lookupTemplate("loginButtons"));                                                    // 10
  }), "\n\t");                                                                                                        // 11
}));                                                                                                                  // 12
                                                                                                                      // 13
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.SideNav.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/partials/template.SideNav.js                                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("SideNav");                                                                                      // 2
Template["SideNav"] = new Template("Template.SideNav", (function() {                                                  // 3
  var view = this;                                                                                                    // 4
  return HTML.Raw('<nav class="side-nav">\n\t\t<ul>\n\t\t\t<li><a href="/recipe-book"><i class="fa fa-list"></i>Menu</a></li>\n\t\t\t<li><a href="/menu"><i class="fa fa-map-o"></i>My Box</a></li>\n\t\t\t<li><a href="/shopping-list"><i class="fa fa-shopping-cart"></i>Checkout</a></li>\n\t\t</ul>\n\t</nav>');
}));                                                                                                                  // 6
                                                                                                                      // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"recipes":{"template.Menu.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/recipes/template.Menu.js                                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("Menu");                                                                                         // 2
Template["Menu"] = new Template("Template.Menu", (function() {                                                        // 3
  var view = this;                                                                                                    // 4
  return [ HTML.Raw('<h1 class="page-title">My Current Menu</h1>\n\t'), Blaze.Each(function() {                       // 5
    return Spacebars.call(view.lookup("recipes"));                                                                    // 6
  }, function() {                                                                                                     // 7
    return [ "\n\t\t", Spacebars.include(view.lookupTemplate("MenuItem")), "\n\t" ];                                  // 8
  }, function() {                                                                                                     // 9
    return [ "\n\t\t", HTML.H2("Please add ", HTML.A({                                                                // 10
      href: "/recipe-book"                                                                                            // 11
    }, "items"), " to your menu."), "\n\t" ];                                                                         // 12
  }) ];                                                                                                               // 13
}));                                                                                                                  // 14
                                                                                                                      // 15
Template.__checkName("MenuItem");                                                                                     // 16
Template["MenuItem"] = new Template("Template.MenuItem", (function() {                                                // 17
  var view = this;                                                                                                    // 18
  return HTML.DIV({                                                                                                   // 19
    class: "menu-item"                                                                                                // 20
  }, "\n\t\t", HTML.SPAN({                                                                                            // 21
    class: "boxPriceMenu"                                                                                             // 22
  }, Blaze.View("lookup:price", function() {                                                                          // 23
    return Spacebars.mustache(view.lookup("price"));                                                                  // 24
  })), "\n\t\t", HTML.H3(Blaze.View("lookup:name", function() {                                                       // 25
    return Spacebars.mustache(view.lookup("name"));                                                                   // 26
  })), "\n\t\t", HTML.P(Blaze.View("lookup:desc", function() {                                                        // 27
    return Spacebars.mustache(view.lookup("desc"));                                                                   // 28
  })), "\n\t");                                                                                                       // 29
}));                                                                                                                  // 30
                                                                                                                      // 31
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.NewRecipe.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/recipes/template.NewRecipe.js                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("NewRecipe");                                                                                    // 2
Template["NewRecipe"] = new Template("Template.NewRecipe", (function() {                                              // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    class: "new-recipe-container"                                                                                     // 6
  }, HTML.Raw('\n\t\t<i class="fa fa-close"></i>\n\t\t'), Blaze._TemplateWith(function() {                            // 7
    return {                                                                                                          // 8
      collection: Spacebars.call("Recipes"),                                                                          // 9
      id: Spacebars.call("insertRecipeForm"),                                                                         // 10
      type: Spacebars.call("insert"),                                                                                 // 11
      class: Spacebars.call("new-recipe-form")                                                                        // 12
    };                                                                                                                // 13
  }, function() {                                                                                                     // 14
    return Spacebars.include(view.lookupTemplate("quickForm"));                                                       // 15
  }), "\n\t");                                                                                                        // 16
}));                                                                                                                  // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.Recipe.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/recipes/template.Recipe.js                                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("Recipe");                                                                                       // 2
Template["Recipe"] = new Template("Template.Recipe", (function() {                                                    // 3
  var view = this;                                                                                                    // 4
  return HTML.ARTICLE({                                                                                               // 5
    class: function() {                                                                                               // 6
      return [ "recipe ", Blaze.If(function() {                                                                       // 7
        return Spacebars.call(view.lookup("inMenu"));                                                                 // 8
      }, function() {                                                                                                 // 9
        return "in-menu";                                                                                             // 10
      }) ];                                                                                                           // 11
    }                                                                                                                 // 12
  }, "\n\t\t", HTML.H3(Blaze.View("lookup:name", function() {                                                         // 13
    return Spacebars.mustache(view.lookup("name"));                                                                   // 14
  })), "\n\t\t", Blaze.If(function() {                                                                                // 15
    return Spacebars.call(view.lookup("editMode"));                                                                   // 16
  }, function() {                                                                                                     // 17
    return [ "\n\t\t\t", Blaze._TemplateWith(function() {                                                             // 18
      return {                                                                                                        // 19
        collection: Spacebars.call("Recipes"),                                                                        // 20
        id: Spacebars.call(view.lookup("updateRecipeId")),                                                            // 21
        type: Spacebars.call("update"),                                                                               // 22
        doc: Spacebars.call(view.lookup(".")),                                                                        // 23
        autosave: Spacebars.call(true)                                                                                // 24
      };                                                                                                              // 25
    }, function() {                                                                                                   // 26
      return Spacebars.include(view.lookupTemplate("quickForm"));                                                     // 27
    }), "\n\t\t" ];                                                                                                   // 28
  }, function() {                                                                                                     // 29
    return [ "\n\t\t\t", HTML.P(Blaze.View("lookup:desc", function() {                                                // 30
      return Spacebars.mustache(view.lookup("desc"));                                                                 // 31
    })), "\n\t\t\t", HTML.P("\n\t\t\t\t", Blaze.Each(function() {                                                     // 32
      return Spacebars.call(view.lookup("ingredients"));                                                              // 33
    }, function() {                                                                                                   // 34
      return [ "\n\t\t\t\t\t", HTML.SPAN({                                                                            // 35
        class: "ingredient"                                                                                           // 36
      }, Blaze.View("lookup:name", function() {                                                                       // 37
        return Spacebars.mustache(view.lookup("name"));                                                               // 38
      }), " - ", Blaze.View("lookup:amount", function() {                                                             // 39
        return Spacebars.mustache(view.lookup("amount"));                                                             // 40
      })), "\n\t\t\t\t" ];                                                                                            // 41
    }), "\n\t\t\t\t", HTML.HR(), "\n\t\t\t\t", HTML.H4(HTML.STRONG("Total: ", Blaze.View("lookup:price", function() {
      return Spacebars.mustache(view.lookup("price"));                                                                // 43
    }), " ")), "\n\t\t\t"), "\n\t\t\t", HTML.Comment(' <a href="/recipe/{{_id}}">View Details</a> '), "\n\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("inMenu"));                                                                   // 45
    }, function() {                                                                                                   // 46
      return [ "\n\t\t\t\t", HTML.BUTTON({                                                                            // 47
        class: "btn-deny toggle-menu"                                                                                 // 48
      }, "Remove from Box"), "\n\t\t\t" ];                                                                            // 49
    }, function() {                                                                                                   // 50
      return [ "\n\t\t\t \t", HTML.BUTTON({                                                                           // 51
        class: "btn-primary toggle-menu"                                                                              // 52
      }, "Add to Box"), "\n\t\t\t" ];                                                                                 // 53
    }), "\n\t\t" ];                                                                                                   // 54
  }), HTML.Raw('\n\t\t\t<i class="fa fa-trash"></i>\n\t\t\t<i class="fa fa-pencil"></i>\n\t'));                       // 55
}));                                                                                                                  // 56
                                                                                                                      // 57
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.RecipeSingle.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/recipes/template.RecipeSingle.js                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("RecipeSingle");                                                                                 // 2
Template["RecipeSingle"] = new Template("Template.RecipeSingle", (function() {                                        // 3
  var view = this;                                                                                                    // 4
  return HTML.H1(Blaze.View("lookup:recipe.name", function() {                                                        // 5
    return Spacebars.mustache(Spacebars.dot(view.lookup("recipe"), "name"));                                          // 6
  }));                                                                                                                // 7
}));                                                                                                                  // 8
                                                                                                                      // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.Recipes.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/recipes/template.Recipes.js                                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("Recipes");                                                                                      // 2
Template["Recipes"] = new Template("Template.Recipes", (function() {                                                  // 3
  var view = this;                                                                                                    // 4
  return [ Blaze.If(function() {                                                                                      // 5
    return Spacebars.dataMustache(Spacebars.dot(view.lookup("$"), "Session", "get"), "newRecipe");                    // 6
  }, function() {                                                                                                     // 7
    return [ "\n\t\t", Spacebars.include(view.lookupTemplate("NewRecipe")), "\n\t" ];                                 // 8
  }, function() {                                                                                                     // 9
    return [ "\n\t\t", HTML.BUTTON({                                                                                  // 10
      class: "new-recipe"                                                                                             // 11
    }, "New Box"), "\n\t" ];                                                                                          // 12
  }), "\t\n\t", HTML.SECTION({                                                                                        // 13
    class: "recipes"                                                                                                  // 14
  }, "\n\t\t", Blaze.If(function() {                                                                                  // 15
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                              // 16
  }, function() {                                                                                                     // 17
    return [ "\n\t\t\t", Blaze.Each(function() {                                                                      // 18
      return Spacebars.call(view.lookup("recipes"));                                                                  // 19
    }, function() {                                                                                                   // 20
      return [ "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("Recipe")), "\n\t\t\t" ];                          // 21
    }), "\n\t\t" ];                                                                                                   // 22
  }, function() {                                                                                                     // 23
    return [ "\n\t\t\t", HTML.P("Loading"), "\n\t\t" ];                                                               // 24
  }), "\n\t") ];                                                                                                      // 25
}));                                                                                                                  // 26
                                                                                                                      // 27
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.ShoppingList.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/recipes/template.ShoppingList.js                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("ShoppingList");                                                                                 // 2
Template["ShoppingList"] = new Template("Template.ShoppingList", (function() {                                        // 3
  var view = this;                                                                                                    // 4
  return [ HTML.Raw('<h1 class="page-title">Review and Purchase</h1>\n\t'), HTML.UL({                                 // 5
    class: "shopping-list"                                                                                            // 6
  }, "\n\t\t", Blaze.Each(function() {                                                                                // 7
    return Spacebars.call(view.lookup("shoppingList"));                                                               // 8
  }, function() {                                                                                                     // 9
    return [ "\n\t\t\t", Blaze.Each(function() {                                                                      // 10
      return Spacebars.call(view.lookup("ingredients"));                                                              // 11
    }, function() {                                                                                                   // 12
      return [ "\n\t\t\t\t", HTML.LI(Blaze.View("lookup:name", function() {                                           // 13
        return Spacebars.mustache(view.lookup("name"));                                                               // 14
      }), " - ", HTML.SPAN({                                                                                          // 15
        class: "amount"                                                                                               // 16
      }, Blaze.View("lookup:amount", function() {                                                                     // 17
        return Spacebars.mustache(view.lookup("amount"));                                                             // 18
      }))), "\n\t\t\t" ];                                                                                             // 19
    }), "\n\n\t\t" ];                                                                                                 // 20
  }, function() {                                                                                                     // 21
    return [ "\n\t\t\t", HTML.LI("Uh, oh. Please add ", HTML.A({                                                      // 22
      href: "/recipe-book"                                                                                            // 23
    }, "entrees"), " to your box."), "\n\t\t" ];                                                                      // 24
  }), "\n\t\t", Blaze.If(function() {                                                                                 // 25
    return Spacebars.call(view.lookup("checkoutButton"));                                                             // 26
  }, function() {                                                                                                     // 27
    return [ "\n\t\t", HTML.BUTTON("checkout"), "\n\t\t" ];                                                           // 28
  }), "\n\t") ];                                                                                                      // 29
}));                                                                                                                  // 30
                                                                                                                      // 31
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"NewRecipe.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/recipes/NewRecipe.js                                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.NewRecipe.events({                                                                                           // 1
	'click .fa-close': function () {                                                                                     // 2
		Session.set('newRecipe', false);                                                                                    // 3
	}                                                                                                                    // 4
});                                                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"RecipeSingle.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/recipes/RecipeSingle.js                                                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.RecipeSingle.onCreated(function () {                                                                         // 1
	var self = this;                                                                                                     // 2
	self.autorun(function () {                                                                                           // 3
		var id = FlowRouter.getParam('id');                                                                                 // 4
		self.subscribe('SingleRecipe', id);                                                                                 // 5
	});                                                                                                                  // 6
});                                                                                                                   // 7
Template.RecipeSingle.helpers({                                                                                       // 9
	recipe: function () {                                                                                                // 10
		var id = FlowRouter.getParam('id');                                                                                 // 11
		return Recipes.findOne({                                                                                            // 12
			_id: id                                                                                                            // 12
		});                                                                                                                 // 12
	}                                                                                                                    // 13
});                                                                                                                   // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ShoppingList.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/recipes/ShoppingList.js                                                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.ShoppingList.onCreated(function () {                                                                         // 1
	var self = this;                                                                                                     // 2
	self.autorun(function () {                                                                                           // 3
		self.subscribe('recipes');                                                                                          // 4
	});                                                                                                                  // 5
});                                                                                                                   // 6
Template.ShoppingList.helpers({                                                                                       // 8
	shoppingList: function () {                                                                                          // 9
		return Recipes.find({                                                                                               // 10
			inMenu: true                                                                                                       // 10
		});                                                                                                                 // 10
	},                                                                                                                   // 11
	checkoutButton: function () {                                                                                        // 12
		return Recipes.findOne({                                                                                            // 13
			inMenu: true                                                                                                       // 13
		});                                                                                                                 // 13
	}                                                                                                                    // 14
});                                                                                                                   // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"menu.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/recipes/menu.js                                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.Menu.onCreated(function () {                                                                                 // 1
	var self = this;                                                                                                     // 2
	self.autorun(function () {                                                                                           // 3
		self.subscribe('recipes');                                                                                          // 4
	});                                                                                                                  // 5
});                                                                                                                   // 6
Template.Menu.helpers({                                                                                               // 8
	recipes: function () {                                                                                               // 9
		return Recipes.find({                                                                                               // 10
			inMenu: true                                                                                                       // 10
		});                                                                                                                 // 10
	}                                                                                                                    // 11
});                                                                                                                   // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"recipe.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/recipes/recipe.js                                                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.Recipe.onCreated(function () {                                                                               // 1
	this.editMode = new ReactiveVar(false); //	this.editMode = new ReactiveVar();                                        // 2
	// this.editMode.set(false);                                                                                         // 4
});                                                                                                                   // 5
Template.Recipe.helpers({                                                                                             // 7
	updateRecipeId: function () {                                                                                        // 8
		return this._id;                                                                                                    // 9
	},                                                                                                                   // 10
	editMode: function () {                                                                                              // 11
		return Template.instance().editMode.get();                                                                          // 12
	}                                                                                                                    // 13
});                                                                                                                   // 7
Template.Recipe.events({                                                                                              // 16
	'click .toggle-menu': function () {                                                                                  // 17
		Meteor.call('toggleMenuItem', this._id, this.inMenu, this.menuCount);                                               // 18
	},                                                                                                                   // 19
	'click .fa-trash': function () {                                                                                     // 20
		Meteor.call('deleteRecipe', this._id);                                                                              // 21
	},                                                                                                                   // 22
	'click .fa-pencil': function (event, template) {                                                                     // 23
		template.editMode.set(!template.editMode.get());                                                                    // 24
	}                                                                                                                    // 25
});                                                                                                                   // 16
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"recipes.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/recipes/recipes.js                                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.Recipes.onCreated(function () {                                                                              // 1
	var self = this;                                                                                                     // 2
	self.autorun(function () {                                                                                           // 3
		self.subscribe('recipes');                                                                                          // 4
	});                                                                                                                  // 5
});                                                                                                                   // 6
Template.Recipes.helpers({                                                                                            // 8
	recipes: function () {                                                                                               // 9
		return Recipes.find({});                                                                                            // 10
	}                                                                                                                    // 11
});                                                                                                                   // 8
Template.Recipes.events({                                                                                             // 14
	'click .new-recipe': function () {                                                                                   // 15
		Session.set('newRecipe', true);                                                                                     // 16
	}                                                                                                                    // 17
});                                                                                                                   // 14
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"web":{"template.WebMenu.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/web/template.WebMenu.js                                                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("WebMenu");                                                                                      // 2
Template["WebMenu"] = new Template("Template.WebMenu", (function() {                                                  // 3
  var view = this;                                                                                                    // 4
  return [ HTML.Raw('<h1 class="web-page-title">My Current Menu</h1>\n    \n    <!-- Column 1 -->\n    '), HTML.DIV({
    class: "col-md-4 col-sm-4"                                                                                        // 6
  }, "\n\t", Blaze.Each(function() {                                                                                  // 7
    return Spacebars.call(view.lookup("col1"));                                                                       // 8
  }, function() {                                                                                                     // 9
    return [ "\n        ", Spacebars.include(view.lookupTemplate("WebMenuColOne")), "\n\t" ];                         // 10
  }, function() {                                                                                                     // 11
    return [ "\n\t\t", HTML.H1("Empty"), "\n    " ];                                                                  // 12
  }), "\n    "), HTML.Raw("\n    <!-- Column 2 -->\n    "), HTML.DIV({                                                // 13
    class: "col-md-4 col-sm-4"                                                                                        // 14
  }, "\n    ", Blaze.Each(function() {                                                                                // 15
    return Spacebars.call(view.lookup("col2"));                                                                       // 16
  }, function() {                                                                                                     // 17
    return [ "\n    ", Spacebars.include(view.lookupTemplate("WebMenuColTwo")), "\n    " ];                           // 18
  }, function() {                                                                                                     // 19
    return [ "\n        ", HTML.H1("Empty"), "\n    " ];                                                              // 20
  }), "\n    "), HTML.Raw("\n    <!-- Column 3 -->\n    "), HTML.DIV({                                                // 21
    class: "col-md-4 col-sm-4"                                                                                        // 22
  }, "\n    ", Blaze.Each(function() {                                                                                // 23
    return Spacebars.call(view.lookup("col3"));                                                                       // 24
  }, function() {                                                                                                     // 25
    return [ "\n    ", Spacebars.include(view.lookupTemplate("WebMenuColThree")), "\n    " ];                         // 26
  }, function() {                                                                                                     // 27
    return [ "\n        ", HTML.H1("Empty"), "\n    " ];                                                              // 28
  }), "\n    ") ];                                                                                                    // 29
}));                                                                                                                  // 30
                                                                                                                      // 31
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.WebMenuCol.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/web/template.WebMenuCol.js                                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("WebMenuColOne");                                                                                // 2
Template["WebMenuColOne"] = new Template("Template.WebMenuColOne", (function() {                                      // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    class: "menu-content"                                                                                             // 6
  }, "\n            ", HTML.DIV({                                                                                     // 7
    class: "menu-heading"                                                                                             // 8
  }, Blaze.View("lookup:name", function() {                                                                           // 9
    return Spacebars.mustache(view.lookup("name"));                                                                   // 10
  })), "\n            ", HTML.DIV({                                                                                   // 11
    class: "description"                                                                                              // 12
  }, Blaze.View("lookup:desc", function() {                                                                           // 13
    return Spacebars.mustache(view.lookup("desc"));                                                                   // 14
  }), "\n            ", HTML.DIV({                                                                                    // 15
    class: "price"                                                                                                    // 16
  }, Blaze.View("lookup:price", function() {                                                                          // 17
    return Spacebars.mustache(view.lookup("price"));                                                                  // 18
  })), "\n            "), "\n        ");                                                                              // 19
}));                                                                                                                  // 20
                                                                                                                      // 21
Template.__checkName("WebMenuColTwo");                                                                                // 22
Template["WebMenuColTwo"] = new Template("Template.WebMenuColTwo", (function() {                                      // 23
  var view = this;                                                                                                    // 24
  return HTML.DIV({                                                                                                   // 25
    class: "menu-content"                                                                                             // 26
  }, "\n            ", HTML.DIV({                                                                                     // 27
    class: "menu-heading"                                                                                             // 28
  }, Blaze.View("lookup:name", function() {                                                                           // 29
    return Spacebars.mustache(view.lookup("name"));                                                                   // 30
  })), "\n            ", HTML.DIV({                                                                                   // 31
    class: "description"                                                                                              // 32
  }, Blaze.View("lookup:desc", function() {                                                                           // 33
    return Spacebars.mustache(view.lookup("desc"));                                                                   // 34
  }), "\n            ", HTML.DIV({                                                                                    // 35
    class: "price"                                                                                                    // 36
  }, Blaze.View("lookup:price", function() {                                                                          // 37
    return Spacebars.mustache(view.lookup("price"));                                                                  // 38
  })), "\n            "), "\n        ");                                                                              // 39
}));                                                                                                                  // 40
                                                                                                                      // 41
Template.__checkName("WebMenuColThree");                                                                              // 42
Template["WebMenuColThree"] = new Template("Template.WebMenuColThree", (function() {                                  // 43
  var view = this;                                                                                                    // 44
  return HTML.DIV({                                                                                                   // 45
    class: "menu-content"                                                                                             // 46
  }, "\n            ", HTML.DIV({                                                                                     // 47
    class: "menu-heading"                                                                                             // 48
  }, Blaze.View("lookup:name", function() {                                                                           // 49
    return Spacebars.mustache(view.lookup("name"));                                                                   // 50
  })), "\n            ", HTML.DIV({                                                                                   // 51
    class: "description"                                                                                              // 52
  }, Blaze.View("lookup:desc", function() {                                                                           // 53
    return Spacebars.mustache(view.lookup("desc"));                                                                   // 54
  }), "\n            ", HTML.DIV({                                                                                    // 55
    class: "price"                                                                                                    // 56
  }, Blaze.View("lookup:price", function() {                                                                          // 57
    return Spacebars.mustache(view.lookup("price"));                                                                  // 58
  })), "\n            "), "\n        ");                                                                              // 59
}));                                                                                                                  // 60
                                                                                                                      // 61
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"webmenu.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/web/webmenu.js                                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.WebMenu.onCreated(function () {                                                                              // 1
	var self = this;                                                                                                     // 2
	self.autorun(function () {                                                                                           // 3
		self.subscribe('recipes');                                                                                          // 4
	});                                                                                                                  // 5
});                                                                                                                   // 6
Template.WebMenu.helpers({                                                                                            // 8
	col1: function () {                                                                                                  // 9
		return Recipes.find({                                                                                               // 10
			"column": 1                                                                                                        // 10
		});                                                                                                                 // 10
	}                                                                                                                    // 11
});                                                                                                                   // 8
Template.WebMenu.helpers({                                                                                            // 13
	col2: function () {                                                                                                  // 14
		return Recipes.find({                                                                                               // 15
			"column": 2                                                                                                        // 15
		});                                                                                                                 // 15
	}                                                                                                                    // 16
});                                                                                                                   // 13
Template.WebMenu.helpers({                                                                                            // 18
	col3: function () {                                                                                                  // 19
		return Recipes.find({                                                                                               // 20
			"column": 3                                                                                                        // 20
		});                                                                                                                 // 20
	}                                                                                                                    // 21
});                                                                                                                   // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"lib":{"routes.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// lib/routes.js                                                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
if (Meteor.isClient) {                                                                                                // 1
	Accounts.onLogin(function () {                                                                                       // 2
		FlowRouter.go('recipe-book');                                                                                       // 3
	});                                                                                                                  // 4
	Accounts.onLogout(function () {                                                                                      // 6
		FlowRouter.go('home');                                                                                              // 7
	});                                                                                                                  // 8
}                                                                                                                     // 9
                                                                                                                      //
FlowRouter.triggers.enter([function (context, redirect) {                                                             // 10
	if (!Meteor.userId()) {                                                                                              // 11
		FlowRouter.go('home');                                                                                              // 12
	}                                                                                                                    // 13
}]);                                                                                                                  // 14
FlowRouter.route('/', {                                                                                               // 16
	name: 'home',                                                                                                        // 17
	action: function () {                                                                                                // 18
		if (Meteor.userId()) {                                                                                              // 19
			FlowRouter.go('/');                                                                                                // 20
		}                                                                                                                   // 21
                                                                                                                      //
		GAnalytics.pageview();                                                                                              // 22
		BlazeLayout.render('HomeLayout', {                                                                                  // 23
			main: 'WebMenu'                                                                                                    // 23
		});                                                                                                                 // 23
	}                                                                                                                    // 24
});                                                                                                                   // 16
FlowRouter.route('/profile', {                                                                                        // 27
	name: 'profile',                                                                                                     // 28
	action: function () {                                                                                                // 29
		if (Meteor.userId()) {                                                                                              // 30
			FlowRouter.go('profile');                                                                                          // 31
		}                                                                                                                   // 32
                                                                                                                      //
		GAnalytics.pageview();                                                                                              // 33
		BlazeLayout.render('MainLayout');                                                                                   // 34
	}                                                                                                                    // 35
});                                                                                                                   // 27
FlowRouter.route('/recipe-book', {                                                                                    // 38
	name: 'recipe-book',                                                                                                 // 39
	action: function () {                                                                                                // 40
		if (Meteor.userId()) {                                                                                              // 41
			FlowRouter.go('recipe-book');                                                                                      // 42
		}                                                                                                                   // 43
                                                                                                                      //
		GAnalytics.pageview();                                                                                              // 44
		BlazeLayout.render('MainLayout', {                                                                                  // 45
			main: 'Recipes'                                                                                                    // 45
		});                                                                                                                 // 45
	}                                                                                                                    // 46
});                                                                                                                   // 38
FlowRouter.route('/recipe/:id', {                                                                                     // 49
	name: 'recipe',                                                                                                      // 50
	action: function () {                                                                                                // 51
		GAnalytics.pageview();                                                                                              // 52
		BlazeLayout.render('MainLayout', {                                                                                  // 53
			main: 'RecipeSingle'                                                                                               // 53
		});                                                                                                                 // 53
	}                                                                                                                    // 54
});                                                                                                                   // 49
FlowRouter.route('/menu', {                                                                                           // 57
	name: 'menu',                                                                                                        // 58
	action: function () {                                                                                                // 59
		BlazeLayout.render('MainLayout', {                                                                                  // 60
			main: 'Menu'                                                                                                       // 60
		});                                                                                                                 // 60
	}                                                                                                                    // 61
});                                                                                                                   // 57
FlowRouter.route('/shopping-list', {                                                                                  // 64
	name: 'shopping-list',                                                                                               // 65
	action: function () {                                                                                                // 66
		BlazeLayout.render('MainLayout', {                                                                                  // 67
			main: 'ShoppingList'                                                                                               // 67
		});                                                                                                                 // 67
	}                                                                                                                    // 68
});                                                                                                                   // 64
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"collections":{"recipes.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// collections/recipes.js                                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Recipes = new Mongo.Collection('recipes');                                                                            // 1
Recipes.allow({                                                                                                       // 3
    insert: function (userId, doc) {                                                                                  // 4
        return !!userId;                                                                                              // 5
    },                                                                                                                // 6
    update: function (userId, doc) {                                                                                  // 7
        return !!userId;                                                                                              // 8
    }                                                                                                                 // 9
});                                                                                                                   // 3
Price = new SimpleSchema({                                                                                            // 12
    desc: {                                                                                                           // 13
        type: String,                                                                                                 // 14
        label: "Option",                                                                                              // 15
        optional: true                                                                                                // 16
    },                                                                                                                // 13
    amount: {                                                                                                         // 18
        label: "Amount",                                                                                              // 19
        type: String                                                                                                  // 20
    }                                                                                                                 // 18
});                                                                                                                   // 12
RecipeSchema = new SimpleSchema({                                                                                     // 24
    name: {                                                                                                           // 25
        type: String,                                                                                                 // 26
        label: "Name"                                                                                                 // 27
    },                                                                                                                // 25
    desc: {                                                                                                           // 29
        type: String,                                                                                                 // 30
        label: "Description"                                                                                          // 31
    },                                                                                                                // 29
    price: {                                                                                                          // 33
        type: String,                                                                                                 // 34
        label: "Price"                                                                                                // 35
    },                                                                                                                // 33
    // Price: {                                                                                                       // 38
    //     type: [Price]                                                                                              // 39
    // },                                                                                                             // 40
    category: {                                                                                                       // 41
        type: String,                                                                                                 // 42
        label: "Category",                                                                                            // 43
        allowedValues: ["Island Cuisine", "Caribbean Specialties", "Special Burritos", "Seafood Specialties", "Specialties Salads & Side Orders", "Beverages"]
    },                                                                                                                // 41
    column: {                                                                                                         // 53
        type: Number,                                                                                                 // 54
        label: "Column",                                                                                              // 55
        allowedValues: [1, 2, 3]                                                                                      // 56
    },                                                                                                                // 53
    special: {                                                                                                        // 62
        type: Boolean,                                                                                                // 63
        label: "Special",                                                                                             // 64
        defaultValue: false,                                                                                          // 65
        label: "Special Item"                                                                                         // 66
    },                                                                                                                // 62
    inMenu: {                                                                                                         // 68
        type: Boolean,                                                                                                // 69
        defaultValue: false,                                                                                          // 70
        optional: true,                                                                                               // 71
        autoform: {                                                                                                   // 72
            type: "hidden"                                                                                            // 73
        }                                                                                                             // 72
    },                                                                                                                // 68
    author: {                                                                                                         // 76
        type: String,                                                                                                 // 77
        label: "Author",                                                                                              // 78
        autoValue: function () {                                                                                      // 79
            return this.userId;                                                                                       // 80
        },                                                                                                            // 81
        autoform: {                                                                                                   // 82
            type: "hidden"                                                                                            // 83
        }                                                                                                             // 82
    },                                                                                                                // 76
    createdAt: {                                                                                                      // 86
        type: Date,                                                                                                   // 87
        label: "Created At",                                                                                          // 88
        autoValue: function () {                                                                                      // 89
            return new Date();                                                                                        // 90
        },                                                                                                            // 91
        autoform: {                                                                                                   // 92
            type: "hidden"                                                                                            // 93
        }                                                                                                             // 92
    }                                                                                                                 // 86
});                                                                                                                   // 24
Meteor.methods({                                                                                                      // 100
    toggleMenuItem: function (id, currentState) {                                                                     // 101
        Recipes.update(id, {                                                                                          // 102
            $set: {                                                                                                   // 103
                inMenu: !currentState                                                                                 // 104
            }                                                                                                         // 103
        });                                                                                                           // 102
    },                                                                                                                // 107
    deleteRecipe: function (id) {                                                                                     // 108
        Recipes.remove(id);                                                                                           // 109
    }                                                                                                                 // 110
});                                                                                                                   // 100
Recipes.attachSchema(RecipeSchema);                                                                                   // 113
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"intermediate.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// intermediate.js                                                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
if (Meteor.isServer) {                                                                                                // 1
  Meteor.startup(function () {// code to run on server at startup                                                     // 2
  });                                                                                                                 // 4
}                                                                                                                     // 5
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},{
  "extensions": [
    ".js",
    ".json",
    ".html"
  ]
});
require("./client/layouts/template.HomeLayout.js");
require("./client/layouts/template.MainLayout.js");
require("./client/partials/template.Header.js");
require("./client/partials/template.SideNav.js");
require("./client/recipes/template.Menu.js");
require("./client/recipes/template.NewRecipe.js");
require("./client/recipes/template.Recipe.js");
require("./client/recipes/template.RecipeSingle.js");
require("./client/recipes/template.Recipes.js");
require("./client/recipes/template.ShoppingList.js");
require("./client/web/template.WebMenu.js");
require("./client/web/template.WebMenuCol.js");
require("./lib/routes.js");
require("./client/recipes/NewRecipe.js");
require("./client/recipes/RecipeSingle.js");
require("./client/recipes/ShoppingList.js");
require("./client/recipes/menu.js");
require("./client/recipes/recipe.js");
require("./client/recipes/recipes.js");
require("./client/web/webmenu.js");
require("./collections/recipes.js");
require("./intermediate.js");