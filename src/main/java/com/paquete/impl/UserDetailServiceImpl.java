package com.paquete.impl;

import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.paquete.entity.RolesEntity;
import com.paquete.entity.SociosClubEntity;
import com.paquete.repositorios.SociosClubRepository;

@Service
public class UserDetailServiceImpl implements UserDetailsService{

	@Autowired
	private SociosClubRepository usuarioRepository;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		SociosClubEntity usuario= usuarioRepository
				.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("El usuario con email "+email+" no existe"));
	
	return new User(email, usuario.getPassword(), this.mapearRoles(usuario.getRoles()));
	
	}
	
	private Collection<? extends GrantedAuthority> mapearRoles(Set<RolesEntity> roles){
			return roles.stream().map(rol-> new SimpleGrantedAuthority(rol.getName())).collect(Collectors.toList());
		
	}

}
