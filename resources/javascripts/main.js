"use strict";
const domDeviceScreen = document.querySelector(".device");
const domBrowser = document.querySelector(".browser");
const domAspectList = document.querySelector(".aspect-list");
const domScreenZoom = (document.querySelector("input.screen-zoom"));
function resizeScreenMobile() {
    domDeviceScreen.setAttribute("type", "mobile");
    domBrowser.removeAttribute("style");
}
function resizeScreenTablet() {
    domDeviceScreen.setAttribute("type", "tablet");
    domBrowser.removeAttribute("style");
}
function resizeScreenLaptop() {
    domDeviceScreen.setAttribute("type", "laptop");
    domBrowser.removeAttribute("style");
}
function resizeScreenComputer() {
    domDeviceScreen.setAttribute("type", "computer");
    domBrowser.removeAttribute("style");
}
function resizeScreenTV() {
    domDeviceScreen.setAttribute("type", "television");
    domBrowser.removeAttribute("style");
}
function rotateScreen() {
    domDeviceScreen.toggleAttribute("landscape");
    domBrowser.removeAttribute("style");
}
domAspectList.addEventListener("change", (e) => {
    const portrait = domAspectList.options[domAspectList.selectedIndex].value.split(",")[0];
    const landscape = domAspectList.options[domAspectList.selectedIndex].value.split(",")[1];
    domDeviceScreen.style.setProperty("--aspect-portrait", portrait);
    domDeviceScreen.style.setProperty("--aspect-landscape", landscape);
});
domScreenZoom.addEventListener("keyup", () => {
    let currentZoomLevel = Number(domScreenZoom.value);
    if (domScreenZoom.value != "") {
        if (currentZoomLevel <= 0) {
            currentZoomLevel = 1;
        }
        domScreenZoom.value = `${currentZoomLevel}`;
        domDeviceScreen.style.setProperty("--zoom", domScreenZoom.value + "%");
    }
});
domScreenZoom.addEventListener("keydown", () => {
    let currentZoomLevel = Number(domScreenZoom.value);
    if (currentZoomLevel <= 0 || domScreenZoom.value == "") {
        currentZoomLevel = 1;
    }
    domDeviceScreen.style.setProperty("--zoom", currentZoomLevel + "%");
});
window.addEventListener("keydown", (event) => {
    let currentZoomLevel = Number(domScreenZoom.value);
    if (event.ctrlKey == true && event.key == "+") {
        event.preventDefault();
        domScreenZoom.value = (currentZoomLevel + 10).toString();
        domDeviceScreen.style.setProperty("--zoom", domScreenZoom.value + "%");
    }
    if (event.ctrlKey == true && event.key == "-") {
        if (currentZoomLevel <= 10) {
            domScreenZoom.value = "1";
        }
        else {
            domScreenZoom.value = (currentZoomLevel - 10).toString();
        }
        domDeviceScreen.style.setProperty("--zoom", domScreenZoom.value + "%");
        event.preventDefault();
    }
});
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
document.querySelector('.viewport').addEventListener("mouseup", disableSelected);
const container = document.querySelectorAll('.device-screen *');
var selectedComponent;
var selectedElement;
for (let i = 0; i < container.length; i++) {
    const element = container[i];
    const debuger = document.createElement('div');
    debuger.classList.add("debuger");
    element.appendChild(debuger);
    element.addEventListener("mouseover", hoverShowDebugerIN);
    element.addEventListener("mouseout", hoverShowDebugerOUT);
    element.addEventListener("click", hoverShowDebugerClick);
}
function hoverShowDebugerIN(event) {
    const element = event.target;
    element.setAttribute('hovered', '');
}
function hoverShowDebugerOUT(event) {
    const element = event.target;
    element.removeAttribute('hovered');
}
function hoverShowDebugerClick(event) {
    if (selectedElement != undefined)
        selectedElement.removeAttribute('selected');
    const element = event.target;
    element.setAttribute('selected', '');
    selectedElement = element;
}
function disableSelected() {
    if (selectedElement != undefined)
        selectedElement.removeAttribute('selected');
}
function addComponent() { }
