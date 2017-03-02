// Angular core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// Plattform modules and services
import { AuthenticationModule } from '../authentication/import';
import { NavigationService } from '../_services/index';
// Plattform directives
import { DirectivesModule } from '../_directives/directives.module';

// Apps modules and services
import { RecipesNavigationService } from './index';
// App pages
import {
  RecipesCategoryService,
  RecipesHomeComponent,
  RecipesCategoriesComponent,
  RecipesNewCategoryComponent
} from './index';

// Definition
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthenticationModule,
    DirectivesModule,
    //BeardedBrewRouting
  ],
  declarations: [
    RecipesHomeComponent,
    RecipesCategoriesComponent,
    RecipesNewCategoryComponent
  ],
  providers: [
    NavigationService,
    RecipesNavigationService,
    RecipesCategoryService,
  ]
})
export class RecipesModule { }
