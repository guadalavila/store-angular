import { CurrencyPipe } from '@angular/common';
import { Component, inject, Input, signal } from '@angular/core';
import { Product } from '@shared/models/product.models';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  product = signal<Product | undefined>(undefined);
  image = signal<string>('');
  image2 = '';
  @Input() id?: string;

  ngOnInit() {
    if (this.id) {
      this.productService.getOne(this.id).subscribe({
        next: (product) => {
          this.product.set(product);
          if (product.images.length > 0) {
            this.image.set(product.images[0]);
            this.image2 = product.images[0];
          }
        },
        error: (error) => {
          console.error(error);
        },
      });
    }
  }

  changeImage(image: string) {
    this.image2 = image;
    this.image.set(image);
  }

  addToCart() {
    // const product = this.product();
    // if (product) {
    //   this.cartService.addToCart(product);
    // }
  }
}
