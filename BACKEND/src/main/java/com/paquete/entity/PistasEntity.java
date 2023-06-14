package com.paquete.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="Pistas")
@Data @AllArgsConstructor @NoArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class PistasEntity {
	
	@Id  @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idPista;
	
	@Column(name="nombrePista")
	private String nombrePista;
	
	@Column(name="descripcion")
	private String descripcion;
	
	@Column(name="deporte")
	private String deporte;
	
	@Column(name="precio")
	private float precio;

	public PistasEntity(long idPista, String nombrePista, String descripcion, String deporte, float precio) {
		this.idPista = idPista;
		this.nombrePista = nombrePista;
		this.descripcion = descripcion;
		this.deporte = deporte;
		this.precio = precio;
	}

	@JsonIgnore
	@OneToMany(mappedBy = "pista", cascade = CascadeType.ALL)
	private List<IncidenciasEntity> incidencias = new ArrayList<>();
	
	
	

}
