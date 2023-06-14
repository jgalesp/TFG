package com.paquete.utils;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.beans.factory.annotation.Autowired;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.paquete.entity.PistasEntity;
import com.paquete.entity.SociosClubEntity;
import com.paquete.impl.PistasServiceImpl;
import com.paquete.impl.SociosClubServiceImpl;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data @AllArgsConstructor @NoArgsConstructor

public class PrimaryKeysPistasAlquiladas implements Serializable {
	
	

	
	@Column(name="fechaInicio")
	private Date fechaInicio;
	
	@Column(name="fechaFin")
	private Date fechaFin;
	
	@ManyToOne(fetch = FetchType.LAZY,  cascade = CascadeType.ALL)
	@JoinColumn(name="IDPista")
	@JsonIgnoreProperties("idPista")
	private PistasEntity pista;
	
	
	
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name="DNI")
	@JsonIgnoreProperties("DNI")
	private SociosClubEntity socio;
	
	
	
	
	
	
	
}
