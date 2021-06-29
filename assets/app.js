/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)

import './styles/app.scss';
//import "../vendors/bootstrap/scss/bootstrap.scss";
// start the Stimulus application
import './bootstrap';

import 'jquery/dist/jquery.min';
import '@popperjs/core/dist/umd/popper-base.min';
import 'bootstrap';
import './js/portfolio.js';

import '@fortawesome/fontawesome-free/css/all.min.css'

// import '@fortawesome/fontawesome-free/js/fontawesome'
// import '@fortawesome/fontawesome-free/js/solid'
// import '@fortawesome/fontawesome-free/js/regular'
// import '@fortawesome/fontawesome-free/js/brands'