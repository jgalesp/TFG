package com.paquete.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class IncidenciasDTO {

	private long idIncidencia;
	private String descripcion;
	private String estado;
	private String nivel;
	private long idPista;
	
}
