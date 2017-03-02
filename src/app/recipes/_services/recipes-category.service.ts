import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { RecipesCategory } from '../index';

@Injectable()
export class RecipesCategoryService {

  categoriesTable = '/recipes/categories';
  categories: FirebaseListObservable<any[]>;

  constructor(
    private af: AngularFire
  ) {
  }

  public getCategories(): FirebaseListObservable<any[]> {
    this.categories = this.af.database.list(this.categoriesTable);
    return this.categories;
  }

  public getCategoryWithKey(key: string) {

  }

  public updateCategoryWithKey(key: string, value: any) {

  }

  public removeCategoryWithKey(key: string) {
    this.categories.remove(key);
  }

  public addCategory(category: any) {
    this.categories.push(category);
  }

}
