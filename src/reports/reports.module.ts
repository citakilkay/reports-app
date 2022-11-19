import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportRepository } from './report.repository';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';

@Module({
  imports: [TypeOrmModule.forFeature([ReportRepository])],
  controllers: [ReportsController],
  providers: [ReportsService]
})
export class ReportsModule {}
