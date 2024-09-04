import { Router } from 'express';
import { reportGetData } from './reportGetData';
import { generateReport } from './generateReport';
import { readinessCheck } from './readinessСheck';
import { getReportResult } from './getReportResult';

const router = Router();

router.get('/get-data', reportGetData);
router.post('/generate-report', generateReport);
router.get('/readiness-check/:idReport', readinessCheck);
router.get('/download/:idReport', getReportResult);

export default router;