//SIMULADOR DE VALOR POR CUOTA Y TOTAL

let resultado = 0;


function intCuota(valor){
    let conInteres = valor * 0.1;
    resultado = valor + conInteres
    return resultado;
}

function calCuota(resultado,cuotas){
    resultadoFinal = resultado / cuotas;
    return resultadoFinal;
}

function dictaTotal (){
    alert("Al pagar en "+ cuotas + " cuotas se le suma un interes del 10%. \n Su total a pagar es de $" + resultado + "\n Cada cuota va a tener un valor de $" + resultadoFinal);

}

function calculo(){
    if(cuotas === 1){
        calCuota(valor,cuotas);
        alert("Al pagarlo en una sola cuota, esta no tiene recargo. Su monto a pagar tiene un total de  $" + valor);
    }else if(cuotas === 2){
        intCuota(valor);
        calCuota(resultado,cuotas);
        dictaTotal ();    
    }else if(cuotas === 3){
        intCuota(valor);
        calCuota(resultado,cuotas);
        dictaTotal ();
    }else if(cuotas === 4){
        intCuota(valor);
        calCuota(resultado,cuotas);
        dictaTotal ();
    }else if(cuotas === 5){
        intCuota(valor);
        calCuota(resultado,cuotas);
        dictaTotal ();
    }else if(cuotas === 6){
        intCuota(valor);
        calCuota(resultado,cuotas);
        dictaTotal ();
    }else if(cuotas === 7){
        intCuota(valor);
        calCuota(resultado,cuotas);
        dictaTotal ();
    }else if(cuotas === 8){
        intCuota(valor);
        calCuota(resultado,cuotas);
        dictaTotal ();
    }else if(cuotas === 9){
        intCuota(valor);
        calCuota(resultado,cuotas);
        dictaTotal ();
    }else if(cuotas === 10){
        intCuota(valor);
        calCuota(resultado,cuotas);
        dictaTotal ();
    }else if(cuotas === 11){
        intCuota(valor);
        calCuota(resultado,cuotas);
        dictaTotal ();
    }else if(cuotas === 12){
        intCuota(valor);
        calCuota(resultado,cuotas);
        dictaTotal ();
    }else{
        alert("La cantidad de cuotas elegida no es correcta ")
    }
}

function calculo2(){
    if(cuotas === 1){
        calCuota(valor,cuotas);
        alert("Al pagarlo en una sola cuota, esta no tiene recargo. Su monto a pagar tiene un total de  $" + valor);
    }else if(cuotas === 2){
        intCuota(valor);
        calCuota(resultado,cuotas);
        dictaTotal();    
    }else if(cuotas === 3){
        intCuota(valor);
        calCuota(resultado,cuotas);
        dictaTotal();
    }else if(cuotas === 4){
        intCuota(valor);
        calCuota(resultado,cuotas);
        dictaTotal();
    }else if(cuotas === 5){
        intCuota(valor);
        calCuota(resultado,cuotas);
        dictaTotal();
    }else if(cuotas === 6){
        intCuota(valor);
        calCuota(resultado,cuotas);
        dictaTotal();
    }else if(cuotas === 7){
        intCuota(valor);
        calCuota(resultado,cuotas);
        dictaTotal();
    }else if(cuotas === 8){
        intCuota(valor);
        calCuota(resultado,cuotas);
        dictaTotal();
    }else if(cuotas === 9){
        intCuota(valor);
        calCuota(resultado,cuotas);
        dictaTotal();
    }else if(cuotas === 10){
        intCuota(valor);
        calCuota(resultado,cuotas);
        dictaTotal();
    }else if(cuotas === 11){
        intCuota(valor);
        calCuota(resultado,cuotas);
        dictaTotal();
    }else if(cuotas === 12){
        intCuota(valor);
        calCuota(resultado,cuotas);
        dictaTotal();
    }else if(cuotas === "no"){
        alert("Saludos, vuelva pronto");
    }else if(cuotas === "si"){
        valor = parseFloat(prompt("Ingrese el valor a calcular en cuotas"));
        cuotas = parseInt(prompt("Ingrese en cuantas cuotas lo quiere pagar \n Solo tiene hasta 12 cuotas"));
        calculo();
    }else{
        alert("La respuesta no es correcta");
    }
}
//funcion para volver a preguntar si quiere seguir calculando
function otraVez(){
    cuotas = prompt("¿Quiere seguir calculando? \n -si \n -no");
}

function otraVezWhile() {
//nose como hacer para que me siga preguntando todo el tiempo si quiero seguir calculando.
    //-- --  --  --  --  --  --  --  ---  ---  ---  ---  --- --- --- -
    while(cuotas !== "no" || cuotas !== "NO"){
        
        if(cuotas === "si" || cuotas === "SI"){
            calculo2(); 
        }else if(cuotas === ""){
            alert("Opcion incorrecta");
            break;
        }else{
            alert("saludos, vuelva pronto");
            break;
        }
    }
    
}




//COMIENZO DE PROGRAMA
let valor = parseFloat(prompt("Ingrese el valor a calcular en cuotas"));
let cuotas = parseInt(prompt("Ingrese en cuantas cuotas lo quiere pagar \n Solo tiene hasta 12 cuotas"));
calculo();
otraVez();
otraVezWhile();
