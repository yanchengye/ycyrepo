var gulp = require('gulp');
var webserver = require('gulp-webserver'); //引入webserver模块
var url = require('url');
var fs = require('fs');
var imageMin = require('gulp-imagemin');
var sass = require('gulp-sass'); //sass模块
var minifyCss = require('gulp-minify-css'); //css压缩
var uglify = require('gulp-uglify'); //丑化模块

var webpack = require('gulp-webpack'); //模块化打包的工具
var named = require('vinyl-named'); //命名模块

var rev = require('gulp-rev'); //版本模块
var revCollector = require('gulp-rev-collector'); //版本控制模块

var watch = require('gulp-watch'); //监控模块
var sequence = require('gulp-watch-sequence'); //队列模块
var minifyHTML = require('gulp-minify-html'); //html压缩模块

var jsFiles = ['src/scripts/index.js']; //js模块化管理

gulp.task('packjs', function() { //打包js
    return gulp.src(jsFiles).pipe(named()).pipe(webpack())
        .pipe(uglify())
        .pipe(gulp.dest('www/js'));
})

var cssDistFiles = ['www/css/index.css']; //版本控制
var jsDistFiles = ['www/js/index.js'];

gulp.task('verCss', function() { //css版本控制
    return gulp.src(cssDistFiles).pipe(rev()).pipe(gulp.dest('www/css'))
        .pipe(rev.manifest()) //生成映射文件
        .pipe(gulp.dest('www/ver/css'));
})

gulp.task('verJs', function() { //js版本控制
    return gulp.src(jsDistFiles).pipe(rev()).pipe(gulp.dest('www/js'))
        .pipe(rev.manifest()) //生成映射文件
        .pipe(gulp.dest('www/ver/js'));
})

gulp.task('html', function() { //html版本内容替换
    return gulp.src(['www/ver/**/*.json', 'www/*.html']).pipe(revCollector({ replaceReved: true })).pipe(gulp.dest('www/'));
})

gulp.task('scripts', function() {
    return gulp.src('./src/scripts/*.js')
        .pipe(gulp.dest('www/js'))
        .pipe(gulp.dest('www/js'));
});

gulp.task('sass', function() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss())
        .pipe(gulp.dest('www/css'));
});

gulp.task('images', function() {
    return gulp.src('./src/images/**')
    .pipe(imageMin())
    .pipe(gulp.dest('./www/images'));
})

gulp.task('copyindex', function() {
    return gulp.src('./src/index.html').pipe(minifyHTML()).pipe(gulp.dest('./www'));
});

gulp.task('webserver', function() {
    gulp.src('www')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true,
            port: 9999,

            //实现mock数据
            middleware: function(req, res, next) {
                    var urlObj = url.parse(req.url, true),
                        method = req.method;
                    switch (urlObj.pathname) {
                        case '/api/skill':
                            //设置头信息
                            res.setHeader('Content-Type', 'application/json');
                            //读取本地json文件，将信息编码，然后转成data返回
                            fs.readFile('mock/skill.json', 'utf-8', function(err, data) {
                                //res的全称是response,end是结束的意思，把data数据渲染到浏览器上
                                res.end(data);
                            });
                            return;
                        case '/api/project':
                            res.setHeader('Content-Type', 'application/json');
                            fs.readFile('mock/project.json', 'utf-8', function(err, data) {
                                res.end(data);
                            });
                            return;
                        case '/api/work':
                            res.setHeader('Content-Type', 'application/json');
                            fs.readFile('mock/work.json', 'utf-8', function(err, data) {
                                res.end(data);
                            });
                            return;
                        case '/api/product':
                            res.setHeader('Content-Type', 'application/json');
                            fs.readFile('mock/product.json', 'utf-8', function(err, data) {
                                res.end(data);
                            });
                            return;
                        case '/api/my':
                            res.setHeader('Content-Type', 'application/json');
                            fs.readFile('mock/my.json', 'utf-8', function(err, data) {
                                res.end(data);
                            });
                            return;
                        case '/api/interest':
                            res.setHeader('Content-Type', 'application/json');
                            fs.readFile('mock/interest.json', 'utf-8', function(err, data) {
                                res.end(data);
                            });
                            return;
                        default:
                            ;
                    }
                    next(); //这行非常重要,next解决的是循环遍历操作
                } //end middleware

        }));
});

gulp.task('watchs', function() { //设置监控
    gulp.watch('./src/index.html', gulp.series('copyindex'));
    gulp.watch('./src/images/**', gulp.series('images'));

    var queue = sequence(300);
    watch('src/scripts/**/*.js', {
        name: 'JS',
        emitOnGlob: false,
    }, queue.getHandler('packjs', 'verJs', 'html'));

    watch('src/styles/**/*.*', {
        name: 'CSS',
        emitOnGlob: false,
    }, queue.getHandler('sass', 'verCss', 'html'));
})

gulp.task('default', gulp.parallel('webserver', 'watchs', function (done) {
    done();
})); //设置默认服务
