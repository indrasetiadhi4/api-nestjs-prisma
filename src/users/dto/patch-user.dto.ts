import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  MaxLength,
  IsInt,
  Min,
  Max,
} from 'class-validator';

export class PatchUserDto {
  @IsString()
  @MinLength(2)
  @MaxLength(40)
  @IsOptional()
  name: string;

  @IsString()
  @MinLength(2)
  @MaxLength(40)
  @IsOptional()
  email: string;
}
