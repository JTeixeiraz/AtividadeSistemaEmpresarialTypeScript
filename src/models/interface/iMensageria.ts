import { mensagemPrivada } from "../mensagemPrivada"
import { MensagemPublica } from "../mensagemPublica"
import { perfilFuncionario } from "../perfilFuncionario"

export interface iMensageria{
    mensagensPublicas:MensagemPublica[]
    mensagensPrivadas:mensagemPrivada[]

    enviarMensagemPublica(perfilFuncionario:perfilFuncionario, mensagem:MensagemPublica):void
    enviarMensagemPrivada(perfilFuncionario:perfilFuncionario, mensagem:mensagemPrivada):void
}