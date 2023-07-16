package com.example.demo.Controller;

import java.awt.PageAttributes.MediaType;
import java.io.IOException;
import java.util.Optional;

import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.Model.AuthDetails;
import com.example.demo.Repo.AuthDetailsRepo;
import com.example.demo.Utils.ImageUtils;

@RestController
@CrossOrigin("http://localhost:3000/")
public class AuthDetailsCont {
	
	@Autowired
	private AuthDetailsRepo myRepo;
	
	@PostMapping("/insertAuth")
	public void insertAuths(@RequestParam("image") MultipartFile file) throws IOException
	{
		System.out.println("Coming here");
		
		AuthDetails auth = myRepo.save(AuthDetails.builder()
				.name("Adi")
		        .bio("Hello")
		        .authpic(ImageUtils.compress(file.getBytes()))
		        .build());
	}
	
	@GetMapping("/getAuth")
	public ResponseEntity<?> getAuths()
	{
		java.util.List<AuthDetails> auth = myRepo.findAll();
		
		byte[] ans = ImageUtils.decompress(auth.get(0).getAuthpic());
		
		return ResponseEntity.status(HttpStatus.OK).contentType(org.springframework.http.MediaType.valueOf("image/png")).body(ans);		
		
	}
	
	

}
