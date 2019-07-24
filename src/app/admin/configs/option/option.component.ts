import { Component, OnInit, Input } from '@angular/core';
import { Option } from './models/option';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {

  @Input() isAddable = false;
  @Input() header: string;

  @Input() options: Option[];

  editingOption: string = null;

  constructor() { }

  edit(id: string) {
    this.editingOption = id;
    setTimeout(() => {
      this.editingOption = null;
    }, 1000);

  }

  ngOnInit() {
  }

}
