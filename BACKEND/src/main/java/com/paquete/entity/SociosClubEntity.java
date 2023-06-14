package com.paquete.entity;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity
@Table (name="SociosClub")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class SociosClubEntity {

	@Id 
	private String DNI;
	
	@Column(name="nombre")
	private String nombre;
	
	@Column(name="apellidos")
	private String apellidos;
	
	@Column(name="direccion")
	private String direccion;
	
	@Column(name="email")
	private String email;
	
	@Column(name="password")
	private String password;
	
	@Column(name="telefono")
	private long telefono;
	
		
	public SociosClubEntity(String dNI, String nombre, String apellidos, String direccion, String email,
			String password, long telefono) {
		this.DNI = dNI;
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.direccion = direccion;
		this.email = email;
		this.password = password;
		this.telefono = telefono;
	}

	
	
	@OneToOne(mappedBy="socio", cascade = CascadeType.ALL)
	private DatosBancariosEntity datosBancarios;


	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(
        name = "users_roles",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "role_id")
    )
	 private Set<RolesEntity> roles = new HashSet<>();

	@JsonIgnore
	@ManyToMany(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
        name = "users_events",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "idEvento")
    )
	 private Set<EventosEntity> eventos = new HashSet<>();
	
	 @Override
	    public int hashCode() {
	        return Objects.hash(DNI);
	    }

	    @Override
	    public boolean equals(Object obj) {
	        if (this == obj) {
	            return true;
	        }
	        if (obj == null || getClass() != obj.getClass()) {
	            return false;
	        }
	        SociosClubEntity other = (SociosClubEntity) obj;
	        return Objects.equals(DNI, other.DNI);
	    }
}
