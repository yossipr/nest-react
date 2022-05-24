/*
https://docs.nestjs.com/controllers#controllers
*/

import { HttpService } from '@nestjs/axios';
import { Controller, Get, Param, Post } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly httpService: HttpService,
  ) {}

  @Get()
  async all() {
    return this.productService.all();
  }

  @Post(':id/like')
  async like(@Param('id') id: number) {
    await this.productService.updateLikes(id);
    await this.httpService
      .post(`http://localhost:3000/api/products/${id}/like`, {})
      .subscribe((res) => {
        console.log(res);
      });
  }

  @EventPattern('product_created')
  async create(product: any) {
    await this.productService.create({
      id: product.id,
      title: product.title,
      image: product.image,
      likes: product.likes,
    });
  }

  @EventPattern('product_updated')
  async update(product: any) {
    await this.productService.update({
      id: product.id,
      title: product.title,
      image: product.image,
      likes: product.likes,
    });
  }

  @EventPattern('product_deleted')
  async delete(id: string) {
    await this.productService.delete(id);
  }
}
