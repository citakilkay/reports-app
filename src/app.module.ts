import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [ReportsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '',
      port: 5432,
      username: 'postgres',
      password: 'demodb123',
      database: 'demodb',
      autoLoadEntities: true,
      synchronize: true
    })
  ],
})
export class AppModule { }
