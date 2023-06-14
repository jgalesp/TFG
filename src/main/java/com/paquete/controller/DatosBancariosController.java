package com.paquete.controller;

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

import com.paquete.dto.DatosBancariosDTO;
import com.paquete.entity.DatosBancariosEntity;
import com.paquete.impl.DatosBancariosServiceImpl;
import com.paquete.repositorios.DatosBancariosRepository;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class DatosBancariosController {

	@Autowired
	private DatosBancariosServiceImpl servicio;
	
	@Autowired private DatosBancariosRepository repositorio;
	
	@GetMapping("/datosBancarios/{DNI}")
	public ResponseEntity<?> read(@PathVariable String DNI){
		DatosBancariosEntity datos = repositorio.findByDNI(DNI);
		
		DatosBancariosDTO datosDTO = servicio.toDTO(datos);
		
		return ResponseEntity.ok(datosDTO);
	}
	
	@PostMapping("/datosBancarios")
	public ResponseEntity<?> create (@RequestBody DatosBancariosDTO datos){
		
		DatosBancariosEntity entity = servicio.toEntity(datos);
		return ResponseEntity.status(HttpStatus.CREATED).body(servicio.save(entity));
	}
	
	@PutMapping("/datosBancarios/{DNI}")
	public void modificarDatosBancarios(@PathVariable String DNI, @RequestBody DatosBancariosDTO data){
		DatosBancariosEntity datos = repositorio.findByDNI(DNI);
		
		datos.setNumeroTarjeta(data.getNumeroTarjeta());
		datos.setFechaCaducidad(data.getFechaCaducidad());
		servicio.save(datos);
	}
	
	
	@DeleteMapping("/datosBancarios/{DNI}")
	public void borrarPista(@PathVariable String DNI){
		DatosBancariosEntity datos = repositorio.findByDNI(DNI);
		
		repositorio.deleteByNumeroTarjeta(datos.getNumeroTarjeta());
	}
	
}
