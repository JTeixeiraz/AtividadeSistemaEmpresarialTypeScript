import { iMensageria } from "./interface/iMensageria";
import { mensagemPrivada } from "./mensagemPrivada";
import { MensagemPublica } from "./mensagemPublica";

export class perfilFuncionario implements iMensageria{
    id:number;
    nome:string;
    cargo:string;
    descricao:string;
    anosEmpresa:string;
    mensagensPrivadas: string[];
    mensagensPublicas: string[];
    constructor(id:number, nome:string, cargo:string, descricao: string, anosEmpresa:string, mensagensPrivadas:string[], mensagemPublica:string[]) {
        this.id = id
        this.nome = nome
        this.cargo = cargo
        this.descricao = descricao
        this.anosEmpresa = anosEmpresa
        this.mensagensPrivadas = mensagensPrivadas
        this.mensagensPublicas = mensagemPublica
        
    }
    enviarMensagemPrivada(perfilFuncionario: perfilFuncionario, mensagem: mensagemPrivada): void {
        
    }
    enviarMensagemPublica(perfilFuncionario: perfilFuncionario, mensagem: MensagemPublica): void {
        
    }
}