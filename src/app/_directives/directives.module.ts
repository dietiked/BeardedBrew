// Angular core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoaderComponent } from './index';

// Definition
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    LoaderComponent
  ],
  providers: [
  ],
  exports: [
    LoaderComponent
  ]
})
export class DirectivesModule { }
