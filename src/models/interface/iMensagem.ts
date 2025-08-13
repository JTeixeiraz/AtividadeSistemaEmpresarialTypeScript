export interface IMensagem {
    idTO:number;
    idFROM:number;
    message:string;
    exibirMensagem(idLeitor:number):string;
}