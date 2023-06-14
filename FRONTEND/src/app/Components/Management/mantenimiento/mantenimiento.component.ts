import { Component } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Pista } from 'src/app/Interfaces/PistaInterface';
import { Reserva } from 'src/app/Interfaces/ReservaInterface';
import { User } from 'src/app/Interfaces/UserInterface';
import { PistasService } from 'src/app/Service/pistas.service';
import { ReservaService } from 'src/app/Service/reserva.service';
import { SolicitudesService } from 'src/app/Service/solicitudes.service';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent {

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
  mantenimiento:boolean|undefined;
  blueBoxes!: NodeListOf<HTMLDivElement>;
  

  constructor(private reserva:ReservaService, private router:Router, private pistaService:PistasService, private solicitudesService:SolicitudesService){
  
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

  toArray(collection: NodeListOf<Element>): Element[] {
    return Array.from(collection);
  }

  blueBoxData: { hora: string, reservado: boolean, mantenimiento: boolean }[] = [
    { hora: '15:00', reservado: false, mantenimiento: false },
    // Agrega los demás elementos de la matriz
  ];


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
    

    let reserva:Reserva={
      fechaInicio: fechaSeleccionada,
      fechaFin: fechaFin,
      dni: this.user.dni,
      idPista: this.idPista,
      activo:true,
      pista: undefined,
      user: undefined
    }

    if(target.classList.contains('reservado')){
      this.hasClass=false;
    }else{
      this.hasClass=true;
    }

    // this.reserva.reservar(reserva).subscribe((dato)=>{
    //   console.log(dato);
      
    // })


  }

  reservarTotal(){

    if(confirm("¿Quiere completar la reserva?")){
      let reserva:Reserva={
        fechaInicio: this.fechaInicio,
        fechaFin: this.fechaFinal,
        dni: this.user.dni,
        mantenimiento:true,
        activo:true,
        idPista: this.idPista,
        pista: undefined,
        user: undefined
      }
  
       this.reserva.reservar(reserva).subscribe((dato)=>{
        this.router.navigate(['dashboard']);
       })
    }

    
  }
}
