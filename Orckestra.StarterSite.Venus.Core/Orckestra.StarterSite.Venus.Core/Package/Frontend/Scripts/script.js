
(function (window) {

    $(document).ready(function () {

        //Layout columns with the same height
        $(".aside-left-column, .aside-right-column, .right-column, .left-column, .nav-column").equalHeightColumns({ minWidth: 768 });

        // MEGA DROPDOWN MENU
        //check if mouseenter is supported. If not then Click will open the DropDown when ExpandOnHover is true
        $(".mega-menu").on("mouseenter", function () {
            $(".mega-menu").addClass("hover-detected");
            $(".mega-menu").unbind("mouseenter");
        });

        $(".mega-menu-expandonhover .dropdown").hoverIntent({
            over: function () {
                if (!$(".navbar-collapse").hasClass("in")) {
                    $(this).addClass("open");
                    $(this).siblings().removeClass("open");
                    showOverlay();
                }

            },
            out: function () {
                if (!$(".navbar-collapse").hasClass("in")) {
                    $(this).removeClass("open");
                }
                if (!$(".navbar-collapse").hasClass("in") && !$(".mega-menu .dropdown").hasClass("open")) {
                    hideOverlay();
                }
            },
            timeout: 200,
            interval: 30
        });


        $(".mega-menu").on("click", ".dropdown", function (e) {
            if ($(".mega-menu").hasClass("hover-detected") && $(".mega-menu").hasClass("mega-menu-expandonhover") && $(window).width() > 1000) {
                e.stopPropagation();
            }
        });

        $(".mega-menu").on("show.bs.dropdown", function () {
            if (!$(".navbar-collapse").hasClass("in")) {
                showOverlay();
            }
        });
        $(".mega-menu").on("hide.bs.dropdown", function () {
            if (!$(".navbar-collapse").hasClass("in") && !$(".hover-detected").hasClass("open")) {
                hideOverlay();
            }
        });
        $('.navbar-collapse').on('show.bs.collapse', function () {
            $(".navbar-toggle .icon-bar").addClass("hide");
            $(".navbar-toggle .icon-close").removeClass("hide");
        });
        $('.navbar-collapse').on('hidden.bs.collapse', function () {
            $(".navbar-toggle .icon-bar").removeClass("hide");
            $(".navbar-toggle .icon-close").addClass("hide");
        });

        $(".dropdown-menu").find("form").on("click", function (e) {
            e.stopPropagation();
        });

        // NAVBAR ON MOBILE
        var maxInRow = 6;
        //navbar-brand + navbar-toggle + service-nav
        var linksCount = 2 + $(".service-nav > div").length;
        if ($(".service-nav .language-switcher").length == 2) {
            linksCount = linksCount - 1;
        }
        if (linksCount > maxInRow) {
             linksCount = maxInRow;
        }
        var linksStyle = "width-" + Math.floor(100 / linksCount);
        $(".navbar-brand").addClass(linksStyle);
        $(".navbar-toggle").addClass(linksStyle);
        $(".service-nav > div").addClass(linksStyle);

        //NAVBAR SEARCH FORM
        $(".navbar-search-form .dropdown-toggle").on("click", function () {
            setTimeout(function () { $("#searchText").focus(); }, 0);
        });

        //PROFILES
        $(".profiles-list .row").each(function () {
            $(".thumbnail", $(this)).equalHeightColumns({ minWidth: 767, extraHeight: 18 });
        });

        //NEWSLETTER
        if (!$(".newsletter-signup").find(".checkbox").length) {
            $(".newsletter-signup").addClass("form-inline");
        }

        $(window).on("resize load", function () {
            //ImageAndText Page Block: vertical align middle text content if image height > text content height
            var imgAndText = $(".page-block-image-and-text");
            if ($(".page-block-text-inner", imgAndText).height() < $(".page-block-image", imgAndText).height() && $(document).width() > 768) {
                $(".page-block-text", imgAndText).css("min-height", $(".page-block-image", imgAndText).height()).find(":first-child").addClass("verticalalign-middle");
            } else {
                $(".page-block-text", imgAndText).removeAttr("style").find(":first-child").removeClass("verticalalign-middle");
            }

        });

    });


    function showOverlay() {
        $("body").addClass("overlay");
    }

    function hideOverlay() {
        $("body").removeClass("overlay");
    }

})(window);

/* equalHeightColumns.js 1.1 */
(function ($) {
    $.fn.equalHeightColumns = function (options) {
        defaults = { minWidth: -1, maxWidth: 99999, setHeightOn: "min-height", defaultVal: 0, extraHeight: 0 }; var $this = $(this); options = $.extend({}, defaults, options); var resizeHeight = function () {
            var windowWidth = $(window).width(); if (options.minWidth < windowWidth && options.maxWidth > windowWidth) { var height = 0; var highest = 0; $this.css(options.setHeightOn, options.defaultVal); $this.each(function () { height = $(this).height(); if (height > highest) highest = height }); $this.css(options.setHeightOn, highest + options.extraHeight) } else $this.css(options.setHeightOn,
            options.defaultVal)
        }; resizeHeight(); $(window).resize(resizeHeight); $this.find("img").load(resizeHeight); if (typeof options.afterLoading !== "undefined") $this.find(options.afterLoading).load(resizeHeight); if (typeof options.afterTimeout !== "undefined") setTimeout(function () { resizeHeight(); if (typeof options.afterLoading !== "undefined") $this.find(options.afterLoading).load(resizeHeight) }, options.afterTimeout)
    }
})(jQuery);














