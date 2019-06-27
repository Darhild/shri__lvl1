const gulp = require('gulp');
const plumber = require("gulp-plumber");
const postcss = require('gulp-postcss');
const postcssImport = require('postcss-import');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssNested = require('postcss-nested');
const next = require('postcss-cssnext');
const concat = require('gulp-concat');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const bemjson = require('gulp-bemjson');
var server = require("browser-sync").create();

const library = [
  './src/library.blocks/theme.blocks/**/*.css', // Тема
  './src/library.blocks/frame.blocks/**/*.css', // Каркас
  './src/library.blocks/pattern.blocks/**/*.css', // Паттерны
  './src/library.blocks/content.blocks/**/*.css',  // Контент
];

const userBlocks = './src/common.blocks/**/*.css'; // Контент пользователя

gulp.task('css', () =>  {
  let plugins = [
    postcssImport(),
    postcssSimpleVars(),
    postcssNested(),
    next()
  ];
  return gulp.src(library)
    .pipe(postcss(plugins))
    .pipe(concat('library.css'))
    .pipe(gulp.dest('./css'))
//    .pipe(csso())
//    .pipe(rename({ suffix: '.min' }))
//    .pipe(gulp.dest('./css'));
    .pipe(server.stream());
});

gulp.task('csspages', () =>  {
  let plugins = [
    postcssImport(),
    postcssSimpleVars(),
    postcssNested(),
    next()
  ];
  return gulp.src('./src/pages/*.css')
    .pipe(postcss(plugins))
    .pipe(concat('pages.css'))
    .pipe(gulp.dest('./css'))
//    .pipe(csso())
//    .pipe(rename({ suffix: '.min' }))
//    .pipe(gulp.dest('./css'));
    .pipe(server.stream());
});


gulp.task('csscommon', () =>  {
  let plugins = [
    postcssImport(),
    postcssSimpleVars(),
    postcssNested(),
    next()
  ];
  return gulp.src(userBlocks)
    .pipe(plumber())
    .pipe(postcss(plugins))
    .pipe(concat('user.css'))
    .pipe(gulp.dest('./css'))
//    .pipe(csso())
//    .pipe(rename({ suffix: '.min' }))
//    .pipe(gulp.dest('./css'))
    .pipe(server.stream());
});

gulp.task('json', function () {
    return gulp.src('./**/*.bemjson.js', { read: false })
        .pipe(bemjson())
        .pipe(gulp.dest('./**'));
});

gulp.task('json-page', function () {
    return gulp.src('./src/pages/*.bemjson.js', { read: false })
        .pipe(bemjson())
        .pipe(gulp.dest('./src/pages/'));
});

gulp.task("serve", function () {
  server.init({
    server: {
      baseDir: "./"
    },
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("./src/**/*.css", gulp.series("csscommon"));
  gulp.watch("./**/*.bemjson.js", gulp.series("json"));
  gulp.watch("./src/library.blocks/**/*.css", gulp.series("css"));
  gulp.watch("./src/pages/*.css", gulp.series("csspages"));
  gulp.watch("*.html").on("change", server.reload);
});
