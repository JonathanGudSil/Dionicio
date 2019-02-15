import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: '', component : LoginComponent },
  { path: 'login', component : LoginComponent },
  { path: 'contacto', component : ContactoComponent },
  { path: 'inicio', component : InicioComponent },
  { path: '**', component : InicioComponent },
];

@NgModule
({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

