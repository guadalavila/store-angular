import { computed, Injectable, signal } from '@angular/core';
import { Plant } from '@shared/models/plant.models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //estado inicial del servicio
  cart = signal<Plant[]>([]);
  //computed: una señal q se calcula a partir de otras señales
  total = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, item) => total + item.price, 0);
  });

  constructor() {}

  addToCart(product: Plant) {
    this.cart.update((prevCart) => [...prevCart, product]);
  }

  removeFromCart(product: Plant) {
    this.cart.update((prevCart) =>
      prevCart.filter((item) => item.id !== product.id)
    );
  }
}
