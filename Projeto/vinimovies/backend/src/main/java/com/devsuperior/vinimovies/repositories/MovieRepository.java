package com.devsuperior.vinimovies.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.vinimovies.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {
}
