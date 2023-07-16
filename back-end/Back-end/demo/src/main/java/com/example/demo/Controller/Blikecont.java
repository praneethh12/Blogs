package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Blikehist;
import com.example.demo.Repo.Blikerepo;

@RestController
@CrossOrigin("http://localhost:3000/")
public class Blikecont {
	
	@Autowired
	private Blikerepo myrepo;
	
	@GetMapping("/getlike/{authid}")
	public List<Blikehist> getLikes(@PathVariable long authid)
	{
		System.out.println("Getting likes for author :" + authid);
		return myrepo.findByauthid(authid);
	}
	
	@PostMapping("/insertlike")
	public void insertLikes(@RequestBody Blikehist data)
	{
		System.out.println("Like inserted");
		myrepo.save(data);
		
		
	}

}
