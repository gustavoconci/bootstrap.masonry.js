$(function() {
    var $masonry = $('.masonry').masonry();

    $('.js-ajax').on('click', function() {
        var data = $('.masonry').html();

        // $masonry.push($(data).find('.item'));
        $(data).find('.item').each(function() {
            $masonry.push($(this));
        });
    });
});
