import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class NavigationService {

  private APP_BEARDED_BREW = {
    app: 'Bearded Brew',
    url: '/beardedBrew'
  }

  constructor(
    protected router: Router
  ) {

  }

  // Application start
  public startBeardedBrew() {
    this.router.navigate(['/beardedBrew']);
  }
  public startRecipes() {
    this.router.navigate(['/recipes']);
  }
  public goTo(url: string) {
    this.router.navigate([url]);
  }

  // Plattform navigation
  public goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  public goToLogin() {
    this.router.navigate(['/login']);
  }
}
