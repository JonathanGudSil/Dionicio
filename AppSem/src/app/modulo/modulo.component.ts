import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatPaginator} from '@angular/material';



@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css']
})
export class ModuloComponent implements OnInit {
  displayedColumns: string[] = ['IdModulo', 'Descripcion', 'Duracion', 'Carrera', 'Accion'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  IdModulo: number;
  Descripcion: string;
  Duracion: string;
  Carrera: string;
  Accion: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {IdModulo: 1, Descripcion: 'Programacion Orientada a Objetos', Duracion: ' 4 Meses' , Carrera: 'Ing. Sistemas', Accion: ' ' },
  {IdModulo: 2, Descripcion: 'Programacion Web', Duracion: ' 2 Meses' , Carrera: 'Ing. Sistemas', Accion: ' ' },
  {IdModulo: 3, Descripcion: 'Administracion de Bases de Datos', Duracion: ' 2 Meses' , Carrera: 'Ing. Sistemas', Accion: ' ' },
];





