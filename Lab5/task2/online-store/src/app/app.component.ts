import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProductService } from './services/product.services';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CategoryListComponent,
    ProductListComponent,
    SearchBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'online-store';
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  selectedCategoryName: string = '';
  filteredProducts: Product[] = [];
  allProducts: Product[] = [];

  searchTerm: string = '';
  minPrice: number = 0;
  maxPrice: number = Infinity;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.categories = this.productService.getCategories();
    this.allProducts = this.productService.getAllProducts();
    // Show all products initially
    this.filteredProducts = [...this.allProducts];
  }

  onCategorySelected(categoryId: number) {
    if (categoryId === 0) {
      // Show all products
      this.selectedCategoryId = null;
      this.selectedCategoryName = 'All Products';
      this.applyFilters(this.allProducts);
    } else {
      this.selectedCategoryId = categoryId;
      const category = this.categories.find(c => c.id === categoryId);
      this.selectedCategoryName = category ? category.name : '';

      const categoryProducts = this.productService.getProductsByCategory(categoryId);
      this.applyFilters(categoryProducts);
    }
  }

  onSearchChange(term: string) {
    console.log('Search changed in AppComponent:', term); // Для отладки
    this.searchTerm = term.toLowerCase();

    if (this.selectedCategoryId) {
      const categoryProducts = this.productService.getProductsByCategory(this.selectedCategoryId);
      this.applyFilters(categoryProducts);
    } else {
      this.applyFilters(this.allProducts);
    }
  }

  onMinPriceChange(min: number) {
    console.log('Min price changed in AppComponent:', min); // Для отладки
    this.minPrice = min || 0;

    if (this.selectedCategoryId) {
      const categoryProducts = this.productService.getProductsByCategory(this.selectedCategoryId);
      this.applyFilters(categoryProducts);
    } else {
      this.applyFilters(this.allProducts);
    }
  }

  onMaxPriceChange(max: number) {
    console.log('Max price changed in AppComponent:', max); // Для отладки
    this.maxPrice = max || Infinity;

    if (this.selectedCategoryId) {
      const categoryProducts = this.productService.getProductsByCategory(this.selectedCategoryId);
      this.applyFilters(categoryProducts);
    } else {
      this.applyFilters(this.allProducts);
    }
  }

  applyFilters(products: Product[]) {
    console.log('Applying filters. Search term:', this.searchTerm); // Для отладки
    console.log('Price range:', this.minPrice, '-', this.maxPrice); // Для отладки

    this.filteredProducts = products.filter(product => {
      const searchLower = this.searchTerm.toLowerCase();
      const nameLower = product.name.toLowerCase();
      const descLower = product.description.toLowerCase();

      const matchesSearch = this.searchTerm === '' ||
        nameLower.includes(searchLower) ||
        descLower.includes(searchLower);

      const matchesPrice =
        product.price >= this.minPrice &&
        product.price <= this.maxPrice;


      if (this.searchTerm && !matchesSearch) {
        console.log('Product not matching search:', product.name);
      }

      return matchesSearch && matchesPrice;
    });

    console.log('Filtered products count:', this.filteredProducts.length); // Для отладки
  }

  clearSelection() {
    this.selectedCategoryId = null;
    this.selectedCategoryName = 'All Products';
    this.filteredProducts = [...this.allProducts];
  }
}
