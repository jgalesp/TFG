package com.paquete.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.paquete.entity.EventosEntity;
import com.paquete.excepciones.ResourceNotFoundException;
import com.paquete.repositorios.EventosRepository;

@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RestController
public class EventosController {
	
	@Autowired private EventosRepository repositorio;
	
	@GetMapping("/eventos")
	public List<EventosEntity> listaEventos(){
		List<EventosEntity> eventos = repositorio.findAll();
		return eventos;
	}
	
	@PostMapping("/eventos")
	public ResponseEntity<?> create (@RequestBody EventosEntity evento){
		return ResponseEntity.status(HttpStatus.CREATED).body(repositorio.save(evento));
	}
	
	@DeleteMapping("/eventos/{id}")
	public void borrarPista(@PathVariable long id){
		EventosEntity evento = repositorio.findById(id).orElseThrow(()-> new ResourceNotFoundException(id+""));
		
		repositorio.deleteById(id);
	}
	
}
