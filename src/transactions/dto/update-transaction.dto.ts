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

export class UpdateTransactionDto {
  @IsBoolean()
  @IsOptional()
  isCompleted: boolean;
}
