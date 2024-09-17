import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { MedicalRecord } from './medical-record.entity';

@Entity()
export class Doctor {
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
  phoneNumber: string;

  @Column()
  specialty: string;

  @Column()
  qualification: string;

  @Column()
  licenseNumber: string;

  @Column('text')
  bio: string;

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

  @OneToMany(() => MedicalRecord, (record) => record.doctor)
  medicalRecords: MedicalRecord[];
}
