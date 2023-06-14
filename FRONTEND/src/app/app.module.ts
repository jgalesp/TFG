import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/Shared/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { DarAltaComponentComponent } from './Components/Shared/dar-alta-component/dar-alta-component.component';
import { ReservarComponent } from './Components/User/reservar/reservar.component';
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
import { DashboardComponent } from './Components/Shared/dashboard/dashboard.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { SolicitudesComponent } from './Components/admin/solicitudes/solicitudes.component';
import { PistasComponent } from './Components/admin/pistas/pistas.component';
import { NewPistaComponent } from './Components/admin/new-pista/new-pista.component';
import { UpdatePistaComponent } from './Components/admin/update-pista/update-pista.component';
import { SociosComponent } from './Components/admin/socios/socios.component';
import { EventosComponent } from './Components/admin/Evento/eventos/eventos.component';
import { NewEventoComponent } from './Components/admin/Evento/new-evento/new-evento.component';
import { ReservasSocioComponent } from './Components/User/reservas-socio/reservas-socio.component';
import { EventosSociosComponent } from './Components/User/eventos-socios/eventos-socios.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { TotalReservasComponent } from './Components/Management/total-reservas/total-reservas.component';
import { MantenimientoComponent } from './Components/Management/mantenimiento/mantenimiento.component';
import { IndicenciasComponent } from './Components/Management/indicencias/indicencias.component';
import { NewIncidenciaComponent } from './Components/Management/new-incidencia/new-incidencia.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DarAltaComponentComponent,
    ReservarComponent,
    NavbarComponent,
    DashboardComponent,
    FooterComponent,
    SolicitudesComponent,
    PistasComponent,
    NewPistaComponent,
    UpdatePistaComponent,
    SociosComponent,
    EventosComponent,
    NewEventoComponent,
    ReservasSocioComponent,
    EventosSociosComponent,
    TotalReservasComponent,
    MantenimientoComponent,
    IndicenciasComponent,
    NewIncidenciaComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    NgxPaginationModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
