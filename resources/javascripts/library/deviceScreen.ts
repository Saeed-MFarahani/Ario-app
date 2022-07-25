const deviceScreen = <HTMLDivElement>document.querySelector(".device");
function resizeScreenMobile() {
  deviceScreen.setAttribute("type", "mobile");
}
function resizeScreenTablet() {
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
function rotateScreen() {
  deviceScreen.toggleAttribute("landscape");
}
