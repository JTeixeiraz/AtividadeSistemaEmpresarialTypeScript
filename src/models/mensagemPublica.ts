import { IMensagem } from "./interface/iMensagem";

export class MensagemPublica implements IMensagem{
    idTO: number;
    idFROM: number;
    message: string;

    constructor(idTO:number, idFROM:number, message:string){
        this.idTO = idTO,
        this.idFROM = idFROM,
        this.message = message
    }

    exibirMensagem(idLeitor: number): string {
        this.message = `DE${this.idTO}: ${this.message} \n DISSE:${this.idFROM}`
        return this.message;
    }
}