import path from "path";
import {FuncionariosModel} from "../models/FuncionariosModel";
import fs from "fs";
import {MensagensModel} from "../models/MensagensModel";

export class MensagensRepository {
    private readonly filePath = path.resolve(__dirname, "../database/mensagens.json");

    getAll(): MensagensModel[] {
        const data = fs.readFileSync(this.filePath, "utf-8");
        const mensagens: MensagensModel[] = JSON.parse(data);
        return mensagens;
    }

    add(mensagem: MensagensModel): void {
        const mensagens = this.getAll();
        mensagens.push(mensagem);
        this.saveAll(mensagens);
    }

    private saveAll(mensagens: MensagensModel[]): void {
        const data = JSON.stringify(mensagens, null, 2);
        fs.writeFileSync(this.filePath, data);
    }

    removeById(id: number): void {
        const mensagens = this.getAll();
        const filtered = mensagens.filter(u => u.id !== id);
        this.saveAll(filtered);
    }
}