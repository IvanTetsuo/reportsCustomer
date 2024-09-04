import { DataSource } from "typeorm";
import { DataForReport } from "./entity/DataForReport";
import { ReportRequest } from "./entity/ReportRequest";

export const AppDataSource = new DataSource({
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "admin",
    "password": "notasecret",
    "database": "admin",
    "entities": [DataForReport, ReportRequest],
    "synchronize": true,
});

export const initDataSource = async () => {
    await AppDataSource.initialize();
    console.log("Database connected and initialized");
};

initDataSource().catch((error) => {
    console.log("Database connection error:", error);
});