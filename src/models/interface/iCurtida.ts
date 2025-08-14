import { perfilFuncionario } from "../perfilFuncionario";
import {FuncionariosModel} from "../FuncionariosModel";

export interface iCurtida{
    curtidas:FuncionariosModel[]
    serCurtido(perfilFuncionario: FuncionariosModel):void
}