// any CSS you require will output into a single css file (app.css in this case)
require('../css/app.css');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// eslint-disable-next-line no-unused-vars
const $ = require('jquery');
// eslint-disable-next-line import/no-extraneous-dependencies
require('bootstrap');
// eslint-disable-next-line import/no-extraneous-dependencies

require('@fortawesome/fontawesome-free/css/all.css');

$(document).ready(() => {
    $('[data-toggle="popover"]').popover();
});

// eslint-disable-next-line func-names
$('.counter-up').each(function () {
    $(this)
        .prop('Counter', 0)
        .animate({
            Counter: $(this)
                .text(),
        }, {
            duration: 4000,
            easing: 'swing',
            step(now) {
                $(this)
                    .text(Math.ceil(now));
            },
        });
});


