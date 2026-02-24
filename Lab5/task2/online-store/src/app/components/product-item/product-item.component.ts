import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { ImageGalleryComponent } from '../image-gallery/image-gallery.component';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, StarRatingComponent, ImageGalleryComponent],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() like = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  onLike(): void {
    this.like.emit(this.product.id);
  }

  onDelete(): void {
    if (confirm('Вы уверены, что хотите удалить этот товар?')) {
      this.delete.emit(this.product.id);
    }
  }

  shareOnWhatsApp(): void {
    const text = `Посмотрите этот товар: ${this.product.name}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text + ' ' + this.product.link)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram(): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }
}
