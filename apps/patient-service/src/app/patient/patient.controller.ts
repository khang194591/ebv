import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PatientService } from './patient.service';
import {
  CreatePatientDto,
  GetPatientDetailResDto,
  GetPatientListReqDto,
  GetPatientListResDto,
  UpdatePatientDto,
} from '@ebv/libs';
import { ApiTags } from '@nestjs/swagger';

@Controller('patient')
@ApiTags('Patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  async createPatient(@Body() patient: CreatePatientDto): Promise<string> {
    return this.patientService.createPatient(patient);
  }

  @Get()
  async getPatientList(
    @Query() query: GetPatientListReqDto
  ): Promise<GetPatientListResDto> {
    return this.patientService.getPatientList(query);
  }

  @Get(':id')
  async getPatientById(
    @Param('id') id: string
  ): Promise<GetPatientDetailResDto> {
    return this.patientService.getPatientById(id);
  }

  @Put(':id')
  async updatePatient(
    @Param('id') id: string,
    @Body() patient: UpdatePatientDto
  ): Promise<string> {
    return this.patientService.updatePatient(id, patient);
  }

  @Delete(':id')
  async deletePatient(@Param('id') id: string): Promise<string> {
    return this.patientService.deletePatient(id);
  }
}
