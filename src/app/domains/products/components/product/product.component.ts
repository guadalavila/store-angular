import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Plant } from '@shared/models/plant.models';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    ReversePipe,
    TimeAgoPipe,
    RouterLinkWithHref,
    ButtonComponent,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input({ required: true }) product!: Plant;

  @Output() add = new EventEmitter<Plant>();

  addProduct() {
    this.add.emit(this.product);
  }
}
