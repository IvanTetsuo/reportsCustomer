import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { ReportRequest } from "../entity/ReportRequest";
import axios from 'axios';
const reportRequestRepository = AppDataSource.getRepository(ReportRequest);
const ourServiceName = process.env.SERVICE_NAME;
const dataEndpoint = "http://localhost:3000/report/get-data";
const tableHeaders: string[] = [
    'Имя учащегося',
    'Математика',
    'Русский',
    'Программирование',
    'Ср Математика',
    'Ср Русский',
    'Ср Программирование',
    'Ср Балл'
  ];

export const generateReport = async (req: Request, res: Response) => {
    const {user_id} = req.body;
    const generatorRequestBody = {
        serviceName: ourServiceName,
        dataEndpoint,
        tableHeaders,
    };
    const result = await axios.post('http://localhost:5000/generate-report', generatorRequestBody);
    const report_id = result.data.documentId; //ID ожидаемого отчёта
    const newEntry = reportRequestRepository.create({user_id, report_id});
    await reportRequestRepository.save(newEntry);
    return res.json({newEntry});
}