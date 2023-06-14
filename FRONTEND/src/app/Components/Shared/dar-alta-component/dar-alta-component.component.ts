import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { Solicitud } from 'src/app/Interfaces/SolicitudInterface';
import { User } from 'src/app/Interfaces/UserInterface';
import { LoginServiceService } from 'src/app/Service/login-service.service';


@Component({
  selector: 'app-dar-alta-component',
  templateUrl: './dar-alta-component.component.html',
  styleUrls: ['./dar-alta-component.component.css']
})
export class DarAltaComponentComponent {

  
  miFormulario!: FormGroup;
  error:boolean=false;
  solicitudEnviada:boolean=false;
  existeSolicitud:boolean=false;
  
  
  
  
  

  constructor(private loginService:LoginServiceService, private router:Router, private formBuilder: FormBuilder){
   
    this.miFormulario = this.formBuilder.group({
      dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]$')]],
      newPass: ['', [Validators.required]],
      repeatPass: ['', [Validators.required]]
    });

    
  }

  errorFalse(){
    this.error=false;
  }

  enviarSolicitud(){

    this.errorFalse();

    if(this.miFormulario.valid && this.miFormulario.get('newPass')?.value === this.miFormulario.get('repeatPass')?.value){

      this.solicitudEnviada=false;

      let solicitud:Solicitud={
        dni:this.miFormulario.get('dni')?.value,
        estado:false,
        password:this.miFormulario.get('newPass')?.value
      }

      this.loginService.getSolicitudes().subscribe((dato)=>{


        for (const solicitud of dato) {
            if(solicitud.dni == this.miFormulario.get('dni')?.value){
              this.existeSolicitud=true; 
            }
        }

        if(!this.existeSolicitud){
          this.loginService.enviarSolicitud(solicitud).subscribe((dato)=>{
            this.solicitudEnviada=true;
         })
        }

      })

    }else{
      this.error=true;
    }

  }

  goToLogin(){
    this.router.navigate([""]);
  }

}
