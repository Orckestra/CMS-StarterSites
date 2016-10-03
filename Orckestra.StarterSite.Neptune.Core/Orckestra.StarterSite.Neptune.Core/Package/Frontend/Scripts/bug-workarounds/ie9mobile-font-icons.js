(function () {
    $(document).ready(function () {
        if (navigator.userAgent.match(/IEMobile\/9\.0/)) {
            $(".icon").each(function () {
                var title = $(this).attr("title");
                $(this).attr("class", "").text(title);
            });
        }
    });
})();
