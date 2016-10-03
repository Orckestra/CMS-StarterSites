(function ($) {
    $(document).ready(function () {
        $('.flexslider').flexslider({
            animation: 'slide',
            prevText: '',
            nextText: '',
            start: function (slider) {
                slider.on('mouseover', function () {
                    slider.flexslider('pause');
                }).on('mouseout', function () {
                    slider.flexslider('play');
                });
            },
        });

        $('.flex-viewport .slides').wrap('<div class="flex-push"></div>');

        $('.flex-next').on('mouseover', function () {
            var flexslider = $(this).parents('.flexslider');

            flexslider.flexslider('pause');
            flexslider.find('.flex-push').addClass('flex-push-right');
        }).on('mouseout', function () {
            var flexslider = $(this).parents('.flexslider');

            flexslider.flexslider('play');
            flexslider.find('.flex-push').removeClass('flex-push-right');
        });

        $('.flex-prev').on('mouseover', function () {
            var flexslider = $(this).parents('.flexslider');

            flexslider.flexslider('pause');
            flexslider.find('.flex-push').addClass('flex-push-left');
        }).on('mouseout', function () {
            var flexslider = $(this).parents('.flexslider');

            flexslider.flexslider('play');
            flexslider.find('.flex-push').removeClass('flex-push-left');
        });


    });
})(jQuery);


