import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-toolbar',
  templateUrl: './user-toolbar.component.html',
  styleUrls: ['./user-toolbar.component.scss']
})
export class UserToolbarComponent implements OnInit {

  isAuthorized: false;

  elements = [
    {'name': 'Личный кабинет', 'link': 'personal/login'},
    {'name': 'О донорстве', 'link': 'about-donation'},
    {'name': 'Об акции', 'link': 'about-event'},
    {'name': 'Рекомендации', 'link': 'recommendations'},
    {'name': 'Противопоказания', 'link': 'contraindications'},
    {'name': 'О нас', 'link': 'about-us'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
