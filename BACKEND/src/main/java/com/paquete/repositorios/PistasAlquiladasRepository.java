package com.paquete.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.paquete.entity.PistasAlquiladasEntity;
import com.paquete.utils.PrimaryKeysPistasAlquiladas;

public interface PistasAlquiladasRepository extends JpaRepository<PistasAlquiladasEntity, PrimaryKeysPistasAlquiladas> {

	public List<PistasAlquiladasEntity> findBypkPistasAlquiladas(PrimaryKeysPistasAlquiladas pk);
	
	@Query(value="SELECT * FROM pistas_alquiladas p WHERE p.dni = :dni", nativeQuery = true)
	public List<PistasAlquiladasEntity> findByDNI(String dni);

	@Query(value="SELECT * FROM pistas_alquiladas order by fecha_inicio", nativeQuery = true)
	public List<PistasAlquiladasEntity> findAllByFechaInicio();
	
	
	
}
