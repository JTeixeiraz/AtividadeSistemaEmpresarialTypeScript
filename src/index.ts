const readline = require("readline")
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

//---------------------CODIGO EXEMPLO E=======================
import { User } from "./models/User";
import { UserService } from './services/UserService'

const usuariosServ: UserService = new UserService();

// Invocar o serviço que retorna oS usuários
const usuarios:User[] = usuariosServ.servicoExemploListarTodos();
    // Mostrar todos os usuários
console.log("\n=== Usuários Atuais ===");
usuarios.forEach(user => console.log(user)); 
//-------------------------------------------------------------