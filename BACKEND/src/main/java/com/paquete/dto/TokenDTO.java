package com.paquete.dto;

import lombok.Data;

@Data
public class TokenDTO {

	private String tokenAcceso;
	private String tipoToken = "Bearer";
	
	public TokenDTO(String tokenAcceso) {
		this.tokenAcceso = tokenAcceso;
	}
	
	
	
}
