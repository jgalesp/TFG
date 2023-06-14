package com.paquete.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.paquete.dto.InscripcionDTO;
import com.paquete.entity.EventosEntity;
import com.paquete.entity.SociosClubEntity;
import com.paquete.repositorios.EventosRepository;
import com.paquete.repositorios.SociosClubRepository;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class InscribirSocioEvento {

	 @Autowired
	    private SociosClubRepository socioRepository;
	    
	    @Autowired
	    private EventosRepository eventoRepository;
	    
	    @PostMapping("/inscripcion")
	    public ResponseEntity<?> inscribirSocioEnEvento(@RequestBody InscripcionDTO request) {
	        SociosClubEntity socio = socioRepository.findById(request.getDni()).orElse(null);
	        EventosEntity evento = eventoRepository.findById(request.getIdEvento()).orElse(null);
	        
	        if (socio == null || evento == null) {
	            return ResponseEntity.badRequest().body("Socio o evento no encontrado");
	        }
	        
	        socio.getEventos().add(evento);
	        evento.getSocios().add(socio);
	        
	        socio = socioRepository.save(socio);
	        evento = eventoRepository.save(evento);

	        if (socio != null && evento != null) {
	            return ResponseEntity.ok("Socio inscrito en el evento correctamente");
	        } else {
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al inscribir al socio en el evento");
	        }
	    }
	
	
}
