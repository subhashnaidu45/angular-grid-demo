import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  gender: string;
  skills: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Chiranjeevi', gender: 'male', skills: 'H' },
  { name: 'Venkatesh', gender: 'male', skills: 'He' },
  { name: 'Nagarjuna', gender: 'male', skills: 'Li' },
  { name: 'Bala Krishna', gender: 'male', skills: 'Be' },
  { name: 'Sri Devi', gender: 'female', skills: 'Be' },
];

@Component({
  selector: 'app-grid-demo',
  templateUrl: './grid-demo.component.html',
  styleUrls: ['./grid-demo.component.css'],
})
export class GridDemoComponent implements OnInit {
  skills = new FormControl('');
  skillsList: string[] = ['Angular', 'Dotnet', 'Python'];
  constructor() {}
  displayedColumns: string[] = ['name', 'gender', 'skills'];
  dataSource = ELEMENT_DATA;
  ngOnInit() {}
}
