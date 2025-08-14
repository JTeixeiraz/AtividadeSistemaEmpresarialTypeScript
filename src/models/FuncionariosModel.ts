import {mensagemPrivada} from "./mensagemPrivada";
import {MensagemPublica} from "./mensagemPublica";

export class FuncionariosModel {
    constructor(
        public id:number,
        public nome:string,
        public cargo:string,
        public descricao:string,
        public quantAnosEmpresa:number,
        public curtidas:FuncionariosModel[],
        public mensagensPublicas:MensagemPublica[],
        public mensagensPrivadas:mensagemPrivada[],
    ) {}
}