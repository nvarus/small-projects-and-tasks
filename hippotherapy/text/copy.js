(function () {
    try {
        (function () {
            function Xf(a, c, b) {
                function d(p) { return function () { var u = b.o("scip", "") + p; b.C("scip", u) } } var e, f = Ec(a, "ci"); f = pb(a, f); var g = qe(a), h = W(a)(Ya), k = ["sync.cook.int"], l = ik(g.o("sci")); if (!l || 1440 < h - l) {
                    b.C("scip", "0"); var m = d("a"), q = re(a, c); return f({ Y: k, F: (e = {}, e.duid = q, e.hid = "" + Ib(a), e) }, ["https://an.yandex.ru/sync_cookie"], { Aa: 1500, zb: !0 }).then(function (p) {
                        p = n(p.Pa, "CookieMatchUrls"); Z(p) || (p = []); wa(p) ? d("1")() : m(); var u = Ec(a, "c"), x = pb(a, u); p = z(function (w, J) {
                            var P = "" + w + (mc(w, "?") ? "&" :
                                "?") + "duid=" + q; return x({ Y: k }, ["https://" + P], { Aa: 1500 }).then(C, r(d("b"), d("" + J)))
                        }, T(Ha, p)); return G.all(p)
                    }, m).then(function () { var p = b.o("scip"); !p || mc(p, "a") || mc(p, "b") || (g.C("sci", h), d("2")()) }, C)
                } return G.resolve()
            } function jk(a, c, b) { var d, e, f = ua(a, c); f && (qb(b) ? wa(ea(b)) ? (a = Yf(b)) && wa(a) && f.params((d = {}, d.__ym = (e = {}, e.fpmh = a, e), d)) : rb(a, c, "First party params error. Empty object.")() : rb(a, c, "First party params error. Not an object.")()) } function Yf(a) {
                a = Ia(a); return N(function (c, b) {
                    var d = b[0],
                    e = b[1], f = qb(e); if (!Ha(e) && !f) return c; e = f ? Yf(e) : e; wa(e) && c.push([d, e]); return c
                }, [], a)
            } function Zf(a, c, b) { void 0 === b && (b = 0); c = Ia(c); c = N(function (d, e) { var f = e[0], g = e[1], h = qb(g); if (!Ha(g) && !h) return d; h ? g = Zf(a, g, b + 1) : b || "yandex_cid" !== f ? ("phone_number" === f ? g = kk(g) : "email" === f && (g = lk(g)), g = $f(a, g)) : g = G.resolve(g); d.push(g.then(function (k) { return [f, k] })); return d }, [], c); return G.all(c) } function lk(a) {
                var c = db(a).toLowerCase().split("@"), b = c[0]; c = c[1]; if (!c) return a; c = c.replace("googlemail.com", "gmail.com");
                ag(c) && (c = "yandex.ru"); "yandex.ru" === c ? b = b.replace(se, "-") : "gmail.com" === c && (b = b.replace(se, "")); a = bg(b, "+"); -1 !== a && (b = b.slice(0, a)); return b + "@" + c
            } function kk(a) { a = yb(a); return "8" === a[0] ? "7" + a.slice(1) : a } function $f(a, c) {
                return new G(function (b, d) {
                    var e = (new a.TextEncoder).encode(c); a.crypto.subtle.digest("SHA-256", e).then(function (f) {
                        f = new a.Blob([f], { type: "application/octet-binary" }); var g = new a.FileReader; g.onload = function (h) {
                            h = n(h, "target.result"); var k = (h || "").indexOf(","); -1 !== k ? b(h.substring(k +
                                1)) : d(Fc("fpm.i"))
                        }; g.readAsDataURL(f)
                    }, d)
                })
            } function mk(a, c, b, d) { d = n(d, "target"); (d = Jb("button,input", a, d)) && "submit" === d.type && (d = cg(a, d)) && (b.push(d), fa(a, D([!1, a, c, b, d], dg), 300)) } function dg(a, c, b, d, e) { var f = ac(c)(e, d), g = -1 !== f; if (a || g) g && d.splice(f, 1), a = eg(c, e), a = "?" + Gc(a), d = D([c, b, "Form goal. Counter " + b.id + ". Form: " + a + "."], fg), ld(c, b, "form", d)(a) } function fg(a, c, b) { return nk(a, c).then(function (d) { d && rb(a, c, b)() }) } function ok(a) { a = pk(a); return Z(a) ? H("x", a) : a } function qk(a) {
                return H("x", rk(a) ||
                    [])
            } function rk(a) { var c = n(a, "speechSynthesis.getVoices"); if (!c) return ""; a = K(c, a.speechSynthesis); return Kb(function (b) { return z(v(b, n), sk) }, a()) } function tk(a) { if (a = uk(a)) try { for (var c = [], b = 0; b < gg.length; b += 1) { var d = a(gg[b]); c.push(d) } var e = c } catch (f) { e = [] } else e = []; return e ? H("x", e) : "" } function vk(a) { return (a = wk(a)) ? r(xk, nc(M), Za(D(["", ["matches", "media"]], yk)), v("x", H))(a) : "" } function yk(a, c, b) { return H("x", z(r(M, ka("concat", "" + a), v(b, n)), c)) } function zk(a, c) {
                var b = c.xd; if (!Ak(a, b)) return ""; var d =
                    []; a: { var e = Bk(a, b); try { var f = D(e, r)()(); break a } catch (J) { if ("ccf" === J.message) { f = null; break a } zb(J) } f = void 0 } if ($a(f)) var g = ""; else try { g = f.toDataURL() } catch (J) { g = "" } (f = g) && d.push(f); var h = b.getContextAttributes(); try { var k = xa(b.getSupportedExtensions, "getSupportedExtensions") ? b.getSupportedExtensions() || [] : [] } catch (J) { k = [] } k = H(";", k); f = te(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b); e = te(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b); g = b.getParameter(b.ALPHA_BITS); h = h && h.antialias ? "yes" : "no"; var l =
                        b.getParameter(b.BLUE_BITS), m = b.getParameter(b.DEPTH_BITS), q = b.getParameter(b.GREEN_BITS), p = b.getExtension("EXT_texture_filter_anisotropic") || b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || b.getExtension("MOZ_EXT_texture_filter_anisotropic"); if (p) { var u = b.getParameter(p.MAX_TEXTURE_MAX_ANISOTROPY_EXT); 0 === u && (u = 2) } u = {
                            pf: k, "webgl aliased line width range": f, "webgl aliased point size range": e, "webgl alpha bits": g, "webgl antialiasing": h, "webgl blue bits": l, "webgl depth bits": m, "webgl green bits": q,
                            "webgl max anisotropy": p ? u : null, "webgl max combined texture image units": b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS), "webgl max cube map texture size": b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE), "webgl max fragment uniform vectors": b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS), "webgl max render buffer size": b.getParameter(b.MAX_RENDERBUFFER_SIZE), "webgl max texture image units": b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS), "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE), "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS),
                            "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS), "webgl max vertex texture image units": b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS), "webgl max vertex uniform vectors": b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS), "webgl max viewport dims": te(b.getParameter(b.MAX_VIEWPORT_DIMS), b), "webgl red bits": b.getParameter(b.RED_BITS), "webgl renderer": b.getParameter(b.RENDERER), "webgl shading language version": b.getParameter(b.SHADING_LANGUAGE_VERSION), "webgl stencil bits": b.getParameter(b.STENCIL_BITS),
                            "webgl vendor": b.getParameter(b.VENDOR), "webgl version": b.getParameter(b.VERSION)
                        }; ue(d, u, ": "); a: { try { var x = b.getExtension("WEBGL_debug_renderer_info"); if (x) { var w = { "webgl unmasked vendor": b.getParameter(x.UNMASKED_VENDOR_WEBGL), "webgl unmasked renderer": b.getParameter(x.UNMASKED_RENDERER_WEBGL) }; break a } } catch (J) { } w = {} } ue(d, w); if (!b.getShaderPrecisionFormat) return H("~", d); ue(d, Ck(b)); return H("~", d)
            } function ue(a, c, b) { void 0 === b && (b = ":"); F(function (d) { return a.push("" + d[0] + b + d[1]) }, Ia(c)) } function Dk(a) {
                var c =
                    n(a, "ApplePaySession"), b = Q(a).protocol; a = c && "https:" === b && !oc(a) ? c : void 0; c = ""; if (!a) return c; try { c = "" + a.canMakePayments(); b = ""; var d = a.supportsVersion; if (S(d)) for (var e = 1; 20 >= e; e += 1)b += d.call(a, e) ? "" + e : "0"; return b + c } catch (f) { return c }
            } function Ek(a, c) { var b = a.document; if (I(b.readyState, ["interactive", "complete"])) bc(a, c); else { var d = ha(a), e = d.D, f = d.Sa, g = function () { f(b, ["DOMContentLoaded"], g); f(a, ["load"], g); c() }; e(b, ["DOMContentLoaded"], g); e(a, ["load"], g) } } function Fk(a, c) {
                var b = Gk(a), d = la(a, "r",
                    c), e = y(a, "rts.p"); return ma(a, c, K(N, null, function (f, g) { var h = { id: g.Bd, O: g.O }; h = d({ M: g.oe, G: ra(g.vd), F: g.J, Qa: g.Qa }, h, g.se)["catch"](e); return f.then(v(h, M)) }, G.resolve(""), b))["catch"](e)
            } function hg(a, c, b) { c = pc(a, void 0, c); c = ig(a, c.o("phc_settings") || ""); var d = n(c, "clientId"), e = n(c, "orderId"), f = n(c, "service_id"), g = n(c, "phones") || []; return d && e && g ? Hk(a, b.nc, { bd: Ik }).Pc(g).then(function (h) { return Jk(b, { Fa: d, La: e, Yc: f }, h.X, g, h.$) })["catch"](function () { }) : G.resolve() } function Ik(a, c, b) {
                a = Kk(b.sb); if ("href" ===
                    b.Yb) { var d = b.xa; c = d.href; b = c.replace(a, b.ma); if (c !== b) return d.href = b, !0 } else if ((a = null === (d = b.xa.textContent) || void 0 === d ? void 0 : d.replace(a, b.ma)) && a !== b.xa.textContent) return b.xa.textContent = a, !0; return !1
            } function Jk(a, c, b, d, e) {
                var f; c.Fa && c.La && (c.Fa === a.Fa && c.La === a.La || B(a, c, { X: {}, Gb: !0 }), 0 < e && Ta(a.$, [e]), F(function (g) { var h, k, l = g[0]; g = g[1]; var m = +(a.X[l] && a.X[l][g] ? a.X[l][g] : 0); B(a.X, (h = {}, h[l] = (k = {}, k[g] = m, k), h)) }, d), F(function (g) {
                    var h, k, l = g[0]; g = g[1]; var m = 1 + (a.X[l] ? a.X[l][g] : 0); B(a.X,
                        (h = {}, h[l] = (k = {}, k[g] = m, k), h))
                }, b), a.Ec && (a.Gb || b.length) && ((c = ua(a.l, a.nc)) && c.params("__ym", "phc", (f = {}, f.clientId = a.Fa, f.orderId = a.La, f.service_id = a.Yc, f.phones = a.X, f.performance = a.$, f)), a.Gb = !1))
            } function Lk(a, c) { try { var b = c.origin } catch (e) { } if (b) { var d = Ma(r(Da, za(b)), [/^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/, /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|ua|by|kz|com|com\.tr)\/?$/]); b = I(b.replace(/\/?$/, "/"), Mk); if (d || b) d = Ab(a, c.data), "appendremote" === n(d, "action") && Nk(a, c, d) } } function jg(a,
                c) {
                    var b, d, e, f, g = c.data; g = void 0 === g ? "" : g; var h = c.id; h = void 0 === h ? "" : h; var k = L(a), l = {}; l.getCachedTags = kg; l.form = (b = {}, b.closest = v(a, cg), b.select = Ok, b.getData = v(a, eg), b); l.button = (d = {}, d.closest = v(a, lg), d.select = mg, d.getData = v(a, ng), d); l.phone = (e = {}, e.hidePhones = D([a, null, [g]], og), e); l.status = (f = {}, f.checkStatus = D([a, Ea(h)], Pk), f); k.C("_u", l); b = c.lang; b = void 0 === b ? "" : b; d = c.appVersion; d = void 0 === d ? "" : d; e = c.fileId; e = void 0 === e ? "" : e; f = c.beta; f = void 0 === f ? !1 : f; d = H(".", r(Za(r(M, Ea)), nc(Boolean))(d.split(".")));
                I(e, Qk) && I(b, ["ru", "en", "tr"]) ? (b = (f ? "https://s3.mds.yandex.net/internal-metrika-betas" : "https://yastatic.net/s3/metrika") + (d ? "/" + d : "") + "/form-selector/" + (e + "_" + b + ".js"), b = pg(b) ? b : "") : b = ""; b && Hc(a, { src: b })
            } function Rk(a, c) {
                var b = eb(a); if (b) {
                    b = b("div"); var d = Lb(a); if (d) {
                        b.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>'; var e = b.firstChild; e.onload = function () { Hc(e.contentWindow, { src: c }) }; a._ym__remoteIframeEl =
                            e; d.appendChild(b); b.removeChild(e); var f = null; b.attachShadow ? f = b.attachShadow({ mode: "open" }) : b.createShadowRoot ? f = b.createShadowRoot() : b.webkitCreateShadowRoot && (f = b.webkitCreateShadowRoot()); f ? f.appendChild(e) : (d.appendChild(e), a._ym__remoteIframeContainer = e)
                    }
                }
            } function Pk(a) { var c, b = qg(a); a = L(a).o("getCounters", md)(); a = z(R("id"), a); return c = { id: b }, c.counterFound = !!b && I(b, a), c } function og(a, c, b) {
                var d; c = rg(a, c, { bd: Sk, de: (d = {}, d.href = !0, d) }); b = T(Boolean, z(function (f) { return "*" === f ? f : yb(f) }, b)); var e =
                    z(r(M, ka("concat", [""]), Tk("reverse"), Ja), b); b = Ic(a); d = sg(a, b, 1E3); c = K(c.Pc, c, e, !1); d.D(c); Uk(a, b); tg(a, b); c()
            } function Sk(a, c, b) {
                var d = eb(a), e = b.xa, f = b.sb, g = e.parentNode, h = e.textContent; if ("text" === b.Yb && h && d && g) {
                    b = d("small"); ug(b); var k = h.split(""), l = vg(h).length; F(ka("appendChild", b), N(function (m, q) { var p = m.Ub, u = m.gd, x = d("small"); x.innerHTML = q; var w = Vk.test(q); ug(x); w && (x.style.opacity = "" + (l - u - 1) / l); p.push(x); return { Ub: p, gd: u + (w ? 1 : 0) } }, { Ub: [], gd: 0 }, k).Ub); Wk(a, c, b, f); g.insertBefore(b, e); e.textContent =
                        ""; return !0
                } return !1
            } function Wk(a, c, b, d) { function e() { F(v(["style", "opacity", ""], qc), Aa(b.childNodes)); if (c) { var k = ua(a, c); k && k.extLink("tel:" + d, {}) } g(); h() } var f = ha(a), g = C, h = C; g = f.D(b, ["mouseenter"], function (k) { if (k.target === b) { var l = fa(a, e, 200, "ph.h.e"); (h || C)(); h = f.D(b, ["mouseleave"], function (m) { m.target === b && Na(a, l) }) } }) } function tg(a, c) {
                nd(a)(Bb(C, function () {
                    var b, d = a.document.body, e = (b = {}, b.attributes = !0, b.childList = !0, b.subtree = !0, b); Ba("MutationObserver", a.MutationObserver) && (new MutationObserver(c.R)).observe(d,
                        e)
                }))
            } function Uk(a, c) { return ha(a).D(a, ["load"], c.R) } function rg(a, c, b) { function d(k) { var l; return f(a, c, k) ? null === (l = h[k.sb]) || void 0 === l ? void 0 : l.wb : null } var e, f = b.bd; b = b.de; var g = void 0 === b ? (e = {}, e.href = !0, e.text = !0, e) : b, h; return { Pc: function (k) { return new G(function (l, m) { k && k.length || m(); h = wg()(k); nd(a)(Bb(v({ X: [], $: 0 }, l), function () { var q = W(a), p = q(X), u = g.href ? Xk(a, h) : [], x = g.text ? xg(a, h) : []; l({ X: T(Z, T(Boolean, z(d, u.concat(x)))), $: q(X) - p }) })) }) } } } function Xk(a, c) {
                var b = a.document.body; if (!b) return [];
                var d = yg(c); return N(function (e, f) { var g = n(f, "href"); try { var h = decodeURI(g || "") } catch (q) { h = "" } if ("tel:" === h.slice(0, 4)) { var k = (d.exec(h) || [])[0], l = k ? yb(k) : "", m = c[l]; Y(m) || !l && "*" !== m.wb[0] || (e.push({ Yb: "href", xa: f, sb: l, ma: zg(k, c[l].ma), Be: g }), g = yb(h.slice(4)), l = wg()([l ? m.wb : [g, ""]]), e.push.apply(e, xg(a, l, f))) } return e }, [], Aa(b.querySelectorAll("a")))
            } function xg(a, c, b) {
                void 0 === b && (b = a.document.body); if (!b) return []; var d = [], e = yg(c); Ag(a, b, function (f) {
                    if (f !== b && "script" !== (n(f, "parentNode.nodeName") ||
                        "").toLowerCase()) { var g = T(Boolean, e.exec(f.textContent || "") || []); F(function (h) { var k = yb(h); Y(c[k]) || d.push({ Yb: "text", xa: f, sb: k, ma: zg(h, c[k].ma), Be: f.textContent || "" }) }, g) }
                }, function (f) { return e.test(f.textContent || "") ? 1 : 0 }, a.NodeFilter.SHOW_TEXT); return d
            } function wg() { return ve(function (a, c) { var b = z(yb, c), d = b[0]; b = b[1]; a[d] = { ma: b, wb: c }; var e = Bg(d); e !== d && (a[e] = { ma: Bg(b), wb: c }); return a }, {}) } function zg(a, c) {
                for (var b = [], d = a.split(""), e = c.split(""), f = 0, g = 0; g < a.length && !(f >= e.length); g += 1) {
                    var h =
                        d[g]; "0" <= h && "9" >= h ? (b.push(e[f]), f += 1) : b.push(d[g])
                } return H("", b) + c.slice(f + 1)
            } function Bg(a) { var c = { 7: "8", 8: "7" }; return 11 === a.length && c[a[0]] ? "" + c[a[0]] + a.slice(1) : a } function yg(a) { return new RegExp("(?:" + H("|", z(Cg, ea(a))) + ")") } function eg(a, c, b) { return Dg(a, c, ["i", "n", "p"], void 0, b) } function Yk(a, c, b, d) {
                var e; if (a = ua(a, b)) {
                    var f = d.data; b = "" + b.id; var g = d.sended || []; d.sended || (d.sended = g); I(b, g) || !a.params || d.counter && "" + d.counter !== b || (a.params(f), g.push(b), d.parent && c.Vc((e = {}, e.type = "params",
                        e.data = f, e)))
                }
            } function Zk(a) { var c = C, b = null, d = a.length; if (0 !== a.length && a[0]) { var e = a.slice(-1)[0]; S(e) && (c = e, d = a.length + -1); var f = a.slice(-2)[0]; S(f) && (c = f, b = e, d = a.length + -2); d = a.slice(0, d); return { Dd: b, ra: c, J: 1 === d.length ? a[0] : qc(d) } } } function $k(a, c, b) {
                var d, e = Eg(a, c), f = Q(a); f = od(f.protocol + "//" + f.hostname + f.pathname); c = pd(a, c); var g = ""; do g += Ua(a); while (g.length < c.length); g = g.slice(0, c.length); a = ""; for (var h = 0; h < c.length; h += 1)a += (c.charCodeAt(h) + g.charCodeAt(h) - 96) % 10; c = [g, a]; a = c[0]; c = c[1]; return (d =
                    {}, d.mf = "https://adstat.yandex.ru/track?service=metrika&id=" + c + "&mask=" + a + "&ref=" + f, d.rt = "https://" + e + ".mc.yandex.ru/watch/3/1?browser-info=rt:1", d)[b]
            } function al(a, c, b, d) { a = n(d, "data"); if (Ha(a)) { var e = a.split("*"); a = e[0]; var f = e[1]; e = e[2]; "sc.frame" === a ? d.source.postMessage("sc.images*" + c, "*") : "sc.image" === a && f === c && b(e) } } function rc(a, c, b) { return { N: function (d, e) { Fg(d) ? e() : ma(a, b, function (f) { var g; if (f = n(f, "settings.hittoken")) f = (g = {}, g.hittoken = f, g), d.F = B(d.F || {}, f); e() }) } } } function bl(a, c) {
                var b =
                    Ka(a); if ("" !== b.o("cc")) return 0; var d = v("cc", b.C); d(0); var e = W(a), f = L(a); f = r(R(fb({ Pa: 1 }) + ".c"), Jc(function (g) { d(g + "&" + e(Ya)) }), v("cc", f.C)); la(a, "6", c)({}).then(f)["catch"](r(Jc(function () { var g = e(Ya); b.C("cc", "&" + g) }), y(a, "cc")))
            } function qd(a, c) { if (!c) return !1; var b = Q(a); return (new RegExp(c)).test("" + b.pathname + b.hash + b.search) } function cl(a, c) { return ma(a, c, function (b) { var d = n(b, "settings.dr"); return { Gd: dl(a, d), isEnabled: n(b, "settings.auto_goals") } }) } function el(a, c, b, d, e) {
                b = we(a.document.body,
                    b); d = we(a.document.body, d); I(e.target, [b, d]) && xe(a, c)
            } function Gg(a, c, b, d) { (b = fl(a, d, b)) && xe(a, c, b) } function Hg(a, c) { var b = Ig(a, c); return gl(a, b) } function Ig(a, c) { var b = we(a.document.body, c); return b ? hl(a, b) : "" } function xe(a, c, b) { if (c = ua(a, c)) a = qc(["dr", b || "" + Ua(a, 10, 99)]), c.params(qc(["__ym", a])) } function we(a, c) { var b = null; try { b = c ? sc(c, a) : b } catch (d) { } return b } function Jg(a) { a = Aa(Kg(a)); return z(function (c) { c = c.charCodeAt(0).toString(2); return Lg("0", 8, c) }, a) } function hl(a, c) {
                if (!c) return ""; var b =
                    [], d = n(a, "document"); Ag(a, c, function (e) { if (e.nodeType === d.TEXT_NODE) var f = e.textContent; else e instanceof a.HTMLImageElement ? f = e.alt : e instanceof a.HTMLInputElement && (f = e.value); (f = f && f.trim()) && b.push(f) }); return 0 === b.length ? "" : b.join(" ")
            } function il(a, c, b) { a = sa(b); b = a[1]; "track" === a[0] && c({ version: "0", cb: b }) } function jl(a, c, b) { if (b) { var d = b.version; (b = n(kl, d + "." + b.cb)) && (c && I(b, ll) || a("ym-" + b + "-" + d)) } } function rd(a, c, b) {
                return function (d) {
                    var e, f, g = ua(c, b); g && ml(a, d, c) && (g = K(g.params, g), (d = ye(a,
                        d, "goods")) && g && g((e = {}, e.__ym = (f = {}, f.ecommerce = [d], f), e)))
                }
            } function nl(a, c, b, d) { var e, f; c = n(d, "ecommerce") || {}; var g = n(d, "event") || ""; c = (g = Mg[g]) ? ye(g, c, "items") : void 0; if (!c) a: { c = d; !Z(d) && sd(a, wa(d)) && (c = sa(c)); if (Z(c) && (a = Mg[c[1]], "event" === c[0] && a)) { c = ye(a, c[2], "items"); break a } c = void 0 } (d = c || ol(d)) && b && b((e = {}, e.__ym = (f = {}, f.ecommerce = [d], f), e)) } function ol(a) { var c = n(a, "ecommerce") || {}; a = T(cc(pl), ea(c)); a = N(function (b, d) { b[d] = c[d]; return b }, {}, a); return ea(a).length ? a : void 0 } function ml(a,
                c, b) { var d = !1, e = ""; if (!qb(c)) return sb(b, "", "Ecommerce data should be an object"), d; var f = c.goods; switch (a) { case "detail": case "add": case "remove": Z(f) && f.length ? (d = Ng(function (g) { return qb(g) && (Ha(g.id) || sd(b, g.id) || Ha(g.name)) }, f)) || (e = "All items in 'goods' should be objects and contain 'id' or 'name' field") : e = "Ecommerce data should contain 'goods' non-empty array"; break; case "purchase": sd(b, c.id) || Ha(c.id) ? d = !0 : e = "Purchase object should contain string or number 'id' field" }sb(b, "", e); return d }
            function ye(a, c, b) { var d, e; if (c) { var f = c.purchase || c; c = ea(f); var g = f[b]; if (g) { var h = (d = {}, d[a] = (e = {}, e.products = z(ql, g), e), d); 1 < c.length && (h[a].actionField = N(function (k, l) { if (l === b) return k; if ("currency" === l) return h.currencyCode = f.currency, k; k[ze[l] || l] = f[l]; return k }, {}, c)); return h } } } function ql(a) { var c = {}; F(function (b) { var d = ze[b] || b; -1 !== b.indexOf("item_category") ? (d = ze.item_category, c[d] = c[d] ? c[d] + ("/" + a[b]) : a[b]) : c[d] = a[b] }, ea(a)); return c } function nd(a, c) {
                function b(e) {
                    n(c, d) ? e() : fa(a, v(e,
                        b), 100)
                } void 0 === c && (c = a); var d = (c.nodeType ? "contentWindow." : "") + "document.body"; return za(function (e, f) { b(f) })
            } function Ag(a, c, b, d, e) { function f(g) { return S(d) ? d(g) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT } void 0 === e && (e = -1); if (S(b) && f(c) === a.NodeFilter.FILTER_ACCEPT && (b(c), !Og(c))) for (c = a.document.createTreeWalker(c, e, d ? { acceptNode: f } : null, !1); c.nextNode() && !1 !== b(c.currentNode);); } function rl(a) {
                var c = a.l, b = tb(a.V); if (b) {
                    var d = Math.random(); a = {
                        x: b.scrollLeft,
                        y: b.scrollTop
                    }; if (b.Rb) { if (d = Ae[b.Rb], !d || 10 > Math.abs(a.x - d.x) && 10 > Math.abs(a.y - d.y)) return } else { for (; Ae[d];)d = Math.random(); b.Rb = d } Ae[b.Rb] = a; if (b !== c.document) { d = ub(c, b); c = Fa(c); var e = []; b = b[ya]; !b || 0 > b ? a = [] : (Ga(e, 16), E(e, c), E(e, a.x), E(e, a.y), E(e, b), a = e); a = aa(d, a) } else a = []; return a
                }
            } function Pg(a) { var c = a.l, b = a.V; Qg(a); if (b.touches && b.touches.length) { var d = tb(b); if (d && d !== c.document) return aa(ub(c, d), Kb(function (e) { return Rg(c, Fa(c), "touch", d, [e.pageX, e.pageY], 0, 0) }, Aa(b.touches))) } } function sl(a) {
                var c =
                    a.l; a = Fa(c); var b = td(c), d = Sg(c); c = []; var e = b[0]; b = b[1]; var f = d[0]; d = d[1]; Ga(c, 28); E(c, a); E(c, e); E(c, b); E(c, f); E(c, d); return c
            } function Tg(a) { var c = []; return Oa(a.l, c, 13) ? [] : c } function tl(a) {
                var c = a.l; a = a.V; var b = tb(a); if (b) {
                    var d; "wheel" === a.type ? d = 0 < a.deltaY ? 1 : 0 > a.deltaY ? 2 : 0 : "mousewheel" === a.type && a.wheelDelta && (d = 0 < a.wheelDelta ? 2 : 0 > a.wheelDelta ? 1 : 0); if (d) {
                        var e = ud(c, a); a = ub(c, b); c = Fa(c); e = [e.x, e.y]; b = b[ya]; if (!b || 0 > b) b = []; else {
                            var f = []; Ga(f, 31); E(f, c); E(f, b); E(f, e[0]); E(f, e[1]); Ga(f, 0); Ga(f, 0);
                            Ga(f, d); b = f
                        } return aa(a, b)
                    }
                }
            } function Qg(a) { var c = a.l; a = Be(c); var b = W(c)(X); if (!(10 > b - Ug || 10 > Math.abs(a.x - Ce.x) && 10 > Math.abs(a.y - Ce.y))) return Ug = b, Ce = a, c = Fa(c), b = [], Ga(b, 3), E(b, c), E(b, a.x), E(b, a.y), b } function ul(a) { var c = a.l, b = a.V, d = W(c)(X), e = d - Vg; if (!(10 > e)) { c = ud(c, b); b = De.x - c.x; var f = De.y - c.y; b = b * b + f * f; if (!(0 >= b || 16 > b && 100 > e || 20 > e && 256 > b)) return Vg = d, De = c, Kc(a) } } function vl(a, c, b, d, e) {
                function f() { k && k.stop() } if (!c.yb) return G.resolve(C); var g = la(a, "4", c), h = { F: { "wv-type": "0" }, G: ra() }; b = new wl(a,
                    b, function (l, m, q) { if (!g) return G.resolve(); m = "wv-data=" + Wg(l, !0); for (var p = l.length, u = 0, x = 255, w = 255, J, P, ba; p;) { J = 21 < p ? 21 : p; p -= J; do P = "string" === typeof l ? l.charCodeAt(u) : l[u], u += 1, 255 < P && (ba = P >> 8, P &= 255, P ^= ba), x += P, w += x; while (--J); x = (x & 255) + (x >> 8); w = (w & 255) + (w >> 8) } l = (x & 255) + (x >> 8) << 8 | (w & 255) + (w >> 8); return g(B({}, h, { M: m, F: { "wv-check": 65535 === l ? 0 : l, "wv-type": "0" } }), c, q)["catch"](y(a, "m.n.m.s")) }); var k = xl(a, b, d, e); return ma(a, c, function (l) {
                        l && L(a).C("isEU", n(l, "settings.eu")); if (!Ee(a) && k) {
                            var m = dc(a),
                            q = m.o("visorc"); I(q, ["w", "b"]) || (q = ""); Xg(a) && Yg(a, vd, "visorc") && !yl.test(gb(a) || "") || (q = "b"); l = n(l, "settings.webvisor.recp"); if (!a.isFinite(l) || 0 > l || 1 < l) q = "w"; q || (q = L(a).o("hitId") % 1E4 / 1E4 < l ? "w" : "b"); m.C("visorc", q, 30); "w" === q && k.start()
                        } return f
                    })
            } function xl(a, c, b, d) {
                var e = a.document, f = [], g = ha(a), h = ":submit" + Math.random(), k = [], l = K(c.flush, c), m = ca(function (u, x) { y(a, "hfv." + u, function () { try { var w = x.type } catch (J) { return } w = I(w, d); c.push(x, { type: u }); w && l() })() }), q = y(a, "sfv", function () {
                    if (!Fe(a)) {
                        var u =
                            b(a), x = zl(a); F(function (w) { f.push(g.D(w.target, [w.event], m(w.type))) }, u); F(function (w) { f.push(g.D(w.target, [w.event], y(a, "hff." + w.type + "." + w.event, function (J) { F(za({ l: a, V: J, flush: l }), w.H) }))) }, x); k = Zg(a, "form", e); e.attachEvent && (u = Zg(a, "form *", e), F(function (w) { f.push(g.D(w, ["submit"], m("form"))) }, k), F(function (w) { Ge(w) && f.push(g.D(w, ["change"], m("formInput"))) }, u)); F(function (w) {
                                var J = w.submit; if (S(J) || "object" === typeof J && Al.test("" + J)) w[h] = J, w.submit = y(a, "fv", function () {
                                    var P = { target: w, type: "submit" };
                                    m("document")(P); return w[h]()
                                })
                            }, k)
                    }
                }), p = y(a, "ufv", function () { F(Ja, f); F(function (u) { u && (u.submit = u[h]) }, k); c.flush() }); return { start: q, stop: p }
            } function $g(a, c) { var b = T(function (e) { return 0 < e.H.length }, c), d = ah({ target: a.document, type: "document" }); return z(r(M, d, Bl(a)), b) } function bh(a, c) { var b = a.l, d = [], e = c.form; if (!c[ya] && e) { var f = e.elements; e = e.length; for (var g = 0; g < e; g += 1) { var h = f[g]; wd(h) && !h[ya] && Ta(d, ub(b, h)) } } else Ta(d, ub(b, c)); return d } function He(a) {
                if (Lc) {
                    Lc = !1; var c = Fa(a.l), b = []; Oa(a.l, b,
                        15) ? a = [] : (E(b, c), a = b); return a
                }
            } function ch(a) { if (!Lc) { Lc = !0; a = Fa(a.l); var c = []; Ga(c, 14); E(c, a); return c } } function Cl(a, c, b) { var d = c[ya]; if (d) { a: { var e = Fa(a), f = c[ya]; if (0 < f) { var g = []; c = Ie(a, c); var h = ec[f], k = c[0] + "x" + c[1], l = c[2] + "x" + c[3]; if (k !== h.Lc) { h.Lc = k; if (Oa(a, g, 9)) { a = []; break a } E(g, e); E(g, f); E(g, c[0]); E(g, c[1]) } if (l !== h.size) { h.size = l; if (Oa(a, g, 10)) { a = []; break a } E(g, e); E(g, f); E(g, c[2]); E(g, c[3]) } if (g.length) { a = g; break a } } a = [] } Ta(b, a) } return d } function xd(a, c, b) {
                void 0 === b && (b = !1); if ("button" ===
                    c.getAttribute("type")) return { Ka: !1, uc: !1, Dc: !1 }; var d = c && Mb("ym-record-keys", c), e = dh(c); a = Je(a, c) || b && e; return { Ka: !(d || !a), uc: d, Dc: e }
            } function Je(a, c) { return eh(a, c) || Mc(a, c) ? !0 : fh(a, c) } function dh(a) { if (!a) return !1; var c = a.placeholder, b = a.type; a = T(gh, [a.className, a.id, a.name]); return b && I(b, Dl) || Ma(Da(El), a) || gh(c) && Fl.test(c) } function gh(a) { return !!(a && 2 < a.length) } function hh(a, c) { return c && Mb("(ym-disable-submit|-metrika-noform)", c) } function fh(a, c) {
                if (na(c)) return !1; if (Og(c)) {
                    var b = c.parentNode;
                    return (na(b) ? 0 : 11 === b.nodeType) ? !1 : fh(a, c.parentNode)
                } if (Gl.test(c.className)) return !0; b = ih(a); if (!b) return !1; var d = b.call(c, ".ym-hide-content *"); return d && (Hl.test(c.className) || b.call(c, ".ym-hide-content .ym-show-content *")) ? !1 : d
            } function Il(a) { return !!Cb(function (c) { return I(c.type, ["articleInfo", "publishersHeader"]) }, a) } function yd(a) { return Z(a) ? z(yd, a) : na(a) || "object" !== typeof a ? a : N(function (c, b) { var d = b[0], e = b[1], f = Jl[d]; Y(f) && (f = d); e = I(f, Kl) ? e : yd(e); f ? c[f] = e : c[d] = e; return c }, {}, Ia(a)) } function Ll(a,
                c) { return ma(a, c, function (b) { var d = L(a); O(c); if (!d.o("dSync", !1)) return d.C("dSync", !0), jh(a, b, { sa: c, rb: "s", Pb: "ds", ze: function (e, f, g) { var h = e.Pa; e = e.host; if (n(h, "settings")) return zb(Va("ds.e")); f = f(X) - g; g = e[1]; var k, l; h = ra((k = {}, k.di = h, k.dit = f, k.dip = g, k)); k = (l = {}, l["page-url"] = Q(a).href, l); return la(a, "S", kh)({ G: h, F: k }, kh)["catch"](y(a, "ds.rs")) } }) }) } function jh(a, c, b) { var d = b.sa, e = W(a), f = Ml(a, c.userData, d), g = Nl(a); return g.length ? Ol(a, e, f, c, b).then(function () { return Pl(a, g, f, e, b) }, C) : G.resolve() }
            function Nl(a) { var c = zd(a); a = r(Ke, cc(["iPhone", "iPad"]))(a); return c ? Ql : a ? Rl : [] } function Pl(a, c, b, d, e) { var f = e.ze, g = void 0 === f ? C : f, h = e.Pb, k = d(X); return Sl(a, c, e)(Bb(function (l) { F(function (m) { m && Ad(a, h + ".s", m) }, l); l = d(Ya); b.C(h, l) }, function (l) { b.C(h, d(Ya)); g(l, d, k) })) } function Ol(a, c, b, d, e) { var f = e.Pb, g = e.sa; return new G(function (h, k) { var l = b.o(f, 0); l = parseInt("" + l, 10); return 60 >= c(Ya) - l ? k() : Tl(a) ? h(void 0) : lh(d) ? k() : h(Ul(a, g)) }) } function Sl(a, c, b) {
                var d = b.rb, e = b.data, f = la(a, d, b.sa); a = B({}, mh); e &&
                    B(a.F, e); return Vl(z(function (g) { return Wl(f(mh, z(function (h) { var k = h[1], l = h[2]; h = H("", z(function (m) { return String.fromCharCode(m.charCodeAt(0) + 10) }, h[0].split(""))); return "http" + (l ? "s" : "") + "://" + h + ":" + k + "/" + Xl[d] }, g), { hd: !1, ue: !0 }).then(function (h) { return B({}, h, { host: g[h.Le] }) })) }, c))
            } function Ml(a, c, b) {
                var d = c || {}, e = la(a, "u", b), f = Ka(a); return {
                    o: function (g, h) { return Y(d[g]) ? f.o(g, h) : d[g] }, C: function (g, h) {
                        var k, l = "" + h; d[g] = l; f.C(g, l); return e({ F: (k = {}, k.key = g, k.value = l, k) }, [ta.ha + "//mc.yandex.ru/user_storage_set"],
                            {})["catch"](y(a, "u.d.s.s"))
                    }
                }
            } function nh(a, c, b) { var d = n(a, "AppMetricaInitializer"), e = n(d, "init"); if (e) try { K(e, d)(hb(a, c)) } catch (f) { } else oh = fa(a, D([a, c, 2 * b], nh), b, "ai.d"); return function () { return Na(a, oh) } } function Yl(a, c, b) { if (b && (b = lg(a, b), b = ng(a, b))) { b = "?" + Gc(b); var d = rb(a, c, "Button goal. Counter " + c.id + ". Button: " + b + "."); ld(a, c, "btn", d)(b) } } function Zl(a, c) { var b; a((b = {}, b.clickmap = Y(c) ? !0 : c, b)) } function $l(a, c, b, d, e) {
                var f; c = { G: ra(), F: (f = {}, f["page-url"] = c, f["pointer-click"] = b, f) }; d(c, e)["catch"](y(a,
                    "c.s.c"))
            } function am(a, c, b, d, e) { if (Nc(a, "ymDisabledClickmap") || Fe(a) || !c || !c.element) return !1; a = Wa(c.element); if (e && !e(c.element, a) || I(c.button, [2, 3]) && "A" !== a || Ma(oa(a), d)) return !1; d = c.element; if (c && b) { if (50 > c.time - b.time) return !1; e = Math.abs(b.position.x - c.position.x); a = Math.abs(b.position.y - c.position.y); c = c.time - b.time; if (b.element === d && 2 > e && 2 > a && 1E3 > c) return !1 } for (; d;) { if (bm(d)) return !1; d = d.parentElement } return !0 } function cm(a, c) {
                var b = null; try {
                    if (b = c.target || c.srcElement) !b.ownerDocument && b.documentElement ?
                        b = b.documentElement : b.ownerDocument !== a.document && (b = null)
                } catch (d) { } return b
            } function dm(a) { var c = a.which; a = a.button; return c || void 0 === a ? c : 1 === a || 3 === a ? 1 : 2 === a ? 3 : 4 === a ? 2 : 0 } function ud(a, c) { var b = Lb(a), d = Be(a); return { x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0, y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0 } } function em(a) {
                var c = y(a, "i.clch", fm); ha(a).D(a.document, ["click"], K(c, null, a), { passive: !1 }); return function (b) {
                    var d = ta.ha, e = a.Ya[ta.Cb], f = !!e._informer; e._informer = B({ domain: "informer.yandex.ru" },
                        b); f || Hc(a, { src: d + "//informer.yandex.ru/metrika/informer.js" })
                }
            } function gm(a) { var c = void 0; void 0 === c && (c = hm); var b = n(a, "navigator") || {}; c = z(v(b, n), c); c = H("x", c); try { var d = n(a, "navigator.getGamepads"); var e = xa(d, "getGamepads") && a.navigator.getGamepads() || [] } catch (f) { e = [] } return c + "x" + wa(e) } function im(a) { try { var c = wa(a) ? a : []; return H(",", [a.name, a.description, r(Aa, nc(Boolean), Za(jm), Oc(","))(c)]) } catch (b) { return "" } } function jm(a) { return H(",", [a.description, a.suffixes, a.type]) } function Ck(a) {
                return N(function (c,
                    b) { var d = b[0], e = b[1]; c[d + " precision"] = n(e, "precision") || "n"; c[d + " precision rangeMin"] = n(e, "rangeMin") || "n"; c[d + " precision rangeMax"] = n(e, "rangeMax") || "n"; return c }, {}, [["webgl vertex shader high float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)], ["webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT)], ["webgl vertex shader low float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)], ["webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,
                        a.HIGH_FLOAT)], ["webgl fragment shader medium float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)], ["webgl fragment shader low float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)], ["webgl vertex shader high int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)], ["webgl vertex shader medium int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)], ["webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)], ["webgl fragment shader high int",
                        a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)], ["webgl fragment shader medium int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)], ["webgl fragment shader low int precision", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)]])
            } function Bk(a, c) {
                return [function () {
                    var b = c.createBuffer(); b && c.getParameter && Ba("getParameter", c.getParameter) || Le(); c.bindBuffer(c.ARRAY_BUFFER, b); var d = new a.Float32Array(km); c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW); b.$d = 3; b.je = 3; d = c.createProgram();
                    var e = c.createShader(c.VERTEX_SHADER); d && e || Le(); return { Xb: d, Pe: e, Oe: b }
                }, function (b) { var d = b.Xb, e = b.Pe; c.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"); c.compileShader(e); c.attachShader(d, e); (d = c.createShader(c.FRAGMENT_SHADER)) || Le(); return B(b, { Pd: d }) }, function (b) {
                    var d = b.Xb, e = b.Pd; c.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
                    c.compileShader(e); c.attachShader(d, e); c.linkProgram(d); c.useProgram(d); return b
                }, function (b) { var d = b.Xb; b = b.Oe; d.Ne = c.getAttribLocation(d, "attrVertex"); d.le = c.getUniformLocation(d, "uniformOffset"); c.enableVertexAttribArray(d.Yf); c.vertexAttribPointer(d.Ne, b.$d, c.FLOAT, !1, 0, 0); c.uniform2f(d.le, 1, 1); c.drawArrays(c.TRIANGLE_STRIP, 0, b.je); return c.canvas }]
            } function Ak(a, c) { if (!S(a.Float32Array)) return !1; var b = n(c, "canvas"); if (!b || !Ba("toDataUrl", b.toDataURL)) return !1; try { c.createBuffer() } catch (d) { return !1 } return !0 }
            function te(a, c) { c.clearColor(0, 0, 0, 1); c.enable(c.DEPTH_TEST); c.depthFunc(c.LEQUAL); c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT); return "[" + n(a, "0") + ", " + n(a, "1") + "]" } function lm(a) { a = n(a, "screen") || {}; return H("x", z(v(a, n), mm)) } function wk(a) { var c = n(a, "matchMedia"); if (c && Ba("matchMedia", c)) { var b = ka("matchMedia", a); return N(function (d, e) { d[e] = b("(" + e + ")"); return d }, {}, nm) } } function pk(a) {
                a = eb(a); if (!a) return ""; a = a("video"); try {
                    var c = ka("canPlayType", a), b = Kb(function (d) {
                        return z(r(M, ka("concat",
                            d + "; codecs=")), om)
                    }, ph); return z(c, [].concat(ph, b))
                } catch (d) { return "canPlayType" }
            } function pm(a) { a = n(a, "navigator") || {}; return a.doNotTrack || a.msDoNotTrack || "unknown" } function qm(a, c) {
                if (a.Ge()) {
                    var b = qh(c); if (b && !Mb("ym-disable-tracklink", b)) {
                        var d = a.l, e = a.Cd, f = a.sa, g = a.sender, h = a.Ld, k = f.gb, l = b.href, m = db(b && b.innerHTML && b.innerHTML.replace(/<\/?[^>]+>/gi, "")); m = l === m ? "" : m; if (Mb("ym-external-link", b)) Bd(d, f, { url: l, Ja: !0, title: m, sender: g }); else {
                            k = k ? Cd(d, k).hostname : Q(d).hostname; h = RegExp("\\.(" + H("|",
                                z(rm, h)) + ")$", "i"); var q = b.protocol + "//" + b.hostname + b.pathname; h = rh.test(q) || rh.test(l) || h.test(l) || h.test(q); b = b.hostname; Dd(k) === Dd(b) ? h ? Bd(d, f, { url: l, kb: !0, title: m, sender: g }) : m && e.C("il", db(m).slice(0, 100)) : l && sm.test(l) || Bd(d, f, { url: l, ob: !0, Ja: !0, kb: h, title: m, sender: g })
                        }
                    }
                }
            } function Bd(a, c, b, d) {
                var e, f = ra(); b.kb && f.C("dl", "1"); b.Ja && f.C("ln", "1"); f = { G: f, title: b.title, ob: !!b.ob, J: b.J, F: (e = {}, e["page-url"] = b.url, e["page-ref"] = c.gb || Q(a).href, e) }; e = "Link"; b.kb ? e = b.Ja ? "Ext link - File" : "File" : b.Ja &&
                    (e = "Ext link"); c = b.sender(f, c).then(d || C).then(rb(a, c, e + ". Counter " + c.id + ". Url: " + b.url, b)); return tc(a, "cl.p.s", c, b.ra || C, b.l)
            } function tm(a, c) { var b, d, e = (b = {}, b.string = !0, b.object = !0, b["boolean"] = c, b)[typeof c] || !1; a((d = {}, d.trackLinks = e, d)) } function um(a, c, b, d) { var e = Q(a), f = e.hostname; e = e.href; if (c = Pc(c).url) a = Cd(a, c), f = a.hostname, e = a.href; return [d + "://" + f + "/" + b, e || ""] } function Ed(a, c) { return function (b) { sh(a, c, b) } } function vm(a, c) { Me(a)(function (b) { delete b[c] }) } function sh(a, c, b) {
                Me(a)(function (d) {
                    d[c] =
                    B(d[c] || {}, b)
                })
            } function Me(a) { a = L(a); var c = a.o("dsjf") || za({}); a.oa("dsjf", c); return c } function tc(a, c, b, d, e) { var f = K(Ne, null, a, d, e); return b.then(f, function (g) { f(); Ad(a, c, g) }) } function rb(a, c, b, d) { return th(c) ? C : v(D(aa([a, O(c)], d ? [b + ". Params:", d] : [b]), sb), Ja) } function sb() { var a = sa(arguments), c = a.slice(2); Oe(a[0], a[1]).log.apply(sb, c) } function uh(a) { var c = "1" === dc(a).o("debug"), b = -1 < Q(a).href.indexOf("_ym_debug=1"); a = a._ym_debug; return { Vd: c, Yd: a || b, isEnabled: Ma(Boolean, [c, a, b]) } } function wm(a,
                c, b) { var d; (d = ib[c]) || (d = vb); d = z(Qc, d); d.unshift(xm); d.unshift(zm); return z(r(Am([a, c, b]), Ja), d) } function U(a, c, b) { ib[a] || (ib[a] = []); c && !na(b) && vh(ib[a], c, b) } function vh(a, c, b) { for (var d = [c, b], e = -1E4, f = 0; f < a.length; f += 1) { var g = a[f], h = g[0]; g = g[1]; if (b === g && h === c) return; if (b < g && b >= e) { a.splice(f, 0, d); return } e = g } a.push(d) } function wh(a, c) {
                    var b = Q(a), d = b.href, e = b.host, f = -1; if (!Ha(c) || Y(c)) return d; b = c.replace(xh, ""); if (-1 !== b.search(Bm)) return b; var g = b.charAt(0); if ("?" === g && (f = d.search(/\?/), -1 === f) ||
                        "#" === g && (f = d.search(/#/), -1 === f)) return d + b; if (-1 !== f) return d.substr(0, f) + b; if ("/" === g) { if (f = d.indexOf(e), -1 !== f) return d.substr(0, f + e.length) + b } else return d = d.split("/"), d[d.length - 1] = b, H("/", d); return ""
                } function yh(a) { return { N: function (c, b) { if (!c.G) return b(); var d = L(a).o("fid"); !zh && d && (Fd(c, "fid", d), zh = !0); return b() } } } function Ah(a) { return { N: function (c, b) { var d = c.G; if (d) { var e = L(a).o("adBlockEnabled"); e && d.C("adb", e) } b() } } } function zm(a) { return { N: function (c, b) { Ee(a) || b() } } } function Cm(a) {
                    a =
                    Dm(a); return Em[a] || a
                } function Fm(a) { a = Bh(a); return Gm[a] || "ru" } function xm(a, c, b) { return { N: function (d, e) { Hm(a, d, b, e) } } } function Hm(a, c, b, d) {
                    var e = c.G; if (b.Qe || !e) d(); else {
                        var f = Gd(a), g = pc(a, ""); d = r(function () { var u = Ch(f); u = "" + u + Im(u, g); e.C("gdpr", u); Fd(c, "gdpr", u) }, d); if (3 === b.id) d(); else {
                            var h = L(a), k = h.o("f1"); if (k) k(d); else if (k = (k = Ch(f)) ? z(v(Hd, n), k.split(",")) : [], Dh(k)) d(); else {
                                var l = Id(a), m = Q(a), q = l && (-1 !== m.href.indexOf("yagdprcheck=1") || g.o("yaGdprCheck")); m = g.o("gdpr"); g.o("yandex_login") ?
                                    (k.push("13"), g.C("gdpr", uc, 525600)) : l ? I(m, Nb) ? m === Pe ? k.push("12") : k.push("3") : Qe(a) || Rc(a) ? k.push("17") : Jm(a) && k.push("28") : k.push("14"); var p = v(f, Km); Dh(k) ? (F(p, k), d()) : (Jd.push(d), h.C("f1", function (u, x) { var w = 0; if (x) { var J = hb(a, x) || ""; w += J.length } Jd.push(u); 1E6 >= w && Jd.push(u) }), (0, Re[0])(a).then(R("params.eu")).then(function (u) { if (u || q) { g.C("gdpr_popup", Pe); Lm(a, b); if (oc(a)) return Mm(a, p, b); var x = Eh(a, f); if (x) return u = Nm(a, p, x, b), u.then(D([a, b], Om)), u } u || p("8"); return G.resolve({ value: uc, Nb: !0 }) }).then(function (u) {
                                        g.ab("gdpr_popup");
                                        if (u) { var x = u.value; u = u.Nb; I(x, Nb) && g.C("gdpr", x, u ? void 0 : 525600) } x = Se(Jd, Ja); Fh(a, x, 20)(Bb(y(a, "gdr"), C)); h.C("f1", Ja)
                                    })["catch"](y(a, "gdp.a")))
                            }
                        }
                    }
                } function Om(a, c) { if (Id(a)) { var b = Gd(a), d = ua(a, c); d = d && d.params; b = z(v(Pm, n), Te(b)); d && b.length && d("gdpr", T(Boolean, b)) } } function ua(a, c) { var b = L(a).o("counters", {}), d = O(c); return b[d] } function Mm(a, c, b) {
                    var d = Kd(a, b); return new G(function (e) {
                        var f; if (d) {
                            var g = d.T, h = r(v("4", c), v(null, e)), k = fa(a, h, 2E3, "gdp.f.t"); d.Vc((f = {}, f.type = "isYandex", f)).then(function (l) {
                                l.isYandex ?
                                (c("5"), g.D(aa(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], Ue), function (m) { e({ value: Gh(m[1].type) }) })) : (c("6"), e(null))
                            })["catch"](h).then(D([a, k], Na))
                        } else e({ value: Pe, Nb: !0 })
                    })
                } function Lm(a, c) { var b = Kd(a, c); b && b.T.D(["isYandex"], function () { var d; return d = { type: "isYandex" }, d.isYandex = Id(a), d }); return b } function Nm(a, c, b, d) {
                    var e = Qm(a, d.Re), f = Kd(a, d); if (!f) return G.resolve({ value: uc, Nb: !0 }); var g = Hc(a, { src: "https://yastatic.net/s3/gdpr/popup/v2/" + e + "_inversed_buttons.js" }); return new G(function (h,
                        k) { g ? (c("7"), g.onerror = function () { var l; c("9"); f.Uc((l = {}, l.type = "GDPR-ok-view-default", l)); h(null) }, g.onload = function () { c("10"); b.D(aa(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], Ue), function (l) { var m; l = l.type; f.Uc((m = {}, m.type = l, m)); h({ value: Gh(l) }) }) }) : (c("9"), k(Va("gdp.e"))) })
                } function Qm(a, c) { var b = c || Bh(a); return I(b, Rm) ? b : "en" } function Ld() {
                    return function (a, c, b) {
                        return {
                            N: function (d, e) {
                                var f, g = d.G, h = d.qa, k = d.F; if (g && k) {
                                    var l = I(k["wv-type"], Sm); if (!k["wv-type"] || l) {
                                        var m = W(a); g.Ra("rqnl",
                                            1); for (var q = Sc(a), p = 1; q[p];)p += 1; d.Qa = p; q[p] = (f = {}, f.protocol = ta.ha, f.host = "mc.yandex.ru", f.resource = l ? "webvisor" : "watch", f.postParams = d.M, f.time = m(X), f.counterType = b.O, f.params = k, f.browserInfo = g.l(), f.counterId = b.id, f.ghid = Ib(a), f); h && (h.Ra("rqnl", 1), q[p].telemetry = h.l()); Ve(a)
                                    }
                                } e()
                            }, ga: function (d, e) { Hh(a, d); e() }
                        }
                    }
                } function Hh(a, c) { var b = Sc(a); c.G && !$a(b) && (delete b[c.Qa], Ve(a)) } function Ve(a) { var c = Sc(a); Ka(a).C("retryReqs", c) } function We(a, c, b) {
                    var d = Md(a, c, b); return function (e, f, g) {
                        var h; e = B({ G: ra() },
                            e); e.F || (e.F = {}); var k = e.F; k.wmode = "0"; k["wv-part"] = "" + g; k["wv-hit"] = k["wv-hit"] || "" + Ib(a); k["page-url"] = k["page-url"] || a.location.href; k.rn = k.rn || "" + Ua(a); if (!k["wv-type"]) { g = e.zd; var l = "4", m = "2"; e.Xd && (l = "5", m = "3"); k["wv-type"] = g ? l : m } f = "webvisor/" + f.id; return d(B(e, { F: k }), f, { Na: (h = {}, h["Content-Type"] = "text/plain", h), fd: "POST" })
                    }
                } function Tm(a, c, b, d) { c = d.o("cc"); d = D(["cc", ""], d.C); if (c) { var e = c.split("&"); c = e[0]; if ((e = (e = e[1]) && Ea(e)) && 1440 < W(a)(Ya) - e) return d(); b.C("cc", c) } else oa(0)(c) || d() } function Um(a,
                    c, b, d) {
                        return ma(a, c, function (e) {
                            if ("0" === n(e, "settings.pcs") && !Nd(a)) if (e = d.o("zzlc"), Y(e) || $a(e) || "na" === e) {
                                e = "ru"; var f = Ih(a, 68), g = Jh(a, 79); if (f || g) e = "md"; if (f = eb(a)) {
                                    var h = f("iframe"); B(h.style, { display: "none", width: "1px", height: "1px", visibility: "hidden" }); h.src = "https://mc.yandex." + e + Kg("L21ldHJpa2EvenpsYy5odG1s"); if (e = Lb(a)) {
                                        e.appendChild(h); var k = 0, l = ha(a).D(a, ["message"], y(a, "zz.m", function (m) {
                                            (m = n(m, "data")) && m.substr && "__ym__zz" === m.substr(0, 8) && (fc(h), m = m.substr(8), d.C("zzlc", m), b.C("zzlc",
                                                m), l(), Na(a, k))
                                        })); k = fa(a, r(l, v(h, fc)), 3E3)
                                    }
                                }
                            } else b.C("zzlc", e)
                        })
            } function ma(a, c, b) { a = O(c); return Kh()(Vm(a)).then(b) } function Wm(a, c, b) { c = O(c); a = Lh(a); b = B({ Nd: a(X) }, b); return Kh()(Xm(c, b)) } function Xm(a, c) { return function (b) { var d = b[a]; d ? (d.qe = c, d.Rc = !0, d.Qc ? d.Qc(c) : d.ja = G.resolve(c)) : b[a] = { ja: G.resolve(c), qe: c, Rc: !0 } } } function Ym(a, c, b) {
                var d, e; c = Cb(v(a, n), Zm); c = Y(c) ? null : n(a, c); if (n(a, "navigator.onLine") && c && c && n(c, "prototype.constructor.name")) {
                    var f = new c((d = {}, d.iceServers = [], d)); a = n(f, "createDataChannel");
                    S(a) && (K(a, f, "y.metrika")(), a = n(f, "createOffer"), S(a) && !a.length && (a = K(a, f)(), d = n(a, "then"), S(d) && K(d, a, function (g) { var h = n(f, "setLocalDescription"); S(h) && K(h, f, g, C, C)() })(), B(f, (e = {}, e.onicecandidate = function () { var g, h = n(f, "close"); if (S(h)) { h = K(h, f); try { var k = (g = n(f, "localDescription.sdp")) && g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/) } catch (l) { f.onicecandidate = C; "closed" !== f.iceConnectionState && h(); return } k && 0 < k.length && (g = gc(k[1]), b.C("pp", g)); f.onicecandidate = C; h() } }, e))))
                }
            } function $m(a, c, b) {
                var d,
                e = Mh(a, c); if (e) { e.T.D(["gpu-get"], function () { var h; return h = {}, h.type = "gpu-get", h.pu = b.o("pu"), h }); var f = n(a, "opener"); if (f) { var g = fa(a, D([a, c, b], Nh), 200, "pu.m"); e.$b(f, (d = {}, d.type = "gpu-get", d), function (h, k) { var l = n(k, "pu"); l && (Na(a, g), b.C("pu", l)) }) } else Nh(a, c, b) }
            } function Nh(a, c, b) { var d = n(a, "location.host"); a = pd(a, c); b.C("pu", "" + gc(d) + a) } function Xe(a, c, b) {
                return {
                    N: function (d, e) {
                        var f = d.G; if (f && (!b || b.Tc)) {
                            var g = a.document.title; d.title && (g = d.title); var h = Ob("getElementsByTagName", a.document);
                            "string" !== typeof g && h && (g = h("title"), g = (g = n(g, "0.innerHtml")) ? g : ""); g = g.slice(0, ta.nd); f.C("t", g)
                        } e()
                    }
                }
            } function Pb(a) { void 0 === a && (a = an); return function (c, b, d) { return { N: function (e, f) { var g = e.G, h = e.F; g && h && F(function (k) { var l = Qb[k], m = "bi", q = g; l || (l = Pa[k], m = "tel", q = Fd(e)); l && (l = A(m + ":" + k, l, null)(c, d, e), q.Ra(k, l)) }, a); f() } } } } function bn(a, c, b, d, e, f, g, h) { var k = b.o(f); na(k) && (b.C(f, g), e(a, c, b, d), k = b.o(f, g)); Y(h) || h.Ra(f, "" + k); return k } function cn(a, c) {
                if (Tc(a)) {
                    var b = gb(a).match(dn); if (b && b.length) return b[1] ===
                        c
                } return !1
            } function Ih(a, c) { if (Uc(a) && c) { var b = gb(a).match(en); if (b && b.length) return +b[1] >= c } return !1 } function Jh(a, c) { var b = gb(a); return b && (b = b.match(fn)) && 1 < b.length ? Ea(b[1]) >= c : !1 } function Wg(a, c) {
                void 0 === c && (c = !1); for (var b = a.length, d = b - b % 3, e = [], f = 0; f < d; f += 3) {
                    var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2]; e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >>
                        6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g & 63])
                } switch (b - d) {
                    case 1: b = a[d] << 4; e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b & 63], "=", "="); break; case 2: b = (a[d] << 10) + (a[d + 1] << 2), e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b &
                        63], "=")
                }e = e.join(""); return c ? Oh(e, !0) : e
            } function Kg(a, c) {
                void 0 === c && (c = !1); var b = a, d = "", e = 0; if (!b) return ""; for (c && (b = Oh(b)); b.length % 4;)b += "="; do {
                    var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)), g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)), h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)), k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++));
                    if (0 > f || 0 > g || 0 > h || 0 > k) return ""; var l = f << 18 | g << 12 | h << 6 | k; f = l >> 16 & 255; g = l >> 8 & 255; l &= 255; d = 64 === h ? d + String.fromCharCode(f) : 64 === k ? d + String.fromCharCode(f, g) : d + String.fromCharCode(f, g, l)
                } while (e < b.length); return d
            } function Oh(a, c) { void 0 === c && (c = !1); return a ? a.replace(c ? /[+/=]/g : /[-*_]/g, function (b) { return gn[b] || b }) : "" } function hn(a, c) { var b = a.length ? z(function (d, e) { var f = c[e]; return f === d ? null : f }, a) : c; a.length = 0; F(r(M, ka("push", a)), c); return T(oa(null), b).length === a.length ? null : b } function jn(a, c, b) {
                return z(function (d) {
                    var e =
                        d[0], f = d[1]; if (S(e)) return e(a, c) || null; if (S(f)) return null; var g = !(!c[e] || !c[f]); !g && 2 === d.length && (g = 0 === c[e] && 0 === c[f]) && (g = d[1], g = !(Ph[d[0]] || Ph[g])); return g ? (d = Math.round(c[e]) - Math.round(c[f]), 0 > d || 36E5 < d ? null : d) : 1 === d.length && c[e] ? Math.round(c[e]) : null
                }, b)
            } function Vc(a, c, b) { return { N: function (d, e) { var f = Qh(b), g = d.G; g ? Fg(d) ? (f.tc = g, e()) : f.jb ? f.jb.push(e) : e() : e() }, ga: function (d, e) { var f = d.G, g = d.te, h = Qh(b); if (f) { var k = h.jb; h.tc === f && k && (g && L(a).C("isEU", n(g, "settings.eu")), F(Ja, k), h.jb = null) } e() } } }
            function Fg(a) { return (a = a.G) && a.o("pv") && !a.o("ar") } function Rh(a, c) {
                var b = Mh(a, c), d = [], e = []; if (!b) return null; var f = D([a, b.$b], kn), g = v(f, ln); b.T.D(["initToParent"], function (h) { g(d, b.Ea[h[1].counterId]) }).D(["parentConnect"], function (h) { g(e, b.Ma[h[1].counterId]) }); return {
                    T: b.T, Tf: function (h, k) { return new G(function (l, m) { b.$b(h, k, function (q, p) { l([q, p]) }); fa(a, v(Va(), m), 5100, "is.o") }) }, Uc: function (h) { var k = { Xc: [], ec: [], data: h }; d.push(k); return f(b.Ea, k, h) }, Vc: function (h) {
                        var k = { Xc: [], ec: [], data: h };
                        e.push(k); return f(b.Ma, k, h)
                    }
                }
            } function ln(a, c, b) { c = T(function (d) { return !I(b.info.counterId, d.ec) }, c); F(function (d) { var e; b.info.counterId && a((e = {}, e[b.info.counterId] = b, e), d, d.data) }, c) } function kn(a, c, b, d, e) {
                return (new G(function (f, g) {
                    var h = ea(b), k = r(d.resolve ? d.resolve : M, Jc(f)), l = r(d.reject ? d.reject : M, Jc(g)); d.resolve = k; d.reject = l; F(function (m) { var q; d.ec.push(m); var p = b[m], u = fa(a, v(Va(), l), 5100, "is.m"); c(p.window, B(e, (q = {}, q.toCounter = Ea(m), q)), function (x, w) { Na(a, u); d.Xc.push(m); d.resolve && d.resolve(w) }) },
                        h)
                }))["catch"](y(a, "if.b"))
            } function mn(a, c) { var b = Od(a); c.D(["initToParent"], function (d) { var e = d[1]; b.Ea[e.counterId] = { info: e, window: d[0].source } }).D(["initToChild"], function (d) { var e = d[0]; d = d[1]; e.source === a.parent && c.R("parentConnect", [e, d]) }).D(["parentConnect"], function (d) { var e = d[1]; e.counterId && (b.Ma[e.counterId] = { info: e, window: d[0].source }) }) } function nn(a, c) {
                return function (b, d) {
                    var e, f = { $a: W(a)(X), key: a.Math.random(), dir: 0 }; b.length && (f.$a = Ea(b[0]), f.key = parseFloat(b[1]), f.dir = Ea(b[2]));
                    B(d, c); var g = (e = { data: d }, e.__yminfo = H(":", ["__yminfo", f.$a, f.key, f.dir]), e); return { ca: f, $c: hb(a, g) || "" }
                }
            } function Ib(a) { var c = L(a), b = c.o("hitId"); b || (b = Ua(a), c.C("hitId", b)); return b } function Ee(a) { var c; return c = (c = !!L(a).o("oo")) || Fe(a) } function Fd(a, c, b) { void 0 === b && (b = null); a.qa || (a.qa = Sh()); c && a.qa.Ra(c, b); return a.qa } function Ye(a) { return { N: function (c, b) { var d = a.document, e = c.G; if (e && Ze(a)) { var f = ha(a), g = function (h) { Ze(a) || (f.Sa(d, Th, g), b()); return h }; f.D(d, Th, g); e.C("pr", "1") } else b() } } } function Qa(a,
                c, b) { var d = Md(a, c, b); return function (e, f) { var g, h = B({ G: ra() }, e), k = h.F, l = h.G; k = (g = {}, g["page-url"] = k && k["page-url"] || "", g.charset = "utf-8", g); "0" !== f.O && (k["cnt-class"] = f.O); g = B(h, { F: B(h.F || {}, k) }); h = ""; if (g.G) { k = O(f); k = Uh(f)[k] || {}; var m = k.status; "rt" === k.rb && m ? (1 === m && (h = Eg(a, f) + "."), g.G.C("rt", m)) : h = "" } B(g, { Ac: h }); return d(g, "watch/" + f.id, { zb: !(!l.o("pv") || l.o("ar") || l.o("wh")) }) } } function Md(a, c, b) {
                    var d = pb(a, c); return function (e, f, g) {
                        void 0 === g && (g = {}); var h = on(a); e.Ac && (h = "" + e.Ac + h); f = [ta.ha +
                            "//" + (h || "mc.yandex.ru") + "/" + f]; return $e(a, b, e, !0).then(D([e, f, g], d)).then(function (k) { e.te = k.Pa; return $e(a, b, e).then(v(k.Pa, M)) })
                    }
                } function on(a) { var c = "mc.yandex.ru", b = n(a, "document.referrer"); if (!b) return c; a = Cd(a, b).host; return c = "mc.yandex." + (ag(a) || "ru") } function pn(a, c) { return a && c ? Vh(a) === Vh(c) : a || c ? !1 : !0 } function Vh(a) { return (a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0] } function $e(a, c, b, d) {
                    void 0 === d && (d = !1); return new G(function (e, f) {
                        function g(l, m) {
                            m();
                            e()
                        } var h = c.slice(); h.push({ N: g, ga: g }); var k = Se(h, function (l, m) { var q = d ? l.N : l.ga; if (q) try { q(b, m) } catch (p) { k(qn), f(p) } else m() }); k(Wh)
                    })
                } function bc(a, c, b) { var d = b || "as"; if (a.postMessage && !a.attachEvent) { b = ha(a); var e = "__ym__promise_" + Ua(a) + "_" + Ua(a), f = C; d = y(a, d, function (g) { try { var h = g.data } catch (k) { return } h === e && (f(), g.stopPropagation && g.stopPropagation(), c()) }); f = b.D(a, ["message"], d); a.postMessage(e, "*") } else fa(a, c, 0, d) } function rn(a, c, b, d, e) {
                    void 0 === d && (d = 1); void 0 === e && (e = "itc"); c = Se(c, b); Fh(a,
                        c, d)(Bb(y(a, e), C))
                } function Fh(a, c, b, d) { void 0 === b && (b = 1); void 0 === d && (d = sn); af = Infinity === b; return za(function (e, f) { function g() { try { var k = c(d(a, b)); h = h.concat(k) } catch (l) { return e(l) } c(tn); if (c(Pd)) return f(h), Xh(a); af ? (c(d(a, 1E4)), f(h), Xh(a)) : fa(a, g, 100) } var h = []; un(g) }) } function Xh(a) { if (bf.length) { var c = bf.shift(); af ? c() : fa(a, c, 100) } else cf = !1 } function un(a) { cf ? bf.push(a) : (cf = !0, a()) } function Yh(a) { return za(function (c, b) { b(a) }) } function Wl(a) { return za(function (c, b) { a.then(b, c) }) } function Vl(a) {
                    var c =
                        [], b = !1; return za(function (d, e) { function f(g) { c.push(g) === a.length && d(c) } F(function (g) { g(Bb(f, function (h) { if (!b) try { e(h), b = !0 } catch (k) { f(k) } })) }, a) })
                } function Bb(a, c) { return function (b) { return b(a, c) } } function Se(a, c) { void 0 === c && (c = M); return za({ mb: a, Gc: c, ac: !1, Z: 0 }) } function Wh(a) { function c() { function d() { b = !0; a.Z += 1 } b = !1; a.Gc(a.mb[a.Z], function () { d() }); b || (a.Z += 1, d = K(Wh, null, a)) } for (var b = !0; !Pd(a) && b;)c() } function sn(a, c) {
                    return function (b) {
                        var d = W(a), e = d(X); return vn(function (f, g) {
                            d(X) - e >= c &&
                            g(wn)
                        })(b)
                    }
                } function xn(a) { Pd(a) && zb(Fc("i")); var c = a.Gc(a.mb[a.Z]); a.Z += 1; return c } function tn(a) { a.ac = !1 } function wn(a) { a.ac = !0 } function qn(a) { a.Z = a.mb.length } function Pd(a) { return a.ac || a.mb.length <= a.Z } function pb(a, c) { return function (b, d, e) { void 0 === e && (e = {}); return Zh(a, c, d, b, B(e, { Y: b.Y || [], M: e.M || b.M })) } } function Zh(a, c, b, d, e, f, g) {
                    var h; void 0 === f && (f = 0); void 0 === g && (g = 0); var k = B({}, e), l = c[g], m = l[0]; l = l[1]; var q = B({}, d.F), p = W(a); d.G && (q["browser-info"] = ra(d.G.l()).C("st", p(Qd)).na()); !q.t &&
                        (p = d.qa) && (p.C("ti", m), q.t = p.na()); p = b[f]; k.Na && k.Na["Content-Type"] || !k.M || (k.Na = B({}, k.Na, (h = {}, h["Content-Type"] = "application/x-www-form-urlencoded", h)), k.M = "site-info=" + od(k.M)); k.fd = k.M ? "POST" : "GET"; k.Oa = q; k.Y.push(m); return l("" + p + (d.ee ? "/1" : ""), k).then(function (u) { return { Pa: u, Le: f } })["catch"](function (u) { var x = g + 1 >= c.length, w = f + 1 >= b.length; x && w && zb(u); return Zh(a, c, b, d, e, !w && x ? f + 1 : f, x ? 0 : g + 1) })
                } function re(a, c) {
                    var b = c.Qb, d = b || "uid"; b = b ? a.location.hostname : void 0; var e = dc(a), f = Ka(a), g = W(a),
                        h = g(Qd), k = $h(a, c), l = k[0]; k = k[1]; var m = e.o("d"); ai(a, c); var q = !1; !k && l && (k = l, q = !0); if (!k) k = H("", [g(Qd), Ua(a)]), q = !0; else if (!m || 15768E3 < h - Ea(m)) q = !0; q && !c.ua && (e.C(d, k, 525600, b), e.C("d", "" + h, 525600, b)); f.C(d, k); return k
                } function $h(a, c) { var b = Ka(a), d = dc(a), e = c.Qb || "uid"; return [b.o(e), d.o(e)] } function Fa(a) { a = W(a); return Math.round(a(bi) / 50) } function bi(a) { var c = a.$, b = c[1]; a = c[0] && b ? b() : X(a) - a.Wd; return Math.round(a) } function Qd(a) { return Math.round(X(a) / 1E3) } function Ya(a) {
                    return Math.floor(X(a) / 1E3 /
                        60)
                } function X(a) { var c = a.hc; return 0 !== c ? c : df(a.l, a.$) } function Lh(a) { var c = ha(a), b = ci(a), d = { l: a, hc: 0, $: b, Wd: df(a, b) }, e = b[1]; b[0] && e || c.D(a, ["beforeunload", "unload"], function () { 0 === d.hc && (d.hc = df(a, d.$)) }); return za(d) } function yn(a) { return (10 > a ? "0" : "") + a } function qe(a, c, b) { void 0 === c && (c = ""); void 0 === b && (b = "_ym"); var d = "" + b + c + "_"; return { Mb: zn(a), o: function (e, f) { var g = di(a, "" + d + e); return $a(g) && !Y(f) ? f : g }, C: function (e, f) { ei(a, "" + d + e, f); return this }, ab: function (e) { fi(a, "" + d + e); return this } } } function ei(a,
                    c, b) { var d = ef(a); a = hb(a, b); if (!$a(a)) try { d.setItem(c, a) } catch (e) { } } function di(a, c) { var b = ef(a); try { return Ab(a, b.getItem(c)) } catch (d) { } return null } function fi(a, c) { var b = ef(a); try { b.removeItem(c) } catch (d) { } } function ef(a) { try { return a.localStorage } catch (c) { } return null } function Xg(a, c, b) { ff(a, "metrika_enabled", "1", 0, c, b, !0); var d = gi(a); (d = d && d.metrika_enabled) && hi(a, "metrika_enabled", c, b, !0); return !!d } function ff(a, c, b, d, e, f, g) {
                        void 0 === g && (g = !1); if (Yg(a, vd, c)) {
                            var h = c + "=" + encodeURIComponent(b) +
                                ";"; h += "" + An(a); if (d) { var k = new Date; k.setTime(k.getTime() + 6E4 * d); h += "expires=" + k.toUTCString() + ";" } e && (d = e.replace(Bn, ""), h += "domain=" + d + ";"); try { a.document.cookie = h + ("path=" + (f || "/")), g || (ii(a)[c] = b) } catch (l) { }
                        }
                    } function vd(a, c) { var b = ii(a); return b ? b[c] || null : null } function gi(a) { try { var c = a.document.cookie; if (!na(c)) { var b = {}; F(function (d) { d = d.split("="); var e = d[1]; b[db(d[0])] = db(ji(e)) }, (c || "").split(";")); return b } } catch (d) { } return null } function Yg(a, c, b) {
                        I(b, ["gdpr", "gdpr_popup", "metrika_enabled",
                            "_ym_debug_build"]) ? a = !0 : (b = Gd(a), b = Te(b), a = c(a, "gdpr"), a = T(cc(Cn), b).length ? !0 : I(a, [uc, Dn])); return a
                    } function Gh(a) { if (I(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return uc; a = a.replace("GDPR-ok-view-detailed-", ""); return I(a, Nb) ? a : uc } function Eh(a, c, b) { void 0 === b && (b = M); var d = gf(a); b(d); var e = v(d, En); hf(a, c, function (f) { f.pb.D(e) }); return d } function En(a, c) { var b = n(c, "ymetrikaEvent"); b && a.R(n(b, "type"), b) } function hf(a, c, b, d) {
                        void 0 === b && (b = C); void 0 === d && (d = !1); var e = Ic(a); if (c && S(c.push)) {
                            var f =
                                c.push; c.push = function () { var g = sa(arguments), h = g[0]; d && e.R(h); g = f.apply(c, g); d || e.R(h); return g }; a = { pb: e, unsubscribe: function () { c.push = f } }; b(a); F(e.R, c); return a
                        }
                    } function Gd(a) { a = L(a); var c = a.o("dataLayer", []); a.C("dataLayer", c); return c } function Km(a, c) { var b, d; a.push((b = {}, b.ymetrikaEvent = (d = {}, d.type = c, d), b)) } function sg(a, c, b) { function d() { f = 0; g && (g = !1, f = fa(a, d, b), e.R(h)) } var e = Ic(a), f, g = !1, h; c.D(function (k) { g = !0; h = k; f || d(); return C }); return e } function Fn(a, c) { return a.clearInterval(c) } function Gn(a,
                        c, b, d) { return a.setInterval(y(a, "i.err." + (d || "def"), c), b) } function fa(a, c, b, d) { return Rd(a, y(a, "d.err." + (d || "def"), c), b) } function gf(a) { var c = {}; return { D: function (b, d) { F(function (e) { n(c, e) || (c[e] = Ic(a)); c[e].D(d) }, b); return this }, va: function (b, d) { F(function (e) { n(c, e) && c[e].va(d) }, b); return this }, R: function (b, d) { return n(c, b) ? y(a, "e." + d, c[b].R)(d) : [] } } } function Ic(a) { var c = [], b = {}; b.Cf = c; b.D = r(ka("push", c), v(b, M)); b.va = r(Rb(ac(a))(c), Rb(ka("splice", c))(1), v(b, M)); b.R = r(M, Rb(Ja), Hn(c)); return b } function A(a,
                            c, b) { return function () { return y(arguments[0], a, c, b).apply(this, arguments) } } function y(a, c, b, d, e) { var f = zb, g = b || f; return function () { var h = d; try { h = g.apply(e || null, arguments) } catch (k) { Ad(a, c, k) } return h } } function df(a, c) { var b = c || ci(a), d = b[0]; b = b[1]; return !isNaN(d) && S(b) ? Math.round(b() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime() } function ci(a) { a = ki(a); var c = n(a, "timing.navigationStart"), b = n(a, "now"); b && (b = K(b, a)); return [c, b] } function ki(a) { return n(a, "performance") || n(a, "webkitPerformance") } function Ad(a,
                                c, b) {
                                    var d, e, f, g, h; if (!(.01 >= a.Math.random())) {
                                        var k = "u.a.e", l = ""; b && ("object" === typeof b ? (k = b.message, l = "string" === typeof b.stack && b.stack.replace(/\n/g, "\\n") || "n.s.e.s") : k = "" + b); if (!(In(k) || Ma(r(ka("indexOf", k), oa(-1), Sb), Jn) || Kn(k) && .1 <= a.Math.random())) {
                                            c = (d = {}, d.jserrs = (e = {}, e[ta.Va] = (f = {}, f[k] = (g = {}, g[c] = (h = {}, h[a.location.href] = l, h), g), f), e), d); a: {
                                                var m; d = ta.ha + "//mc.yandex.ru/watch/" + ta.jd; try { var q = Ec(a, "er")[0]; var p = void 0 === q ? [] : q; var u = p[1]; var x = void 0 === u ? null : u } catch (w) { break a } q =
                                                    (m = {}, m["browser-info"] = "ar:1:pv:1:v:" + ta.Va + ":vf:" + Wc.version, m["page-url"] = a.location && "" + a.location.href, m); a = hb(a, c); if (x && a) x(d, { Oa: q, Y: [], M: "site-info=" + od(a) })["catch"](C)
                                            }
                                        }
                                    }
            } function Db(a) { return z(function (c) { return !c || I(c, a) ? c : 0 }, hc) } function li(a) { return !Rc(a) && mi(a) } function jf(a) { return eb(a) ? v(a, Ln) : !1 } function mi(a) { var c = n(a, "navigator.sendBeacon"); return c && Ba("sendBeacon", c) ? D([a, K(c, n(a, "navigator"))], Mn) : !1 } function Mn(a, c, b, d) {
                return new G(function (e, f) {
                    if (!n(a, "navigator.onLine")) return f();
                    var g = B(d.Oa, { "force-urlencoded": 1 }); g = b + "?" + Gc(g) + (d.M ? "&" + d.M : ""); return 2E3 < g.length ? f(Va("sb.tlq")) : c(g) ? e("") : f()
                })
            } function Ln(a, c, b) { return new G(function (d, e) { var f, g, h = "_ymjsp" + Ua(a), k = B((f = {}, f.callback = h, f), b.Oa), l = D([a, h], Nn); a[h] = function (q) { try { l(), fc(m), d(q) } catch (p) { e(p) } }; k.wmode = "5"; var m = Hc(a, (g = {}, g.src = ni(c, b, k), g)); if (!m) return l(), e(Fc("jp.s")); f = v(m, fc); f = r(f, v(Va(b.Y), e)); g = Rd(a, f, b.Aa || 1E4); g = D([a, g], Na); m.onload = g; m.onerror = r(l, g, f) }) } function Nn(a, c) {
                try { delete a[c] } catch (b) {
                    a[c] =
                    void 0
                }
            } function Xc(a) { var c = eb(a); return c ? D([a, c], On) : !1 } function On(a, c, b, d) { return new G(function (e, f) { var g = Lb(a), h = c("img"), k = r(v(h, fc), v(Va(d.Y), f)), l = Rd(a, k, d.Aa || 3E3); h.onerror = k; h.onload = r(v(h, fc), v(null, e), D([a, l], Na)); k = B({}, d.Oa); delete k.wmode; h.src = ni(b, d, k); Tc(a) && (B(h.style, { position: "absolute", visibility: "hidden", width: "0px", height: "0px" }), g.appendChild(h)) }) } function ng(a, c, b) { var d = Wa(c); return d && Dg(a, c, T(Boolean, ["p", Pn[d], "c"]), mg, b) } function lg(a, c) {
                var b = Jb(kf, a, c); if (!b) {
                    var d =
                        Jb("div", a, c); d && (jb(kf + ",div", d).length || (b = d))
                } return b
            } function Dg(a, c, b, d, e) { return N(function (f, g) { var h = null; g in oi ? h = c.getAttribute && c.getAttribute(oi[g]) : g in vc && (h = "p" === g ? vc[g](a, c, e) : "c" === g ? vc[g](a, c, d) : vc[g](a, c)); h && (h = h.slice(0, pi[g] || 100), f[g] = lf[g] ? "" + gc(h) : h); return f }, {}, b) } function Zg(a, c, b) { if (Yc(a)) return Aa(b.querySelectorAll(c)); var d = qi(c.split(" "), b); return T(function (e, f) { return ac(a)(e, d) === f }, d) } function qi(a, c) {
                var b = aa(a), d = b.shift(); if (!d) return []; d = c.getElementsByTagName(d);
                return b.length ? Kb(v(b, qi), Aa(d)) : Aa(d)
            } function sc(a, c) { if (c.querySelector) return c.querySelector(a); var b = jb(a, c); return b && b.length ? b[0] : null } function jb(a, c) { if (!c) return []; var b = c.querySelectorAll(a); return b ? Aa(b) : [] } function qh(a) {
                var c = null; try { c = a.target || a.srcElement } catch (b) { } if (c) {
                    3 === c.nodeType && (c = c.parentNode); for (a = c && c.nodeName && ("" + c.nodeName).toLowerCase(); n(c, "parentNode.nodeName") && ("a" !== a && "area" !== a || !c.href && !c.getAttribute("xlink:href"));)a = (c = c.parentNode) && c.nodeName &&
                        ("" + c.nodeName).toLowerCase(); return c.href ? c : null
                } return null
            } function Hc(a, c) { var b = a.document, d = B({ type: "text/javascript", charset: "utf-8", async: !0 }, c), e = eb(a); if (e) { var f = e("script"); ri(Ia, Za(function (l) { var m = l[0]; l = l[1]; "async" === m && l ? f.async = !0 : f[m] = l }))(d); try { var g = Ob("getElementsByTagName", b), h = g("head")[0]; if (!h) { var k = g("html")[0]; h = e("head"); k && k.appendChild(h) } h.insertBefore(f, h.firstChild); return f } catch (l) { } } } function Qn(a, c, b) {
                var d = si(c); I(b, d.wa) || d.wa.push(b); if ($a(d.ta)) {
                    b = eb(a);
                    if (!b) return null; b = b("iframe"); B(b.style, { display: "none", width: "1px", height: "1px", visibility: "hidden" }); b.src = c; a = Lb(a); if (!a) return null; a.appendChild(b); d.ta = b
                } else (a = n(d.ta, "contentWindow")) && a.postMessage("frameReinit", "*"); return d.ta
            } function Rn(a, c) {
                var b = Z(a) ? a : [a]; c = c || document; if (c.querySelectorAll) { var d = H(", ", z(function (e) { return "." + e }, b)); return Aa(c.querySelectorAll(d)) } if (c.getElementsByClassName) return Kb(r(ka("getElementsByClassName", c), Aa), b); d = c.getElementsByTagName("*"); b = "(" +
                    H("|", b) + ")"; return T(v(b, Mb), Aa(d))
            } function mf(a, c, b) { for (var d = "", e = kg(), f = Wa(c) || "*"; c && c.parentNode && !I(f, ["BODY", "HTML"]);)d += e[f] || "*", d += ti(a, c, b) || "", c = c.parentElement, f = Wa(c) || "*"; return db(d, 128) } function ti(a, c, b) { if (a = Sd(a, c)) { a = a.childNodes; for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)if (d === (a[f] && a[f].nodeName)) { if (c === a[f]) return e; b && a[f] === b || (e += 1) } } return 0 } function Sd(a, c) {
                var b = n(a, "document"); if (!c || c === b.documentElement) return null; if (c === ic(a)) return b.documentElement;
                b = null; try { b = c.parentNode } catch (d) { } return b
            } function Ie(a, c) { var b = nf(a, c), d = b.left; b = b.top; var e = Td(a, c); return [d, b, e[0], e[1]] } function Td(a, c) { var b = n(a, "document"); return c === ic(a) || c === b.documentElement ? Sg(a) : (b = Ud(c)) ? [b.width, b.height] : [c.offsetWidth, c.offsetHeight] } function nf(a, c) {
                var b = c, d = n(a, "document"), e = Wa(b); if (!b || !b.ownerDocument || "PARAM" === e || b === ic(a) || b === d.documentElement) return { left: 0, top: 0 }; if (d = b.getBoundingClientRect && Ud(b)) return b = Be(a), {
                    left: Math.round(d.left + b.x), top: Math.round(d.top +
                        b.y)
                }; for (e = d = 0; b;)d += b.offsetLeft, e += b.offsetTop, b = b.offsetParent; return { left: d, top: e }
            } function Jb(a, c, b) {
                if (!(c && c.Element && c.Element.prototype && c.document && b)) return null; if (c.Element.prototype.closest && Ba("closest", c.Element.prototype.closest) && b.closest) return b.closest(a); var d = ih(c); if (d) { for (; b && 1 === b.nodeType && !d.call(b, a);)b = b.parentElement || b.parentNode; return b && 1 === b.nodeType ? b : null } if (Yc(c)) {
                    for (a = Aa((c.document || c.ownerDocument).querySelectorAll(a)); b && 1 === b.nodeType && -1 === ac(c)(b,
                        a);)b = b.parentElement || b.parentNode; return b && 1 === b.nodeType ? b : null
                } return null
            } function Yc(a) { return !(!Ba("querySelectorAll", n(a, "Element.prototype.querySelectorAll")) || !a.document.querySelectorAll) } function ui(a) { return Vd(a) && !Ma(oa(a.type), Sn) ? vi(a) ? !a.checked : !a.value : Tn(a) ? !a.value : Un(a) ? 0 > a.selectedIndex : !0 } function Wa(a) { if (a) try { var c = a.nodeName; if (Ha(c)) return c; c = a.tagName; if (Ha(c)) return c } catch (b) { } } function wi(a, c) { var b = a.document.getElementsByTagName("form"); return ac(a)(c, Aa(b)) }
            function Vn(a, c, b) { b = Ob("dispatchEvent", b || a.document); var d = null, e = n(a, "Event.prototype.constructor"); if (e && (Ba("(Event|Object|constructor)", e) || Wd(a) && "[object Event]" === "" + e)) try { d = new a.Event(c) } catch (f) { if ((a = Ob("createEvent", n(a, "document"))) && S(a)) { try { d = a(c) } catch (g) { } d && d.initEvent && d.initEvent(c, !1, !1) } } d && b(d) } function Ud(a) {
                try { return a.getBoundingClientRect && a.getBoundingClientRect() } catch (c) {
                    return "object" === typeof c && null !== c && 16389 === (c.Ic && c.Ic & 65535) ? {
                        top: 0, bottom: 0, left: 0, width: 0,
                        height: 0, right: 0
                    } : null
                }
            } function Sg(a) { var c = Lb(a); a = td(a); return [Math.max(c.scrollWidth, a[0]), Math.max(c.scrollHeight, a[1])] } function Be(a) { var c = ic(a), b = n(a, "document"); return { x: a.pageXOffset || b.documentElement && b.documentElement.scrollLeft || c && c.scrollLeft || 0, y: a.pageYOffset || b.documentElement && b.documentElement.scrollTop || c && c.scrollTop || 0 } } function td(a) {
                var c = xi(a); if (c) { var b = c[2]; return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)] } c = Lb(a); return [n(c, "clientWidth") || a.innerWidth, n(c, "clientHeight") ||
                    a.innerHeight]
            } function xi(a) { var c = n(a, "visualViewport.width"), b = n(a, "visualViewport.height"); a = n(a, "visualViewport.scale"); return na(c) || na(b) ? null : [Math.floor(c), Math.floor(b), a] } function Lb(a) { var c = n(a, "document") || {}, b = c.documentElement; return "CSS1Compat" === c.compatMode ? b : ic(a) || b } function ic(a) { a = n(a, "document"); try { return a.getElementsByTagName("body")[0] } catch (c) { return null } } function Mb(a, c) { try { return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(c.className) } catch (b) { return !1 } } function tb(a) {
                var c;
                try { if (c = a.target || a.srcElement) !c.ownerDocument && c.documentElement ? c = c.documentElement : c.ownerDocument !== document && (c = null) } catch (b) { } return c
            } function fc(a) { var c = a && a.parentNode; c && c.removeChild(a) } function Eb(a) { return a ? a.innerText || "" : "" } function Og(a) { if (na(a)) return !1; a = a.nodeType; return 3 === a || 8 === a } function db(a, c) { if (a) { var b = yi ? yi.call(a) : ("" + a).replace(xh, ""); return c && b.length > c ? b.substring(0, c) : b } return "" } function Tb(a) {
                var c; if (c = n(a, "XMLHttpRequest")) if (c = "withCredentials" in new a.XMLHttpRequest) {
                    a: {
                        if (Wn.test(a.location.host) &&
                            a.opera && S(a.opera.version) && (c = a.opera.version(), "string" === typeof c && "12" === c.split(".")[0])) { c = !0; break a } c = !1
                    } c = !c
                } return c ? v(a, Xn) : !1
            } function Xn(a, c, b) { var d, e = new a.XMLHttpRequest, f = b.M, g = B(b.zb ? (d = {}, d.wmode = "7", d) : {}, b.Oa); return new G(function (h, k) { e.open(b.fd || "GET", c + "?" + Gc(g), !0); e.withCredentials = !1 !== b.hd; b.Aa && (e.timeout = b.Aa); ri(Ia, Za(function (m) { e.setRequestHeader(m[0], m[1]) }))(b.Na); var l = D([a, e, Va(b.Y), b.zb, b.ue, h, k], Yn); e.onreadystatechange = l; try { e.send(f) } catch (m) { } }) } function Yn(a,
                c, b, d, e, f, g, h) { if (4 === c.readyState) if (200 === c.status || e || g(b), e) 200 === c.status ? f(c.responseText) : g(Fc("http." + c.status + ".st." + c.statusText + ".rt." + ("" + c.responseText).substring(0, 50))); else { e = null; if (d) try { (e = Ab(a, c.responseText)) || g(b) } catch (k) { g(b) } f(e) } return h } function ni(a, c, b) { (b = Gc(b)) && (a += "?" + b); c.M && (a += (b ? "&" : "?") + c.M); return a } function hb(a, c, b) { try { return a.JSON.stringify(c, null, b) } catch (d) { return null } } function Gc(a) {
                    return a ? r(Ia, ve(function (c, b) {
                        var d = b[0], e = b[1]; Y(e) || na(e) || c.push(d +
                            "=" + od(e)); return c
                    }, []), Oc("&"))(a) : ""
                } function Zn(a) { return a ? r(Za(function (c) { c = c.split("="); var b = c[1]; return [c[0], na(b) ? void 0 : ji(b)] }), ve(function (c, b) { c[b[0]] = b[1]; return c }, {}))(a.split("&")) : {} } function ji(a) { var c = ""; try { c = decodeURIComponent(a) } catch (b) { } return c } function od(a) { try { return encodeURIComponent(a) } catch (c) { } a = H("", T(function (c) { return 55296 >= c.charCodeAt(0) }, a.split(""))); return encodeURIComponent(a) } function zi() { var a = sa(arguments); return zb(Va(a)) } function Va(a) {
                    var c = "";
                    Z(a) ? c = H(".", a) : Ha(a) && (c = a); return Fc("err.kn(" + ta.Va + ")" + c)
                } function $n(a) { this.message = a } function Ai(a, c, b, d, e) { var f = a.addEventListener && a.removeEventListener, g = !f && a.attachEvent && a.detachEvent; if (f || g) if (e = e ? f ? "removeEventListener" : "detachEvent" : f ? "addEventListener" : "attachEvent", f) a[e](c, b, d); else a[e]("on" + c, b) } function Q(a) { return N(function (c, b) { var d = n(a, "location." + b); c[b] = d ? "" + d : ""; return c }, {}, ao) } function ag(a) { var c = a.match(Bi); if (c) { a = c[1]; if (c = c[2]) return I(c, of) ? c : !1; if (a) return of[0] } return !1 }
            function bo(a, c, b, d, e) { var f = "object" === typeof a ? a : { id: a, O: d, Za: e, J: b }; a = N(function (g, h) { var k = h[1], l = k.fe; k = f[k.Kc]; g[h[0]] = l ? l(k) : k; return g }, {}, Ia(c)); Ci(a, a.J || {}); return a } function co(a, c) { return N(function (b, d) { b[c[d[0]].Kc] = d[1]; return b }, {}, Ia(a)) } function Di(a) { a = O(a); return Ub[a] && Ub[a].De } function Ci(a, c) { var b = O(a), d = n(c, "__ym.turbo_page"), e = n(c, "__ym.turbo_page_id"); Ub[b] || (Ub[b] = {}); if (d || e) Ub[b].De = d, Ub[b].Ee = e } function eo(a) { return pf(a) || zd(a) || /mobile/i.test(gb(a)) || !Y(n(a, "orientation")) }
            function Ze(a) { return I("prerender", z(v(n(a, "document"), n), ["webkitVisibilityState", "visibilityState"])) } function Ua(a, c, b) { var d = Y(b); Y(c) && d ? (d = 1, c = 1073741824) : d ? d = 1 : (d = c, c = b); return a.Math.floor(a.Math.random() * (c - d)) + d } function ik(a) { try { return parseInt(a, 10) } catch (c) { return null } } function sd(a, c) { return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === qf(c) } function fo(a) { for (var c = [], b = a.length - 1; 0 <= b; --b)c[a.length - 1 - b] = a[b]; return c } function Ta(a, c) { F(r(M, ka("push", a)), c); return a } function Aa(a) {
                return a ?
                    Z(a) ? a : Xd ? Xd(a) : "number" === typeof a.length && 0 <= a.length ? Ei(a) : [] : []
            } function rf(a, c, b) { return b ? a : c } function go(a, c) { if (!Uc(a)) return !0; try { c.call({ 0: !0, length: -Math.pow(2, 32) + 1 }, function () { throw 1; }) } catch (b) { return !1 } return !0 } function ho(a, c) { for (var b = "", d = 0; d < c; d += 1)b += a; return b } function io(a, c) { for (var b = 0; b < c.length; b += 1)if (a.call(c, c[b], b)) return c[b] } function Fi(a) { return Y(a) ? [] : Zc(function (c, b) { c.push([b, a[b]]); return c }, [], Gi(a)) } function jo(a, c) {
                return Zc(function (b, d, e) {
                    d = a(d, e); return b.concat(Z(d) ?
                        d : [d])
                }, [], c)
            } function Hi(a, c) { return Zc(function (b, d, e) { b.push(a(d, e)); return b }, [], c) } function ko() { var a = sa(arguments), c = a[0]; for (a = a.slice(1); a.length;) { var b = a.shift(), d; for (d in b) Nc(b, d) && (c[d] = b[d]); Nc(b, "toString") && (c.toString = b.toString) } return c } function Gi(a) { var c = [], b; for (b in a) Nc(a, b) && c.push(b); return c } function lo(a, c) { return 1 <= Ii(oa(a), c).length } function Ii(a, c) { return Zc(function (b, d, e) { a(d, e) && b.push(d); return b }, [], c) } function Z(a) {
                if ($c) return $c(a); ($c = xa(Array.isArray, "isArray")) ||
                    ($c = mo); return $c(a)
            } function Ne(a, c, b) { try { if (S(c)) { var d = sa(arguments).slice(3); na(b) ? c.apply(void 0, d) : K.apply(void 0, aa([c, b], d))() } } catch (e) { Rd(a, v(e, zb), 0) } } function zb(a) { throw a; } function Rd(a, c, b) { return Ob("setTimeout", a)(c, b) } function Na(a, c) { return Ob("clearTimeout", a)(c) } function md() { return [] } function ad() { return {} } function Ob(a, c) { var b = n(c, a), d = n(c, "constructor.prototype." + a) || b; try { if (d && d.apply) return function () { return d.apply(c, arguments) } } catch (e) { return b } return d } function Vb(a,
                c) { return function () { var b = sa(arguments), d = b[0]; b = b.slice(1); var e = L(d), f = e.o("m880", {}), g = n(f, a); g || (g = t(c), f[a] = g, e.C("m880", f)); return g.apply(void 0, aa([d], b)) } } function qc(a, c) { void 0 === c && (c = {}); if (!a || 1 > a.length) return c; N(function (b, d, e) { if (e === a.length - 1) return b; e === a.length - 2 ? b[d] = a[e + 1] : b[d] || (b[d] = {}); return b[d] }, c, a); return c } function n(a, c) { return a ? N(function (b, d) { if (na(b)) return b; try { return b[d] } catch (e) { } return null }, a, c.split(".")) : null } function Wb(a) {
                    a = a.Ya = a.Ya || {}; var c = a._metrika =
                        a._metrika || {}; return { oa: function (b, d) { sf.call(c, b) || (c[b] = d); return this }, C: function (b, d) { c[b] = d; return this }, o: function (b, d) { var e = c[b]; return sf.call(c, b) || Y(d) ? e : d } }
                } function Nc(a, c) { return na(a) ? !1 : sf.call(a, c) } function t(a, c) { var b = [], d = []; var e = c ? c : M; return function () { var f = sa(arguments), g = e.apply(void 0, f), h = Ji(g, d); if (-1 !== h) return b[h]; f = a.apply(void 0, f); b.push(f); d.push(g); return f } } function ac(a) {
                    if (tf) return tf; var c = !1; try { c = [].indexOf && 0 === [void 0].indexOf(void 0) } catch (d) { } var b =
                        a.Array && a.Array.prototype && xa(a.Array.prototype.indexOf, "indexOf"); return tf = a = c && b ? function (d, e) { return b.call(e, d) } : no
                } function no(a, c) { for (var b = 0; b < c.length; b += 1)if (c[b] === a) return b; return -1 } function Ja(a, c) { return c ? a(c) : a() } function r() { var a = sa(arguments), c = a.shift(); return function () { var b = c.apply(void 0, arguments); return N(Ki, b, a) } } function ve(a, c) { return D([a, c], N) } function Da(a) { return ka("test", a) } function ka(a, c) { return K(c[a], c) } function v(a, c) { return D([a], c) } function D(a, c) {
                    return K.apply(void 0,
                        aa([c, null], a))
                } function oo() { var a = sa(arguments), c = a[0], b = a[1], d = a.slice(2); return function () { var e = aa(d, sa(arguments)); if (Function.prototype.call) return Function.prototype.call.apply(c, aa([b], e)); if (b) { for (var f = "_b"; b[f];)f += "_" + f.length; b[f] = c; e = b[f] && Li(f, e, b); delete b[f]; return e } return Li(c, e) } } function Li(a, c, b) {
                    void 0 === c && (c = []); b = b || {}; var d = c.length, e = a; S(e) && (e = "d", b[e] = a); var f; d ? 1 === d ? f = b[e](c[0]) : 2 === d ? f = b[e](c[0], c[1]) : 3 === d ? f = b[e](c[0], c[1], c[2]) : 4 === d && (f = b[e](c[0], c[1], c[2], c[3])) :
                        f = b[e](); return f
                } function qb(a) { return !$a(a) && !Y(a) && "[object Object]" === qf(a) } function na(a) { return Y(a) || $a(a) } function S(a) { return "function" === typeof a } function Rb(a) { return function (c) { return function (b) { return a(b, c) } } } function ca(a) { return function (c) { return function (b) { return a(c, b) } } } function Ki(a, c) { return c(a) } function po(a, c) { for (var b = "", d = 0; d < c.length; d += 1)b += "" + (d ? a : "") + c[d]; return b } function rm(a) {
                    return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(se, "\\.").replace(/\[/g, "\\[").replace(/\]/g,
                        "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
                } function mc(a, c) { return !(!a || -1 === bg(a, c)) } function bg(a, c) { if (Mi) var b = Mi.call(a, c); else a: { b = 0; for (var d = a.length - c.length, e = 0; e < a.length; e += 1) { b = a[e] === c[b] ? b + 1 : 0; if (b === c.length) { b = e - c.length + 1; break a } if (!b && e > d) break } b = -1 } return b } function Ha(a) { return "string" === typeof a } function qf(a) { return Object.prototype.toString.call(a) }
            function sa(a) { if (Xd) try { return Xd(a) } catch (c) { } return Ei(a) } function Ei(a) { for (var c = a.length, b = [], d = 0; d < c; d += 1)b.push(a[d]); return b } function uf(a, c) { uf = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, d) { b.__proto__ = d } || function (b, d) { for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e]) }; return uf(a, c) } function Zc(a, c, b) { for (var d = 0, e = b.length; d < e;)c = a(c, b[d], d), d += 1; return c } function xa(a, c) { return Ba(c, a) && a } function Ba(a, c) { var b = Yd(a, c); c && !b && vf.push([a, c]); return b } function Yd(a,
                c) { if (!c || "function" !== typeof c) return !1; try { var b = "" + c } catch (h) { return !1 } var d = b.length; if (d > 35 + a.length) return !1; for (var e = d - 13, f = 0, g = 8; g < d; g += 1) { f = "[native code]"[f] === b[g] || 7 === f && "-" === b[g] ? f + 1 : 0; if (12 === f) return !0; if (!f && g > e) break } return !1 } function C() { } function Sb(a) { return !a } function kb(a, c) { return c } function M(a) { return a } function bd(a, c) { function b() { this.constructor = a } uf(a, c); a.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b) } function aa() {
                    for (var a = 0, c = 0, b = arguments.length; c <
                        b; c++)a += arguments[c].length; a = Array(a); var d = 0; for (c = 0; c < b; c++)for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d++)a[d] = e[f]; return a
                } function gc(a) { a = "" + a; for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1)c ^= a.charCodeAt(d), c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24); return c >>> 0 } function qo() { } function ro(a, c) { return function () { a.apply(c, arguments) } } function pa(a) {
                    if (!(this instanceof pa)) throw new TypeError("Promises must be constructed via new"); if ("function" !== typeof a) throw new TypeError("not a function");
                    this.da = 0; this.kc = !1; this.fa = void 0; this.Ca = []; Ni(a, this)
                } function Oi(a, c) { for (; 3 === a.da;)a = a.fa; 0 === a.da ? a.Ca.push(c) : (a.kc = !0, pa.lc(function () { var b = 1 === a.da ? c.me : c.ne; if (null === b) (1 === a.da ? wf : cd)(c.ja, a.fa); else { try { var d = b(a.fa) } catch (e) { cd(c.ja, e); return } wf(c.ja, d) } })) } function wf(a, c) {
                    try {
                        if (c === a) throw new TypeError("A promise cannot be resolved with itself."); if (c && ("object" === typeof c || "function" === typeof c)) {
                            var b = c.then; if (c instanceof pa) { a.da = 3; a.fa = c; xf(a); return } if ("function" === typeof b) {
                                Ni(ro(b,
                                    c), a); return
                            }
                        } a.da = 1; a.fa = c; xf(a)
                    } catch (d) { cd(a, d) }
                } function cd(a, c) { a.da = 2; a.fa = c; xf(a) } function xf(a) { 2 === a.da && 0 === a.Ca.length && pa.lc(function () { a.kc || pa.sd(a.fa) }); for (var c = 0, b = a.Ca.length; c < b; c++)Oi(a, a.Ca[c]); a.Ca = null } function so(a, c, b) { this.me = "function" === typeof a ? a : null; this.ne = "function" === typeof c ? c : null; this.ja = b } function Ni(a, c) { var b = !1; try { a(function (d) { b || (b = !0, wf(c, d)) }, function (d) { b || (b = !0, cd(c, d)) }) } catch (d) { b || (b = !0, cd(c, d)) } } function Ab(a, c) { if (!c) return null; try { return a.JSON.parse(c) } catch (b) { return null } }
            function hi(a, c, b, d, e) { void 0 === e && (e = !1); return ff(a, c, "", -100, b, d, e) } function pc(a, c, b) { void 0 === c && (c = "_ym_"); void 0 === b && (b = ""); var d = to(a), e = 1 === (d || "").split(".").length ? d : "." + d, f = b ? "_" + b : ""; return { ab: function (g, h, k) { hi(a, "" + c + g + f, h || e, k); return this }, o: function (g) { return vd(a, "" + c + g + f) }, C: function (g, h, k, l, m) { ff(a, "" + c + g + f, h, k, l || e, m); return this } } } function Cd(a, c) {
                var b = uo(a); return b ? (b.href = c, {
                    protocol: b.protocol, host: b.host, port: b.port, hostname: b.hostname, hash: b.hash, search: b.search, query: b.search.replace(/^\?/,
                        ""), pathname: b.pathname || "/", path: (b.pathname || "/") + b.search, href: b.href
                }) : {}
            } function ab(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535]; c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535]; var b = [0, 0, 0, 0]; b[3] += a[3] * c[3]; b[2] += b[3] >>> 16; b[3] &= 65535; b[2] += a[2] * c[3]; b[1] += b[2] >>> 16; b[2] &= 65535; b[2] += a[3] * c[2]; b[1] += b[2] >>> 16; b[2] &= 65535; b[1] += a[1] * c[3]; b[0] += b[1] >>> 16; b[1] &= 65535; b[1] += a[2] * c[2]; b[0] += b[1] >>> 16; b[1] &= 65535; b[1] += a[3] * c[1]; b[0] += b[1] >>> 16; b[1] &= 65535; b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] +
                    a[3] * c[0]; b[0] &= 65535; return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            } function Xb(a, c) { a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535]; c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535]; var b = [0, 0, 0, 0]; b[3] += a[3] + c[3]; b[2] += b[3] >>> 16; b[3] &= 65535; b[2] += a[2] + c[2]; b[1] += b[2] >>> 16; b[2] &= 65535; b[1] += a[1] + c[1]; b[0] += b[1] >>> 16; b[1] &= 65535; b[0] += a[0] + c[0]; b[0] &= 65535; return [b[0] << 16 | b[1], b[2] << 16 | b[3]] } function wc(a, c) {
                c %= 64; if (32 === c) return [a[1], a[0]]; if (32 > c) return [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c]; c -= 32; return [a[1] <<
                    c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 - c]
            } function Xa(a, c) { c %= 64; return 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0] } function da(a, c) { return [a[0] ^ c[0], a[1] ^ c[1]] } function Pi(a) { a = da(a, [0, a[0] >>> 1]); a = ab(a, [4283543511, 3981806797]); a = da(a, [0, a[0] >>> 1]); a = ab(a, [3301882366, 444984403]); return a = da(a, [0, a[0] >>> 1]) } function vo(a, c) {
                void 0 === c && (c = 210); var b = a || "", d = c || 0, e = b.length - b.length % 16; d = { K: [0, d], L: [0, d] }; for (var f = 0; f < e; f += 16) {
                    var g = d, h = [a.charCodeAt(f + 4) & 255 | (a.charCodeAt(f + 5) & 255) << 8 | (a.charCodeAt(f +
                        6) & 255) << 16 | (a.charCodeAt(f + 7) & 255) << 24, a.charCodeAt(f) & 255 | (a.charCodeAt(f + 1) & 255) << 8 | (a.charCodeAt(f + 2) & 255) << 16 | (a.charCodeAt(f + 3) & 255) << 24], k = [a.charCodeAt(f + 12) & 255 | (a.charCodeAt(f + 13) & 255) << 8 | (a.charCodeAt(f + 14) & 255) << 16 | (a.charCodeAt(f + 15) & 255) << 24, a.charCodeAt(f + 8) & 255 | (a.charCodeAt(f + 9) & 255) << 8 | (a.charCodeAt(f + 10) & 255) << 16 | (a.charCodeAt(f + 11) & 255) << 24]; h = ab(h, Zd); h = wc(h, 31); h = ab(h, $d); g.K = da(g.K, h); g.K = wc(g.K, 27); g.K = Xb(g.K, g.L); g.K = Xb(ab(g.K, [0, 5]), [0, 1390208809]); k = ab(k, $d); k = wc(k, 33);
                    k = ab(k, Zd); g.L = da(g.L, k); g.L = wc(g.L, 31); g.L = Xb(g.L, g.K); g.L = Xb(ab(g.L, [0, 5]), [0, 944331445])
                } e = b.length % 16; f = b.length - e; g = [0, 0]; h = [0, 0]; switch (e) {
                    case 15: h = da(h, Xa([0, b.charCodeAt(f + 14)], 48)); case 14: h = da(h, Xa([0, b.charCodeAt(f + 13)], 40)); case 13: h = da(h, Xa([0, b.charCodeAt(f + 12)], 32)); case 12: h = da(h, Xa([0, b.charCodeAt(f + 11)], 24)); case 11: h = da(h, Xa([0, b.charCodeAt(f + 10)], 16)); case 10: h = da(h, Xa([0, b.charCodeAt(f + 9)], 8)); case 9: h = da(h, [0, b.charCodeAt(f + 8)]), h = ab(h, $d), h = wc(h, 33), h = ab(h, Zd), d.L = da(d.L, h);
                    case 8: g = da(g, Xa([0, b.charCodeAt(f + 7)], 56)); case 7: g = da(g, Xa([0, b.charCodeAt(f + 6)], 48)); case 6: g = da(g, Xa([0, b.charCodeAt(f + 5)], 40)); case 5: g = da(g, Xa([0, b.charCodeAt(f + 4)], 32)); case 4: g = da(g, Xa([0, b.charCodeAt(f + 3)], 24)); case 3: g = da(g, Xa([0, b.charCodeAt(f + 2)], 16)); case 2: g = da(g, Xa([0, b.charCodeAt(f + 1)], 8)); case 1: g = da(g, [0, b.charCodeAt(f)]), g = ab(g, Zd), g = wc(g, 31), g = ab(g, $d), d.K = da(d.K, g)
                }d.K = da(d.K, [0, b.length]); d.L = da(d.L, [0, b.length]); d.K = Xb(d.K, d.L); d.L = Xb(d.L, d.K); d.K = Pi(d.K); d.L = Pi(d.L); d.K = Xb(d.K,
                    d.L); d.L = Xb(d.L, d.K); return ("00000000" + (d.K[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.K[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.L[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.L[1] >>> 0).toString(16)).slice(-8)
            } function Qi(a) { return (a = Q(a).hash.split("#")[1]) ? a.split("?")[0] : "" } function wo(a, c) { var b = Qi(a); Ri = Gn(a, function () { var d = Qi(a); d !== b && (c(), b = d) }, 200, "t.h"); return K(Fn, null, a, Ri) } function xo(a, c, b) {
                var d, e, f = c.O, g = c.ic, h = c.gb, k = L(a), l = ra((d = {}, d.wh = "1", d.pv = "1", d)); Si(f) && a.rd &&
                    a.rd.Se && l.C("ad", "1"); g && l.C("ut", "1"); f = k.o("lastReferrer"); d = Q(a).href; h = { F: (e = {}, e["page-url"] = h || d, e["page-ref"] = f, e), G: l }; b(h, c)["catch"](y(a, "g.s")); k.C("lastReferrer", d)
            } function yo(a, c) { if (Wd(a)) return Na(a, c); yf[c] = !0; return Na(a, ae[c] || 0) } function zo(a, c, b) {
                function d() { yf[x] = !0; f(!1); c() } function e() { Na(a, ae[x]); if (yf[x]) f(!1); else { var J = Math.max(0, b - (m ? q : q + h(X) - p)); J ? ae[x] = fa(a, d, J, "u.t.d.c") : d() } } function f(J) { F(function (P) { var ba = P[0], ia = P[1]; P = P[2]; J ? u.D(ba, ia, P) : u.Sa(ba, ia, P) }, w) }
                var g = v(!1, f); if (Wd(a)) return { id: fa(a, c, b, "u.t.d"), qc: g }; var h = W(a), k = !1, l = !1, m = !0, q = 0, p = h(X), u = ha(a), x = Ti; Ti += 1; ae[x] = 0; var w = [[a, ["blur"], function () { m = k = l = !0; q += h(X) - p; p = h(X); e() }], [a, ["focus"], function () { k || l || (q = 0); p = h(X); k = l = !0; m = !1; e() }], [a.document, ["click", "mousemove", "keydown", "scroll"], function () { l || (k = !0, m = !1, l = !0, e()) }]]; f(!0); e(); return { id: x, qc: g }
            } function fm(a, c) {
                var b, d = tb(c), e = ta.Cb, f = Wb(a); if (d && Mb("ym-advanced-informer", d)) {
                    var g = f.o("ifc", 0) + 1; f.C("ifc", g); g = d.getAttribute("data-lang");
                    var h = Ea(d.getAttribute("data-cid") || ""); if (h || 0 === h) (e = n(a, "Ya." + e + ".informer")) ? e((b = {}, b.i = d, b.id = h, b.lang = g, b)) : f.C("ib", !0), b = c || window.event, b.preventDefault ? b.preventDefault() : b.returnValue = !1
                }
            } function be(a, c, b, d) { return function () { var e = ua(a, c), f = sa(arguments); if (e) return d.apply(void 0, f) } } function Ao(a, c, b, d) { var e = Bo[b]; return e ? function () { var f = sa(arguments); try { var g = d.apply(void 0, f); var h = L(a); h.oa("mt", {}); var k = h.o("mt"), l = k[e]; k[e] = l ? l + 1 : 1 } catch (m) { zb(m) } return g } : d } function dd(a,
                c, b) { var d = c.getAttribute("itemtype"); b = jb('[itemprop~="' + b + '"]', c); return d ? T(function (e) { return e.parentNode && Jb("[itemtype]", a, e.parentNode) === c }, b) : b } function Ra(a, c, b) { return (a = dd(a, c, b)) && a.length ? a[0] : null } function La(a) { if (!a) return ""; a = Z(a) ? a : [a]; return a.length ? a[0].getAttribute("content") || Eb(a[0]) : "" } function Ui(a) { return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") : La(a) : "" } function Mc(a, c, b) {
                    a = c && (mc(c.className, "ym-disable-keys") || mc(c.className, "-metrika-nokeys"));
                    return b && c ? a || !!Rn(["ym-disable-keys", "-metrika-nokeys"], c).length : a
                } function eh(a, c) { return Vd(c) ? "password" === c.type || c.name && I(c.name.toLowerCase(), Vi) || c.id && I(c.id.toLowerCase(), Vi) : !1 } function Wi(a, c) { var b = Math.max(0, Math.min(c, 65535)); Ta(a, [b >> 8, b & 255]) } function Ga(a, c) { Ta(a, [c & 255]) } function Oa(a, c, b) { Ga(c, b); return !1 } function E(a, c) { for (var b = Math.max(0, c | 0); 127 < b;)Ta(a, [b & 127 | 128]), b >>= 7; Ta(a, [b]) } function zf(a, c) { E(a, c.length); for (var b = 0; b < c.length; b += 1)E(a, c.charCodeAt(b)) } function Af(a,
                    c) { var b = c; 255 < b.length && (b = b.substr(0, 255)); a.push(b.length); for (var d = 0; d < b.length; d += 1)Wi(a, b.charCodeAt(d)) } function Co(a, c) { var b = []; if (Oa(a, b, 27)) return []; E(b, c); return b } function Do(a, c) {
                        var b = Wa(c); if (!b) return c[ya] = -1, null; var d = +c[ya]; if (!isFinite(d) || 0 >= d) return null; if (c.attributes) for (var e = c; e;) { if (e.attributes.Ze) return null; e = e.parentElement } e = 64; var f = Sd(a, c), g = f && f[ya] ? f[ya] : 0; 0 > g && (g = 0); b = (b || "").toUpperCase(); var h = Eo()[b]; h || (e |= 2); var k = ti(a, c); k || (e |= 4); var l = Ie(a, c); (f = f ?
                            Ie(a, f) : null) && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && (e |= 8); ec[d].Lc = l[0] + "x" + l[1]; ec[d].size = l[2] + "x" + l[3]; c.id && "string" === typeof c.id && (e |= 32); f = []; if (Oa(a, f, 1)) return null; E(f, d); Ga(f, e); E(f, g); h ? Ga(f, h) : Af(f, b); k && E(f, k); e & 8 || (E(f, l[0]), E(f, l[1]), E(f, l[2]), E(f, l[3])); e & 32 && Af(f, c.id); Ga(f, 0); return f
                    } function Fo(a, c) {
                        var b = c[ya]; if (!b || 0 > b || !Ge(c) || !c.form || hh(a, c.form)) return []; var d = wi(a, c.form); if (0 > d) return []; if (Vd(c)) {
                            var e = {
                                text: 0, color: 0, $a: 0, lf: 0, "datetime-local": 0, email: 0,
                                Ic: 0, Sf: 0, search: 0, Wf: 0, time: 0, url: 0, month: 0, Zf: 0, password: 2, Rf: 3, hf: 4, file: 6, image: 7
                            }; e = e[c.type]
                        } else { e = { We: 1, Xe: 5 }; var f = Wa(c); e = Y(f) ? "" : e[f] } if ("number" !== typeof e) return []; f = -1; for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)if (g[k].name === c.name) { if (g[k] === c) { f = l; break } l += 1 } if (0 > f) return []; g = []; if (Oa(a, g, 7)) return []; E(g, b); E(g, d); E(g, e); zf(g, c.name || ""); E(g, f); return g
                    } function Rg(a, c, b, d, e, f, g) {
                        var h; var k = Td(a, d); var l = k[0]; for (k = k[1]; d && (!l || !k);)if (d = Sd(a, d)) k = Td(a, d), l = k[0], k = k[1];
                        if (!d) return []; l = d[ya]; if (!l || 0 > l) return []; k = (h = {}, h.mousemove = 2, h.click = 32, h.dblclick = 33, h.mousedown = 4, h.mouseup = 30, h.touch = 12, h)[b]; if (!k) return []; h = []; d = nf(a, d); if (Oa(a, h, k)) return []; E(h, c); E(h, l); E(h, Math.max(0, e[0] - d.left)); E(h, Math.max(0, e[1] - d.top)); /^mouse(up|down)|click$/.test(b) && (a = f || g, Ga(h, 2 > a ? 1 : a === (f ? 2 : 4) ? 4 : 2)); return h
                    } function Go(a, c, b) {
                        var d = wi(a, b); if (0 > d) return []; var e = b.elements, f = e.length; b = []; for (var g = 0; g < f; g += 1)if (!ui(e[g])) { var h = e[g][ya]; h && 0 < h && b.push(h) } e = []; if (Oa(a, e,
                            11)) return []; E(e, c); E(e, d); E(e, b.length); for (a = 0; a < b.length; a += 1)E(e, b[a]); return e
                    } function ub(a, c, b) { void 0 === b && (b = []); for (var d = []; c && !Cl(a, c, b); c = Sd(a, c))d.push(c); F(function (e) { ec.Db += 1; var f = ec.Db; e[ya] = f; ec[f] = {}; f = Do(a, e); e = Fo(a, e); f && e && (Ta(b, f), Ta(b, e)) }, Ho(d)); return b } function Io(a) { var c = a.V; if (!Lc || c && !c.fromElement) return ch(a) } function Jo(a) { var c = a.V; if (c && !c.toElement) return He(a) } function Xi(a) {
                        var c = tb(a.V); if (c && wd(c)) {
                            var b = bh(a, c); var d = Fa(a.l), e = []; Oa(a.l, e, 17) ? a = [] : (E(e,
                                d), E(e, c[ya]), a = e); return aa(b, a)
                        }
                    } function Yi(a) { var c = a.l, b = a.V.target; if (b && wd(b)) { c = ub(c, b); var d = Fa(a.l), e = []; Oa(a.l, e, 18) ? a = [] : (E(e, d), E(e, b[ya]), a = e); return aa(c, a) } } function Zi(a) { var c = a.l, b = tb(a.V); if (!b || eh(c, b) || Mc(c, b)) return []; if (Ge(b)) { var d = L(c).o("isEU"), e = xd(c, b, d), f = e.Ka; d = e.Dc; e = e.uc; if (vi(b)) var g = b.checked; else g = b.value, g = f ? H("", $i(g.split(""))) : g; c = ub(c, b); f = Fa(a.l); d = d && !e; e = []; Oa(a.l, e, 39) ? a = [] : (E(e, f), E(e, b[ya]), Af(e, String(g)), Ga(e, d ? 1 : 0), a = e); return aa(c, a) } } function Kc(a) {
                        var c =
                            a.l, b = a.V, d = tb(b); if (!d || "SCROLLBAR" === d.nodeName) return []; var e = [], f = v(e, Ta); d && wd(d) ? f(bh(a, d)) : f(ub(c, d)); f = ud(c, b); return aa(e, Rg(c, Fa(a.l), b.type, d, [f.x, f.y], b.which, b.button))
                    } function Ko(a) {
                        var c = null, b = a.l, d = b.document; if (b.getSelection) { d = void 0; try { d = b.getSelection() } catch (g) { return [] } if ($a(d)) return []; var e = "" + d; c = d.anchorNode } else d.selection && d.selection.createRange && (d = d.selection.createRange(), e = d.text, c = d.parentElement()); if ("string" !== typeof e) return []; try {
                            for (; c && 1 !== c.nodeType;)c =
                                c.parentNode
                        } catch (g) { return [] } if (!c) return []; d = xd(b, c).Ka || Mc(b, c, !0); c = c.getElementsByTagName("*"); for (var f = 0; f < c.length && !d;)d = c[f], d = xd(b, d).Ka || Mc(b, d, !0), f += 1; if (e !== Bf) return Bf = e, d = d ? H("", $i(e.split(""))) : e, e = Fa(a.l), 0 === d.length ? d = b = "" : 100 >= d.length ? (b = d, d = "") : 200 >= d.length ? (b = d.substr(0, 100), d = d.substr(100)) : (b = d.substr(0, 97), d = d.substr(d.length - 97)), c = [], Oa(a.l, c, 29) ? a = [] : (E(c, e), zf(c, b), zf(c, d), a = c), a
                    } function Lo(a) { return aa(Kc(a), Ko(a) || []) } function aj(a) {
                        return (a.shiftKey ? 2 : 0) | (a.ctrlKey ?
                            4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
                    } function bj(a) { var c = []; Cf || (Cf = !0, Bf && c.push.apply(c, Co(a.l, Fa(a.l))), bc(a.l, function () { Cf = !1 }, "fv.c")); return c } function cj(a, c, b, d) { var e = tb(c); if (!e || Je(a, e)) return []; var f = e && Mb("ym-record-keys", e), g = dh(e); c = xd(a, e).Ka; var h = L(a); if (!f && (g && h.o("isEU") || Mc(a, e))) a = []; else { f = ub(a, e); h = Fa(a); g = []; if (Oa(a, g, 38)) a = []; else { E(g, h); Wi(g, b); Ga(g, d); a = e[ya]; if (!a || 0 > a) a = 0; E(g, a); Ga(g, c ? 1 : 0); a = g } a = aa(f, a) } return a } function Mo(a) {
                        var c = a.l,
                        b = a.V, d = b.keyCode, e = aj(b), f = [], g = v(f, Ta); if ({ 3: 1, 8: 1, 9: 1, 13: 1, 16: 1, 17: 1, 18: 1, 19: 1, 20: 1, 27: 1, 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1, 45: 1, 46: 1, 91: 1, 92: 1, 93: 1, 106: 1, 110: 1, 111: 1, 144: 1, 145: 1 }[d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16) 19 === d && 4 === (e & -17) && (d = 144), g(cj(c, b, d, e | 16)), Df = !1, bc(c, function () { Df = !0 }, "fv.kd"), !(67 === d && e & 4) || e & 1 || e & 2 || g(bj(a)); return f
                    } function No(a) {
                        var c = a.l; a = a.V; var b = []; Df && !Ef && 0 !== a.which && (b.push.apply(b, cj(c, a, a.charCode || a.keyCode, aj(a))), Ef = !0, bc(c, function () { Ef = !1 },
                            "fv.kp")); return b
                    } function dj(a) { var c = a.l, b = tb(a.V); if (!b || hh(c, b)) return []; var d = []; if ("FORM" === b.nodeName) { for (var e = b.elements, f = 0; f < e.length; f += 1)ui(e[f]) || d.push.apply(d, ub(c, e[f])); d.push.apply(d, Go(c, Fa(a.l), b)) } return d } function Oo(a) { var c = a.flush; a = tb(a.V); "BODY" === Wa(a) && c() } function ej(a, c, b, d) { return function () { var e = ua(a, c), f = sa(arguments); d.apply(void 0, f); return e } } function fj(a, c, b, d) { return y(a, "cm." + b, d) } function Po(a, c, b, d, e) {
                        return b.length && e ? D(N(function (f, g, h) {
                            return b[h] ?
                                f.concat(D([a, c, d], g)) : f
                        }, [], b), r)()(e) : e
                    } var Wc = { construct: "Metrika", callbackPostfix: "", version: "2ocpriggyfyr946elviuuw" }, vf = [], Xd = xa(Array.from, "from"), se = /\./g, Mi = xa(String.prototype.indexOf, "indexOf"), gj = xa(Array.prototype.join, "join"), H = gj ? function (a, c) { return gj.call(c, a) } : po, oa = ca(function (a, c) { return a === c }), Jc = ca(function (a, c) { a(c); return c }), Oc = ca(H), za = ca(Ki), $a = oa(null), Y = oa(void 0), hj = xa(Function.prototype.bind, "bind"), K = hj ? function () {
                        var a = sa(arguments); return hj.apply(a[0], aa([a[1]],
                            a.slice(2)))
                    } : oo, Am = ca(D), Tk = ca(ka), ij = xa(Array.prototype.reduce, "reduce"), N = ij ? function (a, c, b) { return ij.call(b, a, c) } : Zc, ri = r, Qo = r(M, Ja), tf, Ji = ac(window), Ro = Rb(Ji), sf = Object.prototype.hasOwnProperty, L = t(Wb), R = Rb(n), wa = R("length"), Ng = Array.prototype.every ? function (a, c) { return Array.prototype.every.call(c, a) } : function (a, c) { return N(function (b, d) { return b ? a(d) : !1 }, !0, c) }, $c, mo = r(qf, oa("[object Array]")), So = r(Fi, v(R("1"), Hi)), jj = xa(Array.prototype.filter, "filter"), T = jj ? function (a, c) {
                        return jj.call(c,
                            a)
                    } : Ii, nc = ca(T), Cb = Ba("find", Array.prototype.find) ? function (a, c) { return Array.prototype.find.call(c, a) } : io, I = Array.prototype.includes ? function (a, c) { return Array.prototype.includes.call(c, a) } : lo, cc = Rb(I), kj = t(function (a) { a = n(a, "navigator") || {}; var c = n(a, "userAgent") || ""; return { Cc: -1 < (n(a, "vendor") || "").indexOf("Apple"), ed: c } }), lj = t(v(/gecko/, function (a, c) { return -1 !== (n(c, "navigator.userAgent") || "").toLowerCase().search(a) })), Uc = t(function (a) {
                        var c = n(a, "document.documentElement.style"); a = n(a, "InstallTrigger");
                        return !(!(c && "MozAppearance" in c) || na(a))
                    }), mj = xa(Array.prototype.map, "map"), z = mj && go(window, Array.prototype.map) ? function (a, c) { return c && 0 < c.length ? mj.call(c, a) : [] } : Hi, F = z, Kb = Array.prototype.flatMap ? function (a, c) { return Array.prototype.flatMap.call(c, a) } : jo, Za = ca(z), Hn = Rb(z), Ma = rf(function (a, c) { return Array.prototype.some.call(c, a) }, function (a, c) { for (var b = 0; b < c.length; b += 1)if (b in c && a.call(c, c[b], b)) return !0; return !1 }, Ba("some", Array.prototype.some)), Ff = t(ac), Qc = R("0"), To = ca(function (a, c) {
                        return Array.prototype.sort.call(c,
                            a)
                    }), nj = xa(Array.prototype.reverse, "reverse"), Ho = nj ? function (a) { return nj.call(a) } : fo, oj = Rb(parseInt), Ea = oj(10), Gf = oj(2), Ia = Object.entries ? function (a) { return a ? Object.entries(a) : [] } : Fi, ea = Object.keys ? Object.keys : Gi, xk = Object.values ? Object.values : So, B = Object.assign || ko, ah = ca(function (a, c) { return B({}, a, c) }), Nd = t(r(R("String.fromCharCode"), v("fromCharCode", Ba), Sb)), gb = t(R("navigator.userAgent")), pf = t(r(gb, Da(/ipad|iphone|ipod/i))), Ke = t(function (a) { return n(a, "navigator.platform") || "" }), Uo = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi".split(" "),
                        Qe = t(function (a) { var c = kj(a); a = c.Cc; c = c.ed; var b = ka("indexOf", c); b = Ma(r(b, oa(-1), Sb), Uo); var d = /YaBrowser\/[\d.]+\sSA\/3|CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/; return a && (!/Safari/.test(c) && /Mobile/.test(c) || d.test(c) || b) }), Tc = t(function (a) { a = kj(a); var c = a.ed; return a.Cc && !c.match("CriOS") }), Vo = Da(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/), Wo = Da(/; wv\)/),
                        Rc = t(function (a) { a = gb(a); return Wo(a) || Vo(a) }), Xo = /Chrome\/(\d+)\./, Yo = t(function (a) { return (a = (n(a, "navigator.userAgent") || "").match(Xo)) && a.length ? 76 <= Ea(a[1]) : !1 }), zd = t(function (a) { var c = (gb(a) || "").toLowerCase(); a = Ke(a); return !(-1 === c.indexOf("android") || -1 === c.indexOf(c, "mobile") || !/^android|linux armv/i.test(a)) }), Zo = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "), $o = t(function (a) {
                            var c = n(a, "navigator.connection.type"); if (Y(c)) return null; a = Ff(a)(c, Zo); return -1 ===
                                a ? c : "" + a
                        }), Wd = t(r(R("document.addEventListener"), Sb)), pj = t(function (a) { var c = n(a, "navigator") || {}; return N(function (b, d) { return b || n(c, d) }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"]) }), Bh = t(function (a) { var c = n(a, "navigator") || {}; a = pj(a); Ha(a) || (a = "", c = n(c, "languages.0"), Ha(c) && (a = c)); return a.toLowerCase().split("-")[0] }), oc = t(function (a) { var c = !1; try { c = a.top !== a } catch (b) { } return c }), ap = t(function (a) { var c = !1; try { c = a.top.contentWindow } catch (b) { } return c }), bp = t(function (a) {
                            var c =
                                !1; try { c = a.navigator.javaEnabled() } catch (b) { } return c
                        }), cp = t(function (a) {
                            var c = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "), b = n(a, "external"); b = -1 !== (n(b, "toString") ? "" + b.toString() : "").indexOf("Sequentum"); var d = n(a, "document.documentElement"), e = ["selenium", "webdriver", "driver"]; return !!(Ma(v(a,
                                n), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || Ma(v(n(a, "document"), n), c) || b || d && Ma(K(d.getAttribute, d), e))
                        }), dp = t(function (a) { return !!(Ma(v(a, n), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(gb(a)) || n(a, "navigator.webdriver") || n(a, "isChrome") && !n(a, "chrome")) }), ep = t(function (a) { return Ng(v(a, n), ["ia_document.shareURL", "ia_document.referrer"]) }), fp = t(function (a) { a = n(a, "navigator.plugins"); return !!(a && wa(a) && Ma(r(R("name"), Da(/Chrome PDF Viewer/)), a)) }),
                        gp = new RegExp(H("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Chrome-Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g, "\\$&")), Jm = t(r(R("navigator.userAgent"), Da(gp))), ce = t(function (a) {
                            var c = gb(a) || "", b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/); b = b ? [+b[1], +b[2]] : [0, 0]; c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/); return 14 <=
                                (c ? +c[1] : 0) ? !0 : (pf(a) || 10 < b[0] || 10 === b[0] && 13 <= b[1]) && Tc(a)
                        }), hp = Wc.construct, Hf = Wd(window), ta = { pd: 24226447, jd: 26302566, qd: 51533966, Te: 65446441, ha: "https:", Va: "880", Cb: hp, od: Hf ? 512 : 2048, md: Hf ? 512 : 2048, nd: Hf ? 100 : 400, Ue: 100, Ve: "noindex" }, Ca = { id: "id", ic: "ut", O: "type", Qb: "ldc", ua: "nck", gb: "url", Od: "referrer" }, ip = /^\d+$/, Fb = { id: function (a) { a = "" + (a || "0"); ip.test(a) || (a = "0"); try { var c = Ea(a) } catch (b) { c = 0 } return c }, O: function (a) { return "" + (a || 0 === a ? a : "0") }, ua: Boolean, ic: Boolean }; Ca.Za = "defer"; Fb.Za = Boolean;
            Ca.Qe = "yaDisableGDPR"; Ca.Re = "yaGDPRLang"; Ca.exp = "experiments"; Ca.bb = "ecommerce"; Fb.bb = function (a) { if (a) return !0 === a ? "dataLayer" : "" + a }; Ca.J = "params"; Fb.J = function (a) { return qb(a) || Z(a) ? a : null }; Ca.xb = "userParams"; Ca.Ua = "accurateTrackBounce"; Ca.cd = "triggerEvent"; Fb.cd = Boolean; Ca.Tc = "sendTitle"; Fb.Tc = function (a) { return !!a || Y(a) }; Ca.dc = "trackHash"; Fb.dc = Boolean; Ca.yd = "clickmap"; Ca.yb = "webvisor"; Fb.yb = Boolean; Ca.vb = "trackLinks"; Ca.Hd = "enableAll"; Ca.Fd = "disableFomAnalytics"; Fb.Fd = Boolean; var qj = N(function (a,
                c) { var b = c[0]; a[b] = { Kc: c[1], fe: Fb[b] }; return a }, {}, Ia(Ca)), Ub = {}, O = t(function (a) { return a.id + ":" + a.O }), Si = oa("1"), rj = ca(function (a, c) { var b = c || {}; return { l: v(b, M), o: function (d, e) { var f = b[d]; return Y(f) && !Y(e) ? e : f }, C: function (d, e) { b[d] = e; return this }, Ra: function (d, e) { return "" === e || na(e) ? this : this.C(d, e) }, na: v(b, a) } }), ra = rj(function (a) { var c = ""; a = N(function (b, d) { var e = d[0], f = "" + e + ":" + d[1]; "t" === e ? c = f : b.push(f); return b }, [], Ia(a)); c && a.push(c); return H(":", a) }), ao = "hash host hostname href pathname port protocol search".split(" "),
                of = "ru ua by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ua com.ru".split(" "), Bi = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/, sj = ta.ha + "//mc.yandex.ru/metrika/metrika_match.html", Dm = t(function (a) { a = Q(a).hostname.split("."); return a[a.length - 1] }), tj = t(function (a) { return -1 !== Q(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/) }), Dd = t(function (a) { return (a ? a.replace(/^www\./, "") : "").toLowerCase() }), jp = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|(^|\w+\.)yango\.com|yastatic\.net|meteum\.ai|.*\.yandex|turbopages\.org|turbo\.site)$/,
                Id = t(function (a) { a = Q(a).hostname; var c = !1; a && (c = -1 !== a.search(jp)); return c }), kp = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/, Tl = t(function (a) { a = Q(a).hostname; var c = !1; a && (c = -1 !== a.search(kp)); return c }), lp = t(function (a) { a = Q(a).hostname; var c = !1; a && (c = -1 !== a.search(Bi)); return c }), uj = r(Q, R("protocol"), oa("https:")), An = t(function (a) { return Yo(a) && uj(a) ? "SameSite=None;Secure;" : "" }), mp = t(function (a) {
                    var c =
                        !1; if (!a.addEventListener) return c; try { var b = Object.defineProperty({}, "passive", { get: function () { c = !0; return 1 } }); a.addEventListener("test", C, b) } catch (d) { } return c
                }), np = ca(function (a, c) { return a ? B({ capture: !0, passive: !0 }, c || {}) : !!c }), ha = t(function (a) { a = mp(a); var c = np(a), b = {}; return B(b, { D: function (d, e, f, g) { F(function (h) { var k = c(g); Ai(d, h, f, k, !1) }, e); return K(b.Sa, b, d, e, f, g) }, Sa: function (d, e, f, g) { F(function (h) { var k = c(g); Ai(d, h, f, k, !0) }, e) } }) }), Re = [], op = setTimeout; pa.prototype["catch"] = function (a) {
                    return this.then(null,
                        a)
                }; pa.prototype.then = function (a, c) { var b = new this.constructor(qo); Oi(this, new so(a, c, b)); return b }; pa.prototype["finally"] = function (a) { var c = this.constructor; return this.then(function (b) { return c.resolve(a()).then(function () { return b }) }, function (b) { return c.resolve(a()).then(function () { return c.reject(b) }) }) }; pa.all = function (a) {
                    return new pa(function (c, b) {
                        function d(h, k) {
                            try {
                                if (k && ("object" === typeof k || "function" === typeof k)) {
                                    var l = k.then; if ("function" === typeof l) {
                                        l.call(k, function (m) { d(h, m) }, b);
                                        return
                                    }
                                } e[h] = k; 0 === --f && c(e)
                            } catch (m) { b(m) }
                        } if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.all accepts an array")); var e = Array.prototype.slice.call(a); if (0 === e.length) return c([]); for (var f = e.length, g = 0; g < e.length; g++)d(g, e[g])
                    })
                }; pa.resolve = function (a) { return a && "object" === typeof a && a.constructor === pa ? a : new pa(function (c) { c(a) }) }; pa.reject = function (a) { return new pa(function (c, b) { b(a) }) }; pa.race = function (a) {
                    return new pa(function (c, b) {
                        if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.race accepts an array"));
                        for (var d = 0, e = a.length; d < e; d++)pa.resolve(a[d]).then(c, b)
                    })
                }; pa.lc = "function" === typeof setImmediate && function (a) { setImmediate(a) } || function (a) { op(a, 0) }; pa.sd = function (a) { "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a) }; var G = window.Promise, pp = xa(G, "Promise"), vj = xa(n(G, "resolve"), "resolve"), wj = xa(n(G, "reject"), "reject"), xj = xa(n(G, "all"), "all"); if (I(!1, [pp, vj, wj, xj])) G = pa; else {
                    var de = function (a) { return new Promise(a) }; de.resolve = K(vj, G); de.reject = K(wj,
                        G); de.all = K(xj, G); G = de
                } var Jn = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"], ed, Fc = function (a) { return function (c) { if (ed) return new ed(c); if (Ba("Error", a.Error)) return ed = a.Error, new a.Error(c); ed = $n; return new ed(c) } }(window), Kn = Da(/^http./), In = Da(/^err.kn/), Wn = /[^a-z0-9.:-]/, xh = /^\s+|\s+$/g, yi = xa(String.prototype.trim, "trim"), yj = ca(function (a, c) { return c.replace(a, "") }), vg = yj(/\s/g), yb = yj(/\D/g), qp = t(function (a) {
                    a = n(a, "document") || {}; return ("" +
                        (a.characterSet || a.charset || "")).toLowerCase()
                }), eb = t(r(R("document"), v("createElement", Ob))), ih = t(function (a) { var c = n(a, "Element.prototype"); return c ? (a = Cb(function (b) { return Ba(b, c[b]) }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? c[a] : null : null }), rp = oa("INPUT"), Vd = r(Wa, rp), sp = oa("TEXTAREA"), Tn = r(Wa, sp), tp = oa("SELECT"), Un = r(Wa, tp), vi = r(R("type"), Da(/^(checkbox|radio)$/)), Ge = r(Wa, Da(/^INPUT|SELECT|TEXTAREA$/)), wd = r(Wa, Da(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
                    Sn = ["submit", "image", "hidden"], zj = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
                    kg = t(function () { for (var a = 59, c = {}, b = 0; b < zj.length; b += 1)c[zj[b]] = String.fromCharCode(a), a += 1; return c }), si = t(function (a) { return { sf: a, ta: null, wa: [] } }), pi = {}, lf = {}; pi.p = 500; var oi = { i: "id", n: "name", h: "href", ty: "type" }; lf.h = !0; lf.c = !0; var vc = {}; vc.p = mf; vc.c = function (a, c, b) { (a = db(n(c, "textContent"))) && b && (b = b(c), b.length && Ma(r(R("textContent"), db, oa(a)), b) && (a = "")); Vd(c) && (a = db(c.getAttribute && c.getAttribute("value") || a)); return a }; var xc, kf = "button," + z(function (a) { return 'input[type="' + a + '"]' }, ["button",
                        "submit", "reset", "file"]).join(",") + ",a", mg = v(kf, jb), Pn = (xc = {}, xc.A = "h", xc.BUTTON = "i", xc.DIV = "i", xc.INPUT = "ty", xc), fd; var hc = [li, 0, Tb, jf, Xc]; var Aj = [Tb]; Aj.push(jf); var Bj = Db(Aj), yc = Db([Xc]), up = Db([li, Xc]), ee = Db([0, Tb, jf, Xc]), ja = {}; B(ja, (fd = {}, fd.h = Bj, fd.f = Bj, fd.er = yc, fd)); ja.d = yc; ja.pi = yc; ja.m = up; ja["2"] = hc; ja.t = hc; ja.a = ee; ja.n = hc; ja.r = ee; ja["1"] = ee; ja.g = ee; ja.c = yc; ja.ci = Db([Tb]); ja.e = hc; ja.adb = yc; ja["5"] = hc; var Ec = t(function (a, c) {
                            var b; (b = c ? ja[c] : hc) || (b = []); b = N(function (d, e, f) {
                                (e = e && e(a)) && d.push([f,
                                    e]); return d
                            }, [], b); b.length || zi(); return b
                        }, kb), vp = cc([26812653]), th = t(r(R("id"), vp), O), Nb = ["0", "1", "2", "3"], uc = Nb[0], Pe = Nb[1], Dn = Nb[2], Ue = z(r(M, ka("concat", "GDPR-ok-view-detailed-")), Nb), Hd = aa("GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" "), Ue, ["28", "29", "30"]), Cn = "3 13 14 15 16 17 28".split(" "), Te = r(Za(R("ymetrikaEvent.type")), nc(cc(Hd))), ii = Vb("gsc", gi), Bn = /:\d+$/, to = t(function (a) {
                            var c = (Q(a).host ||
                                "").split("."); return 1 === c.length ? c[0] : N(function (b, d, e) { e += 1; 2 <= e && !b && (e = H(".", c.slice(-e)), Xg(a, e) && (b = e)); return b }, "", c)
                        }), dc = t(pc), zn = t(function (a) { ei(a, "_ymBRC", "1"); var c = "1" !== di(a, "_ymBRC"); c || fi(a, "_ymBRC"); return c }), Ka = t(qe), zc = t(qe, function (a, c, b) { return "" + c + b }), W = t(Lh), ai = Vb("r", function (a, c) { var b = $h(a, c), d = b[0]; return !b[1] && d }), pd = t(re, function (a, c) { return "{" + c.Qb + c.ua }), Uh = t(ad, O), Eg = r(pd, gc), vn = ca(function (a, c) { for (var b = []; !Pd(c);) { var d = xn(c); a(d, function (e) { return e(c) }); b.push(d) } return b }),
                            bf = [], cf = !1, af = !1, uo = t(function (a) { if (a = eb(a)) return a("a") }), Th = ["webkitvisibilitychange", "visibilitychange"], Sh = rj(function (a) { a = Ia(a); return H("", z(function (c) { var b = c[0]; c = c[1]; return $a(c) ? "" : b + "(" + c + ")" }, a)) }), Gb = D([1, null], rf), fe = D([1, 0], rf), sm = /^ *(data|javascript):/i, rh = new RegExp(H("", ["\\.(" + H("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) +
                                ")$"]), "i"), va, Bo = (va = {}, va.hit = "h", va.experiments = "ex", va.params = "p", va.reachGoal = "g", va.userParams = "up", va.trackHash = "th", va.accurateTrackBounce = "atb", va.notBounce = "nb", va.addFileExtension = "fe", va.extLink = "el", va.file = "fc", va.trackLinks = "tl", va.destruct = "d", va.setUserID = "ui", va.getClientID = "ci", va.clickmap = "cm", va.enableAll = "ea", va), wp = Da(/^.+\.mtproxy\.yandex\.net$/), Fe = t(function (a) { if ("MetrikaPlayer" === a.name) return !0; a = Q(a).hostname; return wp(a) }), Od = t(function () { return { Ma: {}, pending: {}, Ea: {} } }),
                            If = R("postMessage"), xp = A("s.f", function (a, c, b, d, e) { c = c(d); var f = Od(a), g = H(":", [c.ca.$a, c.ca.key]); if (If(b)) { f.pending[g] = e; try { b.postMessage(c.$c, "*") } catch (h) { delete f.pending[g]; return } fa(a, function () { delete f.pending[g] }, 5E3, "if.s") } }), yp = A("s.fh", function (a, c, b, d, e, f) {
                                var g = null, h = null, k = Od(a), l = null; try { g = Ab(a, f.data), h = g.__yminfo, l = g.data } catch (m) { return } if (!na(h) && h.substring && "__yminfo" === h.substring(0, 8) && !na(l) && (g = h.split(":"), 4 === g.length)) if (h = c.id, c = g[1], a = g[2], g = g[3], !Z(l) && l.type &&
                                    "0" === g && l.counterId) { if (!l.toCounter || l.toCounter == h) { k = null; try { k = f.source } catch (m) { } !$a(k) && If(k) && (f = d.R(l.type, [f, l]), e = z(r(M, ah(e)), f.concat([{}])), l = b([c, a, l.counterId], e), k.postMessage(l.$c, "*")) } } else g === "" + h && Z(l) && T(function (m) { return !(!m.hid || !m.counterId) }, l).length === l.length && (b = k.pending[H(":", [c, a])]) && b.apply(null, [f].concat(l))
                            }), Mh = t(function (a, c) {
                                var b, d = Ob("getElementsByTagName", n(a, "document")), e = Od(a), f = If(a), g = gf(a), h = ha(a); if (!d || !f) return null; d = d.call(a.document, "iframe");
                                f = (b = {}, b.counterId = c.id, b.hid = "" + Ib(a), b); mn(a, g); b = nn(a, f); var k = D([a, v([], b)], xp); F(function (l) { var m = null; try { m = l.contentWindow } catch (q) { } m && k(m, { type: "initToChild" }, function (q, p) { g.R("initToParent", [q, p]) }) }, d); oc(a) && k(a.parent, { type: "initToParent" }, function (l, m) { g.R("parentConnect", [l, m]) }); h.D(a, ["message"], D([a, c, b, g, f], yp)); return { T: g, Ma: e.Ma, Ea: e.Ea, $b: k }
                            }, r(kb, O)), Kd = t(Rh, r(kb, O)), zp = A("pa.plgn", function (a, c) {
                                var b = Kd(a, c); b && b.T.D(["pluginInfo"], y(a, "c.plgn", function () {
                                    var d = L(a); d.C("cmc",
                                        d.o("cmc", 0) + 1); return co(c, qj)
                                }))
                            }), lb, jc, ze = (lb = {}, lb.transaction_id = "id", lb.item_id = "id", lb.item_name = "name", lb.item_brand = "brand", lb.promotion_name = "coupon", lb.index = "position", lb.item_variant = "variant", lb.value = "revenue", lb.item_category = "category", lb), Mg = (jc = {}, jc.view_item = "detail", jc.add_to_cart = "add", jc.remove_from_cart = "remove", jc.begin_checkout = "checkout", jc.purchase = "purchase", jc), pl = "currencyCode add delete remove purchase checkout detail".split(" "), ge = ca(function (a, c) {
                                return L(c).o(a,
                                    null)
                            }), Ap = t(function () { var a = 0; return function () { return a += 1 } }), Bp = r(O, Ap, Ja), Pa = { mc: function (a) { a = Wb(a).o("mt", {}); a = Ia(a); return a.length ? N(function (c, b, d) { return "" + c + (d ? "-" : "") + b[0] + "-" + b[1] }, "", a) : null } }; Pa.oo = ge("oo"); Pa.pmc = ge("cmc"); Pa.clc = function (a) { var c = L(a).o("cls", { Wa: 0, x: 0, y: 0 }), b = c.Wa, d = c.x; c = c.y; return b ? b + "-" + a.Math.floor(d / b) + "-" + a.Math.floor(c / b) : b + "-" + d + "-" + c }; Pa.lt = function (a) { var c = Wb(a).o("lt", null); return c ? a.Math.round(100 * c) : c }; Pa.yu = function (a) {
                                var c = Q(a); return I(c.hostname,
                                    ["dzen.ru", "ya.ru"]) ? (pc(a, "").o("yandexuid") || "").substring(0, 25) : null
                            }; Pa.re = r(function (a, c) { return !c.ua && ai(a, c) }, Gb); Pa.aw = function (a) { a = Cb(r(na, Sb), [a.document.hidden, a.document.msHidden, a.document.webkitHidden]); return na(a) ? null : fe(!a) }; Pa.ifc = function (a) { return Wb(a).o("ifc") }; Pa.ifb = function (a) { return Wb(a).o("ifb") }; Pa.rqnt = function (a, c, b) { a = b.F; return !a || a.nohit ? null : Bp(c) }; Pa.ecs = function (a) { return Wb(a).o("ecs") }; Pa.csi = ge("scip"); var Cp = ea(Pa), Qh = t(function () { return { tc: null, jb: [] } },
                                O), Dp = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart", "navigationStart"], ["redirectEnd", "redirectStart"], [function (a, c) { return n(c, "redirectCount") || n(a, "navigation.redirectCount") }], ["domInteractive", "domLoading"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete", "navigationStart"], ["loadEventStart", "navigationStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart",
                                    "navigationStart"]], bb, Ep = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart"], ["redirectEnd", "redirectStart"], ["redirectCount"], ["domInteractive", "responseEnd"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete"], ["loadEventStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart"]], Ph = (bb = {}, bb.responseEnd = 1, bb.domInteractive = 1, bb.domContentLoadedEventStart = 1, bb.domContentLoadedEventEnd =
                                        1, bb.domComplete = 1, bb.loadEventStart = 1, bb.loadEventEnd = 1, bb.unloadEventStart = 1, bb.unloadEventEnd = 1, bb.secureConnectionStart = 1, bb), Fp = t(md), gn = { "*": "+", "-": "/", Ye: "=", "+": "*", "/": "-", "=": "_" }, gd = t(function (a) { a = n(a, "console"); var c = n(a, "log"); c = Yd("log", c) ? K(c, a) : C; var b = n(a, "warn"); b = Yd("warn", b) ? K(b, a) : c; var d = n(a, "error"); a = Yd("error", d) ? K(d, a) : c; return { log: c, error: a, warn: b } }), Gp = A("p.cd", function (a, c) {
                                            if (zd(a) || pf(a)) {
                                                var b = Ka(a); if (na(b.o("jn"))) {
                                                    b.C("jn", !1); var d = a.jf || Tc(a) ? function () { } : /./,
                                                        e = gd(a, O(c)); d.toString = function () { b.C("jn", !0); return "Yandex.Metrika counter is initialized" }; e.log("%c%s", "color: inherit", d)
                                                }
                                            }
                                        }), en = /Firefox\/([0-9]+)/, dn = /([0-9\\.]+) Safari/, Hp = /\sYptp\/\d\.(\d+)\s/, fn = /Edg\/(\d+)\./, Cj = t(function (a) { var c; a: { if ((c = gb(a)) && (c = Hp.exec(c)) && 1 < c.length) { c = Ea(c[1]); break a } c = 0 } return 50 <= c && 99 >= c || Jh(a, 79) ? !1 : !ce(a) || Qe(a) }), gg = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"),
                                uk = t(function (a) { a = eb(a)("canvas"); var c = n(a, "getContext"); if (!c) return null; try { var b = K(c, a)("2d"); b.font = "72px mmmmmmmmmmlli"; var d = b.measureText("mmmmmmmmmmlli").width; return function (e) { b.font = "72px " + e; return b.measureText("mmmmmmmmmmlli").width === d } } catch (e) { return null } }), Dj = xa(String.prototype.repeat, "repeat"), Ip = Dj ? function (a, c) { return Dj.call(a, c) } : ho, Lg = v(!0, function (a, c, b, d) { b = c.length && (b - d.length) / c.length; if (0 >= b) return d; c = Ip(c, b); return a ? c + d : d + c }), Zd = [2277735313, 289559509], $d = [1291169091,
                                    658871167], Ej = /\/$/, Jp = t(r(W, za(function (a) { return -(new a.l.Date).getTimezoneOffset() }))), Kp = r(W, za(function (a) { a = new a.l.Date; return H("", z(yn, [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()])) })), Lp = r(W, za(Qd)), Fj = t(r(W, za(function (a) { return a.$[0] }))), Mp = t(ad), Np = t(ad), Op = t(function (a) {
                                        var c = n(a, "webkitRequestFileSystem"); if (S(c) && !zd(a)) return (new G(K(c, a, 0, 0))).then(function () { var d = n(a, "navigator.storage") || {}; return d.estimate ? d.estimate() : {} }).then(function (d) {
                                            return (d =
                                                d.quota) && 12E7 > d ? !0 : !1
                                        })["catch"](v(!0, M)); if (Uc(a)) return c = n(a, "navigator.serviceWorker"), G.resolve(Y(c)); c = n(a, "openDatabase"); if (Tc(a) && S(c)) { var b = !1; try { c(null, null, null, null) } catch (d) { b = !0 } return G.resolve(b) } return G.resolve(!n(a, "indexedDB") && (n(a, "PointerEvent") || n(a, "MSPointerEvent")))
                                    }), Pp = /(\?|&)turbo_uid=([\w\d]+)($|&)/, Qp = t(function (a, c) { var b = dc(a), d = Q(a).search.match(Pp); return d && 2 <= d.length ? (d = d[2], c.ua || b.C("turbo_uid", d), d) : (b = b.o("turbo_uid")) ? b : "" }), Rp = t(function (a) {
                                        return S(n(a,
                                            "yandex.getSiteUid")) ? a.yandex.getSiteUid() : null
                                    }), V, wb, Sp = t(function (a) { a = L(a); var c = a.o("counterNum", 0) + 1; a.C("counterNum", c); return c }, r(kb, O)), Qb = (V = {}, V.vf = v(Wc.version, M), V.nt = $o, V.fp = function (a, c, b) {
                                        if (b.F && b.F.nohit) return null; c = O(c); b = Mp(a); if (b[c]) return null; a: {
                                            var d = Fj(a), e = n(a, "performance.getEntriesByType"); if (S(e)) { if (a = T(r(M, R("name"), oa("first-contentful-paint")), e.call(a.performance, "paint")), a.length) { a = a[0].startTime; break a } } else {
                                                e = n(a, "chrome.loadTimes"); if (S(e) && (e = e.call(a.chrome),
                                                    e = n(e, "firstPaintTime"), d && e)) { a = 1E3 * e - d; break a } if (a = n(a, "performance.timing.msFirstPaint")) { a -= d; break a }
                                            } a = void 0
                                        } return a ? (b[c] = a, Math.round(a)) : null
                                    }, V.fu = function (a, c, b) { var d = b.F; if (!d) return null; c = (n(a, "document.referrer") || "").replace(Ej, ""); b = (d["page-ref"] || "").replace(Ej, ""); d = d["page-url"]; a = Q(a).href !== d; c = c !== b; b = 0; a && c ? b = 3 : c ? b = 1 : a && (b = 2); return b }, V.en = qp, V.la = pj, V.ut = function (a, c, b) { var d = b.ob; (b = b.F) && (lp(a) || c.ic || d) && (b.ut = "noindex"); return null }, V.v = v(ta.Va, M), V.cn = Sp, V.dp = function (a) {
                                        var c =
                                            L(a), b = c.o("bt", {}); if (Y(c.o("bt"))) { var d = n(a, "navigator.getBattery"); try { b.p = d && d.call(a.navigator) } catch (e) { } c.C("bt", b); b.p && b.p.then && b.p.then(y(a, "bi:dp.p", function (e) { b.Me = n(e, "charging") && 0 === n(e, "chargingTime") })) } return fe(b.Me)
                                    }, V.ls = t(function (a, c) { var b = zc(a, c.id), d = W(a), e = b.o("lsid"); return +e ? e : (d = Ua(a, 0, d(X)), b.C("lsid", d), d) }, kb), V.hid = Ib, V.z = Jp, V.i = Kp, V.et = Lp, V.c = r(R("navigator.cookieEnabled"), Gb), V.rn = r(M, Ua), V.rqn = function (a, c, b) {
                                        b = b.F; if (!b || b.nohit) return null; c = O(c); a = zc(a, c);
                                        c = (a.o("reqNum", 0) || 0) + 1; a.C("reqNum", c); if (a.o("reqNum") === c) return c; a.ab("reqNum"); return null
                                    }, V.u = pd, V.tp = r(kb, Di, Gb), V.tpid = r(kb, function (a) { a = O(a); return Ub[a] && Ub[a].Ee || null }), V.w = function (a) { a = td(a); return a[0] + "x" + a[1] }, V.s = function (a) { var c = n(a, "screen"); if (c) { a = n(c, "width"); var b = n(c, "height"); c = n(c, "colorDepth") || n(c, "pixelDepth"); return H("x", [a, b, c]) } return null }, V.sk = R("devicePixelRatio"), V.ifr = r(oc, Gb), V.j = r(bp, Gb), V.sti = function (a) { return oc(a) ? ap(a) ? "1" : null : null }, V); Qb.pri = function (a) {
                                        if (Rc(a)) return null;
                                        var c = Np(a), b = c.Nc; Y(b) && (c.Nc = null, Op(a).then(function (d) { c.Nc = d })); return b ? 1 : null
                                    }; B(Qb, (wb = {}, wb.iss = r(cp, Gb), wb.hdl = r(dp, Gb), wb.iia = r(ep, Gb), wb.cpf = r(fp, Gb), wb.ntf = t(function (a) { a: switch (n(a, "Notification.permission")) { case "denied": a = !1; break a; case "granted": a = !0; break a; default: a = null }return $a(a) ? null : a ? 2 : 1 }), wb.eu = ge("isEU"), wb.ns = Fj, wb.np = function (a) {
                                        if (Ua(a, 0, 100)) a = null; else {
                                            a = db(Ke(a), 100); for (var c = [], b = 0; b < a.length; b++) {
                                                var d = a.charCodeAt(b); 128 > d ? c.push(d) : (127 < d && 2048 > d ? c.push(d >>
                                                    6 | 192) : (c.push(d >> 12 | 224), c.push(d >> 6 & 63 | 128)), c.push(d & 63 | 128))
                                            } a = Wg(c)
                                        } return a
                                    }, wb)); Qb.ds = function (a, c, b) { c = O(c); a = ki(a); b = b.F; if ((void 0 === b ? {} : b).nohit) return null; var d = b = null; n(a, "getEntriesByType") && (d = n(a.getEntriesByType("navigation"), "0")) && (b = Ep); if (!b) { var e = n(a, "timing"); e && (b = Dp, d = e) } if (!b) return null; a = jn(a, d, b); c = Fp(c); return (c = hn(c, a)) && H(",", c) }; Qb.bu = Rp; Qb.td = Qp; Qb.co = function (a) { return fe(L(a).o("jn")) }; var an = ea(Qb).concat(Cp), Zm = ["RTCPeerConnection", "mozRTCPeerConnection",
                                        "webkitRTCPeerConnection"], Vm = ca(function (a, c) { if (!c[a]) { var b, d = new G(function (e) { b = e }); c[a] = { Qc: b, ja: d, Rc: !1 } } return c[a].ja }), Kh = t(r(ad, za)), lh = r(R("settings.pcs"), oa("1")), Jf = t(function (a, c, b) {
                                            var d = L(a); c = Ka(a); var e = []; b = D([a, b, d, c], bn); Rc(a) || cn(a, "14.1") || e.push(D([Ym, "pp", ""], b)); var f = Cj(a) && !Ih(a, 68); f || e.push(D([$m, "pu", ""], b)); f || c.Mb || ce(a) || (e.push(D([Um, "zzlc", "na"], b)), e.push(D([Tm, "cc", ""], b))); return e.length ? {
                                                ga: function (g, h) { if (0 === d.o("isEU")) try { F(Qo, e) } catch (k) { } h() }, N: function (g,
                                                    h) { var k = g.G; if (k && 0 === d.o("isEU")) try { F(za(k), e) } catch (l) { } h() }
                                            } : {}
                                        }, function (a, c, b) { return O(b) }), Sc = Vb("retryReqs", function (a) { return Ka(a).o("retryReqs", {}) }), Sm = ["0"], Gk = A("g.r", function (a) {
                                            var c = W(a), b = Sc(a), d = c(X), e = Ib(a); return N(function (f, g) {
                                                var h = g[0], k = g[1]; k && !k.d && k.ghid && k.ghid !== e && k.time && 500 < d - k.time && k.time + 864E5 > d && 2 >= k.browserInfo.rqnl && (k.d = 1, f.push({
                                                    protocol: k.protocol, host: k.host, se: k.resource, oe: k.postParams, J: k.params, vd: k.browserInfo, qa: k.telemetry, uf: k.ghid, time: k.time,
                                                    Qa: Ea(h), Bd: k.counterId, O: k.counterType
                                                })); return f
                                            }, [], Ia(b))
                                        }), Rm = "ru en et fi lt lv pl fr no sr".split(" "), Hb, Pm = (Hb = {}, Hb["GDPR-ok"] = "ok", Hb["GDPR-ok-view-default"] = "ok-default", Hb["GDPR-ok-view-detailed"] = "ok-detailed", Hb["GDPR-ok-view-detailed-0"] = "ok-detailed-all", Hb["GDPR-ok-view-detailed-1"] = "ok-detailed-tech", Hb["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics", Hb["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other", Hb), Jd = [], Ch = r(Te, Za(Ro(Hd)), Oc(",")), Dh = r(nc(cc(Hd)), wa, Boolean),
                                        Im = t(function (a, c) { var b = c.o("gdpr"); return I(b, Nb) ? "-" + b : "" }), cb, Sa, Em = (cb = {}, cb.am = "com.am", cb.tr = "com.tr", cb.ge = "com.ge", cb.il = "co.il", cb["\u0440\u0444"] = "ru", cb["xn--p1ai"] = "ru", cb["\u0443\u043a\u0440"] = "ua", cb["xn--j1amh"] = "ua", cb["\u0431\u0435\u043b"] = "by", cb["xn--90ais"] = "by", cb), Gj = { "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/, "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/, "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/ }, Gm = (Sa = {}, Sa.ka = "ge", Sa.ro = "md", Sa.tg = "tj", Sa.tk = "tm", Sa.et = "ee", Sa.hy =
                                            "com.am", Sa.he = "co.li", Sa.ky = "kg", Sa.uk = "ua", Sa.be = "by", Sa.tr = "com.tr", Sa.kk = "kz", Sa), Hj = t(md), Tp = t(function () { var a = N(function (c, b) { "ru" !== b && (c[b] = "mc.yandex." + b); return c }, {}, of); F(function (c) { a[c] = c }, ea(Gj)); return a }), Up = t(function (a) { var c = Q(a).hostname; return (a = Cb(function (b) { return b[1].test(c) }, Ia(Gj))) && a[0] }), Vp = ca(function (a, c) {
                                                var b = Fm(c), d = [Up(c) || Cm(c)]; tj(c) && d.push(b); var e = W(c); b = Ka(c); var f = b.o("synced", {}); d = T(function (g) {
                                                    if ("ru" !== g) {
                                                        var h = (f[g] || 1) + 1440 < e(Ya); h && delete f[g];
                                                        return h
                                                    }
                                                }, d); b.C("synced", f); return z(function (g) { return { Ae: a[g], ce: g } }, d)
                                            }), Wp = function (a, c) { return function (b, d, e) { d = O(e); d = Tp(d); var f = Vp(d); return ce(b) || Uc(b) ? {} : { N: function (g, h) { var k = g.G, l = L(b), m = tj(b), q = oc(b); k = !(k && k.o("pv")); if (!m || q || k) return h(); m = f(b); if (!m.length) return h(); if (l.o("startSync")) Hj(b).push(h); else { l.C("startSync", !0); l = D([b, m, C], a); m = Re[0]; if (!m) return h(); m(b).then(l).then(h, r(Jc(h), y(b, c)))["catch"](C) } } } } }(function (a, c) {
                                                var b = W(a), d = L(a), e = Ka(a), f = Ec(a, "c"), g = pb(a,
                                                    f); return N(function (h, k) { function l() { var p = e.o("synced"); d.C("startSync", !1); p && (p[k.ce] = q, e.C("synced", p)); F(Ja, Hj(a)) } var m = g({ Y: ["sync.cook"] }, [ta.ha + "//" + k.Ae + "/sync_cookie_image_check"], { Aa: 1500 }), q; m.then(function () { q = b(Ya); l() })["catch"](function () { q = b(Ya) - 1435; l() }); m = v(m, M); return h.then(m) }, G.resolve(""), c)["catch"](y(a, "ctl"))
                                            }, "sy.c"), zh = !1, Bm = /^[a-z][\w.+-]+:/i, Ij = {}, Jj = t(md), he, vb = [[Ye, 1], [Vc, 2], [Pb(), 3], [Xe, 4]], xb = v(vb, vh); xb(Wp, 5); xb(function (a, c, b) {
                                                return {
                                                    ga: function (d, e) {
                                                        var f =
                                                            ua(a, b); (f = f && f.userParams) && d.xb && f(d.xb); e()
                                                    }
                                                }
                                            }, 0); xb(Ah, 6); xb(yh, 7); xb(Jf, 8); xb(function (a) { return { N: function (c, b) { var d = c.G, e = Ka(a).o("fip"); e && d && (d.C("fip", e), Fd(c, "fip", fe(e))); b() } } }, 9); xb(Ld(), 100); var ib = (he = {}, he.h = vb, he.er = [], he); U("adb"); U("f", Pb(), 1); U("f", Xe, 2); U("f", Jf, 3); ib["2"] = vb; xb(function (a, c, b) {
                                                return {
                                                    N: function (d, e) {
                                                        if (d.J && (Ci(b, d.J), !d.M && d.G && d.F)) {
                                                            var f = hb(a, d.J), g = Jj(a), h = d.G.o("pv"); f && !d.F.nohit && (h ? encodeURIComponent(f).length > ta.md ? g.push([d.G, d.J]) : d.F["site-info"] =
                                                                f : (d.M = f, d.ee = !0))
                                                        } e()
                                                    }, ga: function (d, e) { var f = Jj(a), g = ua(a, b), h = g && g.params; h && (g = T(r(Qc, oa(d.G)), f), F(function (k) { h(k[1]); k = Ff(a)(k, f); f.splice(k, 1) }, g)); e() }
                                                }
                                            }, -1); ib["1"] = T(r(Qc, oa(Xe), Sb), vb); xb(function (a, c, b) { return { N: function (d, e) { var f = d.G, g = d.F; if (!f || !g) return e(); !Ij[b.id] && f.o("pv") && b.exp && !g.nohit && (g.exp = b.exp, Ij[b.id] = !0); f = g["page-ref"]; var h = g["page-url"]; f && h !== f ? g["page-ref"] = wh(a, f) : delete g["page-ref"]; g["page-url"] = wh(a, h).slice(0, ta.od); return e() } } }, -100); ib.a = vb; ib.g = vb;
            ib.e = vb; U("r", Vc, 1); U("r", function () { return function (a) { return { N: function (c, b) { var d = c.G, e = void 0 === d ? ra() : d, f = c.Qa, g = c.qa, h = Sc(a); d = e.o("rqnl", 0) + 1; e.C("rqnl", d); var k = e = n(h, H(".", [f, "browserInfo"])); e && (e.rqnl = d); g && (g.C("rqnl", d), f = n(h, H(".", [f, "telemetry"]))) && (f.rqnl = d, k = k || e); k && Ve(a); b() }, ga: function (c, b) { Hh(a, c); b() } } } }(), 2); ib.t = vb; U("n", Ye, 1); U("n", Vc, 2); U("n", Pb(), 3); U("n", Ah, 4); U("n", Jf, 5); U("n", yh, 6); U("n", Ld(), 100); U("d", Pb(["hid", "u", "v", "vf"]), 1); U("m", Pb(["u", "v", "vf"]), 1); U("m",
                Ld(), 2); U("pi"); ib["5"] = T(r(Qc, cc([Ye, Vc]), Sb), vb); var ie, Kj = K(G.reject, G, Va()), qa = (ie = {}, ie.h = Qa, ie.er = v(Kj, M), ie); qa.a = Qa; qa.f = Qa; qa.n = Qa; qa["1"] = Qa; qa.c = pb; qa.g = Qa; qa.e = Qa; qa["2"] = Qa; qa.r = function (a, c, b) { var d = We(a, c, b), e = Qa(a, c, b); return function (f, g, h) { return "webvisor" === h ? d(f, g, f.F["wv-part"]) : e(f, g) } }; qa.adb = Md; qa.pi = pb; qa.m = function (a, c, b) { return function (d, e) { var f, g = d.F; g = (f = {}, f["page-url"] = g && g["page-url"] || "", f); f = B(d, { F: B(d.F || {}, g) }); return Md(a, c, b)(f, "clmap/" + e.id)["catch"](y(a, "c.m")) } };
            qa.d = Qa; qa.t = Qa; qa["5"] = Qa; var la = A("g.sen", function (a, c, b) { var d = Ec(a, c); b = wm(a, c, b); var e = qa[c], f = e ? e(a, d, b) : Qa(a, d, b); return function () { var g = sa(arguments), h = g.slice(1); g = B(g[0], { Y: [c] }); return f.apply(void 0, aa([g], h)) } }, Kj), Xp = A("dc.init", function (a, c) { var b = Q(a), d = gd(a, c), e = dc(a), f = uh(a), g = f.Yd; f = f.Vd; g && !f && e.C("debug", "1", void 0, b.host); return Ee(a) || !g && !f ? { log: C, warn: C, error: C } : d }), Oe = t(Xp, kb), Yp = y(window, "h.p", function (a, c) {
                var b, d, e = la(a, "h", c), f = c.gb || "" + Q(a).href, g = c.Od || a.document.referrer,
                h = { G: ra((b = {}, b.pv = 1, b)), F: (d = {}, d["page-url"] = f, d["page-ref"] = g, d) }; h.J = c.J; h.xb = c.xb; c.Za && h.F && (h.F.nohit = "1"); return e(h, c).then(function (k) { k && (c.Za || rb(a, c, "PageView. Counter " + c.id + ". URL: " + f + ". Referrer: " + g, c.J)(), bc(a, D([a, c, k], Wm))) })["catch"](y(a, "h.g.s"))
            }), Pc = t(ad, O), Zp = A("p.ar", function (a, c) {
                var b = la(a, "a", c); return function (d, e, f, g, h, k) {
                    var l, m, q = { F: {}, G: ra((l = {}, l.pv = 1, l.ar = 1, l)) }; if (d) return e = qb(e) ? { title: e.title, Oc: e.referer, J: e.params, ra: e.callback, l: e.ctx } : {
                        title: e, Oc: f, J: g,
                        ra: h, l: k
                    }, f = Pc(c), f.url !== d && (f.ref = f.url, f.url = d), d = d || Q(a).href, f = e.Oc || f.ref || a.document.referrer, g = rb(a, c, "PageView. Counter " + c.id + ". URL: " + d + ". Referrer: " + f, e.J), q = b(B(q, { J: e.J, title: e.title, F: B(q.F, (m = {}, m["page-url"] = d, m["page-ref"] = f, m)) }), c).then(g), tc(a, "p.ar.s", q, e.ra || C, e.l)
                }
            }), je = ca(function (a, c) { var b = {}; Me(a)(function (d) { b = d[c] || {} }); return b }), $p = A("c.c.cc", function (a) {
                var c = L(a), b = r(je(a), function (d) { var e; return B({}, d, (e = {}, e.oldCode = !!a.ya_cid, e.clickmap = !!d.clickmap, e)) });
                return y(a, "g.c.cc", r(K(c.o, c, "counters", {}), ea, Za(b)))
            }), aq = A("gt.c.rs", function (a, c) { var b, d = O(c), e = c.id, f = c.O, g = c.yd, h = c.yb, k = c.dc, l = D([a, d], vm); sh(a, d, (b = {}, b.id = e, b.type = +f, b.clickmap = g, b.webvisor = !!h, b.trackHash = !!k, b)); return l }), Ri, bq = A("th.e", function (a, c) {
                function b() { f || (h = Nc(a, "onhashchange") ? ha(a).D(a, ["hashchange"], g) : wo(a, g)) } var d = la(a, "t", c), e = Ed(a, O(c)), f = !1, g = y(a, "h.h.ch", K(xo, null, a, c, d)), h = C; c.dc && (b(), f = !0); return {
                    Fe: y(a, "tr.hs.h", function (k) {
                        var l; k ? b() : h(); f = !!k; e((l = {}, l.trackHash =
                            f, l))
                    }), unsubscribe: h
                }
            }), Lj = { 1882689622: 1, 2318205080: 1, 3115871109: 1, 3604875100: 1, 339366994: 1, 2890452365: 1, 849340123: 1, 173872646: 1, 2343947156: 1, 655012937: 1, 3724710748: 1, 3364370932: 1, 1996539654: 1, 2065498185: 1, 823651274: 1, 12282461: 1, 1555719328: 1, 1417229093: 1, 138396985: 1 }, cq = t(function () { return N(function (a, c) { var b = gc(c + "/watch.js"); Lj[b] || (a[b] = 1); return a }, {}, ["mc.yandex.ru", "mc.yandex.com", "cdn.jsdelivr.net/npm/yandex-metrica-watch"]) }), Ti = 1, yf = {}, ae = {}, eq = A("nb.p", function (a, c) {
                function b(J) {
                    k() ||
                    (J = "number" === typeof J ? J : 15E3, J = zo(a, d(!1), J), u = J.id, w = J.qc, l())
                } function d(J) {
                    return function (P) {
                        var ba, ia, mb; void 0 === P && (P = (ba = {}, ba.ctx = {}, ba.callback = C, ba)); if (J || !p && !h.Mb) {
                            p = !0; l(); u && yo(a, u); var Ac = m(X); ba = (Ea(h.o("lastHit")) || 0) < Ac - 18E5; var Kf = .1 > Math.random(); h.C("lastHit", Ac); Ac = ra((ia = {}, ia.nb = "1", ia.cl = x, ia.ar = "1", ia)); ia = Pc(c); ia = { F: (mb = {}, mb["page-url"] = ia.url || Q(a).href, mb), G: Ac }; mb = gd(a, O(c)).warn; !P.callback && P.ctx && mb('"callback" argument missing'); if (J || ba || Kf || !pn(a.location.href,
                                a.document.referrer)) return mb = f(ia, c).then(function () {
                                    if (!J) {
                                        var Yb = .002, Zb = c.id === ta.pd ? 1 : .002, $b, Bc, Lf, ke, Mf; void 0 === Yb && (Yb = 1); void 0 === Zb && (Zb = 1); var hd = a.performance; if (hd && S(hd.getEntriesByType) && (Yb = Math.random() > Yb, Zb = Math.random() > Zb, !Yb || !Zb)) {
                                            hd = a.performance.getEntriesByType("resource"); for (var le = {}, Nf = {}, me = {}, dq = cq(a), Of = 0; Of < hd.length; Of += 1) {
                                                var nb = hd[Of], ne = nb.name.replace(/^https?:\/\//, "").split("?")[0], Mj = gc(ne), Nj = ($b = {}, $b.dns = Math.round(nb.domainLookupEnd - nb.domainLookupStart),
                                                    $b.tcp = Math.round(nb.connectEnd - nb.connectStart), $b.duration = Math.round(nb.duration), $b.response = Math.round(nb.responseEnd - nb.requestStart), $b); "script" !== nb.initiatorType || Yb || (Nf[ne] = B(Nj, (Bc = {}, Bc.name = nb.name, Bc.decodedBodySize = nb.decodedBodySize, Bc))); !Lj[Mj] && !dq[Mj] || le[ne] || Zb || (le[ne] = B(Nj, (Lf = {}, Lf.pages = a.location.href, Lf)))
                                            } ea(le).length && (me.timings8 = le); ea(Nf).length && (me.scripts = Nf); if (ea(me).length) la(a, "d", c)({
                                                G: ra((ke = {}, ke.ar = "1", ke.pv = "1", ke)), M: hb(a, me) || void 0, F: (Mf = {}, Mf["page-url"] =
                                                    a.location && "" + a.location.href, Mf)
                                            }, { id: ta.qd, O: "0" })["catch"](y(a, "r.tim.ng2"))
                                        }
                                    }
                                }), tc(a, "l.o.l", mb, P.callback, P.ctx)
                        } return null
                    }
                } var e, f = la(a, "n", c), g = O(c), h = zc(a, c.id), k = v(v(g, je(a)), r(Ja, R("accurateTrackBounce"))), l = v((e = {}, e.accurateTrackBounce = !0, e), Ed(a, g)), m = W(a), q = m(X), p = !1, u = 0, x = 0, w; ma(a, c, function (J) { x = J.Nd - q }); c.Ua && b(c.Ua); return { ie: d(!0), Ua: b, Fb: w }
            }), Pf = ["yandex_metrika_callback" + Wc.callbackPostfix, "yandex_metrika_callbacks" + Wc.callbackPostfix], fq = A("cb.i", function (a) {
                var c = Pf[0], b =
                    Pf[1]; if (S(a[c])) a[c](); "object" === typeof a[b] && F(function (d, e) { a[b][e] = null; Ne(a, d) }, a[b]); F(function (d) { try { delete a[d] } catch (e) { a[d] = void 0 } }, Pf)
            }), Oj = { wf: Da(/[/&=?#]/) }, ld = A("go.in", function (a, c, b, d) {
                void 0 === b && (b = "goal"); return function (e, f, g, h) {
                    var k, l; if (!e || Oj[b] && Oj[b](e)) return null; var m = f, q = g || C; S(f) && (q = f, m = void 0, h = g); var p = rb(a, c, "Reach goal. Counter: " + c.id + ". Goal id: " + e, m), u = "goal" === b; f = la(a, "g", c); g = um(a, c, e, b); e = g[0]; g = g[1]; m = f({
                        J: m, G: ra((k = {}, k.ar = 1, k)), F: (l = {}, l["page-url"] =
                            e, l["page-ref"] = g, l)
                    }, c).then(function () { u && p(); d && d() }); return tc(a, "g.s", m, q, h)
                }
            }), gq = ca(function (a, c) { Ha(c) ? a.push(c) : F(r(M, ka("push", a)), c) }), hq = A("cl.p", function (a, c) {
                function b(m, q, p, u) { void 0 === u && (u = {}); p ? Bd(a, c, { url: p, Ja: !0, kb: m, ob: q, sender: d, l: u.ctx, ra: u.callback, title: u.title, J: u.params }) : f.warn("Empty link") } var d = la(a, "2", c), e = [], f = gd(a, O(c)), g = O(c), h = y(a, "s.s.tr", v(Ed(a, g), tm)); g = { l: a, sa: c, Ld: e, sender: d, globalStorage: L(a), Cd: zc(a, c.id), yf: Ib(a), Ge: v(v(g, je(a)), r(Ja, R("trackLinks"))) };
                g = y(a, "cl.p.c", v(g, qm)); g = ha(a).D(a, ["click"], g); c.vb && h(c.vb); var k = y(a, "file.clc", D([!0, !1], b)), l = y(a, "e.l.l.clc", D([!1, !0], b)); e = y(a, "add.f.e.clc", gq(e)); return { file: k, Jd: l, ud: e, vb: h, Fb: g }
            }), iq = t(r(R("performance.memory.jsHeapSizeLimit"), ka("concat", ""))), ph = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "), om = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "), nm = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"),
                mm = ["availWidth", "availHeight", "availTop"], jq = ["webgl", "experimental-webgl"], km = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0], Le = v(Va("ccf"), zb), hm = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "), bm = ca(Mb)("(ym-disable-clickmap|ym-clickmap-ignore)"), kq = A("clm.p", function (a, c) {
                    if (Nd(a)) return C; var b = la(a, "m", c), d = O(c), e = W(a), f = e(X), g = v(v(d, je(a)), r(Ja, R("clickmap"))), h, k = null; d = y(a, "clm.p.c", function (l) {
                        var m = g(); if (m) {
                            var q = L(a), p = q.o("cls",
                                { Wa: 0, x: 0, y: 0 }); q.C("cls", { Wa: p.Wa + 1, x: p.x + l.clientX, y: p.y + l.clientY }); q = "object" === typeof m ? m : {}; p = q.filter; m = q.isTrackHash || !1; var u = z(function (w) { return ("" + w).toUpperCase() }, q.ignoreTags || []); Y(h) && (h = q.quota || null); var x = !!q.quota; l = { element: cm(a, l), position: ud(a, l), button: dm(l), time: e(X) }; q = Q(a).href; if (am(a, l, k, u, p)) {
                                    if (x) { if (!h) return; --h } u = Td(a, l.element); p = u[0]; u = u[1]; x = nf(a, l.element); p = ["rn", Ua(a), "x", Math.floor(65535 * (l.position.x - x.left) / (p || 1)), "y", Math.floor(65535 * (l.position.y - x.top) /
                                        (u || 1)), "t", Math.floor((l.time - f) / 100), "p", mf(a, l.element), "X", l.position.x, "Y", l.position.y]; p = H(":", p); m && (p += ":wh:1"); $l(a, q, p, b, c); k = l
                                }
                        }
                    }); return ha(a).D(n(a, "document"), ["click"], d)
                }), lq = t(function (a) { var c = L(a), b = c.o("isEU"); if (Y(b)) { var d = Ea(vd(a, "is_gdpr") || ""); if (I(d, [0, 1])) c.C("isEU", d), b = !!d; else if (a = Ka(a).o("wasSynced"), a = n(a, "params.eu")) c.C("isEU", a), b = !!a } return b }, function (a) { return L(a).o("isEU") }), Pj = A("i.e", lq), mq = A("pr.p", function (a, c) {
                    var b, d; if (Ze(a)) {
                        var e = la(a, "5", c), f = ra((b =
                            {}, b.pq = 1, b.ar = 1, b)); e({ G: f, F: (d = {}, d["page-url"] = Q(a).href, d["page-ref"] = n(a, "document.referrer") || "", d) }, c)["catch"](y(a, "pr.p.s"))
                    }
                }), fb = r(ea, Qc), nq = A("c.m.p", function (a, c) { var b = O(c); return v(Ed(a, b), Zl) }), oq = A("e.a.p", function (a, c) { var b = ua(a, c); b = D([r(M, za(!0)), T(Boolean, z(v(b, n), ["clickmap", "trackLinks", "accurateTrackBounce"]))], z); c.Hd && b(); return b }), pq = A("s.f.i", function (a, c) {
                    return ma(a, c, function (b) {
                        if (n(b, "settings.button_goals") || -1 !== Q(a).href.indexOf("yagoalsbuttons=1")) ha(a).D(a,
                            ["click"], y(a, "c.t.c", r(R("target"), D([a, c], be(a, c, "", Yl))))), rb(a, c, "Button goal. Counter " + c.id + ". Init.")()
                    })
                }), oh, qq = A("p.ai", function (a, c) { return new G(function (b) { (Rc(a) || Qe(a)) && b(ma(a, c, function (d) { var e; return (d = n(d, "settings.sbp")) ? nh(a, B({}, d, (e = {}, e.c = c.id, e)), 10) : C })); b(C) }) }), Qf = [], kc = [], id = [], Ql = [[["'(-$&$&$'", 30102, 0], ["'(-$&$&$'", 29009, 0]], [["oWdZ[nc[jh_YW$Yec", 30103, 1], ["oWdZ[nc[jh_YW$Yec", 29010, 1]]], Rl = [[["oWdZ[nc[jh_YW$Yec", 30103, 1]], [["oWdZ[nc[jh_YW$Yec", 29010, 1]]], mh = { F: { t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k' } },
                kh = { id: 42822899, O: "0" }, oe, Xl = (oe = {}, oe.s = "p", oe["8"] = "i", oe), Ul = Vb("csp", function (a, c) { return la(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"]) }), Qj = "et w v z i u vf".split(" "), Jl = {
                    Uf: "stamp", rf: "frameId", ca: "meta", ef: "base", xf: "hasBase", af: "address", Xf: "ua", Qf: "prev", Ef: "namespace", Bf: "keystrokes", Af: "isMeta", Df: "modifier", Nf: "pageWidth", Mf: "pageHeight", Vf: "startNode", nf: "endNode", $f: "zoomFrom", ag: "zoomTo", level: "level", duration: "duration", zf: "i", If: "o", n: "n", r: "r", kf: "ct", cf: "at", Ff: "nm", Gf: "ns",
                    Lf: "pa", Pf: "pr", Hf: "nx", Ia: "h", gf: "changes", $e: "a", df: "b", ff: "c", Kf: "op"
                }, Kl = ["attributes", "attrs"], Rj = function () {
                    function a(c) { this.l = c } a.prototype.na = function (c) { var b = yd(c); c = z(K(this.za, this), b); return Yh(hb(this.l, z(function (d, e) { var f; return B({}, b[e], (f = {}, f.data = d, f)) }, c))) }; a.prototype.za = function (c) { var b = c.data; "string" !== typeof b && (b = hb(this.l, yd(c.data))); return b }; a.prototype.Ha = function (c) { return encodeURIComponent(c).length }; a.prototype.Zc = function (c, b) {
                        for (var d = Math.ceil(c.length /
                            b), e = [], f = 0; f < b; f += 1)e.push(c.slice(f * d, d * (f + 1))); return e
                    }; a.prototype.isEnabled = function () { return !!this.l.JSON }; return a
                }(), Sj = function () { function a(c, b, d) { this.pc = 0; this.Wb = 1; this.Ab = 5E3; this.l = c; this.aa = b; this.we = d } a.prototype.ub = function () { this.pc = fa(this.l, r(K(this.flush, this), K(this.ub, this)), this.Ab, "b.f") }; a.prototype.send = function (c, b) { var d = this.we(c, b || [], this.Wb); this.Wb += 1; return d }; a.prototype.push = function () { }; a.prototype.flush = function () { }; return a }(), Rf, rq = (Rf = function (a) {
                    function c(b,
                        d, e, f) { void 0 === f && (f = 0); d = a.call(this, b, d, e) || this; d.cc = 0; d.Da = 0; d.bc = 0; d.buffer = []; d.Ab = 2E3; d.T = gf(b); d.ub(); d.bc = f; return d } bd(c, a); c.prototype.wc = function (b) { return T(Boolean, this.T.R("ag", b)) }; c.prototype.vc = function (b, d) { var e = this; b(Bb(y(this.l, "wv2.b.st"), function (f) { e.send(f, d) })) }; c.prototype.xe = function (b, d) {
                            var e = this; Na(this.l, this.pc); var f = Math.ceil(this.aa.Ha(d) / 63E4), g = this.aa.Zc(d, f); F(function (h, k) {
                                var l, m = B({}, b, (l = {}, l.data = h, l.partNum = k + 1, l.end = k + 1 === f, l)); l = e.aa.na([m], !1);
                                e.vc(l, [m])
                            }, g); this.ub()
                        }; c.prototype.send = function (b, d) { var e = this; this.T.R("se", d); return a.prototype.send.call(this, b, d).then(M, function () { e.T.R("see", d) }) }; c.Qd = function (b, d, e, f) { c.Bb["" + b + "e"] || (this.Bb.e = new c(f, e, d, 0)); return this.Bb.e }; c.prototype.Zd = function () { return this.bc && this.cc >= this.bc }; c.prototype.push = function (b) {
                            var d = this; if (!this.Zd()) {
                                this.T.R("p", b); var e = this.aa.za(b), f = this.aa.Ha(e); 7E5 < f ? this.xe(b, e) : (e = this.wc(this.buffer.concat([b])), e = N(function (g, h) { return g + d.aa.Ha(d.aa.za(h)) },
                                    0, e), this.Da + e + f >= 7E5 * .7 && this.flush(), this.buffer.push(b), this.Da += f)
                            }
                        }; c.prototype.D = function (b, d) { this.T.D([b], d) }; c.prototype.va = function (b, d) { this.T.va([b], d) }; c.prototype.flush = function () { var b = this.buffer.concat(this.wc(this.buffer)); if (b.length) { this.buffer = []; this.cc += this.Da; this.Da = 0; var d = this.aa.na(b); this.vc(d, b) } }; return c
                }(Sj), Rf.Bb = {}, Rf), jd, Sf = (jd = {}, jd[1] = 500, jd[2] = 500, jd[3] = 0, jd), Tf = function () {
                    function a(c, b) {
                        var d, e = this; this.id = "a"; this.Lb = !1; this.Ga = {}; this.ya = {
                            "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "),
                            Jc: ["article"]
                        }; this.fc = (d = {}, d.Answer = 3, d.Review = 2, d); this.Ad = t(function (f, g) { sb(e.l, e.ia, "Warning: content has only " + g.chars + " chars. Required " + Sf[g.type], g) }); this.l = c; this.root = Lb(c); this.ia = b
                    } a.prototype.ea = function (c) { return c.element }; a.prototype.xc = function (c, b) { var d = this, e; y(this.l, "P.s." + b, function () { e = d.Ga[b].call(d, c) })(); return e }; a.prototype.pe = function (c) {
                        var b = B({}, c); this.Lb && !b.id && I(c.type, [3, 2]) && (c = H(", ", z(R("name"), b.authors || [])), b.pageTitle = c + ": " + b.pageTitle); b.pageTitle ||
                            (b.pageTitle = this.Ud(b.Xa)); b.pageUrlCanonical || (c = b.id, b.pageUrlCanonical = ("string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)) ? b.id : this.Td()); b.id || (b.id = b.pageTitle || b.pageUrlCanonical); return b
                    }; a.prototype.ba = function (c) { var b = this, d = {}, e = this.ea(c); if (!e) return null; d.type = c.type; F(function (g) { d[g] = b.xc(c, g) }, ea(this.Ga)); var f = W(this.l); d.stamp = f(bi); d.element = c.element; d.Xa = e; d = this.pe(d); d.id = d.id ? gc(d.id) : 1; d.update = function (g) { return b.ea(c) ? b.xc(c, g) : void 0 }; return d }; a.prototype.Ud = function (c) {
                        for (var b =
                            1; 5 >= b; b += 1) { var d = La(sc("h" + b, c)); if (d) return d }
                    }; a.prototype.Td = function () { var c = sc('[rel="canonical"]', this.root); if (c) return c.href }; a.prototype.zc = function () { return 1 }; a.prototype.fb = function () { return [] }; a.prototype.Md = function () {
                        var c = this, b = this.fb(), d = 1; return N(function (e, f) {
                            var g = c.ba({ element: f, type: c.zc(f) }) || []; Z(g) || (g = [g]); g = N(function (h, k) { var l = h.values, m = h.Bc; k && k.chars > Sf[k.type] && !I(k.id, m) ? (l.push(k), m.push(k.id)) : k && k.chars <= Sf[k.type] && c.Ad(k.id, k); return { values: l, Bc: m } }, {
                                values: [],
                                Bc: z(R("id"), e)
                            }, g).values; return e.concat(z(function (h) { var k; h = B((k = { index: d, Wc: !1 }, k.involvedTime = 0, k), h); d += 1; return h }, g))
                        }, [], b)
                    }; return a
                }(), Tj = function (a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this; d.id = "j"; d.Lb = !0; d.oc = H(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']); d.Ga = (b = {}, b.id = function (e) { var f = e.data["@id"]; e = e.data.mainEntity || e.data.mainEntityOfPage; !f && e && (f = e["@id"]); return f },
                            b.chars = function (e) { return "string" === typeof e.data.text ? e.data.text.length : Eb(this.ea(e)).length }, b.authors = function (e) { var f = []; f = f.concat(this.eb(e.data, "author")); f = f.concat(this.eb(e.data.mainEntity, "author")); return f.concat(this.eb(e.data.mainEntityOfPage, "author")) }, b.pageTitle = function (e) {
                                var f = e.data.headline || ""; e.data.bf && (f += " " + e.data.alternativeHeadline); "" === f && (e.data.name ? f = e.data.name : e.data.itemReviewed && (f = e.data.itemReviewed)); 3 === e.type && e.data.parentItem && (f = e.data.parentItem.text);
                                return f
                            }, b.updateDate = function (e) { return e.data.dateModified || "" }, b.publicationDate = function (e) { return e.data.datePublished || "" }, b.pageUrlCanonical = function (e) { return e.data.url }, b.topics = function (e) { return this.eb(e.data, "about", ["name", "alternateName"]) }, b.rubric = function (e) {
                                var f = this, g = this.ea(e); e = T(Boolean, z(function (h) { if (h = Ab(f.l, Eb(h))) { var k = f.yc(h); if (k) return N(function (l, m) { return l ? l : "BreadcrumbList" === m["@type"] ? m : l }, null, k); if ("BreadcrumbList" === h["@type"]) return h } return null }, [e.element].concat(jb(this.oc,
                                    document.body === g ? document.documentElement : g)))); return e.length && (e = e[0].itemListElement, Z(e)) ? T(Boolean, z(function (h) { return h.item && !f.l.isNaN(h.position) ? { name: h.item.name || h.name, position: h.position } : null }, e)) : []
                            }, b); return d
                    } bd(c, a); c.prototype.eb = function (b, d, e) { void 0 === e && (e = ["name"]); if (!b || !b[d]) return []; b = Z(b[d]) ? b[d] : [b[d]]; b = T(M, z(function (f) { return f ? "string" === typeof f ? f : N(function (g, h) { return g || "" + f[h] }, "", e) : null }, b)); return z(function (f) { var g; return g = {}, g.name = f, g }, b) }; c.prototype.ea =
                        function (b) { var d = b.element, e = b.data["@id"], f = b.data.url; b = null; f && "string" === typeof f && (b = this.sc(f)); !b && e && "string" === typeof e && (b = this.sc(e)); b || (b = e = d.parentNode, !Jb("head", this.l, d) && e && 0 !== Eb(e).length) || (b = this.l.document.body); return b }; c.prototype.sc = function (b) { try { var d = Cd(this.l, b).hash; if (d) { var e = sc(d, this.l.document.body); if (e) return e } } catch (f) { } return null }; c.prototype.Vb = function (b) { return this.fc[b["@type"]] || 1 }; c.prototype.ba = function (b) {
                            var d = this, e = b.element; if (!b.data && (b.data =
                                Ab(this.l, Eb(e)), !b.data || !/schema\.org/.test(b.data["@context"]) && !Z(b.data))) return null; var f = this.yc(b.data); if (f) return z(function (h) { if (!I(h["@type"], d.ya["schema.org"])) return null; h = { element: e, data: h, type: d.Vb(h) }; return a.prototype.ba.call(d, h) }, f); if ("QAPage" === b.data["@type"]) { var g = b.data.mainEntity || b.data.mainEntityOfPage; if (!g) return null } "Question" === b.data["@type"] && (g = b.data); return g ? (b = Kb(v(g, n), ["acceptedAnswer", "suggestedAnswer"]), z(function (h) {
                                    var k; if (!h || !I(h["@type"], d.ya["schema.org"])) return null;
                                    h = { element: e, type: d.Vb(h), data: B((k = {}, k.parentItem = g, k), h) }; return a.prototype.ba.call(d, h)
                                }, b)) : I(b.data["@type"], this.ya["schema.org"]) ? a.prototype.ba.call(this, B(b, { type: this.Vb(b.data) })) : null
                        }; c.prototype.fb = function () { return jb(this.oc, this.root) }; c.prototype.yc = function (b) { return Z(b) && b || b && Z(b["@graph"]) && b["@graph"] }; return c
                }(Tf), Uf = function (a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this; d.id = "s"; d.Lb = !0; d.He = ka("exec", new RegExp("schema.org\\/(" + H("|", ea(d.fc)) + ")$"));
                        d.Ga = (b = {}, b.id = function (e) { e = e.element; var f = Ra(this.l, e, "identifier"); return f ? La(f) : (f = Ra(this.l, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") : null }, b.chars = function (e) { var f = 0; e = e.element; for (var g = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], h = 0; h < g.length; h += 1) { var k = Ra(this.l, e, g[h]); if (k) { f = La(k).length; break } } e = Eb(e); 0 === f && e && (f += e.length); return f }, b.topics = function (e) {
                            var f = this, g = dd(this.l, e.element, "about"); return z(function (h) {
                                var k =
                                    { name: La(h) }; if (g = Ra(f.l, h, "name")) k.name = La(g); return k
                            }, g)
                        }, b.rubric = function (e) { var f = this; (e = sc('[itemtype$="schema.org/BreadcrumbList"]', e.element)) || (e = sc('[itemtype$="schema.org/BreadcrumbList"]', this.root)); return e ? z(function (g) { return { name: La(Ra(f.l, g, "name")), position: La(Ra(f.l, g, "position")) } }, dd(this.l, e, "itemListElement")) : [] }, b.updateDate = function (e) { return (e = Ra(this.l, e.element, "dateModified")) ? Ui(e) : "" }, b.publicationDate = function (e) {
                            return (e = Ra(this.l, e.element, "datePublished")) ?
                                Ui(e) : ""
                        }, b.pageUrlCanonical = function (e) { e = dd(this.l, e.element, "url"); if (e.length) { var f = e[0]; return f.href ? f.href : La(e) } return null }, b.pageTitle = function (e) { var f = "", g = e.element, h = Ra(this.l, g, "headline"); h && (f += La(h)); (h = Ra(this.l, g, "alternativeHeadline")) && (f += " " + La(h)); "" === f && ((h = Ra(this.l, g, "name")) || (h = Ra(this.l, g, "itemReviewed")), h && (f += La(h))); 3 === e.type && (e = Jb('[itemtype$="schema.org/Question"]', this.l, g)) && (e = Ra(this.l, e, "text")) && (f += La(e)); return f }, b.authors = function (e) {
                            var f = this; e =
                                dd(this.l, e.element, "author"); return z(function (g) { var h, k = (h = {}, h.name = "", h); /.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") || "") && (h = Ra(f.l, g, "name")) && (k.name = La(h)); k.name || (k.name = g.getAttribute("content") || Eb(g) || g.getAttribute("href")); return k }, e)
                        }, b); return d
                    } bd(c, a); c.prototype.zc = function (b) { b = b.getAttribute("itemtype") || ""; return (b = this.He(b)) ? this.fc[b[1]] : 1 }; c.prototype.ba = function (b) { return b.element && Eb(b.element).length ? a.prototype.ba.call(this, b) : null }; c.prototype.fb =
                        function () { var b = H(",", z(function (d) { return '[itemtype$="schema.org/' + d + '"]' }, this.ya["schema.org"])); return jb(b, this.root) }; return c
                }(Tf), Uj = function (a) {
                    function c(b, d) {
                        var e, f = a.call(this, b, d) || this; f.id = "o"; f.Ga = (e = {}, e.chars = function (g) { g = this.ea(g); return Eb(g).length }, e.authors = function (g) { return this.Hb(g.data.author) }, e.pageTitle = function (g) { return this.ib(g.data.title) || "" }, e.updateDate = function (g) { return this.ib(g.data.modified_time) }, e.publicationDate = function (g) { return this.ib(g.data.published_time) },
                            e.pageUrlCanonical = function (g) { return this.ib(g.data.url) }, e.rubric = function (g) { return this.Hb(g.data.section) }, e.topics = function (g) { return this.Hb(g.data.tag) }, e); f.Id = new RegExp("^(og:)?((" + H("|", f.ya.Jc) + "):)?"); return f
                    } bd(c, a); c.prototype.Hb = function (b) { var d; return b ? Z(b) ? z(function (e) { var f; return f = {}, f.name = e, f }, b) : [(d = {}, d.name = b, d)] : [] }; c.prototype.ib = function (b) { return Z(b) ? b.length ? b[0] : null : b }; c.prototype.fb = function () { var b = jb('meta[property="og:type"]', this.l.document.body); return [this.l.document.head].concat(b) };
                    c.prototype.Sd = function (b) { var d = this, e = b.element, f = {}, g = this.ea(b); e = jb("meta[property]", e === this.l.document.head ? e : g); if (e.length) F(function (h) { try { if (h.parentNode === g || h.parentNode === d.l.document.head) { var k = h.getAttribute("property").replace(d.Id, ""), l = La(h); f[k] ? Z(f[k]) ? f[k].push(l) : f[k] = [f[k], l] : f[k] = l } } catch (m) { Ad(d.l, "og.ed", m) } }, e); else return null; return I(f.type, this.ya.Jc) ? B(b, { data: f }) : null }; c.prototype.ea = function (b) { b = b.element; var d = this.l.document; return b === d.head ? d.body : b.parentNode };
                    c.prototype.ba = function (b) { return (b = this.Sd(b)) ? a.prototype.ba.call(this, b) : null }; return c
                }(Tf), Vj = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "), sq = "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(" "), tq = function () {
                    function a(c, b, d, e) {
                        this.lb = !1; this.ca = {}; this.scroll = { x: 0, y: 0 }; this.Kb = this.Hc = 0; this.Tb = this.Mc = ""; this.W = []; this.Ce = 0; this.Ba = { Ia: 0, jc: 0 }; this.kd = sq; this.buffer =
                            d; this.Ta = K(this.Ta, this); this.hb = K(this.hb, this); this.qb = K(this.qb, this); this.l = c; this.ia = e; this.tb = b; this.Ob = "pai" + b.id; this.Ib(); this.rc = ha(this.l); this.time = W(this.l); this.dd(); this.Jb = L(this.l)
                    } a.prototype.start = function () {
                        var c = this; if (!this.lb) {
                            this.buffer.D("ag", this.hb); this.buffer.D("se", this.qb); this.ye(); var b = this.Jb.o(this.Ob, []), d = !b.length; b.push(K(this.ae, this)); this.Jb.oa(this.Ob, b); d && this.Sc(); var e = function (f, g) { return (f.Zb || 0) <= (g.Zb || 0) ? g : f }; ha(this.l).D(this.l, ["click"], function (f) {
                                if (c.W.length) {
                                    f =
                                    qh(f); var g = Q(c.l).hostname, h; if (h = f) h = Dd(f.hostname) === Dd(g); h && (f = N(e, c.W[0], c.W).id, g = Ib(c.l), zc(c.l, c.ia.split(":")[0]).C("pai", f + "-" + g))
                                }
                            }); this.Ta({ type: "page", target: this.l })
                        }
                    }; a.prototype.stop = function () { this.buffer.va("se", this.qb); this.buffer.va("ag", this.hb); this.Ie(); this.lb = !0 }; a.prototype.Fc = function (c) { return Jb("html", this.l, c) !== this.l.document.documentElement }; a.prototype.Sc = function () {
                        var c = this; y(this.l, "p.ic" + this.tb.id, function () {
                            if (!c.lb) {
                                var b = c.Jb.o(c.Ob), d = c.tb.Md(); F(function (e) {
                                    var f =
                                        z(function (g) { return B({}, g) }, d); S(e) && e(f)
                                }, b); c.Ce = fa(c.l, K(c.Sc, c), 1E3, "p")
                            }
                        })()
                    }; a.prototype.ae = function (c) { this.lb || (this.Je(c), this.Ke(), this.ve()) }; a.prototype.Ta = function (c) {
                        var b = this; y(this.l, "p.ec." + this.tb.id, function () {
                            try { var d = c.type; var e = c.target } catch (l) { return } var f = "page" === d; if ("scroll" === d || f) { var g = [b.l, b.l.document, b.l.document.documentElement, ic(b.l)]; I(e, g) && b.Ib() } ("resize" === d || f) && b.dd(); d = b.time(X); var h = Math.min(d - b.Hc, 5E3); b.Kb += Math.round(h); b.Hc = d; if (b.ca && b.scroll &&
                                b.Ba) { var k = b.Ba.Ia * b.Ba.jc; b.W = z(function (l) { var m = B({}, l), q = b.ca[m.id], p = Ud(l.Xa); if (!q || b.Fc(m.element) || !p) return m; l = b.l.Math; q = l.max((b.scroll.y + b.Ba.Ia - q.y) / q.height, 0); var u = p.height * p.width; p = b.wd(p); m.Zb = p / k; m.visibility = p / u; if (.9 <= m.visibility || .1 <= m.Zb) m.involvedTime += h; m.maxScrolled = l.round(1E4 * q) / 1E4; return m }, b.W) }
                        })()
                    }; a.prototype.wd = function (c) {
                        var b = c.top, d = c.bottom, e = c.left, f = this.Ba, g = f.jc; f = f.Ia; var h = this.l.Math; c = h.min(h.max(c.right, 0), g) - h.min(h.max(e, 0), g); return (h.min(h.max(d,
                            0), f) - h.min(h.max(b, 0), f)) * c
                    }; a.prototype.Je = function (c) { var b = z(function (d) { return d.id }, this.W); this.W = this.W.concat(T(function (d) { return !I(d.id, b) }, c)) }; a.prototype.dd = function () { var c = xi(this.l) || td(this.l); this.Ba = { jc: c[0], Ia: c[1] } }; a.prototype.Ke = function () {
                        var c = this; y(this.l, "p.um." + this.tb.id, function () {
                            var b = []; c.Ib(); c.ca = N(function (d, e) {
                                var f; if (c.Fc(e.element)) b.push(e), delete d[e.id]; else {
                                    var g = (f = {}, f.id = e.id, f.involvedTime = Math.max(e.involvedTime, 0), f.maxScrolled = e.maxScrolled || 0,
                                        f.chars = e.update ? e.update("chars") || 0 : 0, f); e.Xa && (f = Ud(e.Xa)) && (g.x = Math.max(Math.round(f.left) + c.scroll.x, 0), g.y = Math.max(Math.round(f.top) + c.scroll.y, 0), g.width = Math.round(f.width), g.height = Math.round(f.height)); d[e.id] = g
                                } return d
                            }, {}, c.W); F(function (d) { d = Ff(c.l)(d, c.W); c.W.splice(d, 1) }, b)
                        })()
                    }; a.prototype.qb = function () { this.Mc = this.Tb }; a.prototype.hb = function () {
                        var c, b, d = z(v(this.ca, n), ea(this.ca)); return d.length && (this.Tb = hb(this.l, d), this.Mc !== this.Tb) ? (c = {}, c.type = "publishersHeader", c.data =
                            (b = {}, b.articleMeta = d || [], b.involvedTime = this.Kb, b), c) : null
                    }; a.prototype.ve = function () { var c = this; if (this.W.length) { var b = T(function (d) { return !d.Wc }, this.W); F(function (d) { var e, f = N(function (g, h) { d[h] && (g[h] = d[h]); return g }, {}, c.kd); c.buffer.push((e = {}, e.type = "articleInfo", e.stamp = f.stamp, e.data = f, e)); d.Wc = !0 }, b); b.length && sb(this.l, this.ia, "Publisher content info found: ", b) } }; a.prototype.ye = function () { this.rc.D(this.l, Vj, this.Ta) }; a.prototype.Ie = function () { this.rc.Sa(this.l, Vj, this.Ta) }; a.prototype.Ib =
                        function () { this.scroll = { x: this.l.pageXOffset || n(this.l, "document.documentElement.scrollLeft") || 0, y: this.l.pageYOffset || n(this.l, "document.documentElement.scrollLeft") || 0 } }; return a
                }(), kd = {}; Tj && (kd.json_ld = Tj); Uf && (kd.schema = Uf, kd.microdata = Uf); Uj && (kd.opengraph = Uj); var uq = A("p.p", function (a, c) {
                    function b(l, m, q) { return e(B({}, k, { M: l, zd: Il(m) }), c, q)["catch"](y(a, "s.ww.p")) } if (!Ba("querySelectorAll", a.document.querySelectorAll)) return G.resolve(); var d = [new Rj(a)], e = la(a, "p", c), f = Cb(function (l) { return l.isEnabled() },
                        d); d = ra(); var g = zc(a, c.id), h = g.o("pai"); h && (g.ab("pai"), d.C("pai", h)); var k = { F: {}, G: d, Xd: !(f instanceof Rj) }; return ma(a, c, y(a, "ps.s", function (l) { if (l = n(l, "settings.publisher.schema")) { l = Di(c) ? "microdata" : l; var m = kd[l]; if (m && f) { var q = O(c), p = rq.Qd(q, b, f, a); m = new m(a, q); (new tq(a, m, p, q)).start(); sb(a, q, 'Publishers analytics schema "' + l + '"') } } }))
                }), vq = function () {
                    function a(c, b) { this.l = c; this.Rd = b } a.prototype.na = function (c) { return Yh(Kb(K(this.za, this), c)) }; a.prototype.za = function (c, b) {
                        var d = this, e = [],
                        f = this.Rd(this.l, b && b.type, c.type); f && (e = Kb(function (g) { return g({ l: d.l, V: c }) || [] }, f)); return e
                    }; a.prototype.Ha = function (c) { return c.length }; a.prototype.Zc = function (c) { return [c] }; a.prototype.isEnabled = function () { return !0 }; return a
                }(), wl = function (a) {
                    function c(b, d, e) { b = a.call(this, b, d, e) || this; b.buffer = []; b.ld = 7500; b.Ab = 3E4; b.ub(); return b } bd(c, a); c.prototype.push = function (b, d) { var e = this.aa.za(b, d); Ta(this.buffer, e); this.aa.Ha(this.buffer) > this.ld && this.flush() }; c.prototype.flush = function () {
                        var b =
                            this.buffer; b.length && (this.send(b), this.buffer = [])
                    }; return c
                }(Sj), yl = /opera mini/i, Wj = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
                    Dl = ["email", "tel"], Gl = /ym-hide-content/, Hl = /ym-show-content/, El = new RegExp("(" + H("|", Wj) + ")", "i"), Vi = ["password", "passwd", "pswd"], Fl = new RegExp("(" + H("|", Wj.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f(-|\\.|_|\\s){0,2}\u043f\u043e\u0447\u0442\u0430 \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" "))) +
                        ")", "i"), ya = "metrikaId_" + Math.random(), ec = { Db: 0 }, Eo = t(function () {
                            var a; return a = {}, a.A = 1, a.ABBR = 2, a.ACRONYM = 3, a.ADDRESS = 4, a.APPLET = 5, a.AREA = 6, a.B = 7, a.BASE = 8, a.BASEFONT = 9, a.BDO = 10, a.BIG = 11, a.BLOCKQUOTE = 12, a.BODY = 13, a.BR = 14, a.BUTTON = 15, a.CAPTION = 16, a.CENTER = 17, a.CITE = 18, a.CODE = 19, a.COL = 20, a.COLGROUP = 21, a.DD = 22, a.DEL = 23, a.DFN = 24, a.DIR = 25, a.DIV = 26, a.DL = 27, a.DT = 28, a.EM = 29, a.FIELDSET = 30, a.FONT = 31, a.FORM = 32, a.FRAME = 33, a.FRAMESET = 34, a.H1 = 35, a.H2 = 36, a.H3 = 37, a.H4 = 38, a.H5 = 39, a.H6 = 40, a.HEAD = 41, a.HR = 42, a.HTML =
                                43, a.I = 44, a.IFRAME = 45, a.IMG = 46, a.INPUT = 47, a.INS = 48, a.ISINDEX = 49, a.KBD = 50, a.LABEL = 51, a.LEGEND = 52, a.LI = 53, a.LINK = 54, a.MAP = 55, a.MENU = 56, a.META = 57, a.NOFRAMES = 58, a.NOSCRIPT = 59, a.OBJECT = 60, a.OL = 61, a.OPTGROUP = 62, a.OPTION = 63, a.P = 64, a.PARAM = 65, a.PRE = 66, a.Q = 67, a.S = 68, a.SAMP = 69, a.SCRIPT = 70, a.SELECT = 71, a.SMALL = 72, a.SPAN = 73, a.STRIKE = 74, a.STRONG = 75, a.STYLE = 76, a.SUB = 77, a.SUP = 78, a.TABLE = 79, a.TBODY = 80, a.TD = 81, a.TEXTAREA = 82, a.TFOOT = 83, a.TH = 84, a.THEAD = 85, a.TITLE = 86, a.TR = 87, a.TT = 88, a.U = 89, a.UL = 90, a.VAR = 91, a.NOINDEX =
                                100, a
                        }), wq = function () {
                            var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
                            return {
                                tf: new RegExp("(" + H("|", a) + ")", "i"), Of: new RegExp("(" + H("|", a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";"))) +
                                    ")", "i"), qf: /ym-record-keys/i, ke: "\u2022", Jf: 88
                            }
                        }(), $i = Za(v(wq.ke, M)), Lc = !0, Bf = "", Cf = !1, Df = !0, Ef = !1, Bl = ca(function (a, c) { var b = D([a, "efv." + c.event], y); c.H = z(r(M, b), c.H); return c }), xq = t(function (a) {
                            var c = [], b = [], d = []; a.document.attachEvent && !a.opera && (c.push(He), b.push(Io), b.push(Jo)); a.document.addEventListener ? c.push(Yi) : (b.push(Xi), d.push(Yi)); c = aa([{ target: a, type: "window", event: "beforeunload", H: [C] }, { target: a, type: "window", event: "unload", H: [C] }, { event: "click", H: [Kc] }, { event: "dblclick", H: [Kc] }, {
                                event: "mousedown",
                                H: [Kc]
                            }, { event: "mouseup", H: [Lo] }, { event: "keydown", H: [Mo] }, { event: "keypress", H: [No] }, { event: "copy", H: [bj] }, { event: "blur", H: c }, { event: "focusin", H: b }, { event: "focusout", H: d }], !a.document.attachEvent || a.opera ? [{ target: a, type: "window", event: "focus", H: [ch] }, { target: a, type: "window", event: "blur", H: [He] }] : [], a.document.addEventListener ? [{ event: "focus", H: [Xi] }, { event: "change", H: [Zi] }, { event: "submit", H: [dj] }] : [{ type: "formInput", event: "change", H: [Zi] }, { type: "form", event: "submit", H: [dj] }]); return $g(a, c)
                        }), zl =
                        t(function (a) { return aa(ic(a) ? [{ target: a, type: "document", event: "mouseleave", H: [Oo] }] : []) }), yq = ["submit", "beforeunload", "unload"], zq = t(function (a, c) { var b = c(a); return N(function (d, e) { d[e.type + ":" + e.event] = e.H; return d }, {}, b) }), Al = /^\s*function submit\(\)/, Vg = 0, De = { x: 0, y: 0 }, Ug = 0, Ce = { x: 0, y: 0 }, Ae = {}, Xj = t(function (a) {
                            var c = aa([{ event: "mousemove", H: [ul] }, { target: a, type: "window", event: "scroll", H: [Qg] }, { event: "onmousewheel" in a.document ? "mousewheel" : "wheel", H: [tl] }, {
                                target: a, type: "window", event: "beforeunload",
                                H: [Tg]
                            }], lj(a) ? [{ target: a, type: "window", event: "unload", H: [Tg] }] : [], [{ target: a, type: "window", event: "resize", H: [sl] }, { event: "touchmove", H: [Pg] }, { event: "touchstart", H: [Pg] }], a.document.addEventListener ? [{ event: "scroll", H: [rl] }] : []); return aa(xq(a), $g(a, c))
                        }), Aq = v(Xj, function (a, c, b, d) { return zq(c, a)[b + ":" + d] || [] }), Bq = t(function (a) { return aa(yq, ["beforeunload"], lj(a) ? ["unload"] : []) }), Cq = A("wv.p", function (a, c) {
                            var b; if (!(b = !c.yb)) {
                                var d = L(a), e = !1; b = d.o("hitParam", {}); var f = O(c); b[f] && (d = d.o("counters",
                                    {}), e = !(!Si(c.O) || d[f])); b[f] = 1; b = e
                            } if (b) return G.resolve(C); b = new vq(a, Aq); return vl(a, c, b, Xj, Bq(a))
                        }), pe = A("dl.w", function (a, c, b) { var d = 0; hf(a, a[c], b) || (d = fa(a, function () { pe(a, c, b) }, 1E3, "ec.dl")); return function () { return Na(a, d) } }), Dq = A("p.e", function (a, c) {
                            var b = ua(a, c); if (b) {
                                var d = L(a); b = K(b.params, b); var e = y(a, "h.ee", D([a, O(c), b], nl)), f, g = function (k) { f = k; k.pb.D(e) }; if (c.bb) return d.C("ecs", 0), pe(a, c.bb, g); var h = ma(a, c, function (k) { k = n(k, "settings.ecommerce"); d.C("ecs", 1); return k ? pe(a, k, g) : C });
                                return function () { h.then(function (k) { k(); f && f.unsubscribe() }) }
                            }
                        }), Yj = A("fbq.o", function (a, c, b) { var d = n(a, "fbq"); if (d && d.callMethod) { var e = function () { var g = sa(arguments), h = d.apply(void 0, g); c(g); return h }; B(e, d); b && F(c, b); a.fbq = e } else var f = fa(a, D([a, c, aa(Aa(d && d.queue))], Yj), 1E3, "fbq.d"); return K(Na, null, a, f) }), Eq = A("ecm.a", v("add", rd)), Fq = A("ecm.r", v("remove", rd)), Gq = A("ecm.d", v("detail", rd)), Hq = A("ecm.p", v("purchase", rd)), Cc, ob, Dc, Vf = (Cc = {}, Cc.add_to_wishlist = "add-to-wishlist", Cc.begin_checkout =
                            "begin-checkout", Cc.generate_lead = "submit-lead", Cc.add_payment_info = "add-payment-info", Cc), Wf = (ob = {}, ob.AddToCart = "add-to-cart", ob.Lead = "submit-lead", ob.InitiateCheckout = "begin-checkout", ob.Purchase = "purchase", ob.CompleteRegistration = "register", ob.Contact = "submit-contact", ob.AddPaymentInfo = "add-payment-info", ob.AddToWishlist = "add-to-wishlist", ob.Subscribe = "subscribe", ob), kl = (Dc = {}, Dc["1"] = Vf, Dc["2"] = Vf, Dc["3"] = Vf, Dc["0"] = Wf, Dc), ll = [Wf.AddToCart, Wf.Purchase], Iq = ca(function (a, c) {
                                var b = n(c, "ecommerce"),
                                d = n(c, "event") || ""; if (!(b = b && d && { version: "3", cb: d })) a: { if (Z(c) || wa(c)) if (b = sa(c), d = b[1], "event" === b[0] && d) { b = { version: "2", cb: d }; break a } b = void 0 } b || (b = (b = n(c, "ecommerce")) && { version: "1", cb: H(",", ea(b)) }); b && a(b)
                            }), Jq = A("ag.e", function (a, c) { var b = [], d = y(a, "ag.s", D([Ja, b], F)); "0" === c.O && ma(a, c, function (e) { if (n(e, "settings.auto_goals") && ua(a, c) && (e = ld(a, c, "autogoal"))) { e = D([e, c.bb], jl); var f = Iq(e); e = D([a, e], il); b.push(Yj(a, e)); b.push(pe(a, "dataLayer", function (g) { g.pb.D(f) })) } }); return d }), Kq = /[^\d.,]/g,
                    Lq = /[.,]$/, gl = A("ep.pp", function (a, c) { if (!c) return 0; a: { var b = c.replace(Kq, "").replace(Lq, ""); var d = "0" === b[b.length - 1]; for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) { var f = b[e - 1]; if (I(f, [",", "."])) { d = f; break a } } d = "" } b = d ? c.split(d) : [c]; d = d ? b[1] : "00"; b = parseFloat(yb(b[0]) + "." + yb(d)); d = Math.pow(10, 8) - .01; a.isNaN(b) ? b = 0 : (b = a.Math.min(b, d), b = a.Math.max(b, 0)); return b }), Mq = [[["EUR", "\u20ac"], "978"], [["USD", "\u0423\\.\u0415\\.", "\\$"], "840"], [["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"], ["\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(" "),
                        "398"], [["GBP", "\u00a3", "UKL"], "826"], ["RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "), "643"]], Nq = t(function (a) { return new RegExp(a.join("|"), "i") }), Oq = A("ep.cp", function (a) { if (!a) return "643"; var c = vg(a); return (a = Cb(function (b) { return Nq(b[0]).test(c) }, Mq)) ? a[1] : "643" }), Pq = t(function () {
                            function a() { var k = h + "0", l = h + "1"; f[k] ? f[l] ? (h = h.slice(0, -1), --g) : (e[l] = b(8), f[l] = 1) : (e[k] = b(8), f[k] = 1) } function c() {
                                var k = h +
                                    "1"; f[h + "0"] ? f[k] ? (h = h.slice(0, -1), --g) : (h += "1", f[h] = 1) : (h += "0", f[h] = 1)
                            } function b(k) { void 0 === k && (k = 1); var l = d.slice(g, g + k); g += k; return l } for (var d = Jg("Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==").join(""),
                                e = {}, f = {}, g = 1, h = ""; g < d.length - 1;)("0" === b() ? c : a)(); return e
                        }), dl = A("ep.dec", function (a, c) {
                            if (!c || Nd(a)) return []; var b = Jg(c), d = b[1], e = b[2], f = b.slice(3); if (2 !== Gf(b[0])) return []; b = Pq(); f = f.join(""); e = Gf(d + e); var g = ""; d = ""; for (var h = 0; d.length < e && f[h];)g += f[h], b[g] && (d += String.fromCharCode(Gf(b[g])), g = ""), h += 1; b = ""; for (f = 0; f < d.length;)e = d.charCodeAt(f), 128 > e ? (b += String.fromCharCode(e), f++) : 191 < e && 224 > e ? (g = d.charCodeAt(f + 1), b += String.fromCharCode((e & 31) << 6 | g & 63), f += 2) : (g = d.charCodeAt(f + 1), b += String.fromCharCode((e &
                                15) << 12 | (g & 63) << 6 | d.charCodeAt(f + 2) & 63), f += 3); d = Ab(a, b); return Z(d) ? d : []
                        }), fl = A("ep.ent", function (a, c, b) { a = "" + Ua(a, 10, 99); b = "" + 100 * c + b + a; if (16 < wa(b)) return ""; b = Lg("0", 16, b); c = b.slice(0, 8); b = b.slice(-8); c = (+c ^ 92844).toString(35); b = (+b ^ 92844).toString(35); return "" + c + "z" + b }), Zj = r(Ig, Oq), ak = A("ep.ctp", function (a, c, b, d) {
                            var e = Zj(a, b), f = Hg(a, d); Gg(a, c, e, f); Ba("MutationObserver", a.MutationObserver) && (new a.MutationObserver(function () { var g = Zj(a, b), h = Hg(a, d); if (e !== g || f !== h) e = g, f = h, Gg(a, c, e, f) })).observe(a.document.body,
                                { attributes: !0, childList: !0, subtree: !0, characterData: !0 })
                        }), Qq = A("ep.chp", function (a, c, b, d, e) { b && xe(a, c); return d || e ? ha(a).D(a.document, ["click"], y(a, "ep.chp.cl", D([a, c, d, e], el))) : C }), Rq = A("ep.i", function (a, c) {
                            return Yc(a) ? cl(a, c).then(function (b) {
                                var d = b.Gd, e = d[0], f = d[1], g = d[2], h = d[3], k = d[4], l = d[5], m = d[6], q = d[7], p = d[8], u = d[9], x = d[10], w = d[11], J = d[12], P = d[13], ba = d[14], ia = d[15]; if (!b.isEnabled) return G.resolve(C); var mb = qd(a, e), Ac = qd(a, h), Kf = qd(a, m), Yb = qd(a, p), Zb = "" + e + f + g === "" + h + k + l; return new G(function ($b,
                                    Bc) { nd(a)(Bb(Bc, function () { mb && ak(a, c, f, g, x, w, J); Ac && !Zb && ak(a, c, k, l, P, ba, ia); $b(Qq(a, c, Kf || Yb, q, u)) })) })
                            }) : G.resolve(C)
                        }), Sq = A("cc.i", function (a, c) { var b = D([a, c], bl); b = D([a, b, 300], fa); ma(a, c, b) }), bk = C, Tq = Vb("isp.stat", function (a, c) { return new G(function (b, d) { if (Qn(a, sj, "isp")) { var e = function (f) { ("1" === f ? b : d)(); bk(); f = si(sj); I("isp", f.wa) && (f.wa = T(r(oa("isp"), Sb), f.wa), f.wa.length || (fc(f.ta), f.ta = null)) }; bk = ha(a).D(a, ["message"], D([a, c, e], al)); fa(a, e, 1500) } else d() }) }), Uq = Vb("isp", function (a, c) {
                            ma(a,
                                c, function (b) { var d = Cb(function (h) { return n(b, "settings." + h) }, ["rt", "mf"]); if (d && ce(a)) { var e = lh(b) && !Id(a), f = O(c), g = Uh(c); g[f] = { rb: d, status: e ? 3 : 4 }; if (!e) return d = $k(a, c, d), Tq(a, d).then(function () { g[f].status = 1 })["catch"](function () { g[f].status = 2 }) } })["catch"](y(a, "l.isp"))
                        }), Vq = A("p.fh", function (a, c) {
                            var b, d; void 0 === c && (c = !0); var e = Ka(a), f = W(a), g = e.o("wasSynced"), h = { id: 3, O: "0" }; return c && g && g.time + 864E5 > f(X) ? G.resolve(g) : la(a, "f", h)({
                                G: ra((b = {}, b.pv = 1, b)), F: (d = {}, d["page-url"] = Q(a).href, d["page-ref"] =
                                    a.document.referrer, d)
                            }, h).then(function (k) { var l; k = (l = {}, l.time = f(X), l.params = n(k, "settings"), l.bkParams = n(k, "userData"), l); e.C("wasSynced", k); return k })["catch"](y(a, "f.h"))
                        }), Wq = ["ecommerce", "user_id", "fpp"], Xq = A("pa.int", function (a, c) {
                            return function () {
                                var b, d, e = sa(arguments), f = Zk(e); if (!f) return null; e = f.Dd; var g = f.J; f = f.ra; if (!qb(g) && !Z(g)) return null; var h = la(a, "1", c), k = Pc(c).url, l = n(g, "__ym.user_id"), m = ea(g), q = I("__ymu", m), p = I("__ym", m) && l; m = !th(c); var u = g; u.__ym && (u = B({}, g), u.__ym = N(function (x,
                                    w) { var J = n(g, "__ym." + w); J && (x[w] = J); return x }, {}, Wq), ea(u.__ym).length || delete u.__ym, m = !!ea(u).length); l = rb(a, c, p ? "Set user id " + l : (q ? "User p" : "P") + "arams. Counter " + c.id, p ? void 0 : JSON.stringify(u)); h = h({ J: g, G: ra((b = {}, b.pa = 1, b.ar = 1, b)), F: (d = {}, d["page-url"] = k || Q(a).href, d) }, c).then(m ? l : C); return tc(a, "p.s", h, f, e)
                            }
                        }), Yq = A("exps.int", function (a, c) {
                            return function (b, d, e) {
                                var f, g; void 0 === d && (d = C); if (b && 0 < b.length) {
                                    var h = la(a, "e", c), k = Pc(c).url; b = h({
                                        G: ra((f = {}, f.ex = 1, f.ar = 1, f)), F: (g = {}, g["page-url"] =
                                            k || Q(a).href, g.exp = b, g)
                                    }, c); return tc(a, "exps.s", b, d, e)
                                }
                            }
                        }), Zq = A("y.p", function (a, c) { var b = Rh(a, c); if (b) { var d = Gd(a), e = D([a, b, c], Yk); Eh(a, d, function (f) { f.D(["params"], e) }); b.T.D(["params"], r(R("1"), e)) } }), $q = A("fid", function (a) {
                            var c, b = C; if (!S(a.PerformanceObserver)) return b; var d = L(a); if (d.o("fido")) return b; d.C("fido", !0); var e = new a.PerformanceObserver(y(a, "fid", function (f) { f = f.getEntries()[0]; d.C("fid", a.Math.round(100 * (f.processingStart - f.startTime))); b() })); b = function () { return e.disconnect() };
                            try { e.observe((c = {}, c.type = "first-input", c.buffered = !0, c)) } catch (f) { } return b
                        }), cg = v("form", Jb), Ok = v("form", jb), Cg = t(function (a) { return H("[^\\d<>]*", a.split("")) }), Kk = t(function (a) { return new RegExp(Cg(a), "g") }), Vk = /\S/, ug = v(["style", "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit"], qc), ck = t(function (a) { a = Q(a); a = Zn(a.search.substring(1)); a["_ym_status-check"] = a["_ym_status-check"] || ""; a._ym_lang = a._ym_lang || "ru"; return a }), qg = r(ck, R("_ym_status-check"), Ea),
                    ar = r(ck, R("_ym_lang")), Mk = ["https://iframe-toloka.com/"], pg = Da(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/), Qk = ["form", "button", "phone", "status"], Nk = t(function (a, c, b) { b.inline ? jg(a, b) : b.resource && pg(b.resource) && (a._ym__postMessageEvent = c, a._ym__inpageMode = b.inpageMode, a._ym__initMessage = b.initMessage, Rk(a, b.resource)) }, function (a, c, b) { return b.id }), br = A("cs.init", function (a,
                        c) { var b, d = qg(a); d && c.id === d && "0" === c.O && (d = (b = {}, b.lang = ar(a), b.fileId = "status", b.id = "" + c.id, b), fa(a, D([a, d], jg), 0, "cs")) }), dk = t(function (a) { return Nd(a) || !Yc(a) }), Hk = t(rg), ig = t(Ab, kb), cr = A("phc.p", function (a, c) {
                            return dk(a) ? C : ma(a, c, function (b) {
                                var d = c.id, e = pc(a, void 0, d), f = e.o("phc_settings") || ""; if (b = n(b, "settings.phchange")) { var g = hb(a, b) || ""; g !== f && e.C("phc_settings", g) } else f && (b = ig(a, f)); e = n(b, "clientId"); f = n(b, "orderId"); b = n(b, "phones") || []; e && f && b.length && (f = {
                                    Fa: "", La: "", Yc: 0, X: {}, $: [],
                                    Ec: !1, Gb: !0, l: a, nc: c
                                }, B(f, { Ec: !0 }), hg(a, d, f), b = Ic(a), e = sg(a, b, 1E3), d = K(hg, null, a, d, f), e.D(d), tg(a, b))
                            })
                        }), dr = A("phc.h", function (a, c) { return eo(a) || dk(a) ? null : ma(a, c, function (b) { if (!n(b, "settings.phchange")) { var d = pc(a, "").o("yaHidePhones"); d = d ? Ab(a, d) : ""; (b = n(b, "settings.phhide") || d) && og(a, c, b) } }) }), er = A("up.int", function (a, c) { return y(a, "up.c", function (b, d, e) { var f, g = ua(a, c), h = Oe(a, O(c)).warn; g ? qb(b) ? (b = (f = {}, f.__ymu = b, f), (f = g.params) && f(b, d || C, e)) : h("Wrong user params") : h("No counter instance found") }) }),
                    fr = A("trigger.in", function (a, c) { c.cd && bc(a, D([a, "yacounter" + c.id + "inited"], Vn), "t.i") }), gr = A("destruct.e", function (a, c, b) { return function () { var d = L(a), e = c.id; F(function (f, g) { return S(f) && y(a, "dest.fr." + g, f)() }, b); delete d.o("counters")[O(c)]; delete a["yaCounter" + e] } }), hr = A("fip", function (a, c) { if (!Cj(a) || Uc(a)) { var b = Ka(a); if (!b.o("fip")) { var d = r(Za(r(function (e, f) { return A("fip." + f, e)(a) }, K(vo, null))), Oc("-"))(c); b.C("fip", d) } } }), ir = v("9-d5ve+.r%7", M), jr = A("ad", function (a, c) {
                        if (!c.ua) {
                            var b = L(a);
                            if (!b.o("adBlockEnabled")) { var d = function (m) { I(m, ["2", "1"]) && b.C("adBlockEnabled", m) }, e = dc(a), f = e.o("isad"); if (f) d(f); else { var g = v("adStatus", b.C), h = function (m) { m = m ? "1" : "2"; d(m); g("complete"); e.C("isad", m, 1200); return m }, k = la(a, "adb", c); if (!b.o("adStatus")) { g("process"); var l = "metrika/a" + ir().replace(/[^a-v]+/g, "") + "t.gif"; Ek(a, function () { return k({}, l).then(v(!1, h))["catch"](v(!0, h)) }) } } }
                        }
                    }), kr = A("suid.int", function (a, c) {
                        return function (b, d, e) {
                            var f = ua(a, c), g = gd(a, O(c)); Ha(b) || sd(a, b) ? (b = qc(["__ym",
                                "user_id", b]), f.params(b, d || C, e)) : g.error("Incorrect user ID")
                        }
                    }), lr = A("guid.int", function (a, c) { return function (b) { var d = re(a, c); b && Ne(a, b, null, d); return d } }), mr = ca(function (a, c) { 0 === parseFloat(n(c, "settings.c_recp")) && (a.Sb.C("ymoo" + a.ia, a.ad(Ya)), a.Eb && a.Eb.destruct && a.Eb.destruct()) }), nr = A("wsa", function (a, c) { var b = { ia: O(c), Eb: ua(a, c), ad: W(a), Sb: Ka(a) }, d = b.ad(Ya); if (b.Sb.Mb) return !1; var e = b.Sb.o("ymoo" + b.ia); if (e && 30 > d - e) return !0; ma(a, c, mr(b))["catch"](y(a, "d.f")); return !1 }), or = r(function (a) {
                        a =
                        n(a, "navigator.plugins") || []; return wa(a) ? r(Aa, nc(Boolean), To(function (c, b) { return c.name > b.name ? 1 : 2 }), Za(im))(a) : ""
                    }, Oc(",")), pr = function (a) { return function (c) { var b = eb(c); if (!b) return ""; b = b("canvas"); var d = [], e = a(), f = e.Kd; e = e.Ed; try { var g = ka("getContext", b); d = z(r(M, g), e) } catch (h) { return "" } return (g = Cb(M, d)) ? f(c, { canvas: b, xd: g }) : "" } }(function () { return { Ed: jq, Kd: zk } }), sk = ["name", "lang", "localService", "voiceURI", "default"], nk = t(function (a, c) { return ma(a, c, R("settings.form_goals")) }, kb), qr = v(!0, dg), rr =
                        A("s.f.i", function (a, c) { var b = []; ha(a).D(a, ["click"], y(a, "s.f.c", D([a, c, b], mk))); ha(a).D(a, ["submit"], y(a, "s.f.e", r(R("target"), D([a, c, b], qr)))); fg(a, c, "Form goal. Counter " + c.id + ". Init.") }), sr = /[\*\.\?\(\)]/g, tr = t(function (a, c, b) { try { var d = b.replace("\\s", " ").replace(sr, ""); Oe(a, "").warn('Function "' + d + '" has been overriden, this may cause issues with Metrika counter') } catch (e) { } }, kb), ur = A("r.nn", function (a) { uh(a).isEnabled && hf(a, vf, function (c) { c.pb.D(function (b) { tr(a, b[1], b[0]); vf.splice(100) }) }) }),
                    vr = A("lt.p", Vb("lt.p", function (a) { var c; if (Ba("PerformanceObserver", a.PerformanceObserver)) { var b = 0, d = new a.PerformanceObserver(y(a, "lt.o", function (e) { e && e.getEntries && (e = e.getEntries(), b = N(function (f, g) { return f + g.duration }, b, e), Wb(a).C("lt", b)) })); try { d.observe((c = {}, c.type = "longtask", c.buffered = !0, c)) } catch (e) { return C } return function () { return d.disconnect() } } return C })); "function" == typeof Promise && Promise.resolve(); var ek = t(function (a) {
                        return n(a, "crypto.subtle.digest") && n(a, "TextEncoder") && n(a,
                            "FileReader") && n(a, "Blob")
                    }), wr = A("fpm", function (a, c) { if (!uj(a)) return C; var b = O(c); if (!ek(a)) return sb(a, b, "Not supported"), C; var d = ua(a, c); return d ? function (e) { return (new G(function (f, g) { return qb(e) ? ea(e).length ? f(Zf(a, e).then(function (h) { var k, l; h && h.length && d.params((k = {}, k.__ym = (l = {}, l.fpp = h, l), k)) }, C)) : g(Va("fpm.l")) : g(Va("fpm.o")) }))["catch"](y(a, "fpm.en")) } : C }), xr = A("p.sci", function (a, c) {
                        var b = L(a); return b.o("scip") ? G.resolve() : ma(a, c, M).then(function (d) {
                            d = n(d, "settings.ins"); return !b.o("scip") &&
                                d ? Xf(a, c, b) : null
                        }, y(a, "ins.cs"))
                    }), yr = Da(/[a-z\u0430-\u044f,.]/gi), zr = A("ice", function (a, c, b) {
                        var d = ua(a, c); if (d) {
                            var e = n(b, "target"); if (e && (c = n(e, "value"), (c = db(c)) && !(100 <= wa(c)))) {
                                b = yb(c); var f = 0 < c.indexOf("@"), g = "tel" === n(e, "type") || !f && wa(b); if (f || g) {
                                    if (g) { if (yr(c)) return; g = c[0]; var h = b[0]; if (g !== h && "+" !== g) return; var k = c[1]; if ("+" === g && k !== h) return; c = c[wa(c) - 1]; g = b[wa(b) - 1]; if (c !== g) return; c = b } b = f ? 5 : 11; g = f ? 100 : 16; wa(c) < b || wa(c) > g || $f(a, c).then(function (l) {
                                        var m, q, p, u = mf(a, e); d.params((m = {},
                                            m.__ym = (q = {}, q.fi = Sh((p = {}, p.a = f ? 1 : 0, p.b = u, p.c = l, p)).na(), q), m))
                                    }, y(a, "ice.s"))
                                }
                            }
                        }
                    }), Ar = ["text", "email", "tel"], Br = ["cc-", "name", "shipping"], Cr = A("icei", function (a, c) { return Yc(a) && ek(a) && nd(a)(Bb(C, D([a, c, function (b) { var d = n(b, "settings.cf"); b = Pj(a) || n(b, "settings.eu"); if (d && !b) { var e = ha(a); d = jb("input", a.document.body); F(function (f) { Je(a, f) || !I(f.type, Ar) || Ma(M, z(v(f.autocomplete, mc), Br)) || e.D(f, ["blur"], D([a, c], zr)) }, Aa(d)) } }], ma))) }), Dr = Vb("gic", Cr), lc = L(window); lc.oa("hitParam", {}); lc.oa("lastReferrer",
                        window.location.href); lc.oa("getCounters", $p(window)); Re.push(Vq); (function () { var a, c, b = Db([Tb]); B(ja, (a = {}, a.s = b, a.S = b, a.u = yc, a)); B(qa, (c = {}, c.s = pb, c.S = Qa, c.u = pb, c)); U("s"); U("u"); U("S", Pb(["v", "hid", "u", "vf", "rn"]), 1); kc.push(A("s", Ll)) })(); qa["8"] = pb; ja["8"] = [mi]; kc.push(function (a, c) { return ma(a, c, function (b) { var d, e = n(b, "settings.sbp"); return e && jh(a, b, { sa: c, rb: "8", data: B({}, e, (d = {}, d.c = c.id, d)), Pb: "cs" }) }) }); U("p", Pb(Qj), 1); U("p", Ld(), 100); qa.p = We; ja.p = Db([0, Tb]); Qf.push(uq); U("4", Pb(Qj), 1);
            qa["4"] = We; ja["4"] = Db([0, Tb, Xc]); Qf.push(Cq); kc.push(Dq); id.push(["ecommerceAdd", Eq]); id.push(["ecommerceRemove", Fq]); id.push(["ecommerceDetail", Gq]); id.push(["ecommercePurchase", Hq]); kc.push(Jq); kc.push(Rq); ja["6"] = Db([0, Tb]); qa["6"] = function (a, c, b) { var d = pb(a, c); return function (e) { return $e(a, b, e, !0).then(D([e, ["https://mc.yandex.md/cc"], { zb: !0, hd: !1 }], d)) } }; U("6", Vc, 1); kc.push(Sq); xb(rc, 20); U("f", rc, 20); U("n", rc, 20); U("1", rc, 20); U("d", rc, 20); U("5", rc, 20); var fk = function () {
                return function (a, c, b,
                    d) {
                        var e = this; return y(window, "c.i", function () {
                            (!window || isNaN(a) && !a) && zi(); var f = window, g = bo(a, qj, c, b, d); if (!window["disableYaCounter" + g.id]) {
                                var h = O(g); g.id || sb(f, h, "Invalid Metrika id: " + g.id); var k = lc.o("counters", {}), l = [], m = [fj, be, ej]; m.unshift(Ao); var q = function (P, ba) { P && (S(P) ? l.push(P) : ba && l.push(P[ba])) }, p = function (P, ba) { var ia = be(f, g, "", P)(f, g); ia && (S(ia.then) ? ia.then(function (mb) { return q(mb, ba) }) : q(ia, ba)); return ia }, u = r(M, p), x = z(M, Qf), w = function (P, ba, ia) { e[ba] = Po(f, g, ia || m, ba, P) }; if (k[h]) return sb(f,
                                    h, "Duplicate counter " + h + " initialization"), k[h]; k[h] = e; lc.C("counters", k); lc.oa("counter", e); var J = aq(window, g); l.push(J); Pj(window); nr(window, g) && delete k[h]; p(jr); hr(f, [pr, or, Dk, pm, tk, gm, iq, lm, qk, ok, vk]); x.push(Gp); x.push(xr); p(Yp); x.push(Fk); x.push(Dr); p(cr); p(dr); w(Zp(f, g), "hit"); w(Xq(f, g), "params"); h = p(bq, fb({ unsubscribe: 1 })); e.trackHash = be(f, g, "", n(h, fb({ Fe: 1 }))); w(ld(f, g), "reachGoal"); w(Yq(f, g), "experiments"); p(fr); h = p(eq, fb({ Fb: 1 })); w(n(h, fb({ ie: 1 })), "notBounce"); k = p(wr); w(k, "firstPartyParams");
                                w(D([f, g], jk), "firstPartyParamsHashed"); w(n(h, fb({ Ua: 1 })), "accurateTrackBounce"); p(Zq); h = p(hq, fb({ Fb: 1 })); w(n(h, fb({ Jd: 1 })), "extLink"); w(n(h, fb({ ud: 1 })), "addFileExtension"); w(n(h, fb({ file: 1 })), "file"); w(n(h, fb({ vb: 1 })), "trackLinks"); l.push($q(f)); h = p(er); w(h || C, "userParams"); w(gr(f, g, l), "destruct", [fj, ej]); p(zp); h = p(kr); w(h || C, "setUserID"); e.getClientID = p(lr) || C; p(kq); w(nq(f, g), "clickmap"); p(mq); w(oq(f, g), "enableAll"); p(rr); p(Uq); p(pq); p(vr); x.push(br); (p = p(qq)) && p.then(ka("push", l)); bc(f, D([f, x,
                                    u, 1, "a.i"], rn)); ur(f); F(function (P) { var ba = P[0]; w((0, P[1])(f, g), ba) }, id); F(u, kc)
                            }
                        })()
                }
            }(); (function (a) { var c = L(a); c.o("i") || (c.C("i", !0), ha(a).D(a, ["message"], v(a, Lk))) })(window); if (window.Ya && fk) { var gk = ta.Cb; window.Ya[gk] = fk; fq(window); var hk = window.Ya[gk]; hk.informer = em(window); hk.counters = lc.o("getCounters") }
        })()
    } catch (Xf) { };
}).call(this)
