'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./css/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css'));
});

gulp.task('minify-css', () => {
    return gulp.src('./css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css/minifiedCSS'))
})
 
gulp.task('watch', function () {
  gulp.watch('./css/main.scss', gulp.series('sass'));
  gulp.watch('./css/main.scss', gulp.series('minify-css'));
});
