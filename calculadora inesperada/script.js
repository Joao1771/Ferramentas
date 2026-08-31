/* transformar em classe se facilitar */

const botoesNumeros = document.querySelectorAll(".numero");
const botoesOperadores = document.querySelectorAll(".operador");
const tela = document.querySelector("#tela")
let num1 = null
let num2 = null
let operador = null;
tela.value = ''

//verifica o botão pressionado
function verificar(caractere){
    switch (caractere) {
        case "/": calcular(caractere);
        break
        case "x": calcular(caractere);
        break
        case "-": calcular(caractere);
        break
        case "+": calcular(caractere);
        break
        case "=": resultado();
        break
        case "C": limpar();
        break
        default: adicionarNumero(+caractere)
    }
    
}
function adicionar(caractere) {
    // adiciona com espaço se for operador (1 + 1)
    for (op of ['+', '/', 'x', '-']) {
        if (caractere === op) {
            tela.value += (' ' + caractere + ' ')
            return
        }
    }

    tela.value += caractere
}

function calcular(caractere){
    //se nao tiver numeros nao faz nada
    if(num1 === null) return

    adicionar(caractere)

    //se tiver apenas um numero apenas manda o valor para a variavel
    if(num2 === null) {
        operador = caractere;
        return;
    }

    //se tiverem dois numeros na tela ele calcula os dois e manda no num1
    switch (operador) {
        case "/": num1 /= num2;
        break
        case "x": num1 *= num2;
        break
        case "-": num1 -= num2;
        break
        case "+": num1 += num2;
    }

    //e assim num2 fica null novamente para continuar a expressao
    num2 = null;
    operador = caractere
}

function resultado(){
    //se estiver sem conta não faz nada
    if(!operador || num2 === null) return

    let total;
    switch (operador) {
        case "/": total = num1 / num2;
        break
        case "x": total = num1 * num2;
        break
        case "-": total = num1 - num2;
        break
        case "+": total = num1 + num2;
    }
    //mostra o total, o operando1 recebe o total e o 2 fica null para poder continuar
    tela.value = total;
    num1 = total;
    num2 = null;
}

function adicionarNumero(numero){
    adicionar(numero)

    //se nao tiver nenhum algarismo, numero 1 recebe o numero
    if (num1 === null) {
        num1 = numero
    } 

    //se nao tiver operador os algarismos serao concatenados
    else if (!operador) {
        num1 += numero.toString()
        num1 = +num1
    } 
    //se o numero 2 nao tiver nada recebe o numero
    else if (num2 === null) {
        num2 = numero
    } 
    //se o numero 1 e 2 tiverem algarismos, concatena o numero 2
    else {
        num2 += numero.toString()
        num2 = +num2
    }
}

function limpar() {
    num1 = null
    num2 = null
    operador = null;
    tela.value = '';
}