import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  documents = [
    {id: 1, text: 'Паспорт'},
    {id: 2, text: 'ИНН'},
    {id: 3, text: 'СНИЛС'},
    {id: 4, text: 'Справка'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
