import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pista } from 'src/app/Interfaces/PistaInterface';
import { IncidenciasService } from 'src/app/Service/incidencias.service';
import { PistasService } from 'src/app/Service/pistas.service';
import { ReservaService } from 'src/app/Service/reserva.service';

@Component({
  selector: 'app-new-incidencia',
  templateUrl: './new-incidencia.component.html',
  styleUrls: ['./new-incidencia.component.css']
})
export class NewIncidenciaComponent implements OnInit{

  constructor(private router:Router, private pistasService:PistasService, private incidenciasService:IncidenciasService, private reservasService:ReservaService){}

  pistas:Pista[]=[];
  descripcion!:string;
  idPista:number=0;
  nivel:string="";
  error:boolean=false;
  
  ngOnInit(): void {
    
    this.pistasService.getPistas().subscribe((dato)=>{
      this.pistas=dato;
    })
  }

  errorFalse(){
    this.error=false;
  }

  submit(){
    if(this.descripcion==""||this.descripcion==null||this.idPista==0||this.nivel==""){
      this.error=true;
    }else{
      this.introducirIncidencia();
    }
    
  }

  
  introducirIncidencia(){
    const datosIncidencia = {descripcion:this.descripcion, estado:"Activo",idPista:this.idPista, nivel:this.nivel}
    this.incidenciasService.introducirIncidencia(datosIncidencia).subscribe((dato)=>{

      if(this.nivel=="Alto"){

        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido);

        console.log("entra");

      
        this.reservasService.getReservas().subscribe((dato)=>{

          for(let item of dato){
            const date = new Date(item.fechaInicio);

              if(this.idPista==item.idPista){
                item.activo=false;
                this.reservasService.updateReserva(item).subscribe((dato2)=>{
                      
                })
              }
               
          }

        })

        
      }

      this.goToIncidencias();
    })
  }


  goToIncidencias(){
    this.router.navigate(['incidencias']);
  }

}
