package com.paquete.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.paquete.dto.IncidenciasDTO;
import com.paquete.dto.PistasDTO;
import com.paquete.entity.IncidenciasEntity;
import com.paquete.entity.PistasEntity;
import com.paquete.excepciones.ResourceNotFoundException;
import com.paquete.repositorios.PistasRepository;
import com.paquete.service.PistasService;

@Service
public class PistasServiceImpl implements PistasService {

	@Autowired
	private PistasRepository pistasRepository;
	
	@Autowired private IncidenciasServiceImpl incidenciasService;
	
	public PistasDTO toDTO(PistasEntity pista) {
		return new PistasDTO(pista.getIdPista(), pista.getNombrePista(), pista.getDescripcion(), pista.getDeporte(),
				pista.getPrecio());
	}

	public PistasEntity toEntity(PistasDTO pista) {
		
		List<IncidenciasEntity> incidencias = new ArrayList<>();
		for (IncidenciasDTO incidencia : pista.getIncidencias()) {
			incidencias.add(incidenciasService.toEntity(incidencia));
		}
		
		return new PistasEntity(pista.getIdPista(), pista.getNombrePista(), pista.getDescripcion(), pista.getDeporte(),
				pista.getPrecio(), incidencias);
	}

	@Override
	public List<PistasEntity> findAll() {
		return pistasRepository.findAll();
	}

	@Override
	public Page<PistasEntity> findAll(Pageable pageable) {
		return pistasRepository.findAll(pageable);
	}

	@Override
	public PistasEntity findById(Long idPista) {
		PistasEntity pista = pistasRepository.findById(idPista).orElseThrow(()->new ResourceNotFoundException("No se ha encontrado la pista"));
		return pista;
	}

	@Override
	public PistasEntity save(PistasEntity pista) {
		return pistasRepository.save(pista);
	}

	@Override
	public void deleteById(Long idPista) {
		pistasRepository.deleteById(idPista);

	}

}
