import { IsEnum, IsOptional } from "class-validator";
import { ReportStatus } from "../report-status.enum";

export class GetReportFilterDto {

    @IsOptional()
    @IsEnum(ReportStatus)
    status?: ReportStatus;
    
    @IsOptional()
    search?: string;
}