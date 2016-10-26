'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
	return gulp.src('./public/stylesheets/sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./public/stylesheets/css'));
});

gulp.task('watch', function() {
	gulp.watch('./public/stylesheets/sass/*.scss', ['sass']);
});