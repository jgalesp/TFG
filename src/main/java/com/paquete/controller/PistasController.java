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

import com.paquete.dto.PistasDTO;
import com.paquete.entity.PistasEntity;
import com.paquete.impl.PistasServiceImpl;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})

public class PistasController {

	@Autowired
	private PistasServiceImpl servicio;
	
	@GetMapping("/pistas")
	public List<PistasDTO> listaPistas(){
		
		List<PistasDTO> pistas = new ArrayList<>();
		List<PistasEntity> pistasEntity = servicio.findAll();
		
		for (PistasEntity pistasEntity2 : pistasEntity) {
			PistasDTO dto;
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
	
	@GetMapping("/pistas/{idPista}")
	public ResponseEntity<?> read(@PathVariable Long idPista){
		PistasEntity pista = servicio.findById(idPista);
		
		PistasDTO pistaDTO = servicio.toDTO(pista);
		
		return ResponseEntity.ok(pistaDTO);
	}
	
	
	@PostMapping("/pistas")
	public ResponseEntity<?> create (@RequestBody PistasDTO pista){
		
		PistasEntity entity = servicio.toEntity(pista);
		return ResponseEntity.status(HttpStatus.CREATED).body(servicio.save(entity));
	}
	
	@PutMapping("/pistas/{idPista}")
	public void modificarPista(@PathVariable Long idPista, @RequestBody PistasDTO pistasData){
		PistasEntity pista = servicio.findById(idPista);
		
		pista.setNombrePista(pistasData.getNombrePista());
		pista.setDescripcion(pistasData.getDescripcion());
		pista.setDeporte(pistasData.getDeporte());
		pista.setPrecio(pistasData.getPrecio());
		servicio.save(pista);
	}
	
	
	@DeleteMapping("/pistas/{idPista}")
	public void borrarPista(@PathVariable Long idPista){
		servicio.deleteById(idPista);
	}
	
	
}
