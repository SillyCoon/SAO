import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.scss']
})
export class DonorsComponent implements OnInit {


  donors = [
    {
      id: 1,
      firstName: 'Алексей',
      lastName: 'Иванов',
      patronymic: 'Анатольевич',
      residency: 0,
      citizenship: 0,
      weight: 0,
      role: 'admin'
    },
    {
      id: 2,
      firstName: 'Андрей',
      lastName: 'Иванов',
      patronymic: 'Анатольевич',
      residency: 1,
      citizenship: 0,
      weight: 0,
      role: 'donor'
    },
    {
      id: 3,
      firstName: 'Сергей',
      lastName: 'Иванов',
      patronymic: 'Анатольевич',
      residency: 0,
      citizenship: 1,
      weight: 0,
      role: 'donor'
    },
    {
      id: 4,
      firstName: 'Леонид',
      lastName: 'Иванов',
      patronymic: 'Анатольевич',
      residency: 0,
      citizenship: 0,
      weight: 1,
      role: 'donor'
    },
    {
      id: 5,
      firstName: 'Елизавета',
      lastName: 'Борденова',
      patronymic: 'Михайловна',
      residency: 1,
      citizenship: 1,
      weight: 0,
      role: 'donor'
    },
  ];

  displayedColumns = ['id', 'firstName', 'lastName', 'patronymic', 'residency', 'citizenship', 'weight', 'role', 'configs'];

  constructor() { }

  ngOnInit() {
  }

  addDisplayingColumns() {

  }

}
