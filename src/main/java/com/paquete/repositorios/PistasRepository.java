package com.paquete.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paquete.entity.PistasEntity;

public interface PistasRepository extends JpaRepository<PistasEntity, Long> {

}
