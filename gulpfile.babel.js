import gulp       from 'gulp';
import del        from 'del';
import eslint     from 'gulp-eslint';
import imagemin   from 'gulp-imagemin';
import prefix     from 'gulp-autoprefixer';
import htmlmin    from 'gulp-htmlmin';
import sass       from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import sync       from 'browser-sync';
import webpack    from 'webpack-stream';

var reload = sync.reload;

gulp.task('clean', del.bind(null, ['index.html', 'dist/css', 'dist/js'], {read: false}));

gulp.task('clean:images', del.bind(null, ['dist/images'], {read: false}));

gulp.task('default', ['html', 'server', 'styles', 'watch']);

gulp.task('html', () => {
  return gulp.src('app/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./'))
});

gulp.task('images', ['clean:images'], () => {
  return gulp.src('app/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

gulp.task('lint', () => {
  return gulp.src(['*/**/*.js', '!node_modules/*', '!dist/includes/*'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('server', () => {
  sync({
    notify: false,
    server: {
      baseDir: './'
    },
    port: 8888
  });
});

gulp.task('scripts', function() {
  return gulp.src(['app/js/index.js'])
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('styles', () => {
  return gulp.src('app/sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(prefix('last 2 versions'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('watch', () => {
  gulp.watch('app/js/**/*', ['scripts', reload]);
  gulp.watch('app/index.html', ['html', reload]);
  gulp.watch('app/sass/**/*', ['styles', reload]);
});
