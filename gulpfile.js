let gulp = require('gulp'),
  uglify = require('gulp-uglify-es').default,
   imagemin = require('gulp-imagemin'),
   del = require('del');

////////// DELETE BUILD FOLDER //////////
gulp.task('clean', function(){
	return del('build');
})

////////// OVERWRITE HTML FILE //////////
gulp.task('html', function(){
	gulp.src('index.html')
		.pipe(gulp.dest('./'))
})

////////// SEND CSS TO BUILD FOLDER //////////
gulp.task('css', function(){
	gulp.src('css/**/*.css')
		.pipe(gulp.dest('build/css/'))
})

////////// CONVERT JS TO MINIFIED JS AND SEND TO BUILD FOLDER //////////
gulp.task('minifyScripts', function(){
	gulp.src('js/main.js')
		.pipe(uglify())
		.pipe(gulp.dest('build/js/'));
});

////////// COMPRESS IMAGES AND SEND TO BUILD FOLDER //////////
gulp.task('compressImages', function(){
	return gulp.src('images/**')
		.pipe(imagemin( { progressive: true} ))
		.pipe(gulp.dest('build/images'));
});

////////// CONSTANTLY WATCH FOR CHANGES AND RE-UPDATE: HTML, CSS, JS, IMAGES //////////
gulp.task('watch', function(){
	gulp.watch('js/main.js', ['minifyScripts']);
	gulp.watch('css/main-styles.css', ['css']);
	gulp.watch('index.html', ['html']);
	gulp.watch('images', ['compressImages']);
})

////////// CREATE AND POPULATE THE FINAL BUILD FOLDER //////////
gulp.task('build', ['watch', 'compressImages', 'html', 'css', 'compressImages', 'minifyScripts'], function(){});

////////// DEFAULT GULP TASK //////////
gulp.task('default', ['clean'], function(){
	gulp.start('build');
} );