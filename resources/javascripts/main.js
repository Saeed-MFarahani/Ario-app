"use strict";
const deviceScreen = document.querySelector(".device-screen");
function resizeScreenMobile() {
    deviceScreen.setAttribute("type", "mobile");
}
function resizeScreentTablet() {
    deviceScreen.setAttribute("type", "tablet");
}
function resizeScreenLaptop() {
    deviceScreen.setAttribute("type", "laptop");
}
function resizeScreenComputer() {
    deviceScreen.setAttribute("type", "computer");
}
function resizeScreenTV() {
    deviceScreen.setAttribute("type", "television");
}
define("library/include", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IncludeBefore = exports.Include = void 0;
    async function Include(src, node) {
        const data = await (await fetch(src)).text();
        node.innerHTML = node.innerHTML + data;
    }
    exports.Include = Include;
    async function IncludeBefore(src, node) {
        const data = await (await fetch(src)).text();
        node.innerHTML = data + node.innerHTML;
    }
    exports.IncludeBefore = IncludeBefore;
});
