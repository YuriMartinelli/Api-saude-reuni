import { readCSV } from "../utils/lerCsvHelper";

export class PacienteService{
    async consultar(){
        const data = await readCSV();
        
        return data;
    }
}