import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Reserva } from '../Interfaces/ReservaInterface';
import { Observable } from 'rxjs';
import { PkPistasAlquiladas } from '../Interfaces/PkPistasAlquiladasInterface';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(@Inject(HttpClient) private HttpClient: HttpClient) { }

  private URL = "http://CentroDeportivoHermanosMachado.us-east-1.elasticbeanstalk.com/pistasAlquiladas";


  reservar(reserva:Reserva):Observable<Object>{
    return this.HttpClient.post<Object>(this.URL, reserva);
  }

  getReservas():Observable<Reserva[]>{
    return this.HttpClient.get<Reserva[]>(this.URL); 
  }

  getTotalReservas():Observable<PkPistasAlquiladas[]>{
    return this.HttpClient.get<PkPistasAlquiladas[]>(this.URL+'/management'); 
  }

  getByDNI(dni:string):Observable<PkPistasAlquiladas[]>{
    return this.HttpClient.get<PkPistasAlquiladas[]>(`${this.URL}/${dni}`); 
  }

  updateReserva(item:Reserva):Observable<Object>{
    return this.HttpClient.put(`${this.URL}`, item);
  }

}
