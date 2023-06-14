package com.paquete.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.paquete.entity.DatosBancariosEntity;


public interface DatosBancariosService {
	
	public List<DatosBancariosEntity> findAll();
	
	public Page<DatosBancariosEntity> findAll(Pageable pageable);
	
	public DatosBancariosEntity findById(Long numeroTarjeta);
	
	public DatosBancariosEntity save(DatosBancariosEntity datoBancario);
	
	public void deleteById(Long numeroTarjeta);

}
