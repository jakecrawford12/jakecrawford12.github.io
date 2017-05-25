var gulp = require("gulp");
var cssnano = require('gulp-cssnano');
var htmlreplace = require('gulp-html-replace');
var concatCss = require('gulp-concat-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var open = require("gulp-open");

var cssFiles = [
    "css/font-awesome.min.css",
    "css/bootstrap.min.css",
    "css/animate.min.css",
    "css/style.css",
    "css/responsive.css"
];

var jsFiles = [
    "js/jquery-2.1.1.js",
    "js/smoothscroll.js",
    "js/bootstrap.min.js",
    "js/custom.js",
    "js/wow.js",
];

gulp.task('bundleCSS', function() {
    return gulp.src(['css/*/*.css', 'css/*.css'])
        .pipe(concatCss('bundle.min.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('css'));
});

gulp.task('bundleJS', function() {
	return gulp.src(['js/*/*.js', 'js/*.js'])
        .pipe(concat('bundle.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});

gulp.task('prodReplace', function() {
  return gulp.src('./index.html')
     .pipe(htmlreplace({
        'css': './css/bundle.min.css',
        'js': './js/bundle.min.js'
        },{
        	keepUnassigned: true,
        	keepBlockTags: true,
        	resolvePaths: true
        }))
    .pipe(gulp.dest('./'));
});

gulp.task('devReplace', function() {
  return gulp.src('./index.html')
     .pipe(htmlreplace({
        'css': cssFiles,
        'js': jsFiles
        },{
        	keepUnassigned: true,
        	keepBlockTags: true,
        	resolvePaths: true
        }))
    .pipe(gulp.dest('./'));
});

gulp.task("open", function() {
    return gulp.src("./index.html")
            .pipe(open());
});

gulp.task('prod', ['bundleCSS', 'bundleJS', 'prodReplace']);
gulp.task('dev', ['devReplace']);
gulp.task("start", ["open"]);
