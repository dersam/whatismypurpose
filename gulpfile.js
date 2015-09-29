
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    autoprefix = require('gulp-autoprefixer');

gulp.task('minify', function () {
    gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build'));
});

gulp.task('css', function () {
    gulp.src('assets/app.less')
        .pipe(less())
        .pipe(autoprefix('last 2 version', 'ie 8', 'ie 9'))
        .pipe(gulp.dest('build'));
});

gulp.task('watch', function () {
    gulp.watch('js/*.js', ['minify']);
});