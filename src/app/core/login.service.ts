import { Injectable } from '@angular/core';
import { AppConstants } from '../appConstants';

@Injectable()
export class LoginService {

  private userName: string = "admin";
  private password: string = "admin";

  constructor() {}

  Login(userName: string, password: string): boolean {
    if (userName == this.userName && password == this.password) {
      localStorage.setItem(AppConstants.localStorageKey, AppConstants.localStoragePositiveValue);
      return true;
    }
    return false;
  }

  LogOut(): void {
    localStorage.setItem(AppConstants.localStorageKey, AppConstants.localStorageNegativeValue);
  }
}
