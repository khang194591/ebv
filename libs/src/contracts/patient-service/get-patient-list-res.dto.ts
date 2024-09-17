import { Exclude, Expose, Type } from 'class-transformer';
import { IGetListRes } from '../common';

@Exclude()
class GetPatientItemDto {
  @Expose() id!: string;
  @Expose() userId!: string;
  @Expose() email!: string;
  @Expose() lastName!: string;
  @Expose() firstName!: string;
  @Expose() phoneNumber!: string;
}

@Exclude()
export class GetPatientListResDto implements IGetListRes<GetPatientItemDto> {
  @Expose()
  total!: number;

  @Expose()
  @Type(() => GetPatientItemDto)
  items!: GetPatientItemDto[];
}
