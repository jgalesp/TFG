import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from 'src/app/Interfaces/EventoInterface';
import { User } from 'src/app/Interfaces/UserInterface';
import { EventosService } from 'src/app/Service/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

 

  ngOnInit(): void {
    this.getEventos();
  }
  eventos:Evento[]=[];
  sociosEvento:User[]=[];
  p!:number;
  evento!:Evento;
  error:boolean=false;
  contador:number=0;

  constructor(private eventosService:EventosService, private router:Router){}

  getEventos(){
    this.eventosService.getEventos().subscribe((dato)=>{
      this.eventos=dato;

      for(let item of this.eventos){
        if(item.borrado==false){
          this.contador++;
        }
      }

    })
  }

  nuevoEvento(){
    this.router.navigate(['nuevoEvento']);
  }

  deleteEvento(id_evento:number){

    let esta=false;
    

    for(let item of this.eventos){
      if(item.idEvento==id_evento){
        esta=true;
        this.evento=item;
      }
    }

    if(esta==true){
      if(this.evento.socios.length>0){
        this.evento.borrado=true;
        
        this.eventosService.nuevoEvento(this.evento).subscribe((dato)=>{
          this.getEventos();
        })
      }else{
        this.eventosService.deleteEvento(id_evento).subscribe((dato)=>{
          this.getEventos();
        })
      }
    }

  }

  errorFalse(){
    this.error=false;
  }

  getSocios(idEvento:number) {
    this.eventosService.getEventos().subscribe((dato)=>{
      for(let iterator of dato){
        if(iterator.idEvento == idEvento){
          this.sociosEvento=iterator.socios;
        }
      }
    })
  }

}
