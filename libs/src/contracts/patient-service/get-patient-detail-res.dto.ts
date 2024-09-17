import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
export class PatientMedicalRecordDto {
  @Expose()
  id!: string;

  @Expose()
  patientId!: string;

  @Expose()
  doctorId!: string;

  @Expose()
  date!: Date;

  @Expose()
  diagnosis!: string;

  @Expose()
  treatment!: string;

  @Expose()
  medicine!: string;

  @Expose()
  note?: string;
}

@Exclude()
export class GetPatientDetailResDto {
  @Expose()
  id!: string;

  @Expose()
  userId!: string;

  @Expose()
  email!: string;

  @Expose()
  lastName!: string;

  @Expose()
  firstName!: string;

  @Expose()
  phoneNumber!: string;

  @Expose()
  @Type(() => PatientMedicalRecordDto)
  medicalRecords!: PatientMedicalRecordDto[];
}
