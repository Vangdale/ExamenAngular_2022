import { Component, OnInit } from '@angular/core';
import { SeguridadSocialService } from '../Service/SeguridadSocial.service';
import { Hospitales } from './hospitales';


@Component({
    selector: 'lista-hospitales',
    templateUrl: './hospitales.component.html',
    providers : [SeguridadSocialService]
    
})
export class HospitalesListaComponent implements OnInit{

    hospitales: Hospitales[] = [];
    constructor(public losHospitales : SeguridadSocialService){
    }

    ngOnInit() {
        this.losHospitales.getHospitales().subscribe((datoshospitales) => this.hospitales = datoshospitales) 
    }

}