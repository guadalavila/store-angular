import { Component, inject, Input, signal } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterLinkWithHref,
} from '@angular/router';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  showMenu = signal(true);
  private cartService = inject(CartService);

  cart = this.cartService.cart;
  total = this.cartService.total;

  toggleShowMenu() {
    this.showMenu.update((prevState) => !prevState);
  }
}
