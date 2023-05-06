import { Injectable, NotFoundException } from '@nestjs/common';
//import { Cat } from './interfaces/cat.interface';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    const products = await this.prismaService.product.findMany();
    return products;
  }

  async findOne(id: number) {
    const product = await this.prismaService.product.findUnique({
      where: {
        id: id,
      },
    });

    if (!product) {
      throw new NotFoundException(`Product with id ${id} does not exist.`);
    }

    return product;
  }

  async create(input) {
    const newProduct = await this.prismaService.product.create({
      data: {
        name: input.name,
        category: input.category,
        stock: input.stock,
        price: input.price,
      },
    });

    return newProduct;
  }

  async update(id: number, input) {
    const product = await this.prismaService.product.findUnique({
      where: { id: id },
    });

    if (!product) {
      throw new NotFoundException(`Product with id ${id} does not exist.`);
    }

    const updatedProduct = await this.prismaService.product.update({
      where: { id: id },
      data: {
        name: input.name,
        category: input.category || null,
        stock: input.stock,
        price: input.price,
      },
    });

    return updatedProduct;
  }

  async patch(id: number, input) {
    const product = await this.prismaService.product.findUnique({
      where: { id: id },
    });

    if (!product) {
      throw new NotFoundException(`Product with id ${id} does not exist.`);
    }

    const updatedProduct = await this.prismaService.product.update({
      where: { id: id },
      data: {
        name: input.name,
        category: input.category,
        stock: input.stock,
        price: input.price,
      },
    });

    return updatedProduct;
  }

  async remove(id: number) {
    const product = await this.prismaService.product.findUnique({
      where: { id: id },
    });

    if (!product) {
      throw new NotFoundException(`Product with id ${id} does not exist.`);
    }

    await this.prismaService.product.delete({
      where: { id: id },
    });

    return {};
  }
}
