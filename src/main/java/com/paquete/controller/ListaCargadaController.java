package com.paquete.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.paquete.entity.ListaCargadaSociosEntity;
import com.paquete.repositorios.ListaCargadaRepository;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class ListaCargadaController {

	@Autowired private ListaCargadaRepository repositorio;
	
	@GetMapping("/listaCargadaSocios")
	public List<ListaCargadaSociosEntity> listaSocios(){
		List<ListaCargadaSociosEntity> incidenciaEntity = repositorio.findAll();
		return incidenciaEntity;
	}
}
