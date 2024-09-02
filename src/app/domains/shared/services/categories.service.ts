import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';
import { Category } from '@shared/models/category.models';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private http = inject(HttpClient);
  private firestore = inject(Firestore);

  constructor() {}

  getCategories() {
    return this.http.get<Category[]>(
      'https://api.escuelajs.co/api/v1/categories'
    );
  }

  getAllCategories() {
    return getDocs(collection(this.firestore, 'categories'));
  }
}
