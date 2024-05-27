var entrada = require("readline-sync");
var pergunta

while(pergunta != "N"){

    var escolha = parseFloat(entrada.question("digite a operação desejada: 1 para adição, 2 para subtração, 3 para multiplição, 4 para divisão, 5 para potenciação, 6 para radiciação: "))

    switch(escolha){

        case 1:
            console.log("você escolheu adição")
            var num1 = parseFloat(entrada.question("digite o primeiro numero: "))
            var num2 = parseFloat(entrada.question("digite o segundo numero: "))
            var resultado = num1+num2
            console.log(`seu resultado é ${resultado}`)
            break

        case 2:
            console.log("você escolheu subtração")
            var num1 = parseFloat(entrada.question("digite o primeiro numero: "))
            var num2 = parseFloat(entrada.question("digite o segundo numero: "))
            var resultado = num1-num2
            console.log(`seu resultado é ${resultado}`)
            break
        case 3:
            console.log("você escolheu multiplicação")
            var num1 = parseFloat(entrada.question("digite o primeiro numero: "))
            var num2 = parseFloat(entrada.question("digite o segundo numero: "))
            var resultado = num1*num2
            console.log(`seu resultado é ${resultado}`)
            break
        case 4:
            console.log("você escolheu divisão")
            var num1 = parseFloat(entrada.question("digite o primeiro numero: "))
            var num2 = parseFloat(entrada.question("digite o segundo numero: "))
            var resultado = num1/num2
            console.log(`seu resultado é ${resultado}`)
            break
        case 5:
            console.log("você escolheu potenciação")
            var num1 = parseFloat(entrada.question("digite a base: "))
            var num2 = parseFloat(entrada.question("digite o expoente: "))
            var potencia =  Math.pow(num1,num2)
            console.log(`seu resultado é ${potencia}`)
            break
        case 6:
            console.log("você escolheu raiz")
            var num1 = parseFloat(entrada.question("digite o numero que vai ser tirada a raiz quadrada: "))
            var raiz = Math.sqrt(num1)
            console.log(`seu resultado é ${raiz}`)
            break
        default:
            console.log("essa opção não é valida.")
            brea

    }

    while(pergunta != "N"){
    var pergunta = entrada.question("quer continuar? S/N: ").toUpperCase()

    if(pergunta == "S"){
        console.log("voce decidiu continuar")
        break
    }
    
    else if(pergunta == "N"){
        console.log("voce decidiu parar")
        break
    }

    else{
        console.log("opção invalida")
    }


    }

    if(pergunta == "N"){
        break
    }
    

}
    