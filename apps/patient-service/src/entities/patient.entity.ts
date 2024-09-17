import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { MedicalRecord } from './medical-record.entity';
import { Gender, PatientStatus } from '@ebv/libs';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  userId: string;

  @Column({ unique: true })
  email: string;

  @Column()
  lastName: string;

  @Column()
  firstName: string;

  @Column()
  phoneCode: string;

  @Column()
  phoneNumber: string;

  @Column()
  birthDate: string;

  @Column({ type: 'enum', enum: Gender })
  gender: Gender;

  @Column()
  address: string;

  @Column('text', { array: true, default: [] })
  profileImages: string[];

  @Column({ type: 'enum', enum: PatientStatus, default: PatientStatus.pending })
  status: PatientStatus;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  deletedAt?: Date;

  @OneToMany(() => MedicalRecord, (record) => record.patient)
  medicalRecords: MedicalRecord[];
}
