package com.paquete.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.paquete.dto.DatosBancariosDTO;
import com.paquete.entity.DatosBancariosEntity;
import com.paquete.entity.SociosClubEntity;
import com.paquete.excepciones.ResourceNotFoundException;
import com.paquete.repositorios.DatosBancariosRepository;
import com.paquete.service.DatosBancariosService;
import com.paquete.service.SociosClubService;

@Service
public class DatosBancariosServiceImpl implements DatosBancariosService{

	@Autowired private SociosClubService sociosClubService;
	@Autowired private DatosBancariosRepository datosBancariosService;
	
	public DatosBancariosDTO toDTO(DatosBancariosEntity datos) {
		return new DatosBancariosDTO(datos.getSocio().getDNI(), datos.getFechaCaducidad(), datos.getNumeroTarjeta());
	}

	public DatosBancariosEntity toEntity(DatosBancariosDTO datos) {
		
		SociosClubEntity socio = sociosClubService.findByDNI(datos.getDni());
		return new DatosBancariosEntity(datos.getNumeroTarjeta(),datos.getFechaCaducidad(), socio);
	}
	
	
	
	@Override
	public List<DatosBancariosEntity> findAll() {
		return datosBancariosService.findAll();
	}

	@Override
	public Page<DatosBancariosEntity> findAll(Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DatosBancariosEntity findById(Long numeroTarjeta) {
		return datosBancariosService.findById(numeroTarjeta).orElseThrow(() -> new ResourceNotFoundException("Datos no encontrados"));
	}

	@Override
	public DatosBancariosEntity save(DatosBancariosEntity datoBancario) {
		return datosBancariosService.save(datoBancario);
	}

	@Override
	public void deleteById(Long numeroTarjeta) {
		 datosBancariosService.deleteById(numeroTarjeta);
		
	}


}
