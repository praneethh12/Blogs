package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.AuthODetalils;
import com.example.demo.Repo.AuthODetailsRepo;

@RestController
public class AuthODetailsCont {
	
	@Autowired
	private AuthODetailsRepo myRepo;
	
	@GetMapping("/getAuthDet/{authid}")
	public AuthODetalils getAuthDetails(@PathVariable Long authid)
	{
		System.out.println("Getting Bio of author  : " + authid);
		return myRepo.findById(authid).orElse(null);
	}
	
	@PostMapping("/postAuthDet")
	public void postAuthDeatils(@RequestBody AuthODetalils auth)
	{
		myRepo.save(auth);
		
	}

}
