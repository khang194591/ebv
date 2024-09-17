import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Doctor } from './doctor.entity';
import { Patient } from './patient.entity';

@Entity()
export class MedicalRecord {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  patientId: string;

  @Column()
  doctorId: string;

  @Column('timestamp')
  date: Date;

  @Column()
  diagnosis: string;

  @Column()
  treatment: string;

  @Column()
  medicine: string;

  @Column({ type: 'text', nullable: true })
  note?: string;

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

  @ManyToOne(() => Patient, (patient) => patient.medicalRecords)
  patient: Patient;

  @ManyToOne(() => Doctor, (doctor) => doctor.medicalRecords)
  doctor: Doctor;
}
