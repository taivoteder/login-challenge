import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userLoggedIn$: EventEmitter<any>;

  loggedInUser: any = null;

  constructor() {
    this.userLoggedIn$ = new EventEmitter();
  }

  public getLoggedInUser() {
    return this.loggedInUser;
  }

  public login(username: string): void {
    this.loggedInUser = {
      name: username
    };
    this.userLoggedIn$.emit(this.loggedInUser);
  }

  public logout() {
    this.loggedInUser = null;
    this.userLoggedIn$.emit(this.loggedInUser);
  }

}
