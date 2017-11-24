var gulp = require('gulp')
var sass = require('gulp-sass')
var autoPrefix = require('gulp-autoprefixer')

gulp.task('sass' , () => (
   gulp.src('./**/*.sass')
      .pipe(sass())
      .pipe(autoPrefix())
      .pipe(gulp.dest('.'))
))

gulp.task('watch' , () => (
   gulp.watch('./**/*.sass' , ['sass'])
))

gulp.task('default' , ['watch'])