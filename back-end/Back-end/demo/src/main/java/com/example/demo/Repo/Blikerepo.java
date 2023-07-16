package com.example.demo.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.Blikehist;

public interface Blikerepo extends JpaRepository<Blikehist, Long>{
	
	public List<Blikehist> findByauthid(Long authid); 

}
