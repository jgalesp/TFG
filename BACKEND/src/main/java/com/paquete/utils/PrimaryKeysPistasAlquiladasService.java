package com.paquete.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paquete.impl.PistasServiceImpl;
import com.paquete.impl.SociosClubServiceImpl;

@Service
public class PrimaryKeysPistasAlquiladasService {
	
	@Autowired SociosClubServiceImpl servicioSocios;
	@Autowired PistasServiceImpl pistas;
	
	
	public PrimaryKeysPistasAlquiladas toEntity(PrimaryKeysPistasAlquiladasDTO primaryKey) {
		return new PrimaryKeysPistasAlquiladas(primaryKey.getFechaInicio(), primaryKey.getFechaFin(), pistas.findById(primaryKey.getIdPista()), servicioSocios.findByDNI(primaryKey.getDni()));
	}

}
