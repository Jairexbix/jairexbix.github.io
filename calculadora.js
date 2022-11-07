// MEJORAR LA CALCULADORA
const nu1 = document.querySelector(".n1");
const nu2 = document.querySelector(".n2");
const nu3 = document.querySelector(".n3");
const nu4 = document.querySelector(".n4");
const nu5 = document.querySelector(".n5");
const nu6 = document.querySelector(".n6");
const nu7 = document.querySelector(".n7");
const nu8 = document.querySelector(".n8");
const nu9 = document.querySelector(".n9");
const nu0 = document.querySelector(".n0");
const nsu = document.querySelector(".nsu");
const nre = document.querySelector(".nre");
const nx = document.querySelector(".nx");
const ndi = document.querySelector(".ndi");
const C = document.querySelector(".C");
const nig = document.querySelector(".nig");
const nabr = document.querySelector(".nabr");
const ncer = document.querySelector(".ncer");
const nraiz = document.querySelector(".nraiz");
const input = document.querySelector("#input");

input.type = "text";
input.placeholder = "Resultado";
input.value = "";

// NUMEROS
nu1.addEventListener("click",()=>{
    input.value += "1";
} )
nu2.addEventListener("click",()=>{
    input.value += "2";
} )
nu3.addEventListener("click",()=>{
    input.value += "3";
} )
nu4.addEventListener("click",()=>{
    input.value += "4";
} )
nu5.addEventListener("click",()=>{
    input.value += "5";
} )
nu6.addEventListener("click",()=>{
    input.value += "6";
} )
nu7.addEventListener("click",()=>{
    input.value += "7";
} )
nu8.addEventListener("click",()=>{
    input.value += "8";
} )
nu9.addEventListener("click",()=>{
    input.value += "9";
} )
nu0.addEventListener("click",()=>{
    input.value += "0";
} )
// OPERACIONES
nsu.addEventListener("click",()=>{
    input.value += "+";
} )
nre.addEventListener("click",()=>{
    input.value += "-";
} )
nx.addEventListener("click",()=>{
    input.value += "*";
} )
ndi.addEventListener("click",()=>{
    input.value += "/";
} )
nabr.addEventListener("click",()=>{
    input.value += "(";
} )
ncer.addEventListener("click",()=>{
    input.value += ")";
} )

// Restablcer
C.addEventListener("click",()=>{
    input.value = "";
} )

// Resultado
nig.addEventListener("click",()=>{
    input.value = eval(input.value);
})