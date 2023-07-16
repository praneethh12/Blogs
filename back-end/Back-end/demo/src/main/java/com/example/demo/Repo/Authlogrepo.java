package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.Authlogin;

public interface Authlogrepo extends JpaRepository<Authlogin, String>{

}
