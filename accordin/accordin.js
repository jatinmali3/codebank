$(document).ready(function() {
    $('.accordin__content').first().slideDown('slow');
    $('.accordin__trigger').first().removeClass('active').addClass('active');
    $(".accordin__trigger").click(function() {
        $('.accordin__trigger').removeClass('active');
        $(this).addClass('active');

        $('.accordin__content').slideUp('slow');
        $(this).next().slideDown();
    });
});