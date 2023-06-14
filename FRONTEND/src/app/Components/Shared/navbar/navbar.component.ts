import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { User } from 'src/app/Interfaces/UserInterface';
import { SolicitudesService } from 'src/app/Service/solicitudes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  
  admin:boolean=false;
  management:boolean=false;
  user:boolean=false;
  token!:string|null;
  datosUser!:User;
  newPassword!:string;
  confirmPassword!:string;
  error: boolean=false;
  ok:boolean=false;
  changePassword:boolean=false;


ngOnInit(): void {
  this.comprobarRol();
  
  if(this.token!=null){
  
    let tokenDecode:any = jwtDecode(this.token);
    this.solicitud.getUserByEmail(tokenDecode.sub).subscribe((dato)=>{
      this.datosUser=dato;
      this.editarUsuario;
    },
    (error)=>{
      console.log(error);
    }
    )
  
  }
  
}

 

  

  constructor(private router:Router, private solicitud:SolicitudesService){}

  comprobarRol(){

    this.token = localStorage.getItem('token');
    let tokenDecode:any;

    if(this.token!=null){
      tokenDecode = jwtDecode(this.token);
      
      let rol = tokenDecode.Roles; 
      
      switch(rol){
        case "ADMIN":
          this.admin=true;
          break;
        case "MANAGEMENT":
            this.management=true;
            break;
        case "":
            this.user=true;
            break;
      }

     

    }
    
  }

  
  logout(){
    if(confirm("¿Seguro que desea cerrar sesión?")){
      localStorage.removeItem("token");
      this.router.navigate(["/login"]);
    }
    
  }

  goToDashboard(){
    this.router.navigate(["/dashboard"]);
  }

  goTo(event: MouseEvent){

    const target = event.target as HTMLDivElement;
    const value = target.dataset['destino'];
    const dest:any = "/"+value;
    
    this.router.navigate([dest]);
  
  }

  errorFalse(){
    this.error=false;
  }
  okFalse(){
    this.ok=false;
  }

 

  editarUsuario(){

    

    this.error=false;
    if(this.changePassword==false){
      
        this.solicitud.updateUserWithoutPassword(this.datosUser).subscribe((dato)=>{
          this.ok=true;
          this.router.navigate(["dashboard"]);
        })
      
      
    }else{
      
      if(this.newPassword!=this.confirmPassword || this.newPassword=="" || this.confirmPassword=="" || this.newPassword==null || this.confirmPassword==null){
        this.error=true;
      }else{
        this.datosUser.password=this.newPassword;
        this.solicitud.updateUser(this.datosUser).subscribe((dato)=>{
          this.ok=true;
          this.router.navigate(["dashboard"]);
        })
      }

     
    }
  }



}
