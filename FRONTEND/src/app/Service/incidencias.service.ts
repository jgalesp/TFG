import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Incidencia } from '../Interfaces/IncidenciasInterface';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {

  constructor(@Inject(HttpClient) private HttpClient: HttpClient) { }

  private URL = "http://CentroDeportivoHermanosMachado.us-east-1.elasticbeanstalk.com/incidencias";

  getIncidencias():Observable<Incidencia[]>{
    return this.HttpClient.get<Incidencia[]>(this.URL); 
  }

  introducirIncidencia(datosIncidencia:any):Observable<Object> {
    return this.HttpClient.post<Object>(this.URL,datosIncidencia);
  }

  updateIncidencia(datosIncidencia:Incidencia, idIncidencia:number):Observable<Object>{
    return this.HttpClient.put(`${this.URL}/${idIncidencia}`, datosIncidencia);
  }

}
