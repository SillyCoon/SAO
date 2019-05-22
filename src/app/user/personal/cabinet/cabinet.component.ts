import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent implements OnInit {

  navLinks = [
    {
      name: 'Информация', path: 'info'
    },
    {
      name: 'Записаться', path: 'record'
    },
    {
      name: 'Личные данные', path: 'private-info'
    },
    {
      name: 'История кроводач', path: 'donations-history'
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
