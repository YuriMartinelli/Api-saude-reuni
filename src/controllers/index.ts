import { PacienteService } from "../services/pacienteService";
import PacienteController from "./pacienteController";

export const pacienteService = new PacienteService()

export const pacienteController = new PacienteController(pacienteService)