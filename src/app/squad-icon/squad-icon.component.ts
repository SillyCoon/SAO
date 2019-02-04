import { SquadItem } from '../models/squad-item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-squad-icon',
  templateUrl: './squad-icon.component.html',
  styleUrls: ['./squad-icon.component.scss']
})
export class SquadIconComponent implements OnInit {

  @Input() squad: SquadItem;

  constructor() { }

  ngOnInit() {
  }

}
