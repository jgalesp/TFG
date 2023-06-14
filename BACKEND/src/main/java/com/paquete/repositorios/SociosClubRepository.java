package com.paquete.repositorios;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.paquete.entity.SociosClubEntity;


public interface SociosClubRepository extends JpaRepository<SociosClubEntity, String> {
	
	public SociosClubEntity findByDNI(String DNI);
	
	
	@Query(value="SELECT * FROM socios_club s where s.email = :email", nativeQuery = true)
	public Optional<SociosClubEntity> findByEmail(String email);

}
