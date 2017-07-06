var
    gulp        = require('gulp')
    pug         = require('gulp-pug')
    webserver   = require('gulp-webserver')
;


gulp.task("watch", () => {
  gulp.watch('./src/pugs/**/*.pug', ['pug']);
});

gulp.task('pug', () => {
  gulp.src(['./src/pugs/**/*.pug', '!./src/pugs/**/_*.pug'])
    .pipe(pug({
      pretty: true
    }))
    .on("error", (err) => { console.log(err) })
    .pipe(gulp.dest('./dist'));
  console.log("Compile pug");
});


gulp.task('webserver', function () {
    gulp.src('dist')
        .pipe(webserver({
            host: 'localhost',
            port: 3000,
            livereload: false
        }));
});
