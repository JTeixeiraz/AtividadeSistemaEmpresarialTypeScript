import { perfilFuncionario } from "../perfilFuncionario";

export interface iCurtida{
    curtidas:perfilFuncionario[]
    serCurtido(perfilFuncionario: perfilFuncionario):void
}