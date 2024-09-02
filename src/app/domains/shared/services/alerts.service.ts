import { Injectable, signal, Signal } from '@angular/core';
import { AlertType } from '@shared/models/alert.type';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  showAlert = signal<boolean>(false);
  alertMessage = signal('');
  type = signal<AlertType>(AlertType.Info);

  constructor() {}

  showSuccess(message: string) {
    this.showAlert.set(true);
    this.alertMessage.set(message);
    this.type.set(AlertType.Success);
  }

  showError(message: string) {
    this.showAlert.set(true);
    this.alertMessage.set(message);
    this.type.set(AlertType.Error);
  }

  hideAlert() {
    this.showAlert.set(false);
    this.alertMessage.set('');
  }
}
