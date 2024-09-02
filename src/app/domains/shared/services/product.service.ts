import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';
import { Product } from '@shared/models/product.models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private firestore = inject(Firestore);
  constructor() {}

  getProducts(id?: string) {
    const url = new URL('https://api.escuelajs.co/api/v1/products');
    if (id) {
      url.searchParams.set('categoryId', id);
    }
    return this.http.get<Product[]>(url.toString());
  }

  getAllProducts() {
    return getDocs(collection(this.firestore, 'plants'));
  }

  getOne(id: string) {
    return this.http.get<Product>(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
  }
}
