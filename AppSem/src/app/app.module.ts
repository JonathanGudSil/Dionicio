import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MynavComponent } from './mynav/mynav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CarreraComponent } from './carrera/carrera.component';
import { ContratoComponent } from './contrato/contrato.component';
import { DocenteComponent } from './docente/docente.component';
import { GrupoComponent } from './grupo/grupo.component';
import { ModuloComponent } from './modulo/modulo.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AgregarCarreraComponent } from './agregar-carrera/agregar-carrera.component';
import {OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {MatPaginator} from '@angular/material';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';



@NgModule({
  declarations: [
    AppComponent,
    MynavComponent,
    LoginComponent,
    InicioComponent,
    ContactoComponent,
    CarreraComponent,
    ContratoComponent,
    DocenteComponent,
    GrupoComponent,
    ModuloComponent,
    AsistenciaComponent,
    AgregarCarreraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatTooltipModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    Component,
    MatTableDataSource,
    MatGridListModule,
    MatPaginatorModule,
    ViewChild,
    MatSort,
    HttpClient,
    MatPaginator,
    



    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

