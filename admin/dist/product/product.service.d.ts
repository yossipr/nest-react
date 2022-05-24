import { Repository } from 'typeorm';
import { Product } from './product.entity';
export declare class ProductService {
    private readonly productRepository;
    delete(id: number): Promise<any>;
    update(id: number, data: any): Promise<any>;
    constructor(productRepository: Repository<Product>);
    all(): Promise<Product[]>;
    create(data: any): Promise<Product>;
    get(id: number): Promise<Product>;
}
