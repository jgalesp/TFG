package com.paquete.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.paquete.entity.RolesEntity;
import com.paquete.entity.SociosClubEntity;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class UserDetailsImpl implements UserDetails{
	
	private final SociosClubEntity usuario;
	
	
    private Set<RolesEntity> roles = new HashSet<>();
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		List<SimpleGrantedAuthority> authorities = new ArrayList<>();
        for (RolesEntity rol : roles) {
            authorities.add(new SimpleGrantedAuthority(rol.getName()));
        }
        return authorities;
	}
	
	public Set<RolesEntity> getRoles() {
        return roles;
    }
 
    public void setRoles(Set<RolesEntity> roles) {
        this.roles = roles;
    }
     
    public void addRole(RolesEntity role) {
        this.roles.add(role);
    }

	@Override
	public String getPassword() {
		return usuario.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return usuario.getEmail();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
	
	public String getNombre() {
		
		return usuario.getNombre();
	}

}
