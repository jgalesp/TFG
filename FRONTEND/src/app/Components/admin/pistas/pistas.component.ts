import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pista } from 'src/app/Interfaces/PistaInterface';
import { PistasService } from 'src/app/Service/pistas.service';

@Component({
  selector: 'app-pistas',
  templateUrl: './pistas.component.html',
  styleUrls: ['./pistas.component.css']
})
export class PistasComponent implements OnInit{

  ngOnInit(): void {
    this.getPistas();
  }

  constructor(private pistasService:PistasService, private router:Router){}
  pistas:Pista[]=[];
  error:boolean=false;
  p!:number;

  getPistas(){
    this.pistasService.getPistas().subscribe((dato)=>{
      this.pistas=dato;
    })
  }

  nuevaPista(){
    this.router.navigate(["/nuevaPista"]);
  }

  updatePista(idPista:number){
    this.router.navigate(['updatePista',idPista]);
  }

  deletePista(idPista:number){
    this.error=false;
    this.pistasService.deletePista(idPista).subscribe((dato)=>{
     this.getPistas();
    },
    (error)=>{
      this.error=true;
    }
    
    )
    
    
  }
  

}
