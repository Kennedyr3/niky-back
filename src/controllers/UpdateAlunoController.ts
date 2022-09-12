import { Request, Response } from "express";
import { UpdateAlunoService } from "../services/UpdateAlunoService";

class UpdateInstrutorController {
  async handle(request: Request, response: Response) {
    const { id }: any = request.params;
    const {name, endereco, telefone, dataNascimento, altura, peso,turma_id, matricula_id, created_at}: any = request.body
    const service = new UpdateAlunoService()

    const result = await service.execute({id, name, endereco, telefone, dataNascimento, altura, peso, turma_id, matricula_id, created_at})

    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }
    return response.status(204).end();
  }
}

export { UpdateInstrutorController };
