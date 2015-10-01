
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    autoprefix = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('minify', function () {
    gulp.src('assets/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('../'))
        .pipe(gulp.dest('build'));
});

gulp.task('css', function () {
    gulp.src('assets/app.less')
        .pipe(less())
        .pipe(autoprefix('last 2 version', 'ie 8', 'ie 9'))
        .pipe(gulp.dest('build'));
});

gulp.task('dict', function(){

});

gulp.task('watch', function () {
    gulp.watch('assets/*.js', ['minify']);
    gulp.watch('assets/*.less', ['css']);
});