// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');


var sassSource =['assets/scss/*.scss'];
var cssDest ='assets/css';
var jsSource =['assets/lib/preload/jquery.min.js','assets/lib/preload/TweenMax.min.js','assets/lib/preload/scrollmagic/ScrollMagic.min.js','assets/lib/preload/scrollmagic/plugins/animation.gsap.min.js','assets/lib/preload/ScrollToPlugin.min.js','assets/lib/preload/scrollmagic/plugins/debug.addIndicators.min.js','assets/lib/preload/*.js'];
var jsDest ='assets/js';


// Lint Task
gulp.task('lint', function() {
    return gulp.src(jsSource)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
/*gulp.task('sass', function() {
    return gulp.src('assets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/css'));
});*/

//Define gulp sass piped taskJavaScript

gulp.task("sass", function(){ 
	//log("Generate CSS files " + (new Date()).toString());
    return gulp.src(sassSource)
		.pipe(sass({ style: 'compressed' }))
        .pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
		.pipe(gulp.dest(cssDest))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest(cssDest));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(jsSource)
        .pipe(concat('all.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});




// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(jsSource, ['lint', 'scripts']);
    gulp.watch(sassSource, ['sass']);
});


// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);