import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pista } from 'src/app/Interfaces/PistaInterface';
import { PistasService } from 'src/app/Service/pistas.service';

@Component({
  selector: 'app-new-pista',
  templateUrl: './new-pista.component.html',
  styleUrls: ['./new-pista.component.css']
})
export class NewPistaComponent{

  constructor(private router:Router, private pistasService:PistasService){}

  pista!:Pista;
  
  nombrePista!:string;
  descripcion!:string;
  deporte:string="";
  precio!:string;
  error:boolean=false;

  submit(){

    if(this.nombrePista==null||this.nombrePista==""||this.deporte==""||this.precio==""||this.precio==null){
      this.error=true;
    }else{
      this.introducirPista();
    }
    
  }

  introducirPista(){
    const datosPista = {nombrePista:this.nombrePista, descripcion:this.descripcion, deporte:this.deporte, precio:this.precio}
    this.pistasService.introducirPista(datosPista).subscribe((dato)=>{
      this.goToPistas();
    })
  }

  goToPistas(){
    this.router.navigate(["pista"]);
  }

  errorFalse(){
    this.error=false;
  }

 
}
