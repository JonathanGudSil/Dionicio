import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {AfterViewInit} from '@angular/core';
import { MatSort} from '@angular/material';
import {merge, Observable, of as observableOf, from} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {
  displayedColumns: string[] = ['IdGrupo', 'Carrera', 'Turno','FechaInicio', 'FechaFinal','MatriculaInicial','HoraInicio', 'HoraFinal','Accion'];
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
  IdGrupo: number;
  Carrera: string;
  Turno: string;
  FechaInicio: string;
  FechaFinal: string;
  MatriculaInicial: string;
  HoraInicio: string;
  HoraFinal: string;
  Accion: string;
  

}

const ELEMENT_DATA: PeriodicElement[] = [
  {IdGrupo: 1, 
    Carrera: 'Computacion', 
    Turno: 'Sabatino', 
    FechaInicio: '07/02/2019', 
    FechaFinal: '29/03/2019', 
    MatriculaInicial: '25', 
    HoraInicio: '6:00 pm', 
    HoraFinal: '9:00 pm', 
    Accion: ' ' },
  
    {IdGrupo: 2, 
      Carrera: 'Técnico esp. Programación', 
      Turno: 'Nocturno', 
      FechaInicio: '07/02/2019', 
      FechaFinal: '29/03/2019', 
      MatriculaInicial: '2', 
      HoraInicio: '6:00 pm', 
      HoraFinal: '9:00 pm', 
      Accion: ' ' },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class TableBasicExample {
  displayedColumns: string[] = ['IdGrupo', 'Carrera', 'Turno', 'FechaInicio', 'FechaFinal', 'MatriculaInicial','Horainicio','HoraFinal', 'Accion'];
  dataSource = ELEMENT_DATA;
}



