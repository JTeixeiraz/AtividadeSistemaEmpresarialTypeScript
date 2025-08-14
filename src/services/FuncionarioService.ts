import {FuncionariosRepository} from "../repositories/funcionariosRepository";
import {FuncionariosModel} from "../models/FuncionariosModel";

export class FuncionarioService{
    private _funcionarioRepo = new FuncionariosRepository()

    constructor() {
        this._funcionarioRepo = new FuncionariosRepository()
    }

    ListarFuncionarios(){
        const allUsers = this._funcionarioRepo.getAll()
        console.log(allUsers);
    }
    AdicionarFuncionario(addedFunc: FuncionariosModel){
        this._funcionarioRepo.add(addedFunc);
        console.log(`Usuário: ${addedFunc.nome} adicionado com sucesso às ${Date.now()}`)
    }
    RemoverFuncionario(id:number){
        this._funcionarioRepo.removeById(id);
    }
}