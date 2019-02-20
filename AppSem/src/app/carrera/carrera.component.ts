import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatPaginator} from '@angular/material';


@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css']
})
export class CarreraComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight'];
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
  name: string;
  position: number;
  weight: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Contabilidad', weight: 1.0079 },
  {position: 2, name: 'Administracion de Empresas', weight: 4.0026 },
  {position: 3, name: 'Belleza', weight: 6.941},
  {position: 4, name: 'Reparacion y Mantenimiento', weight: 9.0122},
  {position: 5, name: 'Programacion', weight: 10.811},
  {position: 6, name: 'Sastreria', weight: 12.0107},
  {position: 7, name: 'Soldadura', weight: 14.0067},
  {position: 8, name: 'Computacion', weight: 15.9994},
  {position: 9, name: 'Cocina', weight: 18.9984},
  {position: 10, name: 'Secretaria', weight: 20.1797},
];
