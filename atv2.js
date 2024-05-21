var entrada = require("readline-sync");

var escolha = parseFloat(entrada.question("digite a operação desejada: 1 para adição, 2 para subtração, 3 para multiplição, 4 para divisão, 5 para potenciação, 6 para radiciação: "))

switch(escolha){

    case 1:
        console.log("você escolheu adição")
        var num1 = parseFloat(entrada.question("digite o primeiro numero: "))
        var num2 = parseFloat(entrada.question("digite o segundo numero: "))
        var resultado = num1+num2
        console.log(`seu resultado é ${resultado}`)

    case 2:
        console.log("você escolheu subtração")
        var num1 = parseFloat(entrada.question("digite o primeiro numero: "))
        var num2 = parseFloat(entrada.question("digite o segundo numero: "))
        var resultado = num1-num2
        console.log(`seu resultado é ${resultado}`)
    case 3:
        console.log("você escolheu multiplicação")
        var num1 = parseFloat(entrada.question("digite o primeiro numero: "))
        var num2 = parseFloat(entrada.question("digite o segundo numero: "))
        var resultado = num1*num2
        console.log(`seu resultado é ${resultado}`)
    case 4:
        console.log("você escolheu divisão")
        var num1 = parseFloat(entrada.question("digite o primeiro numero: "))
        var num2 = parseFloat(entrada.question("digite o segundo numero: "))
        var resultado = num1/num2
        console.log(`seu resultado é ${resultado}`)

}