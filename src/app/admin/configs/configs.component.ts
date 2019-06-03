import { Option } from './option/option';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configs',
  templateUrl: './configs.component.html',
  styleUrls: ['./configs.component.scss']
})
export class ConfigsComponent implements OnInit {

  documentTitle: 'Документы';
  documentSubtitle: 'Здесь Вы можете добавить или изменить необходимые документы';

  documentOptions: Option[] = [
    {id: '1', text: 'Паспорт'},
    {id: '2', text: 'ИНН'},
    {id: '3', text: 'СНИЛС'},
    {id: '4', text: 'Справка'}
  ];

  weightTitle: 'Документы';
  weightSubtitle: 'Здесь Вы можете добавить или изменить необходимые документы';

  weightOptions: Option[] = [
    {id: '1', text: 'Паспорт'},
    {id: '2', text: 'ИНН'},
    {id: '3', text: 'СНИЛС'},
    {id: '4', text: 'Справка'}
  ];

  citizenshipTitle: 'Документы';
  citizenshipSubtitle: 'Здесь Вы можете добавить или изменить необходимые документы';

  citizenshipOptions: Option[] = [
    {id: '1', text: 'Паспорт'},
    {id: '2', text: 'ИНН'},
    {id: '3', text: 'СНИЛС'},
    {id: '4', text: 'Справка'}
  ];

  residencyTitle: 'Документы';
  residencySubtitle: 'Здесь Вы можете добавить или изменить необходимые документы';

  residencyOptions: Option[] = [
    {id: '1', text: 'Паспорт'},
    {id: '2', text: 'ИНН'},
    {id: '3', text: 'СНИЛС'},
    {id: '4', text: 'Справка'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
