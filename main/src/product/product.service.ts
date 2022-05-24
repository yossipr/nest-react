/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.model';

@Injectable()
export class ProductService {
  async delete(id: string) {
    return this.productModel.deleteOne({ id });
  }
  async update(data) {
    return this.productModel.findOneAndUpdate(data.id, data);
  }

  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async all(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async create(data): Promise<Product> {
    return new this.productModel(data).save();
  }

  async updateLikes(id) {
    const product: Product = await this.productModel.findOne({ id });
    return this.productModel.updateOne(
      { id },
      {
        likes: product.likes + 1,
      },
    );
  }
}
