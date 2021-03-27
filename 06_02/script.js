const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");

var data = new Date();
console.log(data);

let hr = data.getHours();
let min = data.getMinutes();
let seg = data.getSeconds();
console.log(`${hr}:${min}:${seg}`)



console.log(hr);


let posicaoHr = 20;
let posicaoMin = 130;
let posicaoSeg = 300;

PONTEIROHORA.style.transform = "rotate(" + posicaoHr + "deg)";
PONTEIROMINUTO.style.transform = "rotate(" + posicaoMin + "deg)";
PONTEIROSEGUNDO.style.transform = "rotate(" + posicaoSeg + "deg)";

