import { iCurtida } from "./interface/iCurtida";
import { IMensagem } from "./interface/iMensagem";
import { perfilFuncionario } from "./perfilFuncionario";

export class mensagemPrivada implements IMensagem, iCurtida{
    idFROM: number;
    idTO: number;
    message: string;
    curtidas: perfilFuncionario[];
    constructor(idFROM:number, idTO: number, message:string, curtidas:perfilFuncionario[]) {
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
    serCurtido(perfilFuncionario: perfilFuncionario): void {
        this.curtidas.push(perfilFuncionario)
    }
}