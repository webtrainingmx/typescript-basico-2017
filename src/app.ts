import { Estudiante } from "./estudiante";

export class App {

	estudiantes:Array<Estudiante> = [];

	constructor() {
		this.agregarEstudiante( new Estudiante( "Bruce", "Wayne" ) );
		this.agregarEstudiante( new Estudiante( "Clark", "Kent" ) );

		this.listarEstudiantes();
	}

	agregarEstudiante( estudiante:Estudiante ) {
		this.estudiantes.push( estudiante );
	}

	eliminarEstudiante( estudiante:Estudiante ) {

	}

	listarEstudiantes() {
		this.estudiantes.forEach( function( estudiante ) {
			console.log( estudiante );
		} );
	}

}