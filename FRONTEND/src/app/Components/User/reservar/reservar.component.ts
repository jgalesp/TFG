import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Incidencia } from 'src/app/Interfaces/IncidenciasInterface';
import { Pista } from 'src/app/Interfaces/PistaInterface';
import { Reserva } from 'src/app/Interfaces/ReservaInterface';
import { User } from 'src/app/Interfaces/UserInterface';
import { IncidenciasService } from 'src/app/Service/incidencias.service';
import { PistasService } from 'src/app/Service/pistas.service';
import { ReservaService } from 'src/app/Service/reserva.service';
import { SolicitudesService } from 'src/app/Service/solicitudes.service';



@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent implements OnInit{

  fecha!:string;
  hayFecha:boolean=false;
  idPista:number=0;
  minDate!: string;
  user!:User;
  pistas:Pista[]=[];
  hayPista: boolean=false;
  hasClass:boolean=false;
  fechaInicio!: Date;
  descripcionPista: any;
  fechaFinal!: Date;
  precio!: number;
  dni!:string;
  incidencias:Incidencia[]=[];
  hayIncidencia!: boolean;
  show!: boolean;
  

  constructor(private reserva:ReservaService, private router:Router, private pistaService:PistasService, private solicitudesService:SolicitudesService, private incidenciasService:IncidenciasService){
  
    const currentDate = new Date();
    this.minDate = currentDate.toISOString().split('T')[0];

  }


  ngOnInit(): void {
    
    this.getPistas();

    let token = localStorage.getItem('token');
    if(token!=null){
      var decode:any = jwtDecode(token);
      var email:any = decode.sub;
      
    }
    
    
    this.solicitudesService.getUserByEmail(email).subscribe((dato)=>{
      this.user = dato;
      
    })

    
    

  }

  showToast(){
    this.show=true;
  }

  getIncidencias(){
    this.incidenciasService.getIncidencias().subscribe((dato)=>{
      
      this.incidencias=dato.filter(item =>item.idPista==this.idPista && item.estado=="Activo");
    
    })
  }

  getPistas(){
    this.pistaService.getPistas().subscribe((dato)=>{
      this.pistas=dato;
      
    })
  }

  cambioFechas(){
    this.hayFecha=false;
    this.hasClass=false;
    
  }

  cambioPista(){
    this.hayPista=false;
    this.hasClass=false;
    this.pistaService.getById(this.idPista).subscribe((dato)=>{
      this.descripcionPista= dato.nombrePista;
      this.precio = dato.precio;
    })
    
    
    
  }



  reservadas(dato: Reserva[]) {
    dato = dato.filter(item => item.idPista == this.idPista);
  
    let diasReservados: { [fecha: string]: number[] } = {};
  
    for (const fecha of dato) {

      let fechaBD = new Date(fecha.fechaInicio);
      let fechaStr = fechaBD.toISOString().split('T')[0];
      let hora = fechaBD.getHours();
  
      if (!diasReservados[fechaStr]) {
        diasReservados[fechaStr] = [hora];
      } else {
        diasReservados[fechaStr].push(hora);
      }
    }
  
    const blueBoxes = document.getElementsByClassName('blue-box');
  
    for (let i = 0; i < blueBoxes.length; i++) {
      const blueBox = blueBoxes[i] as HTMLDivElement;
      const hora = blueBox.getAttribute('data-hora');
  
      if (hora) {
        const fechaHoraStr = this.fecha + 'T' + hora + ':00:00';
        const fechaHora = new Date(fechaHoraStr);
  
        const fechaStr = fechaHora.toISOString().split('T')[0];
        const horaReservada = fechaHora.getHours();

        
        if (diasReservados[fechaStr] && diasReservados[fechaStr].includes(horaReservada)) {
          blueBox.classList.add('reservado');
                
        } else {
          blueBox.classList.remove('reservado');
          
        }
      }
    }
  }

  cambiar(){
  
      this.hayFecha=true; 
      this.hayPista=true;
     
       this.reserva.getReservas().subscribe((dato)=>{
         //setTimeout(this.reservadas(dato), 1000);
         this.reservadas(dato);
      })

      this.getIncidencias();


    

  }

  reservar(event: MouseEvent){

    this.hasClass=false;

    let fechaSeleccionada = new Date(this.fecha);
    const target = event.target as HTMLDivElement;
    const value = target.dataset['hora'];
   
    fechaSeleccionada.setHours(Number(value), 0, 0, 0);
    
    let fechaFin=new Date(this.fecha);
    fechaFin.setHours(Number(value), 59, 59, 0);

    this.fechaInicio = fechaSeleccionada;
    this.fechaFinal = fechaFin; 

    
    if(target.classList.contains('reservado')){
      this.hasClass=false;
    }else{
      this.hasClass=true;
    }

   


  }

  reservarTotal(){

    if(confirm("¿Quiere completar la reserva?")){

      for(let item of this.incidencias){
        if(this.idPista==item.idPista){
          this.hayIncidencia=true;
        }
      }

      let reserva:Reserva;

      if(this.hayIncidencia){
         reserva={
          fechaInicio: this.fechaInicio,
          fechaFin: this.fechaFinal,
          dni: this.user.dni,
          idPista: this.idPista,
          activo:false,
          pista: undefined,
          user: undefined
        }
      }else{
         reserva={
          fechaInicio: this.fechaInicio,
          fechaFin: this.fechaFinal,
          dni: this.user.dni,
          idPista: this.idPista,
          activo:true,
          pista: undefined,
          user: undefined
        }
      }

      
  
       this.reserva.reservar(reserva).subscribe((dato)=>{
        this.router.navigate(['dashboard']);
       })
    }

    
  }

}


