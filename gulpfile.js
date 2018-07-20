const gulp = require('gulp');

const sass = require('gulp-sass');
const moduleImporter = require('sass-module-importer');
const plumber = require('gulp-plumber');

function customPlumber() {
    return plumber({
        errorHandler(err) {
            console.log(err.toString());
            this.emit('end');
        }
    });
}

gulp.task('watch', ['styles'], () => {

    gulp.watch('./app/assets/styles/sass/**/*.scss', ['styles']);
});

gulp.task('styles', () =>
    gulp
    .src('./app/assets/styles/sass/**/*.scss')
    .pipe(customPlumber())
    .pipe(sass({
        importer: moduleImporter()
    }))
    .pipe(gulp.dest('./app/assets/styles/css'))
);