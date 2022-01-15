package com.devsuperior.vinimovies.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.vinimovies.entities.Score;
import com.devsuperior.vinimovies.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
}
