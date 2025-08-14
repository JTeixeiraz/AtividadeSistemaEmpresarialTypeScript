import { iCurtida } from "./interface/iCurtida";
import { iMensageria } from "./interface/iMensageria";
import { mensagemPrivada } from "./mensagemPrivada";
import { MensagemPublica } from "./mensagemPublica";
import {FuncionariosModel} from "./FuncionariosModel";

export class perfilFuncionario implements iMensageria, iCurtida{
    id:number;
    nome:string;
    cargo:string;
    descricao:string;
    anosEmpresa:string;
    mensagensPrivadas: string[];
    mensagensPublicas: string[];
    curtidas: FuncionariosModel[];
    constructor(id:number, nome:string, cargo:string, descricao: string, anosEmpresa:string, mensagensPrivadas:string[], mensagemPublica:string[], curtidas: FuncionariosModel[]) {
        this.id = id
        this.nome = nome
        this.cargo = cargo
        this.descricao = descricao
        this.anosEmpresa = anosEmpresa
        this.mensagensPrivadas = mensagensPrivadas
        this.mensagensPublicas = mensagemPublica
        this.curtidas = curtidas
    }
    enviarMensagemPrivada(perfilFuncionario: perfilFuncionario, mensagem: mensagemPrivada): void {

    }
    enviarMensagemPublica(perfilFuncionario: perfilFuncionario, mensagem: MensagemPublica): void {

    }

    serCurtido(perfilFuncionario: FuncionariosModel): void {
        this.curtidas.push(perfilFuncionario)
    }
}