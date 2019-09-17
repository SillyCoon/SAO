import { Router } from '@angular/router';
import { AuthenticationService } from './../personal/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-toolbar',
  templateUrl: './user-toolbar.component.html',
  styleUrls: ['./user-toolbar.component.scss']
})
export class UserToolbarComponent implements OnInit {

  isAuthorized = true;

  elements = [
    {'name': 'Личный кабинет', 'link': 'personal/cabinet'},
    {'name': 'Что такое донорство?', 'link': 'about-donation'},
    {'name': 'Как стать донором?', 'link': 'about-event'},
    {'name': 'Рекомендации', 'link': 'recommendations'},
    {'name': 'Противопоказания', 'link': 'contraindications'},
    {'name': 'О нас', 'link': 'about-us'},
  ];

  constructor(public authService: AuthenticationService, private router: Router) { }

  onExit() {
    this.authService.logout();
    this.router.navigateByUrl('/user/personal/login');
    this.isAuthorized = !this.isAuthorized;
  }

  ngOnInit() {
    this.isAuthorized = this.authService.isLoggedIn();
  }

}
