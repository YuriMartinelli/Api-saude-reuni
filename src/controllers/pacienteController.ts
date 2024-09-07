import { Request, Response } from "express";
import { PacienteService } from "../services/pacienteService";
import { pacienteService } from "./index"

export default class PacienteController {
    constructor(readonly pacienteService:PacienteService) {
    }

    async consultar(req:Request, res:Response) {
        try {  
            const data = await pacienteService.consultar();
            return res.status(200).send(data)
        } catch (error) {
            res.status(500).send("Mensagem: "   + error)
        }
    }
}