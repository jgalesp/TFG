package com.paquete.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.paquete.dto.PistasAlquiladasDTO;
import com.paquete.entity.PistasAlquiladasEntity;
import com.paquete.entity.PistasEntity;
import com.paquete.entity.SociosClubEntity;
import com.paquete.repositorios.PistasAlquiladasRepository;
import com.paquete.service.PistasAlquiladasService;
import com.paquete.service.PistasService;
import com.paquete.service.SociosClubService;
import com.paquete.utils.PrimaryKeysPistasAlquiladas;

@Service
public class PistasAlquiladasServiceImpl implements PistasAlquiladasService{

	@Autowired private PistasService pistasService;
	@Autowired private SociosClubService sociosClubService;
	@Autowired private PistasAlquiladasRepository pistasAlquiladasRepository;
	
	@Override
	public List<PistasAlquiladasEntity> findAllByFechaInicio() {
		// TODO Auto-generated method stub
		return pistasAlquiladasRepository.findAllByFechaInicio();
	}
	
	public PistasAlquiladasDTO toDTO(PistasAlquiladasEntity pista) {
		return new PistasAlquiladasDTO(pista.getPkPistasAlquiladas().getFechaInicio(), pista.getPkPistasAlquiladas().getFechaFin(), pista.getPkPistasAlquiladas().getPista().getIdPista(), pista.getPkPistasAlquiladas().getSocio().getDNI(), pista.isMantenimiento()
				, pista.isActivo());
	}

	public PistasAlquiladasEntity toEntity(PistasAlquiladasDTO pista) {
		
		PistasEntity pistaEntity = pistasService.findById(pista.getIdPista());
		
		SociosClubEntity socio = sociosClubService.findByDNI(pista.getDni());
		
		PrimaryKeysPistasAlquiladas claves = new PrimaryKeysPistasAlquiladas(pista.getFechaInicio(), pista.getFechaFin(), pistaEntity, socio);
		
		return new PistasAlquiladasEntity(claves, pista.isMantenimiento(), pista.isActivo());
	}

	@Override
	public Page<PistasAlquiladasEntity> findAll(Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<PistasAlquiladasEntity> findById(PrimaryKeysPistasAlquiladas clavesPrimarias) {
		
		List<PistasAlquiladasEntity> arrayPistas = new ArrayList<>();
		
		arrayPistas = pistasAlquiladasRepository.findBypkPistasAlquiladas(clavesPrimarias);
		
		return arrayPistas;
	}
	
	

	@Override
	public PistasAlquiladasEntity save(PistasAlquiladasEntity alquiler) {
		
		return pistasAlquiladasRepository.save(alquiler);
	}

	@Override
	public void deleteById(PrimaryKeysPistasAlquiladas clavesPrimarias) {
		pistasAlquiladasRepository.deleteById(clavesPrimarias);
		
	}

	

	

}
