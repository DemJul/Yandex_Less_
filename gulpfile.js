const { series, parallel, src, dest } = require("gulp");

const gulp = require("gulp"),
    svgmin = require("gulp-svgmin"),
    svgstore = require("gulp-svgstore"),
    inject = require("gulp-inject"),
    less = require("gulp-less"),
    autoprefixer = require("gulp-autoprefixer"),
    browserSync = require("browser-sync").create(),
    rename = require("gulp-rename");

gulp.task("svgstore_yandex", function() {
    const svgs = gulp
        .src("./src/assets/icons/icons__yandex/**/*.svg")
        .pipe(
            svgmin(function() {
                return {
                    plugins: [{
                            removeTitle: true,
                        },
                        {
                            removeStyleElement: true,
                        },
                    ],
                };
            })
        )
        .pipe(rename({ prefix: "icon-" }))
        .pipe(svgstore({ inlineSvg: true }));

    function fileContents(filePath, file) {
        return file.contents.toString();
    }

    return gulp
        .src("./src/yandex.html")
        .pipe(inject(svgs, { transform: fileContents }))
        .pipe(gulp.dest("./src"));
});

gulp.task("svgstore_mail", function() {
    const svgs = gulp
        .src("./src/assets/icons/icons__mail/**/*.svg")
        .pipe(
            svgmin(function() {
                return {
                    plugins: [{
                            removeTitle: true,
                        },
                        {
                            removeStyleElement: true,
                        },
                    ],
                };
            })
        )
        .pipe(rename({ prefix: "icon-" }))
        .pipe(svgstore({ inlineSvg: true }));

    function fileContents(filePath, file) {
        return file.contents.toString();
    }

    return gulp
        .src("./src/mail.html")
        .pipe(inject(svgs, { transform: fileContents }))
        .pipe(gulp.dest("./src"));
});

gulp.task("svgstore_css-tricks", function() {
    const svgs = gulp
        .src("./src/assets/icons/icons__css-tricks/**/*.svg")
        .pipe(
            svgmin(function() {
                return {
                    plugins: [{
                            removeTitle: true,
                        },
                        {
                            removeStyleElement: true,
                        },
                    ],
                };
            })
        )
        .pipe(rename({ prefix: "icon-" }))
        .pipe(svgstore({ inlineSvg: true }));

    function fileContents(filePath, file) {
        return file.contents.toString();
    }

    return gulp
        .src("./src/css-tricks.html")
        .pipe(inject(svgs, { transform: fileContents }))
        .pipe(gulp.dest("./src"));
});

gulp.task("less", function() {
    return src("./src/assets/styles/main.less")
        .pipe(less())
        .pipe(
            autoprefixer({
                cascade: false,
            })
        )
        .pipe(dest("./dist"));
});

gulp.task("html", function() {
    return gulp.src("./src/index.html").pipe(gulp.dest("./dist"));
});

gulp.task("html_yandex", function() {
    return gulp.src("./src/yandex.html").pipe(gulp.dest("./dist"));
});

gulp.task("html_mail", function() {
    return gulp.src("./src/mail.html").pipe(gulp.dest("./dist"));
});

gulp.task("html_css-tricks", function() {
    return gulp.src("./src/css-tricks.html").pipe(gulp.dest("./dist"));
});

gulp.task("fonts", function() {
    return gulp.src("./src/assets/fonts/*").pipe(gulp.dest("./dist/fonts"));
});

gulp.task("script", function() {
    return gulp.src("./src/assets/script/*").pipe(gulp.dest("./dist/script"));
});

gulp.task("js", function() {
    return gulp.src("./src/assets/js/*").pipe(gulp.dest("./dist/js"));
});

gulp.task("icons", function() {
    return gulp.src("./src/assets/images/*").pipe(gulp.dest("./dist/images"));
});

gulp.task("serve", function() {
    browserSync.init({
        server: {
            baseDir: "dist",
        },
    });

    gulp.watch("./src/assets/styles/**/*.less").on("change", series("less"));
    gulp.watch("./src/index.html").on("change", series("html"));
    gulp.watch("./src/yandex.html").on("change", series("html_yandex"));
    gulp.watch("./src/mail.html").on("change", series("html_mail"));
    gulp.watch("./src/css-tricks.html").on("change", series("html_css-tricks"));
    gulp.watch("./src/script/yandex.js").on("change", series("script"));
    
    gulp.watch("./dist/style.css").on("change", browserSync.reload);
    gulp.watch("./dist/script/yandex.js").on("change", browserSync.reload);
    gulp.watch("./dist/index.html").on("change", browserSync.reload);
    gulp.watch("./dist/yandex.html").on("change", browserSync.reload);
    gulp.watch("./dist/css-tricks.html").on("change", browserSync.reload);
    gulp.watch("./dist/mail.html").on("change", browserSync.reload);
    gulp.watch("./dist/script/yandex.js").on("change", browserSync.reload);
});

gulp.task("build", series("svgstore_yandex", "svgstore_mail", "svgstore_css-tricks", "less", "html", "html_yandex", "html_mail","html_css-tricks", "fonts","script", "js", "icons"));

gulp.task("default", series("svgstore_yandex", "svgstore_mail","svgstore_css-tricks", parallel("html", "html_yandex", "html_mail","html_css-tricks", "less","js", "fonts", "script", "icons"), "serve"));