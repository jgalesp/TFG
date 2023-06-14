import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { formatISODuration } from 'date-fns';
import { of } from 'rxjs';
import { Incidencia } from 'src/app/Interfaces/IncidenciasInterface';
import { Pista } from 'src/app/Interfaces/PistaInterface';
import { IncidenciasService } from 'src/app/Service/incidencias.service';
import { PistasService } from 'src/app/Service/pistas.service';
import { ReservaService } from 'src/app/Service/reserva.service';

@Component({
  selector: 'app-indicencias',
  templateUrl: './indicencias.component.html',
  styleUrls: ['./indicencias.component.css']
})
export class IndicenciasComponent implements OnInit{
  
  incidencias: Incidencia[] = [];
  pistas: Pista[] = [];
  p: number = 1;
  nombresPistas: string[] = [];
  estados: string[] = [];
  estado!:string;
  correcto:boolean=false;
  

  constructor(
    private incidenciasService: IncidenciasService,
    private pistasService: PistasService,
    private router:Router,
    private reservasService:ReservaService
  ) {}

  
  
  ngOnInit(): void {
    this.incidenciasService.getIncidencias().subscribe((dato) => {
      this.incidencias = dato;
      
      for (const item of dato) {
        this.estados.push(item.estado);
      }

      this.incidencias.forEach((incidencia) => {
        this.obtenerNombrePista(incidencia.idPista);
      });
    });

    this.pistasService.getPistas().subscribe((dato) => {
      this.pistas = dato;
    });
  }

  obtenerNombrePista(idPista: number) {
    this.pistasService.getById(idPista).subscribe((dato) => {
     
      this.nombresPistas.push(dato.nombrePista);
    });
  }
  goToNewIncidencia(){
    this.router.navigate(["newIncidencia"]);
  }
  changeSelect(id:number){

    let incidencia = this.incidencias.filter(item=>item.idIncidencia==id);
    incidencia[0].estado = this.estado;

  }

  updateIncidencia(id:number){
    let incidencia = this.incidencias.filter(item=>item.idIncidencia==id);
    
    this.incidenciasService.updateIncidencia(incidencia[0], incidencia[0].idIncidencia).subscribe((dato)=>{

      if(this.estado=="Completado"){

        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido);

        
        this.reservasService.getReservas().subscribe((dato)=>{

          for(let item of dato){
            const date = new Date(item.fechaInicio);

              
              item.activo=true;
              this.reservasService.updateReserva(item).subscribe((dato2)=>{
                    
              })
            
            
          }

          
        })

        
      }else{


        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido);

        
        this.reservasService.getReservas().subscribe((dato)=>{

          for(let item of dato){
            const date = new Date(item.fechaInicio);

              item.activo=false;
              
              this.reservasService.updateReserva(item).subscribe((dato2)=>{
                    
              })
            
            
          }

          
        })

        

        

      }

      this.obtenerIncidencias();
      this.correcto=true;
    })





  }

  obtenerIncidencias(){
    this.incidenciasService.getIncidencias().subscribe((dato) => {
      this.incidencias = dato;

      this.estados=[];
      
      for (const item of dato) {
        this.estados.push(item.estado);
      }
  })}

}
