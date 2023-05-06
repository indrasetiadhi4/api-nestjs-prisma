import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Body,
  Param,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { PatchProductDto } from './dto/patch-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  // constructor() {
  //   if (!global.products) {
  //     this.initProductsData();
  //   }
  // }

  // initProductsData() {
  //   global.products = [
  //     {
  //       id: 1,
  //       name: 'TV',
  //       category: 'electronic',
  //       stock: 100,
  //       price: 249000,
  //       createdAt: new Date(),
  //       updatedAt: new Date(),
  //     },
  //   ];
  // }

  @Get()
  async findAll(): Promise<Object> {
    return this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() createProductDto: CreateProductDto,
  ) {
    return this.productsService.update(id, createProductDto);
  }

  @Patch(':id')
  async patch(
    @Param('id', ParseIntPipe) id: number,
    @Body() patchProductDto: PatchProductDto,
  ) {
    return this.productsService.patch(id, patchProductDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.remove(id);
  }
}
