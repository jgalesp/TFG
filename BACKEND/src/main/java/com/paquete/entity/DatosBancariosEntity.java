package com.paquete.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity
@Table(name="DatosBancarios")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class DatosBancariosEntity{
	

	
	@Id
	private long numeroTarjeta;
	
	@Column(name="fechaCaducidad")
	private Date fechaCaducidad;
	
	@OneToOne()
	@JoinColumn(name="DNI", referencedColumnName = "DNI", unique=true)
	private SociosClubEntity socio;
	
	

}
