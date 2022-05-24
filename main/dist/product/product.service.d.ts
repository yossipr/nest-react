/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/schemaoptions" />
import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.model';
export declare class ProductService {
    private readonly productModel;
    delete(id: string): Promise<import("mongodb").DeleteResult>;
    update(data: any): Promise<import("mongoose").Document<unknown, any, ProductDocument> & Product & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    constructor(productModel: Model<ProductDocument>);
    all(): Promise<Product[]>;
    create(data: any): Promise<Product>;
    updateLikes(id: any): Promise<import("mongodb").UpdateResult>;
}
