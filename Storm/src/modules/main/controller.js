/**
 * Created by Alexandr on 21.09.2015.
 */
define(function(require){
   'use strict';

    var Mar = require('backbone.marionette'),
        RootView = require('modules/main/rootView'),
        App = require('app');

    var News = Mar.Object.extend({
        hello: 'Hello Master',
        initialize: function(){
            this.RootV = new RootView();
        },
        say: function(text){
            console.log(text || this.hello);
        }
    });

    return News;
});