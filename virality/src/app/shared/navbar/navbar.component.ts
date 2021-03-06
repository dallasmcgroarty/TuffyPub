import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../users/auth.service";
import { Router } from '@angular/router'
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  isLoggedIn() {
    this.auth.isLoggedIn().pipe(
      tap(user => {
        if (user) {
          return true
        } else {
          return false
        }
      })
    ).subscribe()
  }

}
