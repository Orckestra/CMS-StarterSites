(function ($) {
    $(document).ready(function () {
        if (($("[data-animation-effect]").length > 0) && !Modernizr.touch) {
            $("[data-animation-effect]").each(function () {
                var $this = $(this),
                animationEffect = $this.attr("data-animation-effect");
                if (Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
                    $this.appear(function () {
                        var delay = ($this.attr("data-effect-delay") ? $this.attr("data-effect-delay") : 1);
                        if (delay > 1) $this.css("effect-delay", delay + "ms");
                        setTimeout(function () {
                            $this.addClass('animated object-visible ' + animationEffect);
                        }, delay);
                    }, { accX: 0, accY: -130 });
                } else {
                    $this.addClass('object-visible');
                }
            });
        };
    });
})(jQuery);
