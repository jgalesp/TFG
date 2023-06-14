package com.paquete.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.paquete.dto.SociosClubDTO;
import com.paquete.entity.RolesEntity;
import com.paquete.entity.SociosClubEntity;
import com.paquete.excepciones.ResourceNotFoundException;
import com.paquete.repositorios.SociosClubRepository;
import com.paquete.service.SociosClubService;

@Service
public class SociosClubServiceImpl implements SociosClubService{
	
	@Autowired SociosClubRepository repositorio;
	@Autowired EventosServiceImpl eventosService;
	
	public SociosClubDTO toDTO(SociosClubEntity socio) {
		
		String rolString = null;
		
		for (RolesEntity rol : socio.getRoles()) {
			rolString = rol.getName();
		}
		
		return new SociosClubDTO(socio.getDNI(), socio.getNombre(), socio.getApellidos(), socio.getDireccion(),
				socio.getEmail(), socio.getPassword(), socio.getTelefono(), rolString);
	}

	public SociosClubEntity toEntity(SociosClubDTO socio) {
		
		return new SociosClubEntity(socio.getDni(), socio.getNombre(), socio.getApellidos(), socio.getDireccion(),
				socio.getEmail(), socio.getPassword(), socio.getTelefono());
	}
	
	public SociosClubEntity getUserByEmail(String email) {
		return repositorio.findByEmail(email).orElseThrow(()-> new ResourceNotFoundException(email));
	}
	
	
	@Override
	public List<SociosClubEntity> findAll() {
		return repositorio.findAll(); 
	}

	@Override
	public Page<SociosClubEntity> findAll(Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public SociosClubEntity findByDNI(String DNI) {
		// TODO Auto-generated method stub
		return repositorio.findByDNI(DNI);
	}

	@Override

	public SociosClubEntity save(SociosClubEntity socio) {
		// TODO Auto-generated method stub
		return repositorio.save(socio);
	}

	@Override
	public void deleteById(String DNI) {
		// TODO Auto-generated method stub
		repositorio.deleteById(DNI);
		
	}

}
