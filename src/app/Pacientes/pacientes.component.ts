import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SeguridadSocialService } from '../Service/SeguridadSocial.service';
import { Pacientes } from './pacientes';


@Component({
    selector: 'lista-pacientes',
    templateUrl: './pacientes.component.html',
    providers : [SeguridadSocialService,DatePipe]
    
})
export class PacientesListaComponent implements OnInit{

    
    pacientes: Pacientes[] = [];
    constructor(public losPacientes : SeguridadSocialService){
    }

    ngOnInit() {
        this.losPacientes.getPacientes().subscribe((datospacientes) => this.pacientes = datospacientes) 
    }

}