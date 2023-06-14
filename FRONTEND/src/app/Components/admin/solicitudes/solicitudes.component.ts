import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Solicitud } from 'src/app/Interfaces/SolicitudInterface';
import { User } from 'src/app/Interfaces/UserInterface';
import { SolicitudesService } from 'src/app/Service/solicitudes.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit{

  ngOnInit(): void {
    this.obtenerSolicitudes();
    this.obtenerSocios();
    
  }

  constructor(private solicitudesService:SolicitudesService, private router:Router){}

  solicitudes:Solicitud[]=[];
  socios:User[]=[];
  usuario!:User|undefined;
  newSocio!:User|undefined;
  contador:number=0;

  
  

  obtenerSolicitudes(){
    this.contador=0;
    this.solicitudesService.obtenerSolicitudes().subscribe((dato)=>{
      this.solicitudes=dato;
      this.contarSolicitudes();
    })
  }

  obtenerSocios(){
    this.solicitudesService.obtenerListaSocios().subscribe((dato)=>{
      this.socios=dato;
      
    })
  }
  
  contarSolicitudes(){
    for(let item of this.solicitudes){
      
      if(item.estado==false){
        
        this.contador++;
      }
    }
  }

  existeUsuario(usuarios: User[], dni: string): boolean {

   if(usuarios.some(usuario => usuario.dni === dni)){
    this.usuario=usuarios.find(usuario => usuario.dni === dni);
    return true;

  }else{
    this.usuario=undefined;
    return false;
  }
    
     

  }

  darAlta(solicitud:Solicitud){

    solicitud.estado=true;
    this.newSocio = this.socios.find(usuario=> usuario.dni == solicitud.dni);
    

    if(this.newSocio!=undefined){

      this.newSocio.password = solicitud.password;
      
      this.solicitudesService.darAlta(this.newSocio).subscribe((dato)=>{})

      this.solicitudesService.modificar(solicitud).subscribe((dato)=>{})

      this.router.navigate(["/solicitudes"]);

    }
    
  }

  cancelarAlta(dni:string){

    this.solicitudesService.cancelarAlta(dni).subscribe((dato)=>{
      this.obtenerSolicitudes();
    })
    
       
  }

}
