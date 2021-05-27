(function(e, n, t) {
  var i, o, a = 0 < arguments.length && void 0 !== e ? e : "fixed", s = 1 < arguments.length && void 0 !== n ? n : 750, d = 2 < arguments.length && void 0 !== t && t, r = document.querySelector('meta[name="viewport"]'), c = document.documentElement.clientWidth;
  switch (a) {
  case "fixed":
      o = c / (i = s);
      break;
  case "rem":
      var l = window.devicePixelRatio || 1;
      i = c * l,
      o = 1 / l,
      document.documentElement.style.fontSize = "".concat(c * l / s * 100, "px")
  }
  r.setAttribute("content", "width=".concat(i, ",initial-scale=").concat(o, ",maximum-scale=").concat(o, ",minimum-scale=").concat(o, ",viewport-fit=cover")),
  d && window.addEventListener("DOMContentLoaded", function() {
      document.body.style.fontSize = "".concat(50 / o, "px")
  })
}("fixed", 750));