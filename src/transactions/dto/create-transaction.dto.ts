import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  MaxLength,
  IsInt,
  IsBoolean,
  Min,
  Max,
} from 'class-validator';

export class CreateTransactionDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsInt()
  @IsNotEmpty()
  productId: number;

  @IsBoolean()
  @IsOptional()
  isCompleted: boolean;
}
