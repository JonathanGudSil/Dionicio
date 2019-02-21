import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css']
})
export class ModuloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

} 
const ELEMENT_DATA: PeriodicElement[] = [
  {IdModulo: 1, Descripcion: 'Programacion Orientada a Objetos', Duracion: ' 4 Meses' , Carrera: 'Ing. Sistemas', Accion: ' ' },
  {IdModulo: 2, Descripcion: 'Programacion Web', Duracion: ' 2 Meses' , Carrera: 'Ing. Sistemas', Accion: ' ' },
  {IdModulo: 3, Descripcion: 'Administracion de Bases de Datos', Duracion: ' 2 Meses' , Carrera: 'Ing. Sistemas', Accion: ' ' },
];

@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  IdModulo: number;
  Descripcion: string;
  Duracion: string;
  Carrera: string;
  Accion: string;
}
