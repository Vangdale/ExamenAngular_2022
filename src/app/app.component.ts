import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="padding:10px">
              <ul class="nav nav-tabs">
                <li><a routerLink="Medicos">MÉDICOS</a></li>
                <li><a routerLink="Hospitales">HOSPITALES</a></li>
                <li><a routerLink="Pacientes">PACIENTES</a></li>
                <li><a routerLink="Desplegable">DESPLEGABLE</a></li>
              </ul>
              <router-outlet></router-outlet>
            </div>
            `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularExamenJG';
}
