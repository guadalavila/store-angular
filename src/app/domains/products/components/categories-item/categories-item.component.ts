import { Component, inject, signal } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { Category } from '@shared/models/category.models';
import { CategoriesService } from '@shared/services/categories.service';

@Component({
  selector: 'app-categories-item',
  standalone: true,
  imports: [RouterLinkActive, RouterLinkWithHref],
  templateUrl: './categories-item.component.html',
  styleUrl: './categories-item.component.css',
})
export class CategoriesItemComponent {
  private categoriesService = inject(CategoriesService);

  categories = signal<Category[]>([]);

  ngOnInit() {
    this.categoriesService.getAllCategories().then((response) => {
      const res = response.docs.map((doc) => doc.data());
      this.categories.set(res as Category[]);
    });
  }
}
