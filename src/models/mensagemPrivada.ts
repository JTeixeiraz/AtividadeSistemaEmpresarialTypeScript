import { IMensagem } from "./interface/iMensagem";

export class mensagemPrivada implements IMensagem{
    idFROM: number;
    idTO: number;
    message: string;
    constructor(idFROM:number, idTO: number, message:string) {
        this.idFROM = idFROM
        this.idTO = idTO
        this.message = message
    }

    exibirMensagem(idLeitor: number): string {
        this.message = `DE${this.idTO}:\n ${this.message} \nDISSE ${this.idFROM}`
        if (idLeitor == this.idTO) {
            return this.message
        }else{
            return ""
        }
    }
}