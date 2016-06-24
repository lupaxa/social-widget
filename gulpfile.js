var gulp = require('gulp'),
	postcss = require("gulp-postcss"),
	postcss_bem = require('postcss-bem'),
	nested = require('postcss-nested'),
	cssnano = require('cssnano'),
	atImport = require('postcss-import'),
	autoprefixer = require('autoprefixer'),
	variable = require('postcss-simple-vars'),
	mixin =  require('postcss-mixins'),
	include = require('postcss-include'),
	watch = require('gulp-watch');
	

gulp.task('css', function() {

  			var processors = [
				atImport(),
				variable(),
				postcss_bem({
					defaultNamespace: 'c',
					separators: {
					descendent: '__',
					modifier: '_'
				} ,
					shortcuts: {
						descendent: 'desc'
					}
				}),
				nested(),
				mixin(),
				// include(),
  				// autoprefixer({browsers:['>5%']}),
  				// cssnano(),
  			];
  			return gulp.src('dev/css/components/bem/style.css')
  			.pipe(postcss(processors))
  			.pipe(gulp.dest('dev/css'))
});


gulp.task('default', function() {

	gulp.watch('dev/css/**', function(event) {
		gulp.run('css');
	})
})