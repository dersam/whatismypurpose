
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    autoprefix = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util')
    ;

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
    string_src("words.compiled.json", 'hello world')
        .pipe(gulp.dest('build/'))
});

gulp.task('watch', function () {
    gulp.watch('assets/*.js', ['minify']);
    gulp.watch('assets/*.less', ['css']);
});

function string_src(filename, string) {
    var src = require('stream').Readable({ objectMode: true });
    src._read = function () {
        this.push(new gutil.File({ cwd: "", base: "", path: filename, contents: new Buffer(string) }));
        this.push(null);
    };
    return src;
}