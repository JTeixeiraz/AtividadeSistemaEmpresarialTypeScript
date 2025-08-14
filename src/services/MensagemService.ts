import {MensagensRepository} from "../repositories/mensagensRepository";
import {MensagensModel} from "../models/MensagensModel";
import fs from "fs";
import path from "path";
import {FuncionariosModel} from "../models/FuncionariosModel";

export class MensagemService {
    private _mensagemRepo = new MensagensRepository()

    ListarMensagens(){
        const allMessages = this._mensagemRepo.getAll();
        console.log(allMessages)
    }

    AdicionarMensagem(mensagem: MensagensModel){
        this._mensagemRepo.add(mensagem);
        let nomeDestinatario:string = ""
        const data = fs.readFileSync(path.resolve(__dirname, "../database/funcionarios.json"), "utf-8");
        const messageData: FuncionariosModel[] = JSON.parse(data);
        for (let i = 0; i < messageData.length ; i++) {
            if (messageData[i].id == mensagem.idTO){
                nomeDestinatario = messageData[i].nome;
            }
        }
        console.log(`Mensagem enviada para ${nomeDestinatario}`)
    }

    RemoverMensagem(id:number){
        this._mensagemRepo.removeById(id);
        console.log("Mensagem removida com sucesso")
    }
}