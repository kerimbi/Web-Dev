import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoriteIds: Set<number> = new Set<number>();
  private favoritesCountSubject = new BehaviorSubject<number>(0);

  favoritesCount$ = this.favoritesCountSubject.asObservable();

  constructor() {
    // Загружаем из localStorage при инициализации
    const saved = localStorage.getItem('favorites');
    if (saved) {
      this.favoriteIds = new Set(JSON.parse(saved));
      this.updateCount();
    }
  }

  addFavorite(id: number): void {
    this.favoriteIds.add(id);
    this.saveToStorage();
    this.updateCount();
  }

  removeFavorite(id: number): void {
    this.favoriteIds.delete(id);
    this.saveToStorage();
    this.updateCount();
  }

  isFavorite(id: number): boolean {
    return this.favoriteIds.has(id);
  }

  getFavoriteCount(): number {
    return this.favoriteIds.size;
  }

  private updateCount(): void {
    this.favoritesCountSubject.next(this.getFavoriteCount());
  }

  private saveToStorage(): void {
    localStorage.setItem('favorites', JSON.stringify([...this.favoriteIds]));
  }
}
