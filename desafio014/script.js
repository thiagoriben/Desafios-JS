let nomeAlunos = []
let notasAlunos = []
let index = 0
let c = true
let soma = 0


while (c) {
    let nome = prompt("Insira o nome do aluno.")
    nomeAlunos[index] = nome
    let nota = prompt("Insira a nota do aluno.")
    nota = parseFloat(nota)
    notasAlunos[index] = nota
        
    let r = prompt("Deseja adicionar novas informações? (S/N)")
        if (r.toUpperCase() !== "S") {
            c = false
        }

    index++
}

for (let i = 0; i < notasAlunos.length; i++) {
    soma += notasAlunos[i]
}

let media = soma / nomeAlunos.length
let mediaFix = media.toFixed(1)

console.log(nomeAlunos, notasAlunos)
console.log("A soma das notas foram: " + soma)
console.log("A média geral dos alunos é: " + mediaFix)
