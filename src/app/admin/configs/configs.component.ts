import { Header } from './option/models/header';
import { Option } from './option/models/option';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configs',
  templateUrl: './configs.component.html',
  styleUrls: ['./configs.component.scss']
})
export class ConfigsComponent implements OnInit {

  documentHeader: Header = { title: 'Документы', subtitle: 'Здесь Вы можете добавить или изменить необходимые документы' };

  documentOptions: Option[] = [
    { id: '1', text: 'Паспорт' },
    { id: '2', text: 'ИНН' },
    { id: '3', text: 'СНИЛС' },
    { id: '4', text: 'Справка' }
  ];

  weightHeader: Header = { title: 'Опции массы тела', subtitle: 'Здесь Вы можете изменить отображающиеся опции выбора массы тела' };
  weightOptions: Option[] = [
    { id: '1', text: 'Масса тела более 58 кг' },
    { id: '2', text: 'Масса тела менее 58 кг' },
  ];

  citizenshipHeader: Header = { title: 'Опции гражданства', subtitle: 'Здесь Вы можете изменить отображающиеся опции выбора гражданства' };

  citizenshipOptions: Option[] = [
    { id: '1', text: 'Гражданство России от года' },
    { id: '2', text: 'Отсутстутствует или менее года' },
  ];

  residencyHeader: Header = { title: 'Опции регистрации', subtitle: 'Здесь Вы можете изменить отображающиеся опции выбора регистрации' };

  residencyOptions: Option[] = [
    { id: '1', text: 'Регистрация в СПб от полугода' },
    { id: '2', text: 'Отсутствует или менее полугода' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
