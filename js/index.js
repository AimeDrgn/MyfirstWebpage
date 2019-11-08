$(document).ready(function () {
    $('.mode-toggler').click(function () {
        $('ul').toggleClass('active');
        $('section').toggleClass('dark');
        $('.article').toggleClass('dark');


    });
    $('#myCarousel').carousel({});
})