import { IsEmail, IsOptional, IsString } from 'class-validator';
import { GetListReqDto } from '../common';

export class GetPatientListReqDto extends GetListReqDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;
}
