import {FuncionariosModel} from "./FuncionariosModel";

export class MensagensModel {
    constructor(
        public idFROM:number,
        public idTO:number,
        public mensagem:string,
        public tipo:number,
        public curtidas:FuncionariosModel,
    ) {}
}