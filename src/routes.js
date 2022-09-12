import { Router } from "express";
import { InstrutorController } from "./controllers/InstrutorController";
import { DeleteInstrutorController } from "./controllers/DeleteInstrutorController";
import { UpdateInstrutorController } from "./controllers/UpdateInstrutorController";

import { AlunoController } from "./controllers/alunoController";
import { DeleteAlunoController } from "./controllers/DeleteAlunoController";
import { UpdateAlunoController } from "./controllers/UpdateAlunoController";

const router = Router();

const instrutorController = new InstrutorController();
const deleteInstrutorController = new DeleteInstrutorController();
const updateInstrutorController = new UpdateInstrutorController();

const alunoController = new AlunoController();
const deleteAlunoController = new DeleteAlunoController();
const updateAlunoController = new UpdateAlunoController();

router.post("/instrutor", instrutorController.create);
router.get("/instrutor", instrutorController.show);
router.delete("/instrutor/:id", deleteInstrutorController.handle);
router.put("/instrutor/:id", updateInstrutorController.handle);

router.get("/aluno", alunoController.show);
router.delete("/aluno/:id", deleteAlunoController.handle);
router.put("/aluno/:id", updateAlunoController.handle);
router.post("/aluno", alunoController.create);

export { router };