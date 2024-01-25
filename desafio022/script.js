//declaração de arrays, e da variavel continuar
let nomes = []
let senhas = []
let continuar = true

//função para o usuario escolher o que fazer
function solicitarOpcao(){
    let escolha = prompt ("Você deseja fazer login[1], cadastrar[2], excluir[3] ou encerrar o programa[4]?")
    return escolha
}

//função para o usuario fazer o cadastro
function cadastro(){
    nomes.push(prompt("Digite o seu nome."))
    senhas.push(prompt("Digite a sua senha."))
}

//função para o usuario fazer login
function login() {  
    let nomeLogin = prompt("Digite o seu usuario de login.")
    let senhaLogin = prompt("Digite a sua senha.")

    //variavel indice usuario verifica o indice da variavel nomeLogin no array nomes
    let indiceUsuario = nomes.indexOf(nomeLogin)

    //se o valor inserido em nomeLogin e de senha, o index, for diferente de -1, elas existe
    //e o login acontece com sucesso. caso nao exista, que no caso o index é -1, o login nao acontece
    if (indiceUsuario !== -1 && senhas[indiceUsuario] === senhaLogin){
        alert("Login bem-sucedido! Bem-vindo, " + nomeLogin + "!")
    }else{
        alert("Erro de login. Verifique seu nome de usuário e senha.")
    }

}

function excluirCadastro() {
    let nomeExcluir = prompt("Digite o usuario que deseja excluir.")

    //pegar o indice do usuario no array nomes usando o nome que o usuario inseriu
    //na variavel nomeExcluir
    let indiceUsuarioExcluir = nomes.indexOf(nomeExcluir)

    //se o indice for diferente de -1, ou seja, ele existir, a função splice vai excluir
    //o usuario e a senha, conforme o index de ambos. e o numero a depois da virgula, é a quantidade
    //de informação para excluir, ou seja. um usuario e uma senha.
    if (indiceUsuarioExcluir !== -1) {
        nomes.splice(indiceUsuarioExcluir, 1)
        senhas.splice(indiceUsuarioExcluir, 1)
        alert("Usuário excluído com sucesso!")
    }else{
        alert("Usuário não encontrado. Verifique o nome de usuário.")
    }
}

function encerrarPrograma() {
    alert("Você escolheu encerrar o programa.")
        continuar = false
}

while (continuar){
    let opcao = solicitarOpcao()

    switch (opcao) {
        case "1":
            login()
            break;
        case "2":
            cadastro()
            break;
        case "3":
            excluirCadastro()
            break;
        case "4":
            encerrarPrograma()
            break;
    
        default:
            alert("Opção inválida, tente novamente.")    
            break;
    }

    let pergunta = prompt("Deseja repetir? (s/n)")
    if (pergunta !== "s"){
        continuar = false
    }
}