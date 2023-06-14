import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solicitud } from '../Interfaces/SolicitudInterface';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  token!:string;

  constructor(@Inject(HttpClient) private HttpClient: HttpClient) { }
  private URL = "http://CentroDeportivoHermanosMachado.us-east-1.elasticbeanstalk.com/auth/login";
  private URLSolicitud = "http://CentroDeportivoHermanosMachado.us-east-1.elasticbeanstalk.com/solicitudes";

  sendLogin(datosUsuario:any){

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200' // especificar el origen de la solicitud
    });
    return this.HttpClient.post<any>(this.URL, datosUsuario, {headers});
    
  }

  enviarSolicitud(solicitud:Solicitud):Observable<Object>{
    return this.HttpClient.post<Object>(this.URLSolicitud, solicitud);
  }


  getSolicitudes():Observable<Solicitud[]>{
    return this.HttpClient.get<Solicitud[]>(this.URLSolicitud); 
  }

 

}
