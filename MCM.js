const oferta1 = document.querySelector(".oferta1");
const oferta2 = document.querySelector(".oferta2");
const oferta3 = document.querySelector(".oferta3");

const demanda1 = document.querySelector(".demanda1");
const demanda2 = document.querySelector(".demanda2");
const demanda3 = document.querySelector(".demanda3");

const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");
const c4 = document.querySelector(".c4");
const c5 = document.querySelector(".c5");
const c6 = document.querySelector(".c6");
const c7 = document.querySelector(".c7");
const c8 = document.querySelector(".c8");
const c9 = document.querySelector(".c9");

const total = document.querySelector(".total");
const calculo = document.querySelector(".calculo");
const precio = document.querySelector(".precio");

MCM = ()=>{
    const oferta = [parseInt(oferta1.value),parseInt(oferta2.value),parseInt(oferta2.value)];
    const demanda = [parseInt(demanda1.value),parseInt(demanda2.value),parseInt(demanda3.value)];
    const costo = [
        parseInt(c1.value),
        parseInt(c2.value),
        parseInt(c3.value),
        parseInt(c4.value),
        parseInt(c5.value),
        parseInt(c6.value),
        parseInt(c7.value),
        parseInt(c8.value),
        parseInt(c9.value),
        ];

    let costos = [
        parseInt(c1.value),
        parseInt(c2.value),
        parseInt(c3.value),
        parseInt(c4.value),
        parseInt(c5.value),
        parseInt(c6.value),
        parseInt(c7.value),
        parseInt(c8.value),
        parseInt(c9.value),
    ];
    let costoMenor = costos.sort((a,b)=> a - b);
    
    if ( ( eval(`${oferta1.value}+${oferta2.value}+${oferta3.value}`) ) == ( eval(`${demanda1.value}+${demanda2.value}+${demanda3.value}`) ) ) {
        let resultadoTotal = ""

        // PRIMERA VALIDACION
        if (costo[0] == costoMenor[0]){
            if (oferta[0] >= demanda[0]){
                resultadoTotal += `${demanda[0]}*${costoMenor[0]}`;
                oferta[0] = oferta[0] - demanda[0];
                demanda[0] = 0;
                costo[0] = null;
                costo[1] = null;
                costo[2] = null;
            }
            else{
                resultadoTotal += `${oferta[0]}*${costoMenor[0]}`
                demanda[0] = demanda[0] - oferta[0]
                oferta[0] = 0;
                costo[0] = null;
                costo[3] = null;
                costo[6] = null;
            }
        }
        if (costo[1] == costoMenor[0]){
            if (oferta[1] >= demanda[0]){
                resultadoTotal += `${demanda[0]}*${costoMenor[0]}`;
                oferta[1] = oferta[1] - demanda[0];
                demanda[0] = 0;
                costo[1] = null;
                costo[0] = null;
                costo[2] = null;
            }
            else{
                resultadoTotal += `${oferta[1]}*${costoMenor[0]}`
                demanda[0] = demanda[0] - oferta[1]
                oferta[1] = 0;
                costo[1] = null;
                costo[4] = null;
                costo[7] = null;
            }
        }
        if (costo[2] == costoMenor[0]){
            console.log("Aqui");
            if (oferta[2] >= demanda[0]){
                resultadoTotal += `${demanda[0]}*${costoMenor[0]}`;
                oferta[2] = oferta[2] - demanda[0];
                demanda[0] = 0;
                costo[2] = null;
                costo[0] = null;
                costo[1] = null;
            }
            else{
                resultadoTotal += `${oferta[2]}*${costoMenor[0]}`
                demanda[0] = demanda[0] - oferta[2]
                oferta[2] = 0;
                costo[2] = null;
                costo[5] = null;
                costo[8] = null;
            }
        }
        if (costo[3] == costoMenor[0]){
            if (oferta[0] >= demanda[1]){
                resultadoTotal += `${demanda[1]}*${costoMenor[0]}`;
                oferta[0] = oferta[0] - demanda[1];
                demanda[1] = 0;
                costo[3] = null;
                costo[4] = null;
                costo[5] = null;
            }
            else{
                resultadoTotal += `${oferta[0]}*${costoMenor[0]}`
                demanda[1] = demanda[1] - oferta[0]
                oferta[0] = 0;
                costo[3] = null;
                costo[0] = null;
                costo[6] = null;
            }
        }
        if (costo[4] == costoMenor[0]){
            if (oferta[1] >= demanda[1]){
                resultadoTotal += `${demanda[1]}*${costoMenor[0]}`;
                oferta[1] = oferta[1] - demanda[1];
                demanda[1] = 0;
                costo[4] = null;
                costo[3] = null;
                costo[5] = null;
            }
            else{
                resultadoTotal += `${oferta[1]}*${costoMenor[0]}`
                demanda[1] = demanda[1] - oferta[1]
                oferta[1] = 0;
                costo[4] = null;
                costo[1] = null;
                costo[7] = null;
            }
        }
        if (costo[5] == costoMenor[0]){
            if (oferta[2] >= demanda[1]){
                resultadoTotal += `${demanda[1]}*${costoMenor[0]}`;
                oferta[2] = oferta[2] - demanda[1];
                demanda[1] = 0;
                costo[5] = null;
                costo[3] = null;
                costo[4] = null;
            }
            else{
                resultadoTotal += `${oferta[2]}*${costoMenor[0]}`
                demanda[1] = demanda[1] - oferta[2]
                oferta[2] = 0;
                costo[5] = null;
                costo[2] = null;
                costo[8] = null;
            }
        }
        if (costo[6] == costoMenor[0]){
            if (oferta[0] >= demanda[2]){
                resultadoTotal += `${demanda[2]}*${costoMenor[0]}`;
                oferta[0] = oferta[0] - demanda[2];
                demanda[2] = 0;
                costo[6] = null;
                costo[7] = null;
                costo[8] = null;
            }
            else{
                resultadoTotal += `${oferta[0]}*${costoMenor[0]}`
                demanda[2] = demanda[2] - oferta[0]
                oferta[0] = 0;
                costo[6] = null;
                costo[0] = null;
                costo[3] = null;
            }
        }
        if (costo[7] == costoMenor[0]){
            if (oferta[1] >= demanda[2]){
                resultadoTotal += `${demanda[2]}*${costoMenor[0]}`;
                oferta[1] = oferta[1] - demanda[2];
                demanda[2] = 0;
                costo[7] = null;
                costo[6] = null;
                costo[8] = null;
            }
            else{
                resultadoTotal += `${oferta[1]}*${costoMenor[0]}`
                demanda[2] = demanda[2] - oferta[1]
                oferta[1] = 0;
                costo[7] = null;
                costo[1] = null;
                costo[4] = null;
            }
        }
        if (costo[8] == costoMenor[0]){
            if (oferta[2] >= demanda[2]){
                resultadoTotal += `${demanda[2]}*${costoMenor[0]}`;
                oferta[2] = oferta[2] - demanda[2];
                demanda[2] = 0;
                costo[8] = null;
                costo[6] = null;
                costo[7] = null;
            }
            else{
                resultadoTotal += `${oferta[2]}*${costoMenor[0]}`
                demanda[2] = demanda[2] - oferta[2]
                oferta[2] = 0;
                costo[8] = null;
                costo[5] = null;
                costo[2] = null;
            }
        }
    
        // SEGUNDA VALIDACION
        if (costo[0] == costoMenor[1]){
            if (oferta[0] >= demanda[0]){
                resultadoTotal += `+${demanda[0]}*${costoMenor[1]}`;
                oferta[0] = oferta[0] - demanda[0];
                demanda[0] = 0;
                costo[0] = null;
                costo[1] = null;
                costo[2] = null;
            }
            else{
                resultadoTotal += `+${oferta[0]}*${costoMenor[1]}`
                demanda[0] = demanda[0] - oferta[0]
                oferta[0] = 0;
                costo[0] = null;
                costo[3] = null;
                costo[6] = null;
            }
        }
        if (costo[1] == costoMenor[1]){
            if (oferta[1] >= demanda[0]){
                resultadoTotal += `+${demanda[0]}*${costoMenor[1]}`;
                oferta[1] = oferta[1] - demanda[0];
                demanda[0] = 0;
                costo[1] = null;
                costo[0] = null;
                costo[2] = null;
            }
            else{
                resultadoTotal += `+${oferta[1]}*${costoMenor[1]}`
                demanda[0] = demanda[0] - oferta[1]
                oferta[1] = 0;
                costo[1] = null;
                costo[4] = null;
                costo[7] = null;
            }
        }
        if (costo[2] == costoMenor[1]){
            if (oferta[2] >= demanda[0]){
                resultadoTotal += `+${demanda[0]}*${costoMenor[1]}`;
                oferta[2] = oferta[2] - demanda[0];
                demanda[0] = 0;
                costo[2] = null;
                costo[0] = null;
                costo[1] = null;
            }
            else{
                resultadoTotal += `+${oferta[2]}*${costoMenor[1]}`
                demanda[0] = demanda[0] - oferta[2]
                oferta[2] = 0;
                costo[2] = null;
                costo[5] = null;
                costo[8] = null;
            }
        }
        if (costo[3] == costoMenor[1]){
            if (oferta[0] >= demanda[1]){
                resultadoTotal += `+${demanda[1]}*${costoMenor[1]}`;
                oferta[0] = oferta[0] - demanda[1];
                demanda[1] = 0;
                costo[3] = null;
                costo[4] = null;
                costo[5] = null;
            }
            else{
                resultadoTotal += `+${oferta[0]}*${costoMenor[1]}`
                demanda[1] = demanda[1] - oferta[0]
                oferta[0] = 0;
                costo[3] = null;
                costo[0] = null;
                costo[6] = null;
            }
        }
        if (costo[4] == costoMenor[1]){
            if (oferta[1] >= demanda[1]){
                resultadoTotal += `+${demanda[1]}*${costoMenor[1]}`;
                oferta[1] = oferta[1] - demanda[1];
                demanda[1] = 0;
                costo[4] = null;
                costo[3] = null;
                costo[5] = null;
            }
            else{
                resultadoTotal += `+${oferta[1]}*${costoMenor[1]}`
                demanda[1] = demanda[1] - oferta[1]
                oferta[1] = 0;
                costo[4] = null;
                costo[1] = null;
                costo[7] = null;
            }
        }
        if (costo[5] == costoMenor[1]){
            if (oferta[2] >= demanda[1]){
                resultadoTotal += `+${demanda[1]}*${costoMenor[1]}`;
                oferta[2] = oferta[2] - demanda[1];
                demanda[1] = 0;
                costo[5] = null;
                costo[3] = null;
                costo[4] = null;
            }
            else{
                resultadoTotal += `+${oferta[2]}*${costoMenor[1]}`
                demanda[1] = demanda[1] - oferta[2]
                oferta[2] = 0;
                costo[5] = null;
                costo[2] = null;
                costo[8] = null;
            }
        }
        if (costo[6] == costoMenor[1]){
            console.log("Aqui");
            if (oferta[0] >= demanda[2]){
                resultadoTotal += `+${demanda[2]}*${costoMenor[1]}`;
                oferta[0] = oferta[0] - demanda[2];
                demanda[2] = 0;
                costo[6] = null;
                costo[7] = null;
                costo[8] = null;
            }
            else{
                resultadoTotal += `+${oferta[0]}*${costoMenor[1]}`
                demanda[2] = demanda[2] - oferta[0]
                oferta[0] = 0;
                costo[6] = null;
                costo[0] = null;
                costo[3] = null;
            }
        }
        if (costo[7] == costoMenor[1]){
            if (oferta[1] >= demanda[2]){
                resultadoTotal += `+${demanda[2]}*${costoMenor[1]}`;
                oferta[1] = oferta[1] - demanda[2];
                demanda[2] = 0;
                costo[7] = null;
                costo[6] = null;
                costo[8] = null;
            }
            else{
                resultadoTotal += `+${oferta[1]}*${costoMenor[1]}`
                demanda[2] = demanda[2] - oferta[1]
                oferta[1] = 0;
                costo[7] = null;
                costo[1] = null;
                costo[4] = null;
            }
        }
        if (costo[8] == costoMenor[1]){
            if (oferta[2] >= demanda[2]){
                resultadoTotal += `+${demanda[2]}*${costoMenor[1]}`;
                oferta[2] = oferta[2] - demanda[2];
                demanda[2] = 0;
                costo[8] = null;
                costo[6] = null;
                costo[7] = null;
            }
            else{
                resultadoTotal += `+${oferta[2]}*${costoMenor[1]}`
                demanda[2] = demanda[2] - oferta[2]
                oferta[2] = 0;
                costo[8] = null;
                costo[5] = null;
                costo[2] = null;
            }
        }
    
        // TERCERA VALIDACION
        if (costo[0] == costoMenor[2]){
            if (oferta[0] >= demanda[0]){
                resultadoTotal += `+${demanda[0]}*${costoMenor[2]}`;
                oferta[0] = oferta[0] - demanda[0];
                demanda[0] = 0;
                costo[0] = null;
                costo[1] = null;
                costo[2] = null;
            }
            else{
                resultadoTotal += `+${oferta[0]}*${costoMenor[2]}`
                demanda[0] = demanda[0] - oferta[0]
                oferta[0] = 0;
                costo[0] = null;
                costo[3] = null;
                costo[6] = null;
            }
        }
        if (costo[1] == costoMenor[2]){
            if (oferta[1] >= demanda[0]){
                resultadoTotal += `+${demanda[0]}*${costoMenor[2]}`;
                oferta[1] = oferta[1] - demanda[0];
                demanda[0] = 0;
                costo[1] = null;
                costo[0] = null;
                costo[2] = null;
            }
            else{
                resultadoTotal += `+${oferta[1]}*${costoMenor[2]}`
                demanda[0] = demanda[0] - oferta[1]
                oferta[1] = 0;
                costo[1] = null;
                costo[4] = null;
                costo[7] = null;
            }
        }
        if (costo[2] == costoMenor[2]){
            if (oferta[2] >= demanda[0]){
                resultadoTotal += `+${demanda[0]}*${costoMenor[2]}`;
                oferta[2] = oferta[2] - demanda[0];
                demanda[0] = 0;
                costo[2] = null;
                costo[0] = null;
                costo[1] = null;
            }
            else{
                resultadoTotal += `+${oferta[2]}*${costoMenor[2]}`
                demanda[0] = demanda[0] - oferta[2]
                oferta[2] = 0;
                costo[2] = null;
                costo[5] = null;
                costo[8] = null;
            }
        }
        if (costo[3] == costoMenor[2]){
            if (oferta[0] >= demanda[1]){
                resultadoTotal += `+${demanda[1]}*${costoMenor[2]}`;
                oferta[0] = oferta[0] - demanda[1];
                demanda[1] = 0;
                costo[3] = null;
                costo[4] = null;
                costo[5] = null;
            }
            else{
                resultadoTotal += `+${oferta[0]}*${costoMenor[2]}`
                demanda[1] = demanda[1] - oferta[0]
                oferta[0] = 0;
                costo[3] = null;
                costo[0] = null;
                costo[6] = null;
            }
        }
        if (costo[4] == costoMenor[2]){
            if (oferta[1] >= demanda[1]){
                resultadoTotal += `+${demanda[1]}*${costoMenor[2]}`;
                oferta[1] = oferta[1] - demanda[1];
                demanda[1] = 0;
                costo[4] = null;
                costo[3] = null;
                costo[5] = null;
            }
            else{
                resultadoTotal += `+${oferta[1]}*${costoMenor[2]}`
                demanda[1] = demanda[1] - oferta[1]
                oferta[1] = 0;
                costo[4] = null;
                costo[1] = null;
                costo[7] = null;
            }
        }
        if (costo[5] == costoMenor[2]){
            if (oferta[2] >= demanda[1]){
                resultadoTotal += `+${demanda[1]}*${costoMenor[2]}`;
                oferta[2] = oferta[2] - demanda[1];
                demanda[1] = 0;
                costo[5] = null;
                costo[3] = null;
                costo[4] = null;
            }
            else{
                resultadoTotal += `+${oferta[2]}*${costoMenor[2]}`
                demanda[1] = demanda[1] - oferta[2]
                oferta[2] = 0;
                costo[5] = null;
                costo[2] = null;
                costo[8] = null;
            }
        }
        if (costo[6] == costoMenor[2]){
            if (oferta[0] >= demanda[2]){
                resultadoTotal += `+${demanda[2]}*${costoMenor[2]}`;
                oferta[0] = oferta[0] - demanda[2];
                demanda[2] = 0;
                costo[6] = null;
                costo[7] = null;
                costo[8] = null;
            }
            else{
                resultadoTotal += `+${oferta[0]}*${costoMenor[2]}`
                demanda[2] = demanda[2] - oferta[0]
                oferta[0] = 0;
                costo[6] = null;
                costo[0] = null;
                costo[3] = null;
            }
        }
        if (costo[7] == costoMenor[2]){
            if (oferta[1] >= demanda[2]){
                resultadoTotal += `+${demanda[2]}*${costoMenor[2]}`;
                oferta[1] = oferta[1] - demanda[2];
                demanda[2] = 0;
                costo[7] = null;
                costo[6] = null;
                costo[8] = null;
            }
            else{
                resultadoTotal += `+${oferta[1]}*${costoMenor[2]}`
                demanda[2] = demanda[2] - oferta[1]
                oferta[1] = 0;
                costo[7] = null;
                costo[1] = null;
                costo[4] = null;
            }
        }
        costoMenor
        if (costo[8] == costoMenor[2]){
            if (oferta[2] >= demanda[2]){
                resultadoTotal += `+${demanda[2]}*${costoMenor[2]}`;
                oferta[2] = oferta[2] - demanda[2];
                demanda[2] = 0;
                costo[8] = null;
                costo[6] = null;
                costo[7] = null;
            }
            else{
                resultadoTotal += `+${oferta[2]}*${costoMenor[2]}`
                demanda[2] = demanda[2] - oferta[2]
                oferta[2] = 0;
                costo[8] = null;
                costo[5] = null;
                costo[2] = null;
            }
        }
    
        // CUARTA VALIDACION
        if (costo[0] == costoMenor[3]){
            if (oferta[0] >= demanda[0]){
                resultadoTotal += `+${demanda[0]}*${costoMenor[3]}`;
                oferta[0] = oferta[0] - demanda[0];
                demanda[0] = 0;
                costo[0] = null;
                costo[1] = null;
                costo[2] = null;
            }
            else{
                resultadoTotal += `+${oferta[0]}*${costoMenor[3]}`
                demanda[0] = demanda[0] - oferta[0]
                oferta[0] = 0;
                costo[0] = null;
                costo[3] = null;
                costo[6] = null;
            }
        }
        if (costo[1] == costoMenor[3]){
            if (oferta[1] >= demanda[0]){
                resultadoTotal += `+${demanda[0]}*${costoMenor[3]}`;
                oferta[1] = oferta[1] - demanda[0];
                demanda[0] = 0;
                costo[1] = null;
                costo[0] = null;
                costo[2] = null;
            }
            else{
                resultadoTotal += `+${oferta[1]}*${costoMenor[3]}`
                demanda[0] = demanda[0] - oferta[1]
                oferta[1] = 0;
                costo[1] = null;
                costo[4] = null;
                costo[7] = null;
            }
        }
        if (costo[2] == costoMenor[3]){
            if (oferta[2] >= demanda[0]){
                resultadoTotal += `+${demanda[0]}*${costoMenor[3]}`;
                oferta[2] = oferta[2] - demanda[0];
                demanda[0] = 0;
                costo[2] = null;
                costo[0] = null;
                costo[1] = null;
            }
            else{
                resultadoTotal += `+${oferta[2]}*${costoMenor[3]}`
                demanda[0] = demanda[0] - oferta[2]
                oferta[2] = 0;
                costo[2] = null;
                costo[5] = null;
                costo[8] = null;
            }
        }
        if (costo[3] == costoMenor[3]){
            if (oferta[0] >= demanda[1]){
                resultadoTotal += `+${demanda[1]}*${costoMenor[3]}`;
                oferta[0] = oferta[0] - demanda[1];
                demanda[1] = 0;
                costo[3] = null;
                costo[4] = null;
                costo[5] = null;
            }
            else{
                resultadoTotal += `+${oferta[0]}*${costoMenor[3]}`
                demanda[1] = demanda[1] - oferta[0]
                oferta[0] = 0;
                costo[3] = null;
                costo[0] = null;
                costo[6] = null;
            }
        }
        if (costo[4] == costoMenor[3]){
            if (oferta[1] >= demanda[1]){
                resultadoTotal += `+${demanda[1]}*${costoMenor[3]}`;
                oferta[1] = oferta[1] - demanda[1];
                demanda[1] = 0;
                costo[4] = null;
                costo[3] = null;
                costo[5] = null;
            }
            else{
                resultadoTotal += `+${oferta[1]}*${costoMenor[3]}`
                demanda[1] = demanda[1] - oferta[1]
                oferta[1] = 0;
                costo[4] = null;
                costo[1] = null;
                costo[7] = null;
            }
        }
        if (costo[5] == costoMenor[3]){
            if (oferta[2] >= demanda[1]){
                resultadoTotal += `+${demanda[1]}*${costoMenor[3]}`;
                oferta[2] = oferta[2] - demanda[1];
                demanda[1] = 0;
                costo[5] = null;
                costo[3] = null;
                costo[4] = null;
            }
            else{
                resultadoTotal += `+${oferta[2]}*${costoMenor[3]}`
                demanda[1] = demanda[1] - oferta[2]
                oferta[2] = 0;
                costo[5] = null;
                costo[2] = null;
                costo[8] = null;
            }
        }
        if (costo[6] == costoMenor[3]){
            if (oferta[0] >= demanda[2]){
                resultadoTotal += `+${demanda[2]}*${costoMenor[3]}`;
                oferta[0] = oferta[0] - demanda[2];
                demanda[2] = 0;
                costo[6] = null;
                costo[7] = null;
                costo[8] = null;
            }
            else{
                resultadoTotal += `+${oferta[0]}*${costoMenor[3]}`
                demanda[2] = demanda[2] - oferta[0]
                oferta[0] = 0;
                costo[6] = null;
                costo[0] = null;
                costo[3] = null;
            }
        }
        if (costo[7] == costoMenor[3]){
            if (oferta[1] >= demanda[2]){
                resultadoTotal += `+${demanda[2]}*${costoMenor[3]}`;
                oferta[1] = oferta[1] - demanda[2];
                demanda[2] = 0;
                costo[7] = null;
                costo[6] = null;
                costo[8] = null;
            }
            else{
                resultadoTotal += `+${oferta[1]}*${costoMenor[3]}`
                demanda[2] = demanda[2] - oferta[1]
                oferta[1] = 0;
                costo[7] = null;
                costo[1] = null;
                costo[4] = null;
            }
        }
        if (costo[8] == costoMenor[3]){
            if (oferta[2] >= demanda[2]){
                resultadoTotal += `+${demanda[2]}*${costoMenor[3]}`;
                oferta[2] = oferta[2] - demanda[2];
                demanda[2] = 0;
                costo[8] = null;
                costo[6] = null;
                costo[7] = null;
            }
            else{
                resultadoTotal += `+${oferta[2]}*${costoMenor[3]}`
                demanda[2] = demanda[2] - oferta[2]
                oferta[2] = 0;
                costo[8] = null;
                costo[5] = null;
                costo[2] = null;
            }
        }
    
        // QUINTA VALIDACION
        if (costo[0] == costoMenor[4]){
            if (oferta[0] >= demanda[0]){
                resultadoTotal += `+${demanda[0]}*${costoMenor[4]}`;
                oferta[0] = oferta[0] - demanda[0];
                demanda[0] = 0;
                costo[0] = null;
                costo[1] = null;
                costo[2] = null;
            }
            else{
                resultadoTotal += `+${oferta[0]}*${costoMenor[4]}`
                demanda[0] = demanda[0] - oferta[0]
                oferta[0] = 0;
                costo[0] = null;
                costo[3] = null;
                costo[6] = null;
            }
        }
        if (costo[1] == costoMenor[4]){
            if (oferta[1] >= demanda[0]){
                resultadoTotal += `+${demanda[0]}*${costoMenor[4]}`;
                oferta[1] = oferta[1] - demanda[0];
                demanda[0] = 0;
                costo[1] = null;
                costo[0] = null;
                costo[2] = null;
            }
            else{
                resultadoTotal += `+${oferta[1]}*${costoMenor[4]}`
                demanda[0] = demanda[0] - oferta[1]
                oferta[1] = 0;
                costo[1] = null;
                costo[4] = null;
                costo[7] = null;
            }
        }
        if (costo[2] == costoMenor[4]){
            if (oferta[2] >= demanda[0]){
                resultadoTotal += `+${demanda[0]}*${costoMenor[4]}`;
                oferta[2] = oferta[2] - demanda[0];
                demanda[0] = 0;
                costo[2] = null;
                costo[0] = null;
                costo[1] = null;
            }
            else{
                resultadoTotal += `+${oferta[2]}*${costoMenor[4]}`
                demanda[0] = demanda[0] - oferta[2]
                oferta[2] = 0;
                costo[2] = null;
                costo[5] = null;
                costo[8] = null;
            }
        }
        if (costo[3] == costoMenor[4]){
            if (oferta[0] >= demanda[1]){
                resultadoTotal += `+${demanda[1]}*${costoMenor[4]}`;
                oferta[0] = oferta[0] - demanda[1];
                demanda[1] = 0;
                costo[3] = null;
                costo[4] = null;
                costo[5] = null;
            }
            else{
                resultadoTotal += `+${oferta[0]}*${costoMenor[4]}`
                demanda[1] = demanda[1] - oferta[0]
                oferta[0] = 0;
                costo[3] = null;
                costo[0] = null;
                costo[6] = null;
            }
        }
        if (costo[4] == costoMenor[4]){
            if (oferta[1] >= demanda[1]){
                resultadoTotal += `+${demanda[1]}*${costoMenor[4]}`;
                oferta[1] = oferta[1] - demanda[1];
                demanda[1] = 0;
                costo[4] = null;
                costo[3] = null;
                costo[5] = null;
            }
            else{
                resultadoTotal += `+${oferta[1]}*${costoMenor[4]}`
                demanda[1] = demanda[1] - oferta[1]
                oferta[1] = 0;
                costo[4] = null;
                costo[1] = null;
                costo[7] = null;
            }
        }
        if (costo[5] == costoMenor[4]){
            if (oferta[2] >= demanda[1]){
                resultadoTotal += `+${demanda[1]}*${costoMenor[4]}`;
                oferta[2] = oferta[2] - demanda[1];
                demanda[1] = 0;
                costo[5] = null;
                costo[3] = null;
                costo[4] = null;
            }
            else{
                resultadoTotal += `+${oferta[2]}*${costoMenor[4]}`
                demanda[1] = demanda[1] - oferta[2]
                oferta[2] = 0;
                costo[5] = null;
                costo[2] = null;
                costo[8] = null;
            }
        }
        if (costo[6] == costoMenor[4]){
            if (oferta[0] >= demanda[2]){
                resultadoTotal += `+${demanda[2]}*${costoMenor[4]}`;
                oferta[0] = oferta[0] - demanda[2];
                demanda[2] = 0;
                costo[6] = null;
                costo[7] = null;
                costo[8] = null;
            }
            else{
                resultadoTotal += `+${oferta[0]}*${costoMenor[4]}`
                demanda[2] = demanda[2] - oferta[0]
                oferta[0] = 0;
                costo[6] = null;
                costo[0] = null;
                costo[3] = null;
            }
        }
        if (costo[7] == costoMenor[4]){
            if (oferta[1] >= demanda[2]){
                resultadoTotal += `+${demanda[2]}*${costoMenor[4]}`;
                oferta[1] = oferta[1] - demanda[2];
                demanda[2] = 0;
                costo[7] = null;
                costo[6] = null;
                costo[8] = null;
            }
            else{
                resultadoTotal += `+${oferta[1]}*${costoMenor[4]}`
                demanda[2] = demanda[2] - oferta[1]
                oferta[1] = 0;
                costo[7] = null;
                costo[1] = null;
                costo[4] = null;
            }
        }
        if (costo[8] == costoMenor[4]){
            if (oferta[2] >= demanda[2]){
                resultadoTotal += `+${demanda[2]}*${costoMenor[4]}`;
                oferta[2] = oferta[2] - demanda[2];
                demanda[2] = 0;
                costo[8] = null;
                costo[6] = null;
                costo[7] = null;
            }
            else{
                resultadoTotal += `+${oferta[2]}*${costoMenor[4]}`
                demanda[2] = demanda[2] - oferta[2]
                oferta[2] = 0;
                costo[8] = null;
                costo[5] = null;
                costo[2] = null;
            }
        }
    
        // SEXTA VALIDACION
        if (costo[0] == costoMenor[5]){
            if (oferta[0] >= demanda[0]){
                resultadoTotal += `+${demanda[0]}*${costoMenor[5]}`;
                oferta[0] = oferta[0] - demanda[0];
                demanda[0] = 0;
                costo[0] = null;
                costo[1] = null;
                costo[2] = null;
            }
            else{
                resultadoTotal += `+${oferta[0]}*${costoMenor[5]}`
                demanda[0] = demanda[0] - oferta[0]
                oferta[0] = 0;
                costo[0] = null;
                costo[3] = null;
                costo[6] = null;
            }
        }
        if (costo[1] == costoMenor[5]){
            if (oferta[1] >= demanda[0]){
                resultadoTotal += `+${demanda[0]}*${costoMenor[5]}`;
                oferta[1] = oferta[1] - demanda[0];
                demanda[0] = 0;
                costo[1] = null;
                costo[0] = null;
                costo[2] = null;
            }
            else{
                resultadoTotal += `+${oferta[1]}*${costoMenor[5]}`
                demanda[0] = demanda[0] - oferta[1]
                oferta[1] = 0;
                costo[1] = null;
                costo[4] = null;
                costo[7] = null;
            }
        }
        if (costo[2] == costoMenor[5]){
            if (oferta[2] >= demanda[0]){
                resultadoTotal += `+${demanda[0]}*${costoMenor[5]}`;
                oferta[2] = oferta[2] - demanda[0];
                demanda[0] = 0;
                costo[2] = null;
                costo[0] = null;
                costo[1] = null;
            }
            else{
                resultadoTotal += `+${oferta[2]}*${costoMenor[5]}`
                demanda[0] = demanda[0] - oferta[2]
                oferta[2] = 0;
                costo[2] = null;
                costo[5] = null;
                costo[8] = null;
            }
        }
        if (costo[3] == costoMenor[5]){
            if (oferta[0] >= demanda[1]){
                resultadoTotal += `+${demanda[1]}*${costoMenor[5]}`;
                oferta[0] = oferta[0] - demanda[1];
                demanda[1] = 0;
                costo[3] = null;
                costo[4] = null;
                costo[5] = null;
            }
            else{
                resultadoTotal += `+${oferta[0]}*${costoMenor[5]}`
                demanda[1] = demanda[1] - oferta[0]
                oferta[0] = 0;
                costo[3] = null;
                costo[0] = null;
                costo[6] = null;
            }
        }
        if (costo[4] == costoMenor[5]){
            if (oferta[1] >= demanda[1]){
                resultadoTotal += `+${demanda[1]}*${costoMenor[5]}`;
                oferta[1] = oferta[1] - demanda[1];
                demanda[1] = 0;
                costo[4] = null;
                costo[3] = null;
                costo[5] = null;
            }
            else{
                resultadoTotal += `+${oferta[1]}*${costoMenor[5]}`
                demanda[1] = demanda[1] - oferta[1]
                oferta[1] = 0;
                costo[4] = null;
                costo[1] = null;
                costo[7] = null;
            }
        }
        if (costo[5] == costoMenor[5]){
            if (oferta[2] >= demanda[1]){
                resultadoTotal += `+${demanda[1]}*${costoMenor[5]}`;
                oferta[2] = oferta[2] - demanda[1];
                demanda[1] = 0;
                costo[5] = null;
                costo[3] = null;
                costo[4] = null;
            }
            else{
                resultadoTotal += `+${oferta[2]}*${costoMenor[5]}`
                demanda[1] = demanda[1] - oferta[2]
                oferta[2] = 0;
                costo[5] = null;
                costo[2] = null;
                costo[8] = null;
            }
        }
        if (costo[6] == costoMenor[5]){
            if (oferta[0] >= demanda[2]){
                resultadoTotal += `+${demanda[2]}*${costoMenor[5]}`;
                oferta[0] = oferta[0] - demanda[2];
                demanda[2] = 0;
                costo[6] = null;
                costo[7] = null;
                costo[8] = null;
            }
            else{
                resultadoTotal += `+${oferta[0]}*${costoMenor[5]}`
                demanda[2] = demanda[2] - oferta[0]
                oferta[0] = 0;
                costo[6] = null;
                costo[0] = null;
                costo[3] = null;
            }
        }
        if (costo[7] == costoMenor[5]){
            if (oferta[1] >= demanda[2]){
                resultadoTotal += `+${demanda[2]}*${costoMenor[5]}`;
                oferta[1] = oferta[1] - demanda[2];
                demanda[2] = 0;
                costo[7] = null;
                costo[6] = null;
                costo[8] = null;
            }
            else{
                resultadoTotal += `+${oferta[1]}*${costoMenor[5]}`
                demanda[2] = demanda[2] - oferta[1]
                oferta[1] = 0;
                costo[7] = null;
                costo[1] = null;
                costo[4] = null;
            }
        }
        if (costo[8] == costoMenor[5]){
            if (oferta[2] >= demanda[2]){
                resultadoTotal += `+${demanda[2]}*${costoMenor[5]}`;
                oferta[2] = oferta[2] - demanda[2];
                demanda[2] = 0;
                costo[8] = null;
                costo[6] = null;
                costo[7] = null;
            }
            else{
                resultadoTotal += `+${oferta[2]}*${costoMenor[5]}`
                demanda[2] = demanda[2] - oferta[2]
                oferta[2] = 0;
                costo[8] = null;
                costo[5] = null;
                costo[2] = null;
            }
        }
    
        // SEPTIMA VALIDACION
        if (costo[0] == costoMenor[6]){
            if (oferta[0] >= demanda[0]){
                resultadoTotal += `+${demanda[0]}*${costoMenor[6]}`;
                oferta[0] = oferta[0] - demanda[0];
                demanda[0] = 0;
                costo[0] = null;
                costo[1] = null;
                costo[2] = null;
            }
            else{
                resultadoTotal += `+${oferta[0]}*${costoMenor[6]}`
                demanda[0] = demanda[0] - oferta[0]
                oferta[0] = 0;
                costo[0] = null;
                costo[3] = null;
                costo[6] = null;
            }
        }
        if (costo[1] == costoMenor[6]){
            if (oferta[1] >= demanda[0]){
                resultadoTotal += `+${demanda[0]}*${costoMenor[6]}`;
                oferta[1] = oferta[1] - demanda[0];
                demanda[0] = 0;
                costo[1] = null;
                costo[0] = null;
                costo[2] = null;
            }
            else{
                resultadoTotal += `+${oferta[1]}*${costoMenor[6]}`
                demanda[0] = demanda[0] - oferta[1]
                oferta[1] = 0;
                costo[1] = null;
                costo[4] = null;
                costo[7] = null;
            }
        }
        if (costo[2] == costoMenor[6]){
            if (oferta[2] >= demanda[0]){
                resultadoTotal += `+${demanda[0]}*${costoMenor[6]}`;
                oferta[2] = oferta[2] - demanda[0];
                demanda[0] = 0;
                costo[2] = null;
                costo[0] = null;
                costo[1] = null;
            }
            else{
                resultadoTotal += `+${oferta[2]}*${costoMenor[6]}`
                demanda[0] = demanda[0] - oferta[2]
                oferta[2] = 0;
                costo[2] = null;
                costo[5] = null;
                costo[8] = null;
            }
        }
        if (costo[3] == costoMenor[6]){
            if (oferta[0] >= demanda[1]){
                resultadoTotal += `+${demanda[1]}*${costoMenor[6]}`;
                oferta[0] = oferta[0] - demanda[1];
                demanda[1] = 0;
                costo[3] = null;
                costo[4] = null;
                costo[5] = null;
            }
            else{
                resultadoTotal += `+${oferta[0]}*${costoMenor[6]}`
                demanda[1] = demanda[1] - oferta[0]
                oferta[0] = 0;
                costo[3] = null;
                costo[0] = null;
                costo[6] = null;
            }
        }
        if (costo[4] == costoMenor[6]){
            if (oferta[1] >= demanda[1]){
                resultadoTotal += `+${demanda[1]}*${costoMenor[6]}`;
                oferta[1] = oferta[1] - demanda[1];
                demanda[1] = 0;
                costo[4] = null;
                costo[3] = null;
                costo[5] = null;
            }
            else{
                resultadoTotal += `+${oferta[1]}*${costoMenor[6]}`
                demanda[1] = demanda[1] - oferta[1]
                oferta[1] = 0;
                costo[4] = null;
                costo[1] = null;
                costo[7] = null;
            }
        }
        if (costo[5] == costoMenor[6]){
            if (oferta[2] >= demanda[1]){
                resultadoTotal += `+${demanda[1]}*${costoMenor[6]}`;
                oferta[2] = oferta[2] - demanda[1];
                demanda[1] = 0;
                costo[5] = null;
                costo[3] = null;
                costo[4] = null;
            }
            else{
                resultadoTotal += `+${oferta[2]}*${costoMenor[6]}`
                demanda[1] = demanda[1] - oferta[2]
                oferta[2] = 0;
                costo[5] = null;
                costo[2] = null;
                costo[8] = null;
            }
        }
        if (costo[6] == costoMenor[6]){
            if (oferta[0] >= demanda[2]){
                resultadoTotal += `+${demanda[2]}*${costoMenor[6]}`;
                oferta[0] = oferta[0] - demanda[2];
                demanda[2] = 0;
                costo[6] = null;
                costo[7] = null;
                costo[8] = null;
            }
            else{
                resultadoTotal += `+${oferta[0]}*${costoMenor[6]}`
                demanda[2] = demanda[2] - oferta[0]
                oferta[0] = 0;
                costo[6] = null;
                costo[0] = null;
                costo[3] = null;
            }
        }
        if (costo[7] == costoMenor[6]){
            if (oferta[1] >= demanda[2]){
                resultadoTotal += `+${demanda[2]}*${costoMenor[6]}`;
                oferta[1] = oferta[1] - demanda[2];
                demanda[2] = 0;
                costo[7] = null;
                costo[6] = null;
                costo[8] = null;
            }
            else{
                resultadoTotal += `+${oferta[1]}*${costoMenor[6]}`
                demanda[2] = demanda[2] - oferta[1]
                oferta[1] = 0;
                costo[7] = null;
                costo[1] = null;
                costo[4] = null;
            }
        }
        if (costo[8] == costoMenor[6]){
            if (oferta[2] >= demanda[2]){
                resultadoTotal += `+${demanda[2]}*${costoMenor[6]}`;
                oferta[2] = oferta[2] - demanda[2];
                demanda[2] = 0;
                costo[8] = null;
                costo[6] = null;
                costo[7] = null;
            }
            else{
                resultadoTotal += `+${oferta[2]}*${costoMenor[6]}`
                demanda[2] = demanda[2] - oferta[2]
                oferta[2] = 0;
                costo[8] = null;
                costo[5] = null;
                costo[2] = null;
            }
        }
    
        // OCTAVA VALIDACION
        if (costo[0] == costoMenor[7]){
            if (oferta[0] >= demanda[0]){
                resultadoTotal += `+${demanda[0]}*${costoMenor[7]}`;
                oferta[0] = oferta[0] - demanda[0];
                demanda[0] = 0;
                costo[0] = null;
                costo[1] = null;
                costo[2] = null;
            }
            else{
                resultadoTotal += `+${oferta[0]}*${costoMenor[7]}`
                demanda[0] = demanda[0] - oferta[0]
                oferta[0] = 0;
                costo[0] = null;
                costo[3] = null;
                costo[6] = null;
            }
        }
        if (costo[1] == costoMenor[7]){
            if (oferta[1] >= demanda[0]){
                resultadoTotal += `+${demanda[0]}*${costoMenor[7]}`;
                oferta[1] = oferta[1] - demanda[0];
                demanda[0] = 0;
                costo[1] = null;
                costo[0] = null;
                costo[2] = null;
            }
            else{
                resultadoTotal += `+${oferta[1]}*${costoMenor[7]}`
                demanda[0] = demanda[0] - oferta[1]
                oferta[1] = 0;
                costo[1] = null;
                costo[4] = null;
                costo[7] = null;
            }
        }
        if (costo[2] == costoMenor[7]){
            if (oferta[2] >= demanda[0]){
                resultadoTotal += `+${demanda[0]}*${costoMenor[7]}`;
                oferta[2] = oferta[2] - demanda[0];
                demanda[0] = 0;
                costo[2] = null;
                costo[0] = null;
                costo[1] = null;
            }
            else{
                resultadoTotal += `+${oferta[2]}*${costoMenor[7]}`
                demanda[0] = demanda[0] - oferta[2]
                oferta[2] = 0;
                costo[2] = null;
                costo[5] = null;
                costo[8] = null;
            }
        }
        if (costo[3] == costoMenor[7]){
            if (oferta[0] >= demanda[1]){
                resultadoTotal += `+${demanda[1]}*${costoMenor[7]}`;
                oferta[0] = oferta[0] - demanda[1];
                demanda[1] = 0;
                costo[3] = null;
                costo[4] = null;
                costo[5] = null;
            }
            else{
                resultadoTotal += `+${oferta[0]}*${costoMenor[7]}`
                demanda[1] = demanda[1] - oferta[0]
                oferta[0] = 0;
                costo[3] = null;
                costo[0] = null;
                costo[6] = null;
            }
        }
        if (costo[4] == costoMenor[7]){
            if (oferta[1] >= demanda[1]){
                resultadoTotal += `+${demanda[1]}*${costoMenor[7]}`;
                oferta[1] = oferta[1] - demanda[1];
                demanda[1] = 0;
                costo[4] = null;
                costo[3] = null;
                costo[5] = null;
            }
            else{
                resultadoTotal += `+${oferta[1]}*${costoMenor[7]}`
                demanda[1] = demanda[1] - oferta[1]
                oferta[1] = 0;
                costo[4] = null;
                costo[1] = null;
                costo[7] = null;
            }
        }
        if (costo[5] == costoMenor[7]){
            if (oferta[2] >= demanda[1]){
                resultadoTotal += `+${demanda[1]}*${costoMenor[7]}`;
                oferta[2] = oferta[2] - demanda[1];
                demanda[1] = 0;
                costo[5] = null;
                costo[3] = null;
                costo[4] = null;
            }
            else{
                resultadoTotal += `+${oferta[2]}*${costoMenor[7]}`
                demanda[1] = demanda[1] - oferta[2]
                oferta[2] = 0;
                costo[5] = null;
                costo[2] = null;
                costo[8] = null;
            }
        }
        if (costo[6] == costoMenor[7]){
            if (oferta[0] >= demanda[2]){
                resultadoTotal += `+${demanda[2]}*${costoMenor[7]}`;
                oferta[0] = oferta[0] - demanda[2];
                demanda[2] = 0;
                costo[6] = null;
                costo[7] = null;
                costo[8] = null;
            }
            else{
                resultadoTotal += `+${oferta[0]}*${costoMenor[7]}`
                demanda[2] = demanda[2] - oferta[0]
                oferta[0] = 0;
                costo[6] = null;
                costo[0] = null;
                costo[3] = null;
            }
        }
        if (costo[7] == costoMenor[7]){
            if (oferta[1] >= demanda[2]){
                resultadoTotal += `+${demanda[2]}*${costoMenor[7]}`;
                oferta[1] = oferta[1] - demanda[2];
                demanda[2] = 0;
                costo[7] = null;
                costo[6] = null;
                costo[8] = null;
            }
            else{
                resultadoTotal += `+${oferta[1]}*${costoMenor[7]}`
                demanda[2] = demanda[2] - oferta[1]
                oferta[1] = 0;
                costo[7] = null;
                costo[1] = null;
                costo[4] = null;
            }
        }
        if (costo[8] == costoMenor[7]){
            if (oferta[2] >= demanda[2]){
                resultadoTotal += `+${demanda[2]}*${costoMenor[7]}`;
                oferta[2] = oferta[2] - demanda[2];
                demanda[2] = 0;
                costo[8] = null;
                costo[6] = null;
                costo[7] = null;
            }
            else{
                resultadoTotal += `+${oferta[2]}*${costoMenor[7]}`
                demanda[2] = demanda[2] - oferta[2]
                oferta[2] = 0;
                costo[8] = null;
                costo[5] = null;
                costo[2] = null;
            }
        }
    
        // NOVENA Y ULTIMA VALIDACION
        if (costo[0] == costoMenor[8]){
            if (oferta[0] >= demanda[0]){
                resultadoTotal += `+${demanda[0]}*${costoMenor[8]}`;
                oferta[0] = oferta[0] - demanda[0];
                demanda[0] = 0;
                costo[0] = null;
                costo[1] = null;
                costo[2] = null;
            }
            else{
                resultadoTotal += `+${oferta[0]}*${costoMenor[8]}`
                demanda[0] = demanda[0] - oferta[0]
                oferta[0] = 0;
                costo[0] = null;
                costo[3] = null;
                costo[6] = null;
            }
        }
        if (costo[1] == costoMenor[8]){
            if (oferta[1] >= demanda[0]){
                resultadoTotal += `+${demanda[0]}*${costoMenor[8]}`;
                oferta[1] = oferta[1] - demanda[0];
                demanda[0] = 0;
                costo[1] = null;
                costo[0] = null;
                costo[2] = null;
            }
            else{
                resultadoTotal += `+${oferta[1]}*${costoMenor[8]}`
                demanda[0] = demanda[0] - oferta[1]
                oferta[1] = 0;
                costo[1] = null;
                costo[4] = null;
                costo[7] = null;
            }
        }
        if (costo[2] == costoMenor[8]){
            if (oferta[2] >= demanda[0]){
                resultadoTotal += `+${demanda[0]}*${costoMenor[8]}`;
                oferta[2] = oferta[2] - demanda[0];
                demanda[0] = 0;
                costo[2] = null;
                costo[0] = null;
                costo[1] = null;
            }
            else{
                resultadoTotal += `+${oferta[2]}*${costoMenor[8]}`
                demanda[0] = demanda[0] - oferta[2]
                oferta[2] = 0;
                costo[2] = null;
                costo[5] = null;
                costo[8] = null;
            }
        }
        if (costo[3] == costoMenor[8]){
            if (oferta[0] >= demanda[1]){
                resultadoTotal += `+${demanda[1]}*${costoMenor[8]}`;
                oferta[0] = oferta[0] - demanda[1];
                demanda[1] = 0;
                costo[3] = null;
                costo[4] = null;
                costo[5] = null;
            }
            else{
                resultadoTotal += `+${oferta[0]}*${costoMenor[8]}`
                demanda[1] = demanda[1] - oferta[0]
                oferta[0] = 0;
                costo[3] = null;
                costo[0] = null;
                costo[6] = null;
            }
        }
        if (costo[4] == costoMenor[8]){
            if (oferta[1] >= demanda[1]){
                resultadoTotal += `+${demanda[1]}*${costoMenor[8]}`;
                oferta[1] = oferta[1] - demanda[1];
                demanda[1] = 0;
                costo[4] = null;
                costo[3] = null;
                costo[5] = null;
            }
            else{
                resultadoTotal += `+${oferta[1]}*${costoMenor[8]}`
                demanda[1] = demanda[1] - oferta[1]
                oferta[1] = 0;
                costo[4] = null;
                costo[1] = null;
                costo[7] = null;
            }
        }
        if (costo[5] == costoMenor[8]){
            if (oferta[2] >= demanda[1]){
                resultadoTotal += `+${demanda[1]}*${costoMenor[8]}`;
                oferta[2] = oferta[2] - demanda[1];
                demanda[1] = 0;
                costo[5] = null;
                costo[3] = null;
                costo[4] = null;
            }
            else{
                resultadoTotal += `+${oferta[2]}*${costoMenor[8]}`
                demanda[1] = demanda[1] - oferta[2]
                oferta[2] = 0;
                costo[5] = null;
                costo[2] = null;
                costo[8] = null;
            }
        }
        if (costo[6] == costoMenor[8]){
            if (oferta[0] >= demanda[2]){
                resultadoTotal += `+${demanda[2]}*${costoMenor[8]}`;
                oferta[0] = oferta[0] - demanda[2];
                demanda[2] = 0;
                costo[6] = null;
                costo[7] = null;
                costo[8] = null;
            }
            else{
                resultadoTotal += `+${oferta[0]}*${costoMenor[8]}`
                demanda[2] = demanda[2] - oferta[0]
                oferta[0] = 0;
                costo[6] = null;
                costo[0] = null;
                costo[3] = null;
            }
        }
        if (costo[7] == costoMenor[8]){
            if (oferta[1] >= demanda[2]){
                resultadoTotal += `+${demanda[2]}*${costoMenor[8]}`;
                oferta[1] = oferta[1] - demanda[2];
                demanda[2] = 0;
                costo[7] = null;
                costo[6] = null;
                costo[8] = null;
            }
            else{
                resultadoTotal += `+${oferta[1]}*${costoMenor[8]}`
                demanda[2] = demanda[2] - oferta[1]
                oferta[1] = 0;
                costo[7] = null;
                costo[1] = null;
                costo[4] = null;
            }
        }
        if (costo[8] == costoMenor[8]){
            if (oferta[2] >= demanda[2]){
                resultadoTotal += `+${demanda[2]}*${costoMenor[8]}`;
                oferta[2] = oferta[2] - demanda[2];
                demanda[2] = 0;
                costo[8] = null;
                costo[6] = null;
                costo[7] = null;
            }
            else{
                resultadoTotal += `+${oferta[2]}*${costoMenor[8]}`
                demanda[2] = demanda[2] - oferta[2]
                oferta[2] = 0;
                costo[8] = null;
                costo[5] = null;
                costo[2] = null;
            }
        }
        
        total.value = eval(`${oferta1.value}+${oferta2.value}+${oferta3.value}`);
        calculo.innerHTML = eval(resultadoTotal);
        precio.innerHTML = resultadoTotal;
        // console.log(eval(resultadoTotal))
    }
    else{
        calculo.innerHTML = "Ingrese una operacion valida. La oferta y la demanda deben ser iguales.";
    }
}

reset = ()=>{
    oferta1.value = "";
    oferta2.value = "";
    oferta3.value = "";

    demanda1.value = "";
    demanda2.value = "";
    demanda3.value = "";

    c1.value = "";
    c2.value = "";
    c3.value = "";
    c4.value = "";
    c5.value = "";
    c6.value = "";
    c7.value = "";
    c8.value = "";
    c9.value = "";

    total.value = "";

    calculo.innerHTML = "";
    precio.innerHTML = ""
}