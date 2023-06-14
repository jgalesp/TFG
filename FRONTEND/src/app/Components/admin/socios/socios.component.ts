import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PkPistasAlquiladas } from 'src/app/Interfaces/PkPistasAlquiladasInterface';
import { Reserva } from 'src/app/Interfaces/ReservaInterface';
import { User } from 'src/app/Interfaces/UserInterface';
import { ReservaService } from 'src/app/Service/reserva.service';
import { SolicitudesService } from 'src/app/Service/solicitudes.service';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit{
  ngOnInit(): void {
    this.obtenerSocios();
  }
  constructor(private solicitudesService:SolicitudesService, private router:Router, private reservaService:ReservaService){}
  socios:User[]=[];
  reservas:PkPistasAlquiladas[]=[];
  p!:number;

  obtenerSocios(){
    this.solicitudesService.obtenerListaSociosClub().subscribe((dato)=>{
      this.socios=dato;
      
    })
  }

  getReservas(dni:string){
    this.reservas=[];
    this.reservaService.getByDNI(dni).subscribe((dato)=>{
      this.reservas=dato;
      this.reservas.forEach(element => {
        console.log(element.pkPistasAlquiladas.fechaInicio)
      });
    })
  }

}
