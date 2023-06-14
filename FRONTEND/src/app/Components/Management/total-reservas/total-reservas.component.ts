import { Component, OnInit } from '@angular/core';
import { PkPistasAlquiladas } from 'src/app/Interfaces/PkPistasAlquiladasInterface';
import { Reserva } from 'src/app/Interfaces/ReservaInterface';
import { ReservaService } from 'src/app/Service/reserva.service';
import { format, parse } from 'date-fns';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-total-reservas',
  templateUrl: './total-reservas.component.html',
  styleUrls: ['./total-reservas.component.css']
})
export class TotalReservasComponent implements OnInit{
  
  reservas:PkPistasAlquiladas[]=[];
  reservasBackup:PkPistasAlquiladas[]=[];
  p!:number;
  minDate!: string;
  fecha!:string;
  mantenimiento:boolean=false;
  socios:boolean=false;

  constructor(private reservasService:ReservaService){
    const currentDate = new Date();
    this.minDate = currentDate.toISOString().split('T')[0];
  }

  ngOnInit(): void {
    this.reservasService.getTotalReservas().subscribe((dato)=>{
      
      this.reservas=dato;
      
      this.reservasBackup=dato;
      
    })
  }

  cambioFechas() {
    
  
    if (this.fecha !== undefined && this.fecha !== "") {
      const fechaComparacion = new Date(this.fecha);
  
      this.reservasBackup = this.reservas.filter(item => {
        const fechaInicio = new Date(item.pkPistasAlquiladas.fechaInicio);
  
        const fechaInicioFormateada = `${fechaInicio.getFullYear()}-${(fechaInicio.getMonth() + 1).toString().padStart(2, '0')}-${fechaInicio.getDate().toString().padStart(2, '0')}`;
        const fechaComparacionFormateada = `${fechaComparacion.getFullYear()}-${(fechaComparacion.getMonth() + 1).toString().padStart(2, '0')}-${fechaComparacion.getDate().toString().padStart(2, '0')}`;
  
        return fechaInicioFormateada === fechaComparacionFormateada;
      });

    } else {
      this.reservasBackup = this.reservas;
    }


    if(this.mantenimiento==true && this.socios==false){
      
      this.reservasBackup = this.reservasBackup.filter(item => item.mantenimiento == true);
    }else if(this.mantenimiento==false && this.socios==true){
      this.reservasBackup = this.reservasBackup.filter(item => item.mantenimiento == false);
     
    }

  }

 

}
