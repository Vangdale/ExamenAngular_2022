import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SeguridadSocialService } from '../Service/SeguridadSocial.service';
import { Hospitales } from '../Hospitales/hospitales';


@Component({
    selector: 'deplegable-hospitales',
    templateUrl: './deplegable.component.html',
    providers : [SeguridadSocialService]
    
})
export class DesplegableComponent implements OnInit{

    hospitales: Hospitales[] = [];
    constructor(public losHospitales : SeguridadSocialService){
    }

    ngOnInit() {
        this.losHospitales.getHospitales().subscribe((datoshospitales) => this.hospitales = datoshospitales) 
    }


    @Output()
    globalElegido: EventEmitter<String> = new EventEmitter<String>();

    HospitalElegido:String = "Hospital Clínico";

    cuandoCambiemos(){
        this.globalElegido.emit(this.HospitalElegido);
    }

    @Input()
    medicos: number = 0;

}