package com.paquete.entity;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.paquete.utils.PrimaryKeysPistasAlquiladas;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity
@Table (name="pistasAlquiladas")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class PistasAlquiladasEntity {

	@EmbeddedId
	private PrimaryKeysPistasAlquiladas pkPistasAlquiladas;
	
	@Column(name="mantenimiento")
	private boolean mantenimiento;
	
	@Column (name="activo")
	private boolean activo;
	
		
}
