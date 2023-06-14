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
import com.paquete.dto.PistasAlquiladasDTO;
import com.paquete.entity.IncidenciasEntity;
import com.paquete.entity.PistasAlquiladasEntity;
import com.paquete.impl.PistasAlquiladasServiceImpl;
import com.paquete.repositorios.PistasAlquiladasRepository;
import com.paquete.utils.PrimaryKeysPistasAlquiladasDTO;
import com.paquete.utils.PrimaryKeysPistasAlquiladasService;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class PistasAlquiladasController {
	
	@Autowired
	private PistasAlquiladasServiceImpl servicio;
	
	@Autowired
	private PistasAlquiladasRepository repository;
	
	@Autowired private PrimaryKeysPistasAlquiladasService servicioPK;
	
	@GetMapping("/pistasAlquiladas")
	public List<PistasAlquiladasDTO> listaPistasAlquiladas(){
		
		List<PistasAlquiladasDTO> pistas = new ArrayList<>();
		List<PistasAlquiladasEntity> pistasEntity = servicio.findAllByFechaInicio();
		
		for (PistasAlquiladasEntity pistasEntity2 : pistasEntity) {
			PistasAlquiladasDTO dto;
			try {
				dto = servicio.toDTO(pistasEntity2);
				pistas.add(dto);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return pistas;
	}
	
	
	
	@GetMapping("/pistasAlquiladas/{dni}")
	public List<PistasAlquiladasEntity> read(@PathVariable("dni") String dni){
		
		List<PistasAlquiladasEntity> pistas = repository.findByDNI(dni);
		
		return pistas;
	}
	
	@GetMapping("/pistasAlquiladas/management")
	public List<PistasAlquiladasEntity> read(){
		
		List<PistasAlquiladasEntity> pistas = repository.findAllByFechaInicio();
		
		return pistas;
	}
	
	@PostMapping("/pistasAlquiladas")
	public ResponseEntity<?> create (@RequestBody PistasAlquiladasDTO pista){
		
		PistasAlquiladasEntity entity = servicio.toEntity(pista);
		return ResponseEntity.status(HttpStatus.CREATED).body(servicio.save(entity));
	}
	
	@PutMapping("/pistasAlquiladas")
	public ResponseEntity<?> update (@RequestBody PistasAlquiladasDTO pista){
		
		PistasAlquiladasEntity entity = servicio.toEntity(pista);
		entity.setActivo(pista.isActivo());
		return ResponseEntity.status(HttpStatus.CREATED).body(servicio.save(entity));
	}
	
	
	
	
	@DeleteMapping("/pistasAlquiladas")
	public void borrarPista(@RequestBody PrimaryKeysPistasAlquiladasDTO primaryKeys){
		
		servicio.deleteById(servicioPK.toEntity(primaryKeys));
	}
	

}
