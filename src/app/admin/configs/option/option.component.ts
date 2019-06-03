import { Component, OnInit, Input } from '@angular/core';
import { Option } from './option';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {

  @Input() isAddable = false;
  @Input() title: string;
  @Input() subtitle: string;

  @Input() options: Option[];

  constructor() { }

  ngOnInit() {
  }

}
