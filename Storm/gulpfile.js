"use strict";

var gulp = require('gulp'),
    fs = require('fs'),
    jade = require('jade'),
    webpack = require('webpack');

gulp.task('default', ['templates', 'build'], function () {
    var watcher = gulp.watch(__dirname + '/src/*.js', ['build']);
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('build', function () {
    webpack({
        context: __dirname + '/src',
        entry: './main',
        output: {
            //libraryTarget: 'amd',
            sourcePrefix: "",
            path: __dirname + '/last',
            filename: 'app.dev.js'
        },
        resolve: {
            root: __dirname + '/src'
        }
    }, function (err, stats) {
        if (err)
            console.log(err);
        //if (stats)
        //    console.log(stats);
        callback();
    });

    var callback = function () {
        console.log('Done, waiting...');
    }
});

gulp.task('templates', function(){
    var htmlIndex = __dirname + '/last/index.html',
        jadeIndex = __dirname + '/templates/index.jade',
        tempFile = __dirname + '/last/templates.js';
    var data = jade.renderFile(jadeIndex);
    fs.writeFileSync(htmlIndex, data);
    var tempCompile = '',
        baseDir = __dirname + '/templates',
        pathJoin = function(array){
            return array.join('/');
        };
    fs.readdir(baseDir, function(error, items){
        items.forEach(function(item){
            fs.stat(pathJoin([baseDir,item]), function(errStat, stats){
                if(stats.isFile())
                    console.log(stats);
            });
        });
    });
    fs.writeFileSync(tempFile, tempCompile);

    var readDir = function(path){
        var files = fs.readdirSync(path);
        if(files && files.length)
            files.forEach()
        return;
    }

});

gulp.task('copy', function () {
    return gulp
        .src('index.html')
        .pipe(gulp.dest('last/'));
});
