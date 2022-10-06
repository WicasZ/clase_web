import { Component, OnInit } from '@angular/core';

export interface personas {
  nombre: string;
  apellido: string;
  ocupacion: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  personales: personas[] = [
    { nombre: 'Julanito', apellido: 'Carlos', ocupacion: 'Estudiante' },
    { nombre: 'Edgar', apellido: 'Tun', ocupacion: 'nini' },
    { nombre: 'William', apellido: 'Zi', ocupacion: 'Carpintero' },
    { nombre: 'Pedro', apellido: 'Isaac', ocupacion: 'Maestro' },
  ];
  constructor() {
    console.log(this.personales);
  }

  ngOnInit(): void {}

  btnDelete(): void {
    
  }
}