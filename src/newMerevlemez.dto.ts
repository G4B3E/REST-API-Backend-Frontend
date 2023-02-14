import {
  IsString,
  Max,
  MaxLength,
  maxLength,
  Min,
  MinLength,
} from 'class-validator';

export default class newMerevlemezDto {
  @Min(1, { message: 'A szám nem lehetet kevesebb, mint 1!' })
  tarhely: number;

  @IsString({ message: 'A tartalomnak szövegnek kell lennie!' })
  @MinLength(1, { message: 'A szöveg nem lehetet kevesebb, mint 1 karakter!' })
  @MaxLength(10, { message: 'A szöveg nem lehetet nagyobb, mint 10 karakter!' })
  marka: string;

  @Min(1, { message: 'A szám nem lehetet kevesebb, mint 1!' })
  sebesseg: number;
}
