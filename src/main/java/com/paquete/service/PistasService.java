package com.paquete.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.paquete.entity.PistasEntity;

public interface PistasService {

	public List<PistasEntity> findAll();
	
	public Page<PistasEntity> findAll(Pageable pageable);
	
	public PistasEntity findById(Long idPista);
	
	public PistasEntity save(PistasEntity pista);
	
	public void deleteById(Long idPista);
	
}
