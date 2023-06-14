package com.paquete.dto;

import java.sql.Date;
import java.util.Set;

import com.paquete.entity.SociosClubEntity;

import lombok.Data;

@Data  
public class EventosDTO {

	
	private long idEvento;
	private Date fechaInicio;
	private Date fechaFin;
	private String nombreEvento;
	private String dia;
	private String hora;
	private String deporte;
	private Set<SociosClubEntity> socios;
	private boolean borrado;
	
	public EventosDTO(long idEvento2, java.util.Date fechaInicio2, java.util.Date fechaFin2, String nombreEvento2,
			String dia2, String hora2, String deporte, boolean borrado) {
		// TODO Auto-generated constructor stub
	}
	
	
}
