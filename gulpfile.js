var gulp = require('gulp');
var concat = require('gulp-concat');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var glob = require('glob');
var sass = require('gulp-sass');

gulp.task('sass', function (done) {
    glob('./src/styles/**/**/*.scss', function(err, files) {
        if (err) {
            done(err);
        }
        return  gulp.src(files)
                .pipe(sass().on('error', sass.logError))
                .pipe(concat('bundle.css'))
                .pipe(gulp.dest('./build/'))
    });
});

gulp.task('vendor-css', function(done) {
    var files = ['./node_modules/purecss/build/pure.css', './node_modules/purecss/build/grids-responsive.css'];
    return gulp.src(files).pipe(concat('vendor.css')).pipe(gulp.dest('./build/'));
});

gulp.task('browserify', function(done) {
    glob('./src/website/**/*.js', function(err, files) {
        if (err) {
            done(err);
        }
        return browserify({entries: files})
                .transform("babelify", {presets: ["es2015", "react"]})
                .bundle()
                .pipe(source('bundle.js'))
                .pipe(gulp.dest('build'));
    });
});

gulp.task('html', function() {
    return gulp.src('./src/website/index.html')
        .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
    gulp.watch('./src/styles/**/**/*.scss', ['sass']);
    gulp.watch('./src/website/**/*.js', ['browserify']);
    gulp.watch('./src/index.html', ['html']);
});

gulp.task('default', ['html', 'browserify', 'sass', 'vendor-css']);