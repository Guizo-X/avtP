var entrada = require("readline-sync");

var numero = Math.floor(Math.random() *100)
var tent = 0
var contador = 0
console.log(numero)

while(tent != numero){
    var tent = parseFloat(entrada.question("digite um numero de um a cem: "))
    
    if(tent < numero){
        console.log("você não acertou, seu numero e menor que o numero do sorteio !!!")
        contador++
        var pergunta = entrada.question("deseja parar? S/N: ").toUpperCase()

        while(pergunta != "S"){
        if(pergunta == "N"){
            console.log("você decidiu continuar")
            break
        }
        else if(pergunta == "S"){
            console.log("você decidiu parar")
            break
        }
        else{
            console.log("palavra invalida")
            break
        }
        }
        
    }

    else if(tent > numero){
        console.log("você não acertou, seu numero e maior que o numero do sorteio !!!")
    }
   
}
console.log(contador)

