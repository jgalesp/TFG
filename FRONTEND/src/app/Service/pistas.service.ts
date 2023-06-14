import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pista } from '../Interfaces/PistaInterface';

@Injectable({
  providedIn: 'root'
})
export class PistasService {

  constructor(@Inject(HttpClient) private HttpClient: HttpClient) { }

  private URL = "http://CentroDeportivoHermanosMachado.us-east-1.elasticbeanstalk.com/pistas";

  getPistas():Observable<Pista[]>{
    return this.HttpClient.get<Pista[]>(this.URL); 
  }

  introducirPista(datosPista:any){
    return this.HttpClient.post<any>(this.URL, datosPista);
  }

  getById(idPista:number):Observable<Pista>{
    return this.HttpClient.get<Pista>(`${this.URL}/${idPista}`);
  }

  updatePista(datosPista:any, idPista:number):Observable<Object>{
    return this.HttpClient.put(`${this.URL}/${idPista}`, datosPista);
  }

  deletePista(idPista:number):Observable<Object>{
    return this.HttpClient.delete(`${this.URL}/${idPista}`);
  }

}
