package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.Model;

public interface Repo extends JpaRepository<Model,Long>{

}
