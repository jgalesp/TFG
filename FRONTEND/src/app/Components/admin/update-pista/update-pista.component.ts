import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pista } from 'src/app/Interfaces/PistaInterface';
import { PistasService } from 'src/app/Service/pistas.service';

@Component({
  selector: 'app-update-pista',
  templateUrl: './update-pista.component.html',
  styleUrls: ['./update-pista.component.css']
})
export class UpdatePistaComponent implements OnInit {
  constructor(private router:Router, private pistasService:PistasService, private routerActive:ActivatedRoute){}
  
  ngOnInit(): void {
    this.idPista = this.routerActive.snapshot.params['idPista'];
    this.pistasService.getById(this.idPista).subscribe((dato)=>{
      this.pista=dato;
      this.nombrePista=dato.nombrePista;
      this.descripcion=dato.descripcion;
      this.deporte=dato.deporte;
      this.precio=dato.precio;
    })
  }

  pista!:Pista;
  idPista!:number;
  
  nombrePista!:string;
  descripcion!:string;
  deporte:string="";
  precio!:number;
  

  submit(){
    this.updatePista(this.idPista);
  }

  updatePista(idPista:number){
    const datosPista = {nombrePista:this.nombrePista, descripcion:this.descripcion, deporte:this.deporte, precio:this.precio}
    this.pistasService.updatePista(datosPista, idPista).subscribe((dato)=>{
      this.goToPista();
    })
  }

  goToPista(){
    this.router.navigate(['pista']);
  }
}
