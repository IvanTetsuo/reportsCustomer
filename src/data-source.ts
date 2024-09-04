import { DataSource } from "typeorm";
import { DataForReport } from "./entity/DataForReport";
import { ReportRequest } from "./entity/ReportRequest";


export const AppDataSource = new DataSource({
    "type": "postgres", // не выносить, а всё остальное выносить
    "host": "localhost",
    "port": 5432,
    "username": process.env.DB_USERNAME,
    "password": "notasecret",
    "database": "admin",
    "entities": [DataForReport, ReportRequest], // это нет
    "synchronize": true, // это тоже нет
});

export const initDataSource = async () => {
    await AppDataSource.initialize();
    console.log("Database connected and initialized");
};

initDataSource().catch((error) => {
    console.log("Database connection error:", error);
});