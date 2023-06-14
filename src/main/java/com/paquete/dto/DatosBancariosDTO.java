package com.paquete.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data @AllArgsConstructor
public class DatosBancariosDTO {

	private String dni;
	private Date fechaCaducidad;
	private long numeroTarjeta;
	
}
