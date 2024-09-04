import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
// основная, единая таблица из бд,
// на основе которой пользователи строят отчёт
@Entity()
export class DataForReport {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: "varchar", length: 100})
    student_name!: string;

    @Column({type: "varchar", length: 100})
    subject_name!: string;

    @Column({type: "int"})
    mark!: number;

    @Column({type: 'date', default: () => 'NOW()'})
    date!: string;
}