var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


gulp.task('default', function() {
	
	gulp.src('src/images/*')
		.pipe(gulp.dest('./dist/images/'));
	gulp.src('src/*.pdf')
		.pipe(gulp.dest('./dist/'));
	gulp.src('src/*.ico')
		.pipe(gulp.dest('./dist/'));
	
	gulp.src('src/js/*')
		.pipe(uglify())
		.pipe(concat('script.min.js'))
		.pipe(gulp.dest('./dist/js/'));

	gulp.src('src/css/*')
		.pipe(cleanCSS())
		.pipe(concat('style.min.css'))
		.pipe(gulp.dest('./dist/css/'));

	// gulp.src('src/images/*')
	// 	.pipe(imagemin())
	// 	.pipe(gulp.dest('dist/images/'));

	gulp.src('src/index.html')
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(gulp.dest('dist/'));
	
	return;
});

gulp.task('concat', function() {
	return gulp.src('src/js/*')
		.pipe(concat('script.min.js'))
		.pipe(gulp.dest('./dist/js/'));
});

gulp.task('minify-image', function() {
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'));
});

gulp.task('minify-js', function() {
	return gulp.src('src/js/*')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('minify-css', function() {
	return gulp.src('src/css/*')
		.pipe(cleanCSS({
			compatibility: 'ie8'
		}))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('minify-html', function() {
	return gulp.src('src/index.html')
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(gulp.dest('dist'));
});