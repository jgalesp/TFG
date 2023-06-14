package com.paquete.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="Incidencias")
@Data @AllArgsConstructor @NoArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class IncidenciasEntity {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idIncidencia;
	
	@Column(name="descripcion")
	private String descripcion;
	
	@Column(name="estado")
	private String estado;
	
	@Column (name="nivel")
	private String nivel;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="IDPista")
	@JsonIgnoreProperties("idPista")
	private PistasEntity pista;

	
	
}
