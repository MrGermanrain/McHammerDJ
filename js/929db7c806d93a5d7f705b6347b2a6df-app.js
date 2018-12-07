/******/ (function(modules) { // webpackBootstrap
/******/    // The module cache
/******/    var installedModules = {};
/******/
/******/    // The require function
/******/    function __webpack_require__(moduleId) {
/******/
/******/        // Check if module is in cache
/******/        if(installedModules[moduleId]) {
/******/            return installedModules[moduleId].exports;
/******/        }
/******/        // Create a new module (and put it into the cache)
/******/        var module = installedModules[moduleId] = {
/******/            i: moduleId,
/******/            l: false,
/******/            exports: {}
/******/        };
/******/
/******/        // Execute the module function
/******/        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/        // Flag the module as loaded
/******/        module.l = true;
/******/
/******/        // Return the exports of the module
/******/        return module.exports;
/******/    }
/******/
/******/
/******/    // expose the modules object (__webpack_modules__)
/******/    __webpack_require__.m = modules;
/******/
/******/    // expose the module cache
/******/    __webpack_require__.c = installedModules;
/******/
/******/    // define getter function for harmony exports
/******/    __webpack_require__.d = function(exports, name, getter) {
/******/        if(!__webpack_require__.o(exports, name)) {
/******/            Object.defineProperty(exports, name, {
/******/                configurable: false,
/******/                enumerable: true,
/******/                get: getter
/******/            });
/******/        }
/******/    };
/******/
/******/    // getDefaultExport function for compatibility with non-harmony modules
/******/    __webpack_require__.n = function(module) {
/******/        var getter = module && module.__esModule ?
/******/            function getDefault() { return module['default']; } :
/******/            function getModuleExports() { return module; };
/******/        __webpack_require__.d(getter, 'a', getter);
/******/        return getter;
/******/    };
/******/
/******/    // Object.prototype.hasOwnProperty.call
/******/    __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/    // __webpack_public_path__
/******/    __webpack_require__.p = "/assets";
/******/
/******/    // Load entry module and return exports
/******/    return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */!function (a, b) {
    "use strict";

    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function (a, b) {
    "use strict";

    var c = [],
        d = a.document,
        e = Object.getPrototypeOf,
        f = c.slice,
        g = c.concat,
        h = c.push,
        i = c.indexOf,
        j = {},
        k = j.toString,
        l = j.hasOwnProperty,
        m = l.toString,
        n = m.call(Object),
        o = {};

    function p(a, b) {
        b = b || d;
        var c = b.createElement("script");
        c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
    }
    var q = "3.2.1",
        r = function (a, b) {
        return new r.fn.init(a, b);
    },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        t = /^-ms-/,
        u = /-([a-z])/g,
        v = function (a, b) {
        return b.toUpperCase();
    };
    r.fn = r.prototype = {
        jquery: q,
        constructor: r,
        length: 0,
        toArray: function () {
            return f.call(this);
        },
        get: function (a) {
            return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a];
        },
        pushStack: function (a) {
            var b = r.merge(this.constructor(), a);
            return b.prevObject = this, b;
        },
        each: function (a) {
            return r.each(this, a);
        },
        map: function (a) {
            return this.pushStack(r.map(this, function (b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function () {
            return this.pushStack(f.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (a) {
            var b = this.length,
                c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: h,
        sort: c.sort,
        splice: c.splice
    }, r.extend = r.fn.extend = function () {
        var a,
            b,
            c,
            d,
            e,
            f,
            g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g;
    }, r.extend({
        expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (a) {
            throw new Error(a);
        },
        noop: function () {},
        isFunction: function (a) {
            return "function" === r.type(a);
        },
        isWindow: function (a) {
            return null != a && a === a.window;
        },
        isNumeric: function (a) {
            var b = r.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
        },
        isPlainObject: function (a) {
            var b, c;
            return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n));
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a;
        },
        globalEval: function (a) {
            p(a);
        },
        camelCase: function (a) {
            return a.replace(t, "ms-").replace(u, v);
        },
        each: function (a, b) {
            var c,
                d = 0;
            if (w(a)) {
                for (c = a.length; d < c; d++) if (b.call(a[d], d, a[d]) === !1) break;
            } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
            return a;
        },
        trim: function (a) {
            return null == a ? "" : (a + "").replace(s, "");
        },
        makeArray: function (a, b) {
            var c = b || [];
            return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c;
        },
        inArray: function (a, b, c) {
            return null == b ? -1 : i.call(b, a, c);
        },
        merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
            return a.length = e, a;
        },
        grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e;
        },
        map: function (a, b, c) {
            var d,
                e,
                f = 0,
                h = [];
            if (w(a)) for (d = a.length; f < d; f++) e = b(a[f], f, c), null != e && h.push(e);else for (f in a) e = b(a[f], f, c), null != e && h.push(e);
            return g.apply([], h);
        },
        guid: 1,
        proxy: function (a, b) {
            var c, d, e;
            if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function () {
                return a.apply(b || this, d.concat(f.call(arguments)));
            }, e.guid = a.guid = a.guid || r.guid++, e;
        },
        now: Date.now,
        support: o
    }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
        j["[object " + b + "]"] = b.toLowerCase();
    });

    function w(a) {
        var b = !!a && "length" in a && a.length,
            c = r.type(a);
        return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
    }
    var x = function (a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u = "sizzle" + 1 * new Date(),
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function (a, b) {
            return a === b && (l = !0), 0;
        },
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = function (a, b) {
            for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
            return -1;
        },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
            N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            O = new RegExp(K + "+", "g"),
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(N),
            U = new RegExp("^" + L + "$"),
            V = {
            ID: new RegExp("^#(" + L + ")"),
            CLASS: new RegExp("^\\.(" + L + ")"),
            TAG: new RegExp("^(" + L + "|[*])"),
            ATTR: new RegExp("^" + M),
            PSEUDO: new RegExp("^" + N),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + J + ")$", "i"),
            needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
        },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            aa = function (a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        },
            ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ca = function (a, b) {
            return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
        },
            da = function () {
            m();
        },
            ea = ta(function (a) {
            return a.disabled === !0 && ("form" in a || "label" in a);
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
        } catch (fa) {
            G = {
                apply: D.length ? function (a, b) {
                    F.apply(a, H.call(b));
                } : function (a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1;
                }
            };
        }

        function ga(a, b, d, e) {
            var f,
                h,
                j,
                k,
                l,
                o,
                r,
                s = b && b.ownerDocument,
                w = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
                    if (9 === w) {
                        if (!(j = b.getElementById(f))) return d;
                        if (j.id === f) return d.push(j), d;
                    } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
                } else {
                    if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
                    if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
                }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w) s = b, r = a;else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;
                        while (h--) o[h] = "#" + k + " " + sa(o[h]);
                        r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
                    }
                    if (r) try {
                        return G.apply(d, s.querySelectorAll(r)), d;
                    } catch (x) {} finally {
                        k === u && b.removeAttribute("id");
                    }
                }
            }
            return i(a.replace(P, "$1"), b, d, e);
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
            }
            return b;
        }

        function ia(a) {
            return a[u] = !0, a;
        }

        function ja(a) {
            var b = n.createElement("fieldset");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }

        function ka(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b;
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c) while (c = c.nextSibling) if (c === b) return -1;
            return a ? 1 : -1;
        }

        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }

        function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }

        function oa(a) {
            return function (b) {
                return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a;
            };
        }

        function pa(a) {
            return ia(function (b) {
                return b = +b, ia(function (c, d) {
                    var e,
                        f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }

        function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        c = ga.support = {}, f = ga.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName;
        }, m = ga.setDocument = function (a) {
            var b,
                e,
                g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
                return a.className = "i", !a.getAttribute("className");
            }), c.getElementsByTagName = ja(function (a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
            }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
            }), c.getById ? (d.filter.ID = function (a) {
                var b = a.replace(_, aa);
                return function (a) {
                    return a.getAttribute("id") === b;
                };
            }, d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : [];
                }
            }) : (d.filter.ID = function (a) {
                var b = a.replace(_, aa);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }, d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c,
                        d,
                        e,
                        f = b.getElementById(a);
                    if (f) {
                        if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
                        e = b.getElementsByName(a), d = 0;
                        while (f = e[d++]) if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
                    }
                    return [];
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
            } : function (a, b) {
                var c,
                    d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a);
            }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
            }), ja(function (a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
            })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function (a, b) {
                if (b) while (b = b.parentNode) if (b === a) return !0;
                return !1;
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
            } : function (a, b) {
                if (a === b) return l = !0, 0;
                var c,
                    d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
            }, n) : n;
        }, ga.matches = function (a, b) {
            return ga(a, null, null, b);
        }, ga.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return ga(b, n, null, [a]).length > 0;
        }, ga.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, ga.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, ga.escape = function (a) {
            return (a + "").replace(ba, ca);
        }, ga.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, ga.uniqueSort = function (a) {
            var b,
                d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1);
            }
            return k = null, a;
        }, e = ga.getText = function (a) {
            var b,
                c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
                } else if (3 === f || 4 === f) return a.nodeValue;
            } else while (b = a[d++]) c += e(b);
            return c;
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: V,
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
                ATTR: function (a) {
                    return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
                },
                PSEUDO: function (a) {
                    var b,
                        c = !a[6] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(_, aa).toLowerCase();
                    return "*" === a ? function () {
                        return !0;
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                },
                ATTR: function (a, b, c) {
                    return function (d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
                    };
                },
                CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode;
                    } : function (b, c, i) {
                        var j,
                            k,
                            l,
                            m,
                            n,
                            o,
                            p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p]) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if (1 === m.nodeType && ++t && m === b) {
                                    k[a] = [w, n, t];
                                    break;
                                }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0;
                        }
                    };
                },
                PSEUDO: function (a, b) {
                    var c,
                        e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                        var d,
                            f = e(a, b),
                            g = f.length;
                        while (g--) d = I(a, f[g]), a[d] = !(c[d] = f[g]);
                    }) : function (a) {
                        return e(a, 0, c);
                    }) : e;
                }
            },
            pseudos: {
                not: ia(function (a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(P, "$1"));
                    return d[u] ? ia(function (a, b, c, e) {
                        var f,
                            g = d(a, null, e, []),
                            h = a.length;
                        while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
                    };
                }),
                has: ia(function (a) {
                    return function (b) {
                        return ga(a, b).length > 0;
                    };
                }),
                contains: ia(function (a) {
                    return a = a.replace(_, aa), function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }),
                lang: ia(function (a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function (a) {
                    return a === o;
                },
                focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: oa(!1),
                disabled: oa(!0),
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0;
                },
                parent: function (a) {
                    return !d.pseudos.empty(a);
                },
                header: function (a) {
                    return X.test(a.nodeName);
                },
                input: function (a) {
                    return W.test(a.nodeName);
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                },
                first: pa(function () {
                    return [0];
                }),
                last: pa(function (a, b) {
                    return [b - 1];
                }),
                eq: pa(function (a, b, c) {
                    return [c < 0 ? c + b : c];
                }),
                even: pa(function (a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a;
                }),
                odd: pa(function (a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a;
                }),
                lt: pa(function (a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                    return a;
                }),
                gt: pa(function (a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                    return a;
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = ma(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = na(b);

        function ra() {}
        ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function (a, b) {
            var c,
                e,
                f,
                g,
                h,
                i,
                j,
                k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break;
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
        };

        function sa(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d;
        }

        function ta(a, b, c) {
            var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = x++;
            return b.first ? function (b, c, e) {
                while (b = b[d]) if (1 === b.nodeType || g) return a(b, c, e);
                return !1;
            } : function (b, c, i) {
                var j,
                    k,
                    l,
                    m = [w, h];
                if (i) {
                    while (b = b[d]) if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
                } else while (b = b[d]) if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;else {
                    if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];
                    if (k[f] = m, m[2] = a(b, c, i)) return !0;
                }return !1;
            };
        }

        function ua(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }

        function va(a, b, c) {
            for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
            return c;
        }

        function wa(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g;
        }

        function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
                var j,
                    k,
                    l,
                    m = [],
                    n = [],
                    o = g.length,
                    p = f || va(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : wa(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = wa(r, n), d(j, [], h, i), k = j.length;
                    while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i);
                        }
                        k = r.length;
                        while (k--) (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
            });
        }

        function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
                return a === b;
            }, h, !0), l = ta(function (a) {
                return I(b, a) > -1;
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e;
            }]; i < f; i++) if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; e < f; e++) if (d.relative[a[e].type]) break;
                    return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({
                        value: " " === a[i - 2].type ? "*" : ""
                    })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a));
                }
                m.push(c);
            }
            return ua(m);
        }

        function za(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function (f, g, h, i, k) {
                var l,
                    o,
                    q,
                    r = 0,
                    s = "0",
                    t = f && [],
                    u = [],
                    v = j,
                    x = f || e && d.find.TAG("*", k),
                    y = w += null == v ? 1 : Math.random() || .1,
                    z = x.length;
                for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                        while (q = a[o++]) if (q(l, g || n, h)) {
                            i.push(l);
                            break;
                        }
                        k && (w = y);
                    }
                    c && ((l = !q && l) && r--, f && t.push(l));
                }
                if (r += s, c && s !== r) {
                    o = 0;
                    while (q = b[o++]) q(t, u, g, h);
                    if (f) {
                        if (r > 0) while (s--) t[s] || u[s] || (u[s] = E.call(i));
                        u = wa(u);
                    }
                    G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
                }
                return k && (w = y, j = v), t;
            };
            return c ? ia(f) : f;
        }
        return h = ga.compile = function (a, b) {
            var c,
                d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, za(e, d)), f.selector = a;
            }
            return f;
        }, i = ga.select = function (a, b, c, e) {
            var f,
                i,
                j,
                k,
                l,
                m = "function" == typeof a && a,
                n = !e && g(a = m.selector || a);
            if (c = c || [], 1 === n.length) {
                if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;
                    m && (b = b.parentNode), a = a.slice(i.shift().value.length);
                }
                f = V.needsContext.test(a) ? 0 : i.length;
                while (f--) {
                    if (j = i[f], d.relative[k = j.type]) break;
                    if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
                        if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;
                        break;
                    }
                }
            }
            return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c;
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
        }), ja(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || ka("type|href|height|width", function (a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c.attributes && ja(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || ka("value", function (a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
        }), ja(function (a) {
            return null == a.getAttribute("disabled");
        }) || ka(J, function (a, b, c) {
            var d;
            if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), ga;
    }(a);
    r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
    var y = function (a, b, c) {
        var d = [],
            e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
            if (e && r(a).is(c)) break;
            d.push(a);
        }
        return d;
    },
        z = function (a, b) {
        for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
        return c;
    },
        A = r.expr.match.needsContext;

    function B(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }
    var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        D = /^.[^:#\[\.,]*$/;

    function E(a, b, c) {
        return r.isFunction(b) ? r.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c;
        }) : b.nodeType ? r.grep(a, function (a) {
            return a === b !== c;
        }) : "string" != typeof b ? r.grep(a, function (a) {
            return i.call(b, a) > -1 !== c;
        }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) {
            return i.call(b, a) > -1 !== c && 1 === a.nodeType;
        }));
    }
    r.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
            return 1 === a.nodeType;
        }));
    }, r.fn.extend({
        find: function (a) {
            var b,
                c,
                d = this.length,
                e = this;
            if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
                for (b = 0; b < d; b++) if (r.contains(e[b], this)) return !0;
            }));
            for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
            return d > 1 ? r.uniqueSort(c) : c;
        },
        filter: function (a) {
            return this.pushStack(E(this, a || [], !1));
        },
        not: function (a) {
            return this.pushStack(E(this, a || [], !0));
        },
        is: function (a) {
            return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
        }
    });
    var F,
        G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        H = r.fn.init = function (a, b, c) {
        var e, f;
        if (!a) return this;
        if (c = c || F, "string" == typeof a) {
            if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b)) for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this;
            }
            return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
        }
        return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
    };
    H.prototype = r.fn, F = r(d);
    var I = /^(?:parents|prev(?:Until|All))/,
        J = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    r.fn.extend({
        has: function (a) {
            var b = r(a, this),
                c = b.length;
            return this.filter(function () {
                for (var a = 0; a < c; a++) if (r.contains(this, b[a])) return !0;
            });
        },
        closest: function (a, b) {
            var c,
                d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && r(a);
            if (!A.test(a)) for (; d < e; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
        },
        index: function (a) {
            return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (a, b) {
            return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    });

    function K(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a;
    }
    r.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function (a) {
            return y(a, "parentNode");
        },
        parentsUntil: function (a, b, c) {
            return y(a, "parentNode", c);
        },
        next: function (a) {
            return K(a, "nextSibling");
        },
        prev: function (a) {
            return K(a, "previousSibling");
        },
        nextAll: function (a) {
            return y(a, "nextSibling");
        },
        prevAll: function (a) {
            return y(a, "previousSibling");
        },
        nextUntil: function (a, b, c) {
            return y(a, "nextSibling", c);
        },
        prevUntil: function (a, b, c) {
            return y(a, "previousSibling", c);
        },
        siblings: function (a) {
            return z((a.parentNode || {}).firstChild, a);
        },
        children: function (a) {
            return z(a.firstChild);
        },
        contents: function (a) {
            return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a), r.merge([], a.childNodes));
        }
    }, function (a, b) {
        r.fn[a] = function (c, d) {
            var e = r.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e);
        };
    });
    var L = /[^\x20\t\r\n\f]+/g;

    function M(a) {
        var b = {};
        return r.each(a.match(L) || [], function (a, c) {
            b[c] = !0;
        }), b;
    }
    r.Callbacks = function (a) {
        a = "string" == typeof a ? M(a) : r.extend({}, a);
        var b,
            c,
            d,
            e,
            f = [],
            g = [],
            h = -1,
            i = function () {
            for (e = e || a.once, d = b = !0; g.length; h = -1) {
                c = g.shift();
                while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
            }
            a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
        },
            j = {
            add: function () {
                return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                    r.each(b, function (b, c) {
                        r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
                    });
                }(arguments), c && !b && i()), this;
            },
            remove: function () {
                return r.each(arguments, function (a, b) {
                    var c;
                    while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h--;
                }), this;
            },
            has: function (a) {
                return a ? r.inArray(a, f) > -1 : f.length > 0;
            },
            empty: function () {
                return f && (f = []), this;
            },
            disable: function () {
                return e = g = [], f = c = "", this;
            },
            disabled: function () {
                return !f;
            },
            lock: function () {
                return e = g = [], c || b || (f = c = ""), this;
            },
            locked: function () {
                return !!e;
            },
            fireWith: function (a, c) {
                return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
            },
            fire: function () {
                return j.fireWith(this, arguments), this;
            },
            fired: function () {
                return !!d;
            }
        };
        return j;
    };

    function N(a) {
        return a;
    }

    function O(a) {
        throw a;
    }

    function P(a, b, c, d) {
        var e;
        try {
            a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d));
        } catch (a) {
            c.apply(void 0, [a]);
        }
    }
    r.extend({
        Deferred: function (b) {
            var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
                d = "pending",
                e = {
                state: function () {
                    return d;
                },
                always: function () {
                    return f.done(arguments).fail(arguments), this;
                },
                "catch": function (a) {
                    return e.then(null, a);
                },
                pipe: function () {
                    var a = arguments;
                    return r.Deferred(function (b) {
                        r.each(c, function (c, d) {
                            var e = r.isFunction(a[d[4]]) && a[d[4]];
                            f[d[1]](function () {
                                var a = e && e.apply(this, arguments);
                                a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                then: function (b, d, e) {
                    var f = 0;

                    function g(b, c, d, e) {
                        return function () {
                            var h = this,
                                i = arguments,
                                j = function () {
                                var a, j;
                                if (!(b < f)) {
                                    if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                    j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i));
                                }
                            },
                                k = e ? j : function () {
                                try {
                                    j();
                                } catch (a) {
                                    r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i));
                                }
                            };
                            b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k));
                        };
                    }
                    return r.Deferred(function (a) {
                        c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O));
                    }).promise();
                },
                promise: function (a) {
                    return null != a ? r.extend(a, e) : e;
                }
            },
                f = {};
            return r.each(c, function (a, b) {
                var g = b[2],
                    h = b[5];
                e[b[1]] = g.add, h && g.add(function () {
                    d = h;
                }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
                }, f[b[0] + "With"] = g.fireWith;
            }), e.promise(f), b && b.call(f, f), f;
        },
        when: function (a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = f.call(arguments),
                g = r.Deferred(),
                h = function (a) {
                return function (c) {
                    d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e);
                };
            };
            if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();
            while (c--) P(e[c], h(c), g.reject);
            return g.promise();
        }
    });
    var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r.Deferred.exceptionHook = function (b, c) {
        a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
    }, r.readyException = function (b) {
        a.setTimeout(function () {
            throw b;
        });
    };
    var R = r.Deferred();
    r.fn.ready = function (a) {
        return R.then(a)["catch"](function (a) {
            r.readyException(a);
        }), this;
    }, r.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (a) {
            (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]));
        }
    }), r.ready.then = R.then;

    function S() {
        d.removeEventListener("DOMContentLoaded", S), a.removeEventListener("load", S), r.ready();
    }
    "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));
    var T = function (a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === r.type(c)) {
            e = !0;
            for (h in c) T(a, b, h, c[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
            return j.call(r(a), c);
        })), b)) for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
        U = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };

    function V() {
        this.expando = r.expando + V.uid++;
    }
    V.uid = 1, V.prototype = {
        cache: function (a) {
            var b = a[this.expando];
            return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b;
        },
        set: function (a, b, c) {
            var d,
                e = this.cache(a);
            if ("string" == typeof b) e[r.camelCase(b)] = c;else for (d in b) e[r.camelCase(d)] = b[d];
            return e;
        },
        get: function (a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
        },
        access: function (a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
        },
        remove: function (a, b) {
            var c,
                d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b) {
                    Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(L) || []), c = b.length;
                    while (c--) delete d[b[c]];
                }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
            }
        },
        hasData: function (a) {
            var b = a[this.expando];
            return void 0 !== b && !r.isEmptyObject(b);
        }
    };
    var W = new V(),
        X = new V(),
        Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function $(a) {
        return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a);
    }

    function _(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Z, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = $(c);
            } catch (e) {}
            X.set(a, b, c);
        } else c = void 0;
        return c;
    }
    r.extend({
        hasData: function (a) {
            return X.hasData(a) || W.hasData(a);
        },
        data: function (a, b, c) {
            return X.access(a, b, c);
        },
        removeData: function (a, b) {
            X.remove(a, b);
        },
        _data: function (a, b, c) {
            return W.access(a, b, c);
        },
        _removeData: function (a, b) {
            W.remove(a, b);
        }
    }), r.fn.extend({
        data: function (a, b) {
            var c,
                d,
                e,
                f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), _(f, d, e[d])));
                    W.set(f, "hasDataAttrs", !0);
                }
                return e;
            }
            return "object" == typeof a ? this.each(function () {
                X.set(this, a);
            }) : T(this, function (b) {
                var c;
                if (f && void 0 === b) {
                    if (c = X.get(f, a), void 0 !== c) return c;
                    if (c = _(f, a), void 0 !== c) return c;
                } else this.each(function () {
                    X.set(this, a, b);
                });
            }, null, b, arguments.length > 1, null, !0);
        },
        removeData: function (a) {
            return this.each(function () {
                X.remove(this, a);
            });
        }
    }), r.extend({
        queue: function (a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), d || [];
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = r.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = r._queueHooks(a, b),
                g = function () {
                r.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return W.get(a, c) || W.access(a, c, {
                empty: r.Callbacks("once memory").add(function () {
                    W.remove(a, [b + "queue", c]);
                })
            });
        }
    }), r.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = r.queue(this, a, b);
                r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
            });
        },
        dequeue: function (a) {
            return this.each(function () {
                r.dequeue(this, a);
            });
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", []);
        },
        promise: function (a, b) {
            var c,
                d = 1,
                e = r.Deferred(),
                f = this,
                g = this.length,
                h = function () {
                --d || e.resolveWith(f, [f]);
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = W.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
        ca = ["Top", "Right", "Bottom", "Left"],
        da = function (a, b) {
        return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
    },
        ea = function (a, b, c, d) {
        var e,
            f,
            g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
    };

    function fa(a, b, c, d) {
        var e,
            f = 1,
            g = 20,
            h = d ? function () {
            return d.cur();
        } : function () {
            return r.css(a, b, "");
        },
            i = h(),
            j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
            k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g);
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
    }
    var ga = {};

    function ha(a) {
        var b,
            c = a.ownerDocument,
            d = a.nodeName,
            e = ga[d];
        return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e, e);
    }

    function ia(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", W.set(d, "display", c)));
        for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
        return a;
    }
    r.fn.extend({
        show: function () {
            return ia(this, !0);
        },
        hide: function () {
            return ia(this);
        },
        toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                da(this) ? r(this).show() : r(this).hide();
            });
        }
    });
    var ja = /^(?:checkbox|radio)$/i,
        ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        la = /^$|\/(?:java|ecma)script/i,
        ma = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;

    function na(a, b) {
        var c;
        return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c;
    }

    function oa(a, b) {
        for (var c = 0, d = a.length; c < d; c++) W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"));
    }
    var pa = /<|&#?\w+;/;

    function qa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);else if (pa.test(f)) {
            g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || ["", ""])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];
            while (k--) g = g.lastChild;
            r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
        } else m.push(b.createTextNode(f));
        l.textContent = "", n = 0;
        while (f = m[n++]) if (d && r.inArray(f, d) > -1) e && e.push(f);else if (j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), "script"), j && oa(g), c) {
            k = 0;
            while (f = g[k++]) la.test(f.type || "") && c.push(f);
        }
        return l;
    }!function () {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();
    var ra = d.documentElement,
        sa = /^key/,
        ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ua = /^([^.]*)(?:\.(.+)|)/;

    function va() {
        return !0;
    }

    function wa() {
        return !1;
    }

    function xa() {
        try {
            return d.activeElement;
        } catch (a) {}
    }

    function ya(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) ya(a, h, c, d, b[h], f);
            return a;
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa;else if (!e) return a;
        return 1 === f && (g = e, e = function (a) {
            return r().off(a), g.apply(this, arguments);
        }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
            r.event.add(this, b, e, d, c);
        });
    }
    r.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q = W.get(a);
            if (q) {
                c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
                    return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
                }), b = (b || "").match(L) || [""], j = b.length;
                while (j--) h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && r.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0);
            }
        },
        remove: function (a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q = W.hasData(a) && W.get(a);
            if (q && (i = q.events)) {
                b = (b || "").match(L) || [""], j = b.length;
                while (j--) if (h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                    while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);
                } else for (n in i) r.event.remove(a, n + b[j], c, d, !0);
                r.isEmptyObject(i) && W.remove(a, "handle events");
            }
        },
        dispatch: function (a) {
            var b = r.event.fix(a),
                c,
                d,
                e,
                f,
                g,
                h,
                i = new Array(arguments.length),
                j = (W.get(this, "events") || {})[b.type] || [],
                k = r.event.special[b.type] || {};
            for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
            if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
                h = r.event.handlers.call(this, b, j), c = 0;
                while ((f = h[c++]) && !b.isPropagationStopped()) {
                    b.currentTarget = f.elem, d = 0;
                    while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
                }
                return k.postDispatch && k.postDispatch.call(this, b), b.result;
            }
        },
        handlers: function (a, b) {
            var c,
                d,
                e,
                f,
                g,
                h = [],
                i = b.delegateCount,
                j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (; j !== this; j = j.parentNode || this) if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
                f.length && h.push({
                    elem: j,
                    handlers: f
                });
            }
            return j = this, i < b.length && h.push({
                elem: j,
                handlers: b.slice(i)
            }), h;
        },
        addProp: function (a, b) {
            Object.defineProperty(r.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: r.isFunction(b) ? function () {
                    if (this.originalEvent) return b(this.originalEvent);
                } : function () {
                    if (this.originalEvent) return this.originalEvent[a];
                },
                set: function (b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    });
                }
            });
        },
        fix: function (a) {
            return a[r.expando] ? a : new r.Event(a);
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== xa() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === xa() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && B(this, "input")) return this.click(), !1;
                },
                _default: function (a) {
                    return B(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        }
    }, r.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c);
    }, r.Event = function (a, b) {
        return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);
    }, r.Event.prototype = {
        constructor: r.Event,
        isDefaultPrevented: wa,
        isPropagationStopped: wa,
        isImmediatePropagationStopped: wa,
        isSimulated: !1,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault();
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation();
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
        }
    }, r.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (a) {
            var b = a.button;
            return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
        }
    }, r.event.addProp), r.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        r.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c,
                    d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
            }
        };
    }), r.fn.extend({
        on: function (a, b, c, d) {
            return ya(this, a, b, c, d);
        },
        one: function (a, b, c, d) {
            return ya(this, a, b, c, d, 1);
        },
        off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this;
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), this.each(function () {
                r.event.remove(this, a, c, b);
            });
        }
    });
    var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Aa = /<script|<style|<link/i,
        Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ca = /^true\/(.*)/,
        Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ea(a, b) {
        return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a;
    }

    function Fa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }

    function Ga(a) {
        var b = Ca.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }

    function Ha(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c]);
            }
            X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i));
        }
    }

    function Ia(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
    }

    function Ja(a, b, c, d) {
        b = g.apply([], b);
        var e,
            f,
            h,
            i,
            j,
            k,
            l = 0,
            m = a.length,
            n = m - 1,
            q = b[0],
            s = r.isFunction(q);
        if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function (e) {
            var f = a.eq(e);
            s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d);
        });
        if (m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++) j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l);
            if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++) j = h[l], la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k));
        }
        return a;
    }

    function Ka(a, b, c) {
        for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d));
        return a;
    }
    r.extend({
        htmlPrefilter: function (a) {
            return a.replace(za, "<$1></$2>");
        },
        clone: function (a, b, c) {
            var d,
                e,
                f,
                g,
                h = a.cloneNode(!0),
                i = r.contains(a.ownerDocument, a);
            if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++) Ia(f[d], g[d]);
            if (b) if (c) for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++) Ha(f[d], g[d]);else Ha(a, h);
            return g = na(h, "script"), g.length > 0 && oa(g, !i && na(a, "script")), h;
        },
        cleanData: function (a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) if (U(c)) {
                if (b = c[W.expando]) {
                    if (b.events) for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                    c[W.expando] = void 0;
                }
                c[X.expando] && (c[X.expando] = void 0);
            }
        }
    }), r.fn.extend({
        detach: function (a) {
            return Ka(this, a, !0);
        },
        remove: function (a) {
            return Ka(this, a);
        },
        text: function (a) {
            return T(this, function (a) {
                return void 0 === a ? r.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
                });
            }, null, a, arguments.length);
        },
        append: function () {
            return Ja(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ea(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function () {
            return Ja(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ea(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function () {
            return Ja(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function () {
            return Ja(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = "");
            return this;
        },
        clone: function (a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function () {
                return r.clone(this, a, b);
            });
        },
        html: function (a) {
            return T(this, function (a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);
                    try {
                        for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a);
                        b = 0;
                    } catch (e) {}
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function () {
            var a = [];
            return Ja(this, arguments, function (b) {
                var c = this.parentNode;
                r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this));
            }, a);
        }
    }), r.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        r.fn[a] = function (a) {
            for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
            return this.pushStack(d);
        };
    });
    var La = /^margin/,
        Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
        Na = function (b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b);
    };
    !function () {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h);
                var b = a.getComputedStyle(i);
                c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null;
            }
        }
        var c,
            e,
            f,
            g,
            h = d.createElement("div"),
            i = d.createElement("div");
        i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, {
            pixelPosition: function () {
                return b(), c;
            },
            boxSizingReliable: function () {
                return b(), e;
            },
            pixelMarginRight: function () {
                return b(), f;
            },
            reliableMarginLeft: function () {
                return b(), g;
            }
        }));
    }();

    function Oa(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.style;
        return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
    }

    function Pa(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            }
        };
    }
    var Qa = /^(none|table(?!-c[ea]).+)/,
        Ra = /^--/,
        Sa = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
        Ta = {
        letterSpacing: "0",
        fontWeight: "400"
    },
        Ua = ["Webkit", "Moz", "ms"],
        Va = d.createElement("div").style;

    function Wa(a) {
        if (a in Va) return a;
        var b = a[0].toUpperCase() + a.slice(1),
            c = Ua.length;
        while (c--) if (a = Ua[c] + b, a in Va) return a;
    }

    function Xa(a) {
        var b = r.cssProps[a];
        return b || (b = r.cssProps[a] = Wa(a) || a), b;
    }

    function Ya(a, b, c) {
        var d = ba.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
    }

    function Za(a, b, c, d, e) {
        var f,
            g = 0;
        for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + ca[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
        return g;
    }

    function $a(a, b, c) {
        var d,
            e = Na(a),
            f = Oa(a, b, e),
            g = "border-box" === r.css(a, "boxSizing", !1, e);
        return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px");
    }
    r.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Oa(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
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
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e,
                    f,
                    g,
                    h = r.camelCase(b),
                    i = Ra.test(b),
                    j = a.style;
                return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c, "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0);
            }
        },
        css: function (a, b, c, d) {
            var e,
                f,
                g,
                h = r.camelCase(b),
                i = Ra.test(b);
            return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
        }
    }), r.each(["height", "width"], function (a, b) {
        r.cssHooks[b] = {
            get: function (a, c, d) {
                if (c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function () {
                    return $a(a, b, d);
                });
            },
            set: function (a, c, d) {
                var e,
                    f = d && Na(a),
                    g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
                return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ya(a, c, g);
            }
        };
    }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function (a, b) {
        if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, {
            marginLeft: 0
        }, function () {
            return a.getBoundingClientRect().left;
        })) + "px";
    }), r.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        r.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, La.test(a) || (r.cssHooks[a + b].set = Ya);
    }), r.fn.extend({
        css: function (a, b) {
            return T(this, function (a, b, c) {
                var d,
                    e,
                    f = {},
                    g = 0;
                if (Array.isArray(b)) {
                    for (d = Na(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
            }, a, b, arguments.length > 1);
        }
    });

    function _a(a, b, c, d, e) {
        return new _a.prototype.init(a, b, c, d, e);
    }
    r.Tween = _a, _a.prototype = {
        constructor: _a,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px");
        },
        cur: function () {
            var a = _a.propHooks[this.prop];
            return a && a.get ? a.get(this) : _a.propHooks._default.get(this);
        },
        run: function (a) {
            var b,
                c = _a.propHooks[this.prop];
            return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this;
        }
    }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
            },
            set: function (a) {
                r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit);
            }
        }
    }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, r.easing = {
        linear: function (a) {
            return a;
        },
        swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        },
        _default: "swing"
    }, r.fx = _a.prototype.init, r.fx.step = {};
    var ab,
        bb,
        cb = /^(?:toggle|show|hide)$/,
        db = /queueHooks$/;

    function eb() {
        bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick());
    }

    function fb() {
        return a.setTimeout(function () {
            ab = void 0;
        }), ab = r.now();
    }

    function gb(a, b) {
        var c,
            d = 0,
            e = {
            height: a
        };
        for (b = b ? 1 : 0; d < 4; d += 2 - b) c = ca[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e;
    }

    function hb(a, b, c) {
        for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++) if (d = e[f].call(c, b, a)) return d;
    }

    function ib(a, b, c) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            p = a.nodeType && da(a),
            q = W.get(a, "fxshow");
        c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
            g.unqueued || h();
        }), g.unqueued++, m.always(function () {
            m.always(function () {
                g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
            });
        }));
        for (d in b) if (e = b[d], cb.test(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d]) continue;
                p = !0;
            }
            n[d] = q && q[d] || r.style(a, d);
        }
        if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = W.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ia([a], !0), j = a.style.display || j, k = r.css(a, "display"), ia([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
                o.display = j;
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
            })), i = !1;
            for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", {
                display: j
            }), f && (q.hidden = !p), p && ia([a], !0), m.done(function () {
                p || ia([a]), W.remove(a, "fxshow");
                for (d in n) r.style(a, d, n[d]);
            })), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
        }
    }

    function jb(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = r.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }

    function kb(a, b, c) {
        var d,
            e,
            f = 0,
            g = kb.prefilters.length,
            h = r.Deferred().always(function () {
            delete i.elem;
        }),
            i = function () {
            if (e) return !1;
            for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1);
        },
            j = h.promise({
            elem: a,
            props: r.extend({}, b),
            opts: r.extend(!0, {
                specialEasing: {},
                easing: r.easing._default
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: ab || fb(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function (b) {
                var c = 0,
                    d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; c < d; c++) j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
            }
        }),
            k = j.props;
        for (jb(k, j.opts.specialEasing); f < g; f++) if (d = kb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
        return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r.fx.timer(r.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j;
    }
    r.Animation = r.extend(kb, {
        tweeners: {
            "*": [function (a, b) {
                var c = this.createTween(a, b);
                return fa(c.elem, a, ba.exec(b), c), c;
            }]
        },
        tweener: function (a, b) {
            r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(L);
            for (var c, d = 0, e = a.length; d < e; d++) c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b);
        },
        prefilters: [ib],
        prefilter: function (a, b) {
            b ? kb.prefilters.unshift(a) : kb.prefilters.push(a);
        }
    }), r.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? r.extend({}, a) : {
            complete: c || !c && b || r.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !r.isFunction(b) && b
        };
        return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue);
        }, d;
    }, r.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(da).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function (a, b, c, d) {
            var e = r.isEmptyObject(a),
                f = r.speed(b, c, d),
                g = function () {
                var b = kb(this, r.extend({}, a), f);
                (e || W.get(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = r.timers,
                    g = W.get(this);
                if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) g[e] && g[e].stop && db.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                !b && c || r.dequeue(this, a);
            });
        },
        finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b,
                    c = W.get(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = r.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), r.each(["toggle", "show", "hide"], function (a, b) {
        var c = r.fn[b];
        r.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e);
        };
    }), r.each({
        slideDown: gb("show"),
        slideUp: gb("hide"),
        slideToggle: gb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        r.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), r.timers = [], r.fx.tick = function () {
        var a,
            b = 0,
            c = r.timers;
        for (ab = r.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || r.fx.stop(), ab = void 0;
    }, r.fx.timer = function (a) {
        r.timers.push(a), r.fx.start();
    }, r.fx.interval = 13, r.fx.start = function () {
        bb || (bb = !0, eb());
    }, r.fx.stop = function () {
        bb = null;
    }, r.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, r.fn.delay = function (b, c) {
        return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function () {
                a.clearTimeout(e);
            };
        });
    }, function () {
        var a = d.createElement("input"),
            b = d.createElement("select"),
            c = b.appendChild(d.createElement("option"));
        a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value;
    }();
    var lb,
        mb = r.expr.attrHandle;
    r.fn.extend({
        attr: function (a, b) {
            return T(this, r.attr, a, b, arguments.length > 1);
        },
        removeAttr: function (a) {
            return this.each(function () {
                r.removeAttr(this, a);
            });
        }
    }), r.extend({
        attr: function (a, b, c) {
            var d,
                e,
                f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d));
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!o.radioValue && "radio" === b && B(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        },
        removeAttr: function (a, b) {
            var c,
                d = 0,
                e = b && b.match(L);
            if (e && 1 === a.nodeType) while (c = e[d++]) a.removeAttribute(c);
        }
    }), lb = {
        set: function (a, b, c) {
            return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = mb[b] || r.find.attr;
        mb[b] = function (a, b, d) {
            var e,
                f,
                g = b.toLowerCase();
            return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e;
        };
    });
    var nb = /^(?:input|select|textarea|button)$/i,
        ob = /^(?:a|area)$/i;
    r.fn.extend({
        prop: function (a, b) {
            return T(this, r.prop, a, b, arguments.length > 1);
        },
        removeProp: function (a) {
            return this.each(function () {
                delete this[r.propFix[a] || a];
            });
        }
    }), r.extend({
        prop: function (a, b, c) {
            var d,
                e,
                f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = r.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1;
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), o.optSelected || (r.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
        set: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        }
    }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        r.propFix[this.toLowerCase()] = this;
    });

    function pb(a) {
        var b = a.match(L) || [];
        return b.join(" ");
    }

    function qb(a) {
        return a.getAttribute && a.getAttribute("class") || "";
    }
    r.fn.extend({
        addClass: function (a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i = 0;
            if (r.isFunction(a)) return this.each(function (b) {
                r(this).addClass(a.call(this, b, qb(this)));
            });
            if ("string" == typeof a && a) {
                b = a.match(L) || [];
                while (c = this[i++]) if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
                    g = 0;
                    while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                    h = pb(d), e !== h && c.setAttribute("class", h);
                }
            }
            return this;
        },
        removeClass: function (a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i = 0;
            if (r.isFunction(a)) return this.each(function (b) {
                r(this).removeClass(a.call(this, b, qb(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(L) || [];
                while (c = this[i++]) if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
                    g = 0;
                    while (f = b[g++]) while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                    h = pb(d), e !== h && c.setAttribute("class", h);
                }
            }
            return this;
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
                r(this).toggleClass(a.call(this, c, qb(this), b), b);
            }) : this.each(function () {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = r(this), f = a.match(L) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                } else void 0 !== a && "boolean" !== c || (b = qb(this), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""));
            });
        },
        hasClass: function (a) {
            var b,
                c,
                d = 0;
            b = " " + a + " ";
            while (c = this[d++]) if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0;
            return !1;
        }
    });
    var rb = /\r/g;
    r.fn.extend({
        val: function (a) {
            var b,
                c,
                d,
                e = this[0];{
                if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function (a) {
                        return null == a ? "" : a + "";
                    })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
                });
                if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c);
            }
        }
    }), r.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = r.find.attr(a, "value");
                    return null != b ? b : pb(r.text(a));
                }
            },
            select: {
                get: function (a) {
                    var b,
                        c,
                        d,
                        e = a.options,
                        f = a.selectedIndex,
                        g = "select-one" === a.type,
                        h = g ? null : [],
                        i = g ? f + 1 : e.length;
                    for (d = f < 0 ? i : g ? f : 0; d < i; d++) if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) {
                        if (b = r(c).val(), g) return b;
                        h.push(b);
                    }
                    return h;
                },
                set: function (a, b) {
                    var c,
                        d,
                        e = a.options,
                        f = r.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        }
    }), r.each(["radio", "checkbox"], function () {
        r.valHooks[this] = {
            set: function (a, b) {
                if (Array.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1;
            }
        }, o.checkOn || (r.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });
    var sb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, {
        trigger: function (b, c, e, f) {
            var g,
                h,
                i,
                j,
                k,
                m,
                n,
                o = [e || d],
                p = l.call(b, "type") ? b.type : b,
                q = l.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;
                    i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
                }
                g = 0;
                while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;
            }
        },
        simulate: function (a, b, c) {
            var d = r.extend(new r.Event(), c, {
                type: a,
                isSimulated: !0
            });
            r.event.trigger(d, null, b);
        }
    }), r.fn.extend({
        trigger: function (a, b) {
            return this.each(function () {
                r.event.trigger(a, b, this);
            });
        },
        triggerHandler: function (a, b) {
            var c = this[0];
            if (c) return r.event.trigger(a, b, c, !0);
        }
    }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
        r.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), r.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        }
    }), o.focusin = "onfocusin" in a, o.focusin || r.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var c = function (a) {
            r.event.simulate(b, a.target, r.event.fix(a));
        };
        r.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this,
                    e = W.access(d, b);
                e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1);
            },
            teardown: function () {
                var d = this.ownerDocument || this,
                    e = W.access(d, b) - 1;
                e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b));
            }
        };
    });
    var tb = a.location,
        ub = r.now(),
        vb = /\?/;
    r.parseXML = function (b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = new a.DOMParser().parseFromString(b, "text/xml");
        } catch (d) {
            c = void 0;
        }
        return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c;
    };
    var wb = /\[\]$/,
        xb = /\r?\n/g,
        yb = /^(?:submit|button|image|reset|file)$/i,
        zb = /^(?:input|select|textarea|keygen)/i;

    function Ab(a, b, c, d) {
        var e;
        if (Array.isArray(b)) r.each(b, function (b, e) {
            c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d);
        });else if (c || "object" !== r.type(b)) d(a, b);else for (e in b) Ab(a + "[" + e + "]", b[e], c, d);
    }
    r.param = function (a, b) {
        var c,
            d = [],
            e = function (a, b) {
            var c = r.isFunction(b) ? b() : b;
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
        };
        if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
            e(this.name, this.value);
        });else for (c in a) Ab(c, a[c], b, e);
        return d.join("&");
    }, r.fn.extend({
        serialize: function () {
            return r.param(this.serializeArray());
        },
        serializeArray: function () {
            return this.map(function () {
                var a = r.prop(this, "elements");
                return a ? r.makeArray(a) : this;
            }).filter(function () {
                var a = this.type;
                return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a));
            }).map(function (a, b) {
                var c = r(this).val();
                return null == c ? null : Array.isArray(c) ? r.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(xb, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(xb, "\r\n")
                };
            }).get();
        }
    });
    var Bb = /%20/g,
        Cb = /#.*$/,
        Db = /([?&])_=[^&]*/,
        Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Gb = /^(?:GET|HEAD)$/,
        Hb = /^\/\//,
        Ib = {},
        Jb = {},
        Kb = "*/".concat("*"),
        Lb = d.createElement("a");
    Lb.href = tb.href;

    function Mb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d,
                e = 0,
                f = b.toLowerCase().match(L) || [];
            if (r.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }

    function Nb(a, b, c, d) {
        var e = {},
            f = a === Jb;

        function g(h) {
            var i;
            return e[h] = !0, r.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
            }), i;
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*");
    }

    function Ob(a, b) {
        var c,
            d,
            e = r.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && r.extend(!0, a, d), a;
    }

    function Pb(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break;
        }
        if (i[0] in c) f = i[0];else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        if (f) return f !== i[0] && i.unshift(f), c[f];
    }

    function Qb(a, b, c, d) {
        var e,
            f,
            g,
            h,
            i,
            j = {},
            k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (g !== !0) if (g && a["throws"]) b = g(b);else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    r.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: tb.href,
            type: "GET",
            isLocal: Fb.test(tb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": r.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a);
        },
        ajaxPrefilter: Mb(Ib),
        ajaxTransport: Mb(Jb),
        ajax: function (b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o = r.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
                s = r.Deferred(),
                t = r.Callbacks("once memory"),
                u = o.statusCode || {},
                v = {},
                w = {},
                x = "canceled",
                y = {
                readyState: 0,
                getResponseHeader: function (a) {
                    var b;
                    if (k) {
                        if (!h) {
                            h = {};
                            while (b = Eb.exec(g)) h[b[1].toLowerCase()] = b[2];
                        }
                        b = h[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function () {
                    return k ? g : null;
                },
                setRequestHeader: function (a, b) {
                    return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this;
                },
                overrideMimeType: function (a) {
                    return null == k && (o.mimeType = a), this;
                },
                statusCode: function (a) {
                    var b;
                    if (a) if (k) y.always(a[y.status]);else for (b in a) u[b] = [u[b], a[b]];
                    return this;
                },
                abort: function (a) {
                    var b = a || x;
                    return e && e.abort(b), A(0, b), this;
                }
            };
            if (s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""], null == o.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host;
                } catch (z) {
                    o.crossDomain = !0;
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Nb(Ib, o, c, y), k) return y;
            l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);
            for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();
            if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;
                o.async && o.timeout > 0 && (i = a.setTimeout(function () {
                    y.abort("timeout");
                }, o.timeout));
                try {
                    k = !1, e.send(v, A);
                } catch (z) {
                    if (k) throw z;
                    A(-1, z);
                }
            } else A(-1, "No Transport");

            function A(b, c, d, h) {
                var j,
                    m,
                    n,
                    v,
                    w,
                    x = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")));
            }
            return y;
        },
        getJSON: function (a, b, c) {
            return r.get(a, b, c, "json");
        },
        getScript: function (a, b) {
            return r.get(a, void 0, b, "script");
        }
    }), r.each(["get", "post"], function (a, b) {
        r[b] = function (a, c, d, e) {
            return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, r.isPlainObject(a) && a));
        };
    }), r._evalUrl = function (a) {
        return r.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        });
    }, r.fn.extend({
        wrapAll: function (a) {
            var b;
            return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a;
            }).append(this)), this;
        },
        wrapInner: function (a) {
            return r.isFunction(a) ? this.each(function (b) {
                r(this).wrapInner(a.call(this, b));
            }) : this.each(function () {
                var b = r(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function (a) {
            var b = r.isFunction(a);
            return this.each(function (c) {
                r(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function (a) {
            return this.parent(a).not("body").each(function () {
                r(this).replaceWith(this.childNodes);
            }), this;
        }
    }), r.expr.pseudos.hidden = function (a) {
        return !r.expr.pseudos.visible(a);
    }, r.expr.pseudos.visible = function (a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
    }, r.ajaxSettings.xhr = function () {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {}
    };
    var Rb = {
        0: 200,
        1223: 204
    },
        Sb = r.ajaxSettings.xhr();
    o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function (b) {
        var c, d;
        if (o.cors || Sb && !b.crossDomain) return {
            send: function (e, f) {
                var g,
                    h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function (a) {
                    return function () {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()));
                    };
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
                    4 === h.readyState && a.setTimeout(function () {
                        c && d();
                    });
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null);
                } catch (i) {
                    if (c) throw i;
                }
            },
            abort: function () {
                c && c();
            }
        };
    }), r.ajaxPrefilter(function (a) {
        a.crossDomain && (a.contents.script = !1);
    }), r.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (a) {
                return r.globalEval(a), a;
            }
        }
    }), r.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), r.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (e, f) {
                    b = r("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function (a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type);
                    }), d.head.appendChild(b[0]);
                },
                abort: function () {
                    c && c();
                }
            };
        }
    });
    var Tb = [],
        Ub = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = Tb.pop() || r.expando + "_" + ub++;
            return this[a] = !0, a;
        }
    }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e,
            f,
            g,
            h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || r.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments;
        }, d.always(function () {
            void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0;
        }), "script";
    }), o.createHTMLDocument = function () {
        var a = d.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
    }(), r.parseHTML = function (a, b, c) {
        if ("string" != typeof a) return [];
        "boolean" == typeof b && (c = b, b = !1);
        var e, f, g;
        return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = C.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes));
    }, r.fn.load = function (a, b, c) {
        var d,
            e,
            f,
            g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
        }).always(c && function (a, b) {
            g.each(function () {
                c.apply(this, f || [a.responseText, b, a]);
            });
        }), this;
    }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        r.fn[b] = function (a) {
            return this.on(b, a);
        };
    }), r.expr.pseudos.animated = function (a) {
        return r.grep(r.timers, function (b) {
            return a === b.elem;
        }).length;
    }, r.offset = {
        setOffset: function (a, b, c) {
            var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k = r.css(a, "position"),
                l = r(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        }
    }, r.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                r.offset.setOffset(this, a, b);
            });
            var b,
                c,
                d,
                e,
                f = this[0];
            if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, {
                top: d.top + e.pageYOffset - c.clientTop,
                left: d.left + e.pageXOffset - c.clientLeft
            }) : {
                top: 0,
                left: 0
            };
        },
        position: function () {
            if (this[0]) {
                var a,
                    b,
                    c = this[0],
                    d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B(a[0], "html") || (d = a.offset()), d = {
                    top: d.top + r.css(a[0], "borderTopWidth", !0),
                    left: d.left + r.css(a[0], "borderLeftWidth", !0)
                }), {
                    top: b.top - d.top - r.css(c, "marginTop", !0),
                    left: b.left - d.left - r.css(c, "marginLeft", !0)
                };
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent;
                while (a && "static" === r.css(a, "position")) a = a.offsetParent;
                return a || ra;
            });
        }
    }), r.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function (d) {
            return T(this, function (a, d, e) {
                var f;
                return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
            }, a, d, arguments.length);
        };
    }), r.each(["top", "left"], function (a, b) {
        r.cssHooks[b] = Pa(o.pixelPosition, function (a, c) {
            if (c) return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + "px" : c;
        });
    }), r.each({
        Height: "height",
        Width: "width"
    }, function (a, b) {
        r.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function (c, d) {
            r.fn[d] = function (e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (e === !0 || f === !0 ? "margin" : "border");
                return T(this, function (b, c, e) {
                    var f;
                    return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
                }, b, g ? e : void 0, g);
            };
        });
    }), r.fn.extend({
        bind: function (a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function (a, b) {
            return this.off(a, null, b);
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    }), r.holdReady = function (a) {
        a ? r.readyWait++ : r.ready(!0);
    }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == "function" && __webpack_require__(7) && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
        return r;
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
                __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    var Vb = a.jQuery,
        Wb = a.$;
    return r.noConflict = function (b) {
        return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r;
    }, b || (a.jQuery = a.$ = r), r;
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_ladda_min__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_ladda_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vendor_ladda_min__);


var stripeHandler;
var stripeExecuteUrl;

var payment = {
    stripeHandler: null,
    stripeExecuteUrl: null,
    stripeClick: function (event) {
        event.preventDefault();
        var form = $(event.target).parents('form');
        form.find('.hidden-payment-method').val('stripe');
        form.find('button').prop('disabled', true);
        var reEnableButtons = true;
        var panelLabel = 'Pay {{amount}}';
        if (form.attr('action').indexOf('tip') >= 0) {
            panelLabel = 'Tip {{amount}}';
        }
        if (stripeHandler === undefined) {
            var key = 'pk_live_vw1MsCEB2ZsflML3xSGSc8gh';
            if (window.location.host.substring(0, 9) === 'localhost') {
                key = 'pk_test_0IvxamZzJSHZBoNLuyPBAGnf';
            }
            stripeHandler = StripeCheckout.configure({
                key: key,
                image: '/assets/img/logo-stripe.png',
                locale: 'auto',
                panelLabel: panelLabel,
                token: function (token) {
                    reEnableButtons = false;
                    window.location = stripeExecuteUrl + '?id=' + token.id + '&email=' + token.email;
                }
            });
        }
        var l = __WEBPACK_IMPORTED_MODULE_0__vendor_ladda_min___default.a.create(event.target);
        l.start();
        $.ajax({
            type: 'POST',
            async: false,
            url: form.attr('action'),
            data: form.serialize()
        }).done(function (data) {
            stripeExecuteUrl = data.url;
            data.stripe.closed = function () {
                if (reEnableButtons) {
                    l.stop();
                    form.find('button').prop('disabled', false);
                }
            };
            stripeHandler.open(data.stripe);
        }).fail(function () {
            window.location = '/overwatch/boost';
        });
    },
    paypalClick: function (event) {
        event.preventDefault();
        var form = $(event.target).parents('form');
        form.find('.hidden-payment-method').val('paypal');
        form.find('button').prop('disabled', true);
        paypal.checkout.initXO();
        var l = __WEBPACK_IMPORTED_MODULE_0__vendor_ladda_min___default.a.create(event.target);
        l.start();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form.serialize()
        }).done(function (data) {
            paypal.checkout.startFlow(data);
        }).fail(function () {
            paypal.checkout.closeFlow();
            window.location = '/overwatch/boost';
        });
    }
};

/* harmony default export */ __webpack_exports__["a"] = (payment);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// MIT License:
//
// Copyright (c) 2010-2012, Joe Walnes
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/**
 * This behaves like a WebSocket in every way, except if it fails to connect,
 * or it gets disconnected, it will repeatedly poll until it successfully connects
 * again.
 *
 * It is API compatible, so when you have:
 *   ws = new WebSocket('ws://....');
 * you can replace with:
 *   ws = new ReconnectingWebSocket('ws://....');
 *
 * The event stream will typically look like:
 *  onconnecting
 *  onopen
 *  onmessage
 *  onmessage
 *  onclose // lost connection
 *  onconnecting
 *  onopen  // sometime later...
 *  onmessage
 *  onmessage
 *  etc...
 *
 * It is API compatible with the standard WebSocket API, apart from the following members:
 *
 * - `bufferedAmount`
 * - `extensions`
 * - `binaryType`
 *
 * Latest version: https://github.com/joewalnes/reconnecting-websocket/
 * - Joe Walnes
 *
 * Syntax
 * ======
 * var socket = new ReconnectingWebSocket(url, protocols, options);
 *
 * Parameters
 * ==========
 * url - The url you are connecting to.
 * protocols - Optional string or array of protocols.
 * options - See below
 *
 * Options
 * =======
 * Options can either be passed upon instantiation or set after instantiation:
 *
 * var socket = new ReconnectingWebSocket(url, null, { debug: true, reconnectInterval: 4000 });
 *
 * or
 *
 * var socket = new ReconnectingWebSocket(url);
 * socket.debug = true;
 * socket.reconnectInterval = 4000;
 *
 * debug
 * - Whether this instance should log debug messages. Accepts true or false. Default: false.
 *
 * automaticOpen
 * - Whether or not the websocket should attempt to connect immediately upon instantiation. The socket can be manually opened or closed at any time using ws.open() and ws.close().
 *
 * reconnectInterval
 * - The number of milliseconds to delay before attempting to reconnect. Accepts integer. Default: 1000.
 *
 * maxReconnectInterval
 * - The maximum number of milliseconds to delay a reconnection attempt. Accepts integer. Default: 30000.
 *
 * reconnectDecay
 * - The rate of increase of the reconnect delay. Allows reconnect attempts to back off when problems persist. Accepts integer or float. Default: 1.5.
 *
 * timeoutInterval
 * - The maximum time in milliseconds to wait for a connection to succeed before closing and retrying. Accepts integer. Default: 2000.
 *
 */
(function (global, factory) {
    //    if (typeof define === 'function' && define.amd) {
    //        define([], factory);
    //    } else
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory();
    } else {
        global.ReconnectingWebSocket = factory();
    }
})(this, function () {

    if (!('WebSocket' in window)) {
        return;
    }

    function ReconnectingWebSocket(url, protocols, options) {

        // Default settings
        var settings = {

            /** Whether this instance should log debug messages. */
            debug: false,

            /** Whether or not the websocket should attempt to connect immediately upon instantiation. */
            automaticOpen: true,

            /** The number of milliseconds to delay before attempting to reconnect. */
            reconnectInterval: 1000,
            /** The maximum number of milliseconds to delay a reconnection attempt. */
            maxReconnectInterval: 30000,
            /** The rate of increase of the reconnect delay. Allows reconnect attempts to back off when problems persist. */
            reconnectDecay: 1.5,

            /** The maximum time in milliseconds to wait for a connection to succeed before closing and retrying. */
            timeoutInterval: 2000,

            /** The maximum number of reconnection attempts to make. Unlimited if null. */
            maxReconnectAttempts: null,

            /** The binary type, possible values 'blob' or 'arraybuffer', default 'blob'. */
            binaryType: 'blob'
        };
        if (!options) {
            options = {};
        }

        // Overwrite and define settings with options if they exist.
        for (var key in settings) {
            if (typeof options[key] !== 'undefined') {
                this[key] = options[key];
            } else {
                this[key] = settings[key];
            }
        }

        // These should be treated as read-only properties

        /** The URL as resolved by the constructor. This is always an absolute URL. Read only. */
        this.url = url;

        /** The number of attempted reconnects since starting, or the last successful connection. Read only. */
        this.reconnectAttempts = 0;

        /**
         * The current state of the connection.
         * Can be one of: WebSocket.CONNECTING, WebSocket.OPEN, WebSocket.CLOSING, WebSocket.CLOSED
         * Read only.
         */
        this.readyState = WebSocket.CONNECTING;

        /**
         * A string indicating the name of the sub-protocol the server selected; this will be one of
         * the strings specified in the protocols parameter when creating the WebSocket object.
         * Read only.
         */
        this.protocol = null;

        // Private state variables

        var self = this;
        var ws;
        var forcedClose = false;
        var timedOut = false;
        var eventTarget = document.createElement('div');

        // Wire up "on*" properties as event handlers

        eventTarget.addEventListener('open', function (event) {
            self.onopen(event);
        });
        eventTarget.addEventListener('close', function (event) {
            self.onclose(event);
        });
        eventTarget.addEventListener('connecting', function (event) {
            self.onconnecting(event);
        });
        eventTarget.addEventListener('message', function (event) {
            self.onmessage(event);
        });
        eventTarget.addEventListener('error', function (event) {
            self.onerror(event);
        });

        // Expose the API required by EventTarget

        this.addEventListener = eventTarget.addEventListener.bind(eventTarget);
        this.removeEventListener = eventTarget.removeEventListener.bind(eventTarget);
        this.dispatchEvent = eventTarget.dispatchEvent.bind(eventTarget);

        /**
         * This function generates an event that is compatible with standard
         * compliant browsers and IE9 - IE11
         *
         * This will prevent the error:
         * Object doesn't support this action
         *
         * http://stackoverflow.com/questions/19345392/why-arent-my-parameters-getting-passed-through-to-a-dispatched-event/19345563#19345563
         * @param s String The name that the event should use
         * @param args Object an optional object that the event will use
         */
        function generateEvent(s, args) {
            var evt = document.createEvent("CustomEvent");
            evt.initCustomEvent(s, false, false, args);
            return evt;
        };

        this.open = function (reconnectAttempt) {
            ws = new WebSocket(self.url, protocols || []);
            ws.binaryType = this.binaryType;

            if (reconnectAttempt) {
                if (this.maxReconnectAttempts && this.reconnectAttempts > this.maxReconnectAttempts) {
                    return;
                }
            } else {
                eventTarget.dispatchEvent(generateEvent('connecting'));
                this.reconnectAttempts = 0;
            }

            if (self.debug || ReconnectingWebSocket.debugAll) {
                console.debug('ReconnectingWebSocket', 'attempt-connect', self.url);
            }

            var localWs = ws;
            var timeout = setTimeout(function () {
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'connection-timeout', self.url);
                }
                timedOut = true;
                localWs.close();
                timedOut = false;
            }, self.timeoutInterval);

            ws.onopen = function (event) {
                clearTimeout(timeout);
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'onopen', self.url);
                }
                self.protocol = ws.protocol;
                self.readyState = WebSocket.OPEN;
                self.reconnectAttempts = 0;
                var e = generateEvent('open');
                e.isReconnect = reconnectAttempt;
                reconnectAttempt = false;
                eventTarget.dispatchEvent(e);
            };

            ws.onclose = function (event) {
                clearTimeout(timeout);
                ws = null;
                if (forcedClose) {
                    self.readyState = WebSocket.CLOSED;
                    eventTarget.dispatchEvent(generateEvent('close'));
                } else {
                    self.readyState = WebSocket.CONNECTING;
                    var e = generateEvent('connecting');
                    e.code = event.code;
                    e.reason = event.reason;
                    e.wasClean = event.wasClean;
                    eventTarget.dispatchEvent(e);
                    if (!reconnectAttempt && !timedOut) {
                        if (self.debug || ReconnectingWebSocket.debugAll) {
                            console.debug('ReconnectingWebSocket', 'onclose', self.url);
                        }
                        eventTarget.dispatchEvent(generateEvent('close'));
                    }

                    var timeout = self.reconnectInterval * Math.pow(self.reconnectDecay, self.reconnectAttempts);
                    setTimeout(function () {
                        self.reconnectAttempts++;
                        self.open(true);
                    }, timeout > self.maxReconnectInterval ? self.maxReconnectInterval : timeout);
                }
            };
            ws.onmessage = function (event) {
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'onmessage', self.url, event.data);
                }
                var e = generateEvent('message');
                e.data = event.data;
                eventTarget.dispatchEvent(e);
            };
            ws.onerror = function (event) {
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'onerror', self.url, event);
                }
                eventTarget.dispatchEvent(generateEvent('error'));
            };
        };

        // Whether or not to create a websocket upon instantiation
        if (this.automaticOpen == true) {
            this.open(false);
        }

        /**
         * Transmits data to the server over the WebSocket connection.
         *
         * @param data a text string, ArrayBuffer or Blob to send to the server.
         */
        this.send = function (data) {
            if (ws) {
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'send', self.url, data);
                }
                return ws.send(data);
            } else {
                throw 'INVALID_STATE_ERR : Pausing to reconnect websocket';
            }
        };

        /**
         * Closes the WebSocket connection or connection attempt, if any.
         * If the connection is already CLOSED, this method does nothing.
         */
        this.close = function (code, reason) {
            // Default CLOSE_NORMAL code
            if (typeof code == 'undefined') {
                code = 1000;
            }
            forcedClose = true;
            if (ws) {
                ws.close(code, reason);
            }
        };

        /**
         * Additional public API method to refresh the connection if still open (close, re-open).
         * For example, if the app suspects bad data / missed heart beats, it can try to refresh.
         */
        this.refresh = function () {
            if (ws) {
                ws.close();
            }
        };
    }

    /**
     * An event listener to be called when the WebSocket connection's readyState changes to OPEN;
     * this indicates that the connection is ready to send and receive data.
     */
    ReconnectingWebSocket.prototype.onopen = function (event) {};
    /** An event listener to be called when the WebSocket connection's readyState changes to CLOSED. */
    ReconnectingWebSocket.prototype.onclose = function (event) {};
    /** An event listener to be called when a connection begins being attempted. */
    ReconnectingWebSocket.prototype.onconnecting = function (event) {};
    /** An event listener to be called when a message is received from the server. */
    ReconnectingWebSocket.prototype.onmessage = function (event) {};
    /** An event listener to be called when an error occurs. */
    ReconnectingWebSocket.prototype.onerror = function (event) {};

    /**
     * Whether all instances of ReconnectingWebSocket should log debug messages.
     * Setting this to true is the equivalent of setting all instances of ReconnectingWebSocket.debug to true.
     */
    ReconnectingWebSocket.debugAll = false;

    ReconnectingWebSocket.CONNECTING = WebSocket.CONNECTING;
    ReconnectingWebSocket.OPEN = WebSocket.OPEN;
    ReconnectingWebSocket.CLOSING = WebSocket.CLOSING;
    ReconnectingWebSocket.CLOSED = WebSocket.CLOSED;

    return ReconnectingWebSocket;
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__payment__ = __webpack_require__(1);


var showModalTip = function (event) {
    event.preventDefault();
    $('#modal-tip .modal-content').empty().load($(this).attr('href'), modalTipLoaded);
    $('#modal-tip').modal('show');
};

var modalTipLoaded = function () {
    var form = $('#modal-tip form');
    if (form.length > 0) {
        form.find('.tips-booster-dropdown a').on('click', function () {
            console.log('tips-booster-dropdown');
            form.find('.tips-booster-dropdown').find('button').html($(this).html());
            form.find('#hidden-booster-id').val($(this).attr('data-value'));
        });
        form.find('input#amount').mask("000000").on('input', function () {
            $(this).parent().tooltip('hide');
            if (parseInt($(this).val()) >= 2) {
                form.find('button.paypal').prop('disabled', false);
            } else {
                form.find('button.paypal').prop('disabled', true);
            }
        }).blur(function () {
            if (parseInt($(this).val()) === 1) {
                $(this).parent().tooltip('show');
            }
        });
        //form.find('button.stripe').click(payment.stripeClick);
        form.find('button.paypal').click(__WEBPACK_IMPORTED_MODULE_0__payment__["a" /* default */].paypalClick);
    }
};

var tips = {
    enableTipButtons: function () {
        var tipButtons = $('.show-modal-tip');
        if (tipButtons.length > 0) {
            tipButtons.unbind("click");
            tipButtons.click(showModalTip);
        }
    }
};

/* harmony default export */ __webpack_exports__["default"] = (tips);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_reconnecting_websocket__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_reconnecting_websocket___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vendor_reconnecting_websocket__);


var ws = {
    readyState: false
};

if ($('#socket-url').length > 0) {
    var wsUrl = $('#socket-url').attr('action');
    if (location.protocol.includes('https')) {
        wsUrl = wsUrl.replace('ws:', 'wss:');
    }
    ws = new __WEBPACK_IMPORTED_MODULE_0__vendor_reconnecting_websocket___default.a(wsUrl);
}

ws.onmessage = function (event) {
    var data = JSON.parse(event.data);
    switch (data.type) {
        case 'onlineCoachIds':
            store.onlineCoachIds = data.ids;
            break;
        case 'coachChatHistory':
            for (var i = 0; i < data.messages.length; i++) {
                data.messages[i].message = linkifyStr(data.messages[i].message);
            }
            store.messages = data.messages;
            break;
        case 'coachOrders':
            if (data.coachId === store.coach.id) {
                store.orders = data.orders;
            }
            break;
        case 'coachChatMessage':
            if (data.coachId === store.coach.id) {
                if (data.message.role !== 'Customer' && data.message.role !== 'Guest') {
                    document.getElementById('snd-chat').play();
                }
                data.message.message = linkifyStr(data.message.message);
                store.messages.push(data.message);
            }
            break;
        default:
            console.log(data);
    }
};

var queue = [];
ws.onopen = function (event) {
    for (var i = 0; i < queue.length; i++) {
        ws.send(queue[i]);
    }
    setInterval(sendPing, 60000);
};

function sendPing() {
    ws.send(JSON.stringify({
        ping: null
    }));
}

var socket = {
    send: function (msg) {
        if (ws.readyState) {
            ws.send(msg);
        } else {
            queue.push(msg);
        }
    }
};

/* harmony default export */ __webpack_exports__["default"] = (socket);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);

window.$ = window.jQuery = __webpack_require__(0);
__webpack_require__(8);

__webpack_require__(10);
__webpack_require__(11);
__webpack_require__(12);
__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);
__webpack_require__(16);
__webpack_require__(17);
__webpack_require__(23);
__webpack_require__(26);
__webpack_require__(27);
__webpack_require__(3);
__webpack_require__(4);

// Validation

var forms = $('form.validate');
if (forms.length > 0) {
    forms.validate({
        submit: {
            settings: {
                inputContainer: '.input-group',
                errorListClass: 'form-tooltip-error'
            }
        }
    });
}

// Charts

if ($('.chart').length) {
    $('.chart').easyPieChart({
        easing: 'easeOutBounce',
        barColor: '#18ce0f',
        trackColor: '#e3e3e3',
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
}

// Reviews

var owlCarouselReviews = $('#owl-carousel-reviews');

if (owlCarouselReviews.length) {
    if (owlCarouselReviews.attr('data-autoplay') == 'true') {
        owlCarouselReviews.owlCarousel({
            items: 2,
            itemsDesktop: false,
            itemsDesktopSmall: [1199, 1],
            itemsTablet: [768, 1],
            itemsMobile: [479, 1],
            autoPlay: true,
            stopOnHover: true
        });
    } else {
        owlCarouselReviews.owlCarousel({
            items: 2,
            itemsDesktop: false,
            itemsDesktopSmall: [1199, 1],
            itemsTablet: [768, 1],
            itemsMobile: [479, 1]
        });
    }

    $('#owl-carousel-reviews-container').find('.next').click(function () {
        owlCarouselReviews.trigger('owl.next');
        return false;
    });

    $('#owl-carousel-reviews-container').find('.prev').click(function () {
        owlCarouselReviews.trigger('owl.prev');
        return false;
    });
}

// Modal review

$('.show-modal-review').click(function (event) {
    event.preventDefault();
    $('#modal-review .modal-content').empty().load($(this).attr('href'));
    $('#modal-review').modal('show');
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*!
  * Bootstrap v4.0.0-beta.2 (https://getbootstrap.com)
  * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
var bootstrap = function (exports, $) {
  'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-beta.2): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Util = function () {
    /**
     * ------------------------------------------------------------------------
     * Private TransitionEnd Helpers
     * ------------------------------------------------------------------------
     */
    var transition = false;
    var MAX_UID = 1000000;
    var TransitionEndEvent = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transition: 'transitionend' // shoutout AngusCroll (https://goo.gl/pxwQGp)

    };

    function toType(obj) {
      return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    }

    function getSpecialTransitionEndEvent() {
      return {
        bindType: transition.end,
        delegateType: transition.end,
        handle: function handle(event) {
          if ($(event.target).is(this)) {
            return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
          }

          return undefined; // eslint-disable-line no-undefined
        }
      };
    }

    function transitionEndTest() {
      if (window.QUnit) {
        return false;
      }

      var el = document.createElement('bootstrap');

      for (var name in TransitionEndEvent) {
        if (typeof el.style[name] !== 'undefined') {
          return {
            end: TransitionEndEvent[name]
          };
        }
      }

      return false;
    }

    function transitionEndEmulator(duration) {
      var _this = this;

      var called = false;
      $(this).one(Util.TRANSITION_END, function () {
        called = true;
      });
      setTimeout(function () {
        if (!called) {
          Util.triggerTransitionEnd(_this);
        }
      }, duration);
      return this;
    }

    function setTransitionEndSupport() {
      transition = transitionEndTest();
      $.fn.emulateTransitionEnd = transitionEndEmulator;

      if (Util.supportsTransitionEnd()) {
        $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
      }
    }
    /**
     * --------------------------------------------------------------------------
     * Public Util Api
     * --------------------------------------------------------------------------
     */

    var Util = {
      TRANSITION_END: 'bsTransitionEnd',
      getUID: function getUID(prefix) {
        do {
          // eslint-disable-next-line no-bitwise
          prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
        } while (document.getElementById(prefix));

        return prefix;
      },
      getSelectorFromElement: function getSelectorFromElement(element) {
        var selector = element.getAttribute('data-target');

        if (!selector || selector === '#') {
          selector = element.getAttribute('href') || '';
        }

        try {
          var $selector = $(document).find(selector);
          return $selector.length > 0 ? selector : null;
        } catch (error) {
          return null;
        }
      },
      reflow: function reflow(element) {
        return element.offsetHeight;
      },
      triggerTransitionEnd: function triggerTransitionEnd(element) {
        $(element).trigger(transition.end);
      },
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(transition);
      },
      isElement: function isElement(obj) {
        return (obj[0] || obj).nodeType;
      },
      typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
        for (var property in configTypes) {
          if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
            var expectedTypes = configTypes[property];
            var value = config[property];
            var valueType = value && Util.isElement(value) ? 'element' : toType(value);

            if (!new RegExp(expectedTypes).test(valueType)) {
              throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
            }
          }
        }
      }
    };
    setTransitionEndSupport();
    return Util;
  }($);

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var inheritsLoose = _inheritsLoose;

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-beta.2): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Alert = function () {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'alert';
    var VERSION = '4.0.0-beta.2';
    var DATA_KEY = 'bs.alert';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 150;
    var Selector = {
      DISMISS: '[data-dismiss="alert"]'
    };
    var Event = {
      CLOSE: "close" + EVENT_KEY,
      CLOSED: "closed" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      ALERT: 'alert',
      FADE: 'fade',
      SHOW: 'show'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Alert =
    /*#__PURE__*/
    function () {
      function Alert(element) {
        this._element = element;
      } // getters


      var _proto = Alert.prototype;

      // public
      _proto.close = function close(element) {
        element = element || this._element;

        var rootElement = this._getRootElement(element);

        var customEvent = this._triggerCloseEvent(rootElement);

        if (customEvent.isDefaultPrevented()) {
          return;
        }

        this._removeElement(rootElement);
      };

      _proto.dispose = function dispose() {
        $.removeData(this._element, DATA_KEY);
        this._element = null;
      }; // private


      _proto._getRootElement = function _getRootElement(element) {
        var selector = Util.getSelectorFromElement(element);
        var parent = false;

        if (selector) {
          parent = $(selector)[0];
        }

        if (!parent) {
          parent = $(element).closest("." + ClassName.ALERT)[0];
        }

        return parent;
      };

      _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
        var closeEvent = $.Event(Event.CLOSE);
        $(element).trigger(closeEvent);
        return closeEvent;
      };

      _proto._removeElement = function _removeElement(element) {
        var _this = this;

        $(element).removeClass(ClassName.SHOW);

        if (!Util.supportsTransitionEnd() || !$(element).hasClass(ClassName.FADE)) {
          this._destroyElement(element);

          return;
        }

        $(element).one(Util.TRANSITION_END, function (event) {
          return _this._destroyElement(element, event);
        }).emulateTransitionEnd(TRANSITION_DURATION);
      };

      _proto._destroyElement = function _destroyElement(element) {
        $(element).detach().trigger(Event.CLOSED).remove();
      }; // static


      Alert._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new Alert(this);
            $element.data(DATA_KEY, data);
          }

          if (config === 'close') {
            data[config](this);
          }
        });
      };

      Alert._handleDismiss = function _handleDismiss(alertInstance) {
        return function (event) {
          if (event) {
            event.preventDefault();
          }

          alertInstance.close(this);
        };
      };

      createClass(Alert, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);
      return Alert;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Alert._jQueryInterface;
    $.fn[NAME].Constructor = Alert;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Alert._jQueryInterface;
    };

    return Alert;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-beta.2): button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Button = function () {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'button';
    var VERSION = '4.0.0-beta.2';
    var DATA_KEY = 'bs.button';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var ClassName = {
      ACTIVE: 'active',
      BUTTON: 'btn',
      FOCUS: 'focus'
    };
    var Selector = {
      DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
      DATA_TOGGLE: '[data-toggle="buttons"]',
      INPUT: 'input',
      ACTIVE: '.active',
      BUTTON: '.btn'
    };
    var Event = {
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
      FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY + DATA_API_KEY + " " + ("blur" + EVENT_KEY + DATA_API_KEY)
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Button =
    /*#__PURE__*/
    function () {
      function Button(element) {
        this._element = element;
      } // getters


      var _proto = Button.prototype;

      // public
      _proto.toggle = function toggle() {
        var triggerChangeEvent = true;
        var addAriaPressed = true;
        var rootElement = $(this._element).closest(Selector.DATA_TOGGLE)[0];

        if (rootElement) {
          var input = $(this._element).find(Selector.INPUT)[0];

          if (input) {
            if (input.type === 'radio') {
              if (input.checked && $(this._element).hasClass(ClassName.ACTIVE)) {
                triggerChangeEvent = false;
              } else {
                var activeElement = $(rootElement).find(Selector.ACTIVE)[0];

                if (activeElement) {
                  $(activeElement).removeClass(ClassName.ACTIVE);
                }
              }
            }

            if (triggerChangeEvent) {
              if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
                return;
              }

              input.checked = !$(this._element).hasClass(ClassName.ACTIVE);
              $(input).trigger('change');
            }

            input.focus();
            addAriaPressed = false;
          }
        }

        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !$(this._element).hasClass(ClassName.ACTIVE));
        }

        if (triggerChangeEvent) {
          $(this._element).toggleClass(ClassName.ACTIVE);
        }
      };

      _proto.dispose = function dispose() {
        $.removeData(this._element, DATA_KEY);
        this._element = null;
      }; // static


      Button._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          if (!data) {
            data = new Button(this);
            $(this).data(DATA_KEY, data);
          }

          if (config === 'toggle') {
            data[config]();
          }
        });
      };

      createClass(Button, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);
      return Button;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
      event.preventDefault();
      var button = event.target;

      if (!$(button).hasClass(ClassName.BUTTON)) {
        button = $(button).closest(Selector.BUTTON);
      }

      Button._jQueryInterface.call($(button), 'toggle');
    }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
      var button = $(event.target).closest(Selector.BUTTON)[0];
      $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Button._jQueryInterface;
    $.fn[NAME].Constructor = Button;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Button._jQueryInterface;
    };

    return Button;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-beta.2): carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Carousel = function () {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'carousel';
    var VERSION = '4.0.0-beta.2';
    var DATA_KEY = 'bs.carousel';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 600;
    var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

    var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

    var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

    var Default = {
      interval: 5000,
      keyboard: true,
      slide: false,
      pause: 'hover',
      wrap: true
    };
    var DefaultType = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      slide: '(boolean|string)',
      pause: '(string|boolean)',
      wrap: 'boolean'
    };
    var Direction = {
      NEXT: 'next',
      PREV: 'prev',
      LEFT: 'left',
      RIGHT: 'right'
    };
    var Event = {
      SLIDE: "slide" + EVENT_KEY,
      SLID: "slid" + EVENT_KEY,
      KEYDOWN: "keydown" + EVENT_KEY,
      MOUSEENTER: "mouseenter" + EVENT_KEY,
      MOUSELEAVE: "mouseleave" + EVENT_KEY,
      TOUCHEND: "touchend" + EVENT_KEY,
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      CAROUSEL: 'carousel',
      ACTIVE: 'active',
      SLIDE: 'slide',
      RIGHT: 'carousel-item-right',
      LEFT: 'carousel-item-left',
      NEXT: 'carousel-item-next',
      PREV: 'carousel-item-prev',
      ITEM: 'carousel-item'
    };
    var Selector = {
      ACTIVE: '.active',
      ACTIVE_ITEM: '.active.carousel-item',
      ITEM: '.carousel-item',
      NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
      INDICATORS: '.carousel-indicators',
      DATA_SLIDE: '[data-slide], [data-slide-to]',
      DATA_RIDE: '[data-ride="carousel"]'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Carousel =
    /*#__PURE__*/
    function () {
      function Carousel(element, config) {
        this._items = null;
        this._interval = null;
        this._activeElement = null;
        this._isPaused = false;
        this._isSliding = false;
        this.touchTimeout = null;
        this._config = this._getConfig(config);
        this._element = $(element)[0];
        this._indicatorsElement = $(this._element).find(Selector.INDICATORS)[0];

        this._addEventListeners();
      } // getters


      var _proto = Carousel.prototype;

      // public
      _proto.next = function next() {
        if (!this._isSliding) {
          this._slide(Direction.NEXT);
        }
      };

      _proto.nextWhenVisible = function nextWhenVisible() {
        // Don't call next when the page isn't visible
        // or the carousel or its parent isn't visible
        if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden') {
          this.next();
        }
      };

      _proto.prev = function prev() {
        if (!this._isSliding) {
          this._slide(Direction.PREV);
        }
      };

      _proto.pause = function pause(event) {
        if (!event) {
          this._isPaused = true;
        }

        if ($(this._element).find(Selector.NEXT_PREV)[0] && Util.supportsTransitionEnd()) {
          Util.triggerTransitionEnd(this._element);
          this.cycle(true);
        }

        clearInterval(this._interval);
        this._interval = null;
      };

      _proto.cycle = function cycle(event) {
        if (!event) {
          this._isPaused = false;
        }

        if (this._interval) {
          clearInterval(this._interval);
          this._interval = null;
        }

        if (this._config.interval && !this._isPaused) {
          this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
        }
      };

      _proto.to = function to(index) {
        var _this = this;

        this._activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];

        var activeIndex = this._getItemIndex(this._activeElement);

        if (index > this._items.length - 1 || index < 0) {
          return;
        }

        if (this._isSliding) {
          $(this._element).one(Event.SLID, function () {
            return _this.to(index);
          });
          return;
        }

        if (activeIndex === index) {
          this.pause();
          this.cycle();
          return;
        }

        var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

        this._slide(direction, this._items[index]);
      };

      _proto.dispose = function dispose() {
        $(this._element).off(EVENT_KEY);
        $.removeData(this._element, DATA_KEY);
        this._items = null;
        this._config = null;
        this._element = null;
        this._interval = null;
        this._isPaused = null;
        this._isSliding = null;
        this._activeElement = null;
        this._indicatorsElement = null;
      }; // private


      _proto._getConfig = function _getConfig(config) {
        config = $.extend({}, Default, config);
        Util.typeCheckConfig(NAME, config, DefaultType);
        return config;
      };

      _proto._addEventListeners = function _addEventListeners() {
        var _this2 = this;

        if (this._config.keyboard) {
          $(this._element).on(Event.KEYDOWN, function (event) {
            return _this2._keydown(event);
          });
        }

        if (this._config.pause === 'hover') {
          $(this._element).on(Event.MOUSEENTER, function (event) {
            return _this2.pause(event);
          }).on(Event.MOUSELEAVE, function (event) {
            return _this2.cycle(event);
          });

          if ('ontouchstart' in document.documentElement) {
            // if it's a touch-enabled device, mouseenter/leave are fired as
            // part of the mouse compatibility events on first tap - the carousel
            // would stop cycling until user tapped out of it;
            // here, we listen for touchend, explicitly pause the carousel
            // (as if it's the second time we tap on it, mouseenter compat event
            // is NOT fired) and after a timeout (to allow for mouse compatibility
            // events to fire) we explicitly restart cycling
            $(this._element).on(Event.TOUCHEND, function () {
              _this2.pause();

              if (_this2.touchTimeout) {
                clearTimeout(_this2.touchTimeout);
              }

              _this2.touchTimeout = setTimeout(function (event) {
                return _this2.cycle(event);
              }, TOUCHEVENT_COMPAT_WAIT + _this2._config.interval);
            });
          }
        }
      };

      _proto._keydown = function _keydown(event) {
        if (/input|textarea/i.test(event.target.tagName)) {
          return;
        }

        switch (event.which) {
          case ARROW_LEFT_KEYCODE:
            event.preventDefault();
            this.prev();
            break;

          case ARROW_RIGHT_KEYCODE:
            event.preventDefault();
            this.next();
            break;

          default:
            return;
        }
      };

      _proto._getItemIndex = function _getItemIndex(element) {
        this._items = $.makeArray($(element).parent().find(Selector.ITEM));
        return this._items.indexOf(element);
      };

      _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
        var isNextDirection = direction === Direction.NEXT;
        var isPrevDirection = direction === Direction.PREV;

        var activeIndex = this._getItemIndex(activeElement);

        var lastItemIndex = this._items.length - 1;
        var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

        if (isGoingToWrap && !this._config.wrap) {
          return activeElement;
        }

        var delta = direction === Direction.PREV ? -1 : 1;
        var itemIndex = (activeIndex + delta) % this._items.length;
        return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
      };

      _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
        var targetIndex = this._getItemIndex(relatedTarget);

        var fromIndex = this._getItemIndex($(this._element).find(Selector.ACTIVE_ITEM)[0]);

        var slideEvent = $.Event(Event.SLIDE, {
          relatedTarget: relatedTarget,
          direction: eventDirectionName,
          from: fromIndex,
          to: targetIndex
        });
        $(this._element).trigger(slideEvent);
        return slideEvent;
      };

      _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
        if (this._indicatorsElement) {
          $(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);

          var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

          if (nextIndicator) {
            $(nextIndicator).addClass(ClassName.ACTIVE);
          }
        }
      };

      _proto._slide = function _slide(direction, element) {
        var _this3 = this;

        var activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];

        var activeElementIndex = this._getItemIndex(activeElement);

        var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

        var nextElementIndex = this._getItemIndex(nextElement);

        var isCycling = Boolean(this._interval);
        var directionalClassName;
        var orderClassName;
        var eventDirectionName;

        if (direction === Direction.NEXT) {
          directionalClassName = ClassName.LEFT;
          orderClassName = ClassName.NEXT;
          eventDirectionName = Direction.LEFT;
        } else {
          directionalClassName = ClassName.RIGHT;
          orderClassName = ClassName.PREV;
          eventDirectionName = Direction.RIGHT;
        }

        if (nextElement && $(nextElement).hasClass(ClassName.ACTIVE)) {
          this._isSliding = false;
          return;
        }

        var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

        if (slideEvent.isDefaultPrevented()) {
          return;
        }

        if (!activeElement || !nextElement) {
          // some weirdness is happening, so we bail
          return;
        }

        this._isSliding = true;

        if (isCycling) {
          this.pause();
        }

        this._setActiveIndicatorElement(nextElement);

        var slidEvent = $.Event(Event.SLID, {
          relatedTarget: nextElement,
          direction: eventDirectionName,
          from: activeElementIndex,
          to: nextElementIndex
        });

        if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.SLIDE)) {
          $(nextElement).addClass(orderClassName);
          Util.reflow(nextElement);
          $(activeElement).addClass(directionalClassName);
          $(nextElement).addClass(directionalClassName);
          $(activeElement).one(Util.TRANSITION_END, function () {
            $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName.ACTIVE);
            $(activeElement).removeClass(ClassName.ACTIVE + " " + orderClassName + " " + directionalClassName);
            _this3._isSliding = false;
            setTimeout(function () {
              return $(_this3._element).trigger(slidEvent);
            }, 0);
          }).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          $(activeElement).removeClass(ClassName.ACTIVE);
          $(nextElement).addClass(ClassName.ACTIVE);
          this._isSliding = false;
          $(this._element).trigger(slidEvent);
        }

        if (isCycling) {
          this.cycle();
        }
      }; // static


      Carousel._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _config = $.extend({}, Default, $(this).data());

          if (typeof config === 'object') {
            $.extend(_config, config);
          }

          var action = typeof config === 'string' ? config : _config.slide;

          if (!data) {
            data = new Carousel(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'number') {
            data.to(config);
          } else if (typeof action === 'string') {
            if (typeof data[action] === 'undefined') {
              throw new Error("No method named \"" + action + "\"");
            }

            data[action]();
          } else if (_config.interval) {
            data.pause();
            data.cycle();
          }
        });
      };

      Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
        var selector = Util.getSelectorFromElement(this);

        if (!selector) {
          return;
        }

        var target = $(selector)[0];

        if (!target || !$(target).hasClass(ClassName.CAROUSEL)) {
          return;
        }

        var config = $.extend({}, $(target).data(), $(this).data());
        var slideIndex = this.getAttribute('data-slide-to');

        if (slideIndex) {
          config.interval = false;
        }

        Carousel._jQueryInterface.call($(target), config);

        if (slideIndex) {
          $(target).data(DATA_KEY).to(slideIndex);
        }

        event.preventDefault();
      };

      createClass(Carousel, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }]);
      return Carousel;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);
    $(window).on(Event.LOAD_DATA_API, function () {
      $(Selector.DATA_RIDE).each(function () {
        var $carousel = $(this);

        Carousel._jQueryInterface.call($carousel, $carousel.data());
      });
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Carousel._jQueryInterface;
    $.fn[NAME].Constructor = Carousel;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Carousel._jQueryInterface;
    };

    return Carousel;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-beta.2): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Collapse = function () {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'collapse';
    var VERSION = '4.0.0-beta.2';
    var DATA_KEY = 'bs.collapse';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 600;
    var Default = {
      toggle: true,
      parent: ''
    };
    var DefaultType = {
      toggle: 'boolean',
      parent: '(string|element)'
    };
    var Event = {
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      SHOW: 'show',
      COLLAPSE: 'collapse',
      COLLAPSING: 'collapsing',
      COLLAPSED: 'collapsed'
    };
    var Dimension = {
      WIDTH: 'width',
      HEIGHT: 'height'
    };
    var Selector = {
      ACTIVES: '.show, .collapsing',
      DATA_TOGGLE: '[data-toggle="collapse"]'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Collapse =
    /*#__PURE__*/
    function () {
      function Collapse(element, config) {
        this._isTransitioning = false;
        this._element = element;
        this._config = this._getConfig(config);
        this._triggerArray = $.makeArray($("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
        var tabToggles = $(Selector.DATA_TOGGLE);

        for (var i = 0; i < tabToggles.length; i++) {
          var elem = tabToggles[i];
          var selector = Util.getSelectorFromElement(elem);

          if (selector !== null && $(selector).filter(element).length > 0) {
            this._triggerArray.push(elem);
          }
        }

        this._parent = this._config.parent ? this._getParent() : null;

        if (!this._config.parent) {
          this._addAriaAndCollapsedClass(this._element, this._triggerArray);
        }

        if (this._config.toggle) {
          this.toggle();
        }
      } // getters


      var _proto = Collapse.prototype;

      // public
      _proto.toggle = function toggle() {
        if ($(this._element).hasClass(ClassName.SHOW)) {
          this.hide();
        } else {
          this.show();
        }
      };

      _proto.show = function show() {
        var _this = this;

        if (this._isTransitioning || $(this._element).hasClass(ClassName.SHOW)) {
          return;
        }

        var actives;
        var activesData;

        if (this._parent) {
          actives = $.makeArray($(this._parent).children().children(Selector.ACTIVES));

          if (!actives.length) {
            actives = null;
          }
        }

        if (actives) {
          activesData = $(actives).data(DATA_KEY);

          if (activesData && activesData._isTransitioning) {
            return;
          }
        }

        var startEvent = $.Event(Event.SHOW);
        $(this._element).trigger(startEvent);

        if (startEvent.isDefaultPrevented()) {
          return;
        }

        if (actives) {
          Collapse._jQueryInterface.call($(actives), 'hide');

          if (!activesData) {
            $(actives).data(DATA_KEY, null);
          }
        }

        var dimension = this._getDimension();

        $(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);
        this._element.style[dimension] = 0;

        if (this._triggerArray.length) {
          $(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
        }

        this.setTransitioning(true);

        var complete = function complete() {
          $(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);
          _this._element.style[dimension] = '';

          _this.setTransitioning(false);

          $(_this._element).trigger(Event.SHOWN);
        };

        if (!Util.supportsTransitionEnd()) {
          complete();
          return;
        }

        var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        var scrollSize = "scroll" + capitalizedDimension;
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
        this._element.style[dimension] = this._element[scrollSize] + "px";
      };

      _proto.hide = function hide() {
        var _this2 = this;

        if (this._isTransitioning || !$(this._element).hasClass(ClassName.SHOW)) {
          return;
        }

        var startEvent = $.Event(Event.HIDE);
        $(this._element).trigger(startEvent);

        if (startEvent.isDefaultPrevented()) {
          return;
        }

        var dimension = this._getDimension();

        this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
        Util.reflow(this._element);
        $(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);

        if (this._triggerArray.length) {
          for (var i = 0; i < this._triggerArray.length; i++) {
            var trigger = this._triggerArray[i];
            var selector = Util.getSelectorFromElement(trigger);

            if (selector !== null) {
              var $elem = $(selector);

              if (!$elem.hasClass(ClassName.SHOW)) {
                $(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
              }
            }
          }
        }

        this.setTransitioning(true);

        var complete = function complete() {
          _this2.setTransitioning(false);

          $(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
        };

        this._element.style[dimension] = '';

        if (!Util.supportsTransitionEnd()) {
          complete();
          return;
        }

        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      };

      _proto.setTransitioning = function setTransitioning(isTransitioning) {
        this._isTransitioning = isTransitioning;
      };

      _proto.dispose = function dispose() {
        $.removeData(this._element, DATA_KEY);
        this._config = null;
        this._parent = null;
        this._element = null;
        this._triggerArray = null;
        this._isTransitioning = null;
      }; // private


      _proto._getConfig = function _getConfig(config) {
        config = $.extend({}, Default, config);
        config.toggle = Boolean(config.toggle); // coerce string values

        Util.typeCheckConfig(NAME, config, DefaultType);
        return config;
      };

      _proto._getDimension = function _getDimension() {
        var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
        return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
      };

      _proto._getParent = function _getParent() {
        var _this3 = this;

        var parent = null;

        if (Util.isElement(this._config.parent)) {
          parent = this._config.parent; // it's a jQuery object

          if (typeof this._config.parent.jquery !== 'undefined') {
            parent = this._config.parent[0];
          }
        } else {
          parent = $(this._config.parent)[0];
        }

        var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
        $(parent).find(selector).each(function (i, element) {
          _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
        });
        return parent;
      };

      _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
        if (element) {
          var isOpen = $(element).hasClass(ClassName.SHOW);

          if (triggerArray.length) {
            $(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
          }
        }
      }; // static


      Collapse._getTargetFromElement = function _getTargetFromElement(element) {
        var selector = Util.getSelectorFromElement(element);
        return selector ? $(selector)[0] : null;
      };

      Collapse._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data(DATA_KEY);

          var _config = $.extend({}, Default, $this.data(), typeof config === 'object' && config);

          if (!data && _config.toggle && /show|hide/.test(config)) {
            _config.toggle = false;
          }

          if (!data) {
            data = new Collapse(this, _config);
            $this.data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new Error("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      createClass(Collapse, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }]);
      return Collapse;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
      if (event.currentTarget.tagName === 'A') {
        event.preventDefault();
      }

      var $trigger = $(this);
      var selector = Util.getSelectorFromElement(this);
      $(selector).each(function () {
        var $target = $(this);
        var data = $target.data(DATA_KEY);
        var config = data ? 'toggle' : $trigger.data();

        Collapse._jQueryInterface.call($target, config);
      });
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Collapse._jQueryInterface;
    $.fn[NAME].Constructor = Collapse;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Collapse._jQueryInterface;
    };

    return Collapse;
  }($);

  /**!
   * @fileOverview Kickass library to create and place poppers near their reference elements.
   * @version 1.12.5
   * @license
   * Copyright (c) 2016 Federico Zivolo and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  var nativeHints = ['native code', '[object MutationObserverConstructor]'];

  /**
   * Determine if a function is implemented natively (as opposed to a polyfill).
   * @method
   * @memberof Popper.Utils
   * @argument {Function | undefined} fn the function to check
   * @returns {Boolean}
   */
  var isNative = function (fn) {
    return nativeHints.some(function (hint) {
      return (fn || '').toString().indexOf(hint) > -1;
    });
  };

  var isBrowser = typeof window !== 'undefined';
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  var timeoutDuration = 0;
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      timeoutDuration = 1;
      break;
    }
  }

  function microtaskDebounce(fn) {
    var scheduled = false;
    var i = 0;
    var elem = document.createElement('span');

    // MutationObserver provides a mechanism for scheduling microtasks, which
    // are scheduled *before* the next task. This gives us a way to debounce
    // a function but ensure it's called *before* the next paint.
    var observer = new MutationObserver(function () {
      fn();
      scheduled = false;
    });

    observer.observe(elem, { attributes: true });

    return function () {
      if (!scheduled) {
        scheduled = true;
        elem.setAttribute('x-index', i);
        i = i + 1; // don't use compund (+=) because it doesn't get optimized in V8
      }
    };
  }

  function taskDebounce(fn) {
    var scheduled = false;
    return function () {
      if (!scheduled) {
        scheduled = true;
        setTimeout(function () {
          scheduled = false;
          fn();
        }, timeoutDuration);
      }
    };
  }

  // It's common for MutationObserver polyfills to be seen in the wild, however
  // these rely on Mutation Events which only occur when an element is connected
  // to the DOM. The algorithm used in this module does not use a connected element,
  // and so we must ensure that a *native* MutationObserver is available.
  var supportsNativeMutationObserver = isBrowser && isNative(window.MutationObserver);

  /**
  * Create a debounced version of a method, that's asynchronously deferred
  * but called in the minimum time possible.
  *
  * @method
  * @memberof Popper.Utils
  * @argument {Function} fn
  * @returns {Function}
  */
  var debounce = supportsNativeMutationObserver ? microtaskDebounce : taskDebounce;

  /**
   * Check if the given variable is a function
   * @method
   * @memberof Popper.Utils
   * @argument {Any} functionToCheck - variable to check
   * @returns {Boolean} answer to: is a function?
   */
  function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  }

  /**
   * Get CSS computed property of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Eement} element
   * @argument {String} property
   */
  function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
      return [];
    }
    // NOTE: 1 DOM access here
    var css = window.getComputedStyle(element, null);
    return property ? css[property] : css;
  }

  /**
   * Returns the parentNode or the host of the element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} parent
   */
  function getParentNode(element) {
    if (element.nodeName === 'HTML') {
      return element;
    }
    return element.parentNode || element.host;
  }

  /**
   * Returns the scrolling parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} scroll parent
   */
  function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element || ['HTML', 'BODY', '#document'].indexOf(element.nodeName) !== -1) {
      return window.document.body;
    }

    // Firefox want us to check `-x` and `-y` variations as well

    var _getStyleComputedProp = getStyleComputedProperty(element),
        overflow = _getStyleComputedProp.overflow,
        overflowX = _getStyleComputedProp.overflowX,
        overflowY = _getStyleComputedProp.overflowY;

    if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
      return element;
    }

    return getScrollParent(getParentNode(element));
  }

  /**
   * Returns the offset parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} offset parent
   */
  function getOffsetParent(element) {
    // NOTE: 1 DOM access here
    var offsetParent = element && element.offsetParent;
    var nodeName = offsetParent && offsetParent.nodeName;

    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
      return window.document.documentElement;
    }

    // .offsetParent will return the closest TD or TABLE in case
    // no offsetParent is present, I hate this job...
    if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
      return getOffsetParent(offsetParent);
    }

    return offsetParent;
  }

  function isOffsetContainer(element) {
    var nodeName = element.nodeName;

    if (nodeName === 'BODY') {
      return false;
    }
    return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
  }

  /**
   * Finds the root node (document, shadowDOM root) of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} node
   * @returns {Element} root node
   */
  function getRoot(node) {
    if (node.parentNode !== null) {
      return getRoot(node.parentNode);
    }

    return node;
  }

  /**
   * Finds the offset parent common to the two provided nodes
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element1
   * @argument {Element} element2
   * @returns {Element} common offset parent
   */
  function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
      return window.document.documentElement;
    }

    // Here we make sure to give as "start" the element that comes first in the DOM
    var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    var start = order ? element1 : element2;
    var end = order ? element2 : element1;

    // Get common ancestor container
    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer;

    // Both nodes are inside #document

    if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
      if (isOffsetContainer(commonAncestorContainer)) {
        return commonAncestorContainer;
      }

      return getOffsetParent(commonAncestorContainer);
    }

    // one of the nodes is inside shadowDOM, find which one
    var element1root = getRoot(element1);
    if (element1root.host) {
      return findCommonOffsetParent(element1root.host, element2);
    } else {
      return findCommonOffsetParent(element1, getRoot(element2).host);
    }
  }

  /**
   * Gets the scroll value of the given element in the given side (top and left)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {String} side `top` or `left`
   * @returns {number} amount of scrolled pixels
   */
  function getScroll(element) {
    var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

    var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    var nodeName = element.nodeName;

    if (nodeName === 'BODY' || nodeName === 'HTML') {
      var html = window.document.documentElement;
      var scrollingElement = window.document.scrollingElement || html;
      return scrollingElement[upperSide];
    }

    return element[upperSide];
  }

  /*
   * Sum or subtract the element scroll values (left and top) from a given rect object
   * @method
   * @memberof Popper.Utils
   * @param {Object} rect - Rect object you want to change
   * @param {HTMLElement} element - The element from the function reads the scroll values
   * @param {Boolean} subtract - set to true if you want to subtract the scroll values
   * @return {Object} rect - The modifier rect object
   */
  function includeScroll(rect, element) {
    var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var scrollTop = getScroll(element, 'top');
    var scrollLeft = getScroll(element, 'left');
    var modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
  }

  /*
   * Helper to detect borders of a given element
   * @method
   * @memberof Popper.Utils
   * @param {CSSStyleDeclaration} styles
   * Result of `getStyleComputedProperty` on the given element
   * @param {String} axis - `x` or `y`
   * @return {number} borders - The borders size of the given axis
   */

  function getBordersSize(styles, axis) {
    var sideA = axis === 'x' ? 'Left' : 'Top';
    var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

    return +styles['border' + sideA + 'Width'].split('px')[0] + +styles['border' + sideB + 'Width'].split('px')[0];
  }

  /**
   * Tells if you are running Internet Explorer 10
   * @method
   * @memberof Popper.Utils
   * @returns {Boolean} isIE10
   */
  var isIE10 = undefined;

  var isIE10$1 = function () {
    if (isIE10 === undefined) {
      isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
    }
    return isIE10;
  };

  function getSize(axis, body, html, computedStyle) {
    return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE10$1() ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
  }

  function getWindowSizes() {
    var body = window.document.body;
    var html = window.document.documentElement;
    var computedStyle = isIE10$1() && window.getComputedStyle(html);

    return {
      height: getSize('Height', body, html, computedStyle),
      width: getSize('Width', body, html, computedStyle)
    };
  }

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass$1 = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var defineProperty = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  var _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  /**
   * Given element offsets, generate an output similar to getBoundingClientRect
   * @method
   * @memberof Popper.Utils
   * @argument {Object} offsets
   * @returns {Object} ClientRect like output
   */
  function getClientRect(offsets) {
    return _extends$1({}, offsets, {
      right: offsets.left + offsets.width,
      bottom: offsets.top + offsets.height
    });
  }

  /**
   * Get bounding client rect of given element
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} element
   * @return {Object} client rect
   */
  function getBoundingClientRect(element) {
    var rect = {};

    // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11
    if (isIE10$1()) {
      try {
        rect = element.getBoundingClientRect();
        var scrollTop = getScroll(element, 'top');
        var scrollLeft = getScroll(element, 'left');
        rect.top += scrollTop;
        rect.left += scrollLeft;
        rect.bottom += scrollTop;
        rect.right += scrollLeft;
      } catch (err) {}
    } else {
      rect = element.getBoundingClientRect();
    }

    var result = {
      left: rect.left,
      top: rect.top,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };

    // subtract scrollbar size from sizes
    var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
    var width = sizes.width || element.clientWidth || result.right - result.left;
    var height = sizes.height || element.clientHeight || result.bottom - result.top;

    var horizScrollbar = element.offsetWidth - width;
    var vertScrollbar = element.offsetHeight - height;

    // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons
    if (horizScrollbar || vertScrollbar) {
      var styles = getStyleComputedProperty(element);
      horizScrollbar -= getBordersSize(styles, 'x');
      vertScrollbar -= getBordersSize(styles, 'y');

      result.width -= horizScrollbar;
      result.height -= vertScrollbar;
    }

    return getClientRect(result);
  }

  function getOffsetRectRelativeToArbitraryNode(children, parent) {
    var isIE10 = isIE10$1();
    var isHTML = parent.nodeName === 'HTML';
    var childrenRect = getBoundingClientRect(children);
    var parentRect = getBoundingClientRect(parent);
    var scrollParent = getScrollParent(children);

    var styles = getStyleComputedProperty(parent);
    var borderTopWidth = +styles.borderTopWidth.split('px')[0];
    var borderLeftWidth = +styles.borderLeftWidth.split('px')[0];

    var offsets = getClientRect({
      top: childrenRect.top - parentRect.top - borderTopWidth,
      left: childrenRect.left - parentRect.left - borderLeftWidth,
      width: childrenRect.width,
      height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0;

    // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.
    if (!isIE10 && isHTML) {
      var marginTop = +styles.marginTop.split('px')[0];
      var marginLeft = +styles.marginLeft.split('px')[0];

      offsets.top -= borderTopWidth - marginTop;
      offsets.bottom -= borderTopWidth - marginTop;
      offsets.left -= borderLeftWidth - marginLeft;
      offsets.right -= borderLeftWidth - marginLeft;

      // Attach marginTop and marginLeft because in some circumstances we may need them
      offsets.marginTop = marginTop;
      offsets.marginLeft = marginLeft;
    }

    if (isIE10 ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
      offsets = includeScroll(offsets, parent);
    }

    return offsets;
  }

  function getViewportOffsetRectRelativeToArtbitraryNode(element) {
    var html = window.document.documentElement;
    var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    var width = Math.max(html.clientWidth, window.innerWidth || 0);
    var height = Math.max(html.clientHeight, window.innerHeight || 0);

    var scrollTop = getScroll(html);
    var scrollLeft = getScroll(html, 'left');

    var offset = {
      top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
      left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
      width: width,
      height: height
    };

    return getClientRect(offset);
  }

  /**
   * Check if the given element is fixed or is inside a fixed parent
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {Element} customContainer
   * @returns {Boolean} answer to "isFixed?"
   */
  function isFixed(element) {
    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
      return false;
    }
    if (getStyleComputedProperty(element, 'position') === 'fixed') {
      return true;
    }
    return isFixed(getParentNode(element));
  }

  /**
   * Computed the boundaries limits and return them
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} popper
   * @param {HTMLElement} reference
   * @param {number} padding
   * @param {HTMLElement} boundariesElement - Element used to define the boundaries
   * @returns {Object} Coordinates of the boundaries
   */
  function getBoundaries(popper, reference, padding, boundariesElement) {
    // NOTE: 1 DOM access here
    var boundaries = { top: 0, left: 0 };
    var offsetParent = findCommonOffsetParent(popper, reference);

    // Handle viewport case
    if (boundariesElement === 'viewport') {
      boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);
    } else {
      // Handle other cases based on DOM element used as boundaries
      var boundariesNode = void 0;
      if (boundariesElement === 'scrollParent') {
        boundariesNode = getScrollParent(getParentNode(popper));
        if (boundariesNode.nodeName === 'BODY') {
          boundariesNode = window.document.documentElement;
        }
      } else if (boundariesElement === 'window') {
        boundariesNode = window.document.documentElement;
      } else {
        boundariesNode = boundariesElement;
      }

      var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent);

      // In case of HTML, we need a different computation
      if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
        var _getWindowSizes = getWindowSizes(),
            height = _getWindowSizes.height,
            width = _getWindowSizes.width;

        boundaries.top += offsets.top - offsets.marginTop;
        boundaries.bottom = height + offsets.top;
        boundaries.left += offsets.left - offsets.marginLeft;
        boundaries.right = width + offsets.left;
      } else {
        // for all the other DOM elements, this one is good
        boundaries = offsets;
      }
    }

    // Add paddings
    boundaries.left += padding;
    boundaries.top += padding;
    boundaries.right -= padding;
    boundaries.bottom -= padding;

    return boundaries;
  }

  function getArea(_ref) {
    var width = _ref.width,
        height = _ref.height;

    return width * height;
  }

  /**
   * Utility used to transform the `auto` placement to the placement with more
   * available space.
   * @method
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
    var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    if (placement.indexOf('auto') === -1) {
      return placement;
    }

    var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

    var rects = {
      top: {
        width: boundaries.width,
        height: refRect.top - boundaries.top
      },
      right: {
        width: boundaries.right - refRect.right,
        height: boundaries.height
      },
      bottom: {
        width: boundaries.width,
        height: boundaries.bottom - refRect.bottom
      },
      left: {
        width: refRect.left - boundaries.left,
        height: boundaries.height
      }
    };

    var sortedAreas = Object.keys(rects).map(function (key) {
      return _extends$1({
        key: key
      }, rects[key], {
        area: getArea(rects[key])
      });
    }).sort(function (a, b) {
      return b.area - a.area;
    });

    var filteredAreas = sortedAreas.filter(function (_ref2) {
      var width = _ref2.width,
          height = _ref2.height;
      return width >= popper.clientWidth && height >= popper.clientHeight;
    });

    var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

    var variation = placement.split('-')[1];

    return computedPlacement + (variation ? '-' + variation : '');
  }

  /**
   * Get offsets to the reference element
   * @method
   * @memberof Popper.Utils
   * @param {Object} state
   * @param {Element} popper - the popper element
   * @param {Element} reference - the reference element (the popper will be relative to this)
   * @returns {Object} An object containing the offsets which will be applied to the popper
   */
  function getReferenceOffsets(state, popper, reference) {
    var commonOffsetParent = findCommonOffsetParent(popper, reference);
    return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent);
  }

  /**
   * Get the outer sizes of the given element (offset size + margins)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Object} object containing width and height properties
   */
  function getOuterSizes(element) {
    var styles = window.getComputedStyle(element);
    var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
    var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
    var result = {
      width: element.offsetWidth + y,
      height: element.offsetHeight + x
    };
    return result;
  }

  /**
   * Get the opposite placement of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement
   * @returns {String} flipped placement
   */
  function getOppositePlacement(placement) {
    var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash[matched];
    });
  }

  /**
   * Get offsets to the popper
   * @method
   * @memberof Popper.Utils
   * @param {Object} position - CSS position the Popper will get applied
   * @param {HTMLElement} popper - the popper element
   * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
   * @param {String} placement - one of the valid placement options
   * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
   */
  function getPopperOffsets(popper, referenceOffsets, placement) {
    placement = placement.split('-')[0];

    // Get popper node sizes
    var popperRect = getOuterSizes(popper);

    // Add position, width and height to our offsets object
    var popperOffsets = {
      width: popperRect.width,
      height: popperRect.height
    };

    // depending by the popper placement we have to compute its offsets slightly differently
    var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    var mainSide = isHoriz ? 'top' : 'left';
    var secondarySide = isHoriz ? 'left' : 'top';
    var measurement = isHoriz ? 'height' : 'width';
    var secondaryMeasurement = !isHoriz ? 'height' : 'width';

    popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
    if (placement === secondarySide) {
      popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
    } else {
      popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
    }

    return popperOffsets;
  }

  /**
   * Mimics the `find` method of Array
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function find(arr, check) {
    // use native find if supported
    if (Array.prototype.find) {
      return arr.find(check);
    }

    // use `filter` to obtain the same behavior of `find`
    return arr.filter(check)[0];
  }

  /**
   * Return the index of the matching object
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function findIndex(arr, prop, value) {
    // use native findIndex if supported
    if (Array.prototype.findIndex) {
      return arr.findIndex(function (cur) {
        return cur[prop] === value;
      });
    }

    // use `find` + `indexOf` if `findIndex` isn't supported
    var match = find(arr, function (obj) {
      return obj[prop] === value;
    });
    return arr.indexOf(match);
  }

  /**
   * Loop trough the list of modifiers and run them in order,
   * each of them will then edit the data object.
   * @method
   * @memberof Popper.Utils
   * @param {dataObject} data
   * @param {Array} modifiers
   * @param {String} ends - Optional modifier name used as stopper
   * @returns {dataObject}
   */
  function runModifiers(modifiers, data, ends) {
    var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

    modifiersToRun.forEach(function (modifier) {
      if (modifier.function) {
        console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      }
      var fn = modifier.function || modifier.fn;
      if (modifier.enabled && isFunction(fn)) {
        // Add properties to offsets to make them a complete clientRect object
        // we do this before each modifier to make sure the previous one doesn't
        // mess with these values
        data.offsets.popper = getClientRect(data.offsets.popper);
        data.offsets.reference = getClientRect(data.offsets.reference);

        data = fn(data, modifier);
      }
    });

    return data;
  }

  /**
   * Updates the position of the popper, computing the new offsets and applying
   * the new style.<br />
   * Prefer `scheduleUpdate` over `update` because of performance reasons.
   * @method
   * @memberof Popper
   */
  function update() {
    // if popper is destroyed, don't perform any further update
    if (this.state.isDestroyed) {
      return;
    }

    var data = {
      instance: this,
      styles: {},
      arrowStyles: {},
      attributes: {},
      flipped: false,
      offsets: {}
    };

    // compute reference element offsets
    data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

    // store the computed placement inside `originalPlacement`
    data.originalPlacement = data.placement;

    // compute the popper offsets
    data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
    data.offsets.popper.position = 'absolute';

    // run the modifiers
    data = runModifiers(this.modifiers, data);

    // the first `update` will call `onCreate` callback
    // the other ones will call `onUpdate` callback
    if (!this.state.isCreated) {
      this.state.isCreated = true;
      this.options.onCreate(data);
    } else {
      this.options.onUpdate(data);
    }
  }

  /**
   * Helper used to know if the given modifier is enabled.
   * @method
   * @memberof Popper.Utils
   * @returns {Boolean}
   */
  function isModifierEnabled(modifiers, modifierName) {
    return modifiers.some(function (_ref) {
      var name = _ref.name,
          enabled = _ref.enabled;
      return enabled && name === modifierName;
    });
  }

  /**
   * Get the prefixed supported property name
   * @method
   * @memberof Popper.Utils
   * @argument {String} property (camelCase)
   * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
   */
  function getSupportedPropertyName(property) {
    var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
    var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

    for (var i = 0; i < prefixes.length - 1; i++) {
      var prefix = prefixes[i];
      var toCheck = prefix ? '' + prefix + upperProp : property;
      if (typeof window.document.body.style[toCheck] !== 'undefined') {
        return toCheck;
      }
    }
    return null;
  }

  /**
   * Destroy the popper
   * @method
   * @memberof Popper
   */
  function destroy() {
    this.state.isDestroyed = true;

    // touch DOM only if `applyStyle` modifier is enabled
    if (isModifierEnabled(this.modifiers, 'applyStyle')) {
      this.popper.removeAttribute('x-placement');
      this.popper.style.left = '';
      this.popper.style.position = '';
      this.popper.style.top = '';
      this.popper.style[getSupportedPropertyName('transform')] = '';
    }

    this.disableEventListeners();

    // remove the popper if user explicity asked for the deletion on destroy
    // do not use `remove` because IE11 doesn't support it
    if (this.options.removeOnDestroy) {
      this.popper.parentNode.removeChild(this.popper);
    }
    return this;
  }

  function attachToScrollParents(scrollParent, event, callback, scrollParents) {
    var isBody = scrollParent.nodeName === 'BODY';
    var target = isBody ? window : scrollParent;
    target.addEventListener(event, callback, { passive: true });

    if (!isBody) {
      attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
    }
    scrollParents.push(target);
  }

  /**
   * Setup needed event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function setupEventListeners(reference, options, state, updateBound) {
    // Resize event listener on window
    state.updateBound = updateBound;
    window.addEventListener('resize', state.updateBound, { passive: true });

    // Scroll event listener on scroll parents
    var scrollElement = getScrollParent(reference);
    attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
    state.scrollElement = scrollElement;
    state.eventsEnabled = true;

    return state;
  }

  /**
   * It will add resize/scroll events and start recalculating
   * position of the popper element when they are triggered.
   * @method
   * @memberof Popper
   */
  function enableEventListeners() {
    if (!this.state.eventsEnabled) {
      this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
    }
  }

  /**
   * Remove event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function removeEventListeners(reference, state) {
    // Remove resize event listener on window
    window.removeEventListener('resize', state.updateBound);

    // Remove scroll event listener on scroll parents
    state.scrollParents.forEach(function (target) {
      target.removeEventListener('scroll', state.updateBound);
    });

    // Reset state
    state.updateBound = null;
    state.scrollParents = [];
    state.scrollElement = null;
    state.eventsEnabled = false;
    return state;
  }

  /**
   * It will remove resize/scroll events and won't recalculate popper position
   * when they are triggered. It also won't trigger onUpdate callback anymore,
   * unless you call `update` method manually.
   * @method
   * @memberof Popper
   */
  function disableEventListeners() {
    if (this.state.eventsEnabled) {
      window.cancelAnimationFrame(this.scheduleUpdate);
      this.state = removeEventListeners(this.reference, this.state);
    }
  }

  /**
   * Tells if a given input is a number
   * @method
   * @memberof Popper.Utils
   * @param {*} input to check
   * @return {Boolean}
   */
  function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
  }

  /**
   * Set the style to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the style to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setStyles(element, styles) {
    Object.keys(styles).forEach(function (prop) {
      var unit = '';
      // add unit if the value is numeric and is one of the following
      if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
        unit = 'px';
      }
      element.style[prop] = styles[prop] + unit;
    });
  }

  /**
   * Set the attributes to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the attributes to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(function (prop) {
      var value = attributes[prop];
      if (value !== false) {
        element.setAttribute(prop, attributes[prop]);
      } else {
        element.removeAttribute(prop);
      }
    });
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} data.styles - List of style properties - values to apply to popper element
   * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The same data object
   */
  function applyStyle(data) {
    // any property present in `data.styles` will be applied to the popper,
    // in this way we can make the 3rd party modifiers add custom styles to it
    // Be aware, modifiers could override the properties defined in the previous
    // lines of this modifier!
    setStyles(data.instance.popper, data.styles);

    // any property present in `data.attributes` will be applied to the popper,
    // they will be set as HTML attributes of the element
    setAttributes(data.instance.popper, data.attributes);

    // if arrowElement is defined and arrowStyles has some properties
    if (data.arrowElement && Object.keys(data.arrowStyles).length) {
      setStyles(data.arrowElement, data.arrowStyles);
    }

    return data;
  }

  /**
   * Set the x-placement attribute before everything else because it could be used
   * to add margins to the popper margins needs to be calculated to get the
   * correct popper offsets.
   * @method
   * @memberof Popper.modifiers
   * @param {HTMLElement} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Popper.js options
   */
  function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
    // compute reference element offsets
    var referenceOffsets = getReferenceOffsets(state, popper, reference);

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

    popper.setAttribute('x-placement', placement);

    // Apply `position` to popper before anything else because
    // without the position applied we can't guarantee correct computations
    setStyles(popper, { position: 'absolute' });

    return options;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeStyle(data, options) {
    var x = options.x,
        y = options.y;
    var popper = data.offsets.popper;

    // Remove this legacy support in Popper.js v2

    var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'applyStyle';
    }).gpuAcceleration;
    if (legacyGpuAccelerationOption !== undefined) {
      console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
    }
    var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

    var offsetParent = getOffsetParent(data.instance.popper);
    var offsetParentRect = getBoundingClientRect(offsetParent);

    // Styles
    var styles = {
      position: popper.position
    };

    // floor sides to avoid blurry text
    var offsets = {
      left: Math.floor(popper.left),
      top: Math.floor(popper.top),
      bottom: Math.floor(popper.bottom),
      right: Math.floor(popper.right)
    };

    var sideA = x === 'bottom' ? 'top' : 'bottom';
    var sideB = y === 'right' ? 'left' : 'right';

    // if gpuAcceleration is set to `true` and transform is supported,
    //  we use `translate3d` to apply the position to the popper we
    // automatically use the supported prefixed version if needed
    var prefixedProperty = getSupportedPropertyName('transform');

    // now, let's make a step back and look at this code closely (wtf?)
    // If the content of the popper grows once it's been positioned, it
    // may happen that the popper gets misplaced because of the new content
    // overflowing its reference element
    // To avoid this problem, we provide two options (x and y), which allow
    // the consumer to define the offset origin.
    // If we position a popper on top of a reference element, we can set
    // `x` to `top` to make the popper grow towards its top instead of
    // its bottom.
    var left = void 0,
        top = void 0;
    if (sideA === 'bottom') {
      top = -offsetParentRect.height + offsets.bottom;
    } else {
      top = offsets.top;
    }
    if (sideB === 'right') {
      left = -offsetParentRect.width + offsets.right;
    } else {
      left = offsets.left;
    }
    if (gpuAcceleration && prefixedProperty) {
      styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
      styles[sideA] = 0;
      styles[sideB] = 0;
      styles.willChange = 'transform';
    } else {
      // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
      var invertTop = sideA === 'bottom' ? -1 : 1;
      var invertLeft = sideB === 'right' ? -1 : 1;
      styles[sideA] = top * invertTop;
      styles[sideB] = left * invertLeft;
      styles.willChange = sideA + ', ' + sideB;
    }

    // Attributes
    var attributes = {
      'x-placement': data.placement
    };

    // Update `data` attributes, styles and arrowStyles
    data.attributes = _extends$1({}, attributes, data.attributes);
    data.styles = _extends$1({}, styles, data.styles);
    data.arrowStyles = _extends$1({}, data.offsets.arrow, data.arrowStyles);

    return data;
  }

  /**
   * Helper used to know if the given modifier depends from another one.<br />
   * It checks if the needed modifier is listed and enabled.
   * @method
   * @memberof Popper.Utils
   * @param {Array} modifiers - list of modifiers
   * @param {String} requestingName - name of requesting modifier
   * @param {String} requestedName - name of requested modifier
   * @returns {Boolean}
   */
  function isModifierRequired(modifiers, requestingName, requestedName) {
    var requesting = find(modifiers, function (_ref) {
      var name = _ref.name;
      return name === requestingName;
    });

    var isRequired = !!requesting && modifiers.some(function (modifier) {
      return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
    });

    if (!isRequired) {
      var _requesting = '`' + requestingName + '`';
      var requested = '`' + requestedName + '`';
      console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
    }
    return isRequired;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function arrow(data, options) {
    // arrow depends on keepTogether in order to work
    if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
      return data;
    }

    var arrowElement = options.element;

    // if arrowElement is a string, suppose it's a CSS selector
    if (typeof arrowElement === 'string') {
      arrowElement = data.instance.popper.querySelector(arrowElement);

      // if arrowElement is not found, don't run the modifier
      if (!arrowElement) {
        return data;
      }
    } else {
      // if the arrowElement isn't a query selector we must check that the
      // provided DOM node is child of its popper node
      if (!data.instance.popper.contains(arrowElement)) {
        console.warn('WARNING: `arrow.element` must be child of its popper element!');
        return data;
      }
    }

    var placement = data.placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var isVertical = ['left', 'right'].indexOf(placement) !== -1;

    var len = isVertical ? 'height' : 'width';
    var sideCapitalized = isVertical ? 'Top' : 'Left';
    var side = sideCapitalized.toLowerCase();
    var altSide = isVertical ? 'left' : 'top';
    var opSide = isVertical ? 'bottom' : 'right';
    var arrowElementSize = getOuterSizes(arrowElement)[len];

    //
    // extends keepTogether behavior making sure the popper and its
    // reference have enough pixels in conjuction
    //

    // top/left side
    if (reference[opSide] - arrowElementSize < popper[side]) {
      data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
    }
    // bottom/right side
    if (reference[side] + arrowElementSize > popper[opSide]) {
      data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
    }

    // compute center of the popper
    var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

    // Compute the sideValue using the updated popper offsets
    // take popper margin in account because we don't have this info available
    var popperMarginSide = getStyleComputedProperty(data.instance.popper, 'margin' + sideCapitalized).replace('px', '');
    var sideValue = center - getClientRect(data.offsets.popper)[side] - popperMarginSide;

    // prevent arrowElement from being placed not contiguously to its popper
    sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

    data.arrowElement = arrowElement;
    data.offsets.arrow = {};
    data.offsets.arrow[side] = Math.round(sideValue);
    data.offsets.arrow[altSide] = ''; // make sure to unset any eventual altSide value from the DOM node

    return data;
  }

  /**
   * Get the opposite placement variation of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement variation
   * @returns {String} flipped placement variation
   */
  function getOppositeVariation(variation) {
    if (variation === 'end') {
      return 'start';
    } else if (variation === 'start') {
      return 'end';
    }
    return variation;
  }

  /**
   * List of accepted placements to use as values of the `placement` option.<br />
   * Valid placements are:
   * - `auto`
   * - `top`
   * - `right`
   * - `bottom`
   * - `left`
   *
   * Each placement can have a variation from this list:
   * - `-start`
   * - `-end`
   *
   * Variations are interpreted easily if you think of them as the left to right
   * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
   * is right.<br />
   * Vertically (`left` and `right`), `start` is top and `end` is bottom.
   *
   * Some valid examples are:
   * - `top-end` (on top of reference, right aligned)
   * - `right-start` (on right of reference, top aligned)
   * - `bottom` (on bottom, centered)
   * - `auto-right` (on the side with more space available, alignment depends by placement)
   *
   * @static
   * @type {Array}
   * @enum {String}
   * @readonly
   * @method placements
   * @memberof Popper
   */
  var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

  // Get rid of `auto` `auto-start` and `auto-end`
  var validPlacements = placements.slice(3);

  /**
   * Given an initial placement, returns all the subsequent placements
   * clockwise (or counter-clockwise).
   *
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement - A valid placement (it accepts variations)
   * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
   * @returns {Array} placements including their variations
   */
  function clockwise(placement) {
    var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var index = validPlacements.indexOf(placement);
    var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
    return counter ? arr.reverse() : arr;
  }

  var BEHAVIORS = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
  };

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function flip(data, options) {
    // if `inner` modifier is enabled, we can't use the `flip` modifier
    if (isModifierEnabled(data.instance.modifiers, 'inner')) {
      return data;
    }

    if (data.flipped && data.placement === data.originalPlacement) {
      // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
      return data;
    }

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement);

    var placement = data.placement.split('-')[0];
    var placementOpposite = getOppositePlacement(placement);
    var variation = data.placement.split('-')[1] || '';

    var flipOrder = [];

    switch (options.behavior) {
      case BEHAVIORS.FLIP:
        flipOrder = [placement, placementOpposite];
        break;
      case BEHAVIORS.CLOCKWISE:
        flipOrder = clockwise(placement);
        break;
      case BEHAVIORS.COUNTERCLOCKWISE:
        flipOrder = clockwise(placement, true);
        break;
      default:
        flipOrder = options.behavior;
    }

    flipOrder.forEach(function (step, index) {
      if (placement !== step || flipOrder.length === index + 1) {
        return data;
      }

      placement = data.placement.split('-')[0];
      placementOpposite = getOppositePlacement(placement);

      var popperOffsets = data.offsets.popper;
      var refOffsets = data.offsets.reference;

      // using floor because the reference offsets may contain decimals we are not going to consider here
      var floor = Math.floor;
      var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

      var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
      var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
      var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
      var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

      var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

      // flip the variation if required
      var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
      var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

      if (overlapsRef || overflowsBoundaries || flippedVariation) {
        // this boolean to detect any flip loop
        data.flipped = true;

        if (overlapsRef || overflowsBoundaries) {
          placement = flipOrder[index + 1];
        }

        if (flippedVariation) {
          variation = getOppositeVariation(variation);
        }

        data.placement = placement + (variation ? '-' + variation : '');

        // this object contains `position`, we want to preserve it along with
        // any additional property we may add in the future
        data.offsets.popper = _extends$1({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

        data = runModifiers(data.instance.modifiers, data, 'flip');
      }
    });
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function keepTogether(data) {
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var placement = data.placement.split('-')[0];
    var floor = Math.floor;
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var side = isVertical ? 'right' : 'bottom';
    var opSide = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    if (popper[side] < floor(reference[opSide])) {
      data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
    }
    if (popper[opSide] > floor(reference[side])) {
      data.offsets.popper[opSide] = floor(reference[side]);
    }

    return data;
  }

  /**
   * Converts a string containing value + unit into a px value number
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} str - Value + unit string
   * @argument {String} measurement - `height` or `width`
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @returns {Number|String}
   * Value in pixels, or original string if no values were extracted
   */
  function toValue(str, measurement, popperOffsets, referenceOffsets) {
    // separate value from unit
    var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    var value = +split[1];
    var unit = split[2];

    // If it's not a number it's an operator, I guess
    if (!value) {
      return str;
    }

    if (unit.indexOf('%') === 0) {
      var element = void 0;
      switch (unit) {
        case '%p':
          element = popperOffsets;
          break;
        case '%':
        case '%r':
        default:
          element = referenceOffsets;
      }

      var rect = getClientRect(element);
      return rect[measurement] / 100 * value;
    } else if (unit === 'vh' || unit === 'vw') {
      // if is a vh or vw, we calculate the size based on the viewport
      var size = void 0;
      if (unit === 'vh') {
        size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      } else {
        size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      }
      return size / 100 * value;
    } else {
      // if is an explicit pixel unit, we get rid of the unit and keep the value
      // if is an implicit unit, it's px, and we return just the value
      return value;
    }
  }

  /**
   * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} offset
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @argument {String} basePlacement
   * @returns {Array} a two cells array with x and y offsets in numbers
   */
  function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
    var offsets = [0, 0];

    // Use height if placement is left or right and index is 0 otherwise use width
    // in this way the first offset will use an axis and the second one
    // will use the other one
    var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

    // Split the offset string to obtain a list of values and operands
    // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
    var fragments = offset.split(/(\+|\-)/).map(function (frag) {
      return frag.trim();
    });

    // Detect if the offset string contains a pair of values or a single one
    // they could be separated by comma or space
    var divider = fragments.indexOf(find(fragments, function (frag) {
      return frag.search(/,|\s/) !== -1;
    }));

    if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
      console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    }

    // If divider is found, we divide the list of values and operands to divide
    // them by ofset X and Y.
    var splitRegex = /\s*,\s*|\s+/;
    var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

    // Convert the values with units to absolute pixels to allow our computations
    ops = ops.map(function (op, index) {
      // Most of the units rely on the orientation of the popper
      var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
      var mergeWithPrevious = false;
      return op
      // This aggregates any `+` or `-` sign that aren't considered operators
      // e.g.: 10 + +5 => [10, +, +5]
      .reduce(function (a, b) {
        if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
          a[a.length - 1] = b;
          mergeWithPrevious = true;
          return a;
        } else if (mergeWithPrevious) {
          a[a.length - 1] += b;
          mergeWithPrevious = false;
          return a;
        } else {
          return a.concat(b);
        }
      }, [])
      // Here we convert the string values into number values (in px)
      .map(function (str) {
        return toValue(str, measurement, popperOffsets, referenceOffsets);
      });
    });

    // Loop trough the offsets arrays and execute the operations
    ops.forEach(function (op, index) {
      op.forEach(function (frag, index2) {
        if (isNumeric(frag)) {
          offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
        }
      });
    });
    return offsets;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @argument {Number|String} options.offset=0
   * The offset value as described in the modifier description
   * @returns {Object} The data object, properly modified
   */
  function offset(data, _ref) {
    var offset = _ref.offset;
    var placement = data.placement,
        _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var basePlacement = placement.split('-')[0];

    var offsets = void 0;
    if (isNumeric(+offset)) {
      offsets = [+offset, 0];
    } else {
      offsets = parseOffset(offset, popper, reference, basePlacement);
    }

    if (basePlacement === 'left') {
      popper.top += offsets[0];
      popper.left -= offsets[1];
    } else if (basePlacement === 'right') {
      popper.top += offsets[0];
      popper.left += offsets[1];
    } else if (basePlacement === 'top') {
      popper.left += offsets[0];
      popper.top -= offsets[1];
    } else if (basePlacement === 'bottom') {
      popper.left += offsets[0];
      popper.top += offsets[1];
    }

    data.popper = popper;
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function preventOverflow(data, options) {
    var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

    // If offsetParent is the reference element, we really want to
    // go one step up and use the next offsetParent as reference to
    // avoid to make this modifier completely useless and look like broken
    if (data.instance.reference === boundariesElement) {
      boundariesElement = getOffsetParent(boundariesElement);
    }

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement);
    options.boundaries = boundaries;

    var order = options.priority;
    var popper = data.offsets.popper;

    var check = {
      primary: function primary(placement) {
        var value = popper[placement];
        if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
          value = Math.max(popper[placement], boundaries[placement]);
        }
        return defineProperty({}, placement, value);
      },
      secondary: function secondary(placement) {
        var mainSide = placement === 'right' ? 'left' : 'top';
        var value = popper[mainSide];
        if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
          value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
        }
        return defineProperty({}, mainSide, value);
      }
    };

    order.forEach(function (placement) {
      var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
      popper = _extends$1({}, popper, check[side](placement));
    });

    data.offsets.popper = popper;

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function shift(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var shiftvariation = placement.split('-')[1];

    // if shift shiftvariation is specified, run the modifier
    if (shiftvariation) {
      var _data$offsets = data.offsets,
          reference = _data$offsets.reference,
          popper = _data$offsets.popper;

      var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
      var side = isVertical ? 'left' : 'top';
      var measurement = isVertical ? 'width' : 'height';

      var shiftOffsets = {
        start: defineProperty({}, side, reference[side]),
        end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
      };

      data.offsets.popper = _extends$1({}, popper, shiftOffsets[shiftvariation]);
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function hide(data) {
    if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
      return data;
    }

    var refRect = data.offsets.reference;
    var bound = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'preventOverflow';
    }).boundaries;

    if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === true) {
        return data;
      }

      data.hide = true;
      data.attributes['x-out-of-boundaries'] = '';
    } else {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === false) {
        return data;
      }

      data.hide = false;
      data.attributes['x-out-of-boundaries'] = false;
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function inner(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;

    var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

    var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

    popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

    data.placement = getOppositePlacement(placement);
    data.offsets.popper = getClientRect(popper);

    return data;
  }

  /**
   * Modifier function, each modifier can have a function of this type assigned
   * to its `fn` property.<br />
   * These functions will be called on each update, this means that you must
   * make sure they are performant enough to avoid performance bottlenecks.
   *
   * @function ModifierFn
   * @argument {dataObject} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {dataObject} The data object, properly modified
   */

  /**
   * Modifiers are plugins used to alter the behavior of your poppers.<br />
   * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
   * needed by the library.
   *
   * Usually you don't want to override the `order`, `fn` and `onLoad` props.
   * All the other properties are configurations that could be tweaked.
   * @namespace modifiers
   */
  var modifiers = {
    /**
     * Modifier used to shift the popper on the start or end of its reference
     * element.<br />
     * It will read the variation of the `placement` property.<br />
     * It can be one either `-end` or `-start`.
     * @memberof modifiers
     * @inner
     */
    shift: {
      /** @prop {number} order=100 - Index used to define the order of execution */
      order: 100,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: shift
    },

    /**
     * The `offset` modifier can shift your popper on both its axis.
     *
     * It accepts the following units:
     * - `px` or unitless, interpreted as pixels
     * - `%` or `%r`, percentage relative to the length of the reference element
     * - `%p`, percentage relative to the length of the popper element
     * - `vw`, CSS viewport width unit
     * - `vh`, CSS viewport height unit
     *
     * For length is intended the main axis relative to the placement of the popper.<br />
     * This means that if the placement is `top` or `bottom`, the length will be the
     * `width`. In case of `left` or `right`, it will be the height.
     *
     * You can provide a single value (as `Number` or `String`), or a pair of values
     * as `String` divided by a comma or one (or more) white spaces.<br />
     * The latter is a deprecated method because it leads to confusion and will be
     * removed in v2.<br />
     * Additionally, it accepts additions and subtractions between different units.
     * Note that multiplications and divisions aren't supported.
     *
     * Valid examples are:
     * ```
     * 10
     * '10%'
     * '10, 10'
     * '10%, 10'
     * '10 + 10%'
     * '10 - 5vh + 3%'
     * '-10px + 5vh, 5px - 6%'
     * ```
     * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
     * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
     * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
     *
     * @memberof modifiers
     * @inner
     */
    offset: {
      /** @prop {number} order=200 - Index used to define the order of execution */
      order: 200,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: offset,
      /** @prop {Number|String} offset=0
       * The offset value as described in the modifier description
       */
      offset: 0
    },

    /**
     * Modifier used to prevent the popper from being positioned outside the boundary.
     *
     * An scenario exists where the reference itself is not within the boundaries.<br />
     * We can say it has "escaped the boundaries" — or just "escaped".<br />
     * In this case we need to decide whether the popper should either:
     *
     * - detach from the reference and remain "trapped" in the boundaries, or
     * - if it should ignore the boundary and "escape with its reference"
     *
     * When `escapeWithReference` is set to`true` and reference is completely
     * outside its boundaries, the popper will overflow (or completely leave)
     * the boundaries in order to remain attached to the edge of the reference.
     *
     * @memberof modifiers
     * @inner
     */
    preventOverflow: {
      /** @prop {number} order=300 - Index used to define the order of execution */
      order: 300,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: preventOverflow,
      /**
       * @prop {Array} [priority=['left','right','top','bottom']]
       * Popper will try to prevent overflow following these priorities by default,
       * then, it could overflow on the left and on top of the `boundariesElement`
       */
      priority: ['left', 'right', 'top', 'bottom'],
      /**
       * @prop {number} padding=5
       * Amount of pixel used to define a minimum distance between the boundaries
       * and the popper this makes sure the popper has always a little padding
       * between the edges of its container
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='scrollParent'
       * Boundaries used by the modifier, can be `scrollParent`, `window`,
       * `viewport` or any DOM element.
       */
      boundariesElement: 'scrollParent'
    },

    /**
     * Modifier used to make sure the reference and its popper stay near eachothers
     * without leaving any gap between the two. Expecially useful when the arrow is
     * enabled and you want to assure it to point to its reference element.
     * It cares only about the first axis, you can still have poppers with margin
     * between the popper and its reference element.
     * @memberof modifiers
     * @inner
     */
    keepTogether: {
      /** @prop {number} order=400 - Index used to define the order of execution */
      order: 400,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: keepTogether
    },

    /**
     * This modifier is used to move the `arrowElement` of the popper to make
     * sure it is positioned between the reference element and its popper element.
     * It will read the outer size of the `arrowElement` node to detect how many
     * pixels of conjuction are needed.
     *
     * It has no effect if no `arrowElement` is provided.
     * @memberof modifiers
     * @inner
     */
    arrow: {
      /** @prop {number} order=500 - Index used to define the order of execution */
      order: 500,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: arrow,
      /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
      element: '[x-arrow]'
    },

    /**
     * Modifier used to flip the popper's placement when it starts to overlap its
     * reference element.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     *
     * **NOTE:** this modifier will interrupt the current update cycle and will
     * restart it if it detects the need to flip the placement.
     * @memberof modifiers
     * @inner
     */
    flip: {
      /** @prop {number} order=600 - Index used to define the order of execution */
      order: 600,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: flip,
      /**
       * @prop {String|Array} behavior='flip'
       * The behavior used to change the popper's placement. It can be one of
       * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
       * placements (with optional variations).
       */
      behavior: 'flip',
      /**
       * @prop {number} padding=5
       * The popper will flip if it hits the edges of the `boundariesElement`
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='viewport'
       * The element which will define the boundaries of the popper position,
       * the popper will never be placed outside of the defined boundaries
       * (except if keepTogether is enabled)
       */
      boundariesElement: 'viewport'
    },

    /**
     * Modifier used to make the popper flow toward the inner of the reference element.
     * By default, when this modifier is disabled, the popper will be placed outside
     * the reference element.
     * @memberof modifiers
     * @inner
     */
    inner: {
      /** @prop {number} order=700 - Index used to define the order of execution */
      order: 700,
      /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
      enabled: false,
      /** @prop {ModifierFn} */
      fn: inner
    },

    /**
     * Modifier used to hide the popper when its reference element is outside of the
     * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
     * be used to hide with a CSS selector the popper when its reference is
     * out of boundaries.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     * @memberof modifiers
     * @inner
     */
    hide: {
      /** @prop {number} order=800 - Index used to define the order of execution */
      order: 800,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: hide
    },

    /**
     * Computes the style that will be applied to the popper element to gets
     * properly positioned.
     *
     * Note that this modifier will not touch the DOM, it just prepares the styles
     * so that `applyStyle` modifier can apply it. This separation is useful
     * in case you need to replace `applyStyle` with a custom implementation.
     *
     * This modifier has `850` as `order` value to maintain backward compatibility
     * with previous versions of Popper.js. Expect the modifiers ordering method
     * to change in future major versions of the library.
     *
     * @memberof modifiers
     * @inner
     */
    computeStyle: {
      /** @prop {number} order=850 - Index used to define the order of execution */
      order: 850,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: computeStyle,
      /**
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3d transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties.
       */
      gpuAcceleration: true,
      /**
       * @prop {string} [x='bottom']
       * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
       * Change this if your popper should grow in a direction different from `bottom`
       */
      x: 'bottom',
      /**
       * @prop {string} [x='left']
       * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
       * Change this if your popper should grow in a direction different from `right`
       */
      y: 'right'
    },

    /**
     * Applies the computed styles to the popper element.
     *
     * All the DOM manipulations are limited to this modifier. This is useful in case
     * you want to integrate Popper.js inside a framework or view library and you
     * want to delegate all the DOM manipulations to it.
     *
     * Note that if you disable this modifier, you must make sure the popper element
     * has its position set to `absolute` before Popper.js can do its work!
     *
     * Just disable this modifier and define you own to achieve the desired effect.
     *
     * @memberof modifiers
     * @inner
     */
    applyStyle: {
      /** @prop {number} order=900 - Index used to define the order of execution */
      order: 900,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: applyStyle,
      /** @prop {Function} */
      onLoad: applyStyleOnLoad,
      /**
       * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3d transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties.
       */
      gpuAcceleration: undefined
    }
  };

  /**
   * The `dataObject` is an object containing all the informations used by Popper.js
   * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
   * @name dataObject
   * @property {Object} data.instance The Popper.js instance
   * @property {String} data.placement Placement applied to popper
   * @property {String} data.originalPlacement Placement originally defined on init
   * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
   * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
   * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
   * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.boundaries Offsets of the popper boundaries
   * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
   * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
   */

  /**
   * Default options provided to Popper.js constructor.<br />
   * These can be overriden using the `options` argument of Popper.js.<br />
   * To override an option, simply pass as 3rd argument an object with the same
   * structure of this object, example:
   * ```
   * new Popper(ref, pop, {
   *   modifiers: {
   *     preventOverflow: { enabled: false }
   *   }
   * })
   * ```
   * @type {Object}
   * @static
   * @memberof Popper
   */
  var Defaults = {
    /**
     * Popper's placement
     * @prop {Popper.placements} placement='bottom'
     */
    placement: 'bottom',

    /**
     * Whether events (resize, scroll) are initially enabled
     * @prop {Boolean} eventsEnabled=true
     */
    eventsEnabled: true,

    /**
     * Set to true if you want to automatically remove the popper when
     * you call the `destroy` method.
     * @prop {Boolean} removeOnDestroy=false
     */
    removeOnDestroy: false,

    /**
     * Callback called when the popper is created.<br />
     * By default, is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onCreate}
     */
    onCreate: function onCreate() {},

    /**
     * Callback called when the popper is updated, this callback is not called
     * on the initialization/creation of the popper, but only on subsequent
     * updates.<br />
     * By default, is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onUpdate}
     */
    onUpdate: function onUpdate() {},

    /**
     * List of modifiers used to modify the offsets before they are applied to the popper.
     * They provide most of the functionalities of Popper.js
     * @prop {modifiers}
     */
    modifiers: modifiers
  };

  /**
   * @callback onCreate
   * @param {dataObject} data
   */

  /**
   * @callback onUpdate
   * @param {dataObject} data
   */

  // Utils
  // Methods
  var Popper = function () {
    /**
     * Create a new Popper.js instance
     * @class Popper
     * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
     * @param {HTMLElement} popper - The HTML element used as popper.
     * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
     * @return {Object} instance - The generated Popper.js instance
     */
    function Popper(reference, popper) {
      var _this = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      classCallCheck(this, Popper);

      this.scheduleUpdate = function () {
        return requestAnimationFrame(_this.update);
      };

      // make update() debounced, so that it only runs at most once-per-tick
      this.update = debounce(this.update.bind(this));

      // with {} we create a new object with the options inside it
      this.options = _extends$1({}, Popper.Defaults, options);

      // init state
      this.state = {
        isDestroyed: false,
        isCreated: false,
        scrollParents: []
      };

      // get reference and popper elements (allow jQuery wrappers)
      this.reference = reference.jquery ? reference[0] : reference;
      this.popper = popper.jquery ? popper[0] : popper;

      // Deep merge modifiers options
      this.options.modifiers = {};
      Object.keys(_extends$1({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
        _this.options.modifiers[name] = _extends$1({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
      });

      // Refactoring modifiers' list (Object => Array)
      this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
        return _extends$1({
          name: name
        }, _this.options.modifiers[name]);
      })
      // sort the modifiers by order
      .sort(function (a, b) {
        return a.order - b.order;
      });

      // modifiers have the ability to execute arbitrary code when Popper.js get inited
      // such code is executed in the same order of its modifier
      // they could add new properties to their options configuration
      // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
      this.modifiers.forEach(function (modifierOptions) {
        if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
          modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
        }
      });

      // fire the first update to position the popper in the right place
      this.update();

      var eventsEnabled = this.options.eventsEnabled;
      if (eventsEnabled) {
        // setup event listeners, they will take care of update the position in specific situations
        this.enableEventListeners();
      }

      this.state.eventsEnabled = eventsEnabled;
    }

    // We can't use class properties because they don't get listed in the
    // class prototype and break stuff like Sinon stubs


    createClass$1(Popper, [{
      key: 'update',
      value: function update$$1() {
        return update.call(this);
      }
    }, {
      key: 'destroy',
      value: function destroy$$1() {
        return destroy.call(this);
      }
    }, {
      key: 'enableEventListeners',
      value: function enableEventListeners$$1() {
        return enableEventListeners.call(this);
      }
    }, {
      key: 'disableEventListeners',
      value: function disableEventListeners$$1() {
        return disableEventListeners.call(this);
      }

      /**
       * Schedule an update, it will run on the next UI update available
       * @method scheduleUpdate
       * @memberof Popper
       */

      /**
       * Collection of utilities useful when writing custom modifiers.
       * Starting from version 1.7, this method is available only if you
       * include `popper-utils.js` before `popper.js`.
       *
       * **DEPRECATION**: This way to access PopperUtils is deprecated
       * and will be removed in v2! Use the PopperUtils module directly instead.
       * Due to the high instability of the methods contained in Utils, we can't
       * guarantee them to follow semver. Use them at your own risk!
       * @static
       * @private
       * @type {Object}
       * @deprecated since version 1.8
       * @member Utils
       * @memberof Popper
       */

    }]);
    return Popper;
  }();

  /**
   * The `referenceObject` is an object that provides an interface compatible with Popper.js
   * and lets you use it as replacement of a real DOM node.<br />
   * You can use this method to position a popper relatively to a set of coordinates
   * in case you don't have a DOM node to use as reference.
   *
   * ```
   * new Popper(referenceObject, popperNode);
   * ```
   *
   * NB: This feature isn't supported in Internet Explorer 10
   * @name referenceObject
   * @property {Function} data.getBoundingClientRect
   * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
   * @property {number} data.clientWidth
   * An ES6 getter that will return the width of the virtual reference element.
   * @property {number} data.clientHeight
   * An ES6 getter that will return the height of the virtual reference element.
   */

  Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
  Popper.placements = placements;
  Popper.Defaults = Defaults;

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-beta.2): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Dropdown = function () {
    /**
     * Check for Popper dependency
     * Popper - https://popper.js.org
     */
    if (typeof Popper === 'undefined') {
      throw new Error('Bootstrap dropdown require Popper.js (https://popper.js.org)');
    }
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME = 'dropdown';
    var VERSION = '4.0.0-beta.2';
    var DATA_KEY = 'bs.dropdown';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

    var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

    var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

    var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

    var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

    var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

    var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
    var Event = {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      CLICK: "click" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
      KEYDOWN_DATA_API: "keydown" + EVENT_KEY + DATA_API_KEY,
      KEYUP_DATA_API: "keyup" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      DISABLED: 'disabled',
      SHOW: 'show',
      DROPUP: 'dropup',
      MENURIGHT: 'dropdown-menu-right',
      MENULEFT: 'dropdown-menu-left'
    };
    var Selector = {
      DATA_TOGGLE: '[data-toggle="dropdown"]',
      FORM_CHILD: '.dropdown form',
      MENU: '.dropdown-menu',
      NAVBAR_NAV: '.navbar-nav',
      VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled)'
    };
    var AttachmentMap = {
      TOP: 'top-start',
      TOPEND: 'top-end',
      BOTTOM: 'bottom-start',
      BOTTOMEND: 'bottom-end'
    };
    var Default = {
      offset: 0,
      flip: true
    };
    var DefaultType = {
      offset: '(number|string|function)',
      flip: 'boolean'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Dropdown =
    /*#__PURE__*/
    function () {
      function Dropdown(element, config) {
        this._element = element;
        this._popper = null;
        this._config = this._getConfig(config);
        this._menu = this._getMenuElement();
        this._inNavbar = this._detectNavbar();

        this._addEventListeners();
      } // getters


      var _proto = Dropdown.prototype;

      // public
      _proto.toggle = function toggle() {
        if (this._element.disabled || $(this._element).hasClass(ClassName.DISABLED)) {
          return;
        }

        var parent = Dropdown._getParentFromElement(this._element);

        var isActive = $(this._menu).hasClass(ClassName.SHOW);

        Dropdown._clearMenus();

        if (isActive) {
          return;
        }

        var relatedTarget = {
          relatedTarget: this._element
        };
        var showEvent = $.Event(Event.SHOW, relatedTarget);
        $(parent).trigger(showEvent);

        if (showEvent.isDefaultPrevented()) {
          return;
        }

        var element = this._element; // for dropup with alignment we use the parent as popper container

        if ($(parent).hasClass(ClassName.DROPUP)) {
          if ($(this._menu).hasClass(ClassName.MENULEFT) || $(this._menu).hasClass(ClassName.MENURIGHT)) {
            element = parent;
          }
        }

        this._popper = new Popper(element, this._menu, this._getPopperConfig()); // if this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement && !$(parent).closest(Selector.NAVBAR_NAV).length) {
          $('body').children().on('mouseover', null, $.noop);
        }

        this._element.focus();

        this._element.setAttribute('aria-expanded', true);

        $(this._menu).toggleClass(ClassName.SHOW);
        $(parent).toggleClass(ClassName.SHOW).trigger($.Event(Event.SHOWN, relatedTarget));
      };

      _proto.dispose = function dispose() {
        $.removeData(this._element, DATA_KEY);
        $(this._element).off(EVENT_KEY);
        this._element = null;
        this._menu = null;

        if (this._popper !== null) {
          this._popper.destroy();
        }

        this._popper = null;
      };

      _proto.update = function update() {
        this._inNavbar = this._detectNavbar();

        if (this._popper !== null) {
          this._popper.scheduleUpdate();
        }
      }; // private


      _proto._addEventListeners = function _addEventListeners() {
        var _this = this;

        $(this._element).on(Event.CLICK, function (event) {
          event.preventDefault();
          event.stopPropagation();

          _this.toggle();
        });
      };

      _proto._getConfig = function _getConfig(config) {
        config = $.extend({}, this.constructor.Default, $(this._element).data(), config);
        Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
        return config;
      };

      _proto._getMenuElement = function _getMenuElement() {
        if (!this._menu) {
          var parent = Dropdown._getParentFromElement(this._element);

          this._menu = $(parent).find(Selector.MENU)[0];
        }

        return this._menu;
      };

      _proto._getPlacement = function _getPlacement() {
        var $parentDropdown = $(this._element).parent();
        var placement = AttachmentMap.BOTTOM; // Handle dropup

        if ($parentDropdown.hasClass(ClassName.DROPUP)) {
          placement = AttachmentMap.TOP;

          if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
            placement = AttachmentMap.TOPEND;
          }
        } else if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
          placement = AttachmentMap.BOTTOMEND;
        }

        return placement;
      };

      _proto._detectNavbar = function _detectNavbar() {
        return $(this._element).closest('.navbar').length > 0;
      };

      _proto._getPopperConfig = function _getPopperConfig() {
        var _this2 = this;

        var offsetConf = {};

        if (typeof this._config.offset === 'function') {
          offsetConf.fn = function (data) {
            data.offsets = $.extend({}, data.offsets, _this2._config.offset(data.offsets) || {});
            return data;
          };
        } else {
          offsetConf.offset = this._config.offset;
        }

        var popperConfig = {
          placement: this._getPlacement(),
          modifiers: {
            offset: offsetConf,
            flip: {
              enabled: this._config.flip
            } // Disable Popper.js for Dropdown in Navbar

          } };

        if (this._inNavbar) {
          popperConfig.modifiers.applyStyle = {
            enabled: !this._inNavbar
          };
        }

        return popperConfig;
      }; // static


      Dropdown._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _config = typeof config === 'object' ? config : null;

          if (!data) {
            data = new Dropdown(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new Error("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      Dropdown._clearMenus = function _clearMenus(event) {
        if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
          return;
        }

        var toggles = $.makeArray($(Selector.DATA_TOGGLE));

        for (var i = 0; i < toggles.length; i++) {
          var parent = Dropdown._getParentFromElement(toggles[i]);

          var context = $(toggles[i]).data(DATA_KEY);
          var relatedTarget = {
            relatedTarget: toggles[i]
          };

          if (!context) {
            continue;
          }

          var dropdownMenu = context._menu;

          if (!$(parent).hasClass(ClassName.SHOW)) {
            continue;
          }

          if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
            continue;
          }

          var hideEvent = $.Event(Event.HIDE, relatedTarget);
          $(parent).trigger(hideEvent);

          if (hideEvent.isDefaultPrevented()) {
            continue;
          } // if this is a touch-enabled device we remove the extra
          // empty mouseover listeners we added for iOS support


          if ('ontouchstart' in document.documentElement) {
            $('body').children().off('mouseover', null, $.noop);
          }

          toggles[i].setAttribute('aria-expanded', 'false');
          $(dropdownMenu).removeClass(ClassName.SHOW);
          $(parent).removeClass(ClassName.SHOW).trigger($.Event(Event.HIDDEN, relatedTarget));
        }
      };

      Dropdown._getParentFromElement = function _getParentFromElement(element) {
        var parent;
        var selector = Util.getSelectorFromElement(element);

        if (selector) {
          parent = $(selector)[0];
        }

        return parent || element.parentNode;
      };

      Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
        if (!REGEXP_KEYDOWN.test(event.which) || /button/i.test(event.target.tagName) && event.which === SPACE_KEYCODE || /input|textarea/i.test(event.target.tagName)) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();

        if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
          return;
        }

        var parent = Dropdown._getParentFromElement(this);

        var isActive = $(parent).hasClass(ClassName.SHOW);

        if (!isActive && (event.which !== ESCAPE_KEYCODE || event.which !== SPACE_KEYCODE) || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
          if (event.which === ESCAPE_KEYCODE) {
            var toggle = $(parent).find(Selector.DATA_TOGGLE)[0];
            $(toggle).trigger('focus');
          }

          $(this).trigger('click');
          return;
        }

        var items = $(parent).find(Selector.VISIBLE_ITEMS).get();

        if (!items.length) {
          return;
        }

        var index = items.indexOf(event.target);

        if (event.which === ARROW_UP_KEYCODE && index > 0) {
          // up
          index--;
        }

        if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
          // down
          index++;
        }

        if (index < 0) {
          index = 0;
        }

        items[index].focus();
      };

      createClass(Dropdown, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return DefaultType;
        }
      }]);
      return Dropdown;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + " " + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      event.preventDefault();
      event.stopPropagation();

      Dropdown._jQueryInterface.call($(this), 'toggle');
    }).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
      e.stopPropagation();
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Dropdown._jQueryInterface;
    $.fn[NAME].Constructor = Dropdown;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Dropdown._jQueryInterface;
    };

    return Dropdown;
  }($, Popper);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-beta.2): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Modal = function () {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'modal';
    var VERSION = '4.0.0-beta.2';
    var DATA_KEY = 'bs.modal';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 300;
    var BACKDROP_TRANSITION_DURATION = 150;
    var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

    var Default = {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: true
    };
    var DefaultType = {
      backdrop: '(boolean|string)',
      keyboard: 'boolean',
      focus: 'boolean',
      show: 'boolean'
    };
    var Event = {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      FOCUSIN: "focusin" + EVENT_KEY,
      RESIZE: "resize" + EVENT_KEY,
      CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
      KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
      MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,
      MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
      BACKDROP: 'modal-backdrop',
      OPEN: 'modal-open',
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      DIALOG: '.modal-dialog',
      DATA_TOGGLE: '[data-toggle="modal"]',
      DATA_DISMISS: '[data-dismiss="modal"]',
      FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
      STICKY_CONTENT: '.sticky-top',
      NAVBAR_TOGGLER: '.navbar-toggler'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Modal =
    /*#__PURE__*/
    function () {
      function Modal(element, config) {
        this._config = this._getConfig(config);
        this._element = element;
        this._dialog = $(element).find(Selector.DIALOG)[0];
        this._backdrop = null;
        this._isShown = false;
        this._isBodyOverflowing = false;
        this._ignoreBackdropClick = false;
        this._originalBodyPadding = 0;
        this._scrollbarWidth = 0;
      } // getters


      var _proto = Modal.prototype;

      // public
      _proto.toggle = function toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
      };

      _proto.show = function show(relatedTarget) {
        var _this = this;

        if (this._isTransitioning || this._isShown) {
          return;
        }

        if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
          this._isTransitioning = true;
        }

        var showEvent = $.Event(Event.SHOW, {
          relatedTarget: relatedTarget
        });
        $(this._element).trigger(showEvent);

        if (this._isShown || showEvent.isDefaultPrevented()) {
          return;
        }

        this._isShown = true;

        this._checkScrollbar();

        this._setScrollbar();

        this._adjustDialog();

        $(document.body).addClass(ClassName.OPEN);

        this._setEscapeEvent();

        this._setResizeEvent();

        $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
          return _this.hide(event);
        });
        $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
          $(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
            if ($(event.target).is(_this._element)) {
              _this._ignoreBackdropClick = true;
            }
          });
        });

        this._showBackdrop(function () {
          return _this._showElement(relatedTarget);
        });
      };

      _proto.hide = function hide(event) {
        var _this2 = this;

        if (event) {
          event.preventDefault();
        }

        if (this._isTransitioning || !this._isShown) {
          return;
        }

        var hideEvent = $.Event(Event.HIDE);
        $(this._element).trigger(hideEvent);

        if (!this._isShown || hideEvent.isDefaultPrevented()) {
          return;
        }

        this._isShown = false;
        var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);

        if (transition) {
          this._isTransitioning = true;
        }

        this._setEscapeEvent();

        this._setResizeEvent();

        $(document).off(Event.FOCUSIN);
        $(this._element).removeClass(ClassName.SHOW);
        $(this._element).off(Event.CLICK_DISMISS);
        $(this._dialog).off(Event.MOUSEDOWN_DISMISS);

        if (transition) {
          $(this._element).one(Util.TRANSITION_END, function (event) {
            return _this2._hideModal(event);
          }).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          this._hideModal();
        }
      };

      _proto.dispose = function dispose() {
        $.removeData(this._element, DATA_KEY);
        $(window, document, this._element, this._backdrop).off(EVENT_KEY);
        this._config = null;
        this._element = null;
        this._dialog = null;
        this._backdrop = null;
        this._isShown = null;
        this._isBodyOverflowing = null;
        this._ignoreBackdropClick = null;
        this._scrollbarWidth = null;
      };

      _proto.handleUpdate = function handleUpdate() {
        this._adjustDialog();
      }; // private


      _proto._getConfig = function _getConfig(config) {
        config = $.extend({}, Default, config);
        Util.typeCheckConfig(NAME, config, DefaultType);
        return config;
      };

      _proto._showElement = function _showElement(relatedTarget) {
        var _this3 = this;

        var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);

        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
          // don't move modals dom position
          document.body.appendChild(this._element);
        }

        this._element.style.display = 'block';

        this._element.removeAttribute('aria-hidden');

        this._element.scrollTop = 0;

        if (transition) {
          Util.reflow(this._element);
        }

        $(this._element).addClass(ClassName.SHOW);

        if (this._config.focus) {
          this._enforceFocus();
        }

        var shownEvent = $.Event(Event.SHOWN, {
          relatedTarget: relatedTarget
        });

        var transitionComplete = function transitionComplete() {
          if (_this3._config.focus) {
            _this3._element.focus();
          }

          _this3._isTransitioning = false;
          $(_this3._element).trigger(shownEvent);
        };

        if (transition) {
          $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          transitionComplete();
        }
      };

      _proto._enforceFocus = function _enforceFocus() {
        var _this4 = this;

        $(document).off(Event.FOCUSIN) // guard against infinite focus loop
        .on(Event.FOCUSIN, function (event) {
          if (document !== event.target && _this4._element !== event.target && !$(_this4._element).has(event.target).length) {
            _this4._element.focus();
          }
        });
      };

      _proto._setEscapeEvent = function _setEscapeEvent() {
        var _this5 = this;

        if (this._isShown && this._config.keyboard) {
          $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
            if (event.which === ESCAPE_KEYCODE) {
              event.preventDefault();

              _this5.hide();
            }
          });
        } else if (!this._isShown) {
          $(this._element).off(Event.KEYDOWN_DISMISS);
        }
      };

      _proto._setResizeEvent = function _setResizeEvent() {
        var _this6 = this;

        if (this._isShown) {
          $(window).on(Event.RESIZE, function (event) {
            return _this6.handleUpdate(event);
          });
        } else {
          $(window).off(Event.RESIZE);
        }
      };

      _proto._hideModal = function _hideModal() {
        var _this7 = this;

        this._element.style.display = 'none';

        this._element.setAttribute('aria-hidden', true);

        this._isTransitioning = false;

        this._showBackdrop(function () {
          $(document.body).removeClass(ClassName.OPEN);

          _this7._resetAdjustments();

          _this7._resetScrollbar();

          $(_this7._element).trigger(Event.HIDDEN);
        });
      };

      _proto._removeBackdrop = function _removeBackdrop() {
        if (this._backdrop) {
          $(this._backdrop).remove();
          this._backdrop = null;
        }
      };

      _proto._showBackdrop = function _showBackdrop(callback) {
        var _this8 = this;

        var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

        if (this._isShown && this._config.backdrop) {
          var doAnimate = Util.supportsTransitionEnd() && animate;
          this._backdrop = document.createElement('div');
          this._backdrop.className = ClassName.BACKDROP;

          if (animate) {
            $(this._backdrop).addClass(animate);
          }

          $(this._backdrop).appendTo(document.body);
          $(this._element).on(Event.CLICK_DISMISS, function (event) {
            if (_this8._ignoreBackdropClick) {
              _this8._ignoreBackdropClick = false;
              return;
            }

            if (event.target !== event.currentTarget) {
              return;
            }

            if (_this8._config.backdrop === 'static') {
              _this8._element.focus();
            } else {
              _this8.hide();
            }
          });

          if (doAnimate) {
            Util.reflow(this._backdrop);
          }

          $(this._backdrop).addClass(ClassName.SHOW);

          if (!callback) {
            return;
          }

          if (!doAnimate) {
            callback();
            return;
          }

          $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
        } else if (!this._isShown && this._backdrop) {
          $(this._backdrop).removeClass(ClassName.SHOW);

          var callbackRemove = function callbackRemove() {
            _this8._removeBackdrop();

            if (callback) {
              callback();
            }
          };

          if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
            $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
          } else {
            callbackRemove();
          }
        } else if (callback) {
          callback();
        }
      }; // ----------------------------------------------------------------------
      // the following methods are used to handle overflowing modals
      // todo (fat): these should probably be refactored out of modal.js
      // ----------------------------------------------------------------------


      _proto._adjustDialog = function _adjustDialog() {
        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

        if (!this._isBodyOverflowing && isModalOverflowing) {
          this._element.style.paddingLeft = this._scrollbarWidth + "px";
        }

        if (this._isBodyOverflowing && !isModalOverflowing) {
          this._element.style.paddingRight = this._scrollbarWidth + "px";
        }
      };

      _proto._resetAdjustments = function _resetAdjustments() {
        this._element.style.paddingLeft = '';
        this._element.style.paddingRight = '';
      };

      _proto._checkScrollbar = function _checkScrollbar() {
        var rect = document.body.getBoundingClientRect();
        this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
        this._scrollbarWidth = this._getScrollbarWidth();
      };

      _proto._setScrollbar = function _setScrollbar() {
        var _this9 = this;

        if (this._isBodyOverflowing) {
          // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
          //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
          // Adjust fixed content padding
          $(Selector.FIXED_CONTENT).each(function (index, element) {
            var actualPadding = $(element)[0].style.paddingRight;
            var calculatedPadding = $(element).css('padding-right');
            $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
          }); // Adjust sticky content margin

          $(Selector.STICKY_CONTENT).each(function (index, element) {
            var actualMargin = $(element)[0].style.marginRight;
            var calculatedMargin = $(element).css('margin-right');
            $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
          }); // Adjust navbar-toggler margin

          $(Selector.NAVBAR_TOGGLER).each(function (index, element) {
            var actualMargin = $(element)[0].style.marginRight;
            var calculatedMargin = $(element).css('margin-right');
            $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) + _this9._scrollbarWidth + "px");
          }); // Adjust body padding

          var actualPadding = document.body.style.paddingRight;
          var calculatedPadding = $('body').css('padding-right');
          $('body').data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
        }
      };

      _proto._resetScrollbar = function _resetScrollbar() {
        // Restore fixed content padding
        $(Selector.FIXED_CONTENT).each(function (index, element) {
          var padding = $(element).data('padding-right');

          if (typeof padding !== 'undefined') {
            $(element).css('padding-right', padding).removeData('padding-right');
          }
        }); // Restore sticky content and navbar-toggler margin

        $(Selector.STICKY_CONTENT + ", " + Selector.NAVBAR_TOGGLER).each(function (index, element) {
          var margin = $(element).data('margin-right');

          if (typeof margin !== 'undefined') {
            $(element).css('margin-right', margin).removeData('margin-right');
          }
        }); // Restore body padding

        var padding = $('body').data('padding-right');

        if (typeof padding !== 'undefined') {
          $('body').css('padding-right', padding).removeData('padding-right');
        }
      };

      _proto._getScrollbarWidth = function _getScrollbarWidth() {
        // thx d.walsh
        var scrollDiv = document.createElement('div');
        scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
      }; // static


      Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _config = $.extend({}, Modal.Default, $(this).data(), typeof config === 'object' && config);

          if (!data) {
            data = new Modal(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new Error("No method named \"" + config + "\"");
            }

            data[config](relatedTarget);
          } else if (_config.show) {
            data.show(relatedTarget);
          }
        });
      };

      createClass(Modal, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }]);
      return Modal;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      var _this10 = this;

      var target;
      var selector = Util.getSelectorFromElement(this);

      if (selector) {
        target = $(selector)[0];
      }

      var config = $(target).data(DATA_KEY) ? 'toggle' : $.extend({}, $(target).data(), $(this).data());

      if (this.tagName === 'A' || this.tagName === 'AREA') {
        event.preventDefault();
      }

      var $target = $(target).one(Event.SHOW, function (showEvent) {
        if (showEvent.isDefaultPrevented()) {
          // only register focus restorer if modal will actually get shown
          return;
        }

        $target.one(Event.HIDDEN, function () {
          if ($(_this10).is(':visible')) {
            _this10.focus();
          }
        });
      });

      Modal._jQueryInterface.call($(target), config, this);
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Modal._jQueryInterface;
    $.fn[NAME].Constructor = Modal;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Modal._jQueryInterface;
    };

    return Modal;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-beta.2): tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Tooltip = function () {
    /**
     * Check for Popper dependency
     * Popper - https://popper.js.org
     */
    if (typeof Popper === 'undefined') {
      throw new Error('Bootstrap tooltips require Popper.js (https://popper.js.org)');
    }
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME = 'tooltip';
    var VERSION = '4.0.0-beta.2';
    var DATA_KEY = 'bs.tooltip';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 150;
    var CLASS_PREFIX = 'bs-tooltip';
    var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
    var DefaultType = {
      animation: 'boolean',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
      delay: '(number|object)',
      html: 'boolean',
      selector: '(string|boolean)',
      placement: '(string|function)',
      offset: '(number|string)',
      container: '(string|element|boolean)',
      fallbackPlacement: '(string|array)'
    };
    var AttachmentMap = {
      AUTO: 'auto',
      TOP: 'top',
      RIGHT: 'right',
      BOTTOM: 'bottom',
      LEFT: 'left'
    };
    var Default = {
      animation: true,
      template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: false,
      selector: false,
      placement: 'top',
      offset: 0,
      container: false,
      fallbackPlacement: 'flip'
    };
    var HoverState = {
      SHOW: 'show',
      OUT: 'out'
    };
    var Event = {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      INSERTED: "inserted" + EVENT_KEY,
      CLICK: "click" + EVENT_KEY,
      FOCUSIN: "focusin" + EVENT_KEY,
      FOCUSOUT: "focusout" + EVENT_KEY,
      MOUSEENTER: "mouseenter" + EVENT_KEY,
      MOUSELEAVE: "mouseleave" + EVENT_KEY
    };
    var ClassName = {
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      TOOLTIP: '.tooltip',
      TOOLTIP_INNER: '.tooltip-inner',
      ARROW: '.arrow'
    };
    var Trigger = {
      HOVER: 'hover',
      FOCUS: 'focus',
      CLICK: 'click',
      MANUAL: 'manual'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Tooltip =
    /*#__PURE__*/
    function () {
      function Tooltip(element, config) {
        // private
        this._isEnabled = true;
        this._timeout = 0;
        this._hoverState = '';
        this._activeTrigger = {};
        this._popper = null; // protected

        this.element = element;
        this.config = this._getConfig(config);
        this.tip = null;

        this._setListeners();
      } // getters


      var _proto = Tooltip.prototype;

      // public
      _proto.enable = function enable() {
        this._isEnabled = true;
      };

      _proto.disable = function disable() {
        this._isEnabled = false;
      };

      _proto.toggleEnabled = function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      };

      _proto.toggle = function toggle(event) {
        if (!this._isEnabled) {
          return;
        }

        if (event) {
          var dataKey = this.constructor.DATA_KEY;
          var context = $(event.currentTarget).data(dataKey);

          if (!context) {
            context = new this.constructor(event.currentTarget, this._getDelegateConfig());
            $(event.currentTarget).data(dataKey, context);
          }

          context._activeTrigger.click = !context._activeTrigger.click;

          if (context._isWithActiveTrigger()) {
            context._enter(null, context);
          } else {
            context._leave(null, context);
          }
        } else {
          if ($(this.getTipElement()).hasClass(ClassName.SHOW)) {
            this._leave(null, this);

            return;
          }

          this._enter(null, this);
        }
      };

      _proto.dispose = function dispose() {
        clearTimeout(this._timeout);
        $.removeData(this.element, this.constructor.DATA_KEY);
        $(this.element).off(this.constructor.EVENT_KEY);
        $(this.element).closest('.modal').off('hide.bs.modal');

        if (this.tip) {
          $(this.tip).remove();
        }

        this._isEnabled = null;
        this._timeout = null;
        this._hoverState = null;
        this._activeTrigger = null;

        if (this._popper !== null) {
          this._popper.destroy();
        }

        this._popper = null;
        this.element = null;
        this.config = null;
        this.tip = null;
      };

      _proto.show = function show() {
        var _this = this;

        if ($(this.element).css('display') === 'none') {
          throw new Error('Please use show on visible elements');
        }

        var showEvent = $.Event(this.constructor.Event.SHOW);

        if (this.isWithContent() && this._isEnabled) {
          $(this.element).trigger(showEvent);
          var isInTheDom = $.contains(this.element.ownerDocument.documentElement, this.element);

          if (showEvent.isDefaultPrevented() || !isInTheDom) {
            return;
          }

          var tip = this.getTipElement();
          var tipId = Util.getUID(this.constructor.NAME);
          tip.setAttribute('id', tipId);
          this.element.setAttribute('aria-describedby', tipId);
          this.setContent();

          if (this.config.animation) {
            $(tip).addClass(ClassName.FADE);
          }

          var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

          var attachment = this._getAttachment(placement);

          this.addAttachmentClass(attachment);
          var container = this.config.container === false ? document.body : $(this.config.container);
          $(tip).data(this.constructor.DATA_KEY, this);

          if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
            $(tip).appendTo(container);
          }

          $(this.element).trigger(this.constructor.Event.INSERTED);
          this._popper = new Popper(this.element, tip, {
            placement: attachment,
            modifiers: {
              offset: {
                offset: this.config.offset
              },
              flip: {
                behavior: this.config.fallbackPlacement
              },
              arrow: {
                element: Selector.ARROW
              }
            },
            onCreate: function onCreate(data) {
              if (data.originalPlacement !== data.placement) {
                _this._handlePopperPlacementChange(data);
              }
            },
            onUpdate: function onUpdate(data) {
              _this._handlePopperPlacementChange(data);
            }
          });
          $(tip).addClass(ClassName.SHOW); // if this is a touch-enabled device we add extra
          // empty mouseover listeners to the body's immediate children;
          // only needed because of broken event delegation on iOS
          // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

          if ('ontouchstart' in document.documentElement) {
            $('body').children().on('mouseover', null, $.noop);
          }

          var complete = function complete() {
            if (_this.config.animation) {
              _this._fixTransition();
            }

            var prevHoverState = _this._hoverState;
            _this._hoverState = null;
            $(_this.element).trigger(_this.constructor.Event.SHOWN);

            if (prevHoverState === HoverState.OUT) {
              _this._leave(null, _this);
            }
          };

          if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
            $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
          } else {
            complete();
          }
        }
      };

      _proto.hide = function hide(callback) {
        var _this2 = this;

        var tip = this.getTipElement();
        var hideEvent = $.Event(this.constructor.Event.HIDE);

        var complete = function complete() {
          if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
            tip.parentNode.removeChild(tip);
          }

          _this2._cleanTipClass();

          _this2.element.removeAttribute('aria-describedby');

          $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

          if (_this2._popper !== null) {
            _this2._popper.destroy();
          }

          if (callback) {
            callback();
          }
        };

        $(this.element).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          return;
        }

        $(tip).removeClass(ClassName.SHOW); // if this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support

        if ('ontouchstart' in document.documentElement) {
          $('body').children().off('mouseover', null, $.noop);
        }

        this._activeTrigger[Trigger.CLICK] = false;
        this._activeTrigger[Trigger.FOCUS] = false;
        this._activeTrigger[Trigger.HOVER] = false;

        if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
          $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          complete();
        }

        this._hoverState = '';
      };

      _proto.update = function update() {
        if (this._popper !== null) {
          this._popper.scheduleUpdate();
        }
      }; // protected


      _proto.isWithContent = function isWithContent() {
        return Boolean(this.getTitle());
      };

      _proto.addAttachmentClass = function addAttachmentClass(attachment) {
        $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
      };

      _proto.getTipElement = function getTipElement() {
        this.tip = this.tip || $(this.config.template)[0];
        return this.tip;
      };

      _proto.setContent = function setContent() {
        var $tip = $(this.getTipElement());
        this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());
        $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);
      };

      _proto.setElementContent = function setElementContent($element, content) {
        var html = this.config.html;

        if (typeof content === 'object' && (content.nodeType || content.jquery)) {
          // content is a DOM node or a jQuery
          if (html) {
            if (!$(content).parent().is($element)) {
              $element.empty().append(content);
            }
          } else {
            $element.text($(content).text());
          }
        } else {
          $element[html ? 'html' : 'text'](content);
        }
      };

      _proto.getTitle = function getTitle() {
        var title = this.element.getAttribute('data-original-title');

        if (!title) {
          title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
        }

        return title;
      }; // private


      _proto._getAttachment = function _getAttachment(placement) {
        return AttachmentMap[placement.toUpperCase()];
      };

      _proto._setListeners = function _setListeners() {
        var _this3 = this;

        var triggers = this.config.trigger.split(' ');
        triggers.forEach(function (trigger) {
          if (trigger === 'click') {
            $(_this3.element).on(_this3.constructor.Event.CLICK, _this3.config.selector, function (event) {
              return _this3.toggle(event);
            });
          } else if (trigger !== Trigger.MANUAL) {
            var eventIn = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSEENTER : _this3.constructor.Event.FOCUSIN;
            var eventOut = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSELEAVE : _this3.constructor.Event.FOCUSOUT;
            $(_this3.element).on(eventIn, _this3.config.selector, function (event) {
              return _this3._enter(event);
            }).on(eventOut, _this3.config.selector, function (event) {
              return _this3._leave(event);
            });
          }

          $(_this3.element).closest('.modal').on('hide.bs.modal', function () {
            return _this3.hide();
          });
        });

        if (this.config.selector) {
          this.config = $.extend({}, this.config, {
            trigger: 'manual',
            selector: ''
          });
        } else {
          this._fixTitle();
        }
      };

      _proto._fixTitle = function _fixTitle() {
        var titleType = typeof this.element.getAttribute('data-original-title');

        if (this.element.getAttribute('title') || titleType !== 'string') {
          this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
          this.element.setAttribute('title', '');
        }
      };

      _proto._enter = function _enter(event, context) {
        var dataKey = this.constructor.DATA_KEY;
        context = context || $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        if (event) {
          context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
        }

        if ($(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
          context._hoverState = HoverState.SHOW;
          return;
        }

        clearTimeout(context._timeout);
        context._hoverState = HoverState.SHOW;

        if (!context.config.delay || !context.config.delay.show) {
          context.show();
          return;
        }

        context._timeout = setTimeout(function () {
          if (context._hoverState === HoverState.SHOW) {
            context.show();
          }
        }, context.config.delay.show);
      };

      _proto._leave = function _leave(event, context) {
        var dataKey = this.constructor.DATA_KEY;
        context = context || $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        if (event) {
          context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
        }

        if (context._isWithActiveTrigger()) {
          return;
        }

        clearTimeout(context._timeout);
        context._hoverState = HoverState.OUT;

        if (!context.config.delay || !context.config.delay.hide) {
          context.hide();
          return;
        }

        context._timeout = setTimeout(function () {
          if (context._hoverState === HoverState.OUT) {
            context.hide();
          }
        }, context.config.delay.hide);
      };

      _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
        for (var trigger in this._activeTrigger) {
          if (this._activeTrigger[trigger]) {
            return true;
          }
        }

        return false;
      };

      _proto._getConfig = function _getConfig(config) {
        config = $.extend({}, this.constructor.Default, $(this.element).data(), config);

        if (typeof config.delay === 'number') {
          config.delay = {
            show: config.delay,
            hide: config.delay
          };
        }

        if (typeof config.title === 'number') {
          config.title = config.title.toString();
        }

        if (typeof config.content === 'number') {
          config.content = config.content.toString();
        }

        Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
        return config;
      };

      _proto._getDelegateConfig = function _getDelegateConfig() {
        var config = {};

        if (this.config) {
          for (var key in this.config) {
            if (this.constructor.Default[key] !== this.config[key]) {
              config[key] = this.config[key];
            }
          }
        }

        return config;
      };

      _proto._cleanTipClass = function _cleanTipClass() {
        var $tip = $(this.getTipElement());
        var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

        if (tabClass !== null && tabClass.length > 0) {
          $tip.removeClass(tabClass.join(''));
        }
      };

      _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(data) {
        this._cleanTipClass();

        this.addAttachmentClass(this._getAttachment(data.placement));
      };

      _proto._fixTransition = function _fixTransition() {
        var tip = this.getTipElement();
        var initConfigAnimation = this.config.animation;

        if (tip.getAttribute('x-placement') !== null) {
          return;
        }

        $(tip).removeClass(ClassName.FADE);
        this.config.animation = false;
        this.hide();
        this.show();
        this.config.animation = initConfigAnimation;
      }; // static


      Tooltip._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _config = typeof config === 'object' && config;

          if (!data && /dispose|hide/.test(config)) {
            return;
          }

          if (!data) {
            data = new Tooltip(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new Error("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      createClass(Tooltip, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }, {
        key: "NAME",
        get: function get() {
          return NAME;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          return DATA_KEY;
        }
      }, {
        key: "Event",
        get: function get() {
          return Event;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          return EVENT_KEY;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return DefaultType;
        }
      }]);
      return Tooltip;
    }();
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Tooltip._jQueryInterface;
    $.fn[NAME].Constructor = Tooltip;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Tooltip._jQueryInterface;
    };

    return Tooltip;
  }($, Popper);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-beta.2): popover.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Popover = function () {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'popover';
    var VERSION = '4.0.0-beta.2';
    var DATA_KEY = 'bs.popover';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var CLASS_PREFIX = 'bs-popover';
    var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
    var Default = $.extend({}, Tooltip.Default, {
      placement: 'right',
      trigger: 'click',
      content: '',
      template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
    });
    var DefaultType = $.extend({}, Tooltip.DefaultType, {
      content: '(string|element|function)'
    });
    var ClassName = {
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      TITLE: '.popover-header',
      CONTENT: '.popover-body'
    };
    var Event = {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      INSERTED: "inserted" + EVENT_KEY,
      CLICK: "click" + EVENT_KEY,
      FOCUSIN: "focusin" + EVENT_KEY,
      FOCUSOUT: "focusout" + EVENT_KEY,
      MOUSEENTER: "mouseenter" + EVENT_KEY,
      MOUSELEAVE: "mouseleave" + EVENT_KEY
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Popover =
    /*#__PURE__*/
    function (_Tooltip) {
      inheritsLoose(Popover, _Tooltip);

      function Popover() {
        return _Tooltip.apply(this, arguments) || this;
      }

      var _proto = Popover.prototype;

      // overrides
      _proto.isWithContent = function isWithContent() {
        return this.getTitle() || this._getContent();
      };

      _proto.addAttachmentClass = function addAttachmentClass(attachment) {
        $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
      };

      _proto.getTipElement = function getTipElement() {
        this.tip = this.tip || $(this.config.template)[0];
        return this.tip;
      };

      _proto.setContent = function setContent() {
        var $tip = $(this.getTipElement()); // we use append for html objects to maintain js events

        this.setElementContent($tip.find(Selector.TITLE), this.getTitle());
        this.setElementContent($tip.find(Selector.CONTENT), this._getContent());
        $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);
      }; // private


      _proto._getContent = function _getContent() {
        return this.element.getAttribute('data-content') || (typeof this.config.content === 'function' ? this.config.content.call(this.element) : this.config.content);
      };

      _proto._cleanTipClass = function _cleanTipClass() {
        var $tip = $(this.getTipElement());
        var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

        if (tabClass !== null && tabClass.length > 0) {
          $tip.removeClass(tabClass.join(''));
        }
      }; // static


      Popover._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _config = typeof config === 'object' ? config : null;

          if (!data && /destroy|hide/.test(config)) {
            return;
          }

          if (!data) {
            data = new Popover(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new Error("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      createClass(Popover, null, [{
        key: "VERSION",
        // getters
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }, {
        key: "NAME",
        get: function get() {
          return NAME;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          return DATA_KEY;
        }
      }, {
        key: "Event",
        get: function get() {
          return Event;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          return EVENT_KEY;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return DefaultType;
        }
      }]);
      return Popover;
    }(Tooltip);
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Popover._jQueryInterface;
    $.fn[NAME].Constructor = Popover;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Popover._jQueryInterface;
    };

    return Popover;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-beta.2): scrollspy.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var ScrollSpy = function () {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'scrollspy';
    var VERSION = '4.0.0-beta.2';
    var DATA_KEY = 'bs.scrollspy';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Default = {
      offset: 10,
      method: 'auto',
      target: ''
    };
    var DefaultType = {
      offset: 'number',
      method: 'string',
      target: '(string|element)'
    };
    var Event = {
      ACTIVATE: "activate" + EVENT_KEY,
      SCROLL: "scroll" + EVENT_KEY,
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      DROPDOWN_ITEM: 'dropdown-item',
      DROPDOWN_MENU: 'dropdown-menu',
      ACTIVE: 'active'
    };
    var Selector = {
      DATA_SPY: '[data-spy="scroll"]',
      ACTIVE: '.active',
      NAV_LIST_GROUP: '.nav, .list-group',
      NAV_LINKS: '.nav-link',
      NAV_ITEMS: '.nav-item',
      LIST_ITEMS: '.list-group-item',
      DROPDOWN: '.dropdown',
      DROPDOWN_ITEMS: '.dropdown-item',
      DROPDOWN_TOGGLE: '.dropdown-toggle'
    };
    var OffsetMethod = {
      OFFSET: 'offset',
      POSITION: 'position'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var ScrollSpy =
    /*#__PURE__*/
    function () {
      function ScrollSpy(element, config) {
        var _this = this;

        this._element = element;
        this._scrollElement = element.tagName === 'BODY' ? window : element;
        this._config = this._getConfig(config);
        this._selector = this._config.target + " " + Selector.NAV_LINKS + "," + (this._config.target + " " + Selector.LIST_ITEMS + ",") + (this._config.target + " " + Selector.DROPDOWN_ITEMS);
        this._offsets = [];
        this._targets = [];
        this._activeTarget = null;
        this._scrollHeight = 0;
        $(this._scrollElement).on(Event.SCROLL, function (event) {
          return _this._process(event);
        });
        this.refresh();

        this._process();
      } // getters


      var _proto = ScrollSpy.prototype;

      // public
      _proto.refresh = function refresh() {
        var _this2 = this;

        var autoMethod = this._scrollElement !== this._scrollElement.window ? OffsetMethod.POSITION : OffsetMethod.OFFSET;
        var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
        var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
        this._offsets = [];
        this._targets = [];
        this._scrollHeight = this._getScrollHeight();
        var targets = $.makeArray($(this._selector));
        targets.map(function (element) {
          var target;
          var targetSelector = Util.getSelectorFromElement(element);

          if (targetSelector) {
            target = $(targetSelector)[0];
          }

          if (target) {
            var targetBCR = target.getBoundingClientRect();

            if (targetBCR.width || targetBCR.height) {
              // todo (fat): remove sketch reliance on jQuery position/offset
              return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
            }
          }

          return null;
        }).filter(function (item) {
          return item;
        }).sort(function (a, b) {
          return a[0] - b[0];
        }).forEach(function (item) {
          _this2._offsets.push(item[0]);

          _this2._targets.push(item[1]);
        });
      };

      _proto.dispose = function dispose() {
        $.removeData(this._element, DATA_KEY);
        $(this._scrollElement).off(EVENT_KEY);
        this._element = null;
        this._scrollElement = null;
        this._config = null;
        this._selector = null;
        this._offsets = null;
        this._targets = null;
        this._activeTarget = null;
        this._scrollHeight = null;
      }; // private


      _proto._getConfig = function _getConfig(config) {
        config = $.extend({}, Default, config);

        if (typeof config.target !== 'string') {
          var id = $(config.target).attr('id');

          if (!id) {
            id = Util.getUID(NAME);
            $(config.target).attr('id', id);
          }

          config.target = "#" + id;
        }

        Util.typeCheckConfig(NAME, config, DefaultType);
        return config;
      };

      _proto._getScrollTop = function _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      };

      _proto._getScrollHeight = function _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      };

      _proto._getOffsetHeight = function _getOffsetHeight() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      };

      _proto._process = function _process() {
        var scrollTop = this._getScrollTop() + this._config.offset;

        var scrollHeight = this._getScrollHeight();

        var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

        if (this._scrollHeight !== scrollHeight) {
          this.refresh();
        }

        if (scrollTop >= maxScroll) {
          var target = this._targets[this._targets.length - 1];

          if (this._activeTarget !== target) {
            this._activate(target);
          }

          return;
        }

        if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
          this._activeTarget = null;

          this._clear();

          return;
        }

        for (var i = this._offsets.length; i--;) {
          var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

          if (isActiveTarget) {
            this._activate(this._targets[i]);
          }
        }
      };

      _proto._activate = function _activate(target) {
        this._activeTarget = target;

        this._clear();

        var queries = this._selector.split(','); // eslint-disable-next-line arrow-body-style


        queries = queries.map(function (selector) {
          return selector + "[data-target=\"" + target + "\"]," + (selector + "[href=\"" + target + "\"]");
        });
        var $link = $(queries.join(','));

        if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
          $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
          $link.addClass(ClassName.ACTIVE);
        } else {
          // Set triggered link as active
          $link.addClass(ClassName.ACTIVE); // Set triggered links parents as active
          // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

          $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_LINKS + ", " + Selector.LIST_ITEMS).addClass(ClassName.ACTIVE); // Handle special case when .nav-link is inside .nav-item

          $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_ITEMS).children(Selector.NAV_LINKS).addClass(ClassName.ACTIVE);
        }

        $(this._scrollElement).trigger(Event.ACTIVATE, {
          relatedTarget: target
        });
      };

      _proto._clear = function _clear() {
        $(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
      }; // static


      ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _config = typeof config === 'object' && config;

          if (!data) {
            data = new ScrollSpy(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new Error("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      createClass(ScrollSpy, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }]);
      return ScrollSpy;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(window).on(Event.LOAD_DATA_API, function () {
      var scrollSpys = $.makeArray($(Selector.DATA_SPY));

      for (var i = scrollSpys.length; i--;) {
        var $spy = $(scrollSpys[i]);

        ScrollSpy._jQueryInterface.call($spy, $spy.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = ScrollSpy._jQueryInterface;
    $.fn[NAME].Constructor = ScrollSpy;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return ScrollSpy._jQueryInterface;
    };

    return ScrollSpy;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-beta.2): tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Tab = function () {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'tab';
    var VERSION = '4.0.0-beta.2';
    var DATA_KEY = 'bs.tab';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 150;
    var Event = {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      DROPDOWN_MENU: 'dropdown-menu',
      ACTIVE: 'active',
      DISABLED: 'disabled',
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      DROPDOWN: '.dropdown',
      NAV_LIST_GROUP: '.nav, .list-group',
      ACTIVE: '.active',
      ACTIVE_UL: '> li > .active',
      DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      DROPDOWN_TOGGLE: '.dropdown-toggle',
      DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Tab =
    /*#__PURE__*/
    function () {
      function Tab(element) {
        this._element = element;
      } // getters


      var _proto = Tab.prototype;

      // public
      _proto.show = function show() {
        var _this = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName.ACTIVE) || $(this._element).hasClass(ClassName.DISABLED)) {
          return;
        }

        var target;
        var previous;
        var listElement = $(this._element).closest(Selector.NAV_LIST_GROUP)[0];
        var selector = Util.getSelectorFromElement(this._element);

        if (listElement) {
          var itemSelector = listElement.nodeName === 'UL' ? Selector.ACTIVE_UL : Selector.ACTIVE;
          previous = $.makeArray($(listElement).find(itemSelector));
          previous = previous[previous.length - 1];
        }

        var hideEvent = $.Event(Event.HIDE, {
          relatedTarget: this._element
        });
        var showEvent = $.Event(Event.SHOW, {
          relatedTarget: previous
        });

        if (previous) {
          $(previous).trigger(hideEvent);
        }

        $(this._element).trigger(showEvent);

        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
          return;
        }

        if (selector) {
          target = $(selector)[0];
        }

        this._activate(this._element, listElement);

        var complete = function complete() {
          var hiddenEvent = $.Event(Event.HIDDEN, {
            relatedTarget: _this._element
          });
          var shownEvent = $.Event(Event.SHOWN, {
            relatedTarget: previous
          });
          $(previous).trigger(hiddenEvent);
          $(_this._element).trigger(shownEvent);
        };

        if (target) {
          this._activate(target, target.parentNode, complete);
        } else {
          complete();
        }
      };

      _proto.dispose = function dispose() {
        $.removeData(this._element, DATA_KEY);
        this._element = null;
      }; // private


      _proto._activate = function _activate(element, container, callback) {
        var _this2 = this;

        var activeElements;

        if (container.nodeName === 'UL') {
          activeElements = $(container).find(Selector.ACTIVE_UL);
        } else {
          activeElements = $(container).children(Selector.ACTIVE);
        }

        var active = activeElements[0];
        var isTransitioning = callback && Util.supportsTransitionEnd() && active && $(active).hasClass(ClassName.FADE);

        var complete = function complete() {
          return _this2._transitionComplete(element, active, isTransitioning, callback);
        };

        if (active && isTransitioning) {
          $(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          complete();
        }

        if (active) {
          $(active).removeClass(ClassName.SHOW);
        }
      };

      _proto._transitionComplete = function _transitionComplete(element, active, isTransitioning, callback) {
        if (active) {
          $(active).removeClass(ClassName.ACTIVE);
          var dropdownChild = $(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

          if (dropdownChild) {
            $(dropdownChild).removeClass(ClassName.ACTIVE);
          }

          if (active.getAttribute('role') === 'tab') {
            active.setAttribute('aria-selected', false);
          }
        }

        $(element).addClass(ClassName.ACTIVE);

        if (element.getAttribute('role') === 'tab') {
          element.setAttribute('aria-selected', true);
        }

        if (isTransitioning) {
          Util.reflow(element);
          $(element).addClass(ClassName.SHOW);
        } else {
          $(element).removeClass(ClassName.FADE);
        }

        if (element.parentNode && $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
          var dropdownElement = $(element).closest(Selector.DROPDOWN)[0];

          if (dropdownElement) {
            $(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
          }

          element.setAttribute('aria-expanded', true);
        }

        if (callback) {
          callback();
        }
      }; // static


      Tab._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data(DATA_KEY);

          if (!data) {
            data = new Tab(this);
            $this.data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new Error("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      createClass(Tab, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);
      return Tab;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      event.preventDefault();

      Tab._jQueryInterface.call($(this), 'show');
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Tab._jQueryInterface;
    $.fn[NAME].Constructor = Tab;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Tab._jQueryInterface;
    };

    return Tab;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-alpha.6): index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  (function () {
    if (typeof $ === 'undefined') {
      throw new Error('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
    }

    var version = $.fn.jquery.split(' ')[0].split('.');
    var minMajor = 1;
    var ltMajor = 2;
    var minMinor = 9;
    var minPatch = 1;
    var maxMajor = 4;

    if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
      throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
    }
  })($);

  exports.Util = Util;
  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Tooltip = Tooltip;

  return exports;
}({}, $);
//# sourceMappingURL=bootstrap.bundle.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = function () {
    return this;
}();

try {
    // This works if eval is allowed (see CSP)
    g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
    // This works if the window reference is available
    if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**!
 * easy-pie-chart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license 
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.7
 **/
!function (a, b) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (a) {
    return b(a);
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
                __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery);
}(this, function (a) {
  var b = function (a, b) {
    var c,
        d = document.createElement("canvas");a.appendChild(d), "object" == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(d);var e = d.getContext("2d");d.width = d.height = b.size;var f = 1;window.devicePixelRatio > 1 && (f = window.devicePixelRatio, d.style.width = d.style.height = [b.size, "px"].join(""), d.width = d.height = b.size * f, e.scale(f, f)), e.translate(b.size / 2, b.size / 2), e.rotate((-0.5 + b.rotate / 180) * Math.PI);var g = (b.size - b.lineWidth) / 2;b.scaleColor && b.scaleLength && (g -= b.scaleLength + 2), Date.now = Date.now || function () {
      return +new Date();
    };var h = function (a, b, c) {
      c = Math.min(Math.max(-1, c || 0), 1);var d = 0 >= c ? !0 : !1;e.beginPath(), e.arc(0, 0, g, 0, 2 * Math.PI * c, d), e.strokeStyle = a, e.lineWidth = b, e.stroke();
    },
        i = function () {
      var a, c;e.lineWidth = 1, e.fillStyle = b.scaleColor, e.save();for (var d = 24; d > 0; --d) d % 6 === 0 ? (c = b.scaleLength, a = 0) : (c = .6 * b.scaleLength, a = b.scaleLength - c), e.fillRect(-b.size / 2 + a, 0, c, 1), e.rotate(Math.PI / 12);e.restore();
    },
        j = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a) {
        window.setTimeout(a, 1e3 / 60);
      };
    }(),
        k = function () {
      b.scaleColor && i(), b.trackColor && h(b.trackColor, b.trackWidth || b.lineWidth, 1);
    };this.getCanvas = function () {
      return d;
    }, this.getCtx = function () {
      return e;
    }, this.clear = function () {
      e.clearRect(b.size / -2, b.size / -2, b.size, b.size);
    }, this.draw = function (a) {
      b.scaleColor || b.trackColor ? e.getImageData && e.putImageData ? c ? e.putImageData(c, 0, 0) : (k(), c = e.getImageData(0, 0, b.size * f, b.size * f)) : (this.clear(), k()) : this.clear(), e.lineCap = b.lineCap;var d;d = "function" == typeof b.barColor ? b.barColor(a) : b.barColor, h(d, b.lineWidth, a / 100);
    }.bind(this), this.animate = function (a, c) {
      var d = Date.now();b.onStart(a, c);var e = function () {
        var f = Math.min(Date.now() - d, b.animate.duration),
            g = b.easing(this, f, a, c - a, b.animate.duration);this.draw(g), b.onStep(a, c, g), f >= b.animate.duration ? b.onStop(a, c) : j(e);
      }.bind(this);j(e);
    }.bind(this);
  },
      c = function (a, c) {
    var d = { barColor: "#ef1e25", trackColor: "#f9f9f9", scaleColor: "#dfe0e0", scaleLength: 5, lineCap: "round", lineWidth: 3, trackWidth: void 0, size: 110, rotate: 0, animate: { duration: 1e3, enabled: !0 }, easing: function (a, b, c, d, e) {
        return b /= e / 2, 1 > b ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c;
      }, onStart: function (a, b) {}, onStep: function (a, b, c) {}, onStop: function (a, b) {} };if ("undefined" != typeof b) d.renderer = b;else {
      if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");d.renderer = SVGRenderer;
    }var e = {},
        f = 0,
        g = function () {
      this.el = a, this.options = e;for (var b in d) d.hasOwnProperty(b) && (e[b] = c && "undefined" != typeof c[b] ? c[b] : d[b], "function" == typeof e[b] && (e[b] = e[b].bind(this)));"string" == typeof e.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[e.easing]) ? e.easing = jQuery.easing[e.easing] : e.easing = d.easing, "number" == typeof e.animate && (e.animate = { duration: e.animate, enabled: !0 }), "boolean" != typeof e.animate || e.animate || (e.animate = { duration: 1e3, enabled: e.animate }), this.renderer = new e.renderer(a, e), this.renderer.draw(f), a.dataset && a.dataset.percent ? this.update(parseFloat(a.dataset.percent)) : a.getAttribute && a.getAttribute("data-percent") && this.update(parseFloat(a.getAttribute("data-percent")));
    }.bind(this);this.update = function (a) {
      return a = parseFloat(a), e.animate.enabled ? this.renderer.animate(f, a) : this.renderer.draw(a), f = a, this;
    }.bind(this), this.disableAnimation = function () {
      return e.animate.enabled = !1, this;
    }, this.enableAnimation = function () {
      return e.animate.enabled = !0, this;
    }, g();
  };a.fn.easyPieChart = function (b) {
    return this.each(function () {
      var d;a.data(this, "easyPieChart") || (d = a.extend({}, b, a(this).data()), a.data(this, "easyPieChart", new c(this, d)));
    });
  };
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

/*!
 * jQuery Form Validation
 * Copyright (C) 2015 RunningCoder.org
 * Licensed under the MIT license
 *
 * @author Tom Bertrand
 * @version 1.5.3 (2015-06-14)
 * @link http://www.runningcoder.org/jqueryvalidation/
 */
;
(function (window, document, $, undefined) {

    window.Validation = {
        form: [],
        labels: {},
        hasScrolled: false
    };

    if (typeof Object.preventExtensions !== "function") {
        Object.preventExtensions = function (obj) {
            return obj;
        };
    }
    var _rules = {
        NOTEMPTY: /\S/,
        INTEGER: /^\d+$/,
        NUMERIC: /^\d+(?:[,\s]\d{3})*(?:\.\d+)?$/,
        MIXED: /^[\w\s-]+$/,
        NAME: /^['a-zãàáäâẽèéëêìíïîõòóöôùúüûñç\s-]+$/i,
        NOSPACE: /^(?!\s)\S*$/,
        TRIM: /^[^\s].*[^\s]$/,
        DATE: /^\d{4}-\d{2}-\d{2}(\s\d{2}:\d{2}(:\d{2})?)?$/,
        EMAIL: /^([^@]+?)@(([a-z0-9]-*)*[a-z0-9]+\.)+([a-z0-9]+)$/i,
        URL: /^(https?:\/\/)?((([a-z0-9]-*)*[a-z0-9]+\.?)*([a-z0-9]+))(\/[\w?=\.-]*)*$/,
        PHONE: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
        OPTIONAL: /\S/,
        COMPARISON: /^\s*([LV])\s*([<>]=?|==|!=)\s*([^<>=!]+?)\s*$/
    };

    var _messages = {
        'default': '$ contain error(s).',
        'NOTEMPTY': '$ must not be empty.',
        'INTEGER': '$ must be an integer.',
        'NUMERIC': '$ must be numeric.',
        'MIXED': '$ must be letters or numbers (no special characters).',
        'NAME': '$ must not contain special characters.',
        'NOSPACE': '$ must not contain spaces.',
        'TRIM': '$ must not start or end with space character.',
        'DATE': '$ is not a valid with format YYYY-MM-DD.',
        'EMAIL': '$ is not valid.',
        'URL': '$ is not valid.',
        'PHONE': '$ is not a valid phone number.',
        '<': '$ must be less than % characters.',
        '<=': '$ must be less or equal to % characters.',
        '>': '$ must be greater than % characters.',
        '>=': '$ must be greater or equal to % characters.',
        '==': '$ must be equal to %',
        '!=': '$ must be different than %'
    };

    var _data = {
        validation: 'data-validation',
        validationMessage: 'data-validation-message',
        regex: 'data-validation-regex',
        regexReverse: 'data-validation-regex-reverse',
        regexMessage: 'data-validation-regex-message',
        group: 'data-validation-group',
        label: 'data-validation-label',
        errorList: 'data-error-list'
    };

    var _options = {
        submit: {
            settings: {
                form: null,
                display: "inline",
                insertion: "append",
                allErrors: false,
                trigger: "click",
                button: "[type='submit']",
                errorClass: "error",
                errorListClass: "error-list",
                errorListContainer: null,
                inputContainer: null,
                clear: "focusin",
                scrollToError: false
            },
            callback: {
                onInit: null,
                onValidate: null,
                onError: null,
                onBeforeSubmit: null,
                onSubmit: null,
                onAfterSubmit: null
            }
        },
        dynamic: {
            settings: {
                trigger: null,
                delay: 300
            },
            callback: {
                onSuccess: null,
                onError: null,
                onComplete: null
            }
        },
        rules: {},
        messages: {},
        labels: {},
        debug: false
    };

    var _supported = {
        submit: {
            settings: {
                display: ["inline", "block"],
                insertion: ["append", "prepend"], //"before", "insertBefore", "after", "insertAfter"
                allErrors: [true, false],
                clear: ["focusin", "keypress", false],
                trigger: ["click", "dblclick", "focusout", "hover", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "toggle"]
            }
        },
        dynamic: {
            settings: {
                trigger: ["focusout", "keydown", "keypress", "keyup"]
            }
        },
        debug: [true, false]
    };

    var Validation = function (node, options) {

        var errors = [],
            messages = {},
            formData = {},
            delegateSuffix = ".vd",
            // validation.delegate
        resetSuffix = ".vr"; // validation.resetError

        window.Validation.hasScrolled = false;

        function extendRules() {
            options.rules = $.extend(true, {}, _rules, options.rules);
        }

        function extendMessages() {
            options.messages = $.extend(true, {}, _messages, options.messages);
        }

        function extendOptions() {

            if (!(options instanceof Object)) {
                options = {};
            }

            var tpmOptions = Object.preventExtensions($.extend(true, {}, _options));

            for (var method in options) {

                if (!options.hasOwnProperty(method) || method === "debug") {
                    continue;
                }

                if (~["labels", "messages", "rules"].indexOf(method) && options[method] instanceof Object) {
                    tpmOptions[method] = options[method];
                    continue;
                }

                if (!_options[method] || !(options[method] instanceof Object)) {
                    options.debug && window.Debug.log({
                        'node': node,
                        'function': 'extendOptions()',
                        'arguments': '{' + method + ': ' + JSON.stringify(options[method]) + '}',
                        'message': 'WARNING - ' + method + ' - invalid option'
                    });

                    continue;
                }

                for (var type in options[method]) {
                    if (!options[method].hasOwnProperty(type)) {
                        continue;
                    }

                    if (!_options[method][type] || !(options[method][type] instanceof Object)) {
                        options.debug && window.Debug.log({
                            'node': node,
                            'function': 'extendOptions()',
                            'arguments': '{' + type + ': ' + JSON.stringify(options[method][type]) + '}',
                            'message': 'WARNING - ' + type + ' - invalid option'
                        });

                        continue;
                    }

                    for (var option in options[method][type]) {
                        if (!options[method][type].hasOwnProperty(option)) {
                            continue;
                        }

                        if (_supported[method] && _supported[method][type] && _supported[method][type][option] && $.inArray(options[method][type][option], _supported[method][type][option]) === -1) {
                            options.debug && window.Debug.log({
                                'node': node,
                                'function': 'extendOptions()',
                                'arguments': '{' + option + ': ' + JSON.stringify(options[method][type][option]) + '}',
                                'message': 'WARNING - ' + option.toString() + ': ' + JSON.stringify(options[method][type][option]) + ' - unsupported option'
                            });

                            delete options[method][type][option];
                        }
                    }
                    if (tpmOptions[method] && tpmOptions[method][type]) {
                        tpmOptions[method][type] = $.extend(Object.preventExtensions(tpmOptions[method][type]), options[method][type]);
                    }
                }
            }
            if (options.debug && $.inArray(options.debug, _supported.debug !== -1)) {
                tpmOptions.debug = options.debug;
            }
            if (tpmOptions.dynamic.settings.trigger) {
                if (tpmOptions.dynamic.settings.trigger === "keypress" && tpmOptions.submit.settings.clear === "keypress") {
                    tpmOptions.dynamic.settings.trigger = "keydown";
                }
            }

            options = tpmOptions;
        }

        function delegateDynamicValidation() {

            if (!options.dynamic.settings.trigger) {
                return false;
            }
            options.debug && window.Debug.log({
                'node': node,
                'function': 'delegateDynamicValidation()',
                'message': 'OK - Dynamic Validation activated on ' + node.length + ' form(s)'
            });

            if (!node.find('[' + _data.validation + '],[' + _data.regex + ']')[0]) {
                options.debug && window.Debug.log({
                    'node': node,
                    'function': 'delegateDynamicValidation()',
                    'arguments': 'node.find([' + _data.validation + '],[' + _data.regex + '])',
                    'message': 'ERROR - [' + _data.validation + '] not found'
                });

                return false;
            }

            var event = options.dynamic.settings.trigger + delegateSuffix;
            if (options.dynamic.settings.trigger !== "focusout") {
                event += " change" + delegateSuffix + " paste" + delegateSuffix;
            }

            $.each(node.find('[' + _data.validation + '],[' + _data.regex + ']'), function (index, input) {

                $(input).unbind(event).on(event, function (e) {

                    if ($(this).is(':disabled')) {
                        return false;
                    }

                    var input = this,
                        keyCode = e.keyCode || null;

                    _typeWatch(function () {

                        if (!validateInput(input)) {

                            displayOneError(input.name);
                            _executeCallback(options.dynamic.callback.onError, [node, input, keyCode, errors[input.name]]);
                        } else {

                            _executeCallback(options.dynamic.callback.onSuccess, [node, input, keyCode]);
                        }

                        _executeCallback(options.dynamic.callback.onComplete, [node, input, keyCode]);
                    }, options.dynamic.settings.delay);
                });
            });
        }

        function delegateValidation() {

            _executeCallback(options.submit.callback.onInit, [node]);

            var event = options.submit.settings.trigger + '.vd';
            options.debug && window.Debug.log({
                'node': node,
                'function': 'delegateValidation()',
                'message': 'OK - Validation activated on ' + node.length + ' form(s)'
            });

            if (!node.find(options.submit.settings.button)[0]) {
                options.debug && window.Debug.log({
                    'node': node,
                    'function': 'delegateValidation()',
                    'arguments': '{button: ' + options.submit.settings.button + '}',
                    'message': 'ERROR - node.find("' + options.submit.settings.button + '") not found'
                });

                return false;
            }

            node.on("submit", false);
            node.find(options.submit.settings.button).off('.vd').on(event, function (e) {

                e.preventDefault();

                resetErrors();

                _executeCallback(options.submit.callback.onValidate, [node]);

                if (!validateForm()) {

                    displayErrors();
                    _executeCallback(options.submit.callback.onError, [node, errors, formData]);
                } else {

                    _executeCallback(options.submit.callback.onBeforeSubmit, [node]);

                    options.submit.callback.onSubmit ? _executeCallback(options.submit.callback.onSubmit, [node, formData]) : submitForm();

                    _executeCallback(options.submit.callback.onAfterSubmit, [node]);
                }
                options.debug && window.Debug.print();

                return false;
            });
        }

        function validateForm() {

            var isValid = true;

            formData = {};

            $.each(node.find('input:not([type="submit"]), select, textarea'), function (index, input) {

                input = $(input);

                var value = _getInputValue(input[0]),
                    inputName = input.attr('name');

                if (inputName) {
                    formData[inputName] = value;
                }

                if (!input.attr('disabled') && (!!input.attr(_data.validation) || !!input.attr(_data.regex))) {
                    if (!validateInput(input[0], value)) {
                        isValid = false;
                    }
                }
            });

            prepareFormData();

            return isValid;
        }

        function prepareFormData() {

            var data = {},
                matches,
                index;

            for (var i in formData) {
                if (!formData.hasOwnProperty(i)) continue;

                index = 0;
                matches = i.split(/\[(.+?)]/g);

                var tmpObject = {},
                    tmpArray = [];

                for (var k = matches.length - 1; k >= 0; k--) {
                    if (matches[k] === "") {
                        matches.splice(k, 1);
                        continue;
                    }

                    if (tmpArray.length < 1) {
                        tmpObject[matches[k]] = Number(formData[i]) || formData[i];
                    } else {
                        tmpObject = {};
                        tmpObject[matches[k]] = tmpArray[tmpArray.length - 1];
                    }
                    tmpArray.push(tmpObject);
                }

                data = $.extend(true, data, tmpObject);
            }

            formData = data;
        }

        function validateInput(input, value) {

            var inputName = $(input).attr('name'),
                value = value || _getInputValue(input);

            if (!inputName) {
                options.debug && window.Debug.log({
                    'node': node,
                    'function': 'validateInput()',
                    'arguments': '$(input).attr("name")',
                    'message': 'ERROR - Missing input [name]'
                });

                return false;
            }

            var matches = inputName.replace(/]$/, '').split(/]\[|[[\]]/g),
                inputShortName = window.Validation.labels[inputName] || options.labels[inputName] || $(input).attr(_data.label) || matches[matches.length - 1],
                validationArray = $(input).attr(_data.validation),
                validationMessage = $(input).attr(_data.validationMessage),
                validationRegex = $(input).attr(_data.regex),
                validationRegexReverse = !($(input).attr(_data.regexReverse) === undefined),
                validationRegexMessage = $(input).attr(_data.regexMessage),
                validateOnce = false;

            if (validationArray) {
                validationArray = _api._splitValidation(validationArray);
            }
            if (validationArray instanceof Array && validationArray.length > 0) {
                if ($.trim(value) === '' && ~validationArray.indexOf('OPTIONAL')) {
                    return true;
                }

                $.each(validationArray, function (i, rule) {

                    if (validateOnce === true) {
                        return true;
                    }

                    try {

                        validateRule(value, rule);
                    } catch (error) {

                        if (validationMessage || !options.submit.settings.allErrors) {
                            validateOnce = true;
                        }

                        error[0] = validationMessage || error[0];

                        registerError(inputName, error[0].replace('$', inputShortName).replace('%', error[1]));
                    }
                });
            }
            if (validationRegex) {

                var rule = _buildRegexFromString(validationRegex);
                if (!(rule instanceof RegExp)) {
                    return true;
                }

                try {

                    validateRule(value, rule, validationRegexReverse);
                } catch (error) {

                    error[0] = validationRegexMessage || error[0];

                    registerError(inputName, error[0].replace('$', inputShortName));
                }
            }

            return !errors[inputName] || errors[inputName] instanceof Array && errors[inputName].length === 0;
        }

        function validateRule(value, rule, reversed) {
            if (rule instanceof RegExp) {
                var isValid = rule.test(value);

                if (reversed) {
                    isValid = !isValid;
                }

                if (!isValid) {
                    throw [options.messages['default'], ''];
                }
                return;
            }

            if (options.rules[rule]) {
                if (!options.rules[rule].test(value)) {
                    throw [options.messages[rule], ''];
                }
                return;
            }
            var comparison = rule.match(options.rules.COMPARISON);

            if (!comparison || comparison.length !== 4) {
                options.debug && window.Debug.log({
                    'node': node,
                    'function': 'validateRule()',
                    'arguments': 'value: ' + value + ' rule: ' + rule,
                    'message': 'WARNING - Invalid comparison'
                });

                return;
            }

            var type = comparison[1],
                operator = comparison[2],
                compared = comparison[3],
                comparedValue;

            switch (type) {
                case "L":
                    if (isNaN(compared)) {
                        options.debug && window.Debug.log({
                            'node': node,
                            'function': 'validateRule()',
                            'arguments': 'compare: ' + compared + ' rule: ' + rule,
                            'message': 'WARNING - Invalid rule, "L" compare must be numeric'
                        });

                        return false;
                    } else {

                        if (!value || eval(value.length + operator + parseFloat(compared)) === false) {
                            throw [options.messages[operator], compared];
                        }
                    }

                    break;
                case "V":
                default:
                    if (isNaN(compared)) {

                        comparedValue = node.find('[name="' + compared + '"]').val();
                        if (!comparedValue) {
                            options.debug && window.Debug.log({
                                'node': node,
                                'function': 'validateRule()',
                                'arguments': 'compare: ' + compared + ' rule: ' + rule,
                                'message': 'WARNING - Unable to find compared field [name="' + compared + '"]'
                            });

                            return false;
                        }

                        if (!value || !eval('"' + encodeURIComponent(value) + '"' + operator + '"' + encodeURIComponent(comparedValue) + '"')) {
                            throw [options.messages[operator].replace(' characters', ''), compared];
                        }
                    } else {
                        if (!value || isNaN(value) || !eval(value + operator + parseFloat(compared))) {
                            throw [options.messages[operator].replace(' characters', ''), compared];
                        }
                    }
                    break;

            }
        }

        function registerError(inputName, error) {

            if (!errors[inputName]) {
                errors[inputName] = [];
            }

            error = error.capitalize();

            var hasError = false;
            for (var i = 0; i < errors[inputName].length; i++) {
                if (errors[inputName][i] === error) {
                    hasError = true;
                    break;
                }
            }

            if (!hasError) {
                errors[inputName].push(error);
            }
        }

        function displayOneError(inputName) {

            var input,
                inputId,
                errorContainer,
                label,
                html = '<div class="' + options.submit.settings.errorListClass + '" ' + _data.errorList + '><ul></ul></div>',
                group,
                groupInput;

            if (!errors.hasOwnProperty(inputName)) {
                return false;
            }

            input = node.find('[name="' + inputName + '"]');

            label = null;

            if (!input[0]) {
                options.debug && window.Debug.log({
                    'node': node,
                    'function': 'displayOneError()',
                    'arguments': '[name="' + inputName + '"]',
                    'message': 'ERROR - Unable to find input by name "' + inputName + '"'
                });

                return false;
            }

            group = input.attr(_data.group);

            if (group) {

                groupInput = node.find('[name="' + inputName + '"]');
                label = node.find('[id="' + group + '"]');

                if (label[0]) {
                    label.addClass(options.submit.settings.errorClass);
                    errorContainer = label;
                }
            } else {

                input.addClass(options.submit.settings.errorClass);

                if (options.submit.settings.inputContainer) {
                    input.parentsUntil(node, options.submit.settings.inputContainer).addClass(options.submit.settings.errorClass);
                }

                inputId = input.attr('id');

                if (inputId) {
                    label = node.find('label[for="' + inputId + '"]')[0];
                }

                if (!label) {
                    label = input.parentsUntil(node, 'label')[0];
                }

                if (label) {
                    label = $(label);
                    label.addClass(options.submit.settings.errorClass);
                }
            }

            if (options.submit.settings.display === 'inline') {
                if (options.submit.settings.errorListContainer) {
                    errorContainer = input.parentsUntil(node, options.submit.settings.errorListContainer);
                } else {
                    errorContainer = errorContainer || input.parent();
                }
            } else if (options.submit.settings.display === 'block') {
                errorContainer = node;
            }
            if (options.submit.settings.display === 'inline' && errorContainer.find('[' + _data.errorList + ']')[0]) {
                return false;
            }

            if (options.submit.settings.display === "inline" || options.submit.settings.display === "block" && !errorContainer.find('[' + _data.errorList + ']')[0]) {
                if (options.submit.settings.insertion === 'append') {
                    errorContainer.append(html);
                } else if (options.submit.settings.insertion === 'prepend') {
                    errorContainer.prepend(html);
                }
            }

            for (var i = 0; i < errors[inputName].length; i++) {
                errorContainer.find('[' + _data.errorList + '] ul').append('<li>' + errors[inputName][i] + '</li>');
            }

            if (options.submit.settings.clear || options.dynamic.settings.trigger) {

                if (group && groupInput) {
                    input = groupInput;
                }

                var event = "coucou" + resetSuffix;
                if (options.submit.settings.clear) {
                    event += " " + options.submit.settings.clear + resetSuffix;
                    if (~['radio', 'checkbox'].indexOf(input[0].type)) {
                        event += " change" + resetSuffix;
                    }
                }
                if (options.dynamic.settings.trigger) {
                    event += " " + options.dynamic.settings.trigger + resetSuffix;
                    if (options.dynamic.settings.trigger !== "focusout" && !~['radio', 'checkbox'].indexOf(input[0].type)) {
                        event += " change" + resetSuffix + " paste" + resetSuffix;
                    }
                }

                input.unbind(event).on(event, function (a, b, c, d, e) {

                    return function () {
                        if (e) {
                            if ($(c).hasClass(options.submit.settings.errorClass)) {
                                resetOneError(a, b, c, d, e);
                            }
                        } else if ($(b).hasClass(options.submit.settings.errorClass)) {
                            resetOneError(a, b, c, d);
                        }
                    };
                }(inputName, input, label, errorContainer, group));
            }

            if (options.submit.settings.scrollToError && !window.Validation.hasScrolled) {

                window.Validation.hasScrolled = true;

                var offset = parseFloat(options.submit.settings.scrollToError.offset) || 0,
                    duration = parseFloat(options.submit.settings.scrollToError.duration) || 500,
                    handle = options.submit.settings.display === 'block' ? errorContainer : input;

                $('html, body').animate({
                    scrollTop: handle.offset().top + offset
                }, duration);
            }
        }

        function displayErrors() {

            for (var inputName in errors) {
                if (!errors.hasOwnProperty(inputName)) continue;
                displayOneError(inputName);
            }
        }

        function resetOneError(inputName, input, label, container, group) {

            delete errors[inputName];

            if (container) {

                if (options.submit.settings.inputContainer) {
                    (group ? label : input).parentsUntil(node, options.submit.settings.inputContainer).removeClass(options.submit.settings.errorClass);
                }

                label && label.removeClass(options.submit.settings.errorClass);

                input.removeClass(options.submit.settings.errorClass);

                if (options.submit.settings.display === 'inline') {
                    container.find('[' + _data.errorList + ']').remove();
                }
            } else {

                if (!input) {
                    input = node.find('[name="' + inputName + '"]');

                    if (!input[0]) {
                        options.debug && window.Debug.log({
                            'node': node,
                            'function': 'resetOneError()',
                            'arguments': '[name="' + inputName + '"]',
                            'message': 'ERROR - Unable to find input by name "' + inputName + '"'
                        });

                        return false;
                    }
                }

                input.trigger('coucou' + resetSuffix);
            }
        }

        function resetErrors() {

            errors = [];
            window.Validation.hasScrolled = false;

            node.find('[' + _data.errorList + ']').remove();
            node.find('.' + options.submit.settings.errorClass).removeClass(options.submit.settings.errorClass);
        }

        function submitForm() {

            node[0].submit();
        }

        function destroy() {

            resetErrors();
            node.find('[' + _data.validation + '],[' + _data.regex + ']').off(delegateSuffix + ' ' + resetSuffix);

            node.find(options.submit.settings.button).off(delegateSuffix).on('click' + delegateSuffix, function () {
                $(this).closest('form')[0].submit();
            });

            return true;
        }

        var _getInputValue = function (input) {

            var value;
            switch ($(input).attr('type')) {
                case 'checkbox':
                    value = $(input).is(':checked') ? 1 : '';
                    break;
                case 'radio':
                    value = node.find('input[name="' + $(input).attr('name') + '"]:checked').val() || '';
                    break;
                default:
                    value = $(input).val();
                    break;
            }

            return value;
        };

        var _typeWatch = function () {
            var timer = 0;
            return function (callback, ms) {
                clearTimeout(timer);
                timer = setTimeout(callback, ms);
            };
        }();

        var _executeCallback = function (callback, extraParams) {

            if (!callback) {
                return false;
            }

            var _callback;

            if (typeof callback === "function") {

                _callback = callback;
            } else if (typeof callback === "string" || callback instanceof Array) {

                _callback = window;

                if (typeof callback === "string") {
                    callback = [callback, []];
                }

                var _exploded = callback[0].split('.'),
                    _params = callback[1],
                    _isValid = true,
                    _splitIndex = 0;

                while (_splitIndex < _exploded.length) {

                    if (typeof _callback !== 'undefined') {
                        _callback = _callback[_exploded[_splitIndex++]];
                    } else {
                        _isValid = false;
                        break;
                    }
                }

                if (!_isValid || typeof _callback !== "function") {
                    options.debug && window.Debug.log({
                        'node': node,
                        'function': '_executeCallback()',
                        'arguments': JSON.stringify(callback),
                        'message': 'WARNING - Invalid callback function"'
                    });

                    return false;
                }
            }

            _callback.apply(this, $.merge(_params || [], extraParams ? extraParams : []));
            return true;
        };

        this.__construct = function () {

            extendOptions();
            extendRules();
            extendMessages();

            delegateDynamicValidation();
            delegateValidation();
            options.debug && window.Debug.print();
        }();

        return {

            registerError: registerError,

            displayOneError: displayOneError,

            displayErrors: displayErrors,

            resetOneError: resetOneError,

            resetErrors: resetErrors,

            destroy: destroy

        };
    };

    $.fn.validate = $.validate = function (options) {

        return _api.validate(this, options);
    };

    $.fn.addValidation = function (validation) {

        return _api.addValidation(this, validation);
    };

    $.fn.removeValidation = function (validation) {

        return _api.removeValidation(this, validation);
    };

    $.fn.addError = function (error) {

        return _api.addError(this, error);
    };

    $.fn.removeError = function (error) {

        return _api.removeError(this, error);
    };

    $.fn.alterValidationRules = $.alterValidationRules = function (rules) {

        if (!(rules instanceof Array)) {
            rules = [rules];
        }

        for (var i = 0; i < rules.length; i++) {
            _api.alterValidationRules(rules[i]);
        }
    };

    var _api = {

        _formatValidation: function (validation) {

            validation = validation.toString().replace(/\s/g, '');

            if (validation.charAt(0) === "[" && validation.charAt(validation.length - 1) === "]") {
                validation = validation.replace(/^\[|]$/g, '');
            }

            return validation;
        },

        _splitValidation: function (validation) {

            var validationArray = this._formatValidation(validation).split(','),
                oneValidation;

            for (var i = 0; i < validationArray.length; i++) {
                oneValidation = validationArray[i];
                if (/^[a-z]+$/i.test(oneValidation)) {
                    validationArray[i] = oneValidation.toUpperCase();
                }
            }

            return validationArray;
        },

        _joinValidation: function (validation) {

            return '[' + validation.join(', ') + ']';
        },

        validate: function (node, options) {

            if (typeof node === "function") {

                if (!options.submit.settings.form) {
                    window.Debug.log({
                        'node': node,
                        'function': '$.validate()',
                        'arguments': '',
                        'message': 'Undefined property "options.submit.settings.form - Validation dropped'
                    });

                    window.Debug.print();

                    return;
                }

                node = $(options.submit.settings.form);

                if (!node[0] || node[0].nodeName.toLowerCase() !== "form") {
                    window.Debug.log({
                        'function': '$.validate()',
                        'arguments': options.submit.settings.form,
                        'message': 'Unable to find jQuery form element - Validation dropped'
                    });

                    window.Debug.print();

                    return;
                }
            } else if (typeof node[0] === 'undefined') {
                window.Debug.log({
                    'node': node,
                    'function': '$.validate()',
                    'arguments': '$("' + node.selector + '").validate()',
                    'message': 'Unable to find jQuery form element - Validation dropped'
                });

                window.Debug.print();

                return;
            }

            if (options === "destroy") {

                if (!window.Validation.form[node.selector]) {
                    window.Debug.log({
                        'node': node,
                        'function': '$.validate("destroy")',
                        'arguments': '',
                        'message': 'Unable to destroy "' + node.selector + '", perhaps it\'s already destroyed?'
                    });

                    window.Debug.print();

                    return;
                }

                window.Validation.form[node.selector].destroy();

                return;
            }

            return node.each(function () {
                window.Validation.form[node.selector] = new Validation($(this), options);
            });
        },

        addValidation: function (node, validation) {

            var self = this;

            validation = self._splitValidation(validation);

            if (!validation) {
                return false;
            }

            return node.each(function () {

                var $this = $(this),
                    validationData = $this.attr(_data.validation),
                    validationArray = validationData && validationData.length ? self._splitValidation(validationData) : [],
                    oneValidation;

                for (var i = 0; i < validation.length; i++) {

                    oneValidation = self._formatValidation(validation[i]);

                    if ($.inArray(oneValidation, validationArray) === -1) {
                        validationArray.push(oneValidation);
                    }
                }

                if (validationArray.length) {
                    $this.attr(_data.validation, self._joinValidation(validationArray));
                }
            });
        },

        removeValidation: function (node, validation) {

            var self = this;

            validation = self._splitValidation(validation);
            if (!validation) {
                return false;
            }

            return node.each(function () {

                var $this = $(this),
                    validationData = $this.attr(_data.validation),
                    validationArray = validationData && validationData.length ? self._splitValidation(validationData) : [],
                    oneValidation,
                    validationIndex;

                if (!validationArray.length) {
                    $this.removeAttr(_data.validation);
                    return true;
                }

                for (var i = 0; i < validation.length; i++) {
                    oneValidation = self._formatValidation(validation[i]);
                    validationIndex = $.inArray(oneValidation, validationArray);
                    if (validationIndex !== -1) {
                        validationArray.splice(validationIndex, 1);
                    }
                }

                if (!validationArray.length) {
                    $this.removeAttr(_data.validation);
                    return true;
                }

                $this.attr(_data.validation, self._joinValidation(validationArray));
            });
        },

        addError: function (node, error) {

            if (!window.Validation.form[node.selector]) {
                window.Debug.log({
                    'node': node,
                    'function': '$.addError()',
                    'arguments': 'window.Validation.form[' + node.selector + ']',
                    'message': 'ERROR - Invalid node selector'
                });

                window.Debug.print();

                return false;
            }

            if (typeof error !== "object" || Object.prototype.toString.call(error) !== "[object Object]") {
                window.Debug.log({
                    'node': node,
                    'function': '$.addError()',
                    'arguments': 'window.Validation.form[' + node.selector + ']',
                    'message': 'ERROR - Invalid argument, must be type object'
                });

                window.Debug.print();

                return false;
            }

            var input,
                onlyOnce = true;
            for (var inputName in error) {

                if (!error.hasOwnProperty(inputName)) {
                    continue;
                }

                if (!(error[inputName] instanceof Array)) {
                    error[inputName] = [error[inputName]];
                }

                input = $(node.selector).find('[name="' + inputName + '"]');
                if (!input[0]) {
                    window.Debug.log({
                        'node': node,
                        'function': '$.addError()',
                        'arguments': inputName,
                        'message': 'ERROR - Unable to find ' + '$(' + node.selector + ').find("[name="' + inputName + '"]")'
                    });

                    window.Debug.print();

                    continue;
                }

                if (onlyOnce) {
                    window.Validation.hasScrolled = false;
                    onlyOnce = false;
                }

                window.Validation.form[node.selector].resetOneError(inputName, input);

                for (var i = 0; i < error[inputName].length; i++) {

                    if (typeof error[inputName][i] !== "string") {
                        window.Debug.log({
                            'node': node,
                            'function': '$.addError()',
                            'arguments': error[inputName][i],
                            'message': 'ERROR - Invalid error object property - Accepted format: {"inputName": "errorString"} or {"inputName": ["errorString", "errorString"]}'
                        });

                        window.Debug.print();

                        continue;
                    }

                    window.Validation.form[node.selector].registerError(inputName, error[inputName][i]);
                }

                window.Validation.form[node.selector].displayOneError(inputName);
            }
        },

        removeError: function (node, inputName) {

            if (!window.Validation.form[node.selector]) {
                window.Debug.log({
                    'node': node,
                    'function': '$.removeError()',
                    'arguments': 'window.Validation.form[' + node.selector + ']',
                    'message': 'ERROR - Invalid node selector'
                });

                window.Debug.print();

                return false;
            }

            if (!inputName) {
                window.Validation.form[node.selector].resetErrors();
                return false;
            }

            if (typeof inputName === "object" && Object.prototype.toString.call(inputName) !== "[object Array]") {
                window.Debug.log({
                    'node': node,
                    'function': '$.removeError()',
                    'arguments': inputName,
                    'message': 'ERROR - Invalid inputName, must be type String or Array'
                });

                window.Debug.print();

                return false;
            }

            if (!(inputName instanceof Array)) {
                inputName = [inputName];
            }

            var input;
            for (var i = 0; i < inputName.length; i++) {

                input = $(node.selector).find('[name="' + inputName[i] + '"]');
                if (!input[0]) {
                    window.Debug.log({
                        'node': node,
                        'function': '$.removeError()',
                        'arguments': inputName[i],
                        'message': 'ERROR - Unable to find ' + '$(' + node.selector + ').find("[name="' + inputName[i] + '"]")'
                    });

                    window.Debug.print();

                    continue;
                }

                window.Validation.form[node.selector].resetOneError(inputName[i], input);
            }
        },

        alterValidationRules: function (ruleObj) {

            if (!ruleObj.rule || !ruleObj.regex && !ruleObj.message) {
                window.Debug.log({
                    'function': '$.alterValidationRules()',
                    'message': 'ERROR - Missing one or multiple parameter(s) {rule, regex, message}'
                });
                window.Debug.print();
                return false;
            }

            ruleObj.rule = ruleObj.rule.toUpperCase();

            if (ruleObj.regex) {

                var regex = _buildRegexFromString(ruleObj.regex);

                if (!(regex instanceof RegExp)) {
                    window.Debug.log({
                        'function': '$.alterValidationRules(rule)',
                        'arguments': regex.toString(),
                        'message': 'ERROR - Invalid rule'
                    });
                    window.Debug.print();
                    return false;
                }

                _rules[ruleObj.rule] = regex;
            }

            if (ruleObj.message) {
                _messages[ruleObj.rule] = ruleObj.message;
            }

            return true;
        }

    };

    function _buildRegexFromString(regex) {

        if (!regex || typeof regex !== "string" && !(regex instanceof RegExp)) {
            _regexDebug();
            return false;
        }

        if (typeof regex !== 'string') {
            regex = regex.toString();
        }

        var separator = regex.charAt(0),
            index = regex.length - 1,
            pattern,
            modifier,
            rule;

        while (index > 0) {
            if (/[gimsxeU]/.test(regex.charAt(index))) {
                index--;
            } else {
                break;
            }
        }

        if (regex.charAt(index) !== separator) {
            separator = null;
        }

        if (separator && index !== regex.length - 1) {
            modifier = regex.substr(index + 1, regex.length - 1);
        }

        if (separator) {
            pattern = regex.substr(1, index - 1);
        } else {
            pattern = regex;
        }

        try {
            rule = new RegExp(pattern, modifier);
        } catch (error) {
            _regexDebug();
            return false;
        }

        return rule;

        function _regexDebug() {
            window.Debug.log({
                'function': '_buildRegexFromString()',
                'arguments': '{pattern: {' + (pattern || '') + '}, modifier: {' + (modifier || '') + '}',
                'message': 'WARNING - Invalid regex given: ' + regex
            });
            window.Debug.print();
        }
    }
    window.Debug = {

        table: {},
        log: function (debugObject) {

            if (!debugObject.message || typeof debugObject.message !== "string") {
                return false;
            }

            this.table[debugObject.message] = $.extend(Object.preventExtensions({
                'node': '',
                'function': '',
                'arguments': ''
            }), debugObject);
        },
        print: function () {

            if ($.isEmptyObject(this.table)) {
                return false;
            }

            if (console.group !== undefined || console.table !== undefined) {

                console.groupCollapsed('--- jQuery Form Validation Debug ---');

                if (console.table) {
                    console.table(this.table);
                } else {
                    $.each(this.table, function (index, data) {
                        console.log(data['Name'] + ': ' + data['Execution Time'] + 'ms');
                    });
                }

                console.groupEnd();
            } else {
                console.log('Debug is not available on your current browser, try the most recent version of Chrome or Firefox.');
            }

            this.table = {};
        }

    };

    String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (elt) {
            var len = this.length >>> 0;

            var from = Number(arguments[1]) || 0;
            from = from < 0 ? Math.ceil(from) : Math.floor(from);
            if (from < 0) from += len;

            for (; from < len; from++) {
                if (from in this && this[from] === elt) return from;
            }
            return -1;
        };
    }
    if (!JSON && !JSON.stringify) {
        JSON.stringify = function (obj) {
            var t = typeof obj;
            if (t !== "object" || obj === null) {
                if (t === "string") {
                    obj = '"' + obj + '"';
                }
                return String(obj);
            } else {
                var n,
                    v,
                    json = [],
                    arr = obj && obj.constructor === Array;
                for (n in obj) {
                    if (true) {
                        v = obj[n];
                        t = typeof v;
                        if (t === "string") {
                            v = '"' + v + '"';
                        } else if (t === "object" && v !== null) {
                            v = JSON.stringify(v);
                        }
                        json.push((arr ? "" : '"' + n + '": ') + String(v));
                    }
                }
                return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
            }
        };
    }
})(window, document, window.jQuery);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Bootstrap-select v1.12.4 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2017 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */

(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module unless amdModuleId is set
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (a0) {
            return factory(a0);
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
                __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require("jquery"));
    } else {
        factory(root["jQuery"]);
    }
})(this, function (jQuery) {

    (function ($) {
        'use strict';

        //<editor-fold desc="Shims">

        if (!String.prototype.includes) {
            (function () {
                'use strict'; // needed to support `apply`/`call` with `undefined`/`null`

                var toString = {}.toString;
                var defineProperty = function () {
                    // IE 8 only supports `Object.defineProperty` on DOM elements
                    try {
                        var object = {};
                        var $defineProperty = Object.defineProperty;
                        var result = $defineProperty(object, object, object) && $defineProperty;
                    } catch (error) {}
                    return result;
                }();
                var indexOf = ''.indexOf;
                var includes = function (search) {
                    if (this == null) {
                        throw new TypeError();
                    }
                    var string = String(this);
                    if (search && toString.call(search) == '[object RegExp]') {
                        throw new TypeError();
                    }
                    var stringLength = string.length;
                    var searchString = String(search);
                    var searchLength = searchString.length;
                    var position = arguments.length > 1 ? arguments[1] : undefined;
                    // `ToInteger`
                    var pos = position ? Number(position) : 0;
                    if (pos != pos) {
                        // better `isNaN`
                        pos = 0;
                    }
                    var start = Math.min(Math.max(pos, 0), stringLength);
                    // Avoid the `indexOf` call if no match is possible
                    if (searchLength + start > stringLength) {
                        return false;
                    }
                    return indexOf.call(string, searchString, pos) != -1;
                };
                if (defineProperty) {
                    defineProperty(String.prototype, 'includes', {
                        'value': includes,
                        'configurable': true,
                        'writable': true
                    });
                } else {
                    String.prototype.includes = includes;
                }
            })();
        }

        if (!String.prototype.startsWith) {
            (function () {
                'use strict'; // needed to support `apply`/`call` with `undefined`/`null`

                var defineProperty = function () {
                    // IE 8 only supports `Object.defineProperty` on DOM elements
                    try {
                        var object = {};
                        var $defineProperty = Object.defineProperty;
                        var result = $defineProperty(object, object, object) && $defineProperty;
                    } catch (error) {}
                    return result;
                }();
                var toString = {}.toString;
                var startsWith = function (search) {
                    if (this == null) {
                        throw new TypeError();
                    }
                    var string = String(this);
                    if (search && toString.call(search) == '[object RegExp]') {
                        throw new TypeError();
                    }
                    var stringLength = string.length;
                    var searchString = String(search);
                    var searchLength = searchString.length;
                    var position = arguments.length > 1 ? arguments[1] : undefined;
                    // `ToInteger`
                    var pos = position ? Number(position) : 0;
                    if (pos != pos) {
                        // better `isNaN`
                        pos = 0;
                    }
                    var start = Math.min(Math.max(pos, 0), stringLength);
                    // Avoid the `indexOf` call if no match is possible
                    if (searchLength + start > stringLength) {
                        return false;
                    }
                    var index = -1;
                    while (++index < searchLength) {
                        if (string.charCodeAt(start + index) != searchString.charCodeAt(index)) {
                            return false;
                        }
                    }
                    return true;
                };
                if (defineProperty) {
                    defineProperty(String.prototype, 'startsWith', {
                        'value': startsWith,
                        'configurable': true,
                        'writable': true
                    });
                } else {
                    String.prototype.startsWith = startsWith;
                }
            })();
        }

        if (!Object.keys) {
            Object.keys = function (o, // object
            k, // key
            r // result array
            ) {
                // initialize object and result
                r = [];
                // iterate over object keys
                for (k in o)
                // fill result array with non-prototypical keys
                r.hasOwnProperty.call(o, k) && r.push(k);
                // return result
                return r;
            };
        }

        // set data-selected on select element if the value has been programmatically selected
        // prior to initialization of bootstrap-select
        // * consider removing or replacing an alternative method *
        var valHooks = {
            useDefault: false,
            _set: $.valHooks.select.set
        };

        $.valHooks.select.set = function (elem, value) {
            if (value && !valHooks.useDefault) $(elem).data('selected', true);

            return valHooks._set.apply(this, arguments);
        };

        var changed_arguments = null;

        var EventIsSupported = function () {
            try {
                new Event('change');
                return true;
            } catch (e) {
                return false;
            }
        }();

        $.fn.triggerNative = function (eventName) {
            var el = this[0],
                event;

            if (el.dispatchEvent) {
                // for modern browsers & IE9+
                if (EventIsSupported) {
                    // For modern browsers
                    event = new Event(eventName, {
                        bubbles: true
                    });
                } else {
                    // For IE since it doesn't support Event constructor
                    event = document.createEvent('Event');
                    event.initEvent(eventName, true, false);
                }

                el.dispatchEvent(event);
            } else if (el.fireEvent) {
                // for IE8
                event = document.createEventObject();
                event.eventType = eventName;
                el.fireEvent('on' + eventName, event);
            } else {
                // fall back to jQuery.trigger
                this.trigger(eventName);
            }
        };
        //</editor-fold>

        // Case insensitive contains search
        $.expr.pseudos.icontains = function (obj, index, meta) {
            var $obj = $(obj).find('a');
            var haystack = ($obj.data('tokens') || $obj.text()).toString().toUpperCase();
            return haystack.includes(meta[3].toUpperCase());
        };

        // Case insensitive begins search
        $.expr.pseudos.ibegins = function (obj, index, meta) {
            var $obj = $(obj).find('a');
            var haystack = ($obj.data('tokens') || $obj.text()).toString().toUpperCase();
            return haystack.startsWith(meta[3].toUpperCase());
        };

        // Case and accent insensitive contains search
        $.expr.pseudos.aicontains = function (obj, index, meta) {
            var $obj = $(obj).find('a');
            var haystack = ($obj.data('tokens') || $obj.data('normalizedText') || $obj.text()).toString().toUpperCase();
            return haystack.includes(meta[3].toUpperCase());
        };

        // Case and accent insensitive begins search
        $.expr.pseudos.aibegins = function (obj, index, meta) {
            var $obj = $(obj).find('a');
            var haystack = ($obj.data('tokens') || $obj.data('normalizedText') || $obj.text()).toString().toUpperCase();
            return haystack.startsWith(meta[3].toUpperCase());
        };

        /**
         * Remove all diatrics from the given text.
         * @access private
         * @param {String} text
         * @returns {String}
         */
        function normalizeToBase(text) {
            var rExps = [{
                re: /[\xC0-\xC6]/g,
                ch: "A"
            }, {
                re: /[\xE0-\xE6]/g,
                ch: "a"
            }, {
                re: /[\xC8-\xCB]/g,
                ch: "E"
            }, {
                re: /[\xE8-\xEB]/g,
                ch: "e"
            }, {
                re: /[\xCC-\xCF]/g,
                ch: "I"
            }, {
                re: /[\xEC-\xEF]/g,
                ch: "i"
            }, {
                re: /[\xD2-\xD6]/g,
                ch: "O"
            }, {
                re: /[\xF2-\xF6]/g,
                ch: "o"
            }, {
                re: /[\xD9-\xDC]/g,
                ch: "U"
            }, {
                re: /[\xF9-\xFC]/g,
                ch: "u"
            }, {
                re: /[\xC7-\xE7]/g,
                ch: "c"
            }, {
                re: /[\xD1]/g,
                ch: "N"
            }, {
                re: /[\xF1]/g,
                ch: "n"
            }];
            $.each(rExps, function () {
                text = text ? text.replace(this.re, this.ch) : '';
            });
            return text;
        }

        // List of HTML entities for escaping.
        var escapeMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            '`': '&#x60;'
        };

        var unescapeMap = {
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
            '&quot;': '"',
            '&#x27;': "'",
            '&#x60;': '`'
        };

        // Functions for escaping and unescaping strings to/from HTML interpolation.
        var createEscaper = function (map) {
            var escaper = function (match) {
                return map[match];
            };
            // Regexes for identifying a key that needs to be escaped.
            var source = '(?:' + Object.keys(map).join('|') + ')';
            var testRegexp = RegExp(source);
            var replaceRegexp = RegExp(source, 'g');
            return function (string) {
                string = string == null ? '' : '' + string;
                return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
            };
        };

        var htmlEscape = createEscaper(escapeMap);
        var htmlUnescape = createEscaper(unescapeMap);

        var Selectpicker = function (element, options) {
            // bootstrap-select has been initialized - revert valHooks.select.set back to its original function
            if (!valHooks.useDefault) {
                $.valHooks.select.set = valHooks._set;
                valHooks.useDefault = true;
            }

            this.$element = $(element);
            this.$newElement = null;
            this.$button = null;
            this.$menu = null;
            this.$lis = null;
            this.options = options;

            // If we have no title yet, try to pull it from the html title attribute (jQuery doesnt' pick it up as it's not a
            // data-attribute)
            if (this.options.title === null) {
                this.options.title = this.$element.attr('title');
            }

            // Format window padding
            var winPad = this.options.windowPadding;
            if (typeof winPad === 'number') {
                this.options.windowPadding = [winPad, winPad, winPad, winPad];
            }

            //Expose public methods
            this.val = Selectpicker.prototype.val;
            this.render = Selectpicker.prototype.render;
            this.refresh = Selectpicker.prototype.refresh;
            this.setStyle = Selectpicker.prototype.setStyle;
            this.selectAll = Selectpicker.prototype.selectAll;
            this.deselectAll = Selectpicker.prototype.deselectAll;
            this.destroy = Selectpicker.prototype.destroy;
            this.remove = Selectpicker.prototype.remove;
            this.show = Selectpicker.prototype.show;
            this.hide = Selectpicker.prototype.hide;

            this.init();
        };

        Selectpicker.VERSION = '1.12.4';

        // part of this is duplicated in i18n/defaults-en_US.js. Make sure to update both.
        Selectpicker.DEFAULTS = {
            noneSelectedText: 'Nothing selected',
            noneResultsText: 'No results matched {0}',
            countSelectedText: function (numSelected, numTotal) {
                return numSelected == 1 ? "{0} item selected" : "{0} items selected";
            },
            maxOptionsText: function (numAll, numGroup) {
                return [numAll == 1 ? 'Limit reached ({n} item max)' : 'Limit reached ({n} items max)', numGroup == 1 ? 'Group limit reached ({n} item max)' : 'Group limit reached ({n} items max)'];
            },
            selectAllText: 'Select All',
            deselectAllText: 'Deselect All',
            doneButton: false,
            doneButtonText: 'Close',
            multipleSeparator: ', ',
            styleBase: 'btn',
            style: 'btn-default',
            size: 'auto',
            title: null,
            selectedTextFormat: 'values',
            width: false,
            container: false,
            hideDisabled: false,
            showSubtext: false,
            showIcon: true,
            showContent: true,
            dropupAuto: true,
            header: false,
            liveSearch: false,
            liveSearchPlaceholder: null,
            liveSearchNormalize: false,
            liveSearchStyle: 'contains',
            actionsBox: false,
            iconBase: 'glyphicon',
            tickIcon: 'glyphicon-ok',
            showTick: false,
            template: {
                caret: '<span class="caret"></span>'
            },
            maxOptions: false,
            mobile: false,
            selectOnTab: false,
            dropdownAlignRight: false,
            windowPadding: 0
        };

        Selectpicker.prototype = {

            constructor: Selectpicker,

            init: function () {
                var that = this,
                    id = this.$element.attr('id');

                this.$element.addClass('bs-select-hidden');

                // store originalIndex (key) and newIndex (value) in this.liObj for fast accessibility
                // allows us to do this.$lis.eq(that.liObj[index]) instead of this.$lis.filter('[data-original-index="' + index + '"]')
                this.liObj = {};
                this.multiple = this.$element.prop('multiple');
                this.autofocus = this.$element.prop('autofocus');
                this.$newElement = this.createView();
                this.$element.after(this.$newElement).appendTo(this.$newElement);
                this.$button = this.$newElement.children('button');
                this.$menu = this.$newElement.children('.dropdown-menu');
                this.$menuInner = this.$menu.children('.inner');
                this.$searchbox = this.$menu.find('input');

                this.$element.removeClass('bs-select-hidden');

                if (this.options.dropdownAlignRight === true) this.$menu.addClass('dropdown-menu-right');

                if (typeof id !== 'undefined') {
                    this.$button.attr('data-id', id);
                    $('label[for="' + id + '"]').click(function (e) {
                        e.preventDefault();
                        that.$button.focus();
                    });
                }

                this.checkDisabled();
                this.clickListener();
                if (this.options.liveSearch) this.liveSearchListener();
                this.render();
                this.setStyle();
                this.setWidth();
                if (this.options.container) this.selectPosition();
                this.$menu.data('this', this);
                this.$newElement.data('this', this);
                if (this.options.mobile) this.mobile();

                this.$newElement.on({
                    'hide.bs.dropdown': function (e) {
                        that.$menuInner.attr('aria-expanded', false);
                        that.$element.trigger('hide.bs.select', e);
                    },
                    'hidden.bs.dropdown': function (e) {
                        that.$element.trigger('hidden.bs.select', e);
                    },
                    'show.bs.dropdown': function (e) {
                        that.$menuInner.attr('aria-expanded', true);
                        that.$element.trigger('show.bs.select', e);
                    },
                    'shown.bs.dropdown': function (e) {
                        that.$element.trigger('shown.bs.select', e);
                    }
                });

                if (that.$element[0].hasAttribute('required')) {
                    this.$element.on('invalid', function () {
                        that.$button.addClass('bs-invalid');

                        that.$element.on({
                            'focus.bs.select': function () {
                                that.$button.focus();
                                that.$element.off('focus.bs.select');
                            },
                            'shown.bs.select': function () {
                                that.$element.val(that.$element.val()) // set the value to hide the validation message in Chrome when menu is opened
                                .off('shown.bs.select');
                            },
                            'rendered.bs.select': function () {
                                // if select is no longer invalid, remove the bs-invalid class
                                if (this.validity.valid) that.$button.removeClass('bs-invalid');
                                that.$element.off('rendered.bs.select');
                            }
                        });

                        that.$button.on('blur.bs.select', function () {
                            that.$element.focus().blur();
                            that.$button.off('blur.bs.select');
                        });
                    });
                }

                setTimeout(function () {
                    that.$element.trigger('loaded.bs.select');
                });
            },

            createDropdown: function () {
                // Options
                // If we are multiple or showTick option is set, then add the show-tick class
                var showTick = this.multiple || this.options.showTick ? ' show-tick' : '',
                    inputGroup = this.$element.parent().hasClass('input-group') ? ' input-group-btn' : '',
                    autofocus = this.autofocus ? ' autofocus' : '';
                // Elements
                var header = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + '</div>' : '';
                var searchbox = this.options.liveSearch ? '<div class="bs-searchbox">' + '<input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? '' : ' placeholder="' + htmlEscape(this.options.liveSearchPlaceholder) + '"') + ' role="textbox" aria-label="Search">' + '</div>' : '';
                var actionsbox = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox">' + '<div class="btn-group btn-group-sm btn-block">' + '<button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button>' + '<button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + '</button>' + '</div>' + '</div>' : '';
                var donebutton = this.multiple && this.options.doneButton ? '<div class="bs-donebutton">' + '<div class="btn-group btn-block">' + '<button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + '</button>' + '</div>' + '</div>' : '';
                var drop = '<div class="btn-group bootstrap-select' + showTick + inputGroup + '">' + '<button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + autofocus + ' role="button">' + '<span class="filter-option pull-left"></span>&nbsp;' + '<span class="bs-caret">' + this.options.template.caret + '</span>' + '</button>' + '<div class="dropdown-menu open" role="combobox">' + header + searchbox + actionsbox + '<ul class="dropdown-menu inner" role="listbox" aria-expanded="false">' + '</ul>' + donebutton + '</div>' + '</div>';

                return $(drop);
            },

            createView: function () {
                var $drop = this.createDropdown(),
                    li = this.createLi();

                $drop.find('ul')[0].innerHTML = li;
                return $drop;
            },

            reloadLi: function () {
                // rebuild
                var li = this.createLi();
                this.$menuInner[0].innerHTML = li;
            },

            createLi: function () {
                var that = this,
                    _li = [],
                    optID = 0,
                    titleOption = document.createElement('option'),
                    liIndex = -1; // increment liIndex whenever a new <li> element is created to ensure liObj is correct

                // Helper functions
                /**
                 * @param content
                 * @param [index]
                 * @param [classes]
                 * @param [optgroup]
                 * @returns {string}
                 */
                var generateLI = function (content, index, classes, optgroup) {
                    return '<li' + (typeof classes !== 'undefined' && '' !== classes ? ' class="' + classes + '"' : '') + (typeof index !== 'undefined' && null !== index ? ' data-original-index="' + index + '"' : '') + (typeof optgroup !== 'undefined' && null !== optgroup ? 'data-optgroup="' + optgroup + '"' : '') + '>' + content + '</li>';
                };

                /**
                 * @param text
                 * @param [classes]
                 * @param [inline]
                 * @param [tokens]
                 * @returns {string}
                 */
                var generateA = function (text, classes, inline, tokens) {
                    return '<a tabindex="0"' + (typeof classes !== 'undefined' ? ' class="' + classes + '"' : '') + (inline ? ' style="' + inline + '"' : '') + (that.options.liveSearchNormalize ? ' data-normalized-text="' + normalizeToBase(htmlEscape($(text).html())) + '"' : '') + (typeof tokens !== 'undefined' || tokens !== null ? ' data-tokens="' + tokens + '"' : '') + ' role="option">' + text + '<span class="' + that.options.iconBase + ' ' + that.options.tickIcon + ' check-mark"></span>' + '</a>';
                };

                if (this.options.title && !this.multiple) {
                    // this option doesn't create a new <li> element, but does add a new option, so liIndex is decreased
                    // since liObj is recalculated on every refresh, liIndex needs to be decreased even if the titleOption is already appended
                    liIndex--;

                    if (!this.$element.find('.bs-title-option').length) {
                        // Use native JS to prepend option (faster)
                        var element = this.$element[0];
                        titleOption.className = 'bs-title-option';
                        titleOption.innerHTML = this.options.title;
                        titleOption.value = '';
                        element.insertBefore(titleOption, element.firstChild);
                        // Check if selected or data-selected attribute is already set on an option. If not, select the titleOption option.
                        // the selected item may have been changed by user or programmatically before the bootstrap select plugin runs,
                        // if so, the select will have the data-selected attribute
                        var $opt = $(element.options[element.selectedIndex]);
                        if ($opt.attr('selected') === undefined && this.$element.data('selected') === undefined) {
                            titleOption.selected = true;
                        }
                    }
                }

                var $selectOptions = this.$element.find('option');

                $selectOptions.each(function (index) {
                    var $this = $(this);

                    liIndex++;

                    if ($this.hasClass('bs-title-option')) return;

                    // Get the class and text for the option
                    var optionClass = this.className || '',
                        inline = htmlEscape(this.style.cssText),
                        text = $this.data('content') ? $this.data('content') : $this.html(),
                        tokens = $this.data('tokens') ? $this.data('tokens') : null,
                        subtext = typeof $this.data('subtext') !== 'undefined' ? '<small class="text-muted">' + $this.data('subtext') + '</small>' : '',
                        icon = typeof $this.data('icon') !== 'undefined' ? '<span class="' + that.options.iconBase + ' ' + $this.data('icon') + '"></span> ' : '',
                        $parent = $this.parent(),
                        isOptgroup = $parent[0].tagName === 'OPTGROUP',
                        isOptgroupDisabled = isOptgroup && $parent[0].disabled,
                        isDisabled = this.disabled || isOptgroupDisabled,
                        prevHiddenIndex;

                    if (icon !== '' && isDisabled) {
                        icon = '<span>' + icon + '</span>';
                    }

                    if (that.options.hideDisabled && (isDisabled && !isOptgroup || isOptgroupDisabled)) {
                        // set prevHiddenIndex - the index of the first hidden option in a group of hidden options
                        // used to determine whether or not a divider should be placed after an optgroup if there are
                        // hidden options between the optgroup and the first visible option
                        prevHiddenIndex = $this.data('prevHiddenIndex');
                        $this.next().data('prevHiddenIndex', prevHiddenIndex !== undefined ? prevHiddenIndex : index);

                        liIndex--;
                        return;
                    }

                    if (!$this.data('content')) {
                        // Prepend any icon and append any subtext to the main text.
                        text = icon + '<span class="text">' + text + subtext + '</span>';
                    }

                    if (isOptgroup && $this.data('divider') !== true) {
                        if (that.options.hideDisabled && isDisabled) {
                            if ($parent.data('allOptionsDisabled') === undefined) {
                                var $options = $parent.children();
                                $parent.data('allOptionsDisabled', $options.filter(':disabled').length === $options.length);
                            }

                            if ($parent.data('allOptionsDisabled')) {
                                liIndex--;
                                return;
                            }
                        }

                        var optGroupClass = ' ' + $parent[0].className || '';

                        if ($this.index() === 0) {
                            // Is it the first option of the optgroup?
                            optID += 1;

                            // Get the opt group label
                            var label = $parent[0].label,
                                labelSubtext = typeof $parent.data('subtext') !== 'undefined' ? '<small class="text-muted">' + $parent.data('subtext') + '</small>' : '',
                                labelIcon = $parent.data('icon') ? '<span class="' + that.options.iconBase + ' ' + $parent.data('icon') + '"></span> ' : '';

                            label = labelIcon + '<span class="text">' + htmlEscape(label) + labelSubtext + '</span>';

                            if (index !== 0 && _li.length > 0) {
                                // Is it NOT the first option of the select && are there elements in the dropdown?
                                liIndex++;
                                _li.push(generateLI('', null, 'divider', optID + 'div'));
                            }
                            liIndex++;
                            _li.push(generateLI(label, null, 'dropdown-header' + optGroupClass, optID));
                        }

                        if (that.options.hideDisabled && isDisabled) {
                            liIndex--;
                            return;
                        }

                        _li.push(generateLI(generateA(text, 'opt ' + optionClass + optGroupClass, inline, tokens), index, '', optID));
                    } else if ($this.data('divider') === true) {
                        _li.push(generateLI('', index, 'divider'));
                    } else if ($this.data('hidden') === true) {
                        // set prevHiddenIndex - the index of the first hidden option in a group of hidden options
                        // used to determine whether or not a divider should be placed after an optgroup if there are
                        // hidden options between the optgroup and the first visible option
                        prevHiddenIndex = $this.data('prevHiddenIndex');
                        $this.next().data('prevHiddenIndex', prevHiddenIndex !== undefined ? prevHiddenIndex : index);

                        _li.push(generateLI(generateA(text, optionClass, inline, tokens), index, 'hidden is-hidden'));
                    } else {
                        var showDivider = this.previousElementSibling && this.previousElementSibling.tagName === 'OPTGROUP';

                        // if previous element is not an optgroup and hideDisabled is true
                        if (!showDivider && that.options.hideDisabled) {
                            prevHiddenIndex = $this.data('prevHiddenIndex');

                            if (prevHiddenIndex !== undefined) {
                                // select the element **before** the first hidden element in the group
                                var prevHidden = $selectOptions.eq(prevHiddenIndex)[0].previousElementSibling;

                                if (prevHidden && prevHidden.tagName === 'OPTGROUP' && !prevHidden.disabled) {
                                    showDivider = true;
                                }
                            }
                        }

                        if (showDivider) {
                            liIndex++;
                            _li.push(generateLI('', null, 'divider', optID + 'div'));
                        }
                        _li.push(generateLI(generateA(text, optionClass, inline, tokens), index));
                    }

                    that.liObj[index] = liIndex;
                });

                //If we are not multiple, we don't have a selected item, and we don't have a title, select the first element so something is set in the button
                if (!this.multiple && this.$element.find('option:selected').length === 0 && !this.options.title) {
                    this.$element.find('option').eq(0).prop('selected', true).attr('selected', 'selected');
                }

                return _li.join('');
            },

            findLis: function () {
                if (this.$lis == null) this.$lis = this.$menu.find('li');
                return this.$lis;
            },

            /**
             * @param [updateLi] defaults to true
             */
            render: function (updateLi) {
                var that = this,
                    notDisabled,
                    $selectOptions = this.$element.find('option');

                //Update the LI to match the SELECT
                if (updateLi !== false) {
                    $selectOptions.each(function (index) {
                        var $lis = that.findLis().eq(that.liObj[index]);

                        that.setDisabled(index, this.disabled || this.parentNode.tagName === 'OPTGROUP' && this.parentNode.disabled, $lis);
                        that.setSelected(index, this.selected, $lis);
                    });
                }

                this.togglePlaceholder();

                this.tabIndex();

                var selectedItems = $selectOptions.map(function () {
                    if (this.selected) {
                        if (that.options.hideDisabled && (this.disabled || this.parentNode.tagName === 'OPTGROUP' && this.parentNode.disabled)) return;

                        var $this = $(this),
                            icon = $this.data('icon') && that.options.showIcon ? '<i class="' + that.options.iconBase + ' ' + $this.data('icon') + '"></i> ' : '',
                            subtext;

                        if (that.options.showSubtext && $this.data('subtext') && !that.multiple) {
                            subtext = ' <small class="text-muted">' + $this.data('subtext') + '</small>';
                        } else {
                            subtext = '';
                        }
                        if (typeof $this.attr('title') !== 'undefined') {
                            return $this.attr('title');
                        } else if ($this.data('content') && that.options.showContent) {
                            return $this.data('content').toString();
                        } else {
                            return icon + $this.html() + subtext;
                        }
                    }
                }).toArray();

                //Fixes issue in IE10 occurring when no default option is selected and at least one option is disabled
                //Convert all the values into a comma delimited string
                var title = !this.multiple ? selectedItems[0] : selectedItems.join(this.options.multipleSeparator);

                //If this is multi select, and the selectText type is count, the show 1 of 2 selected etc..
                if (this.multiple && this.options.selectedTextFormat.indexOf('count') > -1) {
                    var max = this.options.selectedTextFormat.split('>');
                    if (max.length > 1 && selectedItems.length > max[1] || max.length == 1 && selectedItems.length >= 2) {
                        notDisabled = this.options.hideDisabled ? ', [disabled]' : '';
                        var totalCount = $selectOptions.not('[data-divider="true"], [data-hidden="true"]' + notDisabled).length,
                            tr8nText = typeof this.options.countSelectedText === 'function' ? this.options.countSelectedText(selectedItems.length, totalCount) : this.options.countSelectedText;
                        title = tr8nText.replace('{0}', selectedItems.length.toString()).replace('{1}', totalCount.toString());
                    }
                }

                if (this.options.title == undefined) {
                    this.options.title = this.$element.attr('title');
                }

                if (this.options.selectedTextFormat == 'static') {
                    title = this.options.title;
                }

                //If we dont have a title, then use the default, or if nothing is set at all, use the not selected text
                if (!title) {
                    title = typeof this.options.title !== 'undefined' ? this.options.title : this.options.noneSelectedText;
                }

                //strip all HTML tags and trim the result, then unescape any escaped tags
                this.$button.attr('title', htmlUnescape($.trim(title.replace(/<[^>]*>?/g, ''))));
                this.$button.children('.filter-option').html(title);

                this.$element.trigger('rendered.bs.select');
            },

            /**
             * @param [style]
             * @param [status]
             */
            setStyle: function (style, status) {
                if (this.$element.attr('class')) {
                    this.$newElement.addClass(this.$element.attr('class').replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ''));
                }

                var buttonClass = style ? style : this.options.style;

                if (status == 'add') {
                    this.$button.addClass(buttonClass);
                } else if (status == 'remove') {
                    this.$button.removeClass(buttonClass);
                } else {
                    this.$button.removeClass(this.options.style);
                    this.$button.addClass(buttonClass);
                }
            },

            liHeight: function (refresh) {
                if (!refresh && (this.options.size === false || this.sizeInfo)) return;

                var newElement = document.createElement('div'),
                    menu = document.createElement('div'),
                    menuInner = document.createElement('ul'),
                    divider = document.createElement('li'),
                    li = document.createElement('li'),
                    a = document.createElement('a'),
                    text = document.createElement('span'),
                    header = this.options.header && this.$menu.find('.popover-title').length > 0 ? this.$menu.find('.popover-title')[0].cloneNode(true) : null,
                    search = this.options.liveSearch ? document.createElement('div') : null,
                    actions = this.options.actionsBox && this.multiple && this.$menu.find('.bs-actionsbox').length > 0 ? this.$menu.find('.bs-actionsbox')[0].cloneNode(true) : null,
                    doneButton = this.options.doneButton && this.multiple && this.$menu.find('.bs-donebutton').length > 0 ? this.$menu.find('.bs-donebutton')[0].cloneNode(true) : null;

                text.className = 'text';
                newElement.className = this.$menu[0].parentNode.className + ' open';
                menu.className = 'dropdown-menu open';
                menuInner.className = 'dropdown-menu inner';
                divider.className = 'divider';

                text.appendChild(document.createTextNode('Inner text'));
                a.appendChild(text);
                li.appendChild(a);
                menuInner.appendChild(li);
                menuInner.appendChild(divider);
                if (header) menu.appendChild(header);
                if (search) {
                    var input = document.createElement('input');
                    search.className = 'bs-searchbox';
                    input.className = 'form-control';
                    search.appendChild(input);
                    menu.appendChild(search);
                }
                if (actions) menu.appendChild(actions);
                menu.appendChild(menuInner);
                if (doneButton) menu.appendChild(doneButton);
                newElement.appendChild(menu);

                document.body.appendChild(newElement);

                var liHeight = a.offsetHeight,
                    headerHeight = header ? header.offsetHeight : 0,
                    searchHeight = search ? search.offsetHeight : 0,
                    actionsHeight = actions ? actions.offsetHeight : 0,
                    doneButtonHeight = doneButton ? doneButton.offsetHeight : 0,
                    dividerHeight = $(divider).outerHeight(true),

                // fall back to jQuery if getComputedStyle is not supported
                menuStyle = typeof getComputedStyle === 'function' ? getComputedStyle(menu) : false,
                    $menu = menuStyle ? null : $(menu),
                    menuPadding = {
                    vert: parseInt(menuStyle ? menuStyle.paddingTop : $menu.css('paddingTop')) + parseInt(menuStyle ? menuStyle.paddingBottom : $menu.css('paddingBottom')) + parseInt(menuStyle ? menuStyle.borderTopWidth : $menu.css('borderTopWidth')) + parseInt(menuStyle ? menuStyle.borderBottomWidth : $menu.css('borderBottomWidth')),
                    horiz: parseInt(menuStyle ? menuStyle.paddingLeft : $menu.css('paddingLeft')) + parseInt(menuStyle ? menuStyle.paddingRight : $menu.css('paddingRight')) + parseInt(menuStyle ? menuStyle.borderLeftWidth : $menu.css('borderLeftWidth')) + parseInt(menuStyle ? menuStyle.borderRightWidth : $menu.css('borderRightWidth'))
                },
                    menuExtras = {
                    vert: menuPadding.vert + parseInt(menuStyle ? menuStyle.marginTop : $menu.css('marginTop')) + parseInt(menuStyle ? menuStyle.marginBottom : $menu.css('marginBottom')) + 2,
                    horiz: menuPadding.horiz + parseInt(menuStyle ? menuStyle.marginLeft : $menu.css('marginLeft')) + parseInt(menuStyle ? menuStyle.marginRight : $menu.css('marginRight')) + 2
                };

                document.body.removeChild(newElement);

                this.sizeInfo = {
                    liHeight: liHeight,
                    headerHeight: headerHeight,
                    searchHeight: searchHeight,
                    actionsHeight: actionsHeight,
                    doneButtonHeight: doneButtonHeight,
                    dividerHeight: dividerHeight,
                    menuPadding: menuPadding,
                    menuExtras: menuExtras
                };
            },

            setSize: function () {
                this.findLis();
                this.liHeight();

                if (this.options.header) this.$menu.css('padding-top', 0);
                if (this.options.size === false) return;

                var that = this,
                    $menu = this.$menu,
                    $menuInner = this.$menuInner,
                    $window = $(window),
                    selectHeight = this.$newElement[0].offsetHeight,
                    selectWidth = this.$newElement[0].offsetWidth,
                    liHeight = this.sizeInfo['liHeight'],
                    headerHeight = this.sizeInfo['headerHeight'],
                    searchHeight = this.sizeInfo['searchHeight'],
                    actionsHeight = this.sizeInfo['actionsHeight'],
                    doneButtonHeight = this.sizeInfo['doneButtonHeight'],
                    divHeight = this.sizeInfo['dividerHeight'],
                    menuPadding = this.sizeInfo['menuPadding'],
                    menuExtras = this.sizeInfo['menuExtras'],
                    notDisabled = this.options.hideDisabled ? '.disabled' : '',
                    menuHeight,
                    menuWidth,
                    getHeight,
                    getWidth,
                    selectOffsetTop,
                    selectOffsetBot,
                    selectOffsetLeft,
                    selectOffsetRight,
                    getPos = function () {
                    var pos = that.$newElement.offset(),
                        $container = $(that.options.container),
                        containerPos;

                    if (that.options.container && !$container.is('body')) {
                        containerPos = $container.offset();
                        containerPos.top += parseInt($container.css('borderTopWidth'));
                        containerPos.left += parseInt($container.css('borderLeftWidth'));
                    } else {
                        containerPos = {
                            top: 0,
                            left: 0
                        };
                    }

                    var winPad = that.options.windowPadding;
                    selectOffsetTop = pos.top - containerPos.top - $window.scrollTop();
                    selectOffsetBot = $window.height() - selectOffsetTop - selectHeight - containerPos.top - winPad[2];
                    selectOffsetLeft = pos.left - containerPos.left - $window.scrollLeft();
                    selectOffsetRight = $window.width() - selectOffsetLeft - selectWidth - containerPos.left - winPad[1];
                    selectOffsetTop -= winPad[0];
                    selectOffsetLeft -= winPad[3];
                };

                getPos();

                if (this.options.size === 'auto') {
                    var getSize = function () {
                        var minHeight,
                            hasClass = function (className, include) {
                            return function (element) {
                                if (include) {
                                    return element.classList ? element.classList.contains(className) : $(element).hasClass(className);
                                } else {
                                    return !(element.classList ? element.classList.contains(className) : $(element).hasClass(className));
                                }
                            };
                        },
                            lis = that.$menuInner[0].getElementsByTagName('li'),
                            lisVisible = Array.prototype.filter ? Array.prototype.filter.call(lis, hasClass('hidden', false)) : that.$lis.not('.hidden'),
                            optGroup = Array.prototype.filter ? Array.prototype.filter.call(lisVisible, hasClass('dropdown-header', true)) : lisVisible.filter('.dropdown-header');

                        getPos();
                        menuHeight = selectOffsetBot - menuExtras.vert;
                        menuWidth = selectOffsetRight - menuExtras.horiz;

                        if (that.options.container) {
                            if (!$menu.data('height')) $menu.data('height', $menu.height());
                            getHeight = $menu.data('height');

                            if (!$menu.data('width')) $menu.data('width', $menu.width());
                            getWidth = $menu.data('width');
                        } else {
                            getHeight = $menu.height();
                            getWidth = $menu.width();
                        }

                        if (that.options.dropupAuto) {
                            that.$newElement.toggleClass('dropup', selectOffsetTop > selectOffsetBot && menuHeight - menuExtras.vert < getHeight);
                        }

                        if (that.$newElement.hasClass('dropup')) {
                            menuHeight = selectOffsetTop - menuExtras.vert;
                        }

                        if (that.options.dropdownAlignRight === 'auto') {
                            $menu.toggleClass('dropdown-menu-right', selectOffsetLeft > selectOffsetRight && menuWidth - menuExtras.horiz < getWidth - selectWidth);
                        }

                        if (lisVisible.length + optGroup.length > 3) {
                            minHeight = liHeight * 3 + menuExtras.vert - 2;
                        } else {
                            minHeight = 0;
                        }

                        $menu.css({
                            'max-height': menuHeight + 'px',
                            'overflow': 'hidden',
                            'min-height': minHeight + headerHeight + searchHeight + actionsHeight + doneButtonHeight + 'px'
                        });
                        $menuInner.css({
                            'max-height': menuHeight - headerHeight - searchHeight - actionsHeight - doneButtonHeight - menuPadding.vert + 'px',
                            'overflow-y': 'auto',
                            'min-height': Math.max(minHeight - menuPadding.vert, 0) + 'px'
                        });
                    };
                    getSize();
                    this.$searchbox.off('input.getSize propertychange.getSize').on('input.getSize propertychange.getSize', getSize);
                    $window.off('resize.getSize scroll.getSize').on('resize.getSize scroll.getSize', getSize);
                } else if (this.options.size && this.options.size != 'auto' && this.$lis.not(notDisabled).length > this.options.size) {
                    var optIndex = this.$lis.not('.divider').not(notDisabled).children().slice(0, this.options.size).last().parent().index(),
                        divLength = this.$lis.slice(0, optIndex + 1).filter('.divider').length;
                    menuHeight = liHeight * this.options.size + divLength * divHeight + menuPadding.vert;

                    if (that.options.container) {
                        if (!$menu.data('height')) $menu.data('height', $menu.height());
                        getHeight = $menu.data('height');
                    } else {
                        getHeight = $menu.height();
                    }

                    if (that.options.dropupAuto) {
                        //noinspection JSUnusedAssignment
                        this.$newElement.toggleClass('dropup', selectOffsetTop > selectOffsetBot && menuHeight - menuExtras.vert < getHeight);
                    }
                    $menu.css({
                        'max-height': menuHeight + headerHeight + searchHeight + actionsHeight + doneButtonHeight + 'px',
                        'overflow': 'hidden',
                        'min-height': ''
                    });
                    $menuInner.css({
                        'max-height': menuHeight - menuPadding.vert + 'px',
                        'overflow-y': 'auto',
                        'min-height': ''
                    });
                }
            },

            setWidth: function () {
                if (this.options.width === 'auto') {
                    this.$menu.css('min-width', '0');

                    // Get correct width if element is hidden
                    var $selectClone = this.$menu.parent().clone().appendTo('body'),
                        $selectClone2 = this.options.container ? this.$newElement.clone().appendTo('body') : $selectClone,
                        ulWidth = $selectClone.children('.dropdown-menu').outerWidth(),
                        btnWidth = $selectClone2.css('width', 'auto').children('button').outerWidth();

                    $selectClone.remove();
                    $selectClone2.remove();

                    // Set width to whatever's larger, button title or longest option
                    this.$newElement.css('width', Math.max(ulWidth, btnWidth) + 'px');
                } else if (this.options.width === 'fit') {
                    // Remove inline min-width so width can be changed from 'auto'
                    this.$menu.css('min-width', '');
                    this.$newElement.css('width', '').addClass('fit-width');
                } else if (this.options.width) {
                    // Remove inline min-width so width can be changed from 'auto'
                    this.$menu.css('min-width', '');
                    this.$newElement.css('width', this.options.width);
                } else {
                    // Remove inline min-width/width so width can be changed
                    this.$menu.css('min-width', '');
                    this.$newElement.css('width', '');
                }
                // Remove fit-width class if width is changed programmatically
                if (this.$newElement.hasClass('fit-width') && this.options.width !== 'fit') {
                    this.$newElement.removeClass('fit-width');
                }
            },

            selectPosition: function () {
                this.$bsContainer = $('<div class="bs-container" />');

                var that = this,
                    $container = $(this.options.container),
                    pos,
                    containerPos,
                    actualHeight,
                    getPlacement = function ($element) {
                    that.$bsContainer.addClass($element.attr('class').replace(/form-control|fit-width/gi, '')).toggleClass('dropup', $element.hasClass('dropup'));
                    pos = $element.offset();

                    if (!$container.is('body')) {
                        containerPos = $container.offset();
                        containerPos.top += parseInt($container.css('borderTopWidth')) - $container.scrollTop();
                        containerPos.left += parseInt($container.css('borderLeftWidth')) - $container.scrollLeft();
                    } else {
                        containerPos = {
                            top: 0,
                            left: 0
                        };
                    }

                    actualHeight = $element.hasClass('dropup') ? 0 : $element[0].offsetHeight;

                    that.$bsContainer.css({
                        'top': pos.top - containerPos.top + actualHeight,
                        'left': pos.left - containerPos.left,
                        'width': $element[0].offsetWidth
                    });
                };

                this.$button.on('click', function () {
                    var $this = $(this);

                    if (that.isDisabled()) {
                        return;
                    }

                    getPlacement(that.$newElement);

                    that.$bsContainer.appendTo(that.options.container).toggleClass('open', !$this.hasClass('open')).append(that.$menu);
                });

                $(window).on('resize scroll', function () {
                    getPlacement(that.$newElement);
                });

                this.$element.on('hide.bs.select', function () {
                    that.$menu.data('height', that.$menu.height());
                    that.$bsContainer.detach();
                });
            },

            /**
             * @param {number} index - the index of the option that is being changed
             * @param {boolean} selected - true if the option is being selected, false if being deselected
             * @param {JQuery} $lis - the 'li' element that is being modified
             */
            setSelected: function (index, selected, $lis) {
                if (!$lis) {
                    this.togglePlaceholder(); // check if setSelected is being called by changing the value of the select
                    $lis = this.findLis().eq(this.liObj[index]);
                }

                $lis.toggleClass('selected', selected).find('a').attr('aria-selected', selected);
            },

            /**
             * @param {number} index - the index of the option that is being disabled
             * @param {boolean} disabled - true if the option is being disabled, false if being enabled
             * @param {JQuery} $lis - the 'li' element that is being modified
             */
            setDisabled: function (index, disabled, $lis) {
                if (!$lis) {
                    $lis = this.findLis().eq(this.liObj[index]);
                }

                if (disabled) {
                    $lis.addClass('disabled').children('a').attr('href', '#').attr('tabindex', -1).attr('aria-disabled', true);
                } else {
                    $lis.removeClass('disabled').children('a').removeAttr('href').attr('tabindex', 0).attr('aria-disabled', false);
                }
            },

            isDisabled: function () {
                return this.$element[0].disabled;
            },

            checkDisabled: function () {
                var that = this;

                if (this.isDisabled()) {
                    this.$newElement.addClass('disabled');
                    this.$button.addClass('disabled').attr('tabindex', -1).attr('aria-disabled', true);
                } else {
                    if (this.$button.hasClass('disabled')) {
                        this.$newElement.removeClass('disabled');
                        this.$button.removeClass('disabled').attr('aria-disabled', false);
                    }

                    if (this.$button.attr('tabindex') == -1 && !this.$element.data('tabindex')) {
                        this.$button.removeAttr('tabindex');
                    }
                }

                this.$button.click(function () {
                    return !that.isDisabled();
                });
            },

            togglePlaceholder: function () {
                var value = this.$element.val();
                this.$button.toggleClass('bs-placeholder', value === null || value === '' || value.constructor === Array && value.length === 0);
            },

            tabIndex: function () {
                if (this.$element.data('tabindex') !== this.$element.attr('tabindex') && this.$element.attr('tabindex') !== -98 && this.$element.attr('tabindex') !== '-98') {
                    this.$element.data('tabindex', this.$element.attr('tabindex'));
                    this.$button.attr('tabindex', this.$element.data('tabindex'));
                }

                this.$element.attr('tabindex', -98);
            },

            clickListener: function () {
                var that = this,
                    $document = $(document);

                $document.data('spaceSelect', false);

                this.$button.on('keyup', function (e) {
                    if (/(32)/.test(e.keyCode.toString(10)) && $document.data('spaceSelect')) {
                        e.preventDefault();
                        $document.data('spaceSelect', false);
                    }
                });

                this.$button.on('click', function () {
                    that.setSize();
                });

                this.$element.on('shown.bs.select', function () {
                    if (!that.options.liveSearch && !that.multiple) {
                        that.$menuInner.find('.selected a').focus();
                    } else if (!that.multiple) {
                        var selectedIndex = that.liObj[that.$element[0].selectedIndex];

                        if (typeof selectedIndex !== 'number' || that.options.size === false) return;

                        // scroll to selected option
                        var offset = that.$lis.eq(selectedIndex)[0].offsetTop - that.$menuInner[0].offsetTop;
                        offset = offset - that.$menuInner[0].offsetHeight / 2 + that.sizeInfo.liHeight / 2;
                        that.$menuInner[0].scrollTop = offset;
                    }
                });

                this.$menuInner.on('click', 'li a', function (e) {
                    var $this = $(this),
                        clickedIndex = $this.parent().data('originalIndex'),
                        prevValue = that.$element.val(),
                        prevIndex = that.$element.prop('selectedIndex'),
                        triggerChange = true;

                    // Don't close on multi choice menu
                    if (that.multiple && that.options.maxOptions !== 1) {
                        e.stopPropagation();
                    }

                    e.preventDefault();

                    //Don't run if we have been disabled
                    if (!that.isDisabled() && !$this.parent().hasClass('disabled')) {
                        var $options = that.$element.find('option'),
                            $option = $options.eq(clickedIndex),
                            state = $option.prop('selected'),
                            $optgroup = $option.parent('optgroup'),
                            maxOptions = that.options.maxOptions,
                            maxOptionsGrp = $optgroup.data('maxOptions') || false;

                        if (!that.multiple) {
                            // Deselect all others if not multi select box
                            $options.prop('selected', false);
                            $option.prop('selected', true);
                            that.$menuInner.find('.selected').removeClass('selected').find('a').attr('aria-selected', false);
                            that.setSelected(clickedIndex, true);
                        } else {
                            // Toggle the one we have chosen if we are multi select.
                            $option.prop('selected', !state);
                            that.setSelected(clickedIndex, !state);
                            $this.blur();

                            if (maxOptions !== false || maxOptionsGrp !== false) {
                                var maxReached = maxOptions < $options.filter(':selected').length,
                                    maxReachedGrp = maxOptionsGrp < $optgroup.find('option:selected').length;

                                if (maxOptions && maxReached || maxOptionsGrp && maxReachedGrp) {
                                    if (maxOptions && maxOptions == 1) {
                                        $options.prop('selected', false);
                                        $option.prop('selected', true);
                                        that.$menuInner.find('.selected').removeClass('selected');
                                        that.setSelected(clickedIndex, true);
                                    } else if (maxOptionsGrp && maxOptionsGrp == 1) {
                                        $optgroup.find('option:selected').prop('selected', false);
                                        $option.prop('selected', true);
                                        var optgroupID = $this.parent().data('optgroup');
                                        that.$menuInner.find('[data-optgroup="' + optgroupID + '"]').removeClass('selected');
                                        that.setSelected(clickedIndex, true);
                                    } else {
                                        var maxOptionsText = typeof that.options.maxOptionsText === 'string' ? [that.options.maxOptionsText, that.options.maxOptionsText] : that.options.maxOptionsText,
                                            maxOptionsArr = typeof maxOptionsText === 'function' ? maxOptionsText(maxOptions, maxOptionsGrp) : maxOptionsText,
                                            maxTxt = maxOptionsArr[0].replace('{n}', maxOptions),
                                            maxTxtGrp = maxOptionsArr[1].replace('{n}', maxOptionsGrp),
                                            $notify = $('<div class="notify"></div>');
                                        // If {var} is set in array, replace it
                                        /** @deprecated */
                                        if (maxOptionsArr[2]) {
                                            maxTxt = maxTxt.replace('{var}', maxOptionsArr[2][maxOptions > 1 ? 0 : 1]);
                                            maxTxtGrp = maxTxtGrp.replace('{var}', maxOptionsArr[2][maxOptionsGrp > 1 ? 0 : 1]);
                                        }

                                        $option.prop('selected', false);

                                        that.$menu.append($notify);

                                        if (maxOptions && maxReached) {
                                            $notify.append($('<div>' + maxTxt + '</div>'));
                                            triggerChange = false;
                                            that.$element.trigger('maxReached.bs.select');
                                        }

                                        if (maxOptionsGrp && maxReachedGrp) {
                                            $notify.append($('<div>' + maxTxtGrp + '</div>'));
                                            triggerChange = false;
                                            that.$element.trigger('maxReachedGrp.bs.select');
                                        }

                                        setTimeout(function () {
                                            that.setSelected(clickedIndex, false);
                                        }, 10);

                                        $notify.delay(750).fadeOut(300, function () {
                                            $(this).remove();
                                        });
                                    }
                                }
                            }
                        }

                        if (!that.multiple || that.multiple && that.options.maxOptions === 1) {
                            that.$button.focus();
                        } else if (that.options.liveSearch) {
                            that.$searchbox.focus();
                        }

                        // Trigger select 'change'
                        if (triggerChange) {
                            if (prevValue != that.$element.val() && that.multiple || prevIndex != that.$element.prop('selectedIndex') && !that.multiple) {
                                // $option.prop('selected') is current option state (selected/unselected). state is previous option state.
                                changed_arguments = [clickedIndex, $option.prop('selected'), state];
                                that.$element.triggerNative('change');
                            }
                        }
                    }
                });

                this.$menu.on('click', 'li.disabled a, .popover-title, .popover-title :not(.close)', function (e) {
                    if (e.currentTarget == this) {
                        e.preventDefault();
                        e.stopPropagation();
                        if (that.options.liveSearch && !$(e.target).hasClass('close')) {
                            that.$searchbox.focus();
                        } else {
                            that.$button.focus();
                        }
                    }
                });

                this.$menuInner.on('click', '.divider, .dropdown-header', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (that.options.liveSearch) {
                        that.$searchbox.focus();
                    } else {
                        that.$button.focus();
                    }
                });

                this.$menu.on('click', '.popover-title .close', function () {
                    that.$button.click();
                });

                this.$searchbox.on('click', function (e) {
                    e.stopPropagation();
                });

                this.$menu.on('click', '.actions-btn', function (e) {
                    if (that.options.liveSearch) {
                        that.$searchbox.focus();
                    } else {
                        that.$button.focus();
                    }

                    e.preventDefault();
                    e.stopPropagation();

                    if ($(this).hasClass('bs-select-all')) {
                        that.selectAll();
                    } else {
                        that.deselectAll();
                    }
                });

                this.$element.change(function () {
                    that.render(false);
                    that.$element.trigger('changed.bs.select', changed_arguments);
                    changed_arguments = null;
                });
            },

            liveSearchListener: function () {
                var that = this,
                    $no_results = $('<li class="no-results"></li>');

                this.$button.on('click.dropdown.data-api', function () {
                    that.$menuInner.find('.active').removeClass('active');
                    if (!!that.$searchbox.val()) {
                        that.$searchbox.val('');
                        that.$lis.not('.is-hidden').removeClass('hidden');
                        if (!!$no_results.parent().length) $no_results.remove();
                    }
                    if (!that.multiple) that.$menuInner.find('.selected').addClass('active');
                    setTimeout(function () {
                        that.$searchbox.focus();
                    }, 10);
                });

                this.$searchbox.on('click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api', function (e) {
                    e.stopPropagation();
                });

                this.$searchbox.on('input propertychange', function () {
                    that.$lis.not('.is-hidden').removeClass('hidden');
                    that.$lis.filter('.active').removeClass('active');
                    $no_results.remove();

                    if (that.$searchbox.val()) {
                        var $searchBase = that.$lis.not('.is-hidden, .divider, .dropdown-header'),
                            $hideItems;
                        if (that.options.liveSearchNormalize) {
                            $hideItems = $searchBase.not(':a' + that._searchStyle() + '("' + normalizeToBase(that.$searchbox.val()) + '")');
                        } else {
                            $hideItems = $searchBase.not(':' + that._searchStyle() + '("' + that.$searchbox.val() + '")');
                        }

                        if ($hideItems.length === $searchBase.length) {
                            $no_results.html(that.options.noneResultsText.replace('{0}', '"' + htmlEscape(that.$searchbox.val()) + '"'));
                            that.$menuInner.append($no_results);
                            that.$lis.addClass('hidden');
                        } else {
                            $hideItems.addClass('hidden');

                            var $lisVisible = that.$lis.not('.hidden'),
                                $foundDiv;

                            // hide divider if first or last visible, or if followed by another divider
                            $lisVisible.each(function (index) {
                                var $this = $(this);

                                if ($this.hasClass('divider')) {
                                    if ($foundDiv === undefined) {
                                        $this.addClass('hidden');
                                    } else {
                                        if ($foundDiv) $foundDiv.addClass('hidden');
                                        $foundDiv = $this;
                                    }
                                } else if ($this.hasClass('dropdown-header') && $lisVisible.eq(index + 1).data('optgroup') !== $this.data('optgroup')) {
                                    $this.addClass('hidden');
                                } else {
                                    $foundDiv = null;
                                }
                            });
                            if ($foundDiv) $foundDiv.addClass('hidden');

                            $searchBase.not('.hidden').first().addClass('active');
                            that.$menuInner.scrollTop(0);
                        }
                    }
                });
            },

            _searchStyle: function () {
                var styles = {
                    begins: 'ibegins',
                    startsWith: 'ibegins'
                };

                return styles[this.options.liveSearchStyle] || 'icontains';
            },

            val: function (value) {
                if (typeof value !== 'undefined') {
                    this.$element.val(value);
                    this.render();

                    return this.$element;
                } else {
                    return this.$element.val();
                }
            },

            changeAll: function (status) {
                if (!this.multiple) return;
                if (typeof status === 'undefined') status = true;

                this.findLis();

                var $options = this.$element.find('option'),
                    $lisVisible = this.$lis.not('.divider, .dropdown-header, .disabled, .hidden'),
                    lisVisLen = $lisVisible.length,
                    selectedOptions = [];

                if (status) {
                    if ($lisVisible.filter('.selected').length === $lisVisible.length) return;
                } else {
                    if ($lisVisible.filter('.selected').length === 0) return;
                }

                $lisVisible.toggleClass('selected', status);

                for (var i = 0; i < lisVisLen; i++) {
                    var origIndex = $lisVisible[i].getAttribute('data-original-index');
                    selectedOptions[selectedOptions.length] = $options.eq(origIndex)[0];
                }

                $(selectedOptions).prop('selected', status);

                this.render(false);

                this.togglePlaceholder();

                this.$element.triggerNative('change');
            },

            selectAll: function () {
                return this.changeAll(true);
            },

            deselectAll: function () {
                return this.changeAll(false);
            },

            toggle: function (e) {
                e = e || window.event;

                if (e) e.stopPropagation();

                this.$button.trigger('click');
            },

            keydown: function (e) {
                var $this = $(this),
                    $parent = $this.is('input') ? $this.parent().parent() : $this.parent(),
                    $items,
                    that = $parent.data('this'),
                    index,
                    prevIndex,
                    isActive,
                    selector = ':not(.disabled, .hidden, .dropdown-header, .divider)',
                    keyCodeMap = {
                    32: ' ',
                    48: '0',
                    49: '1',
                    50: '2',
                    51: '3',
                    52: '4',
                    53: '5',
                    54: '6',
                    55: '7',
                    56: '8',
                    57: '9',
                    59: ';',
                    65: 'a',
                    66: 'b',
                    67: 'c',
                    68: 'd',
                    69: 'e',
                    70: 'f',
                    71: 'g',
                    72: 'h',
                    73: 'i',
                    74: 'j',
                    75: 'k',
                    76: 'l',
                    77: 'm',
                    78: 'n',
                    79: 'o',
                    80: 'p',
                    81: 'q',
                    82: 'r',
                    83: 's',
                    84: 't',
                    85: 'u',
                    86: 'v',
                    87: 'w',
                    88: 'x',
                    89: 'y',
                    90: 'z',
                    96: '0',
                    97: '1',
                    98: '2',
                    99: '3',
                    100: '4',
                    101: '5',
                    102: '6',
                    103: '7',
                    104: '8',
                    105: '9'
                };

                isActive = that.$newElement.hasClass('open');

                if (!isActive && (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode >= 65 && e.keyCode <= 90)) {
                    if (!that.options.container) {
                        that.setSize();
                        that.$menu.parent().addClass('open');
                        isActive = true;
                    } else {
                        that.$button.trigger('click');
                    }
                    that.$searchbox.focus();
                    return;
                }

                if (that.options.liveSearch) {
                    if (/(^9$|27)/.test(e.keyCode.toString(10)) && isActive) {
                        e.preventDefault();
                        e.stopPropagation();
                        that.$menuInner.click();
                        that.$button.focus();
                    }
                }

                if (/(38|40)/.test(e.keyCode.toString(10))) {
                    $items = that.$lis.filter(selector);
                    if (!$items.length) return;

                    if (!that.options.liveSearch) {
                        index = $items.index($items.find('a').filter(':focus').parent());
                    } else {
                        index = $items.index($items.filter('.active'));
                    }

                    prevIndex = that.$menuInner.data('prevIndex');

                    if (e.keyCode == 38) {
                        if ((that.options.liveSearch || index == prevIndex) && index != -1) index--;
                        if (index < 0) index += $items.length;
                    } else if (e.keyCode == 40) {
                        if (that.options.liveSearch || index == prevIndex) index++;
                        index = index % $items.length;
                    }

                    that.$menuInner.data('prevIndex', index);

                    if (!that.options.liveSearch) {
                        $items.eq(index).children('a').focus();
                    } else {
                        e.preventDefault();
                        if (!$this.hasClass('dropdown-toggle')) {
                            $items.removeClass('active').eq(index).addClass('active').children('a').focus();
                            $this.focus();
                        }
                    }
                } else if (!$this.is('input')) {
                    var keyIndex = [],
                        count,
                        prevKey;

                    $items = that.$lis.filter(selector);
                    $items.each(function (i) {
                        if ($.trim($(this).children('a').text().toLowerCase()).substring(0, 1) == keyCodeMap[e.keyCode]) {
                            keyIndex.push(i);
                        }
                    });

                    count = $(document).data('keycount');
                    count++;
                    $(document).data('keycount', count);

                    prevKey = $.trim($(':focus').text().toLowerCase()).substring(0, 1);

                    if (prevKey != keyCodeMap[e.keyCode]) {
                        count = 1;
                        $(document).data('keycount', count);
                    } else if (count >= keyIndex.length) {
                        $(document).data('keycount', 0);
                        if (count > keyIndex.length) count = 1;
                    }

                    $items.eq(keyIndex[count - 1]).children('a').focus();
                }

                // Select focused option if "Enter", "Spacebar" or "Tab" (when selectOnTab is true) are pressed inside the menu.
                if ((/(13|32)/.test(e.keyCode.toString(10)) || /(^9$)/.test(e.keyCode.toString(10)) && that.options.selectOnTab) && isActive) {
                    if (!/(32)/.test(e.keyCode.toString(10))) e.preventDefault();
                    if (!that.options.liveSearch) {
                        var elem = $(':focus');
                        elem.click();
                        // Bring back focus for multiselects
                        elem.focus();
                        // Prevent screen from scrolling if the user hit the spacebar
                        e.preventDefault();
                        // Fixes spacebar selection of dropdown items in FF & IE
                        $(document).data('spaceSelect', true);
                    } else if (!/(32)/.test(e.keyCode.toString(10))) {
                        that.$menuInner.find('.active a').click();
                        $this.focus();
                    }
                    $(document).data('keycount', 0);
                }

                if (/(^9$|27)/.test(e.keyCode.toString(10)) && isActive && (that.multiple || that.options.liveSearch) || /(27)/.test(e.keyCode.toString(10)) && !isActive) {
                    that.$menu.parent().removeClass('open');
                    if (that.options.container) that.$newElement.removeClass('open');
                    that.$button.focus();
                }
            },

            mobile: function () {
                this.$element.addClass('mobile-device');
            },

            refresh: function () {
                this.$lis = null;
                this.liObj = {};
                this.reloadLi();
                this.render();
                this.checkDisabled();
                this.liHeight(true);
                this.setStyle();
                this.setWidth();
                if (this.$lis) this.$searchbox.trigger('propertychange');

                this.$element.trigger('refreshed.bs.select');
            },

            hide: function () {
                this.$newElement.hide();
            },

            show: function () {
                this.$newElement.show();
            },

            remove: function () {
                this.$newElement.remove();
                this.$element.remove();
            },

            destroy: function () {
                this.$newElement.before(this.$element).remove();

                if (this.$bsContainer) {
                    this.$bsContainer.remove();
                } else {
                    this.$menu.remove();
                }

                this.$element.off('.bs.select').removeData('selectpicker').removeClass('bs-select-hidden selectpicker');
            }
        };

        // SELECTPICKER PLUGIN DEFINITION
        // ==============================
        function Plugin(option) {
            // get the args of the outer function..
            var args = arguments;
            // The arguments of the function are explicitly re-defined from the argument list, because the shift causes them
            // to get lost/corrupted in android 2.3 and IE9 #715 #775
            var _option = option;

            [].shift.apply(args);

            var value;
            var chain = this.each(function () {
                var $this = $(this);
                if ($this.is('select')) {
                    var data = $this.data('selectpicker'),
                        options = typeof _option == 'object' && _option;

                    if (!data) {
                        var config = $.extend({}, Selectpicker.DEFAULTS, $.fn.selectpicker.defaults || {}, $this.data(), options);
                        config.template = $.extend({}, Selectpicker.DEFAULTS.template, $.fn.selectpicker.defaults ? $.fn.selectpicker.defaults.template : {}, $this.data().template, options.template);
                        $this.data('selectpicker', data = new Selectpicker(this, config));
                    } else if (options) {
                        for (var i in options) {
                            if (options.hasOwnProperty(i)) {
                                data.options[i] = options[i];
                            }
                        }
                    }

                    if (typeof _option == 'string') {
                        if (data[_option] instanceof Function) {
                            value = data[_option].apply(data, args);
                        } else {
                            value = data.options[_option];
                        }
                    }
                }
            });

            if (typeof value !== 'undefined') {
                //noinspection JSUnusedAssignment
                return value;
            } else {
                return chain;
            }
        }

        var old = $.fn.selectpicker;
        $.fn.selectpicker = Plugin;
        $.fn.selectpicker.Constructor = Selectpicker;

        // SELECTPICKER NO CONFLICT
        // ========================
        $.fn.selectpicker.noConflict = function () {
            $.fn.selectpicker = old;
            return this;
        };

        $(document).data('keycount', 0).on('keydown.bs.select', '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', Selectpicker.prototype.keydown).on('focusin.modal', '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', function (e) {
            e.stopPropagation();
        });

        // SELECTPICKER DATA-API
        // =====================
        $(window).on('load.bs.select.data-api', function () {
            $('.selectpicker').each(function () {
                var $selectpicker = $(this);
                Plugin.call($selectpicker, $selectpicker.data());
            });
        });
    })(jQuery);
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

"function" !== typeof Object.create && (Object.create = function (f) {
  function g() {}g.prototype = f;return new g();
});(function (f, g, k) {
  var l = { init: function (a, b) {
      this.$elem = f(b);this.options = f.extend({}, f.fn.owlCarousel.options, this.$elem.data(), a);this.userOptions = a;this.loadContent();
    }, loadContent: function () {
      function a(a) {
        var d,
            e = "";if ("function" === typeof b.options.jsonSuccess) b.options.jsonSuccess.apply(this, [a]);else {
          for (d in a.owl) a.owl.hasOwnProperty(d) && (e += a.owl[d].item);b.$elem.html(e);
        }b.logIn();
      }var b = this,
          e;"function" === typeof b.options.beforeInit && b.options.beforeInit.apply(this, [b.$elem]);"string" === typeof b.options.jsonPath ? (e = b.options.jsonPath, f.getJSON(e, a)) : b.logIn();
    }, logIn: function () {
      this.$elem.data("owl-originalStyles", this.$elem.attr("style"));this.$elem.data("owl-originalClasses", this.$elem.attr("class"));this.$elem.css({ opacity: 0 });this.orignalItems = this.options.items;this.checkBrowser();this.wrapperWidth = 0;this.checkVisible = null;this.setVars();
    }, setVars: function () {
      if (0 === this.$elem.children().length) return !1;this.baseClass();this.eventTypes();this.$userItems = this.$elem.children();this.itemsAmount = this.$userItems.length;this.wrapItems();this.$owlItems = this.$elem.find(".owl-item");this.$owlWrapper = this.$elem.find(".owl-wrapper");this.playDirection = "next";this.prevItem = 0;this.prevArr = [0];this.currentItem = 0;this.customEvents();this.onStartup();
    }, onStartup: function () {
      this.updateItems();this.calculateAll();this.buildControls();this.updateControls();this.response();this.moveEvents();this.stopOnHover();this.owlStatus();!1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);!0 === this.options.autoPlay && (this.options.autoPlay = 5E3);this.play();this.$elem.find(".owl-wrapper").css("display", "block");this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility();this.onstartup = !1;this.eachMoveUpdate();"function" === typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem]);
    }, eachMoveUpdate: function () {
      !0 === this.options.lazyLoad && this.lazyLoad();!0 === this.options.autoHeight && this.autoHeight();this.onVisibleItems();"function" === typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem]);
    }, updateVars: function () {
      "function" === typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]);this.watchVisibility();this.updateItems();this.calculateAll();this.updatePosition();this.updateControls();this.eachMoveUpdate();"function" === typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem]);
    }, reload: function () {
      var a = this;g.setTimeout(function () {
        a.updateVars();
      }, 0);
    }, watchVisibility: function () {
      var a = this;if (!1 === a.$elem.is(":visible")) a.$elem.css({ opacity: 0 }), g.clearInterval(a.autoPlayInterval), g.clearInterval(a.checkVisible);else return !1;a.checkVisible = g.setInterval(function () {
        a.$elem.is(":visible") && (a.reload(), a.$elem.animate({ opacity: 1 }, 200), g.clearInterval(a.checkVisible));
      }, 500);
    }, wrapItems: function () {
      this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");this.$elem.css("display", "block");
    }, baseClass: function () {
      var a = this.$elem.hasClass(this.options.baseClass),
          b = this.$elem.hasClass(this.options.theme);a || this.$elem.addClass(this.options.baseClass);b || this.$elem.addClass(this.options.theme);
    }, updateItems: function () {
      var a, b;if (!1 === this.options.responsive) return !1;if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;a = f(this.options.responsiveBaseWidth).width();a > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems);if (!1 !== this.options.itemsCustom) for (this.options.itemsCustom.sort(function (a, b) {
        return a[0] - b[0];
      }), b = 0; b < this.options.itemsCustom.length; b += 1) this.options.itemsCustom[b][0] <= a && (this.options.items = this.options.itemsCustom[b][1]);else a <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]), a <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), a <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), a <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), a <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount);
    }, response: function () {
      var a = this,
          b,
          e;if (!0 !== a.options.responsive) return !1;e = f(g).width();a.resizer = function () {
        f(g).width() !== e && (!1 !== a.options.autoPlay && g.clearInterval(a.autoPlayInterval), g.clearTimeout(b), b = g.setTimeout(function () {
          e = f(g).width();a.updateVars();
        }, a.options.responsiveRefreshRate));
      };f(g).resize(a.resizer);
    }, updatePosition: function () {
      this.jumpTo(this.currentItem);!1 !== this.options.autoPlay && this.checkAp();
    }, appendItemsSizes: function () {
      var a = this,
          b = 0,
          e = a.itemsAmount - a.options.items;a.$owlItems.each(function (c) {
        var d = f(this);d.css({ width: a.itemWidth }).data("owl-item", Number(c));if (0 === c % a.options.items || c === e) c > e || (b += 1);d.data("owl-roundPages", b);
      });
    }, appendWrapperSizes: function () {
      this.$owlWrapper.css({ width: this.$owlItems.length * this.itemWidth * 2, left: 0 });this.appendItemsSizes();
    }, calculateAll: function () {
      this.calculateWidth();this.appendWrapperSizes();this.loops();this.max();
    }, calculateWidth: function () {
      this.itemWidth = Math.round(this.$elem.width() / this.options.items);
    }, max: function () {
      var a = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);this.options.items > this.itemsAmount ? this.maximumPixels = a = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = a);return a;
    }, min: function () {
      return 0;
    }, loops: function () {
      var a = 0,
          b = 0,
          e,
          c;this.positionsInArray = [0];this.pagesInArray = [];for (e = 0; e < this.itemsAmount; e += 1) b += this.itemWidth, this.positionsInArray.push(-b), !0 === this.options.scrollPerPage && (c = f(this.$owlItems[e]), c = c.data("owl-roundPages"), c !== a && (this.pagesInArray[a] = this.positionsInArray[e], a = c));
    }, buildControls: function () {
      if (!0 === this.options.navigation || !0 === this.options.pagination) this.owlControls = f('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem);!0 === this.options.pagination && this.buildPagination();!0 === this.options.navigation && this.buildButtons();
    }, buildButtons: function () {
      var a = this,
          b = f('<div class="owl-buttons"/>');a.owlControls.append(b);a.buttonPrev = f("<div/>", { "class": "owl-prev", html: a.options.navigationText[0] || "" });a.buttonNext = f("<div/>", { "class": "owl-next", html: a.options.navigationText[1] || "" });b.append(a.buttonPrev).append(a.buttonNext);b.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function (a) {
        a.preventDefault();
      });b.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function (b) {
        b.preventDefault();f(this).hasClass("owl-next") ? a.next() : a.prev();
      });
    }, buildPagination: function () {
      var a = this;a.paginationWrapper = f('<div class="owl-pagination"/>');a.owlControls.append(a.paginationWrapper);a.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (b) {
        b.preventDefault();Number(f(this).data("owl-page")) !== a.currentItem && a.goTo(Number(f(this).data("owl-page")), !0);
      });
    }, updatePagination: function () {
      var a, b, e, c, d, g;if (!1 === this.options.pagination) return !1;this.paginationWrapper.html("");a = 0;b = this.itemsAmount - this.itemsAmount % this.options.items;for (c = 0; c < this.itemsAmount; c += 1) 0 === c % this.options.items && (a += 1, b === c && (e = this.itemsAmount - this.options.items), d = f("<div/>", { "class": "owl-page" }), g = f("<span></span>", { text: !0 === this.options.paginationNumbers ? a : "", "class": !0 === this.options.paginationNumbers ? "owl-numbers" : "" }), d.append(g), d.data("owl-page", b === c ? e : c), d.data("owl-roundPages", a), this.paginationWrapper.append(d));this.checkPagination();
    }, checkPagination: function () {
      var a = this;if (!1 === a.options.pagination) return !1;a.paginationWrapper.find(".owl-page").each(function () {
        f(this).data("owl-roundPages") === f(a.$owlItems[a.currentItem]).data("owl-roundPages") && (a.paginationWrapper.find(".owl-page").removeClass("active"), f(this).addClass("active"));
      });
    }, checkNavigation: function () {
      if (!1 === this.options.navigation) return !1;!1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")));
    }, updateControls: function () {
      this.updatePagination();this.checkNavigation();this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show());
    }, destroyControls: function () {
      this.owlControls && this.owlControls.remove();
    }, next: function (a) {
      if (this.isTransition) return !1;this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1;if (this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0)) if (!0 === this.options.rewindNav) this.currentItem = 0, a = "rewind";else return this.currentItem = this.maximumItem, !1;this.goTo(this.currentItem, a);
    }, prev: function (a) {
      if (this.isTransition) return !1;this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1);if (0 > this.currentItem) if (!0 === this.options.rewindNav) this.currentItem = this.maximumItem, a = "rewind";else return this.currentItem = 0, !1;this.goTo(this.currentItem, a);
    }, goTo: function (a, b, e) {
      var c = this;if (c.isTransition) return !1;"function" === typeof c.options.beforeMove && c.options.beforeMove.apply(this, [c.$elem]);a >= c.maximumItem ? a = c.maximumItem : 0 >= a && (a = 0);c.currentItem = c.owl.currentItem = a;if (!1 !== c.options.transitionStyle && "drag" !== e && 1 === c.options.items && !0 === c.browser.support3d) return c.swapSpeed(0), !0 === c.browser.support3d ? c.transition3d(c.positionsInArray[a]) : c.css2slide(c.positionsInArray[a], 1), c.afterGo(), c.singleItemTransition(), !1;a = c.positionsInArray[a];!0 === c.browser.support3d ? (c.isCss3Finish = !1, !0 === b ? (c.swapSpeed("paginationSpeed"), g.setTimeout(function () {
        c.isCss3Finish = !0;
      }, c.options.paginationSpeed)) : "rewind" === b ? (c.swapSpeed(c.options.rewindSpeed), g.setTimeout(function () {
        c.isCss3Finish = !0;
      }, c.options.rewindSpeed)) : (c.swapSpeed("slideSpeed"), g.setTimeout(function () {
        c.isCss3Finish = !0;
      }, c.options.slideSpeed)), c.transition3d(a)) : !0 === b ? c.css2slide(a, c.options.paginationSpeed) : "rewind" === b ? c.css2slide(a, c.options.rewindSpeed) : c.css2slide(a, c.options.slideSpeed);c.afterGo();
    }, jumpTo: function (a) {
      "function" === typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]);a >= this.maximumItem || -1 === a ? a = this.maximumItem : 0 >= a && (a = 0);this.swapSpeed(0);!0 === this.browser.support3d ? this.transition3d(this.positionsInArray[a]) : this.css2slide(this.positionsInArray[a], 1);this.currentItem = this.owl.currentItem = a;this.afterGo();
    }, afterGo: function () {
      this.prevArr.push(this.currentItem);this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];this.prevArr.shift(0);this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp());"function" === typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem]);
    }, stop: function () {
      this.apStatus = "stop";g.clearInterval(this.autoPlayInterval);
    }, checkAp: function () {
      "stop" !== this.apStatus && this.play();
    }, play: function () {
      var a = this;a.apStatus = "play";if (!1 === a.options.autoPlay) return !1;g.clearInterval(a.autoPlayInterval);a.autoPlayInterval = g.setInterval(function () {
        a.next(!0);
      }, a.options.autoPlay);
    }, swapSpeed: function (a) {
      "slideSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" !== typeof a && this.$owlWrapper.css(this.addCssSpeed(a));
    }, addCssSpeed: function (a) {
      return { "-webkit-transition": "all " + a + "ms ease", "-moz-transition": "all " + a + "ms ease", "-o-transition": "all " + a + "ms ease", transition: "all " + a + "ms ease" };
    }, removeTransition: function () {
      return { "-webkit-transition": "", "-moz-transition": "", "-o-transition": "", transition: "" };
    }, doTranslate: function (a) {
      return { "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)", "-moz-transform": "translate3d(" + a + "px, 0px, 0px)", "-o-transform": "translate3d(" + a + "px, 0px, 0px)", "-ms-transform": "translate3d(" + a + "px, 0px, 0px)", transform: "translate3d(" + a + "px, 0px,0px)" };
    }, transition3d: function (a) {
      this.$owlWrapper.css(this.doTranslate(a));
    }, css2move: function (a) {
      this.$owlWrapper.css({ left: a });
    }, css2slide: function (a, b) {
      var e = this;e.isCssFinish = !1;e.$owlWrapper.stop(!0, !0).animate({ left: a }, { duration: b || e.options.slideSpeed, complete: function () {
          e.isCssFinish = !0;
        } });
    }, checkBrowser: function () {
      var a = k.createElement("div");a.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";a = a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);this.browser = { support3d: null !== a && 1 === a.length, isTouch: "ontouchstart" in g || g.navigator.msMaxTouchPoints };
    }, moveEvents: function () {
      if (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) this.gestures(), this.disabledEvents();
    }, eventTypes: function () {
      var a = ["s", "e", "x"];this.ev_types = {};!0 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (a = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);this.ev_types.start = a[0];this.ev_types.move = a[1];this.ev_types.end = a[2];
    }, disabledEvents: function () {
      this.$elem.on("dragstart.owl", function (a) {
        a.preventDefault();
      });this.$elem.on("mousedown.disableTextSelect", function (a) {
        return f(a.target).is("input, textarea, select, option");
      });
    }, gestures: function () {
      function a(a) {
        if (void 0 !== a.touches) return { x: a.touches[0].pageX, y: a.touches[0].pageY };if (void 0 === a.touches) {
          if (void 0 !== a.pageX) return { x: a.pageX, y: a.pageY };if (void 0 === a.pageX) return { x: a.clientX, y: a.clientY };
        }
      }function b(a) {
        "on" === a ? (f(k).on(d.ev_types.move, e), f(k).on(d.ev_types.end, c)) : "off" === a && (f(k).off(d.ev_types.move), f(k).off(d.ev_types.end));
      }function e(b) {
        b = b.originalEvent || b || g.event;d.newPosX = a(b).x - h.offsetX;d.newPosY = a(b).y - h.offsetY;d.newRelativeX = d.newPosX - h.relativePos;"function" === typeof d.options.startDragging && !0 !== h.dragging && 0 !== d.newRelativeX && (h.dragging = !0, d.options.startDragging.apply(d, [d.$elem]));(8 < d.newRelativeX || -8 > d.newRelativeX) && !0 === d.browser.isTouch && (void 0 !== b.preventDefault ? b.preventDefault() : b.returnValue = !1, h.sliding = !0);(10 < d.newPosY || -10 > d.newPosY) && !1 === h.sliding && f(k).off("touchmove.owl");d.newPosX = Math.max(Math.min(d.newPosX, d.newRelativeX / 5), d.maximumPixels + d.newRelativeX / 5);!0 === d.browser.support3d ? d.transition3d(d.newPosX) : d.css2move(d.newPosX);
      }function c(a) {
        a = a.originalEvent || a || g.event;var c;a.target = a.target || a.srcElement;h.dragging = !1;!0 !== d.browser.isTouch && d.$owlWrapper.removeClass("grabbing");d.dragDirection = 0 > d.newRelativeX ? d.owl.dragDirection = "left" : d.owl.dragDirection = "right";0 !== d.newRelativeX && (c = d.getNewPosition(), d.goTo(c, !1, "drag"), h.targetElement === a.target && !0 !== d.browser.isTouch && (f(a.target).on("click.disable", function (a) {
          a.stopImmediatePropagation();a.stopPropagation();a.preventDefault();f(a.target).off("click.disable");
        }), a = f._data(a.target, "events").click, c = a.pop(), a.splice(0, 0, c)));b("off");
      }var d = this,
          h = { offsetX: 0, offsetY: 0, baseElWidth: 0, relativePos: 0, position: null, minSwipe: null, maxSwipe: null, sliding: null, dargging: null, targetElement: null };d.isCssFinish = !0;d.$elem.on(d.ev_types.start, ".owl-wrapper", function (c) {
        c = c.originalEvent || c || g.event;var e;if (3 === c.which) return !1;if (!(d.itemsAmount <= d.options.items)) {
          if (!1 === d.isCssFinish && !d.options.dragBeforeAnimFinish || !1 === d.isCss3Finish && !d.options.dragBeforeAnimFinish) return !1;!1 !== d.options.autoPlay && g.clearInterval(d.autoPlayInterval);!0 === d.browser.isTouch || d.$owlWrapper.hasClass("grabbing") || d.$owlWrapper.addClass("grabbing");d.newPosX = 0;d.newRelativeX = 0;f(this).css(d.removeTransition());e = f(this).position();h.relativePos = e.left;h.offsetX = a(c).x - e.left;h.offsetY = a(c).y - e.top;b("on");h.sliding = !1;h.targetElement = c.target || c.srcElement;
        }
      });
    }, getNewPosition: function () {
      var a = this.closestItem();a > this.maximumItem ? a = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = a = 0);return a;
    }, closestItem: function () {
      var a = this,
          b = !0 === a.options.scrollPerPage ? a.pagesInArray : a.positionsInArray,
          e = a.newPosX,
          c = null;f.each(b, function (d, g) {
        e - a.itemWidth / 20 > b[d + 1] && e - a.itemWidth / 20 < g && "left" === a.moveDirection() ? (c = g, a.currentItem = !0 === a.options.scrollPerPage ? f.inArray(c, a.positionsInArray) : d) : e + a.itemWidth / 20 < g && e + a.itemWidth / 20 > (b[d + 1] || b[d] - a.itemWidth) && "right" === a.moveDirection() && (!0 === a.options.scrollPerPage ? (c = b[d + 1] || b[b.length - 1], a.currentItem = f.inArray(c, a.positionsInArray)) : (c = b[d + 1], a.currentItem = d + 1));
      });return a.currentItem;
    }, moveDirection: function () {
      var a;0 > this.newRelativeX ? (a = "right", this.playDirection = "next") : (a = "left", this.playDirection = "prev");return a;
    }, customEvents: function () {
      var a = this;a.$elem.on("owl.next", function () {
        a.next();
      });a.$elem.on("owl.prev", function () {
        a.prev();
      });a.$elem.on("owl.play", function (b, e) {
        a.options.autoPlay = e;a.play();a.hoverStatus = "play";
      });a.$elem.on("owl.stop", function () {
        a.stop();a.hoverStatus = "stop";
      });a.$elem.on("owl.goTo", function (b, e) {
        a.goTo(e);
      });a.$elem.on("owl.jumpTo", function (b, e) {
        a.jumpTo(e);
      });
    }, stopOnHover: function () {
      var a = this;!0 === a.options.stopOnHover && !0 !== a.browser.isTouch && !1 !== a.options.autoPlay && (a.$elem.on("mouseover", function () {
        a.stop();
      }), a.$elem.on("mouseout", function () {
        "stop" !== a.hoverStatus && a.play();
      }));
    }, lazyLoad: function () {
      var a, b, e, c, d;if (!1 === this.options.lazyLoad) return !1;for (a = 0; a < this.itemsAmount; a += 1) b = f(this.$owlItems[a]), "loaded" !== b.data("owl-loaded") && (e = b.data("owl-item"), c = b.find(".lazyOwl"), "string" !== typeof c.data("src") ? b.data("owl-loaded", "loaded") : (void 0 === b.data("owl-loaded") && (c.hide(), b.addClass("loading").data("owl-loaded", "checked")), (d = !0 === this.options.lazyFollow ? e >= this.currentItem : !0) && e < this.currentItem + this.options.items && c.length && this.lazyPreload(b, c)));
    }, lazyPreload: function (a, b) {
      function e() {
        a.data("owl-loaded", "loaded").removeClass("loading");b.removeAttr("data-src");"fade" === d.options.lazyEffect ? b.fadeIn(400) : b.show();"function" === typeof d.options.afterLazyLoad && d.options.afterLazyLoad.apply(this, [d.$elem]);
      }function c() {
        f += 1;d.completeImg(b.get(0)) || !0 === k ? e() : 100 >= f ? g.setTimeout(c, 100) : e();
      }var d = this,
          f = 0,
          k;"DIV" === b.prop("tagName") ? (b.css("background-image", "url(" + b.data("src") + ")"), k = !0) : b[0].src = b.data("src");c();
    }, autoHeight: function () {
      function a() {
        var a = f(e.$owlItems[e.currentItem]).height();e.wrapperOuter.css("height", a + "px");e.wrapperOuter.hasClass("autoHeight") || g.setTimeout(function () {
          e.wrapperOuter.addClass("autoHeight");
        }, 0);
      }function b() {
        d += 1;e.completeImg(c.get(0)) ? a() : 100 >= d ? g.setTimeout(b, 100) : e.wrapperOuter.css("height", "");
      }var e = this,
          c = f(e.$owlItems[e.currentItem]).find("img"),
          d;void 0 !== c.get(0) ? (d = 0, b()) : a();
    }, completeImg: function (a) {
      return !a.complete || "undefined" !== typeof a.naturalWidth && 0 === a.naturalWidth ? !1 : !0;
    }, onVisibleItems: function () {
      var a;!0 === this.options.addClassActive && this.$owlItems.removeClass("active");this.visibleItems = [];for (a = this.currentItem; a < this.currentItem + this.options.items; a += 1) this.visibleItems.push(a), !0 === this.options.addClassActive && f(this.$owlItems[a]).addClass("active");this.owl.visibleItems = this.visibleItems;
    }, transitionTypes: function (a) {
      this.outClass = "owl-" + a + "-out";this.inClass = "owl-" + a + "-in";
    }, singleItemTransition: function () {
      var a = this,
          b = a.outClass,
          e = a.inClass,
          c = a.$owlItems.eq(a.currentItem),
          d = a.$owlItems.eq(a.prevItem),
          f = Math.abs(a.positionsInArray[a.currentItem]) + a.positionsInArray[a.prevItem],
          g = Math.abs(a.positionsInArray[a.currentItem]) + a.itemWidth / 2;a.isTransition = !0;a.$owlWrapper.addClass("owl-origin").css({ "-webkit-transform-origin": g + "px", "-moz-perspective-origin": g + "px", "perspective-origin": g + "px" });d.css({ position: "relative", left: f + "px" }).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
        a.endPrev = !0;d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(d, b);
      });c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
        a.endCurrent = !0;c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(c, e);
      });
    }, clearTransStyle: function (a, b) {
      a.css({ position: "", left: "" }).removeClass(b);this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1);
    }, owlStatus: function () {
      this.owl = { userOptions: this.userOptions, baseElement: this.$elem, userItems: this.$userItems, owlItems: this.$owlItems, currentItem: this.currentItem, prevItem: this.prevItem, visibleItems: this.visibleItems, isTouch: this.browser.isTouch, browser: this.browser, dragDirection: this.dragDirection };
    }, clearEvents: function () {
      this.$elem.off(".owl owl mousedown.disableTextSelect");f(k).off(".owl owl");f(g).off("resize", this.resizer);
    }, unWrap: function () {
      0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove());this.clearEvents();this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"));
    }, destroy: function () {
      this.stop();g.clearInterval(this.checkVisible);this.unWrap();this.$elem.removeData();
    }, reinit: function (a) {
      a = f.extend({}, this.userOptions, a);this.unWrap();this.init(a, this.$elem);
    }, addItem: function (a, b) {
      var e;if (!a) return !1;if (0 === this.$elem.children().length) return this.$elem.append(a), this.setVars(), !1;this.unWrap();e = void 0 === b || -1 === b ? -1 : b;e >= this.$userItems.length || -1 === e ? this.$userItems.eq(-1).after(a) : this.$userItems.eq(e).before(a);this.setVars();
    }, removeItem: function (a) {
      if (0 === this.$elem.children().length) return !1;a = void 0 === a || -1 === a ? -1 : a;this.unWrap();this.$userItems.eq(a).remove();this.setVars();
    } };f.fn.owlCarousel = function (a) {
    return this.each(function () {
      if (!0 === f(this).data("owl-init")) return !1;f(this).data("owl-init", !0);var b = Object.create(l);b.init(a, this);f.data(this, "owlCarousel", b);
    });
  };f.fn.owlCarousel.options = { items: 5, itemsCustom: !1, itemsDesktop: [1199, 4], itemsDesktopSmall: [979, 3], itemsTablet: [768, 2], itemsTabletSmall: !1, itemsMobile: [479, 1], singleItem: !1, itemsScaleUp: !1, slideSpeed: 200, paginationSpeed: 800, rewindSpeed: 1E3, autoPlay: !1, stopOnHover: !1, navigation: !1, navigationText: ["prev", "next"], rewindNav: !0, scrollPerPage: !1, pagination: !0, paginationNumbers: !1, responsive: !0, responsiveRefreshRate: 200, responsiveBaseWidth: g, baseClass: "owl-carousel", theme: "owl-theme", lazyLoad: !1, lazyFollow: !0, lazyEffect: "fade", autoHeight: !1, jsonPath: !1, jsonSuccess: !1, dragBeforeAnimFinish: !0, mouseDrag: !0, touchDrag: !0, addClassActive: !1, transitionStyle: !1, beforeUpdate: !1, afterUpdate: !1, beforeInit: !1, afterInit: !1, beforeMove: !1, afterMove: !1, afterAction: !1, startDragging: !1, afterLazyLoad: !1 };
})(jQuery, window, document);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

/*!

 =========================================================
 * Now-ui-kit-pro - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/now-ui-kit-pro
 * Copyright 2017 Creative Tim (http://www.creative-tim.com)
  * View License on http://www.creative-tim.com/license

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

var transparent = true;
var big_image;

var transparentDemo = true;
var fixedTop = false;

var navbar_initialized,
    backgroundOrange = false,
    toggle_initialized = false;

$(document).ready(function () {
    //  Activate the Tooltips
    $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();

    //    Activate bootstrap-select
    if ($(".selectpicker").length != 0) {
        $(".selectpicker").selectpicker({
            iconBase: "now-ui-icons",
            tickIcon: "ui-1_check"
        });
    };

    if ($(window).width() >= 768) {
        big_image = $('.header[data-parallax="true"]');
        if (big_image.length != 0) {
            $(window).on('scroll', nowuiKit.checkScrollForParallax);
        }
    }

    // Activate Popovers and set color for popovers
    $('[data-toggle="popover"]').each(function () {
        color_class = $(this).data('color');
        $(this).popover({
            template: '<div class="popover popover-' + color_class + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        });
    });

    // Activate the image for the navbar-collapse
    nowuiKit.initNavbarImage();

    $navbar = $('.navbar[color-on-scroll]');
    scroll_distance = $navbar.attr('color-on-scroll') || 500;

    // Check if we have the class "navbar-color-on-scroll" then add the function to remove the class "navbar-transparent" so it will transform to a plain color.
    if ($('.navbar[color-on-scroll]').length != 0) {
        nowuiKit.checkScrollForTransparentNavbar();
        $(window).on('scroll', nowuiKit.checkScrollForTransparentNavbar);
    }

    $('.form-control').on("focus", function () {
        $(this).parent('.input-group').addClass("input-group-focus");
    }).on("blur", function () {
        $(this).parent(".input-group").removeClass("input-group-focus");
    });

    // Activate bootstrapSwitch
    $('.bootstrap-switch').each(function () {
        $this = $(this);
        data_on_label = $this.data('on-label') || '';
        data_off_label = $this.data('off-label') || '';

        $this.bootstrapSwitch({
            onText: data_on_label,
            offText: data_off_label
        });
    });

    if ($(window).width() >= 992) {
        big_image = $('.page-header-image[data-parallax="true"]');

        $(window).on('scroll', nowuiKit.checkScrollForParallax);
    }

    // Activate Carousel
    $('.carousel').carousel({
        interval: 4000
    });

    if ($(".datetimepicker").length != 0) {
        $('.datetimepicker').datetimepicker({
            icons: {
                time: "now-ui-icons tech_watch-time",
                date: "now-ui-icons ui-1_calendar-60",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'now-ui-icons arrows-1_minimal-left',
                next: 'now-ui-icons arrows-1_minimal-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }
        });

        $('.datepicker').datetimepicker({
            format: 'MM/DD/YYYY',
            icons: {
                time: "now-ui-icons tech_watch-time",
                date: "now-ui-icons ui-1_calendar-60",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'now-ui-icons arrows-1_minimal-left',
                next: 'now-ui-icons arrows-1_minimal-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }
        });

        $('.timepicker').datetimepicker({
            //          format: 'H:mm',    // use this format if you want the 24hours timepicker
            format: 'h:mm A', //use this format if you want the 12hours timpiecker with AM/PM toggle
            icons: {
                time: "now-ui-icons tech_watch-time",
                date: "now-ui-icons ui-1_calendar-60",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'now-ui-icons arrows-1_minimal-left',
                next: 'now-ui-icons arrows-1_minimal-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }
        });
    };
});

$(window).on('resize', function () {
    nowuiKit.initNavbarImage();
});

$(document).on('click', '.navbar-toggler', function () {
    $toggle = $(this);

    if (nowuiKit.misc.navbar_menu_visible == 1) {
        $('html').removeClass('nav-open');
        nowuiKit.misc.navbar_menu_visible = 0;
        $('#bodyClick').remove();
        setTimeout(function () {
            $toggle.removeClass('toggled');
        }, 550);
    } else {
        setTimeout(function () {
            $toggle.addClass('toggled');
        }, 580);
        div = '<div id="bodyClick"></div>';
        $(div).appendTo('body').click(function () {
            $('html').removeClass('nav-open');
            nowuiKit.misc.navbar_menu_visible = 0;
            setTimeout(function () {
                $toggle.removeClass('toggled');
                $('#bodyClick').remove();
            }, 550);
        });

        $('html').addClass('nav-open');
        nowuiKit.misc.navbar_menu_visible = 1;
    }
});

nowuiKit = {
    misc: {
        navbar_menu_visible: 0
    },

    checkScrollForTransparentNavbar: debounce(function () {
        if ($(document).scrollTop() > scroll_distance) {
            if (transparent) {
                transparent = false;
                $('.navbar[color-on-scroll]').removeClass('navbar-transparent');
            }
        } else {
            if (!transparent) {
                transparent = true;
                $('.navbar[color-on-scroll]').addClass('navbar-transparent');
            }
        }
    }, 17),

    initNavbarImage: function () {
        var $navbar = $('.navbar').find('.navbar-translate').siblings('.navbar-collapse');
        var background_image = $navbar.data('nav-image');

        if ($(window).width() < 991 || $('body').hasClass('burger-menu')) {
            if (background_image != undefined) {
                $navbar.css('background', "url('" + background_image + "')").removeAttr('data-nav-image').css('background-size', "cover").addClass('has-image');
            }
        } else if (background_image != undefined) {
            $navbar.css('background', "").attr('data-nav-image', '' + background_image + '').css('background-size', "").removeClass('has-image');
        }
    },

    initSliders: function () {
        // Sliders for demo purpose in refine cards section
        var slider = document.getElementById('sliderRegular');

        noUiSlider.create(slider, {
            start: 40,
            connect: [true, false],
            range: {
                min: 0,
                max: 100
            }
        });

        var slider2 = document.getElementById('sliderDouble');

        noUiSlider.create(slider2, {
            start: [20, 60],
            connect: true,
            range: {
                min: 0,
                max: 100
            }
        });
    },

    checkScrollForParallax: debounce(function () {

        oVal = $(window).scrollTop() / 3;
        big_image.css({
            'transform': 'translate3d(0,' + oVal + 'px,0)',
            '-webkit-transform': 'translate3d(0,' + oVal + 'px,0)',
            '-ms-transform': 'translate3d(0,' + oVal + 'px,0)',
            '-o-transform': 'translate3d(0,' + oVal + 'px,0)'
        });
    }, 6),

    initContactUsMap: function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
            styles: [{
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e9e9e9"
                }, {
                    "lightness": 17
                }]
            }, {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }, {
                    "lightness": 20
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 17
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 29
                }, {
                    "weight": 0.2
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 18
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 16
                }]
            }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }, {
                    "lightness": 21
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dedede"
                }, {
                    "lightness": 21
                }]
            }, {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#ffffff"
                }, {
                    "lightness": 16
                }]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "saturation": 36
                }, {
                    "color": "#333333"
                }, {
                    "lightness": 40
                }]
            }, {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f2f2f2"
                }, {
                    "lightness": 19
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#fefefe"
                }, {
                    "lightness": 20
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#fefefe"
                }, {
                    "lightness": 17
                }, {
                    "weight": 1.2
                }]
            }]
        };

        var map = new google.maps.Map(document.getElementById("contactUsMap"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
        });

        // To add the marker to the map, call setMap();
        marker.setMap(map);
    },

    initContactUs2Map: function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
            styles: [{
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e9e9e9"
                }, {
                    "lightness": 17
                }]
            }, {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }, {
                    "lightness": 20
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 17
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 29
                }, {
                    "weight": 0.2
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 18
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 16
                }]
            }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }, {
                    "lightness": 21
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dedede"
                }, {
                    "lightness": 21
                }]
            }, {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#ffffff"
                }, {
                    "lightness": 16
                }]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "saturation": 36
                }, {
                    "color": "#333333"
                }, {
                    "lightness": 40
                }]
            }, {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f2f2f2"
                }, {
                    "lightness": 19
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#fefefe"
                }, {
                    "lightness": 20
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#fefefe"
                }, {
                    "lightness": 17
                }, {
                    "weight": 1.2
                }]
            }]
        };

        var map = new google.maps.Map(document.getElementById("contactUs2Map"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
        });

        // To add the marker to the map, call setMap();
        marker.setMap(map);
    }

    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.

};function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var loadModalLoginContent = function (el) {
    $('#modal-login .modal-content').empty().load($(el).attr('href'), modalUpdate);
};

var loadModalRegistrationContent = function (el) {
    $('#modal-registration .modal-content').empty().load($(el).attr('href'), modalUpdate);
};

var loadModalResetContent = function (el) {
    $('#modal-reset .modal-content').empty().load($(el).attr('href'), modalUpdate);
};

var showModalLogin = function (event) {
    event.preventDefault();
    loadModalLoginContent(this);
    $('#modal-login').modal('show');
};

var showModalLoginFromRegistration = function (event) {
    event.preventDefault();
    loadModalLoginContent(this);
    $('#modal-registration').one('hidden.bs.modal', function () {
        $('#modal-login').modal('show');
    }).modal('hide');
};

var showModalLoginFromReset = function (event) {
    event.preventDefault();
    loadModalLoginContent(this);
    $('#modal-reset').one('hidden.bs.modal', function () {
        $('#modal-login').modal('show');
    }).modal('hide');
};

var showModalRegistration = function (event) {
    event.preventDefault();
    loadModalRegistrationContent(this);
    $('#modal-registration').modal('show');
};

var showModalRegistrationFromLogin = function (event) {
    event.preventDefault();
    loadModalRegistrationContent(this);
    $('#modal-login').one('hidden.bs.modal', function () {
        $('#modal-registration').modal('show');
    }).modal('hide');
};

var showModalRegistrationFromReset = function (event) {
    event.preventDefault();
    loadModalRegistrationContent(this);
    $('#modal-reset').one('hidden.bs.modal', function () {
        $('#modal-registration').modal('show');
    }).modal('hide');
};

var showModalReset = function (event) {
    event.preventDefault();
    loadModalResetContent(this);
    $('#modal-reset').modal('show');
};

var showModalResetFromLogin = function (event) {
    event.preventDefault();
    loadModalResetContent(this);
    $('#modal-login').one('hidden.bs.modal', function () {
        $('#modal-reset').modal('show');
    }).modal('hide');
};

var showModalResetFromRegistration = function (event) {
    event.preventDefault();
    loadModalResetContent(this);
    $('#modal-registration').one('hidden.bs.modal', function () {
        $('#modal-reset').modal('show');
    }).modal('hide');
};

$('#modal-login, #modal-registration, #modal-reset').on('shown.bs.modal', function () {
    $(this).find('input:first').focus();
});

var modalUpdate = function () {

    var forms = $('#modal-login form, #modal-registration form, #modal-reset form, #order-registration form');
    if (forms.length > 0) {
        forms.validate({
            submit: {
                settings: {
                    errorListClass: 'form-tooltip-error'
                },
                callback: {
                    onSubmit: function (node, formData) {
                        if (formData.subscribed == 1) {
                            formData.subscribed = true;
                        } else {
                            delete formData.subscribed;
                        }
                        $.post($(node).attr('action'), formData, function (data) {
                            if (data == 'Ok') {
                                location.reload();
                            } else if (data.indexOf('http') == 0) {
                                location.href = data;
                            } else {
                                $(node).parent().parent().html(data);
                                modalUpdate();
                            }
                        }.bind(node));
                        return false;
                    },
                    onValidate: function (node) {
                        $('.form-tooltip-error').remove();
                    }
                }
            }
        });
    }

    $('.show-modal-registration').unbind("click");
    $('.show-modal-registration').click(showModalRegistration);
    $('.show-modal-registration-from-login').unbind("click");
    $('.show-modal-registration-from-login').click(showModalRegistrationFromLogin);
    $('.show-modal-registration-from-reset').unbind("click");
    $('.show-modal-registration-from-reset').click(showModalRegistrationFromReset);
    $('.show-modal-login').unbind("click");
    $('.show-modal-login').click(showModalLogin);
    $('.show-modal-login-from-registration').unbind("click");
    $('.show-modal-login-from-registration').click(showModalLoginFromRegistration);
    $('.show-modal-login-from-reset').unbind("click");
    $('.show-modal-login-from-reset').click(showModalLoginFromReset);
    $('.show-modal-reset').unbind("click");
    $('.show-modal-reset').click(showModalReset);
    $('.show-modal-reset-from-login').unbind("click");
    $('.show-modal-reset-from-login').click(showModalResetFromLogin);
    $('.show-modal-reset-from-registration').unbind("click");
    $('.show-modal-reset-from-registration').click(showModalResetFromRegistration);

    $('.form-control').on("focus", function () {
        $(this).parent('.input-group').addClass("input-group-focus");
    }).on("blur", function () {
        $(this).parent(".input-group").removeClass("input-group-focus");
    }).on("keydown", function () {
        $('#form_error').hide();
    });
};

$(document).ready(function () {
    modalUpdate();
});

/***/ }),
/* 16 */
/***/ (function(module, exports) {

var lazyImages = document.querySelectorAll('.lazy-image');
var observer;

if (!('IntersectionObserver' in window)) {
    for (var i = 0; i < lazyImages.length; i++) {
        loadImage(lazyImages[i]);
    }
} else {
    observer = new IntersectionObserver(onIntersection, {
        rootMargin: '50px 0px',
        threshold: 0.01
    });
    for (var i = 0; i < lazyImages.length; i++) {
        observer.observe(lazyImages[i]);
    }
}

function loadImage(image) {
    if (image.getAttribute('data-srcset')) {
        image.srcset = image.getAttribute('data-srcset');
    }

    if (image.getAttribute('data-src')) {
        image.src = image.getAttribute('data-src');
    }
}

function onIntersection(entries) {
    for (var i = 0; i < entries.length; i++) {
        if (entries[i].intersectionRatio > 0) {
            loadImage(entries[i].target);
            observer.unobserve(entries[i].target);
        }
    }
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_jquery_mask_min__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_jquery_mask_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vendor_jquery_mask_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vendor_wNumb__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vendor_wNumb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vendor_wNumb__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vendor_nouislider__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vendor_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__vendor_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payment__ = __webpack_require__(1);





// Currency

var currencyCode = $('#order-description #selected-currency-code').text();
var currencyRate = 1;
var currencySymbol = '$';

function setCurrency(code) {
    currencyCode = code;
    $('#order-description #selected-currency-code').text(currencyCode);
    lookupRateAndSymbol();
    updateSkillRatingOrderSummaryAndPrice();
    updateGames();
    updateMaintain();
    updatePlacement();
    //updateTop500();
    var d = new Date();
    d.setTime(d.getTime() + 20 * 356 * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = 'currency=' + currencyCode + ';' + expires + '; path=/';
}

$('.section-purchase').on('click', '#order-description .dropdown-item', function (e) {
    $('#order-description .dropdown .dropdown-toggle').trigger('click');
    setCurrency($(this).text());
    e.preventDefault();
});

function lookupRateAndSymbol() {
    $('#order-description .dropdown-item').each(function () {
        if ($(this).text() == currencyCode) {
            currencyRate = parseFloat($(this).attr('data-currency-rate'));
            currencySymbol = $(this).attr('data-currency-symbol');
        }
    });
    $('.hidden-currency').val(currencyCode);
}
lookupRateAndSymbol();

function applyCurrency() {
    amount = amount * currencyRate;
}

// Discounts

var discountPercent;

function updateDiscount() {
    discountPercent = parseInt($('.order-discount').attr('data-discount-percent'));
}

$('.order-discount-container').on('click', '.order-discount-add', function (event) {
    event.preventDefault();
    $(this).prop('disabled', true);
    var form = $(this).parents('form');
    $.ajax({
        method: 'POST',
        url: form.attr('action'),
        data: form.serialize()
    }).done(function (data) {
        $('.order-discount-container').html(data);
        updateDiscount();
        updateSkillRatingOrderSummaryAndPrice();
        updateGames();
        updateMaintain();
        updatePlacement();
        // TODO: Top500
        //        updateTop500();
        $('.order-discount').find('i').tooltip();
    });
});

$('.order-discount-container').on('click', '.order-discount-remove', function (event) {
    event.preventDefault();
    $.ajax({
        method: 'POST',
        url: $(this).attr('href')
    }).done(function (data) {
        $('.order-discount-container').html(data);
        updateDiscount();
        updateSkillRatingOrderSummaryAndPrice();
        updateGames();
        updateMaintain();
        updatePlacement();
        // TODO: Top500
        //        updateTop500();
        $('.order-discount').find('i').tooltip();
    });
});

$('.order-discount-container').on('input', '.discount-code', function () {
    $(this).val($(this).val().toUpperCase());
});

function applyDiscount() {
    amountWithDiscount = amount;
    if (discountPercent > 0) {
        amountWithDiscount = amount * (100 - discountPercent) / 100;
    }
}

// Duo and Stream

var isDuo = false;
var isStream = false;

function duoSwitch() {
    isDuo = !isDuo;
    isStream = false;
    $('input.duo-switch').prop('checked', isDuo);
    $('input.stream-switch').prop('checked', isStream);
}

function streamSwitch() {
    isDuo = false;
    isStream = !isStream;
    $('input.duo-switch').prop('checked', isDuo);
    $('input.stream-switch').prop('checked', isStream);
}

// Purchase Skill Rating

var currentSkillRating = -1;
var desiredSkillRating = -1;

var showDesiredSkillRatingTooltip = true;

var skillRatingPrices;
var skillRatingMax;
var streamPercent;

var icons = [];

var amount;
var amountWithDiscount;

// Detailed Skill Rating Prices

var skillRatingPricesDetailed;
function generateSkillRatingPricesDetailed() {
    skillRatingPricesDetailed = new Array(skillRatingPrices.length * 50);
    for (var i = 0; i < skillRatingPrices.length; i++) {
        var priceAdded = 0.0;
        var priceTotal = skillRatingPrices[i];
        for (var j = 0; j < 50; j++) {
            var price = Math.floor(priceTotal * 100 / 50 * (j + 1) - priceAdded);
            skillRatingPricesDetailed[i * 50 + j] = price / 100;
            priceAdded += price;
        }
    }
}

function updateSkillRatingIcon(elem, skillRating) {
    var rank = 0;
    if (skillRating >= 0) {
        if (skillRating < 1500) {
            rank = 1;
        } else if (skillRating < 2000) {
            rank = 2;
        } else if (skillRating < 2500) {
            rank = 3;
        } else if (skillRating < 3000) {
            rank = 4;
        } else if (skillRating < 3500) {
            rank = 5;
        } else if (skillRating < 4000) {
            rank = 6;
        } else if (skillRating <= 5000) {
            rank = 7;
        }
    }
    var src = elem.attr('src');
    elem.attr('src', icons[rank]);
}

function updateSkillRatingTooltips() {
    var skillRatingTab = $('#tab-skill-rating');
    if (skillRatingTab.length <= 0 || !skillRatingTab.hasClass('show')) return;
    var currentSkillRatingInput = $('#current-skill-rating');
    var desiredSkillRatingInput = $('#desired-skill-rating');
    if (currentSkillRating < 0) {
        currentSkillRatingInput.focus();
        currentSkillRatingInput.tooltip('show');
        showDesiredSkillRatingTooltip = true;
        desiredSkillRatingInput.tooltip('hide');
    } else {
        currentSkillRatingInput.tooltip('hide');
        if (showDesiredSkillRatingTooltip && desiredSkillRating >= 0) {
            desiredSkillRatingInput.tooltip('show');
        } else {
            desiredSkillRatingInput.tooltip('hide');
        }
    }
}

function skillRatingSliderPips() {
    var values = [0, 1500, 2000, 2500, 3000, 3500, 4000];
    var result = [];
    for (var i = 0; i < values.length; i++) {
        if (values[i] >= currentSkillRating && values[i] < skillRatingMax) {
            result.push(values[i]);
        }
    }
    if (skillRatingMax > 4400) {
        result.push(skillRatingMax);
    }
    return result;
}

function updateSkillRatingSlider() {
    var slider = document.getElementById('desired-skill-rating-slider');
    if (typeof slider.noUiSlider != 'undefined' && slider.noUiSlider != null) {
        slider.noUiSlider.destroy();
    }
    var current = currentSkillRating > 0 ? currentSkillRating : 0;
    var desired = desiredSkillRating > 0 ? desiredSkillRating : 0;
    var min = Math.ceil((current + 1) / 50) * 50;
    var range = {
        'min': [current]
    };
    var percent = Math.ceil((min - current) / (skillRatingMax - current) * 100);
    if (current >= 0 && desired >= 0) {
        range['' + percent + '%'] = [min, 50];
    }
    range['max'] = skillRatingMax;
    __WEBPACK_IMPORTED_MODULE_2__vendor_nouislider___default.a.create(slider, {
        start: [current, desired],
        connect: [false, true, false],
        range: range,
        step: 50,
        tooltips: true,
        format: __WEBPACK_IMPORTED_MODULE_1__vendor_wNumb___default()({
            decimals: 0
        }),
        pips: {
            mode: 'values',
            values: skillRatingSliderPips(),
            density: 1000
        }
    });
    if (currentSkillRating < 0 || desiredSkillRating < 0) {
        slider.setAttribute('disabled', true);
    } else {
        slider.removeAttribute('disabled');
        var origins = slider.getElementsByClassName('noUi-origin');
        origins[0].setAttribute('disabled', true);
        slider.noUiSlider.on('update', function (values, handle) {
            if (values[1] - values[0] < 50) {
                slider.noUiSlider.set([null, Math.ceil((parseInt(values[0]) + 50) / 50) * 50]);
            } else {
                var oldDesiredSkillRating = parseInt($('#desired-skill-rating').val());
                var newDesiredSkillRating = parseInt(values[1]);
                if (oldDesiredSkillRating !== newDesiredSkillRating) {
                    $('#desired-skill-rating').val(newDesiredSkillRating).blur();
                    showDesiredSkillRatingTooltip = false;
                    desiredSkillRatingChanged(false);
                }
            }
        });
    }
}

function currentSkillRatingChanged() {
    var skillRatingTab = $('#tab-skill-rating');
    if (skillRatingTab.length <= 0 || !skillRatingTab.hasClass('show')) return;
    var currentSkillRatingInput = $('#current-skill-rating');
    var desiredSkillRatingInput = $('#desired-skill-rating');
    if (currentSkillRating >= skillRatingMax - 50) {
        currentSkillRating = skillRatingMax - 50;
        currentSkillRatingInput.val(currentSkillRating);
    }
    updateSkillRatingIcon($('#current-skill-rating-icon'), currentSkillRating);
    if (currentSkillRating < 0) {
        desiredSkillRating = -1;
        desiredSkillRatingInput.val('');
    } else if (desiredSkillRating <= currentSkillRating) {
        if (currentSkillRating < 1400) {
            desiredSkillRating = 1500;
        } else if (currentSkillRating < 1900) {
            desiredSkillRating = 2000;
        } else if (currentSkillRating < 2400) {
            desiredSkillRating = 2500;
        } else if (currentSkillRating < 2900) {
            desiredSkillRating = 3000;
        } else if (currentSkillRating < 3400) {
            desiredSkillRating = 3500;
        } else if (currentSkillRating <= 3900) {
            desiredSkillRating = 4000;
        } else {
            desiredSkillRating = skillRatingMax;
        }
        desiredSkillRatingInput.val(desiredSkillRating);
    }
    var desiredSkillRatingMinus = $('#desired-skill-rating-minus');
    var desiredSkillRatingPlus = $('#desired-skill-rating-plus');
    if (desiredSkillRating < 0) {
        desiredSkillRatingMinus.prop('disabled', true);
        desiredSkillRatingInput.prop('disabled', true);
        desiredSkillRatingPlus.prop('disabled', true);
    } else {
        desiredSkillRatingMinus.prop('disabled', false);
        desiredSkillRatingInput.prop('disabled', false);
        desiredSkillRatingPlus.prop('disabled', false);
        var min = (Math.ceil(currentSkillRating / 50) + 1) * 50;
        if (desiredSkillRating < min) {
            desiredSkillRating = min;
            $('#desired-skill-rating').val(desiredSkillRating);
        }
        currentSkillRatingInput.blur();
    }
    updateSkillRatingSlider();
    updateSkillRatingIcon($('#desired-skill-rating-icon'), desiredSkillRating);
    updateSkillRatingTooltips();
    updateSkillRatingOrderSummaryAndPrice();
}

function desiredSkillRatingChanged(updateSlider) {
    var skillRatingTab = $('#tab-skill-rating');
    if (skillRatingTab.length <= 0 || !skillRatingTab.hasClass('show')) return;
    showDesiredSkillRatingTooltip = false;
    updateSlider = typeof updateSlider !== 'undefined' ? updateSlider : true;
    var desiredSkillRatingInput = $('#desired-skill-rating');
    desiredSkillRating = parseInt(desiredSkillRatingInput.val());
    updateSkillRatingMax();
    if (isNaN(desiredSkillRating) || desiredSkillRating <= currentSkillRating + 50) {
        desiredSkillRating = (Math.ceil(currentSkillRating / 50) + 1) * 50;
    }
    if (desiredSkillRating % 50 > 0) {
        desiredSkillRating = (Math.ceil(desiredSkillRating / 50) + 1) * 50;
    }
    if (desiredSkillRating > skillRatingMax) {
        desiredSkillRating = skillRatingMax;
        currentSkillRatingChanged();
    }
    if (desiredSkillRating > 0) {
        desiredSkillRatingInput.val(desiredSkillRating);
    } else {
        desiredSkillRatingInput.val('');
    }
    updateSkillRatingIcon($('#desired-skill-rating-icon'), desiredSkillRating);
    if (updateSlider) {
        updateSkillRatingSlider();
    }
    updateSkillRatingOrderSummaryAndPrice();
    updateSkillRatingTooltips();
}

function updateSkillRatingMax() {
    if (isDuo) {
        skillRatingMax = parseInt($('#tab-skill-rating').attr('data-duo-skill-rating-max'));
    } else {
        skillRatingMax = parseInt($('#tab-skill-rating').attr('data-skill-rating-max'));
    }
}

function calculateSkillRatingAmount(current, desired) {
    var amount = 0;
    for (var i = current; i < desired; i++) {
        amount += skillRatingPricesDetailed[i];
    }
    return amount;
}

function updateSkillRatingOrderSummaryAndPrice() {
    var skillRatingTab = $('#tab-skill-rating');
    if (skillRatingTab.length <= 0 || !skillRatingTab.hasClass('show')) return;
    updateSkillRatingMax();
    if (desiredSkillRating > skillRatingMax) {
        desiredSkillRating = skillRatingMax;
        desiredSkillRatingChanged();
        currentSkillRatingChanged();
    }
    if (currentSkillRating < 0 || desiredSkillRating < 0) {
        $('#order-description-container').html($('#order-description'));
        skillRatingTab.find('.order-description-container').html('&nbsp;');
        skillRatingTab.find('.purchase-button').prop('disabled', true);
    } else {
        amount = calculateSkillRatingAmount(currentSkillRating, desiredSkillRating);
        var form = $('#form-skill-rating');
        if (isDuo) {
            form.find('.hidden-category').val('DuoSkillRating');
            form.find('.hidden-stream').val('false');
            amount = amount * 1.6;
        } else {
            form.find('.hidden-category').val('SkillRating');
            if (isStream) {
                form.find('.hidden-stream').val('true');
                amount *= (100 + streamPercent) / 100;
            } else {
                form.find('.hidden-stream').val('false');
            }
        }
        applyCurrency();
        applyDiscount();
        form.find('.hidden-current').val(currentSkillRating);
        form.find('.hidden-desired').val(desiredSkillRating);
        form.find('.hidden-amount').val(amountWithDiscount.toFixed(2));
        $('#order-description-text').html((isDuo ? 'Duo ' : '') + 'Skill Rating boost from&nbsp;<b>' + currentSkillRating + '</b>&nbsp;to&nbsp;<b>' + desiredSkillRating + '</b>&nbsp;or more for&nbsp;');
        var descriptionAmount = '';
        if (amount != amountWithDiscount) {
            descriptionAmount += '<span style="text-decoration:line-through">&nbsp;' + currencySymbol + amount.toFixed(2) + '&nbsp;</span>&nbsp;';
        }
        descriptionAmount += '<b>' + currencySymbol + amountWithDiscount.toFixed(2) + '</b>&nbsp;';
        $('#order-description-amount').html(descriptionAmount);
        skillRatingTab.find('.order-description-container').html($('#order-description'));
        skillRatingTab.find('.purchase-button').prop('disabled', false);
    }
}

var plusMinusTimeout;
var plusMinusInterval;

function desiredSkillRatingDecrease() {
    if (desiredSkillRating >= 0) {
        desiredSkillRating -= 50;
        $('#desired-skill-rating').val(desiredSkillRating);
    }
    showDesiredSkillRatingTooltip = false;
    desiredSkillRatingChanged();
}

function desiredSkillRatingIncrease() {
    if (desiredSkillRating >= 0) {
        desiredSkillRating += 50;
        $('#desired-skill-rating').val(desiredSkillRating);
    }
    showDesiredSkillRatingTooltip = false;
    desiredSkillRatingChanged();
}

if ($('#tab-skill-rating').length) {

    skillRatingPrices = $('#tab-skill-rating').attr('data-prices').split(',');
    generateSkillRatingPricesDetailed();
    skillRatingMax = parseInt($('#tab-skill-rating').attr('data-skill-rating-max'));
    streamPercent = parseInt($('#tab-skill-rating').attr('data-stream-percent'));
    for (var i = 0; i <= 8; i++) {
        icons[i] = $('#tab-skill-rating').attr('data-icon-rank-' + i);
    }
    updateDiscount();

    $('#current-skill-rating, #desired-skill-rating').mask('0000');

    $('#current-skill-rating').on('input', function () {
        currentSkillRating = parseInt($(this).val());
        if (isNaN(currentSkillRating)) {
            currentSkillRating = -1;
        }
        if (currentSkillRating < 0 || currentSkillRating >= 1000) {
            currentSkillRatingChanged();
        }
        if (desiredSkillRating >= 0) {
            updateSkillRatingOrderSummaryAndPrice();
        }
        updateSkillRatingTooltips();
    }).on('change', currentSkillRatingChanged);

    $('#desired-skill-rating-minus').mousedown(function () {
        desiredSkillRatingDecrease();
        plusMinusTimeout = setTimeout(function () {
            plusMinusInterval = setInterval(function () {
                desiredSkillRatingDecrease();
            }, 125);
        }, 300);
    }).mouseup(function () {
        clearTimeout(plusMinusTimeout);
        clearInterval(plusMinusInterval);
    });
    $('#desired-skill-rating-plus').mousedown(function () {
        desiredSkillRatingIncrease();
        plusMinusTimeout = setTimeout(function () {
            plusMinusInterval = setInterval(function () {
                desiredSkillRatingIncrease();
            }, 125);
        }, 300);
    }).mouseup(function () {
        clearTimeout(plusMinusTimeout);
        clearInterval(plusMinusInterval);
    });

    $('#desired-skill-rating').on('input', function () {
        showDesiredSkillRatingTooltip = false;
        if ($(this).val().length >= 4) {
            desiredSkillRatingChanged();
            $('#desired-skill-rating').blur();
        } else {
            updateSkillRatingTooltips();
        }
    }).on('change', desiredSkillRatingChanged);

    updateSkillRatingSlider();

    if ($('#current-skill-rating').val().length > 0) {
        showDesiredSkillRatingTooltip = false;
        currentSkillRating = parseInt($('#current-skill-rating').val());
        desiredSkillRating = parseInt($('#desired-skill-rating').val());
        currentSkillRatingChanged();
        desiredSkillRatingChanged();
    } else {
        updateSkillRatingTooltips();
    }

    $('#duo-skill-rating-group').click(function (event) {
        event.preventDefault();
        duoSwitch();
        if (desiredSkillRating > 0) {
            desiredSkillRatingChanged();
        }
    });

    $('#stream-skill-rating-group').click(function (event) {
        event.preventDefault();
        streamSwitch();
        if (desiredSkillRating > 0) {
            desiredSkillRatingChanged();
        }
    });

    $('#tab-skill-rating-link').on('show.bs.tab', function () {
        var currentSkillRatingInput = $('#current-skill-rating');
        if (currentSkillRating >= 0) {
            if (currentSkillRating >= skillRatingMax) {
                currentSkillRating = skillRatingMax - 1;
            }
            currentSkillRatingInput.val(currentSkillRating);
        } else {
            currentSkillRatingInput.val('');
        }
        $('#tab-skill-rating-faq-link').tab('show');
    }).on('shown.bs.tab', function () {
        currentSkillRatingChanged();
        updateSkillRatingTooltips();
    });

    $('#tab-skill-rating-link').on('hide.bs.tab', function () {
        $('#current-skill-rating').tooltip('hide');
        $('#desired-skill-rating').tooltip('hide');
    });

    if (window.location.hash) {
        var hash = window.location.hash.substring(1);
        if (hash == 'duo') {
            $('#duo-skill-rating-group input').prop('checked', true);
            isDuo = true;
        } else if (hash == 'placement') {
            setTimeout(function () {
                $('#tab-placement-link').click();
            }, 1);
        } else if (hash == 'skill') {
            setTimeout(function () {
                $('#tab-skill-rating-link').click();
            }, 1);
        }
    }

    $('#tab-skill-rating-link-from-games').click(function (e) {
        e.preventDefault();
        $('#tab-skill-rating-link').click();
    });

    $('#tab-maintain-link-from-games').click(function (e) {
        e.preventDefault();
        $('#tab-maintain-link').click();
    });
}

// Purchase Games

var games = 10;

var gamesScale;
var gamesPrices;

function updateGamesSlider() {
    var slider = document.getElementById('games-slider');
    if (typeof slider.noUiSlider != 'undefined' && slider.noUiSlider != null) {
        slider.noUiSlider.destroy();
    }
    __WEBPACK_IMPORTED_MODULE_2__vendor_nouislider___default.a.create(slider, {
        start: games,
        connect: [true, false],
        range: {
            'min': 1,
            'max': 20
        },
        step: 1,
        tooltips: true,
        format: __WEBPACK_IMPORTED_MODULE_1__vendor_wNumb___default()({
            decimals: 0
        }),
        pips: {
            mode: 'steps',
            filter: function filter5(value) {
                if (value === 1) return 1;
                return value % 5 ? 0 : 1;
            },
            density: 1000
        }
    });
    slider.noUiSlider.on('update', function (values, handle) {
        games = parseInt(values[handle]);
        $('#games').val(games);
        updateGames();
    });
}

function updateGames() {
    var gamesTab = $('#tab-games');
    if (gamesTab.length <= 0 || !gamesTab.hasClass('show')) return;
    var duoCurrentSkillRatingInput = $('#games-current-skill-rating');
    if (currentSkillRating >= 0) {
        var tmp = currentSkillRating;
        amount = 0;
        for (var i = 1; i <= games; i++) {
            if (tmp >= 5000) {
                tmp = 4999;
            }
            amount += parseFloat(gamesPrices[Math.floor(tmp / 50)]);
            tmp += gamesScale;
        }
        var form = $('#form-games');
        if (isDuo) {
            form.find('.hidden-category').val('DuoGames');
            form.find('.hidden-stream').val('false');
            amount *= 1.2;
        } else {
            form.find('.hidden-category').val('Games');
            if (isStream) {
                form.find('.hidden-stream').val('true');
                amount *= (100 + streamPercent) / 100;
            } else {
                form.find('.hidden-stream').val('false');
            }
        }
        applyCurrency();
        applyDiscount();
        form.find('.hidden-current').val(currentSkillRating);
        form.find('.hidden-games').val(games);
        form.find('.hidden-amount').val(amountWithDiscount.toFixed(2));
        if (isDuo) {
            $('#order-description-text').html('Get&nbsp;<b>' + games + ' Duo Queue Game' + (games > 1 ? 's' : '') + '</b>&nbsp;boost for&nbsp;');
        } else {
            $('#order-description-text').html('Get&nbsp;<b>' + games + ' Solo Game' + (games > 1 ? 's' : '') + '</b>&nbsp;boost for&nbsp;');
        }
        var descriptionAmount = '';
        if (amount != amountWithDiscount) {
            descriptionAmount += '<span style="text-decoration:line-through">&nbsp;' + currencySymbol + amount.toFixed(2) + '&nbsp;</span>&nbsp;';
        }
        descriptionAmount += '<b>' + currencySymbol + amountWithDiscount.toFixed(2) + '</b>&nbsp;';
        $('#order-description-amount').html(descriptionAmount);
        gamesTab.find('.order-description-container').html($('#order-description'));
        gamesTab.find('.purchase-button').prop('disabled', false);
    } else {
        duoCurrentSkillRatingInput.tooltip('show');
        $('#order-description-container').html($('#order-description'));
        gamesTab.find('.order-description-container').html('&nbsp;');
        gamesTab.find('.purchase-button').prop('disabled', true);
    }
    updateSkillRatingIcon($('#games-current-skill-rating-icon'), currentSkillRating);
}

function gamesDecrease() {
    if (games > 1) {
        games--;
        $('#games').val(games);
        updateGamesSlider();
    }
    updateGames();
}

function gamesIncrease() {
    if (games < 20) {
        games++;
        $('#games').val(games);
        updateGamesSlider();
    }
    updateGames();
}

if ($('#tab-games').length) {

    gamesScale = parseInt($('#tab-games').attr('data-games-scale'));
    gamesPrices = $('#tab-games').attr('data-prices').split(',');

    $('#games-current-skill-rating').mask('0000');

    $('#games-current-skill-rating').on('input', function () {
        var newCurrentSkillRating = parseInt($(this).val());
        if (isNaN(newCurrentSkillRating)) {
            $('#games-current-skill-rating').tooltip('show');
            currentSkillRating = -1;
            updateGames();
        } else {
            $('#games-current-skill-rating').tooltip('hide');
            if (newCurrentSkillRating > 5000) {
                newCurrentSkillRating = 5000;
                $('#games-current-skill-rating').val(newCurrentSkillRating);
            }
            currentSkillRating = newCurrentSkillRating;
            if (currentSkillRating >= 0 || newCurrentSkillRating >= 1000) {
                updateGames();
            }
        }
        updateGames();
    }).on('blur', function () {
        currentSkillRating = parseInt($(this).val());
        if (isNaN(currentSkillRating)) {
            currentSkillRating = -1;
        }
        updateGames();
    }).on('change', function () {
        currentSkillRating = parseInt($(this).val());
        if (isNaN(currentSkillRating)) {
            currentSkillRating = -1;
        }
        updateGames();
    });

    $('#games').on('input', function () {
        var newGames = parseInt($('#games').val());
        if (!isNaN(newGames)) {
            games = parseInt($('#games').val());
            if (games > 20) {
                games = 20;
            } else if (games < 1) {
                games = 1;
            }
            $('#games').val(games);
            updateGamesSlider();
        }
        updateGames();
    }).on('change', function () {
        updateGames();
    }).on('blur', function () {
        if (isNaN(parseInt($('#games').val()))) {
            $('#games').val(games);
        }
    });

    $('#games-minus').mousedown(function () {
        gamesDecrease();
        plusMinusTimeout = setTimeout(function () {
            plusMinusInterval = setInterval(function () {
                gamesDecrease();
            }, 125);
        }, 300);
    }).mouseup(function () {
        clearTimeout(plusMinusTimeout);
        clearInterval(plusMinusInterval);
    });
    $('#games-plus').mousedown(function () {
        gamesIncrease();
        plusMinusTimeout = setTimeout(function () {
            plusMinusInterval = setInterval(function () {
                gamesIncrease();
            }, 125);
        }, 300);
    }).mouseup(function () {
        clearTimeout(plusMinusTimeout);
        clearInterval(plusMinusInterval);
    });

    updateGamesSlider();

    $('#duo-games-group').click(function (event) {
        event.preventDefault();
        duoSwitch();
        updateGames();
    });

    $('#stream-games-group').click(function (event) {
        event.preventDefault();
        streamSwitch();
        updateGames();
    });

    $('#tab-games-link').on('show.bs.tab', function () {
        var duoCurrentSkillRatingInput = $('#games-current-skill-rating');
        if (currentSkillRating >= 0) {
            duoCurrentSkillRatingInput.val(currentSkillRating);
        } else {
            duoCurrentSkillRatingInput.val('');
        }
        $('#games').val(games);
        $('#tab-games-faq-link').tab('show');
    }).on('shown.bs.tab', function () {
        if (currentSkillRating < 0) {
            $('#games-current-skill-rating').focus();
        } else {
            $('#games-current-skill-rating').tooltip('hide');
        }
        updateGames();
    });

    $('#tab-games-link').on('hide.bs.tab', function () {
        $('#games-current-skill-rating').tooltip('hide');
    });
}

// Purchase Maintain

var maintainGames = 1;
var maintainWeeksLeft = 1;

var maintainPrices;

function updateMaintainSlider() {
    var slider = document.getElementById('maintain-games-slider');
    if (typeof slider.noUiSlider != 'undefined' && slider.noUiSlider != null) {
        slider.noUiSlider.destroy();
    }
    __WEBPACK_IMPORTED_MODULE_2__vendor_nouislider___default.a.create(slider, {
        start: maintainGames,
        connect: [true, false],
        range: {
            'min': 1,
            'max': maintainWeeksLeft > 4 ? maintainWeeksLeft : 4
        },
        step: 1,
        tooltips: true,
        format: __WEBPACK_IMPORTED_MODULE_1__vendor_wNumb___default()({
            decimals: 0
        }),
        pips: {
            mode: 'steps',
            filter: function filter5(value) {
                return 1;
            },
            density: 1000
        }
    });
    slider.noUiSlider.on('update', function (values, handle) {
        maintainGames = parseInt(values[handle]);
        $('#maintain-games').val(maintainGames);
        updateMaintain();
    });
}

function updateMaintain() {
    var maintainTab = $('#tab-maintain');
    if (maintainTab.length <= 0 || !maintainTab.hasClass('show')) return;
    var maintainCurrentSkillRatingInput = $('#maintain-current-skill-rating');
    if (currentSkillRating >= 3001) {
        amount = parseFloat(maintainPrices[Math.floor((currentSkillRating - 3000) / 100)]) * maintainGames;
        var form = $('#form-maintain');
        if (isStream) {
            form.find('.hidden-stream').val('true');
            amount *= (100 + streamPercent) / 100;
        } else {
            form.find('.hidden-stream').val('false');
        }
        applyCurrency();
        applyDiscount();
        form.find('.hidden-current').val(currentSkillRating);
        form.find('.hidden-games').val(maintainGames);
        form.find('.hidden-amount').val(amountWithDiscount.toFixed(2));
        var weeksWord = 'weeks';
        if (maintainGames == 1) weeksWord = 'week';
        $('#order-description-text').html('<b>' + maintainGames + ' ' + weeksWord + '</b>&nbsp;of rating maintenance at&nbsp;<b>' + currentSkillRating + ' SR</b>&nbsp;for&nbsp;');
        var descriptionAmount = '';
        if (amount != amountWithDiscount) {
            descriptionAmount += '<span style="text-decoration:line-through">&nbsp;' + currencySymbol + amount.toFixed(2) + '&nbsp;</span>&nbsp;';
        }
        descriptionAmount += '<b>' + currencySymbol + amountWithDiscount.toFixed(2) + '</b>&nbsp;';
        $('#order-description-amount').html(descriptionAmount);
        maintainTab.find('.order-description-container').html($('#order-description'));
        maintainTab.find('.purchase-button').prop('disabled', false);
    } else {
        if (currentSkillRating < 0) {
            maintainCurrentSkillRatingInput.tooltip('show');
        }
        $('#order-description-container').html($('#order-description'));
        maintainTab.find('.order-description-container').html('&nbsp;');
        maintainTab.find('.purchase-button').prop('disabled', true);
    }
    updateSkillRatingIcon($('#maintain-current-skill-rating-icon'), currentSkillRating);
}

function maintainGamesDecrease() {
    if (maintainGames > 1) {
        maintainGames--;
        $('#maintain-games').val(maintainGames);
        updateMaintainSlider();
    }
    updateMaintain();
}

function maintainGamesIncrease() {
    if (maintainGames < maintainWeeksLeft) {
        maintainGames++;
        $('#maintain-games').val(maintainGames);
        updateMaintainSlider();
    }
    updateMaintain();
}

if ($('#tab-maintain').length) {

    maintainPrices = $('#tab-maintain').attr('data-prices').split(',');
    maintainWeeksLeft = parseFloat($('#tab-maintain').attr('data-weeks-left'));
    if (maintainWeeksLeft < 4) {
        maintainWeeksLeft = 4;
    }
    if (maintainWeeksLeft > 9) {
        maintainWeeksLeft = 9;
    }

    $('#maintain-current-skill-rating').mask('0000');

    $('#maintain-current-skill-rating').on('input', function () {
        var newCurrentSkillRating = parseInt($(this).val());
        if (isNaN(newCurrentSkillRating)) {
            $('#maintain-current-skill-rating').tooltip('show');
            currentSkillRating = -1;
            updateMaintain();
        } else {
            $('#maintain-current-skill-rating').tooltip('hide');
            if (newCurrentSkillRating > 5000) {
                newCurrentSkillRating = 5000;
                $('#maintain-current-skill-rating').val(newCurrentSkillRating);
            }
            if (newCurrentSkillRating < 0) {
                newCurrentSkillRating = 0;
                $('#maintain-current-skill-rating').val(newCurrentSkillRating);
            }
            if (newCurrentSkillRating < 1000) {
                currentSkillRating = 0;
                updateMaintain();
            }
            if (newCurrentSkillRating >= 1000) {
                if (newCurrentSkillRating < 3001) {
                    newCurrentSkillRating = 3001;
                    $('#maintain-current-skill-rating').val(newCurrentSkillRating);
                }
                currentSkillRating = newCurrentSkillRating;
                updateMaintain();
            }
        }
        updateMaintain();
    }).on('blur', function () {
        currentSkillRating = parseInt($(this).val());
        if (isNaN(currentSkillRating)) {
            currentSkillRating = -1;
        } else if (currentSkillRating < 3001) {
            currentSkillRating = 3001;
            $('#maintain-current-skill-rating').val(currentSkillRating);
        }
        updateMaintain();
    }).on('change', function () {
        currentSkillRating = parseInt($(this).val());
        if (isNaN(currentSkillRating)) {
            currentSkillRating = -1;
        }
        updateMaintain();
    });

    $('#maintain-games').on('input', function () {
        var newMaintainGames = parseInt($('#maintain-games').val());
        if (!isNaN(newMaintainGames)) {
            maintainGames = newMaintainGames;
            if (maintainGames > maintainWeeksLeft) {
                maintainGames = maintainWeeksLeft;
            } else if (maintainGames < 1) {
                maintainGames = 1;
            }
            $('#maintain-games').val(maintainGames);
            updateMaintainSlider();
        }
        updateMaintain();
    }).on('change', function () {
        updateMaintain();
    }).on('blur', function () {
        if (isNaN(parseInt($('#maintain-games').val()))) {
            $('#maintain-games').val(maintainGames);
        }
    });

    $('#maintain-games-minus').mousedown(function () {
        maintainGamesDecrease();
        plusMinusTimeout = setTimeout(function () {
            plusMinusInterval = setInterval(function () {
                maintainGamesDecrease();
            }, 125);
        }, 300);
    }).mouseup(function () {
        clearTimeout(plusMinusTimeout);
        clearInterval(plusMinusInterval);
    });
    $('#maintain-games-plus').mousedown(function () {
        maintainGamesIncrease();
        plusMinusTimeout = setTimeout(function () {
            plusMinusInterval = setInterval(function () {
                maintainGamesIncrease();
            }, 125);
        }, 300);
    }).mouseup(function () {
        clearTimeout(plusMinusTimeout);
        clearInterval(plusMinusInterval);
    });

    updateMaintainSlider();

    $('#stream-maintain-group').click(function (event) {
        event.preventDefault();
        streamSwitch();
        updateMaintain();
    });

    $('#tab-maintain-link').on('show.bs.tab', function () {
        var maintainCurrentSkillRatingInput = $('#maintain-current-skill-rating');
        if (currentSkillRating >= 0) {
            if (currentSkillRating < 3001) {
                currentSkillRating = 3001;
            }
            maintainCurrentSkillRatingInput.val(currentSkillRating);
        } else {
            maintainCurrentSkillRatingInput.val('');
        }
        $('#maintain-games').val(maintainGames);
        $('#tab-maintain-faq-link').tab('show');
    }).on('shown.bs.tab', function () {
        if (currentSkillRating < 0) {
            $('#maintain-current-skill-rating').focus();
        } else {
            $('#maintain-current-skill-rating').tooltip('hide');
        }
        updateMaintain();
    });

    $('#tab-maintain-link').on('hide.bs.tab', function () {
        $('#maintain-current-skill-rating').tooltip('hide');
    });
}

// Purchase Placement

var placementRank = 0;
var placementGames = 10;
// TODO var preorderPlacement = false;

var placementPrices;

function updatePlacementSlider() {
    var slider = document.getElementById('placement-games-slider');
    if (typeof slider.noUiSlider != 'undefined' && slider.noUiSlider != null) {
        slider.noUiSlider.destroy();
    }
    __WEBPACK_IMPORTED_MODULE_2__vendor_nouislider___default.a.create(slider, {
        start: placementGames,
        connect: [true, false],
        range: {
            'min': 1,
            'max': 10
        },
        step: 1,
        tooltips: true,
        format: __WEBPACK_IMPORTED_MODULE_1__vendor_wNumb___default()({
            decimals: 0
        }),
        pips: {
            mode: 'steps',
            filter: function filter10(value) {
                if (value === 1) return 1;
                return value % 10 ? 0 : 1;
            },
            density: 1000
        }
    });
    slider.noUiSlider.on('update', function (values, handle) {
        placementGames = parseInt(values[handle]);
        $('#placement-games').val(placementGames);
        updatePlacement();
    });
}

function updatePlacement() {
    var placementTab = $('#tab-placement');
    if (placementTab.length <= 0 || !placementTab.hasClass('show')) return;
    // TODO preorderPlacement = $('#preorder-placement').prop('checked');
    amount = parseInt(placementGames) * parseFloat(placementPrices[parseInt(placementRank)]);
    var form = $('#form-placement');
    if (isDuo) {
        form.find('.hidden-category').val('DuoPlacement');
        form.find('.hidden-stream').val('false');
        amount *= 1.5;
    } else {
        form.find('.hidden-category').val('Placement');
        if (isStream) {
            form.find('.hidden-stream').val('true');
            amount *= (100 + streamPercent) / 100;
        } else {
            form.find('.hidden-stream').val('false');
        }
    }
    /* TODO Pre-order placement
    if (preorderPlacement) {
        form.find('.hidden-preorder').val('true');
    } else {
        form.find('.hidden-preorder').val('false');
    }
    */
    applyCurrency();
    applyDiscount();
    form.find('.hidden-current').val(placementRank);
    form.find('.hidden-games').val(placementGames);
    form.find('.hidden-amount').val(amountWithDiscount.toFixed(2));
    if (isDuo) {
        $('#order-description-text').html('Get&nbsp;<b>' + placementGames + ' Duo Placement Game' + (placementGames > 1 ? 's' : '') + '</b>&nbsp;boost for&nbsp;');
    } else {
        $('#order-description-text').html('Get&nbsp;<b>' + placementGames + ' Placement Game' + (placementGames > 1 ? 's' : '') + '</b>&nbsp;boost for&nbsp;');
    }
    var descriptionAmount = '';
    if (amount != amountWithDiscount) {
        descriptionAmount += '<span style="text-decoration:line-through">&nbsp;' + currencySymbol + amount.toFixed(2) + '&nbsp;</span>&nbsp;';
    }
    descriptionAmount += '<b>' + currencySymbol + amountWithDiscount.toFixed(2) + '</b>&nbsp;';
    $('#order-description-amount').html(descriptionAmount);
    placementTab.find('.order-description-container').html($('#order-description'));
    placementTab.find('.purchase-button').prop('disabled', false);
    var src = $('#previous-skill-rating-icon').attr('src');
    $('#previous-skill-rating-icon').attr('src', icons[placementRank]);
}

function placementGamesDecrease() {
    if (placementGames > 1) {
        placementGames--;
        $('#placement-games').val(placementGames);
        updatePlacementSlider();
    }
    updatePlacement();
}

function placementGamesIncrease() {
    if (placementGames < 10) {
        placementGames++;
        $('#placement-games').val(placementGames);
        updatePlacementSlider();
    }
    updatePlacement();
}

if ($('#tab-placement').length) {

    placementPrices = $('#tab-placement').attr('data-prices').split(',');

    $('#placement-rank').on('change', function () {
        placementRank = parseInt($(this).val());
        updatePlacement();
    });

    $('#placement-games').on('input', function () {
        var newPlacementGames = parseInt($('#placement-games').val());
        if (!isNaN(newPlacementGames)) {
            placementGames = parseInt($('#placement-games').val());
            if (placementGames > 10) {
                placementGames = 10;
            } else if (placementGames < 1) {
                placementGames = 1;
            }
            $('#placement-games').val(placementGames);
            updatePlacementSlider();
        }
        updatePlacement();
    }).on('change', function () {
        updatePlacement();
    }).on('blur', function () {
        if (isNaN(parseInt($('#placement-games').val()))) {
            $('#placement-games').val(placementGames);
        }
    });

    $('#placement-games-minus').mousedown(function () {
        placementGamesDecrease();
        plusMinusTimeout = setTimeout(function () {
            plusMinusInterval = setInterval(function () {
                placementGamesDecrease();
            }, 125);
        }, 300);
    }).mouseup(function () {
        clearTimeout(plusMinusTimeout);
        clearInterval(plusMinusInterval);
    });
    $('#placement-games-plus').mousedown(function () {
        placementGamesIncrease();
        plusMinusTimeout = setTimeout(function () {
            plusMinusInterval = setInterval(function () {
                placementGamesIncrease();
            }, 125);
        }, 300);
    }).mouseup(function () {
        clearTimeout(plusMinusTimeout);
        clearInterval(plusMinusInterval);
    });

    updatePlacementSlider();

    $('#duo-placement-group').click(function (event) {
        event.preventDefault();
        duoSwitch();
        updatePlacement();
    });

    $('#stream-placement-group').click(function (event) {
        event.preventDefault();
        streamSwitch();
        updatePlacement();
    });

    /* TODO Pre-order placement
    $('#preorder-placement').change(function(event) {
        updatePlacement();
    });
    */

    $('#tab-placement-link').on('show.bs.tab', function () {
        $('#placement-games').val(placementGames);
        $('#tab-placement-faq-link').tab('show');
    }).on('shown.bs.tab', function () {
        updatePlacement();
    });
}

// PayPal

$('#form-skill-rating,#form-games,#form-maintain,#form-placement,#form-top500').find('button.paypal').click(__WEBPACK_IMPORTED_MODULE_3__payment__["a" /* default */].paypalClick);

// Stripe

$('#form-skill-rating,#form-games,#form-maintain,#form-placement,#form-top500').find('button.stripe').click(__WEBPACK_IMPORTED_MODULE_3__payment__["a" /* default */].stripeClick);

// Order redirect countdown

if ($('#order-redirect-countdown').length) {
    var redirectCountdown = $('#order-redirect-countdown');
    function redirectCountdownTick() {
        redirectCountdown.text(parseInt(redirectCountdown.text()) - 1);
        if (parseInt(redirectCountdown.text()) <= 0) {
            clearInterval(redirectCountdownInterval);
            location.href = $('#order-redirect-countdown-link').attr('href');
        }
    }
    var redirectCountdownInterval = setInterval(redirectCountdownTick, 1000);
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// jQuery Mask Plugin v1.14.0
// github.com/igorescobar/jQuery-Mask-Plugin
(function (b) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
                __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
                (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
                __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" === typeof exports ? module.exports = b(require("jquery")) : b(jQuery || Zepto);
})(function (b) {
  var y = function (a, e, d) {
    var c = { invalid: [], getCaret: function () {
        try {
          var r,
              b = 0,
              e = a.get(0),
              d = document.selection,
              f = e.selectionStart;if (d && -1 === navigator.appVersion.indexOf("MSIE 10")) r = d.createRange(), r.moveStart("character", -c.val().length), b = r.text.length;else if (f || "0" === f) b = f;return b;
        } catch (g) {}
      }, setCaret: function (r) {
        try {
          if (a.is(":focus")) {
            var c,
                b = a.get(0);b.setSelectionRange ? (b.focus(), b.setSelectionRange(r, r)) : (c = b.createTextRange(), c.collapse(!0), c.moveEnd("character", r), c.moveStart("character", r), c.select());
          }
        } catch (e) {}
      }, events: function () {
        a.on("keydown.mask", function (c) {
          a.data("mask-keycode", c.keyCode || c.which);
        }).on(b.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", c.behaviour).on("paste.mask drop.mask", function () {
          setTimeout(function () {
            a.keydown().keyup();
          }, 100);
        }).on("change.mask", function () {
          a.data("changed", !0);
        }).on("blur.mask", function () {
          n === c.val() || a.data("changed") || a.trigger("change");a.data("changed", !1);
        }).on("blur.mask", function () {
          n = c.val();
        }).on("focus.mask", function (a) {
          !0 === d.selectOnFocus && b(a.target).select();
        }).on("focusout.mask", function () {
          d.clearIfNotMatch && !p.test(c.val()) && c.val("");
        });
      }, getRegexMask: function () {
        for (var a = [], c, b, d, f, l = 0; l < e.length; l++) (c = g.translation[e.charAt(l)]) ? (b = c.pattern.toString().replace(/.{1}$|^.{1}/g, ""), d = c.optional, (c = c.recursive) ? (a.push(e.charAt(l)), f = { digit: e.charAt(l), pattern: b }) : a.push(d || c ? b + "?" : b)) : a.push(e.charAt(l).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));a = a.join("");f && (a = a.replace(new RegExp("(" + f.digit + "(.*" + f.digit + ")?)"), "($1)?").replace(new RegExp(f.digit, "g"), f.pattern));return new RegExp(a);
      }, destroyEvents: function () {
        a.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "));
      }, val: function (c) {
        var b = a.is("input") ? "val" : "text";if (0 < arguments.length) {
          if (a[b]() !== c) a[b](c);b = a;
        } else b = a[b]();return b;
      }, getMCharsBeforeCount: function (a, c) {
        for (var b = 0, d = 0, f = e.length; d < f && d < a; d++) g.translation[e.charAt(d)] || (a = c ? a + 1 : a, b++);return b;
      }, caretPos: function (a, b, d, h) {
        return g.translation[e.charAt(Math.min(a - 1, e.length - 1))] ? Math.min(a + d - b - h, d) : c.caretPos(a + 1, b, d, h);
      }, behaviour: function (d) {
        d = d || window.event;c.invalid = [];var e = a.data("mask-keycode");if (-1 === b.inArray(e, g.byPassKeys)) {
          var m = c.getCaret(),
              h = c.val().length,
              f = c.getMasked(),
              l = f.length,
              k = c.getMCharsBeforeCount(l - 1) - c.getMCharsBeforeCount(h - 1),
              n = m < h;c.val(f);n && (8 !== e && 46 !== e && (m = c.caretPos(m, h, l, k)), c.setCaret(m));return c.callbacks(d);
        }
      }, getMasked: function (a, b) {
        var m = [],
            h = void 0 === b ? c.val() : b + "",
            f = 0,
            l = e.length,
            k = 0,
            n = h.length,
            q = 1,
            p = "push",
            u = -1,
            t,
            w;d.reverse ? (p = "unshift", q = -1, t = 0, f = l - 1, k = n - 1, w = function () {
          return -1 < f && -1 < k;
        }) : (t = l - 1, w = function () {
          return f < l && k < n;
        });for (; w();) {
          var x = e.charAt(f),
              v = h.charAt(k),
              s = g.translation[x];if (s) v.match(s.pattern) ? (m[p](v), s.recursive && (-1 === u ? u = f : f === t && (f = u - q), t === u && (f -= q)), f += q) : s.optional ? (f += q, k -= q) : s.fallback ? (m[p](s.fallback), f += q, k -= q) : c.invalid.push({ p: k,
            v: v, e: s.pattern }), k += q;else {
            if (!a) m[p](x);v === x && (k += q);f += q;
          }
        }h = e.charAt(t);l !== n + 1 || g.translation[h] || m.push(h);return m.join("");
      }, callbacks: function (b) {
        var g = c.val(),
            m = g !== n,
            h = [g, b, a, d],
            f = function (a, b, c) {
          "function" === typeof d[a] && b && d[a].apply(this, c);
        };f("onChange", !0 === m, h);f("onKeyPress", !0 === m, h);f("onComplete", g.length === e.length, h);f("onInvalid", 0 < c.invalid.length, [g, b, a, c.invalid, d]);
      } };a = b(a);var g = this,
        n = c.val(),
        p;e = "function" === typeof e ? e(c.val(), void 0, a, d) : e;g.mask = e;g.options = d;g.remove = function () {
      var b = c.getCaret();c.destroyEvents();c.val(g.getCleanVal());c.setCaret(b - c.getMCharsBeforeCount(b));return a;
    };g.getCleanVal = function () {
      return c.getMasked(!0);
    };g.getMaskedVal = function (a) {
      return c.getMasked(!1, a);
    };g.init = function (e) {
      e = e || !1;d = d || {};g.clearIfNotMatch = b.jMaskGlobals.clearIfNotMatch;g.byPassKeys = b.jMaskGlobals.byPassKeys;g.translation = b.extend({}, b.jMaskGlobals.translation, d.translation);g = b.extend(!0, {}, g, d);p = c.getRegexMask();!1 === e ? (d.placeholder && a.attr("placeholder", d.placeholder), a.data("mask") && a.attr("autocomplete", "off"), c.destroyEvents(), c.events(), e = c.getCaret(), c.val(c.getMasked()), c.setCaret(e + c.getMCharsBeforeCount(e, !0))) : (c.events(), c.val(c.getMasked()));
    };g.init(!a.is("input"));
  };b.maskWatchers = {};var A = function () {
    var a = b(this),
        e = {},
        d = a.attr("data-mask");a.attr("data-mask-reverse") && (e.reverse = !0);a.attr("data-mask-clearifnotmatch") && (e.clearIfNotMatch = !0);"true" === a.attr("data-mask-selectonfocus") && (e.selectOnFocus = !0);if (z(a, d, e)) return a.data("mask", new y(this, d, e));
  },
      z = function (a, e, d) {
    d = d || {};var c = b(a).data("mask"),
        g = JSON.stringify;a = b(a).val() || b(a).text();try {
      return "function" === typeof e && (e = e(a)), "object" !== typeof c || g(c.options) !== g(d) || c.mask !== e;
    } catch (n) {}
  };b.fn.mask = function (a, e) {
    e = e || {};var d = this.selector,
        c = b.jMaskGlobals,
        g = c.watchInterval,
        c = e.watchInputs || c.watchInputs,
        n = function () {
      if (z(this, a, e)) return b(this).data("mask", new y(this, a, e));
    };b(this).each(n);d && "" !== d && c && (clearInterval(b.maskWatchers[d]), b.maskWatchers[d] = setInterval(function () {
      b(document).find(d).each(n);
    }, g));return this;
  };b.fn.masked = function (a) {
    return this.data("mask").getMaskedVal(a);
  };b.fn.unmask = function () {
    clearInterval(b.maskWatchers[this.selector]);delete b.maskWatchers[this.selector];return this.each(function () {
      var a = b(this).data("mask");a && a.remove().removeData("mask");
    });
  };b.fn.cleanVal = function () {
    return this.data("mask").getCleanVal();
  };b.applyDataMask = function (a) {
    a = a || b.jMaskGlobals.maskElements;(a instanceof b ? a : b(a)).filter(b.jMaskGlobals.dataMaskAttr).each(A);
  };var p = { maskElements: "input,td,span,div",
    dataMaskAttr: "*[data-mask]", dataMask: !0, watchInterval: 300, watchInputs: !0, useInput: function (a) {
      var b = document.createElement("div"),
          d;a = "on" + a;d = a in b;d || (b.setAttribute(a, "return;"), d = "function" === typeof b[a]);return d;
    }("input"), watchDataMask: !1, byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91], translation: { 0: { pattern: /\d/ }, 9: { pattern: /\d/, optional: !0 }, "#": { pattern: /\d/, recursive: !0 }, A: { pattern: /[a-zA-Z0-9]/ }, S: { pattern: /[a-zA-Z]/ } } };b.jMaskGlobals = b.jMaskGlobals || {};p = b.jMaskGlobals = b.extend(!0, {}, p, b.jMaskGlobals);
  p.dataMask && b.applyDataMask();setInterval(function () {
    b.jMaskGlobals.watchDataMask && b.applyDataMask();
  }, p.watchInterval);
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {

    if (true) {

        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
                __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
                (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
                __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object') {

        // Node/CommonJS
        module.exports = factory();
    } else {

        // Browser globals
        window.wNumb = factory();
    }
})(function () {

    'use strict';

    var FormatOptions = ['decimals', 'thousand', 'mark', 'prefix', 'suffix', 'encoder', 'decoder', 'negativeBefore', 'negative', 'edit', 'undo'];

    // General

    // Reverse a string
    function strReverse(a) {
        return a.split('').reverse().join('');
    }

    // Check if a string starts with a specified prefix.
    function strStartsWith(input, match) {
        return input.substring(0, match.length) === match;
    }

    // Check is a string ends in a specified suffix.
    function strEndsWith(input, match) {
        return input.slice(-1 * match.length) === match;
    }

    // Throw an error if formatting options are incompatible.
    function throwEqualError(F, a, b) {
        if ((F[a] || F[b]) && F[a] === F[b]) {
            throw new Error(a);
        }
    }

    // Check if a number is finite and not NaN
    function isValidNumber(input) {
        return typeof input === 'number' && isFinite(input);
    }

    // Provide rounding-accurate toFixed method.
    // Borrowed: http://stackoverflow.com/a/21323330/775265
    function toFixed(value, exp) {
        value = value.toString().split('e');
        value = Math.round(+(value[0] + 'e' + (value[1] ? +value[1] + exp : exp)));
        value = value.toString().split('e');
        return (+(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp))).toFixed(exp);
    }

    // Formatting

    // Accept a number as input, output formatted string.
    function formatTo(decimals, thousand, mark, prefix, suffix, encoder, decoder, negativeBefore, negative, edit, undo, input) {

        var originalInput = input,
            inputIsNegative,
            inputPieces,
            inputBase,
            inputDecimals = '',
            output = '';

        // Apply user encoder to the input.
        // Expected outcome: number.
        if (encoder) {
            input = encoder(input);
        }

        // Stop if no valid number was provided, the number is infinite or NaN.
        if (!isValidNumber(input)) {
            return false;
        }

        // Rounding away decimals might cause a value of -0
        // when using very small ranges. Remove those cases.
        if (decimals !== false && parseFloat(input.toFixed(decimals)) === 0) {
            input = 0;
        }

        // Formatting is done on absolute numbers,
        // decorated by an optional negative symbol.
        if (input < 0) {
            inputIsNegative = true;
            input = Math.abs(input);
        }

        // Reduce the number of decimals to the specified option.
        if (decimals !== false) {
            input = toFixed(input, decimals);
        }

        // Transform the number into a string, so it can be split.
        input = input.toString();

        // Break the number on the decimal separator.
        if (input.indexOf('.') !== -1) {
            inputPieces = input.split('.');

            inputBase = inputPieces[0];

            if (mark) {
                inputDecimals = mark + inputPieces[1];
            }
        } else {

            // If it isn't split, the entire number will do.
            inputBase = input;
        }

        // Group numbers in sets of three.
        if (thousand) {
            inputBase = strReverse(inputBase).match(/.{1,3}/g);
            inputBase = strReverse(inputBase.join(strReverse(thousand)));
        }

        // If the number is negative, prefix with negation symbol.
        if (inputIsNegative && negativeBefore) {
            output += negativeBefore;
        }

        // Prefix the number
        if (prefix) {
            output += prefix;
        }

        // Normal negative option comes after the prefix. Defaults to '-'.
        if (inputIsNegative && negative) {
            output += negative;
        }

        // Append the actual number.
        output += inputBase;
        output += inputDecimals;

        // Apply the suffix.
        if (suffix) {
            output += suffix;
        }

        // Run the output through a user-specified post-formatter.
        if (edit) {
            output = edit(output, originalInput);
        }

        // All done.
        return output;
    }

    // Accept a sting as input, output decoded number.
    function formatFrom(decimals, thousand, mark, prefix, suffix, encoder, decoder, negativeBefore, negative, edit, undo, input) {

        var originalInput = input,
            inputIsNegative,
            output = '';

        // User defined pre-decoder. Result must be a non empty string.
        if (undo) {
            input = undo(input);
        }

        // Test the input. Can't be empty.
        if (!input || typeof input !== 'string') {
            return false;
        }

        // If the string starts with the negativeBefore value: remove it.
        // Remember is was there, the number is negative.
        if (negativeBefore && strStartsWith(input, negativeBefore)) {
            input = input.replace(negativeBefore, '');
            inputIsNegative = true;
        }

        // Repeat the same procedure for the prefix.
        if (prefix && strStartsWith(input, prefix)) {
            input = input.replace(prefix, '');
        }

        // And again for negative.
        if (negative && strStartsWith(input, negative)) {
            input = input.replace(negative, '');
            inputIsNegative = true;
        }

        // Remove the suffix.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
        if (suffix && strEndsWith(input, suffix)) {
            input = input.slice(0, -1 * suffix.length);
        }

        // Remove the thousand grouping.
        if (thousand) {
            input = input.split(thousand).join('');
        }

        // Set the decimal separator back to period.
        if (mark) {
            input = input.replace(mark, '.');
        }

        // Prepend the negative symbol.
        if (inputIsNegative) {
            output += '-';
        }

        // Add the number
        output += input;

        // Trim all non-numeric characters (allow '.' and '-');
        output = output.replace(/[^0-9\.\-.]/g, '');

        // The value contains no parse-able number.
        if (output === '') {
            return false;
        }

        // Covert to number.
        output = Number(output);

        // Run the user-specified post-decoder.
        if (decoder) {
            output = decoder(output);
        }

        // Check is the output is valid, otherwise: return false.
        if (!isValidNumber(output)) {
            return false;
        }

        return output;
    }

    // Framework

    // Validate formatting options
    function validate(inputOptions) {

        var i,
            optionName,
            optionValue,
            filteredOptions = {};

        if (inputOptions['suffix'] === undefined) {
            inputOptions['suffix'] = inputOptions['postfix'];
        }

        for (i = 0; i < FormatOptions.length; i += 1) {

            optionName = FormatOptions[i];
            optionValue = inputOptions[optionName];

            if (optionValue === undefined) {

                // Only default if negativeBefore isn't set.
                if (optionName === 'negative' && !filteredOptions.negativeBefore) {
                    filteredOptions[optionName] = '-';
                    // Don't set a default for mark when 'thousand' is set.
                } else if (optionName === 'mark' && filteredOptions.thousand !== '.') {
                    filteredOptions[optionName] = '.';
                } else {
                    filteredOptions[optionName] = false;
                }

                // Floating points in JS are stable up to 7 decimals.
            } else if (optionName === 'decimals') {
                if (optionValue >= 0 && optionValue < 8) {
                    filteredOptions[optionName] = optionValue;
                } else {
                    throw new Error(optionName);
                }

                // These options, when provided, must be functions.
            } else if (optionName === 'encoder' || optionName === 'decoder' || optionName === 'edit' || optionName === 'undo') {
                if (typeof optionValue === 'function') {
                    filteredOptions[optionName] = optionValue;
                } else {
                    throw new Error(optionName);
                }

                // Other options are strings.
            } else {

                if (typeof optionValue === 'string') {
                    filteredOptions[optionName] = optionValue;
                } else {
                    throw new Error(optionName);
                }
            }
        }

        // Some values can't be extracted from a
        // string if certain combinations are present.
        throwEqualError(filteredOptions, 'mark', 'thousand');
        throwEqualError(filteredOptions, 'prefix', 'negative');
        throwEqualError(filteredOptions, 'prefix', 'negativeBefore');

        return filteredOptions;
    }

    // Pass all options as function arguments
    function passAll(options, method, input) {
        var i,
            args = [];

        // Add all options in order of FormatOptions
        for (i = 0; i < FormatOptions.length; i += 1) {
            args.push(options[FormatOptions[i]]);
        }

        // Append the input, then call the method, presenting all
        // options as arguments.
        args.push(input);
        return method.apply('', args);
    }

    function wNumb(options) {

        if (!(this instanceof wNumb)) {
            return new wNumb(options);
        }

        if (typeof options !== "object") {
            return;
        }

        options = validate(options);

        // Call 'formatTo' with proper arguments.
        this.to = function (input) {
            return passAll(options, formatTo, input);
        };

        // Call 'formatFrom' with proper arguments.
        this.from = function (input) {
            return passAll(options, formatFrom, input);
        };
    }

    return wNumb;
});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! nouislider - 9.1.0 - 2016-12-10 16:00:32 */

!function (a) {
     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
                __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
                (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
                __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports ? module.exports = a() : window.noUiSlider = a();
}(function () {
    "use strict";

    function a(a, b) {
        var c = document.createElement("div");
        return j(c, b), a.appendChild(c), c;
    }

    function b(a) {
        return a.filter(function (a) {
            return !this[a] && (this[a] = !0);
        }, {});
    }

    function c(a, b) {
        return Math.round(a / b) * b;
    }

    function d(a, b) {
        var c = a.getBoundingClientRect(),
            d = a.ownerDocument,
            e = d.documentElement,
            f = m();
        return (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (f.x = 0), b ? c.top + f.y - e.clientTop : c.left + f.x - e.clientLeft
        );
    }

    function e(a) {
        return "number" == typeof a && !isNaN(a) && isFinite(a);
    }

    function f(a, b, c) {
        c > 0 && (j(a, b), setTimeout(function () {
            k(a, b);
        }, c));
    }

    function g(a) {
        return Math.max(Math.min(a, 100), 0);
    }

    function h(a) {
        return Array.isArray(a) ? a : [a];
    }

    function i(a) {
        a = String(a);
        var b = a.split(".");
        return b.length > 1 ? b[1].length : 0;
    }

    function j(a, b) {
        a.classList ? a.classList.add(b) : a.className += " " + b;
    }

    function k(a, b) {
        a.classList ? a.classList.remove(b) : a.className = a.className.replace(new RegExp("(^|\\b)" + b.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }

    function l(a, b) {
        return a.classList ? a.classList.contains(b) : new RegExp("\\b" + b + "\\b").test(a.className);
    }

    function m() {
        var a = void 0 !== window.pageXOffset,
            b = "CSS1Compat" === (document.compatMode || ""),
            c = a ? window.pageXOffset : b ? document.documentElement.scrollLeft : document.body.scrollLeft,
            d = a ? window.pageYOffset : b ? document.documentElement.scrollTop : document.body.scrollTop;
        return {
            x: c,
            y: d
        };
    }

    function n() {
        return window.navigator.pointerEnabled ? {
            start: "pointerdown",
            move: "pointermove",
            end: "pointerup"
        } : window.navigator.msPointerEnabled ? {
            start: "MSPointerDown",
            move: "MSPointerMove",
            end: "MSPointerUp"
        } : {
            start: "mousedown touchstart",
            move: "mousemove touchmove",
            end: "mouseup touchend"
        };
    }

    function o(a, b) {
        return 100 / (b - a);
    }

    function p(a, b) {
        return 100 * b / (a[1] - a[0]);
    }

    function q(a, b) {
        return p(a, a[0] < 0 ? b + Math.abs(a[0]) : b - a[0]);
    }

    function r(a, b) {
        return b * (a[1] - a[0]) / 100 + a[0];
    }

    function s(a, b) {
        for (var c = 1; a >= b[c];) c += 1;
        return c;
    }

    function t(a, b, c) {
        if (c >= a.slice(-1)[0]) return 100;
        var d,
            e,
            f,
            g,
            h = s(c, a);
        return d = a[h - 1], e = a[h], f = b[h - 1], g = b[h], f + q([d, e], c) / o(f, g);
    }

    function u(a, b, c) {
        if (c >= 100) return a.slice(-1)[0];
        var d,
            e,
            f,
            g,
            h = s(c, b);
        return d = a[h - 1], e = a[h], f = b[h - 1], g = b[h], r([d, e], (c - f) * o(f, g));
    }

    function v(a, b, d, e) {
        if (100 === e) return e;
        var f,
            g,
            h = s(e, a);
        return d ? (f = a[h - 1], g = a[h], e - f > (g - f) / 2 ? g : f) : b[h - 1] ? a[h - 1] + c(e - a[h - 1], b[h - 1]) : e;
    }

    function w(a, b, c) {
        var d;
        if ("number" == typeof b && (b = [b]), "[object Array]" !== Object.prototype.toString.call(b)) throw new Error("noUiSlider: 'range' contains invalid value.");
        if (d = "min" === a ? 0 : "max" === a ? 100 : parseFloat(a), !e(d) || !e(b[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
        c.xPct.push(d), c.xVal.push(b[0]), d ? c.xSteps.push(!isNaN(b[1]) && b[1]) : isNaN(b[1]) || (c.xSteps[0] = b[1]), c.xHighestCompleteStep.push(0);
    }

    function x(a, b, c) {
        if (!b) return !0;
        c.xSteps[a] = p([c.xVal[a], c.xVal[a + 1]], b) / o(c.xPct[a], c.xPct[a + 1]);
        var d = (c.xVal[a + 1] - c.xVal[a]) / c.xNumSteps[a],
            e = Math.ceil(Number(d.toFixed(3)) - 1),
            f = c.xVal[a] + c.xNumSteps[a] * e;
        c.xHighestCompleteStep[a] = f;
    }

    function y(a, b, c, d) {
        this.xPct = [], this.xVal = [], this.xSteps = [d || !1], this.xNumSteps = [!1], this.xHighestCompleteStep = [], this.snap = b, this.direction = c;
        var e,
            f = [];
        for (e in a) a.hasOwnProperty(e) && f.push([a[e], e]);
        for (f.length && "object" == typeof f[0][0] ? f.sort(function (a, b) {
            return a[0][0] - b[0][0];
        }) : f.sort(function (a, b) {
            return a[0] - b[0];
        }), e = 0; e < f.length; e++) w(f[e][1], f[e][0], this);
        for (this.xNumSteps = this.xSteps.slice(0), e = 0; e < this.xNumSteps.length; e++) x(e, this.xNumSteps[e], this);
    }

    function z(a, b) {
        if (!e(b)) throw new Error("noUiSlider: 'step' is not numeric.");
        a.singleStep = b;
    }

    function A(a, b) {
        if ("object" != typeof b || Array.isArray(b)) throw new Error("noUiSlider: 'range' is not an object.");
        if (void 0 === b.min || void 0 === b.max) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        if (b.min === b.max) throw new Error("noUiSlider: 'range' 'min' and 'max' cannot be equal.");
        a.spectrum = new y(b, a.snap, a.dir, a.singleStep);
    }

    function B(a, b) {
        if (b = h(b), !Array.isArray(b) || !b.length) throw new Error("noUiSlider: 'start' option is incorrect.");
        a.handles = b.length, a.start = b;
    }

    function C(a, b) {
        if (a.snap = b, "boolean" != typeof b) throw new Error("noUiSlider: 'snap' option must be a boolean.");
    }

    function D(a, b) {
        if (a.animate = b, "boolean" != typeof b) throw new Error("noUiSlider: 'animate' option must be a boolean.");
    }

    function E(a, b) {
        if (a.animationDuration = b, "number" != typeof b) throw new Error("noUiSlider: 'animationDuration' option must be a number.");
    }

    function F(a, b) {
        var c,
            d = [!1];
        if ("lower" === b ? b = [!0, !1] : "upper" === b && (b = [!1, !0]), b === !0 || b === !1) {
            for (c = 1; c < a.handles; c++) d.push(b);
            d.push(!1);
        } else {
            if (!Array.isArray(b) || !b.length || b.length !== a.handles + 1) throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
            d = b;
        }
        a.connect = d;
    }

    function G(a, b) {
        switch (b) {
            case "horizontal":
                a.ort = 0;
                break;
            case "vertical":
                a.ort = 1;
                break;
            default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
        }
    }

    function H(a, b) {
        if (!e(b)) throw new Error("noUiSlider: 'margin' option must be numeric.");
        if (0 !== b && (a.margin = a.spectrum.getMargin(b), !a.margin)) throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.");
    }

    function I(a, b) {
        if (!e(b)) throw new Error("noUiSlider: 'limit' option must be numeric.");
        if (a.limit = a.spectrum.getMargin(b), !a.limit || a.handles < 2) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
    }

    function J(a, b) {
        if (!e(b)) throw new Error("noUiSlider: 'padding' option must be numeric.");
        if (0 !== b) {
            if (a.padding = a.spectrum.getMargin(b), !a.padding) throw new Error("noUiSlider: 'padding' option is only supported on linear sliders.");
            if (a.padding < 0) throw new Error("noUiSlider: 'padding' option must be a positive number.");
            if (a.padding >= 50) throw new Error("noUiSlider: 'padding' option must be less than half the range.");
        }
    }

    function K(a, b) {
        switch (b) {
            case "ltr":
                a.dir = 0;
                break;
            case "rtl":
                a.dir = 1;
                break;
            default:
                throw new Error("noUiSlider: 'direction' option was not recognized.");
        }
    }

    function L(a, b) {
        if ("string" != typeof b) throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        var c = b.indexOf("tap") >= 0,
            d = b.indexOf("drag") >= 0,
            e = b.indexOf("fixed") >= 0,
            f = b.indexOf("snap") >= 0,
            g = b.indexOf("hover") >= 0;
        if (e) {
            if (2 !== a.handles) throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
            H(a, a.start[1] - a.start[0]);
        }
        a.events = {
            tap: c || f,
            drag: d,
            fixed: e,
            snap: f,
            hover: g
        };
    }

    function M(a, b) {
        if (b !== !1) if (b === !0) {
            a.tooltips = [];
            for (var c = 0; c < a.handles; c++) a.tooltips.push(!0);
        } else {
            if (a.tooltips = h(b), a.tooltips.length !== a.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
            a.tooltips.forEach(function (a) {
                if ("boolean" != typeof a && ("object" != typeof a || "function" != typeof a.to)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
            });
        }
    }

    function N(a, b) {
        if (a.format = b, "function" == typeof b.to && "function" == typeof b.from) return !0;
        throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
    }

    function O(a, b) {
        if (void 0 !== b && "string" != typeof b && b !== !1) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
        a.cssPrefix = b;
    }

    function P(a, b) {
        if (void 0 !== b && "object" != typeof b) throw new Error("noUiSlider: 'cssClasses' must be an object.");
        if ("string" == typeof a.cssPrefix) {
            a.cssClasses = {};
            for (var c in b) b.hasOwnProperty(c) && (a.cssClasses[c] = a.cssPrefix + b[c]);
        } else a.cssClasses = b;
    }

    function Q(a, b) {
        if (b !== !0 && b !== !1) throw new Error("noUiSlider: 'useRequestAnimationFrame' option should be true (default) or false.");
        a.useRequestAnimationFrame = b;
    }

    function R(a) {
        var b = {
            margin: 0,
            limit: 0,
            padding: 0,
            animate: !0,
            animationDuration: 300,
            format: U
        },
            c = {
            step: {
                r: !1,
                t: z
            },
            start: {
                r: !0,
                t: B
            },
            connect: {
                r: !0,
                t: F
            },
            direction: {
                r: !0,
                t: K
            },
            snap: {
                r: !1,
                t: C
            },
            animate: {
                r: !1,
                t: D
            },
            animationDuration: {
                r: !1,
                t: E
            },
            range: {
                r: !0,
                t: A
            },
            orientation: {
                r: !1,
                t: G
            },
            margin: {
                r: !1,
                t: H
            },
            limit: {
                r: !1,
                t: I
            },
            padding: {
                r: !1,
                t: J
            },
            behaviour: {
                r: !0,
                t: L
            },
            format: {
                r: !1,
                t: N
            },
            tooltips: {
                r: !1,
                t: M
            },
            cssPrefix: {
                r: !1,
                t: O
            },
            cssClasses: {
                r: !1,
                t: P
            },
            useRequestAnimationFrame: {
                r: !1,
                t: Q
            }
        },
            d = {
            connect: !1,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            cssPrefix: "noUi-",
            cssClasses: {
                target: "target",
                base: "base",
                origin: "origin",
                handle: "handle",
                handleLower: "handle-lower",
                handleUpper: "handle-upper",
                horizontal: "horizontal",
                vertical: "vertical",
                background: "background",
                connect: "connect",
                ltr: "ltr",
                rtl: "rtl",
                draggable: "draggable",
                drag: "state-drag",
                tap: "state-tap",
                active: "active",
                tooltip: "tooltip",
                pips: "pips",
                pipsHorizontal: "pips-horizontal",
                pipsVertical: "pips-vertical",
                marker: "marker",
                markerHorizontal: "marker-horizontal",
                markerVertical: "marker-vertical",
                markerNormal: "marker-normal",
                markerLarge: "marker-large",
                markerSub: "marker-sub",
                value: "value",
                valueHorizontal: "value-horizontal",
                valueVertical: "value-vertical",
                valueNormal: "value-normal",
                valueLarge: "value-large",
                valueSub: "value-sub"
            },
            useRequestAnimationFrame: !0
        };
        Object.keys(c).forEach(function (e) {
            if (void 0 === a[e] && void 0 === d[e]) {
                if (c[e].r) throw new Error("noUiSlider: '" + e + "' is required.");
                return !0;
            }
            c[e].t(b, void 0 === a[e] ? d[e] : a[e]);
        }), b.pips = a.pips;
        var e = [["left", "top"], ["right", "bottom"]];
        return b.style = e[b.dir][b.ort], b.styleOposite = e[b.dir ? 0 : 1][b.ort], b;
    }

    function S(c, e, i) {
        function o(b, c) {
            var d = a(b, e.cssClasses.origin),
                f = a(d, e.cssClasses.handle);
            return f.setAttribute("data-handle", c), 0 === c ? j(f, e.cssClasses.handleLower) : c === e.handles - 1 && j(f, e.cssClasses.handleUpper), d;
        }

        function p(b, c) {
            return !!c && a(b, e.cssClasses.connect);
        }

        function q(a, b) {
            ba = [], ca = [], ca.push(p(b, a[0]));
            for (var c = 0; c < e.handles; c++) ba.push(o(b, c)), ha[c] = c, ca.push(p(b, a[c + 1]));
        }

        function r(b) {
            j(b, e.cssClasses.target), 0 === e.dir ? j(b, e.cssClasses.ltr) : j(b, e.cssClasses.rtl), 0 === e.ort ? j(b, e.cssClasses.horizontal) : j(b, e.cssClasses.vertical), aa = a(b, e.cssClasses.base);
        }

        function s(b, c) {
            return !!e.tooltips[c] && a(b.firstChild, e.cssClasses.tooltip);
        }

        function t() {
            var a = ba.map(s);
            Z("update", function (b, c, d) {
                if (a[c]) {
                    var f = b[c];
                    e.tooltips[c] !== !0 && (f = e.tooltips[c].to(d[c])), a[c].innerHTML = f;
                }
            });
        }

        function u(a, b, c) {
            if ("range" === a || "steps" === a) return ja.xVal;
            if ("count" === a) {
                var d,
                    e = 100 / (b - 1),
                    f = 0;
                for (b = []; (d = f++ * e) <= 100;) b.push(d);
                a = "positions";
            }
            return "positions" === a ? b.map(function (a) {
                return ja.fromStepping(c ? ja.getStep(a) : a);
            }) : "values" === a ? c ? b.map(function (a) {
                return ja.fromStepping(ja.getStep(ja.toStepping(a)));
            }) : b : void 0;
        }

        function v(a, c, d) {
            function e(a, b) {
                return (a + b).toFixed(7) / 1;
            }
            var f = {},
                g = ja.xVal[0],
                h = ja.xVal[ja.xVal.length - 1],
                i = !1,
                j = !1,
                k = 0;
            return d = b(d.slice().sort(function (a, b) {
                return a - b;
            })), d[0] !== g && (d.unshift(g), i = !0), d[d.length - 1] !== h && (d.push(h), j = !0), d.forEach(function (b, g) {
                var h,
                    l,
                    m,
                    n,
                    o,
                    p,
                    q,
                    r,
                    s,
                    t,
                    u = b,
                    v = d[g + 1];
                if ("steps" === c && (h = ja.xNumSteps[g]), h || (h = v - u), u !== !1 && void 0 !== v) for (h = Math.max(h, 1e-7), l = u; l <= v; l = e(l, h)) {
                    for (n = ja.toStepping(l), o = n - k, r = o / a, s = Math.round(r), t = o / s, m = 1; m <= s; m += 1) p = k + m * t, f[p.toFixed(5)] = ["x", 0];
                    q = d.indexOf(l) > -1 ? 1 : "steps" === c ? 2 : 0, !g && i && (q = 0), l === v && j || (f[n.toFixed(5)] = [l, q]), k = n;
                }
            }), f;
        }

        function w(a, b, c) {
            function d(a, b) {
                var c = b === e.cssClasses.value,
                    d = c ? m : n,
                    f = c ? k : l;
                return b + " " + d[e.ort] + " " + f[a];
            }

            function f(a, b, c) {
                return 'class="' + d(c[1], b) + '" style="' + e.style + ": " + a + '%"';
            }

            function g(a, d) {
                d[1] = d[1] && b ? b(d[0], d[1]) : d[1], i += "<div " + f(a, e.cssClasses.marker, d) + "></div>", d[1] && (i += "<div " + f(a, e.cssClasses.value, d) + ">" + c.to(d[0]) + "</div>");
            }
            var h = document.createElement("div"),
                i = "",
                k = [e.cssClasses.valueNormal, e.cssClasses.valueLarge, e.cssClasses.valueSub],
                l = [e.cssClasses.markerNormal, e.cssClasses.markerLarge, e.cssClasses.markerSub],
                m = [e.cssClasses.valueHorizontal, e.cssClasses.valueVertical],
                n = [e.cssClasses.markerHorizontal, e.cssClasses.markerVertical];
            return j(h, e.cssClasses.pips), j(h, 0 === e.ort ? e.cssClasses.pipsHorizontal : e.cssClasses.pipsVertical), Object.keys(a).forEach(function (b) {
                g(b, a[b]);
            }), h.innerHTML = i, h;
        }

        function x(a) {
            var b = a.mode,
                c = a.density || 1,
                d = a.filter || !1,
                e = a.values || !1,
                f = a.stepped || !1,
                g = u(b, e, f),
                h = v(c, b, g),
                i = a.format || {
                to: Math.round
            };
            return fa.appendChild(w(h, d, i));
        }

        function y() {
            var a = aa.getBoundingClientRect(),
                b = "offset" + ["Width", "Height"][e.ort];
            return 0 === e.ort ? a.width || aa[b] : a.height || aa[b];
        }

        function z(a, b, c, d) {
            var f = function (b) {
                return !fa.hasAttribute("disabled") && !l(fa, e.cssClasses.tap) && !!(b = A(b, d.pageOffset)) && !(a === ea.start && void 0 !== b.buttons && b.buttons > 1) && (!d.hover || !b.buttons) && (b.calcPoint = b.points[e.ort], void c(b, d));
            },
                g = [];
            return a.split(" ").forEach(function (a) {
                b.addEventListener(a, f, !1), g.push([a, f]);
            }), g;
        }

        function A(a, b) {
            a.preventDefault();
            var c,
                d,
                e = 0 === a.type.indexOf("touch"),
                f = 0 === a.type.indexOf("mouse"),
                g = 0 === a.type.indexOf("pointer");
            if (0 === a.type.indexOf("MSPointer") && (g = !0), e) {
                if (a.touches.length > 1) return !1;
                c = a.changedTouches[0].pageX, d = a.changedTouches[0].pageY;
            }
            return b = b || m(), (f || g) && (c = a.clientX + b.x, d = a.clientY + b.y), a.pageOffset = b, a.points = [c, d], a.cursor = f || g, a;
        }

        function B(a) {
            var b = a - d(aa, e.ort),
                c = 100 * b / y();
            return e.dir ? 100 - c : c;
        }

        function C(a) {
            var b = 100,
                c = !1;
            return ba.forEach(function (d, e) {
                if (!d.hasAttribute("disabled")) {
                    var f = Math.abs(ga[e] - a);
                    f < b && (c = e, b = f);
                }
            }), c;
        }

        function D(a, b, c, d) {
            var e = c.slice(),
                f = [!a, a],
                g = [a, !a];
            d = d.slice(), a && d.reverse(), d.length > 1 ? d.forEach(function (a, c) {
                var d = M(e, a, e[a] + b, f[c], g[c]);
                d === !1 ? b = 0 : (b = d - e[a], e[a] = d);
            }) : f = g = [!0];
            var h = !1;
            d.forEach(function (a, d) {
                h = Q(a, c[a] + b, f[d], g[d]) || h;
            }), h && d.forEach(function (a) {
                E("update", a), E("slide", a);
            });
        }

        function E(a, b, c) {
            Object.keys(la).forEach(function (d) {
                var f = d.split(".")[0];
                a === f && la[d].forEach(function (a) {
                    a.call(da, ka.map(e.format.to), b, ka.slice(), c || !1, ga.slice());
                });
            });
        }

        function F(a, b) {
            "mouseout" === a.type && "HTML" === a.target.nodeName && null === a.relatedTarget && H(a, b);
        }

        function G(a, b) {
            if (navigator.appVersion.indexOf("MSIE 9") === -1 && 0 === a.buttons && 0 !== b.buttonsProperty) return H(a, b);
            var c = (e.dir ? -1 : 1) * (a.calcPoint - b.startCalcPoint),
                d = 100 * c / b.baseSize;
            D(c > 0, d, b.locations, b.handleNumbers);
        }

        function H(a, b) {
            ia && (k(ia, e.cssClasses.active), ia = !1), a.cursor && (document.body.style.cursor = "", document.body.removeEventListener("selectstart", document.body.noUiListener)), document.documentElement.noUiListeners.forEach(function (a) {
                document.documentElement.removeEventListener(a[0], a[1]);
            }), k(fa, e.cssClasses.drag), P(), b.handleNumbers.forEach(function (a) {
                E("set", a), E("change", a), E("end", a);
            });
        }

        function I(a, b) {
            if (1 === b.handleNumbers.length) {
                var c = ba[b.handleNumbers[0]];
                if (c.hasAttribute("disabled")) return !1;
                ia = c.children[0], j(ia, e.cssClasses.active);
            }
            a.preventDefault(), a.stopPropagation();
            var d = z(ea.move, document.documentElement, G, {
                startCalcPoint: a.calcPoint,
                baseSize: y(),
                pageOffset: a.pageOffset,
                handleNumbers: b.handleNumbers,
                buttonsProperty: a.buttons,
                locations: ga.slice()
            }),
                f = z(ea.end, document.documentElement, H, {
                handleNumbers: b.handleNumbers
            }),
                g = z("mouseout", document.documentElement, F, {
                handleNumbers: b.handleNumbers
            });
            if (document.documentElement.noUiListeners = d.concat(f, g), a.cursor) {
                document.body.style.cursor = getComputedStyle(a.target).cursor, ba.length > 1 && j(fa, e.cssClasses.drag);
                var h = function () {
                    return !1;
                };
                document.body.noUiListener = h, document.body.addEventListener("selectstart", h, !1);
            }
            b.handleNumbers.forEach(function (a) {
                E("start", a);
            });
        }

        function J(a) {
            a.stopPropagation();
            var b = B(a.calcPoint),
                c = C(b);
            return c !== !1 && (e.events.snap || f(fa, e.cssClasses.tap, e.animationDuration), Q(c, b, !0, !0), P(), E("slide", c, !0), E("set", c, !0), E("change", c, !0), E("update", c, !0), void (e.events.snap && I(a, {
                handleNumbers: [c]
            })));
        }

        function K(a) {
            var b = B(a.calcPoint),
                c = ja.getStep(b),
                d = ja.fromStepping(c);
            Object.keys(la).forEach(function (a) {
                "hover" === a.split(".")[0] && la[a].forEach(function (a) {
                    a.call(da, d);
                });
            });
        }

        function L(a) {
            a.fixed || ba.forEach(function (a, b) {
                z(ea.start, a.children[0], I, {
                    handleNumbers: [b]
                });
            }), a.tap && z(ea.start, aa, J, {}), a.hover && z(ea.move, aa, K, {
                hover: !0
            }), a.drag && ca.forEach(function (b, c) {
                if (b !== !1 && 0 !== c && c !== ca.length - 1) {
                    var d = ba[c - 1],
                        f = ba[c],
                        g = [b];
                    j(b, e.cssClasses.draggable), a.fixed && (g.push(d.children[0]), g.push(f.children[0])), g.forEach(function (a) {
                        z(ea.start, a, I, {
                            handles: [d, f],
                            handleNumbers: [c - 1, c]
                        });
                    });
                }
            });
        }

        function M(a, b, c, d, f) {
            return ba.length > 1 && (d && b > 0 && (c = Math.max(c, a[b - 1] + e.margin)), f && b < ba.length - 1 && (c = Math.min(c, a[b + 1] - e.margin))), ba.length > 1 && e.limit && (d && b > 0 && (c = Math.min(c, a[b - 1] + e.limit)), f && b < ba.length - 1 && (c = Math.max(c, a[b + 1] - e.limit))), e.padding && (0 === b && (c = Math.max(c, e.padding)), b === ba.length - 1 && (c = Math.min(c, 100 - e.padding))), c = ja.getStep(c), c = g(c), c !== a[b] && c;
        }

        function N(a) {
            return a + "%";
        }

        function O(a, b) {
            ga[a] = b, ka[a] = ja.fromStepping(b);
            var c = function () {
                ba[a].style[e.style] = N(b), S(a), S(a + 1);
            };
            window.requestAnimationFrame && e.useRequestAnimationFrame ? window.requestAnimationFrame(c) : c();
        }

        function P() {
            ha.forEach(function (a) {
                var b = ga[a] > 50 ? -1 : 1,
                    c = 3 + (ba.length + b * a);
                ba[a].childNodes[0].style.zIndex = c;
            });
        }

        function Q(a, b, c, d) {
            return b = M(ga, a, b, c, d), b !== !1 && (O(a, b), !0);
        }

        function S(a) {
            if (ca[a]) {
                var b = 0,
                    c = 100;
                0 !== a && (b = ga[a - 1]), a !== ca.length - 1 && (c = ga[a]), ca[a].style[e.style] = N(b), ca[a].style[e.styleOposite] = N(100 - c);
            }
        }

        function T(a, b) {
            null !== a && a !== !1 && ("number" == typeof a && (a = String(a)), a = e.format.from(a), a === !1 || isNaN(a) || Q(b, ja.toStepping(a), !1, !1));
        }

        function U(a, b) {
            var c = h(a),
                d = void 0 === ga[0];
            b = void 0 === b || !!b, c.forEach(T), e.animate && !d && f(fa, e.cssClasses.tap, e.animationDuration), ha.forEach(function (a) {
                Q(a, ga[a], !0, !1);
            }), P(), ha.forEach(function (a) {
                E("update", a), null !== c[a] && b && E("set", a);
            });
        }

        function V(a) {
            U(e.start, a);
        }

        function W() {
            var a = ka.map(e.format.to);
            return 1 === a.length ? a[0] : a;
        }

        function X() {
            for (var a in e.cssClasses) e.cssClasses.hasOwnProperty(a) && k(fa, e.cssClasses[a]);
            for (; fa.firstChild;) fa.removeChild(fa.firstChild);
            delete fa.noUiSlider;
        }

        function Y() {
            return ga.map(function (a, b) {
                var c = ja.getNearbySteps(a),
                    d = ka[b],
                    e = c.thisStep.step,
                    f = null;
                e !== !1 && d + e > c.stepAfter.startValue && (e = c.stepAfter.startValue - d), f = d > c.thisStep.startValue ? c.thisStep.step : c.stepBefore.step !== !1 && d - c.stepBefore.highestStep, 100 === a ? e = null : 0 === a && (f = null);
                var g = ja.countStepDecimals();
                return null !== e && e !== !1 && (e = Number(e.toFixed(g))), null !== f && f !== !1 && (f = Number(f.toFixed(g))), [f, e];
            });
        }

        function Z(a, b) {
            la[a] = la[a] || [], la[a].push(b), "update" === a.split(".")[0] && ba.forEach(function (a, b) {
                E("update", b);
            });
        }

        function $(a) {
            var b = a && a.split(".")[0],
                c = b && a.substring(b.length);
            Object.keys(la).forEach(function (a) {
                var d = a.split(".")[0],
                    e = a.substring(d.length);
                b && b !== d || c && c !== e || delete la[a];
            });
        }

        function _(a, b) {
            var c = W(),
                d = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format"];
            d.forEach(function (b) {
                void 0 !== a[b] && (i[b] = a[b]);
            });
            var f = R(i);
            d.forEach(function (b) {
                void 0 !== a[b] && (e[b] = f[b]);
            }), f.spectrum.direction = ja.direction, ja = f.spectrum, e.margin = f.margin, e.limit = f.limit, e.padding = f.padding, ga = [], U(a.start || c, b);
        }
        var aa,
            ba,
            ca,
            da,
            ea = n(),
            fa = c,
            ga = [],
            ha = [],
            ia = !1,
            ja = e.spectrum,
            ka = [],
            la = {};
        if (fa.noUiSlider) throw new Error("Slider was already initialized.");
        return r(fa), q(e.connect, aa), da = {
            destroy: X,
            steps: Y,
            on: Z,
            off: $,
            get: W,
            set: U,
            reset: V,
            __moveHandles: function (a, b, c) {
                D(a, b, ga, c);
            },
            options: i,
            updateOptions: _,
            target: fa,
            pips: x
        }, L(e.events), U(e.start), e.pips && x(e.pips), e.tooltips && t(), da;
    }

    function T(a, b) {
        if (!a.nodeName) throw new Error("noUiSlider.create requires a single element.");
        var c = R(b, a),
            d = S(a, c, b);
        return a.noUiSlider = d, d;
    }
    y.prototype.getMargin = function (a) {
        var b = this.xNumSteps[0];
        if (b && a / b % 1 !== 0) throw new Error("noUiSlider: 'limit', 'margin' and 'padding' must be divisible by step.");
        return 2 === this.xPct.length && p(this.xVal, a);
    }, y.prototype.toStepping = function (a) {
        return a = t(this.xVal, this.xPct, a);
    }, y.prototype.fromStepping = function (a) {
        return u(this.xVal, this.xPct, a);
    }, y.prototype.getStep = function (a) {
        return a = v(this.xPct, this.xSteps, this.snap, a);
    }, y.prototype.getNearbySteps = function (a) {
        var b = s(a, this.xPct);
        return {
            stepBefore: {
                startValue: this.xVal[b - 2],
                step: this.xNumSteps[b - 2],
                highestStep: this.xHighestCompleteStep[b - 2]
            },
            thisStep: {
                startValue: this.xVal[b - 1],
                step: this.xNumSteps[b - 1],
                highestStep: this.xHighestCompleteStep[b - 1]
            },
            stepAfter: {
                startValue: this.xVal[b - 0],
                step: this.xNumSteps[b - 0],
                highestStep: this.xHighestCompleteStep[b - 0]
            }
        };
    }, y.prototype.countStepDecimals = function () {
        var a = this.xNumSteps.map(i);
        return Math.max.apply(null, a);
    }, y.prototype.convert = function (a) {
        return this.getStep(this.toStepping(a));
    };
    var U = {
        to: function (a) {
            return void 0 !== a && a.toFixed(2);
        },
        from: Number
    };
    return {
        create: T
    };
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Ladda 0.9.4 (2014-06-21, 11:24)
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2014 Hakim El Hattab, http://hakim.se
 */
(function (t, e) {
   true ? module.exports = e(__webpack_require__(22)) : "function" == typeof define && define.amd ? define(["spin"], e) : t.Ladda = e(t.Spinner);
})(this, function (t) {
  "use strict";
  function e(t) {
    if (t === void 0) return console.warn("Ladda button target must be defined."), void 0;t.querySelector(".ladda-label") || (t.innerHTML = '<span class="ladda-label">' + t.innerHTML + "</span>");var e,
        n = document.createElement("span");n.className = "ladda-spinner", t.appendChild(n);var r,
        a = { start: function () {
        return e || (e = o(t)), t.setAttribute("disabled", ""), t.setAttribute("data-loading", ""), clearTimeout(r), e.spin(n), this.setProgress(0), this;
      }, startAfter: function (t) {
        return clearTimeout(r), r = setTimeout(function () {
          a.start();
        }, t), this;
      }, stop: function () {
        return t.removeAttribute("disabled"), t.removeAttribute("data-loading"), clearTimeout(r), e && (r = setTimeout(function () {
          e.stop();
        }, 1e3)), this;
      }, toggle: function () {
        return this.isLoading() ? this.stop() : this.start(), this;
      }, setProgress: function (e) {
        e = Math.max(Math.min(e, 1), 0);var n = t.querySelector(".ladda-progress");0 === e && n && n.parentNode ? n.parentNode.removeChild(n) : (n || (n = document.createElement("div"), n.className = "ladda-progress", t.appendChild(n)), n.style.width = (e || 0) * t.offsetWidth + "px");
      }, enable: function () {
        return this.stop(), this;
      }, disable: function () {
        return this.stop(), t.setAttribute("disabled", ""), this;
      }, isLoading: function () {
        return t.hasAttribute("data-loading");
      }, remove: function () {
        clearTimeout(r), t.removeAttribute("disabled", ""), t.removeAttribute("data-loading", ""), e && (e.stop(), e = null);for (var n = 0, i = u.length; i > n; n++) if (a === u[n]) {
          u.splice(n, 1);break;
        }
      } };return u.push(a), a;
  }function n(t, e) {
    for (; t.parentNode && t.tagName !== e;) t = t.parentNode;return e === t.tagName ? t : void 0;
  }function r(t) {
    for (var e = ["input", "textarea"], n = [], r = 0; e.length > r; r++) for (var a = t.getElementsByTagName(e[r]), i = 0; a.length > i; i++) a[i].hasAttribute("required") && n.push(a[i]);return n;
  }function a(t, a) {
    a = a || {};var i = [];"string" == typeof t ? i = s(document.querySelectorAll(t)) : "object" == typeof t && "string" == typeof t.nodeName && (i = [t]);for (var o = 0, u = i.length; u > o; o++) (function () {
      var t = i[o];if ("function" == typeof t.addEventListener) {
        var s = e(t),
            u = -1;t.addEventListener("click", function () {
          var e = !0,
              i = n(t, "FORM");if (i !== void 0) for (var o = r(i), d = 0; o.length > d; d++) "" === o[d].value.replace(/^\s+|\s+$/g, "") && (e = !1);e && (s.startAfter(1), "number" == typeof a.timeout && (clearTimeout(u), u = setTimeout(s.stop, a.timeout)), "function" == typeof a.callback && a.callback.apply(null, [s]));
        }, !1);
      }
    })();
  }function i() {
    for (var t = 0, e = u.length; e > t; t++) u[t].stop();
  }function o(e) {
    var n,
        r = e.offsetHeight;0 === r && (r = parseFloat(window.getComputedStyle(e).height)), r > 32 && (r *= .8), e.hasAttribute("data-spinner-size") && (r = parseInt(e.getAttribute("data-spinner-size"), 10)), e.hasAttribute("data-spinner-color") && (n = e.getAttribute("data-spinner-color"));var a = 12,
        i = .2 * r,
        o = .6 * i,
        s = 7 > i ? 2 : 3;return new t({ color: n || "#fff", lines: a, radius: i, length: o, width: s, zIndex: "auto", top: "auto", left: "auto", className: "" });
  }function s(t) {
    for (var e = [], n = 0; t.length > n; n++) e.push(t[n]);return e;
  }var u = [];return { bind: a, create: e, stopAll: i };
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

(function (t, e) {
   true ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Spinner = e();
})(this, function () {
  "use strict";
  function t(t, e) {
    var i,
        n = document.createElement(t || "div");for (i in e) n[i] = e[i];return n;
  }function e(t) {
    for (var e = 1, i = arguments.length; i > e; e++) t.appendChild(arguments[e]);return t;
  }function i(t, e, i, n) {
    var r = ["opacity", e, ~~(100 * t), i, n].join("-"),
        o = .01 + 100 * (i / n),
        a = Math.max(1 - (1 - t) / e * (100 - o), t),
        s = u.substring(0, u.indexOf("Animation")).toLowerCase(),
        l = s && "-" + s + "-" || "";return c[r] || (p.insertRule("@" + l + "keyframes " + r + "{" + "0%{opacity:" + a + "}" + o + "%{opacity:" + t + "}" + (o + .01) + "%{opacity:1}" + (o + e) % 100 + "%{opacity:" + t + "}" + "100%{opacity:" + a + "}" + "}", p.cssRules.length), c[r] = 1), r;
  }function n(t, e) {
    var i,
        n,
        r = t.style;for (e = e.charAt(0).toUpperCase() + e.slice(1), n = 0; d.length > n; n++) if (i = d[n] + e, void 0 !== r[i]) return i;return void 0 !== r[e] ? e : void 0;
  }function r(t, e) {
    for (var i in e) t.style[n(t, i) || i] = e[i];return t;
  }function o(t) {
    for (var e = 1; arguments.length > e; e++) {
      var i = arguments[e];for (var n in i) void 0 === t[n] && (t[n] = i[n]);
    }return t;
  }function a(t, e) {
    return "string" == typeof t ? t : t[e % t.length];
  }function s(t) {
    this.opts = o(t || {}, s.defaults, f);
  }function l() {
    function i(e, i) {
      return t("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', i);
    }p.addRule(".spin-vml", "behavior:url(#default#VML)"), s.prototype.lines = function (t, n) {
      function o() {
        return r(i("group", { coordsize: d + " " + d, coordorigin: -u + " " + -u }), { width: d, height: d });
      }function s(t, s, l) {
        e(p, e(r(o(), { rotation: 360 / n.lines * t + "deg", left: ~~s }), e(r(i("roundrect", { arcsize: n.corners }), { width: u, height: n.width, left: n.radius, top: -n.width >> 1, filter: l }), i("fill", { color: a(n.color, t), opacity: n.opacity }), i("stroke", { opacity: 0 }))));
      }var l,
          u = n.length + n.width,
          d = 2 * u,
          c = 2 * -(n.width + n.length) + "px",
          p = r(o(), { position: "absolute", top: c, left: c });if (n.shadow) for (l = 1; n.lines >= l; l++) s(l, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for (l = 1; n.lines >= l; l++) s(l);return e(t, p);
    }, s.prototype.opacity = function (t, e, i, n) {
      var r = t.firstChild;n = n.shadow && n.lines || 0, r && r.childNodes.length > e + n && (r = r.childNodes[e + n], r = r && r.firstChild, r = r && r.firstChild, r && (r.opacity = i));
    };
  }var u,
      d = ["webkit", "Moz", "ms", "O"],
      c = {},
      p = function () {
    var i = t("style", { type: "text/css" });return e(document.getElementsByTagName("head")[0], i), i.sheet || i.styleSheet;
  }(),
      f = { lines: 12, length: 7, width: 5, radius: 10, rotate: 0, corners: 1, color: "#000", direction: 1, speed: 1, trail: 100, opacity: .25, fps: 20, zIndex: 2e9, className: "spinner", top: "50%", left: "50%", position: "absolute" };s.defaults = {}, o(s.prototype, { spin: function (e) {
      this.stop();var i = this,
          n = i.opts,
          o = i.el = r(t(0, { className: n.className }), { position: n.position, width: 0, zIndex: n.zIndex });if (n.radius + n.length + n.width, r(o, { left: n.left, top: n.top }), e && e.insertBefore(o, e.firstChild || null), o.setAttribute("role", "progressbar"), i.lines(o, i.opts), !u) {
        var a,
            s = 0,
            l = (n.lines - 1) * (1 - n.direction) / 2,
            d = n.fps,
            c = d / n.speed,
            p = (1 - n.opacity) / (c * n.trail / 100),
            f = c / n.lines;(function h() {
          s++;for (var t = 0; n.lines > t; t++) a = Math.max(1 - (s + (n.lines - t) * f) % c * p, n.opacity), i.opacity(o, t * n.direction + l, a, n);i.timeout = i.el && setTimeout(h, ~~(1e3 / d));
        })();
      }return i;
    }, stop: function () {
      var t = this.el;return t && (clearTimeout(this.timeout), t.parentNode && t.parentNode.removeChild(t), this.el = void 0), this;
    }, lines: function (n, o) {
      function s(e, i) {
        return r(t(), { position: "absolute", width: o.length + o.width + "px", height: o.width + "px", background: e, boxShadow: i, transformOrigin: "left", transform: "rotate(" + ~~(360 / o.lines * d + o.rotate) + "deg) translate(" + o.radius + "px" + ",0)", borderRadius: (o.corners * o.width >> 1) + "px" });
      }for (var l, d = 0, c = (o.lines - 1) * (1 - o.direction) / 2; o.lines > d; d++) l = r(t(), { position: "absolute", top: 1 + ~(o.width / 2) + "px", transform: o.hwaccel ? "translate3d(0,0,0)" : "", opacity: o.opacity, animation: u && i(o.opacity, o.trail, c + d * o.direction, o.lines) + " " + 1 / o.speed + "s linear infinite" }), o.shadow && e(l, r(s("#000", "0 0 4px #000"), { top: "2px" })), e(n, e(l, s(a(o.color, d), "0 0 1px rgba(0,0,0,.1)")));return n;
    }, opacity: function (t, e, i) {
      t.childNodes.length > e && (t.childNodes[e].style.opacity = i);
    } });var h = r(t("group"), { behavior: "url(#default#VML)" });return !n(h, "transform") && h.adj ? l() : u = n(h, "animation"), s;
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_reconnecting_websocket__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_reconnecting_websocket___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vendor_reconnecting_websocket__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vendor_linkify__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vendor_linkify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vendor_linkify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vendor_linkify_string__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vendor_linkify_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__vendor_linkify_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tips__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__socket__ = __webpack_require__(4);






if ($('.section-order').length > 0) {

    var orderId = Number($('#order-refresh').attr('data-id'));
    var orderStatus = $('.panel-order').attr('data-status');

    function refreshOrder() {
        $('#order-refresh').load('/overwatch/order/' + orderId + '/refresh?nocache=' + Math.random(), fixAfterRefresh);
    }

    function refreshGamesHistory() {
        $('#order-games-history').load('/overwatch/order/' + orderId + '/history?nocache=' + Math.random());
    }

    function fixAfterRefresh() {
        $('.chart').easyPieChart({
            easing: 'easeOutBounce',
            barColor: '#5eb404',
            trackColor: '#e3e3e3',
            onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        countdownStart = Date.now();
        updateCountdowns();
        $('#order-refresh').tooltip({
            selector: '[data-toggle="tooltip"]'
        });
        if (orderStatus != 'Completed') {
            if ($('.panel-order').attr('data-status') == 'Completed') {
                location.reload();
            }
        }
        __WEBPACK_IMPORTED_MODULE_3__tips__["default"].enableTipButtons();
    }
    fixAfterRefresh();

    $('#options-nav .nav-link').click(function (e) {
        if ($('#options-collapse').hasClass('collapsed')) {
            $('#options-nav .nav-link').removeClass('active');
            $('#options .tab-pane').removeClass('show').removeClass('active');
            $($(this).attr('href')).addClass('active').addClass('show');
            $('#options-collapse').click();
        } else if ($(this).hasClass('active')) {
            setTimeout(function () {
                $('#options-nav .nav-link').removeClass('active');
            }, 1);
            $('#options-collapse').click();
        }
    });

    $('#options-collapse').click(function (e) {
        if ($(this).hasClass('collapsed')) {
            var id = $('#options .tab-pane.show').attr('id');
            $('#options-nav .nav-link[href$="' + id + '"]').addClass('active');
        } else {
            $('#options-nav .nav-link').removeClass('active');
        }
    });

    /* Pause, Resume */

    $('#order-refresh').on('click', '#btn-pause, #btn-resume', function (event) {
        event.preventDefault();
        if (orderId == 0) return;
        $(this).prop('disabled', true);
        $.ajax({
            method: 'POST',
            url: $(this).parents('form').attr('action')
        }).done(function (data) {
            $('#order-refresh').html(data);
            fixAfterRefresh();
        });
    });

    /* Countdown */

    var countdownStart = Date.now();
    function updateCountdowns() {
        $('.countdown').each(function () {
            var totalSeconds = $(this).attr('data-seconds') - ((Date.now() - countdownStart) / 1000 | 0);
            totalSeconds = totalSeconds > 0 ? totalSeconds : 0;
            var hours = parseInt(totalSeconds / 3600) % 24;
            var minutes = parseInt(totalSeconds / 60) % 60;
            var seconds = totalSeconds % 60;
            var result = "";
            if (hours > 0) {
                result += (hours < 10 ? "0" + hours : hours) + ":";
            }
            result += (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
            $(this).html(result);
        });
    }
    if ($('.countdown').length) {
        updateCountdowns();
    }
    setInterval(updateCountdowns, 1000);

    /* Game Account */

    var platform = $('#platform');
    var battletagField = $('#battletag-field');
    $('#region').change(function () {
        $(this).parent().find('.form-tooltip-error').hide();
    });
    $('#platform-pc').click(function (e) {
        e.preventDefault();
        platform.val('PC');
        if (battletagField) {
            battletagField.find('label').text('BattleTag');
            battletagField.find('input').attr('placeholder', 'BattleTag#1234');
        }
    });
    $('#platform-psn').click(function (e) {
        e.preventDefault();
        platform.val('PSN');
        if (battletagField) {
            battletagField.find('label').text('Online ID');
            battletagField.find('input').attr('placeholder', '');
        }
    });
    $('#platform-xbl').click(function (e) {
        e.preventDefault();
        platform.val('XBL');
        if (battletagField) {
            battletagField.find('label').text('Gamertag');
            battletagField.find('input').attr('placeholder', '');
        }
    });

    $(document).ready(function () {
        if ($('#form-update-game-account').length) {
            $('#form-update-game-account').validate({
                submit: {
                    settings: {
                        errorListClass: 'form-tooltip-error'
                    },
                    callback: {
                        onSubmit: function (node, formData) {
                            updateGameAccount(node, formData);
                        }
                    }
                }
            }).focusin(function () {
                $(this).find('button[type="submit"]:disabled').removeClass('btn-success').removeClass('btn-danger').addClass('btn-primary');
            });
        }
    });

    var updateGameAccountTimer;
    var updateGameAccountTimer2;
    function updateGameAccount(node, formData) {
        if (orderId == 0) return;
        clearTimeout(updateGameAccountTimer);
        node.find('input, select, button').not('.disabled').prop('disabled', true).parent('.input-group').addClass('disabled');
        node.find('a.nav-link').not('.disabled-forever').addClass('disabled');
        node.find('button[type="submit"]').html('Please wait...').removeClass('btn-success').removeClass('btn-danger').addClass('btn-primary');
        $.ajax({
            method: 'POST',
            url: node.attr('action'),
            data: formData
        }).done(function (data) {
            if ($('#alert-action-required').length) {
                $('#alert-action-required').remove();
                updateGameAccountTimer2 = setTimeout(function () {
                    $('#options-collapse').click();
                }, 3000);
            }
            node.find('button[type="submit"]').html('Game account updated').removeClass('btn-primary').addClass('btn-success');
            updateGameAccountTimer = setTimeout(function () {
                node.find('button[type="submit"]').html('Submit').removeClass('btn-success').addClass('btn-primary');
            }, 3000);
            refreshOrder();
        }).fail(function () {
            node.find('button[type="submit"]').html('Try again').removeClass('btn-primary').addClass('btn-danger');
        }).always(function () {
            node.find('input, select, button').not('.disabled').prop('disabled', false).parent('.input-group').removeClass('disabled');
            node.find('a.nav-link').not('.disabled-forever').removeClass('disabled');
        });
    }

    /* Heroes */

    var heroesDisabled = false;
    $('.heroes-icon').click(function () {
        if (!heroesDisabled) {
            $(this).parent().toggleClass('selected');
            updateHeroes();
        }
    });

    var updateHeroesTimer;
    $('#tab-heroes-button').click(function (event) {
        event.preventDefault();
        if (orderId == 0) return;
        clearTimeout(updateHeroesTimer);
        $(this).html('Please wait...').removeClass('btn-success').removeClass('btn-danger').addClass('btn-primary').prop('disabled', true);
        heroesDisabled = true;
        var selectedHeroes = [];
        $('.heroes-hero.selected').each(function () {
            selectedHeroes.push($(this).attr('data-id'));
        });
        $.ajax({
            method: 'POST',
            url: $(this).parent().attr('action'),
            data: { heroes: selectedHeroes.join() }
        }).done(function () {
            $('#tab-heroes-button').html('Heroes updated').removeClass('btn-primary').addClass('btn-success');
            updateHeroesTimer = setTimeout(updateHeroes, 3000);
        }).fail(function () {
            $('#tab-heroes-button').html('Try again').removeClass('btn-primary').addClass('btn-danger');
        }).always(function () {
            $('#tab-heroes-button').prop('disabled', false);
            heroesDisabled = false;
        });
    });

    function updateHeroes() {
        var n = $('.heroes-hero.selected').length;
        var btn = $('#tab-heroes-button');
        btn.removeClass('btn-success');
        if (n == 0 || n >= 6) {
            btn.removeClass('btn-danger').addClass('btn-primary').html('Submit');
            if (orderId != 0) {
                btn.prop('disabled', false);
            }
        } else {
            btn.removeClass('btn-primary').addClass('btn-danger').prop('disabled', true).html('Select at least 6 heroes');
        }
    }
    updateHeroes();

    /* Notes */

    if ($('#form-update-notes').length) {
        $('#form-update-notes').validate({
            submit: {
                callback: {
                    onSubmit: function (node, formData) {
                        updateNotes(node, formData);
                    }
                }
            }
        }).focusin(function () {
            $(this).find('button[type="submit"]').html('Submit').removeClass('btn-success').removeClass('btn-danger').addClass('btn-primary');
        });
    }

    var updateNotesTimer;
    function updateNotes(node, formData) {
        if (orderId == 0) return;
        clearTimeout(updateNotesTimer);
        node.find('textarea, button').prop('disabled', true);
        node.find('button[type="submit"]').html('Please wait...').removeClass('btn-success').removeClass('btn-danger').addClass('btn-primary');
        $.ajax({
            method: 'POST',
            url: node.attr('action'),
            data: formData
        }).done(function (data) {
            node.find('button[type="submit"]').html('Notes updated').removeClass('btn-primary').addClass('btn-success');
            updateNotesTimer = setTimeout(function () {
                node.find('button').html('Submit').removeClass('btn-success').addClass('btn-primary');
            }, 3000);
        }).fail(function () {
            node.find('button[type="submit"]').html('Try again').removeClass('btn-primary').addClass('btn-danger');
        }).always(function () {
            node.find('textarea, button').prop('disabled', false);
        });
    }

    /* Review */

    var formReview = $('#form-review');
    var yellowStarUrl = '';
    var greyStarUrl = '';
    if (formReview.length) {
        yellowStarUrl = formReview.attr('data-yellow-star-url');
        greyStarUrl = formReview.attr('data-grey-star-url');
        formReview.find('.star img').mouseover(function () {
            var n = parseInt($(this).parent().attr('data-id'));
            for (var i = 1; i <= n; i++) {
                formReview.find('.star' + i + ' img').attr('src', yellowStarUrl);
            }
        }).mouseout(function () {
            var n = parseInt(formReview.find('#review-stars').val());
            reviewUpdateStars(n);
        }).click(function () {
            formReview.find('.form-tooltip-error').hide();
            var n = parseInt($(this).parent().attr('data-id'));
            formReview.find('#review-stars').val(n);
            reviewUpdateStars(n);
        });
        formReview.validate({
            submit: {
                settings: {
                    inputContainer: '.input-group',
                    errorListClass: 'form-tooltip-error'
                },
                callback: {
                    onSubmit: function (node, formData) {
                        submitReview(node, formData);
                    }
                }
            }
        }).focusin(function () {
            $(this).find('button').html('Submit').removeClass('btn-success').removeClass('btn-danger').addClass('btn-primary');
        });
    }

    function reviewUpdateStars(n) {
        for (var i = 1; i <= 5; i++) {
            if (i <= n) {
                formReview.find('.star' + i + ' img').attr('src', yellowStarUrl);
            } else {
                formReview.find('.star' + i + ' img').attr('src', greyStarUrl);
            }
        }
    }

    function submitReview(node, formData) {
        formReview.find('.star img').unbind('click').unbind('mouseover').unbind('mouseout');
        node.find('textarea, button, input').prop('disabled', true);
        node.find('.input-group').addClass('disabled');
        node.find('button').html('Please wait...').removeClass('btn-success').removeClass('btn-danger').addClass('btn-primary');
        $.ajax({
            method: 'POST',
            url: node.attr('action'),
            data: formData
        }).done(function (data) {
            node.find('button').html('Thank you!').removeClass('btn-primary').addClass('btn-success');
            $('#promotional-code-group').removeClass('d-none').find('.promotional-code').text(data);
        }).fail(function () {
            node.find('button').html('Try again').removeClass('btn-primary').addClass('btn-danger');
            node.find('textarea, button, input').prop('disabled', false);
            node.find('.input-group').removeClass('disabled');
        });
    }

    /* Socket */

    __WEBPACK_IMPORTED_MODULE_4__socket__["default"].send(JSON.stringify({
        getChatHistory: {
            orderId: orderId
        }
    }));

    /* Chat */

    if ($('#chat-form').length) {
        var ws;
        var wsUrl = $('#chat-form').attr('action');
        if (location.protocol.indexOf('https') >= 0) {
            wsUrl = wsUrl.replace('ws:', 'wss:');
        }
        var chatId = $('#chat-messages').attr('data-id');

        var chatAtBottom = true;
        if (orderId > 0) {
            ws = new __WEBPACK_IMPORTED_MODULE_0__vendor_reconnecting_websocket___default.a(wsUrl);
            ws.onmessage = function (event) {
                var data = JSON.parse(event.data);
                switch (data.type) {
                    case 'history':
                        $('#chat-messages').html('');
                        for (var k in data.messages) {
                            chatAddMessage(data.messages[k], true);
                        }
                        chatScrollToBottom();
                        break;
                    case 'message':
                        chatAtBottom = isChatAtBottom();
                        chatAddMessage(data, false);
                        if (chatAtBottom) {
                            chatScrollToBottom();
                        }
                        break;
                    case 'refresh':
                        if (data.event != 'new') {
                            if (data.event == 'completed') {
                                window.location.reload(true);
                            } else {
                                refreshOrder();
                                if (data.event == 'history') {
                                    refreshGamesHistory();
                                }
                            }
                        }
                        break;
                    default:
                        console.log(data);
                }
            };
            $('#chat-form #message').keypress(handleReturnKey);
        } else {
            $('#chat-form #message').keypress(function (event) {
                if (event.charCode == 13 || event.keyCode == 13) {
                    event.preventDefault();
                    $('#message').val('');
                }
            });
        }

        // Idle

        var idleTime = 0;
        var idleInterval = setInterval(timerIncrement, 60000);
        $(document).mousemove(function (e) {
            if (idleTime >= 5) {
                ws.send(JSON.stringify({
                    idle: 0
                }));
            }
            idleTime = 0;
        });
        $(document).keypress(function (e) {
            if (idleTime >= 5) {
                ws.send(JSON.stringify({
                    idle: 0
                }));
            }
            idleTime = 0;
        });
    }

    function timerIncrement() {
        idleTime = idleTime + 1;
        ws.send(JSON.stringify({
            idle: idleTime
        }));
    }

    var chatDateTimeFormat = Intl.DateTimeFormat(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

    function chatAddMessage(data, history) {
        var messages = $('#chat-messages');
        var message = linkifyStr(data.message);
        var dateTime = chatDateTimeFormat.format(new Date(data.datetime));
        if (data.id == chatId) {
            chatAtBottom = true;
            messages.append('<div class="row me"><div class="col-12 col-sm-10 offset-sm-1"><div class="chat-message"><div class="chat-time">' + dateTime + ' </div><div class="chat-message-text">' + message + '</div></div></div></div>');
        } else {
            if (!history) {
                document.getElementById('snd-chat').play();
            }
            var msg = '<div class="row"><div class="col-12 col-sm-10 offset-sm-1"><div class="chat-message"><div class="chat-name">' + data.name;
            if (data.role == 'Admin' || data.role == 'Support') {
                msg += ' <span class="badge badge-success">Admin</span>';
            }
            msg += '</div><div class="chat-time">' + dateTime + ' </div><div class="chat-message-text">' + message + '</div></div></div></div>';
            messages.append(msg);
        }
    }

    function isChatAtBottom() {
        var container = $('#chat-messages-container');
        var height = container[0].scrollHeight - $(container[0]).innerHeight();
        return container.scrollTop() > height - 50;
    }

    function chatScrollToBottom() {
        var container = $('#chat-messages-container');
        container.scrollTop(container[0].scrollHeight);
    }

    function handleReturnKey(event) {
        if (event.charCode == 13 || event.keyCode == 13) {
            event.preventDefault();
            if ($('#message').val().trim() == '') {
                $('#message').val('');
                return;
            }
            ws.send(JSON.stringify({
                message: $('#message').val()
            }));
            $('#message').val('');
        }
    }
}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

;(function () {
    'use strict';

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    (function (exports) {
        'use strict';

        function inherits(parent, child) {
            var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            var extended = Object.create(parent.prototype);
            for (var p in props) {
                extended[p] = props[p];
            }
            extended.constructor = child;
            child.prototype = extended;
            return child;
        }

        var defaults = {
            defaultProtocol: 'http',
            events: null,
            format: noop,
            formatHref: noop,
            nl2br: false,
            tagName: 'a',
            target: typeToTarget,
            validate: true,
            ignoreTags: [],
            attributes: null,
            className: 'linkified' };

        function Options(opts) {
            opts = opts || {};

            this.defaultProtocol = opts.defaultProtocol || defaults.defaultProtocol;
            this.events = opts.events || defaults.events;
            this.format = opts.format || defaults.format;
            this.formatHref = opts.formatHref || defaults.formatHref;
            this.nl2br = opts.nl2br || defaults.nl2br;
            this.tagName = opts.tagName || defaults.tagName;
            this.target = opts.target || defaults.target;
            this.validate = opts.validate || defaults.validate;
            this.ignoreTags = [];

            // linkAttributes and linkClass is deprecated
            this.attributes = opts.attributes || opts.linkAttributes || defaults.attributes;
            this.className = opts.className || opts.linkClass || defaults.className;

            // Make all tags names upper case

            var ignoredTags = opts.ignoreTags || defaults.ignoreTags;
            for (var i = 0; i < ignoredTags.length; i++) {
                this.ignoreTags.push(ignoredTags[i].toUpperCase());
            }
        }

        Options.prototype = {
            /**
    * Given the token, return all options for how it should be displayed
    */
            resolve: function resolve(token) {
                var href = token.toHref(this.defaultProtocol);
                return {
                    formatted: this.get('format', token.toString(), token),
                    formattedHref: this.get('formatHref', href, token),
                    tagName: this.get('tagName', href, token),
                    className: this.get('className', href, token),
                    target: this.get('target', href, token),
                    events: this.getObject('events', href, token),
                    attributes: this.getObject('attributes', href, token)
                };
            },

            /**
    * Returns true or false based on whether a token should be displayed as a
    * link based on the user options. By default,
    */
            check: function check(token) {
                return this.get('validate', token.toString(), token);
            },

            // Private methods

            /**
    * Resolve an option's value based on the value of the option and the given
    * params.
    * @param [String] key Name of option to use
    * @param operator will be passed to the target option if it's method
    * @param [MultiToken] token The token from linkify.tokenize
    */
            get: function get(key, operator, token) {
                var option = this[key];

                if (!option) {
                    return option;
                }

                switch (typeof option === 'undefined' ? 'undefined' : _typeof(option)) {
                    case 'function':
                        return option(operator, token.type);
                    case 'object':
                        var optionValue = option[token.type] || defaults[key];
                        return typeof optionValue === 'function' ? optionValue(operator, token.type) : optionValue;
                }

                return option;
            },
            getObject: function getObject(key, operator, token) {
                var option = this[key];
                return typeof option === 'function' ? option(operator, token.type) : option;
            }
        };

        /**
   * Quick indexOf replacement for checking the ignoreTags option
   */
        function contains(arr, value) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === value) {
                    return true;
                }
            }
            return false;
        }

        function noop(val) {
            return val;
        }

        function typeToTarget(href, type) {
            return type === 'url' ? '_blank' : null;
        }

        var options = Object.freeze({
            defaults: defaults,
            Options: Options,
            contains: contains
        });

        function createStateClass() {
            return function (tClass) {
                this.j = [];
                this.T = tClass || null;
            };
        }

        /**
    A simple state machine that can emit token classes
  
    The `j` property in this class refers to state jumps. It's a
    multidimensional array where for each element:
  
    * index [0] is a symbol or class of symbols to transition to.
    * index [1] is a State instance which matches
  
    The type of symbol will depend on the target implementation for this class.
    In Linkify, we have a two-stage scanner. Each stage uses this state machine
    but with a slighly different (polymorphic) implementation.
  
    The `T` property refers to the token class.
  
    TODO: Can the `on` and `next` methods be combined?
  
    @class BaseState
  */
        var BaseState = createStateClass();
        BaseState.prototype = {
            defaultTransition: false,

            /**
    @method constructor
    @param {Class} tClass Pass in the kind of token to emit if there are
        no jumps after this state and the state is accepting.
   */

            /**
    On the given symbol(s), this machine should go to the given state
        @method on
    @param {Array|Mixed} symbol
    @param {BaseState} state Note that the type of this state should be the
        same as the current instance (i.e., don't pass in a different
        subclass)
   */
            on: function on(symbol, state) {
                if (symbol instanceof Array) {
                    for (var i = 0; i < symbol.length; i++) {
                        this.j.push([symbol[i], state]);
                    }
                    return this;
                }
                this.j.push([symbol, state]);
                return this;
            },

            /**
    Given the next item, returns next state for that item
    @method next
    @param {Mixed} item Should be an instance of the symbols handled by
        this particular machine.
    @return {State} state Returns false if no jumps are available
   */
            next: function next(item) {
                for (var i = 0; i < this.j.length; i++) {
                    var jump = this.j[i];
                    var symbol = jump[0]; // Next item to check for
                    var state = jump[1]; // State to jump to if items match

                    // compare item with symbol
                    if (this.test(item, symbol)) {
                        return state;
                    }
                }

                // Nowhere left to jump!
                return this.defaultTransition;
            },

            /**
    Does this state accept?
    `true` only of `this.T` exists
        @method accepts
    @return {Boolean}
   */
            accepts: function accepts() {
                return !!this.T;
            },

            /**
    Determine whether a given item "symbolizes" the symbol, where symbol is
    a class of items handled by this state machine.
        This method should be overriden in extended classes.
        @method test
    @param {Mixed} item Does this item match the given symbol?
    @param {Mixed} symbol
    @return {Boolean}
   */
            test: function test(item, symbol) {
                return item === symbol;
            },

            /**
    Emit the token for this State (just return it in this case)
    If this emits a token, this instance is an accepting state
    @method emit
    @return {Class} T
   */
            emit: function emit() {
                return this.T;
            }
        };

        /**
    State machine for string-based input
  
    @class CharacterState
    @extends BaseState
  */
        var CharacterState = inherits(BaseState, createStateClass(), {
            /**
    Does the given character match the given character or regular
    expression?
        @method test
    @param {String} char
    @param {String|RegExp} charOrRegExp
    @return {Boolean}
   */
            test: function test(character, charOrRegExp) {
                return character === charOrRegExp || charOrRegExp instanceof RegExp && charOrRegExp.test(character);
            }
        });

        /**
    State machine for input in the form of TextTokens
  
    @class TokenState
    @extends BaseState
  */
        var TokenState = inherits(BaseState, createStateClass(), {

            /**
    * Similar to `on`, but returns the state the results in the transition from
    * the given item
    * @method jump
    * @param {Mixed} item
    * @param {Token} [token]
    * @return state
    */
            jump: function jump(token) {
                var tClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

                var state = this.next(new token('')); // dummy temp token
                if (state === this.defaultTransition) {
                    // Make a new state!
                    state = new this.constructor(tClass);
                    this.on(token, state);
                } else if (tClass) {
                    state.T = tClass;
                }
                return state;
            },

            /**
    Is the given token an instance of the given token class?
        @method test
    @param {TextToken} token
    @param {Class} tokenClass
    @return {Boolean}
   */
            test: function test(token, tokenClass) {
                return token instanceof tokenClass;
            }
        });

        /**
    Given a non-empty target string, generates states (if required) for each
    consecutive substring of characters in str starting from the beginning of
    the string. The final state will have a special value, as specified in
    options. All other "in between" substrings will have a default end state.
  
    This turns the state machine into a Trie-like data structure (rather than a
    intelligently-designed DFA).
  
    Note that I haven't really tried these with any strings other than
    DOMAIN.
  
    @param {String} str
    @param {CharacterState} start State to jump from the first character
    @param {Class} endToken Token class to emit when the given string has been
        matched and no more jumps exist.
    @param {Class} defaultToken "Filler token", or which token type to emit when
        we don't have a full match
    @return {Array} list of newly-created states
  */
        function stateify(str, start, endToken, defaultToken) {
            var i = 0,
                len = str.length,
                state = start,
                newStates = [],
                nextState = void 0;

            // Find the next state without a jump to the next character
            while (i < len && (nextState = state.next(str[i]))) {
                state = nextState;
                i++;
            }

            if (i >= len) {
                return [];
            } // no new tokens were added

            while (i < len - 1) {
                nextState = new CharacterState(defaultToken);
                newStates.push(nextState);
                state.on(str[i], nextState);
                state = nextState;
                i++;
            }

            nextState = new CharacterState(endToken);
            newStates.push(nextState);
            state.on(str[len - 1], nextState);

            return newStates;
        }

        function createTokenClass() {
            return function (value) {
                if (value) {
                    this.v = value;
                }
            };
        }

        /******************************************************************************
    Text Tokens
    Tokens composed of strings
  ******************************************************************************/

        /**
    Abstract class used for manufacturing text tokens.
    Pass in the value this token represents
  
    @class TextToken
    @abstract
  */
        var TextToken = createTokenClass();
        TextToken.prototype = {
            toString: function toString() {
                return this.v + '';
            }
        };

        function inheritsToken(value) {
            var props = value ? { v: value } : {};
            return inherits(TextToken, createTokenClass(), props);
        }

        /**
    A valid domain token
    @class DOMAIN
    @extends TextToken
  */
        var DOMAIN = inheritsToken();

        /**
    @class AT
    @extends TextToken
  */
        var AT = inheritsToken('@');

        /**
    Represents a single colon `:` character
  
    @class COLON
    @extends TextToken
  */
        var COLON = inheritsToken(':');

        /**
    @class DOT
    @extends TextToken
  */
        var DOT = inheritsToken('.');

        /**
    A character class that can surround the URL, but which the URL cannot begin
    or end with. Does not include certain English punctuation like parentheses.
  
    @class PUNCTUATION
    @extends TextToken
  */
        var PUNCTUATION = inheritsToken();

        /**
    The word localhost (by itself)
    @class LOCALHOST
    @extends TextToken
  */
        var LOCALHOST = inheritsToken();

        /**
    Newline token
    @class NL
    @extends TextToken
  */
        var NL = inheritsToken('\n');

        /**
    @class NUM
    @extends TextToken
  */
        var NUM = inheritsToken();

        /**
    @class PLUS
    @extends TextToken
  */
        var PLUS = inheritsToken('+');

        /**
    @class POUND
    @extends TextToken
  */
        var POUND = inheritsToken('#');

        /**
    Represents a web URL protocol. Supported types include
  
    * `http:`
    * `https:`
    * `ftp:`
    * `ftps:`
  
    @class PROTOCOL
    @extends TextToken
  */
        var PROTOCOL = inheritsToken();

        /**
    Represents the start of the email URI protocol
  
    @class MAILTO
    @extends TextToken
  */
        var MAILTO = inheritsToken('mailto:');

        /**
    @class QUERY
    @extends TextToken
  */
        var QUERY = inheritsToken('?');

        /**
    @class SLASH
    @extends TextToken
  */
        var SLASH = inheritsToken('/');

        /**
    @class UNDERSCORE
    @extends TextToken
  */
        var UNDERSCORE = inheritsToken('_');

        /**
    One ore more non-whitespace symbol.
    @class SYM
    @extends TextToken
  */
        var SYM = inheritsToken();

        /**
    @class TLD
    @extends TextToken
  */
        var TLD = inheritsToken();

        /**
    Represents a string of consecutive whitespace characters
  
    @class WS
    @extends TextToken
  */
        var WS = inheritsToken();

        /**
    Opening/closing bracket classes
  */

        var OPENBRACE = inheritsToken('{');
        var OPENBRACKET = inheritsToken('[');
        var OPENANGLEBRACKET = inheritsToken('<');
        var OPENPAREN = inheritsToken('(');
        var CLOSEBRACE = inheritsToken('}');
        var CLOSEBRACKET = inheritsToken(']');
        var CLOSEANGLEBRACKET = inheritsToken('>');
        var CLOSEPAREN = inheritsToken(')');

        var AMPERSAND = inheritsToken('&');

        var text = Object.freeze({
            Base: TextToken,
            DOMAIN: DOMAIN,
            AT: AT,
            COLON: COLON,
            DOT: DOT,
            PUNCTUATION: PUNCTUATION,
            LOCALHOST: LOCALHOST,
            NL: NL,
            NUM: NUM,
            PLUS: PLUS,
            POUND: POUND,
            QUERY: QUERY,
            PROTOCOL: PROTOCOL,
            MAILTO: MAILTO,
            SLASH: SLASH,
            UNDERSCORE: UNDERSCORE,
            SYM: SYM,
            TLD: TLD,
            WS: WS,
            OPENBRACE: OPENBRACE,
            OPENBRACKET: OPENBRACKET,
            OPENANGLEBRACKET: OPENANGLEBRACKET,
            OPENPAREN: OPENPAREN,
            CLOSEBRACE: CLOSEBRACE,
            CLOSEBRACKET: CLOSEBRACKET,
            CLOSEANGLEBRACKET: CLOSEANGLEBRACKET,
            CLOSEPAREN: CLOSEPAREN,
            AMPERSAND: AMPERSAND
        });

        /**
    The scanner provides an interface that takes a string of text as input, and
    outputs an array of tokens instances that can be used for easy URL parsing.
  
    @module linkify
    @submodule scanner
    @main scanner
  */

        var tlds = 'aaa|aarp|abb|abbott|abogado|ac|academy|accenture|accountant|accountants|aco|active|actor|ad|adac|ads|adult|ae|aeg|aero|af|afl|ag|agency|ai|aig|airforce|airtel|al|alibaba|alipay|allfinanz|alsace|am|amica|amsterdam|an|analytics|android|ao|apartments|app|apple|aq|aquarelle|ar|aramco|archi|army|arpa|arte|as|asia|associates|at|attorney|au|auction|audi|audio|author|auto|autos|avianca|aw|ax|axa|az|azure|ba|baidu|band|bank|bar|barcelona|barclaycard|barclays|bargains|bauhaus|bayern|bb|bbc|bbva|bcg|bcn|bd|be|beats|beer|bentley|berlin|best|bet|bf|bg|bh|bharti|bi|bible|bid|bike|bing|bingo|bio|biz|bj|black|blackfriday|bloomberg|blue|bm|bms|bmw|bn|bnl|bnpparibas|bo|boats|boehringer|bom|bond|boo|book|boots|bosch|bostik|bot|boutique|br|bradesco|bridgestone|broadway|broker|brother|brussels|bs|bt|budapest|bugatti|build|builders|business|buy|buzz|bv|bw|by|bz|bzh|ca|cab|cafe|cal|call|camera|camp|cancerresearch|canon|capetown|capital|car|caravan|cards|care|career|careers|cars|cartier|casa|cash|casino|cat|catering|cba|cbn|cc|cd|ceb|center|ceo|cern|cf|cfa|cfd|cg|ch|chanel|channel|chase|chat|cheap|chloe|christmas|chrome|church|ci|cipriani|circle|cisco|citic|city|cityeats|ck|cl|claims|cleaning|click|clinic|clinique|clothing|cloud|club|clubmed|cm|cn|co|coach|codes|coffee|college|cologne|com|commbank|community|company|compare|computer|comsec|condos|construction|consulting|contact|contractors|cooking|cool|coop|corsica|country|coupon|coupons|courses|cr|credit|creditcard|creditunion|cricket|crown|crs|cruises|csc|cu|cuisinella|cv|cw|cx|cy|cymru|cyou|cz|dabur|dad|dance|date|dating|datsun|day|dclk|de|dealer|deals|degree|delivery|dell|deloitte|delta|democrat|dental|dentist|desi|design|dev|diamonds|diet|digital|direct|directory|discount|dj|dk|dm|dnp|do|docs|dog|doha|domains|download|drive|dubai|durban|dvag|dz|earth|eat|ec|edeka|edu|education|ee|eg|email|emerck|energy|engineer|engineering|enterprises|epson|equipment|er|erni|es|esq|estate|et|eu|eurovision|eus|events|everbank|exchange|expert|exposed|express|fage|fail|fairwinds|faith|family|fan|fans|farm|fashion|fast|feedback|ferrero|fi|film|final|finance|financial|firestone|firmdale|fish|fishing|fit|fitness|fj|fk|flickr|flights|florist|flowers|flsmidth|fly|fm|fo|foo|football|ford|forex|forsale|forum|foundation|fox|fr|fresenius|frl|frogans|frontier|fund|furniture|futbol|fyi|ga|gal|gallery|gallup|game|garden|gb|gbiz|gd|gdn|ge|gea|gent|genting|gf|gg|ggee|gh|gi|gift|gifts|gives|giving|gl|glass|gle|global|globo|gm|gmail|gmbh|gmo|gmx|gn|gold|goldpoint|golf|goo|goog|google|gop|got|gov|gp|gq|gr|grainger|graphics|gratis|green|gripe|group|gs|gt|gu|gucci|guge|guide|guitars|guru|gw|gy|hamburg|hangout|haus|hdfcbank|health|healthcare|help|helsinki|here|hermes|hiphop|hitachi|hiv|hk|hm|hn|hockey|holdings|holiday|homedepot|homes|honda|horse|host|hosting|hoteles|hotmail|house|how|hr|hsbc|ht|hu|hyundai|ibm|icbc|ice|icu|id|ie|ifm|iinet|il|im|immo|immobilien|in|industries|infiniti|info|ing|ink|institute|insurance|insure|int|international|investments|io|ipiranga|iq|ir|irish|is|iselect|ist|istanbul|it|itau|iwc|jaguar|java|jcb|je|jetzt|jewelry|jlc|jll|jm|jmp|jo|jobs|joburg|jot|joy|jp|jpmorgan|jprs|juegos|kaufen|kddi|ke|kerryhotels|kerrylogistics|kerryproperties|kfh|kg|kh|ki|kia|kim|kinder|kitchen|kiwi|km|kn|koeln|komatsu|kp|kpn|kr|krd|kred|kuokgroup|kw|ky|kyoto|kz|la|lacaixa|lamborghini|lamer|lancaster|land|landrover|lanxess|lasalle|lat|latrobe|law|lawyer|lb|lc|lds|lease|leclerc|legal|lexus|lgbt|li|liaison|lidl|life|lifeinsurance|lifestyle|lighting|like|limited|limo|lincoln|linde|link|live|living|lixil|lk|loan|loans|local|locus|lol|london|lotte|lotto|love|lr|ls|lt|ltd|ltda|lu|lupin|luxe|luxury|lv|ly|ma|madrid|maif|maison|makeup|man|management|mango|market|marketing|markets|marriott|mba|mc|md|me|med|media|meet|melbourne|meme|memorial|men|menu|meo|mg|mh|miami|microsoft|mil|mini|mk|ml|mm|mma|mn|mo|mobi|mobily|moda|moe|moi|mom|monash|money|montblanc|mormon|mortgage|moscow|motorcycles|mov|movie|movistar|mp|mq|mr|ms|mt|mtn|mtpc|mtr|mu|museum|mutuelle|mv|mw|mx|my|mz|na|nadex|nagoya|name|natura|navy|nc|ne|nec|net|netbank|network|neustar|new|news|nexus|nf|ng|ngo|nhk|ni|nico|nikon|ninja|nissan|nl|no|nokia|norton|nowruz|np|nr|nra|nrw|ntt|nu|nyc|nz|obi|office|okinawa|om|omega|one|ong|onl|online|ooo|oracle|orange|org|organic|origins|osaka|otsuka|ovh|pa|page|pamperedchef|panerai|paris|pars|partners|parts|party|passagens|pe|pet|pf|pg|ph|pharmacy|philips|photo|photography|photos|physio|piaget|pics|pictet|pictures|pid|pin|ping|pink|pizza|pk|pl|place|play|playstation|plumbing|plus|pm|pn|pohl|poker|porn|post|pr|praxi|press|pro|prod|productions|prof|promo|properties|property|protection|ps|pt|pub|pw|pwc|py|qa|qpon|quebec|quest|racing|re|read|realtor|realty|recipes|red|redstone|redumbrella|rehab|reise|reisen|reit|ren|rent|rentals|repair|report|republican|rest|restaurant|review|reviews|rexroth|rich|ricoh|rio|rip|ro|rocher|rocks|rodeo|room|rs|rsvp|ru|ruhr|run|rw|rwe|ryukyu|sa|saarland|safe|safety|sakura|sale|salon|samsung|sandvik|sandvikcoromant|sanofi|sap|sapo|sarl|sas|saxo|sb|sbs|sc|sca|scb|schaeffler|schmidt|scholarships|school|schule|schwarz|science|scor|scot|sd|se|seat|security|seek|select|sener|services|seven|sew|sex|sexy|sfr|sg|sh|sharp|shell|shia|shiksha|shoes|show|shriram|si|singles|site|sj|sk|ski|skin|sky|skype|sl|sm|smile|sn|sncf|so|soccer|social|softbank|software|sohu|solar|solutions|song|sony|soy|space|spiegel|spot|spreadbetting|sr|srl|st|stada|star|starhub|statefarm|statoil|stc|stcgroup|stockholm|storage|store|studio|study|style|su|sucks|supplies|supply|support|surf|surgery|suzuki|sv|swatch|swiss|sx|sy|sydney|symantec|systems|sz|tab|taipei|taobao|tatamotors|tatar|tattoo|tax|taxi|tc|tci|td|team|tech|technology|tel|telecity|telefonica|temasek|tennis|tf|tg|th|thd|theater|theatre|tickets|tienda|tiffany|tips|tires|tirol|tj|tk|tl|tm|tmall|tn|to|today|tokyo|tools|top|toray|toshiba|total|tours|town|toyota|toys|tp|tr|trade|trading|training|travel|travelers|travelersinsurance|trust|trv|tt|tube|tui|tunes|tushu|tv|tvs|tw|tz|ua|ubs|ug|uk|unicom|university|uno|uol|us|uy|uz|va|vacations|vana|vc|ve|vegas|ventures|verisign|versicherung|vet|vg|vi|viajes|video|viking|villas|vin|vip|virgin|vision|vista|vistaprint|viva|vlaanderen|vn|vodka|volkswagen|vote|voting|voto|voyage|vu|vuelos|wales|walter|wang|wanggou|watch|watches|weather|weatherchannel|webcam|weber|website|wed|wedding|weir|wf|whoswho|wien|wiki|williamhill|win|windows|wine|wme|wolterskluwer|work|works|world|ws|wtc|wtf|xbox|xerox|xin|xperia|xxx|xyz|yachts|yahoo|yamaxun|yandex|ye|yodobashi|yoga|yokohama|youtube|yt|za|zara|zero|zip|zm|zone|zuerich|zw'.split('|'); // macro, see gulpfile.js

        var NUMBERS = '0123456789'.split('');
        var ALPHANUM = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
        var WHITESPACE = [' ', '\f', '\r', '\t', '\v', '\xA0', '\u1680', '\u180E']; // excluding line breaks

        var domainStates = []; // states that jump to DOMAIN on /[a-z0-9]/
        var makeState = function makeState(tokenClass) {
            return new CharacterState(tokenClass);
        };

        // Frequently used states
        var S_START = makeState();
        var S_NUM = makeState(NUM);
        var S_DOMAIN = makeState(DOMAIN);
        var S_DOMAIN_HYPHEN = makeState(); // domain followed by 1 or more hyphen characters
        var S_WS = makeState(WS);

        // States for special URL symbols
        S_START.on('@', makeState(AT)).on('.', makeState(DOT)).on('+', makeState(PLUS)).on('#', makeState(POUND)).on('?', makeState(QUERY)).on('/', makeState(SLASH)).on('_', makeState(UNDERSCORE)).on(':', makeState(COLON)).on('{', makeState(OPENBRACE)).on('[', makeState(OPENBRACKET)).on('<', makeState(OPENANGLEBRACKET)).on('(', makeState(OPENPAREN)).on('}', makeState(CLOSEBRACE)).on(']', makeState(CLOSEBRACKET)).on('>', makeState(CLOSEANGLEBRACKET)).on(')', makeState(CLOSEPAREN)).on('&', makeState(AMPERSAND)).on([',', ';', '!', '"', '\''], makeState(PUNCTUATION));

        // Whitespace jumps
        // Tokens of only non-newline whitespace are arbitrarily long
        S_START.on('\n', makeState(NL)).on(WHITESPACE, S_WS);

        // If any whitespace except newline, more whitespace!
        S_WS.on(WHITESPACE, S_WS);

        // Generates states for top-level domains
        // Note that this is most accurate when tlds are in alphabetical order
        for (var i = 0; i < tlds.length; i++) {
            var newStates = stateify(tlds[i], S_START, TLD, DOMAIN);
            domainStates.push.apply(domainStates, newStates);
        }

        // Collect the states generated by different protocls
        var partialProtocolFileStates = stateify('file', S_START, DOMAIN, DOMAIN);
        var partialProtocolFtpStates = stateify('ftp', S_START, DOMAIN, DOMAIN);
        var partialProtocolHttpStates = stateify('http', S_START, DOMAIN, DOMAIN);
        var partialProtocolMailtoStates = stateify('mailto', S_START, DOMAIN, DOMAIN);

        // Add the states to the array of DOMAINeric states
        domainStates.push.apply(domainStates, partialProtocolFileStates);
        domainStates.push.apply(domainStates, partialProtocolFtpStates);
        domainStates.push.apply(domainStates, partialProtocolHttpStates);

        // Protocol states
        var S_PROTOCOL_FILE = partialProtocolFileStates.pop();
        var S_PROTOCOL_FTP = partialProtocolFtpStates.pop();
        var S_PROTOCOL_HTTP = partialProtocolHttpStates.pop();
        var S_MAILTO = partialProtocolMailtoStates.pop();
        var S_PROTOCOL_SECURE = makeState(DOMAIN);
        var S_FULL_PROTOCOL = makeState(PROTOCOL); // Full protocol ends with COLON
        var S_FULL_MAILTO = makeState(MAILTO); // Mailto ends with COLON

        // Secure protocols (end with 's')
        S_PROTOCOL_FTP.on('s', S_PROTOCOL_SECURE).on(':', S_FULL_PROTOCOL);

        S_PROTOCOL_HTTP.on('s', S_PROTOCOL_SECURE).on(':', S_FULL_PROTOCOL);

        domainStates.push(S_PROTOCOL_SECURE);

        // Become protocol tokens after a COLON
        S_PROTOCOL_FILE.on(':', S_FULL_PROTOCOL);
        S_PROTOCOL_SECURE.on(':', S_FULL_PROTOCOL);
        S_MAILTO.on(':', S_FULL_MAILTO);

        // Localhost
        var partialLocalhostStates = stateify('localhost', S_START, LOCALHOST, DOMAIN);
        domainStates.push.apply(domainStates, partialLocalhostStates);

        // Everything else
        // DOMAINs make more DOMAINs
        // Number and character transitions
        S_START.on(NUMBERS, S_NUM);
        S_NUM.on('-', S_DOMAIN_HYPHEN).on(NUMBERS, S_NUM).on(ALPHANUM, S_DOMAIN); // number becomes DOMAIN

        S_DOMAIN.on('-', S_DOMAIN_HYPHEN).on(ALPHANUM, S_DOMAIN);

        // All the generated states should have a jump to DOMAIN
        for (var _i = 0; _i < domainStates.length; _i++) {
            domainStates[_i].on('-', S_DOMAIN_HYPHEN).on(ALPHANUM, S_DOMAIN);
        }

        S_DOMAIN_HYPHEN.on('-', S_DOMAIN_HYPHEN).on(NUMBERS, S_DOMAIN).on(ALPHANUM, S_DOMAIN);

        // Set default transition
        S_START.defaultTransition = makeState(SYM);

        /**
    Given a string, returns an array of TOKEN instances representing the
    composition of that string.
  
    @method run
    @param {String} str Input string to scan
    @return {Array} Array of TOKEN instances
  */
        var run = function run(str) {

            // The state machine only looks at lowercase strings.
            // This selective `toLowerCase` is used because lowercasing the entire
            // string causes the length and character position to vary in some in some
            // non-English strings. This happens only on V8-based runtimes.
            var lowerStr = str.replace(/[A-Z]/g, function (c) {
                return c.toLowerCase();
            });
            var len = str.length;
            var tokens = []; // return value

            var cursor = 0;

            // Tokenize the string
            while (cursor < len) {
                var state = S_START;
                var secondState = null;
                var nextState = null;
                var tokenLength = 0;
                var latestAccepting = null;
                var sinceAccepts = -1;

                while (cursor < len && (nextState = state.next(lowerStr[cursor]))) {
                    secondState = null;
                    state = nextState;

                    // Keep track of the latest accepting state
                    if (state.accepts()) {
                        sinceAccepts = 0;
                        latestAccepting = state;
                    } else if (sinceAccepts >= 0) {
                        sinceAccepts++;
                    }

                    tokenLength++;
                    cursor++;
                }

                if (sinceAccepts < 0) {
                    continue;
                } // Should never happen

                // Roll back to the latest accepting state
                cursor -= sinceAccepts;
                tokenLength -= sinceAccepts;

                // Get the class for the new token
                var TOKEN = latestAccepting.emit(); // Current token class

                // No more jumps, just make a new token
                tokens.push(new TOKEN(str.substr(cursor - tokenLength, tokenLength)));
            }

            return tokens;
        };

        var start = S_START;

        var scanner = Object.freeze({
            State: CharacterState,
            TOKENS: text,
            run: run,
            start: start
        });

        /******************************************************************************
    Multi-Tokens
    Tokens composed of arrays of TextTokens
  ******************************************************************************/

        // Is the given token a valid domain token?
        // Should nums be included here?
        function isDomainToken(token) {
            return token instanceof DOMAIN || token instanceof TLD;
        }

        /**
    Abstract class used for manufacturing tokens of text tokens. That is rather
    than the value for a token being a small string of text, it's value an array
    of text tokens.
  
    Used for grouping together URLs, emails, hashtags, and other potential
    creations.
  
    @class MultiToken
    @abstract
  */
        var MultiToken = createTokenClass();

        MultiToken.prototype = {
            /**
    String representing the type for this token
    @property type
    @default 'TOKEN'
   */
            type: 'token',

            /**
    Is this multitoken a link?
    @property isLink
    @default false
   */
            isLink: false,

            /**
    Return the string this token represents.
    @method toString
    @return {String}
   */
            toString: function toString() {
                var result = [];
                for (var _i2 = 0; _i2 < this.v.length; _i2++) {
                    result.push(this.v[_i2].toString());
                }
                return result.join('');
            },

            /**
    What should the value for this token be in the `href` HTML attribute?
    Returns the `.toString` value by default.
        @method toHref
    @return {String}
   */
            toHref: function toHref() {
                return this.toString();
            },

            /**
    Returns a hash of relevant values for this token, which includes keys
    * type - Kind of token ('url', 'email', etc.)
    * value - Original text
    * href - The value that should be added to the anchor tag's href
        attribute
        @method toObject
    @param {String} [protocol] `'http'` by default
    @return {Object}
   */
            toObject: function toObject() {
                var protocol = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http';

                return {
                    type: this.type,
                    value: this.toString(),
                    href: this.toHref(protocol)
                };
            }
        };

        /**
    Represents an arbitrarily mailto email address with the prefix included
    @class MAILTO
    @extends MultiToken
  */
        var MAILTOEMAIL = inherits(MultiToken, createTokenClass(), {
            type: 'email',
            isLink: true
        });

        /**
    Represents a list of tokens making up a valid email address
    @class EMAIL
    @extends MultiToken
  */
        var EMAIL = inherits(MultiToken, createTokenClass(), {
            type: 'email',
            isLink: true,
            toHref: function toHref() {
                var tokens = this.v;
                return 'mailto:' + this.toString();
            }
        });

        /**
    Represents some plain text
    @class TEXT
    @extends MultiToken
  */
        var TEXT = inherits(MultiToken, createTokenClass(), { type: 'text' });

        /**
    Multi-linebreak token - represents a line break
    @class NL
    @extends MultiToken
  */
        var NL$1 = inherits(MultiToken, createTokenClass(), { type: 'nl' });

        /**
    Represents a list of tokens making up a valid URL
    @class URL
    @extends MultiToken
  */
        var URL = inherits(MultiToken, createTokenClass(), {
            type: 'url',
            isLink: true,

            /**
    Lowercases relevant parts of the domain and adds the protocol if
    required. Note that this will not escape unsafe HTML characters in the
    URL.
        @method href
    @param {String} protocol
    @return {String}
   */
            toHref: function toHref() {
                var protocol = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http';

                var hasProtocol = false;
                var hasSlashSlash = false;
                var tokens = this.v;
                var result = [];
                var i = 0;

                // Make the first part of the domain lowercase
                // Lowercase protocol
                while (tokens[i] instanceof PROTOCOL) {
                    hasProtocol = true;
                    result.push(tokens[i].toString().toLowerCase());
                    i++;
                }

                // Skip slash-slash
                while (tokens[i] instanceof SLASH) {
                    hasSlashSlash = true;
                    result.push(tokens[i].toString());
                    i++;
                }

                // Lowercase all other characters in the domain
                while (isDomainToken(tokens[i])) {
                    result.push(tokens[i].toString().toLowerCase());
                    i++;
                }

                // Leave all other characters as they were written
                for (; i < tokens.length; i++) {
                    result.push(tokens[i].toString());
                }

                result = result.join('');

                if (!(hasProtocol || hasSlashSlash)) {
                    result = protocol + '://' + result;
                }

                return result;
            },
            hasProtocol: function hasProtocol() {
                return this.v[0] instanceof PROTOCOL;
            }
        });

        var multi = Object.freeze({
            Base: MultiToken,
            MAILTOEMAIL: MAILTOEMAIL,
            EMAIL: EMAIL,
            NL: NL$1,
            TEXT: TEXT,
            URL: URL
        });

        /**
    Not exactly parser, more like the second-stage scanner (although we can
    theoretically hotswap the code here with a real parser in the future... but
    for a little URL-finding utility abstract syntax trees may be a little
    overkill).
  
    URL format: http://en.wikipedia.org/wiki/URI_scheme
    Email format: http://en.wikipedia.org/wiki/Email_address (links to RFC in
    reference)
  
    @module linkify
    @submodule parser
    @main parser
  */

        var makeState$1 = function makeState$1(tokenClass) {
            return new TokenState(tokenClass);
        };

        // The universal starting state.
        var S_START$1 = makeState$1();

        // Intermediate states for URLs. Note that domains that begin with a protocol
        // are treated slighly differently from those that don't.
        var S_PROTOCOL = makeState$1(); // e.g., 'http:'
        var S_MAILTO$1 = makeState$1(); // 'mailto:'
        var S_PROTOCOL_SLASH = makeState$1(); // e.g., '/', 'http:/''
        var S_PROTOCOL_SLASH_SLASH = makeState$1(); // e.g., '//', 'http://'
        var S_DOMAIN$1 = makeState$1(); // parsed string ends with a potential domain name (A)
        var S_DOMAIN_DOT = makeState$1(); // (A) domain followed by DOT
        var S_TLD = makeState$1(URL); // (A) Simplest possible URL with no query string
        var S_TLD_COLON = makeState$1(); // (A) URL followed by colon (potential port number here)
        var S_TLD_PORT = makeState$1(URL); // TLD followed by a port number
        var S_URL = makeState$1(URL); // Long URL with optional port and maybe query string
        var S_URL_NON_ACCEPTING = makeState$1(); // URL followed by some symbols (will not be part of the final URL)
        var S_URL_OPENBRACE = makeState$1(); // URL followed by {
        var S_URL_OPENBRACKET = makeState$1(); // URL followed by [
        var S_URL_OPENANGLEBRACKET = makeState$1(); // URL followed by <
        var S_URL_OPENPAREN = makeState$1(); // URL followed by (
        var S_URL_OPENBRACE_Q = makeState$1(URL); // URL followed by { and some symbols that the URL can end it
        var S_URL_OPENBRACKET_Q = makeState$1(URL); // URL followed by [ and some symbols that the URL can end it
        var S_URL_OPENANGLEBRACKET_Q = makeState$1(URL); // URL followed by < and some symbols that the URL can end it
        var S_URL_OPENPAREN_Q = makeState$1(URL); // URL followed by ( and some symbols that the URL can end it
        var S_URL_OPENBRACE_SYMS = makeState$1(); // S_URL_OPENBRACE_Q followed by some symbols it cannot end it
        var S_URL_OPENBRACKET_SYMS = makeState$1(); // S_URL_OPENBRACKET_Q followed by some symbols it cannot end it
        var S_URL_OPENANGLEBRACKET_SYMS = makeState$1(); // S_URL_OPENANGLEBRACKET_Q followed by some symbols it cannot end it
        var S_URL_OPENPAREN_SYMS = makeState$1(); // S_URL_OPENPAREN_Q followed by some symbols it cannot end it
        var S_EMAIL_DOMAIN = makeState$1(); // parsed string starts with local email info + @ with a potential domain name (C)
        var S_EMAIL_DOMAIN_DOT = makeState$1(); // (C) domain followed by DOT
        var S_EMAIL = makeState$1(EMAIL); // (C) Possible email address (could have more tlds)
        var S_EMAIL_COLON = makeState$1(); // (C) URL followed by colon (potential port number here)
        var S_EMAIL_PORT = makeState$1(EMAIL); // (C) Email address with a port
        var S_MAILTO_EMAIL = makeState$1(MAILTOEMAIL); // Email that begins with the mailto prefix (D)
        var S_MAILTO_EMAIL_NON_ACCEPTING = makeState$1(); // (D) Followed by some non-query string chars
        var S_LOCALPART = makeState$1(); // Local part of the email address
        var S_LOCALPART_AT = makeState$1(); // Local part of the email address plus @
        var S_LOCALPART_DOT = makeState$1(); // Local part of the email address plus '.' (localpart cannot end in .)
        var S_NL = makeState$1(NL$1); // single new line

        // Make path from start to protocol (with '//')
        S_START$1.on(NL, S_NL).on(PROTOCOL, S_PROTOCOL).on(MAILTO, S_MAILTO$1).on(SLASH, S_PROTOCOL_SLASH);

        S_PROTOCOL.on(SLASH, S_PROTOCOL_SLASH);
        S_PROTOCOL_SLASH.on(SLASH, S_PROTOCOL_SLASH_SLASH);

        // The very first potential domain name
        S_START$1.on(TLD, S_DOMAIN$1).on(DOMAIN, S_DOMAIN$1).on(LOCALHOST, S_TLD).on(NUM, S_DOMAIN$1);

        // Force URL for protocol followed by anything sane
        S_PROTOCOL_SLASH_SLASH.on(TLD, S_URL).on(DOMAIN, S_URL).on(NUM, S_URL).on(LOCALHOST, S_URL);

        // Account for dots and hyphens
        // hyphens are usually parts of domain names
        S_DOMAIN$1.on(DOT, S_DOMAIN_DOT);
        S_EMAIL_DOMAIN.on(DOT, S_EMAIL_DOMAIN_DOT);

        // Hyphen can jump back to a domain name

        // After the first domain and a dot, we can find either a URL or another domain
        S_DOMAIN_DOT.on(TLD, S_TLD).on(DOMAIN, S_DOMAIN$1).on(NUM, S_DOMAIN$1).on(LOCALHOST, S_DOMAIN$1);

        S_EMAIL_DOMAIN_DOT.on(TLD, S_EMAIL).on(DOMAIN, S_EMAIL_DOMAIN).on(NUM, S_EMAIL_DOMAIN).on(LOCALHOST, S_EMAIL_DOMAIN);

        // S_TLD accepts! But the URL could be longer, try to find a match greedily
        // The `run` function should be able to "rollback" to the accepting state
        S_TLD.on(DOT, S_DOMAIN_DOT);
        S_EMAIL.on(DOT, S_EMAIL_DOMAIN_DOT);

        // Become real URLs after `SLASH` or `COLON NUM SLASH`
        // Here PSS and non-PSS converge
        S_TLD.on(COLON, S_TLD_COLON).on(SLASH, S_URL);
        S_TLD_COLON.on(NUM, S_TLD_PORT);
        S_TLD_PORT.on(SLASH, S_URL);
        S_EMAIL.on(COLON, S_EMAIL_COLON);
        S_EMAIL_COLON.on(NUM, S_EMAIL_PORT);

        // Types of characters the URL can definitely end in
        var qsAccepting = [DOMAIN, AT, LOCALHOST, NUM, PLUS, POUND, PROTOCOL, SLASH, TLD, UNDERSCORE, SYM, AMPERSAND];

        // Types of tokens that can follow a URL and be part of the query string
        // but cannot be the very last characters
        // Characters that cannot appear in the URL at all should be excluded
        var qsNonAccepting = [COLON, DOT, QUERY, PUNCTUATION, CLOSEBRACE, CLOSEBRACKET, CLOSEANGLEBRACKET, CLOSEPAREN, OPENBRACE, OPENBRACKET, OPENANGLEBRACKET, OPENPAREN];

        // These states are responsible primarily for determining whether or not to
        // include the final round bracket.

        // URL, followed by an opening bracket
        S_URL.on(OPENBRACE, S_URL_OPENBRACE).on(OPENBRACKET, S_URL_OPENBRACKET).on(OPENANGLEBRACKET, S_URL_OPENANGLEBRACKET).on(OPENPAREN, S_URL_OPENPAREN);

        // URL with extra symbols at the end, followed by an opening bracket
        S_URL_NON_ACCEPTING.on(OPENBRACE, S_URL_OPENBRACE).on(OPENBRACKET, S_URL_OPENBRACKET).on(OPENANGLEBRACKET, S_URL_OPENANGLEBRACKET).on(OPENPAREN, S_URL_OPENPAREN);

        // Closing bracket component. This character WILL be included in the URL
        S_URL_OPENBRACE.on(CLOSEBRACE, S_URL);
        S_URL_OPENBRACKET.on(CLOSEBRACKET, S_URL);
        S_URL_OPENANGLEBRACKET.on(CLOSEANGLEBRACKET, S_URL);
        S_URL_OPENPAREN.on(CLOSEPAREN, S_URL);
        S_URL_OPENBRACE_Q.on(CLOSEBRACE, S_URL);
        S_URL_OPENBRACKET_Q.on(CLOSEBRACKET, S_URL);
        S_URL_OPENANGLEBRACKET_Q.on(CLOSEANGLEBRACKET, S_URL);
        S_URL_OPENPAREN_Q.on(CLOSEPAREN, S_URL);
        S_URL_OPENBRACE_SYMS.on(CLOSEBRACE, S_URL);
        S_URL_OPENBRACKET_SYMS.on(CLOSEBRACKET, S_URL);
        S_URL_OPENANGLEBRACKET_SYMS.on(CLOSEANGLEBRACKET, S_URL);
        S_URL_OPENPAREN_SYMS.on(CLOSEPAREN, S_URL);

        // URL that beings with an opening bracket, followed by a symbols.
        // Note that the final state can still be `S_URL_OPENBRACE_Q` (if the URL only
        // has a single opening bracket for some reason).
        S_URL_OPENBRACE.on(qsAccepting, S_URL_OPENBRACE_Q);
        S_URL_OPENBRACKET.on(qsAccepting, S_URL_OPENBRACKET_Q);
        S_URL_OPENANGLEBRACKET.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
        S_URL_OPENPAREN.on(qsAccepting, S_URL_OPENPAREN_Q);
        S_URL_OPENBRACE.on(qsNonAccepting, S_URL_OPENBRACE_SYMS);
        S_URL_OPENBRACKET.on(qsNonAccepting, S_URL_OPENBRACKET_SYMS);
        S_URL_OPENANGLEBRACKET.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_SYMS);
        S_URL_OPENPAREN.on(qsNonAccepting, S_URL_OPENPAREN_SYMS);

        // URL that begins with an opening bracket, followed by some symbols
        S_URL_OPENBRACE_Q.on(qsAccepting, S_URL_OPENBRACE_Q);
        S_URL_OPENBRACKET_Q.on(qsAccepting, S_URL_OPENBRACKET_Q);
        S_URL_OPENANGLEBRACKET_Q.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
        S_URL_OPENPAREN_Q.on(qsAccepting, S_URL_OPENPAREN_Q);
        S_URL_OPENBRACE_Q.on(qsNonAccepting, S_URL_OPENBRACE_Q);
        S_URL_OPENBRACKET_Q.on(qsNonAccepting, S_URL_OPENBRACKET_Q);
        S_URL_OPENANGLEBRACKET_Q.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_Q);
        S_URL_OPENPAREN_Q.on(qsNonAccepting, S_URL_OPENPAREN_Q);

        S_URL_OPENBRACE_SYMS.on(qsAccepting, S_URL_OPENBRACE_Q);
        S_URL_OPENBRACKET_SYMS.on(qsAccepting, S_URL_OPENBRACKET_Q);
        S_URL_OPENANGLEBRACKET_SYMS.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
        S_URL_OPENPAREN_SYMS.on(qsAccepting, S_URL_OPENPAREN_Q);
        S_URL_OPENBRACE_SYMS.on(qsNonAccepting, S_URL_OPENBRACE_SYMS);
        S_URL_OPENBRACKET_SYMS.on(qsNonAccepting, S_URL_OPENBRACKET_SYMS);
        S_URL_OPENANGLEBRACKET_SYMS.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_SYMS);
        S_URL_OPENPAREN_SYMS.on(qsNonAccepting, S_URL_OPENPAREN_SYMS);

        // Account for the query string
        S_URL.on(qsAccepting, S_URL);
        S_URL_NON_ACCEPTING.on(qsAccepting, S_URL);

        S_URL.on(qsNonAccepting, S_URL_NON_ACCEPTING);
        S_URL_NON_ACCEPTING.on(qsNonAccepting, S_URL_NON_ACCEPTING);

        // Email address-specific state definitions
        // Note: We are not allowing '/' in email addresses since this would interfere
        // with real URLs

        // For addresses with the mailto prefix
        // 'mailto:' followed by anything sane is a valid email
        S_MAILTO$1.on(TLD, S_MAILTO_EMAIL).on(DOMAIN, S_MAILTO_EMAIL).on(NUM, S_MAILTO_EMAIL).on(LOCALHOST, S_MAILTO_EMAIL);

        // Greedily get more potential valid email values
        S_MAILTO_EMAIL.on(qsAccepting, S_MAILTO_EMAIL).on(qsNonAccepting, S_MAILTO_EMAIL_NON_ACCEPTING);
        S_MAILTO_EMAIL_NON_ACCEPTING.on(qsAccepting, S_MAILTO_EMAIL).on(qsNonAccepting, S_MAILTO_EMAIL_NON_ACCEPTING);

        // For addresses without the mailto prefix
        // Tokens allowed in the localpart of the email
        var localpartAccepting = [DOMAIN, NUM, PLUS, POUND, QUERY, UNDERSCORE, SYM, AMPERSAND, TLD];

        // Some of the tokens in `localpartAccepting` are already accounted for here and
        // will not be overwritten (don't worry)
        S_DOMAIN$1.on(localpartAccepting, S_LOCALPART).on(AT, S_LOCALPART_AT);
        S_TLD.on(localpartAccepting, S_LOCALPART).on(AT, S_LOCALPART_AT);
        S_DOMAIN_DOT.on(localpartAccepting, S_LOCALPART);

        // Okay we're on a localpart. Now what?
        // TODO: IP addresses and what if the email starts with numbers?
        S_LOCALPART.on(localpartAccepting, S_LOCALPART).on(AT, S_LOCALPART_AT) // close to an email address now
        .on(DOT, S_LOCALPART_DOT);
        S_LOCALPART_DOT.on(localpartAccepting, S_LOCALPART);
        S_LOCALPART_AT.on(TLD, S_EMAIL_DOMAIN).on(DOMAIN, S_EMAIL_DOMAIN).on(LOCALHOST, S_EMAIL);
        // States following `@` defined above

        var run$1 = function run$1(tokens) {
            var len = tokens.length;
            var cursor = 0;
            var multis = [];
            var textTokens = [];

            while (cursor < len) {
                var state = S_START$1;
                var secondState = null;
                var nextState = null;
                var multiLength = 0;
                var latestAccepting = null;
                var sinceAccepts = -1;

                while (cursor < len && !(secondState = state.next(tokens[cursor]))) {
                    // Starting tokens with nowhere to jump to.
                    // Consider these to be just plain text
                    textTokens.push(tokens[cursor++]);
                }

                while (cursor < len && (nextState = secondState || state.next(tokens[cursor]))) {

                    // Get the next state
                    secondState = null;
                    state = nextState;

                    // Keep track of the latest accepting state
                    if (state.accepts()) {
                        sinceAccepts = 0;
                        latestAccepting = state;
                    } else if (sinceAccepts >= 0) {
                        sinceAccepts++;
                    }

                    cursor++;
                    multiLength++;
                }

                if (sinceAccepts < 0) {

                    // No accepting state was found, part of a regular text token
                    // Add all the tokens we looked at to the text tokens array
                    for (var _i3 = cursor - multiLength; _i3 < cursor; _i3++) {
                        textTokens.push(tokens[_i3]);
                    }
                } else {

                    // Accepting state!

                    // First close off the textTokens (if available)
                    if (textTokens.length > 0) {
                        multis.push(new TEXT(textTokens));
                        textTokens = [];
                    }

                    // Roll back to the latest accepting state
                    cursor -= sinceAccepts;
                    multiLength -= sinceAccepts;

                    // Create a new multitoken
                    var MULTI = latestAccepting.emit();
                    multis.push(new MULTI(tokens.slice(cursor - multiLength, cursor)));
                }
            }

            // Finally close off the textTokens (if available)
            if (textTokens.length > 0) {
                multis.push(new TEXT(textTokens));
            }

            return multis;
        };

        var parser = Object.freeze({
            State: TokenState,
            TOKENS: multi,
            run: run$1,
            start: S_START$1
        });

        if (!Array.isArray) {
            Array.isArray = function (arg) {
                return Object.prototype.toString.call(arg) === '[object Array]';
            };
        }

        /**
    Converts a string into tokens that represent linkable and non-linkable bits
    @method tokenize
    @param {String} str
    @return {Array} tokens
  */
        var tokenize = function tokenize(str) {
            return run$1(run(str));
        };

        /**
    Returns a list of linkable items in the given string.
  */
        var find = function find(str) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            var tokens = tokenize(str);
            var filtered = [];

            for (var i = 0; i < tokens.length; i++) {
                var token = tokens[i];
                if (token.isLink && (!type || token.type === type)) {
                    filtered.push(token.toObject());
                }
            }

            return filtered;
        };

        /**
    Is the given string valid linkable text of some sort
    Note that this does not trim the text for you.
  
    Optionally pass in a second `type` param, which is the type of link to test
    for.
  
    For example,
  
        test(str, 'email');
  
    Will return `true` if str is a valid email.
  */
        var test = function test(str) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            var tokens = tokenize(str);
            return tokens.length === 1 && tokens[0].isLink && (!type || tokens[0].type === type);
        };

        exports.find = find;
        exports.inherits = inherits;
        exports.options = options;
        exports.parser = parser;
        exports.scanner = scanner;
        exports.test = test;
        exports.tokenize = tokenize;
    })(self.linkify = self.linkify || {});
})();

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


;(function (window, linkify) {
    var linkifyString = function (linkify) {
        'use strict';

        /**
    Convert strings of text into linkable HTML text
  */

        var tokenize = linkify.tokenize,
            options = linkify.options;
        var Options = options.Options;

        function escapeText(text) {
            return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        }

        function escapeAttr(href) {
            return href.replace(/"/g, '&quot;');
        }

        function attributesToString(attributes) {
            if (!attributes) {
                return '';
            }
            var result = [];

            for (var attr in attributes) {
                var val = attributes[attr] + '';
                result.push(attr + '="' + escapeAttr(val) + '"');
            }
            return result.join(' ');
        }

        function linkifyStr(str) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            opts = new Options(opts);

            var tokens = tokenize(str);
            var result = [];

            for (var i = 0; i < tokens.length; i++) {
                var token = tokens[i];

                if (token.type === 'nl' && opts.nl2br) {
                    result.push('<br>\n');
                    continue;
                } else if (!token.isLink || !opts.check(token)) {
                    result.push(escapeText(token.toString()));
                    continue;
                }

                var _opts$resolve = opts.resolve(token),
                    formatted = _opts$resolve.formatted,
                    formattedHref = _opts$resolve.formattedHref,
                    tagName = _opts$resolve.tagName,
                    className = _opts$resolve.className,
                    target = _opts$resolve.target,
                    attributes = _opts$resolve.attributes;

                var link = '<' + tagName + ' href="' + escapeAttr(formattedHref) + '"';

                if (className) {
                    link += ' class="' + escapeAttr(className) + '"';
                }

                if (target) {
                    link += ' target="' + escapeAttr(target) + '"';
                }

                if (attributes) {
                    link += ' ' + attributesToString(attributes);
                }

                link += '>' + escapeText(formatted) + '</' + tagName + '>';
                result.push(link);
            }

            return result.join('');
        }

        if (!String.prototype.linkify) {
            String.prototype.linkify = function (opts) {
                return linkifyStr(this, opts);
            };
        }

        return linkifyStr;
    }(linkify);

    window.linkifyStr = linkifyString;
})(window, linkify);

/***/ }),
/* 26 */
/***/ (function(module, exports) {


if ($('#form-jobs').length) {
    $('#position-coach').change(function () {
        jobsUpdatePositionCheckboxesValidation();
    });
    $('#position-booster').change(function () {
        jobsUpdatePositionCheckboxesValidation();
    });
    $('#platform-pc').change(function () {
        jobsPlatformPcChanged();
        jobsUpdateCheckboxesValidation();
    });
    $('#platform-psn').change(function () {
        jobsPlatformPsnChanged();
        jobsUpdateCheckboxesValidation();
    });
    $('#platform-xbl').change(function () {
        jobsPlatformXblChanged();
        jobsUpdateCheckboxesValidation();
    });
    $('#country').change(function () {
        $('#input-group-country').find('.form-tooltip-error').remove();
    });
    jobsPlatformPcChanged();
    jobsPlatformPsnChanged();
    jobsPlatformXblChanged();
}

function jobsUpdatePositionCheckboxesValidation() {
    $('#input-group-position').find('.form-tooltip-error').remove();
    if (!$('#position-coach').prop('checked') && !$('#position-booster').prop('checked')) {
        $('#position').attr('data-validation', '[L>0]');
    } else {
        $('#position').removeAttr('data-validation');
    }
}

function jobsPlatformPcChanged() {
    if ($('#platform-pc').prop('checked')) {
        $('#battletag').attr('data-validation-regex', '/^.{3,12}#\\d{4,6}$/');
        $('#input-group-battletag').removeClass('d-none');
    } else {
        $('#battletag').val('');
        $('#battletag').removeAttr('data-validation-regex');
        $('#input-group-battletag').addClass('d-none');
    }
}

function jobsPlatformPsnChanged() {
    if ($('#platform-psn').prop('checked')) {
        $('#psn-online-id').attr('data-validation', '[L>=3, L<=16]');
        $('#input-group-psn-online-id').removeClass('d-none');
        //$('#input-group-psn-online-id').find('.hidden').removeClass('hidden');
    } else {
        $('#psn-online-id').val('');
        $('#psn-online-id').removeAttr('data-validation');
        $('#input-group-psn-online-id').addClass('d-none');
    }
}

function jobsPlatformXblChanged() {
    if ($('#platform-xbl').prop('checked')) {
        $('#xbox-gamertag').attr('data-validation', '[L>=1, L<=15]');
        $('#input-group-xbox-gamertag').removeClass('d-none');
        //$('#xbox-gamertag_field').find('.hidden').removeClass('hidden');
    } else {
        $('#xbox-gamertag').val('');
        $('#xbox-gamertag').removeAttr('data-validation');
        $('#input-group-xbox-gamertag').addClass('d-none');
    }
}

function jobsUpdateCheckboxesValidation() {
    $('#input-group-platform').find('.form-tooltip-error').remove();
    if (!$('#platform-pc').prop('checked') && !$('#platform-psn').prop('checked') && !$('#platform-xbl').prop('checked')) {
        $('#platform').attr('data-validation', '[L>0]');
    } else {
        $('#platform').removeAttr('data-validation');
    }
}

/***/ }),
/* 27 */
/***/ (function(module, exports) {


var formProfileNameTimer;
if ($('#form-profile-name').length) {
    $('#form-profile-name').validate({
        submit: {
            settings: {
                inputContainer: '.input-group',
                errorListClass: 'form-tooltip-error'
            },
            callback: {
                onSubmit: function (node, formData) {
                    clearTimeout(formProfileNameTimer);
                    var btn = node.find('button');
                    btn.prop('disabled', true);
                    btn.html('Updating...').removeClass('btn-primary').removeClass('btn-danger').addClass('btn-primary');
                    $.post($(node).attr('action'), formData).done(function () {
                        btn.html('Updated').removeClass('btn-primary').addClass('btn-success');
                        formProfileNameTimer = setTimeout(function () {
                            node.find('button').html('Update').removeClass('btn-success').addClass('btn-primary');
                        }, 3000);
                    }).fail(function () {
                        btn.html('Try Again').removeClass('btn-primary').addClass('btn-danger');
                    }).always(function () {
                        btn.prop('disabled', false);
                    });
                    return false;
                }
            }
        }
    }).focusin(function () {
        $(this).find('button').html('Update').removeClass('btn-success').removeClass('btn-danger').addClass('btn-primary');
    });
}

var formProfilePasswordTimer;
if ($('#form-profile-password').length) {
    $('#form-profile-password').validate({
        submit: {
            settings: {
                inputContainer: '.input-group',
                errorListClass: 'form-tooltip-error'
            },
            callback: {
                onSubmit: function (node, formData) {
                    clearTimeout(formProfilePasswordTimer);
                    var btn = node.find('button');
                    btn.prop('disabled', true);
                    btn.html('Changing password...').removeClass('btn-primary').removeClass('btn-danger').addClass('btn-primary');
                    $.post($(node).attr('action'), formData).done(function () {
                        btn.html('Password changed').removeClass('btn-primary').addClass('btn-success');
                        formProfilePasswordTimer = setTimeout(function () {
                            node.find('button').html('Change password').removeClass('btn-success').addClass('btn-primary');
                        }, 3000);
                    }).fail(function () {
                        btn.html('Try Again').removeClass('btn-primary').addClass('btn-danger');
                    }).always(function () {
                        btn.prop('disabled', false);
                        node.find('input').val('');
                    });
                    return false;
                }
            }
        }
    }).focusin(function () {
        $(this).find('button').html('Change password').removeClass('btn-success').removeClass('btn-danger').addClass('btn-primary');
    });
}

/***/ })
/******/ ]);