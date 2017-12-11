var gulp = require('gulp');

var plumber = require('gulp-plumber');
var compass = require('gulp-compass');
var uglify = require('gulp-uglify');
var changed = require('gulp-changed');
var sourcemaps = require('gulp-sourcemaps');

var SASS_SRC = 'scss/**/*.scss';
var CSS_SRC = 'css/*.css';

gulp.task('compass', function(){
    gulp.src(SASS_SRC)
    .pipe(plumber())
    .pipe(compass({
        config_file: 'config.rb',
        comments: false,
        css: 'css/',
        sass: 'scss/'
    }));
});

gulp.task('watch', function(){
    gulp.watch(SASS_SRC, function(event) {
        gulp.run('compass');
    });
});

gulp.task('default', function(){
    gulp.run('watch');
});
