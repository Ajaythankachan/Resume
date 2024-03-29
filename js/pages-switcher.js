var PageTransitions = function(a) {
    "use strict";

    function d() {
        return "" === location.hash ? location.hash = a("section.pt-page").first().attr("data-id") : location.hash
    }

    function f(s) {
        if (!s) return !1;
        var t = a(s);
        t = t[0], t = a(t.parentNode), t && (a("ul.site-main-menu li").removeClass("active"), t.addClass("active"))
    }

    function g() {
        function s() {
            u.removeClass("rotateOutDownRight closed"), u.show(), a("body").addClass("ajax-page-visible")
        }

        function t() {
            a("#page-ajax-loaded").addClass("rotateOutDownRight closed"), a("body").removeClass("ajax-page-visible"), setTimeout(function() {
                a("#page-ajax-loaded.closed").html(""), u.hide()
            }, 500)
        }
        var u = a("#page-ajax-loaded"),
            v = a(".ajax-page-load").each(function() {
                if (v = a(this).attr("href"), location.hash == location.hash.split("/")[0] + "/" + v.substr(0, v.length - 5)) {
                    var w = a(this).attr("href");
                    return s(), u.load(w), !1
                }
            });
        a(document).on("click", ".site-main-menu, #ajax-page-close-button", function(w) {
            w.preventDefault(), t(), location.hash = location.hash.split("/")[0]
        }).on("click", ".ajax-page-load", function() {
            var w = location.hash.split("/")[0] + "/" + a(this).attr("href").substr(0, a(this).attr("href").length - 5);
            return location.hash = w, s(), !1
        })
    }

    function h(s, t) {
        if (!s.attr("data-animation")) {
            var u = parseInt(Math.floor(67 * Math.random()) + 1);
            s.data("animation", u)
        }
        var t, w, x, y, v = s.data("animation").toString();
        if (-1 != v.indexOf("-")) {
            var z = v.split("-");
            y = parseInt(z[Math.floor(Math.random() * z.length)])
        } else y = parseInt(v);
        if (67 < y) return alert("Transition.js : Invalid 'data-animation' attribute configuration. Animation number should not be greater than 67"), !1;
        1 === y ? (w = "pt-page-moveFromRight", x = "pt-page-moveToLeft") : 2 === y ? (w = "pt-page-moveFromLeft", x = "pt-page-moveToRight") : 3 === y ? (w = "pt-page-moveFromBottom", x = "pt-page-moveToTop") : 4 === y ? (w = "pt-page-moveFromTop", x = "pt-page-moveToBottom") : 5 === y ? (w = "pt-page-moveFromRight pt-page-ontop", x = "pt-page-fade") : 6 === y ? (w = "pt-page-moveFromLeft pt-page-ontop", x = "pt-page-fade") : 7 === y ? (w = "pt-page-moveFromBottom pt-page-ontop", x = "pt-page-fade") : 8 === y ? (w = "pt-page-moveFromTop pt-page-ontop", x = "pt-page-fade") : 9 === y ? (w = "pt-page-moveFromRightFade", x = "pt-page-moveToLeftFade") : 10 === y ? (w = "pt-page-moveFromLeftFade", x = "pt-page-moveToRightFade") : 11 === y ? (w = "pt-page-moveFromBottomFade", x = "pt-page-moveToTopFade") : 12 === y ? (w = "pt-page-moveFromTopFade", x = "pt-page-moveToBottomFade") : 13 === y ? (w = "pt-page-moveFromRight", x = "pt-page-moveToLeftEasing pt-page-ontop") : 14 === y ? (w = "pt-page-moveFromLeft", x = "pt-page-moveToRightEasing pt-page-ontop") : 15 === y ? (w = "pt-page-moveFromBottom", x = "pt-page-moveToTopEasing pt-page-ontop") : 16 === y ? (w = "pt-page-moveFromTop", x = "pt-page-moveToBottomEasing pt-page-ontop") : 17 === y ? (w = "pt-page-moveFromRight pt-page-ontop", x = "pt-page-scaleDown") : 18 === y ? (w = "pt-page-moveFromLeft pt-page-ontop", x = "pt-page-scaleDown") : 19 === y ? (w = "pt-page-moveFromBottom pt-page-ontop", x = "pt-page-scaleDown") : 20 === y ? (w = "pt-page-moveFromTop pt-page-ontop", x = "pt-page-scaleDown") : 21 === y ? (w = "pt-page-scaleUpDown pt-page-delay300", x = "pt-page-scaleDown") : 22 === y ? (w = "pt-page-scaleUp pt-page-delay300", x = "pt-page-scaleDownUp") : 23 === y ? (w = "pt-page-scaleUp", x = "pt-page-moveToLeft pt-page-ontop") : 24 === y ? (w = "pt-page-scaleUp", x = "pt-page-moveToRight pt-page-ontop") : 25 === y ? (w = "pt-page-scaleUp", x = "pt-page-moveToTop pt-page-ontop") : 26 === y ? (w = "pt-page-scaleUp", x = "pt-page-moveToBottom pt-page-ontop") : 27 === y ? (w = "pt-page-scaleUpCenter pt-page-delay400", x = "pt-page-scaleDownCenter") : 28 === y ? (w = "pt-page-moveFromRight pt-page-delay200 pt-page-ontop", x = "pt-page-rotateRightSideFirst") : 29 === y ? (w = "pt-page-moveFromLeft pt-page-delay200 pt-page-ontop", x = "pt-page-rotateLeftSideFirst") : 30 === y ? (w = "pt-page-moveFromTop pt-page-delay200 pt-page-ontop", x = "pt-page-rotateTopSideFirst") : 31 === y ? (w = "pt-page-moveFromBottom pt-page-delay200 pt-page-ontop", x = "pt-page-rotateBottomSideFirst") : 32 === y ? (w = "pt-page-flipInLeft pt-page-delay500", x = "pt-page-flipOutRight") : 33 === y ? (w = "pt-page-flipInRight pt-page-delay500", x = "pt-page-flipOutLeft") : 34 === y ? (w = "pt-page-flipInBottom pt-page-delay500", x = "pt-page-flipOutTop") : 35 === y ? (w = "pt-page-flipInTop pt-page-delay500", x = "pt-page-flipOutBottom") : 36 === y ? (w = "pt-page-scaleUp", x = "pt-page-rotateFall pt-page-ontop") : 37 === y ? (w = "pt-page-rotateInNewspaper pt-page-delay500", x = "pt-page-rotateOutNewspaper") : 38 === y ? (w = "pt-page-moveFromRight", x = "pt-page-rotatePushLeft") : 39 === y ? (w = "pt-page-moveFromLeft", x = "pt-page-rotatePushRight") : 40 === y ? (w = "pt-page-moveFromBottom", x = "pt-page-rotatePushTop") : 41 === y ? (w = "pt-page-moveFromTop", x = "pt-page-rotatePushBottom") : 42 === y ? (w = "pt-page-rotatePullRight pt-page-delay180", x = "pt-page-rotatePushLeft") : 43 === y ? (w = "pt-page-rotatePullLeft pt-page-delay180", x = "pt-page-rotatePushRight") : 44 === y ? (w = "pt-page-rotatePullBottom pt-page-delay180", x = "pt-page-rotatePushTop") : 45 === y ? (w = "pt-page-rotatePullTop pt-page-delay180", x = "pt-page-rotatePushBottom") : 46 === y ? (w = "pt-page-moveFromRightFade", x = "pt-page-rotateFoldLeft") : 47 === y ? (w = "pt-page-moveFromLeftFade", x = "pt-page-rotateFoldRight") : 48 === y ? (w = "pt-page-moveFromBottomFade", x = "pt-page-rotateFoldTop") : 49 === y ? (w = "pt-page-moveFromTopFade", x = "pt-page-rotateFoldBottom") : 50 === y ? (w = "pt-page-rotateUnfoldLeft", x = "pt-page-moveToRightFade") : 51 === y ? (w = "pt-page-rotateUnfoldRight", x = "pt-page-moveToLeftFade") : 52 === y ? (w = "pt-page-rotateUnfoldTop", x = "pt-page-moveToBottomFade") : 53 === y ? (w = "pt-page-rotateUnfoldBottom", x = "pt-page-moveToTopFade") : 54 === y ? (w = "pt-page-rotateRoomLeftIn", x = "pt-page-rotateRoomLeftOut pt-page-ontop") : 55 === y ? (w = "pt-page-rotateRoomRightIn", x = "pt-page-rotateRoomRightOut pt-page-ontop") : 56 === y ? (w = "pt-page-rotateRoomTopIn", x = "pt-page-rotateRoomTopOut pt-page-ontop") : 57 === y ? (w = "pt-page-rotateRoomBottomIn", x = "pt-page-rotateRoomBottomOut pt-page-ontop") : 58 === y ? (w = "pt-page-rotateCubeLeftIn", x = "pt-page-rotateCubeLeftOut pt-page-ontop") : 59 === y ? (w = "pt-page-rotateCubeRightIn", x = "pt-page-rotateCubeRightOut pt-page-ontop") : 60 === y ? (w = "pt-page-rotateCubeTopIn", x = "pt-page-rotateCubeTopOut pt-page-ontop") : 61 === y ? (w = "pt-page-rotateCubeBottomIn", x = "pt-page-rotateCubeBottomOut pt-page-ontop") : 62 === y ? (w = "pt-page-rotateCarouselLeftIn", x = "pt-page-rotateCarouselLeftOut pt-page-ontop") : 63 === y ? (w = "pt-page-rotateCarouselRightIn", x = "pt-page-rotateCarouselRightOut pt-page-ontop") : 64 === y ? (w = "pt-page-rotateCarouselTopIn", x = "pt-page-rotateCarouselTopOut pt-page-ontop") : 65 === y ? (w = "pt-page-rotateCarouselBottomIn", x = "pt-page-rotateCarouselBottomOut pt-page-ontop") : 66 === y ? (w = "pt-page-rotateSidesIn pt-page-delay200", x = "pt-page-rotateSidesOut") : 67 === y ? (w = "pt-page-rotateSlideIn", x = "pt-page-rotateSlideOut") : void 0;
        var C, A = k,
            B = A.data("current"),
            D = s.attr("href").split("#"),
            t = D[1];
        C = B;
        var E = a("section[data-id=\"" + B + "\"]");
        if (B = t, C != B) {
            l = !0, A.data("current", B);
            var F = a("section[data-id=" + B + "]").addClass("pt-page-current");
            F.scrollTop(0), E.addClass(x).on(q, function() {
                E.off(q), m = !0, n && (i(A, F, E), m = !1)
            }), F.addClass(w).on(q, function() {
                F.off(q), n = !0, m && (i(A, F, E), n = !1, l = !1)
            })
        } else l = !1;
        r || i(E, F)
    }

    function i(s, t, u) {
        j(t, u)
    }

    function j(s, t) {
        t.attr("class", t.data("originalClassList")), s.attr("class", s.data("originalClassList") + " pt-page-current")
    }
    var k = a(".subpages"),
        l = !1,
        m = !0,
        n = !1,
        o = a(window),
        q = {
            WebkitAnimation: "webkitAnimationEnd",
            OAnimation: "oAnimationEnd",
            msAnimation: "MSAnimationEnd",
            animation: "animationend"
        }[Modernizr.prefixed("animation")],
        r = Modernizr.cssanimations;
    return {
        init: function(s) {
            a(".pt-page").each(function() {
                var w = a(this);
                w.data("originalClassList", w.attr("class"))
            }), k.each(function() {
                "" === location.hash && a("section[data-id=" + u + "]").addClass("pt-page-current")
            }), a(".pt-trigger").on("click", function(w) {
                if (w.preventDefault(), l) return !1;
                var x = a(this);
                f(x), h(x), location.hash = a(this).attr("href")
            }), window.onhashchange = function() {
                if (location.hash) {
                    if (l) return !1;
                    var x = a(t + " a[href*=\"" + location.hash.split("/")[0] + "\"]");
                    f(x), h(x), g()
                }
            };
            var t = s.menu,
                u = d();
            location.hash = u;
            var v = a(t + " a[href*=\"" + location.hash.split("/")[0] + "\"]");
            f(v), h(v), a("body").append("<div id=\"page-ajax-loaded\" class=\"page-ajax-loaded animated rotateInDownRight\"></div>"), g(), a(".lmpixels-arrow-right").click(function() {
                var w = a(".site-main-menu li.active");
                w.next("li").children("a").click(), w.is(":last-child") && a(".site-main-menu li:first-child").children("a").click()
            }), a(".lmpixels-arrow-left").click(function() {
                var w = a(".site-main-menu li.active");
                w.prev("li").children("a").click(), w.is(":first-child") && a(".site-main-menu li:last-child").children("a").click()
            })
        }
    }
}(jQuery);