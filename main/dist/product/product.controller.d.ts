import { HttpService } from '@nestjs/axios';
import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    private readonly httpService;
    constructor(productService: ProductService, httpService: HttpService);
    all(): Promise<import("./product.model").Product[]>;
    like(id: number): Promise<void>;
    create(product: any): Promise<void>;
    update(product: any): Promise<void>;
    delete(id: string): Promise<void>;
}
