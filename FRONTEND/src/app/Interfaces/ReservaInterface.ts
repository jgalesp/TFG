import { Pista } from "./PistaInterface";
import { User } from "./UserInterface";


export interface Reserva{
    
    fechaInicio:Date;
    fechaFin:Date;
    idPista:number;
    dni:string;
    mantenimiento?:boolean;
    activo?:boolean;
    pista:Pista|undefined;
    user:User|undefined;

}