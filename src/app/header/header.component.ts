import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: any = null;

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.userLoggedIn$.subscribe((user: any) => {
      this.currentUser = user;
    });
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['login']);
  }

}
