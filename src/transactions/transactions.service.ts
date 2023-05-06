import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TransactionsService {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    const transactions = await this.prismaService.transaction.findMany();
    return transactions;
  }

  async findOne(id: number) {
    const transaction = await this.prismaService.transaction.findUnique({
      where: {
        id: id,
      },
    });

    if (!transaction) {
      throw new NotFoundException(`Transaction with id ${id} does not exist.`);
    }

    return transaction;
  }

  async create(input) {
    const user = await this.prismaService.user.findUnique({
      where: { id: input.userId },
    });

    if (!user) {
      throw new NotFoundException(
        `User with id ${input.userId} does not exist.`,
      );
    }

    const product = await this.prismaService.product.findUnique({
      where: { id: input.productId },
    });

    if (!product) {
      throw new NotFoundException(
        `Product with id ${input.productId} does not exist.`,
      );
    }

    const newTransaction = await this.prismaService.transaction.create({
      data: {
        userId: input.userId,
        productId: input.productId,
        isCompleted: input.isCompleted || false,
      },
    });

    return newTransaction;
  }

  async update(id: number, input) {
    const transaction = await this.prismaService.transaction.findUnique({
      where: { id: id },
    });

    if (!transaction) {
      throw new NotFoundException(`Transaction with id ${id} does not exist.`);
    }

    const updatedTransaction = await this.prismaService.transaction.update({
      where: { id: id },
      data: {
        isCompleted: input.isCompleted,
      },
    });

    return updatedTransaction;
  }

  async remove(id: number) {
    const transaction = await this.prismaService.transaction.findUnique({
      where: { id: id },
    });

    if (!transaction) {
      throw new NotFoundException(`Transaction with id ${id} does not exist.`);
    }

    await this.prismaService.transaction.delete({
      where: { id: id },
    });

    return {};
  }
}
