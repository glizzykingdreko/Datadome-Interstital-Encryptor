
let _hsv;
var q = {
    570: function (q) {
        q.exports = function (q, p, Q) {
            if (!q) throw new Error("Error #2, check payload package readme");
            var r = 1789537805,
                P = Date.now() & 255,
                a = Date.now(),
                n = a,
                t = Math.floor(Math.random() * 1000),
                w = Math.floor(Math.random() * 1000);
            function b(q) {
                if (!q) return r;
                for (var p = 0, Q = 0; Q < q.length; Q++) p = (p << 5) - p + q.charCodeAt(Q) << 0;
                return p == 0 ? r : p;
            }
            function e(q) {
                return q > 37 ? 59 + q : q > 11 ? 53 + q : q > 1 ? 46 + q : 50 * q + 45;
            }
            function i(q) {
                var p = q ^ n,
                    Q = -1,
                    r = function () {
                        p = function (q) {
                            for (var p = 107; true;) {
                                switch (p) {
                                    case 11:
                                        break;
                                    case 4:
                                        var Q = 4,
                                            r = 2;
                                        if (Math.round((5 * (Q | r) + (Q & ~r) - 2 * (~Q & r) - 2 * (Q ^ r) + 4 * ~(Q | r) - ~(Q ^ r) - ~r - (Q | ~r) - (~Q | r)) / 2) > -2) {
                                            // window.ddResObj.afln = false;
                                            continue;
                                        }
                                        // window.ddResObj.afln = 52;
                                        continue;
                                    case 12:
                                        var P = 8,
                                            a = 0;
                                        if (2 * (P | a) - 3 * (~P & a) + 3 * ~P - 2 * (~P | a) - ~(P & a) > 3) {
                                            // window.ddResObj.eiwg = "fbqr";
                                            continue;
                                        }
                                        // window.ddResObj.eiwg = false;
                                        continue;
                                    case 107:
                                        q ^= q << 13, p = 161;
                                        continue;
                                    case 2:
                                        var n = 3,
                                            t = 10;
                                        if (6 * (n | t) - 2 * (n & ~t) - (~n & t) + 6 * ~(n | t) - ~(n ^ t) - (n | ~t) - ~n - (~n | t) - ~(n & t) + 1 < 15) {
                                            // window.ddResObj.orch = "akum";
                                            continue;
                                        }
                                        // window.ddResObj.orch = false;
                                        continue;
                                    case 209:
                                        var w = 7,
                                            b = 7;
                                        if (Math.round((5 * (w | b) + (w & ~b) - 2 * (~w & b) - 2 * (w ^ b) + 4 * ~(w | b) - ~(w ^ b) - ~b - (w | ~b) - (~w | b)) / 2) > -8) {
                                            // window.ddResObj.soek = false;
                                            continue;
                                        }
                                        // window.ddResObj.soek = 71;
                                        continue;
                                    case 200:
                                        q ^= q << 5, p = 1;
                                        continue;
                                    case 1:
                                        return q;
                                    case 161:
                                        q ^= q >> 17, p = 200;
                                        continue;
                                }
                                break;
                            }
                        }(p);
                    };
                this.getByte = function () {
                    var q = 9,
                        a = 3;
                    if (++Q > 2 && 4 * (q | a) - 2 * (q & ~a) + 3 * ~(q | a) - ~q - (~q | a) + 1 < 17) for (var n = 172; true;) {
                        switch (n) {
                            case 53:
                                var t = 5,
                                    w = 0;
                                if ((t | w) + (~t | w) - ~t < 9) {
                                    // window.ddResObj.bkhg = "wfjq";
                                    continue;
                                }
                                // window.ddResObj.bkhg = 3;
                                continue;
                            case 31:
                                var b = 5,
                                    e = 14;
                                if (4 * (b | e) - 2 * (b & ~e) + 3 * ~(b | e) - ~b - (~b | e) + 1 < 24) {
                                    // window.ddResObj.seiu = "qwti";
                                    continue;
                                }
                                // window.ddResObj.seiu = "ebfk";
                                continue;
                            case 172:
                                r(), n = 81;
                                continue;
                            case 81:
                                Q = 0, n = 49;
                                continue;
                            case 49:
                        }
                        break;
                    } else 4, 6;
                    var i = 16 - Q * 8;
                    return function () {
                        for (var q = 0, Q = 3; Q >= 0; Q--) q |= P << Q * 8;
                        return q ^ p;
                    }() >> i & 255;
                };
            }
            function X() {
                var r = function (p, Q) {
                    return b(p) ^ a + t + w * 2 ^ b(Q) ^ q;
                }(p, Q),
                    X = [],
                    R = [],
                    o = [];
                n += w;
                var V = new i(r),
                    Y = function (q) {
                        for (var p = [], Q = 0, r = 0; r < q.length; r++) {
                            var P = q.charCodeAt(r),
                                a = 8,
                                n = 5;
                            if (P < 128 && 4 * (a | n) - 3 * (~a & n) + 6 * ~(a | n) - 2 * ~(a ^ n) - ~n - (a | ~n) - ~a + 1 < 17) p[Q++] = P; else if (P < 2048) for (var t = 32; true;) {
                                switch (t) {
                                    case 46:
                                        p[Q++] = P & 63 | 128, t = 219;
                                        continue;
                                    case 166:
                                        var w = 3,
                                            b = 10;
                                        if (Math.round((-b + 4 * (w | b) - 2 * (w ^ b) + ~b - ~w) / 3) > -11) {
                                            // window.ddResObj.iocv = true;
                                            continue;
                                        }
                                        // window.ddResObj.iocv = "eopp";
                                        continue;
                                    case 32:
                                        p[Q++] = P >> 6 | 192, t = 46;
                                        continue;
                                    case 220:
                                        var e = 12,
                                            i = 8;
                                        if ((e | i) + (~e | i) - ~e < 23) {
                                            // window.ddResObj.mhaw = "clrg";
                                            continue;
                                        }
                                        // window.ddResObj.mhaw = "uebm";
                                        continue;
                                    case 219:
                                }
                                break;
                            } else (P & 64512) == 55296 && r + 1 < q.length && (q.charCodeAt(r + 1) & 64512) == 56320 ? (P = 65536 + ((P & 1023) << 10) + (q.charCodeAt(++r) & 1023), p[Q++] = P >> 18 | 240, p[Q++] = P >> 12 & 63 | 128, p[Q++] = P >> 6 & 63 | 128, p[Q++] = P & 63 | 128) : (p[Q++] = P >> 12 | 224, p[Q++] = P >> 6 & 63 | 128, p[Q++] = P & 63 | 128);
                        }
                        for (var X = 0; X < p.length; X++) p[X] ^= V.getByte();
                        return p;
                    },
                    U = function (q) {
                        try {
                            return JSON.stringify(q);
                        } catch (q) {
                            return;
                        }
                    };
                this.addSignal = function (q, p) {
                    var Q = 7,
                        r = 3;
                    if (typeof q == "string" && q.length != 0 || !(2 * (Q | r) - 3 * (~Q & r) + 3 * ~Q - 2 * (~Q | r) - ~(Q & r) < 11)) {
                        13, 2;
                        var P = 13,
                            a = 10;
                        if (!(p && ["number", "string", "boolean"].indexOf(typeof p) == -1 && a + (P & ~a) + (P & a) < 24)) {
                            5, 11;
                            var n = U(q),
                                t = U(p),
                                w = 0,
                                b = 3;
                            (!q || void 0 === t || q === String.fromCharCode(120, 116, 49)) && Math.round((3 * (w | b) - 2 * (~w & b) + ~b + (~w | b) - 2 * -1) / 2) > -5 || (7, 1, o.push(V.getByte()), X.push(Y(n)), o.push(V.getByte()), R.push(Y(t)));
                        }
                    }
                }, this.alreadyAdded = new Set(), this.addSignalOnce = function (q, p) {
                    if (!this.alreadyAdded.has(q)) for (var Q = 56; true;) {
                        switch (Q) {
                            case 116:
                                break;
                            case 56:
                                this.alreadyAdded.add(q), Q = 119;
                                continue;
                            case 175:
                                var r = 2,
                                    P = 14;
                                if (4 * (r | P) - 2 * (r & ~P) - (r ^ P) + 3 * ~(r | P) - ~(r ^ P) - ~r - (~r | P) < 20) {
                                    // window.ddResObj.denj = "aran";
                                    continue;
                                }
                                // window.ddResObj.denj = true;
                                continue;
                            case 119:
                                this.addSignal(q, p), Q = 116;
                                continue;
                            case 48:
                                var a = 10,
                                    n = 2;
                                if (Math.round((5 * (a & n) + 4 * (a | n) + 5 * ~n - (a | ~n) - ~a - (~a | n) - ~(a & n) + 1) / 6) > -1) {
                                    // window.ddResObj.uubm = 69;
                                    continue;
                                }
                                // window.ddResObj.uubm = "uvfa";
                                continue;
                        }
                        break;
                    }
                }, this.buildPayload = function () {
                    if (this._pl) return this._pl;
                    for (var q, p = [], Q = X.length, r = 0; r < Q; r++) {
                        var a = 0 === r ? 123 : 44;
                        p.push(a ^ o[2 * r]), Array.prototype.push.apply(p, X[r]), p.push(58 ^ o[2 * r + 1]), Array.prototype.push.apply(p, R[r]);
                    }
                    var n = 5,
                        t = 6;
                    (typeof _hsv == "string" && _hsv.length > 0 || typeof _hsv == "number" && !isNaN(_hsv)) && 2 * (n | t) - (~n & t) + 3 * ~(n | t) - (n | ~t) - ~n - (~n | t) < 16 ? q = U(_hsv) : (12, 3);
                    var w = [(p.length ? 44 : 123) ^ V.getByte()].concat(Y(JSON.stringify(String.fromCharCode(114, 51, 110))), 58 ^ V.getByte(), Y(q || "33"));
                    return Array.prototype.push.apply(p, w), p.push(125 ^ V.getByte()), X.length = 0, R.length = 0, o.length = 0, this._pl = function (q) {
                        for (var p = 0, Q = []; p < q.length;) {
                            var r = (q[p++] ^ P) << 16 | (q[p++] ^ P) << 8 | q[p++] ^ P;
                            Q.push(String.fromCharCode(e(r >> 18 & 63)), String.fromCharCode(e(r >> 12 & 63)), String.fromCharCode(e(r >> 6 & 63)), String.fromCharCode(e(63 & r)));
                        }
                        var a = q.length % 3;
                        return a && (Q.length -= 3 - a), Q.join("");
                    }(p);
                }, this.set = this.addSignal, this.set1 = this.addSignalOnce, this.bp = this.buildPayload;
            }
            return function () {
                for (var p = 222; true;) {
                    switch (p) {
                        case 242:
                            new X(r ^ q ^ 3074654), p = 96;
                            continue;
                        case 96:
                            break;
                        case 203:
                            var Q = 1,
                                P = 5;
                            if (2 * (Q | P) + 3 * ~(Q | P) - 2 * (~Q | P) - ~(Q & P) > -12) {
                                // window.ddResObj.ditu = 64;
                                continue;
                            }
                            // window.ddResObj.ditu = true;
                            continue;
                        case 158:
                            var a = 1,
                                w = 14;
                            if (4 * (a | w) - 3 * (~a & w) + 6 * ~(a | w) - 2 * ~(a ^ w) - ~w - (a | ~w) - ~a + 1 > -21) {
                                // window.ddResObj.dhas = 10;
                                continue;
                            }
                            // window.ddResObj.dhas = 55;
                            continue;
                        case 222:
                            n += t, p = 242;
                            continue;
                    }
                    break;
                }
            }(), X;
        };
    },
};
let p = {};
function Q(r) {
    var P = p[r],
        a = 8,
        n = 4;
    if (void 0 !== P && 4 * (a | n) - (a & ~n) + 4 * ~(a | n) - (a | ~n) - ~a - (~a | n) - ~(a & n) < 17) return P.exports;
    6, 7;
    var t = p[r] = {
        exports: {}
    };
    return q[r](t, t.exports, Q), t.exports;
}

function calculateHsv(hash) {
    // we wanna update the global hsv variable
    // so we can use it later on
    var q = hash.slice(-4),
    pad = Math.floor(Math.random() * 9),
    Qa = Math.random().toString(16).slice(2, 10).toUpperCase();
    _hsv = Qa.slice(0, pad) + q + Qa.slice(pad);

}

function createPayloadEncryptor(cid, hash, seed=4046101435) {
    calculateHsv(hash);
    let a = Q(570)
    let i = a(seed, cid, hash)
    return new i()
}



module.exports = createPayloadEncryptor;