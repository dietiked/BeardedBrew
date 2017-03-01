import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NavigationService } from '../../_services/index';

@Injectable()
export class RecipesNavigationService extends NavigationService {

  constructor(
    protected router: Router,
    private navigationService: NavigationService,
  ) {
    super(router);
  }

  public goToHome() {
    this.router.navigate(['/recipes']);
  }

}
