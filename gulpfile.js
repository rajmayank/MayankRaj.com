var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

gulp.task('default', ['watch']);

gulp.task('watch', function() {
	gulp.watch('src/**', ['build']);
});

gulp.task('build', function() {
	console.log('--------------------------------');
	console.log('new build');

	gulp.src('src/images/*')
		.pipe(gulp.dest('./docs/images/'));
	gulp.src('src/icons/*')
		.pipe(gulp.dest('./docs/icons/'));
	gulp.src('src/*.pdf')
		.pipe(gulp.dest('./docs/'));
	gulp.src('src/*.ico')
		.pipe(gulp.dest('./docs/'));

	gulp.src('src/js/*')
		.pipe(uglify())
		.pipe(concat('script.min.js'))
		.pipe(gulp.dest('./docs/js/'));

	gulp.src('src/css/*')
		.pipe(cleanCSS())
		.pipe(concat('style.min.css'))
		.pipe(gulp.dest('./docs/css/'));

	// gulp.src('src/images/*')
	// 	.pipe(imagemin())
	// 	.pipe(gulp.dest('docs/images/'));

	gulp.src('src/index.html')
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(gulp.dest('docs/'));

	return;
});

gulp.task('concat', function() {
	return gulp.src('src/js/*')
		.pipe(concat('script.min.js'))
		.pipe(gulp.dest('./docs/js/'));
});

gulp.task('minify-image', function() {
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('docs/images'));
});

gulp.task('minify-js', function() {
	return gulp.src('src/js/*')
		.pipe(uglify())
		.pipe(gulp.dest('docs/js'));
});

gulp.task('minify-css', function() {
	return gulp.src('src/css/*')
		.pipe(cleanCSS({
			compatibility: 'ie8'
		}))
		.pipe(gulp.dest('docs/css'));
});

gulp.task('minify-html', function() {
	return gulp.src('src/index.html')
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(gulp.dest('docs'));
});