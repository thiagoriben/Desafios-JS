let arrayUsuario = []
let arraySenha = []
let repetir = true
let index = 0

while (repetir === true) {
    let pergunta = prompt("O que você deseja? CADASTRAR = 1, FAZER LOGIN = 2, EXCLUIR UM CADASTRO = 3, OU ENCERRAR O PROGRAMA = 4.")

    switch (pergunta) {
        case "1":
            alert("Você escolheu se cadastrar!")
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
                    arrayUsuario.indexOf(usuarioExcluir)

                }if (usuarioExcluir.includes(arrayUsuario)) {
                    arrayUsuario.splice(usuarioExcluir)
                    let indexExcluirSenha = arrayUsuario.indexOf(usuarioExcluir)
                    arraySenha.splice(indexExcluirSenha)
                    alert("Usuário excluído com sucesso.")
                    
                }else{
                    alert("Falha na exclusão.")
                    
                }
                
                


            break;
    

        default:
            alert("Você escolheu encerrar o programa.")
            repetir = false
            break;
    }
}

console.log(arraySenha, arrayUsuario)