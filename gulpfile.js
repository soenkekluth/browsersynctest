var gulp = require('gulp');
var fs = require('fs');
var browserSync = require('browser-sync');

gulp.task('watch', function() {

  browserSync({

    server: {
      notify: false,
      open : true,
      baseDir: ['app'],

      middleware: function(req, res, next) {

        var url = req.url === '/' ? ('/index.html') : req.url;
        var filename = __dirname + '/app' + url;

        if (url.indexOf('.html') > -1 && fs.existsSync(filename)) {

          var contents = fs.readFileSync(filename, {
            encoding: 'utf8'
          });
          console.log('processed file');
          res.end(contents);

        } else {
          next();
        }
      }
    }
  });

});
