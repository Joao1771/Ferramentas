// funcao igual range do python, retornando um array com o intervalo de valores
export default function range(start, end, step = 0) {
    let numbers = []

    //contador
    let count = start

    //verifica se o comeco ou o fim sao invalidos
    if(typeof start !== "number" || typeof start !== "number"){
        console.log(`O ${typeof start !== "number" ? `comeco (${start})` : `final (${end})`} nao e um numero`)
        return undefined
    }

    if(!Number.isInteger(step)){
        console.log("Arredondando o passo...")
        step = Math.round(step)
    }

    //verifica se step existe e nao eh zero
    if (step) {
        if (step > 0) {

            // 5 -> 1
            if (start > end) {
                console.log("Se o passo for positivo, o comeco deve ser maior que o final")
                return undefined
            }
            
            for (; count <= end; count += step) {
                numbers.push(count)
            }
        }
        if (step < 0) {

            // 1 -> 5
            if (start < end) {
                console.log("Se o passo for negativo, o comeco deve ser menor que o final")
                return undefined
            }

            for (; count >= end; count += step) {
                numbers.push(count)
            }
        }
    }

    //se nao tiver step, incrementa/decrementa em 1
    else {
        if (start > end) {
            for (; count >= end; count--) {
                numbers.push(count)
            }
        }
        else {
            for (; count <= end; count++) {
                numbers.push(count)
            }
        }
    }
    return numbers
}