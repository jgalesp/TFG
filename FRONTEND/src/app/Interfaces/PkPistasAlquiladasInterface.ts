import { User } from "./UserInterface";
import { Pista } from "./PistaInterface";

export interface PkPistasAlquiladas{
  mantenimiento:boolean;  
  activo:boolean;
  pkPistasAlquiladas: {
        fechaInicio: string;
        fechaFin: string;
      pista: Pista
      socio: User
    };
}