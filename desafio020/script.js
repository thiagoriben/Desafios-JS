function calcularFatorial (numero){
    if (numero < 0){
    return ("Fatorial não é definidos para números negativos.")
 }
 let resultado = 1

 for (let i = 1; i <= numero; i++){
    resultado*=i
 }

 return resultado

}

let valor = Number(prompt("Insira um número para ver o fatorial."))
console.log(calcularFatorial(valor))