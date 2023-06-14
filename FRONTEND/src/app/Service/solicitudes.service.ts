import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Solicitud } from '../Interfaces/SolicitudInterface';
import { HttpClient } from '@angular/common/http';
import { User } from '../Interfaces/UserInterface';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  


  constructor(private router:Router, @Inject(HttpClient) private HttpClient: HttpClient) {   
  }
  private URL = "http://CentroDeportivoHermanosMachado.us-east-1.elasticbeanstalk.com/solicitudes";
  private URLuser = "http://CentroDeportivoHermanosMachado.us-east-1.elasticbeanstalk.com/listaCargadaSocios";
  private URLSociosClub = "http://CentroDeportivoHermanosMachado.us-east-1.elasticbeanstalk.com/sociosClub";


  obtenerSolicitudes():Observable<Solicitud[]>{
    return this.HttpClient.get<Solicitud[]>(this.URL);
  }

  obtenerListaSocios():Observable<User[]>{
    return this.HttpClient.get<User[]>(this.URLuser);
  }

  obtenerListaSociosClub():Observable<User[]>{
    return this.HttpClient.get<User[]>(this.URLSociosClub);
  }

  cancelarAlta(dni:string):Observable<Object>{
    return this.HttpClient.delete(`${this.URL}/${dni}`);
  }

  darAlta(newSocio:User):Observable<Object>{
    return this.HttpClient.post<Object>(this.URLSociosClub, newSocio);
  }

  modificar(solicitud:Solicitud):Observable<Object>{
    return this.HttpClient.put(`${this.URL}/${solicitud.dni}`, solicitud);
  }

  updateUser(user:User):Observable<Object>{
    return this.HttpClient.put(`${this.URLSociosClub}/password/${user.dni}`, user);
  }

  updateUserWithoutPassword(user:User):Observable<Object>{
    return this.HttpClient.put(`${this.URLSociosClub}/${user.dni}`, user);
  }

  getUserByEmail(email:string): Observable<User>{
    return this.HttpClient.get<User>(`${this.URLSociosClub}/email/${email}`);
  }

  

}
