import { iCurtida } from "./interface/iCurtida";
import { IMensagem } from "./interface/iMensagem";
import { perfilFuncionario } from "./perfilFuncionario";
import {FuncionariosModel} from "./FuncionariosModel";

export class mensagemPrivada implements IMensagem, iCurtida{
    idFROM: number;
    idTO: number;
    message: string;
    curtidas: FuncionariosModel[];
    constructor(idFROM:number, idTO: number, message:string, curtidas:FuncionariosModel[]) {
        this.idFROM = idFROM
        this.idTO = idTO
        this.message = message
        this.curtidas = curtidas
    }
    exibirMensagem(idLeitor: number): string {
        this.message = `DE${this.idTO}:\n ${this.message} \nDISSE ${this.idFROM}`
        if (idLeitor == this.idTO) {
            return this.message
        }else{
            return ""
        }
    }
    serCurtido(perfilFuncionario: FuncionariosModel): void {
        this.curtidas.push(perfilFuncionario)
    }
}