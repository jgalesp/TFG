package com.paquete.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.paquete.dto.IncidenciasDTO;
import com.paquete.entity.IncidenciasEntity;
import com.paquete.entity.PistasEntity;
import com.paquete.excepciones.ResourceNotFoundException;
import com.paquete.repositorios.IncidenciasRepository;
import com.paquete.service.IncidenciasService;

@Service
public class IncidenciasServiceImpl implements IncidenciasService{
	
	@Autowired private PistasServiceImpl pistasService;
	@Autowired private IncidenciasRepository incidenciasService;
	
	public IncidenciasDTO toDTO(IncidenciasEntity incidencia) {
		return new IncidenciasDTO(incidencia.getIdIncidencia(), incidencia.getDescripcion(), incidencia.getEstado(), incidencia.getNivel(),
				incidencia.getPista().getIdPista());
	}

	public IncidenciasEntity toEntity(IncidenciasDTO incidencia) {
		
		PistasEntity pista = pistasService.findById(incidencia.getIdPista());
		
		return new IncidenciasEntity(incidencia.getIdIncidencia(), incidencia.getDescripcion(), incidencia.getEstado(), incidencia.getNivel(),
				pista);
	}
	
	
	@Override
	public List<IncidenciasEntity> findAll() {
		return incidenciasService.findAll();
	}

	@Override
	public Page<IncidenciasEntity> findAll(Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	

	@Override
	public IncidenciasEntity save(IncidenciasEntity incidencia) {
		return incidenciasService.save(incidencia);
	}

	@Override
	public void deleteById(Long idIncidencia) {
		incidenciasService.deleteById(idIncidencia);
		
	}

	@Override
	public IncidenciasEntity findById(Long idIncidencia) {
		return incidenciasService.findById(idIncidencia).orElseThrow(()->new ResourceNotFoundException("No se ha encontrado la incidencia"));
		
	}

}
