// Include Gulp and all required plugins

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var gutil = require('gulp-util');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var handlebars = require('gulp-compile-handlebars');
var header = require('gulp-header');
var uglify = require('gulp-uglify');
var del = require('del');
var pkg = require('./package.json');
var templateData = require('./views/social_popups.json');
var pump = require('pump');
var zip = require('gulp-zip');

gulp.task('compress', function(cb) {
  pump([
      gulp.src('lib/*.js'),
      uglify(),
      gulp.dest('dist')
    ],
    cb
  );
});

templateData.plugin = "Social Popups"
templateData.plug = templateData.plugin.split(' ').join('-');
templateData.slug = templateData.plug.toLowerCase();
templateData.widget = templateData.slug.split('-').join('');
templateData.class = "social-share";
templateData.prefix = 'sc-';
templateData.size = '20px';
templateData.height = '570';
templateData.width = '570';

/* Prepare banner text */
var banner = ['/**',
  ' * <%= pkg.name %>',
  ' * v<%= pkg.version %>',
  ' * <%= pkg.author %>',
  ' * <%= pkg.repository.url %>',
  ' */',
  ''
].join('\n');

/* Prepare PHP banner text */
var banner2 = ['<?php',
  '/**',
  'Plugin Name: <%= pkg.name %>',
  'Plugin URI: <%= pkg.repository.url %>',
  'Description: <%= pkg.description %>',
  'Version: <%= pkg.version %>',
  'Author: <%= pkg.author %>',
  'License: <%= pkg.license %>',
  ' */',
  '?>',
  ''
].join('\n');
/**
 * Clean compiled files.
 */
gulp.task('clean:styles', function() {
  return del(['./pre/*.css', './branded/*.css', './inlined/*.css', './dist/*.css'])
});

gulp.task("branded", ['gen'], function() {
  var processors = [
    require("postcss-brand-colors")
  ];
  return gulp.src("./pre/*.css")
    .pipe(postcss(processors))
    .pipe(gulp.dest('./branded'));
});

gulp.task("inline", ['branded'], function() {
  var processors = [
    require("postcss-inline-svg")
  ];
  return gulp.src("./branded/*.css")
    .pipe(postcss(processors))
    .pipe(gulp.dest('./inlined'));
});

gulp.task("dist", ['inline', 'source'], function() {
  var processors = [
    require("postcss-svgo"),
    require("postcss-ordered-values"),
    require("postcss-merge-longhand")
  ];
  return gulp.src("./inlined/*.css")
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist'))
    .pipe(cleanCSS())
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest(templateData.slug+'/css'));
});

gulp.task('gen', function() {
  return gulp.src(['views/*'])
    .pipe(handlebars(templateData))
    .pipe(rename(function(path) {
      path.extname = path.extname.replace('.hbs', '');
    }))
    .pipe(gulp.dest('pre/'));
});

gulp.task('source', ['gen'], function() {
  return gulp.src(['pre/*.php'])
    .pipe(header(banner2, { pkg: pkg }))
    .pipe(gulp.dest(templateData.slug+'/views'))
});


gulp.task('compress', ['dist'], function(cb) {
  pump([
      gulp.src('pre/widget.js'),
      uglify(),
      gulp.dest(templateData.slug+'/js')
    ],
    cb
  );
});

gulp.task('zip',['compress'], function(){
  return gulp.src(templateData.slug+'/**/*')
    .pipe(zip(templateData.slug+'.zip'))
    .pipe(gulp.dest('./'))
});

gulp.task('default', [ 'dist']);
