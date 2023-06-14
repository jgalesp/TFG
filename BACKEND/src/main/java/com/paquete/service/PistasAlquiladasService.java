package com.paquete.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.paquete.entity.PistasAlquiladasEntity;
import com.paquete.utils.PrimaryKeysPistasAlquiladas;

public interface PistasAlquiladasService {
	
	public List<PistasAlquiladasEntity> findAllByFechaInicio();
	
	public Page<PistasAlquiladasEntity> findAll(Pageable pageable);
	
	public List<PistasAlquiladasEntity> findById(PrimaryKeysPistasAlquiladas clavesPrimarias);
	
	public PistasAlquiladasEntity save(PistasAlquiladasEntity alquiler);
	
	public void deleteById(PrimaryKeysPistasAlquiladas clavesPrimarias);

}
