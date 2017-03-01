import { Component, OnInit } from '@angular/core';

import { BeardedBrewNavigationService } from '../index';

@Component({
  moduleId: module.id,
  templateUrl: './bearded-brew-home.component.html'
})

export class BeardedBrewHomeComponent {


  constructor (
    private navigationService: BeardedBrewNavigationService
  ) {
  }

  goToDeliveries() {
    this.navigationService.goToDeliveries();
  }
}
