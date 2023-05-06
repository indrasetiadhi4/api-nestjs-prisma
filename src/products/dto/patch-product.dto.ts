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

export class PatchProductDto {
  @IsString()
  @MinLength(2)
  @MaxLength(40)
  @IsOptional()
  name: string;

  @IsString()
  @MinLength(2)
  @MaxLength(40)
  @IsOptional()
  category: string;

  @IsInt()
  @Min(0)
  @Max(99999)
  @IsOptional()
  stock: number;

  @IsInt()
  @Min(0)
  @Max(999999999)
  @IsOptional()
  price: number;
}
