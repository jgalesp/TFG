package com.paquete.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paquete.entity.EventosEntity;

public interface EventosRepository extends JpaRepository<EventosEntity, Long> {

}
