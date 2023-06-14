package com.paquete.entity;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity
@Table(name="Eventos")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})

public class EventosEntity {


	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idEvento;
	
	@Column(name="fechaInicio")
	private Date fechaInicio;
	
	@Column(name="fechaFin")
	private Date fechaFin;
	
	@Column (name="dia")
	private String dia;
	
	@Column (name="hora")
	private String hora;
	
	@Column(name="nombreEvento")
	private String nombreEvento;
	
	@Column(name="deporte")
	private String deporte;
	
	@Column(name="borrado")
	private boolean borrado;
	
	
	
	@ManyToMany(mappedBy = "eventos")
	private Set<SociosClubEntity> socios = new HashSet<>();
	
	public EventosEntity(long idEvento2, java.sql.Date fechaInicio2, java.sql.Date fechaFin2, String nombreEvento2,
			String dia2, String hora2, Set<SociosClubEntity> socios2, boolean borrado) {
		// TODO Auto-generated constructor stub
	}
	
	
	
	
}
