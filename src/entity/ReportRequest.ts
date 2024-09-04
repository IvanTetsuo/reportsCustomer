import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class ReportRequest {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: "int"})
    user_id!: number;

    @Column({type: "int"})
    report_id!: number; //id готового или ожидаемого отчёта
}