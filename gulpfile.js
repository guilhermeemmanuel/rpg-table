var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
	bower  = require('gulp-bower'),
	mkdirp = require('mkdirp'),
    del    = require('del'),
	http   = require('http'),
	ecstatic    = require('ecstatic');
	
	
var paths = {
	distFolder:   'dist/',
    sourceFolder: 'src/',
	imagesFolder: 'images/',
	cssFolder: 'css/',
	jsFolder: 'js/',
	libs: 'bower_components/',
    node_modules: 'node_modules/',
    viewsFolder: 'views/'
	
};

var localPort = 80;
var serverPort = 81;


//Run in Server
gulp.task('run-dist', function () {
    http.createServer(
        ecstatic({ root: __dirname + '/' + paths.distFolder })
    ).listen(serverPort);

    console.log('Listening on http://localhost:' + serverPort);
});


//Run in development
gulp.task('run', function () {
    http.createServer(
        ecstatic({ root: __dirname})
    ).listen(localPort);

    console.log('Listening on http://localhost:' + localPort);
});

//Bower
gulp.task('bower', function() {
    return bower();
});


//Clean the dist Folder
gulp.task('clean', function () {
    mkdirp(paths.distFolder);
    return del([
        paths.distFolder + '/**'
    ], { force: true });
});

//Move the Views to Dist
gulp.task('views', function () {
    return gulp
        .src('**/*.html')
        .pipe(gulp.dest(paths.distFolder));
    
});

// Move the libs to Dist
gulp.task('libs', function () {
    return gulp
        .src(paths.libs + '**/*')
        .pipe(gulp.dest(paths.distFolder + paths.libs)) &&

        gulp
        .src(paths.node_modules + '**/*')
        .pipe(gulp.dest(paths.distFolder + paths.node_modules));
});


// Move the Js to Dist
gulp.task('js', function () {
    return gulp
        .src(paths.sourceFolder + paths.jsFolder + '**/*')
        .pipe(gulp.dest(paths.distFolder + paths.sourceFolder + paths.jsFolder));
});

//Compile Scss archives in css
gulp.task('sass', function () {
    return gulp.src('./src/css/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./src/css'));
});

// Watch modifications in Scss archives to compile
gulp.task('sass:watch', function () {
    gulp.watch('./src/css/sass/**/*.scss', ['sass']);
});

// Move the Css to Dist
gulp.task('css', function () {
    return gulp
        .src(paths.sourceFolder + paths.cssFolder + '**/*')
        .pipe(gulp.dest(paths.distFolder + paths.sourceFolder + paths.cssFolder));
});

// Move the Images to Dist
gulp.task('images', function () {
    return gulp
        .src(paths.sourceFolder + paths.imagesFolder + '**/*')
        .pipe(gulp.dest(paths.distFolder + paths.sourceFolder + paths.imagesFolder));
});

//Build Project in Dist
gulp.task('build', ['clean'], function () { 
    var result = gulp.start('images');
    result = result && gulp.start('js');
    result = result && gulp.start('views');
    result = result && gulp.start('css');
	result = result && gulp.start('libs');	
    return result;
});


// Default gulp task
gulp.task('default', function () {
    
});