package com.paquete.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data 
public class PistasDTO {

	private long idPista;
	private String nombrePista;
	private String descripcion;
	private String deporte;
	private float precio; 
	
	private List<IncidenciasDTO> incidencias = new ArrayList<>();

	public PistasDTO(long idPista, String nombrePista, String descripcion, String deporte, float precio) {
		this.idPista = idPista;
		this.nombrePista = nombrePista;
		this.descripcion = descripcion;
		this.deporte = deporte;
		this.precio = precio;
	}
	
	
	
}
