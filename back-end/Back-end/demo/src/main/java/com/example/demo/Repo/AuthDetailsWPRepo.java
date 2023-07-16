package com.example.demo.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.AuthDetailsWP;

public interface AuthDetailsWPRepo extends JpaRepository<AuthDetailsWP, Long>{
	
	
	public List<AuthDetailsWP> findByEmail(String email);

}
