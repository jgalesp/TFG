package com.paquete.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.paquete.dto.SociosClubDTO;
import com.paquete.entity.SociosClubEntity;
import com.paquete.impl.EventosServiceImpl;
import com.paquete.impl.SociosClubServiceImpl;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class SociosClubController {
	
	@Autowired
	private SociosClubServiceImpl servicio;
	
	@Autowired
	private EventosServiceImpl servicioEventos;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@GetMapping("/sociosClub")
	public List<SociosClubDTO> listaSocios(){
		
		List<SociosClubDTO> socios = new ArrayList<>();
		List<SociosClubEntity> sociosEntity = servicio.findAll();
		
		for (SociosClubEntity pistasEntity2 : sociosEntity) {
			SociosClubDTO dto;
			try {
				dto = servicio.toDTO(pistasEntity2);
				socios.add(dto);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return socios;
	}
	
	@GetMapping("/sociosClub/{DNI}")
	public ResponseEntity<?> read(@PathVariable String DNI){
		SociosClubEntity socio = servicio.findByDNI(DNI);
		
		SociosClubDTO socioDTO = servicio.toDTO(socio);
		
		return ResponseEntity.ok(socioDTO);
	}
	
	@GetMapping("/sociosClub/email/{email}")
	public ResponseEntity<?> readEmail(@PathVariable String email){
		SociosClubEntity socio = servicio.getUserByEmail(email);
		
		SociosClubDTO socioDTO = servicio.toDTO(socio);
		
		return ResponseEntity.ok(socioDTO);
	}
	
	@PostMapping("/sociosClub")
	public ResponseEntity<?> create (@RequestBody SociosClubDTO socio){
		
		SociosClubEntity entity = servicio.toEntity(socio);
			
		return ResponseEntity.status(HttpStatus.CREATED).body(servicio.save(entity));
	}
	
	@PutMapping("/sociosClub/{DNI}")
	public void modificarUser(@PathVariable String DNI, @RequestBody SociosClubDTO socioData){
		SociosClubEntity socio = servicio.findByDNI(DNI);
		
			socio.setNombre(socioData.getNombre());
			socio.setApellidos(socioData.getApellidos());
			socio.setDireccion(socioData.getDireccion());
			socio.setTelefono(socioData.getTelefono());
		
		servicio.save(socio);
	}
	
	@PutMapping("/sociosClub/password/{DNI}")
	public void modificarUserPass(@PathVariable String DNI, @RequestBody SociosClubDTO socioData){
		SociosClubEntity socio = servicio.findByDNI(DNI);
		
			socio.setNombre(socioData.getNombre());
			socio.setApellidos(socioData.getApellidos());
			socio.setDireccion(socioData.getDireccion());
			socio.setTelefono(socioData.getTelefono());
			socio.setPassword(passwordEncoder.encode(socioData.getPassword()));
		
		servicio.save(socio);
	}
	
	@DeleteMapping("/sociosClub/{DNI}")
	public void borrarPista(@PathVariable String DNI){
		servicio.deleteById(DNI);
	}
	
	
}
