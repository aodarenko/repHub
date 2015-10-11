define(function(require){
   'use strict';

    var Marionette = require('backbone.marionette');

    var App = new Marionette.Application();

    App.on('start', function(){
        Backbone.history.start();
        console.log('Hi');
    });

    return App;
});
