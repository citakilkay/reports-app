import { EntityRepository, Repository } from "typeorm";
import { CreateReportDto } from "./dto/create-report.dto";
import { ReportStatus } from "./report-status.enum";
import { Report } from "./report.entity";

@EntityRepository(Report)
export class ReportRepository extends Repository<Report> {

    async getAllReports(): Promise<Report[]> {
        return await this.find();
    }

    async createReport(input: CreateReportDto): Promise<Report> {
        const { title, description } = input;
        const createdReport = this.create({ title, description });
        await this.save(createdReport);
        return createdReport;
    }

    async deleteReport(reportWiilBeDeleted: Report): Promise<boolean> {
        var removedReports = this.softRemove(reportWiilBeDeleted);
        if (removedReports) {
            return true;
        }
        return false;
    }

    async updateReportStatus(reportWillbeUpdated: Report, status: ReportStatus): Promise<Report> {
        reportWillbeUpdated.status = status;
        var report = this.save(reportWillbeUpdated);
        return report;
    }
}