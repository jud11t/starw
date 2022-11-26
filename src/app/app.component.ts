import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from './appConstants';
import { LoginService } from './core/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'starw';



  /**
   *
   */
  constructor(private router: Router) {
    let isLoggedInValue = localStorage.getItem(AppConstants.localStorageKey);

    if (!isLoggedInValue || isLoggedInValue == AppConstants.localStorageNegativeValue) {
      this.router.navigate(['login']);
    }
    else {
      this.router.navigate(['overview']);
    }
  }
}
