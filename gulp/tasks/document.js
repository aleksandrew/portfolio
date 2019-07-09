// Gulp
import gulp from 'gulp';
// PATH
import PATH from '../PATH';
// Server
import { browserSync } from './server';

// Task doc
export default () => gulp.src(PATH.doc.input)
  .pipe(gulp.dest(PATH.doc.output))
  .pipe(browserSync.reload({ stream: true }));
