'use strict';

function l() {
    return function() {}
}

function aa(f) {
    return function() {
        return this[f]
    }
}

function t(f) {
    return function() {
        return f
    }
}
var ca, ea, fa, ga, ha, w, B, ia, la, ma, na, oa, C, pa, qa, ra, sa, ta, ua, va, wa, xa, ya, G, za, Aa, Ba, Ca, Da, Fa, Ga, Ha, Ia, Ja, Ka, La, Ma, I, Na, Oa, Pa, Qa, Ra, Sa, Ta, Ua, Va, Wa, Xa, Ya, Za, $a, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, O, Ib, Jb = {},
    Kb = {};
"function" !== typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === typeof "test".__proto__ ? function(f) {
    return f.__proto__
} : function(f) {
    return f.constructor.prototype
});
(function() {
    function f(a, k, h, s) {
        this.set(a, k, h, s)
    }

    function r() {
        this.Fb = this.Eb = this.Hb = this.Gb = this.Rb = this.Qb = this.Ma = this.La = 0
    }

    function d(a, k, h, s) {
        a < k ? h < s ? (q = a < h ? a : h, n = k > s ? k : s) : (q = a < s ? a : s, n = k > h ? k : h) : h < s ? (q = k < h ? k : h, n = a > s ? a : s) : (q = k < s ? k : s, n = a > h ? a : h)
    }

    function p() {
        this.Hd = this.kd = null;
        this.Ef = 0;
        k && (this.kd = new Set);
        this.cg = [];
        this.Wd = !0
    }

    function b(a) {
        h[v++] = a
    }

    function a() {
        this.oa = this.ej = this.y = this.Fj = 0
    }

    function m(a) {
        this.Ra = [];
        this.Eh = this.Gh = this.Hh = this.Fh = 0;
        this.jh(a)
    }

    function c(a, k) {
        this.Ap = a;
        this.zp = k;
        this.cells = {}
    }

    function e(a, k, h) {
        var s;
        return y.length ? (s = y.pop(), s.Zq = a, s.x = k, s.y = h, s) : new ea(a, k, h)
    }

    function g(a, k, h) {
        this.Zq = a;
        this.x = k;
        this.y = h;
        this.Vg = new fa
    }
    ga = function(a) {
        window.console && window.console.log && window.console.log(a)
    };
    ca = function(a) {
        return a
    };
    ha = function(a) {
        return "undefined" === typeof a
    };
    w = function(a) {
        return "number" === typeof a
    };
    B = function(a) {
        return "string" === typeof a
    };
    ia = function(a) {
        return 0 < a && 0 === (a - 1 & a)
    };
    la = function(a) {
        --a;
        for (var k = 1; 32 > k; k <<= 1) a |= a >> k;
        return a + 1
    };
    ma = function(a) {
        return 0 > a ? -a : a
    };
    na = function(a, k) {
        return a < k ? a : k
    };
    oa = Math.PI;
    C = function(a) {
        return 0 <= a ? a | 0 : (a | 0) - 1
    };
    pa = function(a) {
        var k = a | 0;
        return k === a ? k : k + 1
    };
    qa = function(a, k, h, s, c, v, b, m) {
        var g, A, y, e;
        a < h ? (A = a, g = h) : (A = h, g = a);
        c < b ? (e = c, y = b) : (e = b, y = c);
        if (g < e || A > y) return !1;
        k < s ? (A = k, g = s) : (A = s, g = k);
        v < m ? (e = v, y = m) : (e = m, y = v);
        if (g < e || A > y) return !1;
        g = c - a + b - h;
        A = v - k + m - s;
        a = h - a;
        k = s - k;
        c = b - c;
        v = m - v;
        m = ma(k * c - v * a);
        return ma(c * A - v * g) > m ? !1 : ma(a * A - k * g) <= m
    };
    f.prototype.set = function(a, k, h, s) {
        this.left = a;
        this.top = k;
        this.right = h;
        this.bottom = s
    };
    f.prototype.copy = function(a) {
        this.left = a.left;
        this.top = a.top;
        this.right = a.right;
        this.bottom = a.bottom
    };
    f.prototype.width = function() {
        return this.right - this.left
    };
    f.prototype.height = function() {
        return this.bottom - this.top
    };
    f.prototype.offset = function(a, k) {
        this.left += a;
        this.top += k;
        this.right += a;
        this.bottom += k;
        return this
    };
    f.prototype.normalize = function() {
        var a = 0;
        this.left > this.right && (a = this.left, this.left = this.right, this.right = a);
        this.top > this.bottom && (a = this.top, this.top = this.bottom, this.bottom = a)
    };
    f.prototype.hr = function(a) {
        return !(a.right < this.left || a.bottom < this.top || a.left > this.right || a.top > this.bottom)
    };
    f.prototype.ir = function(a, k, h) {
        return !(a.right + k < this.left || a.bottom + h < this.top || a.left + k > this.right || a.top + h > this.bottom)
    };
    f.prototype.tb = function(a, k) {
        return a >= this.left && a <= this.right && k >= this.top && k <= this.bottom
    };
    f.prototype.Xp = function(a) {
        return this.left === a.left && this.top === a.top && this.right === a.right && this.bottom === a.bottom
    };
    ra = f;
    r.prototype.Uf = function(a) {
        this.La = a.left;
        this.Ma = a.top;
        this.Qb = a.right;
        this.Rb = a.top;
        this.Gb = a.right;
        this.Hb = a.bottom;
        this.Eb = a.left;
        this.Fb = a.bottom
    };
    r.prototype.po = function(a, k) {
        if (0 === k) this.Uf(a);
        else {
            var h = Math.sin(k),
                s = Math.cos(k),
                c = a.left * h,
                v = a.top * h,
                b = a.right * h,
                h = a.bottom * h,
                m = a.left * s,
                g = a.top * s,
                A = a.right * s,
                s = a.bottom * s;
            this.La = m - v;
            this.Ma = g + c;
            this.Qb = A - v;
            this.Rb = g + b;
            this.Gb = A - h;
            this.Hb = s + b;
            this.Eb = m - h;
            this.Fb = s + c
        }
    };
    r.prototype.offset = function(a, k) {
        this.La += a;
        this.Ma += k;
        this.Qb += a;
        this.Rb += k;
        this.Gb += a;
        this.Hb += k;
        this.Eb += a;
        this.Fb += k;
        return this
    };
    var q = 0,
        n = 0;
    r.prototype.ym = function(a) {
        d(this.La, this.Qb, this.Gb, this.Eb);
        a.left = q;
        a.right = n;
        d(this.Ma, this.Rb, this.Hb, this.Fb);
        a.top = q;
        a.bottom = n
    };
    r.prototype.tb = function(a, k) {
        var h = this.Qb - this.La,
            s = this.Rb - this.Ma,
            c = this.Gb - this.La,
            v = this.Hb - this.Ma,
            b = a - this.La,
            m = k - this.Ma,
            g = h * h + s * s,
            A = h * c + s * v,
            s = h * b + s * m,
            y = c * c + v * v,
            e = c * b + v * m,
            n = 1 / (g * y - A * A),
            h = (y * s - A * e) * n,
            g = (g * e - A * s) * n;
        if (0 <= h && 0 < g && 1 > h + g) return !0;
        h = this.Eb - this.La;
        s = this.Fb - this.Ma;
        g = h * h + s * s;
        A = h * c + s * v;
        s = h * b + s * m;
        n = 1 / (g * y - A * A);
        h = (y * s - A * e) * n;
        g = (g * e - A * s) * n;
        return 0 <= h && 0 < g && 1 > h + g
    };
    r.prototype.Ud = function(a, k) {
        if (k) switch (a) {
            case 0:
                return this.La;
            case 1:
                return this.Qb;
            case 2:
                return this.Gb;
            case 3:
                return this.Eb;
            case 4:
                return this.La;
            default:
                return this.La
        } else switch (a) {
            case 0:
                return this.Ma;
            case 1:
                return this.Rb;
            case 2:
                return this.Hb;
            case 3:
                return this.Fb;
            case 4:
                return this.Ma;
            default:
                return this.Ma
        }
    };
    r.prototype.Jn = function() {
        return (this.La + this.Qb + this.Gb + this.Eb) / 4
    };
    r.prototype.Kn = function() {
        return (this.Ma + this.Rb +
            this.Hb + this.Fb) / 4
    };
    r.prototype.nn = function(a) {
        var k = a.Jn(),
            h = a.Kn();
        if (this.tb(k, h)) return !0;
        k = this.Jn();
        h = this.Kn();
        if (a.tb(k, h)) return !0;
        var s, c, v, b, g, A, m, y;
        for (m = 0; 4 > m; m++)
            for (y = 0; 4 > y; y++)
                if (k = this.Ud(m, !0), h = this.Ud(m, !1), s = this.Ud(m + 1, !0), c = this.Ud(m + 1, !1), v = a.Ud(y, !0), b = a.Ud(y, !1), g = a.Ud(y + 1, !0), A = a.Ud(y + 1, !1), qa(k, h, s, c, v, b, g, A)) return !0;
        return !1
    };
    sa = r;
    ta = function(a, k) {
        for (var h in k) k.hasOwnProperty(h) && (a[h] = k[h]);
        return a
    };
    ua = function(a, k) {
        var h, s;
        k = C(k);
        if (!(0 > k || k >= a.length)) {
            h = k;
            for (s = a.length - 1; h < s; h++) a[h] = a[h + 1];
            a.length = s
        }
    };
    va = function(a, k) {
        a.length = k.length;
        var h, s;
        h = 0;
        for (s = k.length; h < s; h++) a[h] = k[h]
    };
    wa = function(a, k) {
        a.push.apply(a, k)
    };
    xa = function(a, k) {
        var h, s;
        h = 0;
        for (s = a.length; h < s; ++h)
            if (a[h] === k) return h;
        return -1
    };
    ya = function(a, k) {
        var h = xa(a, k); - 1 !== h && ua(a, h)
    };
    G = function(a) {
        return a / (180 / oa)
    };
    za = function(a) {
        return a * (180 / oa)
    };
    Aa = function(a) {
        a %= 360;
        0 > a && (a += 360);
        return a
    };
    Ba = function(a) {
        a %= 2 * oa;
        0 > a && (a += 2 * oa);
        return a
    };
    Ca = function(a) {
        return Aa(za(a))
    };
    Da = function(a) {
        return Ba(G(a))
    };
    Fa = function(a, k, h, s) {
        return Math.atan2(s - k, h - a)
    };
    Ga = function(a, k) {
        if (a === k) return 0;
        var h = Math.sin(a),
            s = Math.cos(a),
            c = Math.sin(k),
            v = Math.cos(k),
            h = h * c + s * v;
        return 1 <= h ? 0 : -1 >= h ? oa : Math.acos(h)
    };
    Ha = function(a, k, h) {
        var s = Math.sin(a),
            c = Math.cos(a),
            v = Math.sin(k),
            b = Math.cos(k);
        return Math.acos(s * v + c * b) > h ? 0 < c * v - s * b ? Ba(a + h) : Ba(a - h) : Ba(k)
    };
    Ia = function(a, k) {
        var h = Math.sin(a),
            s = Math.cos(a),
            c = Math.sin(k),
            v = Math.cos(k);
        return 0 >= s * c - h * v
    };
    Ja = function(a, k, h, s) {
        a = h - a;
        k = s - k;
        return Math.sqrt(a * a + k * k)
    };
    Ka = function(a, k) {
        return !a !== !k
    };
    La = function(a) {
        for (var k in a)
            if (a.hasOwnProperty(k)) return !0;
        return !1
    };
    Ma = function(a) {
        for (var k in a) a.hasOwnProperty(k) && delete a[k]
    };
    var u = +new Date;
    I = function() {
        if ("undefined" !== typeof window.performance) {
            var a = window.performance;
            if ("undefined" !== typeof a.now) return a.now();
            if ("undefined" !== typeof a.webkitNow) return a.webkitNow();
            if ("undefined" !== typeof a.mozNow) return a.mozNow();
            if ("undefined" !== typeof a.msNow) return a.msNow()
        }
        return Date.now() - u
    };
    var x = !1,
        z = x = !1,
        s = !1;
    "undefined" !== typeof window && (x = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent), x = !x && /safari/i.test(navigator.userAgent), z = /(iphone|ipod|ipad)/i.test(navigator.userAgent), s = window.c2ejecta);
    var k = !x && !s && !z && "undefined" !== typeof Set && "undefined" !== typeof Set.prototype.forEach;
    p.prototype.contains = function(a) {
        return this.Qc() ? !1 : k ? this.kd.has(a) : this.Hd && this.Hd.hasOwnProperty(a)
    };
    p.prototype.add = function(a) {
        if (k) this.kd.has(a) || (this.kd.add(a), this.Wd = !1);
        else {
            var h = a.toString(),
                s = this.Hd;
            s ? s.hasOwnProperty(h) || (s[h] = a, this.Ef++, this.Wd = !1) : (this.Hd = {}, this.Hd[h] = a, this.Ef = 1, this.Wd = !1)
        }
    };
    p.prototype.remove = function(a) {
        if (!this.Qc())
            if (k) this.kd.has(a) && (this.kd["delete"](a), this.Wd = !1);
            else if (this.Hd) {
            a = a.toString();
            var h = this.Hd;
            h.hasOwnProperty(a) && (delete h[a], this.Ef--, this.Wd = !1)
        }
    };
    p.prototype.clear = function() {
        this.Qc() || (k ? this.kd.clear() : (this.Hd = null, this.Ef = 0), this.cg.length = 0, this.Wd = !0)
    };
    p.prototype.Qc = function() {
        return 0 === this.count()
    };
    p.prototype.count = function() {
        return k ? this.kd.size : this.Ef
    };
    var h = null,
        v = 0;
    p.prototype.Bs = function() {
        if (!this.Wd) {
            if (k) this.cg.length = this.kd.size, h = this.cg, v = 0, this.kd.forEach(b), h = null, v = 0;
            else {
                var a = this.cg;
                a.length = this.Ef;
                var s, c = 0,
                    g = this.Hd;
                if (g)
                    for (s in g) g.hasOwnProperty(s) && (a[c++] = g[s])
            }
            this.Wd = !0
        }
    };
    p.prototype.qd = function() {
        this.Bs();
        return this.cg
    };
    fa = p;
    new fa;
    a.prototype.add = function(a) {
        this.y = a - this.Fj;
        this.ej = this.oa + this.y;
        this.Fj = this.ej - this.oa - this.y;
        this.oa = this.ej
    };
    a.prototype.reset = function() {
        this.oa = this.ej = this.y = this.Fj = 0
    };
    Na = a;
    Oa = function(a) {
        return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    };
    m.prototype.jh = function(a) {
        this.co = a;
        this.Tc = a.length / 2;
        this.Ra.length = a.length;
        this.Kh = this.Lh = -1;
        this.Bm = 0
    };
    m.prototype.Bf = function() {
        return !this.co.length
    };
    m.prototype.xa = function() {
        for (var a = this.Ra, k = a[0], h = k, s = a[1], c = s, v, b, g = 1, m = this.Tc; g < m; ++g) b = 2 * g, v = a[b], b = a[b + 1], v < k && (k = v), v > h && (h = v), b < s && (s = b), b > c && (c = b);
        this.Fh = k;
        this.Gh = h;
        this.Hh = s;
        this.Eh = c
    };
    m.prototype.Uf = function(a, k, h) {
        this.Ra.length = 8;
        this.Tc = 4;
        var s = this.Ra;
        s[0] = a.left - k;
        s[1] = a.top - h;
        s[2] = a.right - k;
        s[3] = a.top - h;
        s[4] = a.right - k;
        s[5] = a.bottom - h;
        s[6] = a.left - k;
        s[7] = a.bottom - h;
        this.Lh = a.right - a.left;
        this.Kh = a.bottom - a.top;
        this.xa()
    };
    m.prototype.Tf = function(a, k, h, s, c) {
        this.Ra.length = 8;
        this.Tc = 4;
        var v = this.Ra;
        v[0] = a.La - k;
        v[1] = a.Ma - h;
        v[2] = a.Qb - k;
        v[3] = a.Rb - h;
        v[4] = a.Gb - k;
        v[5] = a.Hb - h;
        v[6] = a.Eb - k;
        v[7] = a.Fb - h;
        this.Lh = s;
        this.Kh = c;
        this.xa()
    };
    m.prototype.oo = function(a) {
        this.Tc = a.Tc;
        va(this.Ra, a.Ra);
        this.Fh = a.Fh;
        this.Hh - a.Hh;
        this.Gh = a.Gh;
        this.Eh = a.Eh
    };
    m.prototype.mf = function(a, k, h) {
        if (this.Lh !== a || this.Kh !== k || this.Bm !== h) {
            this.Lh = a;
            this.Kh = k;
            this.Bm = h;
            var s, c, v, b, g, m = 0,
                A = 1,
                y = this.co,
                e = this.Ra;
            0 !== h && (m = Math.sin(h), A = Math.cos(h));
            h = 0;
            for (v = this.Tc; h < v; h++) s = 2 * h, c = s + 1, b = y[s] * a, g = y[c] * k, e[s] = b * A - g * m, e[c] = g * A + b * m;
            this.xa()
        }
    };
    m.prototype.tb = function(a, k) {
        var h = this.Ra;
        if (a === h[0] && k === h[1]) return !0;
        var s, c, v, b = this.Tc,
            g = this.Fh - 110,
            m = this.Hh - 101,
            A = this.Gh + 131,
            y = this.Eh + 120,
            e, n, q = 0,
            d = 0;
        for (s = 0; s < b; s++) c = 2 * s, v = 2 * ((s + 1) % b), e = h[c], c = h[c + 1], n = h[v], v = h[v + 1], qa(g, m, a, k, e, c, n, v) && q++, qa(A, y, a, k, e, c, n, v) && d++;
        return 1 === q % 2 || 1 === d % 2
    };
    m.prototype.Ag = function(a, k, h) {
        var s = a.Ra,
            c = this.Ra;
        if (this.tb(s[0] + k, s[1] + h) || a.tb(c[0] - k, c[1] - h)) return !0;
        var v, b, g, m, A, y, e, n, q, d, f, p;
        v = 0;
        for (m = this.Tc; v < m; v++)
            for (b = 2 * v, g = 2 * ((v + 1) % m), n = c[b], b = c[b + 1], q = c[g], d = c[g + 1], g = 0, e = a.Tc; g < e; g++)
                if (A = 2 * g, y = 2 * ((g + 1) % e), f = s[A] + k, A = s[A + 1] + h, p = s[y] + k, y = s[y + 1] + h, qa(n, b, q, d, f, A, p, y)) return !0;
        return !1
    };
    Pa = m;
    c.prototype.bk = function(a, k, h) {
        var s;
        s = this.cells[a];
        return s ? (s = s[k]) ? s : h ? (s = e(this, a, k), this.cells[a][k] = s) : null : h ? (s = e(this, a, k), this.cells[a] = {}, this.cells[a][k] = s) : null
    };
    c.prototype.Ah = function(a) {
        return C(a / this.Ap)
    };
    c.prototype.Bh = function(a) {
        return C(a / this.zp)
    };
    c.prototype.update = function(a, k, h) {
        var s, c, v, b, g;
        if (k)
            for (s = k.left, c = k.right; s <= c; ++s)
                for (v = k.top, b = k.bottom; v <= b; ++v)
                    if (!h || !h.tb(s, v))
                        if (g = this.bk(s, v, !1)) g.remove(a), g.Qc() && (g.Vg.clear(), 1E3 > y.length && y.push(g), this.cells[s][v] = null);
        if (h)
            for (s = h.left, c = h.right; s <= c; ++s)
                for (v = h.top, b = h.bottom; v <= b; ++v) k && k.tb(s, v) || this.bk(s, v, !0).fr(a)
    };
    c.prototype.fo = function(a, k) {
        var h, s, c, v, b, g;
        h = this.Ah(a.left);
        c = this.Bh(a.top);
        s = this.Ah(a.right);
        for (b = this.Bh(a.bottom); h <= s; ++h)
            for (v = c; v <= b; ++v)(g = this.bk(h, v, !1)) && g.Tp(k)
    };
    Qa = c;
    var y = [];
    g.prototype.Qc = function() {
        return this.Vg.Qc()
    };
    g.prototype.fr = function(a) {
        this.Vg.add(a)
    };
    g.prototype.remove = function(a) {
        this.Vg.remove(a)
    };
    g.prototype.Tp = function(a) {
        wa(a, this.Vg.qd())
    };
    ea = g;
    var A = "lighter xor copy destination-over source-in destination-in source-out destination-out source-atop destination-atop".split(" ");
    Ra = function(a) {
        return 0 >= a || 11 <= a ? "source-over" : A[a - 1]
    };
    Sa = function(a, k, h) {
        if (h) switch (a.qb = h.ONE, a.pb = h.ONE_MINUS_SRC_ALPHA, k) {
            case 1:
                a.qb = h.ONE;
                a.pb = h.ONE;
                break;
            case 3:
                a.qb = h.ONE;
                a.pb = h.ZERO;
                break;
            case 4:
                a.qb = h.ONE_MINUS_DST_ALPHA;
                a.pb = h.ONE;
                break;
            case 5:
                a.qb = h.DST_ALPHA;
                a.pb = h.ZERO;
                break;
            case 6:
                a.qb = h.ZERO;
                a.pb = h.SRC_ALPHA;
                break;
            case 7:
                a.qb = h.ONE_MINUS_DST_ALPHA;
                a.pb = h.ZERO;
                break;
            case 8:
                a.qb = h.ZERO;
                a.pb = h.ONE_MINUS_SRC_ALPHA;
                break;
            case 9:
                a.qb = h.DST_ALPHA;
                a.pb = h.ONE_MINUS_SRC_ALPHA;
                break;
            case 10:
                a.qb = h.ONE_MINUS_DST_ALPHA, a.pb = h.SRC_ALPHA
        }
    };
    Ta = function(a) {
        return Math.round(1E6 * a) / 1E6
    };
    Ua = function(a, k) {
        return "string" !== typeof a || "string" !== typeof k || a.length !== k.length ? !1 : a === k ? !0 : a.toLowerCase() === k.toLowerCase()
    };
    Va = function(a) {
        a = a.target;
        return !a || a === document || a === window || document && document.body && a === document.body || Ua(a.tagName, "canvas") ? !0 : !1
    }
})();
var Lb = "undefined" !== typeof Float32Array ? Float32Array : Array;

function Mb(f) {
    var r = new Lb(3);
    f && (r[0] = f[0], r[1] = f[1], r[2] = f[2]);
    return r
}

function Nb(f) {
    var r = new Lb(16);
    f && (r[0] = f[0], r[1] = f[1], r[2] = f[2], r[3] = f[3], r[4] = f[4], r[5] = f[5], r[6] = f[6], r[7] = f[7], r[8] = f[8], r[9] = f[9], r[10] = f[10], r[11] = f[11], r[12] = f[12], r[13] = f[13], r[14] = f[14], r[15] = f[15]);
    return r
}

function Ob(f, r) {
    r[0] = f[0];
    r[1] = f[1];
    r[2] = f[2];
    r[3] = f[3];
    r[4] = f[4];
    r[5] = f[5];
    r[6] = f[6];
    r[7] = f[7];
    r[8] = f[8];
    r[9] = f[9];
    r[10] = f[10];
    r[11] = f[11];
    r[12] = f[12];
    r[13] = f[13];
    r[14] = f[14];
    r[15] = f[15]
}

function Pb(f, r) {
    var d = r[0],
        p = r[1];
    r = r[2];
    f[0] *= d;
    f[1] *= d;
    f[2] *= d;
    f[3] *= d;
    f[4] *= p;
    f[5] *= p;
    f[6] *= p;
    f[7] *= p;
    f[8] *= r;
    f[9] *= r;
    f[10] *= r;
    f[11] *= r
}

function Qb(f, r, d, p) {
    p || (p = Nb());
    var b, a, m, c, e, g, q, n, u = f[0],
        x = f[1];
    f = f[2];
    a = d[0];
    m = d[1];
    b = d[2];
    d = r[1];
    g = r[2];
    u === r[0] && x === d && f === g ? (f = p, f[0] = 1, f[1] = 0, f[2] = 0, f[3] = 0, f[4] = 0, f[5] = 1, f[6] = 0, f[7] = 0, f[8] = 0, f[9] = 0, f[10] = 1, f[11] = 0, f[12] = 0, f[13] = 0, f[14] = 0, f[15] = 1) : (d = u - r[0], g = x - r[1], q = f - r[2], n = 1 / Math.sqrt(d * d + g * g + q * q), d *= n, g *= n, q *= n, r = m * q - b * g, b = b * d - a * q, a = a * g - m * d, (n = Math.sqrt(r * r + b * b + a * a)) ? (n = 1 / n, r *= n, b *= n, a *= n) : a = b = r = 0, m = g * a - q * b, c = q * r - d * a, e = d * b - g * r, (n = Math.sqrt(m * m + c * c + e * e)) ? (n = 1 / n, m *= n, c *= n, e *= n) : e = c = m = 0, p[0] = r, p[1] = m, p[2] = d, p[3] = 0, p[4] = b, p[5] = c, p[6] = g, p[7] = 0, p[8] = a, p[9] = e, p[10] = q, p[11] = 0, p[12] = -(r * u + b * x + a * f), p[13] = -(m * u + c * x + e * f), p[14] = -(d * u + g * x + q * f), p[15] = 1)
}
(function() {
    function f(a) {
        this.Ie = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent);
        this.height = this.width = 0;
        this.Cm = Mb([0, 0, 100]);
        this.Gn = Mb([0, 0, 0]);
        this.Go = Mb([0, 1, 0]);
        this.Tl = Mb([1, 1, 1]);
        this.Nm = !0;
        this.Lk = Nb();
        this.Gc = Nb();
        this.yn = Nb();
        this.Mj = Nb();
        this.A = a;
        this.jn()
    }

    function r(a, b, c) {
        this.A = a;
        this.kh = b;
        this.name = c;
        this.Fc = a.getAttribLocation(b, "aPos");
        this.fe = a.getAttribLocation(b, "aTex");
        this.En = a.getUniformLocation(b, "matP");
        this.Hf = a.getUniformLocation(b, "matMV");
        this.If = a.getUniformLocation(b, "opacity");
        this.Fn = a.getUniformLocation(b, "samplerFront");
        this.Qg = a.getUniformLocation(b, "samplerBack");
        this.Oe = a.getUniformLocation(b, "destStart");
        this.Ne = a.getUniformLocation(b, "destEnd");
        this.Ik = a.getUniformLocation(b, "seconds");
        this.Hk = a.getUniformLocation(b, "pixelWidth");
        this.Gk = a.getUniformLocation(b, "pixelHeight");
        this.Pg = a.getUniformLocation(b, "layerScale");
        this.Og = a.getUniformLocation(b, "layerAngle");
        this.Rg = a.getUniformLocation(b, "viewOrigin");
        this.cr = !!(this.Hk || this.Gk || this.Ik || this.Qg || this.Oe || this.Ne || this.Pg || this.Og || this.Rg);
        this.If && a.uniform1f(this.If, 1);
        this.Fn && a.uniform1i(this.Fn, 0);
        this.Qg && a.uniform1i(this.Qg, 1);
        this.Oe && a.uniform2f(this.Oe, 0, 0);
        this.Ne && a.uniform2f(this.Ne, 1, 1);
        this.Pg && a.uniform1f(this.Pg, 1);
        this.Og && a.uniform1f(this.Og, 0);
        this.Rg && a.uniform2f(this.Rg, 0, 0);
        this.Fe = !1
    }

    function d(a, b) {
        this.type = a;
        this.H = b;
        this.A = b.A;
        this.Dc = this.qc = this.Un = 0;
        this.ea = this.Wc = null;
        this.qo = []
    }
    f.prototype.jn = function() {
        var a = this.A,
            b;
        this.zn = 1;
        this.Le = this.de = null;
        this.Im = 1;
        a.clearColor(0, 0, 0, 0);
        a.clear(a.COLOR_BUFFER_BIT);
        a.enable(a.BLEND);
        a.blendFunc(a.ONE, a.ONE_MINUS_SRC_ALPHA);
        a.disable(a.CULL_FACE);
        a.disable(a.DEPTH_TEST);
        this.An = a.ONE;
        this.xn = a.ONE_MINUS_SRC_ALPHA;
        this.$k = a.createBuffer();
        a.bindBuffer(a.ARRAY_BUFFER, this.$k);
        this.uh = Array(4);
        this.nh = Array(4);
        for (b = 0; 4 > b; b++) this.uh[b] = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.uh[b]), this.nh[b] = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.nh[b]);
        this.wd = 0;
        this.er = a.createBuffer();
        a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.er);
        this.Sl = new Float32Array(16E3);
        this.Fl = new Float32Array(16E3);
        this.$n = new Float32Array(32E3);
        for (var c = new Uint16Array(12E3), e = b = 0; 12E3 > b;) c[b++] = e, c[b++] = e + 1, c[b++] = e + 2, c[b++] = e, c[b++] = e + 2, c[b++] = e + 3, e += 4;
        a.bufferData(a.ELEMENT_ARRAY_BUFFER, c, a.STATIC_DRAW);
        this.Pf = this.rd = 0;
        this.Ta = [];
        b = this.Lj({
            src: "varying mediump vec2 vTex;\nuniform lowp float opacity;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, vTex);\n\tgl_FragColor *= opacity;\n}"
        }, "attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}", "<default>");
        this.Ta.push(b);
        b = this.Lj({
            src: "uniform mediump sampler2D samplerFront;\nvarying lowp float opacity;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, gl_PointCoord);\n\tgl_FragColor *= opacity;\n}"
        }, "attribute vec4 aPos;\nvarying float opacity;\nuniform mat4 matP;\nuniform mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tgl_PointSize = aPos.z;\n\topacity = aPos.w;\n}", "<point>");
        this.Ta.push(b);
        for (var g in Rb) Rb.hasOwnProperty(g) && this.Ta.push(this.Lj(Rb[g], "attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}", g));
        a.activeTexture(a.TEXTURE0);
        a.bindTexture(a.TEXTURE_2D, null);
        this.ud = [];
        this.ad = 0;
        this.$b = this.Nb = !1;
        this.Jm = this.Fg = -1;
        this.mg = null;
        this.vq = a.createFramebuffer();
        this.jo = null;
        this.qe = Mb([0, 0, 0]);
        a = a.getParameter(a.ALIASED_POINT_SIZE_RANGE);
        this.Hr = a[0];
        this.Mk = a[1];
        2048 < this.Mk && (this.Mk = 2048);
        this.md(0)
    };
    f.prototype.Lj = function(a, b, c) {
        var e = this.A,
            g = e.createShader(e.FRAGMENT_SHADER);
        e.shaderSource(g, a.src);
        e.compileShader(g);
        if (!e.getShaderParameter(g, e.COMPILE_STATUS)) return e.deleteShader(g), null;
        var q = e.createShader(e.VERTEX_SHADER);
        e.shaderSource(q, b);
        e.compileShader(q);
        if (!e.getShaderParameter(q, e.COMPILE_STATUS)) return e.deleteShader(g), e.deleteShader(q), null;
        b = e.createProgram();
        e.attachShader(b, g);
        e.attachShader(b, q);
        e.linkProgram(b);
        if (!e.getProgramParameter(b, e.LINK_STATUS)) return e.deleteShader(g), e.deleteShader(q), e.deleteProgram(b), null;
        e.useProgram(b);
        e.deleteShader(g);
        e.deleteShader(q);
        c = new r(e, b, c);
        c.Uj = a.Uj || 0;
        c.Vj = a.Vj || 0;
        c.Hm = !!a.Hm;
        c.vm = !!a.vm;
        c.S = a.S || [];
        a = 0;
        for (g = c.S.length; a < g; a++) c.S[a][1] = e.getUniformLocation(b, c.S[a][0]), e.uniform1f(c.S[a][1], 0);
        return c
    };
    f.prototype.gk = function(a) {
        var b, c;
        b = 0;
        for (c = this.Ta.length; b < c; b++)
            if (this.Ta[b].name === a) return b;
        return -1
    };
    f.prototype.bo = function(a, b, c) {
        var e = this.Gc,
            g = this.Lk,
            q = [0, 0, 0, 0, 0, 0, 0, 0];
        q[0] = e[0] * a + e[4] * b + e[12];
        q[1] = e[1] * a + e[5] * b + e[13];
        q[2] = e[2] * a + e[6] * b + e[14];
        q[3] = e[3] * a + e[7] * b + e[15];
        q[4] = g[0] * q[0] + g[4] * q[1] + g[8] * q[2] + g[12] * q[3];
        q[5] = g[1] * q[0] + g[5] * q[1] + g[9] * q[2] + g[13] * q[3];
        q[6] = g[2] * q[0] + g[6] * q[1] + g[10] * q[2] + g[14] * q[3];
        q[7] = -q[2];
        0 !== q[7] && (q[7] = 1 / q[7], q[4] *= q[7], q[5] *= q[7], q[6] *= q[7], c[0] = (0.5 * q[4] + 0.5) * this.width, c[1] = (0.5 * q[5] + 0.5) * this.height)
    };
    f.prototype.Sf = function(a, b, c) {
        if (this.width !== a || this.height !== b || c) {
            this.Ad();
            this.width = a;
            this.height = b;
            this.A.viewport(0, 0, a, b);
            b = a / b;
            var e = this.Lk,
                g;
            g = 1 * Math.tan(45 * Math.PI / 360);
            b *= g;
            a = -b;
            c = -g;
            e || (e = Nb());
            var q = b - a,
                n = g - c;
            e[0] = 2 / q;
            e[1] = 0;
            e[2] = 0;
            e[3] = 0;
            e[4] = 0;
            e[5] = 2 / n;
            e[6] = 0;
            e[7] = 0;
            e[8] = (b + a) / q;
            e[9] = (g + c) / n;
            e[10] = -1001 / 999;
            e[11] = -1;
            e[12] = 0;
            e[13] = 0;
            e[14] = -2E3 / 999;
            e[15] = 0;
            Qb(this.Cm, this.Gn, this.Go, this.Gc);
            a = [0, 0];
            b = [0, 0];
            this.bo(0, 0, a);
            this.bo(1, 1, b);
            this.Tl[0] = 1 / (b[0] - a[0]);
            this.Tl[1] = -1 / (b[1] - a[1]);
            a = 0;
            for (b = this.Ta.length; a < b; a++) c = this.Ta[a], c.Fe = !1, c.En && (this.A.useProgram(c.kh), this.A.uniformMatrix4fv(c.En, !1, this.Lk));
            this.A.useProgram(this.Ta[this.Fg].kh);
            this.A.bindTexture(this.A.TEXTURE_2D, null);
            this.A.activeTexture(this.A.TEXTURE1);
            this.A.bindTexture(this.A.TEXTURE_2D, null);
            this.A.activeTexture(this.A.TEXTURE0);
            this.Le = this.de = null
        }
    };
    f.prototype.jd = function() {
        Qb(this.Cm, this.Gn, this.Go, this.Gc);
        Pb(this.Gc, this.Tl)
    };
    f.prototype.translate = function(a, b) {
        if (0 !== a || 0 !== b) {
            this.qe[0] = a;
            this.qe[1] = b;
            this.qe[2] = 0;
            var c = this.Gc,
                e = this.qe,
                g = e[0],
                q = e[1],
                e = e[2];
            c[12] = c[0] * g + c[4] * q + c[8] * e + c[12];
            c[13] = c[1] * g + c[5] * q + c[9] * e + c[13];
            c[14] = c[2] * g + c[6] * q + c[10] * e + c[14];
            c[15] = c[3] * g + c[7] * q + c[11] * e + c[15]
        }
    };
    f.prototype.scale = function(a, b) {
        if (1 !== a || 1 !== b) this.qe[0] = a, this.qe[1] = b, this.qe[2] = 1, Pb(this.Gc, this.qe)
    };
    f.prototype.ql = function(a) {
        if (0 !== a) {
            var b = this.Gc,
                c, e = Math.sin(a);
            a = Math.cos(a);
            var g = b[0],
                q = b[1],
                n = b[2],
                d = b[3],
                f = b[4],
                p = b[5],
                s = b[6],
                k = b[7];
            c ? b !== c && (c[8] = b[8], c[9] = b[9], c[10] = b[10], c[11] = b[11], c[12] = b[12], c[13] = b[13], c[14] = b[14], c[15] = b[15]) : c = b;
            c[0] = g * a + f * e;
            c[1] = q * a + p * e;
            c[2] = n * a + s * e;
            c[3] = d * a + k * e;
            c[4] = g * -e + f * a;
            c[5] = q * -e + p * a;
            c[6] = n * -e + s * a;
            c[7] = d * -e + k * a
        }
    };
    f.prototype.pd = function() {
        for (var a = !1, b = 0; 16 > b; b++)
            if (this.yn[b] !== this.Gc[b]) {
                a = !0;
                break
            }
        a && (a = this.Jc(), a.type = 5, a.ea ? Ob(this.Gc, a.ea) : a.ea = Nb(this.Gc), Ob(this.Gc, this.yn), this.$b = this.Nb = !1)
    };
    d.prototype.Pp = function() {
        this.A.bindTexture(this.A.TEXTURE_2D, this.Wc)
    };
    d.prototype.Qp = function() {
        var a = this.A;
        a.activeTexture(a.TEXTURE1);
        a.bindTexture(a.TEXTURE_2D, this.Wc);
        a.activeTexture(a.TEXTURE0)
    };
    d.prototype.Mp = function() {
        var a = this.Un,
            b = this.H;
        b.Im = a;
        b = b.mg;
        b.If && this.A.uniform1f(b.If, a)
    };
    d.prototype.Jp = function() {
        this.A.drawElements(this.A.TRIANGLES, this.Dc, this.A.UNSIGNED_SHORT, 2 * this.qc)
    };
    d.prototype.Lp = function() {
        this.A.blendFunc(this.qc, this.Dc)
    };
    d.prototype.Rp = function() {
        var a, b, c, e = this.H.Ta,
            g = this.H.Jm;
        a = 0;
        for (b = e.length; a < b; a++) c = e[a], a === g && c.Hf ? (this.A.uniformMatrix4fv(c.Hf, !1, this.ea), c.Fe = !0) : c.Fe = !1;
        Ob(this.ea, this.H.Mj)
    };
    d.prototype.Kp = function() {
        var a = this.A,
            b = this.H;
        this.Wc ? (b.Le === this.Wc && (a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, null), b.Le = null, a.activeTexture(a.TEXTURE0)), a.bindFramebuffer(a.FRAMEBUFFER, b.vq), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, this.Wc, 0)) : (a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, null, 0), a.bindFramebuffer(a.FRAMEBUFFER, null))
    };
    d.prototype.Hp = function() {
        var a = this.A;
        0 === this.qc ? (a.clearColor(this.ea[0], this.ea[1], this.ea[2], this.ea[3]), a.clear(a.COLOR_BUFFER_BIT)) : (a.enable(a.SCISSOR_TEST), a.scissor(this.ea[0], this.ea[1], this.ea[2], this.ea[3]), a.clearColor(0, 0, 0, 0), a.clear(this.A.COLOR_BUFFER_BIT), a.disable(a.SCISSOR_TEST))
    };
    d.prototype.Ip = function() {
        var a = this.A,
            b = this.H,
            c = b.Ta[1];
        a.useProgram(c.kh);
        !c.Fe && c.Hf && (a.uniformMatrix4fv(c.Hf, !1, b.Mj), c.Fe = !0);
        a.enableVertexAttribArray(c.Fc);
        a.bindBuffer(a.ARRAY_BUFFER, b.$k);
        a.vertexAttribPointer(c.Fc, 4, a.FLOAT, !1, 0, 0);
        a.drawArrays(a.POINTS, this.qc / 4, this.Dc);
        c = b.mg;
        a.useProgram(c.kh);
        0 <= c.Fc && (a.enableVertexAttribArray(c.Fc), a.bindBuffer(a.ARRAY_BUFFER, b.uh[b.wd]), a.vertexAttribPointer(c.Fc, 2, a.FLOAT, !1, 0, 0));
        0 <= c.fe && (a.enableVertexAttribArray(c.fe), a.bindBuffer(a.ARRAY_BUFFER, b.nh[b.wd]), a.vertexAttribPointer(c.fe, 2, a.FLOAT, !1, 0, 0))
    };
    d.prototype.Np = function() {
        var a = this.A,
            b = this.H,
            c = b.Ta[this.qc];
        b.Jm = this.qc;
        b.mg = c;
        a.useProgram(c.kh);
        !c.Fe && c.Hf && (a.uniformMatrix4fv(c.Hf, !1, b.Mj), c.Fe = !0);
        c.If && a.uniform1f(c.If, b.Im);
        0 <= c.Fc && (a.enableVertexAttribArray(c.Fc), a.bindBuffer(a.ARRAY_BUFFER, b.uh[b.wd]), a.vertexAttribPointer(c.Fc, 2, a.FLOAT, !1, 0, 0));
        0 <= c.fe && (a.enableVertexAttribArray(c.fe), a.bindBuffer(a.ARRAY_BUFFER, b.nh[b.wd]), a.vertexAttribPointer(c.fe, 2, a.FLOAT, !1, 0, 0))
    };
    d.prototype.Op = function() {
        var a, b, c = this.H.mg,
            e = this.A;
        a = this.ea;
        c.Qg && this.H.Le !== this.Wc && (e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, this.Wc), this.H.Le = this.Wc, e.activeTexture(e.TEXTURE0));
        c.Hk && e.uniform1f(c.Hk, a[0]);
        c.Gk && e.uniform1f(c.Gk, a[1]);
        c.Oe && e.uniform2f(c.Oe, a[2], a[3]);
        c.Ne && e.uniform2f(c.Ne, a[4], a[5]);
        c.Pg && e.uniform1f(c.Pg, a[6]);
        c.Og && e.uniform1f(c.Og, a[7]);
        c.Rg && e.uniform2f(c.Rg, a[8], a[9]);
        c.Ik && e.uniform1f(c.Ik, I() / 1E3);
        if (c.S.length)
            for (a = 0, b = c.S.length; a < b; a++) e.uniform1f(c.S[a][1], this.qo[a])
    };
    f.prototype.Jc = function() {
        this.ad === this.ud.length && this.ud.push(new d(0, this));
        return this.ud[this.ad++]
    };
    f.prototype.Ad = function() {
        if (0 !== this.ad && !this.A.isContextLost()) {
            var a = this.A;
            0 < this.Pf && (a.bindBuffer(a.ARRAY_BUFFER, this.$k), a.bufferData(a.ARRAY_BUFFER, this.$n.subarray(0, this.Pf), a.STREAM_DRAW), b && 0 <= b.Fc && "<point>" === b.name && a.vertexAttribPointer(b.Fc, 4, a.FLOAT, !1, 0, 0));
            if (0 < this.rd) {
                var b = this.mg;
                a.bindBuffer(a.ARRAY_BUFFER, this.uh[this.wd]);
                a.bufferData(a.ARRAY_BUFFER, this.Sl.subarray(0, this.rd), a.STREAM_DRAW);
                b && 0 <= b.Fc && "<point>" !== b.name && a.vertexAttribPointer(b.Fc, 2, a.FLOAT, !1, 0, 0);
                a.bindBuffer(a.ARRAY_BUFFER, this.nh[this.wd]);
                a.bufferData(a.ARRAY_BUFFER, this.Fl.subarray(0, this.rd), a.STREAM_DRAW);
                b && 0 <= b.fe && "<point>" !== b.name && a.vertexAttribPointer(b.fe, 2, a.FLOAT, !1, 0, 0)
            }
            for (var c, a = 0, b = this.ad; a < b; a++) switch (c = this.ud[a], c.type) {
                case 1:
                    c.Jp();
                    break;
                case 2:
                    c.Pp();
                    break;
                case 3:
                    c.Mp();
                    break;
                case 4:
                    c.Lp();
                    break;
                case 5:
                    c.Rp();
                    break;
                case 6:
                    c.Kp();
                    break;
                case 7:
                    c.Hp();
                    break;
                case 8:
                    c.Ip();
                    break;
                case 9:
                    c.Np();
                    break;
                case 10:
                    c.Op();
                    break;
                case 11:
                    c.Qp()
            }
            this.Pf = this.rd = this.ad = 0;
            this.$b = this.Nb = !1;
            this.wd++;
            4 <= this.wd && (this.wd = 0)
        }
    };
    f.prototype.Xe = function(a) {
        if (a !== this.zn) {
            var b = this.Jc();
            b.type = 3;
            this.zn = b.Un = a;
            this.$b = this.Nb = !1
        }
    };
    f.prototype.ic = function(a) {
        if (a !== this.de) {
            var b = this.Jc();
            b.type = 2;
            this.de = b.Wc = a;
            this.$b = this.Nb = !1
        }
    };
    f.prototype.me = function(a, b) {
        if (a !== this.An || b !== this.xn) {
            var c = this.Jc();
            c.type = 4;
            c.qc = a;
            c.Dc = b;
            this.An = a;
            this.xn = b;
            this.$b = this.Nb = !1
        }
    };
    f.prototype.mo = function() {
        this.me(this.A.ONE, this.A.ONE_MINUS_SRC_ALPHA)
    };
    f.prototype.gh = function(a, b, c, e, g, q, n, d) {
        15992 <= this.rd && this.Ad();
        var f = this.rd,
            p = this.Sl,
            s = this.Fl;
        if (this.Nb) this.ud[this.ad - 1].Dc += 6;
        else {
            var k = this.Jc();
            k.type = 1;
            k.qc = 3 * (f / 4);
            k.Dc = 6;
            this.Nb = !0;
            this.$b = !1
        }
        p[f] = a;
        s[f++] = 0;
        p[f] = b;
        s[f++] = 0;
        p[f] = c;
        s[f++] = 1;
        p[f] = e;
        s[f++] = 0;
        p[f] = g;
        s[f++] = 1;
        p[f] = q;
        s[f++] = 1;
        p[f] = n;
        s[f++] = 0;
        p[f] = d;
        s[f++] = 1;
        this.rd = f
    };
    f.prototype.je = function(a, b, c, e, g, q, n, d, f) {
        15992 <= this.rd && this.Ad();
        var p = this.rd,
            s = this.Sl,
            k = this.Fl;
        if (this.Nb) this.ud[this.ad - 1].Dc += 6;
        else {
            var h = this.Jc();
            h.type = 1;
            h.qc = 3 * (p / 4);
            h.Dc = 6;
            this.Nb = !0;
            this.$b = !1
        }
        var h = f.left,
            v = f.top,
            y = f.right;
        f = f.bottom;
        s[p] = a;
        k[p++] = h;
        s[p] = b;
        k[p++] = v;
        s[p] = c;
        k[p++] = y;
        s[p] = e;
        k[p++] = v;
        s[p] = g;
        k[p++] = y;
        s[p] = q;
        k[p++] = f;
        s[p] = n;
        k[p++] = h;
        s[p] = d;
        k[p++] = f;
        this.rd = p
    };
    f.prototype.Sr = function(a, b, c, e) {
        7996 <= this.Pf && this.Ad();
        var g = this.Pf,
            q = this.$n;
        if (this.$b) this.ud[this.ad - 1].Dc++;
        else {
            var n = this.Jc();
            n.type = 8;
            n.qc = g;
            n.Dc = 1;
            this.$b = !0;
            this.Nb = !1
        }
        q[g++] = a;
        q[g++] = b;
        q[g++] = c;
        q[g++] = e;
        this.Pf = g
    };
    f.prototype.md = function(a) {
        if (this.Fg !== a) {
            if (!this.Ta[a]) {
                if (0 === this.Fg) return;
                a = 0
            }
            var b = this.Jc();
            b.type = 9;
            this.Fg = b.qc = a;
            this.$b = this.Nb = !1
        }
    };
    f.prototype.bh = function(a) {
        a = this.Ta[a];
        return !(!a.Oe && !a.Ne)
    };
    f.prototype.cl = function(a) {
        a = this.Ta[a];
        return !!(a.Oe || a.Ne || a.Hm)
    };
    f.prototype.Zr = function(a) {
        a = this.Ta[a];
        return 0 !== a.Uj || 0 !== a.Vj
    };
    f.prototype.Iq = function(a) {
        return this.Ta[a].Uj
    };
    f.prototype.Jq = function(a) {
        return this.Ta[a].Vj
    };
    f.prototype.Kq = function(a, b) {
        return this.Ta[a].S[b][2]
    };
    f.prototype.Oi = function(a) {
        return this.Ta[a].vm
    };
    f.prototype.Rf = function(a, b, c, e, g, q, n, d, f, p, s, k) {
        var h = this.Ta[this.Fg],
            v, y;
        if (h.cr || k.length) {
            v = this.Jc();
            v.type = 10;
            v.ea ? Ob(this.Gc, v.ea) : v.ea = Nb();
            y = v.ea;
            y[0] = b;
            y[1] = c;
            y[2] = e;
            y[3] = g;
            y[4] = q;
            y[5] = n;
            y[6] = d;
            y[7] = f;
            y[8] = p;
            y[9] = s;
            v.Wc = h.Qg ? a : null;
            if (k.length)
                for (c = v.qo, c.length = k.length, a = 0, b = k.length; a < b; a++) c[a] = k[a];
            this.$b = this.Nb = !1
        }
    };
    f.prototype.clear = function(a, b, c, e) {
        var g = this.Jc();
        g.type = 7;
        g.qc = 0;
        g.ea || (g.ea = Nb());
        g.ea[0] = a;
        g.ea[1] = b;
        g.ea[2] = c;
        g.ea[3] = e;
        this.$b = this.Nb = !1
    };
    f.prototype.clearRect = function(a, b, c, e) {
        if (!(0 > c || 0 > e)) {
            var g = this.Jc();
            g.type = 7;
            g.qc = 1;
            g.ea || (g.ea = Nb());
            g.ea[0] = a;
            g.ea[1] = b;
            g.ea[2] = c;
            g.ea[3] = e;
            this.$b = this.Nb = !1
        }
    };
    f.prototype.Yr = function() {
        this.Ad();
        this.A.flush()
    };
    var p = [],
        b = {};
    f.prototype.yi = function(a, m, c, e) {
        m = !!m;
        c = !!c;
        var g = a.src + "," + m + "," + c + (m ? ",undefined" : ""),
            q = null;
        if ("undefined" !== typeof a.src && b.hasOwnProperty(g)) return q = b[g], q.Jh++, q;
        this.Ad();
        var n = this.A,
            d = ia(a.width) && ia(a.height),
            q = n.createTexture();
        n.bindTexture(n.TEXTURE_2D, q);
        n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
        var f = n.RGBA,
            r = n.RGBA,
            s = n.UNSIGNED_BYTE;
        if (e && !this.Ie) switch (e) {
            case 1:
                r = f = n.RGB;
                break;
            case 2:
                s = n.UNSIGNED_SHORT_4_4_4_4;
                break;
            case 3:
                s = n.UNSIGNED_SHORT_5_5_5_1;
                break;
            case 4:
                r = f = n.RGB, s = n.UNSIGNED_SHORT_5_6_5
        }
        if (!d && m) {
            e = document.createElement("canvas");
            e.width = la(a.width);
            e.height = la(a.height);
            var k = e.getContext("2d");
            k.webkitImageSmoothingEnabled = c;
            k.mozImageSmoothingEnabled = c;
            k.msImageSmoothingEnabled = c;
            k.imageSmoothingEnabled = c;
            k.drawImage(a, 0, 0, a.width, a.height, 0, 0, e.width, e.height);
            n.texImage2D(n.TEXTURE_2D, 0, f, r, s, e)
        } else n.texImage2D(n.TEXTURE_2D, 0, f, r, s, a);
        m ? (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.REPEAT)) : (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE));
        c ? (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), d && this.Nm ? (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR_MIPMAP_LINEAR), n.generateMipmap(n.TEXTURE_2D)) : n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR)) : (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.NEAREST), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.NEAREST));
        n.bindTexture(n.TEXTURE_2D, null);
        this.de = null;
        q.kg = a.width;
        q.jg = a.height;
        q.Jh = 1;
        q.Am = g;
        p.push(q);
        return b[g] = q
    };
    f.prototype.vd = function(a, b, c, e) {
        this.Ad();
        var g = this.A;
        this.Ie && (e = !1);
        var q = g.createTexture();
        g.bindTexture(g.TEXTURE_2D, q);
        g.texImage2D(g.TEXTURE_2D, 0, g.RGBA, a, b, 0, g.RGBA, e ? g.UNSIGNED_SHORT_4_4_4_4 : g.UNSIGNED_BYTE, null);
        g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE);
        g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE);
        g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, c ? g.LINEAR : g.NEAREST);
        g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, c ? g.LINEAR : g.NEAREST);
        g.bindTexture(g.TEXTURE_2D, null);
        this.de = null;
        q.kg = a;
        q.jg = b;
        p.push(q);
        return q
    };
    f.prototype.Fs = function(a, b, c) {
        this.Ad();
        var e = this.A;
        this.Ie && (c = !1);
        e.bindTexture(e.TEXTURE_2D, b);
        e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
        e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, c ? e.UNSIGNED_SHORT_4_4_4_4 : e.UNSIGNED_BYTE, a);
        e.bindTexture(e.TEXTURE_2D, null);
        this.de = null
    };
    f.prototype.deleteTexture = function(a) {
        a && ("undefined" !== typeof a.Jh && 1 < a.Jh ? a.Jh-- : (this.Ad(), a === this.de && (this.A.bindTexture(this.A.TEXTURE_2D, null), this.de = null), a === this.Le && (this.A.activeTexture(this.A.TEXTURE1), this.A.bindTexture(this.A.TEXTURE_2D, null), this.A.activeTexture(this.A.TEXTURE0), this.Le = null), ya(p, a), "undefined" !== typeof a.Am && delete b[a.Am], this.A.deleteTexture(a)))
    };
    f.prototype.ld = function(a) {
        if (a !== this.jo) {
            var b = this.Jc();
            b.type = 6;
            this.jo = b.Wc = a;
            this.$b = this.Nb = !1
        }
    };
    Wa = f
})();
(function() {
    function f(a) {
        if (a && (a.getContext || a.dc) && !a.c2runtime) {
            a.c2runtime = this;
            var k = this;
            this.rk = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !("undefined" === typeof window.c2isCrosswalk || !window.c2isCrosswalk);
            this.fd = !this.rk && "undefined" !== typeof window.device && ("undefined" !== typeof window.device.cordova || "undefined" !== typeof window.device.phonegap) || "undefined" !== typeof window.c2isphonegap && window.c2isphonegap;
            this.dd = !!a.dc;
            this.Bg = "undefined" !== typeof window.AppMobi || this.dd;
            this.nc = !!window.c2cocoonjs;
            this.Gd = !!window.c2ejecta;
            this.nc && (CocoonJS.App.onSuspended.addEventListener(function() {
                k.setSuspended(!0)
            }), CocoonJS.App.onActivated.addEventListener(function() {
                k.setSuspended(!1)
            }));
            this.Gd && (document.addEventListener("pagehide", function() {
                k.setSuspended(!0)
            }), document.addEventListener("pageshow", function() {
                k.setSuspended(!1)
            }), document.addEventListener("resize", function() {
                k.setSize(window.innerWidth, window.innerHeight)
            }));
            this.Ia = this.dd || this.nc || this.Gd;
            this.Ie = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent);
            this.qn = /tizen/i.test(navigator.userAgent);
            this.on = /android/i.test(navigator.userAgent) && !this.qn && !this.Ie;
            this.xk = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.Ie;
            this.vn = /ipad/i.test(navigator.userAgent);
            this.un = this.xk || this.vn || this.Gd;
            this.ur = this.xk && /os\s6/i.test(navigator.userAgent);
            this.li = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent);
            this.jr = /amazonwebappplatform/i.test(navigator.userAgent);
            this.nr = /firefox/i.test(navigator.userAgent);
            this.qr = /safari/i.test(navigator.userAgent) && !this.li && !this.Ie;
            this.ae = "undefined" !== typeof window.c2nodewebkit || /nodewebkit/i.test(navigator.userAgent);
            this.sr = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
            this.tr = !("undefined" === typeof window.c2isWindows8Capable || !window.c2isWindows8Capable);
            this.vk = !("undefined" === typeof window.c2isWindowsPhone8 || !window.c2isWindowsPhone8);
            this.sn = !("undefined" === typeof window.c2isWindowsPhone81 || !window.c2isWindowsPhone81);
            this.rn = this.sr || this.tr || this.sn;
            this.lr = !("undefined" === typeof window.c2isBlackberry10 || !window.c2isBlackberry10);
            this.kr = this.on && !this.li && !this.nr && !this.jr && !this.Ia;
            this.devicePixelRatio = 1;
            this.ed = this.fd || this.rk || this.Bg || this.nc || this.on || this.un || this.vk || this.sn || this.lr || this.qn || this.Gd;
            this.ed || (this.ed = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent));
            "undefined" === typeof cr_is_preview || this.ae || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) || (this.ae = !0);
            this.mr = "undefined" !== typeof cr_is_preview && -1 < window.location.search.indexOf("debug");
            this.canvas = a;
            this.Dm = document.getElementById("c2canvasdiv");
            this.ia = this.H = this.A = null;
            this.Yj = "";
            this.Yh = !1;
            this.Sn = this.Tn = 0;
            this.canvas.oncontextmenu = function(a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.canvas.onselectstart = function(a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.dd && (window.c2runtime = this);
            this.ae && (window.ondragover = function(a) {
                a.preventDefault();
                return !1
            }, window.ondrop = function(a) {
                a.preventDefault();
                return !1
            }, require("nw.gui").App.clearCache());
            this.width = a.width;
            this.height = a.height;
            this.Y = this.width;
            this.X = this.height;
            this.Sh = this.width;
            this.Rh = this.height;
            this.Hg = window.innerWidth;
            this.Gg = window.innerHeight;
            this.ga = !0;
            this.Dg = !1;
            Date.now || (Date.now = function() {
                return +new Date
            });
            this.plugins = [];
            this.types = {};
            this.B = [];
            this.Ga = [];
            this.Ck = {};
            this.Rc = [];
            this.Tj = {};
            this.Bd = [];
            this.eg = [];
            this.nj = [];
            this.yj = [];
            this.sp = [];
            this.bd = new fa;
            this.sk = !1;
            this.oc = 0;
            this.uk = !1;
            this.Ib = [];
            this.Jd = this.wb = this.wi = this.ul = "";
            this.mh = this.so = !1;
            this.Jj = this.Sg = this.Zd = this.qf = 0;
            this.$f = 1;
            this.Id = new Na;
            this.qi = 0;
            this.In = !0;
            this.Di = this.ai = this.sf = this.Xc = this.Ig = this.Xj = 0;
            this.xe = null;
            this.Vh = [];
            this.Sj = [];
            this.Wh = -1;
            this.Jk = [
                []
            ];
            this.Ll = this.Bi = 0;
            this.Pi(null);
            this.Kk = [];
            this.Ci = -1;
            this.Pn = this.Ug = 0;
            this.Bk = !0;
            this.og = 0;
            this.dj = [];
            this.kj = this.Qi = -1;
            this.Df = !0;
            this.Ai = 0;
            this.Cg = !1;
            this.ss = 0;
            this.ig = null;
            this.$q = !1;
            this.yk = 0;
            this.Ec = this.ik = this.gl = !1;
            this.Rn = new fa;
            this.Ok = new fa;
            this.Pk = new fa;
            this.il = [];
            this.Vc = new Pa([]);
            this.El = new Pa([]);
            this.Sd = [];
            this.di = {};
            this.nf = {};
            this.lf = {};
            this.dg = {};
            this.xm = {};
            this.Dn = this.vi = this.ec = this.pc = this.Cn = this.ti = this.V = null;
            this.bg = this.wk = !1;
            this.Zj = [null, null];
            this.De = 0;
            this.ge = {};
            this.Yi = this.Gf = null;
            this.load();
            this.devicePixelRatio = (this.Je = (!this.Ia || this.Gd) && this.Cs && !this.kr) ? window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio || 1 : 1;
            this.nb();
            var h, b = this.Aj && !(this.ae || this.rn || this.vk || this.rk);
            0 < this.Jb && this.setSize(window.innerWidth, window.innerHeight, !0);
            try {
                this.Vp && (this.nc || this.Gd || !this.Ia) && (h = {
                    alpha: b,
                    depth: !1,
                    antialias: !1,
                    failIfMajorPerformanceCaveat: !0
                }, this.A = a.getContext("webgl", h) || a.getContext("experimental-webgl", h))
            } catch (c) {}
            if (this.A) {
                this.Ia || (this.lb = document.createElement("canvas"), jQuery(this.lb).appendTo(this.canvas.parentNode), this.lb.oncontextmenu = t(!1), this.lb.onselectstart = t(!1), this.lb.width = this.Sh, this.lb.height = this.Rh, jQuery(this.lb).css({
                    width: this.Sh + "px",
                    height: this.Rh + "px"
                }), this.ao(), this.Zk = this.lb.getContext("2d"));
                this.H = new Wa(this.A, this.ed);
                this.H.Sf(a.width, a.height);
                this.H.Nm = 0 !== this.Sp;
                this.ia = null;
                this.canvas.addEventListener("webglcontextlost", function(a) {
                    a.preventDefault();
                    k.Jr();
                    console.log("[Construct 2] WebGL context lost");
                    window.cr_setSuspended(!0)
                }, !1);
                this.canvas.addEventListener("webglcontextrestored", function() {
                    k.H.jn();
                    k.H.Sf(k.H.width, k.H.height, !0);
                    k.pc = null;
                    k.ec = null;
                    k.Zj[0] = null;
                    k.Zj[1] = null;
                    k.Kr();
                    k.ga = !0;
                    console.log("[Construct 2] WebGL context restored");
                    window.cr_setSuspended(!1)
                }, !1);
                var g, e, n, m, q, d;
                a = 0;
                for (h = this.B.length; a < h; a++)
                    for (e = this.B[a], b = 0, g = e.R.length; b < g; b++) m = e.R[b], m.mb = this.H.gk(m.id), this.bg = this.bg || this.H.bh(m.mb);
                a = 0;
                for (h = this.Rc.length; a < h; a++) {
                    q = this.Rc[a];
                    b = 0;
                    for (g = q.R.length; b < g; b++) m = q.R[b], m.mb = this.H.gk(m.id);
                    b = 0;
                    for (g = q.Z.length; b < g; b++)
                        for (d = q.Z[b], e = 0, n = d.R.length; e < n; e++) m = d.R[e], m.mb = this.H.gk(m.id), this.bg = this.bg || this.H.bh(m.mb)
                }
            } else {
                if (0 < this.Jb && this.dd) {
                    this.canvas = null;
                    document.oncontextmenu = t(!1);
                    document.onselectstart = t(!1);
                    this.ia = AppMobi.canvas.getContext("2d");
                    try {
                        this.ia.samplingMode = this.aa ? "smooth" : "sharp", this.ia.globalScale = 1, this.ia.HTML5CompatibilityMode = !0, this.ia.imageSmoothingEnabled = this.aa
                    } catch (f) {}
                    0 !== this.width && 0 !== this.height && (this.ia.width = this.width, this.ia.height = this.height)
                }
                this.ia || (h = this.nc ? {
                    antialias: !!this.aa,
                    alpha: b
                } : {
                    alpha: b
                }, this.ia = a.getContext("2d", h), this.ia.webkitImageSmoothingEnabled = this.aa, this.ia.mozImageSmoothingEnabled = this.aa, this.ia.msImageSmoothingEnabled = this.aa, this.ia.imageSmoothingEnabled = this.aa);
                this.Zk = this.lb = null
            }
            this.jj = function() {
                k.jc(!1)
            };
            window == window.top || this.Ia || this.rn || this.vk || (document.addEventListener("mousedown", function() {
                window.focus()
            }, !0), document.addEventListener("touchstart", function() {
                window.focus()
            }, !0));
            "undefined" !== typeof cr_is_preview && (this.nc && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), -1 < window.location.search.indexOf("continuous") && (ga("Reloading for continuous preview"), this.wi = "__c2_continuouspreview", this.mh = !0), this.Rr && !this.ed && (jQuery(window).focus(function() {
                k.setSuspended(!1)
            }), jQuery(window).blur(function() {
                k.setSuspended(!0)
            })));
            a = function(a) {
                Va(a) && document.activeElement && document.activeElement.blur && document.activeElement.blur()
            };
            window.navigator.pointerEnabled ? document.addEventListener("pointerdown", a) : window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", a) : document.addEventListener("touchstart", a);
            0 === this.Jb && this.Je && 1 < this.devicePixelRatio && this.setSize(this.ab, this.$a, !0);
            this.Co();
            this.Xq();
            this.go();
            this.N = {}
        }
    }

    function r(a) {
        a.target.result.createObjectStore("saves", {
            keyPath: "slot"
        })
    }

    function d(a, k, h, b) {
        var c = indexedDB.open("_C2SaveStates");
        c.onupgradeneeded = r;
        c.onerror = b;
        c.onsuccess = function(c) {
            c = c.target.result;
            c.onerror = b;
            c.transaction(["saves"], "readwrite").objectStore("saves").put({
                slot: a,
                data: k
            }).onsuccess = h
        }
    }

    function p(a, k, h) {
        var b = indexedDB.open("_C2SaveStates");
        b.onupgradeneeded = r;
        b.onerror = h;
        b.onsuccess = function(b) {
            b = b.target.result;
            b.onerror = h;
            var c = b.transaction(["saves"]).objectStore("saves").get(a);
            c.onsuccess = function() {
                c.result ? k(c.result.data) : k(null)
            }
        }
    }

    function b() {
        ga("Reloading for continuous preview");
        window.c2cocoonjs ? CocoonJS.App.reload() : -1 < window.location.search.indexOf("continuous") ? window.location.reload(!0) : window.location += "?continuous"
    }

    function a(a) {
        var k, h = {};
        for (k in a) !a.hasOwnProperty(k) || a[k] instanceof fa || a[k] && "undefined" !== typeof a[k].Jt || (h[k] = a[k]);
        return h
    }
    f.prototype.setSize = function(a, k, h) {
        var b = 0,
            c = 0,
            g = 0,
            e = 0,
            e = 0,
            n = this.ur && this.qr && !navigator.standalone && !this.Ia && !this.fd;
        n && (k += 60);
        if (this.Hg !== a || this.Gg !== k || h) {
            this.Hg = a;
            this.Gg = k;
            var m = this.Jb,
                q = (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.Cg) && !this.fd;
            if (q || 0 !== this.Jb || h) q && 0 < this.De && (m = this.De), h = this.devicePixelRatio, 4 <= m ? (g = this.ab / this.$a, a / k > g ? (g *= k, 5 === m ? (e = g * h / this.ab, 1 < e ? e = Math.floor(e) : 1 > e && (e = 1 / Math.ceil(1 / e)), g = this.ab * e / h, e = this.$a * e / h, b = (a - g) / 2, c = (k - e) / 2, a = g, k = e) : (b = (a - g) / 2, a = g)) : (e = a / g, 5 === m ? (e = e * h / this.$a, 1 < e ? e = Math.floor(e) : 1 > e && (e = 1 / Math.ceil(1 / e)), g = this.ab * e / h, e = this.$a * e / h, b = (a - g) / 2, c = (k - e) / 2, a = g) : c = (k - e) / 2, k = e), q && !this.ae && (c = b = 0)) : this.ae && this.Cg && 0 === this.Um && (b = Math.floor((a - this.ab) / 2), c = Math.floor((k - this.$a) / 2), a = this.ab, k = this.$a), 2 > m && (this.hg = h), this.Je && this.vn && 1 < h && (1024 <= a && (a = 1023), 1024 <= k && (k = 1023)), this.Sh = Math.round(a), this.Rh = Math.round(k), this.width = Math.round(a * h), this.height = Math.round(k * h), this.ga = !0, this.Mo ? (this.Y = this.width, this.X = this.height, this.Cc = !0) : this.width < this.ab && this.height < this.$a || 1 === m ? (this.Y = this.width, this.X = this.height, this.Cc = !0) : (this.Y = this.ab, this.X = this.$a, this.Cc = !1, 2 === m ? (g = this.ab / this.$a, m = this.Hg / this.Gg, m < g ? this.Y = this.X * m : m > g && (this.X = this.Y / m)) : 3 === m && (g = this.ab / this.$a, m = this.Hg / this.Gg, m > g ? this.Y = this.X * m : m < g && (this.X = this.Y / m))), this.Dm && !this.Ia && (jQuery(this.Dm).css({
                width: Math.round(a) + "px",
                height: Math.round(k) +
                    "px",
                "margin-left": Math.floor(b) + "px",
                "margin-top": Math.floor(c) + "px"
            }), "undefined" !== typeof cr_is_preview && jQuery("#borderwrap").css({
                width: Math.round(a) + "px",
                height: Math.round(k) + "px"
            })), this.canvas && (this.canvas.width = Math.round(a * h), this.canvas.height = Math.round(k * h), this.Gd ? (this.canvas.style.left = Math.floor(b) + "px", this.canvas.style.top = Math.floor(c) + "px", this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(k) + "px") : this.Je && !this.Ia && jQuery(this.canvas).css({
                width: Math.round(a) +
                    "px",
                height: Math.round(k) + "px"
            })), this.lb && (this.lb.width = Math.round(a), this.lb.height = Math.round(k), jQuery(this.lb).css({
                width: Math.round(a) + "px",
                height: Math.round(k) + "px"
            })), this.H && this.H.Sf(Math.round(a * h), Math.round(k * h)), this.dd && this.ia && (this.ia.width = Math.round(a), this.ia.height = Math.round(k)), this.ia && (this.ia.webkitImageSmoothingEnabled = this.aa, this.ia.mozImageSmoothingEnabled = this.aa, this.ia.msImageSmoothingEnabled = this.aa, this.ia.imageSmoothingEnabled = this.aa), this.Co(), this.Ia || !n && !this.xk || window.setTimeout(function() {
                window.scrollTo(0, 1)
            }, 100)
        }
    };
    f.prototype.Co = function() {
        if (this.up && 0 !== this.Yk) {
            var a = "portrait";
            2 === this.Yk && (a = "landscape");
            screen.lockOrientation ? screen.lockOrientation(a) : screen.webkitLockOrientation ? screen.webkitLockOrientation(a) : screen.mozLockOrientation ? screen.mozLockOrientation(a) : screen.msLockOrientation && screen.msLockOrientation(a)
        }
    };
    f.prototype.Jr = function() {
        this.wk = !0;
        var a, k, h;
        a = 0;
        for (k = this.B.length; a < k; a++) h = this.B[a], h.Ei && h.Ei()
    };
    f.prototype.Kr = function() {
        this.wk = !1;
        var a, k, h;
        a = 0;
        for (k = this.B.length; a < k; a++) h = this.B[a], h.Xk && h.Xk()
    };
    f.prototype.ao = function() {
        if (!this.Ia) {
            var a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || document.msFullscreenElement || this.Cg) && !this.fd ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
            a.position = "absolute";
            jQuery(this.lb).css(a)
        }
    };
    var m = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
    f.prototype.setSuspended = function(a) {
        var k;
        if (a && !this.Dg)
            for (ga("[Construct 2] Suspending"), this.Dg = !0, -1 !== this.Qi && m && m(this.Qi), -1 !== this.kj && clearTimeout(this.kj), a = 0, k = this.dj.length; a < k; a++) this.dj[a](!0);
        else if (!a && this.Dg) {
            ga("[Construct 2] Resuming");
            this.Dg = !1;
            this.qi = I();
            this.Ig = I();
            a = this.Sg = this.ai = 0;
            for (k = this.dj.length; a < k; a++) this.dj[a](!1);
            this.jc(!1)
        }
    };
    f.prototype.load = function() {
        var a = Sb();
        this.name = a[0];
        this.Tm = a[1];
        this.Jb = a[12];
        this.Um = a[12];
        this.ab = a[10];
        this.$a = a[11];
        this.Vn = this.ab / 2;
        this.Wn = this.$a / 2;
        this.Ia && !this.Gd && (4 <= a[12] || 0 === a[12]) && (ga("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"), this.Um = this.Jb = 3);
        this.Ql = a[18];
        this.Ng = a[19];
        0 === this.Ng && (this.Gf = new Image, this.Gf.src = "files/loading-logo.png");
        this.Ug = a[21];
        this.nd = new P(this);
        var k, h, b, c, g, e, n, m, q;
        k = 0;
        for (h = a[2].length; k < h; k++) n = a[2][k], Xa(n), q = new n[0](this), q.Wi = n[1], q.be = n[2], q.Ln = n[9], q.la && q.la(), this.plugins.push(q);
        a = Sb();
        k = 0;
        for (h = a[3].length; k < h; k++) {
            n = a[3][k];
            g = n[1];
            q = null;
            b = 0;
            for (c = this.plugins.length; b < c; b++)
                if (this.plugins[b] instanceof g) {
                    q = this.plugins[b];
                    break
                }
            var d = new q.ob(q);
            d.name = n[0];
            d.O = n[2];
            d.pk = n[3].slice(0);
            d.Es = n[3].length;
            d.vp = n[4];
            d.xq = n[5];
            d.W = n[11];
            d.O ? (d.Qe = [], d.Cd = this.og++, d.ta = null) : (d.Qe = null, d.Cd = -1, d.ta = []);
            d.Xh = null;
            d.uf = null;
            d.Pm = null;
            d.ub = !1;
            d.Vb = null;
            n[6] ? (d.Gl = n[6][0], d.Hl = n[6][1], d.Il = n[6][2]) : (d.Gl = null, d.Hl = 0, d.Il = 0);
            d.Ub = n[7] ? n[7] : null;
            d.index = k;
            d.j = [];
            d.Uh = [];
            d.pe = [new Ya(d)];
            d.zd = 0;
            d.Ac = null;
            d.Gp = 0;
            d.Xf = !0;
            d.oj = Za;
            d.Cq = $a;
            d.Hq = ab;
            d.T = bb;
            d.eh = cb;
            d.fh = db;
            d.ie = eb;
            d.bi = fb;
            d.ak = gb;
            d.dk = hb;
            d.xc = ib;
            d.Zm = jb;
            d.Ph = new Qa(this.ab, this.$a);
            d.Ch = !0;
            d.Dh = !1;
            d.N = {};
            d.toString = kb;
            d.Ga = [];
            b = 0;
            for (c = n[8].length; b < c; b++) {
                m = n[8][b];
                var f = m[1],
                    p = null;
                g = 0;
                for (e = this.Ga.length; g < e; g++)
                    if (this.Ga[g] instanceof f) {
                        p = this.Ga[g];
                        break
                    }
                p || (p = new f(this), p.Nn = [], p.Kf = new fa, p.la && p.la(), this.Ga.push(p)); - 1 === p.Nn.indexOf(d) && p.Nn.push(d);
                g = new p.ob(p, d);
                g.name = m[0];
                g.W = m[2];
                g.la();
                d.Ga.push(g)
            }
            d.global = n[9];
            d.tk = n[10];
            d.R = [];
            b = 0;
            for (c = n[12].length; b < c; b++) d.R.push({
                id: n[12][b][0],
                name: n[12][b][1],
                mb: -1,
                Wa: !0,
                index: b
            });
            d.Zt = n[13];
            this.Ql && !d.O && !d.tk && q.be || d.la();
            d.name && (this.types[d.name] = d);
            this.B.push(d);
            q.Wi && (b = new q.Fa(d), b.uid = this.Ug++, b.eo = this.Pn++, b.Ge = 0, b.wg = lb, b.toString = mb, b.ba = n[14], b.la(), d.j.push(b), this.ge[b.uid.toString()] = b)
        }
        k = 0;
        for (h = a[4].length; k < h; k++)
            for (g = a[4][k], e = this.B[g[0]], b = 1, c = g.length; b < c; b++) n = this.B[g[b]], n.ta.push(e), e.Qe.push(n);
        k = 0;
        for (h = a[26].length; k < h; k++) {
            g = a[26][k];
            e = [];
            b = 0;
            for (c = g.length; b < c; b++) e.push(this.B[g[b]]);
            b = 0;
            for (c = e.length; b < c; b++) e[b].ub = !0, e[b].Vb = e
        }
        if (0 < this.og)
            for (k = 0, h = this.B.length; k < h; k++)
                if (n = this.B[k], !n.O && n.ta.length) {
                    n.Xh = Array(this.og);
                    n.uf = Array(this.og);
                    n.Pm = Array(this.og);
                    d = [];
                    b = p = f = m = 0;
                    for (c = n.ta.length; b < c; b++)
                        for (q = n.ta[b], n.Xh[q.Cd] = m, m += q.Es, n.uf[q.Cd] = f, f += q.vp, n.Pm[q.Cd] = p, p += q.xq, g = 0, e = q.R.length; g < e; g++) d.push(ta({}, q.R[g]));
                    n.R = d.concat(n.R);
                    b = 0;
                    for (c = n.R.length; b < c; b++) n.R[b].index = b
                }
        k = 0;
        for (h = a[5].length; k < h; k++) n = a[5][k], b = new nb(this, n), this.Ck[b.name] = b, this.Rc.push(b);
        k = 0;
        for (h = a[6].length; k < h; k++) n = a[6][k], b = new ob(this, n), this.Tj[b.name] = b, this.Bd.push(b);
        k = 0;
        for (h = this.Bd.length; k < h; k++) this.Bd[k].Ea();
        k = 0;
        for (h = this.Bd.length; k < h; k++) this.Bd[k].Ol();
        k = 0;
        for (h = this.nj.length; k < h; k++) this.nj[k].Ea();
        this.nj.length = 0;
        this.tp = a[7];
        this.hd = a[9];
        this.hg = 1;
        this.Vp = a[13];
        this.aa = a[14];
        this.Aj = a[15];
        this.Cs = a[17];
        this.Yk = a[20];
        this.up = 0 < this.Yk;
        this.Rr = a[22];
        this.Cc = this.Mo = a[23];
        this.Sp = a[24];
        this.Xr = a[25];
        this.aj = Date.now()
    };
    var c = !1;
    f.prototype.Lo = function(a) {
        a.onerror = function(k) {
            c = a.xp = !0;
            console && console.error && console.error("Error loading image '" + a.src + "': ", k)
        };
        this.eg.push(a)
    };
    f.prototype.wq = function(a) {
        var k, h;
        k = 0;
        for (h = this.eg.length; k < h; k++)
            if (this.eg[k].Dp === a) return this.eg[k];
        return null
    };
    var e = 0,
        g = !1;
    f.prototype.Xq = function() {
        this.ig && (e = this.ig.Wt(this.tp))
    };
    f.prototype.wm = function() {
        var a = e,
            k = 0,
            h = 0,
            b = !0,
            c, A, h = 0;
        for (c = this.eg.length; h < c; h++) {
            A = this.eg[h];
            var n = A.Gm;
            if (!n || 0 >= n) n = 5E4;
            a += n;
            !A.complete && !A.loaded || A.xp ? b = !1 : k += n
        }
        b && this.Xr && this.ig && (g || (this.ig.Xt(), g = !0), h = this.ig.Qt(), k += h, h < e && (b = !1));
        this.We = 0 == a ? 0 : k / a;
        return b
    };
    f.prototype.go = function() {
        if (this.ia || this.H) {
            var a = this.ia || this.Zk;
            this.lb && this.ao();
            this.We = 0;
            this.Bn = -1;
            if (this.wm()) this.Yq();
            else {
                var k = Date.now() - this.aj;
                if (a) {
                    var h = this.width,
                        b = this.height,
                        g = this.devicePixelRatio;
                    this.lb && (h = this.Sh, b = this.Rh, g = 1);
                    if (3 !== this.Ng && (this.nc || 500 <= k && this.Bn != this.We)) {
                        a.clearRect(0, 0, h, b);
                        var k = h / 2,
                            b = b / 2,
                            h = 0 === this.Ng && this.Gf.complete,
                            e = 40 * g,
                            n = 0,
                            d = 80 * g,
                            m;
                        h && (d = this.Gf.width * g, m = this.Gf.height * g, e = d / 2, n = m / 2, a.drawImage(this.Gf, C(k - e), C(b - n), d, m));
                        1 >= this.Ng ? (k = C(k - e) + 0.5, b = C(b + (n + (h ? 12 * g : 0))) + 0.5, a.fillStyle = c ? "red" : "DodgerBlue", a.fillRect(k, b, Math.floor(d * this.We), 6 * g), a.strokeStyle = "black", a.strokeRect(k, b, d, 6 * g), a.strokeStyle = "white", a.strokeRect(k - 1 * g, b - 1 * g, d + 2 * g, 8 * g)) : 2 === this.Ng && (a.font = this.Gd ? "12pt ArialMT" : "12pt Arial", a.fillStyle = c ? "#f00" : "#999", a.Yt = "middle", g = Math.round(100 * this.We) + "%", h = a.measureText ? a.measureText(g) : null, a.fillText(g, k - (h ? h.width : 0) / 2, b))
                    }
                    this.Bn = this.We
                }
                setTimeout(function(a) {
                    return function() {
                        a.go()
                    }
                }(this), this.nc ? 10 : 100)
            }
        }
    };
    f.prototype.Yq = function() {
        this.lb && (this.canvas.parentNode.removeChild(this.lb), this.lb = this.Zk = null);
        this.aj = Date.now();
        this.Ig = I();
        var a, k, h;
        if (this.Ql)
            for (a = 0, k = this.B.length; a < k; a++) h = this.B[a], h.O || h.tk || !h.wa.be || h.la();
        else this.Df = !1;
        a = 0;
        for (k = this.Rc.length; a < k; a++) this.Rc[a].Ep();
        2 <= this.Jb && (a = this.ab / this.$a, k = this.width / this.height, this.hg = 2 !== this.Jb && k > a || 2 === this.Jb && k < a ? this.height / this.$a : this.width / this.ab);
        this.Tm ? this.Ck[this.Tm].Bl() : this.Rc[0].Bl();
        this.Ql || (this.Ai = 1, this.trigger(P.prototype.i.cm, null));
        navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide();
        a = 0;
        for (k = this.B.length; a < k; a++) h = this.B[a], h.Ir && h.Ir();
        this.jc(!1);
        this.dd && AppMobi.webview.execute("onGameReady();")
    };
    var q = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    f.prototype.jc = function(a) {
        if (this.V) {
            var k = I();
            if (this.$q && this.gl && 29 > k - this.yk) this.gl = !1, this.yk = k, q ? this.Qi = q(this.jj, this.canvas) : this.kj = setTimeout(this.jj, this.ed ? 1 : 16);
            else {
                this.gl = !0;
                this.yk = k;
                var h = this.Jb,
                    b = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement) && !this.fd;
                (b || this.Cg) && 0 < this.De && (h = this.De);
                if (0 < h && (!this.un || window.self !== window.top)) {
                    var h = window.innerWidth,
                        c = window.innerHeight;
                    this.Hg === h && this.Gg === c || this.setSize(h, c)
                }
                this.Ia || (b ? (this.Yh || (this.Yj = jQuery(this.canvas).css("margin") || "0", this.Yh = !0), this.li || this.ae || jQuery(this.canvas).css({
                    "margin-left": "" + Math.floor((screen.width - this.width / this.devicePixelRatio) / 2) + "px",
                    "margin-top": "" + Math.floor((screen.height - this.height / this.devicePixelRatio) / 2) + "px"
                })) : this.Yh ? (this.li || this.ae || jQuery(this.canvas).css("margin", this.Yj), this.Yj = "", this.Yh = !1, 0 === this.Jb && this.setSize(Math.round(this.Tn / this.devicePixelRatio), Math.round(this.Sn / this.devicePixelRatio), !0)) : (this.Tn = this.width, this.Sn = this.height));
                this.Df && (b = this.wm(), this.Ai = this.We, b && (this.Df = !1, this.We = 1, this.trigger(P.prototype.i.cm, null)));
                this.Cr();
                !this.ga && !this.nc || this.wk || this.mh || a || (this.ga = !1, this.H ? this.Wb() : this.Bc(), this.Yi && (this.canvas && this.canvas.toDataURL && (this.canvas.toDataURL(this.Yi[0], this.Yi[1]), this.trigger(P.prototype.i.Uo, null)), this.Yi = null));
                this.Rt || (this.Xc++, this.sf++, this.ai++);
                this.Sg += I() - k;
                this.Dg || a || (q ? this.Qi = q(this.jj, this.canvas) : this.kj = setTimeout(this.jj, this.ed ? 1 : 16))
            }
        }
    };
    f.prototype.Cr = function() {
        var a, k, h, b, c, g, e, n, d;
        a = I();
        1E3 <= a - this.Ig && (this.Ig += 1E3, this.Xj = this.ai, this.ai = 0, this.Jj = this.Sg, this.Sg = 0);
        this.In && (0 !== this.qi && (k = a - this.qi, 0 !== k || this.mr ? (this.Zd = k / 1E3, 0.5 < this.Zd ? this.Zd = 0 : 0.1 < this.Zd && (this.Zd = 0.1)) : (10 <= this.au && (this.In = !1), this.Zd = 1 / 60)), this.qi = a);
        this.qf = this.Zd * this.$f;
        this.Id.add(this.qf);
        a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.Cg) && !this.fd;
        2 <= this.Jb || a && 0 < this.De ? (k = this.ab / this.$a, h = this.width / this.height, b = this.Jb, a && 0 < this.De && (b = this.De), this.hg = 2 !== b && h > k || 2 === b && h < k ? this.height / this.$a : this.width / this.ab, this.V && (this.V.wl(this.V.scrollX), this.V.lo(this.V.scrollY))) : this.hg = this.Je ? this.devicePixelRatio : 1;
        this.nb();
        this.oc++;
        this.nd.ds();
        this.oc--;
        this.nb();
        this.oc++;
        h = this.Rn.qd();
        a = 0;
        for (k = h.length; a < k; a++) h[a].St();
        a = 0;
        for (k = this.B.length; a < k; a++)
            if (e = this.B[a], !e.O && (e.Ga.length || e.ta.length))
                for (h = 0, b = e.j.length; h < b; h++)
                    for (n = e.j[h], c = 0, g = n.Q.length; c < g; c++) n.Q[c].jc();
        a = 0;
        for (k = this.B.length; a < k; a++)
            if (e = this.B[a], !e.O && (e.Ga.length || e.ta.length))
                for (h = 0, b = e.j.length; h < b; h++)
                    for (n = e.j[h], c = 0, g = n.Q.length; c < g; c++) d = n.Q[c], d.Wr && d.Wr();
        h = this.Ok.qd();
        a = 0;
        for (k = h.length; a < k; a++) h[a].jc();
        this.oc--;
        this.br();
        for (a = 0; this.xe && 10 > a++;) this.Mm(this.xe);
        a = 0;
        for (k = this.Bd.length; a < k; a++) this.Bd[a].kk = !1;
        this.V.Be && this.V.Be.Ka();
        this.il.length = 0;
        this.Bk = !1;
        this.oc++;
        a = 0;
        for (k = this.B.length; a < k; a++)
            if (e = this.B[a], !e.O && (e.Ga.length || e.ta.length))
                for (h = 0, b = e.j.length; h < b; h++)
                    for (n = e.j[h], c = 0, g = n.Q.length; c < g; c++) d = n.Q[c], d.ij && d.ij();
        h = this.Pk.qd();
        a = 0;
        for (k = h.length; a < k; a++) h[a].ij();
        this.oc--
    };
    f.prototype.Mm = function(a) {
        var k = this.V;
        this.V.ts();
        var h, b, c, g, e, n, d;
        if (this.H)
            for (h = 0, b = this.B.length; h < b; h++) e = this.B[h], e.O || !e.Nl || e.global && 0 !== e.j.length || -1 !== a.zg.indexOf(e) || e.Nl();
        k == a && (this.nd.Sb.length = 0);
        a.Bl();
        h = 0;
        for (b = this.B.length; h < b; h++)
            if (e = this.B[h], e.global || e.wa.Wi)
                for (a = 0, k = e.j.length; a < k; a++)
                    if (n = e.j[a], n.Tk && n.Tk(), n.Q)
                        for (c = 0, g = n.Q.length; c < g; c++) d = n.Q[c], d.Tk && d.Tk();
        this.Bk = this.ga = !0;
        this.nb()
    };
    f.prototype.Zf = function(a) {
        this.Ok.add(a)
    };
    f.prototype.vs = function(a) {
        this.Pk.add(a)
    };
    f.prototype.wf = function(a) {
        return a && -1 !== a.Tg ? this.Zd * a.Tg : this.qf
    };
    f.prototype.Bc = function() {
        this.V.Bc(this.ia);
        this.dd && this.ia.present()
    };
    f.prototype.Wb = function() {
        this.V.Wb(this.H);
        this.H.Yr()
    };
    f.prototype.qm = function(a) {
        a && this.Vh.push(a)
    };
    f.prototype.bs = function(a) {
        ya(this.Vh, a)
    };
    f.prototype.fk = function(a) {
        a = a.toString();
        return this.ge.hasOwnProperty(a) ? this.ge[a] : null
    };
    f.prototype.se = function(a) {
        var k, h;
        if (!this.bd.contains(a)) {
            this.bd.add(a);
            if (a.ub)
                for (k = 0, h = a.siblings.length; k < h; k++) this.se(a.siblings[k]);
            this.sk && this.bd.cg.push(a);
            this.oc++;
            this.trigger(Object.getPrototypeOf(a.type.wa).i.Vo, a);
            this.oc--
        }
    };
    f.prototype.nb = function() {
        var a, k, h, b, c, g, e, n, d, m;
        this.sk = !0;
        b = 0;
        for (g = this.Ib.length; b < g; b++)
            for (a = this.Ib[b], k = a.type, k.j.push(a), c = 0, e = k.ta.length; c < e; c++) k.ta[c].j.push(a), k.ta[c].Xf = !0;
        this.Ib.length = 0;
        g = this.bd.qd();
        for (b = 0; b < g.length; b++) {
            a = g[b];
            k = a.type;
            h = k.j;
            c = 0;
            for (e = this.Vh.length; c < e; c++) this.Vh[c](a);
            ya(h, a);
            0 === h.length && (k.Dh = !1);
            a.Oh && k.Ph.update(a, a.Oh, null);
            a.m && (ua(a.m.j, a.Mb()), a.m.kc = !0);
            c = 0;
            for (e = k.ta.length; c < e; c++) ya(k.ta[c].j, a), k.ta[c].Xf = !0;
            if (a.Q)
                for (c = 0, e = a.Q.length; c < e; c++) h = a.Q[c], h.Ue && h.Ue(), h.jb.Kf.remove(a);
            this.Rn.remove(a);
            this.Ok.remove(a);
            this.Pk.remove(a);
            c = 0;
            for (e = this.nd.Sb.length; c < e; c++)
                if (d = this.nd.Sb[c], d.zb.hasOwnProperty(k.index) && ya(d.zb[k.index].Fd, a), !k.O)
                    for (h = 0, n = k.ta.length; h < n; h++) m = k.ta[h], d.zb.hasOwnProperty(m.index) && ya(d.zb[m.index].Fd, a);
            a.Ue && a.Ue();
            this.ge.hasOwnProperty(a.uid.toString()) && delete this.ge[a.uid.toString()];
            this.Di--;
            64 > k.Uh.length && k.Uh.push(a);
            k.Xf = !0
        }
        this.bd.Qc() || (this.ga = !0);
        this.bd.clear();
        this.sk = !1
    };
    f.prototype.Kj = function(a, k, h, b) {
        if (a.O) {
            var c = C(Math.random() * a.Qe.length);
            return this.Kj(a.Qe[c], k, h, b)
        }
        return a.Ac ? this.Xd(a.Ac, k, !1, h, b, !1) : null
    };
    var n = [];
    f.prototype.Xd = function(a, k, h, b, c, g) {
        var e, d, m, q;
        if (!a) return null;
        var f = this.B[a[1]],
            p = f.wa.be;
        if (this.Df && p && !f.tk || p && !this.H && 11 === a[0][11]) return null;
        var r = k;
        p || (k = null);
        var u;
        f.Uh.length ? (u = f.Uh.pop(), u.hc = !0, f.wa.Fa.call(u, f)) : (u = new f.wa.Fa(f), u.hc = !1);
        u.uid = h && !g ? a[2] : this.Ug++;
        this.ge[u.uid.toString()] = u;
        u.eo = this.Pn++;
        u.Ge = f.j.length;
        e = 0;
        for (d = this.Ib.length; e < d; ++e) this.Ib[e].type === f && u.Ge++;
        u.wg = lb;
        m = a[3];
        if (u.hc) Ma(u.N);
        else {
            u.N = {};
            if ("undefined" !== typeof cr_is_preview)
                for (u.mn = [], u.mn.length = m.length, e = 0, d = m.length; e < d; e++) u.mn[e] = m[e][1];
            u.Qa = [];
            u.Qa.length = m.length
        }
        e = 0;
        for (d = m.length; e < d; e++) u.Qa[e] = m[e][0];
        if (p) {
            var x = a[0];
            u.x = ha(b) ? x[0] : b;
            u.y = ha(c) ? x[1] : c;
            u.z = x[2];
            u.width = x[3];
            u.height = x[4];
            u.depth = x[5];
            u.n = x[6];
            u.opacity = x[7];
            u.ac = x[8];
            u.cc = x[9];
            u.Db = x[10];
            e = x[11];
            !this.H && f.R.length && (u.Db = e);
            u.lg = Ra(u.Db);
            this.A && Sa(u, u.Db, this.A);
            if (u.hc) {
                e = 0;
                for (d = x[12].length; e < d; e++)
                    for (m = 0, q = x[12][e].length; m < q; m++) u.za[e][m] = x[12][e][m];
                u.Da.set(0, 0, 0, 0);
                u.Oh.set(0, 0, -1, -1);
                u.sb.Uf(u.Da);
                u.Ej.length = 0
            } else {
                u.za = x[12].slice(0);
                e = 0;
                for (d = u.za.length; e < d; e++) u.za[e] = x[12][e].slice(0);
                u.$ = [];
                u.Pd = [];
                u.Pd.length = f.R.length;
                u.Da = new ra(0, 0, 0, 0);
                u.Oh = new ra(0, 0, -1, -1);
                u.sb = new sa;
                u.Ej = [];
                u.ma = pb;
                u.rp = qb;
                u.tb = rb;
                u.xa = sb;
                u.Pl = tb;
                u.Mb = ub
            }
            u.oh = !1;
            u.ys = 0;
            u.xs = 0;
            u.ws = null;
            14 === x.length && (u.oh = !0, u.ys = x[13][0], u.xs = x[13][1], u.ws = x[13][2]);
            e = 0;
            for (d = f.R.length; e < d; e++) u.Pd[e] = !0;
            u.Nd = vb;
            u.Nd();
            u.Ko = !!u.$.length;
            u.Ih = !0;
            u.Gj = !0;
            f.Ch = !0;
            u.visible = !0;
            u.Tg = -1;
            u.m = k;
            u.bf = k.j.length;
            "undefined" === typeof u.ca && (u.ca = null);
            this.ga = u.ye = !0
        }
        u.toString = mb;
        var z;
        e = n.length = 0;
        for (d = f.ta.length; e < d; e++) n.push.apply(n, f.ta[e].Ga);
        n.push.apply(n, f.Ga);
        if (u.hc)
            for (e = 0, d = n.length; e < d; e++) {
                var F = n[e];
                z = u.Q[e];
                z.hc = !0;
                F.jb.Fa.call(z, F, u);
                x = a[4][e];
                m = 0;
                for (q = x.length; m < q; m++) z.ba[m] = x[m];
                z.la();
                F.jb.Kf.add(u)
            } else
                for (u.Q = [], e = 0, d = n.length; e < d; e++) F = n[e], z = new F.jb.Fa(F, u), z.hc = !1, z.ba = a[4][e].slice(0), z.la(), u.Q.push(z), F.jb.Kf.add(u);
        x = a[5];
        if (u.hc)
            for (e = 0, d = x.length; e < d; e++) u.ba[e] = x[e];
        else u.ba = x.slice(0);
        this.Ib.push(u);
        k && (k.j.push(u), 1 !== k.Hc || 1 !== k.Ic) && (f.Dh = !0);
        this.Di++;
        if (f.ub) {
            if (u.ub = !0, u.hc ? u.siblings.length = 0 : u.siblings = [], !h && !g) {
                e = 0;
                for (d = f.Vb.length; e < d; e++)
                    if (f.Vb[e] !== f) {
                        if (!f.Vb[e].Ac) return null;
                        u.siblings.push(this.Xd(f.Vb[e].Ac, r, !1, p ? u.x : b, p ? u.y : c, !0))
                    }
                e = 0;
                for (d = u.siblings.length; e < d; e++)
                    for (u.siblings[e].siblings.push(u), m = 0; m < d; m++) e !== m && u.siblings[e].siblings.push(u.siblings[m])
            }
        } else u.ub = !1, u.siblings = null;
        u.la();
        e = 0;
        for (d = u.Q.length; e < d; e++) u.Q[e].Vr && u.Q[e].Vr();
        return u
    };
    f.prototype.ek = function(a) {
        var k, b;
        k = 0;
        for (b = this.V.Z.length; k < b; k++) {
            var c = this.V.Z[k];
            if (Ua(c.name, a)) return c
        }
        return null
    };
    f.prototype.tg = function(a) {
        a = C(a);
        0 > a && (a = 0);
        a >= this.V.Z.length && (a = this.V.Z.length - 1);
        return this.V.Z[a]
    };
    f.prototype.Hj = function(a) {
        var k, b;
        k = 0;
        for (b = a.length; k < b; k++) a[k].T().U = !0
    };
    f.prototype.eh = function(a) {
        var k, b;
        k = 0;
        for (b = a.length; k < b; k++) a[k].eh()
    };
    f.prototype.fh = function(a) {
        var b, h;
        b = 0;
        for (h = a.length; b < h; b++) a[b].fh()
    };
    f.prototype.ie = function(a) {
        var b, h;
        b = 0;
        for (h = a.length; b < h; b++) a[b].ie()
    };
    f.prototype.Io = function(a) {
        if (a.Ch) {
            var b, h, c = a.j;
            b = 0;
            for (h = c.length; b < h; ++b) c[b].Pl();
            c = this.Ib;
            b = 0;
            for (h = c.length; b < h; ++b) c[b].type === a && c[b].Pl();
            a.Ch = !1
        }
    };
    f.prototype.Wm = function(a, b, h, c) {
        var g, e, n = a ? 1 !== a.Hc || 1 !== a.Ic : !1;
        if (b.O)
            for (a = 0, g = b.Qe.length; a < g; ++a) e = b.Qe[a], n || e.Dh ? wa(c, e.j) : (this.Io(e), e.Ph.fo(h, c));
        else n || b.Dh ? wa(c, b.j) : (this.Io(b), b.Ph.fo(h, c))
    };
    f.prototype.cn = function(a, b, h) {
        var c, g;
        c = 0;
        for (g = a.length; c < g; ++c) this.Wm(null, a[c], b, h)
    };
    f.prototype.gj = function(a, b, h) {
        var c = a.T(),
            g, e, n, d, m, q;
        if (c.U)
            for (c.U = !1, g = c.j.length = 0, d = a.j.length; g < d; g++) n = a.j[g], n.xa(), m = n.m.Oa(b, h, !0), q = n.m.Oa(b, h, !1), n.tb(m, q) && c.j.push(n);
        else {
            g = e = 0;
            for (d = c.j.length; g < d; g++) n = c.j[g], n.xa(), m = n.m.Oa(b, h, !0), q = n.m.Oa(b, h, !1), n.tb(m, q) && (c.j[e] = c.j[g], e++);
            c.j.length = e
        }
        a.xc();
        return c.jk()
    };
    f.prototype.us = function(a, b) {
        if (!(a && b && a !== b && a.ye && b.ye)) return !1;
        a.xa();
        b.xa();
        var h = a.m,
            c = b.m,
            g, e, n, d, m, q, f, p;
        if (h === c || h.Hc === c.Hc && c.Ic === c.Ic && h.scale === c.scale && h.n === c.n && h.Yc === c.Yc) {
            if (!a.Da.hr(b.Da) || !a.sb.nn(b.sb) || a.oh && b.oh) return !1;
            if (a.oh) return this.wo(a, b);
            if (b.oh) return this.wo(b, a);
            f = a.ca && !a.ca.Bf();
            g = b.ca && !b.ca.Bf();
            if (!f && !g) return !0;
            f ? (a.ca.mf(a.width, a.height, a.n), f = a.ca) : (this.Vc.Tf(a.sb, a.x, a.y, a.width, a.height), f = this.Vc);
            g ? (b.ca.mf(b.width, b.height, b.n), p = b.ca) : (this.Vc.Tf(b.sb, b.x, b.y, b.width, b.height), p = this.Vc);
            return f.Ag(p, b.x - a.x, b.y - a.y)
        }
        f = a.ca && !a.ca.Bf();
        g = b.ca && !b.ca.Bf();
        f ? (a.ca.mf(a.width, a.height, a.n), this.Vc.oo(a.ca)) : this.Vc.Tf(a.sb, a.x, a.y, a.width, a.height);
        f = this.Vc;
        g ? (b.ca.mf(b.width, b.height, b.n), this.El.oo(b.ca)) : this.El.Tf(b.sb, b.x, b.y, b.width, b.height);
        p = this.El;
        g = 0;
        for (e = f.Tc; g < e; g++) n = 2 * g, d = n + 1, m = f.Ra[n], q = f.Ra[d], f.Ra[n] = h.ua(m + a.x, q + a.y, !0), f.Ra[d] = h.ua(m + a.x, q + a.y, !1);
        f.xa();
        g = 0;
        for (e = p.Tc; g < e; g++) n = 2 * g, d = n + 1, m = p.Ra[n], q = p.Ra[d], p.Ra[n] = c.ua(m + b.x, q + b.y, !0), p.Ra[d] = c.ua(m + b.x, q + b.y, !1);
        p.xa();
        return f.Ag(p, 0, 0)
    };
    var u = new sa;
    new ra(0, 0, 0, 0);
    var x = [];
    f.prototype.wo = function(a, b) {
        var h, c, g, e, n = b.Da,
            d = a.x,
            m = a.y;
        a.Mt(n, x);
        var q = b.ca && !b.ca.Bf();
        h = 0;
        for (c = x.length; h < c; ++h)
            if (g = x[h], e = g.Tt, n.ir(e, d, m) && (u.Uf(e), u.offset(d, m), u.nn(b.sb)))
                if (q)
                    if (b.ca.mf(b.width, b.height, b.n), g.al) {
                        if (g.al.Ag(b.ca, b.x - (d + e.left), b.y - (m + e.top))) return x.length = 0, !0
                    } else {
                        if (this.Vc.Tf(u, 0, 0, e.right - e.left, e.bottom - e.top), this.Vc.Ag(b.ca, b.x, b.y)) return x.length = 0, !0
                    }
        else if (g.al) {
            if (this.Vc.Tf(b.sb, 0, 0, b.width, b.height), g.al.Ag(this.Vc, -(d + e.left), -(m + e.top))) return x.length = 0, !0
        } else return x.length = 0, !0;
        x.length = 0;
        return !1
    };
    f.prototype.Do = function(a, b) {
        if (!b) return !1;
        var h, c, g, e, n;
        h = 0;
        for (c = a.Ga.length; h < c; h++)
            if (a.Ga[h].jb instanceof b) return !0;
        if (!a.O)
            for (h = 0, c = a.ta.length; h < c; h++)
                for (n = a.ta[h], g = 0, e = n.Ga.length; g < e; g++)
                    if (n.Ga[g].jb instanceof b) return !0;
        return !1
    };
    f.prototype.Eo = function(a) {
        return this.Do(a, Kb.it)
    };
    f.prototype.Ml = function(a) {
        return this.Do(a, Kb.jt)
    };
    f.prototype.Bp = function(a, b) {
        var h, c, g;
        h = 0;
        for (c = this.il.length; h < c; h++)
            if (g = this.il[h], g[0] == a && g[1] == b || g[0] == b && g[1] == a) return !0;
        return !1
    };
    var z = -1;
    f.prototype.trigger = function(a, b, h) {
        if (!this.V) return !1;
        var c = this.V.Be;
        if (!c) return !1;
        var g = !1,
            e, n, d;
        z++;
        var m = c.Oj;
        n = 0;
        for (d = m.length; n < d; ++n) e = this.Ao(a, b, m[n], h), g = g || e;
        e = this.Ao(a, b, c, h);
        z--;
        return g || e
    };
    f.prototype.Ao = function(a, b, h, c) {
        var g = !1,
            e, n, d, m;
        if (b)
            for (d = this.Kl(a, b, b.type.name, h, c), g = g || d, m = b.type.ta, e = 0, n = m.length; e < n; ++e) d = this.Kl(a, b, m[e].name, h, c), g = g || d;
        else d = this.Kl(a, b, "system", h, c), g = g || d;
        return g
    };
    f.prototype.Kl = function(a, b, h, c, g) {
        var e, n = !1,
            d = !1,
            d = "undefined" !== typeof g,
            m = (d ? c.Rm : c.Bo)[h];
        if (!m) return n;
        var q = null;
        c = 0;
        for (e = m.length; c < e; ++c)
            if (m[c].method == a) {
                q = m[c].ng;
                break
            }
        if (!q) return n;
        a = d ? q[g] : q;
        if (!a) return null;
        c = 0;
        for (e = a.length; c < e; c++) g = a[c][0], d = a[c][1], d = this.uq(b, h, g, d), n = n || d;
        return n
    };
    f.prototype.uq = function(a, b, h, c) {
        var g, e, n = !1;
        this.Ll++;
        var d = this.Ya().Xa;
        d && this.eh(d.ne);
        var m = 1 < this.Ll;
        this.eh(h.ne);
        m && this.$r();
        var q = this.Pi(h);
        q.Xa = h;
        a && (g = this.types[b].T(), g.U = !1, g.j.length = 1, g.j[0] = a, this.types[b].xc());
        a = !0;
        if (h.parent) {
            b = q.vo;
            for (g = h.parent; g;) b.push(g), g = g.parent;
            b.reverse();
            g = 0;
            for (e = b.length; g < e; g++)
                if (!b[g].gs()) {
                    a = !1;
                    break
                }
        }
        a && (this.sf++, h.Sc ? h.es(c) : h.Ka(), n = n || q.Me);
        this.Mi();
        m && this.Tr();
        this.ie(h.ne);
        d && this.ie(d.ne);
        0 !== this.oc || 0 !== z || this.uk || this.bd.Qc() && !this.Ib.length || this.nb();
        this.Ll--;
        return n
    };
    f.prototype.rg = function() {
        var a = this.Ya();
        return a.Xa.Pa[a.Ha]
    };
    f.prototype.Aq = function() {
        var a = this.Ya();
        return a.Xa.wc[a.Cb]
    };
    f.prototype.$r = function() {
        this.Bi++;
        this.Bi >= this.Jk.length && this.Jk.push([])
    };
    f.prototype.Tr = function() {
        this.Bi--
    };
    f.prototype.Xm = function() {
        return this.Jk[this.Bi]
    };
    f.prototype.Pi = function(a) {
        this.Wh++;
        this.Wh >= this.Sj.length && this.Sj.push(new wb);
        var b = this.Ya();
        b.reset(a);
        return b
    };
    f.prototype.Mi = function() {
        this.Wh--
    };
    f.prototype.Ya = function() {
        return this.Sj[this.Wh]
    };
    f.prototype.as = function() {
        this.Ci++;
        this.Ci >= this.Kk.length && this.Kk.push(ca({
            name: void 0,
            index: 0,
            Dl: !1
        }));
        var a = this.Bq();
        a.name = void 0;
        a.index = 0;
        a.Dl = !1;
        return a
    };
    f.prototype.Ur = function() {
        this.Ci--
    };
    f.prototype.Bq = function() {
        return this.Kk[this.Ci]
    };
    f.prototype.Ym = function(a, b) {
        for (var h, c, g, e, n, d; b;) {
            h = 0;
            for (c = b.Mc.length; h < c; h++)
                if (d = b.Mc[h], d instanceof xb && Ua(a, d.name)) return d;
            b = b.parent
        }
        h = 0;
        for (c = this.Bd.length; h < c; h++)
            for (n = this.Bd[h], g = 0, e = n.$d.length; g < e; g++)
                if (d = n.$d[g], d instanceof xb && Ua(a, d.name)) return d;
        return null
    };
    f.prototype.$m = function(a) {
        var b, h;
        b = 0;
        for (h = this.Rc.length; b < h; b++)
            if (this.Rc[b].W === a) return this.Rc[b];
        return null
    };
    f.prototype.ug = function(a) {
        var b, h;
        b = 0;
        for (h = this.B.length; b < h; b++)
            if (this.B[b].W === a) return this.B[b];
        return null
    };
    f.prototype.Dq = function(a) {
        var b, h;
        b = 0;
        for (h = this.Sd.length; b < h; b++)
            if (this.Sd[b].W === a) return this.Sd[b];
        return null
    };
    f.prototype.br = function() {
        var a = this,
            c = this.ul,
            h = this.Jd,
            g = this.wi,
            e = !1;
        this.so && (e = !0, c = "__c2_continuouspreview", this.so = !1);
        if (c.length) {
            this.nb();
            h = this.ms();
            if (window.indexedDB && !this.nc) d(c, h, function() {
                ga("Saved state to IndexedDB storage (" + h.length + " bytes)");
                a.Jd = h;
                a.trigger(P.prototype.i.uj, null);
                a.Jd = "";
                e && b()
            }, function(g) {
                try {
                    localStorage.setItem("__c2save_" + c, h), ga("Saved state to WebStorage (" + h.length + " bytes)"), a.Jd = h, a.trigger(P.prototype.i.uj, null), a.Jd = "", e && b()
                } catch (n) {
                    ga("Failed to save game state: " + g + "; " + n)
                }
            });
            else try {
                localStorage.setItem("__c2save_" + c, h), ga("Saved state to WebStorage (" + h.length + " bytes)"), a.Jd = h, this.trigger(P.prototype.i.uj, null), a.Jd = "", e && b()
            } catch (n) {
                ga("Error saving to WebStorage: " + n)
            }
            this.wb = this.wi = this.ul = ""
        }
        g.length && (window.indexedDB && !this.nc ? p(g, function(b) {
            b ? (a.wb = b, ga("Loaded state from IndexedDB storage (" + a.wb.length + " bytes)")) : (a.wb = localStorage.getItem("__c2save_" + g) || "", ga("Loaded state from WebStorage (" +
                a.wb.length + " bytes)"));
            a.mh = !1;
            a.wb.length || a.trigger(P.prototype.i.tj, null)
        }, function() {
            a.wb = localStorage.getItem("__c2save_" + g) || "";
            ga("Loaded state from WebStorage (" + a.wb.length + " bytes)");
            a.mh = !1;
            a.wb.length || a.trigger(P.prototype.i.tj, null)
        }) : (this.wb = localStorage.getItem("__c2save_" + g) || "", ga("Loaded state from WebStorage (" + this.wb.length + " bytes)"), this.mh = !1, a.wb.length || a.trigger(P.prototype.i.tj, null)), this.ul = this.wi = "");
        this.wb.length && (this.nb(), this.Br(this.wb), this.Jd = this.wb, this.trigger(P.prototype.i.dp, null), this.wb = this.Jd = "")
    };
    f.prototype.ms = function() {
        var b, c, h, g, e, n, d, m = {
            c2save: !0,
            version: 1,
            rt: {
                time: this.Id.oa,
                timescale: this.$f,
                tickcount: this.Xc,
                execcount: this.sf,
                next_uid: this.Ug,
                running_layout: this.V.W,
                start_time_offset: Date.now() - this.aj
            },
            types: {},
            layouts: {},
            events: {
                groups: {},
                cnds: {},
                acts: {},
                vars: {}
            }
        };
        b = 0;
        for (c = this.B.length; b < c; b++)
            if (e = this.B[b], !e.O && !this.Eo(e)) {
                n = {
                    instances: []
                };
                La(e.N) && (n.ex = a(e.N));
                h = 0;
                for (g = e.j.length; h < g; h++) n.instances.push(this.tl(e.j[h]));
                m.types[e.W.toString()] = n
            }
        b = 0;
        for (c = this.Rc.length; b < c; b++) h = this.Rc[b], m.layouts[h.W.toString()] = h.yb();
        g = m.events.groups;
        b = 0;
        for (c = this.Sd.length; b < c; b++) h = this.Sd[b], g[h.W.toString()] = this.di[h.xg].yf;
        c = m.events.cnds;
        for (d in this.nf) this.nf.hasOwnProperty(d) && (b = this.nf[d], La(b.N) && (c[d] = {
            ex: a(b.N)
        }));
        c = m.events.acts;
        for (d in this.lf) this.lf.hasOwnProperty(d) && (b = this.lf[d], La(b.N) && (c[d] = {
            ex: b.N
        }));
        c = m.events.vars;
        for (d in this.dg) this.dg.hasOwnProperty(d) && (b = this.dg[d], b.mi || b.parent && !b.Eg || (c[d] = b.data));
        m.system = this.nd.yb();
        return JSON.stringify(m)
    };
    f.prototype.ho = function() {
        var a, b, h, c, g, e;
        this.ge = {};
        a = 0;
        for (b = this.B.length; a < b; a++)
            if (h = this.B[a], !h.O)
                for (c = 0, g = h.j.length; c < g; c++) e = h.j[c], this.ge[e.uid.toString()] = e
    };
    f.prototype.Br = function(a) {
        a = JSON.parse(a);
        if (a.c2save && !(1 < a.version)) {
            var b = a.rt;
            this.Id.reset();
            this.Id.oa = b.time;
            this.$f = b.timescale;
            this.Xc = b.tickcount;
            this.aj = Date.now() - b.start_time_offset;
            var h = b.running_layout;
            if (h !== this.V.W)
                if (h = this.$m(h)) this.Mm(h);
                else return;
            var c, g, e, n, d, m, q;
            m = a.types;
            for (g in m)
                if (m.hasOwnProperty(g) && (n = this.ug(parseInt(g, 10))) && !n.O && !this.Eo(n)) {
                    m[g].ex ? n.N = m[g].ex : Ma(n.N);
                    d = n.j;
                    e = m[g].instances;
                    h = 0;
                    for (c = na(d.length, e.length); h < c; h++) this.xi(d[h], e[h]);
                    h = e.length;
                    for (c = d.length; h < c; h++) this.se(d[h]);
                    h = d.length;
                    for (c = e.length; h < c; h++) {
                        d = null;
                        if (n.wa.be && (d = this.V.ci(e[h].w.l), !d)) continue;
                        d = this.Xd(n.Ac, d, !1, 0, 0, !0);
                        this.xi(d, e[h])
                    }
                    n.Xf = !0
                }
            this.nb();
            this.ho();
            c = a.layouts;
            for (g in c) c.hasOwnProperty(g) && (h = this.$m(parseInt(g, 10))) && h.fc(c[g]);
            c = a.events.groups;
            for (g in c) c.hasOwnProperty(g) && (h = this.Dq(parseInt(g, 10))) && this.di[h.xg] && (this.di[h.xg].yf = c[g]);
            h = a.events.cnds;
            for (g in h) h.hasOwnProperty(g) && this.nf.hasOwnProperty(g) && (this.nf[g].N = h[g].ex);
            h = a.events.acts;
            for (g in h) h.hasOwnProperty(g) && this.lf.hasOwnProperty(g) && (this.lf[g].N = h[g].ex);
            h = a.events.vars;
            for (g in h) h.hasOwnProperty(g) && this.dg.hasOwnProperty(g) && (this.dg[g].data = h[g]);
            this.Ug = b.next_uid;
            this.nd.fc(a.system);
            h = 0;
            for (c = this.B.length; h < c; h++)
                if (n = this.B[h], !n.O)
                    for (g = 0, a = n.j.length; g < a; g++) {
                        d = n.j[g];
                        if (n.ub)
                            for (m = d.wg(), b = d.siblings.length = 0, e = n.Vb.length; b < e; b++) q = n.Vb[b], n !== q && d.siblings.push(q.j[m]);
                        d.Qd && d.Qd();
                        if (d.Q)
                            for (b = 0, e = d.Q.length; b < e; b++) m = d.Q[b], m.Qd && m.Qd()
                    }
            this.ga = !0
        }
    };
    f.prototype.tl = function(b, c) {
        var h, g, e, n, d;
        n = b.type;
        e = n.wa;
        var m = {};
        c ? m.c2 = !0 : m.uid = b.uid;
        La(b.N) && (m.ex = a(b.N));
        if (b.Qa && b.Qa.length)
            for (m.ivs = {}, h = 0, g = b.Qa.length; h < g; h++) m.ivs[b.type.pk[h].toString()] = b.Qa[h];
        if (e.be) {
            e = {
                x: b.x,
                y: b.y,
                w: b.width,
                h: b.height,
                l: b.m.W,
                zi: b.Mb()
            };
            0 !== b.n && (e.a = b.n);
            1 !== b.opacity && (e.o = b.opacity);
            0.5 !== b.ac && (e.hX = b.ac);
            0.5 !== b.cc && (e.hY = b.cc);
            0 !== b.Db && (e.bm = b.Db);
            b.visible || (e.v = b.visible);
            b.ye || (e.ce = b.ye); - 1 !== b.Tg && (e.mts = b.Tg);
            if (n.R.length)
                for (e.fx = [], h = 0, g = n.R.length; h < g; h++) d = n.R[h], e.fx.push({
                    name: d.name,
                    active: b.Pd[d.index],
                    params: b.za[d.index]
                });
            m.w = e
        }
        if (b.Q && b.Q.length)
            for (m.behs = {}, h = 0, g = b.Q.length; h < g; h++) n = b.Q[h], n.yb && (m.behs[n.type.W.toString()] = n.yb());
        b.yb && (m.data = b.yb());
        return m
    };
    f.prototype.Fq = function(a, b) {
        var h, c;
        h = 0;
        for (c = a.pk.length; h < c; h++)
            if (a.pk[h] === b) return h;
        return -1
    };
    f.prototype.zq = function(a, b) {
        var h, c;
        h = 0;
        for (c = a.Q.length; h < c; h++)
            if (a.Q[h].type.W === b) return h;
        return -1
    };
    f.prototype.xi = function(a, b, h) {
        var c, g, e, n, d;
        d = a.type;
        e = d.wa;
        if (h) {
            if (!b.c2) return
        } else a.uid = b.uid;
        b.ex ? a.N = b.ex : Ma(a.N);
        if (g = b.ivs)
            for (c in g) g.hasOwnProperty(c) && (h = this.Fq(d, parseInt(c, 10)), 0 > h || h >= a.Qa.length || (a.Qa[h] = g[c]));
        if (e.be) {
            e = b.w;
            a.m.W !== e.l && (h = a.m, a.m = this.V.ci(e.l), a.m ? (a.m.j.push(a), a.m.kc = !0, ya(h.j, a), h.kc = !0) : (a.m = h, this.se(a)));
            a.x = e.x;
            a.y = e.y;
            a.width = e.w;
            a.height = e.h;
            a.bf = e.zi;
            a.n = e.hasOwnProperty("a") ? e.a : 0;
            a.opacity = e.hasOwnProperty("o") ? e.o : 1;
            a.ac = e.hasOwnProperty("hX") ? e.hX : 0.5;
            a.cc = e.hasOwnProperty("hY") ? e.hY : 0.5;
            a.visible = e.hasOwnProperty("v") ? e.v : !0;
            a.ye = e.hasOwnProperty("ce") ? e.ce : !0;
            a.Tg = e.hasOwnProperty("mts") ? e.mts : -1;
            a.Db = e.hasOwnProperty("bm") ? e.bm : 0;
            a.lg = Ra(a.Db);
            this.A && Sa(a, a.Db, this.A);
            a.ma();
            if (e.hasOwnProperty("fx"))
                for (h = 0, g = e.fx.length; h < g; h++) n = d.dk(e.fx[h].name), 0 > n || (a.Pd[n] = e.fx[h].active, a.za[n] = e.fx[h].params);
            a.Nd()
        }
        if (d = b.behs)
            for (c in d) d.hasOwnProperty(c) && (e = this.zq(a, parseInt(c, 10)), 0 > e || a.Q[e].fc(d[c]));
        b.data && a.fc(b.data)
    };
    yb = function(a) {
        return new f(document.getElementById(a))
    };
    zb = function(a, b) {
        return new f({
            dc: !0,
            width: a,
            height: b
        })
    };
    window.cr_createRuntime = yb;
    window.cr_createDCRuntime = zb;
    window.createCocoonJSRuntime = function() {
        window.c2cocoonjs = !0;
        var a = document.createElement("screencanvas") || document.createElement("canvas");
        a.Vt = !0;
        document.body.appendChild(a);
        a = new f(a);
        window.c2runtime = a;
        window.addEventListener("orientationchange", function() {
            window.c2runtime.setSize(window.innerWidth, window.innerHeight)
        });
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    };
    window.createEjectaRuntime = function() {
        var a = new f(document.getElementById("canvas"));
        window.c2runtime = a;
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    }
})();
window.cr_getC2Runtime = function() {
    var f = document.getElementById("c2canvas");
    return f ? f.c2runtime : window.c2runtime ? window.c2runtime : null
};
window.cr_sizeCanvas = function(f, r) {
    if (0 !== f && 0 !== r) {
        var d = window.cr_getC2Runtime();
        d && d.setSize(f, r)
    }
};
window.cr_setSuspended = function(f) {
    var r = window.cr_getC2Runtime();
    r && r.setSuspended(f)
};
(function() {
    function f(b, a) {
        this.e = b;
        this.Be = null;
        this.scrollX = this.e.ab / 2;
        this.scrollY = this.e.$a / 2;
        this.scale = 1;
        this.n = 0;
        this.qg = !0;
        this.name = a[0];
        this.width = a[1];
        this.height = a[2];
        this.Fo = a[3];
        this.ro = a[4];
        this.W = a[5];
        var d = a[6],
            c, e;
        this.Z = [];
        this.zg = [];
        c = 0;
        for (e = d.length; c < e; c++) {
            var g = new Ab(this, d[c]);
            g.Qn = c;
            this.Z.push(g)
        }
        d = a[7];
        this.He = [];
        c = 0;
        for (e = d.length; c < e; c++) {
            var g = d[c],
                q = this.e.B[g[1]];
            q.Ac || (q.Ac = g);
            this.He.push(g); - 1 === this.zg.indexOf(q) && this.zg.push(q)
        }
        this.R = [];
        this.$ = [];
        this.za = [];
        c = 0;
        for (e = a[8].length; c < e; c++) this.R.push({
            id: a[8][c][0],
            name: a[8][c][1],
            mb: -1,
            Wa: !0,
            index: c
        }), this.za.push(a[8][c][2].slice(0));
        this.Nd();
        this.Qf = new ra(0, 0, 1, 1);
        this.hl = new ra(0, 0, 1, 1);
        this.he = {}
    }

    function r(b, a) {
        this.ka = b;
        this.e = b.e;
        this.j = [];
        this.scale = 1;
        this.n = 0;
        this.ze = !1;
        this.Md = new ra(0, 0, 0, 0);
        this.zo = new sa;
        this.Ab = this.Va = this.Bb = this.Ua = 0;
        this.kc = !1;
        this.name = a[0];
        this.index = a[1];
        this.W = a[2];
        this.visible = a[3];
        this.Vd = a[4];
        this.$e = a[5];
        this.Hc = a[6];
        this.Ic = a[7];
        this.opacity = a[8];
        this.Wj = a[9];
        this.Yc = a[10];
        this.Db = a[11];
        this.Up = a[12];
        this.lg = "source-over";
        this.pb = this.qb = 0;
        this.le = !1;
        var d = a[13],
            c, e;
        this.Af = [];
        c = 0;
        for (e = d.length; c < e; c++) {
            var g = d[c],
                q = this.e.B[g[1]];
            q.Ac || (q.Ac = g, q.Gp = this.index);
            this.Af.push(g); - 1 === this.ka.zg.indexOf(q) && this.ka.zg.push(q)
        }
        this.R = [];
        this.$ = [];
        this.za = [];
        c = 0;
        for (e = a[14].length; c < e; c++) this.R.push({
            id: a[14][c][0],
            name: a[14][c][1],
            mb: -1,
            Wa: !0,
            index: c
        }), this.za.push(a[14][c][2].slice(0));
        this.Nd();
        this.Qf = new ra(0, 0, 1, 1);
        this.hl = new ra(0, 0, 1, 1)
    }

    function d(b, a) {
        return b.bf - a.bf
    }
    f.prototype.ks = function(b) {
        var a = b.type.W.toString();
        this.he.hasOwnProperty(a) || (this.he[a] = []);
        this.he[a].push(this.e.tl(b))
    };
    f.prototype.dn = function() {
        var b = this.Z[0];
        return !b.$e && 1 === b.opacity && !b.Wj && b.visible
    };
    f.prototype.Nd = function() {
        this.$.length = 0;
        var b, a, d;
        b = 0;
        for (a = this.R.length; b < a; b++) d = this.R[b], d.Wa && this.$.push(d)
    };
    f.prototype.ck = function(b) {
        var a, d, c;
        a = 0;
        for (d = this.R.length; a < d; a++)
            if (c = this.R[a], c.name === b) return c;
        return null
    };
    var p = [];
    f.prototype.Bl = function() {
        this.ro && (this.Be = this.e.Tj[this.ro], this.Be.Ol());
        this.e.V = this;
        this.scrollX = this.e.ab / 2;
        this.scrollY = this.e.$a / 2;
        var b, a, m, c, e, g, q;
        b = 0;
        for (m = this.e.B.length; b < m; b++)
            if (a = this.e.B[b], !a.O)
                for (e = a.j, a = 0, c = e.length; a < c; a++)
                    if (g = e[a], g.m) {
                        var n = g.m.Qn;
                        n >= this.Z.length && (n = this.Z.length - 1);
                        g.m = this.Z[n]; - 1 === g.m.j.indexOf(g) && g.m.j.push(g);
                        g.m.kc = !0
                    }
        p.length = 0;
        this.wp();
        b = 0;
        for (m = this.Z.length; b < m; b++) g = this.Z[b], g.Fp(), g.ze = !0, a = g.Oa(0, 0, !0, !0), c = g.Oa(0, 0, !1, !0), g.ze = !1, this.e.hd && (a = a + 0.5 | 0, c = c + 0.5 | 0), g.pl(a, c, null);
        e = !1;
        if (!this.qg) {
            for (q in this.he)
                if (this.he.hasOwnProperty(q) && (a = this.e.ug(parseInt(q, 10))) && !a.O && this.e.Ml(a)) {
                    c = this.he[q];
                    b = 0;
                    for (m = c.length; b < m; b++) {
                        g = null;
                        if (a.wa.be && (g = this.ci(c[b].w.l), !g)) continue;
                        g = this.e.Xd(a.Ac, g, !1, 0, 0, !0);
                        this.e.xi(g, c[b]);
                        e = !0;
                        p.push(g)
                    }
                    c.length = 0
                }
            b = 0;
            for (m = this.Z.length; b < m; b++) this.Z[b].j.sort(d), this.Z[b].kc = !0
        }
        e && (this.e.nb(), this.e.ho());
        for (b = 0; b < p.length; b++)
            if (g = p[b], g.type.ub)
                for (m = g.wg(), a = 0, c = g.type.Vb.length; a < c; a++) q = g.type.Vb[a], g.type !== q && (q.j.length > m ? g.siblings.push(q.j[m]) : q.Ac && (e = this.e.Xd(q.Ac, g.m, !0, g.x, g.y, !0), this.e.nb(), q.oj(), g.siblings.push(e), p.push(e)));
        b = 0;
        for (m = this.He.length; b < m; b++) this.e.Xd(this.He[b], null, !0);
        this.e.xe = null;
        this.e.nb();
        if (this.e.ia && !this.e.Ia)
            for (b = 0, m = this.e.B.length; b < m; b++) q = this.e.B[b], !q.O && q.j.length && q.bl && q.bl(this.e.ia);
        b = 0;
        for (m = p.length; b < m; b++) g = p[b], this.e.trigger(Object.getPrototypeOf(g.type.wa).i.fg, g);
        p.length = 0;
        this.e.trigger(P.prototype.i.cp, null);
        this.qg = !1
    };
    f.prototype.Ep = function() {
        var b, a, d, c, e;
        a = b = 0;
        for (d = this.He.length; b < d; b++) c = this.He[b], e = this.e.B[c[1]], e.global ? this.e.Xd(c, null, !0) : (this.He[a] = c, a++);
        this.He.length = a
    };
    f.prototype.ts = function() {
        this.e.trigger(P.prototype.i.bp, null);
        this.e.nd.Sb.length = 0;
        var b, a, d, c, e, g;
        b = 0;
        for (a = this.Z.length; b < a; b++) {
            e = this.Z[b].j;
            d = 0;
            for (c = e.length; d < c; d++) g = e[d], g.type.global || (this.e.Ml(g.type) && this.ks(g), this.e.se(g));
            this.e.nb();
            e.length = 0;
            this.Z[b].kc = !0
        }
        b = 0;
        for (a = this.e.B.length; b < a; b++)
            if (e = this.e.B[b], !(e.global || e.wa.be || e.wa.Wi || e.O)) {
                d = 0;
                for (c = e.j.length; d < c; d++) this.e.se(e.j[d]);
                this.e.nb()
            }
    };
    f.prototype.Bc = function(b) {
        var a, d = b,
            c = !1,
            e = !this.e.Cc;
        e && (this.e.vi || (this.e.vi = document.createElement("canvas"), a = this.e.vi, a.width = this.e.Y, a.height = this.e.X, this.e.Dn = a.getContext("2d"), c = !0), a = this.e.vi, d = this.e.Dn, a.width !== this.e.Y && (a.width = this.e.Y, c = !0), a.height !== this.e.X && (a.height = this.e.X, c = !0), c && (d.webkitImageSmoothingEnabled = this.e.aa, d.mozImageSmoothingEnabled = this.e.aa, d.msImageSmoothingEnabled = this.e.aa, d.imageSmoothingEnabled = this.e.aa));
        d.globalAlpha = 1;
        d.globalCompositeOperation = "source-over";
        this.e.Aj && !this.dn() && d.clearRect(0, 0, this.e.Y, this.e.X);
        var g, q, c = 0;
        for (g = this.Z.length; c < g; c++) q = this.Z[c], q.visible && 0 < q.opacity && 11 !== q.Db && q.Bc(d);
        e && b.drawImage(a, 0, 0, this.e.width, this.e.height)
    };
    f.prototype.Wb = function(b) {
        var a = 0 < this.$.length || this.e.bg || !this.e.Cc;
        if (a) {
            this.e.ec || (this.e.ec = b.vd(this.e.Y, this.e.X, this.e.aa));
            if (this.e.ec.kg !== this.e.Y || this.e.ec.jg !== this.e.X) b.deleteTexture(this.e.ec), this.e.ec = b.vd(this.e.Y, this.e.X, this.e.aa);
            b.ld(this.e.ec);
            this.e.Cc || b.Sf(this.e.Y, this.e.X)
        } else this.e.ec && (b.ld(null), b.deleteTexture(this.e.ec), this.e.ec = null);
        this.e.Aj && !this.dn() && b.clear(0, 0, 0, 0);
        var d, c;
        d = 0;
        for (c = this.Z.length; d < c; d++) this.Z[d].visible && 0 < this.Z[d].opacity && this.Z[d].Wb(b);
        a && (0 === this.$.length || 1 === this.$.length && this.e.Cc ? (1 === this.$.length ? (a = this.$[0].index, b.md(this.$[0].mb), b.Rf(null, 1 / this.e.Y, 1 / this.e.X, 0, 0, 1, 1, this.scale, this.n, 0, 0, this.za[a]), b.Oi(this.$[0].mb) && (this.e.ga = !0)) : b.md(0), this.e.Cc || b.Sf(this.e.width, this.e.height), b.ld(null), b.Xe(1), b.ic(this.e.ec), b.mo(), b.jd(), b.pd(), a = this.e.width / 2, d = this.e.height / 2, b.gh(-a, d, a, d, a, -d, -a, -d), b.ic(null)) : this.kl(b, null, null, null))
    };
    f.prototype.vg = function() {
        return 0 < this.$.length || this.e.bg || !this.e.Cc ? this.e.ec : null
    };
    f.prototype.an = function() {
        var b = this.Z[0].Lb(),
            a, d, c;
        a = 1;
        for (d = this.Z.length; a < d; a++) c = this.Z[a], (0 !== c.Hc || 0 !== c.Ic) && c.Lb() < b && (b = c.Lb());
        return b
    };
    f.prototype.wl = function(b) {
        if (!this.Fo) {
            var a = this.e.Y * (1 / this.an()) / 2;
            b > this.width - a && (b = this.width - a);
            b < a && (b = a)
        }
        this.scrollX !== b && (this.scrollX = b, this.e.ga = !0)
    };
    f.prototype.lo = function(b) {
        if (!this.Fo) {
            var a = this.e.X * (1 / this.an()) / 2;
            b > this.height - a && (b = this.height - a);
            b < a && (b = a)
        }
        this.scrollY !== b && (this.scrollY = b, this.e.ga = !0)
    };
    f.prototype.wp = function() {
        this.wl(this.scrollX);
        this.lo(this.scrollY)
    };
    f.prototype.kl = function(b, a, d, c) {
        var e = d ? d.$ : a ? a.$ : this.$,
            g = 1,
            q = 0,
            n = 0,
            f = 0;
        d ? (g = d.m.Lb(), q = d.m.Kb(), n = d.m.Ua, f = d.m.Va) : a && (g = a.Lb(), q = a.Kb(), n = a.Ua, f = a.Va);
        var p = this.e.Zj,
            r, s, k, h, v = 0,
            y = 1,
            A, E = this.e.Y,
            J = this.e.X,
            ja = E / 2,
            ka = J / 2,
            T = a ? a.Qf : this.Qf,
            L = a ? a.hl : this.hl,
            M = 0,
            K = 0,
            H = 0,
            U = 0,
            F = E,
            V = E,
            D = J,
            N = J,
            ba = k = 0,
            da = d ? d.m.Kb() : 0;
        if (d) {
            r = 0;
            for (s = e.length; r < s; r++) k += b.Iq(e[r].mb), ba += b.Jq(e[r].mb);
            h = d.Da;
            M = a.ua(h.left, h.top, !0, !0);
            H = a.ua(h.left, h.top, !1, !0);
            F = a.ua(h.right, h.bottom, !0, !0);
            D = a.ua(h.right, h.bottom, !1, !0);
            0 !== da && (r = a.ua(h.right, h.top, !0, !0), s = a.ua(h.right, h.top, !1, !0), K = a.ua(h.left, h.bottom, !0, !0), U = a.ua(h.left, h.bottom, !1, !0), h = Math.min(M, F, r, K), F = Math.max(M, F, r, K), M = h, h = Math.min(H, D, s, U), D = Math.max(H, D, s, U), H = h);
            M -= k;
            H -= ba;
            F += k;
            D += ba;
            L.left = M / E;
            L.top = 1 - H / J;
            L.right = F / E;
            L.bottom = 1 - D / J;
            K = M = C(M);
            U = H = C(H);
            V = F = pa(F);
            N = D = pa(D);
            K -= k;
            U -= ba;
            V += k;
            N += ba;
            0 > M && (M = 0);
            0 > H && (H = 0);
            F > E && (F = E);
            D > J && (D = J);
            0 > K && (K = 0);
            0 > U && (U = 0);
            V > E && (V = E);
            N > J && (N = J);
            T.left = M / E;
            T.top = 1 - H / J;
            T.right = F / E;
            T.bottom = 1 - D / J
        } else T.left = L.left = 0, T.top = L.top = 0, T.right = L.right = 1, T.bottom = L.bottom = 1;
        ba = d && ((d.n || da) && b.bh(e[0].mb) || 0 !== k || 0 !== ba || 1 !== d.opacity || d.type.wa.Ln) || a && !d && 1 !== a.opacity;
        b.mo();
        if (ba) {
            p[v] || (p[v] = b.vd(E, J, this.e.aa));
            if (p[v].kg !== E || p[v].jg !== J) b.deleteTexture(p[v]), p[v] = b.vd(E, J, this.e.aa);
            b.md(0);
            b.ld(p[v]);
            A = N - U;
            b.clearRect(K, J - U - A, V - K, A);
            d ? d.Wb(b) : (b.ic(this.e.pc), b.Xe(a.opacity), b.jd(), b.translate(-ja, -ka), b.pd(), b.je(M, D, F, D, F, H, M, H, T));
            L.left = L.top = 0;
            L.right = L.bottom = 1;
            d && (h = T.top, T.top = T.bottom, T.bottom = h);
            v = 1;
            y = 0
        }
        b.Xe(1);
        k = e.length - 1;
        var da = b.cl(e[k].mb) || !a && !d && !this.e.Cc,
            W = 0;
        r = 0;
        for (s = e.length; r < s; r++) {
            p[v] || (p[v] = b.vd(E, J, this.e.aa));
            if (p[v].kg !== E || p[v].jg !== J) b.deleteTexture(p[v]), p[v] = b.vd(E, J, this.e.aa);
            b.md(e[r].mb);
            W = e[r].index;
            b.Oi(e[r].mb) && (this.e.ga = !0);
            0 != r || ba ? (b.Rf(c, 1 / E, 1 / J, L.left, L.top, L.right, L.bottom, g, q, n, f, d ? d.za[W] : a ? a.za[W] : this.za[W]), b.ic(null), r !== k || da ? (b.ld(p[v]), A = N - U, h = J - U - A, b.clearRect(K, h, V - K, A)) : (d ? b.me(d.qb, d.pb) : a && b.me(a.qb, a.pb), b.ld(c)), b.ic(p[y]), b.jd(), b.translate(-ja, -ka), b.pd(), b.je(M, D, F, D, F, H, M, H, T), r !== k || da || b.ic(null)) : (b.ld(p[v]), A = N - U, h = J - U - A, b.clearRect(K, h, V - K, A), d ? (b.Rf(c, 1 / d.width, 1 / d.height, L.left, L.top, L.right, L.bottom, g, q, n, f, d.za[W]), d.Wb(b)) : (b.Rf(c, 1 / E, 1 / J, 0, 0, 1, 1, g, q, n, f, a ? a.za[W] : this.za[W]), b.ic(a ? this.e.pc : this.e.ec), b.jd(), b.translate(-ja, -ka), b.pd(), b.je(M, D, F, D, F, H, M, H, T)), L.left = L.top = 0, L.right = L.bottom = 1, d && !da && (h = D, D = H, H = h));
            v = 0 === v ? 1 : 0;
            y = 0 === v ? 1 : 0
        }
        da && (b.md(0), d ? b.me(d.qb, d.pb) : a ? b.me(a.qb, a.pb) : this.e.Cc || (b.Sf(this.e.width, this.e.height), ja = this.e.width / 2, ka = this.e.height / 2, H = M = 0, F = this.e.width, D = this.e.height), b.ld(c), b.ic(p[y]), b.jd(), b.translate(-ja, -ka), b.pd(), d && 1 === e.length && !ba ? b.je(M, H, F, H, F, D, M, D, T) : b.je(M, D, F, D, F, H, M, H, T), b.ic(null))
    };
    f.prototype.ci = function(b) {
        var a, d;
        a = 0;
        for (d = this.Z.length; a < d; a++)
            if (this.Z[a].W === b) return this.Z[a];
        return null
    };
    f.prototype.yb = function() {
        var b, a, d, c = {
            sx: this.scrollX,
            sy: this.scrollY,
            s: this.scale,
            a: this.n,
            w: this.width,
            h: this.height,
            fv: this.qg,
            persist: this.he,
            fx: [],
            layers: {}
        };
        b = 0;
        for (a = this.R.length; b < a; b++) d = this.R[b], c.fx.push({
            name: d.name,
            active: d.Wa,
            params: this.za[d.index]
        });
        b = 0;
        for (a = this.Z.length; b < a; b++) d = this.Z[b], c.layers[d.W.toString()] = d.yb();
        return c
    };
    f.prototype.fc = function(b) {
        var a, d, c, e;
        this.scrollX = b.sx;
        this.scrollY = b.sy;
        this.scale = b.s;
        this.n = b.a;
        this.width = b.w;
        this.height = b.h;
        this.he = b.persist;
        "undefined" !== typeof b.fv && (this.qg = b.fv);
        var g = b.fx;
        a = 0;
        for (d = g.length; a < d; a++)
            if (c = this.ck(g[a].name)) c.Wa = g[a].active, this.za[c.index] = g[a].params;
        this.Nd();
        a = b.layers;
        for (e in a) a.hasOwnProperty(e) && (b = this.ci(parseInt(e, 10))) && b.fc(a[e])
    };
    nb = f;
    r.prototype.Nd = function() {
        this.$.length = 0;
        var b, a, d;
        b = 0;
        for (a = this.R.length; b < a; b++) d = this.R[b], d.Wa && this.$.push(d)
    };
    r.prototype.ck = function(b) {
        var a, d, c;
        a = 0;
        for (d = this.R.length; a < d; a++)
            if (c = this.R[a], c.name === b) return c;
        return null
    };
    r.prototype.Fp = function() {
        var b, a, d, c, e, g;
        a = b = 0;
        for (d = this.Af.length; b < d; b++) {
            c = this.Af[b];
            e = this.e.B[c[1]];
            g = this.e.Ml(e);
            e = !0;
            if (!g || this.ka.qg) c = this.e.Xd(c, this, !0), p.push(c), c.type.global && (e = !1);
            e && (this.Af[a] = this.Af[b], a++)
        }
        this.Af.length = a;
        this.e.nb();
        !this.e.H && this.R.length && (this.Db = this.Up);
        this.lg = Ra(this.Db);
        this.e.A && Sa(this, this.Db, this.e.A)
    };
    r.prototype.As = function() {
        if (this.kc) {
            var b, a;
            b = 0;
            for (a = this.j.length; b < a; b++) this.j[b].bf = b;
            this.kc = !1
        }
    };
    r.prototype.Lb = function(b) {
        return this.Gq() * (this.e.Cc || b ? this.e.hg : 1)
    };
    r.prototype.Gq = function() {
        return (this.scale * this.ka.scale - 1) * this.Yc + 1
    };
    r.prototype.Kb = function() {
        return this.ze ? 0 : Ba(this.ka.n + this.n)
    };
    r.prototype.Bc = function(b) {
        this.le = this.Wj || 1 !== this.opacity || 0 !== this.Db;
        var a = this.e.canvas,
            d = b,
            c = !1;
        this.le && (this.e.ti || (this.e.ti = document.createElement("canvas"), a = this.e.ti, a.width = this.e.Y, a.height = this.e.X, this.e.Cn = a.getContext("2d"), c = !0), a = this.e.ti, d = this.e.Cn, a.width !== this.e.Y && (a.width = this.e.Y, c = !0), a.height !== this.e.X && (a.height = this.e.X, c = !0), c && (d.webkitImageSmoothingEnabled = this.e.aa, d.mozImageSmoothingEnabled = this.e.aa, d.msImageSmoothingEnabled = this.e.aa, d.imageSmoothingEnabled = this.e.aa), this.$e && d.clearRect(0, 0, this.e.Y, this.e.X));
        d.globalAlpha = 1;
        d.globalCompositeOperation = "source-over";
        this.$e || (d.fillStyle = "rgb(" + this.Vd[0] + "," + this.Vd[1] + "," + this.Vd[2] + ")", d.fillRect(0, 0, this.e.Y, this.e.X));
        d.save();
        this.ze = !0;
        var c = this.Oa(0, 0, !0, !0),
            e = this.Oa(0, 0, !1, !0);
        this.ze = !1;
        this.e.hd && (c = c + 0.5 | 0, e = e + 0.5 | 0);
        this.pl(c, e, d);
        var g = this.Lb();
        d.scale(g, g);
        d.translate(-c, -e);
        for (var q, c = 0, e = this.j.length; c < e; c++) g = this.j[c], g.visible && 0 !== g.width && 0 !== g.height && (g.xa(), q = g.Da, q.right < this.Ua || q.bottom < this.Va || q.left > this.Bb || q.top > this.Ab || (d.globalCompositeOperation = g.lg, g.Bc(d)));
        d.restore();
        this.le && (b.globalCompositeOperation = this.lg, b.globalAlpha = this.opacity, b.drawImage(a, 0, 0))
    };
    r.prototype.pl = function(b, a, d) {
        var c = this.Lb();
        this.Ua = b;
        this.Va = a;
        this.Bb = b + this.e.Y * (1 / c);
        this.Ab = a + this.e.X * (1 / c);
        b = this.Kb();
        0 !== b && (d && (d.translate(this.e.Y / 2, this.e.X / 2), d.rotate(-b), d.translate(this.e.Y / -2, this.e.X / -2)), this.Md.set(this.Ua, this.Va, this.Bb, this.Ab), this.Md.offset((this.Ua + this.Bb) / -2, (this.Va + this.Ab) / -2), this.zo.po(this.Md, b), this.zo.ym(this.Md), this.Md.offset((this.Ua + this.Bb) / 2, (this.Va + this.Ab) / 2), this.Ua = this.Md.left, this.Va = this.Md.top, this.Bb = this.Md.right, this.Ab = this.Md.bottom)
    };
    r.prototype.Wb = function(b) {
        var a = this.e.Y,
            d = this.e.X,
            c = 0,
            e = 0;
        if (this.le = this.Wj || 1 !== this.opacity || 0 < this.$.length || 0 !== this.Db) {
            this.e.pc || (this.e.pc = b.vd(this.e.Y, this.e.X, this.e.aa));
            if (this.e.pc.kg !== this.e.Y || this.e.pc.jg !== this.e.X) b.deleteTexture(this.e.pc), this.e.pc = b.vd(this.e.Y, this.e.X, this.e.aa);
            b.ld(this.e.pc);
            this.$e && b.clear(0, 0, 0, 0)
        }
        this.$e || b.clear(this.Vd[0] / 255, this.Vd[1] / 255, this.Vd[2] / 255, 1);
        this.ze = !0;
        var e = this.Oa(0, 0, !0, !0),
            g = this.Oa(0, 0, !1, !0);
        this.ze = !1;
        this.e.hd && (e = e + 0.5 | 0, g = g + 0.5 | 0);
        this.pl(e, g, null);
        g = this.Lb();
        b.jd();
        b.scale(g, g);
        b.ql(-this.Kb());
        b.translate((this.Ua + this.Bb) / -2, (this.Va + this.Ab) / -2);
        b.pd();
        var q, n, f;
        q = 0;
        for (n = this.j.length; q < n; q++)
            if (f = this.j[q], f.visible && 0 !== f.width && 0 !== f.height && (f.xa(), c = f.Da, !(c.right < this.Ua || c.bottom < this.Va || c.left > this.Bb || c.top > this.Ab)))
                if (f.Ko)
                    if (c = f.$[0].mb, e = f.$[0].index, 1 !== f.$.length || b.cl(c) || b.Zr(c) || (f.n || f.m.Kb()) && b.bh(c) || 1 !== f.opacity || f.type.wa.Ln) this.ka.kl(b, this, f, this.le ? this.e.pc : this.ka.vg()), b.jd(), b.scale(g, g), b.ql(-this.Kb()), b.translate((this.Ua + this.Bb) / -2, (this.Va + this.Ab) / -2), b.pd();
                    else {
                        b.md(c);
                        b.me(f.qb, f.pb);
                        b.Oi(c) && (this.e.ga = !0);
                        var p = 0,
                            r = 0,
                            s = 0,
                            k = 0;
                        b.bh(c) && (c = f.Da, p = this.ua(c.left, c.top, !0, !0), r = this.ua(c.left, c.top, !1, !0), s = this.ua(c.right, c.bottom, !0, !0), c = this.ua(c.right, c.bottom, !1, !0), p /= a, r = 1 - r / d, s /= a, k = 1 - c / d);
                        b.Rf(this.le ? this.e.pc : this.ka.vg(), 1 / f.width, 1 / f.height, p, r, s, k, this.Lb(), this.Kb(), this.Ua, this.Va, f.za[e]);
                        f.Wb(b)
                    }
        else b.md(0), b.me(f.qb, f.pb), f.Wb(b);
        this.le && (c = this.$.length ? this.$[0].mb : 0, e = this.$.length ? this.$[0].index : 0, 0 === this.$.length || 1 === this.$.length && !b.cl(c) && 1 === this.opacity ? (1 === this.$.length ? (b.md(c), b.Rf(this.ka.vg(), 1 / this.e.Y, 1 / this.e.X, 0, 0, 1, 1, this.Lb(), this.Kb(), this.Ua, this.Va, this.za[e]), b.Oi(c) && (this.e.ga = !0)) : b.md(0), b.ld(this.ka.vg()), b.Xe(this.opacity), b.ic(this.e.pc), b.me(this.qb, this.pb), b.jd(), b.pd(), a = this.e.Y / 2, d = this.e.X / 2, b.gh(-a, d, a, d, a, -d, -a, -d), b.ic(null)) : this.ka.kl(b, this, null, this.ka.vg()))
    };
    r.prototype.Oa = function(b, a, d, c) {
        var e = this.e.devicePixelRatio;
        this.e.Je && (b *= e, a *= e);
        var e = this.e.Vn,
            g = this.e.Wn,
            e = (this.ka.scrollX - e) * this.Hc + e,
            g = (this.ka.scrollY - g) * this.Ic + g,
            f = 1 / this.Lb(!c);
        c ? (e -= this.e.Y * f / 2, g -= this.e.X * f / 2) : (e -= this.e.width * f / 2, g -= this.e.height * f / 2);
        e += b * f;
        g += a * f;
        a = this.Kb();
        0 !== a && (e -= this.ka.scrollX, g -= this.ka.scrollY, b = Math.cos(a), a = Math.sin(a), c = e * b - g * a, g = g * b + e * a, e = c + this.ka.scrollX, g += this.ka.scrollY);
        return d ? e : g
    };
    r.prototype.ua = function(b, a, d, c) {
        var e = this.Kb();
        if (0 !== e) {
            b -= this.ka.scrollX;
            a -= this.ka.scrollY;
            var g = Math.cos(-e),
                e = Math.sin(-e),
                f = b * g - a * e;
            a = a * g + b * e;
            b = f + this.ka.scrollX;
            a += this.ka.scrollY
        }
        g = this.e.Vn;
        e = this.e.Wn;
        g = (this.ka.scrollX - g) * this.Hc + g;
        e = (this.ka.scrollY - e) * this.Ic + e;
        f = 1 / this.Lb(!c);
        c ? (g -= this.e.Y * f / 2, e -= this.e.X * f / 2) : (g -= this.e.width * f / 2, e -= this.e.height * f / 2);
        g = (b - g) / f;
        e = (a - e) / f;
        b = this.e.devicePixelRatio;
        this.e.Je && !c && (g /= b, e /= b);
        return d ? g : e
    };
    r.prototype.yb = function() {
        var b, a, d, c = {
            s: this.scale,
            a: this.n,
            vl: this.Ua,
            vt: this.Va,
            vr: this.Bb,
            vb: this.Ab,
            v: this.visible,
            bc: this.Vd,
            t: this.$e,
            px: this.Hc,
            py: this.Ic,
            o: this.opacity,
            zr: this.Yc,
            fx: [],
            instances: []
        };
        b = 0;
        for (a = this.R.length; b < a; b++) d = this.R[b], c.fx.push({
            name: d.name,
            active: d.Wa,
            params: this.za[d.index]
        });
        return c
    };
    r.prototype.fc = function(b) {
        var a, f;
        this.scale = b.s;
        this.n = b.a;
        this.Ua = b.vl;
        this.Va = b.vt;
        this.Bb = b.vr;
        this.Ab = b.vb;
        this.visible = b.v;
        this.Vd = b.bc;
        this.$e = b.t;
        this.Hc = b.px;
        this.Ic = b.py;
        this.opacity = b.o;
        this.Yc = b.zr;
        var c = b.fx;
        b = 0;
        for (a = c.length; b < a; b++)
            if (f = this.ck(c[b].name)) f.Wa = c[b].active, this.za[f.index] = c[b].params;
        this.Nd();
        this.j.sort(d);
        this.kc = !0
    };
    Ab = r
})();
(function() {
    function f(a, b) {
        var c, g = a.length;
        switch (g) {
            case 0:
                return !0;
            case 1:
                return a[0] === b[0];
            case 2:
                return a[0] === b[0] && a[1] === b[1];
            default:
                for (c = 0; c < g; c++)
                    if (a[c] !== b[c]) return !1;
                return !0
        }
    }

    function r(a, b) {
        return a.index - b.index
    }

    function d(a) {
        var b, c, g, e;
        2 === a.length ? a[0].index > a[1].index && (b = a[0], a[0] = a[1], a[1] = b) : 2 < a.length && a.sort(r);
        a.length >= x.length && (x.length = a.length + 1);
        x[a.length] || (x[a.length] = []);
        e = x[a.length];
        b = 0;
        for (c = e.length; b < c; b++)
            if (g = e[b], f(a, g)) return g;
        e.push(a);
        return a
    }

    function p(a, b) {
        this.e = a;
        this.Bo = {};
        this.Rm = {};
        this.kk = !1;
        this.hn = new fa;
        this.Oj = [];
        this.Bj = [];
        this.name = b[0];
        var c = b[1];
        this.$d = [];
        var g, e;
        g = 0;
        for (e = c.length; g < e; g++) this.kn(c[g], null, this.$d)
    }

    function b(a) {
        this.type = a;
        this.j = [];
        this.da = [];
        this.U = !0
    }

    function a(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.e = a.e;
        this.fa = [];
        this.ne = [];
        this.gn = this.lj = this.Jl = this.ki = this.group = this.zl = !1;
        this.Pa = [];
        this.wc = [];
        this.Mc = [];
        this.xg = "";
        this.yf = this.ki = this.group = !1;
        this.Qh = null;
        c[1] && (this.xg = c[1][1].toLowerCase(), this.group = !0, this.ki = !!c[1][0], this.Qh = [], this.yf = this.ki, this.e.Sd.push(this), this.e.di[this.xg] = this);
        this.Sc = c[2];
        this.W = c[4];
        this.group || (this.e.xm[this.W.toString()] = this);
        var g = c[5];
        a = 0;
        for (b = g.length; a < b; a++) {
            var e = new Bb(this, g[a]);
            e.index = a;
            this.Pa.push(e);
            this.rm(e.type)
        }
        g = c[6];
        a = 0;
        for (b = g.length; a < b; a++) e = new Cb(this, g[a]), e.index = a, this.wc.push(e);
        if (8 === c.length)
            for (c = c[7], a = 0, b = c.length; a < b; a++) this.sheet.kn(c[a], this, this.Mc);
        this.ni = !1;
        this.Pa.length && (this.ni = null == this.Pa[0].type && this.Pa[0].kb == P.prototype.i.Oo)
    }

    function m(a, b) {
        var c, g, e;
        if (a && (-1 === b.indexOf(a) && b.push(a), a.ub))
            for (c = 0, g = a.Vb.length; c < g; c++) e = a.Vb[c], a !== e && -1 === b.indexOf(e) && b.push(e)
    }

    function c(a, b) {
        this.mc = a;
        this.sheet = a.sheet;
        this.e = a.e;
        this.S = [];
        this.ja = [];
        this.N = {};
        this.index = -1;
        this.gg = !1;
        this.kb = b[1];
        this.trigger = 0 < b[3];
        this.Qm = 2 === b[3];
        this.qk = b[5];
        this.Ar = b[6];
        this.W = b[7];
        this.e.nf[this.W.toString()] = this; - 1 === b[0] ? (this.type = null, this.Ka = this.sl, this.ve = null, this.yc = -1) : (this.type = this.e.B[b[0]], this.Ka = this.Ar ? this.hs : this.rl, b[2] ? (this.ve = this.type.bi(b[2]), this.yc = this.type.ak(b[2])) : (this.ve = null, this.yc = -1), this.mc.parent && this.mc.parent.Vi());
        this.Qm && (this.Ka = this.js);
        if (10 === b.length) {
            var c, g, e = b[9];
            c = 0;
            for (g = e.length; c < g; c++) {
                var d = new Db(this, e[c]);
                this.S.push(d)
            }
            this.ja.length = e.length
        }
    }

    function e(a, b) {
        this.mc = a;
        this.sheet = a.sheet;
        this.e = a.e;
        this.S = [];
        this.ja = [];
        this.N = {};
        this.index = -1;
        this.gg = !1;
        this.kb = b[1]; - 1 === b[0] ? (this.type = null, this.Ka = this.sl, this.ve = null, this.yc = -1) : (this.type = this.e.B[b[0]], this.Ka = this.rl, b[2] ? (this.ve = this.type.bi(b[2]), this.yc = this.type.ak(b[2])) : (this.ve = null, this.yc = -1));
        this.W = b[3];
        this.e.lf[this.W.toString()] = this;
        if (6 === b.length) {
            var c, g, e = b[5];
            c = 0;
            for (g = e.length; c < g; c++) {
                var d = new Db(this, e[c]);
                this.S.push(d)
            }
            this.ja.length = e.length
        }
    }

    function g(a, b) {
        this.u = a;
        this.mc = a.mc;
        this.sheet = a.sheet;
        this.e = a.e;
        this.type = b[0];
        this.cd = null;
        this.oe = 0;
        this.get = null;
        this.Fm = 0;
        this.ka = null;
        this.key = 0;
        this.object = null;
        this.index = 0;
        this.qh = this.Ye = this.qh = this.Ye = this.Sm = this.Ce = this.rh = null;
        this.Nc = !1;
        var c, g, e;
        switch (b[0]) {
            case 0:
            case 7:
                this.cd = new Eb(this, b[1]);
                this.oe = 0;
                this.get = this.Oq;
                break;
            case 1:
                this.cd = new Eb(this, b[1]);
                this.oe = 0;
                this.get = this.Pq;
                break;
            case 5:
                this.cd = new Eb(this, b[1]);
                this.oe = 0;
                this.get = this.Tq;
                break;
            case 3:
            case 8:
                this.Fm = b[1];
                this.get = this.Mq;
                break;
            case 6:
                this.ka = this.e.Ck[b[1]];
                this.get = this.Uq;
                break;
            case 9:
                this.key = b[1];
                this.get = this.Sq;
                break;
            case 4:
                this.object = this.e.B[b[1]];
                this.get = this.Vq;
                this.mc.rm(this.object);
                this.u instanceof
                Cb ? this.mc.Vi() : this.mc.parent && this.mc.parent.Vi();
                break;
            case 10:
                this.index = b[1];
                a.type.O ? (this.get = this.Qq, this.Nc = !0) : this.get = this.Rq;
                break;
            case 11:
                this.rh = b[1];
                this.Ce = null;
                this.get = this.Nq;
                break;
            case 2:
            case 12:
                this.Sm = b[1];
                this.get = this.Lq;
                break;
            case 13:
                for (this.get = this.Wq, this.Ye = [], this.qh = [], c = 1, g = b.length; c < g; c++) e = new Db(this.u, b[c]), this.Ye.push(e), this.qh.push(0)
        }
    }

    function q(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.e = a.e;
        this.fa = [];
        this.name = c[1];
        this.sh = c[2];
        this.ji = c[3];
        this.Eg = !!c[4];
        this.mi = !!c[5];
        this.W = c[6];
        this.e.dg[this.W.toString()] = this;
        this.data = this.ji;
        this.parent ? (this.Pe = this.Eg || this.mi ? -1 : this.e.ss++, this.e.sp.push(this)) : (this.Pe = -1, this.e.yj.push(this))
    }

    function n(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.e = a.e;
        this.fa = [];
        this.yg = null;
        this.dr = c[1];
        this.Wa = !0
    }

    function u() {
        this.vo = [];
        this.reset(null)
    }
    var x = [];
    p.prototype.toString = aa("name");
    p.prototype.kn = function(a, b, c) {
        switch (a[0]) {
            case 0:
                a = new Fb(this, b, a);
                if (a.Sc)
                    for (c.push(a), c = 0, b = a.Pa.length; c < b; c++) a.Pa[c].trigger && this.ln(a, c);
                else a.tn() ? this.ln(a, 0) : c.push(a);
                break;
            case 1:
                a = new xb(this, b, a);
                c.push(a);
                break;
            case 2:
                a = new Gb(this, b, a), c.push(a)
        }
    };
    p.prototype.Ea = function() {
        var a, b;
        a = 0;
        for (b = this.$d.length; a < b; a++) this.$d[a].Ea(a < b - 1 && this.$d[a + 1].ni)
    };
    p.prototype.Ol = function() {
        this.Oj.length = 0;
        this.Bj.length = 0;
        this.pm(this);
        this.Bj.length = 0
    };
    p.prototype.pm = function(a) {
        var b, c, g, e, d = a.Oj,
            n = a.Bj,
            f = this.hn.qd();
        b = 0;
        for (c = f.length; b < c; ++b) g = f[b], e = g.yg, !g.Wa || a === e || -1 < n.indexOf(e) || (n.push(e), e.pm(a), d.push(e))
    };
    p.prototype.Ka = function(a) {
        this.e.Ut || (this.kk = !0, a || (this.e.uk = !0));
        var b, c;
        b = 0;
        for (c = this.$d.length; b < c; b++) {
            var g = this.$d[b];
            g.Ka();
            this.e.Hj(g.fa);
            this.e.bd.Qc() && !this.e.Ib.length || this.e.nb()
        }
        a || (this.e.uk = !1)
    };
    p.prototype.ln = function(a, b) {
        a.Sc || this.e.nj.push(a);
        var c, g, e = a.Pa[b],
            d;
        d = e.type ? e.type.name : "system";
        var n = (c = e.Qm) ? this.Rm : this.Bo;
        n[d] || (n[d] = []);
        d = n[d];
        n = e.kb;
        if (c) {
            if (e.S.length && (e = e.S[0], 1 === e.type && 2 === e.cd.type)) {
                e = e.cd.value.toLowerCase();
                c = 0;
                for (g = d.length; c < g; c++)
                    if (d[c].method == n) {
                        c = d[c].ng;
                        c[e] ? c[e].push([a, b]) : c[e] = [
                            [a, b]
                        ];
                        return
                    }
                c = {};
                c[e] = [
                    [a, b]
                ];
                d.push({
                    method: n,
                    ng: c
                })
            }
        } else {
            c = 0;
            for (g = d.length; c < g; c++)
                if (d[c].method == n) {
                    d[c].ng.push([a, b]);
                    return
                }
            Q && n === Q.prototype.i.hf ? d.unshift({
                method: n,
                ng: [
                    [a, b]
                ]
            }) : d.push({
                method: n,
                ng: [
                    [a, b]
                ]
            })
        }
    };
    ob = p;
    b.prototype.jk = function() {
        return this.U ? this.type.j.length : this.j.length
    };
    b.prototype.Zb = function() {
        return this.U ? this.type.j : this.j
    };
    b.prototype.ah = function(a) {
        a && (a.e.Ya().Xa.Sc ? (this.U && (this.j.length = 0, va(this.da, a.type.j), this.U = !1), a = this.da.indexOf(a), -1 !== a && (this.j.push(this.da[a]), this.da.splice(a, 1))) : (this.U = !1, this.j.length = 1, this.j[0] = a))
    };
    Ya = b;
    window._c2hh_ = "6F0A399146B1A96ABA8B733C958F2CC01C8BC0B4";
    a.prototype.Ea = function(a) {
        var b, c = this.parent;
        if (this.group)
            for (this.lj = !0; c;) {
                if (!c.group) {
                    this.lj = !1;
                    break
                }
                c = c.parent
            }
        this.Jl = !this.tn() && (!this.parent || this.parent.group && this.parent.lj);
        this.gn = !!a;
        this.ne = this.fa.slice(0);
        for (c = this.parent; c;) {
            a = 0;
            for (b = c.fa.length; a < b; a++) this.pp(c.fa[a]);
            c = c.parent
        }
        this.fa = d(this.fa);
        this.ne = d(this.ne);
        a = 0;
        for (b = this.Pa.length; a < b; a++) this.Pa[a].Ea();
        a = 0;
        for (b = this.wc.length; a < b; a++) this.wc[a].Ea();
        a = 0;
        for (b = this.Mc.length; a < b; a++) this.Mc[a].Ea(a < b - 1 && this.Mc[a + 1].ni)
    };
    a.prototype.os = function(a) {
        if (this.yf !== !!a) {
            this.yf = !!a;
            var b;
            a = 0;
            for (b = this.Qh.length; a < b; ++a) this.Qh[a].Ho();
            0 < b && this.e.V.Be && this.e.V.Be.Ol()
        }
    };
    a.prototype.rm = function(a) {
        m(a, this.fa)
    };
    a.prototype.pp = function(a) {
        m(a, this.ne)
    };
    a.prototype.Vi = function() {
        this.zl = !0;
        this.parent && this.parent.Vi()
    };
    a.prototype.tn = function() {
        return this.Pa.length ? this.Pa[0].trigger : !1
    };
    a.prototype.Ka = function() {
        var a, b = !1,
            c, g = this.e,
            e = this.e.Ya();
        e.Xa = this;
        var d = this.Pa;
        this.ni || (e.Rj = !1);
        if (this.Sc) {
            0 === d.length && (b = !0);
            e.Ha = 0;
            for (a = d.length; e.Ha < a; e.Ha++) d[e.Ha].trigger || (c = d[e.Ha].Ka()) && (b = !0);
            (e.Me = b) && this.Ti()
        } else {
            e.Ha = 0;
            for (a = d.length; e.Ha < a; e.Ha++)
                if (c = d[e.Ha].Ka(), !c) {
                    e.Me = !1;
                    !this.Jl || g.bd.Qc() && !g.Ib.length || g.nb();
                    return
                }
            e.Me = !0;
            this.Ti()
        }
        this.Wp(e)
    };
    a.prototype.Wp = function(a) {
        a.Me && this.gn && (a.Rj = !0);
        !this.Jl || this.e.bd.Qc() && !this.e.Ib.length || this.e.nb()
    };
    a.prototype.es = function(a) {
        this.e.Ya().Xa = this;
        this.Pa[a].Ka() && (this.Ti(), this.e.Ya().Me = !0)
    };
    a.prototype.Ti = function() {
        var a = this.e.Ya(),
            b;
        a.Cb = 0;
        for (b = this.wc.length; a.Cb < b; a.Cb++)
            if (this.wc[a.Cb].Ka()) return;
        this.ko()
    };
    a.prototype.cs = function() {
        var a = this.e.Ya(),
            b;
        for (b = this.wc.length; a.Cb < b; a.Cb++)
            if (this.wc[a.Cb].Ka()) return;
        this.ko()
    };
    a.prototype.ko = function() {
        if (this.Mc.length) {
            var a, b, c, g, e = this.Mc.length - 1;
            this.e.Pi(this);
            if (this.zl)
                for (a = 0, b = this.Mc.length; a < b; a++) c = this.Mc[a], (g = !this.lj || !this.group && a < e) && this.e.fh(c.fa), c.Ka(), g ? this.e.ie(c.fa) : this.e.Hj(c.fa);
            else
                for (a = 0, b = this.Mc.length; a < b; a++) this.Mc[a].Ka();
            this.e.Mi()
        }
    };
    a.prototype.gs = function() {
        var a = this.e.Ya();
        a.Xa = this;
        var b = !1,
            c;
        a.Ha = 0;
        for (c = this.Pa.length; a.Ha < c; a.Ha++)
            if (this.Pa[a.Ha].Ka()) b = !0;
            else if (!this.Sc) return !1;
        return this.Sc ? b : !0
    };
    a.prototype.ml = function() {
        this.e.sf++;
        var a = this.e.Ya().Ha,
            b = this.e.Pi(this);
        if (!this.Sc)
            for (b.Ha = a + 1, a = this.Pa.length; b.Ha < a; b.Ha++)
                if (!this.Pa[b.Ha].Ka()) {
                    this.e.Mi();
                    return
                }
        this.Ti();
        this.e.Mi()
    };
    a.prototype.or = function(a) {
        var b = a.index;
        if (0 === b) return !0;
        for (--b; 0 <= b; --b)
            if (this.Pa[b].type === a.type) return !1;
        return !0
    };
    Fb = a;
    c.prototype.Ea = function() {
        var a, b, c;
        a = 0;
        for (b = this.S.length; a < b; a++) c = this.S[a], c.Ea(), c.Nc && (this.gg = !0)
    };
    c.prototype.js = t(!0);
    c.prototype.sl = function() {
        var a, b;
        a = 0;
        for (b = this.S.length; a < b; a++) this.ja[a] = this.S[a].get();
        return Ka(this.kb.apply(this.e.nd, this.ja), this.qk)
    };
    c.prototype.hs = function() {
        var a, b;
        a = 0;
        for (b = this.S.length; a < b; a++) this.ja[a] = this.S[a].get();
        a = this.kb.apply(this.ve ? this.ve : this.type, this.ja);
        this.type.xc();
        return a
    };
    c.prototype.rl = function() {
        var a, b, c, g, e, d, n, f, q = this.type,
            p = q.T(),
            m = this.mc.Sc && !this.trigger;
        b = 0;
        var u = q.ub,
            r = q.O,
            s = q.Cd,
            x = this.yc,
            z = -1 < x,
            V = this.gg,
            D = this.S,
            N = this.ja,
            ba = this.qk,
            da = this.kb,
            W;
        if (V)
            for (b = 0, e = D.length; b < e; ++b) d = D[b], d.Nc || (N[b] = d.get(0));
        else
            for (b = 0, e = D.length; b < e; ++b) N[b] = D[b].get(0);
        if (p.U) {
            p.j.length = 0;
            p.da.length = 0;
            W = q.j;
            a = 0;
            for (g = W.length; a < g; ++a) {
                f = W[a];
                if (V)
                    for (b = 0, e = D.length; b < e; ++b) d = D[b], d.Nc && (N[b] = d.get(a));
                z ? (b = 0, r && (b = f.type.uf[s]), b = da.apply(f.Q[x + b], N)) : b = da.apply(f, N);
                (n = Ka(b, ba)) ? p.j.push(f): m && p.da.push(f)
            }
            q.finish && q.finish(!0);
            p.U = !1;
            q.xc();
            return p.jk()
        }
        c = 0;
        W = (n = m && !this.mc.or(this)) ? p.da : p.j;
        var Ea = !1;
        a = 0;
        for (g = W.length; a < g; ++a) {
            f = W[a];
            if (V)
                for (b = 0, e = D.length; b < e; ++b) d = D[b], d.Nc && (N[b] = d.get(a));
            z ? (b = 0, r && (b = f.type.uf[s]), b = da.apply(f.Q[x + b], N)) : b = da.apply(f, N);
            if (Ka(b, ba))
                if (Ea = !0, n) {
                    if (p.j.push(f), u)
                        for (b = 0, e = f.siblings.length; b < e; b++) d = f.siblings[b], d.type.T().j.push(d)
                } else {
                    W[c] = f;
                    if (u)
                        for (b = 0, e = f.siblings.length; b < e; b++) d = f.siblings[b], d.type.T().j[c] = d;
                    c++
                }
            else if (n) {
                W[c] = f;
                if (u)
                    for (b = 0, e = f.siblings.length; b < e; b++) d = f.siblings[b], d.type.T().da[c] = d;
                c++
            } else if (m && (p.da.push(f), u))
                for (b = 0, e = f.siblings.length; b < e; b++) d = f.siblings[b], d.type.T().da.push(d)
        }
        W.length = c;
        if (u)
            for (r = q.Vb, a = 0, g = r.length; a < g; a++) f = r[a].T(), n ? f.da.length = c : f.j.length = c;
        c = Ea;
        if (n && !Ea)
            for (a = 0, g = p.j.length; a < g; a++) {
                f = p.j[a];
                if (V)
                    for (b = 0, e = D.length; b < e; b++) d = D[b], d.Nc && (N[b] = d.get(a));
                b = z ? da.apply(f.Q[x], N) : da.apply(f, N);
                if (Ka(b, ba)) {
                    Ea = !0;
                    break
                }
            }
        q.finish && q.finish(c || m);
        return m ? Ea : p.jk()
    };
    Bb = c;
    e.prototype.Ea = function() {
        var a, b, c;
        a = 0;
        for (b = this.S.length; a < b; a++) c = this.S[a], c.Ea(), c.Nc && (this.gg = !0)
    };
    e.prototype.sl = function() {
        var a, b;
        a = 0;
        for (b = this.S.length; a < b; a++) this.ja[a] = this.S[a].get();
        return this.kb.apply(this.e.nd, this.ja)
    };
    e.prototype.rl = function() {
        var a = this.type.T().Zb(),
            b = this.type.O,
            c = this.type.Cd,
            g = this.yc,
            e = -1 < g,
            d = this.gg,
            n = this.S,
            f = this.ja,
            q = this.kb,
            p, m, u, r, s, x;
        if (d)
            for (m = 0, r = n.length; m < r; ++m) s = n[m], s.Nc || (f[m] = s.get(0));
        else
            for (m = 0, r = n.length; m < r; ++m) f[m] = n[m].get(0);
        p = 0;
        for (u = a.length; p < u; ++p) {
            x = a[p];
            if (d)
                for (m = 0, r = n.length; m < r; ++m) s = n[m], s.Nc && (f[m] = s.get(p));
            e ? (m = 0, b && (m = x.type.uf[c]), q.apply(x.Q[g + m], f)) : q.apply(x, f)
        }
        return !1
    };
    Cb = e;
    var z = [],
        s = -1;
    g.prototype.Ea = function() {
        var a, b;
        if (11 === this.type) this.Ce = this.e.Ym(this.rh, this.mc.parent);
        else if (13 === this.type)
            for (a = 0, b = this.Ye.length; a < b; a++) this.Ye[a].Ea();
        this.cd && this.cd.Ea()
    };
    g.prototype.Gr = function(a) {
        this.Nc || !a || a.wa.Wi || (this.Nc = !0)
    };
    g.prototype.no = function() {
        this.Nc = !0
    };
    g.prototype.Sa = function() {
        s++;
        z.length === s && z.push(new Hb);
        return z[s]
    };
    g.prototype.Ja = function() {
        s--
    };
    g.prototype.Oq = function(a) {
        this.oe = a || 0;
        a = this.Sa();
        this.cd.get(a);
        this.Ja();
        return a.data
    };
    g.prototype.Pq = function(a) {
        this.oe = a || 0;
        a = this.Sa();
        this.cd.get(a);
        this.Ja();
        return B(a.data) ? a.data : ""
    };
    g.prototype.Vq = aa("object");
    g.prototype.Mq = aa("Fm");
    g.prototype.Tq = function(a) {
        this.oe = a || 0;
        a = this.Sa();
        this.cd.get(a);
        this.Ja();
        return a.Za() ? this.e.tg(a.data) : this.e.ek(a.data)
    };
    g.prototype.Uq = aa("ka");
    g.prototype.Sq = aa("key");
    g.prototype.Rq = aa("index");
    g.prototype.Qq = function(a) {
        a = a || 0;
        var b = this.u.type,
            c = null,
            c = b.T(),
            g = c.Zb();
        if (g.length) c = g[a % g.length].type;
        else if (c.da.length) c = c.da[a % c.da.length].type;
        else if (b.j.length) c = b.j[a % b.j.length].type;
        else return 0;
        return this.index + c.Xh[b.Cd]
    };
    g.prototype.Nq = aa("Ce");
    g.prototype.Lq = aa("Sm");
    g.prototype.Wq = function() {
        var a, b;
        a = 0;
        for (b = this.Ye.length; a < b; a++) this.qh[a] = this.Ye[a].get();
        return this.qh
    };
    Db = g;
    q.prototype.Ea = function() {
        this.fa = d(this.fa)
    };
    q.prototype.Ld = function(a) {
        var b = this.e.Xm();
        this.parent && !this.Eg && b ? (this.Pe >= b.length && (b.length = this.Pe + 1), b[this.Pe] = a) : this.data = a
    };
    q.prototype.Ee = function() {
        var a = this.e.Xm();
        return !this.parent || this.Eg || !a || this.mi ? this.data : this.Pe >= a.length || "undefined" === typeof a[this.Pe] ? this.ji : a[this.Pe]
    };
    q.prototype.Ka = function() {
        !this.parent || this.Eg || this.mi || this.Ld(this.ji)
    };
    xb = q;
    n.prototype.toString = function() {
        return "include:" + this.yg.toString()
    };
    n.prototype.Ea = function() {
        this.yg = this.e.Tj[this.dr];
        this.sheet.hn.add(this);
        this.fa = d(this.fa);
        for (var a = this.parent; a;) a.group && a.Qh.push(this), a = a.parent;
        this.Ho()
    };
    n.prototype.Ka = function() {
        this.parent && this.e.eh(this.e.B);
        this.yg.kk || this.yg.Ka(!0);
        this.parent && this.e.ie(this.e.B)
    };
    n.prototype.Ho = function() {
        for (var a = this.parent; a;) {
            if (a.group && !a.yf) {
                this.Wa = !1;
                return
            }
            a = a.parent
        }
        this.Wa = !0
    };
    Gb = n;
    u.prototype.reset = function(a) {
        this.Xa = a;
        this.Cb = this.Ha = 0;
        this.vo.length = 0;
        this.Rj = this.Me = !1
    };
    u.prototype.pr = function() {
        return this.Xa.zl ? !0 : this.Ha < this.Xa.Pa.length - 1 ? !!this.Xa.fa.length : !1
    };
    wb = u
})();
(function() {
    function f(d, f) {
        this.u = d;
        this.e = d.e;
        this.type = f[0];
        this.get = [this.iq, this.dq, this.qq, this.tq, this.Yp, this.rq, this.mq, this.aq, this.lq, this.pq, this.Zp, this.oq, this.bq, this.nq, this.jq, this.kq, this.fq, this.gq, this.$p, this.sq, this.Om, this.hq, this.Om, this.cq][this.type];
        var b = null;
        this.Ob = this.S = this.ja = this.kb = this.hj = this.bb = this.first = this.value = null;
        this.yc = -1;
        this.Ed = null;
        this.Rl = -1;
        this.Ce = this.rh = null;
        this.hh = !1;
        switch (this.type) {
            case 0:
            case 1:
            case 2:
                this.value = f[1];
                break;
            case 3:
                this.first = new Eb(d, f[1]);
                break;
            case 18:
                this.first = new Eb(d, f[1]);
                this.bb = new Eb(d, f[2]);
                this.hj = new Eb(d, f[3]);
                break;
            case 19:
                this.kb = f[1];
                this.kb !== P.prototype.k.random && this.kb !== P.prototype.k.Cp || this.u.no();
                this.ja = [];
                this.S = [];
                3 === f.length ? (b = f[2], this.ja.length = b.length + 1) : this.ja.length = 1;
                break;
            case 20:
                this.Ob = this.e.B[f[1]];
                this.yc = -1;
                this.kb = f[2];
                this.hh = f[3];
                Jb.Po && this.kb === Jb.Po.prototype.k.Ns && this.u.no();
                this.Ed = f[4] ? new Eb(d, f[4]) : null;
                this.ja = [];
                this.S = [];
                6 === f.length ? (b = f[5], this.ja.length = b.length + 1) : this.ja.length = 1;
                break;
            case 21:
                this.Ob = this.e.B[f[1]];
                this.hh = f[2];
                this.Ed = f[3] ? new Eb(d, f[3]) : null;
                this.Rl = f[4];
                break;
            case 22:
                this.Ob = this.e.B[f[1]];
                this.Ob.bi(f[2]);
                this.yc = this.Ob.ak(f[2]);
                this.kb = f[3];
                this.hh = f[4];
                this.Ed = f[5] ? new Eb(d, f[5]) : null;
                this.ja = [];
                this.S = [];
                7 === f.length ? (b = f[6], this.ja.length = b.length + 1) : this.ja.length = 1;
                break;
            case 23:
                this.rh = f[1], this.Ce = null
        }
        this.u.Gr(this.Ob);
        4 <= this.type && 17 >= this.type && (this.first = new Eb(d, f[1]), this.bb = new Eb(d, f[2]));
        if (b) {
            var a, m;
            a = 0;
            for (m = b.length; a < m; a++) this.S.push(new Eb(d, b[a]))
        }
    }

    function r(d, f) {
        this.type = d || O.ff;
        this.data = f || 0;
        this.Lf = null;
        this.type == O.ff && (this.data = Math.floor(this.data))
    }
    f.prototype.Ea = function() {
        23 === this.type && (this.Ce = this.u.e.Ym(this.rh, this.u.mc.parent));
        this.first && this.first.Ea();
        this.bb && this.bb.Ea();
        this.hj && this.hj.Ea();
        this.Ed && this.Ed.Ea();
        if (this.S) {
            var d, f;
            d = 0;
            for (f = this.S.length; d < f; d++) this.S[d].Ea()
        }
    };
    f.prototype.sq = function(d) {
        this.ja[0] = d;
        d = this.u.Sa();
        var f, b;
        f = 0;
        for (b = this.S.length; f < b; f++) this.S[f].get(d), this.ja[f + 1] = d.data;
        this.u.Ja();
        this.kb.apply(this.e.nd, this.ja)
    };
    f.prototype.Om = function(d) {
        var f = this.Ob.T(),
            b = f.Zb();
        if (!b.length)
            if (f.da.length) b = f.da;
            else {
                this.hh ? d.Kc("") : d.na(0);
                return
            }
        this.ja[0] = d;
        d.Lf = this.Ob;
        d = this.u.Sa();
        var a, f = 0;
        for (a = this.S.length; f < a; f++) this.S[f].get(d), this.ja[f + 1] = d.data;
        f = this.u.oe;
        this.Ed && (this.Ed.get(d), d.Za() && (f = d.data, b = this.Ob.j));
        this.u.Ja();
        f %= b.length;
        0 > f && (f += b.length);
        b = b[f]; - 1 < this.yc ? (d = 0, this.Ob.O && (d = b.type.uf[this.Ob.Cd]), this.kb.apply(b.Q[this.yc + d], this.ja)) : this.kb.apply(b, this.ja)
    };
    f.prototype.hq = function(d) {
        var f = this.Ob.T(),
            b = f.Zb();
        if (!b.length)
            if (f.da.length) b = f.da;
            else {
                this.hh ? d.Kc("") : d.na(0);
                return
            }
        f = this.u.oe;
        if (this.Ed) {
            var a = this.u.Sa();
            this.Ed.get(a);
            if (a.Za()) {
                f = a.data;
                b = this.Ob.j;
                f %= b.length;
                0 > f && (f += b.length);
                b = b[f].Qa[this.Rl];
                B(b) ? d.Kc(b) : d.K(b);
                this.u.Ja();
                return
            }
            this.u.Ja()
        }
        f %= b.length;
        0 > f && (f += b.length);
        b = b[f];
        f = 0;
        this.Ob.O && (f = b.type.Xh[this.Ob.Cd]);
        b = b.Qa[this.Rl + f];
        B(b) ? d.Kc(b) : d.K(b)
    };
    f.prototype.iq = function(d) {
        d.type = O.ff;
        d.data = this.value
    };
    f.prototype.dq = function(d) {
        d.type = O.ef;
        d.data = this.value
    };
    f.prototype.qq = function(d) {
        d.type = O.yh;
        d.data = this.value
    };
    f.prototype.tq = function(d) {
        this.first.get(d);
        d.Za() && (d.data = -d.data)
    };
    f.prototype.Yp = function(d) {
        this.first.get(d);
        var f = this.u.Sa();
        this.bb.get(f);
        d.Za() && f.Za() && (d.data += f.data, f.Cf() && d.Jf());
        this.u.Ja()
    };
    f.prototype.rq = function(d) {
        this.first.get(d);
        var f = this.u.Sa();
        this.bb.get(f);
        d.Za() && f.Za() && (d.data -= f.data, f.Cf() && d.Jf());
        this.u.Ja()
    };
    f.prototype.mq = function(d) {
        this.first.get(d);
        var f = this.u.Sa();
        this.bb.get(f);
        d.Za() && f.Za() && (d.data *= f.data, f.Cf() && d.Jf());
        this.u.Ja()
    };
    f.prototype.aq = function(d) {
        this.first.get(d);
        var f = this.u.Sa();
        this.bb.get(f);
        d.Za() && f.Za() && (d.data /= f.data, d.Jf());
        this.u.Ja()
    };
    f.prototype.lq = function(d) {
        this.first.get(d);
        var f = this.u.Sa();
        this.bb.get(f);
        d.Za() && f.Za() && (d.data %= f.data, f.Cf() && d.Jf());
        this.u.Ja()
    };
    f.prototype.pq = function(d) {
        this.first.get(d);
        var f = this.u.Sa();
        this.bb.get(f);
        d.Za() && f.Za() && (d.data = Math.pow(d.data, f.data), f.Cf() && d.Jf());
        this.u.Ja()
    };
    f.prototype.Zp = function(d) {
        this.first.get(d);
        var f = this.u.Sa();
        this.bb.get(f);
        d.Za() ? f.oi() ? d.Kc(d.data.toString() + f.data) : d.data && f.data ? d.na(1) : d.na(0) : d.oi() && (d.data = f.oi() ? d.data + f.data : d.data + (Math.round(1E10 * f.data) / 1E10).toString());
        this.u.Ja()
    };
    f.prototype.oq = function(d) {
        this.first.get(d);
        var f = this.u.Sa();
        this.bb.get(f);
        d.Za() && f.Za() && (d.data || f.data ? d.na(1) : d.na(0));
        this.u.Ja()
    };
    f.prototype.$p = function(d) {
        this.first.get(d);
        d.data ? this.bb.get(d) : this.hj.get(d)
    };
    f.prototype.bq = function(d) {
        this.first.get(d);
        var f = this.u.Sa();
        this.bb.get(f);
        d.na(d.data === f.data ? 1 : 0);
        this.u.Ja()
    };
    f.prototype.nq = function(d) {
        this.first.get(d);
        var f = this.u.Sa();
        this.bb.get(f);
        d.na(d.data !== f.data ? 1 : 0);
        this.u.Ja()
    };
    f.prototype.jq = function(d) {
        this.first.get(d);
        var f = this.u.Sa();
        this.bb.get(f);
        d.na(d.data < f.data ? 1 : 0);
        this.u.Ja()
    };
    f.prototype.kq = function(d) {
        this.first.get(d);
        var f = this.u.Sa();
        this.bb.get(f);
        d.na(d.data <= f.data ? 1 : 0);
        this.u.Ja()
    };
    f.prototype.fq = function(d) {
        this.first.get(d);
        var f = this.u.Sa();
        this.bb.get(f);
        d.na(d.data > f.data ? 1 : 0);
        this.u.Ja()
    };
    f.prototype.gq = function(d) {
        this.first.get(d);
        var f = this.u.Sa();
        this.bb.get(f);
        d.na(d.data >= f.data ? 1 : 0);
        this.u.Ja()
    };
    f.prototype.cq = function(d) {
        var f = this.Ce.Ee();
        w(f) ? d.K(f) : d.Kc(f)
    };
    Eb = f;
    r.prototype.Cf = function() {
        return this.type === O.ef
    };
    r.prototype.Za = function() {
        return this.type === O.ff || this.type === O.ef
    };
    r.prototype.oi = function() {
        return this.type === O.yh
    };
    r.prototype.Jf = function() {
        this.Cf() || (this.oi() && (this.data = parseFloat(this.data)), this.type = O.ef)
    };
    r.prototype.na = function(d) {
        this.type = O.ff;
        this.data = Math.floor(d)
    };
    r.prototype.K = function(d) {
        this.type = O.ef;
        this.data = d
    };
    r.prototype.Kc = function(d) {
        this.type = O.yh;
        this.data = d
    };
    r.prototype.qs = function(d) {
        w(d) ? (this.type = O.ef, this.data = d) : B(d) ? (this.type = O.yh, this.data = d.toString()) : (this.type = O.ff, this.data = 0)
    };
    Hb = r;
    O = {
        ff: 0,
        ef: 1,
        yh: 2
    }
})();

function P(f) {
    this.e = f;
    this.Sb = []
}
P.prototype.yb = function() {
    var f = {},
        r, d, p, b, a, m, c, e;
    f.waits = [];
    var g = f.waits,
        q;
    r = 0;
    for (d = this.Sb.length; r < d; r++) {
        m = this.Sb[r];
        q = {
            t: m.time,
            st: m.uo,
            s: m.yl,
            ev: m.rf.W,
            sm: [],
            sols: {}
        };
        m.rf.wc[m.Cb] && (q.act = m.rf.wc[m.Cb].W);
        p = 0;
        for (b = m.fa.length; p < b; p++) q.sm.push(m.fa[p].W);
        for (a in m.zb)
            if (m.zb.hasOwnProperty(a)) {
                c = this.e.B[parseInt(a, 10)];
                e = {
                    sa: m.zb[a].Ui,
                    insts: []
                };
                p = 0;
                for (b = m.zb[a].Fd.length; p < b; p++) e.insts.push(m.zb[a].Fd[p].uid);
                q.sols[c.W.toString()] = e
            }
        g.push(q)
    }
    return f
};
P.prototype.fc = function(f) {
    f = f.waits;
    var r, d, p, b, a, m, c, e, g, q, n;
    r = this.Sb.length = 0;
    for (d = f.length; r < d; r++)
        if (m = f[r], e = this.e.xm[m.ev.toString()]) {
            g = -1;
            p = 0;
            for (b = e.wc.length; p < b; p++)
                if (e.wc[p].W === m.act) {
                    g = p;
                    break
                }
            if (-1 !== g) {
                c = {
                    zb: {},
                    fa: [],
                    Pj: !1
                };
                c.time = m.t;
                c.uo = m.st || "";
                c.yl = !!m.s;
                c.rf = e;
                c.Cb = g;
                p = 0;
                for (b = m.sm.length; p < b; p++)(e = this.e.ug(m.sm[p])) && c.fa.push(e);
                for (a in m.sols)
                    if (m.sols.hasOwnProperty(a) && (e = this.e.ug(parseInt(a, 10)))) {
                        g = m.sols[a];
                        q = {
                            Ui: g.sa,
                            Fd: []
                        };
                        p = 0;
                        for (b = g.insts.length; p < b; p++)(n = this.e.fk(g.insts[p])) && q.Fd.push(n);
                        c.zb[e.index.toString()] = q
                    }
                this.Sb.push(c)
            }
        }
};
(function() {
    function f() {}

    function r(a, b) {
        var c = a.N.zm,
            e = b.N.zm;
        if (w(c) && w(e)) return c - e;
        c = "" + c;
        e = "" + e;
        return c < e ? -1 : c > e ? 1 : 0
    }

    function d() {}

    function p() {}
    var b = P.prototype;
    f.prototype.cp = t(!0);
    f.prototype.bp = t(!0);
    var a = [],
        m = -1;
    f.prototype.Vl = function(b, c, e) {
        c = b.T();
        m++;
        a.length === m && a.push([]);
        var d = a[m];
        va(d, c.Zb());
        var f = this.e.Ya(),
            p = f.Xa,
            s = this.e.rg(),
            k = f.pr(),
            f = this.e.as(),
            h, v, y, A, E;
        h = 0;
        for (v = d.length; h < v; h++) d[h].N.zm = s.S[1].get(h);
        d.sort(r);
        1 === e && d.reverse();
        e = b.ub;
        if (k)
            for (h = 0, v = d.length; h < v && !f.Dl; h++) {
                this.e.fh(p.fa);
                y = d[h];
                c = b.T();
                c.U = !1;
                c.j.length = 1;
                c.j[0] = y;
                if (e)
                    for (s = 0, k = y.siblings.length; s < k; s++) A = y.siblings[s], E = A.type.T(), E.U = !1, E.j.length = 1, E.j[0] = A;
                f.index = h;
                p.ml();
                this.e.ie(p.fa)
            } else
                for (c.U = !1, c.j.length = 1, h = 0, v = d.length; h < v && !f.Dl; h++) {
                    y = d[h];
                    c.j[0] = y;
                    if (e)
                        for (s = 0, k = y.siblings.length; s < k; s++) A = y.siblings[s], E = A.type.T(), E.U = !1, E.j.length = 1, E.j[0] = A;
                    f.index = h;
                    p.ml()
                }
        d.length = 0;
        this.e.Ur();
        m--;
        return !1
    };
    f.prototype.lm = function() {
        var a = this.e.rg().N;
        "undefined" === typeof a.wj && (a.wj = -1);
        var b = a.wj,
            c = this.e.Xc;
        a.wj = c;
        return this.e.Bk || b !== c - 1
    };
    f.prototype.te = function(a) {
        var b = this.e.rg(),
            c = b.N.vh || 0,
            e = this.e.Id.oa;
        "undefined" === typeof b.N.sj && (b.N.sj = a);
        var d = b.N.sj;
        if (e >= c + d) return b.N.vh = c + d, e >= b.N.vh + 0.04 && (b.N.vh = e), b.N.sj = a, !0;
        e < c - 0.1 && (b.N.vh = e);
        return !1
    };
    f.prototype.df = function(a, b, c) {
        return Ib(a.Ee(), b, c)
    };
    f.prototype.Oo = function() {
        var a = this.e.Ya();
        return a.Rj ? !1 : !a.Me
    };
    f.prototype.cm = t(!0);
    f.prototype.Uo = t(!0);
    f.prototype.uj = t(!0);
    f.prototype.dp = t(!0);
    f.prototype.tj = t(!0);
    b.i = new f;
    d.prototype.Wl = function(a) {
        this.e.Df || this.e.xe || (this.e.xe = a)
    };
    d.prototype.M = function(a, b, c, e) {
        if (b && a && (b = this.e.Kj(a, b, c, e))) {
            this.e.oc++;
            var d;
            this.e.trigger(Object.getPrototypeOf(a.wa).i.fg, b);
            if (b.ub)
                for (c = 0, e = b.siblings.length; c < e; c++) d = b.siblings[c], this.e.trigger(Object.getPrototypeOf(d.type.wa).i.fg, d);
            this.e.oc--;
            a = a.T();
            a.U = !1;
            a.j.length = 1;
            a.j[0] = b;
            if (b.ub)
                for (c = 0, e = b.siblings.length; c < e; c++) d = b.siblings[c], a = d.type.T(), a.U = !1, a.j.length = 1, a.j[0] = d
        }
    };
    d.prototype.jm = function(a) {
        this.e.V.wl(a)
    };
    d.prototype.kf = function(a, b) {
        0 === a.sh ? w(b) ? a.Ld(b) : a.Ld(parseFloat(b)) : 1 === a.sh && a.Ld(b.toString())
    };
    d.prototype.Zc = function(a, b) {
        0 === a.sh ? w(b) ? a.Ld(a.Ee() + b) : a.Ld(a.Ee() + parseFloat(b)) : 1 === a.sh && a.Ld(a.Ee() + b.toString())
    };
    d.prototype.zh = function(a, b) {
        0 === a.sh && (w(b) ? a.Ld(a.Ee() - b) : a.Ld(a.Ee() - parseFloat(b)))
    };
    d.prototype.jf = function(a) {
        0 > a && (a = 0);
        this.e.$f = a
    };
    var c = [],
        e = [];
    d.prototype.D = function(a) {
        if (!(0 > a)) {
            var b, d, f, m = this.e.Ya(),
                p;
            p = c.length ? c.pop() : {
                zb: {},
                fa: []
            };
            p.Pj = !1;
            p.time = this.e.Id.oa +
                a;
            p.uo = "";
            p.yl = !1;
            p.rf = m.Xa;
            p.Cb = m.Cb + 1;
            a = 0;
            for (b = this.e.B.length; a < b; a++) f = this.e.B[a], d = f.T(), d.U && -1 === m.Xa.fa.indexOf(f) || (p.fa.push(f), f = void 0, f = e.length ? e.pop() : {
                Fd: []
            }, f.Ui = !1, f.Ui = d.U, va(f.Fd, d.j), p.zb[a.toString()] = f);
            this.Sb.push(p);
            return !0
        }
    };
    d.prototype.im = function() {
        var a, b, c;
        a = 0;
        for (b = this.e.yj.length; a < b; a++) c = this.e.yj[a], c.data = c.ji
    };
    d.prototype.hp = function() {
        if (!this.e.Df && !this.e.xe && this.e.V) {
            this.e.xe = this.e.V;
            var a, b, c;
            a = 0;
            for (b = this.e.Sd.length; a < b; a++) c = this.e.Sd[a], c.os(c.ki)
        }
    };
    b.b = new d;
    p.prototype["int"] = function(a, b) {
        B(b) ? (a.na(parseInt(b, 10)), isNaN(a.data) && (a.data = 0)) : a.na(b)
    };
    p.prototype["float"] = function(a, b) {
        B(b) ? (a.K(parseFloat(b)), isNaN(a.data) && (a.data = 0)) : a.K(b)
    };
    p.prototype.random = function(a, b, c) {
        void 0 === c ? a.K(Math.random() * b) : a.K(Math.random() * (c - b) + b)
    };
    p.prototype.sqrt = function(a, b) {
        a.K(Math.sqrt(b))
    };
    p.prototype.round = function(a, b) {
        a.na(Math.round(b))
    };
    p.prototype.floor = function(a, b) {
        a.na(Math.floor(b))
    };
    p.prototype.ceil = function(a, b) {
        a.na(Math.ceil(b))
    };
    p.prototype.sin = function(a, b) {
        a.K(Math.sin(G(b)))
    };
    p.prototype.cos = function(a, b) {
        a.K(Math.cos(G(b)))
    };
    p.prototype.tan = function(a, b) {
        a.K(Math.tan(G(b)))
    };
    p.prototype.asin = function(a, b) {
        a.K(za(Math.asin(b)))
    };
    p.prototype.acos = function(a, b) {
        a.K(za(Math.acos(b)))
    };
    p.prototype.max = function(a) {
        var b = arguments[1];
        "number" !== typeof b && (b = 0);
        var c, e, d;
        c = 2;
        for (e = arguments.length; c < e; c++) d = arguments[c], "number" === typeof d && b < d && (b = d);
        a.K(b)
    };
    p.prototype.min = function(a) {
        var b = arguments[1];
        "number" !== typeof b && (b = 0);
        var c, e, d;
        c = 2;
        for (e = arguments.length; c < e; c++) d = arguments[c], "number" === typeof d && b > d && (b = d);
        a.K(b)
    };
    p.prototype.qf = function(a) {
        a.K(this.e.qf)
    };
    p.prototype.$f = function(a) {
        a.K(this.e.$f)
    };
    p.prototype.time = function(a) {
        a.K(this.e.Id.oa)
    };
    p.prototype.Xc = function(a) {
        a.na(this.e.Xc)
    };
    p.prototype.Di = function(a) {
        a.na(this.e.Di)
    };
    p.prototype.Xj = function(a) {
        a.na(this.e.Xj)
    };
    p.prototype.n = function(a, b, c, e, d) {
        a.K(za(Fa(b, c, e, d)))
    };
    p.prototype.ih = function(a) {
        a.K(this.e.V.scrollX)
    };
    p.prototype.ns = function(a) {
        a.K(this.e.V.scrollY)
    };
    p.prototype.left = function(a, b, c) {
        a.Kc(B(b) ? b.substr(0, c) : "")
    };
    p.prototype.right = function(a, b, c) {
        a.Kc(B(b) ? b.substr(b.length - c) : "")
    };
    p.prototype.replace = function(a, b, c, e) {
        B(b) && B(c) && B(e) ? a.Kc(b.replace(RegExp(Oa(c), "gi"), e)) : a.Kc(B(b) ? b : "")
    };
    p.prototype.Cp = function(a) {
        var b = C(Math.random() * (arguments.length - 1));
        a.qs(arguments[b + 1])
    };
    p.prototype.Jj = function(a) {
        a.K(this.e.Jj / 1E3)
    };
    p.prototype.Ai = function(a) {
        a.K(this.e.Ai)
    };
    b.k = new p;
    b.ds = function() {
        var a, b, d, f, m, p, r = this.e.Ya();
        a = 0;
        for (d = this.Sb.length; a < d; a++) {
            f = this.Sb[a];
            if (-1 === f.time) {
                if (!f.yl) continue
            } else if (f.time > this.e.Id.oa) continue;
            r.Xa = f.rf;
            r.Cb = f.Cb;
            r.Ha = 0;
            for (b in f.zb) f.zb.hasOwnProperty(b) && (m = this.e.B[parseInt(b, 10)].T(), p = f.zb[b], m.U = p.Ui, va(m.j, p.Fd), m = p, m.Fd.length = 0, e.push(m));
            f.rf.cs();
            this.e.Hj(f.fa);
            f.Pj = !0
        }
        b = a = 0;
        for (d = this.Sb.length; a < d; a++) f = this.Sb[a], this.Sb[b] = f, f.Pj ? (Ma(f.zb), f.fa.length = 0, c.push(f)) : b++;
        this.Sb.length = b
    }
})();
(function() {
    Xa = function(f) {
        var d = f[0].prototype,
            p = f[1],
            b = f[3],
            a = f[4],
            m = f[5],
            c = f[6],
            e = f[7];
        f = f[8];
        d.i || (d.i = {});
        d.b || (d.b = {});
        d.k || (d.k = {});
        var g = d.i,
            q = d.b,
            d = d.k;
        b && (g.Rs = function(a, b) {
            return Ib(this.x, a, b)
        }, g.Ss = function(a, b) {
            return Ib(this.y, a, b)
        }, g.Zs = function() {
            var a = this.m;
            this.xa();
            var b = this.Da;
            return !(b.right < a.Ua || b.bottom < a.Va || b.left > a.Bb || b.top > a.Ab)
        }, g.gf = function() {
            this.xa();
            var a = this.Da,
                b = this.e.V;
            return 0 > a.right || 0 > a.bottom || a.left > b.width || a.top > b.height
        }, g.vj = function(a, b, c) {
            var e = this.T(),
                d = e.Zb();
            if (!d.length) return !1;
            var g = d[0],
                h = g,
                f = Ja(g.x, g.y, b, c),
                m, q, p;
            m = 1;
            for (q = d.length; m < q; m++)
                if (g = d[m], p = Ja(g.x, g.y, b, c), 0 === a && p < f || 1 === a && p > f) f = p, h = g;
            e.ah(h);
            return !0
        }, q.xh = function(a) {
            this.x !== a && (this.x = a, this.ma())
        }, q.vc = function(a) {
            this.y !== a && (this.y = a, this.ma())
        }, q.zt = function(a, b) {
            if (this.x !== a || this.y !== b) this.x = a, this.y = b, this.ma()
        }, q.At = function(a, b) {
            var c = a.Hq(this);
            if (c) {
                var e;
                c.sg ? (e = c.sg(b, !0), c = c.sg(b, !1)) : (e = c.x, c = c.y);
                if (this.x !== e || this.y !== c) this.x = e, this.y = c, this.ma()
            }
        }, q.et = function(a) {
            0 !== a && (this.x += Math.cos(this.n) * a, this.y += Math.sin(this.n) * a, this.ma())
        }, q.dt = function(a, b) {
            0 !== b && (this.x += Math.cos(G(a)) * b, this.y += Math.sin(G(a)) * b, this.ma())
        }, d.lc = function(a) {
            a.K(this.x)
        }, d.ra = function(a) {
            a.K(this.y)
        }, d.qf = function(a) {
            a.K(this.e.wf(this))
        });
        a && (g.Qs = function(a, b) {
            return Ib(this.width, a, b)
        }, g.Os = function(a, b) {
            return Ib(this.height, a, b)
        }, q.ip = function(a) {
            this.width !== a && (this.width = a, this.ma())
        }, q.xt = function(a) {
            this.height !== a && (this.height = a, this.ma())
        }, q.Bt = function(a, b) {
            if (this.width !== a || this.height !== b) this.width = a, this.height = b, this.ma()
        }, d.Gt = function(a) {
            a.K(this.width)
        }, d.Us = function(a) {
            a.K(this.height)
        }, d.Ks = function(a) {
            this.xa();
            a.K(this.Da.left)
        }, d.Ms = function(a) {
            this.xa();
            a.K(this.Da.top)
        }, d.Ls = function(a) {
            this.xa();
            a.K(this.Da.right)
        }, d.Js = function(a) {
            this.xa();
            a.K(this.Da.bottom)
        });
        m && (g.Is = function(a, b) {
            return Ga(this.n, G(b)) <= G(a)
        }, g.Xs = function(a) {
            return Ia(this.n, G(a))
        }, g.Ws = function(a, b) {
            var c = Da(a),
                e = Da(b),
                d = Ba(this.n);
            return Ia(e, c) ? Ia(d, c) && !Ia(d, e) : !(!Ia(d, c) && Ia(d, e))
        }, q.tt = function(a) {
            a = G(Aa(a));
            isNaN(a) || this.n === a || (this.n = a, this.ma())
        }, q.nt = function(a) {
            0 === a || isNaN(a) || (this.n += G(a), this.n = Ba(this.n), this.ma())
        }, q.ot = function(a) {
            0 === a || isNaN(a) || (this.n -= G(a), this.n = Ba(this.n), this.ma())
        }, q.pt = function(a, b) {
            var c = Ha(this.n, G(b), G(a));
            isNaN(c) || this.n === c || (this.n = c, this.ma())
        }, q.qt = function(a, b, c) {
            a = Ha(this.n, Math.atan2(c - this.y, b - this.x), G(a));
            isNaN(a) || this.n === a || (this.n = a, this.ma())
        }, q.Ct = function(a, b) {
            var c = Math.atan2(b -
                this.y, a - this.x);
            isNaN(c) || this.n === c || (this.n = c, this.ma())
        }, d.Hs = function(a) {
            a.K(Ca(this.n))
        });
        p || (g.cf = function(a, b, c) {
            return Ib(this.Qa[a], b, c)
        }, g.Aa = function(a) {
            return this.Qa[a]
        }, g.kt = function(a, b) {
            var c = this.T(),
                e = c.Zb();
            if (!e.length) return !1;
            var d = e[0],
                g = d,
                h = d.Qa[b],
                f, m, q;
            f = 1;
            for (m = e.length; f < m; f++)
                if (d = e[f], q = d.Qa[b], 0 === a && q < h || 1 === a && q > h) h = q, g = d;
            c.ah(g);
            return !0
        }, g.fb = function(a) {
            var b, c, e, d, g;
            if (this.e.rg().qk) {
                g = this.T();
                if (g.U)
                    for (g.U = !1, g.j.length = 0, g.da.length = 0, e = this.j, b = 0, c = e.length; b < c; b++) d = e[b], d.uid === a ? g.da.push(d) : g.j.push(d);
                else {
                    e = b = 0;
                    for (c = g.j.length; b < c; b++) d = g.j[b], g.j[e] = d, d.uid === a ? g.da.push(d) : e++;
                    g.j.length = e
                }
                this.xc();
                return !!g.j.length
            }
            d = this.e.fk(a);
            if (!d) return !1;
            g = this.T();
            if (!g.U && -1 === g.j.indexOf(d)) return !1;
            if (this.O)
                for (a = d.type.ta, b = 0, c = a.length; b < c; b++) {
                    if (a[b] === this) return g.ah(d), this.xc(), !0
                } else if (d.type === this) return g.ah(d), this.xc(), !0;
            return !1
        }, g.fg = t(!0), g.Vo = t(!0), q.tc = function(a, b) {
            var c = this.Qa;
            w(c[a]) ? c[a] = w(b) ? b : parseFloat(b) : B(c[a]) && (c[a] = B(b) ? b : b.toString())
        }, q.Gs = function(a, b) {
            var c = this.Qa;
            w(c[a]) ? c[a] = w(b) ? c[a] + b : c[a] + parseFloat(b) : B(c[a]) && (c[a] = B(b) ? c[a] + b : c[a] + b.toString())
        }, q.gb = function(a, b) {
            var c = this.Qa;
            w(c[a]) && (c[a] = w(b) ? c[a] - b : c[a] - parseFloat(b))
        }, q.C = function(a, b) {
            this.Qa[a] = b ? 1 : 0
        }, q.Et = function(a) {
            this.Qa[a] = 1 - this.Qa[a]
        }, q.G = function() {
            this.e.se(this)
        }, q.Qo || (q.Qo = function(a) {
            var b, c;
            try {
                b = JSON.parse(a)
            } catch (e) {
                return
            }
            this.e.xi(this, b, !0);
            this.Qd && this.Qd();
            if (this.Q)
                for (a = 0, b = this.Q.length; a < b; ++a) c = this.Q[a], c.Qd && c.Qd()
        }), d.Ts = function(a) {
            var b = a.Lf.j.length,
                c, e, d;
            c = 0;
            for (e = this.e.Ib.length; c < e; c++) d = this.e.Ib[c], a.Lf.O ? 0 <= d.type.ta.indexOf(a.Lf) && b++ : d.type === a.Lf && b++;
            a.na(b)
        }, d.mt = function(a) {
            a.na(a.Lf.T().Zb().length)
        }, d.Ft = function(a) {
            a.na(this.uid)
        }, d.Vs = function(a) {
            a.na(this.wg())
        }, d.No || (d.No = function(a) {
            a.Kc(JSON.stringify(this.e.tl(this, !0)))
        }));
        c && (g.$s = aa("visible"), q.Dt = function(a) {
            !a !== !this.visible && (this.visible = a, this.e.ga = !0)
        }, g.Ps = function(a, b) {
            return Ib(Ta(100 * this.opacity), a, b)
        }, q.yt = function(a) {
            a /= 100;
            0 > a ? a = 0 : 1 < a && (a = 1);
            a !== this.opacity && (this.opacity = a, this.e.ga = !0)
        }, d.Opacity = function(a) {
            a.K(Ta(100 * this.opacity))
        });
        e && (g.Ys = function(a) {
            return a ? this.m === a : !1
        }, g.lt = function(a) {
            var b = this.T(),
                c = b.Zb();
            if (!c.length) return !1;
            var e = c[0],
                d = e,
                g, h;
            g = 1;
            for (h = c.length; g < h; g++)
                if (e = c[g], 0 === a) {
                    if (e.m.index > d.m.index || e.m.index === d.m.index && e.Mb() > d.Mb()) d = e
                } else if (e.m.index < d.m.index || e.m.index === d.m.index && e.Mb() < d.Mb()) d = e;
            b.ah(d);
            return !0
        }, q.Yl = function() {
            var a = this.Mb();
            a !== this.m.j.length - 1 && (ua(this.m.j, a), this.m.j.push(this), this.e.ga = !0, this.m.kc = !0)
        }, q.gt = function() {
            var a = this.Mb();
            0 !== a && (ua(this.m.j, a), this.m.j.unshift(this), this.e.ga = !0, this.m.kc = !0)
        }, q.ht = function(a) {
            a && a != this.m && (ua(this.m.j, this.Mb()), this.m.kc = !0, this.m = a, this.bf = a.j.length, a.j.push(this), this.e.ga = !0)
        }, q.It = function(a, b) {
            var c = 0 === a;
            if (b) {
                var e = b.Cq(this);
                if (e && e.uid !== this.uid) {
                    this.m.index !== e.m.index && (ua(this.m.j, this.Mb()), this.m.kc = !0, this.m = e.m, this.bf = e.m.j.length, e.m.j.push(this));
                    var d = this.Mb(),
                        e = e.Mb();
                    ua(this.m.j, d);
                    d < e && e--;
                    c && e++;
                    e === this.m.j.length ? this.m.j.push(this) : this.m.j.splice(e, 0, this);
                    this.m.kc = !0;
                    this.e.ga = !0
                }
            }
        }, d.ct = function(a) {
            a.na(this.m.Qn)
        }, d.bt = function(a) {
            a.Kc(this.m.name)
        }, d.Ht = function(a) {
            a.na(this.Mb())
        });
        f && (q.ut = function(a, b) {
            if (this.e.H) {
                var c = this.type.dk(b);
                if (!(0 > c)) {
                    var e = 1 === a;
                    this.Pd[c] !== e && (this.Pd[c] = e, this.Nd(), this.e.ga = !0)
                }
            }
        }, q.wt = function(a, b, c) {
            if (this.e.H) {
                var e = this.type.dk(a);
                0 > e || (a = this.type.R[e], e = this.za[e], b = Math.floor(b), 0 > b || b >= e.length || (1 === this.e.H.Kq(a.mb, b) && (c /= 100), e[b] !== c && (e[b] = c, a.Wa && (this.e.ga = !0))))
            }
        })
    };
    pb = function() {
        this.Gj = this.Ih = !0;
        this.type.Ch = !0;
        this.e.ga = !0;
        var f, d, p = this.Ej;
        f = 0;
        for (d = p.length; f < d; ++f) p[f](this)
    };
    qb = function(f) {
        f && this.Ej.push(f)
    };
    sb = function() {
        if (this.Ih) {
            var f = this.Da,
                d = this.sb;
            f.set(this.x, this.y, this.x + this.width, this.y + this.height);
            f.offset(-this.ac * this.width, -this.cc * this.height);
            this.n ? (f.offset(-this.x, -this.y), d.po(f, this.n), d.offset(this.x, this.y), d.ym(f)) : d.Uf(f);
            f.normalize();
            this.Ih = !1
        }
    };
    var f = new ra(0, 0, 0, 0);
    tb = function() {
        if (this.Gj && this.ye) {
            this.xa();
            var r = this.type.Ph,
                d = this.Oh,
                p = this.Da;
            f.set(r.Ah(p.left), r.Bh(p.top), r.Ah(p.right), r.Bh(p.bottom));
            d.Xp(f) || (d.right < d.left ? r.update(this, null, f) : r.update(this, d, f), d.copy(f), this.Gj = !1)
        }
    };
    rb = function(f, d) {
        return this.Da.tb(f, d) && this.sb.tb(f, d) ? this.ca && !this.ca.Bf() ? (this.ca.mf(this.width, this.height, this.n), this.ca.tb(f - this.x, d - this.y)) : !0 : !1
    };
    lb = function() {
        this.type.oj();
        return this.Ge
    };
    ub = function() {
        this.m.As();
        return this.bf
    };
    vb = function() {
        this.$.length = 0;
        var f, d;
        f = 0;
        for (d = this.Pd.length; f < d; f++) this.Pd[f] && this.$.push(this.type.R[f]);
        this.Ko = !!this.$.length
    };
    mb = function() {
        return "Inst" + this.eo
    };
    $a = function(f) {
        if (f && f.ub && f.type != this) {
            var d, p, b;
            d = 0;
            for (p = f.siblings.length; d < p; d++)
                if (b = f.siblings[d], b.type == this) return b
        }
        f = this.T().Zb();
        return f.length ? f[0] : null
    };
    ab = function(f) {
        var d = this.T().Zb();
        return d.length ? d[f.wg() % d.length] : null
    };
    Za = function() {
        if (this.Xf && !this.O) {
            var f, d;
            f = 0;
            for (d = this.j.length; f < d; f++) this.j[f].Ge = f;
            var p = f,
                b = this.e.Ib;
            f = 0;
            for (d = b.length; f < d; ++f) b[f].type === this && (b[f].Ge = p++);
            this.Xf = !1
        }
    };
    jb = function(f) {
        if (f < this.j.length) return this.j[f];
        f -= this.j.length;
        var d = this.e.Ib,
            p, b;
        p = 0;
        for (b = d.length; p < b; ++p)
            if (d[p].type === this) {
                if (0 === f) return d[p];
                --f
            }
        return null
    };
    bb = function() {
        return this.pe[this.zd]
    };
    cb = function() {
        this.zd++;
        this.zd === this.pe.length ? this.pe.push(new Ya(this)) : this.pe[this.zd].U = !0
    };
    db = function() {
        this.zd++;
        this.zd === this.pe.length && this.pe.push(new Ya(this));
        var f = this.pe[this.zd],
            d = this.pe[this.zd - 1];
        d.U ? f.U = !0 : (f.U = !1, va(f.j, d.j), va(f.da, d.da))
    };
    eb = function() {
        this.zd--
    };
    fb = function(f) {
        var d, p, b, a, m, c = 0;
        if (!this.O)
            for (d = 0, p = this.ta.length; d < p; d++)
                for (m = this.ta[d], b = 0, a = m.Ga.length; b < a; b++) {
                    if (f === m.Ga[b].name) return this.N.wn = c, m.Ga[b];
                    c++
                }
        d = 0;
        for (p = this.Ga.length; d < p; d++) {
            if (f === this.Ga[d].name) return this.N.wn = c, this.Ga[d];
            c++
        }
        return null
    };
    gb = function(f) {
        return this.bi(f) ? this.N.wn : -1
    };
    hb = function(f) {
        var d, p;
        d = 0;
        for (p = this.R.length; d < p; d++)
            if (this.R[d].name === f) return d;
        return -1
    };
    ib = function() {
        if (this.ub && !this.O) {
            var f, d, p, b, a, m, c;
            this.oj();
            m = this.T();
            var e = m.U,
                g = (f = this.e.Ya()) && f.Xa && f.Xa.Sc;
            f = 0;
            for (d = this.Vb.length; f < d; f++)
                if (a = this.Vb[f], a !== this && (a.oj(), c = a.T(), c.U = e, !e)) {
                    c.j.length = m.j.length;
                    p = 0;
                    for (b = m.j.length; p < b; p++) c.j[p] = a.Zm(m.j[p].Ge);
                    if (g)
                        for (c.da.length = m.da.length, p = 0, b = m.da.length; p < b; p++) c.da[p] = a.Zm(m.da[p].Ge)
                }
        }
    };
    kb = function() {
        return "Type" + this.W
    };
    Ib = function(f, d, p) {
        if ("undefined" === typeof f || "undefined" === typeof p) return !1;
        switch (d) {
            case 0:
                return f === p;
            case 1:
                return f !== p;
            case 2:
                return f < p;
            case 3:
                return f <= p;
            case 4:
                return f > p;
            case 5:
                return f >= p;
            default:
                return !1
        }
    }
})();
var Rb = {};

function Tb(f) {
    this.e = f
}
(function() {
    function f(b) {
        this.u = b;
        this.Wa = !1;
        this.n = this.speed = this.y = this.x = 0;
        this.opacity = 1;
        this.Rd = this.zf = this.size = this.ei = 0
    }
    var r = Tb.prototype;
    r.ob = function(b) {
        this.wa = b;
        this.e = b.e
    };
    var d = r.ob.prototype;
    d.la = function() {
        this.O || (this.qa = new Image, this.qa.crossOrigin = "anonymous", this.qa.idtkLoadDisposed = !0, this.qa.src = this.Gl, this.qa.Gm = this.Hl, this.cb = null, this.e.Lo(this.qa))
    };
    d.Ei = function() {
        this.O || (this.cb = null)
    };
    d.Xk = function() {
        this.O || !this.j.length || this.cb || (this.cb = this.e.H.yi(this.qa, !0, this.e.aa, this.Il))
    };
    d.Fk = function() {
        this.O || this.cb || !this.e.H || (this.cb = this.e.H.yi(this.qa, !0, this.e.aa, this.Il))
    };
    d.Nl = function() {
        this.O || this.j.length || !this.cb || (this.e.H.deleteTexture(this.cb), this.cb = null)
    };
    d.bl = function(b) {
        b.drawImage(this.qa, 0, 0)
    };
    f.prototype.init = function() {
        var b = this.u;
        this.x = b.x - b.qj / 2 + Math.random() * b.qj;
        this.y = b.y - b.rj / 2 + Math.random() * b.rj;
        this.speed = b.ok - b.Zi / 2 + Math.random() * b.Zi;
        this.n = b.n - b.$i / 2 + Math.random() * b.$i;
        this.opacity = b.mk;
        this.size = b.nk - b.Xi / 2 + Math.random() * b.Xi;
        this.ei = b.hk - b.fi / 2 + Math.random() * b.fi;
        this.Rd = this.zf = 0
    };
    f.prototype.jc = function(b) {
        var a = this.u;
        this.x += Math.cos(this.n) * this.speed * b;
        this.y += Math.sin(this.n) * this.speed * b;
        this.y += this.zf * b;
        this.speed += a.xj * b;
        this.size += this.ei * b;
        this.zf += a.$j * b;
        this.Rd += b;
        1 > this.size ? this.Wa = !1 : (0 !== a.Kg && (this.n += Math.random() * a.Kg * b - a.Kg * b / 2), 0 !== a.Mg && (this.speed += Math.random() * a.Mg * b - a.Mg * b / 2), 0 !== a.Lg && (this.opacity += Math.random() * a.Lg * b - a.Lg * b / 2, 0 > this.opacity ? this.opacity = 0 : 1 < this.opacity && (this.opacity = 1)), 1 >= a.pf && this.Rd >= a.timeout && (this.Wa = !1), 2 === a.pf && 0 >= this.speed && (this.Wa = !1))
    };
    f.prototype.Bc = function(b) {
        var a = this.u.opacity * this.opacity;
        if (0 !== a) {
            0 === this.u.pf && (a *= 1 - this.Rd / this.u.timeout);
            b.globalAlpha = a;
            var a = this.x - this.size / 2,
                d = this.y - this.size / 2;
            this.u.e.hd && (a = a + 0.5 | 0, d = d + 0.5 | 0);
            b.drawImage(this.u.type.qa, a, d, this.size, this.size)
        }
    };
    f.prototype.Wb = function(b) {
        var a = this.u.opacity * this.opacity;
        0 === this.u.pf && (a *= 1 - this.Rd / this.u.timeout);
        var d = this.size,
            c = d * this.u.Xn,
            e = this.x - d / 2,
            f = this.y - d / 2;
        this.u.e.hd && (e = e + 0.5 | 0, f = f + 0.5 | 0);
        1 > c || 0 === a || (c < b.Hr || c > b.Mk ? (b.Xe(a), b.gh(e, f, e + d, f, e + d, f + d, e, f + d)) : b.Sr(this.x, this.y, c, a))
    };
    f.prototype.left = function() {
        return this.x - this.size / 2
    };
    f.prototype.right = function() {
        return this.x + this.size / 2
    };
    f.prototype.top = function() {
        return this.y - this.size / 2
    };
    f.prototype.bottom = function() {
        return this.y + this.size / 2
    };
    r.Fa = function(b) {
        this.type = b;
        this.e = b.e
    };
    var d = r.Fa.prototype,
        p = [];
    d.la = function() {
        var b = this.ba;
        this.Ri = b[0];
        this.$i = G(b[1]);
        this.Vf = b[2];
        this.Al = !0;
        this.ok = b[3];
        this.nk = b[4];
        this.mk = b[5] / 100;
        this.hk = b[6];
        this.qj = b[7];
        this.rj = b[8];
        this.Zi = b[9];
        this.Xi = b[10];
        this.fi = b[11];
        this.xj = b[12];
        this.$j = b[13];
        this.Kg = b[14];
        this.Mg = b[15];
        this.Lg = b[16];
        this.pf = b[17];
        this.timeout = b[18];
        this.Ve = 0;
        this.Xn = 1;
        this.Ii = this.x;
        this.Ki = this.y;
        this.Ji = this.x;
        this.Hi = this.y;
        this.rp(function(a) {
            a.Da.set(a.Ii, a.Ki, a.Ji, a.Hi);
            a.sb.Uf(a.Da);
            a.Ih = !1;
            a.Pl()
        });
        this.hc || (this.xb = []);
        this.e.Zf(this);
        this.type.Fk();
        if (1 === this.Vf)
            for (b = 0; b < this.Ri; b++) this.zj().opacity = 0;
        this.Zh = !0
    };
    d.yb = function() {
        var b = {
                r: this.Ri,
                sc: this.$i,
                st: this.Vf,
                s: this.Al,
                isp: this.ok,
                isz: this.nk,
                io: this.mk,
                gr: this.hk,
                xr: this.qj,
                yr: this.rj,
                spr: this.Zi,
                szr: this.Xi,
                grnd: this.fi,
                acc: this.xj,
                g: this.$j,
                lar: this.Kg,
                lsr: this.Mg,
                lor: this.Lg,
                dm: this.pf,
                to: this.timeout,
                pcc: this.Ve,
                ft: this.Zh,
                p: []
            },
            a, d, c, e = b.p;
        a = 0;
        for (d = this.xb.length; a < d; a++) c = this.xb[a], e.push([c.x, c.y, c.speed, c.n, c.opacity, c.ei, c.size, c.zf, c.Rd]);
        return b
    };
    d.fc = function(b) {
        this.Ri = b.r;
        this.$i = b.sc;
        this.Vf = b.st;
        this.Al = b.s;
        this.ok = b.isp;
        this.nk = b.isz;
        this.mk = b.io;
        this.hk = b.gr;
        this.qj = b.xr;
        this.rj = b.yr;
        this.Zi = b.spr;
        this.Xi = b.szr;
        this.fi = b.grnd;
        this.xj = b.acc;
        this.$j = b.g;
        this.Kg = b.lar;
        this.Mg = b.lsr;
        this.Lg = b.lor;
        this.pf = b.dm;
        this.timeout = b.to;
        this.Ve = b.pcc;
        this.Zh = b.ft;
        p.push.apply(p, this.xb);
        this.xb.length = 0;
        var a, d, c, e = b.p;
        b = 0;
        for (a = e.length; b < a; b++) d = this.zj(), c = e[b], d.x = c[0], d.y = c[1], d.speed = c[2], d.n = c[3], d.opacity = c[4], d.ei = c[5], d.size = c[6], d.zf = c[7], d.Rd = c[8]
    };
    d.Ue = function() {
        p.push.apply(p, this.xb);
        this.xb.length = 0
    };
    d.zj = function() {
        var b;
        p.length ? (b = p.pop(), b.u = this) : b = new f(this);
        this.xb.push(b);
        b.Wa = !0;
        return b
    };
    d.jc = function() {
        var b = this.e.wf(this),
            a, d, c, e;
        if (0 === this.Vf && this.Al)
            for (this.Ve += b * this.Ri, d = C(this.Ve), this.Ve -= d, a = 0; a < d; a++) c = this.zj(), c.init();
        this.Ii = this.x;
        this.Ki = this.y;
        this.Ji = this.x;
        this.Hi = this.y;
        e = a = 0;
        for (d = this.xb.length; a < d; a++) c = this.xb[a], this.xb[e] = c, this.e.ga = !0, 1 === this.Vf && this.Zh && c.init(), c.jc(b), c.Wa ? (c.left() < this.Ii && (this.Ii = c.left()), c.right() > this.Ji && (this.Ji = c.right()), c.top() < this.Ki && (this.Ki = c.top()), c.bottom() > this.Hi && (this.Hi = c.bottom()), e++) : p.push(c);
        this.xb.length = e;
        this.ma();
        this.Zh = !1;
        1 === this.Vf && 0 === this.xb.length && this.e.se(this)
    };
    d.Bc = function(b) {
        var a, d, c, e = this.m;
        a = 0;
        for (d = this.xb.length; a < d; a++) c = this.xb[a], c.right() >= e.Ua && c.bottom() >= e.Va && c.left() <= e.Bb && c.top() <= e.Ab && c.Bc(b)
    };
    d.Wb = function(b) {
        this.Xn = this.m.Lb();
        b.ic(this.type.cb);
        var a, d, c, e = this.m;
        a = 0;
        for (d = this.xb.length; a < d; a++) c = this.xb[a], c.right() >= e.Ua && c.bottom() >= e.Va && c.left() <= e.Bb && c.top() <= e.Ab && c.Wb(b)
    };
    r.i = new(l());
    r.b = new(l());
    r.k = new(l())
})();

function Q(f) {
    this.e = f
}
(function() {
    function f() {
        if (0 === this.Nj.length) {
            var a = document.createElement("canvas");
            a.width = this.width;
            a.height = this.height;
            var b = a.getContext("2d");
            this.Wf ? b.drawImage(this.qa, this.Mf, this.Nf, this.width, this.height, 0, 0, this.width, this.height) : b.drawImage(this.qa, 0, 0, this.width, this.height);
            this.Nj = a.toDataURL("image/png")
        }
        return this.Nj
    }

    function r() {}

    function d(a) {
        a[0] = 0;
        a[1] = 0;
        a[2] = 0;
        u.push(a)
    }

    function p(a, b) {
        return a < b ? "" + a + "," + b : "" + b + "," + a
    }

    function b(a, b, c, e) {
        b = b.uid;
        c = c.uid;
        var d = p(b, c);
        if (a.hasOwnProperty(d)) a[d][2] = e;
        else {
            var f = u.length ? u.pop() : [0, 0, 0];
            f[0] = b;
            f[1] = c;
            f[2] = e;
            a[d] = f
        }
    }

    function a(a, b, c) {
        b = p(b.uid, c.uid);
        a.hasOwnProperty(b) && (d(a[b]), delete a[b])
    }

    function m(a, b, c) {
        b = p(b.uid, c.uid);
        if (a.hasOwnProperty(b)) return x = a[b][2], !0;
        x = -2;
        return !1
    }

    function c() {}
    var e = Q.prototype;
    e.ob = function(a) {
        this.wa = a;
        this.e = a.e
    };
    var g = e.ob.prototype;
    g.la = function() {
        if (!this.O) {
            var a, b, c, e, d, g, k, m, n;
            this.Oc = [];
            this.hi = !1;
            a = 0;
            for (b = this.Ub.length; a < b; a++) {
                d = this.Ub[a];
                k = {};
                k.name = d[0];
                k.speed = d[1];
                k.loop = d[2];
                k.ll = d[3];
                k.Si = d[4];
                k.Yn = d[5];
                k.W = d[6];
                k.frames = [];
                c = 0;
                for (e = d[7].length; c < e; c++) g = d[7][c], m = {}, m.Gl = g[0], m.Hl = g[1], m.Mf = g[2], m.Nf = g[3], m.width = g[4], m.height = g[5], m.duration = g[6], m.ac = g[7], m.cc = g[8], m.lk = g[9], m.Li = g[10], m.Zn = g[11], m.Wf = 0 !== m.width, m.Nj = "", m.Nt = f, n = {
                    left: 0,
                    top: 0,
                    right: 1,
                    bottom: 1
                }, m.xl = n, m.cb = null, (n = this.e.wq(g[0])) ? m.qa = n : (m.qa = new Image, m.qa.crossOrigin = "anonymous", m.qa.idtkLoadDisposed = !0, m.qa.src = g[0], m.qa.Dp = g[0], m.qa.Gm = g[1], m.qa.yp = null, this.e.Lo(m.qa)), k.frames.push(m), this.Oc.push(m);
                this.Ub[a] = k
            }
        }
    };
    g.zs = function() {
        var a, b, c;
        a = 0;
        for (b = this.j.length; a < b; a++) c = this.j[a], c.Th = c.zc.cb
    };
    g.Ei = function() {
        if (!this.O) {
            var a, b, c;
            a = 0;
            for (b = this.Oc.length; a < b; ++a) c = this.Oc[a], c.qa.yp = null, c.cb = null
        }
    };
    g.Xk = function() {
        if (!this.O && this.j.length) {
            var a, b, c;
            a = 0;
            for (b = this.Oc.length; a < b; ++a) c = this.Oc[a], c.cb = this.e.H.yi(c.qa, !1, this.e.aa, c.Zn);
            this.zs()
        }
    };
    g.Fk = function() {
        if (!this.O && !this.hi && this.e.H) {
            var a, b, c;
            a = 0;
            for (b = this.Oc.length; a < b; ++a) c = this.Oc[a], c.cb = this.e.H.yi(c.qa, !1, this.e.aa, c.Zn);
            this.hi = !0
        }
    };
    g.Nl = function() {
        if (!this.O && !this.j.length && this.hi) {
            var a, b, c;
            a = 0;
            for (b = this.Oc.length; a < b; ++a) c = this.Oc[a], this.e.H.deleteTexture(c.cb), c.cb = null;
            this.hi = !1
        }
    };
    var q = [];
    g.bl = function(a) {
        var b, c, e;
        b = q.length = 0;
        for (c = this.Oc.length; b < c; ++b) e = this.Oc[b].qa, -1 === q.indexOf(e) && (a.drawImage(e, 0, 0), q.push(e))
    };
    e.Fa = function(a) {
        this.type = a;
        this.e = a.e;
        a = this.type.Ub[0].frames[0].Li;
        this.hc ? this.ca.jh(a) : this.ca = new Pa(a)
    };
    var n = e.Fa.prototype;
    n.la = function() {
        this.visible = 0 === this.ba[0];
        this.ii = this.Ke = !1;
        this.ye = 0 !== this.ba[3];
        1 === this.type.Ub.length && 1 === this.type.Ub[0].frames.length || 0 === this.type.Ub[0].speed || (this.e.Zf(this), this.Ke = !0);
        this.ya = this.Vm(this.ba[1]) || this.type.Ub[0];
        this.I = this.ba[2];
        0 > this.I && (this.I = 0);
        this.I >= this.ya.frames.length && (this.I = this.ya.frames.length - 1);
        var a = this.ya.frames[this.I];
        this.ca.jh(a.Li);
        this.ac = a.ac;
        this.cc = a.cc;
        this.of = this.ya.speed;
        this.hc ? this.$c.reset() : this.$c = new Na;
        this.Dd = this.$c.oa;
        this.ue = !0;
        this.td = 0;
        this.Td = !0;
        this.Nh = this.um = "";
        this.Em = 0;
        this.Mh = -1;
        this.type.Fk();
        var b, c, e, d, f, g, k, a = 0;
        for (b = this.type.Ub.length; a < b; a++)
            for (d = this.type.Ub[a], c = 0, e = d.frames.length; c < e; c++) f = d.frames[c], 0 === f.width && (f.width = f.qa.width, f.height = f.qa.height), f.Wf && (k = f.qa, g = f.xl, g.left = f.Mf / k.width, g.top = f.Nf / k.height, g.right = (f.Mf + f.width) / k.width, g.bottom = (f.Nf + f.height) / k.height, 0 === f.Mf && 0 === f.Nf && f.width === k.width && f.height === k.height && (f.Wf = !1));
        this.zc = this.ya.frames[this.I];
        this.Th = this.zc.cb
    };
    n.yb = function() {
        var a = {
            a: this.ya.W,
            f: this.I,
            cas: this.of,
            fs: this.Dd,
            ar: this.td,
            at: this.$c.oa
        };
        this.ue || (a.ap = this.ue);
        this.Td || (a.af = this.Td);
        return a
    };
    n.fc = function(a) {
        var b = this.yq(a.a);
        b && (this.ya = b);
        this.I = a.f;
        0 > this.I && (this.I = 0);
        this.I >= this.ya.frames.length && (this.I = this.ya.frames.length - 1);
        this.of = a.cas;
        this.Dd = a.fs;
        this.td = a.ar;
        this.$c.reset();
        this.$c.oa = a.at;
        this.ue = a.hasOwnProperty("ap") ? a.ap : !0;
        this.Td = a.hasOwnProperty("af") ? a.af : !0;
        this.zc = this.ya.frames[this.I];
        this.Th = this.zc.cb;
        this.ca.jh(this.zc.Li);
        this.ac = this.zc.ac;
        this.cc = this.zc.cc
    };
    n.Cj = function(a) {
        this.I = a ? 0 : this.ya.frames.length -
            1;
        this.ue = !1;
        this.um = this.ya.name;
        this.ii = !0;
        this.e.trigger(Q.prototype.i.So, this);
        this.e.trigger(Q.prototype.i.Ro, this);
        this.ii = !1;
        this.td = 0
    };
    n.Pt = function() {
        return this.$c.oa
    };
    n.jc = function() {
        this.$c.add(this.e.wf(this));
        this.Nh.length && this.Km();
        0 <= this.Mh && this.Lm();
        var a = this.$c.oa,
            b = this.ya,
            c = b.frames[this.I],
            e = c.duration / this.of;
        this.ue && a >= this.Dd + e && (this.Td ? this.I++ : this.I--, this.Dd += e, this.I >= b.frames.length && (b.Yn ? (this.Td = !1, this.I = b.frames.length - 2) : b.loop ? this.I = b.Si : (this.td++, this.td >= b.ll ? this.Cj(!1) : this.I = b.Si)), 0 > this.I && (b.Yn ? (this.I = 1, this.Td = !0, b.loop || (this.td++, this.td >= b.ll && this.Cj(!0))) : b.loop ? this.I = b.Si : (this.td++, this.td >= b.ll ? this.Cj(!0) : this.I = b.Si)), 0 > this.I ? this.I = 0 : this.I >= b.frames.length && (this.I = b.frames.length - 1), a > this.Dd + b.frames[this.I].duration / this.of && (this.Dd = a), a = b.frames[this.I], this.hf(c, a), this.e.ga = !0)
    };
    n.Vm = function(a) {
        var b, c, e;
        b = 0;
        for (c = this.type.Ub.length; b < c; b++)
            if (e = this.type.Ub[b], Ua(e.name, a)) return e;
        return null
    };
    n.yq = function(a) {
        var b, c, e;
        b = 0;
        for (c = this.type.Ub.length; b < c; b++)
            if (e = this.type.Ub[b], e.W === a) return e;
        return null
    };
    n.Km = function() {
        var a = this.ya.frames[this.I],
            b = this.Vm(this.Nh);
        this.Nh = "";
        !b || Ua(b.name, this.ya.name) && this.ue || (this.ya = b, this.of = b.speed, 0 > this.I && (this.I = 0), this.I >= this.ya.frames.length && (this.I = this.ya.frames.length - 1), 1 === this.Em && (this.I = 0), this.ue = !0, this.Dd = this.$c.oa, this.Td = !0, this.hf(a, this.ya.frames[this.I]), this.e.ga = !0)
    };
    n.Lm = function() {
        var a = this.ya.frames[this.I],
            b = this.I;
        this.I = C(this.Mh);
        0 > this.I && (this.I = 0);
        this.I >= this.ya.frames.length && (this.I = this.ya.frames.length - 1);
        b !== this.I && (this.hf(a, this.ya.frames[this.I]), this.Dd = this.$c.oa, this.e.ga = !0);
        this.Mh = -1
    };
    n.hf = function(a, b) {
        var c = a.width,
            e = a.height,
            d = b.width,
            f = b.height;
        c != d && (this.width *= d / c);
        e != f && (this.height *= f / e);
        this.ac = b.ac;
        this.cc = b.cc;
        this.ca.jh(b.Li);
        this.ma();
        this.zc = b;
        this.Th = b.cb;
        c = 0;
        for (e = this.Q.length; c < e; c++) d = this.Q[c], d.Or && d.Or(a, b);
        this.e.trigger(Q.prototype.i.hf, this)
    };
    n.Bc = function(a) {
        a.globalAlpha = this.opacity;
        var b = this.zc,
            c = b.Wf,
            e = b.qa,
            d = this.x,
            f = this.y,
            g = this.width,
            k = this.height;
        if (0 === this.n && 0 <= g && 0 <= k) d -= this.ac * g, f -= this.cc * k, this.e.hd && (d = d + 0.5 | 0, f = f + 0.5 | 0), c ? a.drawImage(e, b.Mf, b.Nf, b.width, b.height, d, f, g, k) : a.drawImage(e, d, f, g, k);
        else {
            this.e.hd && (d = d + 0.5 | 0, f = f + 0.5 | 0);
            a.save();
            var m = 0 < g ? 1 : -1,
                n = 0 < k ? 1 : -1;
            a.translate(d, f);
            1 === m && 1 === n || a.scale(m, n);
            a.rotate(this.n * m * n);
            d = 0 - this.ac * ma(g);
            f = 0 - this.cc * ma(k);
            c ? a.drawImage(e, b.Mf, b.Nf, b.width, b.height, d, f, ma(g), ma(k)) : a.drawImage(e, d, f, ma(g), ma(k));
            a.restore()
        }
    };
    n.Wb = function(a) {
        a.ic(this.Th);
        a.Xe(this.opacity);
        var b = this.zc,
            c = this.sb;
        if (this.e.hd) {
            var e = (this.x + 0.5 | 0) - this.x,
                d = (this.y + 0.5 | 0) - this.y;
            b.Wf ? a.je(c.La + e, c.Ma + d, c.Qb + e, c.Rb + d, c.Gb + e, c.Hb + d, c.Eb + e, c.Fb + d, b.xl) : a.gh(c.La + e, c.Ma + d, c.Qb + e, c.Rb + d, c.Gb + e, c.Hb + d, c.Eb + e, c.Fb + d)
        } else b.Wf ? a.je(c.La, c.Ma, c.Qb, c.Rb, c.Gb, c.Hb, c.Eb, c.Fb, b.xl) : a.gh(c.La, c.Ma, c.Qb, c.Rb, c.Gb, c.Hb, c.Eb, c.Fb)
    };
    n.Eq = function(a) {
        var b = this.zc,
            c, e;
        c = 0;
        for (e = b.lk.length; c < e; c++)
            if (Ua(a, b.lk[c][0])) return c;
        return -1
    };
    n.sg = function(a, b) {
        var c = this.zc,
            e = c.lk,
            d;
        d = B(a) ? this.Eq(a) : a - 1;
        d = C(d);
        if (0 > d || d >= e.length) return b ? this.x : this.y;
        var f = (e[d][1] - c.ac) * this.width,
            e = e[d][2],
            e = (e - c.cc) * this.height,
            c = Math.cos(this.n);
        d = Math.sin(this.n);
        var g = f * c - e * d,
            e = e * c + f * d,
            f = g + this.x,
            e = e + this.y;
        return b ? f : e
    };
    var u = [],
        x = -2,
        z = [];
    r.prototype.eb = function(c) {
        if (!c) return !1;
        var e = this.e,
            f = e.rg(),
            g = f.type;
        f.N.Ij || (f.N.Ij = {}, e.qm(function(a) {
            return function(b) {
                b = b.uid;
                var c, e;
                for (c in a) a.hasOwnProperty(c) && (e = a[c], e[0] === b || e[1] === b) && (d(a[c]), delete a[c])
            }
        }(f.N.Ij)));
        var f = f.N.Ij,
            k = g.T(),
            n = c.T(),
            k = k.Zb(),
            q, p, s, r, u, K, H, U = this.e.Xc,
            F = U - 1,
            V = e.Ya().Xa;
        for (p = 0; p < k.length; p++) {
            s = k[p];
            n.U ? (s.xa(), this.e.Wm(s.m, c, s.Da, z), q = z) : q = n.Zb();
            for (r = 0; r < q.length; r++) u = q[r], e.us(s, u) || e.Bp(s, u) ? (K = m(f, s, u), K = !K || x < F, b(f, s, u, U), K && (e.fh(V.fa), K = g.T(), H = c.T(), K.U = !1, H.U = !1, g === c ? (K.j.length = 2, K.j[0] = s, K.j[1] = u, g.xc()) : (K.j.length = 1, H.j.length = 1, K.j[0] = s, H.j[0] = u, g.xc(), c.xc()), V.ml(), e.ie(V.fa))) : a(f, s, u);
            z.length = 0
        }
        return !1
    };
    var s = new fa,
        k = !1;
    g.finish = function(a) {
        if (k) {
            if (a) {
                var b = this.e.Ya().Xa.Sc;
                a = null.T();
                var c = s.qd(),
                    e, d;
                if (a.U) {
                    a.U = !1;
                    a.j.length = c.length;
                    e = 0;
                    for (d = c.length; e < d; e++) a.j[e] = c[e];
                    if (b)
                        for (e = a.da.length = 0, d = null.j.length; e < d; e++) c = null.j[e], s.contains(c) || a.da.push(c)
                } else if (b)
                    for (b = a.j.length, a.j.length = b + c.length, e = 0, d = c.length; e < d; e++) a.j[b + e] = c[e], ya(a.da, c[e]);
                else va(a.j, c);
                null.xc()
            }
            s.clear();
            k = !1
        }
    };
    r.prototype.Ro = function(a) {
        return Ua(this.um, a)
    };
    r.prototype.So = t(!0);
    r.prototype.hf = t(!0);
    e.i = new r;
    c.prototype.L = function(a, b, c) {
        if (a && b && (b = this.e.Kj(a, b, this.sg(c, !0), this.sg(c, !1)))) {
            "undefined" !== typeof b.n && (b.n = this.n, b.ma());
            this.e.oc++;
            var e, d, f;
            this.e.trigger(Object.getPrototypeOf(a.wa).i.fg, b);
            if (b.ub)
                for (e = 0, d = b.siblings.length; e < d; e++) f = b.siblings[e], this.e.trigger(Object.getPrototypeOf(f.type.wa).i.fg, f);
            this.e.oc--;
            e = this.e.Aq();
            c = !1;
            if (ha(e.N.km) || e.N.km < this.e.sf) c = !0, e.N.km = this.e.sf;
            if (a != this.type && (a = a.T(), a.U = !1, c ? (a.j.length = 1, a.j[0] = b) : a.j.push(b), b.ub))
                for (e = 0, d = b.siblings.length; e < d; e++) f = b.siblings[e], a = f.type.T(), a.U = !1, c ? (a.j.length = 1, a.j[0] = f) : a.j.push(f)
        }
    };
    c.prototype.q = function(a, b) {
        this.Nh = a;
        this.Em = b;
        this.Ke || (this.e.Zf(this), this.Ke = !0);
        this.ii || this.Km()
    };
    c.prototype.Na = function(a) {
        this.Mh = a;
        this.Ke || (this.e.Zf(this), this.Ke = !0);
        this.ii || this.Lm()
    };
    c.prototype.wh = function(a) {
        this.of = ma(a);
        this.Td = 0 <= a;
        this.Ke || (this.e.Zf(this), this.Ke = !0)
    };
    e.b = new c;
    e.k = new(l())
})();

function R(f) {
    this.e = f
}
(function() {
    function f() {
        return m.length ? m.pop() : {}
    }

    function r(a) {
        var b, d;
        b = 0;
        for (d = a.length; b < d; b++) m.push(a[b]);
        a.length = 0
    }

    function d() {}
    var p = R.prototype;
    p.la = function() {
        p.b.ip = function(a) {
            this.width !== a && (this.width = a, this.Ze = !0, this.ma())
        }
    };
    p.ob = function(a) {
        this.wa = a;
        this.e = a.e
    };
    var b = p.ob.prototype;
    b.la = l();
    b.Ei = function() {
        if (!this.O) {
            var a, b, d;
            a = 0;
            for (b = this.j.length; a < b; a++) d = this.j[a], d.gd = null, d.Re = null, d.gc = null
        }
    };
    p.Fa = function(a) {
        this.type = a;
        this.e = a.e;
        this.hc ? this.ee.length = 0 : this.ee = [];
        this.Ze = !0
    };
    b = p.Fa.prototype;
    b.la = function() {
        this.text = this.ba[0];
        this.visible = 0 === this.ba[1];
        this.font = this.ba[2];
        this.color = this.ba[3];
        this.gi = this.ba[4];
        this.pj = this.ba[5];
        this.Ul = 0 === this.ba[7];
        this.Ak = this.si = this.width;
        this.ri = this.height;
        this.Dk = this.ba[8];
        this.$h = this.tf = "";
        this.xo = this.yo = this.dh = 0;
        this.Qr();
        this.gc = this.Re = this.gd = null;
        this.On = !1;
        this.Jg = this.e.Xc;
        this.hc ? this.Qf.set(0, 0, 1, 1) : this.Qf = new ra(0, 0, 1, 1);
        this.e.H && this.e.Zf(this)
    };
    b.Qr = function() {
        var a = this.font.split(" "),
            b;
        for (b = 0; b < a.length; b++)
            if ("pt" === a[b].substr(a[b].length - 2, 2)) {
                this.dh = parseInt(a[b].substr(0, a[b].length - 2));
                this.el = Math.ceil(96 * (this.dh / 72)) + 4;
                0 < b && (this.$h = a[b - 1]);
                this.tf = a[b + 1];
                for (b += 2; b < a.length; b++) this.tf += " " + a[b];
                break
            }
    };
    b.yb = function() {
        return {
            t: this.text,
            f: this.font,
            c: this.color,
            ha: this.gi,
            va: this.pj,
            wr: this.Ul,
            lho: this.Dk,
            fn: this.tf,
            fs: this.$h,
            ps: this.dh,
            pxh: this.el,
            tw: this.yo,
            th: this.xo,
            lrt: this.Jg
        }
    };
    b.fc = function(a) {
        this.text = a.t;
        this.font = a.f;
        this.color = a.c;
        this.gi = a.ha;
        this.pj = a.va;
        this.Ul = a.wr;
        this.Dk = a.lho;
        this.tf = a.fn;
        this.$h = a.fs;
        this.dh = a.ps;
        this.el = a.pxh;
        this.yo = a.tw;
        this.xo = a.th;
        this.Jg = a.lrt;
        this.Ze = !0;
        this.Ak = this.si = this.width;
        this.ri = this.height
    };
    b.jc = function() {
        if (this.e.H && this.gc && 300 <= this.e.Xc - this.Jg) {
            var a = this.m;
            this.xa();
            var b = this.Da;
            if (b.right < a.Ua || b.bottom < a.Va || b.left > a.Bb || b.top > a.Ab) this.e.H.deleteTexture(this.gc), this.gd = this.Re = this.gc = null
        }
    };
    b.Ue = function() {
        this.gd = this.Re = null;
        this.e.H && this.gc && this.e.H.deleteTexture(this.gc);
        this.gc = null
    };
    b.$t = function() {
        this.font = this.$h + " " + this.dh.toString() + "pt " + this.tf;
        this.Ze = !0;
        this.e.ga = !0
    };
    b.Bc = function(a, b) {
        a.font = this.font;
        a.textBaseline = "top";
        a.fillStyle = this.color;
        a.globalAlpha = b ? 1 : this.opacity;
        var d = 1;
        b && (d = this.m.Lb(), a.save(), a.scale(d, d));
        if (this.Ze || this.width !== this.Ak) this.type.wa.kp(this.text, this.ee, a, this.width, this.Ul), this.Ze = !1, this.Ak = this.width;
        this.xa();
        var d = b ? 0 : this.sb.La,
            f = b ? 0 : this.sb.Ma;
        this.e.hd && (d = d + 0.5 | 0, f = f + 0.5 | 0);
        0 === this.n || b || (a.save(), a.translate(d, f), a.rotate(this.n), f = d = 0);
        var m = f + this.height,
            p = this.el,
            p = p + this.Dk,
            r, z;
        1 === this.pj ? f += Math.max(this.height / 2 - this.ee.length * p / 2, 0) : 2 === this.pj && (f += Math.max(this.height - this.ee.length * p - 2, 0));
        for (z = 0; z < this.ee.length && !(r = d, 1 === this.gi ? r = d + (this.width - this.ee[z].width) / 2 : 2 === this.gi && (r = d + (this.width - this.ee[z].width)), a.fillText(this.ee[z].text, r, f), f += p, f >= m - p); z++);
        (0 !== this.n || b) && a.restore();
        this.Jg = this.e.Xc
    };
    b.Wb = function(a) {
        if (!(1 > this.width || 1 > this.height)) {
            var b = this.Ze || this.On;
            this.On = !1;
            var d = this.m.Lb(),
                f = this.m.Kb(),
                m = this.Qf,
                p = d * this.width,
                r = d * this.height,
                z = Math.ceil(p),
                s = Math.ceil(r),
                k = this.e.Y / 2,
                h = this.e.X / 2;
            this.Re || (this.gd = document.createElement("canvas"), this.gd.width = z, this.gd.height = s, this.si = z, this.ri = s, b = !0, this.Re = this.gd.getContext("2d"));
            if (z !== this.si || s !== this.ri) this.gd.width = z, this.gd.height = s, this.gc && (a.deleteTexture(this.gc), this.gc = null), b = !0;
            b && (this.Re.clearRect(0, 0, z, s), this.Bc(this.Re, !0), this.gc || (this.gc = a.vd(z, s, this.e.aa, this.e.ed)), a.Fs(this.gd, this.gc, this.e.ed));
            this.si = z;
            this.ri = s;
            a.ic(this.gc);
            a.Xe(this.opacity);
            a.jd();
            a.translate(-k, -h);
            a.pd();
            var v = this.sb,
                b = this.m.ua(v.La, v.Ma, !0, !0),
                k = this.m.ua(v.La, v.Ma, !1, !0),
                h = this.m.ua(v.Qb, v.Rb, !0, !0),
                y = this.m.ua(v.Qb, v.Rb, !1, !0),
                A = this.m.ua(v.Gb, v.Hb, !0, !0),
                E = this.m.ua(v.Gb, v.Hb, !1, !0),
                J = this.m.ua(v.Eb, v.Fb, !0, !0),
                v = this.m.ua(v.Eb, v.Fb, !1, !0);
            if (this.e.hd || 0 === this.n && 0 === f) var ja = (b + 0.5 | 0) - b,
                ka = (k + 0.5 | 0) - k,
                b = b + ja,
                k = k + ka,
                h = h + ja,
                y = y + ka,
                A = A + ja,
                E = E + ka,
                J = J + ja,
                v = v + ka;
            0 === this.n && 0 === f ? (h = b + z, y = k, A = h, E = k + s, J = b, v = E, m.right = 1, m.bottom = 1) : (m.right = p / z, m.bottom = r / s);
            a.je(b, k, h, y, A, E, J, v, m);
            a.jd();
            a.scale(d, d);
            a.ql(-this.m.Kb());
            a.translate((this.m.Ua + this.m.Bb) / -2, (this.m.Va + this.m.Ab) / -2);
            a.pd();
            this.Jg = this.e.Xc
        }
    };
    var a = [];
    p.jp = function(b) {
        a.length = 0;
        for (var d = "", f, m = 0; m < b.length;)
            if (f = b.charAt(m), "\n" === f) d.length && (a.push(d), d = ""), a.push("\n"), ++m;
            else if (" " === f || "\t" === f || "-" === f) {
            do d += b.charAt(m), m++; while (m < b.length && (" " === b.charAt(m) || "\t" === b.charAt(m)));
            a.push(d);
            d = ""
        } else m < b.length && (d += f, m++);
        d.length && a.push(d)
    };
    var m = [];
    p.kp = function(a, b, d, m, n) {
        if (a && a.length)
            if (2 >= m) r(b);
            else {
                if (100 >= a.length && -1 === a.indexOf("\n")) {
                    var p = d.measureText(a).width;
                    if (p <= m) {
                        r(b);
                        b.push(f());
                        b[0].text = a;
                        b[0].width = p;
                        return
                    }
                }
                this.lp(a, b, d, m, n)
            }
        else r(b)
    };
    p.lp = function(b, d, g, p, n) {
        n && (this.jp(b), b = a);
        var r = "",
            x, z, s, k = 0;
        for (s = 0; s < b.length; s++) "\n" === b[s] ? (k >= d.length && d.push(f()), z = d[k], z.text = r, z.width = g.measureText(r).width, k++, r = "") : (x = r, r += b[s], z = g.measureText(r).width, z >= p && (k >= d.length && d.push(f()), z = d[k], z.text = x, z.width = g.measureText(x).width, k++, r = b[s], n || " " !== r || (r = "")));
        r.length && (k >= d.length && d.push(f()), z = d[k], z.text = r, z.width = g.measureText(r).width, k++);
        for (s = k; s < d.length; s++) m.push(d[s]);
        d.length = k
    };
    p.i = new(l());
    d.prototype.sd = function(a) {
        w(a) && 1E9 > a && (a = Math.round(1E10 * a) / 1E10);
        a = a.toString();
        this.text !== a && (this.text = a, this.Ze = !0, this.e.ga = !0)
    };
    p.b = new d;
    p.k = new(l())
})();

function S(f) {
    this.e = f
}
(function() {
    function f(a) {
        g = a.x;
        q = a.y;
        n = a.z
    }

    function r(a) {
        u = a.x;
        x = a.y;
        z = a.z
    }

    function d(a, b, c, d) {
        var e;
        e = s.length ? s.pop() : new p;
        e.init(a, b, c, d);
        return e
    }

    function p() {
        this.lh = this.id = this.y = this.x = this.cj = this.bj = this.zk = this.time = this.Cl = 0;
        this.ph = this.mj = !1
    }

    function b() {}

    function a() {}
    var m = S.prototype;
    m.ob = function(a) {
        this.wa = a;
        this.e = a.e
    };
    m.ob.prototype.la = l();
    m.Fa = function(a) {
        this.type = a;
        this.e = a.e;
        this.touches = [];
        this.Nk = !1
    };
    var c = m.Fa.prototype,
        e = {
            left: 0,
            top: 0
        };
    c.pg = function(a) {
        var b, c;
        b = 0;
        for (c = this.touches.length; b < c; b++)
            if (this.touches[b].id === a) return b;
        return -1
    };
    var g = 0,
        q = 0,
        n = 0,
        u = 0,
        x = 0,
        z = 0,
        s = [];
    p.prototype.init = function(a, b, c, d) {
        var e = I();
        this.Cl = this.zk = this.time = e;
        this.bj = a;
        this.cj = b;
        this.x = a;
        this.y = b;
        this.id = c;
        this.lh = d;
        this.ph = this.mj = !1
    };
    p.prototype.update = function(a, b, c) {
        this.zk = this.time;
        this.time = a;
        this.x = b;
        this.y = c;
        !this.ph && 15 <= Ja(this.bj, this.cj, this.x, this.y) && (this.ph = !0)
    };
    p.prototype.Fr = function(a, b) {
        !this.mj && 500 <= I() - this.Cl && !this.ph && 15 > Ja(this.bj, this.cj, this.x, this.y) && (this.mj = !0, a.od = this.lh, a.ag = this.id, a.xf = b, a.e.trigger(S.prototype.i.Zo, a), a.xd = this.x, a.yd = this.y, a.e.trigger(S.prototype.i.$o, a), a.xf = 0)
    };
    var k = -1E3,
        h = -1E3,
        v = -1E4;
    p.prototype.Hn = function(a, b) {
        if (!this.mj) {
            var c = I();
            333 >= c - this.Cl && !this.ph && 15 > Ja(this.bj, this.cj, this.x, this.y) && (a.od = this.lh, a.ag = this.id, a.xf = b, 666 >= c - v && 25 > Ja(k, h, this.x, this.y) ? (a.e.trigger(S.prototype.i.Wo, a), a.xd = this.x, a.yd = this.y, a.e.trigger(S.prototype.i.Xo, a), h = k = -1E3, v = -1E4) : (a.e.trigger(S.prototype.i.fp, a), a.xd = this.x, a.yd = this.y, a.e.trigger(S.prototype.i.gp, a), k = this.x, h = this.y, v = c), a.xf = 0)
        }
    };
    c.la = function() {
        this.rr = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
        this.xf = this.ag = this.od = this.yd = this.xd = this.om = this.nm = this.mm = this.op = this.np = this.mp = this.$g = this.Zg = this.Yg = 0;
        this.Ds = 0 !== this.ba[0];
        var a = 0 < this.e.Jb ? document : this.e.canvas,
            b = document;
        this.e.dd ? b = a = window.Canvas : this.e.nc && (b = a = window);
        var c = this;
        window.navigator.pointerEnabled ? (a.addEventListener("pointerdown", function(a) {
            c.Xg(a)
        }, !1), a.addEventListener("pointermove", function(a) {
            c.Wg(a)
        }, !1), b.addEventListener("pointerup", function(a) {
            c.Kd(a, !1)
        }, !1), b.addEventListener("pointercancel", function(a) {
            c.Kd(a, !0)
        }, !1), this.e.canvas && (this.e.canvas.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), this.e.canvas.addEventListener("gesturehold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("gesturehold", function(a) {
            a.preventDefault()
        }, !1))) : window.navigator.msPointerEnabled ? (a.addEventListener("MSPointerDown", function(a) {
            c.Xg(a)
        }, !1), a.addEventListener("MSPointerMove", function(a) {
            c.Wg(a)
        }, !1), b.addEventListener("MSPointerUp", function(a) {
            c.Kd(a, !1)
        }, !1), b.addEventListener("MSPointerCancel", function(a) {
            c.Kd(a, !0)
        }, !1), this.e.canvas && (this.e.canvas.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1))) : (a.addEventListener("touchstart", function(a) {
            c.Gi(a)
        }, !1), a.addEventListener("touchmove", function(a) {
            c.Fi(a)
        }, !1), b.addEventListener("touchend", function(a) {
            c.Of(a, !1)
        }, !1), b.addEventListener("touchcancel", function(a) {
            c.Of(a, !0)
        }, !1));
        if (this.rr) {
            var d = function(a) {
                    a = a.reading;
                    c.mm = a.accelerationX;
                    c.nm = a.accelerationY;
                    c.om = a.accelerationZ
                },
                e = function(a) {
                    a = a.reading;
                    c.Yg = a.yawDegrees;
                    c.Zg = a.pitchDegrees;
                    c.$g = a.rollDegrees
                },
                g = Windows.Devices.Sensors.Accelerometer.getDefault();
            g && (g.reportInterval = Math.max(g.minimumReportInterval, 16), g.addEventListener("readingchanged", d));
            var h = Windows.Devices.Sensors.Inclinometer.getDefault();
            h && (h.reportInterval = Math.max(h.minimumReportInterval, 16), h.addEventListener("readingchanged", e));
            document.addEventListener("visibilitychange", function() {
                document.hidden || document.msHidden ? (g && g.removeEventListener("readingchanged", d), h && h.removeEventListener("readingchanged", e)) : (g && g.addEventListener("readingchanged", d), h && h.addEventListener("readingchanged", e))
            }, !1)
        } else window.addEventListener("deviceorientation", function(a) {
            c.Yg = a.alpha || 0;
            c.Zg = a.beta || 0;
            c.$g = a.gamma || 0
        }, !1), window.addEventListener("devicemotion", function(a) {
            a.accelerationIncludingGravity && (c.mp = a.accelerationIncludingGravity.x || 0, c.np = a.accelerationIncludingGravity.y || 0, c.op = a.accelerationIncludingGravity.z || 0);
            a.acceleration && (c.mm = a.acceleration.x || 0, c.nm = a.acceleration.y || 0, c.om = a.acceleration.z || 0)
        }, !1);
        this.Ds && !this.e.Ia && (jQuery(document).mousemove(function(a) {
            c.Vk(a)
        }), jQuery(document).mousedown(function(a) {
            c.Uk(a)
        }), jQuery(document).mouseup(function(a) {
            c.Wk(a)
        }));
        this.e.Bg && !this.e.dd && AppMobi.accelerometer.watchAcceleration(f, {
            frequency: 40,
            adjustForRotation: !0
        });
        this.e.fd && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(r, null, {
            frequency: 40
        });
        this.e.vs(this)
    };
    c.Wg = function(a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && a.preventDefault();
            var b = this.pg(a.pointerId),
                c = I();
            if (0 <= b) {
                var d = this.e.Ia ? e : jQuery(this.e.canvas).offset(),
                    b = this.touches[b];
                2 > c - b.time || b.update(c, a.pageX - d.left, a.pageY - d.top)
            }
        }
    };
    c.Xg = function(a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && Va(a) && a.preventDefault();
            var b = this.e.Ia ? e : jQuery(this.e.canvas).offset(),
                c = a.pageX - b.left,
                b = a.pageY - b.top;
            I();
            this.od = this.touches.length;
            this.ag = a.pointerId;
            this.touches.push(d(c, b, a.pointerId, this.od));
            this.e.Ec = !0;
            this.e.trigger(S.prototype.i.fm, this);
            this.e.trigger(S.prototype.i.hm, this);
            this.xd = c;
            this.yd = b;
            this.e.trigger(S.prototype.i.Tb, this);
            this.e.Ec = !1
        }
    };
    c.Kd = function(a, b) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && Va(a) && a.preventDefault();
            var c = this.pg(a.pointerId);
            this.od = 0 <= c ? this.touches[c].lh : -1;
            this.ag = 0 <= c ? this.touches[c].id : -1;
            this.e.Ec = !0;
            this.e.trigger(S.prototype.i.em, this);
            this.e.trigger(S.prototype.i.gm, this);
            0 <= c && (b || this.touches[c].Hn(this, c), 100 > s.length && s.push(this.touches[c]), this.touches.splice(c, 1));
            this.e.Ec = !1
        }
    };
    c.Fi = function(a) {
        a.preventDefault && a.preventDefault();
        var b = I(),
            c, d, f, g;
        c = 0;
        for (d = a.changedTouches.length; c < d; c++)
            if (f = a.changedTouches[c], g = this.pg(f.identifier), 0 <= g) {
                var h = this.e.Ia ? e : jQuery(this.e.canvas).offset();
                g = this.touches[g];
                2 > b - g.time || g.update(b, f.pageX - h.left, f.pageY - h.top)
            }
    };
    c.Gi = function(a) {
        a.preventDefault && Va(a) && a.preventDefault();
        var b = this.e.Ia ? e : jQuery(this.e.canvas).offset();
        I();
        this.e.Ec = !0;
        var c, f, g, h;
        c = 0;
        for (f = a.changedTouches.length; c < f; c++)
            if (g = a.changedTouches[c], h = this.pg(g.identifier), -1 === h) {
                h = g.pageX - b.left;
                var k = g.pageY - b.top;
                this.od = this.touches.length;
                this.ag = g.identifier;
                this.touches.push(d(h, k, g.identifier, this.od));
                this.e.trigger(S.prototype.i.fm, this);
                this.e.trigger(S.prototype.i.hm, this);
                this.xd = h;
                this.yd = k;
                this.e.trigger(S.prototype.i.Tb, this)
            }
        this.e.Ec = !1
    };
    c.Of = function(a, b) {
        a.preventDefault && Va(a) && a.preventDefault();
        this.e.Ec = !0;
        var c, d, e;
        c = 0;
        for (d = a.changedTouches.length; c < d; c++) e = a.changedTouches[c], e = this.pg(e.identifier), 0 <= e && (this.od = this.touches[e].lh, this.ag = this.touches[e].id, this.e.trigger(S.prototype.i.em, this), this.e.trigger(S.prototype.i.gm, this), b || this.touches[e].Hn(this, e), 100 > s.length && s.push(this.touches[e]), this.touches.splice(e, 1));
        this.e.Ec = !1
    };
    c.Kt = function() {
        return this.e.Bg && 0 === this.Yg && 0 !== n ? 90 * n : this.e.fd && 0 === this.Yg && 0 !== z ? 90 * z : this.Yg
    };
    c.Lt = function() {
        return this.e.Bg && 0 === this.Zg && 0 !== q ? -90 * q : this.e.fd && 0 === this.Zg && 0 !== x ? -90 * x : this.Zg
    };
    c.Ot = function() {
        return this.e.Bg && 0 === this.$g && 0 !== g ? 90 * g : this.e.fd && 0 === this.$g && 0 !== u ? 90 * u : this.$g
    };
    c.Uk = function(a) {
        a.preventDefault && this.e.ik && !this.e.ed && a.preventDefault();
        this.Gi({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        });
        this.Nk = !0
    };
    c.Vk = function(a) {
        this.Nk && this.Fi({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        })
    };
    c.Wk = function(a) {
        a.preventDefault && this.e.ik && !this.e.ed && a.preventDefault();
        this.e.ik = !0;
        this.Of({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        });
        this.Nk = !1
    };
    c.ij = function() {
        var a, b, c, d = I();
        a = 0;
        for (b = this.touches.length; a < b; ++a) c = this.touches[a], c.time <= d - 50 && (c.zk = d), c.Fr(this, a)
    };
    b.prototype.hm = t(!0);
    b.prototype.gm = t(!0);
    b.prototype.Tb = function(a) {
        return a ? this.e.gj(a, this.xd, this.yd) : !1
    };
    var y = [];
    b.prototype.Xl = function(a) {
        if (!a) return !1;
        var b = a.T(),
            c = b.Zb(),
            d, e, f, g, h, k;
        f = 0;
        for (g = c.length; f < g; f++) {
            var m = c[f];
            m.xa();
            h = 0;
            for (k = this.touches.length; h < k; h++)
                if (e = this.touches[h], d = m.m.Oa(e.x, e.y, !0), e = m.m.Oa(e.x, e.y, !1), m.tb(d, e)) {
                    y.push(m);
                    break
                }
        }
        return y.length ? (b.U = !1, va(b.j, y), a.xc(), y.length = 0, !0) : !1
    };
    b.prototype.fm = function(a) {
        a = Math.floor(a);
        return a === this.od
    };
    b.prototype.em = function(a) {
        a = Math.floor(a);
        return a === this.od
    };
    b.prototype.Zo = t(!0);
    b.prototype.fp = t(!0);
    b.prototype.Wo = t(!0);
    b.prototype.$o = function(a) {
        return a ? this.e.gj(a, this.xd, this.yd) : !1
    };
    b.prototype.gp = function(a) {
        return a ? this.e.gj(a, this.xd, this.yd) : !1
    };
    b.prototype.Xo = function(a) {
        return a ? this.e.gj(a, this.xd, this.yd) : !1
    };
    m.i = new b;
    a.prototype.lc = function(a, b) {
        var c = this.xf;
        if (0 > c || c >= this.touches.length) a.K(0);
        else {
            var d, e, f, g, h;
            ha(b) ? (d = this.e.tg(0), e = d.scale, f = d.Yc, g = d.Hc, h = d.n, d.scale = this.e.V.scale, d.Yc = 1, d.Hc = 1, d.n = this.e.V.n, a.K(d.Oa(this.touches[c].x, this.touches[c].y, !0)), d.scale = e, d.Yc = f, d.Hc = g, d.n = h) : (d = w(b) ? this.e.tg(b) : this.e.ek(b)) ? a.K(d.Oa(this.touches[c].x, this.touches[c].y, !0)) : a.K(0)
        }
    };
    a.prototype.ra = function(a, b) {
        var c = this.xf;
        if (0 > c || c >= this.touches.length) a.K(0);
        else {
            var d, e, f, g, h;
            ha(b) ? (d = this.e.tg(0), e = d.scale, f = d.Yc, g = d.Ic, h = d.n, d.scale = this.e.V.scale, d.Yc = 1, d.Ic = 1, d.n = this.e.V.n, a.K(d.Oa(this.touches[c].x, this.touches[c].y, !1)), d.scale = e, d.Yc = f, d.Ic = g, d.n = h) : (d = w(b) ? this.e.tg(b) : this.e.ek(b)) ? a.K(d.Oa(this.touches[c].x, this.touches[c].y, !1)) : a.K(0)
        }
    };
    m.k = new a
})();

function Ub(f) {
    this.e = f;
    var r = this;
    this.e.Ia || (jQuery(document).mousemove(function(d) {
        r.Vk(d)
    }), jQuery(document).mousedown(function(d) {
        r.Uk(d)
    }), jQuery(document).mouseup(function(d) {
        r.Wk(d)
    }));
    f = 0 < this.e.Jb ? document : this.e.canvas;
    this.e.dd ? f = window.Canvas : this.e.nc && (f = window);
    window.navigator.pointerEnabled ? (f.addEventListener("pointerdown", function(d) {
        r.Xg(d)
    }, !1), f.addEventListener("pointermove", function(d) {
        r.Wg(d)
    }, !1), f.addEventListener("pointerup", function(d) {
        r.Kd(d)
    }, !1), f.addEventListener("pointercancel", function(d) {
        r.Kd(d)
    }, !1)) : window.navigator.msPointerEnabled ? (f.addEventListener("MSPointerDown", function(d) {
        r.Xg(d)
    }, !1), f.addEventListener("MSPointerMove", function(d) {
        r.Wg(d)
    }, !1), f.addEventListener("MSPointerUp", function(d) {
        r.Kd(d)
    }, !1), f.addEventListener("MSPointerCancel", function(d) {
        r.Kd(d)
    }, !1)) : (f.addEventListener("touchstart", function(d) {
        r.Gi(d)
    }, !1), f.addEventListener("touchmove", function(d) {
        r.Fi(d)
    }, !1), f.addEventListener("touchend", function(d) {
        r.Of(d)
    }, !1), f.addEventListener("touchcancel", function(d) {
        r.Of(d)
    }, !1))
}
(function() {
    function f(a) {
        var b, c;
        b = 0;
        for (c = a.Q.length; b < c; b++)
            if (a.Q[b] instanceof d.Fa) return a.Q[b];
        return null
    }

    function r() {}
    var d = Ub.prototype,
        p = {
            left: 0,
            top: 0
        };
    d.Uk = function(a) {
        1 === a.which && this.Qk("leftmouse", a.pageX, a.pageY)
    };
    d.Vk = function(a) {
        1 === a.which && this.Rk("leftmouse", a.pageX, a.pageY)
    };
    d.Wk = function(a) {
        1 === a.which && this.Sk("leftmouse")
    };
    d.Gi = function(a) {
        a.preventDefault && Va(a) && a.preventDefault();
        var b, c, d, f;
        b = 0;
        for (c = a.changedTouches.length; b < c; b++) d = a.changedTouches[b], f = d.identifier, this.Qk(f ? f.toString() : "<none>", d.pageX, d.pageY)
    };
    d.Fi = function(a) {
        a.preventDefault && a.preventDefault();
        var b, c, d, f;
        b = 0;
        for (c = a.changedTouches.length; b < c; b++) d = a.changedTouches[b], f = d.identifier, this.Rk(f ? f.toString() : "<none>", d.pageX, d.pageY)
    };
    d.Of = function(a) {
        a.preventDefault && Va(a) && a.preventDefault();
        var b, c, d;
        b = 0;
        for (c = a.changedTouches.length; b < c; b++) d = a.changedTouches[b], d = d.identifier, this.Sk(d ? d.toString() : "<none>")
    };
    d.Xg = function(a) {
        a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType && (a.preventDefault && Va(a) && a.preventDefault(), this.Qk(a.pointerId.toString(), a.pageX, a.pageY))
    };
    d.Wg = function(a) {
        a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType && (a.preventDefault && a.preventDefault(), this.Rk(a.pointerId.toString(), a.pageX, a.pageY))
    };
    d.Kd = function(a) {
        a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType && (a.preventDefault && Va(a) && a.preventDefault(), this.Sk(a.pointerId.toString()))
    };
    d.Qk = function(a, b, c) {
        var d = this.e.Ia ? p : jQuery(this.e.canvas).offset();
        b -= d.left;
        c -= d.top;
        var g, q, n, r, d = this.Kf.qd(),
            x, z, s, k = null;
        x = 0;
        for (z = d.length; x < z; x++)
            if (s = d[x], g = f(s), g.enabled && !g.Ae && (g = s.m.Oa(b, c, !0), q = s.m.Oa(b, c, !1), s.xa(), s.tb(g, q))) k ? s.m.index > k.m.index ? (k = s, n = g, r = q) : s.m.index === k.m.index && s.Mb() > k.Mb() && (k = s, n = g, r = q) : (k = s, n = g, r = q);
        k && f(k).Lr(a, n, r)
    };
    d.Rk = function(a, b, c) {
        var d = this.e.Ia ? p : jQuery(this.e.canvas).offset();
        b -= d.left;
        c -= d.top;
        var g, q = this.Kf.qd(),
            n, r, x;
        n = 0;
        for (r = q.length; n < r; n++) g = q[n], x = f(g), !x.enabled || !x.Ae || x.Ae && x.Qj !== a || (d = g.m.Oa(b, c, !0), g = g.m.Oa(b, c, !1), x.Nr(d, g))
    };
    d.Sk = function(a) {
        var b = this.Kf.qd(),
            c, d, g;
        c = 0;
        for (d = b.length; c < d; c++) g = b[c], g = f(g), g.Ae && g.Qj === a && g.Pr()
    };
    d.ob = function(a) {
        this.jb = a;
        this.e = a.e
    };
    d.ob.prototype.la = l();
    d.Fa = function(a, b) {
        this.type = a;
        this.jb = a.jb;
        this.J = b;
        this.e = a.e
    };
    var b = d.Fa.prototype;
    b.la = function() {
        this.Ae = !1;
        this.Yb = this.Xb = 0;
        this.Qj = "<none>";
        this.Dj = this.ba[0];
        this.enabled = 0 !== this.ba[1]
    };
    b.yb = function() {
        return {
            enabled: this.enabled
        }
    };
    b.fc = function(a) {
        this.enabled = a.enabled;
        this.Ae = !1
    };
    b.Lr = function(a, b, c) {
        this.Xb = b - this.J.x;
        this.Yb = c - this.J.y;
        this.Ae = !0;
        this.Qj = a;
        this.e.Ec = !0;
        this.e.trigger(Ub.prototype.i.Yo, this.J);
        this.e.Ec = !1
    };
    b.Nr = function(a, b) {
        var c = a - this.Xb,
            d = b - this.Yb;
        if (0 === this.Dj) {
            if (this.J.x !== c || this.J.y !== d) this.J.x = c, this.J.y = d, this.J.ma()
        } else 1 === this.Dj ? this.J.x !== c && (this.J.x = c, this.J.ma()) : 2 === this.Dj && this.J.y !== d && (this.J.y = d, this.J.ma())
    };
    b.Pr = function() {
        this.Ae = !1;
        this.e.Ec = !0;
        this.e.trigger(Ub.prototype.i.am, this.J);
        this.e.Ec = !1
    };
    b.jc = l();
    r.prototype.Yo = t(!0);
    r.prototype.am = t(!0);
    d.i = new r;
    d.b = new(l());
    d.k = new(l())
})();

function X(f) {
    this.e = f
}
(function() {
    function f() {}

    function r() {}
    var d = X.prototype;
    d.ob = function(b) {
        this.jb = b;
        this.e = b.e
    };
    d.ob.prototype.la = l();
    d.Fa = function(b, a) {
        this.type = b;
        this.jb = b.jb;
        this.J = a;
        this.e = b.e
    };
    var p = d.Fa.prototype;
    p.la = function() {
        this.rb = {}
    };
    p.Ue = function() {
        Ma(this.rb)
    };
    p.yb = function() {
        var b = {},
            a, d;
        for (a in this.rb) this.rb.hasOwnProperty(a) && (d = this.rb[a], b[a] = {
            c: d.Yd.oa,
            t: d.total.oa,
            d: d.duration,
            r: d.jl
        });
        return b
    };
    p.fc = function(b) {
        this.rb = {};
        for (var a in b) b.hasOwnProperty(a) && (this.rb[a] = {
            Yd: new Na,
            total: new Na,
            duration: b[a].d,
            jl: b[a].r
        }, this.rb[a].Yd.oa = b[a].c, this.rb[a].total.oa = b[a].t)
    };
    p.jc = function() {
        var b = this.e.wf(this.J),
            a, d;
        for (a in this.rb) this.rb.hasOwnProperty(a) && (d = this.rb[a], d.Yd.add(b), d.total.add(b))
    };
    p.ij = function() {
        var b, a;
        for (b in this.rb) this.rb.hasOwnProperty(b) && (a = this.rb[b], a.Yd.oa >= a.duration && (a.jl ? a.Yd.oa -= a.duration : delete this.rb[b]))
    };
    f.prototype.Ba = function(b) {
        b = b.toLowerCase();
        return (b = this.rb[b]) ? b.Yd.oa >= b.duration : !1
    };
    d.i = new f;
    r.prototype.Ca = function(b, a, d) {
        this.rb[d.toLowerCase()] = {
            Yd: new Na,
            total: new Na,
            duration: b,
            jl: 1 === a
        }
    };
    d.b = new r;
    d.k = new(l())
})();

function Y(f) {
    this.e = f
}
(function() {
    function f() {}

    function r() {}

    function d() {}
    var p = Y.prototype;
    p.ob = function(a) {
        this.jb = a;
        this.e = a.e
    };
    p.ob.prototype.la = function() {
        this.Uc = []
    };
    p.Fa = function(a, b) {
        this.type = a;
        this.jb = a.jb;
        this.J = b;
        this.e = a.e
    };
    var b = p.Fa.prototype;
    b.la = function() {
        this.Pb = this.ba[0];
        this.ke = this.ba[1];
        this.nl = 0 !== this.ba[2];
        this.ol = G(this.ba[3]);
        this.fj = this.ba[4];
        this.Ni = 0 !== this.ba[5];
        this.dl = this.ba[6];
        this.enabled = 0 !== this.ba[7];
        this.Jo = 0 !== this.ba[8];
        this.pi = 0;
        this.Pc = this.ke;
        this.currentTarget = null;
        this.Ek = -1;
        this.Te = this.Se = 0;
        this.Ff = [0, 0, 0, 0];
        this.Lc = 0;
        this.vf = !0;
        var a = this;
        this.hc || (this.Mn = function(b) {
            a.Mr(b)
        });
        this.e.qm(this.Mn)
    };
    b.yb = function() {
        var a = {
                r: this.Pb,
                rof: this.ke,
                re: this.nl,
                rs: this.ol,
                tm: this.fj,
                pa: this.Ni,
                ps: this.dl,
                en: this.enabled,
                lct: this.pi,
                ftc: this.Pc,
                target: this.currentTarget ? this.currentTarget.uid : -1,
                ox: this.Se,
                oy: this.Te,
                ls: this.Ff,
                sc: this.Lc,
                targs: []
            },
            b, d;
        b = 0;
        for (d = this.type.Uc.length; b < d; b++) a.targs.push(this.type.Uc[b].W);
        return a
    };
    b.fc = function(a) {
        this.Pb = a.r;
        this.ke = a.rof;
        this.nl = a.re;
        this.ol = a.rs;
        this.fj = a.tm;
        this.Ni = a.pa;
        this.dl = a.ps;
        this.enabled = a.en;
        this.pi = a.lct;
        this.Pc = a.ftc || 0;
        this.Ek = a.target;
        this.Se = a.ox;
        this.Te = a.oy;
        this.Ff = a.ls;
        this.Lc = a.sc;
        this.type.Uc.length = 0;
        var b, d, f;
        b = 0;
        for (d = a.targs.length; b < d; b++)(f = this.e.ug(a.targs[b])) && this.type.Uc.push(f)
    };
    b.Qd = function() {
        this.currentTarget = -1 === this.Ek ? null : this.e.fk(this.Ek)
    };
    b.Mr = function(a) {
        this.currentTarget == a && (this.currentTarget = null)
    };
    b.Ue = function() {
        this.currentTarget = null;
        this.e.bs(this.Mn)
    };
    b.qp = function(a) {
        4 > this.Lc ? (this.Ff[this.Lc] = a, this.Lc++) : (this.Ff.shift(), this.Ff.push(a))
    };
    b.bn = function() {
        for (var a = 0, b = 0; b < this.Lc; b++) a += this.Ff[b];
        return a / this.Lc
    };
    b.pn = function(a) {
        var b = this.J,
            d = a.x - b.x;
        a = a.y - b.y;
        return d * d + a * a <= this.Pb * this.Pb
    };
    var a = new ra(0, 0, 0, 0),
        m = [];
    b.Dr = function() {
        var b, d, f;
        a.left = this.J.x - this.Pb;
        a.top = this.J.y - this.Pb;
        a.right = this.J.x + this.Pb;
        a.bottom = this.J.y + this.Pb;
        if (this.Jo) this.e.cn(this.type.Uc, a, m);
        else
            for (b = 0, d = this.type.Uc.length; b < d; ++b) wa(m, this.type.Uc[b].j);
        b = 0;
        for (d = m.length; b < d; ++b)
            if (f = m[b], this.pn(f)) {
                this.currentTarget = f;
                m.length = 0;
                return
            }
        m.length = 0
    };
    b.Er = function() {
        var b, d, f, p, n, r = this.J.x,
            x = this.J.y,
            z = this.Pb * this.Pb;
        this.currentTarget = null;
        a.left = r - this.Pb;
        a.top = x - this.Pb;
        a.right = r + this.Pb;
        a.bottom = x + this.Pb;
        if (this.Jo) this.e.cn(this.type.Uc, a, m);
        else
            for (b = 0, d = this.type.Uc.length; b < d; ++b) wa(m, this.type.Uc[b].j);
        b = 0;
        for (d = m.length; b < d; ++b) f = m[b], p = r - f.x, n = x - f.y, p = p * p + n * n, p < z && (this.currentTarget = f, z = p);
        m.length = 0
    };
    b.jc = function() {
        var a = this.e.wf(this.J),
            b = this.e.Id.oa,
            d = this.J;
        if (this.enabled) {
            this.currentTarget && !this.pn(this.currentTarget) && (this.currentTarget = null, this.Lc = 0, this.vf = !0);
            b >= this.pi + 0.1 && ((this.pi = b, 0 !== this.fj || this.currentTarget) ? 1 === this.fj && (b = this.currentTarget, this.Er(), this.currentTarget && this.currentTarget !== b && (this.Lc = 0, this.vf = !0, this.Se = this.currentTarget.x, this.Te = this.currentTarget.y, this.e.trigger(Y.prototype.i.Od, this.J))) : (this.Dr(), this.currentTarget && (this.Lc = 0, this.vf = !0, this.Se = this.currentTarget.x, this.Te = this.currentTarget.y, this.e.trigger(Y.prototype.i.Od, this.J))));
            this.Pc += a;
            if (this.currentTarget) {
                b = Fa(d.x, d.y, this.currentTarget.x, this.currentTarget.y);
                if (this.Ni) {
                    var f = d.x,
                        m = d.y,
                        p = this.currentTarget.x,
                        r = this.currentTarget.y,
                        z = Fa(p, r, this.Se, this.Te);
                    this.vf || this.qp(Ja(p, r, this.Se, this.Te) / a);
                    var s = this.bn(),
                        k = r - m,
                        h = p - f,
                        f = (s * Math.sin(z) * (f - p) - s * Math.cos(z) * (m - r)) / this.dl,
                        k = Math.asin(f / Math.sqrt(k * k + h * h)) - Math.atan2(k, -h) + Math.PI;
                    isNaN(k) || (b = k)
                }
                this.nl && (d.n = Ha(d.n, b, this.ol * a), d.ma());
                this.Pc >= this.ke && 0.1 >= za(Ga(d.n, b)) && (!this.Ni || 4 <= this.Lc) && (this.Pc -= this.ke, this.Pc >= this.ke && (this.Pc = 0), this.e.trigger(Y.prototype.i.ep, this.J));
                this.Se = this.currentTarget.x;
                this.Te = this.currentTarget.y;
                this.vf = !1
            }
            this.Pc > this.ke && (this.Pc = this.ke)
        }
    };
    f.prototype.rc = function() {
        return !!this.currentTarget
    };
    f.prototype.ep = t(!0);
    f.prototype.Od = t(!0);
    p.i = new f;
    r.prototype.F = function(a) {
        var b = this.type.Uc;
        if (-1 === b.indexOf(a)) {
            var d, f, m;
            d = 0;
            for (f = b.length; d < f; d++)
                if (m = b[d], m.O && -1 !== m.Qe.indexOf(a)) return;
            b.push(a)
        }
    };
    r.prototype.ib = function() {
        this.currentTarget = null;
        this.Lc = 0;
        this.vf = !0
    };
    r.prototype.uc = function(a) {
        this.Pb = a
    };
    p.b = new r;
    d.prototype.hb = function(a) {
        a.na(this.currentTarget ? this.currentTarget.uid : 0)
    };
    p.k = new d
})();

function Z(f) {
    this.e = f
}
(function() {
    function f() {}

    function r() {}

    function d() {}
    var p = Z.prototype;
    p.ob = function(a) {
        this.jb = a;
        this.e = a.e
    };
    p.ob.prototype.la = l();
    p.Fa = function(a, b) {
        this.type = a;
        this.jb = a.jb;
        this.J = b;
        this.e = a.e;
        this.we = this.Yb = this.Xb = 0
    };
    var b = p.Fa.prototype;
    b.la = function() {
        this.Yf = this.ba[0];
        this.fl = this.ba[1];
        this.enabled = 0 !== this.ba[2]
    };
    b.yb = function() {
        return {
            dx: this.Xb,
            dy: this.Yb,
            cancelStep: this.we,
            enabled: this.enabled,
            stepMode: this.Yf,
            pxPerStep: this.fl
        }
    };
    b.fc = function(a) {
        this.Xb = a.dx;
        this.Yb = a.dy;
        this.we = a.cancelStep;
        this.enabled = a.enabled;
        this.Yf = a.stepMode;
        this.fl = a.pxPerStep
    };
    b.bn = function() {
        return Math.sqrt(this.Xb * this.Xb + this.Yb * this.Yb)
    };
    b.Kb = function() {
        return Math.atan2(this.Yb, this.Xb)
    };
    b.step = function(a, b, c) {
        if (0 !== a || 0 !== b) {
            var d = this.J.x,
                f = this.J.y,
                p, n = Math.round(Math.sqrt(a * a + b * b) / this.fl);
            0 === n && (n = 1);
            var r;
            for (r = 1; r <= n; r++)
                if (p = r / n, this.J.x = d + a * p, this.J.y = f + b * p, this.J.ma(), this.e.trigger(c, this.J), 1 === this.we) {
                    r--;
                    p = r / n;
                    this.J.x = d + a * p;
                    this.J.y = f + b * p;
                    this.J.ma();
                    break
                } else if (2 === this.we) break
        }
    };
    b.jc = function() {
        var a = this.e.wf(this.J),
            b = this.Xb * a,
            a = this.Yb * a;
        0 === this.Xb && 0 === this.Yb || !this.enabled || (this.we = 0, 0 === this.Yf ? (this.J.x += b, this.J.y += a) : 1 === this.Yf ? this.step(b, a, Z.prototype.i.To) : 2 === this.Yf ? (this.step(b, 0, Z.prototype.i.Zl), this.we = 0, this.step(0, a, Z.prototype.i.$l)) : 3 === this.Yf && (this.step(0, a, Z.prototype.i.$l), this.we = 0, this.step(b, 0, Z.prototype.i.Zl)), this.J.ma())
    };
    f.prototype.To = t(!0);
    f.prototype.Zl = t(!0);
    f.prototype.$l = t(!0);
    p.i = new f;
    r.prototype.P = function(a, b) {
        var c;
        switch (a) {
            case 0:
                c = this.Kb();
                this.Xb = Math.cos(c) * b;
                this.Yb = Math.sin(c) * b;
                break;
            case 1:
                this.Xb = b;
                break;
            case 2:
                this.Yb = b
        }
    };
    p.b = new r;
    d.prototype.Xb = function(a) {
        a.K(this.Xb)
    };
    d.prototype.Yb = function(a) {
        a.K(this.Yb)
    };
    p.k = new d
})();

function Sb() {
    return [null, "menu", [
            [Tb, !1, !0, !0, !1, !0, !0, !0, !0, !0],
            [Q, !1, !0, !0, !0, !0, !0, !0, !0, !1],
            [R, !1, !0, !0, !0, !0, !0, !0, !0, !1],
            [S, !0, !1, !1, !1, !1, !1, !1, !1, !1]
        ],
        [
            ["t0", Q, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 7035047938226925, [
                        ["files/images/background-sheet0.png", 119392, 0, 0, 2001, 1356, 1, 0.5002498626708984, 0.5, [],
                            [], 0
                        ]
                    ]]
                ],
                [], !1, !1, 0xb16a74d54064a, [], null
            ],
            ["t1", Q, !1, [0xeabc83b1e6b10, 51618457664472, 0xd0c71715a94e7], 3, 0, null, [
                    ["stand", 5, !1, 1, 0, !1, 814866993607724, [
                        ["files/images/blue_rifleman-sheet0.png", 43068, 130, 160, 127, 157, 1, 0.3070866167545319, 0.5286624431610107, [],
                            [-0.2598425149917603, -0.5286624431610107, 0.2913383543491364, -0.5286624431610107, 0.2913383543491364, 0.4713375568389893, -0.2598425149917603, 0.4713375568389893], 0
                        ]
                    ]],
                    ["walk", 10, !0, 1, 0, !1, 0x6574ddb4aae7f, [
                        ["files/images/blue_rifleman-sheet0.png", 43068, 259, 161, 127, 157, 1, 0.3070866167545319, 0.5286624431610107, [],
                            [-0.2598425149917603, -0.5286624431610107, 0.2913383543491364, -0.5286624431610107, 0.2913383543491364, 0.4713375568389893, -0.2598425149917603, 0.4713375568389893], 0
                        ],
                        ["files/images/blue_rifleman-sheet0.png", 43068, 130, 319, 127, 153, 1, 0.3070866167545319, 0.529411792755127, [],
                            [-0.2598425149917603, -0.529411792755127, 0.2913383543491364, -0.529411792755127, 0.2913383543491364, 0.4705882072448731, -0.2598425149917603, 0.4705882072448731], 0
                        ],
                        ["files/images/blue_rifleman-sheet0.png", 43068, 317, 1, 130, 158, 1, 0.3076923191547394, 0.5316455960273743, [],
                            [-0.2604482173919678, -0.5316455960273743, 0.2907326519489288, -0.5316455960273743, 0.2907326519489288, 0.4683544039726257, -0.2604482173919678, 0.4683544039726257], 0
                        ],
                        ["files/images/blue_rifleman-sheet0.png", 43068, 1, 160, 127, 160, 1, 0.3070866167545319, 0.53125, [],
                            [-0.2598425149917603, -0.53125, 0.2913383543491364, -0.53125, 0.2913383543491364, 0.46875, -0.2598425149917603, 0.46875], 0
                        ]
                    ]],
                    ["fire", 5, !1, 1, 0, !1, 4967372476084533, [
                        ["files/images/blue_rifleman-sheet0.png", 43068, 160, 1, 155, 157, 1, 0.3419354856014252, 0.5286624431610107, [
                                ["Imagepoint 1", 1.019354820251465, 0.331210196018219]
                            ],
                            [-0.2946913838386536, -0.5286624431610107, 0.1339085102081299, -0.5286624431610107, 0.1339085102081299, 0.4713375568389893, -0.2946913838386536, 0.4713375568389893], 0
                        ],
                        ["files/images/blue_rifleman-sheet0.png", 43068, 1, 1, 157, 157, 1, 0.3248407542705536, 0.5286624431610107, [
                                ["Imagepoint 1", 1.025477647781372, 0.331210196018219]
                            ],
                            [-0.3030743598937988, -0.5286624431610107, 0.1255262494087219, -0.5159235596656799, 0.1255262494087219, 0.4713375568389893, -0.3030743598937988, 0.4713375568389893], 0
                        ]
                    ]],
                    ["aim", 5, !1, 1, 0, !1, 6462897906131269, [
                        ["files/images/blue_rifleman-sheet0.png", 43068, 1, 1, 157, 157, 1, 0.3057324886322022, 0.5286624431610107, [],
                            [-0.2993630468845367, -0.5286624431610107, 0.1461955010890961, -0.5286624431610107, 0.1461955010890961, 0.4649685621261597, -0.2993630468845367, 0.4713375568389893], 0
                        ]
                    ]]
                ],
                [
                    ["Turret", Y, 0x6bb1b9d25e477],
                    ["CustomMovement", Z, 8375407307543336],
                    ["Timer", X, 5018142349463265]
                ], !1, !1, 6194994605587481, [], null
            ],
            ["t2", S, !1, [], 0, 0, null, null, [], !1, !1, 0x68a67e6c39061, [], null, [1]],
            ["t3", Tb, !1, [], 0, 0, ["files/images/smoke.png", 357, 0], null, [], !1, !1, 0x5823902413b91, [], null],
            ["t4", Q, !1, [5921306462750163], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 5488561679754191, [
                        ["files/images/rifleman_button-sheet0.png", 43811, 1, 1, 371, 294, 1, 0.5013477206230164, 0.5, [],
                            [-0.4663073122501373, -0.4557822942733765, -0.002695709466934204, -0.5, 0.4339622855186462, -0.4183672964572907, 0.45013427734375, 0, 0.4070082902908325, 0.3843539953231812, -0.002695709466934204, 0.4183670282363892, -0.4285714030265808, 0.4081630110740662, -0.5013477206230164, 0], 0
                        ]
                    ]],
                    ["load", 5, !1, 1, 0, !1, 5750514087851047, [
                        ["files/images/rifleman_button-sheet0.png", 43811, 374, 1, 371, 294, 1, 0.5013477206230164, 0.5, [],
                            [], 0
                        ],
                        ["files/images/rifleman_button-sheet0.png", 43811, 1, 297, 371, 294, 1, 0.5013477206230164, 0.5, [],
                            [], 0
                        ],
                        ["files/images/rifleman_button-sheet0.png", 43811, 374, 297, 371, 294, 1, 0.5013477206230164, 0.5, [],
                            [], 0
                        ],
                        ["files/images/rifleman_button-sheet0.png", 43811, 1, 593, 371, 294, 1, 0.5013477206230164, 0.5, [],
                            [], 0
                        ],
                        ["files/images/rifleman_button-sheet0.png", 43811, 374, 593, 371, 294, 1, 0.5013477206230164, 0.5, [],
                            [], 0
                        ]
                    ]]
                ],
                [
                    ["Timer", X, 9621708927833888]
                ], !1, !1, 647478581382125, [], null
            ],
            ["t5", Q, !1, [0x90cbae2b57b63, 0xa6c1065860ca5, 5337498546361621], 3, 0, null, [
                    ["stand", 5, !1, 1, 0, !1, 6851323798604098, [
                        ["files/images/red_rifleman-sheet0.png", 46655, 130, 160, 127, 157, 1, 0.6929134130477905, 0.5286624431610107, [],
                            [-0.2598424255847931, -0.5286624431610107, 0.228346586227417, -0.5286624431610107, 0.228346586227417, 0.4585985541343689, -0.2598424255847931, 0.4585985541343689], 0
                        ]
                    ]],
                    ["walk", 10, !0, 1, 0, !1, 8406450273818203, [
                        ["files/images/red_rifleman-sheet0.png", 46655, 259, 161, 127, 157, 1, 0.6929134130477905, 0.5286624431610107, [],
                            [-0.2598424255847931, -0.5286624431610107, 0.228346586227417, -0.5286624431610107, 0.228346586227417, 0.4585985541343689, -0.2598424255847931, 0.4585985541343689], 0
                        ],
                        ["files/images/red_rifleman-sheet0.png", 46655, 130, 319, 127, 153, 1, 0.6929134130477905, 0.529411792755127, [],
                            [-0.2598424255847931, -0.529411792755127, 0.228346586227417, -0.529411792755127, 0.228346586227417, 0.4578492045402527, -0.2598424255847931, 0.4578492045402527], 0
                        ],
                        ["files/images/red_rifleman-sheet0.png", 46655, 317, 1, 130, 158, 1, 0.692307710647583, 0.5316455960273743, [],
                            [-0.2592367231845856, -0.5316455960273743, 0.2289522886276245, -0.5316455960273743, 0.2289522886276245, 0.4556154012680054, -0.2592367231845856, 0.4556154012680054], 0
                        ],
                        ["files/images/red_rifleman-sheet0.png", 46655, 1, 160, 127, 160, 1, 0.6929134130477905, 0.53125, [],
                            [-0.2598424255847931, -0.53125, 0.228346586227417, -0.53125, 0.228346586227417, 0.4560109972953796, -0.2598424255847931, 0.4560109972953796], 0
                        ]
                    ]],
                    ["fire", 5, !1, 1, 0, !1, 7543869358462896, [
                        ["files/images/red_rifleman-sheet0.png", 46655, 160, 1, 155, 157, 1, 0.6580645442008972, 0.5286624431610107, [
                                ["Imagepoint 1", -0.01935483887791634, 0.331210196018219]
                            ],
                            [-0.121767520904541, -0.5286624431610107, 0.2825504541397095, -0.5286624431610107, 0.2825504541397095, 0.4585985541343689, -0.121767520904541, 0.4522295594215393], 0
                        ],
                        ["files/images/red_rifleman-sheet0.png", 46655, 1, 1, 157, 157, 1, 0.675159215927124, 0.5286624431610107, [
                                ["Imagepoint 1", -0.02547770738601685, 0.331210196018219]
                            ],
                            [-0.1083301901817322, -0.5286624431610107, 0.2906867861747742, -0.5286624431610107, 0.2906867861747742, 0.4585985541343689, -0.1083301901817322, 0.4522295594215393], 0
                        ]
                    ]],
                    ["aim", 5, !1, 1, 0, !1, 6230835320562782, [
                        ["files/images/red_rifleman-sheet0.png", 46655, 1, 1, 157, 157, 1, 0.6942675113677979, 0.5286624431610107, [],
                            [-0.127438485622406, -0.5286624431610107, 0.2779474854469299, -0.5286624431610107, 0.2779474854469299, 0.4585985541343689, -0.127438485622406, 0.4522295594215393], 0
                        ]
                    ]]
                ],
                [
                    ["Turret", Y, 0xd6bd4a9e94fe9],
                    ["CustomMovement", Z, 0x833f26688709e],
                    ["Timer", X, 477936835301944]
                ], !1, !1, 0xcefdd466a828d, [], null
            ],
            ["t6", Q, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 6504422980426923, [
                        ["files/images/trench-sheet0.png", 15914, 0, 0, 148, 741, 1, 0.5, 0.5006747841835022, [],
                            [-0.06756800413131714, -0.5006747841835022, 0.1216210126876831, -0.5006747841835022, 0.1148650050163269, 0.4993252158164978, -0.07432401180267334, 0.4993252158164978], 0
                        ]
                    ]]
                ],
                [], !1, !1, 7498376922145243, [], null
            ],
            ["t7", Q, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 7885933012313842, [
                        ["files/images/trench-sheet0.png", 15914, 0, 0, 148, 741, 1, 0.5, 0.5006747841835022, [],
                            [-0.5, -0.5006747841835022, 0.5, -0.5006747841835022, 0.5, 0.4939272403717041, -0.5, 0.4993252158164978], 0
                        ]
                    ]]
                ],
                [], !1, !1, 0x72004606a228c, [], null
            ],
            ["t8", Q, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0xae3db3d2fea, [
                        ["files/images/slideright-sheet0.png", 893, 0, 0, 162, 888, 1, 0.5, 0.5, [],
                            [], 0
                        ]
                    ]]
                ],
                [], !1, !1, 5888753959833015, [], null
            ],
            ["t9", Q, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0x4e2e41b096f36, [
                        ["files/images/slideleft-sheet0.png", 895, 0, 0, 162, 888, 1, 0.5, 0.5, [],
                            [], 0
                        ]
                    ]]
                ],
                [], !1, !1, 496528184153004, [], null
            ],
            ["t10", Q, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 470026734892794, [
                        ["files/images/bluepointer-sheet0.png", 344, 0, 0, 35, 33, 1, 0.5142857432365417, 0.5151515007019043, [],
                            [-0.4857143461704254, -0.4848484992980957, -0.02857175469398499, -0.5151515007019043, 0.457143247127533, -0.4848484992980957, 0.4857142567634583, -0.03030350804328919, 0.3428572416305542, 0.3333334922790527, -0.02857175469398499, 0.4848484992980957, -0.3714287281036377, 0.3333334922790527, -0.5142857432365417, -0.03030350804328919], 0
                        ]
                    ]]
                ],
                [], !1, !1, 0xce5c3c054b379, [], null
            ],
            ["t11", Q, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 5171097279967638, [
                        ["files/images/minimap-sheet0.png", 455, 0, 0, 1900, 57, 1, 0.5, 0.5087719559669495, [],
                            [], 1
                        ]
                    ]]
                ],
                [], !1, !1, 7815003300099009, [], null
            ],
            ["t12", Q, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 7861989052184439, [
                        ["files/images/redpointer-sheet0.png", 344, 0, 0, 35, 33, 1, 0.5142857432365417, 0.5151515007019043, [],
                            [-0.4857143461704254, -0.4848484992980957, -0.02857175469398499, -0.5151515007019043, 0.457143247127533, -0.4848484992980957, 0.4857142567634583, -0.03030350804328919, 0.3428572416305542, 0.3333334922790527, -0.02857175469398499, 0.4848484992980957, -0.3714287281036377, 0.3333334922790527, -0.5142857432365417, -0.03030350804328919], 0
                        ]
                    ]]
                ],
                [], !1, !1, 9161919998303740, [], null
            ],
            ["t13", Q, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0xffb824836fe2e, [
                        ["files/images/minimap_part-sheet0.png", 249, 0, 0, 950, 58, 1, 0.5, 0.5, [],
                            [], 0
                        ]
                    ]]
                ],
                [], !1, !1, 8593283540592815, [], null
            ],
            ["t14", Q, !1, [], 0, 0, null, [
                    ["Default", 10, !1, 1, 0, !1, 402943181197226, [
                        ["files/images/blue_rifleman_die-sheet0.png", 35571, 146, 1, 135, 156, 1, 0.3037036955356598, 0.4935897290706635, [],
                            [-0.1703706979751587, -0.378204733133316, 0.1925922930240631, -0.4358974397182465, 0.5037033557891846, -0.3269227147102356, 0.333333283662796, 0.006410270929336548, 0.1703703105449677, 0.05128225684165955, 0.1925922930240631, 0.5064102411270142, -0.3037036955356598, 0.5064102411270142, -0.2740741074085236, 0.006410270929336548], 0
                        ],
                        ["files/images/blue_rifleman_die-sheet0.png", 35571, 1, 1, 143, 149, 1, 0.3496503531932831, 0.4966442883014679, [],
                            [0.1468536555767059, -0.4966442883014679, 0.3846156299114227, -0.2416102886199951, 0.3706296384334564, -2.980232238769531E-7, 0.2657346427440643, 0.1342277228832245, 0.1468536555767059, 0.5033557415008545, -0.3146853446960449, 0.4697987139225006, -0.2867132425308228, -2.980232238769531E-7], 0
                        ],
                        ["files/images/blue_rifleman_die-sheet0.png", 35571, 283, 1, 132, 157, 1, 0.3863636255264282, 0.4458598792552948, [],
                            [-0.09848463535308838, -0.2038218826055527, 0.1136363744735718, -0.426751583814621, 0.4318183660507202, -0.2929938733577728, 0.4318183660507202, 0.05095511674880981, 0.2045453786849976, 0.2101911008358002, 0.1136363744735718, 0.4331211149692535, -0.2499996274709702, 0.4394901096820831, -0.2196966260671616, 0.05095511674880981], 0
                        ],
                        ["files/images/blue_rifleman_die-sheet0.png", 35571, 152, 160, 144, 129, 1, 0.3263888955116272, 0.3178294599056244, [],
                            [-0.1597218960523605, -0.1317824572324753, 0.1736111044883728, -0.1317824572324753, 0.541667103767395, -0.1705424636602402, 0.6527780890464783, 0.1782945394515991, 0.3472220897674561, 0.3178295195102692, 0.1736111044883728, 0.5426355600357056, -0.2638888955116272, 0.6124035120010376], 0
                        ],
                        ["files/images/blue_rifleman_die-sheet0.png", 35571, 1, 159, 149, 132, 1, 0.2953020036220551, 0.3333333432674408, [],
                            [-0.1342280060052872, -0.1515153497457504, 0.201341986656189, -0.1666663438081741, 0.5503360033035278, -0.1590913385152817, 0.3020130097866058, 0.1666666567325592, 0.5637580156326294, 0.5075756311416626, 0.201341986656189, 0.5151516199111938, -0.2214764952659607, 0.5833336114883423], 0
                        ]
                    ]]
                ],
                [], !1, !1, 5176242929968708, [], null
            ],
            ["t15", Q, !1, [], 0, 0, null, [
                    ["Default", 10, !1, 1, 0, !1, 8890776537147299, [
                        ["files/images/red_rifleman_die-sheet0.png", 39062, 146, 1, 135, 156, 1, 0.7185184955596924, 0.5, [],
                            [-0.5259255170822144, -0.3333330154418945, -0.2222225069999695, -0.442307710647583, 0.1481484770774841, -0.3846150040626526, 0.251851499080658, 0, 0.2814815044403076, 0.5, -0.2222225069999695, 0.5, -0.1925925016403198, 0.044871985912323, -0.3555555045604706, 0], 0
                        ],
                        ["files/images/red_rifleman_die-sheet0.png", 39062, 1, 1, 143, 149, 1, 0.7062937021255493, 0.47651007771492, [],
                            [-0.4405597150325775, -0.2214760780334473, -0.2097896933555603, -0.47651007771492, 0.2307692766189575, 0.02013391256332398, 0.2587413191795349, 0.4899329245090485, -0.2097896933555603, 0.5234899520874023, -0.3216786980628967, 0.1543619334697723, -0.4265736937522888, 0.02013391256332398], 0
                        ],
                        ["files/images/red_rifleman_die-sheet0.png", 39062, 283, 1, 132, 157, 1, 0.7045454382896423, 0.4076433181762695, [],
                            [-0.5227274298667908, -0.2547773122787476, -0.2045454382896423, -0.3885350227355957, 0.007575571537017822, -0.1656053215265274, 0.1287875771522522, 0.08917167782783508, 0.1590905785560608, 0.4777066707611084, -0.2045454382896423, 0.4713376760482788, -0.2954544425010681, 0.2484076619148254, -0.5227274298667908, 0.08917167782783508], 0
                        ],
                        ["files/images/red_rifleman_die-sheet0.png", 39062, 152, 160, 144, 129, 1, 0.6805555820465088, 0.3100775182247162, [],
                            [-0.548611581325531, -0.162790521979332, -0.1805555820465088, -0.1085275113582611, 0.1527774333953857, -0.1240305155515671, 0.2569443583488464, 0.6201554536819458, -0.1805555820465088, 0.5503875017166138, -0.3541665971279144, 0.3255814611911774, -0.6597222685813904, 0.1860464811325073], 0
                        ],
                        ["files/images/red_rifleman_die-sheet0.png", 39062, 1, 159, 149, 132, 1, 0.6912751793861389, 0.3030303120613098, [],
                            [-0.5369131565093994, -0.1287883073091507, -0.1946311891078949, -0.1363633126020432, 0.1476508378982544, -0.1212123185396195, 0.2348998188972473, 0.6136366724967957, -0.1946311891078949, 0.5454546809196472, -0.550335168838501, 0.537878692150116, -0.2885901927947998, 0.1969696879386902], 0
                        ]
                    ]]
                ],
                [], !1, !1, 0x5249e56e28c99, [], null
            ],
            ["t16", Q, !1, [0x90edbdeca27f5, 330857348083068, 0x8a833525fc583], 3, 0, null, [
                    ["stand", 5, !1, 1, 0, !1, 8141189361408727, [
                        ["files/images/blue_sniper-sheet0.png", 44025, 146, 153, 143, 150, 1, 0.2727272808551788, 0.5, [],
                            [-0.2237762808799744, -0.5, 0.258741706609726, -0.5, 0.258741706609726, 0.4933329820632935, -0.2237762808799744, 0.4866669774055481], 0
                        ]
                    ]],
                    ["walk", 10, !0, 1, 0, !1, 8061091626511426, [
                        ["files/images/blue_sniper-sheet0.png", 44025, 291, 154, 143, 150, 1, 0.2727272808551788, 0.5066666603088379, [],
                            [-0.2237762808799744, -0.5066666603088379, 0.258741706609726, -0.5066666603088379, 0.258741706609726, 0.4866663217544556, -0.2237762808799744, 0.4800003170967102], 0
                        ],
                        ["files/images/blue_sniper-sheet0.png", 44025, 146, 305, 143, 146, 1, 0.2727272808551788, 0.5068492889404297, [],
                            [-0.2237762808799744, -0.5068492889404297, 0.258741706609726, -0.5068492889404297, 0.258741706609726, 0.4864836931228638, -0.2237762808799744, 0.4798176884651184], 0
                        ],
                        ["files/images/blue_sniper-sheet0.png", 44025, 359, 1, 146, 151, 1, 0.2945205569267273, 0.5099337697029114, [],
                            [-0.2455695569515228, -0.5099337697029114, 0.2369484305381775, -0.5099337697029114, 0.2369484305381775, 0.4833992123603821, -0.2455695569515228, 0.4767332077026367], 0
                        ],
                        ["files/images/blue_sniper-sheet0.png", 44025, 1, 153, 143, 154, 1, 0.2727272808551788, 0.5129870176315308, [],
                            [-0.2237762808799744, -0.5129870176315308, 0.258741706609726, -0.5129870176315308, 0.258741706609726, 0.4803459644317627, -0.2237762808799744, 0.4736799597740173], 0
                        ]
                    ]],
                    ["fire", 5, !1, 1, 0, !1, 0xc262ae74e14fc, [
                        ["files/images/blue_sniper-sheet0.png", 44025, 181, 1, 176, 150, 1, 0.2954545319080353, 0.5133333206176758, [
                                ["Imagepoint 1", 1.022727251052856, 0.300000011920929]
                            ],
                            [-0.2465035319328308, -0.5133333206176758, 0.1166964769363403, -0.5066666603088379, 0.1166964769363403, 0.4666666984558106, -0.2465035319328308, 0.4733336567878723], 0
                        ],
                        ["files/images/blue_sniper-sheet0.png", 44025, 1, 1, 178, 150, 1, 0.2696629166603088, 0.5133333206176758, [
                                ["Imagepoint 1", 1.028089880943298, 0.2933333218097687]
                            ],
                            [-0.2600377202033997, -0.5133333206176758, 0.1157390773296356, -0.5133333206176758, 0.1157390773296356, 0.4733327031135559, -0.2600377202033997, 0.4666666984558106], 0
                        ]
                    ]],
                    ["aim", 5, !1, 1, 0, !1, 7986249188656539, [
                        ["files/images/blue_sniper-sheet0.png", 44025, 1, 1, 178, 150, 1, 0.2752808928489685, 0.5133333206176758, [],
                            [-0.271273672580719, -0.5133333206176758, 0.110121101140976, -0.5133333206176758, 0.110121101140976, 0.4799996614456177, -0.2656556963920593, 0.4666666984558106], 0
                        ]
                    ]]
                ],
                [
                    ["Turret", Y, 9697538041895228],
                    ["CustomMovement", Z, 0x39a3b102822e8],
                    ["Timer", X, 0x8f7e42b9c09c3]
                ], !1, !1, 6167006147272374, [], null
            ],
            ["t17", Q, !1, [0x43fc685bda759], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 7646857749540184, [
                        ["files/images/sniper_button-sheet0.png", 42930, 1, 1, 371, 294, 1, 0.5013477206230164, 0.5, [],
                            [-0.4663073122501373, -0.4557822942733765, -0.002695709466934204, -0.5, 0.4339622855186462, -0.4183672964572907, 0.45013427734375, 0, 0.4070082902908325, 0.3843539953231812, -0.002695709466934204, 0.4183670282363892, -0.4285714030265808, 0.4081630110740662, -0.5013477206230164, 0], 0
                        ]
                    ]],
                    ["load", 5, !1, 1, 0, !1, 0xbefc534b256db, [
                        ["files/images/sniper_button-sheet0.png", 42930, 374, 1, 371, 294, 1, 0.5013477206230164, 0.5, [],
                            [], 0
                        ],
                        ["files/images/sniper_button-sheet0.png", 42930, 1, 297, 371, 294, 1, 0.5013477206230164, 0.5, [],
                            [], 0
                        ],
                        ["files/images/sniper_button-sheet0.png", 42930, 374, 297, 371, 294, 1, 0.5013477206230164, 0.5, [],
                            [], 0
                        ],
                        ["files/images/sniper_button-sheet0.png", 42930, 1, 593, 371, 294, 1, 0.5013477206230164, 0.5, [],
                            [], 0
                        ],
                        ["files/images/sniper_button-sheet0.png", 42930, 374, 593, 371, 294, 1, 0.5013477206230164, 0.5, [],
                            [], 0
                        ]
                    ]],
                    ["disable", 5, !1, 1, 0, !1, 975634408782825, [
                        ["files/images/sniper_button-sheet1.png", 7677, 0, 0, 371, 294, 1, 0.5013477206230164, 0.5, [],
                            [-0.4663073122501373, -0.4557822942733765, -0.002695709466934204, -0.5, 0.4339622855186462, -0.4183672964572907, 0.45013427734375, 0, 0.4070082902908325, 0.3843539953231812, -0.002695709466934204, 0.4183670282363892, -0.4285714030265808, 0.4081630110740662, -0.5013477206230164, 0], 0
                        ]
                    ]]
                ],
                [
                    ["Timer", X, 0x9daab3771b511]
                ], !1, !1, 0x86572f4e0f988, [], null
            ],
            ["t18", Q, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 7826671565276169, [
                        ["files/images/trench-sheet0.png", 15914, 0, 0, 148, 741, 1, 0.5, 0.5006747841835022, [],
                            [-0.5, -0.5006747841835022, 0.5, -0.5006747841835022, 0.5, 0.4939272403717041, -0.5, 0.4993252158164978], 0
                        ]
                    ]]
                ],
                [], !1, !1, 9281974599746404, [], null
            ],
            ["t19", Q, !1, [], 0, 0, null, [
                    ["Default", 10, !1, 1, 0, !1, 76909432268601, [
                        ["files/images/blue_sniper_die-sheet0.png", 38540, 1, 1, 150, 160, 1, 0.3066666722297669, 0.5375000238418579, [],
                            [-0.1199996769428253, -0.362500011920929, 0.1933333277702332, -0.2937500178813934, 0.6800003051757812, -0.5250000357627869, 0.2266663312911987, 0.02499997615814209, -0.3066666722297669, 0.4624999761581421, -0.2799999713897705, -0.03750002384185791], 0
                        ],
                        ["files/images/blue_sniper_die-sheet0.png", 38540, 306, 1, 152, 146, 1, 0.3486842215061188, 0.5, [],
                            [-0.1250002235174179, -0.2671229839324951, 0.1513157784938812, -0.4931506812572479, 0.3289477527141571, -0.1643840074539185, 0.3092108070850372, 0, 0.2565787732601166, 0.08904099464416504, 0.1513157784938812, 0.3013700246810913, -0.3223684132099152, 0.4726030230522156, -0.2302632182836533, 0], 0
                        ],
                        ["files/images/blue_sniper_die-sheet0.png", 38540, 153, 1, 151, 153, 1, 0.3841059505939484, 0.4444444477558136, [],
                            [-0.1523179560899735, -0.2156864404678345, 0.1125830411911011, -0.4117647409439087, 0.3112580478191376, -0.1437904536724091, 0.2913910448551178, 0.05228754878044128, 0.2119200527667999, 0.1568625271320343, -0.3178807497024536, 0.49019655585289, -0.2384109497070313, 0.05228754878044128], 0
                        ],
                        ["files/images/blue_sniper_die-sheet0.png", 38540, 1, 163, 164, 125, 1, 0.3292683064937592, 0.3199999928474426, [],
                            [-0.2073173075914383, -0.1599999964237213, 0.1707316935062408, -0.239999994635582, 0.3780486881732941, 0.06400001049041748, 0.4024386703968048, 0.1759999990463257, 0.3353656828403473, 0.2400000095367432, 0.1707316935062408, 0.472000002861023, -0.2378049045801163, 0.5600000023841858], 0
                        ],
                        ["files/images/blue_sniper_die-sheet0.png", 38540, 306, 149, 169, 127, 1, 0.2958579957485199, 0.3307086527347565, [],
                            [-0.1775150001049042, -0.1732286512851715, 0.2011829912662506, -0.2598425447940826, 0.396450012922287, 0.07874035835266113, 0.230769008398056, 0.1653543412685394, 0.5502959489822388, 0.4645673334598541, 0.2011829912662506, 0.4960633218288422, -0.248520702123642, 0.6062994003295898, -0.195265993475914, 0.1653543412685394], 0
                        ]
                    ]]
                ],
                [], !1, !1, 6849016929771144, [], null
            ],
            ["t20", Q, !1, [5629383504560206, 51627527068132, 6176784491223815], 3, 0, null, [
                    ["stand", 5, !1, 1, 0, !1, 7474468794709139, [
                        ["files/images/red_sniper-sheet0.png", 47827, 146, 153, 143, 150, 1, 0.7272727489471436, 0.5266666412353516, [],
                            [-0.2377627491950989, -0.5266666412353516, 0.2097902297973633, -0.5133333206176758, 0.2097902297973633, 0.4666663408279419, -0.2377627491950989, 0.4733333587646484], 0
                        ]
                    ]],
                    ["walk", 10, !0, 1, 0, !1, 0xbf47c98144270, [
                        ["files/images/red_sniper-sheet0.png", 47827, 291, 154, 143, 150, 1, 0.7342657446861267, 0.5266666412353516, [],
                            [-0.244755744934082, -0.5266666412353516, 0.2027972340583801, -0.5133333206176758, 0.2027972340583801, 0.4666663408279419, -0.244755744934082, 0.4733333587646484], 0
                        ],
                        ["files/images/red_sniper-sheet0.png", 47827, 146, 305, 143, 146, 1, 0.7202796936035156, 0.5273972749710083, [],
                            [-0.230769693851471, -0.5273972749710083, 0.2167832851409912, -0.5140639543533325, 0.2167832851409912, 0.4659357070922852, -0.230769693851471, 0.4726027250289917], 0
                        ],
                        ["files/images/red_sniper-sheet0.png", 47827, 359, 1, 146, 151, 1, 0.7123287916183472, 0.5298013091087341, [],
                            [-0.2228187918663025, -0.5298013091087341, 0.2247341871261597, -0.5164679884910583, 0.2247341871261597, 0.4635316729545593, -0.2228187918663025, 0.4701986908912659], 0
                        ],
                        ["files/images/red_sniper-sheet0.png", 47827, 1, 153, 143, 154, 1, 0.7342657446861267, 0.5324675440788269, [],
                            [-0.244755744934082, -0.5324675440788269, 0.2027972340583801, -0.5191342234611511, 0.2027972340583801, 0.4608654379844666, -0.244755744934082, 0.4675324559211731], 0
                        ]
                    ]],
                    ["fire", 5, !1, 1, 0, !1, 0xb4b7d66c9a8ff, [
                        ["files/images/red_sniper-sheet0.png", 47827, 181, 1, 176, 150, 1, 0.6818181872367859, 0.5266666412353516, [
                                ["Imagepoint 1", -0.01704545505344868, 0.300000011920929]
                            ],
                            [-0.09571719169616699, -0.5266666412353516, 0.2722898125648499, -0.5266666412353516, 0.2722898125648499, 0.4466663599014282, -0.09571719169616699, 0.4666663408279419], 0
                        ],
                        ["files/images/red_sniper-sheet0.png", 47827, 1, 1, 178, 150, 1, 0.7078651785850525, 0.5266666412353516, [
                                ["Imagepoint 1", -0.02808988839387894, 0.2933333218097687]
                            ],
                            [-0.08352416753768921, -0.5266666412353516, 0.2741418480873108, -0.5199999809265137, 0.2741418480873108, 0.4600003361701965, -0.08914220333099365, 0.4666663408279419], 0
                        ]
                    ]],
                    ["aim", 5, !1, 1, 0, !1, 0xe14f1bb14e840, [
                        ["files/images/red_sniper-sheet0.png", 47827, 1, 1, 178, 150, 1, 0.7191011309623718, 0.5266666412353516, [],
                            [-0.1116141080856323, -0.5133333206176758, 0.2629058957099915, -0.5133333206176758, 0.2629058957099915, 0.4666663408279419, -0.1116141080856323, 0.4733333587646484], 0
                        ]
                    ]]
                ],
                [
                    ["Turret", Y, 9898674233783364],
                    ["CustomMovement", Z, 9704033446831732],
                    ["Timer", X, 0xcaad5840c4112]
                ], !1, !1, 7143730335062886, [], null
            ],
            ["t21", Q, !1, [], 0, 0, null, [
                    ["Default", 10, !1, 1, 0, !1, 6875510439494266, [
                        ["files/images/red_sniper_die-sheet0.png", 42444, 1, 1, 150, 160, 1, 0.7333333492279053, 0.512499988079071, [],
                            [-0.7200000286102295, -0.5, -0.2333333492279053, -0.356249988079071, 0.07999962568283081, -0.3374999761581421, 0.2399996519088745, -0.01249998807907105, 0.2666666507720947, 0.487500011920929, -0.2333333492279053, 0.06875002384185791, -0.2666663527488709, 0.05000001192092896], 0
                        ],
                        ["files/images/red_sniper_die-sheet0.png", 42444, 306, 1, 152, 146, 1, 0.7039473652839661, 0.4794520437717438, [],
                            [-0.3815793693065643, -0.1438360512256622, -0.2039473652839661, -0.4794520437717438, 0.07236862182617188, -0.2465750426054001, 0.1776316165924072, 0.02054795622825623, 0.269736647605896, 0.4931509792804718, -0.2039473652839661, 0.513698935508728, -0.3092103600502014, 0.1095889508724213, -0.3618423640727997, 0.02054795622825623], 0
                        ],
                        ["files/images/red_sniper_die-sheet0.png", 42444, 153, 1, 151, 153, 1, 0.7019867300987244, 0.4052287638187408, [],
                            [-0.3973507285118103, -0.1045747697353363, -0.2052977383136749, -0.3725490570068359, 0.06622529029846191, -0.1764707565307617, 0.1523182988166809, 0.09150323271751404, 0.2317882776260376, 0.5294122695922852, -0.2980127334594727, 0.1960782110691071, -0.3774837255477905, 0.09150323271751404], 0
                        ],
                        ["files/images/red_sniper_die-sheet0.png", 42444, 1, 163, 164, 125, 1, 0.6829268336296082, 0.3120000064373016, [],
                            [-0.3902438282966614, 0.07199999690055847, -0.1829268336296082, -0.232000008225441, 0.1951221823692322, -0.1520000100135803, 0.2256101369857788, 0.5679999589920044, -0.1829268336296082, 0.464000016450882, -0.3475608229637146, 0.2479999959468842, -0.4146338403224945, 0.1839999854564667], 0
                        ],
                        ["files/images/red_sniper_die-sheet0.png", 42444, 306, 149, 169, 127, 1, 0.692307710647583, 0.2992126047611237, [],
                            [-0.3846157193183899, 0.110236406326294, -0.1952667236328125, -0.2283464968204498, 0.1893492937088013, -0.1417326033115387, 0.2071002721786499, 0.1968503892421722, 0.2603552937507629, 0.6377954483032227, -0.1952667236328125, 0.5275593996047974, -0.5384616851806641, 0.4960633814334869, -0.2189347147941589, 0.1968503892421722], 0
                        ]
                    ]]
                ],
                [], !1, !1, 8128138338386162, [], null
            ],
            ["t22", Q, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 4594596303828181, [
                        ["files/images/pause_button-sheet0.png", 4927, 0, 0, 377, 153, 1, 0.5013262629508972, 0.5032680034637451, [],
                            [-0.4854111671447754, -0.5032680034637451, -0.002652257680892944, -0.5032680034637451, 0.4350127577781677, -0.4705882072448731, 0.4509287476539612, -0.006536006927490234, 0.4244027137756348, 0.3725489974021912, -0.002652257680892944, 0.3398690223693848, -0.4297082722187042, 0.3202610015869141, -0.5013262629508972, -0.006536006927490234], 0
                        ]
                    ]]
                ],
                [], !1, !1, 9193816167169934, [], null
            ],
            ["t23", Q, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0x7080eacb24473, [
                        ["files/images/money_background-sheet0.png", 6245, 0, 0, 377, 153, 1, 0.5013262629508972, 0.5032680034637451, [],
                            [-0.466843456029892, -0.4183006882667542, -0.002652257680892944, -0.5032680034637451, 0.4350127577781677, -0.3464049994945526, 0.4509287476539612, -0.006536006927490234, 0.4084877371788025, 0.2745099663734436, -0.002652257680892944, 0.3398690223693848, -0.4297082722187042, 0.3202610015869141, -0.5013262629508972, -0.006536006927490234], 0
                        ]
                    ]]
                ],
                [], !1, !1, 0xe59d0732674c4, [], null
            ],
            ["t24", Q, !1, [0xf934733cae894], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0xcfd01c06a3322, [
                        ["files/images/mortar_button-sheet0.png", 50907, 1, 1, 371, 294, 1, 0.5013477206230164, 0.5, [],
                            [-0.4663073122501373, -0.4557822942733765, -0.002695709466934204, -0.5, 0.4339622855186462, -0.4183672964572907, 0.45013427734375, 0, 0.4070082902908325, 0.3843539953231812, -0.002695709466934204, 0.4183670282363892, -0.4285714030265808, 0.4081630110740662, -0.5013477206230164, 0], 0
                        ]
                    ]],
                    ["load", 5, !1, 1, 0, !1, 7794992050702566, [
                        ["files/images/mortar_button-sheet0.png", 50907, 374, 1, 371, 294, 1, 0.5013477206230164, 0.5, [],
                            [], 0
                        ],
                        ["files/images/mortar_button-sheet0.png", 50907, 1, 297, 371, 294, 1, 0.5013477206230164, 0.5, [],
                            [], 0
                        ],
                        ["files/images/mortar_button-sheet0.png", 50907, 374, 297, 371, 294, 1, 0.5013477206230164, 0.5, [],
                            [], 0
                        ],
                        ["files/images/mortar_button-sheet0.png", 50907, 1, 593, 371, 294, 1, 0.5013477206230164, 0.5, [],
                            [], 0
                        ],
                        ["files/images/mortar_button-sheet0.png", 50907, 374, 593, 371, 294, 1, 0.5013477206230164, 0.5, [],
                            [], 0
                        ]
                    ]],
                    ["disable", 5, !1, 1, 0, !1, 0x63abe1979a3bb, [
                        ["files/images/sniper_button-sheet1.png", 7677, 0, 0, 371, 294, 1, 0.5013477206230164, 0.5, [],
                            [-0.4663073122501373, -0.4557822942733765, -0.002695709466934204, -0.5, 0.4339622855186462, -0.4183672964572907, 0.45013427734375, 0, 0.4070082902908325, 0.3843539953231812, -0.002695709466934204, 0.4183670282363892, -0.4285714030265808, 0.4081630110740662, -0.5013477206230164, 0], 0
                        ]
                    ]]
                ],
                [
                    ["Timer", X, 4717575404306075]
                ], !1, !1, 0xde66acac0a39f, [], null
            ],
            ["t25", Q, !1, [], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0xd5d3d6960d1de, [
                        ["files/images/mortar_aim-sheet0.png", 6037, 0, 0, 291, 291, 1, 0.5017182230949402, 0.5017182230949402, [],
                            [-0.2852232158184052, -0.2852232158184052, -0.003436237573623657, -0.5017182230949402, 0.2817867994308472, -0.2852232158184052, 0.4982817769050598, -0.003436237573623657, 0.2817867994308472, 0.2817867994308472, -0.003436237573623657, 0.4982817769050598, -0.2852232158184052, 0.2817867994308472, -0.5017182230949402, -0.003436237573623657], 0
                        ]
                    ]]
                ],
                [
                    ["DragDrop", Ub, 0xdad4bb8fbdfa3]
                ], !1, !1, 0x993f233e3eae7, [], null
            ],
            ["t26", Q, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 4640347702301846, [
                        ["files/images/mortar_hit-sheet0.png", 6503, 0, 0, 166, 93, 1, 0.5060241222381592, 0.5053763389587402, [],
                            [-0.3012051284313202, -0.290322333574295, 0.01204788684844971, -0.3870963454246521, 0.3072288632392883, -0.290322333574295, 0.3012048602104187, 0.1827956438064575, -0.03614410758018494, 0.3440856337547302, -0.2951811254024506, 0.2043006420135498], 0
                        ]
                    ]]
                ],
                [], !1, !1, 0xf64f3b7c9ce9b, [], null
            ],
            ["t27", Tb, !1, [], 0, 0, ["files/images/mortar_effect.png", 577, 0], null, [], !1, !1, 0xb27a70d113dcf, [], null],
            ["t28", Q, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 824519211393707, [
                        ["files/images/mortar_ground-sheet0.png", 630, 0, 0, 43, 19, 1, 0.5116279125213623, 0.5263158082962036, [],
                            [-0.4186046123504639, -0.3157898187637329, -0.02325591444969177, -0.4736841917037964, 0.3953490853309631, -0.3157898187637329, 0.4883720874786377, -0.05263179540634155, 0.3953490853309631, 0.2631582021713257, -0.02325591444969177, 0.4210522174835205, -0.4186046123504639, 0.2631582021713257, -0.5116279125213623, -0.05263179540634155], 0
                        ]
                    ]]
                ],
                [], !1, !1, 0xe75b83453ab5b, [], null
            ],
            ["t29", Q, !1, [0xf5a22dc1f3845], 1, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0xe8865ca6a1af5, [
                        ["files/images/smg_button-sheet0.png", 44100, 1, 1, 371, 294, 1, 0.5013477206230164, 0.5, [],
                            [-0.4663073122501373, -0.4557822942733765, -0.002695709466934204, -0.5, 0.4339622855186462, -0.4183672964572907, 0.45013427734375, 0, 0.4070082902908325, 0.3843539953231812, -0.002695709466934204, 0.4183670282363892, -0.4285714030265808, 0.4081630110740662, -0.5013477206230164, 0], 0
                        ]
                    ]],
                    ["load", 5, !1, 1, 0, !1, 0xbe3da8b774345, [
                        ["files/images/smg_button-sheet0.png", 44100, 374, 1, 371, 294, 1, 0.5013477206230164, 0.5, [],
                            [], 0
                        ],
                        ["files/images/smg_button-sheet0.png", 44100, 1, 297, 371, 294, 1, 0.5013477206230164, 0.5, [],
                            [], 0
                        ],
                        ["files/images/smg_button-sheet0.png", 44100, 374, 297, 371, 294, 1, 0.5013477206230164, 0.5, [],
                            [], 0
                        ],
                        ["files/images/smg_button-sheet0.png", 44100, 1, 593, 371, 294, 1, 0.5013477206230164, 0.5, [],
                            [], 0
                        ],
                        ["files/images/smg_button-sheet0.png", 44100, 374, 593, 371, 294, 1, 0.5013477206230164, 0.5, [],
                            [], 0
                        ]
                    ]],
                    ["disable", 5, !1, 1, 0, !1, 0x3d9b897b60527, [
                        ["files/images/sniper_button-sheet1.png", 7677, 0, 0, 371, 294, 1, 0.5013477206230164, 0.5, [],
                            [-0.4663073122501373, -0.4557822942733765, -0.002695709466934204, -0.5, 0.4339622855186462, -0.4183672964572907, 0.45013427734375, 0, 0.4070082902908325, 0.3843539953231812, -0.002695709466934204, 0.4183670282363892, -0.4285714030265808, 0.4081630110740662, -0.5013477206230164, 0], 0
                        ]
                    ]]
                ],
                [
                    ["Timer", X, 8924665355015988]
                ], !1, !1, 0xb02cb66eab28, [], null
            ],
            ["t30", Q, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0xec004e6f268a7, [
                        ["files/images/mortar_aim2-sheet0.png", 94, 0, 0, 50, 50, 1, 0.5, 0.5, [],
                            [], 1
                        ]
                    ]]
                ],
                [], !1, !1, 0xce8d7f1221380, [], null
            ],
            ["t31", Q, !1, [0xdc33977fb73cc, 4993221636234438, 0xe574d8ab0534e], 3, 0, null, [
                    ["stand", 5, !1, 1, 0, !1, 0xa7c55c5be89fb, [
                        ["files/images/blue_smg-sheet0.png", 41644, 120, 160, 117, 157, 1, 0.4017094075679779, 0.5286624431610107, [],
                            [-0.2905983924865723, -0.5222930312156677, 0.2820515930652618, -0.5286624431610107, 0.2820515930652618, 0.4585985541343689, -0.2905983924865723, 0.4713375568389893], 0
                        ]
                    ]],
                    ["walk", 10, !0, 1, 0, !1, 6254246981992132, [
                        ["files/images/blue_smg-sheet0.png", 41644, 239, 163, 117, 157, 1, 0.3846153914928436, 0.5286624431610107, [],
                            [-0.273504376411438, -0.5222930312156677, 0.2991456091403961, -0.5286624431610107, 0.2991456091403961, 0.4585985541343689, -0.273504376411438, 0.4713375568389893], 0
                        ],
                        ["files/images/blue_smg-sheet0.png", 41644, 358, 163, 117, 153, 1, 0.3931623995304108, 0.529411792755127, [],
                            [-0.2820513844490051, -0.5230423808097839, 0.290598601102829, -0.529411792755127, 0.290598601102829, 0.4578492045402527, -0.2820513844490051, 0.4705882072448731], 0
                        ],
                        ["files/images/blue_smg-sheet0.png", 41644, 1, 160, 117, 158, 1, 0.3846153914928436, 0.5316455960273743, [],
                            [-0.273504376411438, -0.5252761840820312, 0.2991456091403961, -0.5316455960273743, 0.2991456091403961, 0.4556154012680054, -0.273504376411438, 0.4683544039726257], 0
                        ],
                        ["files/images/blue_smg-sheet0.png", 41644, 319, 1, 117, 160, 1, 0.4017094075679779, 0.53125, [],
                            [-0.2905983924865723, -0.524880588054657, 0.2820515930652618, -0.53125, 0.2820515930652618, 0.4560109972953796, -0.2905983924865723, 0.46875], 0
                        ]
                    ]],
                    ["fire", 5, !1, 1, 0, !1, 4626034784886231, [
                        ["files/images/blue_smg-sheet0.png", 41644, 161, 1, 156, 157, 1, 0.3205128312110901, 0.5286624431610107, [
                                ["Imagepoint 1", 1.025641083717346, 0.3630573153495789]
                            ],
                            [-0.2927350401878357, -0.5286624431610107, 0.1260691583156586, -0.5286624431610107, 0.1260691583156586, 0.4585985541343689, -0.2927350401878357, 0.4585985541343689], 0
                        ],
                        ["files/images/blue_smg-sheet0.png", 41644, 1, 1, 158, 157, 1, 0.3037974536418915, 0.5286624431610107, [
                                ["Imagepoint 1", 1.03164553642273, 0.3630573153495789]
                            ],
                            [-0.2760196626186371, -0.5286624431610107, 0.1301265358924866, -0.5159235596656799, 0.1301265358924866, 0.4522295594215393, -0.2760196626186371, 0.4585985541343689], 0
                        ]
                    ]],
                    ["aim", 5, !1, 1, 0, !1, 8727094283148515, [
                        ["files/images/blue_smg-sheet0.png", 41644, 1, 1, 158, 157, 1, 0.3037974536418915, 0.5286624431610107, [],
                            [-0.2939521670341492, -0.5286624431610107, 0.1204695403575897, -0.5286624431610107, 0.1204695403575897, 0.4585985541343689, -0.2939521670341492, 0.4713375568389893], 0
                        ]
                    ]]
                ],
                [
                    ["Turret", Y, 6376928783503407],
                    ["CustomMovement", Z, 7237669349009153],
                    ["Timer", X, 0xcab855523fd41]
                ], !1, !1, 5904112049961709, [], null
            ],
            ["t32", Q, !1, [], 0, 0, null, [
                    ["Default", 10, !1, 1, 0, !1, 4858235914436656, [
                        ["files/images/blue_smg_die-sheet0.png", 37833, 156, 152, 130, 156, 1, 0.3615384697914124, 0.4871794879436493, [],
                            [-0.2230764627456665, -0.3717944920063019, 0.1384615302085877, -0.4358973801136017, 0.2999995350837708, -0.2051284909248352, 0.5692305564880371, 0.01282051205635071, 0.1999995112419128, 0.1474355161190033, 0.1384615302085877, 0.5128204822540283, -0.3615384697914124, 0.5128204822540283, -0.330769270658493, 0.01282051205635071], 0
                        ],
                        ["files/images/blue_smg_die-sheet0.png", 37833, 156, 1, 149, 149, 1, 0.3489933013916016, 0.4966442883014679, [],
                            [0.1476506888866425, -0.4966442883014679, 0.1879196763038635, -0.03355729579925537, 0.5704696774482727, -2.980232238769531E-7, 0.3221477270126343, 0.1744967401027679, 0.1476506888866425, 0.5033557415008545, -0.3154363036155701, 0.4697987139225006, -0.2885906100273132, -2.980232238769531E-7], 0
                        ],
                        ["files/images/blue_smg_die-sheet0.png", 37833, 307, 1, 135, 151, 1, 0.385185182094574, 0.443708598613739, [],
                            [-0.103704184293747, -0.1920526027679443, 0.1111108064651489, -0.4304636120796204, 0.422221839427948, -0.2715235948562622, 0.422221839427948, 0.05298039317131043, 0.2666668295860291, 0.2450333833694458, 0.1111108064651489, 0.470198392868042, -0.3481481671333313, 0.5231783986091614, -0.2148151844739914, 0.05298039317131043], 0
                        ],
                        ["files/images/blue_smg_die-sheet0.png", 37833, 1, 154, 148, 122, 1, 0.3243243098258972, 0.3196721374988556, [],
                            [-0.1621623039245606, -0.1229511350393295, 0.5270267128944397, -0.1393441408872604, 0.6756756901741028, 0.1803278625011444, 0.4256756901741028, 0.3770488798618317, 0.1756756901741028, 0.5163938999176025, -0.2905405163764954, 0.6393438577651978, -0.2027023136615753, 0.1803278625011444], 0
                        ],
                        ["files/images/blue_smg_die-sheet0.png", 37833, 1, 1, 153, 151, 1, 0.2875817120075226, 0.2781457006931305, [],
                            [-0.1307187080383301, -0.1192056983709335, 0.2091502845287323, -0.1456957012414932, 0.5424833297729492, -0.1059606969356537, 0.3137252628803253, 0.218543291091919, 0.437908262014389, 0.4437082707881928, 0.2091502845287323, 0.5231783390045166, -0.07189571857452393, 0.503311276435852, -0.1699347198009491, 0.218543291091919], 0
                        ]
                    ]]
                ],
                [], !1, !1, 9354788318600324, [], null
            ],
            ["t33", Q, !1, [9056156319336384, 9584120430927724, 8773518498786657], 3, 0, null, [
                    ["stand", 5, !1, 1, 0, !1, 726592614310432, [
                        ["files/images/red_smg-sheet0.png", 47211, 120, 160, 117, 157, 1, 0.6068376302719116, 0.5286624431610107, [],
                            [-0.2820516228675842, -0.5286624431610107, 0.2478633522987366, -0.5286624431610107, 0.2478633522987366, 0.4649685621261597, -0.2820516228675842, 0.4649685621261597], 0
                        ]
                    ]],
                    ["walk", 10, !0, 1, 0, !1, 5254818431832269, [
                        ["files/images/red_smg-sheet0.png", 47211, 239, 163, 117, 157, 1, 0.632478654384613, 0.5286624431610107, [],
                            [-0.3076926469802856, -0.5286624431610107, 0.2222223281860352, -0.5286624431610107, 0.2222223281860352, 0.4649685621261597, -0.3076926469802856, 0.4649685621261597], 0
                        ],
                        ["files/images/red_smg-sheet0.png", 47211, 358, 163, 117, 153, 1, 0.6239316463470459, 0.529411792755127, [],
                            [-0.2991456389427185, -0.529411792755127, 0.2307693362236023, -0.529411792755127, 0.2307693362236023, 0.4642192125320435, -0.2991456389427185, 0.4642192125320435], 0
                        ],
                        ["files/images/red_smg-sheet0.png", 47211, 1, 160, 117, 158, 1, 0.6153846383094788, 0.5316455960273743, [],
                            [-0.2905986309051514, -0.5316455960273743, 0.2393163442611694, -0.5316455960273743, 0.2393163442611694, 0.4619854092597961, -0.2905986309051514, 0.4619854092597961], 0
                        ],
                        ["files/images/red_smg-sheet0.png", 47211, 319, 1, 117, 160, 1, 0.6153846383094788, 0.53125, [],
                            [-0.2905986309051514, -0.53125, 0.2393163442611694, -0.53125, 0.2393163442611694, 0.4623810052871704, -0.2905986309051514, 0.4623810052871704], 0
                        ]
                    ]],
                    ["fire", 5, !1, 1, 0, !1, 0xf696f0a532c86, [
                        ["files/images/red_smg-sheet0.png", 47211, 161, 1, 156, 157, 1, 0.6730769276618958, 0.5286624431610107, [
                                ["Imagepoint 1", -0.02564102597534657, 0.3630573153495789]
                            ],
                            [-0.1239319443702698, -0.5286624431610107, 0.2841880917549133, -0.5222930312156677, 0.2841880917549133, 0.4585985541343689, -0.1239319443702698, 0.4649685621261597], 0
                        ],
                        ["files/images/red_smg-sheet0.png", 47211, 1, 1, 158, 157, 1, 0.6962025165557861, 0.5286624431610107, [
                                ["Imagepoint 1", -0.02531645633280277, 0.3630573153495789]
                            ],
                            [-0.1309095025062561, -0.5286624431610107, 0.2787514925003052, -0.5286624431610107, 0.2787514925003052, 0.4585985541343689, -0.1309095025062561, 0.4649685621261597], 0
                        ]
                    ]],
                    ["aim", 5, !1, 1, 0, !1, 0x92b5051dbf3f8, [
                        ["files/images/red_smg-sheet0.png", 47211, 1, 1, 158, 157, 1, 0.6962025165557861, 0.5286624431610107, [],
                            [-0.1309095025062561, -0.5286624431610107, 0.2724224925041199, -0.5286624431610107, 0.2724224925041199, 0.4585985541343689, -0.1309095025062561, 0.4585985541343689], 0
                        ]
                    ]]
                ],
                [
                    ["Turret", Y, 0x6306d45203c1f],
                    ["CustomMovement", Z, 4968157818962204],
                    ["Timer", X, 9397411336447536]
                ], !1, !1, 0xe7839af680c89, [], null
            ],
            ["t34", Q, !1, [], 0, 0, null, [
                    ["Default", 10, !1, 1, 0, !1, 840681956680776, [
                        ["files/images/red_smg_die-sheet0.png", 42801, 156, 152, 130, 156, 1, 0.7153846025466919, 0.5, [],
                            [-0.376922607421875, -0.2179490029811859, -0.2153846025466919, -0.4551281929016113, 0.1461533904075623, -0.3846150040626526, 0.2538464069366455, 0, 0.2846153974533081, 0.5, -0.2153846025466919, 0.5, -0.2769226133823395, 0.1346150040626526, -0.6461538076400757, 0], 0
                        ],
                        ["files/images/red_smg_die-sheet0.png", 42801, 156, 1, 149, 149, 1, 0.7046979665756226, 0.47651007771492, [],
                            [-0.24161097407341, -0.01342308521270752, -0.2080539762973785, -0.47651007771492, 0.2348990440368652, 0.02013391256332398, 0.261745035648346, 0.4899329245090485, -0.2080539762973785, 0.5234899520874023, -0.375838965177536, 0.1946309506893158, -0.6241610646247864, 0.02013391256332398], 0
                        ],
                        ["files/images/red_smg_die-sheet0.png", 42801, 307, 1, 135, 151, 1, 0.7037037014961243, 0.443708598613739, [],
                            [-0.5111107230186462, -0.2715235948562622, -0.2074077129364014, -0.4304636120796204, 0.01481431722640991, -0.1920526027679443, 0.1259263157844544, 0.05298039317131043, 0.2592592835426331, 0.5231783986091614, -0.2074077129364014, 0.470198392868042, -0.3555557131767273, 0.2450333833694458, -0.5111107230186462, 0.05298039317131043], 0
                        ],
                        ["files/images/red_smg_die-sheet0.png", 42801, 1, 154, 148, 122, 1, 0.6824324131011963, 0.3196721374988556, [],
                            [-0.5337834358215332, -0.1393441408872604, 0.155405580997467, -0.1229511350393295, 0.1959455609321594, 0.1803278625011444, 0.2837836146354675, 0.6393438577651978, -0.1824324131011963, 0.5901638269424438, -0.6824324131011963, 0.1803278625011444], 0
                        ],
                        ["files/images/red_smg_die-sheet0.png", 42801, 1, 1, 153, 151, 1, 0.6928104758262634, 0.2582781314849854, [],
                            [-0.5228754878044128, -0.08609312772750854, -0.1960784792900085, -0.1258281320333481, 0.1503265500068665, -0.09933812916278839, 0.1895425319671631, 0.2384108603000641, 0.09150350093841553, 0.5231788754463196, -0.1960784792900085, 0.5430458784103394, -0.4183004796504974, 0.4635758399963379, -0.2941174805164337, 0.2384108603000641], 0
                        ]
                    ]]
                ],
                [], !1, !1, 0xea74b56bfa3ee, [], null
            ],
            ["t35", Q, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 9604207056611960, [
                        ["files/images/logo-sheet0.png", 73483, 0, 0, 926, 691, 1, 0.5, 0.5007236003875732, [],
                            [-0.3228940069675446, -0.2926015853881836, 0, -0.3484396040439606, 0.3250539898872376, -0.2951396107673645, 0.2516199946403503, -7.236003875732422E-4, 0.4265660047531128, 0.4129824042320252, -0.3498920202255249, 0.3228803873062134, -0.4438444972038269, -7.236003875732422E-4], 0
                        ]
                    ]]
                ],
                [], !1, !1, 0xc9e2a53db7ad0, [], null
            ],
            ["t36", Q, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0xee16806f93271, [
                        ["files/images/skirmish_button-sheet0.png", 16402, 0, 0, 558, 200, 1, 0.5017921328544617, 0.5, [],
                            [-0.5017921328544617, -0.5, -0.00179213285446167, -0.5, 0.4946238398551941, -0.5, 0.4982078671455383, 0.5, -0.5017921328544617, 0.5], 0
                        ]
                    ]]
                ],
                [], !1, !1, 0xdaee2ef72b9d, [], null
            ],
            ["t37", R, !1, [], 0, 0, null, null, [], !1, !1, 5252751210191161, [], null],
            ["t38", R, !1, [], 0, 0, null, null, [], !1, !1, 0xc16e967b69b98, [], null],
            ["t39", R, !1, [], 0, 0, null, null, [], !1, !1, 5154897181499875, [], null],
            ["t40", R, !1, [], 0, 0, null, null, [], !1, !1, 7182055199348503, [], null],
            ["t41", R, !1, [], 0, 0, null, null, [], !1, !1, 7807365335603263, [], null],
            ["t42", Q, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 5084197674529758, [
                        ["files/images/pause_menu-sheet0.png", 37444, 0, 0, 1031, 696, 1, 0.5004849433898926, 0.5, [],
                            [-0.4655673503875732, -0.4482758939266205, -9.699463844299316E-4, -0.5, 0.4393790364265442, -0.4109194874763489, 0.4539280533790588, 0, 0.4151310324668884, 0.375, -9.699463844299316E-4, 0.420976996421814, -0.4345295429229736, 0.4022989869117737, -0.5004849433898926, 0], 0
                        ]
                    ]]
                ],
                [], !1, !1, 0xddbfdfa03a813, [], null
            ],
            ["t43", Q, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 5275547230133329, [
                        ["files/images/ply_btn-sheet0.png", 750, 0, 0, 115, 171, 1, 0.5043478012084961, 0.5029239654541016, [],
                            [], 0
                        ]
                    ]]
                ],
                [], !1, !1, 0xc6acee45b311f, [], null
            ],
            ["t44", Q, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0xd2bf415d06dd7, [
                        ["files/images/restart_btn-sheet0.png", 2376, 0, 0, 182, 166, 1, 0.5, 0.5, [],
                            [], 0
                        ]
                    ]]
                ],
                [], !1, !1, 0x4e2bb2a2e461c, [], null
            ],
            ["t45", Q, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 634280347727074, [
                        ["files/images/menu_btn-sheet0.png", 1251, 0, 0, 175, 169, 1, 0.5028571486473083, 0.5029585957527161, [],
                            [-0.491428554058075, -0.491124302148819, 0.4857138395309448, -0.491124302148819, 0.4857138395309448, 0.4852073788642883, -0.491428554058075, 0.4852073788642883], 0
                        ]
                    ]]
                ],
                [], !1, !1, 21942242359746, [], null
            ],
            ["t46", Q, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 7838849515887067, [
                        ["files/images/background-sheet0.png", 119392, 0, 0, 2001, 1356, 1, 0, 0, [],
                            [], 0
                        ]
                    ]]
                ],
                [], !1, !1, 9599216406763468, [], null
            ],
            ["t47", Q, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 9144474738446028, [
                        ["files/images/blue_win-sheet0.png", 94, 0, 0, 50, 50, 1, 0.5, 0.5, [],
                            [], 1
                        ]
                    ]]
                ],
                [], !1, !1, 0x655e82e7f583e, [], null
            ],
            ["t48", Q, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0x71d632ad42002, [
                        ["files/images/victory_text-sheet0.png", 23348, 0, 0, 1075, 203, 1, 0.5004650950431824, 0.5024630427360535, [],
                            [-0.4995348751544952, -0.4975369274616242, 0.4986048936843872, -0.4975369274616242, 0.4418609142303467, 0.1921179294586182, -9.30100679397583E-4, -0.3054190278053284, -0.4502325057983398, 0.2315269708633423], 0
                        ]
                    ]]
                ],
                [], !1, !1, 4525723735121199, [], null
            ],
            ["t49", Q, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0x92faa4d701aba, [
                        ["files/images/red_win-sheet0.png", 94, 0, 0, 50, 50, 1, 0.5, 0.5, [],
                            [], 1
                        ]
                    ]]
                ],
                [], !1, !1, 5157192951368172, [], null
            ],
            ["t50", Q, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 0xa0fc4871797c7, [
                        ["files/images/defeat_text-sheet0.png", 28273, 0, 0, 1067, 226, 1, 0.5004686117172241, 0.5, [],
                            [-0.4948453605175018, -0.4734512865543366, 0.4929713606834412, -0.469026505947113, 0.4470474123954773, 0, 0.4470474123954773, 0.2522119879722595, -9.376108646392822E-4, 0.4690269827842712, -0.49859419465065, 0.4911500215530396], 0
                        ]
                    ]]
                ],
                [], !1, !1, 5954333027506903, [], null
            ],
            ["t51", R, !1, [], 0, 0, null, null, [], !1, !1, 0x6dea6ca71bbbc, [], null],
            ["t52", R, !1, [], 0, 0, null, null, [], !1, !1, 8318829842856015, [], null],
            ["t53", R, !1, [], 0, 0, null, null, [], !1, !1, 0x94667c228811, [], null],
            ["t54", Q, !1, [], 0, 0, null, [
                    ["Default", 5, !1, 1, 0, !1, 5822541029380183, [
                        ["files/images/background-sheet0.png", 119392, 0, 0, 2001, 1356, 1, 0.5002498626708984, 0.5, [],
                            [], 0
                        ]
                    ]]
                ],
                [], !1, !1, 6792761270441923, [], null
            ],
            ["t55", Q, !0, [], 0, 0, null, null, [], !1, !1, 0xb52233a28467e, [], null],
            ["t56", Q, !0, [], 0, 0, null, null, [], !1, !1, 5415926738105054, [], null]
        ],
        [
            [55, 1, 14, 31, 32, 16, 19],
            [56, 5, 15, 33, 34, 20, 21]
        ],
        [
            ["skirmish", 3800, 1250, !1, "skirmish_sheet", 0xc0ac57ae98118, [
                    ["Layer 0", 0, 5446127294712797, !0, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [
                            [
                                [950.5, 625, 0, 2001, 1356, 0, 0, 1, 0.5002498626708984, 0.5, 0, 0, []], 0, 0, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [-1013, -985, 0, 127, 157, 0, 0, 1, 0.3070866167545319, 0.5286624431610107, 0, 0, []], 1, 1, [
                                    [3],
                                    [0],
                                    [0]
                                ],
                                [
                                    [600, 1, 0, 180, 1, 0, 500, 1, 1],
                                    [0, 5, 1],
                                    []
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [566, -1071, 0, 128, 128, 0, 0, 1, 0, 0.5, 0, 0, []], 3, 7, [],
                                [],
                                [10, 160, 1, 60, 20, 20, 0, 0, 0, 0, 0, 0, -150, -200, 0, 800, 0, 0, 1]
                            ],
                            [
                                [4874, -697, 0, 127, 157, 0, 0, 1, 0.6929134130477905, 0.5286624431610107, 0, 0, []], 5, 3, [
                                    [3],
                                    [0],
                                    [0]
                                ],
                                [
                                    [600, 1, 0, 180, 1, 0, 500, 1, 1],
                                    [0, 5, 1],
                                    []
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [419, 512, 0, 148, 741, 0, 0, 1, 0.5, 0.5006747841835022, 0, 0, []], 6, 2, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [472, 503, 0, 22, 741, 0, 0, 1, 0.5, 0.5006747841835022, 0, 0, []], 7, 6, [],
                                [],
                                [1, "Default", 0, 1]
                            ],
                            [
                                [2850, 631, 0, 2001, 1356, 0, 0, 1, 0.5002498626708984, 0.5, 0, 0, []], 0, 14, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [3401, 517, 0, 148, 741, 0, 0, 1, 0.5, 0.5006747841835022, 0, 0, []], 6, 10, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [3454, 508, 0, 22, 741, 0, 0, 1, 0.5, 0.5006747841835022, 0, 0, []], 7, 11, [],
                                [],
                                [1, "Default", 0, 1]
                            ],
                            [
                                [-772, -1004, 0, 135, 156, 0, 0, 1, 0.3037036955356598, 0.4935897290706635, 0, 0, []], 14, 21, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [4576, -724, 0, 135, 156, 0, 0, 1, 0.7185184955596924, 0.5, 0, 0, []], 15, 22, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [-1008, -759, 0, 143, 150, 0, 0, 1, 0.2727272808551788, 0.5, 0, 0, []], 16, 23, [
                                    [1],
                                    [0],
                                    [0]
                                ],
                                [
                                    [1300, 1, 0, 180, 1, 0, 500, 1, 1],
                                    [0, 5, 1],
                                    []
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [3350, 509, 0, 24, 741, 0, 0, 1, 0.5, 0.5006747841835022, 0, 0, []], 18, 25, [],
                                [],
                                [1, "Default", 0, 1]
                            ],
                            [
                                [369, 504, 0, 24, 741, 0, 0, 1, 0.5, 0.5006747841835022, 0, 0, []], 18, 26, [],
                                [],
                                [1, "Default", 0, 1]
                            ],
                            [
                                [-759, -780, 0, 150, 160, 0, 0, 1, 0.3066666722297669, 0.5375000238418579, 0, 0, []], 19, 29, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [4848, -948, 0, 143, 150, 0, 0, 1, 0.7272727489471436, 0.5266666412353516, 0, 0, []], 20, 30, [
                                    [1],
                                    [0],
                                    [0]
                                ],
                                [
                                    [1300, 1, 0, 180, 1, 0, 500, 1, 1],
                                    [0, 5, 1],
                                    []
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [4608, -972, 0, 150, 160, 0, 0, 1, 0.7333333492279053, 0.512499988079071, 0, 0, []], 21, 31, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [-264, -907, 0, 291, 291, 0, 0, 1, 0.5017182230949402, 0.5017182230949402, 0, 0, []], 25, 35, [],
                                [
                                    [0, 1]
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [-16, -1006, 0, 166, 93, 0, 0, 1, 0.5060241222381592, 0.5053763389587402, 0, 0, []], 26, 36, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [174, -1006, 0, 128, 128, 0, 0, 1, 0, 0.5, 0, 0, []], 27, 37, [],
                                [],
                                [50, 360, 1, 200, 32, 50, 0, 50, 0, 0, 20, 0, -150, 0, 0, 800, 0, 0, 1]
                            ],
                            [
                                [48, -860, 0, 43, 19, 0, 0, 1, 0.5116279125213623, 0.5263158082962036, 0, 0, []], 28, 38, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [1307, 517, 0, 148, 741, 0, 0, 1, 0.5, 0.5006747841835022, 0, 0, []], 6, 9, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [1360, 508, 0, 22, 741, 0, 0, 1, 0.5, 0.5006747841835022, 0, 0, []], 7, 15, [],
                                [],
                                [1, "Default", 0, 1]
                            ],
                            [
                                [1256, 509, 0, 24, 741, 0, 0, 1, 0.5, 0.5006747841835022, 0, 0, []], 18, 16, [],
                                [],
                                [1, "Default", 0, 1]
                            ],
                            [
                                [2497, 517, 0, 148, 741, 0, 0, 1, 0.5, 0.5006747841835022, 0, 0, []], 6, 27, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [2550, 508, 0, 22, 741, 0, 0, 1, 0.5, 0.5006747841835022, 0, 0, []], 7, 28, [],
                                [],
                                [1, "Default", 0, 1]
                            ],
                            [
                                [2446, 509, 0, 24, 741, 0, 0, 1, 0.5, 0.5006747841835022, 0, 0, []], 18, 39, [],
                                [],
                                [1, "Default", 0, 1]
                            ],
                            [
                                [-40, -758, 0, 50, 50, 0, 0, 1, 0.5, 0.5, 0, 0, []], 30, 40, [],
                                [],
                                [1, "Default", 0, 1]
                            ],
                            [
                                [-1007, -536, 0, 117, 157, 0, 0, 1, 0.4017094075679779, 0.5286624431610107, 0, 0, []], 31, 41, [
                                    [3],
                                    [0],
                                    [0]
                                ],
                                [
                                    [500, 1, 0, 180, 1, 0, 500, 1, 1],
                                    [0, 5, 1],
                                    []
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [-817, -561, 0, 130, 156, 0, 0, 1, 0.3615384697914124, 0.4871794879436493, 0, 0, []], 32, 42, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [4614, -461, 0, 117, 157, 0, 0, 1, 0.6068376302719116, 0.5286624431610107, 0, 0, []], 33, 43, [
                                    [3],
                                    [0],
                                    [0]
                                ],
                                [
                                    [500, 1, 0, 180, 1, 0, 500, 1, 1],
                                    [0, 5, 1],
                                    []
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [4871, -451, 0, 130, 156, 0, 0, 1, 0.7153846025466919, 0.5, 0, 0, []], 34, 44, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [1562, -858, 0, 1031, 696, 0, 0, 1, 0.5004849433898926, 0.5, 0, 0, []], 42, 56, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [2297, -907, 0, 115, 171, 0, 0, 1, 0.5043478012084961, 0.5029239654541016, 0, 0, []], 43, 57, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [2552, -899, 0, 182, 166, 0, 0, 1, 0.5, 0.5, 0, 0, []], 44, 58, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [2866, -891, 0, 175, 169, 0, 0, 1, 0.5028571486473083, 0.5029585957527161, 0, 0, []], 45, 59, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [562, 2603, 0, 2001, 1356, 0, 0, 1, 0, 0, 0, 0, []], 46, 60, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [3420, 623, 0, 16, 1331, 0, 0, 1, 0.5, 0.5, 0, 0, []], 47, 61, [],
                                [],
                                [1, "Default", 0, 1]
                            ],
                            [
                                [2462, 2115, 0, 1075, 203, 0, 0, 1, 0.5004650950431824, 0.5024630427360535, 0, 0, []], 48, 62, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [396, 625, 0, 19, 1327, 0, 0, 1, 0.5, 0.5, 0, 0, []], 49, 63, [],
                                [],
                                [1, "Default", 0, 1]
                            ],
                            [
                                [2485, 2580, 0, 1067, 226, 0, 0, 1, 0.5004686117172241, 0.5, 0, 0, []], 50, 64, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [3259, 2019, 0, 773, 148, 0, 0, 1, 0, 0, 0, 0, []], 52, 77, [],
                                [],
                                ["", 0, "bold 48pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                            ],
                            [
                                [3349, 2338, 0, 709, 202, 0, 0, 1, 0, 0, 0, 0, []], 53, 78, [],
                                [],
                                ["", 0, "bold 48pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                            ]
                        ],
                        []
                    ],
                    ["hud", 1, 4984233112224568, !0, [255, 255, 255], !0, 0, 0, 1, !1, 1, 0, 0, [
                            [
                                [577, 1090, 0, 371, 294, 0, 0, 1, 0.5013477206230164, 0.5, 0, 0, []], 4, 8, [
                                    [1]
                                ],
                                [
                                    []
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [1842, 511, 0, 101.088005065918, 648.923095703125, 0, 0, 1, 0.5, 0.5, 0, 0, []], 8, 12, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [55, 509, 0, 100.4400024414063, 659.1692504882812, 0, 0, 1, 0.5, 0.5, 0, 0, []], 9, 13, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [950, 45, 0, 1900, 57, 0, 0, 1, 0.5, 0.5087719559669495, 0, 0, []], 11, 18, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [582, 45, 0, 35, 33, 0, 0, 1, 0.5142857432365417, 0.5151515007019043, 0, 0, []], 10, 17, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [648, 45, 0, 35, 33, 0, 0, 1, 0.5142857432365417, 0.5151515007019043, 0, 0, []], 12, 19, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [475, 45, 0, 950, 58, 0, 0, 1, 0.5, 0.5, 0, 0, []], 13, 20, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [953, 1089, 0, 371, 294, 0, 0, 1, 0.5013477206230164, 0.5, 0, 0, []], 17, 24, [
                                    [1]
                                ],
                                [
                                    []
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [200, 1022, 0, 377, 153, 0, 0, 1, 0.5013262629508972, 0.5032680034637451, 0, 0, []], 23, 33, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [200, 1160, 0, 377, 153, 0, 0, 1, 0.5013262629508972, 0.5032680034637451, 0, 0, []], 22, 32, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [1711, 1090, 0, 371, 294, 0, 0, 1, 0.5013477206230164, 0.5, 0, 0, []], 24, 34, [
                                    [1]
                                ],
                                [
                                    []
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [1329, 1091, 0, 371, 294, 0, 0, 1, 0.5013477206230164, 0.5, 0, 0, []], 29, 4, [
                                    [1]
                                ],
                                [
                                    []
                                ],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [138, 975, 0, 214, 93, 0, 0, 1, 0, 0, 0, 0, []], 37, 51, [],
                                [],
                                ["100", 0, "bold 48pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                            ],
                            [
                                [538, 1129, 0, 209, 95, 0, 0, 1, 0, 0, 0, 0, []], 38, 52, [],
                                [],
                                ["100", 0, "bold 48pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                            ],
                            [
                                [907, 1129, 0, 209, 95, 0, 0, 1, 0, 0, 0, 0, []], 39, 53, [],
                                [],
                                ["150", 0, "bold 48pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                            ],
                            [
                                [1291, 1131, 0, 209, 95, 0, 0, 1, 0, 0, 0, 0, []], 40, 54, [],
                                [],
                                ["200", 0, "bold 48pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                            ],
                            [
                                [1673, 1129, 0, 209, 95, 0, 0, 1, 0, 0, 0, 0, []], 41, 55, [],
                                [],
                                ["300", 0, "bold 48pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]
                            ]
                        ],
                        []
                    ]
                ],
                [],
                []
            ],
            ["menu", 1900, 1250, !1, "menu_sheet", 7826808798248037, [
                    ["Layer 0", 0, 7463143942866062, !0, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [
                            [
                                [951, 627, 0, 2001, 1356, 0, 0, 1, 0.5002498626708984, 0.5, 0, 0, []], 54, 45, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [950, 454, 0, 926, 691, 0, 0, 1, 0.5, 0.5007236003875732, 0, 0, []], 35, 46, [],
                                [],
                                [0, "Default", 0, 1]
                            ],
                            [
                                [951, 978, 0, 558, 200, 0, 0, 1, 0.5017921328544617, 0.5, 0, 0, []], 36, 48, [],
                                [],
                                [0, "Default", 0, 1]
                            ]
                        ],
                        []
                    ],
                    ["hud", 1, 0x8a914fee4757, !0, [255, 255, 255], !0, 0, 0, 1, !1, 1, 0, 0, [],
                        []
                    ]
                ],
                [],
                []
            ]
        ],
        [
            ["skirmish_sheet", [
                [1, "total_kills", 0, 0, !1, !1, 644730698218696, !1],
                [1, "mortar_kills", 0, 0, !1, !1, 0x839b5609e4055, !1],
                [1, "ai_unit", 0, 0, !1, !1, 0x84fd487e0e4d9, !1],
                [1, "ai_trench", 0, 0, !1, !1, 905587378428205, !1],
                [1, "money", 0, 100, !1, !1, 633249213681216, !1],
                [0, null, !1, null, 9356701915712228, [
                        [-1, P.prototype.i.te, null, 0, !1, !1, !1, 5570102976514952, !1, [
                            [0, [0, 1]]
                        ]]
                    ],
                    [
                        [-1, P.prototype.b.Zc, null, 4730545478433022, !1, [
                            [11, "money"],
                            [7, [0, 10]]
                        ]],
                        [37, R.prototype.b.sd, null, 5685229764547955, !1, [
                            [7, [23, "money"]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 8207300527899757, [
                        [-1, P.prototype.i.Vl, null, 0, !0, !1, !1, 9325995458122986, !1, [
                            [4, 55],
                            [7, [20, 55, Q.prototype.k.ra, !1, null]],
                            [3, 0]
                        ]]
                    ],
                    [
                        [55, Q.prototype.b.Yl, null, 0x59441946ae687, !1]
                    ]
                ],
                [0, null, !1, null, 6310603104212808, [
                        [-1, P.prototype.i.Vl, null, 0, !0, !1, !1, 66138587911109, !1, [
                            [4, 56],
                            [7, [20, 56, Q.prototype.k.ra, !1, null]],
                            [3, 0]
                        ]]
                    ],
                    [
                        [56, Q.prototype.b.Yl, null, 8960236416434725, !1]
                    ]
                ],
                [0, null, !1, null, 8909165129035001, [
                        [31, Y.prototype.i.Od, "Turret", 1, !1, !1, !1, 9673435077515684, !1],
                        [31, Q.prototype.i.Aa, null, 0, !1, !0, !1, 5047738891519341, !1, [
                            [10, 2]
                        ]]
                    ],
                    [
                        [31, Q.prototype.b.C, null, 0xac264172c54ae, !1, [
                            [10, 2],
                            [3, 1]
                        ]],
                        [31, Z.prototype.b.P, "CustomMovement", 0xc5fa55d448727, !1, [
                            [3, 1],
                            [0, [0, 0]]
                        ]],
                        [31, Q.prototype.b.q, null, 9555715658773412, !1, [
                            [1, [2, "aim"]],
                            [3, 1]
                        ]],
                        [-1, P.prototype.b.D, null, 8405147071225121, !1, [
                            [0, [1, 0.2]]
                        ]]
                    ],
                    [
                        [0, null, !1, null, 4847146173675465, [
                                [5, Q.prototype.i.fb, null, 0, !1, !1, !0, 0x5376f77739f72, !1, [
                                    [0, [22, 31, "Turret", Y.prototype.k.hb, !1, null]]
                                ]]
                            ],
                            [
                                [31, Q.prototype.b.q, null, 9132869312826312, !1, [
                                    [1, [2, "fire"]],
                                    [3, 1]
                                ]],
                                [31, Q.prototype.b.L, null, 8147427522895141, !1, [
                                    [4, 3],
                                    [5, [0, 0]],
                                    [7, [0, 1]]
                                ]],
                                [-1, P.prototype.b.D, null, 7743288000230389, !1, [
                                    [0, [1, 0.2]]
                                ]],
                                [5, Q.prototype.b.gb, null, 0xb46db068885fb, !1, [
                                    [10, 0],
                                    [7, [0, 1]]
                                ]],
                                [31, Q.prototype.b.C, null, 0xc177b5d9c688, !1, [
                                    [10, 2],
                                    [3, 0]
                                ]],
                                [31, Y.prototype.b.ib, "Turret", 0x650c627452ea7, !1]
                            ]
                        ],
                        [0, null, !1, null, 9106249308273532, [
                                [20, Q.prototype.i.fb, null, 0, !1, !1, !0, 9215176175355928, !1, [
                                    [0, [22, 31, "Turret", Y.prototype.k.hb, !1, null]]
                                ]]
                            ],
                            [
                                [31, Q.prototype.b.q, null, 9279674147363174, !1, [
                                    [1, [2, "fire"]],
                                    [3, 1]
                                ]],
                                [31, Q.prototype.b.L, null, 0x400c0cb4ec16d, !1, [
                                    [4, 3],
                                    [5, [0, 0]],
                                    [7, [0, 1]]
                                ]],
                                [-1, P.prototype.b.D, null, 9213621390140648, !1, [
                                    [0, [1, 0.2]]
                                ]],
                                [20, Q.prototype.b.gb, null, 0x5ed70ea895c1b, !1, [
                                    [10, 0],
                                    [7, [0, 1]]
                                ]],
                                [31, Q.prototype.b.C, null, 0xe5fc4a7ea9115, !1, [
                                    [10, 2],
                                    [3, 0]
                                ]],
                                [31, Y.prototype.b.ib, "Turret", 5862181794744562, !1]
                            ]
                        ],
                        [0, null, !1, null, 9126027678126488, [
                                [33, Q.prototype.i.fb, null, 0, !1, !1, !0, 0x904671942eddf, !1, [
                                    [0, [22, 31, "Turret", Y.prototype.k.hb, !1, null]]
                                ]]
                            ],
                            [
                                [31, Q.prototype.b.q, null, 441234085276543, !1, [
                                    [1, [2, "fire"]],
                                    [3, 1]
                                ]],
                                [31, Q.prototype.b.L, null, 5576569370709442, !1, [
                                    [4, 3],
                                    [5, [0, 0]],
                                    [7, [0, 1]]
                                ]],
                                [-1, P.prototype.b.D, null, 5287948048423895, !1, [
                                    [0, [1, 0.2]]
                                ]],
                                [33, Q.prototype.b.gb, null, 0xce68f861a40bb, !1, [
                                    [10, 0],
                                    [7, [0, 1]]
                                ]],
                                [31, Q.prototype.b.C, null, 7830677511182824, !1, [
                                    [10, 2],
                                    [3, 0]
                                ]],
                                [31, Y.prototype.b.ib, "Turret", 4976995327766248, !1]
                            ]
                        ]
                    ]
                ],
                [0, null, !1, null, 5711514538931924, [
                        [-1, P.prototype.i.te, null, 0, !1, !1, !1, 9718267900729786, !1, [
                            [0, [0, 3]]
                        ]],
                        [31, Q.prototype.i.Aa, null, 0, !1, !0, !1, 9989751991254308, !1, [
                            [10, 1]
                        ]],
                        [31, Y.prototype.i.rc, "Turret", 0, !1, !0, !1, 4668025099941833, !1],
                        [31, Q.prototype.i.gf, null, 0, !1, !0, !1, 8507581564739888, !1]
                    ],
                    [
                        [31, Z.prototype.b.P, "CustomMovement", 0x6a7ac78ece6e1, !1, [
                            [3, 1],
                            [0, [0, 90]]
                        ]],
                        [31, Q.prototype.b.q, null, 7232705559407077, !1, [
                            [1, [2, "walk"]],
                            [3, 1]
                        ]],
                        [31, Q.prototype.b.C, null, 9932368284416164, !1, [
                            [10, 2],
                            [3, 0]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0xe3ce21aaf7a39, [
                        [31, Q.prototype.i.cf, null, 0, !1, !1, !1, 0x438cc32d014ac, !1, [
                            [10, 0],
                            [8, 2],
                            [7, [0, 1]]
                        ]]
                    ],
                    [
                        [31, Q.prototype.b.L, null, 6885885551823468, !1, [
                            [4, 32],
                            [5, [0, 0]],
                            [7, [0, 0]]
                        ]],
                        [31, Q.prototype.b.G, null, 0xf82a934d96501, !1],
                        [-1, P.prototype.b.D, null, 9392014397202316, !1, [
                            [0, [0, 2]]
                        ]],
                        [32, Q.prototype.b.G, null, 9576257103748836, !1]
                    ]
                ],
                [0, null, !1, null, 0x6f0a24801a832, [
                        [31, Q.prototype.i.eb, null, 0, !1, !1, !0, 6425895026132517, !1, [
                            [4, 7]
                        ]]
                    ],
                    [
                        [31, X.prototype.b.Ca, "Timer", 291345424505162, !1, [
                            [0, [1, 0.2]],
                            [3, 0],
                            [1, [2, "trench"]]
                        ]],
                        [31, Q.prototype.b.vc, null, 0xbd73bd7e2394e, !1, [
                            [0, [4, [20, 31, Q.prototype.k.ra, !1, null],
                                [0, 20]
                            ]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 9118418582098552, [
                        [31, X.prototype.i.Ba, "Timer", 0, !1, !1, !1, 0xf59ad646b4884, !1, [
                            [1, [2, "trench"]]
                        ]]
                    ],
                    [
                        [31, Z.prototype.b.P, "CustomMovement", 9912381889570804, !1, [
                            [3, 1],
                            [0, [0, 0]]
                        ]],
                        [31, Q.prototype.b.q, null, 0xe8e18516eb021, !1, [
                            [1, [2, "aim"]],
                            [3, 1]
                        ]],
                        [31, Q.prototype.b.tc, null, 8681710990623254, !1, [
                            [10, 0],
                            [7, [0, 4]]
                        ]],
                        [31, Q.prototype.b.C, null, 590993340166454, !1, [
                            [10, 1],
                            [3, 1]
                        ]],
                        [31, Y.prototype.b.uc, "Turret", 8536389353861847, !1, [
                            [0, [0, 700]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 8370343845880656, [
                        [2, S.prototype.i.Tb, null, 1, !1, !1, !1, 5979913904937658, !1, [
                            [4, 31]
                        ]],
                        [31, Q.prototype.i.Aa, null, 0, !1, !1, !1, 0x6f81812e4369c, !1, [
                            [10, 1]
                        ]],
                        [31, Y.prototype.i.rc, "Turret", 0, !1, !0, !1, 7079006938322608, !1]
                    ],
                    [
                        [31, Q.prototype.b.vc, null, 9368412535027468, !1, [
                            [0, [5, [20, 31, Q.prototype.k.ra, !1, null],
                                [0, 20]
                            ]]
                        ]],
                        [31, Z.prototype.b.P, "CustomMovement", 5629626813696525, !1, [
                            [3, 1],
                            [0, [0, 90]]
                        ]],
                        [31, Q.prototype.b.q, null, 4767577933056318, !1, [
                            [1, [2, "walk"]],
                            [3, 1]
                        ]],
                        [31, Q.prototype.b.tc, null, 968323362964701, !1, [
                            [10, 0],
                            [7, [0, 3]]
                        ]],
                        [31, Q.prototype.b.C, null, 0xc1977fd7ecedd, !1, [
                            [10, 1],
                            [3, 0]
                        ]],
                        [31, Q.prototype.b.C, null, 7149453413664884, !1, [
                            [10, 2],
                            [3, 0]
                        ]],
                        [31, Y.prototype.b.uc, "Turret", 0xf92696134c475, !1, [
                            [0, [0, 500]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0xe1ba4aead047d, [
                        [1, Y.prototype.i.Od, "Turret", 1, !1, !1, !1, 4747628255259484, !1],
                        [1, Q.prototype.i.Aa, null, 0, !1, !0, !1, 0xf95fabe8b13df, !1, [
                            [10, 2]
                        ]]
                    ],
                    [
                        [1, Q.prototype.b.C, null, 0x73c9570d399b1, !1, [
                            [10, 2],
                            [3, 1]
                        ]],
                        [1, Z.prototype.b.P, "CustomMovement", 6551930090439675, !1, [
                            [3, 1],
                            [0, [0, 0]]
                        ]],
                        [1, Q.prototype.b.q, null, 0xa58fa85b1ca95, !1, [
                            [1, [2, "aim"]],
                            [3, 1]
                        ]],
                        [-1, P.prototype.b.D, null, 849800422599025, !1, [
                            [0, [19, P.prototype.k.random, [
                                [0, 2],
                                [0, 3]
                            ]]]
                        ]]
                    ],
                    [
                        [0, null, !1, null, 9641105009716272, [
                                [5, Q.prototype.i.fb, null, 0, !1, !1, !0, 0x502d0114dd818, !1, [
                                    [0, [22, 1, "Turret", Y.prototype.k.hb, !1, null]]
                                ]]
                            ],
                            [
                                [1, Q.prototype.b.q, null, 0x4a52e53fb11bb, !1, [
                                    [1, [2, "fire"]],
                                    [3, 1]
                                ]],
                                [1, Q.prototype.b.L, null, 6657015607534532, !1, [
                                    [4, 3],
                                    [5, [0, 0]],
                                    [7, [0, 1]]
                                ]],
                                [-1, P.prototype.b.D, null, 0x6bd9a62ae6fba, !1, [
                                    [0, [1, 0.5]]
                                ]],
                                [5, Q.prototype.b.gb, null, 0x79d01ef6ba6c4, !1, [
                                    [10, 0],
                                    [7, [0, 1]]
                                ]],
                                [1, Q.prototype.b.C, null, 9062475846406288, !1, [
                                    [10, 2],
                                    [3, 0]
                                ]],
                                [1, Y.prototype.b.ib, "Turret", 5345773211831883, !1]
                            ]
                        ],
                        [0, null, !1, null, 0xa0994abd73b1d, [
                                [20, Q.prototype.i.fb, null, 0, !1, !1, !0, 0xb7f81691691d2, !1, [
                                    [0, [22, 1, "Turret", Y.prototype.k.hb, !1, null]]
                                ]]
                            ],
                            [
                                [1, Q.prototype.b.q, null, 6826850470559558, !1, [
                                    [1, [2, "fire"]],
                                    [3, 1]
                                ]],
                                [1, Q.prototype.b.L, null, 8160842539639592, !1, [
                                    [4, 3],
                                    [5, [0, 0]],
                                    [7, [0, 1]]
                                ]],
                                [-1, P.prototype.b.D, null, 0xfcaa9dfda69c5, !1, [
                                    [0, [1, 0.5]]
                                ]],
                                [20, Q.prototype.b.gb, null, 4914320812773152, !1, [
                                    [10, 0],
                                    [7, [0, 1]]
                                ]],
                                [1, Q.prototype.b.C, null, 9442565775917612, !1, [
                                    [10, 2],
                                    [3, 0]
                                ]],
                                [1, Y.prototype.b.ib, "Turret", 7261898269397117, !1]
                            ]
                        ],
                        [0, null, !1, null, 0x47dbbcdb3ff20, [
                                [33, Q.prototype.i.fb, null, 0, !1, !1, !0, 0xdd148ac1d3c99, !1, [
                                    [0, [22, 1, "Turret", Y.prototype.k.hb, !1, null]]
                                ]]
                            ],
                            [
                                [1, Q.prototype.b.q, null, 6936123300591252, !1, [
                                    [1, [2, "fire"]],
                                    [3, 1]
                                ]],
                                [1, Q.prototype.b.L, null, 7197929058404046, !1, [
                                    [4, 3],
                                    [5, [0, 0]],
                                    [7, [0, 1]]
                                ]],
                                [-1, P.prototype.b.D, null, 5337234394573551, !1, [
                                    [0, [1, 0.5]]
                                ]],
                                [33, Q.prototype.b.gb, null, 0x6c370e00ca08a, !1, [
                                    [10, 0],
                                    [7, [0, 1]]
                                ]],
                                [1, Q.prototype.b.C, null, 9907153398347218, !1, [
                                    [10, 2],
                                    [3, 0]
                                ]],
                                [1, Y.prototype.b.ib, "Turret", 6961520574897909, !1]
                            ]
                        ]
                    ]
                ],
                [0, null, !1, null, 0xdeb3b172d840c, [
                        [-1, P.prototype.i.te, null, 0, !1, !1, !1, 7468737338263991, !1, [
                            [0, [0, 3]]
                        ]],
                        [1, Q.prototype.i.Aa, null, 0, !1, !0, !1, 9532864549579038, !1, [
                            [10, 1]
                        ]],
                        [1, Y.prototype.i.rc, "Turret", 0, !1, !0, !1, 640781538672556, !1],
                        [1, Q.prototype.i.gf, null, 0, !1, !0, !1, 0x9d260f4a04b5e, !1]
                    ],
                    [
                        [1, Z.prototype.b.P, "CustomMovement", 6148496902456027, !1, [
                            [3, 1],
                            [0, [0, 90]]
                        ]],
                        [1, Q.prototype.b.q, null, 875957345537018, !1, [
                            [1, [2, "walk"]],
                            [3, 1]
                        ]],
                        [1, Q.prototype.b.C, null, 6771545736666073, !1, [
                            [10, 2],
                            [3, 0]
                        ]]
                    ]
                ],
                [0, null, !1, null, 6049039791496574, [
                        [1, Q.prototype.i.cf, null, 0, !1, !1, !1, 5541431602111919, !1, [
                            [10, 0],
                            [8, 2],
                            [7, [0, 1]]
                        ]]
                    ],
                    [
                        [1, Q.prototype.b.L, null, 6113465910861342, !1, [
                            [4, 14],
                            [5, [0, 0]],
                            [7, [0, 0]]
                        ]],
                        [1, Q.prototype.b.G, null, 0x80a6ed9fbb572, !1],
                        [-1, P.prototype.b.D, null, 0x770238aa471cb, !1, [
                            [0, [0, 2]]
                        ]],
                        [14, Q.prototype.b.G, null, 5058488179025446, !1]
                    ]
                ],
                [0, null, !1, null, 7631260273304263, [
                        [1, Q.prototype.i.eb, null, 0, !1, !1, !0, 0x9b95005cf8139, !1, [
                            [4, 7]
                        ]]
                    ],
                    [
                        [1, X.prototype.b.Ca, "Timer", 5800791024465277, !1, [
                            [0, [1, 0.2]],
                            [3, 0],
                            [1, [2, "trench"]]
                        ]],
                        [1, Q.prototype.b.vc, null, 6754374145083903, !1, [
                            [0, [4, [20, 1, Q.prototype.k.ra, !1, null],
                                [0, 20]
                            ]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 7325422569648507, [
                        [1, X.prototype.i.Ba, "Timer", 0, !1, !1, !1, 7080953121880748, !1, [
                            [1, [2, "trench"]]
                        ]]
                    ],
                    [
                        [1, Z.prototype.b.P, "CustomMovement", 9431588331077084, !1, [
                            [3, 1],
                            [0, [0, 0]]
                        ]],
                        [1, Q.prototype.b.q, null, 4529228686902971, !1, [
                            [1, [2, "aim"]],
                            [3, 1]
                        ]],
                        [1, Q.prototype.b.tc, null, 0x8625f238140cf, !1, [
                            [10, 0],
                            [7, [0, 4]]
                        ]],
                        [1, Q.prototype.b.C, null, 9884867757296848, !1, [
                            [10, 1],
                            [3, 1]
                        ]],
                        [1, Y.prototype.b.uc, "Turret", 4576062980941726, !1, [
                            [0, [0, 700]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 6060356020171052, [
                        [2, S.prototype.i.Tb, null, 1, !1, !1, !1, 9850643909859112, !1, [
                            [4, 1]
                        ]],
                        [1, Q.prototype.i.Aa, null, 0, !1, !1, !1, 7994217625262108, !1, [
                            [10, 1]
                        ]],
                        [1, Y.prototype.i.rc, "Turret", 0, !1, !0, !1, 7397213582424223, !1]
                    ],
                    [
                        [1, Q.prototype.b.vc, null, 6313520412880582, !1, [
                            [0, [5, [20, 1, Q.prototype.k.ra, !1, null],
                                [0, 20]
                            ]]
                        ]],
                        [1, Z.prototype.b.P, "CustomMovement", 9652212659184956, !1, [
                            [3, 1],
                            [0, [0, 90]]
                        ]],
                        [1, Q.prototype.b.q, null, 4667146467640868, !1, [
                            [1, [2, "walk"]],
                            [3, 1]
                        ]],
                        [1, Q.prototype.b.tc, null, 0x3dea102530578, !1, [
                            [10, 0],
                            [7, [0, 3]]
                        ]],
                        [1, Q.prototype.b.C, null, 8503494381599126, !1, [
                            [10, 1],
                            [3, 0]
                        ]],
                        [1, Q.prototype.b.C, null, 0xb79c06e827ffc, !1, [
                            [10, 2],
                            [3, 0]
                        ]],
                        [1, Y.prototype.b.uc, "Turret", 7812400859035965, !1, [
                            [0, [0, 600]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 9576437133092758, [
                        [16, Y.prototype.i.Od, "Turret", 1, !1, !1, !1, 424986614817238, !1],
                        [16, Q.prototype.i.Aa, null, 0, !1, !0, !1, 5193419487585728, !1, [
                            [10, 2]
                        ]]
                    ],
                    [
                        [16, Q.prototype.b.C, null, 0x7586a34aabd14, !1, [
                            [10, 2],
                            [3, 1]
                        ]],
                        [16, Z.prototype.b.P, "CustomMovement", 7969569067764513, !1, [
                            [3, 1],
                            [0, [0, 0]]
                        ]],
                        [16, Q.prototype.b.q, null, 0x6b493241e4990, !1, [
                            [1, [2, "aim"]],
                            [3, 1]
                        ]],
                        [-1, P.prototype.b.D, null, 5222306924311884, !1, [
                            [0, [19, P.prototype.k.random, [
                                [0, 2],
                                [0, 3]
                            ]]]
                        ]]
                    ],
                    [
                        [0, null, !1, null, 7754795249085566, [
                                [5, Q.prototype.i.fb, null, 0, !1, !1, !0, 8233304237230969, !1, [
                                    [0, [22, 16, "Turret", Y.prototype.k.hb, !1, null]]
                                ]]
                            ],
                            [
                                [16, Q.prototype.b.q, null, 738967058516306, !1, [
                                    [1, [2, "fire"]],
                                    [3, 1]
                                ]],
                                [16, Q.prototype.b.L, null, 884633577470172, !1, [
                                    [4, 3],
                                    [5, [0, 0]],
                                    [7, [0, 1]]
                                ]],
                                [-1, P.prototype.b.D, null, 7555064617523572, !1, [
                                    [0, [1, 0.5]]
                                ]],
                                [5, Q.prototype.b.gb, null, 786063307153378, !1, [
                                    [10, 0],
                                    [7, [0, 2]]
                                ]],
                                [16, Q.prototype.b.C, null, 7356371005153739, !1, [
                                    [10, 2],
                                    [3, 0]
                                ]],
                                [16, Y.prototype.b.ib, "Turret", 7703900088736261, !1]
                            ]
                        ],
                        [0, null, !1, null, 4956574027834154, [
                                [20, Q.prototype.i.fb, null, 0, !1, !1, !0, 5166804066034366, !1, [
                                    [0, [22, 16, "Turret", Y.prototype.k.hb, !1, null]]
                                ]]
                            ],
                            [
                                [16, Q.prototype.b.q, null, 0xff492f017805f, !1, [
                                    [1, [2, "fire"]],
                                    [3, 1]
                                ]],
                                [16, Q.prototype.b.L, null, 0x3c47ebea9af37, !1, [
                                    [4, 3],
                                    [5, [0, 0]],
                                    [7, [0, 1]]
                                ]],
                                [-1, P.prototype.b.D, null, 8936585906922163, !1, [
                                    [0, [1, 0.5]]
                                ]],
                                [20, Q.prototype.b.gb, null, 0x5937ac34ecc53, !1, [
                                    [10, 0],
                                    [7, [0, 1]]
                                ]],
                                [16, Q.prototype.b.C, null, 9147054332415784, !1, [
                                    [10, 2],
                                    [3, 0]
                                ]],
                                [16, Y.prototype.b.ib, "Turret", 0x543ccaa72d7f3, !1]
                            ]
                        ],
                        [0, null, !1, null, 0xde9c227eb0b81, [
                                [33, Q.prototype.i.fb, null, 0, !1, !1, !0, 0xe0a29a4a04be5, !1, [
                                    [0, [22, 16, "Turret", Y.prototype.k.hb, !1, null]]
                                ]]
                            ],
                            [
                                [16, Q.prototype.b.q, null, 0xe9976ed42c6db, !1, [
                                    [1, [2, "fire"]],
                                    [3, 1]
                                ]],
                                [16, Q.prototype.b.L, null, 0xd1e9dfd206a64, !1, [
                                    [4, 3],
                                    [5, [0, 0]],
                                    [7, [0, 1]]
                                ]],
                                [-1, P.prototype.b.D, null, 463650784583357, !1, [
                                    [0, [1, 0.5]]
                                ]],
                                [33, Q.prototype.b.gb, null, 0xb32450b6c8afa, !1, [
                                    [10, 0],
                                    [7, [0, 2]]
                                ]],
                                [16, Q.prototype.b.C, null, 9831625682705376, !1, [
                                    [10, 2],
                                    [3, 0]
                                ]],
                                [16, Y.prototype.b.ib, "Turret", 0x91fe1d304e848, !1]
                            ]
                        ]
                    ]
                ],
                [0, null, !1, null, 8499825577962184, [
                        [-1, P.prototype.i.te, null, 0, !1, !1, !1, 0xb45e3310a8750, !1, [
                            [0, [0, 3]]
                        ]],
                        [16, Q.prototype.i.Aa, null, 0, !1, !0, !1, 5264947237384166, !1, [
                            [10, 1]
                        ]],
                        [16, Y.prototype.i.rc, "Turret", 0, !1, !0, !1, 0xbb38435c2fbe2, !1],
                        [16, Q.prototype.i.gf, null, 0, !1, !0, !1, 0xdc88d8ca6fe7d, !1]
                    ],
                    [
                        [16, Z.prototype.b.P, "CustomMovement", 5969809771278249, !1, [
                            [3, 1],
                            [0, [0, 90]]
                        ]],
                        [16, Q.prototype.b.q, null, 0x5e1680f73e2d0, !1, [
                            [1, [2, "walk"]],
                            [3, 1]
                        ]],
                        [16, Q.prototype.b.C, null, 7065218539306818, !1, [
                            [10, 2],
                            [3, 0]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0x691060e5a1a34, [
                        [16, Q.prototype.i.cf, null, 0, !1, !1, !1, 5508601657134446, !1, [
                            [10, 0],
                            [8, 2],
                            [7, [0, 1]]
                        ]]
                    ],
                    [
                        [16, Q.prototype.b.L, null, 8485239057706317, !1, [
                            [4, 19],
                            [5, [0, 0]],
                            [7, [0, 0]]
                        ]],
                        [16, Q.prototype.b.G, null, 0x97a007950e21a, !1],
                        [-1, P.prototype.b.D, null, 0x5a1269b86bf7d, !1, [
                            [0, [0, 2]]
                        ]],
                        [19, Q.prototype.b.G, null, 7458008545018907, !1]
                    ]
                ],
                [0, null, !1, null, 7596116877014258, [
                        [16, Q.prototype.i.eb, null, 0, !1, !1, !0, 8382528722140141, !1, [
                            [4, 7]
                        ]]
                    ],
                    [
                        [16, X.prototype.b.Ca, "Timer", 6138380611401837, !1, [
                            [0, [1, 0.2]],
                            [3, 0],
                            [1, [2, "trench"]]
                        ]],
                        [16, Q.prototype.b.vc, null, 0xb6560f00fe55b, !1, [
                            [0, [4, [20, 16, Q.prototype.k.ra, !1, null],
                                [0, 20]
                            ]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 5843002020362608, [
                        [16, X.prototype.i.Ba, "Timer", 0, !1, !1, !1, 8791257369210564, !1, [
                            [1, [2, "trench"]]
                        ]]
                    ],
                    [
                        [16, Z.prototype.b.P, "CustomMovement", 7393878774195112, !1, [
                            [3, 1],
                            [0, [0, 0]]
                        ]],
                        [16, Q.prototype.b.q, null, 6144394627034394, !1, [
                            [1, [2, "aim"]],
                            [3, 1]
                        ]],
                        [16, Q.prototype.b.tc, null, 7785660699413476, !1, [
                            [10, 0],
                            [7, [0, 2]]
                        ]],
                        [16, Q.prototype.b.C, null, 0xf2ad1993819e4, !1, [
                            [10, 1],
                            [3, 1]
                        ]],
                        [16, Y.prototype.b.uc, "Turret", 6085596106264741, !1, [
                            [0, [0, 1400]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 6139703219093321, [
                        [2, S.prototype.i.Tb, null, 1, !1, !1, !1, 4849797565312432, !1, [
                            [4, 16]
                        ]],
                        [16, Q.prototype.i.Aa, null, 0, !1, !1, !1, 7266024624255515, !1, [
                            [10, 1]
                        ]],
                        [1, Y.prototype.i.rc, "Turret", 0, !1, !0, !1, 8423542847567964, !1]
                    ],
                    [
                        [16, Q.prototype.b.vc, null, 0xda8b7f27df991, !1, [
                            [0, [5, [20, 16, Q.prototype.k.ra, !1, null],
                                [0, 20]
                            ]]
                        ]],
                        [16, Z.prototype.b.P, "CustomMovement", 9008649065687664, !1, [
                            [3, 1],
                            [0, [0, 90]]
                        ]],
                        [16, Q.prototype.b.q, null, 0x3be35a76befbd, !1, [
                            [1, [2, "walk"]],
                            [3, 1]
                        ]],
                        [16, Q.prototype.b.tc, null, 437836186059032, !1, [
                            [10, 0],
                            [7, [0, 1]]
                        ]],
                        [16, Q.prototype.b.C, null, 0x757cfb48e3cc7, !1, [
                            [10, 1],
                            [3, 0]
                        ]],
                        [1, Q.prototype.b.C, null, 0xa5a0c69a7c77c, !1, [
                            [10, 2],
                            [3, 0]
                        ]],
                        [16, Y.prototype.b.uc, "Turret", 0xdbd28d9306dac, !1, [
                            [0, [0, 1300]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 4933872291288037, [
                        [33, Y.prototype.i.Od, "Turret", 1, !1, !1, !1, 824341033370515, !1],
                        [33, Q.prototype.i.Aa, null, 0, !1, !0, !1, 5095250781752041, !1, [
                            [10, 1]
                        ]]
                    ],
                    [
                        [33, Q.prototype.b.C, null, 0x5a5c95faa56eb, !1, [
                            [10, 1],
                            [3, 1]
                        ]],
                        [33, Z.prototype.b.P, "CustomMovement", 754473949200237, !1, [
                            [3, 1],
                            [0, [0, 0]]
                        ]],
                        [33, Q.prototype.b.q, null, 6458923730404824, !1, [
                            [1, [2, "aim"]],
                            [3, 1]
                        ]],
                        [-1, P.prototype.b.D, null, 0xa426d0ab07f0a, !1, [
                            [0, [1, 0.2]]
                        ]]
                    ],
                    [
                        [0, null, !1, null, 6251317845055922, [
                                [1, Q.prototype.i.fb, null, 0, !1, !1, !0, 4531167652211535, !1, [
                                    [0, [22, 33, "Turret", Y.prototype.k.hb, !1, null]]
                                ]]
                            ],
                            [
                                [33, Q.prototype.b.q, null, 6798223280620957, !1, [
                                    [1, [2, "fire"]],
                                    [3, 1]
                                ]],
                                [33, Q.prototype.b.L, null, 31570325023722, !1, [
                                    [4, 3],
                                    [5, [0, 0]],
                                    [7, [0, 1]]
                                ]],
                                [-1, P.prototype.b.D, null, 0x99e068db056f, !1, [
                                    [0, [1, 0.2]]
                                ]],
                                [1, Q.prototype.b.gb, null, 0x4838e0b60f8b6, !1, [
                                    [10, 0],
                                    [7, [0, 1]]
                                ]],
                                [33, Q.prototype.b.C, null, 0xe3f71b34c3d39, !1, [
                                    [10, 1],
                                    [3, 0]
                                ]],
                                [33, Y.prototype.b.ib, "Turret", 0x710add38b4db7, !1]
                            ]
                        ],
                        [0, null, !1, null, 7550216685183888, [
                                [16, Q.prototype.i.fb, null, 0, !1, !1, !0, 6937390292820824, !1, [
                                    [0, [22, 33, "Turret", Y.prototype.k.hb, !1, null]]
                                ]]
                            ],
                            [
                                [33, Q.prototype.b.q, null, 8741742508499308, !1, [
                                    [1, [2, "fire"]],
                                    [3, 1]
                                ]],
                                [33, Q.prototype.b.L, null, 5964676676278124, !1, [
                                    [4, 3],
                                    [5, [0, 0]],
                                    [7, [0, 1]]
                                ]],
                                [-1, P.prototype.b.D, null, 6205498829046962, !1, [
                                    [0, [1, 0.2]]
                                ]],
                                [16, Q.prototype.b.gb, null, 6396432880491845, !1, [
                                    [10, 0],
                                    [7, [0, 1]]
                                ]],
                                [33, Q.prototype.b.C, null, 5095206008080122, !1, [
                                    [10, 1],
                                    [3, 0]
                                ]],
                                [33, Y.prototype.b.ib, "Turret", 4636004917283831, !1]
                            ]
                        ],
                        [0, null, !1, null, 4945049973819902, [
                                [31, Q.prototype.i.fb, null, 0, !1, !1, !0, 6175942809135413, !1, [
                                    [0, [22, 33, "Turret", Y.prototype.k.hb, !1, null]]
                                ]]
                            ],
                            [
                                [33, Q.prototype.b.q, null, 4864625571141123, !1, [
                                    [1, [2, "fire"]],
                                    [3, 1]
                                ]],
                                [33, Q.prototype.b.L, null, 0xd114d60d9b877, !1, [
                                    [4, 3],
                                    [5, [0, 0]],
                                    [7, [0, 1]]
                                ]],
                                [-1, P.prototype.b.D, null, 9324203095989164, !1, [
                                    [0, [1, 0.2]]
                                ]],
                                [31, Q.prototype.b.gb, null, 0x3c0051ae049ea, !1, [
                                    [10, 0],
                                    [7, [0, 1]]
                                ]],
                                [33, Q.prototype.b.C, null, 4865703383372169, !1, [
                                    [10, 1],
                                    [3, 0]
                                ]],
                                [33, Y.prototype.b.ib, "Turret", 9572254303439204, !1]
                            ]
                        ]
                    ]
                ],
                [0, null, !1, null, 6137050528447163, [
                        [-1, P.prototype.i.te, null, 0, !1, !1, !1, 4583513170777697, !1, [
                            [0, [0, 3]]
                        ]],
                        [33, Q.prototype.i.Aa, null, 0, !1, !0, !1, 4798395338385329, !1, [
                            [10, 2]
                        ]],
                        [33, Y.prototype.i.rc, "Turret", 0, !1, !0, !1, 4510273890363506, !1],
                        [33, Q.prototype.i.gf, null, 0, !1, !0, !1, 0x7eb292fcadbc3, !1]
                    ],
                    [
                        [33, Z.prototype.b.P, "CustomMovement", 5778475518685362, !1, [
                            [3, 1],
                            [0, [0, -90]]
                        ]],
                        [33, Q.prototype.b.q, null, 5065145861330189, !1, [
                            [1, [2, "walk"]],
                            [3, 1]
                        ]],
                        [33, Q.prototype.b.C, null, 8783875096496396, !1, [
                            [10, 1],
                            [3, 0]
                        ]]
                    ]
                ],
                [0, null, !1, null, 5849258971671672, [
                        [33, Q.prototype.i.cf, null, 0, !1, !1, !1, 8808868208544488, !1, [
                            [10, 0],
                            [8, 2],
                            [7, [0, 1]]
                        ]]
                    ],
                    [
                        [33, Q.prototype.b.L, null, 9752971923270148, !1, [
                            [4, 34],
                            [5, [0, 0]],
                            [7, [0, 0]]
                        ]],
                        [33, Q.prototype.b.G, null, 0xafa440169bda3, !1],
                        [-1, P.prototype.b.D, null, 6380199589541396, !1, [
                            [0, [0, 2]]
                        ]],
                        [34, Q.prototype.b.G, null, 0x394f4f01fd85a, !1],
                        [-1, P.prototype.b.Zc, null, 0xe8c91d7634a84, !1, [
                            [11, "total_kills"],
                            [7, [0, 1]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0xe6b255d1fbc3a, [
                        [33, Q.prototype.i.eb, null, 0, !1, !1, !0, 904412411541573, !1, [
                            [4, 18]
                        ]]
                    ],
                    [
                        [33, X.prototype.b.Ca, "Timer", 7007942550301397, !1, [
                            [0, [1, 0.2]],
                            [3, 0],
                            [1, [2, "trench"]]
                        ]],
                        [33, Q.prototype.b.vc, null, 8770422680128393, !1, [
                            [0, [4, [20, 33, Q.prototype.k.ra, !1, null],
                                [0, 20]
                            ]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 7864952204344692, [
                        [33, X.prototype.i.Ba, "Timer", 0, !1, !1, !1, 8536235649887229, !1, [
                            [1, [2, "trench"]]
                        ]]
                    ],
                    [
                        [33, Z.prototype.b.P, "CustomMovement", 0xc39b3c10a259f, !1, [
                            [3, 1],
                            [0, [0, 0]]
                        ]],
                        [33, Q.prototype.b.q, null, 7861623911487258, !1, [
                            [1, [2, "aim"]],
                            [3, 1]
                        ]],
                        [33, Q.prototype.b.tc, null, 9334816743817356, !1, [
                            [10, 0],
                            [7, [0, 4]]
                        ]],
                        [33, Q.prototype.b.C, null, 7100179691020367, !1, [
                            [10, 2],
                            [3, 1]
                        ]],
                        [33, Y.prototype.b.uc, "Turret", 846253538938537, !1, [
                            [0, [0, 800]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 309476140349365, [
                        [5, Y.prototype.i.Od, "Turret", 1, !1, !1, !1, 463729104536235, !1],
                        [5, Q.prototype.i.Aa, null, 0, !1, !0, !1, 9230135103277262, !1, [
                            [10, 1]
                        ]]
                    ],
                    [
                        [5, Q.prototype.b.C, null, 9960186980007096, !1, [
                            [10, 1],
                            [3, 1]
                        ]],
                        [5, Z.prototype.b.P, "CustomMovement", 0xea08672a6274b, !1, [
                            [3, 1],
                            [0, [0, 0]]
                        ]],
                        [5, Q.prototype.b.q, null, 0x9c56c7eca5549, !1, [
                            [1, [2, "aim"]],
                            [3, 1]
                        ]],
                        [-1, P.prototype.b.D, null, 0x6f502bcce3dcf, !1, [
                            [0, [19, P.prototype.k.random, [
                                [0, 2],
                                [0, 3]
                            ]]]
                        ]]
                    ],
                    [
                        [0, null, !1, null, 8903021592455949, [
                                [1, Q.prototype.i.fb, null, 0, !1, !1, !0, 7820852495620957, !1, [
                                    [0, [22, 5, "Turret", Y.prototype.k.hb, !1, null]]
                                ]]
                            ],
                            [
                                [5, Q.prototype.b.q, null, 6090587857104288, !1, [
                                    [1, [2, "fire"]],
                                    [3, 1]
                                ]],
                                [5, Q.prototype.b.L, null, 7259646145626878, !1, [
                                    [4, 3],
                                    [5, [0, 0]],
                                    [7, [0, 1]]
                                ]],
                                [-1, P.prototype.b.D, null, 0xfd93c7f3cef0f, !1, [
                                    [0, [1, 0.5]]
                                ]],
                                [1, Q.prototype.b.gb, null, 0x56c2fba8b6a82, !1, [
                                    [10, 0],
                                    [7, [0, 1]]
                                ]],
                                [5, Q.prototype.b.C, null, 0xff1fe3b541c5b, !1, [
                                    [10, 1],
                                    [3, 0]
                                ]],
                                [5, Y.prototype.b.ib, "Turret", 0x40760b3b2a9f0, !1]
                            ]
                        ],
                        [0, null, !1, null, 7263346297454907, [
                                [16, Q.prototype.i.fb, null, 0, !1, !1, !0, 9035197939634378, !1, [
                                    [0, [22, 5, "Turret", Y.prototype.k.hb, !1, null]]
                                ]]
                            ],
                            [
                                [5, Q.prototype.b.q, null, 4508851678194047, !1, [
                                    [1, [2, "fire"]],
                                    [3, 1]
                                ]],
                                [5, Q.prototype.b.L, null, 9315767173746152, !1, [
                                    [4, 3],
                                    [5, [0, 0]],
                                    [7, [0, 1]]
                                ]],
                                [-1, P.prototype.b.D, null, 924029997870472, !1, [
                                    [0, [1, 0.5]]
                                ]],
                                [16, Q.prototype.b.gb, null, 0x4e07a395f29ad, !1, [
                                    [10, 0],
                                    [7, [0, 1]]
                                ]],
                                [5, Q.prototype.b.C, null, 9197790148064922, !1, [
                                    [10, 1],
                                    [3, 0]
                                ]],
                                [5, Y.prototype.b.ib, "Turret", 0xf44f6327f7a27, !1]
                            ]
                        ],
                        [0, null, !1, null, 970247671448174, [
                                [31, Q.prototype.i.fb, null, 0, !1, !1, !0, 705223679326413, !1, [
                                    [0, [22, 5, "Turret", Y.prototype.k.hb, !1, null]]
                                ]]
                            ],
                            [
                                [5, Q.prototype.b.q, null, 0xc923f3e48d7bc, !1, [
                                    [1, [2, "fire"]],
                                    [3, 1]
                                ]],
                                [5, Q.prototype.b.L, null, 0x4159c4964cb18, !1, [
                                    [4, 3],
                                    [5, [0, 0]],
                                    [7, [0, 1]]
                                ]],
                                [-1, P.prototype.b.D, null, 330804533763262, !1, [
                                    [0, [1, 0.5]]
                                ]],
                                [31, Q.prototype.b.gb, null, 6694148270672348, !1, [
                                    [10, 0],
                                    [7, [0, 1]]
                                ]],
                                [5, Q.prototype.b.C, null, 8586331515297436, !1, [
                                    [10, 1],
                                    [3, 0]
                                ]],
                                [5, Y.prototype.b.ib, "Turret", 6592975351224807, !1]
                            ]
                        ]
                    ]
                ],
                [0, null, !1, null, 9140914265932652, [
                        [-1, P.prototype.i.te, null, 0, !1, !1, !1, 9947152195300520, !1, [
                            [0, [0, 3]]
                        ]],
                        [5, Q.prototype.i.Aa, null, 0, !1, !0, !1, 625537944062765, !1, [
                            [10, 2]
                        ]],
                        [5, Y.prototype.i.rc, "Turret", 0, !1, !0, !1, 575600049565321, !1],
                        [5, Q.prototype.i.gf, null, 0, !1, !0, !1, 8845317961091421, !1]
                    ],
                    [
                        [5, Z.prototype.b.P, "CustomMovement", 4905569783758998, !1, [
                            [3, 1],
                            [0, [0, -90]]
                        ]],
                        [5, Q.prototype.b.q, null, 0x7cd4f166c2519, !1, [
                            [1, [2, "walk"]],
                            [3, 1]
                        ]],
                        [5, Q.prototype.b.C, null, 0xb42389c9e1c38, !1, [
                            [10, 1],
                            [3, 0]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0x393e1687dc7cb, [
                        [5, Q.prototype.i.cf, null, 0, !1, !1, !1, 0x6291d2e81bb94, !1, [
                            [10, 0],
                            [8, 2],
                            [7, [0, 1]]
                        ]]
                    ],
                    [
                        [5, Q.prototype.b.L, null, 0xf04c3003a9b5c, !1, [
                            [4, 15],
                            [5, [0, 0]],
                            [7, [0, 0]]
                        ]],
                        [5, Q.prototype.b.G, null, 7576358759194443, !1],
                        [-1, P.prototype.b.D, null, 8455095898483158, !1, [
                            [0, [0, 2]]
                        ]],
                        [15, Q.prototype.b.G, null, 6522986612017902, !1],
                        [-1, P.prototype.b.Zc, null, 6266586910844484, !1, [
                            [11, "total_kills"],
                            [7, [0, 1]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0xbaddc4b38bb21, [
                        [5, Q.prototype.i.eb, null, 0, !1, !1, !0, 607211743079757, !1, [
                            [4, 18]
                        ]]
                    ],
                    [
                        [5, X.prototype.b.Ca, "Timer", 7280112217580371, !1, [
                            [0, [1, 0.2]],
                            [3, 0],
                            [1, [2, "trench"]]
                        ]],
                        [5, Q.prototype.b.vc, null, 0x5d224a2d3ab38, !1, [
                            [0, [4, [20, 5, Q.prototype.k.ra, !1, null],
                                [0, 20]
                            ]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 932168127743797, [
                        [5, X.prototype.i.Ba, "Timer", 0, !1, !1, !1, 8494418654118665, !1, [
                            [1, [2, "trench"]]
                        ]]
                    ],
                    [
                        [5, Z.prototype.b.P, "CustomMovement", 7429715878823485, !1, [
                            [3, 1],
                            [0, [0, 0]]
                        ]],
                        [5, Q.prototype.b.q, null, 4721288565989523, !1, [
                            [1, [2, "aim"]],
                            [3, 1]
                        ]],
                        [5, Q.prototype.b.tc, null, 5014357115926816, !1, [
                            [10, 0],
                            [7, [0, 4]]
                        ]],
                        [5, Q.prototype.b.C, null, 0xceffb933c9445, !1, [
                            [10, 2],
                            [3, 1]
                        ]],
                        [5, Y.prototype.b.uc, "Turret", 8917153544006422, !1, [
                            [0, [0, 800]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 6576902699965735, [
                        [20, Y.prototype.i.Od, "Turret", 1, !1, !1, !1, 0xeb38b333d079f, !1],
                        [20, Q.prototype.i.Aa, null, 0, !1, !0, !1, 7632822615494837, !1, [
                            [10, 1]
                        ]]
                    ],
                    [
                        [20, Q.prototype.b.C, null, 9794000906528660, !1, [
                            [10, 1],
                            [3, 1]
                        ]],
                        [20, Z.prototype.b.P, "CustomMovement", 0xb68c93dfd8236, !1, [
                            [3, 1],
                            [0, [0, 0]]
                        ]],
                        [20, Q.prototype.b.q, null, 8915930727997111, !1, [
                            [1, [2, "aim"]],
                            [3, 1]
                        ]],
                        [-1, P.prototype.b.D, null, 9951435875408492, !1, [
                            [0, [19, P.prototype.k.random, [
                                [0, 2],
                                [0, 3]
                            ]]]
                        ]]
                    ],
                    [
                        [0, null, !1, null, 9511888979170412, [
                                [1, Q.prototype.i.fb, null, 0, !1, !1, !0, 4966196555520116, !1, [
                                    [0, [22, 20, "Turret", Y.prototype.k.hb, !1, null]]
                                ]]
                            ],
                            [
                                [20, Q.prototype.b.q, null, 7704150440947155, !1, [
                                    [1, [2, "fire"]],
                                    [3, 1]
                                ]],
                                [20, Q.prototype.b.L, null, 8767767508650658, !1, [
                                    [4, 3],
                                    [5, [0, 0]],
                                    [7, [0, 1]]
                                ]],
                                [-1, P.prototype.b.D, null, 55212837311771, !1, [
                                    [0, [1, 0.5]]
                                ]],
                                [1, Q.prototype.b.gb, null, 9889815961320592, !1, [
                                    [10, 0],
                                    [7, [0, 2]]
                                ]],
                                [20, Q.prototype.b.C, null, 8066336463847527, !1, [
                                    [10, 1],
                                    [3, 0]
                                ]],
                                [20, Y.prototype.b.ib, "Turret", 0x4f3dc6b93660b, !1]
                            ]
                        ],
                        [0, null, !1, null, 8294018482268194, [
                                [16, Q.prototype.i.fb, null, 0, !1, !1, !0, 0x62f562b1eb1c2, !1, [
                                    [0, [22, 20, "Turret", Y.prototype.k.hb, !1, null]]
                                ]]
                            ],
                            [
                                [20, Q.prototype.b.q, null, 0xb3df4b8e6fa1d, !1, [
                                    [1, [2, "fire"]],
                                    [3, 1]
                                ]],
                                [20, Q.prototype.b.L, null, 955674478960643, !1, [
                                    [4, 3],
                                    [5, [0, 0]],
                                    [7, [0, 1]]
                                ]],
                                [-1, P.prototype.b.D, null, 0x4701812f5a8c3, !1, [
                                    [0, [1, 0.5]]
                                ]],
                                [16, Q.prototype.b.gb, null, 8809097685142034, !1, [
                                    [10, 0],
                                    [7, [0, 1]]
                                ]],
                                [20, Q.prototype.b.C, null, 0x4defffbc124b9, !1, [
                                    [10, 1],
                                    [3, 0]
                                ]],
                                [20, Y.prototype.b.ib, "Turret", 0xd8b1b9b12d3d2, !1]
                            ]
                        ],
                        [0, null, !1, null, 9985356688482124, [
                                [31, Q.prototype.i.fb, null, 0, !1, !1, !0, 8132285673680576, !1, [
                                    [0, [22, 20, "Turret", Y.prototype.k.hb, !1, null]]
                                ]]
                            ],
                            [
                                [20, Q.prototype.b.q, null, 6154453120313655, !1, [
                                    [1, [2, "fire"]],
                                    [3, 1]
                                ]],
                                [20, Q.prototype.b.L, null, 5783325946466711, !1, [
                                    [4, 3],
                                    [5, [0, 0]],
                                    [7, [0, 1]]
                                ]],
                                [-1, P.prototype.b.D, null, 9271261332400048, !1, [
                                    [0, [1, 0.5]]
                                ]],
                                [31, Q.prototype.b.gb, null, 332927646548176, !1, [
                                    [10, 0],
                                    [7, [0, 2]]
                                ]],
                                [20, Q.prototype.b.C, null, 0xdbdea506a82a4, !1, [
                                    [10, 1],
                                    [3, 0]
                                ]],
                                [20, Y.prototype.b.ib, "Turret", 9117899376978378, !1]
                            ]
                        ]
                    ]
                ],
                [0, null, !1, null, 7740634909956537, [
                        [-1, P.prototype.i.te, null, 0, !1, !1, !1, 5698000261488947, !1, [
                            [0, [0, 3]]
                        ]],
                        [20, Q.prototype.i.Aa, null, 0, !1, !0, !1, 0x575482bde45bd, !1, [
                            [10, 2]
                        ]],
                        [20, Y.prototype.i.rc, "Turret", 0, !1, !0, !1, 0x8bad1e587f29d, !1],
                        [20, Q.prototype.i.gf, null, 0, !1, !0, !1, 7885793520666544, !1]
                    ],
                    [
                        [20, Z.prototype.b.P, "CustomMovement", 6934787736220062, !1, [
                            [3, 1],
                            [0, [0, -90]]
                        ]],
                        [20, Q.prototype.b.q, null, 7648397969008891, !1, [
                            [1, [2, "walk"]],
                            [3, 1]
                        ]],
                        [20, Q.prototype.b.C, null, 8793088491854247, !1, [
                            [10, 1],
                            [3, 0]
                        ]]
                    ]
                ],
                [0, null, !1, null, 7718501335715141, [
                        [20, Q.prototype.i.cf, null, 0, !1, !1, !1, 0xfbdb8336bd945, !1, [
                            [10, 0],
                            [8, 2],
                            [7, [0, 1]]
                        ]]
                    ],
                    [
                        [20, Q.prototype.b.L, null, 0x5167a442804b3, !1, [
                            [4, 21],
                            [5, [0, 0]],
                            [7, [0, 0]]
                        ]],
                        [20, Q.prototype.b.G, null, 7741118935248506, !1],
                        [-1, P.prototype.b.D, null, 8154993501262147, !1, [
                            [0, [0, 2]]
                        ]],
                        [21, Q.prototype.b.G, null, 5106465506102934, !1],
                        [-1, P.prototype.b.Zc, null, 9793553418121654, !1, [
                            [11, "total_kills"],
                            [7, [0, 1]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 9253736236542444, [
                        [20, Q.prototype.i.eb, null, 0, !1, !1, !0, 0xcf7a6a50c0ac, !1, [
                            [4, 18]
                        ]]
                    ],
                    [
                        [20, X.prototype.b.Ca, "Timer", 5258883437155992, !1, [
                            [0, [1, 0.2]],
                            [3, 0],
                            [1, [2, "trench"]]
                        ]],
                        [20, Q.prototype.b.vc, null, 0xce723be4af8a2, !1, [
                            [0, [4, [20, 20, Q.prototype.k.ra, !1, null],
                                [0, 20]
                            ]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0xa93c7dcd21b4d, [
                        [20, X.prototype.i.Ba, "Timer", 0, !1, !1, !1, 0x9fd6ed44f7b94, !1, [
                            [1, [2, "trench"]]
                        ]]
                    ],
                    [
                        [20, Z.prototype.b.P, "CustomMovement", 8862974640214089, !1, [
                            [3, 1],
                            [0, [0, 0]]
                        ]],
                        [20, Q.prototype.b.q, null, 0xf4aed2168824e, !1, [
                            [1, [2, "aim"]],
                            [3, 1]
                        ]],
                        [20, Q.prototype.b.tc, null, 0x63add30b418a6, !1, [
                            [10, 0],
                            [7, [0, 2]]
                        ]],
                        [20, Q.prototype.b.C, null, 6845199298049096, !1, [
                            [10, 2],
                            [3, 1]
                        ]],
                        [20, Y.prototype.b.uc, "Turret", 748799363502517, !1, [
                            [0, [0, 1500]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 4878749923808639, [
                        [2, S.prototype.i.Tb, null, 1, !1, !1, !1, 0x95af4b40a54e, !1, [
                            [4, 17]
                        ]],
                        [17, Q.prototype.i.Aa, null, 0, !1, !1, !1, 5069058397037985, !1, [
                            [10, 0]
                        ]],
                        [-1, P.prototype.i.df, null, 0, !1, !1, !1, 0x8ecaad7c57dda, !1, [
                            [11, "money"],
                            [8, 5],
                            [7, [0, 150]]
                        ]]
                    ],
                    [
                        [-1, P.prototype.b.M, null, 0xb21293ae69951, !1, [
                            [4, 16],
                            [5, [0, 0]],
                            [0, [19, P.prototype.k.random, [
                                [0, 100],
                                [0, 200]
                            ]]],
                            [0, [19, P.prototype.k.random, [
                                [0, 200],
                                [0, 700]
                            ]]]
                        ]],
                        [16, Z.prototype.b.P, "CustomMovement", 0xd574a9df87ad2, !1, [
                            [3, 1],
                            [0, [0, 90]]
                        ]],
                        [16, Q.prototype.b.q, null, 4784834098176445, !1, [
                            [1, [2, "walk"]],
                            [3, 1]
                        ]],
                        [16, Y.prototype.b.F, "Turret", 0x95af1751e15ed, !1, [
                            [4, 5]
                        ]],
                        [16, Y.prototype.b.F, "Turret", 0x74e042954e300, !1, [
                            [4, 20]
                        ]],
                        [16, Y.prototype.b.F, "Turret", 8005937811665801, !1, [
                            [4, 33]
                        ]],
                        [17, Q.prototype.b.C, null, 5207614637077894, !1, [
                            [10, 0],
                            [3, 0]
                        ]],
                        [17, Q.prototype.b.q, null, 0x38fbc0b12409f, !1, [
                            [1, [2, "load"]],
                            [3, 1]
                        ]],
                        [17, Q.prototype.b.wh, null, 0x443d6f7931a3b, !1, [
                            [0, [0, 0]]
                        ]],
                        [17, Q.prototype.b.Na, null, 0xddffe849f5604, !1, [
                            [0, [0, 0]]
                        ]],
                        [17, X.prototype.b.Ca, "Timer", 7895308855098334, !1, [
                            [0, [0, 3]],
                            [3, 0],
                            [1, [2, "load1"]]
                        ]],
                        [-1, P.prototype.b.zh, null, 0xc712359a3a2f9, !1, [
                            [11, "money"],
                            [7, [0, 150]]
                        ]],
                        [37, R.prototype.b.sd, null, 4551070219410465, !1, [
                            [7, [23, "money"]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0x3bda5bebcb706, [
                        [17, X.prototype.i.Ba, "Timer", 0, !1, !1, !1, 9865908799096214, !1, [
                            [1, [2, "load1"]]
                        ]]
                    ],
                    [
                        [17, Q.prototype.b.Na, null, 6937658178734315, !1, [
                            [0, [0, 1]]
                        ]],
                        [17, X.prototype.b.Ca, "Timer", 0x76942c8a57a4d, !1, [
                            [0, [0, 3]],
                            [3, 0],
                            [1, [2, "load2"]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 8829268592918021, [
                        [17, X.prototype.i.Ba, "Timer", 0, !1, !1, !1, 5553819311260341, !1, [
                            [1, [2, "load2"]]
                        ]]
                    ],
                    [
                        [17, Q.prototype.b.Na, null, 9463455182902786, !1, [
                            [0, [0, 2]]
                        ]],
                        [17, X.prototype.b.Ca, "Timer", 0xbd3142ae876dc, !1, [
                            [0, [0, 3]],
                            [3, 0],
                            [1, [2, "load3"]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0xbae90ed767adb, [
                        [17, X.prototype.i.Ba, "Timer", 0, !1, !1, !1, 0xb03cf8814f697, !1, [
                            [1, [2, "load3"]]
                        ]]
                    ],
                    [
                        [17, Q.prototype.b.Na, null, 0xd0e611aa013f3, !1, [
                            [0, [0, 3]]
                        ]],
                        [17, X.prototype.b.Ca, "Timer", 0x4650d2fbb75ee, !1, [
                            [0, [0, 3]],
                            [3, 0],
                            [1, [2, "load4"]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0x6c6f68ed5c7cc, [
                        [17, X.prototype.i.Ba, "Timer", 0, !1, !1, !1, 0x4e37614eeb503, !1, [
                            [1, [2, "load4"]]
                        ]]
                    ],
                    [
                        [17, Q.prototype.b.Na, null, 9084826248475160, !1, [
                            [0, [0, 4]]
                        ]],
                        [17, Q.prototype.b.C, null, 8189931461614468, !1, [
                            [10, 0],
                            [3, 1]
                        ]]
                    ]
                ],
                [0, null, !1, null, 7383828486101996, [
                        [2, S.prototype.i.Tb, null, 1, !1, !1, !1, 0xc2f4f08bff81c, !1, [
                            [4, 4]
                        ]],
                        [4, Q.prototype.i.Aa, null, 0, !1, !1, !1, 0x64f2bf84dbf93, !1, [
                            [10, 0]
                        ]],
                        [-1, P.prototype.i.df, null, 0, !1, !1, !1, 0xa126dd142bf86, !1, [
                            [11, "money"],
                            [8, 5],
                            [7, [0, 100]]
                        ]]
                    ],
                    [
                        [-1, P.prototype.b.M, null, 6751024744153441, !1, [
                            [4, 1],
                            [5, [0, 0]],
                            [0, [19, P.prototype.k.random, [
                                [0, 100],
                                [0, 200]
                            ]]],
                            [0, [19, P.prototype.k.random, [
                                [0, 200],
                                [0, 700]
                            ]]]
                        ]],
                        [1, Z.prototype.b.P, "CustomMovement", 4816481150507257, !1, [
                            [3, 1],
                            [0, [0, 90]]
                        ]],
                        [1, Q.prototype.b.q, null, 0x75b21bc996a42, !1, [
                            [1, [2, "walk"]],
                            [3, 1]
                        ]],
                        [1, Y.prototype.b.F, "Turret", 420878950326222, !1, [
                            [4, 5]
                        ]],
                        [1, Y.prototype.b.F, "Turret", 6104614249710365, !1, [
                            [4, 20]
                        ]],
                        [1, Y.prototype.b.F, "Turret", 6151165439587358, !1, [
                            [4, 33]
                        ]],
                        [-1, P.prototype.b.M, null, 0x91dffb09db849, !1, [
                            [4, 1],
                            [5, [0, 0]],
                            [0, [19, P.prototype.k.random, [
                                [0, 100],
                                [0, 200]
                            ]]],
                            [0, [19, P.prototype.k.random, [
                                [0, 200],
                                [0, 700]
                            ]]]
                        ]],
                        [1, Z.prototype.b.P, "CustomMovement", 8071073990816964, !1, [
                            [3, 1],
                            [0, [0, 90]]
                        ]],
                        [1, Q.prototype.b.q, null, 0xd164e023d3fbc, !1, [
                            [1, [2, "walk"]],
                            [3, 1]
                        ]],
                        [1, Y.prototype.b.F, "Turret", 6184768252950376, !1, [
                            [4, 5]
                        ]],
                        [1, Y.prototype.b.F, "Turret", 0xd598d399b7522, !1, [
                            [4, 20]
                        ]],
                        [1, Y.prototype.b.F, "Turret", 6475459598644739, !1, [
                            [4, 33]
                        ]],
                        [-1, P.prototype.b.M, null, 5270485562277597, !1, [
                            [4, 1],
                            [5, [0, 0]],
                            [0, [19, P.prototype.k.random, [
                                [0, 100],
                                [0, 200]
                            ]]],
                            [0, [19, P.prototype.k.random, [
                                [0, 200],
                                [0, 700]
                            ]]]
                        ]],
                        [1, Z.prototype.b.P, "CustomMovement", 0x9096afa30facb, !1, [
                            [3, 1],
                            [0, [0, 90]]
                        ]],
                        [1, Q.prototype.b.q, null, 8653572881561574, !1, [
                            [1, [2, "walk"]],
                            [3, 1]
                        ]],
                        [1, Y.prototype.b.F, "Turret", 9566409607519044, !1, [
                            [4, 5]
                        ]],
                        [1, Y.prototype.b.F, "Turret", 689555377207245, !1, [
                            [4, 20]
                        ]],
                        [1, Y.prototype.b.F, "Turret", 551413913256235, !1, [
                            [4, 33]
                        ]],
                        [4, Q.prototype.b.C, null, 9812010340692192, !1, [
                            [10, 0],
                            [3, 0]
                        ]],
                        [4, Q.prototype.b.q, null, 0xc1979ffe4c1d5, !1, [
                            [1, [2, "load"]],
                            [3, 1]
                        ]],
                        [4, Q.prototype.b.wh, null, 7749727012470284, !1, [
                            [0, [0, 0]]
                        ]],
                        [4, Q.prototype.b.Na, null, 0x80a200f2e889, !1, [
                            [0, [0, 0]]
                        ]],
                        [4, X.prototype.b.Ca, "Timer", 0xfc66e2d632c82, !1, [
                            [0, [0, 2]],
                            [3, 0],
                            [1, [2, "load1"]]
                        ]],
                        [-1, P.prototype.b.zh, null, 8931133404452705, !1, [
                            [11, "money"],
                            [7, [0, 100]]
                        ]],
                        [37, R.prototype.b.sd, null, 9141132955040886, !1, [
                            [7, [23, "money"]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 9119256759836154, [
                        [4, X.prototype.i.Ba, "Timer", 0, !1, !1, !1, 0xc3a6d1e204c5c, !1, [
                            [1, [2, "load1"]]
                        ]]
                    ],
                    [
                        [4, Q.prototype.b.Na, null, 0x636809299b61e, !1, [
                            [0, [0, 1]]
                        ]],
                        [4, X.prototype.b.Ca, "Timer", 0x91c1f1358c4ee, !1, [
                            [0, [0, 2]],
                            [3, 0],
                            [1, [2, "load2"]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0x4a6800f48caea, [
                        [4, X.prototype.i.Ba, "Timer", 0, !1, !1, !1, 7336243964416288, !1, [
                            [1, [2, "load2"]]
                        ]]
                    ],
                    [
                        [4, Q.prototype.b.Na, null, 0x859cc087b8db4, !1, [
                            [0, [0, 2]]
                        ]],
                        [4, X.prototype.b.Ca, "Timer", 0x3a46a22aa46fb, !1, [
                            [0, [0, 2]],
                            [3, 0],
                            [1, [2, "load3"]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0x599a3b3449d40, [
                        [4, X.prototype.i.Ba, "Timer", 0, !1, !1, !1, 0x56ab272a86dd0, !1, [
                            [1, [2, "load3"]]
                        ]]
                    ],
                    [
                        [4, Q.prototype.b.Na, null, 0xbf969f877da9f, !1, [
                            [0, [0, 3]]
                        ]],
                        [4, X.prototype.b.Ca, "Timer", 0x56abfa4e4b3e3, !1, [
                            [0, [0, 2]],
                            [3, 0],
                            [1, [2, "load4"]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 5108080916920383, [
                        [4, X.prototype.i.Ba, "Timer", 0, !1, !1, !1, 8913385836709149, !1, [
                            [1, [2, "load4"]]
                        ]]
                    ],
                    [
                        [4, Q.prototype.b.Na, null, 6966813399534909, !1, [
                            [0, [0, 4]]
                        ]],
                        [4, Q.prototype.b.C, null, 6326780620472353, !1, [
                            [10, 0],
                            [3, 1]
                        ]]
                    ]
                ],
                [0, null, !1, null, 8101229419167715, [
                        [2, S.prototype.i.Tb, null, 1, !1, !1, !1, 5875632327772622, !1, [
                            [4, 29]
                        ]],
                        [29, Q.prototype.i.Aa, null, 0, !1, !1, !1, 5951810229599094, !1, [
                            [10, 0]
                        ]],
                        [-1, P.prototype.i.df, null, 0, !1, !1, !1, 4959122228221063, !1, [
                            [11, "money"],
                            [8, 5],
                            [7, [0, 200]]
                        ]]
                    ],
                    [
                        [-1, P.prototype.b.M, null, 6187988406566922, !1, [
                            [4, 31],
                            [5, [0, 0]],
                            [0, [19, P.prototype.k.random, [
                                [0, 100],
                                [0, 200]
                            ]]],
                            [0, [19, P.prototype.k.random, [
                                [0, 200],
                                [0, 700]
                            ]]]
                        ]],
                        [31, Z.prototype.b.P, "CustomMovement", 7838313877624706, !1, [
                            [3, 1],
                            [0, [0, 90]]
                        ]],
                        [31, Q.prototype.b.q, null, 0xd4ab712aa0f0b, !1, [
                            [1, [2, "walk"]],
                            [3, 1]
                        ]],
                        [31, Y.prototype.b.F, "Turret", 4875048066998963, !1, [
                            [4, 5]
                        ]],
                        [31, Y.prototype.b.F, "Turret", 0xca12741ed04d5, !1, [
                            [4, 20]
                        ]],
                        [31, Y.prototype.b.F, "Turret", 9048352319316754, !1, [
                            [4, 33]
                        ]],
                        [-1, P.prototype.b.M, null, 9604762269813472, !1, [
                            [4, 31],
                            [5, [0, 0]],
                            [0, [19, P.prototype.k.random, [
                                [0, 100],
                                [0, 200]
                            ]]],
                            [0, [19, P.prototype.k.random, [
                                [0, 200],
                                [0, 700]
                            ]]]
                        ]],
                        [31, Z.prototype.b.P, "CustomMovement", 7721241248523161, !1, [
                            [3, 1],
                            [0, [0, 90]]
                        ]],
                        [31, Q.prototype.b.q, null, 9106865876887304, !1, [
                            [1, [2, "walk"]],
                            [3, 1]
                        ]],
                        [31, Y.prototype.b.F, "Turret", 5513856642696647, !1, [
                            [4, 5]
                        ]],
                        [31, Y.prototype.b.F, "Turret", 504629238151267, !1, [
                            [4, 20]
                        ]],
                        [31, Y.prototype.b.F, "Turret", 0x39d60b052cab1, !1, [
                            [4, 33]
                        ]],
                        [-1, P.prototype.b.M, null, 0xeacaa020897dd, !1, [
                            [4, 31],
                            [5, [0, 0]],
                            [0, [19, P.prototype.k.random, [
                                [0, 100],
                                [0, 200]
                            ]]],
                            [0, [19, P.prototype.k.random, [
                                [0, 200],
                                [0, 700]
                            ]]]
                        ]],
                        [31, Z.prototype.b.P, "CustomMovement", 8833816193534596, !1, [
                            [3, 1],
                            [0, [0, 90]]
                        ]],
                        [31, Q.prototype.b.q, null, 0xf74b9368d5488, !1, [
                            [1, [2, "walk"]],
                            [3, 1]
                        ]],
                        [31, Y.prototype.b.F, "Turret", 9449497169844904, !1, [
                            [4, 5]
                        ]],
                        [31, Y.prototype.b.F, "Turret", 8686554799566309, !1, [
                            [4, 20]
                        ]],
                        [31, Y.prototype.b.F, "Turret", 963215527899215, !1, [
                            [4, 33]
                        ]],
                        [29, Q.prototype.b.C, null, 7832216482044628, !1, [
                            [10, 0],
                            [3, 0]
                        ]],
                        [29, Q.prototype.b.q, null, 0xff8946efd5674, !1, [
                            [1, [2, "load"]],
                            [3, 1]
                        ]],
                        [29, Q.prototype.b.wh, null, 8671897209939494, !1, [
                            [0, [0, 0]]
                        ]],
                        [29, Q.prototype.b.Na, null, 0xb8dbd3090e6bc, !1, [
                            [0, [0, 0]]
                        ]],
                        [29, X.prototype.b.Ca, "Timer", 4819380420621972, !1, [
                            [0, [0, 4]],
                            [3, 0],
                            [1, [2, "load1"]]
                        ]],
                        [-1, P.prototype.b.zh, null, 6372575743523572, !1, [
                            [11, "money"],
                            [7, [0, 200]]
                        ]],
                        [37, R.prototype.b.sd, null, 5629651492878706, !1, [
                            [7, [23, "money"]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 6280536869581413, [
                        [29, X.prototype.i.Ba, "Timer", 0, !1, !1, !1, 6608562066706868, !1, [
                            [1, [2, "load1"]]
                        ]]
                    ],
                    [
                        [29, Q.prototype.b.Na, null, 0xae32d45eef5d, !1, [
                            [0, [0, 1]]
                        ]],
                        [29, X.prototype.b.Ca, "Timer", 0xf9d0f8ac7cc5e, !1, [
                            [0, [0, 4]],
                            [3, 0],
                            [1, [2, "load2"]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0x88016bf26b9fa, [
                        [29, X.prototype.i.Ba, "Timer", 0, !1, !1, !1, 0xb3159cf02ecc6, !1, [
                            [1, [2, "load2"]]
                        ]]
                    ],
                    [
                        [29, Q.prototype.b.Na, null, 0x83050dea56e8f, !1, [
                            [0, [0, 2]]
                        ]],
                        [29, X.prototype.b.Ca, "Timer", 0x643b9e0ea97c, !1, [
                            [0, [0, 4]],
                            [3, 0],
                            [1, [2, "load3"]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 42035502220836, [
                        [29, X.prototype.i.Ba, "Timer", 0, !1, !1, !1, 5444691627653063, !1, [
                            [1, [2, "load3"]]
                        ]]
                    ],
                    [
                        [29, Q.prototype.b.Na, null, 0x75f34eb1bbf1, !1, [
                            [0, [0, 3]]
                        ]],
                        [29, X.prototype.b.Ca, "Timer", 0xf2ee027e517f9, !1, [
                            [0, [0, 4]],
                            [3, 0],
                            [1, [2, "load4"]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 5538231178050292, [
                        [29, X.prototype.i.Ba, "Timer", 0, !1, !1, !1, 9421471349769126, !1, [
                            [1, [2, "load4"]]
                        ]]
                    ],
                    [
                        [29, Q.prototype.b.Na, null, 5737078531014751, !1, [
                            [0, [0, 4]]
                        ]],
                        [29, Q.prototype.b.C, null, 0x8bd1bc0a3eccb, !1, [
                            [10, 0],
                            [3, 1]
                        ]]
                    ]
                ],
                [0, null, !1, null, 4610846036129536, [
                        [2, S.prototype.i.Xl, null, 0, !1, !1, !1, 5239963082239677, !1, [
                            [4, 8]
                        ]]
                    ],
                    [
                        [-1, P.prototype.b.jm, null, 0x4141cd34db578, !1, [
                            [0, [4, [19, P.prototype.k.ih],
                                [0, 20]
                            ]]
                        ]],
                        [13, Q.prototype.b.xh, null, 0xb6420aa544241, !1, [
                            [0, [7, [19, P.prototype.k.ih],
                                [0, 2]
                            ]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 6064582982320686, [
                        [2, S.prototype.i.Xl, null, 0, !1, !1, !1, 0x8dd5df021a3f9, !1, [
                            [4, 9]
                        ]]
                    ],
                    [
                        [-1, P.prototype.b.jm, null, 6134791917042959, !1, [
                            [0, [5, [19, P.prototype.k.ih],
                                [0, 20]
                            ]]
                        ]],
                        [13, Q.prototype.b.xh, null, 9744700324990998, !1, [
                            [0, [7, [19, P.prototype.k.ih],
                                [0, 2]
                            ]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0xb1854e26f8142, [
                        [55, Q.prototype.i.vj, null, 0, !1, !1, !0, 0xeacd9a81144c5, !1, [
                            [3, 0],
                            [0, [0, 3800]],
                            [0, [0, 460]]
                        ]]
                    ],
                    [
                        [10, Q.prototype.b.xh, null, 0xd33470fddf7c1, !1, [
                            [0, [7, [20, 55, Q.prototype.k.lc, !1, null],
                                [0, 2]
                            ]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 7330104255255597, [
                        [56, Q.prototype.i.vj, null, 0, !1, !1, !0, 0x651c572c4b454, !1, [
                            [3, 0],
                            [0, [0, 0]],
                            [0, [0, 460]]
                        ]]
                    ],
                    [
                        [12, Q.prototype.b.xh, null, 0xd1ba2327bb173, !1, [
                            [0, [7, [20, 56, Q.prototype.k.lc, !1, null],
                                [0, 2]
                            ]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0xddd16a368aa81, [
                        [2, S.prototype.i.Tb, null, 1, !1, !1, !1, 0xab294bb20dad, !1, [
                            [4, 24]
                        ]],
                        [24, Q.prototype.i.Aa, null, 0, !1, !1, !1, 0xdad2cd05269ee, !1, [
                            [10, 0]
                        ]],
                        [-1, P.prototype.i.df, null, 0, !1, !1, !1, 9540625894551664, !1, [
                            [11, "money"],
                            [8, 5],
                            [7, [0, 300]]
                        ]]
                    ],
                    [
                        [-1, P.prototype.b.M, null, 0xeb7a395b7dd32, !1, [
                            [4, 25],
                            [5, [0, 0]],
                            [0, [19, P.prototype.k.ih]],
                            [0, [19, P.prototype.k.ns]]
                        ]],
                        [24, Q.prototype.b.C, null, 0xd1967b7f84bcf, !1, [
                            [10, 0],
                            [3, 0]
                        ]],
                        [24, Q.prototype.b.q, null, 7954785170007583, !1, [
                            [1, [2, "load"]],
                            [3, 1]
                        ]],
                        [24, Q.prototype.b.wh, null, 559917807555006, !1, [
                            [0, [0, 0]]
                        ]],
                        [24, Q.prototype.b.Na, null, 532971777838553, !1, [
                            [0, [0, 0]]
                        ]],
                        [24, X.prototype.b.Ca, "Timer", 8764023146059547, !1, [
                            [0, [0, 5]],
                            [3, 0],
                            [1, [2, "load1"]]
                        ]],
                        [-1, P.prototype.b.zh, null, 0x769d24e22e74b, !1, [
                            [11, "money"],
                            [7, [0, 300]]
                        ]],
                        [37, R.prototype.b.sd, null, 676258347850632, !1, [
                            [7, [23, "money"]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0x8fc5ba0c333cf, [
                        [24, X.prototype.i.Ba, "Timer", 0, !1, !1, !1, 0x5f3b6dfe6d4ee, !1, [
                            [1, [2, "load1"]]
                        ]]
                    ],
                    [
                        [24, Q.prototype.b.Na, null, 0x521f047250ec9, !1, [
                            [0, [0, 1]]
                        ]],
                        [24, X.prototype.b.Ca, "Timer", 7289304432561944, !1, [
                            [0, [0, 5]],
                            [3, 0],
                            [1, [2, "load2"]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0x8f7e590589a6d, [
                        [24, X.prototype.i.Ba, "Timer", 0, !1, !1, !1, 0x8ab2fbdd0bcc3, !1, [
                            [1, [2, "load2"]]
                        ]]
                    ],
                    [
                        [24, Q.prototype.b.Na, null, 0x7f73ae92a5482, !1, [
                            [0, [0, 2]]
                        ]],
                        [24, X.prototype.b.Ca, "Timer", 7622461528133594, !1, [
                            [0, [0, 5]],
                            [3, 0],
                            [1, [2, "load3"]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 5130873788150765, [
                        [24, X.prototype.i.Ba, "Timer", 0, !1, !1, !1, 7531595699953423, !1, [
                            [1, [2, "load3"]]
                        ]]
                    ],
                    [
                        [24, Q.prototype.b.Na, null, 0x617dcbc0e253b, !1, [
                            [0, [0, 3]]
                        ]],
                        [24, X.prototype.b.Ca, "Timer", 8793474948745988, !1, [
                            [0, [0, 5]],
                            [3, 0],
                            [1, [2, "load4"]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 6038250509745496, [
                        [24, X.prototype.i.Ba, "Timer", 0, !1, !1, !1, 6230284478324075, !1, [
                            [1, [2, "load4"]]
                        ]]
                    ],
                    [
                        [24, Q.prototype.b.Na, null, 0xc6f0b615059ca, !1, [
                            [0, [0, 4]]
                        ]],
                        [24, Q.prototype.b.C, null, 9350087533846728, !1, [
                            [10, 0],
                            [3, 1]
                        ]]
                    ]
                ],
                [0, null, !1, null, 565258404036945, [
                        [25, Ub.prototype.i.am, "DragDrop", 1, !1, !1, !1, 8614711197769562, !1]
                    ],
                    [
                        [25, Q.prototype.b.L, null, 0xc00a1c9fc541, !1, [
                            [4, 30],
                            [5, [0, 0]],
                            [7, [0, 0]]
                        ]],
                        [25, Q.prototype.b.G, null, 0xb89d92cc33240, !1],
                        [-1, P.prototype.b.D, null, 632363008859456, !1, [
                            [0, [1, 0.5]]
                        ]],
                        [28, Q.prototype.b.G, null, 0x3aa7eee8f797e, !1],
                        [-1, P.prototype.b.M, null, 6606769219883408, !1, [
                            [4, 26],
                            [5, [0, 0]],
                            [0, [4, [20, 30, Q.prototype.k.lc, !1, null],
                                [19, P.prototype.k.random, [
                                    [0, 0],
                                    [0, 300]
                                ]]
                            ]],
                            [0, [4, [20, 30, Q.prototype.k.ra, !1, null],
                                [19, P.prototype.k.random, [
                                    [0, 0],
                                    [0, 300]
                                ]]
                            ]]
                        ]],
                        [26, Q.prototype.b.L, null, 4801520522318075, !1, [
                            [4, 28],
                            [5, [0, 0]],
                            [7, [0, 0]]
                        ]],
                        [26, Q.prototype.b.L, null, 4680409161729123, !1, [
                            [4, 27],
                            [5, [0, 0]],
                            [7, [0, 0]]
                        ]],
                        [-1, P.prototype.b.D, null, 4723905040271814, !1, [
                            [0, [1, 0.1]]
                        ]],
                        [26, Q.prototype.b.G, null, 0x895d7fec778bf, !1],
                        [-1, P.prototype.b.D, null, 0x4a35e5ca2e0f1, !1, [
                            [0, [1, 0.5]]
                        ]],
                        [-1, P.prototype.b.M, null, 0xa7b0a4fd80bf4, !1, [
                            [4, 26],
                            [5, [0, 0]],
                            [0, [5, [20, 30, Q.prototype.k.lc, !1, null],
                                [19, P.prototype.k.random, [
                                    [0, 0],
                                    [0, 300]
                                ]]
                            ]],
                            [0, [5, [20, 30, Q.prototype.k.ra, !1, null],
                                [19, P.prototype.k.random, [
                                    [0, 0],
                                    [0, 300]
                                ]]
                            ]]
                        ]],
                        [26, Q.prototype.b.L, null, 9659119747214464, !1, [
                            [4, 28],
                            [5, [0, 0]],
                            [7, [0, 0]]
                        ]],
                        [26, Q.prototype.b.L, null, 8280775691417991, !1, [
                            [4, 27],
                            [5, [0, 0]],
                            [7, [0, 0]]
                        ]],
                        [-1, P.prototype.b.D, null, 7238840468384332, !1, [
                            [0, [1, 0.1]]
                        ]],
                        [26, Q.prototype.b.G, null, 6989688043882318, !1],
                        [-1, P.prototype.b.D, null, 6732146907523938, !1, [
                            [0, [1, 0.5]]
                        ]],
                        [-1, P.prototype.b.M, null, 8648457813706691, !1, [
                            [4, 26],
                            [5, [0, 0]],
                            [0, [5, [20, 30, Q.prototype.k.lc, !1, null],
                                [19, P.prototype.k.random, [
                                    [0, 0],
                                    [0, 300]
                                ]]
                            ]],
                            [0, [5, [20, 30, Q.prototype.k.ra, !1, null],
                                [19, P.prototype.k.random, [
                                    [0, 0],
                                    [0, 300]
                                ]]
                            ]]
                        ]],
                        [26, Q.prototype.b.L, null, 0xeb515d79862cd, !1, [
                            [4, 28],
                            [5, [0, 0]],
                            [7, [0, 0]]
                        ]],
                        [26, Q.prototype.b.L, null, 4614894669941186, !1, [
                            [4, 27],
                            [5, [0, 0]],
                            [7, [0, 0]]
                        ]],
                        [-1, P.prototype.b.D, null, 7765456535604428, !1, [
                            [0, [1, 0.1]]
                        ]],
                        [26, Q.prototype.b.G, null, 0x73954c71eb9bb, !1],
                        [30, Q.prototype.b.G, null, 9258482435615644, !1]
                    ]
                ],
                [0, null, !1, null, 9681781460531388, [
                        [5, Q.prototype.i.eb, null, 0, !1, !1, !0, 7196026605748251, !1, [
                            [4, 26]
                        ]]
                    ],
                    [
                        [5, Q.prototype.b.L, null, 6423608981731913, !1, [
                            [4, 15],
                            [5, [0, 0]],
                            [7, [0, 0]]
                        ]],
                        [5, Q.prototype.b.G, null, 0x876a28dd2bd82, !1],
                        [-1, P.prototype.b.D, null, 643376360069478, !1, [
                            [0, [0, 2]]
                        ]],
                        [15, Q.prototype.b.G, null, 0x3ed98fdc6709c, !1],
                        [-1, P.prototype.b.Zc, null, 8657051573530687, !1, [
                            [11, "mortar_kills"],
                            [7, [0, 1]]
                        ]],
                        [-1, P.prototype.b.Zc, null, 5473457414357495, !1, [
                            [11, "total_kills"],
                            [7, [0, 1]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 5222735737229883, [
                        [20, Q.prototype.i.eb, null, 0, !1, !1, !0, 5905102533325242, !1, [
                            [4, 26]
                        ]]
                    ],
                    [
                        [20, Q.prototype.b.L, null, 0x8efda2ce0c19c, !1, [
                            [4, 21],
                            [5, [0, 0]],
                            [7, [0, 0]]
                        ]],
                        [20, Q.prototype.b.G, null, 6784971359385074, !1],
                        [-1, P.prototype.b.D, null, 0x8b8218926829e, !1, [
                            [0, [0, 2]]
                        ]],
                        [21, Q.prototype.b.G, null, 6351002806945322, !1],
                        [-1, P.prototype.b.Zc, null, 299828192973849, !1, [
                            [11, "mortar_kills"],
                            [7, [0, 1]]
                        ]],
                        [-1, P.prototype.b.Zc, null, 9339503013506652, !1, [
                            [11, "total_kills"],
                            [7, [0, 1]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 7566707660851269, [
                        [33, Q.prototype.i.eb, null, 0, !1, !1, !0, 8763105548831476, !1, [
                            [4, 26]
                        ]]
                    ],
                    [
                        [33, Q.prototype.b.L, null, 5946319598830124, !1, [
                            [4, 34],
                            [5, [0, 0]],
                            [7, [0, 0]]
                        ]],
                        [33, Q.prototype.b.G, null, 0xc6fcdf0dd326b, !1],
                        [-1, P.prototype.b.D, null, 291157462826054, !1, [
                            [0, [0, 2]]
                        ]],
                        [34, Q.prototype.b.G, null, 0x8ec42eb105413, !1],
                        [-1, P.prototype.b.Zc, null, 0xe4edb2fdfc7ba, !1, [
                            [11, "mortar_kills"],
                            [7, [0, 1]]
                        ]],
                        [-1, P.prototype.b.Zc, null, 0x80d7f621053d5, !1, [
                            [11, "total_kills"],
                            [7, [0, 1]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 0xe4eef0a657115, [
                        [1, Q.prototype.i.eb, null, 0, !1, !1, !0, 0x9fd9deeb5a34b, !1, [
                            [4, 26]
                        ]]
                    ],
                    [
                        [1, Q.prototype.b.L, null, 7001670100095305, !1, [
                            [4, 14],
                            [5, [0, 0]],
                            [7, [0, 0]]
                        ]],
                        [1, Q.prototype.b.G, null, 338991015413757, !1],
                        [-1, P.prototype.b.D, null, 6184535439862801, !1, [
                            [0, [0, 2]]
                        ]],
                        [14, Q.prototype.b.G, null, 6017857117524079, !1]
                    ]
                ],
                [0, null, !1, null, 4777116781313294, [
                        [16, Q.prototype.i.eb, null, 0, !1, !1, !0, 397927897520821, !1, [
                            [4, 26]
                        ]]
                    ],
                    [
                        [16, Q.prototype.b.L, null, 0x4953485ce807b, !1, [
                            [4, 19],
                            [5, [0, 0]],
                            [7, [0, 0]]
                        ]],
                        [16, Q.prototype.b.G, null, 432881274313904, !1],
                        [-1, P.prototype.b.D, null, 5022546269108119, !1, [
                            [0, [0, 2]]
                        ]],
                        [19, Q.prototype.b.G, null, 8836675720251899, !1]
                    ]
                ],
                [0, null, !1, null, 0xe0f6de1d0af98, [
                        [31, Q.prototype.i.eb, null, 0, !1, !1, !0, 9337988485782224, !1, [
                            [4, 26]
                        ]]
                    ],
                    [
                        [31, Q.prototype.b.L, null, 5807281299218348, !1, [
                            [4, 32],
                            [5, [0, 0]],
                            [7, [0, 0]]
                        ]],
                        [31, Q.prototype.b.G, null, 8395994790071149, !1],
                        [-1, P.prototype.b.D, null, 0x3b9117993fc84, !1, [
                            [0, [0, 2]]
                        ]],
                        [32, Q.prototype.b.G, null, 5511575391834157, !1]
                    ]
                ],
                [0, null, !1, null, 0x677cb18468dd8, [
                        [-1, P.prototype.i.df, null, 0, !1, !1, !1, 446230578004676, !1, [
                            [11, "ai_unit"],
                            [8, 0],
                            [7, [0, 0]]
                        ]],
                        [-1, P.prototype.i.lm, null, 0, !1, !1, !1, 0xd8a0fffcefa32, !1]
                    ],
                    [
                        [-1, P.prototype.b.D, null, 551413632994655, !1, [
                            [0, [0, 1]]
                        ]],
                        [-1, P.prototype.b.M, null, 0xed585a2148f41, !1, [
                            [4, 5],
                            [5, [0, 0]],
                            [0, [19, P.prototype.k.random, [
                                [0, 3600],
                                [0, 3700]
                            ]]],
                            [0, [19, P.prototype.k.random, [
                                [0, 200],
                                [0, 700]
                            ]]]
                        ]],
                        [5, Z.prototype.b.P, "CustomMovement", 4862980796484443, !1, [
                            [3, 1],
                            [0, [0, -90]]
                        ]],
                        [5, Q.prototype.b.q, null, 5417658667881163, !1, [
                            [1, [2, "walk"]],
                            [3, 1]
                        ]],
                        [5, Y.prototype.b.F, "Turret", 7642987584494903, !1, [
                            [4, 1]
                        ]],
                        [5, Y.prototype.b.F, "Turret", 6741818086289098, !1, [
                            [4, 16]
                        ]],
                        [5, Y.prototype.b.F, "Turret", 7622985468511253, !1, [
                            [4, 31]
                        ]],
                        [-1, P.prototype.b.M, null, 8461302433427069, !1, [
                            [4, 5],
                            [5, [0, 0]],
                            [0, [19, P.prototype.k.random, [
                                [0, 3600],
                                [0, 3700]
                            ]]],
                            [0, [19, P.prototype.k.random, [
                                [0, 200],
                                [0, 700]
                            ]]]
                        ]],
                        [5, Z.prototype.b.P, "CustomMovement", 0x3c90b5e211bb1, !1, [
                            [3, 1],
                            [0, [0, -90]]
                        ]],
                        [5, Q.prototype.b.q, null, 0xbec02b8f90132, !1, [
                            [1, [2, "walk"]],
                            [3, 1]
                        ]],
                        [5, Y.prototype.b.F, "Turret", 315899513905348, !1, [
                            [4, 1]
                        ]],
                        [5, Y.prototype.b.F, "Turret", 4863266371325812, !1, [
                            [4, 16]
                        ]],
                        [5, Y.prototype.b.F, "Turret", 835305417036192, !1, [
                            [4, 31]
                        ]],
                        [-1, P.prototype.b.M, null, 0xc46b6611ab6c2, !1, [
                            [4, 5],
                            [5, [0, 0]],
                            [0, [19, P.prototype.k.random, [
                                [0, 3600],
                                [0, 3700]
                            ]]],
                            [0, [19, P.prototype.k.random, [
                                [0, 200],
                                [0, 700]
                            ]]]
                        ]],
                        [5, Z.prototype.b.P, "CustomMovement", 0xd252a0a3440c2, !1, [
                            [3, 1],
                            [0, [0, -90]]
                        ]],
                        [5, Q.prototype.b.q, null, 0x4af15a3246741, !1, [
                            [1, [2, "walk"]],
                            [3, 1]
                        ]],
                        [5, Y.prototype.b.F, "Turret", 9638390056609524, !1, [
                            [4, 1]
                        ]],
                        [5, Y.prototype.b.F, "Turret", 8327708433376336, !1, [
                            [4, 16]
                        ]],
                        [5, Y.prototype.b.F, "Turret", 0xd732cb4aac444, !1, [
                            [4, 31]
                        ]],
                        [-1, P.prototype.b.D, null, 0x4586980e24770, !1, [
                            [0, [0, 10]]
                        ]],
                        [-1, P.prototype.b.M, null, 5318607595592025, !1, [
                            [4, 5],
                            [5, [0, 0]],
                            [0, [19, P.prototype.k.random, [
                                [0, 3600],
                                [0, 3700]
                            ]]],
                            [0, [19, P.prototype.k.random, [
                                [0, 200],
                                [0, 700]
                            ]]]
                        ]],
                        [5, Z.prototype.b.P, "CustomMovement", 0xc45087c86b18c, !1, [
                            [3, 1],
                            [0, [0, -90]]
                        ]],
                        [5, Q.prototype.b.q, null, 5620616063300914, !1, [
                            [1, [2, "walk"]],
                            [3, 1]
                        ]],
                        [5, Y.prototype.b.F, "Turret", 826462593742446, !1, [
                            [4, 1]
                        ]],
                        [5, Y.prototype.b.F, "Turret", 0xd1bf8b760a5f5, !1, [
                            [4, 16]
                        ]],
                        [5, Y.prototype.b.F, "Turret", 391002842963283, !1, [
                            [4, 31]
                        ]],
                        [-1, P.prototype.b.M, null, 7300441621593475, !1, [
                            [4, 5],
                            [5, [0, 0]],
                            [0, [19, P.prototype.k.random, [
                                [0, 3600],
                                [0, 3700]
                            ]]],
                            [0, [19, P.prototype.k.random, [
                                [0, 200],
                                [0, 700]
                            ]]]
                        ]],
                        [5, Z.prototype.b.P, "CustomMovement", 0xb8dd4451a314b, !1, [
                            [3, 1],
                            [0, [0, -90]]
                        ]],
                        [5, Q.prototype.b.q, null, 0x676c4600e13f8, !1, [
                            [1, [2, "walk"]],
                            [3, 1]
                        ]],
                        [5, Y.prototype.b.F, "Turret", 0x93e6602e7dea6, !1, [
                            [4, 1]
                        ]],
                        [5, Y.prototype.b.F, "Turret", 9788051452959092, !1, [
                            [4, 16]
                        ]],
                        [5, Y.prototype.b.F, "Turret", 0xf54cd8a2e8547, !1, [
                            [4, 31]
                        ]],
                        [-1, P.prototype.b.M, null, 693443244244123, !1, [
                            [4, 5],
                            [5, [0, 0]],
                            [0, [19, P.prototype.k.random, [
                                [0, 3600],
                                [0, 3700]
                            ]]],
                            [0, [19, P.prototype.k.random, [
                                [0, 200],
                                [0, 700]
                            ]]]
                        ]],
                        [5, Z.prototype.b.P, "CustomMovement", 7483527589555767, !1, [
                            [3, 1],
                            [0, [0, -90]]
                        ]],
                        [5, Q.prototype.b.q, null, 0xcd76fda680fff, !1, [
                            [1, [2, "walk"]],
                            [3, 1]
                        ]],
                        [5, Y.prototype.b.F, "Turret", 9000766729189992, !1, [
                            [4, 1]
                        ]],
                        [5, Y.prototype.b.F, "Turret", 400632154927359, !1, [
                            [4, 16]
                        ]],
                        [5, Y.prototype.b.F, "Turret", 7929343698789106, !1, [
                            [4, 31]
                        ]],
                        [-1, P.prototype.b.D, null, 6121647268760113, !1, [
                            [0, [0, 15]]
                        ]],
                        [-1, P.prototype.b.M, null, 9466350294167602, !1, [
                            [4, 20],
                            [5, [0, 0]],
                            [0, [19, P.prototype.k.random, [
                                [0, 3600],
                                [0, 3700]
                            ]]],
                            [0, [19, P.prototype.k.random, [
                                [0, 200],
                                [0, 700]
                            ]]]
                        ]],
                        [20, Z.prototype.b.P, "CustomMovement", 7764731176191874, !1, [
                            [3, 1],
                            [0, [0, -90]]
                        ]],
                        [20, Q.prototype.b.q, null, 4589295452194344, !1, [
                            [1, [2, "walk"]],
                            [3, 1]
                        ]],
                        [20, Y.prototype.b.F, "Turret", 8627536183681146, !1, [
                            [4, 1]
                        ]],
                        [20, Y.prototype.b.F, "Turret", 0xf64640b9e3ec5, !1, [
                            [4, 16]
                        ]],
                        [20, Y.prototype.b.F, "Turret", 8613481157084023, !1, [
                            [4, 31]
                        ]],
                        [-1, P.prototype.b.D, null, 5570311703499242, !1, [
                            [0, [0, 20]]
                        ]],
                        [-1, P.prototype.b.kf, null, 8360005205925482, !1, [
                            [11, "ai_trench"],
                            [7, [0, 1]]
                        ]],
                        [-1, P.prototype.b.D, null, 7603743611092184, !1, [
                            [0, [1, 1]]
                        ]],
                        [-1, P.prototype.b.kf, null, 0xacac317ff32f1, !1, [
                            [11, "ai_trench"],
                            [7, [0, 0]]
                        ]],
                        [-1, P.prototype.b.M, null, 8399337961332773, !1, [
                            [4, 33],
                            [5, [0, 0]],
                            [0, [19, P.prototype.k.random, [
                                [0, 3600],
                                [0, 3700]
                            ]]],
                            [0, [19, P.prototype.k.random, [
                                [0, 200],
                                [0, 700]
                            ]]]
                        ]],
                        [33, Z.prototype.b.P, "CustomMovement", 5922568617695657, !1, [
                            [3, 1],
                            [0, [0, -90]]
                        ]],
                        [33, Q.prototype.b.q, null, 9235392652896644, !1, [
                            [1, [2, "walk"]],
                            [3, 1]
                        ]],
                        [33, Y.prototype.b.F, "Turret", 6354967559155898, !1, [
                            [4, 1]
                        ]],
                        [33, Y.prototype.b.F, "Turret", 6663209489344637, !1, [
                            [4, 16]
                        ]],
                        [33, Y.prototype.b.F, "Turret", 0x4b17fea1c2dd9, !1, [
                            [4, 31]
                        ]],
                        [-1, P.prototype.b.M, null, 5943291506285288, !1, [
                            [4, 33],
                            [5, [0, 0]],
                            [0, [19, P.prototype.k.random, [
                                [0, 3600],
                                [0, 3700]
                            ]]],
                            [0, [19, P.prototype.k.random, [
                                [0, 200],
                                [0, 700]
                            ]]]
                        ]],
                        [33, Z.prototype.b.P, "CustomMovement", 7038686698209095, !1, [
                            [3, 1],
                            [0, [0, -90]]
                        ]],
                        [33, Q.prototype.b.q, null, 6917537876191763, !1, [
                            [1, [2, "walk"]],
                            [3, 1]
                        ]],
                        [33, Y.prototype.b.F, "Turret", 8989419883000423, !1, [
                            [4, 1]
                        ]],
                        [33, Y.prototype.b.F, "Turret", 6486729830193405, !1, [
                            [4, 16]
                        ]],
                        [33, Y.prototype.b.F, "Turret", 0xf1f843c2c8d09, !1, [
                            [4, 31]
                        ]],
                        [-1, P.prototype.b.M, null, 0x88b101802a4fa, !1, [
                            [4, 33],
                            [5, [0, 0]],
                            [0, [19, P.prototype.k.random, [
                                [0, 3600],
                                [0, 3700]
                            ]]],
                            [0, [19, P.prototype.k.random, [
                                [0, 200],
                                [0, 700]
                            ]]]
                        ]],
                        [33, Z.prototype.b.P, "CustomMovement", 6980400991051444, !1, [
                            [3, 1],
                            [0, [0, -90]]
                        ]],
                        [33, Q.prototype.b.q, null, 0xde37686305dab, !1, [
                            [1, [2, "walk"]],
                            [3, 1]
                        ]],
                        [33, Y.prototype.b.F, "Turret", 0x91191e633143f, !1, [
                            [4, 1]
                        ]],
                        [33, Y.prototype.b.F, "Turret", 0x84c3c4f55d9f3, !1, [
                            [4, 16]
                        ]],
                        [33, Y.prototype.b.F, "Turret", 0x8eb9a59930762, !1, [
                            [4, 31]
                        ]],
                        [-1, P.prototype.b.D, null, 6034119388979654, !1, [
                            [0, [0, 30]]
                        ]],
                        [-1, P.prototype.b.kf, null, 0x4aa4db2b4f652, !1, [
                            [11, "ai_trench"],
                            [7, [0, 1]]
                        ]],
                        [-1, P.prototype.b.D, null, 0x643a000539eb1, !1, [
                            [0, [1, 1]]
                        ]],
                        [-1, P.prototype.b.kf, null, 9397997013451832, !1, [
                            [11, "ai_trench"],
                            [7, [0, 0]]
                        ]]
                    ],
                    [
                        [0, null, !1, null, 8056678985067832, [
                                [55, Q.prototype.i.vj, null, 0, !1, !1, !0, 8349069358339756, !1, [
                                    [3, 0],
                                    [0, [0, 3800]],
                                    [0, [0, 460]]
                                ]]
                            ],
                            [
                                [28, Q.prototype.b.G, null, 723172034711949, !1],
                                [-1, P.prototype.b.M, null, 8270963167107821, !1, [
                                    [4, 30],
                                    [5, [0, 0]],
                                    [0, [20, 55, Q.prototype.k.lc, !1, null]],
                                    [0, [20, 55, Q.prototype.k.ra, !1, null]]
                                ]],
                                [-1, P.prototype.b.M, null, 0x53faf4869705d, !1, [
                                    [4, 26],
                                    [5, [0, 0]],
                                    [0, [4, [20, 30, Q.prototype.k.lc, !1, null],
                                        [19, P.prototype.k.random, [
                                            [0, 0],
                                            [0, 300]
                                        ]]
                                    ]],
                                    [0, [4, [20, 30, Q.prototype.k.ra, !1, null],
                                        [19, P.prototype.k.random, [
                                            [0, 0],
                                            [0, 300]
                                        ]]
                                    ]]
                                ]],
                                [26, Q.prototype.b.L, null, 6982093832554474, !1, [
                                    [4, 28],
                                    [5, [0, 0]],
                                    [7, [0, 0]]
                                ]],
                                [26, Q.prototype.b.L, null, 6623118831197029, !1, [
                                    [4, 27],
                                    [5, [0, 0]],
                                    [7, [0, 0]]
                                ]],
                                [-1, P.prototype.b.D, null, 653761024866108, !1, [
                                    [0, [1, 0.1]]
                                ]],
                                [26, Q.prototype.b.G, null, 5774662250783262, !1],
                                [-1, P.prototype.b.D, null, 7173283323166432, !1, [
                                    [0, [1, 0.5]]
                                ]],
                                [-1, P.prototype.b.M, null, 5318040743545138, !1, [
                                    [4, 26],
                                    [5, [0, 0]],
                                    [0, [4, [20, 30, Q.prototype.k.lc, !1, null],
                                        [19, P.prototype.k.random, [
                                            [0, 0],
                                            [0, 300]
                                        ]]
                                    ]],
                                    [0, [4, [20, 30, Q.prototype.k.ra, !1, null],
                                        [19, P.prototype.k.random, [
                                            [0, 0],
                                            [0, 300]
                                        ]]
                                    ]]
                                ]],
                                [26, Q.prototype.b.L, null, 5797455475051842, !1, [
                                    [4, 28],
                                    [5, [0, 0]],
                                    [7, [0, 0]]
                                ]],
                                [26, Q.prototype.b.L, null, 0x64d74ff9c2a10, !1, [
                                    [4, 27],
                                    [5, [0, 0]],
                                    [7, [0, 0]]
                                ]],
                                [-1, P.prototype.b.D, null, 9272299145050136, !1, [
                                    [0, [1, 0.1]]
                                ]],
                                [26, Q.prototype.b.G, null, 6239113791210617, !1],
                                [-1, P.prototype.b.D, null, 6687229132510852, !1, [
                                    [0, [1, 0.5]]
                                ]],
                                [-1, P.prototype.b.M, null, 0xb695b13647fed, !1, [
                                    [4, 26],
                                    [5, [0, 0]],
                                    [0, [4, [20, 30, Q.prototype.k.lc, !1, null],
                                        [19, P.prototype.k.random, [
                                            [0, 0],
                                            [0, 300]
                                        ]]
                                    ]],
                                    [0, [4, [20, 30, Q.prototype.k.ra, !1, null],
                                        [19, P.prototype.k.random, [
                                            [0, 0],
                                            [0, 300]
                                        ]]
                                    ]]
                                ]],
                                [26, Q.prototype.b.L, null, 4567616972221934, !1, [
                                    [4, 28],
                                    [5, [0, 0]],
                                    [7, [0, 0]]
                                ]],
                                [26, Q.prototype.b.L, null, 0x90786d451d287, !1, [
                                    [4, 27],
                                    [5, [0, 0]],
                                    [7, [0, 0]]
                                ]],
                                [-1, P.prototype.b.D, null, 6921261002257993, !1, [
                                    [0, [1, 0.1]]
                                ]],
                                [26, Q.prototype.b.G, null, 0xc222b6837d453, !1],
                                [30, Q.prototype.b.G, null, 0x914aab1127125, !1],
                                [-1, P.prototype.b.kf, null, 7911180851664379, !1, [
                                    [11, "ai_unit"],
                                    [7, [0, 1]]
                                ]],
                                [-1, P.prototype.b.D, null, 0xc4075f257673e, !1, [
                                    [0, [1, 1]]
                                ]],
                                [-1, P.prototype.b.kf, null, 7098498047683681, !1, [
                                    [11, "ai_unit"],
                                    [7, [0, 0]]
                                ]]
                            ]
                        ]
                    ]
                ],
                [0, null, !1, null, 6561143692548233, [
                        [-1, P.prototype.i.df, null, 0, !1, !1, !1, 8113281314029474, !1, [
                            [11, "ai_trench"],
                            [8, 0],
                            [7, [0, 1]]
                        ]],
                        [-1, P.prototype.i.lm, null, 0, !1, !1, !1, 438172141462114, !1]
                    ],
                    [],
                    [
                        [0, null, !1, null, 6284177853338158, [
                                [20, Q.prototype.i.Aa, null, 0, !1, !1, !1, 6030132004047328, !1, [
                                    [10, 2]
                                ]],
                                [20, Y.prototype.i.rc, "Turret", 0, !1, !0, !1, 584880338599041, !1]
                            ],
                            [
                                [20, Q.prototype.b.vc, null, 6676404358668433, !1, [
                                    [0, [5, [20, 20, Q.prototype.k.ra, !1, null],
                                        [0, 20]
                                    ]]
                                ]],
                                [20, Z.prototype.b.P, "CustomMovement", 0x3add73d34af09, !1, [
                                    [3, 1],
                                    [0, [0, -90]]
                                ]],
                                [20, Q.prototype.b.q, null, 5994280356114546, !1, [
                                    [1, [2, "walk"]],
                                    [3, 1]
                                ]],
                                [20, Q.prototype.b.tc, null, 7956458185070541, !1, [
                                    [10, 0],
                                    [7, [0, 1]]
                                ]],
                                [20, Q.prototype.b.C, null, 0x955aa9d53aba8, !1, [
                                    [10, 2],
                                    [3, 0]
                                ]],
                                [20, Q.prototype.b.C, null, 6679578524643545, !1, [
                                    [10, 1],
                                    [3, 0]
                                ]],
                                [20, Y.prototype.b.uc, "Turret", 0x7af8418bd98c1, !1, [
                                    [0, [0, 1400]]
                                ]]
                            ]
                        ],
                        [0, null, !1, null, 5966965011008193, [
                                [33, Q.prototype.i.Aa, null, 0, !1, !1, !1, 9443460946383248, !1, [
                                    [10, 2]
                                ]],
                                [33, Y.prototype.i.rc, "Turret", 0, !1, !0, !1, 9260039866897098, !1]
                            ],
                            [
                                [33, Q.prototype.b.vc, null, 7565060520880483, !1, [
                                    [0, [5, [20, 33, Q.prototype.k.ra, !1, null],
                                        [0, 20]
                                    ]]
                                ]],
                                [33, Z.prototype.b.P, "CustomMovement", 534703455413957, !1, [
                                    [3, 1],
                                    [0, [0, -90]]
                                ]],
                                [33, Q.prototype.b.q, null, 0x3e6c8403bfc8a, !1, [
                                    [1, [2, "walk"]],
                                    [3, 1]
                                ]],
                                [33, Q.prototype.b.tc, null, 0x3e927a7a8f200, !1, [
                                    [10, 0],
                                    [7, [0, 3]]
                                ]],
                                [33, Q.prototype.b.C, null, 5858908893845132, !1, [
                                    [10, 2],
                                    [3, 0]
                                ]],
                                [33, Q.prototype.b.C, null, 670945597195642, !1, [
                                    [10, 1],
                                    [3, 0]
                                ]],
                                [33, Y.prototype.b.uc, "Turret", 7869887438355887, !1, [
                                    [0, [0, 600]]
                                ]]
                            ]
                        ],
                        [0, null, !1, null, 9974564145539368, [
                                [5, Q.prototype.i.Aa, null, 0, !1, !1, !1, 8527211887094665, !1, [
                                    [10, 2]
                                ]],
                                [5, Y.prototype.i.rc, "Turret", 0, !1, !0, !1, 0xd8fa7541d558, !1]
                            ],
                            [
                                [5, Q.prototype.b.vc, null, 5297614108327193, !1, [
                                    [0, [5, [20, 5, Q.prototype.k.ra, !1, null],
                                        [0, 20]
                                    ]]
                                ]],
                                [5, Z.prototype.b.P, "CustomMovement", 0x781e8771953bf, !1, [
                                    [3, 1],
                                    [0, [0, -90]]
                                ]],
                                [5, Q.prototype.b.q, null, 0xce4a3725870d7, !1, [
                                    [1, [2, "walk"]],
                                    [3, 1]
                                ]],
                                [5, Q.prototype.b.tc, null, 2546892697034, !1, [
                                    [10, 0],
                                    [7, [0, 3]]
                                ]],
                                [5, Q.prototype.b.C, null, 4590069756389548, !1, [
                                    [10, 2],
                                    [3, 0]
                                ]],
                                [5, Q.prototype.b.C, null, 0x98377626dc10f, !1, [
                                    [10, 1],
                                    [3, 0]
                                ]],
                                [5, Y.prototype.b.uc, "Turret", 9792611636417528, !1, [
                                    [0, [0, 700]]
                                ]]
                            ]
                        ]
                    ]
                ],
                [0, null, !1, null, 0xa119581fb4ccb, [
                        [2, S.prototype.i.Tb, null, 1, !1, !1, !1, 8495924848593061, !1, [
                            [4, 22]
                        ]]
                    ],
                    [
                        [-1, P.prototype.b.jf, null, 0x77cc4293852ed, !1, [
                            [0, [0, 0]]
                        ]],
                        [-1, P.prototype.b.M, null, 9978890225727384, !1, [
                            [4, 46],
                            [5, [0, 1]],
                            [0, [0, 0]],
                            [0, [0, 0]]
                        ]],
                        [-1, P.prototype.b.M, null, 6983560799660476, !1, [
                            [4, 42],
                            [5, [0, 1]],
                            [0, [0, 950]],
                            [0, [0, 500]]
                        ]],
                        [-1, P.prototype.b.M, null, 5073543513263517, !1, [
                            [4, 43],
                            [5, [0, 1]],
                            [0, [5, [20, 42, Q.prototype.k.lc, !1, null],
                                [0, 300]
                            ]],
                            [0, [4, [20, 42, Q.prototype.k.ra, !1, null],
                                [0, 75]
                            ]]
                        ]],
                        [-1, P.prototype.b.M, null, 9488233245158744, !1, [
                            [4, 44],
                            [5, [0, 1]],
                            [0, [5, [20, 42, Q.prototype.k.lc, !1, null],
                                [0, 20]
                            ]],
                            [0, [4, [20, 42, Q.prototype.k.ra, !1, null],
                                [0, 75]
                            ]]
                        ]],
                        [-1, P.prototype.b.M, null, 0x3cd5ad1a423f6, !1, [
                            [4, 45],
                            [5, [0, 1]],
                            [0, [4, [20, 42, Q.prototype.k.lc, !1, null],
                                [0, 280]
                            ]],
                            [0, [4, [20, 42, Q.prototype.k.ra, !1, null],
                                [0, 75]
                            ]]
                        ]]
                    ]
                ],
                [0, null, !1, null, 5690312281399017, [
                        [2, S.prototype.i.Tb, null, 1, !1, !1, !1, 0x3c88f00e11d1d, !1, [
                            [4, 43]
                        ]]
                    ],
                    [
                        [-1, P.prototype.b.jf, null, 0xb893773a03a8f, !1, [
                            [0, [0, 1]]
                        ]],
                        [46, Q.prototype.b.G, null, 8275242448005102, !1],
                        [42, Q.prototype.b.G, null, 8661486249266667, !1],
                        [43, Q.prototype.b.G, null, 9864305538614964, !1],
                        [44, Q.prototype.b.G, null, 0x7b27eb7aa1151, !1],
                        [45, Q.prototype.b.G, null, 8563566300047952, !1]
                    ]
                ],
                [0, null, !1, null, 4636327454992058, [
                        [2, S.prototype.i.Tb, null, 1, !1, !1, !1, 5086624167329154, !1, [
                            [4, 44]
                        ]]
                    ],
                    [
                        [46, Q.prototype.b.G, null, 7573888695502591, !1],
                        [42, Q.prototype.b.G, null, 0x4385086afb560, !1],
                        [43, Q.prototype.b.G, null, 0x834ab31f0fcd2, !1],
                        [44, Q.prototype.b.G, null, 6120744379762802, !1],
                        [45, Q.prototype.b.G, null, 0xfb85e3bb83aed, !1],
                        [-1, P.prototype.b.jf, null, 0xaaac7d879300c, !1, [
                            [0, [0, 1]]
                        ]],
                        [-1, P.prototype.b.im, null, 7168895157455486, !1],
                        [-1, P.prototype.b.hp, null, 0x6517c08d19a3b, !1]
                    ]
                ],
                [0, null, !1, null, 0x3f9cf4dd0ebc3, [
                        [2, S.prototype.i.Tb, null, 1, !1, !1, !1, 9322881342919740, !1, [
                            [4, 45]
                        ]]
                    ],
                    [
                        [46, Q.prototype.b.G, null, 0xf6c9b1a881840, !1],
                        [42, Q.prototype.b.G, null, 8533394657873333, !1],
                        [43, Q.prototype.b.G, null, 5549449333718398, !1],
                        [44, Q.prototype.b.G, null, 4596180245429284, !1],
                        [45, Q.prototype.b.G, null, 0x8d3252d4ba395, !1],
                        [-1, P.prototype.b.jf, null, 9486660146814538, !1, [
                            [0, [0, 1]]
                        ]],
                        [-1, P.prototype.b.im, null, 9272328080562416, !1],
                        [-1, P.prototype.b.Wl, null, 748941696818962, !1, [
                            [6, "menu"]
                        ]]
                    ]
                ],
                [0, null, !0, null, 6440985685718631, [
                        [47, Q.prototype.i.eb, null, 0, !1, !1, !0, 6792357384100431, !1, [
                            [4, 1]
                        ]],
                        [47, Q.prototype.i.eb, null, 0, !1, !1, !0, 9412629775605648, !1, [
                            [4, 31]
                        ]],
                        [47, Q.prototype.i.eb, null, 0, !1, !1, !0, 0x8a25667cc7f03, !1, [
                            [4, 16]
                        ]]
                    ],
                    [
                        [-1, P.prototype.b.jf, null, 0xe71cd8456c9b2, !1, [
                            [0, [0, 0]]
                        ]],
                        [-1, P.prototype.b.M, null, 0x846a7c382f08d, !1, [
                            [4, 46],
                            [5, [0, 1]],
                            [0, [0, 0]],
                            [0, [0, 0]]
                        ]],
                        [-1, P.prototype.b.M, null, 6028032214994543, !1, [
                            [4, 44],
                            [5, [0, 1]],
                            [0, [0, 800]],
                            [0, [0, 900]]
                        ]],
                        [-1, P.prototype.b.M, null, 0xf5408635c9782, !1, [
                            [4, 45],
                            [5, [0, 1]],
                            [0, [0, 1100]],
                            [0, [0, 900]]
                        ]],
                        [-1, P.prototype.b.M, null, 6024333565627395, !1, [
                            [4, 48],
                            [5, [0, 1]],
                            [0, [0, 950]],
                            [0, [0, 300]]
                        ]],
                        [-1, P.prototype.b.M, null, 0x8f6d87a912623, !1, [
                            [4, 52],
                            [5, [0, 1]],
                            [0, [0, 720]],
                            [0, [0, 600]]
                        ]],
                        [52, R.prototype.b.sd, null, 529923552780848, !1, [
                            [7, [10, [2, "Mortar Kills : "],
                                [23, "mortar_kills"]
                            ]]
                        ]],
                        [-1, P.prototype.b.M, null, 0xddec27a459591, !1, [
                            [4, 53],
                            [5, [0, 1]],
                            [0, [0, 762]],
                            [0, [0, 500]]
                        ]],
                        [53, R.prototype.b.sd, null, 8231743224692805, !1, [
                            [7, [10, [2, "Total Kills : "],
                                [23, "total_kills"]
                            ]]
                        ]]
                    ]
                ],
                [0, null, !0, null, 6680961297896319, [
                        [49, Q.prototype.i.eb, null, 0, !1, !1, !0, 400340464508249, !1, [
                            [4, 5]
                        ]],
                        [49, Q.prototype.i.eb, null, 0, !1, !1, !0, 0x4342cdd05bbed, !1, [
                            [4, 33]
                        ]],
                        [49, Q.prototype.i.eb, null, 0, !1, !1, !0, 5600787835030575, !1, [
                            [4, 20]
                        ]]
                    ],
                    [
                        [-1, P.prototype.b.jf, null, 7993586440026198, !1, [
                            [0, [0, 0]]
                        ]],
                        [-1, P.prototype.b.M, null, 5758872742216405, !1, [
                            [4, 46],
                            [5, [0, 1]],
                            [0, [0, 0]],
                            [0, [0, 0]]
                        ]],
                        [-1, P.prototype.b.M, null, 430151940357055, !1, [
                            [4, 44],
                            [5, [0, 1]],
                            [0, [0, 800]],
                            [0, [0, 900]]
                        ]],
                        [-1, P.prototype.b.M, null, 8129449009285888, !1, [
                            [4, 45],
                            [5, [0, 1]],
                            [0, [0, 1100]],
                            [0, [0, 900]]
                        ]],
                        [-1, P.prototype.b.M, null, 8444176471453991, !1, [
                            [4, 50],
                            [5, [0, 1]],
                            [0, [0, 950]],
                            [0, [0, 300]]
                        ]],
                        [-1, P.prototype.b.M, null, 5597209420715442, !1, [
                            [4, 52],
                            [5, [0, 1]],
                            [0, [0, 720]],
                            [0, [0, 600]]
                        ]],
                        [52, R.prototype.b.sd, null, 7495278179045276, !1, [
                            [7, [10, [2, "Mortar Kills : "],
                                [23, "mortar_kills"]
                            ]]
                        ]],
                        [-1, P.prototype.b.M, null, 6006496120766393, !1, [
                            [4, 53],
                            [5, [0, 1]],
                            [0, [0, 762]],
                            [0, [0, 500]]
                        ]],
                        [53, R.prototype.b.sd, null, 8027392768453546, !1, [
                            [7, [10, [2, "Total Kills : "],
                                [23, "total_kills"]
                            ]]
                        ]]
                    ]
                ]
            ]],
            ["menu_sheet", [
                [0, null, !1, null, 7678493195976606, [
                        [2, S.prototype.i.Tb, null, 1, !1, !1, !1, 0x8e221e3971e97, !1, [
                            [4, 36]
                        ]]
                    ],
                    [
                        [-1, P.prototype.b.Wl, null, 7640572534152058, !1, [
                            [6, "skirmish"]
                        ]]
                    ]
                ]
            ]]
        ],
        [], "media/", !1, 1900, 1250, 4, !0, !0, !0, "1.0.0.0", !0, !1, 0, 0, 79, !1, !0, 1, !0, []
    ]
};