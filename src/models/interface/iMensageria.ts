import { mensagemPrivada } from "../mensagemPrivada"
import { MensagemPublica } from "../mensagemPublica"
import { perfilFuncionario } from "../perfilFuncionario"

export interface iMensageria{
    mensagensPublicas:string[]
    mensagensPrivadas:string[]

    enviarMensagemPublica(perfilFuncionario:perfilFuncionario, mensagem:MensagemPublica):void
    enviarMensagemPrivada(perfilFuncionario:perfilFuncionario, mensagem:mensagemPrivada):void
}