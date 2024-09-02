import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { AlertsService } from '@shared/services/alerts.service';
import { AlertComponent } from '../alert/alert.component';
import { AlertType } from '@shared/models/alert.type';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent, AlertComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  private alertService = inject(AlertsService);

  isShow = this.alertService.showAlert;
  type = this.alertService.type;
  message = this.alertService.alertMessage;
}
