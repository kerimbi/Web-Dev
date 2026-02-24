import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  @Input() categories: Category[] = [];
  @Input() selectedCategoryId: number | null = null;
  @Output() categorySelected = new EventEmitter<number>();

  selectCategory(categoryId: number): void {
    // If "All Products" is clicked (categoryId 0), emit null to clear selection
    if (categoryId === 0) {
      this.categorySelected.emit(0);
    } else {
      this.categorySelected.emit(categoryId);
    }
  }
}
