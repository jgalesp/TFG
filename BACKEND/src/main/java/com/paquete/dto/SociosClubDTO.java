package com.paquete.dto;

import lombok.Data;

@Data
public class SociosClubDTO {

	private String dni;
	private String nombre;
	private String apellidos;
	private String direccion;
	private String email;
	private String password;
	private long telefono;
	private String roles;
	
	
	
	
	private DatosBancariosDTO datosBancarios;
	
	
	public SociosClubDTO(String DNI, String nombre, String apellidos, String direccion, String email, String password,
			long telefono, String rol) {
		this.dni = DNI;
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.direccion = direccion;
		this.email = email;
		this.password = password;
		this.telefono = telefono;
		this.roles = rol;
		
	}



	
	


	
}
