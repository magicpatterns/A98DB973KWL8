import Qe, { createContext as X, useState as L, useContext as A, useRef as ve, forwardRef as ea, useEffect as Wa } from "react";
import { faAngleUp as Ya, faChevronRight as J, faChevronLeft as pe, faCheck as je, faMinus as aa, faSort as $a, faCaretUp as Ia, faCaretDown as Ua, faPlus as Va, faCalendar as Ha, faXmark as na, faExclamationCircle as ue, faTimes as fe, faCheckCircle as Ga, faMagnifyingGlass as Ja, faSliders as qa } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as j } from "@fortawesome/react-fontawesome";
import l from "classnames";
import { useDayzed as Xa } from "dayzed";
import * as q from "@radix-ui/react-popover";
import { CSSTransition as Ka } from "react-transition-group";
import { createPortal as Za } from "react-dom";
var me = { exports: {} }, V = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function Qa() {
  if (Ve)
    return V;
  Ve = 1;
  var r = Qe, i = Symbol.for("react.element"), n = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(f, m, x) {
    var v, h = {}, N = null, _ = null;
    x !== void 0 && (N = "" + x), m.key !== void 0 && (N = "" + m.key), m.ref !== void 0 && (_ = m.ref);
    for (v in m)
      t.call(m, v) && !c.hasOwnProperty(v) && (h[v] = m[v]);
    if (f && f.defaultProps)
      for (v in m = f.defaultProps, m)
        h[v] === void 0 && (h[v] = m[v]);
    return { $$typeof: i, type: f, key: N, ref: _, props: h, _owner: o.current };
  }
  return V.Fragment = n, V.jsx = s, V.jsxs = s, V;
}
var H = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function en() {
  return He || (He = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Qe, i = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), f = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), R = Symbol.iterator, O = "@@iterator";
    function C(a) {
      if (a === null || typeof a != "object")
        return null;
      var d = R && a[R] || a[O];
      return typeof d == "function" ? d : null;
    }
    var g = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(a) {
      {
        for (var d = arguments.length, u = new Array(d > 1 ? d - 1 : 0), p = 1; p < d; p++)
          u[p - 1] = arguments[p];
        D("error", a, u);
      }
    }
    function D(a, d, u) {
      {
        var p = g.ReactDebugCurrentFrame, T = p.getStackAddendum();
        T !== "" && (d += "%s", u = u.concat([T]));
        var E = u.map(function(z) {
          return String(z);
        });
        E.unshift("Warning: " + d), Function.prototype.apply.call(console[a], console, E);
      }
    }
    var $ = !1, sa = !1, da = !1, ua = !1, fa = !1, ze;
    ze = Symbol.for("react.module.reference");
    function ma(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === t || a === c || fa || a === o || a === x || a === v || ua || a === _ || $ || sa || da || typeof a == "object" && a !== null && (a.$$typeof === N || a.$$typeof === h || a.$$typeof === s || a.$$typeof === f || a.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === ze || a.getModuleId !== void 0));
    }
    function ha(a, d, u) {
      var p = a.displayName;
      if (p)
        return p;
      var T = d.displayName || d.name || "";
      return T !== "" ? u + "(" + T + ")" : u;
    }
    function Ne(a) {
      return a.displayName || "Context";
    }
    function F(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case t:
          return "Fragment";
        case n:
          return "Portal";
        case c:
          return "Profiler";
        case o:
          return "StrictMode";
        case x:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case f:
            var d = a;
            return Ne(d) + ".Consumer";
          case s:
            var u = a;
            return Ne(u._context) + ".Provider";
          case m:
            return ha(a, a.render, "ForwardRef");
          case h:
            var p = a.displayName || null;
            return p !== null ? p : F(a.type) || "Memo";
          case N: {
            var T = a, E = T._payload, z = T._init;
            try {
              return F(z(E));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, I = 0, ye, Te, Ce, Ee, we, _e, Re;
    function ke() {
    }
    ke.__reactDisabledLog = !0;
    function xa() {
      {
        if (I === 0) {
          ye = console.log, Te = console.info, Ce = console.warn, Ee = console.error, we = console.group, _e = console.groupCollapsed, Re = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: ke,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        I++;
      }
    }
    function va() {
      {
        if (I--, I === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, a, {
              value: ye
            }),
            info: B({}, a, {
              value: Te
            }),
            warn: B({}, a, {
              value: Ce
            }),
            error: B({}, a, {
              value: Ee
            }),
            group: B({}, a, {
              value: we
            }),
            groupCollapsed: B({}, a, {
              value: _e
            }),
            groupEnd: B({}, a, {
              value: Re
            })
          });
        }
        I < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = g.ReactCurrentDispatcher, ie;
    function K(a, d, u) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (T) {
            var p = T.stack.trim().match(/\n( *(at )?)/);
            ie = p && p[1] || "";
          }
        return `
` + ie + a;
      }
    }
    var te = !1, Z;
    {
      var pa = typeof WeakMap == "function" ? WeakMap : Map;
      Z = new pa();
    }
    function Se(a, d) {
      if (!a || te)
        return "";
      {
        var u = Z.get(a);
        if (u !== void 0)
          return u;
      }
      var p;
      te = !0;
      var T = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var E;
      E = re.current, re.current = null, xa();
      try {
        if (d) {
          var z = function() {
            throw Error();
          };
          if (Object.defineProperty(z.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(z, []);
            } catch (M) {
              p = M;
            }
            Reflect.construct(a, [], z);
          } else {
            try {
              z.call();
            } catch (M) {
              p = M;
            }
            a.call(z.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (M) {
            p = M;
          }
          a();
        }
      } catch (M) {
        if (M && p && typeof M.stack == "string") {
          for (var b = M.stack.split(`
`), S = p.stack.split(`
`), w = b.length - 1, k = S.length - 1; w >= 1 && k >= 0 && b[w] !== S[k]; )
            k--;
          for (; w >= 1 && k >= 0; w--, k--)
            if (b[w] !== S[k]) {
              if (w !== 1 || k !== 1)
                do
                  if (w--, k--, k < 0 || b[w] !== S[k]) {
                    var P = `
` + b[w].replace(" at new ", " at ");
                    return a.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", a.displayName)), typeof a == "function" && Z.set(a, P), P;
                  }
                while (w >= 1 && k >= 0);
              break;
            }
        }
      } finally {
        te = !1, re.current = E, va(), Error.prepareStackTrace = T;
      }
      var Y = a ? a.displayName || a.name : "", Ue = Y ? K(Y) : "";
      return typeof a == "function" && Z.set(a, Ue), Ue;
    }
    function ja(a, d, u) {
      return Se(a, !1);
    }
    function ba(a) {
      var d = a.prototype;
      return !!(d && d.isReactComponent);
    }
    function Q(a, d, u) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return Se(a, ba(a));
      if (typeof a == "string")
        return K(a);
      switch (a) {
        case x:
          return K("Suspense");
        case v:
          return K("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case m:
            return ja(a.render);
          case h:
            return Q(a.type, d, u);
          case N: {
            var p = a, T = p._payload, E = p._init;
            try {
              return Q(E(T), d, u);
            } catch {
            }
          }
        }
      return "";
    }
    var ee = Object.prototype.hasOwnProperty, Pe = {}, Oe = g.ReactDebugCurrentFrame;
    function ae(a) {
      if (a) {
        var d = a._owner, u = Q(a.type, a._source, d ? d.type : null);
        Oe.setExtraStackFrame(u);
      } else
        Oe.setExtraStackFrame(null);
    }
    function ga(a, d, u, p, T) {
      {
        var E = Function.call.bind(ee);
        for (var z in a)
          if (E(a, z)) {
            var b = void 0;
            try {
              if (typeof a[z] != "function") {
                var S = Error((p || "React class") + ": " + u + " type `" + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              b = a[z](d, z, p, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              b = w;
            }
            b && !(b instanceof Error) && (ae(T), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", u, z, typeof b), ae(null)), b instanceof Error && !(b.message in Pe) && (Pe[b.message] = !0, ae(T), y("Failed %s type: %s", u, b.message), ae(null));
          }
      }
    }
    var za = Array.isArray;
    function le(a) {
      return za(a);
    }
    function Na(a) {
      {
        var d = typeof Symbol == "function" && Symbol.toStringTag, u = d && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return u;
      }
    }
    function ya(a) {
      try {
        return De(a), !1;
      } catch {
        return !0;
      }
    }
    function De(a) {
      return "" + a;
    }
    function Fe(a) {
      if (ya(a))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Na(a)), De(a);
    }
    var U = g.ReactCurrentOwner, Ta = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Me, Le, oe;
    oe = {};
    function Ca(a) {
      if (ee.call(a, "ref")) {
        var d = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function Ea(a) {
      if (ee.call(a, "key")) {
        var d = Object.getOwnPropertyDescriptor(a, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function wa(a, d) {
      if (typeof a.ref == "string" && U.current && d && U.current.stateNode !== d) {
        var u = F(U.current.type);
        oe[u] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(U.current.type), a.ref), oe[u] = !0);
      }
    }
    function _a(a, d) {
      {
        var u = function() {
          Me || (Me = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        u.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function Ra(a, d) {
      {
        var u = function() {
          Le || (Le = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        u.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var ka = function(a, d, u, p, T, E, z) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: a,
        key: d,
        ref: u,
        props: z,
        // Record the component responsible for creating this element.
        _owner: E
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function Sa(a, d, u, p, T) {
      {
        var E, z = {}, b = null, S = null;
        u !== void 0 && (Fe(u), b = "" + u), Ea(d) && (Fe(d.key), b = "" + d.key), Ca(d) && (S = d.ref, wa(d, T));
        for (E in d)
          ee.call(d, E) && !Ta.hasOwnProperty(E) && (z[E] = d[E]);
        if (a && a.defaultProps) {
          var w = a.defaultProps;
          for (E in w)
            z[E] === void 0 && (z[E] = w[E]);
        }
        if (b || S) {
          var k = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          b && _a(z, k), S && Ra(z, k);
        }
        return ka(a, b, S, T, p, U.current, z);
      }
    }
    var ce = g.ReactCurrentOwner, Be = g.ReactDebugCurrentFrame;
    function W(a) {
      if (a) {
        var d = a._owner, u = Q(a.type, a._source, d ? d.type : null);
        Be.setExtraStackFrame(u);
      } else
        Be.setExtraStackFrame(null);
    }
    var se;
    se = !1;
    function de(a) {
      return typeof a == "object" && a !== null && a.$$typeof === i;
    }
    function Ae() {
      {
        if (ce.current) {
          var a = F(ce.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function Pa(a) {
      {
        if (a !== void 0) {
          var d = a.fileName.replace(/^.*[\\\/]/, ""), u = a.lineNumber;
          return `

Check your code at ` + d + ":" + u + ".";
        }
        return "";
      }
    }
    var We = {};
    function Oa(a) {
      {
        var d = Ae();
        if (!d) {
          var u = typeof a == "string" ? a : a.displayName || a.name;
          u && (d = `

Check the top-level render call using <` + u + ">.");
        }
        return d;
      }
    }
    function Ye(a, d) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var u = Oa(d);
        if (We[u])
          return;
        We[u] = !0;
        var p = "";
        a && a._owner && a._owner !== ce.current && (p = " It was passed a child from " + F(a._owner.type) + "."), W(a), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, p), W(null);
      }
    }
    function $e(a, d) {
      {
        if (typeof a != "object")
          return;
        if (le(a))
          for (var u = 0; u < a.length; u++) {
            var p = a[u];
            de(p) && Ye(p, d);
          }
        else if (de(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var T = C(a);
          if (typeof T == "function" && T !== a.entries)
            for (var E = T.call(a), z; !(z = E.next()).done; )
              de(z.value) && Ye(z.value, d);
        }
      }
    }
    function Da(a) {
      {
        var d = a.type;
        if (d == null || typeof d == "string")
          return;
        var u;
        if (typeof d == "function")
          u = d.propTypes;
        else if (typeof d == "object" && (d.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        d.$$typeof === h))
          u = d.propTypes;
        else
          return;
        if (u) {
          var p = F(d);
          ga(u, a.props, "prop", p, a);
        } else if (d.PropTypes !== void 0 && !se) {
          se = !0;
          var T = F(d);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", T || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Fa(a) {
      {
        for (var d = Object.keys(a.props), u = 0; u < d.length; u++) {
          var p = d[u];
          if (p !== "children" && p !== "key") {
            W(a), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), W(null);
            break;
          }
        }
        a.ref !== null && (W(a), y("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    function Ie(a, d, u, p, T, E) {
      {
        var z = ma(a);
        if (!z) {
          var b = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var S = Pa(T);
          S ? b += S : b += Ae();
          var w;
          a === null ? w = "null" : le(a) ? w = "array" : a !== void 0 && a.$$typeof === i ? (w = "<" + (F(a.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : w = typeof a, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, b);
        }
        var k = Sa(a, d, u, T, E);
        if (k == null)
          return k;
        if (z) {
          var P = d.children;
          if (P !== void 0)
            if (p)
              if (le(P)) {
                for (var Y = 0; Y < P.length; Y++)
                  $e(P[Y], a);
                Object.freeze && Object.freeze(P);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $e(P, a);
        }
        return a === t ? Fa(k) : Da(k), k;
      }
    }
    function Ma(a, d, u) {
      return Ie(a, d, u, !0);
    }
    function La(a, d, u) {
      return Ie(a, d, u, !1);
    }
    var Ba = La, Aa = Ma;
    H.Fragment = t, H.jsx = Ba, H.jsxs = Aa;
  }()), H;
}
process.env.NODE_ENV === "production" ? me.exports = Qa() : me.exports = en();
var e = me.exports;
const be = X({
  isExpanded: !1,
  setIsExpanded: () => {
  }
});
function Rn({
  isExpanded: r,
  onChange: i,
  children: n,
  style: t,
  className: o,
  ref: c
}) {
  const [s, f] = L(!1);
  let m = {
    isExpanded: s,
    setIsExpanded: f
  };
  return r !== void 0 && (m = {
    isExpanded: r,
    setIsExpanded: i
  }), /* @__PURE__ */ e.jsx(be.Provider, { value: m, children: /* @__PURE__ */ e.jsx(
    "div",
    {
      className: l("localize-accordion", o),
      style: t,
      ref: c,
      children: n
    }
  ) });
}
function kn({
  label: r,
  leftIcon: i,
  rightIcon: n,
  hasBorder: t,
  style: o,
  ref: c,
  className: s
}) {
  const { isExpanded: f, setIsExpanded: m } = A(be);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: l(
        "localize-accordion-header",
        {
          "localize-accordion-header-border": t,
          "localize-accordion-header-expanded": f
        },
        s
      ),
      onClick: () => {
        m && m(!f);
      },
      style: o,
      ref: c,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: l("localize-accordion-header-content"), children: [
          /* @__PURE__ */ e.jsx("span", { children: r }),
          i && /* @__PURE__ */ e.jsx(
            j,
            {
              icon: i,
              className: l("localize-accordion-header-left-icon")
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { children: [
          n && /* @__PURE__ */ e.jsx(
            j,
            {
              icon: n,
              className: l("localize-accordion-header-right-icon")
            }
          ),
          /* @__PURE__ */ e.jsx(
            j,
            {
              icon: Ya,
              className: l("localize-accordion-header-expand-icon")
            }
          )
        ] })
      ]
    }
  );
}
function Sn({
  children: r,
  style: i,
  className: n
}) {
  var c;
  const { isExpanded: t } = A(be), o = ve(null);
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: o,
      className: l("localize-accordion-body", n),
      style: {
        ...i,
        maxHeight: t ? (c = o == null ? void 0 : o.current) == null ? void 0 : c.scrollHeight : 0
      },
      children: r
    }
  );
}
function Pn({
  children: r,
  style: i,
  className: n
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: l("localize-accordion-content", n),
      style: i,
      children: r
    }
  );
}
function On({
  label: r,
  onClick: i,
  style: n,
  className: t
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: l("localize-accordion-footer", t),
      style: n,
      children: /* @__PURE__ */ e.jsx(
        "div",
        {
          className: l("localize-accordion-footer-text"),
          onClick: i,
          children: r
        }
      )
    }
  );
}
function an(r) {
  const i = r.split(" "), n = i[0] ?? "", t = i.length > 1 ? i[i.length - 1] : "";
  return n && t ? n.charAt(0) + t.charAt(0) : n.charAt(0);
}
function Dn({
  src: r,
  size: i = "md",
  name: n,
  className: t,
  style: o
}) {
  return r ? /* @__PURE__ */ e.jsx(
    "img",
    {
      className: l(
        "localize-avatar",
        "localize-avatar-" + i,
        t
      ),
      src: r,
      alt: n,
      style: o
    }
  ) : /* @__PURE__ */ e.jsx(
    "div",
    {
      className: l(
        "localize-avatar",
        "localize-avatar-" + i,
        t
      ),
      role: "img",
      "aria-label": n,
      style: o,
      children: n ? an(n) : null
    }
  );
}
function Fn({
  icon: r,
  label: i,
  variant: n,
  className: t
}) {
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: l(
        "localize-badge",
        {
          ["localize-badge-variant-" + n]: !!n
        },
        t
      ),
      children: [
        r && /* @__PURE__ */ e.jsx(j, { icon: r }),
        i && /* @__PURE__ */ e.jsx(
          "span",
          {
            className: l({
              "localize-badge-left-icon": r
            }),
            children: i
          }
        )
      ]
    }
  );
}
function Mn({
  items: r,
  direction: i,
  className: n,
  style: t
}) {
  r.sort((c, s) => c.index - s.index);
  const o = r.length - 1;
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: l({
        "localize-breadcrumbs": i === "row",
        [i]: i === "row",
        className: n
      }),
      style: t,
      children: r.map((c, s) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(
          "p",
          {
            className: l({
              "localize-breadcrumbs": i === "column",
              [i]: i === "column"
            }),
            onClick: () => {
              c.onClick && c.onClick();
            },
            children: /* @__PURE__ */ e.jsx(
              "span",
              {
                className: l({
                  "parent ": s !== o,
                  "current ": s === o,
                  "localize-cursor-pointer": !!c.onClick
                }),
                children: c.text
              }
            )
          },
          s
        ),
        i === "column" && s === o && /* @__PURE__ */ e.jsx(
          j,
          {
            icon: J,
            className: "localize-breadcrumb-icon"
          }
        ),
        i === "row" && s !== o && /* @__PURE__ */ e.jsx(
          j,
          {
            icon: J,
            className: "localize-breadcrumb-icon icon-row-margin"
          }
        )
      ] }))
    }
  );
}
var G = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var i = "fas", n = "spinner", t = 512, o = 512, c = [], s = "f110", f = "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z";
  r.definition = {
    prefix: i,
    iconName: n,
    icon: [
      t,
      o,
      c,
      s,
      f
    ]
  }, r.faSpinner = r.definition, r.prefix = i, r.iconName = n, r.width = t, r.height = o, r.ligatures = c, r.unicode = s, r.svgPathData = f, r.aliases = c;
})(G);
function nn({
  variant: r = "primary",
  size: i = "md",
  label: n = "",
  rightIcon: t,
  leftIcon: o,
  disabled: c,
  isLoading: s,
  centerIcon: f,
  onClick: m,
  className: x,
  ref: v,
  ...h
}) {
  s && (t && (t = G.faSpinner), o && (o = G.faSpinner), f && (f = G.faSpinner));
  let N = null;
  return f ? N = /* @__PURE__ */ e.jsx(j, { icon: f, spin: s }) : N = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    o && /* @__PURE__ */ e.jsx(j, { icon: o, spin: s }),
    /* @__PURE__ */ e.jsx(
      "span",
      {
        style: { fontFamily: "museo-sans, sans-serif" },
        className: l({
          "right-icon-spacing": !!t || s && !t && !f && !o,
          "left-icon-spacing": !!o
        }),
        children: n
      }
    ),
    s && !t && !f && !o && /* @__PURE__ */ e.jsx(j, { icon: G.faSpinner, spin: !0 }),
    t && !s && /* @__PURE__ */ e.jsx(j, { icon: t })
  ] }), /* @__PURE__ */ e.jsx(
    "button",
    {
      ref: v,
      disabled: c,
      onClick: m,
      className: l(
        "localize-button",
        "localize-button-variant-" + r.toLowerCase(),
        "localize-button-size-" + i.toLowerCase(),
        x
      ),
      ...h,
      children: N
    }
  );
}
const he = ea(nn);
const rn = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
], tn = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], ra = X({
  selectedDates: [],
  selectionType: "single",
  firstDate: void 0,
  renderProps: {
    calendars: [],
    getBackProps: () => ({}),
    getForwardProps: () => ({}),
    getDateProps: () => ({})
  },
  setFirstDate: () => {
  },
  secondDate: void 0,
  setSecondDate: () => {
  },
  hoveringDate: void 0,
  setHoveringDate: () => {
  }
}), Ge = (r, i, n) => {
  if (!i || !n)
    return !1;
  let t = i, o = n;
  return t.getTime() > o.getTime() && (t = n, o = i), r.getTime() > t.getTime() && r.getTime() < o.getTime();
};
function ln({
  variant: r = "base",
  selectionType: i = "single",
  selectedDates: n = [],
  onChangeDates: t,
  minDate: o,
  maxDate: c
}) {
  const [s, f] = L(
    n[0]
  ), [m, x] = L(
    n[1]
  ), [v, h] = L(0), [N, _] = L();
  let R = 1;
  i === "range" && (R = 2);
  const O = Xa({
    selected: n,
    onDateSelected: (g) => {
      if (i === "range") {
        let y = s, D = m;
        if (s ? g.date.getTime() === s.getTime() ? (y = m, D = void 0) : m && g.date.getTime() === m.getTime() ? D = void 0 : D = g.date : y = g.date, f(y), x(D), t) {
          const $ = [];
          y && $.push(y), D && $.push(D), t($);
        }
      } else
        i === "single" && (f(g.date), t && t([g.date]));
    },
    offset: v,
    onOffsetChanged: (g) => {
      h(g);
    },
    showOutsideDays: !0,
    monthsToDisplay: R,
    minDate: o,
    maxDate: c
  }), { calendars: C } = O;
  return Wa(() => {
    n.length === 0 && (f(void 0), x(void 0));
  }, [n]), /* @__PURE__ */ e.jsx(
    ra.Provider,
    {
      value: {
        selectedDates: n,
        selectionType: i,
        firstDate: s,
        renderProps: O,
        setFirstDate: f,
        secondDate: m,
        setSecondDate: x,
        hoveringDate: N,
        setHoveringDate: _
      },
      children: /* @__PURE__ */ e.jsx(
        "div",
        {
          className: l("localize-calendar", {
            "localize-calendar-variant-variant": r.toLowerCase() !== "base"
          }),
          children: C.map((g, y) => /* @__PURE__ */ e.jsxs(
            "div",
            {
              className: l("localize-calendar-container"),
              children: [
                /* @__PURE__ */ e.jsxs(
                  "div",
                  {
                    className: l("localize-calendar-header"),
                    children: [
                      y === 0 && /* @__PURE__ */ e.jsx(Je, { direction: "left", renderProps: O }),
                      R > 1 && y === C.length - 1 && /* @__PURE__ */ e.jsx("div", {}),
                      /* @__PURE__ */ e.jsxs("div", { className: l("localize-calendar-header-text"), children: [
                        rn[g.month],
                        " ",
                        g.year
                      ] }),
                      y === C.length - 1 && /* @__PURE__ */ e.jsx(Je, { direction: "right", renderProps: O }),
                      R > 1 && y === 0 && /* @__PURE__ */ e.jsx("div", {})
                    ]
                  },
                  g.month
                ),
                /* @__PURE__ */ e.jsx("div", { className: l("localize-calendar-body"), children: /* @__PURE__ */ e.jsx(on, { calendar: g }, g.month) })
              ]
            },
            g.month
          ))
        }
      )
    }
  );
}
function on({ calendar: r }) {
  return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: l("localize-calendar-table"), children: [
    /* @__PURE__ */ e.jsx("div", { className: l("localize-calendar-weekday-row"), children: tn.map((i) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: l("localize-calendar-cell"),
        children: i
      },
      r.month + r.year + i
    )) }),
    r.weeks.map((i, n) => /* @__PURE__ */ e.jsx("div", { style: { display: "table-row" }, children: i.map((t, o) => {
      const c = r.month + r.year + n + o;
      return /* @__PURE__ */ e.jsx(cn, { dateObj: t, calendar: r }, c);
    }) }, "week-" + n))
  ] }) });
}
function Je({
  direction: r,
  renderProps: i
}) {
  const { calendars: n, getBackProps: t, getForwardProps: o } = i;
  return /* @__PURE__ */ e.jsx(
    "button",
    {
      className: l("localize-calendar-header-icon-button"),
      ...r === "left" ? t({ calendars: n }) : o({ calendars: n }),
      children: /* @__PURE__ */ e.jsx(
        j,
        {
          className: l("localize-calendar-header-icon"),
          icon: r === "left" ? pe : J
        }
      )
    }
  );
}
function cn({
  dateObj: r,
  calendar: i
}) {
  const {
    selectedDates: n,
    renderProps: t,
    firstDate: o,
    secondDate: c,
    hoveringDate: s,
    setHoveringDate: f,
    selectionType: m
  } = A(ra), { getDateProps: x } = t;
  if (!r)
    return /* @__PURE__ */ e.jsx("div", { className: l("localize-calendar-cell") });
  const { date: v, selected: h, selectable: N } = r;
  let _ = !1, R = !1;
  if (o && c && h) {
    const C = Math.min(o.getTime(), c.getTime()), g = Math.max(o.getTime(), c.getTime());
    _ = C === v.getTime(), R = g === v.getTime();
  } else if (o && c === void 0 && s) {
    const C = Math.min(o.getTime(), s.getTime()), g = Math.max(o.getTime(), s.getTime());
    _ = C === v.getTime(), R = g === v.getTime();
  }
  const O = m === "range" && (Ge(v, o, c) || n.length === 1 && Ge(v, o, s));
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: l("localize-calendar-cell", {
        "localize-calendar-cell-disabled": v.getMonth() !== i.month || !N,
        "localize-calendar-cell-selected": h,
        "localize-calendar-cell-in-range": O,
        "localize-calendar-cell-selected-left": _ && m === "range",
        "localize-calendar-cell-selected-right": R && m === "range"
      }),
      onMouseOver: () => {
        s ? s.getTime() !== v.getTime() && f(v) : f(v);
      },
      onMouseLeave: () => {
        s && s.getTime() === v.getTime() && f(void 0);
      },
      ...x({ dateObj: r }),
      children: N ? v.getDate() : "X"
    }
  );
}
function Ln({
  children: r,
  className: i,
  onClick: n
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: l(
        "localize-card",
        {
          "localize-card-clickable": !!n
        },
        i
      ),
      onClick: n,
      children: r
    }
  );
}
function Bn({
  children: r,
  className: i
}) {
  return /* @__PURE__ */ e.jsx("div", { className: l("localize-card-header", i), children: r });
}
function An({
  children: r,
  className: i
}) {
  return /* @__PURE__ */ e.jsx("div", { className: l("localize-card-body", i), children: r });
}
function Wn({
  children: r,
  className: i
}) {
  return /* @__PURE__ */ e.jsx("div", { className: l("localize-card-footer", i), children: r });
}
function ia({
  type: r,
  style: i,
  className: n,
  onClick: t
}) {
  return r === "trial-badge-free" ? /* @__PURE__ */ e.jsx(
    qe,
    {
      variant: "free",
      style: i,
      className: n,
      onClick: t
    }
  ) : r === "trial-badge-advanced" ? /* @__PURE__ */ e.jsx(
    qe,
    {
      variant: "advanced",
      style: i,
      className: n,
      onClick: t
    }
  ) : /* @__PURE__ */ e.jsx(
    j,
    {
      icon: r,
      className: l(n),
      style: i,
      onClick: t
    }
  );
}
function qe({
  variant: r,
  style: i,
  className: n,
  onClick: t
}) {
  let o = null;
  return r === "advanced" ? o = /* @__PURE__ */ e.jsxs(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      onClick: t,
      children: [
        /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M9.75 1.01036L15.5442 4.35566C16.0083 4.62361 16.2942 5.1188 16.2942 5.6547V12.3453C16.2942 12.8812 16.0083 13.3764 15.5442 13.6443L9.75 16.9896C9.2859 17.2576 8.7141 17.2576 8.25 16.9896L2.45577 13.6443C1.99167 13.3764 1.70577 12.8812 1.70577 12.3453V5.6547C1.70577 5.1188 1.99167 4.62361 2.45577 4.35566L8.25 1.01036C8.7141 0.742414 9.2859 0.742414 9.75 1.01036Z",
            fill: "url(#paint0_linear_1077_463)",
            stroke: "white",
            "stroke-linejoin": "round"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M8.73082 5.45428C8.84087 5.2313 9.15882 5.2313 9.26887 5.45428L10.1323 7.20385C10.176 7.29239 10.2605 7.35376 10.3582 7.36796L12.289 7.64852C12.535 7.68427 12.6333 7.98667 12.4552 8.16023L11.0581 9.52208C10.9874 9.591 10.9552 9.6903 10.9718 9.78762L11.3017 11.7106C11.3437 11.9557 11.0865 12.1425 10.8664 12.0268L9.13945 11.1189C9.05205 11.073 8.94764 11.073 8.86024 11.1189L7.13331 12.0268C6.91322 12.1425 6.65599 11.9557 6.69803 11.7106L7.02784 9.78762C7.04453 9.6903 7.01227 9.591 6.94156 9.52208L5.54444 8.16023C5.36639 7.98667 5.46464 7.68427 5.71071 7.64852L7.64148 7.36796C7.73919 7.35376 7.82366 7.29239 7.86736 7.20385L8.73082 5.45428Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsxs(
          "linearGradient",
          {
            id: "paint0_linear_1077_463",
            x1: "4.5",
            y1: "1.63636",
            x2: "13.9091",
            y2: "16.7727",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ e.jsx("stop", { "stop-color": "#4B668E" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "1", "stop-color": "#3997BD" })
            ]
          }
        ) })
      ]
    }
  ) : o = /* @__PURE__ */ e.jsxs(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      onClick: t,
      children: [
        /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M9.75 1.01036L15.5442 4.35566C16.0083 4.62361 16.2942 5.1188 16.2942 5.6547V12.3453C16.2942 12.8812 16.0083 13.3764 15.5442 13.6443L9.75 16.9896C9.2859 17.2576 8.7141 17.2576 8.25 16.9896L2.45577 13.6443C1.99167 13.3764 1.70577 12.8812 1.70577 12.3453V5.6547C1.70577 5.1188 1.99167 4.62361 2.45577 4.35566L8.25 1.01036C8.7141 0.742414 9.2859 0.742414 9.75 1.01036Z",
            fill: "url(#paint0_linear_1077_460)",
            stroke: "white",
            "stroke-linejoin": "round"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M8.73095 5.45428C8.84099 5.2313 9.15894 5.2313 9.26899 5.45428L10.1325 7.20385C10.1762 7.29239 10.2606 7.35376 10.3583 7.36796L12.2891 7.64852C12.5352 7.68427 12.6334 7.98667 12.4554 8.16023L11.0583 9.52208C10.9875 9.591 10.9553 9.6903 10.972 9.78762L11.3018 11.7106C11.3438 11.9557 11.0866 12.1425 10.8665 12.0268L9.13957 11.1189C9.05217 11.073 8.94776 11.073 8.86036 11.1189L7.13343 12.0268C6.91334 12.1425 6.65611 11.9557 6.69815 11.7106L7.02796 9.78762C7.04465 9.6903 7.01239 9.591 6.94168 9.52208L5.54457 8.16023C5.36651 7.98667 5.46476 7.68427 5.71083 7.64852L7.6416 7.36796C7.73931 7.35376 7.82378 7.29239 7.86748 7.20385L8.73095 5.45428Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsxs(
          "linearGradient",
          {
            id: "paint0_linear_1077_460",
            x1: "4.5",
            y1: "1.63636",
            x2: "13.9091",
            y2: "16.7727",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ e.jsx("stop", { "stop-color": "#9B51E0" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "1", "stop-color": "#3997BD" })
            ]
          }
        ) })
      ]
    }
  ), /* @__PURE__ */ e.jsx("div", { style: i, className: n, children: o });
}
function xe({
  onClick: r,
  isChecked: i,
  checkmark: n = "check",
  label: t,
  size: o = "md",
  icon: c,
  iconColor: s = "primary",
  disabled: f,
  className: m,
  ...x
}) {
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: l(
        "localize-checkbox-container",
        "localize-checkbox-size-" + o
      ),
      children: [
        /* @__PURE__ */ e.jsxs("label", { className: l("localize-checkbox-label"), children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              className: l(
                "localize-checkbox-input",
                m
              ),
              type: "checkbox",
              checked: i,
              onChange: r,
              disabled: f,
              ...x
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              className: "localize-checkbox",
              role: "checkbox",
              "aria-checked": i,
              children: /* @__PURE__ */ e.jsx(
                j,
                {
                  icon: n === "check" ? je : aa,
                  className: "localize-checkmark"
                }
              )
            }
          ),
          /* @__PURE__ */ e.jsx("span", { className: l("localize-checkbox-label-text"), children: t })
        ] }),
        c && /* @__PURE__ */ e.jsx(
          ia,
          {
            type: c,
            className: l("localize-checkbox-icon", {
              "localize-checkbox-icon-primary": s === "primary",
              "localize-checkbox-icon-secondary": s === "secondary"
            })
          }
        )
      ]
    }
  );
}
function sn({
  alignment: r,
  variant: i,
  children: n,
  className: t,
  ref: o,
  style: c,
  ...s
}) {
  return /* @__PURE__ */ e.jsx(
    "table",
    {
      ref: o,
      className: l(
        "localize-table",
        {
          ["localize-table-alignment-" + r]: !!r
        },
        "localize-table-variant-" + i,
        t
      ),
      style: c,
      ...s,
      children: n
    }
  );
}
function dn({
  alignment: r,
  children: i,
  className: n,
  ref: t,
  style: o,
  ...c
}) {
  return /* @__PURE__ */ e.jsx(
    "thead",
    {
      className: l(
        "localize-table-header",
        {
          ["localize-table-alignment-" + r]: !!r
        },
        n
      ),
      ref: t,
      style: o,
      ...c,
      children: i
    }
  );
}
function Xe({
  alignment: r,
  isSortable: i,
  sortDirection: n,
  onSort: t,
  className: o,
  ref: c,
  style: s,
  children: f,
  ...m
}) {
  let x = null;
  i && (x = $a, n === "ascending" ? x = Ia : n === "descending" && (x = Ua));
  const v = () => {
    !i || !t || (n === void 0 ? t("ascending") : n === "ascending" ? t("descending") : n === "descending" && t(void 0));
  };
  return /* @__PURE__ */ e.jsx(
    "th",
    {
      ref: c,
      className: l(
        "localize-table-cell",
        {
          ["localize-table-alignment-" + r]: !!r
        },
        o
      ),
      style: s,
      ...m,
      children: /* @__PURE__ */ e.jsxs("div", { className: l("localize-table-cell-content"), children: [
        f,
        x && /* @__PURE__ */ e.jsx(
          j,
          {
            icon: x,
            className: "localize-table-header-cell-icon-sort",
            onClick: v
          }
        )
      ] })
    }
  );
}
function un({
  alignment: r,
  className: i,
  children: n,
  ref: t,
  style: o,
  ...c
}) {
  return /* @__PURE__ */ e.jsx(
    "tbody",
    {
      ref: t,
      className: l(
        "localize-table-body",
        {
          ["localize-table-alignment-" + r]: !!r
        },
        i
      ),
      style: o,
      ...c,
      children: n
    }
  );
}
function Ke({
  alignment: r,
  className: i,
  children: n,
  ref: t,
  style: o,
  ...c
}) {
  return /* @__PURE__ */ e.jsx(
    "tr",
    {
      ref: t,
      className: l(
        "localize-table-row",
        {
          ["localize-table-alignment-" + r]: !!r
        },
        i
      ),
      style: o,
      ...c,
      children: n
    }
  );
}
const ge = X({
  isExpanded: !1,
  setIsExpanded: () => {
  }
});
function ta({
  alignment: r,
  className: i,
  children: n,
  ref: t,
  style: o,
  initialExpanded: c = !1,
  ...s
}) {
  const [f, m] = L(c);
  return /* @__PURE__ */ e.jsx(
    "tr",
    {
      ref: t,
      className: l(
        "localize-table-row",
        {
          ["localize-table-alignment-" + r]: !!r
        },
        i
      ),
      style: o,
      ...s,
      children: /* @__PURE__ */ e.jsx(
        "td",
        {
          className: l(
            "localize-table-expandable-row-container"
          ),
          colSpan: 100,
          children: /* @__PURE__ */ e.jsx(
            ge.Provider,
            {
              value: { isExpanded: f, setIsExpanded: m },
              children: /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: l(
                    "localize-table-expandable-row-content"
                  ),
                  children: n
                }
              )
            }
          )
        }
      )
    }
  );
}
function fn({ children: r }) {
  const { isExpanded: i, setIsExpanded: n } = A(ge);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: l("localize-table-expandable-row-header"),
      children: [
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: l("localize-table-expandable-row-icon"),
            onClick: () => {
              n && n(!i);
            },
            children: /* @__PURE__ */ e.jsx(j, { icon: i ? aa : Va })
          }
        ),
        r
      ]
    }
  );
}
function mn({ children: r }) {
  var t;
  const { isExpanded: i } = A(ge), n = ve(null);
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: n,
      className: l(
        "localize-table-expandable-row-panel-container"
      ),
      style: {
        maxHeight: i ? (t = n == null ? void 0 : n.current) == null ? void 0 : t.scrollHeight : 0
      },
      children: /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: l("localize-table-expandable-row-panel"),
          children: [
            /* @__PURE__ */ e.jsx(
              "div",
              {
                className: l(
                  "localize-table-expandable-row-icon"
                )
              }
            ),
            r
          ]
        }
      )
    }
  );
}
ta.Header = fn;
ta.Panel = mn;
function Ze({
  alignment: r,
  children: i,
  leadingIcon: n,
  trailingIcon: t,
  separator: o,
  checkbox: c,
  className: s,
  ref: f,
  width: m,
  style: x,
  ...v
}) {
  return /* @__PURE__ */ e.jsx(
    "td",
    {
      ref: f,
      className: l(
        "localize-table-cell",
        {
          ["localize-table-alignment-" + r]: !!r,
          "localize-table-cell-width-nowrap": m === "nowrap"
        },
        s
      ),
      style: x,
      ...v,
      children: /* @__PURE__ */ e.jsxs("div", { className: "localize-table-cell-content", children: [
        c && /* @__PURE__ */ e.jsx(
          "div",
          {
            className: l("localize-table-cell-checkbox", {
              "localize-table-cell-checkbox-separator": o
            }),
            children: /* @__PURE__ */ e.jsx(xe, {})
          }
        ),
        n && /* @__PURE__ */ e.jsx(
          j,
          {
            icon: n,
            className: "localize-table-cell-leading-icon"
          }
        ),
        i,
        t && /* @__PURE__ */ e.jsx(
          j,
          {
            icon: t,
            className: "localize-table-cell-trailing-icon"
          }
        )
      ] })
    }
  );
}
function Yn({
  children: r,
  className: i,
  ref: n,
  style: t,
  ...o
}) {
  return /* @__PURE__ */ e.jsx(
    "tfoot",
    {
      className: l("localize-table-footer", i),
      style: t,
      ref: n,
      ...o,
      children: r
    }
  );
}
function $n({
  className: r,
  data: i,
  columns: n,
  selectable: t,
  selectedIds: o,
  onChangeSelectedIds: c,
  paginate: s,
  isLoading: f,
  renderLoading: m
}) {
  const [x, v] = L(), [h, N] = L(1), _ = [...i];
  x && (_.sort((C, g) => x.sortFunc ? x.sortFunc(C, g) : 0), x.direction === "descending" && _.reverse());
  const R = _.slice(
    (h - 1) * ((s == null ? void 0 : s.rowsPerPage) ?? 1e7),
    (h - 1) * ((s == null ? void 0 : s.rowsPerPage) ?? 1e7) + ((s == null ? void 0 : s.rowsPerPage) ?? 1e7)
  ), O = Math.ceil(i.length / ((s == null ? void 0 : s.rowsPerPage) ?? 1));
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: l(
        "localize-dataTable-container",
        r
      ),
      children: [
        /* @__PURE__ */ e.jsxs(sn, { className: r, children: [
          /* @__PURE__ */ e.jsx(dn, { children: /* @__PURE__ */ e.jsxs(Ke, { children: [
            t && /* @__PURE__ */ e.jsx(Xe, { children: /* @__PURE__ */ e.jsx(
              xe,
              {
                disabled: f,
                isChecked: o.length === i.length,
                onClick: () => {
                  o.length === i.length ? c([]) : c(i.map((C) => C.id));
                }
              }
            ) }),
            n.map((C) => /* @__PURE__ */ e.jsx(
              Xe,
              {
                isSortable: C.sortFunction !== void 0,
                sortDirection: (x == null ? void 0 : x.title) === C.title ? x.direction : void 0,
                onSort: (g) => {
                  g === void 0 ? v(void 0) : C.sortFunction && v({
                    direction: g,
                    title: C.title,
                    sortFunc: C.sortFunction
                  });
                },
                children: C.title
              },
              C.title
            ))
          ] }) }),
          !f && /* @__PURE__ */ e.jsx(un, { children: R.map((C, g) => /* @__PURE__ */ e.jsxs(Ke, { children: [
            t && /* @__PURE__ */ e.jsx(Ze, { children: /* @__PURE__ */ e.jsx(
              xe,
              {
                isChecked: o.includes(C.id),
                onClick: () => {
                  o.includes(C.id) ? c(
                    o.filter((y) => y !== C.id)
                  ) : c([...o, C.id]);
                }
              }
            ) }),
            n.map((y) => /* @__PURE__ */ e.jsx(Ze, { width: y.width, children: y.render({ data: C }) }, y.title))
          ] }, g)) })
        ] }),
        f && /* @__PURE__ */ e.jsx(
          "div",
          {
            className: l([
              "localize-dataTable-footer-container",
              "localize-dataTable-footer-loading"
            ]),
            children: /* @__PURE__ */ e.jsx(
              "div",
              {
                className: "localize-dataTable-footer-loading",
                children: m
              }
            )
          }
        ),
        s && !f && /* @__PURE__ */ e.jsx(
          "div",
          {
            className: l([
              "localize-dataTable-footer-container",
              "localize-dataTable-footer-paginate"
            ]),
            children: /* @__PURE__ */ e.jsxs("div", { className: l("localize-dataTable-paginate"), children: [
              /* @__PURE__ */ e.jsx(
                j,
                {
                  icon: pe,
                  className: "localize-dataTable-paginate-icon",
                  onClick: () => {
                    h > 1 && N(h - 1);
                  }
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "div",
                {
                  className: "localize-dataTable-paginate-context",
                  children: [
                    /* @__PURE__ */ e.jsx("strong", { children: h }),
                    " of ",
                    /* @__PURE__ */ e.jsx("strong", { children: O })
                  ]
                }
              ),
              /* @__PURE__ */ e.jsx(
                j,
                {
                  icon: J,
                  className: "localize-dataTable-paginate-icon",
                  onClick: () => {
                    h < O && N(h + 1);
                  }
                }
              )
            ] })
          }
        )
      ]
    }
  );
}
const hn = q.Root, xn = q.Trigger, la = ea(({ className: r, align: i = "center", ...n }, t) => /* @__PURE__ */ e.jsx(q.Portal, { children: /* @__PURE__ */ e.jsx(
  q.Content,
  {
    ref: t,
    align: i,
    sideOffset: 4,
    className: l("localize-popover-content", r),
    ...n
  }
) }));
la.displayName = q.Content.displayName;
const vn = [
  "All Time",
  "Last 10 Minutes",
  "Last Hour",
  "Yesterday",
  "Last 7 Days",
  "Last 30 Days",
  "This Month",
  "Last Month"
];
function pn(r) {
  const i = String(r.getMonth() + 1).padStart(2, "0"), n = String(r.getDate()).padStart(2, "0"), t = String(r.getFullYear());
  return i + "/" + n + "/" + t;
}
function jn({
  isSelected: r,
  value: i,
  onClick: n
}) {
  return /* @__PURE__ */ e.jsx(
    "button",
    {
      className: l("localize-datePicker-range-button", {
        "localize-datePicker-range-button-selected": r
      }),
      onClick: n,
      children: i
    }
  );
}
function In({
  showLeftIcon: r,
  placeholder: i = "Pick a date",
  value: n,
  onChangeValue: t,
  presets: o = vn,
  selectionType: c = "single",
  formatDate: s = pn,
  className: f,
  style: m,
  buttonRef: x
}) {
  const v = () => {
    if (Array.isArray(n) && n.length > 0) {
      let h = "";
      if (n.length === 1)
        h = s(n[0]), c === "range" && (h += " - ");
      else if (n.length === 2) {
        const N = n[0].getTime() > n[1].getTime() ? n[1] : n[0], _ = n[0].getTime() > n[1].getTime() ? n[0] : n[1];
        h += s(N) + " - " + s(_);
      }
      return h;
    }
    return typeof n == "string" ? n : i;
  };
  return /* @__PURE__ */ e.jsxs(hn, { children: [
    /* @__PURE__ */ e.jsx(xn, { children: /* @__PURE__ */ e.jsxs(
      "button",
      {
        className: l(
          "localize-datePicker-button",
          f
        ),
        style: m,
        ref: x,
        children: [
          r && /* @__PURE__ */ e.jsx(
            j,
            {
              icon: Ha,
              className: l(
                "localize-datePicker-button-icon"
              )
            }
          ),
          /* @__PURE__ */ e.jsx(
            "span",
            {
              className: l("localize-datePicker-button-text"),
              children: v()
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ e.jsx(la, { children: /* @__PURE__ */ e.jsxs("div", { className: l("localize-datePicker-content"), children: [
      o.length > 0 && c === "range" && /* @__PURE__ */ e.jsx(
        "div",
        {
          className: l(
            "localize-datePicker-content-presets"
          ),
          children: o.map((h) => /* @__PURE__ */ e.jsx(
            jn,
            {
              isSelected: h === n,
              value: h,
              onClick: () => {
                t(h);
              }
            },
            h
          ))
        }
      ),
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: l(
            "localize-datePicker-content-calendar"
          ),
          children: /* @__PURE__ */ e.jsx(
            ln,
            {
              selectedDates: Array.isArray(n) ? n : [],
              onChangeDates: (h) => {
                h.length === 0 ? t(void 0) : t(h);
              },
              selectionType: c
            }
          )
        }
      )
    ] }) })
  ] });
}
function bn({
  variant: r = "primary",
  value: i,
  onChange: n,
  className: t,
  clearable: o,
  error: c,
  disabled: s,
  leftIcon: f,
  rightIcon: m,
  onClickRightIcon: x,
  placeholder: v,
  ref: h,
  style: N,
  ..._
}) {
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: l("localize-input", {
        ["localize-input-variant-" + r]: !!r
      }),
      style: N,
      children: [
        f && /* @__PURE__ */ e.jsx("div", { className: l("localize-input-icon-container"), children: /* @__PURE__ */ e.jsx(
          j,
          {
            icon: f,
            className: "localize-input-icon"
          }
        ) }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            value: i,
            onChange: (R) => {
              n && n(R.currentTarget.value);
            },
            className: l(
              "localize-input-input",
              {
                "localize-input-error": c
              },
              t
            ),
            disabled: s,
            placeholder: v,
            ref: h,
            ..._
          }
        ),
        m && /* @__PURE__ */ e.jsx(
          j,
          {
            icon: m,
            className: l("localize-input-action-icon", {
              "localize-input-action-icon-disabled": s,
              "localize-input-action-icon-clickable": x
            }),
            onClick: (R) => {
              x && x(R);
            }
          }
        ),
        o && !c && !m && /* @__PURE__ */ e.jsx(
          j,
          {
            icon: na,
            className: l("localize-input-action-icon", {
              "localize-input-action-icon-disabled": s
            }),
            onClick: () => {
              n && n("");
            }
          }
        ),
        c && !m && /* @__PURE__ */ e.jsx(
          j,
          {
            icon: ue,
            className: l("localize-input-error-icon", {
              "localize-input-action-icon-disabled": s
            })
          }
        )
      ]
    }
  );
}
function Un({
  rightIcon: r,
  leftIcon: i,
  label: n,
  variant: t,
  className: o,
  style: c,
  ref: s
}) {
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: l(
        "localize-chip",
        {
          ["localize-chip-variant-" + t]: !!t
        },
        o
      ),
      style: c,
      ref: s,
      children: [
        i && /* @__PURE__ */ e.jsx(j, { icon: i }),
        n && /* @__PURE__ */ e.jsx(
          "span",
          {
            className: l({
              "localize-chip-right-icon": !!r,
              "localize-chip-left-icon": !!i
            }),
            children: n
          }
        ),
        r && /* @__PURE__ */ e.jsx(j, { icon: r })
      ]
    }
  );
}
function gn({
  isOpen: r,
  children: i
}) {
  return /* @__PURE__ */ e.jsx(e.Fragment, { children: r && Za(i, document.body) });
}
const oa = X({
  onClose: () => {
  }
});
function Vn({
  children: r,
  isOpen: i = !1,
  onClose: n,
  includeOverlay: t = !0,
  className: o,
  style: c,
  ref: s
}) {
  const f = ve(null);
  return /* @__PURE__ */ e.jsx(
    Ka,
    {
      in: i,
      classNames: "localize-modal",
      timeout: 300,
      nodeRef: f,
      children: /* @__PURE__ */ e.jsx(gn, { isOpen: i, children: /* @__PURE__ */ e.jsx(oa.Provider, { value: { onClose: n }, children: /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: l("localize-modal-container"),
          ref: s,
          style: c,
          children: [
            t && /* @__PURE__ */ e.jsx(
              "div",
              {
                className: l("localize-modal-overlay"),
                onClick: () => {
                  n && n();
                }
              }
            ),
            /* @__PURE__ */ e.jsx(
              "div",
              {
                ref: f,
                className: l("localize-modal", o),
                children: r
              }
            )
          ]
        }
      ) }) })
    }
  );
}
function Hn({
  label: r,
  icon: i,
  className: n,
  style: t,
  ref: o
}) {
  const { onClose: c } = A(oa);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: l("localize-modal-header", n),
      style: t,
      ref: o,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: l("localize-modal-header-label"), children: [
          /* @__PURE__ */ e.jsx("span", { children: r }),
          i && /* @__PURE__ */ e.jsx(
            j,
            {
              icon: i,
              className: l("localize-modal-header-icon")
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx(
          j,
          {
            onClick: () => {
              c && c();
            },
            icon: fe,
            className: l("localize-modal-header-close-icon")
          }
        )
      ]
    }
  );
}
function Gn({
  children: r,
  className: i,
  style: n,
  ref: t
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: l("localize-modal-body", i),
      style: n,
      ref: t,
      children: r
    }
  );
}
function Jn({
  children: r,
  className: i,
  style: n,
  ref: t
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: l("localize-modal-footer", i),
      style: n,
      ref: t,
      children: r
    }
  );
}
function qn({
  size: r = "sm",
  buttonText: i,
  title: n,
  text: t,
  variant: o,
  visible: c,
  onClose: s,
  className: f,
  style: m
}) {
  let x;
  return o === "success" ? x = /* @__PURE__ */ e.jsx(j, { icon: Ga }) : o === "error" ? x = /* @__PURE__ */ e.jsx(j, { icon: ue }) : x = r === "sm" ? /* @__PURE__ */ e.jsx(j, { icon: ue }) : /* @__PURE__ */ e.jsx(j, { icon: je }), c ? r === "sm" ? /* @__PURE__ */ e.jsx(
    "div",
    {
      className: l(
        "localize-notificationBanner",
        "localize-notificationBanner-variant-" + o,
        "localize-notificationBanner-size-" + r,
        f
      ),
      style: m,
      children: /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: l(
            "localize-notificationBanner-content",
            "localize-notificationBanner-size-" + r
          ),
          children: [
            /* @__PURE__ */ e.jsxs(
              "div",
              {
                className: l(
                  "localize-notificationBanner-row"
                ),
                children: [
                  /* @__PURE__ */ e.jsx(
                    "div",
                    {
                      className: l(
                        "localize-notificationBanner-icon"
                      ),
                      children: x
                    }
                  ),
                  /* @__PURE__ */ e.jsxs("div", { style: { flexDirection: "row", gap: "4px" }, children: [
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        className: l(
                          "localize-notificationBanner-title"
                        ),
                        children: n
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        className: l(
                          "localize-notificationBanner-text"
                        ),
                        children: t
                      }
                    )
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: s,
                className: l(
                  "localize-notificationBanner-close-button"
                ),
                children: /* @__PURE__ */ e.jsx(j, { icon: fe })
              }
            )
          ]
        }
      )
    }
  ) : /* @__PURE__ */ e.jsx(
    "div",
    {
      className: l(
        "localize-notificationBanner",
        "localize-notificationBanner-variant-" + o,
        "localize-notificationBanner-size-" + r,
        f
      ),
      style: m,
      children: /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: l(
            "localize-notificationBanner-content",
            "localize-notificationBanner-size-" + r
          ),
          children: [
            /* @__PURE__ */ e.jsxs(
              "div",
              {
                className: l(
                  "localize-notificationBanner-row"
                ),
                children: [
                  /* @__PURE__ */ e.jsx(
                    "div",
                    {
                      className: l(
                        "localize-notificationBanner-icon"
                      ),
                      children: x
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "div",
                    {
                      className: l(
                        "localize-notificationBanner-title"
                      ),
                      children: n
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "div",
                    {
                      className: l(
                        "localize-notificationBanner-text"
                      ),
                      children: t
                    }
                  )
                ]
              }
            ),
            i && /* @__PURE__ */ e.jsx(
              he,
              {
                size: "sm",
                onClick: s,
                label: i,
                variant: "base",
                rightIcon: fe
              }
            )
          ]
        }
      )
    }
  ) : null;
}
const ne = 5;
function Xn({
  variant: r,
  controlDisplayType: i = "text",
  pageDisplayType: n = "numbers",
  activePage: t = 1,
  totalPages: o = 5,
  onChangeActivePage: c,
  className: s,
  style: f,
  ref: m
}) {
  const x = [], v = Math.floor(ne / 2);
  if (o < ne)
    for (let h = 1; h <= o; h++)
      x.push(h);
  else if (t - v <= 0)
    for (let h = 1; h <= ne; h++)
      x.push(h);
  else if (t + v > o)
    for (let h = o - ne + 1; h <= o; h++)
      x.push(h);
  else
    for (let h = t - v; h <= t + v; h++)
      x.push(h);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: l(
        "localize-pagination",
        "localize-pagination-variant-" + r,
        s
      ),
      style: f,
      ref: m,
      children: [
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: l(
              "localize-pagination-controls",
              "localize-pagination-controls-left",
              {
                "localize-pagination-controls-disabled": t === 1
              }
            ),
            onClick: () => {
              c && t > 1 && c(t - 1);
            },
            children: [
              i === "arrows" && /* @__PURE__ */ e.jsx(
                j,
                {
                  icon: pe,
                  className: l(
                    "localize-pagination-control-icon"
                  )
                }
              ),
              i === "text" && /* @__PURE__ */ e.jsx("div", { role: "button", children: "Prev" })
            ]
          }
        ),
        n === "text" && /* @__PURE__ */ e.jsx(
          "div",
          {
            className: l(
              "localize-pagination-pages-text-container"
            ),
            children: /* @__PURE__ */ e.jsxs(
              "span",
              {
                className: l(
                  "localize-pagination-pages-text-content"
                ),
                children: [
                  t,
                  "  of  ",
                  o
                ]
              }
            )
          }
        ),
        n === "numbers" && /* @__PURE__ */ e.jsx(
          "div",
          {
            className: l(
              "localize-pagination-pages-numbers-container"
            ),
            children: x.map((h) => /* @__PURE__ */ e.jsx(
              "div",
              {
                role: "button",
                className: l(
                  "localize-pagination-pages-numbers-button",
                  {
                    "localize-pagination-pages-numbers-button-active": h === t
                  }
                ),
                onClick: () => {
                  c && c(h);
                },
                children: h
              },
              h
            ))
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: l(
              "localize-pagination-controls",
              "localize-pagination-controls-right",
              {
                "localize-pagination-controls-disabled": t === o
              }
            ),
            onClick: () => {
              c && t < o && c(t + 1);
            },
            children: [
              i === "arrows" && /* @__PURE__ */ e.jsx(
                j,
                {
                  icon: J,
                  className: l(
                    "localize-pagination-control-icon"
                  )
                }
              ),
              i === "text" && /* @__PURE__ */ e.jsx("div", { role: "button", children: "Next" })
            ]
          }
        )
      ]
    }
  );
}
const ca = X({
  name: ""
});
function Kn({
  name: r,
  value: i,
  onChange: n,
  className: t,
  style: o,
  children: c
}) {
  return /* @__PURE__ */ e.jsx(ca.Provider, { value: { name: r, value: i, onChange: n }, children: /* @__PURE__ */ e.jsx("div", { onChange: n, className: t, style: o, children: c }) });
}
function Zn({
  onClick: r,
  checked: i,
  label: n,
  labelSize: t = "md",
  icon: o,
  iconColor: c,
  disabled: s,
  className: f,
  style: m,
  inputRef: x,
  value: v,
  ...h
}) {
  const N = A(ca), _ = (N == null ? void 0 : N.name) ?? "", R = (N == null ? void 0 : N.value) === v || i;
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: l(
        "localize-radioItem-container",
        f
      ),
      style: m,
      children: [
        /* @__PURE__ */ e.jsxs("label", { className: l("localize-radioItem-label"), children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              className: l("localize-radioItem-input"),
              type: "radio",
              checked: R,
              onChange: r,
              disabled: s,
              name: _,
              ref: x,
              value: v,
              ...h
            }
          ),
          /* @__PURE__ */ e.jsx(
            "span",
            {
              className: "localize-radioItem",
              role: "radio",
              "aria-checked": R,
              children: /* @__PURE__ */ e.jsx("span", { className: "localize-inner-circle" })
            }
          ),
          /* @__PURE__ */ e.jsx(
            "span",
            {
              className: l(
                "localize-radioItem-label-text",
                "localize-radioItem-label-text-" + t
              ),
              children: n
            }
          )
        ] }),
        o && /* @__PURE__ */ e.jsx(
          ia,
          {
            type: o,
            className: l("localize-radioItem-icon", {
              "localize-radioItem-icon-primary": c === "primary",
              "localize-radioItem-icon-secondary": c === "secondary"
            })
          }
        )
      ]
    }
  );
}
function Qn({
  placeholder: r,
  value: i,
  onChange: n,
  disabled: t,
  className: o,
  clearable: c,
  showAdvancedIcon: s,
  onClickAdvancedIcon: f
}) {
  return /* @__PURE__ */ e.jsx(
    bn,
    {
      leftIcon: Ja,
      placeholder: r,
      disabled: t,
      value: i,
      onChange: n,
      className: o,
      clearable: c,
      rightIcon: s ? qa : void 0,
      onClickRightIcon: f
    }
  );
}
function er({
  activeTabIndex: r,
  onChange: i,
  tabs: n,
  border: t = "left",
  size: o = "sm",
  className: c,
  style: s,
  ref: f
}) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: l(
        "localize-tabs",
        "localize-tabs-" + t,
        "localize-tabs-" + o,
        c
      ),
      style: s,
      ref: f,
      children: n.map((m, x) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: l("localize-tab", {
            "localize-tab-active": x === r
          }),
          role: "button",
          tabIndex: 0,
          onClick: () => i(x),
          children: /* @__PURE__ */ e.jsx("span", { children: m })
        },
        m
      ))
    }
  );
}
function ar({
  disabled: r = !1,
  size: i = "md",
  label: n,
  showIcons: t,
  isChecked: o,
  onChange: c,
  className: s,
  style: f,
  inputRef: m
}) {
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: l(
        "localize-toggle",
        "localize-toggle-size-" + i,
        s
      ),
      style: f,
      children: [
        n && /* @__PURE__ */ e.jsx("span", { className: l("localize-switch-label"), children: n }),
        /* @__PURE__ */ e.jsxs("label", { className: l("localize-switch"), children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: m,
              disabled: r,
              type: "checkbox",
              checked: o,
              onChange: (x) => {
                c && c(x.target.checked);
              }
            }
          ),
          /* @__PURE__ */ e.jsx(
            "span",
            {
              className: l("localize-toggle-slider", {
                "localize-toggle-slider-disabled": r
              })
            }
          ),
          t && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(
              "span",
              {
                className: l("localize-switch-enabled-icon"),
                children: /* @__PURE__ */ e.jsx(
                  j,
                  {
                    icon: je,
                    className: l("localize-toggle-icon")
                  }
                )
              }
            ),
            /* @__PURE__ */ e.jsx(
              "span",
              {
                className: l("localize-switch-disabled-icon"),
                children: /* @__PURE__ */ e.jsx(
                  j,
                  {
                    icon: na,
                    className: l("localize-toggle-icon")
                  }
                )
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function zn({
  size: r,
  header: i,
  body: n,
  placement: t,
  primaryAction: o,
  secondaryAction: c,
  actions: s = "center"
}) {
  let f = /* @__PURE__ */ e.jsx("div", {});
  return r === "sm" ? f = /* @__PURE__ */ e.jsx("div", { className: l("localize-tooltip-body"), children: n }) : r === "md" ? f = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { className: l("localize-tooltip-header"), children: i }),
    /* @__PURE__ */ e.jsx("div", { className: l("localize-tooltip-body"), children: n })
  ] }) : r === "lg" && (f = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { className: l("localize-tooltip-header"), children: i }),
    /* @__PURE__ */ e.jsx("div", { className: l("localize-tooltip-body"), children: n }),
    (o || c) && /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: l(
          "localize-tooltip-actions",
          "localize-tooltip-actions-" + s
        ),
        children: [
          o && /* @__PURE__ */ e.jsx(
            he,
            {
              variant: "default",
              size: "sm",
              label: o.label,
              onClick: o.onClick,
              className: "localize-tooltip-primary-action"
            }
          ),
          c && /* @__PURE__ */ e.jsx(
            he,
            {
              variant: "text",
              size: "sm",
              label: c.label,
              onClick: c.onClick,
              className: "localize-tooltip-secondary-action"
            }
          )
        ]
      }
    )
  ] })), /* @__PURE__ */ e.jsx(
    "div",
    {
      className: l(
        "localize-tooltip",
        "localize-tooltip-" + r,
        "localize-tooltip-" + t
      ),
      children: f
    }
  );
}
function nr({
  size: r = "sm",
  header: i,
  body: n,
  placement: t = "bottom",
  children: o,
  primaryAction: c,
  secondaryAction: s,
  actions: f,
  className: m,
  style: x,
  ref: v
}) {
  const [h, N] = L(!1);
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: l("localize-tooltip-wrapper", m),
      onMouseEnter: () => N(!0),
      onMouseLeave: () => N(!1),
      style: x,
      ref: v,
      children: [
        o,
        h && /* @__PURE__ */ e.jsx(
          zn,
          {
            size: r,
            header: i,
            body: n,
            placement: t,
            primaryAction: c,
            secondaryAction: s,
            actions: f
          }
        )
      ]
    }
  );
}
export {
  Rn as Accordion,
  Sn as AccordionBody,
  Pn as AccordionContent,
  be as AccordionContext,
  On as AccordionFooter,
  kn as AccordionHeader,
  Dn as Avatar,
  Fn as Badge,
  Mn as Breadcrumbs,
  he as Button,
  ln as Calendar,
  Ln as Card,
  An as CardBody,
  Wn as CardFooter,
  Bn as CardHeader,
  xe as Checkbox,
  Un as Chip,
  $n as DataTable,
  In as DatePicker,
  ia as Icon,
  bn as Input,
  Vn as Modal,
  Gn as ModalBody,
  Jn as ModalFooter,
  Hn as ModalHeader,
  qn as NotificationBanner,
  Xn as Pagination,
  hn as Popover,
  la as PopoverContent,
  xn as PopoverTrigger,
  Zn as RadioItem,
  Kn as RadioItemGroup,
  Qn as Search,
  sn as Table,
  un as TableBody,
  Ze as TableCell,
  ta as TableExpandableRow,
  Yn as TableFooter,
  dn as TableHeader,
  Xe as TableHeaderCell,
  Ke as TableRow,
  er as Tabs,
  ar as Toggle,
  nr as Tooltip
};
