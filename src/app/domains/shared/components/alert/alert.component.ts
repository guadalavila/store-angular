import { Component, Input } from '@angular/core';
import { AlertType } from '@shared/models/alert.type';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent {
  @Input({ required: true }) message!: string;
  @Input() type: AlertType = AlertType.Info;
}
