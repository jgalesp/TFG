import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventosService } from 'src/app/Service/eventos.service';
import { format, parseISO, startOfDay, endOfDay, eachDayOfInterval, isTuesday, isMonday, isWednesday, isThursday, isFriday, isSaturday, isSunday } from 'date-fns';
import { PistasService } from 'src/app/Service/pistas.service';
import { Pista } from 'src/app/Interfaces/PistaInterface';
import { Reserva } from 'src/app/Interfaces/ReservaInterface';
import { SolicitudesService } from 'src/app/Service/solicitudes.service';
import { User } from 'src/app/Interfaces/UserInterface';
import jwtDecode from 'jwt-decode';
import { ReservaService } from 'src/app/Service/reserva.service';

@Component({
  selector: 'app-new-evento',
  templateUrl: './new-evento.component.html',
  styleUrls: ['./new-evento.component.css']
})
export class NewEventoComponent implements OnInit {


nombreEvento!: string;
fechaInicio!: Date;
fechaFin!:Date;
dia:string="";
deporte:string="";
hora:string="";
minDate!: string;
idPista:number=0;
pistas:Pista[]=[];
user!:User;
error:boolean=false;

constructor(private router:Router, private eventoService:EventosService, private pistasService:PistasService, private solicitudesService:SolicitudesService, private reserva:ReservaService){

  const currentDate = new Date();
  this.minDate = currentDate.toISOString().split('T')[0];

}
  
ngOnInit(): void {
    this.pistasService.getPistas().subscribe((dato)=>{
      this.pistas=dato;
    })
    let token = localStorage.getItem('token');
    if(token!=null){
      var decode:any = jwtDecode(token);
      var email:any = decode.sub;
    }
    
    this.solicitudesService.getUserByEmail(email).subscribe((dato)=>{
      this.user = dato;
      
    })
  }

submit() {

  if(this.nombreEvento==null || this.nombreEvento=="" || this.deporte=="" || this.dia=="" || this.hora=="" || this.idPista==0 || this.fechaInicio==undefined || this.fechaFin==undefined){
    this.error=true;
  }else{
    this.nuevoEvento();
  } 
}

errorFalse(){
  this.error=false;
}

nuevoEvento(){

    const parsedStartDate = startOfDay(parseISO(this.fechaInicio+""));
    const parsedEndDate = endOfDay(parseISO(this.fechaFin+""));

    const allDays = eachDayOfInterval({ start: parsedStartDate, end: parsedEndDate });

    var days;

      switch(this.dia){

        case "Lunes":
          days = allDays.filter(day => isMonday(day));
          break;
          case "Martes":
            days = allDays.filter(day => isTuesday(day));
            break;
            case "Miércoles":
              days = allDays.filter(day => isWednesday(day));
              break;
              case "Jueves":
                days = allDays.filter(day => isThursday(day));
                break;
                case "Viernes":
                  days = allDays.filter(day => isFriday(day));
                  break;
                  case "Sábado":
                    days = allDays.filter(day => isSaturday(day));
                    break;
                    case "Domingo":
                      days = allDays.filter(day => isSunday(day));
                      break;
                      
      }
 
      if(days!=undefined){
        days.forEach(day => {
          
          let fechaSeleccionada = new Date(day);
          fechaSeleccionada.setHours(Number(this.hora), 0, 0, 0);
          
          let fechaFin=new Date(day);
          fechaFin.setHours(Number(this.hora), 59, 59, 0);

          let reserva:Reserva={
            fechaInicio: fechaSeleccionada,
            fechaFin: fechaFin,
            dni: this.user.dni,
            idPista: this.idPista,
            pista: undefined,
            user: undefined
          }

          this.reserva.reservar(reserva).subscribe((dato)=>{
            
          })

        });
      }

     
  
  
    
    const datosEvento = {nombreEvento:this.nombreEvento, fechaInicio:this.fechaInicio, fechaFin:this.fechaFin, dia:this.dia, deporte:this.deporte, hora:this.hora, borrado:false};
    this.eventoService.nuevoEvento(datosEvento).subscribe((dato)=>{

      this.router.navigate(["eventos"]);
    })

  }

}
