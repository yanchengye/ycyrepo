! function(e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = { exports: {}, id: i, loaded: !1 };
        return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0) }([function(e, t, n) { e.exports = n(1) }, function(e, t, n) {
    var i = n(2),
        r = n(12),
        a = n(13),
        s = n(14),
        o = (n(15), new r(".swiper-container", { pagination: ".swiper-pagination", paginationType: "progress", onInit: function(e) { a.swiperAnimateCache(e), a.swiperAnimate(e) }, onSlideChangeEnd: function(e) { a.swiperAnimate(e) } }));
    i("#mainContent").hide(), i(".swiper-container").hide(), i(".ani2").on("tap", function() { i("#mainContent").show(), i(".swiper-container").hide(), i.getJSON("https://yanchengye.github.io/ycyrepo/mock/skill.json", {}, function(e) {
            var t = "";
            i.each(e, function(e, n) { t += '<li><img src="' + n.src + '">' + n.name + "</li>" }), i("#scroller ul").html(t) });
        new s("#wrapper", { mouseWheel: !0 });
        document.addEventListener("touchmove", function(e) { e.preventDefault() }, !1) }), i("#footer div").tap(function() {
        var e = i(this).attr("id");
        i(this).addClass("active").siblings().removeClass("active"), i.post("/api/" + e, {}, function(t) {
            var n = "";
            i.each(t, function(t, i) { "work" == e ? n += "<li>" + i.name + "</li>" : "skill" == e ? n += '<li><img src="' + i.src + '">' + i.name + "</li>" : "product" == e ? (n += '<li><img style="width:100%;" src="' + i.image + '"></li>', n += "<li>" + i.name + "</li>", n += "<li>" + i.category + "</li>", n += "<li>商城网址：" + i.url + "</li>", n += "<li>" + i.description + "</li>", n += "<li>" + i.detail + "</li>", n += "<li>项目使用中用到的技术" + i.tech + "</li>") : "interest" == e ? n += '<li><img style="width:75%;" src="' + i.src + '">' + i.ball + "</li>" : "my" == e && (n += "<li>" + i.name + "</li>") }), i("#scroller ul").html(n) });
        new s("#wrapper", { mouseWheel: !0 });
        document.addEventListener("touchmove", function(e) { e.preventDefault() }, !1) }), i("#scroller ul").on("tap", "li", function() { i(this).css("background-color", "#F0F0F0").siblings().css("background-color", "#fff") });
    var l = setInterval(function() { "complete" === document.readyState ? (clearInterval(l), i(".preload").hide(), i(".swiper-container").show(), o.updateContainerSize(), o.updateSlidesSize()) : i(".preload").show() }, 100) }, function(e, t, n) {
    var i = n(3);
    n(4), n(5), n(6), n(7), n(8), n(9), n(10), n(11), e.exports = i }, function(e, t) {
    var n = function() {
        function e(e) {
            return null == e ? String(e) : $[U.call(e)] || "object" }

        function t(t) {
            return "function" == e(t) }

        function n(e) {
            return null != e && e == e.window }

        function i(e) {
            return null != e && e.nodeType == e.DOCUMENT_NODE }

        function r(t) {
            return "object" == e(t) }

        function a(e) {
            return r(e) && !n(e) && Object.getPrototypeOf(e) == Object.prototype }

        function s(e) {
            var t = !!e && "length" in e && e.length,
                i = C.type(e);
            return "function" != i && !n(e) && ("array" == i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e) }

        function o(e) {
            return D.call(e, function(e) {
                return null != e }) }

        function l(e) {
            return e.length > 0 ? C.fn.concat.apply([], e) : e }

        function c(e) {
            return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase() }

        function u(e) {
            return e in H ? H[e] : H[e] = new RegExp("(^|\\s)" + e + "(\\s|$)") }

        function p(e, t) {
            return "number" != typeof t || B[c(e)] ? t : t + "px" }

        function d(e) {
            var t, n;
            return L[e] || (t = A.createElement(e), A.body.appendChild(t), n = getComputedStyle(t, "").getPropertyValue("display"), t.parentNode.removeChild(t), "none" == n && (n = "block"), L[e] = n), L[e] }

        function h(e) {
            return "children" in e ? z.call(e.children) : C.map(e.childNodes, function(e) {
                if (1 == e.nodeType) return e }) }

        function f(e, t) {
            var n, i = e ? e.length : 0;
            for (n = 0; n < i; n++) this[n] = e[n];
            this.length = i, this.selector = t || "" }

        function m(e, t, n) {
            for (S in t) n && (a(t[S]) || Q(t[S])) ? (a(t[S]) && !a(e[S]) && (e[S] = {}), Q(t[S]) && !Q(e[S]) && (e[S] = []), m(e[S], t[S], n)) : t[S] !== T && (e[S] = t[S]) }

        function g(e, t) {
            return null == t ? C(e) : C(e).filter(t) }

        function v(e, n, i, r) {
            return t(n) ? n.call(e, i, r) : n }

        function y(e, t, n) { null == n ? e.removeAttribute(t) : e.setAttribute(t, n) }

        function w(e, t) {
            var n = e.className || "",
                i = n && n.baseVal !== T;
            return t === T ? i ? n.baseVal : n : void(i ? n.baseVal = t : e.className = t) }

        function x(e) {
            try {
                return e ? "true" == e || "false" != e && ("null" == e ? null : +e + "" == e ? +e : /^[\[\{]/.test(e) ? C.parseJSON(e) : e) : e } catch (t) {
                return e } }

        function b(e, t) { t(e);
            for (var n = 0, i = e.childNodes.length; n < i; n++) b(e.childNodes[n], t) }
        var T, S, C, E, k, P, M = [],
            N = M.concat,
            D = M.filter,
            z = M.slice,
            A = window.document,
            L = {},
            H = {},
            B = { "column-count": 1, columns: 1, "font-weight": 1, "line-height": 1, opacity: 1, "z-index": 1, zoom: 1 },
            I = /^\s*<(\w+|!)[^>]*>/,
            O = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            j = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            X = /^(?:body|html)$/i,
            _ = /([A-Z])/g,
            W = ["val", "css", "html", "text", "data", "width", "height", "offset"],
            Y = ["after", "prepend", "before", "append"],
            R = A.createElement("table"),
            q = A.createElement("tr"),
            F = { tr: A.createElement("tbody"), tbody: R, thead: R, tfoot: R, td: q, th: q, "*": A.createElement("div") },
            G = /complete|loaded|interactive/,
            V = /^[\w-]*$/,
            $ = {},
            U = $.toString,
            K = {},
            Z = A.createElement("div"),
            J = { tabindex: "tabIndex", readonly: "readOnly", for: "htmlFor", class: "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" },
            Q = Array.isArray || function(e) {
                return e instanceof Array };
        return K.matches = function(e, t) {
            if (!t || !e || 1 !== e.nodeType) return !1;
            var n = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;
            if (n) return n.call(e, t);
            var i, r = e.parentNode,
                a = !r;
            return a && (r = Z).appendChild(e), i = ~K.qsa(r, t).indexOf(e), a && Z.removeChild(e), i }, k = function(e) {
            return e.replace(/-+(.)?/g, function(e, t) {
                return t ? t.toUpperCase() : "" }) }, P = function(e) {
            return D.call(e, function(t, n) {
                return e.indexOf(t) == n }) }, K.fragment = function(e, t, n) {
            var i, r, s;
            return O.test(e) && (i = C(A.createElement(RegExp.$1))), i || (e.replace && (e = e.replace(j, "<$1></$2>")), t === T && (t = I.test(e) && RegExp.$1), t in F || (t = "*"), s = F[t], s.innerHTML = "" + e, i = C.each(z.call(s.childNodes), function() { s.removeChild(this) })), a(n) && (r = C(i), C.each(n, function(e, t) { W.indexOf(e) > -1 ? r[e](t) : r.attr(e, t) })), i }, K.Z = function(e, t) {
            return new f(e, t) }, K.isZ = function(e) {
            return e instanceof K.Z }, K.init = function(e, n) {
            var i;
            if (!e) return K.Z();
            if ("string" == typeof e)
                if (e = e.trim(), "<" == e[0] && I.test(e)) i = K.fragment(e, RegExp.$1, n), e = null;
                else {
                    if (n !== T) return C(n).find(e);
                    i = K.qsa(A, e) }
            else {
                if (t(e)) return C(A).ready(e);
                if (K.isZ(e)) return e;
                if (Q(e)) i = o(e);
                else if (r(e)) i = [e], e = null;
                else if (I.test(e)) i = K.fragment(e.trim(), RegExp.$1, n), e = null;
                else {
                    if (n !== T) return C(n).find(e);
                    i = K.qsa(A, e) } }
            return K.Z(i, e) }, C = function(e, t) {
            return K.init(e, t) }, C.extend = function(e) {
            var t, n = z.call(arguments, 1);
            return "boolean" == typeof e && (t = e, e = n.shift()), n.forEach(function(n) { m(e, n, t) }), e }, K.qsa = function(e, t) {
            var n, i = "#" == t[0],
                r = !i && "." == t[0],
                a = i || r ? t.slice(1) : t,
                s = V.test(a);
            return e.getElementById && s && i ? (n = e.getElementById(a)) ? [n] : [] : 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType ? [] : z.call(s && !i && e.getElementsByClassName ? r ? e.getElementsByClassName(a) : e.getElementsByTagName(t) : e.querySelectorAll(t)) }, C.contains = A.documentElement.contains ? function(e, t) {
            return e !== t && e.contains(t) } : function(e, t) {
            for (; t && (t = t.parentNode);)
                if (t === e) return !0;
            return !1 }, C.type = e, C.isFunction = t, C.isWindow = n, C.isArray = Q, C.isPlainObject = a, C.isEmptyObject = function(e) {
            var t;
            for (t in e) return !1;
            return !0 }, C.isNumeric = function(e) {
            var t = Number(e),
                n = typeof e;
            return null != e && "boolean" != n && ("string" != n || e.length) && !isNaN(t) && isFinite(t) || !1 }, C.inArray = function(e, t, n) {
            return M.indexOf.call(t, e, n) }, C.camelCase = k, C.trim = function(e) {
            return null == e ? "" : String.prototype.trim.call(e) }, C.uuid = 0, C.support = {}, C.expr = {}, C.noop = function() {}, C.map = function(e, t) {
            var n, i, r, a = [];
            if (s(e))
                for (i = 0; i < e.length; i++) n = t(e[i], i), null != n && a.push(n);
            else
                for (r in e) n = t(e[r], r), null != n && a.push(n);
            return l(a) }, C.each = function(e, t) {
            var n, i;
            if (s(e)) {
                for (n = 0; n < e.length; n++)
                    if (t.call(e[n], n, e[n]) === !1) return e } else
                for (i in e)
                    if (t.call(e[i], i, e[i]) === !1) return e; return e }, C.grep = function(e, t) {
            return D.call(e, t) }, window.JSON && (C.parseJSON = JSON.parse), C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) { $["[object " + t + "]"] = t.toLowerCase() }), C.fn = { constructor: K.Z, length: 0, forEach: M.forEach, reduce: M.reduce, push: M.push, sort: M.sort, splice: M.splice, indexOf: M.indexOf, concat: function() {
                var e, t, n = [];
                for (e = 0; e < arguments.length; e++) t = arguments[e], n[e] = K.isZ(t) ? t.toArray() : t;
                return N.apply(K.isZ(this) ? this.toArray() : this, n) }, map: function(e) {
                return C(C.map(this, function(t, n) {
                    return e.call(t, n, t) })) }, slice: function() {
                return C(z.apply(this, arguments)) }, ready: function(e) {
                return G.test(A.readyState) && A.body ? e(C) : A.addEventListener("DOMContentLoaded", function() { e(C) }, !1), this }, get: function(e) {
                return e === T ? z.call(this) : this[e >= 0 ? e : e + this.length] }, toArray: function() {
                return this.get() }, size: function() {
                return this.length }, remove: function() {
                return this.each(function() { null != this.parentNode && this.parentNode.removeChild(this) }) }, each: function(e) {
                return M.every.call(this, function(t, n) {
                    return e.call(t, n, t) !== !1 }), this }, filter: function(e) {
                return t(e) ? this.not(this.not(e)) : C(D.call(this, function(t) {
                    return K.matches(t, e) })) }, add: function(e, t) {
                return C(P(this.concat(C(e, t)))) }, is: function(e) {
                return this.length > 0 && K.matches(this[0], e) }, not: function(e) {
                var n = [];
                if (t(e) && e.call !== T) this.each(function(t) { e.call(this, t) || n.push(this) });
                else {
                    var i = "string" == typeof e ? this.filter(e) : s(e) && t(e.item) ? z.call(e) : C(e);
                    this.forEach(function(e) { i.indexOf(e) < 0 && n.push(e) }) }
                return C(n) }, has: function(e) {
                return this.filter(function() {
                    return r(e) ? C.contains(this, e) : C(this).find(e).size() }) }, eq: function(e) {
                return e === -1 ? this.slice(e) : this.slice(e, +e + 1) }, first: function() {
                var e = this[0];
                return e && !r(e) ? e : C(e) }, last: function() {
                var e = this[this.length - 1];
                return e && !r(e) ? e : C(e) }, find: function(e) {
                var t, n = this;
                return t = e ? "object" == typeof e ? C(e).filter(function() {
                    var e = this;
                    return M.some.call(n, function(t) {
                        return C.contains(t, e) }) }) : 1 == this.length ? C(K.qsa(this[0], e)) : this.map(function() {
                    return K.qsa(this, e) }) : C() }, closest: function(e, t) {
                var n = [],
                    r = "object" == typeof e && C(e);
                return this.each(function(a, s) {
                    for (; s && !(r ? r.indexOf(s) >= 0 : K.matches(s, e));) s = s !== t && !i(s) && s.parentNode;
                    s && n.indexOf(s) < 0 && n.push(s) }), C(n) }, parents: function(e) {
                for (var t = [], n = this; n.length > 0;) n = C.map(n, function(e) {
                    if ((e = e.parentNode) && !i(e) && t.indexOf(e) < 0) return t.push(e), e });
                return g(t, e) }, parent: function(e) {
                return g(P(this.pluck("parentNode")), e) }, children: function(e) {
                return g(this.map(function() {
                    return h(this) }), e) }, contents: function() {
                return this.map(function() {
                    return this.contentDocument || z.call(this.childNodes) }) }, siblings: function(e) {
                return g(this.map(function(e, t) {
                    return D.call(h(t.parentNode), function(e) {
                        return e !== t }) }), e) }, empty: function() {
                return this.each(function() { this.innerHTML = "" }) }, pluck: function(e) {
                return C.map(this, function(t) {
                    return t[e] }) }, show: function() {
                return this.each(function() { "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = d(this.nodeName)) }) }, replaceWith: function(e) {
                return this.before(e).remove() }, wrap: function(e) {
                var n = t(e);
                if (this[0] && !n) var i = C(e).get(0),
                    r = i.parentNode || this.length > 1;
                return this.each(function(t) { C(this).wrapAll(n ? e.call(this, t) : r ? i.cloneNode(!0) : i) }) }, wrapAll: function(e) {
                if (this[0]) { C(this[0]).before(e = C(e));
                    for (var t;
                        (t = e.children()).length;) e = t.first();
                    C(e).append(this) }
                return this }, wrapInner: function(e) {
                var n = t(e);
                return this.each(function(t) {
                    var i = C(this),
                        r = i.contents(),
                        a = n ? e.call(this, t) : e;
                    r.length ? r.wrapAll(a) : i.append(a) }) }, unwrap: function() {
                return this.parent().each(function() { C(this).replaceWith(C(this).children()) }), this }, clone: function() {
                return this.map(function() {
                    return this.cloneNode(!0) }) }, hide: function() {
                return this.css("display", "none") }, toggle: function(e) {
                return this.each(function() {
                    var t = C(this);
                    (e === T ? "none" == t.css("display") : e) ? t.show(): t.hide() }) }, prev: function(e) {
                return C(this.pluck("previousElementSibling")).filter(e || "*") }, next: function(e) {
                return C(this.pluck("nextElementSibling")).filter(e || "*") }, html: function(e) {
                return 0 in arguments ? this.each(function(t) {
                    var n = this.innerHTML;
                    C(this).empty().append(v(this, e, t, n)) }) : 0 in this ? this[0].innerHTML : null }, text: function(e) {
                return 0 in arguments ? this.each(function(t) {
                    var n = v(this, e, t, this.textContent);
                    this.textContent = null == n ? "" : "" + n }) : 0 in this ? this.pluck("textContent").join("") : null }, attr: function(e, t) {
                var n;
                return "string" != typeof e || 1 in arguments ? this.each(function(n) {
                    if (1 === this.nodeType)
                        if (r(e))
                            for (S in e) y(this, S, e[S]);
                        else y(this, e, v(this, t, n, this.getAttribute(e))) }) : 0 in this && 1 == this[0].nodeType && null != (n = this[0].getAttribute(e)) ? n : T }, removeAttr: function(e) {
                return this.each(function() { 1 === this.nodeType && e.split(" ").forEach(function(e) { y(this, e) }, this) }) }, prop: function(e, t) {
                return e = J[e] || e, 1 in arguments ? this.each(function(n) { this[e] = v(this, t, n, this[e]) }) : this[0] && this[0][e] }, removeProp: function(e) {
                return e = J[e] || e, this.each(function() { delete this[e] }) }, data: function(e, t) {
                var n = "data-" + e.replace(_, "-$1").toLowerCase(),
                    i = 1 in arguments ? this.attr(n, t) : this.attr(n);
                return null !== i ? x(i) : T }, val: function(e) {
                return 0 in arguments ? (null == e && (e = ""), this.each(function(t) { this.value = v(this, e, t, this.value) })) : this[0] && (this[0].multiple ? C(this[0]).find("option").filter(function() {
                    return this.selected }).pluck("value") : this[0].value) }, offset: function(e) {
                if (e) return this.each(function(t) {
                    var n = C(this),
                        i = v(this, e, t, n.offset()),
                        r = n.offsetParent().offset(),
                        a = { top: i.top - r.top, left: i.left - r.left }; "static" == n.css("position") && (a.position = "relative"), n.css(a) });
                if (!this.length) return null;
                if (A.documentElement !== this[0] && !C.contains(A.documentElement, this[0])) return { top: 0, left: 0 };
                var t = this[0].getBoundingClientRect();
                return { left: t.left + window.pageXOffset, top: t.top + window.pageYOffset, width: Math.round(t.width), height: Math.round(t.height) } }, css: function(t, n) {
                if (arguments.length < 2) {
                    var i = this[0];
                    if ("string" == typeof t) {
                        if (!i) return;
                        return i.style[k(t)] || getComputedStyle(i, "").getPropertyValue(t) }
                    if (Q(t)) {
                        if (!i) return;
                        var r = {},
                            a = getComputedStyle(i, "");
                        return C.each(t, function(e, t) { r[t] = i.style[k(t)] || a.getPropertyValue(t) }), r } }
                var s = "";
                if ("string" == e(t)) n || 0 === n ? s = c(t) + ":" + p(t, n) : this.each(function() { this.style.removeProperty(c(t)) });
                else
                    for (S in t) t[S] || 0 === t[S] ? s += c(S) + ":" + p(S, t[S]) + ";" : this.each(function() { this.style.removeProperty(c(S)) });
                return this.each(function() { this.style.cssText += ";" + s }) }, index: function(e) {
                return e ? this.indexOf(C(e)[0]) : this.parent().children().indexOf(this[0]) }, hasClass: function(e) {
                return !!e && M.some.call(this, function(e) {
                    return this.test(w(e)) }, u(e)) }, addClass: function(e) {
                return e ? this.each(function(t) {
                    if ("className" in this) { E = [];
                        var n = w(this),
                            i = v(this, e, t, n);
                        i.split(/\s+/g).forEach(function(e) { C(this).hasClass(e) || E.push(e) }, this), E.length && w(this, n + (n ? " " : "") + E.join(" ")) } }) : this }, removeClass: function(e) {
                return this.each(function(t) {
                    if ("className" in this) {
                        if (e === T) return w(this, "");
                        E = w(this), v(this, e, t, E).split(/\s+/g).forEach(function(e) { E = E.replace(u(e), " ") }), w(this, E.trim()) } }) }, toggleClass: function(e, t) {
                return e ? this.each(function(n) {
                    var i = C(this),
                        r = v(this, e, n, w(this));
                    r.split(/\s+/g).forEach(function(e) {
                        (t === T ? !i.hasClass(e) : t) ? i.addClass(e): i.removeClass(e) }) }) : this }, scrollTop: function(e) {
                if (this.length) {
                    var t = "scrollTop" in this[0];
                    return e === T ? t ? this[0].scrollTop : this[0].pageYOffset : this.each(t ? function() { this.scrollTop = e } : function() { this.scrollTo(this.scrollX, e) }) } }, scrollLeft: function(e) {
                if (this.length) {
                    var t = "scrollLeft" in this[0];
                    return e === T ? t ? this[0].scrollLeft : this[0].pageXOffset : this.each(t ? function() { this.scrollLeft = e } : function() { this.scrollTo(e, this.scrollY) }) } }, position: function() {
                if (this.length) {
                    var e = this[0],
                        t = this.offsetParent(),
                        n = this.offset(),
                        i = X.test(t[0].nodeName) ? { top: 0, left: 0 } : t.offset();
                    return n.top -= parseFloat(C(e).css("margin-top")) || 0, n.left -= parseFloat(C(e).css("margin-left")) || 0, i.top += parseFloat(C(t[0]).css("border-top-width")) || 0, i.left += parseFloat(C(t[0]).css("border-left-width")) || 0, { top: n.top - i.top, left: n.left - i.left } } }, offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || A.body; e && !X.test(e.nodeName) && "static" == C(e).css("position");) e = e.offsetParent;
                    return e }) } }, C.fn.detach = C.fn.remove, ["width", "height"].forEach(function(e) {
            var t = e.replace(/./, function(e) {
                return e[0].toUpperCase() });
            C.fn[e] = function(r) {
                var a, s = this[0];
                return r === T ? n(s) ? s["inner" + t] : i(s) ? s.documentElement["scroll" + t] : (a = this.offset()) && a[e] : this.each(function(t) { s = C(this), s.css(e, v(this, r, t, s[e]())) }) } }), Y.forEach(function(t, n) {
            var i = n % 2;
            C.fn[t] = function() {
                var t, r, a = C.map(arguments, function(n) {
                        var i = [];
                        return t = e(n), "array" == t ? (n.forEach(function(e) {
                            return e.nodeType !== T ? i.push(e) : C.zepto.isZ(e) ? i = i.concat(e.get()) : void(i = i.concat(K.fragment(e))) }), i) : "object" == t || null == n ? n : K.fragment(n) }),
                    s = this.length > 1;
                return a.length < 1 ? this : this.each(function(e, t) { r = i ? t : t.parentNode, t = 0 == n ? t.nextSibling : 1 == n ? t.firstChild : 2 == n ? t : null;
                    var o = C.contains(A.documentElement, r);
                    a.forEach(function(e) {
                        if (s) e = e.cloneNode(!0);
                        else if (!r) return C(e).remove();
                        r.insertBefore(e, t), o && b(e, function(e) {
                            if (!(null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src)) {
                                var t = e.ownerDocument ? e.ownerDocument.defaultView : window;
                                t.eval.call(t, e.innerHTML) } }) }) }) }, C.fn[i ? t + "To" : "insert" + (n ? "Before" : "After")] = function(e) {
                return C(e)[t](this), this } }), K.Z.prototype = f.prototype = C.fn, K.uniq = P, K.deserializeValue = x, C.zepto = K, C }();
    e.exports = n }, function(e, t, n) {
    var i = n(3);! function(e) {
        function t(t, n, i) {
            var r = e.Event(n);
            return e(t).trigger(r, i), !r.isDefaultPrevented() }

        function n(e, n, i, r) {
            if (e.global) return t(n || w, i, r) }

        function i(t) { t.global && 0 === e.active++ && n(t, null, "ajaxStart") }

        function r(t) { t.global && !--e.active && n(t, null, "ajaxStop") }

        function a(e, t) {
            var i = t.context;
            return t.beforeSend.call(i, e, t) !== !1 && n(t, i, "ajaxBeforeSend", [e, t]) !== !1 && void n(t, i, "ajaxSend", [e, t]) }

        function s(e, t, i, r) {
            var a = i.context,
                s = "success";
            i.success.call(a, e, s, t), r && r.resolveWith(a, [e, s, t]), n(i, a, "ajaxSuccess", [t, i, e]), l(s, t, i) }

        function o(e, t, i, r, a) {
            var s = r.context;
            r.error.call(s, i, t, e), a && a.rejectWith(s, [i, t, e]), n(r, s, "ajaxError", [i, r, e || t]), l(t, i, r) }

        function l(e, t, i) {
            var a = i.context;
            i.complete.call(a, t, e), n(i, a, "ajaxComplete", [t, i]), r(i) }

        function c(e, t, n) {
            if (n.dataFilter == u) return e;
            var i = n.context;
            return n.dataFilter.call(i, e, t) }

        function u() {}

        function p(e) {
            return e && (e = e.split(";", 2)[0]), e && (e == C ? "html" : e == S ? "json" : b.test(e) ? "script" : T.test(e) && "xml") || "text" }

        function d(e, t) {
            return "" == t ? e : (e + "&" + t).replace(/[&?]{1,2}/, "?") }

        function h(t) { t.processData && t.data && "string" != e.type(t.data) && (t.data = e.param(t.data, t.traditional)), !t.data || t.type && "GET" != t.type.toUpperCase() && "jsonp" != t.dataType || (t.url = d(t.url, t.data), t.data = void 0) }

        function f(t, n, i, r) {
            return e.isFunction(n) && (r = i, i = n, n = void 0), e.isFunction(i) || (r = i, i = void 0), { url: t, data: n, success: i, dataType: r } }

        function m(t, n, i, r) {
            var a, s = e.isArray(n),
                o = e.isPlainObject(n);
            e.each(n, function(n, l) { a = e.type(l), r && (n = i ? r : r + "[" + (o || "object" == a || "array" == a ? n : "") + "]"), !r && s ? t.add(l.name, l.value) : "array" == a || !i && "object" == a ? m(t, l, i, n) : t.add(n, l) }) }
        var g, v, y = +new Date,
            w = window.document,
            x = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            b = /^(?:text|application)\/javascript/i,
            T = /^(?:text|application)\/xml/i,
            S = "application/json",
            C = "text/html",
            E = /^\s*$/,
            k = w.createElement("a");
        k.href = window.location.href, e.active = 0, e.ajaxJSONP = function(t, n) {
            if (!("type" in t)) return e.ajax(t);
            var i, r, l = t.jsonpCallback,
                c = (e.isFunction(l) ? l() : l) || "Zepto" + y++,
                u = w.createElement("script"),
                p = window[c],
                d = function(t) { e(u).triggerHandler("error", t || "abort") },
                h = { abort: d };
            return n && n.promise(h), e(u).on("load error", function(a, l) { clearTimeout(r), e(u).off().remove(), "error" != a.type && i ? s(i[0], h, t, n) : o(null, l || "error", h, t, n), window[c] = p, i && e.isFunction(p) && p(i[0]), p = i = void 0 }), a(h, t) === !1 ? (d("abort"), h) : (window[c] = function() { i = arguments }, u.src = t.url.replace(/\?(.+)=\?/, "?$1=" + c), w.head.appendChild(u), t.timeout > 0 && (r = setTimeout(function() { d("timeout") }, t.timeout)), h) }, e.ajaxSettings = { type: "GET", beforeSend: u, success: u, error: u, complete: u, context: null, global: !0, xhr: function() {
                return new window.XMLHttpRequest }, accepts: { script: "text/javascript, application/javascript, application/x-javascript", json: S, xml: "application/xml, text/xml", html: C, text: "text/plain" }, crossDomain: !1, timeout: 0, processData: !0, cache: !0, dataFilter: u }, e.ajax = function(t) {
            var n, r, l = e.extend({}, t || {}),
                f = e.Deferred && e.Deferred();
            for (g in e.ajaxSettings) void 0 === l[g] && (l[g] = e.ajaxSettings[g]);
            i(l), l.crossDomain || (n = w.createElement("a"), n.href = l.url, n.href = n.href, l.crossDomain = k.protocol + "//" + k.host != n.protocol + "//" + n.host), l.url || (l.url = window.location.toString()), (r = l.url.indexOf("#")) > -1 && (l.url = l.url.slice(0, r)), h(l);
            var m = l.dataType,
                y = /\?.+=\?/.test(l.url);
            if (y && (m = "jsonp"), l.cache !== !1 && (t && t.cache === !0 || "script" != m && "jsonp" != m) || (l.url = d(l.url, "_=" + Date.now())), "jsonp" == m) return y || (l.url = d(l.url, l.jsonp ? l.jsonp + "=?" : l.jsonp === !1 ? "" : "callback=?")), e.ajaxJSONP(l, f);
            var x, b = l.accepts[m],
                T = {},
                S = function(e, t) { T[e.toLowerCase()] = [e, t] },
                C = /^([\w-]+:)\/\//.test(l.url) ? RegExp.$1 : window.location.protocol,
                P = l.xhr(),
                M = P.setRequestHeader;
            if (f && f.promise(P), l.crossDomain || S("X-Requested-With", "XMLHttpRequest"), S("Accept", b || "*/*"), (b = l.mimeType || b) && (b.indexOf(",") > -1 && (b = b.split(",", 2)[0]), P.overrideMimeType && P.overrideMimeType(b)), (l.contentType || l.contentType !== !1 && l.data && "GET" != l.type.toUpperCase()) && S("Content-Type", l.contentType || "application/x-www-form-urlencoded"), l.headers)
                for (v in l.headers) S(v, l.headers[v]);
            if (P.setRequestHeader = S, P.onreadystatechange = function() {
                    if (4 == P.readyState) { P.onreadystatechange = u, clearTimeout(x);
                        var t, n = !1;
                        if (P.status >= 200 && P.status < 300 || 304 == P.status || 0 == P.status && "file:" == C) {
                            if (m = m || p(l.mimeType || P.getResponseHeader("content-type")), "arraybuffer" == P.responseType || "blob" == P.responseType) t = P.response;
                            else { t = P.responseText;
                                try { t = c(t, m, l), "script" == m ? (0, eval)(t) : "xml" == m ? t = P.responseXML : "json" == m && (t = E.test(t) ? null : e.parseJSON(t)) } catch (e) { n = e }
                                if (n) return o(n, "parsererror", P, l, f) }
                            s(t, P, l, f) } else o(P.statusText || null, P.status ? "error" : "abort", P, l, f) } }, a(P, l) === !1) return P.abort(), o(null, "abort", P, l, f), P;
            var N = !("async" in l) || l.async;
            if (P.open(l.type, l.url, N, l.username, l.password), l.xhrFields)
                for (v in l.xhrFields) P[v] = l.xhrFields[v];
            for (v in T) M.apply(P, T[v]);
            return l.timeout > 0 && (x = setTimeout(function() { P.onreadystatechange = u, P.abort(), o(null, "timeout", P, l, f) }, l.timeout)), P.send(l.data ? l.data : null), P }, e.get = function() {
            return e.ajax(f.apply(null, arguments)) }, e.post = function() {
            var t = f.apply(null, arguments);
            return t.type = "POST", e.ajax(t) }, e.getJSON = function() {
            var t = f.apply(null, arguments);
            return t.dataType = "json", e.ajax(t) }, e.fn.load = function(t, n, i) {
            if (!this.length) return this;
            var r, a = this,
                s = t.split(/\s/),
                o = f(t, n, i),
                l = o.success;
            return s.length > 1 && (o.url = s[0], r = s[1]), o.success = function(t) { a.html(r ? e("<div>").html(t.replace(x, "")).find(r) : t), l && l.apply(a, arguments) }, e.ajax(o), this };
        var P = encodeURIComponent;
        e.param = function(t, n) {
            var i = [];
            return i.add = function(t, n) { e.isFunction(n) && (n = n()), null == n && (n = ""), this.push(P(t) + "=" + P(n)) }, m(i, t, n), i.join("&").replace(/%20/g, "+") } }(i) }, function(e, t, n) {
    var i = n(3);! function(e) {
        function t(e) {
            return e._zid || (e._zid = d++) }

        function n(e, n, a, s) {
            if (n = i(n), n.ns) var o = r(n.ns);
            return (g[t(e)] || []).filter(function(e) {
                return e && (!n.e || e.e == n.e) && (!n.ns || o.test(e.ns)) && (!a || t(e.fn) === t(a)) && (!s || e.sel == s) }) }

        function i(e) {
            var t = ("" + e).split(".");
            return { e: t[0], ns: t.slice(1).sort().join(" ") } }

        function r(e) {
            return new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)") }

        function a(e, t) {
            return e.del && !y && e.e in w || !!t }

        function s(e) {
            return x[e] || y && w[e] || e }

        function o(n, r, o, l, u, d, h) {
            var f = t(n),
                m = g[f] || (g[f] = []);
            r.split(/\s/).forEach(function(t) {
                if ("ready" == t) return e(document).ready(o);
                var r = i(t);
                r.fn = o, r.sel = u, r.e in x && (o = function(t) {
                    var n = t.relatedTarget;
                    if (!n || n !== this && !e.contains(this, n)) return r.fn.apply(this, arguments) }), r.del = d;
                var f = d || o;
                r.proxy = function(e) {
                    if (e = c(e), !e.isImmediatePropagationStopped()) { e.data = l;
                        var t = f.apply(n, e._args == p ? [e] : [e].concat(e._args));
                        return t === !1 && (e.preventDefault(), e.stopPropagation()), t } }, r.i = m.length, m.push(r), "addEventListener" in n && n.addEventListener(s(r.e), r.proxy, a(r, h)) }) }

        function l(e, i, r, o, l) {
            var c = t(e);
            (i || "").split(/\s/).forEach(function(t) { n(e, t, r, o).forEach(function(t) { delete g[c][t.i], "removeEventListener" in e && e.removeEventListener(s(t.e), t.proxy, a(t, l)) }) }) }

        function c(t, n) {
            if (n || !t.isDefaultPrevented) { n || (n = t), e.each(C, function(e, i) {
                    var r = n[e];
                    t[e] = function() {
                        return this[i] = b, r && r.apply(n, arguments) }, t[i] = T });
                try { t.timeStamp || (t.timeStamp = Date.now()) } catch (e) {}(n.defaultPrevented !== p ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (t.isDefaultPrevented = b) }
            return t }

        function u(e) {
            var t, n = { originalEvent: e };
            for (t in e) S.test(t) || e[t] === p || (n[t] = e[t]);
            return c(n, e) }
        var p, d = 1,
            h = Array.prototype.slice,
            f = e.isFunction,
            m = function(e) {
                return "string" == typeof e },
            g = {},
            v = {},
            y = "onfocusin" in window,
            w = { focus: "focusin", blur: "focusout" },
            x = { mouseenter: "mouseover", mouseleave: "mouseout" };
        v.click = v.mousedown = v.mouseup = v.mousemove = "MouseEvents", e.event = { add: o, remove: l }, e.proxy = function(n, i) {
            var r = 2 in arguments && h.call(arguments, 2);
            if (f(n)) {
                var a = function() {
                    return n.apply(i, r ? r.concat(h.call(arguments)) : arguments) };
                return a._zid = t(n), a }
            if (m(i)) return r ? (r.unshift(n[i], n), e.proxy.apply(null, r)) : e.proxy(n[i], n);
            throw new TypeError("expected function") }, e.fn.bind = function(e, t, n) {
            return this.on(e, t, n) }, e.fn.unbind = function(e, t) {
            return this.off(e, t) }, e.fn.one = function(e, t, n, i) {
            return this.on(e, t, n, i, 1) };
        var b = function() {
                return !0 },
            T = function() {
                return !1 },
            S = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
            C = { preventDefault: "isDefaultPrevented", stopImmediatePropagation: "isImmediatePropagationStopped", stopPropagation: "isPropagationStopped" };
        e.fn.delegate = function(e, t, n) {
            return this.on(t, e, n) }, e.fn.undelegate = function(e, t, n) {
            return this.off(t, e, n) }, e.fn.live = function(t, n) {
            return e(document.body).delegate(this.selector, t, n), this }, e.fn.die = function(t, n) {
            return e(document.body).undelegate(this.selector, t, n), this }, e.fn.on = function(t, n, i, r, a) {
            var s, c, d = this;
            return t && !m(t) ? (e.each(t, function(e, t) { d.on(e, n, i, t, a) }), d) : (m(n) || f(r) || r === !1 || (r = i, i = n, n = p), r !== p && i !== !1 || (r = i, i = p), r === !1 && (r = T), d.each(function(p, d) { a && (s = function(e) {
                    return l(d, e.type, r), r.apply(this, arguments) }), n && (c = function(t) {
                    var i, a = e(t.target).closest(n, d).get(0);
                    if (a && a !== d) return i = e.extend(u(t), { currentTarget: a, liveFired: d }), (s || r).apply(a, [i].concat(h.call(arguments, 1))) }), o(d, t, r, i, n, c || s) })) }, e.fn.off = function(t, n, i) {
            var r = this;
            return t && !m(t) ? (e.each(t, function(e, t) { r.off(e, n, t) }), r) : (m(n) || f(i) || i === !1 || (i = n, n = p), i === !1 && (i = T), r.each(function() { l(this, t, i, n) })) }, e.fn.trigger = function(t, n) {
            return t = m(t) || e.isPlainObject(t) ? e.Event(t) : c(t), t._args = n, this.each(function() { t.type in w && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n) }) }, e.fn.triggerHandler = function(t, i) {
            var r, a;
            return this.each(function(s, o) { r = u(m(t) ? e.Event(t) : t), r._args = i, r.target = o, e.each(n(o, t.type || t), function(e, t) {
                    if (a = t.proxy(r), r.isImmediatePropagationStopped()) return !1 }) }), a }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t) { e.fn[t] = function(e) {
                return 0 in arguments ? this.bind(t, e) : this.trigger(t) } }), e.Event = function(e, t) { m(e) || (t = e, e = t.type);
            var n = document.createEvent(v[e] || "Events"),
                i = !0;
            if (t)
                for (var r in t) "bubbles" == r ? i = !!t[r] : n[r] = t[r];
            return n.initEvent(e, i, !0), c(n) } }(i) }, function(e, t, n) {
    var i = n(3);! function(e) { e.fn.serializeArray = function() {
            var t, n, i = [],
                r = function(e) {
                    return e.forEach ? e.forEach(r) : void i.push({ name: t, value: e }) };
            return this[0] && e.each(this[0].elements, function(i, a) { n = a.type, t = a.name, t && "fieldset" != a.nodeName.toLowerCase() && !a.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || a.checked) && r(e(a).val()) }), i }, e.fn.serialize = function() {
            var e = [];
            return this.serializeArray().forEach(function(t) { e.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value)) }), e.join("&") }, e.fn.submit = function(t) {
            if (0 in arguments) this.bind("submit", t);
            else if (this.length) {
                var n = e.Event("submit");
                this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit() }
            return this } }(i) }, function(e, t) {! function() {
        try { getComputedStyle(void 0) } catch (t) {
            var e = getComputedStyle;
            window.getComputedStyle = function(t, n) {
                try {
                    return e(t, n) } catch (e) {
                    return null } } } }() }, function(e, t, n) {
    var i = n(3);! function(e) {
        function t(e, t) {
            var n = this.os = {},
                i = this.browser = {},
                r = e.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
                a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                s = !!e.match(/\(Macintosh\; Intel /),
                o = e.match(/(iPad).*OS\s([\d_]+)/),
                l = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                c = !o && e.match(/(iPhone\sOS)\s([\d_]+)/),
                u = e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
                p = /Win\d{2}|Windows/.test(t),
                d = e.match(/Windows Phone ([\d.]+)/),
                h = u && e.match(/TouchPad/),
                f = e.match(/Kindle\/([\d.]+)/),
                m = e.match(/Silk\/([\d._]+)/),
                g = e.match(/(BlackBerry).*Version\/([\d.]+)/),
                v = e.match(/(BB10).*Version\/([\d.]+)/),
                y = e.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
                w = e.match(/PlayBook/),
                x = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/),
                b = e.match(/Firefox\/([\d.]+)/),
                T = e.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
                S = e.match(/MSIE\s([\d.]+)/) || e.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
                C = !x && e.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
                E = C || e.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
            (i.webkit = !!r) && (i.version = r[1]), a && (n.android = !0, n.version = a[2]), c && !l && (n.ios = n.iphone = !0, n.version = c[2].replace(/_/g, ".")), o && (n.ios = n.ipad = !0, n.version = o[2].replace(/_/g, ".")), l && (n.ios = n.ipod = !0, n.version = l[3] ? l[3].replace(/_/g, ".") : null), d && (n.wp = !0, n.version = d[1]), u && (n.webos = !0, n.version = u[2]), h && (n.touchpad = !0), g && (n.blackberry = !0, n.version = g[2]), v && (n.bb10 = !0, n.version = v[2]), y && (n.rimtabletos = !0, n.version = y[2]), w && (i.playbook = !0), f && (n.kindle = !0, n.version = f[1]), m && (i.silk = !0, i.version = m[1]), !m && n.android && e.match(/Kindle Fire/) && (i.silk = !0), x && (i.chrome = !0, i.version = x[1]), b && (i.firefox = !0, i.version = b[1]), T && (n.firefoxos = !0, n.version = T[1]), S && (i.ie = !0, i.version = S[1]), E && (s || n.ios || p) && (i.safari = !0, n.ios || (i.version = E[1])), C && (i.webview = !0), n.tablet = !!(o || w || a && !e.match(/Mobile/) || b && e.match(/Tablet/) || S && !e.match(/Phone/) && e.match(/Touch/)), n.phone = !(n.tablet || n.ipod || !(a || c || u || g || v || x && e.match(/Android/) || x && e.match(/CriOS\/([\d.]+)/) || b && e.match(/Mobile/) || S && e.match(/Touch/))) }
        t.call(e, navigator.userAgent, navigator.platform), e.__detect = t }(i) }, function(e, t, n) {
    var i = n(3);! function(e) {
        function t(t, i) {
            var l = t[o],
                c = l && r[l];
            if (void 0 === i) return c || n(t);
            if (c) {
                if (i in c) return c[i];
                var u = s(i);
                if (u in c) return c[u] }
            return a.call(e(t), i) }

        function n(t, n, a) {
            var l = t[o] || (t[o] = ++e.uuid),
                c = r[l] || (r[l] = i(t));
            return void 0 !== n && (c[s(n)] = a), c }

        function i(t) {
            var n = {};
            return e.each(t.attributes || l, function(t, i) { 0 == i.name.indexOf("data-") && (n[s(i.name.replace("data-", ""))] = e.zepto.deserializeValue(i.value)) }), n }
        var r = {},
            a = e.fn.data,
            s = e.camelCase,
            o = e.expando = "Zepto" + +new Date,
            l = [];
        e.fn.data = function(i, r) {
            return void 0 === r ? e.isPlainObject(i) ? this.each(function(t, r) { e.each(i, function(e, t) { n(r, e, t) }) }) : 0 in this ? t(this[0], i) : void 0 : this.each(function() { n(this, i, r) }) }, e.data = function(t, n, i) {
            return e(t).data(n, i) }, e.hasData = function(t) {
            var n = t[o],
                i = n && r[n];
            return !!i && !e.isEmptyObject(i) }, e.fn.removeData = function(t) {
            return "string" == typeof t && (t = t.split(/\s+/)), this.each(function() {
                var n = this[o],
                    i = n && r[n];
                i && e.each(t || i, function(e) { delete i[t ? s(this) : e] }) }) }, ["remove", "empty"].forEach(function(t) {
            var n = e.fn[t];
            e.fn[t] = function() {
                var e = this.find("*");
                return "remove" === t && (e = e.add(this)), e.removeData(), n.call(this) } }) }(i) }, function(e, t, n) {
    var i = n(3);
    ! function(e) {
        function t(e, t, n, i) {
            return Math.abs(e - t) >= Math.abs(n - i) ? e - t > 0 ? "Left" : "Right" : n - i > 0 ? "Up" : "Down" }

        function n() { u = null, d.last && (d.el.trigger("longTap"), d = {}) }

        function i() { u && clearTimeout(u), u = null }

        function r() {
            o && clearTimeout(o), l && clearTimeout(l), c && clearTimeout(c), u && clearTimeout(u),
                o = l = c = u = null, d = {}
        }

        function a(e) {
            return ("touch" == e.pointerType || e.pointerType == e.MSPOINTER_TYPE_TOUCH) && e.isPrimary }

        function s(e, t) {
            return e.type == "pointer" + t || e.type.toLowerCase() == "mspointer" + t }
        var o, l, c, u, p, d = {},
            h = 750;
        e(document).ready(function() {
            var f, m, g, v, y = 0,
                w = 0; "MSGesture" in window && (p = new MSGesture, p.target = document.body), e(document).bind("MSGestureEnd", function(e) {
                var t = e.velocityX > 1 ? "Right" : e.velocityX < -1 ? "Left" : e.velocityY > 1 ? "Down" : e.velocityY < -1 ? "Up" : null;
                t && (d.el.trigger("swipe"), d.el.trigger("swipe" + t)) }).on("touchstart MSPointerDown pointerdown", function(t) {
                (v = s(t, "down")) && !a(t) || (g = v ? t : t.touches[0], t.touches && 1 === t.touches.length && d.x2 && (d.x2 = void 0, d.y2 = void 0), f = Date.now(), m = f - (d.last || f), d.el = e("tagName" in g.target ? g.target : g.target.parentNode), o && clearTimeout(o), d.x1 = g.pageX, d.y1 = g.pageY, m > 0 && m <= 250 && (d.isDoubleTap = !0), d.last = f, u = setTimeout(n, h), p && v && p.addPointer(t.pointerId)) }).on("touchmove MSPointerMove pointermove", function(e) {
                (v = s(e, "move")) && !a(e) || (g = v ? e : e.touches[0], i(), d.x2 = g.pageX, d.y2 = g.pageY, y += Math.abs(d.x1 - d.x2), w += Math.abs(d.y1 - d.y2)) }).on("touchend MSPointerUp pointerup", function(n) {
                (v = s(n, "up")) && !a(n) || (i(), d.x2 && Math.abs(d.x1 - d.x2) > 30 || d.y2 && Math.abs(d.y1 - d.y2) > 30 ? c = setTimeout(function() { d.el && (d.el.trigger("swipe"), d.el.trigger("swipe" + t(d.x1, d.x2, d.y1, d.y2))), d = {} }, 0) : "last" in d && (y < 30 && w < 30 ? l = setTimeout(function() {
                    var t = e.Event("tap");
                    t.cancelTouch = r, d.el && d.el.trigger(t), d.isDoubleTap ? (d.el && d.el.trigger("doubleTap"), d = {}) : o = setTimeout(function() { o = null, d.el && d.el.trigger("singleTap"), d = {} }, 250) }, 0) : d = {}), y = w = 0) }).on("touchcancel MSPointerCancel pointercancel", r), e(window).on("scroll", r) }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(t) { e.fn[t] = function(e) {
                return this.on(t, e) } })
    }(i)
}, function(e, t, n) {
    var i = n(3);! function(e) { e.fn.end = function() {
            return this.prevObject || e() }, e.fn.andSelf = function() {
            return this.add(this.prevObject || e()) }, "filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function(t) {
            var n = e.fn[t];
            e.fn[t] = function() {
                var e = n.apply(this, arguments);
                return e.prevObject = this, e } }) }(i) }, function(e, t, n) {
    ! function() {
        "use strict";

        function e(e) { e.fn.swiper = function(t) {
                var i;
                return e(this).each(function() {
                    var e = new n(this, t);
                    i || (i = e) }), i } }
        var t, n = function(e, r) {
            function a(e) {
                return Math.floor(e) }

            function s() { x.autoplayTimeoutId = setTimeout(function() { x.params.loop ? (x.fixLoop(), x._slideNext(), x.emit("onAutoplay", x)) : x.isEnd ? r.autoplayStopOnLast ? x.stopAutoplay() : (x._slideTo(0), x.emit("onAutoplay", x)) : (x._slideNext(), x.emit("onAutoplay", x)) }, x.params.autoplay) }

            function o(e, n) {
                var i = t(e.target);
                if (!i.is(n))
                    if ("string" == typeof n) i = i.parents(n);
                    else if (n.nodeType) {
                    var r;
                    return i.parents().each(function(e, t) { t === n && (r = n) }), r ? n : void 0 }
                if (0 !== i.length) return i[0] }

            function l(e, t) { t = t || {};
                var n = window.MutationObserver || window.WebkitMutationObserver,
                    i = new n(function(e) { e.forEach(function(e) { x.onResize(!0), x.emit("onObserverUpdate", x, e) }) });
                i.observe(e, { attributes: "undefined" == typeof t.attributes || t.attributes, childList: "undefined" == typeof t.childList || t.childList, characterData: "undefined" == typeof t.characterData || t.characterData }), x.observers.push(i) }

            function c(e) { e.originalEvent && (e = e.originalEvent);
                var t = e.keyCode || e.charCode;
                if (!x.params.allowSwipeToNext && (x.isHorizontal() && 39 === t || !x.isHorizontal() && 40 === t)) return !1;
                if (!x.params.allowSwipeToPrev && (x.isHorizontal() && 37 === t || !x.isHorizontal() && 38 === t)) return !1;
                if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                    if (37 === t || 39 === t || 38 === t || 40 === t) {
                        var n = !1;
                        if (x.container.parents(".swiper-slide").length > 0 && 0 === x.container.parents(".swiper-slide-active").length) return;
                        var i = { left: window.pageXOffset, top: window.pageYOffset },
                            r = window.innerWidth,
                            a = window.innerHeight,
                            s = x.container.offset();
                        x.rtl && (s.left = s.left - x.container[0].scrollLeft);
                        for (var o = [
                                [s.left, s.top],
                                [s.left + x.width, s.top],
                                [s.left, s.top + x.height],
                                [s.left + x.width, s.top + x.height]
                            ], l = 0; l < o.length; l++) {
                            var c = o[l];
                            c[0] >= i.left && c[0] <= i.left + r && c[1] >= i.top && c[1] <= i.top + a && (n = !0) }
                        if (!n) return }
                    x.isHorizontal() ? ((37 === t || 39 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === t && !x.rtl || 37 === t && x.rtl) && x.slideNext(), (37 === t && !x.rtl || 39 === t && x.rtl) && x.slidePrev()) : ((38 === t || 40 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && x.slideNext(), 38 === t && x.slidePrev()) } }

            function u(e) { e.originalEvent && (e = e.originalEvent);
                var t = x.mousewheel.event,
                    n = 0,
                    i = x.rtl ? -1 : 1;
                if ("mousewheel" === t)
                    if (x.params.mousewheelForceToAxis)
                        if (x.isHorizontal()) {
                            if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;
                            n = e.wheelDeltaX * i } else {
                            if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;
                            n = e.wheelDeltaY }
                else n = Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY) ? -e.wheelDeltaX * i : -e.wheelDeltaY;
                else if ("DOMMouseScroll" === t) n = -e.detail;
                else if ("wheel" === t)
                    if (x.params.mousewheelForceToAxis)
                        if (x.isHorizontal()) {
                            if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;
                            n = -e.deltaX * i } else {
                            if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;
                            n = -e.deltaY }
                else n = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX * i : -e.deltaY;
                if (0 !== n) {
                    if (x.params.mousewheelInvert && (n = -n), x.params.freeMode) {
                        var r = x.getWrapperTranslate() + n * x.params.mousewheelSensitivity,
                            a = x.isBeginning,
                            s = x.isEnd;
                        if (r >= x.minTranslate() && (r = x.minTranslate()), r <= x.maxTranslate() && (r = x.maxTranslate()), x.setWrapperTransition(0), x.setWrapperTranslate(r), x.updateProgress(), x.updateActiveIndex(), (!a && x.isBeginning || !s && x.isEnd) && x.updateClasses(), x.params.freeModeSticky ? (clearTimeout(x.mousewheel.timeout), x.mousewheel.timeout = setTimeout(function() { x.slideReset() }, 300)) : x.params.lazyLoading && x.lazy && x.lazy.load(), 0 === r || r === x.maxTranslate()) return } else {
                        if ((new window.Date).getTime() - x.mousewheel.lastScrollTime > 60)
                            if (0 > n)
                                if (x.isEnd && !x.params.loop || x.animating) {
                                    if (x.params.mousewheelReleaseOnEdges) return !0 } else x.slideNext();
                        else if (x.isBeginning && !x.params.loop || x.animating) {
                            if (x.params.mousewheelReleaseOnEdges) return !0 } else x.slidePrev();
                        x.mousewheel.lastScrollTime = (new window.Date).getTime() }
                    return x.params.autoplay && x.stopAutoplay(), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1 } }

            function p(e, n) { e = t(e);
                var i, r, a, s = x.rtl ? -1 : 1;
                i = e.attr("data-swiper-parallax") || "0", r = e.attr("data-swiper-parallax-x"), a = e.attr("data-swiper-parallax-y"), r || a ? (r = r || "0", a = a || "0") : x.isHorizontal() ? (r = i, a = "0") : (a = i, r = "0"), r = r.indexOf("%") >= 0 ? parseInt(r, 10) * n * s + "%" : r * n * s + "px", a = a.indexOf("%") >= 0 ? parseInt(a, 10) * n + "%" : a * n + "px", e.transform("translate3d(" + r + ", " + a + ",0px)") }

            function d(e) {
                return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e }
            if (!(this instanceof n)) return new n(e, r);
            var h = { direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, autoplay: !1, autoplayDisableOnInteraction: !0, autoplayStopOnLast: !1, iOSEdgeSwipeDetection: !1, iOSEdgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", coverflow: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 }, flip: { slideShadows: !0, limitRotation: !0 }, cube: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 }, fade: { crossFade: !1 }, parallax: !1, scrollbar: null, scrollbarHide: !0, scrollbarDraggable: !1, scrollbarSnapOnRelease: !1, keyboardControl: !1, mousewheelControl: !1, mousewheelReleaseOnEdges: !1, mousewheelInvert: !1, mousewheelForceToAxis: !1, mousewheelSensitivity: 1, hashnav: !1, breakpoints: void 0, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, onlyExternal: !1, threshold: 0, touchMoveStopPropagation: !0, uniqueNavElements: !0, pagination: null, paginationElement: "span", paginationClickable: !1, paginationHide: !1, paginationBulletRender: null, paginationProgressRender: null, paginationFractionRender: null, paginationCustomRender: null, paginationType: "bullets", resistance: !0, resistanceRatio: .85, nextButton: null, prevButton: null, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, lazyLoading: !1, lazyLoadingInPrevNext: !1, lazyLoadingInPrevNextAmount: 1, lazyLoadingOnTransitionStart: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, control: void 0, controlInverse: !1, controlBy: "slide", allowSwipeToPrev: !0, allowSwipeToNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", slideClass: "swiper-slide", slideActiveClass: "swiper-slide-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slidePrevClass: "swiper-slide-prev", wrapperClass: "swiper-wrapper", bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", buttonDisabledClass: "swiper-button-disabled", paginationCurrentClass: "swiper-pagination-current", paginationTotalClass: "swiper-pagination-total", paginationHiddenClass: "swiper-pagination-hidden", paginationProgressbarClass: "swiper-pagination-progressbar", observer: !1, observeParents: !1, a11y: !1, prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}", runCallbacksOnInit: !0 },
                f = r && r.virtualTranslate;
            r = r || {};
            var m = {};
            for (var g in r)
                if ("object" != typeof r[g] || null === r[g] || r[g].nodeType || r[g] === window || r[g] === document || "undefined" != typeof i && r[g] instanceof i || "undefined" != typeof jQuery && r[g] instanceof jQuery) m[g] = r[g];
                else { m[g] = {};
                    for (var v in r[g]) m[g][v] = r[g][v] }
            for (var y in h)
                if ("undefined" == typeof r[y]) r[y] = h[y];
                else if ("object" == typeof r[y])
                for (var w in h[y]) "undefined" == typeof r[y][w] && (r[y][w] = h[y][w]);
            var x = this;
            if (x.params = r, x.originalParams = m, x.classNames = [], "undefined" != typeof t && "undefined" != typeof i && (t = i), ("undefined" != typeof t || (t = "undefined" == typeof i ? window.Dom7 || window.Zepto || window.jQuery : i)) && (x.$ = t, x.currentBreakpoint = void 0, x.getActiveBreakpoint = function() {
                    if (!x.params.breakpoints) return !1;
                    var e, t = !1,
                        n = [];
                    for (e in x.params.breakpoints) x.params.breakpoints.hasOwnProperty(e) && n.push(e);
                    n.sort(function(e, t) {
                        return parseInt(e, 10) > parseInt(t, 10) });
                    for (var i = 0; i < n.length; i++) e = n[i], e >= window.innerWidth && !t && (t = e);
                    return t || "max" }, x.setBreakpoint = function() {
                    var e = x.getActiveBreakpoint();
                    if (e && x.currentBreakpoint !== e) {
                        var t = e in x.params.breakpoints ? x.params.breakpoints[e] : x.originalParams,
                            n = x.params.loop && t.slidesPerView !== x.params.slidesPerView;
                        for (var i in t) x.params[i] = t[i];
                        x.currentBreakpoint = e, n && x.destroyLoop && x.reLoop(!0) } }, x.params.breakpoints && x.setBreakpoint(), x.container = t(e), 0 !== x.container.length)) {
                if (x.container.length > 1) {
                    var b = [];
                    return x.container.each(function() { b.push(new n(this, r)) }), b }
                x.container[0].swiper = x, x.container.data("swiper", x), x.classNames.push("swiper-container-" + x.params.direction), x.params.freeMode && x.classNames.push("swiper-container-free-mode"), x.support.flexbox || (x.classNames.push("swiper-container-no-flexbox"), x.params.slidesPerColumn = 1), x.params.autoHeight && x.classNames.push("swiper-container-autoheight"), (x.params.parallax || x.params.watchSlidesVisibility) && (x.params.watchSlidesProgress = !0), ["cube", "coverflow", "flip"].indexOf(x.params.effect) >= 0 && (x.support.transforms3d ? (x.params.watchSlidesProgress = !0, x.classNames.push("swiper-container-3d")) : x.params.effect = "slide"), "slide" !== x.params.effect && x.classNames.push("swiper-container-" + x.params.effect), "cube" === x.params.effect && (x.params.resistanceRatio = 0, x.params.slidesPerView = 1, x.params.slidesPerColumn = 1, x.params.slidesPerGroup = 1, x.params.centeredSlides = !1, x.params.spaceBetween = 0, x.params.virtualTranslate = !0, x.params.setWrapperSize = !1), ("fade" === x.params.effect || "flip" === x.params.effect) && (x.params.slidesPerView = 1, x.params.slidesPerColumn = 1, x.params.slidesPerGroup = 1, x.params.watchSlidesProgress = !0, x.params.spaceBetween = 0, x.params.setWrapperSize = !1, "undefined" == typeof f && (x.params.virtualTranslate = !0)), x.params.grabCursor && x.support.touch && (x.params.grabCursor = !1), x.wrapper = x.container.children("." + x.params.wrapperClass), x.params.pagination && (x.paginationContainer = t(x.params.pagination), x.params.uniqueNavElements && "string" == typeof x.params.pagination && x.paginationContainer.length > 1 && 1 === x.container.find(x.params.pagination).length && (x.paginationContainer = x.container.find(x.params.pagination)), "bullets" === x.params.paginationType && x.params.paginationClickable ? x.paginationContainer.addClass("swiper-pagination-clickable") : x.params.paginationClickable = !1, x.paginationContainer.addClass("swiper-pagination-" + x.params.paginationType)), (x.params.nextButton || x.params.prevButton) && (x.params.nextButton && (x.nextButton = t(x.params.nextButton), x.params.uniqueNavElements && "string" == typeof x.params.nextButton && x.nextButton.length > 1 && 1 === x.container.find(x.params.nextButton).length && (x.nextButton = x.container.find(x.params.nextButton))), x.params.prevButton && (x.prevButton = t(x.params.prevButton), x.params.uniqueNavElements && "string" == typeof x.params.prevButton && x.prevButton.length > 1 && 1 === x.container.find(x.params.prevButton).length && (x.prevButton = x.container.find(x.params.prevButton)))), x.isHorizontal = function() {
                    return "horizontal" === x.params.direction }, x.rtl = x.isHorizontal() && ("rtl" === x.container[0].dir.toLowerCase() || "rtl" === x.container.css("direction")), x.rtl && x.classNames.push("swiper-container-rtl"), x.rtl && (x.wrongRTL = "-webkit-box" === x.wrapper.css("display")), x.params.slidesPerColumn > 1 && x.classNames.push("swiper-container-multirow"), x.device.android && x.classNames.push("swiper-container-android"), x.container.addClass(x.classNames.join(" ")), x.translate = 0, x.progress = 0, x.velocity = 0, x.lockSwipeToNext = function() { x.params.allowSwipeToNext = !1 }, x.lockSwipeToPrev = function() { x.params.allowSwipeToPrev = !1 }, x.lockSwipes = function() { x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !1 }, x.unlockSwipeToNext = function() { x.params.allowSwipeToNext = !0 }, x.unlockSwipeToPrev = function() { x.params.allowSwipeToPrev = !0 }, x.unlockSwipes = function() { x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !0 }, x.params.grabCursor && (x.container[0].style.cursor = "move", x.container[0].style.cursor = "-webkit-grab", x.container[0].style.cursor = "-moz-grab", x.container[0].style.cursor = "grab"), x.imagesToLoad = [], x.imagesLoaded = 0, x.loadImage = function(e, t, n, i, r) {
                    function a() { r && r() }
                    var s;
                    e.complete && i ? a() : t ? (s = new window.Image, s.onload = a, s.onerror = a, n && (s.srcset = n), t && (s.src = t)) : a() }, x.preloadImages = function() {
                    function e() { "undefined" != typeof x && null !== x && (void 0 !== x.imagesLoaded && x.imagesLoaded++, x.imagesLoaded === x.imagesToLoad.length && (x.params.updateOnImagesReady && x.update(), x.emit("onImagesReady", x))) }
                    x.imagesToLoad = x.container.find("img");
                    for (var t = 0; t < x.imagesToLoad.length; t++) x.loadImage(x.imagesToLoad[t], x.imagesToLoad[t].currentSrc || x.imagesToLoad[t].getAttribute("src"), x.imagesToLoad[t].srcset || x.imagesToLoad[t].getAttribute("srcset"), !0, e) }, x.autoplayTimeoutId = void 0, x.autoplaying = !1, x.autoplayPaused = !1, x.startAutoplay = function() {
                    return "undefined" == typeof x.autoplayTimeoutId && (!!x.params.autoplay && (!x.autoplaying && (x.autoplaying = !0, x.emit("onAutoplayStart", x), void s()))) }, x.stopAutoplay = function(e) { x.autoplayTimeoutId && (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId), x.autoplaying = !1, x.autoplayTimeoutId = void 0, x.emit("onAutoplayStop", x)) }, x.pauseAutoplay = function(e) { x.autoplayPaused || (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId), x.autoplayPaused = !0, 0 === e ? (x.autoplayPaused = !1, s()) : x.wrapper.transitionEnd(function() { x && (x.autoplayPaused = !1, x.autoplaying ? s() : x.stopAutoplay()) })) }, x.minTranslate = function() {
                    return -x.snapGrid[0] }, x.maxTranslate = function() {
                    return -x.snapGrid[x.snapGrid.length - 1] }, x.updateAutoHeight = function() {
                    var e = x.slides.eq(x.activeIndex)[0];
                    if ("undefined" != typeof e) {
                        var t = e.offsetHeight;
                        t && x.wrapper.css("height", t + "px") } }, x.updateContainerSize = function() {
                    var e, t;
                    e = "undefined" != typeof x.params.width ? x.params.width : x.container[0].clientWidth, t = "undefined" != typeof x.params.height ? x.params.height : x.container[0].clientHeight, 0 === e && x.isHorizontal() || 0 === t && !x.isHorizontal() || (e = e - parseInt(x.container.css("padding-left"), 10) - parseInt(x.container.css("padding-right"), 10), t = t - parseInt(x.container.css("padding-top"), 10) - parseInt(x.container.css("padding-bottom"), 10), x.width = e, x.height = t, x.size = x.isHorizontal() ? x.width : x.height) }, x.updateSlidesSize = function() { x.slides = x.wrapper.children("." + x.params.slideClass), x.snapGrid = [], x.slidesGrid = [], x.slidesSizesGrid = [];
                    var e, t = x.params.spaceBetween,
                        n = -x.params.slidesOffsetBefore,
                        i = 0,
                        r = 0;
                    if ("undefined" != typeof x.size) { "string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * x.size), x.virtualSize = -t, x.rtl ? x.slides.css({ marginLeft: "", marginTop: "" }) : x.slides.css({ marginRight: "", marginBottom: "" });
                        var s;
                        x.params.slidesPerColumn > 1 && (s = Math.floor(x.slides.length / x.params.slidesPerColumn) === x.slides.length / x.params.slidesPerColumn ? x.slides.length : Math.ceil(x.slides.length / x.params.slidesPerColumn) * x.params.slidesPerColumn, "auto" !== x.params.slidesPerView && "row" === x.params.slidesPerColumnFill && (s = Math.max(s, x.params.slidesPerView * x.params.slidesPerColumn)));
                        var o, l = x.params.slidesPerColumn,
                            c = s / l,
                            u = c - (x.params.slidesPerColumn * c - x.slides.length);
                        for (e = 0; e < x.slides.length; e++) { o = 0;
                            var p = x.slides.eq(e);
                            if (x.params.slidesPerColumn > 1) {
                                var d, h, f; "column" === x.params.slidesPerColumnFill ? (h = Math.floor(e / l), f = e - h * l, (h > u || h === u && f === l - 1) && ++f >= l && (f = 0, h++), d = h + f * s / l, p.css({ "-webkit-box-ordinal-group": d, "-moz-box-ordinal-group": d, "-ms-flex-order": d, "-webkit-order": d, order: d })) : (f = Math.floor(e / c), h = e - f * c), p.css({ "margin-top": 0 !== f && x.params.spaceBetween && x.params.spaceBetween + "px" }).attr("data-swiper-column", h).attr("data-swiper-row", f) } "none" !== p.css("display") && ("auto" === x.params.slidesPerView ? (o = x.isHorizontal() ? p.outerWidth(!0) : p.outerHeight(!0), x.params.roundLengths && (o = a(o))) : (o = (x.size - (x.params.slidesPerView - 1) * t) / x.params.slidesPerView, x.params.roundLengths && (o = a(o)), x.isHorizontal() ? x.slides[e].style.width = o + "px" : x.slides[e].style.height = o + "px"), x.slides[e].swiperSlideSize = o, x.slidesSizesGrid.push(o), x.params.centeredSlides ? (n = n + o / 2 + i / 2 + t, 0 === e && (n = n - x.size / 2 - t), Math.abs(n) < .001 && (n = 0), r % x.params.slidesPerGroup === 0 && x.snapGrid.push(n), x.slidesGrid.push(n)) : (r % x.params.slidesPerGroup === 0 && x.snapGrid.push(n), x.slidesGrid.push(n), n = n + o + t), x.virtualSize += o + t, i = o, r++) }
                        x.virtualSize = Math.max(x.virtualSize, x.size) + x.params.slidesOffsetAfter;
                        var m;
                        if (x.rtl && x.wrongRTL && ("slide" === x.params.effect || "coverflow" === x.params.effect) && x.wrapper.css({ width: x.virtualSize + x.params.spaceBetween + "px" }), (!x.support.flexbox || x.params.setWrapperSize) && (x.isHorizontal() ? x.wrapper.css({ width: x.virtualSize + x.params.spaceBetween + "px" }) : x.wrapper.css({ height: x.virtualSize + x.params.spaceBetween + "px" })), x.params.slidesPerColumn > 1 && (x.virtualSize = (o + x.params.spaceBetween) * s, x.virtualSize = Math.ceil(x.virtualSize / x.params.slidesPerColumn) - x.params.spaceBetween, x.wrapper.css({ width: x.virtualSize + x.params.spaceBetween + "px" }), x.params.centeredSlides)) {
                            for (m = [], e = 0; e < x.snapGrid.length; e++) x.snapGrid[e] < x.virtualSize + x.snapGrid[0] && m.push(x.snapGrid[e]);
                            x.snapGrid = m }
                        if (!x.params.centeredSlides) {
                            for (m = [], e = 0; e < x.snapGrid.length; e++) x.snapGrid[e] <= x.virtualSize - x.size && m.push(x.snapGrid[e]);
                            x.snapGrid = m, Math.floor(x.virtualSize - x.size) - Math.floor(x.snapGrid[x.snapGrid.length - 1]) > 1 && x.snapGrid.push(x.virtualSize - x.size) }
                        0 === x.snapGrid.length && (x.snapGrid = [0]), 0 !== x.params.spaceBetween && (x.isHorizontal() ? x.rtl ? x.slides.css({ marginLeft: t + "px" }) : x.slides.css({ marginRight: t + "px" }) : x.slides.css({ marginBottom: t + "px" })), x.params.watchSlidesProgress && x.updateSlidesOffset() } }, x.updateSlidesOffset = function() {
                    for (var e = 0; e < x.slides.length; e++) x.slides[e].swiperSlideOffset = x.isHorizontal() ? x.slides[e].offsetLeft : x.slides[e].offsetTop }, x.updateSlidesProgress = function(e) {
                    if ("undefined" == typeof e && (e = x.translate || 0), 0 !== x.slides.length) { "undefined" == typeof x.slides[0].swiperSlideOffset && x.updateSlidesOffset();
                        var t = -e;
                        x.rtl && (t = e), x.slides.removeClass(x.params.slideVisibleClass);
                        for (var n = 0; n < x.slides.length; n++) {
                            var i = x.slides[n],
                                r = (t - i.swiperSlideOffset) / (i.swiperSlideSize + x.params.spaceBetween);
                            if (x.params.watchSlidesVisibility) {
                                var a = -(t - i.swiperSlideOffset),
                                    s = a + x.slidesSizesGrid[n],
                                    o = a >= 0 && a < x.size || s > 0 && s <= x.size || 0 >= a && s >= x.size;
                                o && x.slides.eq(n).addClass(x.params.slideVisibleClass) }
                            i.progress = x.rtl ? -r : r } } }, x.updateProgress = function(e) { "undefined" == typeof e && (e = x.translate || 0);
                    var t = x.maxTranslate() - x.minTranslate(),
                        n = x.isBeginning,
                        i = x.isEnd;
                    0 === t ? (x.progress = 0, x.isBeginning = x.isEnd = !0) : (x.progress = (e - x.minTranslate()) / t, x.isBeginning = x.progress <= 0, x.isEnd = x.progress >= 1), x.isBeginning && !n && x.emit("onReachBeginning", x), x.isEnd && !i && x.emit("onReachEnd", x), x.params.watchSlidesProgress && x.updateSlidesProgress(e), x.emit("onProgress", x, x.progress) }, x.updateActiveIndex = function() {
                    var e, t, n, i = x.rtl ? x.translate : -x.translate;
                    for (t = 0; t < x.slidesGrid.length; t++) "undefined" != typeof x.slidesGrid[t + 1] ? i >= x.slidesGrid[t] && i < x.slidesGrid[t + 1] - (x.slidesGrid[t + 1] - x.slidesGrid[t]) / 2 ? e = t : i >= x.slidesGrid[t] && i < x.slidesGrid[t + 1] && (e = t + 1) : i >= x.slidesGrid[t] && (e = t);
                    (0 > e || "undefined" == typeof e) && (e = 0), n = Math.floor(e / x.params.slidesPerGroup), n >= x.snapGrid.length && (n = x.snapGrid.length - 1), e !== x.activeIndex && (x.snapIndex = n, x.previousIndex = x.activeIndex, x.activeIndex = e, x.updateClasses()) }, x.updateClasses = function() { x.slides.removeClass(x.params.slideActiveClass + " " + x.params.slideNextClass + " " + x.params.slidePrevClass);
                    var e = x.slides.eq(x.activeIndex);
                    e.addClass(x.params.slideActiveClass);
                    var n = e.next("." + x.params.slideClass).addClass(x.params.slideNextClass);
                    x.params.loop && 0 === n.length && x.slides.eq(0).addClass(x.params.slideNextClass);
                    var i = e.prev("." + x.params.slideClass).addClass(x.params.slidePrevClass);
                    if (x.params.loop && 0 === i.length && x.slides.eq(-1).addClass(x.params.slidePrevClass), x.paginationContainer && x.paginationContainer.length > 0) {
                        var r, a = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length;
                        if (x.params.loop ? (r = Math.ceil((x.activeIndex - x.loopedSlides) / x.params.slidesPerGroup), r > x.slides.length - 1 - 2 * x.loopedSlides && (r -= x.slides.length - 2 * x.loopedSlides), r > a - 1 && (r -= a), 0 > r && "bullets" !== x.params.paginationType && (r = a + r)) : r = "undefined" != typeof x.snapIndex ? x.snapIndex : x.activeIndex || 0, "bullets" === x.params.paginationType && x.bullets && x.bullets.length > 0 && (x.bullets.removeClass(x.params.bulletActiveClass), x.paginationContainer.length > 1 ? x.bullets.each(function() { t(this).index() === r && t(this).addClass(x.params.bulletActiveClass) }) : x.bullets.eq(r).addClass(x.params.bulletActiveClass)), "fraction" === x.params.paginationType && (x.paginationContainer.find("." + x.params.paginationCurrentClass).text(r + 1), x.paginationContainer.find("." + x.params.paginationTotalClass).text(a)), "progress" === x.params.paginationType) {
                            var s = (r + 1) / a,
                                o = s,
                                l = 1;
                            x.isHorizontal() || (l = s, o = 1), x.paginationContainer.find("." + x.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + o + ") scaleY(" + l + ")").transition(x.params.speed) } "custom" === x.params.paginationType && x.params.paginationCustomRender && (x.paginationContainer.html(x.params.paginationCustomRender(x, r + 1, a)), x.emit("onPaginationRendered", x, x.paginationContainer[0])) }
                    x.params.loop || (x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.isBeginning ? (x.prevButton.addClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.disable(x.prevButton)) : (x.prevButton.removeClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.enable(x.prevButton))), x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.isEnd ? (x.nextButton.addClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.disable(x.nextButton)) : (x.nextButton.removeClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.enable(x.nextButton)))) }, x.updatePagination = function() {
                    if (x.params.pagination && x.paginationContainer && x.paginationContainer.length > 0) {
                        var e = "";
                        if ("bullets" === x.params.paginationType) {
                            for (var t = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length, n = 0; t > n; n++) e += x.params.paginationBulletRender ? x.params.paginationBulletRender(n, x.params.bulletClass) : "<" + x.params.paginationElement + ' class="' + x.params.bulletClass + '"></' + x.params.paginationElement + ">";
                            x.paginationContainer.html(e), x.bullets = x.paginationContainer.find("." + x.params.bulletClass), x.params.paginationClickable && x.params.a11y && x.a11y && x.a11y.initPagination() } "fraction" === x.params.paginationType && (e = x.params.paginationFractionRender ? x.params.paginationFractionRender(x, x.params.paginationCurrentClass, x.params.paginationTotalClass) : '<span class="' + x.params.paginationCurrentClass + '"></span> / <span class="' + x.params.paginationTotalClass + '"></span>', x.paginationContainer.html(e)), "progress" === x.params.paginationType && (e = x.params.paginationProgressRender ? x.params.paginationProgressRender(x, x.params.paginationProgressbarClass) : '<span class="' + x.params.paginationProgressbarClass + '"></span>', x.paginationContainer.html(e)), "custom" !== x.params.paginationType && x.emit("onPaginationRendered", x, x.paginationContainer[0]) } }, x.update = function(e) {
                    function t() { i = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate()), x.setWrapperTranslate(i), x.updateActiveIndex(), x.updateClasses() }
                    if (x.updateContainerSize(), x.updateSlidesSize(), x.updateProgress(), x.updatePagination(), x.updateClasses(), x.params.scrollbar && x.scrollbar && x.scrollbar.set(), e) {
                        var n, i;
                        x.controller && x.controller.spline && (x.controller.spline = void 0), x.params.freeMode ? (t(), x.params.autoHeight && x.updateAutoHeight()) : (n = ("auto" === x.params.slidesPerView || x.params.slidesPerView > 1) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0), n || t()) } else x.params.autoHeight && x.updateAutoHeight() }, x.onResize = function(e) { x.params.breakpoints && x.setBreakpoint();
                    var t = x.params.allowSwipeToPrev,
                        n = x.params.allowSwipeToNext;
                    x.params.allowSwipeToPrev = x.params.allowSwipeToNext = !0, x.updateContainerSize(), x.updateSlidesSize(), ("auto" === x.params.slidesPerView || x.params.freeMode || e) && x.updatePagination(), x.params.scrollbar && x.scrollbar && x.scrollbar.set(), x.controller && x.controller.spline && (x.controller.spline = void 0);
                    var i = !1;
                    if (x.params.freeMode) {
                        var r = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate());
                        x.setWrapperTranslate(r), x.updateActiveIndex(), x.updateClasses(), x.params.autoHeight && x.updateAutoHeight() } else x.updateClasses(), i = ("auto" === x.params.slidesPerView || x.params.slidesPerView > 1) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0);
                    x.params.lazyLoading && !i && x.lazy && x.lazy.load(), x.params.allowSwipeToPrev = t, x.params.allowSwipeToNext = n };
                var T = ["mousedown", "mousemove", "mouseup"];
                window.navigator.pointerEnabled ? T = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (T = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), x.touchEvents = { start: x.support.touch || !x.params.simulateTouch ? "touchstart" : T[0], move: x.support.touch || !x.params.simulateTouch ? "touchmove" : T[1], end: x.support.touch || !x.params.simulateTouch ? "touchend" : T[2] }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === x.params.touchEventsTarget ? x.container : x.wrapper).addClass("swiper-wp8-" + x.params.direction), x.initEvents = function(e) {
                    var t = e ? "off" : "on",
                        n = e ? "removeEventListener" : "addEventListener",
                        i = "container" === x.params.touchEventsTarget ? x.container[0] : x.wrapper[0],
                        a = x.support.touch ? i : document,
                        s = !!x.params.nested;
                    x.browser.ie ? (i[n](x.touchEvents.start, x.onTouchStart, !1), a[n](x.touchEvents.move, x.onTouchMove, s), a[n](x.touchEvents.end, x.onTouchEnd, !1)) : (x.support.touch && (i[n](x.touchEvents.start, x.onTouchStart, !1), i[n](x.touchEvents.move, x.onTouchMove, s), i[n](x.touchEvents.end, x.onTouchEnd, !1)), !r.simulateTouch || x.device.ios || x.device.android || (i[n]("mousedown", x.onTouchStart, !1), document[n]("mousemove", x.onTouchMove, s), document[n]("mouseup", x.onTouchEnd, !1))), window[n]("resize", x.onResize), x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.nextButton[t]("click", x.onClickNext), x.params.a11y && x.a11y && x.nextButton[t]("keydown", x.a11y.onEnterKey)), x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.prevButton[t]("click", x.onClickPrev), x.params.a11y && x.a11y && x.prevButton[t]("keydown", x.a11y.onEnterKey)), x.params.pagination && x.params.paginationClickable && (x.paginationContainer[t]("click", "." + x.params.bulletClass, x.onClickIndex), x.params.a11y && x.a11y && x.paginationContainer[t]("keydown", "." + x.params.bulletClass, x.a11y.onEnterKey)), (x.params.preventClicks || x.params.preventClicksPropagation) && i[n]("click", x.preventClicks, !0) }, x.attachEvents = function() { x.initEvents() }, x.detachEvents = function() { x.initEvents(!0) }, x.allowClick = !0, x.preventClicks = function(e) { x.allowClick || (x.params.preventClicks && e.preventDefault(), x.params.preventClicksPropagation && x.animating && (e.stopPropagation(), e.stopImmediatePropagation())) }, x.onClickNext = function(e) { e.preventDefault(), (!x.isEnd || x.params.loop) && x.slideNext() }, x.onClickPrev = function(e) { e.preventDefault(), (!x.isBeginning || x.params.loop) && x.slidePrev() }, x.onClickIndex = function(e) { e.preventDefault();
                    var n = t(this).index() * x.params.slidesPerGroup;
                    x.params.loop && (n += x.loopedSlides), x.slideTo(n) }, x.updateClickedSlide = function(e) {
                    var n = o(e, "." + x.params.slideClass),
                        i = !1;
                    if (n)
                        for (var r = 0; r < x.slides.length; r++) x.slides[r] === n && (i = !0);
                    if (!n || !i) return x.clickedSlide = void 0, void(x.clickedIndex = void 0);
                    if (x.clickedSlide = n, x.clickedIndex = t(n).index(), x.params.slideToClickedSlide && void 0 !== x.clickedIndex && x.clickedIndex !== x.activeIndex) {
                        var a, s = x.clickedIndex;
                        if (x.params.loop) {
                            if (x.animating) return;
                            a = t(x.clickedSlide).attr("data-swiper-slide-index"), x.params.centeredSlides ? s < x.loopedSlides - x.params.slidesPerView / 2 || s > x.slides.length - x.loopedSlides + x.params.slidesPerView / 2 ? (x.fixLoop(), s = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + a + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() { x.slideTo(s) }, 0)) : x.slideTo(s) : s > x.slides.length - x.params.slidesPerView ? (x.fixLoop(), s = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + a + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() { x.slideTo(s) }, 0)) : x.slideTo(s) } else x.slideTo(s) } };
                var S, C, E, k, P, M, N, D, z, A, L = "input, select, textarea, button",
                    H = Date.now(),
                    B = [];
                x.animating = !1, x.touches = { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 };
                var I, O;
                if (x.onTouchStart = function(e) {
                        if (e.originalEvent && (e = e.originalEvent), I = "touchstart" === e.type, I || !("which" in e) || 3 !== e.which) {
                            if (x.params.noSwiping && o(e, "." + x.params.noSwipingClass)) return void(x.allowClick = !0);
                            if (!x.params.swipeHandler || o(e, x.params.swipeHandler)) {
                                var n = x.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                                    i = x.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
                                if (!(x.device.ios && x.params.iOSEdgeSwipeDetection && n <= x.params.iOSEdgeSwipeThreshold)) {
                                    if (S = !0, C = !1, E = !0, P = void 0, O = void 0, x.touches.startX = n, x.touches.startY = i, k = Date.now(), x.allowClick = !0, x.updateContainerSize(), x.swipeDirection = void 0, x.params.threshold > 0 && (D = !1), "touchstart" !== e.type) {
                                        var r = !0;
                                        t(e.target).is(L) && (r = !1), document.activeElement && t(document.activeElement).is(L) && document.activeElement.blur(), r && e.preventDefault() }
                                    x.emit("onTouchStart", x, e) } } } }, x.onTouchMove = function(e) {
                        if (e.originalEvent && (e = e.originalEvent), !I || "mousemove" !== e.type) {
                            if (e.preventedByNestedSwiper) return x.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                                void(x.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);
                            if (x.params.onlyExternal) return x.allowClick = !1, void(S && (x.touches.startX = x.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, x.touches.startY = x.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, k = Date.now()));
                            if (I && document.activeElement && e.target === document.activeElement && t(e.target).is(L)) return C = !0, void(x.allowClick = !1);
                            if (E && x.emit("onTouchMove", x, e), !(e.targetTouches && e.targetTouches.length > 1)) {
                                if (x.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, x.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof P) {
                                    var n = 180 * Math.atan2(Math.abs(x.touches.currentY - x.touches.startY), Math.abs(x.touches.currentX - x.touches.startX)) / Math.PI;
                                    P = x.isHorizontal() ? n > x.params.touchAngle : 90 - n > x.params.touchAngle }
                                if (P && x.emit("onTouchMoveOpposite", x, e), "undefined" == typeof O && x.browser.ieTouch && (x.touches.currentX !== x.touches.startX || x.touches.currentY !== x.touches.startY) && (O = !0), S) {
                                    if (P) return void(S = !1);
                                    if (O || !x.browser.ieTouch) { x.allowClick = !1, x.emit("onSliderMove", x, e), e.preventDefault(), x.params.touchMoveStopPropagation && !x.params.nested && e.stopPropagation(), C || (r.loop && x.fixLoop(), N = x.getWrapperTranslate(), x.setWrapperTransition(0), x.animating && x.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), x.params.autoplay && x.autoplaying && (x.params.autoplayDisableOnInteraction ? x.stopAutoplay() : x.pauseAutoplay()), A = !1, x.params.grabCursor && (x.container[0].style.cursor = "move", x.container[0].style.cursor = "-webkit-grabbing", x.container[0].style.cursor = "-moz-grabbin", x.container[0].style.cursor = "grabbing")), C = !0;
                                        var i = x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX : x.touches.currentY - x.touches.startY;
                                        i *= x.params.touchRatio, x.rtl && (i = -i), x.swipeDirection = i > 0 ? "prev" : "next", M = i + N;
                                        var a = !0;
                                        if (i > 0 && M > x.minTranslate() ? (a = !1, x.params.resistance && (M = x.minTranslate() - 1 + Math.pow(-x.minTranslate() + N + i, x.params.resistanceRatio))) : 0 > i && M < x.maxTranslate() && (a = !1, x.params.resistance && (M = x.maxTranslate() + 1 - Math.pow(x.maxTranslate() - N - i, x.params.resistanceRatio))), a && (e.preventedByNestedSwiper = !0), !x.params.allowSwipeToNext && "next" === x.swipeDirection && N > M && (M = N), !x.params.allowSwipeToPrev && "prev" === x.swipeDirection && M > N && (M = N), x.params.followFinger) {
                                            if (x.params.threshold > 0) {
                                                if (!(Math.abs(i) > x.params.threshold || D)) return void(M = N);
                                                if (!D) return D = !0, x.touches.startX = x.touches.currentX, x.touches.startY = x.touches.currentY, M = N, void(x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX : x.touches.currentY - x.touches.startY) }(x.params.freeMode || x.params.watchSlidesProgress) && x.updateActiveIndex(), x.params.freeMode && (0 === B.length && B.push({ position: x.touches[x.isHorizontal() ? "startX" : "startY"], time: k }), B.push({ position: x.touches[x.isHorizontal() ? "currentX" : "currentY"], time: (new window.Date).getTime() })), x.updateProgress(M), x.setWrapperTranslate(M) } } } }
                        }
                    }, x.onTouchEnd = function(e) {
                        if (e.originalEvent && (e = e.originalEvent), E && x.emit("onTouchEnd", x, e), E = !1, S) { x.params.grabCursor && C && S && (x.container[0].style.cursor = "move", x.container[0].style.cursor = "-webkit-grab", x.container[0].style.cursor = "-moz-grab", x.container[0].style.cursor = "grab");
                            var n = Date.now(),
                                i = n - k;
                            if (x.allowClick && (x.updateClickedSlide(e), x.emit("onTap", x, e), 300 > i && n - H > 300 && (z && clearTimeout(z), z = setTimeout(function() { x && (x.params.paginationHide && x.paginationContainer.length > 0 && !t(e.target).hasClass(x.params.bulletClass) && x.paginationContainer.toggleClass(x.params.paginationHiddenClass), x.emit("onClick", x, e)) }, 300)), 300 > i && 300 > n - H && (z && clearTimeout(z), x.emit("onDoubleTap", x, e))), H = Date.now(), setTimeout(function() { x && (x.allowClick = !0) }, 0), !S || !C || !x.swipeDirection || 0 === x.touches.diff || M === N) return void(S = C = !1);
                            S = C = !1;
                            var r;
                            if (r = x.params.followFinger ? x.rtl ? x.translate : -x.translate : -M, x.params.freeMode) {
                                if (r < -x.minTranslate()) return void x.slideTo(x.activeIndex);
                                if (r > -x.maxTranslate()) return void(x.slides.length < x.snapGrid.length ? x.slideTo(x.snapGrid.length - 1) : x.slideTo(x.slides.length - 1));
                                if (x.params.freeModeMomentum) {
                                    if (B.length > 1) {
                                        var a = B.pop(),
                                            s = B.pop(),
                                            o = a.position - s.position,
                                            l = a.time - s.time;
                                        x.velocity = o / l, x.velocity = x.velocity / 2, Math.abs(x.velocity) < x.params.freeModeMinimumVelocity && (x.velocity = 0), (l > 150 || (new window.Date).getTime() - a.time > 300) && (x.velocity = 0) } else x.velocity = 0;
                                    B.length = 0;
                                    var c = 1e3 * x.params.freeModeMomentumRatio,
                                        u = x.velocity * c,
                                        p = x.translate + u;
                                    x.rtl && (p = -p);
                                    var d, h = !1,
                                        f = 20 * Math.abs(x.velocity) * x.params.freeModeMomentumBounceRatio;
                                    if (p < x.maxTranslate()) x.params.freeModeMomentumBounce ? (p + x.maxTranslate() < -f && (p = x.maxTranslate() - f), d = x.maxTranslate(), h = !0, A = !0) : p = x.maxTranslate();
                                    else if (p > x.minTranslate()) x.params.freeModeMomentumBounce ? (p - x.minTranslate() > f && (p = x.minTranslate() + f), d = x.minTranslate(), h = !0, A = !0) : p = x.minTranslate();
                                    else if (x.params.freeModeSticky) {
                                        var m, g = 0;
                                        for (g = 0; g < x.snapGrid.length; g += 1)
                                            if (x.snapGrid[g] > -p) { m = g;
                                                break }
                                        p = Math.abs(x.snapGrid[m] - p) < Math.abs(x.snapGrid[m - 1] - p) || "next" === x.swipeDirection ? x.snapGrid[m] : x.snapGrid[m - 1], x.rtl || (p = -p) }
                                    if (0 !== x.velocity) c = x.rtl ? Math.abs((-p - x.translate) / x.velocity) : Math.abs((p - x.translate) / x.velocity);
                                    else if (x.params.freeModeSticky) return void x.slideReset();
                                    x.params.freeModeMomentumBounce && h ? (x.updateProgress(d), x.setWrapperTransition(c), x.setWrapperTranslate(p), x.onTransitionStart(), x.animating = !0, x.wrapper.transitionEnd(function() { x && A && (x.emit("onMomentumBounce", x), x.setWrapperTransition(x.params.speed), x.setWrapperTranslate(d), x.wrapper.transitionEnd(function() { x && x.onTransitionEnd() })) })) : x.velocity ? (x.updateProgress(p), x.setWrapperTransition(c), x.setWrapperTranslate(p), x.onTransitionStart(), x.animating || (x.animating = !0, x.wrapper.transitionEnd(function() { x && x.onTransitionEnd() }))) : x.updateProgress(p), x.updateActiveIndex() }
                                return void((!x.params.freeModeMomentum || i >= x.params.longSwipesMs) && (x.updateProgress(), x.updateActiveIndex())) }
                            var v, y = 0,
                                w = x.slidesSizesGrid[0];
                            for (v = 0; v < x.slidesGrid.length; v += x.params.slidesPerGroup) "undefined" != typeof x.slidesGrid[v + x.params.slidesPerGroup] ? r >= x.slidesGrid[v] && r < x.slidesGrid[v + x.params.slidesPerGroup] && (y = v, w = x.slidesGrid[v + x.params.slidesPerGroup] - x.slidesGrid[v]) : r >= x.slidesGrid[v] && (y = v, w = x.slidesGrid[x.slidesGrid.length - 1] - x.slidesGrid[x.slidesGrid.length - 2]);
                            var b = (r - x.slidesGrid[y]) / w;
                            if (i > x.params.longSwipesMs) {
                                if (!x.params.longSwipes) return void x.slideTo(x.activeIndex); "next" === x.swipeDirection && (b >= x.params.longSwipesRatio ? x.slideTo(y + x.params.slidesPerGroup) : x.slideTo(y)), "prev" === x.swipeDirection && (b > 1 - x.params.longSwipesRatio ? x.slideTo(y + x.params.slidesPerGroup) : x.slideTo(y)) } else {
                                if (!x.params.shortSwipes) return void x.slideTo(x.activeIndex); "next" === x.swipeDirection && x.slideTo(y + x.params.slidesPerGroup), "prev" === x.swipeDirection && x.slideTo(y) } } }, x._slideTo = function(e, t) {
                        return x.slideTo(e, t, !0, !0) }, x.slideTo = function(e, t, n, i) { "undefined" == typeof n && (n = !0), "undefined" == typeof e && (e = 0), 0 > e && (e = 0), x.snapIndex = Math.floor(e / x.params.slidesPerGroup), x.snapIndex >= x.snapGrid.length && (x.snapIndex = x.snapGrid.length - 1);
                        var r = -x.snapGrid[x.snapIndex];
                        x.params.autoplay && x.autoplaying && (i || !x.params.autoplayDisableOnInteraction ? x.pauseAutoplay(t) : x.stopAutoplay()), x.updateProgress(r);
                        for (var a = 0; a < x.slidesGrid.length; a++) - Math.floor(100 * r) >= Math.floor(100 * x.slidesGrid[a]) && (e = a);
                        return !(!x.params.allowSwipeToNext && r < x.translate && r < x.minTranslate()) && (!(!x.params.allowSwipeToPrev && r > x.translate && r > x.maxTranslate() && (x.activeIndex || 0) !== e) && ("undefined" == typeof t && (t = x.params.speed), x.previousIndex = x.activeIndex || 0, x.activeIndex = e, x.rtl && -r === x.translate || !x.rtl && r === x.translate ? (x.params.autoHeight && x.updateAutoHeight(), x.updateClasses(), "slide" !== x.params.effect && x.setWrapperTranslate(r), !1) : (x.updateClasses(), x.onTransitionStart(n), 0 === t ? (x.setWrapperTranslate(r), x.setWrapperTransition(0), x.onTransitionEnd(n)) : (x.setWrapperTranslate(r), x.setWrapperTransition(t), x.animating || (x.animating = !0, x.wrapper.transitionEnd(function() { x && x.onTransitionEnd(n) }))), !0))) }, x.onTransitionStart = function(e) { "undefined" == typeof e && (e = !0), x.params.autoHeight && x.updateAutoHeight(), x.lazy && x.lazy.onTransitionStart(), e && (x.emit("onTransitionStart", x), x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeStart", x), x.activeIndex > x.previousIndex ? x.emit("onSlideNextStart", x) : x.emit("onSlidePrevStart", x))) }, x.onTransitionEnd = function(e) { x.animating = !1, x.setWrapperTransition(0), "undefined" == typeof e && (e = !0), x.lazy && x.lazy.onTransitionEnd(), e && (x.emit("onTransitionEnd", x), x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeEnd", x), x.activeIndex > x.previousIndex ? x.emit("onSlideNextEnd", x) : x.emit("onSlidePrevEnd", x))), x.params.hashnav && x.hashnav && x.hashnav.setHash() }, x.slideNext = function(e, t, n) {
                        return x.params.loop ? !x.animating && (x.fixLoop(), x.container[0].clientLeft, x.slideTo(x.activeIndex + x.params.slidesPerGroup, t, e, n)) : x.slideTo(x.activeIndex + x.params.slidesPerGroup, t, e, n) }, x._slideNext = function(e) {
                        return x.slideNext(!0, e, !0) }, x.slidePrev = function(e, t, n) {
                        return x.params.loop ? !x.animating && (x.fixLoop(), x.container[0].clientLeft, x.slideTo(x.activeIndex - 1, t, e, n)) : x.slideTo(x.activeIndex - 1, t, e, n) }, x._slidePrev = function(e) {
                        return x.slidePrev(!0, e, !0) }, x.slideReset = function(e, t, n) {
                        return x.slideTo(x.activeIndex, t, e) }, x.setWrapperTransition = function(e, t) { x.wrapper.transition(e), "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTransition(e), x.params.parallax && x.parallax && x.parallax.setTransition(e), x.params.scrollbar && x.scrollbar && x.scrollbar.setTransition(e), x.params.control && x.controller && x.controller.setTransition(e, t), x.emit("onSetTransition", x, e) }, x.setWrapperTranslate = function(e, t, n) {
                        var i = 0,
                            r = 0,
                            s = 0;
                        x.isHorizontal() ? i = x.rtl ? -e : e : r = e, x.params.roundLengths && (i = a(i), r = a(r)), x.params.virtualTranslate || (x.support.transforms3d ? x.wrapper.transform("translate3d(" + i + "px, " + r + "px, " + s + "px)") : x.wrapper.transform("translate(" + i + "px, " + r + "px)")), x.translate = x.isHorizontal() ? i : r;
                        var o, l = x.maxTranslate() - x.minTranslate();
                        o = 0 === l ? 0 : (e - x.minTranslate()) / l, o !== x.progress && x.updateProgress(e), t && x.updateActiveIndex(), "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTranslate(x.translate), x.params.parallax && x.parallax && x.parallax.setTranslate(x.translate), x.params.scrollbar && x.scrollbar && x.scrollbar.setTranslate(x.translate), x.params.control && x.controller && x.controller.setTranslate(x.translate, n), x.emit("onSetTranslate", x, x.translate) }, x.getTranslate = function(e, t) {
                        var n, i, r, a;
                        return "undefined" == typeof t && (t = "x"), x.params.virtualTranslate ? x.rtl ? -x.translate : x.translate : (r = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (i = r.transform || r.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(function(e) {
                            return e.replace(",", ".") }).join(", ")), a = new window.WebKitCSSMatrix("none" === i ? "" : i)) : (a = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = a.toString().split(",")), "x" === t && (i = window.WebKitCSSMatrix ? a.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (i = window.WebKitCSSMatrix ? a.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), x.rtl && i && (i = -i), i || 0) }, x.getWrapperTranslate = function(e) {
                        return "undefined" == typeof e && (e = x.isHorizontal() ? "x" : "y"), x.getTranslate(x.wrapper[0], e) }, x.observers = [], x.initObservers = function() {
                        if (x.params.observeParents)
                            for (var e = x.container.parents(), t = 0; t < e.length; t++) l(e[t]);
                        l(x.container[0], { childList: !1 }), l(x.wrapper[0], { attributes: !1 }) }, x.disconnectObservers = function() {
                        for (var e = 0; e < x.observers.length; e++) x.observers[e].disconnect();
                        x.observers = [] }, x.createLoop = function() { x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove();
                        var e = x.wrapper.children("." + x.params.slideClass); "auto" !== x.params.slidesPerView || x.params.loopedSlides || (x.params.loopedSlides = e.length), x.loopedSlides = parseInt(x.params.loopedSlides || x.params.slidesPerView, 10), x.loopedSlides = x.loopedSlides + x.params.loopAdditionalSlides, x.loopedSlides > e.length && (x.loopedSlides = e.length);
                        var n, i = [],
                            r = [];
                        for (e.each(function(n, a) {
                                var s = t(this);
                                n < x.loopedSlides && r.push(a), n < e.length && n >= e.length - x.loopedSlides && i.push(a), s.attr("data-swiper-slide-index", n) }), n = 0; n < r.length; n++) x.wrapper.append(t(r[n].cloneNode(!0)).addClass(x.params.slideDuplicateClass));
                        for (n = i.length - 1; n >= 0; n--) x.wrapper.prepend(t(i[n].cloneNode(!0)).addClass(x.params.slideDuplicateClass)) }, x.destroyLoop = function() { x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove(), x.slides.removeAttr("data-swiper-slide-index") }, x.reLoop = function(e) {
                        var t = x.activeIndex - x.loopedSlides;
                        x.destroyLoop(), x.createLoop(), x.updateSlidesSize(), e && x.slideTo(t + x.loopedSlides, 0, !1) }, x.fixLoop = function() {
                        var e;
                        x.activeIndex < x.loopedSlides ? (e = x.slides.length - 3 * x.loopedSlides + x.activeIndex, e += x.loopedSlides, x.slideTo(e, 0, !1, !0)) : ("auto" === x.params.slidesPerView && x.activeIndex >= 2 * x.loopedSlides || x.activeIndex > x.slides.length - 2 * x.params.slidesPerView) && (e = -x.slides.length + x.activeIndex + x.loopedSlides, e += x.loopedSlides, x.slideTo(e, 0, !1, !0)) }, x.appendSlide = function(e) {
                        if (x.params.loop && x.destroyLoop(), "object" == typeof e && e.length)
                            for (var t = 0; t < e.length; t++) e[t] && x.wrapper.append(e[t]);
                        else x.wrapper.append(e);
                        x.params.loop && x.createLoop(), x.params.observer && x.support.observer || x.update(!0) }, x.prependSlide = function(e) { x.params.loop && x.destroyLoop();
                        var t = x.activeIndex + 1;
                        if ("object" == typeof e && e.length) {
                            for (var n = 0; n < e.length; n++) e[n] && x.wrapper.prepend(e[n]);
                            t = x.activeIndex + e.length } else x.wrapper.prepend(e);
                        x.params.loop && x.createLoop(), x.params.observer && x.support.observer || x.update(!0), x.slideTo(t, 0, !1) }, x.removeSlide = function(e) { x.params.loop && (x.destroyLoop(), x.slides = x.wrapper.children("." + x.params.slideClass));
                        var t, n = x.activeIndex;
                        if ("object" == typeof e && e.length) {
                            for (var i = 0; i < e.length; i++) t = e[i], x.slides[t] && x.slides.eq(t).remove(), n > t && n--;
                            n = Math.max(n, 0) } else t = e, x.slides[t] && x.slides.eq(t).remove(), n > t && n--, n = Math.max(n, 0);
                        x.params.loop && x.createLoop(), x.params.observer && x.support.observer || x.update(!0), x.params.loop ? x.slideTo(n + x.loopedSlides, 0, !1) : x.slideTo(n, 0, !1) }, x.removeAllSlides = function() {
                        for (var e = [], t = 0; t < x.slides.length; t++) e.push(t);
                        x.removeSlide(e) }, x.effects = { fade: { setTranslate: function() {
                                for (var e = 0; e < x.slides.length; e++) {
                                    var t = x.slides.eq(e),
                                        n = t[0].swiperSlideOffset,
                                        i = -n;
                                    x.params.virtualTranslate || (i -= x.translate);
                                    var r = 0;
                                    x.isHorizontal() || (r = i, i = 0);
                                    var a = x.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                                    t.css({ opacity: a }).transform("translate3d(" + i + "px, " + r + "px, 0px)") } }, setTransition: function(e) {
                                if (x.slides.transition(e), x.params.virtualTranslate && 0 !== e) {
                                    var t = !1;
                                    x.slides.transitionEnd(function() {
                                        if (!t && x) { t = !0, x.animating = !1;
                                            for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < e.length; n++) x.wrapper.trigger(e[n]) } }) } } }, flip: { setTranslate: function() {
                                for (var e = 0; e < x.slides.length; e++) {
                                    var n = x.slides.eq(e),
                                        i = n[0].progress;
                                    x.params.flip.limitRotation && (i = Math.max(Math.min(n[0].progress, 1), -1));
                                    var r = n[0].swiperSlideOffset,
                                        a = -180 * i,
                                        s = a,
                                        o = 0,
                                        l = -r,
                                        c = 0;
                                    if (x.isHorizontal() ? x.rtl && (s = -s) : (c = l, l = 0, o = -s, s = 0), n[0].style.zIndex = -Math.abs(Math.round(i)) + x.slides.length, x.params.flip.slideShadows) {
                                        var u = x.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
                                            p = x.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                                        0 === u.length && (u = t('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), n.append(u)), 0 === p.length && (p = t('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), n.append(p)), u.length && (u[0].style.opacity = Math.max(-i, 0)), p.length && (p[0].style.opacity = Math.max(i, 0)) }
                                    n.transform("translate3d(" + l + "px, " + c + "px, 0px) rotateX(" + o + "deg) rotateY(" + s + "deg)") } }, setTransition: function(e) {
                                if (x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), x.params.virtualTranslate && 0 !== e) {
                                    var n = !1;
                                    x.slides.eq(x.activeIndex).transitionEnd(function() {
                                        if (!n && x && t(this).hasClass(x.params.slideActiveClass)) { n = !0, x.animating = !1;
                                            for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = 0; i < e.length; i++) x.wrapper.trigger(e[i]) } }) } } }, cube: { setTranslate: function() {
                                var e, n = 0;
                                x.params.cube.shadow && (x.isHorizontal() ? (e = x.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = t('<div class="swiper-cube-shadow"></div>'), x.wrapper.append(e)), e.css({ height: x.width + "px" })) : (e = x.container.find(".swiper-cube-shadow"), 0 === e.length && (e = t('<div class="swiper-cube-shadow"></div>'), x.container.append(e))));
                                for (var i = 0; i < x.slides.length; i++) {
                                    var r = x.slides.eq(i),
                                        a = 90 * i,
                                        s = Math.floor(a / 360);
                                    x.rtl && (a = -a, s = Math.floor(-a / 360));
                                    var o = Math.max(Math.min(r[0].progress, 1), -1),
                                        l = 0,
                                        c = 0,
                                        u = 0;
                                    i % 4 === 0 ? (l = 4 * -s * x.size, u = 0) : (i - 1) % 4 === 0 ? (l = 0, u = 4 * -s * x.size) : (i - 2) % 4 === 0 ? (l = x.size + 4 * s * x.size, u = x.size) : (i - 3) % 4 === 0 && (l = -x.size, u = 3 * x.size + 4 * x.size * s), x.rtl && (l = -l), x.isHorizontal() || (c = l, l = 0);
                                    var p = "rotateX(" + (x.isHorizontal() ? 0 : -a) + "deg) rotateY(" + (x.isHorizontal() ? a : 0) + "deg) translate3d(" + l + "px, " + c + "px, " + u + "px)";
                                    if (1 >= o && o > -1 && (n = 90 * i + 90 * o, x.rtl && (n = 90 * -i - 90 * o)), r.transform(p), x.params.cube.slideShadows) {
                                        var d = x.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                                            h = x.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                                        0 === d.length && (d = t('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), r.append(d)), 0 === h.length && (h = t('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), r.append(h)), d.length && (d[0].style.opacity = Math.max(-o, 0)), h.length && (h[0].style.opacity = Math.max(o, 0)) } }
                                if (x.wrapper.css({ "-webkit-transform-origin": "50% 50% -" + x.size / 2 + "px", "-moz-transform-origin": "50% 50% -" + x.size / 2 + "px", "-ms-transform-origin": "50% 50% -" + x.size / 2 + "px", "transform-origin": "50% 50% -" + x.size / 2 + "px" }), x.params.cube.shadow)
                                    if (x.isHorizontal()) e.transform("translate3d(0px, " + (x.width / 2 + x.params.cube.shadowOffset) + "px, " + -x.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + x.params.cube.shadowScale + ")");
                                    else {
                                        var f = Math.abs(n) - 90 * Math.floor(Math.abs(n) / 90),
                                            m = 1.5 - (Math.sin(2 * f * Math.PI / 360) / 2 + Math.cos(2 * f * Math.PI / 360) / 2),
                                            g = x.params.cube.shadowScale,
                                            v = x.params.cube.shadowScale / m,
                                            y = x.params.cube.shadowOffset;
                                        e.transform("scale3d(" + g + ", 1, " + v + ") translate3d(0px, " + (x.height / 2 + y) + "px, " + -x.height / 2 / v + "px) rotateX(-90deg)") }
                                var w = x.isSafari || x.isUiWebView ? -x.size / 2 : 0;
                                x.wrapper.transform("translate3d(0px,0," + w + "px) rotateX(" + (x.isHorizontal() ? 0 : n) + "deg) rotateY(" + (x.isHorizontal() ? -n : 0) + "deg)") }, setTransition: function(e) { x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), x.params.cube.shadow && !x.isHorizontal() && x.container.find(".swiper-cube-shadow").transition(e) } }, coverflow: { setTranslate: function() {
                                for (var e = x.translate, n = x.isHorizontal() ? -e + x.width / 2 : -e + x.height / 2, i = x.isHorizontal() ? x.params.coverflow.rotate : -x.params.coverflow.rotate, r = x.params.coverflow.depth, a = 0, s = x.slides.length; s > a; a++) {
                                    var o = x.slides.eq(a),
                                        l = x.slidesSizesGrid[a],
                                        c = o[0].swiperSlideOffset,
                                        u = (n - c - l / 2) / l * x.params.coverflow.modifier,
                                        p = x.isHorizontal() ? i * u : 0,
                                        d = x.isHorizontal() ? 0 : i * u,
                                        h = -r * Math.abs(u),
                                        f = x.isHorizontal() ? 0 : x.params.coverflow.stretch * u,
                                        m = x.isHorizontal() ? x.params.coverflow.stretch * u : 0;
                                    Math.abs(m) < .001 && (m = 0), Math.abs(f) < .001 && (f = 0), Math.abs(h) < .001 && (h = 0), Math.abs(p) < .001 && (p = 0), Math.abs(d) < .001 && (d = 0);
                                    var g = "translate3d(" + m + "px," + f + "px," + h + "px)  rotateX(" + d + "deg) rotateY(" + p + "deg)";
                                    if (o.transform(g), o[0].style.zIndex = -Math.abs(Math.round(u)) + 1, x.params.coverflow.slideShadows) {
                                        var v = x.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
                                            y = x.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                                        0 === v.length && (v = t('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), o.append(v)), 0 === y.length && (y = t('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), o.append(y)), v.length && (v[0].style.opacity = u > 0 ? u : 0), y.length && (y[0].style.opacity = -u > 0 ? -u : 0) } }
                                if (x.browser.ie) {
                                    var w = x.wrapper[0].style;
                                    w.perspectiveOrigin = n + "px 50%" } }, setTransition: function(e) { x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e) } } }, x.lazy = { initialImageLoaded: !1, loadImageInSlide: function(e, n) {
                            if ("undefined" != typeof e && ("undefined" == typeof n && (n = !0), 0 !== x.slides.length)) {
                                var i = x.slides.eq(e),
                                    r = i.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");!i.hasClass("swiper-lazy") || i.hasClass("swiper-lazy-loaded") || i.hasClass("swiper-lazy-loading") || (r = r.add(i[0])), 0 !== r.length && r.each(function() {
                                    var e = t(this);
                                    e.addClass("swiper-lazy-loading");
                                    var r = e.attr("data-background"),
                                        a = e.attr("data-src"),
                                        s = e.attr("data-srcset");
                                    x.loadImage(e[0], a || r, s, !1, function() {
                                        if (r ? (e.css("background-image", 'url("' + r + '")'), e.removeAttr("data-background")) : (s && (e.attr("srcset", s), e.removeAttr("data-srcset")), a && (e.attr("src", a), e.removeAttr("data-src"))), e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), i.find(".swiper-lazy-preloader, .preloader").remove(), x.params.loop && n) {
                                            var t = i.attr("data-swiper-slide-index");
                                            if (i.hasClass(x.params.slideDuplicateClass)) {
                                                var o = x.wrapper.children('[data-swiper-slide-index="' + t + '"]:not(.' + x.params.slideDuplicateClass + ")");
                                                x.lazy.loadImageInSlide(o.index(), !1) } else {
                                                var l = x.wrapper.children("." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]');
                                                x.lazy.loadImageInSlide(l.index(), !1) } }
                                        x.emit("onLazyImageReady", x, i[0], e[0]) }), x.emit("onLazyImageLoad", x, i[0], e[0]) }) } }, load: function() {
                            var e;
                            if (x.params.watchSlidesVisibility) x.wrapper.children("." + x.params.slideVisibleClass).each(function() { x.lazy.loadImageInSlide(t(this).index()) });
                            else if (x.params.slidesPerView > 1)
                                for (e = x.activeIndex; e < x.activeIndex + x.params.slidesPerView; e++) x.slides[e] && x.lazy.loadImageInSlide(e);
                            else x.lazy.loadImageInSlide(x.activeIndex);
                            if (x.params.lazyLoadingInPrevNext)
                                if (x.params.slidesPerView > 1 || x.params.lazyLoadingInPrevNextAmount && x.params.lazyLoadingInPrevNextAmount > 1) {
                                    var n = x.params.lazyLoadingInPrevNextAmount,
                                        i = x.params.slidesPerView,
                                        r = Math.min(x.activeIndex + i + Math.max(n, i), x.slides.length),
                                        a = Math.max(x.activeIndex - Math.max(i, n), 0);
                                    for (e = x.activeIndex + x.params.slidesPerView; r > e; e++) x.slides[e] && x.lazy.loadImageInSlide(e);
                                    for (e = a; e < x.activeIndex; e++) x.slides[e] && x.lazy.loadImageInSlide(e) } else {
                                    var s = x.wrapper.children("." + x.params.slideNextClass);
                                    s.length > 0 && x.lazy.loadImageInSlide(s.index());
                                    var o = x.wrapper.children("." + x.params.slidePrevClass);
                                    o.length > 0 && x.lazy.loadImageInSlide(o.index()) } }, onTransitionStart: function() { x.params.lazyLoading && (x.params.lazyLoadingOnTransitionStart || !x.params.lazyLoadingOnTransitionStart && !x.lazy.initialImageLoaded) && x.lazy.load() }, onTransitionEnd: function() { x.params.lazyLoading && !x.params.lazyLoadingOnTransitionStart && x.lazy.load() } }, x.scrollbar = { isTouched: !1, setDragPosition: function(e) {
                            var t = x.scrollbar,
                                n = x.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY,
                                i = n - t.track.offset()[x.isHorizontal() ? "left" : "top"] - t.dragSize / 2,
                                r = -x.minTranslate() * t.moveDivider,
                                a = -x.maxTranslate() * t.moveDivider;
                            r > i ? i = r : i > a && (i = a), i = -i / t.moveDivider, x.updateProgress(i), x.setWrapperTranslate(i, !0) }, dragStart: function(e) {
                            var t = x.scrollbar;
                            t.isTouched = !0, e.preventDefault(), e.stopPropagation(), t.setDragPosition(e), clearTimeout(t.dragTimeout), t.track.transition(0), x.params.scrollbarHide && t.track.css("opacity", 1), x.wrapper.transition(100), t.drag.transition(100), x.emit("onScrollbarDragStart", x) }, dragMove: function(e) {
                            var t = x.scrollbar;
                            t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), x.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), x.emit("onScrollbarDragMove", x)) }, dragEnd: function(e) {
                            var t = x.scrollbar;
                            t.isTouched && (t.isTouched = !1, x.params.scrollbarHide && (clearTimeout(t.dragTimeout), t.dragTimeout = setTimeout(function() { t.track.css("opacity", 0), t.track.transition(400) }, 1e3)), x.emit("onScrollbarDragEnd", x), x.params.scrollbarSnapOnRelease && x.slideReset()) }, enableDraggable: function() {
                            var e = x.scrollbar,
                                n = x.support.touch ? e.track : document;
                            t(e.track).on(x.touchEvents.start, e.dragStart), t(n).on(x.touchEvents.move, e.dragMove), t(n).on(x.touchEvents.end, e.dragEnd) }, disableDraggable: function() {
                            var e = x.scrollbar,
                                n = x.support.touch ? e.track : document;
                            t(e.track).off(x.touchEvents.start, e.dragStart), t(n).off(x.touchEvents.move, e.dragMove), t(n).off(x.touchEvents.end, e.dragEnd) }, set: function() {
                            if (x.params.scrollbar) {
                                var e = x.scrollbar;
                                e.track = t(x.params.scrollbar), x.params.uniqueNavElements && "string" == typeof x.params.scrollbar && e.track.length > 1 && 1 === x.container.find(x.params.scrollbar).length && (e.track = x.container.find(x.params.scrollbar)), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = t('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = x.isHorizontal() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = x.size / x.virtualSize, e.moveDivider = e.divider * (e.trackSize / x.size), e.dragSize = e.trackSize * e.divider, x.isHorizontal() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.divider >= 1 ? e.track[0].style.display = "none" : e.track[0].style.display = "", x.params.scrollbarHide && (e.track[0].style.opacity = 0) } }, setTranslate: function() {
                            if (x.params.scrollbar) {
                                var e, t = x.scrollbar,
                                    n = (x.translate || 0, t.dragSize);
                                e = (t.trackSize - t.dragSize) * x.progress, x.rtl && x.isHorizontal() ? (e = -e, e > 0 ? (n = t.dragSize - e, e = 0) : -e + t.dragSize > t.trackSize && (n = t.trackSize + e)) : 0 > e ? (n = t.dragSize + e, e = 0) : e + t.dragSize > t.trackSize && (n = t.trackSize - e), x.isHorizontal() ? (x.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"), t.drag[0].style.width = n + "px") : (x.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"), t.drag[0].style.height = n + "px"), x.params.scrollbarHide && (clearTimeout(t.timeout), t.track[0].style.opacity = 1, t.timeout = setTimeout(function() { t.track[0].style.opacity = 0, t.track.transition(400) }, 1e3)) } }, setTransition: function(e) { x.params.scrollbar && x.scrollbar.drag.transition(e) } }, x.controller = { LinearSpline: function(e, t) { this.x = e, this.y = t, this.lastIndex = e.length - 1;
                            var n, i;
                            this.x.length, this.interpolate = function(e) {
                                return e ? (i = r(this.x, e), n = i - 1, (e - this.x[n]) * (this.y[i] - this.y[n]) / (this.x[i] - this.x[n]) + this.y[n]) : 0 };
                            var r = function() {
                                var e, t, n;
                                return function(i, r) {
                                    for (t = -1, e = i.length; e - t > 1;) i[n = e + t >> 1] <= r ? t = n : e = n;
                                    return e } }() }, getInterpolateFunction: function(e) { x.controller.spline || (x.controller.spline = x.params.loop ? new x.controller.LinearSpline(x.slidesGrid, e.slidesGrid) : new x.controller.LinearSpline(x.snapGrid, e.snapGrid)) }, setTranslate: function(e, t) {
                            function i(t) { e = t.rtl && "horizontal" === t.params.direction ? -x.translate : x.translate, "slide" === x.params.controlBy && (x.controller.getInterpolateFunction(t), a = -x.controller.spline.interpolate(-e)), a && "container" !== x.params.controlBy || (r = (t.maxTranslate() - t.minTranslate()) / (x.maxTranslate() - x.minTranslate()), a = (e - x.minTranslate()) * r + t.minTranslate()), x.params.controlInverse && (a = t.maxTranslate() - a), t.updateProgress(a), t.setWrapperTranslate(a, !1, x), t.updateActiveIndex() }
                            var r, a, s = x.params.control;
                            if (x.isArray(s))
                                for (var o = 0; o < s.length; o++) s[o] !== t && s[o] instanceof n && i(s[o]);
                            else s instanceof n && t !== s && i(s) }, setTransition: function(e, t) {
                            function i(t) { t.setWrapperTransition(e, x), 0 !== e && (t.onTransitionStart(), t.wrapper.transitionEnd(function() { a && (t.params.loop && "slide" === x.params.controlBy && t.fixLoop(), t.onTransitionEnd()) })) }
                            var r, a = x.params.control;
                            if (x.isArray(a))
                                for (r = 0; r < a.length; r++) a[r] !== t && a[r] instanceof n && i(a[r]);
                            else a instanceof n && t !== a && i(a) } }, x.hashnav = { init: function() {
                            if (x.params.hashnav) { x.hashnav.initialized = !0;
                                var e = document.location.hash.replace("#", "");
                                if (e)
                                    for (var t = 0, n = 0, i = x.slides.length; i > n; n++) {
                                        var r = x.slides.eq(n),
                                            a = r.attr("data-hash");
                                        if (a === e && !r.hasClass(x.params.slideDuplicateClass)) {
                                            var s = r.index();
                                            x.slideTo(s, t, x.params.runCallbacksOnInit, !0) } } } }, setHash: function() { x.hashnav.initialized && x.params.hashnav && (document.location.hash = x.slides.eq(x.activeIndex).attr("data-hash") || "") } }, x.disableKeyboardControl = function() { x.params.keyboardControl = !1, t(document).off("keydown", c) }, x.enableKeyboardControl = function() { x.params.keyboardControl = !0, t(document).on("keydown", c) }, x.mousewheel = { event: !1, lastScrollTime: (new window.Date).getTime() }, x.params.mousewheelControl) {
                    try { new window.WheelEvent("wheel"), x.mousewheel.event = "wheel" } catch (e) {
                        (window.WheelEvent || x.container[0] && "wheel" in x.container[0]) && (x.mousewheel.event = "wheel") }!x.mousewheel.event && window.WheelEvent, x.mousewheel.event || void 0 === document.onmousewheel || (x.mousewheel.event = "mousewheel"), x.mousewheel.event || (x.mousewheel.event = "DOMMouseScroll") }
                x.disableMousewheelControl = function() {
                    return !!x.mousewheel.event && (x.container.off(x.mousewheel.event, u), !0) }, x.enableMousewheelControl = function() {
                    return !!x.mousewheel.event && (x.container.on(x.mousewheel.event, u), !0) }, x.parallax = { setTranslate: function() { x.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() { p(this, x.progress) }), x.slides.each(function() {
                            var e = t(this);
                            e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                var t = Math.min(Math.max(e[0].progress, -1), 1);
                                p(this, t) }) }) }, setTransition: function(e) { "undefined" == typeof e && (e = x.params.speed), x.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            var n = t(this),
                                i = parseInt(n.attr("data-swiper-parallax-duration"), 10) || e;
                            0 === e && (i = 0), n.transition(i) }) } }, x._plugins = [];
                for (var j in x.plugins) {
                    var X = x.plugins[j](x, x.params[j]);
                    X && x._plugins.push(X) }
                return x.callPlugins = function(e) {
                    for (var t = 0; t < x._plugins.length; t++) e in x._plugins[t] && x._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) }, x.emitterEventListeners = {}, x.emit = function(e) { x.params[e] && x.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    var t;
                    if (x.emitterEventListeners[e])
                        for (t = 0; t < x.emitterEventListeners[e].length; t++) x.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    x.callPlugins && x.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) }, x.on = function(e, t) {
                    return e = d(e), x.emitterEventListeners[e] || (x.emitterEventListeners[e] = []), x.emitterEventListeners[e].push(t), x }, x.off = function(e, t) {
                    var n;
                    if (e = d(e), "undefined" == typeof t) return x.emitterEventListeners[e] = [], x;
                    if (x.emitterEventListeners[e] && 0 !== x.emitterEventListeners[e].length) {
                        for (n = 0; n < x.emitterEventListeners[e].length; n++) x.emitterEventListeners[e][n] === t && x.emitterEventListeners[e].splice(n, 1);
                        return x } }, x.once = function(e, t) { e = d(e);
                    var n = function() { t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), x.off(e, n) };
                    return x.on(e, n), x }, x.a11y = {
                    makeFocusable: function(e) {
                        return e.attr("tabIndex", "0"), e },
                    addRole: function(e, t) {
                        return e.attr("role", t), e },
                    addLabel: function(e, t) {
                        return e.attr("aria-label", t), e },
                    disable: function(e) {
                        return e.attr("aria-disabled", !0), e },
                    enable: function(e) {
                        return e.attr("aria-disabled", !1), e },
                    onEnterKey: function(e) {
                        13 === e.keyCode && (t(e.target).is(x.params.nextButton) ? (x.onClickNext(e), x.isEnd ? x.a11y.notify(x.params.lastSlideMessage) : x.a11y.notify(x.params.nextSlideMessage)) : t(e.target).is(x.params.prevButton) && (x.onClickPrev(e),
                            x.isBeginning ? x.a11y.notify(x.params.firstSlideMessage) : x.a11y.notify(x.params.prevSlideMessage)), t(e.target).is("." + x.params.bulletClass) && t(e.target)[0].click())
                    },
                    liveRegion: t('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                    notify: function(e) {
                        var t = x.a11y.liveRegion;
                        0 !== t.length && (t.html(""), t.html(e)) },
                    init: function() { x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.a11y.makeFocusable(x.nextButton), x.a11y.addRole(x.nextButton, "button"), x.a11y.addLabel(x.nextButton, x.params.nextSlideMessage)), x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.a11y.makeFocusable(x.prevButton), x.a11y.addRole(x.prevButton, "button"), x.a11y.addLabel(x.prevButton, x.params.prevSlideMessage)), t(x.container).append(x.a11y.liveRegion) },
                    initPagination: function() { x.params.pagination && x.params.paginationClickable && x.bullets && x.bullets.length && x.bullets.each(function() {
                            var e = t(this);
                            x.a11y.makeFocusable(e), x.a11y.addRole(e, "button"), x.a11y.addLabel(e, x.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1)) }) },
                    destroy: function() { x.a11y.liveRegion && x.a11y.liveRegion.length > 0 && x.a11y.liveRegion.remove() }
                }, x.init = function() { x.params.loop && x.createLoop(), x.updateContainerSize(), x.updateSlidesSize(), x.updatePagination(), x.params.scrollbar && x.scrollbar && (x.scrollbar.set(), x.params.scrollbarDraggable && x.scrollbar.enableDraggable()), "slide" !== x.params.effect && x.effects[x.params.effect] && (x.params.loop || x.updateProgress(), x.effects[x.params.effect].setTranslate()), x.params.loop ? x.slideTo(x.params.initialSlide + x.loopedSlides, 0, x.params.runCallbacksOnInit) : (x.slideTo(x.params.initialSlide, 0, x.params.runCallbacksOnInit), 0 === x.params.initialSlide && (x.parallax && x.params.parallax && x.parallax.setTranslate(), x.lazy && x.params.lazyLoading && (x.lazy.load(), x.lazy.initialImageLoaded = !0))), x.attachEvents(), x.params.observer && x.support.observer && x.initObservers(), x.params.preloadImages && !x.params.lazyLoading && x.preloadImages(), x.params.autoplay && x.startAutoplay(), x.params.keyboardControl && x.enableKeyboardControl && x.enableKeyboardControl(), x.params.mousewheelControl && x.enableMousewheelControl && x.enableMousewheelControl(), x.params.hashnav && x.hashnav && x.hashnav.init(), x.params.a11y && x.a11y && x.a11y.init(), x.emit("onInit", x) }, x.cleanupStyles = function() { x.container.removeClass(x.classNames.join(" ")).removeAttr("style"), x.wrapper.removeAttr("style"), x.slides && x.slides.length && x.slides.removeClass([x.params.slideVisibleClass, x.params.slideActiveClass, x.params.slideNextClass, x.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), x.paginationContainer && x.paginationContainer.length && x.paginationContainer.removeClass(x.params.paginationHiddenClass), x.bullets && x.bullets.length && x.bullets.removeClass(x.params.bulletActiveClass), x.params.prevButton && t(x.params.prevButton).removeClass(x.params.buttonDisabledClass), x.params.nextButton && t(x.params.nextButton).removeClass(x.params.buttonDisabledClass), x.params.scrollbar && x.scrollbar && (x.scrollbar.track && x.scrollbar.track.length && x.scrollbar.track.removeAttr("style"), x.scrollbar.drag && x.scrollbar.drag.length && x.scrollbar.drag.removeAttr("style")) }, x.destroy = function(e, t) { x.detachEvents(), x.stopAutoplay(), x.params.scrollbar && x.scrollbar && x.params.scrollbarDraggable && x.scrollbar.disableDraggable(), x.params.loop && x.destroyLoop(), t && x.cleanupStyles(), x.disconnectObservers(), x.params.keyboardControl && x.disableKeyboardControl && x.disableKeyboardControl(), x.params.mousewheelControl && x.disableMousewheelControl && x.disableMousewheelControl(), x.params.a11y && x.a11y && x.a11y.destroy(), x.emit("onDestroy"), e !== !1 && (x = null) }, x.init(), x
            }
        };
        n.prototype = { isSafari: function() {
                var e = navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0 }(), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent), isArray: function(e) {
                return "[object Array]" === Object.prototype.toString.apply(e) }, browser: { ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled, ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1 }, device: function() {
                var e = navigator.userAgent,
                    t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                    n = e.match(/(iPad).*OS\s([\d_]+)/),
                    i = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                    r = !n && e.match(/(iPhone\sOS)\s([\d_]+)/);
                return { ios: n || r || i, android: t } }(), support: { touch: window.Modernizr && Modernizr.touch === !0 || function() {
                    return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) }(), transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                    var e = document.createElement("div").style;
                    return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e }(), flexbox: function() {
                    for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n++)
                        if (t[n] in e) return !0 }(), observer: function() {
                    return "MutationObserver" in window || "WebkitMutationObserver" in window }() }, plugins: {} };
        for (var i = (function() {
                var e = function(e) {
                        var t = this,
                            n = 0;
                        for (n = 0; n < e.length; n++) t[n] = e[n];
                        return t.length = e.length, this },
                    t = function(t, n) {
                        var i = [],
                            r = 0;
                        if (t && !n && t instanceof e) return t;
                        if (t)
                            if ("string" == typeof t) {
                                var a, s, o = t.trim();
                                if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                                    var l = "div";
                                    for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), (0 === o.indexOf("<td") || 0 === o.indexOf("<th")) && (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), s = document.createElement(l), s.innerHTML = t, r = 0; r < s.childNodes.length; r++) i.push(s.childNodes[r]) } else
                                    for (a = n || "#" !== t[0] || t.match(/[ .<>:~]/) ? (n || document).querySelectorAll(t) : [document.getElementById(t.split("#")[1])], r = 0; r < a.length; r++) a[r] && i.push(a[r]) } else if (t.nodeType || t === window || t === document) i.push(t);
                        else if (t.length > 0 && t[0].nodeType)
                            for (r = 0; r < t.length; r++) i.push(t[r]);
                        return new e(i) };
                return e.prototype = { addClass: function(e) {
                        if ("undefined" == typeof e) return this;
                        for (var t = e.split(" "), n = 0; n < t.length; n++)
                            for (var i = 0; i < this.length; i++) this[i].classList.add(t[n]);
                        return this }, removeClass: function(e) {
                        for (var t = e.split(" "), n = 0; n < t.length; n++)
                            for (var i = 0; i < this.length; i++) this[i].classList.remove(t[n]);
                        return this }, hasClass: function(e) {
                        return !!this[0] && this[0].classList.contains(e) }, toggleClass: function(e) {
                        for (var t = e.split(" "), n = 0; n < t.length; n++)
                            for (var i = 0; i < this.length; i++) this[i].classList.toggle(t[n]);
                        return this }, attr: function(e, t) {
                        if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                        for (var n = 0; n < this.length; n++)
                            if (2 === arguments.length) this[n].setAttribute(e, t);
                            else
                                for (var i in e) this[n][i] = e[i], this[n].setAttribute(i, e[i]);
                        return this }, removeAttr: function(e) {
                        for (var t = 0; t < this.length; t++) this[t].removeAttribute(e);
                        return this }, data: function(e, t) {
                        if ("undefined" != typeof t) {
                            for (var n = 0; n < this.length; n++) {
                                var i = this[n];
                                i.dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t }
                            return this }
                        if (this[0]) {
                            var r = this[0].getAttribute("data-" + e);
                            return r ? r : this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0 } }, transform: function(e) {
                        for (var t = 0; t < this.length; t++) {
                            var n = this[t].style;
                            n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e }
                        return this }, transition: function(e) { "string" != typeof e && (e += "ms");
                        for (var t = 0; t < this.length; t++) {
                            var n = this[t].style;
                            n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e }
                        return this }, on: function(e, n, i, r) {
                        function a(e) {
                            var r = e.target;
                            if (t(r).is(n)) i.call(r, e);
                            else
                                for (var a = t(r).parents(), s = 0; s < a.length; s++) t(a[s]).is(n) && i.call(a[s], e) }
                        var s, o, l = e.split(" ");
                        for (s = 0; s < this.length; s++)
                            if ("function" == typeof n || n === !1)
                                for ("function" == typeof n && (i = arguments[1], r = arguments[2] || !1), o = 0; o < l.length; o++) this[s].addEventListener(l[o], i, r);
                            else
                                for (o = 0; o < l.length; o++) this[s].dom7LiveListeners || (this[s].dom7LiveListeners = []), this[s].dom7LiveListeners.push({ listener: i, liveListener: a }), this[s].addEventListener(l[o], a, r);
                        return this }, off: function(e, t, n, i) {
                        for (var r = e.split(" "), a = 0; a < r.length; a++)
                            for (var s = 0; s < this.length; s++)
                                if ("function" == typeof t || t === !1) "function" == typeof t && (n = arguments[1], i = arguments[2] || !1), this[s].removeEventListener(r[a], n, i);
                                else if (this[s].dom7LiveListeners)
                            for (var o = 0; o < this[s].dom7LiveListeners.length; o++) this[s].dom7LiveListeners[o].listener === n && this[s].removeEventListener(r[a], this[s].dom7LiveListeners[o].liveListener, i);
                        return this }, once: function(e, t, n, i) {
                        function r(s) { n(s), a.off(e, t, r, i) }
                        var a = this; "function" == typeof t && (t = !1, n = arguments[1], i = arguments[2]), a.on(e, t, r, i) }, trigger: function(e, t) {
                        for (var n = 0; n < this.length; n++) {
                            var i;
                            try { i = new window.CustomEvent(e, { detail: t, bubbles: !0, cancelable: !0 }) } catch (n) { i = document.createEvent("Event"), i.initEvent(e, !0, !0), i.detail = t }
                            this[n].dispatchEvent(i) }
                        return this }, transitionEnd: function(e) {
                        function t(a) {
                            if (a.target === this)
                                for (e.call(this, a), n = 0; n < i.length; n++) r.off(i[n], t) }
                        var n, i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                            r = this;
                        if (e)
                            for (n = 0; n < i.length; n++) r.on(i[n], t);
                        return this }, width: function() {
                        return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null }, outerWidth: function(e) {
                        return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null }, height: function() {
                        return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null }, outerHeight: function(e) {
                        return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null }, offset: function() {
                        if (this.length > 0) {
                            var e = this[0],
                                t = e.getBoundingClientRect(),
                                n = document.body,
                                i = e.clientTop || n.clientTop || 0,
                                r = e.clientLeft || n.clientLeft || 0,
                                a = window.pageYOffset || e.scrollTop,
                                s = window.pageXOffset || e.scrollLeft;
                            return { top: t.top + a - i, left: t.left + s - r } }
                        return null }, css: function(e, t) {
                        var n;
                        if (1 === arguments.length) {
                            if ("string" != typeof e) {
                                for (n = 0; n < this.length; n++)
                                    for (var i in e) this[n].style[i] = e[i];
                                return this }
                            if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e) }
                        if (2 === arguments.length && "string" == typeof e) {
                            for (n = 0; n < this.length; n++) this[n].style[e] = t;
                            return this }
                        return this }, each: function(e) {
                        for (var t = 0; t < this.length; t++) e.call(this[t], t, this[t]);
                        return this }, html: function(e) {
                        if ("undefined" == typeof e) return this[0] ? this[0].innerHTML : void 0;
                        for (var t = 0; t < this.length; t++) this[t].innerHTML = e;
                        return this }, text: function(e) {
                        if ("undefined" == typeof e) return this[0] ? this[0].textContent.trim() : null;
                        for (var t = 0; t < this.length; t++) this[t].textContent = e;
                        return this }, is: function(n) {
                        if (!this[0]) return !1;
                        var i, r;
                        if ("string" == typeof n) {
                            var a = this[0];
                            if (a === document) return n === document;
                            if (a === window) return n === window;
                            if (a.matches) return a.matches(n);
                            if (a.webkitMatchesSelector) return a.webkitMatchesSelector(n);
                            if (a.mozMatchesSelector) return a.mozMatchesSelector(n);
                            if (a.msMatchesSelector) return a.msMatchesSelector(n);
                            for (i = t(n), r = 0; r < i.length; r++)
                                if (i[r] === this[0]) return !0;
                            return !1 }
                        if (n === document) return this[0] === document;
                        if (n === window) return this[0] === window;
                        if (n.nodeType || n instanceof e) {
                            for (i = n.nodeType ? [n] : n, r = 0; r < i.length; r++)
                                if (i[r] === this[0]) return !0;
                            return !1 }
                        return !1 }, index: function() {
                        if (this[0]) {
                            for (var e = this[0], t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && t++;
                            return t } }, eq: function(t) {
                        if ("undefined" == typeof t) return this;
                        var n, i = this.length;
                        return t > i - 1 ? new e([]) : 0 > t ? (n = i + t, new e(0 > n ? [] : [this[n]])) : new e([this[t]]) }, append: function(t) {
                        var n, i;
                        for (n = 0; n < this.length; n++)
                            if ("string" == typeof t) {
                                var r = document.createElement("div");
                                for (r.innerHTML = t; r.firstChild;) this[n].appendChild(r.firstChild) } else if (t instanceof e)
                            for (i = 0; i < t.length; i++) this[n].appendChild(t[i]);
                        else this[n].appendChild(t);
                        return this }, prepend: function(t) {
                        var n, i;
                        for (n = 0; n < this.length; n++)
                            if ("string" == typeof t) {
                                var r = document.createElement("div");
                                for (r.innerHTML = t, i = r.childNodes.length - 1; i >= 0; i--) this[n].insertBefore(r.childNodes[i], this[n].childNodes[0]) } else if (t instanceof e)
                            for (i = 0; i < t.length; i++) this[n].insertBefore(t[i], this[n].childNodes[0]);
                        else this[n].insertBefore(t, this[n].childNodes[0]);
                        return this }, insertBefore: function(e) {
                        for (var n = t(e), i = 0; i < this.length; i++)
                            if (1 === n.length) n[0].parentNode.insertBefore(this[i], n[0]);
                            else if (n.length > 1)
                            for (var r = 0; r < n.length; r++) n[r].parentNode.insertBefore(this[i].cloneNode(!0), n[r]) }, insertAfter: function(e) {
                        for (var n = t(e), i = 0; i < this.length; i++)
                            if (1 === n.length) n[0].parentNode.insertBefore(this[i], n[0].nextSibling);
                            else if (n.length > 1)
                            for (var r = 0; r < n.length; r++) n[r].parentNode.insertBefore(this[i].cloneNode(!0), n[r].nextSibling) }, next: function(n) {
                        return new e(this.length > 0 ? n ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(n) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : []) }, nextAll: function(n) {
                        var i = [],
                            r = this[0];
                        if (!r) return new e([]);
                        for (; r.nextElementSibling;) {
                            var a = r.nextElementSibling;
                            n ? t(a).is(n) && i.push(a) : i.push(a), r = a }
                        return new e(i) }, prev: function(n) {
                        return new e(this.length > 0 ? n ? this[0].previousElementSibling && t(this[0].previousElementSibling).is(n) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : []) }, prevAll: function(n) {
                        var i = [],
                            r = this[0];
                        if (!r) return new e([]);
                        for (; r.previousElementSibling;) {
                            var a = r.previousElementSibling;
                            n ? t(a).is(n) && i.push(a) : i.push(a), r = a }
                        return new e(i) }, parent: function(e) {
                        for (var n = [], i = 0; i < this.length; i++) e ? t(this[i].parentNode).is(e) && n.push(this[i].parentNode) : n.push(this[i].parentNode);
                        return t(t.unique(n)) }, parents: function(e) {
                        for (var n = [], i = 0; i < this.length; i++)
                            for (var r = this[i].parentNode; r;) e ? t(r).is(e) && n.push(r) : n.push(r), r = r.parentNode;
                        return t(t.unique(n)) }, find: function(t) {
                        for (var n = [], i = 0; i < this.length; i++)
                            for (var r = this[i].querySelectorAll(t), a = 0; a < r.length; a++) n.push(r[a]);
                        return new e(n) }, children: function(n) {
                        for (var i = [], r = 0; r < this.length; r++)
                            for (var a = this[r].childNodes, s = 0; s < a.length; s++) n ? 1 === a[s].nodeType && t(a[s]).is(n) && i.push(a[s]) : 1 === a[s].nodeType && i.push(a[s]);
                        return new e(t.unique(i)) }, remove: function() {
                        for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                        return this }, add: function() {
                        var e, n, i = this;
                        for (e = 0; e < arguments.length; e++) {
                            var r = t(arguments[e]);
                            for (n = 0; n < r.length; n++) i[i.length] = r[n], i.length++ }
                        return i } }, t.fn = e.prototype, t.unique = function(e) {
                    for (var t = [], n = 0; n < e.length; n++) - 1 === t.indexOf(e[n]) && t.push(e[n]);
                    return t }, t }()), r = ["jQuery", "Zepto", "Dom7"], a = 0; a < r.length; a++) window[r[a]] && e(window[r[a]]);
        var s;
        s = "undefined" == typeof i ? window.Dom7 || window.Zepto || window.jQuery : i, s && ("transitionEnd" in s.fn || (s.fn.transitionEnd = function(e) {
            function t(a) {
                if (a.target === this)
                    for (e.call(this, a), n = 0; n < i.length; n++) r.off(i[n], t) }
            var n, i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                r = this;
            if (e)
                for (n = 0; n < i.length; n++) r.on(i[n], t);
            return this }), "transform" in s.fn || (s.fn.transform = function(e) {
            for (var t = 0; t < this.length; t++) {
                var n = this[t].style;
                n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e }
            return this }), "transition" in s.fn || (s.fn.transition = function(e) { "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t++) {
                var n = this[t].style;
                n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e }
            return this })), window.Swiper = n
    }(), e.exports = window.Swiper
}, function(e, t) {
    function n() {
        for (allBoxes = window.document.documentElement.querySelectorAll(".ani"), i = 0; i < allBoxes.length; i++) allBoxes[i].attributes.style ? allBoxes[i].setAttribute("swiper-animate-style-cache", allBoxes[i].attributes.style.value) : allBoxes[i].setAttribute("swiper-animate-style-cache", " "), allBoxes[i].style.visibility = "hidden" }

    function r(e) { a();
        var t = e.slides[e.activeIndex].querySelectorAll(".ani");
        for (i = 0; i < t.length; i++) t[i].style.visibility = "visible", effect = t[i].attributes["swiper-animate-effect"] ? t[i].attributes["swiper-animate-effect"].value : "", t[i].className = t[i].className + "  " + effect + " animated", style = t[i].attributes.style.value, duration = t[i].attributes["swiper-animate-duration"] ? t[i].attributes["swiper-animate-duration"].value : "", duration && (style = style + "animation-duration:" + duration + ";-webkit-animation-duration:" + duration + ";"), delay = t[i].attributes["swiper-animate-delay"] ? t[i].attributes["swiper-animate-delay"].value : "", delay && (style = style + "animation-delay:" + delay + ";-webkit-animation-delay:" + delay + ";"), t[i].setAttribute("style", style) }

    function a() {
        for (allBoxes = window.document.documentElement.querySelectorAll(".ani"), i = 0; i < allBoxes.length; i++) allBoxes[i].attributes["swiper-animate-style-cache"] && allBoxes[i].setAttribute("style", allBoxes[i].attributes["swiper-animate-style-cache"].value), allBoxes[i].style.visibility = "hidden", allBoxes[i].className = allBoxes[i].className.replace("animated", " "), allBoxes[i].attributes["swiper-animate-effect"] && (effect = allBoxes[i].attributes["swiper-animate-effect"].value, allBoxes[i].className = allBoxes[i].className.replace(effect, " ")) }
    e.exports = { swiperAnimateCache: n, swiperAnimate: r, clearSwiperAnimate: a } }, function(e, t, n) {
    var i;
    ! function(r, a, s) {
        function o(e, t) { this.wrapper = "string" == typeof e ? a.querySelector(e) : e, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = { resizeScrollbars: !0, mouseWheelSpeed: 20, snapThreshold: .334, disablePointer: !p.hasPointer, disableTouch: p.hasPointer || !p.hasTouch, disableMouse: p.hasPointer || p.hasTouch, startX: 0, startY: 0, scrollY: !0, directionLockThreshold: 5, momentum: !0, bounce: !0, bounceTime: 600, bounceEasing: "", preventDefault: !0, preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ }, HWCompositing: !0, useTransition: !0, useTransform: !0, bindToWrapper: "undefined" == typeof r.onmousedown };
            for (var n in t) this.options[n] = t[n];
            this.translateZ = this.options.HWCompositing && p.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = p.hasTransition && this.options.useTransition, this.options.useTransform = p.hasTransform && this.options.useTransform, this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY, this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? p.ease[this.options.bounceEasing] || p.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, this.options.tap === !0 && (this.options.tap = "tap"), this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable() }

        function l(e, t, n) {
            var i = a.createElement("div"),
                r = a.createElement("div");
            return n === !0 && (i.style.cssText = "position:absolute;z-index:9999", r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), r.className = "iScrollIndicator", "h" == e ? (n === !0 && (i.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", r.style.height = "100%"), i.className = "iScrollHorizontalScrollbar") : (n === !0 && (i.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", r.style.width = "100%"), i.className = "iScrollVerticalScrollbar"), i.style.cssText += ";overflow:hidden", t || (i.style.pointerEvents = "none"), i.appendChild(r), i }

        function c(e, t) { this.wrapper = "string" == typeof t.el ? a.querySelector(t.el) : t.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = e, this.options = { listenX: !0, listenY: !0, interactive: !1, resize: !0, defaultScrollbars: !1, shrink: !1, fade: !1, speedRatioX: 0, speedRatioY: 0 };
            for (var n in t) this.options[n] = t[n];
            if (this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (p.addEvent(this.indicator, "touchstart", this), p.addEvent(r, "touchend", this)), this.options.disablePointer || (p.addEvent(this.indicator, p.prefixPointerEvent("pointerdown"), this), p.addEvent(r, p.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (p.addEvent(this.indicator, "mousedown", this), p.addEvent(r, "mouseup", this))), this.options.fade) { this.wrapperStyle[p.style.transform] = this.scroller.translateZ;
                var i = p.style.transitionDuration;
                if (!i) return;
                this.wrapperStyle[i] = p.isBadAndroid ? "0.0001ms" : "0ms";
                var s = this;
                p.isBadAndroid && u(function() { "0.0001ms" === s.wrapperStyle[i] && (s.wrapperStyle[i] = "0s") }), this.wrapperStyle.opacity = "0" } }
        var u = r.requestAnimationFrame || r.webkitRequestAnimationFrame || r.mozRequestAnimationFrame || r.oRequestAnimationFrame || r.msRequestAnimationFrame || function(e) { r.setTimeout(e, 1e3 / 60) },
            p = function() {
                function e(e) {
                    return i !== !1 && ("" === i ? e : i + e.charAt(0).toUpperCase() + e.substr(1)) }
                var t = {},
                    n = a.createElement("div").style,
                    i = function() {
                        for (var e, t = ["t", "webkitT", "MozT", "msT", "OT"], i = 0, r = t.length; i < r; i++)
                            if (e = t[i] + "ransform", e in n) return t[i].substr(0, t[i].length - 1);
                        return !1 }();
                t.getTime = Date.now || function() {
                    return (new Date).getTime() }, t.extend = function(e, t) {
                    for (var n in t) e[n] = t[n] }, t.addEvent = function(e, t, n, i) { e.addEventListener(t, n, !!i) }, t.removeEvent = function(e, t, n, i) { e.removeEventListener(t, n, !!i) }, t.prefixPointerEvent = function(e) {
                    return r.MSPointerEvent ? "MSPointer" + e.charAt(7).toUpperCase() + e.substr(8) : e }, t.momentum = function(e, t, n, i, r, a) {
                    var o, l, c = e - t,
                        u = s.abs(c) / n;
                    return a = void 0 === a ? 6e-4 : a, o = e + u * u / (2 * a) * (c < 0 ? -1 : 1), l = u / a, o < i ? (o = r ? i - r / 2.5 * (u / 8) : i, c = s.abs(o - e), l = c / u) : o > 0 && (o = r ? r / 2.5 * (u / 8) : 0, c = s.abs(e) + o, l = c / u), { destination: s.round(o), duration: l } };
                var o = e("transform");
                return t.extend(t, { hasTransform: o !== !1, hasPerspective: e("perspective") in n, hasTouch: "ontouchstart" in r, hasPointer: !(!r.PointerEvent && !r.MSPointerEvent), hasTransition: e("transition") in n }), t.isBadAndroid = function() {
                    var e = r.navigator.appVersion;
                    if (/Android/.test(e) && !/Chrome\/\d/.test(e)) {
                        var t = e.match(/Safari\/(\d+.\d)/);
                        return !(t && "object" == typeof t && t.length >= 2) || parseFloat(t[1]) < 535.19 }
                    return !1 }(), t.extend(t.style = {}, { transform: o, transitionTimingFunction: e("transitionTimingFunction"), transitionDuration: e("transitionDuration"), transitionDelay: e("transitionDelay"), transformOrigin: e("transformOrigin") }), t.hasClass = function(e, t) {
                    var n = new RegExp("(^|\\s)" + t + "(\\s|$)");
                    return n.test(e.className) }, t.addClass = function(e, n) {
                    if (!t.hasClass(e, n)) {
                        var i = e.className.split(" ");
                        i.push(n), e.className = i.join(" ") } }, t.removeClass = function(e, n) {
                    if (t.hasClass(e, n)) {
                        var i = new RegExp("(^|\\s)" + n + "(\\s|$)", "g");
                        e.className = e.className.replace(i, " ") } }, t.offset = function(e) {
                    for (var t = -e.offsetLeft, n = -e.offsetTop; e = e.offsetParent;) t -= e.offsetLeft, n -= e.offsetTop;
                    return { left: t, top: n } }, t.preventDefaultException = function(e, t) {
                    for (var n in t)
                        if (t[n].test(e[n])) return !0;
                    return !1 }, t.extend(t.eventType = {}, { touchstart: 1, touchmove: 1, touchend: 1, mousedown: 2, mousemove: 2, mouseup: 2, pointerdown: 3, pointermove: 3, pointerup: 3, MSPointerDown: 3, MSPointerMove: 3, MSPointerUp: 3 }), t.extend(t.ease = {}, { quadratic: { style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", fn: function(e) {
                            return e * (2 - e) } }, circular: { style: "cubic-bezier(0.1, 0.57, 0.1, 1)", fn: function(e) {
                            return s.sqrt(1 - --e * e) } }, back: { style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)", fn: function(e) {
                            var t = 4;
                            return (e -= 1) * e * ((t + 1) * e + t) + 1 } }, bounce: { style: "", fn: function(e) {
                            return (e /= 1) < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375 } }, elastic: { style: "", fn: function(e) {
                            var t = .22,
                                n = .4;
                            return 0 === e ? 0 : 1 == e ? 1 : n * s.pow(2, -10 * e) * s.sin((e - t / 4) * (2 * s.PI) / t) + 1 } } }), t.tap = function(e, t) {
                    var n = a.createEvent("Event");
                    n.initEvent(t, !0, !0), n.pageX = e.pageX, n.pageY = e.pageY, e.target.dispatchEvent(n) }, t.click = function(e) {
                    var t, n = e.target; /(SELECT|INPUT|TEXTAREA)/i.test(n.tagName) || (t = a.createEvent(r.MouseEvent ? "MouseEvents" : "Event"), t.initEvent("click", !0, !0), t.view = e.view || r, t.detail = 1, t.screenX = n.screenX || 0, t.screenY = n.screenY || 0, t.clientX = n.clientX || 0, t.clientY = n.clientY || 0, t.ctrlKey = !!e.ctrlKey, t.altKey = !!e.altKey, t.shiftKey = !!e.shiftKey, t.metaKey = !!e.metaKey, t.button = 0, t.relatedTarget = null, t._constructed = !0, n.dispatchEvent(t)) }, t }();
        o.prototype = {
            version: "5.2.0",
            _init: function() { this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys() },
            destroy: function() { this._initEvents(!0), clearTimeout(this.resizeTimeout), this.resizeTimeout = null, this._execEvent("destroy") },
            _transitionEnd: function(e) { e.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd"))) },
            _start: function(e) {
                if (1 != p.eventType[e.type]) {
                    var t;
                    if (t = e.which ? e.button : e.button < 2 ? 0 : 4 == e.button ? 1 : 2, 0 !== t) return }
                if (this.enabled && (!this.initiated || p.eventType[e.type] === this.initiated)) {!this.options.preventDefault || p.isBadAndroid || p.preventDefaultException(e.target, this.options.preventDefaultException) || e.preventDefault();
                    var n, i = e.touches ? e.touches[0] : e;
                    this.initiated = p.eventType[e.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this.startTime = p.getTime(), this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, n = this.getComputedPosition(), this._translate(s.round(n.x), s.round(n.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = i.pageX, this.pointY = i.pageY, this._execEvent("beforeScrollStart") } },
            _move: function(e) {
                if (this.enabled && p.eventType[e.type] === this.initiated) { this.options.preventDefault && e.preventDefault();
                    var t, n, i, r, a = e.touches ? e.touches[0] : e,
                        o = a.pageX - this.pointX,
                        l = a.pageY - this.pointY,
                        c = p.getTime();
                    if (this.pointX = a.pageX, this.pointY = a.pageY, this.distX += o, this.distY += l, i = s.abs(this.distX), r = s.abs(this.distY), !(c - this.endTime > 300 && i < 10 && r < 10)) {
                        if (this.directionLocked || this.options.freeScroll || (i > r + this.options.directionLockThreshold ? this.directionLocked = "h" : r >= i + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" == this.directionLocked) {
                            if ("vertical" == this.options.eventPassthrough) e.preventDefault();
                            else if ("horizontal" == this.options.eventPassthrough) return void(this.initiated = !1);
                            l = 0 } else if ("v" == this.directionLocked) {
                            if ("horizontal" == this.options.eventPassthrough) e.preventDefault();
                            else if ("vertical" == this.options.eventPassthrough) return void(this.initiated = !1);
                            o = 0 }
                        o = this.hasHorizontalScroll ? o : 0, l = this.hasVerticalScroll ? l : 0, t = this.x + o, n = this.y + l, (t > 0 || t < this.maxScrollX) && (t = this.options.bounce ? this.x + o / 3 : t > 0 ? 0 : this.maxScrollX), (n > 0 || n < this.maxScrollY) && (n = this.options.bounce ? this.y + l / 3 : n > 0 ? 0 : this.maxScrollY), this.directionX = o > 0 ? -1 : o < 0 ? 1 : 0, this.directionY = l > 0 ? -1 : l < 0 ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(t, n), c - this.startTime > 300 && (this.startTime = c, this.startX = this.x, this.startY = this.y) } } },
            _end: function(e) {
                if (this.enabled && p.eventType[e.type] === this.initiated) { this.options.preventDefault && !p.preventDefaultException(e.target, this.options.preventDefaultException) && e.preventDefault();
                    var t, n, i = (e.changedTouches ? e.changedTouches[0] : e, p.getTime() - this.startTime),
                        r = s.round(this.x),
                        a = s.round(this.y),
                        o = s.abs(r - this.startX),
                        l = s.abs(a - this.startY),
                        c = 0,
                        u = "";
                    if (this.isInTransition = 0, this.initiated = 0, this.endTime = p.getTime(), !this.resetPosition(this.options.bounceTime)) {
                        if (this.scrollTo(r, a), !this.moved) return this.options.tap && p.tap(e, this.options.tap), this.options.click && p.click(e), void this._execEvent("scrollCancel");
                        if (this._events.flick && i < 200 && o < 100 && l < 100) return void this._execEvent("flick");
                        if (this.options.momentum && i < 300 && (t = this.hasHorizontalScroll ? p.momentum(this.x, this.startX, i, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: r, duration: 0 }, n = this.hasVerticalScroll ? p.momentum(this.y, this.startY, i, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: a, duration: 0 }, r = t.destination, a = n.destination, c = s.max(t.duration, n.duration), this.isInTransition = 1), this.options.snap) {
                            var d = this._nearestSnap(r, a);
                            this.currentPage = d, c = this.options.snapSpeed || s.max(s.max(s.min(s.abs(r - d.x), 1e3), s.min(s.abs(a - d.y), 1e3)), 300), r = d.x, a = d.y, this.directionX = 0, this.directionY = 0, u = this.options.bounceEasing }
                        return r != this.x || a != this.y ? ((r > 0 || r < this.maxScrollX || a > 0 || a < this.maxScrollY) && (u = p.ease.quadratic), void this.scrollTo(r, a, c, u)) : void this._execEvent("scrollEnd") } } },
            _resize: function() {
                var e = this;
                clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() { e.refresh() }, this.options.resizePolling) },
            resetPosition: function(e) {
                var t = this.x,
                    n = this.y;
                return e = e || 0, !this.hasHorizontalScroll || this.x > 0 ? t = 0 : this.x < this.maxScrollX && (t = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? n = 0 : this.y < this.maxScrollY && (n = this.maxScrollY), (t != this.x || n != this.y) && (this.scrollTo(t, n, e, this.options.bounceEasing), !0) },
            disable: function() { this.enabled = !1 },
            enable: function() { this.enabled = !0 },
            refresh: function() { this.wrapper.offsetHeight;
                this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = p.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition() },
            on: function(e, t) { this._events[e] || (this._events[e] = []), this._events[e].push(t) },
            off: function(e, t) {
                if (this._events[e]) {
                    var n = this._events[e].indexOf(t);
                    n > -1 && this._events[e].splice(n, 1) } },
            _execEvent: function(e) {
                if (this._events[e]) {
                    var t = 0,
                        n = this._events[e].length;
                    if (n)
                        for (; t < n; t++) this._events[e][t].apply(this, [].slice.call(arguments, 1)) } },
            scrollBy: function(e, t, n, i) { e = this.x + e, t = this.y + t, n = n || 0, this.scrollTo(e, t, n, i) },
            scrollTo: function(e, t, n, i) { i = i || p.ease.circular, this.isInTransition = this.options.useTransition && n > 0;
                var r = this.options.useTransition && i.style;!n || r ? (r && (this._transitionTimingFunction(i.style), this._transitionTime(n)), this._translate(e, t)) : this._animate(e, t, n, i.fn) },
            scrollToElement: function(e, t, n, i, r) {
                if (e = e.nodeType ? e : this.scroller.querySelector(e)) {
                    var a = p.offset(e);
                    a.left -= this.wrapperOffset.left, a.top -= this.wrapperOffset.top, n === !0 && (n = s.round(e.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), i === !0 && (i = s.round(e.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
                        a.left -= n || 0, a.top -= i || 0, a.left = a.left > 0 ? 0 : a.left < this.maxScrollX ? this.maxScrollX : a.left, a.top = a.top > 0 ? 0 : a.top < this.maxScrollY ? this.maxScrollY : a.top, t = void 0 === t || null === t || "auto" === t ? s.max(s.abs(this.x - a.left), s.abs(this.y - a.top)) : t, this.scrollTo(a.left, a.top, t, r)
                }
            },
            _transitionTime: function(e) {
                if (this.options.useTransition) { e = e || 0;
                    var t = p.style.transitionDuration;
                    if (t) {
                        if (this.scrollerStyle[t] = e + "ms", !e && p.isBadAndroid) { this.scrollerStyle[t] = "0.0001ms";
                            var n = this;
                            u(function() { "0.0001ms" === n.scrollerStyle[t] && (n.scrollerStyle[t] = "0s") }) }
                        if (this.indicators)
                            for (var i = this.indicators.length; i--;) this.indicators[i].transitionTime(e) } } },
            _transitionTimingFunction: function(e) {
                if (this.scrollerStyle[p.style.transitionTimingFunction] = e, this.indicators)
                    for (var t = this.indicators.length; t--;) this.indicators[t].transitionTimingFunction(e) },
            _translate: function(e, t) {
                if (this.options.useTransform ? this.scrollerStyle[p.style.transform] = "translate(" + e + "px," + t + "px)" + this.translateZ : (e = s.round(e), t = s.round(t), this.scrollerStyle.left = e + "px", this.scrollerStyle.top = t + "px"), this.x = e, this.y = t, this.indicators)
                    for (var n = this.indicators.length; n--;) this.indicators[n].updatePosition() },
            _initEvents: function(e) {
                var t = e ? p.removeEvent : p.addEvent,
                    n = this.options.bindToWrapper ? this.wrapper : r;
                t(r, "orientationchange", this), t(r, "resize", this), this.options.click && t(this.wrapper, "click", this, !0), this.options.disableMouse || (t(this.wrapper, "mousedown", this), t(n, "mousemove", this), t(n, "mousecancel", this), t(n, "mouseup", this)), p.hasPointer && !this.options.disablePointer && (t(this.wrapper, p.prefixPointerEvent("pointerdown"), this), t(n, p.prefixPointerEvent("pointermove"), this), t(n, p.prefixPointerEvent("pointercancel"), this), t(n, p.prefixPointerEvent("pointerup"), this)), p.hasTouch && !this.options.disableTouch && (t(this.wrapper, "touchstart", this), t(n, "touchmove", this), t(n, "touchcancel", this), t(n, "touchend", this)), t(this.scroller, "transitionend", this), t(this.scroller, "webkitTransitionEnd", this), t(this.scroller, "oTransitionEnd", this), t(this.scroller, "MSTransitionEnd", this) },
            getComputedPosition: function() {
                var e, t, n = r.getComputedStyle(this.scroller, null);
                return this.options.useTransform ? (n = n[p.style.transform].split(")")[0].split(", "), e = +(n[12] || n[4]), t = +(n[13] || n[5])) : (e = +n.left.replace(/[^-\d.]/g, ""), t = +n.top.replace(/[^-\d.]/g, "")), { x: e, y: t } },
            _initIndicators: function() {
                function e(e) {
                    if (a.indicators)
                        for (var t = a.indicators.length; t--;) e.call(a.indicators[t]) }
                var t, n = this.options.interactiveScrollbars,
                    i = "string" != typeof this.options.scrollbars,
                    r = [],
                    a = this;
                this.indicators = [], this.options.scrollbars && (this.options.scrollY && (t = { el: l("v", n, this.options.scrollbars), interactive: n, defaultScrollbars: !0, customStyle: i, resize: this.options.resizeScrollbars, shrink: this.options.shrinkScrollbars, fade: this.options.fadeScrollbars, listenX: !1 }, this.wrapper.appendChild(t.el), r.push(t)), this.options.scrollX && (t = { el: l("h", n, this.options.scrollbars), interactive: n, defaultScrollbars: !0, customStyle: i, resize: this.options.resizeScrollbars, shrink: this.options.shrinkScrollbars, fade: this.options.fadeScrollbars, listenY: !1 }, this.wrapper.appendChild(t.el), r.push(t))), this.options.indicators && (r = r.concat(this.options.indicators));
                for (var s = r.length; s--;) this.indicators.push(new c(this, r[s]));
                this.options.fadeScrollbars && (this.on("scrollEnd", function() { e(function() { this.fade() }) }), this.on("scrollCancel", function() { e(function() { this.fade() }) }), this.on("scrollStart", function() { e(function() { this.fade(1) }) }), this.on("beforeScrollStart", function() { e(function() { this.fade(1, !0) }) })), this.on("refresh", function() { e(function() { this.refresh() }) }), this.on("destroy", function() { e(function() { this.destroy() }), delete this.indicators }) },
            _initWheel: function() { p.addEvent(this.wrapper, "wheel", this), p.addEvent(this.wrapper, "mousewheel", this), p.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function() { clearTimeout(this.wheelTimeout), this.wheelTimeout = null, p.removeEvent(this.wrapper, "wheel", this), p.removeEvent(this.wrapper, "mousewheel", this), p.removeEvent(this.wrapper, "DOMMouseScroll", this) }) },
            _wheel: function(e) {
                if (this.enabled) { e.preventDefault();
                    var t, n, i, r, a = this;
                    if (void 0 === this.wheelTimeout && a._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function() { a.options.snap || a._execEvent("scrollEnd"), a.wheelTimeout = void 0 }, 400), "deltaX" in e) 1 === e.deltaMode ? (t = -e.deltaX * this.options.mouseWheelSpeed, n = -e.deltaY * this.options.mouseWheelSpeed) : (t = -e.deltaX, n = -e.deltaY);
                    else if ("wheelDeltaX" in e) t = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed, n = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                    else if ("wheelDelta" in e) t = n = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
                    else {
                        if (!("detail" in e)) return;
                        t = n = -e.detail / 3 * this.options.mouseWheelSpeed }
                    if (t *= this.options.invertWheelDirection, n *= this.options.invertWheelDirection, this.hasVerticalScroll || (t = n, n = 0), this.options.snap) return i = this.currentPage.pageX, r = this.currentPage.pageY, t > 0 ? i-- : t < 0 && i++, n > 0 ? r-- : n < 0 && r++, void this.goToPage(i, r);
                    i = this.x + s.round(this.hasHorizontalScroll ? t : 0), r = this.y + s.round(this.hasVerticalScroll ? n : 0), this.directionX = t > 0 ? -1 : t < 0 ? 1 : 0, this.directionY = n > 0 ? -1 : n < 0 ? 1 : 0, i > 0 ? i = 0 : i < this.maxScrollX && (i = this.maxScrollX), r > 0 ? r = 0 : r < this.maxScrollY && (r = this.maxScrollY), this.scrollTo(i, r, 0) } },
            _initSnap: function() { this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function() {
                    var e, t, n, i, r, a, o = 0,
                        l = 0,
                        c = 0,
                        u = this.options.snapStepX || this.wrapperWidth,
                        p = this.options.snapStepY || this.wrapperHeight;
                    if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                        if (this.options.snap === !0)
                            for (n = s.round(u / 2), i = s.round(p / 2); c > -this.scrollerWidth;) {
                                for (this.pages[o] = [], e = 0, r = 0; r > -this.scrollerHeight;) this.pages[o][e] = { x: s.max(c, this.maxScrollX), y: s.max(r, this.maxScrollY), width: u, height: p, cx: c - n, cy: r - i }, r -= p, e++;
                                c -= u, o++ } else
                                for (a = this.options.snap, e = a.length, t = -1; o < e; o++)(0 === o || a[o].offsetLeft <= a[o - 1].offsetLeft) && (l = 0, t++), this.pages[l] || (this.pages[l] = []), c = s.max(-a[o].offsetLeft, this.maxScrollX), r = s.max(-a[o].offsetTop, this.maxScrollY), n = c - s.round(a[o].offsetWidth / 2), i = r - s.round(a[o].offsetHeight / 2), this.pages[l][t] = { x: c, y: r, width: a[o].offsetWidth, height: a[o].offsetHeight, cx: n, cy: i }, c > this.maxScrollX && l++;
                        this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = s.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = s.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold)) } }), this.on("flick", function() {
                    var e = this.options.snapSpeed || s.max(s.max(s.min(s.abs(this.x - this.startX), 1e3), s.min(s.abs(this.y - this.startY), 1e3)), 300);
                    this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, e) }) },
            _nearestSnap: function(e, t) {
                if (!this.pages.length) return { x: 0, y: 0, pageX: 0, pageY: 0 };
                var n = 0,
                    i = this.pages.length,
                    r = 0;
                if (s.abs(e - this.absStartX) < this.snapThresholdX && s.abs(t - this.absStartY) < this.snapThresholdY) return this.currentPage;
                for (e > 0 ? e = 0 : e < this.maxScrollX && (e = this.maxScrollX), t > 0 ? t = 0 : t < this.maxScrollY && (t = this.maxScrollY); n < i; n++)
                    if (e >= this.pages[n][0].cx) { e = this.pages[n][0].x;
                        break }
                for (i = this.pages[n].length; r < i; r++)
                    if (t >= this.pages[0][r].cy) { t = this.pages[0][r].y;
                        break }
                return n == this.currentPage.pageX && (n += this.directionX, n < 0 ? n = 0 : n >= this.pages.length && (n = this.pages.length - 1), e = this.pages[n][0].x), r == this.currentPage.pageY && (r += this.directionY, r < 0 ? r = 0 : r >= this.pages[0].length && (r = this.pages[0].length - 1), t = this.pages[0][r].y), { x: e, y: t, pageX: n, pageY: r } },
            goToPage: function(e, t, n, i) { i = i || this.options.bounceEasing, e >= this.pages.length ? e = this.pages.length - 1 : e < 0 && (e = 0), t >= this.pages[e].length ? t = this.pages[e].length - 1 : t < 0 && (t = 0);
                var r = this.pages[e][t].x,
                    a = this.pages[e][t].y;
                n = void 0 === n ? this.options.snapSpeed || s.max(s.max(s.min(s.abs(r - this.x), 1e3), s.min(s.abs(a - this.y), 1e3)), 300) : n, this.currentPage = { x: r, y: a, pageX: e, pageY: t }, this.scrollTo(r, a, n, i) },
            next: function(e, t) {
                var n = this.currentPage.pageX,
                    i = this.currentPage.pageY;
                n++, n >= this.pages.length && this.hasVerticalScroll && (n = 0, i++), this.goToPage(n, i, e, t) },
            prev: function(e, t) {
                var n = this.currentPage.pageX,
                    i = this.currentPage.pageY;
                n--, n < 0 && this.hasVerticalScroll && (n = 0, i--), this.goToPage(n, i, e, t) },
            _initKeys: function(e) {
                var t, n = { pageUp: 33, pageDown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40 };
                if ("object" == typeof this.options.keyBindings)
                    for (t in this.options.keyBindings) "string" == typeof this.options.keyBindings[t] && (this.options.keyBindings[t] = this.options.keyBindings[t].toUpperCase().charCodeAt(0));
                else this.options.keyBindings = {};
                for (t in n) this.options.keyBindings[t] = this.options.keyBindings[t] || n[t];
                p.addEvent(r, "keydown", this), this.on("destroy", function() { p.removeEvent(r, "keydown", this) }) },
            _key: function(e) {
                if (this.enabled) {
                    var t, n = this.options.snap,
                        i = n ? this.currentPage.pageX : this.x,
                        r = n ? this.currentPage.pageY : this.y,
                        a = p.getTime(),
                        o = this.keyTime || 0,
                        l = .25;
                    switch (this.options.useTransition && this.isInTransition && (t = this.getComputedPosition(), this._translate(s.round(t.x), s.round(t.y)), this.isInTransition = !1), this.keyAcceleration = a - o < 200 ? s.min(this.keyAcceleration + l, 50) : 0, e.keyCode) {
                        case this.options.keyBindings.pageUp:
                            this.hasHorizontalScroll && !this.hasVerticalScroll ? i += n ? 1 : this.wrapperWidth : r += n ? 1 : this.wrapperHeight;
                            break;
                        case this.options.keyBindings.pageDown:
                            this.hasHorizontalScroll && !this.hasVerticalScroll ? i -= n ? 1 : this.wrapperWidth : r -= n ? 1 : this.wrapperHeight;
                            break;
                        case this.options.keyBindings.end:
                            i = n ? this.pages.length - 1 : this.maxScrollX, r = n ? this.pages[0].length - 1 : this.maxScrollY;
                            break;
                        case this.options.keyBindings.home:
                            i = 0, r = 0;
                            break;
                        case this.options.keyBindings.left:
                            i += n ? -1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.up:
                            r += n ? 1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.right:
                            i -= n ? -1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.down:
                            r -= n ? 1 : 5 + this.keyAcceleration >> 0;
                            break;
                        default:
                            return }
                    if (n) return void this.goToPage(i, r);
                    i > 0 ? (i = 0, this.keyAcceleration = 0) : i < this.maxScrollX && (i = this.maxScrollX, this.keyAcceleration = 0), r > 0 ? (r = 0, this.keyAcceleration = 0) : r < this.maxScrollY && (r = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(i, r, 0), this.keyTime = a } },
            _animate: function(e, t, n, i) {
                function r() {
                    var d, h, f, m = p.getTime();
                    return m >= c ? (a.isAnimating = !1, a._translate(e, t), void(a.resetPosition(a.options.bounceTime) || a._execEvent("scrollEnd"))) : (m = (m - l) / n, f = i(m), d = (e - s) * f + s, h = (t - o) * f + o, a._translate(d, h), void(a.isAnimating && u(r))) }
                var a = this,
                    s = this.x,
                    o = this.y,
                    l = p.getTime(),
                    c = l + n;
                this.isAnimating = !0, r() },
            handleEvent: function(e) {
                switch (e.type) {
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                    case "mousedown":
                        this._start(e);
                        break;
                    case "touchmove":
                    case "pointermove":
                    case "MSPointerMove":
                    case "mousemove":
                        this._move(e);
                        break;
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseup":
                    case "touchcancel":
                    case "pointercancel":
                    case "MSPointerCancel":
                    case "mousecancel":
                        this._end(e);
                        break;
                    case "orientationchange":
                    case "resize":
                        this._resize();
                        break;
                    case "transitionend":
                    case "webkitTransitionEnd":
                    case "oTransitionEnd":
                    case "MSTransitionEnd":
                        this._transitionEnd(e);
                        break;
                    case "wheel":
                    case "DOMMouseScroll":
                    case "mousewheel":
                        this._wheel(e);
                        break;
                    case "keydown":
                        this._key(e);
                        break;
                    case "click":
                        this.enabled && !e._constructed && (e.preventDefault(), e.stopPropagation()) } }
        }, c.prototype = { handleEvent: function(e) {
                switch (e.type) {
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                    case "mousedown":
                        this._start(e);
                        break;
                    case "touchmove":
                    case "pointermove":
                    case "MSPointerMove":
                    case "mousemove":
                        this._move(e);
                        break;
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseup":
                    case "touchcancel":
                    case "pointercancel":
                    case "MSPointerCancel":
                    case "mousecancel":
                        this._end(e) } }, destroy: function() { this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), this.fadeTimeout = null), this.options.interactive && (p.removeEvent(this.indicator, "touchstart", this), p.removeEvent(this.indicator, p.prefixPointerEvent("pointerdown"), this), p.removeEvent(this.indicator, "mousedown", this), p.removeEvent(r, "touchmove", this), p.removeEvent(r, p.prefixPointerEvent("pointermove"), this), p.removeEvent(r, "mousemove", this), p.removeEvent(r, "touchend", this), p.removeEvent(r, p.prefixPointerEvent("pointerup"), this), p.removeEvent(r, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper) }, _start: function(e) {
                var t = e.touches ? e.touches[0] : e;
                e.preventDefault(), e.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = t.pageX, this.lastPointY = t.pageY, this.startTime = p.getTime(), this.options.disableTouch || p.addEvent(r, "touchmove", this), this.options.disablePointer || p.addEvent(r, p.prefixPointerEvent("pointermove"), this), this.options.disableMouse || p.addEvent(r, "mousemove", this), this.scroller._execEvent("beforeScrollStart") }, _move: function(e) {
                var t, n, i, r, a = e.touches ? e.touches[0] : e;
                p.getTime();
                this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, t = a.pageX - this.lastPointX, this.lastPointX = a.pageX, n = a.pageY - this.lastPointY, this.lastPointY = a.pageY, i = this.x + t, r = this.y + n, this._pos(i, r), e.preventDefault(), e.stopPropagation() }, _end: function(e) {
                if (this.initiated) {
                    if (this.initiated = !1, e.preventDefault(), e.stopPropagation(), p.removeEvent(r, "touchmove", this), p.removeEvent(r, p.prefixPointerEvent("pointermove"), this), p.removeEvent(r, "mousemove", this), this.scroller.options.snap) {
                        var t = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                            n = this.options.snapSpeed || s.max(s.max(s.min(s.abs(this.scroller.x - t.x), 1e3), s.min(s.abs(this.scroller.y - t.y), 1e3)), 300);
                        this.scroller.x == t.x && this.scroller.y == t.y || (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = t, this.scroller.scrollTo(t.x, t.y, n, this.scroller.options.bounceEasing)) }
                    this.moved && this.scroller._execEvent("scrollEnd") } }, transitionTime: function(e) { e = e || 0;
                var t = p.style.transitionDuration;
                if (t && (this.indicatorStyle[t] = e + "ms", !e && p.isBadAndroid)) { this.indicatorStyle[t] = "0.0001ms";
                    var n = this;
                    u(function() { "0.0001ms" === n.indicatorStyle[t] && (n.indicatorStyle[t] = "0s") }) } }, transitionTimingFunction: function(e) { this.indicatorStyle[p.style.transitionTimingFunction] = e }, refresh: function() { this.transitionTime(), this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (p.addClass(this.wrapper, "iScrollBothScrollbars"), p.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (p.removeClass(this.wrapper, "iScrollBothScrollbars"), p.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));
                this.wrapper.offsetHeight;
                this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = s.max(s.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = s.max(s.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition() }, updatePosition: function() {
                var e = this.options.listenX && s.round(this.sizeRatioX * this.scroller.x) || 0,
                    t = this.options.listenY && s.round(this.sizeRatioY * this.scroller.y) || 0;
                this.options.ignoreBoundaries || (e < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = s.max(this.indicatorWidth + e, 8), this.indicatorStyle.width = this.width + "px"), e = this.minBoundaryX) : e > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = s.max(this.indicatorWidth - (e - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", e = this.maxPosX + this.indicatorWidth - this.width) : e = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), t < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = s.max(this.indicatorHeight + 3 * t, 8), this.indicatorStyle.height = this.height + "px"), t = this.minBoundaryY) : t > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = s.max(this.indicatorHeight - 3 * (t - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", t = this.maxPosY + this.indicatorHeight - this.height) : t = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = e, this.y = t, this.scroller.options.useTransform ? this.indicatorStyle[p.style.transform] = "translate(" + e + "px," + t + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = e + "px", this.indicatorStyle.top = t + "px") }, _pos: function(e, t) { e < 0 ? e = 0 : e > this.maxPosX && (e = this.maxPosX), t < 0 ? t = 0 : t > this.maxPosY && (t = this.maxPosY), e = this.options.listenX ? s.round(e / this.sizeRatioX) : this.scroller.x, t = this.options.listenY ? s.round(t / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(e, t) }, fade: function(e, t) {
                if (!t || this.visible) { clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
                    var n = e ? 250 : 500,
                        i = e ? 0 : 300;
                    e = e ? "1" : "0", this.wrapperStyle[p.style.transitionDuration] = n + "ms", this.fadeTimeout = setTimeout(function(e) { this.wrapperStyle.opacity = e, this.visible = +e }.bind(this, e), i) } } }, o.utils = p, "undefined" != typeof e && e.exports ? e.exports = o : (i = function() {
            return o }.call(t, n, t, e), !(void 0 !== i && (e.exports = i)))
    }(window, document, Math)
}, function(e, t, n) {
    var i, r;
    ! function(t, n) { "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e) } : n(t) }("undefined" != typeof window ? window : this, function(a, s) {
        function o(e) {
            var t = !!e && "length" in e && e.length,
                n = ye.type(e);
            return "function" !== n && !ye.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e) }

        function l(e, t, n) {
            if (ye.isFunction(t)) return ye.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n });
            if (t.nodeType) return ye.grep(e, function(e) {
                return e === t !== n });
            if ("string" == typeof t) {
                if (Me.test(t)) return ye.filter(t, e, n);
                t = ye.filter(t, e) }
            return ye.grep(e, function(e) {
                return ye.inArray(e, t) > -1 !== n }) }

        function c(e, t) { do e = e[t]; while (e && 1 !== e.nodeType);
            return e }

        function u(e) {
            var t = {};
            return ye.each(e.match(He) || [], function(e, n) { t[n] = !0 }), t }

        function p() { le.addEventListener ? (le.removeEventListener("DOMContentLoaded", d), a.removeEventListener("load", d)) : (le.detachEvent("onreadystatechange", d), a.detachEvent("onload", d)) }

        function d() {
            (le.addEventListener || "load" === a.event.type || "complete" === le.readyState) && (p(), ye.ready()) }

        function h(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var i = "data-" + t.replace(Xe, "-$1").toLowerCase();
                if (n = e.getAttribute(i), "string" == typeof n) {
                    try { n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : je.test(n) ? ye.parseJSON(n) : n) } catch (e) {}
                    ye.data(e, t, n) } else n = void 0 }
            return n }

        function f(e) {
            var t;
            for (t in e)
                if (("data" !== t || !ye.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0 }

        function m(e, t, n, i) {
            if (Oe(e)) {
                var r, a, s = ye.expando,
                    o = e.nodeType,
                    l = o ? ye.cache : e,
                    c = o ? e[s] : e[s] && s;
                if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof t) return c || (c = o ? e[s] = oe.pop() || ye.guid++ : s), l[c] || (l[c] = o ? {} : { toJSON: ye.noop }), "object" != typeof t && "function" != typeof t || (i ? l[c] = ye.extend(l[c], t) : l[c].data = ye.extend(l[c].data, t)), a = l[c], i || (a.data || (a.data = {}), a = a.data), void 0 !== n && (a[ye.camelCase(t)] = n), "string" == typeof t ? (r = a[t], null == r && (r = a[ye.camelCase(t)])) : r = a, r } }

        function g(e, t, n) {
            if (Oe(e)) {
                var i, r, a = e.nodeType,
                    s = a ? ye.cache : e,
                    o = a ? e[ye.expando] : ye.expando;
                if (s[o]) {
                    if (t && (i = n ? s[o] : s[o].data)) { ye.isArray(t) ? t = t.concat(ye.map(t, ye.camelCase)) : t in i ? t = [t] : (t = ye.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                        for (; r--;) delete i[t[r]];
                        if (n ? !f(i) : !ye.isEmptyObject(i)) return }(n || (delete s[o].data, f(s[o]))) && (a ? ye.cleanData([e], !0) : ge.deleteExpando || s != s.window ? delete s[o] : s[o] = void 0) } } }

        function v(e, t, n, i) {
            var r, a = 1,
                s = 20,
                o = i ? function() {
                    return i.cur() } : function() {
                    return ye.css(e, t, "") },
                l = o(),
                c = n && n[3] || (ye.cssNumber[t] ? "" : "px"),
                u = (ye.cssNumber[t] || "px" !== c && +l) && We.exec(ye.css(e, t));
            if (u && u[3] !== c) { c = c || u[3], n = n || [], u = +l || 1;
                do a = a || ".5", u /= a, ye.style(e, t, u + c); while (a !== (a = o() / l) && 1 !== a && --s) }
            return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r }

        function y(e) {
            var t = Ue.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n }

        function w(e, t) {
            var n, i, r = 0,
                a = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
            if (!a)
                for (a = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || ye.nodeName(i, t) ? a.push(i) : ye.merge(a, w(i, t));
            return void 0 === t || t && ye.nodeName(e, t) ? ye.merge([e], a) : a }

        function x(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) ye._data(n, "globalEval", !t || ye._data(t[i], "globalEval")) }

        function b(e) { Fe.test(e.type) && (e.defaultChecked = e.checked) }

        function T(e, t, n, i, r) {
            for (var a, s, o, l, c, u, p, d = e.length, h = y(t), f = [], m = 0; d > m; m++)
                if (s = e[m], s || 0 === s)
                    if ("object" === ye.type(s)) ye.merge(f, s.nodeType ? [s] : s);
                    else if (Ze.test(s)) {
                for (l = l || h.appendChild(t.createElement("div")), c = (Ge.exec(s) || ["", ""])[1].toLowerCase(), p = Ke[c] || Ke._default, l.innerHTML = p[1] + ye.htmlPrefilter(s) + p[2], a = p[0]; a--;) l = l.lastChild;
                if (!ge.leadingWhitespace && $e.test(s) && f.push(t.createTextNode($e.exec(s)[0])), !ge.tbody)
                    for (s = "table" !== c || Je.test(s) ? "<table>" !== p[1] || Je.test(s) ? 0 : l : l.firstChild, a = s && s.childNodes.length; a--;) ye.nodeName(u = s.childNodes[a], "tbody") && !u.childNodes.length && s.removeChild(u);
                for (ye.merge(f, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
                l = h.lastChild } else f.push(t.createTextNode(s));
            for (l && h.removeChild(l), ge.appendChecked || ye.grep(w(f, "input"), b), m = 0; s = f[m++];)
                if (i && ye.inArray(s, i) > -1) r && r.push(s);
                else if (o = ye.contains(s.ownerDocument, s), l = w(h.appendChild(s), "script"), o && x(l), n)
                for (a = 0; s = l[a++];) Ve.test(s.type || "") && n.push(s);
            return l = null, h }

        function S() {
            return !0 }

        function C() {
            return !1 }

        function E() {
            try {
                return le.activeElement } catch (e) {} }

        function k(e, t, n, i, r, a) {
            var s, o;
            if ("object" == typeof t) { "string" != typeof n && (i = i || n, n = void 0);
                for (o in t) k(e, o, n, i, t[o], a);
                return e }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = C;
            else if (!r) return e;
            return 1 === a && (s = r, r = function(e) {
                return ye().off(e), s.apply(this, arguments) }, r.guid = s.guid || (s.guid = ye.guid++)), e.each(function() { ye.event.add(this, t, r, i, n) }) }

        function P(e, t) {
            return ye.nodeName(e, "table") && ye.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e }

        function M(e) {
            return e.type = (null !== ye.find.attr(e, "type")) + "/" + e.type, e }

        function N(e) {
            var t = ct.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e }

        function D(e, t) {
            if (1 === t.nodeType && ye.hasData(e)) {
                var n, i, r, a = ye._data(e),
                    s = ye._data(t, a),
                    o = a.events;
                if (o) { delete s.handle, s.events = {};
                    for (n in o)
                        for (i = 0, r = o[n].length; r > i; i++) ye.event.add(t, n, o[n][i]) }
                s.data && (s.data = ye.extend({}, s.data)) } }

        function z(e, t) {
            var n, i, r;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !ge.noCloneEvent && t[ye.expando]) { r = ye._data(t);
                    for (i in r.events) ye.removeEvent(t, i, r.handle);
                    t.removeAttribute(ye.expando) } "script" === n && t.text !== e.text ? (M(t).text = e.text, N(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ge.html5Clone && e.innerHTML && !ye.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Fe.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue) } }

        function A(e, t, n, i) { t = ue.apply([], t);
            var r, a, s, o, l, c, u = 0,
                p = e.length,
                d = p - 1,
                h = t[0],
                f = ye.isFunction(h);
            if (f || p > 1 && "string" == typeof h && !ge.checkClone && lt.test(h)) return e.each(function(r) {
                var a = e.eq(r);
                f && (t[0] = h.call(this, r, a.html())), A(a, t, n, i) });
            if (p && (c = T(t, e[0].ownerDocument, !1, e, i), r = c.firstChild, 1 === c.childNodes.length && (c = r), r || i)) {
                for (o = ye.map(w(c, "script"), M), s = o.length; p > u; u++) a = c, u !== d && (a = ye.clone(a, !0, !0), s && ye.merge(o, w(a, "script"))), n.call(e[u], a, u);
                if (s)
                    for (l = o[o.length - 1].ownerDocument, ye.map(o, N), u = 0; s > u; u++) a = o[u], Ve.test(a.type || "") && !ye._data(a, "globalEval") && ye.contains(l, a) && (a.src ? ye._evalUrl && ye._evalUrl(a.src) : ye.globalEval((a.text || a.textContent || a.innerHTML || "").replace(ut, "")));
                c = r = null }
            return e }

        function L(e, t, n) {
            for (var i, r = t ? ye.filter(t, e) : e, a = 0; null != (i = r[a]); a++) n || 1 !== i.nodeType || ye.cleanData(w(i)), i.parentNode && (n && ye.contains(i.ownerDocument, i) && x(w(i, "script")), i.parentNode.removeChild(i));
            return e }

        function H(e, t) {
            var n = ye(t.createElement(e)).appendTo(t.body),
                i = ye.css(n[0], "display");
            return n.detach(), i }

        function B(e) {
            var t = le,
                n = ft[e];
            return n || (n = H(e, t), "none" !== n && n || (ht = (ht || ye("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (ht[0].contentWindow || ht[0].contentDocument).document, t.write(), t.close(), n = H(e, t), ht.detach()), ft[e] = n), n }

        function I(e, t) {
            return { get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments) } } }

        function O(e) {
            if (e in Nt) return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Mt.length; n--;)
                if (e = Mt[n] + t, e in Nt) return e }

        function j(e, t) {
            for (var n, i, r, a = [], s = 0, o = e.length; o > s; s++) i = e[s], i.style && (a[s] = ye._data(i, "olddisplay"), n = i.style.display, t ? (a[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Re(i) && (a[s] = ye._data(i, "olddisplay", B(i.nodeName)))) : (r = Re(i), (n && "none" !== n || !r) && ye._data(i, "olddisplay", r ? n : ye.css(i, "display"))));
            for (s = 0; o > s; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? a[s] || "" : "none"));
            return e }

        function X(e, t, n) {
            var i = Et.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t }

        function _(e, t, n, i, r) {
            for (var a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > a; a += 2) "margin" === n && (s += ye.css(e, n + Ye[a], !0, r)), i ? ("content" === n && (s -= ye.css(e, "padding" + Ye[a], !0, r)), "margin" !== n && (s -= ye.css(e, "border" + Ye[a] + "Width", !0, r))) : (s += ye.css(e, "padding" + Ye[a], !0, r), "padding" !== n && (s += ye.css(e, "border" + Ye[a] + "Width", !0, r)));
            return s }

        function W(e, t, n) {
            var i = !0,
                r = "width" === t ? e.offsetWidth : e.offsetHeight,
                a = wt(e),
                s = ge.boxSizing && "border-box" === ye.css(e, "boxSizing", !1, a);
            if (0 >= r || null == r) {
                if (r = xt(e, t, a), (0 > r || null == r) && (r = e.style[t]), gt.test(r)) return r;
                i = s && (ge.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0 }
            return r + _(e, t, n || (s ? "border" : "content"), i, a) + "px" }

        function Y(e, t, n, i, r) {
            return new Y.prototype.init(e, t, n, i, r) }

        function R() {
            return a.setTimeout(function() { Dt = void 0 }), Dt = ye.now() }

        function q(e, t) {
            var n, i = { height: e },
                r = 0;
            for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Ye[r], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i }

        function F(e, t, n) {
            for (var i, r = ($.tweeners[t] || []).concat($.tweeners["*"]), a = 0, s = r.length; s > a; a++)
                if (i = r[a].call(n, t, e)) return i }

        function G(e, t, n) {
            var i, r, a, s, o, l, c, u, p = this,
                d = {},
                h = e.style,
                f = e.nodeType && Re(e),
                m = ye._data(e, "fxshow");
            n.queue || (o = ye._queueHooks(e, "fx"), null == o.unqueued && (o.unqueued = 0, l = o.empty.fire, o.empty.fire = function() { o.unqueued || l() }), o.unqueued++, p.always(function() { p.always(function() { o.unqueued--, ye.queue(e, "fx").length || o.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = ye.css(e, "display"), u = "none" === c ? ye._data(e, "olddisplay") || B(e.nodeName) : c, "inline" === u && "none" === ye.css(e, "float") && (ge.inlineBlockNeedsLayout && "inline" !== B(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", ge.shrinkWrapBlocks() || p.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] }));
            for (i in t)
                if (r = t[i], At.exec(r)) {
                    if (delete t[i], a = a || "toggle" === r, r === (f ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i]) continue;
                        f = !0 }
                    d[i] = m && m[i] || ye.style(e, i) } else c = void 0;
            if (ye.isEmptyObject(d)) "inline" === ("none" === c ? B(e.nodeName) : c) && (h.display = c);
            else { m ? "hidden" in m && (f = m.hidden) : m = ye._data(e, "fxshow", {}), a && (m.hidden = !f), f ? ye(e).show() : p.done(function() { ye(e).hide() }), p.done(function() {
                    var t;
                    ye._removeData(e, "fxshow");
                    for (t in d) ye.style(e, t, d[t]) });
                for (i in d) s = F(f ? m[i] : 0, i, p), i in m || (m[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0)) } }

        function V(e, t) {
            var n, i, r, a, s;
            for (n in e)
                if (i = ye.camelCase(n), r = t[i], a = e[n], ye.isArray(a) && (r = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), s = ye.cssHooks[i], s && "expand" in s) { a = s.expand(a), delete e[i];
                    for (n in a) n in e || (e[n] = a[n], t[n] = r) } else t[i] = r }

        function $(e, t, n) {
            var i, r, a = 0,
                s = $.prefilters.length,
                o = ye.Deferred().always(function() { delete l.elem }),
                l = function() {
                    if (r) return !1;
                    for (var t = Dt || R(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, a = 1 - i, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(a);
                    return o.notifyWith(e, [c, a, n]), 1 > a && l ? n : (o.resolveWith(e, [c]), !1) },
                c = o.promise({ elem: e, props: ye.extend({}, t), opts: ye.extend(!0, { specialEasing: {}, easing: ye.easing._default }, n), originalProperties: t, originalOptions: n, startTime: Dt || R(), duration: n.duration, tweens: [], createTween: function(t, n) {
                        var i = ye.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(i), i }, stop: function(t) {
                        var n = 0,
                            i = t ? c.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i > n; n++) c.tweens[n].run(1);
                        return t ? (o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c, t])) : o.rejectWith(e, [c, t]), this } }),
                u = c.props;
            for (V(u, c.opts.specialEasing); s > a; a++)
                if (i = $.prefilters[a].call(c, e, u, c.opts)) return ye.isFunction(i.stop) && (ye._queueHooks(c.elem, c.opts.queue).stop = ye.proxy(i.stop, i)), i;
            return ye.map(u, F, c), ye.isFunction(c.opts.start) && c.opts.start.call(e, c), ye.fx.timer(ye.extend(l, { elem: e, anim: c, queue: c.opts.queue })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always) }

        function U(e) {
            return ye.attr(e, "class") || "" }

        function K(e) {
            return function(t, n) { "string" != typeof t && (n = t, t = "*");
                var i, r = 0,
                    a = t.toLowerCase().match(He) || [];
                if (ye.isFunction(n))
                    for (; i = a[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n) } }

        function Z(e, t, n, i) {
            function r(o) {
                var l;
                return a[o] = !0, ye.each(e[o] || [], function(e, o) {
                    var c = o(t, n, i);
                    return "string" != typeof c || s || a[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1) }), l }
            var a = {},
                s = e === rn;
            return r(t.dataTypes[0]) || !a["*"] && r("*") }

        function J(e, t) {
            var n, i, r = ye.ajaxSettings.flatOptions || {};
            for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
            return n && ye.extend(!0, e, n), e }

        function Q(e, t, n) {
            for (var i, r, a, s, o = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
                for (s in o)
                    if (o[s] && o[s].test(r)) { l.unshift(s);
                        break }
            if (l[0] in n) a = l[0];
            else {
                for (s in n) {
                    if (!l[0] || e.converters[s + " " + l[0]]) { a = s;
                        break }
                    i || (i = s);
                }
                a = a || i
            }
            return a ? (a !== l[0] && l.unshift(a), n[a]) : void 0
        }

        function ee(e, t, n, i) {
            var r, a, s, o, l, c = {},
                u = e.dataTypes.slice();
            if (u[1])
                for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
            for (a = u.shift(); a;)
                if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = u.shift())
                    if ("*" === a) a = l;
                    else if ("*" !== l && l !== a) {
                if (s = c[l + " " + a] || c["* " + a], !s)
                    for (r in c)
                        if (o = r.split(" "), o[1] === a && (s = c[l + " " + o[0]] || c["* " + o[0]])) { s === !0 ? s = c[r] : c[r] !== !0 && (a = o[0], u.unshift(o[1]));
                            break }
                if (s !== !0)
                    if (s && e.throws) t = s(t);
                    else try { t = s(t) } catch (e) {
                        return { state: "parsererror", error: s ? e : "No conversion from " + l + " to " + a } } }
            return { state: "success", data: t } }

        function te(e) {
            return e.style && e.style.display || ye.css(e, "display") }

        function ne(e) {
            if (!ye.contains(e.ownerDocument || le, e)) return !0;
            for (; e && 1 === e.nodeType;) {
                if ("none" === te(e) || "hidden" === e.type) return !0;
                e = e.parentNode }
            return !1 }

        function ie(e, t, n, i) {
            var r;
            if (ye.isArray(t)) ye.each(t, function(t, r) { n || cn.test(e) ? i(e, r) : ie(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i) });
            else if (n || "object" !== ye.type(t)) i(e, t);
            else
                for (r in t) ie(e + "[" + r + "]", t[r], n, i) }

        function re() {
            try {
                return new a.XMLHttpRequest } catch (e) {} }

        function ae() {
            try {
                return new a.ActiveXObject("Microsoft.XMLHTTP") } catch (e) {} }

        function se(e) {
            return ye.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow) }
        var oe = [],
            le = a.document,
            ce = oe.slice,
            ue = oe.concat,
            pe = oe.push,
            de = oe.indexOf,
            he = {},
            fe = he.toString,
            me = he.hasOwnProperty,
            ge = {},
            ve = "1.12.4",
            ye = function(e, t) {
                return new ye.fn.init(e, t) },
            we = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            xe = /^-ms-/,
            be = /-([\da-z])/gi,
            Te = function(e, t) {
                return t.toUpperCase() };
        ye.fn = ye.prototype = { jquery: ve, constructor: ye, selector: "", length: 0, toArray: function() {
                return ce.call(this) }, get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : ce.call(this) }, pushStack: function(e) {
                var t = ye.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t }, each: function(e) {
                return ye.each(this, e) }, map: function(e) {
                return this.pushStack(ye.map(this, function(t, n) {
                    return e.call(t, n, t) })) }, slice: function() {
                return this.pushStack(ce.apply(this, arguments)) }, first: function() {
                return this.eq(0) }, last: function() {
                return this.eq(-1) }, eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : []) }, end: function() {
                return this.prevObject || this.constructor() }, push: pe, sort: oe.sort, splice: oe.splice }, ye.extend = ye.fn.extend = function() {
            var e, t, n, i, r, a, s = arguments[0] || {},
                o = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[o] || {}, o++), "object" == typeof s || ye.isFunction(s) || (s = {}), o === l && (s = this, o--); l > o; o++)
                if (null != (r = arguments[o]))
                    for (i in r) e = s[i], n = r[i], s !== n && (c && n && (ye.isPlainObject(n) || (t = ye.isArray(n))) ? (t ? (t = !1, a = e && ye.isArray(e) ? e : []) : a = e && ye.isPlainObject(e) ? e : {}, s[i] = ye.extend(c, a, n)) : void 0 !== n && (s[i] = n));
            return s }, ye.extend({ expando: "jQuery" + (ve + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(e) {
                throw new Error(e) }, noop: function() {}, isFunction: function(e) {
                return "function" === ye.type(e) }, isArray: Array.isArray || function(e) {
                return "array" === ye.type(e) }, isWindow: function(e) {
                return null != e && e == e.window }, isNumeric: function(e) {
                var t = e && e.toString();
                return !ye.isArray(e) && t - parseFloat(t) + 1 >= 0 }, isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0 }, isPlainObject: function(e) {
                var t;
                if (!e || "object" !== ye.type(e) || e.nodeType || ye.isWindow(e)) return !1;
                try {
                    if (e.constructor && !me.call(e, "constructor") && !me.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (e) {
                    return !1 }
                if (!ge.ownFirst)
                    for (t in e) return me.call(e, t);
                for (t in e);
                return void 0 === t || me.call(e, t) }, type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? he[fe.call(e)] || "object" : typeof e }, globalEval: function(e) { e && ye.trim(e) && (a.execScript || function(e) { a.eval.call(a, e) })(e) }, camelCase: function(e) {
                return e.replace(xe, "ms-").replace(be, Te) }, nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }, each: function(e, t) {
                var n, i = 0;
                if (o(e))
                    for (n = e.length; n > i && t.call(e[i], i, e[i]) !== !1; i++);
                else
                    for (i in e)
                        if (t.call(e[i], i, e[i]) === !1) break; return e }, trim: function(e) {
                return null == e ? "" : (e + "").replace(we, "") }, makeArray: function(e, t) {
                var n = t || [];
                return null != e && (o(Object(e)) ? ye.merge(n, "string" == typeof e ? [e] : e) : pe.call(n, e)), n }, inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (de) return de.call(t, e, n);
                    for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in t && t[n] === e) return n }
                return -1 }, merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
                if (n !== n)
                    for (; void 0 !== t[i];) e[r++] = t[i++];
                return e.length = r, e }, grep: function(e, t, n) {
                for (var i, r = [], a = 0, s = e.length, o = !n; s > a; a++) i = !t(e[a], a), i !== o && r.push(e[a]);
                return r }, map: function(e, t, n) {
                var i, r, a = 0,
                    s = [];
                if (o(e))
                    for (i = e.length; i > a; a++) r = t(e[a], a, n), null != r && s.push(r);
                else
                    for (a in e) r = t(e[a], a, n), null != r && s.push(r);
                return ue.apply([], s) }, guid: 1, proxy: function(e, t) {
                var n, i, r;
                return "string" == typeof t && (r = e[t], t = e, e = r), ye.isFunction(e) ? (n = ce.call(arguments, 2), i = function() {
                    return e.apply(t || this, n.concat(ce.call(arguments))) }, i.guid = e.guid = e.guid || ye.guid++, i) : void 0 }, now: function() {
                return +new Date }, support: ge }), "function" == typeof Symbol && (ye.fn[Symbol.iterator] = oe[Symbol.iterator]), ye.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { he["[object " + t + "]"] = t.toLowerCase() });
        var Se = function(e) {
            function t(e, t, n, i) {
                var r, a, s, o, l, c, p, h, f = t && t.ownerDocument,
                    m = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
                if (!i && ((t ? t.ownerDocument || t : _) !== A && z(t), t = t || A, H)) {
                    if (11 !== m && (c = ve.exec(e)))
                        if (r = c[1]) {
                            if (9 === m) {
                                if (!(s = t.getElementById(r))) return n;
                                if (s.id === r) return n.push(s), n } else if (f && (s = f.getElementById(r)) && j(t, s) && s.id === r) return n.push(s), n } else {
                            if (c[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                            if ((r = c[3]) && b.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(r)), n }
                    if (b.qsa && !F[e + " "] && (!B || !B.test(e))) {
                        if (1 !== m) f = t, h = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((o = t.getAttribute("id")) ? o = o.replace(we, "\\$&") : t.setAttribute("id", o = X), p = E(e), a = p.length, l = de.test(o) ? "#" + o : "[id='" + o + "']"; a--;) p[a] = l + " " + d(p[a]);
                            h = p.join(","), f = ye.test(e) && u(t.parentNode) || t }
                        if (h) try {
                            return J.apply(n, f.querySelectorAll(h)), n } catch (e) {} finally { o === X && t.removeAttribute("id") } } }
                return P(e.replace(oe, "$1"), t, n, i) }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = i }
                var t = [];
                return e }

            function i(e) {
                return e[X] = !0, e }

            function r(e) {
                var t = A.createElement("div");
                try {
                    return !!e(t) } catch (e) {
                    return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

            function a(e, t) {
                for (var n = e.split("|"), i = n.length; i--;) T.attrHandle[n[i]] = t }

            function s(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1 }

            function o(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e } }

            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e } }

            function c(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var r, a = e([], n.length, t), s = a.length; s--;) n[r = a[s]] && (n[r] = !(i[r] = n[r])) }) }) }

            function u(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e }

            function p() {}

            function d(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                return i }

            function h(e, t, n) {
                var i = t.dir,
                    r = n && "parentNode" === i,
                    a = Y++;
                return t.first ? function(t, n, a) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) return e(t, n, a) } : function(t, n, s) {
                    var o, l, c, u = [W, a];
                    if (s) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || r) && e(t, n, s)) return !0 } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || r) {
                                if (c = t[X] || (t[X] = {}), l = c[t.uniqueID] || (c[t.uniqueID] = {}), (o = l[i]) && o[0] === W && o[1] === a) return u[2] = o[2];
                                if (l[i] = u, u[2] = e(t, n, s)) return !0 } } }

            function f(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var r = e.length; r--;)
                        if (!e[r](t, n, i)) return !1;
                    return !0 } : e[0] }

            function m(e, n, i) {
                for (var r = 0, a = n.length; a > r; r++) t(e, n[r], i);
                return i }

            function g(e, t, n, i, r) {
                for (var a, s = [], o = 0, l = e.length, c = null != t; l > o; o++)(a = e[o]) && (n && !n(a, i, r) || (s.push(a), c && t.push(o)));
                return s }

            function v(e, t, n, r, a, s) {
                return r && !r[X] && (r = v(r)), a && !a[X] && (a = v(a, s)), i(function(i, s, o, l) {
                    var c, u, p, d = [],
                        h = [],
                        f = s.length,
                        v = i || m(t || "*", o.nodeType ? [o] : o, []),
                        y = !e || !i && t ? v : g(v, d, e, o, l),
                        w = n ? a || (i ? e : f || r) ? [] : s : y;
                    if (n && n(y, w, o, l), r)
                        for (c = g(w, h), r(c, [], o, l), u = c.length; u--;)(p = c[u]) && (w[h[u]] = !(y[h[u]] = p));
                    if (i) {
                        if (a || e) {
                            if (a) {
                                for (c = [], u = w.length; u--;)(p = w[u]) && c.push(y[u] = p);
                                a(null, w = [], c, l) }
                            for (u = w.length; u--;)(p = w[u]) && (c = a ? ee(i, p) : d[u]) > -1 && (i[c] = !(s[c] = p)) } } else w = g(w === s ? w.splice(f, w.length) : w), a ? a(null, s, w, l) : J.apply(s, w) }) }

            function y(e) {
                for (var t, n, i, r = e.length, a = T.relative[e[0].type], s = a || T.relative[" "], o = a ? 1 : 0, l = h(function(e) {
                        return e === t }, s, !0), c = h(function(e) {
                        return ee(t, e) > -1 }, s, !0), u = [function(e, n, i) {
                        var r = !a && (i || n !== M) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                        return t = null, r }]; r > o; o++)
                    if (n = T.relative[e[o].type]) u = [h(f(u), n)];
                    else {
                        if (n = T.filter[e[o].type].apply(null, e[o].matches), n[X]) {
                            for (i = ++o; r > i && !T.relative[e[i].type]; i++);
                            return v(o > 1 && f(u), o > 1 && d(e.slice(0, o - 1).concat({ value: " " === e[o - 2].type ? "*" : "" })).replace(oe, "$1"), n, i > o && y(e.slice(o, i)), r > i && y(e = e.slice(i)), r > i && d(e)) }
                        u.push(n) }
                return f(u) }

            function w(e, n) {
                var r = n.length > 0,
                    a = e.length > 0,
                    s = function(i, s, o, l, c) {
                        var u, p, d, h = 0,
                            f = "0",
                            m = i && [],
                            v = [],
                            y = M,
                            w = i || a && T.find.TAG("*", c),
                            x = W += null == y ? 1 : Math.random() || .1,
                            b = w.length;
                        for (c && (M = s === A || s || c); f !== b && null != (u = w[f]); f++) {
                            if (a && u) {
                                for (p = 0, s || u.ownerDocument === A || (z(u), o = !H); d = e[p++];)
                                    if (d(u, s || A, o)) { l.push(u);
                                        break }
                                c && (W = x) }
                            r && ((u = !d && u) && h--, i && m.push(u)) }
                        if (h += f, r && f !== h) {
                            for (p = 0; d = n[p++];) d(m, v, s, o);
                            if (i) {
                                if (h > 0)
                                    for (; f--;) m[f] || v[f] || (v[f] = K.call(l));
                                v = g(v) }
                            J.apply(l, v), c && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(l) }
                        return c && (W = x, M = y), m };
                return r ? i(s) : s }
            var x, b, T, S, C, E, k, P, M, N, D, z, A, L, H, B, I, O, j, X = "sizzle" + 1 * new Date,
                _ = e.document,
                W = 0,
                Y = 0,
                R = n(),
                q = n(),
                F = n(),
                G = function(e, t) {
                    return e === t && (D = !0), 0 },
                V = 1 << 31,
                $ = {}.hasOwnProperty,
                U = [],
                K = U.pop,
                Z = U.push,
                J = U.push,
                Q = U.slice,
                ee = function(e, t) {
                    for (var n = 0, i = e.length; i > n; n++)
                        if (e[n] === t) return n;
                    return -1 },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
                ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
                se = new RegExp(ne + "+", "g"),
                oe = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                le = new RegExp("^" + ne + "*," + ne + "*"),
                ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                pe = new RegExp(ae),
                de = new RegExp("^" + ie + "$"),
                he = { ID: new RegExp("^#(" + ie + ")"), CLASS: new RegExp("^\\.(" + ie + ")"), TAG: new RegExp("^(" + ie + "|[*])"), ATTR: new RegExp("^" + re), PSEUDO: new RegExp("^" + ae), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"), bool: new RegExp("^(?:" + te + ")$", "i"), needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i") },
                fe = /^(?:input|select|textarea|button)$/i,
                me = /^h\d$/i,
                ge = /^[^{]+\{\s*\[native \w/,
                ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ye = /[+~]/,
                we = /'|\\/g,
                xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                be = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320) },
                Te = function() { z() };
            try { J.apply(U = Q.call(_.childNodes), _.childNodes), U[_.childNodes.length].nodeType } catch (e) { J = { apply: U.length ? function(e, t) { Z.apply(e, Q.call(t)) } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1 } } }
            b = t.support = {}, C = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName }, z = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : _;
                return i !== A && 9 === i.nodeType && i.documentElement ? (A = i, L = A.documentElement, H = !C(A), (n = A.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), b.attributes = r(function(e) {
                    return e.className = "i", !e.getAttribute("className") }), b.getElementsByTagName = r(function(e) {
                    return e.appendChild(A.createComment("")), !e.getElementsByTagName("*").length }), b.getElementsByClassName = ge.test(A.getElementsByClassName), b.getById = r(function(e) {
                    return L.appendChild(e).id = X, !A.getElementsByName || !A.getElementsByName(X).length }), b.getById ? (T.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && H) {
                        var n = t.getElementById(e);
                        return n ? [n] : [] } }, T.filter.ID = function(e) {
                    var t = e.replace(xe, be);
                    return function(e) {
                        return e.getAttribute("id") === t } }) : (delete T.find.ID, T.filter.ID = function(e) {
                    var t = e.replace(xe, be);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t } }), T.find.TAG = b.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        a = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = a[r++];) 1 === n.nodeType && i.push(n);
                        return i }
                    return a }, T.find.CLASS = b.getElementsByClassName && function(e, t) {
                    return "undefined" != typeof t.getElementsByClassName && H ? t.getElementsByClassName(e) : void 0 }, I = [], B = [], (b.qsa = ge.test(A.querySelectorAll)) && (r(function(e) { L.appendChild(e).innerHTML = "<a id='" + X + "'></a><select id='" + X + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && B.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || B.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + X + "-]").length || B.push("~="), e.querySelectorAll(":checked").length || B.push(":checked"), e.querySelectorAll("a#" + X + "+*").length || B.push(".#.+[+~]") }), r(function(e) {
                    var t = A.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && B.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || B.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), B.push(",.*:") })), (b.matchesSelector = ge.test(O = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function(e) { b.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), I.push("!=", ae) }), B = B.length && new RegExp(B.join("|")), I = I.length && new RegExp(I.join("|")), t = ge.test(L.compareDocumentPosition), j = t || ge.test(L.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i))) } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1 }, G = t ? function(e, t) {
                    if (e === t) return D = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === A || e.ownerDocument === _ && j(_, e) ? -1 : t === A || t.ownerDocument === _ && j(_, t) ? 1 : N ? ee(N, e) - ee(N, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
                    if (e === t) return D = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        a = t.parentNode,
                        o = [e],
                        l = [t];
                    if (!r || !a) return e === A ? -1 : t === A ? 1 : r ? -1 : a ? 1 : N ? ee(N, e) - ee(N, t) : 0;
                    if (r === a) return s(e, t);
                    for (n = e; n = n.parentNode;) o.unshift(n);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (; o[i] === l[i];) i++;
                    return i ? s(o[i], l[i]) : o[i] === _ ? -1 : l[i] === _ ? 1 : 0 }, A) : A }, t.matches = function(e, n) {
                return t(e, null, null, n) }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== A && z(e), n = n.replace(ue, "='$1']"), b.matchesSelector && H && !F[n + " "] && (!I || !I.test(n)) && (!B || !B.test(n))) try {
                    var i = O.call(e, n);
                    if (i || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i } catch (e) {}
                return t(n, A, null, [e]).length > 0 }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== A && z(e), j(e, t) }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== A && z(e);
                var n = T.attrHandle[t.toLowerCase()],
                    i = n && $.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
                return void 0 !== i ? i : b.attributes || !H ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e) }, t.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (D = !b.detectDuplicates, N = !b.sortStable && e.slice(0), e.sort(G), D) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1) }
                return N = null, e }, S = t.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += S(e) } else if (3 === r || 4 === r) return e.nodeValue } else
                    for (; t = e[i++];) n += S(t);
                return n }, T = t.selectors = { cacheLength: 50, createPseudo: i, match: he, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e) {
                        return e[1] = e[1].replace(xe, be), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e }, PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function(e) {
                        var t = e.replace(xe, be).toLowerCase();
                        return "*" === e ? function() {
                            return !0 } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function(e) {
                        var t = R[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && R(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function(e, n, i) {
                        return function(r) {
                            var a = t.attr(r, e);
                            return null == a ? "!=" === n : !n || (a += "", "=" === n ? a === i : "!=" === n ? a !== i : "^=" === n ? i && 0 === a.indexOf(i) : "*=" === n ? i && a.indexOf(i) > -1 : "$=" === n ? i && a.slice(-i.length) === i : "~=" === n ? (" " + a.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (a === i || a.slice(0, i.length + 1) === i + "-")) } }, CHILD: function(e, t, n, i, r) {
                        var a = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            o = "of-type" === t;
                        return 1 === i && 0 === r ? function(e) {
                            return !!e.parentNode } : function(t, n, l) {
                            var c, u, p, d, h, f, m = a !== s ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = o && t.nodeName.toLowerCase(),
                                y = !l && !o,
                                w = !1;
                            if (g) {
                                if (a) {
                                    for (; m;) {
                                        for (d = t; d = d[m];)
                                            if (o ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        f = m = "only" === e && !f && "nextSibling" }
                                    return !0 }
                                if (f = [s ? g.firstChild : g.lastChild], s && y) {
                                    for (d = g, p = d[X] || (d[X] = {}), u = p[d.uniqueID] || (p[d.uniqueID] = {}), c = u[e] || [], h = c[0] === W && c[1], w = h && c[2], d = h && g.childNodes[h]; d = ++h && d && d[m] || (w = h = 0) || f.pop();)
                                        if (1 === d.nodeType && ++w && d === t) { u[e] = [W, h, w];
                                            break } } else if (y && (d = t, p = d[X] || (d[X] = {}), u = p[d.uniqueID] || (p[d.uniqueID] = {}), c = u[e] || [], h = c[0] === W && c[1], w = h), w === !1)
                                    for (;
                                        (d = ++h && d && d[m] || (w = h = 0) || f.pop()) && ((o ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++w || (y && (p = d[X] || (d[X] = {}), u = p[d.uniqueID] || (p[d.uniqueID] = {}), u[e] = [W, w]), d !== t)););
                                return w -= r, w === i || w % i === 0 && w / i >= 0 } } }, PSEUDO: function(e, n) {
                        var r, a = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return a[X] ? a(n) : a.length > 1 ? (r = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, r = a(e, n), s = r.length; s--;) i = ee(e, r[s]), e[i] = !(t[i] = r[s]) }) : function(e) {
                            return a(e, 0, r) }) : a } }, pseudos: { not: i(function(e) {
                        var t = [],
                            n = [],
                            r = k(e.replace(oe, "$1"));
                        return r[X] ? i(function(e, t, n, i) {
                            for (var a, s = r(e, null, i, []), o = e.length; o--;)(a = s[o]) && (e[o] = !(t[o] = a)) }) : function(e, i, a) {
                            return t[0] = e, r(t, null, a, n), t[0] = null, !n.pop() } }), has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0 } }), contains: i(function(e) {
                        return e = e.replace(xe, be),
                            function(t) {
                                return (t.textContent || t.innerText || S(t)).indexOf(e) > -1 } }), lang: i(function(e) {
                        return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, be).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1 } }), target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id }, root: function(e) {
                        return e === L }, focus: function(e) {
                        return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: function(e) {
                        return e.disabled === !1 }, disabled: function(e) {
                        return e.disabled === !0 }, checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 }, empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0 }, parent: function(e) {
                        return !T.pseudos.empty(e) }, header: function(e) {
                        return me.test(e.nodeName) }, input: function(e) {
                        return fe.test(e.nodeName) }, button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t }, text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: c(function() {
                        return [0] }), last: c(function(e, t) {
                        return [t - 1] }), eq: c(function(e, t, n) {
                        return [0 > n ? n + t : n] }), even: c(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e }), odd: c(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e }), lt: c(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                        return e }), gt: c(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                        return e }) } }, T.pseudos.nth = T.pseudos.eq;
            for (x in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) T.pseudos[x] = o(x);
            for (x in { submit: !0, reset: !0 }) T.pseudos[x] = l(x);
            return p.prototype = T.filters = T.pseudos, T.setFilters = new p, E = t.tokenize = function(e, n) {
                var i, r, a, s, o, l, c, u = q[e + " "];
                if (u) return n ? 0 : u.slice(0);
                for (o = e, l = [], c = T.preFilter; o;) { i && !(r = le.exec(o)) || (r && (o = o.slice(r[0].length) || o), l.push(a = [])), i = !1, (r = ce.exec(o)) && (i = r.shift(), a.push({ value: i, type: r[0].replace(oe, " ") }), o = o.slice(i.length));
                    for (s in T.filter) !(r = he[s].exec(o)) || c[s] && !(r = c[s](r)) || (i = r.shift(), a.push({ value: i, type: s, matches: r }), o = o.slice(i.length));
                    if (!i) break }
                return n ? o.length : o ? t.error(e) : q(e, l).slice(0) }, k = t.compile = function(e, t) {
                var n, i = [],
                    r = [],
                    a = F[e + " "];
                if (!a) {
                    for (t || (t = E(e)), n = t.length; n--;) a = y(t[n]), a[X] ? i.push(a) : r.push(a);
                    a = F(e, w(r, i)), a.selector = e }
                return a }, P = t.select = function(e, t, n, i) {
                var r, a, s, o, l, c = "function" == typeof e && e,
                    p = !i && E(e = c.selector || e);
                if (n = n || [], 1 === p.length) {
                    if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (s = a[0]).type && b.getById && 9 === t.nodeType && H && T.relative[a[1].type]) {
                        if (t = (T.find.ID(s.matches[0].replace(xe, be), t) || [])[0], !t) return n;
                        c && (t = t.parentNode), e = e.slice(a.shift().value.length) }
                    for (r = he.needsContext.test(e) ? 0 : a.length; r-- && (s = a[r], !T.relative[o = s.type]);)
                        if ((l = T.find[o]) && (i = l(s.matches[0].replace(xe, be), ye.test(a[0].type) && u(t.parentNode) || t))) {
                            if (a.splice(r, 1), e = i.length && d(a), !e) return J.apply(n, i), n;
                            break } }
                return (c || k(e, p))(i, t, !H, n, !t || ye.test(e) && u(t.parentNode) || t), n }, b.sortStable = X.split("").sort(G).join("") === X, b.detectDuplicates = !!D, z(), b.sortDetached = r(function(e) {
                return 1 & e.compareDocumentPosition(A.createElement("div")) }), r(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || a("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), b.attributes && r(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || a("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue }), r(function(e) {
                return null == e.getAttribute("disabled") }) || a(te, function(e, t, n) {
                var i;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null }), t }(a);
        ye.find = Se, ye.expr = Se.selectors, ye.expr[":"] = ye.expr.pseudos, ye.uniqueSort = ye.unique = Se.uniqueSort, ye.text = Se.getText, ye.isXMLDoc = Se.isXML, ye.contains = Se.contains;
        var Ce = function(e, t, n) {
                for (var i = [], r = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (r && ye(e).is(n)) break;
                        i.push(e) }
                return i },
            Ee = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n },
            ke = ye.expr.match.needsContext,
            Pe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            Me = /^.[^:#\[\.,]*$/;
        ye.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ye.find.matchesSelector(i, e) ? [i] : [] : ye.find.matches(e, ye.grep(t, function(e) {
                return 1 === e.nodeType })) }, ye.fn.extend({ find: function(e) {
                var t, n = [],
                    i = this,
                    r = i.length;
                if ("string" != typeof e) return this.pushStack(ye(e).filter(function() {
                    for (t = 0; r > t; t++)
                        if (ye.contains(i[t], this)) return !0 }));
                for (t = 0; r > t; t++) ye.find(e, i[t], n);
                return n = this.pushStack(r > 1 ? ye.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n }, filter: function(e) {
                return this.pushStack(l(this, e || [], !1)) }, not: function(e) {
                return this.pushStack(l(this, e || [], !0)) }, is: function(e) {
                return !!l(this, "string" == typeof e && ke.test(e) ? ye(e) : e || [], !1).length } });
        var Ne, De = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ze = ye.fn.init = function(e, t, n) {
                var i, r;
                if (!e) return this;
                if (n = n || Ne, "string" == typeof e) {
                    if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : De.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (t = t instanceof ye ? t[0] : t, ye.merge(this, ye.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : le, !0)), Pe.test(i[1]) && ye.isPlainObject(t))
                            for (i in t) ye.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this }
                    if (r = le.getElementById(i[2]), r && r.parentNode) {
                        if (r.id !== i[2]) return Ne.find(e);
                        this.length = 1, this[0] = r }
                    return this.context = le, this.selector = e, this }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ye.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(ye) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ye.makeArray(e, this)) };
        ze.prototype = ye.fn, Ne = ye(le);
        var Ae = /^(?:parents|prev(?:Until|All))/,
            Le = { children: !0, contents: !0, next: !0, prev: !0 };
        ye.fn.extend({ has: function(e) {
                var t, n = ye(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; i > t; t++)
                        if (ye.contains(this, n[t])) return !0 }) }, closest: function(e, t) {
                for (var n, i = 0, r = this.length, a = [], s = ke.test(e) || "string" != typeof e ? ye(e, t || this.context) : 0; r > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ye.find.matchesSelector(n, e))) { a.push(n);
                            break }
                return this.pushStack(a.length > 1 ? ye.uniqueSort(a) : a) }, index: function(e) {
                return e ? "string" == typeof e ? ye.inArray(this[0], ye(e)) : ye.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(e, t) {
                return this.pushStack(ye.uniqueSort(ye.merge(this.get(), ye(e, t)))) }, addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), ye.each({ parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null }, parents: function(e) {
                return Ce(e, "parentNode") }, parentsUntil: function(e, t, n) {
                return Ce(e, "parentNode", n) }, next: function(e) {
                return c(e, "nextSibling") }, prev: function(e) {
                return c(e, "previousSibling") }, nextAll: function(e) {
                return Ce(e, "nextSibling") }, prevAll: function(e) {
                return Ce(e, "previousSibling") }, nextUntil: function(e, t, n) {
                return Ce(e, "nextSibling", n) }, prevUntil: function(e, t, n) {
                return Ce(e, "previousSibling", n) }, siblings: function(e) {
                return Ee((e.parentNode || {}).firstChild, e) }, children: function(e) {
                return Ee(e.firstChild) }, contents: function(e) {
                return ye.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ye.merge([], e.childNodes) } }, function(e, t) { ye.fn[e] = function(n, i) {
                var r = ye.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = ye.filter(i, r)), this.length > 1 && (Le[e] || (r = ye.uniqueSort(r)), Ae.test(e) && (r = r.reverse())), this.pushStack(r) } });
        var He = /\S+/g;
        ye.Callbacks = function(e) { e = "string" == typeof e ? u(e) : ye.extend({}, e);
            var t, n, i, r, a = [],
                s = [],
                o = -1,
                l = function() {
                    for (r = e.once, i = t = !0; s.length; o = -1)
                        for (n = s.shift(); ++o < a.length;) a[o].apply(n[0], n[1]) === !1 && e.stopOnFalse && (o = a.length, n = !1);
                    e.memory || (n = !1), t = !1, r && (a = n ? [] : "") },
                c = { add: function() {
                        return a && (n && !t && (o = a.length - 1, s.push(n)), function t(n) { ye.each(n, function(n, i) { ye.isFunction(i) ? e.unique && c.has(i) || a.push(i) : i && i.length && "string" !== ye.type(i) && t(i) }) }(arguments), n && !t && l()), this }, remove: function() {
                        return ye.each(arguments, function(e, t) {
                            for (var n;
                                (n = ye.inArray(t, a, n)) > -1;) a.splice(n, 1), o >= n && o-- }), this }, has: function(e) {
                        return e ? ye.inArray(e, a) > -1 : a.length > 0 }, empty: function() {
                        return a && (a = []), this }, disable: function() {
                        return r = s = [], a = n = "", this }, disabled: function() {
                        return !a }, lock: function() {
                        return r = !0, n || c.disable(), this }, locked: function() {
                        return !!r }, fireWith: function(e, n) {
                        return r || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || l()), this }, fire: function() {
                        return c.fireWith(this, arguments), this }, fired: function() {
                        return !!i } };
            return c }, ye.extend({ Deferred: function(e) {
                var t = [
                        ["resolve", "done", ye.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ye.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ye.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = { state: function() {
                            return n }, always: function() {
                            return r.done(arguments).fail(arguments), this }, then: function() {
                            var e = arguments;
                            return ye.Deferred(function(n) { ye.each(t, function(t, a) {
                                    var s = ye.isFunction(e[t]) && e[t];
                                    r[a[1]](function() {
                                        var e = s && s.apply(this, arguments);
                                        e && ye.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[a[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments) }) }), e = null }).promise() }, promise: function(e) {
                            return null != e ? ye.extend(e, i) : i } },
                    r = {};
                return i.pipe = i.then, ye.each(t, function(e, a) {
                    var s = a[2],
                        o = a[3];
                    i[a[1]] = s.add, o && s.add(function() { n = o }, t[1 ^ e][2].disable, t[2][2].lock), r[a[0]] = function() {
                        return r[a[0] + "With"](this === r ? i : this, arguments), this }, r[a[0] + "With"] = s.fireWith }), i.promise(r), e && e.call(r, r), r }, when: function(e) {
                var t, n, i, r = 0,
                    a = ce.call(arguments),
                    s = a.length,
                    o = 1 !== s || e && ye.isFunction(e.promise) ? s : 0,
                    l = 1 === o ? e : ye.Deferred(),
                    c = function(e, n, i) {
                        return function(r) { n[e] = this, i[e] = arguments.length > 1 ? ce.call(arguments) : r, i === t ? l.notifyWith(n, i) : --o || l.resolveWith(n, i) } };
                if (s > 1)
                    for (t = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) a[r] && ye.isFunction(a[r].promise) ? a[r].promise().progress(c(r, n, t)).done(c(r, i, a)).fail(l.reject) : --o;
                return o || l.resolveWith(i, a), l.promise() } });
        var Be;
        ye.fn.ready = function(e) {
            return ye.ready.promise().done(e), this }, ye.extend({ isReady: !1, readyWait: 1, holdReady: function(e) { e ? ye.readyWait++ : ye.ready(!0) }, ready: function(e) {
                (e === !0 ? --ye.readyWait : ye.isReady) || (ye.isReady = !0, e !== !0 && --ye.readyWait > 0 || (Be.resolveWith(le, [ye]), ye.fn.triggerHandler && (ye(le).triggerHandler("ready"), ye(le).off("ready")))) } }), ye.ready.promise = function(e) {
            if (!Be)
                if (Be = ye.Deferred(), "complete" === le.readyState || "loading" !== le.readyState && !le.documentElement.doScroll) a.setTimeout(ye.ready);
                else if (le.addEventListener) le.addEventListener("DOMContentLoaded", d), a.addEventListener("load", d);
            else { le.attachEvent("onreadystatechange", d), a.attachEvent("onload", d);
                var t = !1;
                try { t = null == a.frameElement && le.documentElement } catch (e) {}
                t && t.doScroll && ! function e() {
                    if (!ye.isReady) {
                        try { t.doScroll("left") } catch (t) {
                            return a.setTimeout(e, 50) }
                        p(), ye.ready() } }() }
            return Be.promise(e) }, ye.ready.promise();
        var Ie;
        for (Ie in ye(ge)) break;
        ge.ownFirst = "0" === Ie, ge.inlineBlockNeedsLayout = !1, ye(function() {
                var e, t, n, i;
                n = le.getElementsByTagName("body")[0], n && n.style && (t = le.createElement("div"), i = le.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ge.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i)) }),
            function() {
                var e = le.createElement("div");
                ge.deleteExpando = !0;
                try { delete e.test } catch (e) { ge.deleteExpando = !1 }
                e = null }();
        var Oe = function(e) {
                var t = ye.noData[(e.nodeName + " ").toLowerCase()],
                    n = +e.nodeType || 1;
                return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t)
            },
            je = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Xe = /([A-Z])/g;
        ye.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(e) {
                    return e = e.nodeType ? ye.cache[e[ye.expando]] : e[ye.expando], !!e && !f(e) }, data: function(e, t, n) {
                    return m(e, t, n) }, removeData: function(e, t) {
                    return g(e, t) }, _data: function(e, t, n) {
                    return m(e, t, n, !0) }, _removeData: function(e, t) {
                    return g(e, t, !0) } }), ye.fn.extend({ data: function(e, t) {
                    var n, i, r, a = this[0],
                        s = a && a.attributes;
                    if (void 0 === e) {
                        if (this.length && (r = ye.data(a), 1 === a.nodeType && !ye._data(a, "parsedAttrs"))) {
                            for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = ye.camelCase(i.slice(5)), h(a, i, r[i])));
                            ye._data(a, "parsedAttrs", !0) }
                        return r }
                    return "object" == typeof e ? this.each(function() { ye.data(this, e) }) : arguments.length > 1 ? this.each(function() { ye.data(this, e, t) }) : a ? h(a, e, ye.data(a, e)) : void 0 }, removeData: function(e) {
                    return this.each(function() { ye.removeData(this, e) }) } }), ye.extend({ queue: function(e, t, n) {
                    var i;
                    return e ? (t = (t || "fx") + "queue", i = ye._data(e, t), n && (!i || ye.isArray(n) ? i = ye._data(e, t, ye.makeArray(n)) : i.push(n)), i || []) : void 0 }, dequeue: function(e, t) { t = t || "fx";
                    var n = ye.queue(e, t),
                        i = n.length,
                        r = n.shift(),
                        a = ye._queueHooks(e, t),
                        s = function() { ye.dequeue(e, t) }; "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete a.stop, r.call(e, s, a)), !i && a && a.empty.fire() }, _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return ye._data(e, n) || ye._data(e, n, { empty: ye.Callbacks("once memory").add(function() { ye._removeData(e, t + "queue"), ye._removeData(e, n) }) }) } }), ye.fn.extend({ queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ye.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = ye.queue(this, e, t);
                        ye._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ye.dequeue(this, e) }) }, dequeue: function(e) {
                    return this.each(function() { ye.dequeue(this, e) }) }, clearQueue: function(e) {
                    return this.queue(e || "fx", []) }, promise: function(e, t) {
                    var n, i = 1,
                        r = ye.Deferred(),
                        a = this,
                        s = this.length,
                        o = function() {--i || r.resolveWith(a, [a]) };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = ye._data(a[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(o));
                    return o(), r.promise(t) } }),
            function() {
                var e;
                ge.shrinkWrapBlocks = function() {
                    if (null != e) return e;
                    e = !1;
                    var t, n, i;
                    return n = le.getElementsByTagName("body")[0], n && n.style ? (t = le.createElement("div"), i = le.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(le.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0 } }();
        var _e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            We = new RegExp("^(?:([+-])=|)(" + _e + ")([a-z%]*)$", "i"),
            Ye = ["Top", "Right", "Bottom", "Left"],
            Re = function(e, t) {
                return e = t || e, "none" === ye.css(e, "display") || !ye.contains(e.ownerDocument, e) },
            qe = function(e, t, n, i, r, a, s) {
                var o = 0,
                    l = e.length,
                    c = null == n;
                if ("object" === ye.type(n)) { r = !0;
                    for (o in n) qe(e, t, o, n[o], !0, a, s) } else if (void 0 !== i && (r = !0, ye.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                        return c.call(ye(e), n) })), t))
                    for (; l > o; o++) t(e[o], n, s ? i : i.call(e[o], o, t(e[o], n)));
                return r ? e : c ? t.call(e) : l ? t(e[0], n) : a },
            Fe = /^(?:checkbox|radio)$/i,
            Ge = /<([\w:-]+)/,
            Ve = /^$|\/(?:java|ecma)script/i,
            $e = /^\s+/,
            Ue = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
        ! function() {
            var e = le.createElement("div"),
                t = le.createDocumentFragment(),
                n = le.createElement("input");
            e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ge.leadingWhitespace = 3 === e.firstChild.nodeType, ge.tbody = !e.getElementsByTagName("tbody").length, ge.htmlSerialize = !!e.getElementsByTagName("link").length, ge.html5Clone = "<:nav></:nav>" !== le.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), ge.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", ge.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = le.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), ge.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ge.noCloneEvent = !!e.addEventListener, e[ye.expando] = 1, ge.attributes = !e.getAttribute(ye.expando) }();
        var Ke = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: ge.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] };
        Ke.optgroup = Ke.option, Ke.tbody = Ke.tfoot = Ke.colgroup = Ke.caption = Ke.thead, Ke.th = Ke.td;
        var Ze = /<|&#?\w+;/,
            Je = /<tbody/i;
        ! function() {
            var e, t, n = le.createElement("div");
            for (e in { submit: !0, change: !0, focusin: !0 }) t = "on" + e, (ge[e] = t in a) || (n.setAttribute(t, "t"), ge[e] = n.attributes[t].expando === !1);
            n = null }();
        var Qe = /^(?:input|select|textarea)$/i,
            et = /^key/,
            tt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            nt = /^(?:focusinfocus|focusoutblur)$/,
            it = /^([^.]*)(?:\.(.+)|)/;
        ye.event = { global: {}, add: function(e, t, n, i, r) {
                var a, s, o, l, c, u, p, d, h, f, m, g = ye._data(e);
                if (g) {
                    for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = ye.guid++), (s = g.events) || (s = g.events = {}), (u = g.handle) || (u = g.handle = function(e) {
                            return "undefined" == typeof ye || e && ye.event.triggered === e.type ? void 0 : ye.event.dispatch.apply(u.elem, arguments) }, u.elem = e), t = (t || "").match(He) || [""], o = t.length; o--;) a = it.exec(t[o]) || [], h = m = a[1], f = (a[2] || "").split(".").sort(), h && (c = ye.event.special[h] || {}, h = (r ? c.delegateType : c.bindType) || h, c = ye.event.special[h] || {}, p = ye.extend({ type: h, origType: m, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && ye.expr.match.needsContext.test(r), namespace: f.join(".") }, l), (d = s[h]) || (d = s[h] = [], d.delegateCount = 0, c.setup && c.setup.call(e, i, f, u) !== !1 || (e.addEventListener ? e.addEventListener(h, u, !1) : e.attachEvent && e.attachEvent("on" + h, u))), c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, p) : d.push(p), ye.event.global[h] = !0);
                    e = null } }, remove: function(e, t, n, i, r) {
                var a, s, o, l, c, u, p, d, h, f, m, g = ye.hasData(e) && ye._data(e);
                if (g && (u = g.events)) {
                    for (t = (t || "").match(He) || [""], c = t.length; c--;)
                        if (o = it.exec(t[c]) || [], h = m = o[1], f = (o[2] || "").split(".").sort(), h) {
                            for (p = ye.event.special[h] || {}, h = (i ? p.delegateType : p.bindType) || h, d = u[h] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = a = d.length; a--;) s = d[a], !r && m !== s.origType || n && n.guid !== s.guid || o && !o.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (d.splice(a, 1), s.selector && d.delegateCount--, p.remove && p.remove.call(e, s));
                            l && !d.length && (p.teardown && p.teardown.call(e, f, g.handle) !== !1 || ye.removeEvent(e, h, g.handle), delete u[h]) } else
                            for (h in u) ye.event.remove(e, h + t[c], n, i, !0);
                    ye.isEmptyObject(u) && (delete g.handle, ye._removeData(e, "events")) } }, trigger: function(e, t, n, i) {
                var r, s, o, l, c, u, p, d = [n || le],
                    h = me.call(e, "type") ? e.type : e,
                    f = me.call(e, "namespace") ? e.namespace.split(".") : [];
                if (o = u = n = n || le, 3 !== n.nodeType && 8 !== n.nodeType && !nt.test(h + ye.event.triggered) && (h.indexOf(".") > -1 && (f = h.split("."), h = f.shift(), f.sort()), s = h.indexOf(":") < 0 && "on" + h, e = e[ye.expando] ? e : new ye.Event(h, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : ye.makeArray(t, [e]), c = ye.event.special[h] || {}, i || !c.trigger || c.trigger.apply(n, t) !== !1)) {
                    if (!i && !c.noBubble && !ye.isWindow(n)) {
                        for (l = c.delegateType || h, nt.test(l + h) || (o = o.parentNode); o; o = o.parentNode) d.push(o), u = o;
                        u === (n.ownerDocument || le) && d.push(u.defaultView || u.parentWindow || a) }
                    for (p = 0;
                        (o = d[p++]) && !e.isPropagationStopped();) e.type = p > 1 ? l : c.bindType || h, r = (ye._data(o, "events") || {})[e.type] && ye._data(o, "handle"), r && r.apply(o, t), r = s && o[s], r && r.apply && Oe(o) && (e.result = r.apply(o, t), e.result === !1 && e.preventDefault());
                    if (e.type = h, !i && !e.isDefaultPrevented() && (!c._default || c._default.apply(d.pop(), t) === !1) && Oe(n) && s && n[h] && !ye.isWindow(n)) { u = n[s], u && (n[s] = null), ye.event.triggered = h;
                        try { n[h]() } catch (e) {}
                        ye.event.triggered = void 0, u && (n[s] = u) }
                    return e.result } }, dispatch: function(e) { e = ye.event.fix(e);
                var t, n, i, r, a, s = [],
                    o = ce.call(arguments),
                    l = (ye._data(this, "events") || {})[e.type] || [],
                    c = ye.event.special[e.type] || {};
                if (o[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                    for (s = ye.event.handlers.call(this, e, l), t = 0;
                        (r = s[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = r.elem, n = 0;
                            (a = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(a.namespace) || (e.handleObj = a, e.data = a.data, i = ((ye.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, o), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e), e.result } }, handlers: function(e, t) {
                var n, i, r, a, s = [],
                    o = t.delegateCount,
                    l = e.target;
                if (o && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                            for (i = [], n = 0; o > n; n++) a = t[n], r = a.selector + " ", void 0 === i[r] && (i[r] = a.needsContext ? ye(r, this).index(l) > -1 : ye.find(r, this, null, [l]).length), i[r] && i.push(a);
                            i.length && s.push({ elem: l, handlers: i }) }
                return o < t.length && s.push({ elem: this, handlers: t.slice(o) }), s }, fix: function(e) {
                if (e[ye.expando]) return e;
                var t, n, i, r = e.type,
                    a = e,
                    s = this.fixHooks[r];
                for (s || (this.fixHooks[r] = s = tt.test(r) ? this.mouseHooks : et.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new ye.Event(a), t = i.length; t--;) n = i[t], e[n] = a[n];
                return e.target || (e.target = a.srcElement || le), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, a) : e }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(e, t) {
                    var n, i, r, a = t.button,
                        s = t.fromElement;
                    return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || le, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e } }, special: { load: { noBubble: !0 }, focus: { trigger: function() {
                        if (this !== E() && this.focus) try {
                            return this.focus(), !1 } catch (e) {} }, delegateType: "focusin" }, blur: { trigger: function() {
                        return this === E() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() {
                        return ye.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function(e) {
                        return ye.nodeName(e.target, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }, simulate: function(e, t, n) {
                var i = ye.extend(new ye.Event, n, { type: e, isSimulated: !0 });
                ye.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault() } }, ye.removeEvent = le.removeEventListener ? function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) } : function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n)) }, ye.Event = function(e, t) {
            return this instanceof ye.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? S : C) : this.type = e, t && ye.extend(this, t), this.timeStamp = e && e.timeStamp || ye.now(), void(this[ye.expando] = !0)) : new ye.Event(e, t) }, ye.Event.prototype = { constructor: ye.Event, isDefaultPrevented: C, isPropagationStopped: C, isImmediatePropagationStopped: C, preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = S, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1) }, stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = S, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0) }, stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = S, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation() } }, ye.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) { ye.event.special[e] = { delegateType: t, bindType: t, handle: function(e) {
                    var n, i = this,
                        r = e.relatedTarget,
                        a = e.handleObj;
                    return r && (r === i || ye.contains(i, r)) || (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n } } }), ge.submit || (ye.event.special.submit = { setup: function() {
                return !ye.nodeName(this, "form") && void ye.event.add(this, "click._submit keypress._submit", function(e) {
                    var t = e.target,
                        n = ye.nodeName(t, "input") || ye.nodeName(t, "button") ? ye.prop(t, "form") : void 0;
                    n && !ye._data(n, "submit") && (ye.event.add(n, "submit._submit", function(e) { e._submitBubble = !0 }), ye._data(n, "submit", !0)) }) }, postDispatch: function(e) { e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && ye.event.simulate("submit", this.parentNode, e)) }, teardown: function() {
                return !ye.nodeName(this, "form") && void ye.event.remove(this, "._submit") } }), ge.change || (ye.event.special.change = { setup: function() {
                return Qe.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (ye.event.add(this, "propertychange._change", function(e) { "checked" === e.originalEvent.propertyName && (this._justChanged = !0) }), ye.event.add(this, "click._change", function(e) { this._justChanged && !e.isTrigger && (this._justChanged = !1), ye.event.simulate("change", this, e) })), !1) : void ye.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Qe.test(t.nodeName) && !ye._data(t, "change") && (ye.event.add(t, "change._change", function(e) {!this.parentNode || e.isSimulated || e.isTrigger || ye.event.simulate("change", this.parentNode, e) }), ye._data(t, "change", !0)) }) }, handle: function(e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0 }, teardown: function() {
                return ye.event.remove(this, "._change"), !Qe.test(this.nodeName) } }), ge.focusin || ye.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
            var n = function(e) { ye.event.simulate(t, e.target, ye.event.fix(e)) };
            ye.event.special[t] = { setup: function() {
                    var i = this.ownerDocument || this,
                        r = ye._data(i, t);
                    r || i.addEventListener(e, n, !0), ye._data(i, t, (r || 0) + 1) }, teardown: function() {
                    var i = this.ownerDocument || this,
                        r = ye._data(i, t) - 1;
                    r ? ye._data(i, t, r) : (i.removeEventListener(e, n, !0), ye._removeData(i, t)) } } }), ye.fn.extend({ on: function(e, t, n, i) {
                return k(this, e, t, n, i) }, one: function(e, t, n, i) {
                return k(this, e, t, n, i, 1) }, off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ye(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this }
                return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = C), this.each(function() { ye.event.remove(this, e, n, t) }) }, trigger: function(e, t) {
                return this.each(function() { ye.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) {
                var n = this[0];
                return n ? ye.event.trigger(e, t, n, !0) : void 0 } });
        var rt = / jQuery\d+="(?:null|\d+)"/g,
            at = new RegExp("<(?:" + Ue + ")[\\s/>]", "i"),
            st = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            ot = /<script|<style|<link/i,
            lt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ct = /^true\/(.*)/,
            ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            pt = y(le),
            dt = pt.appendChild(le.createElement("div"));
        ye.extend({ htmlPrefilter: function(e) {
                return e.replace(st, "<$1></$2>") }, clone: function(e, t, n) {
                var i, r, a, s, o, l = ye.contains(e.ownerDocument, e);
                if (ge.html5Clone || ye.isXMLDoc(e) || !at.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (dt.innerHTML = e.outerHTML, dt.removeChild(a = dt.firstChild)), !(ge.noCloneEvent && ge.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ye.isXMLDoc(e)))
                    for (i = w(a), o = w(e), s = 0; null != (r = o[s]); ++s) i[s] && z(r, i[s]);
                if (t)
                    if (n)
                        for (o = o || w(e), i = i || w(a), s = 0; null != (r = o[s]); s++) D(r, i[s]);
                    else D(e, a);
                return i = w(a, "script"), i.length > 0 && x(i, !l && w(e, "script")), i = o = r = null, a }, cleanData: function(e, t) {
                for (var n, i, r, a, s = 0, o = ye.expando, l = ye.cache, c = ge.attributes, u = ye.event.special; null != (n = e[s]); s++)
                    if ((t || Oe(n)) && (r = n[o], a = r && l[r])) {
                        if (a.events)
                            for (i in a.events) u[i] ? ye.event.remove(n, i) : ye.removeEvent(n, i, a.handle);
                        l[r] && (delete l[r], c || "undefined" == typeof n.removeAttribute ? n[o] = void 0 : n.removeAttribute(o), oe.push(r)) } } }), ye.fn.extend({ domManip: A, detach: function(e) {
                return L(this, e, !0) }, remove: function(e) {
                return L(this, e) }, text: function(e) {
                return qe(this, function(e) {
                    return void 0 === e ? ye.text(this) : this.empty().append((this[0] && this[0].ownerDocument || le).createTextNode(e)) }, null, e, arguments.length) }, append: function() {
                return A(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = P(this, e);
                        t.appendChild(e) } }) }, prepend: function() {
                return A(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = P(this, e);
                        t.insertBefore(e, t.firstChild) } }) }, before: function() {
                return A(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function() {
                return A(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && ye.cleanData(w(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && ye.nodeName(e, "select") && (e.options.length = 0) }
                return this }, clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return ye.clone(this, e, t) }) }, html: function(e) {
                return qe(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(rt, "") : void 0;
                    if ("string" == typeof e && !ot.test(e) && (ge.htmlSerialize || !at.test(e)) && (ge.leadingWhitespace || !$e.test(e)) && !Ke[(Ge.exec(e) || ["", ""])[1].toLowerCase()]) { e = ye.htmlPrefilter(e);
                        try {
                            for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (ye.cleanData(w(t, !1)), t.innerHTML = e);
                            t = 0 } catch (e) {} }
                    t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function() {
                var e = [];
                return A(this, arguments, function(t) {
                    var n = this.parentNode;
                    ye.inArray(this, e) < 0 && (ye.cleanData(w(this)), n && n.replaceChild(t, this)) }, e) } }), ye.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { ye.fn[e] = function(e) {
                for (var n, i = 0, r = [], a = ye(e), s = a.length - 1; s >= i; i++) n = i === s ? this : this.clone(!0), ye(a[i])[t](n), pe.apply(r, n.get());
                return this.pushStack(r) } });
        var ht, ft = { HTML: "block", BODY: "block" },
            mt = /^margin/,
            gt = new RegExp("^(" + _e + ")(?!px)[a-z%]+$", "i"),
            vt = function(e, t, n, i) {
                var r, a, s = {};
                for (a in t) s[a] = e.style[a], e.style[a] = t[a];
                r = n.apply(e, i || []);
                for (a in t) e.style[a] = s[a];
                return r },
            yt = le.documentElement;
        ! function() {
            function e() {
                var e, u, p = le.documentElement;
                p.appendChild(l), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", t = i = o = !1, n = s = !0, a.getComputedStyle && (u = a.getComputedStyle(c), t = "1%" !== (u || {}).top, o = "2px" === (u || {}).marginLeft, i = "4px" === (u || { width: "4px" }).width, c.style.marginRight = "50%", n = "4px" === (u || { marginRight: "4px" }).marginRight, e = c.appendChild(le.createElement("div")), e.style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", c.style.width = "1px", s = !parseFloat((a.getComputedStyle(e) || {}).marginRight), c.removeChild(e)), c.style.display = "none", r = 0 === c.getClientRects().length, r && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c.childNodes[0].style.borderCollapse = "separate", e = c.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", r = 0 === e[0].offsetHeight, r && (e[0].style.display = "", e[1].style.display = "none", r = 0 === e[0].offsetHeight)), p.removeChild(l) }
            var t, n, i, r, s, o, l = le.createElement("div"),
                c = le.createElement("div");
            c.style && (c.style.cssText = "float:left;opacity:.5", ge.opacity = "0.5" === c.style.opacity, ge.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", ge.clearCloneStyle = "content-box" === c.style.backgroundClip, l = le.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", l.appendChild(c), ge.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, ye.extend(ge, { reliableHiddenOffsets: function() {
                    return null == t && e(), r }, boxSizingReliable: function() {
                    return null == t && e(), i }, pixelMarginRight: function() {
                    return null == t && e(), n }, pixelPosition: function() {
                    return null == t && e(), t }, reliableMarginRight: function() {
                    return null == t && e(), s }, reliableMarginLeft: function() {
                    return null == t && e(), o } })) }();
        var wt, xt, bt = /^(top|right|bottom|left)$/;
        a.getComputedStyle ? (wt = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = a), t.getComputedStyle(e) }, xt = function(e, t, n) {
            var i, r, a, s, o = e.style;
            return n = n || wt(e), s = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== s && void 0 !== s || ye.contains(e.ownerDocument, e) || (s = ye.style(e, t)), n && !ge.pixelMarginRight() && gt.test(s) && mt.test(t) && (i = o.width, r = o.minWidth, a = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = n.width, o.width = i, o.minWidth = r, o.maxWidth = a), void 0 === s ? s : s + "" }) : yt.currentStyle && (wt = function(e) {
            return e.currentStyle }, xt = function(e, t, n) {
            var i, r, a, s, o = e.style;
            return n = n || wt(e), s = n ? n[t] : void 0, null == s && o && o[t] && (s = o[t]), gt.test(s) && !bt.test(t) && (i = o.left, r = e.runtimeStyle, a = r && r.left, a && (r.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : s, s = o.pixelLeft + "px", o.left = i, a && (r.left = a)), void 0 === s ? s : s + "" || "auto" });
        var Tt = /alpha\([^)]*\)/i,
            St = /opacity\s*=\s*([^)]*)/i,
            Ct = /^(none|table(?!-c[ea]).+)/,
            Et = new RegExp("^(" + _e + ")(.*)$", "i"),
            kt = { position: "absolute", visibility: "hidden", display: "block" },
            Pt = { letterSpacing: "0", fontWeight: "400" },
            Mt = ["Webkit", "O", "Moz", "ms"],
            Nt = le.createElement("div").style;
        ye.extend({ cssHooks: { opacity: { get: function(e, t) {
                        if (t) {
                            var n = xt(e, "opacity");
                            return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: ge.cssFloat ? "cssFloat" : "styleFloat" }, style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, a, s, o = ye.camelCase(t),
                        l = e.style;
                    if (t = ye.cssProps[o] || (ye.cssProps[o] = O(o) || o), s = ye.cssHooks[t] || ye.cssHooks[o], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : l[t];
                    if (a = typeof n, "string" === a && (r = We.exec(n)) && r[1] && (n = v(e, t, r), a = "number"), null != n && n === n && ("number" === a && (n += r && r[3] || (ye.cssNumber[o] ? "" : "px")), ge.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(e, n, i))))) try { l[t] = n } catch (e) {} } }, css: function(e, t, n, i) {
                var r, a, s, o = ye.camelCase(t);
                return t = ye.cssProps[o] || (ye.cssProps[o] = O(o) || o), s = ye.cssHooks[t] || ye.cssHooks[o], s && "get" in s && (a = s.get(e, !0, n)), void 0 === a && (a = xt(e, t, i)), "normal" === a && t in Pt && (a = Pt[t]), "" === n || n ? (r = parseFloat(a), n === !0 || isFinite(r) ? r || 0 : a) : a } }), ye.each(["height", "width"], function(e, t) { ye.cssHooks[t] = { get: function(e, n, i) {
                    return n ? Ct.test(ye.css(e, "display")) && 0 === e.offsetWidth ? vt(e, kt, function() {
                        return W(e, t, i) }) : W(e, t, i) : void 0 }, set: function(e, n, i) {
                    var r = i && wt(e);
                    return X(e, n, i ? _(e, t, i, ge.boxSizing && "border-box" === ye.css(e, "boxSizing", !1, r), r) : 0) } } }), ge.opacity || (ye.cssHooks.opacity = { get: function(e, t) {
                return St.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" }, set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    r = ye.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    a = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === ye.trim(a.replace(Tt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = Tt.test(a) ? a.replace(Tt, r) : a + " " + r) } }), ye.cssHooks.marginRight = I(ge.reliableMarginRight, function(e, t) {
            return t ? vt(e, { display: "inline-block" }, xt, [e, "marginRight"]) : void 0 }), ye.cssHooks.marginLeft = I(ge.reliableMarginLeft, function(e, t) {
            return t ? (parseFloat(xt(e, "marginLeft")) || (ye.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - vt(e, { marginLeft: 0 }, function() {
                return e.getBoundingClientRect().left }) : 0)) + "px" : void 0 }), ye.each({ margin: "", padding: "", border: "Width" }, function(e, t) { ye.cssHooks[e + t] = { expand: function(n) {
                    for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + Ye[i] + t] = a[i] || a[i - 2] || a[0];
                    return r } }, mt.test(e) || (ye.cssHooks[e + t].set = X) }), ye.fn.extend({ css: function(e, t) {
                return qe(this, function(e, t, n) {
                    var i, r, a = {},
                        s = 0;
                    if (ye.isArray(t)) {
                        for (i = wt(e), r = t.length; r > s; s++) a[t[s]] = ye.css(e, t[s], !1, i);
                        return a }
                    return void 0 !== n ? ye.style(e, t, n) : ye.css(e, t) }, e, t, arguments.length > 1) }, show: function() {
                return j(this, !0) }, hide: function() {
                return j(this) }, toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { Re(this) ? ye(this).show() : ye(this).hide() }) } }), ye.Tween = Y, Y.prototype = { constructor: Y, init: function(e, t, n, i, r, a) { this.elem = e, this.prop = n, this.easing = r || ye.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (ye.cssNumber[n] ? "" : "px") }, cur: function() {
                var e = Y.propHooks[this.prop];
                return e && e.get ? e.get(this) : Y.propHooks._default.get(this) }, run: function(e) {
                var t, n = Y.propHooks[this.prop];
                return this.options.duration ? this.pos = t = ye.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Y.propHooks._default.set(this), this } }, Y.prototype.init.prototype = Y.prototype, Y.propHooks = { _default: { get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ye.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) }, set: function(e) { ye.fx.step[e.prop] ? ye.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ye.cssProps[e.prop]] && !ye.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ye.style(e.elem, e.prop, e.now + e.unit) } } }, Y.propHooks.scrollTop = Y.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, ye.easing = { linear: function(e) {
                return e }, swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, ye.fx = Y.prototype.init, ye.fx.step = {};
        var Dt, zt, At = /^(?:toggle|show|hide)$/,
            Lt = /queueHooks$/;
        ye.Animation = ye.extend($, { tweeners: { "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return v(n.elem, e, We.exec(t), n), n }] }, tweener: function(e, t) { ye.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(He);
                    for (var n, i = 0, r = e.length; r > i; i++) n = e[i], $.tweeners[n] = $.tweeners[n] || [], $.tweeners[n].unshift(t) }, prefilters: [G], prefilter: function(e, t) { t ? $.prefilters.unshift(e) : $.prefilters.push(e) } }), ye.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? ye.extend({}, e) : { complete: n || !n && t || ye.isFunction(e) && e, duration: e, easing: n && t || t && !ye.isFunction(t) && t };
                return i.duration = ye.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ye.fx.speeds ? ye.fx.speeds[i.duration] : ye.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() { ye.isFunction(i.old) && i.old.call(this), i.queue && ye.dequeue(this, i.queue) }, i }, ye.fn.extend({ fadeTo: function(e, t, n, i) {
                    return this.filter(Re).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i) }, animate: function(e, t, n, i) {
                    var r = ye.isEmptyObject(e),
                        a = ye.speed(t, n, i),
                        s = function() {
                            var t = $(this, ye.extend({}, e), a);
                            (r || ye._data(this, "finish")) && t.stop(!0) };
                    return s.finish = s, r || a.queue === !1 ? this.each(s) : this.queue(a.queue, s) }, stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n) };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            r = null != e && e + "queueHooks",
                            a = ye.timers,
                            s = ye._data(this);
                        if (r) s[r] && s[r].stop && i(s[r]);
                        else
                            for (r in s) s[r] && s[r].stop && Lt.test(r) && i(s[r]);
                        for (r = a.length; r--;) a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(n), t = !1, a.splice(r, 1));!t && n || ye.dequeue(this, e) }) }, finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = ye._data(this),
                            i = n[e + "queue"],
                            r = n[e + "queueHooks"],
                            a = ye.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, ye.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                        for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish }) } }), ye.each(["toggle", "show", "hide"], function(e, t) {
                var n = ye.fn[t];
                ye.fn[t] = function(e, i, r) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(q(t, !0), e, i, r) } }), ye.each({ slideDown: q("show"), slideUp: q("hide"), slideToggle: q("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { ye.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i) } }), ye.timers = [], ye.fx.tick = function() {
                var e, t = ye.timers,
                    n = 0;
                for (Dt = ye.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
                t.length || ye.fx.stop(), Dt = void 0 }, ye.fx.timer = function(e) { ye.timers.push(e), e() ? ye.fx.start() : ye.timers.pop() }, ye.fx.interval = 13, ye.fx.start = function() { zt || (zt = a.setInterval(ye.fx.tick, ye.fx.interval)) }, ye.fx.stop = function() { a.clearInterval(zt), zt = null }, ye.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ye.fn.delay = function(e, t) {
                return e = ye.fx ? ye.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var i = a.setTimeout(t, e);
                    n.stop = function() { a.clearTimeout(i) } }) },
            function() {
                var e, t = le.createElement("input"),
                    n = le.createElement("div"),
                    i = le.createElement("select"),
                    r = i.appendChild(le.createElement("option"));
                n = le.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", ge.getSetAttribute = "t" !== n.className, ge.style = /top/.test(e.getAttribute("style")), ge.hrefNormalized = "/a" === e.getAttribute("href"), ge.checkOn = !!t.value, ge.optSelected = r.selected, ge.enctype = !!le.createElement("form").enctype, i.disabled = !0, ge.optDisabled = !r.disabled, t = le.createElement("input"), t.setAttribute("value", ""), ge.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ge.radioValue = "t" === t.value }();
        var Ht = /\r/g,
            Bt = /[\x20\t\r\n\f]+/g;
        ye.fn.extend({ val: function(e) {
                var t, n, i, r = this[0];
                return arguments.length ? (i = ye.isFunction(e), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = i ? e.call(this, n, ye(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : ye.isArray(r) && (r = ye.map(r, function(e) {
                        return null == e ? "" : e + "" })), t = ye.valHooks[this.type] || ye.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r)) })) : r ? (t = ye.valHooks[r.type] || ye.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(Ht, "") : null == n ? "" : n)) : void 0 } }), ye.extend({
            valHooks: {
                option: { get: function(e) {
                        var t = ye.find.attr(e, "value");
                        return null != t ? t : ye.trim(ye.text(e)).replace(Bt, " ") } },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, a = "select-one" === e.type || 0 > r, s = a ? null : [], o = a ? r + 1 : i.length, l = 0 > r ? o : a ? r : 0; o > l; l++)
                            if (n = i[l], (n.selected || l === r) && (ge.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ye.nodeName(n.parentNode, "optgroup"))) {
                                if (t = ye(n).val(),
                                    a) return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, a = ye.makeArray(t), s = r.length; s--;)
                            if (i = r[s], ye.inArray(ye.valHooks.option.get(i), a) > -1) try { i.selected = n = !0 } catch (e) { i.scrollHeight } else i.selected = !1;
                        return n || (e.selectedIndex = -1), r }
                }
            }
        }), ye.each(["radio", "checkbox"], function() { ye.valHooks[this] = { set: function(e, t) {
                    return ye.isArray(t) ? e.checked = ye.inArray(ye(e).val(), t) > -1 : void 0 } }, ge.checkOn || (ye.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value }) });
        var It, Ot, jt = ye.expr.attrHandle,
            Xt = /^(?:checked|selected)$/i,
            _t = ge.getSetAttribute,
            Wt = ge.input;
        ye.fn.extend({ attr: function(e, t) {
                return qe(this, ye.attr, e, t, arguments.length > 1) }, removeAttr: function(e) {
                return this.each(function() { ye.removeAttr(this, e) }) } }), ye.extend({ attr: function(e, t, n) {
                var i, r, a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a) return "undefined" == typeof e.getAttribute ? ye.prop(e, t, n) : (1 === a && ye.isXMLDoc(e) || (t = t.toLowerCase(), r = ye.attrHooks[t] || (ye.expr.match.bool.test(t) ? Ot : It)), void 0 !== n ? null === n ? void ye.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = ye.find.attr(e, t), null == i ? void 0 : i)) }, attrHooks: { type: { set: function(e, t) {
                        if (!ge.radioValue && "radio" === t && ye.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function(e, t) {
                var n, i, r = 0,
                    a = t && t.match(He);
                if (a && 1 === e.nodeType)
                    for (; n = a[r++];) i = ye.propFix[n] || n, ye.expr.match.bool.test(n) ? Wt && _t || !Xt.test(n) ? e[i] = !1 : e[ye.camelCase("default-" + n)] = e[i] = !1 : ye.attr(e, n, ""), e.removeAttribute(_t ? n : i) } }), Ot = { set: function(e, t, n) {
                return t === !1 ? ye.removeAttr(e, n) : Wt && _t || !Xt.test(n) ? e.setAttribute(!_t && ye.propFix[n] || n, n) : e[ye.camelCase("default-" + n)] = e[n] = !0, n } }, ye.each(ye.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = jt[t] || ye.find.attr;
            Wt && _t || !Xt.test(t) ? jt[t] = function(e, t, i) {
                var r, a;
                return i || (a = jt[t], jt[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, jt[t] = a), r } : jt[t] = function(e, t, n) {
                return n ? void 0 : e[ye.camelCase("default-" + t)] ? t.toLowerCase() : null } }), Wt && _t || (ye.attrHooks.value = { set: function(e, t, n) {
                return ye.nodeName(e, "input") ? void(e.defaultValue = t) : It && It.set(e, t, n) } }), _t || (It = { set: function(e, t, n) {
                var i = e.getAttributeNode(n);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0 } }, jt.id = jt.name = jt.coords = function(e, t, n) {
            var i;
            return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null }, ye.valHooks.button = { get: function(e, t) {
                var n = e.getAttributeNode(t);
                return n && n.specified ? n.value : void 0 }, set: It.set }, ye.attrHooks.contenteditable = { set: function(e, t, n) { It.set(e, "" !== t && t, n) } }, ye.each(["width", "height"], function(e, t) { ye.attrHooks[t] = { set: function(e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0 } } })), ge.style || (ye.attrHooks.style = { get: function(e) {
                return e.style.cssText || void 0 }, set: function(e, t) {
                return e.style.cssText = t + "" } });
        var Yt = /^(?:input|select|textarea|button|object)$/i,
            Rt = /^(?:a|area)$/i;
        ye.fn.extend({ prop: function(e, t) {
                return qe(this, ye.prop, e, t, arguments.length > 1) }, removeProp: function(e) {
                return e = ye.propFix[e] || e, this.each(function() {
                    try { this[e] = void 0, delete this[e] } catch (e) {} }) } }), ye.extend({ prop: function(e, t, n) {
                var i, r, a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a) return 1 === a && ye.isXMLDoc(e) || (t = ye.propFix[t] || t, r = ye.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t] }, propHooks: { tabIndex: { get: function(e) {
                        var t = ye.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Yt.test(e.nodeName) || Rt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), ge.hrefNormalized || ye.each(["href", "src"], function(e, t) { ye.propHooks[t] = { get: function(e) {
                    return e.getAttribute(t, 4) } } }), ge.optSelected || (ye.propHooks.selected = { get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null }, set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), ye.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { ye.propFix[this.toLowerCase()] = this }), ge.enctype || (ye.propFix.enctype = "encoding");
        var qt = /[\t\r\n\f]/g;
        ye.fn.extend({ addClass: function(e) {
                var t, n, i, r, a, s, o, l = 0;
                if (ye.isFunction(e)) return this.each(function(t) { ye(this).addClass(e.call(this, t, U(this))) });
                if ("string" == typeof e && e)
                    for (t = e.match(He) || []; n = this[l++];)
                        if (r = U(n), i = 1 === n.nodeType && (" " + r + " ").replace(qt, " ")) {
                            for (s = 0; a = t[s++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                            o = ye.trim(i), r !== o && ye.attr(n, "class", o) }
                return this }, removeClass: function(e) {
                var t, n, i, r, a, s, o, l = 0;
                if (ye.isFunction(e)) return this.each(function(t) { ye(this).removeClass(e.call(this, t, U(this))) });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(He) || []; n = this[l++];)
                        if (r = U(n), i = 1 === n.nodeType && (" " + r + " ").replace(qt, " ")) {
                            for (s = 0; a = t[s++];)
                                for (; i.indexOf(" " + a + " ") > -1;) i = i.replace(" " + a + " ", " ");
                            o = ye.trim(i), r !== o && ye.attr(n, "class", o) }
                return this }, toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ye.isFunction(e) ? this.each(function(n) { ye(this).toggleClass(e.call(this, n, U(this), t), t) }) : this.each(function() {
                    var t, i, r, a;
                    if ("string" === n)
                        for (i = 0, r = ye(this), a = e.match(He) || []; t = a[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else void 0 !== e && "boolean" !== n || (t = U(this), t && ye._data(this, "__className__", t), ye.attr(this, "class", t || e === !1 ? "" : ye._data(this, "__className__") || "")) }) }, hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + U(n) + " ").replace(qt, " ").indexOf(t) > -1) return !0;
                return !1 } }), ye.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) { ye.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), ye.fn.extend({ hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e) } });
        var Ft = a.location,
            Gt = ye.now(),
            Vt = /\?/,
            $t = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        ye.parseJSON = function(e) {
            if (a.JSON && a.JSON.parse) return a.JSON.parse(e + "");
            var t, n = null,
                i = ye.trim(e + "");
            return i && !ye.trim(i.replace($t, function(e, i, r, a) {
                return t && i && (n = 0), 0 === n ? e : (t = r || i, n += !a - !r, "") })) ? Function("return " + i)() : ye.error("Invalid JSON: " + e) }, ye.parseXML = function(e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try { a.DOMParser ? (n = new a.DOMParser, t = n.parseFromString(e, "text/xml")) : (t = new a.ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) } catch (e) { t = void 0 }
            return t && t.documentElement && !t.getElementsByTagName("parsererror").length || ye.error("Invalid XML: " + e), t };
        var Ut = /#.*$/,
            Kt = /([?&])_=[^&]*/,
            Zt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Jt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Qt = /^(?:GET|HEAD)$/,
            en = /^\/\//,
            tn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            nn = {},
            rn = {},
            an = "*/".concat("*"),
            sn = Ft.href,
            on = tn.exec(sn.toLowerCase()) || [];
        ye.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: sn, type: "GET", isLocal: Jt.test(on[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": an, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": ye.parseJSON, "text xml": ye.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(e, t) {
                return t ? J(J(e, ye.ajaxSettings), t) : J(ye.ajaxSettings, e) }, ajaxPrefilter: K(nn), ajaxTransport: K(rn), ajax: function(e, t) {
                function n(e, t, n, i) {
                    var r, p, y, w, b, S = t;
                    2 !== x && (x = 2, l && a.clearTimeout(l), u = void 0, o = i || "", T.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, n && (w = Q(d, T, n)), w = ee(d, w, T, r), r ? (d.ifModified && (b = T.getResponseHeader("Last-Modified"), b && (ye.lastModified[s] = b), b = T.getResponseHeader("etag"), b && (ye.etag[s] = b)), 204 === e || "HEAD" === d.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = w.state, p = w.data, y = w.error, r = !y)) : (y = S, !e && S || (S = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (t || S) + "", r ? m.resolveWith(h, [p, S, T]) : m.rejectWith(h, [T, S, y]), T.statusCode(v), v = void 0, c && f.trigger(r ? "ajaxSuccess" : "ajaxError", [T, d, r ? p : y]), g.fireWith(h, [T, S]), c && (f.trigger("ajaxComplete", [T, d]), --ye.active || ye.event.trigger("ajaxStop"))) } "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, r, s, o, l, c, u, p, d = ye.ajaxSetup({}, t),
                    h = d.context || d,
                    f = d.context && (h.nodeType || h.jquery) ? ye(h) : ye.event,
                    m = ye.Deferred(),
                    g = ye.Callbacks("once memory"),
                    v = d.statusCode || {},
                    y = {},
                    w = {},
                    x = 0,
                    b = "canceled",
                    T = { readyState: 0, getResponseHeader: function(e) {
                            var t;
                            if (2 === x) {
                                if (!p)
                                    for (p = {}; t = Zt.exec(o);) p[t[1].toLowerCase()] = t[2];
                                t = p[e.toLowerCase()] }
                            return null == t ? null : t }, getAllResponseHeaders: function() {
                            return 2 === x ? o : null }, setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return x || (e = w[n] = w[n] || e, y[e] = t), this }, overrideMimeType: function(e) {
                            return x || (d.mimeType = e), this }, statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > x)
                                    for (t in e) v[t] = [v[t], e[t]];
                                else T.always(e[T.status]);
                            return this }, abort: function(e) {
                            var t = e || b;
                            return u && u.abort(t), n(0, t), this } };
                if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, d.url = ((e || d.url || sn) + "").replace(Ut, "").replace(en, on[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = ye.trim(d.dataType || "*").toLowerCase().match(He) || [""], null == d.crossDomain && (i = tn.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === on[1] && i[2] === on[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (on[3] || ("http:" === on[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ye.param(d.data, d.traditional)), Z(nn, d, t, T), 2 === x) return T;
                c = ye.event && d.global, c && 0 === ye.active++ && ye.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Qt.test(d.type), s = d.url, d.hasContent || (d.data && (s = d.url += (Vt.test(s) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Kt.test(s) ? s.replace(Kt, "$1_=" + Gt++) : s + (Vt.test(s) ? "&" : "?") + "_=" + Gt++)), d.ifModified && (ye.lastModified[s] && T.setRequestHeader("If-Modified-Since", ye.lastModified[s]), ye.etag[s] && T.setRequestHeader("If-None-Match", ye.etag[s])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", d.contentType), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + an + "; q=0.01" : "") : d.accepts["*"]);
                for (r in d.headers) T.setRequestHeader(r, d.headers[r]);
                if (d.beforeSend && (d.beforeSend.call(h, T, d) === !1 || 2 === x)) return T.abort();
                b = "abort";
                for (r in { success: 1, error: 1, complete: 1 }) T[r](d[r]);
                if (u = Z(rn, d, t, T)) {
                    if (T.readyState = 1, c && f.trigger("ajaxSend", [T, d]), 2 === x) return T;
                    d.async && d.timeout > 0 && (l = a.setTimeout(function() { T.abort("timeout") }, d.timeout));
                    try { x = 1, u.send(y, n) } catch (e) {
                        if (!(2 > x)) throw e;
                        n(-1, e) } } else n(-1, "No Transport");
                return T }, getJSON: function(e, t, n) {
                return ye.get(e, t, n, "json") }, getScript: function(e, t) {
                return ye.get(e, void 0, t, "script") } }), ye.each(["get", "post"], function(e, t) { ye[t] = function(e, n, i, r) {
                return ye.isFunction(n) && (r = r || i, i = n, n = void 0), ye.ajax(ye.extend({ url: e, type: t, dataType: r, data: n, success: i }, ye.isPlainObject(e) && e)) } }), ye._evalUrl = function(e) {
            return ye.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 }) }, ye.fn.extend({ wrapAll: function(e) {
                if (ye.isFunction(e)) return this.each(function(t) { ye(this).wrapAll(e.call(this, t)) });
                if (this[0]) {
                    var t = ye(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e }).append(this) }
                return this }, wrapInner: function(e) {
                return ye.isFunction(e) ? this.each(function(t) { ye(this).wrapInner(e.call(this, t)) }) : this.each(function() {
                    var t = ye(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e) }) }, wrap: function(e) {
                var t = ye.isFunction(e);
                return this.each(function(n) { ye(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap: function() {
                return this.parent().each(function() { ye.nodeName(this, "body") || ye(this).replaceWith(this.childNodes) }).end() } }), ye.expr.filters.hidden = function(e) {
            return ge.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : ne(e) }, ye.expr.filters.visible = function(e) {
            return !ye.expr.filters.hidden(e) };
        var ln = /%20/g,
            cn = /\[\]$/,
            un = /\r?\n/g,
            pn = /^(?:submit|button|image|reset|file)$/i,
            dn = /^(?:input|select|textarea|keygen)/i;
        ye.param = function(e, t) {
            var n, i = [],
                r = function(e, t) { t = ye.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) };
            if (void 0 === t && (t = ye.ajaxSettings && ye.ajaxSettings.traditional), ye.isArray(e) || e.jquery && !ye.isPlainObject(e)) ye.each(e, function() { r(this.name, this.value) });
            else
                for (n in e) ie(n, e[n], t, r);
            return i.join("&").replace(ln, "+") }, ye.fn.extend({ serialize: function() {
                return ye.param(this.serializeArray()) }, serializeArray: function() {
                return this.map(function() {
                    var e = ye.prop(this, "elements");
                    return e ? ye.makeArray(e) : this }).filter(function() {
                    var e = this.type;
                    return this.name && !ye(this).is(":disabled") && dn.test(this.nodeName) && !pn.test(e) && (this.checked || !Fe.test(e)) }).map(function(e, t) {
                    var n = ye(this).val();
                    return null == n ? null : ye.isArray(n) ? ye.map(n, function(e) {
                        return { name: t.name, value: e.replace(un, "\r\n") } }) : { name: t.name, value: n.replace(un, "\r\n") } }).get() } }), ye.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
            return this.isLocal ? ae() : le.documentMode > 8 ? re() : /^(get|post|head|put|delete|options)$/i.test(this.type) && re() || ae() } : re;
        var hn = 0,
            fn = {},
            mn = ye.ajaxSettings.xhr();
        a.attachEvent && a.attachEvent("onunload", function() {
            for (var e in fn) fn[e](void 0, !0) }), ge.cors = !!mn && "withCredentials" in mn, mn = ge.ajax = !!mn, mn && ye.ajaxTransport(function(e) {
            if (!e.crossDomain || ge.cors) {
                var t;
                return { send: function(n, i) {
                        var r, s = e.xhr(),
                            o = ++hn;
                        if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (r in e.xhrFields) s[r] = e.xhrFields[r];
                        e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (r in n) void 0 !== n[r] && s.setRequestHeader(r, n[r] + "");
                        s.send(e.hasContent && e.data || null), t = function(n, r) {
                            var a, l, c;
                            if (t && (r || 4 === s.readyState))
                                if (delete fn[o], t = void 0, s.onreadystatechange = ye.noop, r) 4 !== s.readyState && s.abort();
                                else { c = {}, a = s.status, "string" == typeof s.responseText && (c.text = s.responseText);
                                    try { l = s.statusText } catch (e) { l = "" }
                                    a || !e.isLocal || e.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404 }
                            c && i(a, l, c, s.getAllResponseHeaders()) }, e.async ? 4 === s.readyState ? a.setTimeout(t) : s.onreadystatechange = fn[o] = t : t() }, abort: function() { t && t(void 0, !0) } } } }), ye.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) {
                    return ye.globalEval(e), e } } }), ye.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), ye.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n = le.head || ye("head")[0] || le.documentElement;
                return { send: function(i, r) { t = le.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success")) }, n.insertBefore(t, n.firstChild) }, abort: function() { t && t.onload(void 0, !0) } } } });
        var gn = [],
            vn = /(=)\?(?=&|$)|\?\?/;
        ye.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
                var e = gn.pop() || ye.expando + "_" + Gt++;
                return this[e] = !0, e } }), ye.ajaxPrefilter("json jsonp", function(e, t, n) {
            var i, r, s, o = e.jsonp !== !1 && (vn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && vn.test(e.data) && "data");
            return o || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = ye.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(vn, "$1" + i) : e.jsonp !== !1 && (e.url += (Vt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                return s || ye.error(i + " was not called"), s[0] }, e.dataTypes[0] = "json", r = a[i], a[i] = function() { s = arguments }, n.always(function() { void 0 === r ? ye(a).removeProp(i) : a[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, gn.push(i)), s && ye.isFunction(r) && r(s[0]), s = r = void 0 }), "script") : void 0 }), ye.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null; "boolean" == typeof t && (n = t, t = !1), t = t || le;
            var i = Pe.exec(e),
                r = !n && [];
            return i ? [t.createElement(i[1])] : (i = T([e], t, r), r && r.length && ye(r).remove(), ye.merge([], i.childNodes)) };
        var yn = ye.fn.load;
        ye.fn.load = function(e, t, n) {
            if ("string" != typeof e && yn) return yn.apply(this, arguments);
            var i, r, a, s = this,
                o = e.indexOf(" ");
            return o > -1 && (i = ye.trim(e.slice(o, e.length)), e = e.slice(0, o)), ye.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && ye.ajax({ url: e, type: r || "GET", dataType: "html", data: t }).done(function(e) { a = arguments, s.html(i ? ye("<div>").append(ye.parseHTML(e)).find(i) : e) }).always(n && function(e, t) { s.each(function() { n.apply(this, a || [e.responseText, t, e]) }) }), this }, ye.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { ye.fn[t] = function(e) {
                return this.on(t, e) } }), ye.expr.filters.animated = function(e) {
            return ye.grep(ye.timers, function(t) {
                return e === t.elem }).length }, ye.offset = { setOffset: function(e, t, n) {
                var i, r, a, s, o, l, c, u = ye.css(e, "position"),
                    p = ye(e),
                    d = {}; "static" === u && (e.style.position = "relative"), o = p.offset(), a = ye.css(e, "top"), l = ye.css(e, "left"), c = ("absolute" === u || "fixed" === u) && ye.inArray("auto", [a, l]) > -1, c ? (i = p.position(), s = i.top, r = i.left) : (s = parseFloat(a) || 0, r = parseFloat(l) || 0), ye.isFunction(t) && (t = t.call(e, n, ye.extend({}, o))), null != t.top && (d.top = t.top - o.top + s), null != t.left && (d.left = t.left - o.left + r), "using" in t ? t.using.call(e, d) : p.css(d) } }, ye.fn.extend({ offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) { ye.offset.setOffset(this, e, t) });
                var t, n, i = { top: 0, left: 0 },
                    r = this[0],
                    a = r && r.ownerDocument;
                return a ? (t = a.documentElement, ye.contains(t, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = se(a), { top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0), left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0) }) : i) : void 0 }, position: function() {
                if (this[0]) {
                    var e, t, n = { top: 0, left: 0 },
                        i = this[0];
                    return "fixed" === ye.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ye.nodeName(e[0], "html") || (n = e.offset()), n.top += ye.css(e[0], "borderTopWidth", !0), n.left += ye.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - ye.css(i, "marginTop", !0), left: t.left - n.left - ye.css(i, "marginLeft", !0) } } }, offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && !ye.nodeName(e, "html") && "static" === ye.css(e, "position");) e = e.offsetParent;
                    return e || yt }) } }), ye.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
            var n = /Y/.test(t);
            ye.fn[e] = function(i) {
                return qe(this, function(e, i, r) {
                    var a = se(e);
                    return void 0 === r ? a ? t in a ? a[t] : a.document.documentElement[i] : e[i] : void(a ? a.scrollTo(n ? ye(a).scrollLeft() : r, n ? r : ye(a).scrollTop()) : e[i] = r) }, e, i, arguments.length, null) } }), ye.each(["top", "left"], function(e, t) { ye.cssHooks[t] = I(ge.pixelPosition, function(e, n) {
                return n ? (n = xt(e, t), gt.test(n) ? ye(e).position()[t] + "px" : n) : void 0 }) }), ye.each({ Height: "height", Width: "width" }, function(e, t) { ye.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, i) { ye.fn[i] = function(i, r) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                        s = n || (i === !0 || r === !0 ? "margin" : "border");
                    return qe(this, function(t, n, i) {
                        var r;
                        return ye.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? ye.css(t, n, s) : ye.style(t, n, i, s) }, t, a ? i : void 0, a, null) } }) }), ye.fn.extend({ bind: function(e, t, n) {
                return this.on(e, null, t, n) }, unbind: function(e, t) {
                return this.off(e, null, t) }, delegate: function(e, t, n, i) {
                return this.on(t, e, n, i) }, undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), ye.fn.size = function() {
            return this.length }, ye.fn.andSelf = ye.fn.addBack, n(16) && (i = [], r = function() {
            return ye }.apply(t, i), !(void 0 !== r && (e.exports = r)));
        var wn = a.jQuery,
            xn = a.$;
        return ye.noConflict = function(e) {
            return a.$ === ye && (a.$ = xn), e && a.jQuery === ye && (a.jQuery = wn), ye }, s || (a.jQuery = a.$ = ye), ye
    })
}, function(e, t) {
    (function(t) { e.exports = t }).call(t, {}) }]);
