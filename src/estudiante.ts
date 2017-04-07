import { Persona } from "./persona";

export class Estudiante implements Persona {

	constructor( public nombre:string, public apellidoPaterno:string, public apellidoMaterno?:string ) {

	}

}