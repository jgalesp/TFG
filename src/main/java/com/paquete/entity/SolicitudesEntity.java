package com.paquete.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity
@Table (name="Solicitudes")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class SolicitudesEntity {

	@Id
	private String dni;
	
	@Column(name="estado")
	private boolean estado;
	
	@Column(name="password")
	private String password;
	
}
