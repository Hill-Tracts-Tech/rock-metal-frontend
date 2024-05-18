(this.webpackJsonpnew = this.webpackJsonpnew || []).push([
  [0],
  {
    165: function (e, n, t) {},
    175: function (e, n, t) {
      "use strict";
      t.r(n);
      var i,
        r,
        c = t(1),
        o = t.n(c),
        a = t(53),
        s = t.n(a),
        d = t(3),
        l = t(6),
        b = t(11),
        j = t.n(b),
        p = t(14),
        u = t(5),
        x = t(192),
        h = t(193),
        g = t(2),
        O = function (e) {
          return Object(g.a)(
            i ||
              (i = Object(d.a)([
                "\n    @media only screen and (max-width: 768px) {\n      ",
                "\n    }\n  ",
              ])),
            e
          );
        },
        f = function (e) {
          return Object(g.a)(
            r ||
              (r = Object(d.a)([
                "\n    @media only screen and (max-width: 1124px) {\n      ",
                "\n    }\n  ",
              ])),
            e
          );
        },
        m = t(16),
        v = t(28),
        y = t.n(v),
        A = "https://api.rockmetaltshirt.com/api/",
        w = y.a.create({ baseURL: A }),
        k = y.a.create({ baseURL: A });
      k.interceptors.request.use(
        function (e) {
          var n = localStorage.getItem("token");
          return n && (e.headers.token = "Bearer ".concat(n)), e;
        },
        function (e) {
          return Promise.reject(e);
        }
      );
      var C,
        S,
        B,
        I,
        E,
        R,
        z,
        L,
        U,
        Q,
        T,
        F,
        D,
        N,
        Y,
        q,
        H,
        M,
        J,
        P,
        X,
        W,
        V,
        G,
        K,
        Z,
        _,
        $,
        ee,
        ne,
        te,
        ie,
        re,
        ce,
        oe,
        ae,
        se,
        de,
        le,
        be,
        je,
        pe,
        ue,
        xe,
        he,
        ge,
        Oe,
        fe,
        me,
        ve,
        ye,
        Ae,
        we,
        ke,
        Ce,
        Se,
        Be,
        Ie,
        Ee,
        Re,
        ze,
        Le,
        Ue,
        Qe,
        Te,
        Fe = t(46),
        De = Object(Fe.b)({
          name: "cart",
          initialState: {
            products: [],
            favorite: [],
            favQuantity: 0,
            quantity: 0,
            deliveryCharge: 120,
            total: 0,
            email: null,
          },
          reducers: {
            addProduct: function (e, n) {
              var t = e.products.findIndex(function (e) {
                return e._id === n.payload._id;
              });
              -1 !== t
                ? (e.products[t].quantity += n.payload.quantity)
                : e.products.push(
                    Object(l.a)(
                      Object(l.a)({}, n.payload),
                      {},
                      { quantity: n.payload.quantity }
                    )
                  ),
                (e.quantity += n.payload.quantity),
                (e.total += n.payload.price * n.payload.quantity),
                (e.email = n.payload.email);
            },
            clearCart: function (e) {
              (e.quantity = null), (e.products = []), (e.total = null);
            },
            updateProductQuantity: function (e, n) {
              var t = n.payload,
                i = t.productId,
                r = t.quantity,
                c = e.products.find(function (e) {
                  return e._id === i;
                });
              if (c) {
                var o = c.quantity + r;
                o >= 1 &&
                  ((c.quantity = o),
                  (e.total += r * c.price),
                  (e.quantity += r));
              }
            },
            addFavorite: function (e, n) {
              e.favorite || (e.favorite = []);
              var t = e.favorite.findIndex(function (e) {
                return e._id === n.payload._id;
              });
              -1 !== t
                ? (e.favorite[t].favQuantity += 1)
                : e.favorite.push(
                    Object(l.a)(
                      Object(l.a)({}, n.payload),
                      {},
                      { favQuantity: 1 }
                    )
                  ),
                (e.favQuantity += 1);
            },
            clearFavorite: function (e) {
              (e.favQuantity = null), (e.favorite = []);
            },
            updateFavQuantity: function (e, n) {
              var t = n.payload,
                i = t.productId,
                r = t.quantity,
                c = e.favorite.find(function (e) {
                  return e._id === i;
                });
              if (c) {
                var o = c.favQuantity + r;
                o >= 1 && ((c.favQuantity = o), (e.favQuantity += r));
              }
            },
            removeFromCart: function (e, n) {
              var t = e.products.find(function (e) {
                return e._id === n.payload._id;
              });
              t &&
                ((e.products = e.products.filter(function (e) {
                  return e._id !== n.payload._id;
                })),
                (e.quantity -= t.quantity),
                (e.total -= t.price * t.quantity));
            },
            removeFromWishList: function (e, n) {
              var t = e.favorite.find(function (e) {
                return e._id === n.payload._id;
              });
              t &&
                ((e.favorite = e.favorite.filter(function (e) {
                  return e._id !== n.payload._id;
                })),
                (e.favQuantity -= t.favQuantity));
            },
            clear: function (e) {
              (e.products = []),
                (e.favorite = []),
                (e.favQuantity = null),
                (e.quantity = null),
                (e.total = null),
                (e.email = null);
            },
            deliveryCharge: function (e, n) {
              e.deliveryCharge = n.payload;
            },
          },
        }),
        Ne = De.actions,
        Ye = Ne.addProduct,
        qe = Ne.clearCart,
        He = Ne.updateProductQuantity,
        Me = Ne.addFavorite,
        Je = Ne.clearFavorite,
        Pe = Ne.updateFavQuantity,
        Xe = Ne.removeFromCart,
        We = Ne.removeFromWishList,
        Ve = Ne.clear,
        Ge = Ne.deliveryCharge,
        Ke = De.reducer,
        Ze = t(9),
        _e = t(18),
        $e = t.n(_e),
        en = t(23),
        nn = t(10),
        tn = t(13),
        rn = (t(52), t(189)),
        cn = t(190),
        on = t(191),
        an = t(22),
        sn = t(0),
        dn = function (e) {
          var n = e.category,
            t = e.productId,
            i = Object(c.useState)([]),
            r = Object(u.a)(i, 2),
            o = r[0],
            a = r[1],
            s = Object(c.useState)(!1),
            d = Object(u.a)(s, 2),
            b = d[0],
            x = d[1],
            h = Object(an.useHistory)(),
            g = Object(Ze.b)(),
            O = Object(Ze.c)(function (e) {
              return e.user.currentUser;
            });
          Object(c.useEffect)(
            function () {
              x(!0),
                (function () {
                  var e = Object(p.a)(
                    j.a.mark(function e() {
                      var t;
                      return j.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (((e.prev = 0), !n)) {
                                  e.next = 7;
                                  break;
                                }
                                return (
                                  (e.next = 4),
                                  y.a.get(
                                    "https://api.rockmetaltshirt.com/api/products?category=".concat(
                                      n[0]
                                    )
                                  )
                                );
                              case 4:
                                (t = e.sent), a(t.data.data), x(!1);
                              case 7:
                                e.next = 13;
                                break;
                              case 9:
                                (e.prev = 9),
                                  (e.t0 = e.catch(0)),
                                  console.log(e.t0),
                                  x(!1);
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 9]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()();
            },
            [n, a]
          ),
            console.log(o);
          var f = o.filter(function (e) {
            return e._id !== t;
          });
          return Object(sn.jsx)(ln, {
            children:
              f.length > 0 &&
              Object(sn.jsxs)(sn.Fragment, {
                children: [
                  Object(sn.jsx)(pn, { children: "You may choice that also" }),
                  b
                    ? Object(sn.jsx)("div", {
                        style: {
                          display: "flex",
                          gap: "12px",
                          flexWrap: "wrap",
                          width: "90%",
                          margin: "0 auto",
                        },
                        children: Object(en.a)(Array(8)).map(function (e, n) {
                          return Object(sn.jsxs)(
                            "div",
                            {
                              children: [
                                Object(sn.jsx)(tn.a, {
                                  width: 280,
                                  height: 200,
                                }),
                                Object(sn.jsx)(tn.a, {
                                  width: 200,
                                  height: 20,
                                }),
                                Object(sn.jsx)(tn.a, {
                                  width: 160,
                                  height: 20,
                                }),
                              ],
                            },
                            n
                          );
                        }),
                      })
                    : Object(sn.jsx)(bn, {
                        children: f.map(function (e) {
                          return Object(sn.jsxs)(mn, {
                            children: [
                              Object(sn.jsx)(vn, {
                                children: Object(sn.jsx)("img", {
                                  style: {
                                    borderRadius: "5px",
                                    width: "100%",
                                    height: "100%",
                                  },
                                  src: e.img,
                                  alt: e.img,
                                }),
                              }),
                              Object(sn.jsx)(nn.b, {
                                to: "/product/".concat(e._id),
                                style: { color: "black" },
                                children: Object(sn.jsx)(jn, {
                                  children:
                                    null === e || void 0 === e
                                      ? void 0
                                      : e.title,
                                }),
                              }),
                              Object(sn.jsxs)(un, {
                                children: [
                                  "Price : \u09f3 ",
                                  null === e || void 0 === e ? void 0 : e.price,
                                ],
                              }),
                              Object(sn.jsx)(xn, {
                                children:
                                  null === e || void 0 === e
                                    ? void 0
                                    : e.color.map(function (e) {
                                        return Object(sn.jsx)(hn, {
                                          style: {
                                            width: "25px",
                                            height: "25px",
                                            borderRadius: "50%",
                                            backgroundColor: e.toLowerCase(),
                                          },
                                        });
                                      }),
                              }),
                              Object(sn.jsx)(gn, {
                                children:
                                  null === e || void 0 === e
                                    ? void 0
                                    : e.size.map(function (e) {
                                        return Object(sn.jsx)(On, {
                                          children: e,
                                        });
                                      }),
                              }),
                              Object(sn.jsxs)(fn, {
                                children: [
                                  Object(sn.jsx)(rn.a, {
                                    style: { cursor: "pointer", color: "teal" },
                                    onClick: function () {
                                      return (function (e) {
                                        var n =
                                            null === o || void 0 === o
                                              ? void 0
                                              : o.find(function (n) {
                                                  return n._id === e;
                                                }),
                                          t = Object(l.a)(
                                            Object(l.a)({}, n),
                                            {},
                                            {
                                              quantity: 1,
                                              color:
                                                null === n || void 0 === n
                                                  ? void 0
                                                  : n.color[0],
                                              size:
                                                null === n || void 0 === n
                                                  ? void 0
                                                  : n.size[0],
                                              email:
                                                null === O || void 0 === O
                                                  ? void 0
                                                  : O.email,
                                            }
                                          );
                                        if (O)
                                          try {
                                            g(Ye(t)),
                                              _e.toast.success(
                                                "Added to cart successfully"
                                              );
                                          } catch (i) {
                                            console.log(i),
                                              _e.toast.error(
                                                "Something went wrong! May be occurred ",
                                                i
                                              );
                                          }
                                        else
                                          h.push({
                                            pathname: "/login",
                                            state: {
                                              from: h.location,
                                              autoAddToCart: !0,
                                              item: t,
                                            },
                                          });
                                      })(e._id);
                                    },
                                  }),
                                  Object(sn.jsx)(nn.b, {
                                    to: "/product/".concat(e._id),
                                    style: { cursor: "pointer", color: "teal" },
                                    children: Object(sn.jsx)(cn.a, {}),
                                  }),
                                  Object(sn.jsx)(on.a, {
                                    onClick: function () {
                                      return (function (e) {
                                        var n =
                                            null === o || void 0 === o
                                              ? void 0
                                              : o.find(function (n) {
                                                  return n._id === e;
                                                }),
                                          t = Object(l.a)(
                                            Object(l.a)({}, n),
                                            {},
                                            {
                                              quantity: 1,
                                              color:
                                                null === n || void 0 === n
                                                  ? void 0
                                                  : n.color[0],
                                              size:
                                                null === n || void 0 === n
                                                  ? void 0
                                                  : n.size[0],
                                            }
                                          );
                                        if (O)
                                          try {
                                            g(Me(t)),
                                              _e.toast.success(
                                                "Added to favorite successfully"
                                              );
                                          } catch (i) {
                                            console.log(i),
                                              _e.toast.error(
                                                "Something went wrong! May be occurred ",
                                                i
                                              );
                                          }
                                        else
                                          h.push({
                                            pathname: "/login",
                                            state: {
                                              from: h.location,
                                              item: t,
                                            },
                                          });
                                      })(e._id);
                                    },
                                    style: { cursor: "pointer", color: "teal" },
                                  }),
                                ],
                              }),
                            ],
                          });
                        }),
                      }),
                ],
              }),
          });
        },
        ln = g.b.div(
          C || (C = Object(d.a)(["\n  width: 90%;\n  margin: auto;\n"]))
        ),
        bn = g.b.div(
          S ||
            (S = Object(d.a)([
              "\n  margin: 5px;\n  min-width: 280px;\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 10px;\n  ",
              "\n",
            ])),
          O({ justifyContent: "center", width: "100%", marginLeft: "-10px" })
        ),
        jn = g.b.div(
          B ||
            (B = Object(d.a)([
              "\n  text-align: center;\n  margin: 10px 0px;\n  font-weight: 500;\n",
            ]))
        ),
        pn = g.b.h1(
          I ||
            (I = Object(d.a)([
              "\n  font-size: 36px;\n  font-weight: bold;\n  padding: 50px 0px;\n  text-transform: uppercase;\n  text-align: center;\n  background: -webkit-linear-gradient(#07ffa8, #ff5607);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  ",
              ";\n",
            ])),
          O({ fontSize: "20px", padding: "12px 0px" })
        ),
        un = g.b.div(
          E ||
            (E = Object(d.a)([
              "\n  font-size: 16px;\n  text-align: center;\n  color: #3183ff;\n",
            ]))
        ),
        xn = g.b.div(
          R ||
            (R = Object(d.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  margin: 15px 0;\n",
            ]))
        ),
        hn = g.b.div(z || (z = Object(d.a)(["\n  border: 1px solid gray;\n"]))),
        gn = g.b.div(
          L ||
            (L = Object(d.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n",
            ]))
        ),
        On = g.b.div(
          U ||
            (U = Object(d.a)([
              "\n  background-color: teal;\n  text-align: center;\n  font-size: 14px;\n  color: white;\n  padding: 5px;\n  height: 25px;\n  width: 25px;\n  font-weight: bold;\n  padding-top: 10px;\n  border-radius: 25px;\n",
            ]))
        ),
        fn = g.b.div(
          Q ||
            (Q = Object(d.a)([
              "\n  display: flex;\n  gap: 30px;\n  padding: 15px 0;\n  justify-content: center;\n",
            ]))
        ),
        mn = g.b.div(
          T ||
            (T = Object(d.a)([
              "\n  padding: 10px;\n  a {\n    text-decoration: none;\n  }\n",
            ]))
        ),
        vn = g.b.div(
          F ||
            (F = Object(d.a)([
              "\n  width: 280px;\n  height: 280px;\n  mix-blend-mode: darken;\n  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,\n    rgba(17, 17, 26, 0.1) 0px 0px 8px;\n  border-radius: 5px;\n",
            ]))
        ),
        yn = function () {
          var e,
            n,
            t = Object(m.useLocation)().pathname.split("/")[2],
            i = Object(c.useState)({}),
            r = Object(u.a)(i, 2),
            o = r[0],
            a = r[1],
            s = Object(c.useState)(1),
            d = Object(u.a)(s, 2),
            b = d[0],
            g = d[1],
            O = Object(c.useState)(""),
            f = Object(u.a)(O, 2),
            v = f[0],
            y = f[1],
            A = Object(c.useState)(""),
            k = Object(u.a)(A, 2),
            C = k[0],
            S = k[1],
            B = Object(c.useState)(!0),
            I = Object(u.a)(B, 2),
            E = I[0],
            R = I[1],
            z = Object(Ze.b)(),
            L = Object(Ze.c)(function (e) {
              return e.user.currentUser;
            }),
            U = Object(m.useHistory)();
          Object(c.useEffect)(
            function () {
              (function () {
                var e = Object(p.a)(
                  j.a.mark(function e() {
                    var n;
                    return j.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                w.get("/products/find/" + t)
                              );
                            case 3:
                              (n = e.sent),
                                a(n.data.data),
                                R(!1),
                                (e.next = 12);
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(0)),
                                console.log(e.t0),
                                R(!1);
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 8]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            },
            [t]
          );
          var Q = function (e) {
            "dec" === e ? b > 1 && g(b - 1) : g(b + 1),
              z(He({ productId: o._id, quantity: b }));
          };
          return Object(sn.jsxs)(An, {
            children: [
              Object(sn.jsx)(_e.Toaster, {}),
              E
                ? Object(sn.jsxs)(wn, {
                    children: [
                      Object(sn.jsx)("div", {
                        children: Object(sn.jsx)(tn.a, {
                          width: 400,
                          height: 300,
                        }),
                      }),
                      Object(sn.jsxs)("div", {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          gap: "20px",
                        },
                        children: [
                          Object(sn.jsx)(tn.a, { width: 400, height: 30 }),
                          Object(sn.jsx)(tn.a, { width: 400, height: 20 }),
                          Object(sn.jsx)(tn.a, { width: 350, height: 20 }),
                          Object(sn.jsx)(tn.a, { width: 100, height: 40 }),
                          Object(sn.jsx)(tn.a, { width: 180, height: 50 }),
                          Object(sn.jsx)(tn.a, { width: 200, height: 50 }),
                        ],
                      }),
                    ],
                  })
                : Object(sn.jsxs)(kn, {
                    children: [
                      Object(sn.jsx)(Cn, {
                        children: Object(sn.jsx)(Sn, { src: o.img }),
                      }),
                      Object(sn.jsxs)(Bn, {
                        children: [
                          Object(sn.jsx)(In, { children: o.title }),
                          Object(sn.jsx)(En, {
                            children: o.desc
                              ? o.desc
                              : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, ab. Quisquam tempora adipisci vitae saepe",
                          }),
                          Object(sn.jsxs)(Rn, {
                            children: ["\u09f3 ", o.price * b],
                          }),
                          Object(sn.jsxs)(zn, {
                            children: [
                              Object(sn.jsxs)(Ln, {
                                children: [
                                  Object(sn.jsx)(Un, { children: "Color" }),
                                  null === (e = o.color) || void 0 === e
                                    ? void 0
                                    : e.map(function (e) {
                                        return Object(sn.jsx)(
                                          Qn,
                                          {
                                            isSelected: e === v,
                                            color: e,
                                            onClick: function () {
                                              return y(e);
                                            },
                                          },
                                          e
                                        );
                                      }),
                                ],
                              }),
                              Object(sn.jsxs)(Ln, {
                                children: [
                                  Object(sn.jsx)(Un, { children: "Size" }),
                                  Object(sn.jsx)(Tn, {
                                    onChange: function (e) {
                                      return S(e.target.value);
                                    },
                                    children:
                                      null === (n = o.size) || void 0 === n
                                        ? void 0
                                        : n.map(function (e) {
                                            return Object(sn.jsx)(
                                              Fn,
                                              { children: e },
                                              e
                                            );
                                          }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(sn.jsxs)(Dn, {
                            children: [
                              Object(sn.jsxs)(Nn, {
                                children: [
                                  Object(sn.jsx)(Yn, {
                                    children: Object(sn.jsx)(x.a, {
                                      onClick: function () {
                                        return Q("dec");
                                      },
                                    }),
                                  }),
                                  Object(sn.jsx)(qn, { children: b }),
                                  Object(sn.jsx)(Yn, {
                                    children: Object(sn.jsx)(h.a, {
                                      onClick: function () {
                                        return Q("inc");
                                      },
                                    }),
                                  }),
                                ],
                              }),
                              Object(sn.jsx)(Hn, {
                                onClick: function () {
                                  var e = v || (o.color && o.color[0]) || "",
                                    n = C || (o.size && o.size[0]) || "",
                                    t = Object(l.a)(
                                      Object(l.a)({}, o),
                                      {},
                                      { quantity: b, color: e, size: n }
                                    );
                                  if (L)
                                    try {
                                      z(Ye(t)),
                                        _e.toast.success(
                                          "Added to cart successfully!"
                                        );
                                    } catch (i) {
                                      _e.toast.error(
                                        "Something went wrong! May be occurred ",
                                        i
                                      );
                                    }
                                  else
                                    U.push({
                                      pathname: "/login",
                                      state: {
                                        from: U.location,
                                        autoAddToCart: !0,
                                        item: t,
                                      },
                                    });
                                },
                                children: "ADD TO CART",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
              Object(sn.jsx)(dn, { category: o.categories, productId: o._id }),
            ],
          });
        },
        An = g.b.div(D || (D = Object(d.a)([""]))),
        wn = g.b.div(
          N ||
            (N = Object(d.a)([
              "\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 90%;\n  margin: auto;\n  padding: 20px;\n\n  /* Media Query */\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n",
            ]))
        ),
        kn = g.b.div(
          Y ||
            (Y = Object(d.a)([
              "\n  padding: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  ",
              "\n",
            ])),
          O({ padding: "10px", flexDirection: "column" })
        ),
        Cn = g.b.div(
          q ||
            (q = Object(d.a)([
              "\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 300px;\n",
            ]))
        ),
        Sn = g.b.img(
          H ||
            (H = Object(d.a)([
              "\n  width: 100%;\n  height: 300px;\n  object-fit: contain;\n  ",
              "\n",
            ])),
          O({ height: "40vh" })
        ),
        Bn = g.b.div(
          M ||
            (M = Object(d.a)(["\n  flex: 1;\n  padding: 0px 50px;\n  ", "\n"])),
          O({ padding: "10px" })
        ),
        In = g.b.h1(J || (J = Object(d.a)(["\n  font-weight: 200;\n"]))),
        En = g.b.p(P || (P = Object(d.a)(["\n  margin: 20px 0px;\n"]))),
        Rn = g.b.span(
          X ||
            (X = Object(d.a)(["\n  font-weight: 100;\n  font-size: 40px;\n"]))
        ),
        zn = g.b.div(
          W ||
            (W = Object(d.a)([
              "\n  width: 50%;\n  margin: 30px 0px;\n  display: flex;\n  justify-content: space-between;\n  ",
              "\n",
            ])),
          O({ width: "100%" })
        ),
        Ln = g.b.div(
          V ||
            (V = Object(d.a)(["\n  display: flex;\n  align-items: center;\n"]))
        ),
        Un = g.b.span(
          G ||
            (G = Object(d.a)(["\n  font-size: 20px;\n  font-weight: 200;\n"]))
        ),
        Qn = g.b.div(
          K ||
            (K = Object(d.a)([
              "\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: ",
              ";\n  margin: 0px 5px;\n  cursor: pointer;\n  border: ",
              ";\n",
            ])),
          function (e) {
            return e.color;
          },
          function (e) {
            return e.isSelected ? "3px solid teal" : "";
          }
        ),
        Tn = g.b.select(
          Z ||
            (Z = Object(d.a)([
              "\n  font-size: 17px;\n  padding: 6px;\n  margin-left: 9px;\n  border: 1.5px solid teal;\n  border-radius: 4px;\n  background-color: white;\n  cursor: pointer;\n  outline: none;\n  width: 100px;\n",
            ]))
        ),
        Fn = g.b.option(_ || (_ = Object(d.a)(["\n  font-size: 17px;\n"]))),
        Dn = g.b.div(
          $ ||
            ($ = Object(d.a)([
              "\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  ",
              "\n",
            ])),
          O({ width: "100%" })
        ),
        Nn = g.b.div(
          ee ||
            (ee = Object(d.a)([
              "\n  display: flex;\n  align-items: center;\n  font-weight: 700;\n",
            ]))
        ),
        Yn = g.b.div(
          ne ||
            (ne = Object(d.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n  padding: 4px;\n  border: none;\n  border-radius: 100%;\n  /* background-color: #3c3d3e; */\n  color: #3c3d3e;\n  cursor: pointer;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.148), 0 4px 15px rgba(0, 0, 0, 0.116);\n",
            ]))
        ),
        qn = g.b.span(
          te ||
            (te = Object(d.a)([
              "\n  width: 30px;\n  height: 30px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0px 5px;\n",
            ]))
        ),
        Hn = g.b.button(
          ie ||
            (ie = Object(d.a)([
              "\n  border: 1.5px solid teal;\n  font-size: 16px;\n  background-color: teal;\n  border-radius: 12px;\n  padding: 10px 20px;\n  color: #fff;\n  cursor: pointer;\n  transition: ease 0.3s;\n  &:hover {\n    background-color: #fff;\n    color: teal;\n  }\n",
            ]))
        ),
        Mn = t.p + "static/media/hoodie.4956d0df.jpg",
        Jn = t.p + "static/media/shirt.db02c889.jpg",
        Pn = [
          {
            id: 1,
            img: "https://img.freepik.com/free-photo/blank-black-t-shirt-hanger-isolated-white-space_74952-876.jpg?w=1060&t=st=1691822178~exp=1691822778~hmac=5907c77e72d5f40549b01dde3f81119afcf205352fa98ff156a36e72f85a4213",
            title: "SUMMER SALE",
            desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
            bg: "f5fafd",
          },
          {
            id: 2,
            img: "https://i.ibb.co/7S5qjLr/29834299-men-s-black-polo-shirt-mockup-in-different-view-removebg-preview.png",
            title: "AUTUMN COLLECTION",
            desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
            bg: "fcf1ed",
          },
          {
            id: 3,
            img: "https://i.ibb.co/6Z4dbn6/7979501-2029-removebg-preview.png",
            title: "LOUNGEWEAR LOVE",
            desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
            bg: "fbf0f4",
          },
        ],
        Xn = [
          { id: 1, img: Jn, title: "SHIRT STYLE!", cat: "shirt" },
          { id: 2, img: Mn, title: "CUSTOMIZED HOODIE", cat: "hoodie" },
          {
            id: 3,
            img: "https://images.pexels.com/photos/4066292/pexels-photo-4066292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "SPECIAL COTTON",
            cat: "cotton",
          },
        ],
        Wn = [
          "Dhaka",
          "Faridpur",
          "Gazipur",
          "Gopalganj",
          "Jamalpur",
          "Kishoreganj",
          "Madaripur",
          "Manikganj",
          "Munshiganj",
          "Mymensingh",
          "Narayanganj",
          "Narsingdi",
          "Netrokona",
          "Rajbari",
          "Shariatpur",
          "Sherpur",
          "Tangail",
          "Bogra ",
          "Joypurhat",
          "Naogaon ",
          "Nawabganj",
          "Pabna",
          "Rajshahi",
          "Sirajgonj",
          "Dinajpur",
          "Gaibandha",
          "Kurigram",
          "Lalmonirhat",
          "Nilphamari",
          "Panchagarh",
          "Rangpur",
          "Thakurgaon",
          "Barguna",
          "Barisal",
          "Bhola",
          "Jhalokati",
          "Patuakhali",
          "Pirojpur",
          "Bandarban",
          "Brahmanbaria",
          "Chandpur",
          "Chittagong",
          "Comilla",
          "Cox's Bazar",
          "Feni",
          "Khagrachari",
          "Lakshmipur",
          "Noakhali",
          "Rangamati",
          "Habiganj",
          "Maulvibazar",
          "Sunamganj",
          "Sylhet",
          "Bagerhat",
          "Chuadanga",
          "Jessore",
          "Jhenaidah ",
          "Khulna",
          "Kushtia",
          "Magura ",
          "Meherpur",
          "Narail",
          "Satkhira",
        ],
        Vn = function (e) {
          var n = e.item;
          return Object(sn.jsx)(Gn, {
            children: Object(sn.jsxs)(nn.b, {
              to: "/products/".concat(n.cat),
              children: [
                Object(sn.jsx)(Kn, { src: n.img }),
                Object(sn.jsxs)(Zn, {
                  children: [
                    Object(sn.jsx)(_n, { children: n.title }),
                    Object(sn.jsx)($n, { children: "SHOP NOW" }),
                  ],
                }),
              ],
            }),
          });
        },
        Gn = g.b.div(
          re ||
            (re = Object(d.a)([
              "\n  flex: 1;\n  margin: 3px;\n  height: 70vh;\n  position: relative;\n",
            ]))
        ),
        Kn = g.b.img(
          ce ||
            (ce = Object(d.a)([
              "\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  ",
              "\n",
            ])),
          O({ height: "20vh" })
        ),
        Zn = g.b.div(
          oe ||
            (oe = Object(d.a)([
              "\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n",
            ]))
        ),
        _n = g.b.h1(
          ae ||
            (ae = Object(d.a)(["\n  color: white;\n  margin-bottom: 20px;\n"]))
        ),
        $n = g.b.button(
          se ||
            (se = Object(d.a)([
              "\n  cursor: pointer;\n  font-weight: 600;\n  padding: 10px;\n  background-color: teal;\n  color: white;\n  font-weight: 600;\n  border-radius: 12px;\n  border: 1.5px solid teal;\n  transition: ease 0.5s;\n  &:hover {\n    background-color: white;\n    color: teal;\n  }\n",
            ]))
        ),
        et = function () {
          return Object(sn.jsxs)(nt, {
            children: [
              Object(sn.jsx)(it, { children: "Categories" }),
              Object(sn.jsx)(tt, {
                children: Xn.map(function (e) {
                  return Object(sn.jsx)(Vn, { item: e }, e.id);
                }),
              }),
            ],
          });
        },
        nt = g.b.div(
          de ||
            (de = Object(d.a)([
              "\n  width: 90%;\n  margin: 50px auto;\n  padding: 20px;\n",
            ]))
        ),
        tt = g.b.div(
          le ||
            (le = Object(d.a)([
              "\n  display: flex;\n\n  justify-content: space-between;\n  ",
              "\n",
            ])),
          O({ padding: "0px", flexDirection: "column" })
        ),
        it = g.b.h2(
          be ||
            (be = Object(d.a)([
              "\n  font-size: 36px;\n  font-weight: bold;\n  padding: 50px 0px 20px 0px;\n  text-transform: uppercase;\n  color: teal;\n  ",
              "\n",
            ])),
          O({ fontSize: "20px", padding: "12px 0px 5px 0px" })
        ),
        rt = t(45),
        ct = t(17),
        ot = t.n(ct),
        at = function (e) {
          var n = e.item,
            t = Object(Ze.c)(function (e) {
              return e.user.currentUser;
            }),
            i = Object(rt.useHistory)(),
            r = Object(Ze.b)();
          return Object(sn.jsxs)(dt, {
            children: [
              Object(sn.jsx)(gt, { src: n.img, alt: "" }),
              Object(sn.jsxs)(ht, {
                children: [
                  Object(sn.jsx)(nn.b, {
                    to: "/product/".concat(n._id),
                    style: { color: "black" },
                    children: Object(sn.jsx)(st, {
                      children: null === n || void 0 === n ? void 0 : n.title,
                    }),
                  }),
                  Object(sn.jsxs)(lt, {
                    children: [
                      "Price : \u09f3 ",
                      null === n || void 0 === n ? void 0 : n.price,
                    ],
                  }),
                  Object(sn.jsx)(bt, {
                    children:
                      null === n || void 0 === n
                        ? void 0
                        : n.color.map(function (e) {
                            return Object(sn.jsx)(jt, {
                              style: {
                                width: "25px",
                                height: "25px",
                                borderRadius: "50%",
                                backgroundColor: e.toLowerCase(),
                              },
                            });
                          }),
                  }),
                  Object(sn.jsx)(pt, {
                    children:
                      null === n || void 0 === n
                        ? void 0
                        : n.size.map(function (e) {
                            return Object(sn.jsx)(ut, { children: e });
                          }),
                  }),
                  Object(sn.jsxs)(xt, {
                    children: [
                      Object(sn.jsx)(rn.a, {
                        style: { cursor: "pointer", color: "teal" },
                        onClick: function () {
                          var e = Object(l.a)(
                            Object(l.a)({}, n),
                            {},
                            {
                              quantity: 1,
                              color:
                                null === n || void 0 === n
                                  ? void 0
                                  : n.color[0],
                              size:
                                null === n || void 0 === n ? void 0 : n.size[0],
                            }
                          );
                          if (t)
                            try {
                              r(Ye(e)),
                                ot.a.fire({
                                  title: "Added to Cart successfully",
                                  icon: "success",
                                  confirmButtonColor: "teal",
                                });
                            } catch (c) {
                              console.error("Error adding to cart:", c),
                                ot.a.fire({
                                  title:
                                    "Something went wrong! May be occurred ,".concat(
                                      c
                                    ),
                                  icon: "warring",
                                  confirmButtonColor: "teal",
                                });
                            }
                          else
                            i.push({
                              pathname: "/login",
                              state: {
                                from: i.location,
                                autoAddToCart: !0,
                                item: e,
                              },
                            });
                        },
                      }),
                      Object(sn.jsx)(nn.b, {
                        to: "/product/".concat(n._id),
                        style: { color: "black" },
                        children: Object(sn.jsx)(cn.a, {
                          style: { cursor: "pointer", color: "teal" },
                        }),
                      }),
                      Object(sn.jsx)(on.a, {
                        onClick: function () {
                          var e = Object(l.a)(
                            Object(l.a)({}, n),
                            {},
                            {
                              quantity: 1,
                              color:
                                null === n || void 0 === n
                                  ? void 0
                                  : n.color[0],
                              size:
                                null === n || void 0 === n ? void 0 : n.size[0],
                            }
                          );
                          if (t)
                            try {
                              r(Me(e)),
                                ot.a.fire({
                                  title: "Added to favorite successfully",
                                  icon: "success",
                                  confirmButtonColor: "teal",
                                });
                            } catch (c) {
                              console.error("Error adding to cart:", c),
                                ot.a.fire({
                                  title:
                                    "Something went wrong! May be occurred ,".concat(
                                      c
                                    ),
                                  icon: "warring",
                                  confirmButtonColor: "teal",
                                });
                            }
                          else
                            i.push({
                              pathname: "/login",
                              state: { from: i.location, item: e },
                            });
                        },
                        style: { cursor: "pointer", color: "teal" },
                      }),
                    ],
                  }),
                ],
              }),
              Object(sn.jsx)(_e.Toaster, {}),
            ],
          });
        },
        st = g.b.h3(
          je ||
            (je = Object(d.a)([
              "\n  font-size: 18px;\n  text-align: center;\n  margin: 10px;\n",
            ]))
        ),
        dt = g.b.div(
          pe ||
            (pe = Object(d.a)([
              "\n  flex: 1;\n  margin: 5px;\n  min-width: 280px;\n  /* height: 350px; */\n  background-color: #f5fbfd;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n",
            ]))
        ),
        lt = g.b.div(
          ue ||
            (ue = Object(d.a)([
              "\n  font-size: 16px;\n  text-align: center;\n  color: #3183ff;\n",
            ]))
        ),
        bt = g.b.div(
          xe ||
            (xe = Object(d.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  margin: 15px 0;\n",
            ]))
        ),
        jt = g.b.div(
          he || (he = Object(d.a)(["\n  border: 1px solid gray;\n"]))
        ),
        pt = g.b.div(
          ge ||
            (ge = Object(d.a)([
              "\n  display: flex;\n  flex-wrap: wrap-reverse;\n  /* grid-template-columns: auto auto auto auto; */\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  width: 80%;\n  margin: 0 auto;\n",
            ]))
        ),
        ut = g.b.div(
          Oe ||
            (Oe = Object(d.a)([
              "\n  background-color: teal;\n  text-align: center;\n  font-size: 14px;\n  color: white;\n  padding: 5px;\n  height: 25px;\n  width: 40px;\n  font-weight: bold;\n  padding-top: 10px;\n  border-radius: 25px;\n",
            ]))
        ),
        xt = g.b.div(
          fe ||
            (fe = Object(d.a)([
              "\n  display: flex;\n  gap: 30px;\n  padding: 15px 0;\n  justify-content: center;\n",
            ]))
        ),
        ht = g.b.div(
          me ||
            (me = Object(d.a)([
              "\n  padding: 10px;\n  a {\n    text-decoration: none;\n  }\n",
            ]))
        ),
        gt = g.b.img(
          ve ||
            (ve = Object(d.a)([
              "\n  height: 200px;\n  width: 260px;\n  z-index: 2;\n  mix-blend-mode: darken;\n",
            ]))
        ),
        Ot = t.p + "static/media/sad.99d87a7a.png",
        ft = function (e) {
          var n = e.cat,
            t = e.filters,
            i = e.sort,
            r = Object(c.useState)(!1),
            o = Object(u.a)(r, 2),
            a = o[0],
            s = o[1],
            d = Object(c.useState)([]),
            l = Object(u.a)(d, 2),
            b = l[0],
            x = l[1],
            h = Object(c.useState)([]),
            g = Object(u.a)(h, 2),
            O = g[0],
            f = g[1];
          return (
            Object(c.useEffect)(
              function () {
                s(!0),
                  (function () {
                    var e = Object(p.a)(
                      j.a.mark(function e() {
                        var t;
                        return j.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    y.a.get(
                                      n
                                        ? "https://api.rockmetaltshirt.com/api/products?category=".concat(
                                            n
                                          )
                                        : "https://api.rockmetaltshirt.com/api/products"
                                    )
                                  );
                                case 3:
                                  (t = e.sent),
                                    x(t.data.data),
                                    s(!1),
                                    (e.next = 11);
                                  break;
                                case 8:
                                  (e.prev = 8), (e.t0 = e.catch(0)), s(!1);
                                case 11:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 8]]
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()();
              },
              [n]
            ),
            Object(c.useEffect)(
              function () {
                n &&
                  f(
                    b.filter(function (e) {
                      return Object.entries(t).every(function (n) {
                        var t = Object(u.a)(n, 2),
                          i = t[0],
                          r = t[1];
                        return e[i].includes(r);
                      });
                    })
                  );
              },
              [b, n, t]
            ),
            Object(c.useEffect)(
              function () {
                f(
                  "newest" === i
                    ? function (e) {
                        return Object(en.a)(e).sort(function (e, n) {
                          return e.createdAt - n.createdAt;
                        });
                      }
                    : "asc" === i
                    ? function (e) {
                        return Object(en.a)(e).sort(function (e, n) {
                          return e.price - n.price;
                        });
                      }
                    : function (e) {
                        return Object(en.a)(e).sort(function (e, n) {
                          return n.price - e.price;
                        });
                      }
                );
              },
              [i]
            ),
            Object(sn.jsxs)(mt, {
              children: [
                Object(sn.jsxs)(At, {
                  children: [
                    Object(sn.jsx)(yt, { children: "Our Regular Products" }),
                    Object(sn.jsx)(rt.Link, {
                      to: "/all-products",
                      children: Object(sn.jsx)(Ct, { children: "View All" }),
                    }),
                  ],
                }),
                a
                  ? Object(sn.jsx)("div", {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "12px",
                      },
                      children: Object(en.a)(Array(8)).map(function (e, n) {
                        return Object(sn.jsxs)(
                          "div",
                          {
                            children: [
                              Object(sn.jsx)(tn.a, { width: 280, height: 200 }),
                              Object(sn.jsx)(tn.a, { width: 200, height: 20 }),
                              Object(sn.jsx)(tn.a, { width: 160, height: 20 }),
                            ],
                          },
                          n
                        );
                      }),
                    })
                  : Object(sn.jsx)(vt, {
                      children: n
                        ? O.length > 0
                          ? O.map(function (e) {
                              return Object(sn.jsx)(at, { item: e }, e.id);
                            })
                          : Object(sn.jsxs)(wt, {
                              children: [
                                Object(sn.jsx)(kt, {
                                  src: Ot,
                                  alt: "EmptyProduct",
                                }),
                                Object(sn.jsx)("p", {
                                  style: { marginBottom: "10px" },
                                  children:
                                    "Sorry, We cannot find any matched product.",
                                }),
                              ],
                            })
                        : b.length > 0
                        ? b.map(function (e) {
                            return Object(sn.jsx)(at, { item: e }, e.id);
                          })
                        : Object(sn.jsx)(wt, {
                            children: "No products available.",
                          }),
                    }),
              ],
            })
          );
        },
        mt = g.b.div(
          ye ||
            (ye = Object(d.a)([
              "\n  width: 90%;\n  margin: auto;\n  padding: 20px;\n  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,\n    rgba(17, 17, 26, 0.1) 0px 0px 8px;\n",
            ]))
        ),
        vt = g.b.div(
          Ae ||
            (Ae = Object(d.a)([
              "\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin-bottom: 30px;\n",
            ]))
        ),
        yt = g.b.h2(
          we ||
            (we = Object(d.a)([
              "\n  font-size: 36px;\n  font-weight: bold;\n  padding: 50px 0px;\n  text-transform: uppercase;\n  background: -webkit-linear-gradient(#07ffa8, #ff5607);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-align: center;\n  ",
              "\n",
            ])),
          O({ fontSize: "20px", padding: "12px 0px" })
        ),
        At = g.b.div(
          ke ||
            (ke = Object(d.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n",
            ]))
        ),
        wt = g.b.h1(
          Ce ||
            (Ce = Object(d.a)([
              "\n  width: 300px;\n  height: auto;\n  margin: auto;\n  text-align: center;\n  border-radius: 6px;\n",
            ]))
        ),
        kt = g.b.img(
          Se ||
            (Se = Object(d.a)([
              "\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 6px;\n",
            ]))
        ),
        Ct = g.b.button(
          Be ||
            (Be = Object(d.a)([
              "\n  border: 1.5px solid teal;\n  font-size: 16px;\n  background-color: teal;\n  border-radius: 30px;\n  padding: 10px 20px;\n  color: #fff;\n  cursor: pointer;\n  transition: ease 0.3s;\n  &:hover {\n    background-color: #fff;\n    color: teal;\n  }\n",
            ]))
        ),
        St = t(221),
        Bt = t(196),
        It = (t(162), t(163), t(164), t(165), t(218)),
        Et = t(194),
        Rt = t(195);
      function zt() {
        var e,
          n = Object(c.useState)({}),
          t = Object(u.a)(n, 2),
          i = t[0],
          r = t[1],
          o = Object(c.useState)(!1),
          a = Object(u.a)(o, 2),
          s = a[0],
          d = a[1];
        return (
          Object(c.useEffect)(function () {
            d(!0),
              (function () {
                var e = Object(p.a)(
                  j.a.mark(function e() {
                    var n;
                    return j.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                y.a.get(
                                  "https://api.rockmetaltshirt.com/api/sliders"
                                )
                              );
                            case 3:
                              (n = e.sent),
                                r(n.data.data),
                                d(!1),
                                (e.next = 12);
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(0)),
                                console.log(e.t0),
                                d(!1);
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 8]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
          }, []),
          It.a.use([Et.a, Rt.a]),
          Object(sn.jsx)(sn.Fragment, {
            children: s
              ? Object(sn.jsxs)(ra, {
                  children: [
                    Object(sn.jsx)(tn.a, { width: 700, height: 400 }),
                    Object(sn.jsxs)("div", {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                      },
                      children: [
                        Object(sn.jsx)(tn.a, { width: 600, height: 30 }),
                        Object(sn.jsx)(tn.a, { width: 600, height: 50 }),
                        Object(sn.jsx)(tn.a, { width: 100, height: 40 }),
                      ],
                    }),
                  ],
                })
              : Object(sn.jsx)(St.a, {
                  centeredSlides: !0,
                  autoplay: { delay: 3e3, disableOnInteraction: !1 },
                  pagination: { clickable: !0 },
                  loop: !0,
                  className: "mySwiper",
                  children:
                    null === (e = i.length > 0 ? i : Pn) || void 0 === e
                      ? void 0
                      : e.map(function (e) {
                          return Object(sn.jsx)(Bt.a, {
                            children: Object(sn.jsxs)(
                              ca,
                              {
                                bg: e.bg,
                                children: [
                                  Object(sn.jsx)(oa, {
                                    children: Object(sn.jsx)(aa, {
                                      src: e.img,
                                    }),
                                  }),
                                  Object(sn.jsxs)(sa, {
                                    children: [
                                      Object(sn.jsx)(da, { children: e.title }),
                                      Object(sn.jsx)(la, { children: e.desc }),
                                      Object(sn.jsx)(nn.b, {
                                        to: "/all-products",
                                        children: Object(sn.jsx)(ba, {
                                          children: "SHOW NOW",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e.id
                            ),
                          });
                        }),
                }),
          })
        );
      }
      var Lt,
        Ut,
        Qt,
        Tt,
        Ft,
        Dt,
        Nt,
        Yt,
        qt,
        Ht,
        Mt,
        Jt,
        Pt,
        Xt,
        Wt,
        Vt,
        Gt,
        Kt,
        Zt,
        _t,
        $t,
        ei,
        ni,
        ti,
        ii,
        ri,
        ci,
        oi,
        ai,
        si,
        di,
        li,
        bi,
        ji,
        pi,
        ui,
        xi,
        hi,
        gi,
        Oi,
        fi,
        mi,
        vi,
        yi,
        Ai,
        wi,
        ki,
        Ci,
        Si,
        Bi,
        Ii,
        Ei,
        Ri,
        zi,
        Li,
        Ui,
        Qi,
        Ti,
        Fi,
        Di,
        Ni,
        Yi,
        qi,
        Hi,
        Mi,
        Ji,
        Pi,
        Xi,
        Wi,
        Vi,
        Gi,
        Ki,
        Zi,
        _i,
        $i,
        er,
        nr,
        tr,
        ir,
        rr,
        cr,
        or,
        ar,
        sr,
        dr,
        lr,
        br,
        jr,
        pr,
        ur,
        xr,
        hr,
        gr,
        Or,
        fr,
        mr,
        vr,
        yr,
        Ar,
        wr,
        kr,
        Cr,
        Sr,
        Br,
        Ir,
        Er,
        Rr,
        zr,
        Lr,
        Ur,
        Qr,
        Tr,
        Fr,
        Dr,
        Nr,
        Yr,
        qr,
        Hr,
        Mr,
        Jr,
        Pr,
        Xr,
        Wr,
        Vr,
        Gr,
        Kr,
        Zr,
        _r,
        $r,
        ec,
        nc,
        tc,
        ic,
        rc,
        cc,
        oc,
        ac,
        sc,
        dc,
        lc,
        bc,
        jc,
        pc,
        uc,
        xc,
        hc,
        gc,
        Oc,
        fc,
        mc,
        vc,
        yc,
        Ac,
        wc,
        kc,
        Cc,
        Sc,
        Bc,
        Ic,
        Ec,
        Rc,
        zc,
        Lc,
        Uc,
        Qc,
        Tc,
        Fc,
        Dc,
        Nc,
        Yc,
        qc,
        Hc,
        Mc,
        Jc,
        Pc,
        Xc,
        Wc,
        Vc,
        Gc,
        Kc,
        Zc,
        _c,
        $c,
        eo,
        no,
        to,
        io,
        ro,
        co,
        oo,
        ao,
        so,
        lo,
        bo,
        jo,
        po,
        uo,
        xo,
        ho,
        go,
        Oo,
        fo,
        mo,
        vo,
        yo,
        Ao,
        wo,
        ko,
        Co,
        So,
        Bo,
        Io,
        Eo,
        Ro,
        zo,
        Lo,
        Uo,
        Qo,
        To,
        Fo,
        Do,
        No,
        Yo,
        qo,
        Ho,
        Mo,
        Jo,
        Po,
        Xo,
        Wo,
        Vo,
        Go,
        Ko,
        Zo,
        _o,
        $o,
        ea,
        na,
        ta,
        ia,
        ra = g.b.div(
          Ie ||
            (Ie = Object(d.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  margin: 0 40px;\n  ",
              "\n  ",
              "\n",
            ])),
          O({ flexDirection: "column" }),
          f({ flexDirection: "column" })
        ),
        ca = g.b.div(
          Ee ||
            (Ee = Object(d.a)([
              "\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  background-color: #",
              ";\n  ",
              "\n  ",
              "\n",
            ])),
          function (e) {
            return e.bg;
          },
          O({ display: "block" }),
          f({ display: "block" })
        ),
        oa = g.b.div(
          Re ||
            (Re = Object(d.a)([
              "\n  height: auto;\n  width: 100%;\n  flex: 1;\n  ",
              "\n",
            ])),
          O({ display: "block" })
        ),
        aa = g.b.img(
          ze ||
            (ze = Object(d.a)([
              "\n  height: 80%;\n  object-fit: contain;\n  mix-blend-mode: darken;\n",
            ]))
        ),
        sa = g.b.div(
          Le ||
            (Le = Object(d.a)(["\n  flex: 1;\n  padding: 50px;\n  ", "\n"])),
          O({ display: "block" })
        ),
        da = g.b.h1(
          Ue || (Ue = Object(d.a)(["\n  font-size: 70px;\n  ", "\n"])),
          O({ fontSize: "35px" })
        ),
        la = g.b.p(
          Qe ||
            (Qe = Object(d.a)([
              "\n  margin: 50px 0px;\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 3px;\n  ",
              "\n",
            ])),
          O({ fontSize: "15px" })
        ),
        ba = g.b.button(
          Te ||
            (Te = Object(d.a)([
              "\n  padding: 10px;\n  font-size: 20px;\n  background-color: teal;\n  color: white;\n  cursor: pointer;\n  border: none;\n  border: 0.5px solid gray;\n  border-radius: 6px;\n  font-weight: 500;\n  transition: all 0.5s;\n  &:hover {\n    background-color: white;\n    color: teal;\n  }\n",
            ]))
        ),
        ja = function (e) {
          var n = e.item,
            t = Object(Ze.c)(function (e) {
              return e.user.currentUser;
            }),
            i = Object(m.useHistory)(),
            r = Object(Ze.b)(),
            c = Object(l.a)(
              Object(l.a)({}, n),
              {},
              {
                quantity: 1,
                color: null === n || void 0 === n ? void 0 : n.color[0],
                size: null === n || void 0 === n ? void 0 : n.size[0],
              }
            );
          return Object(sn.jsxs)(ua, {
            children: [
              Object(sn.jsx)(xa, {}),
              Object(sn.jsx)(ha, {
                children: Object(sn.jsx)(ga, { src: n.img }),
              }),
              Object(sn.jsxs)(pa, {
                children: [
                  Object(sn.jsx)(Oa, {
                    onClick: function () {
                      if (t)
                        try {
                          r(Ye(c)),
                            ot.a.fire({
                              title: "Added to Cart successfully",
                              icon: "success",
                              confirmButtonColor: "teal",
                            });
                        } catch (e) {
                          console.log(e),
                            ot.a.fire({
                              title:
                                "Something went wrong! May be occurred ,".concat(
                                  e
                                ),
                              icon: "warring",
                              confirmButtonColor: "teal",
                            });
                        }
                      else
                        i.push({
                          pathname: "/login",
                          state: {
                            from: i.location,
                            autoAddToCart: !0,
                            item: c,
                          },
                        });
                    },
                    style: { cursor: "pointer", color: "teal" },
                    children: Object(sn.jsx)(rn.a, {}),
                  }),
                  Object(sn.jsx)(Oa, {
                    children: Object(sn.jsx)(nn.b, {
                      to: "/product/".concat(n._id),
                      style: { cursor: "pointer", color: "teal" },
                      children: Object(sn.jsx)(cn.a, {}),
                    }),
                  }),
                  Object(sn.jsx)(Oa, {
                    onClick: function () {
                      if (t)
                        try {
                          r(Me(c)),
                            ot.a.fire({
                              title: "Added to favorite successfully",
                              icon: "success",
                              confirmButtonColor: "teal",
                            });
                        } catch (e) {
                          console.log(e),
                            ot.a.fire({
                              title:
                                "Something went wrong! May be occurred ,".concat(
                                  e
                                ),
                              icon: "warring",
                              confirmButtonColor: "teal",
                            });
                        }
                      else
                        i.push({
                          pathname: "/login",
                          state: { from: i.location, item: c },
                        });
                    },
                    style: { cursor: "pointer", color: "teal" },
                    children: Object(sn.jsx)(on.a, {}),
                  }),
                ],
              }),
              Object(sn.jsx)(_e.Toaster, {}),
            ],
          });
        },
        pa = g.b.div(
          Lt ||
            (Lt = Object(d.a)([
              "\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.2);\n  z-index: 3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.5s ease;\n  cursor: pointer;\n",
            ]))
        ),
        ua = g.b.div(
          Ut ||
            (Ut = Object(d.a)([
              "\n  flex: 1;\n  margin: 12px 5px;\n  min-width: 280px;\n  height: 350px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f5fbfd;\n  position: relative;\n\n  &:hover ",
              " {\n    opacity: 1;\n  }\n",
            ])),
          pa
        ),
        xa = g.b.div(
          Qt ||
            (Qt = Object(d.a)([
              "\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background-color: white;\n  position: absolute;\n",
            ]))
        ),
        ha = g.b.div(
          Tt ||
            (Tt = Object(d.a)([
              "\n  width: 300px;\n  height: 300px;\n  box-sizing: border-box;\n",
            ]))
        ),
        ga = g.b.img(
          Ft ||
            (Ft = Object(d.a)([
              "\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  z-index: 2;\n  mix-blend-mode: darken;\n",
            ]))
        ),
        Oa = g.b.div(
          Dt ||
            (Dt = Object(d.a)([
              "\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 10px;\n  transition: all 0.5s ease;\n  &:hover {\n    background-color: #e9f5f5;\n    transform: scale(1.1);\n  }\n",
            ]))
        ),
        fa = function (e) {
          var n = e.cat,
            t = e.filters,
            i = e.sort,
            r = Object(c.useState)(!1),
            o = Object(u.a)(r, 2),
            a = o[0],
            s = o[1],
            d = Object(c.useState)([]),
            l = Object(u.a)(d, 2),
            b = l[0],
            x = l[1],
            h = Object(c.useState)([]),
            g = Object(u.a)(h, 2),
            O = g[0],
            f = g[1];
          return (
            Object(c.useEffect)(
              function () {
                s(!0),
                  (function () {
                    var e = Object(p.a)(
                      j.a.mark(function e() {
                        var t;
                        return j.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    y.a.get(
                                      n
                                        ? "https://api.rockmetaltshirt.com/api/products?category=".concat(
                                            n
                                          )
                                        : "https://api.rockmetaltshirt.com/api/products"
                                    )
                                  );
                                case 3:
                                  (t = e.sent),
                                    x(t.data.data),
                                    s(!1),
                                    (e.next = 11);
                                  break;
                                case 8:
                                  (e.prev = 8), (e.t0 = e.catch(0)), s(!1);
                                case 11:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 8]]
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()();
              },
              [n]
            ),
            Object(c.useEffect)(
              function () {
                n &&
                  f(
                    b.filter(function (e) {
                      return Object.entries(t).every(function (n) {
                        var t = Object(u.a)(n, 2),
                          i = t[0],
                          r = t[1];
                        return e[i].includes(r);
                      });
                    })
                  );
              },
              [b, n, t]
            ),
            Object(c.useEffect)(
              function () {
                f(
                  "newest" === i
                    ? function (e) {
                        return Object(en.a)(e).sort(function (e, n) {
                          return e.createdAt - n.createdAt;
                        });
                      }
                    : "asc" === i
                    ? function (e) {
                        return Object(en.a)(e).sort(function (e, n) {
                          return e.price - n.price;
                        });
                      }
                    : function (e) {
                        return Object(en.a)(e).sort(function (e, n) {
                          return n.price - e.price;
                        });
                      }
                );
              },
              [i]
            ),
            Object(sn.jsxs)(ma, {
              children: [
                Object(sn.jsxs)(wa, {
                  children: [
                    "BEST SHOP TO BUY T-SHIRTS ",
                    Object(sn.jsx)("br", {}),
                    " ONLINE IN BANDARBAN",
                  ],
                }),
                Object(sn.jsxs)(ya, {
                  children: [
                    Object(sn.jsx)(wa, { children: "Trending Now" }),
                    Object(sn.jsx)(an.Link, {
                      to: "/all-products",
                      children: Object(sn.jsx)(Aa, { children: "View All" }),
                    }),
                  ],
                }),
                a
                  ? Object(sn.jsxs)("div", {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "12px",
                        flexWrap: "wrap",
                      },
                      children: [
                        " ",
                        Object(en.a)(Array(8)).map(function (e, n) {
                          return Object(sn.jsxs)(
                            "div",
                            {
                              children: [
                                Object(sn.jsx)(tn.a, {
                                  width: 280,
                                  height: 200,
                                }),
                                Object(sn.jsx)(tn.a, {
                                  width: 200,
                                  height: 20,
                                }),
                                Object(sn.jsx)(tn.a, {
                                  width: 160,
                                  height: 20,
                                }),
                              ],
                            },
                            n
                          );
                        }),
                      ],
                    })
                  : 0 === b.length
                  ? Object(sn.jsx)(ka, { children: "No Products Found" })
                  : Object(sn.jsx)(va, {
                      children: n
                        ? O.filter(function (e) {
                            return !0 === e.isTreding;
                          }).map(function (e) {
                            return Object(sn.jsx)(ja, { item: e }, e.id);
                          })
                        : b
                            .filter(function (e) {
                              return !0 === e.isTreding;
                            })
                            .map(function (e) {
                              return Object(sn.jsx)(
                                ja,
                                { item: e, loading: a },
                                e.id
                              );
                            }),
                    }),
              ],
            })
          );
        },
        ma = g.b.div(
          Nt ||
            (Nt = Object(d.a)([
              "\n  width: 90%;\n  margin: auto;\n  padding: 20px;\n",
            ]))
        ),
        va = g.b.div(
          Yt ||
            (Yt = Object(d.a)([
              "\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  justify-content: space-between;\n  align-items: center;\n  ",
              "\n",
            ])),
          O({ justifyContent: "center" })
        ),
        ya = g.b.div(
          qt ||
            (qt = Object(d.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  /* align-items: center; */\n",
            ]))
        ),
        Aa = g.b.button(
          Ht ||
            (Ht = Object(d.a)([
              "\n  border: 1.5px solid teal;\n  font-size: 16px;\n  background-color: teal;\n  border-radius: 30px;\n  padding: 10px 40px;\n  color: #fff;\n  cursor: pointer;\n  transition: ease 0.3s;\n  &:hover {\n    background-color: #fff;\n    color: teal;\n  }\n",
            ]))
        ),
        wa = g.b.h2(
          Mt ||
            (Mt = Object(d.a)([
              "\n  font-size: 36px;\n  font-weight: bold;\n  padding: 50px 0px;\n  text-transform: uppercase;\n  background: -webkit-linear-gradient(#07ffa8, #ff5607);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-align: center;\n  ",
              ";\n",
            ])),
          O({ fontSize: "20px", padding: "12px 0px" })
        ),
        ka = g.b.h1(
          Jt ||
            (Jt = Object(d.a)([
              "\n  width: 100%;\n  height: 300px;\n  margin: auto;\n  text-align: center;\n  border-radius: 6px;\n",
            ]))
        ),
        Ca = function (e) {
          var n = e.item,
            t =
              (e.loading,
              Object(Ze.c)(function (e) {
                return e.user.currentUser;
              })),
            i = Object(Ze.b)(),
            r = Object(rt.useHistory)(),
            c = (function () {
              var e = Object(p.a)(
                j.a.mark(function e() {
                  var c;
                  return j.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((c = Object(l.a)(
                              Object(l.a)({}, n),
                              {},
                              {
                                quantity: 1,
                                color:
                                  null === n || void 0 === n
                                    ? void 0
                                    : n.color[0],
                                size:
                                  null === n || void 0 === n
                                    ? void 0
                                    : n.size[0],
                                email:
                                  null === t || void 0 === t ? void 0 : t.email,
                              }
                            )),
                            t)
                          )
                            try {
                              i(Me(c)),
                                ot.a.fire({
                                  title: "Added to favorite successfully",
                                  icon: "success",
                                  confirmButtonColor: "teal",
                                });
                            } catch (o) {
                              console.log(o),
                                ot.a.fire({
                                  title:
                                    "Something went wrong! May be occurred ,".concat(
                                      o
                                    ),
                                  icon: "warring",
                                  confirmButtonColor: "teal",
                                });
                            }
                          else
                            r.push({
                              pathname: "/login",
                              state: { from: r.location, item: c },
                            });
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return Object(sn.jsxs)(Ba, {
            children: [
              Object(sn.jsx)(Ia, {}),
              Object(sn.jsx)(Ea, { src: n.img }),
              Object(sn.jsxs)(Sa, {
                children: [
                  Object(sn.jsx)(Ra, {
                    onClick: function () {
                      var e = Object(l.a)(
                        Object(l.a)({}, n),
                        {},
                        {
                          quantity: 1,
                          color:
                            null === n || void 0 === n ? void 0 : n.color[0],
                          size: null === n || void 0 === n ? void 0 : n.size[0],
                        }
                      );
                      if (t)
                        try {
                          i(Ye(e)),
                            ot.a.fire({
                              title: "Added to Cart successfully",
                              icon: "success",
                              confirmButtonColor: "teal",
                            });
                        } catch (c) {
                          console.log(c),
                            ot.a.fire({
                              title:
                                "Something went wrong! May be occurred ,".concat(
                                  c
                                ),
                              icon: "warring",
                              confirmButtonColor: "teal",
                            });
                        }
                      else
                        r.push({
                          pathname: "/login",
                          state: {
                            from: r.location,
                            autoAddToCart: !0,
                            item: e,
                          },
                        });
                    },
                    style: { cursor: "pointer", color: "teal" },
                    children: Object(sn.jsx)(rn.a, {}),
                  }),
                  Object(sn.jsx)(Ra, {
                    children: Object(sn.jsx)(nn.b, {
                      to: "/product/".concat(n._id),
                      style: { cursor: "pointer", color: "teal" },
                      children: Object(sn.jsx)(cn.a, {}),
                    }),
                  }),
                  Object(sn.jsx)(Ra, {
                    onClick: c,
                    style: { cursor: "pointer", color: "teal" },
                    children: Object(sn.jsx)(on.a, {}),
                  }),
                ],
              }),
            ],
          });
        },
        Sa = g.b.div(
          Pt ||
            (Pt = Object(d.a)([
              "\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.2);\n  z-index: 3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.5s ease;\n  cursor: pointer;\n",
            ]))
        ),
        Ba = g.b.div(
          Xt ||
            (Xt = Object(d.a)([
              "\n  flex: 1;\n  margin: 12px 5px;\n  min-width: 280px;\n  height: 350px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f5fbfd;\n  position: relative;\n\n  &:hover ",
              " {\n    opacity: 1;\n  }\n",
            ])),
          Sa
        ),
        Ia = g.b.div(
          Wt ||
            (Wt = Object(d.a)([
              "\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background-color: white;\n  position: absolute;\n",
            ]))
        ),
        Ea = g.b.img(
          Vt ||
            (Vt = Object(d.a)([
              "\n  height: 75%;\n  z-index: 2;\n  mix-blend-mode: darken;\n  width: 290px;\n",
            ]))
        ),
        Ra = g.b.div(
          Gt ||
            (Gt = Object(d.a)([
              "\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 10px;\n  transition: all 0.5s ease;\n  &:hover {\n    background-color: #e9f5f5;\n    transform: scale(1.1);\n  }\n",
            ]))
        ),
        za = function (e) {
          var n = e.cat,
            t = e.filters,
            i = e.sort,
            r = Object(c.useState)(!1),
            o = Object(u.a)(r, 2),
            a = o[0],
            s = o[1],
            d = Object(c.useState)([]),
            l = Object(u.a)(d, 2),
            b = l[0],
            x = l[1],
            h = Object(c.useState)([]),
            g = Object(u.a)(h, 2),
            O = g[0],
            f = g[1];
          Object(c.useEffect)(
            function () {
              s(!0),
                (function () {
                  var e = Object(p.a)(
                    j.a.mark(function e() {
                      var t;
                      return j.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  y.a.get(
                                    n
                                      ? "https://api.rockmetaltshirt.com/api/products?category=".concat(
                                          n
                                        )
                                      : "https://api.rockmetaltshirt.com/api/products"
                                  )
                                );
                              case 3:
                                (t = e.sent),
                                  x(t.data.data),
                                  s(!1),
                                  (e.next = 11);
                                break;
                              case 8:
                                (e.prev = 8), (e.t0 = e.catch(0)), s(!1);
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 8]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()();
            },
            [n]
          ),
            Object(c.useEffect)(
              function () {
                n &&
                  f(
                    b.filter(function (e) {
                      return Object.entries(t).every(function (n) {
                        var t = Object(u.a)(n, 2),
                          i = t[0],
                          r = t[1];
                        return e[i].includes(r);
                      });
                    })
                  );
              },
              [b, n, t]
            ),
            Object(c.useEffect)(
              function () {
                f(
                  "newest" === i
                    ? function (e) {
                        return Object(en.a)(e).sort(function (e, n) {
                          return e.createdAt - n.createdAt;
                        });
                      }
                    : "asc" === i
                    ? function (e) {
                        return Object(en.a)(e).sort(function (e, n) {
                          return e.price - n.price;
                        });
                      }
                    : function (e) {
                        return Object(en.a)(e).sort(function (e, n) {
                          return n.price - e.price;
                        });
                      }
                );
              },
              [i]
            );
          var m = b.filter(function (e) {
            return !0 === e.isFeatured;
          });
          return (
            console.log(m),
            Object(sn.jsxs)(La, {
              children: [
                Object(sn.jsxs)(Qa, {
                  children: [
                    "Elevate Your Lifestyle with ",
                    Object(sn.jsx)("br", {}),
                    " Our Featured Collection",
                  ],
                }),
                Object(sn.jsxs)(Ta, {
                  children: [
                    Object(sn.jsx)(Qa, { children: "FEATURED PRODUCTS" }),
                    Object(sn.jsx)(an.Link, {
                      to: "/all-products",
                      children: Object(sn.jsx)(Fa, { children: "View All" }),
                    }),
                  ],
                }),
                a
                  ? Object(sn.jsx)("div", {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "12px",
                        flexWrap: "wrap",
                      },
                      children: Object(en.a)(Array(8)).map(function (e, n) {
                        return Object(sn.jsxs)(
                          "div",
                          {
                            children: [
                              Object(sn.jsx)(tn.a, { width: 280, height: 200 }),
                              Object(sn.jsx)(tn.a, { width: 200, height: 20 }),
                              Object(sn.jsx)(tn.a, { width: 160, height: 20 }),
                            ],
                          },
                          n
                        );
                      }),
                    })
                  : 0 === b.length && 0 === O.length
                  ? Object(sn.jsx)(Da, { children: "No Products Found" })
                  : Object(sn.jsx)(Ua, {
                      children: n
                        ? O.filter(function (e) {
                            return !0 === e.isFeatured;
                          }).map(function (e) {
                            return Object(sn.jsx)(
                              Ca,
                              { item: e, loading: a },
                              e.id
                            );
                          })
                        : b
                            .filter(function (e) {
                              return !0 === e.isFeatured;
                            })
                            .map(function (e) {
                              return Object(sn.jsx)(
                                Ca,
                                { loading: a, item: e },
                                e.id
                              );
                            }),
                    }),
              ],
            })
          );
        },
        La = g.b.div(
          Kt ||
            (Kt = Object(d.a)([
              "\n  width: 90%;\n  margin: auto;\n  padding: 20px;\n  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;\n",
            ]))
        ),
        Ua = g.b.div(
          Zt ||
            (Zt = Object(d.a)([
              "\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 12px;\n  align-items: center;\n  ",
              "\n",
            ])),
          O({ justifyContent: "center" })
        ),
        Qa = g.b.h2(
          _t ||
            (_t = Object(d.a)([
              "\n  font-size: 36px;\n  font-weight: bold;\n  padding: 50px 0px;\n  text-transform: uppercase;\n  background: -webkit-linear-gradient(#ff5607, #07ffa8);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-align: center;\n  ",
              ";\n",
            ])),
          O({ fontSize: "20px", padding: "12px 0px" })
        ),
        Ta = g.b.div(
          $t ||
            ($t = Object(d.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n",
            ]))
        ),
        Fa = g.b.button(
          ei ||
            (ei = Object(d.a)([
              "\n  border: 1.5px solid teal;\n  font-size: 16px;\n  background-color: teal;\n  border-radius: 30px;\n  padding: 10px 40px;\n  color: #fff;\n  cursor: pointer;\n  transition: ease 0.3s;\n  &:hover {\n    background-color: #fff;\n    color: teal;\n  }\n",
            ]))
        ),
        Da = g.b.h1(
          ni ||
            (ni = Object(d.a)([
              "\n  width: 100%;\n  height: 300px;\n  margin: auto;\n  text-align: center;\n  border-radius: 6px;\n",
            ]))
        ),
        Na = function () {
          return Object(sn.jsxs)(Ya, {
            children: [
              Object(sn.jsx)(Za, {
                children: Object(sn.jsxs)(Ha, {
                  children: [
                    "HOW TO ORDER OUR PRODUCT ",
                    Object(sn.jsx)("br", {}),
                    " ONLINE",
                    " ",
                  ],
                }),
              }),
              Object(sn.jsxs)(qa, {
                children: [
                  Object(sn.jsx)("div", {
                    style: { paddingTop: "80px" },
                    children: Object(sn.jsxs)(Ja, {
                      children: [
                        "Ordering our product online from Top Shelf BC is easy. We are proud to have made the process accessible across multiple platforms and simple to understand, meaning that more people can come to us to buy their cannabis products online.",
                        " ",
                      ],
                    }),
                  }),
                  Object(sn.jsxs)(Pa, {
                    children: [
                      Object(sn.jsxs)(Wa, {
                        children: [
                          Object(sn.jsxs)(Xa, {
                            children: [
                              Object(sn.jsx)(Va, {
                                children: Object(sn.jsx)(Ga, { children: "1" }),
                              }),
                              Object(sn.jsxs)("div", {
                                children: [
                                  Object(sn.jsx)("img", {
                                    src: "data:image/png;base64,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",
                                    alt: "",
                                  }),
                                  Object(sn.jsx)(Ma, { children: "REGISTER" }),
                                ],
                              }),
                            ],
                          }),
                          Object(sn.jsx)(Ja, {
                            children:
                              "Sign up for an account with us. This is quick and simple. We don\u2019t require any more details from you than the bare minimum needed for you to place an order and get your product delivered.",
                          }),
                        ],
                      }),
                      Object(sn.jsxs)(Wa, {
                        children: [
                          Object(sn.jsxs)(Xa, {
                            children: [
                              Object(sn.jsx)(Va, {
                                children: Object(sn.jsx)(Ga, { children: "2" }),
                              }),
                              Object(sn.jsxs)("div", {
                                children: [
                                  Object(sn.jsx)("img", {
                                    src: "data:image/png;base64,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",
                                    alt: "",
                                  }),
                                  Object(sn.jsx)(Ma, { children: "SHOP" }),
                                ],
                              }),
                            ],
                          }),
                          Object(sn.jsx)(Ja, {
                            children:
                              "Sign up for an account with us. This is quick and simple. We don\u2019t require any more details from you than the bare minimum needed for you to place an order and get your product delivered.",
                          }),
                        ],
                      }),
                      Object(sn.jsxs)(Wa, {
                        children: [
                          Object(sn.jsxs)(Xa, {
                            children: [
                              Object(sn.jsx)(Va, {
                                children: Object(sn.jsx)(Ga, { children: "3" }),
                              }),
                              Object(sn.jsxs)("div", {
                                children: [
                                  Object(sn.jsx)("img", {
                                    src: "data:image/png;base64,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",
                                    alt: "",
                                  }),
                                  Object(sn.jsx)(Ma, {
                                    children: "MAKE PAYMENT",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(sn.jsx)(Ja, {
                            children:
                              "Sign up for an account with us. This is quick and simple. We don\u2019t require any more details from you than the bare minimum needed for you to place an order and get your product delivered.",
                          }),
                        ],
                      }),
                      Object(sn.jsxs)(Wa, {
                        children: [
                          Object(sn.jsxs)(Xa, {
                            children: [
                              Object(sn.jsx)(Va, {
                                children: Object(sn.jsx)(Ga, { children: "4" }),
                              }),
                              Object(sn.jsxs)("div", {
                                children: [
                                  Object(sn.jsx)("img", {
                                    src: "data:image/png;base64,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",
                                    alt: "",
                                  }),
                                  Object(sn.jsx)(Ma, { children: "RELAX" }),
                                ],
                              }),
                            ],
                          }),
                          Object(sn.jsx)(Ja, {
                            children:
                              "Sign up for an account with us. This is quick and simple. We don\u2019t require any more details from you than the bare minimum needed for you to place an order and get your product delivered.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(sn.jsx)(nn.b, {
                    to: "all-products",
                    children: Object(sn.jsx)(Ka, { children: "ORDER NOW" }),
                  }),
                ],
              }),
            ],
          });
        },
        Ya = g.b.div(
          ti ||
            (ti = Object(d.a)([
              "\n  width: 100%;\n  margin: auto;\n  text-align: center;\n",
            ]))
        ),
        qa = g.b.div(
          ii ||
            (ii = Object(d.a)([
              "\n  background-color: black;\n  color: white;\n",
            ]))
        ),
        Ha = g.b.div(
          ri ||
            (ri = Object(d.a)([
              "\n  font-size: 30px;\n  font-weight: 900;\n  ",
              "\n",
            ])),
          O({ fontSize: "20px" })
        ),
        Ma = g.b.div(
          ci ||
            (ci = Object(d.a)([
              "\n  font-size: 20px;\n  font-weight: 900;\n  text-align: center;\n  margin: 10px auto;\n",
            ]))
        ),
        Ja = g.b.div(
          oi ||
            (oi = Object(d.a)([
              "\n  font-size: 12px;\n  width: 50%;\n  margin: 10px auto;\n",
            ]))
        ),
        Pa = g.b.div(
          ai ||
            (ai = Object(d.a)([
              "\n  display: grid;\n  grid-template-columns: auto auto;\n  gap: 40px;\n  ",
              "\n",
            ])),
          O({ gridTemplateColumns: "auto" })
        ),
        Xa = g.b.div(
          si ||
            (si = Object(d.a)([
              "\n  display: flex;\n  justify-content: center;\n",
            ]))
        ),
        Wa = g.b.div(
          di ||
            (di = Object(d.a)([
              "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n",
            ]))
        ),
        Va = g.b.div(
          li ||
            (li = Object(d.a)([
              "\n  background-color: orange;\n  border-radius: 80px;\n  width: 30px;\n  height: 30px;\n  font-size: 16px;\n  text-align: center;\n  margin-top: 13px;\n",
            ]))
        ),
        Ga = g.b.div(
          bi ||
            (bi = Object(d.a)([
              "\n  margin-top: 5px;\n  color: black;\n  font-weight: 900;\n",
            ]))
        ),
        Ka = g.b.button(
          ji ||
            (ji = Object(d.a)([
              "\n  border: 1.5px solid teal;\n  font-size: 16px;\n  background-color: teal;\n  border-radius: 30px;\n  padding: 10px 40px;\n  color: #fff;\n  cursor: pointer;\n  transition: ease 0.3s;\n  &:hover {\n    background-color: #fff;\n    color: teal;\n  }\n  margin: 50px 0px;\n",
            ]))
        ),
        Za = g.b.div(
          pi ||
            (pi = Object(d.a)([
              "\n  position: relative;\n  background: teal;\n  width: 60%;\n  margin-top: 20px;\n  margin-bottom: -55px;\n  margin-right: auto;\n  margin-left: auto;\n  padding: 20px 5px;\n  border-radius: 10px;\n  color: white;\n",
            ]))
        ),
        _a = function () {
          return Object(sn.jsx)($a, {
            children: Object(sn.jsxs)(es, {
              children: [
                Object(sn.jsxs)(ns, {
                  children: [
                    "WHY WE ARE BEST FOR ",
                    Object(sn.jsx)("br", {}),
                    " YOU IN ONLINE AND ",
                    Object(sn.jsx)("br", {}),
                    " OFFLINE",
                  ],
                }),
                Object(sn.jsx)(is, {
                  children:
                    "Bangladesh, we could wax lyrical about our positive qualities. Instead, to make this information clearer, we\u2019ve highlighted the six prioritized features that we feel makes us a cut above the rest. When it comes to what makes us the foremost online best seller in",
                }),
                Object(sn.jsxs)(as, {
                  children: [
                    Object(sn.jsxs)(cs, {
                      children: [
                        Object(sn.jsx)(os, {
                          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAABQCAYAAABMIbYpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAWUSURBVHgB7ZxPTBRXHMd/S3rEyq2UHtjGtnoCD+DFRsSQcHOJtqcKptqYSAIHNfbixlq4aIINbQJpQzVCPRUS4SQt1S6RS7dJWU5SJN1touJJED2vv+/sjpndnZn33szbJTPOJ5nsZpndme/+/r7fDBujMvL5/GF+SPDWw1ucgsFycbsSi8WytnuwsAbevssHH2hoMHXFTHH8cJ+3/RQOYM1OtuZmXfGFyxQecQBaoIlibL04P/5H4aQTFrxM4aUHAsPkmuUk4KJ5CjF1FHIigUEnEhh0IoFBJxIYdEIv8B2qAZuvtmlre7vktebGJqoFVRGYefSQFjN/UyqTNp7nnj2x3a+hfhe17NlHiYNH6OinR6j5Pf2itTXbsNLU3VmaXbrH4tLkhZY9e2nweC/1dSdIF1oE/jDzCw1NjtHmy23SAdw32devRagvgXC901cvebaYCAhduH7Tl+t6zqKT87PUfuazqokDuY0nxjHg9l7xZMGhW2PskuNUS+CyyZNnSRVlC+6EOOO4HONDt9SPqySwkExqL84EIhEaKkgLRELBAWRobvyApr8dpWpwYeyqY121Q1pg17kvpctAsu8sHeXi7SVmROAckLllkRIIt0BGkwHWM+uX18QgApkb4SKDVBb9+ItuaYFrt+cr+kyvCcINtHn/8rHw6IbQgirWS57st22iYcmJi8OGdXUBV52avyPcTyhQNrHALRF7bn9fGLmhtc+cXbov3MfVRTPrq0YnIaLlo33GyYvcxQSrjGF22ZSGLsguJKy4WnDuwR8kAtlSRRzoaG2n36/foPRP04ZF/bju3JL7OVZYEMuezNqq8fw815yV9YeObx44foJG+r8mHcBbsHbM8PH+55i3liR8Abvr66mV147ICdb+9xB/WYhxEH+/qaIxrxCIwD19LUlu4IATF4cMS9QalAd88XbgnPq6e0peU1rRww1htYFjvUouqRPVUYeSwIWRm5xQ9tJOAjdVQUmgjLjUctqIEWtHIwJut/nyBcfTAerY30Y60Tp0Kl9KoQz8zAXeja5zpyxJY9xIWggDJ3YrhobScknU0Uz+VrqUmeKMt/Jo1XF/09pWRI3FluLcR0mg6MPtvoDnr5zf07DrXVIlu/FYaX8lganMX65/L3ctxGFHq3NMoWaVF/leQdyurK+SCkoxmBF8OOInzic89+CekZAGuZy4gVKDLghuCesf4gRjFm0nVNs7JYFzPN1Ch+FWAweOnTA2WVDXJgSJyMqiX4FI1eYBc+zv1qwIcbCim9tVk0I5sY/pQjgcqHhduOBtO/N5ST+K3m+BG+Vag9hrc1jZQBxc3a7LEbpo4mBniUC4SIovrPi1IgZH2adyC2k0ARfG7ftPLNVmrow6tnBCC8IlPuGRRWl330TpH6d99aM65qto9n/l6Z3beQjLBN58qSyzIeM5dfS1Am0g1pS+ZzJgkOtbS1mTiy5F9yBJFtRb2cwrXehnbFzBz7QMsQMXw+pAxdUx2FJZZCtdfMFq+qtrlUNXY+CEiZqPy1yIcSQeJBSEAEpU7tlT47Hwt8dsuV7XwZYdyleXnKym86KlTrxdPnNxTS9CMQda/CfNrVq79kmB5yu833NXMexy2RpCzRhDgoo3Nr2pVbmNgiviRgV0RpiM4XOqMer3dwmbT7Tr/CkjTnQgO45XwdeNQLDI2u272sbysKLsRRVZtNzphHjzKxRWg0vrvkGoKjelI64WeRyB5RUGuXZxCkFGfPK6EdNx1XooS03uuofArbLRRTXuarIj+reCoBMJDDqRwKATCQw6kcCg81YIzFJ4WYZAtRswg8Uymu3DVPiRgDDyYV0sFvuTn1Tn7tWdZRS/a/F2/NQDnuAFCocloaGzqKnwYx1Wij/98A1vrRQci2apkCzvFEPuDa8B91Jn+AzN72MAAAAASUVORK5CYII=",
                        }),
                        Object(sn.jsx)(ts, { children: "CUSTOMER SERVICE" }),
                        Object(sn.jsx)(rs, {
                          children:
                            "Customer service amplifies sales efforts. We engage with potential buyers, offer insights, and navigate transactions. Your feedback is invaluable, shaping our approach. Through impeccable service, we cultivate buyer relationships, enhancing satisfaction and driving success.",
                        }),
                      ],
                    }),
                    Object(sn.jsxs)(cs, {
                      children: [
                        Object(sn.jsx)(os, {
                          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAABQCAYAAABMIbYpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ8SURBVHgB7ZxPTNNQHMd/JR414SaBRDBA5AQc9KQRMCJcdEQ8qYyoXDBBE42eGEjQgxowhAQTgxIHnhQDOyEiin9OeBicNIY4DhK5kaDn+b5lHW+le+3GW7vWfpJm3dZ179P3e3/a91qFdMTj8Xr2EmBLC1vKyB1EE0ufoigxwy2YWCFbHsXdDxwKNS9Fk2Mv79lSS94AudnAcnOjIPFBL3lHDsAFTqSw3Ctjrz/JmzQgB3vJu7RA0EuhqSeAEI2Thykgj+MLuh1f0O34gm5nj9kGG383KfJpnlbXf1E+UV1eRYFjJ0y3Ewqurq/RyRuXaPX3GuUjpUXFNDc4RqX7i9NuIwzR/ucjeSsHkLYr97uF2wgFI1/mKd9ZXvkm/F4Yoht/NpProWAnhdqvUj6AyOoPP1bX+TQa4TcTbscXdDu+oNvxBd2OL2gn6NxjkUneCGpnLurZi0TJvBDkT8uwyJR0XND4nJMNekm6HO2ooJFcaVEJzQ08U09mZeCYoB1ywBFBu+SAVEEr1bydckCaoJVq3m45IEXQSjXvhByQk4Nqla4k3+olnZIDUgTV65NqYkuSn2mSC9FFx+SAtDKYTrLx5mXH5IDUWtRIMvV7e+WAULBw777kutW+YTpJmXJ8Wvg0GiEUPMBd849lcAlfLyk752K6kBchFKytqEqum10i16NJ1tUckR6WfFrK9ov3KxSsKd8WxCXyhaWvlAmQejsoVw61Mn+5/vRR8RCaUPCM7seRz+/IacZnp1PeI0JECAVx5I9zO8DOzQY7cgkqF37EC3Jm0WHaTASbAsl1yA1PTpBThGemUg5wG5e2dFiaylV5oZk11ttD2ItPXqaUTztA7lWeb0q+R+3548WM6e8sNfQYG+Q513Pd1lDFPAF090RpSoclQYQpXxbR9ep40E120cGGqfnuHtITtBCewHJX7entuymNKgp7rnMSOYf/4CsWpCEUtD7SnNF0yqWV79TIQoWXsjLTIRuW2X+19lxLyTl0y+YGxqi64pDl/WQ8X9RIEuCoBpsDuxZFrg2/mmBj8CMpn2cjB7KaEAtJhA5fswLkZvBUC4XarVUAPJrY8OvxHQcPYTnZN5SxHMh6xi9CB0c5/GZ6x3cQVXPUYkWAthX7MirPaMxH1fKfXWTsekozBDGlQ5+bwEwU/cqOh92Gk422KpNOywcpHdLmbJuJjt66R3W1h9X3EMO2H5cWd2yLstbVepG6zraZnutZQeqkdOREeHaKyUYMRbW21A4xjZzMuheVTz25EtPI6W0FZqIoXyijubxGY8t9E3pR1IzdrCkxO5eTga03hiwkyp4dYhr+nS9uxxd0O76g2/EF3Q4EY+RdohA07xG7lyh6MvW09ZAAL3KwQFGUD2xliLzHEJ5r8X886gEr+IC8kZNwaEg4cZNbEiQe/XCHLTXknhyN0VZlOZUockn+Aa2IGd2wKvRyAAAAAElFTkSuQmCC",
                        }),
                        Object(sn.jsx)(ts, { children: "SECURITY" }),
                        Object(sn.jsx)(rs, {
                          children:
                            "We safeguard your interests, data, and transactions. Employing advanced measures, we ensure a trusted environment. Our robust strategies protect against risks, fostering confidence and enabling smooth, secure interactions with peace of mind.",
                        }),
                      ],
                    }),
                    Object(sn.jsxs)(cs, {
                      children: [
                        Object(sn.jsx)(os, {
                          src: "data:image/png;base64,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",
                        }),
                        Object(sn.jsx)(ts, { children: "BEST VALUE" }),
                        Object(sn.jsx)(rs, {
                          children:
                            "We prioritize your needs, offering optimal solutions at competitive rates. Our commitment to quality and affordability ensures you receive the best value proposition, empowering your business success and forging lasting partnerships.",
                        }),
                      ],
                    }),
                    Object(sn.jsxs)(cs, {
                      children: [
                        Object(sn.jsx)(os, {
                          src: "data:image/png;base64,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",
                        }),
                        Object(sn.jsx)(ts, { children: "DELIVERY INSURANCE" }),
                        Object(sn.jsx)(rs, {
                          children:
                            "Our comprehensive coverage mitigates risks during transit, providing financial protection against loss or damage. With this added layer of security, you can ensure customer satisfaction and maintain your reputation for reliable deliveries.",
                        }),
                      ],
                    }),
                    Object(sn.jsxs)(cs, {
                      children: [
                        Object(sn.jsx)(os, {
                          src: "data:image/png;base64,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",
                        }),
                        Object(sn.jsx)(ts, { children: "HIGHEST QUALITY" }),
                        Object(sn.jsx)(rs, {
                          children:
                            "Embrace excellence as a seller with our highest quality products. Meticulously sourced and crafted, our offerings stand out for their superior performance and durability. Elevate customer satisfaction by delivering items that exemplify uncompromising quality, building trust and loyalty.",
                        }),
                      ],
                    }),
                    Object(sn.jsxs)(cs, {
                      children: [
                        Object(sn.jsx)(os, {
                          src: "data:image/png;base64,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",
                        }),
                        Object(sn.jsx)(ts, { children: "TRUST" }),
                        Object(sn.jsx)(rs, {
                          children:
                            "We prioritize transparency, reliability, and consistency. By delivering on promises and upholding ethical practices, we build lasting relationships with customers. Our commitment to trust ensures mutually beneficial interactions and fosters a loyal customer base.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        $a = g.b.div(
          ui ||
            (ui = Object(d.a)([
              "\n  width: 100%;\n  background-color: #f5fbfd;\n",
            ]))
        ),
        es = g.b.div(
          xi ||
            (xi = Object(d.a)([
              "\n  width: 90%;\n  margin: 0px auto;\n  padding-top: 50px;\n  padding-bottom: 20px;\n",
            ]))
        ),
        ns = g.b.div(
          hi ||
            (hi = Object(d.a)([
              "\n  font-size: 45px;\n  font-weight: 900;\n  text-align: left;\n  ",
              "\n",
            ])),
          O({ fontSize: "20px" })
        ),
        ts = g.b.div(
          gi ||
            (gi = Object(d.a)([
              "\n  font-size: 18px;\n  font-weight: 900;\n  margin: 20px auto;\n",
            ]))
        ),
        is = g.b.div(
          Oi ||
            (Oi = Object(d.a)([
              "\n  font-size: 14px;\n  width: 40%;\n  text-align: left;\n  margin-top: 10px;\n  ",
              "\n",
            ])),
          O({ width: "100%" })
        ),
        rs = g.b.div(
          fi ||
            (fi = Object(d.a)([
              "\n  font-size: 13px;\n  text-align: left;\n  margin-top: 10px;\n  padding-right: 25px;\n",
            ]))
        ),
        cs = g.b.div(
          mi ||
            (mi = Object(d.a)([
              "\n  border: 1px solid rgb(226 232 240);\n  border-radius: 15px;\n  padding: 30px 20px;\n  border-width: thin;\n",
            ]))
        ),
        os = g.b.img(
          vi || (vi = Object(d.a)(["\n  mix-blend-mode: darken;\n"]))
        ),
        as = g.b.div(
          yi ||
            (yi = Object(d.a)([
              "\n  display: grid;\n  margin-top: 40px;\n  margin-bottom: 40px;\n  grid-template-columns: auto auto auto;\n  gap: 40px;\n  ",
              "\n",
            ])),
          O({ gridTemplateColumns: "auto" })
        ),
        ss = function () {
          return Object(sn.jsxs)("div", {
            children: [
              Object(sn.jsx)(zt, {}),
              Object(sn.jsx)(et, {}),
              Object(sn.jsx)(fa, {}),
              Object(sn.jsx)(ft, {}),
              Object(sn.jsx)(za, {}),
              Object(sn.jsx)(Na, {}),
              Object(sn.jsx)(_a, {}),
            ],
          });
        },
        ds = t(39),
        ls = function () {
          var e = Object(m.useLocation)().pathname.split("/")[2],
            n = Object(c.useState)({}),
            t = Object(u.a)(n, 2),
            i = t[0],
            r = t[1],
            o = Object(c.useState)("newest"),
            a = Object(u.a)(o, 2),
            s = a[0],
            d = a[1],
            b = function (e) {
              var n = e.target.value;
              r(
                Object(l.a)(
                  Object(l.a)({}, i),
                  {},
                  Object(ds.a)({}, e.target.name, n)
                )
              );
            };
          return Object(sn.jsxs)(bs, {
            children: [
              Object(sn.jsx)(js, {
                children: null === e || void 0 === e ? void 0 : e.toUpperCase(),
              }),
              Object(sn.jsxs)(ps, {
                children: [
                  Object(sn.jsxs)(us, {
                    children: [
                      Object(sn.jsx)(xs, { children: "Filter Products:" }),
                      Object(sn.jsxs)(hs, {
                        name: "color",
                        onChange: b,
                        children: [
                          Object(sn.jsx)(gs, {
                            disabled: !0,
                            children: "Color",
                          }),
                          Object(sn.jsx)(gs, { children: "White" }),
                          Object(sn.jsx)(gs, { children: "Black" }),
                          Object(sn.jsx)(gs, { children: "Red" }),
                          Object(sn.jsx)(gs, { children: "Blue" }),
                          Object(sn.jsx)(gs, { children: "Yellow" }),
                          Object(sn.jsx)(gs, { children: "Green" }),
                        ],
                      }),
                      Object(sn.jsxs)(hs, {
                        name: "size",
                        onChange: b,
                        children: [
                          Object(sn.jsx)(gs, {
                            disabled: !0,
                            children: "Size",
                          }),
                          Object(sn.jsx)(gs, { children: "XS" }),
                          Object(sn.jsx)(gs, { children: "S" }),
                          Object(sn.jsx)(gs, { children: "M" }),
                          Object(sn.jsx)(gs, { children: "L" }),
                          Object(sn.jsx)(gs, { children: "XL" }),
                        ],
                      }),
                    ],
                  }),
                  Object(sn.jsxs)(us, {
                    children: [
                      Object(sn.jsx)(xs, { children: "Sort Products:" }),
                      Object(sn.jsxs)(hs, {
                        onChange: function (e) {
                          return d(e.target.value);
                        },
                        children: [
                          Object(sn.jsx)(gs, {
                            value: "newest",
                            children: "Newest",
                          }),
                          Object(sn.jsx)(gs, {
                            value: "asc",
                            children: "Price (asc)",
                          }),
                          Object(sn.jsx)(gs, {
                            value: "desc",
                            children: "Price (desc)",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(sn.jsx)(ft, { cat: e, filters: i, sort: s }),
            ],
          });
        },
        bs = g.b.div(Ai || (Ai = Object(d.a)(["\n  margin-top: 100px;\n"]))),
        js = g.b.h1(wi || (wi = Object(d.a)(["\n  margin: 20px;\n"]))),
        ps = g.b.div(
          ki ||
            (ki = Object(d.a)([
              "\n  display: flex;\n  justify-content: space-between;\n",
            ]))
        ),
        us = g.b.div(
          Ci || (Ci = Object(d.a)(["\n  margin: 20px;\n  ", "\n"])),
          O({ width: "0px 20px", display: "flex", flexDirection: "column" })
        ),
        xs = g.b.span(
          Si ||
            (Si = Object(d.a)([
              "\n  font-size: 20px;\n  font-weight: 600;\n  margin-right: 20px;\n  ",
              "\n",
            ])),
          O({ marginRight: "0px" })
        ),
        hs = g.b.select(
          Bi ||
            (Bi = Object(d.a)([
              "\n  font-size: 17px;\n  padding: 6px;\n  margin-left: 9px;\n  border: 1.5px solid teal;\n  border-radius: 4px;\n  background-color: white;\n  cursor: pointer;\n  outline: none;\n  width: 100px;\n  ",
              "\n",
            ])),
          O({ margin: "10px 0px" })
        ),
        gs = g.b.option(Ii || (Ii = Object(d.a)(["\n  font-size: 17px;\n"]))),
        Os = Object(Fe.b)({
          name: "user",
          initialState: { currentUser: null, isLoading: !1, error: !1 },
          reducers: {
            loginStart: function (e) {
              e.isLoading = !0;
            },
            loginSuccess: function (e, n) {
              (e.isLoading = !1), (e.currentUser = n.payload), (e.error = !1);
            },
            loginFailure: function (e, n) {
              (e.isLoading = !1), (e.error = n.payload);
            },
            registrationStart: function (e) {
              e.isLoading = !0;
            },
            registrationSuccess: function (e, n) {
              (e.isLoading = !1), (e.currentUser = n.payload), (e.error = !1);
            },
            registrationFailure: function (e, n) {
              (e.isLoading = !1), (e.error = n.payload);
            },
            clear: function (e) {
              e.error = "";
            },
            logout: function (e) {
              e.currentUser = null;
            },
          },
        }),
        fs = Os.actions,
        ms = fs.loginStart,
        vs = fs.loginSuccess,
        ys = fs.loginFailure,
        As = fs.registrationFailure,
        ws = fs.registrationStart,
        ks = fs.registrationSuccess,
        Cs = fs.clear,
        Ss = fs.logout,
        Bs = Os.reducer,
        Is = (function () {
          var e = Object(p.a)(
            j.a.mark(function e(n, t) {
              var i, r, c, o, a, s, d, l, b;
              return j.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (i = t.email),
                          (r = t.password),
                          (c = t.item),
                          (o = t.autoAddToCart),
                          n(ms()),
                          (e.prev = 2),
                          (e.next = 5),
                          w.post("/auth/login", { email: i, password: r })
                        );
                      case 5:
                        (s = e.sent),
                          localStorage.setItem(
                            "token",
                            null === (a = s.data.data) || void 0 === a
                              ? void 0
                              : a.accessToken
                          ),
                          n(vs(s.data.data)),
                          ot.a.fire({
                            title: "Logged in Successfully",
                            icon: "success",
                            confirmButtonColor: "teal",
                          }),
                          c && o
                            ? (n(Ye(c)),
                              _e.toast.success("Product added to the cart"),
                              localStorage.removeItem("temp_product"))
                            : c &&
                              !o &&
                              (n(Me(c)),
                              _e.toast.success("Product added to the wishlist"),
                              localStorage.removeItem("temp_product")),
                          (e.next = 16);
                        break;
                      case 12:
                        (e.prev = 12),
                          (e.t0 = e.catch(2)),
                          (b =
                            (null === (d = e.t0.response) ||
                            void 0 === d ||
                            null === (l = d.data) ||
                            void 0 === l
                              ? void 0
                              : l.error) || "An error occurred."),
                          n(ys(b));
                      case 16:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[2, 12]]
              );
            })
          );
          return function (n, t) {
            return e.apply(this, arguments);
          };
        })(),
        Es = (function () {
          var e = Object(p.a)(
            j.a.mark(function e(n, t) {
              var i, r, c, o, a, s, d, l, b, p, u;
              return j.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (i = t.name),
                          (r = t.email),
                          (c = t.password),
                          (o = t.item),
                          (a = t.autoAddToCart),
                          (s = t.userNumber),
                          n(ws()),
                          (e.prev = 2),
                          (e.next = 5),
                          w.post("/auth/register", {
                            name: i,
                            email: r,
                            userNumber: s,
                            password: c,
                          })
                        );
                      case 5:
                        (l = e.sent),
                          localStorage.setItem(
                            "token",
                            null === (d = l.data.data) || void 0 === d
                              ? void 0
                              : d.accessToken
                          ),
                          n(ks(l.data.data)),
                          ot.a.fire({
                            title: "Registered in Successfully",
                            icon: "success",
                            confirmButtonColor: "teal",
                          }),
                          o && a
                            ? (n(Ye(o)),
                              _e.toast.success("Product added to the cart"),
                              localStorage.removeItem("temp_product"))
                            : o &&
                              !a &&
                              (n(Me(o)),
                              _e.toast.success("Product added to the wishlist"),
                              localStorage.removeItem("temp_product")),
                          (e.next = 16);
                        break;
                      case 12:
                        (e.prev = 12),
                          (e.t0 = e.catch(2)),
                          (u =
                            (null === (b = e.t0.response) ||
                            void 0 === b ||
                            null === (p = b.data) ||
                            void 0 === p
                              ? void 0
                              : p.error) || "An error occurred."),
                          n(As(u));
                      case 16:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[2, 12]]
              );
            })
          );
          return function (n, t) {
            return e.apply(this, arguments);
          };
        })(),
        Rs = function () {
          var e = Object(Ze.b)(),
            n = Object(c.useState)(""),
            t = Object(u.a)(n, 2),
            i = t[0],
            r = t[1],
            o = Object(c.useState)(""),
            a = Object(u.a)(o, 2),
            s = (a[0], a[1], Object(c.useState)("")),
            d = Object(u.a)(s, 2),
            b = d[0],
            j = d[1],
            p = Object(c.useState)(""),
            x = Object(u.a)(p, 2),
            h = x[0],
            g = x[1],
            O = Object(c.useState)(""),
            f = Object(u.a)(O, 2),
            m = f[0],
            v = f[1],
            y = Object(Ze.c)(function (e) {
              return e.user;
            }),
            A = y.isLoading,
            w = (y.error, localStorage.getItem("temp_product")),
            k = w && JSON.parse(w),
            C = Object(l.a)(
              { name: i, email: h, userNumber: b, password: m },
              w && {
                item: null === k || void 0 === k ? void 0 : k.item,
                autoAddToCart:
                  null === k || void 0 === k ? void 0 : k.autoAddToCart,
              }
            ),
            S = function (n) {
              n.preventDefault(), Es(e, C);
            };
          return (
            Object(c.useEffect)(
              function () {
                e(Cs());
              },
              [e]
            ),
            Object(sn.jsxs)(zs, {
              children: [
                Object(sn.jsx)(_e.Toaster, {}),
                Object(sn.jsx)(Ls, {
                  children: Object(sn.jsxs)(Us, {
                    children: [
                      Object(sn.jsx)(Qs, { children: "CREATE AN ACCOUNT" }),
                      Object(sn.jsxs)(Ts, {
                        onSubmit: S,
                        children: [
                          Object(sn.jsx)(Fs, {
                            onChange: function (e) {
                              return r(e.target.value);
                            },
                            name: "name",
                            type: "text",
                            placeholder: "name",
                            required: !0,
                          }),
                          Object(sn.jsx)(Fs, {
                            onChange: function (e) {
                              return j(e.target.value);
                            },
                            name: "userNumber",
                            placeholder: "Phone Number",
                            type: "number",
                            required: !0,
                          }),
                          Object(sn.jsx)(Fs, {
                            onChange: function (e) {
                              return g(e.target.value);
                            },
                            name: "email",
                            placeholder: "email",
                            type: "email",
                            required: !0,
                          }),
                          Object(sn.jsx)(Fs, {
                            onChange: function (e) {
                              return v(e.target.value);
                            },
                            name: "password",
                            placeholder: "password",
                            type: "password",
                            required: !0,
                          }),
                          Object(sn.jsxs)(Ds, {
                            children: [
                              "By creating an account, I consent to the processing of my personal data in accordance with the ",
                              Object(sn.jsx)("b", {
                                children: "PRIVACY POLICY",
                              }),
                            ],
                          }),
                          Object(sn.jsxs)(Ns, {
                            children: [
                              Object(sn.jsx)(Ys, {
                                type: "submit",
                                onClick: S,
                                disabled: A,
                                children: A ? "Loading..." : "Register",
                              }),
                              Object(sn.jsx)(nn.b, {
                                to: "/login",
                                style: {
                                  color: "teal",
                                  textDecoration: "none",
                                },
                                children: "Already Have an account? Log in",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        zs =
          (g.b.p(
            Ei ||
              (Ei = Object(d.a)(["\n  color: #c23e3e;\n  margin: 12px 0px;\n"]))
          ),
          g.b.div(Ri || (Ri = Object(d.a)(["\n  overflow: hidden;\n"])))),
        Ls = g.b.div(
          zi ||
            (zi = Object(d.a)([
              '\n  width: 100vw;\n  height: 100vh;\n  background: linear-gradient(\n      rgba(255, 255, 255, 0.5),\n      rgba(255, 255, 255, 0.5)\n    ),\n    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")\n      center;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n',
            ]))
        ),
        Us = g.b.div(
          Li ||
            (Li = Object(d.a)([
              "\n  width: 300px;\n  padding: 20px;\n  border-radius: 12px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  background-color: white;\n",
            ]))
        ),
        Qs = g.b.h1(
          Ui ||
            (Ui = Object(d.a)([
              "\n  font-size: 24px;\n  font-weight: 300;\n  text-align: center;\n  font-weight: 500;\n",
            ]))
        ),
        Ts = g.b.form(
          Qi ||
            (Qi = Object(d.a)([
              "\n  display: flex;\n  flex-direction: column;\n",
            ]))
        ),
        Fs = g.b.input(
          Ti ||
            (Ti = Object(d.a)([
              "\n  min-width: 40%;\n  margin: 20px 10px 0px 0px;\n  padding: 10px;\n  outline: none;\n  border-radius: 6px;\n  font-size: 17pxx;\n  &::-webkit-inner-spin-button,\n  &::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    appearance: none;\n    margin: 0;\n  }\n",
            ]))
        ),
        Ds = g.b.span(
          Fi ||
            (Fi = Object(d.a)(["\n  font-size: 12px;\n  margin: 20px 0px;\n"]))
        ),
        Ns = g.b.div(
          Di ||
            (Di = Object(d.a)([
              "\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  gap: 20px;\n  align-items: center;\n",
            ]))
        ),
        Ys = g.b.button(
          Ni ||
            (Ni = Object(d.a)([
              "\n  border: none;\n  border-radius: 11px;\n  border: 1.5px solid teal;\n  padding: 10px 26px;\n  background-color: teal;\n  color: white;\n  width: 100%;\n  /* background-color: ",
              ";\n  color: ",
              "; */\n  transition: ease 0.4s;\n  cursor: pointer;\n  &:hover {\n    background-color: transparent;\n    color: teal;\n  }\n",
            ])),
          function (e) {
            return e.disabled ? "#ccc" : "#007bff";
          },
          function (e) {
            return e.disabled ? "#666" : "#fff";
          }
        ),
        qs = function () {
          var e,
            n,
            t = Object(c.useState)(""),
            i = Object(u.a)(t, 2),
            r = i[0],
            o = i[1],
            a = Object(c.useState)(""),
            s = Object(u.a)(a, 2),
            d = s[0],
            b = s[1],
            x = Object(Ze.b)(),
            h = Object(Ze.c)(function (e) {
              return e.user;
            }),
            g = h.isLoading,
            O = h.error,
            f = Object(an.useLocation)(),
            m = null === (e = f.state) || void 0 === e ? void 0 : e.item,
            v =
              null === (n = f.state) || void 0 === n ? void 0 : n.autoAddToCart;
          m &&
            localStorage.setItem(
              "temp_product",
              JSON.stringify({ item: m, autoAddToCart: v })
            );
          var y = localStorage.getItem("temp_product"),
            A = JSON.parse(y) || {},
            w = A.item,
            k = A.autoAddToCart,
            C = (function () {
              var e = Object(p.a)(
                j.a.mark(function e(n) {
                  return j.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            n.preventDefault(),
                            (e.next = 3),
                            Is(
                              x,
                              Object(l.a)(
                                { email: r, password: d },
                                w && { item: w, autoAddToCart: k }
                              )
                            )
                          );
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(c.useEffect)(
              function () {
                O && (_e.toast.error(O), x(Cs()));
              },
              [O, x]
            ),
            Object(sn.jsxs)(Hs, {
              children: [
                Object(sn.jsx)(_e.Toaster, {}),
                Object(sn.jsx)(Ms, {
                  children: Object(sn.jsxs)(Js, {
                    children: [
                      Object(sn.jsx)(Ps, { children: "SIGN IN" }),
                      Object(sn.jsxs)(Xs, {
                        children: [
                          Object(sn.jsx)(Ws, {
                            placeholder: "email",
                            onChange: function (e) {
                              return o(e.target.value);
                            },
                            type: "text",
                            required: !0,
                          }),
                          Object(sn.jsx)(Ws, {
                            placeholder: "password",
                            type: "password",
                            onChange: function (e) {
                              return b(e.target.value);
                            },
                            required: !0,
                          }),
                          Object(sn.jsx)(nn.b, {
                            to: "/forgotPassword",
                            style: {
                              textDecoration: "none",
                              color: "teal",
                              fontWeight: "600",
                            },
                            children: "Forgot Password?",
                          }),
                          Object(sn.jsx)(Vs, {
                            onClick: C,
                            disabled: g || O,
                            children: "LOGIN",
                          }),
                          Object(sn.jsx)(nn.b, {
                            to: "/register",
                            style: {
                              textDecoration: "none",
                              color: "teal",
                              fontWeight: "600",
                            },
                            children: "No Account? Register Now",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        Hs = g.b.div(Yi || (Yi = Object(d.a)(["\n  overflow: hidden;\n"]))),
        Ms = g.b.div(
          qi ||
            (qi = Object(d.a)([
              '\n  width: 100vw;\n  height: 100vh;\n  background: linear-gradient(\n      rgba(255, 255, 255, 0.5),\n      rgba(255, 255, 255, 0.5)\n    ),\n    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")\n      center;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n',
            ]))
        ),
        Js = g.b.div(
          Hi ||
            (Hi = Object(d.a)([
              "\n  width: 300px;\n  padding: 20px;\n  border-radius: 12px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  background-color: white;\n  ",
              "\n",
            ])),
          O({ width: "75%" })
        ),
        Ps = g.b.h1(
          Mi ||
            (Mi = Object(d.a)([
              "\n  font-size: 24px;\n  font-weight: 500;\n  text-align: center;\n",
            ]))
        ),
        Xs = g.b.form(
          Ji ||
            (Ji = Object(d.a)([
              "\n  display: flex;\n  flex-direction: column;\n",
            ]))
        ),
        Ws = g.b.input(
          Pi ||
            (Pi = Object(d.a)([
              "\n  flex: 1;\n  min-width: 40%;\n  margin: 10px 0;\n  padding: 10px;\n  outline: none;\n  border-radius: 6px;\n",
            ]))
        ),
        Vs = g.b.button(
          Xi ||
            (Xi = Object(d.a)([
              "\n  border: 1px solid teal;\n  margin: 10px 0px;\n  padding: 15px 26px;\n  background-color: teal;\n  color: white;\n  /* background-color: ",
              ";\n  color: ",
              "; */\n  cursor: pointer;\n  border-radius: 11px;\n  transition: ease 0.4s;\n  &:hover {\n    background-color: transparent;\n    color: teal;\n  }\n  &:disabled {\n    color: green;\n    cursor: not-allowed;\n  }\n",
            ])),
          function (e) {
            return e.disabled ? "#ccc" : "#007bff";
          },
          function (e) {
            return e.disabled ? "#666" : "#fff";
          }
        ),
        Gs =
          (g.b.span(Wi || (Wi = Object(d.a)(["\n  color: red;\n"]))),
          function () {
            var e = Object(m.useLocation)(),
              n = e.state.stripeData,
              t = e.state.cart,
              i = Object(Ze.c)(function (e) {
                return e.user.currentUser;
              }),
              r = Object(c.useState)(null),
              o = Object(u.a)(r, 2),
              a = o[0],
              s = o[1];
            return (
              Object(c.useEffect)(
                function () {
                  n &&
                    (function () {
                      var e = Object(p.a)(
                        j.a.mark(function e() {
                          var r;
                          return j.a.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      (e.next = 3),
                                      k.post("/orders", {
                                        userId: i._id,
                                        products: t.products.map(function (e) {
                                          return {
                                            productId: e._id,
                                            quantity: e._quantity,
                                          };
                                        }),
                                        amount: t.total,
                                        address: n.billing_details.address,
                                      })
                                    );
                                  case 3:
                                    (r = e.sent), s(r.data._id), (e.next = 9);
                                    break;
                                  case 7:
                                    (e.prev = 7), (e.t0 = e.catch(0));
                                  case 9:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[0, 7]]
                          );
                        })
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })()();
                },
                [t, n, i]
              ),
              Object(sn.jsxs)("div", {
                style: {
                  height: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                },
                children: [
                  a
                    ? "Order has been created successfully. Your order number is ".concat(
                        a
                      )
                    : "Successfull. Your order is being prepared...",
                  Object(sn.jsx)("button", {
                    style: { padding: 10, marginTop: 20 },
                    children: "Go to Homepage",
                  }),
                ],
              })
            );
          }),
        Ks = function (e) {
          var n = e.item,
            t = Object(Ze.c)(function (e) {
              return e.user.currentUser;
            }),
            i = Object(Ze.b)(),
            r = Object(an.useHistory)();
          return Object(sn.jsx)(sn.Fragment, {
            children: Object(sn.jsxs)(_s, {
              children: [
                Object(sn.jsx)($s, {}),
                Object(sn.jsx)(ed, { src: n.img }),
                Object(sn.jsxs)(Zs, {
                  children: [
                    Object(sn.jsx)(nd, {
                      onClick: function () {
                        if (t)
                          try {
                            i(
                              Ye(
                                Object(l.a)(
                                  Object(l.a)({}, n),
                                  {},
                                  {
                                    quantity: 1,
                                    color:
                                      null === n || void 0 === n
                                        ? void 0
                                        : n.color[0],
                                    size:
                                      null === n || void 0 === n
                                        ? void 0
                                        : n.size[0],
                                    email:
                                      null === t || void 0 === t
                                        ? void 0
                                        : t.email,
                                  }
                                )
                              )
                            ),
                              ot.a.fire({
                                title: "Added to Cart successfully",
                                icon: "success",
                                confirmButtonColor: "teal",
                              });
                          } catch (e) {
                            console.log(e),
                              ot.a.fire({
                                title:
                                  "Something went wrong! May be occurred ,".concat(
                                    e
                                  ),
                                icon: "warring",
                                confirmButtonColor: "teal",
                              });
                          }
                        else r.push("/login");
                      },
                      children: Object(sn.jsx)(rn.a, {}),
                    }),
                    Object(sn.jsx)(nd, {
                      children: Object(sn.jsx)(nn.b, {
                        to: "/product/".concat(n._id),
                        children: Object(sn.jsx)(cn.a, {}),
                      }),
                    }),
                    Object(sn.jsx)(nd, {
                      onClick: function () {
                        if (t)
                          try {
                            i(
                              Me(
                                Object(l.a)(
                                  Object(l.a)({}, n),
                                  {},
                                  {
                                    quantity: 1,
                                    color:
                                      null === n || void 0 === n
                                        ? void 0
                                        : n.color[0],
                                    size:
                                      null === n || void 0 === n
                                        ? void 0
                                        : n.size[0],
                                  }
                                )
                              )
                            ),
                              ot.a.fire({
                                title: "Added to wishlist successfully",
                                icon: "success",
                                confirmButtonColor: "teal",
                              });
                          } catch (e) {
                            console.log(e),
                              ot.a.fire({
                                title:
                                  "Something went wrong! May be occurred ,".concat(
                                    e
                                  ),
                                icon: "warring",
                                confirmButtonColor: "teal",
                              });
                          }
                        else r.push("/login");
                      },
                      children: Object(sn.jsx)(on.a, {}),
                    }),
                  ],
                }),
                Object(sn.jsx)(_e.Toaster, {}),
              ],
            }),
          });
        },
        Zs = g.b.div(
          Vi ||
            (Vi = Object(d.a)([
              "\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.2);\n  z-index: 3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.5s ease;\n  cursor: pointer;\n",
            ]))
        ),
        _s = g.b.div(
          Gi ||
            (Gi = Object(d.a)([
              "\n  flex: 1;\n  margin: 5px;\n  min-width: 280px;\n  height: 350px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f5fbfd;\n  position: relative;\n\n  &:hover ",
              " {\n    opacity: 1;\n  }\n",
            ])),
          Zs
        ),
        $s = g.b.div(
          Ki ||
            (Ki = Object(d.a)([
              "\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background-color: white;\n  position: absolute;\n",
            ]))
        ),
        ed = g.b.img(
          Zi ||
            (Zi = Object(d.a)([
              "\n  height: 75%;\n  z-index: 2;\n  mix-blend-mode: darken;\n",
            ]))
        ),
        nd = g.b.div(
          _i ||
            (_i = Object(d.a)([
              "\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 10px;\n  transition: all 0.5s ease;\n  &:hover {\n    background-color: #e9f5f5;\n    transform: scale(1.1);\n  }\n",
            ]))
        ),
        td = function () {
          var e = Object(c.useState)(!1),
            n = Object(u.a)(e, 2),
            t = n[0],
            i = n[1],
            r = Object(c.useState)([]),
            o = Object(u.a)(r, 2),
            a = o[0],
            s = o[1],
            d = Object(c.useState)([]),
            b = Object(u.a)(d, 2),
            x = b[0],
            h = b[1],
            g = Object(c.useState)({}),
            O = Object(u.a)(g, 2),
            f = O[0],
            m = O[1],
            v = Object(c.useState)("newest"),
            A = Object(u.a)(v, 2),
            w = A[0],
            k = A[1];
          Object(c.useEffect)(function () {
            i(!0),
              (function () {
                var e = Object(p.a)(
                  j.a.mark(function e() {
                    var n;
                    return j.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                y.a.get(
                                  "https://api.rockmetaltshirt.com/api/products"
                                )
                              );
                            case 3:
                              (n = e.sent),
                                s(n.data.data),
                                i(!1),
                                (e.next = 11);
                              break;
                            case 8:
                              (e.prev = 8), (e.t0 = e.catch(0)), i(!1);
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 8]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
          }, []),
            Object(c.useEffect)(
              function () {
                h(function () {
                  return a.filter(function (e) {
                    return Object.entries(f).every(function (n) {
                      var t = Object(u.a)(n, 2),
                        i = t[0],
                        r = t[1];
                      return e[i].includes(r);
                    });
                  });
                });
              },
              [a, f]
            ),
            Object(c.useEffect)(
              function () {
                h(
                  "newest" === w
                    ? function (e) {
                        return Object(en.a)(e).sort(function (e, n) {
                          return e.createdAt - n.createdAt;
                        });
                      }
                    : "asc" === w
                    ? function (e) {
                        return Object(en.a)(e).sort(function (e, n) {
                          return e.price - n.price;
                        });
                      }
                    : function (e) {
                        return Object(en.a)(e).sort(function (e, n) {
                          return n.price - e.price;
                        });
                      }
                );
              },
              [w]
            );
          var C = function (e) {
            console.log("Filtering for: ", e.target.value, e.target.name);
            var n = e.target.value;
            console.log(n),
              m(
                Object(l.a)(
                  Object(l.a)({}, f),
                  {},
                  Object(ds.a)({}, e.target.name, n)
                )
              );
            var t = a.filter(function (t) {
              return Object.entries(
                Object(l.a)(
                  Object(l.a)({}, f),
                  {},
                  Object(ds.a)({}, e.target.name, n)
                )
              ).every(function (e) {
                var n = Object(u.a)(e, 2),
                  i = n[0],
                  r = n[1];
                return t[i].includes(r);
              });
            });
            h(t);
          };
          return Object(sn.jsx)(sn.Fragment, {
            children: Object(sn.jsxs)(bd, {
              children: [
                Object(sn.jsx)(pd, { children: "All Products" }),
                Object(sn.jsxs)(id, {
                  children: [
                    Object(sn.jsxs)(ad, {
                      children: [
                        Object(sn.jsx)(sd, { children: "Filter Products:" }),
                        Object(sn.jsxs)(dd, {
                          name: "color",
                          onChange: C,
                          children: [
                            Object(sn.jsx)(ld, {
                              disabled: !0,
                              children: "Color",
                            }),
                            Object(sn.jsx)(ld, { children: "White" }),
                            Object(sn.jsx)(ld, { children: "Black" }),
                            Object(sn.jsx)(ld, { children: "Red" }),
                            Object(sn.jsx)(ld, { children: "Blue" }),
                            Object(sn.jsx)(ld, { children: "Yellow" }),
                            Object(sn.jsx)(ld, { children: "Green" }),
                          ],
                        }),
                        Object(sn.jsxs)(dd, {
                          name: "size",
                          onChange: C,
                          children: [
                            Object(sn.jsx)(ld, {
                              disabled: !0,
                              children: "Size",
                            }),
                            Object(sn.jsx)(ld, { children: "XS" }),
                            Object(sn.jsx)(ld, { children: "S" }),
                            Object(sn.jsx)(ld, { children: "M" }),
                            Object(sn.jsx)(ld, { children: "L" }),
                            Object(sn.jsx)(ld, { children: "XL" }),
                          ],
                        }),
                      ],
                    }),
                    Object(sn.jsxs)(ad, {
                      children: [
                        Object(sn.jsx)(sd, { children: "Sort Products:" }),
                        Object(sn.jsxs)(dd, {
                          onChange: function (e) {
                            return k(e.target.value);
                          },
                          children: [
                            Object(sn.jsx)(ld, {
                              value: "newest",
                              children: "Newest",
                            }),
                            Object(sn.jsx)(ld, {
                              value: "asc",
                              children: "Price (asc)",
                            }),
                            Object(sn.jsx)(ld, {
                              value: "desc",
                              children: "Price (desc)",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                t
                  ? Object(sn.jsx)("div", {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "12px",
                        flexWrap: "wrap",
                      },
                      children: Object(en.a)(Array(8)).map(function (e, n) {
                        return Object(sn.jsxs)(
                          "div",
                          {
                            children: [
                              Object(sn.jsx)(tn.a, { width: 280, height: 200 }),
                              Object(sn.jsx)(tn.a, { width: 280, height: 20 }),
                              Object(sn.jsx)(tn.a, { width: 200, height: 20 }),
                            ],
                          },
                          n
                        );
                      }),
                    })
                  : Object(sn.jsx)(jd, {
                      children: a
                        ? x.length > 0
                          ? x.map(function (e) {
                              return Object(sn.jsx)(Ks, { item: e }, e.id);
                            })
                          : Object(sn.jsxs)(rd, {
                              children: [
                                Object(sn.jsx)(od, {
                                  src: Ot,
                                  alt: "EmptyProduct",
                                }),
                                Object(sn.jsx)(cd, {
                                  style: { marginBottom: "10px" },
                                  children:
                                    "Sorry, We cannot find any matched product.",
                                }),
                              ],
                            })
                        : a.length > 0
                        ? a.map(function (e) {
                            return Object(sn.jsx)(Ks, { item: e }, e.id);
                          })
                        : Object(sn.jsx)(cd, {
                            children: "No products available.",
                          }),
                    }),
              ],
            }),
          });
        },
        id = g.b.div(
          $i ||
            ($i = Object(d.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n",
            ]))
        ),
        rd = g.b.div(
          er ||
            (er = Object(d.a)([
              "\n  width: 300px;\n  height: 300px;\n  margin: auto;\n  text-align: center;\n  border-radius: 6px;\n  ",
              "\n",
            ])),
          O({ paddingBottom: "20px" })
        ),
        cd = g.b.h1(
          nr ||
            (nr = Object(d.a)([
              "\n  width: 300px;\n  height: 300px;\n  margin: auto;\n  text-align: center;\n  border-radius: 6px;\n",
            ]))
        ),
        od = g.b.img(
          tr ||
            (tr = Object(d.a)([
              "\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 6px;\n",
            ]))
        ),
        ad = g.b.div(
          ir || (ir = Object(d.a)(["\n  /* margin: 20px; */\n  ", "\n"])),
          O({ width: "0px 20px", display: "flex", flexDirection: "column" })
        ),
        sd = g.b.span(
          rr ||
            (rr = Object(d.a)([
              "\n  font-size: 20px;\n  font-weight: 600;\n  margin-right: 20px;\n  ",
              "\n",
            ])),
          O({ marginRight: "0px" })
        ),
        dd = g.b.select(
          cr ||
            (cr = Object(d.a)([
              "\n  font-size: 17px;\n  padding: 6px;\n  margin-left: 9px;\n  border: 1.5px solid teal;\n  border-radius: 4px;\n  background-color: white;\n  cursor: pointer;\n  outline: none;\n  width: 100px;\n  ",
              "\n",
            ])),
          O({ margin: "10px 0px" })
        ),
        ld = g.b.option(or || (or = Object(d.a)(["\n  font-size: 17px;\n"]))),
        bd = g.b.div(
          ar ||
            (ar = Object(d.a)([
              "\n  width: 90%;\n  padding: 20px;\n  margin: auto;\n",
            ]))
        ),
        jd = g.b.div(
          sr ||
            (sr = Object(d.a)([
              "\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  ",
              "\n",
            ])),
          O({ justifyContent: "center" })
        ),
        pd = g.b.h2(
          dr ||
            (dr = Object(d.a)([
              "\n  font-size: 36px;\n  font-weight: bold;\n  padding: 50px 0px;\n  text-transform: uppercase;\n  color: #ff8147;\n",
            ]))
        ),
        ud = function () {
          var e = Object(m.useLocation)(),
            n = Object(m.useHistory)();
          return (
            o.a.useEffect(
              function () {
                var e = n.listen(function () {
                  window.scrollTo(0, 0);
                });
                return function () {
                  e();
                };
              },
              [e, n]
            ),
            null
          );
        },
        xd = t(197),
        hd = t.p + "static/media/cart-empty.941cb77e.png",
        gd =
          (t(84),
          function () {
            var e,
              n,
              t,
              i,
              r = Object(Ze.c)(function (e) {
                return e.cart;
              }),
              c = Object(Ze.c)(function (e) {
                return e.user;
              }).currentUser,
              o = Object(Ze.b)(),
              a = function (e, n) {
                o(Pe({ productId: n, quantity: "inc" === e ? 1 : -1 }));
              },
              s = function (e) {
                var n =
                  null === r || void 0 === r
                    ? void 0
                    : r.favorite.find(function (n) {
                        return n._id === e;
                      });
                n && o(We(n));
              };
            return Object(sn.jsx)(Od, {
              children: Object(sn.jsxs)(fd, {
                children: [
                  Object(sn.jsxs)(md, {
                    children: [
                      "Your are shipping ",
                      null === r ||
                      void 0 === r ||
                      null === (e = r.favorite) ||
                      void 0 === e
                        ? void 0
                        : e.length,
                    ],
                  }),
                  Object(sn.jsxs)(vd, {
                    children: [
                      Object(sn.jsx)(an.Link, {
                        to: "/",
                        style: { textDecoration: "none" },
                        children: Object(sn.jsx)(yd, {
                          style: {
                            backgroundColor: "teal",
                            color: "#ffffff",
                            border: "none",
                            padding: "10px 20px",
                            borderRadius: "4px",
                            fontSize: "16px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                          },
                          children: "CONTINUE SHOPPING",
                        }),
                      }),
                      Object(sn.jsx)(Ad, {
                        children: Object(sn.jsxs)(wd, {
                          children: [
                            "Your Wishlist (",
                            null === r ||
                            void 0 === r ||
                            null === (n = r.favorite) ||
                            void 0 === n
                              ? void 0
                              : n.length,
                            ")",
                          ],
                        }),
                      }),
                    ],
                  }),
                  Object(sn.jsx)(kd, {
                    children:
                      (null === r ||
                      void 0 === r ||
                      null === (t = r.favorite) ||
                      void 0 === t
                        ? void 0
                        : t.length) > 0
                        ? Object(sn.jsxs)(Cd, {
                            children: [
                              null === r ||
                              void 0 === r ||
                              null === (i = r.favorite) ||
                              void 0 === i
                                ? void 0
                                : i.map(function (e) {
                                    return Object(sn.jsxs)(
                                      Sd,
                                      {
                                        children: [
                                          Object(sn.jsxs)(Rd, {
                                            children: [
                                              Object(sn.jsx)(Wd, {
                                                onClick: function () {
                                                  return s(e._id);
                                                },
                                                children: Object(sn.jsx)(xd.a, {
                                                  className: "icon",
                                                }),
                                              }),
                                              Object(sn.jsx)(zd, {
                                                children: Object(sn.jsx)(Ld, {
                                                  src: e.img,
                                                }),
                                              }),
                                              Object(sn.jsxs)(Ud, {
                                                children: [
                                                  Object(sn.jsxs)(Fd, {
                                                    children: [
                                                      Object(sn.jsx)("b", {
                                                        children: "Product:",
                                                      }),
                                                      Object(sn.jsx)(Bd, {}),
                                                      " ",
                                                      e.title,
                                                      " ",
                                                      Object(sn.jsxs)("b", {
                                                        style: {
                                                          fontSize: "20px",
                                                        },
                                                        children: [
                                                          "x ",
                                                          e.favQuantity,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  Object(sn.jsxs)(Dd, {
                                                    children: [
                                                      Object(sn.jsx)("b", {
                                                        children: "ID:",
                                                      }),
                                                      " ",
                                                      e._id.slice(0, 20),
                                                    ],
                                                  }),
                                                  Object(sn.jsx)(Nd, {
                                                    color: e.color,
                                                  }),
                                                  Object(sn.jsxs)(Yd, {
                                                    children: [
                                                      Object(sn.jsx)("b", {
                                                        children: "Size:",
                                                      }),
                                                      " ",
                                                      e.size,
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          Object(sn.jsxs)(qd, {
                                            children: [
                                              Object(sn.jsxs)(Hd, {
                                                children: [
                                                  Object(sn.jsx)(Xd, {
                                                    children: Object(sn.jsx)(
                                                      x.a,
                                                      {
                                                        onClick: function () {
                                                          return e.favQuantity >
                                                            1
                                                            ? a("dec", e._id)
                                                            : console.log(
                                                                "can zero"
                                                              );
                                                        },
                                                      }
                                                    ),
                                                  }),
                                                  Object(sn.jsx)(Md, {
                                                    children: e.favQuantity,
                                                  }),
                                                  Object(sn.jsx)(Xd, {
                                                    children: Object(sn.jsx)(
                                                      h.a,
                                                      {
                                                        onClick: function () {
                                                          return a(
                                                            "inc",
                                                            e._id
                                                          );
                                                        },
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                              Object(sn.jsxs)(Jd, {
                                                children: [
                                                  "\u09f3 ",
                                                  e.price * e.favQuantity,
                                                ],
                                              }),
                                              Object(sn.jsx)(Ed, {
                                                onClick: function () {
                                                  return (function (e, n) {
                                                    var t =
                                                      null === r || void 0 === r
                                                        ? void 0
                                                        : r.favorite.find(
                                                            function (n) {
                                                              return (
                                                                n._id === e
                                                              );
                                                            }
                                                          );
                                                    try {
                                                      o(
                                                        Ye(
                                                          Object(l.a)(
                                                            Object(l.a)({}, t),
                                                            {},
                                                            {
                                                              quantity: n,
                                                              color:
                                                                null === t ||
                                                                void 0 === t
                                                                  ? void 0
                                                                  : t.color[0],
                                                              size:
                                                                null === t ||
                                                                void 0 === t
                                                                  ? void 0
                                                                  : t.size[0],
                                                              email:
                                                                null === c ||
                                                                void 0 === c
                                                                  ? void 0
                                                                  : c.email,
                                                            }
                                                          )
                                                        )
                                                      ),
                                                        s(e),
                                                        ot.a.fire({
                                                          title:
                                                            "Added to cart successfully",
                                                          icon: "success",
                                                          confirmButtonColor:
                                                            "teal",
                                                        });
                                                    } catch (i) {
                                                      console.log(i),
                                                        _e.toast.error(
                                                          "Something went wrong! May be occurred ",
                                                          i
                                                        );
                                                    }
                                                  })(e._id, e.favQuantity);
                                                },
                                                children: "Add To Cart",
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      e._id
                                    );
                                  }),
                              Object(sn.jsx)("br", {}),
                              Object(sn.jsx)(Pd, {}),
                              r.favorite.length
                                ? Object(sn.jsx)(Id, {
                                    onClick: function () {
                                      ot.a
                                        .fire({
                                          title: "Are you sure?",
                                          text: "You won't be able to revert this!",
                                          icon: "warning",
                                          showCancelButton: !0,
                                          confirmButtonColor: "teal",
                                          cancelButtonColor: "teal",
                                          confirmButtonText: "Yes, delete it!",
                                        })
                                        .then(function (e) {
                                          e.isConfirmed &&
                                            (o(Je()),
                                            ot.a.fire({
                                              title: "Deleted!",
                                              text: "Your Order has been deleted.",
                                              icon: "success",
                                              confirmButtonColor: "teal",
                                            }));
                                        });
                                    },
                                    children: "Clear Cart",
                                  })
                                : "",
                            ],
                          })
                        : Object(sn.jsx)(Td, {
                            children: Object(sn.jsx)(Qd, { src: hd }),
                          }),
                  }),
                ],
              }),
            });
          }),
        Od = g.b.div(lr || (lr = Object(d.a)([""]))),
        fd = g.b.div(
          br ||
            (br = Object(d.a)([
              "\n  padding: 20px;\n  width: 90%;\n  margin: 0 auto;\n  ",
              "\n",
            ])),
          O({})
        ),
        md = g.b.h1(
          jr ||
            (jr = Object(d.a)([
              "\n  font-weight: 300;\n  text-align: center;\n",
            ]))
        ),
        vd = g.b.div(
          pr ||
            (pr = Object(d.a)([
              "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  @media screen and (max-width: 600px) {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n",
            ]))
        ),
        yd = g.b.button(
          ur ||
            (ur = Object(d.a)([
              "\n  padding: 10px;\n  font-weight: 600;\n  cursor: pointer;\n  border: ",
              ";\n  background-color: ",
              ";\n  color: ",
              ";\n  a {\n    text-decoration: none;\n  }\n",
            ])),
          function (e) {
            return "filled" === e.type && "none";
          },
          function (e) {
            return "filled" === e.type ? "black" : "transparent";
          },
          function (e) {
            return "filled" === e.type && "white";
          }
        ),
        Ad = g.b.div(
          xr || (xr = Object(d.a)(["\n  ", "\n"])),
          O({ display: "none" })
        ),
        wd = g.b.span(
          hr ||
            (hr = Object(d.a)([
              "\n  text-decoration: underline;\n  cursor: pointer;\n  margin: 0px 10px;\n",
            ]))
        ),
        kd = g.b.div(
          gr ||
            (gr = Object(d.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  ",
              "\n",
            ])),
          O({
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "-20px",
          })
        ),
        Cd = g.b.div(
          Or || (Or = Object(d.a)(["\n  flex: 3;\n  ", "\n"])),
          O({ flex: 1 })
        ),
        Sd = g.b.div(
          fr ||
            (fr = Object(d.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  ",
              "\n",
            ])),
          O({ flexDirection: "column" })
        ),
        Bd = g.b.br(
          mr || (mr = Object(d.a)(["\n  display: none;\n  ", "\n"])),
          O({ display: "block" })
        ),
        Id = g.b.button(
          vr ||
            (vr = Object(d.a)([
              "\n  background-color: #ff0000;\n  color: #ffffff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 4px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.2s ease-in-out;\n  margin-left: 11px;\n  margin-top: 12px;\n  &:hover {\n    background-color: #cc0000;\n  }\n  ",
              "\n",
            ])),
          O({ marginLeft: "95px" })
        ),
        Ed = g.b.button(
          yr ||
            (yr = Object(d.a)([
              "\n  border: 1px solid teal;\n  background-color: teal;\n  padding: 12px 22px;\n  margin-top: 12px;\n  border-radius: 11px;\n  outline: none;\n  cursor: pointer;\n  color: #fff;\n  transition: ease 0.3s;\n  &:hover {\n    background-color: transparent;\n    color: teal;\n  }\n",
            ]))
        ),
        Rd = g.b.div(
          Ar || (Ar = Object(d.a)(["\n  display: flex;\n  flex: 2;\n"]))
        ),
        zd = g.b.div(
          wr || (wr = Object(d.a)(["\n  width: 200px;\n  height: 200px;\n"]))
        ),
        Ld = g.b.img(
          kr ||
            (kr = Object(d.a)([
              "\n  height: 100%;\n  width: 100%;\n\n  ",
              "\n",
            ])),
          O({ width: "70%", paddingLeft: "55px" })
        ),
        Ud = g.b.div(
          Cr ||
            (Cr = Object(d.a)([
              "\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  margin-left: 20px;\n  ",
              "\n",
            ])),
          O({ marginLeft: "-16px" })
        ),
        Qd = g.b.img(
          Sr ||
            (Sr = Object(d.a)([
              "\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  ",
              "\n",
            ])),
          O({ width: "80%" })
        ),
        Td = g.b.div(
          Br ||
            (Br = Object(d.a)([
              "\n  max-width: 400px;\n  max-height: 400px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n",
            ]))
        ),
        Fd = g.b.span(Ir || (Ir = Object(d.a)([""]))),
        Dd = g.b.span(Er || (Er = Object(d.a)([""]))),
        Nd = g.b.div(
          Rr ||
            (Rr = Object(d.a)([
              "\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: ",
              ";\n  border: 1px solid gray !important;\n",
            ])),
          function (e) {
            return e.color;
          }
        ),
        Yd = g.b.span(zr || (zr = Object(d.a)([""]))),
        qd = g.b.div(
          Lr ||
            (Lr = Object(d.a)([
              "\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  ",
              "\n",
            ])),
          O({ marginBottom: "20px" })
        ),
        Hd = g.b.div(
          Ur ||
            (Ur = Object(d.a)([
              "\n  display: flex;\n  align-items: center;\n  gap: 11px;\n",
            ]))
        ),
        Md = g.b.div(
          Qr ||
            (Qr = Object(d.a)([
              "\n  font-size: 24px;\n  margin: 5px;\n  ",
              "\n",
            ])),
          O({ margin: "5px 15px" })
        ),
        Jd = g.b.div(
          Tr ||
            (Tr = Object(d.a)([
              "\n  font-size: 30px;\n  font-weight: 200;\n  ",
              "\n",
            ])),
          O({ marginBottom: "20px" })
        ),
        Pd = g.b.hr(
          Fr ||
            (Fr = Object(d.a)([
              "\n  background-color: #eee;\n  border: none;\n  height: 1px;\n",
            ]))
        ),
        Xd = g.b.div(
          Dr ||
            (Dr = Object(d.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n  padding: 4px;\n  border: none;\n  border-radius: 100%;\n  /* background-color: #3c3d3e; */\n  color: #3c3d3e;\n  cursor: pointer;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.148), 0 4px 15px rgba(0, 0, 0, 0.116);\n",
            ]))
        ),
        Wd = g.b.div(
          Nr ||
            (Nr = Object(d.a)([
              '\n  cursor: pointer;\n  position: relative;\n  width: 25px;\n  height: 25px;\n  margin-right: -10px;\n  margin-top: -10px;\n  background-color: white;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.148), 0 4px 15px rgba(0, 0, 0, 0.116);\n  border: 1.5px solid teal;\n  border-radius: 15px;\n  transition: "background-color 0.3s";\n  .icon {\n    color: teal;\n  }\n  &:hover {\n    background-color: teal;\n    .icon {\n      color: white;\n    }\n  }\n  ',
              "\n",
            ])),
          O({
            position: "relative",
            marginLeft: "90px",
            marginTop: "-10px",
            marginBottom: "-10px",
            marginRight: "-70px",
          })
        ),
        Vd = t(51),
        Gd = function (e) {
          var n = e.children,
            t = Object(Vd.a)(e, ["children"]),
            i = Object(Ze.c)(function (e) {
              return e.user.currentUser;
            });
          return Object(Ze.c)(function (e) {
            return e.user.isLoading;
          })
            ? Object(sn.jsx)("div", { children: "Loading..." })
            : Object(sn.jsx)(
                m.Route,
                Object(l.a)(
                  Object(l.a)({}, t),
                  {},
                  {
                    render: function (e) {
                      var t = e.location;
                      return i
                        ? n
                        : Object(sn.jsx)(m.Redirect, {
                            to: { pathname: "/login", state: { from: t } },
                          });
                    },
                  }
                )
              );
        },
        Kd = t(200),
        Zd = t(199),
        _d = t(201),
        $d = t(202),
        el = t(203),
        nl = t(204),
        tl = t(205),
        il = t.p + "static/media/logo.f271aebe.jpeg",
        rl = t(57),
        cl = t.n(rl),
        ol = t(198),
        al = function (e) {
          var n = e.searchPopup,
            t = e.setSearchPopup,
            i = e.searchValue,
            r = Object(c.useState)([]),
            o = Object(u.a)(r, 2),
            a = o[0],
            s = o[1],
            d = Object(c.useState)([]),
            l = Object(u.a)(d, 2),
            b = l[0],
            x = l[1];
          console.log(i, "value");
          return (
            Object(c.useEffect)(function () {
              x(!0),
                (function () {
                  var e = Object(p.a)(
                    j.a.mark(function e() {
                      var n;
                      return j.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  y.a.get(
                                    "https://api.rockmetaltshirt.com/api/products/?searchTerm=".concat(
                                      i
                                    )
                                  )
                                );
                              case 3:
                                (n = e.sent),
                                  s(n.data.data),
                                  x(!1),
                                  (e.next = 11);
                                break;
                              case 8:
                                (e.prev = 8), (e.t0 = e.catch(0)), x(!1);
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 8]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()();
            }, []),
            Object(sn.jsx)("div", {
              children: Object(sn.jsx)(sl, {
                isOpenProfile: n,
                children: Object(sn.jsxs)(dl, {
                  children: [
                    Object(sn.jsxs)("div", {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                      },
                      children: [
                        Object(sn.jsx)("h2", {
                          style: { margin: "25px 0" },
                          children: " Your Searched Products",
                        }),
                        Object(sn.jsx)(ll, {
                          onClick: function () {
                            t(!1);
                          },
                          children: Object(sn.jsx)(ol.a, {}),
                        }),
                      ],
                    }),
                    b
                      ? Object(sn.jsx)("p", { children: "Loading..." })
                      : Object(sn.jsx)("div", {
                          children:
                            (null === a || void 0 === a ? void 0 : a.length) > 0
                              ? Object(sn.jsx)("div", {
                                  style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: "15px",
                                    flexWrap: "wrap",
                                  },
                                  children: a.map(function (e) {
                                    var n;
                                    return Object(sn.jsxs)(nn.b, {
                                      to: "/product/".concat(e._id),
                                      onClick: function () {
                                        return t(!1);
                                      },
                                      style: {
                                        width: "250px",
                                        minHeight: "200px",
                                        border: "1px solid",
                                        padding: "10px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                        textAlign: "center",
                                      },
                                      children: [
                                        Object(sn.jsx)("img", {
                                          style: {
                                            height: "100px",
                                            width: "80px",
                                          },
                                          src:
                                            null === e || void 0 === e
                                              ? void 0
                                              : e.img,
                                          alt: "",
                                        }),
                                        Object(sn.jsx)("h2", {
                                          children:
                                            null === e || void 0 === e
                                              ? void 0
                                              : e.title,
                                        }),
                                        Object(sn.jsx)("p", {
                                          children:
                                            null === e ||
                                            void 0 === e ||
                                            null === (n = e.desc) ||
                                            void 0 === n
                                              ? void 0
                                              : n.slice(0, 100),
                                        }),
                                        Object(sn.jsxs)("small", {
                                          style: { marginTop: "25px" },
                                          children: ["Price: ", e.price],
                                        }),
                                      ],
                                    });
                                  }),
                                })
                              : Object(sn.jsx)("div", {
                                  children: Object(sn.jsx)("h2", {
                                    children: "No Item Found",
                                  }),
                                }),
                        }),
                  ],
                }),
              }),
            })
          );
        },
        sl = g.b.div(
          Yr ||
            (Yr = Object(d.a)([
              "\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: ",
              ";\n  justify-content: center;\n  align-items: center;\n  z-index: 99999999;\n",
            ])),
          function (e) {
            return e.isOpenProfile ? "flex" : "none";
          }
        ),
        dl = g.b.div(
          qr ||
            (qr = Object(d.a)([
              "\n  width: 80%;\n  height: 80vh; /* Limit the maximum height of the modal content */\n  overflow-y: auto; /* Enable vertical scrolling if content exceeds viewport height */\n  margin: auto;\n  background-color: white;\n  border-radius: 5px;\n  padding: 20px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n  z-index: 999999999999999;\n  a {\n    text-decoration: none;\n    color: black;\n  }\n",
            ]))
        ),
        ll = g.b.div(
          Hr ||
            (Hr = Object(d.a)([
              "\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n  background-color: #ececec;\n",
            ]))
        ),
        bl = function () {
          var e = Object(Ze.c)(function (e) {
              return e.user;
            }).currentUser,
            n = Object(Ze.b)(),
            t = Object(m.useLocation)(),
            i = t.pathname.split("/").includes("payment"),
            r = t.pathname.split("/").includes("login"),
            o = t.pathname.split("/").includes("register"),
            a = Object(Ze.c)(function (e) {
              return e.cart;
            }),
            s = Object(c.useState)(""),
            d = Object(u.a)(s, 2),
            l = d[0],
            b = d[1],
            j = Object(c.useState)(!1),
            p = Object(u.a)(j, 2),
            x = (p[0], p[1], Object(c.useState)(!1)),
            h = Object(u.a)(x, 2),
            g = h[0],
            O = h[1],
            f = Object(c.useState)(!1),
            v = Object(u.a)(f, 2),
            y = v[0],
            A = v[1],
            w = Object(c.useState)(!0),
            k = Object(u.a)(w, 2),
            C = k[0],
            S = k[1],
            B = function (e) {
              b(e.target.value);
            },
            I = function () {
              console.log("Searching for:", l), O(!g);
            },
            E = function () {
              A(!y);
            },
            R = Object(c.useRef)(null),
            z = function (e) {
              R.current && !R.current.contains(e.target) && O(!1);
            };
          Object(c.useEffect)(function () {
            return (
              document.addEventListener("mousedown", z),
              function () {
                document.removeEventListener("mousedown", z);
              }
            );
          }, []);
          var L = e && cl.a.url(e.email),
            U = function () {
              A(!y), n(Ss()), n(Ve());
            };
          return Object(sn.jsxs)("div", {
            style: { display: i ? "none" : "" },
            children: [
              Object(sn.jsxs)(gl, {
                children: [
                  Object(sn.jsx)(Bl, {
                    children: Object(sn.jsx)(an.Link, {
                      to: "/",
                      style: { color: "teal", textDecoration: "none" },
                      children: Object(sn.jsx)(Ol, {
                        children: Object(sn.jsx)("img", { src: il, alt: "" }),
                      }),
                    }),
                  }),
                  Object(sn.jsx)(Il, {
                    children: Object(sn.jsxs)(fl, {
                      children: [
                        Object(sn.jsx)(ml, {
                          type: "text",
                          placeholder: "Search...",
                          value: l,
                          onChange: B,
                        }),
                        Object(sn.jsx)(vl, {
                          onClick: function () {
                            S(!0);
                          },
                          disabled: !l,
                          children: Object(sn.jsx)(Zd.a, {
                            style: {
                              color: "white",
                              fontSize: 20,
                              textAlign: "center",
                            },
                          }),
                        }),
                      ],
                    }),
                  }),
                  Object(sn.jsxs)(El, {
                    children: [
                      Object(sn.jsx)(an.Link, {
                        to: "/cart",
                        children: Object(sn.jsx)(Sl, {
                          title: "Cart",
                          children: Object(sn.jsx)(Kd.a, {
                            badgeContent: a.quantity,
                            color: "teal",
                            children: Object(sn.jsx)(rn.a, {
                              style: { color: "teal" },
                            }),
                          }),
                        }),
                      }),
                      Object(sn.jsx)(an.Link, {
                        to: "/wishList",
                        children: Object(sn.jsx)(Sl, {
                          title: "WhishList",
                          children: Object(sn.jsx)(Kd.a, {
                            badgeContent: a.favQuantity,
                            color: "teal",
                            children: Object(sn.jsx)(on.a, {
                              style: { color: "teal" },
                            }),
                          }),
                        }),
                      }),
                      Object(sn.jsx)(Al, {
                        style: { display: r || o ? "none" : "" },
                        children: Object(sn.jsx)("a", {
                          className: "whatsapplink",
                          href: "https://api.whatsapp.com/send?phone=8801888422116",
                          target: "_blank",
                          rel: "noreferrer",
                          children: Object(sn.jsx)(_d.a, {
                            style: {
                              color: "white",
                              fontSize: "44px",
                              marginLeft: "10px",
                              marginTop: "2px",
                            },
                          }),
                        }),
                      }),
                      (null === e || void 0 === e ? void 0 : e.email)
                        ? Object(sn.jsx)(Sl, {
                            onClick: E,
                            style: { cursor: "pointer" },
                            children: L
                              ? Object(sn.jsx)("img", {
                                  src: L,
                                  alt: "profile",
                                  style: {
                                    height: "30px",
                                    width: "30px",
                                    borderRadius: "15px",
                                    objectFit: "contain",
                                  },
                                })
                              : Object(sn.jsx)($d.a, {
                                  style: { color: "teal" },
                                }),
                          })
                        : Object(sn.jsxs)(yl, {
                            children: [
                              Object(sn.jsx)(an.Link, {
                                to: "/register",
                                style: {
                                  textDecoration: "none",
                                  fontWeight: "semibold",
                                },
                                children: Object(sn.jsx)(wl, {
                                  children: "Register",
                                }),
                              }),
                              Object(sn.jsx)(an.Link, {
                                to: "/login",
                                style: {
                                  textDecoration: "none",
                                  fontWeight: "semibold",
                                },
                                children: Object(sn.jsx)(kl, {
                                  children: "Sign In",
                                }),
                              }),
                            ],
                          }),
                    ],
                  }),
                ],
              }),
              Object(sn.jsxs)(hl, {
                children: [
                  Object(sn.jsx)(Bl, {
                    children: Object(sn.jsx)(an.Link, {
                      to: "/",
                      style: { color: "teal", textDecoration: "none" },
                      children: Object(sn.jsx)(Ol, {
                        children: Object(sn.jsx)("img", { src: il, alt: "" }),
                      }),
                    }),
                  }),
                  Object(sn.jsx)(Al, {
                    style: { display: r || o ? "block" : "" },
                    children: Object(sn.jsx)("a", {
                      href: "https://api.whatsapp.com/send?phone=8801888422116",
                      target: "_blank",
                      rel: "noreferrer",
                      children: Object(sn.jsx)(_d.a, {
                        style: {
                          color: "white",
                          fontSize: "44px",
                          marginLeft: "10px",
                          marginTop: "2px",
                        },
                      }),
                    }),
                  }),
                  Object(sn.jsxs)(sn.Fragment, {
                    children: [
                      " ",
                      Object(sn.jsx)("button", {
                        style: {
                          border: "none",
                          outline: "none",
                          backgroundColor: "transparent",
                          marginRight: "25px",
                        },
                        onClick: I,
                        children: Object(sn.jsx)(Zd.a, {}),
                      }),
                    ],
                  }),
                ],
              }),
              Object(sn.jsx)(jl, {
                isOpen: g,
                children: Object(sn.jsx)(pl, {
                  ref: R,
                  children: Object(sn.jsxs)(fl, {
                    children: [
                      Object(sn.jsx)(ml, {
                        type: "text",
                        placeholder: "Search...",
                        value: l,
                        onChange: B,
                      }),
                      Object(sn.jsx)(vl, {
                        onClick: I,
                        disabled: !l,
                        children: Object(sn.jsx)(Zd.a, {
                          style: {
                            color: "white",
                            fontSize: 20,
                            textAlign: "center",
                          },
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              Object(sn.jsx)(ul, {
                isOpenProfile: y,
                children: Object(sn.jsxs)(xl, {
                  children: [
                    Object(sn.jsxs)(Rl, {
                      children: [
                        Object(sn.jsx)(el.a, {
                          onClick: E,
                          style: {
                            position: "absolute",
                            right: "3px",
                            top: "6px",
                            background: "teal",
                            borderRadius: "20px",
                            color: "white",
                            marginRight: "4px",
                            cursor: "pointer",
                            title: "Close",
                          },
                        }),
                        Object(sn.jsxs)(Cl, {
                          children: [
                            L
                              ? Object(sn.jsx)("img", {
                                  src: L,
                                  alt: "profile",
                                  style: {
                                    height: "50px",
                                    borderRadius: "25px",
                                    objectFit: "contain",
                                  },
                                })
                              : Object(sn.jsx)($d.a, {
                                  style: { color: "teal" },
                                }),
                            Object(sn.jsxs)(Ql, {
                              children: [
                                Object(sn.jsxs)("h3", {
                                  style: { color: "teal", marginBottom: "3px" },
                                  children: [
                                    null === e || void 0 === e
                                      ? void 0
                                      : e.name,
                                    Object(sn.jsx)("br", {}),
                                  ],
                                }),
                                Object(sn.jsx)("span", {
                                  style: { color: "teal" },
                                  children:
                                    null === e || void 0 === e
                                      ? void 0
                                      : e.email,
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(sn.jsx)(zl, {}),
                      ],
                    }),
                    Object(sn.jsxs)(Ll, {
                      children: [
                        Object(sn.jsx)(an.Link, {
                          to: "/orders",
                          onClick: function () {
                            return A(!1);
                          },
                          children: Object(sn.jsxs)(Ul, {
                            children: [Object(sn.jsx)(nl.a, {}), "Orders"],
                          }),
                        }),
                        Object(sn.jsxs)(Ul, {
                          onClick: U,
                          children: [
                            Object(sn.jsx)(tl.a, { onClick: U }),
                            " Log Out",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              C &&
                (null === l || void 0 === l ? void 0 : l.length) >= 3 &&
                Object(sn.jsx)(al, {
                  searchPopup: C,
                  setSearchPopup: S,
                  searchValue: l,
                }),
            ],
          });
        },
        jl = g.b.div(
          Mr ||
            (Mr = Object(d.a)([
              "\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: ",
              ";\n  z-index: 99999999;\n",
            ])),
          function (e) {
            return e.isOpen ? "block" : "none";
          }
        ),
        pl = g.b.div(
          Jr ||
            (Jr = Object(d.a)([
              "\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 20px;\n  background-color: white;\n  border-radius: 5px;\n  width: 80%;\n  height: auto;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n  z-index: 999999999999999;\n",
            ]))
        ),
        ul = g.b.div(
          Pr ||
            (Pr = Object(d.a)([
              "\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: ",
              ";\n  z-index: 99999999;\n",
            ])),
          function (e) {
            return e.isOpenProfile ? "block" : "none";
          }
        ),
        xl = g.b.div(
          Xr ||
            (Xr = Object(d.a)([
              "\n  position: absolute;\n  top: 40%;\n  right: 1%;\n  transform: translate(0%, -77%);\n  padding: 20px;\n  background-color: white;\n  border-radius: 5px;\n  width: 250px;\n  height: auto;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n  z-index: 999999999999999;\n\n  a {\n    text-decoration: none;\n  }\n\n  @media screen and (max-width: 500px) {\n    width: 50%;\n    top: 31%;\n  }\n",
            ]))
        ),
        hl = g.b.nav(
          Wr ||
            (Wr = Object(d.a)([
              "\n  display: none;\n  @media (max-width: 768px) {\n    position: fixed; //Make the Navbar sticky\n    top: 0; /* Position it at the top */\n    width: 96%;\n    z-index: 1000;\n    background-color: #ffffff;\n    color: teal;\n    padding: 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n",
            ]))
        ),
        gl = g.b.nav(
          Vr ||
            (Vr = Object(d.a)([
              "\n  position: fixed;\n  top: 0;\n  width: 96%;\n  height: 50px;\n  z-index: 1000;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  background-color: #ffffff;\n  color: teal;\n  margin-bottom: 15px;\n  @media (max-width: 768px) {\n    padding: 1rem;\n    display: none;\n  }\n",
            ]))
        ),
        Ol = g.b.div(
          Gr ||
            (Gr = Object(d.a)([
              "\n  height: 42px;\n  width: 120px;\n  ",
              "\n  & img {\n    height: 42px;\n    ",
              "\n  }\n",
            ])),
          O({ width: "120px", height: "42px", marginBottom: "15px" }),
          O({ width: "auto" })
        ),
        fl = g.b.div(
          Kr ||
            (Kr = Object(d.a)([
              "\n  display: flex;\n  align-items: center;\n  border: 0.5px solid lightgray;\n  border-radius: 18px;\n  margin-left: 25px;\n  padding: 3px;\n\n  @media (max-width: 768px) {\n    /* margin-top: 1rem; */\n  }\n",
            ]))
        ),
        ml = g.b.input(
          Zr ||
            (Zr = Object(d.a)([
              "\n  padding: 0.5rem;\n  border: none;\n  border-radius: 4px;\n  margin-right: 0.5rem;\n  outline: none;\n  flex: 1;\n  margin-left: 7px;\n  background: transparent;\n  ",
              "\n",
            ])),
          O({ width: "50px" })
        ),
        vl = g.b.button(
          _r ||
            (_r = Object(d.a)([
              "\n  color: #757171;\n  border: none;\n  border-radius: 100%;\n  padding: 6px 8px;\n  cursor: pointer;\n  background-color: ",
              ";\n  &:hover {\n    background-color: ",
              ";\n  }\n",
            ])),
          function (e) {
            return e.disabled ? "#d1caca" : "teal";
          },
          function (e) {
            return e.disabled ? "#d1caca" : "teal";
          }
        ),
        yl = g.b.div(
          $r ||
            ($r = Object(d.a)([
              "\n  display: flex;\n  align-items: center;\n\n  @media (max-width: 768px) {\n    margin-top: 1rem;\n  }\n",
            ]))
        ),
        Al = g.b.div(
          ec ||
            (ec = Object(d.a)([
              "\n  position: fixed;\n  background-color: #34d126;\n  border-top-left-radius: 30px;\n  border-bottom-left-radius: 30px;\n  bottom: 50%;\n  width: 55px;\n  height: 50px;\n  z-index: 1000;\n  right: 0;\n",
            ]))
        ),
        wl = g.b.button(
          nc ||
            (nc = Object(d.a)([
              "\n  padding: 0.5rem 1rem;\n  background-color: teal;\n  border: none;\n  margin-right: 1rem;\n  cursor: pointer;\n  border: 1.3px solid teal;\n  border-radius: 4px;\n  transition: ease-in-out 0.5s;\n  color: white;\n  &:hover {\n    background-color: transparent;\n    color: teal;\n  }\n  a {\n    color: #fff;\n    text-decoration: none;\n    font-weight: 500;\n  }\n",
            ]))
        ),
        kl =
          (g.b.div(
            tc ||
              (tc = Object(d.a)([
                "\n  color: white;\n  padding: 5px 6px;\n  width: 100%;\n  margin-bottom: 13px;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n  background-color: teal;\n  &:hover {\n    cursor: pointer;\n    border-radius: 4px;\n    width: 100%;\n  }\n",
              ]))
          ),
          g.b.div(
            ic ||
              (ic = Object(d.a)([
                "\n  padding: 0.4rem 1rem;\n  background-color: teal;\n  border: none;\n  margin-right: 1rem;\n  cursor: pointer;\n  border: 1.3px solid teal;\n  border-radius: 4px;\n  transition: ease-in-out 0.5s;\n  color: white;\n  &:hover {\n    background-color: transparent;\n    color: teal;\n  }\n  a {\n    color: #fff;\n    text-decoration: none;\n    font-weight: 500;\n  }\n",
              ]))
          )),
        Cl =
          (g.b.div(
            rc ||
              (rc = Object(d.a)([
                "\n  padding: 0.4rem 1rem;\n  background-color: teal;\n  border: none;\n  margin-right: 1rem;\n  cursor: pointer;\n  border: 1.3px solid teal;\n  border-radius: 4px;\n  transition: ease-in-out 0.5s;\n  color: white;\n  a {\n    color: #fff;\n    text-decoration: none;\n    font-weight: 500;\n  }\n",
              ]))
          ),
          g.b.div(
            cc ||
              (cc = Object(d.a)([
                "\n  gap: 5px;\n\n  margin: 0px auto 0px 0px;\n  height: 64px;\n  border: none;\n  border-radius: 100%;\n  display: flex;\n  justify-content: end;\n  align-items: center;\n",
              ]))
          )),
        Sl = g.b.div(
          oc || (oc = Object(d.a)(["\n  padding: 1rem;\n  ", "\n"])),
          O({ paddingRight: "2px" })
        ),
        Bl = g.b.div(
          ac ||
            (ac = Object(d.a)([
              "\n  flex: 1;\n  display: flex;\n  align-items: center;\n",
            ]))
        ),
        Il = g.b.div(
          sc ||
            (sc = Object(d.a)([
              "\n  flex: 1;\n  text-align: center;\n  justify-content: center;\n",
            ]))
        ),
        El = g.b.div(
          dc ||
            (dc = Object(d.a)([
              "\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  ",
              "\n",
            ])),
          O({ flex: 2, justifyContent: "center" })
        ),
        Rl = g.b.div(
          lc ||
            (lc = Object(d.a)([
              "\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  justify-content: center;\n  align-items: center;\n",
            ]))
        ),
        zl = g.b.hr(
          bc ||
            (bc = Object(d.a)([
              "\n  background-color: teal;\n  color: teal;\n  height: 1px;\n  width: 100%;\n",
            ]))
        ),
        Ll = g.b.div(
          jc ||
            (jc = Object(d.a)([
              "\n  text-align: left;\n  margin-top: 10px;\n  font-weight: 700;\n",
            ]))
        ),
        Ul = g.b.div(
          pc ||
            (pc = Object(d.a)([
              "\n  color: teal;\n  padding: 5px 6px;\n  margin-bottom: 13px;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n  &&:hover {\n    background-color: teal;\n    cursor: pointer;\n    border-radius: 4px;\n    color: white;\n    width: 100%;\n  }\n",
            ]))
        ),
        Ql = g.b.div(uc || (uc = Object(d.a)([""]))),
        Tl = t(206),
        Fl = t(207),
        Dl = t(208),
        Nl = t(209),
        Yl = t(210),
        ql = t(211),
        Hl = t(212),
        Ml = function () {
          var e = Object(m.useLocation)()
            .pathname.split("/")
            .includes("payment");
          return Object(sn.jsxs)(Pl, {
            style: { display: e ? "none" : "" },
            children: [
              Object(sn.jsxs)(Jl, {
                children: [
                  Object(sn.jsxs)(Xl, {
                    children: [
                      Object(sn.jsx)(Wl, {
                        children: Object(sn.jsx)("img", { src: il, alt: "" }),
                      }),
                      Object(sn.jsx)(Vl, {
                        children:
                          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\u2019t look even slightly believable.",
                      }),
                      Object(sn.jsxs)(Gl, {
                        children: [
                          Object(sn.jsx)(Kl, {
                            color: "3B5999",
                            children: Object(sn.jsx)(nn.b, {
                              to: "https://www.facebook.com/profile.php?id=100063477416591&mibextid=9R9pXO",
                              children: Object(sn.jsx)(Tl.a, {}),
                            }),
                          }),
                          Object(sn.jsx)(Kl, {
                            color: "E4405F",
                            children: Object(sn.jsx)(nn.b, {
                              to: "/",
                              children: Object(sn.jsx)(Fl.a, {}),
                            }),
                          }),
                          Object(sn.jsx)(Kl, {
                            color: "55ACEE",
                            children: Object(sn.jsx)(nn.b, {
                              to: "/",
                              children: Object(sn.jsx)(Dl.a, {}),
                            }),
                          }),
                          Object(sn.jsx)(Kl, {
                            color: "E60023",
                            children: Object(sn.jsx)(nn.b, {
                              to: "/",
                              children: Object(sn.jsx)(Nl.a, {}),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(sn.jsxs)(Zl, {
                    children: [
                      Object(sn.jsx)(_l, { children: "Useful Links" }),
                      Object(sn.jsxs)($l, {
                        children: [
                          Object(sn.jsx)(nn.b, { to: "/", children: " Home" }),
                          Object(sn.jsx)(nn.b, {
                            to: "/cart",
                            children: " Cart",
                          }),
                          Object(sn.jsx)(nn.b, {
                            to: "/",
                            children: " Man Fashion",
                          }),
                          Object(sn.jsx)(nn.b, {
                            to: "/",
                            children: " Woman Fashion",
                          }),
                          Object(sn.jsx)(nn.b, {
                            to: "/",
                            children: " Accessories",
                          }),
                          Object(sn.jsx)(nn.b, {
                            to: "/",
                            children: "My Account",
                          }),
                          Object(sn.jsx)(nn.b, {
                            to: "/wishlist",
                            children: " Wishlist",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(sn.jsxs)(eb, {
                    children: [
                      Object(sn.jsx)(_l, { children: "Contact" }),
                      Object(sn.jsxs)(rb, {
                        children: [
                          Object(sn.jsx)(Yl.a, {
                            style: { marginRight: "10px" },
                          }),
                          " University Building, Highway Road",
                        ],
                      }),
                      Object(sn.jsxs)(rb, {
                        children: [
                          Object(sn.jsx)(ql.a, {
                            style: { marginRight: "10px" },
                          }),
                          " +8801888422116",
                        ],
                      }),
                      Object(sn.jsxs)(rb, {
                        children: [
                          Object(sn.jsx)(Hl.a, {
                            style: { marginRight: "10px" },
                          }),
                          " ",
                          "rockmetaltshirt786@gmail.com",
                        ],
                      }),
                      Object(sn.jsx)(cb, {
                        src: "https://i.ibb.co/Qfvn4z6/payment.png",
                      }),
                    ],
                  }),
                  Object(sn.jsxs)(nb, {
                    children: [
                      Object(sn.jsx)("img", {
                        style: { width: "90px", height: "90px" },
                        src: "https://shop.adarbepari.com/wp-content/uploads/2020/06/jongolei-mongol.jpg",
                        alt: "",
                      }),
                      Object(sn.jsx)("img", {
                        style: { width: "90px", height: "90px" },
                        src: "https://shop.adarbepari.com/wp-content/uploads/2020/06/artcell-tshirt.jpg",
                        alt: "",
                      }),
                      Object(sn.jsx)("img", {
                        style: { width: "90px", height: "90px" },
                        src: "https://shop.adarbepari.com/wp-content/uploads/2020/07/bandarban-sublimation-tshirt.jpg",
                        alt: "",
                      }),
                      Object(sn.jsx)("img", {
                        style: { width: "90px", height: "90px" },
                        src: "https://shop.adarbepari.com/wp-content/uploads/2020/01/kath-golaper-sadar-maya.jpg",
                        alt: "",
                      }),
                      Object(sn.jsx)("img", {
                        style: { width: "90px", height: "90px" },
                        src: "https://shop.adarbepari.com/wp-content/uploads/2019/04/jadur-shohor-green.jpg",
                        alt: "",
                      }),
                      Object(sn.jsx)("img", {
                        style: { width: "90px", height: "90px" },
                        src: "https://shop.adarbepari.com/wp-content/uploads/2020/09/bahanno-tash.jpg",
                        alt: "",
                      }),
                    ],
                  }),
                ],
              }),
              Object(sn.jsxs)(tb, {
                children: [
                  Object(sn.jsx)(ib, {}),
                  Object(sn.jsx)("p", {
                    children: "\xa9 2023 Rock Metal. All Rights Reserved. ",
                  }),
                ],
              }),
            ],
          });
        },
        Jl = g.b.div(
          xc ||
            (xc = Object(d.a)([
              "\n  width: 90%;\n  margin: 150px auto 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ",
              "\n",
            ])),
          O({ flexDirection: "column" })
        ),
        Pl = g.b.div(
          hc || (hc = Object(d.a)(["\n  ", "\n"])),
          O({ display: "none" })
        ),
        Xl = g.b.div(
          gc ||
            (gc = Object(d.a)([
              "\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n",
            ]))
        ),
        Wl = g.b.h1(
          Oc || (Oc = Object(d.a)(["\n  img {\n    height: 50px;\n  }\n"]))
        ),
        Vl = g.b.p(fc || (fc = Object(d.a)(["\n  margin: 20px 0px;\n"]))),
        Gl = g.b.div(mc || (mc = Object(d.a)(["\n  display: flex;\n"]))),
        Kl = g.b.div(
          vc ||
            (vc = Object(d.a)([
              "\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  color: white;\n  background-color: #",
              ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 20px;\n  a {\n    color: white;\n  }\n",
            ])),
          function (e) {
            return e.color;
          }
        ),
        Zl = g.b.div(
          yc ||
            (yc = Object(d.a)([
              "\n  padding: 20px;\n  margin-right: 50px;\n  ",
              "\n  a {\n    text-decoration: none;\n    color: black;\n  }\n",
            ])),
          O({ display: "none" })
        ),
        _l = g.b.h3(Ac || (Ac = Object(d.a)(["\n  margin-bottom: 30px;\n"]))),
        $l = g.b.div(
          wc ||
            (wc = Object(d.a)([
              "\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n",
            ]))
        ),
        eb = g.b.div(
          kc ||
            (kc = Object(d.a)(["\n  flex: 1;\n  padding: 20px;\n  ", "\n"])),
          O({ marginLeft: "-40px" })
        ),
        nb = g.b.div(
          Cc ||
            (Cc = Object(d.a)([
              "\n  flex: 1;\n  flex-wrap: wrap;\n  padding: 20px;\n\n  ",
              "\n  ",
              "\n",
            ])),
          O({ display: "none" }),
          f({ display: "none" })
        ),
        tb = g.b.div(
          Sc ||
            (Sc = Object(d.a)([
              "\n  width: 90%;\n  margin: 30px auto;\n  ",
              "\n",
            ])),
          O({ textAlign: "center" })
        ),
        ib = g.b.hr(
          Bc ||
            (Bc = Object(d.a)([
              "\n  background-color: #afafaf;\n  border: none;\n  height: 1px;\n  margin-bottom: 30px;\n",
            ]))
        ),
        rb = g.b.div(
          Ic ||
            (Ic = Object(d.a)([
              "\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n",
            ]))
        ),
        cb = g.b.img(Ec || (Ec = Object(d.a)(["\n  width: 50%;\n"]))),
        ob = function () {
          var e = Object(Ze.c)(function (e) {
              return e.user.currentUser;
            })._id,
            n = Object(c.useState)([]),
            t = Object(u.a)(n, 2),
            i = t[0],
            r = t[1],
            o = Object(c.useState)(!1),
            a = Object(u.a)(o, 2),
            s = a[0],
            d = a[1];
          return (
            Object(c.useEffect)(
              function () {
                d(!0),
                  (function () {
                    var n = Object(p.a)(
                      j.a.mark(function n() {
                        var t;
                        return j.a.wrap(
                          function (n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  return (
                                    (n.prev = 0),
                                    (n.next = 3),
                                    k.get("orders/find/".concat(e))
                                  );
                                case 3:
                                  (t = n.sent),
                                    r(t.data.data),
                                    d(!1),
                                    (n.next = 12);
                                  break;
                                case 8:
                                  (n.prev = 8),
                                    (n.t0 = n.catch(0)),
                                    $e.a.error("Something went wrong"),
                                    d(!1);
                                case 12:
                                case "end":
                                  return n.stop();
                              }
                          },
                          n,
                          null,
                          [[0, 8]]
                        );
                      })
                    );
                    return function () {
                      return n.apply(this, arguments);
                    };
                  })()();
              },
              [e]
            ),
            console.log(i, "orders"),
            Object(sn.jsx)(ab, {
              children: Object(sn.jsxs)(sb, {
                children: [
                  Object(sn.jsx)(db, { children: "Your Orders" }),
                  s
                    ? Object(sn.jsx)(sn.Fragment, {
                        children: Object(en.a)(Array(5)).map(function (e, n) {
                          return Object(sn.jsx)(
                            "div",
                            {
                              style: { marginBottom: "10px" },
                              children: Object(sn.jsx)(tn.a, { height: 100 }),
                            },
                            n
                          );
                        }),
                      })
                    : Object(sn.jsx)(sn.Fragment, {
                        children:
                          0 === i.length
                            ? Object(sn.jsxs)(fb, {
                                children: [
                                  Object(sn.jsx)(vb, {
                                    src: Ot,
                                    alt: "EmptyProduct",
                                  }),
                                  Object(sn.jsx)(mb, {
                                    style: { marginBottom: "10px" },
                                    children:
                                      "Sorry, You did't Order any T-shirt.",
                                  }),
                                ],
                              })
                            : Object(sn.jsx)("div", {
                                children: i.map(function (e) {
                                  return Object(sn.jsx)(
                                    "div",
                                    {
                                      children: Object(sn.jsx)("div", {
                                        children: e.products.map(function (n) {
                                          var t, i;
                                          return Object(sn.jsx)(
                                            "div",
                                            {
                                              children: Object(sn.jsxs)(lb, {
                                                children: [
                                                  Object(sn.jsxs)(xb, {
                                                    children: [
                                                      Object(sn.jsx)(bb, {
                                                        src: n.img,
                                                        alt: "product",
                                                      }),
                                                      Object(sn.jsx)(pb, {
                                                        children: n.title,
                                                      }),
                                                    ],
                                                  }),
                                                  Object(sn.jsxs)(ub, {
                                                    children: [
                                                      Object(sn.jsx)(jb, {
                                                        children: n.title,
                                                      }),
                                                      Object(sn.jsxs)("p", {
                                                        children: [
                                                          Object(sn.jsx)(gb, {
                                                            children: "Size: ",
                                                          }),
                                                          null === n ||
                                                          void 0 === n
                                                            ? void 0
                                                            : n.size,
                                                        ],
                                                      }),
                                                      Object(sn.jsxs)("p", {
                                                        children: [
                                                          Object(sn.jsx)(gb, {
                                                            children:
                                                              " Color: ",
                                                          }),
                                                          null === n ||
                                                          void 0 === n
                                                            ? void 0
                                                            : n.color,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  Object(sn.jsxs)(ub, {
                                                    children: [
                                                      Object(sn.jsx)(hb, {
                                                        children: "Payment",
                                                      }),
                                                      Object(sn.jsx)("small", {
                                                        children:
                                                          null === e ||
                                                          void 0 === e
                                                            ? void 0
                                                            : e.paymentStatus,
                                                      }),
                                                    ],
                                                  }),
                                                  Object(sn.jsxs)(ub, {
                                                    children: [
                                                      Object(sn.jsxs)(hb, {
                                                        children: [
                                                          "Shipping",
                                                          Object(sn.jsx)(
                                                            Ob,
                                                            {}
                                                          ),
                                                          " Address",
                                                        ],
                                                      }),
                                                      Object(sn.jsx)("small", {
                                                        children:
                                                          (null === e ||
                                                          void 0 === e ||
                                                          null ===
                                                            (t = e.data) ||
                                                          void 0 === t
                                                            ? void 0
                                                            : t.cus_add1) ||
                                                          (null === e ||
                                                          void 0 === e ||
                                                          null ===
                                                            (i = e.data) ||
                                                          void 0 === i
                                                            ? void 0
                                                            : i.cus_add2),
                                                      }),
                                                    ],
                                                  }),
                                                  Object(sn.jsxs)(ub, {
                                                    children: [
                                                      Object(sn.jsxs)(hb, {
                                                        children: [
                                                          "Shipping",
                                                          Object(sn.jsx)(
                                                            Ob,
                                                            {}
                                                          ),
                                                          " Status",
                                                        ],
                                                      }),
                                                      Object(sn.jsx)("small", {
                                                        children:
                                                          null === e ||
                                                          void 0 === e
                                                            ? void 0
                                                            : e.shippingStatus,
                                                      }),
                                                    ],
                                                  }),
                                                  Object(sn.jsxs)(ub, {
                                                    children: [
                                                      Object(sn.jsx)(hb, {
                                                        children: "Amount",
                                                      }),
                                                      Object(sn.jsxs)("p", {
                                                        children: [
                                                          " \u09f3 ",
                                                          n.price,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  Object(sn.jsxs)(ub, {
                                                    children: [
                                                      Object(sn.jsx)(hb, {
                                                        children: "Quantity:",
                                                      }),
                                                      Object(sn.jsx)("p", {
                                                        style: {
                                                          marginLeft: "9px",
                                                        },
                                                        children: n.quantity,
                                                      }),
                                                    ],
                                                  }),
                                                  Object(sn.jsxs)(ub, {
                                                    children: [
                                                      Object(sn.jsx)(hb, {
                                                        children:
                                                          "Total + Delivery:",
                                                      }),
                                                      Object(sn.jsxs)("p", {
                                                        children: [
                                                          "\u09f3",
                                                          " ",
                                                          n.quantity * n.price +
                                                            (null === e ||
                                                            void 0 === e
                                                              ? void 0
                                                              : e.deliveryCharge),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            },
                                            n._id
                                          );
                                        }),
                                      }),
                                    },
                                    e._id
                                  );
                                }),
                              }),
                      }),
                ],
              }),
            })
          );
        },
        ab = g.b.div(
          Rc ||
            (Rc = Object(d.a)(["\n  width: 90%;\n  margin: auto;\n  ", "\n"])),
          O({ paddingBottom: "80px", marginTop: "100px" })
        ),
        sb = g.b.div(
          zc ||
            (zc = Object(d.a)([
              "\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n  padding: 50px;\n  ",
              "\n",
            ])),
          O({ padding: "0px 0 50px 0" })
        ),
        db = g.b.h2(
          Lc ||
            (Lc = Object(d.a)(["\n  margin-bottom: 40px;\n  padding: 10px;\n"]))
        ),
        lb = g.b.div(
          Uc ||
            (Uc = Object(d.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  margin: 10px 0;\n\n  border-bottom: 0.5px solid gray;\n  ",
              "\n",
            ])),
          O({ display: "flex", flexDirection: "column" })
        ),
        bb = g.b.img(
          Qc || (Qc = Object(d.a)(["\n  width: 80px;\n  ", "\n"])),
          O({ width: "120px" })
        ),
        jb = g.b.h3(
          Tc || (Tc = Object(d.a)(["\n  display: block;\n  ", "\n"])),
          O({ display: "none" })
        ),
        pb = g.b.h4(
          Fc || (Fc = Object(d.a)(["\n  display: none;\n  ", "\n"])),
          O({ display: "block", fontSize: "20px", margin: "10px 0" })
        ),
        ub = g.b.div(
          Dc ||
            (Dc = Object(d.a)([
              "\n  flex: 1;\n  justify-content: center;\n\n  align-items: center;\n  ",
              "\n",
            ])),
          O({
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "0px",
          })
        ),
        xb = g.b.div(
          Nc ||
            (Nc = Object(d.a)([
              "\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  ",
              "\n",
            ])),
          O({
            display: "flex",
            justifyCntent: "center",
            alignItems: "center",
            marginBottom: "0px",
            flexDirection: "column",
          })
        ),
        hb = g.b.p(
          Yc || (Yc = Object(d.a)(["\n  font-weight: 800;\n  ", ";\n"])),
          O({ fontWeight: "800" })
        ),
        gb = g.b.b(
          qc || (qc = Object(d.a)(["\n  ", ";\n"])),
          O({ fontWeight: "800" })
        ),
        Ob = g.b.br(
          Hc || (Hc = Object(d.a)(["\n  display: block;\n  ", ";\n"])),
          O({ display: "none" })
        ),
        fb = g.b.div(
          Mc ||
            (Mc = Object(d.a)([
              "\n  width: 300px;\n\n  margin: auto;\n  text-align: center;\n  border-radius: 6px;\n  ",
              "\n",
            ])),
          O({ paddingBottom: "20px" })
        ),
        mb = g.b.h1(
          Jc ||
            (Jc = Object(d.a)([
              "\n  font-size: 30px;\n  margin: auto;\n  text-align: center;\n  border-radius: 6px;\n  ",
              ";\n",
            ])),
          O({ fontSize: "20px" })
        ),
        vb = g.b.img(
          Pc ||
            (Pc = Object(d.a)([
              "\n  width: 80%;\n  height: 80%;\n  object-fit: cover;\n  border-radius: 6px;\n",
            ]))
        ),
        yb = t(220),
        Ab = t(223),
        wb = t(213),
        kb = t(222),
        Cb = t(98),
        Sb = function (e) {
          var n,
            t,
            i,
            r = e.handleNext,
            o = e.setIsLoading,
            a = Object(Ze.c)(function (e) {
              return e.cart;
            }),
            s = Object(Ze.c)(function (e) {
              return e.user.currentUser;
            })._id,
            d = Object(c.useState)(null),
            l = Object(u.a)(d, 2),
            b = l[0],
            g = (l[1], Object(m.useHistory)()),
            O = Object(Ze.b)();
          Object(c.useEffect)(
            function () {
              O(Ge(80));
            },
            [O]
          ),
            Object(c.useEffect)(
              function () {
                b &&
                  (function () {
                    var e = Object(p.a)(
                      j.a.mark(function e() {
                        var n;
                        return j.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    k.post("/checkout/payment", {
                                      tokenId: b.id,
                                      amount: 500,
                                    })
                                  );
                                case 3:
                                  (n = e.sent),
                                    g.push("/success", {
                                      stripeData: n.data,
                                      products: a,
                                    }),
                                    (e.next = 9);
                                  break;
                                case 7:
                                  (e.prev = 7), (e.t0 = e.catch(0));
                                case 9:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 7]]
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()();
              },
              [b, a.total, g]
            );
          var f = function (e, n) {
              O(He({ productId: n, quantity: "inc" === e ? 1 : -1 }));
            },
            v = a.products.map(function (e) {
              return {
                title: e.title,
                desc: e.desc,
                img: e.img,
                size: e.size,
                color: e.color,
                price: e.price,
                quantity: e.quantity,
              };
            }),
            y = Number(a.total),
            A = s,
            w = (function () {
              var e = Object(p.a)(
                j.a.mark(function e() {
                  var n;
                  return j.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              o(!0),
                              (e.next = 4),
                              k.post("carts", {
                                products: v,
                                amount: y,
                                user: A,
                              })
                            );
                          case 4:
                            (n = e.sent).data.data &&
                              (console.log(n.data), r()),
                              (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0);
                          case 11:
                            return (e.prev = 11), o(!1), e.finish(11);
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 8, 11, 14]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return Object(sn.jsx)(Bb, {
            children: Object(sn.jsxs)(Ib, {
              children: [
                Object(sn.jsxs)(Eb, {
                  children: ["Your are shipping ", a.products.length],
                }),
                Object(sn.jsxs)(Rb, {
                  children: [
                    Object(sn.jsx)(an.Link, {
                      to: "/",
                      style: { textDecoration: "none" },
                      children: Object(sn.jsx)(zb, {
                        style: {
                          backgroundColor: "teal",
                          color: "#ffffff",
                          border: "none",
                          padding: "10px 20px",
                          borderRadius: "4px",
                          fontSize: "16px",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                        },
                        children: "CONTINUE SHOPPING",
                      }),
                    }),
                    Object(sn.jsxs)(Lb, {
                      children: [
                        Object(sn.jsxs)(Ub, {
                          children: [
                            "Shopping Bag(",
                            null === a ||
                            void 0 === a ||
                            null === (n = a.products) ||
                            void 0 === n
                              ? void 0
                              : n.length,
                            ")",
                          ],
                        }),
                        Object(sn.jsx)(an.Link, {
                          to: "/wishList",
                          children: Object(sn.jsxs)(Ub, {
                            children: [
                              "Your Wishlist (",
                              null === a ||
                              void 0 === a ||
                              null === (t = a.favorite) ||
                              void 0 === t
                                ? void 0
                                : t.length,
                              ")",
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                Object(sn.jsxs)(Qb, {
                  children: [
                    Object(sn.jsx)(Fb, {
                      empty: 0 === a.products.length,
                      children:
                        a.products.length > 0
                          ? Object(sn.jsxs)(Tb, {
                              children: [
                                a.products.map(function (e) {
                                  return Object(sn.jsxs)(Db, {
                                    children: [
                                      Object(sn.jsx)(sj, {
                                        onClick: function () {
                                          return (
                                            (n = e._id),
                                            void ot.a
                                              .fire({
                                                title: "Are you sure?",
                                                text: "You won't be able to revert this!",
                                                icon: "warning",
                                                showCancelButton: !0,
                                                confirmButtonColor: "teal",
                                                cancelButtonColor: "teal",
                                                confirmButtonText:
                                                  "Yes, delete it!",
                                              })
                                              .then(function (e) {
                                                if (e.isConfirmed) {
                                                  var t =
                                                    null === a || void 0 === a
                                                      ? void 0
                                                      : a.products.find(
                                                          function (e) {
                                                            return e._id === n;
                                                          }
                                                        );
                                                  t && O(Xe(t)),
                                                    ot.a.fire({
                                                      title: "Deleted!",
                                                      text: "Your Order has been deleted.",
                                                      icon: "success",
                                                      confirmButtonColor:
                                                        "teal",
                                                    });
                                                }
                                              })
                                          );
                                          var n;
                                        },
                                        children: Object(sn.jsx)(xd.a, {
                                          className: "icon",
                                        }),
                                      }),
                                      Object(sn.jsxs)(Mb, {
                                        children: [
                                          Object(sn.jsx)(Jb, { src: e.img }),
                                          Object(sn.jsxs)(Pb, {
                                            children: [
                                              Object(sn.jsxs)(Xb, {
                                                children: [
                                                  Object(sn.jsx)("b", {
                                                    children: "Product:",
                                                  }),
                                                  Object(sn.jsx)(Nb, {}),
                                                  e.title,
                                                  " ",
                                                  Object(sn.jsxs)("b", {
                                                    style: { fontSize: "20px" },
                                                    children: [
                                                      "x ",
                                                      e.quantity,
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              Object(sn.jsxs)(Wb, {
                                                children: [
                                                  Object(sn.jsx)("b", {
                                                    children: "ID:",
                                                  }),
                                                  " ",
                                                  null === e || void 0 === e
                                                    ? void 0
                                                    : e._id.slice(0, 20),
                                                ],
                                              }),
                                              Object(sn.jsx)(Vb, {
                                                color: e.color,
                                              }),
                                              Object(sn.jsxs)(Gb, {
                                                children: [
                                                  Object(sn.jsx)("b", {
                                                    children: "Size:",
                                                  }),
                                                  " ",
                                                  e.size,
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      Object(sn.jsxs)(Kb, {
                                        children: [
                                          Object(sn.jsxs)(Zb, {
                                            children: [
                                              Object(sn.jsx)(oj, {
                                                children: Object(sn.jsx)(x.a, {
                                                  onClick: function () {
                                                    return e.quantity > 1
                                                      ? f("dec", e._id)
                                                      : console.log("can zero");
                                                  },
                                                }),
                                              }),
                                              Object(sn.jsx)(_b, {
                                                children: e.quantity,
                                              }),
                                              Object(sn.jsx)(oj, {
                                                children: Object(sn.jsx)(h.a, {
                                                  onClick: function () {
                                                    return f("inc", e._id);
                                                  },
                                                }),
                                              }),
                                            ],
                                          }),
                                          Object(sn.jsxs)($b, {
                                            children: [
                                              "\u09f3 ",
                                              e.price * e.quantity,
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  });
                                }),
                                Object(sn.jsx)("br", {}),
                                Object(sn.jsx)(ej, {}),
                                a.products.length
                                  ? Object(sn.jsx)(Hb, {
                                      onClick: function () {
                                        ot.a
                                          .fire({
                                            title: "Are you sure?",
                                            text: "You won't be able to revert this!",
                                            icon: "warning",
                                            showCancelButton: !0,
                                            confirmButtonColor: "teal",
                                            cancelButtonColor: "teal",
                                            confirmButtonText:
                                              "Yes, delete it!",
                                          })
                                          .then(function (e) {
                                            e.isConfirmed &&
                                              (O(qe()),
                                              ot.a.fire({
                                                title: "Deleted!",
                                                text: "Your Order has been deleted.",
                                                icon: "success",
                                                confirmButtonColor: "teal",
                                              }));
                                          });
                                      },
                                      children: "Clear Cart",
                                    })
                                  : "",
                                Object(sn.jsx)("br", {}),
                              ],
                            })
                          : Object(sn.jsx)(qb, {
                              children: Object(sn.jsx)(Yb, { src: hd }),
                            }),
                    }),
                    (null === a ||
                    void 0 === a ||
                    null === (i = a.products) ||
                    void 0 === i
                      ? void 0
                      : i.length) > 0 &&
                      Object(sn.jsxs)(nj, {
                        children: [
                          Object(sn.jsx)(tj, { children: "ORDER SUMMARY" }),
                          Object(sn.jsxs)(ij, {
                            children: [
                              Object(sn.jsx)(rj, { children: "Subtotal" }),
                              Object(sn.jsxs)(cj, {
                                children: ["\u09f3 ", a.total],
                              }),
                            ],
                          }),
                          Object(sn.jsxs)(ij, {
                            children: [
                              Object(sn.jsxs)(rj, {
                                children: [
                                  "Estimated Shipping ",
                                  Object(sn.jsx)("br", {}),
                                  "(only For Dhaka)",
                                ],
                              }),
                              Object(sn.jsxs)(cj, {
                                children: [
                                  "\u09f3 ",
                                  null === a || void 0 === a
                                    ? void 0
                                    : a.deliveryCharge,
                                ],
                              }),
                            ],
                          }),
                          Object(sn.jsxs)(ij, {
                            type: "total",
                            children: [
                              Object(sn.jsx)(rj, { children: "Total" }),
                              Object(sn.jsxs)(cj, {
                                children: [
                                  "\u09f3 ",
                                  a.total + a.deliveryCharge,
                                ],
                              }),
                            ],
                          }),
                          a.products.length
                            ? Object(sn.jsx)(aj, {
                                onClick: w,
                                children: "PROCEED NOW",
                              })
                            : Object(sn.jsx)(aj, {
                                style: {
                                  backgroundColor: "gray",
                                  color: "gray",
                                },
                                children: "PROCEED NOW",
                              }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          });
        },
        Bb = g.b.div(Xc || (Xc = Object(d.a)([""]))),
        Ib = g.b.div(Wc || (Wc = Object(d.a)([""]))),
        Eb = g.b.h1(
          Vc ||
            (Vc = Object(d.a)([
              "\n  font-weight: 300;\n  text-align: center;\n",
            ]))
        ),
        Rb = g.b.div(
          Gc ||
            (Gc = Object(d.a)([
              "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  ",
              "\n",
            ])),
          O({ justifyContent: "center" })
        ),
        zb = g.b.button(
          Kc ||
            (Kc = Object(d.a)([
              "\n  padding: 10px;\n  font-weight: 600;\n  cursor: pointer;\n  border: ",
              ";\n  background-color: ",
              ";\n  color: ",
              ";\n  a {\n    text-decoration: none;\n  }\n",
            ])),
          function (e) {
            return "filled" === e.type && "none";
          },
          function (e) {
            return "filled" === e.type ? "black" : "transparent";
          },
          function (e) {
            return "filled" === e.type && "white";
          }
        ),
        Lb = g.b.div(
          Zc || (Zc = Object(d.a)(["\n  ", "\n"])),
          O({ display: "none" })
        ),
        Ub = g.b.span(
          _c ||
            (_c = Object(d.a)([
              "\n  text-decoration: underline;\n  cursor: pointer;\n  margin: 0px 10px;\n",
            ]))
        ),
        Qb = g.b.div(
          $c ||
            ($c = Object(d.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  ",
              "\n",
            ])),
          O({
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "-20px",
          })
        ),
        Tb = g.b.div(eo || (eo = Object(d.a)(["\n  flex: 3;\n"]))),
        Fb = g.b.div(
          no || (no = Object(d.a)(["\n  flex: 3;\n  ", "\n"])),
          function (e) {
            return e.empty ? "display: flex; justify-content: center;" : "";
          }
        ),
        Db = g.b.div(
          to ||
            (to = Object(d.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  ",
              "\n  margin-bottom:20px;\n",
            ])),
          O({ flexDirection: "column", padding: "20px" })
        ),
        Nb = g.b.br(
          io || (io = Object(d.a)(["\n  display: none;\n  ", "\n"])),
          O({ display: "block" })
        ),
        Yb = g.b.img(
          ro ||
            (ro = Object(d.a)([
              "\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  ",
              "\n",
            ])),
          O({ width: "60%" })
        ),
        qb = g.b.div(
          co ||
            (co = Object(d.a)([
              "\n  max-width: 400px;\n  max-height: 400px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n",
            ]))
        ),
        Hb = g.b.button(
          oo ||
            (oo = Object(d.a)([
              "\n  background-color: #ff0000;\n  color: #ffffff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 4px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.2s ease-in-out;\n  margin: 12px 0px 12px 30px;\n  &:hover {\n    background-color: #cc0000;\n  }\n",
            ]))
        ),
        Mb = g.b.div(
          ao || (ao = Object(d.a)(["\n  flex: 2;\n  display: flex;\n"]))
        ),
        Jb = g.b.img(
          so || (so = Object(d.a)(["\n  width: 200px;\n  ", "\n"])),
          O({ width: "50%" })
        ),
        Pb = g.b.div(
          lo ||
            (lo = Object(d.a)([
              "\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  margin-right: 50px;\n",
            ]))
        ),
        Xb = g.b.span(bo || (bo = Object(d.a)([""]))),
        Wb = g.b.span(jo || (jo = Object(d.a)([""]))),
        Vb = g.b.div(
          po ||
            (po = Object(d.a)([
              "\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: ",
              ";\n  border: 1px solid gray !important;\n",
            ])),
          function (e) {
            return e.color;
          }
        ),
        Gb = g.b.span(uo || (uo = Object(d.a)([""]))),
        Kb = g.b.div(
          xo ||
            (xo = Object(d.a)([
              "\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n",
            ]))
        ),
        Zb = g.b.div(
          ho ||
            (ho = Object(d.a)([
              "\n  display: flex;\n  align-items: center;\n  gap: 11px;\n",
            ]))
        ),
        _b = g.b.div(
          go ||
            (go = Object(d.a)([
              "\n  font-size: 24px;\n  margin: 5px;\n  ",
              "\n",
            ])),
          O({ margin: "5px 15px" })
        ),
        $b = g.b.div(
          Oo ||
            (Oo = Object(d.a)([
              "\n  font-size: 30px;\n  font-weight: 200;\n  ",
              "\n",
            ])),
          O({ marginBottom: "20px" })
        ),
        ej = g.b.hr(
          fo ||
            (fo = Object(d.a)([
              "\n  background-color: #eee;\n  border: none;\n  height: 1px;\n",
            ]))
        ),
        nj = g.b.div(
          mo ||
            (mo = Object(d.a)([
              "\n  flex: 1;\n  border: 0.5px solid lightgray;\n  border-radius: 10px;\n  padding: 20px;\n  height: 50vh;\n  ",
              "\n  ",
              "\n",
            ])),
          O({ marginTop: "30px", width: "85%", marginLeft: "20px" }),
          O({ marginBottom: "60px" })
        ),
        tj = g.b.h1(
          vo || (vo = Object(d.a)(["\n  font-weight: 200;\n\n  ", "\n"])),
          O({ fontSize: "30px" })
        ),
        ij = g.b.div(
          yo ||
            (yo = Object(d.a)([
              "\n  margin: 30px 0px;\n  display: flex;\n  justify-content: space-between;\n  font-weight: ",
              ";\n  font-size: ",
              ";\n",
            ])),
          function (e) {
            return "total" === e.type && "500";
          },
          function (e) {
            return "total" === e.type && "24px";
          }
        ),
        rj = g.b.span(Ao || (Ao = Object(d.a)([""]))),
        cj = g.b.span(wo || (wo = Object(d.a)([""]))),
        oj = g.b.div(
          ko ||
            (ko = Object(d.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n  padding: 4px;\n  border: none;\n  border-radius: 100%;\n  /* background-color: #3c3d3e; */\n  color: #3c3d3e;\n  cursor: pointer;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.148), 0 4px 15px rgba(0, 0, 0, 0.116);\n",
            ]))
        ),
        aj = g.b.button(
          Co ||
            (Co = Object(d.a)([
              "\n  width: 100%;\n  padding: 10px;\n  background-color: teal;\n  color: white;\n  font-weight: 600;\n  border-radius: 12px;\n  border: 1.5px solid teal;\n  transition: ease 0.5s;\n  cursor: pointer;\n  &:hover {\n    background-color: transparent;\n    color: teal;\n    cursor: pointer;\n  }\n",
            ]))
        ),
        sj = g.b.div(
          So ||
            (So = Object(d.a)([
              '\n  cursor: pointer;\n  position: relative;\n  width: 25px;\n  height: 25px;\n  margin-right: -10px;\n  margin-top: -10px;\n  background-color: white;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.148), 0 4px 15px rgba(0, 0, 0, 0.116);\n  border: 1.5px solid teal;\n  border-radius: 15px;\n  transition: "background-color 0.3s";\n  .icon {\n    color: teal;\n  }\n  &:hover {\n    background-color: teal;\n    .icon {\n      color: white;\n    }\n  }\n  ',
              "\n",
            ])),
          O({ marginLeft: "-9px", marginTop: "-10px", marginBottom: "-10px" })
        ),
        dj = function (e) {
          var n = e.handleNext,
            t = e.setIsLoading,
            i = Object(Ze.c)(function (e) {
              return e.cart;
            }),
            r = Object(Ze.c)(function (e) {
              return e.user.currentUser;
            }),
            o = r.email,
            a = r._id,
            s = r.phone,
            d = r.name,
            l = Object(c.useState)(d),
            b = Object(u.a)(l, 2),
            x = b[0],
            h = (b[1], Object(c.useState)("")),
            g = Object(u.a)(h, 2),
            O = g[0],
            f = g[1],
            m = Object(c.useState)(""),
            v = Object(u.a)(m, 2),
            y = v[0],
            A = v[1],
            w = Object(c.useState)(s),
            C = Object(u.a)(w, 2),
            S = C[0],
            B = (C[1], Object(c.useState)("")),
            I = Object(u.a)(B, 2),
            E = I[0],
            R = I[1],
            z = Object(c.useState)(!1),
            L = Object(u.a)(z, 2),
            U = L[0],
            Q = L[1],
            T = Object(c.useState)("COD"),
            F = Object(u.a)(T, 2),
            D = F[0],
            N = F[1],
            Y = Object(Ze.b)(),
            q = (function () {
              var e = Object(p.a)(
                j.a.mark(function e(r) {
                  var c, s;
                  return j.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              r.preventDefault(),
                              (c = {
                                name: x,
                                phone: S,
                                city: y,
                                address: O,
                                postcode: E,
                                email: o,
                                _id: a,
                                deliveryCharge:
                                  "Dhaka" === y
                                    ? null === i || void 0 === i
                                      ? void 0
                                      : i.deliveryCharge
                                    : 120,
                              }),
                              (e.prev = 2),
                              t(!0),
                              (e.next = 6),
                              k.post("/orders/payment", c)
                            );
                          case 6:
                            (s = e.sent).data &&
                              (window.location.replace(s.data.data),
                              Y(qe()),
                              n()),
                              (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(2)),
                              console.log(e.t0);
                          case 13:
                            return (e.prev = 13), t(!1), e.finish(13);
                          case 16:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 10, 13, 16]]
                  );
                })
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })(),
            H = (function () {
              var e = Object(p.a)(
                j.a.mark(function e(r) {
                  var c, s;
                  return j.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              r.preventDefault(),
                              (c = {
                                name: x,
                                phone: S,
                                city: y,
                                address: O,
                                postcode: E,
                                email: o,
                                _id: a,
                                deliveryCharge:
                                  "Dhaka" === y
                                    ? null === i || void 0 === i
                                      ? void 0
                                      : i.deliveryCharge
                                    : 120,
                              }),
                              t(!0),
                              (e.prev = 3),
                              (e.next = 6),
                              k.post("/orders/cash-on-delivery", c)
                            );
                          case 6:
                            (s = e.sent),
                              t(!1),
                              s.data && (Y(qe()), n()),
                              (e.next = 15);
                            break;
                          case 11:
                            (e.prev = 11),
                              (e.t0 = e.catch(3)),
                              t(!1),
                              console.log(e.t0);
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[3, 11]]
                  );
                })
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })();
          return Object(sn.jsx)(Oj, {
            children: Object(sn.jsxs)(fj, {
              children: [
                Object(sn.jsxs)(mj, {
                  children: [
                    Object(sn.jsx)(vj, {
                      style: {
                        backgroundColor: "teal",
                        color: "#ffffff",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "4px",
                        fontSize: "16px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                      },
                      children: "Shipping",
                    }),
                    Object(sn.jsxs)(vj, {
                      style: {
                        backgroundColor: "teal",
                        color: "#ffffff",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "4px",
                        fontSize: "16px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                      },
                      children: ["Item: ", i.products.length],
                    }),
                  ],
                }),
                Object(sn.jsx)(yj, {
                  children: Object(sn.jsxs)(lj, {
                    onSubmit: q,
                    children: [
                      Object(sn.jsx)(bj, {
                        children: Object(sn.jsxs)(jj, {
                          children: [
                            Object(sn.jsxs)(pj, {
                              children: [
                                Object(sn.jsxs)(uj, {
                                  children: [
                                    "Name ",
                                    Object(sn.jsx)("span", {
                                      style: { fontWeight: "900" },
                                      children: ":",
                                    }),
                                  ],
                                }),
                                Object(sn.jsx)(gj, {
                                  value: x,
                                  name: "name",
                                  type: "text",
                                  required: !0,
                                  disabled: !0,
                                  placeholder: x,
                                }),
                              ],
                            }),
                            Object(sn.jsxs)(pj, {
                              children: [
                                Object(sn.jsxs)(uj, {
                                  children: [
                                    "City ",
                                    Object(sn.jsx)("span", {
                                      style: { fontWeight: "900" },
                                      children: ":",
                                    }),
                                  ],
                                }),
                                Object(sn.jsxs)(xj, {
                                  name: "city",
                                  type: "text",
                                  required: !0,
                                  onChange: function (e) {
                                    return A(e.target.value);
                                  },
                                  children: [
                                    Object(sn.jsx)(hj, {
                                      children: "Select your City",
                                    }),
                                    Wn.sort().map(function (e, n) {
                                      return Object(sn.jsx)(hj, {
                                        value: e,
                                        children: e,
                                      });
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(sn.jsxs)(pj, {
                              children: [
                                Object(sn.jsxs)(uj, {
                                  children: [
                                    "Email ",
                                    Object(sn.jsx)("span", {
                                      style: { fontWeight: "900" },
                                      children: ":",
                                    }),
                                  ],
                                }),
                                Object(sn.jsx)(gj, {
                                  name: "email",
                                  placeholder: o,
                                  type: "email",
                                  pattern:
                                    "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/,",
                                  required: !0,
                                  disabled: !0,
                                  value: o,
                                }),
                              ],
                            }),
                            Object(sn.jsxs)(pj, {
                              children: [
                                Object(sn.jsxs)(uj, {
                                  children: [
                                    "Phone Number ",
                                    Object(sn.jsx)("span", {
                                      style: { fontWeight: "900" },
                                      children: ":",
                                    }),
                                  ],
                                }),
                                Object(sn.jsx)(gj, {
                                  name: "number",
                                  type: "number",
                                  value: S,
                                  pattern: /^01[3-9]\d{8}$/,
                                  placeholder: S,
                                  required: !0,
                                }),
                              ],
                            }),
                            Object(sn.jsxs)(pj, {
                              children: [
                                Object(sn.jsxs)(uj, {
                                  children: [
                                    "Postcode / ZIP ",
                                    Object(sn.jsx)("span", {
                                      style: { fontWeight: "900" },
                                      children: ":",
                                    }),
                                  ],
                                }),
                                Object(sn.jsx)(gj, {
                                  onChange: function (e) {
                                    return R(e.target.value);
                                  },
                                  name: "postcode",
                                  type: "number",
                                  required: !0,
                                }),
                              ],
                            }),
                            Object(sn.jsxs)(pj, {
                              children: [
                                Object(sn.jsxs)(uj, {
                                  children: [
                                    "House/Address ",
                                    Object(sn.jsx)("span", {
                                      style: { fontWeight: "900" },
                                      children: ":",
                                    }),
                                  ],
                                }),
                                Object(sn.jsx)(gj, {
                                  onChange: function (e) {
                                    return f(e.target.value);
                                  },
                                  name: "address",
                                  type: "text",
                                  required: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      Object(sn.jsxs)(Aj, {
                        children: [
                          Object(sn.jsx)(wj, { children: "ORDER SUMMARY" }),
                          Object(sn.jsxs)(kj, {
                            children: [
                              Object(sn.jsx)(Cj, { children: "Subtotal" }),
                              Object(sn.jsxs)(Sj, {
                                children: ["\u09f3 ", i.total],
                              }),
                            ],
                          }),
                          Object(sn.jsxs)(kj, {
                            children: [
                              Object(sn.jsx)(Cj, {
                                children: "Estimated Shipping",
                              }),
                              Object(sn.jsxs)(Sj, {
                                children: [
                                  "\u09f3 ",
                                  "Dhaka" === y
                                    ? null === i || void 0 === i
                                      ? void 0
                                      : i.deliveryCharge
                                    : 120,
                                ],
                              }),
                            ],
                          }),
                          Object(sn.jsxs)(kj, {
                            type: "total",
                            children: [
                              Object(sn.jsx)(Cj, { children: "Total" }),
                              Object(sn.jsxs)(Sj, {
                                children: [
                                  "\u09f3",
                                  " ",
                                  i.total +
                                    ("Dhaka" === y
                                      ? null === i || void 0 === i
                                        ? void 0
                                        : i.deliveryCharge
                                      : 120),
                                ],
                              }),
                            ],
                          }),
                          Object(sn.jsx)(Ij, {
                            className: "card bg-base-100 shadow-xl mb-10 ",
                            children: Object(sn.jsxs)("div", {
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                              },
                              children: [
                                Object(sn.jsx)("input", {
                                  type: "radio",
                                  value: "COD",
                                  name: "payment-type",
                                  style: {
                                    width: "20px",
                                    height: "20px",
                                    padding: "10px",
                                    background: "teal",
                                  },
                                  onChange: function (e) {
                                    return N(e.target.value);
                                  },
                                  checked: "COD" === D,
                                  onClick: function (e) {
                                    return (
                                      (n = e.target.value), void Q("card" === n)
                                    );
                                    var n;
                                  },
                                }),
                                Object(sn.jsx)("p", {
                                  children: "Cash On Delivery",
                                }),
                              ],
                            }),
                          }),
                          S && d && y && O && E && o
                            ? Object(sn.jsx)("div", {
                                style: {
                                  display: "flex",
                                  justifyContent: "center",
                                },
                                children: U
                                  ? Object(sn.jsx)(sn.Fragment, {
                                      children: Object(sn.jsxs)(Bj, {
                                        disabled: !0,
                                        onClick: q,
                                        children: ["Proceed Now", " "],
                                      }),
                                    })
                                  : Object(sn.jsx)(Bj, {
                                      isabled: !0,
                                      onClick: H,
                                      children: "Proceed",
                                    }),
                              })
                            : Object(sn.jsx)("p", {
                                style: {
                                  color: "gray",
                                  marginTop: "15px",
                                  fontSize: "20px",
                                  textAlign: "center",
                                },
                                children: "Complete the details",
                              }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        lj = g.b.form(
          Bo ||
            (Bo = Object(d.a)([
              "\n  display: flex;\n  padding: 30px 15px 0px 15px;\n  border: none;\n  gap: 20px;\n  ",
              "\n",
            ])),
          O({ padding: "10px 10px 10px 10px", display: "block" })
        ),
        bj = g.b.form(
          Io ||
            (Io = Object(d.a)([
              "\n  display: flex;\n  flex: 2;\n  border: 0.5px solid lightgray;\n  border-radius: 10px;\n  padding: 30px 15px 30px 15px;\n  ",
              "\n",
            ])),
          O({ padding: "10px 1px 30px 10px" })
        ),
        jj = g.b.div(
          Eo ||
            (Eo = Object(d.a)([
              "\n  width: 100%;\n  display: grid;\n  grid-template-columns: auto auto;\n  ",
              "\n",
            ])),
          O({ gridTemplateColumns: "auto" })
        ),
        pj = g.b.div(
          Ro ||
            (Ro = Object(d.a)([
              "\n  display: flex;\n  flex-direction: column;\n",
            ]))
        ),
        uj = g.b.label(
          zo ||
            (zo = Object(d.a)([
              "\n  font-size: 17px;\n  font-family: 700;\n  color: gray;\n  margin: 20px 0px -10px 0px;\n",
            ]))
        ),
        xj = g.b.select(
          Lo ||
            (Lo = Object(d.a)([
              "\n  min-width: 40%;\n  margin: 20px 10px 0px 0px;\n  padding: 10px;\n  outline: none;\n  border-radius: 6px;\n  font-size: 15px;\n  border: 1px solid grey;\n  color: gray;\n",
            ]))
        ),
        hj = g.b.option(Uo || (Uo = Object(d.a)(["\n  color: teal;\n"]))),
        gj = g.b.input(
          Qo ||
            (Qo = Object(d.a)([
              "\n  margin: 20px 10px 0px 0px;\n  padding: 10px;\n  outline: none;\n  color: gray;\n  border-radius: 6px;\n  font-size: 15px;\n  border: 1px solid grey;\n  &::-webkit-inner-spin-button,\n  &::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    appearance: none;\n    margin: 0;\n  }\n",
            ]))
        ),
        Oj = g.b.div(To || (To = Object(d.a)([""]))),
        fj = g.b.div(
          Fo || (Fo = Object(d.a)(["\n  ", "\n"])),
          O({ padding: "10px" })
        ),
        mj = g.b.div(
          Do ||
            (Do = Object(d.a)([
              "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  ",
              "\n",
            ])),
          O({ justifyContent: "center", gap: "90px" })
        ),
        vj = g.b.button(
          No ||
            (No = Object(d.a)([
              "\n  padding: 10px;\n  font-weight: 600;\n  cursor: pointer;\n  border: ",
              ";\n  background-color: ",
              ";\n  color: ",
              ";\n",
            ])),
          function (e) {
            return "filled" === e.type && "none";
          },
          function (e) {
            return "filled" === e.type ? "black" : "transparent";
          },
          function (e) {
            return "filled" === e.type && "white";
          }
        ),
        yj = g.b.div(
          Yo ||
            (Yo = Object(d.a)([
              "\n  ",
              "\n  margin-top: 30px;\n  gap: 20px;\n",
            ])),
          O({
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          })
        ),
        Aj = g.b.div(
          qo ||
            (qo = Object(d.a)([
              "\n  flex: 1;\n  border: 0.5px solid lightgray;\n  border-radius: 10px;\n  padding: 20px;\n  height: 100%;\n  ",
              "\n",
            ])),
          O({
            marginTop: "20px",
            paddingRight: "10px",
            marginBottom: "50px",
            width: "90%",
          })
        ),
        wj = g.b.h1(Ho || (Ho = Object(d.a)(["\n  font-weight: 200;\n"]))),
        kj = g.b.div(
          Mo ||
            (Mo = Object(d.a)([
              "\n  margin: 30px 0px;\n  display: flex;\n  justify-content: space-between;\n  font-weight: ",
              ";\n  font-size: ",
              ";\n",
            ])),
          function (e) {
            return "total" === e.type && "500";
          },
          function (e) {
            return "total" === e.type && "24px";
          }
        ),
        Cj = g.b.span(Jo || (Jo = Object(d.a)([""]))),
        Sj = g.b.span(Po || (Po = Object(d.a)([""]))),
        Bj = g.b.button(
          Xo ||
            (Xo = Object(d.a)([
              "\n  width: 100%;\n  padding: 10px;\n  margin: 20px auto;\n  background-color: teal;\n  color: white;\n  font-weight: 600;\n  border-radius: 12px;\n  border: 1.5px solid teal;\n  transition: ease 0.5s;\n  cursor: pointer;\n  &:hover {\n    background-color: transparent;\n    color: teal;\n    cursor: pointer;\n  }\n",
            ]))
        ),
        Ij = g.b.div(
          Wo ||
            (Wo = Object(d.a)([
              "\n  display: flex;\n  flex: 2;\n  justify-content: space-between;\n",
            ]))
        ),
        Ej = ["Shopping Cart", "Checkout", "Order Complete"];
      function Rj() {
        var e = Object(c.useState)(0),
          n = Object(u.a)(e, 2),
          t = n[0],
          i = n[1],
          r = Object(c.useState)(new Set()),
          o = Object(u.a)(r, 2),
          a = o[0],
          s = o[1],
          d = Object(c.useState)(!1),
          b = Object(u.a)(d, 2),
          j = b[0],
          p = b[1],
          x = function () {
            var e = a;
            i(function (e) {
              return e + 1;
            }),
              s(e);
          };
        return Object(sn.jsx)(dp, {
          children: Object(sn.jsxs)(yb.a, {
            sx: { width: "100%" },
            children: [
              Object(sn.jsx)(Ab.a, {
                activeStep: t,
                children: Ej.map(function (e, n) {
                  return Object(sn.jsx)(
                    wb.a,
                    Object(l.a)(
                      Object(l.a)({}, {}),
                      {},
                      {
                        children: Object(sn.jsx)(
                          kb.a,
                          Object(l.a)(
                            Object(l.a)({}, {}),
                            {},
                            { children: Object(sn.jsx)(lp, { children: e }) }
                          )
                        ),
                      }
                    ),
                    e
                  );
                }),
              }),
              t === Ej.length
                ? Object(sn.jsx)(c.Fragment, {
                    children: Object(sn.jsx)(bp, {
                      children: Object(sn.jsxs)(jp, {
                        children: [
                          Object(sn.jsx)(gp, {
                            viewBox: "0 0 24 24",
                            children: Object(sn.jsx)("path", {
                              fill: "currentColor",
                              d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z",
                            }),
                          }),
                          Object(sn.jsxs)(pp, {
                            children: [
                              Object(sn.jsx)(up, {
                                children: "Order successful",
                              }),
                              Object(sn.jsx)("p", {
                                style: {
                                  fontSize: "20px",
                                  margin: "20px auto",
                                },
                                children: "Thank you for completing your Order",
                              }),
                              Object(sn.jsx)(xp, {
                                children: Object(sn.jsx)(hp, {
                                  children: Object(sn.jsx)(an.Link, {
                                    to: "/orders",
                                    children: Object(sn.jsx)(Op, {
                                      children: "Order Tracking",
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  })
                : Object(sn.jsxs)(c.Fragment, {
                    children: [
                      j
                        ? Object(sn.jsx)("div", {
                            style: {
                              display: "flex",
                              justifyContent: "center",
                              height: "100%",
                            },
                            children: Object(sn.jsx)(Cb.a, {
                              height: "80",
                              width: "80",
                              color: "#008080",
                              ariaLabel: "circles-loading",
                              wrapperStyle: {},
                              wrapperClass: "",
                              visible: !0,
                            }),
                          })
                        : Object(sn.jsxs)("div", {
                            children: [
                              0 === t &&
                                Object(sn.jsx)(Sb, {
                                  handleNext: x,
                                  setIsLoading: p,
                                }),
                              1 === t &&
                                Object(sn.jsx)(dj, {
                                  handleNext: x,
                                  setIsLoading: p,
                                }),
                            ],
                          }),
                      2 === t && x(),
                    ],
                  }),
            ],
          }),
        });
      }
      var zj,
        Lj,
        Uj,
        Qj,
        Tj,
        Fj,
        Dj,
        Nj,
        Yj,
        qj,
        Hj,
        Mj,
        Jj,
        Pj,
        Xj,
        Wj,
        Vj,
        Gj,
        Kj,
        Zj,
        _j,
        $j,
        ep,
        np,
        tp,
        ip,
        rp,
        cp,
        op,
        ap,
        sp,
        dp = g.b.div(
          Vo ||
            (Vo = Object(d.a)([
              "\n  padding: 20px;\n  width: 90%;\n  margin: 0 auto;\n  ",
              "\n",
            ])),
          O({ padding: "10px" })
        ),
        lp = g.b.p(
          Go || (Go = Object(d.a)(["\n  ", "\n"])),
          O({ fontSize: "12px" })
        ),
        bp = g.b.div(
          Ko ||
            (Ko = Object(d.a)([
              "\n  width: 50%;\n  margin: 40px auto;\n  margin-bottom: 20px;\n  ",
              "\n",
            ])),
          O({ margin: "0px 10px 0px 0px", width: "100%" })
        ),
        jp = g.b.div(
          Zo ||
            (Zo = Object(d.a)([
              "\n  padding: 36px;\n  border: 1.3px solid #ccc8c8;\n  border-radius: 0.75rem;\n  text-align: center;\n  background: #ffffffa7;\n",
            ]))
        ),
        pp = g.b.div(_o || (_o = Object(d.a)(["\n  text-align: center;\n"]))),
        up = g.b.div(
          $o ||
            ($o = Object(d.a)([
              "\n  color: teal;\n  font-weight: 600;\n  font-size: 25px;\n  margin-bottom: 10px;\n",
            ]))
        ),
        xp = g.b.div(
          ea ||
            (ea = Object(d.a)([
              "\n  padding: 40px auto;\n  text-align: center;\n",
            ]))
        ),
        hp = g.b.div(na || (na = Object(d.a)([""]))),
        gp = g.b.svg(
          ta ||
            (ta = Object(d.a)([
              "\n  width: 40px;\n  height: 40px;\n  color: teal;\n  margin: auto 24px;\n",
            ]))
        ),
        Op = g.b.button(
          ia ||
            (ia = Object(d.a)([
              "\n  padding: 0.5rem 1rem;\n  background-color: teal;\n  font-weight: 700;\n  border: none;\n  border-radius: 4px;\n  color: white;\n  cursor: pointer;\n  border: 1.3px solid teal;\n  margin: 10px 10px;\n  transition: ease-in-out 0.5s;\n  &:hover {\n    background-color: #fffefe;\n    color: teal;\n  }\n  a {\n    color: white;\n    text-decoration: none;\n  }\n",
            ]))
        ),
        fp = t(94),
        mp = t(95),
        vp = t(100),
        yp = t(99),
        Ap = t.p + "static/media/warning.ee916fd5.png",
        wp = (function (e) {
          Object(vp.a)(t, e);
          var n = Object(yp.a)(t);
          function t(e) {
            var i;
            return (
              Object(fp.a)(this, t),
              ((i = n.call(this, e)).state = { error: null, errorInfo: null }),
              i
            );
          }
          return (
            Object(mp.a)(t, [
              {
                key: "componentDidCatch",
                value: function (e, n) {
                  this.setState({ error: e, errorInfo: n });
                },
              },
              {
                key: "render",
                value: function () {
                  return this.state.errorInfo
                    ? Object(sn.jsxs)("div", {
                        style: {
                          color: "#5D5D5D",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100vh",
                        },
                        children: [
                          Object(sn.jsxs)("div", {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              flexDirection: "column",
                              gap: "20px",
                            },
                            children: [
                              Object(sn.jsx)("img", {
                                src: Ap,
                                alt: "",
                                style: { height: "150px" },
                              }),
                              Object(sn.jsx)("h2", {
                                style: { fontWeight: "bold", fontSize: "2rem" },
                                children: "Uh oh! Something went wrong...",
                              }),
                            ],
                          }),
                          Object(sn.jsxs)("details", {
                            style: {
                              whiteSpace: "pre-wrap",
                              marginTop: "0.5rem",
                              border: "1px solid #E53E3E",
                              borderRadius: "4px",
                              padding: "1rem",
                              textAlign: "left",
                              overflow: "auto",
                            },
                            children: [
                              Object(sn.jsx)("summary", {
                                style: {
                                  marginBottom: "0.5rem",
                                  fontSize: "1rem",
                                  cursor: "pointer",
                                  fontWeight: "bold",
                                },
                                children: "Error details",
                              }),
                              Object(sn.jsxs)("div", {
                                style: { padding: "0.5rem" },
                                children: [
                                  Object(sn.jsx)("p", {
                                    style: {
                                      marginBottom: "0.5rem",
                                      fontSize: "1rem",
                                      fontFamily: "monospace",
                                    },
                                    children:
                                      this.state.error &&
                                      this.state.error.toString(),
                                  }),
                                  Object(sn.jsxs)("details", {
                                    style: {
                                      whiteSpace: "pre-wrap",
                                      border: "1px solid #FCE7E7",
                                      borderRadius: "4px",
                                      padding: "0.5rem",
                                    },
                                    children: [
                                      Object(sn.jsx)("summary", {
                                        style: {
                                          marginBottom: "0.5rem",
                                          fontSize: "1rem",
                                          cursor: "pointer",
                                          fontWeight: "bold",
                                        },
                                        children: "Component stack trace",
                                      }),
                                      Object(sn.jsx)("p", {
                                        style: {
                                          marginTop: "0.5rem",
                                          fontSize: "1rem",
                                          fontFamily: "monospace",
                                        },
                                        children:
                                          this.state.errorInfo.componentStack,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(sn.jsx)("p", {
                            style: {
                              marginTop: "1rem",
                              fontSize: "1rem",
                              textAlign: "center",
                            },
                            children:
                              "Don't worry, our developers have been notified and are frantically working to fix it!",
                          }),
                        ],
                      })
                    : this.props.children;
                },
              },
            ]),
            t
          );
        })(c.Component),
        kp = t.p + "static/media/Paymentbg.dd346f4f.png",
        Cp = function () {
          return Object(sn.jsx)(Sp, {
            children: Object(sn.jsx)(Bp, {
              children: Object(sn.jsxs)(Ip, {
                children: [
                  Object(sn.jsx)(Ep, {
                    viewBox: "0 0 24 24",
                    children: Object(sn.jsx)("path", {
                      fill: "currentColor",
                      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z",
                    }),
                  }),
                  Object(sn.jsxs)(Rp, {
                    children: [
                      Object(sn.jsx)("p", {
                        children:
                          "Thank you for completing your secure online payment.",
                      }),
                      Object(sn.jsx)("p", { children: " Have a great day! " }),
                      Object(sn.jsx)(zp, { children: "Payment Done!" }),
                      Object(sn.jsxs)(Lp, {
                        children: [
                          Object(sn.jsxs)(Up, {
                            children: [
                              "Payment type",
                              Object(sn.jsx)("span", { children: "none" }),
                            ],
                          }),
                          Object(sn.jsxs)(Up, {
                            children: [
                              "Transaction Id ",
                              Object(sn.jsx)("span", { children: "none" }),
                            ],
                          }),
                          Object(sn.jsxs)(Up, {
                            children: [
                              "Amount paid ",
                              Object(sn.jsx)("span", { children: "none" }),
                            ],
                          }),
                          Object(sn.jsxs)(Up, {
                            children: [
                              "status ",
                              Object(sn.jsx)("span", { children: "none" }),
                            ],
                          }),
                          Object(sn.jsx)(Up, { children: "Order Dates " }),
                        ],
                      }),
                      Object(sn.jsx)(Qp, {
                        children: Object(sn.jsx)(Tp, {
                          children: Object(sn.jsx)(Fp, {
                            children: Object(sn.jsx)(nn.b, {
                              to: "/orders",
                              children: "Order Tracking ",
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        Sp = g.b.div(
          zj ||
            (zj = Object(d.a)([
              "\n  background: linear-gradient(rgba(255, 255, 255, 0) 10%, #ffffff),\n    url(",
              ");\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  width: 50%;\n  background-repeat: no-repeat;\n  background-size: 350px;\n  background-position: 150px 95px;\n  color: gray;\n  font-weight: 600;\n  margin: 100px auto;\n\n  ",
              "\n",
            ])),
          kp,
          O({
            margin: "100px 0px ",
            width: "100%",
            background:
              "linear-gradient(rgba(255, 255, 255, 0) 10%, #ffffff),\n    url(".concat(
                kp,
                ")"
              ),
            backgroundRepeat: "no-repeat",
            backgroundSize: "330px",
            backgroundPosition: "30px 165px",
          })
        ),
        Bp = g.b.div(
          Lj ||
            (Lj = Object(d.a)([
              "\n  width: 100%;\n  margin-bottom: 20px;\n  ",
              "\n",
            ])),
          O({ margin: "0px 10px 0px 10px" })
        ),
        Ip = g.b.div(
          Uj ||
            (Uj = Object(d.a)([
              "\n  padding: 36px;\n  border: 1.3px solid #ccc8c8;\n  border-radius: 0.75rem;\n  box-shadow: 0 20px 25px 2px rgb(0 0 0 / 0.1);\n  text-align: center;\n  background: #ffffffa7;\n",
            ]))
        ),
        Ep = g.b.svg(
          Qj ||
            (Qj = Object(d.a)([
              "\n  width: 40px;\n  height: 40px;\n  color: teal;\n  margin: auto 24px;\n",
            ]))
        ),
        Rp = g.b.div(Tj || (Tj = Object(d.a)(["\n  text-align: center;\n"]))),
        zp = g.b.div(
          Fj ||
            (Fj = Object(d.a)([
              "\n  color: teal;\n  font-weight: 600;\n  font-size: 25px;\n  margin-bottom: 10px;\n",
            ]))
        ),
        Lp = g.b.div(
          Dj ||
            (Dj = Object(d.a)([
              "\n  text-align: left;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n",
            ]))
        ),
        Up = g.b.div(
          Nj ||
            (Nj = Object(d.a)([
              "\n  display: flex;\n  justify-content: space-between;\n",
            ]))
        ),
        Qp = g.b.div(
          Yj ||
            (Yj = Object(d.a)([
              "\n  padding: 40px auto;\n  text-align: center;\n",
            ]))
        ),
        Tp = g.b.div(qj || (qj = Object(d.a)([""]))),
        Fp = g.b.button(
          Hj ||
            (Hj = Object(d.a)([
              "\n  border: none;\n  a {\n    padding: 0.5rem 1rem;\n    background-color: teal;\n    font-weight: 700;\n    border: none;\n    border-radius: 4px;\n    color: #a19d9d;\n    cursor: pointer;\n    border: 1.3px solid teal;\n    margin: 10px 10px;\n    transition: ease-in-out 0.5s;\n    color: #fbfdfd;\n    text-decoration: none;\n    font-size: 15px;\n    &:hover {\n      background-color: #fffefe;\n      color: teal;\n    }\n  }\n",
            ]))
        ),
        Dp = t(214),
        Np = function () {
          return Object(sn.jsx)(Yp, {
            children: Object(sn.jsx)(qp, {
              children: Object(sn.jsxs)(Hp, {
                children: [
                  Object(sn.jsx)(Dp.a, {
                    style: { fontSize: "70px", color: "red" },
                  }),
                  Object(sn.jsxs)(Mp, {
                    children: [
                      Object(sn.jsx)(Jp, { children: "Payment unsuccessful" }),
                      Object(sn.jsx)("p", {
                        style: { fontSize: "20px", margin: "20px auto" },
                        children: "unfortunately your payment was rejected",
                      }),
                      Object(sn.jsx)(Pp, {
                        children: Object(sn.jsx)(Xp, {
                          children: Object(sn.jsx)(Wp, {
                            children: Object(sn.jsx)(nn.b, {
                              to: "/",
                              children: "GO BACK",
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        Yp = g.b.div(
          Mj ||
            (Mj = Object(d.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  width: 50%;\n  background-repeat: no-repeat;\n  background-size: 350px;\n  background-position: 150px 130px;\n  color: gray;\n  font-weight: 600;\n  margin: 100px auto;\n\n  ",
              "\n",
            ])),
          O({
            margin: "100px 0px ",
            width: "100%",
            background:
              "linear-gradient(rgba(255, 255, 255, 0) 10%, #ffffff),\n    url(".concat(
                kp,
                ")"
              ),
            backgroundRepeat: "no-repeat",
            backgroundSize: "330px",
            backgroundPosition: "30px 165px",
          })
        ),
        qp = g.b.div(
          Jj ||
            (Jj = Object(d.a)([
              "\n  width: 100%;\n  margin-bottom: 20px;\n  ",
              "\n",
            ])),
          O({ margin: "0px 10px 0px 10px" })
        ),
        Hp = g.b.div(
          Pj ||
            (Pj = Object(d.a)([
              "\n  padding: 36px;\n  border: 1.3px solid #ccc8c8;\n  border-radius: 0.75rem;\n  box-shadow: 0 20px 25px 2px rgb(0 0 0 / 0.1);\n  text-align: center;\n  background: #ffffffa7;\n",
            ]))
        ),
        Mp = g.b.div(Xj || (Xj = Object(d.a)(["\n  text-align: center;\n"]))),
        Jp = g.b.div(
          Wj ||
            (Wj = Object(d.a)([
              "\n  color: teal;\n  font-weight: 600;\n  font-size: 25px;\n  margin-bottom: 10px;\n",
            ]))
        ),
        Pp =
          (g.b.div(
            Vj ||
              (Vj = Object(d.a)([
                "\n  text-align: left;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n",
              ]))
          ),
          g.b.div(
            Gj ||
              (Gj = Object(d.a)([
                "\n  display: flex;\n  justify-content: space-between;\n",
              ]))
          ),
          g.b.div(
            Kj ||
              (Kj = Object(d.a)([
                "\n  padding: 40px auto;\n  text-align: center;\n",
              ]))
          )),
        Xp = g.b.div(Zj || (Zj = Object(d.a)([""]))),
        Wp = g.b.button(
          _j ||
            (_j = Object(d.a)([
              "\n  padding: 0.5rem 1rem;\n  background-color: teal;\n  font-weight: 700;\n  border: none;\n  border-radius: 4px;\n  color: white;\n  cursor: pointer;\n  border: 1.3px solid teal;\n  margin: 10px 10px;\n  transition: ease-in-out 0.5s;\n  &:hover {\n    background-color: #fffefe;\n    color: teal;\n  }\n  a {\n    color: white;\n    text-decoration: none;\n  }\n",
            ]))
        ),
        Vp = t(215),
        Gp = t(216),
        Kp = t(217),
        Zp = function () {
          var e,
            n,
            t = Object(Ze.c)(function (e) {
              return e.user;
            }).currentUser,
            i = Object(Ze.b)(),
            r = Object(m.useLocation)(),
            o = r.pathname.split("/").includes("payment"),
            a = r.pathname.split("/").includes("login"),
            s = r.pathname.split("/").includes("register"),
            d = Object(Ze.c)(function (e) {
              return e.cart;
            }),
            l = Object(c.useState)(!1),
            b = Object(u.a)(l, 2),
            j = b[0],
            p = b[1],
            x = Object(c.useState)(!1),
            h = Object(u.a)(x, 2),
            g = (h[0], h[1]),
            O = function () {
              p(!j);
            },
            f = Object(c.useRef)(null),
            v = function (e) {
              f.current && !f.current.contains(e.target) && g(!1);
            };
          Object(c.useEffect)(function () {
            return (
              document.addEventListener("mousedown", v),
              function () {
                document.removeEventListener("mousedown", v);
              }
            );
          }, []);
          var y = t && cl.a.url(t.email),
            A =
              null === r ||
              void 0 === r ||
              null === (e = r.pathname) ||
              void 0 === e
                ? void 0
                : e.split("/").includes("cart"),
            w =
              null === r ||
              void 0 === r ||
              null === (n = r.pathname) ||
              void 0 === n
                ? void 0
                : n.split("/").includes("wishList"),
            k = "/" === (null === r || void 0 === r ? void 0 : r.pathname);
          return Object(sn.jsx)(_p, {
            style: { display: o || a || s ? "none" : "" },
            children: Object(sn.jsx)(tu, {
              children: Object(sn.jsxs)("div", {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  gap: "40px",
                },
                children: [
                  Object(sn.jsx)(nn.b, {
                    to: "/",
                    style: { background: k ? "#215b6c" : "" },
                    children: Object(sn.jsx)(iu, {
                      title: "Cart",
                      children: Object(sn.jsx)(Vp.a, {}),
                    }),
                  }),
                  Object(sn.jsx)(nn.b, {
                    to: "/cart",
                    style: { background: A ? "#215b6c" : "" },
                    children: Object(sn.jsx)(iu, {
                      title: "Cart",
                      children: Object(sn.jsx)(Kd.a, {
                        badgeContent: d.quantity,
                        color: "white",
                        children: Object(sn.jsx)(rn.a, {
                          style: { color: "white" },
                        }),
                      }),
                    }),
                  }),
                  Object(sn.jsx)(nn.b, {
                    to: "/wishList",
                    style: { background: w ? "#215b6c" : "" },
                    children: Object(sn.jsx)(iu, {
                      title: "WishList",
                      children: Object(sn.jsx)(Kd.a, {
                        badgeContent: d.favQuantity,
                        color: "teal",
                        children: Object(sn.jsx)(on.a, {
                          style: { color: "white" },
                        }),
                      }),
                    }),
                  }),
                  Object(sn.jsx)(iu, {
                    title: "account",
                    onClick: O,
                    children: Object(sn.jsx)($d.a, {}),
                  }),
                  Object(sn.jsx)(ou, {
                    open: j,
                    children: Object(sn.jsxs)(au, {
                      children: [
                        Object(sn.jsxs)(cu, {
                          children: [
                            Object(sn.jsx)(el.a, {
                              onClick: O,
                              style: {
                                background: "white",
                                borderRadius: "20px",
                                color: "teal",
                                marginRight: "-330px",
                                marginTop: "-10px",
                              },
                            }),
                            y
                              ? Object(sn.jsx)("img", {
                                  src: y,
                                  alt: "profile",
                                  style: {
                                    height: "50px",
                                    width: "50px",
                                    borderRadius: "25px",
                                    objectFit: "contain",
                                  },
                                })
                              : Object(sn.jsx)($d.a, {
                                  style: {
                                    color: "white",
                                    height: "50px",
                                    width: "50px",
                                  },
                                }),
                            Object(sn.jsx)("h3", {
                              children:
                                null === t || void 0 === t ? void 0 : t.name,
                            }),
                            Object(sn.jsx)("span", {
                              children:
                                null === t || void 0 === t ? void 0 : t.email,
                            }),
                            Object(sn.jsx)(ru, {}),
                          ],
                        }),
                        Object(sn.jsxs)("div", {
                          style: { display: "flex", justifyContent: "center" },
                          children: [
                            (null === t || void 0 === t ? void 0 : t.email) &&
                              Object(sn.jsxs)(sn.Fragment, {
                                children: [
                                  Object(sn.jsx)(nn.b, {
                                    to: "/orders",
                                    onClick: O,
                                    children: Object(sn.jsx)(nu, {
                                      children: Object(sn.jsx)(iu, {
                                        title: "Orders",
                                        children: Object(sn.jsx)(nl.a, {}),
                                      }),
                                    }),
                                  }),
                                  Object(sn.jsx)(nn.b, {
                                    to: "",
                                    children: Object(sn.jsx)(nu, {
                                      onClick: function () {
                                        i(Ss()), i(Ve());
                                      },
                                      style: { marginLeft: "25px" },
                                      children: Object(sn.jsx)(iu, {
                                        title: "Log Out",
                                        children: Object(sn.jsx)(tl.a, {}),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            !(null === t || void 0 === t ? void 0 : t.email) &&
                              Object(sn.jsxs)($p, {
                                style: {
                                  display: "flex",
                                  justifyContent: "space-between",
                                },
                                children: [
                                  Object(sn.jsx)(nn.b, {
                                    to: "/register",
                                    style: {
                                      textDecoration: "none",
                                      fontWeight: "semibold",
                                    },
                                    children: Object(sn.jsxs)(eu, {
                                      onClick: O,
                                      children: [
                                        Object(sn.jsx)(Gp.a, {}),
                                        "Register",
                                      ],
                                    }),
                                  }),
                                  Object(sn.jsx)(nn.b, {
                                    to: "/login",
                                    style: {
                                      textDecoration: "none",
                                      fontWeight: "semibold",
                                    },
                                    children: Object(sn.jsxs)(nu, {
                                      onClick: O,
                                      children: [
                                        Object(sn.jsx)(Kp.a, {}),
                                        "Sign In",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        _p = g.b.div(
          $j || ($j = Object(d.a)(["\n  display: none;\n  ", "\n"])),
          O({ display: "flex" })
        ),
        $p = g.b.div(
          ep ||
            (ep = Object(d.a)([
              "\n  display: flex;\n  align-items: center;\n\n  @media (max-width: 768px) {\n    margin-top: 1rem;\n  }\n",
            ]))
        ),
        eu = g.b.div(
          np ||
            (np = Object(d.a)([
              "\n  color: white;\n  padding: 5px 6px;\n  width: 100%;\n  margin-bottom: 13px;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n  background-color: teal;\n  &:hover {\n    cursor: pointer;\n    border-radius: 4px;\n    width: 100%;\n  }\n",
            ]))
        ),
        nu = g.b.div(
          tp ||
            (tp = Object(d.a)([
              "\n  color: white;\n  padding: 5px 6px;\n  width: 100%;\n  margin-bottom: 13px;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n  background-color: teal;\n  &&:hover {\n    cursor: pointer;\n    border-radius: 4px;\n    color: white;\n    width: 100%;\n  }\n",
            ]))
        ),
        tu = g.b.div(
          ip ||
            (ip = Object(d.a)([
              "\n  background-color: teal;\n  position: fixed;\n  bottom: 0;\n  padding-bottom: 4px;\n  width: 100%;\n  height: 50px;\n  z-index: 1000;\n",
            ]))
        ),
        iu = g.b.div(
          rp || (rp = Object(d.a)(["\n  padding: 1rem;\n  color: white;\n"]))
        ),
        ru = g.b.hr(
          cp ||
            (cp = Object(d.a)([
              "\n  background-color: teal;\n  color: teal;\n  height: 1px;\n  width: 100%;\n",
            ]))
        ),
        cu = g.b.div(
          op ||
            (op = Object(d.a)([
              "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 6px;\n  a {\n    text-decoration: none;\n    color: #fff;\n    font-size: 18px;\n    font-weight: 500;\n    transition: ease 0.5s;\n    &&:hover {\n      font-size: 19px;\n    }\n  }\n",
            ]))
        ),
        ou = g.b.div(
          ap ||
            (ap = Object(d.a)([
              "\n  position: fixed;\n  top: 0;\n  z-index: 2000;\n  padding-top: 30px;\n  right: ",
              ";\n  width: 250px;\n  height: 100%;\n  background-color: teal;\n  color: #fff;\n  transition: right 0.3s ease-in-out;\n  @media (max-width: 768px) {\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n",
            ])),
          function (e) {
            return e.open ? "0" : "-3000px";
          }
        ),
        au = g.b.div(
          sp || (sp = Object(d.a)(["\n  padding: 0px 30px 0px 30px;\n"]))
        );
      var su,
        du = function () {
          Object(c.useEffect)(function () {
            var e = function (e) {
              e.preventDefault();
            };
            return (
              document.addEventListener("contextmenu", e),
              function () {
                document.removeEventListener("contextmenu", e);
              }
            );
          }, []);
        },
        lu = function () {
          var e = Object(Ze.c)(function (e) {
            return e.user.currentUser;
          });
          return (
            (null === e || void 0 === e ? void 0 : e.accessToken) &&
              (sessionStorage.getItem("accessToken") ||
                sessionStorage.setItem(
                  "accessToken",
                  JSON.stringify(e.accessToken)
                )),
            du(),
            Object(sn.jsx)(wp, {
              children: Object(sn.jsxs)(nn.a, {
                children: [
                  Object(sn.jsx)(ud, {}),
                  Object(sn.jsx)(bl, {}),
                  Object(sn.jsx)(m.Switch, {
                    children: Object(sn.jsxs)(bu, {
                      children: [
                        Object(sn.jsx)(m.Route, {
                          exact: !0,
                          path: "/",
                          children: Object(sn.jsx)(ss, {}),
                        }),
                        Object(sn.jsx)(m.Route, {
                          path: "/products/:category",
                          children: Object(sn.jsx)(ls, {}),
                        }),
                        Object(sn.jsx)(m.Route, {
                          path: "/product/:id",
                          children: Object(sn.jsx)(yn, {}),
                        }),
                        Object(sn.jsx)(m.Route, {
                          path: "/success",
                          children: Object(sn.jsx)(Gs, {}),
                        }),
                        Object(sn.jsx)(m.Route, {
                          path: "/all-products",
                          children: Object(sn.jsx)(td, {}),
                        }),
                        Object(sn.jsx)(m.Route, {
                          path: "/login",
                          children: (
                            null === e || void 0 === e ? void 0 : e.email
                          )
                            ? Object(sn.jsx)(m.Redirect, { to: "/" })
                            : Object(sn.jsx)(qs, {}),
                        }),
                        Object(sn.jsx)(m.Route, {
                          path: "/register",
                          children: (
                            null === e || void 0 === e ? void 0 : e.email
                          )
                            ? Object(sn.jsx)(m.Redirect, { to: "/" })
                            : Object(sn.jsx)(Rs, {}),
                        }),
                        Object(sn.jsx)(Gd, {
                          path: "/cart",
                          children: Object(sn.jsx)(Rj, {}),
                        }),
                        Object(sn.jsx)(Gd, {
                          path: "/wishList",
                          children: Object(sn.jsx)(gd, {}),
                        }),
                        Object(sn.jsx)(Gd, {
                          path: "/orders",
                          children: Object(sn.jsx)(ob, {}),
                        }),
                        Object(sn.jsx)(m.Route, {
                          path: "/payment/success/:id",
                          children: Object(sn.jsx)(Cp, {}),
                        }),
                        Object(sn.jsx)(m.Route, {
                          path: "/payment/failure/:id",
                          children: Object(sn.jsx)(Np, {}),
                        }),
                      ],
                    }),
                  }),
                  Object(sn.jsx)(Ml, {}),
                  Object(sn.jsx)(Zp, {}),
                ],
              }),
            })
          );
        },
        bu = g.b.div(
          su || (su = Object(d.a)(["\n  margin-top: 82px;\n  ", "\n"])),
          O({ marginTop: "70px" })
        ),
        ju = t(33),
        pu = t(42),
        uu = t(96),
        xu = { key: "root", version: 1, storage: t.n(uu).a },
        hu = Object(ju.b)({ user: Bs, cart: Ke }),
        gu = Object(pu.g)(xu, hu),
        Ou = Object(Fe.a)({
          reducer: gu,
          middleware: function (e) {
            return e({
              serializableCheck: {
                ignoredActions: [pu.a, pu.f, pu.b, pu.c, pu.d, pu.e],
              },
            });
          },
        }),
        fu = Object(pu.h)(Ou),
        mu = t(97);
      (console.log = function () {}),
        s.a.render(
          Object(sn.jsx)(Ze.a, {
            store: Ou,
            children: Object(sn.jsx)(mu.a, {
              loading: null,
              persistor: fu,
              children: Object(sn.jsx)(lu, {}),
            }),
          }),
          document.getElementById("root")
        );
    },
    84: function (e, n, t) {},
  },
  [[175, 1, 2]],
]);
//# sourceMappingURL=main.d675b017.chunk.js.map
