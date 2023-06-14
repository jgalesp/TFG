import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Evento } from 'src/app/Interfaces/EventoInterface';
import { User } from 'src/app/Interfaces/UserInterface';
import { EventosService } from 'src/app/Service/eventos.service';
import { SolicitudesService } from 'src/app/Service/solicitudes.service';

@Component({
  selector: 'app-eventos-socios',
  templateUrl: './eventos-socios.component.html',
  styleUrls: ['./eventos-socios.component.css']
})
export class EventosSociosComponent implements OnInit{
  inscrito!: boolean;
  mostrar!: boolean;
  
  constructor(private eventosService:EventosService, private solicitudesService:SolicitudesService, private router:Router){}

  eventos:Evento[]=[];
  user!:User;
  p!:number;
  
  ngOnInit(): void {



    let token = localStorage.getItem('token');
    if(token!=null){
      var decode:any = jwtDecode(token);
      var email:any = decode.sub;

      this.solicitudesService.getUserByEmail(email).subscribe((dato)=>{
        this.user=dato;     
      })
    }

    

    this.eventosService.getEventos().subscribe((dato)=>{
      this.eventos=dato.filter(item=>item.borrado==false);
      this.comprobarInscrito();
    })

    
    

  }

  inscEvento(id:number){

    let token = localStorage.getItem('token');
    if(token!=null){
      var decode:any = jwtDecode(token);
      var email:any = decode.sub;

      this.solicitudesService.getUserByEmail(email).subscribe((dato)=>{

        this.user=dato;

        const datosInscripcion = {dni:dato.dni, idEvento:id}
          this.eventosService.inscripcion(datosInscripcion).subscribe((dato)=>{
            this.goToDashboard();
        },(error)=>{
          this.goToDashboard();
        })
        
      })
     
    }

    
  }

  goToDashboard(){
    this.router.navigate(['dashboard']);
  }

  comprobarInscrito() {
    for (let i = 0; i < this.eventos.length; i++) {
      const evento = this.eventos[i];
      this.mostrar = false;
  
      for (let j = 0; j < evento.socios.length; j++) {
        if (evento.socios[j].dni === this.user.dni) {
          this.mostrar = true;
          break;
        }
      }
  
      evento.inscrito = this.mostrar; // Agregar una propiedad 'inscrito' al evento
  
      // También puedes usar una propiedad 'inscrito' en lugar de 'mostrar' directamente en tu plantilla HTML
    }
  }

  


    
}


