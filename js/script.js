

//Ejer1
arrayObjetos = [
    {
        Nombre: "Pedro",
        Apellidos: "Pérez",
        Curso: "2DAW",
        Notas: [5, 6, 6]
    },
    {
        Nombre: "Ana",
        Apellidos: "García",
        Curso: "2DAW",
        Notas: [7, 8, 7]
    },
    {
        Nombre: "Luis", 
        Apellidos: "Martínez",
        Curso: "2DAW",
        Notas: [9, 10, 9]   
        
    },  
    { 
        Nombre: "María",
        Apellidos: "López",
        Curso: "2DAW",      
        Notas: [4, 5, 5]
    },
    {
        Nombre: "Javier",
        Apellidos: "Gómez",
        Curso: "2DAW",
        Notas: [6, 7, 6]
    }
];

let divEjer1 = document.getElementById("ejer1");

for(let elem of arrayObjetos){

    divEjer1.innerHTML += "<br><p>Nombre: " + elem.Nombre + " Apellidos: " + elem.Apellidos + " Curso: " + elem.Curso + " Notas: " + elem.Notas[0] + ", " + elem.Notas[1] + ", Nota Final: " + elem.Notas[2] + "</p>";

}

//Ejer2
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

document.getElementById("btnResultado").onclick= function(){

    let bin1 = parseInt(num1.value);
    let bin2 = parseInt(num2.value);


    if(isNaN(bin1) || isNaN(bin2) || bin1 >1 || bin1<0 || bin2 > 1 || bin2 <0){
        resultado.innerHTML ="ingresa SOLO 0 o 1"

    }else if((bin1 == 0 && bin2 == 0) || (bin1 == 1 && bin2 == 1) ){
        resultado.innerHTML = "0";
    }else{
        resultado.innerHTML = "1";
    }
    

}

//Ejer3
let dinero = document.getElementById("dinero");

document.getElementById("btnConvierte").onclick= function(){

    let dir = parseInt(dinero.value);
    let yenes;
    let dolares;


    if(isNaN(dir)){
        resultado1.innerHTML ="Ingresa un Valor numerico"

    }else{    
        //Un euro equivale a 177 yenes
        yenes = dir * 177;
        //actualemente 1€ equivale a 1,12dolares
        dolares = dir * 1.2;

        resultado1.innerHTML = "<strong>" + dir + "€ equivalen a :</strong> <br>" 
                                + yenes + " yenes <br>" 
                                + dolares.toFixed(2) + " dolares."
    }

}

//Ejer 4

let inputCircur = document.getElementById("circurlo");

    document.getElementById("btnCalcula").onclick= function(){

    let radio = parseFloat(inputCircur.value);
    let circur;
    let area;


    if(isNaN(radio)){
        resultado2.innerHTML ="Ingresa un Valor numerico"

    }else{    
        circur = (radio * 2 * Math.PI).toFixed(2);
        area = (2 * Math.pow(radio,2) * Math.PI).toFixed(2);

        resultado2.innerHTML = "<strong> Dado el radio: " + radio +"</strong> <br>" +
                                " Área : " + area + " <br>" 
                                + "Perímetro/Circunferencia: " + circur;
    }

}

//Ejer 5

let valor1 = document.getElementById("var1");
let valor2 = document.getElementById("var2");

document.getElementById("btnMostrar").onclick= function(){

    let num1 = parseInt(valor1.value);
    let num2 =parseInt(valor2.value);


    if(isNaN(num1) || isNaN(num2)){
        resultado2.innerHTML ="Alguno de los valores no son numericos"

    }else if(num1 > num2){    
        

        resultado3.innerHTML = sacaPares(num1,num2);
    }else{
        resultado3.innerHTML = sacaPares(num2,num1);
    }

}
//Funcion para sacar los pares
function sacaPares(n1,n2){

    
    let numerosPares = "Los numeros pares existentes entre " + n1 + " y " + n2 + " son: ";

    //cuempro que el numero mas pequeño sea par, si no lo es le sumo 1;

    if(n2%2!=0)
        n2+=1;

    //compruebo que ambos numeros no sean iguales
    if(n1==n2){
        numerosPares = "Los numeros Son IGUALES NO HAY PARES";
        
    }else if(n1>5000 || n2<-100) {
        numerosPares = "Los numeros NO PUEDEN SOBREPASAR 5000 NI MENOS QUE -100";

    }else{

    let contador = n2;

    do{
        if(n1==contador){
            numerosPares += "("+contador +")";
        }else{
            numerosPares += "("+contador +") - ";

        }

        contador +=2;
       
        
    }
    while(n1>=contador)
    }

    return numerosPares + ".";
}

let divisor = document.getElementById("divisor");
let dividendo = document.getElementById("dividendo");


document.getElementById("btnResultado2").onclick= function(){

    let num1 = parseFloat(dividendo.value);
    let num2 =parseFloat(divisor.value);

    let suma, resta, multiplicacion, division;   

    if(isNaN(num1) || isNaN(num2)){
        resultado4.innerHTML ="Alguno de los valores no son numericos"

    }else{    
        suma = num1 + num2;
        resta = (num1-num2);
        multiplicacion = num1 * num2;

        if(num2 == 0){
            division = "No se puede dividir entre 0"
        }else{
            division = num1 / num2 + " resto: " + num1%num2;
        }

        resultado4.innerHTML = "Suma: " + suma + "<br>" + 
                                "Resta: " + resta + "<br>" +
                                "Multiplicacion: " + multiplicacion + "<br>" +
                                "Division: " + division;
    } 

}