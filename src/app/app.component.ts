import { Component, inject } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'store-app';
  firestore = inject(Firestore);

  ngOnInit() {
    getDocs(collection(this.firestore, 'categories')).then((response) => {
      console.log(response.docs.map((doc) => doc.data()));
    });
  }
}
