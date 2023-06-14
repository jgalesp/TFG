package com.paquete.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paquete.entity.ListaCargadaSociosEntity;

public interface ListaCargadaRepository extends JpaRepository<ListaCargadaSociosEntity, String> {

}
