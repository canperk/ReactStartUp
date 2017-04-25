var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gutil = require("gulp-util");
var del = require('del');
var ts = require("gulp-typescript");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

var outDir = "wwwroot/js/dist"
var lastFileName = 'educare.all.js';
var config = {
    src: [
        "wwwroot/js/**/*.js"
    ]
}
gulp.task("PROD", ["CLEAN"], function () {
    return gulp.src(config.src)
        .pipe(uglify().on('error', function (uglify) {
            console.error(uglify);
            this.emit('end');
        }))
        .pipe(concat(lastFileName))
        .pipe(gulp.dest(outDir));
});
gulp.task("PREPROD", ["CLEAN"], function () {
    return gulp.src(config.src)
        .pipe(concat(lastFileName))
        .pipe(gulp.dest(outDir));
});
gulp.task("BUILD", function () {
    var myConfig = Object.create(webpackConfig);
    return webpack(myConfig, function (err, stats) {
        if (err) {
            gutil.log("Build Error : => " + err, stats.toString({
                colors: true
            }));
            throw new gutil.PluginError("Build : => ", err);
        }
    });
});
gulp.task("WATCH", function () {
    gulp.watch("./ScriptLib/**/*.tsx", ["BUILD", "PREPROD"]);
});

gulp.task("CLEAN", function () {
    console.log('\033c');
    console.log("Clean started");
    return del(outDir + '/' + lastFileName);
});