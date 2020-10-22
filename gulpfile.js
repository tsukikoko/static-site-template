const {
  src,
  dest,
  watch
} = require("gulp");
const sass = require("gulp-sass");
const pug = require("gulp-pug");

// Sassのコンパイル
const compileSass = () =>
  src("src/assets/_scss/*.scss")
  .pipe(
    sass({
      outputStyle: "expanded"
    })
  )
  .pipe(dest("dist/assets/css"));

// Sassファイルを監視
const watchSassFiles = () =>
  watch("src/assets/_scss/*.scss", compileSass);

// pugのコンパイルする
const compilePug = () =>
  src("src/*.pug")
  .pipe(
    pug({
      pretty: true
    })
  )
  .pipe(dest("dist"));

// pugファイルを監視
const watchPugFiles = () =>
  watch("src/*.pug", compilePug);

// npx gulpで実行
exports.default = () =>
  watchSassFiles();
watchPugFiles();