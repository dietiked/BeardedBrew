import { Component } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { RecipesCategoryService, RecipesCategory } from '../index';

@Component({
  moduleId: module.id,
  selector: 'recipes-new-category',
  templateUrl: 'recipes-new-category.component.html'
})

export class RecipesNewCategoryComponent {

  category = new RecipesCategory();

  constructor(
    private categoryService: RecipesCategoryService
  ) {

  }

  public onSubmit() {
    this.categoryService.addCategory(this.category.normalize());
    this.category = new RecipesCategory();
  }

}
