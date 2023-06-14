package com.paquete.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.paquete.entity.SolicitudesEntity;
import com.paquete.repositorios.SolicitudesRepository;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})

public class SolicitudesController {

	@Autowired private SolicitudesRepository repositorio;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@GetMapping("/solicitudes")
	public List<SolicitudesEntity> listaSolicitudes(){
		List<SolicitudesEntity> solicitudes = repositorio.findAll();
		return solicitudes;
	}
	
	@PostMapping("/solicitudes")
	public ResponseEntity<?> create (@RequestBody SolicitudesEntity solicitud){
		
		solicitud.setPassword(passwordEncoder.encode(solicitud.getPassword()));
		
		return ResponseEntity.status(HttpStatus.CREATED).body(repositorio.save(solicitud));
	}
	
	@PutMapping("/solicitudes/{dni}")
	public void modificarPista(@PathVariable String dni, @RequestBody SolicitudesEntity data){
		SolicitudesEntity solicitud = repositorio.findBydni(dni);
		
		solicitud.setEstado(data.isEstado());
		repositorio.save(solicitud);
	}
	
	@DeleteMapping("/solicitudes/{dni}")
	public void borrarPista(@PathVariable String dni){
		repositorio.deleteById(dni);
	}
	
}
