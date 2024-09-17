import { Module } from '@nestjs/common';
import { MedicalRecordService } from './medical-record.service';

@Module({
  providers: [MedicalRecordService],
})
export class MedicalRecordModule {}
