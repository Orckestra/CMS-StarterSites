(function ($) {
    $(document).ready(function () {
        $('.scroll-down-btn').on('click', function () {
            var body = $('html, body');
            var scrollTo = $(this).parent().offset().top - $(".navbar").height();
            body.animate({ scrollTop: scrollTo }, 600);
        });
    });
})(jQuery);
