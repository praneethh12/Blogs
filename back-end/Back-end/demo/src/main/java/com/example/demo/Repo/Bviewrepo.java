package com.example.demo.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.Bviewhist;

public interface Bviewrepo extends JpaRepository<Bviewhist, Long>{
	
	List<Bviewhist> findByauthid(Long authid);
}
