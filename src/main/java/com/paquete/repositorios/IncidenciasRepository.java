package com.paquete.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paquete.entity.IncidenciasEntity;

public interface IncidenciasRepository extends JpaRepository<IncidenciasEntity, Long> {

}
