package com.paquete.security;

import java.util.Date;
import java.util.stream.Collectors;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Header;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;



@Service
public class JwtTokenProvider {
	private final static String ACCESS_TOKEN_SECRET = "$2a$10$nfWGTI7jxPdXjtOpqGcr9eWIzgTsDhS0K1U/O/nkejXNV0bxSYahy";
	private final static Long ACCESS_TOKEN_VALIDITY_SECONDS = 2_592_000L;
	
	 public String generarToken(Authentication authentication) {
		 String username = authentication.getName();
		 
		 Date fechaActual = new Date();
		 Date fechaExpiracion = new Date(fechaActual.getTime()+ ACCESS_TOKEN_VALIDITY_SECONDS);
		 
		 final String authorities = authentication.getAuthorities().stream()
					.map(GrantedAuthority::getAuthority)
					.collect(Collectors.joining(","));
		 String token = 
				 Jwts
				 .builder()
				 .setHeaderParam(Header.TYPE, Header.JWT_TYPE)
				 .setSubject(username)
				 
				 .setIssuedAt(fechaExpiracion)
				 .signWith(Keys.hmacShaKeyFor(ACCESS_TOKEN_SECRET.getBytes()))
				 .claim("Roles", authorities)
				 .compact();
		 
		 return token;
	 }
	 
	 public String obtenerUsernameDelJWT(String token) {
		 Claims claims = Jwts.parser().setSigningKey(ACCESS_TOKEN_SECRET).parseClaimsJws(token).getBody();
		 return claims.getSubject();
	 }
	 
	
	 
}
