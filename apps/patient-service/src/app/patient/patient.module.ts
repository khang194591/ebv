import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalRecord, Patient } from '../../entities';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';

@Module({
  imports: [TypeOrmModule.forFeature([Patient, MedicalRecord])],
  controllers: [PatientController],
  providers: [PatientService],
  exports: [],
})
export class PatientModule {}
