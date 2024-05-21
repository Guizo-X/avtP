var entrada = require("readline-sync");

var numero = Math.floor(Math.random() *100)
var tent = 1
var contador = 0
var pergunta
console.log(numero)

while(tent != numero){
    var tent = parseFloat(entrada.question("digite um numero de um a cem: "))
    
    if(tent < numero){
        console.log("você não acertou, seu numero e 'menor' que o numero do sorteio !!!")
        contador++
        
        while(pergunta != "S"){
            var pergunta = entrada.question("deseja parar? S/N: ").toUpperCase()

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
            }
        }

        if(pergunta == "S"){
            break
        }


        
        
    }

    else if(tent > numero){
        console.log("você não acertou, seu numero e 'maior' que o numero do sorteio !!!")
        contador++

        while(pergunta != "S"){
            var pergunta = entrada.question("deseja parar? S/N: ").toUpperCase()

            if(pergunta == "N"){
            console.log("você decidiu continuar")
            break
            }
            else if(pergunta == "S"){
            console.log(`você decidiu parar. seu total de tentativas foram ${contador}`)
            break
            }
            else{
            console.log("palavra invalida")
            }
        }

        if(pergunta == "S"){
            break
        }
    }
    else{
        console.log(`parabens você acertou o numero ${numero}. seu total de tentativas foram ${contador}`)
        
    }
}

