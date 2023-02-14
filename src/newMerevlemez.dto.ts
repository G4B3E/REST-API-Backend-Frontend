import {
  IsString,
  Max,
  MaxLength,
  maxLength,
  Min,
  MinLength,
} from 'class-validator';

export default class newMerevlemezDto {
  @Min(1)
  tarhely: number;

  @IsString()
  @MinLength(1)
  @MaxLength(10)
  marka: string;

  @Min(1)
  sebesseg: number;
}
