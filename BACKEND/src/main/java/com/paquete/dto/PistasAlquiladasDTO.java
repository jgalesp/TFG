package com.paquete.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class PistasAlquiladasDTO {
	
	private Date fechaInicio;
	private Date fechaFin;
	private long idPista;
	private String dni;
	private boolean mantenimiento;
	private boolean activo;
	 
	
	
}
