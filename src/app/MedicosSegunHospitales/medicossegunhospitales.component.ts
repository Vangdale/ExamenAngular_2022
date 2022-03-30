import { Component, OnInit } from '@angular/core';
import { SeguridadSocialService } from '../Service/SeguridadSocial.service';
import { Medicos } from '../Medicos/medicos';


@Component({
    selector: 'medicos',
    templateUrl: './medicossegunhospitales.component.component.html',
    providers : [SeguridadSocialService]
    
})
export class MedicosSegunHospitalComponent implements OnInit{

    
    medicos: Medicos[] = [];
    constructor(public losMedicos : SeguridadSocialService){
    }

    ngOnInit() {
        this.losMedicos.getMedicos().subscribe((datosmedicos) => this.medicos = datosmedicos) 
    }

    seleccion:String = "Hospital Clínico";

    alCambiar(opcionSeleccionada: String){
        this.seleccion = opcionSeleccionada;
    }


    getNumMedicos(){
        return this.medicos.filter(a=> a.Hospital == this.seleccion).length;
    }
}