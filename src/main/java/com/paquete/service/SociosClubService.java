package com.paquete.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.paquete.entity.SociosClubEntity;


public interface SociosClubService {
	
	public List<SociosClubEntity> findAll();
	
	public Page<SociosClubEntity> findAll(Pageable pageable);
	
	public SociosClubEntity findByDNI(String DNI);
	
	public SociosClubEntity save(SociosClubEntity socio);
	
	public void deleteById(String DNI);

}
