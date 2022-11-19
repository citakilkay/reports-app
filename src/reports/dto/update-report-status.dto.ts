import { IsEnum } from "class-validator";
import { ReportStatus } from "../report-status.enum";

export class UpdateReportStatus {
    @IsEnum(ReportStatus) //  gelen değer verilen enum tipinde değilse exception fırlat
    status: ReportStatus;
    id: number;
}