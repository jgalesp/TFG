import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../Interfaces/EventoInterface';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  

  constructor(@Inject(HttpClient) private HttpClient: HttpClient) { }

  private URL = "http://CentroDeportivoHermanosMachado.us-east-1.elasticbeanstalk.com/eventos";
  private URLInscri = 'http://CentroDeportivoHermanosMachado.us-east-1.elasticbeanstalk.com/inscripcion';

  getEventos():Observable<Evento[]>{
    return this.HttpClient.get<Evento[]>(this.URL); 
  }

  nuevoEvento(datosEvento:any):Observable<Object> {
    return this.HttpClient.post<Object>(this.URL,datosEvento);
  }

  deleteEvento(idEvento:number):Observable<Object>{
    return this.HttpClient.delete(`${this.URL}/${idEvento}`);
  }

  inscripcion(datosInscripcion:any):Observable<Object>{
    return this.HttpClient.post<Object>(this.URLInscri,datosInscripcion);
  }

}
