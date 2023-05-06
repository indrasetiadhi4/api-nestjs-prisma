import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    const users = await this.prismaService.user.findMany();
    return users;
  }

  async findOne(id: number) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new NotFoundException(`User with id ${id} does not exist.`);
    }

    return user;
  }

  async create(input) {
    const newUser = await this.prismaService.user.create({
      data: {
        name: input.name,
        email: input.email,
      },
    });

    return newUser;
  }

  async update(id: number, input) {
    const user = await this.prismaService.user.findUnique({
      where: { id: id },
    });

    if (!user) {
      throw new NotFoundException(`User with id ${id} does not exist.`);
    }

    const updatedUser = await this.prismaService.user.update({
      where: { id: id },
      data: {
        name: input.name,
        email: input.email || null,
      },
    });

    return updatedUser;
  }

  async patch(id: number, input) {
    const user = await this.prismaService.user.findUnique({
      where: { id: id },
    });

    if (!user) {
      throw new NotFoundException(`User with id ${id} does not exist.`);
    }

    const updatedUser = await this.prismaService.user.update({
      where: { id: id },
      data: {
        name: input.name,
        email: input.email,
      },
    });

    return updatedUser;
  }

  async remove(id: number) {
    const user = await this.prismaService.user.findUnique({
      where: { id: id },
    });

    if (!user) {
      throw new NotFoundException(`User with id ${id} does not exist.`);
    }

    await this.prismaService.user.delete({
      where: { id: id },
    });

    return {};
  }
}
