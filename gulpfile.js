const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');


gulp.task('html', function() {
    return gulp.src('./src/index.html')
    .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
    }))
    .pipe(gulp.dest('./'))
});

gulp.task('style', function() {
    return gulp.src('./src/styles/*')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/styles'))
});

gulp.task('script', function() {
    return gulp.src('./src/scripts/*')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts'))
});

gulp.task('image', function() {
    return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
})

gulp.task('build', gulp.parallel(
    'html',
    'style',
    'script',
    'image'
));

gulp.task('default', function() {
    gulp.watch('./src/index.html', {ignoreInitial: false}, gulp.series('html'))
    gulp.watch('./src/styles/*', {ignoreInitial: false}, gulp.series('style'))
    gulp.watch('./src/scripts/*', {ignoreInitial: false}, gulp.series('script'))
    gulp.watch('./src/images/*', {ignoreInitial: false}, gulp.series('image'))
})


