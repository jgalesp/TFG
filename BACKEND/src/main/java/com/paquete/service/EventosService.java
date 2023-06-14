package com.paquete.service;

import java.util.List;

import com.paquete.entity.EventosEntity;

public interface EventosService {

	public List<EventosEntity> findAll();
	
	public EventosEntity findById(Long idEvento);
	
	public EventosEntity save(EventosEntity evento);
	
	public void deleteById(Long idEvento);
}
