
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

gulp.task('watch', function () {
    gulp.watch('js/*.js', ['minify']);
});