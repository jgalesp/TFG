package com.paquete.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.paquete.entity.DatosBancariosEntity;

public interface DatosBancariosRepository extends JpaRepository<DatosBancariosEntity, Long>{

	@Query(value="SELECT * FROM datos_bancarios WHERE dni = :dNI", nativeQuery = true)
	public <Optional>DatosBancariosEntity findByDNI(String dNI);

	@Transactional
	@Modifying(clearAutomatically = true)
	@Query(value="DELETE FROM datos_bancarios WHERE numero_tarjeta = :numeroTarjeta", nativeQuery = true)
	public void deleteByNumeroTarjeta(long numeroTarjeta);
}
