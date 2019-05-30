import { Component, OnInit, Input } from '@angular/core';
import { DonationTime } from 'src/app/shared/models/donation-time';

@Component({
  selector: 'app-time-load',
  templateUrl: './time-load.component.html',
  styleUrls: ['./time-load.component.scss']
})
export class TimeLoadComponent implements OnInit {

  @Input() time: DonationTime;

  constructor() { }

  ngOnInit() {
  }

}
