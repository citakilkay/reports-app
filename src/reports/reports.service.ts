import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateReportDto } from './dto/create-report.dto';
import { GetReportFilterDto } from './dto/get-report-filter.dto';
import { ReportStatus } from './report-status.enum';
import { Report } from './report.entity';
import { ReportRepository } from './report.repository';

@Injectable()
export class ReportsService {

    constructor(
        @InjectRepository(ReportRepository)
        private reportRepository: ReportRepository) {
    }

    async getAllReports() : Promise<Report[]> {
        return this.reports;
    }

    async getReportById(id: number) : Promise<Report> {
        const reportbyId = this.reportRepository.findOne(id);
        if(reportbyId) {
            return reportbyId;
        }
        throw new NotFoundException();
    }

    async getReportsWithFilters(filterDto : GetReportFilterDto) : Promise<Report[]> {
        const {status, search } = filterDto;
        if(search) {
            this.reports.filter(i => i.title.includes(search) || i.description.includes(search));
        }
        return this.reports;
    }

    async createReport(input: CreateReportDto) : Promise<Report> {
        return await this.reportRepository.createReport(input);
    }

    async deleteReport(id: number) : Promise<boolean> {
        var reportWillbeDeleted = await this.getReportById(id); // report yoksa throw notfound exception
        this.reportRepository.deleteReport(reportWillbeDeleted);
        return true;
    }

    async updateReportStatus(id: number, status: ReportStatus) : Promise<Report> {
        const reportWillbeStatusUpdated = await this.getReportById(id);
        var updatedReport = this.reportRepository.updateReportStatus(reportWillbeStatusUpdated, status);
        return updatedReport;
    }

    async 
}
