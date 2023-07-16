package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.AuthDetailsWP;
import com.example.demo.Repo.AuthDetailsWPRepo;

@RestController
@CrossOrigin("http://localhost:3000/")
public class AuthDetailsWPCont {
	
	@Autowired
	private AuthDetailsWPRepo repo;
	
	@GetMapping("/getAuthDetails/{id}")
	public AuthDetailsWP getAuthDeatil(@PathVariable Long id)
	{
	    System.err.println("Getting data for Author "+ id);
		return repo.findById(id).orElse(null);
		
	}
	
	@GetMapping("/getAuthDetailsemail/{email}")
	public List<AuthDetailsWP>getAuthdetailsWP(@PathVariable String email)
	{
		System.out.println("Getting author details by email for email"+email);
		return repo.findByEmail(email);	
	}
	
	@PostMapping("/postAuthDetails")
	public void postAuthDeatils(@RequestBody AuthDetailsWP auth1)
	{
		System.out.println("Saving details for author " + auth1.getName());
		repo.save(auth1);
	}
	

}
