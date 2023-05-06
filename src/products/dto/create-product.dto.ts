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

export class CreateProductDto {
  @IsString()
  @MinLength(2)
  @MaxLength(40)
  @IsNotEmpty()
  name: string;

  @IsString()
  @MinLength(2)
  @MaxLength(40)
  @IsOptional()
  category: string;

  @IsInt()
  @Min(0)
  @Max(99999)
  stock: number;

  @IsInt()
  @Min(0)
  @Max(999999999)
  price: number;
}
