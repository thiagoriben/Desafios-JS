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
            alert("Você escolheu fazer login!")
            
            function procurarLoginSenha (elemento1) {
                return arrayUsuario.includes && arraySenha.includes (elemento1);
            }
            
            if (procurarLogin(arrayUsuario) && procurarSenha(arraySenha)) {
                console.log("O login existe!")
                alert("Login feito com sucesso!")
            }else{
                alert("As informações não foram encontradas. Tente Novamente.")
            }


            break;
        
        
        case "3":
            alert("Você escolheu excluir um cadastro!")
                
            break;
    

        default:
            alert("Você escolheu encerrar o programa.")
            repetir = false
            break;
    }
}

console.log(arraySenha, arrayUsuario)


function excluirUsuarioSenha (){
    
}