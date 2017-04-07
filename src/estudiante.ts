export class Estudiante {

	nombre:string;
	apellidoPaterno:string;
	apellidoMaterno:string;

	constructor( nombre:string, apellidoPaterno:string, apellidoMaterno?:string ) {
		this.nombre = nombre;
		this.apellidoPaterno = apellidoPaterno;
		this.apellidoMaterno = apellidoMaterno;
	}

}