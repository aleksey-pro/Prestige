var gulp = require('gulp'),
	browserSync  = require('browser-sync'),
	rigger = require('gulp-rigger'),
	imagemin = require('gulp-imagemin'),
	htmlmin = require('gulp-html-minifier'),
	concat = require('gulp-concat'),
	minifyCSS = require('gulp-minify-css'),
	uglify  = require('gulp-uglify'),
	gulpif = require('gulp-if'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps');
	
var config = {
	server: {
		baseDir: 'prod'
	},
	tunnel: false,  //-------------set to true!!!
	host: 'localhost',
	port: 3000,
	logPrefix: "Ivashka prod.",
	browser: "firefox"
};	

gulp.task ('browserSync', function(){
	browserSync(config)
});

gulp.task('images', function() {
	return gulp.src('dev/img/**/*')
	.pipe(imagemin())
	.pipe(gulp.dest('prod/img'))
	.pipe(browserSync.reload({
	 stream: true
    }))
});

gulp.task('fonts', function() {
	return gulp.src('dev/fonts/**/*')
	.pipe(gulp.dest('prod/fonts'))		
});

gulp.task('HTML', function() {
  return gulp.src('dev/**/*.html')
	.pipe(rigger())	
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
    .pipe(gulp.dest('prod'))
	.pipe(browserSync.reload({
	 stream: true
    }))	
});

gulp.task('styles', function () {
  return gulp.src('dev/css/*.css')
	.pipe(sourcemaps.init())
	.pipe(autoprefixer())
	.pipe(concat('main.css'))
	.pipe(minifyCSS('main.min.css'))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('prod/css'))
	.pipe(browserSync.reload({
	 stream: true
	}))		
});

gulp.task('scripts', function () {
	return gulp.src('dev/js/*.js')
		 .pipe(sourcemaps.init())
		 .pipe(uglify())
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('prod/js'))
		 .pipe(browserSync.reload({
		  stream: true
          }))	 
});
	
gulp.task ('watch', function(){
	gulp.watch('dev/**/*.html', ['HTML']);
	gulp.watch('dev/img/*', ['images']);
	gulp.watch('dev/fonts/**/*', ['fonts']);	
	gulp.watch('dev/css/*.css', ['styles']);
	gulp.watch('dev/js/*.js', ['scripts']);
});

gulp.task ('default', ['HTML','images', 'fonts', 'styles', 'scripts', 'browserSync', 'watch']);

	