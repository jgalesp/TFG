import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { PkPistasAlquiladas } from 'src/app/Interfaces/PkPistasAlquiladasInterface';
import { User } from 'src/app/Interfaces/UserInterface';
import { ReservaService } from 'src/app/Service/reserva.service';
import { SolicitudesService } from 'src/app/Service/solicitudes.service';

@Component({
  selector: 'app-reservas-socio',
  templateUrl: './reservas-socio.component.html',
  styleUrls: ['./reservas-socio.component.css']
})
export class ReservasSocioComponent implements OnInit{

  user!:User;
  reservas:PkPistasAlquiladas[]=[];
  p!:number;

  constructor(private reservasService:ReservaService, private solicitudesService:SolicitudesService){}
 
  ngOnInit(): void {
    
    let token = localStorage.getItem('token');
    if(token!=null){
      var decode:any = jwtDecode(token);
      var email:any = decode.sub;

      this.solicitudesService.getUserByEmail(email).subscribe((dato)=>{
        
        this.reservasService.getByDNI(dato.dni).subscribe((dato)=>{
          this.reservas=dato;
          
          
            
          })  
      })
    }
    
    

    


  }


}
