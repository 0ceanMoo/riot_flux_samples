var
    gulp        = require('gulp')
    pug         = require('gulp-pug')
    webserver   = require('gulp-webserver')
;

gulp.task("watch", () => {
  gulp.watch('./pugs/**/*.pug', ['pug']);
});

gulp.task('pug', () => {
  gulp.src(['./pugs/**/*.pug', '!./pugs/**/_*.pug'])
    .pipe(pug({
      pretty: true
    }))
    .on("error", (err) => { console.log(err) })
    .pipe(gulp.dest('./public'));
  console.log("Compile pug");
});

gulp.task('webserver', function () {
    gulp.src('./public')
        .pipe(webserver({
            host: 'localhost',
            port: 3000,
            livereload: false
        }));
});
