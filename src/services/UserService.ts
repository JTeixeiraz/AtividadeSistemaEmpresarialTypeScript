//ARQUIVO EXEMPLO

import { User } from '../models/User';
import {UserRepository} from '../repositories/UserRepository'
export class UserService{

    private _userRepo: UserRepository;

    constructor(){
        this._userRepo = new UserRepository();

    }

    //fazer a implementação dos serviços
    //...

    servicoExemplo():User{
        //objeto fake de exemplo
        return new User(0, 'teste', 'teste@gmail.com');
    }

    servicoExemploListarTodos() : User[]{
        const usuarios: User[] = this._userRepo.getAll();
        return usuarios;
    }

}


