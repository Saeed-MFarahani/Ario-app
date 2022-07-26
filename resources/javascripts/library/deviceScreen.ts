const domDeviceScreen = <HTMLDivElement>document.querySelector(".device");
const domBrowser = <HTMLDivElement>document.querySelector(".browser");
const domAspectList = <HTMLSelectElement>document.querySelector(".aspect-list");
const domScreenZoom = <HTMLInputElement>(
  document.querySelector("input.screen-zoom")
);

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
  const portrait =
    domAspectList.options[domAspectList.selectedIndex].value.split(",")[0];
  const landscape =
    domAspectList.options[domAspectList.selectedIndex].value.split(",")[1];
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
    } else {
      domScreenZoom.value = (currentZoomLevel - 10).toString();
    }
    domDeviceScreen.style.setProperty("--zoom", domScreenZoom.value + "%");
    event.preventDefault();
  }
});
