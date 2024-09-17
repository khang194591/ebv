import { IsEmail, IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Gender } from '../enums';

export class CreatePatientDto {
  @IsUUID()
  userId = 'b7b9b0a0-f2a5-4c3f-b8c5-e9f0f3c2b3b2';

  @IsEmail()
  email = 'khang194591@gmail.com';

  @IsNotEmpty()
  @IsString()
  lastName = 'Trịnh Đức';

  @IsNotEmpty()
  @IsString()
  firstName = 'Khang';

  @IsNotEmpty()
  @IsString()
  phoneCode = '+84';

  @IsNotEmpty()
  @IsString()
  phoneNumber = '0862612659';

  @IsNotEmpty()
  @IsString()
  birthDate = '2001-11-03';

  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender = Gender.male;

  @IsNotEmpty()
  @IsString()
  address = 'Hoàng Văn Khánh, Hà Nội';
}
