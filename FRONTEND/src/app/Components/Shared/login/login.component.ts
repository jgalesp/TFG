import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  email!:string;
  pass!:string;
  error!: boolean;
  
  constructor(private loginService:LoginServiceService, private router:Router){

  }

  sendLogin(){

    this.error=false;
    const datosUsuario = {email:this.email, pass:this.pass}

    this.loginService.sendLogin(datosUsuario).subscribe((dato) => {
        localStorage.setItem('token', dato.tokenAcceso);
        this.router.navigate(['dashboard']);
      },
      (error) => {
        this.error=true;
      })
  }

  darAlta(){
    this.router.navigate(['/darAlta']);
  }
 

}
