/*! grapesjs-plugin-placeholder2 - 0.1.2 */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports["grapesjs-plugin-placeholder2"] = t())
    : (e["grapesjs-plugin-placeholder2"] = t());
})(
"undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : this, function () {
  return (function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var o = (n[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    var n = {};
    return (
      (t.m = e),
      (t.c = n),
      (t.d = function (e, n, r) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r,
          });
      }),
      (t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(n, "a", n), n;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ""),
      t((t.s = 0))
    );
  })([
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }

      function o() {
        var e = [
          "bind",
          "onDragEnd",
          "shift",
          "body",
          "sorter:drag:end",
          "block:drag:start",
          "frameDoc",
          "contentDocument",
          "index",
          "frameContentWindow",
          "5060922QOKqfM",
          "11417856JbvfQm",
          "_DragDropGrapesJsData",
          "4397589oyqaRU",
          "inFrameData",
          "99JDAlAH",
          "804626WleSlI",
          "after",
          "parentNode",
          "frame:load",
          "onDragStart",
          "1824810qwUSIL",
          "2620908tFAKGy",
          "addComponent",
          "style",
          "insertBefore",
          "contentWindow",
          ".gjs-placeholder {opacity: 0;}",
          "gjs-selected",
          "5256307ZqssWs",
          "appendChild",
          "get",
          "dims",
          "2702cngnmQ",
          "targetModel",
          "push",
          "5RVAcFx",
          "block:drag:stop",
          "dragged",
          "hideGrapesPlaceHolderStyle",
          "editor",
          "pro",
          "11896IOeDTG",
          "2171900ASEIiZ",
          "appendBlock",
          "add",
          "dev",
          "5ryEnKx",
          "hideGrapesPlaceHolder",
          "Something wrong!!!",
          "pos",
          "344753koHsCt",
          "before",
          "refBlock",
          "placeHolder",
          "DomComponents",
          "insertMethod",
          "3174980CZTeUO",
          "86300PxVYfH",
          "futur",
          "3060441MsXrSe",
          "method",
          "frame",
          "remove",
          "grapesjsCkeditorData",
          "sorter:drag",
          "sorter:drag:start",
          "target",
        ];
        return (o = function () {
          return e;
        })();
      }

      function a(e, t, n) {
        var r = l,
          o = document.createElement(e);
        return s(o, n), t && t[r(499)](o), o;
      }
      function i(e, t) {
        var n = o();
        return (i = function (e, t) {
          return (e -= 461), n[e];
        })(e, t);
      }
      function s(e, t) {
        if (t)
          for (var n in t) "object" === u(t[n]) ? s(e[n], t[n]) : (e[n] = t[n]);
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var u =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        c = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        l = i;
      !(function (e, t) {
        for (var n = i, r = e(); []; )
          try {
            if (
              573553 ===
              parseInt(n(527)) / 1 +
                -parseInt(n(485)) / 2 +
                -parseInt(n(461)) / 3 +
                (-parseInt(n(512)) / 4) * (-parseInt(n(516)) / 5) +
                parseInt(n(490)) / 6 +
                (-parseInt(n(502)) / 7) * (-parseInt(n(511)) / 8) +
                parseInt(n(482)) / 9
            )
              break;
            r.push(r.shift());
          } catch (e) {
            r.push(r.shift());
          }
      })(o),
        (t.default = function (e, t) {
          new f(e, t);
        });
      var f = (function () {
        function e(t) {
          var n = this;
          r(this, e);
          var o = i;
          this[o(481)] = {
            editor: t,
            frame: null,
            placeHolder: null,
            refBlock: null,
            insertMethod: null,
            hideGrapesPlaceHolderStyle: null,
            dragged: null,
            appendBlock: null,
          };
          var a = o(515),
            s = o(528),
            u = o(510);
          if (location.host != a + s + "e." + u) {
            var c = function (e, t) {
                var n = l();
                return (c = function (e, t) {
                  return (e -= 216), n[e];
                })(e, t);
              },
              l = function () {
                var e = o,
                  t = [
                    e(526),
                    e(480),
                    e(484),
                    "1209564MNeozS",
                    e(520),
                    e(479),
                    e(498),
                    e(518),
                    "12OdYaFx",
                    e(491),
                    e(505),
                  ];
                return (l = function () {
                  return t;
                })();
              },
              f = c;
            throw (
              ((function (e, t) {
                for (var n = o, r = c, a = e(); []; )
                  try {
                    if (
                      892111 ===
                      parseInt(r(218)) / 1 +
                        parseInt(r(223)) / 2 +
                        (-parseInt(r(217)) / 3) * (-parseInt(r(222)) / 4) +
                        (parseInt(r(224)) / 5) * (parseInt(r(219)) / 6) +
                        -parseInt(r(220)) / 7 +
                        parseInt(r(226)) / 8 +
                        (parseInt(r(216)) / 9) * (-parseInt(r(225)) / 10)
                    )
                      break;
                    a[n(504)](a[n(471)]());
                  } catch (e) {
                    a[n(504)](a.shift());
                  }
              })(l),
              Error(f(221)))
            );
          }
          t.on(o(488), function (e) {
            var t = e.el;
            e.model, e.view;
            n[o(463)] = t;
          }),
            t.on(o(474), function (e, r) {
              var a = o;
              n[a(513)] = t[a(524)][a(492)](e[a(500)]("content"));
              var i = n[a(513)].getEl();
              (n[a(523)] = i.cloneNode(!![])), i[a(464)](), n[a(489)]();
            }),
            t.on(o(467), function (e) {
              var t = o;
              (n.dragged = e), n[t(489)]();
            }),
            t.on(o(466), function (e) {
              var t = o;
              if (e[t(503)]) {
                var r = n.placeHolder || n.dragged;
                return (
                  e[t(501)].length
                    ? (n[t(522)] !== e.dims[e.pos.index].el ||
                        n.insertMethod !== e[t(519)][t(462)]) &&
                      r !== e[t(501)][e.pos.index].el &&
                      ((n.refBlock = e[t(501)][e[t(519)][t(477)]].el),
                      (n[t(525)] = e[t(519)][t(462)]),
                      e[t(519)][t(462)] === t(521)
                        ? n[t(522)][t(487)][t(494)](r, n.refBlock)
                        : n[t(522)][t(486)](r))
                    : e[t(468)].appendChild(r),
                  !![]
                );
              }
            }),
            t.on(o(473), this[o(470)].bind(this)),
            t.on(o(506), this.onDragEnd[o(469)](this));
        }
        return (
          c(e, [
            {
              key: "onDragStart",
              value: function () {
                var e = l;
                (this[e(525)] = null),
                  (this[e(522)] = null),
                  this[e(517)](),
                  this[e(523)] && this[e(523)].classList[e(514)](e(497));
              },
            },
            {
              key: l(470),
              value: function (e) {
                var t = l;
                (this.dragged = null),
                  this[t(523)] && this[t(523)][t(464)](),
                  this[t(508)] && this.hideGrapesPlaceHolderStyle.remove(),
                  (this[t(523)] = null),
                  (this[t(508)] = null),
                  this[t(513)] && this.appendBlock[t(464)](),
                  (this.appendBlock = null);
              },
            },
            {
              key: l(517),
              value: function () {
                var e = l;
                !this[e(508)] &&
                  (this.hideGrapesPlaceHolderStyle = a(
                    e(493),
                    document[e(472)],
                    { innerHTML: e(496) }
                  ));
              },
            },
            {
              key: l(463),
              get: function () {
                var e = l;
                return this[e(481)][e(463)];
              },
              set: function (e) {
                var t = l;
                this[t(481)][t(463)] = e;
              },
            },
            {
              key: l(478),
              get: function () {
                var e = l;
                return this[e(463)] && this[e(463)][e(495)];
              },
            },
            {
              key: l(483),
              get: function () {
                var e = l;
                return this[e(478)] && this[e(478)][e(465)];
              },
            },
            {
              key: l(475),
              get: function () {
                var e = l;
                return this[e(463)] && this[e(463)][e(476)];
              },
            },
            {
              key: "frameBody",
              get: function () {
                var e = l;
                return this.frameDoc && this[e(475)].body;
              },
            },
            {
              key: l(509),
              get: function () {
                return this[l(481)].editor;
              },
            },
            {
              key: l(523),
              get: function () {
                return this._DragDropGrapesJsData.placeHolder;
              },
              set: function (e) {
                var t = l;
                this[t(481)][t(523)] = e;
              },
            },
            {
              key: "appendBlock",
              get: function () {
                return this[l(481)].appendBlock;
              },
            },
            {
              key: l(513),
              set: function (e) {
                var t = l;
                this._DragDropGrapesJsData[t(513)] = e;
              },
            },
            {
              key: "refBlock",
              get: function () {
                return this._DragDropGrapesJsData.refBlock;
              },
              set: function (e) {
                var t = l;
                this[t(481)][t(522)] = e;
              },
            },
            {
              key: l(525),
              get: function () {
                return this[l(481)].insertMethod;
              },
              set: function (e) {
                var t = l;
                this[t(481)][t(525)] = e;
              },
            },
            {
              key: l(508),
              get: function () {
                var e = l;
                return this[e(481)][e(508)];
              },
              set: function (e) {
                var t = l;
                this[t(481)][t(508)] = e;
              },
            },
            {
              key: "dragged",
              get: function () {
                var e = l;
                return this._DragDropGrapesJsData[e(507)];
              },
            },
            {
              key: l(507),
              set: function (e) {
                var t = l;
                this[t(481)][t(507)] = e;
              },
            },
          ]),
          e
        );
      })();
    },
  ]);
});
