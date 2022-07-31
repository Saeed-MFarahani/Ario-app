document.querySelector('.viewport').addEventListener("mouseup",disableSelected);

const container = document.querySelectorAll('.device-screen *');
var selectedComponent:string;
var selectedElement:HTMLElement;

for (let i = 0; i < container.length; i++) {
  const element = <HTMLDivElement>container[i];
  const debuger = document.createElement('div');
  debuger.classList.add("debuger");
  element.appendChild(debuger);
  element.addEventListener("mouseover",hoverShowDebugerIN);
  element.addEventListener("mouseout",hoverShowDebugerOUT);
  element.addEventListener("click",hoverShowDebugerClick);
}

function hoverShowDebugerIN(event:MouseEvent){
  const element = <HTMLDivElement>event.target;
  element.setAttribute('hovered','')
}
function hoverShowDebugerOUT(event:MouseEvent){
  const element = <HTMLDivElement>event.target;
  element.removeAttribute('hovered');
}
function hoverShowDebugerClick(event:MouseEvent){
  
  if(selectedElement!=undefined)selectedElement.removeAttribute('selected');
  const element = <HTMLDivElement>event.target;
  element.setAttribute('selected','')
  selectedElement = element;
}
function disableSelected(){
  if(selectedElement!=undefined)selectedElement.removeAttribute('selected');
}
function addComponent(){}