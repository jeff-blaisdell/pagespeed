var gulp = require('gulp');
var pipe = require('pipe/gulp');
var traceur = require('gulp-traceur');
var connect = require('gulp-connect');


var path = {
  src: './app/src/scripts/**/*.js',
  dest: './app/scripts',
  pkg: './package.json',
  app: './app'
};


// TRANSPILE ES6
gulp.task('build', function() {
  gulp.src(path.src)
      .pipe(traceur(pipe.traceur()))
      .pipe(gulp.dest(path.dest));
});

// WATCH FILES FOR CHANGES
gulp.task('watch', function() {
  gulp.watch(path.src, ['build']);
});


// WEB SERVER
gulp.task('serve', connect.server({
  root: [path.app],
  port: 8000,
  open: {
    browser: 'Google Chrome'
  }
}));
