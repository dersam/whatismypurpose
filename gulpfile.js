
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    autoprefix = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    tap = require('gulp-tap'),
    rename = require('gulp-rename')
    ;

gulp.task('minify', function () {
    gulp.src('assets/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build'));
});

gulp.task('minify-dev', function () {
    gulp.src('assets/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build'));
});

gulp.task('css', function () {
    gulp.src('assets/app.less')
        .pipe(less())
        .pipe(autoprefix('last 2 version', 'ie 8', 'ie 9'))
        .pipe(gulp.dest('build'));
});

gulp.task('dict', function(){
    gulp.src('assets/words.json')
        .pipe(tap(dictionary.compile))
        .pipe(rename('words.compiled.json'))
        .pipe(gulp.dest('build/'));
});

gulp.task('watch', function () {
    gulp.watch('assets/*.js', ['minify-dev']);
    gulp.watch('assets/*.less', ['css']);
});

var dictionary = (function(){
    function compile(file) {
        var json = JSON.parse(file.contents);
        var dict = {
            verbs: json.verbs,
            tags: {
                global: {
                    name: 'global',
                    words: []
                }
            }
        };

        for (var index = 0; index < json.nouns.length; index++) {
            var noun = json.nouns[index].noun;
            var tags = json.nouns[index].tags;
            dict.tags.global.words.push(noun);
            tags.forEach(function(value){
                if (!dict.tags.hasOwnProperty(value)) {
                    json.nouns[index].tags[value] = {
                        name: value,
                        words: []
                    };
                }

                json.nouns[index].tags[value].words.push(noun);
            });
        }

        file.contents = new Buffer(JSON.stringify(dict), "utf-8");
    }

    return {
        compile: compile
    }
})();