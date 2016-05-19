var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prettify = require('gulp-prettify');

// Default Task
gulp.task('default', function() {
});



gulp.task('stream', function () {
    return gulp.src('css/**/*.css')
        .pipe(watch('css/**/*.css'))
        .pipe(gulp.dest('build'));
});
 
gulp.task('callback', function (cb) {
    watch('css/**/*.css', function () {
        gulp.src('css/**/*.css')
            .pipe(watch('css/**/*.css'))
            .on('end', cb);
    });
});

gulp.task('prettify', function() {
  gulp.src('src/*.html')
    .pipe(prettify({indent_size: 2}))
    .pipe(gulp.dest('dist'))
});
/*
var autoprefixer = require('gulp-autoprefixer');
var cache = require('gulp-cache');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var jade = require('gulp-jade');
var jshint = require('gulp-jshint');
var livereload = require('gulp-livereload');
var minify = require('gulp-minify-css');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

gulp.task('watch', function() {
    gulp.watch('assets/js/*.js', ['scripts', 'style']);
    gulp.watch('assets/css/*.scss', ['styles']);
    gulp.watch('assets/jade/*.jade', ['templates']);
});

gulp.task('templates', function() {
  var YOUR_LOCALS = {};

  gulp.src('*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty: true
    }))
    .pipe(gulp.dest('assets/jade'))
    .pipe(notify({ message: 'Your Jade file has been molded into HTML.' }))
});*/

