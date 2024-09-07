import * as fs from "fs"
import csv from 'csv-parser';

interface CSVData {
    [key: string]: string;
}


export const readCSV = (): Promise<CSVData[]> => {
    const filePath = "pacientes_simplificado.csv"

    return new Promise((resolve, reject) => {
        const results: CSVData[] = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data: CSVData) => results.push(data))
            .on('end', () => {
                resolve(results);
            })
            .on('error', (error: Error) => {
                reject(error);
            });
    });

};