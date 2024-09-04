import { Request, Response } from "express";
import axios from 'axios';
//Проверка готовности отчёта
export const readinessCheck = async (req: Request, res: Response) => {
    const {idReport} = req.params;
    try {
        const result = await axios.get(`http://localhost:5000/is-ready/${idReport}`);
        const {isReady, documentId} = result.data;
        return res.json({
            result: isReady ? 'Отчёт готов' : 'Отчёт не готов',
            documentId,
            downloadURL: isReady ? `http://localhost:3000/report/download/${idReport}` : undefined,
        });
    } catch(err) {
        res.status(403).json({result: false});
    }
}