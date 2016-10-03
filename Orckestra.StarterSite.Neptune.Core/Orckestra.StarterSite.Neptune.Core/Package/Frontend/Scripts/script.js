(function (window) {
    var navbar, content, mainnav;

    $(document).ready(function () {

        navbar = $(".navbar");
        content = $('.page-canvas');
        mainnav = $('.main-nav');


        $("*[data-toggle='main-nav']")
        .on('click', function () {
            showMainNav();
        });

        $('body').on('click', function (e) {
            if (!$(e.target).hasClass("dropdown-backdrop") && !$(e.target).hasClass('.navbar-toggle') && !$(e.target).parents().hasClass('main-nav') && content.position().left != 0) {
                showMainNav();
            }
        });


        $(window).on('resize', function () {
            if (mainnav.position().left == 0) {
                showMainNav(true);
            }
        });

        $(window).on('resize load', pageJumbotronHeight);

        //Profiles
        $(".profiles-list .row").each(function () {
            $(".thumbnail", $(this)).equalHeightColumns({ minWidth: 767, extraHeight: 18 });
        });

    });
    function showMainNav(resize) {
        var width = $('.main-nav').innerWidth();

        if (content.position().left == 0 || resize) {
            content.stop().animate({ 'left': width + 'px' }, 500);
            navbar.stop().animate({ 'left': width + 'px' }, 500);
            mainnav.stop().animate({ 'left': '0' }, 500);

            if (mainnav.css("position") != "fixed") {
                $('body').animate({ scrollTop: 0 }, 500);
            }
        }
        else {
            content.stop().animate({ 'left': '0' }, 500);
            navbar.stop().animate({ 'left': '0' }, 500);
            mainnav.stop().animate({ 'left': '-' + width + 'px' }, 500, function () {
                mainnav.removeAttr('style');
            });
        }
    }
    function pageJumbotronHeight() {
        $(".jumbotron").each(function (inx, el) {
            var minHeight = parseInt($(el).css("min-height").replace("px", ""));
            var contentHeight = $(el).find(".jumbotron-content").innerHeight();
            if (contentHeight > minHeight) {
                $(el).css("min-height", contentHeight + 60 + 'px');
            }

        });
    }
})(window);
