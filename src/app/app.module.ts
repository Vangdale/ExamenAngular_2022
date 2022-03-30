import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // porque http a secas esta deprecado
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalesListaComponent } from './Hospitales/hospitales.component';
import { SeguridadSocialService } from './Service/SeguridadSocial.service';
import { MedicosListaComponent } from './Medicos/medicos.component';
import { PacientesListaComponent } from './Pacientes/pacientes.component';
import { DesplegableComponent } from './Desplegable/desplegable.component';
import { MedicosSegunHospitalComponent } from './MedicosSegunHospitales/medicossegunhospitales.component';
import { DatePipe } from '@angular/common';


const appRutas: Routes = [
  {path: 'Medicos', component: MedicosListaComponent},
  {path: 'Hospitales', component: HospitalesListaComponent},
  {path: 'Pacientes', component: PacientesListaComponent},
  {path: 'Desplegable', component: MedicosSegunHospitalComponent}
];


@NgModule({
  declarations: [
    AppComponent,HospitalesListaComponent, MedicosListaComponent,PacientesListaComponent,DesplegableComponent,MedicosSegunHospitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRutas)
    
  ],
  providers: [SeguridadSocialService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
