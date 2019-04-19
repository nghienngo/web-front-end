const gulp = require("gulp");
const concat = require("gulp-concat");
const cleanCss = require("gulp-clean-css");
const minify = require("gulp-minify");
//optimazing css
function css() {
  return gulp
    .src(["assets/css/main.css", "assets/css/custom.css"])
    .pipe(concat("style.css"))
    .pipe(cleanCss())
    .pipe(gulp.dest("public/build/css"));
}
gulp.task("build-css", css);
//optimazing js
function js() {
  return gulp
    .src("assets/js/*.js")
    .pipe(concat("bundle.js"))
    .pipe(
      minify({
        ext: { min: ".js" },
        noSource: true
      })
    )
    .pipe(gulp.dest("public/build/js"));
}
gulp.task("build-js", js);
gulp.task("default", gulp.series(css, js));
