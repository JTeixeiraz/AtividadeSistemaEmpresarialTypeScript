import { iCurtida } from "./interface/iCurtida";
import { IMensagem } from "./interface/iMensagem";
import { perfilFuncionario } from "./perfilFuncionario";
import * as readline from 'readline';
import {FuncionariosModel} from "./FuncionariosModel";


/**
 * const rl = readline.createInterface({
            input:process.stdin,
            output:process.stdout
        })
 */
export class MensagemPublica implements IMensagem, iCurtida{
    idTO: number;
    idFROM: number;
    message: string;
    curtidas: FuncionariosModel[];

    constructor(idTO:number, idFROM:number, message:string, curtidas:FuncionariosModel[]){
        this.idTO = idTO,
        this.idFROM = idFROM,
        this.message = message
        this.curtidas = curtidas
    }

    exibirMensagem(idLeitor: number): string {
        this.message = `DE${this.idTO}: ${this.message} \n DISSE:${this.idFROM}`
        return this.message;
    }
    serCurtido(perfilFuncionario: FuncionariosModel): void {
        this.curtidas.push(perfilFuncionario)
    }
}