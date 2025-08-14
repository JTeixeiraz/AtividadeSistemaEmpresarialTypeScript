import {FuncionarioService} from "./services/FuncionarioService";

const FuncionariosService = new FuncionarioService();

main();
function main():void{
    const readline = require("readline")
    const rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout
    });
    let escolha = 0;
    rl.question("Qual parte deseja gerenciar?:\n 1- Funcionarios \n 2- Mensagens \n", (userEscola:number)=>{
        if (userEscola < 1 || userEscola > 2){
            console.log("Selecione uma opção valida")
            rl.close()
        }else {
            escolha = userEscola;
            rl.close();
        }
    });
    switch (escolha) {
        case "1":
            let escolhaFuncionarios = 0;
            rl.question("Oque deseja realizar como funcionario?\n" +
                " 1- Listar todas as mensagens\n" +
                " 2- Adicionar mensagem\n" +
                " 3- Remover mensagem", (escolhaUserFuncionario:number)=>{
                if (escolhaUserFuncionario < 1 || escolhaUserFuncionario > 3){
                    console.log("insira um valor valido")
                    rl.close();
                }else{
                    escolhaFuncionarios = escolhaUserFuncionario
                }
            })
            switch (escolhaFuncionarios) {
                case"1":
                    break;
                case "2":
                    break;
                case "3":
                    break;
            }
            break;
        case "2":
            break;
    }


}