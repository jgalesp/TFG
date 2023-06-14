package com.paquete.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paquete.entity.SolicitudesEntity;

public interface SolicitudesRepository extends JpaRepository<SolicitudesEntity, String> {

	public SolicitudesEntity findBydni(String DNI);
	
}
