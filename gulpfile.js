// shamelessly not updated (Makefile too, I still don't know what I'll use)

var gulp = require('gulp'),
	//run = require('gulp-run'),
	babel = require('gulp-babel');
	//react = require('gulp-react'),
	//flow = require('gulp-flowtype');
//var 


gulp.task('build', function() {
	gulp.src('src/*.js')
	.pipe(babel({
		plugins: ["transform-flow-strip-types"]
	}))
	.pipe(gulp.dest('build'));
});

gulp.task('default', ['build']);