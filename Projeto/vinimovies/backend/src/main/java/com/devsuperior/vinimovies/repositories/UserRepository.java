package com.devsuperior.vinimovies.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.vinimovies.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByEmail(String email);
}
