import { Component, OnInit } from '@angular/core';
import { SeguridadSocialService } from '../Service/SeguridadSocial.service';
import { Medicos } from './medicos';


@Component({
    selector: 'lista-medicos',
    templateUrl: './medicos.component.html',
    providers : [SeguridadSocialService]
    
})
export class MedicosListaComponent implements OnInit{

    
    medicos: Medicos[] = [];
    constructor(public losMedicos : SeguridadSocialService){
    }

    ngOnInit() {
        this.losMedicos.getMedicos().subscribe((datosmedicos) => this.medicos = datosmedicos) 
    }

}