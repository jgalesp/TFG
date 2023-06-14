package com.paquete.utils;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class PrimaryKeysPistasAlquiladasDTO {
	
	private Date fechaInicio;
	private Date fechaFin;
	private long idPista;
	private String dni;
	
}
