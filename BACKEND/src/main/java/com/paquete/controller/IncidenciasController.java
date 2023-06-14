package com.paquete.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.paquete.dto.IncidenciasDTO;
import com.paquete.entity.IncidenciasEntity;
import com.paquete.impl.IncidenciasServiceImpl;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class IncidenciasController {

	@Autowired
	private IncidenciasServiceImpl servicio;
	
	@GetMapping("/incidencias")
	public List<IncidenciasDTO> listaIncidencias(){
		
		List<IncidenciasDTO> incidencia = new ArrayList<>();
		List<IncidenciasEntity> incidenciaEntity = servicio.findAll();
		
		for (IncidenciasEntity incidenciaEntity2 : incidenciaEntity) {
			IncidenciasDTO dto;
			try {
				dto = servicio.toDTO(incidenciaEntity2);
				incidencia.add(dto);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return incidencia;
	}
	
	
	@PostMapping("/incidencias")
	public ResponseEntity<?> create (@RequestBody IncidenciasDTO incidencia){
		
		IncidenciasEntity entity = servicio.toEntity(incidencia);
		return ResponseEntity.status(HttpStatus.CREATED).body(servicio.save(entity));
	}
	
	@PutMapping("/incidencias/{idIncidencia}")
	public void modificarPista(@PathVariable Long idIncidencia, @RequestBody IncidenciasDTO incidenciasData){
		IncidenciasEntity incidencia = servicio.findById(idIncidencia);
		
		incidencia.setEstado(incidenciasData.getEstado());
		servicio.save(incidencia);
	}
	
	@DeleteMapping("/incidencias/{idIncidencia}")
	public void borrarIncidencia(@PathVariable Long idIncidencia){
		servicio.deleteById(idIncidencia);
	}
	
	
}
