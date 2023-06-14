import { User } from "./UserInterface";

export interface Evento{
    idEvento:number;
    dia:string;
    fechaFin:Date;
    fechaInicio:Date;
    hora:string;
    nombreEvento:string;
    deporte:string;
    socios:User[];
    inscrito:boolean;
    borrado:boolean
}