function scroll() {
    var a = window.pageYOffset + 90;
    a >= 150 ? $("header").addClass("light") : 150 > a && $("header").removeClass("light")
}
if (! function(a, b) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
            if (!a.document) throw new Error("jQuery requires a window with a document");
            return b(a)
        } : b(a)
    }("undefined" != typeof window ? window : this, function(a, b) {
        function c(a) {
            var b = "length" in a && a.length,
                c = _.type(a);
            return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
        }

        function d(a, b, c) {
            if (_.isFunction(b)) return _.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
            if (b.nodeType) return _.grep(a, function(a) {
                return a === b !== c
            });
            if ("string" == typeof b) {
                if (ha.test(b)) return _.filter(b, a, c);
                b = _.filter(b, a)
            }
            return _.grep(a, function(a) {
                return U.call(b, a) >= 0 !== c
            })
        }

        function e(a, b) {
            for (;
                (a = a[b]) && 1 !== a.nodeType;);
            return a
        }

        function f(a) {
            var b = oa[a] = {};
            return _.each(a.match(na) || [], function(a, c) {
                b[c] = !0
            }), b
        }

        function g() {
            Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
        }

        function h() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }), this.expando = _.expando + h.uid++
        }

        function i(a, b, c) {
            var d;
            if (void 0 === c && 1 === a.nodeType)
                if (d = "data-" + b.replace(ua, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                    try {
                        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c
                    } catch (e) {}
                    sa.set(a, b, c)
                } else c = void 0;
            return c
        }

        function j() {
            return !0
        }

        function k() {
            return !1
        }

        function l() {
            try {
                return Z.activeElement
            } catch (a) {}
        }

        function m(a, b) {
            return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }

        function n(a) {
            return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
        }

        function o(a) {
            var b = Ka.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"), a
        }

        function p(a, b) {
            for (var c = 0, d = a.length; d > c; c++) ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"))
        }

        function q(a, b) {
            var c, d, e, f, g, h, i, j;
            if (1 === b.nodeType) {
                if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)) {
                    delete g.handle, g.events = {};
                    for (e in j)
                        for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c])
                }
                sa.hasData(a) && (h = sa.access(a), i = _.extend({}, h), sa.set(b, i))
            }
        }

        function r(a, b) {
            var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
            return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
        }

        function s(a, b) {
            var c = b.nodeName.toLowerCase();
            "input" === c && ya.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }

        function t(b, c) {
            var d, e = _(c.createElement(b)).appendTo(c.body),
                f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
            return e.detach(), f
        }

        function u(a) {
            var b = Z,
                c = Oa[a];
            return c || (c = t(a, b), "none" !== c && c || (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c), c
        }

        function v(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || Ra(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
        }

        function w(a, b) {
            return {
                get: function() {
                    return a() ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }

        function x(a, b) {
            if (b in a) return b;
            for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--;)
                if (b = Xa[e] + c, b in a) return b;
            return d
        }

        function y(a, b, c) {
            var d = Ta.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
        }

        function z(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + wa[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wa[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wa[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
            return g
        }

        function A(a, b, c) {
            var d = !0,
                e = "width" === b ? a.offsetWidth : a.offsetHeight,
                f = Ra(a),
                g = "border-box" === _.css(a, "boxSizing", !1, f);
            if (0 >= e || null == e) {
                if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e)) return e;
                d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
            }
            return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
        }

        function B(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ra.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : (e = xa(d), "none" === c && e || ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
            for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
            return a
        }

        function C(a, b, c, d, e) {
            return new C.prototype.init(a, b, c, d, e)
        }

        function D() {
            return setTimeout(function() {
                Ya = void 0
            }), Ya = _.now()
        }

        function E(a, b) {
            var c, d = 0,
                e = {
                    height: a
                };
            for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wa[d], e["margin" + c] = e["padding" + c] = a;
            return b && (e.opacity = e.width = a), e
        }

        function F(a, b, c) {
            for (var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length; g > f; f++)
                if (d = e[f].call(c, b, a)) return d
        }

        function G(a, b, c) {
            var d, e, f, g, h, i, j, k, l = this,
                m = {},
                n = a.style,
                o = a.nodeType && xa(a),
                p = ra.get(a, "fxshow");
            c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
                h.unqueued || i()
            }), h.unqueued++, l.always(function() {
                l.always(function() {
                    h.unqueued--, _.queue(a, "fx").length || h.empty.fire()
                })
            })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function() {
                n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
            }));
            for (d in b)
                if (e = b[d], $a.exec(e)) {
                    if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                        if ("show" !== e || !p || void 0 === p[d]) continue;
                        o = !0
                    }
                    m[d] = p && p[d] || _.style(a, d)
                } else j = void 0;
            if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
            else {
                p ? "hidden" in p && (o = p.hidden) : p = ra.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function() {
                    _(a).hide()
                }), l.done(function() {
                    var b;
                    ra.remove(a, "fxshow");
                    for (b in m) _.style(a, b, m[b])
                });
                for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }

        function H(a, b) {
            var c, d, e, f, g;
            for (c in a)
                if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
                    f = g.expand(f), delete a[d];
                    for (c in f) c in a || (a[c] = f[c], b[c] = e)
                } else b[d] = e
        }

        function I(a, b, c) {
            var d, e, f = 0,
                g = bb.length,
                h = _.Deferred().always(function() {
                    delete i.elem
                }),
                i = function() {
                    if (e) return !1;
                    for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                    return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
                },
                j = h.promise({
                    elem: a,
                    props: _.extend({}, b),
                    opts: _.extend(!0, {
                        specialEasing: {}
                    }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: Ya || D(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function(b, c) {
                        var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(d), d
                    },
                    stop: function(b) {
                        var c = 0,
                            d = b ? j.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; d > c; c++) j.tweens[c].run(1);
                        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                    }
                }),
                k = j.props;
            for (H(k, j.opts.specialEasing); g > f; f++)
                if (d = bb[f].call(j, a, k, j.opts)) return d;
            return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }

        function J(a) {
            return function(b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d, e = 0,
                    f = b.toLowerCase().match(na) || [];
                if (_.isFunction(c))
                    for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }

        function K(a, b, c, d) {
            function e(h) {
                var i;
                return f[h] = !0, _.each(a[h] || [], function(a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
                }), i
            }
            var f = {},
                g = a === tb;
            return e(b.dataTypes[0]) || !f["*"] && e("*")
        }

        function L(a, b) {
            var c, d, e = _.ajaxSettings.flatOptions || {};
            for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
            return d && _.extend(!0, a, d), a
        }

        function M(a, b, c) {
            for (var d, e, f, g, h = a.contents, i = a.dataTypes;
                "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
            if (d)
                for (e in h)
                    if (h[e] && h[e].test(d)) {
                        i.unshift(e);
                        break
                    }
            if (i[0] in c) f = i[0];
            else {
                for (e in c) {
                    if (!i[0] || a.converters[e + " " + i[0]]) {
                        f = e;
                        break
                    }
                    g || (g = e)
                }
                f = f || g
            }
            return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
        }

        function N(a, b, c, d) {
            var e, f, g, h, i, j = {},
                k = a.dataTypes.slice();
            if (k[1])
                for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
            for (f = k.shift(); f;)
                if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                    if ("*" === f) f = i;
                    else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g)
                    for (e in j)
                        if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                            break
                        }
                if (g !== !0)
                    if (g && a["throws"]) b = g(b);
                    else try {
                        b = g(b)
                    } catch (l) {
                        return {
                            state: "parsererror",
                            error: g ? l : "No conversion from " + i + " to " + f
                        }
                    }
            }
            return {
                state: "success",
                data: b
            }
        }

        function O(a, b, c, d) {
            var e;
            if (_.isArray(b)) _.each(b, function(b, e) {
                c || yb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
            else if (c || "object" !== _.type(b)) d(a, b);
            else
                for (e in b) O(a + "[" + e + "]", b[e], c, d)
        }

        function P(a) {
            return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
        }
        var Q = [],
            R = Q.slice,
            S = Q.concat,
            T = Q.push,
            U = Q.indexOf,
            V = {},
            W = V.toString,
            X = V.hasOwnProperty,
            Y = {},
            Z = a.document,
            $ = "2.1.4",
            _ = function(a, b) {
                return new _.fn.init(a, b)
            },
            aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ba = /^-ms-/,
            ca = /-([\da-z])/gi,
            da = function(a, b) {
                return b.toUpperCase()
            };
        _.fn = _.prototype = {
            jquery: $,
            constructor: _,
            selector: "",
            length: 0,
            toArray: function() {
                return R.call(this)
            },
            get: function(a) {
                return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
            },
            pushStack: function(a) {
                var b = _.merge(this.constructor(), a);
                return b.prevObject = this, b.context = this.context, b
            },
            each: function(a, b) {
                return _.each(this, a, b)
            },
            map: function(a) {
                return this.pushStack(_.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            slice: function() {
                return this.pushStack(R.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(a) {
                var b = this.length,
                    c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: T,
            sort: Q.sort,
            splice: Q.splice
        }, _.extend = _.fn.extend = function() {
            var a, b, c, d, e, f, g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
                if (null != (a = arguments[h]))
                    for (b in a) c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
            return g
        }, _.extend({
            expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(a) {
                throw new Error(a)
            },
            noop: function() {},
            isFunction: function(a) {
                return "function" === _.type(a)
            },
            isArray: Array.isArray,
            isWindow: function(a) {
                return null != a && a === a.window
            },
            isNumeric: function(a) {
                return !_.isArray(a) && a - parseFloat(a) + 1 >= 0
            },
            isPlainObject: function(a) {
                return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a) return !1;
                return !0
            },
            type: function(a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
            },
            globalEval: function(a) {
                var b, c = eval;
                a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
            },
            camelCase: function(a) {
                return a.replace(ba, "ms-").replace(ca, da)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, b, d) {
                var e, f = 0,
                    g = a.length,
                    h = c(a);
                if (d) {
                    if (h)
                        for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                    else
                        for (f in a)
                            if (e = b.apply(a[f], d), e === !1) break
                } else if (h)
                    for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.call(a[f], f, a[f]), e === !1) break; return a
            },
            trim: function(a) {
                return null == a ? "" : (a + "").replace(aa, "")
            },
            makeArray: function(a, b) {
                var d = b || [];
                return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
            },
            inArray: function(a, b, c) {
                return null == b ? -1 : U.call(b, a, c)
            },
            merge: function(a, b) {
                for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
                return a.length = e, a
            },
            grep: function(a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
                return e
            },
            map: function(a, b, d) {
                var e, f = 0,
                    g = a.length,
                    h = c(a),
                    i = [];
                if (h)
                    for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
                else
                    for (f in a) e = b(a[f], f, d), null != e && i.push(e);
                return S.apply([], i)
            },
            guid: 1,
            proxy: function(a, b) {
                var c, d, e;
                return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function() {
                    return a.apply(b || this, d.concat(R.call(arguments)))
                }, e.guid = a.guid = a.guid || _.guid++, e) : void 0
            },
            now: Date.now,
            support: Y
        }), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
            V["[object " + b + "]"] = b.toLowerCase()
        });
        var ea = function(a) {
            function b(a, b, c, d) {
                var e, f, g, h, i, j, l, n, o, p;
                if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
                if (!d && I) {
                    if (11 !== h && (e = sa.exec(a)))
                        if (g = e[1]) {
                            if (9 === h) {
                                if (f = b.getElementById(g), !f || !f.parentNode) return c;
                                if (f.id === g) return c.push(f), c
                            } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                        } else {
                            if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                            if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c
                        }
                    if (v.qsa && (!J || !J.test(a))) {
                        if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                            for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                            o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
                        }
                        if (p) try {
                            return $.apply(c, o.querySelectorAll(p)), c
                        } catch (q) {} finally {
                            l || b.removeAttribute("id")
                        }
                    }
                }
                return B(a.replace(ia, "$1"), b, c, d)
            }

            function c() {
                function a(c, d) {
                    return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
                }
                var b = [];
                return a
            }

            function d(a) {
                return a[N] = !0, a
            }

            function e(a) {
                var b = G.createElement("div");
                try {
                    return !!a(b)
                } catch (c) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }

            function f(a, b) {
                for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
            }

            function g(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
                if (d) return d;
                if (c)
                    for (; c = c.nextSibling;)
                        if (c === b) return -1;
                return a ? 1 : -1
            }

            function h(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }

            function i(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function j(a) {
                return d(function(b) {
                    return b = +b, d(function(c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function k(a) {
                return a && "undefined" != typeof a.getElementsByTagName && a
            }

            function l() {}

            function m(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                return d
            }

            function n(a, b, c) {
                var d = b.dir,
                    e = c && "parentNode" === d,
                    f = Q++;
                return b.first ? function(b, c, f) {
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) return a(b, c, f)
                } : function(b, c, g) {
                    var h, i, j = [P, f];
                    if (g) {
                        for (; b = b[d];)
                            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                    } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || e) {
                                if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                                if (i[d] = j, j[2] = a(b, c, g)) return !0
                            }
                }
            }

            function o(a) {
                return a.length > 1 ? function(b, c, d) {
                    for (var e = a.length; e--;)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function p(a, c, d) {
                for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
                return d
            }

            function q(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                return g
            }

            function r(a, b, c, e, f, g) {
                return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        r = d || p(b || "*", h.nodeType ? [h] : h, []),
                        s = !a || !d && b ? r : q(r, m, a, h, i),
                        t = c ? f || (d ? a : o || e) ? [] : g : s;
                    if (c && c(s, t, h, i), e)
                        for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                    if (d) {
                        if (f || a) {
                            if (f) {
                                for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                                f(null, t = [], j, i)
                            }
                            for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                        }
                    } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
                })
            }

            function s(a) {
                for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                        return a === b
                    }, g, !0), j = n(function(a) {
                        return aa(b, a) > -1
                    }, g, !0), k = [function(a, c, d) {
                        var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                        return b = null, e
                    }]; e > h; h++)
                    if (c = w.relative[a[h].type]) k = [n(o(k), c)];
                    else {
                        if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                            for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                            return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                                value: " " === a[h - 2].type ? "*" : ""
                            })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                        }
                        k.push(c)
                    }
                return o(k)
            }

            function t(a, c) {
                var e = c.length > 0,
                    f = a.length > 0,
                    g = function(d, g, h, i, j) {
                        var k, l, m, n = 0,
                            o = "0",
                            p = d && [],
                            r = [],
                            s = C,
                            t = d || f && w.find.TAG("*", j),
                            u = P += null == s ? 1 : Math.random() || .1,
                            v = t.length;
                        for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                            if (f && k) {
                                for (l = 0; m = a[l++];)
                                    if (m(k, g, h)) {
                                        i.push(k);
                                        break
                                    }
                                j && (P = u)
                            }
                            e && ((k = !m && k) && n--, d && p.push(k))
                        }
                        if (n += o, e && o !== n) {
                            for (l = 0; m = c[l++];) m(p, r, g, h);
                            if (d) {
                                if (n > 0)
                                    for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                                r = q(r)
                            }
                            $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                        }
                        return j && (P = u, C = s), p
                    };
                return e ? d(g) : g
            }
            var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
                O = a.document,
                P = 0,
                Q = 0,
                R = c(),
                S = c(),
                T = c(),
                U = function(a, b) {
                    return a === b && (E = !0), 0
                },
                V = 1 << 31,
                W = {}.hasOwnProperty,
                X = [],
                Y = X.pop,
                Z = X.push,
                $ = X.push,
                _ = X.slice,
                aa = function(a, b) {
                    for (var c = 0, d = a.length; d > c; c++)
                        if (a[c] === b) return c;
                    return -1
                },
                ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ca = "[\\x20\\t\\r\\n\\f]",
                da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ea = da.replace("w", "w#"),
                fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
                ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
                ha = new RegExp(ca + "+", "g"),
                ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
                ja = new RegExp("^" + ca + "*," + ca + "*"),
                ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
                la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
                ma = new RegExp(ga),
                na = new RegExp("^" + ea + "$"),
                oa = {
                    ID: new RegExp("^#(" + da + ")"),
                    CLASS: new RegExp("^\\.(" + da + ")"),
                    TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + fa),
                    PSEUDO: new RegExp("^" + ga),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ba + ")$", "i"),
                    needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
                },
                pa = /^(?:input|select|textarea|button)$/i,
                qa = /^h\d$/i,
                ra = /^[^{]+\{\s*\[native \w/,
                sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ta = /[+~]/,
                ua = /'|\\/g,
                va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
                wa = function(a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                },
                xa = function() {
                    F()
                };
            try {
                $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
            } catch (ya) {
                $ = {
                    apply: X.length ? function(a, b) {
                        Z.apply(a, _.call(b))
                    } : function(a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++];);
                        a.length = c - 1
                    }
                }
            }
            v = b.support = {}, y = b.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1
            }, F = b.setDocument = function(a) {
                var b, c, d = a ? a.ownerDocument || a : O;
                return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function(a) {
                    return a.className = "i", !a.getAttribute("className")
                }), v.getElementsByTagName = e(function(a) {
                    return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
                }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function(a) {
                    return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
                }), v.getById ? (w.find.ID = function(a, b) {
                    if ("undefined" != typeof b.getElementById && I) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [c] : []
                    }
                }, w.filter.ID = function(a) {
                    var b = a.replace(va, wa);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete w.find.ID, w.filter.ID = function(a) {
                    var b = a.replace(va, wa);
                    return function(a) {
                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
                } : function(a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                    return I ? b.getElementsByClassName(a) : void 0
                }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function(a) {
                    H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
                }), e(function(a) {
                    var b = d.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
                })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                    v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
                }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function(a, b) {
                    if (b)
                        for (; b = b.parentNode;)
                            if (b === a) return !0;
                    return !1
                }, U = b ? function(a, b) {
                    if (a === b) return E = !0, 0;
                    var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
                } : function(a, b) {
                    if (a === b) return E = !0, 0;
                    var c, e = 0,
                        f = a.parentNode,
                        h = b.parentNode,
                        i = [a],
                        j = [b];
                    if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                    if (f === h) return g(a, b);
                    for (c = a; c = c.parentNode;) i.unshift(c);
                    for (c = b; c = c.parentNode;) j.unshift(c);
                    for (; i[e] === j[e];) e++;
                    return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
                }, d) : G
            }, b.matches = function(a, c) {
                return b(a, null, null, c)
            }, b.matchesSelector = function(a, c) {
                if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
                    var d = L.call(a, c);
                    if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                } catch (e) {}
                return b(c, G, null, [a]).length > 0
            }, b.contains = function(a, b) {
                return (a.ownerDocument || a) !== G && F(a), M(a, b)
            }, b.attr = function(a, b) {
                (a.ownerDocument || a) !== G && F(a);
                var c = w.attrHandle[b.toLowerCase()],
                    d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
                return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }, b.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, b.uniqueSort = function(a) {
                var b, c = [],
                    d = 0,
                    e = 0;
                if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                    for (; b = a[e++];) b === a[e] && (d = c.push(e));
                    for (; d--;) a.splice(c[d], 1)
                }
                return D = null, a
            }, x = b.getText = function(a) {
                var b, c = "",
                    d = 0,
                    e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                    } else if (3 === e || 4 === e) return a.nodeValue
                } else
                    for (; b = a[d++];) c += x(b);
                return c
            }, w = b.selectors = {
                cacheLength: 50,
                createPseudo: d,
                match: oa,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                    },
                    PSEUDO: function(a) {
                        var b, c = !a[6] && a[2];
                        return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(va, wa).toLowerCase();
                        return "*" === a ? function() {
                            return !0
                        } : function(a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function(a) {
                        var b = R[a + " "];
                        return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(a, c, d) {
                        return function(e) {
                            var f = b.attr(e, a);
                            return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                        }
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) {
                            return !!a.parentNode
                        } : function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h;
                            if (q) {
                                if (f) {
                                    for (; p;) {
                                        for (l = b; l = l[p];)
                                            if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                        if (1 === l.nodeType && ++m && l === b) {
                                            k[a] = [P, n, m];
                                            break
                                        }
                                } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                                else
                                    for (;
                                        (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                                return m -= e, m === d || m % d === 0 && m / d >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, c) {
                        var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                        return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                            for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                        }) : function(a) {
                            return f(a, 0, e)
                        }) : f
                    }
                },
                pseudos: {
                    not: d(function(a) {
                        var b = [],
                            c = [],
                            e = A(a.replace(ia, "$1"));
                        return e[N] ? d(function(a, b, c, d) {
                            for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function(a, d, f) {
                            return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                        }
                    }),
                    has: d(function(a) {
                        return function(c) {
                            return b(a, c).length > 0
                        }
                    }),
                    contains: d(function(a) {
                        return a = a.replace(va, wa),
                            function(b) {
                                return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                            }
                    }),
                    lang: d(function(a) {
                        return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
                            function(b) {
                                var c;
                                do
                                    if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                                while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === H
                    },
                    focus: function(a) {
                        return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function(a) {
                        return a.disabled === !1
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !w.pseudos.empty(a)
                    },
                    header: function(a) {
                        return qa.test(a.nodeName)
                    },
                    input: function(a) {
                        return pa.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: j(function() {
                        return [0]
                    }),
                    last: j(function(a, b) {
                        return [b - 1]
                    }),
                    eq: j(function(a, b, c) {
                        return [0 > c ? c + b : c]
                    }),
                    even: j(function(a, b) {
                        for (var c = 0; b > c; c += 2) a.push(c);
                        return a
                    }),
                    odd: j(function(a, b) {
                        for (var c = 1; b > c; c += 2) a.push(c);
                        return a
                    }),
                    lt: j(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                        return a
                    }),
                    gt: j(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                        return a
                    })
                }
            }, w.pseudos.nth = w.pseudos.eq;
            for (u in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) w.pseudos[u] = h(u);
            for (u in {
                    submit: !0,
                    reset: !0
                }) w.pseudos[u] = i(u);
            return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
                var d, e, f, g, h, i, j, k = S[a + " "];
                if (k) return c ? 0 : k.slice(0);
                for (h = a, i = [], j = w.preFilter; h;) {
                    (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
                        value: d,
                        type: e[0].replace(ia, " ")
                    }), h = h.slice(d.length));
                    for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                        value: d,
                        type: g,
                        matches: e
                    }), h = h.slice(d.length));
                    if (!d) break
                }
                return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
            }, A = b.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = T[a + " "];
                if (!f) {
                    for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                    f = T(a, t(e, d)), f.selector = a
                }
                return f
            }, B = b.select = function(a, b, c, d) {
                var e, f, g, h, i, j = "function" == typeof a && a,
                    l = !d && z(a = j.selector || a);
                if (c = c || [], 1 === l.length) {
                    if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                        if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
                        j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                    }
                    for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
                        if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                            if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                            break
                        }
                }
                return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
            }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) {
                return 1 & a.compareDocumentPosition(G.createElement("div"))
            }), e(function(a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || f("type|href|height|width", function(a, b, c) {
                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), v.attributes && e(function(a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || f("value", function(a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
            }), e(function(a) {
                return null == a.getAttribute("disabled")
            }) || f(ba, function(a, b, c) {
                var d;
                return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }), b
        }(a);
        _.find = ea, _.expr = ea.selectors, _.expr[":"] = _.expr.pseudos, _.unique = ea.uniqueSort, _.text = ea.getText, _.isXMLDoc = ea.isXML, _.contains = ea.contains;
        var fa = _.expr.match.needsContext,
            ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ha = /^.[^:#\[\.,]*$/;
        _.filter = function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function(a) {
                return 1 === a.nodeType
            }))
        }, _.fn.extend({
            find: function(a) {
                var b, c = this.length,
                    d = [],
                    e = this;
                if ("string" != typeof a) return this.pushStack(_(a).filter(function() {
                    for (b = 0; c > b; b++)
                        if (_.contains(e[b], this)) return !0
                }));
                for (b = 0; c > b; b++) _.find(a, e[b], d);
                return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
            },
            filter: function(a) {
                return this.pushStack(d(this, a || [], !1))
            },
            not: function(a) {
                return this.pushStack(d(this, a || [], !0))
            },
            is: function(a) {
                return !!d(this, "string" == typeof a && fa.test(a) ? _(a) : a || [], !1).length
            }
        });
        var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ka = _.fn.init = function(a, b) {
                var c, d;
                if (!a) return this;
                if ("string" == typeof a) {
                    if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ja.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || ia).find(a) : this.constructor(b).find(a);
                    if (c[1]) {
                        if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), ga.test(c[1]) && _.isPlainObject(b))
                            for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                        return this
                    }
                    return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
                }
                return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
            };
        ka.prototype = _.fn, ia = _(Z);
        var la = /^(?:parents|prev(?:Until|All))/,
            ma = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        _.extend({
            dir: function(a, b, c) {
                for (var d = [], e = void 0 !== c;
                    (a = a[b]) && 9 !== a.nodeType;)
                    if (1 === a.nodeType) {
                        if (e && _(a).is(c)) break;
                        d.push(a)
                    }
                return d
            },
            sibling: function(a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            }
        }), _.fn.extend({
            has: function(a) {
                var b = _(a, this),
                    c = b.length;
                return this.filter(function() {
                    for (var a = 0; c > a; a++)
                        if (_.contains(this, b[a])) return !0
                })
            },
            closest: function(a, b) {
                for (var c, d = 0, e = this.length, f = [], g = fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
                return this.pushStack(f.length > 1 ? _.unique(f) : f)
            },
            index: function(a) {
                return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(a, b) {
                return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        }), _.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function(a) {
                return _.dir(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return _.dir(a, "parentNode", c)
            },
            next: function(a) {
                return e(a, "nextSibling")
            },
            prev: function(a) {
                return e(a, "previousSibling")
            },
            nextAll: function(a) {
                return _.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return _.dir(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return _.dir(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return _.dir(a, "previousSibling", c)
            },
            siblings: function(a) {
                return _.sibling((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return _.sibling(a.firstChild)
            },
            contents: function(a) {
                return a.contentDocument || _.merge([], a.childNodes)
            }
        }, function(a, b) {
            _.fn[a] = function(c, d) {
                var e = _.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()), this.pushStack(e)
            }
        });
        var na = /\S+/g,
            oa = {};
        _.Callbacks = function(a) {
            a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
            var b, c, d, e, g, h, i = [],
                j = !a.once && [],
                k = function(f) {
                    for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
                        if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                            b = !1;
                            break
                        }
                    d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
                },
                l = {
                    add: function() {
                        if (i) {
                            var c = i.length;
                            ! function f(b) {
                                _.each(b, function(b, c) {
                                    var d = _.type(c);
                                    "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                                })
                            }(arguments), d ? g = i.length : b && (e = c, k(b))
                        }
                        return this
                    },
                    remove: function() {
                        return i && _.each(arguments, function(a, b) {
                            for (var c;
                                (c = _.inArray(b, i, c)) > -1;) i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
                        }), this
                    },
                    has: function(a) {
                        return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
                    },
                    empty: function() {
                        return i = [], g = 0, this
                    },
                    disable: function() {
                        return i = j = b = void 0, this
                    },
                    disabled: function() {
                        return !i
                    },
                    lock: function() {
                        return j = void 0, b || l.disable(), this
                    },
                    locked: function() {
                        return !j
                    },
                    fireWith: function(a, b) {
                        return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
                    },
                    fire: function() {
                        return l.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!c
                    }
                };
            return l
        }, _.extend({
            Deferred: function(a) {
                var b = [
                        ["resolve", "done", _.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", _.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", _.Callbacks("memory")]
                    ],
                    c = "pending",
                    d = {
                        state: function() {
                            return c
                        },
                        always: function() {
                            return e.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var a = arguments;
                            return _.Deferred(function(c) {
                                _.each(b, function(b, f) {
                                    var g = _.isFunction(a[b]) && a[b];
                                    e[f[1]](function() {
                                        var a = g && g.apply(this, arguments);
                                        a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        promise: function(a) {
                            return null != a ? _.extend(a, d) : d
                        }
                    },
                    e = {};
                return d.pipe = d.then, _.each(b, function(a, f) {
                    var g = f[2],
                        h = f[3];
                    d[f[1]] = g.add, h && g.add(function() {
                        c = h
                    }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                        return e[f[0] + "With"](this === e ? d : this, arguments), this
                    }, e[f[0] + "With"] = g.fireWith
                }), d.promise(e), a && a.call(e, e), e
            },
            when: function(a) {
                var b, c, d, e = 0,
                    f = R.call(arguments),
                    g = f.length,
                    h = 1 !== g || a && _.isFunction(a.promise) ? g : 0,
                    i = 1 === h ? a : _.Deferred(),
                    j = function(a, c, d) {
                        return function(e) {
                            c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                        }
                    };
                if (g > 1)
                    for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
                return h || i.resolveWith(d, f), i.promise()
            }
        });
        var pa;
        _.fn.ready = function(a) {
            return _.ready.promise().done(a), this
        }, _.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? _.readyWait++ : _.ready(!0)
            },
            ready: function(a) {
                (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
            }
        }), _.ready.promise = function(b) {
            return pa || (pa = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pa.promise(b)
        }, _.ready.promise();
        var qa = _.access = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === _.type(c)) {
                e = !0;
                for (h in c) _.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(_(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        };
        _.acceptData = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
            key: function(a) {
                if (!h.accepts(a)) return 0;
                var b = {},
                    c = a[this.expando];
                if (!c) {
                    c = h.uid++;
                    try {
                        b[this.expando] = {
                            value: c
                        }, Object.defineProperties(a, b)
                    } catch (d) {
                        b[this.expando] = c, _.extend(a, b)
                    }
                }
                return this.cache[c] || (this.cache[c] = {}), c
            },
            set: function(a, b, c) {
                var d, e = this.key(a),
                    f = this.cache[e];
                if ("string" == typeof b) f[b] = c;
                else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
                else
                    for (d in b) f[d] = b[d];
                return f
            },
            get: function(a, b) {
                var c = this.cache[this.key(a)];
                return void 0 === b ? c : c[b]
            },
            access: function(a, b, c) {
                var d;
                return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
            },
            remove: function(a, b) {
                var c, d, e, f = this.key(a),
                    g = this.cache[f];
                if (void 0 === b) this.cache[f] = {};
                else {
                    _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(na) || [])), c = d.length;
                    for (; c--;) delete g[d[c]]
                }
            },
            hasData: function(a) {
                return !_.isEmptyObject(this.cache[a[this.expando]] || {})
            },
            discard: function(a) {
                a[this.expando] && delete this.cache[a[this.expando]]
            }
        };
        var ra = new h,
            sa = new h,
            ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ua = /([A-Z])/g;
        _.extend({
            hasData: function(a) {
                return sa.hasData(a) || ra.hasData(a)
            },
            data: function(a, b, c) {
                return sa.access(a, b, c)
            },
            removeData: function(a, b) {
                sa.remove(a, b)
            },
            _data: function(a, b, c) {
                return ra.access(a, b, c)
            },
            _removeData: function(a, b) {
                ra.remove(a, b)
            }
        }), _.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))) {
                        for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
                        ra.set(f, "hasDataAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    sa.set(this, a)
                }) : qa(this, function(b) {
                    var c, d = _.camelCase(a);
                    if (f && void 0 === b) {
                        if (c = sa.get(f, a), void 0 !== c) return c;
                        if (c = sa.get(f, d), void 0 !== c) return c;
                        if (c = i(f, d, void 0), void 0 !== c) return c
                    } else this.each(function() {
                        var c = sa.get(this, d);
                        sa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b)
                    })
                }, null, b, arguments.length > 1, null, !0)
            },
            removeData: function(a) {
                return this.each(function() {
                    sa.remove(this, a)
                })
            }
        }), _.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = _.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = _._queueHooks(a, b),
                    g = function() {
                        _.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return ra.get(a, c) || ra.access(a, c, {
                    empty: _.Callbacks("once memory").add(function() {
                        ra.remove(a, [b + "queue", c])
                    })
                })
            }
        }), _.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = _.queue(this, a, b);
                    _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    _.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1,
                    e = _.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {
                        --d || e.resolveWith(f, [f])
                    };
                for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ra.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        });
        var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            wa = ["Top", "Right", "Bottom", "Left"],
            xa = function(a, b) {
                return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
            },
            ya = /^(?:checkbox|radio)$/i;
        ! function() {
            var a = Z.createDocumentFragment(),
                b = a.appendChild(Z.createElement("div")),
                c = Z.createElement("input");
            c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
        }();
        var za = "undefined";
        Y.focusinBubbles = "onfocusin" in a;
        var Aa = /^key/,
            Ba = /^(?:mouse|pointer|contextmenu)|click/,
            Ca = /^(?:focusinfocus|focusoutblur)$/,
            Da = /^([^.]*)(?:\.(.+)|)$/;
        _.event = {
            global: {},
            add: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a);
                if (q)
                    for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                            return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
                        }), b = (b || "").match(na) || [""], j = b.length; j--;) h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
                        type: n,
                        origType: p,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && _.expr.match.needsContext.test(e),
                        namespace: o.join(".")
                    }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
            },
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a);
                if (q && (i = q.events)) {
                    for (b = (b || "").match(na) || [""], j = b.length; j--;)
                        if (h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                            for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                            g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
                        } else
                            for (n in i) _.event.remove(a, n + b[j], c, d, !0);
                    _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"))
                }
            },
            trigger: function(b, c, d, e) {
                var f, g, h, i, j, k, l, m = [d || Z],
                    n = X.call(b, "type") ? b.type : b,
                    o = X.call(b, "namespace") ? b.namespace.split(".") : [];
                if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                    if (!e && !l.noBubble && !_.isWindow(d)) {
                        for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                        h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                    }
                    for (f = 0;
                        (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                    return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
                }
            },
            dispatch: function(a) {
                a = _.event.fix(a);
                var b, c, d, e, f, g = [],
                    h = R.call(arguments),
                    i = (ra.get(this, "events") || {})[a.type] || [],
                    j = _.event.special[a.type] || {};
                if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                    for (g = _.event.handlers.call(this, a, i), b = 0;
                        (e = g[b++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = e.elem, c = 0;
                            (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                    return j.postDispatch && j.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(a, b) {
                var c, d, e, f, g = [],
                    h = b.delegateCount,
                    i = a.target;
                if (h && i.nodeType && (!a.button || "click" !== a.type))
                    for (; i !== this; i = i.parentNode || this)
                        if (i.disabled !== !0 || "click" !== a.type) {
                            for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
                            d.length && g.push({
                                elem: i,
                                handlers: d
                            })
                        }
                return h < b.length && g.push({
                    elem: this,
                    handlers: b.slice(h)
                }), g
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, b) {
                    var c, d, e, f = b.button;
                    return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
                }
            },
            fix: function(a) {
                if (a[_.expando]) return a;
                var b, c, d, e = a.type,
                    f = a,
                    g = this.fixHooks[e];
                for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
                return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== l() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === l() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(a) {
                        return _.nodeName(a.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(a) {
                        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = _.extend(new _.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, _.removeEvent = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        }, _.Event = function(a, b) {
            return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
        }, _.Event.prototype = {
            isDefaultPrevented: k,
            isPropagationStopped: k,
            isImmediatePropagationStopped: k,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
            }
        }, _.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(a, b) {
            _.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), Y.focusinBubbles || _.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = function(a) {
                _.event.simulate(b, a.target, _.event.fix(a), !0)
            };
            _.event.special[b] = {
                setup: function() {
                    var d = this.ownerDocument || this,
                        e = ra.access(d, b);
                    e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1)
                },
                teardown: function() {
                    var d = this.ownerDocument || this,
                        e = ra.access(d, b) - 1;
                    e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b))
                }
            }
        }), _.fn.extend({
            on: function(a, b, c, d, e) {
                var f, g;
                if ("object" == typeof a) {
                    "string" != typeof b && (c = c || b, b = void 0);
                    for (g in a) this.on(g, b, c, a[g], e);
                    return this
                }
                if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k;
                else if (!d) return this;
                return 1 === e && (f = d, d = function(a) {
                    return _().off(a), f.apply(this, arguments)
                }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
                    _.event.add(this, a, d, c, b)
                })
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function(a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                if ("object" == typeof a) {
                    for (e in a) this.off(e, b, a[e]);
                    return this
                }
                return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function() {
                    _.event.remove(this, a, c, b)
                })
            },
            trigger: function(a, b) {
                return this.each(function() {
                    _.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                var c = this[0];
                return c ? _.event.trigger(a, b, c, !0) : void 0
            }
        });
        var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Fa = /<([\w:]+)/,
            Ga = /<|&#?\w+;/,
            Ha = /<(?:script|style|link)/i,
            Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ja = /^$|\/(?:java|ecma)script/i,
            Ka = /^true\/(.*)/,
            La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ma = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Ma.optgroup = Ma.option, Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead, Ma.th = Ma.td, _.extend({
            clone: function(a, b, c) {
                var d, e, f, g, h = a.cloneNode(!0),
                    i = _.contains(a.ownerDocument, a);
                if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
                    for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
                if (b)
                    if (c)
                        for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]);
                    else q(a, h);
                return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
            },
            buildFragment: function(a, b, c, d) {
                for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
                    if (e = a[m], e || 0 === e)
                        if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e);
                        else if (Ga.test(e)) {
                    for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || ["", ""])[1].toLowerCase(), h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
                    _.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
                } else l.push(b.createTextNode(e));
                for (k.textContent = "", m = 0; e = l[m++];)
                    if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
                        for (j = 0; e = f[j++];) Ja.test(e.type || "") && c.push(e);
                return k
            },
            cleanData: function(a) {
                for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                    if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) {
                        if (b.events)
                            for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                        ra.cache[e] && delete ra.cache[e]
                    }
                    delete sa.cache[c[sa.expando]]
                }
            }
        }), _.fn.extend({
            text: function(a) {
                return qa(this, function(a) {
                    return void 0 === a ? _.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                    })
                }, null, a, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = m(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = m(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            remove: function(a, b) {
                for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
                return this
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
                return this
            },
            clone: function(a, b) {
                return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                    return _.clone(this, a, b)
                })
            },
            html: function(a) {
                return qa(this, function(a) {
                    var b = this[0] || {},
                        c = 0,
                        d = this.length;
                    if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                    if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = a.replace(Ea, "<$1></$2>");
                        try {
                            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (e) {}
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function() {
                var a = arguments[0];
                return this.domManip(arguments, function(b) {
                    a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
                }), a && (a.length || a.nodeType) ? this : this.remove()
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, b) {
                a = S.apply([], a);
                var c, d, e, f, g, h, i = 0,
                    j = this.length,
                    k = this,
                    l = j - 1,
                    m = a[0],
                    p = _.isFunction(m);
                if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m)) return this.each(function(c) {
                    var d = k.eq(c);
                    p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
                });
                if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                    for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
                    if (f)
                        for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], Ja.test(g.type || "") && !ra.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(La, "")))
                }
                return this
            }
        }), _.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            _.fn[a] = function(a) {
                for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
                return this.pushStack(d)
            }
        });
        var Na, Oa = {},
            Pa = /^margin/,
            Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"),
            Ra = function(b) {
                return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
            };
        ! function() {
            function b() {
                g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
                var b = a.getComputedStyle(g, null);
                c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
            }
            var c, d, e = Z.documentElement,
                f = Z.createElement("div"),
                g = Z.createElement("div");
            g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {
                pixelPosition: function() {
                    return b(), c
                },
                boxSizingReliable: function() {
                    return null == d && b(), d
                },
                reliableMarginRight: function() {
                    var b, c = g.appendChild(Z.createElement("div"));
                    return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), b
                }
            }))
        }(), _.swap = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        };
        var Sa = /^(none|table(?!-c[ea]).+)/,
            Ta = new RegExp("^(" + va + ")(.*)$", "i"),
            Ua = new RegExp("^([+-])=(" + va + ")", "i"),
            Va = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Wa = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Xa = ["Webkit", "O", "Moz", "ms"];
        _.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = v(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = _.camelCase(b),
                        i = a.style;
                    return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), void(null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))))
                }
            },
            css: function(a, b, c, d) {
                var e, f, g, h = _.camelCase(b);
                return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wa && (e = Wa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
            }
        }), _.each(["height", "width"], function(a, b) {
            _.cssHooks[b] = {
                get: function(a, c, d) {
                    return c ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Va, function() {
                        return A(a, b, d)
                    }) : A(a, b, d) : void 0
                },
                set: function(a, c, d) {
                    var e = d && Ra(a);
                    return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
                }
            }
        }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
            return b ? _.swap(a, {
                display: "inline-block"
            }, v, [a, "marginRight"]) : void 0
        }), _.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            _.cssHooks[a + b] = {
                expand: function(c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            }, Pa.test(a) || (_.cssHooks[a + b].set = y)
        }), _.fn.extend({
            css: function(a, b) {
                return qa(this, function(a, b, c) {
                    var d, e, f = {},
                        g = 0;
                    if (_.isArray(b)) {
                        for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
                        return f
                    }
                    return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
                }, a, b, arguments.length > 1)
            },
            show: function() {
                return B(this, !0)
            },
            hide: function() {
                return B(this)
            },
            toggle: function(a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                    xa(this) ? _(this).show() : _(this).hide()
                })
            }
        }), _.Tween = C, C.prototype = {
            constructor: C,
            init: function(a, b, c, d, e, f) {
                this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = C.propHooks[this.prop];
                return a && a.get ? a.get(this) : C.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = C.propHooks[this.prop];
                return this.options.duration ? this.pos = b = _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
            }
        }, C.prototype.init.prototype = C.prototype, C.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
                },
                set: function(a) {
                    _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                }
            }
        }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        }, _.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            }
        }, _.fx = C.prototype.init, _.fx.step = {};
        var Ya, Za, $a = /^(?:toggle|show|hide)$/,
            _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
            ab = /queueHooks$/,
            bb = [G],
            cb = {
                "*": [function(a, b) {
                    var c = this.createTween(a, b),
                        d = c.cur(),
                        e = _a.exec(b),
                        f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
                        g = (_.cssNumber[a] || "px" !== f && +d) && _a.exec(_.css(c.elem, a)),
                        h = 1,
                        i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
                }]
            };
        _.Animation = _.extend(I, {
                tweener: function(a, b) {
                    _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                    for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cb[c] = cb[c] || [], cb[c].unshift(b)
                },
                prefilter: function(a, b) {
                    b ? bb.unshift(a) : bb.push(a)
                }
            }), _.speed = function(a, b, c) {
                var d = a && "object" == typeof a ? _.extend({}, a) : {
                    complete: c || !c && b || _.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !_.isFunction(b) && b
                };
                return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                    _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
                }, d
            }, _.fn.extend({
                fadeTo: function(a, b, c, d) {
                    return this.filter(xa).css("opacity", 0).show().end().animate({
                        opacity: b
                    }, a, c, d)
                },
                animate: function(a, b, c, d) {
                    var e = _.isEmptyObject(a),
                        f = _.speed(b, c, d),
                        g = function() {
                            var b = I(this, _.extend({}, a), f);
                            (e || ra.get(this, "finish")) && b.stop(!0)
                        };
                    return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                },
                stop: function(a, b, c) {
                    var d = function(a) {
                        var b = a.stop;
                        delete a.stop, b(c)
                    };
                    return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                        var b = !0,
                            e = null != a && a + "queueHooks",
                            f = _.timers,
                            g = ra.get(this);
                        if (e) g[e] && g[e].stop && d(g[e]);
                        else
                            for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                        for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                        (b || !c) && _.dequeue(this, a)
                    })
                },
                finish: function(a) {
                    return a !== !1 && (a = a || "fx"), this.each(function() {
                        var b, c = ra.get(this),
                            d = c[a + "queue"],
                            e = c[a + "queueHooks"],
                            f = _.timers,
                            g = d ? d.length : 0;
                        for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                        for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish
                    })
                }
            }), _.each(["toggle", "show", "hide"], function(a, b) {
                var c = _.fn[b];
                _.fn[b] = function(a, d, e) {
                    return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
                }
            }), _.each({
                slideDown: E("show"),
                slideUp: E("hide"),
                slideToggle: E("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(a, b) {
                _.fn[a] = function(a, c, d) {
                    return this.animate(b, a, c, d)
                }
            }), _.timers = [], _.fx.tick = function() {
                var a, b = 0,
                    c = _.timers;
                for (Ya = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
                c.length || _.fx.stop(), Ya = void 0
            }, _.fx.timer = function(a) {
                _.timers.push(a), a() ? _.fx.start() : _.timers.pop()
            }, _.fx.interval = 13, _.fx.start = function() {
                Za || (Za = setInterval(_.fx.tick, _.fx.interval))
            }, _.fx.stop = function() {
                clearInterval(Za), Za = null
            }, _.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, _.fn.delay = function(a, b) {
                return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function() {
                        clearTimeout(d)
                    }
                })
            },
            function() {
                var a = Z.createElement("input"),
                    b = Z.createElement("select"),
                    c = b.appendChild(Z.createElement("option"));
                a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
            }();
        var db, eb, fb = _.expr.attrHandle;
        _.fn.extend({
            attr: function(a, b) {
                return qa(this, _.attr, a, b, arguments.length > 1)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    _.removeAttr(this, a)
                })
            }
        }), _.extend({
            attr: function(a, b, c) {
                var d, e, f = a.nodeType;
                return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === za ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b)) : void 0
            },
            removeAttr: function(a, b) {
                var c, d, e = 0,
                    f = b && b.match(na);
                if (f && 1 === a.nodeType)
                    for (; c = f[e++];) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                }
            }
        }), eb = {
            set: function(a, b, c) {
                return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
            }
        }, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
            var c = fb[b] || _.find.attr;
            fb[b] = function(a, b, d) {
                var e, f;
                return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fb[b] = f), e
            }
        });
        var gb = /^(?:input|select|textarea|button)$/i;
        _.fn.extend({
            prop: function(a, b) {
                return qa(this, _.prop, a, b, arguments.length > 1)
            },
            removeProp: function(a) {
                return this.each(function() {
                    delete this[_.propFix[a] || a]
                })
            }
        }), _.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(a, b, c) {
                var d, e, f, g = a.nodeType;
                return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1
                    }
                }
            }
        }), Y.optSelected || (_.propHooks.selected = {
            get: function(a) {
                var b = a.parentNode;
                return b && b.parentNode && b.parentNode.selectedIndex, null
            }
        }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            _.propFix[this.toLowerCase()] = this
        });
        var hb = /[\t\r\n\f]/g;
        _.fn.extend({
            addClass: function(a) {
                var b, c, d, e, f, g, h = "string" == typeof a && a,
                    i = 0,
                    j = this.length;
                if (_.isFunction(a)) return this.each(function(b) {
                    _(this).addClass(a.call(this, b, this.className))
                });
                if (h)
                    for (b = (a || "").match(na) || []; j > i; i++)
                        if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : " ")) {
                            for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                            g = _.trim(d), c.className !== g && (c.className = g)
                        }
                return this
            },
            removeClass: function(a) {
                var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                    i = 0,
                    j = this.length;
                if (_.isFunction(a)) return this.each(function(b) {
                    _(this).removeClass(a.call(this, b, this.className))
                });
                if (h)
                    for (b = (a || "").match(na) || []; j > i; i++)
                        if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : "")) {
                            for (f = 0; e = b[f++];)
                                for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                            g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
                        }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function(c) {
                    _(this).toggleClass(a.call(this, c, this.className, b), b)
                } : function() {
                    if ("string" === c)
                        for (var b, d = 0, e = _(this), f = a.match(na) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    else(c === za || "boolean" === c) && (this.className && ra.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "")
                })
            },
            hasClass: function(a) {
                for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                    if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0) return !0;
                return !1
            }
        });
        var ib = /\r/g;
        _.fn.extend({
            val: function(a) {
                var b, c, d, e = this[0];
                return arguments.length ? (d = _.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                })) : e ? (b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)) : void 0
            }
        }), _.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = _.find.attr(a, "value");
                        return null != b ? b : _.trim(_.text(a))
                    }
                },
                select: {
                    get: function(a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                            if (c = d[i], !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
                                if (b = _(c).val(), f) return b;
                                g.push(b)
                            }
                        return g
                    },
                    set: function(a, b) {
                        for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                        return c || (a.selectedIndex = -1), f
                    }
                }
            }
        }), _.each(["radio", "checkbox"], function() {
            _.valHooks[this] = {
                set: function(a, b) {
                    return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
                }
            }, Y.checkOn || (_.valHooks[this].get = function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            _.fn[b] = function(a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }), _.fn.extend({
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        });
        var jb = _.now(),
            kb = /\?/;
        _.parseJSON = function(a) {
            return JSON.parse(a + "")
        }, _.parseXML = function(a) {
            var b, c;
            if (!a || "string" != typeof a) return null;
            try {
                c = new DOMParser, b = c.parseFromString(a, "text/xml")
            } catch (d) {
                b = void 0
            }
            return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b
        };
        var lb = /#.*$/,
            mb = /([?&])_=[^&]*/,
            nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            pb = /^(?:GET|HEAD)$/,
            qb = /^\/\//,
            rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            sb = {},
            tb = {},
            ub = "*/".concat("*"),
            vb = a.location.href,
            wb = rb.exec(vb.toLowerCase()) || [];
        _.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: vb,
                type: "GET",
                isLocal: ob.test(wb[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": ub,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": _.parseJSON,
                    "text xml": _.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(a, b) {
                return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
            },
            ajaxPrefilter: J(sb),
            ajaxTransport: J(tb),
            ajax: function(a, b) {
                function c(a, b, c, g) {
                    var i, k, r, s, u, w = b;
                    2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
                }
                "object" == typeof a && (b = a, a = void 0), b = b || {};
                var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b),
                    m = l.context || l,
                    n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
                    o = _.Deferred(),
                    p = _.Callbacks("once memory"),
                    q = l.statusCode || {},
                    r = {},
                    s = {},
                    t = 0,
                    u = "canceled",
                    v = {
                        readyState: 0,
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === t) {
                                if (!g)
                                    for (g = {}; b = nb.exec(f);) g[b[1].toLowerCase()] = b[2];
                                b = g[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function() {
                            return 2 === t ? f : null
                        },
                        setRequestHeader: function(a, b) {
                            var c = a.toLowerCase();
                            return t || (a = s[c] = s[c] || a, r[a] = b), this
                        },
                        overrideMimeType: function(a) {
                            return t || (l.mimeType = a), this
                        },
                        statusCode: function(a) {
                            var b;
                            if (a)
                                if (2 > t)
                                    for (b in a) q[b] = [q[b], a[b]];
                                else v.always(a[v.status]);
                            return this
                        },
                        abort: function(a) {
                            var b = a || u;
                            return d && d.abort(b), c(0, b), this
                        }
                    };
                if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + "").replace(lb, "").replace(qb, wb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(na) || [""], null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wb[3] || ("http:" === wb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sb, l, b, v), 2 === t) return v;
                j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !pb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : l.accepts["*"]);
                for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
                if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
                u = "abort";
                for (k in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) v[k](l[k]);
                if (d = K(tb, l, b, v)) {
                    v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                        v.abort("timeout")
                    }, l.timeout));
                    try {
                        t = 1, d.send(r, c)
                    } catch (w) {
                        if (!(2 > t)) throw w;
                        c(-1, w)
                    }
                } else c(-1, "No Transport");
                return v
            },
            getJSON: function(a, b, c) {
                return _.get(a, b, c, "json")
            },
            getScript: function(a, b) {
                return _.get(a, void 0, b, "script")
            }
        }), _.each(["get", "post"], function(a, b) {
            _[b] = function(a, c, d, e) {
                return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
                    url: a,
                    type: b,
                    dataType: e,
                    data: c,
                    success: d
                })
            }
        }), _._evalUrl = function(a) {
            return _.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, _.fn.extend({
            wrapAll: function(a) {
                var b;
                return _.isFunction(a) ? this.each(function(b) {
                    _(this).wrapAll(a.call(this, b))
                }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                    return a
                }).append(this)), this)
            },
            wrapInner: function(a) {
                return this.each(_.isFunction(a) ? function(b) {
                    _(this).wrapInner(a.call(this, b))
                } : function() {
                    var b = _(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = _.isFunction(a);
                return this.each(function(c) {
                    _(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
                }).end()
            }
        }), _.expr.filters.hidden = function(a) {
            return a.offsetWidth <= 0 && a.offsetHeight <= 0
        }, _.expr.filters.visible = function(a) {
            return !_.expr.filters.hidden(a)
        };
        var xb = /%20/g,
            yb = /\[\]$/,
            zb = /\r?\n/g,
            Ab = /^(?:submit|button|image|reset|file)$/i,
            Bb = /^(?:input|select|textarea|keygen)/i;
        _.param = function(a, b) {
            var c, d = [],
                e = function(a, b) {
                    b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function() {
                e(this.name, this.value)
            });
            else
                for (c in a) O(c, a[c], b, e);
            return d.join("&").replace(xb, "+")
        }, _.fn.extend({
            serialize: function() {
                return _.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = _.prop(this, "elements");
                    return a ? _.makeArray(a) : this
                }).filter(function() {
                    var a = this.type;
                    return this.name && !_(this).is(":disabled") && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a))
                }).map(function(a, b) {
                    var c = _(this).val();
                    return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(zb, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(zb, "\r\n")
                    }
                }).get()
            }
        }), _.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (a) {}
        };
        var Cb = 0,
            Db = {},
            Eb = {
                0: 200,
                1223: 204
            },
            Fb = _.ajaxSettings.xhr();
        a.attachEvent && a.attachEvent("onunload", function() {
            for (var a in Db) Db[a]()
        }), Y.cors = !!Fb && "withCredentials" in Fb, Y.ajax = Fb = !!Fb, _.ajaxTransport(function(a) {
            var b;
            return Y.cors || Fb && !a.crossDomain ? {
                send: function(c, d) {
                    var e, f = a.xhr(),
                        g = ++Cb;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) f.setRequestHeader(e, c[e]);
                    b = function(a) {
                        return function() {
                            b && (delete Db[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Eb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                                text: f.responseText
                            } : void 0, f.getAllResponseHeaders()))
                        }
                    }, f.onload = b(), f.onerror = b("error"), b = Db[g] = b("abort");
                    try {
                        f.send(a.hasContent && a.data || null)
                    } catch (h) {
                        if (b) throw h
                    }
                },
                abort: function() {
                    b && b()
                }
            } : void 0
        }), _.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(a) {
                    return _.globalEval(a), a
                }
            }
        }), _.ajaxPrefilter("script", function(a) {
            void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
        }), _.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c;
                return {
                    send: function(d, e) {
                        b = _("<script>").prop({
                            async: !0,
                            charset: a.scriptCharset,
                            src: a.url
                        }).on("load error", c = function(a) {
                            b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                        }), Z.head.appendChild(b[0])
                    },
                    abort: function() {
                        c && c()
                    }
                }
            }
        });
        var Gb = [],
            Hb = /(=)\?(?=&|$)|\?\?/;
        _.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = Gb.pop() || _.expando + "_" + jb++;
                return this[a] = !0, a
            }
        }), _.ajaxPrefilter("json jsonp", function(b, c, d) {
            var e, f, g, h = b.jsonp !== !1 && (Hb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(b.data) && "data");
            return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
                return g || _.error(e + " was not called"), g[0]
            }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
                g = arguments
            }, d.always(function() {
                a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
            }), "script") : void 0
        }), _.parseHTML = function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || Z;
            var d = ga.exec(a),
                e = !c && [];
            return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
        };
        var Ib = _.fn.load;
        _.fn.load = function(a, b, c) {
            if ("string" != typeof a && Ib) return Ib.apply(this, arguments);
            var d, e, f, g = this,
                h = a.indexOf(" ");
            return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
                url: a,
                type: e,
                dataType: "html",
                data: b
            }).done(function(a) {
                f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
            }).complete(c && function(a, b) {
                g.each(c, f || [a.responseText, b, a])
            }), this
        }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
            _.fn[b] = function(a) {
                return this.on(b, a)
            }
        }), _.expr.filters.animated = function(a) {
            return _.grep(_.timers, function(b) {
                return a === b.elem
            }).length
        };
        var Jb = a.document.documentElement;
        _.offset = {
            setOffset: function(a, b, c) {
                var d, e, f, g, h, i, j, k = _.css(a, "position"),
                    l = _(a),
                    m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
            }
        }, _.fn.extend({
            offset: function(a) {
                if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                    _.offset.setOffset(this, a, b)
                });
                var b, c, d = this[0],
                    e = {
                        top: 0,
                        left: 0
                    },
                    f = d && d.ownerDocument;
                return f ? (b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), c = P(f), {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e) : void 0
            },
            position: function() {
                if (this[0]) {
                    var a, b, c = this[0],
                        d = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {
                        top: b.top - d.top - _.css(c, "marginTop", !0),
                        left: b.left - d.left - _.css(c, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a = this.offsetParent || Jb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position");) a = a.offsetParent;
                    return a || Jb
                })
            }
        }), _.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(b, c) {
            var d = "pageYOffset" === c;
            _.fn[b] = function(e) {
                return qa(this, function(b, e, f) {
                    var g = P(b);
                    return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
                }, b, e, arguments.length, null)
            }
        }), _.each(["top", "left"], function(a, b) {
            _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
                return c ? (c = v(a, b), Qa.test(c) ? _(a).position()[b] + "px" : c) : void 0
            })
        }), _.each({
            Height: "height",
            Width: "width"
        }, function(a, b) {
            _.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function(c, d) {
                _.fn[d] = function(d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d),
                        g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return qa(this, function(b, c, d) {
                        var e;
                        return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
                    }, b, f ? d : void 0, f, null)
                }
            })
        }), _.fn.size = function() {
            return this.length
        }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return _
        });
        var Kb = a.jQuery,
            Lb = a.$;
        return _.noConflict = function(b) {
            return a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _
        }, typeof b === za && (a.jQuery = a.$ = _), _
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function(b) {
            a(b).on("click", c, this.close)
        };
    d.VERSION = "3.3.5", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.5", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function(b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function(a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0],
            k = a.Event("slide.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this
    };
    var e = function(c) {
        var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.5", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0
    }, d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function() {
            var d = a(this),
                e = b(d),
                f = {
                    relatedTarget: this
                };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"),
                e.removeClass("open").trigger("hidden.bs.dropdown", f))))
        }))
    }

    function d(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.VERSION = "3.3.5", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e),
                g = f.hasClass("open");
            if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h))) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }, g.prototype.keydown = function(c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d),
                    g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function(a) {
    "use strict";

    function b(b, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function(b) {
        var d = this,
            e = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function(b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function(b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.isInStateTrue = function() {
        for (var a in this.inState)
            if (this.inState[a]) return !0;
        return !1
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide())
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;
            if (j) {
                var n = h,
                    o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }
        var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() {
        return this.getTitle()
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = d ? {
                top: 0,
                left: 0
            } : b.offset(),
            g = {
                scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
            },
            h = d ? {
                width: a(window).width(),
                height: a(window).height()
            } : null;
        return a.extend({}, e, g, h, f)
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function() {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function(a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function() {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function() {
        this.enabled = !0
    }, c.prototype.disable = function() {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout), this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.5", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.5", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function() {
        var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [
                [f[c]().top + d, e]
            ] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", {
                    relatedTarget: b[0]
                }),
                g = a.Event("show.bs.tab", {
                    relatedTarget: e[0]
                });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }
        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this
    };
    var e = function(c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.5", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
            b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery),
function(a) {
    function b(b) {
        return !b || void 0 !== b.allowPageScroll || void 0 === b.swipe && void 0 === b.swipeStatus || (b.allowPageScroll = j), void 0 !== b.click && void 0 === b.tap && (b.tap = b.click), b || (b = {}), b = a.extend({}, a.fn.swipe.defaults, b), this.each(function() {
            var d = a(this),
                e = d.data(z);
            e || (e = new c(this, b), d.data(z, e))
        })
    }

    function c(b, c) {
        function A(b) {
            if (!(ha() || a(b.target).closest(c.excludedElements, Qa).length > 0)) {
                var d, e = b.originalEvent ? b.originalEvent : b,
                    f = y ? e.touches[0] : e;
                return Ra = u, y ? Sa = e.touches.length : b.preventDefault(), Ha = 0, Ia = null, Oa = null, Ja = 0, Ka = 0, La = 0, Ma = 1, Na = 0, Ta = ma(), Pa = pa(), fa(), !y || Sa === c.fingers || c.fingers === s || P() ? (ja(0, f), Ua = ya(), 2 == Sa && (ja(1, e.touches[1]), Ka = La = sa(Ta[0].start, Ta[1].start)), (c.swipeStatus || c.pinchStatus) && (d = H(e, Ra))) : d = !1, d === !1 ? (Ra = x, H(e, Ra), d) : void ia(!0)
            }
        }

        function B(a) {
            var b = a.originalEvent ? a.originalEvent : a;
            if (Ra !== w && Ra !== x && !ga()) {
                var d, e = y ? b.touches[0] : b,
                    f = ka(e);
                if (Va = ya(), y && (Sa = b.touches.length), Ra = v, 2 == Sa && (0 == Ka ? (ja(1, b.touches[1]), Ka = La = sa(Ta[0].start, Ta[1].start)) : (ka(b.touches[1]), La = sa(Ta[0].end, Ta[1].end), Oa = ua(Ta[0].end, Ta[1].end)), Ma = ta(Ka, La), Na = Math.abs(Ka - La)), Sa === c.fingers || c.fingers === s || !y || P()) {
                    if (Ia = xa(f.start, f.end), N(a, Ia), Ha = va(f.start, f.end), Ja = ra(), na(Ia, Ha), (c.swipeStatus || c.pinchStatus) && (d = H(b, Ra)), !c.triggerOnTouchEnd || c.triggerOnTouchLeave) {
                        var g = !0;
                        if (c.triggerOnTouchLeave) {
                            var h = za(this);
                            g = Aa(f.end, h)
                        }!c.triggerOnTouchEnd && g ? Ra = G(v) : c.triggerOnTouchLeave && !g && (Ra = G(w)), (Ra == x || Ra == w) && H(b, Ra)
                    }
                } else Ra = x, H(b, Ra);
                d === !1 && (Ra = x, H(b, Ra))
            }
        }

        function C(a) {
            var b = a.originalEvent;
            return y && b.touches.length > 0 ? (ea(), !0) : (ga() && (Sa = Xa), a.preventDefault(), Va = ya(), Ja = ra(), K() ? (Ra = x, H(b, Ra)) : c.triggerOnTouchEnd || 0 == c.triggerOnTouchEnd && Ra === v ? (Ra = w, H(b, Ra)) : !c.triggerOnTouchEnd && W() ? (Ra = w, I(b, Ra, n)) : Ra === v && (Ra = x, H(b, Ra)), void ia(!1))
        }

        function D() {
            Sa = 0, Va = 0, Ua = 0, Ka = 0, La = 0, Ma = 1, fa(), ia(!1)
        }

        function E(a) {
            var b = a.originalEvent;
            c.triggerOnTouchLeave && (Ra = G(w), H(b, Ra))
        }

        function F() {
            Qa.unbind(Ca, A), Qa.unbind(Ga, D), Qa.unbind(Da, B), Qa.unbind(Ea, C), Fa && Qa.unbind(Fa, E), ia(!1)
        }

        function G(a) {
            var b = a,
                d = M(),
                e = J(),
                f = K();
            return !d || f ? b = x : !e || a != v || c.triggerOnTouchEnd && !c.triggerOnTouchLeave ? !e && a == w && c.triggerOnTouchLeave && (b = x) : b = w, b
        }

        function H(a, b) {
            var c = void 0;
            return T() || S() ? c = I(a, b, l) : (Q() || P()) && c !== !1 && (c = I(a, b, m)), ca() && c !== !1 ? c = I(a, b, o) : da() && c !== !1 ? c = I(a, b, p) : ba() && c !== !1 && (c = I(a, b, n)), b === x && D(a), b === w && (y ? 0 == a.touches.length && D(a) : D(a)), c
        }

        function I(b, j, k) {
            var q = void 0;
            if (k == l) {
                if (Qa.trigger("swipeStatus", [j, Ia || null, Ha || 0, Ja || 0, Sa]), c.swipeStatus && (q = c.swipeStatus.call(Qa, b, j, Ia || null, Ha || 0, Ja || 0, Sa), q === !1)) return !1;
                if (j == w && R()) {
                    if (Qa.trigger("swipe", [Ia, Ha, Ja, Sa]), c.swipe && (q = c.swipe.call(Qa, b, Ia, Ha, Ja, Sa), q === !1)) return !1;
                    switch (Ia) {
                        case d:
                            Qa.trigger("swipeLeft", [Ia, Ha, Ja, Sa]), c.swipeLeft && (q = c.swipeLeft.call(Qa, b, Ia, Ha, Ja, Sa));
                            break;
                        case e:
                            Qa.trigger("swipeRight", [Ia, Ha, Ja, Sa]), c.swipeRight && (q = c.swipeRight.call(Qa, b, Ia, Ha, Ja, Sa));
                            break;
                        case f:
                            Qa.trigger("swipeUp", [Ia, Ha, Ja, Sa]), c.swipeUp && (q = c.swipeUp.call(Qa, b, Ia, Ha, Ja, Sa));
                            break;
                        case g:
                            Qa.trigger("swipeDown", [Ia, Ha, Ja, Sa]), c.swipeDown && (q = c.swipeDown.call(Qa, b, Ia, Ha, Ja, Sa))
                    }
                }
            }
            if (k == m) {
                if (Qa.trigger("pinchStatus", [j, Oa || null, Na || 0, Ja || 0, Sa, Ma]), c.pinchStatus && (q = c.pinchStatus.call(Qa, b, j, Oa || null, Na || 0, Ja || 0, Sa, Ma), q === !1)) return !1;
                if (j == w && O()) switch (Oa) {
                    case h:
                        Qa.trigger("pinchIn", [Oa || null, Na || 0, Ja || 0, Sa, Ma]), c.pinchIn && (q = c.pinchIn.call(Qa, b, Oa || null, Na || 0, Ja || 0, Sa, Ma));
                        break;
                    case i:
                        Qa.trigger("pinchOut", [Oa || null, Na || 0, Ja || 0, Sa, Ma]), c.pinchOut && (q = c.pinchOut.call(Qa, b, Oa || null, Na || 0, Ja || 0, Sa, Ma))
                }
            }
            return k == n ? (j === x || j === w) && (clearTimeout(Za), X() && !$() ? (Ya = ya(), Za = setTimeout(a.proxy(function() {
                Ya = null, Qa.trigger("tap", [b.target]), c.tap && (q = c.tap.call(Qa, b, b.target))
            }, this), c.doubleTapThreshold)) : (Ya = null, Qa.trigger("tap", [b.target]), c.tap && (q = c.tap.call(Qa, b, b.target)))) : k == o ? (j === x || j === w) && (clearTimeout(Za), Ya = null, Qa.trigger("doubletap", [b.target]), c.doubleTap && (q = c.doubleTap.call(Qa, b, b.target))) : k == p && (j === x || j === w) && (clearTimeout(Za), Ya = null, Qa.trigger("longtap", [b.target]), c.longTap && (q = c.longTap.call(Qa, b, b.target))), q
        }

        function J() {
            var a = !0;
            return null !== c.threshold && (a = Ha >= c.threshold), a
        }

        function K() {
            var a = !1;
            return null !== c.cancelThreshold && null !== Ia && (a = oa(Ia) - Ha >= c.cancelThreshold), a
        }

        function L() {
            return null !== c.pinchThreshold ? Na >= c.pinchThreshold : !0
        }

        function M() {
            var a;
            return a = c.maxTimeThreshold && Ja >= c.maxTimeThreshold ? !1 : !0
        }

        function N(a, b) {
            if (c.allowPageScroll === j || P()) a.preventDefault();
            else {
                var h = c.allowPageScroll === k;
                switch (b) {
                    case d:
                        (c.swipeLeft && h || !h && c.allowPageScroll != q) && a.preventDefault();
                        break;
                    case e:
                        (c.swipeRight && h || !h && c.allowPageScroll != q) && a.preventDefault();
                        break;
                    case f:
                        (c.swipeUp && h || !h && c.allowPageScroll != r) && a.preventDefault();
                        break;
                    case g:
                        (c.swipeDown && h || !h && c.allowPageScroll != r) && a.preventDefault()
                }
            }
        }

        function O() {
            var a = U(),
                b = V(),
                c = L();
            return a && b && c
        }

        function P() {
            return !!(c.pinchStatus || c.pinchIn || c.pinchOut)
        }

        function Q() {
            return !(!O() || !P())
        }

        function R() {
            var a = M(),
                b = J(),
                c = U(),
                d = V(),
                e = K(),
                f = !e && d && c && b && a;
            return f
        }

        function S() {
            return !!(c.swipe || c.swipeStatus || c.swipeLeft || c.swipeRight || c.swipeUp || c.swipeDown)
        }

        function T() {
            return !(!R() || !S())
        }

        function U() {
            return Sa === c.fingers || c.fingers === s || !y
        }

        function V() {
            return 0 !== Ta[0].end.x
        }

        function W() {
            return !!c.tap
        }

        function X() {
            return !!c.doubleTap
        }

        function Y() {
            return !!c.longTap
        }

        function Z() {
            if (null == Ya) return !1;
            var a = ya();
            return X() && a - Ya <= c.doubleTapThreshold
        }

        function $() {
            return Z()
        }

        function _() {
            return !(1 !== Sa && y || !isNaN(Ha) && 0 !== Ha)
        }

        function aa() {
            return Ja > c.longTapThreshold && t > Ha
        }

        function ba() {
            return !(!_() || !W())
        }

        function ca() {
            return !(!Z() || !X())
        }

        function da() {
            return !(!aa() || !Y())
        }

        function ea() {
            Wa = ya(), Xa = event.touches.length + 1
        }

        function fa() {
            Wa = 0, Xa = 0
        }

        function ga() {
            var a = !1;
            if (Wa) {
                var b = ya() - Wa;
                b <= c.fingerReleaseThreshold && (a = !0)
            }
            return a
        }

        function ha() {
            return !(Qa.data(z + "_intouch") !== !0)
        }

        function ia(a) {
            a === !0 ? (Qa.bind(Da, B), Qa.bind(Ea, C), Fa && Qa.bind(Fa, E)) : (Qa.unbind(Da, B, !1), Qa.unbind(Ea, C, !1), Fa && Qa.unbind(Fa, E, !1)), Qa.data(z + "_intouch", a === !0)
        }

        function ja(a, b) {
            var c = void 0 !== b.identifier ? b.identifier : 0;
            return Ta[a].identifier = c, Ta[a].start.x = Ta[a].end.x = b.pageX || b.clientX, Ta[a].start.y = Ta[a].end.y = b.pageY || b.clientY, Ta[a]
        }

        function ka(a) {
            var b = void 0 !== a.identifier ? a.identifier : 0,
                c = la(b);
            return c.end.x = a.pageX || a.clientX, c.end.y = a.pageY || a.clientY, c
        }

        function la(a) {
            for (var b = 0; b < Ta.length; b++)
                if (Ta[b].identifier == a) return Ta[b]
        }

        function ma() {
            for (var a = [], b = 0; 5 >= b; b++) a.push({
                start: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                },
                identifier: 0
            });
            return a
        }

        function na(a, b) {
            b = Math.max(b, oa(a)), Pa[a].distance = b
        }

        function oa(a) {
            return Pa[a].distance
        }

        function pa() {
            var a = {};
            return a[d] = qa(d), a[e] = qa(e), a[f] = qa(f), a[g] = qa(g), a
        }

        function qa(a) {
            return {
                direction: a,
                distance: 0
            }
        }

        function ra() {
            return Va - Ua
        }

        function sa(a, b) {
            var c = Math.abs(a.x - b.x),
                d = Math.abs(a.y - b.y);
            return Math.round(Math.sqrt(c * c + d * d))
        }

        function ta(a, b) {
            var c = b / a * 1;
            return c.toFixed(2)
        }

        function ua() {
            return 1 > Ma ? i : h
        }

        function va(a, b) {
            return Math.round(Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2)))
        }

        function wa(a, b) {
            var c = a.x - b.x,
                d = b.y - a.y,
                e = Math.atan2(d, c),
                f = Math.round(180 * e / Math.PI);
            return 0 > f && (f = 360 - Math.abs(f)), f
        }

        function xa(a, b) {
            var c = wa(a, b);
            return 45 >= c && c >= 0 ? d : 360 >= c && c >= 315 ? d : c >= 135 && 225 >= c ? e : c > 45 && 135 > c ? g : f
        }

        function ya() {
            var a = new Date;
            return a.getTime()
        }

        function za(b) {
            b = a(b);
            var c = b.offset(),
                d = {
                    left: c.left,
                    right: c.left + b.outerWidth(),
                    top: c.top,
                    bottom: c.top + b.outerHeight()
                };
            return d
        }

        function Aa(a, b) {
            return a.x > b.left && a.x < b.right && a.y > b.top && a.y < b.bottom
        }
        var Ba = y || !c.fallbackToMouseEvents,
            Ca = Ba ? "touchstart" : "mousedown",
            Da = Ba ? "touchmove" : "mousemove",
            Ea = Ba ? "touchend" : "mouseup",
            Fa = Ba ? null : "mouseleave",
            Ga = "touchcancel",
            Ha = 0,
            Ia = null,
            Ja = 0,
            Ka = 0,
            La = 0,
            Ma = 1,
            Na = 0,
            Oa = 0,
            Pa = null,
            Qa = a(b),
            Ra = "start",
            Sa = 0,
            Ta = null,
            Ua = 0,
            Va = 0,
            Wa = 0,
            Xa = 0,
            Ya = 0,
            Za = null;
        try {
            Qa.bind(Ca, A), Qa.bind(Ga, D)
        } catch ($a) {
            a.error("events not supported " + Ca + "," + Ga + " on jQuery.swipe")
        }
        this.enable = function() {
            return Qa.bind(Ca, A), Qa.bind(Ga, D), Qa
        }, this.disable = function() {
            return F(), Qa
        }, this.destroy = function() {
            return F(), Qa.data(z, null), Qa
        }, this.option = function(b, d) {
            if (void 0 !== c[b]) {
                if (void 0 === d) return c[b];
                c[b] = d
            } else a.error("Option " + b + " does not exist on jQuery.swipe.options")
        }
    }
    var d = "left",
        e = "right",
        f = "up",
        g = "down",
        h = "in",
        i = "out",
        j = "none",
        k = "auto",
        l = "swipe",
        m = "pinch",
        n = "tap",
        o = "doubletap",
        p = "longtap",
        q = "horizontal",
        r = "vertical",
        s = "all",
        t = 10,
        u = "start",
        v = "move",
        w = "end",
        x = "cancel",
        y = "ontouchstart" in window,
        z = "TouchSwipe",
        A = {
            fingers: 1,
            threshold: 75,
            cancelThreshold: null,
            pinchThreshold: 20,
            maxTimeThreshold: null,
            fingerReleaseThreshold: 250,
            longTapThreshold: 500,
            doubleTapThreshold: 200,
            swipe: null,
            swipeLeft: null,
            swipeRight: null,
            swipeUp: null,
            swipeDown: null,
            swipeStatus: null,
            pinchIn: null,
            pinchOut: null,
            pinchStatus: null,
            click: null,
            tap: null,
            doubleTap: null,
            longTap: null,
            triggerOnTouchEnd: !0,
            triggerOnTouchLeave: !1,
            allowPageScroll: "auto",
            fallbackToMouseEvents: !0,
            excludedElements: "button, input, select, textarea, a, .noSwipe"
        };
    a.fn.swipe = function(c) {
        var d = a(this),
            e = d.data(z);
        if (e && "string" == typeof c) {
            if (e[c]) return e[c].apply(this, Array.prototype.slice.call(arguments, 1));
            a.error("Method " + c + " does not exist on jQuery.swipe")
        } else if (!(e || "object" != typeof c && c)) return b.apply(this, arguments);
        return d
    }, a.fn.swipe.defaults = A, a.fn.swipe.phases = {
        PHASE_START: u,
        PHASE_MOVE: v,
        PHASE_END: w,
        PHASE_CANCEL: x
    }, a.fn.swipe.directions = {
        LEFT: d,
        RIGHT: e,
        UP: f,
        DOWN: g,
        IN: h,
        OUT: i
    }, a.fn.swipe.pageScroll = {
        NONE: j,
        HORIZONTAL: q,
        VERTICAL: r,
        AUTO: k
    }, a.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: s
    }
}(jQuery), $(function() {
        var a = navigator.userAgent.toLowerCase(),
            b = a.indexOf("mobile") > -1,
            c = {
                config: function() {
                    c.viewPortHack(), c.carousel(), c.carousel_control()
                },
                viewPortHack: function() {
                    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
                        var a = document.createElement("style");
                        a.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")), document.getElementsByTagName("head")[0].appendChild(a)
                    }
                },
                carousel: function() {
                    $(".owl-carousel").each(function() {
                        var a = $(this).attr("items"),
                            b = $(this).attr("delay"),
                            c = $(this);
                        c.owlCarousel({
                            autoPlay: b,
                            items: a,
                            itemsCustom: [
                                [0, 1],
                                [450, 2],
                                [600, 2],
                                [700, 3],
                                [1e3, 4],
                                [1200, 4],
                                [1400, a],
                                [1600, a]
                            ]
                        }), $(".promo-carousel-left").on("click", function() {
                            c.trigger("owl.next")
                        }), $(".promo-carousel-right").on("click", function() {
                            c.trigger("owl.prev")
                        })
                    }), $("#in_theater .owl-carousel").each(function() {
                        var a = $(this).attr("items"),
                            b = $(this).attr("delay"),
                            c = $(this);
                        c.owlCarousel({
                            autoPlay: b,
                            items: a,
                            itemsCustom: [
                                [0, 1],
                                [450, 2],
                                [600, 2],
                                [700, 3],
                                [1e3, 4],
                                [1200, 4],
                                [1400, a],
                                [1600, a]
                            ]
                        }), $(".promo-carousel-left").on("click", function() {
                            c.trigger("owl.next")
                        }), $(".promo-carousel-right").on("click", function() {
                            c.trigger("owl.prev")
                        })
                    })
                },
                search: function(a) {
                    $(".modalsearch").removeClass("none").addClass("block animated fadeInDownBig"), $(".modalsearch-back").removeClass("none").addClass("block in"), $(".search-input").focus(), $(".search-input").on("keydown", function() {
                        word = $.trim($(this).val()), $(".search-area-container").html(""), word.length >= 1 ? $.ajax({
                            type: "POST",
                            url: "/inc/search.asp",
                            data: {
                                word: word
                            },
                            contentType: "application/x-www-form-urlencoded",
                            dataType: "text",
                            success: function(a) {
                                $(".search-area-container").append(a)
                            }
                        }) : $(".search-area-container").html("")
                    })
                },

                search_close: function() {
                    return d = {}, $(".modalsearch").removeClass("animated fadeInDownBig").addClass("animated fadeOutUp"), setTimeout(function() {
                        $(".modalsearch").addClass("none").removeClass("block animated fadeOutUp"), $(".modalsearch-back").removeClass("block in").addClass("none")
                    }, 10), !1
                },
                carousel_item: function() {
                    $(".carousel-item > li").on("click", function() {
                        $(".carousel-item > li").removeClass("active"), $(this).addClass("active")
                    })
                },
                carousel_control: function() {
                    $(".carousel-control").on("click", function() {})
                }
            };
        c.config(), $(".menu-large").hover(function() {
            $(this).addClass("open"), $(".dropdown-menu", this).stop().fadeIn("fast"), $(".menu-mask").addClass("block").removeClass("none")
        }, function() {
            $(".dropdown-menu", this).stop().fadeOut("fast"), $(this).removeClass("open"), $(".menu-mask").addClass("none").removeClass("block")
        }), $(".navbar-toggle").on("click", function() {
            $(".menu-mask.block").length ? $(".menu-mask").addClass("none").removeClass("block") : $(".menu-mask").addClass("block").removeClass("none")
        }), $(".megamenu .container").hover(function() {
            $(".megamenu img").animate({
                opacity: ".5"
            }, 0)
        }, function() {
            $(".megamenu img").animate({
                opacity: "1"
            })
        }), $(".megamenu img").hover(function() {
            $(this).animate({
                opacity: "1"
            }, 0)
        }, function() {
            $(this).animate({
                opacity: ".5"
            })
        });
        var d = {};
        $(document).on("click", ".btn-search", function() {
            return c.search(b), !1
        }), $(document).on("click", ".search-close-btn", function() {
            return c.search_close(), !1
        }), $(document).on("keyup", function(a) {
            27 == a.keyCode && (c.video_close(), c.search_close())
        }), $(".side-menu-open").on("click", function() {
            var a = $(this).attr("data-event");
            c.sidebar_menu(a)
        }), $(".menu-step-1 li a").hover(function() {
            $(this).tab("show")
        }), $(".scroll-a a[href*=#]").click(function(a) {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var b = $(this.hash);
                if (console.log(b), "/" !== location.pathname && (location.href = "/" + $(this).attr("href")), b = b.length ? b : $("[name=" + this.hash.slice(1) + "]"), b.length) return $(".menu-large").removeClass("open"), $("html,body").animate({
                    scrollTop: b.offset().top - 80
                }, 1e3), !1
            }
        }), $(document).on("keyup", function(a) {
            27 == a.keyCode && (c.video_close(), c.search_close())
        }), $(".carousel-inner").swipe({
            swipeLeft: function(a, b, c, d, e) {
                $(this).parent().carousel("next")
            },
            swipeRight: function() {
                $(this).parent().carousel("prev")
            },
            threshold: 0
        }), $("body").delay(350).css({
            overflow: "hidden"
        }), setTimeout(function() {
            0 == $(".v_movie.active").next().length && $(".next_link").css("display", "none")
        }, 200), setTimeout(function() {
            0 == $(".v_movie.active").prev().length && $(".prev_link").css("display", "none")
        }, 200), $(document).on("click", ".next_link", function() {
            var a = $(".v_movie.active").next();
            if (a && a.length > 0) {
                $(".v_movie.active").next().attr("data-id");
                location.href = $(".v_movie.active").next().attr("data-link")
            }
            return !1
        }), $(document).on("click", ".prev_link", function() {
            var a = $(".v_movie.active").prev();
            if (a && a.length > 0) {
                $(".v_movie.active").prev().attr("data-id");
                location.href = $(".v_movie.active").prev().attr("data-link")
            }
            return !1
        })
    }), $(window).load(function() {
        $(".preloader").delay(350).fadeOut("slow"), $("body").delay(350).css({
            overflow: "visible"
        })
    }), window.Modernizr = function(a, b, c) {
        function d(a) {
            s.cssText = a
        }

        function e(a, b) {
            return typeof a === b
        }

        function f(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function g(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!f(e, "-") && s[e] !== c) return "pfx" == b ? e : !0
            }
            return !1
        }

        function h(a, b, d) {
            for (var f in a) {
                var g = b[a[f]];
                if (g !== c) return d === !1 ? a[f] : e(g, "function") ? g.bind(d || b) : g
            }
            return !1
        }

        function i(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                f = (a + " " + u.join(d + " ") + d).split(" ");
            return e(b, "string") || e(b, "undefined") ? g(f, b) : (f = (a + " " + v.join(d + " ") + d).split(" "), h(f, b, c))
        }
        var j, k, l, m = "2.6.2",
            n = {},
            o = !0,
            p = b.documentElement,
            q = "modernizr",
            r = b.createElement(q),
            s = r.style,
            t = ({}.toString, "Webkit Moz O ms"),
            u = t.split(" "),
            v = t.toLowerCase().split(" "),
            w = {},
            x = [],
            y = x.slice,
            z = {}.hasOwnProperty;
        l = e(z, "undefined") || e(z.call, "undefined") ? function(a, b) {
            return b in a && e(a.constructor.prototype[b], "undefined")
        } : function(a, b) {
            return z.call(a, b)
        }, Function.prototype.bind || (Function.prototype.bind = function(a) {
            var b = this;
            if ("function" != typeof b) throw new TypeError;
            var c = y.call(arguments, 1),
                d = function() {
                    if (this instanceof d) {
                        var e = function() {};
                        e.prototype = b.prototype;
                        var f = new e,
                            g = b.apply(f, c.concat(y.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return b.apply(a, c.concat(y.call(arguments)))
                };
            return d
        }), w.cssanimations = function() {
            return i("animationName")
        };
        for (var A in w) l(w, A) && (k = A.toLowerCase(), n[k] = w[A](), x.push((n[k] ? "" : "no-") + k));
        return n.addTest = function(a, b) {
                if ("object" == typeof a)
                    for (var d in a) l(a, d) && n.addTest(d, a[d]);
                else {
                    if (a = a.toLowerCase(), n[a] !== c) return n;
                    b = "function" == typeof b ? b() : b, "undefined" != typeof o && o && (p.className += " " + (b ? "" : "no-") + a), n[a] = b
                }
                return n
            }, d(""), r = j = null,
            function(a, b) {
                function c(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function d() {
                    var a = r.elements;
                    return "string" == typeof a ? a.split(" ") : a
                }

                function e(a) {
                    var b = q[a[o]];
                    return b || (b = {}, p++, a[o] = p, q[p] = b), b
                }

                function f(a, c, d) {
                    if (c || (c = b), k) return c.createElement(a);
                    d || (d = e(c));
                    var f;
                    return f = d.cache[a] ? d.cache[a].cloneNode() : n.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), f.canHaveChildren && !m.test(a) ? d.frag.appendChild(f) : f
                }

                function g(a, c) {
                    if (a || (a = b), k) return a.createDocumentFragment();
                    c = c || e(a);
                    for (var f = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++) f.createElement(h[g]);
                    return f
                }

                function h(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return r.shivMethods ? f(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/\w+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(r, b.frag)
                }

                function i(a) {
                    a || (a = b);
                    var d = e(a);
                    return r.shivCSS && !j && !d.hasCSS && (d.hasCSS = !!c(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), k || h(a, d), a
                }
                var j, k, l = a.html5 || {},
                    m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    n = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    o = "_html5shiv",
                    p = 0,
                    q = {};
                ! function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", j = "hidden" in a, k = 1 == a.childNodes.length || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
                        }()
                    } catch (c) {
                        j = !0, k = !0
                    }
                }();
                var r = {
                    elements: l.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: l.shivCSS !== !1,
                    supportsUnknownElements: k,
                    shivMethods: l.shivMethods !== !1,
                    type: "default",
                    shivDocument: i,
                    createElement: f,
                    createDocumentFragment: g
                };
                a.html5 = r, i(b)
            }(this, b), n._version = m, n._domPrefixes = v, n._cssomPrefixes = u, n.testProp = function(a) {
                return g([a])
            }, n.testAllProps = i, p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (o ? " js " + x.join(" ") : ""), n
    }(this, this.document),
    function(a, b, c) {
        function d(a) {
            return "[object Function]" == q.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = r.shift();
            s = 1, a ? a.t ? o(function() {
                ("c" == a.t ? m.injectCss : m.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : s = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!n && g(l.readyState) && (t.r = n = 1, !s && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && o(function() {
                        v.removeChild(l)
                    }, 50);
                    for (var d in A[c]) A[c].hasOwnProperty(d) && A[c][d].onload()
                }
            }
            var j = j || m.errorTimeout,
                l = b.createElement(a),
                n = 0,
                q = 0,
                t = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === A[c] && (q = 1, A[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                k.call(this, q)
            }, r.splice(e, 0, t), "img" != a && (q || 2 === A[c] ? (v.insertBefore(l, u ? null : p), o(k, j)) : A[c].push(l))
        }

        function j(a, b, c, d, f) {
            return s = 0, b = b || "j", e(a) ? i("c" == b ? x : w, a, b, this.i++, c, d, f) : (r.splice(this.i++, 0, a), 1 == r.length && h()), this
        }

        function k() {
            var a = m;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l, m, n = b.documentElement,
            o = a.setTimeout,
            p = b.getElementsByTagName("script")[0],
            q = {}.toString,
            r = [],
            s = 0,
            t = "MozAppearance" in n.style,
            u = t && !!b.createRange().compareNode,
            v = u ? n : p.parentNode,
            n = a.opera && "[object Opera]" == q.call(a.opera),
            n = !!b.attachEvent && !n,
            w = t ? "object" : n ? "script" : "img",
            x = n ? "script" : w,
            y = Array.isArray || function(a) {
                return "[object Array]" == q.call(a)
            },
            z = [],
            A = {},
            B = {
                timeout: function(a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            };
        m = function(a) {
            function b(a) {
                var b, c, d, a = a.split("!"),
                    e = z.length,
                    f = a.pop(),
                    g = a.length,
                    f = {
                        url: f,
                        origUrl: f,
                        prefixes: a
                    };
                for (c = 0; g > c; c++) d = a[c].split("="), (b = B[d.shift()]) && (f = b(f, d));
                for (c = 0; e > c; c++) f = z[c](f);
                return f
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (A[i.url] ? i.noexec = !0 : A[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), A[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (l = function() {
                            var a = [].slice.call(arguments);
                            m.apply(this, a), n()
                        }), g(a, l, b, 0, j);
                        else if (Object(a) === a)
                            for (i in h = function() {
                                    var b, c = 0;
                                    for (b in a) a.hasOwnProperty(b) && c++;
                                    return c
                                }(), a) a.hasOwnProperty(i) && (!c && !--h && (d(l) ? l = function() {
                                var a = [].slice.call(arguments);
                                m.apply(this, a), n()
                            } : l[i] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), n()
                                }
                            }(m[i])), g(a[i], l, b, i, j))
                    } else !c && n()
                }
                var h, i, j = !!a.test,
                    k = a.load || a.both,
                    l = a.callback || f,
                    m = l,
                    n = a.complete || f;
                c(j ? a.yep : a.nope, !!k), k && c(k)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (y(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : y(j) ? m(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, m.addPrefix = function(a, b) {
            B[a] = b
        }, m.addFilter = function(a) {
            z.push(a)
        }, m.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", l = function() {
            b.removeEventListener("DOMContentLoaded", l, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k, l, n = b.createElement("script"),
                e = e || m.errorTimeout;
            n.src = a;
            for (l in d) n.setAttribute(l, d[l]);
            c = j ? h : c || f, n.onreadystatechange = n.onload = function() {
                !k && g(n.readyState) && (k = 1, c(), n.onload = n.onreadystatechange = null)
            }, o(function() {
                k || (k = 1, c(1))
            }, e), i ? n.onload() : p.parentNode.insertBefore(n, p)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var j, e = b.createElement("link"),
                c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (p.parentNode.insertBefore(e, p), o(c, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    },
    function(a) {
        "use strict";

        function b(a) {
            if (a) {
                if ("string" == typeof d[a]) return a;
                a = a.charAt(0).toUpperCase() + a.slice(1);
                for (var b, e = 0, f = c.length; f > e; e++)
                    if (b = c[e] + a, "string" == typeof d[b]) return b
            }
        }
        var c = "Webkit Moz ms Ms O".split(" "),
            d = document.documentElement.style;
        "function" == typeof define && define.amd ? define(function() {
            return b
        }) : a.getStyleProperty = b
    }(window),
    function(a) {
        "use strict";

        function b(a) {
            var b = parseFloat(a),
                c = -1 === a.indexOf("%") && !isNaN(b);
            return c && b
        }

        function c() {
            for (var a = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, b = 0, c = g.length; c > b; b++) {
                var d = g[b];
                a[d] = 0
            }
            return a
        }

        function d(a) {
            function d(a) {
                if ("string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                    var d = f(a);
                    if ("none" === d.display) return c();
                    var i = {};
                    i.width = a.offsetWidth, i.height = a.offsetHeight;
                    for (var j = i.isBorderBox = !(!h || !d[h] || "border-box" !== d[h]), k = 0, l = g.length; l > k; k++) {
                        var m = g[k],
                            n = d[m],
                            o = parseFloat(n);
                        i[m] = isNaN(o) ? 0 : o
                    }
                    var p = i.paddingLeft + i.paddingRight,
                        q = i.paddingTop + i.paddingBottom,
                        r = i.marginLeft + i.marginRight,
                        s = i.marginTop + i.marginBottom,
                        t = i.borderLeftWidth + i.borderRightWidth,
                        u = i.borderTopWidth + i.borderBottomWidth,
                        v = j && e,
                        w = b(d.width);
                    w !== !1 && (i.width = w + (v ? 0 : p + t));
                    var x = b(d.height);
                    return x !== !1 && (i.height = x + (v ? 0 : q + u)), i.innerWidth = i.width - (p + t), i.innerHeight = i.height - (q + u), i.outerWidth = i.width + r, i.outerHeight = i.height + s, i
                }
            }
            var e, h = a("boxSizing");
            return function() {
                if (h) {
                    var a = document.createElement("div");
                    a.style.width = "200px", a.style.padding = "1px 2px 3px 4px", a.style.borderStyle = "solid", a.style.borderWidth = "1px 2px 3px 4px", a.style[h] = "border-box";
                    var c = document.body || document.documentElement;
                    c.appendChild(a);
                    var d = f(a);
                    e = 200 === b(d.width), c.removeChild(a)
                }
            }(), d
        }
        var e = document.defaultView,
            f = e && e.getComputedStyle ? function(a) {
                return e.getComputedStyle(a, null)
            } : function(a) {
                return a.currentStyle
            },
            g = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define(["get-style-property"], d) : a.getSize = d(a.getStyleProperty)
    }(window),
    function(a) {
        "use strict";
        var b = document.documentElement,
            c = function() {};
        b.addEventListener ? c = function(a, b, c) {
            a.addEventListener(b, c, !1)
        } : b.attachEvent && (c = function(b, c, d) {
            b[c + d] = d.handleEvent ? function() {
                var b = a.event;
                b.target = b.target || b.srcElement, d.handleEvent.call(d, b)
            } : function() {
                var c = a.event;
                c.target = c.target || c.srcElement, d.call(b, c)
            }, b.attachEvent("on" + c, b[c + d])
        });
        var d = function() {};
        b.removeEventListener ? d = function(a, b, c) {
            a.removeEventListener(b, c, !1)
        } : b.detachEvent && (d = function(a, b, c) {
            a.detachEvent("on" + b, a[b + c]);
            try {
                delete a[b + c]
            } catch (d) {
                a[b + c] = void 0
            }
        });
        var e = {
            bind: c,
            unbind: d
        };
        "function" == typeof define && define.amd ? define(e) : a.eventie = e
    }(this),
    function(a) {
        "use strict";

        function b(a) {
            "function" == typeof a && (b.isReady ? a() : f.push(a))
        }

        function c(a) {
            var c = "readystatechange" === a.type && "complete" !== e.readyState;
            if (!b.isReady && !c) {
                b.isReady = !0;
                for (var d = 0, g = f.length; g > d; d++) {
                    var h = f[d];
                    h()
                }
            }
        }

        function d(d) {
            return d.bind(e, "DOMContentLoaded", c), d.bind(e, "readystatechange", c), d.bind(a, "load", c), b
        }
        var e = a.document,
            f = [];
        b.isReady = !1, "function" == typeof define && define.amd ? define(["eventie"], d) : a.docReady = d(a.eventie)
    }(this),
    function(a) {
        "use strict";

        function b() {}

        function c(a, b) {
            if (e) return b.indexOf(a);
            for (var c = b.length; c--;)
                if (b[c] === a) return c;
            return -1
        }
        var d = b.prototype,
            e = Array.prototype.indexOf ? !0 : !1;
        d._getEvents = function() {
            return this._events || (this._events = {})
        }, d.getListeners = function(a) {
            var b, c, d = this._getEvents();
            if ("object" == typeof a) {
                b = {};
                for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
            } else b = d[a] || (d[a] = []);
            return b
        }, d.getListenersAsObject = function(a) {
            var b, c = this.getListeners(a);
            return c instanceof Array && (b = {}, b[a] = c), b || c
        }, d.addListener = function(a, b) {
            var d, e = this.getListenersAsObject(a);
            for (d in e) e.hasOwnProperty(d) && -1 === c(b, e[d]) && e[d].push(b);
            return this
        }, d.on = d.addListener, d.defineEvent = function(a) {
            return this.getListeners(a), this
        }, d.defineEvents = function(a) {
            for (var b = 0; a.length > b; b += 1) this.defineEvent(a[b]);
            return this
        }, d.removeListener = function(a, b) {
            var d, e, f = this.getListenersAsObject(a);
            for (e in f) f.hasOwnProperty(e) && (d = c(b, f[e]), -1 !== d && f[e].splice(d, 1));
            return this
        }, d.off = d.removeListener, d.addListeners = function(a, b) {
            return this.manipulateListeners(!1, a, b)
        }, d.removeListeners = function(a, b) {
            return this.manipulateListeners(!0, a, b)
        }, d.manipulateListeners = function(a, b, c) {
            var d, e, f = a ? this.removeListener : this.addListener,
                g = a ? this.removeListeners : this.addListeners;
            if ("object" != typeof b || b instanceof RegExp)
                for (d = c.length; d--;) f.call(this, b, c[d]);
            else
                for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
            return this
        }, d.removeEvent = function(a) {
            var b, c = typeof a,
                d = this._getEvents();
            if ("string" === c) delete d[a];
            else if ("object" === c)
                for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
            else delete this._events;
            return this
        }, d.emitEvent = function(a, b) {
            var c, d, e, f = this.getListenersAsObject(a);
            for (d in f)
                if (f.hasOwnProperty(d))
                    for (c = f[d].length; c--;) e = b ? f[d][c].apply(null, b) : f[d][c](), e === !0 && this.removeListener(a, f[d][c]);
            return this
        }, d.trigger = d.emitEvent, d.emit = function(a) {
            var b = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(a, b)
        }, "function" == typeof define && define.amd ? define(function() {
            return b
        }) : a.EventEmitter = b
    }(this),
    function(a) {
        "use strict";

        function b() {}

        function c(a) {
            function c(b) {
                b.prototype.option || (b.prototype.option = function(b) {
                    a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
                })
            }

            function e(b, c) {
                a.fn[b] = function(e) {
                    if ("string" == typeof e) {
                        for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                            var j = this[h],
                                k = a.data(j, b);
                            if (k)
                                if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                    var l = k[e].apply(k, g);
                                    if (void 0 !== l) return l
                                } else f("no such method '" + e + "' for " + b + " instance");
                            else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                        }
                        return this
                    }
                    return this.each(function() {
                        var d = a.data(this, b);
                        d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                    })
                }
            }
            if (a) {
                var f = "undefined" == typeof console ? b : function(a) {
                    console.error(a)
                };
                a.bridget = function(a, b) {
                    c(b), e(a, b)
                }
            }
        }
        var d = Array.prototype.slice;
        "function" == typeof define && define.amd ? define(["jquery"], c) : c(a.jQuery)
    }(window),
    function(a, b) {
        "use strict";

        function c(a, b) {
            return a[h](b)
        }

        function d(a) {
            if (!a.parentNode) {
                var b = document.createDocumentFragment();
                b.appendChild(a)
            }
        }

        function e(a, b) {
            d(a);
            for (var c = a.parentNode.querySelectorAll(b), e = 0, f = c.length; f > e; e++)
                if (c[e] === a) return !0;
            return !1
        }

        function f(a, b) {
            return d(a), c(a, b)
        }
        var g, h = function() {
            if (b.matchesSelector) return "matchesSelector";
            for (var a = ["webkit", "moz", "ms", "o"], c = 0, d = a.length; d > c; c++) {
                var e = a[c],
                    f = e + "MatchesSelector";
                if (b[f]) return f
            }
        }();
        if (h) {
            var i = document.createElement("div"),
                j = c(i, "div");
            g = j ? c : f
        } else g = e;
        "function" == typeof define && define.amd ? define(function() {
            return g
        }) : window.matchesSelector = g
    }(this, Element.prototype),
    function(a) {
        "use strict";

        function b(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }

        function c(a, b) {
            a && (this.element = a, this.layout = b, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }
        var d = a.getSize,
            e = a.getStyleProperty,
            f = a.EventEmitter,
            g = document.defaultView,
            h = g && g.getComputedStyle ? function(a) {
                return g.getComputedStyle(a, null)
            } : function(a) {
                return a.currentStyle
            },
            i = e("transition"),
            j = e("transform"),
            k = i && j,
            l = !!e("perspective"),
            m = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[i],
            n = ["transform", "transition", "transitionDuration", "transitionProperty"],
            o = function() {
                for (var a = {}, b = 0, c = n.length; c > b; b++) {
                    var d = n[b],
                        f = e(d);
                    f && f !== d && (a[d] = f)
                }
                return a
            }();
        b(c.prototype, f.prototype), c.prototype._create = function() {
            this.css({
                position: "absolute"
            })
        }, c.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, c.prototype.getSize = function() {
            this.size = d(this.element)
        }, c.prototype.css = function(a) {
            var b = this.element.style;
            for (var c in a) {
                var d = o[c] || c;
                b[d] = a[c]
            }
        }, c.prototype.getPosition = function() {
            var a = h(this.element),
                b = this.layout.options,
                c = b.isOriginLeft,
                d = b.isOriginTop,
                e = parseInt(a[c ? "left" : "right"], 10),
                f = parseInt(a[d ? "top" : "bottom"], 10);
            e = isNaN(e) ? 0 : e, f = isNaN(f) ? 0 : f;
            var g = this.layout.size;
            e -= c ? g.paddingLeft : g.paddingRight, f -= d ? g.paddingTop : g.paddingBottom, this.position.x = e, this.position.y = f
        }, c.prototype.layoutPosition = function() {
            var a = this.layout.size,
                b = this.layout.options,
                c = {};
            b.isOriginLeft ? (c.left = this.position.x + a.paddingLeft + "px", c.right = "") : (c.right = this.position.x + a.paddingRight + "px", c.left = ""), b.isOriginTop ? (c.top = this.position.y + a.paddingTop + "px", c.bottom = "") : (c.bottom = this.position.y + a.paddingBottom + "px", c.top = ""), this.css(c), this.emitEvent("layout", [this])
        };
        var p = l ? function(a, b) {
            return "translate3d(" + a + "px, " + b + "px, 0)"
        } : function(a, b) {
            return "translate(" + a + "px, " + b + "px)"
        };
        c.prototype._transitionTo = function(a, b) {
            this.getPosition();
            var c = this.position.x,
                d = this.position.y,
                e = parseInt(a, 10),
                f = parseInt(b, 10),
                g = e === this.position.x && f === this.position.y;
            if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
            var h = a - c,
                i = b - d,
                j = {},
                k = this.layout.options;
            h = k.isOriginLeft ? h : -h, i = k.isOriginTop ? i : -i, j.transform = p(h, i), this.transition({
                to: j,
                onTransitionEnd: this.layoutPosition,
                isCleaning: !0
            })
        }, c.prototype.goTo = function(a, b) {
            this.setPosition(a, b), this.layoutPosition()
        }, c.prototype.moveTo = k ? c.prototype._transitionTo : c.prototype.goTo, c.prototype.setPosition = function(a, b) {
            this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
        }, c.prototype._nonTransition = function(a) {
            this.css(a.to), a.isCleaning && this._removeStyles(a.to), a.onTransitionEnd && a.onTransitionEnd.call(this)
        }, c.prototype._transition = function(a) {
            var b = this.layout.options.transitionDuration;
            if (!parseFloat(b)) return void this._nonTransition(a);
            var c = a.to,
                d = [];
            for (var e in c) d.push(e);
            var f = {};
            if (f.transitionProperty = d.join(","), f.transitionDuration = b, this.element.addEventListener(m, this, !1), (a.isCleaning || a.onTransitionEnd) && this.on("transitionEnd", function(b) {
                    return a.isCleaning && b._removeStyles(c), a.onTransitionEnd && a.onTransitionEnd.call(b), !0
                }), a.from) {
                this.css(a.from);
                var g = this.element.offsetHeight;
                g = null
            }
            this.css(f), this.css(c), this.isTransitioning = !0
        }, c.prototype.transition = c.prototype[i ? "_transition" : "_nonTransition"], c.prototype.onwebkitTransitionEnd = function(a) {
            this.ontransitionend(a)
        }, c.prototype.onotransitionend = function(a) {
            this.ontransitionend(a)
        }, c.prototype.ontransitionend = function(a) {
            a.target === this.element && (this.removeTransitionStyles(), this.element.removeEventListener(m, this, !1), this.isTransitioning = !1, this.emitEvent("transitionEnd", [this]))
        }, c.prototype._removeStyles = function(a) {
            var b = {};
            for (var c in a) b[c] = "";
            this.css(b)
        };
        var q = {
            transitionProperty: "",
            transitionDuration: ""
        };
        c.prototype.removeTransitionStyles = function() {
            this.css(q)
        }, c.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
        }, c.prototype.remove = i ? function() {
            var a = this;
            this.on("transitionEnd", function() {
                return a.removeElem(), !0
            }), this.hide()
        } : c.prototype.removeElem, c.prototype.reveal = function() {
            this.css({
                display: ""
            });
            var a = this.layout.options;
            this.transition({
                from: a.hiddenStyle,
                to: a.visibleStyle,
                isCleaning: !0
            })
        }, c.prototype.hide = function() {
            this.css({
                display: ""
            });
            var a = this.layout.options;
            this.transition({
                from: a.visibleStyle,
                to: a.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: function() {
                    this.css({
                        display: "none"
                    })
                }
            })
        }, c.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, a.Outlayer = {
            Item: c
        }
    }(window),
    function(a) {
        "use strict";

        function b(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }

        function c(a) {
            return "[object Array]" === s.call(a)
        }

        function d(a) {
            var b = [];
            if (c(a)) b = a;
            else if ("number" == typeof a.length)
                for (var d = 0, e = a.length; e > d; d++) b.push(a[d]);
            else b.push(a);
            return b
        }

        function e(a) {
            return a.replace(/(.)([A-Z])/g, function(a, b, c) {
                return b + "-" + c
            }).toLowerCase()
        }

        function f(a, c) {
            if ("string" == typeof a && (a = o.querySelector(a)), !a || !t(a)) return void(p && p.error("Bad " + this.settings.namespace + " element: " + a));
            this.element = a, this.options = b({}, this.options), b(this.options, c);
            var d = ++v;
            this.element.outlayerGUID = d, w[d] = this, this._create(), this.options.isInitLayout && this.layout()
        }

        function g(a, c) {
            a.prototype[c] = b({}, f.prototype[c])
        }
        var h = a.Outlayer,
            i = h.Item,
            j = a.docReady,
            k = a.EventEmitter,
            l = a.eventie,
            m = a.getSize,
            n = a.matchesSelector,
            o = a.document,
            p = a.console,
            q = a.jQuery,
            r = function() {},
            s = Object.prototype.toString,
            t = "object" == typeof HTMLElement ? function(a) {
                return a instanceof HTMLElement
            } : function(a) {
                return a && "object" == typeof a && 1 === a.nodeType && "string" == typeof a.nodeName
            },
            u = Array.prototype.indexOf ? function(a, b) {
                return a.indexOf(b)
            } : function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            v = 0,
            w = {};
        f.prototype.settings = {
            namespace: "outlayer",
            item: h.Item
        }, f.prototype.options = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, b(f.prototype, k.prototype), f.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), b(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, f.prototype.reloadItems = function() {
            this.items = this._getItems(this.element.children)
        }, f.prototype._getItems = function(a) {
            for (var b = this._filterFindItemElements(a), c = this.settings.item, d = [], e = 0, f = b.length; f > e; e++) {
                var g = b[e],
                    h = new c(g, this, this.options.itemOptions);
                d.push(h)
            }
            return d
        }, f.prototype._filterFindItemElements = function(a) {
            a = d(a);
            var b = this.options.itemSelector;
            if (!b) return a;
            for (var c = [], e = 0, f = a.length; f > e; e++) {
                var g = a[e];
                n(g, b) && c.push(g);
                for (var h = g.querySelectorAll(b), i = 0, j = h.length; j > i; i++) c.push(h[i])
            }
            return c
        }, f.prototype.getItemElements = function() {
            for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
            return a
        }, f.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, a), this._isLayoutInited = !0
        }, f.prototype._init = f.prototype.layout, f.prototype._resetLayout = function() {
            this.getSize()
        }, f.prototype.getSize = function() {
            this.size = m(this.element)
        }, f.prototype._getMeasurement = function(a, b) {
            var c, d = this.options[a];
            d ? ("string" == typeof d ? c = this.element.querySelector(d) : t(d) && (c = d), this[a] = c ? m(c)[b] : d) : this[a] = 0
        }, f.prototype.layoutItems = function(a, b) {
            a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
        }, f.prototype._getItemsForLayout = function(a) {
            for (var b = [], c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                e.isIgnored || b.push(e)
            }
            return b
        }, f.prototype._layoutItems = function(a, b) {
            if (!a || !a.length) return void this.emitEvent("layoutComplete", [this, a]);
            this._itemsOn(a, "layout", function() {
                this.emitEvent("layoutComplete", [this, a])
            });
            for (var c = [], d = 0, e = a.length; e > d; d++) {
                var f = a[d],
                    g = this._getItemLayoutPosition(f);
                g.item = f, g.isInstant = b, c.push(g)
            }
            this._processLayoutQueue(c)
        }, f.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, f.prototype._processLayoutQueue = function(a) {
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                this._positionItem(d.item, d.x, d.y, d.isInstant)
            }
        }, f.prototype._positionItem = function(a, b, c, d) {
            d ? a.goTo(b, c) : a.moveTo(b, c)
        }, f.prototype._postLayout = function() {
            var a = this._getContainerSize();
            a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
        }, f.prototype._getContainerSize = r, f.prototype._setContainerMeasure = function(a, b) {
            if (void 0 !== a) {
                var c = this.size;
                c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
            }
        }, f.prototype._itemsOn = function(a, b, c) {
            function d() {
                return e++, e === f && c.call(g), !0
            }
            for (var e = 0, f = a.length, g = this, h = 0, i = a.length; i > h; h++) {
                var j = a[h];
                j.on(b, d)
            }
        }, f.prototype.ignore = function(a) {
            var b = this.getItem(a);
            b && (b.isIgnored = !0)
        }, f.prototype.unignore = function(a) {
            var b = this.getItem(a);
            b && delete b.isIgnored
        }, f.prototype.stamp = function(a) {
            if (a = this._find(a)) {
                this.stamps = this.stamps.concat(a);
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    this.ignore(d)
                }
            }
        }, f.prototype.unstamp = function(a) {
            if (a = this._find(a))
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b],
                        e = u(this.stamps, d); - 1 !== e && this.stamps.splice(e, 1), this.unignore(d)
                }
        }, f.prototype._find = function(a) {
            return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = d(a)) : void 0
        }, f.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var a = 0, b = this.stamps.length; b > a; a++) {
                    var c = this.stamps[a];
                    this._manageStamp(c)
                }
            }
        }, f.prototype._getBoundingRect = function() {
            var a = this.element.getBoundingClientRect(),
                b = this.size;
            this._boundingRect = {
                left: a.left + b.paddingLeft + b.borderLeftWidth,
                top: a.top + b.paddingTop + b.borderTopWidth,
                right: a.right - (b.paddingRight + b.borderRightWidth),
                bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
            }
        }, f.prototype._manageStamp = r, f.prototype._getElementOffset = function(a) {
            var b = a.getBoundingClientRect(),
                c = this._boundingRect,
                d = m(a),
                e = {
                    left: b.left - c.left - d.marginLeft,
                    top: b.top - c.top - d.marginTop,
                    right: c.right - b.right - d.marginRight,
                    bottom: c.bottom - b.bottom - d.marginBottom
                };
            return e
        }, f.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, f.prototype.bindResize = function() {
            this.isResizeBound || (l.bind(a, "resize", this), this.isResizeBound = !0)
        }, f.prototype.unbindResize = function() {
            l.unbind(a, "resize", this), this.isResizeBound = !1
        }, f.prototype.onresize = function() {
            function a() {
                b.resize()
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var b = this;
            this.resizeTimeout = setTimeout(a, 100)
        }, f.prototype.resize = function() {
            var a = m(this.element),
                b = this.size && a;
            b && a.innerWidth === this.size.innerWidth || (this.layout(), delete this.resizeTimeout)
        }, f.prototype.addItems = function(a) {
            var b = this._getItems(a);
            return b.length ? (this.items = this.items.concat(b), b) : void 0
        }, f.prototype.appended = function(a) {
            var b = this.addItems(a);
            b.length && (this.layoutItems(b, !0), this.reveal(b))
        }, f.prototype.prepended = function(a) {
            var b = this._getItems(a);
            if (b.length) {
                var c = this.items.slice(0);
                this.items = b.concat(c), this._resetLayout(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
            }
        }, f.prototype.reveal = function(a) {
            if (a && a.length)
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    d.reveal()
                }
        }, f.prototype.hide = function(a) {
            if (a && a.length)
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    d.hide()
                }
        }, f.prototype.getItem = function(a) {
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                if (d.element === a) return d
            }
        }, f.prototype.getItems = function(a) {
            if (a && a.length) {
                for (var b = [], c = 0, d = a.length; d > c; c++) {
                    var e = a[c],
                        f = this.getItem(e);
                    f && b.push(f)
                }
                return b
            }
        }, f.prototype.remove = function(a) {
            a = d(a);
            var b = this.getItems(a);
            this._itemsOn(b, "remove", function() {
                this.emitEvent("removeComplete", [this, b])
            });
            for (var c = 0, e = b.length; e > c; c++) {
                var f = b[c];
                f.remove();
                var g = u(this.items, f);
                this.items.splice(g, 1)
            }
        }, f.prototype.destroy = function() {
            var a = this.element.style;
            a.height = "", a.position = "", a.width = "";
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                d.destroy()
            }
            this.unbindResize(), delete this.element.outlayerGUID
        }, f.data = function(a) {
            var b = a && a.outlayerGUID;
            return b && w[b]
        }, f.create = function(a, c) {
            function d() {
                f.apply(this, arguments)
            }
            return b(d.prototype, f.prototype), g(d, "options"), g(d, "settings"), b(d.prototype.options, c), d.prototype.settings.namespace = a, d.data = f.data, d.Item = function() {
                i.apply(this, arguments)
            }, d.Item.prototype = new f.Item, d.prototype.settings.item = d.Item, j(function() {
                for (var b = e(a), c = o.querySelectorAll(".js-" + b), f = "data-" + b + "-options", g = 0, h = c.length; h > g; g++) {
                    var i, j = c[g],
                        k = j.getAttribute(f);
                    try {
                        i = k && JSON.parse(k)
                    } catch (l) {
                        p && p.error("Error parsing " + f + " on " + j.nodeName.toLowerCase() + (j.id ? "#" + j.id : "") + ": " + l);
                        continue
                    }
                    var m = new d(j, i);
                    q && q.data(j, a, m)
                }
            }), q && q.bridget && q.bridget(a, d), d
        }, f.Item = i, a.Outlayer = f
    }(window),
    function(a) {
        "use strict";

        function b(a, b) {
            var d = a.create("masonry");
            return d.prototype._resetLayout = function() {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
                var a = this.cols;
                for (this.colYs = []; a--;) this.colYs.push(0);
                this.maxY = 0
            }, d.prototype.measureColumns = function() {
                var a = this.items[0].element;
                this.columnWidth = this.columnWidth || b(a).outerWidth, this.columnWidth += this.gutter, this.cols = Math.floor((this.size.innerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
            }, d.prototype._getItemLayoutPosition = function(a) {
                a.getSize();
                var b = Math.ceil(a.size.outerWidth / this.columnWidth);
                b = Math.min(b, this.cols);
                for (var d = this._getColGroup(b), e = Math.min.apply(Math, d), f = c(d, e), g = {
                        x: this.columnWidth * f,
                        y: e
                    }, h = e + a.size.outerHeight, i = this.cols + 1 - d.length, j = 0; i > j; j++) this.colYs[f + j] = h;
                return g
            }, d.prototype._getColGroup = function(a) {
                if (1 === a) return this.colYs;
                for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
                    var e = this.colYs.slice(d, d + a);
                    b[d] = Math.max.apply(Math, e)
                }
                return b
            }, d.prototype._manageStamp = function(a) {
                var c = b(a),
                    d = this._getElementOffset(a),
                    e = this.options.isOriginLeft ? d.left : d.right,
                    f = e + c.outerWidth,
                    g = Math.floor(e / this.columnWidth);
                g = Math.max(0, g);
                var h = Math.floor(f / this.columnWidth);
                h = Math.min(this.cols - 1, h);
                for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
            }, d.prototype._getContainerSize = function() {
                return this.maxY = Math.max.apply(Math, this.colYs), {
                    height: this.maxY
                }
            }, d
        }
        var c = Array.prototype.indexOf ? function(a, b) {
            return a.indexOf(b)
        } : function(a, b) {
            for (var c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                if (e === b) return c
            }
            return -1
        };
        "function" == typeof define && define.amd ? define(["outlayer", "get-size"], b) : a.Masonry = b(a.Outlayer, a.getSize)
    }(window), ! function(a) {
        "use strict";

        function b(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }

        function c(a) {
            return "[object Array]" === i.call(a)
        }

        function d(a) {
            var b = [];
            if (c(a)) b = a;
            else if ("number" == typeof a.length)
                for (var d = 0, e = a.length; e > d; d++) b.push(a[d]);
            else b.push(a);
            return b
        }

        function e(a, c) {
            function e(a, c, g) {
                if (!(this instanceof e)) return new e(a, c);
                "string" == typeof a && (a = document.querySelectorAll(a)), this.elements = d(a), this.options = b({}, this.options), "function" == typeof c ? g = c : b(this.options, c), g && this.on("always", g), this.getImages(), f && (this.jqDeferred = new f.Deferred);
                var h = this;
                setTimeout(function() {
                    h.check()
                })
            }

            function i(a) {
                this.img = a
            }
            e.prototype = new a, e.prototype.options = {}, e.prototype.getImages = function() {
                this.images = [];
                for (var a = 0, b = this.elements.length; b > a; a++) {
                    var c = this.elements[a];
                    "IMG" === c.nodeName && this.addImage(c);
                    for (var d = c.querySelectorAll("img"), e = 0, f = d.length; f > e; e++) {
                        var g = d[e];
                        this.addImage(g)
                    }
                }
            }, e.prototype.addImage = function(a) {
                var b = new i(a);
                this.images.push(b)
            }, e.prototype.check = function() {
                function a(a, e) {
                    return b.options.debug && h && g.log("confirm", a, e), b.progress(a), c++, c === d && b.complete(), !0
                }
                var b = this,
                    c = 0,
                    d = this.images.length;
                if (this.hasAnyBroken = !1, !d) return void this.complete();
                for (var e = 0; d > e; e++) {
                    var f = this.images[e];
                    f.on("confirm", a), f.check()
                }
            }, e.prototype.progress = function(a) {
                this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded, this.emit("progress", this, a), this.jqDeferred && this.jqDeferred.notify(this, a)
            }, e.prototype.complete = function() {
                var a = this.hasAnyBroken ? "fail" : "done";
                if (this.isComplete = !0, this.emit(a, this), this.emit("always", this), this.jqDeferred) {
                    var b = this.hasAnyBroken ? "reject" : "resolve";
                    this.jqDeferred[b](this)
                }
            }, f && (f.fn.imagesLoaded = function(a, b) {
                var c = new e(this, a, b);
                return c.jqDeferred.promise(f(this))
            });
            var j = {};
            return i.prototype = new a, i.prototype.check = function() {
                var a = j[this.img.src];
                if (a) return void this.useCached(a);
                if (j[this.img.src] = this, this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
                var b = this.proxyImage = new Image;
                c.bind(b, "load", this), c.bind(b, "error", this), b.src = this.img.src
            }, i.prototype.useCached = function(a) {
                if (a.isConfirmed) this.confirm(a.isLoaded, "cached was confirmed");
                else {
                    var b = this;
                    a.on("confirm", function(a) {
                        return b.confirm(a.isLoaded, "cache emitted confirmed"), !0
                    })
                }
            }, i.prototype.confirm = function(a, b) {
                this.isConfirmed = !0, this.isLoaded = a, this.emit("confirm", this, b)
            }, i.prototype.handleEvent = function(a) {
                var b = "on" + a.type;
                this[b] && this[b](a)
            }, i.prototype.onload = function() {
                this.confirm(!0, "onload"), this.unbindProxyEvents()
            }, i.prototype.onerror = function() {
                this.confirm(!1, "onerror"), this.unbindProxyEvents()
            }, i.prototype.unbindProxyEvents = function() {
                c.unbind(this.proxyImage, "load", this), c.unbind(this.proxyImage, "error", this)
            }, e
        }
        var f = a.jQuery,
            g = a.console,
            h = "undefined" != typeof g,
            i = Object.prototype.toString;
        "function" == typeof define && define.amd ? define(["eventEmitter", "eventie"], e) : a.imagesLoaded = e(a.EventEmitter, a.eventie)
    }(window), ! function(a) {
        "use strict";

        function b(a) {
            return new RegExp("(^|\\s+)" + a + "(\\s+|$)")
        }

        function c(a, b) {
            var c = d(a, b) ? f : e;
            c(a, b)
        }
        var d, e, f;
        "classList" in document.documentElement ? (d = function(a, b) {
            return a.classList.contains(b)
        }, e = function(a, b) {
            a.classList.add(b)
        }, f = function(a, b) {
            a.classList.remove(b)
        }) : (d = function(a, c) {
            return b(c).test(a.className)
        }, e = function(a, b) {
            d(a, b) || (a.className = a.className + " " + b)
        }, f = function(a, c) {
            a.className = a.className.replace(b(c), " ")
        });
        var g = {
            hasClass: d,
            addClass: e,
            removeClass: f,
            toggleClass: c,
            has: d,
            add: e,
            remove: f,
            toggle: c
        };
        "function" == typeof define && define.amd ? define(g) : a.classie = g
    }(window), ! function(a) {
        "use strict";

        function b() {
            var b = h.clientHeight,
                c = a.innerHeight;
            return c > b ? c : b
        }

        function c() {
            return a.pageYOffset || h.scrollTop
        }

        function d(a) {
            var b = 0,
                c = 0;
            do isNaN(a.offsetTop) || (b += a.offsetTop), isNaN(a.offsetLeft) || (c += a.offsetLeft); while (a = a.offsetParent);
            return {
                top: b,
                left: c
            }
        }

        function e(a, e) {
            var f = a.offsetHeight,
                g = c(),
                h = g + b(),
                i = d(a).top,
                j = i + f,
                e = e || 0;
            return h >= i + f * e && j - f * e >= g
        }

        function f(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
            return a
        }

        function g(a, b) {
            this.el = a, this.options = f(this.defaults, b), this._init()
        }
        var h = a.document.documentElement;
        g.prototype = {
            defaults: {
                minDuration: 0,
                maxDuration: 0,
                viewportFactor: 0
            },
            _init: function() {
                this.items = Array.prototype.slice.call(document.querySelectorAll("#" + this.el.id + " > li")), this.itemsCount = this.items.length, this.itemsRenderedCount = 0, this.didScroll = !1;
                var b = this;
                imagesLoaded(this.el, function() {
                    new Masonry(b.el, {
                        itemSelector: "li",
                        transitionDuration: 0
                    }), Modernizr.cssanimations && (b.items.forEach(function(a) {
                        e(a) && (b._checkTotalRendered(), classie.add(a, "shown"))
                    }), a.addEventListener("scroll", function() {
                        b._onScrollFn()
                    }, !1), a.addEventListener("resize", function() {
                        b._resizeHandler()
                    }, !1))
                })
            },
            _onScrollFn: function() {
                var a = this;
                this.didScroll || (this.didScroll = !0, setTimeout(function() {
                    a._scrollPage()
                }, 60))
            },
            _scrollPage: function() {
                var a = this;
                this.items.forEach(function(d) {
                    classie.has(d, "shown") || classie.has(d, "animate") || !e(d, a.options.viewportFactor) || setTimeout(function() {
                        var e = c() + b() / 2;
                        if (a.el.style.WebkitPerspectiveOrigin = "50% " + e + "px", a.el.style.MozPerspectiveOrigin = "50% " + e + "px", a.el.style.perspectiveOrigin = "50% " + e + "px", a._checkTotalRendered(), a.options.minDuration && a.options.maxDuration) {
                            var f = Math.random() * (a.options.maxDuration - a.options.minDuration) + a.options.minDuration + "s";
                            d.style.WebkitAnimationDuration = f, d.style.MozAnimationDuration = f, d.style.animationDuration = f
                        }
                        classie.add(d, "animate")
                    }, 25)
                }), this.didScroll = !1
            },
            _resizeHandler: function() {
                function a() {
                    b._scrollPage(), b.resizeTimeout = null
                }
                var b = this;
                this.resizeTimeout && clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(a, 1e3)
            },
            _checkTotalRendered: function() {
                ++this.itemsRenderedCount, this.itemsRenderedCount === this.itemsCount && a.removeEventListener("scroll", this._onScrollFn)
            }
        }, a.AnimOnScroll = g
    }(window), "function" != typeof Object.create && (Object.create = function(a) {
        function b() {}
        return b.prototype = a, new b
    }),
    function(a, b, c) {
        var d = {
            init: function(b, c) {
                this.$elem = a(c), this.options = a.extend({}, a.fn.owlCarousel.options, this.$elem.data(), b), this.userOptions = b, this.loadContent()
            },
            loadContent: function() {
                function b(a) {
                    var b, c = "";
                    if ("function" == typeof d.options.jsonSuccess) d.options.jsonSuccess.apply(this, [a]);
                    else {
                        for (b in a.owl) a.owl.hasOwnProperty(b) && (c += a.owl[b].item);
                        d.$elem.html(c)
                    }
                    d.logIn()
                }
                var c, d = this;
                "function" == typeof d.options.beforeInit && d.options.beforeInit.apply(this, [d.$elem]), "string" == typeof d.options.jsonPath ? (c = d.options.jsonPath, a.getJSON(c, b)) : d.logIn()
            },
            logIn: function() {
                this.$elem.data("owl-originalStyles", this.$elem.attr("style")), this.$elem.data("owl-originalClasses", this.$elem.attr("class")), this.$elem.css({
                    opacity: 0
                }), this.orignalItems = this.options.items, this.checkBrowser(), this.wrapperWidth = 0, this.checkVisible = null, this.setVars()
            },
            setVars: function() {
                return 0 === this.$elem.children().length ? !1 : (this.baseClass(), this.eventTypes(), this.$userItems = this.$elem.children(), this.itemsAmount = this.$userItems.length, this.wrapItems(), this.$owlItems = this.$elem.find(".owl-item"), this.$owlWrapper = this.$elem.find(".owl-wrapper"), this.playDirection = "next", this.prevItem = 0, this.prevArr = [0], this.currentItem = 0, this.customEvents(), void this.onStartup())
            },
            onStartup: function() {
                this.updateItems(), this.calculateAll(), this.buildControls(), this.updateControls(), this.response(), this.moveEvents(), this.stopOnHover(), this.owlStatus(), !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle), !0 === this.options.autoPlay && (this.options.autoPlay = 5e3), this.play(), this.$elem.find(".owl-wrapper").css("display", "block"), this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility(), this.onstartup = !1, this.eachMoveUpdate(), "function" == typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
            },
            eachMoveUpdate: function() {
                !0 === this.options.lazyLoad && this.lazyLoad(), !0 === this.options.autoHeight && this.autoHeight(), this.onVisibleItems(), "function" == typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem])
            },
            updateVars: function() {
                "function" == typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]), this.watchVisibility(), this.updateItems(), this.calculateAll(), this.updatePosition(), this.updateControls(), this.eachMoveUpdate(), "function" == typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
            },
            reload: function() {
                var a = this;
                b.setTimeout(function() {
                    a.updateVars()
                }, 0)
            },
            watchVisibility: function() {
                var a = this;
                return !1 !== a.$elem.is(":visible") ? !1 : (a.$elem.css({
                    opacity: 0
                }), b.clearInterval(a.autoPlayInterval), b.clearInterval(a.checkVisible), void(a.checkVisible = b.setInterval(function() {
                    a.$elem.is(":visible") && (a.reload(), a.$elem.animate({
                        opacity: 1
                    }, 200), b.clearInterval(a.checkVisible))
                }, 500)))
            },
            wrapItems: function() {
                this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), this.wrapperOuter = this.$elem.find(".owl-wrapper-outer"), this.$elem.css("display", "block")
            },
            baseClass: function() {
                var a = this.$elem.hasClass(this.options.baseClass),
                    b = this.$elem.hasClass(this.options.theme);
                a || this.$elem.addClass(this.options.baseClass), b || this.$elem.addClass(this.options.theme)
            },
            updateItems: function() {
                var b, c;
                if (!1 === this.options.responsive) return !1;
                if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
                if (b = a(this.options.responsiveBaseWidth).width(), b > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems), !1 !== this.options.itemsCustom)
                    for (this.options.itemsCustom.sort(function(a, b) {
                            return a[0] - b[0]
                        }), c = 0; c < this.options.itemsCustom.length; c += 1) this.options.itemsCustom[c][0] <= b && (this.options.items = this.options.itemsCustom[c][1]);
                else b <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]), b <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), b <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), b <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), b <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
                this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
            },
            response: function() {
                var c, d, e = this;
                return !0 !== e.options.responsive ? !1 : (d = a(b).width(), e.resizer = function() {
                    a(b).width() !== d && (!1 !== e.options.autoPlay && b.clearInterval(e.autoPlayInterval), b.clearTimeout(c), c = b.setTimeout(function() {
                        d = a(b).width(), e.updateVars()
                    }, e.options.responsiveRefreshRate))
                }, void a(b).resize(e.resizer))
            },
            updatePosition: function() {
                this.jumpTo(this.currentItem), !1 !== this.options.autoPlay && this.checkAp()
            },
            appendItemsSizes: function() {
                var b = this,
                    c = 0,
                    d = b.itemsAmount - b.options.items;
                b.$owlItems.each(function(e) {
                    var f = a(this);
                    f.css({
                        width: b.itemWidth
                    }).data("owl-item", Number(e)), (0 === e % b.options.items || e === d) && (e > d || (c += 1)), f.data("owl-roundPages", c)
                })
            },
            appendWrapperSizes: function() {
                this.$owlWrapper.css({
                    width: this.$owlItems.length * this.itemWidth * 2,
                    left: 0
                }), this.appendItemsSizes()
            },
            calculateAll: function() {
                this.calculateWidth(), this.appendWrapperSizes(), this.loops(), this.max()
            },
            calculateWidth: function() {
                this.itemWidth = Math.round(this.$elem.width() / this.options.items)
            },
            max: function() {
                var a = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
                return this.options.items > this.itemsAmount ? this.maximumPixels = a = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = a), a
            },
            min: function() {
                return 0
            },
            loops: function() {
                var b, c, d = 0,
                    e = 0;
                for (this.positionsInArray = [0], this.pagesInArray = [], b = 0; b < this.itemsAmount; b += 1) e += this.itemWidth, this.positionsInArray.push(-e), !0 === this.options.scrollPerPage && (c = a(this.$owlItems[b]), c = c.data("owl-roundPages"), c !== d && (this.pagesInArray[d] = this.positionsInArray[b], d = c))
            },
            buildControls: function() {
                (!0 === this.options.navigation || !0 === this.options.pagination) && (this.owlControls = a('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem)), !0 === this.options.pagination && this.buildPagination(), !0 === this.options.navigation && this.buildButtons()
            },
            buildButtons: function() {
                var b = this,
                    c = a('<div class="owl-buttons"/>');
                b.owlControls.append(c), b.buttonPrev = a("<div/>", {
                    "class": "owl-prev",
                    html: b.options.navigationText[0] || ""
                }), b.buttonNext = a("<div/>", {
                    "class": "owl-next",
                    html: b.options.navigationText[1] || ""
                }), c.append(b.buttonPrev).append(b.buttonNext), c.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(a) {
                    a.preventDefault()
                }), c.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(c) {
                    c.preventDefault(), a(this).hasClass("owl-next") ? b.next() : b.prev()
                })
            },
            buildPagination: function() {
                var b = this;
                b.paginationWrapper = a('<div class="owl-pagination"/>'), b.owlControls.append(b.paginationWrapper), b.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(c) {
                    c.preventDefault(), Number(a(this).data("owl-page")) !== b.currentItem && b.goTo(Number(a(this).data("owl-page")), !0)
                })
            },
            updatePagination: function() {
                var b, c, d, e, f, g;
                if (!1 === this.options.pagination) return !1;
                for (this.paginationWrapper.html(""), b = 0, c = this.itemsAmount - this.itemsAmount % this.options.items, e = 0; e < this.itemsAmount; e += 1) 0 === e % this.options.items && (b += 1, c === e && (d = this.itemsAmount - this.options.items), f = a("<div/>", {
                    "class": "owl-page"
                }), g = a("<span></span>", {
                    text: !0 === this.options.paginationNumbers ? b : "",
                    "class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
                }), f.append(g), f.data("owl-page", c === e ? d : e), f.data("owl-roundPages", b), this.paginationWrapper.append(f));
                this.checkPagination()
            },
            checkPagination: function() {
                var b = this;
                return !1 === b.options.pagination ? !1 : void b.paginationWrapper.find(".owl-page").each(function() {
                    a(this).data("owl-roundPages") === a(b.$owlItems[b.currentItem]).data("owl-roundPages") && (b.paginationWrapper.find(".owl-page").removeClass("active"), a(this).addClass("active"))
                })
            },
            checkNavigation: function() {
                return !1 === this.options.navigation ? !1 : void(!1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled"))))
            },
            updateControls: function() {
                this.updatePagination(), this.checkNavigation(), this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
            },
            destroyControls: function() {
                this.owlControls && this.owlControls.remove()
            },
            next: function(a) {
                if (this.isTransition) return !1;
                if (this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1, this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0)) {
                    if (!0 !== this.options.rewindNav) return this.currentItem = this.maximumItem, !1;
                    this.currentItem = 0, a = "rewind"
                }
                this.goTo(this.currentItem, a)
            },
            prev: function(a) {
                if (this.isTransition) return !1;
                if (this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1), 0 > this.currentItem) {
                    if (!0 !== this.options.rewindNav) return this.currentItem = 0, !1;
                    this.currentItem = this.maximumItem, a = "rewind"
                }
                this.goTo(this.currentItem, a)
            },
            goTo: function(a, c, d) {
                var e = this;
                return e.isTransition ? !1 : ("function" == typeof e.options.beforeMove && e.options.beforeMove.apply(this, [e.$elem]), a >= e.maximumItem ? a = e.maximumItem : 0 >= a && (a = 0), e.currentItem = e.owl.currentItem = a, !1 !== e.options.transitionStyle && "drag" !== d && 1 === e.options.items && !0 === e.browser.support3d ? (e.swapSpeed(0), !0 === e.browser.support3d ? e.transition3d(e.positionsInArray[a]) : e.css2slide(e.positionsInArray[a], 1), e.afterGo(), e.singleItemTransition(), !1) : (a = e.positionsInArray[a], !0 === e.browser.support3d ? (e.isCss3Finish = !1, !0 === c ? (e.swapSpeed("paginationSpeed"), b.setTimeout(function() {
                    e.isCss3Finish = !0
                }, e.options.paginationSpeed)) : "rewind" === c ? (e.swapSpeed(e.options.rewindSpeed), b.setTimeout(function() {
                    e.isCss3Finish = !0
                }, e.options.rewindSpeed)) : (e.swapSpeed("slideSpeed"), b.setTimeout(function() {
                    e.isCss3Finish = !0
                }, e.options.slideSpeed)), e.transition3d(a)) : !0 === c ? e.css2slide(a, e.options.paginationSpeed) : "rewind" === c ? e.css2slide(a, e.options.rewindSpeed) : e.css2slide(a, e.options.slideSpeed), void e.afterGo()))
            },
            jumpTo: function(a) {
                "function" == typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]), a >= this.maximumItem || -1 === a ? a = this.maximumItem : 0 >= a && (a = 0), this.swapSpeed(0), !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[a]) : this.css2slide(this.positionsInArray[a], 1), this.currentItem = this.owl.currentItem = a, this.afterGo()
            },
            afterGo: function() {
                this.prevArr.push(this.currentItem), this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2], this.prevArr.shift(0), this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp()), "function" == typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
            },
            stop: function() {
                this.apStatus = "stop", b.clearInterval(this.autoPlayInterval)
            },
            checkAp: function() {
                "stop" !== this.apStatus && this.play()
            },
            play: function() {
                var a = this;
                return a.apStatus = "play", !1 === a.options.autoPlay ? !1 : (b.clearInterval(a.autoPlayInterval), void(a.autoPlayInterval = b.setInterval(function() {
                    a.next(!0)
                }, a.options.autoPlay)))
            },
            swapSpeed: function(a) {
                "slideSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" != typeof a && this.$owlWrapper.css(this.addCssSpeed(a))
            },
            addCssSpeed: function(a) {
                return {
                    "-webkit-transition": "all " + a + "ms ease",
                    "-moz-transition": "all " + a + "ms ease",
                    "-o-transition": "all " + a + "ms ease",
                    transition: "all " + a + "ms ease"
                }
            },
            removeTransition: function() {
                return {
                    "-webkit-transition": "",
                    "-moz-transition": "",
                    "-o-transition": "",
                    transition: ""
                }
            },
            doTranslate: function(a) {
                return {
                    "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
                    "-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
                    "-o-transform": "translate3d(" + a + "px, 0px, 0px)",
                    "-ms-transform": "translate3d(" + a + "px, 0px, 0px)",
                    transform: "translate3d(" + a + "px, 0px,0px)"
                }
            },
            transition3d: function(a) {
                this.$owlWrapper.css(this.doTranslate(a))
            },
            css2move: function(a) {
                this.$owlWrapper.css({
                    left: a
                })
            },
            css2slide: function(a, b) {
                var c = this;
                c.isCssFinish = !1, c.$owlWrapper.stop(!0, !0).animate({
                    left: a
                }, {
                    duration: b || c.options.slideSpeed,
                    complete: function() {
                        c.isCssFinish = !0
                    }
                })
            },
            checkBrowser: function() {
                var a = c.createElement("div");
                a.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)", a = a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g), this.browser = {
                    support3d: null !== a && 1 === a.length,
                    isTouch: "ontouchstart" in b || b.navigator.msMaxTouchPoints
                }
            },
            moveEvents: function() {
                (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) && (this.gestures(), this.disabledEvents())
            },
            eventTypes: function() {
                var a = ["s", "e", "x"];
                this.ev_types = {}, !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (a = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), this.ev_types.start = a[0], this.ev_types.move = a[1], this.ev_types.end = a[2]
            },
            disabledEvents: function() {
                this.$elem.on("dragstart.owl", function(a) {
                    a.preventDefault()
                }), this.$elem.on("mousedown.disableTextSelect", function(b) {
                    return a(b.target).is("input, textarea, select, option")
                })
            },
            gestures: function() {
                function d(a) {
                    if (void 0 !== a.touches) return {
                        x: a.touches[0].pageX,
                        y: a.touches[0].pageY
                    };
                    if (void 0 === a.touches) {
                        if (void 0 !== a.pageX) return {
                            x: a.pageX,
                            y: a.pageY
                        };
                        if (void 0 === a.pageX) return {
                            x: a.clientX,
                            y: a.clientY
                        }
                    }
                }

                function e(b) {
                    "on" === b ? (a(c).on(h.ev_types.move, f), a(c).on(h.ev_types.end, g)) : "off" === b && (a(c).off(h.ev_types.move), a(c).off(h.ev_types.end))
                }

                function f(e) {
                    e = e.originalEvent || e || b.event, h.newPosX = d(e).x - i.offsetX, h.newPosY = d(e).y - i.offsetY, h.newRelativeX = h.newPosX - i.relativePos, "function" == typeof h.options.startDragging && !0 !== i.dragging && 0 !== h.newRelativeX && (i.dragging = !0, h.options.startDragging.apply(h, [h.$elem])), (8 < h.newRelativeX || -8 > h.newRelativeX) && !0 === h.browser.isTouch && (void 0 !== e.preventDefault ? e.preventDefault() : e.returnValue = !1, i.sliding = !0), (10 < h.newPosY || -10 > h.newPosY) && !1 === i.sliding && a(c).off("touchmove.owl"), h.newPosX = Math.max(Math.min(h.newPosX, h.newRelativeX / 5), h.maximumPixels + h.newRelativeX / 5), !0 === h.browser.support3d ? h.transition3d(h.newPosX) : h.css2move(h.newPosX)
                }

                function g(c) {
                    c = c.originalEvent || c || b.event;
                    var d;
                    c.target = c.target || c.srcElement, i.dragging = !1, !0 !== h.browser.isTouch && h.$owlWrapper.removeClass("grabbing"), h.dragDirection = 0 > h.newRelativeX ? h.owl.dragDirection = "left" : h.owl.dragDirection = "right", 0 !== h.newRelativeX && (d = h.getNewPosition(), h.goTo(d, !1, "drag"), i.targetElement === c.target && !0 !== h.browser.isTouch && (a(c.target).on("click.disable", function(b) {
                        b.stopImmediatePropagation(), b.stopPropagation(), b.preventDefault(), a(b.target).off("click.disable")
                    }), c = a._data(c.target, "events").click, d = c.pop(), c.splice(0, 0, d))), e("off")
                }
                var h = this,
                    i = {
                        offsetX: 0,
                        offsetY: 0,
                        baseElWidth: 0,
                        relativePos: 0,
                        position: null,
                        minSwipe: null,
                        maxSwipe: null,
                        sliding: null,
                        dargging: null,
                        targetElement: null
                    };
                h.isCssFinish = !0, h.$elem.on(h.ev_types.start, ".owl-wrapper", function(c) {
                    c = c.originalEvent || c || b.event;
                    var f;
                    if (3 === c.which) return !1;
                    if (!(h.itemsAmount <= h.options.items)) {
                        if (!1 === h.isCssFinish && !h.options.dragBeforeAnimFinish || !1 === h.isCss3Finish && !h.options.dragBeforeAnimFinish) return !1;
                        !1 !== h.options.autoPlay && b.clearInterval(h.autoPlayInterval), !0 === h.browser.isTouch || h.$owlWrapper.hasClass("grabbing") || h.$owlWrapper.addClass("grabbing"), h.newPosX = 0, h.newRelativeX = 0, a(this).css(h.removeTransition()), f = a(this).position(), i.relativePos = f.left, i.offsetX = d(c).x - f.left, i.offsetY = d(c).y - f.top, e("on"), i.sliding = !1, i.targetElement = c.target || c.srcElement
                    }
                })
            },
            getNewPosition: function() {
                var a = this.closestItem();
                return a > this.maximumItem ? a = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = a = 0), a
            },
            closestItem: function() {
                var b = this,
                    c = !0 === b.options.scrollPerPage ? b.pagesInArray : b.positionsInArray,
                    d = b.newPosX,
                    e = null;
                return a.each(c, function(f, g) {
                    d - b.itemWidth / 20 > c[f + 1] && d - b.itemWidth / 20 < g && "left" === b.moveDirection() ? (e = g, b.currentItem = !0 === b.options.scrollPerPage ? a.inArray(e, b.positionsInArray) : f) : d + b.itemWidth / 20 < g && d + b.itemWidth / 20 > (c[f + 1] || c[f] - b.itemWidth) && "right" === b.moveDirection() && (!0 === b.options.scrollPerPage ? (e = c[f + 1] || c[c.length - 1], b.currentItem = a.inArray(e, b.positionsInArray)) : (e = c[f + 1], b.currentItem = f + 1))
                }), b.currentItem
            },
            moveDirection: function() {
                var a;
                return 0 > this.newRelativeX ? (a = "right", this.playDirection = "next") : (a = "left", this.playDirection = "prev"), a
            },
            customEvents: function() {
                var a = this;
                a.$elem.on("owl.next", function() {
                    a.next()
                }), a.$elem.on("owl.prev", function() {
                    a.prev()
                }), a.$elem.on("owl.play", function(b, c) {
                    a.options.autoPlay = c, a.play(), a.hoverStatus = "play"
                }), a.$elem.on("owl.stop", function() {
                    a.stop(), a.hoverStatus = "stop"
                }), a.$elem.on("owl.goTo", function(b, c) {
                    a.goTo(c)
                }), a.$elem.on("owl.jumpTo", function(b, c) {
                    a.jumpTo(c)
                })
            },
            stopOnHover: function() {
                var a = this;
                !0 === a.options.stopOnHover && !0 !== a.browser.isTouch && !1 !== a.options.autoPlay && (a.$elem.on("mouseover", function() {
                    a.stop()
                }), a.$elem.on("mouseout", function() {
                    "stop" !== a.hoverStatus && a.play()
                }))
            },
            lazyLoad: function() {
                var b, c, d, e, f;
                if (!1 === this.options.lazyLoad) return !1;
                for (b = 0; b < this.itemsAmount; b += 1) c = a(this.$owlItems[b]), "loaded" !== c.data("owl-loaded") && (d = c.data("owl-item"), e = c.find(".lazyOwl"), "string" != typeof e.data("src") ? c.data("owl-loaded", "loaded") : (void 0 === c.data("owl-loaded") && (e.hide(), c.addClass("loading").data("owl-loaded", "checked")), (f = !0 === this.options.lazyFollow ? d >= this.currentItem : !0) && d < this.currentItem + this.options.items && e.length && this.lazyPreload(c, e)))
            },
            lazyPreload: function(a, c) {
                function d() {
                    a.data("owl-loaded", "loaded").removeClass("loading"), c.removeAttr("data-src"), "fade" === g.options.lazyEffect ? c.fadeIn(400) : c.show(), "function" == typeof g.options.afterLazyLoad && g.options.afterLazyLoad.apply(this, [g.$elem])
                }

                function e() {
                    h += 1, g.completeImg(c.get(0)) || !0 === f ? d() : 100 >= h ? b.setTimeout(e, 100) : d()
                }
                var f, g = this,
                    h = 0;
                "DIV" === c.prop("tagName") ? (c.css("background-image", "url(" + c.data("src") + ")"), f = !0) : c[0].src = c.data("src"), e()
            },
            autoHeight: function() {
                function c() {
                    var c = a(f.$owlItems[f.currentItem]).height();
                    f.wrapperOuter.css("height", c + "px"), f.wrapperOuter.hasClass("autoHeight") || b.setTimeout(function() {
                        f.wrapperOuter.addClass("autoHeight")
                    }, 0)
                }

                function d() {
                    e += 1, f.completeImg(g.get(0)) ? c() : 100 >= e ? b.setTimeout(d, 100) : f.wrapperOuter.css("height", "")
                }
                var e, f = this,
                    g = a(f.$owlItems[f.currentItem]).find("img");
                void 0 !== g.get(0) ? (e = 0, d()) : c()
            },
            completeImg: function(a) {
                return !a.complete || "undefined" != typeof a.naturalWidth && 0 === a.naturalWidth ? !1 : !0
            },
            onVisibleItems: function() {
                var b;
                for (!0 === this.options.addClassActive && this.$owlItems.removeClass("active"), this.visibleItems = [], b = this.currentItem; b < this.currentItem + this.options.items; b += 1) this.visibleItems.push(b), !0 === this.options.addClassActive && a(this.$owlItems[b]).addClass("active");
                this.owl.visibleItems = this.visibleItems
            },
            transitionTypes: function(a) {
                this.outClass = "owl-" + a + "-out", this.inClass = "owl-" + a + "-in"
            },
            singleItemTransition: function() {
                var a = this,
                    b = a.outClass,
                    c = a.inClass,
                    d = a.$owlItems.eq(a.currentItem),
                    e = a.$owlItems.eq(a.prevItem),
                    f = Math.abs(a.positionsInArray[a.currentItem]) + a.positionsInArray[a.prevItem],
                    g = Math.abs(a.positionsInArray[a.currentItem]) + a.itemWidth / 2;
                a.isTransition = !0, a.$owlWrapper.addClass("owl-origin").css({
                    "-webkit-transform-origin": g + "px",
                    "-moz-perspective-origin": g + "px",
                    "perspective-origin": g + "px"
                }), e.css({
                    position: "relative",
                    left: f + "px"
                }).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                    a.endPrev = !0, e.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"), a.clearTransStyle(e, b)
                }), d.addClass(c).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                    a.endCurrent = !0, d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"), a.clearTransStyle(d, c)
                })
            },
            clearTransStyle: function(a, b) {
                a.css({
                    position: "",
                    left: ""
                }).removeClass(b), this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
            },
            owlStatus: function() {
                this.owl = {
                    userOptions: this.userOptions,
                    baseElement: this.$elem,
                    userItems: this.$userItems,
                    owlItems: this.$owlItems,
                    currentItem: this.currentItem,
                    prevItem: this.prevItem,
                    visibleItems: this.visibleItems,
                    isTouch: this.browser.isTouch,
                    browser: this.browser,
                    dragDirection: this.dragDirection
                }
            },
            clearEvents: function() {
                this.$elem.off(".owl owl mousedown.disableTextSelect"), a(c).off(".owl owl"), a(b).off("resize", this.resizer)
            },
            unWrap: function() {
                0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove()), this.clearEvents(), this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
            },
            destroy: function() {
                this.stop(), b.clearInterval(this.checkVisible), this.unWrap(), this.$elem.removeData()
            },
            reinit: function(b) {
                b = a.extend({}, this.userOptions, b), this.unWrap(), this.init(b, this.$elem)
            },
            addItem: function(a, b) {
                var c;
                return a ? 0 === this.$elem.children().length ? (this.$elem.append(a), this.setVars(), !1) : (this.unWrap(), c = void 0 === b || -1 === b ? -1 : b, c >= this.$userItems.length || -1 === c ? this.$userItems.eq(-1).after(a) : this.$userItems.eq(c).before(a), void this.setVars()) : !1
            },
            removeItem: function(a) {
                return 0 === this.$elem.children().length ? !1 : (a = void 0 === a || -1 === a ? -1 : a, this.unWrap(), this.$userItems.eq(a).remove(), void this.setVars())
            }
        };
        a.fn.owlCarousel = function(b) {
            return this.each(function() {
                if (!0 === a(this).data("owl-init")) return !1;
                a(this).data("owl-init", !0);
                var c = Object.create(d);
                c.init(b, this), a.data(this, "owlCarousel", c)
            })
        }, a.fn.owlCarousel.options = {
            items: 5,
            itemsCustom: !1,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            slideSpeed: 200,
            paginationSpeed: 800,
            rewindSpeed: 1e3,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1,
            navigationText: ["prev", "next"],
            rewindNav: !0,
            scrollPerPage: !1,
            pagination: !0,
            paginationNumbers: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: b,
            baseClass: "owl-carousel",
            theme: "owl-theme",
            lazyLoad: !1,
            lazyFollow: !0,
            lazyEffect: "fade",
            autoHeight: !1,
            jsonPath: !1,
            jsonSuccess: !1,
            dragBeforeAnimFinish: !0,
            mouseDrag: !0,
            touchDrag: !0,
            addClassActive: !1,
            transitionStyle: !1,
            beforeUpdate: !1,
            afterUpdate: !1,
            beforeInit: !1,
            afterInit: !1,
            beforeMove: !1,
            afterMove: !1,
            afterAction: !1,
            startDragging: !1,
            afterLazyLoad: !1
        }
    }(jQuery, window, document), ! function(a) {
        function b() {
            for (var a, b, c = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"]; a = c.shift();)
                if ("undefined" != typeof d.dumy.style[a] && (d.dumy.style.position = "absolute", b = d.dumy.getBoundingClientRect().left, d.dumy.style[a] = "translate3d(500px, 0px, 0px)", b = Math.abs(d.dumy.getBoundingClientRect().left - b), b > 100 && 900 > b)) {
                    try {
                        document.documentElement.removeChild(d.dumy)
                    } catch (e) {}
                    return !0
                }
            try {
                document.documentElement.removeChild(d.dumy)
            } catch (e) {}
            return !1
        }

        function c() {
            for (var a, b = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"]; a = b.shift();)
                if ("undefined" != typeof d.dumy.style[a]) return !0;
            try {
                document.documentElement.removeChild(d.dumy)
            } catch (c) {}
            return !1
        }
        var d = function() {};
        d.dumy = document.createElement("div"), d.trim = function(a) {
            return a.replace(/\s/gi, "")
        }, d.trimAndFormatUrl = function(a) {
            return a = a.toLocaleLowerCase(), a = a.replace(/ /g, "-")
        }, d.splitAndTrim = function(a, b) {
            for (var c = a.split(","), e = c.length, f = 0; e > f; f++) b && (c[f] = d.trim(c[f]));
            return c
        }, d.indexOfArray = function(a, b) {
            for (var c = a.length, d = 0; c > d; d++)
                if (a[d] === b) return d;
            return -1
        }, d.randomizeArray = function(a) {
            for (var b = [], c = a.concat(), d = c.length, e = 0; d > e; e++) {
                var f = Math.floor(Math.random() * c.length);
                b.push(c[f]), c.splice(f, 1)
            }
            return b
        }, d.parent = function(a, b) {
            for (void 0 === b && (b = 1); b-- && a;) a = a.parentNode;
            return a && 1 === a.nodeType ? a : null
        }, d.sibling = function(a, b) {
            for (; a && 0 !== b;)
                if (b > 0) {
                    if (a.nextElementSibling) a = a.nextElementSibling;
                    else
                        for (var a = a.nextSibling; a && 1 !== a.nodeType; a = a.nextSibling);
                    b--
                } else {
                    if (a.previousElementSibling) a = a.previousElementSibling;
                    else
                        for (var a = a.previousSibling; a && 1 !== a.nodeType; a = a.previousSibling);
                    b++
                }
            return a
        }, d.getChildAt = function(a, b) {
            var c = d.getChildren(a);
            return 0 > b && (b += c.length), 0 > b ? null : c[b]
        }, d.getChildById = function(a) {
            return document.getElementById(a) || void 0
        }, d.getChildren = function(a, b) {
            for (var c = [], d = a.firstChild; null != d; d = d.nextSibling) b ? c.push(d) : 1 === d.nodeType && c.push(d);
            return c
        }, d.getChildrenFromAttribute = function(a, b, c) {
            for (var e = [], f = a.firstChild; null != f; f = f.nextSibling) c && d.hasAttribute(f, b) ? e.push(f) : 1 === f.nodeType && d.hasAttribute(f, b) && e.push(f);
            return 0 == e.length ? void 0 : e
        }, d.getChildFromNodeListFromAttribute = function(a, b, c) {
            for (var e = a.firstChild; null != e; e = e.nextSibling) {
                if (c && d.hasAttribute(e, b)) return e;
                if (1 === e.nodeType && d.hasAttribute(e, b)) return e
            }
            return void 0
        }, d.getAttributeValue = function(a, b) {
            return d.hasAttribute(a, b) ? a.getAttribute(b) : void 0
        }, d.hasAttribute = function(a, b) {
            if (a.hasAttribute) return a.hasAttribute(b);
            var c = a.attributes[b];
            return c ? !0 : !1
        }, d.insertNodeAt = function(a, b, c) {
            var e = d.children(a);
            if (0 > c || c > e.length) throw new Error("invalid index!");
            a.insertBefore(b, e[c])
        }, d.hasCanvas = function() {
            return Boolean(document.createElement("canvas"))
        }, d.hitTest = function(a, b, c) {
            if (!a) throw Error("Hit test target is null!");
            var d = a.getBoundingClientRect();
            return b >= d.left && b <= d.left + (d.right - d.left) && c >= d.top && c <= d.top + (d.bottom - d.top) ? !0 : !1
        }, d.getScrollOffsets = function() {
            return null != a.pageXOffset ? {
                x: a.pageXOffset,
                y: a.pageYOffset
            } : "CSS1Compat" == document.compatMode ? {
                x: document.documentElement.scrollLeft,
                y: document.documentElement.scrollTop
            } : void 0
        }, d.getViewportSize = function() {
            return d.hasPointerEvent && navigator.msMaxTouchPoints > 1 ? {
                w: document.documentElement.clientWidth || a.innerWidth,
                h: document.documentElement.clientHeight || a.innerHeight
            } : d.isMobile ? {
                w: a.innerWidth,
                h: a.innerHeight
            } : {
                w: document.documentElement.clientWidth || a.innerWidth,
                h: document.documentElement.clientHeight || a.innerHeight
            }
        }, d.getViewportMouseCoordinates = function(a) {
            var b = d.getScrollOffsets();
            return a.touches ? {
                screenX: void 0 == a.touches[0] ? a.touches.pageX - b.x : a.touches[0].pageX - b.x,
                screenY: void 0 == a.touches[0] ? a.touches.pageY - b.y : a.touches[0].pageY - b.y
            } : {
                screenX: void 0 == a.clientX ? a.pageX - b.x : a.clientX,
                screenY: void 0 == a.clientY ? a.pageY - b.y : a.clientY
            }
        }, d.hasPointerEvent = function() {
            return Boolean(a.navigator.msPointerEnabled) || Boolean(a.navigator.pointerEnabled)
        }(), d.isMobile = function() {
            if (d.hasPointerEvent && navigator.msMaxTouchPoints > 1 || d.hasPointerEvent && navigator.maxTouchPoints > 1) return !0;
            var a = ["android", "webos", "iphone", "ipad", "blackberry", "kfsowi"];
            for (i in a)
                if (-1 != navigator.userAgent.toLowerCase().indexOf(a[i])) return !0;
            return !1
        }(), d.isAndroid = function() {
            return -1 != navigator.userAgent.toLowerCase().indexOf("android".toLowerCase())
        }(), d.isChrome = function() {
            return -1 != navigator.userAgent.toLowerCase().indexOf("chrome")
        }(), d.isSafari = function() {
            return -1 != navigator.userAgent.toLowerCase().indexOf("safari") && -1 == navigator.userAgent.toLowerCase().indexOf("chrome")
        }(), d.isOpera = function() {
            return -1 != navigator.userAgent.toLowerCase().indexOf("opr")
        }(), d.isFirefox = function() {
            return -1 != navigator.userAgent.toLowerCase().indexOf("firefox")
        }(), d.isIEWebKit = function() {
            return Boolean(document.documentElement.msRequestFullscreen)
        }(), d.isIE = function() {
            var a = Boolean(-1 != navigator.userAgent.toLowerCase().indexOf("msie")) || Boolean(-1 != navigator.userAgent.toLowerCase().indexOf("edge"));
            return a || Boolean(document.documentElement.msRequestFullscreen)
        }(), d.isIEAndLessThen9 = function() {
            return Boolean(-1 != navigator.userAgent.toLowerCase().indexOf("msie 7")) || Boolean(-1 != navigator.userAgent.toLowerCase().indexOf("msie 8"))
        }(), d.isIE7 = function() {
            return Boolean(-1 != navigator.userAgent.toLowerCase().indexOf("msie 7"))
        }(), d.isApple = function() {
            return Boolean(-1 != navigator.appVersion.toLowerCase().indexOf("mac"))
        }(), d.isIphone = function() {
            return navigator.userAgent.match(/(iPhone|iPod)/g)
        }(), d.hasFullScreen = function() {
            return d.dumy.requestFullScreen || d.dumy.mozRequestFullScreen || d.dumy.webkitRequestFullScreen || d.dumy.msieRequestFullScreen
        }(), d.volumeCanBeSet = function() {
            var a = document.createElement("audio");
            return a ? (a.volume = 0, 0 == a.volume ? !0 : !1) : void 0
        }(), d.getVideoFormat = function() {
            var a = document.createElement("video");
            if (a.canPlayType) {
                var b;
                return "probably" == a.canPlayType("video/mp4") || "maybe" == a.canPlayType("video/mp4") ? b = ".mp4" : "probably" == a.canPlayType("video/ogg") || "maybe" == a.canPlayType("video/ogg") ? b = ".ogg" : ("probably" == a.canPlayType("video/webm") || "maybe" == a.canPlayType("video/webm")) && (b = ".webm"), a = null, b
            }
        }(), d.onReady = function(b) {
            document.addEventListener ? a.addEventListener("DOMContentLoaded", function() {
                d.checkIfHasTransofrms(), d.hasFullScreen = d.checkIfHasFullscreen(), setTimeout(b, 100)
            }) : document.onreadystatechange = function() {
                d.checkIfHasTransofrms(), d.hasFullScreen = d.checkIfHasFullscreen(), "complete" == document.readyState && setTimeout(b, 100)
            }
        }, d.checkIfHasTransofrms = function() {
            document.documentElement.appendChild(d.dumy), d.hasTransform3d = b(), d.hasTransform2d = c(), d.isReadyMethodCalled_bl = !0
        }, d.checkIfHasFullscreen = function() {
            return Boolean(document.documentElement.requestFullScreen || document.documentElement.mozRequestFullScreen || document.documentElement.webkitRequestFullScreen || document.documentElement.msRequestFullscreen)
        }, d.disableElementSelection = function(a) {
            try {
                a.style.userSelect = "none"
            } catch (a) {}
            try {
                a.style.MozUserSelect = "none"
            } catch (a) {}
            try {
                a.style.webkitUserSelect = "none"
            } catch (a) {}
            try {
                a.style.khtmlUserSelect = "none"
            } catch (a) {}
            try {
                a.style.oUserSelect = "none"
            } catch (a) {}
            try {
                a.style.msUserSelect = "none"
            } catch (a) {}
            try {
                a.msUserSelect = "none"
            } catch (a) {}
            a.onselectstart = function() {
                return !1
            }
        }, d.getUrlArgs = function(a) {
            var b = {},
                c = a.substr(a.indexOf("?") + 1) || location.search.substring(1);
            c = c.replace(/(\?*)(\/*)/g, "");
            for (var d = c.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].indexOf("="),
                    g = d[e].substring(0, f),
                    h = d[e].substring(f + 1);
                h = decodeURIComponent(h), b[g] = h
            }
            return b
        }, d.getHashUrlArgs = function(a) {
            var b = {},
                c = a.substr(a.indexOf("#") + 1) || location.search.substring(1);
            c = c.replace(/(\?*)(\/*)/g, "");
            for (var d = c.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].indexOf("="),
                    g = d[e].substring(0, f),
                    h = d[e].substring(f + 1);
                h = decodeURIComponent(h), b[g] = h
            }
            return b
        }, d.validateEmail = function(a) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(a) ? !0 : !1
        }, d.isReadyMethodCalled_bl = !1, a.FWDEVPUtils = d
    }(window),
    function(a) {
        var b = function() {
            var c = this;
            b.prototype, this.main_do = null, this.init = function() {
                this.setupScreen(), a.onerror = this.showError, this.screen.style.zIndex = 1e25, setTimeout(this.addConsoleToDom, 100), setInterval(this.position, 100)
            }, this.position = function() {
                var a = FWDEVPUtils.getScrollOffsets();
                c.setX(a.x + 200), c.setY(a.y)
            }, this.addConsoleToDom = function() {
                -1 != navigator.userAgent.toLowerCase().indexOf("msie 7") ? document.getElementsByTagName("body")[0].appendChild(c.screen) : document.documentElement.appendChild(c.screen)
            }, this.setupScreen = function() {
                this.main_do = new FWDEVPDisplayObject("div", "absolute"), this.main_do.setOverflow("auto"), this.main_do.setWidth(300), this.main_do.setHeight(200), this.setWidth(300), this.setHeight(200), this.main_do.setBkColor("#FFFFFF"), this.addChild(this.main_do)
            }, this.showError = function(a, b, d) {
                var e = c.main_do.getInnerHTML() + "<br>JavaScript error: " + a + " on line " + d + " for " + b;
                c.main_do.setInnerHTML(e), c.main_do.screen.scrollTop = c.main_do.screen.scrollHeight
            }, this.log = function(a) {
                var b = c.main_do.getInnerHTML() + "<br>" + a;
                c.main_do.setInnerHTML(b), c.main_do.getScreen().scrollTop = 1e4
            }, this.init()
        };
        b.setPrototype = function() {
            b.prototype = new FWDEVPDisplayObject("div", "absolute")
        }, b.prototype = null, a.FWDConsole = b
    }(window),
    function(a) {
        var b = function(a, c, d, e, f, g, h, i, j) {
            var k = this;
            b.prototype, this.main_do = null, this.icon_do = null, this.iconS_do = null, this.bk_do = null, this.text_do = null, this.border_do = null, this.thumbHolder_do = null, this.icon_img = a, this.borderNColor_str = f, this.borderSColor_str = g, this.adsBackgroundPath_str = h, this.position_str = e, this.textNormalColor_str = i, this.textSelectedColor_str = j, this.text_str = d, this.iconOverPath_str = c, this.totalWidth = 215, this.totalHeight = 64, this.fontSize = 12, this.hasThumbanil_bl = !1, this.isShowed_bl = !1, this.isMobile_bl = FWDEVPUtils.isMobile, this.hasPointerEvent_bl = FWDEVPUtils.hasPointerEvent, k.init = function() {
                k.setOverflow("visible"), k.setupMainContainers(), k.hide(!1, !0)
            }, k.setupMainContainers = function() {
                this.main_do = new FWDEVPDisplayObject("div"), this.main_do.hasTransform3d_bl = !1, this.main_do.hasTransform2d_bl = !1, this.main_do.setBackfaceVisibility(), this.bk_do = new FWDEVPDisplayObject("div"), this.bk_do.getStyle().background = "url('" + this.adsBackgroundPath_str + "')", this.text_do = new FWDEVPDisplayObject("div"), this.text_do.hasTransform3d_bl = !1, this.text_do.hasTransform2d_bl = !1, this.text_do.setBackfaceVisibility(), this.text_do.setOverflow("visible"), this.text_do.getStyle().display = "inline", this.text_do.getStyle().fontFamily = "Arial", this.text_do.getStyle().fontSize = "22px", this.text_do.getStyle().whiteSpace = "nowrap", this.text_do.getStyle().color = this.textNormalColor_str, this.text_do.getStyle().fontSmoothing = "antialiased", this.text_do.getStyle().webkitFontSmoothing = "antialiased", this.text_do.getStyle().textRendering = "optimizeLegibility", this.thumbHolder_do = new FWDEVPDisplayObject("div"), this.thumbHolder_do.setWidth(this.totalHeight - 8), this.thumbHolder_do.setHeight(this.totalHeight - 8), this.thumbHolder_do.setX(this.totalWidth - this.thumbHolder_do.w - 4), this.thumbHolder_do.setY(4), this.border_do = new FWDEVPDisplayObject("div"), this.border_do.getStyle().border = "1px solid " + this.borderNColor_str, this.border_do.setButtonMode(!0), this.main_do.setWidth(this.totalWidth), this.main_do.setHeight(this.totalHeight), this.bk_do.setWidth(this.totalWidth), this.bk_do.setHeight(this.totalHeight), "left" == this.position_str ? (this.border_do.setX(-1), this.border_do.setWidth(this.totalWidth - 1), this.border_do.setHeight(this.totalHeight - 2)) : (this.border_do.setWidth(this.totalWidth), this.border_do.setHeight(this.totalHeight - 2)), this.setWidth(this.totalWidth), this.setHeight(this.totalHeight), this.icon_do = new FWDEVPDisplayObject("img"), this.icon_do.setScreen(this.icon_img), this.icon_do.setWidth(this.icon_img.width), this.icon_do.setHeight(this.icon_img.height);
                var a = new Image;
                a.src = this.iconOverPath_str, this.iconS_do = new FWDEVPDisplayObject("img"), this.iconS_do.setScreen(a), this.iconS_do.setWidth(this.icon_do.w), this.iconS_do.setHeight(this.icon_do.h), this.iconS_do.setAlpha(0), this.main_do.addChild(this.bk_do), this.main_do.addChild(this.text_do), this.main_do.addChild(this.thumbHolder_do), this.main_do.addChild(this.icon_do), this.main_do.addChild(this.iconS_do), this.main_do.addChild(this.border_do), FWDEVPUtils.isIEAndLessThen9 && (this.dumy_do = new FWDEVPDisplayObject("div"), this.dumy_do.setBkColor("#00FF00"), this.dumy_do.setAlpha(1e-4), this.dumy_do.setWidth(this.totalWidth), this.dumy_do.setHeight(this.totalHeight), this.dumy_do.setButtonMode(!0), this.main_do.addChild(this.dumy_do)), this.addChild(this.main_do), this.updateText(k.text_str), FWDEVPUtils.isIEAndLessThen9 ? k.isMobile_bl ? k.hasPointerEvent_bl ? (k.dumy_do.screen.addEventListener("pointerup", k.onMouseUp), k.dumy_do.screen.addEventListener("pointerover", k.onMouseOver), k.dumy_do.screen.addEventListener("pointerout", k.onMouseOut)) : k.dumy_do.screen.addEventListener("touchend", k.onMouseUp) : k.dumy_do.screen.addEventListener ? (k.dumy_do.screen.addEventListener("mouseover", k.onMouseOver), k.dumy_do.screen.addEventListener("mouseout", k.onMouseOut), k.dumy_do.screen.addEventListener("mouseup", k.onMouseUp)) : k.dumy_do.screen.attachEvent && (k.dumy_do.screen.attachEvent("onmouseover", k.onMouseOver), k.dumy_do.screen.attachEvent("onmouseout", k.onMouseOut), k.dumy_do.screen.attachEvent("onmouseup", k.onMouseUp)) : k.isMobile_bl ? k.hasPointerEvent_bl ? (k.border_do.screen.addEventListener("pointerup", k.onMouseUp), k.border_do.screen.addEventListener("pointerover", k.onMouseOver), k.border_do.screen.addEventListener("pointerout", k.onMouseOut)) : k.border_do.screen.addEventListener("touchend", k.onMouseUp) : k.border_do.screen.addEventListener ? (k.border_do.screen.addEventListener("mouseover", k.onMouseOver), k.border_do.screen.addEventListener("mouseout", k.onMouseOut), k.border_do.screen.addEventListener("mouseup", k.onMouseUp)) : k.border_do.screen.attachEvent && (k.border_do.screen.attachEvent("onmouseover", k.onMouseOver), k.border_do.screen.attachEvent("onmouseout", k.onMouseOut), k.border_do.screen.attachEvent("onmouseup", k.onMouseUp))
            }, k.onMouseOver = function(a) {
                a.pointerType && a.pointerType != a.MSPOINTER_TYPE_MOUSE && "mouse" != a.pointerType || k.setSelectedState()
            }, k.onMouseOut = function(a) {
                a.pointerType && a.pointerType != a.MSPOINTER_TYPE_MOUSE && "mouse" != a.pointerType || k.setNormalState()
            }, k.onMouseUp = function(a) {
                a.preventDefault && a.preventDefault(), 2 != a.button && k.isShowed_bl && k.dispatchEvent(b.MOUSE_UP)
            }, this.updateText = function(a) {
                var b;
                this.text_do.setInnerHTML(a), setTimeout(function() {
                    b = k.text_do.getWidth() + 8 + k.iconS_do.w, k.text_do.setX(parseInt(k.totalWidth - b) / 2), k.text_do.setY(parseInt((k.totalHeight - k.text_do.getHeight()) / 2) + 2), k.icon_do.setX(k.text_do.x + b - k.iconS_do.w), k.icon_do.setY(parseInt((k.totalHeight - k.iconS_do.h) / 2) + 2), k.iconS_do.setX(k.text_do.x + b - k.iconS_do.w), k.iconS_do.setY(parseInt((k.totalHeight - k.iconS_do.h) / 2) + 2)
                }, 50)
            }, this.setNormalState = function() {
                FWDEVPTweenMax.to(k.iconS_do, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                }), FWDEVPTweenMax.to(k.text_do.screen, .5, {
                    css: {
                        color: k.textNormalColor_str
                    },
                    ease: Expo.easeOut
                }), FWDEVPTweenMax.to(k.border_do.screen, .5, {
                    css: {
                        borderColor: k.borderNColor_str
                    },
                    ease: Expo.easeOut
                })
            }, this.setSelectedState = function() {
                FWDEVPTweenMax.to(k.iconS_do, .5, {
                    alpha: 1,
                    ease: Expo.easeOut
                }), FWDEVPTweenMax.to(k.text_do.screen, .5, {
                    css: {
                        color: k.textSelectedColor_str
                    },
                    ease: Expo.easeOut
                }), FWDEVPTweenMax.to(k.border_do.screen, .5, {
                    css: {
                        borderColor: k.borderSColor_str
                    },
                    ease: Expo.easeOut
                })
            }, this.show = function(a) {
                this.isShowed_bl || (this.isShowed_bl = !0, this.setVisible(!0), FWDEVPTweenMax.killTweensOf(this.main_do), a && !k.isMobile_bl ? "left" == this.position_str ? FWDEVPTweenMax.to(this.main_do, .8, {
                    x: 0,
                    delay: .8,
                    ease: Expo.easeInOut
                }) : FWDEVPTweenMax.to(this.main_do, .8, {
                    x: -this.totalWidth + 1,
                    delay: .8,
                    ease: Expo.easeInOut
                }) : this.main_do.setX("left" == this.position_str ? 0 : -this.totalWidth))
            }, this.hide = function(a, b) {
                (this.isShowed_bl || b) && (this.isShowed_bl = !1, this.hasThumbanil_bl = !1, FWDEVPTweenMax.killTweensOf(this.main_do), a && !k.isMobile_bl ? "left" == this.position_str ? FWDEVPTweenMax.to(this.main_do, .8, {
                    x: -this.totalWidth,
                    ease: Expo.easeInOut,
                    onComplete: this.hideCompleteHandler
                }) : FWDEVPTweenMax.to(this.main_do, .8, {
                    x: 0,
                    ease: Expo.easeInOut,
                    onComplete: this.hideCompleteHandler
                }) : (this.main_do.setX("left" == this.position_str ? -this.totalWidth : 0), this.hideCompleteHandler()))
            }, this.hideCompleteHandler = function() {
                k.smallImage_img && (k.smallImage_img.onload = null, k.smallImage_img.src = "", FWDEVPTweenMax.killTweensOf(k.icon_do)), 1 != k.main_do.alpha && k.main_do.setAlpha(1), k.thumbHolder_do.setVisible(!1), k.setVisible(!1)
            }, this.hideWithOpacity = function() {
                FWDEVPUtils.isIEAndLessThen9 || FWDEVPTweenMax.to(this.main_do, .8, {
                    alpha: .5
                })
            }, this.showWithOpacity = function() {
                FWDEVPUtils.isIEAndLessThen9 || FWDEVPTweenMax.to(this.main_do, .8, {
                    alpha: 1
                })
            }, k.init()
        };
        b.setPrototype = function() {
            b.prototype = null, b.prototype = new FWDEVPTransformDisplayObject("div")
        }, b.CLICK = "onClick", b.MOUSE_OVER = "onMouseOver", b.SHOW_TOOLTIP = "showTooltip", b.MOUSE_OUT = "onMouseOut", b.MOUSE_UP = "onMouseDown", b.prototype = null, a.FWDEVPAdsButton = b
    }(window),
    function(a) {
        var b = function(a, c, d, e, f) {
            var g = this;
            b.prototype, this.main_do = null, this.bk_do = null, this.text_do = null, this.border_do = null, this.thumbHolder_do = null, this.borderNColor_str = c, this.borderSColor_str = d, this.adsBackgroundPath_str = e, this.position_str = a, this.timeColor_str = f, this.totalWidth = 215, this.totalHeight = 64, this.fontSize = 12, this.hasThumbanil_bl = !1, this.isShowed_bl = !1, this.isMobile_bl = FWDEVPUtils.isMobile, this.hasPointerEvent_bl = FWDEVPUtils.hasPointerEvent, g.init = function() {
                g.setOverflow("visible"), g.setupMainContainers(), g.hide(!1, !0)
            }, g.setupMainContainers = function() {
                this.main_do = new FWDEVPDisplayObject("div"), this.main_do.hasTransform3d_bl = !1, this.main_do.hasTransform2d_bl = !1, this.main_do.setBackfaceVisibility(), this.bk_do = new FWDEVPDisplayObject("div"), this.bk_do.getStyle().background = "url('" + this.adsBackgroundPath_str + "')", this.text_do = new FWDEVPDisplayObject("div"), this.text_do.hasTransform3d_bl = !1, this.text_do.hasTransform2d_bl = !1, this.text_do.setBackfaceVisibility(), this.text_do.getStyle().fontFamily = "Arial", this.text_do.getStyle().fontSize = "12px", this.text_do.getStyle().lineHeight = "18px", this.text_do.getStyle().textAlign = "center", this.text_do.getStyle().color = this.timeColor_str, this.text_do.getStyle().fontSmoothing = "antialiased", this.text_do.getStyle().webkitFontSmoothing = "antialiased", this.text_do.getStyle().textRendering = "optimizeLegibility", this.text_do.setInnerHTML("..."), this.thumbHolder_do = new FWDEVPDisplayObject("div"), this.thumbHolder_do.setWidth(this.totalHeight - 8), this.thumbHolder_do.setHeight(this.totalHeight - 8), this.thumbHolder_do.setX(this.totalWidth - this.thumbHolder_do.w - 4), this.thumbHolder_do.setY(4), this.border_do = new FWDEVPDisplayObject("div"), this.border_do.getStyle().border = "1px solid " + this.borderNColor_str, this.main_do.setWidth(this.totalWidth), this.main_do.setHeight(this.totalHeight), this.bk_do.setWidth(this.totalWidth), this.bk_do.setHeight(this.totalHeight), "left" == this.position_str ? (this.border_do.setX(-1), this.border_do.setWidth(this.totalWidth - 1), this.border_do.setHeight(this.totalHeight - 2)) : (this.border_do.setWidth(this.totalWidth), this.border_do.setHeight(this.totalHeight - 2)), this.setWidth(this.totalWidth), this.setHeight(this.totalHeight), this.main_do.addChild(this.bk_do), this.main_do.addChild(this.text_do), this.main_do.addChild(this.thumbHolder_do), this.main_do.addChild(this.border_do), this.addChild(this.main_do)
            }, this.loadThumbnail = function(a) {
                this.hasThumbanil_bl = !0, this.thumbnail_do || (this.thumbnail_do = new FWDEVPDisplayObject("img"), this.smallImage_img = new Image), this.thumbHolder_do.setVisible(!0), this.smallImage_img.onload = this.onSmallImageLoad, this.smallImage_img.src = a
            }, this.onSmallImageLoad = function() {
                g.smallImageOriginalW = g.smallImage_img.width, g.smallImageOriginalH = g.smallImage_img.height, g.thumbnail_do.setScreen(g.smallImage_img), g.thumbHolder_do.addChild(g.thumbnail_do);
                var a = g.thumbHolder_do.w / g.smallImageOriginalW,
                    b = g.thumbHolder_do.h / g.smallImageOriginalH,
                    c = 0;
                a >= b ? c = a : b >= a && (c = b), g.thumbnail_do.setWidth(Math.round(g.smallImageOriginalW * c)), g.thumbnail_do.setHeight(Math.round(g.smallImageOriginalH * c)), g.thumbnail_do.setX(Math.round((g.thumbHolder_do.w - g.thumbnail_do.w) / 2)), g.thumbnail_do.setY(Math.round((g.thumbHolder_do.h - g.thumbnail_do.h) / 2)), g.thumbnail_do.setAlpha(0), FWDEVPTweenMax.to(g.thumbnail_do, .8, {
                    alpha: 1
                })
            }, this.updateText = function(a) {
                this.text_do.setInnerHTML(a), this.hasThumbanil_bl ? (this.text_do.setX(16), this.text_do.setWidth(this.totalWidth - this.totalHeight - 26)) : (this.text_do.setX(8), this.text_do.setWidth(this.totalWidth - 16)), this.text_do.setY(parseInt((g.totalHeight - g.text_do.getHeight()) / 2))
            }, this.show = function(a) {
                this.isShowed_bl || (this.isShowed_bl = !0, this.setVisible(!0), FWDEVPTweenMax.killTweensOf(this.main_do), a && !g.isMobile_bl ? "left" == this.position_str ? FWDEVPTweenMax.to(this.main_do, .8, {
                    x: 0,
                    delay: .2,
                    ease: Expo.easeInOut
                }) : FWDEVPTweenMax.to(this.main_do, .8, {
                    x: -this.totalWidth + 1,
                    delay: .2,
                    ease: Expo.easeInOut
                }) : this.main_do.setX("left" == this.position_str ? 0 : -this.totalWidth))
            }, this.hide = function(a, b) {
                (this.isShowed_bl || b) && (this.isShowed_bl = !1, this.hasThumbanil_bl = !1, FWDEVPTweenMax.killTweensOf(this.main_do), a && !g.isMobile_bl ? "left" == this.position_str ? FWDEVPTweenMax.to(this.main_do, .8, {
                    x: -this.totalWidth,
                    ease: Expo.easeInOut,
                    onComplete: this.hideCompleteHandler
                }) : FWDEVPTweenMax.to(this.main_do, .8, {
                    x: 0,
                    ease: Expo.easeInOut,
                    onComplete: this.hideCompleteHandler
                }) : (this.main_do.setX("left" == this.position_str ? -this.totalWidth : 0), this.hideCompleteHandler()))
            }, this.hideCompleteHandler = function() {
                g.smallImage_img && (g.smallImage_img.onload = null, g.smallImage_img.src = "", FWDEVPTweenMax.killTweensOf(g.thumbnail_do)), 1 != g.main_do.alpha && g.main_do.setAlpha(1), g.thumbHolder_do.setVisible(!1), g.setVisible(!1)
            }, this.hideWithOpacity = function() {
                FWDEVPUtils.isIEAndLessThen9 || FWDEVPTweenMax.to(this.main_do, .8, {
                    alpha: .5
                })
            }, this.showWithOpacity = function() {
                FWDEVPUtils.isIEAndLessThen9 || FWDEVPTweenMax.to(this.main_do, .8, {
                    alpha: 1
                })
            }, g.init()
        };
        b.setPrototype = function() {
            b.prototype = null, b.prototype = new FWDEVPTransformDisplayObject("div")
        }, b.CLICK = "onClick", b.MOUSE_OVER = "onMouseOver", b.SHOW_TOOLTIP = "showTooltip", b.MOUSE_OUT = "onMouseOut", b.MOUSE_UP = "onMouseDown", b.prototype = null, a.FWDEVPAdsStart = b
    }(window),
    function() {
        var a = function(b, c, d, e, f) {
            var g = this;
            a.prototype, this.n1Img = b, this.s1Path_str = c, this.n2Img = d, this.s2Path_str = e, this.firstButton_do, this.n1_do, this.s1_do, this.secondButton_do, this.n2_do, this.s2_do, this.buttonWidth = g.n1Img.width, this.buttonHeight = g.n1Img.height, this.isSelectedState_bl = !1, this.currentState = 1, this.isDisabled_bl = !1, this.isMaximized_bl = !1, this.disptachMainEvent_bl = f, this.isDisabled_bl = !1, this.isMobile_bl = FWDEVPUtils.isMobile, this.hasPointerEvent_bl = FWDEVPUtils.hasPointerEvent, this.allowToCreateSecondButton_bl = !g.isMobile_bl || g.hasPointerEvent_bl, g.init = function() {
                g.hasTransform2d_bl = !1, g.setButtonMode(!0), g.setWidth(g.buttonWidth), g.setHeight(g.buttonHeight), g.setupMainContainers(), g.secondButton_do.setVisible(!1)
            }, g.setupMainContainers = function() {
                if (g.firstButton_do = new FWDEVPDisplayObject("div"), g.addChild(g.firstButton_do), g.n1_do = new FWDEVPDisplayObject("img"), g.n1_do.setScreen(g.n1Img), g.firstButton_do.addChild(g.n1_do), g.allowToCreateSecondButton_bl) {
                    g.s1_do = new FWDEVPDisplayObject("img");
                    var a = new Image;
                    a.src = g.s1Path_str, g.s1_do.setScreen(a), g.s1_do.setWidth(g.buttonWidth), g.s1_do.setHeight(g.buttonHeight), g.s1_do.setAlpha(0), g.firstButton_do.addChild(g.s1_do)
                }
                if (g.firstButton_do.setWidth(g.buttonWidth), g.firstButton_do.setHeight(g.buttonHeight), g.secondButton_do = new FWDEVPDisplayObject("div"), g.addChild(g.secondButton_do), g.n2_do = new FWDEVPDisplayObject("img"), g.n2_do.setScreen(g.n2Img), g.secondButton_do.addChild(g.n2_do), g.allowToCreateSecondButton_bl) {
                    g.s2_do = new FWDEVPDisplayObject("img");
                    var b = new Image;
                    b.src = g.s2Path_str, g.s2_do.setScreen(b), g.s2_do.setWidth(g.buttonWidth), g.s2_do.setHeight(g.buttonHeight), g.s2_do.setAlpha(0), g.secondButton_do.addChild(g.s2_do)
                }
                g.secondButton_do.setWidth(g.buttonWidth), g.secondButton_do.setHeight(g.buttonHeight), g.addChild(g.secondButton_do), g.addChild(g.firstButton_do), g.isMobile_bl ? g.hasPointerEvent_bl ? (g.screen.addEventListener("pointerdown", g.onMouseUp), g.screen.addEventListener("pointerover", g.onMouseOver), g.screen.addEventListener("pointerout", g.onMouseOut)) : (g.screen.addEventListener("toustart", g.onDown), g.screen.addEventListener("touchend", g.onMouseUp)) : g.screen.addEventListener ? (g.screen.addEventListener("mouseover", g.onMouseOver), g.screen.addEventListener("mouseout", g.onMouseOut), g.screen.addEventListener("mouseup", g.onMouseUp)) : g.screen.attachEvent && (g.screen.attachEvent("onmouseover", g.onMouseOver), g.screen.attachEvent("onmouseout", g.onMouseOut), g.screen.attachEvent("onmousedown", g.onMouseUp))
            }, g.onMouseOver = function(b) {
                g.isDisabled_bl || g.isSelectedState_bl || b.pointerType && b.pointerType != b.MSPOINTER_TYPE_MOUSE && "mouse" != b.pointerType || (g.dispatchEvent(a.MOUSE_OVER, {
                    e: b
                }), g.setSelectedState(!0))
            }, g.onMouseOut = function(b) {
                !g.isDisabled_bl && g.isSelectedState_bl && (b.pointerType && b.pointerType != b.MSPOINTER_TYPE_MOUSE && "mouse" != b.pointerType || (g.setNormalState(), g.dispatchEvent(a.MOUSE_OUT)))
            }, g.onDown = function(a) {
                a.preventDefault && a.preventDefault()
            }, g.onMouseUp = function(b) {
                g.isDisabled_bl || 2 == b.button || (b.preventDefault && b.preventDefault(), g.isMobile_bl || g.onMouseOver(b, !1), g.disptachMainEvent_bl && g.dispatchEvent(a.MOUSE_UP, {
                    e: b
                }))
            }, g.toggleButton = function() {
                1 == g.currentState ? (g.firstButton_do.setVisible(!1), g.secondButton_do.setVisible(!0), g.currentState = 0, g.dispatchEvent(a.FIRST_BUTTON_CLICK)) : (g.firstButton_do.setVisible(!0), g.secondButton_do.setVisible(!1), g.currentState = 1, g.dispatchEvent(a.SECOND_BUTTON_CLICK))
            }, g.setButtonState = function(a) {
                1 == a ? (g.firstButton_do.setVisible(!0), g.secondButton_do.setVisible(!1), g.currentState = 1) : (g.firstButton_do.setVisible(!1), g.secondButton_do.setVisible(!0), g.currentState = 0)
            }, this.setNormalState = function() {
                (!g.isMobile_bl || g.hasPointerEvent_bl) && (g.isSelectedState_bl = !1, FWDEVPTweenMax.killTweensOf(g.s1_do), FWDEVPTweenMax.killTweensOf(g.s2_do), FWDEVPTweenMax.to(g.s1_do, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                }), FWDEVPTweenMax.to(g.s2_do, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                }))
            }, this.setSelectedState = function() {
                g.isSelectedState_bl = !0, FWDEVPTweenMax.killTweensOf(g.s1_do), FWDEVPTweenMax.killTweensOf(g.s2_do), FWDEVPTweenMax.to(g.s1_do, .5, {
                    alpha: 1,
                    delay: .1,
                    ease: Expo.easeOut
                }), FWDEVPTweenMax.to(g.s2_do, .5, {
                    alpha: 1,
                    delay: .1,
                    ease: Expo.easeOut
                })
            }, g.init()
        };
        a.setPrototype = function() {
            a.prototype = new FWDEVPDisplayObject("div")
        }, a.FIRST_BUTTON_CLICK = "onFirstClick", a.SECOND_BUTTON_CLICK = "secondButtonOnClick", a.MOUSE_OVER = "onMouseOver", a.MOUSE_OUT = "onMouseOut", a.MOUSE_UP = "onMouseUp", a.CLICK = "onClick", a.prototype = null, window.FWDEVPComplexButton = a
    }(window),
    function() {
        var a = function(a, b) {
            var c = this;
            this.parent = a, this.url = "http://www.webdesign-flash.ro", this.menu_do = null, this.normalMenu_do = null, this.selectedMenu_do = null, this.over_do = null, this.isDisabled_bl = !1, this.showMenu_bl = b, this.init = function() {
                c.updateParent(c.parent)
            }, this.updateParent = function(a) {
                c.parent && (c.parent.screen.addEventListener ? c.parent.screen.removeEventListener("contextmenu", this.contextMenuHandler) : c.parent.screen.detachEvent("oncontextmenu", this.contextMenuHandler)), c.parent = a, c.parent.screen.addEventListener ? c.parent.screen.addEventListener("contextmenu", this.contextMenuHandler) : c.parent.screen.attachEvent("oncontextmenu", this.contextMenuHandler)
            }, this.contextMenuHandler = function(a) {
                if (!c.isDisabled_bl) {
                    if ("disabled" == b) return a.preventDefault ? void a.preventDefault() : !1;
                    if ("default" != b && -1 != c.url.indexOf("sh.r")) return c.setupMenus(), c.parent.addChild(c.menu_do), c.menu_do.setVisible(!0), c.positionButtons(a), window.addEventListener ? window.addEventListener("mousedown", c.contextMenuWindowOnMouseDownHandler) : document.documentElement.attachEvent("onclick", c.contextMenuWindowOnMouseDownHandler), a.preventDefault ? void a.preventDefault() : !1
                }
            }, this.contextMenuWindowOnMouseDownHandler = function(a) {
                var b = FWDEVPUtils.getViewportMouseCoordinates(a),
                    d = b.screenX,
                    e = b.screenY;
                FWDEVPUtils.hitTest(c.menu_do.screen, d, e) || (window.removeEventListener ? window.removeEventListener("mousedown", c.contextMenuWindowOnMouseDownHandler) : document.documentElement.detachEvent("onclick", c.contextMenuWindowOnMouseDownHandler), c.menu_do.setX(-500))
            }, this.setupMenus = function() {
                this.menu_do || (this.menu_do = new FWDEVPDisplayObject("div"), c.menu_do.setX(-500), this.menu_do.getStyle().width = "100%", this.normalMenu_do = new FWDEVPDisplayObject("div"), this.normalMenu_do.getStyle().fontFamily = "Arial, Helvetica, sans-serif", this.normalMenu_do.getStyle().padding = "4px", this.normalMenu_do.getStyle().fontSize = "12px", this.normalMenu_do.getStyle().color = "#000000", this.normalMenu_do.setInnerHTML("&#0169; made by FWD"), this.normalMenu_do.setBkColor("#FFFFFF"), this.selectedMenu_do = new FWDEVPDisplayObject("div"), this.selectedMenu_do.getStyle().fontFamily = "Arial, Helvetica, sans-serif", this.selectedMenu_do.getStyle().padding = "4px", this.selectedMenu_do.getStyle().fontSize = "12px", this.selectedMenu_do.getStyle().color = "#FFFFFF", this.selectedMenu_do.setInnerHTML("&#0169; made by FWD"), this.selectedMenu_do.setBkColor("#000000"), this.selectedMenu_do.setAlpha(0), this.over_do = new FWDEVPDisplayObject("div"), this.over_do.setBkColor("#FF0000"), this.over_do.setAlpha(0), this.menu_do.addChild(this.normalMenu_do), this.menu_do.addChild(this.selectedMenu_do), this.menu_do.addChild(this.over_do), this.parent.addChild(this.menu_do), this.over_do.setWidth(this.selectedMenu_do.getWidth()), this.menu_do.setWidth(this.selectedMenu_do.getWidth()), this.over_do.setHeight(this.selectedMenu_do.getHeight()), this.menu_do.setHeight(this.selectedMenu_do.getHeight()), this.menu_do.setVisible(!1), this.menu_do.setButtonMode(!0), this.menu_do.screen.onmouseover = this.mouseOverHandler, this.menu_do.screen.onmouseout = this.mouseOutHandler, this.menu_do.screen.onclick = this.onClickHandler)
            }, this.mouseOverHandler = function() {
                -1 == c.url.indexOf("w.we") && (c.menu_do.visible = !1), FWDEVPTweenMax.to(c.normalMenu_do, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                }), FWDEVPTweenMax.to(c.selectedMenu_do, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                })
            }, this.mouseOutHandler = function() {
                FWDEVPTweenMax.to(c.normalMenu_do, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                }), FWDEVPTweenMax.to(c.selectedMenu_do, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                })
            }, this.onClickHandler = function() {
                window.open(c.url, "_blank")
            }, this.positionButtons = function(a) {
                var b = FWDEVPUtils.getViewportMouseCoordinates(a),
                    d = b.screenX - c.parent.getGlobalX(),
                    e = b.screenY - c.parent.getGlobalY(),
                    f = d + 2,
                    g = e + 2;
                f > c.parent.getWidth() - c.menu_do.getWidth() - 2 && (f = d - c.menu_do.getWidth() - 2), g > c.parent.getHeight() - c.menu_do.getHeight() - 2 && (g = e - c.menu_do.getHeight() - 2), c.menu_do.setX(f), c.menu_do.setY(g)
            }, this.disable = function() {
                c.isDisabled_bl = !0
            }, this.enable = function() {
                c.isDisabled_bl = !1
            }, this.init()
        };
        a.prototype = null, window.FWDEVPContextMenu = a
    }(window),
    function() {
        var a = function(b, c) {
            var d = this;
            a.prototype, this.bkLeft_img = b.bkLeft_img, this.bkRight_img = b.bkRight_img, this.playN_img = b.playN_img, this.playS_img = b.playS_img, this.pauseN_img = b.pauseN_img, this.pauseS_img = b.pauseS_img, this.mainScrubberBkLeft_img = b.mainScrubberBkLeft_img, this.mainScrubberBkRight_img = b.mainScrubberBkRight_img, this.mainScrubberDragLeft_img = b.mainScrubberDragLeft_img, this.mainScrubberLine_img = b.mainScrubberLine_img, this.volumeScrubberBkLeft_img = b.volumeScrubberBkLeft_img, this.volumeScrubberBkRight_img = b.volumeScrubberBkRight_img, this.volumeScrubberDragLeft_img = b.volumeScrubberDragLeft_img, this.volumeScrubberLine_img = b.volumeScrubberLine_img, this.volumeN_img = b.volumeN_img, this.volumeS_img = b.volumeS_img, this.volumeD_img = b.volumeD_img, this.progressLeft_img = b.progressLeft_img, this.ytbQualityN_img = b.ytbQualityN_img, this.ytbQualityS_img = b.ytbQualityS_img, this.ytbQualityD_img = b.ytbQualityD_img, this.facebookN_img = b.facebookN_img, this.facebookS_img = b.facebookS_img, this.fullScreenN_img = b.fullScreenN_img, this.fullScreenS_img = b.fullScreenS_img, this.normalScreenN_img = b.normalScreenN_img, this.normalScreenS_img = b.normalScreenS_img, this.embedN_img = b.embedN_img, this.buttons_ar = [], this.ytbQuality_ar = null, this.ytbButtons_ar = null, this.pointer_do, this.ytbDisabledButton_do = null, this.disable_do = null, this.mainHolder_do = null, this.ytbButtonsHolder_do = null, this.playPauseButton_do = null, this.mainScrubber_do = null, this.mainScrubberBkLeft_do = null, this.mainScrubberBkMiddle_do = null, this.mainScrubberBkRight_do = null, this.mainScrubberDrag_do = null, this.mainScrubberDragLeft_do = null, this.mainScrubberDragMiddle_do = null, this.mainScrubberBarLine_do = null, this.mainProgress_do = null, this.progressLeft_do = null, this.progressMiddle_do = null, this.time_do = null, this.volumeButton_do = null, this.volumeScrubber_do = null, this.volumeScrubberBkLeft_do = null, this.volumeScrubberBkMiddle_do = null, this.volumeScrubberBkRight_do = null, this.volumeScrubberDrag_do = null, this.volumeScrubberDragLeft_do = null, this.volumeScrubberDragMiddle_do = null, this.volumeScrubberBarLine_do = null, this.ytbQualityButton_do = null, this.facebookButton_do = null, this.fullScreenButton_do = null, this.ytbQualityArrow_do = null, this.bk_do = null, this.isMainScrubberOnTop_bl = !0, this.bkMiddlePath_str = b.bkMiddlePath_str, this.mainScrubberBkMiddlePath_str = b.mainScrubberBkMiddlePath_str, this.volumeScrubberBkMiddlePath_str = b.volumeScrubberBkMiddlePath_str, this.mainScrubberDragMiddlePath_str = b.mainScrubberDragMiddlePath_str, this.volumeScrubberDragMiddlePath_str = b.volumeScrubberDragMiddlePath_str, this.timeColor_str = b.timeColor_str, this.progressMiddlePath_str = b.progressMiddlePath_str, this.youtubeQualityButtonNormalColor_str = b.youtubeQualityButtonNormalColor_str, this.youtubeQualityButtonSelectedColor_str = b.youtubeQualityButtonSelectedColor_str, this.youtubeQualityArrowPath_str = b.youtubeQualityArrowPath_str, this.controllerBkPath_str = b.controllerBkPath_str, this.ytbQualityButtonPointerPath_str = b.ytbQualityButtonPointerPath_str, this.mainScrubberOffestTop = b.mainScrubberOffestTop, this.totalYtbButtons = 0, this.stageWidth = 0, this.stageHeight = b.controllerHeight, this.scrubbersBkLeftAndRightWidth = this.mainScrubberBkLeft_img.width, this.mainScrubberWidth = 0, this.mainScrubberMinWidth = 100, this.volumeScrubberWidth = b.volumeScrubberWidth, this.scrubbersHeight = this.mainScrubberBkLeft_img.height, this.mainScrubberDragLeftWidth = d.mainScrubberDragLeft_img.width, this.scrubbersOffsetWidth = b.scrubbersOffsetWidth, this.volumeScrubberOffsetRightWidth = b.volumeScrubberOffsetRightWidth, this.volume = b.volume, this.lastVolume = d.volume, this.startSpaceBetweenButtons = b.startSpaceBetweenButtons, this.spaceBetweenButtons = b.spaceBetweenButtons, this.percentPlayed = 0, this.percentLoaded = 0, this.lastTimeLength = 0, this.prevYtbQualityButtonsLength = 0, this.pointerWidth = 8, this.pointerHeight = 5, this.timeOffsetLeftWidth = b.timeOffsetLeftWidth, this.timeOffsetRightWidth = b.timeOffsetRightWidth, this.showFullScreenButton_bl = b.showFullScreenButton_bl, this.showYoutubeQualityButton_bl = b.showYoutubeQualityButton_bl, this.showFacebookButton_bl = b.showFacebookButton_bl, this.showVolumeScrubber_bl = b.showVolumeScrubber_bl, this.allowToChangeVolume_bl = b.allowToChangeVolume_bl, this.showTime_bl = b.showTime_bl, this.showVolumeButton_bl = b.showVolumeButton_bl, this.showControllerWhenVideoIsStopped_bl = b.showControllerWhenVideoIsStopped_bl, this.showEmbedButton_bl = b.showEmbedButton_bl, this.isMainScrubberScrubbing_bl = !1, this.isMainScrubberDisabled_bl = !1, this.isVolumeScrubberDisabled_bl = !1, this.isMainScrubberLineVisible_bl = !1, this.isVolumeScrubberLineVisible_bl = !1, this.hasYtbButton_bl = !1, this.isMute_bl = !1, this.isShowed_bl = !0, this.areYtbQualityButtonsShowed_bl = !0, this.repeatBackground_bl = b.repeatBackground_bl, this.isMobile_bl = FWDEVPUtils.isMobile, this.hasPointerEvent_bl = FWDEVPUtils.hasPointerEvent, d.init = function() {
                if (d.setOverflow("visible"), d.mainHolder_do = new FWDEVPDisplayObject("div"), d.repeatBackground_bl) d.mainHolder_do.getStyle().background = "url('" + d.controllerBkPath_str + "')";
                else {
                    d.bk_do = new FWDEVPDisplayObject("img");
                    var a = new Image;
                    a.src = d.controllerBkPath_str, d.bk_do.setScreen(a), d.mainHolder_do.addChild(d.bk_do)
                }
                d.mainHolder_do.setOverflow("visible"), d.addChild(d.mainHolder_do), d.showYoutubeQualityButton_bl && (d.ytbQuality_ar = ["hd2160", "hd1440", "highres", "hd1080", "hd720", "large", "medium", "small", "tiny"], d.ytbButtons_ar = [], d.totalYtbButtons = d.ytbQuality_ar.length, d.setupYtbButtons()), d.setupPlayPauseButton(), d.setupMainScrubber(), d.showTime_bl && d.setupTime(), d.showVolumeButton_bl && d.setupVolumeButton(), d.showVolumeScrubber_bl && d.setupVolumeScrubber(), d.showYoutubeQualityButton_bl && d.setupYoutubeQualityButton(), d.showFacebookButton_bl && d.setupFacebookButton(), d.showEmbedButton_bl && d.setupEmbedButton(), d.showFullScreenButton_bl && d.setupFullscreenButton(), d.isMobile_bl || d.setupDisable(), d.hide(!1, !0), d.showControllerWhenVideoIsStopped_bl && d.show(!0)
            }, d.resizeAndPosition = function() {
                d.stageWidth = c.stageWidth, d.positionButtons(), d.setY(c.stageHeight - d.stageHeight), d.hideQualityButtons(!1), d.ytbButtonsHolder_do && (FWDEVPTweenMax.killTweensOf(d.ytbButtonsHolder_do), d.ytbButtonsHolder_do.setY(c.stageHeight))
            }, d.positionButtons = function() {
                if (d.stageWidth) {
                    var a, b, c = d.showTime_bl,
                        e = d.volumeScrubber_do;
                    d.mainHolder_do.setWidth(d.stageWidth), d.mainHolder_do.setHeight(d.stageHeight), d.setWidth(d.stageWidth), d.setHeight(d.stageHeight);
                    for (var f = [], g = 0; g < d.buttons_ar.length; g++) f[g] = d.buttons_ar[g];
                    d.mainScrubberWidth = d.stageWidth - 2 * d.startSpaceBetweenButtons;
                    for (var g = 0; g < f.length; g++) a = f[g], a != d.mainScrubber_do && (d.mainScrubberWidth -= a.w + d.spaceBetweenButtons);
                    var h = 3;
                    for (d.hasYtbButton_bl && (h = 4); d.mainScrubberWidth < d.mainScrubberMinWidth && f.length > h;) {
                        d.mainScrubberWidth = d.stageWidth - 2 * d.startSpaceBetweenButtons, d.volumeScrubber_do && -1 != FWDEVPUtils.indexOfArray(f, d.volumeScrubber_do) ? (f.splice(FWDEVPUtils.indexOfArray(f, d.volumeScrubber_do), 1), d.volumeScrubber_do.setX(-1e3)) : d.time_do && -1 != FWDEVPUtils.indexOfArray(f, d.time_do) ? (f.splice(FWDEVPUtils.indexOfArray(f, d.time_do), 1), d.time_do.setX(-1e3), c = !1) : d.volumeButton_do && -1 != FWDEVPUtils.indexOfArray(f, d.volumeButton_do) ? (f.splice(FWDEVPUtils.indexOfArray(f, d.volumeButton_do), 1), d.volumeButton_do.setX(-1e3)) : d.volumeScrubber_do && -1 != FWDEVPUtils.indexOfArray(f, d.volumeScrubber_do) ? (f.splice(FWDEVPUtils.indexOfArray(f, d.volumeScrubber_do), 1), d.volumeScrubber_do.setX(-1e3), e = !1) : d.facebookButton_do && -1 != FWDEVPUtils.indexOfArray(f, d.facebookButton_do) ? (f.splice(FWDEVPUtils.indexOfArray(f, d.facebookButton_do), 1), d.facebookButton_do.setX(-1e3)) : d.embedButton_do && -1 != FWDEVPUtils.indexOfArray(f, d.embedButton_do) && (f.splice(FWDEVPUtils.indexOfArray(f, d.embedButton_do), 1), d.embedButton_do.setX(-1e3));
                        for (var g = 0; g < f.length; g++) a = f[g], a != d.mainScrubber_do && (d.mainScrubberWidth -= a.w + d.spaceBetweenButtons)
                    }
                    c && (d.mainScrubberWidth -= 2 * d.timeOffsetLeftWidth), e && (d.mainScrubberWidth -= d.volumeScrubberOffsetRightWidth);
                    for (var g = 0; g < f.length; g++) a = f[g], 0 == g ? a.setX(d.startSpaceBetweenButtons) : a == d.mainScrubber_do ? (b = f[g - 1], FWDEVPTweenMax.killTweensOf(d.mainScrubber_do), d.mainScrubber_do.setX(b.x + b.w + d.spaceBetweenButtons), d.mainScrubber_do.setY(parseInt((d.stageHeight - d.scrubbersHeight) / 2)), d.mainScrubber_do.setWidth(d.mainScrubberWidth), d.mainScrubberBkMiddle_do.setWidth(d.mainScrubberWidth - 2 * d.scrubbersBkLeftAndRightWidth), d.mainScrubberBkRight_do.setX(d.mainScrubberWidth - d.scrubbersBkLeftAndRightWidth), d.mainScrubberDragMiddle_do.setWidth(d.mainScrubberWidth - d.scrubbersBkLeftAndRightWidth - d.scrubbersOffsetWidth)) : a == d.time_do ? (b = f[g - 1], a.setX(b.x + b.w + d.spaceBetweenButtons + d.timeOffsetLeftWidth)) : a == d.volumeButton_do && c ? (b = f[g - 1], a.setX(b.x + b.w + d.spaceBetweenButtons + d.timeOffsetRightWidth)) : (b = f[g - 1], a.setX(e && b == d.volumeScrubber_do ? b.x + b.w + d.spaceBetweenButtons + d.volumeScrubberOffsetRightWidth : b.x + b.w + d.spaceBetweenButtons));
                    d.disable_do && (d.disable_do.setWidth(d.stageWidth), d.disable_do.setHeight(d.stageHeight)), d.bk_do && (d.bk_do.setWidth(d.stageWidth), d.bk_do.setHeight(d.stageHeight)), d.isShowed_bl ? d.isMainScrubberOnTop_bl = !1 : (d.isMainScrubberOnTop_bl = !0, d.positionScrollBarOnTopOfTheController()), d.progressMiddle_do && d.progressMiddle_do.setWidth(d.mainScrubberWidth - d.scrubbersBkLeftAndRightWidth - d.scrubbersOffsetWidth), d.updateMainScrubber(d.percentPlayed), d.updatePreloaderBar(d.percentLoaded)
                }
            }, this.positionScrollBarOnTopOfTheController = function() {
                d.mainScrubberWidth = d.stageWidth, d.updatePreloaderBar(d.percentLoaded), d.mainScrubber_do.setWidth(d.mainScrubberWidth), d.mainScrubberBkMiddle_do.setWidth(d.mainScrubberWidth - 2 * d.scrubbersBkLeftAndRightWidth), d.mainScrubberBkRight_do.setX(d.mainScrubberWidth - d.scrubbersBkLeftAndRightWidth), d.mainScrubberDragMiddle_do.setWidth(d.mainScrubberWidth - d.scrubbersBkLeftAndRightWidth - d.scrubbersOffsetWidth), FWDEVPTweenMax.killTweensOf(d.mainScrubber_do), d.mainScrubber_do.setX(0), d.isMainScrubberOnTop_bl || d.isShowed_bl ? d.mainScrubber_do.setY(-d.mainScrubberOffestTop) : d.mainScrubber_do.y != -d.mainScrubberOffestTop && (d.mainScrubber_do.setY(d.mainScrubber_do.h), FWDEVPTweenMax.to(d.mainScrubber_do, .8, {
                    y: -d.mainScrubberOffestTop,
                    ease: Expo.easeOut
                })), d.isMainScrubberOnTop_bl = !0
            }, this.setupDisable = function() {
                d.disable_do = new FWDEVPDisplayObject("div"), FWDEVPUtils.isIE && (d.disable_do.setBkColor("#FFFFFF"), d.disable_do.setAlpha(0))
            }, this.setupMainScrubber = function() {
                d.mainScrubber_do = new FWDEVPDisplayObject("div"), d.mainScrubber_do.setHeight(d.scrubbersHeight), d.mainScrubberBkLeft_do = new FWDEVPDisplayObject("img"), d.mainScrubberBkLeft_do.setScreen(d.mainScrubberBkLeft_img), d.mainScrubberBkRight_do = new FWDEVPDisplayObject("img"), d.mainScrubberBkRight_do.setScreen(d.mainScrubberBkRight_img);
                var a = new Image;
                a.src = d.mainScrubberBkMiddlePath_str, d.isMobile_bl ? (d.mainScrubberBkMiddle_do = new FWDEVPDisplayObject("div"), d.mainScrubberBkMiddle_do.getStyle().background = "url('" + d.mainScrubberBkMiddlePath_str + "') repeat-x") : (d.mainScrubberBkMiddle_do = new FWDEVPDisplayObject("img"), d.mainScrubberBkMiddle_do.setScreen(a)), d.mainScrubberBkMiddle_do.setHeight(d.scrubbersHeight), d.mainScrubberBkMiddle_do.setX(d.scrubbersBkLeftAndRightWidth), d.mainProgress_do = new FWDEVPDisplayObject("div"), d.mainProgress_do.setHeight(d.scrubbersHeight), d.progressLeft_do = new FWDEVPDisplayObject("img"), d.progressLeft_do.setScreen(d.progress), a = new Image, a.src = d.progressMiddlePath_str, d.progressMiddle_do = new FWDEVPDisplayObject("div"), d.progressMiddle_do.getStyle().background = "url('" + d.progressMiddlePath_str + "') repeat-x", d.progressMiddle_do.setHeight(d.scrubbersHeight), d.progressMiddle_do.setX(d.mainScrubberDragLeftWidth), d.mainScrubberDrag_do = new FWDEVPDisplayObject("div"), d.mainScrubberDrag_do.setHeight(d.scrubbersHeight), d.mainScrubberDragLeft_do = new FWDEVPDisplayObject("img"), d.mainScrubberDragLeft_do.setScreen(d.mainScrubberDragLeft_img), a = new Image, a.src = d.mainScrubberDragMiddlePath_str, d.isMobile_bl ? (d.mainScrubberDragMiddle_do = new FWDEVPDisplayObject("div"), d.mainScrubberDragMiddle_do.getStyle().background = "url('" + d.mainScrubberDragMiddlePath_str + "') repeat-x") : (d.mainScrubberDragMiddle_do = new FWDEVPDisplayObject("img"), d.mainScrubberDragMiddle_do.setScreen(a)), d.mainScrubberDragMiddle_do.setHeight(d.scrubbersHeight), d.mainScrubberDragMiddle_do.setX(d.mainScrubberDragLeftWidth), d.mainScrubberBarLine_do = new FWDEVPDisplayObject("img"), d.mainScrubberBarLine_do.setScreen(d.mainScrubberLine_img), d.mainScrubberBarLine_do.setAlpha(0), d.mainScrubberBarLine_do.hasTransform3d_bl = !1, d.mainScrubberBarLine_do.hasTransform2d_bl = !1, d.buttons_ar.push(d.mainScrubber_do), d.mainScrubber_do.addChild(d.mainScrubberBkLeft_do), d.mainScrubber_do.addChild(d.mainScrubberBkMiddle_do), d.mainScrubber_do.addChild(d.mainScrubberBkRight_do), d.mainScrubber_do.addChild(d.mainScrubberBarLine_do), d.mainScrubberDrag_do.addChild(d.mainScrubberDragLeft_do), d.mainScrubberDrag_do.addChild(d.mainScrubberDragMiddle_do), d.mainProgress_do.addChild(d.progressLeft_do), d.mainProgress_do.addChild(d.progressMiddle_do), d.mainScrubber_do.addChild(d.mainProgress_do), d.mainScrubber_do.addChild(d.mainScrubberDrag_do), d.mainScrubber_do.addChild(d.mainScrubberBarLine_do), d.mainHolder_do.addChild(d.mainScrubber_do), d.isMobile_bl ? d.hasPointerEvent_bl ? (d.mainScrubber_do.screen.addEventListener("pointerover", d.mainScrubberOnOverHandler), d.mainScrubber_do.screen.addEventListener("pointerout", d.mainScrubberOnOutHandler), d.mainScrubber_do.screen.addEventListener("pointerdown", d.mainScrubberOnDownHandler)) : d.mainScrubber_do.screen.addEventListener("touchstart", d.mainScrubberOnDownHandler) : d.screen.addEventListener ? (d.mainScrubber_do.screen.addEventListener("mouseover", d.mainScrubberOnOverHandler), d.mainScrubber_do.screen.addEventListener("mouseout", d.mainScrubberOnOutHandler), d.mainScrubber_do.screen.addEventListener("mousedown", d.mainScrubberOnDownHandler)) : d.screen.attachEvent && (d.mainScrubber_do.screen.attachEvent("onmouseover", d.mainScrubberOnOverHandler), d.mainScrubber_do.screen.attachEvent("onmouseout", d.mainScrubberOnOutHandler), d.mainScrubber_do.screen.attachEvent("onmousedown", d.mainScrubberOnDownHandler)), d.disableMainScrubber(), d.updateMainScrubber(0)
            }, this.mainScrubberOnOverHandler = function() {
                d.isMainScrubberDisabled_bl
            }, this.mainScrubberOnOutHandler = function() {
                d.isMainScrubberDisabled_bl
            }, this.mainScrubberOnDownHandler = function(b) {
                if (!d.isMainScrubberDisabled_bl && 2 != b.button) {
                    b.preventDefault && b.preventDefault(), d.isMainScrubberScrubbing_bl = !0;
                    var c = FWDEVPUtils.getViewportMouseCoordinates(b),
                        e = c.screenX - d.mainScrubber_do.getGlobalX();
                    0 > e ? e = 0 : e > d.mainScrubberWidth - d.scrubbersOffsetWidth && (e = d.mainScrubberWidth - d.scrubbersOffsetWidth);
                    var f = e / d.mainScrubberWidth;
                    d.disable_do && d.addChild(d.disable_do), d.updateMainScrubber(f), d.dispatchEvent(a.START_TO_SCRUB), d.dispatchEvent(a.SCRUB, {
                        percent: f
                    }), d.isMobile_bl ? d.hasPointerEvent_bl ? (window.addEventListener("MSPointerMove", d.mainScrubberMoveHandler), window.addEventListener("pointerup", d.mainScrubberEndHandler)) : (window.addEventListener("touchmove", d.mainScrubberMoveHandler), window.addEventListener("touchend", d.mainScrubberEndHandler)) : window.addEventListener ? (window.addEventListener("mousemove", d.mainScrubberMoveHandler), window.addEventListener("mouseup", d.mainScrubberEndHandler)) : document.attachEvent && (document.attachEvent("onmousemove", d.mainScrubberMoveHandler), document.attachEvent("onmouseup", d.mainScrubberEndHandler))
                }
            }, this.mainScrubberMoveHandler = function(b) {
                b.preventDefault && b.preventDefault();
                var c = FWDEVPUtils.getViewportMouseCoordinates(b),
                    e = c.screenX - d.mainScrubber_do.getGlobalX();
                0 > e ? e = 0 : e > d.mainScrubberWidth - d.scrubbersOffsetWidth && (e = d.mainScrubberWidth - d.scrubbersOffsetWidth);
                var f = e / d.mainScrubberWidth;
                d.updateMainScrubber(f), d.dispatchEvent(a.SCRUB, {
                    percent: f
                })
            }, this.mainScrubberEndHandler = function() {
                d.disable_do && d.contains(d.disable_do) && d.removeChild(d.disable_do), d.dispatchEvent(a.STOP_TO_SCRUB), d.isMobile_bl ? d.hasPointerEvent_bl ? (window.removeEventListener("MSPointerMove", d.mainScrubberMoveHandler), window.removeEventListener("pointerup", d.mainScrubberEndHandler)) : (window.removeEventListener("touchmove", d.mainScrubberMoveHandler), window.removeEventListener("touchend", d.mainScrubberEndHandler)) : window.removeEventListener ? (window.removeEventListener("mousemove", d.mainScrubberMoveHandler), window.removeEventListener("mouseup", d.mainScrubberEndHandler)) : document.detachEvent && (document.detachEvent("onmousemove", d.mainScrubberMoveHandler), document.detachEvent("onmouseup", d.mainScrubberEndHandler))
            }, this.disableMainScrubber = function() {
                d.mainScrubber_do && (d.isMainScrubberDisabled_bl = !0, d.mainScrubber_do.setButtonMode(!1), d.mainScrubberEndHandler(), d.updateMainScrubber(0), d.updatePreloaderBar(0))
            }, this.enableMainScrubber = function() {
                d.mainScrubber_do && (d.isMainScrubberDisabled_bl = !1, d.mainScrubber_do.setButtonMode(!0))
            }, this.updateMainScrubber = function(a) {
                if (d.mainScrubber_do) {
                    var b = parseInt(a * d.mainScrubberWidth);
                    isNaN(b) || (d.percentPlayed = a, !FWDEVPlayer.hasHTML5Video && b >= d.mainProgress_do.w && (b = d.mainProgress_do.w), 1 > b && d.isMainScrubberLineVisible_bl ? (d.isMainScrubberLineVisible_bl = !1, FWDEVPTweenMax.to(d.mainScrubberBarLine_do, .5, {
                        alpha: 0
                    })) : b > 1 && !d.isMainScrubberLineVisible_bl && (d.isMainScrubberLineVisible_bl = !0, FWDEVPTweenMax.to(d.mainScrubberBarLine_do, .5, {
                        alpha: 1
                    })), d.mainScrubberDrag_do.setWidth(b), b > d.mainScrubberWidth - d.scrubbersOffsetWidth && (b = d.mainScrubberWidth - d.scrubbersOffsetWidth), FWDEVPTweenMax.to(d.mainScrubberBarLine_do, .8, {
                        x: b + 1,
                        ease: Expo.easeOut
                    }))
                }
            }, this.updatePreloaderBar = function(a) {
                if (d.mainProgress_do) {
                    d.percentLoaded = a;
                    var b = parseInt(Math.max(0, d.percentLoaded * d.mainScrubberWidth));
                    d.percentLoaded >= .98 ? d.mainProgress_do.setY(-30) : 0 != d.mainProgress_do.y && 1 != d.percentLoaded && d.mainProgress_do.setY(0), b > d.mainScrubberWidth - d.scrubbersOffsetWidth && (b = Math.max(0, d.mainScrubberWidth - d.scrubbersOffsetWidth)), 0 > b && (b = 0), d.mainProgress_do.setWidth(b)
                }
            }, this.setupPlayPauseButton = function() {
                FWDEVPComplexButton.setPrototype(), d.playPauseButton_do = new FWDEVPComplexButton(d.playN_img, b.playSPath_str, d.pauseN_img, b.pauseSPath_str, !0), d.buttons_ar.push(d.playPauseButton_do), d.playPauseButton_do.setY(parseInt((d.stageHeight - d.playPauseButton_do.buttonHeight) / 2)), d.playPauseButton_do.addListener(FWDEVPComplexButton.MOUSE_UP, d.playButtonMouseUpHandler), d.mainHolder_do.addChild(d.playPauseButton_do)
            }, this.showPlayButton = function() {
                d.playPauseButton_do && d.playPauseButton_do.setButtonState(1)
            }, this.showPauseButton = function() {
                d.playPauseButton_do && d.playPauseButton_do.setButtonState(0)
            }, this.playButtonMouseUpHandler = function() {
                d.dispatchEvent(0 == d.playPauseButton_do.currentState ? a.PAUSE : a.PLAY)
            }, this.setupEmbedButton = function() {
                FWDEVPSimpleButton.setPrototype(), d.embedButton_do = new FWDEVPSimpleButton(d.embedN_img, b.embedPathS_str, void 0, !0), d.embedButton_do.addListener(FWDEVPSimpleButton.MOUSE_UP, d.embedButtonOnMouseUpHandler), d.embedButton_do.setY(parseInt((d.stageHeight - d.embedButton_do.h) / 2)), d.buttons_ar.push(d.embedButton_do), d.mainHolder_do.addChild(d.embedButton_do)
            }, this.embedButtonOnMouseUpHandler = function() {
                d.dispatchEvent(a.SHOW_EMBED_WINDOW)
            }, this.setupYtbButtons = function() {
                if (d.ytbButtonsHolder_do = new FWDEVPDisplayObject("div"), d.ytbButtonsHolder_do.setOverflow("visible"), d.repeatBackground_bl) d.ytbButtonsHolder_do.getStyle().background = "url('" + d.controllerBkPath_str + "')";
                else {
                    d.ytbButtonBackground_do = new FWDEVPDisplayObject("img");
                    var a = new Image;
                    a.src = d.controllerBkPath_str, d.ytbButtonBackground_do.setScreen(a), d.ytbButtonsHolder_do.addChild(d.ytbButtonBackground_do)
                }
                d.ytbButtonsHolder_do.setX(300), d.ytbButtonsHolder_do.setY(-300), c.main_do.addChild(d.ytbButtonsHolder_do, 0);
                var a = new Image;
                a.src = d.ytbQualityButtonPointerPath_str, d.pointer_do = new FWDEVPDisplayObject("img"), d.pointer_do.setScreen(a), d.pointer_do.setWidth(d.pointerWidth), d.pointer_do.setHeight(d.pointerHeight), d.ytbButtonsHolder_do.addChild(d.pointer_do);
                var a = new Image;
                a.src = d.youtubeQualityArrowPath_str, d.ytbQualityArrow_do = new FWDEVPDisplayObject("img"), d.ytbQualityArrow_do.setScreen(a), d.ytbQualityArrow_do.setX(7), d.ytbQualityArrow_do.setWidth(5), d.ytbQualityArrow_do.setHeight(7), d.ytbButtonsHolder_do.addChild(d.ytbQualityArrow_do);
                for (var e, f = 0; f < d.totalYtbButtons; f++) FWDEVPYTBQButton.setPrototype(), e = new FWDEVPYTBQButton(d.ytbQuality_ar[f], d.youtubeQualityButtonNormalColor_str, d.youtubeQualityButtonSelectedColor_str, b.hdPath_str), e.addListener(FWDEVPYTBQButton.MOUSE_OVER, d.ytbQualityOver), e.addListener(FWDEVPYTBQButton.MOUSE_OUT, d.ytbQualityOut), e.addListener(FWDEVPYTBQButton.CLICK, d.ytbQualityClick), d.ytbButtons_ar[f] = e, d.ytbButtonsHolder_do.addChild(e);
                d.hideQualityButtons(!1)
            }, this.ytbQualityOver = function(a) {
                d.setYtbQualityArrowPosition(a.target)
            }, this.ytbQualityOut = function() {
                d.setYtbQualityArrowPosition(void 0)
            }, this.ytbQualityClick = function(b) {
                d.hideQualityButtons(!0), d.dispatchEvent(a.CHANGE_YOUTUBE_QUALITY, {
                    quality: b.target.label_str
                })
            }, this.positionAndResizeYtbQualityButtons = function(a) {
                if (a) {
                    var b = a.length + 1;
                    if (d.prevYtbQualityButtonsLength != b) {
                        this.prevYtbQualityButtonsLength = b;
                        for (var c, e = 5, f = 0, g = 0, h = 0; h < d.totalYtbButtons; h++) {
                            c = d.ytbButtons_ar[h], c.setFinalSize();
                            for (var i = 0; b > i; i++) {
                                if (c.label_str == a[i]) {
                                    0 != c.x && c.setX(0), c.w > f && (f = c.w), c.setY(e), e += c.h;
                                    break
                                } - 3e3 != c.x && c.setX(-3e3)
                            }
                        }
                        for (var h = 0; h < d.totalYtbButtons; h++) c = d.ytbButtons_ar[h], c.dumy_do.w < f && (c.setWidth(f), c.dumy_do.setWidth(f));
                        g = e + 5, d.pointer_do.setX(parseInt((f - d.pointer_do.w) / 2)), d.pointer_do.setY(g), d.ytbButtonBackground_do && (d.ytbButtonBackground_do.setWidth(f), d.ytbButtonBackground_do.setHeight(g)), d.ytbButtonsHolder_do.setWidth(f), d.ytbButtonsHolder_do.setHeight(g)
                    }
                }
            }, this.disableQualityButtons = function(a) {
                for (var b = 0; b < d.totalYtbButtons; b++) btn = d.ytbButtons_ar[b], btn.label_str == a ? (FWDEVPTweenMax.killTweensOf(d.ytbQualityArrow_do), d.ytbQualityArrow_do.setY(btn.y + parseInt((btn.h - d.ytbQualityArrow_do.h) / 2) + 1), btn.disable(), d.ytbDisabledButton_do = btn) : btn.enable();
                "highres" == a || "hd1080" == a || "hd720" == a || "hd1440" == a || "hd2160" == a ? d.ytbQualityButton_do.showDisabledState() : d.ytbQualityButton_do.hideDisabledState()
            }, this.setYtbQualityArrowPosition = function(a) {
                var b = 0;
                b = a ? a.y + parseInt((a.h - d.ytbQualityArrow_do.h) / 2) : d.ytbDisabledButton_do.y + parseInt((d.ytbDisabledButton_do.h - d.ytbQualityArrow_do.h) / 2), FWDEVPTweenMax.killTweensOf(d.ytbQualityArrow_do), FWDEVPTweenMax.to(d.ytbQualityArrow_do, .6, {
                    y: b,
                    delay: .1,
                    ease: Expo.easeInOut
                })
            }, this.showQualityButtons = function(a) {
                if (!d.areYtbQualityButtonsShowed_bl && d.showYoutubeQualityButton_bl) {
                    d.areYtbQualityButtonsShowed_bl = !0;
                    var b = parseInt(d.ytbQualityButton_do.x + parseInt(d.ytbQualityButton_do.w - d.ytbButtonsHolder_do.w) / 2),
                        e = parseInt(c.stageHeight - d.stageHeight - d.ytbButtonsHolder_do.h - 6);
                    window.addEventListener ? window.addEventListener("mousedown", d.hideQualityButtonsHandler) : document.attachEvent && (document.detachEvent("onmousedown", d.hideQualityButtonsHandler), document.attachEvent("onmousedown", d.hideQualityButtonsHandler)), d.ytbButtonsHolder_do.setX(b), a ? FWDEVPTweenMax.to(d.ytbButtonsHolder_do, .6, {
                        y: e,
                        ease: Expo.easeInOut
                    }) : (FWDEVPTweenMax.killTweensOf(d.ytbButtonsHolder_do), d.ytbButtonsHolder_do.setY(e))
                }
            }, this.hideQualityButtons = function(a) {
                d.areYtbQualityButtonsShowed_bl && d.showYoutubeQualityButton_bl && (d.areYtbQualityButtonsShowed_bl = !1, a ? FWDEVPTweenMax.to(d.ytbButtonsHolder_do, .6, {
                    y: c.stageHeight,
                    ease: Expo.easeInOut
                }) : (FWDEVPTweenMax.killTweensOf(d.ytbButtonsHolder_do), d.ytbButtonsHolder_do.setY(c.stageHeight)), window.removeEventListener ? window.removeEventListener("mousedown", d.hideQualityButtonsHandler) : document.detachEvent && document.detachEvent("onmousedown", d.hideQualityButtonsHandler))
            }, this.setupYoutubeQualityButton = function() {
                FWDEVPSimpleButton.setPrototype(), d.ytbQualityButton_do = new FWDEVPSimpleButton(d.ytbQualityN_img, b.ytbQualitySPath_str, b.ytbQualityDPath_str), d.ytbQualityButton_do.setX(-300), d.ytbQualityButton_do.setY(parseInt((d.stageHeight - d.ytbQualityButton_do.h) / 2)), d.ytbQualityButton_do.addListener(FWDEVPSimpleButton.MOUSE_UP, d.ytbQualityMouseUpHandler), d.mainHolder_do.addChild(d.ytbQualityButton_do)
            }, this.ytbQualityMouseUpHandler = function() {
                d.areYtbQualityButtonsShowed_bl ? d.hideQualityButtons(!0) : d.showQualityButtons(!0)
            }, this.hideQualityButtonsHandler = function(a) {
                var b = FWDEVPUtils.getViewportMouseCoordinates(a);
                FWDEVPUtils.hitTest(d.ytbQualityButton_do.screen, b.screenX, b.screenY) || FWDEVPUtils.hitTest(d.ytbButtonsHolder_do.screen, b.screenX, b.screenY) || d.hideQualityButtons(!0)
            }, this.addYtbQualityButton = function() {
                !d.hasYtbButton_bl && d.showYoutubeQualityButton_bl && (d.hasYtbButton_bl = !0, d.facebookButton_do && -1 != FWDEVPUtils.indexOfArray(d.buttons_ar, d.facebookButton_do) ? d.buttons_ar.splice(FWDEVPUtils.indexOfArray(d.buttons_ar, d.facebookButton_do), 0, d.ytbQualityButton_do) : d.fullScreenButton_do && -1 != FWDEVPUtils.indexOfArray(d.buttons_ar, d.fullScreenButton_do) ? d.buttons_ar.splice(FWDEVPUtils.indexOfArray(d.buttons_ar, d.fullScreenButton_do), 0, d.ytbQualityButton_do) : d.buttons_ar.splice(d.buttons_ar.length, 0, d.ytbQualityButton_do), d.ytbQualityButton_do.disable(), d.ytbQualityButton_do.rotation = 0, d.ytbQualityButton_do.setRotation(d.ytbQualityButton_do.rotation), d.ytbQualityButton_do.hideDisabledState(), d.hideQualityButtons(!1), d.positionButtons())
            }, this.removeYtbQualityButton = function() {
                d.hasYtbButton_bl && d.showYoutubeQualityButton_bl && (d.hasYtbButton_bl = !1, d.buttons_ar.splice(FWDEVPUtils.indexOfArray(d.buttons_ar, d.ytbQualityButton_do), 1), d.ytbQualityButton_do.setX(-300), d.ytbQualityButton_do.hideDisabledState(), d.hideQualityButtons(!1), d.positionButtons())
            }, this.updateQuality = function(a, b) {
                d.hasYtbButton_bl && d.showYoutubeQualityButton_bl && (d.ytbQualityButton_do.enable(), d.positionAndResizeYtbQualityButtons(a), d.disableQualityButtons(b))
            }, this.setupFacebookButton = function() {
                FWDEVPSimpleButton.setPrototype(), d.facebookButton_do = new FWDEVPSimpleButton(d.facebookN_img, b.facebookSPath_str), d.buttons_ar.push(d.facebookButton_do), d.facebookButton_do.setY(parseInt((d.stageHeight - d.facebookButton_do.h) / 2)), d.facebookButton_do.addListener(FWDEVPSimpleButton.MOUSE_UP, d.facebookButtonMouseUpHandler), d.mainHolder_do.addChild(d.facebookButton_do)
            }, this.facebookButtonMouseUpHandler = function() {
                d.dispatchEvent(a.FACEBOOK_SHARE)
            }, this.setupFullscreenButton = function() {
                FWDEVPComplexButton.setPrototype(), d.fullScreenButton_do = new FWDEVPComplexButton(d.fullScreenN_img, b.fullScreenSPath_str, d.normalScreenN_img, b.normalScreenSPath_str, !0), d.buttons_ar.push(d.fullScreenButton_do), d.fullScreenButton_do.setY(parseInt((d.stageHeight - d.fullScreenButton_do.buttonHeight) / 2)), d.fullScreenButton_do.addListener(FWDEVPComplexButton.MOUSE_UP, d.fullScreenButtonMouseUpHandler), d.mainHolder_do.addChild(d.fullScreenButton_do)
            }, this.showFullScreenButton = function() {
                d.fullScreenButton_do && d.fullScreenButton_do.setButtonState(1)
            }, this.showNormalScreenButton = function() {
                d.fullScreenButton_do && d.fullScreenButton_do.setButtonState(0)
            }, this.setNormalStateToFullScreenButton = function() {
                d.fullScreenButton_do && (d.fullScreenButton_do.setNormalState(), d.hideQualityButtons(!1))
            }, this.fullScreenButtonMouseUpHandler = function() {
                d.dispatchEvent(1 == d.fullScreenButton_do.currentState ? a.FULL_SCREEN : a.NORMAL_SCREEN)
            }, this.setupTime = function() {
                d.time_do = new FWDEVPDisplayObject("div"), d.time_do.hasTransform3d_bl = !1, d.time_do.hasTransform2d_bl = !1, d.time_do.setBackfaceVisibility(), d.time_do.getStyle().fontFamily = "Arial", d.time_do.getStyle().fontSize = "12px", d.time_do.getStyle().whiteSpace = "nowrap", d.time_do.getStyle().textAlign = "center", d.time_do.getStyle().color = d.timeColor_str, d.time_do.getStyle().fontSmoothing = "antialiased", d.time_do.getStyle().webkitFontSmoothing = "antialiased",
                    d.time_do.getStyle().textRendering = "optimizeLegibility", d.mainHolder_do.addChild(d.time_do), d.updateTime("00:00/00:00"), d.buttons_ar.push(d.time_do)
            }, this.updateTime = function(a) {
                d.time_do && (d.time_do.setInnerHTML(a), d.lastTimeLength != a.length && (d.time_do.w = d.time_do.getWidth(), d.positionButtons(), setTimeout(function() {
                    d.time_do.w = d.time_do.getWidth(), d.time_do.h = d.time_do.getHeight(), d.time_do.setY(parseInt((d.stageHeight - d.time_do.h) / 2) + 1), d.positionButtons()
                }, 50), d.lastTimeLength = a.length))
            }, this.setupVolumeButton = function() {
                FWDEVPVolumeButton.setPrototype(), d.volumeButton_do = new FWDEVPVolumeButton(d.volumeN_img, b.volumeSPath_str, b.volumeDPath_str), d.volumeButton_do.addListener(FWDEVPVolumeButton.MOUSE_UP, d.volumeOnMouseUpHandler), d.volumeButton_do.setY(parseInt((d.stageHeight - d.volumeButton_do.h) / 2)), d.buttons_ar.push(d.volumeButton_do), d.mainHolder_do.addChild(d.volumeButton_do), d.allowToChangeVolume_bl || d.volumeButton_do.disable()
            }, this.volumeOnMouseUpHandler = function() {
                var a = d.lastVolume;
                d.isMute_bl ? (a = d.lastVolume, d.isMute_bl = !1) : (a = 1e-6, d.isMute_bl = !0), d.updateVolume(a)
            }, this.setupVolumeScrubber = function() {
                d.volumeScrubber_do = new FWDEVPDisplayObject("div"), d.volumeScrubber_do.setHeight(d.scrubbersHeight), d.volumeScrubber_do.setY(parseInt((d.stageHeight - d.scrubbersHeight) / 2)), d.volumeScrubberBkLeft_do = new FWDEVPDisplayObject("img"), d.volumeScrubberBkLeft_do.setScreen(d.volumeScrubberBkLeft_img), d.volumeScrubberBkRight_do = new FWDEVPDisplayObject("img"), d.volumeScrubberBkRight_do.setScreen(d.volumeScrubberBkRight_img);
                var a = new Image;
                a.src = d.volumeScrubberBkMiddlePath_str, d.isMobile_bl ? (d.volumeScrubberBkMiddle_do = new FWDEVPDisplayObject("div"), d.volumeScrubberBkMiddle_do.getStyle().background = "url('" + d.volumeScrubberBkMiddlePath_str + "') repeat-x") : (d.volumeScrubberBkMiddle_do = new FWDEVPDisplayObject("img"), d.volumeScrubberBkMiddle_do.setScreen(a)), d.volumeScrubberBkMiddle_do.setHeight(d.scrubbersHeight), d.volumeScrubberBkMiddle_do.setX(d.scrubbersBkLeftAndRightWidth), d.volumeScrubberDrag_do = new FWDEVPDisplayObject("div"), d.volumeScrubberDrag_do.setHeight(d.scrubbersHeight), d.volumeScrubberDragLeft_do = new FWDEVPDisplayObject("img"), d.volumeScrubberDragLeft_do.setScreen(d.volumeScrubberDragLeft_img), a = new Image, a.src = d.volumeScrubberDragMiddlePath_str, d.isMobile_bl ? (d.volumeScrubberDragMiddle_do = new FWDEVPDisplayObject("div"), d.volumeScrubberDragMiddle_do.getStyle().background = "url('" + d.volumeScrubberDragMiddlePath_str + "') repeat-x") : (d.volumeScrubberDragMiddle_do = new FWDEVPDisplayObject("img"), d.volumeScrubberDragMiddle_do.setScreen(a)), d.volumeScrubberDragMiddle_do.setHeight(d.scrubbersHeight), d.volumeScrubberDragMiddle_do.setX(d.mainScrubberDragLeftWidth), d.volumeScrubberBarLine_do = new FWDEVPDisplayObject("img"), d.volumeScrubberBarLine_do.setScreen(d.volumeScrubberLine_img), d.volumeScrubberBarLine_do.setAlpha(0), d.volumeScrubberBarLine_do.hasTransform3d_bl = !1, d.volumeScrubberBarLine_do.hasTransform2d_bl = !1, d.volumeScrubber_do.setWidth(d.volumeScrubberWidth), d.volumeScrubberBkMiddle_do.setWidth(d.volumeScrubberWidth - 2 * d.scrubbersBkLeftAndRightWidth), d.volumeScrubberBkRight_do.setX(d.volumeScrubberWidth - d.scrubbersBkLeftAndRightWidth), d.volumeScrubberDragMiddle_do.setWidth(d.volumeScrubberWidth - d.scrubbersBkLeftAndRightWidth - d.scrubbersOffsetWidth), d.volumeScrubber_do.addChild(d.volumeScrubberBkLeft_do), d.volumeScrubber_do.addChild(d.volumeScrubberBkMiddle_do), d.volumeScrubber_do.addChild(d.volumeScrubberBkRight_do), d.volumeScrubber_do.addChild(d.volumeScrubberBarLine_do), d.volumeScrubberDrag_do.addChild(d.volumeScrubberDragLeft_do), d.volumeScrubberDrag_do.addChild(d.volumeScrubberDragMiddle_do), d.volumeScrubber_do.addChild(d.volumeScrubberDrag_do), d.volumeScrubber_do.addChild(d.volumeScrubberBarLine_do), d.buttons_ar.push(d.volumeScrubber_do), d.mainHolder_do.addChild(d.volumeScrubber_do), d.allowToChangeVolume_bl && (d.isMobile_bl ? d.hasPointerEvent_bl ? (d.volumeScrubber_do.screen.addEventListener("pointerover", d.volumeScrubberOnOverHandler), d.volumeScrubber_do.screen.addEventListener("pointerout", d.volumeScrubberOnOutHandler), d.volumeScrubber_do.screen.addEventListener("pointerdown", d.volumeScrubberOnDownHandler)) : d.volumeScrubber_do.screen.addEventListener("touchstart", d.volumeScrubberOnDownHandler) : d.screen.addEventListener ? (d.volumeScrubber_do.screen.addEventListener("mouseover", d.volumeScrubberOnOverHandler), d.volumeScrubber_do.screen.addEventListener("mouseout", d.volumeScrubberOnOutHandler), d.volumeScrubber_do.screen.addEventListener("mousedown", d.volumeScrubberOnDownHandler)) : d.screen.attachEvent && (d.volumeScrubber_do.screen.attachEvent("onmouseover", d.volumeScrubberOnOverHandler), d.volumeScrubber_do.screen.attachEvent("onmouseout", d.volumeScrubberOnOutHandler), d.volumeScrubber_do.screen.attachEvent("onmousedown", d.volumeScrubberOnDownHandler))), d.enableVolumeScrubber(), d.updateVolumeScrubber(d.volume)
            }, this.volumeScrubberOnOverHandler = function() {
                d.isVolumeScrubberDisabled_bl
            }, this.volumeScrubberOnOutHandler = function() {
                d.isVolumeScrubberDisabled_bl
            }, this.volumeScrubberOnDownHandler = function(a) {
                if (!d.isVolumeScrubberDisabled_bl && 2 != a.button) {
                    a.preventDefault && a.preventDefault();
                    var b = FWDEVPUtils.getViewportMouseCoordinates(a),
                        c = b.screenX - d.volumeScrubber_do.getGlobalX();
                    0 > c ? c = 0 : c > d.volumeScrubberWidth - d.scrubbersOffsetWidth && (c = d.volumeScrubberWidth - d.scrubbersOffsetWidth);
                    var e = c / d.volumeScrubberWidth;
                    d.disable_do && d.addChild(d.disable_do), d.lastVolume = e, d.updateVolume(e), d.isMobile_bl ? d.hasPointerEvent_bl ? (window.addEventListener("MSPointerMove", d.volumeScrubberMoveHandler), window.addEventListener("pointerup", d.volumeScrubberEndHandler)) : (window.addEventListener("touchmove", d.volumeScrubberMoveHandler), window.addEventListener("touchend", d.volumeScrubberEndHandler)) : window.addEventListener ? (window.addEventListener("mousemove", d.volumeScrubberMoveHandler), window.addEventListener("mouseup", d.volumeScrubberEndHandler)) : document.attachEvent && (document.attachEvent("onmousemove", d.volumeScrubberMoveHandler), document.attachEvent("onmouseup", d.volumeScrubberEndHandler))
                }
            }, this.volumeScrubberMoveHandler = function(a) {
                if (!d.isVolumeScrubberDisabled_bl) {
                    a.preventDefault && a.preventDefault();
                    var b = FWDEVPUtils.getViewportMouseCoordinates(a),
                        c = b.screenX - d.volumeScrubber_do.getGlobalX();
                    0 > c ? c = 0 : c > d.volumeScrubberWidth - d.scrubbersOffsetWidth && (c = d.volumeScrubberWidth - d.scrubbersOffsetWidth);
                    var e = c / d.volumeScrubberWidth;
                    d.lastVolume = e, d.updateVolume(e)
                }
            }, this.volumeScrubberEndHandler = function() {
                d.disable_do && d.contains(d.disable_do) && d.removeChild(d.disable_do), d.isMobile_bl ? d.hasPointerEvent_bl ? (window.removeEventListener("MSPointerMove", d.volumeScrubberMoveHandler), window.removeEventListener("pointerup", d.volumeScrubberEndHandler)) : (window.removeEventListener("touchmove", d.volumeScrubberMoveHandler), window.removeEventListener("touchend", d.volumeScrubberEndHandler)) : window.removeEventListener ? (window.removeEventListener("mousemove", d.volumeScrubberMoveHandler), window.removeEventListener("mouseup", d.volumeScrubberEndHandler)) : document.detachEvent && (document.detachEvent("onmousemove", d.volumeScrubberMoveHandler), document.detachEvent("onmouseup", d.volumeScrubberEndHandler))
            }, this.disableVolumeScrubber = function() {
                d.isVolumeScrubberDisabled_bl = !0, d.volumeScrubber_do.setButtonMode(!1), d.volumeScrubberEndHandler()
            }, this.enableVolumeScrubber = function() {
                d.isVolumeScrubberDisabled_bl = !1, d.volumeScrubber_do.setButtonMode(!0)
            }, this.updateVolumeScrubber = function(a) {
                var b = parseInt(a * d.volumeScrubberWidth);
                d.volumeScrubberDrag_do.setWidth(b), 1 > b && d.isVolumeScrubberLineVisible_bl ? (d.isVolumeScrubberLineVisible_bl = !1, FWDEVPTweenMax.to(d.volumeScrubberBarLine_do, .5, {
                    alpha: 0
                })) : b > 1 && !d.isVolumeScrubberLineVisible_bl && (d.isVolumeScrubberLineVisible_bl = !0, FWDEVPTweenMax.to(d.volumeScrubberBarLine_do, .5, {
                    alpha: 1
                })), b > d.volumeScrubberWidth - d.scrubbersOffsetWidth && (b = d.volumeScrubberWidth - d.scrubbersOffsetWidth), FWDEVPTweenMax.to(d.volumeScrubberBarLine_do, .8, {
                    x: b + 1,
                    ease: Expo.easeOut
                })
            }, this.updateVolume = function(b, c) {
                d.showVolumeScrubber_bl && (d.volume = b, d.volume <= 1e-6 ? (d.isMute_bl = !0, d.volume = 1e-6) : d.voume >= 1 ? (d.isMute_bl = !1, d.volume = 1) : d.isMute_bl = !1, 1e-6 == d.volume ? d.volumeButton_do && d.volumeButton_do.setDisabledState() : d.volumeButton_do && d.volumeButton_do.setEnabledState(), d.volumeScrubberBarLine_do && d.updateVolumeScrubber(d.volume), c || d.dispatchEvent(a.CHANGE_VOLUME, {
                    percent: d.volume
                }))
            }, this.show = function(a) {
                d.isShowed_bl || (d.isShowed_bl = !0, a ? FWDEVPTweenMax.to(d.mainHolder_do, .8, {
                    y: 0,
                    ease: Expo.easeInOut
                }) : (FWDEVPTweenMax.killTweensOf(d.mainHolder_do), d.mainHolder_do.setY(0)), setTimeout(d.positionButtons, 200))
            }, this.hide = function(a, b) {
                if (d.isShowed_bl || b) {
                    d.isShowed_bl = !1;
                    var c = 0;
                    b && (c = d.mainScrubberOffestTop), a ? FWDEVPTweenMax.to(d.mainHolder_do, .8, {
                        y: d.stageHeight + c,
                        ease: Expo.easeInOut
                    }) : (FWDEVPTweenMax.killTweensOf(d.mainHolder_do), d.mainHolder_do.setY(d.stageHeight + c)), d.hideQualityButtons(!0)
                }
            }, this.init()
        };
        a.setPrototype = function() {
            a.prototype = new FWDEVPDisplayObject("div")
        }, a.FACEBOOK_SHARE = "share", a.FULL_SCREEN = "fullScreen", a.NORMAL_SCREEN = "normalScreen", a.PLAY = "play", a.PAUSE = "pause", a.START_TO_SCRUB = "startToScrub", a.SCRUB = "scrub", a.STOP_TO_SCRUB = "stopToScrub", a.CHANGE_VOLUME = "changeVolume", a.CHANGE_YOUTUBE_QUALITY = "changeYoutubeQuality", a.SHOW_EMBED_WINDOW = "showEmbedWindow", a.prototype = null, window.FWDEVPController = a
    }(),
    function(a) {
        var b = function(c) {
            var d = this;
            b.prototype, this.skipIconPath_img = null, this.mainPreloader_img = null, this.bkLeft_img = null, this.bkMiddle_img = null, this.bkRight_img = null, this.playN_img = null, this.pauseN_img = null, this.mainScrubberBkLeft_img = null, this.mainScrubberBkRight_img = null, this.mainScrubberDragLeft_img = null, this.mainScrubberLine_img = null, this.volumeScrubberBkLeft_img = null, this.volumeScrubberBkRight_img = null, this.volumeScrubberDragLeft_img = null, this.volumeScrubberLine_img = null, this.volumeN_img = null, this.progressLeft_img = null, this.largePlayN_img = null, this.fullScreenN_img = null, this.ytbQualityN_img = null, this.ytbQualityD_img = null, this.facebookN_img = null, this.normalScreenN_img = null, this.embedN_img = null, this.embedColoseN_img = null, this.props_obj = c, this.skinPaths_ar = [], this.images_ar = [], this.skinPath_str = null, this.flashPath_str = null, this.flashCopyToCBPath_str = null, this.mainFolderPath_str = null, this.bkMiddlePath_str = null, this.hdPath_str = null, this.youtubeQualityArrowPath_str = null, this.mainScrubberBkMiddlePath_str = null, this.volumeScrubberBkMiddlePath_str = null, this.mainScrubberDragMiddlePath_str = null, this.volumeScrubberDragMiddlePath_str = null, this.timeColor_str = null, this.progressMiddlePath_str = null, this.facebookAppId_str = null, this.ytbQualityButtonPointerPath_str = null, this.youtubeQualityButtonNormalColor_str = null, this.youtubeQualityButtonSelectedColor_str = null, this.controllerBkPath_str = null, this.logoPosition_str = null, this.logoPath_str = null, this.shareAndEmbedTextColor_str = null, this.inputBackgroundColor_str = null, this.borderColor_str = null, this.inputColor_str = null, this.secondaryLabelsColor_str = null, this.mainLabelsColor_str = null, this.embedPathS_str = null, this.embedWindowClosePathS_str = null, this.embedWindowInputBackgroundPath_str = null, this.embedCopyButtonNPath_str = null, this.embedCopyButtonSPath_str = null, this.sendButtonNPath_str = null, this.sendButtonSPath_str = null, this.embedWindowBackground_str = null, this.controllerHeight = 0, this.countLoadedSkinImages = 0, this.volume = 1, this.controllerHideDelay = 0, this.startSpaceBetweenButtons = 0, this.spaceBetweenButtons = 0, this.scrubbersOffsetWidth = 0, this.volumeScrubberOffsetRightWidth = 0, this.timeOffsetLeftWidth = 0, this.timeOffsetTop = 0, this.logoMargins = 0, this.embedWindowCloseButtonMargins = 0, this.loadImageId_to, this.dispatchLoadSkinCompleteWithDelayId_to, this.showEmbedButton_bl, this.showFacebookButton_bl, this.allowToChangeVolume_bl = !0, this.showContextMenu_bl = !1, this.autoPlay_bl = !1, this.showPoster_bl = !1, this.loop_bl = !1, this.showVolumeScrubber_bl = !1, this.showVolumeButton_bl = !1, this.showControllerWhenVideoIsStopped_bl = !1, this.showLogo_bl = !1, this.hideLogoWithController_bl = !1, this.isMobile_bl = FWDEVPUtils.isMobile, this.hasPointerEvent_bl = FWDEVPUtils.hasPointerEvent, d.init = function() {
                d.parseProperties()
            }, d.parseProperties = function() {
                return d.mainFolderPath_str = d.props_obj.mainFolderPath, d.mainFolderPath_str ? (d.mainFolderPath_str.lastIndexOf("/") + 1 != d.mainFolderPath_str.length && (d.mainFolderPath_str += "/"), d.skinPath_str = d.props_obj.skinPath, d.skinPath_str ? (d.skinPath_str.lastIndexOf("/") + 1 != d.skinPath_str.length && (d.skinPath_str += "/"), d.skinPath_str = d.mainFolderPath_str + d.skinPath_str, d.flashPath_str = d.mainFolderPath_str + "swf.swf", d.flashCopyToCBPath_str = d.mainFolderPath_str + "cb.swf", d.sendToAFriendPath_str = d.mainFolderPath_str + "sendMailToAFriend.php", d.videoSourcePath_str = d.props_obj.videoSourcePath || void 0, d.timeColor_str = d.props_obj.timeColor || "#FF0000", d.adsVideoSourcePath_str = d.props_obj.adsVideoSourcePath, d.adsPageToOpenURL_str = d.props_obj.adsPageToOpenURL, d.adsPageToOpenTarget_str = d.props_obj.adsPageToOpenTarget || "_blank", d.adsThumbnailPath_str = d.props_obj.adsThumbnailPath, d.youtubeQualityButtonNormalColor_str = d.props_obj.youtubeQualityButtonNormalColor || "#FF0000", d.youtubeQualityButtonSelectedColor_str = d.props_obj.youtubeQualityButtonSelectedColor || "#FF0000", d.posterBackgroundColor_str = d.props_obj.posterBackgroundColor || "transparent", d.logoPosition_str = d.props_obj.logoPosition || "topleft", d.logoPosition_str = String(d.logoPosition_str).toLowerCase(), test = "topleft" == d.logoPosition_str || "topright" == d.logoPosition_str || "bottomleft" == d.logoPosition_str || "bottomright" == d.logoPosition_str, test || (d.logoPosition_str = "topleft"), d.adsButtonsPosition_str = d.props_obj.adsButtonsPosition || "left", d.adsButtonsPosition_str = String(d.adsButtonsPosition_str).toLowerCase(), test = "left" == d.adsButtonsPosition_str || "right" == d.adsButtonsPosition_str, test || (d.adsButtonsPosition_str = "left"), d.rightClickContextMenu_str = d.props_obj.rightClickContextMenu || "developer", test = "developer" == d.rightClickContextMenu_str || "disabled" == d.rightClickContextMenu_str || "default" == d.rightClickContextMenu_str, test || (d.rightClickContextMenu_str = "developer"), d.logoLink_str = d.props_obj.logoLink || "none", d.skipToVideoButtonText_str = d.props_obj.skipToVideoButtonText || "not defined", d.skipToVideoText_str = d.props_obj.skipToVideoText, d.shareAndEmbedTextColor_str = d.props_obj.shareAndEmbedTextColor || "#FF0000", d.inputBackgroundColor_str = d.props_obj.inputBackgroundColor || "#FF0000", d.borderColor_str = d.props_obj.borderColor || "#FF0000", d.inputColor_str = d.props_obj.inputColor || "#FF0000", d.secondaryLabelsColor_str = d.props_obj.secondaryLabelsColor || "#FF0000", d.mainLabelsColor_str = d.props_obj.mainLabelsColor || "#FF0000", d.adsTextNormalColor = d.props_obj.adsTextNormalColor || "#FF0000", d.adsTextSelectedColor = d.props_obj.adsTextSelectedColor || "#FF0000", d.adsBorderNormalColor_str = d.props_obj.adsBorderNormalColor || "#FF0000", d.adsBorderSelectedColor_str = d.props_obj.adsBorderSelectedColor || "#FF0000", d.volume = d.props_obj.volume, d.volume || (d.volume = 1), isNaN(d.volume) && (volume = 1), d.volume > 1 || d.isMobile_bl ? d.volume = 1 : d.volume < 0 && (d.volume = 0), d.controllerHeight = d.props_obj.controllerHeight || 50, d.startSpaceBetweenButtons = d.props_obj.startSpaceBetweenButtons || 0, d.controllerHideDelay = d.props_obj.controllerHideDelay || 2, d.controllerHideDelay *= 1e3, d.spaceBetweenButtons = d.props_obj.spaceBetweenButtons || 0, d.scrubbersOffsetWidth = d.props_obj.scrubbersOffsetWidth || 0, d.volumeScrubberOffsetRightWidth = d.props_obj.volumeScrubberOffsetRightWidth || 0, d.timeOffsetLeftWidth = d.props_obj.timeOffsetLeftWidth || 0, d.timeOffsetRightWidth = d.props_obj.timeOffsetRightWidth || 0, d.timeOffsetTop = d.props_obj.timeOffsetTop || 0, d.embedWindowCloseButtonMargins = d.props_obj.embedWindowCloseButtonMargins || 0, d.logoMargins = d.props_obj.logoMargins || 0, d.mainScrubberOffestTop = d.props_obj.mainScrubberOffestTop || 0, d.volumeScrubberWidth = d.props_obj.volumeScrubberWidth || 10, d.volumeScrubberWidth > 200 && (d.volumeScrubberWidth = 200), d.timeToHoldAds = d.props_obj.timeToHoldAds || 0, d.facebookAppId_str = d.props_obj.facebookAppId, d.isMobile_bl && (d.allowToChangeVolume_bl = !1), d.showContextMenu_bl = d.props_obj.showContextMenu, d.showContextMenu_bl = "no" == d.showContextMenu_bl ? !1 : !0, d.addKeyboardSupport_bl = d.props_obj.addKeyboardSupport, d.addKeyboardSupport_bl = "no" == d.addKeyboardSupport_bl ? !1 : !0, d.autoPlay_bl = d.props_obj.autoPlay, d.autoPlay_bl = "yes" == d.autoPlay_bl ? !0 : !1, FWDEVPUtils.isMobile && (d.autoPlay_bl = !1), d.loop_bl = d.props_obj.loop, d.loop_bl = "yes" == d.loop_bl ? !0 : !1, d.showLogo_bl = d.props_obj.showLogo, d.showLogo_bl = "yes" == d.showLogo_bl ? !0 : !1, d.hideLogoWithController_bl = d.props_obj.hideLogoWithController, d.hideLogoWithController_bl = "yes" == d.hideLogoWithController_bl ? !0 : !1, d.showPoster_bl = d.props_obj.showPoster, d.showPoster_bl = "yes" == d.showPoster_bl ? !0 : !1, d.showVolumeScrubber_bl = d.props_obj.showVolumeScrubber, d.showVolumeScrubber_bl = "no" == d.showVolumeScrubber_bl ? !1 : !0, d.showVolumeButton_bl = d.props_obj.showVolumeButton, d.showVolumeButton_bl = "no" == d.showVolumeButton_bl ? !1 : !0, d.showControllerWhenVideoIsStopped_bl = d.props_obj.showControllerWhenVideoIsStopped, d.showControllerWhenVideoIsStopped_bl = "yes" == d.showControllerWhenVideoIsStopped_bl ? !0 : !1, d.showTime_bl = d.props_obj.showTime, d.showTime_bl = "no" == d.showTime_bl ? !1 : !0, d.showFullScreenButton_bl = d.props_obj.showFullScreenButton, d.showFullScreenButton_bl = "no" == d.showFullScreenButton_bl ? !1 : !0, d.showFullScreenButton_bl = d.props_obj.showFullScreenButton, d.showFullScreenButton_bl = "no" == d.showFullScreenButton_bl ? !1 : !0, d.repeatBackground_bl = d.props_obj.repeatBackground, d.repeatBackground_bl = "no" == d.repeatBackground_bl ? !1 : !0, d.showFacebookButton_bl = d.props_obj.showFacebookButton, d.showFacebookButton_bl = "no" == d.showFacebookButton_bl ? !1 : !0, d.showEmbedButton_bl = d.props_obj.showEmbedButton, d.showEmbedButton_bl = "no" == d.showEmbedButton_bl ? !1 : !0, d.hasAds_bl = d.adsVideoSourcePath_str, d.hasAds_bl = "none" == d.hasAds_bl ? !1 : !0, d.adsVideoSourcePath_str || (d.hasAds_bl = !1), d.openNewPageAtTheEndOfTheAds_bl = d.props_obj.openNewPageAtTheEndOfTheAds, d.openNewPageAtTheEndOfTheAds_bl = "yes" == d.openNewPageAtTheEndOfTheAds_bl ? !0 : !1, d.showFacebookButton_bl && !d.facebookAppId_str ? void setTimeout(function() {
                    null != d && d.dispatchEvent(b.LOAD_ERROR, {
                        text: "Parameter <font color='#FFFFFF'>facebookAppId</font> is required in the constructor, this represents the facebook app id, for more info read the documetation"
                    })
                }, 50) : (d.showYoutubeQualityButton_bl = d.props_obj.showYoutubeQualityButton, d.showYoutubeQualityButton_bl = "no" == d.showYoutubeQualityButton_bl ? !1 : !0, ("no" == FWDEVPlayer.useYoutube || d.isMobile_bl) && (d.showYoutubeQualityButton_bl = !1), d.logoPath_str = d.skinPath_str + "logo.png", d.props_obj.logoPath && (d.logoPath_str = d.props_obj.logoPath), d.playSPath_str = "/images/player/play-over.png", d.pauseSPath_str = "/images/player/pause-over.png", d.bkMiddlePath_str = "/images/player/controller-middle.png", d.hdPath_str = "/images/player/hd.png", d.youtubeQualityArrowPath_str = d.skinPath_str + "youtube-quality-arrow.png", d.ytbQualityButtonPointerPath_str = "/images/player/youtube-quality-pointer.png", d.controllerBkPath_str = "/images/player/controller-background.png", d.skipIconSPath_str = "/images/player/skip-icon-over.png", d.adsBackgroundPath_str = "/images/player/ads-background.png", d.mainScrubberBkMiddlePath_str = "/images/player/scrubber-middle-background.png", d.mainScrubberDragMiddlePath_str = "/images/player/scrubber-middle-drag.png", d.volumeScrubberBkMiddlePath_str = "/images/player/scrubber-middle-background.png", d.volumeScrubberDragMiddlePath_str = "/images/player/scrubber-middle-drag.png", d.volumeSPath_str = "/images/player/volume-over.png", d.volumeDPath_str = "/images/player/volume-disabled.png", d.largePlayS_str = "/images/player/large-play-over.png", d.fullScreenSPath_str = "/images/player/full-screen-over.png", d.ytbQualitySPath_str = "/images/player/youtube-quality-over.png", d.ytbQualityDPath_str = "/images/player/youtube-quality-hd.png", d.facebookSPath_str = "/images/player/facebook-over.png", d.normalScreenSPath_str = "/images/player/normal-screen-over.png", d.progressMiddlePath_str = "/images/player/progress-middle.png", d.embedPathS_str = "/images/player/embed-over.png", d.embedWindowClosePathS_str = "/images/player/embed-close-button-over.png", d.embedWindowInputBackgroundPath_str = "/images/player/embed-window-input-background.png", d.embedCopyButtonNPath_str = "/images/player/embed-copy-button.png", d.embedCopyButtonSPath_str = "/images/player/embed-copy-button-over.png", d.sendButtonNPath_str = "/images/player/send-button.png", d.sendButtonSPath_str = "/images/player/send-button-over.png", d.embedWindowBackground_str = "/images/player/embed-window-background.png", d.mainPreloader_img = new Image, d.mainPreloader_img.onerror = d.onSkinLoadErrorHandler, d.mainPreloader_img.onload = d.onPreloaderLoadHandler, d.mainPreloader_img.src = "/images/player/preloader.jpg", d.skinPaths_ar = [{
                    img: d.playN_img = new Image,
                    src: "/images/player/play.png"
                }, {
                    img: d.pauseN_img = new Image,
                    src: "/images/player/pause.png"
                }, {
                    img: d.mainScrubberBkLeft_img = new Image,
                    src: "/images/player/scrubber-left-background.png"
                }, {
                    img: d.mainScrubberBkRight_img = new Image,
                    src: "/images/player/scrubber-right-background.png"
                }, {
                    img: d.mainScrubberDragLeft_img = new Image,
                    src: "/images/player/scrubber-left-drag.png"
                }, {
                    img: d.mainScrubberLine_img = new Image,
                    src: "/images/player/scrubber-line.png"
                }, {
                    img: d.volumeScrubberBkLeft_img = new Image,
                    src: "/images/player/scrubber-left-background.png"
                }, {
                    img: d.volumeScrubberBkRight_img = new Image,
                    src: "/images/player/scrubber-right-background.png"
                }, {
                    img: d.volumeScrubberDragLeft_img = new Image,
                    src: "/images/player/scrubber-left-drag.png"
                }, {
                    img: d.volumeScrubberLine_img = new Image,
                    src: "/images/player/scrubber-line.png"
                }, {
                    img: d.volumeN_img = new Image,
                    src: "/images/player/volume.png"
                }, {
                    img: d.progressLeft_img = new Image,
                    src: "/images/player/progress-left.png"
                }, {
                    img: d.largePlayN_img = new Image,
                    src: "/images/player/large-play.png"
                }, {
                    img: d.fullScreenN_img = new Image,
                    src: "/images/player/full-screen.png"
                }, {
                    img: d.ytbQualityN_img = new Image,
                    src: "/images/player/youtube-quality.png"
                }, {
                    img: d.facebookN_img = new Image,
                    src: "/images/player/facebook.png"
                }, {
                    img: d.normalScreenN_img = new Image,
                    src: "/images/player/normal-screen.png"
                }, {
                    img: d.embedN_img = new Image,
                    src: "/images/player/embed.png"
                }, {
                    img: d.embedColoseN_img = new Image,
                    src: "/images/player/embed-close-button.png"
                }, {
                    img: d.skipIconPath_img = new Image,
                    src: "/images/player/skip-icon.png"
                }], d.showHelpScreen_bl && d.skinPaths_ar.push({
                    img: d.helpScreen_img = new Image,
                    src: d.skinPath_str + d.helpScreenPath_str
                }, {
                    img: d.pauseN_img = new Image,
                    src: "/images/player/ok-button.png"
                }), d.totalGraphics = d.skinPaths_ar.length, void 0)) : void setTimeout(function() {
                    null != d && (errorMessage_str = "The <font color='#FFFFFF'>skinPath</font> property is not defined in the constructor function!", d.dispatchEvent(b.LOAD_ERROR, {
                        text: errorMessage_str
                    }))
                }, 50)) : void setTimeout(function() {
                    null != d && (errorMessage_str = "The <font color='#FFFFFF'>mainFolderPath</font> property is not defined in the constructor function!", d.dispatchEvent(b.LOAD_ERROR, {
                        text: errorMessage_str
                    }))
                }, 50)
            }, this.onPreloaderLoadHandler = function() {
                setTimeout(function() {
                    d.dispatchEvent(b.PRELOADER_LOAD_DONE), d.loadSkin()
                }, 50)
            }, d.loadSkin = function() {
                for (var a, b, c = 0; c < d.totalGraphics; c++) a = d.skinPaths_ar[c].img, b = d.skinPaths_ar[c].src, a.onload = d.onSkinLoadHandler, a.onerror = d.onSkinLoadErrorHandler, a.src = b
            }, this.onSkinLoadHandler = function() {
                d.countLoadedSkinImages++, d.countLoadedSkinImages == d.totalGraphics && setTimeout(function() {
                    d.dispatchEvent(b.SKIN_LOAD_COMPLETE)
                }, 50)
            }, d.onSkinLoadErrorHandler = function(c) {
                message = FWDEVPUtils.isIEAndLessThen9 ? "Graphics image not found!" : "The skin graphics with label <font color='#FFFFFF'>" + c.target.src + "</font> can't be loaded, check path!", a.console && console.log(c);
                var e = {
                    text: message
                };
                setTimeout(function() {
                    d.dispatchEvent(b.LOAD_ERROR, e)
                }, 50)
            }, d.onSkinLoadHandlersss = function() {
                d.countLoadedSkinImages++, d.countLoadedSkinImages < d.totalGraphics ? FWDEVPUtils.isIEAndLessThen9 ? d.loadImageId_to = setTimeout(d.loadSkin, 16) : d.loadSkin() : setTimeout(function() {
                    d.dispatchEvent(b.SKIN_LOAD_COMPLETE)
                }, 50)
            }, d.showPropertyError = function(a) {
                d.dispatchEvent(b.LOAD_ERROR, {
                    text: "The property called <font color='#FFFFFF'>" + a + "</font> is not defined."
                })
            }, d.init()
        };
        b.setPrototype = function() {
            b.prototype = new FWDEVPEventDispatcher
        }, b.prototype = null, b.PRELOADER_LOAD_DONE = "onPreloaderLoadDone", b.LOAD_DONE = "onLoadDone", b.LOAD_ERROR = "onLoadError", b.IMAGE_LOADED = "onImageLoaded", b.SKIN_LOAD_COMPLETE = "onSkinLoadComplete", b.SKIN_PROGRESS = "onSkinProgress", b.IMAGES_PROGRESS = "onImagesPogress", a.FWDEVPData = b
    }(window),
    function(a) {
        var b = function(a, b, c, d) {
            var e = this;
            if (e.listeners = {
                    events_ar: []
                }, "div" != a && "img" != a && "canvas" != a && "input" != a) throw Error("Type is not valid! " + a);
            e.type = a, this.children_ar = [], this.style, this.screen, this.transform, this.position = b || "absolute", this.overflow = c || "hidden", this.display = d || "inline-block", this.visible = !0, this.buttonMode, this.x = 0, this.y = 0, this.w = 0, this.h = 0, this.rect, this.alpha = 1, this.innerHTML = "", this.opacityType = "", this.isHtml5_bl = !1, this.hasTransform3d_bl = FWDEVPUtils.hasTransform3d, this.hasTransform2d_bl = FWDEVPUtils.hasTransform2d, (FWDEVPUtils.isFirefox || FWDEVPUtils.isIE) && (e.hasTransform3d_bl = !1), (FWDEVPUtils.isFirefox || FWDEVPUtils.isIE) && (e.hasTransform2d_bl = !1), this.hasBeenSetSelectable_bl = !1, e.init = function() {
                e.setScreen()
            }, e.getTransform = function() {
                for (var a, b = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"]; a = b.shift();)
                    if ("undefined" != typeof e.screen.style[a]) return a;
                return !1
            }, e.getOpacityType = function() {
                var a;
                return a = "undefined" != typeof e.screen.style.opacity ? "opacity" : "filter"
            }, e.setScreen = function(a) {
                "img" == e.type && a ? (e.screen = a, e.setMainProperties()) : (e.screen = document.createElement(e.type), e.setMainProperties())
            }, e.setMainProperties = function() {
                e.transform = e.getTransform(), e.setPosition(e.position), e.setOverflow(e.overflow), e.opacityType = e.getOpacityType(), "opacity" == e.opacityType && (e.isHtml5_bl = !0), "filter" == e.opacityType && (e.screen.style.filter = "inherit"), e.screen.style.left = "0px", e.screen.style.top = "0px", e.screen.style.margin = "0px", e.screen.style.padding = "0px", e.screen.style.maxWidth = "none", e.screen.style.maxHeight = "none", e.screen.style.border = "none", e.screen.style.lineHeight = "1", e.screen.style.backgroundColor = "transparent", e.screen.style.backfaceVisibility = "hidden", e.screen.style.webkitBackfaceVisibility = "hidden", e.screen.style.MozBackfaceVisibility = "hidden", e.screen.style.MozImageRendering = "optimizeSpeed", e.screen.style.WebkitImageRendering = "optimizeSpeed", "img" == a && (e.setWidth(e.screen.width), e.setHeight(e.screen.height))
            }, e.setBackfaceVisibility = function() {
                e.screen.style.backfaceVisibility = "visible", e.screen.style.webkitBackfaceVisibility = "visible", e.screen.style.MozBackfaceVisibility = "visible"
            }, e.setSelectable = function(a) {
                a ? (FWDEVPUtils.isFirefox || FWDEVPUtils.isIE ? (e.screen.style.userSelect = "element", e.screen.style.MozUserSelect = "element", e.screen.style.msUserSelect = "element") : FWDEVPUtils.isSafari ? (e.screen.style.userSelect = "text", e.screen.style.webkitUserSelect = "text") : (e.screen.style.userSelect = "all", e.screen.style.webkitUserSelect = "all"), e.screen.style.khtmlUserSelect = "all", e.screen.style.oUserSelect = "all", FWDEVPUtils.isIEAndLessThen9 ? (e.screen.ondragstart = null, e.screen.onselectstart = null, e.screen.ontouchstart = null) : (e.screen.ondragstart = void 0, e.screen.onselectstart = void 0, e.screen.ontouchstart = void 0), e.screen.style.webkitTouchCallout = "default", e.hasBeenSetSelectable_bl = !1) : (e.screen.style.userSelect = "none", e.screen.style.MozUserSelect = "none", e.screen.style.webkitUserSelect = "none", e.screen.style.khtmlUserSelect = "none", e.screen.style.oUserSelect = "none", e.screen.style.msUserSelect = "none", e.screen.msUserSelect = "none", e.screen.ondragstart = function() {
                    return !1
                }, e.screen.onselectstart = function() {
                    return !1
                }, e.screen.ontouchstart = function() {
                    return !1
                }, e.screen.style.webkitTouchCallout = "none", e.hasBeenSetSelectable_bl = !0)
            }, e.getScreen = function() {
                return e.screen
            }, e.setVisible = function(a) {
                e.visible = a, e.screen.style.visibility = 1 == e.visible ? "visible" : "hidden"
            }, e.getVisible = function() {
                return e.visible
            }, e.setResizableSizeAfterParent = function() {
                e.screen.style.width = "100%", e.screen.style.height = "100%"
            }, e.getStyle = function() {
                return e.screen.style
            }, e.setOverflow = function(a) {
                e.overflow = a, e.screen.style.overflow = e.overflow
            }, e.setPosition = function(a) {
                e.position = a, e.screen.style.position = e.position
            }, e.setDisplay = function(a) {
                e.display = a, e.screen.style.display = e.display
            }, e.setButtonMode = function(a) {
                e.buttonMode = a, e.screen.style.cursor = 1 == e.buttonMode ? "pointer" : "default"
            }, e.setBkColor = function(a) {
                e.screen.style.backgroundColor = a
            }, e.setInnerHTML = function(a) {
                e.innerHTML = a, e.screen.innerHTML = e.innerHTML
            }, e.getInnerHTML = function() {
                return e.innerHTML
            }, e.getRect = function() {
                return e.screen.getBoundingClientRect()
            }, e.setAlpha = function(a) {
                e.alpha = a, "opacity" == e.opacityType ? e.screen.style.opacity = e.alpha : "filter" == e.opacityType && (e.screen.style.filter = "alpha(opacity=" + 100 * e.alpha + ")", e.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(100 * e.alpha) + ")")
            }, e.getAlpha = function() {
                return e.alpha
            }, e.getRect = function() {
                return e.screen.getBoundingClientRect()
            }, e.getGlobalX = function() {
                return e.getRect().left
            }, e.getGlobalY = function() {
                return e.getRect().top
            }, e.setX = function(a) {
                e.x = a, e.hasTransform3d_bl ? e.screen.style[e.transform] = "translate3d(" + e.x + "px," + e.y + "px,0)" : e.hasTransform2d_bl ? e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px)" : e.screen.style.left = e.x + "px"
            }, e.getX = function() {
                return e.x
            }, e.setY = function(a) {
                e.y = a, e.hasTransform3d_bl ? e.screen.style[e.transform] = "translate3d(" + e.x + "px," + e.y + "px,0)" : e.hasTransform2d_bl ? e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px)" : e.screen.style.top = e.y + "px"
            }, e.getY = function() {
                return e.y
            }, e.setWidth = function(a) {
                e.w = a, "img" == e.type ? (e.screen.width = e.w, e.screen.style.width = e.w + "px") : e.screen.style.width = e.w + "px"
            }, e.getWidth = function() {
                return "div" == e.type || "input" == e.type ? 0 != e.screen.offsetWidth ? e.screen.offsetWidth : e.w : "img" == e.type ? 0 != e.screen.offsetWidth ? e.screen.offsetWidth : 0 != e.screen.width ? e.screen.width : e._w : "canvas" == e.type ? 0 != e.screen.offsetWidth ? e.screen.offsetWidth : e.w : void 0
            }, e.setHeight = function(a) {
                e.h = a, "img" == e.type ? (e.screen.height = e.h, e.screen.style.height = e.h + "px") : e.screen.style.height = e.h + "px"
            }, e.getHeight = function() {
                return "div" == e.type || "input" == e.type ? 0 != e.screen.offsetHeight ? e.screen.offsetHeight : e.h : "img" == e.type ? 0 != e.screen.offsetHeight ? e.screen.offsetHeight : 0 != e.screen.height ? e.screen.height : e.h : "canvas" == e.type ? 0 != e.screen.offsetHeight ? e.screen.offsetHeight : e.h : void 0
            }, e.addChild = function(a) {
                e.contains(a) ? (e.children_ar.splice(FWDEVPUtils.indexOfArray(e.children_ar, a), 1), e.children_ar.push(a), e.screen.appendChild(a.screen)) : (e.children_ar.push(a), e.screen.appendChild(a.screen))
            }, e.removeChild = function(a) {
                if (!e.contains(a)) throw Error("##removeChild()## Child dose't exist, it can't be removed!");
                e.children_ar.splice(FWDEVPUtils.indexOfArray(e.children_ar, a), 1), e.screen.removeChild(a.screen)
            }, e.contains = function(a) {
                return -1 == FWDEVPUtils.indexOfArray(e.children_ar, a) ? !1 : !0
            }, e.addChildAt = function(a, b) {
                if (0 == e.getNumChildren()) e.children_ar.push(a), e.screen.appendChild(a.screen);
                else if (1 == b) e.screen.insertBefore(a.screen, e.children_ar[0].screen), e.screen.insertBefore(e.children_ar[0].screen, a.screen), e.contains(a) ? e.children_ar.splice(FWDEVPUtils.indexOfArray(e.children_ar, a), 1, a) : e.children_ar.splice(FWDEVPUtils.indexOfArray(e.children_ar, a), 0, a);
                else {
                    if (0 > b || b > e.getNumChildren() - 1) throw Error("##getChildAt()## Index out of bounds!");
                    e.screen.insertBefore(a.screen, e.children_ar[b].screen), e.contains(a) ? e.children_ar.splice(FWDEVPUtils.indexOfArray(e.children_ar, a), 1, a) : e.children_ar.splice(FWDEVPUtils.indexOfArray(e.children_ar, a), 0, a)
                }
            }, e.getChildAt = function(a) {
                if (0 > a || a > e.getNumChildren() - 1) throw Error("##getChildAt()## Index out of bounds!");
                if (0 == e.getNumChildren()) throw Errror("##getChildAt## Child dose not exist!");
                return e.children_ar[a]
            }, e.removeChildAtZero = function() {
                e.screen.removeChild(e.children_ar[0].screen), e.children_ar.shift()
            }, e.getNumChildren = function() {
                return e.children_ar.length
            }, e.addListener = function(a, b) {
                if (void 0 == a) throw Error("type is required.");
                if ("object" == typeof a) throw Error("type must be of type String.");
                if ("function" != typeof b) throw Error("listener must be of type Function.");
                var c = {};
                c.type = a, c.listener = b, c.target = this, this.listeners.events_ar.push(c)
            }, e.dispatchEvent = function(a, b) {
                if (null != this.listeners) {
                    if (void 0 == a) throw Error("type is required.");
                    if ("object" == typeof a) throw Error("type must be of type String.");
                    for (var c = 0, d = this.listeners.events_ar.length; d > c; c++)
                        if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a) {
                            if (b)
                                for (var e in b) this.listeners.events_ar[c][e] = b[e];
                            this.listeners.events_ar[c].listener.call(this, this.listeners.events_ar[c])
                        }
                }
            }, e.removeListener = function(a, b) {
                if (void 0 == a) throw Error("type is required.");
                if ("object" == typeof a) throw Error("type must be of type String.");
                if ("function" != typeof b) throw Error("listener must be of type Function." + a);
                for (var c = 0, d = this.listeners.events_ar.length; d > c; c++)
                    if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a && this.listeners.events_ar[c].listener === b) {
                        this.listeners.events_ar.splice(c, 1);
                        break
                    }
            }, e.disposeImage = function() {
                "img" == e.type && (e.screen.src = null)
            }, e.destroy = function() {
                e.hasBeenSetSelectable_bl && (e.screen.ondragstart = null, e.screen.onselectstart = null, e.screen.ontouchstart = null), e.screen.removeAttribute("style"), e.listeners = [], e.listeners = null, e.children_ar = [], e.children_ar = null, e.style = null, e.screen = null, e.transform = null, e.position = null, e.overflow = null, e.display = null, e.visible = null, e.buttonMode = null, e.x = null, e.y = null, e.w = null, e.h = null, e.rect = null, e.alpha = null, e.innerHTML = null, e.opacityType = null, e.isHtml5_bl = null, e.hasTransform3d_bl = null, e.hasTransform2d_bl = null, e = null
            }, e.init()
        };
        a.FWDEVPDisplayObject = b
    }(window),
    function(a) {
        var b = function(c, d) {
            function e() {
                if (a.top == a || !FWDEVPUtils.isIE) {
                    var b, c;
                    document.body.createTextRange ? (b = document.body.createTextRange(), b.moveToElementText(this), b.select()) : a.getSelection && document.createRange && (c = a.getSelection(), b = document.createRange(), b.selectNodeContents(this), c.removeAllRanges(), c.addRange(b))
                }
            }
            var f = this;
            b.prototype, this.xhr = null, this.embedColoseN_img = c.embedColoseN_img, this.bk_do = null, this.mainHolder_do = null, this.embedAndLinkMainLabel_do = null, this.linkAndEmbedHolderBk_do = null, this.linkText_do = null, this.linkLabel_do = null, this.embedText_do = null, this.embedLabel_do = null, this.linkAndEmbedHolder_do = null, this.copyLinkButton_do = null, this.copyEmbedButton_do = null, this.infoText_do = null, this.sendMainHolder_do = null, this.sendMainHolderBk_do = null, this.sendMainLabel_do = null, this.yourEmailLabel_do = null, this.yourEmailInput_do = null, this.friendEmailLabel_do = null, this.friendEmailInput_do = null, this.closeButton_do = null, this.videoLink_str = null, this.embedWindowBackground_str = c.embedWindowBackground_str, this.embedWindowInputBackgroundPath_str = c.embedWindowInputBackgroundPath_str, this.secondaryLabelsColor_str = c.secondaryLabelsColor_str, this.inputColor_str = c.inputColor_str, this.mainLabelsColor_str = c.mainLabelsColor_str, this.sendButtonNPath_str = c.sendButtonNPath_str, this.sendButtonSPath_str = c.sendButtonSPath_str, this.inputBackgroundColor_str = c.inputBackgroundColor_str, this.borderColor_str = c.borderColor_str, this.sendToAFriendPath_str = c.sendToAFriendPath_str, this.maxTextWidth = 0, this.totalWidth = 0, this.stageWidth = 0, this.stageHeight = 0, this.buttonWidth = 44, this.buttonHeight = 19, this.embedWindowCloseButtonMargins = c.embedWindowCloseButtonMargins, this.finalEmbedPath_str = null, this.finalEmbedCode_str = null, this.linkToVideo_str = null, this.shareAndEmbedTextColor_str = c.shareAndEmbedTextColor_str, this.isSending_bl = !1, this.isShowed_bl = !1, this.isMobile_bl = FWDEVPUtils.isMobile, this.init = function() {
                f.setBackfaceVisibility(), f.mainHolder_do = new FWDEVPDisplayObject("div"), f.mainHolder_do.hasTransform3d_bl = !1, f.mainHolder_do.hasTransform2d_bl = !1, f.mainHolder_do.setBackfaceVisibility(), f.bk_do = new FWDEVPDisplayObject("div"), f.bk_do.getStyle().width = "100%", f.bk_do.getStyle().height = "100%", f.bk_do.setAlpha(.9), f.bk_do.getStyle().background = "url('" + f.embedWindowBackground_str + "')", f.linkAndEmbedHolder_do = new FWDEVPDisplayObject("div"), f.linkAndEmbedHolderBk_do = new FWDEVPDisplayObject("div"), f.linkAndEmbedHolderBk_do.getStyle().background = "url('" + f.embedWindowBackground_str + "')", f.linkAndEmbedHolderBk_do.getStyle().borderStyle = "solid", f.linkAndEmbedHolderBk_do.getStyle().borderWidth = "1px", f.linkAndEmbedHolderBk_do.getStyle().borderColor = f.borderColor_str, f.embedAndLinkMainLabel_do = new FWDEVPDisplayObject("div"), f.embedAndLinkMainLabel_do.setBackfaceVisibility(), f.embedAndLinkMainLabel_do.getStyle().fontFamily = "Arial", f.embedAndLinkMainLabel_do.getStyle().fontSize = "12px", f.embedAndLinkMainLabel_do.getStyle().color = f.mainLabelsColor_str, f.embedAndLinkMainLabel_do.getStyle().whiteSpace = "nowrap", f.embedAndLinkMainLabel_do.getStyle().fontSmoothing = "antialiased", f.embedAndLinkMainLabel_do.getStyle().webkitFontSmoothing = "antialiased", f.embedAndLinkMainLabel_do.getStyle().textRendering = "optimizeLegibility", f.embedAndLinkMainLabel_do.getStyle().padding = "0px", f.embedAndLinkMainLabel_do.setInnerHTML("SHARE & EMBED"), f.linkLabel_do = new FWDEVPDisplayObject("div"), f.linkLabel_do.setBackfaceVisibility(), f.linkLabel_do.getStyle().fontFamily = "Arial", f.linkLabel_do.getStyle().fontSize = "12px", f.linkLabel_do.getStyle().color = f.secondaryLabelsColor_str, f.linkLabel_do.getStyle().whiteSpace = "nowrap", f.linkLabel_do.getStyle().fontSmoothing = "antialiased", f.linkLabel_do.getStyle().webkitFontSmoothing = "antialiased", f.linkLabel_do.getStyle().textRendering = "optimizeLegibility", f.linkLabel_do.getStyle().padding = "0px", f.linkLabel_do.setInnerHTML("Link to this video:"), f.linkText_do = new FWDEVPDisplayObject("div"), f.linkText_do.setBackfaceVisibility(), f.linkText_do.getStyle().fontFamily = "Arial", f.linkText_do.getStyle().fontSize = "12px", f.linkText_do.getStyle().color = f.shareAndEmbedTextColor_str, FWDEVPUtils.isIEAndLessThen9 || (f.linkText_do.getStyle().wordBreak = "break-all"), f.linkText_do.getStyle().fontSmoothing = "antialiased", f.linkText_do.getStyle().webkitFontSmoothing = "antialiased", f.linkText_do.getStyle().textRendering = "optimizeLegibility", f.linkText_do.getStyle().padding = "6px", f.linkText_do.getStyle().paddingTop = "4px", f.linkText_do.getStyle().paddingBottom = "4px", f.linkText_do.getStyle().backgroundColor = f.inputBackgroundColor_str, f.linkText_do.screen.onclick = e, f.embedLabel_do = new FWDEVPDisplayObject("div"), f.embedLabel_do.setBackfaceVisibility(), f.embedLabel_do.getStyle().fontFamily = "Arial", f.embedLabel_do.getStyle().fontSize = "12px", f.embedLabel_do.getStyle().color = f.secondaryLabelsColor_str, f.embedLabel_do.getStyle().whiteSpace = "nowrap", f.embedLabel_do.getStyle().fontSmoothing = "antialiased", f.embedLabel_do.getStyle().webkitFontSmoothing = "antialiased", f.embedLabel_do.getStyle().textRendering = "optimizeLegibility", f.embedLabel_do.getStyle().padding = "0px", f.embedLabel_do.setInnerHTML("Embed this video:"), f.embedText_do = new FWDEVPDisplayObject("div"), f.embedText_do.setBackfaceVisibility(), FWDEVPUtils.isIEAndLessThen9 || (f.embedText_do.getStyle().wordBreak = "break-all"), f.embedText_do.getStyle().fontFamily = "Arial", f.embedText_do.getStyle().fontSize = "12px", f.embedText_do.getStyle().lineHeight = "16px", f.embedText_do.getStyle().color = f.shareAndEmbedTextColor_str, f.embedText_do.getStyle().fontSmoothing = "antialiased", f.embedText_do.getStyle().webkitFontSmoothing = "antialiased", f.embedText_do.getStyle().textRendering = "optimizeLegibility", f.embedText_do.getStyle().backgroundColor = f.inputBackgroundColor_str, f.embedText_do.getStyle().padding = "6px", f.embedText_do.getStyle().paddingTop = "4px", f.embedText_do.getStyle().paddingBottom = "4px", f.embedText_do.screen.onclick = e, FWDEVPFlashButton.setPrototype(), f.copyLinkButton_do = new FWDEVPFlashButton(c.embedCopyButtonNPath_str, c.embedCopyButtonSPath_str, c.flashCopyToCBPath_str, d.instanceName_str + "copyLink", d.instanceName_str + ".copyLinkButtonOnMouseOver", d.instanceName_str + ".copyLinkButtonOnMouseOut", d.instanceName_str + ".copyLinkButtonOnMouseClick", d.instanceName_str + ".getLinkCopyPath", f.buttonWidth, f.buttonHeight), f.copyLinkButton_do.addListener(FWDEVPFlashButton.CLICK, f.showFlashButtonInstallError), FWDEVPFlashButton.setPrototype(), f.copyEmbedButton_do = new FWDEVPFlashButton(c.embedCopyButtonNPath_str, c.embedCopyButtonSPath_str, c.flashCopyToCBPath_str, d.instanceName_str + "embedCode", d.instanceName_str + ".embedkButtonOnMouseOver", d.instanceName_str + ".embedButtonOnMouseOut", d.instanceName_str + ".embedButtonOnMouseClick", d.instanceName_str + ".getEmbedCopyPath", f.buttonWidth, f.buttonHeight), f.copyEmbedButton_do.addListener(FWDEVPFlashButton.CLICK, f.showFlashButtonInstallError), f.sendMainHolder_do = new FWDEVPDisplayObject("div"), f.sendMainHolderBk_do = new FWDEVPDisplayObject("div"), f.sendMainHolderBk_do.getStyle().background = "url('" + f.embedWindowBackground_str + "')", f.sendMainHolderBk_do.getStyle().borderStyle = "solid", f.sendMainHolderBk_do.getStyle().borderWidth = "1px", f.sendMainHolderBk_do.getStyle().borderColor = f.borderColor_str, f.sendMainLabel_do = new FWDEVPDisplayObject("div"), f.sendMainLabel_do.setBackfaceVisibility(), f.sendMainLabel_do.getStyle().fontFamily = "Arial", f.sendMainLabel_do.getStyle().fontSize = "12px", f.sendMainLabel_do.getStyle().color = f.mainLabelsColor_str, f.sendMainLabel_do.getStyle().whiteSpace = "nowrap", f.sendMainLabel_do.getStyle().fontSmoothing = "antialiased", f.sendMainLabel_do.getStyle().webkitFontSmoothing = "antialiased", f.sendMainLabel_do.getStyle().textRendering = "optimizeLegibility", f.sendMainLabel_do.getStyle().padding = "0px", f.sendMainLabel_do.setInnerHTML("SEND TO A FRIEND"), f.yourEmailLabel_do = new FWDEVPDisplayObject("div"), f.yourEmailLabel_do.setBackfaceVisibility(), f.yourEmailLabel_do.getStyle().fontFamily = "Arial", f.yourEmailLabel_do.getStyle().fontSize = "12px", f.yourEmailLabel_do.getStyle().color = f.secondaryLabelsColor_str, f.yourEmailLabel_do.getStyle().whiteSpace = "nowrap", f.yourEmailLabel_do.getStyle().fontSmoothing = "antialiased", f.yourEmailLabel_do.getStyle().webkitFontSmoothing = "antialiased", f.yourEmailLabel_do.getStyle().textRendering = "optimizeLegibility", f.yourEmailLabel_do.getStyle().padding = "0px", f.yourEmailLabel_do.setInnerHTML("Your email:"), f.yourEmailInput_do = new FWDEVPDisplayObject("input"), f.yourEmailInput_do.setBackfaceVisibility(), f.yourEmailInput_do.getStyle().fontFamily = "Arial", f.yourEmailInput_do.getStyle().fontSize = "12px", f.yourEmailInput_do.getStyle().backgroundColor = f.inputBackgroundColor_str, f.yourEmailInput_do.getStyle().color = f.inputColor_str, f.yourEmailInput_do.getStyle().outline = 0, f.yourEmailInput_do.getStyle().whiteSpace = "nowrap", f.yourEmailInput_do.getStyle().fontSmoothing = "antialiased", f.yourEmailInput_do.getStyle().webkitFontSmoothing = "antialiased", f.yourEmailInput_do.getStyle().textRendering = "optimizeLegibility", f.yourEmailInput_do.getStyle().padding = "6px", f.yourEmailInput_do.getStyle().paddingTop = "4px", f.yourEmailInput_do.getStyle().paddingBottom = "4px", f.friendEmailLabel_do = new FWDEVPDisplayObject("div"), f.friendEmailLabel_do.setBackfaceVisibility(), f.friendEmailLabel_do.getStyle().fontFamily = "Arial", f.friendEmailLabel_do.getStyle().fontSize = "12px", f.friendEmailLabel_do.getStyle().color = f.secondaryLabelsColor_str, f.friendEmailLabel_do.getStyle().whiteSpace = "nowrap", f.friendEmailLabel_do.getStyle().fontSmoothing = "antialiased", f.friendEmailLabel_do.getStyle().webkitFontSmoothing = "antialiased", f.friendEmailLabel_do.getStyle().textRendering = "optimizeLegibility", f.friendEmailLabel_do.getStyle().padding = "0px", f.friendEmailLabel_do.setInnerHTML("Your friend's email:"), f.friendEmailInput_do = new FWDEVPDisplayObject("input"), f.friendEmailInput_do.setBackfaceVisibility(), f.friendEmailInput_do.getStyle().fontFamily = "Arial", f.friendEmailInput_do.getStyle().fontSize = "12px", f.friendEmailInput_do.getStyle().backgroundColor = f.inputBackgroundColor_str, f.friendEmailInput_do.getStyle().color = f.inputColor_str, f.friendEmailInput_do.getStyle().outline = 0, f.friendEmailInput_do.getStyle().whiteSpace = "nowrap", f.friendEmailInput_do.getStyle().fontSmoothing = "antialiased", f.friendEmailInput_do.getStyle().webkitFontSmoothing = "antialiased", f.friendEmailInput_do.getStyle().textRendering = "optimizeLegibility", f.friendEmailInput_do.getStyle().padding = "6px", f.friendEmailInput_do.getStyle().paddingTop = "4px", f.friendEmailInput_do.getStyle().paddingBottom = "4px", FWDEVPSimpleSizeButton.setPrototype(), f.sendButton_do = new FWDEVPSimpleSizeButton(f.sendButtonNPath_str, f.sendButtonSPath_str, f.buttonWidth, f.buttonHeight), f.sendButton_do.addListener(FWDEVPSimpleSizeButton.CLICK, f.sendClickHandler), f.infoText_do = new FWDEVPDisplayObject("div"), f.infoText_do.setBackfaceVisibility(), f.infoText_do.getStyle().fontFamily = "Arial", f.infoText_do.getStyle().fontSize = "12px", f.infoText_do.getStyle().color = f.secondaryLabelsColor_str, f.infoText_do.getStyle().whiteSpace = "nowrap", f.infoText_do.getStyle().fontSmoothing = "antialiased", f.infoText_do.getStyle().webkitFontSmoothing = "antialiased", f.infoText_do.getStyle().textRendering = "optimizeLegibility", f.infoText_do.getStyle().padding = "0px", f.infoText_do.getStyle().paddingTop = "4px", f.infoText_do.getStyle().textAlign = "center", f.infoText_do.getStyle().color = f.mainLabelsColor_str, FWDEVPSimpleButton.setPrototype(), f.closeButton_do = new FWDEVPSimpleButton(f.embedColoseN_img, c.embedWindowClosePathS_str), f.closeButton_do.addListener(FWDEVPSimpleButton.MOUSE_UP, f.closeButtonOnMouseUpHandler), f.addChild(f.mainHolder_do), f.mainHolder_do.addChild(f.bk_do), f.linkAndEmbedHolder_do.addChild(f.linkAndEmbedHolderBk_do), f.linkAndEmbedHolder_do.addChild(f.embedAndLinkMainLabel_do), f.linkAndEmbedHolder_do.addChild(f.linkLabel_do), f.linkAndEmbedHolder_do.addChild(f.linkText_do), f.linkAndEmbedHolder_do.addChild(f.embedLabel_do), f.linkAndEmbedHolder_do.addChild(f.embedText_do), f.linkAndEmbedHolder_do.addChild(f.copyLinkButton_do), f.linkAndEmbedHolder_do.addChild(f.copyEmbedButton_do), f.sendMainHolder_do.addChild(f.sendMainHolderBk_do), f.sendMainHolder_do.addChild(f.sendMainLabel_do), f.sendMainHolder_do.addChild(f.yourEmailLabel_do), f.sendMainHolder_do.addChild(f.yourEmailInput_do), f.sendMainHolder_do.addChild(f.friendEmailLabel_do), f.sendMainHolder_do.addChild(f.friendEmailInput_do), f.sendMainHolder_do.addChild(f.sendButton_do), f.mainHolder_do.addChild(f.linkAndEmbedHolder_do), f.mainHolder_do.addChild(f.sendMainHolder_do), f.mainHolder_do.addChild(f.closeButton_do)
            }, this.closeButtonOnMouseUpHandler = function() {
                f.isShowed_bl && f.hide()
            }, this.showFlashButtonInstallError = function() {
                var a = "Please install Adobe Flash Player in order to use this feature! To copy text in the clipboard currently flash is the only safe option. <a href='http://www.adobe.com/go/getflashplayer' target='_blank'>Click here to install</a>. <br><br>The video link or embed code can be copyed by selecting the text, right click and copy.";
                f.dispatchEvent(b.ERROR, {
                    error: a
                })
            }, this.positionAndResize = function() {
                f.stageWidth = d.stageWidth, f.stageHeight = d.stageHeight, f.maxTextWidth = Math.min(f.stageWidth - 150, 500), f.totalWidth = f.maxTextWidth + f.buttonWidth + 40, f.isMobile_bl ? (f.linkText_do.setWidth(f.maxTextWidth + 52), f.embedText_do.setWidth(f.maxTextWidth + 52)) : (f.linkText_do.setWidth(f.maxTextWidth), f.embedText_do.setWidth(f.maxTextWidth)), f.positionFinal(), f.closeButton_do.setX(f.stageWidth - f.closeButton_do.w - f.embedWindowCloseButtonMargins), f.closeButton_do.setY(f.embedWindowCloseButtonMargins), f.setWidth(f.stageWidth), f.setHeight(f.stageHeight), f.mainHolder_do.setWidth(f.stageWidth), f.mainHolder_do.setHeight(f.stageHeight)
            }, this.positionFinal = function() {
                var a, b = !1;
                f.stageHeight < 360 || f.stageWidth < 350 ? (f.linkText_do.getStyle().whiteSpace = "nowrap", f.embedText_do.getStyle().whiteSpace = "nowrap") : (f.linkText_do.getStyle().whiteSpace = "normal", f.embedText_do.getStyle().whiteSpace = "normal"), f.linkLabel_do.screen.offsetHeight < 6 && (b = !0);
                var c;
                c = b ? Math.round(100 * f.embedAndLinkMainLabel_do.screen.getBoundingClientRect().height) : f.embedAndLinkMainLabel_do.getHeight(), f.embedAndLinkMainLabel_do.setX(16), f.linkLabel_do.setX(16), f.linkLabel_do.setY(c + 14);
                var d, e;
                b ? (d = Math.round(100 * f.linkLabel_do.screen.getBoundingClientRect().height), e = Math.round(100 * f.linkText_do.screen.getBoundingClientRect().height)) : (d = f.linkLabel_do.getHeight(), e = f.linkText_do.getHeight()), f.linkText_do.setX(10), f.linkText_do.setY(f.linkLabel_do.y + d + 5), f.copyLinkButton_do.setX(f.isMobile_bl ? -100 : f.maxTextWidth + 30), f.copyLinkButton_do.setY(f.linkText_do.y + e - f.buttonHeight), f.embedLabel_do.setX(16), f.embedLabel_do.setY(f.copyLinkButton_do.y + f.copyLinkButton_do.h + 14);
                var g;
                g = b ? Math.round(100 * f.embedText_do.screen.getBoundingClientRect().height) : f.embedText_do.getHeight(), f.embedText_do.setX(10), f.embedText_do.setY(f.embedLabel_do.y + d + 5), f.copyEmbedButton_do.setX(f.isMobile_bl ? -100 : f.maxTextWidth + 30), f.copyEmbedButton_do.setY(f.embedText_do.y + g - f.buttonHeight), f.linkAndEmbedHolderBk_do.setY(f.linkLabel_do.y - 9), f.linkAndEmbedHolderBk_do.setWidth(f.totalWidth - 2), f.linkAndEmbedHolderBk_do.setHeight(f.embedText_do.y + g - 9), f.linkAndEmbedHolder_do.setWidth(f.totalWidth), f.linkAndEmbedHolder_do.setHeight(f.embedText_do.y + g + 14);
                var h, i;
                b ? (h = Math.round(100 * f.sendMainLabel_do.screen.getBoundingClientRect().height), i = Math.round(100 * f.yourEmailInput_do.screen.getBoundingClientRect().height)) : (h = f.sendMainLabel_do.getHeight(), i = f.yourEmailInput_do.getHeight()), f.sendMainLabel_do.setX(16), f.yourEmailLabel_do.setX(16), f.yourEmailLabel_do.setY(h + 14), f.stageWidth > 400 ? (f.yourEmailInput_do.setX(10), f.yourEmailInput_do.setWidth(parseInt(f.totalWidth - 52 - f.buttonWidth) / 2), f.yourEmailInput_do.setY(f.yourEmailLabel_do.y + d + 5), f.friendEmailLabel_do.setX(f.yourEmailInput_do.x + f.yourEmailInput_do.w + 26), f.friendEmailLabel_do.setY(f.yourEmailLabel_do.y), f.friendEmailInput_do.setX(f.yourEmailInput_do.x + f.yourEmailInput_do.w + 20), f.friendEmailInput_do.setWidth(parseInt((f.maxTextWidth - 30) / 2)), f.friendEmailInput_do.setY(f.yourEmailLabel_do.y + d + 5), f.sendButton_do.setX(f.friendEmailInput_do.x + f.yourEmailInput_do.w + 10), f.sendButton_do.setY(f.friendEmailInput_do.y + i - f.buttonHeight)) : (f.yourEmailInput_do.setX(10), f.yourEmailInput_do.setWidth(f.totalWidth - 32), f.yourEmailInput_do.setY(f.yourEmailLabel_do.y + d + 5), f.friendEmailLabel_do.setX(16), f.friendEmailLabel_do.setY(f.yourEmailInput_do.y + i + 14), f.friendEmailInput_do.setX(10), f.friendEmailInput_do.setY(f.friendEmailLabel_do.y + d + 5), f.friendEmailInput_do.setWidth(f.totalWidth - 32), f.sendButton_do.setX(f.totalWidth - f.buttonWidth - 10), f.sendButton_do.setY(f.friendEmailInput_do.y + i + 10)), f.sendMainHolderBk_do.setY(f.yourEmailLabel_do.y - 9), f.sendMainHolderBk_do.setWidth(f.totalWidth - 2), f.sendMainHolderBk_do.setHeight(f.sendButton_do.y + f.sendButton_do.h - 9), f.sendMainHolder_do.setWidth(f.totalWidth), f.sendMainHolder_do.setHeight(f.sendButton_do.y + f.sendButton_do.h + 14), a = b ? Math.round(100 * f.linkAndEmbedHolder_do.screen.getBoundingClientRect().height + 100 * f.sendMainHolder_do.screen.getBoundingClientRect().height) : f.linkAndEmbedHolder_do.getHeight() + f.sendMainHolder_do.getHeight(), f.linkAndEmbedHolder_do.setX(parseInt((f.stageWidth - f.totalWidth) / 2)), f.linkAndEmbedHolder_do.setY(parseInt((f.stageHeight - a) / 2) - 8), f.sendMainHolder_do.setX(parseInt((f.stageWidth - f.totalWidth) / 2)), f.sendMainHolder_do.setY(b ? Math.round(f.linkAndEmbedHolder_do.y + 100 * f.linkAndEmbedHolder_do.screen.getBoundingClientRect().height + 20) : f.linkAndEmbedHolder_do.y + f.linkAndEmbedHolder_do.getHeight() + 20)
            }, this.sendClickHandler = function() {
                var a = !1;
                if (!f.getValidEmail(f.yourEmailInput_do.screen.value)) {
                    if (FWDEVPTweenMax.isTweening(f.yourEmailInput_do.screen)) return;
                    FWDEVPTweenMax.to(f.yourEmailInput_do.screen, .1, {
                        css: {
                            backgroundColor: "#FF0000"
                        },
                        yoyo: !0,
                        repeat: 3
                    }), a = !0
                }
                if (!f.getValidEmail(f.friendEmailInput_do.screen.value)) {
                    if (FWDEVPTweenMax.isTweening(f.friendEmailInput_do.screen)) return;
                    FWDEVPTweenMax.to(f.friendEmailInput_do.screen, .1, {
                        css: {
                            backgroundColor: "#FF0000"
                        },
                        yoyo: !0,
                        repeat: 3
                    }), a = !0
                }
                a || f.sendEmail()
            }, this.sendEmail = function() {
                if (!f.isSending_bl) {
                    f.isSending_bl = !0, f.xhr = new XMLHttpRequest, f.xhr.onreadystatechange = f.onChange, f.xhr.onerror = f.ajaxOnErrorHandler;
                    try {
                        f.xhr.open("get", f.sendToAFriendPath_str + "?friendMail=" + f.friendEmailInput_do.screen.value + "&yourMail=" + f.yourEmailInput_do.screen.value + "&link=" + encodeURIComponent(f.linkToVideo_str), !0), f.xhr.send()
                    } catch (a) {
                        f.showInfo("ERROR", !0), console && console.log(a), a.message && console.log(a.message)
                    }
                    f.resetInputs()
                }
            }, this.ajaxOnErrorHandler = function(b) {
                f.showInfo("ERROR", !0);
                try {
                    a.console && console.log(b), a.console && console.log(b.message)
                } catch (b) {}
                f.isSending_bl = !1
            }, this.onChange = function() {
                4 == f.xhr.readyState && 200 == f.xhr.status && ("sent" == f.xhr.responseText ? f.showInfo("SENT") : (f.showInfo("ERROR", !0), a.console && console.log("Error The server can't send the email!")), f.isSending_bl = !1)
            }, this.resetInputs = function() {
                f.yourEmailInput_do.screen.value = "", f.friendEmailInput_do.screen.value = ""
            }, this.getValidEmail = function(a) {
                var b = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                return b.test(a) && "" != a ? !0 : !1
            }, this.setEmbedData = function() {
                var a = location.href,
                    b = location.protocol + "//" + location.host,
                    c = location.pathname,
                    e = location.hash,
                    g = location.search,
                    h = b + c;
                g = g.replace(/&?EVPInstanceName=.+/g, ""), e = e.replace(/&?EVPInstanceName=.+/g, ""), a = a.replace(/&?EVPInstanceName=.+/g, ""), "?" == g && (g = null), g ? e ? (f.finalEmbedPath_str = h + g + e + "&EVPInstanceName=" + d.instanceName_str, f.linkToVideo_str = h + g + e) : (f.finalEmbedPath_str = h + g + "&EVPInstanceName=" + d.instanceName_str, f.linkToVideo_str = h + g) : e ? (f.finalEmbedPath_str = h + e + "?EVPInstanceName=" + d.instanceName_str, f.linkToVideo_str = h + e) : (f.finalEmbedPath_str = h + "?EVPInstanceName=" + d.instanceName_str, f.linkToVideo_str = h), f.finalEmbedPath_str = encodeURI(f.finalEmbedPath_str), f.linkToVideo_str = encodeURI(f.linkToVideo_str), f.finalEmbedCode_str = "<iframe src='" + f.finalEmbedPath_str + "' width='" + d.stageWidth + "' height='" + d.stageHeight + "' frameborder='0' scrolling='no' allowfullscreen></iframe>", FWDEVPUtils.isIE ? (f.linkText_do.screen.innerText = f.linkToVideo_str, f.embedText_do.screen.innerText = f.finalEmbedCode_str) : (f.linkText_do.screen.textContent = f.linkToVideo_str, f.embedText_do.screen.textContent = f.finalEmbedCode_str)
            }, this.showInfo = function(a, b) {
                f.infoText_do.setInnerHTML(a), f.sendMainHolder_do.addChild(f.infoText_do), f.infoText_do.setWidth(f.buttonWidth), f.infoText_do.setHeight(f.buttonHeight - 4), f.infoText_do.setX(f.sendButton_do.x), f.infoText_do.setY(f.sendButton_do.y - 23), f.infoText_do.setAlpha(0), f.infoText_do.getStyle().color = b ? "#FF0000" : f.mainLabelsColor_str, FWDEVPTweenMax.killTweensOf(f.infoText_do), FWDEVPTweenMax.to(f.infoText_do, .16, {
                    alpha: 1,
                    yoyo: !0,
                    repeat: 7
                })
            }, this.show = function() {
                f.isShowed_bl || (f.isShowed_bl = !0, d.main_do.addChild(f), f.resetInputs(), f.setEmbedData(), (!FWDEVPUtils.isMobile || FWDEVPUtils.isMobile && FWDEVPUtils.hasPointerEvent) && d.main_do.setSelectable(!0), f.positionAndResize(), clearTimeout(f.hideCompleteId_to), clearTimeout(f.showCompleteId_to), f.mainHolder_do.setY(-f.stageHeight), f.showCompleteId_to = setTimeout(f.showCompleteHandler, 900), setTimeout(function() {
                    FWDEVPTweenMax.to(f.mainHolder_do, .8, {
                        y: 0,
                        delay: .1,
                        ease: Expo.easeInOut
                    })
                }, 100))
            }, this.showCompleteHandler = function() {}, this.hide = function() {
                f.isShowed_bl && (f.isShowed_bl = !1, d.customContextMenu_do && d.customContextMenu_do.enable(), f.positionAndResize(), clearTimeout(f.hideCompleteId_to), clearTimeout(f.showCompleteId_to), (!FWDEVPUtils.isMobile || FWDEVPUtils.isMobile && FWDEVPUtils.hasPointerEvent) && d.main_do.setSelectable(!1), f.hideCompleteId_to = setTimeout(f.hideCompleteHandler, 800), FWDEVPTweenMax.killTweensOf(f.mainHolder_do), FWDEVPTweenMax.to(f.mainHolder_do, .8, {
                    y: -f.stageHeight,
                    ease: Expo.easeInOut
                }))
            }, this.hideCompleteHandler = function() {
                d.main_do.removeChild(f), f.dispatchEvent(b.HIDE_COMPLETE)
            }, this.init()
        };
        b.setPrototype = function() {
            b.prototype = new FWDEVPDisplayObject("div")
        }, b.ERROR = "error", b.HIDE_COMPLETE = "hideComplete", b.prototype = null, a.FWDEVPEmbedWindow = b
    }(window),
    function() {
        var a = function() {
            this.listeners = {
                events_ar: []
            }, this.addListener = function(a, b) {
                if (void 0 == a) throw Error("type is required.");
                if ("object" == typeof a) throw Error("type must be of type String.");
                if ("function" != typeof b) throw Error("listener must be of type Function.");
                var c = {};
                c.type = a, c.listener = b, c.target = this, this.listeners.events_ar.push(c)
            }, this.dispatchEvent = function(a, b) {
                if (null != this.listeners) {
                    if (void 0 == a) throw Error("type is required.");
                    if ("object" == typeof a) throw Error("type must be of type String.");
                    for (var c = 0, d = this.listeners.events_ar.length; d > c; c++)
                        if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a) {
                            if (b)
                                for (var e in b) this.listeners.events_ar[c][e] = b[e];
                            this.listeners.events_ar[c].listener.call(this, this.listeners.events_ar[c])
                        }
                }
            }, this.removeListener = function(a, b) {
                if (void 0 == a) throw Error("type is required.");
                if ("object" == typeof a) throw Error("type must be of type String.");
                if ("function" != typeof b) throw Error("listener must be of type Function." + a);
                for (var c = 0, d = this.listeners.events_ar.length; d > c; c++)
                    if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a && this.listeners.events_ar[c].listener === b) {
                        this.listeners.events_ar.splice(c, 1);
                        break
                    }
            }, this.destroy = function() {
                this.listeners = null, this.addListener = null, this.dispatchEvent = null, this.removeListener = null
            }
        };
        window.FWDEVPEventDispatcher = a
    }(window),
    function(a) {
        var b = function(c) {
            var d = this;
            b.prototype, this.appId = parseInt(c), d.init = function() {
                d.checkFBRoot(), a.fbAsyncInit || d.connect()
            }, this.checkFBRoot = function() {
                var a = Boolean(document.getElementById("fb-root"));
                a || (a = document.createElement("div"), a.id = "fb-root", document.getElementsByTagName("body")[0].appendChild(a))
            }, this.connect = function() {
                d.hasStartedToConnect_bl || (d.hasStartedToConnect_bl = !0, a.fbAsyncInit = function() {
                    FB.init({
                        appId: d.appId,
                        status: !0,
                        cookie: !0,
                        xfbml: !0,
                        oauth: !0
                    }), FB.Event.subscribe("auth.authResponseChange", function(a) {
                        "connected" === a.status || FB.login()
                    })
                }, function(a) {
                    var b, c = "facebook-jssdk";
                    a.getElementById(c) || (b = a.createElement("script"), b.id = c, b.async = !0, b.src = "//connect.facebook.net/en_US/all.js", a.getElementsByTagName("body")[0].appendChild(b))
                }(document))
            }, this.share = function(a, b, c) {
                FB.ui({
                    method: "feed",
                    link: a,
                    caption: b,
                    picture: c
                }, function() {})
            }, d.init()
        };
        b.setPrototype = function() {
            b.prototype = new FWDEVPEventDispatcher
        }, b.prototype = null, a.FWDEVPFacebookShare = b
    }(window),
    function(a) {
        var b = function(a, c, d, e, f, g, h, i, j, k) {
            var l = this;
            b.prototype, this.nImg_img = null, this.sImg_img = null, this.n_do, this.s_do, this.nImgPath_str = a, this.sImgPath_str = c, this.flashPath_str = d, this.flashButtonName_str = e, this.overPath_str = f, this.outPath_str = g, this.clickPath_str = h, this.copyPath_str = i, this.linkFlashObject = null, this.buttonWidth = j, this.buttonHeight = k, this.isMobile_bl = FWDEVPUtils.isMobile, this.hasPointerEvent_bl = FWDEVPUtils.hasPointerEvent, this.isDisabled_bl = !1, this.init = function() {
                l.setWidth(l.buttonWidth), l.setHeight(l.buttonHeight), l.isMobile_bl || (l.setupMainContainers(), l.setupFalshButton(), l.setButtonMode(!0))
            }, this.setupMainContainers = function() {
                l.n_do = new FWDEVPDisplayObject("img");
                var a = new Image;
                a.src = l.nImgPath_str, l.n_do.setScreen(a), l.n_do.setWidth(l.buttonWidth), l.n_do.setHeight(l.buttonHeight), l.addChild(l.n_do), l.s_do = new FWDEVPDisplayObject("img");
                var b = new Image;
                b.src = l.sImgPath_str, l.s_do.setScreen(b), l.s_do.setWidth(l.buttonWidth), l.s_do.setHeight(l.buttonHeight), l.s_do.setAlpha(0), l.addChild(l.s_do), l.screen.addEventListener ? (l.screen.addEventListener("mouseover", l.onMouseOver), l.screen.addEventListener("mouseout", l.onMouseOut), l.screen.addEventListener("mouseup", l.onMouseUp)) : l.screen.attachEvent && (l.screen.attachEvent("onmouseover", l.onMouseOver), l.screen.attachEvent("onmouseout", l.onMouseOut), l.screen.attachEvent("onmouseup", l.onMouseUp))
            }, this.onMouseOver = function(a) {
                if (!a.pointerType || "mouse" == a.pointerType) {
                    if (l.isDisabled_bl || l.isSelectedFinal_bl) return;
                    l.setSelectedState()
                }
            }, this.onMouseOut = function(a) {
                a.pointerType && "mouse" != a.pointerType || l.setNormalState()
            }, this.onMouseUp = function(a) {
                FWDEVPFlashTest.hasFlashPlayerVersion("9.0.18") || (a.preventDefault && a.preventDefault(), l.isDisabled_bl || 2 == a.button || l.dispatchEvent(b.CLICK))
            }, this.setupFalshButton = function() {
                if (FWDEVPFlashTest.hasFlashPlayerVersion("9.0.18")) {
                    var a = '<object id="' + l.flashButtonName_str + '"classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="100%" height="100%"><param name="movie" value="' + l.flashPath_str + '"/><param name="wmode" value="transparent"/><param name="scale" value="noscale"/><param name=FlashVars value="clickPath_str=' + l.clickPath_str + "&overPath_str=" + l.overPath_str + "&outPath_str=" + l.outPath_str + "&copyPath_str=" + l.copyPath_str + '"/><object type="application/x-shockwave-flash" data="' + l.flashPath_str + '" width="100%" height="100%"><param name="movie" value="' + l.flashPath_str + '"/><param name="wmode" value="transparent"/><param name="scale" value="noscale"/><param name=FlashVars value="clickPath_str=' + l.clickPath_str + "&overPath_str=" + l.overPath_str + "&outPath_str=" + l.outPath_str + "&copyPath_str=" + l.copyPath_str + '"/></object></object>',
                        b = new FWDEVPDisplayObject("div");
                    b.setBackfaceVisibility(), b.setResizableSizeAfterParent(), b.screen.innerHTML = a, l.addChild(b), l.linkFlashObject = b.screen.firstChild, FWDEVPUtils.isIE || (l.linkFlashObject = l.linkFlashObject.getElementsByTagName("object")[0])
                }
            }, this.setNormalState = function() {
                FWDEVPTweenMax.killTweensOf(l.s_do), FWDEVPTweenMax.to(l.s_do, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                })
            }, this.setSelectedState = function() {
                FWDEVPTweenMax.killTweensOf(l.s_do), FWDEVPTweenMax.to(l.s_do, .5, {
                    alpha: 1,
                    ease: Expo.easeOut
                })
            }, l.init()
        };
        b.setPrototype = function() {
            b.prototype = null, b.prototype = new FWDEVPDisplayObject("div")
        }, b.CLICK = "onClick", b.prototype = null, a.FWDEVPFlashButton = b
    }(window);
var FWDEVPFlashTest = function() {
    function a(a) {
        var b = k.pv,
            c = a.split(".");
        return c[0] = parseInt(c[0], 10), c[1] = parseInt(c[1], 10) || 0, c[2] = parseInt(c[2], 10) || 0, b[0] > c[0] || b[0] == c[0] && b[1] > c[1] || b[0] == c[0] && b[1] == c[1] && b[2] >= c[2] ? !0 : !1
    }
    var b = "undefined",
        c = "object",
        d = "Shockwave Flash",
        e = "ShockwaveFlash.ShockwaveFlash",
        f = "application/x-shockwave-flash",
        g = window,
        h = document,
        i = navigator,
        j = !1,
        k = function() {
            var a = typeof h.getElementById != b && typeof h.getElementsByTagName != b && typeof h.createElement != b,
                k = i.userAgent.toLowerCase(),
                l = i.platform.toLowerCase(),
                m = /win/.test(l ? l : k),
                n = /mac/.test(l ? l : k),
                o = /webkit/.test(k) ? parseFloat(k.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                p = !1,
                q = [0, 0, 0],
                r = null;
            if (typeof i.plugins != b && typeof i.plugins[d] == c) r = i.plugins[d].description, !r || typeof i.mimeTypes != b && i.mimeTypes[f] && !i.mimeTypes[f].enabledPlugin || (j = !0, p = !1, r = r.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), q[0] = parseInt(r.replace(/^(.*)\..*$/, "$1"), 10), q[1] = parseInt(r.replace(/^.*\.(.*)\s.*$/, "$1"), 10), q[2] = /[a-zA-Z]/.test(r) ? parseInt(r.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
            else if (typeof g.ActiveXObject != b) try {
                var s = new ActiveXObject(e);
                s && (r = s.GetVariable("$version"), r && (p = !0, r = r.split(" ")[1].split(","), q = [parseInt(r[0], 10), parseInt(r[1], 10), parseInt(r[2], 10)]))
            } catch (t) {}
            return {
                w3: a,
                pv: q,
                wk: o,
                ie: p,
                win: m,
                mac: n
            }
        }();
    return {
        hasFlashPlayerVersion: a
    }
}();
! function(a) {
    var b = function(c, d, e) {
        var f = this,
            g = b.prototype;
        this.screenToTest = c, this.screenToTest2 = d, this.hideDelay = e, this.globalX = 0, this.globalY = 0, this.currentTime, this.checkIntervalId_int, this.hideCompleteId_to, this.hasInitialTestEvents_bl = !1, this.addSecondTestEvents_bl = !1, this.dispatchOnceShow_bl = !0, this.dispatchOnceHide_bl = !1, this.isStopped_bl = !0, this.isMobile_bl = FWDEVPUtils.isMobile, this.hasPointerEvent_bl = FWDEVPUtils.hasPointerEvent, f.init = function() {}, f.start = function() {
            f.currentTime = (new Date).getTime(), clearInterval(f.checkIntervalId_int), f.checkIntervalId_int = setInterval(f.update, 100), f.addMouseOrTouchCheck(), f.isStopped_bl = !1
        }, f.stop = function() {
            clearInterval(f.checkIntervalId_int), f.isStopped_bl = !0, f.removeMouseOrTouchCheck(), f.removeMouseOrTouchCheck2()
        }, f.addMouseOrTouchCheck = function() {
            f.hasInitialTestEvents_bl || (f.hasInitialTestEvents_bl = !0, f.isMobile_bl ? f.hasPointerEvent_bl ? (f.screenToTest.screen.addEventListener("pointerdown", f.onMouseOrTouchUpdate), f.screenToTest.screen.addEventListener("MSPointerMove", f.onMouseOrTouchUpdate)) : f.screenToTest.screen.addEventListener("touchstart", f.onMouseOrTouchUpdate) : a.addEventListener ? a.addEventListener("mousemove", f.onMouseOrTouchUpdate) : document.attachEvent && document.attachEvent("onmousemove", f.onMouseOrTouchUpdate));
        }, f.removeMouseOrTouchCheck = function() {
            f.hasInitialTestEvents_bl && (f.hasInitialTestEvents_bl = !1, f.isMobile_bl ? f.hasPointerEvent_bl ? (f.screenToTest.screen.removeEventListener("pointerdown", f.onMouseOrTouchUpdate), f.screenToTest.screen.removeEventListener("MSPointerMove", f.onMouseOrTouchUpdate)) : f.screenToTest.screen.removeEventListener("touchstart", f.onMouseOrTouchUpdate) : a.removeEventListener ? a.removeEventListener("mousemove", f.onMouseOrTouchUpdate) : document.detachEvent && document.detachEvent("onmousemove", f.onMouseOrTouchUpdate))
        }, f.addMouseOrTouchCheck2 = function() {
            f.addSecondTestEvents_bl || (f.addSecondTestEvents_bl = !0, f.screenToTest.screen.addEventListener ? f.screenToTest.screen.addEventListener("mousemove", f.secondTestMoveDummy) : f.screenToTest.screen.attachEvent && f.screenToTest.screen.attachEvent("onmousemove", f.secondTestMoveDummy))
        }, f.removeMouseOrTouchCheck2 = function() {
            f.addSecondTestEvents_bl && (f.addSecondTestEvents_bl = !1, f.screenToTest.screen.removeEventListener ? f.screenToTest.screen.removeEventListener("mousemove", f.secondTestMoveDummy) : f.screenToTest.screen.detachEvent && f.screenToTest.screen.detachEvent("onmousemove", f.secondTestMoveDummy))
        }, this.secondTestMoveDummy = function() {
            f.removeMouseOrTouchCheck2(), f.addMouseOrTouchCheck()
        }, f.onMouseOrTouchUpdate = function(a) {
            var b = FWDEVPUtils.getViewportMouseCoordinates(a);
            f.globalX != b.screenX && f.globalY != b.screenY && (f.currentTime = (new Date).getTime()), f.globalX = b.screenX, f.globalY = b.screenY, f.isMobile_bl || FWDEVPUtils.hitTest(f.screenToTest.screen, f.globalX, f.globalY) || (f.removeMouseOrTouchCheck(), f.addMouseOrTouchCheck2())
        }, f.update = function() {
            (new Date).getTime() > f.currentTime + f.hideDelay ? f.dispatchOnceShow_bl && (f.dispatchOnceHide_bl = !0, f.dispatchOnceShow_bl = !1, f.dispatchEvent(b.HIDE), clearTimeout(f.hideCompleteId_to), f.hideCompleteId_to = setTimeout(function() {
                f.dispatchEvent(b.HIDE_COMPLETE)
            }, 1e3)) : f.dispatchOnceHide_bl && (clearTimeout(f.hideCompleteId_to), f.dispatchOnceHide_bl = !1, f.dispatchOnceShow_bl = !0, f.dispatchEvent(b.SHOW))
        }, f.reset = function() {
            clearTimeout(f.hideCompleteId_to), f.currentTime = (new Date).getTime(), f.dispatchEvent(b.SHOW)
        }, f.destroy = function() {
            f.removeMouseOrTouchCheck(), clearInterval(f.checkIntervalId_int), f.screenToTest = null, c = null, f.init = null, f.start = null, f.stop = null, f.addMouseOrTouchCheck = null, f.removeMouseOrTouchCheck = null, f.onMouseOrTouchUpdate = null, f.update = null, f.reset = null, f.destroy = null, g.destroy(), g = null, f = null, b.prototype = null
        }, f.init()
    };
    b.HIDE = "hide", b.SHOW = "show", b.HIDE_COMPLETE = "hideComplete", b.setPrototype = function() {
        b.prototype = new FWDEVPEventDispatcher
    }, a.FWDEVPHider = b
}(window),
function(a) {
    var b = function(a) {
        var c = this;
        b.prototype, this.bk_do = null, this.textHolder_do = null, this.show_to = null, this.isShowed_bl = !1, this.isShowedOnce_bl = !1, this.allowToRemove_bl = !0, this.init = function() {
            c.setResizableSizeAfterParent(), c.bk_do = new FWDEVPDisplayObject("div"), c.bk_do.setAlpha(.4), c.bk_do.setBkColor("#FF0000"), c.addChild(c.bk_do), c.textHolder_do = new FWDEVPDisplayObject("div"), c.textHolder_do.getStyle().display = "inline-block", c.textHolder_do.getStyle().padding = "10px", c.textHolder_do.getStyle().paddingBottom = "0px", c.textHolder_do.getStyle().lineHeight = "18px", c.textHolder_do.setBkColor("#FF0000"), c.textHolder_do.getStyle().color = "#000000", c.addChild(c.textHolder_do)
        }, this.showText = function(a) {
            c.isShowedOnce_bl || (c.screen.addEventListener ? c.screen.addEventListener("click", c.closeWindow) : c.screen.attachEvent && c.screen.attachEvent("onclick", c.closeWindow), c.isShowedOnce_bl = !0), c.setVisible(!1), c.allowToRemove_bl ? c.textHolder_do.setInnerHTML(a + "<p><font color='#FFFFFF'>Click or tap to close this window.</font>") : (c.textHolder_do.getStyle().paddingBottom = "10px", c.textHolder_do.setInnerHTML(a)), clearTimeout(c.show_to), c.show_to = setTimeout(c.show, 60), setTimeout(function() {
                c.positionAndResize()
            }, 10)
        }, this.show = function() {
            c.isShowed_bl = !0, c.setVisible(!0), c.positionAndResize()
        }, this.positionAndResize = function() {
            var b = Math.min(520, a.stageWidth - 40),
                d = c.textHolder_do.screen.offsetHeight,
                e = parseInt((a.stageWidth - b) / 2) - 10,
                f = parseInt((a.stageHeight - d) / 2);
            c.bk_do.setWidth(a.stageWidth), c.bk_do.setHeight(a.stageHeight), c.textHolder_do.setX(e), c.textHolder_do.setY(f), c.textHolder_do.setWidth(b)
        }, this.closeWindow = function() {
            if (c.allowToRemove_bl) {
                c.isShowed_bl = !1, clearTimeout(c.show_to);
                try {
                    a.main_do.removeChild(c)
                } catch (b) {}
            }
        }, this.init()
    };
    b.setPrototype = function() {
        b.prototype = new FWDEVPDisplayObject("div", "relative")
    }, b.prototype = null, a.FWDEVPInfo = b
}(window),
function(a) {
    var b = function(c) {
        var d = this;
        b.instaces_ar.push(this), this.props = c, this.isInstantiate_bl = !1, this.displayType = c.displayType || b.RESPONSIVE, d.displayType.toLowerCase() != b.RESPONSIVE && d.displayType.toLowerCase() != b.FULL_SCREEN && d.displayType.toLowerCase() != b.AFTER_PARENT && (d.displayType = b.RESPONSIVE), d.displayType = d.displayType.toLowerCase(), this.maxWidth = c.maxWidth || 640, this.maxHeight = c.maxHeight || 380, d.init = function() {
            if (!d.isInstantiate_bl) {
                if (TweenLite.ticker.useRAF(!1), this.props_obj = c, this.isEmbedded_bl = b.isEmbedded_bl, this.instanceName_str = this.props_obj.instanceName, this.mustHaveHolderDiv_bl = !1, !this.instanceName_str) return void alert("FWDEVPlayer instance name is requires please make sure that the instanceName parameter exsists and it's value is uinique.");
                if (a[this.instanceName_str]) return void alert("FWDEVPlayer instance name " + this.instanceName_str + " is already defined and contains a different instance reference, set a different instance name.");
                if (a[this.instanceName_str] = this, !this.props_obj) return void alert("FWDEVPlayer constructor properties object is not defined!");
                if (!this.props_obj.parentId) return void alert("Property parentId is not defined in the FWDEVPlayer constructor, self property represents the div id into which the megazoom is added as a child!");
                if ((d.displayType == b.RESPONSIVE || d.displayType == b.AFTER_PARENT) && (d.mustHaveHolderDiv_bl = !0), d.mustHaveHolderDiv_bl && !FWDEVPUtils.getChildById(d.props_obj.parentId)) return void alert("FWDEVPlayer holder div is not found, please make sure that the div exsists and the id is correct! " + d.props_obj.parentId);
                d.isEmbedded_bl && (d.displayType = b.FULL_SCREEN), this.body = document.getElementsByTagName("body")[0], this.stageContainer = null, d.displayType == b.FULL_SCREEN ? d.stageContainer = FWDEVPUtils.isIEAndLessThen9 ? d.body : document.documentElement : this.stageContainer = FWDEVPUtils.getChildById(d.props_obj.parentId), this.listeners = {
                    events_ar: []
                }, this.customContextMenu_do = null, this.info_do = null, this.main_do = null, this.ytb_do = null, this.preloader_do = null, this.controller_do = null, this.videoScreen_do = null, this.flash_do = null, this.flashObject = null, this.videoPoster_do = null, this.largePlayButton_do = null, this.hider = null, this.embedWindow_do = null, this.facebookShare = null, this.backgroundColor_str = d.props_obj.backgroundColor || "transparent", this.videoBackgroundColor_str = "#000000", this.flashObjectMarkup_str = null, this.lastX = 0, this.lastY = 0, this.stageWidth = 0, this.stageHeight = 0, this.firstTapX, this.firstTapY, this.curTime, this.totalTime, this.videoSourcePath_str = d.props_obj.videoSourcePath, this.prevVideoSourcePath_str, this.posterPath_str = d.props_obj.posterPath, this.videoType_str, this.videoStartBehaviour_str, this.prevVideoSource_str, this.prevPosterSource_str, this.finalVideoPath_str, this.resizeHandlerId_to, this.resizeHandler2Id_to, this.hidePreloaderId_to, this.orientationChangeId_to, this.disableClickId_to, this.clickDelayId_to, this.secondTapId_to, this.autoScale_bl = d.props_obj.autoScale, this.autoScale_bl = "yes" == d.autoScale_bl ? !0 : !1, this.isVideoPlayingWhenOpenWindows_bl = !1, this.isSpaceDown_bl = !1, this.isPlaying_bl = !1, this.firstTapPlaying_bl = !1, this.stickOnCurrentInstanceKey_bl = !1, this.isFullScreen_bl = !1, this.isFlashScreenReady_bl = !1, this.orintationChangeComplete_bl = !0, this.disableClick_bl = !1, this.useYoutube_bl = b.useYoutube, this.useYoutube_bl = "yes" == d.useYoutube_bl ? !0 : !1, this.isAPIReady_bl = !1, this.isInstantiate_bl = !0, this.isAdd_bl = !1, this.isMobile_bl = FWDEVPUtils.isMobile, this.hasPointerEvent_bl = FWDEVPUtils.hasPointerEvent, d.useOnlyAPI_bl || (this.setupMainDo(), this.startResizeHandler(), this.setupInfo()), this.setupData()
            }
        }, d.setupMainDo = function() {
            d.main_do = new FWDEVPDisplayObject("div", "relative"), d.main_do.getStyle().msTouchAction = "none", d.main_do.getStyle().webkitTapHighlightColor = "rgba(0, 0, 0, 0)", d.main_do.getStyle().webkitFocusRingColor = "rgba(0, 0, 0, 0)", d.main_do.getStyle().width = "100%", d.main_do.getStyle().height = "100%", d.main_do.setBackfaceVisibility(), d.main_do.setBkColor(d.backgroundColor_str), (!FWDEVPUtils.isMobile || FWDEVPUtils.isMobile && FWDEVPUtils.hasPointerEvent) && d.main_do.setSelectable(!1), d.stageContainer.style.overflow = "hidden", d.displayType == b.FULL_SCREEN ? (d.main_do.getStyle().position = "absolute", document.documentElement.appendChild(d.main_do.screen), d.stageContainer.style.zIndex = 9999999999998, d.main_do.getStyle().zIndex = 9999999999998) : d.stageContainer.appendChild(d.main_do.screen), d.isEmbedded_bl && (d.main_do.getStyle().zIndex = 9999999999998)
        }, d.setupInfo = function() {
            FWDEVPInfo.setPrototype(), d.info_do = new FWDEVPInfo(d)
        }, d.startResizeHandler = function() {
            a.addEventListener ? a.addEventListener("resize", d.onResizeHandler) : a.attachEvent && a.attachEvent("onresize", d.onResizeHandler), d.onResizeHandler(!0), d.resizeHandlerId_to = setTimeout(function() {
                d.resizeHandler(!0)
            }, 500)
        }, d.stopResizeHandler = function() {
            a.removeEventListener ? a.removeEventListener("resize", d.onResizeHandler) : a.detachEvent && a.detachEvent("onresize", d.onResizeHandler), clearTimeout(d.resizeHandlerId_to)
        }, d.onResizeHandler = function() {
            d.resizeHandler(), clearTimeout(d.resizeHandler2Id_to), d.resizeHandler2Id_to = setTimeout(function() {
                d.resizeHandler()
            }, 300)
        }, this.orientationChange = function() {
            (d.displayType == b.FULL_SCREEN || d.isFullScreen_bl) && (d.orintationChangeComplete_bl = !1, clearTimeout(d.resizeHandlerId_to), clearTimeout(d.resizeHandler2Id_to), clearTimeout(d.orientationChangeId_to), d.orientationChangeId_to = setTimeout(function() {
                d.orintationChangeComplete_bl = !0, d.resizeHandler(!0)
            }, 1e3), d.main_do.setX(0), d.main_do.setWidth(0))
        }, d.resizeHandler = function() {
            var a;
            d.isFullScreen_bl || d.displayType == b.FULL_SCREEN ? (a = FWDEVPUtils.getViewportSize(), d.main_do.setX(0), d.main_do.setY(0), d.stageWidth = a.w, d.stageHeight = a.h) : d.displayType == b.AFTER_PARENT ? (d.stageWidth = d.stageContainer.offsetWidth, d.stageHeight = d.stageContainer.offsetHeight) : (d.stageContainer.style.width = "100%", d.stageContainer.offsetWidth > d.maxWidth && (d.stageContainer.style.width = d.maxWidth + "px"), d.stageWidth = d.stageContainer.offsetWidth, d.stageHeight = d.autoScale_bl ? parseInt(d.maxHeight * (d.stageWidth / d.maxWidth)) : d.maxHeight, d.stageHeight < 320 && (d.stageHeight = 320), d.stageContainer.style.height = d.stageHeight + "px"), d.main_do.setWidth(d.stageWidth), d.main_do.setHeight(d.stageHeight), d.isFlashScreenReady_bl && d.videoType_str == b.VIDEO && (d.flash_do.setWidth(d.stageWidth), d.flash_do.setHeight(d.stageHeight)), d.ytb_do && d.videoType_str == b.YOUTUBE && (d.ytb_do.setWidth(d.stageWidth), d.ytb_do.setHeight(d.stageHeight)), d.logo_do && d.logo_do.positionAndResize(), d.controller_do && d.controller_do.resizeAndPosition(), d.videoScreen_do && d.videoType_str == b.VIDEO && d.videoScreen_do.resizeAndPosition(d.stageWidth, d.stageHeight), d.ytb_do && d.ytb_do.ytb && d.videoType_str == b.YOUTUBE && d.ytb_do.resizeAndPosition(), d.preloader_do && d.positionPreloader(), d.dumyClick_do && (d.dumyClick_do.setWidth(d.stageWidth), d.dumyClick_do.setHeight(d.isMobile_bl ? d.stageHeight : d.videoType_str == b.YOUTUBE ? d.stageHeight - 130 : d.stageHeight)), d.largePlayButton_do && d.positionLargePlayButton(), d.videoPoster_do && d.videoPoster_do.allowToShow_bl && d.videoPoster_do.positionAndResize(), d.embedWindow_do && d.embedWindow_do.isShowed_bl && d.embedWindow_do.positionAndResize(), d.adsStart_do && d.positionAds()
        }, this.setupClickScreen = function() {
            d.dumyClick_do = new FWDEVPDisplayObject("div"), FWDEVPUtils.isIE && (d.dumyClick_do.setBkColor("#00FF00"), d.dumyClick_do.setAlpha(1e-4)), d.dumyClick_do.screen.addEventListener ? d.dumyClick_do.screen.addEventListener("click", d.playPauseClickHandler) : d.dumyClick_do.screen.attachEvent && d.dumyClick_do.screen.attachEvent("onclick", d.playPauseClickHandler), d.hideClickScreen(), d.main_do.addChild(d.dumyClick_do)
        }, this.playPauseClickHandler = function(c) {
            return 2 != c.button ? d.isAdd_bl ? void(d.data.adsPageToOpenURL_str && "none" != d.data.adsPageToOpenURL_str && (a.open(d.data.adsPageToOpenURL_str, d.data.adsPageToOpenTarget_str), d.pause())) : void(d.disableClick_bl || (d.firstTapPlaying_bl = d.isPlaying_bl, b.keyboardCurInstance = d, 0 != d.controller_do.mainHolder_do.y && d.isMobile_bl || (d.isMobile_bl || (b.videoStartBehaviour == b.PAUSE_ALL_VIDEOS ? b.pauseAllVideos(d) : b.videoStartBehaviour == b.STOP_ALL_VIDEOS && b.stopAllVideos(d)), d.videoType_str == b.YOUTUBE ? d.ytb_do.togglePlayPause() : b.hasHTML5Video ? d.videoScreen_do && d.videoScreen_do.togglePlayPause() : d.isFlashScreenReady_bl && d.flashObject.togglePlayPause()))) : void 0
        }, this.showClickScreen = function() {
            d.dumyClick_do.setVisible(!0), d.dumyClick_do.setButtonMode(d.isAdd_bl && d.data.adsPageToOpenURL_str && "none" != d.data.adsPageToOpenURL_str ? !0 : !1)
        }, this.hideClickScreen = function() {
            d.dumyClick_do.setVisible(!1)
        }, this.disableClick = function() {
            d.disableClick_bl = !0, clearTimeout(d.disableClickId_to), d.disableClickId_to = setTimeout(function() {
                d.disableClick_bl = !1
            }, 500)
        }, this.addDoubleClickSupport = function() {
            !d.isMobile_bl && d.dumyClick_do.screen.addEventListener ? (d.dumyClick_do.screen.addEventListener("mousedown", d.onFirstDown), FWDEVPUtils.isIEWebKit && d.dumyClick_do.screen.addEventListener("dblclick", d.onSecondDown)) : d.isMobile_bl ? d.dumyClick_do.screen.addEventListener("touchstart", d.onFirstDown) : d.dumyClick_do.screen.addEventListener && d.dumyClick_do.screen.addEventListener("mousedown", d.onFirstDown)
        }, this.onFirstDown = function(a) {
            if (2 != a.button) {
                d.isFullscreen_bl && a.preventDefault && a.preventDefault();
                var b = FWDEVPUtils.getViewportMouseCoordinates(a);
                d.firstTapX = b.screenX, d.firstTapY = b.screenY, d.firstTapPlaying_bl = d.isPlaying_bl, FWDEVPUtils.isIEWebKit || (d.isMobile_bl ? (d.dumyClick_do.screen.addEventListener("touchstart", d.onSecondDown), d.dumyClick_do.screen.removeEventListener("touchstart", d.onFirstDown)) : d.dumyClick_do.screen.addEventListener && (d.dumyClick_do.screen.addEventListener("mousedown", d.onSecondDown), d.dumyClick_do.screen.removeEventListener("mousedown", d.onFirstDown)), clearTimeout(d.secondTapId_to), d.secondTapId_to = setTimeout(d.doubleTapExpired, 250))
            }
        }, this.doubleTapExpired = function() {
            clearTimeout(d.secondTapId_to), d.isMobile_bl ? (d.dumyClick_do.screen.removeEventListener("touchstart", d.onSecondDown), d.dumyClick_do.screen.addEventListener("touchstart", d.onFirstDown)) : d.dumyClick_do.screen.addEventListener && (d.dumyClick_do.screen.removeEventListener("mousedown", d.onSecondDown), d.dumyClick_do.screen.addEventListener("mousedown", d.onFirstDown))
        }, this.onSecondDown = function(a) {
            a.preventDefault && a.preventDefault();
            var b, c, e = FWDEVPUtils.getViewportMouseCoordinates(a);
            FWDEVPUtils.isIEWebKit && (d.firstTapPlaying_bl = d.isPlaying_bl), a.touches && 1 != a.touches.length || (b = Math.abs(e.screenX - d.firstTapX), c = Math.abs(e.screenY - d.firstTapY), d.isMobile_bl && (b > 10 || c > 10) || (d.isMobile_bl || !(b > 2 || c > 2)) && (d.switchFullScreenOnDoubleClick(), FWDEVPUtils.isIEWebKit || (d.firstTapPlaying_bl ? d.play() : d.pause())))
        }, this.switchFullScreenOnDoubleClick = function() {
            d.disableClick(), d.isFullScreen_bl ? d.goNormalScreen() : d.goFullScreen()
        }, this.setupFacebook = function() {
            "file:" != document.location.protocol && (d.facebookShare = new FWDEVPFacebookShare(d.data.facebookAppId_str))
        }, this.setupYoutubePlayer = function() {
            (-1 == location.protocol.indexOf("file:") || !FWDEVPUtils.isOpera && !FWDEVPUtils.isIE) && (FWDEVPYoutubeScreen.setPrototype(), d.ytb_do = new FWDEVPYoutubeScreen(d, d.data.volume), d.ytb_do.addListener(FWDEVPYoutubeScreen.READY, d.youtubeReadyHandler), d.ytb_do.addListener(FWDEVPVideoScreen.ERROR, d.videoScreenErrorHandler), d.ytb_do.addListener(FWDEVPYoutubeScreen.SAFE_TO_SCRUBB, d.videoScreenSafeToScrubbHandler), d.ytb_do.addListener(FWDEVPYoutubeScreen.STOP, d.videoScreenStopHandler), d.ytb_do.addListener(FWDEVPYoutubeScreen.PLAY, d.videoScreenPlayHandler), d.ytb_do.addListener(FWDEVPYoutubeScreen.PAUSE, d.videoScreenPauseHandler), d.ytb_do.addListener(FWDEVPYoutubeScreen.UPDATE, d.videoScreenUpdateHandler), d.ytb_do.addListener(FWDEVPYoutubeScreen.UPDATE_TIME, d.videoScreenUpdateTimeHandler), d.ytb_do.addListener(FWDEVPYoutubeScreen.LOAD_PROGRESS, d.videoScreenLoadProgressHandler), d.ytb_do.addListener(FWDEVPYoutubeScreen.PLAY_COMPLETE, d.videoScreenPlayCompleteHandler), d.ytb_do.addListener(FWDEVPYoutubeScreen.CUED, d.youtubeScreenCuedHandler), d.ytb_do.addListener(FWDEVPYoutubeScreen.QUALITY_CHANGE, d.youtubeScreenQualityChangeHandler), d.isMobile_bl || d.ytb_do.showDisable(), clearTimeout(d.ytb_do))
        }, this.youtubeReadyHandler = function() {
            if (d.ytb_do.hasBeenCreatedOnce_bl) {
                if (-1 != d.videoSourcePath_str.indexOf(".")) return;
                return d.isMobile_bl ? (d.setPosterSource(void 0), d.videoPoster_do.hide(), d.largePlayButton_do.hide()) : (d.setPosterSource(d.posterPath_str), d.videoPoster_do.show()), void(-1 == d.videoSourcePath_str.indexOf(".") && d.setSource(d.videoSourcePath_str, !0))
            }
            d.isMobile_bl && setTimeout(function() {
                try {
                    d.ytb_do.ytb.a.style.left = "0px"
                } catch (a) {}
            }, 500), clearInterval(d.hidePreloaderId_to), d.hidePreloaderId_to = setTimeout(function() {
                d.preloader_do && d.preloader_do.hide(!0)
            }, 500), d.setupNormalVideoPlayers()
        }, this.youtubeScreenCuedHandler = function() {
            d.main_do && d.main_do.contains(d.info_do) && d.main_do.removeChild(d.info_do)
        }, this.youtubeScreenQualityChangeHandler = function(a) {
            d.controller_do.updateQuality(a.levels, a.qualityLevel)
        }, d.setupContextMenu = function() {
            d.customContextMenu_do = new FWDEVPContextMenu(d.main_do, d.data.rightClickContextMenu_str)
        }, d.setupData = function() {
            FWDEVPData.setPrototype(), d.data = new FWDEVPData(d.props_obj, d.rootElement_el), d.data.addListener(FWDEVPData.PRELOADER_LOAD_DONE, d.onPreloaderLoadDone), d.data.addListener(FWDEVPData.LOAD_ERROR, d.dataLoadError), d.data.addListener(FWDEVPData.SKIN_PROGRESS, d.dataSkinProgressHandler), d.data.addListener(FWDEVPData.SKIN_LOAD_COMPLETE, d.dataSkinLoadComplete)
        }, d.onPreloaderLoadDone = function() {
            d.setupPreloader(), d.isMobile_bl || d.setupContextMenu(), d.resizeHandler()
        }, d.dataLoadError = function(a) {
            d.main_do.addChild(d.info_do), d.info_do.showText(a.text), d.preloader_do && d.preloader_do.hide(!1), d.resizeHandler()
        }, d.dataSkinProgressHandler = function() {}, d.dataSkinLoadComplete = function() {
            d.displayType != b.FULL_SCREEN || FWDEVPUtils.hasFullScreen || (d.data.showFullScreenButton_bl = !1), d.setupFacebook(), clearInterval(d.hidePreloaderId_to), d.hidePreloaderId_to = setTimeout(function() {
                d.preloader_do && d.preloader_do.hide(!0)
            }, 500), d.useYoutube_bl ? d.setupYoutubePlayer() : d.setupNormalVideoPlayers()
        }, this.setupNormalVideoPlayers = function() {
            b.hasHTML5Video ? (d.isAPIReady_bl = !0, d.setupVideoScreen(), d.setupVideoPoster(), d.main_do.addChild(d.preloader_do), d.setupClickScreen(), d.addDoubleClickSupport(), d.setupController(), d.setupLargePlayPauseButton(), d.data.showLogo_bl && d.setupLogo(), d.setupHider(), d.data.showEmbedButton_bl && d.setupEmbedWindow(), d.setupAdsStart(), d.dispatchEvent(b.READY), d.data.hasAds_bl ? (d.isAdd_bl = !0, d.setSource(d.data.adsVideoSourcePath_str)) : d.setSource(d.videoSourcePath_str)) : d.setupFlashScreen(), d.data.addKeyboardSupport_bl && d.addKeyboardSupport(), d.resizeHandler()
        }, this.setupPreloader = function() {
            FWDEVPPreloader.setPrototype(), d.preloader_do = new FWDEVPPreloader(d.data.mainPreloader_img, 38, 30, 36, 80), d.preloader_do.show(!0), d.main_do.addChild(d.preloader_do)
        }, this.positionPreloader = function() {
            d.preloader_do.setX(parseInt((d.stageWidth - d.preloader_do.w) / 2)), d.preloader_do.setY(parseInt((d.stageHeight - d.preloader_do.h) / 2))
        }, this.setupVideoPoster = function() {
            FWDEVPPoster.setPrototype(), d.videoPoster_do = new FWDEVPPoster(d, d.data.posterBackgroundColor_str, d.data.show), d.main_do.addChild(d.videoPoster_do)
        }, this.setupLargePlayPauseButton = function() {
            FWDEVPSimpleButton.setPrototype(), d.largePlayButton_do = new FWDEVPSimpleButton(d.data.largePlayN_img, d.data.largePlayS_str), d.largePlayButton_do.addListener(FWDEVPSimpleButton.MOUSE_UP, d.largePlayButtonUpHandler), d.largePlayButton_do.setOverflow("visible"), d.largePlayButton_do.hide(!1), d.main_do.addChild(d.largePlayButton_do)
        }, this.largePlayButtonUpHandler = function() {
            d.disableClick(), d.largePlayButton_do.hide(), d.play()
        }, this.positionLargePlayButton = function() {
            d.largePlayButton_do.setX(parseInt((d.stageWidth - d.largePlayButton_do.w) / 2)), d.largePlayButton_do.setY(parseInt((d.stageHeight - d.largePlayButton_do.h) / 2))
        }, this.setupLogo = function() {
            FWDEVPLogo.setPrototype(), d.logo_do = new FWDEVPLogo(d, d.data.logoPath_str, d.data.logoPosition_str, d.data.logoMargins), d.main_do.addChild(d.logo_do)
        }, this.setupController = function() {
            FWDEVPController.setPrototype(), d.controller_do = new FWDEVPController(d.data, d), d.controller_do.addListener(FWDEVPController.PLAY, d.controllerOnPlayHandler), d.controller_do.addListener(FWDEVPController.PAUSE, d.controllerOnPauseHandler), d.controller_do.addListener(FWDEVPController.START_TO_SCRUB, d.controllerStartToScrubbHandler), d.controller_do.addListener(FWDEVPController.SCRUB, d.controllerScrubbHandler), d.controller_do.addListener(FWDEVPController.STOP_TO_SCRUB, d.controllerStopToScrubbHandler), d.controller_do.addListener(FWDEVPController.CHANGE_VOLUME, d.controllerChangeVolumeHandler), d.controller_do.addListener(FWDEVPController.FACEBOOK_SHARE, d.controllerFacebookShareHandler), d.controller_do.addListener(FWDEVPController.CHANGE_YOUTUBE_QUALITY, d.controllerChangeYoutubeQualityHandler), d.controller_do.addListener(FWDEVPController.FULL_SCREEN, d.controllerFullScreenHandler), d.controller_do.addListener(FWDEVPController.NORMAL_SCREEN, d.controllerNormalScreenHandler), d.controller_do.addListener(FWDEVPController.SHOW_EMBED_WINDOW, d.showEmbedWindowHandler), d.main_do.addChild(d.controller_do)
        }, this.controllerOnPlayHandler = function() {
            d.play()
        }, this.controllerOnPauseHandler = function() {
            d.pause()
        }, this.controllerStartToScrubbHandler = function() {
            d.startToScrub()
        }, this.controllerScrubbHandler = function(a) {
            d.scrub(a.percent)
        }, this.controllerStopToScrubbHandler = function() {
            d.stopToScrub()
        }, this.controllerChangeVolumeHandler = function(a) {
            d.setVolume(a.percent)
        }, this.controllerFacebookShareHandler = function() {
            if ("file:" == document.location.protocol) {
                var a = "Facebook is not allowing sharing local, please test online.";
                return d.main_do.addChild(d.info_do), void d.info_do.showText(a)
            }
            d.facebookShare.share(location.href)
        }, this.controllerChangeYoutubeQualityHandler = function(a) {
            d.ytb_do.setQuality(a.quality)
        }, this.controllerFullScreenHandler = function() {
            d.goFullScreen()
        }, this.controllerNormalScreenHandler = function() {
            d.goNormalScreen()
        }, this.showEmbedWindowHandler = function() {
            return -1 != location.protocol.indexOf("file:") ? (d.main_do.addChild(d.info_do), void d.info_do.showText("Embedding video files local is not allowed or possible! To function properly please test online.")) : (d.videoType_str == b.YOUTUBE && d.ytb_do ? d.isVideoPlayingWhenOpenWindows_bl = d.ytb_do.isPlaying_bl : b.hasHTML5Video && d.videoScreen_do && (d.isVideoPlayingWhenOpenWindows_bl = d.videoScreen_do.isPlaying_bl), d.pause(), FWDEVPUtils.isIphone && (d.videoScreen_do && d.videoScreen_do.setX(-5e3), d.ytb_do && d.ytb_do.setX(-5e3)), d.customContextMenu_do && d.customContextMenu_do.disable(), void d.embedWindow_do.show())
        }, this.setupVideoScreen = function() {
            FWDEVPVideoScreen.setPrototype(), d.videoScreen_do = new FWDEVPVideoScreen(d, d.backgroundColor_str, d.data.volume), d.videoScreen_do.addListener(FWDEVPVideoScreen.ERROR, d.videoScreenErrorHandler), d.videoScreen_do.addListener(FWDEVPVideoScreen.SAFE_TO_SCRUBB, d.videoScreenSafeToScrubbHandler), d.videoScreen_do.addListener(FWDEVPVideoScreen.STOP, d.videoScreenStopHandler), d.videoScreen_do.addListener(FWDEVPVideoScreen.PLAY, d.videoScreenPlayHandler), d.videoScreen_do.addListener(FWDEVPVideoScreen.PAUSE, d.videoScreenPauseHandler), d.videoScreen_do.addListener(FWDEVPVideoScreen.UPDATE, d.videoScreenUpdateHandler), d.videoScreen_do.addListener(FWDEVPVideoScreen.UPDATE_TIME, d.videoScreenUpdateTimeHandler), d.videoScreen_do.addListener(FWDEVPVideoScreen.LOAD_PROGRESS, d.videoScreenLoadProgressHandler), d.videoScreen_do.addListener(FWDEVPVideoScreen.START_TO_BUFFER, d.videoScreenStartToBuferHandler), d.videoScreen_do.addListener(FWDEVPVideoScreen.STOP_TO_BUFFER, d.videoScreenStopToBuferHandler), d.videoScreen_do.addListener(FWDEVPVideoScreen.PLAY_COMPLETE, d.videoScreenPlayCompleteHandler), d.main_do.addChild(d.videoScreen_do)
        }, this.videoScreenErrorHandler = function(c) {
            var e;
            d.isPlaying_bl = !1, b.hasHTML5Video || d.videoType_str == b.YOUTUBE ? (e = c.text, a.console && console.log(c.text), d.main_do && d.main_do.addChild(d.info_do), d.info_do && d.info_do.showText(e), d.controller_do && (d.controller_do.disableMainScrubber(), d.data.showControllerWhenVideoIsStopped_bl || d.controller_do.hide(!d.isMobile_bl, !0), d.largePlayButton_do.hide(), d.hideClickScreen(), d.hider.stop())) : (e = c, d.main_do && d.main_do.addChild(d.info_do), d.info_do && d.info_do.showText(e)), FWDEVPUtils.isIphone && (d.videoScreen_do && d.videoScreen_do.setX(-5e3), d.ytb_do && d.ytb_do.setX(-5e3)), d.logo_do && d.logo_do.hide(!1), d.preloader_do.hide(!1), d.showCursor(), d.dispatchEvent(b.ERROR, {
                error: e
            })
        }, this.videoScreenSafeToScrubbHandler = function() {
            d.controller_do && (d.isAdd_bl ? (d.controller_do.disableMainScrubber(), 0 != d.data.timeToHoldAds && d.adsStart_do.show(!0), d.data.adsThumbnailPath_str && "none" != d.data.adsThumbnailPath_str && d.adsStart_do.loadThumbnail(d.data.adsThumbnailPath_str), d.positionAds()) : d.controller_do.enableMainScrubber(), d.controller_do.show(!0), d.hider.start()), d.showClickScreen()
        }, this.videoScreenStopHandler = function() {
            d.main_do && d.main_do.contains(d.info_do) && d.main_do.removeChild(d.info_do), d.videoPoster_do.allowToShow_bl = !0, d.isPlaying_bl = !1, d.controller_do && (d.controller_do.disableMainScrubber(), d.controller_do.showPlayButton(), d.data.showControllerWhenVideoIsStopped_bl ? d.controller_do.show(!d.isMobile_bl) : d.controller_do.hide(!d.isMobile_bl, !0), d.hider.stop()), d.useYoutube_bl && (d.isMobile_bl ? d.ytb_do.destroyYoutube() : d.ytb_do.stopVideo()), d.logo_do && d.logo_do.hide(!0), d.hideClickScreen(), d.isMobile_bl && d.videoType_str == b.YOUTUBE && (d.videoPoster_do.hide(), d.largePlayButton_do.hide()), d.hider.reset(), d.showCursor(), d.dispatchEvent(b.STOP)
        }, this.videoScreenPlayHandler = function() {
            b.keyboardCurInstance = d, d.videoType_str == b.YOUTUBE && d.ytb_do && d.ytb_do.isStopped_bl || (d.isPlaying_bl = !0, d.isMobile_bl ? b.videoStartBehaviour == b.STOP_ALL_VIDEOS && b.stopAllVideos(d) : b.videoStartBehaviour == b.PAUSE_ALL_VIDEOS && b.pauseAllVideos(d), d.logo_do && d.logo_do.show(!0), d.controller_do && (d.controller_do.showPauseButton(), d.controller_do.show(!0)), d.largePlayButton_do.hide(), d.hider.start(), d.showCursor(), d.dispatchEvent(b.PLAY))
        }, this.videoScreenPauseHandler = function() {
            d.videoType_str == b.YOUTUBE && d.ytb_do && d.ytb_do.isStopped_bl || (d.isPlaying_bl = !1, d.controller_do && d.controller_do.showPlayButton(), FWDEVPUtils.isIphone || d.isAdd_bl || d.largePlayButton_do.show(), d.controller_do.show(!0), d.logo_do && d.logo_do.show(!0), d.hider.stop(), d.hider.reset(), d.showCursor(), d.showClickScreen(), d.dispatchEvent(b.PAUSE))
        }, this.videoScreenUpdateHandler = function(a) {
            var c;
            b.hasHTML5Video || d.videoType_str == b.YOUTUBE ? (c = a.percent, d.controller_do && d.controller_do.updateMainScrubber(c)) : (c = a, d.controller_do && d.controller_do.updateMainScrubber(c)), d.dispatchEvent(b.UPDATE, {
                percent: c
            })
        }, this.videoScreenUpdateTimeHandler = function(a, c, e) {
            var f, g;
            b.hasHTML5Video || d.videoType_str == b.YOUTUBE ? (d.curTime = a.curTime, d.totalTime = a.totalTime, f = d.curTime + "/" + d.totalTime, g = a.seconds, d.controller_do && d.controller_do.updateTime(f)) : (d.curTime = a, d.totalTime = c, f = d.curTime + "/" + d.totalTime, g = e, (void 0 == a || void 0 == c) && (f = "00:00/00:00"), d.controller_do && d.controller_do.updateTime(f)), d.isAdd_bl && (d.data.timeToHoldAds > g ? d.adsStart_do.updateText(d.data.skipToVideoText_str + Math.abs(d.data.timeToHoldAds - g)) : (d.adsStart_do.hide(!0), d.adsSkip_do.show(!0))), d.dispatchEvent(b.UPDATE_TIME, {
                currentTime: d.curTime,
                totalTime: d.totalTime
            })
        }, this.videoScreenLoadProgressHandler = function(a) {
            b.hasHTML5Video || d.videoType_str == b.YOUTUBE ? d.controller_do && d.controller_do.updatePreloaderBar(a.percent) : d.controller_do && d.controller_do.updatePreloaderBar(a)
        }, this.videoScreenStartToBuferHandler = function() {
            d.preloader_do.show()
        }, this.videoScreenStopToBuferHandler = function() {
            d.preloader_do.hide(!0)
        }, this.videoScreenPlayCompleteHandler = function(c, e) {
            var f = d.isAdd_bl;
            d.isAdd_bl && (d.data.openNewPageAtTheEndOfTheAds_bl && "none" != d.data.adsPageToOpenURL_str && !e && ("_self" == d.data.adsPageToOpenTarget_str ? location.href = d.data.adsPageToOpenURL_str : a.open(d.data.adsPageToOpenURL_str, d.data.adsPageToOpenTarget_str)), d.isAdd_bl = !1, d.setSource(d.data.videoSourcePath_str), e && d.isMobile_bl && d.videoType_str != b.YOUTUBE && d.play(), d.isMobile_bl || setTimeout(d.play, 100)), f || (d.data.loop_bl ? (d.scrub(0), d.play()) : d.stop(), d.dispatchEvent(b.PLAY_COMPLETE)), d.hider.reset(), f = !1
        }, this.setupAdsStart = function() {
            FWDEVPAdsStart.setPrototype(), d.adsStart_do = new FWDEVPAdsStart(d.data.adsButtonsPosition_str, d.data.adsBorderNormalColor_str, "", d.data.adsBackgroundPath_str, d.data.adsTextNormalColor), FWDEVPAdsButton.setPrototype(), d.adsSkip_do = new FWDEVPAdsButton(d.data.skipIconPath_img, d.data.skipIconSPath_str, d.data.skipToVideoButtonText_str, d.data.adsButtonsPosition_str, d.data.adsBorderNormalColor_str, d.data.adsBorderSelectedColor_str, d.data.adsBackgroundPath_str, d.data.adsTextNormalColor, d.data.adsTextSelectedColor), d.adsSkip_do.addListener(FWDEVPAdsButton.MOUSE_UP, d.skipAdsMouseUpHandler), d.main_do.addChild(d.adsSkip_do), d.main_do.addChild(d.adsStart_do)
        }, this.skipAdsMouseUpHandler = function() {
            d.videoScreenPlayCompleteHandler(null, !0)
        }, this.positionAds = function(a) {
            var b, c;
            b = "left" == d.data.adsButtonsPosition_str ? 0 : d.stageWidth, c = d.controller_do.isShowed_bl ? d.stageHeight - d.adsStart_do.h - d.data.controllerHeight - 30 : d.stageHeight - d.adsStart_do.h - d.data.controllerHeight, FWDEVPTweenMax.killTweensOf(this.adsStart_do), a ? FWDEVPTweenMax.to(this.adsStart_do, .8, {
                y: c,
                ease: Expo.easeInOut
            }) : this.adsStart_do.setY(c), d.adsStart_do.setX(b), b = "left" == d.data.adsButtonsPosition_str ? 0 : d.stageWidth, c = d.controller_do.isShowed_bl ? d.stageHeight - d.adsSkip_do.h - d.data.controllerHeight - 30 : d.stageHeight - d.adsSkip_do.h - d.data.controllerHeight, FWDEVPTweenMax.killTweensOf(this.adsSkip_do), a ? FWDEVPTweenMax.to(this.adsSkip_do, .8, {
                y: c,
                ease: Expo.easeInOut
            }) : this.adsSkip_do.setY(c), d.adsSkip_do.setX(b)
        }, this.setupEmbedWindow = function() {
            FWDEVPEmbedWindow.setPrototype(), d.embedWindow_do = new FWDEVPEmbedWindow(d.data, d), d.embedWindow_do.addListener(FWDEVPEmbedWindow.ERROR, d.embedWindowErrorHandler), d.embedWindow_do.addListener(FWDEVPEmbedWindow.HIDE_COMPLETE, d.embedWindowHideCompleteHandler)
        }, this.embedWindowErrorHandler = function(a) {
            d.main_do.addChild(d.info_do), d.info_do.showText(a.error)
        }, this.embedWindowHideCompleteHandler = function() {
            FWDEVPUtils.isIphone ? (d.videoScreen_do && !d.videoScreen_do.isStopped_bl && d.videoScreen_do.setX(0), d.ytb_do && !d.ytb_do.isStopped_bl && d.ytb_do.setX(0)) : d.isVideoPlayingWhenOpenWindows_bl && d.resume()
        }, this.copyLinkButtonOnMouseOver = function() {
            d.embedWindow_do.isShowed_bl && d.embedWindow_do.copyLinkButton_do.setSelectedState()
        }, this.copyLinkButtonOnMouseOut = function() {
            d.embedWindow_do.isShowed_bl && d.embedWindow_do.copyLinkButton_do.setNormalState()
        }, this.getLinkCopyPath = function() {
            return d.embedWindow_do.isShowed_bl ? d.embedWindow_do.linkToVideo_str : void 0
        }, this.embedkButtonOnMouseOver = function() {
            d.embedWindow_do.isShowed_bl && d.embedWindow_do.copyEmbedButton_do.setSelectedState()
        }, this.embedButtonOnMouseOut = function() {
            d.embedWindow_do.isShowed_bl && d.embedWindow_do.copyEmbedButton_do.setNormalState()
        }, this.getEmbedCopyPath = function() {
            return d.embedWindow_do.finalEmbedCode_str
        }, this.setupFlashScreen = function() {
            if (!d.flash_do) {
                if (-1 != location.protocol.indexOf("file:") && (FWDEVPUtils.isOpera || FWDEVPUtils.isIEAndLessThen9)) return d.main_do.addChild(d.info_do), void(d.info_do.textHolder_do.screen.innerHTML = "This browser can't play video local, please test online or use a browser like Firefox of Chrome.");
                if (!FWDEVPFlashTest.hasFlashPlayerVersion("9.0.18")) return d.useOnlyAPI_bl ? alert("Please install Adobe flash player! <a href='http://www.adobe.com/go/getflashplayer'>Click here to install.</a>") : (d.main_do.addChild(d.info_do),
                    d.info_do.showText("Please install Adobe flash player! <a href='http://www.adobe.com/go/getflashplayer'>Click here to install.</a>")), void(d.preloader_do && d.preloader_do.hide(!1));
                d.flash_do = new FWDEVPDisplayObject("div"), d.flash_do.setBackfaceVisibility(), d.flash_do.setResizableSizeAfterParent(), d.main_do.addChild(d.flash_do), d.flashObjectMarkup_str = '<object id="' + d.instanceName_str + '"classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="100%" height="100%"><param name="movie" value="' + d.data.flashPath_str + '"/><param name="wmode" value="opaque"/><param name="scale" value="noscale"/><param name=FlashVars value="instanceName=' + d.instanceName_str + "&volume=" + d.data.volume + "&bkColor_str=" + d.videoBackgroundColor_str + '"/><object type="application/x-shockwave-flash" data="' + d.data.flashPath_str + '" width="100%" height="100%"><param name="movie" value="' + d.data.flashPath_str + '"/><param name="wmode" value="opaque"/><param name="scale" value="noscale"/><param name=FlashVars value="instanceName=' + d.instanceName_str + "&volume=" + d.data.volume + "&bkColor_str=" + d.videoBackgroundColor_str + '"/></object></object>', d.flash_do.screen.innerHTML = d.flashObjectMarkup_str, d.flashObject = d.flash_do.screen.firstChild, FWDEVPUtils.isIE || (d.flashObject = d.flashObject.getElementsByTagName("object")[0])
            }
        }, this.flashScreenIsReady = function() {
            console && console.log("flash is ready " + d.instanceName_str), d.isFlashScreenReady_bl = !0, d.isAPIReady_bl = !0, d.setupVideoPoster(), d.main_do.addChild(d.preloader_do), d.setupClickScreen(), d.addDoubleClickSupport(), d.setupController(), d.setupLargePlayPauseButton(), d.data.showLogo_bl && d.setupLogo(), d.setupHider(), d.data.showEmbedButton_bl && d.setupEmbedWindow(), d.setupAdsStart(), d.dispatchEvent(b.READY), d.data.hasAds_bl ? (d.isAdd_bl = !0, d.setSource(d.data.adsVideoSourcePath_str)) : d.setSource(d.videoSourcePath_str)
        }, this.flashScreenFail = function() {
            d.main_do.addChild(d.info_do), d.info_do.showText("External interface error!"), d.resizeHandler()
        }, this.addKeyboardSupport = function() {
            document.addEventListener ? (document.addEventListener("keydown", this.onKeyDownHandler), document.addEventListener("keyup", this.onKeyUpHandler)) : document.attachEvent && (document.attachEvent("onkeydown", this.onKeyDownHandler), document.attachEvent("onkeyup", this.onKeyUpHandler))
        }, this.onKeyDownHandler = function(a) {
            if (!d.isSpaceDown_bl && (d.isSpaceDown_bl = !0, 32 == a.keyCode)) {
                if (d != b.keyboardCurInstance && ("pause" == b.videoStartBehaviour || "none" == b.videoStartBehaviour)) return;
                if (d.stickOnCurrentInstanceKey_bl = !0, d.videoType_str == b.YOUTUBE) {
                    if (!d.ytb_do.isSafeToBeControlled_bl) return;
                    d.ytb_do.togglePlayPause()
                } else if (b.hasHTML5Video) {
                    if (!d.videoScreen_do.isSafeToBeControlled_bl) return;
                    d.videoScreen_do.togglePlayPause()
                } else d.isFlashScreenReady_bl && d.flashObject.togglePlayPause();
                return a.preventDefault && a.preventDefault(), !1
            }
        }, this.onKeyUpHandler = function() {
            d.isSpaceDown_bl = !1
        }, this.setupHider = function() {
            FWDEVPHider.setPrototype(), d.hider = new FWDEVPHider(d.main_do, d.controller_do, d.data.controllerHideDelay), d.hider.addListener(FWDEVPHider.SHOW, d.hiderShowHandler), d.hider.addListener(FWDEVPHider.HIDE, d.hiderHideHandler), d.hider.addListener(FWDEVPHider.HIDE_COMPLETE, d.hiderHideCompleteHandler)
        }, this.hiderShowHandler = function() {
            d.isPlaying_bl && d.controller_do.show(!0), d.logo_do && d.data.hideLogoWithController_bl && d.isPlaying_bl && d.logo_do.show(!0), d.showCursor(), d.isAdd_bl && (d.positionAds(!0), d.adsStart_do.showWithOpacity(), d.adsSkip_do.showWithOpacity())
        }, this.hiderHideHandler = function() {
            if (!FWDEVPUtils.isIphone) {
                if (d.data.showYoutubeQualityButton_bl && FWDEVPUtils.hitTest(d.controller_do.ytbButtonsHolder_do.screen, d.hider.globalX, d.hider.globalY)) return void d.hider.reset();
                if (FWDEVPUtils.hitTest(d.controller_do.screen, d.hider.globalX, d.hider.globalY)) return void d.hider.reset();
                d.controller_do.hide(!0), d.isAdd_bl && (d.positionAds(!0), d.adsStart_do.hideWithOpacity(), d.adsSkip_do.hideWithOpacity()), d.logo_do && d.data.hideLogoWithController_bl && d.logo_do.hide(!0), d.isFullScreen_bl && d.hideCursor()
            }
        }, this.hiderHideCompleteHandler = function() {
            d.controller_do.positionScrollBarOnTopOfTheController()
        }, this.play = function() {
            d.isAPIReady_bl && (d.isMobile_bl && d.videoType_str == b.YOUTUBE && d.ytb_do && !d.ytb_do.isSafeToBeControlled_bl || (FWDEVPUtils.isIphone && d.videoScreen_do.setX(0), d.isMobile_bl ? b.stopAllVideos(d) : b.videoStartBehaviour == b.PAUSE_ALL_VIDEOS ? b.pauseAllVideos(d) : b.videoStartBehaviour == b.STOP_ALL_VIDEOS && b.stopAllVideos(d), d.videoType_str == b.YOUTUBE && d.ytb_do ? d.ytb_do.play() : b.hasHTML5Video ? d.videoScreen_do && d.videoScreen_do.play() : d.isFlashScreenReady_bl && d.flashObject.playVideo(), b.keyboardCurInstance = d, d.videoPoster_do.allowToShow_bl = !1, d.largePlayButton_do.hide(), d.videoPoster_do.hide()))
        }, this.pause = function() {
            d.isAPIReady_bl && (FWDEVPUtils.isIphone && d.videoScreen_do.setX(0), d.videoType_str == b.YOUTUBE ? d.ytb_do.pause() : b.hasHTML5Video ? d.videoScreen_do && d.videoScreen_do.pause() : d.isFlashScreenReady_bl && d.flashObject.pauseVideo())
        }, this.resume = function() {
            d.isAPIReady_bl && (FWDEVPUtils.isIphone && d.videoScreen_do.setX(0), d.videoType_str == b.YOUTUBE && d.ytb_do ? d.ytb_do.resume() : b.hasHTML5Video && d.videoScreen_do && d.videoScreen_do.resume())
        }, this.stop = function(a) {
            d.isAPIReady_bl && (d.isPlaying_bl = !1, d.hider.reset(), FWDEVPUtils.isIphone && d.videoScreen_do.setX(-5e3), d.videoType_str == b.YOUTUBE ? (d.controller_do.ytbQualityButton_do && d.controller_do.ytbQualityButton_do.disable(), d.controller_do.hideQualityButtons(!1), d.ytb_do.stop()) : b.hasHTML5Video ? d.videoScreen_do.stop() : d.isFlashScreenReady_bl && d.flashObject.stopVideo(), d.isMobile_bl ? a && -1 != a.indexOf(".") ? (d.data.showControllerWhenVideoIsStopped_bl && d.controller_do.show(!0), d.videoPoster_do.show(), d.largePlayButton_do.show()) : a || d.videoType_str == b.YOUTUBE ? d.useYoutube_bl && (d.ytb_do.ytb || d.ytb_do.setupVideo()) : (d.videoPoster_do.show(), d.largePlayButton_do.show()) : (d.data.showControllerWhenVideoIsStopped_bl && d.controller_do.show(!0), d.videoPoster_do.show(), d.largePlayButton_do.show()), d.adsStart_do.hide(!0), d.adsSkip_do.hide(!0))
        }, this.startToScrub = function() {
            d.isAPIReady_bl && (d.videoType_str == b.YOUTUBE && d.ytb_do && d.ytb_do.isSafeToBeControlled_bl ? d.ytb_do.startToScrub() : b.hasHTML5Video ? d.videoScreen_do && d.videoScreen_do.startToScrub() : d.isFlashScreenReady_bl && d.flashObject.startToScrub())
        }, this.stopToScrub = function() {
            d.isAPIReady_bl && (d.videoType_str == b.YOUTUBE && d.ytb_do && d.ytb_do.isSafeToBeControlled_bl ? d.ytb_do.stopToScrub() : b.hasHTML5Video ? d.videoScreen_do && d.videoScreen_do.stopToScrub() : d.isFlashScreenReady_bl && d.flashObject.stopToScrub())
        }, this.scrub = function(a) {
            d.isAPIReady_bl && (isNaN(a) || (0 > a ? a = 0 : a > 1 && (a = 1), d.videoType_str == b.YOUTUBE && d.ytb_do && d.ytb_do.isSafeToBeControlled_bl ? d.ytb_do.scrub(a) : b.hasHTML5Video ? d.videoScreen_do && d.videoScreen_do.scrub(a) : d.isFlashScreenReady_bl && d.flashObject.scrub(a)))
        }, this.setVolume = function(a) {
            d.isAPIReady_bl && !d.isMobile_bl && (d.controller_do.updateVolume(a, !0), d.videoType_str == b.YOUTUBE && d.ytb_do && d.ytb_do.setVolume(a), b.hasHTML5Video && d.videoScreen_do && d.videoScreen_do.setVolume(a), d.isFlashScreenReady_bl && d.flashObject.setVolume(a), d.dispatchEvent(b.VOLUME_SET, {
                volume: a
            }))
        }, this.setPosterSource = function(a) {
            if (d.isAPIReady_bl && a) {
                var c = a.split(",");
                a = d.isMobile_bl && void 0 != c[1] ? c[1] : c[0], d.posterPath_str = a, -1 == d.videoSourcePath_str.indexOf(".") && d.useYoutube_bl && d.isMobile_bl ? d.videoPoster_do.setPoster("youtubemobile") : (d.videoPoster_do.setPoster(d.posterPath_str), d.prevPosterSource_str != a && d.dispatchEvent(b.UPDATE_POSTER_SOURCE)), d.prevPosterSource_str = a
            }
        }, this.setSource = function(a, c) {
            if (d.isAPIReady_bl && (a != d.prevVideoSource_str || c)) {
                if (d.prevVideoSource_str = a, !a) return d.main_do.addChild(d.info_do), void d.info_do.showText("Video source is not defined!");
                if (d.stop(a), d.videoSourcePath_str = a, d.finalVideoPath_str = a, d.videoType_str = -1 == d.videoSourcePath_str.indexOf(".") && d.useYoutube_bl ? b.YOUTUBE : b.VIDEO, d.videoType_str == b.YOUTUBE) {
                    if (d.ytb_do.ytb || d.ytb_do.setupVideo(), d.ytb_do.ytb && !d.ytb_do.ytb.cueVideoById) return;
                    return d.ytb_do && d.ytb_do.ytb && d.ytb_do.hideDisable(), FWDEVPUtils.isIphone && d.ytb_do.setX(0), d.flash_do ? (d.flash_do.setWidth(0), d.flash_do.setHeight(0)) : d.videoScreen_do.setVisible(!1), d.ytb_do.setSource(a), d.isMobile_bl ? (d.videoPoster_do.hide(), d.largePlayButton_do.hide()) : (d.setPosterSource(d.posterPath_str), d.videoPoster_do.show(), d.largePlayButton_do.show(), d.data.autoPlay_bl && d.play()), d.controller_do.addYtbQualityButton(), d.resizeHandler(), void(d.getVideoSource() && d.dispatchEvent(b.UPDATE_VIDEO_SOURCE))
                }
                var e = a.split(",");
                a = d.isMobile_bl && void 0 != e[1] ? e[1] : e[0], d.finalVideoPath_str = a, b.hasHTML5Video && d.videoType_str == b.VIDEO ? (d.setPosterSource(d.posterPath_str), d.ytb_do && d.ytb_do.ytb && d.ytb_do.showDisable(), d.videoPoster_do.show(), d.largePlayButton_do.show(), FWDEVPUtils.isIphone && d.videoScreen_do.setX(-5e3), d.videoScreen_do.setVisible(!0), d.controller_do.hideQualityButtons(!1), d.controller_do.removeYtbQualityButton(), d.videoScreen_do && (d.videoScreen_do.setSource(a), d.data.autoPlay_bl && d.play())) : d.isFlashScreenReady_bl && d.videoType_str == b.VIDEO && (d.setPosterSource(d.posterPath_str), d.ytb_do && d.ytb_do.ytb && d.ytb_do.showDisable(), d.controller_do.removeYtbQualityButton(), d.controller_do.hideQualityButtons(!1), -1 == a.indexOf("://") && 1 != a.indexOf("/") && (a = a.substr(a.indexOf("/") + 1)), d.videoPoster_do.show(), d.largePlayButton_do.show(), d.flashObject.setSource(a), d.data.autoPlay_bl && d.play()), d.prevVideoSourcePath_str = d.videoSourcePath_str, d.resizeHandler(), d.getVideoSource() && d.dispatchEvent(b.UPDATE_VIDEO_SOURCE)
            }
        }, this.goFullScreen = function() {
            if (d.isAPIReady_bl) {
                document.addEventListener && (document.addEventListener("fullscreenchange", d.onFullScreenChange), document.addEventListener("mozfullscreenchange", d.onFullScreenChange), document.addEventListener("webkitfullscreenchange", d.onFullScreenChange), document.addEventListener("MSFullscreenChange", d.onFullScreenChange)), document.documentElement.requestFullScreen ? d.main_do.screen.documentElement.requestFullScreen() : document.documentElement.mozRequestFullScreen ? d.main_do.screen.mozRequestFullScreen() : document.documentElement.webkitRequestFullScreen ? d.main_do.screen.webkitRequestFullScreen() : document.documentElement.msRequestFullscreen && d.main_do.screen.msRequestFullscreen(), d.disableClick(), d.main_do.getStyle().position = "fixed", document.documentElement.style.overflow = "hidden", d.main_do.getStyle().zIndex = 9999999999998, d.isFullScreen_bl = !0, d.controller_do.showNormalScreenButton(), d.controller_do.setNormalStateToFullScreenButton();
                var c = FWDEVPUtils.getScrollOffsets();
                d.lastX = c.x, d.lastY = c.y, a.scrollTo(0, 0), d.isMobile_bl && a.addEventListener("touchmove", d.disableFullScreenOnMobileHandler), d.dispatchEvent(b.GO_FULLSCREEN), d.resizeHandler()
            }
        }, this.disableFullScreenOnMobileHandler = function(a) {
            a.preventDefault && a.preventDefault()
        }, this.goNormalScreen = function() {
            d.isAPIReady_bl && (document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(), d.addMainDoToTheOriginalParent(), d.isFullScreen_bl = !1, d.resizeHandler())
        }, this.addMainDoToTheOriginalParent = function() {
            d.isFullScreen_bl && (document.removeEventListener && (document.removeEventListener("fullscreenchange", d.onFullScreenChange), document.removeEventListener("mozfullscreenchange", d.onFullScreenChange), document.removeEventListener("webkitfullscreenchange", d.onFullScreenChange), document.removeEventListener("MSFullscreenChange", d.onFullScreenChange)), d.controller_do.setNormalStateToFullScreenButton(), d.displayType == b.RESPONSIVE || d.displayType == b.AFTER_PARENT ? (document.documentElement.style.overflow = FWDEVPUtils.isIEAndLessThen9 ? "auto" : "visible", d.main_do.getStyle().position = "relative", d.main_do.getStyle().zIndex = 0) : (d.main_do.getStyle().position = "absolute", d.main_do.getStyle().zIndex = 9999999999998), d.showCursor(), d.controller_do.showFullScreenButton(), a.scrollTo(d.lastX, d.lastY), FWDEVPUtils.isIE || setTimeout(function() {
                a.scrollTo(d.lastX, d.lastY)
            }, 150), d.isMobile_bl && a.removeEventListener("touchmove", d.disableFullScreenOnMobileHandler), d.dispatchEvent(b.GO_NORMALSCREEN))
        }, this.onFullScreenChange = function() {
            document.fullScreen || document.msFullscreenElement || document.mozFullScreen || document.webkitIsFullScreen || document.msieFullScreen || (d.controller_do.showNormalScreenButton(), d.addMainDoToTheOriginalParent(), d.isFullScreen_bl = !1)
        }, this.setVideoSource = function(a) {
            d.isAdd_bl = !1, d.setSource(a)
        }, this.getVideoSource = function() {
            return d.isAPIReady_bl ? d.finalVideoPath_str : void 0
        }, this.getPosterSource = function() {
            return d.isAPIReady_bl ? d.posterPath_str : void 0
        }, this.getCurrentTime = function() {
            var a;
            return a = d.curTime ? d.curTime : "00:00"
        }, this.getTotalTime = function() {
            var a;
            return a = d.totalTime ? d.totalTime : "00:00"
        }, this.hideCursor = function() {
            document.documentElement.style.cursor = "none", document.getElementsByTagName("body")[0].style.cursor = "none", d.isAdd_bl || (d.dumyClick_do.getStyle().cursor = "none")
        }, this.showCursor = function() {
            document.documentElement.style.cursor = "auto", document.getElementsByTagName("body")[0].style.cursor = "auto", d.isAdd_bl ? d.dumyClick_do.setButtonMode(!0) : d.dumyClick_do.getStyle().cursor = "auto"
        }, this.addListener = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" == typeof a) throw Error("type must be of type String.");
            if ("function" != typeof b) throw Error("listener must be of type Function.");
            var c = {};
            c.type = a, c.listener = b, c.target = this, this.listeners.events_ar.push(c)
        }, this.dispatchEvent = function(a, b) {
            if (null != this.listeners) {
                if (void 0 == a) throw Error("type is required.");
                if ("object" == typeof a) throw Error("type must be of type String.");
                for (var c = 0, d = this.listeners.events_ar.length; d > c; c++)
                    if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a) {
                        if (b)
                            for (var e in b) this.listeners.events_ar[c][e] = b[e];
                        this.listeners.events_ar[c].listener.call(this, this.listeners.events_ar[c])
                    }
            }
        }, this.removeListener = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" == typeof a) throw Error("type must be of type String.");
            if ("function" != typeof b) throw Error("listener must be of type Function." + a);
            for (var c = 0, d = this.listeners.events_ar.length; d > c; c++)
                if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a && this.listeners.events_ar[c].listener === b) {
                    this.listeners.events_ar.splice(c, 1);
                    break
                }
        }, d.cleanMainEvents = function() {
            a.removeEventListener ? a.removeEventListener("resize", d.onResizeHandler) : a.detachEvent && a.detachEvent("onresize", d.onResizeHandler), clearTimeout(d.resizeHandlerId_to), clearTimeout(d.resizeHandler2Id_to), clearTimeout(d.hidePreloaderId_to), clearTimeout(d.orientationChangeId_to)
        };
        var e, f = FWDEVPUtils.getUrlArgs(a.location.search),
            g = f.EVPInstanceName,
            h = b.instaces_ar.length;
        if (g)
            for (var i = 0; h > i; i++)
                if (e = b.instaces_ar[i], e.props.instanceName == g) {
                    var j = FWDEVPUtils.getViewportSize(),
                        k = new FWDEVPDisplayObject("div");
                    k.setBkColor(e.props.backgroundColor), k.setWidth(j.w), k.setHeight(j.h), document.documentElement.style.overflow = "hidden", document.getElementsByTagName("body")[0].style.overflow = "hidden", FWDEVPUtils.isIEAndLessThen9 ? document.getElementsByTagName("body")[0].appendChild(k.screen) : document.documentElement.appendChild(k.screen);
                    break
                }
        if ("yes" == b.useYoutube) {
            if (-1 != location.protocol.indexOf("file:") && FWDEVPUtils.isIE || -1 != location.protocol.indexOf("file:") && FWDEVPUtils.isOpera) return d.stageContainer = FWDEVPUtils.getChildById(c.parentId), d.setupMainDo(), d.setupInfo(), d.main_do.addChild(d.info_do), d.info_do.allowToRemove_bl = !1, d.info_do.showText('This browser dosen\'t allow the Youtube API to run local, please test it online or in another browser like Firefox or Chrome! <br><br> If you don\'t want to use Youtube set <font color="#FFFFFF">FWDRVPlayer.useYoutube:"no"</font> this way it will work local in this browser.'), void d.resizeHandler();
            setTimeout(b.setupYoutubeAPI, 500)
        } else setTimeout(b.setupAllInstances, 500)
    };
    b.setupYoutubeAPI = function() {
        if (!b.isYoutubeAPICreated_bl) {
            b.isYoutubeAPICreated_bl = !0, a.onYouTubeIframeAPIReady || (a.onYouTubeIframeAPIReady = function() {
                b.setupAllInstances()
            });
            var c = document.createElement("script");
            c.src = "https://www.youtube.com/iframe_api";
            var d = document.getElementsByTagName("script")[0];
            d.parentNode.insertBefore(c, d)
        }
    }, b.setPrototype = function() {
        b.prototype = new FWDEVPEventDispatcher
    }, b.stopAllVideos = function(a) {
        for (var c, d = b.instaces_ar.length, e = 0; d > e; e++) c = b.instaces_ar[e], c != a && c.stop()
    }, b.pauseAllVideos = function(a) {
        for (var c, d = b.instaces_ar.length, e = 0; d > e; e++) c = b.instaces_ar[e], c != a && c.pause()
    }, b.setupAllInstances = function() {
        if (!b.areInstancesCreated_bl) {
            var c = FWDEVPUtils.getUrlArgs(a.location.search),
                d = c.EVPInstanceName;
            "pause" != b.videoStartBehaviour && "stop" != b.videoStartBehaviour && "none" != b.videoStartBehaviour && (b.videoStartBehaviour = "pause"), FWDEVPUtils.isMobile_bl && (b.videoStartBehaviour = "stop"), b.areInstancesCreated_bl = !0;
            var e, f, g = b.instaces_ar.length,
                h = !1;
            if (d)
                for (var i = 0; g > i; i++)
                    if (e = b.instaces_ar[i], e.props.instanceName == d) return b.isEmbedded_bl = !0, void e.init();
            for (var i = 0; g > i; i++) e = b.instaces_ar[i], f = b.instaces_ar[i - 1], e.init(), h && (e.data.autoPlay_bl = !1), 1 == e.data.autoPlay_bl && (h = !0)
        }
    }, b.hasHTML5VideoTestIsDone = !1, b.hasHTML5VideoTestIsDone || (b.hasHTML5Video = function() {
        var a = document.createElement("video"),
            c = !1;
        return a.canPlayType && (c = Boolean("probably" == a.canPlayType("video/mp4") || "maybe" == a.canPlayType("video/mp4")), b.canPlayMp4 = Boolean("probably" == a.canPlayType("video/mp4") || "maybe" == a.canPlayType("video/mp4")), b.canPlayOgg = Boolean("probably" == a.canPlayType("video/ogg") || "maybe" == a.canPlayType("video/ogg")), b.canPlayWebm = Boolean("probably" == a.canPlayType("video/webm") || "maybe" == a.canPlayType("video/webm"))), self.isMobile_bl ? !0 : (b.hasHTML5VideoTestIsDone = !0, c)
    }()), b.instaces_ar = [], b.curInstance = null, b.keyboardCurInstance = null, b.areInstancesCreated_bl = null, b.isYoutubeAPICreated_bl = !1, b.isEmbedded_bl = !1, b.PAUSE_ALL_VIDEOS = "pause", b.STOP_ALL_VIDEOS = "stop", b.DO_NOTHING = "none", b.YOUTUBE = "youtube", b.VIDEO = "video", b.READY = "ready", b.STOP = "stop", b.PLAY = "play", b.PAUSE = "pause", b.UPDATE = "update", b.UPDATE_TIME = "updateTime", b.UPDATE_VIDEO_SOURCE = "updateVideoSource", b.UPDATE_POSTER_SOURCE = "udpatePosterSource", b.ERROR = "error", b.PLAY_COMPLETE = "playComplete", b.VOLUME_SET = "volumeSet", b.GO_FULLSCREEN = "goFullScreen", b.GO_NORMALSCREEN = "goNormalScreen", b.RESPONSIVE = "responsive", b.FULL_SCREEN = "fullscreen", b.AFTER_PARENT = "afterparent", a.FWDEVPlayer = b
}(window),
function(a) {
    var b = function(c, d, e, f) {
        var g = this;
        b.prototype, this.img_img = null, this.logoImage_do = null, this.position_str = e, this.source_str = d, this.logoLink_str = c.data.logoLink_str, this.margins = f, this.isShowed_bl = !0, this.allowToShow_bl = !0, this.init = function() {
            "none" == g.logoLink_str ? g.getStyle().pointerEvents = "none" : (g.setButtonMode(!0), g.screen.onclick = function() {
                a.open(g.logoLink_str, "_blank")
            }), g.logoImage_do = new FWDEVPDisplayObject("img"), g.img_img = new Image, g.img_img.onerror = null, g.img_img.onload = g.loadDone, g.img_img.src = g.source_str, g.hide()
        }, this.loadDone = function() {
            g.setWidth(g.img_img.width), g.setHeight(g.img_img.height), g.logoImage_do.setScreen(g.img_img), g.addChild(g.logoImage_do), g.logoImage_do.setWidth(g.img_img.width), g.logoImage_do.setHeight(g.img_img.height), g.positionAndResize()
        }, this.positionAndResize = function() {
            "topleft" == g.position_str ? (g.finalX = g.margins, g.finalY = g.margins) : "topright" == g.position_str ? (g.finalX = c.stageWidth - g.w - g.margins, g.finalY = g.margins) : "bottomright" == g.position_str ? (g.finalX = c.stageWidth - g.w - g.margins, g.finalY = c.stageHeight - g.h - g.margins) : "bottomleft" == g.position_str && (g.finalX = g.margins, g.finalY = c.stageHeight - g.h - g.margins), g.setX(g.finalX), g.setY(g.finalY)
        }, this.show = function(a) {
            g.isShowed_bl || (g.isShowed_bl = !0, g.setVisible(!0), FWDEVPTweenMax.killTweensOf(g), a ? FWDEVPTweenMax.to(g, .8, {
                alpha: 1,
                ease: Expo.easeInOut
            }) : g.setAlpha(1))
        }, this.hide = function(a, b) {
            (g.isShowed_bl || b) && (g.isShowed_bl = !1, FWDEVPTweenMax.killTweensOf(g), a ? FWDEVPTweenMax.to(g, .8, {
                alpha: 0,
                ease: Expo.easeInOut,
                onComplete: function() {
                    g.setVisible(!1)
                }
            }) : (g.setAlpha(0), g.setVisible(!1)))
        }, this.init()
    };
    b.setPrototype = function() {
        b.prototype = new FWDEVPDisplayObject("div")
    }, b.prototype = null, a.FWDEVPLogo = b
}(window),
function(a) {
    var b = function(a, c, d) {
        var e = this;
        b.prototype, this.img_img = new Image, this.img_do = null, this.imgW = 0, this.imgH = 0, this.finalW = 0, this.finalH = 0, this.finalX = 0, this.finalY = 0, this.curPath_str, this.backgroundColor_str = c, this.isTransparent_bl = !1, this.showPoster_bl = d, this.showOrLoadOnMobile_bl = !1, this.isShowed_bl = !0, this.allowToShow_bl = !0, this.isMobile_bl = FWDEVPUtils.isMobile, this.init = function() {
            e.img_img = new Image, e.img_do = new FWDEVPDisplayObject("img"), e.hide(), e.setBkColor(e.backgroundColor_str)
        }, this.positionAndResize = function() {
            if (a.stageWidth && (e.setWidth(a.stageWidth), e.setHeight(a.stageHeight), e.imgW)) {
                var b, c = a.stageWidth / e.imgW,
                    d = a.stageHeight / e.imgH;
                b = d >= c ? c : d, e.finalW = Math.round(b * e.imgW), e.finalH = Math.round(b * e.imgH), e.finalX = parseInt((a.stageWidth - e.finalW) / 2), e.finalY = parseInt((a.stageHeight - e.finalH) / 2), e.img_do.setX(e.finalX), e.img_do.setY(e.finalY), e.img_do.setWidth(e.finalW), e.img_do.setHeight(e.finalH)
            }
        }, this.setPoster = function(a) {
            return a && "" == FWDEVPUtils.trim(a) || "none" == a ? (e.showOrLoadOnMobile_bl = !0, e.isTransparent_bl = !0, void e.show()) : "youtubemobile" == a ? (e.isTransparent_bl = !1, e.showOrLoadOnMobile_bl = !1, e.img_img.src = null, void(e.imgW = 0)) : a == e.curPath_str ? (e.isTransparent_bl = !1, e.showOrLoadOnMobile_bl = !0, void e.show()) : (e.isTransparent_bl = !1, e.showOrLoadOnMobile_bl = !0, e.curPath_str = a, e.allowToShow_bl && (e.isShowed_bl = !1), void(a && (e.img_do && (e.img_do.src = ""), e.img_img.onload = e.posterLoadHandler, e.img_img.src = e.curPath_str)))
        }, this.posterLoadHandler = function() {
            e.imgW = e.img_img.width, e.imgH = e.img_img.height, e.img_do.setScreen(e.img_img), e.addChild(e.img_do), e.show(), e.positionAndResize()
        }, this.show = function() {
            e.allowToShow_bl && !e.isShowed_bl && e.showOrLoadOnMobile_bl && (e.isShowed_bl = !0, e.isTransparent_bl ? 0 != e.alpha && e.setAlpha(0) : 1 != e.alpha && e.setAlpha(1), e.setVisible(!0), e.isMobile_bl || e.isTransparent_bl || (FWDEVPTweenMax.killTweensOf(e), e.setAlpha(0), FWDEVPTweenMax.to(e, .6, {
                alpha: 1,
                delay: .4
            })), e.positionAndResize())
        }, this.hide = function() {
            e.isShowed_bl && (e.isShowed_bl = !1, e.setVisible(!1))
        }, this.init()
    };
    b.setPrototype = function() {
        b.prototype = new FWDEVPDisplayObject("div")
    }, b.prototype = null, a.FWDEVPPoster = b
}(window),
function(a) {
    var b = function(a, c, d, e, f) {
        var g = this;
        b.prototype, this.imageSource_img = a, this.image_sdo = null, this.segmentWidth = c, this.segmentHeight = d, this.totalSegments = e, this.animDelay = f || 300, this.count = 0, this.delayTimerId_int, this.isShowed_bl = !1, this.init = function() {
            g.setWidth(g.segmentWidth), g.setHeight(g.segmentHeight), g.image_sdo = new FWDEVPDisplayObject("img"), g.image_sdo.setScreen(g.imageSource_img), g.addChild(g.image_sdo), g.hide(!1)
        }, this.start = function() {
            null != g && (clearInterval(g.delayTimerId_int), g.delayTimerId_int = setInterval(g.updatePreloader, g.animDelay))
        }, this.stop = function() {
            clearInterval(g.delayTimerId_int)
        }, this.updatePreloader = function() {
            if (null != g) {
                g.count++, g.count > g.totalSegments - 1 && (g.count = 0);
                var a = g.count * g.segmentWidth;
                g.image_sdo.setX(-a)
            }
        }, this.show = function() {
            g.isShowed_bl || (g.setVisible(!0), g.start(), FWDEVPTweenMax.killTweensOf(g), FWDEVPTweenMax.to(g, 1, {
                alpha: 1,
                delay: .2
            }), g.isShowed_bl = !0)
        }, this.hide = function(a) {
            g.isShowed_bl && (FWDEVPTweenMax.killTweensOf(this), a ? FWDEVPTweenMax.to(this, 1, {
                alpha: 0,
                onComplete: g.onHideComplete
            }) : (g.setVisible(!1), g.setAlpha(0)), g.isShowed_bl = !1)
        }, this.onHideComplete = function() {
            g.setVisible(!1), g.stop(), g.dispatchEvent(b.HIDE_COMPLETE)
        }, this.init()
    };
    b.setPrototype = function() {
        b.prototype = new FWDEVPDisplayObject("div")
    }, b.HIDE_COMPLETE = "hideComplete", b.prototype = null, a.FWDEVPPreloader = b
}(window),
function(a) {
    var b = function(a, c, d, e) {
        var f = this;
        b.prototype, this.nImg = a, this.sPath_str = c, this.dPath_str = d, this.n_sdo, this.s_sdo, this.d_sdo, this.toolTipLabel_str, this.totalWidth = this.nImg.width, this.totalHeight = this.nImg.height, this.isShowed_bl = !0, this.isSetToDisabledState_bl = !1, this.isDisabled_bl = !1, this.isDisabledForGood_bl = !1, this.isSelectedFinal_bl = !1, this.isActive_bl = !1, this.isMobile_bl = FWDEVPUtils.isMobile, this.hasPointerEvent_bl = FWDEVPUtils.hasPointerEvent, this.allowToCreateSecondButton_bl = !f.isMobile_bl || f.hasPointerEvent_bl || e, f.init = function() {
            f.setupMainContainers()
        }, f.setupMainContainers = function() {
            if (f.n_sdo = new FWDEVPTransformDisplayObject("img"), f.n_sdo.setScreen(f.nImg), f.addChild(f.n_sdo), f.allowToCreateSecondButton_bl) {
                var a = new Image;
                if (a.src = f.sPath_str, f.s_sdo = new FWDEVPDisplayObject("img"), f.s_sdo.setScreen(a), f.s_sdo.setWidth(f.totalWidth), f.s_sdo.setHeight(f.totalHeight), f.s_sdo.setAlpha(0), f.addChild(f.s_sdo), f.dPath_str) {
                    var b = new Image;
                    b.src = f.dPath_str, f.d_sdo = new FWDEVPDisplayObject("img"), f.d_sdo.setScreen(b), f.d_sdo.setWidth(f.totalWidth), f.d_sdo.setHeight(f.totalHeight), f.d_sdo.setX(-100), f.addChild(f.d_sdo)
                }
            }
            f.setWidth(f.totalWidth), f.setHeight(f.totalHeight), f.setButtonMode(!0), f.screen.style.yellowOverlayPointerEvents = "none", f.isMobile_bl ? f.hasPointerEvent_bl ? (f.screen.addEventListener("pointerup", f.onMouseUp), f.screen.addEventListener("pointerover", f.onMouseOver), f.screen.addEventListener("pointerout", f.onMouseOut)) : f.screen.addEventListener("touchend", f.onMouseUp) : f.screen.addEventListener ? (f.screen.addEventListener("mouseover", f.onMouseOver), f.screen.addEventListener("mouseout", f.onMouseOut), f.screen.addEventListener("mouseup", f.onMouseUp)) : f.screen.attachEvent && (f.screen.attachEvent("onmouseover", f.onMouseOver), f.screen.attachEvent("onmouseout", f.onMouseOut), f.screen.attachEvent("onmouseup", f.onMouseUp))
        }, f.onMouseOver = function(a) {
            if (f.dispatchEvent(b.SHOW_TOOLTIP, {
                    e: a
                }), !(f.isDisabledForGood_bl || a.pointerType && a.pointerType != a.MSPOINTER_TYPE_MOUSE && "mouse" != a.pointerType)) {
                if (f.isDisabled_bl || f.isSelectedFinal_bl) return;
                f.dispatchEvent(b.MOUSE_OVER, {
                    e: a
                }), f.setSelectedState()
            }
        }, f.onMouseOut = function(a) {
            if (!(f.isDisabledForGood_bl || a.pointerType && a.pointerType != a.MSPOINTER_TYPE_MOUSE && "mouse" != a.pointerType)) {
                if (f.isDisabled_bl || f.isSelectedFinal_bl) return;
                f.dispatchEvent(b.MOUSE_OUT, {
                    e: a
                }), f.setNormalState()
            }
        }, f.onMouseUp = function(a) {
            f.isDisabledForGood_bl || (a.preventDefault && a.preventDefault(), f.isDisabled_bl || 2 == a.button || f.dispatchEvent(b.MOUSE_UP, {
                e: a
            }))
        }, f.setSelected = function() {
            f.isSelectedFinal_bl = !0, f.s_sdo && (FWDEVPTweenMax.killTweensOf(f.s_sdo), FWDEVPTweenMax.to(f.s_sdo, .8, {
                alpha: 1,
                ease: Expo.easeOut
            }))
        }, f.setUnselected = function() {
            f.isSelectedFinal_bl = !1, f.s_sdo && FWDEVPTweenMax.to(f.s_sdo, .8, {
                alpha: 0,
                delay: .1,
                ease: Expo.easeOut
            })
        }, this.setNormalState = function() {
            FWDEVPTweenMax.killTweensOf(f.s_sdo), FWDEVPTweenMax.to(f.s_sdo, .5, {
                alpha: 0,
                ease: Expo.easeOut
            })
        }, this.setSelectedState = function() {
            FWDEVPTweenMax.killTweensOf(f.s_sdo), FWDEVPTweenMax.to(f.s_sdo, .5, {
                alpha: 1,
                delay: .1,
                ease: Expo.easeOut
            })
        }, this.setDisabledState = function() {
            f.isSetToDisabledState_bl || (f.isSetToDisabledState_bl = !0, f.d_sdo && f.d_sdo.setX(0))
        }, this.setEnabledState = function() {
            f.isSetToDisabledState_bl && (f.isSetToDisabledState_bl = !1, f.d_sdo && f.d_sdo.setX(-100))
        }, this.disable = function() {
            f.isDisabledForGood_bl || f.isDisabled_bl || (f.isDisabled_bl = !0, f.setButtonMode(!1), FWDEVPTweenMax.to(f, .6, {
                alpha: .4
            }), f.setNormalState())
        }, this.enable = function() {
            !f.isDisabledForGood_bl && f.isDisabled_bl && (f.isDisabled_bl = !1, f.setButtonMode(!0), FWDEVPTweenMax.to(f, .6, {
                alpha: 1
            }))
        }, this.disableForGood = function() {
            f.isDisabledForGood_bl = !0, f.setButtonMode(!1)
        }, this.showDisabledState = function() {
            0 != f.d_sdo.x && f.d_sdo.setX(0)
        }, this.hideDisabledState = function() {
            -100 != f.d_sdo.x && f.d_sdo.setX(-100)
        }, this.show = function() {
            f.isShowed_bl || (f.isShowed_bl = !0, FWDEVPTweenMax.killTweensOf(f), FWDEVPUtils.isIEAndLessThen9 ? FWDEVPUtils.isIEAndLessThen9 ? f.setVisible(!0) : (f.setAlpha(0), FWDEVPTweenMax.to(f, .4, {
                alpha: 1,
                delay: .4
            }), f.setVisible(!0)) : FWDEVPUtils.isIEWebKit ? (FWDEVPTweenMax.killTweensOf(f.n_sdo), f.n_sdo.setScale2(0), FWDEVPTweenMax.to(f.n_sdo, .8, {
                scale: 1,
                delay: .4,
                onStart: function() {
                    f.setVisible(!0)
                },
                ease: Elastic.easeOut
            })) : (f.setScale2(0), FWDEVPTweenMax.to(f, .8, {
                scale: 1,
                delay: .4,
                onStart: function() {
                    f.setVisible(!0)
                },
                ease: Elastic.easeOut
            })))
        }, this.hide = function() {
            f.isShowed_bl && (f.isShowed_bl = !1, FWDEVPTweenMax.killTweensOf(f), FWDEVPTweenMax.killTweensOf(f.n_sdo), f.setVisible(!1))
        }, f.init()
    };
    b.setPrototype = function() {
        b.prototype = null, b.prototype = new FWDEVPTransformDisplayObject("div")
    }, b.CLICK = "onClick", b.MOUSE_OVER = "onMouseOver", b.SHOW_TOOLTIP = "showTooltip", b.MOUSE_OUT = "onMouseOut", b.MOUSE_UP = "onMouseDown", b.prototype = null, a.FWDEVPSimpleButton = b
}(window),
function(a) {
    var b = function(a, c, d, e) {
        var f = this,
            g = b.prototype;
        this.nImg_img = null, this.sImg_img = null, this.n_do, this.s_do, this.nImgPath_str = a, this.sImgPath_str = c, this.buttonWidth = d, this.buttonHeight = e, this.isMobile_bl = FWDEVPUtils.isMobile, this.hasPointerEvent_bl = FWDEVPUtils.hasPointerEvent, this.isDisabled_bl = !1, this.init = function() {
            f.setupMainContainers(), f.setWidth(f.buttonWidth), f.setHeight(f.buttonHeight), f.setButtonMode(!0)
        }, this.setupMainContainers = function() {
            f.n_do = new FWDEVPDisplayObject("img"), f.nImg_img = new Image, f.nImg_img.src = f.nImgPath_str, f.nImg_img.width = f.buttonWidth, f.nImg_img.height = f.buttonHeight, f.n_do.setScreen(f.nImg_img), f.s_do = new FWDEVPDisplayObject("img"), f.sImg_img = new Image, f.sImg_img.src = f.sImgPath_str, f.sImg_img.width = f.buttonWidth, f.sImg_img.height = f.buttonHeight, f.s_do.setScreen(f.sImg_img), f.addChild(f.s_do), f.addChild(f.n_do), f.screen.onmouseover = f.onMouseOver, f.screen.onmouseout = f.onMouseOut, f.screen.onclick = f.onClick
        }, this.onMouseOver = function() {
            FWDEVPTweenMax.to(f.n_do, .9, {
                alpha: 0,
                ease: Expo.easeOut
            })
        }, this.onMouseOut = function() {
            FWDEVPTweenMax.to(f.n_do, .9, {
                alpha: 1,
                ease: Expo.easeOut
            })
        }, this.onClick = function() {
            f.dispatchEvent(b.CLICK)
        }, this.destroy = function() {
            FWDEVPTweenMax.killTweensOf(f.n_do), f.n_do.destroy(), this.s_do.destroy(), f.screen.onmouseover = null, f.screen.onmouseout = null, f.screen.onclick = null, f.nImg_img = null, f.sImg_img = null, f = null, g = null, b.prototype = null
        }, f.init()
    };
    b.setPrototype = function() {
        b.prototype = null, b.prototype = new FWDEVPDisplayObject("div", "relative")
    }, b.CLICK = "onClick", b.prototype = null, a.FWDEVPSimpleSizeButton = b
}(window),
function(a) {
    var b = function(a, b, c, d) {
        this.listeners = {
            events_ar: []
        };
        var e = this;
        if ("div" != a && "img" != a && "canvas" != a) throw Error("Type is not valid! " + a);
        this.type = a, this.children_ar = [], this.style, this.screen, this.numChildren, this.transform, this.position = b || "absolute", this.overflow = c || "hidden", this.display = d || "block", this.visible = !0, this.buttonMode, this.x = 0, this.y = 0, this.scale = 1, this.rotation = 0, this.w = 0, this.h = 0, this.rect, this.alpha = 1, this.innerHTML = "", this.opacityType = "", this.isHtml5_bl = !1, this.hasTransform2d_bl = FWDEVPUtils.hasTransform2d, this.init = function() {
            this.setScreen()
        }, this.getTransform = function() {
            for (var a, b = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"]; a = b.shift();)
                if ("undefined" != typeof this.screen.style[a]) return a;
            return !1
        }, this.getOpacityType = function() {
            var a;
            return a = "undefined" != typeof this.screen.style.opacity ? "opacity" : "filter"
        }, this.setScreen = function(a) {
            "img" == this.type && a ? (this.screen = a, this.setMainProperties()) : (this.screen = document.createElement(this.type), this.setMainProperties())
        }, this.setMainProperties = function() {
            this.transform = this.getTransform(), this.setPosition(this.position), this.setOverflow(this.overflow), this.opacityType = this.getOpacityType(), "opacity" == this.opacityType && (this.isHtml5_bl = !0), "filter" == e.opacityType && (e.screen.style.filter = "inherit"), this.screen.style.left = "0px", this.screen.style.top = "0px", this.screen.style.margin = "0px", this.screen.style.padding = "0px", this.screen.style.maxWidth = "none", this.screen.style.maxHeight = "none", this.screen.style.border = "none", this.screen.style.lineHeight = "1", this.screen.style.backgroundColor = "transparent", this.screen.style.backfaceVisibility = "hidden", this.screen.style.webkitBackfaceVisibility = "hidden", this.screen.style.MozBackfaceVisibility = "hidden", this.screen.style.MozImageRendering = "optimizeSpeed", this.screen.style.WebkitImageRendering = "optimizeSpeed",
                "img" == a && (this.setWidth(this.screen.width), this.setHeight(this.screen.height), this.screen.onmousedown = function() {
                    return !1
                })
        }, e.setBackfaceVisibility = function() {
            e.screen.style.backfaceVisibility = "visible", e.screen.style.webkitBackfaceVisibility = "visible", e.screen.style.MozBackfaceVisibility = "visible"
        }, e.removeBackfaceVisibility = function() {
            e.screen.style.backfaceVisibility = "hidden", e.screen.style.webkitBackfaceVisibility = "hidden", e.screen.style.MozBackfaceVisibility = "hidden"
        }, this.setSelectable = function(a) {
            if (!a) {
                try {
                    this.screen.style.userSelect = "none"
                } catch (b) {}
                try {
                    this.screen.style.MozUserSelect = "none"
                } catch (b) {}
                try {
                    this.screen.style.webkitUserSelect = "none"
                } catch (b) {}
                try {
                    this.screen.style.khtmlUserSelect = "none"
                } catch (b) {}
                try {
                    this.screen.style.oUserSelect = "none"
                } catch (b) {}
                try {
                    this.screen.style.msUserSelect = "none"
                } catch (b) {}
                try {
                    this.screen.msUserSelect = "none"
                } catch (b) {}
                this.screen.ondragstart = function() {
                    return !1
                }, this.screen.onselectstart = function() {
                    return !1
                }, this.screen.style.webkitTouchCallout = "none"
            }
        }, this.getScreen = function() {
            return e.screen
        }, this.setVisible = function(a) {
            this.visible = a, this.screen.style.visibility = 1 == this.visible ? "visible" : "hidden"
        }, this.getVisible = function() {
            return this.visible
        }, this.setResizableSizeAfterParent = function() {
            this.screen.style.width = "100%", this.screen.style.height = "100%"
        }, this.getStyle = function() {
            return this.screen.style
        }, this.setOverflow = function(a) {
            e.overflow = a, e.screen.style.overflow = e.overflow
        }, this.setPosition = function(a) {
            e.position = a, e.screen.style.position = e.position
        }, this.setDisplay = function(a) {
            this.display = a, this.screen.style.display = this.display
        }, this.setButtonMode = function(a) {
            this.buttonMode = a, this.screen.style.cursor = 1 == this.buttonMode ? "pointer" : "default"
        }, this.setBkColor = function(a) {
            e.screen.style.backgroundColor = a
        }, this.setInnerHTML = function(a) {
            e.innerHTML = a, e.screen.innerHTML = e.innerHTML
        }, this.getInnerHTML = function() {
            return e.innerHTML
        }, this.getRect = function() {
            return e.screen.getBoundingClientRect()
        }, this.setAlpha = function(a) {
            e.alpha = a, "opacity" == e.opacityType ? e.screen.style.opacity = e.alpha : "filter" == e.opacityType && (e.screen.style.filter = "alpha(opacity=" + 100 * e.alpha + ")", e.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(100 * e.alpha) + ")")
        }, this.getAlpha = function() {
            return e.alpha
        }, this.getRect = function() {
            return this.screen.getBoundingClientRect()
        }, this.getGlobalX = function() {
            return this.getRect().left
        }, this.getGlobalY = function() {
            return this.getRect().top
        }, this.setX = function(a) {
            e.x = a, e.hasTransform2d_bl ? e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px) scale(" + e.scale + " , " + e.scale + ") rotate(" + e.rotation + "deg)" : e.screen.style.left = e.x + "px"
        }, this.getX = function() {
            return e.x
        }, this.setY = function(a) {
            e.y = a, e.hasTransform2d_bl ? e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px) scale(" + e.scale + " , " + e.scale + ") rotate(" + e.rotation + "deg)" : e.screen.style.top = e.y + "px"
        }, this.getY = function() {
            return e.y
        }, this.setScale2 = function(a) {
            e.scale = a, e.hasTransform2d_bl && (e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px) scale(" + e.scale + " , " + e.scale + ") rotate(" + e.rotation + "deg)")
        }, this.getScale = function() {
            return e.scale
        }, this.setRotation = function(a) {
            e.rotation = a, e.hasTransform2d_bl && (e.screen.style[e.transform] = "translate(" + e.x + "px," + e.y + "px) scale(" + e.scale + " , " + e.scale + ") rotate(" + e.rotation + "deg)")
        }, this.setWidth = function(a) {
            e.w = a, "img" == e.type ? e.screen.width = e.w : e.screen.style.width = e.w + "px"
        }, this.getWidth = function() {
            return "div" == e.type ? 0 != e.screen.offsetWidth ? e.screen.offsetWidth : e.w : "img" == e.type ? 0 != e.screen.offsetWidth ? e.screen.offsetWidth : 0 != e.screen.width ? e.screen.width : e._w : "canvas" == e.type ? 0 != e.screen.offsetWidth ? e.screen.offsetWidth : e.w : void 0
        }, this.setHeight = function(a) {
            e.h = a, "img" == e.type ? e.screen.height = e.h : e.screen.style.height = e.h + "px"
        }, this.getHeight = function() {
            return "div" == e.type ? 0 != e.screen.offsetHeight ? e.screen.offsetHeight : e.h : "img" == e.type ? 0 != e.screen.offsetHeight ? e.screen.offsetHeight : 0 != e.screen.height ? e.screen.height : e.h : "canvas" == e.type ? 0 != e.screen.offsetHeight ? e.screen.offsetHeight : e.h : void 0
        }, this.getNumChildren = function() {
            return e.children_ar.length
        }, this.addChild = function(a) {
            this.contains(a) ? (this.children_ar.splice(FWDEVPUtils.indexOfArray(this.children_ar, a), 1), this.children_ar.push(a), this.screen.appendChild(a.screen)) : (this.children_ar.push(a), this.screen.appendChild(a.screen))
        }, this.removeChild = function(a) {
            if (!this.contains(a)) throw Error("##removeChild()## Child doesn't exist, it can't be removed!");
            this.children_ar.splice(FWDEVPUtils.indexOfArray(this.children_ar, a), 1), this.screen.removeChild(a.screen)
        }, this.contains = function(a) {
            return -1 == FWDEVPUtils.indexOfArray(this.children_ar, a) ? !1 : !0
        }, this.addChildAtZero = function(a) {
            0 == this.numChildren ? (this.children_ar.push(a), this.screen.appendChild(a.screen)) : (this.screen.insertBefore(a.screen, this.children_ar[0].screen), this.contains(a) && this.children_ar.splice(FWDEVPUtils.indexOfArray(this.children_ar, a), 1), this.children_ar.unshift(a))
        }, this.getChildAt = function(a) {
            if (0 > a || a > this.numChildren - 1) throw Error("##getChildAt()## Index out of bounds!");
            if (0 == this.numChildren) throw Errror("##getChildAt## Child dose not exist!");
            return this.children_ar[a]
        }, this.removeChildAtZero = function() {
            this.screen.removeChild(this.children_ar[0].screen), this.children_ar.shift()
        }, this.addListener = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" == typeof a) throw Error("type must be of type String.");
            if ("function" != typeof b) throw Error("listener must be of type Function.");
            var c = {};
            c.type = a, c.listener = b, c.target = this, this.listeners.events_ar.push(c)
        }, this.dispatchEvent = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" == typeof a) throw Error("type must be of type String.");
            for (var c = 0, d = this.listeners.events_ar.length; d > c; c++)
                if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a) {
                    if (b)
                        for (var e in b) this.listeners.events_ar[c][e] = b[e];
                    this.listeners.events_ar[c].listener.call(this, this.listeners.events_ar[c]);
                    break
                }
        }, this.removeListener = function(a, b) {
            if (void 0 == a) throw Error("type is required.");
            if ("object" == typeof a) throw Error("type must be of type String.");
            if ("function" != typeof b) throw Error("listener must be of type Function." + a);
            for (var c = 0, d = this.listeners.events_ar.length; d > c; c++)
                if (this.listeners.events_ar[c].target === this && this.listeners.events_ar[c].type === a && this.listeners.events_ar[c].listener === b) {
                    this.listeners.events_ar.splice(c, 1);
                    break
                }
        }, this.disposeImage = function() {
            "img" == this.type && (this.screen.src = null)
        }, this.destroy = function() {
            try {
                this.screen.parentNode.removeChild(this.screen)
            } catch (a) {}
            this.screen.onselectstart = null, this.screen.ondragstart = null, this.screen.ontouchstart = null, this.screen.ontouchmove = null, this.screen.ontouchend = null, this.screen.onmouseover = null, this.screen.onmouseout = null, this.screen.onmouseup = null, this.screen.onmousedown = null, this.screen.onmousemove = null, this.screen.onclick = null, delete this.screen, delete this.style, delete this.rect, delete this.selectable, delete this.buttonMode, delete this.position, delete this.overflow, delete this.visible, delete this.innerHTML, delete this.numChildren, delete this.x, delete this.y, delete this.w, delete this.h, delete this.opacityType, delete this.isHtml5_bl, delete this.hasTransform2d_bl, this.children_ar = null, this.style = null, this.screen = null, this.numChildren = null, this.transform = null, this.position = null, this.overflow = null, this.display = null, this.visible = null, this.buttonMode = null, this.globalX = null, this.globalY = null, this.x = null, this.y = null, this.w = null, this.h = null, this.rect = null, this.alpha = null, this.innerHTML = null, this.opacityType = null, this.isHtml5_bl = null, this.hasTransform3d_bl = null, this.hasTransform2d_bl = null, e = null
        }, this.init()
    };
    a.FWDEVPTransformDisplayObject = b
}(window), (window._gsQueue || (window._gsQueue = [])).push(function() {
        "use strict";
        window._gsDefine("FWDEVPTweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
                var d = [].slice,
                    e = function(a, b, d) {
                        c.call(this, a, b, d), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0
                    },
                    f = function(a) {
                        return a.jquery || a.length && a[0] && a[0].nodeType && a[0].style
                    },
                    g = e.prototype = c.to({}, .1, {}),
                    h = [];
                e.version = "1.9.7", g.constructor = e, g.kill()._gc = !1, e.killTweensOf = e.killDelayedCallsTo = c.killTweensOf, e.getTweensOf = c.getTweensOf, e.ticker = c.ticker, g.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), c.prototype.invalidate.call(this)
                }, g.updateTo = function(a, b) {
                    var d, e = this.ratio;
                    b && this.timeline && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (d in a) this.vars[d] = a[d];
                    if (this._initted)
                        if (b) this._initted = !1;
                        else if (this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var f = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(f, !0, !1)
                    } else if (this._time > 0) {
                        this._initted = !1, this._init();
                        for (var g, h = 1 / (1 - e), i = this._firstPT; i;) g = i.s + i.c, i.c *= h, i.s = g - i.c, i = i._next
                    }
                    return this
                }, g.render = function(a, b, c) {
                    var d, e, f, g, i, j, k, l = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._time,
                        n = this._totalTime,
                        o = this._cycle;
                    if (a >= l ? (this._totalTime = l, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (d = !0, e = "onComplete"), 0 === this._duration && ((0 === a || this._rawPrevTime < 0) && this._rawPrevTime !== a && (c = !0, this._rawPrevTime > 0 && (e = "onReverseComplete", b && (a = -1))), this._rawPrevTime = a)) : 1e-7 > a ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== n || 0 === this._duration && this._rawPrevTime > 0) && (e = "onReverseComplete", d = this._reversed), 0 > a ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (c = !0), this._rawPrevTime = a)) : this._initted || (c = !0)) : (this._totalTime = this._time = a, 0 !== this._repeat && (g = this._duration + this._repeatDelay, this._cycle = this._totalTime / g >> 0, 0 !== this._cycle && this._cycle === this._totalTime / g && this._cycle--, this._time = this._totalTime - this._cycle * g, this._yoyo && 0 !== (1 & this._cycle) && (this._time = this._duration - this._time), this._time > this._duration ? this._time = this._duration : this._time < 0 && (this._time = 0)), this._easeType ? (i = this._time / this._duration, j = this._easeType, k = this._easePower, (1 === j || 3 === j && i >= .5) && (i = 1 - i), 3 === j && (i *= 2), 1 === k ? i *= i : 2 === k ? i *= i * i : 3 === k ? i *= i * i * i : 4 === k && (i *= i * i * i * i), this.ratio = 1 === j ? 1 - i : 2 === j ? i : this._time / this._duration < .5 ? i / 2 : 1 - i / 2) : this.ratio = this._ease.getRatio(this._time / this._duration)), m === this._time && !c) return void(n !== this._totalTime && this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h)));
                    if (!this._initted) {
                        if (this._init(), !this._initted) return;
                        this._time && !d ? this.ratio = this._ease.getRatio(this._time / this._duration) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._active || this._paused || (this._active = !0), 0 === n && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === this._duration) && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || h))), f = this._firstPT; f;) {
                        if (f.f) f.t[f.p](f.c * this.ratio + f.s);
                        else {
                            var p = f.c * this.ratio + f.s;
                            "x" == f.p ? f.t.setX(p) : "y" == f.p ? f.t.setY(p) : "z" == f.p ? f.t.setZ(p) : "w" == f.p ? f.t.setWidth(p) : "h" == f.p ? f.t.setHeight(p) : "alpha" == f.p ? f.t.setAlpha(p) : "scale" == f.p ? f.t.setScale2(p) : f.t[f.p] = p
                        }
                        f = f._next
                    }
                    this._onUpdate && (0 > a && this._startAt && this._startAt.render(a, b, c), b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h)), this._cycle !== o && (b || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || h)), e && (this._gc || (0 > a && this._startAt && !this._onUpdate && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this.vars[e].apply(this.vars[e + "Scope"] || this, this.vars[e + "Params"] || h)))
                }, e.to = function(a, b, c) {
                    return new e(a, b, c)
                }, e.from = function(a, b, c) {
                    return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new e(a, b, c)
                }, e.fromTo = function(a, b, c, d) {
                    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new e(a, b, d)
                }, e.staggerTo = e.allTo = function(a, b, g, i, j, k, l) {
                    i = i || 0;
                    var m, n, o, p, q = g.delay || 0,
                        r = [],
                        s = function() {
                            g.onComplete && g.onComplete.apply(g.onCompleteScope || this, g.onCompleteParams || h), j.apply(l || this, k || h)
                        };
                    for (a instanceof Array || ("string" == typeof a && (a = c.selector(a) || a), f(a) && (a = d.call(a, 0))), m = a.length, o = 0; m > o; o++) {
                        n = {};
                        for (p in g) n[p] = g[p];
                        n.delay = q, o === m - 1 && j && (n.onComplete = s), r[o] = new e(a[o], b, n), q += i
                    }
                    return r
                }, e.staggerFrom = e.allFrom = function(a, b, c, d, f, g, h) {
                    return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, e.staggerTo(a, b, c, d, f, g, h)
                }, e.staggerFromTo = e.allFromTo = function(a, b, c, d, f, g, h, i) {
                    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, e.staggerTo(a, b, d, f, g, h, i)
                }, e.delayedCall = function(a, b, c, d, f) {
                    return new e(b, 0, {
                        delay: a,
                        onComplete: b,
                        onCompleteParams: c,
                        onCompleteScope: d,
                        onReverseComplete: b,
                        onReverseCompleteParams: c,
                        onReverseCompleteScope: d,
                        immediateRender: !1,
                        useFrames: f,
                        overwrite: 0
                    })
                }, e.set = function(a, b) {
                    return new e(a, 0, b)
                }, e.isTweening = function(a) {
                    for (var b, d = c.getTweensOf(a), e = d.length; --e > -1;)
                        if (b = d[e], b._active || b._startTime === b._timeline._time && b._timeline._active) return !0;
                    return !1
                };
                var i = function(a, b) {
                        for (var d = [], e = 0, f = a._first; f;) f instanceof c ? d[e++] = f : (b && (d[e++] = f), d = d.concat(i(f, b)), e = d.length), f = f._next;
                        return d
                    },
                    j = e.getAllTweens = function(b) {
                        return i(a._rootTimeline, b).concat(i(a._rootFramesTimeline, b))
                    };
                e.killAll = function(a, c, d, e) {
                    null == c && (c = !0), null == d && (d = !0);
                    var f, g, h, i = j(0 != e),
                        k = i.length,
                        l = c && d && e;
                    for (h = 0; k > h; h++) g = i[h], (l || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a ? g.totalTime(g.totalDuration()) : g._enabled(!1, !1))
                }, e.killChildTweensOf = function(a, b) {
                    if (null != a) {
                        var g, h, i, j, k, l = c._tweenLookup;
                        if ("string" == typeof a && (a = c.selector(a) || a), f(a) && (a = d(a, 0)), a instanceof Array)
                            for (j = a.length; --j > -1;) e.killChildTweensOf(a[j], b);
                        else {
                            g = [];
                            for (i in l)
                                for (h = l[i].target.parentNode; h;) h === a && (g = g.concat(l[i].tweens)), h = h.parentNode;
                            for (k = g.length, j = 0; k > j; j++) b && g[j].totalTime(g[j].totalDuration()), g[j]._enabled(!1, !1)
                        }
                    }
                };
                var k = function(a, c, d, e) {
                    void 0 === c && (c = !0), void 0 === d && (d = !0);
                    for (var f, g, h = j(e), i = c && d && e, k = h.length; --k > -1;) g = h[k], (i || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a)
                };
                return e.pauseAll = function(a, b, c) {
                    k(!0, a, b, c)
                }, e.resumeAll = function(a, b, c) {
                    k(!1, a, b, c)
                }, g.progress = function(a) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, g.totalProgress = function(a) {
                    return arguments.length ? this.totalTime(this.totalDuration() * a, !1) : this._totalTime / this.totalDuration()
                }, g.time = function(a, b) {
                    return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
                }, g.duration = function(b) {
                    return arguments.length ? a.prototype.duration.call(this, b) : this._duration
                }, g.totalDuration = function(a) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, g.repeat = function(a) {
                    return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
                }, g.repeatDelay = function(a) {
                    return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
                }, g.yoyo = function(a) {
                    return arguments.length ? (this._yoyo = a, this) : this._yoyo
                }, e
            }, !0), window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
                var d = function(a) {
                        b.call(this, a), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        for (var c, d, f = this.vars, g = e.length; --g > -1;)
                            if (d = f[e[g]])
                                for (c = d.length; --c > -1;) "{self}" === d[c] && (d = f[e[g]] = d.concat(), d[c] = this);
                        f.tweens instanceof Array && this.add(f.tweens, 0, f.align, f.stagger)
                    },
                    e = ["onStartParams", "onUpdateParams", "onCompleteParams", "onReverseCompleteParams", "onRepeatParams"],
                    f = [],
                    g = function(a) {
                        var b, c = {};
                        for (b in a) c[b] = a[b];
                        return c
                    },
                    h = f.slice,
                    i = d.prototype = new b;
                return d.version = "1.9.7", i.constructor = d, i.kill()._gc = !1, i.to = function(a, b, d, e) {
                    return b ? this.add(new c(a, b, d), e) : this.set(a, d, e)
                }, i.from = function(a, b, d, e) {
                    return this.add(c.from(a, b, d), e)
                }, i.fromTo = function(a, b, d, e, f) {
                    return b ? this.add(c.fromTo(a, b, d, e), f) : this.set(a, e, f)
                }, i.staggerTo = function(a, b, e, f, i, j, k, l) {
                    var m, n = new d({
                        onComplete: j,
                        onCompleteParams: k,
                        onCompleteScope: l
                    });
                    for ("string" == typeof a && (a = c.selector(a) || a), !(a instanceof Array) && a.length && a[0] && a[0].nodeType && a[0].style && (a = h.call(a, 0)), f = f || 0, m = 0; m < a.length; m++) e.startAt && (e.startAt = g(e.startAt)), n.to(a[m], b, g(e), m * f);
                    return this.add(n, i)
                }, i.staggerFrom = function(a, b, c, d, e, f, g, h) {
                    return c.immediateRender = 0 != c.immediateRender, c.runBackwards = !0, this.staggerTo(a, b, c, d, e, f, g, h)
                }, i.staggerFromTo = function(a, b, c, d, e, f, g, h, i) {
                    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, this.staggerTo(a, b, d, e, f, g, h, i)
                }, i.call = function(a, b, d, e) {
                    return this.add(c.delayedCall(0, a, b, d), e)
                }, i.set = function(a, b, d) {
                    return d = this._parseTimeOrLabel(d, 0, !0), null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused), this.add(new c(a, 0, b), d)
                }, d.exportRoot = function(a, b) {
                    a = a || {}, null == a.smoothChildTiming && (a.smoothChildTiming = !0);
                    var e, f, g = new d(a),
                        h = g._timeline;
                    for (null == b && (b = !0), h._remove(g, !0), g._startTime = 0, g._rawPrevTime = g._time = g._totalTime = h._time, e = h._first; e;) f = e._next, b && e instanceof c && e.target === e.vars.onComplete || g.add(e, e._startTime - e._delay), e = f;
                    return h.add(g, 0), g
                }, i.add = function(e, f, g, h) {
                    var i, j, k, l, m;
                    if ("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) {
                        if (e instanceof Array) {
                            for (g = g || "normal", h = h || 0, i = f, j = e.length, k = 0; j > k; k++)(l = e[k]) instanceof Array && (l = new d({
                                tweens: l
                            })), this.add(l, i), "string" != typeof l && "function" != typeof l && ("sequence" === g ? i = l._startTime + l.totalDuration() / l._timeScale : "start" === g && (l._startTime -= l.delay())), i += h;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof e) return this.addLabel(e, f);
                        if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is neither a tween, timeline, function, nor a string.";
                        e = c.delayedCall(0, e)
                    }
                    if (b.prototype.add.call(this, e, f), this._gc && !this._paused && this._time === this._duration && this._time < this.duration())
                        for (m = this; m._gc && m._timeline;) m._timeline.smoothChildTiming ? m.totalTime(m._totalTime, !0) : m._enabled(!0, !1), m = m._timeline;
                    return this
                }, i.remove = function(b) {
                    if (b instanceof a) return this._remove(b, !1);
                    if (b instanceof Array) {
                        for (var c = b.length; --c > -1;) this.remove(b[c]);
                        return this
                    }
                    return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b)
                }, i.append = function(a, b) {
                    return this.add(a, this._parseTimeOrLabel(null, b, !0, a))
                }, i.insert = i.insertMultiple = function(a, b, c, d) {
                    return this.add(a, b || 0, c, d)
                }, i.appendMultiple = function(a, b, c, d) {
                    return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d)
                }, i.addLabel = function(a, b) {
                    return this._labels[a] = this._parseTimeOrLabel(b), this
                }, i.removeLabel = function(a) {
                    return delete this._labels[a], this
                }, i.getLabelTime = function(a) {
                    return null != this._labels[a] ? this._labels[a] : -1
                }, i._parseTimeOrLabel = function(b, c, d, e) {
                    var f;
                    if (e instanceof a && e.timeline === this) this.remove(e);
                    else if (e instanceof Array)
                        for (f = e.length; --f > -1;) e[f] instanceof a && e[f].timeline === this && this.remove(e[f]);
                    if ("string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - this.duration() : 0, d);
                    if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = this.duration());
                    else {
                        if (f = b.indexOf("="), -1 === f) return null == this._labels[b] ? d ? this._labels[b] = this.duration() + c : c : this._labels[b] + c;
                        c = parseInt(b.charAt(f - 1) + "1", 10) * Number(b.substr(f + 1)), b = f > 1 ? this._parseTimeOrLabel(b.substr(0, f - 1), 0, d) : this.duration()
                    }
                    return Number(b) + c
                }, i.seek = function(a, b) {
                    return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1)
                }, i.stop = function() {
                    return this.paused(!0)
                }, i.gotoAndPlay = function(a, b) {
                    return this.play(a, b)
                }, i.gotoAndStop = function(a, b) {
                    return this.pause(a, b)
                }, i.render = function(a, b, c) {
                    this._gc && this._enabled(!0, !1), this._active = !this._paused;
                    var d, e, g, h, i, j = this._dirty ? this.totalDuration() : this._totalDuration,
                        k = this._time,
                        l = this._startTime,
                        m = this._timeScale,
                        n = this._paused;
                    if (a >= j ? (this._totalTime = this._time = j, this._reversed || this._hasPausedChild() || (e = !0, h = "onComplete", 0 === this._duration && (0 === a || this._rawPrevTime < 0) && this._rawPrevTime !== a && this._first && (i = !0, this._rawPrevTime > 0 && (h = "onReverseComplete"))), this._rawPrevTime = a, a = j + 1e-6) : 1e-7 > a ? (this._totalTime = this._time = 0, (0 !== k || 0 === this._duration && this._rawPrevTime > 0) && (h = "onReverseComplete", e = this._reversed), 0 > a ? (this._active = !1, 0 === this._duration && this._rawPrevTime >= 0 && this._first && (i = !0)) : this._initted || (i = !0), this._rawPrevTime = a, a = 0) : this._totalTime = this._time = this._rawPrevTime = a, this._time !== k && this._first || c || i) {
                        if (this._initted || (this._initted = !0), 0 === k && this.vars.onStart && 0 !== this._time && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || f)), this._time >= k)
                            for (d = this._first; d && (g = d._next, !this._paused || n);)(d._active || d._startTime <= this._time && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
                        else
                            for (d = this._last; d && (g = d._prev, !this._paused || n);)(d._active || d._startTime <= k && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
                        this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || f)), h && (this._gc || (l === this._startTime || m !== this._timeScale) && (0 === this._time || j >= this.totalDuration()) && (e && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[h] && this.vars[h].apply(this.vars[h + "Scope"] || this, this.vars[h + "Params"] || f)))
                    }
                }, i._hasPausedChild = function() {
                    for (var a = this._first; a;) {
                        if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
                        a = a._next
                    }
                    return !1
                }, i.getChildren = function(a, b, d, e) {
                    e = e || -9999999999;
                    for (var f = [], g = this._first, h = 0; g;) g._startTime < e || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next;
                    return f
                }, i.getTweensOf = function(a, b) {
                    for (var d = c.getTweensOf(a), e = d.length, f = [], g = 0; --e > -1;)(d[e].timeline === this || b && this._contains(d[e])) && (f[g++] = d[e]);
                    return f
                }, i._contains = function(a) {
                    for (var b = a.timeline; b;) {
                        if (b === this) return !0;
                        b = b.timeline
                    }
                    return !1
                }, i.shiftChildren = function(a, b, c) {
                    c = c || 0;
                    for (var d, e = this._first, f = this._labels; e;) e._startTime >= c && (e._startTime += a), e = e._next;
                    if (b)
                        for (d in f) f[d] >= c && (f[d] += a);
                    return this._uncache(!0)
                }, i._kill = function(a, b) {
                    if (!a && !b) return this._enabled(!1, !1);
                    for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;) c[d]._kill(a, b) && (e = !0);
                    return e
                }, i.clear = function(a) {
                    var b = this.getChildren(!1, !0, !0),
                        c = b.length;
                    for (this._time = this._totalTime = 0; --c > -1;) b[c]._enabled(!1, !1);
                    return a !== !1 && (this._labels = {}), this._uncache(!0)
                }, i.invalidate = function() {
                    for (var a = this._first; a;) a.invalidate(), a = a._next;
                    return this
                }, i._enabled = function(a, c) {
                    if (a === this._gc)
                        for (var d = this._first; d;) d._enabled(a, !0), d = d._next;
                    return b.prototype._enabled.call(this, a, c)
                }, i.progress = function(a) {
                    return arguments.length ? this.totalTime(this.duration() * a, !1) : this._time / this.duration()
                }, i.duration = function(a) {
                    return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration)
                }, i.totalDuration = function(a) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var b, c, d = 0, e = this._last, f = 999999999999; e;) b = e._prev, e._dirty && e.totalDuration(), e._startTime > f && this._sortChildren && !e._paused ? this.add(e, e._startTime - e._delay) : f = e._startTime, e._startTime < 0 && !e._paused && (d -= e._startTime, this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale), this.shiftChildren(-e._startTime, !1, -9999999999), f = 0), c = e._startTime + e._totalDuration / e._timeScale, c > d && (d = c), e = b;
                            this._duration = this._totalDuration = d, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== a && this.timeScale(this._totalDuration / a), this
                }, i.usesFrames = function() {
                    for (var b = this._timeline; b._timeline;) b = b._timeline;
                    return b === a._rootFramesTimeline
                }, i.rawTime = function() {
                    return this._paused || 0 !== this._totalTime && this._totalTime !== this._totalDuration ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, d
            }, !0), window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(a, b, c) {
                var d = function(b) {
                        a.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    e = [],
                    f = new c(null, null, 1, 0),
                    g = function(a) {
                        for (; a;) {
                            if (a._paused) return !0;
                            a = a._timeline
                        }
                        return !1
                    },
                    h = d.prototype = new a;
                return h.constructor = d, h.kill()._gc = !1, d.version = "1.9.7", h.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), a.prototype.invalidate.call(this)
                }, h.addCallback = function(a, c, d, e) {
                    return this.add(b.delayedCall(0, a, d, e), c)
                }, h.removeCallback = function(a, b) {
                    if (null == b) this._kill(null, a);
                    else
                        for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1;) c[d]._startTime === e && c[d]._enabled(!1, !1);
                    return this
                }, h.tweenTo = function(a, c) {
                    c = c || {};
                    var d, g, h = {
                        ease: f,
                        overwrite: 2,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (d in c) h[d] = c[d];
                    return h.time = this._parseTimeOrLabel(a), g = new b(this, Math.abs(Number(h.time) - this._time) / this._timeScale || .001, h), h.onStart = function() {
                        g.target.paused(!0), g.vars.time !== g.target.time() && g.duration(Math.abs(g.vars.time - g.target.time()) / g.target._timeScale), c.onStart && c.onStart.apply(c.onStartScope || g, c.onStartParams || e)
                    }, g
                }, h.tweenFromTo = function(a, b, c) {
                    c = c || {}, a = this._parseTimeOrLabel(a), c.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [a],
                        onCompleteScope: this
                    }, c.immediateRender = c.immediateRender !== !1;
                    var d = this.tweenTo(b, c);
                    return d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001)
                }, h.render = function(a, b, c) {
                    this._gc && this._enabled(!0, !1), this._active = !this._paused;
                    var d, f, g, h, i, j, k = this._dirty ? this.totalDuration() : this._totalDuration,
                        l = this._duration,
                        m = this._time,
                        n = this._totalTime,
                        o = this._startTime,
                        p = this._timeScale,
                        q = this._rawPrevTime,
                        r = this._paused,
                        s = this._cycle;
                    if (a >= k ? (this._locked || (this._totalTime = k, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (f = !0, h = "onComplete", 0 === l && (0 === a || this._rawPrevTime < 0) && this._rawPrevTime !== a && this._first && (i = !0, this._rawPrevTime > 0 && (h = "onReverseComplete"))), this._rawPrevTime = a, this._yoyo && 0 !== (1 & this._cycle) ? this._time = a = 0 : (this._time = l, a = l + 1e-6)) : 1e-7 > a ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === l && this._rawPrevTime > 0 && !this._locked) && (h = "onReverseComplete", f = this._reversed), 0 > a ? (this._active = !1, 0 === l && this._rawPrevTime >= 0 && this._first && (i = !0)) : this._initted || (i = !0), this._rawPrevTime = a, a = 0) : (this._time = this._rawPrevTime = a, this._locked || (this._totalTime = a, 0 !== this._repeat && (j = l + this._repeatDelay, this._cycle = this._totalTime / j >> 0, 0 !== this._cycle && this._cycle === this._totalTime / j && this._cycle--, this._time = this._totalTime - this._cycle * j, this._yoyo && 0 !== (1 & this._cycle) && (this._time = l - this._time), this._time > l ? (this._time = l, a = l + 1e-6) : this._time < 0 ? this._time = a = 0 : a = this._time))), this._cycle !== s && !this._locked) {
                        var t = this._yoyo && 0 !== (1 & s),
                            u = t === (this._yoyo && 0 !== (1 & this._cycle)),
                            v = this._totalTime,
                            w = this._cycle,
                            x = this._rawPrevTime,
                            y = this._time;
                        this._totalTime = s * l, this._cycle < s ? t = !t : this._totalTime += l, this._time = m, this._rawPrevTime = 0 === l ? q - 1e-5 : q, this._cycle = s, this._locked = !0, m = t ? 0 : l, this.render(m, b, 0 === l), b || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || e), u && (m = t ? l + 1e-6 : -1e-6, this.render(m, !0, !1)), this._time = y, this._totalTime = v, this._cycle = w, this._rawPrevTime = x, this._locked = !1
                    }
                    if (!(this._time !== m && this._first || c || i)) return void(n !== this._totalTime && this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || e)));
                    if (this._initted || (this._initted = !0), 0 === n && this.vars.onStart && 0 !== this._totalTime && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || e)), this._time >= m)
                        for (d = this._first; d && (g = d._next, !this._paused || r);)(d._active || d._startTime <= this._time && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
                    else
                        for (d = this._last; d && (g = d._prev, !this._paused || r);)(d._active || d._startTime <= m && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
                    this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || e)), h && (this._locked || this._gc || (o === this._startTime || p !== this._timeScale) && (0 === this._time || k >= this.totalDuration()) && (f && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[h] && this.vars[h].apply(this.vars[h + "Scope"] || this, this.vars[h + "Params"] || e)))
                }, h.getActive = function(a, b, c) {
                    null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);
                    var d, e, f = [],
                        h = this.getChildren(a, b, c),
                        i = 0,
                        j = h.length;
                    for (d = 0; j > d; d++) e = h[d], e._paused || e._timeline._time >= e._startTime && e._timeline._time < e._startTime + e._totalDuration / e._timeScale && (g(e._timeline) || (f[i++] = e));
                    return f
                }, h.getLabelAfter = function(a) {
                    a || 0 !== a && (a = this._time);
                    var b, c = this.getLabelsArray(),
                        d = c.length;
                    for (b = 0; d > b; b++)
                        if (c[b].time > a) return c[b].name;
                    return null
                }, h.getLabelBefore = function(a) {
                    null == a && (a = this._time);
                    for (var b = this.getLabelsArray(), c = b.length; --c > -1;)
                        if (b[c].time < a) return b[c].name;
                    return null
                }, h.getLabelsArray = function() {
                    var a, b = [],
                        c = 0;
                    for (a in this._labels) b[c++] = {
                        time: this._labels[a],
                        name: a
                    };
                    return b.sort(function(a, b) {
                        return a.time - b.time
                    }), b
                }, h.progress = function(a) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, h.totalProgress = function(a) {
                    return arguments.length ? this.totalTime(this.totalDuration() * a, !1) : this._totalTime / this.totalDuration()
                }, h.totalDuration = function(b) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((b - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (a.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, h.time = function(a, b) {
                    return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
                }, h.repeat = function(a) {
                    return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
                }, h.repeatDelay = function(a) {
                    return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay;
                }, h.yoyo = function(a) {
                    return arguments.length ? (this._yoyo = a, this) : this._yoyo
                }, h.currentLabel = function(a) {
                    return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1e-8)
                }, d
            }, !0),
            function() {
                var a = 180 / Math.PI,
                    b = Math.PI / 180,
                    c = [],
                    d = [],
                    e = [],
                    f = {},
                    g = function(a, b, c, d) {
                        this.a = a, this.b = b, this.c = c, this.d = d, this.da = d - a, this.ca = c - a, this.ba = b - a
                    },
                    h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    i = function(a, b, c, d) {
                        var e = {
                                a: a
                            },
                            f = {},
                            g = {},
                            h = {
                                c: d
                            },
                            i = (a + b) / 2,
                            j = (b + c) / 2,
                            k = (c + d) / 2,
                            l = (i + j) / 2,
                            m = (j + k) / 2,
                            n = (m - l) / 8;
                        return e.b = i + (a - i) / 4, f.b = l + n, e.c = f.a = (e.b + f.b) / 2, f.c = g.a = (l + m) / 2, g.b = m - n, h.b = k + (d - k) / 4, g.c = h.a = (g.b + h.b) / 2, [e, f, g, h]
                    },
                    j = function(a, b, f, g, h) {
                        var j, k, l, m, n, o, p, q, r, s, t, u, v, w = a.length - 1,
                            x = 0,
                            y = a[0].a;
                        for (j = 0; w > j; j++) n = a[x], k = n.a, l = n.d, m = a[x + 1].d, h ? (t = c[j], u = d[j], v = (u + t) * b * .25 / (g ? .5 : e[j] || .5), o = l - (l - k) * (g ? .5 * b : 0 !== t ? v / t : 0), p = l + (m - l) * (g ? .5 * b : 0 !== u ? v / u : 0), q = l - (o + ((p - o) * (3 * t / (t + u) + .5) / 4 || 0))) : (o = l - (l - k) * b * .5, p = l + (m - l) * b * .5, q = l - (o + p) / 2), o += q, p += q, n.c = r = o, n.b = 0 !== j ? y : y = n.a + .6 * (n.c - n.a), n.da = l - k, n.ca = r - k, n.ba = y - k, f ? (s = i(k, y, r, l), a.splice(x, 1, s[0], s[1], s[2], s[3]), x += 4) : x++, y = p;
                        n = a[x], n.b = y, n.c = y + .4 * (n.d - y), n.da = n.d - n.a, n.ca = n.c - n.a, n.ba = y - n.a, f && (s = i(n.a, y, n.c, n.d), a.splice(x, 1, s[0], s[1], s[2], s[3]))
                    },
                    k = function(a, b, e, f) {
                        var h, i, j, k, l, m, n = [];
                        if (f)
                            for (a = [f].concat(a), i = a.length; --i > -1;) "string" == typeof(m = a[i][b]) && "=" === m.charAt(1) && (a[i][b] = f[b] + Number(m.charAt(0) + m.substr(2)));
                        if (h = a.length - 2, 0 > h) return n[0] = new g(a[0][b], 0, 0, a[-1 > h ? 0 : 1][b]), n;
                        for (i = 0; h > i; i++) j = a[i][b], k = a[i + 1][b], n[i] = new g(j, 0, 0, k), e && (l = a[i + 2][b], c[i] = (c[i] || 0) + (k - j) * (k - j), d[i] = (d[i] || 0) + (l - k) * (l - k));
                        return n[i] = new g(a[i][b], 0, 0, a[i + 1][b]), n
                    },
                    l = function(a, b, g, i, l, m) {
                        var n, o, p, q, r, s, t, u, v = {},
                            w = [],
                            x = m || a[0];
                        l = "string" == typeof l ? "," + l + "," : h, null == b && (b = 1);
                        for (o in a[0]) w.push(o);
                        if (a.length > 1) {
                            for (u = a[a.length - 1], t = !0, n = w.length; --n > -1;)
                                if (o = w[n], Math.abs(x[o] - u[o]) > .05) {
                                    t = !1;
                                    break
                                }
                            t && (a = a.concat(), m && a.unshift(m), a.push(a[1]), m = a[a.length - 3])
                        }
                        for (c.length = d.length = e.length = 0, n = w.length; --n > -1;) o = w[n], f[o] = -1 !== l.indexOf("," + o + ","), v[o] = k(a, o, f[o], m);
                        for (n = c.length; --n > -1;) c[n] = Math.sqrt(c[n]), d[n] = Math.sqrt(d[n]);
                        if (!i) {
                            for (n = w.length; --n > -1;)
                                if (f[o])
                                    for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++) r = p[q + 1].da / d[q] + p[q].da / c[q], e[q] = (e[q] || 0) + r * r;
                            for (n = e.length; --n > -1;) e[n] = Math.sqrt(e[n])
                        }
                        for (n = w.length, q = g ? 4 : 1; --n > -1;) o = w[n], p = v[o], j(p, b, g, i, f[o]), t && (p.splice(0, q), p.splice(p.length - q, q));
                        return v
                    },
                    m = function(a, b, c) {
                        b = b || "soft";
                        var d, e, f, h, i, j, k, l, m, n, o, p = {},
                            q = "cubic" === b ? 3 : 2,
                            r = "soft" === b,
                            s = [];
                        if (r && c && (a = [c].concat(a)), null == a || a.length < q + 1) throw "invalid Bezier data";
                        for (m in a[0]) s.push(m);
                        for (j = s.length; --j > -1;) {
                            for (m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0; l > k; k++) d = null == c ? a[k][m] : "string" == typeof(o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o), r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2), i[n++] = d;
                            for (l = n - q + 1, n = 0, k = 0; l > k; k += q) d = i[k], e = i[k + 1], f = i[k + 2], h = 2 === q ? 0 : i[k + 3], i[n++] = o = 3 === q ? new g(d, e, f, h) : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f);
                            i.length = n
                        }
                        return p
                    },
                    n = function(a, b, c) {
                        for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1;)
                            for (m = a[p], f = m.a, g = m.d - f, h = m.c - f, i = m.b - f, d = e = 0, k = 1; c >= k; k++) j = o * k, l = 1 - j, d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j), n = p * c + k - 1, b[n] = (b[n] || 0) + d * d
                    },
                    o = function(a, b) {
                        b = b >> 0 || 6;
                        var c, d, e, f, g = [],
                            h = [],
                            i = 0,
                            j = 0,
                            k = b - 1,
                            l = [],
                            m = [];
                        for (c in a) n(a[c], g, b);
                        for (e = g.length, d = 0; e > d; d++) i += Math.sqrt(g[d]), f = d % b, m[f] = i, f === k && (j += i, f = d / b >> 0, l[f] = m, h[f] = j, i = 0, m = []);
                        return {
                            length: j,
                            lengths: h,
                            segments: l
                        }
                    },
                    p = window._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        API: 2,
                        global: !0,
                        init: function(a, b, c) {
                            this._target = a, b instanceof Array && (b = {
                                values: b
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
                            var d, e, f, g, h, i = b.values || [],
                                j = {},
                                k = i[0],
                                n = b.autoRotate || c.vars.orientToBezier;
                            this._autoRotate = n ? n instanceof Array ? n : [
                                ["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]
                            ] : null;
                            for (d in k) this._props.push(d);
                            for (f = this._props.length; --f > -1;) d = this._props[f], this._overwriteProps.push(d), e = this._func[d] = "function" == typeof a[d], j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]), h || j[d] !== i[0][d] && (h = j);
                            if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : m(i, b.type, j), this._segCount = this._beziers[d].length, this._timeRes) {
                                var p = o(this._beziers, this._timeRes);
                                this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (n = this._autoRotate)
                                for (n[0] instanceof Array || (this._autoRotate = n = [n]), f = n.length; --f > -1;)
                                    for (g = 0; 3 > g; g++) d = n[f][g], this._func[d] = "function" == typeof a[d] ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)] : !1;
                            return !0
                        },
                        set: function(b) {
                            var c, d, e, f, g, h, i, j, k, l, m = this._segCount,
                                n = this._func,
                                o = this._target;
                            if (this._timeRes) {
                                if (k = this._lengths, l = this._curSeg, b *= this._length, e = this._li, b > this._l2 && m - 1 > e) {
                                    for (j = m - 1; j > e && (this._l2 = k[++e]) <= b;);
                                    this._l1 = k[e - 1], this._li = e, this._curSeg = l = this._segments[e], this._s2 = l[this._s1 = this._si = 0]
                                } else if (b < this._l1 && e > 0) {
                                    for (; e > 0 && (this._l1 = k[--e]) >= b;);
                                    0 === e && b < this._l1 ? this._l1 = 0 : e++, this._l2 = k[e], this._li = e, this._curSeg = l = this._segments[e], this._s1 = l[(this._si = l.length - 1) - 1] || 0, this._s2 = l[this._si]
                                }
                                if (c = e, b -= this._l1, e = this._si, b > this._s2 && e < l.length - 1) {
                                    for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= b;);
                                    this._s1 = l[e - 1], this._si = e
                                } else if (b < this._s1 && e > 0) {
                                    for (; e > 0 && (this._s1 = l[--e]) >= b;);
                                    0 === e && b < this._s1 ? this._s1 = 0 : e++, this._s2 = l[e], this._si = e
                                }
                                h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else c = 0 > b ? 0 : b >= 1 ? m - 1 : m * b >> 0, h = (b - c * (1 / m)) * m;
                            for (d = 1 - h, e = this._props.length; --e > -1;) f = this._props[e], g = this._beziers[f][c], i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a, this._round[f] && (i = i + (i > 0 ? .5 : -.5) >> 0), n[f] ? o[f](i) : "x" == f ? o.setX(i) : "y" == f ? o.setY(i) : "z" == f ? o.setZ(i) : "angleX" == f ? o.setAngleX(i) : "angleY" == f ? o.setAngleY(i) : "angleZ" == f ? o.setAngleZ(i) : "w" == f ? o.setWidth(i) : "h" == f ? o.setHeight(i) : "alpha" == f ? o.setAlpha(i) : "scale" == f ? o.setScale2(i) : o[f] = i;
                            if (this._autoRotate) {
                                var p, q, r, s, t, u, v, w = this._autoRotate;
                                for (e = w.length; --e > -1;) f = w[e][2], u = w[e][3] || 0, v = w[e][4] === !0 ? 1 : a, g = this._beziers[w[e][0]], p = this._beziers[w[e][1]], g && p && (g = g[c], p = p[c], q = g.a + (g.b - g.a) * h, s = g.b + (g.c - g.b) * h, q += (s - q) * h, s += (g.c + (g.d - g.c) * h - s) * h, r = p.a + (p.b - p.a) * h, t = p.b + (p.c - p.b) * h, r += (t - r) * h, t += (p.c + (p.d - p.c) * h - t) * h, i = Math.atan2(t - r, s - q) * v + u, n[f] ? o[f](i) : o[f] = i)
                            }
                        }
                    }),
                    q = p.prototype;
                p.bezierThrough = l, p.cubicToQuadratic = i, p._autoCSS = !0, p.quadraticToCubic = function(a, b, c) {
                    return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c)
                }, p._cssRegister = function() {
                    var a = window._gsDefine.globals.CSSPlugin;
                    if (a) {
                        var c = a._internals,
                            d = c._parseToProxy,
                            e = c._setPluginRatio,
                            f = c.CSSPropTween;
                        c._registerComplexSpecialProp("bezier", {
                            parser: function(a, c, g, h, i, j) {
                                c instanceof Array && (c = {
                                    values: c
                                }), j = new p;
                                var k, l, m, n = c.values,
                                    o = n.length - 1,
                                    q = [],
                                    r = {};
                                if (0 > o) return i;
                                for (k = 0; o >= k; k++) m = d(a, n[k], h, i, j, o !== k), q[k] = m.end;
                                for (l in c) r[l] = c[l];
                                return r.values = q, i = new f(a, "bezier", 0, 0, m.pt, 2), i.data = m, i.plugin = j, i.setRatio = e, 0 === r.autoRotate && (r.autoRotate = !0), !r.autoRotate || r.autoRotate instanceof Array || (k = r.autoRotate === !0 ? 0 : Number(r.autoRotate) * b, r.autoRotate = null != m.end.left ? [
                                    ["left", "top", "rotation", k, !0]
                                ] : null != m.end.x ? [
                                    ["x", "y", "rotation", k, !0]
                                ] : !1), r.autoRotate && (h._transform || h._enableTransforms(!1), m.autoRotate = h._target._gsTransform), j._onInitTween(m.proxy, r, h._tween), i
                            }
                        })
                    }
                }, q._roundProps = function(a, b) {
                    for (var c = this._overwriteProps, d = c.length; --d > -1;)(a[c[d]] || a.bezier || a.bezierThrough) && (this._round[c[d]] = b)
                }, q._kill = function(a) {
                    var b, c, d = this._props;
                    for (b in this._beziers)
                        if (b in a)
                            for (delete this._beziers[b], delete this._func[b], c = d.length; --c > -1;) d[c] === b && d.splice(c, 1);
                    return this._super._kill.call(this, a)
                }
            }(), window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(a, b) {
                var c, d, e, f, g = function() {
                        a.call(this, "css"), this._overwriteProps.length = 0
                    },
                    h = {},
                    i = g.prototype = new a("css");
                i.constructor = g, g.version = "1.9.7", g.API = 2, g.defaultTransformPerspective = 0, i = "px", g.suffixMap = {
                    top: i,
                    right: i,
                    bottom: i,
                    left: i,
                    width: i,
                    height: i,
                    fontSize: i,
                    padding: i,
                    margin: i,
                    perspective: i
                };
                var j, k, l, m, n, o, p = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    q = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    r = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    s = /[^\d\-\.]/g,
                    t = /(?:\d|\-|\+|=|#|\.)*/g,
                    u = /opacity *= *([^)]*)/,
                    v = /opacity:([^;]*)/,
                    w = /alpha\(opacity *=.+?\)/i,
                    x = /^(rgb|hsl)/,
                    y = /([A-Z])/g,
                    z = /-([a-z])/gi,
                    A = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    B = function(a, b) {
                        return b.toUpperCase()
                    },
                    C = /(?:Left|Right|Width)/i,
                    D = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    E = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    F = /,(?=[^\)]*(?:\(|$))/gi,
                    G = Math.PI / 180,
                    H = 180 / Math.PI,
                    I = {},
                    J = document,
                    K = J.createElement("div"),
                    L = J.createElement("img"),
                    M = g._internals = {
                        _specialProps: h
                    },
                    N = navigator.userAgent,
                    O = function() {
                        var a, b = N.indexOf("Android"),
                            c = J.createElement("div");
                        return l = -1 !== N.indexOf("Safari") && -1 === N.indexOf("Chrome") && (-1 === b || Number(N.substr(b + 8, 1)) > 3), n = l && Number(N.substr(N.indexOf("Version/") + 8, 1)) < 6, m = -1 !== N.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(N), o = parseFloat(RegExp.$1), c.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", a = c.getElementsByTagName("a")[0], a ? /^0.55/.test(a.style.opacity) : !1
                    }(),
                    P = function(a) {
                        return u.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    Q = function(a) {
                        window.console && console.log(a)
                    },
                    R = "",
                    S = "",
                    T = function(a, b) {
                        b = b || K;
                        var c, d, e = b.style;
                        if (void 0 !== e[a]) return a;
                        for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];);
                        return d >= 0 ? (S = 3 === d ? "ms" : c[d], R = "-" + S.toLowerCase() + "-", S + a) : null
                    },
                    U = J.defaultView ? J.defaultView.getComputedStyle : function() {},
                    V = g.getStyle = function(a, b, c, d, e) {
                        var f;
                        return O || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || U(a, null)) ? (a = c.getPropertyValue(b.replace(y, "-$1").toLowerCase()), f = a || c.length ? a : c[b]) : a.currentStyle && (c = a.currentStyle, f = c[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : P(a)
                    },
                    W = function(a, b, c, d, e) {
                        if ("px" === d || !d) return c;
                        if ("auto" === d || !c) return 0;
                        var f, g = C.test(b),
                            h = a,
                            i = K.style,
                            j = 0 > c;
                        return j && (c = -c), "%" === d && -1 !== b.indexOf("border") ? f = c / 100 * (g ? a.clientWidth : a.clientHeight) : (i.cssText = "border-style:solid; border-width:0; position:absolute; line-height:0;", "%" !== d && h.appendChild ? i[g ? "borderLeftWidth" : "borderTopWidth"] = c + d : (h = a.parentNode || J.body, i[g ? "width" : "height"] = c + d), h.appendChild(K), f = parseFloat(K[g ? "offsetWidth" : "offsetHeight"]), h.removeChild(K), 0 !== f || e || (f = W(a, b, c, d, !0))), j ? -f : f
                    },
                    X = function(a, b, c) {
                        if ("absolute" !== V(a, "position", c)) return 0;
                        var d = "left" === b ? "Left" : "Top",
                            e = V(a, "margin" + d, c);
                        return a["offset" + d] - (W(a, b, parseFloat(e), e.replace(t, "")) || 0)
                    },
                    Y = function(a, b) {
                        var c, d, e = {};
                        if (b = b || U(a, null))
                            if (c = b.length)
                                for (; --c > -1;) e[b[c].replace(z, B)] = b.getPropertyValue(b[c]);
                            else
                                for (c in b) e[c] = b[c];
                        else if (b = a.currentStyle || a.style)
                            for (c in b) e[c.replace(z, B)] = b[c];
                        return O || (e.opacity = P(a)), d = xa(a, b, !1), e.rotation = d.rotation * H, e.skewX = d.skewX * H, e.scaleX = d.scaleX, e.scaleY = d.scaleY, e.x = d.x, e.y = d.y, wa && (e.z = d.z, e.rotationX = d.rotationX * H, e.rotationY = d.rotationY * H, e.scaleZ = d.scaleZ), e.filters && delete e.filters, e
                    },
                    Z = function(a, b, c, d, e) {
                        var f, g, h, i = {},
                            j = a.style;
                        for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(s, "") ? f : 0 : X(a, g), void 0 !== j[g] && (h = new la(j, g, j[g], h)));
                        if (d)
                            for (g in d) "className" !== g && (i[g] = d[g]);
                        return {
                            difs: i,
                            firstMPT: h
                        }
                    },
                    $ = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    _ = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    aa = function(a, b, c) {
                        var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
                            e = $[b],
                            f = e.length;
                        for (c = c || U(a, null); --f > -1;) d -= parseFloat(V(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(V(a, "border" + e[f] + "Width", c, !0)) || 0;
                        return d
                    },
                    ba = function(a, b) {
                        (null == a || "" === a || "auto" === a || "auto auto" === a) && (a = "0 0");
                        var c = a.split(" "),
                            d = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : c[0],
                            e = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : c[1];
                        return null == e ? e = "0" : "center" === e && (e = "50%"), ("center" === d || isNaN(parseFloat(d))) && (d = "50%"), b && (b.oxp = -1 !== d.indexOf("%"), b.oyp = -1 !== e.indexOf("%"), b.oxr = "=" === d.charAt(1), b.oyr = "=" === e.charAt(1), b.ox = parseFloat(d.replace(s, "")), b.oy = parseFloat(e.replace(s, ""))), d + " " + e + (c.length > 2 ? " " + c[2] : "")
                    },
                    ca = function(a, b) {
                        return "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b)
                    },
                    da = function(a, b) {
                        return null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * Number(a.substr(2)) + b : parseFloat(a)
                    },
                    ea = function(a, b, c, d) {
                        var e, f, g, h, i = 1e-6;
                        return null == a ? h = b : "number" == typeof a ? h = a * G : (e = 2 * Math.PI, f = a.split("_"), g = Number(f[0].replace(s, "")) * (-1 === a.indexOf("rad") ? G : 1) - ("=" === a.charAt(1) ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)), h = b + g), i > h && h > -i && (h = 0), h
                    },
                    fa = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    ga = function(a, b, c) {
                        return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0
                    },
                    ha = function(a) {
                        var b, c, d, e, f, g;
                        return a && "" !== a ? "number" == typeof a ? [a >> 16, a >> 8 & 255, 255 & a] : ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), fa[a] ? fa[a] : "#" === a.charAt(0) ? (4 === a.length && (b = a.charAt(1), c = a.charAt(2), d = a.charAt(3), a = "#" + b + b + c + c + d + d), a = parseInt(a.substr(1), 16), [a >> 16, a >> 8 & 255, 255 & a]) : "hsl" === a.substr(0, 3) ? (a = a.match(p), e = Number(a[0]) % 360 / 360, f = Number(a[1]) / 100, g = Number(a[2]) / 100, c = .5 >= g ? g * (f + 1) : g + f - g * f, b = 2 * g - c, a.length > 3 && (a[3] = Number(a[3])), a[0] = ga(e + 1 / 3, b, c), a[1] = ga(e, b, c), a[2] = ga(e - 1 / 3, b, c), a) : (a = a.match(p) || fa.transparent, a[0] = Number(a[0]), a[1] = Number(a[1]), a[2] = Number(a[2]), a.length > 3 && (a[3] = Number(a[3])), a)) : fa.black
                    },
                    ia = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (i in fa) ia += "|" + i + "\\b";
                ia = new RegExp(ia + ")", "gi");
                var ja = function(a, b, c, d) {
                        if (null == a) return function(a) {
                            return a
                        };
                        var e, f = b ? (a.match(ia) || [""])[0] : "",
                            g = a.split(f).join("").match(r) || [],
                            h = a.substr(0, a.indexOf(g[0])),
                            i = ")" === a.charAt(a.length - 1) ? ")" : "",
                            j = -1 !== a.indexOf(" ") ? " " : ",",
                            k = g.length,
                            l = k > 0 ? g[0].replace(p, "") : "";
                        return k ? e = b ? function(a) {
                            var b, m, n, o;
                            if ("number" == typeof a) a += l;
                            else if (d && F.test(a)) {
                                for (o = a.replace(F, "|").split("|"), n = 0; n < o.length; n++) o[n] = e(o[n]);
                                return o.join(",")
                            }
                            if (b = (a.match(ia) || [f])[0], m = a.split(b).join("").match(r) || [], n = m.length, k > n--)
                                for (; ++n < k;) m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
                            return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "")
                        } : function(a) {
                            var b, f, m;
                            if ("number" == typeof a) a += l;
                            else if (d && F.test(a)) {
                                for (f = a.replace(F, "|").split("|"), m = 0; m < f.length; m++) f[m] = e(f[m]);
                                return f.join(",")
                            }
                            if (b = a.match(r) || [], m = b.length, k > m--)
                                for (; ++m < k;) b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
                            return h + b.join(j) + i
                        } : function(a) {
                            return a
                        }
                    },
                    ka = function(a) {
                        return a = a.split(","),
                            function(b, c, d, e, f, g, h) {
                                var i, j = (c + "").split(" ");
                                for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                                return e.parse(b, h, f, g)
                            }
                    },
                    la = (M._setPluginRatio = function(a) {
                        this.plugin.setRatio(a);
                        for (var b, c, d, e, f = this.data, g = f.proxy, h = f.firstMPT, i = 1e-6; h;) b = g[h.v], h.r ? b = b > 0 ? b + .5 | 0 : b - .5 | 0 : i > b && b > -i && (b = 0), h.t[h.p] = b, h = h._next;
                        if (f.autoRotate && (f.autoRotate.rotation = g.rotation), 1 === a)
                            for (h = f.firstMPT; h;) {
                                if (c = h.t, c.type) {
                                    if (1 === c.type) {
                                        for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) e += c["xn" + d] + c["xs" + (d + 1)];
                                        c.e = e
                                    }
                                } else c.e = c.s + c.xs0;
                                h = h._next
                            }
                    }, function(a, b, c, d, e) {
                        this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d)
                    }),
                    ma = (M._parseToProxy = function(a, b, c, d, e, f) {
                        var g, h, i, j, k, l = d,
                            m = {},
                            n = {},
                            o = c._transform,
                            p = I;
                        for (c._transform = null, I = b, d = k = c.parse(a, b, d, e), I = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) {
                            if (d.type <= 1 && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new la(d, "s", h, j, d.r), d.c = 0), 1 === d.type))
                                for (g = d.l; --g > 0;) i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new la(d, i, h, j, d.rxp[i]));
                            d = d._next
                        }
                        return {
                            proxy: m,
                            end: n,
                            firstMPT: j,
                            pt: k
                        }
                    }, M.CSSPropTween = function(a, b, d, e, g, h, i, j, k, l, m) {
                        this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || "css_" + b, a instanceof ma || f.push(this.n), this.r = j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this)
                    }),
                    na = g.parseComplex = function(a, b, c, d, e, f, g, h, i, k) {
                        c = c || f || "", g = new ma(a, b, 0, 0, g, k ? 2 : 1, null, !1, h, c, d), d += "";
                        var l, m, n, o, r, s, t, u, v, w, y, z, A = c.split(", ").join(",").split(" "),
                            B = d.split(", ").join(",").split(" "),
                            C = A.length,
                            D = j !== !1;
                        for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (A = A.join(" ").replace(F, ", ").split(" "), B = B.join(" ").replace(F, ", ").split(" "), C = A.length), C !== B.length && (A = (f || "").split(" "), C = A.length), g.plugin = i, g.setRatio = k, l = 0; C > l; l++)
                            if (o = A[l], r = B[l], u = parseFloat(o), u || 0 === u) g.appendXtra("", u, ca(r, u), r.replace(q, ""), D && -1 !== r.indexOf("px"), !0);
                            else if (e && ("#" === o.charAt(0) || fa[o] || x.test(o))) z = "," === r.charAt(r.length - 1) ? ")," : ")", o = ha(o), r = ha(r), v = o.length + r.length > 6, v && !O && 0 === r[3] ? (g["xs" + g.l] += g.l ? " transparent" : "transparent", g.e = g.e.split(B[l]).join("transparent")) : (O || (v = !1), g.appendXtra(v ? "rgba(" : "rgb(", o[0], r[0] - o[0], ",", !0, !0).appendXtra("", o[1], r[1] - o[1], ",", !0).appendXtra("", o[2], r[2] - o[2], v ? "," : z, !0), v && (o = o.length < 4 ? 1 : o[3], g.appendXtra("", o, (r.length < 4 ? 1 : r[3]) - o, z, !1)));
                        else if (s = o.match(p)) {
                            if (t = r.match(q), !t || t.length !== s.length) return g;
                            for (n = 0, m = 0; m < s.length; m++) y = s[m], w = o.indexOf(y, n), g.appendXtra(o.substr(n, w - n), Number(y), ca(t[m], y), "", D && "px" === o.substr(w + y.length, 2), 0 === m), n = w + y.length;
                            g["xs" + g.l] += o.substr(n)
                        } else g["xs" + g.l] += g.l ? " " + o : o;
                        if (-1 !== d.indexOf("=") && g.data) {
                            for (z = g.xs0 + g.data.s, l = 1; l < g.l; l++) z += g["xs" + l] + g.data["xn" + l];
                            g.e = z + g["xs" + l]
                        }
                        return g.l || (g.type = -1, g.xs0 = g.e), g.xfirst || g
                    },
                    oa = 9;
                for (i = ma.prototype, i.l = i.pr = 0; --oa > 0;) i["xn" + oa] = 0, i["xs" + oa] = "";
                i.xs0 = "", i._next = i._prev = i.xfirst = i.data = i.plugin = i.setRatio = i.rxp = null, i.appendXtra = function(a, b, c, d, e, f) {
                    var g = this,
                        h = g.l;
                    return g["xs" + h] += f && h ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new ma(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {
                        s: b + c
                    }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g)
                };
                var pa = function(a, b) {
                        b = b || {}, this.p = b.prefix ? T(a) || a : a, h[a] = h[this.p] = this, this.format = b.formatter || ja(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0
                    },
                    qa = M._registerComplexSpecialProp = function(a, b, c) {
                        "object" != typeof b && (b = {
                            parser: c
                        });
                        var d, e, f = a.split(","),
                            g = b.defaultValue;
                        for (c = c || [g], d = 0; d < f.length; d++) b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new pa(f[d], b)
                    },
                    ra = function(a) {
                        if (!h[a]) {
                            var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                            qa(a, {
                                parser: function(a, c, d, e, f, g, i) {
                                    var j = (window.GreenSockGlobals || window).com.greensock.plugins[b];
                                    return j ? (j._cssRegister(), h[d].parse(a, c, d, e, f, g, i)) : (Q("Error: " + b + " js file not loaded."), f)
                                }
                            })
                        }
                    };
                i = pa.prototype, i.parseComplex = function(a, b, c, d, e, f) {
                    var g, h, i, j, k, l, m = this.keyword;
                    if (this.multi && (F.test(c) || F.test(b) ? (h = b.replace(F, "|").split("|"), i = c.replace(F, "|").split("|")) : m && (h = [b], i = [c])), i) {
                        for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (c = -1 === l ? i : h, c[g] += " " + m));
                        b = h.join(", "), c = i.join(", ")
                    }
                    return na(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
                }, i.parse = function(a, b, c, d, f, g) {
                    return this.parseComplex(a.style, this.format(V(a, this.p, e, !1, this.dflt)), this.format(b), f, g)
                }, g.registerSpecialProp = function(a, b, c) {
                    qa(a, {
                        parser: function(a, d, e, f, g, h) {
                            var i = new ma(a, e, 0, 0, g, 2, e, !1, c);
                            return i.plugin = h, i.setRatio = b(a, d, f._tween, e), i
                        },
                        priority: c
                    })
                };
                var sa = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
                    ta = T("transform"),
                    ua = R + "transform",
                    va = T("transformOrigin"),
                    wa = null !== T("perspective"),
                    xa = function(a, b, c) {
                        var d, e, f, h, i, j, k, l, m, n, o, p, q, r = c ? a._gsTransform || {
                                skewY: 0
                            } : {
                                skewY: 0
                            },
                            s = r.scaleX < 0,
                            t = 2e-5,
                            u = 1e5,
                            v = -Math.PI + 1e-4,
                            w = Math.PI - 1e-4,
                            x = wa ? parseFloat(V(a, va, b, !1, "0 0 0").split(" ")[2]) || r.zOrigin || 0 : 0;
                        if (ta) d = V(a, ua, b, !0);
                        else if (a.currentStyle)
                            if (d = a.currentStyle.filter.match(D), d && 4 === d.length) d = [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), r.x || 0, r.y || 0].join(",");
                            else {
                                if (null != r.x) return r;
                                d = ""
                            }
                        for (e = (d || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], f = e.length; --f > -1;) h = Number(e[f]), e[f] = (i = h - (h |= 0)) ? (i * u + (0 > i ? -.5 : .5) | 0) / u + h : h;
                        if (16 === e.length) {
                            var y = e[8],
                                z = e[9],
                                A = e[10],
                                B = e[12],
                                C = e[13],
                                E = e[14];
                            if (r.zOrigin && (E = -r.zOrigin, B = y * E - e[12], C = z * E - e[13], E = A * E + r.zOrigin - e[14]), !c || null == r.rotationX) {
                                var F, G, H, I, J, K, L, M = e[0],
                                    N = e[1],
                                    O = e[2],
                                    P = e[3],
                                    Q = e[4],
                                    R = e[5],
                                    S = e[6],
                                    T = e[7],
                                    U = e[11],
                                    W = r.rotationX = Math.atan2(S, A),
                                    X = v > W || W > w;
                                W && (I = Math.cos(-W), J = Math.sin(-W), F = Q * I + y * J, G = R * I + z * J, H = S * I + A * J, y = Q * -J + y * I, z = R * -J + z * I, A = S * -J + A * I, U = T * -J + U * I, Q = F, R = G, S = H), W = r.rotationY = Math.atan2(y, M), W && (K = v > W || W > w, I = Math.cos(-W), J = Math.sin(-W), F = M * I - y * J, G = N * I - z * J, H = O * I - A * J, z = N * J + z * I, A = O * J + A * I, U = P * J + U * I, M = F, N = G, O = H), W = r.rotation = Math.atan2(N, R), W && (L = v > W || W > w, I = Math.cos(-W), J = Math.sin(-W), M = M * I + Q * J, G = N * I + R * J, R = N * -J + R * I, S = O * -J + S * I, N = G), L && X ? r.rotation = r.rotationX = 0 : L && K ? r.rotation = r.rotationY = 0 : K && X && (r.rotationY = r.rotationX = 0), r.scaleX = (Math.sqrt(M * M + N * N) * u + .5 | 0) / u, r.scaleY = (Math.sqrt(R * R + z * z) * u + .5 | 0) / u, r.scaleZ = (Math.sqrt(S * S + A * A) * u + .5 | 0) / u, r.skewX = 0, r.perspective = U ? 1 / (0 > U ? -U : U) : 0, r.x = B, r.y = C, r.z = E
                            }
                        } else if (!(wa && 0 !== e.length && r.x === e[4] && r.y === e[5] && (r.rotationX || r.rotationY) || void 0 !== r.x && "none" === V(a, "display", b))) {
                            var Y = e.length >= 6,
                                Z = Y ? e[0] : 1,
                                $ = e[1] || 0,
                                _ = e[2] || 0,
                                aa = Y ? e[3] : 1;
                            r.x = e[4] || 0, r.y = e[5] || 0, j = Math.sqrt(Z * Z + $ * $), k = Math.sqrt(aa * aa + _ * _), l = Z || $ ? Math.atan2($, Z) : r.rotation || 0, m = _ || aa ? Math.atan2(_, aa) + l : r.skewX || 0, n = j - Math.abs(r.scaleX || 0), o = k - Math.abs(r.scaleY || 0), Math.abs(m) > Math.PI / 2 && Math.abs(m) < 1.5 * Math.PI && (s ? (j *= -1, m += 0 >= l ? Math.PI : -Math.PI, l += 0 >= l ? Math.PI : -Math.PI) : (k *= -1, m += 0 >= m ? Math.PI : -Math.PI)), p = (l - r.rotation) % Math.PI, q = (m - r.skewX) % Math.PI, (void 0 === r.skewX || n > t || -t > n || o > t || -t > o || p > v && w > p && p * u | !1 || q > v && w > q && q * u | !1) && (r.scaleX = j, r.scaleY = k, r.rotation = l, r.skewX = m), wa && (r.rotationX = r.rotationY = r.z = 0, r.perspective = parseFloat(g.defaultTransformPerspective) || 0, r.scaleZ = 1)
                        }
                        r.zOrigin = x;
                        for (f in r) r[f] < t && r[f] > -t && (r[f] = 0);
                        return c && (a._gsTransform = r), r
                    },
                    ya = function(a) {
                        var b, c, d = this.data,
                            e = -d.rotation,
                            f = e + d.skewX,
                            g = 1e5,
                            h = (Math.cos(e) * d.scaleX * g | 0) / g,
                            i = (Math.sin(e) * d.scaleX * g | 0) / g,
                            j = (Math.sin(f) * -d.scaleY * g | 0) / g,
                            k = (Math.cos(f) * d.scaleY * g | 0) / g,
                            l = this.t.style,
                            m = this.t.currentStyle;
                        if (m) {
                            c = i, i = -j, j = -c, b = m.filter, l.filter = "";
                            var n, p, q = this.t.offsetWidth,
                                r = this.t.offsetHeight,
                                s = "absolute" !== m.position,
                                v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
                                w = d.x,
                                x = d.y;
                            if (null != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2, p = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2, w += n - (n * h + p * i), x += p - (n * j + p * k)), s) n = q / 2, p = r / 2, v += ", Dx=" + (n - (n * h + p * i) + w) + ", Dy=" + (p - (n * j + p * k) + x) + ")";
                            else {
                                var y, z, A, B = 8 > o ? 1 : -1;
                                for (n = d.ieOffsetX || 0, p = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + w), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + x), oa = 0; 4 > oa; oa++) z = _[oa], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : W(this.t, z, parseFloat(y), y.replace(t, "")) || 0, A = c !== d[z] ? 2 > oa ? -d.ieOffsetX : -d.ieOffsetY : 2 > oa ? n - d.ieOffsetX : p - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === oa || 2 === oa ? 1 : B))) + "px";
                                v += ", sizingMethod='auto expand')"
                            }
                            l.filter = -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? b.replace(E, v) : v + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === v.indexOf("Dx=0, Dy=0") || u.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf("gradient(") && l.removeAttribute("filter"))
                        }
                    },
                    za = function() {
                        var a, b, c, d, e, f, g, h, i, j = this.data,
                            k = this.t.style,
                            l = j.perspective,
                            n = j.scaleX,
                            o = 0,
                            p = 0,
                            q = 0,
                            r = 0,
                            s = j.scaleY,
                            t = 0,
                            u = 0,
                            v = 0,
                            w = 0,
                            x = j.scaleZ,
                            y = 0,
                            z = 0,
                            A = 0,
                            B = l ? -1 / l : 0,
                            C = j.rotation,
                            D = j.zOrigin,
                            E = 1e5;
                        m && (g = k.top ? "top" : k.bottom ? "bottom" : parseFloat(V(this.t, "top", null, !1)) ? "bottom" : "top", c = V(this.t, g, null, !1), h = parseFloat(c) || 0, i = c.substr((h + "").length) || "px", j._ffFix = !j._ffFix, k[g] = (j._ffFix ? h + .05 : h - .05) + i), (C || j.skewX) && (c = n * Math.cos(C), d = s * Math.sin(C), C -= j.skewX, o = n * -Math.sin(C), s *= Math.cos(C), n = c, r = d), C = j.rotationY, C && (a = Math.cos(C), b = Math.sin(C), c = n * a, d = r * a, e = x * -b, f = B * -b, p = n * b, t = r * b, x *= a, B *= a, n = c, r = d, v = e, z = f), C = j.rotationX, C && (a = Math.cos(C), b = Math.sin(C), c = o * a + p * b, d = s * a + t * b, e = w * a + x * b, f = A * a + B * b, p = o * -b + p * a, t = s * -b + t * a, x = w * -b + x * a, B = A * -b + B * a, o = c, s = d, w = e, A = f), D && (y -= D, q = p * y, u = t * y, y = x * y + D), q = (c = (q += j.x) - (q |= 0)) ? (c * E + (0 > c ? -.5 : .5) | 0) / E + q : q, u = (c = (u += j.y) - (u |= 0)) ? (c * E + (0 > c ? -.5 : .5) | 0) / E + u : u, y = (c = (y += j.z) - (y |= 0)) ? (c * E + (0 > c ? -.5 : .5) | 0) / E + y : y, k[ta] = "matrix3d(" + [(n * E | 0) / E, (r * E | 0) / E, (v * E | 0) / E, (z * E | 0) / E, (o * E | 0) / E, (s * E | 0) / E, (w * E | 0) / E, (A * E | 0) / E, (p * E | 0) / E, (t * E | 0) / E, (x * E | 0) / E, (B * E | 0) / E, q, u, y, l ? 1 + -y / l : 1].join(",") + ")"
                    },
                    Aa = function() {
                        var a, b, c, d, e, f, g, h, i, j = this.data,
                            k = this.t,
                            l = k.style;
                        m && (a = l.top ? "top" : l.bottom ? "bottom" : parseFloat(V(k, "top", null, !1)) ? "bottom" : "top", b = V(k, a, null, !1), c = parseFloat(b) || 0, d = b.substr((c + "").length) || "px", j._ffFix = !j._ffFix, l[a] = (j._ffFix ? c + .05 : c - .05) + d), j.rotation || j.skewX ? (e = j.rotation, f = e - j.skewX, g = 1e5, h = j.scaleX * g, i = j.scaleY * g, l[ta] = "matrix(" + (Math.cos(e) * h | 0) / g + "," + (Math.sin(e) * h | 0) / g + "," + (Math.sin(f) * -i | 0) / g + "," + (Math.cos(f) * i | 0) / g + "," + j.x + "," + j.y + ")") : l[ta] = "matrix(" + j.scaleX + ",0,0," + j.scaleY + "," + j.x + "," + j.y + ")"
                    };
                qa("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation", {
                    parser: function(a, b, c, d, f, g, h) {
                        if (d._transform) return f;
                        var i, j, k, l, m, n, o, p = d._transform = xa(a, e, !0),
                            q = a.style,
                            r = 1e-6,
                            s = sa.length,
                            t = h,
                            u = {};
                        if ("string" == typeof t.transform && ta) k = q.cssText, q[ta] = t.transform, q.display = "block", i = xa(a, null, !1), q.cssText = k;
                        else if ("object" == typeof t) {
                            if (i = {
                                    scaleX: da(null != t.scaleX ? t.scaleX : t.scale, p.scaleX),
                                    scaleY: da(null != t.scaleY ? t.scaleY : t.scale, p.scaleY),
                                    scaleZ: da(null != t.scaleZ ? t.scaleZ : t.scale, p.scaleZ),
                                    x: da(t.x, p.x),
                                    y: da(t.y, p.y),
                                    z: da(t.z, p.z),
                                    perspective: da(t.transformPerspective, p.perspective)
                                }, o = t.directionalRotation, null != o)
                                if ("object" == typeof o)
                                    for (k in o) t[k] = o[k];
                                else t.rotation = o;
                            i.rotation = ea("rotation" in t ? t.rotation : "shortRotation" in t ? t.shortRotation + "_short" : "rotationZ" in t ? t.rotationZ : p.rotation * H, p.rotation, "rotation", u), wa && (i.rotationX = ea("rotationX" in t ? t.rotationX : "shortRotationX" in t ? t.shortRotationX + "_short" : p.rotationX * H || 0, p.rotationX, "rotationX", u), i.rotationY = ea("rotationY" in t ? t.rotationY : "shortRotationY" in t ? t.shortRotationY + "_short" : p.rotationY * H || 0, p.rotationY, "rotationY", u)), i.skewX = null == t.skewX ? p.skewX : ea(t.skewX, p.skewX), i.skewY = null == t.skewY ? p.skewY : ea(t.skewY, p.skewY), (j = i.skewY - p.skewY) && (i.skewX += j, i.rotation += j)
                        }
                        for (m = p.z || p.rotationX || p.rotationY || i.z || i.rotationX || i.rotationY || i.perspective, m || null == t.scale || (i.scaleZ = 1); --s > -1;) c = sa[s], l = i[c] - p[c], (l > r || -r > l || null != I[c]) && (n = !0, f = new ma(p, c, p[c], l, f), c in u && (f.e = u[c]), f.xs0 = 0, f.plugin = g, d._overwriteProps.push(f.n));
                        return l = t.transformOrigin, (l || wa && m && p.zOrigin) && (ta ? (n = !0, l = (l || V(a, c, e, !1, "50% 50%")) + "", c = va, f = new ma(q, c, 0, 0, f, -1, "css_transformOrigin"), f.b = q[c], f.plugin = g, wa ? (k = p.zOrigin, l = l.split(" "), p.zOrigin = (l.length > 2 ? parseFloat(l[2]) : k) || 0, f.xs0 = f.e = q[c] = l[0] + " " + (l[1] || "50%") + " 0px", f = new ma(p, "zOrigin", 0, 0, f, -1, f.n), f.b = k, f.xs0 = f.e = p.zOrigin) : f.xs0 = f.e = q[c] = l) : ba(l + "", p)), n && (d._transformType = m || 3 === this._transformType ? 3 : 2), f
                    },
                    prefix: !0
                }), qa("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), qa("borderRadius", {
                    defaultValue: "0px",
                    parser: function(a, b, c, f, g) {
                        b = this.format(b);
                        var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            y = a.style;
                        for (p = parseFloat(a.offsetWidth), q = parseFloat(a.offsetHeight), h = b.split(" "), i = 0; i < x.length; i++) this.p.indexOf("border") && (x[i] = T(x[i])), l = k = V(a, x[i], e, !1, "0px"), -1 !== l.indexOf(" ") && (k = l.split(" "), l = k[0], k = k[1]), m = j = h[i], n = parseFloat(l), s = l.substr((n + "").length), t = "=" === m.charAt(1), t ? (o = parseInt(m.charAt(0) + "1", 10), m = m.substr(2), o *= parseFloat(m), r = m.substr((o + "").length - (0 > o ? 1 : 0)) || "") : (o = parseFloat(m), r = m.substr((o + "").length)), "" === r && (r = d[c] || s), r !== s && (u = W(a, "borderLeft", n, s), v = W(a, "borderTop", n, s), "%" === r ? (l = u / p * 100 + "%", k = v / q * 100 + "%") : "em" === r ? (w = W(a, "borderLeft", 1, "em"), l = u / w + "em", k = v / w + "em") : (l = u + "px", k = v + "px"), t && (m = parseFloat(l) + o + r, j = parseFloat(k) + o + r)), g = na(y, x[i], l + " " + k, m + " " + j, !1, "0px", g);
                        return g
                    },
                    prefix: !0,
                    formatter: ja("0px 0px 0px 0px", !1, !0)
                }), qa("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(a, b, c, d, f, g) {
                        var h, i, j, k, l, m, n = "background-position",
                            p = e || U(a, null),
                            q = this.format((p ? o ? p.getPropertyValue(n + "-x") + " " + p.getPropertyValue(n + "-y") : p.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
                            r = this.format(b);
                        if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && (m = V(a, "backgroundImage").replace(A, ""), m && "none" !== m)) {
                            for (h = q.split(" "), i = r.split(" "), L.setAttribute("src", m), j = 2; --j > -1;) q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - L.width : a.offsetHeight - L.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
                            q = h.join(" ")
                        }
                        return this.parseComplex(a.style, q, r, f, g)
                    },
                    formatter: ba
                }), qa("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: ba
                }), qa("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), qa("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), qa("transformStyle", {
                    prefix: !0
                }), qa("backfaceVisibility", {
                    prefix: !0
                }), qa("margin", {
                    parser: ka("marginTop,marginRight,marginBottom,marginLeft")
                }), qa("padding", {
                    parser: ka("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), qa("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(a, b, c, d, f, g) {
                        var h, i, j;
                        return 9 > o ? (i = a.currentStyle, j = 8 > o ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format(V(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g)
                    }
                }), qa("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), qa("autoRound,strictUnits", {
                    parser: function(a, b, c, d, e) {
                        return e
                    }
                }), qa("border", {
                    defaultValue: "0px solid #000",
                    parser: function(a, b, c, d, f, g) {
                        return this.parseComplex(a.style, this.format(V(a, "borderTopWidth", e, !1, "0px") + " " + V(a, "borderTopStyle", e, !1, "solid") + " " + V(a, "borderTopColor", e, !1, "#000")), this.format(b), f, g)
                    },
                    color: !0,
                    formatter: function(a) {
                        var b = a.split(" ");
                        return b[0] + " " + (b[1] || "solid") + " " + (a.match(ia) || ["#000"])[0]
                    }
                }), qa("float,cssFloat,styleFloat", {
                    parser: function(a, b, c, d, e) {
                        var f = a.style,
                            g = "cssFloat" in f ? "cssFloat" : "styleFloat";
                        return new ma(f, g, 0, 0, e, -1, c, !1, 0, f[g], b)
                    }
                });
                var Ba = function(a) {
                    var b, c = this.t,
                        d = c.filter,
                        e = this.s + this.c * a | 0;
                    100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") ? (c.removeAttribute("filter"), b = !V(this.data, "filter")) : (c.filter = d.replace(w, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=100)"), -1 === d.indexOf("opacity") ? c.filter += " alpha(opacity=" + e + ")" : c.filter = d.replace(u, "opacity=" + e))
                };
                qa("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(a, b, c, d, f, g) {
                        var h, i = parseFloat(V(a, "opacity", e, !1, "1")),
                            j = a.style;
                        return b = parseFloat(b), "autoAlpha" === c && (h = V(a, "visibility", e), 1 === i && "hidden" === h && 0 !== b && (i = 0), f = new ma(j, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== i ? "visible" : "hidden", 0 === b ? "hidden" : "visible"),
                            f.xs0 = "visible", d._overwriteProps.push(f.n)), O ? f = new ma(j, "opacity", i, b - i, f) : (f = new ma(j, "opacity", 100 * i, 100 * (b - i), f), f.xn1 = "autoAlpha" === c ? 1 : 0, j.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Ba), f
                    }
                });
                var Ca = function(a, b) {
                        b && (a.removeProperty ? a.removeProperty(b.replace(y, "-$1").toLowerCase()) : a.removeAttribute(b))
                    },
                    Da = function(a) {
                        if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                            this.t.className = 0 === a ? this.b : this.e;
                            for (var b = this.data, c = this.t.style; b;) b.v ? c[b.p] = b.v : Ca(c, b.p), b = b._next;
                            1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.className !== this.e && (this.t.className = this.e)
                    };
                qa("className", {
                    parser: function(a, b, d, f, g, h, i) {
                        var j, k, l, m, n, o = a.className,
                            p = a.style.cssText;
                        if (g = f._classNamePT = new ma(a, d, 0, 0, g, 2), g.setRatio = Da, g.pr = -11, c = !0, g.b = o, k = Y(a, e), l = a._gsClassPT) {
                            for (m = {}, n = l.data; n;) m[n.p] = 1, n = n._next;
                            l.setRatio(1)
                        }
                        return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("\\s*\\b" + b.substr(2) + "\\b"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), f._tween._duration && (a.className = g.e, j = Z(a, k, Y(a), i, m), a.className = o, g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h)), g
                    }
                });
                var Ea = function(a) {
                    if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration)
                        for (var b, c = "all" === this.e, d = this.t.style, e = c ? d.cssText.split(";") : this.e.split(","), f = e.length, g = h.transform.parse; --f > -1;) b = e[f], c && (b = b.substr(0, b.indexOf(":")).split(" ").join("")), h[b] && (b = h[b].parse === g ? ta : h[b].p), Ca(d, b)
                };
                for (qa("clearProps", {
                        parser: function(a, b, d, e, f) {
                            return f = new ma(a, d, 0, 0, f, 2), f.setRatio = Ea, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f
                        }
                    }), i = "bezier,throwProps,physicsProps,physics2D".split(","), oa = i.length; oa--;) ra(i[oa]);
                i = g.prototype, i._firstPT = null, i._onInitTween = function(a, b, h) {
                    if (!a.nodeType) return !1;
                    this._target = a, this._tween = h, this._vars = b, j = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = U(a, ""), f = this._overwriteProps;
                    var i, m, o, p, q, r, s, t, u, w = a.style;
                    if (k && "" === w.zIndex && (i = V(a, "zIndex", e), ("auto" === i || "" === i) && (w.zIndex = 0)), "string" == typeof b && (p = w.cssText, i = Y(a, e), w.cssText = p + ";" + b, i = Z(a, i, Y(a)).difs, !O && v.test(b) && (i.opacity = parseFloat(RegExp.$1)), b = i, w.cssText = p), this._firstPT = m = this.parse(a, b, null), this._transformType) {
                        for (u = 3 === this._transformType, ta ? l && (k = !0, "" === w.zIndex && (s = V(a, "zIndex", e), ("auto" === s || "" === s) && (w.zIndex = 0)), n && (w.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (u ? "visible" : "hidden"))) : w.zoom = 1, o = m; o && o._next;) o = o._next;
                        t = new ma(a, "transform", 0, 0, null, 2), this._linkCSSP(t, null, o), t.setRatio = u && wa ? za : ta ? Aa : ya, t.data = this._transform || xa(a, e, !0), f.pop()
                    }
                    if (c) {
                        for (; m;) {
                            for (r = m._next, o = p; o && o.pr > m.pr;) o = o._next;
                            (m._prev = o ? o._prev : q) ? m._prev._next = m: p = m, (m._next = o) ? o._prev = m : q = m, m = r
                        }
                        this._firstPT = p
                    }
                    return !0
                }, i.parse = function(a, b, c, f) {
                    var g, i, k, l, m, n, o, p, q, r, s = a.style;
                    for (g in b) n = b[g], i = h[g], i ? c = i.parse(a, n, g, this, c, f, b) : (m = V(a, g, e) + "", q = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || q && x.test(n) ? (q || (n = ha(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = na(s, g, m, n, !0, "transparent", c, 0, f)) : !q || -1 === n.indexOf(" ") && -1 === n.indexOf(",") ? (k = parseFloat(m), o = k || 0 === k ? m.substr((k + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (k = aa(a, g, e), o = "px") : "left" === g || "top" === g ? (k = X(a, g, e), o = "px") : (k = "opacity" !== g ? 0 : 1, o = "")), r = q && "=" === n.charAt(1), r ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(t, "")) : (l = parseFloat(n), p = q ? n.substr((l + "").length) || "" : ""), "" === p && (p = d[g] || o), n = l || 0 === l ? (r ? l + k : l) + p : b[g], o !== p && "" !== p && (l || 0 === l) && (k || 0 === k) && (k = W(a, g, k, o), "%" === p ? (k /= W(a, g, 100, "%") / 100, k > 100 && (k = 100), b.strictUnits !== !0 && (m = k + "%")) : "em" === p ? k /= W(a, g, 1, "em") : (l = W(a, g, l, p), p = "px"), r && (l || 0 === l) && (n = l + k + p)), r && (l += k), !k && 0 !== k || !l && 0 !== l ? void 0 !== s[g] && (n || n + "" != "NaN" && null != n) ? (c = new ma(s, g, l || k || 0, 0, c, -1, "css_" + g, !1, 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : Q("invalid " + g + " tween value: " + b[g]) : (c = new ma(s, g, k, l - k, c, 0, "css_" + g, j !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p)) : c = na(s, g, m, n, !0, null, c, 0, f)), f && c && !c.plugin && (c.plugin = f);
                    return c
                }, i.setRatio = function(a) {
                    var b, c, d, e = this._firstPT,
                        f = 1e-6;
                    if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; e;) {
                                if (b = e.c * a + e.s, e.r ? b = b > 0 ? b + .5 | 0 : b - .5 | 0 : f > b && b > -f && (b = 0), e.type)
                                    if (1 === e.type)
                                        if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                                        else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                                else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
                                else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
                                else {
                                    for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                    e.t[e.p] = c
                                } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
                                else e.t[e.p] = b + e.xs0;
                                e = e._next
                            } else
                                for (; e;) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
                        else
                            for (; e;) 2 !== e.type ? e.t[e.p] = e.e : e.setRatio(a), e = e._next
                }, i._enableTransforms = function(a) {
                    this._transformType = a || 3 === this._transformType ? 3 : 2
                }, i._linkCSSP = function(a, b, c, d) {
                    return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next), a._next = b, a._prev = c), a
                }, i._kill = function(b) {
                    var c, d, e, f = b;
                    if (b.css_autoAlpha || b.css_alpha) {
                        f = {};
                        for (d in b) f[d] = b[d];
                        f.css_opacity = 1, f.css_autoAlpha && (f.css_visibility = 1)
                    }
                    return b.css_className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), a.prototype._kill.call(this, f)
                };
                var Fa = function(a, b, c) {
                    var d, e, f, g;
                    if (a.slice)
                        for (e = a.length; --e > -1;) Fa(a[e], b, c);
                    else
                        for (d = a.childNodes, e = d.length; --e > -1;) f = d[e], g = f.type, f.style && (b.push(Y(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Fa(f, b, c)
                };
                return g.cascadeTo = function(a, c, d) {
                    var e, f, g, h = b.to(a, c, d),
                        i = [h],
                        j = [],
                        k = [],
                        l = [],
                        m = b._internals.reservedProps;
                    for (a = h._targets || h.target, Fa(a, j, l), h.render(c, !0), Fa(a, k), h.render(0, !0), h._enabled(!0), e = l.length; --e > -1;)
                        if (f = Z(l[e], j[e], k[e]), f.firstMPT) {
                            f = f.difs;
                            for (g in d) m[g] && (f[g] = d[g]);
                            i.push(b.to(l[e], c, f))
                        }
                    return i
                }, a.activate([g]), g
            }, !0),
            function() {
                var a = window._gsDefine.plugin({
                        propName: "roundProps",
                        priority: -1,
                        API: 2,
                        init: function(a, b, c) {
                            return this._tween = c, !0
                        }
                    }),
                    b = a.prototype;
                b._onInitAllProps = function() {
                    for (var a, b, c, d = this._tween, e = d.vars.roundProps instanceof Array ? d.vars.roundProps : d.vars.roundProps.split(","), f = e.length, g = {}, h = d._propLookup.roundProps; --f > -1;) g[e[f]] = 1;
                    for (f = e.length; --f > -1;)
                        for (a = e[f], b = d._firstPT; b;) c = b._next, b.pg ? b.t._roundProps(g, !0) : b.n === a && (this._add(b.t, a, b.s, b.c), c && (c._prev = b._prev), b._prev ? b._prev._next = c : d._firstPT === b && (d._firstPT = c), b._next = b._prev = null, d._propLookup[a] = h), b = c;
                    return !1
                }, b._add = function(a, b, c, d) {
                    this._addTween(a, b, c, c + d, b, !0), this._overwriteProps.push(b)
                }
            }(), window._gsDefine.plugin({
                propName: "attr",
                API: 2,
                init: function(a, b) {
                    var c;
                    if ("function" != typeof a.setAttribute) return !1;
                    this._target = a, this._proxy = {};
                    for (c in b) this._addTween(this._proxy, c, parseFloat(a.getAttribute(c)), b[c], c), this._overwriteProps.push(c);
                    return !0
                },
                set: function(a) {
                    this._super.setRatio.call(this, a);
                    for (var b, c = this._overwriteProps, d = c.length; --d > -1;) b = c[d], this._target.setAttribute(b, this._proxy[b] + "")
                }
            }), window._gsDefine.plugin({
                propName: "directionalRotation",
                API: 2,
                init: function(a, b) {
                    "object" != typeof b && (b = {
                        rotation: b
                    }), this.finals = {};
                    var c, d, e, f, g, h, i = b.useRadians === !0 ? 2 * Math.PI : 360,
                        j = 1e-6;
                    for (c in b) "useRadians" !== c && (h = (b[c] + "").split("_"), d = h[0], e = parseFloat("function" != typeof a[c] ? a[c] : a[c.indexOf("set") || "function" != typeof a["get" + c.substr(3)] ? c : "get" + c.substr(3)]()), f = this.finals[c] = "string" == typeof d && "=" === d.charAt(1) ? e + parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2)) : Number(d) || 0, g = f - e, h.length && (d = h.join("_"), -1 !== d.indexOf("short") && (g %= i, g !== g % (i / 2) && (g = 0 > g ? g + i : g - i)), -1 !== d.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * i) % i - (g / i | 0) * i : -1 !== d.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * i) % i - (g / i | 0) * i)), (g > j || -j > g) && (this._addTween(a, c, e, e + g, c), this._overwriteProps.push(c)));
                    return !0
                },
                set: function(a) {
                    var b;
                    if (1 !== a) this._super.setRatio.call(this, a);
                    else
                        for (b = this._firstPT; b;) b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p], b = b._next
                }
            })._autoCSS = !0, window._gsDefine("easing.Back", ["easing.Ease"], function(a) {
                var b, c, d, e = window.GreenSockGlobals || window,
                    f = e.com.greensock,
                    g = 2 * Math.PI,
                    h = Math.PI / 2,
                    i = f._class,
                    j = function(b, c) {
                        var d = i("easing." + b, function() {}, !0),
                            e = d.prototype = new a;
                        return e.constructor = d, e.getRatio = c, d
                    },
                    k = a.register || function() {},
                    l = function(a, b, c, d) {
                        var e = i("easing." + a, {
                            easeOut: new b,
                            easeIn: new c,
                            easeInOut: new d
                        }, !0);
                        return k(e, a), e
                    },
                    m = function(a, b, c) {
                        this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a)
                    },
                    n = function(b, c) {
                        var d = i("easing." + b, function(a) {
                                this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            e = d.prototype = new a;
                        return e.constructor = d, e.getRatio = c, e.config = function(a) {
                            return new d(a)
                        }, d
                    },
                    o = l("Back", n("BackOut", function(a) {
                        return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
                    }), n("BackIn", function(a) {
                        return a * a * ((this._p1 + 1) * a - this._p1)
                    }), n("BackInOut", function(a) {
                        return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
                    })),
                    p = i("easing.SlowMo", function(a, b, c) {
                        b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = c === !0
                    }, !0),
                    q = p.prototype = new a;
                return q.constructor = p, q.getRatio = function(a) {
                    var b = a + (.5 - a) * this._p;
                    return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
                }, p.ease = new p(.7, .7), q.config = p.config = function(a, b, c) {
                    return new p(a, b, c)
                }, b = i("easing.SteppedEase", function(a) {
                    a = a || 1, this._p1 = 1 / a, this._p2 = a + 1
                }, !0), q = b.prototype = new a, q.constructor = b, q.getRatio = function(a) {
                    return 0 > a ? a = 0 : a >= 1 && (a = .999999999), (this._p2 * a >> 0) * this._p1
                }, q.config = b.config = function(a) {
                    return new b(a)
                }, c = i("easing.RoughEase", function(b) {
                    b = b || {};
                    for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), n = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --n > -1;) c = o ? Math.random() : 1 / l * n, d = q ? q.getRatio(c) : c, "none" === i ? e = r : "out" === i ? (f = 1 - c, e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c, e = f * f * .5 * r) : (f = 2 * (1 - c), e = f * f * .5 * r), o ? d += Math.random() * e - .5 * e : n % 2 ? d += .5 * e : d -= .5 * e, p && (d > 1 ? d = 1 : 0 > d && (d = 0)), j[k++] = {
                        x: c,
                        y: d
                    };
                    for (j.sort(function(a, b) {
                            return a.x - b.x
                        }), h = new m(1, 1, null), n = l; --n > -1;) g = j[n], h = new m(g.x, g.y, h);
                    this._prev = new m(0, 0, 0 !== h.t ? h : h.next)
                }, !0), q = c.prototype = new a, q.constructor = c, q.getRatio = function(a) {
                    var b = this._prev;
                    if (a > b.t) {
                        for (; b.next && a >= b.t;) b = b.next;
                        b = b.prev
                    } else
                        for (; b.prev && a <= b.t;) b = b.prev;
                    return this._prev = b, b.v + (a - b.t) / b.gap * b.c
                }, q.config = function(a) {
                    return new c(a)
                }, c.ease = new c, l("Bounce", j("BounceOut", function(a) {
                    return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                }), j("BounceIn", function(a) {
                    return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
                }), j("BounceInOut", function(a) {
                    var b = .5 > a;
                    return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5
                })), l("Circ", j("CircOut", function(a) {
                    return Math.sqrt(1 - (a -= 1) * a)
                }), j("CircIn", function(a) {
                    return -(Math.sqrt(1 - a * a) - 1)
                }), j("CircInOut", function(a) {
                    return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
                })), d = function(b, c, d) {
                    var e = i("easing." + b, function(a, b) {
                            this._p1 = a || 1, this._p2 = b || d, this._p3 = this._p2 / g * (Math.asin(1 / this._p1) || 0)
                        }, !0),
                        f = e.prototype = new a;
                    return f.constructor = e, f.getRatio = c, f.config = function(a, b) {
                        return new e(a, b)
                    }, e
                }, l("Elastic", d("ElasticOut", function(a) {
                    return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * g / this._p2) + 1
                }, .3), d("ElasticIn", function(a) {
                    return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * g / this._p2))
                }, .3), d("ElasticInOut", function(a) {
                    return (a *= 2) < 1 ? -.5 * this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * g / this._p2) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * g / this._p2) * .5 + 1
                }, .45)), l("Expo", j("ExpoOut", function(a) {
                    return 1 - Math.pow(2, -10 * a)
                }), j("ExpoIn", function(a) {
                    return Math.pow(2, 10 * (a - 1)) - .001
                }), j("ExpoInOut", function(a) {
                    return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
                })), l("Sine", j("SineOut", function(a) {
                    return Math.sin(a * h)
                }), j("SineIn", function(a) {
                    return -Math.cos(a * h) + 1
                }), j("SineInOut", function(a) {
                    return -.5 * (Math.cos(Math.PI * a) - 1)
                })), i("easing.EaseLookup", {
                    find: function(b) {
                        return a.map[b]
                    }
                }, !0), k(e.SlowMo, "SlowMo", "ease,"), k(c, "RoughEase", "ease,"), k(b, "SteppedEase", "ease,"), o
            }, !0)
    }),
    function(a) {
        "use strict";
        var b, c, d, e, f, g = a.GreenSockGlobals || a,
            h = function(a) {
                var b, c = a.split("."),
                    d = g;
                for (b = 0; b < c.length; b++) d[c[b]] = d = d[c[b]] || {};
                return d
            },
            i = h("com.greensock"),
            j = [].slice,
            k = function() {},
            l = {},
            m = function(b, c, d, e) {
                this.sc = l[b] ? l[b].sc : [], l[b] = this, this.gsClass = null, this.func = d;
                var f = [];
                this.check = function(i) {
                    for (var j, k, n, o, p = c.length, q = p; --p > -1;)(j = l[c[p]] || new m(c[p], [])).gsClass ? (f[p] = j.gsClass, q--) : i && j.sc.push(this);
                    if (0 === q && d)
                        for (k = ("com.greensock." + b).split("."), n = k.pop(), o = h(k.join("."))[n] = this.gsClass = d.apply(d, f), e && (g[n] = o, "function" == typeof define && define.amd ? define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + b.split(".").join("/"), [], function() {
                                return o
                            }) : "undefined" != typeof module && module.exports && (module.exports = o)), p = 0; p < this.sc.length; p++) this.sc[p].check()
                }, this.check(!0)
            },
            n = a._gsDefine = function(a, b, c, d) {
                return new m(a, b, c, d)
            },
            o = i._class = function(a, b, c) {
                return b = b || function() {}, n(a, [], function() {
                    return b
                }, c), b
            };
        n.globals = g;
        var p = [0, 0, 1, 1],
            q = [],
            r = o("easing.Ease", function(a, b, c, d) {
                this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? p.concat(b) : p
            }, !0),
            s = r.map = {},
            t = r.register = function(a, b, c, d) {
                for (var e, f, g, h, j = b.split(","), k = j.length, l = (c || "easeIn,easeOut,easeInOut").split(","); --k > -1;)
                    for (f = j[k], e = d ? o("easing." + f, null, !0) : i.easing[f] || {}, g = l.length; --g > -1;) h = l[g], s[f + "." + h] = s[h + f] = e[h] = a.getRatio ? a : a[h] || new a
            };
        for (d = r.prototype, d._calcEnd = !1, d.getRatio = function(a) {
                if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
                var b = this._type,
                    c = this._power,
                    d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
                return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
            }, b = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], c = b.length; --c > -1;) d = b[c] + ",Power" + c, t(new r(null, null, 1, c), d, "easeOut", !0), t(new r(null, null, 2, c), d, "easeIn" + (0 === c ? ",easeNone" : "")), t(new r(null, null, 3, c), d, "easeInOut");
        s.linear = i.easing.Linear.easeIn, s.swing = i.easing.Quad.easeInOut;
        var u = o("events.EventDispatcher", function(a) {
            this._listeners = {}, this._eventTarget = a || this
        });
        d = u.prototype, d.addEventListener = function(a, b, c, d, g) {
            g = g || 0;
            var h, i, j = this._listeners[a],
                k = 0;
            for (null == j && (this._listeners[a] = j = []), i = j.length; --i > -1;) h = j[i], h.c === b && h.s === c ? j.splice(i, 1) : 0 === k && h.pr < g && (k = i + 1);
            j.splice(k, 0, {
                c: b,
                s: c,
                up: d,
                pr: g
            }), this !== e || f || e.wake()
        }, d.removeEventListener = function(a, b) {
            var c, d = this._listeners[a];
            if (d)
                for (c = d.length; --c > -1;)
                    if (d[c].c === b) return void d.splice(c, 1)
        }, d.dispatchEvent = function(a) {
            var b, c, d, e = this._listeners[a];
            if (e)
                for (b = e.length, c = this._eventTarget; --b > -1;) d = e[b], d.up ? d.c.call(d.s || c, {
                    type: a,
                    target: c
                }) : d.c.call(d.s || c)
        };
        var v = a.requestAnimationFrame,
            w = a.cancelAnimationFrame,
            x = Date.now || function() {
                return (new Date).getTime()
            };
        for (b = ["ms", "moz", "webkit", "o"], c = b.length; --c > -1 && !v;) v = a[b[c] + "RequestAnimationFrame"], w = a[b[c] + "CancelAnimationFrame"] || a[b[c] + "CancelRequestAnimationFrame"];
        o("Ticker", function(a, b) {
            var c, d, g, h, i, j = this,
                l = x(),
                m = b !== !1 && v,
                n = function(a) {
                    j.time = (x() - l) / 1e3;
                    var b = g,
                        e = j.time - i;
                    (!c || e > 0 || a === !0) && (j.frame++, i += e + (e >= h ? .004 : h - e), j.dispatchEvent("tick")), a !== !0 && b === g && (g = d(n))
                };
            u.call(j), this.time = this.frame = 0, this.tick = function() {
                n(!0)
            }, this.sleep = function() {
                null != g && (m && w ? w(g) : clearTimeout(g), d = k, g = null, j === e && (f = !1))
            }, this.wake = function() {
                null !== g && j.sleep(), d = 0 === c ? k : m && v ? v : function(a) {
                    return setTimeout(a, 1e3 * (i - j.time) + 1 | 0)
                }, j === e && (f = !0), n(2)
            }, this.fps = function(a) {
                return arguments.length ? (c = a, h = 1 / (c || 60), i = this.time + h, void j.wake()) : c
            }, this.useRAF = function(a) {
                return arguments.length ? (j.sleep(), m = a, void j.fps(c)) : m
            }, j.fps(a), setTimeout(function() {
                m && (!g || j.frame < 5) && j.useRAF(!1)
            }, 1500)
        }), d = i.Ticker.prototype = new i.events.EventDispatcher, d.constructor = i.Ticker;
        var y = o("core.Animation", function(a, b) {
            if (this.vars = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(this.vars.delay) || 0, this._timeScale = 1, this._active = this.vars.immediateRender === !0, this.data = this.vars.data, this._reversed = this.vars.reversed === !0, K) {
                f || e.wake();
                var c = this.vars.useFrames ? J : K;
                c.add(this, c._time), this.vars.paused && this.paused(!0)
            }
        });
        e = y.ticker = new i.Ticker, d = y.prototype, d._dirty = d._gc = d._initted = d._paused = !1, d._totalTime = d._time = 0, d._rawPrevTime = -1, d._next = d._last = d._onUpdate = d._timeline = d.timeline = null, d._paused = !1, d.play = function(a, b) {
            return arguments.length && this.seek(a, b), this.reversed(!1).paused(!1)
        }, d.pause = function(a, b) {
            return arguments.length && this.seek(a, b), this.paused(!0)
        }, d.resume = function(a, b) {
            return arguments.length && this.seek(a, b), this.paused(!1)
        }, d.seek = function(a, b) {
            return this.totalTime(Number(a), b !== !1)
        }, d.restart = function(a, b) {
            return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
        }, d.reverse = function(a, b) {
            return arguments.length && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
        }, d.render = function() {}, d.invalidate = function() {
            return this
        }, d._enabled = function(a, b) {
            return f || e.wake(), this._gc = !a, this._active = a && !this._paused && this._totalTime > 0 && this._totalTime < this._totalDuration, b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
        }, d._kill = function() {
            return this._enabled(!1, !1)
        }, d.kill = function(a, b) {
            return this._kill(a, b), this
        }, d._uncache = function(a) {
            for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
            return this
        }, d.eventCallback = function(a, b, c, d) {
            if (null == a) return null;
            if ("on" === a.substr(0, 2)) {
                var e, f = this.vars;
                if (1 === arguments.length) return f[a];
                if (null == b) delete f[a];
                else if (f[a] = b, f[a + "Params"] = c, f[a + "Scope"] = d, c)
                    for (e = c.length; --e > -1;) "{self}" === c[e] && (c = f[a + "Params"] = c.concat(), c[e] = this);
                "onUpdate" === a && (this._onUpdate = b)
            }
            return this
        }, d.delay = function(a) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
        }, d.duration = function(a) {
            return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, d.totalDuration = function(a) {
            return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
        }, d.time = function(a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
        }, d.totalTime = function(a, b, c) {
            if (f || e.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var d = this._totalDuration,
                        g = this._timeline;
                    if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : g._time) - (this._reversed ? d - a : a) / this._timeScale, g._dirty || this._uncache(!1), !g._active)
                        for (; g._timeline;) g.totalTime(g._totalTime, !0), g = g._timeline
                }
                this._gc && this._enabled(!0, !1), this._totalTime !== a && this.render(a, b, !1)
            }
            return this
        }, d.startTime = function(a) {
            return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
        }, d.timeScale = function(a) {
            if (!arguments.length) return this._timeScale;
            if (a = a || 1e-6, this._timeline && this._timeline.smoothChildTiming) {
                var b = this._pauseTime,
                    c = b || 0 === b ? b : this._timeline.totalTime();
                this._startTime = c - (c - this._startTime) * this._timeScale / a
            }
            return this._timeScale = a, this._uncache(!1)
        }, d.reversed = function(a) {
            return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._totalTime, !0)), this) : this._reversed
        }, d.paused = function(a) {
            if (!arguments.length) return this._paused;
            if (a != this._paused && this._timeline) {
                f || a || e.wake();
                var b = this._timeline.rawTime(),
                    c = b - this._pauseTime;
                !a && this._timeline.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = !a && this._totalTime > 0 && this._totalTime < this._totalDuration, a || 0 === c || 0 === this._duration || this.render(this._totalTime, !0, !0)
            }
            return this._gc && !a && this._enabled(!0, !1), this
        };
        var z = o("core.SimpleTimeline", function(a) {
            y.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        d = z.prototype = new y, d.constructor = z, d.kill()._gc = !1, d._first = d._last = null, d._sortChildren = !1, d.add = d.insert = function(a, b) {
            var c, d;
            if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), c = this._last, this._sortChildren)
                for (d = a._startTime; c && c._startTime > d;) c = c._prev;
            return c ? (a._next = c._next, c._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = c, this._timeline && this._uncache(!0), this
        }, d._remove = function(a, b) {
            return a.timeline === this && (b || a._enabled(!1, !0), a.timeline = null, a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), this._timeline && this._uncache(!0)), this
        }, d.render = function(a, b, c) {
            var d, e = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
        }, d.rawTime = function() {
            return f || e.wake(), this._totalTime
        };
        var A = o("TweenLite", function(a, b, c) {
                if (y.call(this, b, c), null == a) throw "Cannot tween a null target.";
                this.target = a = "string" != typeof a ? a : A.selector(a) || a;
                var d, e, f, g = a.jquery || a.length && a[0] && a[0].nodeType && a[0].style,
                    h = this.vars.overwrite;
                if (this._overwrite = h = null == h ? I[A.defaultOverwrite] : "number" == typeof h ? h >> 0 : I[h], (g || a instanceof Array) && "number" != typeof a[0])
                    for (this._targets = f = j.call(a, 0), this._propLookup = [], this._siblings = [], d = 0; d < f.length; d++) e = f[d], e ? "string" != typeof e ? e.length && e[0] && e[0].nodeType && e[0].style ? (f.splice(d--, 1), this._targets = f = f.concat(j.call(e, 0))) : (this._siblings[d] = L(e, this, !1), 1 === h && this._siblings[d].length > 1 && M(e, this, null, 1, this._siblings[d])) : (e = f[d--] = A.selector(e), "string" == typeof e && f.splice(d + 1, 1)) : f.splice(d--, 1);
                else this._propLookup = {}, this._siblings = L(a, this, !1), 1 === h && this._siblings.length > 1 && M(a, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === b && 0 === this._delay && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
            }, !0),
            B = function(a) {
                return a.length && a[0] && a[0].nodeType && a[0].style
            },
            C = function(a, b) {
                var c, d = {};
                for (c in a) H[c] || c in b && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c || !(!E[c] || E[c] && E[c]._autoCSS) || (d[c] = a[c], delete a[c]);
                a.css = d
            };
        d = A.prototype = new y, d.constructor = A, d.kill()._gc = !1, d.ratio = 0, d._firstPT = d._targets = d._overwrittenProps = d._startAt = null, d._notifyPluginsOfEnabled = !1, A.version = "1.9.7", A.defaultEase = d._ease = new r(null, null, 1, 1), A.defaultOverwrite = "auto", A.ticker = e, A.autoSleep = !0, A.selector = a.$ || a.jQuery || function(b) {
            return a.$ ? (A.selector = a.$, a.$(b)) : a.document ? a.document.getElementById("#" === b.charAt(0) ? b.substr(1) : b) : b
        };
        var D = A._internals = {},
            E = A._plugins = {},
            F = A._tweenLookup = {},
            G = 0,
            H = D.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1
            },
            I = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            },
            J = y._rootFramesTimeline = new z,
            K = y._rootTimeline = new z;
        K._startTime = e.time, J._startTime = e.frame, K._active = J._active = !0, y._updateRoot = function() {
            if (K.render((e.time - K._startTime) * K._timeScale, !1, !1), J.render((e.frame - J._startTime) * J._timeScale, !1, !1), !(e.frame % 120)) {
                var a, b, c;
                for (c in F) {
                    for (b = F[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);
                    0 === b.length && delete F[c]
                }
                if (c = K._first, (!c || c._paused) && A.autoSleep && !J._first && 1 === e._listeners.tick.length) {
                    for (; c && c._paused;) c = c._next;
                    c || e.sleep()
                }
            }
        }, e.addEventListener("tick", y._updateRoot);
        var L = function(a, b, c) {
                var d, e, f = a._gsTweenID;
                if (F[f || (a._gsTweenID = f = "t" + G++)] || (F[f] = {
                        target: a,
                        tweens: []
                    }), b && (d = F[f].tweens, d[e = d.length] = b, c))
                    for (; --e > -1;) d[e] === b && d.splice(e, 1);
                return F[f].tweens
            },
            M = function(a, b, c, d, e) {
                var f, g, h, i;
                if (1 === d || d >= 4) {
                    for (i = e.length, f = 0; i > f; f++)
                        if ((h = e[f]) !== b) h._gc || h._enabled(!1, !1) && (g = !0);
                        else if (5 === d) break;
                    return g
                }
                var j, k = b._startTime + 1e-10,
                    l = [],
                    m = 0,
                    n = 0 === b._duration;
                for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || N(b, 0, n), 0 === N(h, j, n) && (l[m++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale + 1e-10 > k && ((n || !h._initted) && k - h._startTime <= 2e-10 || (l[m++] = h)));
                for (f = m; --f > -1;) h = l[f], 2 === d && h._kill(c, a) && (g = !0), (2 !== d || !h._firstPT && h._initted) && h._enabled(!1, !1) && (g = !0);
                return g
            },
            N = function(a, b, c) {
                for (var d = a._timeline, e = d._timeScale, f = a._startTime, g = 1e-10; d._timeline;) {
                    if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
                    d = d._timeline
                }
                return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * g > f - b ? g : (f += a.totalDuration() / a._timeScale / e) > b + g ? 0 : f - b - g
            };
        d._init = function() {
            var a, b, c, d, e = this.vars,
                f = this._overwrittenProps,
                g = this._duration,
                h = e.ease;
            if (e.startAt) {
                if (e.startAt.overwrite = 0, e.startAt.immediateRender = !0, this._startAt = A.to(this.target, 0, e.startAt), e.immediateRender && (this._startAt = null, 0 === this._time && 0 !== g)) return
            } else if (e.runBackwards && e.immediateRender && 0 !== g)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
                else if (0 === this._time) {
                c = {};
                for (d in e) H[d] && "autoCSS" !== d || (c[d] = e[d]);
                return c.overwrite = 0, void(this._startAt = A.to(this.target, 0, c))
            }
            if (this._ease = h ? h instanceof r ? e.easeParams instanceof Array ? h.config.apply(h, e.easeParams) : h : "function" == typeof h ? new r(h, e.easeParams) : s[h] || A.defaultEase : A.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (a = this._targets.length; --a > -1;) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], f ? f[a] : null) && (b = !0);
            else b = this._initProps(this.target, this._propLookup, this._siblings, f);
            if (b && A._onPluginEvent("_onInitAllProps", this), f && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), e.runBackwards)
                for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
            this._onUpdate = e.onUpdate, this._initted = !0
        }, d._initProps = function(a, b, c, d) {
            var e, f, g, h, i, j, k;
            if (null == a) return !1;
            this.vars.css || a.style && a.nodeType && E.css && this.vars.autoCSS !== !1 && C(this.vars, a);
            for (e in this.vars) {
                if (H[e]) {
                    if (("onStartParams" === e || "onUpdateParams" === e || "onCompleteParams" === e || "onReverseCompleteParams" === e || "onRepeatParams" === e) && (i = this.vars[e]))
                        for (f = i.length; --f > -1;) "{self}" === i[f] && (i = this.vars[e] = i.concat(), i[f] = this)
                } else if (E[e] && (h = new E[e])._onInitTween(a, this.vars[e], this)) {
                    for (this._firstPT = j = {
                            _next: this._firstPT,
                            t: h,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: !0,
                            n: e,
                            pg: !0,
                            pr: h._priority
                        }, f = h._overwriteProps.length; --f > -1;) b[h._overwriteProps[f]] = this._firstPT;
                    (h._priority || h._onInitAllProps) && (g = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = b[e] = j = {
                    _next: this._firstPT,
                    t: a,
                    p: e,
                    f: "function" == typeof a[e],
                    n: e,
                    pg: !1,
                    pr: 0
                }, j.s = j.f ? a[e.indexOf("set") || "function" != typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)]() : parseFloat(a[e]), k = this.vars[e], j.c = "string" == typeof k && "=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * Number(k.substr(2)) : Number(k) - j.s || 0;
                j && j._next && (j._next._prev = j)
            }
            return d && this._kill(d, a) ? this._initProps(a, b, c, d) : this._overwrite > 1 && this._firstPT && c.length > 1 && M(a, this, b, this._overwrite, c) ? (this._kill(b, a), this._initProps(a, b, c, d)) : g
        }, d.render = function(a, b, c) {
            var d, e, f, g = this._time;
            if (a >= this._duration) this._totalTime = this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete"), 0 === this._duration && ((0 === a || this._rawPrevTime < 0) && this._rawPrevTime !== a && (c = !0, this._rawPrevTime > 0 && (e = "onReverseComplete", b && (a = -1))), this._rawPrevTime = a);
            else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === this._duration && this._rawPrevTime > 0) && (e = "onReverseComplete", d = this._reversed), 0 > a ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (c = !0), this._rawPrevTime = a)) : this._initted || (c = !0);
            else if (this._totalTime = this._time = a, this._easeType) {
                var h = a / this._duration,
                    i = this._easeType,
                    j = this._easePower;
                (1 === i || 3 === i && h >= .5) && (h = 1 - h), 3 === i && (h *= 2), 1 === j ? h *= h : 2 === j ? h *= h * h : 3 === j ? h *= h * h * h : 4 === j && (h *= h * h * h * h), this.ratio = 1 === i ? 1 - h : 2 === i ? h : a / this._duration < .5 ? h / 2 : 1 - h / 2
            } else this.ratio = this._ease.getRatio(a / this._duration);
            if (this._time !== g || c) {
                if (!this._initted) {
                    if (this._init(), !this._initted) return;
                    this._time && !d ? this.ratio = this._ease.getRatio(this._time / this._duration) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._active || this._paused || (this._active = !0), 0 === g && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === this._duration) && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || q))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
                this._onUpdate && (0 > a && this._startAt && this._startAt.render(a, b, c), b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || q)), e && (this._gc || (0 > a && this._startAt && !this._onUpdate && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this.vars[e].apply(this.vars[e + "Scope"] || this, this.vars[e + "Params"] || q)))
            }
        }, d._kill = function(a, b) {
            if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._enabled(!1, !1);
            b = "string" != typeof b ? b || this._targets || this.target : A.selector(b) || b;
            var c, d, e, f, g, h, i, j;
            if ((b instanceof Array || B(b)) && "number" != typeof b[0])
                for (c = b.length; --c > -1;) this._kill(a, b[c]) && (h = !0);
            else {
                if (this._targets) {
                    for (c = this._targets.length; --c > -1;)
                        if (b === this._targets[c]) {
                            g = this._propLookup[c] || {}, this._overwrittenProps = this._overwrittenProps || [], d = this._overwrittenProps[c] = a ? this._overwrittenProps[c] || {} : "all";
                            break
                        }
                } else {
                    if (b !== this.target) return !1;
                    g = this._propLookup, d = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                }
                if (g) {
                    i = a || g, j = a !== d && "all" !== d && a !== g && (null == a || a._tempKill !== !0);
                    for (e in i)(f = g[e]) && (f.pg && f.t._kill(i) && (h = !0), f.pg && 0 !== f.t._overwriteProps.length || (f._prev ? f._prev._next = f._next : f === this._firstPT && (this._firstPT = f._next), f._next && (f._next._prev = f._prev), f._next = f._prev = null), delete g[e]), j && (d[e] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return h
        }, d.invalidate = function() {
            return this._notifyPluginsOfEnabled && A._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
        }, d._enabled = function(a, b) {
            if (f || e.wake(), a && this._gc) {
                var c, d = this._targets;
                if (d)
                    for (c = d.length; --c > -1;) this._siblings[c] = L(d[c], this, !0);
                else this._siblings = L(this.target, this, !0);
            }
            return y.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? A._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
        }, A.to = function(a, b, c) {
            return new A(a, b, c)
        }, A.from = function(a, b, c) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new A(a, b, c)
        }, A.fromTo = function(a, b, c, d) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new A(a, b, d)
        }, A.delayedCall = function(a, b, c, d, e) {
            return new A(b, 0, {
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                onCompleteScope: d,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                onReverseCompleteScope: d,
                immediateRender: !1,
                useFrames: e,
                overwrite: 0
            })
        }, A.set = function(a, b) {
            return new A(a, 0, b)
        }, A.killTweensOf = A.killDelayedCallsTo = function(a, b) {
            for (var c = A.getTweensOf(a), d = c.length; --d > -1;) c[d]._kill(b, a)
        }, A.getTweensOf = function(a) {
            if (null == a) return [];
            a = "string" != typeof a ? a : A.selector(a) || a;
            var b, c, d, e;
            if ((a instanceof Array || B(a)) && "number" != typeof a[0]) {
                for (b = a.length, c = []; --b > -1;) c = c.concat(A.getTweensOf(a[b]));
                for (b = c.length; --b > -1;)
                    for (e = c[b], d = b; --d > -1;) e === c[d] && c.splice(b, 1)
            } else
                for (c = L(a).concat(), b = c.length; --b > -1;) c[b]._gc && c.splice(b, 1);
            return c
        };
        var O = o("plugins.TweenPlugin", function(a, b) {
            this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = O.prototype
        }, !0);
        if (d = O.prototype, O.version = "1.9.1", O.API = 2, d._firstPT = null, d._addTween = function(a, b, c, d, e, f) {
                var g, h;
                null != d && (g = "number" == typeof d || "=" !== d.charAt(1) ? Number(d) - c : parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2))) && (this._firstPT = h = {
                    _next: this._firstPT,
                    t: a,
                    p: b,
                    s: c,
                    c: g,
                    f: "function" == typeof a[b],
                    n: e || b,
                    r: f
                }, h._next && (h._next._prev = h))
            }, d.setRatio = function(a) {
                for (var b, c = this._firstPT, d = 1e-6; c;) b = c.c * a + c.s, c.r ? b = b + (b > 0 ? .5 : -.5) >> 0 : d > b && b > -d && (b = 0), c.f ? c.t[c.p](b) : c.t[c.p] = b, c = c._next
            }, d._kill = function(a) {
                var b, c = this._overwriteProps,
                    d = this._firstPT;
                if (null != a[this._propName]) this._overwriteProps = [];
                else
                    for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
                for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
                return !1
            }, d._roundProps = function(a, b) {
                for (var c = this._firstPT; c;)(a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && (c.r = b), c = c._next
            }, A._onPluginEvent = function(a, b) {
                var c, d, e, f, g, h = b._firstPT;
                if ("_onInitAllProps" === a) {
                    for (; h;) {
                        for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
                        (h._prev = d ? d._prev : f) ? h._prev._next = h: e = h, (h._next = d) ? d._prev = h : f = h, h = g
                    }
                    h = b._firstPT = e
                }
                for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
                return c
            }, O.activate = function(a) {
                for (var b = a.length; --b > -1;) a[b].API === O.API && (E[(new a[b])._propName] = a[b]);
                return !0
            }, n.plugin = function(a) {
                if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
                var b, c = a.propName,
                    d = a.priority || 0,
                    e = a.overwriteProps,
                    f = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_roundProps",
                        initAll: "_onInitAllProps"
                    },
                    g = o("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() {
                        O.call(this, c, d), this._overwriteProps = e || []
                    }, a.global === !0),
                    h = g.prototype = new O(c);
                h.constructor = g, g.API = a.API;
                for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
                return g.version = a.version, O.activate([g]), g
            }, b = a._gsQueue) {
            for (c = 0; c < b.length; c++) b[c]();
            for (d in l) l[d].func || a.console.log("GSAP encountered missing dependency: com.greensock." + d)
        }
        f = !1
    }(window),
    function() {
        for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !window.requestAnimationFrame; ++c) window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(b) {
            var c = (new Date).getTime(),
                d = Math.max(0, 16 - (c - a)),
                e = window.setTimeout(function() {
                    b(c + d)
                }, d);
            return a = c + d, e
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
            clearTimeout(a)
        })
    }(),
    function(a) {
        var b = function(c, d, e) {
            var f = this;
            b.prototype, this.video_el = null, this.sourcePath_str = null, this.backgroundColor_str = d, this.controllerHeight = c.data.controllerHeight, this.stageWidth = 0, this.stageHeight = 0, this.lastPercentPlayed = 0, this.volume = e, this.curDuration = 0, this.countNormalMp3Errors = 0, this.countShoutCastErrors = 0, this.maxShoutCastCountErrors = 5, this.maxNormalCountErrors = 1, this.disableClickForAWhileId_to, this.disableClick_bl = !1, this.allowScrubing_bl = !1, this.hasError_bl = !0, this.isPlaying_bl = !1, this.isStopped_bl = !0, this.hasPlayedOnce_bl = !1, this.isStartEventDispatched_bl = !1, this.isSafeToBeControlled_bl = !1, this.isMobile_bl = FWDEVPUtils.isMobile, this.init = function() {
                f.setupVideo(), f.setBkColor(f.backgroundColor_str)
            }, this.setupVideo = function() {
                null == f.video_el && (f.video_el = document.createElement("video"), f.screen.appendChild(f.video_el), f.video_el.controls = !1, f.video_el.volume = f.volume, f.video_el.style.position = "relative", f.video_el.style.left = "0px", f.video_el.style.top = "0px", f.video_el.style.width = "100%", f.video_el.style.height = "100%", f.video_el.style.margin = "0px", f.video_el.style.padding = "0px", f.video_el.style.maxWidth = "none", f.video_el.style.maxHeight = "none", f.video_el.style.border = "none", f.video_el.style.lineHeight = "0", f.video_el.style.msTouchAction = "none", f.screen.appendChild(f.video_el)), f.video_el.addEventListener("error", f.errorHandler), f.video_el.addEventListener("canplay", f.safeToBeControlled), f.video_el.addEventListener("canplaythrough", f.safeToBeControlled), f.video_el.addEventListener("progress", f.updateProgress), f.video_el.addEventListener("timeupdate", f.updateVideo), f.video_el.addEventListener("pause", f.pauseHandler), f.video_el.addEventListener("play", f.playHandler), FWDEVPUtils.isIE || f.video_el.addEventListener("waiting", f.startToBuffer), f.video_el.addEventListener("playing", f.stopToBuffer), f.video_el.addEventListener("ended", f.endedHandler), f.resizeAndPosition()
            }, this.destroyVideo = function() {
                f.video_el && (f.video_el.removeEventListener("error", f.errorHandler), f.video_el.removeEventListener("canplay", f.safeToBeControlled), f.video_el.removeEventListener("canplaythrough", f.safeToBeControlled), f.video_el.removeEventListener("progress", f.updateProgress), f.video_el.removeEventListener("timeupdate", f.updateVideo), f.video_el.removeEventListener("pause", f.pauseHandler), f.video_el.removeEventListener("play", f.playHandler), FWDEVPUtils.isIE || f.video_el.removeEventListener("waiting", f.startToBuffer), f.video_el.removeEventListener("playing", f.stopToBuffer), f.video_el.removeEventListener("ended", f.endedHandler), f.isMobile_bl ? (f.screen.removeChild(f.video_el), f.video_el = null) : (f.video_el.style.visibility = "hidden", f.video_el.src = "", f.video_el.load()))
            }, this.startToBuffer = function() {
                f.dispatchEvent(b.START_TO_BUFFER)
            }, this.stopToBuffer = function() {
                f.dispatchEvent(b.STOP_TO_BUFFER)
            }, this.errorHandler = function(c) {
                var d;
                f.hasError_bl = !0, d = 0 == f.video_el.networkState ? "error 'self.video_el.networkState = 0'" : 1 == f.video_el.networkState ? "error 'self.video_el.networkState = 1'" : 2 == f.video_el.networkState ? "'self.video_el.networkState = 2'" : 3 == f.video_el.networkState ? "source not found <font color='#FFFFFF'>" + f.sourcePath_str + "</font>" : c, a.console && a.console.log(f.video_el.networkState), f.dispatchEvent(b.ERROR, {
                    text: d
                })
            }, this.resizeAndPosition = function(a, b) {
                a && (f.stageWidth = a, f.stageHeight = b), f.setWidth(f.stageWidth), f.setHeight(FWDEVPUtils.isIphone ? f.stageHeight - f.controllerHeight : f.stageHeight)
            }, this.setSource = function(a) {
                f.sourcePath_str = a, f.video_el && f.stop()
            }, this.play = function(a) {
                if (FWDEVPlayer.curInstance = c, f.isStopped_bl) f.isPlaying_bl = !1, f.hasError_bl = !1, f.allowScrubing_bl = !1, f.isStopped_bl = !1, f.setupVideo(), f.setVolume(), f.video_el.src = f.sourcePath_str, f.play(), f.startToBuffer(!0), f.isPlaying_bl = !0;
                else if (!f.video_el.ended || a) try {
                    f.isPlaying_bl = !0, f.hasPlayedOnce_bl = !0, f.video_el.play(), FWDEVPUtils.isIE && f.dispatchEvent(b.PLAY)
                } catch (d) {}
            }, this.pause = function() {
                if (null != f && !f.isStopped_bl && !f.hasError_bl && !f.video_el.ended) try {
                    f.video_el.pause(), f.isPlaying_bl = !1, FWDEVPUtils.isIE && f.dispatchEvent(b.PAUSE)
                } catch (a) {}
            }, this.togglePlayPause = function() {
                null != f && f.isSafeToBeControlled_bl && (f.isPlaying_bl ? f.pause() : f.play())
            }, this.pauseHandler = function() {
                f.allowScrubing_bl || f.dispatchEvent(b.PAUSE)
            }, this.playHandler = function() {
                f.allowScrubing_bl || (f.isStartEventDispatched_bl || (f.dispatchEvent(b.START), f.isStartEventDispatched_bl = !0), f.dispatchEvent(b.PLAY))
            }, this.endedHandler = function() {
                f.dispatchEvent(b.PLAY_COMPLETE)
            }, this.resume = function() {
                f.isStopped_bl || f.play()
            }, this.stop = function(a) {
                (null != f && null != f.video_el && !f.isStopped_bl || a) && (f.isPlaying_bl = !1, f.isStopped_bl = !0, f.hasPlayedOnce_bl = !0, f.isSafeToBeControlled_bl = !1, f.isStartEventDispatched_bl = !1, f.destroyVideo(), f.dispatchEvent(b.LOAD_PROGRESS, {
                    percent: 0
                }), f.dispatchEvent(b.UPDATE_TIME, {
                    curTime: "00:00",
                    totalTime: "00:00"
                }), f.dispatchEvent(b.STOP), f.stopToBuffer())
            }, this.safeToBeControlled = function() {
                f.stopToScrub(), f.isSafeToBeControlled_bl || (f.hasHours_bl = Math.floor(f.video_el.duration / 3600) > 0, f.isPlaying_bl = !0, f.isSafeToBeControlled_bl = !0, f.video_el.style.visibility = "visible", f.dispatchEvent(b.SAFE_TO_SCRUBB))
            }, this.updateProgress = function() {
                var a, c = 0;
                f.video_el.buffered.length > 0 && (a = f.video_el.buffered.end(f.video_el.buffered.length - 1), c = a.toFixed(1) / f.video_el.duration.toFixed(1), (isNaN(c) || !c) && (c = 0)), 1 == c && f.video_el.removeEventListener("progress", f.updateProgress), f.dispatchEvent(b.LOAD_PROGRESS, {
                    percent: c
                })
            }, this.updateVideo = function() {
                var a;
                f.allowScrubing_bl || (a = f.video_el.currentTime / f.video_el.duration, f.dispatchEvent(b.UPDATE, {
                    percent: a
                }));
                var c = f.formatTime(f.video_el.duration),
                    d = f.formatTime(f.video_el.currentTime);
                isNaN(f.video_el.duration) ? f.dispatchEvent(b.UPDATE_TIME, {
                    curTime: "00:00",
                    totalTime: "00:00",
                    seconds: 0
                }) : f.dispatchEvent(b.UPDATE_TIME, {
                    curTime: d,
                    totalTime: c,
                    seconds: parseInt(f.video_el.currentTime)
                }), f.lastPercentPlayed = a, f.curDuration = d
            }, this.startToScrub = function() {
                f.allowScrubing_bl = !0
            }, this.stopToScrub = function() {
                f.allowScrubing_bl = !1
            }, this.scrub = function(a, c) {
                c && f.startToScrub();
                try {
                    f.video_el.currentTime = f.video_el.duration * a;
                    var d = f.formatTime(f.video_el.duration),
                        e = f.formatTime(f.video_el.currentTime);
                    f.dispatchEvent(b.UPDATE_TIME, {
                        curTime: e,
                        totalTime: d
                    })
                } catch (c) {}
            }, this.replay = function() {
                f.scrub(0), f.play()
            }, this.setVolume = function(a) {
                a && (f.volume = a), f.video_el && (f.video_el.volume = f.volume)
            }, this.formatTime = function(a) {
                var b = Math.floor(a / 3600),
                    c = a % 3600,
                    d = Math.floor(c / 60),
                    e = c % 60,
                    g = Math.ceil(e);
                return d = d >= 10 ? d : "0" + d, g = g >= 10 ? g : "0" + g, isNaN(g) ? "00:00" : f.hasHours_bl ? b + ":" + d + ":" + g : d + ":" + g
            }, this.init()
        };
        b.setPrototype = function() {
            b.prototype = new FWDEVPDisplayObject("div")
        }, b.ERROR = "error", b.UPDATE = "update", b.UPDATE_TIME = "updateTime", b.SAFE_TO_SCRUBB = "safeToControll", b.LOAD_PROGRESS = "loadProgress", b.START = "start", b.PLAY = "play", b.PAUSE = "pause", b.STOP = "stop", b.PLAY_COMPLETE = "playComplete", b.START_TO_BUFFER = "startToBuffer", b.STOP_TO_BUFFER = "stopToBuffer", a.FWDEVPVideoScreen = b
    }(window),
    function(a) {
        var b = function(a, c, d) {
            var e = this,
                f = b.prototype;
            this.nImg = a, this.sPath_str = c, this.dPath_str = d, this.n_sdo, this.s_sdo, this.d_sdo, this.toolTipLabel_str, this.totalWidth = this.nImg.width, this.totalHeight = this.nImg.height, this.isSetToDisabledState_bl = !1, this.isDisabled_bl = !1, this.isSelectedFinal_bl = !1, this.isActive_bl = !1, this.isMobile_bl = FWDEVPUtils.isMobile, this.hasPointerEvent_bl = FWDEVPUtils.hasPointerEvent, this.allowToCreateSecondButton_bl = !e.isMobile_bl || e.hasPointerEvent_bl, e.init = function() {
                e.setupMainContainers()
            }, e.setupMainContainers = function() {
                if (e.n_sdo = new FWDEVPDisplayObject("img"), e.n_sdo.setScreen(e.nImg), e.addChild(e.n_sdo), e.allowToCreateSecondButton_bl) {
                    var a = new Image;
                    if (a.src = e.sPath_str, e.s_sdo = new FWDEVPDisplayObject("img"), e.s_sdo.setScreen(a), e.s_sdo.setWidth(e.totalWidth), e.s_sdo.setHeight(e.totalHeight), e.s_sdo.setAlpha(0), e.addChild(e.s_sdo), e.dPath_str) {
                        var b = new Image;
                        b.src = e.dPath_str, e.d_sdo = new FWDEVPDisplayObject("img"), e.d_sdo.setScreen(b), e.d_sdo.setWidth(e.totalWidth), e.d_sdo.setHeight(e.totalHeight), e.isMobile_bl ? e.d_sdo.setX(-100) : e.d_sdo.setAlpha(0), e.addChild(e.d_sdo)
                    }
                }
                e.setWidth(e.totalWidth), e.setHeight(e.totalHeight), e.setButtonMode(!0), e.isMobile_bl ? e.hasPointerEvent_bl ? (e.screen.addEventListener("pointerdown", e.onMouseUp), e.screen.addEventListener("pointerover", e.onMouseOver), e.screen.addEventListener("pointerout", e.onMouseOut)) : e.screen.addEventListener("touchend", e.onMouseUp) : e.screen.addEventListener ? (e.screen.addEventListener("mouseover", e.onMouseOver), e.screen.addEventListener("mouseout", e.onMouseOut), e.screen.addEventListener("mousedown", e.onMouseUp)) : e.screen.attachEvent && (e.screen.attachEvent("onmouseover", e.onMouseOver), e.screen.attachEvent("onmouseout", e.onMouseOut), e.screen.attachEvent("onmousedown", e.onMouseUp))
            }, e.onMouseOver = function(a) {
                if (!a.pointerType || a.pointerType == a.MSPOINTER_TYPE_MOUSE) {
                    if (e.isDisabled_bl || e.isSelectedFinal_bl) return;
                    e.dispatchEvent(b.MOUSE_OVER, {
                        e: a
                    }), FWDEVPTweenMax.killTweensOf(e.s_sdo), FWDEVPTweenMax.to(e.s_sdo, .5, {
                        alpha: 1,
                        delay: .1,
                        ease: Expo.easeOut
                    })
                }
            }, e.onMouseOut = function(a) {
                if (!a.pointerType || a.pointerType == a.MSPOINTER_TYPE_MOUSE) {
                    if (e.isDisabled_bl || e.isSelectedFinal_bl) return;
                    e.dispatchEvent(b.MOUSE_OUT, {
                        e: a
                    }), FWDEVPTweenMax.killTweensOf(e.s_sdo), FWDEVPTweenMax.to(e.s_sdo, .5, {
                        alpha: 0,
                        ease: Expo.easeOut
                    })
                }
            }, e.onMouseUp = function(a) {
                a.preventDefault && a.preventDefault(), e.isDisabled_bl || 2 == a.button || e.isSelectedFinal_bl || e.dispatchEvent(b.MOUSE_UP, {
                    e: a
                })
            }, e.setSelctedFinal = function() {
                e.isSelectedFinal_bl = !0, FWDEVPTweenMax.killTweensOf(e.s_sdo), FWDEVPTweenMax.to(e.s_sdo, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                }), e.setButtonMode(!1)
            }, e.setUnselctedFinal = function() {
                e.isSelectedFinal_bl = !1, FWDEVPTweenMax.to(e.s_sdo, .8, {
                    alpha: 0,
                    delay: .1,
                    ease: Expo.easeOut
                }), e.setButtonMode(!0)
            }, this.setDisabledState = function() {
                e.isSetToDisabledState_bl || (e.isSetToDisabledState_bl = !0, e.isMobile_bl ? e.d_sdo.setX(0) : (FWDEVPTweenMax.killTweensOf(e.d_sdo), FWDEVPTweenMax.to(e.d_sdo, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                })))
            }, this.setEnabledState = function() {
                e.isSetToDisabledState_bl && (e.isSetToDisabledState_bl = !1, e.isMobile_bl ? e.d_sdo.setX(-100) : (FWDEVPTweenMax.killTweensOf(e.d_sdo), FWDEVPTweenMax.to(e.d_sdo, .8, {
                    alpha: 0,
                    delay: .1,
                    ease: Expo.easeOut
                })))
            }, this.disable = function() {
                e.isDisabled_bl = !0, e.setButtonMode(!1)
            }, this.enable = function() {
                e.isDisabled_bl = !1, e.setButtonMode(!0)
            }, e.destroy = function() {
                e.isMobile_bl ? e.hasPointerEvent_bl ? (e.screen.removeEventListener("pointerdown", e.onMouseUp), e.screen.removeEventListener("pointerover", e.onMouseOver), e.screen.removeEventListener("pointerout", e.onMouseOut)) : e.screen.removeEventListener("touchend", e.onMouseUp) : e.screen.removeEventListener ? (e.screen.removeEventListener("mouseover", e.onMouseOver), e.screen.removeEventListener("mouseout", e.onMouseOut), e.screen.removeEventListener("mousedown", e.onMouseUp)) : e.screen.detachEvent && (e.screen.detachEvent("onmouseover", e.onMouseOver), e.screen.detachEvent("onmouseout", e.onMouseOut), e.screen.detachEvent("onmousedown", e.onMouseUp)), FWDEVPTweenMax.killTweensOf(e.s_sdo), e.n_sdo.destroy(), e.s_sdo.destroy(), e.d_sdo && (FWDEVPTweenMax.killTweensOf(e.d_sdo), e.d_sdo.destroy()), e.nImg = null, e.sImg = null, e.dImg = null, e.n_sdo = null, e.s_sdo = null, e.d_sdo = null, a = null, sImg = null, dImg = null, e.toolTipLabel_str = null, e.init = null, e.setupMainContainers = null, e.onMouseOver = null, e.onMouseOut = null, e.onClick = null, e.onMouseDown = null, e.setSelctedFinal = null, e.setUnselctedFinal = null, e.setInnerHTML(""), f.destroy(), e = null, f = null, b.prototype = null
            }, e.init()
        };
        b.setPrototype = function() {
            b.prototype = null, b.prototype = new FWDEVPDisplayObject("div")
        }, b.CLICK = "onClick", b.MOUSE_OVER = "onMouseOver", b.MOUSE_OUT = "onMouseOut", b.MOUSE_UP = "onMouseDown", b.prototype = null, a.FWDEVPVolumeButton = b
    }(window),
    function(a) {
        var b = function(a, c) {
            var d = this;
            b.prototype, this.main_do = null, this.ytb = null, this.lastQuality_str = "auto", this.volume = c, this.updateVideoId_int, this.updatePreloadId_int, this.controllerHeight = a.data.controllerHeight, this.hasHours_bl = !1, this.hasBeenCreatedOnce_bl = !1, this.allowScrubing_bl = !1, this.hasError_bl = !1, this.isPlaying_bl = !1, this.isStopped_bl = !0, this.isStartEventDispatched_bl = !1, this.isSafeToBeControlled_bl = !1, this.isPausedInEvent_bl = !0, this.isShowed_bl = !0, this.isCued_bl = !1, this.isQualityArrayDisapatched_bl = !1, this.isMobile_bl = FWDEVPUtils.isMobile, this.init = function() {
                d.hasTransform3d_bl = !1, d.hasTransform2d_bl = !1, d.setBackfaceVisibility(), a.main_do.addChild(d), d.resizeAndPosition(), d.setupVideo(), d.setupDisableClick(), d.setWidth(1), d.setHeight(1)
            }, this.setupDisableClick = function() {
                d.disableClick_do = new FWDEVPDisplayObject("div"), d.disableClick_do.setBkColor(a.backgroundColor_str), d.addChild(d.disableClick_do)
            }, this.showDisable = function() {
                a.tempVidStageWidth && d.disableClick_do.w != d.stageWidth && (d.disableClick_do.setWidth(a.tempVidStageWidth), d.disableClick_do.setHeight(FWDEVPUtils.isIphone ? a.tempVidStageHeight - d.controllerHeight : a.tempVidStageHeight))
            }, this.hideDisable = function() {
                0 != d.disableClick_do.w && (d.disableClick_do.setWidth(0), d.disableClick_do.setHeight(0))
            }, this.setupVideo = function() {
                d.ytb || (d.main_do = new FWDEVPDisplayObject("div"), d.main_do.hasTransform3d_bl = !1, d.main_do.hasTransform2d_bl = !1, d.main_do.screen.setAttribute("id", a.instanceName_str + "youtube"), d.main_do.getStyle().width = "100%", d.main_do.getStyle().height = "100%", d.main_do.setBackfaceVisibility(), d.addChild(d.main_do), d.ytb = new YT.Player(a.instanceName_str + "youtube", {
                    width: "100%",
                    height: "100%",
                    playerVars: {
                        controls: 0,
                        disablekb: 0,
                        loop: 0,
                        autoplay: 0,
                        wmode: "opaque",
                        showinfo: 0,
                        rel: 0,
                        modestbranding: 1,
                        iv_load_policy: 3,
                        cc_load_policy: 0,
                        fs: 0,
                        html5: 0
                    },
                    events: {
                        onReady: d.playerReadyHandler,
                        onError: d.playerErrorHandler,
                        onStateChange: d.stateChangeHandler,
                        onPlaybackQualityChange: d.qualityChangeHandler
                    }
                }))
            }, this.playerReadyHandler = function() {
                d.resizeAndPosition(), d.dispatchEvent(b.READY), d.hasBeenCreatedOnce_bl = !0
            }, this.stateChangeHandler = function(c) {
                if (-1 == c.data && d.isCued_bl && d.isMobile_bl && (d.isStopped_bl = !1, FWDEVPlayer.stopAllVideos(a)), c.data == YT.PlayerState.PLAYING) d.isSafeToBeControlled_bl || (d.isStopped_bl = !1, d.isSafeToBeControlled_bl = !0, d.isPlaying_bl = !0, d.hasHours_bl = Math.floor(d.ytb.getDuration() / 3600) > 0, d.setVolume(d.volume), d.startToUpdate(), d.startToPreload(), d.scrub(1e-5), d.isMobile_bl || d.setQuality(d.lastQuality_str), d.ytb.getAvailableQualityLevels() && 0 != d.ytb.getAvailableQualityLevels().length && d.dispatchEvent(b.QUALITY_CHANGE, {
                    qualityLevel: d.ytb.getPlaybackQuality(),
                    levels: d.ytb.getAvailableQualityLevels()
                }), d.dispatchEvent(b.SAFE_TO_SCRUBB)), d.isPausedInEvent_bl && d.dispatchEvent(b.PLAY), d.isPausedInEvent_bl = !1, d.hasError_bl = !1;
                else if (c.data == YT.PlayerState.PAUSED) {
                    if (!d.isSafeToBeControlled_bl) return;
                    d.isStopped_bl = !1, d.isPausedInEvent_bl || d.dispatchEvent(b.PAUSE), d.isPausedInEvent_bl = !0
                } else c.data == YT.PlayerState.ENDED ? d.ytb.getCurrentTime() && d.ytb.getCurrentTime() > 0 && (d.isStopped_bl = !1, setTimeout(function() {
                    d.dispatchEvent(b.PLAY_COMPLETE)
                }, 100)) : c.data == YT.PlayerState.CUED && (d.isStopped_bl || d.dispatchEvent(b.CUED), d.isCued_bl = !0)
            }, this.qualityChangeHandler = function() {
                d.ytb.getAvailableQualityLevels() && 0 != d.ytb.getAvailableQualityLevels().length && d.dispatchEvent(b.QUALITY_CHANGE, {
                    qualityLevel: d.ytb.getPlaybackQuality()
                })
            }, this.playerErrorHandler = function(a) {
                if (d.isPausedInEvent_bl = !0, !d.isStopped_bl && !d.hasError_bl) {
                    var c = "";
                    d.hasError_bl = !0, 2 == a.data ? c = "The youtube id is not well formatted, make sure it has exactly 11 characters and that it dosn't contain invalid characters such as exclamation points or asterisks." : 5 == a.data ? c = "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred." : 100 == a.data ? c = "The youtube video request was not found, probably the video ID is incorrect." : (101 == a.data || 150 == a.data) && (c = "The owner of the requested video does not allow it to be played in embedded players."), d.dispatchEvent(b.ERROR, {
                        text: c
                    })
                }
            }, this.resizeAndPosition = function() {
                a.tempVidStageWidth && (d.setWidth(a.tempVidStageWidth), d.setHeight(FWDEVPUtils.isIphone ? a.tempVidStageHeight - d.controllerHeight : a.tempVidStageHeight))
            }, this.setSource = function(a) {
                a && (d.sourcePath_str = a), d.ytb.cueVideoById(d.sourcePath_str), d.isMobile_bl || (d.isStopped_bl = !1)
            }, this.play = function() {
                FWDEVPlayer.curInstance = a, d.isPlaying_bl = !0, d.hasError_bl = !1;
                try {
                    d.ytb.playVideo(), d.startToUpdate()
                } catch (b) {}
                d.isMobile_bl || (d.isStopped_bl = !1)
            }, this.pause = function() {
                if (!d.isStopped_bl && !d.hasError_bl) {
                    d.isPlaying_bl = !1;
                    try {
                        d.ytb.pauseVideo()
                    } catch (a) {}
                    d.stopToUpdate()
                }
            }, this.togglePlayPause = function() {
                d.isPlaying_bl ? d.pause() : d.play()
            }, this.resume = function() {
                d.isStopped_bl || d.play()
            }, this.startToUpdate = function() {
                clearInterval(d.updateVideoId_int), d.updateVideoId_int = setInterval(d.updateVideo, 500)
            }, this.stopToUpdate = function() {
                clearInterval(d.updateVideoId_int)
            }, this.updateVideo = function() {
                var a;
                if (!d.ytb) return void stopToUpdate();
                d.allowScrubing_bl || (a = d.ytb.getCurrentTime() / d.ytb.getDuration(), d.dispatchEvent(b.UPDATE, {
                    percent: a
                }));
                var c = d.formatTime(d.ytb.getDuration()),
                    e = d.formatTime(d.ytb.getCurrentTime());
                d.dispatchEvent(b.UPDATE_TIME, {
                    curTime: e,
                    totalTime: c,
                    seconds: parseInt(d.ytb.getCurrentTime())
                })
            }, this.startToPreload = function() {
                clearInterval(d.preloadVideoId_int), d.updatePreloadId_int = setInterval(d.updateProgress, 500)
            }, this.stopToPreload = function() {
                clearInterval(d.updatePreloadId_int)
            }, this.updateProgress = function() {
                if (!d.ytb) return void stopToPreload();
                var a = d.ytb.getVideoLoadedFraction();
                d.dispatchEvent(b.LOAD_PROGRESS, {
                    percent: a
                })
            }, this.stop = function() {
                d.isStopped_bl || (d.isPlaying_bl = !1, d.isStopped_bl = !0, d.isCued_bl = !1, d.allowScrubing_bl = !1, d.isSafeToBeControlled_bl = !1, d.isQualityArrayDisapatched_bl = !1, d.isPausedInEvent_bl = !0, d.stopToUpdate(), d.stopToPreload(), d.stopVideo(), d.dispatchEvent(b.STOP), d.dispatchEvent(b.LOAD_PROGRESS, {
                    percent: 0
                }), d.dispatchEvent(b.UPDATE_TIME, {
                    curTime: "00:00",
                    totalTime: "00:00"
                }))
            }, this.destroyYoutube = function() {
                d.main_do && (d.main_do.screen.removeAttribute("id", a.instanceName_str + "youtube"), d.main_do.destroy(), d.main_do = null), d.ytb && d.ytb.destroy(), d.ytb = null
            }, this.stopVideo = function() {
                d.isMobile_bl || d.ytb.cueVideoById(d.sourcePath_str)
            }, this.startToScrub = function() {
                d.isSafeToBeControlled_bl && (d.allowScrubing_bl = !0)
            }, this.stopToScrub = function() {
                d.isSafeToBeControlled_bl && (d.allowScrubing_bl = !1)
            }, this.scrub = function(a) {
                d.isSafeToBeControlled_bl && d.ytb.seekTo(a * d.ytb.getDuration())
            }, this.setVolume = function(a) {
                a && (d.volume = a), d.ytb && d.ytb.setVolume(100 * a)
            }, this.setQuality = function(a) {
                d.lastQuality_str = a, d.ytb.setPlaybackQuality(a)
            }, this.formatTime = function(a) {
                var b = Math.floor(a / 3600),
                    c = a % 3600,
                    e = Math.floor(c / 60),
                    f = c % 60,
                    g = Math.ceil(f);
                return e = e >= 10 ? e : "0" + e, g = g >= 10 ? g : "0" + g, isNaN(g) ? "00:00" : d.hasHours_bl ? b + ":" + e + ":" + g : e + ":" + g
            }, this.init()
        };
        b.setPrototype = function() {
            b.prototype = new FWDEVPDisplayObject("div")
        }, b.READY = "ready", b.ERROR = "error", b.UPDATE = "update", b.UPDATE_TIME = "updateTime", b.SAFE_TO_SCRUBB = "safeToControll", b.LOAD_PROGRESS = "loadProgress", b.PLAY = "play", b.PAUSE = "pause", b.STOP = "stop", b.PLAY_COMPLETE = "playComplete", b.CUED = "cued", b.QUALITY_CHANGE = "qualityChange", a.FWDEVPYoutubeScreen = b
    }(window),
    function() {
        var a = function(b, c, d, e) {
            var f = this;
            a.prototype, this.text_do = null, this.hd_do = null, this.dumy_do = null, this.label_str = b, this.normalColor_str = c, this.selectedColor_str = d, this.hdPath_str = e, this.totalWidth = 0, this.totalHeight = 23, this.hdWidth = 7, this.hdHeight = 5, this.hasHd_bl = !1, this.isMobile_bl = FWDEVPUtils.isMobile, this.isDisabled_bl = !1, this.init = function() {
                ("highres" == f.label_str || "hd1080" == f.label_str || "hd720" == f.label_str || "hd1440" == f.label_str || "hd2160" == f.label_str) && (f.hasHd_bl = !0), f.setBackfaceVisibility(), f.setupMainContainers(), f.setHeight(f.totalHeight)
            }, this.setupMainContainers = function() {
                if (f.text_do = new FWDEVPDisplayObject("div"), f.text_do.setBackfaceVisibility(), f.text_do.hasTransform3d_bl = !1, f.text_do.hasTransform2d_bl = !1, f.text_do.getStyle.whiteSpace = "nowrap", f.text_do.getStyle().fontFamily = "Arial", f.text_do.getStyle().fontSize = "12px", f.text_do.getStyle().color = f.normalColor_str, f.text_do.getStyle().fontSmoothing = "antialiased", f.text_do.getStyle().webkitFontSmoothing = "antialiased", f.text_do.getStyle().textRendering = "optimizeLegibility", f.text_do.setInnerHTML(f.label_str), f.addChild(f.text_do), f.hasHd_bl) {
                    var a = new Image;
                    a.src = f.hdPath_str, f.hd_do = new FWDEVPDisplayObject("img"), f.hd_do.setScreen(a), f.hd_do.setWidth(f.hdWidth), f.hd_do.setHeight(f.hdHeight), f.addChild(f.hd_do)
                }
                f.dumy_do = new FWDEVPDisplayObject("div"), FWDEVPUtils.isIE && (f.dumy_do.setBkColor("#000000"), f.dumy_do.setAlpha(1e-4)), f.dumy_do.setButtonMode(!0), f.dumy_do.setHeight(f.totalHeight), f.addChild(f.dumy_do), f.isMobile_bl ? f.hasPointerEvent_bl ? (f.dumy_do.screen.addEventListener("pointerup", f.onMouseUp), f.dumy_do.screen.addEventListener("pointerover", f.onMouseOver), f.dumy_do.screen.addEventListener("pointerout", f.onMouseOut)) : f.dumy_do.screen.addEventListener("touchend", f.onMouseUp) : f.dumy_do.screen.addEventListener ? (f.dumy_do.screen.addEventListener("mouseover", f.onMouseOver), f.dumy_do.screen.addEventListener("mouseout", f.onMouseOut), f.dumy_do.screen.addEventListener("mouseup", f.onMouseUp)) : f.dumy_do.screen.attachEvent && (f.dumy_do.screen.attachEvent("onmouseover", f.onMouseOver), f.dumy_do.screen.attachEvent("onmouseout", f.onMouseOut), f.dumy_do.screen.attachEvent("onmouseup", f.onMouseUp))
            }, this.onMouseOver = function(b) {
                f.isDisabled_bl || (f.setSelectedState(!0), f.dispatchEvent(a.MOUSE_OVER, {
                    e: b
                }))
            }, this.onMouseOut = function(b) {
                f.isDisabled_bl || (f.seNormalState(!0), f.dispatchEvent(a.MOUSE_OUT, {
                    e: b
                }))
            }, this.onMouseUp = function(b) {
                f.isDisabled_bl || 2 == b.button || (b.preventDefault && b.preventDefault(), f.dispatchEvent(a.CLICK, {
                    e: b
                }))
            }, this.setFinalSize = function() {
                if (0 == f.text_do.x) {
                    var a = f.text_do.getWidth() + 34,
                        b = f.text_do.getHeight();
                    f.text_do.setX(18), f.text_do.setY(parseInt((f.totalHeight - b) / 2)), f.hd_do && (f.hd_do.setX(a - 12), f.hd_do.setY(f.text_do.y + 1)), f.dumy_do.setWidth(a), f.setWidth(a)
                }
            }, this.setSelectedState = function(a) {
                FWDEVPTweenMax.killTweensOf(f.text_do), a ? FWDEVPTweenMax.to(f.text_do.screen, .5, {
                    css: {
                        color: f.selectedColor_str
                    },
                    ease: Expo.easeOut
                }) : f.text_do.getStyle().color = f.selectedColor_str
            }, this.seNormalState = function(a) {
                FWDEVPTweenMax.killTweensOf(f.text_do), a ? FWDEVPTweenMax.to(f.text_do.screen, .5, {
                    css: {
                        color: f.normalColor_str
                    },
                    ease: Expo.easeOut
                }) : f.text_do.getStyle().color = f.normalColor_str
            }, this.disable = function() {
                f.isDisabled_bl = !0, FWDEVPTweenMax.killTweensOf(f.text_do), f.setSelectedState(!0), f.dumy_do.setButtonMode(!1)
            }, this.enable = function() {
                f.isDisabled_bl = !1, FWDEVPTweenMax.killTweensOf(f.text_do), f.seNormalState(!0), f.dumy_do.setButtonMode(!0)
            }, f.init()
        };
        a.setPrototype = function() {
            a.prototype = new FWDEVPDisplayObject("div")
        }, a.MOUSE_OVER = "onMouseOver", a.MOUSE_OUT = "onMouseOut", a.CLICK = "onClick", a.prototype = null, window.FWDEVPYTBQButton = a
    }(window),
    function(a) {
        function b(b, c, d) {
            function e() {
                g && (g.apply(a, arguments), h || (delete c[f], g = null))
            }
            var f, g = d[0],
                h = b === k;
            return d[0] = e, f = b.apply(a, d), c[f] = {
                args: d,
                created: Date.now(),
                cb: g,
                id: f
            }, f
        }

        function c(b, c, d, e) {
            function f() {
                g.cb && (g.cb.apply(a, arguments), h || (delete d[e], g.cb = null))
            }
            var g = d[e];
            if (g) {
                var h = b === k;
                if (c(g.id), !h) {
                    var i = g.args[1],
                        j = Date.now() - g.created;
                    0 > j && (j = 0), i -= j, 0 > i && (i = 0), g.args[1] = i
                }
                g.args[0] = f, g.created = Date.now(), g.id = b.apply(a, g.args)
            }
        }
        var d = navigator.platform,
            e = !1;
        if (("iPad" == d || "iPhone" == d) && (e = !0), e) {
            var f = navigator.userAgent,
                g = !1;
            if (-1 != f.indexOf("6") && (g = !0), g) {
                var h = {},
                    i = {},
                    j = a.setTimeout,
                    k = a.setInterval,
                    l = a.clearTimeout,
                    m = a.clearInterval;
                a.setTimeout = function() {
                    return b(j, h, arguments)
                }, a.setInterval = function() {
                    return b(k, i, arguments)
                }, a.clearTimeout = function(a) {
                    var b = h[a];
                    b && (delete h[a], l(b.id))
                }, a.clearInterval = function(a) {
                    var b = i[a];
                    b && (delete i[a], m(b.id))
                }, a.addEventListener("scroll", function() {
                    var a;
                    for (a in h) c(j, l, h, a);
                    for (a in i) c(k, m, i, a)
                })
            }
        }
    }(window);


$(document).ready(function(){
$('.play').click(function(){
    $('#modalvideo').addClass('shown');
    $('body').addClass('overlay');
    $("#playvideo").html(play(  $(this).attr("data-youtube")));           
    return false; 
});

$('.video-close-btn').click(function() {
    $("#playvideo").children('iframe').attr('src', '');
    $('#modalvideo').removeClass('shown');
    $('body').removeClass('overlay');
});

function play(id)   {
   var html  = '';     
   html += '<iframe width="100%" height="auto" src="'+ id +'?controls=2&color=white&showinfo=0&modestbranding=1" frameborder="0" allowfullscreen></iframe>';
   return html;
};  

});