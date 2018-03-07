! function() {
    "use strict";
    function t(t, e) {
        for (var n = 0; n < t.length && !1 !== e.call(t[n], n, t[n]); n++);
    }
    function e(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) t[i] = n[i]
        }
        return t
    }
    function n(t) {
        return function(e, n) {
            if (e)
                if (n) t.call(this, e, n);
                else
                    for (var i in e) t.call(this, i, e[i]);
            return this
        }
    }

    function i(t) {
        return t.trim()
    }

    function c(t) {
        return (" " + (t.getAttribute("class") || "") + " ").replace(/[\t\r\n\f]/g, " ")
    }

    function o(t, e) {
        return -1 < c(t).indexOf(e)
    }

    function r(e, n) {
        var r = c(e);
        t(n.split(" "), function(t, n) {
            n = i(n), o(e, n) || (r += n + " ")
        }), e.setAttribute("class", i(r))
    }

    function u(e, n) {
        t(n.split(" "), function(t, n) {
            e.setAttribute("class", i(c(e).replace(" " + i(n) + " ", " ")))
        })
    }

    function a(e, n) {
        t(n.split(" "), function(t, n) {
            (o(e, n) ? u : r)(e, n)
        })
    }
    var l = {},
        f = l.toString,
        s = function() {},
        v = {
            active: "is-active"
        };
    t([r, u, a], function(e, n) {
        n.collection = function(e, i) {
            t(e, function(t, e) {
                n(e, i)
            })
        }
    }), e(s, {
        extend: e,
        forEach: t,
        trim: i,
        hasClass: o,
        addClass: r,
        removeClass: u,
        toggleClass: a,
        overloadSetter: n
    }), t("String Function Number Array Object".split(" "), function(t, e) {
        s["is" + e] = function(t) {
            return "[object " + e + "]" === f.call(t)
        }
    }), s.component = n(function(t, e) {
        s.isFunction(e) && (s.components[t] = e)
    }), s.upgrate = function(e) {
        var n = s.components[e];
        if (n) {
            var i = document.querySelectorAll("." + e);
            i.length && t(i, function(t, e) {
                new n(e)
            })
        }
    }, s.components = {
        "toggle_button": function(t) {
            var e = t.getAttribute("data-menu"),
                n = t.getAttribute("data-class") || v.active,
                c = s[i + "Class"],
                a = document.querySelector("#" + e);
            if (a) {
                o(a, n) ? r(t, v.active) : u(t, v.active);
                var l = c ? function() {
                    c.collection([a, t], n)
                } : function(e) {
                    if (o(a, n)) u(a, n), u(t, v.active);
                    else {
                        r(a, n), r(t, v.active);
                        var i = function(c) {
                            c !== e && (u(a, n), u(t, v.active), document.removeEventListener("click", i))
                        };
                        document.addEventListener("click", i)
                    }
                };
                t.addEventListener("click", function(t) {
                    t.preventDefault(), l(t)
                })
            }
        },
    }, window.addEventListener("load", function() {
        for (var t in s.components) s.upgrate(t)
    }), window.bygian = s
}();

