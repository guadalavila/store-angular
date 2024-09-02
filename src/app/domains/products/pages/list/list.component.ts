import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { Product } from '@shared/models/product.models';
import { ProductComponent } from '@products/components/product/product.component';
import { CategoriesService } from '@shared/services/categories.service';
import { Category } from '@shared/models/category.models';
import { RouterLinkWithHref } from '@angular/router';
import { CategoriesItemComponent } from '@products/components/categories-item/categories-item.component';
import { Plant } from '@shared/models/plant.models';
import { LoadingComponent } from '@shared/components/loading/loading.component';
import { AlertsService } from '@shared/services/alerts.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ProductComponent,
    JsonPipe,
    RouterLinkWithHref,
    CategoriesItemComponent,
    LoadingComponent,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  productList = signal<Product[]>([]);
  plants = signal<Plant[]>([]);

  categoriesList = signal<Category[]>([]);
  load = signal(false);
  @Input() category_id?: string;

  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private alertService = inject(AlertsService);

  constructor() {}

  ngOnInit() {
    this.getProducts();
  }

  onHandleAdd(product: Plant) {
    this.cartService.addToCart(product);
    this.alertService.showSuccess('Producto agregado al carrito!');
    setTimeout(() => {
      this.alertService.hideAlert();
    }, 2000);
  }

  private getProducts() {
    this.load.set(true);
    this.productService.getAllProducts().then((response) => {
      const res = response.docs.map((doc) => doc.data());
      this.plants.set(res as Plant[]);
      this.load.set(false);
    });
  }
}
