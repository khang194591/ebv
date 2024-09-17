import {
  CreatePatientDto,
  GetPatientDetailResDto,
  GetPatientListReqDto,
  UpdatePatientDto,
} from '@ebv/libs';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from '../../entities';
import { Repository } from 'typeorm';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>
  ) {}

  async createPatient(patient: CreatePatientDto): Promise<string> {
    const createdPatient = this.patientRepository.create(patient);

    await this.patientRepository.insert(createdPatient);

    return createdPatient.id;
  }

  async getPatientById(id: string): Promise<GetPatientDetailResDto> {
    const patient = await this.patientRepository.findOne({
      where: { id },
      relations: { medicalRecords: true },
    });

    return patient;
  }

  async getPatientList(query: GetPatientListReqDto) {
    const { name, email, phoneNumber, skip, take } = query;

    // if (email) {
    //   where.email = email;
    // }

    // if (phoneNumber) {
    //   where.phoneNumber = phoneNumber;
    // }

    // if (name) {
    //   where.AND = [
    //     {
    //       OR: name
    //         .split(' ')
    //         .map((word) => [
    //           { lastName: { search: word }, firstName: { search: word } },
    //         ])
    //         .flat(),
    //     },
    //   ];
    // }

    const [items, total] = await this.patientRepository.findAndCount({
      take,
      skip,
      order: { createdAt: 'DESC' },
    });

    return { items, total };
  }

  async updatePatient(id: string, patient: UpdatePatientDto): Promise<string> {
    await this.patientRepository.update(id, patient);

    return id;
  }

  async deletePatient(id: string): Promise<string> {
    await this.patientRepository.delete(id);

    return id;
  }
}
