import { DataSource } from "typeorm";
import { DataForReport } from "./entity/DataForReport";
import { ReportRequest } from "./entity/ReportRequest";


export const AppDataSource = new DataSource({
    "type": "postgres",
    "host": process.env.DB_HOST,
    "port": +process.env.DB_PORT! || 5432,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
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