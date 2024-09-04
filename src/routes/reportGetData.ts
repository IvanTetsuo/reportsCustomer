import { AppDataSource } from "../data-source";
import { DataForReport } from "../entity/DataForReport";
import { Request, Response } from "express";
const dataForReportRepository = AppDataSource.getRepository(DataForReport);

export const reportGetData = async (req: Request, res: Response) => {
    const data = await dataForReportRepository.find();
    return res.json(data);
}