import { IsEnum } from 'class-validator';
import { PatientStatus } from '../enums';

export class UpdatePatientStatusDto {
  @IsEnum(PatientStatus)
  status: PatientStatus = PatientStatus.pending;
}
