'use strict';

var App = window.App = require('app');

var moduleNews = require('modules/main/controller');

App.start();

var News = new moduleNews();
News.say();