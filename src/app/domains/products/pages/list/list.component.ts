import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { Product } from '@shared/models/product.models';
import { ProductComponent } from '@products/components/product/product.component';
import { CategoriesService } from '@shared/services/categories.service';
import { Category } from '@shared/models/category.models';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, JsonPipe, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  productList = signal<Product[]>([]);
  categoriesList = signal<Category[]>([]);
  load = signal(false);
  // cart = signal<Product[]>([]);
  // total = signal(0);
  @Input() category_id?: string;

  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoriesService = inject(CategoriesService);

  constructor() {
    // const list = [
    //   {
    //     id: 1,
    //     image: 'https://picsum.photos/200/200?r=1',
    //     title: 'Ficus Benjamina',
    //     price: 100,
    //     description:
    //       'Una planta popular por su belleza y facilidad de cuidado.',
    //   },
    //   {
    //     id: 2,
    //     image: 'https://picsum.photos/200/200?r=2',
    //     title: 'Monstera Deliciosa',
    //     price: 200,
    //     description:
    //       'Conocida por sus hojas grandes y perforadas, ideal para interiores.',
    //   },
    //   {
    //     id: 3,
    //     image: 'https://picsum.photos/200/200?r=3',
    //     title: 'Aloe Vera',
    //     price: 150,
    //     description:
    //       'Famosa por sus propiedades medicinales y fácil mantenimiento.',
    //   },
    //   {
    //     id: 4,
    //     image: 'https://picsum.photos/200/200?r=4',
    //     title: 'Pothos Aurea',
    //     price: 120,
    //     description:
    //       'Una planta trepadora, perfecta para purificar el aire en interiores.',
    //   },
    // ];
    // this.productList.set(list);
  }

  ngOnInit() {
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges) {
    // const id = changes['category_id'];
    // if (id) {
    this.getProducts();
    // }
  }

  onHandleAdd(product: Product) {
    // this.cart.update((prevCart) => [...prevCart, product]);
    // this.total.update((prevTotal) => prevTotal + product.price);
    this.cartService.addToCart(product);
  }

  private getProducts() {
    this.load.set(true);
    this.productService.getProducts(this.category_id).subscribe({
      next: (products) => {
        this.productList.set(products);
        this.load.set(false);
      },
      error: (error) => {},
    });
  }

  private getCategories() {
    this.categoriesService.getCategories().subscribe({
      next: (categories) => {
        this.categoriesList.set(categories);
      },
      error: (error) => {},
    });
  }
}
