const path = require('path')
const webpackStream = require('webpack-stream')
const browserSync = require('browser-sync')
const gulp = require('gulp')

const reload = () => browserSync.reload()
const root = 'client'

// helper method for resolving paths
const resolveToApp = (glob) => {
  glob = glob || ''
  return path.join(root, 'app', glob) // app/{glob}
}

// map of all paths
const paths = {
  ts: resolveToApp('**/*!(.spec.ts).ts'), // exclude spec files
  styl: resolveToApp('**/*.styl'), // stylesheets
  html: [
    resolveToApp('**/*.html'),
    path.join(root, 'index.html')
  ],
  entry: path.join(root, 'app/app.ts'),
  output: root
}

gulp.task('webpack', () => {
  return gulp.src(paths.entry)
    .pipe(webpackStream(require('./webpack.config')))
    .pipe(gulp.dest(paths.output))
})

gulp.task('reload', ['webpack'], (done) => {
  reload()
  done()
})

gulp.task('serve', ['webpack'], () => {
  browserSync({
    port: process.env.PORT || 3000,
    open: false,
    server: { baseDir: root }
  })
})

gulp.task('watch', ['serve'], () => {
  const allPaths = [].concat(paths.html, [paths.styl])
  gulp.watch(allPaths, ['reload'])
})

gulp.task('default', ['watch'])