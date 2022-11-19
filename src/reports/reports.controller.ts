import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { GetReportFilterDto } from './dto/get-report-filter.dto';
import { ReportStatus } from './report-status.enum';
import { Report } from './report.entity';
import { ReportsService } from './reports.service';

@Controller('report')
export class ReportsController {
    private reportsService: ReportsService;
    constructor(reportsService: ReportsService) {
        this.reportsService = reportsService; // dependency injection
    }

    @Get()
    getAllReports() {
        return this.reportsService.getAllReports();
    }

    @Get('/:id')
    async getReportById(@Param('id') id: number): Promise<any> {
        return await this.reportsService.getReportById(id);
    }

    @Get()
    async getReports(@Query() filterDto: GetReportFilterDto): Promise<Report[]> {
        if (!Object.keys(filterDto).length) {
            return await this.reportsService.getAllReports();
        }
        return await this.reportsService.getReportsWithFilters(filterDto);
    }

    @Post()
    async createReport(@Body() input: CreateReportDto): Promise<any> {
        return await this.reportsService.createReport(input);
    }

    @Delete('/:id')
    async deleteReport(@Param('id') id: number): Promise<boolean> {
        return await this.reportsService.deleteReport(id);
    }

    @Patch('/:id/status')
    async updateReport(@Param('id') id: number, @Body('status') status: ReportStatus): Promise<Report> {
        return await this.reportsService.updateReportStatus(id, status);
    }
}
