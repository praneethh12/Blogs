package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Bviewhist;
import com.example.demo.Repo.Bviewrepo;

@RestController
@CrossOrigin("http://localhost:3000/")
public class Bviewcont {
	@Autowired
	private Bviewrepo repo;
	

	@GetMapping("/getView/{authid}")
	public List<Bviewhist> getViews(@PathVariable long authid)
	{
		System.out.println("Views retrived for author " +authid );
		return repo.findByauthid(authid);	
		
	}
	
	@PostMapping("/postView")
	public void postViews(@RequestBody Bviewhist data1)
	{
		System.out.println("Saved to Blogs view history");
		repo.save(data1);
	}
	
	

}
