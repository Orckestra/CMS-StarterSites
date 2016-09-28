(function (window) {

    $(document).ready(function () {

        //Show dropdown on hover only for desktop devices
        //-----------------------------------------------
        var delay = 0, setTimeoutConst;
        if ((Modernizr.mq('only all and (min-width: 768px)') && !Modernizr.touch) || $("html.ie8").length > 0) {
            $('.main-navigation .navbar-nav > li.dropdown, .main-navigation .navbar-nav > li.dropdown > ul > li.dropdown').hover(
            function () {
                var $this = $(this);
                setTimeoutConst = setTimeout(function () {
                    $this.addClass('open').slideDown();
                    $this.find('.dropdown-toggle').addClass('disabled');
                }, delay);

            }, function () {
                clearTimeout(setTimeoutConst);
                $(this).removeClass('open');
                $(this).find('.dropdown-toggle').removeClass('disabled');
            });
        };

        //Show dropdown on click only for mobile devices
        //-----------------------------------------------
        if (Modernizr.mq('only all and (max-width: 767px)') || Modernizr.touch) {
            $('.main-navigation [data-toggle=dropdown], .header-top [data-toggle=dropdown]').on('click', function (event) {
                event.preventDefault();
                event.stopPropagation();
                $(this).parent().siblings().removeClass('open');
                $(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('open');
                $(this).parent().toggleClass('open');
            });
        };

        // Fixed Navbar
        //-----------------------------------------------
        var headerTopHeight = $(".header-top").outerHeight(),
            $navbarDefault = $(".navbar-default"),
            navbarDefaultHeight = $(".navbar-default").outerHeight();
        $(window).scroll(function () {
            if (($navbarDefault.length > 0)) {
                if (($(this).scrollTop() > headerTopHeight + navbarDefaultHeight) && ($(window).width() > 767)) {
                    $("body").addClass("fixed-navbar");
                    $navbarDefault.addClass('animated object-visible fadeInDown');
                } else {
                    $("body").removeClass("fixed-navbar");
                    $navbarDefault.removeClass('animated object-visible fadeInDown');
                }
            };
        });


        //Scroll top
        //-----------------------------------------------
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $(".scroll-top").fadeIn();
            } else {
                $(".scroll-top").fadeOut();
            }
        });
        $(".scroll-top").click(function () {
            $("body,html").animate({ scrollTop: 0 }, 800);
        });
    });
})(window);
