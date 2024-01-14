let arrayUsuario = []
let arraySenha = []
let repetir = true
let index = 0

while (repetir === true) {
    let pergunta = prompt("O que você deseja? CADASTRAR = 1, FAZER LOGIN = 2, EXCLUIR UM CADASTRO = 3, OU ENCERRAR O PROGRAMA = 4.")

    switch (pergunta) {
        case "1":
           // alert("Você escolheu se cadastrar!")
            let usuario = prompt("Insira o seu usuario.")   
            arrayUsuario[index] = usuario 
            let senha = prompt("Insira a sua senha.")    
            arraySenha[index] = senha

            index++
            break;

        case "2":
            function procurarLoginSenha (usuario, senha) {
                return arrayUsuario.includes(usuario) && arraySenha.includes (senha);
            }
            alert("Você escolheu fazer login!")
            
            let usuarioLogin = prompt("Digite o usuário.")
            let senhaLogin = prompt("Digite a senha.")
            
            if (procurarLoginSenha(usuarioLogin, senhaLogin)) {
                console.log("O login existe.")
                alert("Login feito com sucesso!")
            }else{
                console.log("O login NÃO existe.")
                alert("As informações não foram encontradas. Tente Novamente.")
            }

            break;
        
        
        case "3":
            alert("Você escolheu excluir um cadastro!")
            let usuarioExcluir = prompt("Digite o nome do usuário que deseja excluir.")
                function excluirUsuarioSenha(usuarioExcluir) {
                    procurarLoginSenha(usuarioExcluir)
 
                }
                 //se tiver -1 no index, ele vai excluir 1 elemento de usuario e
                let indexExcluirUsuario = arrayUsuario.indexOf(usuarioExcluir)
                if (indexExcluirUsuario !== -1) {
                    arrayUsuario.splice(indexExcluirUsuario, 1)
                    arraySenha.splice(indexExcluirUsuario, 1)
                    alert("Usuário excluído com sucesso.")
                    
                }else{
                    alert("Falha na exclusão.")
                    
                }
                
                


            break;
    
        case "4":
            alert("Você escolheu encerrar o programa.")
            repetir = false
            break;

        default:
            alert("Opção inválida. Tente novamente.")
            break;
    }
}

console.log(arrayUsuario, arraySenha)