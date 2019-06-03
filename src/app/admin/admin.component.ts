import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  navLinks = [
    {
      name: 'Доноры', path: 'donors'
    },
    {
      name: 'Время', path: 'times'
    },
    {
      name: 'Записи', path: 'records'
    },
    {
      name: 'История', path: 'history'
    },
    {
      name: 'Настройки', path: 'configs'
    }

  ];


  constructor() { }

  ngOnInit() {
  }

}
