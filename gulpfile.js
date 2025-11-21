'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

var paths = {
  styles: {
    src: 'src/styles/**/*.*',
    sass: 'src/sass/**/*.*',
    dest: 'assets/css'
  },
  watching: {
    css: 'src/sass/**/*.*'
  }
}

function css() {
  return gulp.src(paths.styles.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.styles.dest));
}


exports.watch = function () {
  gulp.watch(patch.watching.css, css)
}

var build = gulp.series(css);

exports.css = css;
exports.default = build;