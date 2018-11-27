/*


    Gulp Settings


*/



// Plugins
import gulp from 'gulp';
import svgmin from 'gulp-svgmin';
import rimraf from 'rimraf';


// Setup
const paths = {
    destination: './build',
};

// SVG Processing
gulp.task('assets', () => {

    // TODO Debug Optimizer Options
    const minifyOptions = {
        plugins: [
            { cleanupIDs: false },
            { collapseGroups: false },
            { convertTransform: false },
            { moveGroupAttrsToElems: false }
        ]
    };

    // SVG
    gulp.src('src/**/*.svg')
        .pipe(svgmin(minifyOptions))
        .pipe(gulp.dest(paths.destination));
    
    // PNG, JPEG
    gulp.src('src/**/*.+(png|jpeg|jpg)')
        .pipe(gulp.dest(paths.destination));
    
});

// Clean Directory
gulp.task('clean', (cb) => {
    rimraf(paths.destination + '/*', cb);
});
