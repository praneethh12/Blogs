package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.AuthPic;
import com.example.demo.Repo.AuthPicInter;

@RestController
@CrossOrigin("http://localhost:3000/")
public class AuthPicCont {
	
	@Autowired
	private AuthPicInter myrep;
	
	
	@GetMapping("/getAuthPic/{authid}")
	public AuthPic getAuthPics(@PathVariable Long authid)
	{
		System.out.println("Get also workign fine");
		return myrep.findById(authid).orElse(null);
	}
	
	@PostMapping("/insertAuthPic")
	public void postAuthPics(@RequestBody AuthPic auth1)
	{
		System.out.println("Working fine");
		myrep.save(auth1);
	}
	

}
