﻿/* equalHeightColumns.js 1.1 */
(function ($) {
    $.fn.equalHeightColumns = function (options) {
        defaults = { minWidth: -1, maxWidth: 99999, setHeightOn: "min-height", defaultVal: 0, extraHeight: 0 }; var $this = $(this); options = $.extend({}, defaults, options); var resizeHeight = function () {
            var windowWidth = $(window).width(); if (options.minWidth < windowWidth && options.maxWidth > windowWidth) { var height = 0; var highest = 0; $this.css(options.setHeightOn, options.defaultVal); $this.each(function () { height = $(this).outerHeight(); if (height > highest) highest = height }); $this.css(options.setHeightOn, highest + options.extraHeight) } else $this.css(options.setHeightOn,
            options.defaultVal)
        }; resizeHeight(); $(window).resize(resizeHeight); $this.find("img").load(resizeHeight); if (typeof options.afterLoading !== "undefined") $this.find(options.afterLoading).load(resizeHeight); if (typeof options.afterTimeout !== "undefined") setTimeout(function () { resizeHeight(); if (typeof options.afterLoading !== "undefined") $this.find(options.afterLoading).load(resizeHeight) }, options.afterTimeout)
    }
})(jQuery);