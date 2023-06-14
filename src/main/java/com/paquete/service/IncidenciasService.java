package com.paquete.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.paquete.entity.IncidenciasEntity;

public interface IncidenciasService {
	
	public List<IncidenciasEntity> findAll();
	
	public Page<IncidenciasEntity> findAll(Pageable pageable);
	
	public IncidenciasEntity findById(Long idIncidencia);
	
	public IncidenciasEntity save(IncidenciasEntity incidencia);
	
	public void deleteById(Long idIncidencia);

}
