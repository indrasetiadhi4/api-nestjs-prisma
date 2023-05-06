import { Module } from '@nestjs/common';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from '../users/users.module';
import { ProductsModule } from '../products/products.module';

@Module({
  imports: [PrismaModule, UsersModule, ProductsModule],
  controllers: [TransactionsController],
  providers: [TransactionsService],
  exports: [],
})
export class TransactionsModule {}
