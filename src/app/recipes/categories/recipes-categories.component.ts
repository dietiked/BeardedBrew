import { Component } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { RecipesCategoryService } from '../index';

@Component({
  moduleId: module.id,
  selector: 'recipes-categories',
  templateUrl: 'recipes-categories.component.html'
})

export class RecipesCategoriesComponent {

  categories: FirebaseListObservable<any[]>;
  isNewCategoryVisible = false;
  isLoadingCategory = true;

  constructor(
    private categoryService: RecipesCategoryService
  ) {
    this.categories = categoryService.getCategories()
    this.categories.subscribe(x => {
      this.isLoadingCategory = false;
    });
  }

  public toggleNewCategory() {
    this.isNewCategoryVisible = true;
  }

  public removeCategory(category) {
    if (category.recipes == null) {
      this.categoryService.removeCategoryWithKey(category.$key);
    } else {
      console.log('Category has recipes');
    }
  }

}
