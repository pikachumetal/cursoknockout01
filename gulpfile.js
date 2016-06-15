var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    express = require('express'),
    uglify = require('gulp-uglify'),
    serverport = 5000;
var __dirname = "C:/Users/Pikachu/Desktop/Cursos/Javascript/code/Day02/examplejs";
//We only configure the server here and start it only when running the watch task
var server = express();
server.use(express.static('./www'));

gulp.task('build', function () {
    return gulp.src('./www/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'))
        .pipe(uglify())
        .pipe(gulp.dest('./www/jsdist'));
});

gulp.task('serve', function () {
    server.use('/lib', express.static(__dirname + '/node_modules/requirejs/'));
    server.use('/lib', express.static(__dirname + '/node_modules/knockout/build/output/'));
    server.use('/lib', express.static(__dirname + '/node_modules/knockout/build/output/'));
    //Set up your static fileserver, which serves files in the build dir
    server.listen(serverport);
});

gulp.task('default', function () {
    gulp.run('build', 'serve');
});