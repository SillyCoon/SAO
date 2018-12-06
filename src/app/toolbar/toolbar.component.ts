import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  elements = [
    {'name': 'О нас', 'link': '/about'},
    {'name': 'Отряды', 'link': '/squads'},
    {'name': 'Фотографии', 'link': '/gallery'},
    {'name': 'Отчеты', 'link': '/reports'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
