import { Request, Response } from "express";
import axios from 'axios';

export const getReportResult = async (req: Request, res: Response) => {
    const {idReport} = req.params;
    const result = await axios.get(`http://localhost:5000/is-ready/${idReport}`);
    const {isReady, downloadURL} = result.data;
    if (!isReady) {
        return res.status(404).end();
    }
    const result2 = await axios({
        url: downloadURL,
        method: 'GET',
        responseType: 'arraybuffer',
    });
    const report = result2.data;
    res.setHeader('Content-Length', report.length);
    res.setHeader('Content-disposition', `attachment; filename=report${idReport}.xlsx`);
    res.setHeader('Content-type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.write(report, 'binary');
    res.end();
}