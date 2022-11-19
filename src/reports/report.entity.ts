import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { ReportStatus } from "./report-status.enum";

@Entity()
export class Report {
    @PrimaryGeneratedColumn('increment') // serialize increase value
    id: number;
    @Column()
    title: string;
    @Column()
    description: string;
    @Column({
        type: "enum",
        enum: ReportStatus,
        default: ReportStatus.Open,
    })
    status: ReportStatus;
}