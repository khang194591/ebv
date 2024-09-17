import { IsNotEmpty, IsPositive } from 'class-validator';

export class GetListReqDto {
  @IsNotEmpty()
  @IsPositive()
  pageNumber = 1;

  @IsNotEmpty()
  @IsPositive()
  pageSize = 10;

  get skip() {
    return (this.pageNumber - 1) * this.pageSize;
  }

  get take() {
    return this.pageSize;
  }
}
