import { SquadItem } from '../model/squad-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-squads',
  templateUrl: './squads.component.html',
  styleUrls: ['./squads.component.scss']
})
export class SquadsComponent implements OnInit {

  squads: SquadItem[] = [
    {
      id: '1',
      name: 'Алебастр',
      icon: '#'
    },
    {
      id: '2',
      name: 'Ацтек',
      icon: '#'
    },
    {
      id: '3',
      name: 'Арго',
      icon: '#'
    },
    {
      id: '1',
      name: 'Алебастр',
      icon: '#'
    },
    {
      id: '2',
      name: 'Ацтек',
      icon: '#'
    },
    {
      id: '3',
      name: 'Арго',
      icon: '#'
    },
    {
      id: '1',
      name: 'Алебастр',
      icon: '#'
    },
    {
      id: '2',
      name: 'Ацтек',
      icon: '#'
    },
    {
      id: '3',
      name: 'Арго',
      icon: '#'
    },
    {
      id: '10',
      name: 'Меридиан',
      icon: '#'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
