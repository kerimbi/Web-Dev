import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() searchChange = new EventEmitter<string>();
  @Output() minPriceChange = new EventEmitter<number>();
  @Output() maxPriceChange = new EventEmitter<number>();

  searchTerm: string = '';
  minPrice: number | null = null;
  maxPrice: number | null = null;

  onSearchInput() {
    console.log('Search term:', this.searchTerm); // Для отладки
    this.searchChange.emit(this.searchTerm);
  }

  onMinPriceChange() {
    console.log('Min price:', this.minPrice); // Для отладки
    this.minPriceChange.emit(this.minPrice || 0);
  }

  onMaxPriceChange() {
    console.log('Max price:', this.maxPrice); // Для отладки
    this.maxPriceChange.emit(this.maxPrice || 0);
  }
}
