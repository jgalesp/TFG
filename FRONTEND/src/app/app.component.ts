import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  title = 'Centro Deportivo Hermanos Machado';
  login:boolean=false;

  isUserLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token !== null; // Devuelve true si el token existe, o false si no existe.
  }

}
