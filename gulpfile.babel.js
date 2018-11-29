/*


    Gulp Settings


*/



// Plugins
import { task, src, dest } from 'gulp';
import svgmin from 'gulp-svgmin';
import rimraf from 'rimraf';


// Setup
const paths = {
    destination: './build',
};

// SVG Processing
task('assets', () => {

    const minifyOptions = {
        plugins: [
            { cleanupIDs: false },
            { collapseGroups: false },
            { convertTransform: false },
            { moveGroupAttrsToElems: false }
        ]
    };

    // SVG
    return src('src/**/*.svg')
        .pipe(svgmin(minifyOptions))
        .pipe(dest(paths.destination));
    
    // PNG, JPEG
    return src('src/**/*.+(png|jpeg|jpg)')
        .pipe(dest(paths.destination));
    
});

// Clean Directory
task('clean', (cb) => {
    rimraf(paths.destination, cb);
});
