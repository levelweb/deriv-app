!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("@deriv/components/lib/button-link"),require("@deriv/components/lib/button-link.css"),require("@deriv/components/lib/div100vh-container"),require("@deriv/components/lib/div100vh-container.css"),require("@deriv/components/lib/icon"),require("@deriv/components/lib/icon.css"),require("@deriv/shared/utils/screen"),require("@deriv/translations"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components/lib/button-link","@deriv/components/lib/button-link.css","@deriv/components/lib/div100vh-container","@deriv/components/lib/div100vh-container.css","@deriv/components/lib/icon","@deriv/components/lib/icon.css","@deriv/shared/utils/screen","@deriv/translations","react"],n):"object"==typeof exports?exports["@deriv/account"]=n(require("@deriv/components/lib/button-link"),require("@deriv/components/lib/button-link.css"),require("@deriv/components/lib/div100vh-container"),require("@deriv/components/lib/div100vh-container.css"),require("@deriv/components/lib/icon"),require("@deriv/components/lib/icon.css"),require("@deriv/shared/utils/screen"),require("@deriv/translations"),require("react")):e["@deriv/account"]=n(e["@deriv/components/lib/button-link"],e["@deriv/components/lib/button-link.css"],e["@deriv/components/lib/div100vh-container"],e["@deriv/components/lib/div100vh-container.css"],e["@deriv/components/lib/icon"],e["@deriv/components/lib/icon.css"],e["@deriv/shared/utils/screen"],e["@deriv/translations"],e.react)}(window,(function(e,n,t,i,o,r,c,s,a){return function(e){var n={};function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(i,o,function(n){return e[n]}.bind(null,o));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s="./Components/poa-needs-review/index.js")}({"../node_modules/classnames/index.js":function(e,n,t){var i;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var i=arguments[n];if(i){var r=typeof i;if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i)&&i.length){var c=o.apply(null,i);c&&e.push(c)}else if("object"===r)for(var s in i)t.call(i,s)&&i[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(i=function(){return o}.apply(n,[]))||(e.exports=i)}()},"./Components/icon-message-content/index.js":function(e,n,t){"use strict";t.r(n);var i=t("react"),o=t.n(i),r=t("../node_modules/classnames/index.js"),c=t.n(r),s=t("@deriv/components/lib/div100vh-container"),a=t.n(s),u=(t("@deriv/components/lib/div100vh-container.css"),t("@deriv/shared/utils/screen"));function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var d=function(e){var n=e.className,t=e.children,i=e.icon,r=e.icon_row,s=e.message,d=e.text;return o.a.createElement(a.a,{className:"account-management__message-wrapper",is_disabled:Object(u.isDesktop)(),height_offset:"110px"},o.a.createElement("div",{className:c()("account-management__message-content",l({},"".concat(n,"__message-content"),n))},i&&o.a.createElement("div",{className:c()("account-management__message-icon",l({},"".concat(n,"__message-icon"),n))},i),r&&o.a.createElement("div",null,r),o.a.createElement("div",{className:c()("account-management__message",l({},"".concat(n,"__message"),n))},s),d&&o.a.createElement("div",{className:"account-management__text-container"},o.a.createElement("p",{className:c()("account-management__text",l({},"".concat(n,"__text"),n))},d)),t))};n.default=d},"./Components/poa-continue-trading-button/continue-trading-button.jsx":function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var i=t("@deriv/components/lib/button-link"),o=t.n(i),r=(t("@deriv/components/lib/button-link.css"),t("@deriv/translations")),c=t("react"),s=t.n(c),a=function(){return s.a.createElement(o.a,{to:"/"},s.a.createElement("p",{className:"dc-btn__text"},Object(r.localize)("Continue trading")))}},"./Components/poa-needs-review/index.js":function(e,n,t){"use strict";t.r(n);var i=t("@deriv/components/lib/icon"),o=t.n(i),r=(t("@deriv/components/lib/icon.css"),t("@deriv/translations")),c=t("react"),s=t.n(c),a=t("./Components/icon-message-content/index.js"),u=t("./Components/poa-continue-trading-button/continue-trading-button.jsx");n.default=function(e){var n=e.is_description_disabled,t=void 0!==n&&n;return s.a.createElement(a.default,{message:Object(r.localize)("Your proof of address was submitted successfully"),text:Object(r.localize)("Your document is being reviewed, please check back in 1-3 days."),icon:s.a.createElement(o.a,{icon:"IcPoaVerified",size:128})},!t&&s.a.createElement(u.a,null))}},"@deriv/components/lib/button-link":function(n,t){n.exports=e},"@deriv/components/lib/button-link.css":function(e,t){e.exports=n},"@deriv/components/lib/div100vh-container":function(e,n){e.exports=t},"@deriv/components/lib/div100vh-container.css":function(e,n){e.exports=i},"@deriv/components/lib/icon":function(e,n){e.exports=o},"@deriv/components/lib/icon.css":function(e,n){e.exports=r},"@deriv/shared/utils/screen":function(e,n){e.exports=c},"@deriv/translations":function(e,n){e.exports=s},react:function(e,n){e.exports=a}}).default}));
//# sourceMappingURL=poa-needs-review.js.map