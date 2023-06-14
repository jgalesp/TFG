package com.paquete.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paquete.dto.EventosDTO;
import com.paquete.entity.EventosEntity;
import com.paquete.excepciones.ResourceNotFoundException;
import com.paquete.repositorios.EventosRepository;
import com.paquete.service.EventosService;

@Service
public class EventosServiceImpl implements EventosService{
	
	
	@Autowired EventosRepository repositorio;
	
	public EventosDTO toDTO(EventosEntity evento) {
				
		return new EventosDTO(evento.getIdEvento(), evento.getFechaInicio(), evento.getFechaFin(), evento.getNombreEvento()
				, evento.getDia(), evento.getHora(), evento.getDeporte(), evento.isBorrado());
	}
	
	public EventosEntity toEntity(EventosDTO evento) {
		
		return new EventosEntity(evento.getIdEvento(), evento.getFechaInicio(), evento.getFechaFin(), evento.getNombreEvento()
				, evento.getDia(), evento.getHora(), evento.getDeporte(), evento.isBorrado(), evento.getSocios());
	}

	

	@Override
	public List<EventosEntity> findAll() {
		return repositorio.findAll(); 
	}

	@Override
	public EventosEntity findById(Long idEvento) {
		return repositorio.findById(idEvento).orElseThrow(()-> new ResourceNotFoundException(idEvento+""));
	}

	@Override
	public EventosEntity save(EventosEntity evento) {
		return repositorio.save(evento);
	}

	@Override
	public void deleteById(Long idEvento) {
		repositorio.deleteById(idEvento); 
		
	}

}
