import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input({ required: true }) text: string = '';
  @Input() type: 'primary' | 'link' | 'outline' = 'primary';
  @Input() link = '/';
  @Output() onPress = new EventEmitter<void>();

  onPressBtn() {
    this.onPress.emit();
  }
}
