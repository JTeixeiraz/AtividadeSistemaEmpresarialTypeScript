import path from "path";
import {User} from "../models/User";
import fs from "fs";
import {FuncionariosModel} from "../models/FuncionariosModel";

export class FuncionariosRepository {
    private readonly filePath = path.resolve(__dirname, "../database/funcionarios.json");

    getAll(): FuncionariosModel[] {
        const data = fs.readFileSync(this.filePath, "utf-8");
        const funcionarios: FuncionariosModel[] = JSON.parse(data);
        return funcionarios;
    }

    add(funcionario: FuncionariosModel): void {
        const funcionarios = this.getAll();
        funcionarios.push(funcionario);
        this.saveAll(funcionarios);
    }

    private saveAll(funcionarios: FuncionariosModel[]): void {
        const data = JSON.stringify(funcionarios, null, 2);
        fs.writeFileSync(this.filePath, data);
    }

    removeById(id: number): void {
        const funcionarios = this.getAll();
        const filtered = funcionarios.filter(u => u.id !== id);
        this.saveAll(filtered);
    }
}