import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DarAltaComponentComponent } from './Components/Shared/dar-alta-component/dar-alta-component.component';
import { DashboardComponent } from './Components/Shared/dashboard/dashboard.component';
import { LoginComponent } from './Components/Shared/login/login.component';
import { EventosComponent } from './Components/admin/Evento/eventos/eventos.component';
import { NewEventoComponent } from './Components/admin/Evento/new-evento/new-evento.component';
import { NewPistaComponent } from './Components/admin/new-pista/new-pista.component';
import { PistasComponent } from './Components/admin/pistas/pistas.component';
import { ReservarComponent } from './Components/User/reservar/reservar.component';
import { SociosComponent } from './Components/admin/socios/socios.component';
import { SolicitudesComponent } from './Components/admin/solicitudes/solicitudes.component';
import { UpdatePistaComponent } from './Components/admin/update-pista/update-pista.component';
import { ReservasSocioComponent } from './Components/User/reservas-socio/reservas-socio.component';
import { EventosSociosComponent } from './Components/User/eventos-socios/eventos-socios.component';
import { TotalReservasComponent } from './Components/Management/total-reservas/total-reservas.component';
import { MantenimientoComponent } from './Components/Management/mantenimiento/mantenimiento.component';
import { IndicenciasComponent } from './Components/Management/indicencias/indicencias.component';
import { NewIncidenciaComponent } from './Components/Management/new-incidencia/new-incidencia.component';
import { LoginGuard } from './Guards/login.guard';


const routes: Routes = [
  
  {path: 'darAlta', component:DarAltaComponentComponent},
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent, canActivate: [LoginGuard]},
  {path: 'reservar', component:ReservarComponent, canActivate: [LoginGuard]},
  {path: 'pista', component:PistasComponent, canActivate: [LoginGuard]},
  {path: 'nuevaPista', component:NewPistaComponent, canActivate: [LoginGuard]},
  {path: 'updatePista/:idPista', component:UpdatePistaComponent, canActivate: [LoginGuard]},
  {path: 'usuario', component:SociosComponent, canActivate: [LoginGuard]},
  {path: 'eventos', component:EventosComponent, canActivate: [LoginGuard]},
  {path: 'nuevoEvento', component:NewEventoComponent, canActivate: [LoginGuard]},
  {path: 'solicitudes', component:SolicitudesComponent, canActivate: [LoginGuard]},
  {path: 'misReservas', component:ReservasSocioComponent, canActivate: [LoginGuard]},
  {path: 'misEventos', component:EventosSociosComponent, canActivate: [LoginGuard]},
  {path: 'totalReservas', component:TotalReservasComponent, canActivate: [LoginGuard]},
  {path: 'mantenimiento', component:MantenimientoComponent, canActivate: [LoginGuard]},
  {path: 'incidencias', component:IndicenciasComponent, canActivate: [LoginGuard]},
  {path: 'newIncidencia', component:NewIncidenciaComponent, canActivate: [LoginGuard]},
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: '**', redirectTo:'login'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard],
})
export class AppRoutingModule { }
