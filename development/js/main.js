// Sets the require.js configuration for your application.
require.config({
  
  // 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.7.2.min")
  paths: {

      // Core Libraries
      "modernizr": "libs/modernizr",
      "jquery": "libs/jquery",
      "underscore": "libs/lodash",
      "backbone": "libs/backbone",
      "handlebars": "libs/handlebars",
      "text":'libs/requirejs-text',
      "i18n":'libs/requirejs-i18n'

  },
  // Sets the packages that are going to be used
  packages:[
    "packageA",
    {
      name:"packageA",
      location:"packages/packageA"
    }  ],

  // Sets the configuration for your third party scripts that are not AMD compatible
  shim: {

      "backbone": {
          "deps": ["underscore", "jquery"],
          "exports": "Backbone"  //attaches "Backbone" to the window object
      }

  } // end Shim Configuration
  
});

// Include Desktop Specific JavaScript files here (or inside of your Desktop router)
require(['modernizr','jquery','backbone','routers/router'], function(Modernizr, $, Backbone, Router) {

    // Instantiates a new Router
    this.router = new Router();
});