/**
 * Created by Alexandr on 30.09.2015.
 */
define(function(require){
    'use strict';
    var Mn = require('backbone.marionette');

    var RootView = Mn.LayoutView.extend({
        el: 'body'
    });

    return RootView;
});