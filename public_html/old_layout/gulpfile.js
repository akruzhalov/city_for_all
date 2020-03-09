var gulp = require('gulp'),
	del = require('del'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync'),
	sass = require('gulp-sass'),
	pug = require('gulp-pug'),
	concat = require("gulp-concat"),
	rename = require("gulp-rename"),
	imagemin = require('gulp-imagemin'),
	plumber = require('gulp-plumber'),
	svgstore = require('gulp-svgstore'),
	cheerio = require('gulp-cheerio'),
	replace = require('gulp-replace');

var paths = {
	dirs: {
		build: './build'
	},
	html: {
		src: './src/pages/*.pug',
		dest: './build',
		watch: ['./src/pages/*.pug', './src/templates/*.pug', './src/blocks/**/*.pug']
	},
	css: {
		src: './src/styles/style.scss',
		dest: './build/css',
		watch: ['./src/blocks/**/*.scss', './src/styles/**/*.scss', './src/styles/*.scss']
	},
	js: {
		src: ['./src/plugins/*.js', './src/blocks/**/*.js'],
		dest: './build/js',
		watch: './src/blocks/**/*.js',
		watchPlugins: './src/scripts/plugins/*.js'
	},
	images: {
		src: './src/blocks/**/img/*',
		dest: './build/img',
		watch: ['./src/blocks/**/img/*']
	},
	icons: {
		src: './src/blocks/**/img/*.svg',
		dest: './src/blocks/icons/sprite',
		watch: ['./src/blocks/**/img/*.svg']
	},
	fonts: {
		src: './src/fonts/*',
		dest: './build/fonts',
		watch: './src/fonts/*'
	},
	documents: {
		src: './src/documents/*',
		dest: './build/documents',
		watch: './src/documents/*'
	},
	back: {
		src: './src/back/*',
		dest: './build/',
		watch: './src/back/*'
	}
};

gulp.task('clean', function () {
	return del(paths.dirs.build);
});

gulp.task('templates', function () {
	return gulp.src(paths.html.src)
		.pipe(plumber())
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest(paths.html.dest))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('styles', function () {
	return gulp.src(paths.css.src)
		.pipe(plumber())
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 20 versions']
		}))
		.pipe(gulp.dest(paths.css.dest))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('scripts', function () {
	return gulp.src(paths.js.src)
		.pipe(plumber())
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest(paths.js.dest));
});

gulp.task('images', function () {
	return gulp.src(paths.images.src)
		.pipe(plumber())
		.pipe(imagemin())
		.pipe(rename({
			dirname: ''
		}))
		.pipe(gulp.dest(paths.images.dest));
});

gulp.task('svgstore', function () {
	return gulp.src(paths.icons.src)
		.pipe(svgstore({ inlineSvg: true }))
		.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('svg').attr('style', 'display:none');
			},
			parserOptions: { xmlMode: true }
		}))
		// cheerio plugin create unnecessary string '>', so replace it. 
		.pipe(replace('&gt;', '>'))
		.pipe(rename('sprite.svg'))
		.pipe(gulp.dest(paths.icons.dest));
});
gulp.task('fonts', function () {
	return gulp.src(paths.fonts.src)
		.pipe(plumber())
		.pipe(gulp.dest(paths.fonts.dest))
		.pipe(browserSync.reload({
			stream: true
		}));
});
gulp.task('documents', function () {
	return gulp.src(paths.documents.src)
		.pipe(plumber())
		.pipe(gulp.dest(paths.documents.dest))
		.pipe(browserSync.reload({
			stream: true
		}));
});
gulp.task('back', function () {
	return gulp.src(paths.back.src)
		.pipe(plumber())
		.pipe(gulp.dest(paths.back.dest))
		.pipe(browserSync.reload({
			stream: true
		}));
});
gulp.task('server', function () {
	browserSync.init({
		server: {
			baseDir: paths.dirs.build
		},
		reloadOnRestart: true,
		tunnel: 'remote'
	});
	gulp.watch(paths.html.watch, gulp.parallel('templates'));
	gulp.watch(paths.css.watch, gulp.parallel('styles'));
	gulp.watch(paths.js.watch, gulp.parallel('scripts'));
	gulp.watch(paths.js.watchPlugins, gulp.parallel('scripts'));
	gulp.watch(paths.images.watch, gulp.parallel('images'));
	gulp.watch(paths.icons.watch, gulp.parallel('svgstore'));
	gulp.watch(paths.fonts.watch, gulp.parallel('fonts'));
	gulp.watch(paths.documents.watch, gulp.parallel('documents'));
	gulp.watch(paths.back.watch, gulp.parallel('back'));
});

gulp.task('build', gulp.series(
	'clean',
	'templates',
	'styles',
	'scripts',
	'svgstore',
	'images',
	'fonts',
	'documents',
	'back'
));

gulp.task('dev', gulp.series(
	'build', 'server'
));