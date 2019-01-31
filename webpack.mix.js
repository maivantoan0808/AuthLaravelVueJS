const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

//Assets Css
mix.copy('resources/css/bootstrap/bootstrap.min.css',
    'public/css/bootstrap.min.css');
mix.copy('resources/css/bootstrap/bootstrap.min.css.map',
    'public/css/bootstrap.min.css.map');
mix.copy('resources/css/font-awesome/font-awesome.min.css',
    'public/css/font-awesome.min.css');
mix.copy('resources/css/ionicons/ionicons.min.css',
    'public/css/ionicons.min.css');
mix.copy('resources/css/adminLTE/AdminLTE.min.css',
    'public/css/AdminLTE.min.css');
mix.copy('resources/css/plugins/iCheck/square/blue.css',
    'public/css/blue.css');
mix.copy('resources/css/datatables.net-bs/dataTables.bootstrap.min.css',
    'public/css/dataTables.bootstrap.min.css');
mix.copy('resources/css/adminLTE/skins/',
    'public/css/skins/');