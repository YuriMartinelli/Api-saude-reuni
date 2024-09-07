import { Router } from "express"
import { pacienteController } from "../controllers";

const pacienteRoute = Router();

pacienteRoute.get("/consultar", (req, res) => pacienteController.consultar(req, res))

export default pacienteRoute