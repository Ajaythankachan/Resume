var demoPanel = (function($) {
    "use strict";
    var demoPanel = $("#lm_demo_panel"),
        demoPanelSwitcher = $("#lm_demo_panel_switcher");
    $(window).on("click", function() {
        $("#lm_demo_panel.active").removeClass("active");
    });
    demoPanelSwitcher.on("click", function(event) {
        event.stopPropagation();
        demoPanel.toggleClass("active");
    });
    demoPanel.on("click", function(event) {
        event.stopPropagation();
    });
    $('#main_color').on("click", "a", function() {
        var head = $('head'),
            selector = $(this).data("id");
        $('.main-color-switcher').removeClass("current-main-color");
        $('#main_color a').removeClass('current-main-color');
        $(this).addClass('current-main-color');
        $('link[data-id="custom"]').remove();
        head.append('<link rel="stylesheet" href="css/main-' + selector + '.css" type="text/css" data-id="custom">');
        demoPanel.removeClass(function(index, className) {
            return (className.match(/(^|\s)panel-color\S+/g) || []).join(' ');
        });
        demoPanel.addClass("panel-color-" + selector);
    });
})(jQuery);