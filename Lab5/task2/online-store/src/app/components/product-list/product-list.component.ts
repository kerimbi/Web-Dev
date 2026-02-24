import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductService } from '../../services/product.services';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Input() categoryName: string = '';

  constructor(private productService: ProductService) {}

  onLike(productId: number): void {
    this.productService.likeProduct(productId);
    // Обновляем локальный массив для немедленного отображения
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes += 1;
    }
  }

  onDelete(productId: number): void {
    this.productService.deleteProduct(productId);
    // Удаляем из локального массива
    this.products = this.products.filter(p => p.id !== productId);
  }
}
